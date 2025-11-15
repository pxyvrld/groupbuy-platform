# GroupBuy Platform - Progress Tracker

## 📋 PROJEKT
- **Nazwa:** GroupBuy Platform
- **Opis:** Platforma do wspólnych zakupów
- **Cel:** Portfolio na staż Full-Stack Java Developer

## 🗓️ TIMELINE
- Start: 7 listopada 2025
- Deadline: marzec/kwiecień 2026
- Czas: ~5 miesięcy

## 📅 TYDZIEŃ 0: Setup środowiska (7-8 listopada 2025)

### Cele:
- Setup środowiska (VS Code, Git, Node.js, Copilot)
- Utworzenie repo na GitHub
- Wireframe projektu (4 ekrany)
- Przegląd tech stacku
- Ustalenie palety kolorów

### Zrobione:
- ✅ VS Code zainstalowany
- ✅ Git zainstalowany  
- ✅ Node.js v22.14 (już był)
- ✅ GitHub Copilot aktywowany
- ✅ Repo utworzone: https://github.com/pxyvrld/groupbuy-platform
- ✅ Struktura `docs/` gotowa
- ✅ `.gitignore` zaktualizowany (Node + Java + IDE + OS + Docker)
- ✅ Tech stack dokumentacja (`docs/tech-stack.md`)
- ✅ Wireframes (5 ekranów w Figmie):
  - Landing Page
  - Campaign Details
  - My Campaign Details
  - Create Campaign Form
  - User Dashboard
- ✅ Paleta kolorów ustalona (#10B981 green theme)
- ✅ README.md zaktualizowany

**Status:** ✅ ZAKOŃCZONY (8 listopada 2025, 02:00)

## 📅 TYDZIEŃ 1: HTML/CSS Basics (9-15 listopada 2025)

### Cele:
- Landing Page w czystym HTML/CSS
- Navbar, Hero, Campaign Cards, Footer
- Flexbox w praktyce
- Responsywność (desktop-first approach)
- Hover animations

### Zrobione:
- ✅ Struktura HTML Landing Page (semantyczny, accessibility)
- ✅ CSS styling z Flexbox layout
  - Navbar (sticky, z-index: 1000)
  - Hero section (gradient background, logo)
  - Campaign cards (horizontal desktop, vertical mobile)
  - Footer z linkiem do GitHub
- ✅ Responsywność (breakpoint 768px)
  - Desktop: horizontal cards (80% width)
  - Mobile: vertical cards (95% width, full-width images)
- ✅ Hover animations (transition + transform)
  - Karty: `translateY(-8px)` + box-shadow
  - Buttony: color inversion
  - Linki navbar: background-color change
  - Strzałka: `translateX(10px)` (desktop), `rotate(90deg)` (mobile)
- ✅ Progress bary z dynamicznymi wartościami (70%, 90%, 62.5%)
- ✅ CSS concepts w praktyce:
  - `overflow: hidden` (progress bar rounded corners)
  - `object-fit: cover` (obrazki bez rozciągania)
  - `z-index` (navbar nad wszystkim)
  - `box-shadow` (depth effect)
  - `transform` (smooth animations)

### Screenshots:
![Desktop Hero](screenshots/week1/week1-desktop-hero.png)
![Desktop Cards](screenshots/week1/week1-desktop-cards.png)
![Mobile Hero](screenshots/week1/week1-mobile-hero.png)
![Mobile Cards](screenshots/week1/week1-mobile-cards.png)

**Status:** ✅ ZAKOŃCZONY (15 listopada 2025, 01:11 UTC)

### Notatki:
- Repo: https://github.com/pxyvrld/groupbuy-platform
- Następny projekt: mobile-first (`min-width` zamiast `max-width`)
- Hamburger menu na mobile (Week 3 - JavaScript)