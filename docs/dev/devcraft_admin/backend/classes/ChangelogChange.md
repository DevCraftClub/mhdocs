---
tags:
  - PHP
  - DLE
  - Плагин
  - Админка
title: "Класс: ChangelogChange - DevCraft Admin"
description: "Документация по плагину класс: changelogchange для DLE."
keywords: "PHP, DLE, Плагин, Админка, класс: changelogchange, DevCraft, документация"
author: "Maxim Harder"
og:title: "Класс: ChangelogChange"
og:description: "Документация по плагину класс: changelogchange для DLE."
og:image: "https://devcraft.club/data/assets/logo_default/devcraftx2.png"
twitter:title: "Класс: ChangelogChange"
twitter:description: "Документация по плагину класс: changelogchange для DLE."
---

# Класс: ChangelogChange

## Краткое содержание:

Одна запись изменения в журнале версий модуля.

---

### Свойства
* public $[type](#property_type)
* public $[text](#property_text)

---

### Методы
* public [__construct()](#method___construct)
* public [fromArray()](#method_fromArray)
* public [fromLegacyString()](#method_fromLegacyString)
* public [toArray()](#method_toArray)

---

### Подробности

* Путь: `devcraft/src/classes/Types/ChangelogChange.php`

---

## Детали

### Свойства

[](){#property_type}
#### $type

Тип изменения.


[](){#property_text}
#### $text

Текст записи.


### Методы

[](){#method___construct}
### __construct()

Создаёт запись изменения.

**С версии:** 200.4.0

**Параметры:**
- `$type` — Тип изменения.
- `$text` — Текст записи.

[](){#method_fromArray}
### fromArray()

Создаёт запись изменения из массива или legacy-строки.

**С версии:** 200.4.0

**Возвращает:** `static` — Новый экземпляр записи.

[](){#method_fromLegacyString}
### fromLegacyString()

Разбирает строку changelog в формате MHAdmin.

**С версии:** 200.4.0

**Параметры:**
- `$line` — Строка с префиксом `[TAG]` или `FIX:`.

**Возвращает:** `self` — Запись изменения с определённым типом.

[](){#method_toArray}
### toArray()

Преобразует запись изменения в ассоциативный массив для шаблонов.

**С версии:** 200.4.0

**Возвращает:** `array{type: string, key: string, label: string, title: string, text: string}` — Сериализованная запись.
