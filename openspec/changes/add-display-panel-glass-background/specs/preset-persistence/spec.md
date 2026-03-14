## MODIFIED Requirements

### Requirement: Preset data structure
Each preset SHALL be stored as a JSON object containing the keys: `titleText`, `titleSize`, `totalVal`, `progressVal`, `themeColor`, `statusSize`, `fontFamily`, `panelBg`. The `panelBg` key SHALL be a boolean indicating whether the display panel glass background is enabled. All presets for a namespace SHALL be stored in a single localStorage entry as a JSON object mapping preset names to their settings objects.

#### Scenario: Stored preset format
- **WHEN** a preset named "default" is saved with titleText "Health", titleSize 28, totalVal 10, progressVal 5, themeColor "#ff0000", statusSize 20, fontFamily "Roboto", panelBg true
- **THEN** the localStorage entry SHALL contain `{"default": {"titleText": "Health", "titleSize": 28, "totalVal": 10, "progressVal": 5, "themeColor": "#ff0000", "statusSize": 20, "fontFamily": "Roboto", "panelBg": true}}`

#### Scenario: Backward compatibility with old presets
- **WHEN** a preset saved before the `panelBg` field existed is loaded and lacks the `panelBg` key
- **THEN** the `panelBg` toggle SHALL retain its current value (default: off) per the existing "Load preset with missing keys" behavior
