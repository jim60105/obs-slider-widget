## Context

The OBS Slider Widget renders a vertical progress bar for OBS browser sources. The `<main>` display panel uses the `.glass` class for glassmorphism styling in normal browsers, but `html.obs main` CSS rules strip all glass effects to make the panel fully transparent for OBS compositing.

The preview image (`docs/preview.png`) shows the widget in OBS with a frosted glass panel behind the progress bar group — semi-transparent background, backdrop blur, subtle white border, and rounded corners. This look is currently impossible because OBS mode removes all styling from `<main>`.

The existing `.glass` CSS class and custom properties (`--glass-bg`, `--glass-blur`, `--glass-border`) provide a reusable glassmorphism system that can be leveraged.

## Goals / Non-Goals

**Goals:**
- Add a toggleable frosted-glass panel background behind the widget content, visible in both regular browser and OBS modes
- Reuse the existing glassmorphism design system (`.glass` class, CSS custom properties)
- Persist the toggle state through the preset system
- Keep the feature independent from the existing `html.obs main` transparency rules

**Non-Goals:**
- Configurable panel opacity/blur/border controls (future enhancement; for now use the existing glass design token values)
- Changing the existing OBS transparent display behavior — `<main>` stays transparent in OBS
- Adding panel background to the `<aside>` control panel (it already has its own dark background)

## Decisions

### Decision 1: Inner wrapper `<div>` vs. modifying `<main>` styling

**Chosen**: Add a new `<div id="displayPanelBg">` inside `<main>` wrapping the widget content.

**Rationale**: The existing `html.obs main` rules remove all glass effects from `<main>`. Adding a separate inner element means:
- OBS transparency rules are untouched (no spec conflict)
- The panel background can be independently toggled without re-engineering OBS detection
- Clean separation of concerns

**Alternatives considered**:
- Conditionally override `html.obs main` based on a CSS class: Fragile, couples OBS detection with the toggle
- Use `::before`/`::after` pseudo-element: Cannot easily toggle via JS class manipulation, limited styling control

### Decision 2: Toggle control type

**Chosen**: A checkbox/toggle input in the control panel form, controlled via `id="panelBg"`.

**Rationale**: Binary on/off matches the feature — either you want the glass panel or you don't. A checkbox integrates naturally with the existing `controlForm` event delegation pattern (`switch(target.id)` in the `input` event listener).

### Decision 3: CSS implementation

**Chosen**: Apply glassmorphism via CSS class toggle on the inner wrapper. When enabled, add a class (e.g., `.glass-panel-bg`) that provides:
- `background: linear-gradient(135deg, rgba(255,255,255,0.18) 0%, rgba(255,255,255,0.08) 100%)`
- `backdrop-filter: var(--glass-blur)`
- `border: 1px solid var(--glass-border)`
- `border-radius: 1rem`
- `padding` to create spacing around the widget content

When disabled, the wrapper has no visual styling (transparent, no border).

**Rationale**: Reuses the existing design tokens. Class toggle is the simplest approach for binary on/off with vanilla JS.

### Decision 4: Preset schema extension

**Chosen**: Add `panelBg` (boolean) to the preset data structure.

**Rationale**: Follows the existing pattern — each control has a corresponding key in the preset object. Backward-compatible: old presets without `panelBg` fall through to the "Load preset with missing keys" scenario (existing spec), so the toggle retains its current/default value.

## Risks / Trade-offs

- **[Risk] Old presets lack `panelBg` key** → Mitigation: The existing "missing keys" behavior in `preset-persistence` handles this gracefully — the toggle retains its default value (off).
- **[Trade-off] No granular panel controls** → Keeps the control panel simple for now. Users who want different opacity/blur can be served in a future enhancement.
- **[Risk] Backdrop-filter performance on low-end devices** → Mitigation: The feature is opt-in (toggle off by default), so users experiencing performance issues can simply disable it.
