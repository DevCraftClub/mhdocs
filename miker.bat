@echo off

set version=%1

echo mkdocs build
echo mike deploy --push --update-aliases %version% latest
echo mike set-default --push latest