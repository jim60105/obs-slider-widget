## Context

The widget is a single-file static HTML page (`index.html`) that uses Tailwind CSS via CDN and pure JavaScript. It includes a control panel for configuring appearance parameters. The theme color is controlled via a CSS custom property `--theme-color` set on `:root`, which cascades to the progress bar fill, title text, and status text elements.

Currently, the theme color picker uses `<input type="color">`, which relies on the browser's native color picker dialog. OBS browser source does not support this input type, rendering the control non-functional in the primary deployment environment.

## Goals / Non-Goals

**Goals:**
- Replace `<input type="color">` with a text input accepting hex color codes, compatible with OBS browser source.
- Provide a visual color preview swatch so users get immediate feedback without a native color dialog.
- Validate hex input format before applying color changes.
- Maintain real-time theme color updates on valid input.

**Non-Goals:**
- Supporting color formats beyond hex (e.g., RGB, HSL, named colors).
- Adding a custom color picker popup or palette UI.
- Changing how `--theme-color` is consumed by themed elements (fill, title, status text).

## Decisions

### Decision 1: Text input with inline color swatch

**Choice**: Use an `<input type="text">` with a small adjacent `<div>` as a color preview swatch.

**Rationale**: This is the simplest OBS-compatible approach. A text input works universally across all browser environments, including OBS browser source. The swatch provides visual feedback that the native color input previously offered.

**Alternatives considered**:
- *Custom color picker library*: Adds external dependencies, increases complexity, conflicts with the project's no-framework, single-file philosophy.
- *Predefined color palette buttons*: Limits color choices, reduces flexibility compared to the current arbitrary color selection.

### Decision 2: Client-side hex validation via regex

**Choice**: Validate input using a regex pattern for hex colors (`/^#([0-9A-Fa-f]{3}|[0-9A-Fa-f]{6})$/`).

**Rationale**: Lightweight, no dependencies, runs on every `input` event for real-time feedback. Both 3-digit shorthand (`#fff`) and 6-digit (`#ffffff`) hex formats are supported, matching common user expectations.

### Decision 3: Layout — swatch beside text input in a flex row

**Choice**: Wrap the text input and swatch `<div>` in a `flex` container so the swatch sits to the left of the input.

**Rationale**: Keeps the control compact within the existing form layout. The swatch acts as an immediate visual indicator, while the text input remains the primary interaction element.

## Risks / Trade-offs

- **[Less discoverable UX]** → Users must know hex color codes. Mitigated by providing a sensible default (`#ffffff`) and placeholder text showing the expected format.
- **[No visual color browsing]** → Users cannot browse or pick colors visually. Accepted trade-off for OBS compatibility; users can use external color picker tools and paste hex values.
