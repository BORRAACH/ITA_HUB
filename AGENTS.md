# Repository Guidelines

## Project Structure & Module Organization
Source code lives in `src/`: UI widgets in `components`, contexts in `contexts`, route screens in `routes`, shared styles/assets in `assets` plus `index.css`. `src/main.tsx` mounts `routes/root.tsx`; extend routing there and keep dashboard layouts under `routes/dashboard`. Static artifacts (icons, fonts) belong in `public/`. Root configs (`vite.config.ts`, `tsconfig.*`, `eslint.config.js`) are the single sources of truth—change them centrally.

## Build, Test & Development Commands
- `npm run dev` – launches the Vite dev server with React Fast Refresh; default port 5173.
- `npm run build` – runs `tsc -b` for type checking, then creates a production bundle via Vite/Rolldown. Use before opening a PR.
- `npm run lint` – executes the root ESLint config; run with `--fix` locally before committing.
- `npm run preview` – serves the latest production build to verify Netlify-like behavior.

## Coding Style & Naming Conventions
Favor TypeScript (`.ts/.tsx`); the `.js/.d.ts` artifacts in git history stay untouched. Use 2-space indentation, single quotes in TSX, PascalCase components (`GraphOfIncome.tsx`), camelCase hooks/utilities, and kebab-case CSS (`notebook.css`). Colocate CSS with the component, keep components pure, lean on Tailwind utilities but avoid inline style objects. Run `npm run lint -- --fix` before pushing.

## Testing Guidelines
No automated tests exist yet—new features must add Vitest/React Testing Library specs beside the component (`ComponentName.test.tsx`) or under `src/__tests__/`. Cover stateful hooks (`contexts/**/*.tsx`), routing edge cases, and user flows. Mock axios/socket.io to keep runs deterministic and document any remaining gaps until CI lands.

## Commit & Pull Request Guidelines
History mixes descriptive Portuguese subjects (see `0cbe046 correção…`), so use short imperative, scope-prefixed titles like `dashboard: add study performance chart`, ≤70 characters, with extra detail in the body. PRs must include a concise summary, proof of `npm run build` + `npm run lint`, linked issue/task, and screenshots or clips for UI updates. Tag another engineer whenever contexts or routing change.

## Configuration & Environment Tips
Type configs are split across `tsconfig.app.json`, `tsconfig.node.json`, and `tsconfig.json`; sync path aliases whenever folders move. `overrides.vite` pins `rolldown-vite@7.1.14`, so commit both `package.json` and `package-lock.json` after dependency edits. Only expose env vars with the `VITE_*` prefix in `.env.local`. Netlify builds block on `tsc -b`, so keep type errors at zero before pushing.
