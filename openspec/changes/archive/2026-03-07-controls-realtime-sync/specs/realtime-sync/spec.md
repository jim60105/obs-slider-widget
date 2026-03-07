## ADDED Requirements

### Requirement: Real-time title text sync
When the user types in the title text input, the display title's `textContent` SHALL update immediately without any form submission.

#### Scenario: Typing updates display title in real time
- **WHEN** the user types "HEALTH" into the title text input
- **THEN** the display panel's title text immediately reads "HEALTH"

#### Scenario: Clearing the input clears the display title
- **WHEN** the user clears the title text input
- **THEN** the display panel's title text becomes empty

### Requirement: Real-time font size sync
When the user adjusts the font size slider, the display title's `style.fontSize` SHALL update immediately.

#### Scenario: Dragging font size slider updates display title size
- **WHEN** the user drags the font size slider to 24
- **THEN** the display panel's title text immediately has `font-size: 24px`

### Requirement: Real-time progress sync
When the user adjusts the progress slider, the system SHALL immediately call the progress update function which updates the fill `scaleY`, percentage text, and `aria-valuenow`.

#### Scenario: Dragging progress slider updates progress bar
- **WHEN** the user drags the progress slider to 75
- **THEN** the progress bar fill has `transform: scaleY(0.75)`, the percentage text reads "75%", and `aria-valuenow` is "75"

#### Scenario: Setting progress to 0
- **WHEN** the user drags the progress slider to 0
- **THEN** the progress bar fill has `transform: scaleY(0)`, the percentage text reads "0%", and `aria-valuenow` is "0"

#### Scenario: Setting progress to 100
- **WHEN** the user drags the progress slider to 100
- **THEN** the progress bar fill has `transform: scaleY(1)`, the percentage text reads "100%", and `aria-valuenow` is "100"

### Requirement: Input event delegation
The system SHALL use a single `input` event listener on the form element (event delegation) rather than individual listeners per control.

#### Scenario: All controls trigger updates through form-level listener
- **WHEN** any control within the form fires an `input` event
- **THEN** the corresponding display property updates immediately

### Requirement: No submit button
The form SHALL NOT contain a submit button. All updates happen in real time via `input` events.

#### Scenario: No submit or button elements in the form
- **WHEN** the page loads
- **THEN** the form contains no `<button>` or `<input type="submit">` elements

### Requirement: Smooth CSS transitions
Display updates triggered by control changes SHALL animate smoothly via CSS transitions already defined on the progress bar elements.

#### Scenario: Progress bar fill animates smoothly
- **WHEN** the user drags the progress slider from 20 to 80
- **THEN** the fill element transitions its `scaleY` smoothly (not jumping)

### Requirement: DOMContentLoaded initialization
On `DOMContentLoaded`, the system SHALL read the initial values of all form controls and apply them to the display.

#### Scenario: Display matches form defaults on page load
- **WHEN** the page finishes loading
- **THEN** the display title reads "STATUS", the title font size is 16px, and the progress bar shows 60%
