# 🛒 GroupBuy Platform

> Full-stack crowdfunding platform for group purchases - portfolio project demonstrating progressive skill development from vanilla JavaScript to TypeScript + React + Spring Boot.

**Current Status:** ✅ Week 4 Complete - TypeScript Migration + React Router + Advanced Architecture | 🚧 Week 5 Starting - Backend Setup

**Last updated:** March 3, 2026

---

## 🎯 About

Platform for organizing group purchases to get better prices through collective buying power.

**Core Concept:** Dynamic price tiers based on participant count
- Example: Coffee beans (10kg)
  - 1-4 people: 50 PLN/person
  - 5-9 people: 40 PLN/person
  - 10+ people: 30 PLN/person

**Purpose:** Portfolio project showcasing progressive skill building - each week introduces new technologies (vanilla JS → React → TypeScript → Spring Boot → Docker).

---

## ✨ Features (Current - Week 4: TypeScript + React Router)

### React Router & Architecture
- ✅ Multi-page application with 8 routes (/, /campaigns, /campaign/:id, /login, /signup, /dashboard, /create, 404)
- ✅ Dynamic routing with `useParams()` for campaign details
- ✅ Programmatic navigation with `useNavigate()` (redirects after login/signup)
- ✅ Persistent layout (Header + Footer wrap all routes)
- ✅ 404 handling with `NotFoundPage`
- ✅ SPA navigation with `<Link>` (no page reloads)

### TypeScript Integration
- ✅ Full TypeScript migration (all `.jsx` → `.tsx`)
- ✅ Comprehensive type definitions (`Campaign`, `Category`, `PricingTier`, `Pricing`, `People`, `Organizer`)
- ✅ Type-safe props for all components
- ✅ Typed React hooks (`useState`, `useEffect`, `useParams`, `useNavigate`)
- ✅ Event handlers properly typed (`React.ChangeEvent`, `React.SyntheticEvent`)
- ✅ Zero TypeScript errors across entire codebase

### Page-Based Architecture
- ✅ **HomePage** - hero section + featured campaigns (first 4)
- ✅ **CampaignsPage** - full campaign list with filters/search/sort
- ✅ **CampaignDetailsPage** - detailed view with join/leave functionality
- ✅ **DashboardPage** - user profile with tabs (My Campaigns / Joined Campaigns), savings stats
- ✅ **CreateCampaignPage** - full form for campaign creation (title, description, pricing tiers, capacity, deadline)
- ✅ **LoginPage & SignUpPage** - authentication forms with localStorage mock
- ✅ **NotFoundPage** - 404 error page with redirect link

### React Core (Week 3)
- ✅ Component-based architecture (Header, Hero, Filters, CampaignCard, Footer, HowItWorks)
- ✅ State management with `useState` (search, filters, sort, countdown timers)
- ✅ Side effects with `useEffect` (per-card countdown timers with cleanup)
- ✅ Props drilling and lifting state up
- ✅ Controlled form inputs

### Campaign Management
- ✅ Dynamic rendering with React components
- ✅ Campaign cards with animated progress bars
- ✅ Live countdown timers (updates every second, cleanup on unmount)
- ✅ Join/leave campaign functionality (with capacity validation)
- ✅ Mock user system (tracks created + joined campaigns)

### Filtering & Search
- ✅ Category filter (Food, Beauty, Electronics, Sports, All)
- ✅ Real-time search by campaign title
- ✅ Multi-option sorting (price asc/desc, people joined, deadline)
- ✅ Combined filters work seamlessly

### UI/UX Improvements
- ✅ Responsive hamburger menu with slide-in animation
- ✅ "How It Works" section (3-step guide)
- ✅ Improved card badges (auto-sizing, no text wrapping)
- ✅ Grid layout (2 cols desktop, 1 col mobile)
- ✅ Smooth scroll navigation
- ✅ Card hover effects
- ✅ Fixed Hero height on mobile (`calc(100vh - 4rem)`)
- ✅ Form styling (inputs, textareas, buttons with consistent design)
- ✅ Tab navigation UI (dashboard)

---

## 🛠️ Tech Stack

### Current (Week 1-4)
- **Frontend**: React, TypeScript, JavaScript (ES6+), HTML5, CSS3
- **Build Tool**: Vite
- **Routing**: React Router v6
- **State Management**: React Hooks (useState, useEffect)
- **Layout**: Flexbox, CSS Grid
- **Styling**: CSS Modules, CSS Variables
- **Data**: Local mock data (campaigns.ts, mockUser)
- **Animations**: CSS transitions, keyframe animations
- **Type Safety**: TypeScript (strict mode)

