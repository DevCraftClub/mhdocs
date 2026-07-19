---
tags:
  - PHP
  - DLE
  - Плагин
  - Админка
title: "Класс: AjaxRequest - DevCraft Admin"
description: "Документация по плагину класс: ajaxrequest для DLE."
keywords: "PHP, DLE, Плагин, Админка, класс: ajaxrequest, DevCraft, документация"
author: "Maxim Harder"
og:title: "Класс: AjaxRequest"
og:description: "Документация по плагину класс: ajaxrequest для DLE."
og:image: "https://devcraft.club/data/assets/logo_default/devcraftx2.png"
twitter:title: "Класс: AjaxRequest"
twitter:description: "Документация по плагину класс: ajaxrequest для DLE."
---

# Класс: AjaxRequest

## Краткое содержание:

DTO входящего AJAX-запроса DevCraft.

---

### Свойства
* public $[controller](#property_controller)
* public $[method](#property_method)
* public $[mod](#property_mod)

---

### Методы
* public [__construct()](#method___construct)
* public [fromGlobals()](#method_fromGlobals)

---

### Подробности

* Путь: `devcraft/src/classes/Http/AjaxRequest.php`

---

## Детали

### Свойства

[](){#property_controller}
#### $controller

Имя контроллера или модуля-обработчика.


[](){#property_method}
#### $method

Имя вызываемого метода.


[](){#property_mod}
#### $mod

Идентификатор плагина DLE (mod).


### Методы

[](){#method___construct}
### __construct()

Создаёт DTO из параметров маршрута и тела запроса.

**С версии:** 200.4.0

**Параметры:**
- `$controller` — Имя контроллера.
- `$method` — Имя метода.
- `$mod` — Идентификатор плагина.

[](){#method_fromGlobals}
### fromGlobals()

Создаёт DTO из глобальных переменных $_REQUEST и $_POST.

**С версии:** 200.4.0

**Возвращает:** `self` — Разобранный AJAX-запрос.
