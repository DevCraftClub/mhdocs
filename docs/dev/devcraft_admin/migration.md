---
tags:
  - PHP
  - DLE
  - Плагин
  - Админка
title: "Миграция на DevCraft Admin - DevCraft Admin"
description: "Перенос с MH Admin (Legacy) на DevCraft Admin для DLE 20.0."
keywords: "PHP, DLE, Плагин, Админка, миграция, DevCraft, документация"
author: "Maxim Harder"
og:title: "Миграция данных"
og:description: "Перенос с MH Admin (Legacy) на DevCraft Admin."
og:image: "https://devcraft.club/data/assets/logo_default/devcraftx2.png"
---

# Миграция с MH Admin (Legacy)

DevCraft Admin устанавливается как **новый плагин** DLE 20.0. Автоматическая миграция базы данных, локалей и сторонних модулей **не выполняется** — lifecycle создаёт только пункт меню `devcraft`.

!!! warning "Полная автоматическая миграция невозможна"
    Из-за смены архитектуры (Metro UI, Cycle ORM, новые пути) старые плагины MH Admin **не совместимы** до их отдельного обновления под DevCraft.

Актуальная документация: [Установка](install.md). Legacy: [MH Admin (Legacy)](../mhadmin/install.md).

## Что меняется

| Legacy (MH Admin) | DevCraft Admin |
|-------------------|----------------|
| `engine/inc/maharder.php` | `engine/inc/devcraft.php` |
| `engine/inc/maharder/` | `devcraft/` в корне сайта |
| Fomantic UI | Metro UI |
| `MH_*` константы | `DEVCRAFT_*` (см. [Paths](backend/classes/Paths.md)) |
| `engine/ajax/maharder/` | `devcraft/ajax.php` |

## Ручные шаги

### 1. Резервная копия

Сохраните каталоги `engine/inc/maharder/`, `devcraft/` (если уже есть) и дамп БД.

### 2. Установка DevCraft Admin

Следуйте [инструкции по установке](install.md): архив плагина через менеджер DLE, затем `composer install` в `devcraft/`.

### 3. Перенос конфигурации JSON

Файлы из `engine/inc/maharder/_config/` скопируйте в `devcraft/config/`.

Имена ключей в основном совпадают (`list_count`, `language`, `theme`, `logs` и т.д.). При первом запуске `DevCraftConfig` применяет миграцию устаревших ключей.

### 4. Локализация

Скопируйте XLIFF из `engine/inc/maharder/_locales/` в `devcraft/locales/` (структура `{locale}/{module}.xliff`).

Путь к локалям можно проверить в [Настройка](frontend/manage.md) → **Путь до файлов языков**.

### 5. Логи и кеш

| Legacy | DevCraft |
|--------|----------|
| `engine/inc/maharder/logs/` | `devcraft/logs/` |
| кеш MH | `devcraft/cache/` (настраивается) |

Таблица логов в БД: `devcraft_logs` (см. [LogRecord](backend/classes/LogRecord.md)). Старые записи `{prefix}_maharder_*` **не импортируются** автоматически.

### 6. Сторонние модули автора

Каждый legacy-модуль под `engine/inc/maharder/_modules/` требует **переписывания** под структуру `devcraft/src/modules/{Name}/` (manifest, Pages, Ajax). Используйте [генератор модулей](new_module.md) как стартовую точку.

### 7. Отключение Legacy (опционально)

После проверки DevCraft Admin можно удалить пункт меню `maharder` в DLE и архивировать `engine/inc/maharder/`. Рекомендуется оставить Legacy-документацию для ссылок на старые API.

## Планируется в будущих релизах

- Импорт таблиц `{prefix}_maharder_*` → `{prefix}_devcraft_*`
- Мастер деактивации legacy-меню
- Проверка целостности путей при обновлении

## См. также

- [Точки входа](backend/entry_points.md)
- [Манифест модуля](backend/manifest.md)
- [История изменений](changelog.md)
