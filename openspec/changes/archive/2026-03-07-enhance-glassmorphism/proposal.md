## Why

The glassmorphism effect is not actually visible in the current implementation. Glass panels appear as barely-visible semi-transparent overlays against the dark `#1a1a2e` background — the CSS custom property values are too subtle to produce a convincing frosted-glass look. The main panel (right side) appears nearly empty, and the glass track blends into the background.

## What Changes

- **Increase glass background opacity and add gradient**: Replace flat `rgba(255,255,255,0.15)` with a diagonal gradient that gives color depth and visible glass tinting
- **Stronger backdrop blur**: Increase from `blur(12px)` to `blur(20px)` for a more pronounced frosted effect
- **More visible border**: Brighten the border to `rgba(255,255,255,0.4)` and add an inset highlight to simulate light refraction
- **Enhanced shadow with depth layers**: Replace the single subtle shadow with multi-layer shadows including an inset highlight for inner glow
- **Enhanced glass track visibility**: Strengthen the track's opacity, border, and glow so the progress bar stands out against the main panel
- **Add inner glow/highlight**: Use inset box-shadow on `.glass` elements for a subtle top-edge light reflection effect

## Capabilities

### New Capabilities

_(none)_

### Modified Capabilities

- `glass-panels`: Updating all four CSS custom properties (`--glass-bg`, `--glass-blur`, `--glass-border`, `--glass-shadow`) to stronger values and enhancing the `.glass` class with gradient background and inner glow. Enhancing `.glass-track` visibility.

## Impact

- **index.html**: CSS custom properties in `:root`, `.glass` class rules, and `.glass-track` rules will be updated
- **Visual**: All glassmorphism elements will appear more prominently — the main panel will have a visible frosted-glass surface, and the progress bar track will stand out
- **OBS compatibility**: Must verify that enhanced glass still looks correct on transparent OBS background (no opaque artifacts)
- **Aside panel**: Retains its dark `rgba(15,15,30,0.95)` override — glass enhancements are visible but subdued under the dark overlay
