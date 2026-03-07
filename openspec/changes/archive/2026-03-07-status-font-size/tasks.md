## 1. HTML Structure

- [x] 1.1 Add a `<label>` and `<input type="range" id="statusSize" min="10" max="24" value="14">` slider to the control form, following the same glass-range styling pattern as the existing `#titleSize` slider
- [x] 1.2 Remove the `text-sm` class from the `#displayPercent` element and add an inline `style="font-size: 14px"` to set the default

## 2. Event Delegation

- [x] 2.1 Add a `case 'statusSize':` in the `input` event delegation switch block that sets `displayPercent.style.fontSize = target.value + 'px'`

## 3. Initialization

- [x] 3.1 In the `DOMContentLoaded` handler, read the `#statusSize` slider value and apply it to `displayPercent.style.fontSize` alongside the existing control initializations
