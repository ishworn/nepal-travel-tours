# Himalayan Footprints — Modern Nepal Tourism & Tour Guide Website (Phase 1)

A modern, responsive, and performance-oriented travel agency & tour guide website focused on Nepal's Himalayas. Built with **Next.js (App Router)**, **TypeScript**, and **Tailwind CSS**.

---

## 🌟 Key Features (Phase 1)

1. **Homepage (`/`)**:
   - Immersive hero section with high-resolution photography, value propositions, and dual CTAs
   - Floating quick search bar (Destination, Duration, Difficulty)
   - Featured tours grid with badges, price tags, and ratings
   - Popular Nepal destinations showcase (Everest, Annapurna, Kathmandu, Pokhara, Chitwan, Upper Mustang, Langtang)
   - Trust & safety pillars (100% local guide expertise, pulse oximeter checks, eco-responsible Leave No Trace)
   - Lead guide bio & credentials preview
   - Signature travel experiences (sunrise at Kala Patthar, monastery chants, paragliding, rhino safari)
   - International customer testimonials with verified reviews
   - High-impact booking/inquiry CTA banner

2. **Tours Directory (`/tours`)**:
   - Live frontend filtering by:
     - **Destination / Region** (All regions, Everest, Annapurna, Kathmandu, Pokhara, Chitwan, Mustang)
     - **Duration** (Short: 1-5 Days, Medium: 6-11 Days, Long: 12+ Days)
     - **Difficulty** (Easy, Moderate, Challenging, Strenuous)
     - **Keyword search** (by tour name, mountain peak, or region)
     - **Sorting** (Popularity, Price low/high, Duration)
   - Responsive tour cards with pricing, duration, difficulty badges, and altitude specs
   - Empty state with instant filter reset

3. **Dynamic Tour Details (`/tours/[slug]`)**:
   - Pre-rendered statically with `generateStaticParams` for blazing speed and SEO
   - Hero header with breadcrumb navigation, ratings, duration, group size, and altitude
   - Detailed trek overview
   - Key highlights & season/fitness recommendations
   - Interactive day-by-day itinerary accordion with altitude, walking hours, meals, and accommodations
   - Clear side-by-side **Included** and **Excluded** checklists
   - Photo gallery with modal lightbox viewer
   - Collapsible tour FAQs
   - Sticky booking sidebar with price breakdown, direct WhatsApp chat, and inquiry modal

4. **About the Guide & Company (`/about`)**:
   - Personal mountaineering story of lead guide **Ishwor Nepal**
   - Official credentials, NMA/TAAN licenses, and certifications
   - Company mission, ethical principles, porter welfare, and community giving
   - Prominently marked `[PLACEHOLDER_INFO]` sections for easy customization

5. **Categorized Photo Gallery (`/gallery`)**:
   - Filterable by: *All, Mountains, Trekking, Culture, Nature, Adventure, Local Experiences*
   - Responsive masonry/grid layout
   - High-resolution modal lightbox viewer with locations and titles

6. **Contact & Custom Itinerary Page (`/contact`)**:
   - Direct contact info: Phone, WhatsApp, Email, Kathmandu office location, office hours
   - Interactive inquiry form with frontend validation and instant success state
   - Supports pre-selected tour parameter (`/contact?tour=everest-base-camp-trek`)
   - Direct WhatsApp quick chat button

---

## 🛠️ Technology Stack

