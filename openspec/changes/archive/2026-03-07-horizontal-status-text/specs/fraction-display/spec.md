## MODIFIED Requirements

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
