import fs from 'node:fs';
import assert from 'node:assert/strict';
import {execFileSync} from 'node:child_process';
const questions=JSON.parse(fs.readFileSync(new URL('../data/questions.json',import.meta.url),'utf8'));
assert.equal(questions.length,176);
const counts={CORE:0,BASIC:0,CARE:0,MKT:0},ids=new Set(),pillars=new Set(['THƯƠNG HIỆU','SẢN PHẨM','KHÁCH HÀNG','HÀNH TRÌNH']);
for(const q of questions){
 assert(!ids.has(q.id),'Duplicate id '+q.id);ids.add(q.id);
 assert(Object.hasOwn(counts,q.role));counts[q.role]++;
 assert(pillars.has(q.pillar));assert.equal(q.a.length,4);
 assert.equal(new Set(q.a).size,4,'Duplicate answers '+q.id);
 assert(q.key.length>=1&&q.key.length<=3);
 assert.equal(new Set(q.key).size,q.key.length);
 assert(q.key.every(i=>Number.isInteger(i)&&i>=0&&i<4));
 assert(q.q.length>25&&q.why.length>20&&q.apply.length>20);
 assert(!JSON.stringify(q).includes('https://'),'Do not publish source urls');
}
assert.deepEqual(counts,{CORE:39,BASIC:40,CARE:47,MKT:50});
assert.equal(questions.filter(q=>q.key.length>1).length,29);
for(const [role,n] of [['BASIC',79],['CARE',86],['MKT',89]]){
 assert.equal(questions.filter(q=>q.role==='CORE'||q.role===role).length,n);
}
execFileSync('node',['--check',new URL('../app.js',import.meta.url).pathname],{stdio:'inherit'});
console.log('Validated 176 questions, all roles, multi-select keys, sources and JavaScript syntax.');
