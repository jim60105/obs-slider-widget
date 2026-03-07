## Context

The OBS Slider Widget is a single-file static web application (`index.html`) using pure JS and Tailwind CSS (CDN). It displays a vertical progress bar with a glassmorphism design, controlled via a left-panel form. Currently, the widget hardcodes a 0–100 percentage model: the slider, display text, fill calculation, and ARIA attributes all assume a fixed max of 100 with a "60%" style output.

The proposal calls for replacing this with a fraction-based model (current/total) where the total is user-configurable, enabling discrete quantity tracking beyond percentages.

## Goals / Non-Goals

**Goals:**
- Allow users to set a custom total value via the control panel
- Display progress as "current/total" fraction format
- Dynamically adjust the progress slider range when total changes
- Keep the progress bar fill visually correct as `current / total`
- Maintain ARIA accessibility with dynamic `aria-valuemax` and `aria-valuenow`

**Non-Goals:**
- Supporting multiple display format modes (e.g., toggling between fraction and percentage) — only fraction for now
- Persisting control values across page reloads (no localStorage)
- Changing the visual design, layout, or glassmorphism styling
- Adding validation UI or error messages for invalid total values

## Decisions

### 1. Total value control: Number input vs. range slider

**Decision**: Use a `<input type="number">` for the total value control.

**Rationale**: A range slider constrains the user to a predefined max, which defeats the purpose of a configurable total. A number input with `min="1"` allows arbitrary positive integers. This is simpler and more flexible than a range slider with an artificially wide range.

**Alternative considered**: Range slider with min=1, max=1000 — rejected because it couples the UI to an arbitrary upper bound and makes precise value entry difficult.

### 2. Function signature change

**Decision**: Change `updateProgressDisplay(percent)` to `updateProgressDisplay(current, total)`.

**Rationale**: The function needs both values to compute the fill ratio and render the fraction text. Passing both as explicit parameters keeps the function pure and testable without relying on DOM reads.

### 3. Clamping the current value when total changes

**Decision**: When the total value decreases below the current progress value, clamp the current value to the new total and update the slider accordingly.

**Rationale**: This prevents an impossible state where current > total. The slider's `max` attribute change alone would visually cap the thumb, but the internal value and display must also be synchronized.

### 4. Default values

**Decision**: Default total = 20, default current = 12 (to demonstrate fraction "12/20" on initial load).

**Rationale**: Using non-100 defaults immediately communicates the fraction concept. A default of 100 with value 60 would look identical to the old percentage mode and confuse users about what changed.

## Risks / Trade-offs

- **[Breaking change]** The display format changes from "60%" to "12/20", which may surprise users expecting percentages. → Mitigation: This is an intentional product decision per the proposal. The label text in the control panel will clarify the new semantics.
- **[Edge case: total = 0 or negative]** Could cause division by zero in fill calculation. → Mitigation: Enforce `min="1"` on the input and clamp total to ≥ 1 in JS.
- **[Slider precision at large totals]** If total is very large (e.g., 10000), the slider becomes imprecise. → Mitigation: Accepted trade-off; this is inherent to range sliders and out of scope for now.
