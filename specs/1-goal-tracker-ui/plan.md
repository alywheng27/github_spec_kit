# Implementation Plan: doit Goal Tracker UI

**Branch**: `1-goal-tracker-ui` | **Date**: 2025-11-21 | **Spec**: specs/1-goal-tracker-ui/spec.md
**Input**: Feature specification from `/specs/1-goal-tracker-ui/spec.md`

## Summary

Implement an initial goal-tracking web UI for "doit" featuring two columns (current and completed goals), responsive layout, pastel light theme using Tailwind @theme, fluid UX with shadcn UI, session-persistent state using localStorage, and date-calculation/highlighting via date-fns. No automated testing; all validation is visual/manual per project constitution.

## Technical Context

**Language/Version**: next.js 16.0.3, react 19.2.0, react-dom 19.2.0, tailwindcss 4.x
**Primary Dependencies**: next.js, react, react-dom, tailwindcss (w/ @theme), @tailwindcss/postcss, shadcn-ui, date-fns
**Storage**: localStorage (browser)
**Testing**: FORBIDDEN: NO automated tests, no unit/integration/E2E per Constitution 2.0.0
**Target Platform**: All modern browsers, desktop/tablet/mobile
**Project Type**: single/web
**Performance Goals**: UI renders and responds instantly (<200ms user-perceived latency for all interactions)
**Constraints**: No backend, no page reloads for operations, all logic client-side; session state must survive refresh. UI accessible, mobile-friendly, fun pastel light theme.
**Scale/Scope**: 1-1000 goals per session (optimistic case)

## Constitution Check

*GATE: NO automated testing of any kind (unit, integration, E2E) is permitted; locked stack must be respected (next@16.0.3, react@19.2.0, tailwindcss@4.x, etc). All requirements for manual workflow/review only. Shadcn-ui and date-fns are explicitly approved as justified UI/logic add-ons for this feature. There must be no references to or code for test directories, suites, or frameworks. Only manual verification/checklists allowed.*

## Project Structure

### Documentation (this feature)
```
specs/1-goal-tracker-ui/
├── plan.md              # This file (/speckit.plan command output)
├── research.md          # Phase 0 output (/speckit.plan command)
├── data-model.md        # Phase 1 output (/speckit.plan command)
├── quickstart.md        # Phase 1 output (/speckit.plan command)
├── contracts/           # (none needed for local-only app)
└── tasks.md             # Phase 2 output (/speckit.tasks command)
```

### Source Code (repository root)
```
src/
├── components/          # shadcn-based UI building blocks (GoalCard, GoalForm, Modal)
├── pages/               # Next.js routing (Home = main UI)
├── hooks/               # Custom React hooks (useGoals)
├── lib/                 # Date helpers (date-fns wrappers)
└── styles/              # Tailwind and theme config
```

**Structure Decision**: Simple single-project layout; all logic client-side in src/, using shadcn for composable React UI, and tailwind @theme for style colors.

## Complexity Tracking

| Violation | Why Needed | Simpler Alternative Rejected Because |
|-----------|------------|-------------------------------------|
| shadcn-ui | Supports rapid, consistent UI building with accessible components | Avoiding shadcn would require fully custom components and reduce UX polish/velocity |
| date-fns | Makes date math and highlighting simpler, safer, and i18n-ready | Native Date API is clunky/error-prone for diff/highlight logic |
