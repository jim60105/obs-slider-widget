## Context

The OBS Slider Widget uses a native HTML `<select>` element for preset selection. OBS browser sources run on an embedded Chromium engine (CEF — Chromium Embedded Framework) that does not properly render or handle native `<select>` dropdown popups. When users click the `<select>` in OBS, no dropdown list appears, making preset management unusable during live streams.

A reference project (UnfairSpinWheel) was examined and confirmed that custom dropdown components built from standard HTML elements (`<div>`, `<button>`, `<ul>/<li>`) work correctly in OBS browser sources. The key difference is that native `<select>` relies on the browser's OS-level popup rendering, which CEF does not support, whereas custom dropdowns render entirely within the page's DOM.

The project is a static website with no build tools, using vanilla JS and Tailwind CSS from CDN.

## Goals / Non-Goals

**Goals:**
- Replace the native `<select id="presetSelect">` with a custom dropdown that works in OBS browser sources
- Maintain full keyboard accessibility (Arrow Up/Down, Enter, Escape)
- Match the existing glassmorphism visual design (`.glass-input` styling)
- Preserve all existing preset management behavior (load, save, delete)
- Keep the implementation framework-free (vanilla HTML/CSS/JS)

**Non-Goals:**
- Adding a generic reusable dropdown library or component system — this is a targeted replacement for one specific dropdown
- Supporting multi-select or searchable/filterable dropdown features
- Changing the preset data model or localStorage schema
- Modifying OBS detection logic or transparent display behavior

## Decisions

### Decision 1: Custom dropdown built from `<div>`, `<button>`, `<ul>/<li>` elements

**Choice:** Build a custom dropdown using semantic HTML elements with CSS for styling and JS for behavior.

**Rationale:** Native `<select>` elements delegate their popup rendering to the browser's compositor layer, which CEF (OBS's embedded Chromium) does not support. A fully DOM-rendered dropdown avoids this limitation entirely.

**Alternatives considered:**
- **Use a third-party dropdown library (e.g., Choices.js, Tom Select):** Rejected because the project has zero dependencies and adding a library for one dropdown is excessive overhead.
- **Use a `<datalist>` element:** Rejected because `<datalist>` has similar rendering issues in CEF and provides less styling control.

### Decision 2: Overlay-based option list with absolute positioning

**Choice:** The option list will be rendered as a `<ul>` with `position: absolute` below the dropdown trigger button, rendered inside the existing scrollable `<aside>`.

**Rationale:** Absolute positioning within the aside's scroll container ensures the dropdown options scroll naturally with the control panel and stay aligned with the trigger button. This avoids z-index complexity with fixed/portal approaches while working within the existing layout.

### Decision 3: Click-outside close via document-level listener

**Choice:** A single `document.addEventListener('click', ...)` will close any open dropdown when clicking outside.

**Rationale:** This is the standard pattern for custom dropdowns. Using event delegation on the document avoids attaching/detaching listeners on every open/close cycle.

### Decision 4: ARIA attributes for accessibility

**Choice:** Use `role="listbox"` on the options container, `role="option"` on each item, and `aria-expanded`/`aria-activedescendant` on the trigger button.

**Rationale:** Preserves screen reader accessibility that native `<select>` provides by default. Follows WAI-ARIA Listbox pattern.

### Decision 5: Expose a minimal API via DOM attributes and custom events

**Choice:** The custom dropdown will expose its selected value via a `data-value` attribute on the root element and dispatch a `change` CustomEvent when selection changes. Internal population will use a `setOptions(names)` function.

**Rationale:** This keeps the integration surface small and familiar — existing code that listens for `change` events and reads `.value` requires minimal refactoring.

## Risks / Trade-offs

- **[Risk] Keyboard navigation edge cases in OBS** → Mitigation: OBS browser sources typically don't receive keyboard input (they're overlays), so keyboard support is primarily for regular browser usage. No OBS-specific risk.
- **[Risk] Scroll containment — dropdown may extend beyond aside boundary** → Mitigation: Use `max-height` with `overflow-y: auto` on the options list so it scrolls internally if many presets exist.
- **[Risk] Increased code complexity vs native `<select>`** → Mitigation: Keep the implementation self-contained in a clearly delineated code section within `app.js` and a dedicated CSS block in `style.css`.
- **[Trade-off] Loss of OS-native dropdown feel on desktop browsers** → Accepted because the glassmorphism custom styling already departed from native appearance, and OBS compatibility is the priority.
