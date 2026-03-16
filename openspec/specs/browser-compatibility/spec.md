## Purpose

Defines browser compatibility targets and shared utility functions that ensure the widget works correctly on OBS Studio's embedded Chromium browser (Chrome 103+).

## Requirements

### Requirement: Minimum browser target
The project SHALL target Chrome 103 (Chromium 103) as the minimum supported browser, corresponding to OBS Studio 28.0's embedded browser source.

#### Scenario: No Chrome 111+ only CSS features
- **WHEN** inspecting all CSS declarations in the project
- **THEN** no CSS features requiring Chrome 104 or later SHALL be used without a Chrome 103-compatible fallback

#### Scenario: No post-ES2022 JavaScript APIs
- **WHEN** inspecting all first-party JavaScript in the project
- **THEN** no JavaScript APIs introduced after Chrome 103 SHALL be used without a compatible fallback

### Requirement: Hex to RGBA utility
The project SHALL provide a `hexToRgba(hex, alpha)` JavaScript utility function that converts a hex color string and a numeric alpha value (0–1) into a valid CSS `rgba()` string.

#### Scenario: 6-digit hex conversion
- **WHEN** `hexToRgba('#ff0000', 0.8)` is called
- **THEN** the return value SHALL be `rgba(255, 0, 0, 0.8)`

#### Scenario: 3-digit hex conversion
- **WHEN** `hexToRgba('#f00', 0.9)` is called
- **THEN** the return value SHALL be `rgba(255, 0, 0, 0.9)`

#### Scenario: Invalid hex returns null
- **WHEN** `hexToRgba('xyz', 0.5)` is called
- **THEN** the return value SHALL be `null`

### Requirement: Centralized theme color application
The project SHALL provide an `applyThemeColor(hex)` function that sets `--theme-color`, `--theme-color-90`, and `--theme-color-80` CSS custom properties on `:root`. The derived properties SHALL be computed using `hexToRgba()` at alpha 0.9 and 0.8 respectively.

#### Scenario: Valid hex sets all three custom properties
- **WHEN** `applyThemeColor('#ff0000')` is called
- **THEN** `--theme-color` SHALL be `#ff0000` on `document.documentElement.style`
- **AND** `--theme-color-90` SHALL be `rgba(255, 0, 0, 0.9)`
- **AND** `--theme-color-80` SHALL be `rgba(255, 0, 0, 0.8)`

#### Scenario: Invalid hex does not update properties
- **WHEN** `applyThemeColor('invalid')` is called
- **THEN** no CSS custom properties SHALL be changed
