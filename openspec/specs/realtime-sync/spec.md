# Realtime Sync

## Purpose

Defines the real-time synchronization behavior between the control form inputs and the display panel, including event delegation, smooth transitions, and initialization on page load.

## Requirements

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

### Requirement: Real-time status font size sync
When the user adjusts the status font size slider, the status/fraction text's `style.fontSize` SHALL update immediately.

#### Scenario: Dragging status font size slider updates status text size
- **WHEN** the user drags the status font size slider to 20
- **THEN** the status/fraction text immediately has `font-size: 20px`

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
On `DOMContentLoaded`, the system SHALL first resolve the instance namespace and load presets. If any presets exist, the system SHALL auto-load the first preset (alphabetically) by applying its values to all form controls. After preset loading (or if no presets exist), the system SHALL read the current values of all form controls and apply them to the display.

#### Scenario: Display matches form defaults on page load
- **WHEN** the page finishes loading and no presets exist
- **THEN** the display title reads "吃了幾碗飯", the title font size is 32px, the status font size is 24px, and the progress bar shows the default fraction

#### Scenario: Preset auto-loaded on page init
- **WHEN** the page finishes loading and presets exist in the current namespace
- **THEN** the first preset (alphabetically) SHALL be loaded, form controls SHALL reflect its values, and the display SHALL update accordingly

### Requirement: Real-time font family sync
When the user types a font name into the font family input, the system SHALL debounce the input and then dynamically load and apply the font. This SHALL integrate into the existing form-level `input` event delegation.

#### Scenario: Typing a font name updates the page font after debounce
- **WHEN** the user types "Noto Sans TC" into the font family input and pauses for ~500ms
- **THEN** the page font SHALL update to "Noto Sans TC" loaded from Google Fonts

#### Scenario: Font sync uses event delegation
- **WHEN** the font family input fires an `input` event
- **THEN** the event SHALL be handled by the existing form-level `input` event listener via the `switch(target.id)` pattern

### Requirement: Font initialization on page load
On `DOMContentLoaded`, the system SHALL apply the font from the font family input's current value (which may have been set by a loaded preset) to the document.

#### Scenario: Default font applied on page load
- **WHEN** the page finishes loading and no preset is loaded
- **THEN** the document font family SHALL include "UoqMunThenKhung" as loaded from Google Fonts

#### Scenario: Preset font applied on page load
- **WHEN** the page finishes loading and a preset with fontFamily "Noto Sans TC" is auto-loaded
- **THEN** the document font family SHALL include "Noto Sans TC" as loaded from Google Fonts
