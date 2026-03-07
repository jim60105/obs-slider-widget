## Why

The control panel page lacks documentation visibility — users must leave the app to read the README. Embedding a rendered README panel directly in the UI gives users immediate access to usage instructions, feature lists, and configuration guidance without switching context.

## What Changes

- Add a new panel (left of the control panel) that fetches `./README.md` at runtime and renders it as HTML using a lightweight CDN-based markdown parser
- The README panel is hidden when running inside OBS (class `obs` on `<html>`)
- The panel participates in the existing layout flip mechanism — when `#flipLayout` is toggled, the panel moves to the opposite side along with the rest of `#layoutContainer`
- The panel is scrollable and styled consistently with the existing glassmorphism theme

## Capabilities

### New Capabilities
- `readme-panel`: Fetches and renders README.md as HTML in a scrollable glass panel, hidden in OBS mode

### Modified Capabilities
- `page-layout`: Layout expands from two panels (aside + main) to three panels (readme-panel + aside + main) in non-OBS mode

## Impact

- **index.html**: New `<section>` element added inside `#layoutContainer`, new `<script>` tag for marked.js CDN, new JS to fetch/render markdown, new CSS for README panel styling and OBS hiding
- **Dependencies**: Adds marked.js from CDN (lightweight markdown parser)
- **Layout**: The `#layoutContainer` flex row gains a third child; existing flip behavior via `flex-row-reverse` naturally reverses all three panels
