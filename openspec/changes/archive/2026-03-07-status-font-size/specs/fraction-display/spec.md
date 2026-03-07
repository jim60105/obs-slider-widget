## MODIFIED Requirements

### Requirement: Display progress as fraction
The widget SHALL display progress as a fraction in the format "current/total" (e.g., "12/20") instead of a percentage format (e.g., "60%"). The font size of the fraction text SHALL be controlled via inline `style.fontSize` rather than a Tailwind utility class.

#### Scenario: Fraction display on initial load
- **WHEN** the widget loads with current=12 and total=20
- **THEN** the display text SHALL show "12/20"

#### Scenario: Fraction display updates on slider change
- **WHEN** the user moves the progress slider to value 5 with total=20
- **THEN** the display text SHALL update to "5/20"

#### Scenario: Fraction display updates on total change
- **WHEN** the user changes total to 50 with current value 5
- **THEN** the display text SHALL update to "5/50"

#### Scenario: Fraction text does not use hardcoded Tailwind font size class
- **WHEN** the page loads
- **THEN** the `#displayPercent` element SHALL NOT have the `text-sm` class and SHALL have an inline `font-size` style
