# Luxury Security Automation — case-study imagery

Images for `src/routes/portfolio/luxury.tsx` (Case Study 05). Served at
`/acument-portfolio/luxury-security-automation/<file>`. PDF lives at
`case-study.pdf` in this folder.

## Status

**No imagery yet.** Needed:

- `hero.png` — cinematic 16:9 band. Suggested prompt:
  _Soft watercolor of a hushed after-hours atelier — tall windows, polished
  parquet, long wooden table catching moonlit blue, single warm lamp, no
  people; palette of dusk navy (#3a4a66), warm amber (#e8b877), cream
  (#ece0c8); cinematic, vigilant, composed._
- At least one 1:1 inline figure. Suggested prompt:
  _Soft watercolor of a desk at night from above — open laptop, steaming
  espresso, leather notebook, clock, soft blue-grey light across wood;
  palette of dusk navy, warm oak, cream, muted amber._

## Conventions

- Hero placed via `.case-hero` after `.case-title-section`.
- Inline figures placed inside `.figure-clear` wrapper, each as
  `<figure className="figure-inline">`.
- Style: soft watercolor, pastel palette, no real IP, flat (0px radius, no
  shadow).

## Re-export

```bash
python ~/.claude/skills/html-to-pdf/scripts/export_pdf.py \
  --url http://localhost:5173/acument-portfolio/portfolio/luxury \
  --output public/luxury-security-automation/case-study.pdf
```
