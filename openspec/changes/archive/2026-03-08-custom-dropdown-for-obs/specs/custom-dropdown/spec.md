## ADDED Requirements

### Requirement: Custom dropdown HTML structure
The custom dropdown SHALL be built from a container `<div>`, a trigger `<button>`, and a `<ul>` options list with `<li>` items — no native `<select>` elements. The container SHALL have a unique `id` attribute for JavaScript targeting.

#### Scenario: Dropdown renders as standard DOM elements
- **WHEN** the page loads
- **THEN** the preset dropdown SHALL render as a `<div>` containing a `<button>` trigger and a hidden `<ul>` options list, with no `<select>` element present

### Requirement: OBS browser source compatibility
The custom dropdown SHALL function correctly in OBS browser sources (CEF-based Chromium). Clicking the trigger SHALL open the options list and clicking an option SHALL select it, all within the DOM without relying on native browser popup rendering.

#### Scenario: Dropdown opens in OBS browser source
- **WHEN** the widget is loaded as an OBS browser source and the user clicks the dropdown trigger
- **THEN** the options list SHALL appear below the trigger, rendered within the page DOM

#### Scenario: Option selection in OBS browser source
- **WHEN** the widget is loaded as an OBS browser source and the user clicks an option
- **THEN** the option SHALL be selected and the trigger text SHALL update to show the selected value

### Requirement: Toggle open/close on click
The dropdown SHALL toggle its options list visibility when the trigger button is clicked. Clicking the trigger when closed SHALL open the list; clicking when open SHALL close it.

#### Scenario: Open dropdown on click
- **WHEN** the dropdown is closed and the user clicks the trigger button
- **THEN** the options list SHALL become visible

#### Scenario: Close dropdown on click
- **WHEN** the dropdown is open and the user clicks the trigger button
- **THEN** the options list SHALL be hidden

### Requirement: Close on outside click
The dropdown SHALL close when the user clicks anywhere outside the dropdown component.

#### Scenario: Clicking outside closes the dropdown
- **WHEN** the dropdown is open and the user clicks outside the dropdown container
- **THEN** the options list SHALL be hidden

### Requirement: Option selection
When the user clicks an option in the list, the dropdown SHALL update its displayed value to the selected option text, close the options list, and dispatch a `change` event on the container element.

#### Scenario: Selecting an option updates display and fires event
- **WHEN** the user clicks on option "beta" in the open options list
- **THEN** the trigger button text SHALL display "beta", the options list SHALL close, and a `change` event SHALL be dispatched

### Requirement: Keyboard navigation
The dropdown SHALL support keyboard interaction: Arrow Down/Up to move focus between options, Enter to select the focused option, and Escape to close the dropdown.

#### Scenario: Arrow Down moves to next option
- **WHEN** the dropdown is open and the user presses Arrow Down
- **THEN** focus SHALL move to the next option in the list

#### Scenario: Arrow Up moves to previous option
- **WHEN** the dropdown is open and the user presses Arrow Up
- **THEN** focus SHALL move to the previous option in the list

#### Scenario: Enter selects focused option
- **WHEN** an option is focused and the user presses Enter
- **THEN** the focused option SHALL be selected and the dropdown SHALL close

#### Scenario: Escape closes dropdown
- **WHEN** the dropdown is open and the user presses Escape
- **THEN** the dropdown SHALL close without changing the selection

### Requirement: ARIA accessibility attributes
The dropdown SHALL include appropriate ARIA attributes: `role="listbox"` on the options list, `role="option"` on each item, `aria-expanded` on the trigger button, and `aria-activedescendant` pointing to the currently focused option.

#### Scenario: ARIA attributes are present
- **WHEN** the dropdown is rendered
- **THEN** the trigger button SHALL have `aria-expanded` and `aria-haspopup="listbox"` attributes, the options list SHALL have `role="listbox"`, and each option SHALL have `role="option"`

### Requirement: Visual indicator for dropdown state
The trigger button SHALL include a visual indicator (e.g., a chevron/arrow) that reflects whether the dropdown is open or closed.

#### Scenario: Chevron rotates when open
- **WHEN** the dropdown is opened
- **THEN** the visual indicator SHALL rotate or change to indicate the open state

### Requirement: Glassmorphism styling
The custom dropdown SHALL be styled with the `.glass-input` class on the trigger button and a matching glassmorphism style on the options list, consistent with the existing control panel theme.

#### Scenario: Dropdown matches control panel styling
- **WHEN** the dropdown is rendered
- **THEN** the trigger button and options list SHALL visually match the glassmorphism style of other form controls in the control panel

### Requirement: Options list scroll containment
The options list SHALL have a maximum height with vertical scrolling so that a large number of options does not overflow the control panel boundary.

#### Scenario: Many options trigger scrollable list
- **WHEN** more than 8 presets exist
- **THEN** the options list SHALL display a scrollbar and remain within a bounded height
