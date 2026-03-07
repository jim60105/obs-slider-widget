# Background Switching

## Purpose

Switches the body background between transparent (for OBS compositing) and a dark color (for regular browser viewing) based on OBS detection.

## Requirements

### Requirement: Transparent background in OBS mode
When the `<body>` element has the `obs` class, the body background SHALL be `transparent` to allow OBS scene compositing.

#### Scenario: OBS browser source compositing
- **WHEN** the page is loaded inside OBS (body has class `obs`)
- **THEN** the body background SHALL be `transparent`

### Requirement: Dark background in regular browser
When the `<body>` element does NOT have the `obs` class, the body background SHALL be a dark color (e.g., `#1a1a2e`) so that glassmorphism effects and light-colored text are visible.

#### Scenario: Regular browser viewing
- **WHEN** the page is opened in a regular browser (body does not have class `obs`)
- **THEN** the body background SHALL be a dark color that makes white/light text and glass elements clearly visible

### Requirement: Remove unconditional transparent background
The existing unconditional `body { background: transparent; }` rule SHALL be replaced with the conditional rules above. The body background SHALL no longer be hardcoded to transparent.

#### Scenario: Default body style replaced
- **WHEN** the CSS is loaded
- **THEN** there SHALL be no unconditional `background: transparent` on the body; background SHALL be determined by the presence or absence of the `obs` class
