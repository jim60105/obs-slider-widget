## 1. Flex Layout Adjustment

- [ ] 1.1 Update the `<form id="controlForm">` element to add Tailwind classes `flex-1 min-h-0 overflow-y-auto` so it becomes the scrollable container within the aside's flex column
- [ ] 1.2 Remove `justify-between` from the `<aside>` element (no longer needed since `flex-1` on the form and `mt-auto` on the footer handle spacing)

## 2. Custom Scrollbar Styling

- [ ] 2.1 Add inline style or Tailwind arbitrary properties to the form for Firefox scrollbar: `scrollbar-width: thin; scrollbar-color: rgba(255,255,255,0.2) transparent;`
- [ ] 2.2 Add a `<style>` block (or extend existing) with WebKit scrollbar pseudo-elements for Chrome/Safari/Edge: `::-webkit-scrollbar` (width 6px), `::-webkit-scrollbar-thumb` (translucent white, rounded), `::-webkit-scrollbar-track` (transparent)

## 3. Verification

- [ ] 3.1 Visually confirm that the footer remains fixed at the bottom when the form content overflows
- [ ] 3.2 Confirm scrollbar appears only when content overflows and matches the glassmorphism theme
- [ ] 3.3 Verify no scrollbar is shown when form content fits within available space
