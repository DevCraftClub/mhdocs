---
tags:
  - PHP
  - DLE
  - Плагин
  - Админка
title: "Класс: SyncAssetsHandler - DevCraft Admin"
description: "Документация по плагину класс: syncassetshandler для DLE."
keywords: "PHP, DLE, Плагин, Админка, класс: syncassetshandler, DevCraft, документация"
author: "Maxim Harder"
og:title: "Класс: SyncAssetsHandler"
og:description: "Документация по плагину класс: syncassetshandler для DLE."
og:image: "https://devcraft.club/data/assets/logo_default/devcraftx2.png"
twitter:title: "Класс: SyncAssetsHandler"
twitter:description: "Документация по плагину класс: syncassetshandler для DLE."
---

# Класс: SyncAssetsHandler

## Краткое содержание:

AJAX-обработчик массовой синхронизации ресурсов DevCraft.

---

### Свойства
*Нет публичных свойств.*

---

### Методы
* public [handle()](#method_handle)

---

### Подробности

* Путь: `devcraft/src/modules/Admin/Ajax/SyncAssetsHandler.php`

---

## Детали

### Методы

[](){#method_handle}
### handle()

Загружает отсутствующие или все ресурсы в зависимости от режима `mode`.

**С версии:** 200.4.0

**Параметры:**
- `$request` — AJAX-запрос с полем `mode` (`changed` или `all`).

**Возвращает:** `JsonResponse` — JSON-ответ о количестве загруженных файлов или ошибке.
