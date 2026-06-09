#!/usr/bin/env python3
"""
Export portfolio pages to PDF using Playwright.

Usage:
    python export_pdf.py --url <url> --output <path> [--wait <ms>]
    python export_pdf.py --url http://localhost:5173 --output public/resume.pdf
    python export_pdf.py --url http://localhost:5173/about --output public/about.pdf --wait 3000

Requirements:
    pip install playwright
    playwright install chromium
"""

import argparse
import sys
from pathlib import Path

try:
    from playwright.sync_api import sync_playwright
except ImportError:
    print("Error: playwright not installed. Run: pip install playwright && playwright install chromium", file=sys.stderr)
    sys.exit(1)


def export_pdf(url: str, output: str, wait_ms: int = 2000, format: str = "A4") -> str:
    """Render a URL in headless Chromium and save as PDF."""
    out_path = Path(output)
    out_path.parent.mkdir(parents=True, exist_ok=True)

    with sync_playwright() as p:
        browser = p.chromium.launch()
        page = browser.new_page()

        # Navigate and wait for network idle + extra settle time
        page.goto(url, wait_until="networkidle")
        page.wait_for_timeout(wait_ms)

        # Add print-friendly styles: hide nav, expand content
        page.add_style_tag(content="""
            @media print {
                nav, header nav, .no-print, [data-no-print] { display: none !important; }
                body { margin: 0; padding: 0; }
                main { width: 100%; max-width: 100%; }
            }
        """)

        page.pdf(
            path=str(out_path),
            format=format,
            print_background=True,
            margin={"top": "20mm", "right": "15mm", "bottom": "20mm", "left": "15mm"},
        )

        browser.close()

    return str(out_path.resolve())


def main():
    parser = argparse.ArgumentParser(description="Export a webpage to PDF")
    parser.add_argument("--url", required=True, help="URL to render (e.g. http://localhost:5173)")
    parser.add_argument("--output", required=True, help="Output PDF path (e.g. public/resume.pdf)")
    parser.add_argument("--wait", type=int, default=2000, help="Extra wait time in ms after page load (default: 2000)")
    parser.add_argument("--format", default="A4", help="Paper format: A4, Letter, etc. (default: A4)")
    args = parser.parse_args()

    result = export_pdf(args.url, args.output, args.wait, args.format)
    print(f"PDF exported: {result}")


if __name__ == "__main__":
    main()
