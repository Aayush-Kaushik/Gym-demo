# Royal Gym & CrossFit — Commercial Pitch Demo & Portfolio Website

A high-converting, premium dark-themed fitness website built for **Royal Gym & CrossFit** in **Sector 12, Gurugram, Haryana, India**.

This project is engineered as a commercial-grade demonstration for gym owners, fitness studios, and local wellness businesses. It is built to serve both as a live client presentation and as an agency portfolio piece for freelance platforms (Upwork & Fiverr).

---

## 🌟 Key Highlights & Architecture

- **Visual Aesthetics:** Dark fitness theme (`#0B0B0D`, `#151519`) with high-voltage accent styling (`#E5FF3F`), generous spacing, tight typography (Plus Jakarta Sans), and subtle glassmorphic elements.
- **Conversion-Driven Funnel:**
  - Sticky header with quick "Book Free Trial" CTA.
  - Dedicated **Interactive Trial Booking Modal** with client validation and confetti celebration.
  - Seamless **1-Tap WhatsApp Lead Hand-off** pre-filled with the user's name, phone, chosen goal, and preferred workout time.
  - Sticky bottom action bar on mobile viewports (<768px) with instant Call, WhatsApp, and Free Trial buttons.
- **Single-File Rebranding Configuration (`src/data/gymData.js`):**
  - Business name, tagline, address, phone number, and WhatsApp link are centralized in one file.
  - Update a single variable (`whatsappNumber: "+919811024500"`) and all WhatsApp links throughout the site automatically update.
- **Local SEO & Schema.org Structured Data:**
  - `ExerciseGym` / `SportsActivityLocation` JSON-LD schema with exact Gurugram coordinates and operating hours.
  - Geo-targeted meta tags for Sector 12 Gurugram.
- **Transparent Demo Disclaimers:**
  - Designed as an authentic pitch concept.
  - Transparent badges for demo pricing, demo coach profiles, and demo class schedules.

---

## 📂 Project Structure

```
├── index.html                 # SEO Meta tags, Schema.org JSON-LD, Google fonts
├── package.json               # Dependencies & scripts
├── tailwind.config.js         # Design tokens & color system
├── vite.config.js             # Fast Vite dev and build pipeline
└── src
    ├── main.jsx               # Entry point
    ├── App.jsx                # Layout orchestrator
    ├── index.css              # Custom Tailwind directives & scrollbars
    ├── data
    │   └── gymData.js         # Central business config, programs, plans, schedule
    └── components
        ├── PitchBanner.jsx    # Top client pitch drawer with project notes
        ├── Navbar.jsx         # Sticky header with desktop links & mobile drawer
        ├── Hero.jsx           # Cinematic high-impact hero with dual CTAs
        ├── TrustProof.jsx     # Google Maps rating bar (4.8/5.0) & local assurances
        ├── AboutFeatures.jsx  # "Why Choose Us" 6 feature cards
        ├── ProgramsSection.jsx# 6 core training programs with modal drawer
        ├── TrainersSection.jsx# Coaching staff cards (demo roster)
        ├── MembershipSection.jsx# Starter, Performance, Elite PT plans
        ├── ScheduleSection.jsx# Filterable weekly timetable by day & category
        ├── GallerySection.jsx # Facility showcase with lightbox zoom
        ├── ReviewsSection.jsx # Verified Google review layout
        ├── FAQSection.jsx     # Accordion addressing common questions
        ├── LocationSection.jsx# Address, hours breakdown, map & directions
        ├── InlineLeadBanner.jsx# High-conversion pre-footer lead capture
        ├── LeadModal.jsx      # Booking modal with validation & WhatsApp link
        ├── FloatingWhatsApp.jsx# Bottom-right quick chat launcher
        ├── StickyMobileBar.jsx# Fixed mobile conversion bar
        └── Footer.jsx         # Links, contact, hours, and legal disclaimer
```

---

## 🚀 Running Locally

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start development server:**
   ```bash
   npm run dev
   ```
   Open `http://localhost:3000` in your browser.

3. **Build for production:**
   ```bash
   npm run build
   ```
   Generates optimized assets in the `dist/` directory ready for deployment on Vercel, Netlify, or GitHub Pages.

---

## 🎨 Customizing for Another Gym Client

To rebrand this template for any new gym client in under 2 minutes:
1. Open `src/data/gymData.js`.
2. Update:
   - `businessName`
   - `whatsappNumber` (e.g., `"+9198XXXXXXXX"`)
   - `address` & `landmark`
   - `rating` & `reviewCount`
   - `plans` & `scheduleData`
3. Save and build. The entire website will update consistently without modifying individual components!
