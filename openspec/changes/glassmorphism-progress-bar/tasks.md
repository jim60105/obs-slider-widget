## 1. Progress Bar HTML Structure

- [ ] 1.1 Add the widget container (flex row, gap, items-end) inside the `<main>` display area
- [ ] 1.2 Add the vertical title text element with `writing-mode: vertical-rl`, `text-orientation: mixed`, bold weight, letter-spacing, and default text "STATUS"
- [ ] 1.3 Add the glass track element (20×400px, border-radius 999px, overflow hidden, position relative) with `role="progressbar"`, `aria-valuemin="0"`, `aria-valuemax="100"`, `aria-valuenow="0"`
- [ ] 1.4 Add the glass fill child element inside the track (full width/height, `transform-origin: bottom`, initial `scaleY(0)`)
- [ ] 1.5 Add the percentage display element (bottom-aligned, small font, default text "0%")

## 2. Glassmorphism & Transition Styles

- [ ] 2.1 Add glass track styles: semi-transparent background, `backdrop-filter: blur(12px)`, semi-transparent border, subtle box-shadow
- [ ] 2.2 Add glass fill styles: `rgba(255,255,255,0.9)` background, `transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)`
- [ ] 2.3 Add title text styles: subtle color, CSS transition on font-size for smooth dynamic changes

## 3. JavaScript Logic

- [ ] 3.1 Implement `updateProgressDisplay(percent)` function: clamp value 0-100, update fill `scaleY(percent/100)`, update percentage text to "XX%", update `aria-valuenow`
- [ ] 3.2 Verify the function is globally accessible and handles edge cases (negative values, values > 100, non-numeric input)

## 4. Verification

- [ ] 4.1 Visually confirm the progress bar renders correctly with glassmorphism styling and capsule shape
- [ ] 4.2 Test `updateProgressDisplay()` with values 0, 50, 100, -10, 150 and verify fill, text, and ARIA updates
- [ ] 4.3 Confirm smooth CSS transitions on fill animation and title font-size changes
- [ ] 4.4 Verify accessibility attributes are present and update correctly
