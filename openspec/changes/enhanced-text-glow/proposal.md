## Why

The progress bar widget's text elements (title, status fraction, and percentage) currently use semi-transparent theme color but lack any luminous visual effect. Adding a glowing text-shadow would enhance the glassmorphism aesthetic, making text stand out against the transparent OBS overlay background and creating a cohesive neon/luminous look.

## What Changes

- Add `text-shadow` glow effects to `.progress-title` using the theme color for a soft luminous halo
- Add `text-shadow` glow effects to `.progress-status` for consistent glow across all vertical text
- Add `text-shadow` glow effects to `#displayPercent` inline styles for the fraction display
- Use multi-layered `text-shadow` with `var(--theme-color)` to create a diffused glow that adapts when users change the theme color

## Capabilities

### New Capabilities

- `text-glow`: CSS text-shadow glow effects applied to progress bar text elements (title, status, percentage) using the theme color custom property

### Modified Capabilities

## Impact

- `index.html`: CSS styles for `.progress-title`, `.progress-status`, and the inline style of `#displayPercent`
- The glow effect must use `var(--theme-color)` so it responds to the color picker in real time
- No new dependencies; pure CSS `text-shadow` property
