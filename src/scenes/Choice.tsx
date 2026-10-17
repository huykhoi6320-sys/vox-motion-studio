import React from 'react';
import {useCurrentFrame} from 'remotion';
import {Cpu,UserRound,ArrowRight} from 'lucide-react';
import {C,Stage,Heading,Caption,enter} from '../design';
export const Choice=()=>{const f=useCurrentFrame();return <Stage dark label="ĐIỂM MẤU CHỐT" number="03">
<Heading serif>Ai đang<br/>cầm lái?</Heading>
<div style={{position:'absolute',top:650,left:90,right:120,display:'flex',alignItems:'center',gap:35}}>
<div style={{width:300,height:330,border:'2px solid #B8D8CC',display:'grid',placeItems:'center',opacity:enter(f)}}><Cpu size={150} color={C.mint}/><span style={{fontSize:36,marginTop:-60}}>GỢI Ý</span></div>
<ArrowRight size={100} color={C.coral} style={{translate:`${Math.sin(f/12)*10}px 0`}}/>
<div style={{width:380,height:430,background:C.lime,color:C.ink,display:'grid',placeItems:'center',scale:enter(f,25)}}><UserRound size={180}/><span style={{fontSize:37,fontWeight:700,marginTop:-80}}>BẠN QUYẾT ĐỊNH</span></div>
</div>
<div data-safe style={{position:'absolute',left:90,right:120,top:1190,fontSize:66,fontWeight:700,color:C.lime,opacity:enter(f,65)}}>Trách nhiệm<br/>không tự động hóa.</div>
<Caption dark text="Công cụ có thể rất mạnh. Người chịu trách nhiệm vẫn là bạn."/>
</Stage>};
