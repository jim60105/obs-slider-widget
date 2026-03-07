# Progress Bar Widget

## Purpose

Defines the glassmorphism progress bar display widget including the glass track, animated fill, vertical title text, percentage display, layout, accessibility, and the JavaScript update function.

## Requirements

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

### Requirement: Glass fill element
The glass track SHALL contain a fill child element that spans the full width and height of the track. The fill SHALL have a semi-opaque white background (`rgba(255,255,255,0.9)`). The fill SHALL use `transform: scaleY()` for animation with `transform-origin: bottom` so it grows from the bottom up. The fill SHALL have a CSS transition: `transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)`. The initial state SHALL be `scaleY(0)`.

#### Scenario: Fill initial state is empty
- **WHEN** the page loads
- **THEN** the fill element SHALL have `transform: scaleY(0)` and be visually empty

#### Scenario: Fill animates smoothly
- **WHEN** `updateProgressDisplay(50)` is called
- **THEN** the fill element SHALL transition to `transform: scaleY(0.5)` with a 0.4s cubic-bezier ease, growing from the bottom

### Requirement: Vertical title text
A title text element SHALL be displayed to the left of the glass track. The text SHALL use `writing-mode: vertical-rl` and `text-orientation: mixed`. The text SHALL have bold weight, subtle color, and letter-spacing. The default text SHALL be "今天喝了幾杯飲料". The font size SHALL be dynamically adjustable via JavaScript, with a CSS transition for smooth font-size changes.

#### Scenario: Title displays default text vertically
- **WHEN** the page loads
- **THEN** a vertical text element reading "今天喝了幾杯飲料" SHALL appear to the left of the glass track, rendered with `writing-mode: vertical-rl`

#### Scenario: Title font size changes smoothly
- **WHEN** the title font size is updated via JavaScript
- **THEN** the font size change SHALL animate with a CSS transition

### Requirement: Percentage display
A percentage text element SHALL be displayed to the right of the glass track, aligned to the bottom. The text SHALL show the current progress as "XX%" in a small font with subtle color.

#### Scenario: Percentage shows initial value
- **WHEN** the page loads
- **THEN** the percentage display SHALL show "0%"

#### Scenario: Percentage updates with progress
- **WHEN** `updateProgressDisplay(75)` is called
- **THEN** the percentage display SHALL show "75%"

### Requirement: Container layout
The progress bar widget container SHALL use a flex row layout with a gap between elements. Items SHALL be aligned with stretch behavior so children can fill the full container height. The container itself SHALL stretch vertically to fill the display panel.

#### Scenario: Elements are laid out horizontally with full height
- **WHEN** the page loads
- **THEN** the title text, glass track, and percentage display SHALL be arranged in a horizontal row with spacing, and the container SHALL stretch to fill the available vertical space of the display panel

### Requirement: Accessibility attributes
The glass track element SHALL have `role="progressbar"`, `aria-valuemin="0"`, and `aria-valuemax="100"`. The `aria-valuenow` attribute SHALL be updated dynamically to reflect the current progress value.

#### Scenario: ARIA attributes are present on load
- **WHEN** the page loads
- **THEN** the glass track SHALL have `role="progressbar"`, `aria-valuemin="0"`, `aria-valuemax="100"`, and `aria-valuenow="0"`

#### Scenario: ARIA value updates with progress
- **WHEN** `updateProgressDisplay(60)` is called
- **THEN** `aria-valuenow` on the glass track SHALL be updated to "60"

### Requirement: updateProgressDisplay function
A global JavaScript function `updateProgressDisplay(percent)` SHALL be available. It SHALL clamp the input value to the range 0-100. It SHALL update the fill element's `scaleY` transform to `percent / 100`. It SHALL update the percentage text to show the clamped value. It SHALL update the `aria-valuenow` attribute on the track element.

#### Scenario: Value is within range
- **WHEN** `updateProgressDisplay(42)` is called
- **THEN** the fill SHALL have `transform: scaleY(0.42)`, the percentage text SHALL show "42%", and `aria-valuenow` SHALL be "42"

#### Scenario: Value exceeds 100
- **WHEN** `updateProgressDisplay(150)` is called
- **THEN** the value SHALL be clamped to 100: fill at `scaleY(1)`, text shows "100%", `aria-valuenow` is "100"

#### Scenario: Value is below 0
- **WHEN** `updateProgressDisplay(-10)` is called
- **THEN** the value SHALL be clamped to 0: fill at `scaleY(0)`, text shows "0%", `aria-valuenow` is "0"
