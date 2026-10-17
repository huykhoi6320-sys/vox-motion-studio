import React from 'react';
import {Languages,BookOpen,Lightbulb,Sparkles} from 'lucide-react';
import {useCurrentFrame} from 'remotion';
import {C,Stage,Heading,IconCard,Caption,enter} from '../design';
export const Tools=()=>{const f=useCurrentFrame();return <Stage label="CƠ HỘI" number="02">
<Heading serif>Một công cụ.<br/>Nhiều khả năng.</Heading>
<IconCard top={620} delay={5} title="Dịch tài liệu"><Languages size={95}/></IconCard>
<IconCard top={850} delay={35} title="Gợi ý học tập" color={C.lime}><BookOpen size={95}/></IconCard>
<IconCard top={1080} delay={65} title="Tìm ý tưởng" color="#E9AA96"><Lightbulb size={95}/></IconCard>
<Sparkles size={80} color={C.coral} style={{position:'absolute',right:160,top:515,rotate:`${f*.4}deg`,opacity:enter(f,15)}}/>
<Caption text="AI có thể hỗ trợ. Bạn vẫn cần kiểm tra kết quả."/>
</Stage>};