### Planned (Week 5-6)
- **Backend**: Java, Spring Boot, PostgreSQL
- **Auth**: JWT, Spring Security
- **API**: REST API (CRUD for campaigns + users)
- **ORM**: JPA/Hibernate
- **DevOps**: Docker, Docker Compose
- **Testing**: JUnit, Mockito (backend), Jest (frontend)
- **Advanced React**: Context API, Protected Routes, Custom Hooks

---

## 📅 Project Timeline

| Week | Focus | Status | Branch | Hours |
|------|-------|--------|--------|-------|
| **Week 0** | Setup & Wireframes | ✅ Done | - | ~5h |
| **Week 1** | HTML/CSS Landing Page | ✅ Done | `week1/landing-page` | ~8h |
| **Week 2** | JavaScript Functionality | ✅ Done | `week2/javascript-basics` | ~12-15h |
| **Week 3** | React Migration + UI | ✅ Done | `week3/react-migration` | ~15-20h |
| **Week 4** | TypeScript + React Router | ✅ Done | `week4/advanced-react` | ~18-22h |
| **Week 5-6** | Spring Boot Backend | 🚧 In Progress | `week5/backend-setup` | TBD |

**Total time invested:** ~58-70 hours (Week 0-4)

**Start date:** November 7, 2025  
**Target completion:** March/April 2026 (~5 months)

---

## 🌿 Branches

This project uses **branch-per-week strategy** to showcase progressive development:

- **`main`** - Current stable version (merged weekly progress)
- **`week1/landing-page`** - Pure HTML/CSS landing page (no JavaScript)
- **`week2/javascript-basics`** - Vanilla JS implementation (filters, search, sorting, modals, API calls, localStorage)
- **`week3/react-migration`** - React refactor (components, hooks, UI improvements)
- **`week4/advanced-react`** - TypeScript + React Router (multi-page app, type safety) ✅ **CURRENT**
- **`week5/backend-setup`** - Spring Boot backend (coming next)

**For recruiters:** Check individual branches to see skill evolution from vanilla JavaScript through React/TypeScript to Spring Boot.

---

## 🚀 How to Run (Current Version)

```bash
# Clone repository
git clone https://github.com/pxyvrld/groupbuy-platform.git

# Navigate to project
cd groupbuy-platform

# Install dependencies
npm install

# Run development server
npm run dev

# Open browser
# Vite will show URL (usually http://localhost:5173)
```

**Requirements:**
- Node.js v18+ (v22.14 recommended)
- Modern browser (Chrome, Firefox, Safari, Edge)

---

## 📂 Project Structure

```
groupbuy-platform/
├── src/
│   ├── components/          # Reusable UI components
│   │   ├── CampaignCard.tsx
│   │   ├── Filters.tsx
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   ├── Footer.tsx
│   │   ├── HowItWorks.tsx
│   │   └── styles/          # Component-specific CSS
│   ├── pages/               # Route pages
│   │   ├── HomePage.tsx
│   │   ├── CampaignsPage.tsx
│   │   ├── CampaignDetailsPage.tsx
│   │   ├── DashboardPage.tsx
│   │   ├── CreateCampaignPage.tsx
│   │   ├── LoginPage.tsx
│   │   ├── SignUpPage.tsx
│   │   ├── NotFoundPage.tsx
│   │   └── styles/          # Page-specific CSS
│   ├── data/
│   │   └── campaigns.ts     # Mock campaign data (typed)
│   ├── types/
│   │   └── campaign.ts      # TypeScript interfaces
│   ├── App.tsx              # Router setup
│   ├── main.tsx             # Entry point
│   └── index.css            # Global styles
├── public/
│   └── assets/
│       ├── images/          # Campaign images, logo
│       └── icons/           # Favicon
├── docs/
│   ├── progress.md          # Weekly progress tracker
│   ├── tech-stack.md        # Technology deep dive
│   ├── wireframes/          # Figma mockups (5 screens)
│   └── screenshots/         # Weekly screenshots (Week 1-4)
│       └── week4/
│           ├── desktop/     # Desktop screens (13 images)
│           └── mobile/      # Mobile screens (14 images)
├── package.json
├── tsconfig.json            # TypeScript config
├── vite.config.ts           # Vite config
├── README.md
└── .gitignore
```

---

## 🎓 Learning Goals

This project demonstrates progressive skill development for full-stack web development.

### Week 4 (Completed) - TypeScript + React Router:
- ✅ TypeScript fundamentals (types, interfaces, generics)
- ✅ Type-safe React components (props interfaces, typed hooks)
- ✅ React Router v6 (BrowserRouter, Routes, Route, Link)
- ✅ Dynamic routing (useParams, useNavigate)
- ✅ Page-based architecture (separation of pages vs components)
- ✅ Form handling in TypeScript (event types, controlled inputs)
- ✅ Type definitions for complex data structures
- ✅ Compile-time error catching

