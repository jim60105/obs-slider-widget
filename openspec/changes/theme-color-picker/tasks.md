## 1. CSS Variable Setup

- [ ] 1.1 Add `--theme-color: #ffffff` to the `:root` block in the `<style>` section
- [ ] 1.2 Update `.glass-fill` background to `color-mix(in srgb, var(--theme-color) 90%, transparent)`
- [ ] 1.3 Update `.progress-title` color to `color-mix(in srgb, var(--theme-color) 80%, transparent)`

## 2. Color Picker Control

- [ ] 2.1 Add a `<div>` with label "主題色彩" and `<input type="color" id="themeColor" value="#ffffff">` to `#controlForm`
- [ ] 2.2 Style the color input consistently with existing glass-input controls

## 3. Real-Time Sync

- [ ] 3.1 Add `case 'themeColor'` to the `input` event switch that sets `--theme-color` on `document.documentElement.style`
- [ ] 3.2 Update `#displayPercent` to use inline style `color: color-mix(in srgb, var(--theme-color) 80%, transparent)` instead of the Tailwind `text-white/80` class

## 4. Verification

- [ ] 4.1 Confirm default appearance matches original design (white accents) on page load
- [ ] 4.2 Confirm picking a new color updates fill, title, and status text in real time
