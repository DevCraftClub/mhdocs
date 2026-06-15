---
tags:
  - PHP
  - DLE
  - Плагин
  - Админка
title: "Класс: FormFieldBuilder - DevCraft Admin"
description: "Документация по плагину класс: formfieldbuilder для DLE."
keywords: "PHP, DLE, Плагин, Админка, класс: formfieldbuilder, DevCraft, документация"
author: "Maxim Harder"
og:title: "Класс: FormFieldBuilder"
og:description: "Документация по плагину класс: formfieldbuilder для DLE."
og:image: "https://devcraft.club/data/assets/logo_default/devcraftx2.png"
twitter:title: "Класс: FormFieldBuilder"
twitter:description: "Документация по плагину класс: formfieldbuilder для DLE."
---

# Класс: FormFieldBuilder

## Краткое содержание:

Fluent-строитель одного поля формы в цепочке FormSchemaBuilder.

---

### Свойства
* private $[description](#property_description)
* private $[filter](#property_filter)
* private $[columns](#property_columns)

---

### Методы
* public [__construct()](#method___construct)
* public [description()](#method_description)
* public [options()](#method_options)
* public [filter()](#method_filter)
* public [default()](#method_default)
* public [columns()](#method_columns)
* public [metro()](#method_metro)
* public [text()](#method_text)
* public [number()](#method_number)
* public [select()](#method_select)
* public [multi()](#method_multi)
* public [checkbox()](#method_checkbox)
* public [textarea()](#method_textarea)
* public [hidden()](#method_hidden)
* public [section()](#method_section)
* public [build()](#method_build)
* public [toField()](#method_toField)

---

### Подробности

* Путь: `devcraft/src/classes/Form/FormFieldBuilder.php`

---

## Детали

### Свойства

[](){#property_description}
#### $description

Описание поля.


[](){#property_filter}
#### $filter

Битовая маска фильтра DLE.


[](){#property_columns}
#### $columns

Число колонок сетки.


### Методы

[](){#method___construct}
### __construct()

Создаёт строитель поля в контексте секции и схемы.

**С версии:** 200.4.0

**Параметры:**
- `$sectionBuilder` — Родительская секция.
- `$schemaBuilder` — Корневая схема.
- `$id` — Идентификатор поля.
- `$type` — Тип поля.
- `$label` — Подпись поля.
- `$description` — Описание поля.
- `$filter` — Битовая маска фильтра DLE.
- `$default` — Значение по умолчанию.
- `$columns` — Число колонок сетки.

[](){#method_description}
### description()

Задаёт описание поля.

**С версии:** 200.4.0

**Параметры:**
- `$description` — Текст подсказки.

**Возвращает:** `self` — Текущий строитель для цепочки.

[](){#method_options}
### options()

Задаёт варианты выбора для select или multi.

**С версии:** 200.4.0

**Возвращает:** `self` — Текущий строитель.

[](){#method_filter}
### filter()

Задаёт битовую маску фильтра DLE для поля.

**С версии:** 200.4.0

**Параметры:**
- `$filter` — Маска фильтра.

**Возвращает:** `self` — Текущий строитель.

[](){#method_default}
### default()

Задаёт значение по умолчанию.

**С версии:** 200.4.0

**Параметры:**
- `$default` — Значение по умолчанию.

**Возвращает:** `self` — Текущий строитель.

[](){#method_columns}
### columns()

Задаёт ширину поля в колонках сетки Metro.

**С версии:** 200.4.0

**Параметры:**
- `$columns` — Число колонок (1–12).

**Возвращает:** `self` — Текущий строитель.

[](){#method_metro}
### metro()

Задаёт дополнительные атрибуты Metro UI.

**С версии:** 200.4.0

**Возвращает:** `self` — Текущий строитель.

[](){#method_text}
### text()

Начинает описание текстового поля в текущей секции.

**С версии:** 200.4.0

**Параметры:**
- `$id` — Идентификатор поля.
- `$label` — Подпись.

**Возвращает:** `self` — Новый строитель text-поля.

[](){#method_number}
### number()

Начинает описание числового поля.

**С версии:** 200.4.0

**Параметры:**
- `$id` — Идентификатор поля.
- `$label` — Подпись.

**Возвращает:** `self` — Новый строитель number-поля.

[](){#method_select}
### select()

Начинает описание поля select.

**С версии:** 200.4.0

**Параметры:**
- `$id` — Идентификатор поля.
- `$label` — Подпись.

**Возвращает:** `self` — Новый строитель select-поля.

[](){#method_multi}
### multi()

Начинает описание поля множественного выбора.

**С версии:** 200.4.0

**Параметры:**
- `$id` — Идентификатор поля.
- `$label` — Подпись.

**Возвращает:** `self` — Новый строитель multi-поля.

[](){#method_checkbox}
### checkbox()

Начинает описание чекбокса.

**С версии:** 200.4.0

**Параметры:**
- `$id` — Идентификатор поля.
- `$label` — Подпись.

**Возвращает:** `self` — Новый строитель checkbox-поля.

[](){#method_textarea}
### textarea()

Начинает описание многострочного поля.

**С версии:** 200.4.0

**Параметры:**
- `$id` — Идентификатор поля.
- `$label` — Подпись.

**Возвращает:** `self` — Новый строитель textarea-поля.

[](){#method_hidden}
### hidden()

Начинает описание скрытого поля.

**С версии:** 200.4.0

**Параметры:**
- `$id` — Идентификатор поля.
- `$label` — Подпись (может быть пустой).

**Возвращает:** `self` — Новый строитель hidden-поля.

[](){#method_section}
### section()

Фиксирует текущее поле и открывает новую секцию.

**С версии:** 200.4.0

**Параметры:**
- `$title` — Заголовок новой секции.

**Возвращает:** `FormSectionBuilder` — Строитель новой секции.

[](){#method_build}
### build()

Фиксирует поле и возвращает готовую схему формы.

**С версии:** 200.4.0

**Возвращает:** `\DevCraft\Types\FormSchema` — Собранная схема.

[](){#method_toField}
### toField()

Преобразует накопленные параметры в объект FormField.

**С версии:** 200.4.0

**Возвращает:** `FormField` — Immutable-описание поля.
