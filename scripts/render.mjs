import fs from 'node:fs';
import {spawnSync} from 'node:child_process';
const run=(cmd,args)=>{const r=spawnSync(cmd,args,{stdio:'inherit'});if(r.error)throw r.error;if(r.status!==0)process.exit(r.status??1);};
fs.mkdirSync('out',{recursive:true});
run(process.execPath,['scripts/validate.mjs']);
run(process.platform==='win32'?'npx.cmd':'npx',['--no-install','remotion','render','src/index.ts','EditorialShort','out/vox-short.mp4','--codec=h264','--pixel-format=yuv420p','--overwrite']);
const b=fs.readFileSync('out/vox-short.mp4');
if(b.length<5000||!b.subarray(4,12).toString('ascii').includes('ftyp'))throw Error('Invalid MP4 container');
console.log(`Actual MP4 generated: out/vox-short.mp4 (${b.length} bytes)`);
