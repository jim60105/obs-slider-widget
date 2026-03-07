## 1. HTML Structure

- [x] 1.1 Wrap the `progressVal` label and slider in a flex row container with a "−" button before the slider and a "+" button after the slider
- [x] 1.2 Add `id="progressDec"` to the decrement button and `id="progressInc"` to the increment button with appropriate aria-labels

## 2. Styling

- [x] 2.1 Apply `glass-input` base class and Tailwind utilities (`w-12 h-10 text-xl font-bold text-white/90 rounded-lg flex items-center justify-center cursor-pointer select-none`) to both buttons for glassmorphism look and ≥44px touch target
- [x] 2.2 Ensure the slider retains `flex-1` so it fills remaining space between the buttons

## 3. JavaScript Logic

- [x] 3.1 Add click handler for `progressDec`: decrement `progressVal.value` by 1 (clamped to 0), then dispatch `new Event('input', { bubbles: true })` on the slider
- [x] 3.2 Add click handler for `progressInc`: increment `progressVal.value` by 1 (clamped to `progressVal.max`), then dispatch `new Event('input', { bubbles: true })` on the slider

## 4. Verification

- [x] 4.1 Manually verify decrement at boundary (value = 0) stays at 0
- [x] 4.2 Manually verify increment at boundary (value = max) stays at max
- [x] 4.3 Verify widget display updates on button click via the existing event delegation
