## Why

The display area established by `page-layout-scaffold` is empty. The project's core purpose is a vertical progress bar overlay for OBS, so this widget must be built next. It introduces the glassmorphism progress bar — the central visual element that all future controls will drive.

## What Changes

- Add a glassmorphism vertical progress bar widget inside the `<main>` display area
- Create a glass track (capsule-shaped outer container, 20×400px) with backdrop blur, semi-transparent background, glass border, and subtle shadow
- Create a glass fill (inner progress element) using `transform: scaleY()` with `transform-origin: bottom` for GPU-accelerated, reflow-free animation
- Smooth CSS transition on fill: `transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)`
- Add vertical title text (left of bar) using `writing-mode: vertical-rl`, with dynamically adjustable font size via JS
- Add percentage display (right of bar, bottom-aligned) showing current progress as "XX%"
- Implement `updateProgressDisplay(percent)` JS function that clamps 0-100, updates scaleY, percentage text, and ARIA attributes
- Add accessibility: `role="progressbar"`, `aria-valuemin`, `aria-valuemax`, `aria-valuenow`

## Capabilities

### New Capabilities
- `progress-bar-widget`: Glassmorphism vertical progress bar with glass track, animated fill, vertical title text, percentage display, accessibility attributes, and JS update function

### Modified Capabilities
<!-- No existing capabilities to modify — this is a new widget addition. -->

## Impact

- **Modified file**: `index.html` — adds HTML structure, CSS, and JS inside the existing `<main>` display area
- **Dependencies**: None new; uses existing Tailwind CSS CDN and CSS custom properties from `page-layout-scaffold`
- **API surface**: Exposes global `updateProgressDisplay(percent)` function for other components to call
- **Future work**: Control panel inputs (from upcoming changes) will call `updateProgressDisplay()` to drive the bar
