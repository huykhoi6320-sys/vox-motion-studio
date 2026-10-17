import fs from 'node:fs';
const p=JSON.parse(fs.readFileSync('projects/demo/project.json','utf8'));
const valid=['hook','stat','image','timeline','icons','quote','outro'];
const errors=[];
if(!Array.isArray(p.scenes)||!p.scenes.length)errors.push('No scenes');
for (const [i,s] of (p.scenes||[]).entries()) {if(!valid.includes(s.kind))errors.push('Unknown scene '+i);if(!(s.seconds>0)||!s.title)errors.push('Bad scene '+i);if(s.image&&!fs.existsSync('public/'+s.image))errors.push('Missing image '+s.image)}
for(const key of ['voiceover','music'])if(p[key]&&!fs.existsSync('public/'+p[key]))errors.push('Missing audio '+p[key]);
if(errors.length){console.error(errors.join('\n'));process.exit(1)}
console.log('Validated',p.scenes.length,'scenes',p.scenes.reduce((a,s)=>a+s.seconds,0),'seconds');
