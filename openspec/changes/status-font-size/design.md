## Context

The OBS slider widget displays a progress bar with a fraction text (e.g., "12/20") on the right side. The title text already has a font size slider (`#titleSize`, range 12–32, default 16) that applies via `style.fontSize`. The status/fraction text (`#displayPercent`) is hardcoded to Tailwind `text-sm` (14px) with no user control.

All controls live in a single `<form id="controlForm">` and use event delegation via a single `input` listener with a `switch` on `target.id`.

## Goals / Non-Goals

**Goals:**
- Allow users to adjust the status/fraction text font size in real time
- Follow the existing pattern established by the title font size slider
- Maintain visual consistency with the glassmorphism control styling

**Non-Goals:**
- Changing the status text color or font family
- Adding font size control for any other elements
- Persisting the font size value across page reloads

## Decisions

### Use inline `style.fontSize` instead of Tailwind classes
**Decision**: Apply the status font size via `style.fontSize` and remove the `text-sm` Tailwind class.
**Rationale**: This is the same approach used for the title font size slider. Inline styles allow arbitrary pixel values from the range slider, whereas Tailwind utility classes only provide fixed steps.
**Alternative considered**: Dynamically toggling Tailwind `text-*` classes — rejected because Tailwind's size scale doesn't map 1:1 to a continuous pixel range.

### Range 10–24px, default 14
**Decision**: The slider range is 10–24px with a default of 14px.
**Rationale**: 14px matches the current `text-sm` size, preserving backward compatibility. 10px is the minimum readable size; 24px is large enough without overwhelming the progress bar layout.

### Reuse existing event delegation pattern
**Decision**: Add a new `case 'statusSize'` in the existing `switch` block inside the form's `input` event listener.
**Rationale**: Keeps all control wiring in one place, consistent with existing `titleText`, `titleSize`, and `progress` cases.

## Risks / Trade-offs

- [Inline style overrides any future Tailwind class changes] → Acceptable since this is the established pattern for font size control in this widget.
