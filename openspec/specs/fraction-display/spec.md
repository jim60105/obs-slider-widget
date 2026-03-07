# Fraction Display

## Purpose

Displays progress as a fraction (current/total) instead of a percentage, with proper fill calculation and ARIA attributes.

## Requirements

### Requirement: Display progress as fraction
The widget SHALL display progress as a stacked fraction with the current value, a slash, and the total each on its own line, centered horizontally. The format SHALL use `<br>` tags to separate lines (e.g., "12`<br>`/`<br>`20"). The fraction text SHALL render in horizontal writing mode, with font size controlled via inline `style.fontSize` rather than a Tailwind utility class.

#### Scenario: Fraction display on initial load
- **WHEN** the widget loads with current=12 and total=20
- **THEN** the display text SHALL show "12", "/", and "20" each on a separate centered line

#### Scenario: Fraction display updates on slider change
- **WHEN** the user moves the progress slider to value 5 with total=20
- **THEN** the display text SHALL update to show "5", "/", and "20" each on a separate centered line

#### Scenario: Fraction display updates on total change
- **WHEN** the user changes total to 50 with current value 5
- **THEN** the display text SHALL update to show "5", "/", and "50" each on a separate centered line

#### Scenario: Fraction text does not use hardcoded Tailwind font size class
- **WHEN** the page loads
- **THEN** the `#displayPercent` element SHALL NOT have the `text-sm` class and SHALL have an inline `font-size` style

### Requirement: Progress bar fill reflects fraction ratio
The progress bar fill SHALL use `scaleY(currentValue / totalValue)` to calculate the visual fill height.

#### Scenario: Fill at half progress
- **WHEN** current=10 and total=20
- **THEN** the fill transform SHALL be `scaleY(0.5)`

#### Scenario: Fill at full progress
- **WHEN** current=20 and total=20
- **THEN** the fill transform SHALL be `scaleY(1)`

#### Scenario: Fill at zero progress
- **WHEN** current=0 and total=20
- **THEN** the fill transform SHALL be `scaleY(0)`

### Requirement: ARIA attributes reflect dynamic values
The progress bar ARIA attributes SHALL reflect the current value and dynamic total.

#### Scenario: ARIA on initial load
- **WHEN** the widget loads with current=12 and total=20
- **THEN** `aria-valuenow` SHALL be "12" and `aria-valuemax` SHALL be "20"

#### Scenario: ARIA updates on slider change
- **WHEN** the user changes the progress slider to 8 with total=20
- **THEN** `aria-valuenow` SHALL update to "8"

#### Scenario: ARIA updates on total change
- **WHEN** the user changes total to 50
- **THEN** `aria-valuemax` SHALL update to "50"
