## MODIFIED Requirements

### Requirement: Enhanced glass track visibility
The `.glass-track` element SHALL have enhanced glassmorphism properties that make it clearly distinguishable within the main glass panel: a brighter semi-transparent background, a thicker more visible border, and a strengthened glow shadow.

#### Scenario: Glass track stands out in main panel
- **WHEN** the `.glass-track` element is rendered inside the `<main>` panel
- **THEN** it SHALL have a background of at least `rgba(255,255,255,0.12)`, a `2px solid` border of at least `rgba(255,255,255,0.5)`, and a box-shadow that includes both a subtle outer glow (`0 0 15px rgba(255,255,255,0.15)`) and an inset highlight

#### Scenario: Glass track contrast with glass fill
- **WHEN** the progress bar is partially filled
- **THEN** the `.glass-track` background and `2px` border SHALL be visible enough to clearly define the track boundary, providing contrast between the unfilled track area and the white `.glass-fill`
