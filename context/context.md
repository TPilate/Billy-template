# 🌿 Design Specification: Amanahita Soul

**Project:** Lucie Amanahita Soete Showcase Website  
**Version:** 1.0 — "The Awakening of Fascia"  
**Mood:** High-End, Organic, Peaceful, Airy

## 1. Editorial Structure & Flow (Storytelling)

We are not selling a massage; we are offering a state transition. The scroll experience should mimic breathing: alternating phases of expansion (large visuals, generous white space) and concentration (precise copy, tighter grids).

- **The Breath (Hero):** Immediate invitation. Visual immersion + emotional hook.
- **The Listening (Approach):** Why fascia? Short copy, elegant typography.
- **The Rituals (Treatments):** A structured grid to present the offer.
- **The Nomadic Cocoon (Locations):** A Bento Grid that highlights movement and nomadic presence.
- **The Value (Conscious Pricing):** A minimalist block that explains the pricing philosophy.
- **The Connection (Contact):** A clean lead-capture form.

## 2. Detailed Components (Mode 3 — Specification)

### A. Navigation (Floating Liquid Glass)

To align with 2025–2026 trends, the navigation should not be a rigid top bar.

- **Style:** Floating bar centered at the top or bottom with a Liquid Glass effect (adaptive refraction).
- **CSS:**

```css
.nav-bar {
  background: rgba(249, 246, 241, 0.4);
  backdrop-filter: blur(20px) saturate(180%);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 100px;
  padding: 0.75rem 2rem;
}
```

### B. Hero Section: "The Sanctuary"

- **Visual:** A grainy black-and-white photo of Lucie at work takes up 60% of the width on the right, leaving space for breathing text on the left over the Rose Sand background.
- **Typography:** The H1 in Clash Display should feel bold and monumental. The quote in Cormorant Garamond should slightly overlap the image to create depth.

### C. "Nomadic" Bento Grid (Locations & Dates)

This is where the modern nature of the activity is expressed.

- **Layout:** 3 columns, 2 rows.
- **Cell 1 (Large):** Photo of the cocoon/canopy setup.
- **Cell 2 (Medium):** Market list (Montbrun, Foix) with minimalist icons.
- **Cell 3 (Small):** Call to action: "Follow on Instagram".
- **Cell 4 (Medium):** Upcoming festival calendar.

### D. Treatment Cards (Interaction)

- **Base:** Ivory background, Deep Ink text.
- **Interaction:** On hover, the border animates with a very subtle gradient from Aubergine to Dried Lavender.
- **Typography:** Treatment title in Clash Display (Medium), price in Inter (Bold).

## 3. Micro-Interactions & Depth (The AXIOM Touch)

We do not want a static website. We want fluid movement.

- **Scroll Reveal:** Images should not "pop" in; they should appear with a progressive mask effect (like a linen curtain rising).
- **Cursor Interaction:** A custom cursor (20px hollow circle in Aubergine) that grows and blurs when hovering over Cormorant Garamond text areas.
- **Page Transitions:** Use a very fast fade to black (Deep Ink, 0.4s) to simulate closing the eyes.

## 4. Critique & Strategic Recommendations

### Strong Opinion on the Color Palette

The Dried Lavender accent (`#967BB6`) is risky. If used too much, it drifts into a cliché “Provence/classic massage” style.

**Recommendation:** Use it only for 1px or 2px details: a thin divider, a list bullet, or a form field focus state. Nothing more.

### Conscious Pricing Section

Do not present it as a discount.

Design this section as a manifesto. Use a Deep Aubergine background with Ivory text to create a strong visual break. This is a political and social commitment, and the design should reflect that.

## 5. Advanced CSS (Tokens & Utilities)

```css
/* Add typographic tension */
h1,
h2 {
  font-family: var(--font-heading);
  text-transform: uppercase;
  letter-spacing: -0.04em;
}

.editorial-quote {
  font-family: var(--font-accent);
  font-style: italic;
  font-size: 2.5rem;
  line-height: 1.2;
  color: var(--color-primary-aubergine);
}

/* Subtle organic grain effect across the whole site */
body::before {
  content: "";
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url("grain.png"); /* Fine grain texture */
  opacity: 0.03;
  pointer-events: none;
  z-index: 9999;
}
```
