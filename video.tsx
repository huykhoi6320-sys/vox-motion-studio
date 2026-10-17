import React from 'react';
import {AbsoluteFill,Audio,Img,Sequence,interpolate,spring,staticFile,useCurrentFrame,useVideoConfig} from 'remotion';
import {Zap,BarChart3,Globe2,Lightbulb,ArrowUpRight} from 'lucide-react';
import {project,type Scene} from './project';
const media=(p:string)=>staticFile(p.replace(/^\/+/,''));
const SceneVisual:React.FC<{s:Scene;index:number;frames:number}>=({s,index,frames})=>{
 const frame=useCurrentFrame();const {fps}=useVideoConfig();const {ink,paper,accent}=project.colors;
 const dark=s.kind==='hook'||s.kind==='outro';const bg=dark?ink:paper;const fg=dark?paper:ink;
 const entry=spring({frame,fps,config:{damping:19,stiffness:95}});
 const progress=Math.min(1,frame/frames);
 const fade=interpolate(frame,[Math.max(0,frames-8),frames],[1,0],{extrapolateLeft:'clamp',extrapolateRight:'clamp'});
 const heading=s.title.length>55?66:s.title.length>30?78:96;
 return <AbsoluteFill style={{background:bg,color:fg,fontFamily:'Arial, sans-serif',overflow:'hidden',opacity:fade}}>
  {s.image&&s.kind==='image'&&<AbsoluteFill><Img src={media(s.image)} style={{width:'100%',height:'100%',objectFit:'cover',opacity:0.37,transform:`scale(${1.04+progress*.12})`}}/></AbsoluteFill>}
  <AbsoluteFill style={{background:`radial-gradient(circle at 95% 90%,${accent}22,transparent 45%)`}}/>
  {dark&&<div style={{position:'absolute',width:560,height:560,right:-260,bottom:180,borderRadius:'50%',background:accent,transform:`scale(${entry})`}}/>}
  <div style={{position:'absolute',left:74,right:74,top:85,fontSize:26,fontWeight:900,letterSpacing:4}}>EDITORIAL <span style={{color:accent}}>•</span> {String(index+1).padStart(2,'0')}</div>
  <div style={{position:'absolute',top:140,left:74,right:74,height:7,background:`${accent}38`}}><div style={{width:`${progress*100}%`,background:accent,height:'100%'}}/></div>
  <div style={{position:'absolute',left:74,right:74,top:'27%',transform:`translateY(${(1-entry)*80}px)`,opacity:entry}}>
   <div style={{color:accent,fontSize:27,fontWeight:900,letterSpacing:4,marginBottom:35}}>{s.eyebrow||'GIẢI THÍCH NGẮN'}</div>
   {s.kind==='stat'&&<div style={{fontSize:220,fontWeight:950,lineHeight:1.1,color:accent}}>{s.number||'?'}</div>}
   <div style={{fontSize:heading,lineHeight:1.12,fontWeight:950,overflowWrap:'anywhere'}}>{s.title}</div>
   {s.body&&<div style={{fontSize:46,lineHeight:1.37,fontWeight:550,marginTop:50}}>{s.body}</div>}
   {s.kind==='timeline'&&<div style={{borderLeft:`8px solid ${accent}`,paddingLeft:28,marginTop:50}}>{(s.bullets||[]).map((t,i)=><div key={i} style={{fontSize:43,fontWeight:800,marginBottom:28,opacity:interpolate(frame,[8+i*9,18+i*9],[0,1],{extrapolateLeft:'clamp',extrapolateRight:'clamp'})}}>{t}</div>)}</div>}
   {s.kind==='icons'&&<div style={{display:'flex',flexWrap:'wrap',gap:18,marginTop:58}}>{(s.bullets||[]).map((t,i)=><div key={i} style={{fontSize:35,fontWeight:800,background:ink,color:paper,padding:22,borderRadius:14}}>{t}</div>)}</div>}
   {s.kind==='quote'&&<div style={{fontSize:170,lineHeight:1,color:accent}}>“</div>}
  </div>
  {(s.kind==='icons'||s.kind==='image')&&<div style={{position:'absolute',bottom:175,right:90,color:accent,transform:`rotate(${Math.sin(frame/18)*7}deg)`}}>{s.kind==='image'?<Globe2 size={160}/>:<Zap size={160}/>}</div>}
  {s.kind==='stat'&&<div style={{position:'absolute',bottom:200,right:90,color:accent}}><BarChart3 size={150}/></div>}
  {s.kind==='outro'&&<div style={{position:'absolute',bottom:200,right:90,color:accent}}><ArrowUpRight size={180}/></div>}
  {s.source&&<div style={{position:'absolute',bottom:105,left:74,fontSize:24,opacity:.8}}>Nguồn: {s.source}</div>}
  <div style={{position:'absolute',bottom:50,right:74,fontWeight:900,fontSize:22,letterSpacing:3,color:accent}}>MOTION STUDIO</div>
 </AbsoluteFill>;
};
export const Video:React.FC=()=>{let start=0;return <AbsoluteFill style={{background:project.colors.ink}}>{project.scenes.map((s,i)=>{const at=start;const frames=Math.round(s.seconds*30);start+=frames;return <Sequence key={i} from={at} durationInFrames={frames}><SceneVisual s={s} index={i} frames={frames}/></Sequence>})}{project.voiceover&&<Audio src={media(project.voiceover)}/ >}{project.music&&<Audio src={media(project.music)} volume={0.12}/ >}</AbsoluteFill>};
