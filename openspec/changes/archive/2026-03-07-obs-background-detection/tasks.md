## 1. OBS Detection Script

- [x] 1.1 Add inline `<script>` in `<head>` (after Tailwind config, before `</head>`) that checks `navigator.userAgent.indexOf('OBS') !== -1` and adds class `obs` to `document.body`
- [x] 1.2 Verify the detection script runs synchronously before body parse to prevent flash of wrong background

## 2. Body Background CSS

- [x] 2.1 Remove the unconditional `body { background: transparent; }` rule
- [x] 2.2 Add `body { background: #1a1a2e; }` as the default dark background for regular browsers
- [x] 2.3 Add `body.obs { background: transparent; }` to restore transparent background when OBS is detected

## 3. Control Panel Dark Background

- [x] 3.1 Add a CSS rule for `aside` that sets an opaque dark background (e.g., `rgba(15, 15, 30, 0.95)`) overriding the `.glass` semi-transparent background
- [x] 3.2 Verify all control panel text, labels, inputs, and footer remain legible against the dark background

## 4. Verification

- [x] 4.1 Open in a regular browser and confirm dark background is visible with glassmorphism effects
- [x] 4.2 Confirm the aside control panel has an opaque dark background in regular browser
- [x] 4.3 Test with OBS-like User-Agent (or in OBS) and confirm body background is transparent and aside is still dark
