## Why

The native HTML `<select>` element does not function correctly inside OBS browser sources (which use an embedded Chromium engine). Users cannot interact with the preset dropdown when the widget is loaded as an OBS browser source, making preset switching impossible during streams. A reference project (UnfairSpinWheel) solved this by using a fully custom dropdown built with standard HTML elements instead of native `<select>`, confirming that custom dropdowns work reliably in OBS.

## What Changes

- Replace the native `<select id="presetSelect">` with a custom dropdown component built from `<div>`, `<button>`, and `<ul>/<li>` elements that renders and behaves identically to a native dropdown but works in OBS browser sources.
- The custom dropdown must support: click-to-toggle, option selection, keyboard navigation (Arrow keys, Enter, Escape), and click-outside-to-close.
- The custom dropdown must visually match the existing `.glass-input` glassmorphism styling and dark-themed options.
- All existing JavaScript that references `presetSelect` (change events, value reading, option population) must be updated to work with the new custom dropdown API.

## Capabilities

### New Capabilities
- `custom-dropdown`: A reusable custom dropdown component built with vanilla HTML/CSS/JS that replaces native `<select>` elements, providing OBS browser source compatibility while maintaining keyboard accessibility and glassmorphism styling.

### Modified Capabilities
- `preset-ui`: The preset management section replaces the native `<select>` dropdown with the new custom dropdown component, changing how presets are listed and selected.

## Impact

- **Code**: `index.html` (HTML structure change for preset select area), `style.css` (new custom dropdown styles), `app.js` (updated preset dropdown population and event handling logic)
- **Dependencies**: None — remains pure vanilla JS with no external libraries
- **APIs**: Internal functions `refreshPresetDropdown()` and preset change event handling will be refactored to target the custom dropdown DOM structure instead of a native `<select>` element
- **Breaking changes**: None — user-facing behavior remains identical; presets and localStorage data are unaffected
