## Why

The page currently uses `background: transparent` unconditionally, which is correct for OBS browser source overlay use but makes the glassmorphism UI invisible when opened in a regular browser (white/light text on a transparent-to-white background). Adding OBS User-Agent detection enables smart background switching so the widget looks correct in both contexts.

## What Changes

- Add JavaScript-based OBS User-Agent detection that applies an `obs` class to `<body>` when running inside OBS browser source
- Change the body background from always-transparent to conditional: transparent in OBS mode (`body.obs`), dark background in regular browsers (no `.obs` class)
- Ensure the `<aside>` control panel always has an opaque dark background regardless of OBS detection, so controls remain readable in both environments

## Capabilities

### New Capabilities
- `obs-detection`: JavaScript User-Agent sniffing to detect OBS browser source environment and toggle a CSS class on the body element
- `background-switching`: Conditional background styles — transparent for OBS compositing, dark for regular browser viewing
- `control-panel-theme`: Opaque dark background override for the aside control panel so it remains readable in all contexts

### Modified Capabilities

## Impact

- `index.html`: CSS rules for `body`, `body.obs`, and `aside` modified; small JS snippet added before or at DOMContentLoaded
- No new dependencies, frameworks, or build steps — pure CSS/JS changes in the single-file static site
- Visual change for regular browser users (dark background instead of transparent); no change for OBS users
