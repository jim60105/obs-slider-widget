## Why

The progress slider is difficult to adjust precisely with a mouse or touch in OBS browser sources, especially when the user wants to change the value by exactly 1. Large step buttons (− / +) flanking the slider provide a quick, touch-friendly way to increment or decrement the progress value.

## What Changes

- Add a "−" button and a "+" button displayed inline beside the `progressVal` range slider.
- Each button changes the progress value by 1, clamped to [0, max].
- Buttons fire an `input` event on the slider so existing event delegation and `updateProgressDisplay` logic work unchanged.
- Buttons use glassmorphism styling consistent with the control panel theme.
- Buttons are large enough for comfortable touch/OBS interaction.

## Capabilities

### New Capabilities
- `slider-step-buttons`: Large +/− step buttons next to the progress slider for precise, touch-friendly value adjustment.

### Modified Capabilities
<!-- No existing spec-level requirements are changing. The control-form layout gains new elements but its spec contract is unaffected. -->

## Impact

- **Code**: `index.html` — new HTML elements (two buttons) added around the progress slider, plus a small JS handler for click events.
- **Styling**: Minor Tailwind utility additions; no new CSS custom properties or external dependencies.
- **APIs / Dependencies**: None. Stays pure HTML + Tailwind CDN + vanilla JS.
