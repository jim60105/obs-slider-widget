## Context

The widget currently displays the fraction text ("3/20") beside the slider track using `writing-mode: vertical-rl` and `text-orientation: mixed`. The layout is a horizontal flex container (`flex items-stretch`) with title, track, and fraction as siblings. The status text is positioned at the bottom via `self-end`.

## Goals / Non-Goals

**Goals:**

- Replace vertical writing mode with horizontal text in a stacked column layout
- Display fraction as three centered lines: current value, slash, total
- Position the stacked fraction below the slider track, centered horizontally relative to the track

**Non-Goals:**

- Changing the progress bar fill logic or ARIA attributes
- Modifying the title text orientation or position
- Adding animation or transitions to the status text

## Decisions

### Use `innerHTML` with `<br>` for line breaks

The fraction display will use `innerHTML` with `<br>` tags to create line breaks between current value, slash, and total. This avoids adding extra wrapper elements and keeps the implementation simple.

**Alternative considered:** Using a flex column with three `<span>` children. Rejected because it adds DOM complexity for a purely presentational change that `<br>` handles natively.

### Use `text-align: center` with block display

The `.progress-status` element will use `text-align: center` to horizontally center each line of the stacked fraction. The element will use standard horizontal writing mode (removing `writing-mode` and `text-orientation` entirely).

### Wrap track and status in a column flex container

The slider track and status text will be wrapped in a flex column container so the status text sits below the track. The outer flex container remains horizontal for title and track-group, while the inner column stacks track and status vertically.

**Alternative considered:** Using absolute positioning. Rejected because flex layout is already the pattern used throughout the widget and provides natural flow.

## Risks / Trade-offs

- [Risk] Using `innerHTML` instead of `textContent` introduces a minor XSS surface → Mitigated because the values are numeric and already validated/clamped by the existing `updateProgressDisplay` logic before rendering.
- [Trade-off] The stacked text takes slightly more vertical space than the vertical writing mode → Acceptable because readability improvement outweighs the minor space increase.
