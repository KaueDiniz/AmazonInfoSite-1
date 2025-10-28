# Amazon Rainforest Website - Design Guidelines

## Design Approach

**Strategy**: Reference-Based Approach drawing inspiration from immersive environmental platforms like National Geographic, WWF, and nature documentary interfaces (Netflix-style presentation). The design prioritizes visual storytelling with educational depth, creating an engaging experience that balances stunning imagery with accessible information.

**Core Principles**:
- Immersive visual storytelling with large, impactful imagery
- Educational clarity with scannable information architecture
- Emotional connection through authentic rainforest photography
- Respectful presentation honoring indigenous knowledge and conservation

---

## Typography System

**Font Families** (via Google Fonts):
- **Headings**: Montserrat (Bold 700, SemiBold 600) - modern, clean, authoritative
- **Body**: Inter (Regular 400, Medium 500) - highly readable for informational content
- **Accents**: Merriweather (Italic) - for quotes and special callouts

**Type Scale**:
- Hero Headline: text-6xl md:text-7xl lg:text-8xl font-bold
- Section Headers: text-4xl md:text-5xl font-bold
- Subsection Titles: text-2xl md:text-3xl font-semibold
- Card Headers: text-xl font-semibold
- Body Text: text-base md:text-lg leading-relaxed
- Captions/Stats: text-sm font-medium uppercase tracking-wide

---

## Layout System

**Spacing Primitives**: Tailwind units of **2, 4, 8, 12, 16, 20, 24**
- Micro spacing: p-2, m-4, gap-2
- Component spacing: p-8, gap-8, space-y-12
- Section spacing: py-16 md:py-20 lg:py-24

**Container Strategy**:
- Full-width hero: w-full with inner max-w-7xl mx-auto px-4
- Content sections: max-w-6xl mx-auto px-4
- Text-heavy content: max-w-4xl mx-auto
- Cards/Grids: max-w-7xl mx-auto

**Grid Patterns**:
- Biodiversity cards: grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8
- Stats/Facts: grid-cols-2 md:grid-cols-4 gap-4
- Gallery: masonry-style or grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4
- Two-column content: md:grid-cols-2 gap-12

---

## Component Library

### Navigation
- Sticky header with backdrop-blur-md effect when scrolling
- Logo left-aligned
- Navigation links: horizontal on desktop, hamburger on mobile
- Smooth scroll behavior to sections
- "Saiba Mais" CTA button in navigation

### Hero Section (Full-Screen Impact)
- min-h-screen immersive background image of Amazon canopy
- Overlay gradient for text legibility (from transparent to subtle dark)
- Centered content with max-w-4xl
- Large headline + supporting paragraph + dual CTAs
- Buttons with backdrop-blur-lg bg-opacity backgrounds
- Scroll indicator animation at bottom

### Biodiversity Cards
- Image on top (aspect-ratio-4/3 object-cover)
- Padding p-8 with text content
- Icon + title + description structure
- Hover transform scale-105 transition
- Shadow elevation on hover

### Statistics Display
- Large numbers (text-5xl font-bold)
- Label underneath (text-sm uppercase)
- Grid layout with dividers between stats
- Icon or visual element paired with each stat

### Threats/Challenges Section
- Split layout: image left, content right (alternating)
- Each challenge card with icon, headline, description
- Progress bars or visual indicators for impact metrics
- Call-to-action for conservation efforts

### Species Gallery
- Masonry grid or uniform card grid
- Hover overlay revealing species name and classification
- Modal/lightbox for detailed view
- Filter tags (mammals, birds, plants, reptiles, etc.)

### Fact Cards/Callouts
- Bordered containers with p-8
- Icon or decorative element
- Fact headline + supporting detail
- Distributed throughout page for visual rhythm

### Footer
- Multi-column layout (4 columns on desktop, stacked on mobile)
- Quick links navigation
- Resources and references
- Conservation organizations partnerships
- Social media links
- Newsletter signup form
- Copyright and credits

---

## Images Strategy

**Critical Image Placements**:

1. **Hero Background** (REQUIRED): Full-screen dramatic shot of Amazon canopy from above or ground-level perspective through trees - creates immediate emotional impact

2. **Section Headers**: Wide format images (16:9) introducing each major section
   - Biodiversity: Colorful macaw or jaguar close-up
   - Climate Impact: Aerial view of river systems
   - Threats: Deforestation contrast or fire imagery

3. **Biodiversity Cards** (6-9 cards): Individual species photos
   - Jaguar, Pink River Dolphin, Scarlet Macaw, Poison Dart Frog, Anaconda, Three-toed Sloth, Harpy Eagle, Giant Otter, Capybara

4. **Gallery Section** (12-20 images): Mix of wildlife, landscapes, indigenous communities, plant life

5. **Statistics Section**: Background texture of forest aerial view at low opacity

**Image Treatment**:
- Use aspect-ratio utilities for consistent sizing
- object-cover for all hero/card images
- Subtle grayscale or overlay on hover states
- Lazy loading for gallery images

---

## Page Structure & Sections

1. **Hero** (100vh) - Immersive entry point
2. **Introduction** (py-20) - Brief overview with key facts in 2-column layout
3. **Biodiversity Showcase** (py-24) - 3-column grid of species cards
4. **Importance to Climate** (py-20) - Split layout with infographic elements
5. **By the Numbers** (py-16) - Statistics grid (4 columns)
6. **Threats & Challenges** (py-24) - Alternating image/content rows (3-4 challenges)
7. **Species Gallery** (py-20) - Masonry or grid gallery with filters
8. **Conservation Actions** (py-20) - CTA section with ways to help
9. **Footer** (py-16) - Comprehensive navigation and resources

---

## Accessibility & Interactions

- Focus states: ring-2 ring-offset-2 for all interactive elements
- Minimum touch targets: 44x44px for buttons
- Alt text required for all images with descriptive content
- Smooth scroll behavior: scroll-behavior: smooth
- Reduced motion considerations for animations
- ARIA labels for icon buttons and navigation

**Minimal Animations**:
- Fade-in on scroll for section entrances
- Smooth hover transitions (duration-300)
- Gallery lightbox with backdrop fade
- NO distracting parallax or excessive scroll effects

---

This design creates an immersive, educational experience that honors the majesty of the Amazon rainforest while delivering accessible, impactful information to engage and inspire conservation awareness.