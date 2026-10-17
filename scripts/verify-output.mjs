import {execFileSync} from 'node:child_process';
import assert from 'node:assert/strict';
import fs from 'node:fs';
const p=JSON.parse(execFileSync('ffprobe',['-v','error','-show_streams','-show_format','-of','json','out/vox-short.mp4'],{encoding:'utf8'}));
const v=p.streams.find(s=>s.codec_type==='video'),a=p.streams.find(s=>s.codec_type==='audio');
assert(v);assert(a);assert.equal(v.codec_name,'h264');assert.equal(v.width,1080);assert.equal(v.height,1920);assert.equal(v.r_frame_rate,'30/1');assert.equal(v.pix_fmt,'yuv420p');assert.equal(Number(v.nb_frames),1980);assert(Math.abs(Number(p.format.duration)-66)<.1);assert.equal(a.codec_name,'aac');
fs.writeFileSync('out/ffprobe.json',JSON.stringify(p,null,2));
console.log('Verified: actual H.264 MP4 / 1080x1920 / 30fps / 1980 frames / 66s / AAC original score.');
