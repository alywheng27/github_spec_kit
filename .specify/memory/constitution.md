<!--
Sync Impact Report
Version: [CONSTITUTION_VERSION] → 2.0.0
Modified principles (titles):
- Replaced all existing principles with:
  1. Clean Code
  2. Simple User Experience (UX)
  3. Responsive Design
  4. Minimal Dependencies
  5. Absolutely No Automated Testing
Added sections:
- Technology Stack and Constraints
Removed sections:
- All testing-related principles
Templates updated:
- plan-template.md: constitution gates (✅ updated requirement: NO TESTING, address stack explicitly)
- spec-template.md: user stories and requirements (✅ updated, testing section must be ignored/optional)
- tasks-template.md: test tasks now forbidden unless user explicitly overrides ban (✅ updated guidance)
Templates requiring further review:
- README.md and future onboarding docs (⚠ pending)
TODOs:
- RATIFICATION_DATE needs confirmation
-->

# github_spec_kit Constitution

## Core Principles

### 1. Clean Code
All source code MUST be written in a clear, readable, and maintainable style. Naming conventions are consistently enforced. Dead code, duplication, and over-engineering are to be avoided at all times.
- Clarity always outweighs cleverness
- Code comments explain "why", not "what"
- Public interfaces are minimal and self-documenting

### 2. Simple User Experience (UX)
All user interactions MUST be intuitive, minimal, and streamlined. Remove unnecessary steps and avoid over-complicating workflows.
- Simplicity > Feature-count
- Visual noise is minimized; main actions are primary
- Accessibility and usability are always considered

### 3. Responsive Design
Every user interface MUST be fully responsive and accessible on all modern devices (desktop, tablet, mobile).
- Layouts fluidly adjust to viewport sizes
- Interactive elements respond quickly and reliably
- No UI/UX regression or inconsistency tolerated

### 4. Minimal Dependencies
Project MUST use the smallest dependency set practical. Unnecessary frameworks, libraries, or packages are strictly prohibited.
- Use only: next.js@16.0.3, react@19.2.0, react-dom@19.2.0, tailwindcss@4, @tailwindcss/postcss@4
- No additional core dependencies allowed without explicit justification
- Remove unused or legacy packages promptly

### 5. Absolutely No Automated Testing (NON-NEGOTIABLE)
No unit, integration, end-to-end, or automated regression tests, under any name, may be created, run, or committed for this project. This principle supersedes ALL previous or downstream workflow or template instructions (even those in this file or tool-generated output).
- This applies to all tools, files, build pipelines, and onboarding docs
- Any existing or proposed test code MUST be removed or ignored
- Reviews MUST block all attempts to add automated testing

## Technology Stack and Constraints

- Core stack is LOCKED to:
    - next.js: 16.0.3
    - react: 19.2.0
    - react-dom: 19.2.0
    - tailwindcss: 4.x
    - @tailwindcss/postcss: 4.x
- No test frameworks, libraries, or tools (e.g., jest, vitest, cypress, playwright) are allowed as dependencies or devDependencies.
- Project MUST never include `/tests/`, `/__tests__/`, `test/`, `*.spec.*`, `*.test.*`, or any similar files.
- Any CI/CD or deployment pipeline step referencing testing MUST be removed or commented as unreachable.

## Project Workflow & Code Review

- Code reviews MUST focus solely on adherence to the principles above (clarity, UX, responsiveness, minimal stack, NO TESTS).
- Feature work and refactors are only accepted after passing a review for principle alignment.
- PRs introducing code in violation of the "No Automated Testing" rule MUST be rejected and the offending code removed immediately.
- All dependencies MUST be justified against the locked stack. Additions or removals require explicit review sign-off and, if a removal, a cleanup commit.
- Reviews MAY use manual checklists and/or human spot checks, but MUST NOT reference or create automated tests.

## Governance

- This constitution supersedes all other guidelines, templates, or onboarding docs for this project.
- Amendments require PR approval and clear documentation in this file, with a new version and last amended date (ISO 8601 format).
- Versioning follows Semantic Versioning:
    - MAJOR: Principle is replaced, non-backward compatible stack change, or "NO TESTS" rule is overridden or expanded
    - MINOR: New clarifications or process/constraint additions
    - PATCH: Typos, rewording, clarification with no semantic impact
- Compliance reviews MUST be done for changes to dependencies, UX design, or any sections above
- Guidance docs and onboarding materials MUST reference this constitution and indicate the "NO TESTS" rule reflects project owner's intent

**Version**: 2.0.0 | **Ratified**: TODO(RATIFICATION_DATE): unknown, earliest prior commit unknown | **Last Amended**: 2025-11-21