### Week 3 (Completed) - React Fundamentals:
- ✅ Component architecture & composition
- ✅ React Hooks (useState, useEffect, cleanup functions)
- ✅ Props & state management (lifting state up, props drilling)
- ✅ Conditional rendering & list rendering
- ✅ Event handling in React
- ✅ CSS Modules & CSS Variables

### Week 2 (Completed) - JavaScript Fundamentals:
- ✅ ES6+ syntax (arrow functions, destructuring, template literals)
- ✅ DOM manipulation (querySelector, addEventListener, innerHTML)
- ✅ Async programming (Promises, async/await, try/catch)
- ✅ Fetch API (HTTP requests, response handling, JSON parsing)
- ✅ LocalStorage API (data persistence)
- ✅ Array methods (filter, map, sort, find, reduce)
- ✅ Error handling (network errors vs HTTP status codes)
- ✅ Timers (setInterval, clearInterval, cleanup)

### Week 5-6 (Planned) - Backend:
- 🔜 Spring Boot (REST API, controllers, services, repositories)
- 🔜 PostgreSQL + JPA/Hibernate (ORM, entities, relationships)
- 🔜 JWT authentication & Spring Security
- 🔜 CORS configuration
- 🔜 DTO pattern & validation
- 🔜 Docker containerization (Dockerfile, docker-compose)
- 🔜 Frontend-backend integration (Axios, AuthContext, Protected Routes)

---

## 📸 Screenshots

### Week 1: Landing Page (HTML/CSS)

**Desktop:**

<table>
  <tr>
    <td><img src="docs/screenshots/week1/week1-desktop-hero.png" alt="Desktop Hero Section" width="400"/></td>
    <td><img src="docs/screenshots/week1/week1-desktop-cards.png" alt="Desktop Campaign Cards" width="400"/></td>
  </tr>
</table>

**Mobile:**

<table>
  <tr>
    <td><img src="docs/screenshots/week1/week1-mobile-hero.png" alt="Mobile Hero" width="200"/></td>
    <td><img src="docs/screenshots/week1/week1-mobile-cards.png" alt="Mobile Cards" width="200"/></td>
  </tr>
</table>

### Week 2: Interactive Features (JavaScript)

**Desktop:**

<table>
  <tr>
    <td><img src="docs/screenshots/week2/week2-desktop-hero.png" alt="Desktop Hero" width="400"/></td>
    <td><img src="docs/screenshots/week2/week2-desktop-filtered-campaigns.png" alt="Desktop Campaigns" width="400"/></td>
    <td><img src="docs/screenshots/week2/week2-desktop-modal.png" alt="Desktop Modal" width="400"/></td>
  </tr>
</table>

**Mobile:**

<table>
  <tr>
    <td><img src="docs/screenshots/week2/week2-mobile-hero.png" alt="Mobile Hero" width="400"/></td>
    <td><img src="docs/screenshots/week2/week2-mobile-filtered-campaigns.png" alt="Mobile Campaigns" width="400"/></td>
    <td><img src="docs/screenshots/week2/week2-mobile-modal.png" alt="Mobile Modal" width="400"/></td>
  </tr>
</table>

### Week 4: TypeScript + React Router

**Desktop Views:**

<table>
  <tr>
    <td><img src="docs/screenshots/week4/desktop/home-page-desktop.png" alt="Home Page" width="400"/></td>
    <td><img src="docs/screenshots/week4/desktop/home-page2-desktop.png" alt="Home Page (How It Works)" width="400"/></td>
  </tr>
  <tr>
    <td><img src="docs/screenshots/week4/desktop/campaigns-page-desktop.png" alt="Campaigns Page" width="400"/></td>
    <td><img src="docs/screenshots/week4/desktop/campaignX-page-desktop.png" alt="Campaign Details" width="400"/></td>
  </tr>
  <tr>
    <td><img src="docs/screenshots/week4/desktop/dashboard-page-desktop.png" alt="Dashboard (My Campaigns)" width="400"/></td>
    <td><img src="docs/screenshots/week4/desktop/dashboard-page2-desktop.png" alt="Dashboard (Joined)" width="400"/></td>
  </tr>
  <tr>
    <td><img src="docs/screenshots/week4/desktop/create-campaign-page-desktop.png" alt="Create Campaign Form" width="400"/></td>
    <td><img src="docs/screenshots/week4/desktop/login-page-desktop.png" alt="Login Page" width="400"/></td>
  </tr>
  <tr>
    <td><img src="docs/screenshots/week4/desktop/signup-page-desktop.png" alt="Sign Up Page" width="400"/></td>
    <td><img src="docs/screenshots/week4/desktop/error-page-desktop.png" alt="404 Error Page" width="400"/></td>
  </tr>
