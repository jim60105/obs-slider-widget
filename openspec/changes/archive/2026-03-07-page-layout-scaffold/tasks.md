## 1. HTML Document Setup

- [x] 1.1 Create `index.html` with HTML5 doctype, `<html lang="en">`, `<head>` (charset, viewport meta, title), and `<body>`
- [x] 1.2 Add Tailwind CSS CDN script (`<script src="https://cdn.tailwindcss.com"></script>`) in `<head>`
- [x] 1.3 Configure Tailwind font family to use system font stack ('Segoe UI', Tahoma, Geneva, Verdana, sans-serif) via inline `tailwind.config`

## 2. Global Styles

- [x] 2.1 Set `background: transparent` on `<body>` for OBS browser source compositing
- [x] 2.2 Set full viewport sizing (`100vh`, `100vw`) and `overflow: hidden` on the layout container
- [x] 2.3 Define CSS custom properties on `:root`: `--glass-bg`, `--glass-blur`, `--glass-border`, `--glass-shadow`
- [x] 2.4 Create `.glass` utility class that applies all glassmorphism properties using the custom properties

## 3. Two-Panel Layout

- [x] 3.1 Add a horizontal flex container inside `<body>` spanning full viewport
- [x] 3.2 Add `<aside>` element (controls area) with ~300px fixed width and `.glass` class
- [x] 3.3 Add `<main>` element (display area) with flex-1 and `.glass` class
- [x] 3.4 Add a small gap between panels for visual separation

## 4. Verification

- [x] 4.1 Open `index.html` in a browser and verify the two-panel glassmorphism layout renders correctly
- [x] 4.2 Confirm body background is transparent (no white/colored background behind panels)
- [x] 4.3 Confirm no scrollbars appear at any standard OBS canvas size
