## Context

The progress bar widget in `index.html` uses a horizontal flex container (line 175) with `items-end` to align its children. The left-side vertical title text consequently sits at the bottom of the container. The title should sit at the top for better visual alignment.

## Goals / Non-Goals

**Goals:**
- Align the vertical title text to the top of the progress bar area.

**Non-Goals:**
- Changing the title's vertical writing mode or text orientation.
- Modifying any other layout or styling of the widget.

## Decisions

- **Use `items-start` instead of `items-end`**: Tailwind's `items-start` maps to `align-items: flex-start`, which pushes the title to the top of the flex container. This is the simplest, most direct fix with zero side-effects on the progress bar itself since the bar already fills the available height.

## Risks / Trade-offs

- **Minimal risk**: This is a single-class change. The progress bar stretches to fill the container height regardless of alignment, so only the title position is affected.
