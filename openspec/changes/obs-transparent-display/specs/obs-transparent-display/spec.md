## ADDED Requirements

### Requirement: Transparent display panel in OBS mode
When the page is running inside an OBS browser source (detected by the `obs` class on `<html>`), the `<main>` display panel SHALL have a fully transparent appearance with no glassmorphism styling. Specifically, `background` SHALL be `transparent`, `border` SHALL be `none`, `box-shadow` SHALL be `none`, and `backdrop-filter` SHALL be `none`.

#### Scenario: Display panel has no glass background in OBS
- **WHEN** the page loads inside an OBS browser source (html element has class `obs`)
- **THEN** the `<main>` element SHALL have `background: transparent`, `border: none`, `box-shadow: none`, and `backdrop-filter: none`

#### Scenario: Display panel retains glass styling in normal browser
- **WHEN** the page loads in a regular browser (html element does not have class `obs`)
- **THEN** the `<main>` element SHALL retain its `.glass` class glassmorphism styling (background, border, box-shadow, backdrop-filter) unchanged

#### Scenario: Display widget content remains visible in OBS
- **WHEN** the page is running in OBS mode with a transparent display panel
- **THEN** the progress bar, title text, and fraction display within `<main>` SHALL remain fully visible and styled as normal
