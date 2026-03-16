## Why

OBS 28.0 shipped with Chromium 103, and many users still run OBS 28.x or Streamlabs OBS (which also uses older Chromium). The widget currently uses the CSS `color-mix()` function (Chrome 111+) in three places, making theme-colored elements invisible or broken for those users. We need to ensure full compatibility with Chrome 103 as the minimum browser target so all OBS browser source users can use the widget reliably.

Reference: https://github.com/obsproject/obs-studio/discussions/3853

## What Changes

- Replace all `color-mix(in srgb, var(--theme-color) XX%, transparent)` usage with Chrome 103-compatible alternatives (e.g., `rgba()` fallback computed via JavaScript, or `opacity`-based CSS approach)
- Add a comment/documentation noting Chrome 103 as the minimum supported browser target
- Audit third-party CDN dependencies (`marked`, Tailwind CSS CDN) for Chrome 103 compatibility, and pin versions if needed

Affected `color-mix()` locations:
- `style.css` `.progress-title` color (80% theme color)
- `style.css` `.glass-fill` background (90% theme color)
- `index.html` inline style on `#displayPercent` (80% theme color)

## Capabilities

### New Capabilities
- `browser-compatibility`: Defines the minimum supported browser baseline (Chrome 103 / OBS 28.0) and documents any constraints or polyfill strategies that apply project-wide

### Modified Capabilities
- `theme-color-picker`: Replace `color-mix()` with a Chrome 103-compatible approach for applying themed opacity to `.progress-title`, `.glass-fill`, and `#displayPercent`

## Impact

- **CSS (`style.css`)**: `.progress-title` color and `.glass-fill` background declarations must be rewritten
- **HTML (`index.html`)**: Inline style on `#displayPercent` must be rewritten or moved to JS-driven styling
- **JS (`app.js`)**: May need a helper to convert hex color + opacity percentage into an `rgba()` string, applied dynamically when theme color changes
- **Third-party deps**: `marked` and Tailwind CSS CDN URLs may need version pinning for long-term Chrome 103 support
