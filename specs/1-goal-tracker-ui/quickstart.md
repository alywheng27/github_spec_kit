# Quickstart Guide: doit Goal Tracker UI

## Getting Started
1. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```
2. Launch the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```
3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Manual Feature Verification
- Add a goal with a title and end date using the "Add Goal" button/modal.
- Verify it appears in the current goals column with the correct days remaining.
- Check off a goal—move it to completed or delete it.
- Refresh and confirm all goals persist, with completed/current status preserved.
- Add a goal with an end date <= 3 days from now—ensure it is visually highlighted.
- Delete all goals—UI should show empty/encouragement state.

## Customization
- To adjust UI color/theme, edit tailwind @theme settings in `tailwind.config.js`.
- To customize forms, modals, or checkboxes, edit relevant files in `src/components/` (all built with shadcn UI primitives for accessibility and style).

## Testing Policy
- No automated test commands or suites exist or are allowed by project constitution. All checks and reviews must be performed visually and manually.
