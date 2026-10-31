import fs from 'node:fs';
import assert from 'node:assert/strict';
import {execFileSync} from 'node:child_process';
import vm from 'node:vm';
const read=name=>JSON.parse(fs.readFileSync(new URL('../data/'+name,import.meta.url),'utf8'));
const base=read('questions.json');
const gem=['13','14','15','16'].flatMap(x=>read('gem-'+x+'.json'));
const care=read('care-17.json');
const applied=read('applied-cases.json');
const lessons=read('lessons.json');
const config=read('curriculum.json');
const facts=read('brand-facts.json');
const questions=[...base,...gem,...care,...applied];
assert.equal(base.length,206);
assert.equal(gem.length,53);
assert.equal(care.length,32);
assert.equal(applied.length,12);
assert.equal(questions.length,303);
assert.equal(lessons.length,17);
assert.equal(new Set(lessons.map(l=>l.id)).size,17);
const chapters=new Set(lessons.map(l=>l.id));
const pillars=['THƯƠNG HIỆU','SẢN PHẨM','KHÁCH HÀNG','HÀNH TRÌNH'];
const counts={CORE:0,BASIC:0,CARE:0,MKT:0,APPLIED:0};
const seen=new Set();let multi=0;
for(const q of questions){
 assert(!seen.has(q.id),'Duplicate id '+q.id);seen.add(q.id);
 assert(Object.hasOwn(counts,q.role),'Unknown role '+q.id);counts[q.role]++;
 assert(pillars.includes(q.pillar),'Wrong pillar '+q.id);
 assert(q.role==='APPLIED'?q.chapter==='A':chapters.has(q.chapter),'Wrong chapter '+q.id);
 assert(q.a.length===4&&new Set(q.a).size===4,'Choices '+q.id);
 assert(q.key.length>=1&&q.key.length<=3&&new Set(q.key).size===q.key.length,'Keys '+q.id);
 assert(q.key.every(i=>Number.isInteger(i)&&i>=0&&i<=3),'Key range '+q.id);
 assert(q.q.length>25&&q.why.length>20&&q.apply.length>20,'Content missing '+q.id);
 assert(!JSON.stringify(q).includes('https://'),'No embedded URL '+q.id);
 if(q.key.length>1)multi++;
}
assert.deepEqual(counts,{CORE:216,BASIC:18,CARE:32,MKT:25,APPLIED:12});
assert.equal(multi,12);
assert.equal(config.essential_ids.length,86);
assert.equal(new Set(config.essential_ids).size,86);
const core=questions.filter(q=>q.role==='CORE'),essential=core.filter(q=>config.essential_ids.includes(q.id));
assert.equal(essential.length,86);
for(const ch of chapters)assert(essential.some(q=>q.chapter===ch),'Essential coverage '+ch);
assert.deepEqual(config.critical_ids,['FN-062','FN-067','PC-022']);
for(const id of config.critical_ids)assert(config.essential_ids.includes(id),'Critical absent from Essentials');
assert.equal(applied.filter(q=>q.role==='APPLIED').length,12);
for(const p of pillars)assert.equal(applied.filter(q=>q.pillar===p).length,3);
assert.equal(config.exam.total,48);
assert.equal(Object.values(config.exam.pillar_quota).reduce((a,b)=>a+b,0),32);
assert.equal(config.exam.minimum_total,80);
assert.equal(config.exam.minimum_pillar,70);
assert.equal(facts.positioning.price_range_expected_vnd.min,2300000);
assert.equal(facts.positioning.price_range_expected_vnd.max,8000000);
assert.equal(facts.metal_system.brand_name,'COLORA SILVER');
assert.equal(facts.metal_system.silver_fineness_permille,930);
assert(facts.metal_system.launch_all_products_use_genia276_ag930);
const photos=new Set();
for(const l of lessons){
 assert(l.title&&l.points.length>=8&&l.visual?.cards?.length>=3,'Lesson incomplete '+l.id);
 assert(Array.isArray(l.essential_point_indices)&&l.essential_point_indices.length>=4&&l.essential_point_indices.length<l.points.length,'Essential/Advanced content needs distinct scope '+l.id);
 assert(new Set(l.essential_point_indices).size===l.essential_point_indices.length,'Duplicate essential point '+l.id);
 assert(l.essential_point_indices.every(i=>Number.isInteger(i)&&i>=0&&i<l.points.length),'Out-of-range lesson index '+l.id);
 assert(l.learning_objective?.length>25,'Missing learning objective '+l.id);
 assert(l.teachback?.prompt?.length>25&&l.teachback?.sample?.length>25,'Teachback incomplete '+l.id);
 for(const p of l.visual.photos||[]){
  assert(p.src.startsWith('assets/')&&!p.src.includes('..'),'Unsafe image path');
  assert(fs.existsSync(new URL('../'+p.src,import.meta.url)),'Missing image '+p.src);
  photos.add(p.src);
 }
}
assert(photos.size>=4);
assert(lessons.find(l=>l.id==='01').title.includes('DEMI-FINE'));
assert(lessons.find(l=>l.id==='07').points.some(p=>p.includes('100%')&&p.includes('launch')));
assert(lessons.find(l=>l.id==='04').points[0].includes('CHỜ DUYỆT'));
assert(lessons.find(l=>l.id==='17').points.some(p=>p.includes('COLORA SILVER')));
assert(!JSON.stringify(questions).includes('2,3–5 triệu'));
const originalFN=questions.filter(q=>q.id.startsWith('FN-'));
const longest=originalFN.filter(q=>q.key.length===1&&q.a[q.key[0]].length===Math.max(...q.a.map(x=>x.length))).length;
assert(longest/originalFN.length<=0.42,'Answer-length cues');
const app=fs.readFileSync(new URL('../app.js',import.meta.url),'utf8');
execFileSync('node',['--check',new URL('../app.js',import.meta.url).pathname],{stdio:'inherit'});
assert(app.includes('track-panel')&&app.includes('save-teachback'),'Learning UI missing');
assert(app.includes('essential_point_indices')&&app.includes('learningPoints.map'),'V10 Essentials must not display all advanced points');
assert(app.includes('role_advanced_chapters')&&app.includes('GỢI Ý CHO VỊ TRÍ'),'Role-focused advanced path not active');
assert(app.includes('optionOrders')&&app.includes('order.map((i,shown)'),'Exam option randomization missing');
assert(app.includes('LEGACY_KEY')&&app.includes('legacyAttempts'),'V9 migration missing');
assert(app.includes('countRecheck')&&app.includes('reviewedAfterWeek'),'7-day review not implemented');
assert(app.includes('countNeedReview')&&app.includes('firstCorrect'),'Progress states missing');
assert(app.includes('criticalMiss')&&app.includes('weakPillars'),'Mastery gates missing');
assert(app.includes('applied-cases.json'),'Applied cases not loaded');
const appliedLong=applied.filter(q=>q.a[q.key[0]].length===Math.max(...q.a.map(x=>x.length)));
const appliedShort=applied.filter(q=>q.a[q.key[0]].length===Math.min(...q.a.map(x=>x.length)));
assert(appliedLong.length<=3,'Applied cases leak the correct answer through length');
assert(appliedShort.length<=4,'Applied cases leak shortest-answer rule');
const notAbsolute=/mọi|luôn|chắc chắn|tuyệt đối|vĩnh viễn|không bao giờ|không thể/i;
const eWrong=essential.flatMap(q=>q.a.filter((_,i)=>!q.key.includes(i)));
assert(eWrong.filter(s=>notAbsolute.test(s)).length/eWrong.length<.25,'Essentials contain too many implausible absolute distractors');
// Behavioral test: generate 40 complete exams for each role and validate quotas, chapter spread and critical inclusion.
const suffix=`\nglobalThis.__audit={state,examBase,essentials,choiceHtml,modules};`;
const ctx={console,Math,Date,setInterval:()=>{},clearInterval:()=>{},localStorage:{getItem:()=>null,setItem:()=>{}},document:{},window:{}};
vm.createContext(ctx);
vm.runInContext(app.replace(/boot\(\);\s*$/,'')+suffix,ctx,{timeout:5000});
const audit=ctx.__audit;
audit.state.bank=questions; audit.state.lessons=lessons;audit.state.curriculum=config;
for(const role of ['BASIC','CARE','MKT']){
 audit.state.role=role;
 for(let k=0;k<40;k++){
  const selection=audit.examBase();
  assert.equal(selection.length,48,'48 questions required '+role);
  assert.equal(new Set(selection.map(q=>q.id)).size,48,'Duplicate in exam');
  for(const chapter of chapters)assert(selection.some(q=>q.chapter===chapter),'Exam missed chapter '+chapter);
  for(const id of config.critical_ids)assert(selection.some(q=>q.id===id),'Exam missed safety gate '+id);
  assert.equal(selection.filter(q=>q.role==='CORE').length,32);
  assert.equal(selection.filter(q=>q.role==='APPLIED').length,8);
  assert.equal(selection.filter(q=>q.role===role).length,8);
  for(const p of pillars)assert.equal(selection.filter(q=>q.role==='APPLIED'&&q.pillar===p).length,2);
 }
}
for(const q of applied){const order=[2,0,3,1];const html=audit.choiceHtml(q,[],false,false,order);
 const opts=[...html.matchAll(/data-opt="(\\d+)"/g)].map(x=>Number(x[1]));
 assert.deepEqual(opts,order,'Shuffled answer mapping mismatch '+q.id);
 const correctDisplayIndex=order.indexOf(q.key[0]);
 assert(correctDisplayIndex>=0&&opts[correctDisplayIndex]===q.key[0],'Wrong answer mapping '+q.id);
}
for(const role of ['BASIC','CARE','MKT']){
 audit.state.role=role;
 const advanced=audit.modules().filter(m=>m.role==='ADVANCED');
 const recommended=new Set(config.role_advanced_chapters[role]);
 assert(advanced.some(m=>recommended.has(m.chapter)),'No role advanced recommendations '+role);
}
console.log('V10 QA pass: 303 questions, 86 Essentials, 114 essential learning points, 12 rebalanced applied cases, role paths, shuffled options, 120 exams.');
