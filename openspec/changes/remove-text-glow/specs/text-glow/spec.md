## REMOVED Requirements

### Requirement: Progress title glow
**Reason**: The theme-colored glow effect is not rendering correctly and is being removed entirely.
**Migration**: No migration needed. The white outline layers (defined in `text-white-outline` spec) remain and provide sufficient text readability.

#### Scenario: Title displays with glow
- **WHEN** the progress bar widget is rendered
- **THEN** the `.progress-title` text SHALL display with white outline shadow layers followed by a luminous glow halo derived from `var(--theme-color)`

### Requirement: Progress status glow
**Reason**: The theme-colored glow effect is not rendering correctly and is being removed entirely.
**Migration**: No migration needed. The white outline layers (defined in `text-white-outline` spec) remain and provide sufficient text readability.

#### Scenario: Status text displays with glow
- **WHEN** the progress bar widget is rendered
- **THEN** the `.progress-status` text SHALL display with white outline shadow layers followed by a luminous glow halo derived from `var(--theme-color)`

### Requirement: Display percent glow
**Reason**: The theme-colored glow effect is not rendering correctly and is being removed entirely.
**Migration**: No migration needed. The white outline layers (defined in `text-white-outline` spec) remain and provide sufficient text readability.

#### Scenario: Fraction display shows with glow
- **WHEN** the fraction display (`#displayPercent`) is rendered or updated
- **THEN** the text SHALL display with white outline shadow layers followed by a luminous glow halo matching the current theme color
