---
tags:
  - PHP
  - DLE
  - Плагин
  - Админка
title: "Класс: DeleteLogHandler - DevCraft Admin"
description: "Документация по плагину класс: deleteloghandler для DLE."
keywords: "PHP, DLE, Плагин, Админка, класс: deleteloghandler, DevCraft, документация"
author: "Maxim Harder"
og:title: "Класс: DeleteLogHandler"
og:description: "Документация по плагину класс: deleteloghandler для DLE."
og:image: "https://devcraft.club/data/assets/logo_default/devcraftx2.png"
twitter:title: "Класс: DeleteLogHandler"
twitter:description: "Документация по плагину класс: deleteloghandler для DLE."
---

# Класс: DeleteLogHandler

## Краткое содержание:

AJAX-обработчик удаления записи журнала по UUID.

---

### Свойства
*Нет публичных свойств.*

---

### Методы
* public [handle()](#method_handle)

---

### Подробности

* Путь: `devcraft/src/modules/Admin/Ajax/DeleteLogHandler.php`

---

## Детали

### Методы

[](){#method_handle}
### handle()

Удаляет запись журнала по идентификатору UUID.

**С версии:** 200.4.0

**Параметры:**
- `$request` — AJAX-запрос с полем `id` или `uuid`.

**Возвращает:** `JsonResponse` — JSON-ответ об успехе или ошибке удаления.
