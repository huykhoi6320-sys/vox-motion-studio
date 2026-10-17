import React from 'react';
import {useCurrentFrame} from 'remotion';
import {ArrowDown,PenLine,BrainCircuit} from 'lucide-react';
import {C,Stage,Heading,Caption,enter} from '../design';
export const Learn=()=>{const f=useCurrentFrame();return <Stage dark label="TƯ DUY" number="06">
<Heading size={89}>Dùng AI để học.<br/><span style={{color:C.lime}}>Đừng học hộ.</span></Heading>
<div style={{position:'absolute',left:90,top:640,width:870,height:190,border:'2px solid #F1EBDC66',padding:'35px 38px',color:C.paper,fontSize:39,opacity:enter(f)}}>“Làm hết bài này cho tôi.”<div style={{position:'absolute',left:28,right:28,top:90,height:5,background:C.coral,rotate:'-4deg',scale:`${enter(f,32)} 1`}}/></div>
<div style={{position:'absolute',left:90,right:120,top:900,padding:'30px 38px',background:C.lime,color:C.ink,fontSize:41,lineHeight:1.45,opacity:enter(f,55)}}>“Gợi ý bước đầu.<br/>Hỏi lại để tôi tự giải thích.”</div>
<div style={{position:'absolute',left:100,top:1190,display:'flex',gap:28,alignItems:'center',color:C.mint,opacity:enter(f,90)}}><BrainCircuit size={80}/><span style={{fontSize:45}}>Tự hiểu</span><span style={{fontSize:50}}>→</span><PenLine size={75}/><span style={{fontSize:45}}>Tự viết</span></div>
<Caption dark text="Hỏi gợi ý, tự giải thích, rồi tự viết. Giữ việc suy nghĩ ở phía mình."/>
</Stage>};
