## 1. Update CSS Custom Properties

- [ ] 1.1 Update `--glass-bg` from `rgba(255,255,255,0.15)` to `rgba(255,255,255,0.18)` in `:root`
- [ ] 1.2 Update `--glass-blur` from `blur(12px)` to `blur(20px)` in `:root`
- [ ] 1.3 Update `--glass-border` from `rgba(255,255,255,0.3)` to `rgba(255,255,255,0.4)` in `:root`
- [ ] 1.4 Update `--glass-shadow` from `0 8px 32px 0 rgba(31,38,135,0.1)` to `0 8px 32px rgba(31,38,135,0.25), inset 0 1px 0 rgba(255,255,255,0.15)` in `:root`

## 2. Enhance `.glass` Class

- [ ] 2.1 Replace `background: var(--glass-bg)` with `background: linear-gradient(135deg, rgba(255,255,255,0.18) 0%, rgba(255,255,255,0.08) 100%)` in the `.glass` rule
- [ ] 2.2 Verify `.glass` still applies `backdrop-filter`, `border`, and `box-shadow` from the updated custom properties

## 3. Enhance `.glass-track` Visibility

- [ ] 3.1 Update `.glass-track` background to `rgba(255,255,255,0.12)` for stronger visibility
- [ ] 3.2 Update `.glass-track` border to `1px solid rgba(255,255,255,0.5)` for a brighter edge
- [ ] 3.3 Update `.glass-track` box-shadow to `0 0 12px rgba(255,255,255,0.1), inset 0 1px 2px rgba(255,255,255,0.15)` for outer glow and inner highlight

## 4. Verification

- [ ] 4.1 Open the page in a browser against the dark `#1a1a2e` background and confirm the main panel shows a clearly visible frosted-glass effect with gradient, blur, border, and shadow
- [ ] 4.2 Confirm the glass track is clearly distinguishable inside the main panel and provides contrast with the white `.glass-fill`
- [ ] 4.3 Confirm the aside panel retains its dark `rgba(15,15,30,0.95)` override and is not visually disrupted by the enhanced glass properties
- [ ] 4.4 Test with `html.obs` class (transparent background) to ensure no opaque artifacts or visual issues in OBS mode
