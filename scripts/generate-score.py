"""Original deterministic synthesis. No samples or recordings. CC0-1.0."""
import math, random, wave, struct, subprocess
from pathlib import Path
rate=22050; seconds=66; random.seed(7)
starts=[0,3,8,13,19,25,31,37,43,49,55,60]
chords=[[146.832,220,293.665],[130.813,196,261.626],[174.614,220,349.228],[146.832,220,293.665]]
samples=bytearray()
for i in range(rate*seconds):
 t=i/rate
 # Four slowly changing warm chords, with soft attack and release.
 block=int(t/8); local=t%8
 env=min(1,local/1.5)*min(1,(8-local)/1.5)
 chord=chords[block%4]
 pad=sum(math.sin(2*math.pi*freq*t)+.22*math.sin(2*math.pi*freq*2*t) for freq in chord)*.021*env
 # Gentle plucked notes; no borrowed melody.
 phase=t%2; note=chord[int(t/2)%3]*2
 pluck=.035*math.exp(-phase*5)*math.sin(2*math.pi*note*t)*min(1,phase*70)
 # Short transition accents, synchronized to authored edit points.
 hit=0
 for start in starts:
  dt=t-start
  if 0<=dt<.35:
   hit+=.065*math.sin(2*math.pi*(700*dt-500*dt*dt))*math.exp(-dt*11)*min(1,dt*150)
 fade=min(1,t/1.5,(seconds-t)/2)
 value=max(-1,min(1,(pad+pluck+hit)*fade))
 samples.extend(struct.pack('<h',int(value*32767)))
path=Path('/tmp/vox-original-score.wav')
with wave.open(str(path),'wb') as w:
 w.setnchannels(1);w.setsampwidth(2);w.setframerate(rate);w.writeframes(samples)
subprocess.run(['ffmpeg','-y','-v','error','-i',str(path),'-c:a','aac','-b:a','128k','public/assets/original-score.m4a'],check=True)
