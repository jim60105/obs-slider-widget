## Why

The current vertical writing mode (`writing-mode: vertical-rl`) for the fraction display ("3/20") renders characters sideways, making them harder to read at a glance. Switching to horizontal text with each part on its own line (current value, slash, total) provides a cleaner, more readable layout while maintaining the compact vertical footprint.

## What Changes

- Remove vertical writing mode from the status text element
- Change the fraction display from a single inline string ("3/20") to a stacked multi-line format with each part (current value, slash, total) on its own centered line
- Restructure the flex layout so the status text appears below the slider track, centered horizontally

## Capabilities

### New Capabilities

_(none)_

### Modified Capabilities

- `vertical-status-text`: Remove vertical writing mode; replace with horizontal text displayed in a column layout, centered below the slider track
- `fraction-display`: Change fraction format from single-line "current/total" to multi-line stacked format with line breaks between current value, slash, and total

## Impact

- `index.html`: CSS changes to `.progress-status`, JS changes in `updateProgressDisplay`, and HTML restructuring of the widget flex layout
- No new dependencies or breaking API changes
