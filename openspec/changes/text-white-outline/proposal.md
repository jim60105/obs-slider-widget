## Why

The widget is used as a transparent OBS browser source overlay on top of arbitrary stream backgrounds. The current text styling relies on a theme-colored glow (`text-shadow`) which can blend into light or similarly-colored backgrounds, making the title and status text unreadable. Adding a white outline (stroke) around the text characters ensures legibility regardless of the underlying background color.

## What Changes

- Add a white outline/stroke to `.progress-title` text so title characters have a visible white border
- Add a white outline/stroke to `.progress-status` text so status/fraction characters have a visible white border
- Add a white outline/stroke to `#displayPercent` inline styles for consistent treatment
- The existing theme-colored glow effect remains unchanged; the white outline is an additional layer

## Capabilities

### New Capabilities

- `text-white-outline`: White outline/stroke applied to progress bar text elements (title, status, percentage) for legibility over any background

### Modified Capabilities

- `text-glow`: The text-shadow property value will be extended to include additional white outline shadow layers alongside the existing theme-color glow layers

## Impact

- `index.html`: CSS rules for `.progress-title` and `.progress-status` will have their `text-shadow` values extended with white outline layers
- `index.html`: JavaScript that sets `#displayPercent` inline styles will include the white outline shadow layers
- No new dependencies; pure CSS technique
