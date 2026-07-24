---
tags:
  - DLE
  - PHP
  - Плагин
  - Теги
title: "Установка - TagsAdd (Пользовательские теги)"
description: "Установка TagsAdd 200.3.1 для DLE 20.0 с DevCraft Admin."
keywords: "PHP, DLE, TagsAdd, пользовательские теги, DevCraft, документация"
author: "Maxim Harder"
og:title: "Установка TagsAdd"
og:description: "Установка TagsAdd 200.3.1 для DLE 20.0 с DevCraft Admin."
og:image: "https://devcraft.club/data/assets/logo_default/devcraftx2.png"
---

# Установка TagsAdd

!!! warning "Порядок установки"
    Сначала установите и настройте [DevCraft Admin](../devcraft_admin/install.md). Затем устанавливайте TagsAdd.

Обзор модуля: [Начало работы](getting_started.md).

### 1. Архив плагина

1. Скачайте `install.zip` из [репозитория](https://github.com/DevCraftClub/tagsadd) (ветка `releases/200.3.0` / содержимое `upload/`) или со страницы загрузки.
2. Загрузите в **Панель управления DLE → Плагины → Установить плагин**.
3. Убедитесь, что появились:
   - `engine/inc/tags_add.php`
   - `engine/modules/devcraft/tags_add.php`
   - `devcraft/src/modules/TagsAdd/`
   - `templates/Default/devcraft/tags_add/` (или скопируйте в свою тему)

Legacy-пути `engine/inc/maharder/`, `engine/modules/maharder/tagsadd.php` и `install.php` в корне **не используются** и в пакет 200.x не входят.

### 2. Composer autoload

В каталоге `devcraft/`:

```bash
composer dump-autoload
```

### 3. Первый запуск

1. Откройте `?mod=tags_add` в админке DevCraft.
2. Таблица `{prefix}_tags_add` создаётся Cycle ORM по модели при первом обращении.
3. Сохраните [настройки](settings.md) (получатель PM, шаблоны ЛС, куда вставлять теги).
4. Подключите модуль в [теме](guides/theme.md).

## См. также

- [Настройки](settings.md)
- [Подключение в теме](guides/theme.md)
- [История изменений](changelog.md)
