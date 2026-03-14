## Why

The preview image (`docs/preview.png`) shows the widget in OBS with a frosted glassmorphism panel behind the progress bar group, but the current implementation strips all glass styling from `<main>` in OBS mode (`html.obs main { background: transparent; backdrop-filter: none; }`). Users have no way to add a translucent frosted-glass backdrop behind the widget for a polished overlay look on stream.

## What Changes

- Add a new inner `<div>` wrapper inside `<main>` around the widget content (title + track + fraction) that can display an independent frosted-glass panel background
- Add a toggle control in the control panel to enable/disable this panel background
- The inner panel uses glassmorphism styling (semi-transparent background, backdrop-blur, subtle white border, rounded corners) matching the aesthetic in the preview image
- The panel background is independent from the `<main>` OBS transparency override, so it works in both normal browser and OBS modes
- Panel background state is persisted as part of the preset system

## Capabilities

### New Capabilities
- `display-panel-background`: A toggleable frosted-glass panel background that wraps the widget content inside the display area. Provides a translucent, blurred backdrop behind the progress bar group visible in both regular browser and OBS modes.

### Modified Capabilities
- `preset-persistence`: Add the new panel background toggle state to the preset save/load schema.

## Impact

- **HTML**: New wrapper `<div>` inside `<main>` around the existing widget flex container; new toggle control in the control form
- **CSS**: New glass-panel class for the inner wrapper with glassmorphism properties; no changes to existing `html.obs main` rules since the panel is a separate element
- **JavaScript**: New toggle handler in the `controlForm` event delegation switch; preset schema extended with panel background boolean field
- **Existing specs**: `obs-transparent-display` is unaffected — `<main>` remains transparent in OBS; the new inner panel is a child element with its own styling
