## ADDED Requirements

### Requirement: Control form scrolls vertically when content overflows
The control form inside the `<aside>` panel SHALL scroll vertically when its content exceeds the available viewport height. The form SHALL use `overflow-y: auto` so the scrollbar only appears when content actually overflows.

#### Scenario: Form content fits within viewport
- **WHEN** the control form content fits within the available vertical space
- **THEN** no scrollbar SHALL be displayed and the layout SHALL appear unchanged

#### Scenario: Form content exceeds viewport height
- **WHEN** the control form content exceeds the available vertical space (e.g., many controls are present)
- **THEN** the form area SHALL display a vertical scrollbar and the user SHALL be able to scroll to reach all controls

#### Scenario: Footer remains visible during scroll
- **WHEN** the user scrolls the control form
- **THEN** the footer SHALL remain fixed at the bottom of the aside panel and SHALL NOT scroll with the form content

### Requirement: Form uses flex-1 with min-h-0 for scroll containment
The control form SHALL use `flex-1` and `min-h-0` CSS properties to ensure the flex container correctly constrains the form height and allows `overflow-y: auto` to trigger scrolling.

#### Scenario: Flex layout enables overflow
- **WHEN** the aside panel is rendered as a flex column
- **THEN** the form element SHALL have `flex: 1` and `min-height: 0` so the browser allocates remaining space after the footer and enables scroll when content overflows

### Requirement: Custom scrollbar matches glassmorphism theme
The scrollbar on the control form SHALL be styled to match the translucent glassmorphism theme. It SHALL use `scrollbar-width: thin` and `scrollbar-color: rgba(255,255,255,0.2) transparent` for Firefox, and WebKit pseudo-element styles (`::-webkit-scrollbar`, `::-webkit-scrollbar-thumb`, `::-webkit-scrollbar-track`) for Chrome, Safari, and Edge.

#### Scenario: Firefox scrollbar appearance
- **WHEN** viewing in Firefox
- **THEN** the scrollbar SHALL be thin with a translucent white thumb and transparent track

#### Scenario: WebKit/Blink scrollbar appearance
- **WHEN** viewing in Chrome, Safari, or Edge
- **THEN** the scrollbar SHALL be narrow (6px or less), with a translucent rounded thumb and transparent track
