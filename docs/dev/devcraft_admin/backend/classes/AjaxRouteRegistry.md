---
tags:
  - PHP
  - DLE
  - Плагин
  - Админка
title: "Класс: AjaxRouteRegistry - DevCraft Admin"
description: "Документация по плагину класс: ajaxrouteregistry для DLE."
keywords: "PHP, DLE, Плагин, Админка, класс: ajaxrouteregistry, DevCraft, документация"
author: "Maxim Harder"
og:title: "Класс: AjaxRouteRegistry"
og:description: "Документация по плагину класс: ajaxrouteregistry для DLE."
og:image: "https://devcraft.club/data/assets/logo_default/devcraftx2.png"
twitter:title: "Класс: AjaxRouteRegistry"
twitter:description: "Документация по плагину класс: ajaxrouteregistry для DLE."
---

# Класс: AjaxRouteRegistry

## Краткое содержание:

Реестр AJAX-маршрутов controller/method → класс-обработчик.

---

### Свойства
*Нет публичных свойств.*

---

### Методы
* public [register()](#method_register)
* public [resolve()](#method_resolve)
* public [loadFromManifest()](#method_loadFromManifest)

---

### Подробности

* Путь: `devcraft/src/classes/Http/AjaxRouteRegistry.php`

---

## Детали

### Методы

[](){#method_register}
### register()

Регистрирует обработчик для пары controller/method.

**С версии:** 200.4.0

**Параметры:**
- `$controller` — Имя контроллера.
- `$method` — Имя метода.
- `$handlerClass` — FQCN класса-обработчика.

[](){#method_resolve}
### resolve()

Возвращает FQCN обработчика для пары controller/method.

**С версии:** 200.4.0

**Параметры:**
- `$controller` — Имя контроллера.
- `$method` — Имя метода.

**Возвращает:** `class-string|null` — FQCN обработчика или null, если маршрут не найден.

[](){#method_loadFromManifest}
### loadFromManifest()

Загружает маршруты из manifest плагина.

**С версии:** 200.4.0

**Параметры:**
- `$context` — Контекст плагина с AJAX-методами.
