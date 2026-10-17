import React from 'react';
import {useCurrentFrame,interpolate} from 'remotion';
import {Search,FileText,CheckCheck} from 'lucide-react';
import {C,Stage,Heading,Caption,clamp,enter} from '../design';
export const Verify=()=>{const f=useCurrentFrame();return <Stage label="MỘT THÓI QUEN NHỎ" number="05">
<Heading serif>Dừng. Kiểm.<br/>Rồi chia sẻ.</Heading>
<div style={{position:'absolute',left:160,top:650,height:610,width:6,background:'#20353122'}}><div style={{height:interpolate(f,[15,120],[0,610],clamp),background:C.coral,width:6}}/></div>
{[{n:'01',t:'Tìm nguồn gốc',b:'Ai đăng? Từ đâu?',Icon:Search},{n:'02',t:'Đọc ngữ cảnh',b:'Ngày nào? Nói về gì?',Icon:FileText},{n:'03',t:'Đối chiếu',b:'Nguồn đáng tin có xác nhận?',Icon:CheckCheck}].map(({n,t,b,Icon},i)=><div key={n} style={{position:'absolute',left:110,right:120,top:650+i*230,opacity:enter(f,i*34),translate:`0 ${(1-enter(f,i*34))*35}px`}}><div style={{position:'absolute',width:106,height:106,borderRadius:60,background:i===2?C.coral:C.ink,color:C.paper,fontSize:38,display:'grid',placeItems:'center'}}>{n}</div><div style={{marginLeft:145,fontSize:49,fontWeight:700}}>{t}</div><div style={{marginLeft:145,marginTop:17,fontSize:34}}>{b}</div><Icon size={43} color={C.coral} style={{position:'absolute',right:0,top:0}}/></div>)}
<Caption text="Với thông tin về Giáo hội, hãy tìm văn bản và kênh công bố chính thức."/>
</Stage>};
