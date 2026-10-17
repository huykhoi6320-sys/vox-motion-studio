import React from 'react';
import {useCurrentFrame} from 'remotion';
import {HeartHandshake,GraduationCap,HandHeart,ArrowUpRight} from 'lucide-react';
import {C,Stage,Heading,Caption,enter} from '../design';
export const Service=()=>{const f=useCurrentFrame();return <Stage label="BÁC ÁI" number="10">
<Heading serif>Đưa đức tin<br/>ra đời sống.</Heading>
{[{t:'Thăm người già',Icon:HeartHandshake,c:C.mint,top:650,r:-4},{t:'Giúp bạn học',Icon:GraduationCap,c:C.lime,top:900,r:3},{t:'Phục vụ người khó khăn',Icon:HandHeart,c:'#E9AA96',top:1150,r:-2}].map(({t,Icon,c,top,r},i)=><div key={t} style={{position:'absolute',left:100,right:135,top,height:190,padding:35,background:c,rotate:`${r}deg`,border:'2px solid #203531',boxShadow:'10px 12px 0 #203531',display:'flex',gap:25,alignItems:'center',scale:enter(f,i*38)}}><Icon size={90}/><span style={{fontSize:i===2?38:47,fontWeight:700}}>{t}</span></div>)}
<Caption text="Biến ý tốt thành việc thật. Bắt đầu từ người đang ở gần bạn."/>
</Stage>};
