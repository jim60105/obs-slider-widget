## MODIFIED Requirements

### Requirement: System font configuration
The page SHALL use "Yusei Magic" from Google Fonts as the primary font, with a system font stack ('Segoe UI', Tahoma, Geneva, Verdana, sans-serif) as fallback. The Tailwind font family configuration SHALL include "Yusei Magic" as the first entry in the `sans` font family. The default Google Font SHALL be loaded via a `<link>` stylesheet in `<head>`.

#### Scenario: Default Google Font applied
- **WHEN** text is rendered on the page
- **THEN** the font family SHALL start with "Yusei Magic" followed by the fallback system fonts ('Segoe UI', Tahoma, Geneva, Verdana, sans-serif)

#### Scenario: Fallback to system fonts
- **WHEN** "Yusei Magic" fails to load (e.g., no internet)
- **THEN** the font family SHALL fall back to 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif
