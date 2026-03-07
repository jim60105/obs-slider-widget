## Context

The OBS Slider Widget is a single-file (`index.html`) application using Tailwind CSS (CDN) and vanilla JS. The control panel contains a `<input type="range" id="progressVal">` slider for adjusting the progress value. All control inputs use event delegation on the `input` event to call `updateProgressDisplay`. The current slider is hard to adjust precisely, especially via touch or in an OBS browser source.

## Goals / Non-Goals

**Goals:**
- Provide large, touch-friendly − / + buttons flanking the progress slider for ±1 adjustment.
- Reuse the existing `input` event delegation path so no new JS event wiring is needed outside the button handlers.
- Match the glassmorphism visual style of the control panel.

**Non-Goals:**
- Custom step size (always 1).
- Keyboard-shortcut support (may be added later).
- Replacing or hiding the existing range slider.

## Decisions

### 1. Layout: inline row `[−] [slider] [+]`
Wrap the slider and two buttons in a `flex` row. The buttons sit at fixed width; the slider fills the remaining space with `flex-1`.

**Alternative considered**: buttons stacked below the slider — rejected because it wastes vertical space and feels less intuitive.

### 2. Event dispatch via synthetic `input` event
Each button click sets `progressVal.value`, then dispatches `new Event('input', { bubbles: true })` on the slider element. This piggybacks on the existing event-delegation listener, keeping JS changes minimal.

**Alternative considered**: calling `updateProgressDisplay()` directly — rejected because it bypasses any other listeners and couples the buttons to internal function names.

### 3. Styling with Tailwind utilities + `glass-input` base
Buttons reuse the existing `glass-input` class for the backdrop/border treatment, with additional size/padding utilities for a large touch target (min 44×44 px).

## Risks / Trade-offs

- **[Risk] Synthetic `input` event may not trigger all listeners in future code** → Mitigation: unit-level manual testing; the pattern is already standard in the codebase.
- **[Risk] Large buttons may crowd the slider on very narrow viewports** → Mitigation: buttons use fixed small width (`w-12`); slider gets `flex-1`.
