---
tags:
  - PHP
  - DLE
  - Плагин
  - Админка
title: "Класс: CheckAssetsHandler - DevCraft Admin"
description: "Документация по плагину класс: checkassetshandler для DLE."
keywords: "PHP, DLE, Плагин, Админка, класс: checkassetshandler, DevCraft, документация"
author: "Maxim Harder"
og:title: "Класс: CheckAssetsHandler"
og:description: "Документация по плагину класс: checkassetshandler для DLE."
og:image: "https://devcraft.club/data/assets/logo_default/devcraftx2.png"
twitter:title: "Класс: CheckAssetsHandler"
twitter:description: "Документация по плагину класс: checkassetshandler для DLE."
---

# Класс: CheckAssetsHandler

## Краткое содержание:

AJAX-обработчик сравнения локальных и удалённых ресурсов DevCraft.

---

### Свойства
*Нет публичных свойств.*

---

### Методы
* public [handle()](#method_handle)

---

### Подробности

* Путь: `devcraft/src/modules/Admin/Ajax/CheckAssetsHandler.php`

---

## Детали

### Методы

[](){#method_handle}
### handle()

Возвращает отчёт о расхождениях файлов ресурсов.

**С версии:** 200.4.0

**Параметры:**
- `$request` — Входящий AJAX-запрос (данные не используются).

**Возвращает:** `JsonResponse` — JSON-ответ с отчётом сравнения ресурсов.
