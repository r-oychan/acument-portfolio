# Luxury Insight VLM — case-study imagery

Images for `src/routes/portfolio/financial.tsx` (Case Study 06 —
Vision-Enabled Brand Intelligence). Served at
`/acument-portfolio/luxury-insight-vlm/<file>`. PDF lives at
`case-study.pdf` in this folder.

## Current assets

- `powerpoint-hero-image.png` — 16:9 watercolor of stylised slide decks.
  Use as `.case-hero`. Alt: _"Illustrated slide decks — the visual research
  the assistant learns to read."_
- `engagement-level.png` — 1:1 watercolor line chart labelled "engagement
  level" vs "time". Use as `.figure-inline`. Alt: _"Illustrated engagement
  chart — the kind of visual insight the assistant can explain in plain
  language."_

## Re-export

```bash
python ~/.claude/skills/html-to-pdf/scripts/export_pdf.py \
  --url http://localhost:5173/acument-portfolio/portfolio/financial \
  --output public/luxury-insight-vlm/case-study.pdf
```
