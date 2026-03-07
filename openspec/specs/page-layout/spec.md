# Page Layout

## Purpose

Defines the HTML5 page structure, viewport configuration, transparent background for OBS overlay use, and system font setup with Tailwind CSS.

## Requirements

### Requirement: HTML5 page structure
The page SHALL be a valid HTML5 document (`<!DOCTYPE html>`) with `<html lang="en">`, `<head>`, and `<body>` elements. The `<head>` SHALL include a UTF-8 charset meta tag, a viewport meta tag, and a descriptive `<title>`.

#### Scenario: Valid HTML5 document
- **WHEN** the `index.html` file is loaded in a browser
- **THEN** the document SHALL be a valid HTML5 document with `<!DOCTYPE html>`, `<html lang="en">`, appropriate `<head>` meta tags, and a `<body>` element

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
The page layout SHALL occupy the full viewport height (`100vh`) and width (`100vw`) with `overflow: hidden` to prevent scrollbars.

#### Scenario: Full viewport with no overflow
- **WHEN** the page is displayed at any viewport size
- **THEN** the layout SHALL fill the entire viewport with no scrollbars visible

### Requirement: System font configuration
The page SHALL use a system font stack ('Segoe UI', Tahoma, Geneva, Verdana, sans-serif) configured via Tailwind's font family customization and applied as the default font.

#### Scenario: System fonts applied
- **WHEN** text is rendered on the page
- **THEN** the font family SHALL be 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif (in that priority order)
