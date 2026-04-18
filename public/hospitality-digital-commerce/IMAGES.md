# International Theme Park — case-study imagery

Images for `src/routes/portfolio/theme-park.tsx`. Served at
`/acument-portfolio/hospitality-digital-commerce/<file>`. PDF lives at
`case-study.pdf` in this folder.

## Style

Soft watercolor illustrations, pastel palette, no real IP. Rendered flat on the
page: 0px border-radius, no box-shadow. Cropped or floated rather than stretched.

## Images

### `castle.png` — cinematic hero band (1344×768, ~7:4)

Dreamy watercolor castle at sunset. Used as a cropped 3:1 cinematic band to
avoid overwhelming the page with a tall illustration.

- **Placement:** Immediately after `.case-title-section`, before `.case-meta`.
- **Treatment:** `.case-hero` wrapper — 3:1 aspect ratio, max-height 280px,
  `object-fit: cover` with `object-position: center 40%` to keep the castle
  roofline in frame. Blue 60 3px border-bottom as a subtle Carbon accent.
- **Alt text:** _"Illustrated castle at sunset — the destination at the heart
  of the guest journey."_

### `turnstile.png` — editorial inline figure (1024×1024, 1:1)

Guest scanning a mobile QR at a turnstile. Positioned as a floated figure
inside the **The Approach** section so three consecutive paragraphs wrap
around it on the left.

- **Placement:** Inside a `.figure-clear` wrapper at the top of **The
  Approach**, paired with the intro paragraph + the first two `<strong>`-led
  sub-sections (Unified Commerce Platform, Omnichannel Payment Integration).
- **Treatment:** `.figure-inline` — floated right, 40% of column width
  (max 320px), 1:1 aspect. A Blue 10 (#edf5ff) offset block sits behind and
  below-right via `::before` for editorial depth without shadows. Caption
  reads in IBM Plex Mono 12px ("FIG. 01 — …").
- **Alt text:** _"Guest scanning a mobile QR ticket at a theme-park
  turnstile."_
- **Caption:** _"FIG. 01 — The moment the digital journey meets the physical
  park."_

## Layout primitives

Two reusable classes live in `src/styles/portfolio.css`:

- `.case-hero` — cropped cinematic band. Use for any wide image (16:9 or wider)
  that would otherwise render too tall at full page width.
- `.figure-inline` + `.figure-clear` wrapper — floated square figure that text
  wraps around. Always wrap floated figures + their surrounding paragraphs in
  a `.figure-clear` parent so subsequent headings don't bleed under the float.

## Adding more images

- **Wide illustrations (≥16:9):** `<figure className="case-hero"><img …/></figure>`
- **Square illustrations (1:1):** put inside `.figure-clear` with `.figure-inline`
- **Portrait:** avoid — doesn't fit the grid. Crop to square first.

After adding images, re-export the PDF:

```bash
python ~/.claude/skills/html-to-pdf/scripts/export_pdf.py \
  --url http://localhost:5173/acument-portfolio/portfolio/theme-park \
  --output public/hospitality-digital-commerce/case-study.pdf
```
