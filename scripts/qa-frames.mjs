import {bundle} from '@remotion/bundler';
import {openBrowser,selectComposition,renderStill} from '@remotion/renderer';
import fs from 'node:fs';
const serveUrl=await bundle({entryPoint:'src/index.ts'});
const browser=await openBrowser('chrome',{browserExecutable:'/usr/bin/chromium'});
try{
const composition=await selectComposition({serveUrl,id:'EditorialShort',puppeteerInstance:browser});
fs.mkdirSync('out/qa',{recursive:true});
const frames=[50,200,350,510,690,870,1050,1230,1410,1590,1740,1910];
for(const frame of frames){await renderStill({serveUrl,composition,frame,puppeteerInstance:browser,output:`out/qa/frame-${frame}.png`,scale:.5});console.log('Rendered QA frame',frame);}
}finally{await browser.close({silent:true});}
