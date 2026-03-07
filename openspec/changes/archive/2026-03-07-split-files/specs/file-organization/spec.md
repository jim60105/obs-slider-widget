# File Organization

## Purpose

Defines the project's file structure convention, specifying which code belongs in which file and the rules for inline vs. external resources.

## Requirements

### Requirement: CSS in external stylesheet
All custom CSS styles (glassmorphism effects, progress bar, controls, scrollbar, animations) SHALL be placed in a dedicated `style.css` file in the project root. The `index.html` SHALL reference this file via `<link rel="stylesheet" href="style.css">` in the `<head>` section.

#### Scenario: Custom styles loaded from external file
- **WHEN** the page loads in a browser
- **THEN** all custom CSS styles SHALL be served from `style.css` and applied to the page identically to when they were inline

### Requirement: JavaScript in external script file
All application JavaScript logic (preset system, font loading, `updateProgressDisplay`, `DOMContentLoaded` event handlers, control panel logic) SHALL be placed in a dedicated `app.js` file in the project root. The `index.html` SHALL reference this file via `<script src="app.js"></script>` at the end of the `<body>` element.

#### Scenario: Application logic loaded from external file
- **WHEN** the page loads in a browser
- **THEN** all application JavaScript SHALL execute from `app.js` with identical behavior to when it was inline

#### Scenario: Script executes after DOM is parsed
- **WHEN** the browser loads `app.js`
- **THEN** the script SHALL execute after the full DOM has been parsed, preserving the same execution timing as the original inline script at the end of `<body>`

### Requirement: Inline scripts for pre-DOM execution
Scripts that MUST execute before the DOM is parsed SHALL remain inline in the `<head>` of `index.html`. This includes the Tailwind CSS configuration script and the OBS detection script.

#### Scenario: Tailwind config remains inline
- **WHEN** inspecting the `index.html` source
- **THEN** the Tailwind CSS configuration (`tailwind.config = { ... }`) SHALL be an inline `<script>` in the `<head>`, placed after the Tailwind CDN `<script>` tag

#### Scenario: OBS detection remains inline
- **WHEN** inspecting the `index.html` source
- **THEN** the OBS User-Agent detection script SHALL be an inline `<script>` in the `<head>`, executing before the `<body>` is parsed

### Requirement: HTML structure in index.html
The `index.html` file SHALL contain only the HTML document structure, `<head>` metadata, resource references (`<link>`, `<script src>`), inline pre-DOM scripts, and the `<body>` markup. It SHALL NOT contain any `<style>` blocks or application logic `<script>` blocks.

#### Scenario: No inline style blocks
- **WHEN** inspecting the `index.html` source
- **THEN** there SHALL be zero `<style>` elements in the document

#### Scenario: No inline application script blocks
- **WHEN** inspecting the `index.html` source
- **THEN** there SHALL be no `<script>` blocks containing application logic (only pre-DOM configuration/detection scripts and `<script src>` references)
