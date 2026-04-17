# International Theme Park — case-study imagery

Images for `src/routes/portfolio/disneyland.tsx`. All files ship from `public/`
and are served at `/acument-portfolio/international-theme-park-company/images/<file>`.

## Style

Soft watercolor illustrations, pastel palette, no real IP. Rendered flat on the
page: 0px border-radius, no box-shadow, full-width or object-fit: cover within
a fixed aspect-ratio box. No decorative borders or captions.

## Images

### `castle.png` — atmospheric hero (wide, ~16:9)

A distant illustrated castle at sunset with mountains and trees. Sets the
emotional stakes of the guest journey without depicting any real IP.

- **Placement:** Immediately after `.case-title-section`, before `.case-meta`.
- **Treatment:** Full-width, flush to page padding. Uses `.case-hero-image`.
- **Alt text:** _"Illustrated castle silhouette at sunset — the destination at
  the heart of the guest journey."_

### `turnstile.png` — digital-meets-physical moment (square, 1:1)

A guest presents a mobile QR ticket at a theme-park turnstile while a cast
member assists, with the park visible behind. Captures the full arc of the
digital journey in a single frame.

- **Placement:** Paired side-by-side with the **Approach intro paragraph**
  ("We partnered with the resort to architect…"), image on the left, text on
  the right. Uses `.paragraph-split` with `.paragraph-split__media` and
  `.paragraph-split__body`.
- **Treatment:** 1:1 square on desktop (image and paragraph share a 1fr / 1fr
  grid); stacks image-above-text on mobile.
- **Alt text:** _"Guest scanning a mobile QR ticket at a theme-park turnstile —
  the moment the digital journey meets the physical park."_

## Adding more images

Follow the same pattern. Decide the aspect first, then pick a placement:

- **Wide (16:9 or wider):** use `.case-hero-image` as a full-width band between
  sections.
- **Square (1:1):** use `.paragraph-split` and pair it with a single paragraph.
- **Portrait:** avoid — doesn't align to the Carbon 8px grid rhythm.

After placing images, re-export the PDF:

```bash
python ~/.claude/skills/html-to-pdf/scripts/export_pdf.py \
  --url http://localhost:5173/acument-portfolio/portfolio/disneyland \
  --output public/portfolio-disneyland.pdf
```
