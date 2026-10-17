import React from 'react';
import {useCurrentFrame,interpolate} from 'remotion';
import {C,Stage,Heading,Caption,clamp,enter} from '../design';
export const Prayer=()=>{const f=useCurrentFrame();return <Stage dark label="ĐỜI SỐNG CẦU NGUYỆN" number="08">
<Heading serif>Dành chỗ cho<br/><span style={{color:C.lime}}>thinh lặng.</span></Heading>
<svg width="1080" height="900" viewBox="0 0 1080 900" style={{position:'absolute',top:540}} aria-label="Minh họa ngọn nến và thánh giá">
<circle cx="540" cy="440" r={230+Math.sin(f/30)*12} fill="#E2E999" opacity=".07"/>
<path d="M540 100V355M440 190H640" stroke={C.mint} strokeWidth="13" strokeLinecap="round"/>
<path d="M540 430 Q470 515 535 545 Q610 530 540 430" fill={C.coral} transform={`rotate(${Math.sin(f/15)*3} 540 535)`}/>
<rect x="477" y="555" width="126" height="255" rx="9" fill={C.paper}/><rect x="530" y="540" width="5" height="15" fill={C.ink}/>
<path d="M430 825H650" stroke={C.mint} strokeWidth="5"/>
</svg>
<div style={{position:'absolute',left:720,top:1060,width:150,height:270,border:'5px solid #F1EBDC55',borderRadius:22,rotate:'15deg',opacity:interpolate(f,[0,100],[.9,.12],clamp)}}><div style={{height:5,background:C.coral,width:180,position:'absolute',top:130,left:-15,rotate:'-50deg'}}/></div>
<Caption dark text="AI có thể gợi ý câu chữ. Cầu nguyện là cuộc gặp gỡ của chính bạn với Chúa."/>
</Stage>};
