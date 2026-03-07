## ADDED Requirements

### Requirement: Real-time font family sync
When the user types a font name into the font family input, the system SHALL debounce the input and then dynamically load and apply the font. This SHALL integrate into the existing form-level `input` event delegation.

#### Scenario: Typing a font name updates the page font after debounce
- **WHEN** the user types "Noto Sans TC" into the font family input and pauses for ~500ms
- **THEN** the page font SHALL update to "Noto Sans TC" loaded from Google Fonts

#### Scenario: Font sync uses event delegation
- **WHEN** the font family input fires an `input` event
- **THEN** the event SHALL be handled by the existing form-level `input` event listener via the `switch(target.id)` pattern

### Requirement: Font initialization on page load
On `DOMContentLoaded`, the system SHALL apply the default font ("Yusei Magic") from the font family input's initial value to the document.

#### Scenario: Default font applied on page load
- **WHEN** the page finishes loading
- **THEN** the document font family SHALL include "Yusei Magic" as loaded from Google Fonts
