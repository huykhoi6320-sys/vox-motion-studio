import React from 'react';
import {AbsoluteFill, interpolate, spring, staticFile, useCurrentFrame, useVideoConfig} from 'remotion';
export const C={paper:'#F1EBDC',ink:'#203531',coral:'#E45D46',mint:'#B8D8CC',lime:'#E2E999',muted:'#58665E'};
export const clamp={extrapolateLeft:'clamp',extrapolateRight:'clamp'} as const;
export const enter=(f:number,d=0)=>spring({frame:f-d,fps:30,config:{damping:22,stiffness:125}});
export const FontStyle=()=> <style>{`
@font-face{font-family:Studio;src:url('${staticFile('assets/fonts/DejaVuSans.ttf')}')}
@font-face{font-family:Studio;src:url('${staticFile('assets/fonts/DejaVuSans-Bold.ttf')}');font-weight:700 1000}
@font-face{font-family:Editorial;src:url('${staticFile('assets/fonts/DejaVuSerif.ttf')}')}
*{box-sizing:border-box}
`}</style>;
export const Stage:React.FC<{children:React.ReactNode;dark?:boolean;label:string;number:string}>=({children,dark=false,label,number})=> <AbsoluteFill style={{background:dark?C.ink:C.paper,color:dark?C.paper:C.ink,fontFamily:'Studio',overflow:'hidden'}}>
<FontStyle/>
<AbsoluteFill style={{opacity:dark?.055:.10,backgroundImage:`radial-gradient(${dark?C.paper:C.ink} 1px, transparent 1px)`,backgroundSize:'18px 18px'}}/>
<div style={{position:'absolute',left:90,right:120,top:115,display:'flex',alignItems:'center',gap:20,fontSize:24,fontWeight:700,letterSpacing:3}}><span style={{height:12,width:12,borderRadius:10,background:C.coral}}/>{label}<span style={{marginLeft:'auto',opacity:.55}}>{number} / 12</span></div>
{children}
</AbsoluteFill>;
export const Heading:React.FC<{children:React.ReactNode;top?:number;size?:number;serif?:boolean;style?:React.CSSProperties}>=({children,top=245,size=88,serif=false,style={}})=>{
const f=useCurrentFrame();return <div data-safe style={{position:'absolute',left:90,right:120,top,fontSize:size,lineHeight:1.14,fontWeight:serif?400:700,fontFamily:serif?'Editorial':'Studio',letterSpacing:-3,opacity:enter(f,3),translate:`0 ${(1-enter(f,3))*45}px`,...style}}>{children}</div>};
export const Tag:React.FC<{children:React.ReactNode;style?:React.CSSProperties}>=({children,style})=><div style={{fontSize:28,fontWeight:700,letterSpacing:2,padding:'14px 22px',background:C.lime,color:C.ink,display:'inline-block',...style}}>{children}</div>;
export const Circle:React.FC<{children:React.ReactNode;x:number;y:number;size?:number;color?:string;delay?:number}>=({children,x,y,size=240,color=C.mint,delay=0})=>{
const f=useCurrentFrame();return <div style={{position:'absolute',left:x,top:y,width:size,height:size,borderRadius:'50%',background:color,color:C.ink,display:'flex',alignItems:'center',justifyContent:'center',scale:enter(f,delay)}}>{children}</div>};
export const Caption:React.FC<{text:string;dark?:boolean}>=({text,dark=false})=>{
 const f=useCurrentFrame(); return <div data-safe style={{position:'absolute',left:90,right:120,bottom:235,paddingTop:25,borderTop:`2px solid ${dark?'#F1EBDC55':'#20353144'}`,fontSize:40,lineHeight:1.42,color:dark?C.paper:C.ink,opacity:interpolate(f,[8,20],[0,1],clamp)}}>{text}</div>;
};
export const Note:React.FC<{children:React.ReactNode;top?:number}>=({children,top=1350})=><div data-safe style={{position:'absolute',left:90,right:120,top,fontSize:29,lineHeight:1.4,color:C.muted}}>{children}</div>;
export const IconCard:React.FC<{children:React.ReactNode;title:string;top:number;delay:number;color?:string}>=({children,title,top,delay,color=C.mint})=>{
const f=useCurrentFrame();return <div style={{position:'absolute',left:100,right:130,top,height:205,display:'flex',alignItems:'center',gap:42,padding:'28px 40px',background:color,border:`2px solid ${C.ink}`,borderRadius:8,translate:`${(1-enter(f,delay))*400}px 0`,opacity:enter(f,delay)}}>{children}<span style={{fontSize:49,fontWeight:700}}>{title}</span></div>};
