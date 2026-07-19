#!/bin/bash

version=$1

# Собираем документацию с помощью mkdocs
mkdocs build

# Деплоим указанную версию и обновляем алиас 'latest'
mike deploy --push --update-aliases "$version" latest

# Устанавливаем 'latest' как версию по умолчанию
mike set-default --push latest