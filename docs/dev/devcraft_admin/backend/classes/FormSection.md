---
tags:
  - PHP
  - DLE
  - Плагин
  - Админка
title: "Класс: FormSection - DevCraft Admin"
description: "Документация по плагину класс: formsection для DLE."
keywords: "PHP, DLE, Плагин, Админка, класс: formsection, DevCraft, документация"
author: "Maxim Harder"
og:title: "Класс: FormSection"
og:description: "Документация по плагину класс: formsection для DLE."
og:image: "https://devcraft.club/data/assets/logo_default/devcraftx2.png"
twitter:title: "Класс: FormSection"
twitter:description: "Документация по плагину класс: formsection для DLE."
---

# Класс: FormSection

## Краткое содержание:

Секция декларативной формы с заголовком и набором полей.

---

### Свойства
* public $[title](#property_title)
* public $[fields](#property_fields)

---

### Методы
* public [__construct()](#method___construct)
* public [fromArray()](#method_fromArray)
* public [toArray()](#method_toArray)

---

### Подробности

* Путь: `devcraft/src/classes/Types/FormSection.php`

---

## Детали

### Свойства

[](){#property_title}
#### $title

Заголовок секции.


[](){#property_fields}
#### $fields

Список полей секции.


### Методы

[](){#method___construct}
### __construct()

Создаёт секцию формы.

**С версии:** 200.4.0

**Параметры:**
- `$title` — Заголовок секции.
- `$fields` — Список полей секции.

[](){#method_fromArray}
### fromArray()

Создаёт секцию формы из ассоциативного массива схемы.

**С версии:** 200.4.0

**Возвращает:** `static` — Новый экземпляр секции.

[](){#method_toArray}
### toArray()

Преобразует секцию формы в ассоциативный массив.

**С версии:** 200.4.0

**Возвращает:** `array<string,` — mixed> Сериализованная секция с полями.
