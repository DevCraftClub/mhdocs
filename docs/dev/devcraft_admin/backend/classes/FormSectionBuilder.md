---
tags:
  - PHP
  - DLE
  - Плагин
  - Админка
title: "Класс: FormSectionBuilder - DevCraft Admin"
description: "Документация по плагину класс: formsectionbuilder для DLE."
keywords: "PHP, DLE, Плагин, Админка, класс: formsectionbuilder, DevCraft, документация"
author: "Maxim Harder"
og:title: "Класс: FormSectionBuilder"
og:description: "Документация по плагину класс: formsectionbuilder для DLE."
og:image: "https://devcraft.club/data/assets/logo_default/devcraftx2.png"
twitter:title: "Класс: FormSectionBuilder"
twitter:description: "Документация по плагину класс: formsectionbuilder для DLE."
---

# Класс: FormSectionBuilder

## Краткое содержание:

Fluent-строитель секции формы с набором полей.

---

### Свойства
* private $[pending](#property_pending)

---

### Методы
* public [__construct()](#method___construct)
* public [text()](#method_text)
* public [number()](#method_number)
* public [select()](#method_select)
* public [multi()](#method_multi)
* public [checkbox()](#method_checkbox)
* public [textarea()](#method_textarea)
* public [hidden()](#method_hidden)
* public [section()](#method_section)
* public [build()](#method_build)
* public [beginField()](#method_beginField)
* public [commitField()](#method_commitField)
* public [toSection()](#method_toSection)
* private [commitPending()](#method_commitPending)

---

### Подробности

* Путь: `devcraft/src/classes/Form/FormSectionBuilder.php`

---

## Детали

### Свойства

[](){#property_pending}
#### $pending

Fluent-строитель секции формы с набором полей.


### Методы

[](){#method___construct}
### __construct()

Создаёт строитель секции.

**С версии:** 200.4.0

**Параметры:**
- `$schemaBuilder` — Родительская схема.
- `$title` — Заголовок секции.

[](){#method_text}
### text()

Добавляет текстовое поле в секцию.

**С версии:** 200.4.0

**Параметры:**
- `$id` — Идентификатор поля.
- `$label` — Подпись.

**Возвращает:** `FormFieldBuilder` — Строитель поля.

[](){#method_number}
### number()

Добавляет числовое поле в секцию.

**С версии:** 200.4.0

**Параметры:**
- `$id` — Идентификатор поля.
- `$label` — Подпись.

**Возвращает:** `FormFieldBuilder` — Строитель поля.

[](){#method_select}
### select()

Добавляет поле select в секцию.

**С версии:** 200.4.0

**Параметры:**
- `$id` — Идентификатор поля.
- `$label` — Подпись.

**Возвращает:** `FormFieldBuilder` — Строитель поля.

[](){#method_multi}
### multi()

Добавляет поле множественного выбора в секцию.

**С версии:** 200.4.0

**Параметры:**
- `$id` — Идентификатор поля.
- `$label` — Подпись.

**Возвращает:** `FormFieldBuilder` — Строитель поля.

[](){#method_checkbox}
### checkbox()

Добавляет чекбокс в секцию.

**С версии:** 200.4.0

**Параметры:**
- `$id` — Идентификатор поля.
- `$label` — Подпись.

**Возвращает:** `FormFieldBuilder` — Строитель поля.

[](){#method_textarea}
### textarea()

Добавляет textarea в секцию.

**С версии:** 200.4.0

**Параметры:**
- `$id` — Идентификатор поля.
- `$label` — Подпись.

**Возвращает:** `FormFieldBuilder` — Строитель поля.

[](){#method_hidden}
### hidden()

Добавляет скрытое поле в секцию.

**С версии:** 200.4.0

**Параметры:**
- `$id` — Идентификатор поля.
- `$label` — Подпись (опционально).

**Возвращает:** `FormFieldBuilder` — Строитель поля.

[](){#method_section}
### section()

Фиксирует секцию и открывает следующую в схеме.

**С версии:** 200.4.0

**Параметры:**
- `$title` — Заголовок новой секции.

**Возвращает:** `FormSectionBuilder` — Строитель новой секции.

[](){#method_build}
### build()

Фиксирует секцию и возвращает готовую схему формы.

**С версии:** 200.4.0

**Возвращает:** `\DevCraft\Types\FormSchema` — Собранная схема.

[](){#method_beginField}
### beginField()

Начинает конфигурацию поля указанного типа.

**С версии:** 200.4.0

**Параметры:**
- `$id` — Идентификатор поля.
- `$type` — Тип поля.
- `$label` — Подпись.

**Возвращает:** `FormFieldBuilder` — Строитель поля.

[](){#method_commitField}
### commitField()

Добавляет готовое поле в секцию с проверкой уникальности id.

**С версии:** 200.4.0

**Параметры:**
- `$field` — Описание поля.

[](){#method_toSection}
### toSection()

Преобразует накопленные поля в объект FormSection.

**С версии:** 200.4.0

**Возвращает:** `FormSection` — Immutable-секция.

[](){#method_commitPending}
### commitPending()

Фиксирует незавершённое поле pending, если оно есть.

**С версии:** 200.4.0
