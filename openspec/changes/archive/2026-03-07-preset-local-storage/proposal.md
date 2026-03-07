## Why

Users lose all their widget settings every time they reload the page because there is no persistence layer. When running multiple widget instances (e.g., tracking different counters in OBS), they all share the same global state space, making multi-instance use impossible.

## What Changes

- Add a preset system that saves and loads ALL control settings (titleText, titleSize, totalVal, progressVal, themeColor, statusSize, fontFamily, and any future flip state) to/from localStorage as named presets.
- Add preset management UI: a dropdown/select for preset selection, a "Save" button, and a "Delete" button, styled with glassmorphism matching the control panel.
- On page init, automatically load the first saved preset if any exists.
- Add multi-instance support via a URL parameter (e.g., `?instance=1`). Each instance uses its own localStorage key namespace, preventing cross-instance data conflicts. If no instance parameter is provided, use a default namespace.

## Capabilities

### New Capabilities
- `preset-persistence`: Saving, loading, and deleting named presets in localStorage with per-instance namespacing and auto-load on init.
- `preset-ui`: UI controls (select dropdown, save button, delete button) for preset management, styled with glassmorphism.

### Modified Capabilities
- `realtime-sync`: Initialization must incorporate preset auto-loading — on DOMContentLoaded, load the first saved preset (if any) and apply its values to all form controls before the initial sync.

## Impact

- **Code**: `index.html` — new JS functions for preset CRUD, namespace resolution, and UI event handlers; new HTML for preset controls in the aside panel; minor CSS additions.
- **Dependencies**: None (uses built-in localStorage API and URLSearchParams).
- **Systems**: localStorage keys are namespaced per instance to avoid collisions.
