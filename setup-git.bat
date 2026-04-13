@echo off
echo Iniciando conexao com o GitHub...
git init
git remote add origin https://github.com/WalaceRamosdev/energia-solar.git
git add .
git commit -m "Initial commit - SolarMax project setup with layout improvements"
git branch -M main
git push -u origin main
echo.
echo Repositorio conectado e arquivos enviados com sucesso!
pause
