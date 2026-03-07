## Why

The current glass track width of 20px is too narrow to be clearly visible when used as an OBS browser source overlay, especially at lower resolutions or when viewers are watching on smaller screens. Doubling the track width to 40px improves readability and visual presence in stream layouts.

## What Changes

- Increase the `.glass-track` width from `20px` to `40px` for better OBS visibility
- Update the spec requirement for the glass track container to reflect the new width

## Capabilities

### New Capabilities

_(none)_

### Modified Capabilities

- `progress-bar-widget`: The glass track container width requirement changes from 20px to 40px

## Impact

- `index.html`: CSS change to `.glass-track` width property
- Visual change only — no JavaScript, API, or dependency impact
- The fill element, glassmorphism styling, and all other track properties remain unchanged
