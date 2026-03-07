## 1. Extract CSS

- [ ] 1.1 Create `style.css` in the project root containing all content from the `<style>` block in `index.html` (lines 59–222: glassmorphism, progress bar, controls, scrollbar, animations)
- [ ] 1.2 Remove the `<style>` block from `index.html` and add `<link rel="stylesheet" href="style.css">` in `<head>` after the Google Fonts `<link>`

## 2. Extract JavaScript

- [ ] 2.1 Create `app.js` in the project root containing all content from the main application `<script>` block in `index.html` (lines 333–595: preset functions, font functions, updateProgressDisplay, DOMContentLoaded event handlers)
- [ ] 2.2 Remove the main application `<script>` block from `index.html` and add `<script src="app.js"></script>` as the last element before `</body>`

## 3. Verify inline scripts remain

- [ ] 3.1 Confirm the Tailwind CDN `<script src="https://cdn.tailwindcss.com"></script>` and `tailwind.config` inline script remain in `<head>`
- [ ] 3.2 Confirm the OBS detection inline script remains in `<head>`
- [ ] 3.3 Confirm `index.html` contains no `<style>` blocks and no application logic `<script>` blocks

## 4. Validate

- [ ] 4.1 Open the page in a local server and verify the widget renders identically (progress bar, controls, glassmorphism effects)
- [ ] 4.2 Verify preset save/load functionality works from the control panel
- [ ] 4.3 Verify all control inputs update the display in real time
