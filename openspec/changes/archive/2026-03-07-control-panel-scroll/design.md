## Context

The control panel (`<aside>`) uses a flex column layout with `justify-between` to pin the footer at the bottom. Currently the `<form>` and `<footer>` share the full height. As more controls are added (font family, theme color, status size, etc.), the form content can exceed the viewport height, making lower controls inaccessible. There is no scroll mechanism today.

The project is a single-file `index.html` using Tailwind CSS via CDN with a glassmorphism visual theme.

## Goals / Non-Goals

**Goals:**
- Enable vertical scrolling of the aside panel when its content exceeds available space
- Allow the footer to scroll naturally with the rest of the aside content
- Style the scrollbar to match the existing translucent glassmorphism aesthetic
- Support modern browsers (Chrome, Firefox, Safari, Edge)

**Non-Goals:**
- Horizontal scrolling support
- Auto-collapsing or accordion-style control sections
- Virtual scrolling or lazy-loading of controls

## Decisions

### 1. Aside-level scroll containment
**Decision**: Make the `<aside>` panel the scrollable container with `overflow-y: auto`. The footer scrolls naturally with the rest of the aside content.

**Rationale**: By placing `overflow-y-auto` on the aside itself, the entire panel (form and footer) scrolls as a single unit. This is simpler than constraining the form with `flex-1 min-h-0` and avoids the complexity of keeping the footer pinned outside the scroll area.

**Alternative considered**: Making the form the scroll container with `flex-1 min-h-0 overflow-y-auto` to keep the footer fixed outside the scroll area. Rejected because it adds layout complexity; scrolling the entire aside is simpler and the footer does not need to remain fixed.

### 2. Custom scrollbar styling with CSS
**Decision**: Use `scrollbar-width: thin` and `scrollbar-color` for Firefox, plus `::-webkit-scrollbar` pseudo-elements for Chrome/Safari/Edge.

**Rationale**: Native scrollbar styling is sufficient and avoids JavaScript libraries. The thin scrollbar with translucent colors (`rgba(255,255,255,0.2)` thumb, `transparent` track) blends with the glassmorphism theme.

### 3. Tailwind utility classes + inline `<style>` block
**Decision**: Use the Tailwind utility `overflow-y-auto` on the aside and a `<style>` block for scrollbar pseudo-elements (not available as Tailwind utilities).

**Rationale**: Keeps the approach consistent with the existing codebase which already mixes Tailwind classes and `<style>` blocks.

## Risks / Trade-offs

- **[Risk] Safari scrollbar styling** → WebKit pseudo-elements are well-supported in Safari; `scrollbar-width`/`scrollbar-color` are supported from Safari 18+. Older Safari versions will show a default scrollbar, which is an acceptable fallback.
- **[Risk] Footer not always visible** → The footer scrolls out of view when content is long, but this is acceptable since the footer contains non-critical information and users can scroll to it.
