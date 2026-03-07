# Control Panel Theme

## Purpose

Ensures the control panel has an opaque dark background for readability in both OBS and regular browser environments.

## Requirements

### Requirement: Control panel opaque dark background
The `<aside>` control panel SHALL have an opaque dark background regardless of whether the page is running in OBS or a regular browser. This ensures the control panel text and inputs remain readable in all contexts.

#### Scenario: Control panel in OBS mode
- **WHEN** the page is loaded inside OBS (body has class `obs`)
- **THEN** the `<aside>` control panel SHALL have an opaque dark background, not the semi-transparent glass background

#### Scenario: Control panel in regular browser
- **WHEN** the page is loaded in a regular browser
- **THEN** the `<aside>` control panel SHALL have an opaque dark background

### Requirement: Control panel text remains legible
The control panel's dark background SHALL provide sufficient contrast for all existing white/light text and input elements to remain clearly readable.

#### Scenario: Text contrast on dark background
- **WHEN** viewing the control panel in any environment
- **THEN** all labels, inputs, headings, and footer text SHALL remain legible against the opaque dark background
