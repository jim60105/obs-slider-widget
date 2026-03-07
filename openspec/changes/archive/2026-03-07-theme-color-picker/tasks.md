## 1. CSS Variable Setup

- [x] 1.1 Add `--theme-color: #ffffff` to the `:root` block in the `<style>` section
- [x] 1.2 Update `.glass-fill` background to `color-mix(in srgb, var(--theme-color) 90%, transparent)`
- [x] 1.3 Update `.progress-title` color to `color-mix(in srgb, var(--theme-color) 80%, transparent)`

## 2. Color Picker Control

- [x] 2.1 Add a `<div>` with label "主題色彩" and `<input type="color" id="themeColor" value="#ffffff">` to `#controlForm`
- [x] 2.2 Style the color input consistently with existing glass-input controls

## 3. Real-Time Sync

- [x] 3.1 Add `case 'themeColor'` to the `input` event switch that sets `--theme-color` on `document.documentElement.style`
- [x] 3.2 Update `#displayPercent` to use inline style `color: color-mix(in srgb, var(--theme-color) 80%, transparent)` instead of the Tailwind `text-white/80` class

## 4. Verification

- [x] 4.1 Confirm default appearance matches original design (white accents) on page load
- [x] 4.2 Confirm picking a new color updates fill, title, and status text in real time
