---
tags:
  - PHP
  - DLE
  - Плагин
  - Админка
title: "Класс: CheckUpdateHandler - DevCraft Admin"
description: "Документация по плагину класс: checkupdatehandler для DLE."
keywords: "PHP, DLE, Плагин, Админка, класс: checkupdatehandler, DevCraft, документация"
author: "Maxim Harder"
og:title: "Класс: CheckUpdateHandler"
og:description: "Документация по плагину класс: checkupdatehandler для DLE."
og:image: "https://devcraft.club/data/assets/logo_default/devcraftx2.png"
twitter:title: "Класс: CheckUpdateHandler"
twitter:description: "Документация по плагину класс: checkupdatehandler для DLE."
---

# Класс: CheckUpdateHandler

## Краткое содержание:

AJAX-обработчик проверки обновлений плагина на devcraft.club.

---

### Свойства
*Нет публичных свойств.*

---

### Методы
* public [handle()](#method_handle)

---

### Подробности

* Путь: `devcraft/src/modules/Admin/Ajax/CheckUpdateHandler.php`

---

## Детали

### Методы

[](){#method_handle}
### handle()

Запрашивает удалённую версию ресурса и сравнивает с локальной.

**С версии:** 200.4.0

**Параметры:**
- `$request` — AJAX-запрос с `resource_id` и `local_version`.

**Возвращает:** `JsonResponse` — JSON-ответ с данными обновления или ошибкой.
