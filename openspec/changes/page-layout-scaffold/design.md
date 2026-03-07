## Context

This is a greenfield project — there is no existing code. The widget will be loaded as a browser source in OBS Studio, which means the page must render with a transparent background so OBS composites it over other scene elements. The entire UI is a single `index.html` file using Tailwind CSS from CDN with no build step. The layout must accommodate a controls panel and a display panel side by side at full viewport height.

## Goals / Non-Goals

**Goals:**
- Establish the single-file HTML foundation that all future components build upon
- Provide a reusable glassmorphism styling system via CSS custom properties
- Ensure OBS browser source compatibility (transparent background, no scrollbars)
- Create a clear semantic separation between controls (`<aside>`) and display (`<main>`)

**Non-Goals:**
- No interactive controls or JavaScript logic in this change
- No slider component, progress bar, or any display content
- No responsive/mobile layout — this is fixed for OBS browser source dimensions
- No build tooling, bundler, or package manager setup

## Decisions

### 1. Single HTML file with CDN-loaded Tailwind
**Choice**: Load Tailwind CSS via `<script src="https://cdn.tailwindcss.com"></script>` in a single `index.html`.
**Rationale**: The project is a static widget with no build step. CDN Tailwind keeps the setup zero-config and the project a single file. This is appropriate for an OBS browser source where simplicity matters more than production optimization.
**Alternatives considered**: Local Tailwind CLI build (adds tooling complexity), plain CSS (loses utility-first productivity).

### 2. CSS custom properties for glassmorphism
**Choice**: Define `--glass-bg`, `--glass-blur`, `--glass-border`, and `--glass-shadow` as CSS custom properties on `:root`, then apply them in a `.glass` utility class.
**Rationale**: Both panels share identical glass styling, and future components (sliders, buttons) will reuse the same effect. Custom properties allow runtime theming and keep values DRY. A `.glass` class makes it easy to apply the effect to any element.
**Alternatives considered**: Tailwind `@apply` directive (less flexible for runtime changes), inline styles on each panel (duplicated, harder to maintain).

### 3. Flex layout with fixed aside width
**Choice**: Use a horizontal flex container with `<aside>` at ~300px fixed width and `<main>` as flex-1.
**Rationale**: The controls panel has a predictable content width; the display area should fill remaining space. Flex layout handles this cleanly with minimal CSS.
**Alternatives considered**: CSS Grid (more powerful but unnecessary for a simple two-column split).

### 4. System font stack via Tailwind
**Choice**: Configure Tailwind's `fontFamily` to use 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif as the default sans font, then apply via `font-sans` on the body.
**Rationale**: Keeps font configuration within the Tailwind system. System fonts eliminate external font loading, which is ideal for an OBS browser source where network requests should be minimal.

## Risks / Trade-offs

- **[CDN dependency]** → The widget requires internet access to load Tailwind CSS. Mitigation: OBS browser sources typically have internet access; if offline use is needed later, Tailwind output can be inlined.
- **[CDN Tailwind not for production]** → The CDN script is intended for development. Mitigation: Acceptable for a personal OBS widget; can be replaced with a built CSS file if needed.
- **[Fixed aside width]** → 300px may not suit all OBS canvas sizes. Mitigation: The width is easy to adjust and could be made configurable in a future change.
