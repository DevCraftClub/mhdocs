---
tags:
  - PHP
  - DLE
  - Плагин
  - Админка
title: "Класс: Changelog - DevCraft Admin"
description: "Документация по плагину класс: changelog для DLE."
keywords: "PHP, DLE, Плагин, Админка, класс: changelog, DevCraft, документация"
author: "Maxim Harder"
og:title: "Класс: Changelog"
og:description: "Документация по плагину класс: changelog для DLE."
og:image: "https://devcraft.club/data/assets/logo_default/devcraftx2.png"
twitter:title: "Класс: Changelog"
twitter:description: "Документация по плагину класс: changelog для DLE."
---

# Класс: Changelog

## Краткое содержание:

Запись версии в журнале изменений модуля.

---

### Свойства
* public $[version](#property_version)
* public $[date](#property_date)

---

### Методы
* public [__construct()](#method___construct)
* public [fromArray()](#method_fromArray)
* public [listFromManifest()](#method_listFromManifest)
* public [isUnreleased()](#method_isUnreleased)
* public [toArray()](#method_toArray)
* public [teaserItems()](#method_teaserItems)
* public [unreleasedLabel()](#method_unreleasedLabel)

---

### Подробности

* Путь: `devcraft/src/classes/Types/Changelog.php`

---

## Детали

### Свойства

[](){#property_version}
#### $version

Номер версии или «Неопубликованное».


[](){#property_date}
#### $date

Дата релиза.


### Методы

[](){#method___construct}
### __construct()

Создаёт запись версии changelog.

**С версии:** 200.4.0

**Параметры:**
- `$version` — Номер версии.
- `$date` — Дата релиза.

[](){#method_fromArray}
### fromArray()

Создаёт запись версии из ассоциативного массива.

**С версии:** 200.4.0

**Возвращает:** `static` — Новый экземпляр записи.

[](){#method_listFromManifest}
### listFromManifest()

Создаёт список записей из массива манифеста модуля.

**С версии:** 200.4.0

**Возвращает:** `self[]` — Список записей changelog.

[](){#method_isUnreleased}
### isUnreleased()

Проверяет, является ли версия неопубликованной.

**С версии:** 200.4.0

**Возвращает:** `bool` — `true`, если версия соответствует строке «Неопубликованное».

[](){#method_toArray}
### toArray()

Преобразует запись версии в ассоциативный массив для шаблонов.

**С версии:** 200.4.0

**Возвращает:** `array{version:` — string, date: ?string, sections: array<int, array{key: string, label: string, title: string, items: array<int,

[](){#method_teaserItems}
### teaserItems()

Возвращает первые записи для тизера на панели управления.

**С версии:** 200.4.0

**Параметры:**
- `$limit` — Максимальное количество элементов (по умолчанию 3).

**Возвращает:** `array<int, array<string, string>>` — Список сериализованных изменений.

[](){#method_unreleasedLabel}
### unreleasedLabel()

Возвращает локализованную метку для неопубликованных версий.
