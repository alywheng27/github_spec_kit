# Feature Specification: doit Goal Tracker UI

**Feature Branch**: `1-goal-tracker-ui`
**Created**: 2025-11-21
**Status**: Draft
**Input**: User description: "initial page setup - this application should be a goal tracking web app called 'doit'. There should be two columns - a left one where current goals are shown, along with how many days left the user has to achieve the goal, and a right one where completed goals are. Each goal can be 'checked' using a checkbox, and then either moved to the completed column or permanently deleted. To add new goals, a user can click on a button to open a new goal form in a modal (title and end date fields). Goals reaching their end date (within 3 days) are highlighted. Let's use a modern light theme with fun pastel colours."

## User Scenarios & Verification *(manual only; automated tests FORBIDDEN by Constitution 2.0.0)*

### User Story 1 - Add a new goal (Priority: P1)

A user clicks the “Add Goal” button. A modal appears where the user enters a goal title and selects an end date. Upon submission, the new goal displays in the current goals column with the correct calculated days remaining.

**Why this priority**: Adding new goals is the core function of the app. Users need an intuitive way to track objectives from the start.

**Manual Verification**: Confirm a new goal appears in the left column after being added via the form and that the days-left value is displayed accurately.

**Acceptance Scenarios**:
1. **Given** an empty goals list, **When** a user adds a valid goal, **Then** it displays under current goals with the correct days left.
2. **Given** goals already exist, **When** a new goal is added, **Then** the new goal is appended to the list.

---

### User Story 2 - Complete or delete a goal (Priority: P2)

A user checks the checkbox of a goal in the current goals column. The goal is either moved to the completed goals column or permanently deleted, based on the user’s subsequent action.

**Why this priority**: Marking tasks as done and cleaning up is the central user journey after adding goals.

**Manual Verification**: Check a goal, ensure it is visually moved (if completed) or disappears (if deleted), and confirm completed goals migrate to the right column.

**Acceptance Scenarios**:
1. **Given** a set of active goals, **When** a user checks a goal and chooses complete, **Then** that goal moves from current to completed goals.
2. **Given** a set of active goals, **When** a user checks a goal and chooses delete, **Then** that goal is removed entirely.

---

### User Story 3 - Expiry warning and highlighting (Priority: P3)

Goals that are within 3 days of their end date are visually highlighted to inform urgency.

**Why this priority**: Users benefit from clear visual cues when deadlines are approaching, driving engagement and completion.

**Manual Verification**: Add a goal with an end date within 3 days. Confirm it is visually highlighted in the current goals column.

**Acceptance Scenarios**:
1. **Given** a goal with less than or equal to 3 days left, **When** displayed, **Then** it is visually distinctive (e.g., highlighted color).
2. **Given** a goal with more than 3 days left, **When** displayed, **Then** it is not highlighted.

---

### Edge Cases
- What happens when a user tries to add a goal without a title or date? (Case: Form validation required)
- How are goals with end dates in the past handled? (Case: Should be placed in completed or prompt deletion)
- How does the system behave if all goals are completed or deleted? (UI should show empty state or encouragement message)
- What happens with multiple goals expiring on the same day? (Ensure all applicable are highlighted)
- What if a user repeatedly checks/unchecks or deletes/undoes goals in rapid succession? (App should update reliably, never duplicate or lose items)

## Requirements *(must NOT include any automated test or verification, per Constitution 2.0.0)*

### Functional Requirements
- **FR-001**: System MUST display two columns: current goals (with days remaining) on the left, completed goals on the right.
- **FR-002**: User MUST be able to add a new goal via a modal form (with required title and end date fields).
- **FR-003**: Each current goal MUST display how many days are left until its end date.
- **FR-004**: System MUST visually highlight any current goal with 3 or fewer days left to its end date.
- **FR-005**: User MUST be able to mark a goal as complete, which moves it to the completed goals column.
- **FR-006**: User MUST be able to delete a goal at any time (from current or completed).
- **FR-007**: UI MUST use a modern, light theme with fun pastel colors to deliver a positive mood.
- **FR-008**: The goals list and state must persist during the current browser session (refresh-safe).
- **FR-009**: Invalid form submissions must show meaningful error messages (e.g., missing title/date).

### Key Entities
- **Goal**: Represents a user objective with attributes:
  - Title (string)
  - End Date (date)
  - Status ("current" or "completed")
  - Created Date (date)
- **UI State**: Tracks which goals are being edited, completed, highlighted, or deleted, and modal visibility.

## Success Criteria *(mandatory)*

### Measurable Outcomes
- **SC-001**: 100% of users can add, complete, and delete a goal using only the UI in under 1 minute per operation during manual review.
- **SC-002**: 100% of goals within 3 days of end date are highlighted visually without manual inspection.
- **SC-003**: The UI is visually engaging (assessed as "fun and motivational" by at least 80% of test users in qualitative review).
- **SC-004**: All user interactions (add, complete, delete, highlight) function smoothly with no refresh or reload needed and with state persisting across page reloads (manual browser test).
