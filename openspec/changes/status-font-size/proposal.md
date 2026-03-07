## Why

The status/fraction text (e.g., "12/20") currently uses a hardcoded Tailwind `text-sm` (14px) size with no user control. Users need the ability to adjust this font size to match their OBS scene layout, just as they can already adjust the title font size.

## What Changes

- Add a new range slider `#statusSize` to the control form for adjusting the status text font size (range 10–24px, default 14)
- Wire the slider into the existing event delegation switch for real-time sync
- Apply font size via inline `style.fontSize` on the `#displayPercent` element
- Remove the hardcoded `text-sm` Tailwind class from `#displayPercent` in favor of the inline style

## Capabilities

### New Capabilities
- `status-font-size`: Range slider control for the status/fraction display text font size with real-time sync

### Modified Capabilities
- `control-form`: Add status font size range slider to the controls panel
- `realtime-sync`: Add real-time sync case for the status font size slider
- `fraction-display`: Remove hardcoded `text-sm` class; font size controlled via inline style

## Impact

- `index.html`: New slider element in control form, updated event delegation switch, updated initialization logic, modified `#displayPercent` element classes
