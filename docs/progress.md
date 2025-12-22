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


## 📅 TYDZIEŃ 2: JavaScript Basics (16-22 grudnia 2025)

### Cele: 
- Dodać interaktywność do landing page (filtry, search, sorting)
- Zaimplementować modal system z pledge functionality
- Fetch kampanii z JSON (async/await)
- Dodać localStorage (persist filtrów po odświeżeniu)
- Live countdown timers na kartach kampanii

### Zrobione:
- ✅ **Filtering system** (kategorie:  Food, Beauty, Electronics, Sports, All)
  - Dropdown `<select>` z event listener (`change` event)
  - `filterCampaigns()` function używająca `.filter()` method
  - Match category ORAZ search query (combined filters)
  
- ✅ **Search functionality** (real-time search po tytule kampanii)
  - Input `<input type="search">` z event listener (`input` event)
  - Case-insensitive search (`.toLowerCase()` + `.includes()`)
  - Instant filtering podczas pisania
  
- ✅ **Sorting system** (4 opcje sortowania)
  - Price:  Low to High / High to Low
  - People Joined: Most First
  - Deadline:  Ending Soon
  - `.sort()` method z custom comparator functions
  
- ✅ **Combined filters** (kategoria + search + sort działają razem)
  - Refactoring do jednej `updateCampaigns()` function
  - Wszystkie filtry wywołują tę samą funkcję
  - Filtry nie resetują się nawzajem
  
- ✅ **Modal system** (szczegóły kampanii + join button)
  - Event delegation (listener na `.campaigns` container zamiast na każdej karcie)
  - `.closest()` method do znalezienia clicked card
  - Dynamic content creation (`.innerHTML` + template literals)
  - Modal overlay z click-outside-to-close
  
- ✅ **Join campaign functionality** (walidacja capacity)
  - Check `campaign.people.current >= campaign.people.capacity`
  - Error message display (`.hidden` class toggle)
  - Update `people.current` counter po dołączeniu
  - Re-render kampanii po update (aktualizacja progress bara)
  
- ✅ **LocalStorage persistence** (filtry zostają po F5)
  - `localStorage.setItem()` przy każdej zmianie filtra
  - `localStorage.getItem()` przy ładowaniu strony
  - Fallback na domyślne wartości (`|| "all"`, `|| ""`, `|| "default"`)
  - Object structure dla saved filters (DRY principle)
  
- ✅ **API call** (fetch from local JSON file)
  - `async/await` syntax zamiast `.then()` chains
  - `fetch("./campaigns.json")` + `response.json()`
  - Loading state (user-friendly message podczas fetch)
  - Error handling:  
    - `try/catch` (network errors, timeout)
    - `response.ok` check (HTTP 404/500 status codes)
    - `throw new Error()` dla HTTP errors (trafia do catch)
  - Success state (renderowanie kampanii po fetch)
  
- ✅ **Live countdown timers** (jeden timer na każdą kartę)
  - `setInterval()` (update co 1000ms = 1 sekunda)
  - `timetoSeconds()` / `secondsToTime()` conversion functions
  - Clear previous timers przy re-render (`clearInterval()` + array tracking)
  - Format:  `HH:MM:SS` (leading zeros)
  
- ✅ **Smooth scroll navigation**
  - Browse buttons (hero + navbar) → campaigns section
  - `scrollIntoView({ behavior: 'smooth' })`
  - Better UX (no jumpy scrolling)

### Nauka (koncepty):

**JavaScript ES6+:**
- Arrow functions (`const fn = () => {}`)
- Template literals (`` `${variable}` ``)
- Destructuring (`const {name, age} = user`)
- Spread operator (nie użyte w projekcie)

**Async JavaScript:**
- Promises (obietnice przyszłej wartości)
- `async/await` syntax (czytelniejsze niż `.then()`)
- `try/catch` (obsługa błędów w async code)
- Fetch API (HTTP requests w przeglądarce)
- JSON parsing (`response.json()` też jest async!)

**DOM Manipulation:**
- `querySelector()` / `querySelectorAll()` (selektory CSS)
- `addEventListener()` (click, input, change events)
- `.innerHTML` (tworzenie HTML z JS)
- `.classList` (add/remove/toggle classes)
- Event delegation (listener na parent zamiast na każdym child)

**Array Methods:**
- `.filter()` (zwraca nową tablicę z elementami spełniającymi warunek)
- `.map()` (transformuje każdy element tablicy)
- `.sort()` (sortuje tablicę - uwaga: mutuje original!)
- `.find()` (zwraca pierwszy element spełniający warunek)
- `.join()` (łączy tablicę w string)

**Error Handling:**
- **Network errors** (brak internetu, timeout) → `catch` łapie automatycznie
- **HTTP errors** (404, 500) → `fetch()` NIE rzuca błędu, trzeba sprawdzić `response.ok`
- `throw new Error()` (ręczne rzucenie błędu → trafia do `catch`)
- User-friendly error messages (nie tylko `console.error()`)

**LocalStorage API:**
- `localStorage.setItem(key, value)` (zapisz - tylko stringi!)
- `localStorage.getItem(key)` (odczytaj - zwraca string lub null)
- `JSON.stringify()` / `JSON.parse()` (konwersja obiekt ↔ string)
- Persistence across page refreshes (dane zostają po zamknięciu przeglądarki)

**Timers:**
- `setInterval(fn, ms)` (wykonuj funkcję co X milisekund)
- `clearInterval(timerId)` (zatrzymaj timer)
- Timer cleanup (ważne przy re-render - bez tego memory leak!)

**Status:** ✅ ZAKOŃCZONY (22 grudnia 2025, 03:27 UTC)

### Notatki:
- Repo: https://github.com/pxyvrld/groupbuy-platform
- Następny projekt: mobile-first (`min-width` zamiast `max-width`)
- Hamburger menu na mobile (Week 3 - JavaScript)
- Następny krok: React setup (Vite) → przepisanie logiki do React components