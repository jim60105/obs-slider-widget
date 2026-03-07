## 1. Flex Layout Adjustment

- [x] 1.1 Update the `<aside>` element to add Tailwind class `overflow-y-auto` so it becomes the scrollable container for the entire panel including the footer
- [x] 1.2 Remove `justify-between` from the `<aside>` element (no longer needed since the aside itself scrolls and the footer flows naturally with the content)

## 2. Custom Scrollbar Styling

- [x] 2.1 Add inline style or Tailwind arbitrary properties to the aside panel for Firefox scrollbar: `scrollbar-width: thin; scrollbar-color: rgba(255,255,255,0.2) transparent;`
- [x] 2.2 Add a `<style>` block (or extend existing) with WebKit scrollbar pseudo-elements targeting `aside` for Chrome/Safari/Edge: `aside::-webkit-scrollbar` (width 6px), `aside::-webkit-scrollbar-thumb` (translucent white, rounded), `aside::-webkit-scrollbar-track` (transparent)

## 3. Verification

- [x] 3.1 Visually confirm that the footer scrolls with the rest of the aside content when it overflows
- [x] 3.2 Confirm scrollbar appears only when content overflows and matches the glassmorphism theme
- [x] 3.3 Verify no scrollbar is shown when aside content fits within available space
