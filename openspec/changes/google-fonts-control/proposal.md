## Why

The page currently uses a hardcoded system font stack, offering no way for users to customize typography. Adding a Google Fonts control lets users personalize the display widget's appearance with any of the thousands of fonts available on Google Fonts, making the OBS overlay more visually distinctive.

## What Changes

- Add a text input control ("字型名稱") to the control form for typing a Google Font name
- Load "Yusei Magic" as the default font from Google Fonts on page load
- Dynamically load and apply any Google Font the user types, with debounced input handling
- Add a helper description with a link to fonts.google.com so users can browse available fonts
- Apply the selected font globally to both the control panel (`aside`) and display area (`main`)

## Capabilities

### New Capabilities
- `google-fonts-control`: Control for selecting and dynamically loading a Google Font by name, including default font loading, debounced input, and global font application

### Modified Capabilities
- `control-form`: Add a new text input field for Google Font name to the existing control form
- `realtime-sync`: Add real-time handling for the font name input to dynamically load and apply fonts
- `page-layout`: Change the default font family from system font stack to "Yusei Magic" loaded from Google Fonts

## Impact

- **index.html**: New `<link>` tag in `<head>` for default Google Font, new form control in `#controlForm`, new JS logic for dynamic font loading
- **Dependencies**: Adds external dependency on Google Fonts API (fonts.googleapis.com)
- **Tailwind config**: Font family updated to include "Yusei Magic" as primary font
- **Performance**: Dynamic font loading adds network requests; mitigated by debounce on input
