## MODIFIED Requirements

### Requirement: Theme color applies to progress bar fill
The `.glass-fill` background SHALL use `--theme-color` at 90% opacity via the `--theme-color-90` CSS custom property (computed by JS from the theme color hex value). The CSS declaration SHALL use `var(--theme-color-90)` instead of `color-mix()`.

#### Scenario: Fill color matches theme
- **WHEN** `--theme-color` is set to `#ff0000`
- **THEN** the `.glass-fill` background SHALL render as the theme color at 90% opacity via `var(--theme-color-90)`

#### Scenario: Default fill appearance
- **WHEN** `--theme-color` is `#707` (default)
- **THEN** the `.glass-fill` background SHALL appear as the default theme color at 90% opacity, matching the original design

### Requirement: Theme color applies to title text
The `.progress-title` color SHALL use `--theme-color` at 80% opacity via the `--theme-color-80` CSS custom property (computed by JS from the theme color hex value). The CSS declaration SHALL use `var(--theme-color-80)` instead of `color-mix()`.

#### Scenario: Title color matches theme
- **WHEN** `--theme-color` is set to `#00ff00`
- **THEN** the `.progress-title` color SHALL render as the theme color at 80% opacity via `var(--theme-color-80)`

### Requirement: Theme color applies to status text
The `#displayPercent` element color SHALL use `--theme-color` at 80% opacity via the `--theme-color-80` CSS custom property (computed by JS from the theme color hex value). The inline style or CSS declaration SHALL use `var(--theme-color-80)` instead of `color-mix()`.

#### Scenario: Status text color matches theme
- **WHEN** `--theme-color` is set to `#0000ff`
- **THEN** the `#displayPercent` text color SHALL render as the theme color at 80% opacity via `var(--theme-color-80)`

### Requirement: Real-time theme color sync
When the user enters a valid hex color value in the text input, the system SHALL call `applyThemeColor(hex)` to update `--theme-color`, `--theme-color-90`, and `--theme-color-80` CSS custom properties on `:root`, and the input's `border-left` color SHALL update to match. Invalid hex values SHALL NOT update any properties.

#### Scenario: Valid 6-digit hex updates theme
- **WHEN** the user types `#ff0000` in the `themeColor` input
- **THEN** `applyThemeColor('#ff0000')` SHALL be called
- **AND** `--theme-color` on `document.documentElement.style` SHALL be set to `#ff0000`
- **AND** `--theme-color-90` SHALL be set to `rgba(255, 0, 0, 0.9)`
- **AND** `--theme-color-80` SHALL be set to `rgba(255, 0, 0, 0.8)`
- **AND** the `themeColor` input's `borderLeftColor` SHALL be `#ff0000`

#### Scenario: Valid 3-digit hex updates theme
- **WHEN** the user types `#f00` in the `themeColor` input
- **THEN** `applyThemeColor('#f00')` SHALL be called
- **AND** all derived CSS custom properties SHALL update accordingly

#### Scenario: Invalid hex does not update theme
- **WHEN** the user types `xyz` in the `themeColor` input
- **THEN** `--theme-color` SHALL remain at its previous valid value
- **AND** `--theme-color-90` and `--theme-color-80` SHALL remain unchanged

#### Scenario: Partial hex does not update theme
- **WHEN** the user types `#ff` in the `themeColor` input (incomplete hex)
- **THEN** all CSS custom properties SHALL remain at their previous valid values

#### Scenario: Event handling pattern
- **WHEN** the `themeColor` input fires an `input` event
- **THEN** the handler SHALL validate the value against hex format (`/^#([0-9A-Fa-f]{3}|[0-9A-Fa-f]{6})$/`) before calling `applyThemeColor()`
