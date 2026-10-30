import fs from 'node:fs';
import assert from 'node:assert/strict';
import {execFileSync} from 'node:child_process';
const questions=JSON.parse(fs.readFileSync(new URL('../data/questions.json',import.meta.url),'utf8'));
assert.equal(questions.length,89);
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
 assert(typeof q.status==='string'&&q.status.length>3);
 assert(typeof q.source==='string'&&q.source.length>0);
 assert(!JSON.stringify(q).includes('https://'),'Do not publish source urls');
}
assert.deepEqual(counts,{CORE:22,BASIC:18,CARE:24,MKT:25});
assert.equal(questions.filter(q=>q.key.length>1).length,12);
for(const [role,n] of [['BASIC',40],['CARE',46],['MKT',47]]){
 assert.equal(questions.filter(q=>q.role==='CORE'||q.role===role).length,n);
}
execFileSync('node',['--check',new URL('../app.js',import.meta.url).pathname],{stdio:'inherit'});
console.log('Validated 89 Online First questions, all roles, multi-select keys, sources and JavaScript syntax.');
