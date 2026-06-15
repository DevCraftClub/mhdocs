---
tags:
  - PHP
  - DLE
  - Плагин
  - Админка
title: "Перечисление: ChangelogChangeType - DevCraft Admin"
description: "Документация по плагину перечисление: changelogchangetype для DLE."
keywords: "PHP, DLE, Плагин, Админка, перечисление: changelogchangetype, DevCraft, документация"
author: "Maxim Harder"
og:title: "Перечисление: ChangelogChangeType"
og:description: "Документация по плагину перечисление: changelogchangetype для DLE."
og:image: "https://devcraft.club/data/assets/logo_default/devcraftx2.png"
twitter:title: "Перечисление: ChangelogChangeType"
twitter:description: "Документация по плагину перечисление: changelogchangetype для DLE."
---

# Перечисление: ChangelogChangeType

## Краткое содержание:

Тип записи в журнале изменений (формат Keep a Changelog).

---

### Свойства
*Нет публичных свойств.*

---

### Методы
* public [orderedCases()](#method_orderedCases)
* public [fromKey()](#method_fromKey)
* public [fromLegacyTag()](#method_fromLegacyTag)
* public [key()](#method_key)
* public [label()](#method_label)
* public [title()](#method_title)

---

### Значения
* [ADDED](#case_ADDED) — Тип записи в журнале изменений (формат Keep a Changelog).
* [CHANGED](#case_CHANGED) — Изменение существующей функциональности.
* [DEPRECATED](#case_DEPRECATED) — Устаревшая функциональность.
* [REMOVED](#case_REMOVED) — Удалённая функциональность.
* [FIXED](#case_FIXED) — Исправление ошибки.
* [SECURITY](#case_SECURITY) — Исправление уязвимости безопасности.

---

### Подробности

* Путь: `devcraft/src/classes/Enums/ChangelogChangeType.php`

---

## Детали

### Значения перечисления

[](){#case_ADDED}
#### ADDED

Тип записи в журнале изменений (формат Keep a Changelog).

[](){#case_CHANGED}
#### CHANGED

Изменение существующей функциональности.

[](){#case_DEPRECATED}
#### DEPRECATED

Устаревшая функциональность.

[](){#case_REMOVED}
#### REMOVED

Удалённая функциональность.

[](){#case_FIXED}
#### FIXED

Исправление ошибки.

[](){#case_SECURITY}
#### SECURITY

Исправление уязвимости безопасности.

### Методы

[](){#method_orderedCases}
### orderedCases()

Возвращает все варианты перечисления в порядке отображения в UI.

**С версии:** 200.4.0

**Возвращает:** `self[]` — 

[](){#method_fromKey}
### fromKey()

Создаёт вариант перечисления по строковому ключу.

**С версии:** 200.4.0

**Параметры:**
- `$key` — Ключ типа (`added`, `fixed` и т. д.).

**Возвращает:** `self` — Соответствующий вариант перечисления.

[](){#method_fromLegacyTag}
### fromLegacyTag()

Преобразует legacy-тег из старого формата changelog в вариант перечисления.

**С версии:** 200.4.0

**Параметры:**
- `$tag` — Тег в формате MHAdmin (`NEW`, `UPDATE`, `FIX` и т. д.).

**Возвращает:** `self` — Соответствующий вариант перечисления.

[](){#method_key}
### key()

Возвращает машинный ключ типа для массивов и шаблонов.

**С версии:** 200.4.0

**Возвращает:** `string` — Ключ в нижнем регистре (`added`, `fixed` и т. д.).

[](){#method_label}
### label()

Возвращает англоязычную метку типа для внутреннего использования.

**С версии:** 200.4.0

**Возвращает:** `string` — Метка на английском (`Added`, `Fixed` и т. д.).

[](){#method_title}
### title()

Возвращает локализованный заголовок секции changelog.

**С версии:** 200.4.0

**Возвращает:** `string` — Переведённый заголовок для отображения в админке.
