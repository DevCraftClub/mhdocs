---
tags:
  - PHP
  - DLE
  - Плагин
  - Админка
title: "Генератор языковых файлов - DevCraft Admin"
description: "Локализация модулей DevCraft: XLIFF и Translation."
keywords: "PHP, DLE, Плагин, Админка, локализация, DevCraft, документация"
author: "Maxim Harder"
og:title: "Генератор языковых файлов"
og:description: "Локализация модулей DevCraft: XLIFF и Translation."
og:image: "https://devcraft.club/data/assets/logo_default/devcraftx2.png"
---


# Генератор языковых файлов

Переводимые строки в коде оборачиваются в `__()` / `translate()` (см. `devcraft/src/bootstrap/functions.php`). Файлы локалей хранятся вне `src/` — по умолчанию в `devcraft/locales/{locale}/` (настраивается полем **Путь до языков** на странице [Настройка](manage.md)).

![Настройка путей](./assets/settings_paths.png)

## Класс Translation

Загрузка и выбор перевода выполняется через [Translation](../reference/back-end/classes/Translation.md) и мост [TwigTranslatorBridge](../reference/back-end/classes/TwigTranslatorBridge.md) для шаблонов Twig.

Список доступных языков для настроек формируется методом `Translation::getFormattedLanguageList()`.

## Формат файлов

Используются XLIFF-файлы по одному на модуль, например:

```
devcraft/locales/ru_RU/devcraft.xliff
devcraft/locales/ru_RU/my_module.xliff
```

Полный каталог всех XLIFF на сайте в документации не приводится — достаточно знать базовый путь из настроек.

## Извлечение строк для перевода

Для массового сбора фраз из PHP/Twig можно использовать внешние инструменты (например, [translation_generator](https://github.com/DevCraftClub/translation_generator)) с указанием:

- исходного каталога `devcraft/src/`;
- исключений: `vendor/`, `cache/`, `logs/`;
- выходного каталога `devcraft/locales/ru_RU/`;
- имени модуля для файла XLIFF.

## Crowdin

При публикации на Crowdin укажите путь к локалям согласно настройкам проекта. Синхронизация с репозиторием выполняется вручную или через CI — вне scope DevCraft Admin.

## См. также

- [Настройка](manage.md) — поле `locales_path`
- [Глобальные функции](../reference/back-end/index.md)

