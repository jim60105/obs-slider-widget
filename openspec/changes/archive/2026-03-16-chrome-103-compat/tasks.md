## 1. JavaScript Utility Functions

- [x] 1.1 Add `hexToRgba(hex, alpha)` function in `app.js` that converts 3-digit or 6-digit hex colors to `rgba()` strings, returning `null` for invalid input
- [x] 1.2 Add `applyThemeColor(hex)` function in `app.js` that validates hex, then sets `--theme-color`, `--theme-color-90`, and `--theme-color-80` CSS custom properties on `:root` via `document.documentElement.style`, and updates the `themeColor` input's left border color to match

## 2. CSS Migration

- [x] 2.1 In `style.css`, replace `.progress-title` `color: color-mix(in srgb, var(--theme-color) 80%, transparent)` with `color: var(--theme-color-80, rgba(119, 0, 119, 0.8))` (fallback matches default `#707` at 80% for pre-JS render)
- [x] 2.2 In `style.css`, replace `.glass-fill` `background: color-mix(in srgb, var(--theme-color) 90%, transparent)` with `background: var(--theme-color-90, rgba(119, 0, 119, 0.9))` (fallback matches default `#707` at 90% for pre-JS render)
- [x] 2.3 In `index.html`, replace `#displayPercent` inline style `color: color-mix(in srgb, var(--theme-color) 80%, transparent)` with `color: var(--theme-color-80, rgba(119, 0, 119, 0.8))` (fallback matches default `#707` at 80% for pre-JS render)

## 3. Theme Color Integration

- [x] 3.1 Refactor the `themeColor` case in the `controlForm` input event handler to call `applyThemeColor(hex)` instead of directly setting `--theme-color` and border color
- [x] 3.2 Refactor `loadPreset()` theme color application to call `applyThemeColor(hex)` instead of directly setting `--theme-color`
- [x] 3.3 Call `applyThemeColor()` with the default theme color during `DOMContentLoaded` initialization to set derived CSS variables on page load

## 4. Verification

- [x] 4.1 Visually verify the widget renders correctly by opening in a local server — progress title, fill bar, and status text should display theme-colored text/backgrounds
- [x] 4.2 Verify theme color changes update all three themed elements in real time
- [x] 4.3 Verify preset loading correctly applies theme color and derived variables
