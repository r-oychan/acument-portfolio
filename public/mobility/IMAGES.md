# Mobility — case-study imagery

Images for `src/routes/portfolio/mobility.tsx`. Served at
`/acument-portfolio/mobility/<file>`.

## Style

Soft watercolor illustrations, pastel palette (dusk blue, warm amber, cream,
muted teal), no real IP. Rendered flat on the page: 0px border-radius, no
box-shadow. Cropped or floated rather than stretched.

## Images

### `hero.png` — cinematic hero band (~16:9 wide)

A commuter walking to their ride against a soft cream sky, a gentle teal
watercolor cloud behind them. Cropped as a 3:1 band to avoid dominating the
page.

- **Placement:** Immediately after `.case-title-section`, before `.case-meta`.
- **Treatment:** `.case-hero` wrapper — 3:1 aspect ratio, max-height 280px,
  `object-fit: cover` with `object-position: center 40%`.
- **Alt text:** _"Illustrated commuter heading to their ride — the start of an
  everyday urban journey."_

### `taxi-lamp.png` — editorial inline figure (1024×1024, 1:1)

A vibrant watercolor study of a Hong Kong taxi roof dome. Anchors **The
Challenge** section with three paragraphs wrapping around it on the left.

- **Placement:** Inside a `.figure-clear` wrapper at the top of **The
  Challenge**, paired with the opening narrative paragraphs.
- **Treatment:** `.figure-inline` — floated right, 40% of column width
  (max 340px), 1:1 aspect. Blue 10 offset block sits behind-right via
  `::before`. Caption reads in IBM Plex Mono 12px ("FIG. 01 — …").
- **Alt text:** _"Illustrated taxi roof dome — a familiar sight on Hong Kong
  streets."_
- **Caption:** _"FIG. 01 — The everyday icon at the heart of urban mobility."_

### `credit-card-payment.png` — editorial inline figure (1024×1024, 1:1)

A gentle close-up of a hand holding a contactless card, soft peach wash
behind. Sits inside **The Approach** section with the payment-rail paragraphs
wrapping around it.

- **Placement:** Inside a `.figure-clear` wrapper at the top of **The
  Approach**, paired with the intro paragraph and the Multi-Rail Payment
  Gateway sub-section.
- **Treatment:** `.figure-inline` — floated right. Caption in IBM Plex Mono.
- **Alt text:** _"Illustrated hand holding a contactless card at a payment
  moment."_
- **Caption:** _"FIG. 02 — The tap that settles across every rail."_

## Layout primitives

Reusable classes live in `src/styles/portfolio.css`:

- `.case-hero` — cropped cinematic band for wide images (16:9 or wider).
- `.figure-inline` + `.figure-clear` wrapper — floated square figure that text
  wraps around. Always wrap floated figures + surrounding paragraphs in a
  `.figure-clear` parent so subsequent headings don't bleed under the float.

## Adding more images

- **Wide illustrations (≥16:9):** `<figure className="case-hero"><img …/></figure>`
- **Square illustrations (1:1):** put inside `.figure-clear` with `.figure-inline`
- **Portrait:** avoid — doesn't fit the grid. Crop to square first.

After adding images, re-export the PDF:

```bash
python ~/.claude/skills/html-to-pdf/scripts/export_pdf.py \
  --url http://localhost:5173/acument-portfolio/portfolio/mobility \
  --output public/portfolio-mobility.pdf
```
