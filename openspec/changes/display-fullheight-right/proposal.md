## Why

The progress bar widget is constrained to a fixed 400px height and centered in the display panel, which wastes vertical space and doesn't look right as an OBS overlay. The widget should fill the full height of the right panel and align to the right edge for a cleaner, more professional appearance.

## What Changes

- Remove the fixed `height: 400px` from `.glass-track` and make it stretch to fill the available vertical space using flex-grow or `h-full`.
- Change the `<main>` container alignment from centered (`items-center justify-center`) to right-aligned (`justify-end` or equivalent) so the widget sits on the right edge of the display panel.
- Adjust the inner flex container to also stretch vertically so the track can fill the panel height.

## Capabilities

### New Capabilities

- `fullheight-track`: The progress bar track fills the entire available vertical space of the display panel instead of a fixed 400px height.
- `right-aligned-widget`: The progress bar widget is positioned at the right edge of the display panel instead of being centered.

### Modified Capabilities

- `page-layout`: The `<main>` display area alignment changes from centered to right-aligned.
- `progress-bar-widget`: The glass track height changes from fixed 400px to dynamic full-height.

## Impact

- `index.html`: CSS rule `.glass-track` loses its fixed `height: 400px`; `<main>` element classes change from `items-center justify-center` to right-aligned layout; inner flex container needs vertical stretch.
- No API, dependency, or breaking changes. Pure visual/layout adjustment.
