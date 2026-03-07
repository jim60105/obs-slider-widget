# Page Layout

## Purpose

Defines the HTML5 page structure, viewport configuration, transparent background for OBS overlay use, and system font setup with Tailwind CSS.

## Requirements

### Requirement: HTML5 page structure
The page SHALL be a valid HTML5 document (`<!DOCTYPE html>`) with `<html lang="zh-Hant">`, `<head>`, and `<body>` elements. The `<head>` SHALL include a UTF-8 charset meta tag, a viewport meta tag, a descriptive `<title>`, a `<link rel="stylesheet" href="style.css">` for custom styles, and inline scripts for Tailwind configuration and OBS detection. The `<body>` SHALL end with `<script src="app.js"></script>` to load application logic.

#### Scenario: Valid HTML5 document
- **WHEN** the `index.html` file is loaded in a browser
- **THEN** the document SHALL be a valid HTML5 document with `<!DOCTYPE html>`, `<html lang="zh-Hant">`, appropriate `<head>` meta tags, a `<link>` to `style.css`, and a `<body>` element ending with a `<script src="app.js">` tag

#### Scenario: External CSS referenced in head
- **WHEN** the `index.html` file is inspected
- **THEN** the `<head>` SHALL contain `<link rel="stylesheet" href="style.css">` after the Google Fonts stylesheet link

#### Scenario: External JS referenced at end of body
- **WHEN** the `index.html` file is inspected
- **THEN** the `<body>` SHALL end with `<script src="app.js"></script>` as the last element before `</body>`

### Requirement: Tailwind CSS from CDN
The page SHALL load Tailwind CSS via a `<script src="https://cdn.tailwindcss.com"></script>` tag in the `<head>`.

#### Scenario: Tailwind CSS loaded
- **WHEN** the page is rendered in a browser with internet access
- **THEN** Tailwind CSS utility classes SHALL be available and functional

### Requirement: Transparent background
The `<body>` SHALL have `background: transparent` so the page can be used as an OBS browser source overlay without a visible background.

#### Scenario: OBS browser source compositing
- **WHEN** the page is loaded as an OBS browser source
- **THEN** the body background SHALL be transparent, allowing scene elements beneath to show through

### Requirement: Full viewport sizing with no scrollbars
The page layout SHALL occupy the full viewport height (`100vh`) and width (`100vw`) with `overflow: hidden` to prevent scrollbars. The `#layoutContainer` flex row SHALL contain three children in non-OBS mode: a README `<section>` panel, the control `<aside>` panel, and the `<main>` display panel. The `<main>` display panel SHALL use flex alignment that positions content at the right edge horizontally and stretches content vertically to fill available space, instead of centering content in both axes.

#### Scenario: Full viewport with no overflow
- **WHEN** the page is displayed at any viewport size
- **THEN** the layout SHALL fill the entire viewport with no scrollbars visible

#### Scenario: Three-panel layout in regular browser
- **WHEN** the page loads in a regular browser (non-OBS)
- **THEN** `#layoutContainer` SHALL contain three child panels: `#readmePanel` (`<section>`), the control `<aside>`, and the `<main>` display panel

#### Scenario: Two-panel layout in OBS mode
- **WHEN** the page loads inside an OBS browser source
- **THEN** `#readmePanel` SHALL be hidden via CSS, leaving the control `<aside>` and `<main>` display panel visible

#### Scenario: Display panel aligns content to the right
- **WHEN** the page loads
- **THEN** the `<main>` display panel SHALL align its content to the right edge horizontally and stretch children vertically

### Requirement: System font configuration
The page SHALL use "UoqMunThenKhung" from Google Fonts as the primary font, with a system font stack ('Segoe UI', Tahoma, Geneva, Verdana, sans-serif) as fallback. The Tailwind font family configuration SHALL include "UoqMunThenKhung" as the first entry in the `sans` font family. The default Google Font SHALL be loaded via a `<link>` stylesheet in `<head>`.

#### Scenario: Default Google Font applied
- **WHEN** text is rendered on the page
- **THEN** the font family SHALL start with "UoqMunThenKhung" followed by the fallback system fonts ('Segoe UI', Tahoma, Geneva, Verdana, sans-serif)

#### Scenario: Fallback to system fonts
- **WHEN** "UoqMunThenKhung" fails to load (e.g., no internet)
- **THEN** the font family SHALL fall back to 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif
