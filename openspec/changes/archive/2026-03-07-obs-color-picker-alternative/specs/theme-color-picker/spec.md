## MODIFIED Requirements

### Requirement: Color picker control
The control form SHALL include a text input element with id `themeColor` and default value `#ffffff`, labeled "主題色彩" (Theme Color). The text input SHALL have an inline color indicator via `style="border-left: 6px solid #ffffff"` displaying the current color as its left border.

#### Scenario: Text input present in control panel
- **WHEN** the page loads
- **THEN** the control form SHALL contain a text input with id `themeColor` and value `#ffffff`

#### Scenario: Color picker label
- **WHEN** the page loads
- **THEN** a label with text "主題色彩" SHALL be associated with the `themeColor` input

#### Scenario: Color indicator border present
- **WHEN** the page loads
- **THEN** the `themeColor` input SHALL have `border-left: 6px solid #ffffff` displaying the default color

#### Scenario: Placeholder text
- **WHEN** the page loads
- **THEN** the text input SHALL display placeholder text `#ffffff` indicating the expected hex format

### Requirement: Real-time theme color sync
When the user enters a valid hex color value in the text input, the `--theme-color` CSS custom property on `:root` SHALL update immediately, and the input's `border-left` color SHALL update to match. Invalid hex values SHALL NOT update the theme color or the input's left border color.

#### Scenario: Valid 6-digit hex updates theme
- **WHEN** the user types `#ff0000` in the `themeColor` input
- **THEN** `--theme-color` on `document.documentElement.style` SHALL be set to `#ff0000`
- **AND** the `themeColor` input's `borderLeftColor` SHALL be `#ff0000`

#### Scenario: Valid 3-digit hex updates theme
- **WHEN** the user types `#f00` in the `themeColor` input
- **THEN** `--theme-color` on `document.documentElement.style` SHALL be set to `#f00`
- **AND** the `themeColor` input's `borderLeftColor` SHALL be `#f00`

#### Scenario: Invalid hex does not update theme
- **WHEN** the user types `xyz` in the `themeColor` input
- **THEN** `--theme-color` SHALL remain at its previous valid value
- **AND** the `themeColor` input's `borderLeftColor` SHALL remain at its previous valid color

#### Scenario: Partial hex does not update theme
- **WHEN** the user types `#ff` in the `themeColor` input (incomplete hex)
- **THEN** `--theme-color` SHALL remain at its previous valid value

#### Scenario: Event handling pattern
- **WHEN** the `themeColor` input fires an `input` event
- **THEN** the handler SHALL validate the value against hex format (`/^#([0-9A-Fa-f]{3}|[0-9A-Fa-f]{6})$/`) before setting `--theme-color`
