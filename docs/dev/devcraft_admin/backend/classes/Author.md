---
tags:
  - PHP
  - DLE
  - Плагин
  - Админка
title: "Класс: Author - DevCraft Admin"
description: "Документация по плагину класс: author для DLE."
keywords: "PHP, DLE, Плагин, Админка, класс: author, DevCraft, документация"
author: "Maxim Harder"
og:title: "Класс: Author"
og:description: "Документация по плагину класс: author для DLE."
og:image: "https://devcraft.club/data/assets/logo_default/devcraftx2.png"
twitter:title: "Класс: Author"
twitter:description: "Документация по плагину класс: author для DLE."
---

# Класс: Author

## Краткое содержание:

Данные автора модуля для блока информации в админке.

---

### Свойства
* public $[name](#property_name)

---

### Методы
* public [__construct()](#method___construct)
* public [fromArray()](#method_fromArray)
* private [normalizeContacts()](#method_normalizeContacts)
* private [normalizeDonations()](#method_normalizeDonations)
* public [toArray()](#method_toArray)

---

### Подробности

* Путь: `devcraft/src/classes/Types/Author.php`

---

## Детали

### Свойства

[](){#property_name}
#### $name

Имя автора.


### Методы

[](){#method___construct}
### __construct()

Создаёт описание автора модуля.

**С версии:** 200.4.0

**Параметры:**
- `$name` — Имя автора.

[](){#method_fromArray}
### fromArray()

Создаёт описание автора из ассоциативного массива.

**С версии:** 200.4.0

**Возвращает:** `static` — Новый экземпляр описания автора.

[](){#method_normalizeContacts}
### normalizeContacts()

Нормализует массив контактов автора.

**С версии:** 200.4.0

**Параметры:**
- `$contacts` — Исходный список контактов.

**Возвращает:** `array<int, array{name: string, link: string}` — > Отфильтрованный список контактов.

[](){#method_normalizeDonations}
### normalizeDonations()

Нормализует массив способов поддержки автора.

**С версии:** 200.4.0

**Параметры:**
- `$donations` — Исходный список способов поддержки.

**Возвращает:** `array<int, array{name: string, value: string, link: string}` — > Отфильтрованный список.

[](){#method_toArray}
### toArray()

Преобразует описание автора в ассоциативный массив.

**С версии:** 200.4.0

**Возвращает:** `array{name: string, contacts: array<int, array{name: string, link: string}` — >, donations: array<int, array{name: string, value: string,
