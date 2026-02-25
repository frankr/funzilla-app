#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/../.." && pwd)"
cd "$ROOT_DIR"

APP_NAME="${APP_NAME:-funzilla-expo}"
ENV_FILE="${ENV_FILE:-.env.server}"
DEFAULT_EXPO_PORT="${DEFAULT_EXPO_PORT:-8081}"
EXPO_HOST="${EXPO_HOST:-lan}"

extract_first_port() {
  local raw="$1"
  local match
  match="$(printf '%s\n' "$raw" | grep -Eo '[0-9]{2,5}' | head -n 1 || true)"
  if [[ -n "$match" ]]; then
    printf '%s\n' "$match"
    return 0
  fi
  return 1
}

next_port_from_portman() {
  if ! command -v portman >/dev/null 2>&1; then
    return 1
  fi

  local output=""
  output="$(portman next 2>/dev/null || true)"
  if extract_first_port "$output" >/dev/null 2>&1; then
    extract_first_port "$output"
    return 0
  fi

  output="$(portman --next 2>/dev/null || true)"
  if extract_first_port "$output" >/dev/null 2>&1; then
    extract_first_port "$output"
    return 0
  fi

  output="$(portman get next 2>/dev/null || true)"
  if extract_first_port "$output" >/dev/null 2>&1; then
    extract_first_port "$output"
    return 0
  fi

  return 1
}

next_free_port_fallback() {
  local start_port="$1"
  local port="$start_port"
  while lsof -nP -iTCP:"$port" -sTCP:LISTEN -t >/dev/null 2>&1; do
    port=$((port + 1))
  done
  printf '%s\n' "$port"
}

if [[ -f "$ENV_FILE" ]]; then
  set -a
  # shellcheck disable=SC1090
  source "$ENV_FILE"
  set +a
fi

EXPO_PORT="${EXPO_PORT:-}"
EXPO_PUBLIC_API_BASE_URL="${EXPO_PUBLIC_API_BASE_URL:-}"

if [[ -z "$EXPO_PORT" ]]; then
  if EXPO_PORT="$(next_port_from_portman)"; then
    :
  else
    EXPO_PORT="$(next_free_port_fallback "$DEFAULT_EXPO_PORT")"
  fi
fi

if [[ -z "$EXPO_PUBLIC_API_BASE_URL" ]]; then
  echo "EXPO_PUBLIC_API_BASE_URL is required."
  echo "Example:"
  echo "  EXPO_PUBLIC_API_BASE_URL=https://admin.yourdomain.com npm run pm2:up"
  exit 1
fi

cat > "$ENV_FILE" <<EOF
EXPO_PORT=$EXPO_PORT
EXPO_HOST=$EXPO_HOST
EXPO_PUBLIC_API_BASE_URL=$EXPO_PUBLIC_API_BASE_URL
EOF

cat > .env <<EOF
EXPO_PUBLIC_API_BASE_URL=$EXPO_PUBLIC_API_BASE_URL
EOF

if ! command -v pm2 >/dev/null 2>&1; then
  echo "pm2 is not installed. Install it first: npm i -g pm2"
  exit 1
fi

echo "[funzilla-expo] installing dependencies"
npm ci

echo "[funzilla-expo] starting PM2 process $APP_NAME on port $EXPO_PORT (host mode: $EXPO_HOST)"
if pm2 describe "$APP_NAME" >/dev/null 2>&1; then
  EXPO_PORT="$EXPO_PORT" EXPO_HOST="$EXPO_HOST" EXPO_PUBLIC_API_BASE_URL="$EXPO_PUBLIC_API_BASE_URL" \
    pm2 restart "$APP_NAME" --update-env
else
  EXPO_PORT="$EXPO_PORT" EXPO_HOST="$EXPO_HOST" EXPO_PUBLIC_API_BASE_URL="$EXPO_PUBLIC_API_BASE_URL" \
    pm2 start npm --name "$APP_NAME" -- run start:pm2
fi

pm2 save

echo
echo "funzilla-expo is running."
echo "  PM2 name: $APP_NAME"
echo "  Port: $EXPO_PORT"
echo "  Host mode: $EXPO_HOST"
echo "  API base URL: $EXPO_PUBLIC_API_BASE_URL"
