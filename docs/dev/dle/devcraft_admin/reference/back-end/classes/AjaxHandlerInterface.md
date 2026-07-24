---
tags:
  - PHP
  - DLE
  - Плагин
  - Админка
title: "Интерфейс: AjaxHandlerInterface - DevCraft Admin"
description: "Документация по плагину интерфейс: ajaxhandlerinterface для DLE."
keywords: "PHP, DLE, Плагин, Админка, интерфейс: ajaxhandlerinterface, DevCraft, документация"
author: "Maxim Harder"
og:title: "Интерфейс: AjaxHandlerInterface"
og:description: "Документация по плагину интерфейс: ajaxhandlerinterface для DLE."
og:image: "https://devcraft.club/data/assets/logo_default/devcraftx2.png"
twitter:title: "Интерфейс: AjaxHandlerInterface"
twitter:description: "Документация по плагину интерфейс: ajaxhandlerinterface для DLE."
---

# Интерфейс: AjaxHandlerInterface

## Краткое содержание:

Контракт обработчика AJAX-запроса модуля DevCraft.

---

### Свойства
*Нет публичных свойств.*

---

### Методы
* public [handle()](#method_handle)

---

### Подробности

* Путь: `devcraft/src/classes/Interfaces/AjaxHandlerInterface.php`

---

## Детали

### Методы

[](){#method_handle}
### handle()

Обрабатывает входящий AJAX-запрос и формирует JSON-ответ.

**С версии:** 200.4.0

**Параметры:**
- `$request` — Нормализованный объект входящего запроса.

**Возвращает:** `JsonResponse` — Ответ для отправки клиенту.
