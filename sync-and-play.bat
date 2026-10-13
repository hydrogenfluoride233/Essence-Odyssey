@echo off
setlocal EnableDelayedExpansion
rem ============================================================
rem  Essence Odyssey - sync this client from the mod list
rem  (launcher independent: it only needs to know the game folder)
rem
rem  Just double-click this file and wait until it says:
rem      [ok] Sync finished - you can start the game now.
rem  Then start the game with whatever launcher you use.
rem
rem  Optional, only if your game folder is NOT this folder:
rem    - put its path on one line in  game-path.txt  next to this file, or
rem    - run:  sync-and-play.bat "" "D:\your\instance"
rem
rem  If Java cannot be found: drag java.exe onto this file once.
rem ============================================================
set "PACK=%~dp0"
set "PACKDIR=%PACK:~0,-1%"
set "UPSTREAM=https://github.com/hydrogenfluoride233/Essence-Odyssey.git"
set "JAVAFILE=%PACKDIR%\java-path.txt"
set "GAMEFILE=%PACKDIR%\game-path.txt"
set "JAVA=%~1"
set "GAME=%~2"
if not defined JAVA if exist "%JAVAFILE%" set /p JAVA=<"%JAVAFILE%"
if not defined GAME if exist "%GAMEFILE%" set /p GAME=<"%GAMEFILE%"
if not defined GAME set "GAME=%PACKDIR%"

rem ---- find java.exe ----
if not defined JAVA for %%i in (java.exe) do set "JAVA=%%~$PATH:i"
if not defined JAVA (
    for %%r in ("%ProgramFiles%\Java" "%ProgramFiles%\Eclipse Adoptium" "%ProgramFiles%\Zulu" "%ProgramFiles%\BellSoft" "%ProgramFiles%\Amazon Corretto" "%ProgramFiles%\Microsoft" "%LOCALAPPDATA%\Programs\Eclipse Adoptium" "%LOCALAPPDATA%\Programs\Microsoft" "%ProgramFiles(x86)%\Java") do (
        if not defined JAVA if exist "%%~r" for /f "delims=" %%f in ('dir /b /s "%%~r\java.exe" 2^>nul') do if not defined JAVA set "JAVA=%%f"
    )
)
if not defined JAVA (
    for /f "delims=" %%f in ('dir /b /s "%PACKDIR%\..\..\PCL\java.exe" 2^>nul') do if not defined JAVA set "JAVA=%%f"
)
if not defined JAVA (
    echo [x] Java not found.
    echo     Drag your java.exe onto this file once - the path gets remembered.
    pause
    exit /b 1
)
if "%~1"=="" echo %JAVA%>"%JAVAFILE%"
echo [java]   %JAVA%
echo [target] %GAME%

rem ---- update the manifest ----
set "GIT="
where git >nul 2>nul && set "GIT=git"
if not defined GIT (
    for /d %%i in ("%LOCALAPPDATA%\GitHubDesktop\app-*") do (
        if exist "%%i\resources\app\git\cmd\git.exe" set "GIT=%%i\resources\app\git\cmd\git.exe"
    )
)
if not defined GIT (
    echo [1/2] git not found - skipping the manifest update.
    goto sync
)
"%GIT%" -C "%PACKDIR%" remote get-url upstream >nul 2>nul
if errorlevel 1 "%GIT%" -C "%PACKDIR%" remote add upstream "%UPSTREAM%"
echo [1/2] fetching the latest mod list...
"%GIT%" -C "%PACKDIR%" fetch upstream --prune
"%GIT%" -C "%PACKDIR%" merge --ff-only upstream/main
if errorlevel 1 echo       NOTE: your branch has its own commits; upstream/main was not merged.

:sync
echo [2/2] syncing mods and config into the game folder...
echo       ^(first time downloads about 795 MB from CurseForge^)
"%JAVA%" -jar "%PACK%packwiz-installer-bootstrap.jar" --pack-folder "%GAME%" --multimc-folder "%GAME%" "%PACK%pack.toml"
if errorlevel 1 (
    echo [x] Sync failed - check your network, then run this again.
) else (
    echo [ok] Sync finished - you can start the game now.
)
if "%~1"=="" pause
endlocal
