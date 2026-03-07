## Context

The control panel (`<aside>`) uses a flex column layout with `justify-between` to pin the footer at the bottom. Currently the `<form>` and `<footer>` share the full height. As more controls are added (font family, theme color, status size, etc.), the form content can exceed the viewport height, making lower controls inaccessible. There is no scroll mechanism today.

The project is a single-file `index.html` using Tailwind CSS via CDN with a glassmorphism visual theme.

## Goals / Non-Goals

**Goals:**
- Enable vertical scrolling of the control form when its content exceeds available space
- Keep the footer always visible and anchored at the bottom of the aside
- Style the scrollbar to match the existing translucent glassmorphism aesthetic
- Support modern browsers (Chrome, Firefox, Safari, Edge)

**Non-Goals:**
- Horizontal scrolling support
- Auto-collapsing or accordion-style control sections
- Virtual scrolling or lazy-loading of controls

## Decisions

### 1. Flex layout adjustment for scroll containment
**Decision**: Make the form `flex-1` with `min-h-0` and `overflow-y: auto` so it becomes the scrollable container while the footer remains outside the scroll area.

**Rationale**: The existing `justify-between` layout already separates form and footer. By giving the form `flex-1 min-h-0 overflow-y-auto`, the browser allocates remaining space to the form and enables scroll when content exceeds that space. `min-h-0` is critical — without it, flex items default to `min-height: auto` which prevents overflow from triggering.

**Alternative considered**: Wrapping the form in a separate scroll container `<div>`. Rejected because it adds unnecessary DOM nesting; the form element itself can serve as the scroll container.

### 2. Custom scrollbar styling with CSS
**Decision**: Use `scrollbar-width: thin` and `scrollbar-color` for Firefox, plus `::-webkit-scrollbar` pseudo-elements for Chrome/Safari/Edge.

**Rationale**: Native scrollbar styling is sufficient and avoids JavaScript libraries. The thin scrollbar with translucent colors (`rgba(255,255,255,0.2)` thumb, `transparent` track) blends with the glassmorphism theme.

### 3. Tailwind utility classes + inline `<style>` block
**Decision**: Use Tailwind utilities for layout (`flex-1`, `min-h-0`, `overflow-y-auto`) and a `<style>` block for scrollbar pseudo-elements (not available as Tailwind utilities).

**Rationale**: Keeps the approach consistent with the existing codebase which already mixes Tailwind classes and `<style>` blocks.

## Risks / Trade-offs

- **[Risk] Safari scrollbar styling** → WebKit pseudo-elements are well-supported in Safari; `scrollbar-width`/`scrollbar-color` are supported from Safari 18+. Older Safari versions will show a default scrollbar, which is an acceptable fallback.
- **[Risk] `min-h-0` may be unfamiliar** → Well-documented flex behaviour; a brief code comment clarifies intent.
