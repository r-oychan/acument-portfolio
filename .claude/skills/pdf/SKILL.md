---
name: pdf
description: Generate PDF documents from markdown, HTML, or structured content. Use when the user asks to create reports, export documentation, generate invoices, resumes, or any printable document.
argument-hint: [source-or-topic] [output-filename]
allowed-tools: Bash, Read, Write, Glob, Grep
---

# PDF Generation Skill

Generate a professional PDF document.

**Input**: `$ARGUMENTS`

## Process

1. Determine the content source:
   - If a file path is given, read and convert it
   - If a topic/description is given, generate the content first
2. Create well-structured HTML with inline CSS for styling
3. Use a conversion tool to produce the PDF:
   - Prefer `puppeteer` or `playwright` if available (best HTML/CSS support)
   - Fall back to `wkhtmltopdf` if installed
   - Fall back to `pandoc` with `--pdf-engine=weasyprint` or `--pdf-engine=wkhtmltopdf`
   - As last resort, generate a self-contained HTML file the user can print to PDF
4. Verify the output file was created

## Styling Guidelines

- Use professional fonts (system fonts: -apple-system, Segoe UI, Roboto, sans-serif)
- Clean margins: 1in on all sides
- Consistent heading hierarchy
- Proper page break handling (`page-break-before`, `page-break-inside: avoid`)
- Tables with borders and alternating row colors
- Print-friendly colors (avoid light grays on white)

## Before Starting

Check which tools are available:
```bash
which wkhtmltopdf pandoc weasyprint 2>/dev/null; npx --yes puppeteer --version 2>/dev/null || true
```

Install a converter if none is available (prefer lightweight options).

## Output

Save the PDF to the project root or a specified path. Report the file path and size to the user.
