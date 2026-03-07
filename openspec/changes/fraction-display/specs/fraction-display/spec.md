## ADDED Requirements

### Requirement: Display progress as fraction
The widget SHALL display progress as a fraction in the format "current/total" (e.g., "12/20") instead of a percentage format (e.g., "60%").

#### Scenario: Fraction display on initial load
- **WHEN** the widget loads with current=12 and total=20
- **THEN** the display text SHALL show "12/20"

#### Scenario: Fraction display updates on slider change
- **WHEN** the user moves the progress slider to value 5 with total=20
- **THEN** the display text SHALL update to "5/20"

#### Scenario: Fraction display updates on total change
- **WHEN** the user changes total to 50 with current value 5
- **THEN** the display text SHALL update to "5/50"

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
