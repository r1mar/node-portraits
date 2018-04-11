@echo off
psql -d postgres -a -f %CD%\src\db-install.pgsql

