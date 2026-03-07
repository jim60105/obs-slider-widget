# Control Panel Theme (Delta)

## MODIFIED Requirements

### Requirement: Slider thumb styling without shadow
The slider thumb pseudo-elements (`::-webkit-slider-thumb` and `::-moz-range-thumb`) SHALL NOT include `box-shadow` properties. The thumb styling SHALL rely on background color and border for visual definition.

#### Scenario: Webkit slider thumb without shadow
- **WHEN** the `.glass-range::-webkit-slider-thumb` is rendered
- **THEN** it SHALL NOT have a `box-shadow` property applied

#### Scenario: Mozilla slider thumb without shadow
- **WHEN** the `.glass-range::-moz-range-thumb` is rendered
- **THEN** it SHALL NOT have a `box-shadow` property applied
