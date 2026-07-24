---
tags:
  - DLE
  - Плагин
  - PHP
  - База данных
  - бэкап
title: "Установка - DB Manager"
description: "Установка DB Manager 200.1.3 для DLE 20.0 с DevCraft Admin."
keywords: "PHP, DLE, база данных, бэкап, DB Manager, DevCraft, документация"
author: "Maxim Harder"
og:title: "Установка DB Manager"
og:description: "Установка DB Manager 200.1.3 для DLE 20.0 с DevCraft Admin."
og:image: "https://devcraft.club/data/assets/logo_default/devcraftx2.png"
---

# Установка DB Manager

!!! warning "Порядок установки"
    Сначала установите и настройте [DevCraft Admin](../devcraft_admin/install.md) (включая `composer install` в `devcraft/`). Затем устанавливайте DB Manager.

Обзор модуля: [Начало работы](getting_started.md).

### 1. Архив плагина

1. Скачайте `install.zip` из [репозитория](https://github.com/DevCraftClub/DB-Manager) или релиза.
2. Загрузите в **Панель управления DLE → Плагины → Установить плагин**.
3. Убедитесь, что появились:
   - `engine/inc/db_manager.php`
   - `devcraft/src/modules/DbManager/`
   - `devcraft/locales/*/db_manager.xliff`

### 2. Composer autoload

На сервере в каталоге `devcraft/`:

```bash
composer dump-autoload
```

Без этого шага классы модуля `DevCraft\Modules\DbManager\` не будут найдены.

### 3. Первый запуск

1. Откройте в админке DLE: **DB Manager** (`?mod=db_manager`).
2. Перейдите в **Настройки** и сохраните форму (можно с пустыми полями — подставятся значения по умолчанию).
3. Каталог резервных копий по умолчанию: `devcraft/backup` (относительно корня сайта).

## Миграция с MHAdmin

Если у вас уже был DB Manager под MHAdmin, см. отдельную страницу [Миграция](migration.md). Конфигурацию нужно **скопировать вручную**.

## История изменений (200.1.3)

- Миграция на структуру **DevCraft Admin** (модуль `DbManager`, AJAX через `devcraft/ajax.php`).
- Зависимость от DevCraft Admin **≥ 200.4.0**.
- Стандартный путь экспорта: `devcraft/backup`.
- Удалены legacy-пути `engine/inc/maharder/_modules/db_manager/` и `engine/ajax/maharder/db_manager/`.

Полный журнал — в разделе **История изменений** внутри модуля в админке.

## Использование

Перед экспортом сохраните настройки хотя бы один раз. На странице **Управление БД** слева — список таблиц, справа — файлы резервных копий (скачать, удалить, восстановить).

Меню модуля: **Панель** (`dashboard`), **Управление БД** (`manager`), **Настройки**, **История изменений**.

Скачивание резервных копий идёт через `devcraft/ajax.php` (обработчик `DownloadFileHandler` + `FileResponse`, DevCraft ≥ 200.4.0).

## См. также

- [Миграция с MHAdmin](migration.md)
- [DevCraft Admin — установка](../devcraft_admin/install.md)
- [Начало работы с модулями DevCraft](../devcraft_admin/getting_started.md)
