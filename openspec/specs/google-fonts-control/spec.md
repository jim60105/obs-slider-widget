# Google Fonts Control

## Purpose

Defines the dynamic Google Fonts loading system that allows users to select and apply any Google Font to the entire page, including both the control panel and display area.

## Requirements

### Requirement: Default Google Font loading
The page SHALL load "UoqMunThenKhung" from Google Fonts via a `<link>` element in `<head>` using the URL `https://fonts.googleapis.com/css2?family=UoqMunThenKhung&display=swap`.

#### Scenario: Default font link in head
- **WHEN** the page HTML is inspected
- **THEN** a `<link rel="stylesheet">` element with the Google Fonts URL for "UoqMunThenKhung" with `display=swap` SHALL be present in `<head>`

### Requirement: Dynamic Google Font loading
When the user types a font name into the font family input, the system SHALL dynamically load the font from Google Fonts by injecting a `<link rel="stylesheet">` element pointing to `https://fonts.googleapis.com/css2?family=<encoded-name>&display=swap`.

#### Scenario: Typing a font name loads it from Google Fonts
- **WHEN** the user types "Noto Sans TC" into the font family input and pauses
- **THEN** a new `<link rel="stylesheet">` element for the Google Fonts URL with `family=Noto+Sans+TC&display=swap` SHALL be added to the document

#### Scenario: Empty font name does not trigger loading
- **WHEN** the user clears the font family input
- **THEN** no new `<link>` element SHALL be injected

### Requirement: Global font application
When a font is loaded, the system SHALL apply the font family to `document.documentElement` so it cascades to all elements including both the control panel (`aside`) and the display area (`main`). The applied font family SHALL include the system font stack as fallback.

#### Scenario: Font applied to entire page
- **WHEN** "UoqMunThenKhung" is loaded and applied
- **THEN** `document.documentElement.style.fontFamily` SHALL include "UoqMunThenKhung" followed by the fallback system font stack

#### Scenario: Font applies to control panel
- **WHEN** a Google Font is applied
- **THEN** text within the `<aside>` control panel renders in the selected font

#### Scenario: Font applies to display area
- **WHEN** a Google Font is applied
- **THEN** text within the `<main>` display area renders in the selected font

### Requirement: Debounced font input
The font name input SHALL use debounce with approximately 500ms delay before triggering font loading, to avoid excessive network requests while typing.

#### Scenario: Rapid typing does not trigger multiple loads
- **WHEN** the user types "Roboto" character by character without pausing
- **THEN** the system SHALL only load the font once after the user stops typing for ~500ms

#### Scenario: Pausing after typing triggers font load
- **WHEN** the user types "Roboto" and pauses for 500ms
- **THEN** the system SHALL load and apply "Roboto" from Google Fonts
