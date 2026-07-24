---
tags:
  - PHP
  - DLE
  - Плагин
  - Админка
title: "Класс: LanguageData - DevCraft Admin"
description: "Документация по плагину класс: languagedata для DLE."
keywords: "PHP, DLE, Плагин, Админка, класс: languagedata, DevCraft, документация"
author: "Maxim Harder"
og:title: "Класс: LanguageData"
og:description: "Документация по плагину класс: languagedata для DLE."
og:image: "https://devcraft.club/data/assets/logo_default/devcraftx2.png"
twitter:title: "Класс: LanguageData"
twitter:description: "Документация по плагину класс: languagedata для DLE."
---

# Класс: LanguageData

## Краткое содержание:

Метаданные языка локализации DevCraft.

---

### Свойства
* public $[englishName](#property_englishName)
* public $[originalName](#property_originalName)
* public $[iso2](#property_iso2)
* public $[tag](#property_tag)

---

### Методы
* public [__construct()](#method___construct)
* public [fromArray()](#method_fromArray)
* public [toArray()](#method_toArray)

---

### Подробности

* Путь: `devcraft/src/classes/Types/LanguageData.php`

---

## Детали

### Свойства

[](){#property_englishName}
#### $englishName

Англоязычное название языка.


[](){#property_originalName}
#### $originalName

Название языка на языке оригинала.


[](){#property_iso2}
#### $iso2

Двухбуквенный ISO-код.


[](){#property_tag}
#### $tag

BCP 47-тег локали (например, `ru_RU`).


### Методы

[](){#method___construct}
### __construct()

Создаёт описание языка локализации.

**С версии:** 200.4.0

**Параметры:**
- `$englishName` — Англоязычное название языка.
- `$originalName` — Название языка на языке оригинала.
- `$iso2` — Двухбуквенный ISO-код.
- `$tag` — BCP 47-тег локали.

[](){#method_fromArray}
### fromArray()

Создаёт описание языка из ассоциативного массива.

**С версии:** 200.4.0

**Возвращает:** `static` — Новый экземпляр описания языка.

[](){#method_toArray}
### toArray()

Преобразует описание языка в ассоциативный массив.

**С версии:** 200.4.0

**Возвращает:** `array<string,` — string> Сериализованные метаданные языка.
