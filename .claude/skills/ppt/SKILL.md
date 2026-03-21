---
name: ppt
description: Generate PowerPoint (.pptx) presentations programmatically. Use when the user asks to create slides, pitch decks, presentations, or slide decks.
argument-hint: [topic-or-outline] [output-filename]
allowed-tools: Bash, Read, Write, Glob, Grep
---

# PowerPoint Presentation Skill

Create a professional PowerPoint presentation.

**Input**: `$ARGUMENTS`

## Process

1. Parse the topic or outline from the arguments
2. Design a slide structure:
   - Title slide (title + subtitle/date)
   - Agenda/overview slide
   - 4-8 content slides depending on topic depth
   - Summary/conclusion slide
   - Contact/thank you slide
3. Generate the `.pptx` file using Python's `python-pptx` library
4. Verify the output

## Before Starting

Ensure python-pptx is available:
```bash
pip install python-pptx 2>/dev/null || pip3 install python-pptx 2>/dev/null
```

## Slide Design Standards

- **Color scheme**: Use a professional palette (dark blue #1B3A5C primary, white background, accent #2E86AB)
- **Fonts**: Calibri or Arial, title 36pt, body 20-24pt, captions 14pt
- **Layout**: Left-aligned text, consistent margins, avoid clutter
- **Content**: Max 5-6 bullet points per slide, concise text
- **Visuals**: Use shapes, charts, and diagrams where appropriate
- **Slide size**: Widescreen 16:9 (13.333 x 7.5 inches)

## Python Script Template

Write a Python script that:
1. Creates a `Presentation()` object with 16:9 slide size
2. Defines a consistent color scheme and font helper
3. Adds slides using appropriate layouts
4. Applies formatting (font size, color, alignment, spacing)
5. Saves to the specified output path

## Output

Save the `.pptx` file to the project root or specified path. Report the file path and slide count to the user.
