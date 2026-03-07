## MODIFIED Requirements

### Requirement: Two-panel flex layout
The `<body>` SHALL contain a horizontal flex container with two child panels: an `<aside>` element (controls area) and a `<main>` element (display area). By default, `<aside>` SHALL be on the left and `<main>` on the right. The container SHALL support reversible panel order via the `flex-row-reverse` Tailwind class, which moves `<aside>` to the right and `<main>` to the left. The parent container SHALL have an `id` attribute to allow JS-based class toggling.

#### Scenario: Default flex layout structure
- **WHEN** the page is rendered in default state
- **THEN** the body SHALL contain a flex container with `<aside>` on the left (~300px width) and `<main>` on the right (flex-1, filling remaining space)

#### Scenario: Reversed flex layout structure
- **WHEN** the `flex-row-reverse` class is added to the parent flex container
- **THEN** `<aside>` SHALL appear on the right side and `<main>` SHALL appear on the left side, with their widths unchanged

#### Scenario: Semantic HTML elements
- **WHEN** inspecting the DOM
- **THEN** the controls area SHALL be an `<aside>` element and the display area SHALL be a `<main>` element
