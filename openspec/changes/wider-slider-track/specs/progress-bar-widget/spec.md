## MODIFIED Requirements

### Requirement: Glass track container
The display area SHALL contain a glass track element with capsule shape (`width: 40px`, `border-radius: 999px`). The track SHALL fill the full available vertical space of its container instead of using a fixed height. The track SHALL have a glassmorphism effect: semi-transparent background, `backdrop-filter: blur(12px)`, a `4px solid` semi-transparent border, and a subtle box-shadow. The track SHALL use `overflow: hidden` and `position: relative`.

#### Scenario: Track renders with correct dimensions
- **WHEN** the page loads
- **THEN** the glass track element SHALL be visible with width 40px, fully rounded corners (border-radius 999px), and height stretching to fill the available vertical space of the display panel

#### Scenario: Track has glassmorphism styling
- **WHEN** the page loads
- **THEN** the glass track SHALL have a semi-transparent background, backdrop blur of 12px, a `4px solid` semi-transparent border, and a subtle box-shadow

#### Scenario: Track border is doubled
- **WHEN** the page loads
- **THEN** the glass track border SHALL be `4px solid rgba(255, 255, 255, 0.5)` (doubled from previous 2px)
