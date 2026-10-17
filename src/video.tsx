import React from 'react';
import {AbsoluteFill,Audio,staticFile,useVideoConfig,useCurrentFrame} from 'remotion';
import {TransitionSeries,linearTiming} from '@remotion/transitions';
import {wipe} from '@remotion/transitions/wipe';
import {fade} from '@remotion/transitions/fade';
import {slide} from '@remotion/transitions/slide';
import {Hook} from './scenes/Hook';
import {Tools} from './scenes/Tools';
import {Choice} from './scenes/Choice';
import {Truth} from './scenes/Truth';
import {Verify} from './scenes/Verify';
import {Learn} from './scenes/Learn';
import {Privacy} from './scenes/Privacy';
import {Prayer} from './scenes/Prayer';
import {Community} from './scenes/Community';
import {Service} from './scenes/Service';
import {Compass} from './scenes/Compass';
import {Outro} from './scenes/Outro';
import {C} from './design';
import {project} from './project';
export const Video=()=>{const {fps}=useVideoConfig();const f=useCurrentFrame();return <AbsoluteFill>
<TransitionSeries>
<TransitionSeries.Sequence name="01-Hook" durationInFrames={102} premountFor={fps}><Hook/></TransitionSeries.Sequence>
<TransitionSeries.Transition presentation={wipe({direction:'from-left'})} timing={linearTiming({durationInFrames:12})}/>
<TransitionSeries.Sequence name="02-Tools" durationInFrames={162} premountFor={fps}><Tools/></TransitionSeries.Sequence>
<TransitionSeries.Transition presentation={slide({direction:'from-bottom'})} timing={linearTiming({durationInFrames:12})}/>
<TransitionSeries.Sequence name="03-Choice" durationInFrames={162} premountFor={fps}><Choice/></TransitionSeries.Sequence>
<TransitionSeries.Transition presentation={fade()} timing={linearTiming({durationInFrames:12})}/>
<TransitionSeries.Sequence name="04-Truth" durationInFrames={192} premountFor={fps}><Truth/></TransitionSeries.Sequence>
<TransitionSeries.Transition presentation={wipe({direction:'from-top'})} timing={linearTiming({durationInFrames:12})}/>
<TransitionSeries.Sequence name="05-Verify" durationInFrames={192} premountFor={fps}><Verify/></TransitionSeries.Sequence>
<TransitionSeries.Transition presentation={slide({direction:'from-left'})} timing={linearTiming({durationInFrames:12})}/>
<TransitionSeries.Sequence name="06-Learn" durationInFrames={192} premountFor={fps}><Learn/></TransitionSeries.Sequence>
<TransitionSeries.Transition presentation={wipe({direction:'from-bottom'})} timing={linearTiming({durationInFrames:12})}/>
<TransitionSeries.Sequence name="07-Privacy" durationInFrames={192} premountFor={fps}><Privacy/></TransitionSeries.Sequence>
<TransitionSeries.Transition presentation={fade()} timing={linearTiming({durationInFrames:12})}/>
<TransitionSeries.Sequence name="08-Prayer" durationInFrames={192} premountFor={fps}><Prayer/></TransitionSeries.Sequence>
<TransitionSeries.Transition presentation={fade()} timing={linearTiming({durationInFrames:12})}/>
<TransitionSeries.Sequence name="09-Community" durationInFrames={192} premountFor={fps}><Community/></TransitionSeries.Sequence>
<TransitionSeries.Transition presentation={slide({direction:'from-bottom'})} timing={linearTiming({durationInFrames:12})}/>
<TransitionSeries.Sequence name="10-Service" durationInFrames={192} premountFor={fps}><Service/></TransitionSeries.Sequence>
<TransitionSeries.Transition presentation={wipe({direction:'from-left'})} timing={linearTiming({durationInFrames:12})}/>
<TransitionSeries.Sequence name="11-Compass" durationInFrames={162} premountFor={fps}><Compass/></TransitionSeries.Sequence>
<TransitionSeries.Transition presentation={fade()} timing={linearTiming({durationInFrames:12})}/>
<TransitionSeries.Sequence name="12-Outro" durationInFrames={180} premountFor={fps}><Outro/></TransitionSeries.Sequence>
</TransitionSeries>
<Audio src={staticFile(project.music)} volume={.65}/>
<div style={{position:'absolute',bottom:150,left:90,right:120,height:4,background:'#83928A44'}}><div style={{height:4,width:`${f/1979*100}%`,background:C.coral}}/></div>
</AbsoluteFill>};
