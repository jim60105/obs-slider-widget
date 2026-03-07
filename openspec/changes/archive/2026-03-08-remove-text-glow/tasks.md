## 1. Remove Glow from CSS

- [x] 1.1 In `style.css`, remove the 2 theme-colored glow `text-shadow` layers (6px and 18px blur lines using `color-mix(in srgb, var(--theme-color) ...)`) from the `.progress-title` rule, keeping all 8 white outline layers intact
- [x] 1.2 In `style.css`, remove the 2 theme-colored glow `text-shadow` layers from the `.progress-status` rule, keeping all 8 white outline layers intact

## 2. Remove Glow from JavaScript

- [x] 2.1 In `app.js`, find and remove any inline `text-shadow` glow logic for `#displayPercent` that sets theme-colored glow layers, keeping only the white outline layers if present

## 3. Remove Box-Shadow from CSS

- [x] 3.1 Remove `--glass-shadow` CSS variable from `:root`
- [x] 3.2 Remove `box-shadow` property from `.glass` class
- [x] 3.3 Remove `box-shadow` property from `.glass-track`
- [x] 3.4 Remove `box-shadow` property from `.glass-range::-webkit-slider-thumb` and `.glass-range::-moz-range-thumb`

## 4. Verification

- [x] 4.1 Open the widget in a browser and verify that progress title, status text, and fraction display show white outlines but no theme-colored glow halo
- [x] 4.2 Change the theme color via the color picker and verify the text color still updates correctly (only the glow is removed, not the text color)
- [x] 4.3 Verify glass panels, progress bar track, and slider controls render without box-shadow effects
