## MODIFIED Requirements

### Requirement: Status text displays in vertical writing mode
The status/fraction text (`#displayPercent`) SHALL render in horizontal writing mode with `text-align: center`, displaying each part of the fraction on its own line in a stacked column layout. The `writing-mode: vertical-rl` and `text-orientation: mixed` CSS properties SHALL be removed.

#### Scenario: Fraction text renders horizontally in stacked lines
- **WHEN** the widget displays a fraction value such as "12/20"
- **THEN** the status text SHALL render horizontally with current value, slash, and total each on a separate centered line

#### Scenario: Text uses standard horizontal writing mode
- **WHEN** the widget renders the status text
- **THEN** the `#displayPercent` element SHALL NOT have `writing-mode: vertical-rl` or `text-orientation: mixed` styles

### Requirement: Status text maintains bottom alignment
The status text SHALL be positioned below the slider track, centered horizontally relative to the track, within a flex column container.

#### Scenario: Status text appears below the track
- **WHEN** the widget renders with the status text
- **THEN** the `#displayPercent` element SHALL be positioned below the slider track, centered horizontally within a shared column container

## REMOVED Requirements

### Requirement: Mixed characters rotate naturally
**Reason**: Vertical writing mode is removed; characters no longer need rotation behavior.
**Migration**: Characters render in standard horizontal orientation. No action needed.
