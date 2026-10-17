import React from 'react';
import {useCurrentFrame,interpolate} from 'remotion';
import {Share2,AlertTriangle,UserRound} from 'lucide-react';
import {C,Stage,Heading,Caption,clamp,enter} from '../design';
export const Truth=()=>{const f=useCurrentFrame();return <Stage label="SỰ THẬT" number="04">
<Heading size={85}>Trông thật<br/><span style={{color:C.coral}}>≠</span> là thật.</Heading>
<div style={{position:'absolute',left:175,top:630,width:660,height:660,background:'#FFF9EF',border:'3px solid #203531',rotate:'-4deg',boxShadow:'18px 18px 0 #20353122'}}>
<div style={{height:440,margin:24,background:C.mint,position:'relative',overflow:'hidden'}}><UserRound size={340} strokeWidth={.8} style={{position:'absolute',left:135,top:85}}/>
{Array.from({length:12},(_,i)=><div key={i} style={{position:'absolute',height:2,width:'100%',top:i*38+f%38,background:'#20353122'}}/>)}
<div style={{position:'absolute',top:20,left:20,fontSize:24,background:C.paper,padding:10}}>MÔ PHỎNG • KHÔNG PHẢI TIN THẬT</div></div>
<div style={{fontSize:35,fontWeight:700,margin:'30px'}}>“Tin nóng! Chia sẻ ngay!”</div><Share2 size={37} style={{position:'absolute',right:35,bottom:35}}/>
<div style={{position:'absolute',left:-45,right:-45,top:250,padding:30,background:C.coral,color:C.paper,fontSize:54,fontWeight:700,rotate:'8deg',textAlign:'center',scale:enter(f,65)}}><AlertTriangle size={45}/> CHƯA KIỂM CHỨNG</div>
</div>
<Caption text="Một hình ảnh thuyết phục chưa chắc là bằng chứng. Đừng vội chia sẻ."/>
</Stage>};
