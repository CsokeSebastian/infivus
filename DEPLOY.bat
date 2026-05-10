@echo off
REM ══════════════════════════════════════════════════════════
REM  INFIVUS — One-click GitHub deploy (Windows)
REM  Double-click this file to run it.
REM  Make sure all your files are in the same folder as this script.
REM ══════════════════════════════════════════════════════════

echo.
echo ══════════════════════════════════
echo   INFIVUS DEPLOY SCRIPT
echo ══════════════════════════════════
echo.

REM ── Check git ──
git --version >nul 2>&1
IF %ERRORLEVEL% NEQ 0 (
  echo ❌ Git is not installed.
  echo    Install it from: https://git-scm.com/download/win
  echo    Then run this script again.
  pause
  exit /b 1
)
echo ✅ Git found

REM ── Ask for details ──
echo.
set /p GH_USER="👤 Your GitHub username (e.g. CsokeSebastian): "
IF "%GH_USER%"=="" set GH_USER=CsokeSebastian

set /p REPO_NAME="📁 Repository name (press Enter for 'infivus'): "
IF "%REPO_NAME%"=="" set REPO_NAME=infivus

set /p BRANCH="🌿 Branch name (press Enter for 'revamp'): "
IF "%BRANCH%"=="" set BRANCH=revamp

set REPO_URL=https://github.com/%GH_USER%/%REPO_NAME%.git

echo.
echo Will push to: %REPO_URL% (branch: %BRANCH%)
echo.
pause

REM ── Move to script folder ──
cd /d "%~dp0"
echo 📁 Working in: %CD%
echo.

REM ── Rename html if needed ──
IF EXIST "infivus-redesign.html" (
  IF NOT EXIST "index.html" (
    copy "infivus-redesign.html" "index.html"
    echo ✅ Renamed infivus-redesign.html to index.html
  )
) ELSE IF NOT EXIST "index.html" (
  echo ❌ Could not find infivus-redesign.html or index.html
  echo    Make sure the HTML file is in the same folder as this script.
  pause
  exit /b 1
)

REM ── Init git ──
IF NOT EXIST ".git" (
  echo 🔧 Initialising git...
  git init
  git remote add origin %REPO_URL%
  echo ✅ Git initialised
) ELSE (
  echo ✅ Git repo exists
  git remote set-url origin %REPO_URL%
)

REM ── Branch ──
git checkout -B %BRANCH%
echo ✅ On branch: %BRANCH%

REM ── Stage + commit ──
git add .
git commit -m "feat: Infivus revamp — static site deploy"
echo ✅ Committed

REM ── Push ──
echo.
echo 🚀 Pushing to GitHub...
echo    GitHub will ask for your username + password or token.
echo.
git push -u origin %BRANCH% --force

echo.
echo ══════════════════════════════════
echo   ✅ DONE! Code is on GitHub.
echo ══════════════════════════════════
echo.
echo Next — set up Vercel:
echo   1. vercel.com → Infivus project → Settings → Git
echo   2. Change Production Branch to: %BRANCH%
echo   3. Framework: Other
echo   4. Build Command: (leave empty)
echo   5. Output Directory: . (a single dot)
echo   6. Save — Vercel redeploys automatically
echo.
pause
