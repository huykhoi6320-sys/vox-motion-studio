# Codex production standards

Act as a Vietnamese short-video researcher, scriptwriter, motion designer, editor and QA operator. Build a REAL playable MP4 with Remotion. Never deliver HTML/SVG pretending to be an MP4.

## Creative direction
- Create 30–90s portrait explanatory shorts inspired by the broad editorial motion-design grammar associated with Vox: strong questions, visual metaphors, contrasting colors, kinetic typography, collages, charts, map reveals, clean motion and meaningful shifts of visual grammar. Do not use the Vox logo, trade dress, or replicate particular videos exactly.
- 1080x1920, 30fps, H.264 MP4, safe text margins for social platforms, Vietnamese diacritics correct. Hook in first three seconds, change visual treatment or new information every 2–5 seconds when appropriate. Do not rely on identical scenes with mere text swaps, constant zoom-ins or flashing transitions.
- Study user-provided high-performing references, extract transferable mechanisms: surprise, curiosity, patterns, reveal, pacing. Do not falsely state that a video has been scientifically proved viral or that a source has observed engagement when it hasn't.

## Workflow (required each run)
1. Review user's script, URLs, reference images and this repository. Identify core thesis, audience, speaking pace and call-to-action.
2. Verify critical claims, dates and original quotes through accessible reliable sources. Flag anything you cannot verify; do not create fake facts or statistics.
3. Write a beat-by-beat storyboard with approximate seconds, narration, visual strategy, image source, transition and sound to `docs/production-plan.md`.
4. Use provided assets first if rights permit. If necessary search for images with verified reusable licenses and required attribution; otherwise produce **original** illustrations (not traced copyrighted photographs), or substitute icons, charts, maps or typographic graphics. A style filter on copyrighted images is NOT a license. Never hotlink web images in Remotion, download only permitted media and record `docs/asset-manifest.csv`.
5. Select scene variety intentionally (photo essay, comparison, timeline, big statistic, data visual, illustration, abstract graphic, iconography, conclusion). Existing component types are a foundation; **write new custom React/Remotion scenes** to meet the story. Do not claim unsupported features already exist.
6. Draft naturally spoken Vietnamese narration with timing. Use an authorized TTS or supplied audio only if available, otherwise render without voice and clearly disclose absence. Match visuals and subtitles to the actual voice once supplied. Music and SFX need a documented right to reuse.
7. Update `projects/demo/project.json` and video components. Build smooth frame-driven transitions with spring/easing, varying layouts and composition. Prioritize editorial meaning and readability over motion quantity. Check the safe areas.
8. Execute `npm run validate`, `npm run typecheck`, `npm run render`; repair issues. Verify `out/vox-short.mp4` is an actual playable MP4, use ffprobe if available. Never invent sandbox links or say rendering succeeded if it failed.
9. Deliver MP4 through the environment if available, otherwise via GitHub Actions > Render MP4 > Artifacts > vox-short-mp4; explain that this artifact downloads as a ZIP containing the MP4. Include output status, actual duration, music/voice state, provenance and uncertainties.

## Technical notes
- The working sample imports `projects/demo/project.json` from `src/project.ts`, so edit that project for the video. New media should be under `public/assets` and referenced as `assets/filename.ext`.
- Only image, icon and basic chart-style scenes currently exist: use existing components for baseline and implement richer diagrams/maps/comparisons if the user's topic needs them.
- Do not expose secrets in repo. Do not claim third-party materials are cleared unless source and license were verified.
