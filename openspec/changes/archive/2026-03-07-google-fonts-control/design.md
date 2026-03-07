## Context

The OBS slider widget is a single-file HTML application using Tailwind CSS and pure JS. It currently uses a hardcoded system font stack (`'Segoe UI'`, Tahoma, Geneva, Verdana, sans-serif) configured in the Tailwind config. All control-to-display synchronization is handled via a single `input` event listener using event delegation with a `switch(target.id)` pattern. The control form contains text inputs and range sliders with glassmorphism styling.

## Goals / Non-Goals

**Goals:**
- Allow users to select any Google Font by typing its name
- Load "UoqMunThenKhung" as the default font on page load
- Dynamically load and apply fonts from Google Fonts API
- Apply the font globally across both control panel and display area

**Non-Goals:**
- Font preview or autocomplete dropdown (simple text input only)
- Supporting font sources other than Google Fonts
- Font weight or style variants selection
- Persisting font selection across page reloads

## Decisions

### 1. Google Fonts CSS API v2 via `<link>` elements
**Decision**: Load fonts by injecting `<link rel="stylesheet">` elements pointing to `https://fonts.googleapis.com/css2?family=<name>&display=swap`.

**Rationale**: This is the simplest approach for a no-framework static page. The CSS API handles font-face declarations and format negotiation. Using `display=swap` ensures text remains visible while fonts load.

**Alternative considered**: Using the Google Fonts JS API or `FontFace` API — unnecessarily complex for this use case.

### 2. Default font loaded via static `<link>` in `<head>`
**Decision**: Load "UoqMunThenKhung" via a standard `<link>` tag in `<head>` rather than dynamically injecting it on page load.

**Rationale**: A static `<link>` in `<head>` follows Google Fonts best practices, enabling the browser to start fetching the font as early as possible. This avoids FOUT (Flash of Unstyled Text) for the default font.

### 3. Debounced input handling for font loading
**Decision**: Debounce the font name input with a ~500ms delay before triggering a font load.

**Rationale**: Without debounce, every keystroke would trigger a network request to Google Fonts. A 500ms delay waits for the user to pause typing before loading, reducing unnecessary requests.

### 4. Apply font via `document.documentElement.style.fontFamily`
**Decision**: Set font on the `<html>` element's inline style to ensure global coverage.

**Rationale**: Applying to `document.documentElement` overrides the Tailwind `font-sans` class on `<body>` and cascades to all child elements including both `<aside>` (control panel) and `<main>` (display). This is simpler and more reliable than updating multiple elements.

### 5. Integrate into existing event delegation pattern
**Decision**: Add the font input case to the existing `switch(target.id)` in the form's `input` event handler, but with debounce wrapping.

**Rationale**: Consistent with the existing `realtime-sync` architecture. The debounce is specific to font loading and doesn't affect other controls' instant responsiveness.

## Risks / Trade-offs

- **[Invalid font name]** → No error handling needed; Google Fonts API returns an empty stylesheet for unknown fonts, and the browser falls back to the configured font stack. The UX degrades gracefully.
- **[Network dependency]** → Font loading requires internet access. Mitigated by keeping the system font stack as fallback in the Tailwind config.
- **[FOUT on dynamic load]** → Using `display=swap` means text shows in fallback font until Google Font loads. This is acceptable and expected behavior.
- **[Duplicate link elements]** → Typing multiple font names creates multiple `<link>` elements. This is harmless as browsers deduplicate stylesheet requests, and the overhead is negligible.
