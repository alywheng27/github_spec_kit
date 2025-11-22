# Research & Decision Log: doit Goal Tracker UI

**Created**: 2025-11-21

## Key Decisions

### UI Styling
- **Decision**: Use Tailwind CSS @theme for pastel color scheme, light mode.
- **Rationale**: Tailwind CSS and its theming features enable quick, consistent, and accessible pastel themes perfectly suited for fun, modern UIs.
- **Alternatives Considered**: Manual CSS/SCSS, styled-components, Chakra UI. All either slower to iterate (manual) or not as widely adopted in current project ecosystem (styled-components, Chakra).

### UI Components / Layouts
- **Decision**: Use shadcn for UI building blocks (modals, lists, forms, checkboxes).
- **Rationale**: Proven accessible and composable components fully compatible with Next.js/React and Tailwind. Reduces custom code risk while allowing extensive customization for branding (pastel colors, light theme).
- **Alternatives Considered**: Custom-building each component (slower, less tested for accessibility), other React libraries (heavy, not as Tailwind-friendly, e.g. MUI).

### State and Storage
- **Decision**: Use localStorage for storing goals, synchronizing between current and completed columns.
- **Rationale**: Simple persistence across browser sessions with no backend; all data is browser-local and privacy risk is minimal.
- **Alternatives Considered**: IndexedDB (overkill), backend API (not justified), cookies (limited capacity/integration pain).

### Dates/Highlighting
- **Decision**: Use date-fns for date math, formatting, and expiry calculations.
- **Rationale**: Small, composable, locale-safe, and matches project rule for minimal dependencies; much safer for actual date diff/highlighting and flexible output.
- **Alternatives Considered**: Native Date (lacks intuitive formatting, error-prone for diff logic), moment.js (heavier/slated for deprecation).

## Manual Verification Policy
- All requirements to be manually checked visually; no test code or automation will be written, per Constitution 2.0.0.
