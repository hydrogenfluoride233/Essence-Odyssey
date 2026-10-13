#!/bin/bash
# ============================================================
#  Essence Odyssey - sync this client from the pack manifest.
#  macOS: double-click this file, or in Terminal:
#      bash sync-and-play.command
#  Linux: bash sync-and-play.command
#  Guide (Chinese): see 同步说明.md in the repo root.
# ============================================================
set -u
PACK="$(cd "$(dirname "$0")" && pwd)"
UPSTREAM="https://github.com/hydrogenfluoride233/Essence-Odyssey.git"

GAME=""
if [ -f "$PACK/game-path.txt" ]; then GAME="$(head -n 1 "$PACK/game-path.txt" | tr -d '\r')"; fi
if [ -n "${1:-}" ]; then GAME="$1"; fi
if [ -z "$GAME" ]; then GAME="$PACK"; fi

# ---- java ----
JAVA=""
if command -v java >/dev/null 2>&1; then
    JAVA="java"
elif [ -x /usr/libexec/java_home ] && [ -n "$(/usr/libexec/java_home 2>/dev/null)" ]; then
    JAVA="$(/usr/libexec/java_home)/bin/java"
fi
if [ -z "$JAVA" ]; then
    echo "[x] Java not found."
    echo "    macOS: install a JDK (e.g. Temurin 21) or set JAVA_HOME."
    if [ -t 0 ]; then read -r -p "Press Enter to close... " _; fi
    exit 1
fi
echo "[java]   $JAVA"
echo "[target] $GAME"

# ---- update the manifest ----
if command -v git >/dev/null 2>&1; then
    git -C "$PACK" remote get-url upstream >/dev/null 2>&1 || git -C "$PACK" remote add upstream "$UPSTREAM"
    echo "[1/2] fetching the latest mod list..."
    git -C "$PACK" fetch upstream --prune
    git -C "$PACK" merge --ff-only upstream/main || echo "      NOTE: your branch has its own commits; upstream/main was not merged."
else
    echo "[1/2] git not found - skipping the manifest update."
fi

# ---- sync ----
echo "[2/2] syncing mods and config into the game folder..."
echo "      (first time downloads about 795 MB from CurseForge)"
"$JAVA" -jar "$PACK/packwiz-installer-bootstrap.jar" --pack-folder "$GAME" --multimc-folder "$GAME" "$PACK/pack.toml"
if [ $? -eq 0 ]; then
    echo "[ok] Sync finished - you can start the game now."
else
    echo "[x] Sync failed - check your network, then run this again."
fi
if [ -t 0 ]; then read -r -p "Press Enter to close... " _; fi
