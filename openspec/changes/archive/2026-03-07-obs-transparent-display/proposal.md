## Why

When running inside OBS as a browser source, the display panel (`<main>`) still renders with the glassmorphism `.glass` styling (semi-transparent background, border, box-shadow, backdrop-filter). This creates a visible panel background in the OBS scene instead of blending seamlessly with the scene content. The display widget should appear on a fully transparent background in OBS mode so only the progress bar and text are visible.

## What Changes

- In OBS mode (`html.obs`), the `<main>` element's glassmorphism styling is fully suppressed: no background, no border, no box-shadow, and no backdrop-filter.
- The display widget (progress bar, title, fraction text) remains fully visible and unchanged.
- No changes to normal browser rendering — the glass panel still appears outside OBS.

## Capabilities

### New Capabilities
- `obs-transparent-display`: Removes all glassmorphism visual styling from the display panel when running in OBS mode, making the `<main>` background fully transparent.

### Modified Capabilities

## Impact

- `index.html`: New CSS rules under `html.obs` selector targeting the `<main>` element's glass styling properties.
- No changes to JS logic, control panel, or existing OBS detection mechanism.
- No breaking changes to any existing functionality.
