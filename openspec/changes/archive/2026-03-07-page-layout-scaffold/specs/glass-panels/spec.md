## ADDED Requirements

### Requirement: Two-panel flex layout
The `<body>` SHALL contain a horizontal flex container with two child panels: an `<aside>` element (controls area) on the left and a `<main>` element (display area) on the right.

#### Scenario: Flex layout structure
- **WHEN** the page is rendered
- **THEN** the body SHALL contain a flex container with `<aside>` on the left (~300px width) and `<main>` on the right (flex-1, filling remaining space)

#### Scenario: Semantic HTML elements
- **WHEN** inspecting the DOM
- **THEN** the controls area SHALL be an `<aside>` element and the display area SHALL be a `<main>` element

### Requirement: Glassmorphism CSS custom properties
The page SHALL define CSS custom properties on `:root` for the glassmorphism effect: `--glass-bg` (`rgba(255,255,255,0.15)`), `--glass-blur` (`blur(12px)`), `--glass-border` (thin semi-transparent border color), and `--glass-shadow` (subtle box-shadow value).

#### Scenario: CSS custom properties defined
- **WHEN** the page stylesheet is loaded
- **THEN** `:root` SHALL define `--glass-bg`, `--glass-blur`, `--glass-border`, and `--glass-shadow` custom properties with the specified glassmorphism values

#### Scenario: Custom properties are reusable
- **WHEN** a new element needs glassmorphism styling
- **THEN** applying the CSS custom properties (or the `.glass` utility class) SHALL produce the correct glass effect without duplicating style values

### Requirement: Glassmorphism panel styling
Both the `<aside>` and `<main>` panels SHALL have glassmorphism styling applied: semi-transparent background (`rgba(255,255,255,0.15)`), `backdrop-filter: blur(12px)`, a thin semi-transparent border, and a subtle box-shadow.

#### Scenario: Aside panel glassmorphism
- **WHEN** the `<aside>` panel is rendered
- **THEN** it SHALL have a semi-transparent background, backdrop blur of 12px, a thin semi-transparent border, and a subtle box-shadow

#### Scenario: Main panel glassmorphism
- **WHEN** the `<main>` panel is rendered
- **THEN** it SHALL have a semi-transparent background, backdrop blur of 12px, a thin semi-transparent border, and a subtle box-shadow

### Requirement: Reusable glass utility class
A `.glass` CSS class SHALL be defined that applies all glassmorphism properties using the CSS custom properties, enabling consistent glass styling on any element.

#### Scenario: Glass class applies full effect
- **WHEN** the `.glass` class is added to any HTML element
- **THEN** that element SHALL display the glassmorphism effect (semi-transparent background, backdrop blur, border, and shadow) using the values from the CSS custom properties
