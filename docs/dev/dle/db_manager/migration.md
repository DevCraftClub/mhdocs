---
tags:
  - DLE
  - Плагин
  - PHP
  - База данных
  - миграция
title: "Миграция - DB Manager"
description: "Перенос DB Manager с MHAdmin на DevCraft Admin 200.1.3."
keywords: "PHP, DLE, DB Manager, миграция, DevCraft, MHAdmin"
author: "Maxim Harder"
og:title: "Миграция DB Manager"
og:description: "Перенос DB Manager с MHAdmin на DevCraft Admin."
og:image: "https://devcraft.club/data/assets/logo_default/devcraftx2.png"
---

# Миграция DB Manager с MHAdmin

Версия **200.1.3** работает только с [DevCraft Admin](../devcraft_admin/install.md) **≥ 200.4.0**. Автоматический перенос настроек **не выполняется**.

Общий контекст миграции с MHAdmin: [Миграция на DevCraft Admin](../devcraft_admin/migration.md).

## Соответствие путей

| Legacy (MHAdmin) | DevCraft (200.1.3) |
| ---------------- | ------------------- |
| `engine/inc/maharder/_modules/db_manager/` | `devcraft/src/modules/DbManager/` |
| `engine/inc/maharder/_config/db_manager.json` | `devcraft/config/db_manager.json` |
| `engine/inc/maharder/_templates/db_manager/` | `devcraft/src/modules/DbManager/templates/` |
| `engine/inc/maharder/_locales/*/db_manager.xliff` | `devcraft/locales/*/db_manager.xliff` |
| `engine/ajax/maharder/db_manager/` | **удалено** — AJAX через `devcraft/ajax.php` |
| `?mod=maharder` + sites | `?mod=db_manager` |
| Путь экспорта по умолчанию `engine/inc/maharder/_backup` | `devcraft/backup` |

## Пошаговая инструкция

### 1. Резервная копия

Сохраните `engine/inc/maharder/_config/db_manager.json`, каталог с SQL-резервными копиями и дамп БД.

### 2. DevCraft Admin

Установите DevCraft Admin по [инструкции](../devcraft_admin/install.md). Выполните `composer install` в `devcraft/`.

### 3. Установка DB Manager 200.1.3

Установите новый архив плагина через менеджер DLE. Затем:

```bash
cd devcraft
composer dump-autoload
```

### 4. Перенос конфигурации

```bash
cp engine/inc/maharder/_config/db_manager.json devcraft/config/db_manager.json
```

Откройте файл и при необходимости измените `export_path`:

```json
"export_path": "devcraft/backup"
```

Старые файлы в `engine/inc/maharder/_backup/` можно перенести в новый каталог вручную.

### 5. Проверка

1. `?mod=db_manager` → меню: Настройки, Управление БД, История изменений.
2. Настройки отображают сохранённые значения (Telegram, режим совместимости и т.д.).
3. Экспорт, скачивание, удаление и импорт работают через интерфейс DevCraft.

### 6. Legacy (опционально)

После проверки можно удалить:

- `engine/inc/maharder/_modules/db_manager/`
- `engine/ajax/maharder/db_manager/`

Глобальный плагин MHAdmin отключать не обязательно, если другие модули ещё на нём работают.

## Импорт SQL

Поведение импорта (`multi_query` без транзакции) совпадает с legacy-версией. Для production рекомендуется тестовая копия БД.

## См. также

- [Установка](install.md)
- [DevCraft Admin — миграция](../devcraft_admin/migration.md)
