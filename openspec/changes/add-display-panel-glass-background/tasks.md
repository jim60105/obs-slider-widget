## 1. CSS Styling

- [ ] 1.1 Add `.glass-panel-bg` class to `style.css` with frosted glassmorphism properties: diagonal gradient background, `backdrop-filter: var(--glass-blur)`, `1px solid var(--glass-border)` border, `border-radius: 1rem`, and padding for inner spacing
- [ ] 1.2 Add a default (disabled) state rule for `#displayPanelBg` with transparent background, no border, no backdrop-filter to ensure no visual impact when toggled off

## 2. HTML Structure

- [ ] 2.1 Add a `<div id="displayPanelBg">` wrapper inside `<main id="displayPanel">` around the existing widget flex container (`<div class="flex items-stretch gap-4 h-full">`)
- [ ] 2.2 Add a checkbox toggle control with `id="panelBg"` and an associated label in the control panel form, placed in a logical position among the existing control groups

## 3. JavaScript Logic

- [ ] 3.1 Add a `panelBg` case to the `controlForm` input event delegation switch that toggles the `.glass-panel-bg` class on `#displayPanelBg` based on the checkbox state
- [ ] 3.2 Extend the preset save function to include `panelBg` (boolean from checkbox checked state) in the serialized preset object
- [ ] 3.3 Extend the preset load function to restore the `panelBg` checkbox state from the preset object and apply/remove the `.glass-panel-bg` class accordingly
- [ ] 3.4 Ensure the auto-init default preset creation includes `panelBg: false` in the default settings object

## 4. Validation

- [ ] 4.1 Verify the panel background toggle works in normal browser mode (glass panel appears/disappears)
- [ ] 4.2 Verify the panel background is independent from `html.obs main` transparency (test by manually adding `obs` class to `<html>`)
- [ ] 4.3 Verify preset save/load round-trips the `panelBg` state correctly
- [ ] 4.4 Verify backward compatibility: loading an old preset without `panelBg` key does not break and toggle retains default (off)
