## ADDED Requirements

### Requirement: Theme color CSS variable
The system SHALL define a `--theme-color` CSS custom property on `:root` with a default value of `#ffffff`.

#### Scenario: Default theme color on page load
- **WHEN** the page loads without user interaction
- **THEN** `--theme-color` on `:root` SHALL be `#ffffff`

### Requirement: Color picker control
The control form SHALL include an `<input type="color">` element with id `themeColor` and default value `#ffffff`, labeled "主題色彩" (Theme Color).

#### Scenario: Color picker present in control panel
- **WHEN** the page loads
- **THEN** the control form SHALL contain a color input with id `themeColor` and value `#ffffff`

#### Scenario: Color picker label
- **WHEN** the page loads
- **THEN** a label with text "主題色彩" SHALL be associated with the `themeColor` input

### Requirement: Theme color applies to progress bar fill
The `.glass-fill` background SHALL use `--theme-color` at 90% opacity via `color-mix(in srgb, var(--theme-color) 90%, transparent)`.

#### Scenario: Fill color matches theme
- **WHEN** `--theme-color` is set to `#ff0000`
- **THEN** the `.glass-fill` background SHALL render as the theme color at 90% mix with transparent

#### Scenario: Default fill appearance
- **WHEN** `--theme-color` is `#ffffff` (default)
- **THEN** the `.glass-fill` background SHALL appear as white at 90% opacity, matching the original design

### Requirement: Theme color applies to title text
The `.progress-title` color SHALL use `--theme-color` at 80% opacity via `color-mix(in srgb, var(--theme-color) 80%, transparent)`.

#### Scenario: Title color matches theme
- **WHEN** `--theme-color` is set to `#00ff00`
- **THEN** the `.progress-title` color SHALL render as the theme color at 80% mix with transparent

### Requirement: Theme color applies to status text
The `#displayPercent` element color SHALL use `--theme-color` at 80% opacity via `color-mix(in srgb, var(--theme-color) 80%, transparent)`.

#### Scenario: Status text color matches theme
- **WHEN** `--theme-color` is set to `#0000ff`
- **THEN** the `#displayPercent` text color SHALL render as the theme color at 80% mix with transparent

### Requirement: Real-time theme color sync
When the user changes the color picker value, the `--theme-color` CSS custom property on `:root` SHALL update immediately, causing all themed elements to reflect the new color without page reload.

#### Scenario: Changing color updates all themed elements
- **WHEN** the user selects a new color in the `themeColor` input
- **THEN** the progress fill, title text, and status text SHALL immediately reflect the new color

#### Scenario: Event handling pattern
- **WHEN** the `themeColor` input fires an `input` event
- **THEN** the handler SHALL set `--theme-color` on `document.documentElement.style` to the input's value
