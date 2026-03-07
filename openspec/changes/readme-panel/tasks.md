## 1. Dependencies

- [ ] 1.1 Add marked.js `<script>` tag from jsDelivr CDN in `<head>` section of `index.html`
- [ ] 1.2 Add Tailwind CSS typography plugin configuration via CDN config for `prose` classes

## 2. HTML Structure

- [ ] 2.1 Add `<section id="readmePanel">` as the first child of `#layoutContainer`, with `glass w-[360px] flex flex-col p-6 overflow-y-auto` classes
- [ ] 2.2 Add a container `<div>` inside `#readmePanel` with `prose` typography classes and dark-background color overrides

## 3. CSS Rules

- [ ] 3.1 Add `html.obs #readmePanel { display: none; }` rule in the existing `<style>` block to hide the panel in OBS mode

## 4. JavaScript Logic

- [ ] 4.1 Add fetch logic to load `./README.md` at page load, parse with `marked.parse()`, and inject rendered HTML into the `#readmePanel` container
- [ ] 4.2 Add error handling to display a user-friendly message in `#readmePanel` when the fetch or parse fails

## 5. Verification

- [ ] 5.1 Verify README panel renders correctly in a regular browser with styled markdown content
- [ ] 5.2 Verify the panel is hidden when simulating OBS mode (adding `obs` class to `<html>`)
- [ ] 5.3 Verify the flip button correctly reverses the README panel position along with other panels
