import data from '../projects/demo/project.json';
export type Scene = {kind:'hook'|'stat'|'image'|'timeline'|'icons'|'quote'|'outro';seconds:number;title:string;body?:string;eyebrow?:string;number?:string;image?:string;bullets?:string[];source?:string};
export type Project={name:string;colors:{ink:string;paper:string;accent:string};scenes:Scene[];voiceover?:string;music?:string};
export const project:Project=data as Project;
