# Tech Stack - GroupBuy Platform

**Complete overview of technologies used in the project.**

---

## 📋 TABLE OF CONTENTS
- [Frontend](#frontend)
- [Backend](#backend)
- [DevOps](#devops)
- [Real-time Communication](#real-time-communication)
- [Summary](#summary)

---

## 1️⃣ FRONTEND

### HTML (HyperText Markup Language)
**What it is:** Page structure - defines buttons, text, images.  
**Where I use it:** Campaign lists, forms, navigation.  
**When:** Week 1-2

### CSS (Cascading Style Sheets)
**What it is:** Page styling - colors, sizes, fonts.  
**Where I use it:** Card styling, animations, responsiveness.  
**When:** Week 1-2

### Flexbox & Grid
**What it is:** Layout systems for arranging elements.  
**Where I use it:** Flexbox = card lists, navbar. Grid = dashboard (2x2 grid).  
**When:** Week 1-2

### JavaScript
**What it is:** Programming language - adds interactivity.  
**Where I use it:** Click handlers, API data fetching, form validation, timers.  
**When:** Week 3-4

### TypeScript
**What it is:** JavaScript + types (catches errors before runtime).  
**Where I use it:** Entire React frontend, defining Campaign and User types.  
**When:** Week 5

### React
**What it is:** Library for building UI - split page into reusable components.  
**Where I use it:** Entire frontend (CampaignCard, Timer, ProgressBar, LoginForm).  
**When:** Week 5-6

### MUI (Material-UI)
**What it is:** Pre-built React components (buttons, cards, forms) in Material Design style.  
**Where I use it:** All buttons, cards, forms, dialogs.  
**When:** Week 5-6

### Tailwind CSS
**What it is:** Utility-first CSS - ready-made classes (`bg-white`, `rounded-lg`, `shadow-md`).  
**Where I use it:** Quick styling (margins, padding), responsiveness.  
**When:** Week 5-6

### SCSS (Sass)
**What it is:** CSS with superpowers - variables, nesting, functions.  
**Where I use it:** Custom styles (not covered by MUI/Tailwind), theming.  
**When:** Week 6 (optional)

### RxJS (Reactive Extensions)
**What it is:** Library for managing WebSockets (Observable, auto cleanup, retry logic).  
**Where I use it:** Handling WebSocket in React (live campaign updates).  
**When:** Week 15

---

## 2️⃣ BACKEND

### Java
**What it is:** Backend programming language (business logic, database, authorization).  
**Where I use it:** Entire backend, API endpoints.  
**When:** Week 7-8

### Spring Boot
**What it is:** Framework for building Java apps (REST API, database, security).  
**Where I use it:** Creating endpoints, connecting to PostgreSQL, JWT auth, WebSockets.  
**When:** Week 7-12

### REST API
**What it is:** Frontend ↔ backend communication via HTTP (GET, POST, PUT, DELETE).  
**Where I use it:** GET /campaigns (list), POST /campaigns (create), DELETE /campaigns/5.  
**When:** Week 9-10

### JWT (JSON Web Token)
**What it is:** Authorization token - proof that user is logged in.  
**Where I use it:** Login → token, every request sends token in header.  
**When:** Week 11-12

### OAuth
**What it is:** "Login with Google/Facebook" - user doesn't need to create account.  
**Where I use it:** "Login with Google" button (optional).  
**When:** Week 12 (optional)

### PostgreSQL + JPA/Hibernate (ORM)
**What it is:** Database + Object-Relational Mapping (Java objects → SQL tables).  
**Where I use it:** Tables: users, campaigns, participants. ORM auto-generates SQL.  
**When:** Week 9-10

### Repository/Service/Controller
**What it is:** 3-layer architecture (Controller = HTTP, Service = business logic, Repository = database).  
**Where I use it:** Each feature (campaigns, users, auth) has its own layer.  
**When:** Week 9-10

### Design Patterns
**What it is:** Proven solutions to common problems (Singleton, Factory, Strategy).  
**Where I use it:** Service/Repository are patterns, pricing logic (different pricing strategies).  
**When:** Week 10-11

### Middleware
**What it is:** Code executed BEFORE handling request (JWT validation, CORS, logging).  
**Where I use it:** JWT filter (every request checks token).  
**When:** Week 11

### CORS (Cross-Origin Resource Sharing)
**What it is:** Allowing frontend (localhost:3000) to send requests to backend (localhost:8080).  
**Where I use it:** Spring Boot config (allow localhost:3000).  
**When:** Week 11

### Protected Routes (Frontend) + Endpoint Authorization (Backend)
**What it is:** Pages/endpoints only for logged-in users/admins.  
**Where I use it:** Frontend: Dashboard only for logged-in. Backend: DELETE campaign only admin.  
**When:** Week 11-12

### Backend Testing (JUnit, Mockito)
**What it is:** Automated code testing.  
**Where I use it:** Service layer tests (business logic), Repository tests (database).  
**When:** Week 17

---

## 3️⃣ DEVOPS

### Docker
**What it is:** Package app in container that runs everywhere (Node 22, Java 17).  
**Where I use it:** Frontend, backend, PostgreSQL in containers.  
**When:** Week 18

### Docker Compose
**What it is:** Managing multiple containers at once (frontend + backend + database with one command).  
**Where I use it:** Local development, server deployment.  
**When:** Week 18

### Kubernetes
**What it is:** Container orchestration in production (scaling, load balancing).  
**Where I use it:** Optional (Docker Compose is enough for internship).  
**When:** Week 18 (optional) or SKIP

---

## 4️⃣ REAL-TIME COMMUNICATION

### WebSockets
**What it is:** Bidirectional connection frontend ↔ backend (unlike HTTP: request → response → end).  
**Where I use it:** Live updates - someone joins campaign → everyone sees update (progress bar grows).  
**When:** Week 15

### Spring Scheduler (Cron Jobs)
**What it is:** Tasks executed automatically at specific time/interval (e.g., every minute check expired campaigns).  
**Where I use it:** Automatic campaign closure after deadline.  
**When:** Week 16

---

## ✅ SUMMARY

| Technology | Category | Usage in GroupBuy | Phase |
|------------|----------|-------------------|-------|
| HTML/CSS | Frontend | Structure + styling | 1 |
| JavaScript | Frontend | Interactivity | 1 |
| TypeScript | Frontend | Types in React | 2 |
| React | Frontend | UI components | 2 |
| MUI + Tailwind | Frontend | Components + styling | 2 |
| RxJS | Frontend | WebSocket management | 3 |
| Java + Spring Boot | Backend | REST API | 2 |
| PostgreSQL + JPA | Backend | Database | 2 |
| JWT/OAuth | Backend | Authorization | 2 |
| Repository/Service/Controller | Backend | Architecture | 2 |
| Middleware + CORS | Backend | HTTP filters | 2 |
| WebSockets | Full-stack | Live updates | 3 |
| Spring Scheduler | Backend | Cron jobs | 3 |
| Testing (JUnit) | Backend | Unit tests | 4 |
| Docker + Compose | DevOps | Containerization | 4 |

---

**Last updated:** 2025-11-08  
**Author:** pxyvrld

---

---

# 🇵🇱 POLSKA WERSJA / POLISH VERSION

# Tech Stack - GroupBuy Platform

**Pełny przegląd technologii używanych w projekcie.**

---

## 📋 SPIS TREŚCI
- [Frontend](#frontend)
- [Backend](#backend)
- [DevOps](#devops)
- [Real-time Communication](#real-time-communication)
- [Podsumowanie](#podsumowanie)

---

## 1️⃣ FRONTEND

### HTML (HyperText Markup Language)
**Co to:** Szkielet strony - definiujesz strukturę (przycisk, tekst, obrazek).  
**Gdzie używam:** Lista kampanii, formularze, nawigacja.  
**Kiedy:** Tydzień 1-2

### CSS (Cascading Style Sheets)
**Co to:** Wygląd strony - kolory, rozmiary, fonty.  
**Gdzie używam:** Stylowanie kart, animacje, responsywność.  
**Kiedy:** Tydzień 1-2

### Flexbox i Grid
**Co to:** Układanie elementów (layout).  
**Gdzie używam:** Flexbox = lista kart, navbar. Grid = dashboard (siatka 2x2).  
**Kiedy:** Tydzień 1-2

### JavaScript
**Co to:** Język programowania - dodaje interaktywność.  
**Gdzie używam:** Kliknięcia, pobieranie danych z API, walidacja formularzy, timery.  
**Kiedy:** Tydzień 3-4

### TypeScript
**Co to:** JavaScript + typy (łapie błędy przed uruchomieniem).  
**Gdzie używam:** Cały frontend React, definiowanie typów Campaign, User.  
**Kiedy:** Tydzień 5

### React
**Co to:** Biblioteka do budowania UI - dzielisz stronę na komponenty.  
**Gdzie używam:** Cały frontend (CampaignCard, Timer, ProgressBar, LoginForm).  
**Kiedy:** Tydzień 5-6

### MUI (Material-UI)
**Co to:** Gotowe komponenty React (przyciski, karty, formularze) w stylu Material Design.  
**Gdzie używam:** Wszystkie przyciski, karty, formularze, dialogi.  
**Kiedy:** Tydzień 5-6

### Tailwind CSS
**Co to:** Utility-first CSS - gotowe klasy (`bg-white`, `rounded-lg`, `shadow-md`).  
**Gdzie używam:** Quick styling (marginesy, paddingi), responsywność.  
**Kiedy:** Tydzień 5-6

### SCSS (Sass)
**Co to:** CSS z supermocami - zmienne, zagnieżdżenia, funkcje.  
**Gdzie używam:** Custom style (co nie jest z MUI/Tailwind), tematyzacja.  
**Kiedy:** Tydzień 6 (opcjonalne)

### RxJS (Reactive Extensions)
**Co to:** Biblioteka do zarządzania WebSocketami (Observable, auto cleanup, retry).  
**Gdzie używam:** Obsługa WebSocket w React (live updates kampanii).  
**Kiedy:** Tydzień 15

---

## 2️⃣ BACKEND

### Java
**Co to:** Język programowania backend (logika, baza danych, autoryzacja).  
**Gdzie używam:** Cały backend, endpointy API.  
**Kiedy:** Tydzień 7-8

### Spring Boot
**Co to:** Framework do budowania aplikacji Java (REST API, baza, security).  
**Gdzie używam:** Tworzenie endpointów, łączenie z PostgreSQL, JWT auth, WebSockety.  
**Kiedy:** Tydzień 7-12

### REST API
**Co to:** Komunikacja frontend ↔ backend przez HTTP (GET, POST, PUT, DELETE).  
**Gdzie używam:** GET /campaigns (lista), POST /campaigns (nowa), DELETE /campaigns/5.  
**Kiedy:** Tydzień 9-10

### JWT (JSON Web Token)
**Co to:** Token autoryzacji - dowód że user jest zalogowany.  
**Gdzie używam:** Login → token, każdy request wysyła token w headerze.  
**Kiedy:** Tydzień 11-12

### OAuth
**Co to:** "Login przez Google/Facebook" - user nie musi tworzyć konta.  
**Gdzie używam:** Przycisk "Login with Google" (opcjonalne).  
**Kiedy:** Tydzień 12 (opcjonalne)

### PostgreSQL + JPA/Hibernate (ORM)
**Co to:** Baza danych + Object-Relational Mapping (Java obiekty → SQL tabele).  
**Gdzie używam:** Tabele: users, campaigns, participants. ORM automatycznie generuje SQL.  
**Kiedy:** Tydzień 9-10

### Repository/Service/Controller
**Co to:** Architektura 3-warstwowa (Controller = HTTP, Service = logika, Repository = baza).  
**Gdzie używam:** Każda feature (campaigns, users, auth) ma własną warstwę.  
**Kiedy:** Tydzień 9-10

### Wzorce projektowe
**Co to:** Sprawdzone rozwiązania (Singleton, Factory, Strategy).  
**Gdzie używam:** Service/Repository to wzorce, pricing logic (różne strategie cen).  
**Kiedy:** Tydzień 10-11

### Middleware
**Co to:** Kod wykonywany PRZED obsługą requestu (JWT validation, CORS, logging).  
**Gdzie używam:** Filtr JWT (każdy request sprawdza token).  
**Kiedy:** Tydzień 11

### CORS (Cross-Origin Resource Sharing)
**Co to:** Pozwolenie frontendu (localhost:3000) na wysyłanie requestów do backendu (localhost:8080).  
**Gdzie używam:** Config w Spring Boot (zezwól localhost:3000).  
**Kiedy:** Tydzień 11

### Protected Routes (Frontend) + Autoryzacja endpointów (Backend)
**Co to:** Strony/endpointy tylko dla zalogowanych/adminów.  
**Gdzie używam:** Frontend: Dashboard tylko dla zalogowanych. Backend: DELETE kampanii tylko admin.  
**Kiedy:** Tydzień 11-12

### Testy backendu (JUnit, Mockito)
**Co to:** Automatyczne sprawdzanie czy kod działa.  
**Gdzie używam:** Testy Service layer (logika), Repository (baza danych).  
**Kiedy:** Tydzień 17

---

## 3️⃣ DEVOPS

### Docker
**Co to:** Pakujesz aplikację w kontener który działa wszędzie (Node 22, Java 17).  
**Gdzie używam:** Frontend, backend, PostgreSQL w kontenerach.  
**Kiedy:** Tydzień 18

### Docker Compose
**Co to:** Zarządzanie wieloma kontenerami naraz (frontend + backend + baza jedną komendą).  
**Gdzie używam:** Development lokalnie, deployment na serwerze.  
**Kiedy:** Tydzień 18

### Kubernetes
**Co to:** Orkiestracja kontenerów w produkcji (skalowanie, load balancing).  
**Gdzie używam:** Opcjonalne (Docker Compose wystarczy na staż).  
**Kiedy:** Tydzień 18 (opcjonalne) albo SKIP

---

## 4️⃣ REAL-TIME COMMUNICATION

### WebSockets
**Co to:** Połączenie dwukierunkowe frontend ↔ backend (w przeciwieństwie do HTTP: request → response → koniec).  
**Gdzie używam:** Live updates - ktoś dołącza do kampanii → wszyscy widzą (progress bar rośnie).  
**Kiedy:** Tydzień 15

### Spring Scheduler (Cron Jobs)
**Co to:** Zadania wykonywane automatycznie co X czasu (np. co minutę sprawdź expired campaigns).  
**Gdzie używam:** Automatyczne zamykanie kampanii po deadline.  
**Kiedy:** Tydzień 16

---

## ✅ PODSUMOWANIE

| Technologia | Kategoria | Użycie w GroupBuy | Faza |
|------------|-----------|-------------------|------|
| HTML/CSS | Frontend | Struktura + wygląd | 1 |
| JavaScript | Frontend | Interaktywność | 1 |
| TypeScript | Frontend | Typy w React | 2 |
| React | Frontend | Komponenty UI | 2 |
| MUI + Tailwind | Frontend | Komponenty + styling | 2 |
| RxJS | Frontend | WebSocket management | 3 |
| Java + Spring Boot | Backend | REST API | 2 |
| PostgreSQL + JPA | Backend | Baza danych | 2 |
| JWT/OAuth | Backend | Autoryzacja | 2 |
| Repository/Service/Controller | Backend | Architektura | 2 |
| Middleware + CORS | Backend | Filtry HTTP | 2 |
| WebSockets | Full-stack | Live updates | 3 |
| Spring Scheduler | Backend | Cron jobs | 3 |
| Testy (JUnit) | Backend | Unit tests | 4 |
| Docker + Compose | DevOps | Containerization | 4 |

---

**Ostatnia aktualizacja:** 2025-11-07  
**Autor:** pxyvrld