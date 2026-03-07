# Right-Aligned Widget

## Purpose

Positions the progress bar widget at the right edge of the display panel.

## Requirements

### Requirement: Right-aligned widget positioning
The progress bar widget SHALL be positioned at the right edge of the display panel. The `<main>` container SHALL use right-aligned flex justification (e.g., `justify-end`) so the widget is flush against the right side rather than centered horizontally.

#### Scenario: Widget is right-aligned on load
- **WHEN** the page loads
- **THEN** the progress bar widget (title, track, and percentage) SHALL be visually positioned at the right side of the display panel

#### Scenario: Widget remains right-aligned at different widths
- **WHEN** the browser window or OBS source width changes
- **THEN** the progress bar widget SHALL remain at the right edge of the display panel
