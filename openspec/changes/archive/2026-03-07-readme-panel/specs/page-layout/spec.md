## MODIFIED Requirements

### Requirement: Full viewport sizing with no scrollbars
The page layout SHALL occupy the full viewport height (`100vh`) and width (`100vw`) with `overflow: hidden` to prevent scrollbars. The `#layoutContainer` flex row SHALL contain three children in non-OBS mode: a README `<section>` panel, the control `<aside>` panel, and the `<main>` display panel. The `<main>` display panel SHALL use flex alignment that positions content at the right edge horizontally and stretches content vertically to fill available space, instead of centering content in both axes.

#### Scenario: Full viewport with no overflow
- **WHEN** the page is displayed at any viewport size
- **THEN** the layout SHALL fill the entire viewport with no scrollbars visible

#### Scenario: Three-panel layout in regular browser
- **WHEN** the page loads in a regular browser (non-OBS)
- **THEN** `#layoutContainer` SHALL contain three child panels: `#readmePanel` (`<section>`), the control `<aside>`, and the `<main>` display panel

#### Scenario: Two-panel layout in OBS mode
- **WHEN** the page loads inside an OBS browser source
- **THEN** `#readmePanel` SHALL be hidden via CSS, leaving the control `<aside>` and `<main>` display panel visible

#### Scenario: Display panel aligns content to the right
- **WHEN** the page loads
- **THEN** the `<main>` display panel SHALL align its content to the right edge horizontally and stretch children vertically
