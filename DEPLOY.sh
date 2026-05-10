#!/bin/bash
# ══════════════════════════════════════════════════════════
#  INFIVUS — One-click GitHub deploy
#  Double-click this file on Mac to run it.
#  Make sure all your files are in the same folder as this script.
# ══════════════════════════════════════════════════════════

set -e  # stop on any error

echo ""
echo "══════════════════════════════════"
echo "  INFIVUS DEPLOY SCRIPT"
echo "══════════════════════════════════"
echo ""

# ── Check git is installed ──
if ! command -v git &> /dev/null; then
  echo "❌ Git is not installed."
  echo "   Install it from: https://git-scm.com/download/mac"
  echo "   Then run this script again."
  read -p "Press Enter to close..."
  exit 1
fi

echo "✅ Git found"

# ── Ask for GitHub username ──
echo ""
read -p "👤 Your GitHub username (e.g. CsokeSebastian): " GH_USER
GH_USER="${GH_USER:-CsokeSebastian}"

# ── Ask for repo name ──
read -p "📁 Repository name (press Enter for 'infivus'): " REPO_NAME
REPO_NAME="${REPO_NAME:-infivus}"

# ── Ask for branch ──
read -p "🌿 Branch name (press Enter for 'revamp'): " BRANCH
BRANCH="${BRANCH:-revamp}"

REPO_URL="https://github.com/${GH_USER}/${REPO_NAME}.git"

echo ""
echo "Will push to: $REPO_URL (branch: $BRANCH)"
echo ""
read -p "Is this correct? (press Enter to continue, Ctrl+C to cancel): "

# ── Get the folder this script lives in ──
SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
cd "$SCRIPT_DIR"

echo ""
echo "📁 Working in: $SCRIPT_DIR"
echo ""

# ── Rename html file to index.html if needed ──
if [ -f "infivus-redesign.html" ] && [ ! -f "index.html" ]; then
  cp "infivus-redesign.html" "index.html"
  echo "✅ Renamed infivus-redesign.html → index.html"
elif [ -f "index.html" ]; then
  echo "✅ index.html already exists"
else
  echo "❌ Could not find infivus-redesign.html or index.html"
  echo "   Make sure the HTML file is in the same folder as this script."
  read -p "Press Enter to close..."
  exit 1
fi

# ── Init or use existing git repo ──
if [ ! -d ".git" ]; then
  echo "🔧 Initialising git repository..."
  git init
  git remote add origin "$REPO_URL"
  echo "✅ Git initialised"
else
  echo "✅ Git repo already exists"
  # Make sure remote is set correctly
  git remote set-url origin "$REPO_URL" 2>/dev/null || git remote add origin "$REPO_URL"
fi

# ── Create/switch to branch ──
git checkout -B "$BRANCH" 2>/dev/null || git checkout "$BRANCH"
echo "✅ On branch: $BRANCH"

# ── Stage all files ──
git add .
echo "✅ Files staged"

# ── Commit ──
TIMESTAMP=$(date '+%Y-%m-%d %H:%M')
git commit -m "feat: Infivus revamp — static site deploy ($TIMESTAMP)" 2>/dev/null || echo "✅ Nothing new to commit"

# ── Push ──
echo ""
echo "🚀 Pushing to GitHub..."
echo "   (GitHub will ask for your username + password/token)"
echo "   If you haven't set up a token, go to:"
echo "   github.com → Settings → Developer settings → Personal access tokens"
echo ""

git push -u origin "$BRANCH" --force

echo ""
echo "══════════════════════════════════"
echo "  ✅ DONE! Code is on GitHub."
echo "══════════════════════════════════"
echo ""
echo "Next step — set up Vercel:"
echo "  1. Go to vercel.com → your Infivus project → Settings → Git"
echo "  2. Change Production Branch to: $BRANCH"
echo "  3. Set Framework to: Other"
echo "  4. Set Build Command to: (empty)"
echo "  5. Set Output Directory to: . (a single dot)"
echo "  6. Click Save — Vercel will redeploy automatically"
echo ""
read -p "Press Enter to close this window..."
