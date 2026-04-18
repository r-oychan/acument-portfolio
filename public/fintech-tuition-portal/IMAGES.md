# Fintech Tuition Portal — case-study imagery

Images for `src/routes/portfolio/tuition.tsx` (Case Study 03). Served at
`/acument-portfolio/fintech-tuition-portal/<file>`. PDF lives at
`case-study.pdf` in this folder.

## Current assets

- `university.png` — 16:9 watercolor of a university façade with students on a
  lawn. Use as `.case-hero`. Alt: _"Illustrated university façade — the
  destination for cross-border tuition flows."_

## Needed

- 1–2 inline 1:1 figures. Suggested prompt:
  _Soft watercolor of a parent and student seen from behind at a wooden desk,
  glowing laptop between them, ceramic mug and opened letters; palette of
  warm amber (#e8b877), cream (#f5ead4), muted plum (#a87e8a)._

## Re-export

```bash
python ~/.claude/skills/html-to-pdf/scripts/export_pdf.py \
  --url http://localhost:5173/acument-portfolio/portfolio/tuition \
  --output public/fintech-tuition-portal/case-study.pdf
```
