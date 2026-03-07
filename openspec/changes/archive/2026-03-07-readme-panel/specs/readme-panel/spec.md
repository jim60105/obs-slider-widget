## ADDED Requirements

### Requirement: README panel element
The page SHALL contain a `<section id="readmePanel">` element as the first child of `#layoutContainer`, before the control panel `<aside>`. The panel SHALL have a viewport-relative width (`w-[60vw]`), use the `.glass` class for glassmorphism styling, and be scrollable via `overflow-y: auto`.

#### Scenario: README panel is present in layout
- **WHEN** the page loads in a regular browser
- **THEN** a `<section id="readmePanel">` element SHALL exist as the first child of `#layoutContainer`, with `.glass` styling and vertical scroll enabled

### Requirement: Fetch and render README.md
The system SHALL fetch `./README.md` via the Fetch API at page load and render the markdown content as HTML inside `#readmePanel` using the marked.js library loaded from CDN.

#### Scenario: Successful README fetch and render
- **WHEN** the page loads and `./README.md` is accessible
- **THEN** the README markdown content SHALL be fetched, parsed to HTML by marked.js, and rendered inside `#readmePanel`

#### Scenario: README fetch failure
- **WHEN** the page loads and `./README.md` fails to fetch (network error, 404, etc.)
- **THEN** the `#readmePanel` SHALL display a user-friendly error message indicating the README could not be loaded

### Requirement: Markdown library from CDN
The page SHALL load marked.js via a `<script>` tag from the jsDelivr CDN (`https://cdn.jsdelivr.net/npm/marked/marked.min.js`) in the `<head>` section.

#### Scenario: marked.js is available
- **WHEN** the page loads with internet access
- **THEN** the `marked` global object SHALL be available for parsing markdown to HTML

### Requirement: README panel hidden in OBS mode
The README panel SHALL be hidden when the page is running inside an OBS browser source. The CSS rule `html.obs #readmePanel { display: none; }` SHALL prevent the panel from rendering in OBS mode.

#### Scenario: Panel hidden in OBS
- **WHEN** the page loads inside an OBS browser source (`html` element has class `obs`)
- **THEN** `#readmePanel` SHALL have `display: none` and not be visible

#### Scenario: Panel visible in regular browser
- **WHEN** the page loads in a regular browser (`html` element does not have class `obs`)
- **THEN** `#readmePanel` SHALL be visible and display rendered README content

### Requirement: README panel participates in layout flip
The README panel SHALL automatically reverse position when the `#flipLayout` button is clicked, because it is a child of `#layoutContainer` which toggles `flex-row-reverse`. No additional JavaScript is required for flip support.

#### Scenario: Default layout order
- **WHEN** the page loads in default layout
- **THEN** the visual order SHALL be: README panel (left) → control panel (center) → display panel (right)

#### Scenario: Flipped layout order
- **WHEN** the user clicks the flip button
- **THEN** the visual order SHALL be: display panel (left) → control panel (center) → README panel (right)

### Requirement: Rendered markdown styling
The rendered README HTML inside `#readmePanel` SHALL be styled using Tailwind's `prose` typography classes with color overrides appropriate for the dark glassmorphism background. Links, headings, code blocks, and lists SHALL be legible and visually consistent with the application theme.

#### Scenario: Markdown content is styled
- **WHEN** README.md is rendered as HTML
- **THEN** headings, paragraphs, links, lists, and code blocks SHALL have appropriate typography styling that is legible on the dark glass background
