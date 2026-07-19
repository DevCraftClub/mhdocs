---
tags:
  - PHP
  - DLE
  - Плагин
  - Админка
title: "Класс: BreadCrumb - DevCraft Admin"
description: "Документация по плагину класс: breadcrumb для DLE."
keywords: "PHP, DLE, Плагин, Админка, класс: breadcrumb, DevCraft, документация"
author: "Maxim Harder"
og:title: "Класс: BreadCrumb"
og:description: "Документация по плагину класс: breadcrumb для DLE."
og:image: "https://devcraft.club/data/assets/logo_default/devcraftx2.png"
twitter:title: "Класс: BreadCrumb"
twitter:description: "Документация по плагину класс: breadcrumb для DLE."
---

# Класс: BreadCrumb

## Краткое содержание:

Элемент навигационной цепочки «хлебных крошек» в админке.

---

### Свойства
* public $[title](#property_title)
* public $[url](#property_url)

---

### Методы
* public [__construct()](#method___construct)
* public [fromArray()](#method_fromArray)
* public [toArray()](#method_toArray)

---

### Подробности

* Путь: `devcraft/src/classes/Types/BreadCrumb.php`

---

## Детали

### Свойства

[](){#property_title}
#### $title

Заголовок элемента.


[](){#property_url}
#### $url

URL ссылки или `null` для текущей страницы.


### Методы

[](){#method___construct}
### __construct()

Создаёт элемент хлебных крошек.

**С версии:** 200.4.0

**Параметры:**
- `$title` — Заголовок элемента.
- `$url` — URL ссылки или `null` для текущей страницы.

[](){#method_fromArray}
### fromArray()

Создаёт элемент из ассоциативного массива.

**С версии:** 200.4.0

**Возвращает:** `static` — Новый экземпляр элемента.

[](){#method_toArray}
### toArray()

Преобразует элемент в массив с локализованным заголовком.

**С версии:** 200.4.0

**Возвращает:** `array{title: string, url: ?string}` — Данные для шаблона.
