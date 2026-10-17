import React from 'react';
import {useCurrentFrame} from 'remotion';
import {LockKeyhole,KeyRound,FileHeart,MessagesSquare} from 'lucide-react';
import {C,Stage,Heading,Caption,Circle,enter} from '../design';
export const Privacy=()=>{const f=useCurrentFrame();return <Stage label="PHẨM GIÁ & RIÊNG TƯ" number="07">
<Heading serif>Không phải<br/>điều gì cũng gửi.</Heading>
<Circle x={310} y={660} size={370} color={C.ink}><LockKeyhole size={180} color={C.lime}/></Circle>
{[{t:'Mật khẩu',Icon:KeyRound,x:100,y:620,r:-8},{t:'Hồ sơ riêng',Icon:FileHeart,x:540,y:1050,r:6},{t:'Chuyện người khác',Icon:MessagesSquare,x:90,y:1220,r:-3}].map(({t,Icon,x,y,r},i)=><div key={t} style={{position:'absolute',left:x,top:y,padding:25,background:i===1?C.coral:C.mint,color:C.ink,border:'2px solid #203531',rotate:`${r}deg`,scale:enter(f,i*30+15),fontSize:33,fontWeight:700,display:'flex',gap:18,alignItems:'center'}}><Icon size={47}/>{t}</div>)}
<Caption text="Trước khi đưa dữ liệu vào chatbot, hãy nghĩ đến quyền riêng tư của mình và người khác."/>
</Stage>};
