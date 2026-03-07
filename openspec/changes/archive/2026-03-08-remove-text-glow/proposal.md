## Why

The themed text-glow effect (luminous halo derived from `--theme-color`) applied to progress bar text elements is not rendering correctly. Rather than investing in debugging the glow rendering, the effect should be removed entirely. The white text outline (separate capability) provides sufficient readability on varied OBS backgrounds without the glow.

## What Changes

- Remove the 2 theme-colored `text-shadow` glow layers (`6px` and `18px` blur) from `.progress-title` in CSS
- Remove the 2 theme-colored `text-shadow` glow layers from `.progress-status` in CSS
- Remove any JavaScript that sets inline `text-shadow` glow layers on `#displayPercent`
- Retain the 8-direction white outline `text-shadow` layers on all three elements (unchanged)
- Remove the `text-glow` spec entirely since the capability is being deleted
- Remove `box-shadow` from `.glass` class (simplifying glassmorphism styling)
- Remove `box-shadow` from `.glass-track` element (simplifying track styling)
- Remove `box-shadow` from slider thumb pseudo-elements (`::-webkit-slider-thumb`, `::-moz-range-thumb`)

## Capabilities

### New Capabilities

None.

### Modified Capabilities
- `text-white-outline`: Remove scenarios that reference coexistence with theme glow, since glow no longer exists
- `glass-panels`: Remove box-shadow from `.glass` class and `.glass-track` element styling
- `control-panel-theme`: Remove box-shadow from slider thumb pseudo-elements

## Impact

- **Code**: `style.css` (remove 2 glow layers from `.progress-title` and `.progress-status` text-shadow rules; remove box-shadow from `.glass`, `.glass-track`, and slider thumb pseudo-elements), `app.js` (remove any inline text-shadow glow logic for `#displayPercent`)
- **Specs**: `text-glow` spec removed entirely; `text-white-outline` spec updated to remove glow coexistence references; `glass-panels` and `control-panel-theme` specs updated to remove box-shadow requirements
- **Dependencies**: None
- **Breaking changes**: None — visual change only, no API or data model impact
