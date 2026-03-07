# Preset Persistence

## Purpose

Defines the localStorage-based persistence layer for saving, loading, and deleting named presets, including per-instance namespace isolation.

## Requirements

### Requirement: Namespace resolution from URL parameter
The system SHALL read the `instance` query parameter from the URL using `URLSearchParams`. The localStorage key SHALL be `obs-slider-<instance>-presets`. If no `instance` parameter is present, the key SHALL be `obs-slider-default-presets`.

#### Scenario: Instance parameter provided
- **WHEN** the page URL contains `?instance=counter1`
- **THEN** the localStorage key used for presets SHALL be `obs-slider-counter1-presets`

#### Scenario: No instance parameter
- **WHEN** the page URL has no `instance` query parameter
- **THEN** the localStorage key used for presets SHALL be `obs-slider-default-presets`

#### Scenario: Multiple instances use separate keys
- **WHEN** two browser tabs open the widget with `?instance=a` and `?instance=b`
- **THEN** each tab SHALL read/write to `obs-slider-a-presets` and `obs-slider-b-presets` respectively, with no cross-contamination

### Requirement: Preset data structure
Each preset SHALL be stored as a JSON object containing the keys: `titleText`, `titleSize`, `totalVal`, `progressVal`, `themeColor`, `statusSize`, `fontFamily`. All presets for a namespace SHALL be stored in a single localStorage entry as a JSON object mapping preset names to their settings objects.

#### Scenario: Stored preset format
- **WHEN** a preset named "default" is saved with titleText "Health", titleSize 28, totalVal 10, progressVal 5, themeColor "#ff0000", statusSize 20, fontFamily "Roboto"
- **THEN** the localStorage entry SHALL contain `{"default": {"titleText": "Health", "titleSize": 28, "totalVal": 10, "progressVal": 5, "themeColor": "#ff0000", "statusSize": 20, "fontFamily": "Roboto"}}`

### Requirement: Save preset
The system SHALL save the current values of all form controls as a named preset to localStorage. If a preset with the same name already exists, it SHALL be overwritten.

#### Scenario: Save new preset
- **WHEN** the user enters preset name "morning" and clicks Save
- **THEN** the preset "morning" SHALL be stored in localStorage with all current form control values

#### Scenario: Overwrite existing preset
- **WHEN** a preset "morning" already exists and the user saves again with the name "morning"
- **THEN** the stored "morning" preset SHALL be updated with the current form control values

#### Scenario: Empty preset name overwrites selected preset
- **WHEN** the user attempts to save a preset with an empty or whitespace-only name
- **THEN** the system SHALL use the currently selected preset name from the dropdown (`#presetSelect`) as the save target, effectively overwriting the selected preset with the current form control values

### Requirement: Load preset
The system SHALL apply a saved preset's values to all form controls and trigger the real-time sync to update the display.

#### Scenario: Load preset applies all settings
- **WHEN** the user selects and loads a preset containing titleText "Battle", titleSize 24, totalVal 50, progressVal 25, themeColor "#00ff00", statusSize 18, fontFamily "Arial"
- **THEN** all form controls SHALL update to those values and the display SHALL reflect the changes

#### Scenario: Load preset with missing keys
- **WHEN** a preset is loaded that lacks the `fontFamily` key (from an older save)
- **THEN** the `fontFamily` form control SHALL retain its current value and all other controls SHALL update normally

### Requirement: Delete preset
The system SHALL remove a named preset from localStorage.

#### Scenario: Delete existing preset
- **WHEN** the user selects preset "morning" and clicks Delete
- **THEN** the "morning" preset SHALL be removed from localStorage and the preset dropdown SHALL update to remove it

#### Scenario: Delete last preset
- **WHEN** the user deletes the only remaining preset
- **THEN** the localStorage entry SHALL contain an empty object `{}` and the preset dropdown SHALL show no options

### Requirement: Auto-load on page init
On `DOMContentLoaded`, the system SHALL load all presets for the current namespace. If at least one preset exists, the system SHALL automatically load the first preset (sorted alphabetically by name).

#### Scenario: Auto-load first preset on init
- **WHEN** the page loads and presets "beta" and "alpha" exist in the current namespace
- **THEN** the system SHALL automatically load preset "alpha" (first alphabetically) and apply its values

#### Scenario: No presets on init
- **WHEN** the page loads and no presets exist for the current namespace
- **THEN** the system SHALL use the form controls' default values (existing behavior)
