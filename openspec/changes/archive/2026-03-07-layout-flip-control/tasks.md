## 1. Layout Container Setup

- [x] 1.1 Add an `id` attribute (e.g., `id="layoutContainer"`) to the parent flex container `<div class="flex h-screen w-screen overflow-hidden gap-1">` in `index.html`
- [x] 1.2 Add an `id` attribute (e.g., `id="displayPanel"`) to the `<main>` element for JS-based class toggling

## 2. Flip Toggle Button

- [x] 2.1 Add a flex wrapper around the `<h2>` header in the control panel to create a header row with `justify-between` and `items-center`
- [x] 2.2 Add a flip toggle button with ⇄ icon inside the header row, outside the `<form>`, styled with glass-input classes and appropriate sizing

## 3. Flip Logic (JavaScript)

- [x] 3.1 Add a `click` event listener on the flip button that toggles `flex-row-reverse` on the `#layoutContainer` element
- [x] 3.2 In the same event handler, toggle the `<main>` element's alignment between `justify-center` and `justify-start`

## 4. Verification

- [x] 4.1 Verify default layout: control panel on the left, display widget centered in the display panel
- [x] 4.2 Verify flipped layout: control panel on the right, display widget aligned to the left of the display panel
- [x] 4.3 Verify toggling back restores default layout and alignment
