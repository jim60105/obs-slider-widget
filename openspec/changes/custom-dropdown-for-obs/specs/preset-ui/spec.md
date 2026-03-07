## MODIFIED Requirements

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

#### Scenario: Dropdown updates after delete
- **WHEN** the user deletes preset "beta"
- **THEN** the dropdown SHALL no longer include "beta"

#### Scenario: Empty dropdown when no presets
- **WHEN** no presets exist for the current namespace
- **THEN** the dropdown SHALL be empty with no selectable options

### Requirement: Load on select change
The system SHALL load and apply the selected preset when the user changes the dropdown selection via the custom dropdown component.

#### Scenario: Changing dropdown selection loads preset
- **WHEN** the user selects "beta" from the custom dropdown (previously showing "alpha")
- **THEN** the "beta" preset's values SHALL be applied to all form controls and the display
