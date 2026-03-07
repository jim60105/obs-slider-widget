## Context

The progress bar widget renders three text elements (`.progress-title`, `.progress-status`, `#displayPercent`) as a transparent OBS browser source overlay. Text currently uses a theme-colored glow via multi-layered `text-shadow`. On certain stream backgrounds the text can become hard to read because there is no contrasting outline around the characters.

## Goals / Non-Goals

**Goals:**
- Add a white outline around title, status, and percentage text for universal readability
- Preserve the existing theme-colored glow effect
- Ensure the outline updates correctly when text content or theme color changes

**Non-Goals:**
- Making the outline color configurable (white only for now)
- Animating or pulsing the outline
- Applying the outline to control panel elements

## Decisions

### Multi-directional white text-shadow approach

Use multiple `text-shadow` layers with a small blur radius offset in 8 directions (N, NE, E, SE, S, SW, W, NW) using white color to simulate an outline around text characters. These layers are prepended to the existing theme-color glow layers.

**Rationale**: Multi-directional `text-shadow` works across all modern browsers and composes cleanly with the existing glow `text-shadow` layers. It does not require vendor prefixes and produces a consistent outline thickness.

**Alternative considered**: `-webkit-text-stroke` — rejected because it paints the stroke inward, reducing the visible fill area of already-small text, and requires the `-webkit-` vendor prefix. It also interacts poorly with `text-shadow` glow on some rendering engines.

### Outline shadow parameters

Use `1px` offset with `1px` blur in 8 directions with `rgba(255, 255, 255, 0.9)` to create a subtle but effective white border. The slight transparency prevents the outline from appearing too harsh.

**Rationale**: A 1px offset with 1px blur provides a clean outline without overpowering the glow effect. The 8-direction technique is a well-established CSS pattern for text outlines.

## Risks / Trade-offs

- [Many text-shadow layers may impact rendering performance] → Mitigated by using minimal blur radius (1px) and the widget only has three small text elements, so the cost is negligible
- [White outline may clash with very light theme colors] → Acceptable trade-off; the outline serves the primary use case of readability on dark or varied backgrounds, and the theme-color glow still provides adequate contrast on light backgrounds
