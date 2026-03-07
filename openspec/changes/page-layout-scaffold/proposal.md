## Why

The OBS slider widget project needs its foundational page structure before any UI components can be built. This change creates the HTML scaffold with a two-panel glassmorphism layout optimized for OBS browser source usage (transparent background, full viewport, no scrollbars). Without this foundation, no controls or display elements can be developed.

## What Changes

- Create `index.html` with Tailwind CSS loaded from CDN (`<script src="https://cdn.tailwindcss.com"></script>`)
- Set transparent body background (`background: transparent`) for OBS browser source compositing
- Implement two-panel flex layout: left `<aside>` for controls (~300px width), right `<main>` for display (flex-1)
- Apply glassmorphism styling to both panels: semi-transparent background (`rgba(255,255,255,0.15)`), `backdrop-filter: blur(12px)`, thin semi-transparent border, subtle box-shadow
- Define CSS custom properties for glass effect reuse across future components
- Configure full viewport height with `overflow: hidden` (no scrollbars)
- Set system font stack ('Segoe UI', Tahoma, Geneva, Verdana, sans-serif) using Tailwind utilities where possible

## Capabilities

### New Capabilities
- `page-layout`: HTML5 page structure with transparent background, full viewport sizing, and system font configuration for OBS browser source usage
- `glass-panels`: Two-panel flex layout with glassmorphism-styled `<aside>` (controls) and `<main>` (display) panels, including reusable CSS custom properties for the glass effect

### Modified Capabilities
<!-- No existing capabilities to modify — this is the initial scaffold. -->

## Impact

- **New file**: `index.html` — the single entry point for the widget
- **Dependencies**: Tailwind CSS loaded from CDN (no build step required)
- **OBS integration**: Transparent background ensures clean overlay compositing in OBS browser sources
- **Future work**: All subsequent UI components (slider, controls, display elements) will be placed within this layout scaffold
