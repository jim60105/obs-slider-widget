## Why

The `<select>` dropdown for preset selection renders its `<option>` elements with white text (inherited from `.glass-input` styling) on the browser's native white dropdown background, making options completely unreadable. This is a usability bug that prevents users from selecting presets in regular browsers.

## What Changes

- Add a CSS rule targeting `<option>` elements inside `select.glass-input` to set a dark background and white text, ensuring readability in browser-native dropdown rendering.
- No structural HTML or JavaScript changes required; the fix is purely CSS.

## Capabilities

### New Capabilities

_(none)_

### Modified Capabilities

- `control-panel-theme`: Add a requirement that `<option>` elements within dropdown selects must have explicit dark background and light text colors for readability in browser-native dropdown rendering.

## Impact

- **Code**: `index.html` — a single CSS rule addition in the `<style>` block.
- **APIs / Dependencies**: None affected.
- **Systems**: Visual change only; no behavior change to preset loading, saving, or deletion logic.
