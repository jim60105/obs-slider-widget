# Preset UI

## Purpose

Defines the user interface controls for preset management within the control panel.

## Requirements

### Requirement: Preset controls placement
The preset management controls SHALL be placed at the top of the control form, before the existing form controls.

#### Scenario: Preset controls appear first in the form
- **WHEN** the page loads
- **THEN** the preset UI section SHALL appear above the title text input in the control panel

### Requirement: Preset select dropdown
The system SHALL provide a custom dropdown (not a native `<select>`) listing all saved preset names for the current namespace. The dropdown SHALL use the custom dropdown component defined in the `custom-dropdown` specification. The dropdown SHALL update whenever presets are saved or deleted.

#### Scenario: Dropdown lists all presets
- **WHEN** presets "alpha", "beta", and "gamma" exist
- **THEN** the dropdown SHALL contain three options: "alpha", "beta", "gamma"

#### Scenario: Dropdown updates after save
- **WHEN** the user saves a new preset "delta"
- **THEN** the dropdown SHALL immediately include "delta" as an option and select it

#### Scenario: Dropdown updates after delete
- **WHEN** the user deletes preset "beta"
- **THEN** the dropdown SHALL no longer include "beta"

#### Scenario: Empty dropdown when no presets
- **WHEN** no presets exist for the current namespace
- **THEN** the dropdown SHALL be empty with no selectable options

### Requirement: Preset name input for save
The system SHALL provide a text input for entering a preset name when saving.

#### Scenario: Save uses name from input
- **WHEN** the user types "my-config" in the preset name input and clicks Save
- **THEN** the preset SHALL be saved with the name "my-config"

### Requirement: Save button
The system SHALL provide a "Save" button that saves the current form control values as a preset with the name from the preset name input.

#### Scenario: Clicking Save persists current settings
- **WHEN** the user enters name "test" and clicks the Save button
- **THEN** the current form values SHALL be persisted as preset "test"

#### Scenario: Empty name overwrites selected preset
- **WHEN** the preset name input is empty and a preset is selected in the dropdown
- **THEN** clicking Save SHALL overwrite the selected preset with the current form values

### Requirement: Delete button
The system SHALL provide a "Delete" button that deletes the currently selected preset from the dropdown.

#### Scenario: Clicking Delete removes selected preset
- **WHEN** preset "test" is selected in the dropdown and the user clicks Delete
- **THEN** the "test" preset SHALL be removed from localStorage and the dropdown

### Requirement: Load on select change
The system SHALL load and apply the selected preset when the user changes the dropdown selection via the custom dropdown component.

#### Scenario: Changing dropdown selection loads preset
- **WHEN** the user selects "beta" from the custom dropdown (previously showing "alpha")
- **THEN** the "beta" preset's values SHALL be applied to all form controls and the display

### Requirement: Glassmorphism styling
The preset UI controls SHALL be styled with glassmorphism matching the existing control panel theme, consistent with the `glass-panels` specification.

#### Scenario: Preset section has glass styling
- **WHEN** the page loads
- **THEN** the preset UI section SHALL visually match the glassmorphism style of the control panel
