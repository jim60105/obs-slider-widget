## Context

The control panel (`<aside>`) currently uses a fixed Tailwind width class `w-[300px]`. The display panel (`<main>`) uses `flex-1` to fill remaining space. This is a single-file static website with all HTML, CSS, and JS in `index.html`.

## Goals / Non-Goals

**Goals:**
- Widen the control panel from 300px to 330px for better control spacing

**Non-Goals:**
- Redesigning the control panel layout or control grouping
- Making the panel width responsive or configurable
- Changing the display panel behavior (it auto-adjusts via `flex-1`)

## Decisions

### Use Tailwind arbitrary width class
**Decision**: Change `w-[300px]` to `w-[330px]` on the `<aside>` element.
**Rationale**: Tailwind arbitrary values keep the width explicit and consistent with the existing approach. No additional CSS or configuration needed.
**Alternatives considered**: Using a Tailwind preset width (e.g., `w-80` = 320px, `w-84` = 336px) — rejected because 330px is the desired value and arbitrary values are already used.

## Risks / Trade-offs

- **[Minimal viewport impact]** → 30px reduction in display area is negligible on standard displays (1920px+). On very narrow viewports the control panel already dominates, so 30px is inconsequential.
- **[No rollback complexity]** → Single class change, trivially reversible.
