## ADDED Requirements

### Requirement: Status font size range slider
The controls panel SHALL contain a range slider for controlling the status/fraction text font size, with `min="10"`, `max="24"`, and `value="14"`.

#### Scenario: Status font size slider present with default value
- **WHEN** the page loads
- **THEN** a range slider for status font size is visible, set to 14

#### Scenario: Status font size slider constrains range
- **WHEN** the user drags the status font size slider
- **THEN** the slider value stays within the range 10–24

## MODIFIED Requirements

### Requirement: Descriptive labels
Each form control (title input, font size slider, progress slider, status font size slider) SHALL have an associated `<label>` element with descriptive text.

#### Scenario: Labels are rendered for all controls
- **WHEN** the page loads
- **THEN** each control has a visible label describing its purpose
