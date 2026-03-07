# Status Font Size

## Purpose

Provides configurable font size control for the status/fraction display text, allowing users to adjust text size from 10px to 24px with a default of 24px.

## Requirements

### Requirement: Status font size control
The widget SHALL provide a range slider that controls the font size of the status/fraction display text (`#displayPercent`), allowing values from 10px to 24px with a default of 24px.

#### Scenario: Status font size slider applies default on page load
- **WHEN** the page loads
- **THEN** the status/fraction text SHALL have `font-size: 24px`

#### Scenario: Status font size slider updates text size
- **WHEN** the user drags the status font size slider to 20
- **THEN** the status/fraction text immediately has `font-size: 20px`

#### Scenario: Status font size at minimum
- **WHEN** the user sets the status font size slider to 10
- **THEN** the status/fraction text has `font-size: 10px`

#### Scenario: Status font size at maximum
- **WHEN** the user sets the status font size slider to 24
- **THEN** the status/fraction text has `font-size: 24px`
