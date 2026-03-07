## Context

The control panel uses a dark opaque background with white/light text for all form elements. The `.glass-input` class provides a semi-transparent background with white text (`text-white/90` via Tailwind). This works well for text inputs and the visual appearance of the `<select>` element itself. However, when the `<select>` dropdown opens, browsers render the `<option>` list using their native UI with a white background. Since `<option>` elements inherit the white text color but ignore the parent's `background` / `backdrop-filter`, the result is white text on a white background — completely unreadable.

## Goals / Non-Goals

**Goals:**
- Make `<option>` elements in the preset dropdown readable by giving them an explicit dark background and white text.
- Keep the fix minimal and CSS-only — no JS or HTML structural changes.

**Non-Goals:**
- Fully custom-styled dropdown (replacing native `<select>` with a custom component).
- Cross-browser pixel-perfect dropdown appearance (browsers have varying levels of `<option>` styling support, but `background` and `color` are widely respected).

## Decisions

### Decision 1: CSS-only fix targeting `select.glass-input option`

**Choice**: Add a single CSS rule `select.glass-input option { background: #1a1a2e; color: #ffffff; }`.

**Rationale**: This is the simplest fix that works across major browsers (Chrome, Firefox, Edge). The `<option>` element accepts `background` and `color` in all modern browsers. No JS changes are needed because the styling is inherited regardless of how `<option>` elements are created (static or dynamic via `refreshPresetDropdown()`).

**Alternatives considered**:
- *Inline styles on `<option>` in JS*: Would require modifying `refreshPresetDropdown()`. Rejected because CSS is simpler and separates concerns.
- *Custom dropdown component*: Over-engineered for this fix. Native `<select>` is accessible and lightweight.

### Decision 2: Color choice `#1a1a2e`

**Choice**: Use `#1a1a2e` for option background, matching the control panel's dark aesthetic.

**Rationale**: This dark navy color is consistent with the existing aside panel background and provides strong contrast with white text. It avoids pure black (`#000`) which would look harsh.

## Risks / Trade-offs

- **[Limited `<option>` styling in some browsers]** → Safari on macOS may ignore `<option>` background styling. Mitigation: The text remains readable because Safari uses its own native dark/light mode rendering. This is a known platform limitation with no CSS workaround.
- **[Hardcoded color instead of CSS variable]** → `#1a1a2e` is not tied to `--theme-color`. Mitigation: The option dropdown is a native UI element where theme-color mixing would not apply meaningfully. A hardcoded dark color is appropriate here.
