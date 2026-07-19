---
tags:
  - PHP
  - DLE
  - Плагин
  - Админка
title: "Класс: FilterSchema - DevCraft Admin"
description: "Документация по плагину класс: filterschema для DLE."
keywords: "PHP, DLE, Плагин, Админка, класс: filterschema, DevCraft, документация"
author: "Maxim Harder"
og:title: "Класс: FilterSchema"
og:description: "Документация по плагину класс: filterschema для DLE."
og:image: "https://devcraft.club/data/assets/logo_default/devcraftx2.png"
twitter:title: "Класс: FilterSchema"
twitter:description: "Документация по плагину класс: filterschema для DLE."
---

# Класс: FilterSchema

## Краткое содержание:

Декларативная схема фильтра списковых страниц админки.

---

### Свойства
* public $[sections](#property_sections)
* public $[defaultOrder](#property_defaultOrder)
* public $[sortColumns](#property_sortColumns)

---

### Методы
* public [__construct()](#method___construct)
* public [fromArray()](#method_fromArray)
* public [toArray()](#method_toArray)
* public [allFields()](#method_allFields)
* public [resolvedSortColumns()](#method_resolvedSortColumns)
* public [sortColumnKeys()](#method_sortColumnKeys)
* public [filterDbColumns()](#method_filterDbColumns)

---

### Подробности

* Путь: `devcraft/src/classes/Types/FilterSchema.php`

---

## Детали

### Свойства

[](){#property_sections}
#### $sections

Секции полей фильтра.


[](){#property_defaultOrder}
#### $defaultOrder

Колонка сортировки по умолчанию.


[](){#property_sortColumns}
#### $sortColumns

Явная карта колонок сортировки.


### Методы

[](){#method___construct}
### __construct()

Создаёт схему фильтра.

**С версии:** 200.4.0

**Параметры:**
- `$sections` — Секции полей фильтра.
- `$defaultOrder` — Колонка сортировки по умолчанию.
- `$sortColumns` — Явная карта колонок сортировки.

[](){#method_fromArray}
### fromArray()

Создаёт схему фильтра из ассоциативного массива.

**С версии:** 200.4.0

**Возвращает:** `static` — Новый экземпляр схемы.

[](){#method_toArray}
### toArray()

Преобразует схему фильтра в ассоциативный массив.

**С версии:** 200.4.0

**Возвращает:** `array<string,` — mixed> Сериализованная схема.

[](){#method_allFields}
### allFields()

Возвращает плоский список всех полей фильтра.

**С версии:** 200.4.0

**Возвращает:** `FormField[]` — Все поля всех секций.

[](){#method_resolvedSortColumns}
### resolvedSortColumns()

Возвращает карту колонок сортировки с учётом явных и выведенных значений.

**С версии:** 200.4.0

**Возвращает:** `array<string,` — string> Карта `column => label`.

[](){#method_sortColumnKeys}
### sortColumnKeys()

Возвращает ключи колонок сортировки.

**С версии:** 200.4.0

**Возвращает:** `list<string>` — Список имён колонок БД.

[](){#method_filterDbColumns}
### filterDbColumns()

Возвращает имена колонок БД, участвующих в фильтрации.

**С версии:** 200.4.0

**Возвращает:** `list<string>` — Список имён колонок.
