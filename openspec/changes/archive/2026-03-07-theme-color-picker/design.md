## Context

The OBS Slider Widget is a single-page HTML application using Tailwind CSS and vanilla JS. All accent colors (progress fill, title text, status text) are hardcoded to white with varying opacity. The control form already supports real-time sync via delegated `input` events on `#controlForm`. CSS custom properties are already used for glass panel styling (e.g., `--glass-bg`, `--glass-border`).

## Goals / Non-Goals

**Goals:**
- Allow users to customize the accent color of the widget via a color picker
- Use a single CSS custom property (`--theme-color`) as the source of truth
- Integrate seamlessly with the existing real-time sync pattern
- Preserve the current white default appearance

**Non-Goals:**
- Per-element color customization (one color controls all accents)
- Persisting the chosen color across sessions (no localStorage)
- Theming beyond accent color (e.g., glass panel tint, background)

## Decisions

### 1. CSS custom property for accent color

**Decision:** Introduce `--theme-color` on `:root`, defaulting to `#ffffff`.

**Rationale:** CSS custom properties are already the established pattern in this project (`--glass-bg`, etc.). Setting a single variable from JS and referencing it in CSS keeps styling declarative and avoids scattering inline style updates across multiple elements.

**Alternatives considered:**
- Direct inline style manipulation on each element: more JS code, harder to maintain, breaks the existing CSS-driven approach.

### 2. Opacity handling via `color-mix()`

**Decision:** For elements needing transparency (title at 0.8, status at 0.8), use `color-mix(in srgb, var(--theme-color) 80%, transparent)`. For the fill (0.9 opacity), use `color-mix(in srgb, var(--theme-color) 90%, transparent)`.

**Rationale:** `color-mix()` works with any hex color and avoids the need to parse hex into RGB components in JS. Browser support covers all modern browsers and OBS's Chromium-based browser source.

**Alternatives considered:**
- Parse hex to RGB in JS and set rgba values: more complex JS, requires updating on every color change.
- Use `opacity` CSS property: would affect the entire element including borders, not just the color.

### 3. Native `<input type="color">` control

**Decision:** Use the native color picker input, styled consistently with other form controls.

**Rationale:** Zero dependencies, works in all target environments (modern browsers + OBS browser source). The native picker provides a familiar UX and full color spectrum.

### 4. Integration with existing event delegation

**Decision:** Add a `case 'themeColor'` to the existing `switch` in the `input` event listener that updates `document.documentElement.style.setProperty('--theme-color', target.value)`.

**Rationale:** Follows the established pattern exactly. No new event listeners or architectural changes needed.

## Risks / Trade-offs

- **[Browser color picker UX variance]** → Native color picker appearance differs across browsers. Acceptable since control panel is for the streamer, not viewers.
- **[`color-mix()` support]** → Requires relatively modern browsers. OBS uses Chromium ≥ 111 which supports it. Mitigated by the fact that the widget already requires modern CSS features (backdrop-filter).
