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