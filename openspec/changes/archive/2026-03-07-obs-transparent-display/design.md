## Context

The OBS Slider Widget is a single-file static website (`index.html`) using Tailwind CSS (CDN) and pure JS. The page has a two-panel layout: an `<aside>` control panel and a `<main>` display panel. Both panels use a `.glass` utility class that applies glassmorphism styling via CSS custom properties (`--glass-bg`, `--glass-blur`, `--glass-border`, `--glass-shadow`).

OBS detection already exists: a synchronous script in `<head>` checks `navigator.userAgent` for `'OBS'` and adds the class `obs` to `<html>`. Existing CSS already uses `html.obs body` to set a transparent background on the body. However, the `<main>` element still renders its glassmorphism panel, creating an unwanted visible background in OBS scenes.

## Goals / Non-Goals

**Goals:**
- Make the `<main>` display panel fully transparent in OBS mode (no background, border, box-shadow, or backdrop-filter)
- Ensure the display widget content (progress bar, title, fraction text) remains fully visible
- Leverage the existing `html.obs` class for conditional styling

**Non-Goals:**
- Changing the OBS detection mechanism itself
- Modifying the `<aside>` control panel behavior in OBS mode (already handled)
- Altering glassmorphism styling in normal browser mode
- Removing or modifying the `.glass` class definition itself

## Decisions

### CSS-only approach over JavaScript class removal
**Decision**: Add CSS override rules under `html.obs main` rather than removing the `.glass` class via JavaScript.

**Rationale**: A CSS-only solution is simpler, has zero runtime cost, and aligns with the existing pattern (`html.obs body` already uses this approach). It avoids coupling JS logic to presentation concerns and keeps the change contained to a single CSS rule block. The alternative of removing `.glass` via JS would require additional DOM manipulation code and create a dependency between detection logic and layout structure.

## Risks / Trade-offs

- [Specificity] CSS override must have sufficient specificity to beat the `.glass` class. → `html.obs main` selector has higher specificity than `.glass` alone, so this is naturally handled.
- [Future glass changes] If `.glass` gains new properties later, the override may need updating. → Acceptable since this is a small, contained override and any glass property additions would be reviewed in context.
