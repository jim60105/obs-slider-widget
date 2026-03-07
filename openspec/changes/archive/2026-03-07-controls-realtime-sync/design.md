## Context

The OBS slider widget has a two-panel glassmorphism layout (`page-layout-scaffold`) and a vertical progress bar display (`glassmorphism-progress-bar`). The display panel shows a glass track with animated fill, vertical title text, and a percentage label. Currently there is no way to control the display — the progress bar values are hardcoded.

This change adds interactive form controls to the left `<aside>` panel and wires them to the display in real time, completing the widget's core functionality.

## Goals / Non-Goals

**Goals:**
- Provide glassmorphism-styled form controls (text input, two range sliders) that visually match the existing glass aesthetic
- Achieve instant, smooth updates to the display as the user manipulates controls (no submit/reload)
- Initialize the display from form default values on page load
- Add a footer with copyright and license information

**Non-Goals:**
- Persisting control values across page reloads (localStorage, URL params, etc.)
- Adding controls for colors, bar width, or other advanced customization
- Mobile/touch optimization beyond basic browser range input support
- Accessibility beyond semantic HTML and `aria-valuenow` (screen reader announcements, keyboard shortcuts)

## Decisions

### 1. Event delegation on `input` event vs per-element listeners

**Decision**: Use a single `input` event listener on the `<form>` element with event delegation.

**Rationale**: One listener handles all three controls. The `input` event fires continuously during slider drag (unlike `change` which fires on release), giving true real-time feedback. Event delegation keeps the JS minimal and makes it trivial to add controls later.

**Alternative considered**: Individual `addEventListener` per control — more explicit but more boilerplate, harder to maintain.

### 2. Custom slider styling via CSS pseudo-elements vs external library

**Decision**: Use native `<input type="range">` with custom CSS via `::-webkit-slider-*` and `::-moz-range-*` pseudo-elements.

**Rationale**: No external dependencies; the glassmorphism track and thumb can be achieved with `background`, `backdrop-filter`, `border`, and `box-shadow` on the pseudo-elements. This keeps the project as a pure static site with no build step.

**Alternative considered**: A JS slider library (e.g., noUiSlider) — adds a dependency and complexity for minimal gain in this use case.

### 3. Inline `<style>` and `<script>` in index.html vs separate files

**Decision**: Keep all CSS and JS inline in `index.html`.

**Rationale**: The project is a single-file static widget loaded as an OBS browser source. A single HTML file is simplest to configure in OBS and avoids relative-path issues. The total code size is small enough to stay maintainable in one file.

### 4. Footer positioning with `margin-top: auto`

**Decision**: Use `margin-top: auto` on the footer inside a flex-column `<aside>` to push it to the bottom.

**Rationale**: The controls panel uses `display: flex; flex-direction: column`. Adding `margin-top: auto` to the footer is a clean CSS-only approach that avoids absolute positioning or JavaScript measurement. It works regardless of how many controls are above it.

## Risks / Trade-offs

- **Cross-browser slider styling** → Requires both `-webkit-` and `-moz-` pseudo-element rules; Firefox and Chromium use different selectors. Mitigation: test in both engines; OBS uses Chromium-based CEF, so `-webkit-` is the primary target.
- **No state persistence** → Refreshing the OBS browser source resets all controls to defaults. Mitigation: acceptable for v1; URL query param persistence can be added in a future change.
- **Single-file growth** → Adding more controls will grow `index.html`. Mitigation: the current scope (3 controls + footer + event wiring) is well within manageable size; extraction can happen if complexity warrants it.
