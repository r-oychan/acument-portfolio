---
name: html-to-pdf
description: "Export portfolio website pages to PDF and add download links. Use when the user asks to: (1) export a page to PDF, (2) generate a downloadable PDF of their portfolio/resume, (3) add a PDF download link to a page, (4) set up auto PDF export on content changes, (5) convert HTML to PDF. Triggers: 'export pdf', 'download pdf', 'generate pdf', 'pdf link', 'convert to pdf', 'print page', 'save as pdf'."
---

# HTML to PDF Export

Export rendered portfolio pages to PDF using headless Chromium (Playwright) and integrate download links into the site.

## Prerequisites

```bash
pip install playwright && playwright install chromium
```

## Workflow

### 1. Export a Page to PDF

Run the bundled export script against a running dev server:

```bash
# Ensure dev server is running first
bun run dev &

# Export a page
python ~/.claude/skills/html-to-pdf/scripts/export_pdf.py \
  --url http://localhost:5173 \
  --output public/portfolio.pdf
```

Script flags:
- `--url` : Full URL of the page to render
- `--output` : Destination path (use `public/` so Vite serves it as a static asset)
- `--wait` : Extra settle time in ms after load (default: 2000)
- `--format` : Paper size — A4, Letter, etc. (default: A4)

The script injects print-friendly CSS that hides `nav`, `header nav`, and elements with `data-no-print` or `.no-print`.

### 2. Add a Download Link to the Page

After exporting, add a download link in the relevant route component. Follow `design.md` for styling (IBM Carbon design tokens).

Example React/TSX snippet:

```tsx
<a
  href="/portfolio.pdf"
  download="portfolio.pdf"
  data-no-print
  style={{
    display: "inline-flex",
    alignItems: "center",
    gap: "8px",
    backgroundColor: "#0f62fe",
    color: "#ffffff",
    padding: "14px 63px 14px 15px",
    border: "1px solid transparent",
    borderRadius: "0px",
    height: "48px",
    fontSize: "14px",
    fontFamily: "'IBM Plex Sans', 'Helvetica Neue', Arial, sans-serif",
    fontWeight: 400,
    letterSpacing: "0.16px",
    textDecoration: "none",
    cursor: "pointer",
  }}
>
  Download PDF
</a>
```

Key points:
- Place the PDF in `public/` so it's served at the site root (e.g., `/portfolio.pdf`)
- Add `data-no-print` to the download link so it's hidden in the PDF itself
- Use `download` attribute for a clean download experience
- Consult `design.md` for button styling — use Primary Button specs (Blue 60, 0px radius, 48px height)

### 3. Export Multiple Pages

```bash
for route in "" "about" "projects"; do
  python ~/.claude/skills/html-to-pdf/scripts/export_pdf.py \
    --url "http://localhost:5173/$route" \
    --output "public/${route:-index}.pdf"
done
```

### 4. Set Up Auto-Export Hook

Configure a Claude Code hook so PDFs re-export automatically when portfolio content changes. See [references/hook-setup.md](references/hook-setup.md) for the full configuration.

Summary: add a `PostToolUse` hook in `.claude/settings.local.json` that watches for `Edit`/`Write` operations on `src/routes/` and `src/components/` files. When triggered, it reminds Claude to re-run the export script and verify the download link.

## Script Reference

**`scripts/export_pdf.py`** — Headless Chromium PDF exporter using Playwright.

- Launches Chromium, navigates to the URL, waits for network idle + configurable delay
- Injects `@media print` CSS to hide navigation and expand content
- Exports with configurable paper size and margins (20mm top/bottom, 15mm sides)
- Creates output directories automatically
