import fs from 'node:fs';
import {spawnSync} from 'node:child_process';
fs.mkdirSync('out',{recursive:true});
const cmd=process.platform==='win32'?'npx.cmd':'npx';
let r=spawnSync(process.execPath,['scripts/validate.mjs'],{stdio:'inherit'});if(r.status!==0)process.exit(1);
r=spawnSync(cmd,['remotion','render','src/index.ts','EditorialShort','out/vox-short.mp4','--codec=h264','--pixel-format=yuv420p'],{stdio:'inherit'});if(r.status!==0)process.exit(1);
const b=fs.readFileSync('out/vox-short.mp4');if(b.length<5000||b.toString('ascii',4,12).indexOf('ftyp')===-1)throw Error('Not a valid MP4');
console.log('Playable MP4 container generated: out/vox-short.mp4 ('+b.length+' bytes)');
