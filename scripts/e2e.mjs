#!/usr/bin/env node
/**
 * COLORA Learning Studio V11.5 real Chromium smoke test.
 * Used only on preview branch in CI; no employee/student data or network calls.
 * Prerequisites: playwright, running static HTTP server on 127.0.0.1:4173.
 */
import assert from 'node:assert/strict';
import fs from 'node:fs';
import {chromium} from 'playwright';
const origin=process.env.COLORA_E2E_URL||'http://127.0.0.1:4173';
const browser=await chromium.launch({headless:true});
let count=0;
async function check(viewport,name){
 const context=await browser.newContext({viewport,acceptDownloads:true,reducedMotion:'reduce'});
 const page=await context.newPage();const errors=[];
 page.on('pageerror',error=>errors.push(error.message));
 const goto=async route=>{await page.locator('button[data-nav="'+route+'"]:visible').first().click();await page.waitForTimeout(60)};
 try{
  await page.goto(origin,{waitUntil:'networkidle',timeout:25000});
  await page.locator('h1').first().waitFor();
  assert((await page.locator('h1').first().innerText()).includes('Understand the brand'),'Home page title');
  if(name==='mobile'){
   const overflow=await page.evaluate(()=>({width:innerWidth,doc:document.documentElement.scrollWidth,body:document.body.scrollWidth}));
   assert(overflow.doc<=overflow.width+3&&overflow.body<=overflow.width+3,'Mobile page has horizontal overflow: '+JSON.stringify(overflow));
   assert.equal(await page.locator('nav.mobile-nav button:visible').count(),7,'Seven mobile navigation buttons must remain reachable');
  }
  await goto('work');
  assert(await page.locator('.lab-card').count()===4,'All simulated gemstone labs must render');
  assert(await page.locator('.review-sheet').count()===3,'Three role work samples with management rubrics required');
  assert(await page.locator('.training-visual svg').count()>=3,'Technical training illustrations missing');
  assert((await page.locator('.training-visual-head').first().innerText()).includes('MÔ PHỎNG'),'Visuals need explicit mock labeling');
  const r=page.locator('select[data-review-rating="WS-01"]');
  assert.equal(await r.count(),3,'Reviewer rubric needs three criteria');
  for(const field of await r.all())await field.selectOption('4');
  await page.locator('#obs-WS-01').fill('Đã đối chiếu top/side/back, L×W×D và rủi ro độ nhô để kiểm tra theo bản vẽ kỹ thuật.');
  await page.locator('[data-review-save="WS-01"]').click();
  assert((await page.locator('#review-status-WS-01').innerText()).includes('100/100'),'Rubric weighted score must be visible');
  await goto('evidence');
  assert.equal(await page.locator('.evidence-item').count(),10,'Evidence registry must show ten case groups');
  assert((await page.locator('h1').first().innerText()).includes('Hồ sơ kiểm duyệt'),'Evidence heading absent');
  await goto('exam');
  assert(await page.locator('#start-exam').isVisible(),'Pilot exam start not available');
  await page.locator('#start-exam').click();
  assert(await page.locator('.exam-dot').count()===48,'Exam should have exactly 48 questions');
  page.once('dialog',async dialog=>{await dialog.accept()});
  await page.locator('#submit-exam').click();
  await page.locator('#export-pilot').waitFor({state:'visible'});
  const downloadPromise=page.waitForEvent('download');
  page.once('dialog',async dialog=>{await dialog.accept()});
  await page.locator('#export-pilot').click();
  const download=await downloadPromise;
  const data=JSON.parse(fs.readFileSync(await download.path(),'utf8'));
  assert.equal(data.schema,'colora-pilot-v1');
  assert.equal(data.assessment_version,'11.5');
  assert.equal(data.items.length,48);
  for(const field of ['name','email','phone','date','started','user_agent','free_text'])assert(!Object.hasOwn(data,field),'Private field '+field);
  await page.reload({waitUntil:'networkidle'});
  await goto('work');
  assert((await page.locator('#review-status-WS-01').innerText()).includes('100/100'),'Local reviewer sheet not persisted through reload');
  assert.deepEqual(errors,[],'Browser JavaScript errors');
  count++;
  console.log('Browser E2E OK: '+name+', home/work/evidence/exam/voluntary-export/reload');
 }finally{await context.close()}
}
try{
 await check({width:1365,height:860},'desktop');
 await check({width:375,height:812,isMobile:true,deviceScaleFactor:2,hasTouch:true},'mobile');
 console.log('V11.5 E2E PASS: '+count+' Chromium desktop/mobile navigation flows.');
}finally{await browser.close()}
