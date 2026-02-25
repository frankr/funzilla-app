# Funzilla Mobile Data Integration

## Current approach
- Mobile app reads real activity data from the admin API.
- Onboarding/profile flows remain placeholders for now.
- Home tab shows `ready` activities.
- Detail screen loads full activity data by `externalId`.
- Detail hero uses approved image URLs from admin data.
- Activity website opens in an in-app webview.
- Server operator instructions are in `AGENTS.md`.

## API contract (current)
- List: `GET /api/activities?city=HOU&status=ready&page=1&pageSize=100`
- Detail: `GET /api/activities/:externalId?city=HOU`

Source today:
- Local admin dev server (`fun-admin`) on port `5173`.

## Environment variable
Set API base URL in Funzilla:

```bash
EXPO_PUBLIC_API_BASE_URL=http://localhost:5173
```

If running on a physical phone, use a LAN-reachable host:

```bash
EXPO_PUBLIC_API_BASE_URL=http://<your-mac-lan-ip>:5173
```

## Notes
- Images are loaded from `heroImageUrl` and detail `images[].publicUrl`.
- Address quality, attention status, and readiness flags come from admin API logic.
- This is a bridge for POC; production should use a dedicated mobile backend endpoint.
- PM2 server bootstrap script: `scripts/server/pm2-up-expo.sh` (run via `npm run pm2:up`).

## Full implementation log
See [implementation-status-2026-02-25.md](./implementation-status-2026-02-25.md) for a complete summary of shipped features, UX decisions, current behavior, testing steps, and known follow-ups.
