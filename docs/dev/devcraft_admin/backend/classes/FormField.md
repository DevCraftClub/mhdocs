---
tags:
  - PHP
  - DLE
  - Плагин
  - Админка
title: "Класс: FormField - DevCraft Admin"
description: "Документация по плагину класс: formfield для DLE."
keywords: "PHP, DLE, Плагин, Админка, класс: formfield, DevCraft, документация"
author: "Maxim Harder"
og:title: "Класс: FormField"
og:description: "Документация по плагину класс: formfield для DLE."
og:image: "https://devcraft.club/data/assets/logo_default/devcraftx2.png"
twitter:title: "Класс: FormField"
twitter:description: "Документация по плагину класс: formfield для DLE."
---

# Класс: FormField

## Краткое содержание:

Описание одного поля декларативной формы DevCraft.

---

### Свойства
* public $[id](#property_id)
* public $[type](#property_type)
* public $[label](#property_label)
* public $[description](#property_description)
* public $[filter](#property_filter)
* public $[default](#property_default)
* public $[columns](#property_columns)

---

### Методы
* public [__construct()](#method___construct)
* public [fromArray()](#method_fromArray)
* public [toArray()](#method_toArray)

---

### Подробности

* Путь: `devcraft/src/classes/Types/FormField.php`

---

## Детали

### Свойства

[](){#property_id}
#### $id

Уникальный идентификатор поля.


[](){#property_type}
#### $type

Тип виджета (`text`, `select` и т. д.).


[](){#property_label}
#### $label

Подпись поля.


[](){#property_description}
#### $description

Пояснение под полем.


[](){#property_filter}
#### $filter

PHP-фильтр для санитизации значения.


[](){#property_default}
#### $default

Значение по умолчанию.


[](){#property_columns}
#### $columns

Ширина колонки в сетке Metro UI.


### Методы

[](){#method___construct}
### __construct()

Создаёт описание поля формы.

**С версии:** 200.4.0

**Параметры:**
- `$id` — Уникальный идентификатор поля.
- `$type` — Тип виджета.
- `$label` — Подпись поля.
- `$description` — Пояснение под полем.
- `$filter` — PHP-фильтр для санитизации.
- `$default` — Значение по умолчанию.
- `$columns` — Ширина колонки в сетке.

[](){#method_fromArray}
### fromArray()

Создаёт описание поля из ассоциативного массива схемы.

**С версии:** 200.4.0

**Возвращает:** `static` — Новый экземпляр описания поля.

[](){#method_toArray}
### toArray()

Преобразует описание поля в ассоциативный массив для шаблонов.

**С версии:** 200.4.0

**Возвращает:** `array<string,` — mixed> Сериализованное описание поля.
