## 1. Custom Dropdown CSS

- [x] 1.1 Add custom dropdown styles to `style.css`: container positioning, trigger button (`.glass-input` based), options list (absolute positioned, glassmorphism background `#1a1a2e`, max-height with overflow-y auto), option hover/focus states, chevron indicator with rotation transition, and open-state class
- [x] 1.2 Remove the existing `select.glass-input option` CSS rule (no longer needed once native `<select>` is removed)

## 2. Custom Dropdown HTML

- [x] 2.1 Replace the `<select id="presetSelect">` in `index.html` with the custom dropdown HTML structure: a container `<div id="presetSelect">` wrapping a `<button>` trigger (with chevron indicator) and a hidden `<ul>` options list. Add ARIA attributes (`aria-expanded`, `aria-haspopup="listbox"`, `role="listbox"`, `role="option"`)

## 3. Custom Dropdown JavaScript

- [x] 3.1 Add custom dropdown behavior in `app.js`: toggle open/close on trigger click, close on outside click (document-level listener), option selection (update trigger text, set `data-value`, dispatch `change` event, close list)
- [x] 3.2 Add keyboard navigation: Arrow Down/Up to move focus between options, Enter to select focused option, Escape to close dropdown, and update `aria-activedescendant`

## 4. Preset Integration

- [x] 4.1 Refactor `refreshPresetDropdown()` in `app.js` to populate the custom dropdown `<ul>` with `<li>` items instead of `<option>` elements, assigning `role="option"` and unique `id` attributes to each item
- [x] 4.2 Update the preset select change listener to use the custom dropdown's `change` event and read the selected value from `data-value` instead of `select.value`
- [x] 4.3 Update save and delete preset handlers to read/write the custom dropdown's selected value via `data-value` attribute and trigger text instead of `select.value`

## 5. Verification

- [x] 5.1 Manually verify in a regular browser: dropdown opens/closes, options populate from presets, selection loads preset, save/delete update the dropdown, keyboard navigation works
- [x] 5.2 Verify glassmorphism styling matches the existing control panel theme and options are readable (white text on dark background)
