set/p input= CMD> 
if %input%==help echo None
if %input%==clr echo None
if %input%==info echo None
if %input%==atc echo [-cmd]
if %input%==acc echo [-user] [-pass]
call Terminal.bat
