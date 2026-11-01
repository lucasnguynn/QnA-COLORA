#!/usr/bin/env node
/**
 * COLORA V11.5: analysis for voluntary, privacy-minimized local pilot exports.
 * Usage: node scripts/analyze-pilot.mjs path/to/pilot1.json path/to/pilot2.json ...
 *        node scripts/analyze-pilot.mjs --self-test
 * Do not upload any private employee/student data or real pilot responses to GitHub.
 * Not psychometric certification: results from public browser code are self-reported.
 */
import fs from 'node:fs';
import assert from 'node:assert/strict';
import {fileURLToPath} from 'node:url';
const data=(name)=>JSON.parse(fs.readFileSync(new URL('../data/'+name,import.meta.url),'utf8'));
const bank=[...data('questions.json'),...['13','14','15','16'].flatMap(x=>data('gem-'+x+'.json')),...data('care-17.json'),...data('applied-cases.json')];
const byId=new Map(bank.map(q=>[q.id,q]));
const roles=new Set(['BASIC','CARE','MKT']);
const minComparableN=10;
const equal=(a,b)=>a.length===b.length&&a.slice().sort((x,y)=>x-y).every((v,i)=>v===b.slice().sort((x,y)=>x-y)[i]);
export function validateRecord(record){
 assert(record&&typeof record==='object'&&!Array.isArray(record),'Record must be object');
 const allowed=new Set(['schema','assessment_version','bank_id','role','assessment_type','items']);
 for(const key of Object.keys(record))assert(allowed.has(key),'Unexpected/possibly personal field '+key);
 assert.equal(record.schema,'colora-pilot-v1');
 assert.equal(record.assessment_version,'11.5','Only current pilot version may be analyzed');
 assert(typeof record.bank_id==='string'&&/^fnv1a32-[0-9a-f]{8}$/.test(record.bank_id),'Invalid bank ID');
 assert(roles.has(record.role),'Unknown role');
 assert.equal(record.assessment_type,'SELF_STUDY_PILOT_NOT_CERTIFICATION');
 assert(Array.isArray(record.items)&&record.items.length===48,'Expected exactly 48 items');
 assert.equal(new Set(record.items.map(x=>x.id)).size,48,'Duplicate item ID');
 const count={CORE:0,APPLIED:0,ROLE:0};
 for(const item of record.items){
  assert(item&&typeof item==='object'&&Object.keys(item).every(k=>['id','selected','correct'].includes(k)),'Unsafe item fields');
  const q=byId.get(item.id);
  assert(q&&['CORE','APPLIED',record.role].includes(q.role),'Item not from this learner role '+item.id);
  count[q.role==='CORE'?'CORE':q.role==='APPLIED'?'APPLIED':'ROLE']++;
  assert(Array.isArray(item.selected)&&new Set(item.selected).size===item.selected.length,'Duplicate selected options');
  assert(item.selected.every(n=>Number.isInteger(n)&&n>=0&&n<4),'Invalid response index');
  assert(typeof item.correct==='boolean','No response correctness');
  assert(item.correct===equal(item.selected,q.key),'Inconsistent correctness for '+item.id);
 }
 assert.deepEqual(count,{CORE:24,APPLIED:8,ROLE:16},'48-item role composition mismatch');
 return true;
}
export function analyze(records){
 assert(Array.isArray(records)&&records.length>0,'Supply at least one export');
 records.forEach(validateRecord);
 const ids=new Set(records.map(x=>x.bank_id));
 assert.equal(ids.size,1,'Cannot combine different question-bank fingerprints');
 const answerMap=new Map();
 for(const record of records)for(const item of record.items){
  const key=record.role+':'+item.id;
  const q=byId.get(item.id);
  if(!answerMap.has(key))answerMap.set(key,{role:record.role,id:item.id,pillar:q.pillar,correct:0,n:0,distractors:[0,0,0,0],unanswered:0});
  const row=answerMap.get(key);row.n++;if(item.correct)row.correct++;if(!item.selected.length)row.unanswered++;
  else for(const j of item.selected)if(!q.key.includes(j))row.distractors[j]++;
 }
 const roleSummaries={};
 for(const role of roles){
  const matching=records.filter(x=>x.role===role),n=matching.length;
  if(!n)continue;
  roleSummaries[role]={n,exports_not_unique_people:true,mean_correct_percent:Math.round(matching.reduce((sum,x)=>sum+x.items.filter(q=>q.correct).length/48*100,0)/n*10)/10,item_n_too_small_for_screening:n<minComparableN};
 }
 const items=[...answerMap.values()].map(x=>({...x,accuracy_percent:Math.round(x.correct/x.n*1000)/10,
    interpretation:x.n<minComparableN?'INSUFFICIENT_ITEM_RESPONSES':x.correct/x.n<.4?'REVIEW_HARD_OR_CONFUSING':x.correct/x.n>.95?'REVIEW_TOO_EASY_OR_CUED':'MONITOR'}));
 const risky=items.filter(x=>x.interpretation.startsWith('REVIEW_')).sort((a,b)=>a.accuracy_percent-b.accuracy_percent);
 return {schema:'colora-pilot-summary-v1',analysis_kind:'DESCRIPTIVE_ONLY_NOT_CERTIFICATION',
  bank_id:[...ids][0],record_count:records.length,role_summaries:roleSummaries,
  item_observations:items.length,items_with_at_least_10_responses:items.filter(x=>x.n>=minComparableN).length,
  item_review_candidates:risky.slice(0,30),
  note:'Each uploaded JSON is an export, not a verified unique employee. No identity verification, no discrimination/reliability inference or HR decisions. No participant names, dates, texts or raw selected answers appear in this summary.'};
}
if(process.argv[1]&&fileURLToPath(import.meta.url)===process.argv[1]){
 const args=process.argv.slice(2);
 if(args.length===1&&args[0]==='--self-test'){
  const make=(role)=>({schema:'colora-pilot-v1',assessment_version:'11.5',bank_id:'fnv1a32-1234abcd',role,assessment_type:'SELF_STUDY_PILOT_NOT_CERTIFICATION',items:[
  ...bank.filter(q=>q.role==='CORE').slice(0,24),
  ...bank.filter(q=>q.role==='APPLIED').slice(0,8),
  ...bank.filter(q=>q.role===role).slice(0,16)
  ].map(q=>({id:q.id,selected:[...q.key],correct:true}))});
  const x=make('BASIC'),y=make('CARE');
  assert(validateRecord(x));
  assert.equal(analyze([x,y]).record_count,2);
  assert.throws(()=>validateRecord({...x,name:'Employee'}),/Unexpected\/possibly personal/);
  assert.throws(()=>validateRecord({...x,items:x.items.map((t,i)=>i===0?{...t,correct:false}:t)}),/Inconsistent correctness/);
  assert.throws(()=>analyze([x,{...y,bank_id:'fnv1a32-abcd1234'}]),/different question-bank/);
  console.log('V11.5 pilot analytics self-test passed: composition, privacy, bank isolation and correctness.');
 }else{
  if(args.length===0)throw Error('Usage: node scripts/analyze-pilot.mjs export1.json export2.json ...');
  const all=args.flatMap(path=>{const parsed=JSON.parse(fs.readFileSync(path,'utf8'));return Array.isArray(parsed)?parsed:[parsed]});
  console.log(JSON.stringify(analyze(all),null,2));
 }
}
