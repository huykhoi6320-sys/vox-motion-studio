import fs from 'node:fs';
import assert from 'node:assert/strict';
const p=JSON.parse(fs.readFileSync('projects/demo/project.json','utf8'));
assert.equal(p.fps,30);assert.equal(p.width,1080);assert.equal(p.height,1920);
assert.equal(p.scenes.length,12);
assert.equal(p.scenes.reduce((n,s)=>n+s.seconds,0),p.durationSeconds);
assert.equal(p.durationSeconds,66);
for(const s of p.scenes){assert(s.seconds>0&&s.title&&s.narration);}
assert(fs.existsSync('public/'+p.music),'Missing score');
for(const name of ['DejaVuSans.ttf','DejaVuSans-Bold.ttf','DejaVuSerif.ttf'])assert(fs.existsSync('public/assets/fonts/'+name));
const video=fs.readFileSync('src/video.tsx','utf8');
const durations=[...video.matchAll(/Sequence name="[^\"]+" durationInFrames=\{(\d+)\}/g)].map(m=>+m[1]);
const transitions=[...video.matchAll(/durationInFrames:12/g)].length;
assert.equal(durations.length,12);assert.equal(transitions,11);
assert.equal(durations.reduce((a,b)=>a+b,0)-12*transitions,1980);
assert(!/https?:\/\//.test(video),'No runtime hotlinks');
console.log('Validated: 12 scenes, 11 transitions, 1980 frames / 66s; local fonts and original score.');
