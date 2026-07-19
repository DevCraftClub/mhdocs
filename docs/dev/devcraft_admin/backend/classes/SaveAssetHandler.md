---
tags:
  - PHP
  - DLE
  - Плагин
  - Админка
title: "Класс: SaveAssetHandler - DevCraft Admin"
description: "Документация по плагину класс: saveassethandler для DLE."
keywords: "PHP, DLE, Плагин, Админка, класс: saveassethandler, DevCraft, документация"
author: "Maxim Harder"
og:title: "Класс: SaveAssetHandler"
og:description: "Документация по плагину класс: saveassethandler для DLE."
og:image: "https://devcraft.club/data/assets/logo_default/devcraftx2.png"
twitter:title: "Класс: SaveAssetHandler"
twitter:description: "Документация по плагину класс: saveassethandler для DLE."
---

# Класс: SaveAssetHandler

## Краткое содержание:

AJAX-обработчик загрузки одного отсутствующего или устаревшего ресурса.

---

### Свойства
*Нет публичных свойств.*

---

### Методы
* public [handle()](#method_handle)

---

### Подробности

* Путь: `devcraft/src/modules/Admin/Ajax/SaveAssetHandler.php`

---

## Детали

### Методы

[](){#method_handle}
### handle()

Загружает указанный файл ресурса с удалённого источника.

**С версии:** 200.4.0

**Параметры:**
- `$request` — AJAX-запрос с полем `file` — относительный путь ресурса.

**Возвращает:** `JsonResponse` — JSON-ответ об успешной загрузке или ошибке.
