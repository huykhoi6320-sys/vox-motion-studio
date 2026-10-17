import React from 'react';
import {Composition} from 'remotion';
import {project} from './project';
import {Video} from './video';
export const Root: React.FC = () => <Composition id="EditorialShort" component={Video} width={1080} height={1920} fps={30} durationInFrames={project.scenes.reduce((n,s)=>n+Math.round(s.seconds*30),0)} />;
