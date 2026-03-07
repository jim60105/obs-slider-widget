## Context

The OBS Slider Widget is a single-file HTML application (`index.html`) using Tailwind CSS (CDN) and pure JS. It has a two-panel flex layout: a fixed-width `<aside>` control panel (left, `w-[300px]`) and a `<main>` display panel (right, `flex-1`). The display widget (progress bar) is centered in the display panel via `flex items-center justify-center`. The layout container is `<div class="flex h-screen w-screen overflow-hidden gap-1">` at line 167.

## Goals / Non-Goals

**Goals:**
- Allow users to flip the layout so the control panel moves to the right and display panel to the left
- Mirror the display widget alignment when flipped (align left instead of center/right)
- Implement with minimal JS using Tailwind utility class toggling (`flex-row-reverse`)

**Non-Goals:**
- Persisting flip state across page reloads (URL params, localStorage)
- Vertical layout flipping
- Animating the transition between layouts

## Decisions

### Decision 1: Toggle `flex-row-reverse` on parent container
**Choice:** Add/remove `flex-row-reverse` class on the parent `div.flex` container via JS.
**Rationale:** Tailwind's `flex-row-reverse` reverses flex item order without changing DOM structure, keeping the implementation minimal and CSS-only for layout. Alternative: swapping DOM elements with `insertBefore`—rejected because it's more complex and could disrupt event listeners.

### Decision 2: Flip button placement in control panel header
**Choice:** Place a small icon button (⇄) next to the `<h2>` header in the control panel, using `flex` layout on the header row.
**Rationale:** The header is always visible and provides a natural location for layout controls. The button is outside the `<form>` to avoid interfering with form submission logic.

### Decision 3: Mirror display alignment via `justify-start`
**Choice:** When flipped, toggle `<main>`'s content alignment from `justify-center` to `justify-start` so the widget aligns to the left edge (near the control panel boundary).
**Rationale:** Mirroring alignment provides visual balance—the widget stays near the panel boundary regardless of layout direction. This uses Tailwind classes already available.

### Decision 4: Pure JS event handler
**Choice:** A single `click` event listener on the flip button that toggles classes on both the parent container and `<main>`.
**Rationale:** Consistent with the existing pure JS approach in the codebase. No state management library needed for a simple boolean toggle.

## Risks / Trade-offs

- [Risk] Flip button visible in OBS browser source → The `<aside>` is already hidden in OBS mode (only `<main>` is displayed), so the button won't appear in the overlay.
- [Risk] Widget alignment change could affect other future display elements → Mitigated by scoping the alignment change to the `<main>` element's flex properties only.
