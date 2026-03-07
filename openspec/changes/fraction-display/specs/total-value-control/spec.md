## ADDED Requirements

### Requirement: Total value input control
The control panel SHALL include a number input field labeled "總數值" that allows the user to set the total/max value for the progress bar.

#### Scenario: Total input present on load
- **WHEN** the widget loads
- **THEN** a number input with id "totalVal" SHALL be visible in the control panel with a default value of 20 and min attribute of 1

#### Scenario: Total input accepts custom values
- **WHEN** the user enters 50 in the total input
- **THEN** the total value SHALL update to 50

### Requirement: Progress slider max updates dynamically
The progress slider's `max` attribute SHALL update to match the total value whenever the total changes.

#### Scenario: Slider max matches total on change
- **WHEN** the user changes the total to 50
- **THEN** the progress slider `max` attribute SHALL be "50"

#### Scenario: Slider max on initial load
- **WHEN** the widget loads with default total=20
- **THEN** the progress slider `max` attribute SHALL be "20"

### Requirement: Current value clamped when total decreases
When the total value decreases below the current progress value, the current value SHALL be clamped to the new total.

#### Scenario: Current clamped to new total
- **WHEN** current=15 and the user changes total from 20 to 10
- **THEN** the progress slider value SHALL be clamped to 10 and the display SHALL show "10/10"

#### Scenario: Current unchanged when total increases
- **WHEN** current=15 and the user changes total from 20 to 30
- **THEN** the progress slider value SHALL remain 15 and the display SHALL show "15/30"

### Requirement: Total value minimum enforcement
The total value SHALL be at least 1 to prevent division by zero.

#### Scenario: Total clamped to minimum
- **WHEN** the user attempts to set total to 0
- **THEN** the total value SHALL be clamped to 1
