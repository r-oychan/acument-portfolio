---
name: web-design
description: Design and build web pages, landing pages, UI components, or full page layouts. Use when the user asks to create, design, or prototype a web page, section, or UI component.
argument-hint: [page-type-or-description]
allowed-tools: Bash, Read, Write, Edit, Glob, Grep
---

# Web Design Skill

Design and build professional web pages and components.

**Request**: `$ARGUMENTS`

## Process

1. Understand the design requirements from the arguments
2. Determine if this is:
   - A standalone HTML page (create self-contained HTML/CSS/JS)
   - A React component for this project (create within `src/`)
   - A new route/page for this project (add to `src/routes/`)
3. Build the design with responsive, accessible markup
4. Test by reviewing the output

## Design Principles

- **Mobile-first**: Design for 320px, then scale up with breakpoints
- **Accessibility**: Semantic HTML, ARIA labels, keyboard navigation, color contrast (WCAG 2.1 AA)
- **Performance**: Minimize DOM depth, avoid unnecessary wrappers, optimize images
- **Visual hierarchy**: Clear heading structure, whitespace, consistent spacing
- **Typography**: System font stack, readable sizes (16px+ body), proper line-height (1.5-1.6)

## For This Project (React + TanStack Router + Tailwind)

When creating pages/components for this portfolio project:

- Use **React function components** with TypeScript
- Style with **Tailwind CSS** utility classes + custom CSS variables from `src/styles/portfolio.css`
- Animate with **Framer Motion** (`motion.div`, `AnimatePresence`, etc.)
- Add routes as files in `src/routes/` (TanStack Router auto-registers them)
- Follow existing patterns in `src/routes/portfolio/*.tsx` for case study pages
- Use the `@/*` path alias for imports
- Keep data in `src/portfolioData.ts` if it's portfolio-related

## For Standalone Pages

When creating standalone HTML pages:

- Self-contained single HTML file with embedded CSS and JS
- Use CSS Grid and Flexbox for layout
- Include viewport meta tag for responsiveness
- Add Open Graph meta tags for social sharing
- Use CSS custom properties for theming
- Include a print stylesheet if relevant

## Color Palette Reference

From the existing project:
- Primary: `var(--color-primary)` — dark professional tone
- Use the CSS variables defined in `src/styles/portfolio.css`
- Maintain visual consistency with the existing site

## Output

Describe what was created, where the files are, and how to preview them.
