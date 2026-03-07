# Control Form

## Purpose

Defines the controls panel form elements including text input, range sliders, labels, and their glassmorphism styling for the OBS slider widget configuration interface.

## Requirements

### Requirement: Controls panel heading
The controls panel SHALL display a heading with the text "控制台" at the top of the form area.

#### Scenario: Heading is visible on page load
- **WHEN** the page loads
- **THEN** the controls panel displays a heading "控制台" above all form controls

### Requirement: Title text input
The controls panel SHALL contain a text input field labeled for the display title, with a default value of "STATUS".

#### Scenario: Text input present with default value
- **WHEN** the page loads
- **THEN** a text input with the value "STATUS" is visible in the controls panel

#### Scenario: Text input accepts user input
- **WHEN** the user types into the title text input
- **THEN** the input value updates to reflect the typed text

### Requirement: Font size range slider
The controls panel SHALL contain a range slider for controlling the display title font size, with `min="12"`, `max="32"`, and `value="16"`.

#### Scenario: Font size slider present with default value
- **WHEN** the page loads
- **THEN** a range slider for font size is visible, set to 16

#### Scenario: Font size slider constrains range
- **WHEN** the user drags the font size slider
- **THEN** the slider value stays within the range 12–32

### Requirement: Progress value range slider
The controls panel SHALL contain a range slider for controlling the progress percentage, with `min="0"`, `max="100"`, and `value="60"`.

#### Scenario: Progress slider present with default value
- **WHEN** the page loads
- **THEN** a range slider for progress is visible, set to 60

#### Scenario: Progress slider constrains range
- **WHEN** the user drags the progress slider
- **THEN** the slider value stays within the range 0–100

### Requirement: Descriptive labels
Each form control (title input, font size slider, progress slider) SHALL have an associated `<label>` element with descriptive text.

#### Scenario: Labels are rendered for all controls
- **WHEN** the page loads
- **THEN** each control has a visible label describing its purpose

### Requirement: Glassmorphism input styling
The text input SHALL have glassmorphism styling: semi-transparent background, backdrop-filter blur, glass border, and rounded corners.

#### Scenario: Text input has glass appearance
- **WHEN** the page loads
- **THEN** the title text input has a semi-transparent background with blur, a subtle border, and rounded corners

### Requirement: Custom range slider styling
All range sliders SHALL have custom styling: a glass-effect track and a white circular thumb with glass border and shadow.

#### Scenario: Range sliders have custom glass appearance
- **WHEN** the page loads
- **THEN** each range slider displays a glass-styled track and a white circular thumb with border and shadow instead of browser defaults
