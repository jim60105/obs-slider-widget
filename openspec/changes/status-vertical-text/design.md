## Context

The OBS slider widget displays a vertical progress bar with a title on the left and a status/fraction text on the right. The left title already uses vertical writing mode (`writing-mode: vertical-rl; text-orientation: mixed;`) via the `.progress-title` CSS class. The right status text (`#displayPercent`) currently renders horizontally, creating a visual asymmetry.

Both text elements live inside a flex container with `items-stretch`, with the title at the top (`self-start`) and the status at the bottom (`self-end`).

## Goals / Non-Goals

**Goals:**
- Make the status/fraction text display vertically, matching the title's orientation
- Maintain bottom-right alignment of the status text
- Reuse the same CSS writing-mode approach proven by `.progress-title`

**Non-Goals:**
- Changing the title text styling
- Modifying the fraction format or calculation logic
- Adding responsive or configurable text orientation

## Decisions

### Decision 1: Dedicated `.progress-status` CSS class

Create a new `.progress-status` class with `writing-mode: vertical-rl` and `text-orientation: mixed`, mirroring the `.progress-title` pattern.

**Rationale**: A dedicated class keeps styling semantic and consistent with the existing `.progress-title` convention. Inline styles or extending `.progress-title` would reduce clarity.

**Alternative considered**: Reusing `.progress-title` directly — rejected because the two elements may diverge in future styling (e.g., font size, color).

### Decision 2: Use `text-orientation: mixed`

Use `mixed` rather than `upright` so that Latin characters and the slash in "12/20" rotate naturally with the vertical flow.

**Rationale**: This matches the title's behavior and produces the most natural reading experience for mixed CJK/Latin content.

## Risks / Trade-offs

- **[Readability of fraction in vertical mode]** → The slash and numbers will rotate 90°. This is acceptable because the title already uses the same approach and users expect vertical text in this widget's design language.
- **[Minimal code change]** → Low risk since this only adds a CSS class and applies it to one element. No logic changes required.
