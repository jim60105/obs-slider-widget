# Control Panel Theme

## Purpose

Ensures the control panel has an opaque dark background for readability in both OBS and regular browser environments.

## Requirements

### Requirement: Control panel opaque dark background
The `<aside>` control panel SHALL have an opaque dark background regardless of whether the page is running in OBS or a regular browser. This ensures the control panel text and inputs remain readable in all contexts. The scrollbar styling within the panel SHALL also use colors consistent with the dark opaque background.

#### Scenario: Control panel in OBS mode
- **WHEN** the page is loaded inside OBS (body has class `obs`)
- **THEN** the `<aside>` control panel SHALL have an opaque dark background, not the semi-transparent glass background

#### Scenario: Control panel in regular browser
- **WHEN** the page is loaded in a regular browser
- **THEN** the `<aside>` control panel SHALL have an opaque dark background

#### Scenario: Scrollbar blends with dark background
- **WHEN** the aside panel scrollbar is visible within the opaque dark panel
- **THEN** the scrollbar thumb SHALL use a translucent white color (`rgba(255,255,255,0.2)`) and the track SHALL be transparent, matching the panel's dark aesthetic

### Requirement: Control panel text remains legible
The control panel's dark background SHALL provide sufficient contrast for all existing white/light text and input elements to remain clearly readable.

#### Scenario: Text contrast on dark background
- **WHEN** viewing the control panel in any environment
- **THEN** all labels, inputs, headings, and footer text SHALL remain legible against the opaque dark background

### Requirement: Dropdown option dark background
The `<option>` elements within `select.glass-input` dropdowns SHALL have an explicit dark background (`#1a1a2e`) and white text (`#ffffff`) so that options remain readable when the browser renders the native dropdown list.

#### Scenario: Option text is readable in dropdown
- **WHEN** the user clicks the preset `<select>` dropdown to expand the option list
- **THEN** each `<option>` SHALL display white text on a dark background, providing sufficient contrast for readability

#### Scenario: Dynamically added options inherit styling
- **WHEN** new `<option>` elements are added to the dropdown via JavaScript (e.g., after saving a preset)
- **THEN** the new options SHALL also display with the dark background and white text via CSS inheritance, without requiring inline styles

### Requirement: Slider thumb styling without shadow
The slider thumb pseudo-elements (`::-webkit-slider-thumb` and `::-moz-range-thumb`) SHALL NOT include `box-shadow` properties. The thumb styling SHALL rely on background color and border for visual definition.

#### Scenario: Webkit slider thumb without shadow
- **WHEN** the `.glass-range::-webkit-slider-thumb` is rendered
- **THEN** it SHALL NOT have a `box-shadow` property applied

#### Scenario: Mozilla slider thumb without shadow
- **WHEN** the `.glass-range::-moz-range-thumb` is rendered
- **THEN** it SHALL NOT have a `box-shadow` property applied
