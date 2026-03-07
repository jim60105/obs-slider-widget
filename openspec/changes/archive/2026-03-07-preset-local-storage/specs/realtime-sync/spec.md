# Realtime Sync (Delta)

## MODIFIED Requirements

### Requirement: DOMContentLoaded initialization
On `DOMContentLoaded`, the system SHALL first resolve the instance namespace and load presets. If any presets exist, the system SHALL auto-load the first preset (alphabetically) by applying its values to all form controls. After preset loading (or if no presets exist), the system SHALL read the current values of all form controls and apply them to the display.

#### Scenario: Display matches form defaults on page load
- **WHEN** the page finishes loading and no presets exist
- **THEN** the display title reads "今天喝了幾杯飲料", the title font size is 32px, the status font size is 24px, and the progress bar shows the default fraction

#### Scenario: Preset auto-loaded on page init
- **WHEN** the page finishes loading and presets exist in the current namespace
- **THEN** the first preset (alphabetically) SHALL be loaded, form controls SHALL reflect its values, and the display SHALL update accordingly

### Requirement: Font initialization on page load
On `DOMContentLoaded`, the system SHALL apply the font from the font family input's current value (which may have been set by a loaded preset) to the document.

#### Scenario: Default font applied on page load
- **WHEN** the page finishes loading and no preset is loaded
- **THEN** the document font family SHALL include "UoqMunThenKhung" as loaded from Google Fonts

#### Scenario: Preset font applied on page load
- **WHEN** the page finishes loading and a preset with fontFamily "Noto Sans TC" is auto-loaded
- **THEN** the document font family SHALL include "Noto Sans TC" as loaded from Google Fonts
