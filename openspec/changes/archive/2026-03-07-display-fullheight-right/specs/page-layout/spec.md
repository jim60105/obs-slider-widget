## MODIFIED Requirements

### Requirement: Full viewport sizing with no scrollbars
The page layout SHALL occupy the full viewport height (`100vh`) and width (`100vw`) with `overflow: hidden` to prevent scrollbars. The `<main>` display panel SHALL use flex alignment that positions content at the right edge horizontally and stretches content vertically to fill available space, instead of centering content in both axes.

#### Scenario: Full viewport with no overflow
- **WHEN** the page is displayed at any viewport size
- **THEN** the layout SHALL fill the entire viewport with no scrollbars visible

#### Scenario: Display panel aligns content to the right
- **WHEN** the page loads
- **THEN** the `<main>` display panel SHALL align its content to the right edge horizontally and stretch children vertically
