## Why

The entire application lives in a single `index.html` file (~597 lines) mixing HTML structure, CSS styles, and JavaScript logic. This makes the codebase harder to navigate, edit, and maintain as the project grows. Separating concerns into dedicated files follows standard web development practices and improves developer experience.

## What Changes

- Extract all custom CSS from the inline `<style>` block into a new `style.css` file
- Extract all application JavaScript from the main `<script>` block into a new `app.js` file
- Replace inline `<style>` with `<link rel="stylesheet" href="style.css">` in `<head>`
- Add `<script src="app.js"></script>` at the end of `<body>`
- Keep Tailwind CDN `<script>`, Tailwind config `<script>`, and OBS detection `<script>` inline in `<head>` (they must execute before DOM parsing)
- Remove all inline `<style>` blocks and application logic `<script>` blocks from `index.html`

## Capabilities

### New Capabilities
- `file-organization`: Defines the project's file structure convention, specifying which code belongs in which file and the rules for inline vs. external resources

### Modified Capabilities
- `page-layout`: The HTML5 page structure requirement changes to reference external `style.css` and `app.js` files instead of containing inline styles and scripts

## Impact

- **Files created**: `style.css`, `app.js`
- **Files modified**: `index.html` (reduced from ~597 lines to ~80 lines of HTML structure)
- **No behavioral changes**: The application functions identically after the split
- **No dependency changes**: No new libraries or build tools introduced
- **Deployment**: Netlify serves the additional static files without configuration changes
- **Caching**: External CSS/JS files can be cached independently by browsers, improving repeat-load performance
