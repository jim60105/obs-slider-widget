## 1. Form Controls Markup

- [x] 1.1 Add a `<form>` element inside the `<aside>` panel with a heading "控制台"
- [x] 1.2 Add the title text `<input type="text">` with `value="STATUS"`, a `<label>`, and glassmorphism styling (semi-transparent background, backdrop-filter blur, glass border, rounded corners)
- [x] 1.3 Add the font size `<input type="range" min="12" max="32" value="16">` with a `<label>`
- [x] 1.4 Add the progress value `<input type="range" min="0" max="100" value="60">` with a `<label>`

## 2. Custom Slider CSS

- [x] 2.1 Add CSS rules for range slider track styling (`::-webkit-slider-runnable-track` and `::-moz-range-track`) with glass-effect background, border-radius, and height
- [x] 2.2 Add CSS rules for range slider thumb styling (`::-webkit-slider-thumb` and `::-moz-range-thumb`) with white circular thumb, glass border, and box-shadow
- [x] 2.3 Reset default browser range input appearance (`-webkit-appearance: none`)

## 3. Real-time Sync JavaScript

- [x] 3.1 Add a single `input` event listener on the `<form>` element using event delegation
- [x] 3.2 Implement handler: when the title text input fires, update the display title's `textContent`
- [x] 3.3 Implement handler: when the font size slider fires, update the display title's `style.fontSize` (in px)
- [x] 3.4 Implement handler: when the progress slider fires, call `updateProgressDisplay(value)` to update scaleY, percentage text, and `aria-valuenow`

## 4. Initialization

- [x] 4.1 On `DOMContentLoaded`, read initial values from all form controls and apply them to the display (title text, font size, progress value)

## 5. Footer

- [x] 5.1 Add a `<footer>` element inside the `<aside>` panel with `margin-top: auto`, a top border separator, small centered text (12px)
- [x] 5.2 Add copyright line: "Copyright © 2026 Jim Chen" with a GitHub SVG icon linking to the project repository
- [x] 5.3 Add license line: "Licensed under AGPLv3" with "AGPLv3" linking to `https://www.gnu.org/licenses/agpl-3.0.html`
- [x] 5.4 Add subtle hover color transitions on footer links
