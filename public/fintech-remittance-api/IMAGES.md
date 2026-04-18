# Fintech Remittance API — case-study imagery

Images for `src/routes/portfolio/remittance.tsx` (Case Study 04). Served at
`/acument-portfolio/fintech-remittance-api/<file>`. PDF lives at
`case-study.pdf` in this folder.

## Current assets

- `bank.png` — 16:9 watercolor skyline with a classical bank façade. Use as
  `.case-hero`. Alt: _"Illustrated city skyline with a bank at its centre —
  the destination of each cross-border payment."_
- `money.png` — 1:1 coin + banknotes on cream wash.
- `piggy-bank.png` — 1:1 pastel piggy bank with a coin.
- `us-chinese-flag.png` — 1:1 US + China watercolor flags (renamed from
  `us chinese flag.png`).

Inline slots to fill: pick 1–2 of the three squares above for
`.figure-inline`.

## Re-export

```bash
python ~/.claude/skills/html-to-pdf/scripts/export_pdf.py \
  --url http://localhost:5173/acument-portfolio/portfolio/remittance \
  --output public/fintech-remittance-api/case-study.pdf
```
