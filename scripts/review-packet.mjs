#!/usr/bin/env node
/**
 * COLORA Review Packet (V11.5)
 * Usage: node scripts/review-packet.mjs --priority=P0 --owner=PRODUCT_TECHNICAL --format=csv > reviewer.csv
 *        node scripts/review-packet.mjs --priority=P0 --format=md > reviewer.md
 *        node scripts/review-packet.mjs --self-test
 * This script is intentionally read-only. It does not approve items or write to GitHub.
 */
import fs from 'node:fs';
import assert from 'node:assert/strict';
import {fileURLToPath} from 'node:url';
const read=n=>JSON.parse(fs.readFileSync(new URL('../data/'+n,import.meta.url),'utf8'));
const bank=[...read('questions.json'),...['13','14','15','16'].flatMap(n=>read('gem-'+n+'.json')),...read('care-17.json'),...read('applied-cases.json')];
const queue=read('item-review-queue.json');
const essentials=read('essentials-review.json');
const evidence=read('p0-evidence-dossiers.json');
const byId=new Map(bank.map(q=>[q.id,q]));
const reviewed=new Map(essentials.items.map(x=>[x.id,x]));
const related=new Map(evidence.groups.flatMap(g=>g.ids.map(id=>[id,g])));
const columns=['id','priority','proposed_owner','question','choices','correct_answers','explanation','application','current_source_tag','evidence_needed','suggested_public_source','blocking_dossier','status','reviewer','reviewed_at','evidence_ref','evidence_version','notes','decision'];
function quoteCsv(x){let s=String(x??'');if(/^[\s]*[=+\-@]/.test(s))s="'"+s;return '"'+s.replace(/"/g,'""').replace(/\r?\n/g,' ')+'"'}
function dataRows(options={}){
 const rows=queue.items.filter(x=>(!options.priority||x.priority===options.priority)&&(!options.owner||x.proposed_owner===options.owner)&&(!options.ids||options.ids.includes(x.id)));
 return rows.map(x=>{
  const q=byId.get(x.id);assert(q,'Review item absent from bank '+x.id);
  const e=reviewed.get(x.id),d=related.get(x.id);
  return {id:x.id,priority:x.priority,proposed_owner:x.proposed_owner,
    question:q.q,choices:q.a.map((y,i)=>'ABCD'[i]+'. '+y).join(' | '),
    correct_answers:q.key.map(i=>'ABCD'[i]).join(' & '),explanation:q.why,application:q.apply,
    current_source_tag:q.source+' / '+q.status,
    evidence_needed:x.required_evidence,
    suggested_public_source:x.source_reference?.url||(d?.support||[]).map(k=>evidence.sources[k]?.url).filter(Boolean).join(' | '),
    blocking_dossier:d?d.status+' | '+d.needed.join(' ; '):'',
    status:e?.review_status||x.review_state,
    reviewer:'',reviewed_at:'',evidence_ref:'',evidence_version:'',notes:'',decision:'PENDING_HUMAN_REVIEW'};
 });
}
function csv(rows){return '\ufeff'+columns.join(',')+'\n'+rows.map(row=>columns.map(k=>quoteCsv(row[k])).join(',')).join('\n')+'\n'}
function md(rows){return '# COLORA - Reviewer packet V11.5\n\n**BẢN NHÁP ĐỂ NGƯỜI CÓ THẨM QUYỀN RÀ SOÁT. KHÔNG TỰ PHÊ DUYỆT.**\n\n'+
 rows.map((r,i)=>'## '+(i+1)+'. '+r.id+' · '+r.priority+' · '+r.proposed_owner+'\n\n'+
 '**Câu hỏi:** '+r.question+'\n\n'+r.choices.split(' | ').join('\n\n')+
 '\n\n**Đáp án hiện tại:** '+r.correct_answers+
 '\n\n**Giải thích hiện tại:** '+r.explanation+
 '\n\n**Áp dụng:** '+r.application+
 '\n\n**Tag nguồn ban đầu:** '+r.current_source_tag+
 '\n\n**Chứng cứ cần tìm:** '+r.evidence_needed+
 (r.suggested_public_source?'\n\n**Trang nguồn tham khảo (chưa xác minh tương thích câu):** '+r.suggested_public_source:'')+
 (r.blocking_dossier?'\n\n**Bất định/rủi ro:** '+r.blocking_dossier:'')+
 '\n\n**Biểu mẫu review của người phụ trách:**\n\n- [ ] Kiểm tra phạm vi câu hỏi, độ đúng đáp án và cách loại nhiễu\n- [ ] Đối chiếu tài liệu nguồn, version, ngày hiệu lực, đúng SKU nếu cần\n- [ ] Kiểm nhận định sai/không rõ/không có bằng chứng, ghi lại hành động\n- Quyết định: PENDING_HUMAN_REVIEW / NEEDS_REVISION / REJECTED / APPROVED (duyệt chỉ có giá trị theo quy trình có thẩm quyền)\n- Người kiểm duyệt: __________\n- Mã/phiên bản bằng chứng phi nhạy cảm: __________\n- Ghi chú: __________\n\n---\n\n').join('')}
function args(argv){
 const o={};
 for(const arg of argv){
  if(arg==='--self-test'){o.selftest=true;continue}
  const m=/^--(priority|owner|format|ids)=(.+)$/.exec(arg);if(!m)throw Error('Unknown arg '+arg);
  o[m[1]]=m[2];
 }
 assert(!o.priority||['P0','P1','P2'].includes(o.priority),'Priority must be P0/P1/P2');
 assert(!o.format||['csv','md'].includes(o.format),'Format must be csv/md');
 if(o.ids)o.ids=o.ids.split(',').map(s=>s.trim()).filter(Boolean);
 return o;
}
export {dataRows,csv,md,args};
if(process.argv[1]===fileURLToPath(import.meta.url)){
 const o=args(process.argv.slice(2));
 if(o.selftest){
  assert.equal(dataRows().length,303);
  assert.equal(dataRows({priority:'P0'}).length,98);
  assert.deepEqual(dataRows({ids:['FN-064']}).map(x=>x.id),['FN-064']);
  assert(csv([{id:'=FAKE',question:'+PWN'}]).includes("'=FAKE"));
  assert(md(dataRows({ids:['FN-037']})).includes('Người kiểm duyệt:'));
  assert(!dataRows().some(x=>x.reviewer||x.reviewed_at||x.decision==='APPROVED'));
  console.log('Reviewer packet QA passed: completeness, filters, no approvals and CSV hardening.');
 }else{
  const rows=dataRows(o);
  if(!rows.length)throw Error('No review items matched the supplied filters');
  process.stdout.write((o.format||'md')==='csv'?csv(rows):md(rows));
 }
}
