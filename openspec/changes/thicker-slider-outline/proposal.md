## Why

The slider track outline (`border: 1px solid`) is too thin and hard to see, especially against complex backgrounds. A thicker border will make the track boundary more visible and improve the overall visual hierarchy of the slider widget.

## What Changes

- Increase `.glass-track` border width from `1px` to `2px` for a more prominent outline
- Adjust the outer glow in `box-shadow` to complement the thicker border

## Capabilities

### New Capabilities

_(none)_

### Modified Capabilities

- `glass-panels`: The `.glass-track` border thickness requirement changes from `1px` to `2px`, and the box-shadow outer glow is strengthened to match

## Impact

- `index.html`: CSS changes to `.glass-track` border and box-shadow properties
- Visual-only change; no logic, layout, or API impact
