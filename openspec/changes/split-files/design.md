## Context

The application is a single-file static website (`index.html`, ~597 lines) containing all HTML, CSS, and JavaScript. There is no build step, no bundler, and no package manager. It is deployed to Netlify as static files and loaded directly in OBS browser sources. The Tailwind CSS CDN script and OBS detection script must run in `<head>` before the DOM is parsed.

## Goals / Non-Goals

**Goals:**
- Separate CSS and JS into dedicated files (`style.css`, `app.js`) for better maintainability
- Preserve identical runtime behavior — zero functional changes
- Maintain the no-build-step, no-bundler architecture

**Non-Goals:**
- Introducing a CSS preprocessor, bundler, or module system
- Refactoring JavaScript logic (only moving code, not restructuring it)
- Splitting CSS or JS into multiple files (one file each is sufficient)
- Changing Netlify deployment configuration

## Decisions

### Decision 1: File names and locations — `style.css` and `app.js` in project root

Place both files alongside `index.html` in the project root. This keeps `<link>` and `<script>` references as simple relative paths (`href="style.css"`, `src="app.js"`) with no directory nesting. The project has no build output directory and all served files live at the root.

**Alternatives considered:**
- `css/` and `js/` subdirectories — unnecessary complexity for two files; the project is small enough that root placement is clearer.

### Decision 2: Keep Tailwind config and OBS detection inline

The Tailwind CDN `<script>` tag must be followed immediately by its `tailwind.config` script so Tailwind processes the config before scanning the DOM. The OBS detection script adds the `obs` class to `<html>` before `<body>` renders, preventing a flash of non-transparent background. Both must stay inline in `<head>`.

**Alternatives considered:**
- Moving them to a `head-scripts.js` file — would add a network request that could race with Tailwind CDN loading and OBS detection timing.

### Decision 3: Place `<script src="app.js"></script>` at end of `<body>` (no `defer`)

The original inline script is at the end of `<body>`, so placing the external script reference in the same position preserves identical execution timing. The script uses `DOMContentLoaded` internally, but keeping it at end-of-body avoids any subtle timing differences.

**Alternatives considered:**
- `<script defer>` in `<head>` — functionally equivalent but changes the load pattern from what the original code expected; end-of-body is safer for a no-change refactor.

### Decision 4: Place `<link rel="stylesheet" href="style.css">` after Google Fonts link

The custom CSS file should load after the Google Fonts stylesheet in `<head>` so that custom font-face rules and utility classes can override or complement the font definitions. Placing it before the Tailwind CDN script ensures styles are available when Tailwind processes the page.

## Risks / Trade-offs

- **[Additional HTTP requests]** → Two extra requests for `style.css` and `app.js` on first load. Mitigated by browser caching on subsequent loads and Netlify's CDN. Files are small (~160 lines CSS, ~260 lines JS).
- **[Cache invalidation]** → Users may see stale CSS/JS after updates. Mitigated by Netlify's cache headers (already configured in `_headers`). If needed, cache-busting query strings can be added later.
- **[File drift]** → CSS/JS could reference DOM elements that change in `index.html`. Mitigated by the project's small size and single-developer workflow.
