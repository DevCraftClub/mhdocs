---
tags:
  - PHP
  - DLE
  - Плагин
  - Админка
title: "Класс: DevCraftConfig - DevCraft Admin"
description: "Документация по плагину класс: devcraftconfig для DLE."
keywords: "PHP, DLE, Плагин, Админка, класс: devcraftconfig, DevCraft, документация"
author: "Maxim Harder"
og:title: "Класс: DevCraftConfig"
og:description: "Документация по плагину класс: devcraftconfig для DLE."
og:image: "https://devcraft.club/data/assets/logo_default/devcraftx2.png"
twitter:title: "Класс: DevCraftConfig"
twitter:description: "Документация по плагину класс: devcraftconfig для DLE."
---

# Класс: DevCraftConfig

## Краткое содержание:

Доступ к настройкам плагина DevCraft с учётом схемы и значений по умолчанию.

---

### Свойства
* private $[schema](#property_schema)
* private $[resolvedCache](#property_resolvedCache)

---

### Методы
* public [isEmptyValue()](#method_isEmptyValue)
* public [resolveField()](#method_resolveField)
* public [raw()](#method_raw)
* public [all()](#method_all)
* public [get()](#method_get)
* public [resetCache()](#method_resetCache)
* public [isSchemaLoading()](#method_isSchemaLoading)
* private [schema()](#method_schema)

---

### Подробности

* Путь: `devcraft/src/classes/Config/DevCraftConfig.php`

---

## Детали

### Свойства

[](){#property_schema}
#### $schema

Доступ к настройкам плагина DevCraft с учётом схемы и значений по умолчанию.


[](){#property_resolvedCache}
#### $resolvedCache

Признак активной загрузки settings.schema.php (защита от рекурсии __() ↔ schema).


### Методы

[](){#method_isEmptyValue}
### isEmptyValue()

Проверяет, считается ли значение настройки пустым.

**С версии:** 200.4.0

**Параметры:**
- `$value` — Проверяемое значение.

**Возвращает:** `bool` — True, если значение NULL, пустая строка или 0.

[](){#method_resolveField}
### resolveField()

Подставляет значение по умолчанию из схемы, если сырое значение пустое.

**С версии:** 200.4.0

**Параметры:**
- `$field` — Описание поля из FormSchema.
- `$raw` — Сырое значение из хранилища настроек.

**Возвращает:** `mixed` — Разрешённое значение поля.

[](){#method_raw}
### raw()

Возвращает сырой массив настроек из JSON без загрузки settings.schema.php.

**С версии:** 200.4.0

**Возвращает:** `array<string,` — mixed> Настройки из devcraft.json с миграцией ключей.

[](){#method_all}
### all()

Возвращает полный массив настроек DevCraft с применённой схемой и кешем.

**С версии:** 200.4.0

**Возвращает:** `array<string,` — mixed> Разрешённые настройки плагина.

[](){#method_get}
### get()

Возвращает одну настройку по ключу с необязательным значением по умолчанию.

**С версии:** 200.4.0

**Параметры:**
- `$key` — Идентификатор настройки.
- `$default` — Значение, если ключ отсутствует.

**Возвращает:** `mixed` — Значение настройки или $default.

[](){#method_resetCache}
### resetCache()

Сбрасывает внутренний кеш разрешённых настроек.

**С версии:** 200.4.0

[](){#method_isSchemaLoading}
### isSchemaLoading()

Проверяет, выполняется ли в данный момент require settings.schema.php.

**С версии:** 200.4.0

**Возвращает:** `bool` — true во время загрузки схемы настроек.

[](){#method_schema}
### schema()

Загружает и кеширует FormSchema из settings.schema.php модуля Admin.

**С версии:** 200.4.0

**Возвращает:** `FormSchema` — Схема полей настроек DevCraft.
