## ADDED Requirements

### Requirement: OBS User-Agent detection
The system SHALL detect when running inside an OBS browser source by checking if the `navigator.userAgent` string contains the substring `OBS`. When detected, the system SHALL add the CSS class `obs` to the `<body>` element.

#### Scenario: Page loaded inside OBS browser source
- **WHEN** the page loads in an OBS browser source (User-Agent contains "OBS")
- **THEN** the `<body>` element SHALL have the class `obs`

#### Scenario: Page loaded in a regular browser
- **WHEN** the page loads in a regular browser (User-Agent does not contain "OBS")
- **THEN** the `<body>` element SHALL NOT have the class `obs`

### Requirement: Detection runs before first paint
The OBS detection script SHALL execute synchronously in the `<head>` section before the `<body>` is parsed, so the correct class is present before the first visual render.

#### Scenario: No flash of incorrect background
- **WHEN** the page loads in any browser environment
- **THEN** the `obs` class presence or absence SHALL be resolved before the body content is rendered, preventing any flash of wrong background color
