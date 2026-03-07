## Context

The current glassmorphism implementation uses four CSS custom properties (`--glass-bg`, `--glass-blur`, `--glass-border`, `--glass-shadow`) with values that are too subtle to produce a visible frosted-glass effect against the dark `#1a1a2e` body background. The main display panel appears nearly empty, and the glass track for the progress bar is hard to distinguish. The aside panel has its own `rgba(15,15,30,0.95)` dark override that makes the glass effect invisible there — this is intentional and will be preserved.

All styling lives in a single `index.html` with inline `<style>` blocks. There are no build tools or CSS preprocessors — changes are made directly to the CSS custom properties and class rules.

## Goals / Non-Goals

**Goals:**

- Make the glassmorphism effect clearly visible on the main panel against the dark background
- Enhance the glass track so the progress bar widget stands out
- Maintain OBS transparency compatibility (no opaque backgrounds leaking through)
- Keep the aside panel's dark override intact
- Use only standard CSS (no additional dependencies)

**Non-Goals:**

- Redesigning the overall layout or panel structure
- Adding CSS animations or shimmer effects (keep it static glassmorphism)
- Changing the glass-fill color or behavior
- Modifying the aside panel's dark background override
- Adding new HTML elements or JavaScript logic

## Decisions

### Decision 1: Use gradient background instead of flat rgba

**Choice**: Replace `--glass-bg: rgba(255,255,255,0.15)` with a CSS `linear-gradient(135deg, rgba(255,255,255,0.18) 0%, rgba(255,255,255,0.08) 100%)` applied directly in the `.glass` class rule.

**Rationale**: A diagonal gradient creates visible light variation across the panel surface, mimicking how real glass catches and refracts light at different angles. A flat semi-transparent color looks like a simple overlay; a gradient gives depth and dimensionality. The `--glass-bg` custom property will be kept as a fallback base color.

**Alternative considered**: Increasing flat opacity to 0.3+ — rejected because it looks like a translucent box rather than glass. Gradients are the standard glassmorphism technique.

### Decision 2: Increase backdrop blur to 20px

**Choice**: Update `--glass-blur` from `blur(12px)` to `blur(20px)`.

**Rationale**: A stronger blur is the primary visual cue for frosted glass. 20px provides a clearly frosted appearance without being so heavy that it impacts performance on the single-page widget. This is within the commonly recommended 10-25px range for glassmorphism.

### Decision 3: Multi-layer box-shadow with inset highlight

**Choice**: Update `--glass-shadow` to include both an outer shadow and an inset top-edge highlight:
`0 8px 32px rgba(31,38,135,0.25), inset 0 1px 0 rgba(255,255,255,0.15)`

**Rationale**: The outer shadow provides depth/elevation. The inset highlight simulates light hitting the top edge of the glass, which is a key visual cue in glassmorphism design. Using the custom property keeps it reusable.

### Decision 4: Brighten border opacity

**Choice**: Update `--glass-border` from `rgba(255,255,255,0.3)` to `rgba(255,255,255,0.4)`.

**Rationale**: A slightly brighter border defines the glass panel edge more clearly against the dark background. Going above 0.4 would make the border look like a solid white line rather than a subtle glass edge.

### Decision 5: Enhance glass-track with stronger properties

**Choice**: Give `.glass-track` its own enhanced values — a brighter background (`rgba(255,255,255,0.12)`), stronger border (`rgba(255,255,255,0.5)`), and a subtle glow shadow (`0 0 12px rgba(255,255,255,0.1), inset 0 1px 2px rgba(255,255,255,0.15)`).

**Rationale**: The glass track is a small element that needs extra contrast to be visible inside the already-glass main panel. It needs to stand out as a distinct container for the fill bar.

## Risks / Trade-offs

- **[OBS transparency]** Enhanced glass opacity and shadows could look different on OBS transparent background vs. dark `#1a1a2e` → Mitigation: Test in both modes; the aside override is untouched, and the glass gradient uses low-enough opacity to remain semi-transparent.
- **[Performance]** Increasing `backdrop-filter` blur from 12px to 20px adds GPU cost → Mitigation: This is a simple single-page widget with minimal DOM; 20px blur is well within browser capability.
- **[Subjectivity]** "Visible glassmorphism" is subjective → Mitigation: Use established glassmorphism values from popular design references (blur 15-25px, gradient bg, multi-layer shadows). Values can be fine-tuned after visual testing.
