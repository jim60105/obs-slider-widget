## 1. Remove Glow from CSS

- [ ] 1.1 In `style.css`, remove the 2 theme-colored glow `text-shadow` layers (6px and 18px blur lines using `color-mix(in srgb, var(--theme-color) ...)`) from the `.progress-title` rule, keeping all 8 white outline layers intact
- [ ] 1.2 In `style.css`, remove the 2 theme-colored glow `text-shadow` layers from the `.progress-status` rule, keeping all 8 white outline layers intact

## 2. Remove Glow from JavaScript

- [ ] 2.1 In `app.js`, find and remove any inline `text-shadow` glow logic for `#displayPercent` that sets theme-colored glow layers, keeping only the white outline layers if present

## 3. Verification

- [ ] 3.1 Open the widget in a browser and verify that progress title, status text, and fraction display show white outlines but no theme-colored glow halo
- [ ] 3.2 Change the theme color via the color picker and verify the text color still updates correctly (only the glow is removed, not the text color)
