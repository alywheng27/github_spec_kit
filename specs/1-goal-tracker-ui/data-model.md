# Data Model: doit Goal Tracker UI

## Entity: Goal
- **id**: string (local unique identifier, e.g. uuid)
- **title**: string
- **endDate**: string (ISO date)
- **status**: "current" | "completed"
- **createdDate**: string (ISO date)

## Storage Shape
- All goals are stored as an array of Goal objects in browser localStorage under the key `doit_goals`.

## UI State Model
- **goals**: Array<Goal> (split into current and completed via status field)
- **modalOpen**: boolean
- **highlightedGoalIds**: Array<string> (ids of goals expiring soon for UI highlight)
- **formState**: Partial Goal fields for add/edit

## State Transitions
- **Add Goal**: Form submission -> new goal appended with "current" status and dates
- **Complete Goal**: Checkbox toggle -> status changes from "current" to "completed"
- **Delete Goal**: User action -> remove goal from array
- **Highlight Goal**: (Re)calculated per current date and endDate diff; any with <=3 days left marked as highlighted
- **Load**: On app/browser load, goals loaded from localStorage and split for display

## Notes
- All logic/data are client-side only per requirements; no backend exists.
- No extra entities for tests or server; all data is manually visualized/managed.
