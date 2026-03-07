## Why

The slider widget currently uses hardcoded white for all accent elements (fill, title, status text), offering no visual customization. A theme color picker lets streamers match the widget to their brand or scene palette in real time, without editing code.

## What Changes

- Add an `<input type="color">` control to the control panel for selecting a theme color
- Introduce a `--theme-color` CSS custom property as the single source of truth for accent color
- Apply `--theme-color` to the progress bar fill, vertical title text, and fraction status text
- Wire the color picker into the existing real-time sync system so color changes are reflected instantly
- Default to `#ffffff` (white), preserving the current appearance out of the box

## Capabilities

### New Capabilities
- `theme-color-picker`: Color picker control and CSS variable–based theming for slider accent elements

### Modified Capabilities

## Impact

- `index.html`: New `<input type="color">` in `#controlForm`, new CSS variable on `:root`, updated styles for `.glass-fill`, `.progress-title`, and `#displayPercent`, new case in the `input` event handler
- No new dependencies; uses native `<input type="color">` and CSS custom properties
