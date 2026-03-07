## MODIFIED Requirements

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
