import fs from 'node:fs';
import assert from 'node:assert/strict';
import {execFileSync} from 'node:child_process';
const questions=JSON.parse(fs.readFileSync(new URL('../data/questions.json',import.meta.url),'utf8'));
const lessons=JSON.parse(fs.readFileSync(new URL('../data/lessons.json',import.meta.url),'utf8'));
assert.equal(questions.length,206);
assert.equal(lessons.length,12);
const chapters=new Set(lessons.map(l=>l.id));
assert.equal(chapters.size,12);
for(const l of lessons){assert(l.title&&l.subtitle);assert(l.points.length>=4);assert(l.url.startsWith('https://'))}
const counts={CORE:0,BASIC:0,CARE:0,MKT:0};const ids=new Set();const pillars=new Set(['THƯƠNG HIỆU','SẢN PHẨM','KHÁCH HÀNG','HÀNH TRÌNH']);
let multi=0;
for(const q of questions){
 assert(!ids.has(q.id),'Duplicate '+q.id);ids.add(q.id);
 assert(Object.hasOwn(counts,q.role));counts[q.role]++;
 assert(pillars.has(q.pillar));
 assert(chapters.has(q.chapter),'Unknown chapter '+q.id);
 assert(Array.isArray(q.a)&&q.a.length===4);assert.equal(new Set(q.a).size,4,'Duplicated choice '+q.id);
 assert(q.key.length>=1&&q.key.length<=3);assert.equal(new Set(q.key).size,q.key.length);
 assert(q.key.every(i=>Number.isInteger(i)&&i>=0&&i<=3));
 assert(q.q.length>25&&q.why.length>20&&q.apply.length>20);
 assert(!JSON.stringify(q).includes('https://'),'Do not publish source URLs inside question data');
 if(q.key.length>1)multi++;
}
assert.deepEqual(counts,{CORE:139,BASIC:18,CARE:24,MKT:25});
assert.equal(multi,12);
assert.equal(questions.filter(q=>q.role==='CORE'&&q.id.startsWith('FN-')).length,117);
for(const [role,n] of [['BASIC',157],['CARE',163],['MKT',164]])assert.equal(questions.filter(q=>q.role==='CORE'||q.role===role).length,n);
execFileSync('node',['--check',new URL('../app.js',import.meta.url).pathname],{stdio:'inherit'});
console.log('Validated 206 questions, 12 lessons, role paths, answer keys, JS syntax.');