</table>

**Mobile Views:**

<table>
  <tr>
    <td><img src="docs/screenshots/week4/mobile/home-page-mobile.png" alt="Home Mobile" width="200"/></td>
    <td><img src="docs/screenshots/week4/mobile/home-page2-mobile.png" alt="Home Mobile (Scroll)" width="200"/></td>
    <td><img src="docs/screenshots/week4/mobile/home-page3-mobile.png" alt="Home Mobile (How It Works)" width="200"/></td>
    <td><img src="docs/screenshots/week4/mobile/hamburger-menu-mobile.png" alt="Hamburger Menu" width="200"/></td>
  </tr>
  <tr>
    <td><img src="docs/screenshots/week4/mobile/campaigns-page-mobile.png" alt="Campaigns Mobile" width="200"/></td>
    <td><img src="docs/screenshots/week4/mobile/campaignX-page-mobile.png" alt="Campaign Details Mobile" width="200"/></td>
    <td><img src="docs/screenshots/week4/mobile/campaignX-page2-mobile.png" alt="Campaign Details Mobile (Scroll)" width="200"/></td>
    <td><img src="docs/screenshots/week4/mobile/campaignX-page3-mobile.png" alt="Campaign Details Mobile (Bottom)" width="200"/></td>
  </tr>
  <tr>
    <td><img src="docs/screenshots/week4/mobile/dashboard-page-mobile.png" alt="Dashboard Mobile" width="200"/></td>
    <td><img src="docs/screenshots/week4/mobile/dashboard-page2-mobile.png" alt="Dashboard Mobile (Joined)" width="200"/></td>
    <td><img src="docs/screenshots/week4/mobile/create-campaign-page-mobile.png" alt="Create Campaign Mobile" width="200"/></td>
    <td><img src="docs/screenshots/week4/mobile/create-campaign-page2-mobile.png" alt="Create Campaign Mobile (Scroll)" width="200"/></td>
  </tr>
  <tr>
    <td><img src="docs/screenshots/week4/mobile/login-page-mobile.png" alt="Login Mobile" width="200"/></td>
    <td><img src="docs/screenshots/week4/mobile/signup-page-mobile.png" alt="Sign Up Mobile" width="200"/></td>
  </tr>
</table>

---

## 📝 Notes for Recruiters

This is a **learning project** showcasing progressive skill development:

**1. Branch-per-week structure** - Each branch represents a milestone:
   - `week1/landing-page` → Pure HTML/CSS (structure, layout, responsiveness)
   - `week2/javascript-basics` → Vanilla JS (DOM, async, API calls)
   - `week3/react-migration` → React refactor (components, hooks)
   - `week4/advanced-react` → TypeScript + React Router (type safety, routing)
   - Week 5-6 → Spring Boot backend + Docker

**2. Real-world patterns**:
   - Repository/Service/Controller architecture (coming in backend)
   - Type-safe development (TypeScript interfaces, compile-time checks)
   - Component reusability (DRY principle)
   - Separation of concerns (pages vs components, data vs UI)
   - Error handling (null checks, 404 pages, form validation)

**3. Professional practices:**
   - Git workflow (feature branches, descriptive commits, PRs)
   - Documentation (README, progress tracker, code comments)
   - Accessibility (semantic HTML, ARIA labels)
   - Responsive design (mobile-first approach, flexbox, grid)
   - Type safety (zero TypeScript errors, strict mode)
   - Code quality (no implicit `any`, proper cleanup in useEffect)

**4. Problem-solving approach:**
   - No tutorials copied - each feature built from scratch with mentor guidance
   - Debugging skills (TypeScript errors, React DevTools, console debugging)
   - Refactoring (vanilla JS → React → TypeScript)
   - Testing (manual QA, edge case handling)

**Time invested:** ~58-70 hours (Weeks 0-4)  
**Target role:** Full-Stack Developer (Spring Boot + React + TypeScript)

---

## 👤 Author

**pxyvrld** (Hubert Jucha)  
Computer Science Student  
📧 [hubertjucha21@gmail.com]  
🔗 [LinkedIn](https://www.linkedin.com/in/hubert-jucha/)  
🐙 [GitHub](https://github.com/pxyvrld)

💼 Seeking:  Full-Stack Developer Internship

---

## 📄 License

MIT License - Educational/portfolio project, free to learn from.

See [LICENSE](LICENSE) file for details.

---

_Last updated: March 3, 2026_