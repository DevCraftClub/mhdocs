---
tags:
  - PHP
  - DLE
  - Плагин
  - Админка
title: "Класс: NewModuleHandler - DevCraft Admin"
description: "Документация по плагину класс: newmodulehandler для DLE."
keywords: "PHP, DLE, Плагин, Админка, класс: newmodulehandler, DevCraft, документация"
author: "Maxim Harder"
og:title: "Класс: NewModuleHandler"
og:description: "Документация по плагину класс: newmodulehandler для DLE."
og:image: "https://devcraft.club/data/assets/logo_default/devcraftx2.png"
twitter:title: "Класс: NewModuleHandler"
twitter:description: "Документация по плагину класс: newmodulehandler для DLE."
---

# Класс: NewModuleHandler

## Краткое содержание:

AJAX-обработчик генерации каркаса нового DevCraft-модуля.

---

### Свойства
*Нет публичных свойств.*

---

### Методы
* public [handle()](#method_handle)

---

### Подробности

* Путь: `devcraft/src/modules/Admin/Ajax/NewModuleHandler.php`

---

## Детали

### Методы

[](){#method_handle}
### handle()

Создаёт модуль по данным формы и возвращает отчёт о результате.

**С версии:** 200.4.0

**Параметры:**
- `$request` — AJAX-запрос с полями формы генератора.

**Возвращает:** `JsonResponse` — JSON-ответ с отчётом, ошибками валидации или успехом.
