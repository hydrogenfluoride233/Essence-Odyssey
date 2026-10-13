@echo off
setlocal
rem ============================================================
rem  Essence Odyssey dev pack - pull upstream, then sync mods
rem  Keep this file next to pack.toml (inside your cloned repo).
rem  Prism / MultiMC: Edit Instance -> Settings -> Custom commands
rem  Prelaunch command:
rem      "D:\EO-Dev\sync-and-play.bat" "$INST_JAVA"
rem ============================================================
set "PACK=%~dp0"
set "PACKDIR=%PACK:~0,-1%"
set "JAVA=%~1"
if "%JAVA%"=="" set "JAVA=java"
set "UPSTREAM=https://github.com/hydrogenfluoride233/Essence-Odyssey.git"

set "GIT="
where git >nul 2>nul && set "GIT=git"
if not defined GIT (
    for /d %%i in ("%LOCALAPPDATA%\GitHubDesktop\app-*") do (
        if exist "%%i\resources\app\git\cmd\git.exe" set "GIT=%%i\resources\app\git\cmd\git.exe"
    )
)
if not defined GIT (
    echo [pack] git not found - pull manually in GitHub Desktop first.
    goto sync
)
"%GIT%" -C "%PACKDIR%" remote get-url upstream >nul 2>nul
if errorlevel 1 "%GIT%" -C "%PACKDIR%" remote add upstream "%UPSTREAM%"
echo [pack] fetching upstream...
"%GIT%" -C "%PACKDIR%" fetch upstream --prune
"%GIT%" -C "%PACKDIR%" merge --ff-only upstream/main
if errorlevel 1 echo [pack] NOTE: local branch has its own commits - merge upstream/main manually (or work on a branch).

:sync
echo [pack] syncing mods and config...
"%JAVA%" -jar "%PACK%packwiz-installer-bootstrap.jar" "%PACK%pack.toml"
endlocal
