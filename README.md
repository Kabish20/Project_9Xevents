# 9X Events — Official Web Platform

> **Connecting Businesses Beyond Borders**  
> An international business events and networking company creating impactful platforms for industries to connect, collaborate, and grow across India, Dubai, Saudi Arabia, and Sri Lanka.

---

## 🚀 Tech Stack

- **Framework**: [React 19](https://react.dev/) + [Vite 8](https://vite.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Routing**: [React Router v7](https://reactrouter.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Utilities**: `clsx`, `tailwind-merge`

---

## 📁 Professional Project Architecture

```text
9Xevents/
├── .vscode/                 # IDE recommendations & lint settings
├── public/                  # Static assets & brand media
│   ├── logo.png             # Official company logo
│   ├── favicon.svg          # Browser tab favicon
│   ├── hero-bg.png          # Main hero background banner
│   ├── about-bg.png         # About page background
│   ├── services-bg.png      # Services page background
│   ├── gallery-bg.png       # Gallery background
│   ├── isuc-bg.png          # ISUC 2026 featured event banner
│   ├── exhibition.png       # Exhibition imagery
│   └── networking.png       # B2B networking imagery
├── src/
│   ├── assets/              # Component-level static assets
│   ├── components/          # Modular UI component hierarchy
│   │   ├── common/          # Reusable foundational UI elements
│   │   │   ├── Button.jsx   # Polymorphic button (gold/navy/outline/glass)
│   │   │   ├── Card.jsx     # Motion-enhanced card container
│   │   │   ├── PageHero.jsx # Standardized animated subpage banner
│   │   │   ├── SectionHeader.jsx # Consistent section titles
│   │   │   ├── SEO.jsx      # Dynamic document title & meta tags
│   │   │   └── index.js     # Common components barrel export
│   │   ├── layout/          # Global layout scaffolding
│   │   │   ├── Layout.jsx   # Master layout wrapper (Navbar + Main + Footer)
│   │   │   ├── Navbar.jsx   # Fixed glassmorphism navbar & mobile menu
│   │   │   ├── Footer.jsx   # Multi-column footer with live brand data
│   │   │   ├── WhatsAppButton.jsx # Floating interactive WhatsApp CTA
│   │   │   ├── ScrollToTop.jsx # Route-change scroll restoration
│   │   │   └── index.js     # Layout barrel export
│   │   ├── sections/        # High-level composable section blocks
│   │   │   ├── CTASection.jsx # Call-to-action banner
│   │   │   ├── GlobalPresence.jsx # International offices grid
│   │   │   ├── TestimonialsSection.jsx # Partner feedback cards
│   │   │   └── index.js     # Sections barrel export
│   │   └── index.js         # Top-level components barrel export
│   ├── data/                # Single Source of Truth for all content
│   │   ├── companyInfo.js   # Contact numbers, offices, socials & stats
│   │   ├── navigation.js    # Header & footer navigation links
│   │   ├── servicesData.js  # All 11 event services & descriptions
│   │   ├── industriesData.js# All 15 industry sectors & icons
│   │   ├── eventsData.js    # Flagship & upcoming international events
│   │   ├── galleryData.js   # Gallery items and category filters
│   │   ├── partnersData.js  # Partnership tiers and sponsors
│   │   ├── testimonialsData.js # Partner reviews & core values
│   │   └── index.js         # Data layer barrel export
│   ├── hooks/               # Custom React hooks
│   │   ├── useScrollPosition.js # Track window scroll state & offsets
│   │   ├── useDocumentTitle.js  # Dynamic browser tab title management
│   │   └── index.js         # Hooks barrel export
│   ├── pages/               # Application page views
│   │   ├── Home.jsx         # Homepage
│   │   ├── About.jsx        # About Us & Company overview
│   │   ├── Services.jsx     # Comprehensive event services
│   │   ├── Events.jsx       # Event schedules & ISUC 2026
│   │   ├── Industries.jsx   # 15+ industry verticals
│   │   ├── Partners.jsx     # Strategic partners & sponsor tiers
│   │   ├── Gallery.jsx      # Filterable photo & video gallery
│   │   ├── Contact.jsx      # Regional offices & interactive enquiry form
│   │   ├── ISUC2026.jsx     # Dedicated ISUC 2026 India portal
│   │   ├── PrivacyPolicy.jsx# Legal privacy policy
│   │   ├── TermsOfService.jsx # Legal terms of service
│   │   ├── NotFound.jsx     # Branded 404 error page
│   │   └── index.js         # Pages barrel export
│   ├── routes/              # Routing configuration
│   │   ├── routePaths.js    # Constant route definitions (ROUTES.*)
│   │   ├── AppRoutes.jsx    # Animated route switcher & 404 fallback
│   │   └── index.js         # Routes barrel export
│   ├── utils/               # Helper utilities
│   │   ├── cn.js            # Tailwind classnames merger (clsx + twMerge)
│   │   └── index.js         # Utils barrel export
│   ├── App.jsx              # Application root entry point
│   ├── index.css            # Global CSS variables & Tailwind directives
│   └── main.jsx             # React DOM mounting
├── jsconfig.json            # Path alias configuration (`@/*` -> `src/*`)
├── vite.config.js           # Vite build & alias configuration
├── index.html               # Semantic HTML5 entry with OpenGraph SEO
├── package.json             # NPM dependencies & scripts
└── deploy_to_aws.sh         # Automated AWS EC2 + Nginx deployment script
```

---

## 🛠️ Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Local Development Server
```bash
npm run dev
```
Open `http://localhost:5173` to view the application in your browser.

### 3. Build for Production
```bash
npm run build
```
The optimized bundle will be generated inside the `dist/` directory.

### 4. Preview Production Build
```bash
npm run preview
```

---

## 📝 Customizing Content (Data Layer)

All static content has been centralized in `src/data/` so you can update details in one single location:

| Content Item | File Location |
| :--- | :--- |
| **Phone numbers, WhatsApp, Email, Regional Offices** | `src/data/companyInfo.js` |
| **Navigation Menus & Legal Links** | `src/data/navigation.js` |
| **Event Services & Descriptions** | `src/data/servicesData.js` |
| **Industry Verticals & Icons** | `src/data/industriesData.js` |
| **Conferences & Featured Events (e.g. ISUC 2026)** | `src/data/eventsData.js` |
| **Gallery Photos & Video Categories** | `src/data/galleryData.js` |
| **Partner Tiers & Sponsorship Categories** | `src/data/partnersData.js` |
| **Testimonials & Core Values** | `src/data/testimonialsData.js` |

---

## 🌐 AWS EC2 Production Deployment

The project includes an automated deployment script [`deploy_to_aws.sh`](./deploy_to_aws.sh) configured for Ubuntu/Nginx hosting on AWS EC2.

### Server Deployment:
```bash
chmod +x deploy_to_aws.sh
./deploy_to_aws.sh
```

---

## 🔒 Security & Code Standards

- **Zero console warnings** with strict Tailwind CSS v4 syntax conformance.
- **Path aliases** (`@/*`) used across all imports for clean and maintainable references.
- **Comprehensive barrel exports** (`index.js`) for common components, layout, sections, data, hooks, pages, and routes.
- **Dynamic SEO metadata** on every page view.
- **Responsive design** tested across Mobile, Tablet, and Ultra-Wide Desktop viewports.
