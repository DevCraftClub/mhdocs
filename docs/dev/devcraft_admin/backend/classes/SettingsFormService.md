---
tags:
  - PHP
  - DLE
  - Плагин
  - Админка
title: "Класс: SettingsFormService - DevCraft Admin"
description: "Документация по плагину класс: settingsformservice для DLE."
keywords: "PHP, DLE, Плагин, Админка, класс: settingsformservice, DevCraft, документация"
author: "Maxim Harder"
og:title: "Класс: SettingsFormService"
og:description: "Документация по плагину класс: settingsformservice для DLE."
og:image: "https://devcraft.club/data/assets/logo_default/devcraftx2.png"
twitter:title: "Класс: SettingsFormService"
twitter:description: "Документация по плагину класс: settingsformservice для DLE."
---

# Класс: SettingsFormService

## Краткое содержание:

Строит view-model и валидирует данные формы настроек модуля.

---

### Свойства
*Нет публичных свойств.*

---

### Методы
* public [buildViewModel()](#method_buildViewModel)
* public [buildFilters()](#method_buildFilters)
* public [validatePartial()](#method_validatePartial)
* public [applyConfigDefaults()](#method_applyConfigDefaults)
* private [multiValueToArray()](#method_multiValueToArray)
* private [filterFieldValue()](#method_filterFieldValue)

---

### Подробности

* Путь: `devcraft/src/classes/Admin/SettingsFormService.php`

---

## Детали

### Методы

[](){#method_buildViewModel}
### buildViewModel()

Формирует view-model формы настроек для Twig.

**С версии:** 200.4.0

**Параметры:**
- `$schema` — Схема полей настроек.

**Возвращает:** `array<string,` — mixed> Данные формы: codename, layout, sections, save_url.

[](){#method_buildFilters}
### buildFilters()

Собирает карту PHP-фильтров для полей схемы.

**С версии:** 200.4.0

**Параметры:**
- `$schema` — Схема полей настроек.

**Возвращает:** `array<string,` — int> id поля => константа filter_var.

[](){#method_validatePartial}
### validatePartial()

Валидирует частичный ввод настроек по схеме.

**С версии:** 200.4.0

**Параметры:**
- `$schema` — Схема полей настроек.

**Возвращает:** `array{valid: array<string, mixed>, errors: array<string, string>}` — Валидные значения и ошибки по id.

[](){#method_applyConfigDefaults}
### applyConfigDefaults()

Подставляет значения по умолчанию и нормализует типы полей конфигурации.

**С версии:** 200.4.0

**Параметры:**
- `$schema` — Схема полей настроек.

**Возвращает:** `array<string,` — mixed> Значения с учётом defaults DevCraftConfig.

[](){#method_multiValueToArray}
### multiValueToArray()

Преобразует значение multi-поля в список строк.

**С версии:** 200.4.0

**Параметры:**
- `$value` — Сырые данные поля.

**Возвращает:** `list<string>` — Нормализованный список значений.

[](){#method_filterFieldValue}
### filterFieldValue()

Применяет filter_var к значению поля согласно типу или явному фильтру.

**С версии:** 200.4.0

**Параметры:**
- `$field` — Объект поля схемы.
- `$raw` — Сырое значение.

**Возвращает:** `mixed` — Отфильтрованное значение или false при ошибке.
