# CLAUDE.md — Acument Portfolio

## Design System

**When writing or modifying any HTML, JSX, or TSX that involves UI/visual elements, always consult `design.md` first.** The design.md file contains the complete design system (inspired by IBM's Carbon Design System) including color palette, typography rules, component stylings, spacing, layout principles, and responsive behavior. All UI work must conform to the specifications defined there.

## Case-study assets & PDFs

Every case study has a dedicated folder under `public/` named
`<industry>-<project-scope>/`. All imagery, the `IMAGES.md` doc, and the
exported `case-study.pdf` for that case live inside that one folder.

The route `id` stays short (`theme-park`, `mobility`, …) and is mapped to its
asset folder by `assetFolder(id)` in `src/portfolioData.ts`:

| Route id     | Asset folder                    |
| ------------ | ------------------------------- |
| `theme-park` | `hospitality-digital-commerce/` |
| `mobility`   | `mobility-payment-backbone/`    |
| `tuition`    | `fintech-tuition-portal/`       |
| `remittance` | `fintech-remittance-api/`       |
| `luxury`     | `luxury-security-automation/`   |
| `financial`  | `luxury-insight-vlm/`           |
| `sourcing`   | `fashion-sourcing-portal/`      |

`portfolioPdfPath(id)` resolves to
`/acument-portfolio/<assetFolder>/case-study.pdf`. Every case-study page
renders `<DownloadCaseStudyLink caseStudyId="..." />` which uses that
function.

### Re-exporting a single PDF

```bash
python ~/.claude/skills/html-to-pdf/scripts/export_pdf.py \
  --url http://localhost:5173/acument-portfolio/portfolio/theme-park \
  --output public/hospitality-digital-commerce/case-study.pdf
```

### Re-exporting all PDFs

```bash
declare -A folders=(
  [theme-park]=hospitality-digital-commerce
  [mobility]=mobility-payment-backbone
  [tuition]=fintech-tuition-portal
  [remittance]=fintech-remittance-api
  [luxury]=luxury-security-automation
  [financial]=luxury-insight-vlm
  [sourcing]=fashion-sourcing-portal
)
for id in "${!folders[@]}"; do
  python ~/.claude/skills/html-to-pdf/scripts/export_pdf.py \
    --url "http://localhost:5173/acument-portfolio/portfolio/$id" \
    --output "public/${folders[$id]}/case-study.pdf"
done
```

### Adding a new case study

1. Add the entry to `portfolioItems` in `src/portfolioData.ts`.
2. Add its folder mapping to `assetFolders` in the same file.
3. Create `public/<industry>-<project-scope>/` with an `IMAGES.md` (hero +
   inline-figure plan) and the imagery.
4. Create `src/routes/portfolio/<id>.tsx` and wire
   `<DownloadCaseStudyLink caseStudyId="<id>" />`.
5. Re-export to `public/<folder>/case-study.pdf`.

### Imagery conventions

Each folder contains:

- `IMAGES.md` — documentation of every image, its intended slot, and alt /
  caption copy.
- One 16:9 hero PNG rendered via `.case-hero`.
- One or two 1:1 inline PNGs rendered via `.figure-inline` inside a
  `.figure-clear` wrapper.
- `case-study.pdf` — the exported artifact.

Shared fallbacks live in `public/common/` (generic watercolor laptop hero and
Power Platform tiles). Use them if a case study has no bespoke imagery yet.

A Claude Code hook is configured to remind you to re-export automatically when
`src/routes/` or `src/components/` files change.

## Project Overview

Portfolio/case study showcase website for Acument Intelligence (fintech, payments, AI/ML). React SPA deployed to GitHub Pages.

## Tech Stack

- **Runtime:** Bun (primary), npm (fallback)
- **Framework:** React 19 + TypeScript 5.9
- **Build:** Vite 7 (`vite.config.ts`)
- **Routing:** TanStack Router (file-based, auto-generates `src/routeTree.gen.ts`)
- **Styling:** Tailwind CSS 4 + custom CSS (`src/styles/portfolio.css`) + CSS variables
- **Animation:** Framer Motion
- **Deployment:** GitHub Pages via GitHub Actions (`.github/workflows/deploy.yml`)

## Commands

```bash
bun run dev            # Start dev server
bun run build          # TypeScript check + Vite production build
bun run preview        # Preview production build locally
bun run lint           # ESLint check
bun run lint:fix       # ESLint auto-fix
bun run format         # Prettier format all files
bun run format:check   # Prettier check (used in CI)
```

## Directory Structure

```
src/
├── main.tsx              # App entry point
├── portfolioData.ts      # Static data: portfolio items, tags, industries
├── routeTree.gen.ts      # AUTO-GENERATED — do not edit
├── routes/
│   ├── __root.tsx        # Root layout (header/nav)
│   ├── index.tsx         # Home page
│   ├── about.tsx         # About page
│   └── portfolio/
│       ├── index.tsx     # Portfolio listing with filters/search
│       ├── theme-park.tsx
│       ├── mobility.tsx
│       ├── tuition.tsx
│       ├── remittance.tsx
│       ├── luxury.tsx
│       ├── financial.tsx
│       └── sourcing.tsx
├── styles/
│   ├── index.css         # Tailwind imports + IBM Carbon design tokens
│   └── portfolio.css     # Custom portfolio styles & CSS variables
public/
├── <industry>-<scope>/   # one folder per case study — imagery + IMAGES.md + case-study.pdf
│   ├── hero.png
│   ├── *.png             # 1:1 inline figures
│   ├── IMAGES.md
│   └── case-study.pdf
├── common/               # generic fallback imagery
├── 404.html              # SPA routing fallback for GitHub Pages
└── .nojekyll
```

## Code Conventions

- **Components:** PascalCase function components with hooks
- **Files:** kebab-case for route files, `__root.tsx` for root layout
- **TypeScript:** Strict mode enabled with `noUnusedLocals`, `noUnusedParameters`, `noUncheckedIndexedAccess`
- **Path aliases:** `@/*` → `src/*`
- **Formatting (Prettier):** semicolons, double quotes, 2-space indent, trailing commas (es5), 100 char width
- **Linting:** ESLint flat config with TypeScript ESLint, React Hooks, React Refresh, Prettier integration

## Key Patterns

- Routes follow TanStack Router file-based convention — adding a file to `src/routes/` auto-registers the route
- Portfolio data is centralized in `src/portfolioData.ts` (items, tags, industries)
- `src/routeTree.gen.ts` is auto-generated by TanStack Router plugin — never edit manually
- GitHub Pages SPA routing handled via `public/404.html` redirect script and `index.html` redirect handler
- Vite base path is `/acument-portfolio/` (configured in `vite.config.ts`)

## CI/CD Pipeline

On push to `main`:

1. Install dependencies (`bun install`)
2. Lint check (`bun run lint`)
3. Format check (`bun run format:check`)
4. Build (`bun run build` — includes `tsc -b`)
5. Deploy to GitHub Pages

**Before pushing, always run:** `bun run lint && bun run format:check && bun run build`

## Custom Skills (Slash Commands)

Available in `.claude/skills/`:

| Command                 | Source                                                     | Description                                                             |
| ----------------------- | ---------------------------------------------------------- | ----------------------------------------------------------------------- |
| `/pdf`                  | [anthropics](https://github.com/anthropics/skills)         | Read, create, merge, split, fill forms, OCR, watermark PDF files        |
| `/docx`                 | [anthropics](https://github.com/anthropics/skills)         | Create, read, edit, and manipulate Word documents (.docx)               |
| `/pptx`                 | [anthropics](https://github.com/anthropics/skills)         | Create, read, edit PowerPoint presentations (.pptx)                     |
| `/frontend-design`      | [anthropics](https://github.com/anthropics/skills)         | Create distinctive, production-grade frontend interfaces                |
| `/react-best-practices` | [vercel-labs](https://github.com/vercel-labs/agent-skills) | React & Next.js performance optimization (64 rules across 8 categories) |
| `/composition-patterns` | [vercel-labs](https://github.com/vercel-labs/agent-skills) | React composition patterns for flexible, maintainable components        |

## Testing

No testing framework is currently configured. If adding tests, use Vitest (Vite-native).
