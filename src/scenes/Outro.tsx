import React from 'react';
import {useCurrentFrame} from 'remotion';
import {ArrowUpRight} from 'lucide-react';
import {C,Stage,Heading,enter} from '../design';
export const Outro=()=>{const f=useCurrentFrame();return <Stage label="BẮT ĐẦU HÔM NAY" number="12">
<div style={{position:'absolute',left:650,top:240,width:620,height:620,borderRadius:'50%',background:C.coral,scale:enter(f)}}/>
<Heading top={300} size={102} serif>Dùng AI.<br/><span style={{fontFamily:'Studio',fontWeight:700,fontSize:94}}>Giữ nhân tính.</span></Heading>
<div style={{position:'absolute',left:95,top:735,width:110,height:110,background:C.ink,color:C.paper,display:'grid',placeItems:'center',rotate:'-8deg'}}><ArrowUpRight size={85}/></div>
{['Kiểm chứng một tin.','Tắt màn hình một lúc.','Làm một việc bác ái.'].map((t,i)=><div data-safe key={t} style={{position:'absolute',left:95,right:120,top:970+i*145,fontSize:45,fontWeight:700,borderBottom:'2px solid #20353144',paddingBottom:32,opacity:enter(f,20+i*30),translate:`0 ${(1-enter(f,20+i*30))*25}px`}}><span style={{color:C.coral,marginRight:24}}>0{i+1}</span>{t}</div>)}
<div data-safe style={{position:'absolute',left:95,right:120,top:1530,fontSize:27,lineHeight:1.5}}>Chuyển thể từ bài chia sẻ của<br/>Lm Phêrô Trần Mạnh Hùng, STD.<br/><span style={{color:C.muted}}>Bản đồ họa độc lập • không phải văn kiện Giáo hội.</span></div>
</Stage>};
