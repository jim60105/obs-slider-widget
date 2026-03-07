## 1. Default Font Setup

- [ ] 1.1 Add `<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Yusei+Magic&display=swap">` to `<head>` in index.html
- [ ] 1.2 Update Tailwind config `fontFamily.sans` to include `"'Yusei Magic'"` as the first entry, keeping existing system fonts as fallback

## 2. Font Control UI

- [ ] 2.1 Add a text input with `id="fontFamily"`, label "字型名稱", and default value "Yusei Magic" to `#controlForm`, styled with the same glassmorphism classes as the existing title input
- [ ] 2.2 Add a helper description note below the input with a link to `https://fonts.google.com` (opens in new tab) to guide users on available font names

## 3. Dynamic Font Loading Logic

- [ ] 3.1 Implement a `loadGoogleFont(fontName)` function that creates a `<link>` element with `href="https://fonts.googleapis.com/css2?family=<encoded-name>&display=swap"` and appends it to `<head>`
- [ ] 3.2 Implement a `applyFont(fontName)` function that sets `document.documentElement.style.fontFamily` to the font name followed by the fallback system font stack
- [ ] 3.3 Implement a debounce utility (~500ms) to wrap font loading triggered by input events

## 4. Realtime Sync Integration

- [ ] 4.1 Add a `case "fontFamily"` to the existing `switch(target.id)` in the form's `input` event handler that calls the debounced font load and apply logic
- [ ] 4.2 In the `DOMContentLoaded` handler, apply the default font ("Yusei Magic") from the font input's initial value using the `applyFont` function
