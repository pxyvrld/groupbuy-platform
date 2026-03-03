# Database Schema - GroupBuy Platform

## Tables

### 1. USERS
- Stores user accounts (login, password, profile info)
- Role:  user or admin

### 2. CAMPAIGNS
- Group buying campaigns created by organizers
- Tracks pricing, deadline, status, participants count

### 3. CATEGORIES
- Campaign categories (Food, Beauty, Electronics, etc.)
- Each has icon and color for UI

### 4. PARTICIPANTS
- Junction table:  which users joined which campaigns
- Tracks payment status (reserved → payment_pending → paid)
- Model B: "Pay Final Price" (users pay after campaign ends)

### 5. PRICE_TIERS
- Different prices based on number of participants
- Example: 1-4 people = 50 PLN, 5-9 = 40 PLN, 10+ = 30 PLN

## Relationships

```
USERS (1) ───> CAMPAIGNS (N) [organizer_id]
USERS (1) ───> PARTICIPANTS (N) [user_id]
CATEGORIES (1) ───> CAMPAIGNS (N) [category_id]
CAMPAIGNS (1) ───> PARTICIPANTS (N) [campaign_id]
CAMPAIGNS (1) ───> PRICE_TIERS (N) [campaign_id]
```

## Payment Flow (Model B)

1. User joins campaign → `payment_status = 'reserved'`
2. Campaign deadline passes → `payment_status = 'payment_pending'`, `price_locked` = final price
3. User pays within 48h → `payment_status = 'paid'`
4. User doesn't pay → `payment_status = 'expired'`