- **Framework**: [Next.js](https://nextjs.org/) (App Router, Static Site Generation)
- **Language**: [TypeScript](https://www.typescriptlang.org/) (Strict typing, no `any`)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Linting**: ESLint (0 errors, 0 warnings)

---

## 📂 Project Architecture

```text
nepal-travel-tours/
├── app/
│   ├── layout.tsx                # Global layout (Navbar, Footer, SEO metadata)
│   ├── page.tsx                  # Modern Homepage (10 sections)
│   ├── tours/
│   │   ├── page.tsx              # Tours Directory
│   │   ├── ToursClient.tsx       # Interactive client filtering & search
│   │   └── [slug]/
│   │       └── page.tsx          # Dynamic Tour Details page (SSG)
│   ├── about/
│   │   └── page.tsx              # About Guide & Company
│   ├── gallery/
│   │   ├── page.tsx              # Photo Gallery Server Component
│   │   └── GalleryClient.tsx     # Filterable gallery tabs & lightbox
│   ├── contact/
│   │   ├── page.tsx              # Contact page layout
│   │   └── ContactForm.tsx       # Client inquiry form with success UI
│   └── globals.css               # Tailwind CSS theme
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx            # Sticky header with backdrop blur & mobile drawer
│   │   └── Footer.tsx            # Full footer with accreditations & newsletter
│   ├── home/
│   │   ├── Hero.tsx
│   │   ├── QuickSearch.tsx
│   │   ├── FeaturedTours.tsx
│   │   ├── PopularDestinations.tsx
│   │   ├── WhyChooseUs.tsx
│   │   ├── AboutPreview.tsx
│   │   ├── TravelHighlights.tsx
│   │   ├── Testimonials.tsx
│   │   └── CTA.tsx
│   ├── tours/
│   │   ├── TourCard.tsx
│   │   ├── TourGrid.tsx
│   │   ├── TourFilters.tsx
│   │   ├── TourHero.tsx
│   │   ├── TourHighlights.tsx
│   │   ├── Itinerary.tsx
│   │   ├── InclusionsExclusions.tsx
│   │   ├── TourFAQ.tsx
│   │   ├── TourGallery.tsx
│   │   └── BookingSidebar.tsx
│   └── ui/
│       ├── Button.tsx
│       ├── SectionHeading.tsx
│       ├── Container.tsx
│       ├── Badge.tsx
│       └── Modal.tsx
├── data/
│   ├── tours.ts                  # 7 comprehensive sample Nepal tours
│   ├── destinations.ts           # 7 featured regions
│   ├── testimonials.ts           # Traveler reviews
│   └── gallery.ts                # Categorized photo collection
├── lib/
│   ├── site-config.ts            # Central site settings, contacts & guide bio
│   └── utils.ts                  # Price, duration, and class utilities
├── services/
│   └── tour-service.ts           # Future-proof data abstraction layer
└── types/
    └── index.ts                  # TypeScript interfaces (Tour, Destination, etc.)
```

---

## 🚀 Getting Started

### 1. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 2. Build for Production

```bash
npm run build
```

Generates optimized static HTML for all routes and tours.

### 3. Run Production Build

```bash
npm run start
```

### 4. Code Quality & Linting

```bash
npm run lint
```

---

## 🔧 How to Customize

### 1. Changing Business & Contact Details
Open [`lib/site-config.ts`](file:///home/solti/Downloads/nepal-travel-tours/lib/site-config.ts) to update:
- Company Name & Tagline
- Phone, WhatsApp number, and Email
- Kathmandu office address
- Guide name, license number, and bio

### 2. Adding or Editing Tours
Open [`data/tours.ts`](file:///home/solti/Downloads/nepal-travel-tours/data/tours.ts). Each tour item contains:
- `id`, `slug`, `title`, `price`, `discountPrice`
- `duration`, `difficulty`, `groupSize`, `maxAltitude`
- `highlights`, `itinerary` (day-by-day array)
- `included`, `excluded` lists, and `faq` items

### 3. Adding New Destinations
Open [`data/destinations.ts`](file:///home/solti/Downloads/nepal-travel-tours/data/destinations.ts).

### 4. Updating Gallery Photos
Open [`data/gallery.ts`](file:///home/solti/Downloads/nepal-travel-tours/data/gallery.ts).

---

## 🔮 Future Architecture (Phases 2 – 9)

The project is structured with strict separation of concerns to make future expansion effortless:
- **Phase 2 (Database & CMS)**: Update `services/tour-service.ts` to fetch from Prisma, Supabase, or headless CMS without changing any UI component.
- **Phase 3 (Admin Dashboard)**: Add `/admin` routes to manage tour data and blog articles.
- **Phase 4 (Booking & Inquiry Engine)**: Connect `submitContactInquiry` to a Next.js API Route (`/api/inquiries`) or webhook.
- **Phase 6 (Online Payments)**: Integrate Stripe / PayPal checkout inside `BookingSidebar.tsx`.
- **Phase 7 (AI Travel Assistant)**: Embed an AI itinerary planner / chat widget.
- **Phase 9 (n8n Automations)**: Send form submissions directly to an n8n webhook for automated email dispatch and CRM sync.
