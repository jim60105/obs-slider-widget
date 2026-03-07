## Context

The OBS Slider Widget is a single-file static site (`index.html`) using Tailwind CSS CDN and pure JS. It uses glassmorphism styling (semi-transparent backgrounds with backdrop blur) designed for OBS browser source overlays, where `background: transparent` allows OBS scene compositing. However, when opened in a regular browser the transparent background renders as white, making all white/light text and glass elements invisible.

OBS's built-in Chromium browser includes `OBS` in its User-Agent string, providing a reliable detection mechanism.

## Goals / Non-Goals

**Goals:**
- Detect OBS browser source environment via User-Agent and apply a CSS class toggle
- Preserve transparent background for OBS compositing
- Provide a dark background in regular browsers so glassmorphism and light text are visible
- Keep the aside control panel readable with an opaque dark background in all contexts

**Non-Goals:**
- Supporting query-parameter or manual toggle for background mode (possible future enhancement)
- Changing any glassmorphism variables or visual design beyond background color
- Adding build tools, bundlers, or additional dependencies

## Decisions

### 1. Detection via `navigator.userAgent` string check

**Choice:** Check `navigator.userAgent.indexOf('OBS') !== -1` and add class `obs` to `document.body`.

**Rationale:** OBS's CEF (Chromium Embedded Framework) browser consistently includes "OBS" in the UA string. This is the simplest, zero-dependency approach. No need for `window.obsstudio` API checks since we only need a binary OBS-or-not signal.

**Alternatives considered:**
- `window.obsstudio` global object check — more specific but only available after OBS injects it; UA check is synchronous and immediate.
- Query parameter (`?obs=1`) — requires manual configuration in OBS browser source URL; poor UX.

### 2. CSS class toggle on body (`body.obs`) rather than CSS media query or JS style mutation

**Choice:** Add/remove a CSS class and define all styles in `<style>` block.

**Rationale:** Clean separation of detection (JS) and presentation (CSS). Easy to override in future. No FOUC risk if the detection script runs before DOMContentLoaded paint.

### 3. Detection script placement: inline `<script>` in `<head>` (before body renders)

**Choice:** Place the UA detection snippet as an inline `<script>` in the `<head>`, after Tailwind loads but before `</head>`.

**Rationale:** Running detection before the body is parsed prevents a flash of wrong background color. The snippet is synchronous and tiny (~2 lines), so it adds zero perceptible load time. Using `document.documentElement.classList` (on `<html>`) or deferring to add class to `<body>` on DOMContentLoaded are alternatives, but adding to `<html>` and styling `html.obs body` or using a `DOMContentLoaded` listener risk a brief flash.

### 4. Dark background color: `#1a1a2e`

**Choice:** Use `#1a1a2e` (very dark navy/indigo) as the non-OBS body background.

**Rationale:** Complements the existing blue-tinted glass shadow (`rgba(31, 38, 135, 0.1)`) and white/light text. Dark enough to make glassmorphism pop without clashing with the cool-toned design.

### 5. Aside control panel: opaque dark background override

**Choice:** Give `aside` a solid dark background (e.g., `rgba(15, 15, 30, 0.95)`) that overrides the `.glass` semi-transparent background, regardless of OBS detection.

**Rationale:** The control panel must always be readable. In OBS, users typically crop/hide the aside anyway, but if visible it should still be legible. Using a high-opacity rgba preserves a hint of depth while being essentially opaque.

## Risks / Trade-offs

- **[Risk] UA string changes in future OBS versions** → Mitigation: "OBS" in the UA has been stable across OBS 27-31+. If it changes, the fallback is a dark background (still usable), not a broken page.
- **[Risk] Brief flash of dark background when loaded in OBS** → Mitigation: By running detection in `<head>` before body parse, the class is set before first paint. No flash expected.
- **[Trade-off] Aside opacity override reduces glass effect on control panel** → Accepted: readability is more important than aesthetic consistency for the control panel.
