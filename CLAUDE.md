# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Funzilla is a mobile-first React Native app (Expo) for discovering kid-friendly activities. It features onboarding with interest selection, a home feed with activity cards, map discovery, and activity detail/booking views.

The original web prototype is archived in `prototype/` for visual reference.

## Commands

- `npx expo start` — Start Expo dev server
- `npx expo start --ios` — Start on iOS simulator
- `npx expo start --android` — Start on Android emulator
- `npx expo start --web` — Start web version

No linting or testing tools are configured.

## Architecture

**Tech stack:** React Native (Expo SDK 54), TypeScript 5.9, Expo Router v6 (file-based routing), NativeWind v4 (Tailwind CSS for RN), React 19.

**Project structure:**
```
app/                    # Expo Router screens (file-based routing)
  _layout.tsx           # Root Stack layout (fonts, AppProvider)
  index.tsx             # Welcome screen (onboarding start)
  interests.tsx         # Interest selection
  setup.tsx             # Child profile setup
  (tabs)/               # Tab navigator group
    _layout.tsx         # Tab navigator config (Home, Map, Saved, Profile)
    index.tsx           # Home feed
    map.tsx             # Map discovery
    saved.tsx           # Saved activities (placeholder)
    profile.tsx         # User profile (placeholder)
  detail/
    [id].tsx            # Activity detail/booking
components/             # Shared components
  Icon.tsx              # Icon wrapper (MaterialIcons + MaterialCommunityIcons)
constants/              # Static data and design tokens
  Colors.ts             # Color palette
  MockData.ts           # Hardcoded activity data and image URLs
  Typography.ts         # Font family name constants
contexts/               # React Context providers
  AppContext.tsx         # Shared state (interests, child profiles, active context)
prototype/              # Archived web prototype (React + Vite + Tailwind CDN)
```

**Routing (Expo Router):**
- `/` → Welcome (onboarding)
- `/interests` → Interest selection
- `/setup` → Child profile setup
- `/(tabs)` → Main tab navigator (Home, Map, Saved, Profile)
- `/detail/[id]` → Activity detail (modal over tabs)

**State management:** React Context (`AppContext`) for shared state (selected interests, child profiles, active child toggle). Local `useState` for UI-specific state.

**Styling:** NativeWind v4 with Tailwind CSS v3. Design tokens in `tailwind.config.js`:
- Colors: primary `#2b9dee`, primary-light `#eef8ff`, secondary-mint `#4ade80`, secondary-orange `#fb923c`
- Fonts: Plus Jakarta Sans (5 weights loaded via `@expo-google-fonts`)
- Custom font families: `font-sans`, `font-sans-medium`, `font-sans-semibold`, `font-sans-bold`, `font-sans-extrabold`

**Icons:** `@expo/vector-icons` (MaterialIcons + MaterialCommunityIcons), wrapped in `components/Icon.tsx`.

**Images:** All from external Google CDN URLs, rendered with `expo-image`.

**Path alias:** `@/*` maps to the project root (configured in `tsconfig.json`).
