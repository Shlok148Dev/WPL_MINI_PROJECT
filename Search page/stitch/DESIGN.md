```markdown
# The Design System: Editorial Excellence for Haute Joaillerie

## 1. Overview & Creative North Star
**Creative North Star: "The Atelier Archive"**

This design system is built on the philosophy of quiet luxury. It rejects the "templated" look of traditional e-commerce in favor of a high-end editorial experience. Instead of a rigid, boxed-in grid, we utilize intentional asymmetry, overlapping layers, and a "Diamond Cut" precision—defined by a strict 0px border-radius across all elements. 

The goal is to evoke the feeling of a bespoke jewelry vault: quiet, spacious, and meticulously crafted. We move away from functional utility toward "The Digital Curator," where every piece of jewelry is treated as a masterpiece and every UI element serves as a silent, elegant pedestal.

---

## 2. Colors: Tonal Depth & Texture
The palette is rooted in the interplay between deep charcoal, metallic gold, and soft cream, creating a high-contrast environment that mimics a luxury showroom.

### Palette Strategy
- **Primary (`#775a19`):** Our signature "Gilded" tone. Use this sparingly for high-intent actions or to highlight the "Janka Creation" hallmark.
- **Secondary (`#5f5e5e`):** The "Charcoal" anchor. It provides the weight and sophistication needed to ground the ethereal cream surfaces.
- **Surface & Background (`#fcf9f8`):** Our "Soft Cream" canvas. It is warm, inviting, and feels more like fine paper than a digital screen.

### The "No-Line" Rule
Standard 1px borders are strictly prohibited for sectioning. High-end design is defined by light and material, not structural outlines. Distinguish sections using:
- **Background Shifts:** Transition from `surface` to `surface-container-low` (`#f6f3f2`) to define content blocks.
- **Generous Whitespace:** Use the higher end of the spacing scale (Scale 16–24) to create "breathing rooms" that naturally separate ideas.

### The Glass & Gradient Rule
To prevent a "flat" appearance, floating elements (like navigation bars or quick-view overlays) must use **Glassmorphism**. Apply a semi-transparent `surface` color with a `backdrop-blur` of 20px. This allows the brilliance of the jewelry photography to bleed through the UI, softening the user journey.

---

## 3. Typography: The Voice of Heritage
We utilize a high-contrast pairing that balances the heritage of Noto Serif with the modern precision of Manrope.

- **Display & Headlines (Noto Serif):** These are the "voice" of the brand. Use `display-lg` (3.5rem) and `headline-lg` (2rem) to create dramatic editorial moments. These should often be center-aligned or placed with intentional asymmetry to break the vertical flow.
- **UI & Labels (Manrope):** Use Manrope for all functional elements. Its clean, geometric nature ensures that technical details (carat weight, pricing, dimensions) are legible and secondary to the emotional impact of the imagery.
- **The Typographic Rhythm:** All `label-sm` and `label-md` elements should have a slight letter-spacing increase (0.05em) to enhance the "premium print" feel.

---

## 4. Elevation & Depth: Tonal Layering
In this design system, depth is a matter of "stacking" physical materials rather than casting artificial shadows.

### The Layering Principle
Hierarchy is achieved through the **Surface-Container Tiering**:
1. **The Base:** `surface` (#fcf9f8) - The main page level.
2. **The Inset:** `surface-container-low` (#f6f3f2) - For subtle sectioning.
3. **The Elevated:** `surface-container-highest` (#e5e2e1) - For focused interaction areas.

### Ambient Shadows
If a floating element requires a shadow (e.g., a "Reserve in Store" modal), it must be an **Ambient Shadow**:
- **Color:** A 6% opacity version of `on-surface` (#1c1b1b).
- **Spread:** Large blur (40px+) with 0px spread. It should feel like a soft glow rather than a hard drop shadow.

### The "Ghost Border" Fallback
If a boundary is required for accessibility (e.g., input fields), use the **Ghost Border**: the `outline-variant` token (#d1c5b4) at 20% opacity. Never use 100% opaque borders; they disrupt the "paper-like" quality of the layout.

---

## 5. Components: Precision & Minimalist Form

### Buttons
- **Primary:** Background `primary` (#775a19), text `on-primary` (#ffffff). Shape: 0px (Hard edge).
- **Secondary:** Transparent background, `primary` text, and a bottom-only "Ghost Border" (1px). 
- **States:** On hover, primary buttons should shift to `primary-container` (#c5a059).

### The "Pedestal" Card
- **Structure:** No borders, no shadows. 
- **Style:** Use a `surface-container-lowest` (#ffffff) background against a `surface` background to create a "lifted" effect.
- **Imagery:** High-quality, macro jewelry photography must take up 80% of the card area.

### Input Fields
- **Style:** Underline-only style using the `outline` token (#7f7667). 
- **Interaction:** On focus, the line transitions to `primary` (#775a19). Text is always `body-md`.

### Lists & Navigation
- **Dividers:** Do not use line dividers. Use **Spacing Scale 6** (2rem) as a vertical gutter between list items to let the content breathe.

---

## 6. Do’s and Don'ts

### Do:
- **Use the 0px Rule:** Maintain hard, architectural edges on all components to reflect the precision of gemstone cutting.
- **Embrace Asymmetry:** Offset text blocks from the center of images to create an editorial, magazine-like feel.
- **Prioritize Negative Space:** If a section feels crowded, double the spacing token. Luxury is the luxury of space.

### Don’t:
- **No Rounds:** Never use `border-radius`. It contradicts the "High-End Craftsmanship" aesthetic.
- **No Generic Shadows:** Avoid the standard "card-shadow-lg." If it doesn't look like natural light, it doesn't belong.
- **No High-Contrast Dividers:** Never use a solid black or dark grey line to separate content. Use tonal shifts or whitespace.

---

**Director’s Final Note:** *Remember, we are not building a store; we are building a legacy. The user should feel the weight of the gold and the coldness of the stone through the screen. If it looks like a generic e-commerce site, strip it back until only the elegance remains.*```