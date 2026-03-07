## 1. Right-Align Widget in Display Panel

- [ ] 1.1 Change `<main>` Tailwind classes from `items-center justify-center` to `items-stretch justify-end` so the widget is pushed to the right edge and children can stretch vertically

## 2. Full-Height Glass Track

- [ ] 2.1 Remove `height: 400px` from `.glass-track` CSS rule and add `flex: 1` (or `flex-grow: 1`) so the track stretches to fill available vertical space
- [ ] 2.2 Add `h-full` (or equivalent) to the inner flex container (`div.flex.items-stretch.gap-4`) so it stretches to the full height of the `<main>` panel
- [ ] 2.3 Verify the fill animation (`scaleY`) still works correctly at dynamic heights

## 3. Verification

- [ ] 3.1 Visually confirm the widget is right-aligned and the track fills the full panel height at various viewport sizes
- [ ] 3.2 Confirm title text remains at top and percentage text remains at bottom of the widget
