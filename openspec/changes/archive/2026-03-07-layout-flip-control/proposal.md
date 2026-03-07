## Why

The control panel is always fixed to the left side of the screen, which limits layout flexibility when users want to position the OBS widget differently in their stream scenes. Adding a flip toggle lets users move the control panel to the right and mirror the display widget alignment, providing better compositional options.

## What Changes

- Add a toggle/flip button (⇄ icon) in the control panel header area that flips the layout horizontally
- When flipped, the parent flex container uses `flex-row-reverse` to move the control panel to the right and the display panel to the left
- When the control panel is on the right (flipped), the display widget aligns to the LEFT of the display panel (mirroring the default right-side alignment)
- The flip state is toggled via a CSS class on the parent `div.flex` container
- The control panel retains its fixed `w-[300px]` width and the display panel continues to fill remaining space with `flex-1`

## Capabilities

### New Capabilities
- `layout-flip`: Toggle button and logic to flip the two-panel layout horizontally, including mirrored widget alignment in the display panel

### Modified Capabilities
- `glass-panels`: The two-panel flex layout requirement changes to support reversible panel order via `flex-row-reverse`, and the display panel's content alignment must mirror when flipped

## Impact

- `index.html`: New flip toggle button in `<aside>` header, JS event handler to toggle `flex-row-reverse` class on parent container, conditional alignment class on `<main>` content
- No new dependencies or breaking changes
- OBS browser source usage is unaffected (the flip button is part of the control panel which is hidden in OBS mode)
