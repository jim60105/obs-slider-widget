## Context

The OBS slider widget is a single-file HTML page (`index.html`) used as a browser source overlay. The display panel (`<main>`) currently centers the progress bar widget both horizontally and vertically, and the glass track has a fixed height of 400px. This wastes vertical space and doesn't match the desired right-aligned, full-height appearance for stream overlays.

Current state:
- `<main>` uses Tailwind classes `items-center justify-center` → widget is centered.
- `.glass-track` has `height: 400px` → fixed height regardless of viewport.
- The inner flex container (`div.flex.items-stretch.gap-4`) has no explicit height stretching.

## Goals / Non-Goals

**Goals:**
- Make the glass track fill the full available vertical space of the display panel.
- Position the progress bar widget flush against the right edge of the display panel.
- Maintain all existing visual styling (glassmorphism, transitions, accessibility).

**Non-Goals:**
- Changing the control panel (aside) layout.
- Making the widget horizontally resizable or responsive to different positions.
- Adding new configuration options to the control form for alignment or sizing.

## Decisions

### Decision 1: Use flexbox stretch for full-height track

**Choice:** Replace the fixed `height: 400px` on `.glass-track` with flex-based stretching. The inner flex container will use `h-full` (or `flex-1`/`flex-grow`) so the track fills the available vertical space. The `.glass-track` itself will use `flex: 1` or `height: 100%`.

**Rationale:** Flexbox is already in use for the layout. Using flex-grow keeps the approach consistent and avoids absolute positioning or viewport-unit calculations that would couple the track to window size rather than container size.

**Alternative considered:** Using `height: calc(100vh - ...)` — rejected because it's fragile and depends on knowing exact padding/margin values.

### Decision 2: Use `items-end` on `<main>` for right alignment

**Choice:** Change `<main>` from `items-center justify-center` to `items-stretch justify-end` (or `items-end`). This pushes the widget to the right edge while allowing vertical stretching.

**Rationale:** `justify-end` in a flex row pushes content to the right. `items-stretch` allows the child container to fill the vertical space. This is a minimal class change with the desired layout effect.

**Alternative considered:** Using `ml-auto` on the widget container — works but is less semantic than changing the flex alignment on the parent.

### Decision 3: Adjust padding for right-edge appearance

**Choice:** Keep `p-8` on `<main>` so there's a small margin from the viewport edge, but the widget will be right-aligned within that padded area. Optionally reduce right padding if a flush-to-edge look is preferred.

**Rationale:** A small padding prevents the widget from being clipped at the edge in various viewport sizes.

## Risks / Trade-offs

- **[Risk]** Very short viewports may squash the track to an unusable height → The track will still function correctly at any height due to `scaleY` fill; no minimum height is needed for correctness.
- **[Risk]** Title and percentage text may not align correctly when track height is dynamic → The existing `self-start` and `self-end` alignment classes handle this regardless of container height.
- **[Trade-off]** Removing the fixed height means the track no longer has a predictable pixel size → This is the desired behavior for OBS overlays where viewport size varies.
