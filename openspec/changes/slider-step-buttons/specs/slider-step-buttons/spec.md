## ADDED Requirements

### Requirement: Step decrement button
The control panel SHALL display a "−" button immediately to the left of the `progressVal` range slider. Clicking the button SHALL decrement the progress value by 1. The value SHALL NOT go below 0.

#### Scenario: Decrement from mid-range value
- **WHEN** the current progress value is 10 and the user clicks the "−" button
- **THEN** the progress value becomes 9 and the widget display updates accordingly

#### Scenario: Decrement at minimum boundary
- **WHEN** the current progress value is 0 and the user clicks the "−" button
- **THEN** the progress value remains 0

### Requirement: Step increment button
The control panel SHALL display a "+" button immediately to the right of the `progressVal` range slider. Clicking the button SHALL increment the progress value by 1. The value SHALL NOT exceed the slider's `max` attribute.

#### Scenario: Increment from mid-range value
- **WHEN** the current progress value is 10, the max is 20, and the user clicks the "+" button
- **THEN** the progress value becomes 11 and the widget display updates accordingly

#### Scenario: Increment at maximum boundary
- **WHEN** the current progress value equals the slider max and the user clicks the "+" button
- **THEN** the progress value remains at the max

### Requirement: Event delegation compatibility
Each button click SHALL dispatch a synthetic `input` event (with `bubbles: true`) on the `progressVal` slider element so that existing event delegation triggers `updateProgressDisplay` without additional wiring.

#### Scenario: Synthetic event fires on button click
- **WHEN** the user clicks either the "−" or "+" button
- **THEN** an `input` event is dispatched on the `progressVal` slider and the widget reflects the updated value

### Requirement: Touch-friendly button size
Each step button SHALL have a minimum touch target of 44 × 44 CSS pixels and SHALL use the glassmorphism styling (`glass-input` base class) consistent with other control-panel inputs.

#### Scenario: Button visual appearance
- **WHEN** the control panel is rendered
- **THEN** the "−" and "+" buttons are visually styled with the glassmorphism theme and are large enough for comfortable touch interaction
