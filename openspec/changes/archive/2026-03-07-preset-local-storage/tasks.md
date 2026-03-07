## 1. Namespace Resolution

- [x] 1.1 Add JS function `getStorageKey()` that reads `instance` from `URLSearchParams` and returns `obs-slider-<instance>-presets` (or `obs-slider-default-presets` if absent)

## 2. Preset Persistence Core

- [x] 2.1 Add JS function `loadAllPresets()` that reads and parses the JSON from localStorage using the namespaced key, returning an object (or `{}` if empty/missing)
- [x] 2.2 Add JS function `saveAllPresets(presets)` that serializes and writes the presets object to localStorage under the namespaced key
- [x] 2.3 Add JS function `savePreset(name)` that reads current form control values (titleText, titleSize, totalVal, progressVal, themeColor, statusSize, fontFamily), validates the name is non-empty after trimming, and stores the preset
- [x] 2.4 Add JS function `loadPreset(name)` that applies a preset's values to all form controls (with fallback for missing keys) and triggers real-time sync including font loading
- [x] 2.5 Add JS function `deletePreset(name)` that removes a preset from localStorage and updates the dropdown

## 3. Preset UI

- [x] 3.1 Add preset UI section HTML at the top of `#controlForm`: a select dropdown (`#presetSelect`), a text input for preset name (`#presetName`), a Save button, and a Delete button
- [x] 3.2 Style preset UI section with glassmorphism matching the control panel theme (use existing Tailwind utility classes and glass styling)
- [x] 3.3 Add JS function `refreshPresetDropdown()` that populates the `<select>` with option elements for each saved preset name

## 4. Event Handlers

- [x] 4.1 Add `change` event listener on `#presetSelect` to load the selected preset
- [x] 4.2 Add `click` event listener on the Save button to call `savePreset()` with the name input value, then refresh the dropdown and select the saved preset
- [x] 4.3 Add `click` event listener on the Delete button to call `deletePreset()` for the currently selected preset

## 5. Initialization Integration

- [x] 5.1 Modify `DOMContentLoaded` handler to resolve namespace, load presets, auto-load the first preset (alphabetically) if any exist, then proceed with existing sync and font initialization

## 7. Enhancements

- [x] 7.1 Modify Save button behavior: when presetName is empty, overwrite the currently selected preset from presetSelect

## 6. Verification

- [x] 6.1 Verify save/load/delete cycle works correctly in a single instance
- [x] 6.2 Verify two instances with different `?instance=` parameters use separate localStorage keys
- [x] 6.3 Verify auto-load on page init loads the first preset alphabetically
- [x] 6.4 Verify presets with missing keys gracefully fall back to current form defaults
