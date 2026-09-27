# Udit — Video Editing Portfolio

## Run locally

```bash
npm install
npm run dev
```

The portfolio's Featured Edits section includes four portrait video projects with original audio. Videos are intentionally not muted or autoplayed: visitors can press play and use the native controls.

Current edits:
- Cinematic Edit
- Delhi Edit
- Maharashtra — Pune Trip
- Spider-Man — BND

All portfolio videos are packaged in `public/videos/` and encoded as H.264 video + AAC audio for broad browser compatibility.

## Add another edit later

Add the MP4 to `public/videos/`, then add an object to the `edits` array in `src/components/FeaturedEdits.jsx`.
