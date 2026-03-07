## 1. CSS Override for OBS Transparent Display

- [x] 1.1 Add `html.obs main` CSS rule in the existing `<style>` block that sets `background: transparent`, `border: none`, `box-shadow: none`, and `backdrop-filter: none`

## 2. Verification

- [x] 2.1 Verify the display widget content (progress bar, title, fraction text) is not affected by the new CSS rules
- [x] 2.2 Verify the `.glass` class styling remains unchanged in normal browser mode (without `obs` class)
