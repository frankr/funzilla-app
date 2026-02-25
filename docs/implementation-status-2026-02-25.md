# Funzilla Mobile Implementation Status (February 25, 2026)

This document captures what is implemented in the mobile app repo (`funzilla-app`) and how it currently integrates with admin data.

## Goal implemented in this phase
- Replace prototype-only content with real activity data from the admin system.
- Make activity detail pages consume live content and approved images.
- Keep onboarding/auth flows as placeholders for now.

## Data and integration architecture
- Mobile app reads directly from admin API (POC bridge).
- Base URL is configured with `EXPO_PUBLIC_API_BASE_URL`.
- Current API endpoints used:
  - `GET /api/activities?city=HOU&status=ready&page=1&pageSize=100`
  - `GET /api/activities/:externalId?city=HOU`
- Data client lives in `services/activityApi.ts`.
- City defaults to `HOU`.

## Features completed

### 1) Home tab wired to real activities
- Home list and top carousel now use API data instead of mock arrays.
- Cards open detail by real `externalId`.
- Hero image on cards uses `heroImageUrl` when available.

Files:
- `app/(tabs)/index.tsx`
- `services/activityApi.ts`

### 2) Detail page wired to real activity + approved images
- Detail route parameter `id` is treated as activity `externalId`.
- Detail loads full activity payload from API.
- Hero section pulls approved images (`images[].status === "ready"` with `publicUrl`).
- Hero supports swipe and tap navigation:
  - Horizontal paged carousel
  - Right/left arrow controls
  - Dot indicators
- If no ready image exists, fallback image is used.

Files:
- `app/detail/[id].tsx`
- `services/activityApi.ts`

### 3) In-app website view
- "Open Website" now navigates to an internal webview screen.
- No external browser required for activity website browsing.

Files:
- `app/webview.tsx`
- `app/_layout.tsx`
- `app/detail/[id].tsx`
- `package.json` (`react-native-webview`)

### 4) Detail page UX/layout updates
- Resolved scroll/occlusion behavior so content scrolls naturally over hero.
- Title section remains sticky while scrolling.
- Action buttons ("Directions", "Open Website") moved into the content flow.
- Back button moved to top-left overlay on hero (standard convention).

Files:
- `app/detail/[id].tsx`

### 5) End-user content cleanup (admin metadata removed)
- Removed admin statuses and review wording from user-facing UI.
- Removed display of internal activity ID on detail.
- Removed image count display (`x/5`) on end-user cards/detail stats.
- Removed admin-style "Ready", "Ready for Live", and "Needs Attention" badges from end-user surfaces.

Files:
- `app/(tabs)/index.tsx`
- `app/detail/[id].tsx`

### 6) Map tab deep link fix
- Prototype map CTA now opens a real detail route (`/detail/HT00200`) for testing.

File:
- `app/(tabs)/map.tsx`

## Environment and run setup
- `.env.example` includes:
  - `EXPO_PUBLIC_API_BASE_URL=http://localhost:5173`
- For device testing on same LAN, set:
  - `EXPO_PUBLIC_API_BASE_URL=http://<mac-lan-ip>:5173`
- In this setup, admin API has been served from:
  - `http://192.168.6.152:5173`

## How to test quickly
1. Start `fun-admin` so API is reachable on `:5173`.
2. In `funzilla-app`, set `EXPO_PUBLIC_API_BASE_URL` in `.env`.
3. Run Expo:
   - `npm run start` (or existing dev script)
4. Validate:
   - Home shows real Houston activities.
   - Tap any card -> detail loads real content.
   - Hero supports swipe + right/left arrow taps.
   - "Open Website" opens in in-app webview.
   - No admin-ready/review/internal-ID indicators visible.

## Known gaps / next phase
- Map screen remains mostly prototype visuals and static pins.
- Filtering/sorting/search behavior on mobile is still basic.
- Authentication/onboarding/profile flows are still placeholder.
- Production architecture should move from direct admin API access to a dedicated mobile backend/BFF with caching and auth controls.

## Changed files in this phase
- `.env.example`
- `app/(tabs)/index.tsx`
- `app/(tabs)/map.tsx`
- `app/_layout.tsx`
- `app/detail/[id].tsx`
- `app/webview.tsx`
- `docs/mobile-data-integration.md`
- `docs/implementation-status-2026-02-25.md`
- `services/activityApi.ts`
- `package.json`
- `package-lock.json`
