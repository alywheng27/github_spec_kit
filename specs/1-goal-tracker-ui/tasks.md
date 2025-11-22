# Tasks: doit Goal Tracker UI

**Input**: Design documents from `/specs/1-goal-tracker-ui/`
**Prerequisites**: plan.md, spec.md, data-model.md, research.md, quickstart.md

**Tests**: Explicitly forbidden by constitution and plan. All verification will be manual/visual.

**Organization**: Tasks grouped by user story to enable independent flow and manual QA for each increment.

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Project scaffolding and UI foundation

- [ ] T001 Create project directory and src/ structure
- [ ] T002 Install/confirm required dependencies (next, react, tailwindcss, @tailwindcss/postcss, shadcn, date-fns)
- [ ] T003 [P] Configure Tailwind with pastel @theme and initial global styles in `src/styles/`
- [ ] T004 [P] Scaffold shadcn UI provider/registry in `src/components/ui/`
- [ ] T005 [P] Setup date-fns helpers in `src/lib/date.ts`
- [ ] T006 [P] Configure localStorage helpers in `src/hooks/useGoals.ts`

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: All infrastructure required before primary stories work

- [ ] T007 Create base `src/components/Layout.tsx` for 2-column responsive layout
- [ ] T008 [P] Generate types/interfaces for Goal, UIState in `src/types/goal.ts`
- [ ] T009 [P] Create empty states/notification UI atoms in `src/components/ui/`
- [ ] T010 [P] Add accessibility + ARIA helpers to `src/components/ui/`

**Checkpoint**: All Shell, type, and foundational UI stubs present. Ready for user stories.

---

## Phase 3: User Story 1 - Add a new goal (Priority: P1) 🎯 MVP

**Goal**: User can add a new goal with title and end date via modal form
**Manual Verification**: Add from modal → appears with correct days left

- [X] T011 [P] [US1] Create `GoalForm` modal in `src/components/GoalForm.tsx`
- [X] T012 [P] [US1] Add new-goal handler logic, state in `src/hooks/useGoals.ts`
- [X] T013 [US1] Integrate modal/form with layout & goals list (`src/components/Layout.tsx`)

**Checkpoint**: User can visually add, see, and persist a first goal

---

## Phase 4: User Story 2 - Complete or delete a goal (Priority: P2)

**Goal**: User can check a goal as completed or delete any goal
**Manual Verification**: Complete = right column; Delete = removed

- [ ] T014 [P] [US2] Create `GoalCard` with checkbox and actions in `src/components/GoalCard.tsx`
- [ ] T015 [US2] Add complete/delete logic to `src/hooks/useGoals.ts`
- [ ] T016 [US2] Wire up right-column Completed Goals list in `src/components/Layout.tsx`

**Checkpoint**: Goals can be completed or deleted, and moved/removed visually

---

## Phase 5: User Story 3 - Expiry warning and highlighting (Priority: P3)

**Goal**: Any goal with <=3 days remaining is highlighted
**Manual Verification**: Add expiring goal, confirm highlight

- [ ] T017 [P] [US3] Implement date-highlighting logic in `src/lib/date.ts`
- [ ] T018 [P] [US3] Add highlighting visuals to `GoalCard` (pastel alert color)
- [ ] T019 [US3] Manually verify edge cases: multiple expiring, post-completion, etc.

**Checkpoint**: All highlighting, warning flows in place

---

## Phase N: Polish & Cross-Cutting Concerns

**Purpose**: Usability improvements, full manual checks, tweaks

- [ ] T020 Polish: tweak theme, accessibility, mobile flows in `src/styles/`, `src/components/`
- [ ] T021 Polish: refactor/review for clean code, per constitution
- [ ] T022 Polish: update README and quickstart with any final manual review notes
- [ ] T023 [P] Polish Accessibility Review: manual keyboard navigation, screen reader checks
- [ ] T024 [P] Polish Mobile Responsiveness verification across breakpoints (380px, 768px, 1024px)

---

## Dependencies & Execution Order

**Phase Dependencies:**
- Setup must be finished before Foundational
- Foundational blocks all user stories
- Each user story is independent after Foundational phase.
- Final Polish starts after US3 (or at any checkpoint for rapid QA)

**User Story Dependencies:**
- US1 (Add goal) → US2 (Complete/delete) → US3 (Highlight)
- All can be checked/reviewed independently post-foundation

**Parallel Example (within phases)**:
```bash
# Phase 1: Configure Tailwind, shadcn, date-fns, localStorage helpers in parallel (T003-T006)
# Phase 3: GoalForm, useGoals logic, and list integration can be built/tested in parallel
```

---

## Implementation Strategy
- Focus first on MVP: Add new goal and list (US1)
- Next, implement complete/delete flows (US2)
- Then, add highlighting for expiring goals (US3)
- Polish for visual and UX enhancements last
- All flows must be validated visually; check quickstart for acceptance/review steps
