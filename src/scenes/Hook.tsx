import React from 'react';
import {useCurrentFrame,interpolate} from 'remotion';
import {Heart,MessageSquare} from 'lucide-react';
import {C,Stage,clamp,enter} from '../design';
export const Hook=()=>{const f=useCurrentFrame();return <Stage dark label="ĐỨC TIN × THỜI ĐẠI AI" number="01">
<div style={{position:'absolute',top:280,left:90,fontSize:51,letterSpacing:3}}>AI CÓ THỂ</div>
<div data-safe style={{position:'absolute',top:365,left:90,right:120,fontFamily:'Editorial',fontSize:104,lineHeight:1.15}}>cầu nguyện<br/><span style={{color:C.lime}}>thay bạn?</span></div>
<div style={{position:'absolute',left:130,top:820,width:760,height:530,background:C.paper,borderRadius:32,rotate:`${interpolate(f,[0,90],[-5,1],clamp)}deg`,color:C.ink,boxShadow:'22px 24px 0 #101E1B',scale:.92+.08*enter(f)}}>
<MessageSquare size={120} style={{position:'absolute',left:55,top:55}}/>
<div style={{position:'absolute',left:55,right:45,top:220,fontSize:41,lineHeight:1.5}}>“Xin cho con biết<br/>yêu thương…”<span style={{color:C.coral,opacity:Math.floor(f/10)%2}}>▍</span></div>
<Heart size={150} fill={C.coral} color={C.coral} style={{position:'absolute',right:35,top:-65,scale:1+.07*Math.sin(f*.15)}}/>
</div>
<div data-safe style={{position:'absolute',left:90,right:120,top:1460,fontSize:47,fontWeight:700,color:C.lime,opacity:enter(f,28)}}>Viết lời ≠ sống đức tin.</div>
</Stage>};
