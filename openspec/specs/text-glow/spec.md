## ADDED Requirements

### Requirement: Progress title glow
The `.progress-title` element SHALL have a multi-layered `text-shadow` that creates a visible glow effect using `var(--theme-color)`.

#### Scenario: Title displays with glow
- **WHEN** the progress bar widget is rendered
- **THEN** the `.progress-title` text SHALL display with a luminous glow halo derived from `var(--theme-color)`

#### Scenario: Title glow adapts to theme color change
- **WHEN** the user changes the theme color via the color picker
- **THEN** the `.progress-title` glow color SHALL update in real time to match the new `--theme-color` value

### Requirement: Progress status glow
The `.progress-status` element SHALL have a multi-layered `text-shadow` that creates a visible glow effect using `var(--theme-color)`.

#### Scenario: Status text displays with glow
- **WHEN** the progress bar widget is rendered
- **THEN** the `.progress-status` text SHALL display with a luminous glow halo derived from `var(--theme-color)`

#### Scenario: Status glow adapts to theme color change
- **WHEN** the user changes the theme color via the color picker
- **THEN** the `.progress-status` glow color SHALL update in real time to match the new `--theme-color` value

### Requirement: Display percent glow
The `#displayPercent` element SHALL have a `text-shadow` glow effect applied via its inline style, using the current theme color.

#### Scenario: Fraction display shows with glow
- **WHEN** the fraction display (`#displayPercent`) is rendered or updated
- **THEN** the text SHALL display with a luminous glow halo matching the current theme color

#### Scenario: Fraction glow updates with theme color
- **WHEN** the user changes the theme color via the color picker
- **THEN** the `#displayPercent` glow SHALL update to use the new theme color value
