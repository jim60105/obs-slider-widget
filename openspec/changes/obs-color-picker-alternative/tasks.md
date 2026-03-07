## 1. Replace Color Input Markup

- [ ] 1.1 Replace `<input type="color" id="themeColor">` with a flex container holding a color swatch `<div id="colorSwatch">` and `<input type="text" id="themeColor">` with default value `#ffffff` and placeholder `#ffffff`
- [ ] 1.2 Style the swatch as a small square with rounded corners, border, and background set to `#ffffff`
- [ ] 1.3 Style the text input with existing `glass-input` classes and appropriate sizing

## 2. Update Event Handler

- [ ] 2.1 Modify the `themeColor` input event handler to validate hex format using `/^#([0-9A-Fa-f]{3}|[0-9A-Fa-f]{6})$/` before updating `--theme-color`
- [ ] 2.2 Update the `colorSwatch` background color on valid hex input
- [ ] 2.3 Ensure invalid or partial hex values do not change `--theme-color` or the swatch

## 3. Verification

- [ ] 3.1 Verify the text input loads with value `#ffffff` and the swatch displays white
- [ ] 3.2 Verify typing a valid hex (e.g. `#ff0000`) updates the theme color and swatch in real-time
- [ ] 3.3 Verify invalid input (e.g. `xyz`, `#ff`) does not change the theme or swatch
