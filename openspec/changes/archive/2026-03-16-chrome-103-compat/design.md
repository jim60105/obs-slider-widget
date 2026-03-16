## Context

OBS Studio's browser source embeds Chromium. OBS 28.0 (released 2022) shipped with Chromium 103. Many users still run OBS 28.x or Streamlabs OBS with similarly aged Chromium builds. The widget currently uses CSS `color-mix(in srgb, ...)` (Chrome 111+) in three places for theme-aware opacity on the progress title, fill bar, and status text. These elements render with no color (fallback to `initial`) in Chrome 103, breaking the visual design.

All other CSS and JS features used in the project (CSS custom properties, `backdrop-filter`, `for...of`, `URLSearchParams`, `fetch()`, arrow functions, etc.) are compatible with Chrome 103+.

Third-party CDN dependencies (`cdn.tailwindcss.com`, `marked`) load unpinned latest versions, which could introduce future incompatibilities.

## Goals / Non-Goals

**Goals:**
- Replace all `color-mix()` usage with a Chrome 103-compatible mechanism that produces the same visual result (theme color at specified opacity)
- Maintain real-time reactivity: theme color changes must still update all themed elements instantly
- Document Chrome 103 as the project's minimum browser target
- Keep the solution simple and framework-free (vanilla JS)

**Non-Goals:**
- Supporting browsers older than Chrome 103 (e.g., OBS 27 or earlier)
- Adding a CSS preprocessor or build step
- Polyfilling `color-mix()` generically; only the specific usages in this project need replacement
- Pinning CDN dependency versions (tracked as a future concern, not this change)

## Decisions

### Decision 1: JS-computed CSS custom properties for themed opacity colors

**Chosen approach**: Add a `hexToRgba(hex, alpha)` JS utility that parses a hex color and returns an `rgba()` string. When the theme color changes, JS computes derived CSS custom properties (`--theme-color-90`, `--theme-color-80`) and sets them on `:root`. CSS declarations reference these derived variables instead of `color-mix()`.

**Alternatives considered:**

- **CSS `opacity` on elements**: Would affect the entire element (including borders, shadows, text-shadow), not just the color channel. Rejected because it changes the visual output.
- **Hardcoded rgba fallback + `@supports`**: Would require duplicating every declaration and would break when the user changes the theme color (hardcoded fallback wouldn't update). Rejected.
- **Inline styles only (no CSS variables)**: Would require JS to directly set `style.color` / `style.background` on each element. Rejected because it's more fragile and harder to maintain than CSS variables.

**Rationale**: Derived CSS custom properties preserve the declarative CSS approach, keep the JS surface small (one utility + one update function), and are fully compatible with Chrome 49+.

### Decision 2: Centralized theme color update function

Create an `applyThemeColor(hex)` function that:
1. Sets `--theme-color` on `:root`
2. Parses hex → RGB components
3. Computes `--theme-color-90` (90% opacity rgba) and `--theme-color-80` (80% opacity rgba)
4. Sets all three CSS custom properties on `document.documentElement.style`
5. Updates the `themeColor` input's left border color

This replaces the scattered inline theme-color-setting logic currently in the `input` event handler and `loadPreset()`.

### Decision 3: Handle initial/default state in CSS

For the initial page render (before JS runs), CSS declarations SHALL use a static `rgba()` fallback matching the default `#707` at the appropriate opacity levels. This ensures correct rendering even during the brief moment before JS initializes.

## Risks / Trade-offs

- **[Slight JS overhead]** → Computing rgba on every theme color change adds negligible overhead (simple string parsing). Mitigated by the existing pattern of JS-driven updates.
- **[Initial render flash]** → If JS is slow to load, the hardcoded CSS fallback for `#707` will display. This matches current behavior since `color-mix()` also depends on `--theme-color` being set. Mitigated by using correct default values.
- **[Future color-mix readoption]** → When Chrome 103 is no longer the baseline (e.g., if OBS drops CEF 103 support), the `color-mix()` approach could be restored. The derived-variable pattern is easy to replace later.
