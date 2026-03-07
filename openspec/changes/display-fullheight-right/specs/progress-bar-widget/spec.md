## MODIFIED Requirements

### Requirement: Glass track container
The display area SHALL contain a glass track element with capsule shape (`width: 20px`, `border-radius: 999px`). The track SHALL fill the full available vertical space of its container instead of using a fixed height. The track SHALL have a glassmorphism effect: semi-transparent background, `backdrop-filter: blur(12px)`, a semi-transparent border, and a subtle box-shadow. The track SHALL use `overflow: hidden` and `position: relative`.

#### Scenario: Track renders with correct dimensions
- **WHEN** the page loads
- **THEN** the glass track element SHALL be visible with width 20px, fully rounded corners (border-radius 999px), and height stretching to fill the available vertical space of the display panel

#### Scenario: Track has glassmorphism styling
- **WHEN** the page loads
- **THEN** the glass track SHALL have a semi-transparent background, backdrop blur of 12px, a semi-transparent border, and a subtle box-shadow

### Requirement: Container layout
The progress bar widget container SHALL use a flex row layout with a gap between elements. Items SHALL be aligned with stretch behavior so children can fill the full container height. The container itself SHALL stretch vertically to fill the display panel.

#### Scenario: Elements are laid out horizontally with full height
- **WHEN** the page loads
- **THEN** the title text, glass track, and percentage display SHALL be arranged in a horizontal row with spacing, and the container SHALL stretch to fill the available vertical space of the display panel
