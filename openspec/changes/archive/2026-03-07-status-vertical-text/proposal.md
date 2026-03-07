## Why

The right-side status/fraction text (e.g., "12/20") currently displays horizontally, while the left-side title text already uses vertical writing mode. This visual inconsistency breaks the symmetry of the widget's vertical layout. Making the status text vertical will create a cohesive, balanced appearance.

## What Changes

- Add a CSS class (`.progress-status`) with `writing-mode: vertical-rl` and `text-orientation: mixed` to match the existing `.progress-title` styling
- Apply the new class to the `#displayPercent` element so the fraction text renders vertically
- Maintain existing bottom alignment (`self-end`) so the status text stays anchored at the bottom-right

## Capabilities

### New Capabilities
- `vertical-status-text`: Vertical writing mode for the status/fraction display text, matching the title's vertical orientation

### Modified Capabilities
- `fraction-display`: The fraction text orientation changes from horizontal to vertical rendering

## Impact

- **Code**: `index.html` — new CSS class definition in `<style>` block and class addition to `#displayPercent` element
- **Visual**: The fraction text (e.g., "12/20") will render top-to-bottom instead of left-to-right, with the slash character rotating naturally via `text-orientation: mixed`
- **Dependencies**: None — uses standard CSS writing-mode properties already proven by `.progress-title`
