## 1. OBS Detection Script

- [ ] 1.1 Add inline `<script>` in `<head>` (after Tailwind config, before `</head>`) that checks `navigator.userAgent.indexOf('OBS') !== -1` and adds class `obs` to `document.body`
- [ ] 1.2 Verify the detection script runs synchronously before body parse to prevent flash of wrong background

## 2. Body Background CSS

- [ ] 2.1 Remove the unconditional `body { background: transparent; }` rule
- [ ] 2.2 Add `body { background: #1a1a2e; }` as the default dark background for regular browsers
- [ ] 2.3 Add `body.obs { background: transparent; }` to restore transparent background when OBS is detected

## 3. Control Panel Dark Background

- [ ] 3.1 Add a CSS rule for `aside` that sets an opaque dark background (e.g., `rgba(15, 15, 30, 0.95)`) overriding the `.glass` semi-transparent background
- [ ] 3.2 Verify all control panel text, labels, inputs, and footer remain legible against the dark background

## 4. Verification

- [ ] 4.1 Open in a regular browser and confirm dark background is visible with glassmorphism effects
- [ ] 4.2 Confirm the aside control panel has an opaque dark background in regular browser
- [ ] 4.3 Test with OBS-like User-Agent (or in OBS) and confirm body background is transparent and aside is still dark
