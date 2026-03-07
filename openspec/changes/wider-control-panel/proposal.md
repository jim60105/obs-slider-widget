## Why

The control panel (`<aside>`) at 300px width is slightly too narrow, causing some UI controls (especially range sliders with labels) to feel cramped. Widening to 330px gives controls more breathing room without significantly reducing the display area.

## What Changes

- Increase the `<aside>` panel width from `w-[300px]` (300px) to `w-[330px]` (330px) in the Tailwind class on the `<aside>` element

## Capabilities

### New Capabilities

_(none)_

### Modified Capabilities

- `glass-panels`: The aside panel width changes from ~300px to ~330px in the two-panel flex layout requirement

## Impact

- **Code**: Single class change in `index.html` on the `<aside>` element (`w-[300px]` → `w-[330px]`)
- **Layout**: Display panel (`<main>` with `flex-1`) automatically adjusts to the slightly reduced remaining width
- **No breaking changes**: No API, dependency, or functional behavior changes
