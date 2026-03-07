## Context

The progress bar widget displays three text elements overlaid on a glassmorphism progress bar: a vertical title (`.progress-title`), a vertical status/fraction display (`.progress-status` / `#displayPercent`), and a percentage indicator. These elements currently use `color-mix(in srgb, var(--theme-color) 80%, transparent)` for semi-transparent theme-colored text but have no luminous or glow effect. The widget is designed as a transparent OBS overlay where a glowing text effect would significantly improve visual presence against arbitrary stream backgrounds.

## Goals / Non-Goals

**Goals:**
- Add a visible, multi-layered `text-shadow` glow to `.progress-title`, `.progress-status`, and `#displayPercent`
- Use `var(--theme-color)` in the glow so it updates in real time when the user changes the theme color picker
- Maintain readability of the text while adding the glow effect

**Non-Goals:**
- Animated or pulsing glow effects (static glow only)
- Glow on control panel text or any non-progress-bar elements
- Adding new CSS custom properties for glow intensity or radius controls

## Decisions

### Multi-layered text-shadow approach
Use two or more `text-shadow` layers with increasing blur radius to create a natural glow falloff. A tight inner shadow (small blur) provides definition, while a wider outer shadow (larger blur) creates the luminous halo.

**Rationale**: Single-layer `text-shadow` produces a flat glow. Multi-layered shadows are the standard CSS technique for realistic neon/glow effects and have no performance cost in modern browsers.

**Alternative considered**: CSS `filter: drop-shadow()` — rejected because it cannot be layered as effectively and has worse performance on some browsers when applied to text.

### Apply glow via CSS class rules and inline style update
- `.progress-title` and `.progress-status`: add `text-shadow` in the existing `<style>` block
- `#displayPercent`: update the JavaScript that sets inline styles to also include the `text-shadow` property, ensuring it uses the current `--theme-color`

**Rationale**: Keeping the approach consistent with the existing codebase pattern where `.progress-title` styling is in CSS and `#displayPercent` uses inline styles set by JS.

## Risks / Trade-offs

- [Glow may reduce readability on light backgrounds] → Mitigated by using `80%` opacity in the glow color via `color-mix`, matching the existing text color approach
- [Inline style on `#displayPercent` is harder to maintain] → Acceptable trade-off; this follows the existing pattern and keeps the glow in sync with the dynamically-set color
