---
tags:
  - Инструкция
  - Установка
  - DLE
  - DevCraft
  - Composer
title: "Установка плагинов"
description: "Как установить почти любой плагин DevCraft для DLE 20."
keywords: "установка, плагин, DLE, DevCraft, Composer"
author: "Maxim Harder"
og:title: "Установка плагинов"
og:description: "Общая инструкция по установке плагинов DevCraft"
og:image: "https://devcraft.club/data/assets/logo_default/devcraftx2.png"
twitter:title: "Установка плагинов"
twitter:description: "Общая инструкция по установке плагинов DevCraft"
---

# Установка плагинов

Большинство плагинов DevCraft ставятся одинаково. Ниже — общая схема. Если у модуля есть своя страница «Установка» — смотрите её: там могут быть особые шаги.

## Требования

- **DLE** 20.0
- **PHP** 8.3 или новее
- Для модулей на базе DevCraft сначала установите [DevCraft Admin](../dev/dle/devcraft_admin/install.md)

## Три способа поставить плагин

### 1. Скрипт сборки архива

В комплекте разработки часто есть `install_archive.bat` (Windows) или `install_archive.sh` (Linux/macOS).

**Windows:** установите [7-Zip](https://www.7-zip.org/download.html), запустите `install_archive.bat`, затем загрузите получившийся zip в менеджер плагинов DLE.

**Linux / macOS:**

```bash
chmod +x install_archive.sh
./install_archive.sh
```

После скрипта установите собранный архив через **Панель управления → Плагины**.

### 2. Собрать zip самостоятельно

Упакуйте содержимое папки `upload/` в zip так, чтобы в **корне** архива были:

- файл `install.xml`
- нужные каталоги: обычно `engine/`, часто также `devcraft/` и шаблоны темы

Формат архива — **zip**. Затем установите его через менеджер плагинов DLE.

### 3. Скопировать файлы на сайт

Скопируйте содержимое `upload/` в корень сайта (структуру папок сохраните), затем установите или включите плагин в менеджере плагинов DLE.

## Composer — библиотеки PHP

Многие модули DevCraft используют сторонние PHP-библиотеки. Они лежат в папке `devcraft/` на сайте.

Обычно зависимости:

- **ставятся сами** скриптом установки, или
- **через интерфейс** DevCraft Admin (раздел работы с Composer / предупреждение в админке, если библиотек не хватает).

В терминал на сервере заходить нужно только если автоматически не получилось (нет shell, ошибка, другая версия PHP). Подробности: [Composer](composer.md).

## См. также

- [Composer](composer.md)
- [PHP intl](php_intl.md)
- [Установка DevCraft Admin](../dev/dle/devcraft_admin/install.md)
