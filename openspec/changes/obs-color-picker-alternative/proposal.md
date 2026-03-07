## Why

The `<input type="color">` element is not supported in OBS browser source, making the theme color picker non-functional for users who configure the widget inside OBS. Replacing it with an OBS-compatible text-based hex color input ensures all users can customize the theme color regardless of their environment.

## What Changes

- Remove the `<input type="color">` element for theme color selection.
- Add a text input that accepts hex color values (e.g. `#ff0000`) with real-time validation.
- Add a color preview swatch (a small `<div>`) adjacent to the text input that displays the currently entered color.
- The text input validates hex format (`#` followed by 3 or 6 hex digits) and updates `--theme-color` in real-time on valid input.
- Invalid hex values do not update the theme color; the swatch reflects only the last valid color.

## Capabilities

### New Capabilities

_(none)_

### Modified Capabilities

- `theme-color-picker`: Replace `<input type="color">` with a hex text input and color preview swatch. Validation and real-time sync behavior change at the spec level.

## Impact

- **Code**: `index.html` — the color picker markup in the control form and associated JS event handler.
- **UX**: Users type hex codes instead of using a native color picker dialog. A visual swatch provides immediate color feedback.
- **Compatibility**: Restores theme color functionality in OBS browser source.
