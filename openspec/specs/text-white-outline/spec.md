## Purpose

Adds white outline to progress bar text for readability on varied OBS backgrounds.

## Requirements

### Requirement: Progress title white outline
The `.progress-title` element SHALL have a white outline rendered via multi-directional `text-shadow` layers that create a visible border around the text characters.

#### Scenario: Title displays with white outline
- **WHEN** the progress bar widget is rendered
- **THEN** the `.progress-title` text SHALL display with a white outline around each character, visible against any background color

#### Scenario: Title white outline coexists with theme glow
- **WHEN** the progress bar widget is rendered
- **THEN** the `.progress-title` text SHALL display both the white outline and the theme-colored glow simultaneously

### Requirement: Progress status white outline
The `.progress-status` element SHALL have a white outline rendered via multi-directional `text-shadow` layers that create a visible border around the text characters.

#### Scenario: Status text displays with white outline
- **WHEN** the progress bar widget is rendered
- **THEN** the `.progress-status` text SHALL display with a white outline around each character, visible against any background color

#### Scenario: Status white outline coexists with theme glow
- **WHEN** the progress bar widget is rendered
- **THEN** the `.progress-status` text SHALL display both the white outline and the theme-colored glow simultaneously

### Requirement: Display percent white outline
The `#displayPercent` element SHALL have a white outline applied via inline style `text-shadow` layers, consistent with the title and status text outline.

#### Scenario: Fraction display shows with white outline
- **WHEN** the fraction display (`#displayPercent`) is rendered or updated
- **THEN** the text SHALL display with a white outline around each character

#### Scenario: Fraction white outline updates with theme color change
- **WHEN** the user changes the theme color via the color picker
- **THEN** the `#displayPercent` SHALL retain the white outline while the glow color updates to the new theme color
