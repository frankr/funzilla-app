# Funzilla App Operator Guide (Codex First Read)

Read this file first when operating the mobile app server process.

## Expected directory layout

```text
~/funzilla/
  fun-admin/
  funzilla-app/
  fun-crawl/
```

`fun-admin` is the orchestrator for full stack startup.

## Preferred way to start everything

From `fun-admin`:

```bash
cd ~/funzilla/fun-admin
EXPO_PUBLIC_API_BASE_URL="https://admin.yourdomain.com" npm run pm2:up:stack
```

## If running mobile service directly

```bash
cd ~/funzilla/funzilla-app
EXPO_PUBLIC_API_BASE_URL="https://admin.yourdomain.com" npm run pm2:up
```

Optional tunnel mode:

```bash
cd ~/funzilla/funzilla-app
EXPO_HOST=tunnel EXPO_PUBLIC_API_BASE_URL="https://admin.yourdomain.com" npm run pm2:up
```

## PM2 process name
- `funzilla-expo`

Useful commands:

```bash
pm2 status
pm2 logs funzilla-expo
pm2 restart funzilla-expo --update-env
pm2 save
```

## Important note

`expo start` under PM2 is for development/test workflows.
Production distribution should use EAS builds/updates and a stable API backend.
