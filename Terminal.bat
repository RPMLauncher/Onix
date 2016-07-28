:: Onix Terminal
@echo off
echo.
echo Onix Operating System, Copyright (c) 2016
echo Please enter a command.
set/p input=/%username%/Onix/
if %input%==clr call clr.bat
if %input%==help call help.bat
if %input%==info call info.bat
if %input%==atc call atc.bat
if %input%==acc call acc.bat
