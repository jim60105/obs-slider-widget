## Context

The OBS slider widget is a single-file HTML application (`index.html`) using Tailwind CSS and pure JS. Currently, all control settings (title text, font sizes, progress, theme color, font family) are ephemeral — they reset to defaults on every page reload. There is no localStorage usage. The existing `realtime-sync` spec handles form-to-display synchronization via event delegation on `#controlForm`.

Users often run multiple widget instances simultaneously in OBS (e.g., tracking different counters). Without namespacing, any persistence solution would cause cross-instance conflicts.

## Goals / Non-Goals

**Goals:**
- Persist all control settings as named presets in localStorage.
- Provide preset management UI (select, save, delete) integrated into the control panel.
- Support multiple simultaneous widget instances via URL-parameter-based namespace isolation.
- Auto-load the first saved preset on page init.

**Non-Goals:**
- Cloud sync or export/import of presets — localStorage only.
- Undo/redo for preset changes.
- Preset sharing between instances or browsers.
- Auto-save on every control change (explicit save only).

## Decisions

### Decision 1: Namespace via `?instance=` URL parameter
**Choice**: Use `URLSearchParams` to read an `instance` query parameter. The localStorage key prefix becomes `obs-slider-<instance>-presets`. If no parameter is provided, use `obs-slider-default-presets`.

**Alternatives considered**:
- *Random UUID per tab*: Would prevent intentional reuse of the same namespace across reloads.
- *Hash-based routing*: Conflicts with potential future use of URL hash.

**Rationale**: Explicit instance parameter is simple, deterministic, and lets users control which namespace they use.

### Decision 2: Single localStorage key per namespace storing all presets
**Choice**: Store all presets for a namespace as a single JSON object under one localStorage key: `{ "presetName": { ...settings }, ... }`.

**Alternatives considered**:
- *One key per preset*: More keys to manage, harder to enumerate.
- *IndexedDB*: Overkill for small config data.

**Rationale**: Simple, atomic reads/writes, easy enumeration of preset names.

### Decision 3: Preset settings schema
**Choice**: Each preset stores: `{ titleText, titleSize, totalVal, progressVal, themeColor, statusSize, fontFamily }`. Future settings (e.g., flip state) can be added without migration — missing keys fall back to current form defaults.

**Rationale**: Forward-compatible. No schema versioning needed for additive changes.

### Decision 4: UI placement and styling
**Choice**: Place preset controls at the top of the control form (before existing controls), using glassmorphism-styled elements consistent with `glass-panels` spec. Use a native `<select>` for preset selection, and two small buttons for Save and Delete.

**Alternatives considered**:
- *Modal dialog*: Over-engineered for this use case.
- *Separate panel*: Breaks the single-panel control layout.

**Rationale**: Keeps the UI minimal and consistent with the existing control panel design.

### Decision 5: Preset auto-load behavior
**Choice**: On `DOMContentLoaded`, after reading the namespace, load all presets. If any exist, auto-load the first preset (alphabetically by name) and apply its values to all form controls, then trigger the standard sync. If none exist, use form defaults as today.

**Rationale**: Provides a seamless experience for returning users without requiring explicit load.

## Risks / Trade-offs

- **[localStorage quota]** → Presets are small JSON objects; quota exhaustion is extremely unlikely. No mitigation needed.
- **[Breaking change to settings schema]** → If a setting key is renamed or removed in the future, old presets may contain stale keys. Mitigation: load with fallback to form defaults for missing keys; ignore unknown keys.
- **[No validation on preset names]** → Users could create presets with empty or duplicate names. Mitigation: trim whitespace and prevent empty names; overwrite on duplicate name (acts as update).
