---
name: react-best-practices
description: Review and improve React code following best practices. Use when the user asks to review components, optimize performance, fix React anti-patterns, or wants guidance on React patterns for this project.
argument-hint: [file-or-component-to-review]
allowed-tools: Bash, Read, Write, Edit, Glob, Grep
---

# React Best Practices Skill

Review and improve React code following modern best practices.

**Target**: `$ARGUMENTS`

## Review Checklist

### Component Design
- [ ] Use function components (no class components)
- [ ] Keep components small and focused (single responsibility)
- [ ] Extract reusable logic into custom hooks
- [ ] Co-locate related code (component + styles + tests)
- [ ] Use TypeScript interfaces for props (not `type` for component props)
- [ ] Avoid prop drilling — consider composition or context

### State Management
- [ ] Use `useState` for simple local state
- [ ] Use `useReducer` for complex state logic
- [ ] Lift state only as high as necessary
- [ ] Avoid redundant state — derive values with `useMemo` instead
- [ ] Never store derived data in state
- [ ] Use controlled components for forms

### Performance
- [ ] Memoize expensive computations with `useMemo`
- [ ] Stabilize callback references with `useCallback` when passed as props
- [ ] Use `React.memo` only for components that re-render often with the same props
- [ ] Avoid creating objects/arrays inline in JSX (causes unnecessary re-renders)
- [ ] Lazy load routes and heavy components with `React.lazy` + `Suspense`
- [ ] Use `key` prop correctly — stable, unique identifiers (not array index for dynamic lists)

### Hooks Rules
- [ ] Never call hooks conditionally or inside loops
- [ ] Keep `useEffect` dependencies accurate — no missing or extra deps
- [ ] Clean up side effects (return cleanup function from `useEffect`)
- [ ] Avoid `useEffect` for state synchronization — use event handlers instead
- [ ] Prefer `useEffect` only for external system synchronization (API calls, subscriptions, DOM)

### TypeScript Integration
- [ ] Type all props with interfaces
- [ ] Use `React.FC` sparingly (prefer explicit return types or none)
- [ ] Type event handlers: `React.MouseEvent<HTMLButtonElement>`, `React.ChangeEvent<HTMLInputElement>`
- [ ] Use generic types for reusable components
- [ ] Avoid `any` — use `unknown` and narrow with type guards
- [ ] Use discriminated unions for component variants

### Accessibility
- [ ] Use semantic HTML elements (`button` not `div` with onClick)
- [ ] Include `alt` text on images
- [ ] Ensure keyboard navigation works (focus management)
- [ ] Use ARIA attributes when semantic HTML is insufficient
- [ ] Maintain logical heading hierarchy (h1 > h2 > h3)
- [ ] Ensure sufficient color contrast

### Project-Specific Patterns (This Repo)

This project uses React 19 + TypeScript + TanStack Router + Tailwind CSS + Framer Motion:

- **Routing**: File-based routes in `src/routes/`. Use `createFileRoute` from `@tanstack/react-router`
- **Styling**: Tailwind utility classes. Custom styles in `src/styles/portfolio.css` with CSS variables
- **Animation**: Framer Motion `motion.*` components, `AnimatePresence` for exit animations
- **Data**: Portfolio data centralized in `src/portfolioData.ts`
- **Imports**: Use `@/*` path alias for `src/*`
- **Strict TS**: `noUnusedLocals`, `noUnusedParameters`, `noUncheckedIndexedAccess` are enforced

### Common Anti-Patterns to Flag

1. **State for derived data**: If a value can be computed from props/state, compute it — don't store it
2. **useEffect for event responses**: Handle events in event handlers, not effects
3. **Premature optimization**: Don't add `useMemo`/`useCallback` everywhere — only where profiling shows need
4. **God components**: Break up components > 200 lines into smaller pieces
5. **Prop drilling > 3 levels**: Use composition, context, or restructure
6. **Index as key**: Only safe for static lists that never reorder
7. **Direct DOM manipulation**: Use refs sparingly, prefer React state
8. **Missing error boundaries**: Add `ErrorBoundary` around route-level components

## Process

1. If a file/component is specified, read and analyze it
2. If no target specified, scan `src/routes/` and `src/` for components to review
3. Identify issues against the checklist above
4. Provide specific, actionable feedback with code examples
5. Offer to apply fixes if requested

## Output

Provide a categorized list of findings (critical / recommended / nice-to-have) with code snippets showing the fix.
