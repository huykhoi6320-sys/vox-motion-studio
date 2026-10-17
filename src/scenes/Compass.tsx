import React from 'react';
import {useCurrentFrame} from 'remotion';
import {Check} from 'lucide-react';
import {C,Stage,Heading,Caption,enter} from '../design';
export const Compass=()=>{const f=useCurrentFrame();return <Stage dark label="LA BÀN KHI DÙNG AI" number="11">
<Heading size={91}><span style={{color:C.lime}}>3 câu hỏi.</span><br/>Trước khi dùng.</Heading>
{['Có đúng không?','Có tôn trọng\ncon người không?','Có phục vụ\nđiều thiện không?'].map((t,i)=><div key={t} style={{position:'absolute',left:100,right:130,top:660+i*245,display:'flex',alignItems:'center',gap:30,opacity:enter(f,i*31)}}><div style={{width:82,height:82,flexShrink:0,border:`3px solid ${C.mint}`,display:'grid',placeItems:'center'}}><Check size={60} color={C.lime} style={{scale:enter(f,i*31+14)}}/></div><span style={{fontSize:51,lineHeight:1.3,whiteSpace:'pre-line'}}>{t}</span></div>)}
<Caption dark text="Sự thật. Phẩm giá. Điều thiện. Giữ một la bàn cho mỗi lựa chọn."/>
</Stage>};
