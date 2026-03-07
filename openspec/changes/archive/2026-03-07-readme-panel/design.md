## Context

The OBS Slider Widget is a single-file static website (`index.html`) with a two-panel flex layout: a control `<aside>` (left) and a display `<main>` (right). The `#flipLayout` button reverses panel order via `flex-row-reverse` on `#layoutContainer`. In OBS mode, the `obs` class on `<html>` triggers transparent backgrounds and hides non-essential UI elements.

Users currently have no in-app access to documentation — they must leave the application to read the README on GitHub. Adding a README panel directly in the UI provides immediate context without breaking the existing layout or OBS overlay behavior.

## Goals / Non-Goals

**Goals:**
- Add a third panel to `#layoutContainer` that fetches and renders `README.md` as HTML
- Ensure the panel participates in the existing flip mechanism without extra logic
- Hide the panel entirely in OBS mode so it never appears on stream
- Match the existing glassmorphism visual style

**Non-Goals:**
- Editing README content from the UI
- Caching or offline support for the rendered markdown
- Supporting markdown files other than `README.md`
- Adding a navigation sidebar or table-of-contents within the README panel

## Decisions

### Markdown parser: marked.js from CDN

**Choice**: Load `marked.js` via `<script src="https://cdn.jsdelivr.net/npm/marked/marked.min.js"></script>` in `<head>`.

**Rationale**: marked.js is a widely-used, lightweight (~40 KB minified) markdown parser with no dependencies. It aligns with the project's CDN-first approach (Tailwind CSS, Google Fonts). Alternatives considered:
- **showdown.js**: Similar size but less popular; no significant advantage.
- **Custom regex parser**: Would only handle a subset of markdown and be fragile to maintain.
- **markdown-it**: More features but larger; unnecessary for rendering a single README.

### Panel placement: First child of `#layoutContainer`

**Choice**: Insert the README panel as the first child of `#layoutContainer`, before the existing `<aside>`.

**Rationale**: Since `#layoutContainer` uses `flex` (default `flex-row`), a first-child panel naturally appears on the left. When `flex-row-reverse` is toggled by the flip button, the first child moves to the right — so the README panel automatically participates in flipping with zero additional JavaScript. This is the simplest approach and requires no changes to the existing flip logic.

### Panel element: `<section>` with viewport-relative width

**Choice**: Use a `<section>` element with a viewport-relative width (`w-[60vw]`) matching the glassmorphism style.

**Rationale**: Using `<section>` semantically separates it from the control `<aside>` and the display `<main>`. A viewport-relative width prevents the panel from competing for flex space with the display area. The width is set to 60vw to accommodate rendered markdown content comfortably while remaining responsive across different screen sizes.

### OBS hiding: CSS rule on `html.obs`

**Choice**: Add `html.obs #readmePanel { display: none; }` in the existing `<style>` block.

**Rationale**: The project already uses `html.obs` CSS rules for hiding elements in OBS mode. A CSS-only approach is consistent with how the control panel aside is already hidden, requires no JavaScript, and prevents any flash of content before JS executes.

### Markdown styling: Tailwind `prose` via CDN plugin

**Choice**: Use Tailwind's `@tailwindcss/typography` plugin (loaded via CDN config) to apply `prose` classes for rendered HTML styling.

**Rationale**: The project already loads Tailwind from CDN. The typography plugin provides well-designed default styles for rendered HTML content (headings, lists, code blocks, links) with zero custom CSS. This keeps styling consistent and maintainable. The prose colors will be overridden to work on the dark glassmorphism background.

## Risks / Trade-offs

- **CDN dependency**: Adding marked.js as another CDN dependency increases external dependencies from 2 to 3. → Mitigation: marked.js is served from jsDelivr (same CDN pattern as other deps); the panel gracefully degrades if the script fails to load.
- **Fetch failure**: `README.md` may fail to load (e.g., CORS, file missing, network error). → Mitigation: Display a user-friendly error message in the panel on fetch failure.
- **Layout squeeze on small viewports**: Three fixed-width panels plus the display area may not fit on narrow screens. → Mitigation: The display area uses `flex-1` so it compresses; this matches the existing behavior where the control panel already consumes space. The README panel targets desktop OBS usage where viewport width is typically ≥1280px.
- **Large README rendering**: A very large README could cause slow initial render. → Mitigation: The README is under 5 KB; this is not a concern for this project.
