## Why

The progress bar widget currently displays progress as a percentage (e.g., "60%"), which limits its usefulness to percentage-based scenarios. Users need the ability to display progress as a fraction (e.g., "12/20") with a configurable total value, enabling use cases like task tracking, item counts, or any discrete quantity beyond just percentages.

## What Changes

- Add a new "Total" number input control in the left panel to set the maximum/total value (default: 100)
- Change the progress slider to dynamically adjust its `max` attribute based on the total value
- Replace the percentage display format ("60%") with a fraction format ("12/20" showing currentValue/totalValue)
- Update the progress bar fill calculation to use `currentValue / totalValue` instead of `percent / 100`
- Update ARIA attributes to reflect the dynamic total (`aria-valuemax`) and current value (`aria-valuenow`)
- **BREAKING**: The display format changes from percentage to fraction, altering the widget's visual output

## Capabilities

### New Capabilities
- `fraction-display`: Display progress as a fraction (current/total) instead of percentage, with fill and ARIA reflecting the ratio
- `total-value-control`: A configurable total/max value input that dynamically adjusts the progress slider range

### Modified Capabilities

## Impact

- `index.html`: All changes are scoped to the single file — HTML controls, JS logic, and display elements
- The `updateProgressDisplay` function signature changes from `(percent)` to `(current, total)`
- The progress slider label changes from "進度值 (0-100%)" to reflect dynamic range
- No external dependencies or APIs are affected
