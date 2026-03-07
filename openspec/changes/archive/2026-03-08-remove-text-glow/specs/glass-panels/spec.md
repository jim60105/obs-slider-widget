# Glass Panels (Delta)

## MODIFIED Requirements

### Requirement: Reusable glass utility class
The `.glass` CSS class SHALL apply enhanced glassmorphism properties: a diagonal gradient background for color depth, `backdrop-filter` using `--glass-blur`, and a `1px solid` border using `--glass-border`. The `.glass` class SHALL NOT include a `box-shadow` property.

#### Scenario: Glass class applies effect without shadow
- **WHEN** the `.glass` class is added to any HTML element
- **THEN** that element SHALL display a gradient glass background (`linear-gradient(135deg, rgba(255,255,255,0.18) 0%, rgba(255,255,255,0.08) 100%)`), a 20px backdrop blur, and a border with `rgba(255,255,255,0.4)`
- **AND** that element SHALL NOT have a `box-shadow` property applied

### Requirement: Enhanced glass track visibility
The `.glass-track` element SHALL have enhanced glassmorphism properties that make it clearly distinguishable within the main glass panel: a brighter semi-transparent background and a thicker more visible border. The `.glass-track` element SHALL NOT include a `box-shadow` property.

#### Scenario: Glass track stands out without shadow
- **WHEN** the `.glass-track` element is rendered inside the `<main>` panel
- **THEN** it SHALL have a background of at least `rgba(255,255,255,0.12)` and a `2px solid` border of at least `rgba(255,255,255,0.5)`
- **AND** it SHALL NOT have a `box-shadow` property applied
