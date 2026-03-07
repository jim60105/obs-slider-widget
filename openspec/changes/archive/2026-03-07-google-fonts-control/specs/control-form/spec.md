## ADDED Requirements

### Requirement: Font name text input
The controls panel SHALL contain a text input field with `id="fontFamily"` labeled "字型名稱", with a default value of "UoqMunThenKhung".

#### Scenario: Font input present with default value
- **WHEN** the page loads
- **THEN** a text input labeled "字型名稱" with the value "UoqMunThenKhung" is visible in the controls panel

#### Scenario: Font input accepts user input
- **WHEN** the user types a font name into the font family text input
- **THEN** the input value updates to reflect the typed text

### Requirement: Font name helper text
The font name input SHALL have a small description note below it containing a clickable link to `https://fonts.google.com` to guide users on finding available font names.

#### Scenario: Helper text with link is visible
- **WHEN** the page loads
- **THEN** a helper text with a clickable link to fonts.google.com is visible below the font name input

#### Scenario: Helper link opens Google Fonts
- **WHEN** the user clicks the fonts.google.com link in the helper text
- **THEN** the link SHALL open in a new tab (`target="_blank"`)

### Requirement: Font input glassmorphism styling
The font name text input SHALL have the same glassmorphism styling as the existing title text input: semi-transparent background, backdrop-filter blur, glass border, and rounded corners.

#### Scenario: Font input has glass appearance
- **WHEN** the page loads
- **THEN** the font name text input has a semi-transparent background with blur, a subtle border, and rounded corners
