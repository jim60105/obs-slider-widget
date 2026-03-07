## MODIFIED Requirements

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
