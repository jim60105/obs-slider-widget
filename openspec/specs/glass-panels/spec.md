# Glass Panels

## Purpose

Defines the two-panel flex layout structure and glassmorphism visual styling system including CSS custom properties and a reusable utility class.

## Requirements

### Requirement: Two-panel flex layout
The `<body>` SHALL contain a horizontal flex container with two child panels: an `<aside>` element (controls area) and a `<main>` element (display area). By default, `<aside>` SHALL be on the left and `<main>` on the right. The container SHALL support reversible panel order via the `flex-row-reverse` Tailwind class, which moves `<aside>` to the right and `<main>` to the left. The parent container SHALL have an `id` attribute to allow JS-based class toggling.

#### Scenario: Default flex layout structure
- **WHEN** the page is rendered in default state
- **THEN** the body SHALL contain a flex container with `<aside>` on the left (~330px width) and `<main>` on the right (flex-1, filling remaining space)

#### Scenario: Reversed flex layout structure
- **WHEN** the `flex-row-reverse` class is added to the parent flex container
- **THEN** `<aside>` SHALL appear on the right side and `<main>` SHALL appear on the left side, with their widths unchanged

#### Scenario: Semantic HTML elements
- **WHEN** inspecting the DOM
- **THEN** the controls area SHALL be an `<aside>` element and the display area SHALL be a `<main>` element

### Requirement: Glassmorphism CSS custom properties
The page SHALL define CSS custom properties on `:root` for the glassmorphism effect: `--glass-bg` (`rgba(255,255,255,0.18)`), `--glass-blur` (`blur(20px)`), `--glass-border` (`rgba(255,255,255,0.4)`), and `--glass-shadow` (`0 8px 32px rgba(31,38,135,0.25), inset 0 1px 0 rgba(255,255,255,0.15)`).

#### Scenario: CSS custom properties defined
- **WHEN** the page stylesheet is loaded
- **THEN** `:root` SHALL define `--glass-bg` as `rgba(255,255,255,0.18)`, `--glass-blur` as `blur(20px)`, `--glass-border` as `rgba(255,255,255,0.4)`, and `--glass-shadow` as a multi-layer shadow with outer depth and inset top highlight

#### Scenario: Custom properties are reusable
- **WHEN** a new element needs glassmorphism styling
- **THEN** applying the CSS custom properties (or the `.glass` utility class) SHALL produce the correct enhanced glass effect without duplicating style values

### Requirement: Glassmorphism panel styling
Both the `<aside>` and `<main>` panels SHALL have enhanced glassmorphism styling applied: a diagonal gradient background (`linear-gradient(135deg, rgba(255,255,255,0.18) 0%, rgba(255,255,255,0.08) 100%)`), `backdrop-filter: blur(20px)`, a semi-transparent border (`rgba(255,255,255,0.4)`), and a multi-layer box-shadow with outer depth and inset highlight.

#### Scenario: Aside panel glassmorphism
- **WHEN** the `<aside>` panel is rendered
- **THEN** it SHALL have the `.glass` class applied with enhanced glassmorphism properties, though its dark background override (`rgba(15,15,30,0.95)`) SHALL remain and visually dominate

#### Scenario: Main panel glassmorphism
- **WHEN** the `<main>` panel is rendered
- **THEN** it SHALL display a clearly visible frosted-glass effect with a diagonal gradient background, 20px backdrop blur, bright semi-transparent border, and multi-layer shadow including an inset top highlight

### Requirement: Reusable glass utility class
The `.glass` CSS class SHALL apply enhanced glassmorphism properties: a diagonal gradient background for color depth, `backdrop-filter` using `--glass-blur`, and a `1px solid` border using `--glass-border`. The `.glass` class SHALL NOT include a `box-shadow` property.

#### Scenario: Glass class applies effect without shadow
- **WHEN** the `.glass` class is added to any HTML element
- **THEN** that element SHALL display a gradient glass background (`linear-gradient(135deg, rgba(255,255,255,0.18) 0%, rgba(255,255,255,0.08) 100%)`), a 20px backdrop blur, and a border with `rgba(255,255,255,0.4)`
- **AND** that element SHALL NOT have a `box-shadow` property applied

### Requirement: Enhanced glass track visibility
The `.glass-track` element SHALL have enhanced glassmorphism properties that make it clearly distinguishable within the main glass panel: a brighter semi-transparent background and a thicker more visible border. The `.glass-track` element SHALL NOT include a `box-shadow` property.

#### Scenario: Glass track stands out without shadow
- **WHEN** the `.glass-track` element is rendered inside the `<main>` panel
- **THEN** it SHALL have a background of at least `rgba(255,255,255,0.12)` and a `2px solid` border of at least `rgba(255,255,255,0.5)`
- **AND** it SHALL NOT have a `box-shadow` property applied

#### Scenario: Glass track contrast with glass fill
- **WHEN** the progress bar is partially filled
- **THEN** the `.glass-track` background and `2px` border SHALL be visible enough to clearly define the track boundary, providing contrast between the unfilled track area and the white `.glass-fill`
