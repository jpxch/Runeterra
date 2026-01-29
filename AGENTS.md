# Runeterra Agent Guide

This repository is a Tauri + React + TypeScript app with SCSS styling and a small Rust backend.
Use this guide when making changes so the results match existing patterns.

## Quick Context
- Frontend is Vite + React 19 with TypeScript in `src/`.
- Desktop shell is Tauri in `src-tauri/`.
- Styling is SCSS with partials in `src/styles/`.
- There are no Cursor rules or Copilot instructions in this repo.

## Key Directories
- `src/`: React app entry, pages, and UI modes.
- `src/app/`: High-level app shells (title/story/canon).
- `src/pages/`: Page-level UI (champion index, champion detail).
- `src/modes/`: Mode-specific components (currently empty stubs).
- `src/styles/`: SCSS partials and page styles.
- `src-tauri/`: Rust entrypoints and Tauri setup.
- `public/`: Static assets for Vite.
- `docs/`: High-level product/architecture notes.

## Setup
- Node.js + pnpm/npm (repo already has `node_modules` and `pnpm-lock.yaml`).
- Rust toolchain for Tauri builds.
- Tauri CLI (provided by `@tauri-apps/cli` in devDependencies).

## Commands
### Frontend (Vite)
- Install: `pnpm install` or `npm install`
- Dev server: `pnpm dev` or `npm run dev`
- Build: `pnpm build` or `npm run build`
- Preview build: `pnpm preview` or `npm run preview`

### Tauri (Desktop)
- Tauri dev: `pnpm tauri dev` or `npm run tauri dev`
- Tauri build: `pnpm tauri build` or `npm run tauri build`

### Rust (src-tauri)
- Build (Rust only): `cargo build` (run in `src-tauri`)
- Test: `cargo test` (run in `src-tauri`)
- Single test: `cargo test <test_name_substring>`

### Linting
- No ESLint/Prettier configured.
- TypeScript strictness is enforced by `tsc` during `npm run build`.

### Testing
- No JS/TS test runner configured.
- If tests are added later, document the runner here.
- For Rust, use `cargo test` with a name filter (see above).

## Code Style Guidelines
### TypeScript + React
- Use function components with hooks (`useState`, `useEffect`).
- Prefer typed props via `interface Props { ... }`.
- Use explicit union types for state where meaningful (see `EntryMode`).
- Avoid `any`; if forced, add a note or TODO to revisit.
- Respect `tsconfig.json` strictness: no unused locals/params.
- JSX uses standard React 19 patterns; no class components.
- Keep render paths simple and return early for loading states.

### Imports
- Use relative imports and keep them grouped.
- Order: external libs, internal modules, styles last.
- Import SCSS in the component that owns the layout.
- Maintain consistent quote style within a file (single or double).

### Naming
- Components: `PascalCase` file names + export names.
- Hooks/state: `camelCase` (`mode`, `setMode`).
- CSS classes: `kebab-case` (`champion-index`, `varus-page`).
- Local storage keys are namespaced (`runeterra:mode`).

### Formatting
- Two-space indentation in TS/TSX and SCSS.
- Use trailing commas where the file already uses them.
- Keep line lengths readable; wrap JSX props on new lines when needed.

### Error Handling
- Async data loading should handle loading + error states.
- Avoid unhandled promise rejections in effects.
- For Rust commands, return `Result<T, E>` where possible and bubble up errors.
- Avoid panics in production paths; use `expect` only in bootstrapping.

## SCSS Conventions
- Use `@use` with partials; avoid `@import`.
- Global variables live in `src/styles/_variables.scss`.
- Prefer nesting within a block, but keep depth shallow.
- Page-level styles live in `src/styles/*.scss` and are imported by the page.
- Reuse palette tokens (`$bg-dark`, `$text-primary`, etc.).

## Rust Conventions (Tauri)
- Tauri commands are marked with `#[tauri::command]`.
- Keep `main.rs` minimal and delegate to `lib.rs`.
- Use `tauri::Builder` plugins consistently.

## Data Sources
- Champion data is pulled from `riot-data/src` via local imports.
- Treat that package as a local dependency; avoid copying data into this repo.

## When Adding New Features
- Update the UI flow in `src/App.tsx` if you add new screens.
- Co-locate page styles with the page component.
- Keep the theme consistent with existing typography and palette.

## Notes
- There is no existing `AGENTS.md` in this repo.
- There are no Cursor or Copilot instruction files to mirror.
