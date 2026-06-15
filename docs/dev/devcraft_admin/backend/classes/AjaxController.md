---
tags:
  - PHP
  - DLE
  - Плагин
  - Админка
title: "Класс: AjaxController - DevCraft Admin"
description: "Документация по плагину класс: ajaxcontroller для DLE."
keywords: "PHP, DLE, Плагин, Админка, класс: ajaxcontroller, DevCraft, документация"
author: "Maxim Harder"
og:title: "Класс: AjaxController"
og:description: "Документация по плагину класс: ajaxcontroller для DLE."
og:image: "https://devcraft.club/data/assets/logo_default/devcraftx2.png"
twitter:title: "Класс: AjaxController"
twitter:description: "Документация по плагину класс: ajaxcontroller для DLE."
---

# Класс: AjaxController

## Краткое содержание:

Диспетчер AJAX-запросов DevCraft: аутентификация, маршрутизация, ответ.

---

### Свойства
*Нет публичных свойств.*

---

### Методы
* public [run()](#method_run)
* private [sendInternalError()](#method_sendInternalError)

---

### Подробности

* Путь: `devcraft/src/classes/Http/AjaxController.php`

---

## Детали

### Методы

[](){#method_run}
### run()

Обрабатывает текущий AJAX-запрос и отправляет JSON-ответ.

**С версии:** 200.4.0

[](){#method_sendInternalError}
### sendInternalError()

Отправляет JSON-ответ о внутренней ошибке с опциональной детализацией.

**С версии:** 200.4.0

**Параметры:**
- `$e` — Исключение, возникшее в обработчике.
