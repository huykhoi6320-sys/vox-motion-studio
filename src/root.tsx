import React from 'react';
import {Composition,Folder} from 'remotion';
import {Video} from './video';
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
export const Root=()=> <><Composition id="EditorialShort" component={Video} width={1080} height={1920} fps={30} durationInFrames={1980}/><Folder name="Scenes"><Composition id="Hook" component={Hook} width={1080} height={1920} fps={30} durationInFrames={102}/>
<Composition id="Tools" component={Tools} width={1080} height={1920} fps={30} durationInFrames={162}/>
<Composition id="Choice" component={Choice} width={1080} height={1920} fps={30} durationInFrames={162}/>
<Composition id="Truth" component={Truth} width={1080} height={1920} fps={30} durationInFrames={192}/>
<Composition id="Verify" component={Verify} width={1080} height={1920} fps={30} durationInFrames={192}/>
<Composition id="Learn" component={Learn} width={1080} height={1920} fps={30} durationInFrames={192}/>
<Composition id="Privacy" component={Privacy} width={1080} height={1920} fps={30} durationInFrames={192}/>
<Composition id="Prayer" component={Prayer} width={1080} height={1920} fps={30} durationInFrames={192}/>
<Composition id="Community" component={Community} width={1080} height={1920} fps={30} durationInFrames={192}/>
<Composition id="Service" component={Service} width={1080} height={1920} fps={30} durationInFrames={192}/>
<Composition id="Compass" component={Compass} width={1080} height={1920} fps={30} durationInFrames={162}/>
<Composition id="Outro" component={Outro} width={1080} height={1920} fps={30} durationInFrames={180}/></Folder></>;
