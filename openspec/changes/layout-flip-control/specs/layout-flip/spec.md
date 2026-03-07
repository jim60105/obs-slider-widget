## ADDED Requirements

### Requirement: Layout flip toggle button
The control panel header SHALL contain a toggle button with a flip icon (⇄) that allows the user to flip the layout horizontally. The button SHALL be placed inline with the header text using flex layout. The button SHALL be outside the `<form>` element.

#### Scenario: Flip button is visible in control panel
- **WHEN** the page is rendered
- **THEN** a flip button with ⇄ icon SHALL be visible in the control panel header row, next to the "控制台" heading

#### Scenario: Flip button toggles layout direction
- **WHEN** the user clicks the flip button
- **THEN** the parent flex container SHALL toggle the `flex-row-reverse` Tailwind class, moving the control panel to the opposite side

#### Scenario: Flip button toggles back
- **WHEN** the user clicks the flip button a second time
- **THEN** the layout SHALL return to the default state (control panel on the left, display panel on the right)

### Requirement: Display widget alignment mirrors on flip
When the layout is flipped (control panel on the right), the display panel's content alignment SHALL change from `justify-center` to `justify-start`, aligning the widget to the left edge of the display panel.

#### Scenario: Default alignment
- **WHEN** the layout is in default state (control panel on the left)
- **THEN** the `<main>` element SHALL use `justify-center` to center the display widget

#### Scenario: Flipped alignment
- **WHEN** the layout is flipped (control panel on the right)
- **THEN** the `<main>` element SHALL use `justify-start` instead of `justify-center`, aligning the display widget to the left side of the display panel

#### Scenario: Alignment restores on unflip
- **WHEN** the layout is flipped back to default
- **THEN** the `<main>` element SHALL restore `justify-center` alignment
