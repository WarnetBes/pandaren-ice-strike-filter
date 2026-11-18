@echo off
chcp 65001 >nul
echo ================================================================
echo  PoE2 Loot Filters - ALL 17 (3 duo/solo/currency + 14 class) - INSTALL
echo ================================================================
set "DEST=%USERPROFILE%\Documents\My Games\Path of Exile 2"
if not exist "%DEST%" (
  echo [ERROR] folder not found: "%DEST%"
  pause
  exit /b 1
)
copy /Y "%~dp0*.filter" "%DEST%\" || (echo [ERROR] copy failed & pause & exit /b 1)
echo [OK] all filters copied to "%DEST%".
echo.
echo IN GAME: Options -^> Game/UI -^> Loot Filter -^> pick one -^> Reload
echo  class_<class>_<leveling^|endgame>  = per-class, campaign/endgame
echo  ice_strike_duet / solo_monk / currency  = duo builds
echo.
pause
