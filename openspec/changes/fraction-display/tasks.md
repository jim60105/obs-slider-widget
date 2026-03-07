## 1. Add Total Value Control

- [ ] 1.1 Add a number input field with id="totalVal", min="1", default value 20, labeled "總數值", in the control form after the existing title size slider, using glass-input styling
- [ ] 1.2 Update the progress slider label from "進度值 (0-100%)" to "進度值" and set its max="20" and value="12" to match new defaults

## 2. Update Display Logic

- [ ] 2.1 Change `updateProgressDisplay(percent)` signature to `updateProgressDisplay(current, total)` with clamping: total ≥ 1, current clamped to [0, total]
- [ ] 2.2 Update fill calculation from `scaleY(validPercent / 100)` to `scaleY(current / total)`
- [ ] 2.3 Update display text from `${validPercent}%` to `${current}/${total}` fraction format
- [ ] 2.4 Update ARIA: set `aria-valuenow` to current value and `aria-valuemax` to total value

## 3. Wire Up Event Handling

- [ ] 3.1 Add a "totalVal" case in the input event delegation switch to update the progress slider max, clamp current value if needed, and call updateProgressDisplay
- [ ] 3.2 Update the "progressVal" case to read total from the totalVal input and pass both values to updateProgressDisplay

## 4. Initialize Defaults

- [ ] 4.1 Update DOMContentLoaded initialization to read both progressVal and totalVal, set the progress slider max from totalVal, and call updateProgressDisplay(current, total)
