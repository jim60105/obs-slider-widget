## Context

The progress bar widget uses a vertical glass track (`.glass-track`) with a fixed width of 20px. This width is defined in inline CSS within `index.html`. When displayed as an OBS browser source, the thin track can be hard to see, particularly at lower stream resolutions (e.g., 720p) or on mobile viewers' screens.

## Goals / Non-Goals

**Goals:**

- Double the glass track width from 20px to 40px for improved OBS visibility
- Maintain the existing capsule shape (border-radius: 999px) and glassmorphism styling

**Non-Goals:**

- Making the width configurable at runtime (out of scope for this change)
- Changing the fill element, title text, or percentage display styling
- Modifying any JavaScript logic

## Decisions

**Two CSS property changes**: Modify `width: 20px` to `width: 40px` and `border: 2px solid` to `border: 4px solid` on `.glass-track` in `index.html`. Both the track width and border are doubled proportionally for a consistent, bolder appearance. The capsule shape scales naturally since `border-radius: 999px` adapts to any width. The fill element uses 100% width, so it automatically expands. No alternative approaches are needed for this scope.

## Risks / Trade-offs

- [Wider track takes more horizontal space] → Acceptable trade-off since the widget is designed for full-screen OBS overlays with ample horizontal space. The title text and percentage display flex layout will accommodate the change.
