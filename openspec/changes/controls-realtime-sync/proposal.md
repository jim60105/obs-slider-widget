## Why

The widget now has a two-panel layout and a vertical progress bar display, but there is no way for the user to interact with or control the display. This change adds form controls to the left panel and wires them to the display in real time, making the widget fully functional as a live OBS overlay controller.

## What Changes

- Add glassmorphism-styled form controls inside the left `<aside>` panel: a text input for the title, a range slider for font size, and a range slider for progress value
- Each control has a descriptive `<label>` and the form has a heading ("控制台")
- Custom slider styling: glass track, white circular thumb with glass border and shadow
- Implement real-time two-way sync using `input` event delegation on the form — no submit button
  - Title text input → updates display title `textContent` immediately
  - Font size slider → updates display title `style.fontSize` immediately
  - Progress slider → calls `updateProgressDisplay(value)` to update scaleY, percentage text, and `aria-valuenow`
- On `DOMContentLoaded`, read initial form values and apply them to the display
- Add a footer at the bottom of the controls panel with copyright, GitHub link (SVG icon), and AGPLv3 license link

## Capabilities

### New Capabilities
- `control-form`: Glassmorphism-styled form controls (text input, range sliders) with labels, heading, and custom slider appearance
- `realtime-sync`: Live binding between form controls and the progress bar display via `input` event delegation, plus DOMContentLoaded initialization
- `controls-footer`: Footer element at the bottom of the controls panel with copyright notice, GitHub icon link, and AGPLv3 license link

### Modified Capabilities
<!-- No existing spec-level requirements are changing — this change adds new capabilities that integrate with the existing layout and progress bar. -->

## Impact

- **Modified file**: `index.html` — adds form markup inside the `<aside>` panel, adds `<style>` rules for custom slider and input styling, adds `<script>` logic for event binding and initialization
- **Dependencies**: No new external dependencies; uses existing Tailwind CSS CDN and custom CSS
- **Integration**: Relies on the existing two-panel layout (`page-layout-scaffold`) and the progress bar DOM/JS API (`glassmorphism-progress-bar`)
