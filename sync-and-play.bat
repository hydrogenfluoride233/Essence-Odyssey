@echo off
setlocal
rem ============================================================
rem  Essence Odyssey - sync this client from the pack manifest.
rem  Double-click it, or call it from a launcher and pass java.exe.
rem  Guide (Chinese): see the sync guide in the .github folder.
rem ============================================================
rem read java-path.txt / game-path.txt as UTF-8 (what Notepad saves); the old code page comes back at the end
for /f "tokens=*" %%a in ('chcp') do for %%b in (%%a) do set "OLDCP=%%b"
if defined OLDCP set "OLDCP=%OLDCP:.=%"
chcp 65001 >nul
rem stop at the end for double-click and drag-and-drop; stay quiet when a launcher runs it,
rem i.e. it passes the game folder as the second argument or sets INST_MC_DIR / INST_JAVA (Prism and other MultiMC-style launchers)
set "HOLD=1"
if not "%~2"=="" set "HOLD="
if defined INST_MC_DIR set "HOLD="
if defined INST_JAVA set "HOLD="
set "PACK=%~dp0"
set "PACKDIR=%PACK:~0,-1%"
set "UPSTREAM=https://github.com/hydrogenfluoride233/Essence-Odyssey.git"
set "JAVAFILE=%PACKDIR%\java-path.txt"
set "GAMEFILE=%PACKDIR%\game-path.txt"
set "JAVA=%~1"
set "GAME=%~2"
if not defined JAVA if exist "%JAVAFILE%" set /p JAVA=<"%JAVAFILE%"
if not defined GAME if exist "%GAMEFILE%" set /p GAME=<"%GAMEFILE%"
set "P=%JAVA%"
call :tidy
set "JAVA=%P%"
set "P=%GAME%"
call :tidy
set "GAME=%P%"
if not defined GAME set "GAME=%PACKDIR%"

rem ---- find java.exe ----
rem a remembered path goes stale when Java is updated or removed: look again
if defined JAVA if not exist "%JAVA%" echo       NOTE: %JAVA% is missing - looking for Java again.
if defined JAVA if not exist "%JAVA%" set "JAVA="
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
    set "RC=1"
    goto end
)
rem remember the path, including one passed in or dropped onto this file
>"%JAVAFILE%" echo %JAVA%
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
if errorlevel 1 (
    echo       NOTE: could not fetch from GitHub - check your network; syncing with the mod list already here.
    goto sync
)
"%GIT%" -C "%PACKDIR%" merge --ff-only upstream/main
if errorlevel 1 echo       NOTE: your branch has its own commits; upstream/main was not merged.

:sync
echo [2/2] syncing mods and config into the game folder...
echo       ^(first time downloads about 795 MB from CurseForge^)
"%JAVA%" -jar "%PACK%packwiz-installer-bootstrap.jar" --pack-folder "%GAME%" --multimc-folder "%GAME%" "%PACK%pack.toml"
set "RC=%ERRORLEVEL%"
if "%RC%"=="0" (
    echo [ok] Sync finished - you can start the game now.
) else (
    echo [x] Sync failed - check your network, then run this again.
)

:end
if defined HOLD pause
if defined OLDCP chcp %OLDCP% >nul 2>nul
endlocal & exit /b %RC%

rem ---- tidy the path in P: drop quotes, a UTF-8 BOM in front of D:\ or \\, and trailing backslashes ----
rem (a trailing backslash would escape the closing quote of "%GAME%" on java's command line)
:tidy
if not defined P goto :eof
set "P=%P:"=%"
if not defined P goto :eof
if "%P:~2,1%"==":" set "P=%P:~1%"
if "%P:~1,2%"=="\\" set "P=%P:~1%"
:tidy_tail
if not defined P goto :eof
if not "%P:~-1%"=="\" goto :eof
set "P=%P:~0,-1%"
if "%P:~-1%"==":" set "P=%P%\."
goto tidy_tail
