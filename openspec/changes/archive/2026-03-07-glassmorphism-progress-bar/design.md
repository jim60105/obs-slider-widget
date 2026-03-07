## Context

The `page-layout-scaffold` change establishes a two-panel layout: a left `<aside>` for controls and a right `<main>` for the display area. The `<main>` panel is currently empty. This change adds the core widget — a glassmorphism vertical progress bar — inside that display area. The widget is a single-file addition to `index.html` (inline CSS + JS), consistent with the project's no-build, no-framework approach.

## Goals / Non-Goals

**Goals:**
- Render a vertical glassmorphism progress bar centered in the `<main>` display area
- Animate fill using GPU-accelerated `transform: scaleY()` (no layout reflow)
- Expose a global `updateProgressDisplay(percent)` function for other components to drive the bar
- Provide accessible markup with ARIA progressbar attributes
- Support dynamic title text and font-size adjustment via JS

**Non-Goals:**
- Control panel inputs (sliders, color pickers) — covered by a separate change
- Horizontal bar orientation or multi-bar layouts
- Theming or color customization UI — the bar uses fixed white/semi-opaque fill for now
- Persistent state or localStorage — the bar resets on page load

## Decisions

### 1. `transform: scaleY()` over `height` for fill animation
**Choice**: Animate fill via `transform: scaleY()` with `transform-origin: bottom`.
**Rationale**: `scaleY` is composited on the GPU and avoids triggering layout/reflow. `height` changes cause reflow on every frame, which is costly in an OBS browser source where performance matters.
**Alternatives considered**: `clip-path` (more complex, less browser support in OBS Chromium); `height` transition (simpler but triggers reflow).

### 2. Inline `<style>` and `<script>` in `index.html`
**Choice**: All CSS and JS remain inline in `index.html`.
**Rationale**: The project is a single static file with no build step. Extracting to separate files adds complexity without benefit at this scale. Tailwind utilities handle most styling; only custom properties and transitions need `<style>`.
**Alternatives considered**: Separate `.css`/`.js` files (unnecessary for a single-page widget).

### 3. Global function `updateProgressDisplay(percent)` as the public API
**Choice**: A single global function that accepts a percentage (0-100).
**Rationale**: Pure JS with no module system means global scope is the natural boundary. One function keeps the API surface minimal. It internally handles clamping, scaleY, text update, and ARIA update.
**Alternatives considered**: Event-based (`CustomEvent`) — adds indirection for no benefit given the simple interaction model.

### 4. `writing-mode: vertical-rl` for title text
**Choice**: Use CSS `writing-mode: vertical-rl` with `text-orientation: mixed` for the vertical title.
**Rationale**: Native CSS property with broad browser support. No JS rotation or SVG needed.
**Alternatives considered**: CSS `transform: rotate(-90deg)` (requires manual positioning and width calculations).

## Risks / Trade-offs

- **[OBS Chromium compatibility]** → OBS uses an embedded Chromium; `backdrop-filter` and `writing-mode` are well-supported in modern Chromium but not tested in older OBS versions. Mitigation: These properties degrade gracefully (no blur, horizontal text).
- **[Fixed dimensions]** → Track is hardcoded at 20×400px. Mitigation: Acceptable for the initial widget; dimension controls can be added in a future change.
- **[Global function pollution]** → `updateProgressDisplay` is a global. Mitigation: Only one function is exposed; naming is specific enough to avoid collisions.
