## 1. Replace Color Input Markup

- [x] 1.1 Replace `<input type="color" id="themeColor">` with `<input type="text" id="themeColor">` with default value `#ffffff`, placeholder `#ffffff`, and a color indicator left border (`border-left: 6px solid #ffffff`)
- [x] 1.2 Style the input with a 6px solid left border showing the current color as an inline color indicator
- [x] 1.3 Style the text input with existing `glass-input` classes and appropriate sizing

## 2. Update Event Handler

- [x] 2.1 Modify the `themeColor` input event handler to validate hex format using `/^#([0-9A-Fa-f]{3}|[0-9A-Fa-f]{6})$/` before updating `--theme-color`
- [x] 2.2 Update the input's `border-left` color on valid hex input
- [x] 2.3 Ensure invalid or partial hex values do not change `--theme-color` or the input's left border color

## 3. Verification

- [x] 3.1 Verify the text input loads with value `#ffffff` and the left border shows white
- [x] 3.2 Verify typing a valid hex (e.g. `#ff0000`) updates the theme color and input left border in real-time
- [x] 3.3 Verify invalid input (e.g. `xyz`, `#ff`) does not change the theme or input left border color
