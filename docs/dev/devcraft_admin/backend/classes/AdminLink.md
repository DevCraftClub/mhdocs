---
tags:
  - PHP
  - DLE
  - Плагин
  - Админка
title: "Класс: AdminLink - DevCraft Admin"
description: "Документация по плагину класс: adminlink для DLE."
keywords: "PHP, DLE, Плагин, Админка, класс: adminlink, DevCraft, документация"
author: "Maxim Harder"
og:title: "Класс: AdminLink"
og:description: "Документация по плагину класс: adminlink для DLE."
og:image: "https://devcraft.club/data/assets/logo_default/devcraftx2.png"
twitter:title: "Класс: AdminLink"
twitter:description: "Документация по плагину класс: adminlink для DLE."
---

# Класс: AdminLink

## Краткое содержание:

Элемент навигационного меню административной панели.

---

### Свойства
* public $[name](#property_name)
* public $[link](#property_link)
* public $[type](#property_type)
* public $[parent](#property_parent)
* public $[extra](#property_extra)
* public $[children](#property_children)
* public $[action](#property_action)
* public $[pageClass](#property_pageClass)

---

### Методы
* public [__construct()](#method___construct)
* public [page()](#method_page)
* public [hidden()](#method_hidden)
* public [divider()](#method_divider)
* public [fromArray()](#method_fromArray)
* public [toArray()](#method_toArray)

---

### Подробности

* Путь: `devcraft/src/classes/Types/AdminLink.php`

---

## Детали

### Свойства

[](){#property_name}
#### $name

Отображаемое имя пункта меню.


[](){#property_link}
#### $link

URL или query-string ссылки.


[](){#property_type}
#### $type

Тип элемента (`link`, `dropdown`, `divider`, `data`, `hidden`).


[](){#property_parent}
#### $parent

Идентификатор родительского элемента.


[](){#property_extra}
#### $extra

Дополнительные атрибуты или data-значение.


[](){#property_children}
#### $children

Вложенные пункты меню.


[](){#property_action}
#### $action

Ключ action страницы модуля.


[](){#property_pageClass}
#### $pageClass

Класс обработчика страницы модуля.


### Методы

[](){#method___construct}
### __construct()

Создаёт элемент меню с заданными параметрами.

**С версии:** 200.4.0

**Параметры:**
- `$name` — Отображаемое имя пункта меню.
- `$link` — URL или query-string ссылки.
- `$type` — Тип элемента (`link`, `dropdown`, `divider`, `data`, `hidden`).
- `$parent` — Идентификатор родительского элемента.
- `$extra` — Дополнительные атрибуты или data-значение.
- `$children` — Вложенные пункты меню.
- `$action` — Ключ action страницы модуля.
- `$pageClass` — Класс обработчика страницы модуля.

[](){#method_page}
### page()

Создаёт ссылку на страницу модуля DevCraft.

**С версии:** 200.4.0

**Параметры:**
- `$name` — Отображаемое имя пункта меню.
- `$action` — Ключ action страницы.
- `$pageClass` — Полное имя класса страницы.
- `$extra` — Дополнительное data-значение.
- `$mod` — Код модуля DLE (по умолчанию `devcraft`).

**Возвращает:** `self` — Элемент меню типа `link`.

[](){#method_hidden}
### hidden()

Регистрирует страницу без пункта в боковом меню (роутинг через `AdminLinkResolver` сохраняется).

**С версии:** 200.4.0

**Параметры:**
- `$action` — Ключ action страницы.
- `$pageClass` — Полное имя класса страницы.

**Возвращает:** `self` — Элемент типа `hidden`.

[](){#method_divider}
### divider()

Создаёт разделитель или заголовок группы в меню.

**С версии:** 200.4.0

**Параметры:**
- `$header` — Необязательный заголовок раздела.

**Возвращает:** `self` — Элемент меню типа `divider`.

[](){#method_fromArray}
### fromArray()

Создаёт элемент меню из ассоциативного массива.

**С версии:** 200.4.0

**Возвращает:** `static` — Новый экземпляр элемента меню.

[](){#method_toArray}
### toArray()

Преобразует элемент меню в массив для шаблонов и сериализации.

**С версии:** 200.4.0

**Возвращает:** `array<string,` — mixed> Данные пункта меню (имя уже локализовано в manifest).
