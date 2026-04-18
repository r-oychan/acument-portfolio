# Fashion Sourcing Portal — case-study imagery

Images for `src/routes/portfolio/sourcing.tsx` (Case Study 07). Served at
`/acument-portfolio/fashion-sourcing-portal/<file>`. PDF lives at
`case-study.pdf` in this folder.

## Current assets

- `power-platform.png` — 1:1 watercolor of Power Platform app tiles.
- `stack-of-polo-shirt.png` — 1:1 watercolor of folded polo shirts in
  pastel tones.

## Needed

- `hero.png` — 16:9 hero band. Suggested prompt:
  _Soft watercolor triptych — three pastel panels flowing together: APAC
  harbour, European rooftops, North American warehouse silhouette; cream
  ribbons tying the scenes; palette of powder blue (#bcd4e6), terracotta
  (#d89a7a), sage (#a8b89a), cream (#f5ead4)._

Fallback: `public/common/laptop-hero-image.png` can be used until the
bespoke hero is generated.

## Re-export

```bash
python ~/.claude/skills/html-to-pdf/scripts/export_pdf.py \
  --url http://localhost:5173/acument-portfolio/portfolio/sourcing \
  --output public/fashion-sourcing-portal/case-study.pdf
```
