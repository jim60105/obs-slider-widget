## Context

The `.glass-track` element uses a `1px solid rgba(255, 255, 255, 0.5)` border. On busy or dark backgrounds this thin outline blends in, making the track boundary hard to distinguish. The current `box-shadow` outer glow (`0 0 12px rgba(255, 255, 255, 0.1)`) is also quite subtle.

## Goals / Non-Goals

**Goals:**
- Make the slider track outline clearly visible at a glance
- Keep the glassmorphism aesthetic consistent with the rest of the UI

**Non-Goals:**
- Changing the track dimensions (width/height) or border-radius
- Altering the `.glass-fill` or `.glass-thumb` styles
- Introducing new CSS custom properties

## Decisions

**Border width: 2px instead of 1px**
Doubling the border width is the smallest change that produces a noticeably thicker outline without looking heavy. 3px was considered but felt too chunky relative to the 20px-wide track.

**Strengthen outer glow to complement thicker border**
Increase the outer glow spread from `12px` at `0.1` opacity to `15px` at `0.15` opacity so the glow visually supports the bolder border instead of looking mismatched.

## Risks / Trade-offs

- [Slightly heavier visual weight] → Acceptable; the track is a primary interactive element and should be prominent.
- [Minimal subpixel rendering differences across browsers] → 2px solid borders render consistently; no practical risk.
