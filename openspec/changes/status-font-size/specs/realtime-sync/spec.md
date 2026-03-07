## ADDED Requirements

### Requirement: Real-time status font size sync
When the user adjusts the status font size slider, the status/fraction text's `style.fontSize` SHALL update immediately.

#### Scenario: Dragging status font size slider updates status text size
- **WHEN** the user drags the status font size slider to 20
- **THEN** the status/fraction text immediately has `font-size: 20px`

## MODIFIED Requirements

### Requirement: DOMContentLoaded initialization
On `DOMContentLoaded`, the system SHALL read the initial values of all form controls and apply them to the display.

#### Scenario: Display matches form defaults on page load
- **WHEN** the page finishes loading
- **THEN** the display title reads "STATUS", the title font size is 16px, the status font size is 14px, and the progress bar shows the default fraction
