# Full-Height Track

## Purpose

Makes the glass progress bar track stretch to fill the full available vertical space.

## Requirements

### Requirement: Full-height glass track
The glass track SHALL stretch to fill the entire available vertical space of the display panel instead of using a fixed pixel height. The track container and its parent flex container SHALL use flex-grow or equivalent CSS to ensure the track expands vertically.

#### Scenario: Track fills available vertical space
- **WHEN** the page loads at any viewport height
- **THEN** the glass track SHALL stretch to fill the full vertical space of the display panel (minus any padding), rather than being limited to a fixed 400px height

#### Scenario: Track adapts to viewport resize
- **WHEN** the browser window or OBS source is resized vertically
- **THEN** the glass track height SHALL adjust dynamically to match the new available vertical space

#### Scenario: Fill animation still works at full height
- **WHEN** `updateProgressDisplay(50)` is called with a full-height track
- **THEN** the fill element SHALL still animate to `scaleY(0.5)` and fill half the track, regardless of the track's pixel height
