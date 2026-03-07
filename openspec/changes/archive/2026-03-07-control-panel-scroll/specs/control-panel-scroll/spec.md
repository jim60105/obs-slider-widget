## ADDED Requirements

### Requirement: Aside panel scrolls vertically when content overflows
The `<aside>` panel SHALL scroll vertically when its content exceeds the available viewport height. The aside SHALL use `overflow-y: auto` so the scrollbar only appears when content actually overflows.

#### Scenario: Aside content fits within viewport
- **WHEN** the aside panel content fits within the available vertical space
- **THEN** no scrollbar SHALL be displayed and the layout SHALL appear unchanged

#### Scenario: Aside content exceeds viewport height
- **WHEN** the aside panel content exceeds the available vertical space (e.g., many controls are present)
- **THEN** the aside panel SHALL display a vertical scrollbar and the user SHALL be able to scroll to reach all controls

#### Scenario: Footer scrolls with aside content
- **WHEN** the user scrolls the aside panel
- **THEN** the footer SHALL scroll with the rest of the aside content as part of the natural document flow

### Requirement: Aside uses overflow-y-auto for scroll containment
The `<aside>` panel SHALL use the `overflow-y: auto` CSS property to enable scrolling when content exceeds the viewport height.

#### Scenario: Aside enables overflow
- **WHEN** the aside panel is rendered
- **THEN** the aside element SHALL have `overflow-y: auto` so the browser enables scroll when content overflows the viewport height

### Requirement: Custom scrollbar matches glassmorphism theme
The scrollbar on the `<aside>` panel SHALL be styled to match the translucent glassmorphism theme. It SHALL use `scrollbar-width: thin` and `scrollbar-color: rgba(255,255,255,0.2) transparent` for Firefox, and WebKit pseudo-element styles (`aside::-webkit-scrollbar`, `aside::-webkit-scrollbar-thumb`, `aside::-webkit-scrollbar-track`) for Chrome, Safari, and Edge.

#### Scenario: Firefox scrollbar appearance
- **WHEN** viewing in Firefox
- **THEN** the scrollbar SHALL be thin with a translucent white thumb and transparent track

#### Scenario: WebKit/Blink scrollbar appearance
- **WHEN** viewing in Chrome, Safari, or Edge
- **THEN** the scrollbar SHALL be narrow (6px or less), with a translucent rounded thumb and transparent track
