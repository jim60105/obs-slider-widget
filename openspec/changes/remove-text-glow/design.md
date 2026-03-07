## Context

The progress bar widget applies a 10-layer `text-shadow` to `.progress-title`, `.progress-status`, and `#displayPercent`. Layers 1–8 provide a white outline for text readability; layers 9–10 add a theme-colored luminous glow. The glow is not rendering correctly, and the white outline alone provides sufficient readability on varied OBS backgrounds.

This is a straightforward removal — no architectural complexity, no data model changes, no external dependencies.

## Goals / Non-Goals

**Goals:**
- Remove all theme-colored glow `text-shadow` layers from CSS and any inline style JS logic
- Keep the white outline `text-shadow` layers fully intact
- Remove the `text-glow` spec since the capability is being deleted
- Update `text-white-outline` spec to remove references to glow coexistence

**Non-Goals:**
- Changing the white outline implementation (layers, colors, blur radius)
- Modifying the theme color picker or `--theme-color` CSS custom property (still used elsewhere for element colors)
- Adding any replacement visual effect

## Decisions

### Decision 1: Remove glow layers from CSS rather than setting them to transparent

**Choice:** Delete the 2 glow `text-shadow` lines from `.progress-title` and `.progress-status` CSS rules entirely.

**Rationale:** Removing the lines is cleaner and more maintainable than setting opacity to 0 or color to transparent. It eliminates unnecessary rendering work and makes the intent clear.

**Alternatives considered:**
- **Set glow opacity to 0:** Rejected — keeps dead code in the stylesheet with no benefit.
- **Add a toggle control:** Rejected — the effect is broken and adding UI to toggle a broken feature adds complexity for no value.

### Decision 2: Remove the `text-glow` spec entirely

**Choice:** Use a REMOVED delta spec to delete all three requirements in `text-glow/spec.md`.

**Rationale:** The entire capability is being eliminated, not modified. All three requirements (title glow, status glow, percent glow) are removed together.

## Risks / Trade-offs

- **[Risk] Visual regression — text may look "flat" without glow** → Accepted. The white outline provides readability, and the glow was broken anyway.
- **[Risk] `--theme-color` variable may appear unused** → Not a risk. The `--theme-color` variable is still used for element text color (`color-mix(in srgb, var(--theme-color) 80%, transparent)`) and glass fill styling.
