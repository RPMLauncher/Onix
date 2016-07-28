set/p input=Username>  
if %input%==Root goto pass
:pass
set/p input=Password> 
if %input%==Onix goto next
call Terminal.bat
