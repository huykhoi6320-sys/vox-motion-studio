import React from 'react';
import {useCurrentFrame,interpolate} from 'remotion';
import {C,Stage,Heading,Caption,enter,clamp} from '../design';
export const Community=()=>{const f=useCurrentFrame();return <Stage label="TƯƠNG QUAN" number="09">
<Heading size={86}>Kết nối<br/>cần người thật.</Heading>
<svg width="1080" height="850" viewBox="0 0 1080 850" style={{position:'absolute',top:570}} aria-label="Minh họa các thành viên cộng đoàn quanh một chiếc bàn">
<ellipse cx="535" cy="620" rx="370" ry="88" fill="#20353115"/>
{[280,540,800].map((x,i)=><g key={x} style={{opacity:enter(f,10+i*22),transform:`translateY(${(1-enter(f,10+i*22))*80}px)`}}><circle cx={x} cy={240+(i===1?-60:0)} r="70" fill={i===1?C.coral:C.ink}/><path d={`M${x-105} 570V${390+(i===1?-60:0)}Q${x} ${260+(i===1?-60:0)} ${x+105} ${390+(i===1?-60:0)}V570Z`} fill={i===1?C.coral:C.mint}/></g>)}
<ellipse cx="535" cy="575" rx="365" ry="125" fill={C.lime} stroke={C.ink} strokeWidth="4"/>
<path d="M230 600V740M840 600V740" stroke={C.ink} strokeWidth="13"/>
<path d="M400 530Q540 450 675 530" stroke={C.ink} fill="none" strokeWidth="5" strokeDasharray="12 10" strokeDashoffset={-f*.7}/>
</svg>
<div data-safe style={{position:'absolute',left:100,top:1370,fontSize:37,fontWeight:700,opacity:enter(f,95)}}>GIA ĐÌNH  ·  BẠN BÈ  ·  CỘNG ĐOÀN</div>
<Caption text="Một tin nhắn không thay được mọi cuộc gặp. Hãy dành thời gian cho nhau."/>
</Stage>};
