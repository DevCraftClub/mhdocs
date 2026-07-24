---
tags:
  - API
  - PHP
  - DLE
title: "Установка - DLE API"
description: "Установка DLE API 200.1.0 для DLE 20.0 с DevCraft Admin."
keywords: "PHP, DLE, API, установка, DevCraft"
author: "Maxim Harder"
---

# Установка DLE API

## Минимальные требования

| Компонент | Версия |
| --------- | ------ |
| DataLife Engine | **≥ 20.0** |
| PHP | **≥ 8.3** |
| DevCraft Admin | **≥ 200.4.0** |
| MySQL / MariaDB | InnoDB (Foreign Keys) |

!!! warning "Порядок установки"
    Сначала установите и настройте [DevCraft Admin](../devcraft_admin/install.md). Затем устанавливайте DLE API.

## Установка

1. Скачайте `install.zip` релиза (содержимое папки `upload/`).
2. Загрузите в **Панель управления DLE → Плагины → Установить плагин**.
3. Убедитесь, что появились:
   - `engine/inc/dleapi.php` (тонкий stub админки)
   - `devcraft/src/modules/DleApi/` (Models, Pages, Ajax — конфигурация модуля)
   - `api/` (`api/v2/`, Fluent, Schemas, SDK)
   - локаль `devcraft/locales/ru_RU/dleapi.xliff`
4. В каталоге `api/` выполните `composer install`.
5. Откройте модуль **DLE API** в админке DevCraft: при первом обращении к ORM Cycle создаст таблицы `{prefix}_api_keys`, `{prefix}_api_scope`, `{prefix}_api_oauth_*` (миграции в `devcraft/src/database/migrations/`). DDL в `install.xml` плагина для этих таблиц не используется.
6. Создайте API-ключ и OAuth-клиент.

Публичный URL этой страницы: [https://readme.devcraft.club/dev/dle_api/install/](https://readme.devcraft.club/dev/dle_api/install/)
