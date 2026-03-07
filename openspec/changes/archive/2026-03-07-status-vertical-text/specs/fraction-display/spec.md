## MODIFIED Requirements

### Requirement: Display progress as fraction
The widget SHALL display progress as a fraction in the format "current/total" (e.g., "12/20") instead of a percentage format (e.g., "60%"). The fraction text SHALL render in vertical writing mode.

#### Scenario: Fraction display on initial load
- **WHEN** the widget loads with current=12 and total=20
- **THEN** the display text SHALL show "12/20" rendered vertically

#### Scenario: Fraction display updates on slider change
- **WHEN** the user moves the progress slider to value 5 with total=20
- **THEN** the display text SHALL update to "5/20" rendered vertically

#### Scenario: Fraction display updates on total change
- **WHEN** the user changes total to 50 with current value 5
- **THEN** the display text SHALL update to "5/50" rendered vertically
