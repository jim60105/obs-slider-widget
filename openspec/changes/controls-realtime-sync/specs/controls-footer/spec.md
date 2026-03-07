## ADDED Requirements

### Requirement: Footer position
The footer SHALL be positioned at the bottom of the controls panel using `margin-top: auto` within the flex-column layout.

#### Scenario: Footer stays at the bottom of the controls panel
- **WHEN** the page loads
- **THEN** the footer is rendered at the bottom of the `<aside>` panel, below all form controls

### Requirement: Footer separator
The footer SHALL have a top border separator visually dividing it from the controls above.

#### Scenario: Top border is visible
- **WHEN** the page loads
- **THEN** the footer has a visible top border line separating it from the form area

### Requirement: Footer text styling
The footer text SHALL be small (`font-size: 12px`) and center-aligned.

#### Scenario: Footer text is small and centered
- **WHEN** the page loads
- **THEN** the footer text is rendered at 12px font size and horizontally centered

### Requirement: Copyright line with GitHub link
The first line of the footer SHALL display "Copyright © 2026 Jim Chen" followed by a GitHub SVG icon that links to the project repository.

#### Scenario: Copyright text and GitHub icon are visible
- **WHEN** the page loads
- **THEN** the footer displays "Copyright © 2026 Jim Chen" with a GitHub SVG icon link beside it

#### Scenario: GitHub icon links to the project repository
- **WHEN** the user clicks the GitHub SVG icon
- **THEN** the browser navigates to the project's GitHub repository URL

### Requirement: License line
The second line of the footer SHALL display "Licensed under AGPLv3" where "AGPLv3" is a hyperlink to `https://www.gnu.org/licenses/agpl-3.0.html`.

#### Scenario: License text and link are visible
- **WHEN** the page loads
- **THEN** the footer displays "Licensed under AGPLv3" with "AGPLv3" as a clickable link

#### Scenario: AGPLv3 link navigates to the correct URL
- **WHEN** the user clicks the "AGPLv3" link
- **THEN** the browser navigates to `https://www.gnu.org/licenses/agpl-3.0.html`

### Requirement: Link hover transitions
Footer links SHALL have subtle hover color transitions.

#### Scenario: Hovering over a link changes its color smoothly
- **WHEN** the user hovers over the GitHub icon or the AGPLv3 link
- **THEN** the link color transitions smoothly to a hover state
