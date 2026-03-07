# Vertical Status Text

## Purpose

Renders status/fraction text in vertical writing mode for a more compact, visually aligned display with title text.

## Requirements

### Requirement: Status text displays in vertical writing mode
The status/fraction text (`#displayPercent`) SHALL render in vertical writing mode using `writing-mode: vertical-rl` and `text-orientation: mixed`, matching the title text's vertical orientation.

#### Scenario: Fraction text renders vertically
- **WHEN** the widget displays a fraction value such as "12/20"
- **THEN** the status text SHALL render top-to-bottom using vertical-rl writing mode

#### Scenario: Mixed characters rotate naturally
- **WHEN** the fraction text contains Latin characters and a slash (e.g., "12/20")
- **THEN** the characters SHALL rotate with `text-orientation: mixed`, consistent with the title text behavior

### Requirement: Status text maintains bottom alignment
The status text SHALL remain aligned to the bottom of its container (`self-end`) after applying vertical writing mode.

#### Scenario: Status text anchored at bottom
- **WHEN** the widget renders with vertical status text
- **THEN** the `#displayPercent` element SHALL be positioned at the bottom of the flex container
