## Why

As more controls are added to the control panel (e.g., font family, theme color, status size), the form content may exceed the viewport height, making lower controls inaccessible. The panel needs vertical scroll support so all controls remain reachable while the footer stays anchored at the bottom.

## What Changes

- Add `overflow-y: auto` to the control form so it scrolls when content overflows the available vertical space.
- Apply a custom thin scrollbar styled to match the glassmorphism theme (translucent track and thumb using `scrollbar-width: thin` and `scrollbar-color`).
- Add WebKit scrollbar pseudo-element styles for cross-browser consistency.
- Ensure the footer remains fixed at the bottom of the aside, outside the scrollable area.
- Adjust flex layout so the form takes remaining space (`flex-1 min-h-0`) while the footer stays pinned.

## Capabilities

### New Capabilities
- `control-panel-scroll`: Vertical scroll support for the control panel form area with themed scrollbar styling

### Modified Capabilities
- `control-panel-theme`: Add scrollbar styling rules that match the existing glassmorphism aesthetic

## Impact

- **Code**: `index.html` — the `<aside>` layout and `<form>` element gain new Tailwind utility classes; a `<style>` block is added or extended for custom scrollbar pseudo-elements.
- **Dependencies**: None — uses only CSS properties and existing Tailwind utilities.
- **Visual**: Scrollbar appears only when content overflows; footer remains visible at all times.
