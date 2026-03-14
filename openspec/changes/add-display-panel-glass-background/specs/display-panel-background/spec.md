## ADDED Requirements

### Requirement: Display panel background wrapper element
The `<main>` display panel SHALL contain an inner wrapper `<div>` element with `id="displayPanelBg"` that wraps the existing widget content (title, glass track, and fraction display). This wrapper SHALL serve as the container for the optional frosted-glass panel background.

#### Scenario: Wrapper element exists in DOM
- **WHEN** the page is rendered
- **THEN** the `<main>` element SHALL contain a direct child `<div id="displayPanelBg">` that wraps the progress bar widget flex container

#### Scenario: Wrapper does not affect layout when disabled
- **WHEN** the panel background toggle is off (default)
- **THEN** the `#displayPanelBg` wrapper SHALL have no visible background, border, shadow, or backdrop-filter, and the widget layout SHALL appear identical to the layout without the wrapper

### Requirement: Frosted-glass panel background styling
When the panel background is enabled, the `#displayPanelBg` wrapper SHALL display frosted glassmorphism styling: a diagonal gradient background (`linear-gradient(135deg, rgba(255,255,255,0.18) 0%, rgba(255,255,255,0.08) 100%)`), `backdrop-filter` using `var(--glass-blur)`, a `1px solid` border using `var(--glass-border)`, and `border-radius: 1rem`. The wrapper SHALL also have padding to provide spacing between the glass panel edge and the widget content.

#### Scenario: Panel background enabled shows glass effect
- **WHEN** the panel background toggle is turned on
- **THEN** the `#displayPanelBg` element SHALL display a frosted-glass panel with gradient background, backdrop blur, semi-transparent border, and rounded corners

#### Scenario: Panel background visible in OBS mode
- **WHEN** the page is running inside OBS (html has class `obs`) and the panel background toggle is on
- **THEN** the `#displayPanelBg` element SHALL display the frosted-glass panel styling, independent of the `html.obs main` transparency rules that apply to the `<main>` element

#### Scenario: Panel background disabled hides glass effect
- **WHEN** the panel background toggle is turned off
- **THEN** the `#displayPanelBg` element SHALL have no glass styling (transparent background, no border, no backdrop-filter)

### Requirement: Panel background toggle control
The control panel form SHALL include a toggle control with `id="panelBg"` that enables or disables the frosted-glass panel background. The toggle SHALL default to off (unchecked).

#### Scenario: Toggle control exists in control form
- **WHEN** the control panel is rendered
- **THEN** the form SHALL contain a checkbox-type input with `id="panelBg"` and an associated label describing the panel background feature

#### Scenario: Toggle enables panel background
- **WHEN** the user checks the `panelBg` toggle
- **THEN** the `#displayPanelBg` element SHALL immediately display the frosted-glass panel background

#### Scenario: Toggle disables panel background
- **WHEN** the user unchecks the `panelBg` toggle
- **THEN** the `#displayPanelBg` element SHALL immediately hide the frosted-glass panel background

#### Scenario: Toggle defaults to off
- **WHEN** the page loads without any saved preset or with a preset that lacks the `panelBg` key
- **THEN** the `panelBg` toggle SHALL be unchecked and the panel background SHALL not be displayed

### Requirement: Real-time sync with display
The panel background toggle SHALL integrate with the existing real-time sync system. Changes to the toggle SHALL immediately reflect in the display panel without page reload.

#### Scenario: Toggle change updates display immediately
- **WHEN** the user toggles the `panelBg` control
- **THEN** the display panel background SHALL update within the same event cycle, matching the real-time behavior of other controls
