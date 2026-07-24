---
tags:
  - PHP
  - DLE
  - Плагин
  - Админка
title: "Класс: FormSchema - DevCraft Admin"
description: "Документация по плагину класс: formschema для DLE."
keywords: "PHP, DLE, Плагин, Админка, класс: formschema, DevCraft, документация"
author: "Maxim Harder"
og:title: "Класс: FormSchema"
og:description: "Документация по плагину класс: formschema для DLE."
og:image: "https://devcraft.club/data/assets/logo_default/devcraftx2.png"
twitter:title: "Класс: FormSchema"
twitter:description: "Документация по плагину класс: formschema для DLE."
---

# Класс: FormSchema

## Краткое содержание:

Полная декларативная схема формы настроек или фильтра.

---

### Свойства
* public $[codename](#property_codename)
* public $[sections](#property_sections)
* public $[layout](#property_layout)

---

### Методы
* public [__construct()](#method___construct)
* public [fromArray()](#method_fromArray)
* public [toArray()](#method_toArray)
* public [allFields()](#method_allFields)

---

### Подробности

* Путь: `devcraft/src/classes/Types/FormSchema.php`

---

## Детали

### Свойства

[](){#property_codename}
#### $codename

Уникальный код формы.


[](){#property_sections}
#### $sections

Секции формы.


[](){#property_layout}
#### $layout

Режим компоновки (`stack`, `tabs`, `accordion`).


### Методы

[](){#method___construct}
### __construct()

Создаёт схему формы.

**С версии:** 200.4.0

**Параметры:**
- `$codename` — Уникальный код формы.
- `$sections` — Секции формы.
- `$layout` — Режим компоновки секций.

[](){#method_fromArray}
### fromArray()

Создаёт схему формы из ассоциативного массива.

**С версии:** 200.4.0

**Возвращает:** `static` — Новый экземпляр схемы.

[](){#method_toArray}
### toArray()

Преобразует схему формы в ассоциативный массив.

**С версии:** 200.4.0

**Возвращает:** `array<string,` — mixed> Сериализованная схема.

[](){#method_allFields}
### allFields()

Возвращает плоский список всех полей схемы.

**С версии:** 200.4.0

**Возвращает:** `FormField[]` — Все поля всех секций в порядке обхода.
