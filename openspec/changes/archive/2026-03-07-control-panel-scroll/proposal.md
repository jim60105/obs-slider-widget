## Why

As more controls are added to the control panel (e.g., font family, theme color, status size), the panel content may exceed the viewport height, making lower controls inaccessible. The panel needs vertical scroll support so all controls remain reachable.

## What Changes

- Add `overflow-y: auto` to the `<aside>` panel so it scrolls when content overflows the available vertical space.
- Apply a custom thin scrollbar styled to match the glassmorphism theme (translucent track and thumb using `scrollbar-width: thin` and `scrollbar-color`).
- Add WebKit scrollbar pseudo-element styles for cross-browser consistency.
- The footer scrolls naturally with the rest of the aside content.
- The aside panel itself is the scroll container; no `flex-1 min-h-0` adjustments needed on the form.

## Capabilities

### New Capabilities
- `control-panel-scroll`: Vertical scroll support for the aside panel with themed scrollbar styling

### Modified Capabilities
- `control-panel-theme`: Add scrollbar styling rules that match the existing glassmorphism aesthetic

## Impact

- **Code**: `index.html` — the `<aside>` element gains the `overflow-y-auto` Tailwind utility class; a `<style>` block is added or extended for custom scrollbar pseudo-elements targeting `aside`.
- **Dependencies**: None — uses only CSS properties and existing Tailwind utilities.
- **Visual**: Scrollbar appears only when content overflows; footer scrolls with the rest of the aside content.
