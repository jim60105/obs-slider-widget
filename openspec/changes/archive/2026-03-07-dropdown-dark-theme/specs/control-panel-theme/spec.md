## ADDED Requirements

### Requirement: Dropdown option dark background
The `<option>` elements within `select.glass-input` dropdowns SHALL have an explicit dark background (`#1a1a2e`) and white text (`#ffffff`) so that options remain readable when the browser renders the native dropdown list.

#### Scenario: Option text is readable in dropdown
- **WHEN** the user clicks the preset `<select>` dropdown to expand the option list
- **THEN** each `<option>` SHALL display white text on a dark background, providing sufficient contrast for readability

#### Scenario: Dynamically added options inherit styling
- **WHEN** new `<option>` elements are added to the dropdown via JavaScript (e.g., after saving a preset)
- **THEN** the new options SHALL also display with the dark background and white text via CSS inheritance, without requiring inline styles
