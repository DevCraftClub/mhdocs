---
tags:
  - PHP
  - DLE
  - Плагин
  - Админка
title: "Класс: FormSchemaBuilder - DevCraft Admin"
description: "Документация по плагину класс: formschemabuilder для DLE."
keywords: "PHP, DLE, Плагин, Админка, класс: formschemabuilder, DevCraft, документация"
author: "Maxim Harder"
og:title: "Класс: FormSchemaBuilder"
og:description: "Документация по плагину класс: formschemabuilder для DLE."
og:image: "https://devcraft.club/data/assets/logo_default/devcraftx2.png"
twitter:title: "Класс: FormSchemaBuilder"
twitter:description: "Документация по плагину класс: formschemabuilder для DLE."
---

# Класс: FormSchemaBuilder

## Краткое содержание:

Fluent-строитель декларативной схемы формы настроек или фильтра.

---

### Свойства
* private $[currentSection](#property_currentSection)

---

### Методы
* private [__construct()](#method___construct)
* public [create()](#method_create)
* public [layout()](#method_layout)
* public [layoutStack()](#method_layoutStack)
* public [layoutTabs()](#method_layoutTabs)
* public [layoutAccordion()](#method_layoutAccordion)
* public [section()](#method_section)
* public [commitSection()](#method_commitSection)
* public [build()](#method_build)
* private [commitCurrentSection()](#method_commitCurrentSection)

---

### Подробности

* Путь: `devcraft/src/classes/Form/FormSchemaBuilder.php`

---

## Детали

### Свойства

[](){#property_currentSection}
#### $currentSection

Fluent-строитель декларативной схемы формы настроек или фильтра.


### Методы

[](){#method___construct}
### __construct()

Создаёт строитель схемы с заданным codename.

**С версии:** 200.4.0

**Параметры:**
- `$codename` — Уникальный код формы.
- `$layout` — Начальный layout (stack по умолчанию).

[](){#method_create}
### create()

Создаёт новый строитель схемы формы.

**С версии:** 200.4.0

**Параметры:**
- `$codename` — Уникальный код формы.

**Возвращает:** `self` — Экземпляр строителя.

[](){#method_layout}
### layout()

Задаёт режим компоновки секций.

**С версии:** 200.4.0

**Параметры:**
- `$layout` — stack, tabs или accordion.

**Возвращает:** `self` — Текущий строитель.

[](){#method_layoutStack}
### layoutStack()

Устанавливает layout stack (вертикальный стек секций).

**С версии:** 200.4.0

**Возвращает:** `self` — Текущий строитель.

[](){#method_layoutTabs}
### layoutTabs()

Устанавливает layout tabs (вкладки).

**С версии:** 200.4.0

**Возвращает:** `self` — Текущий строитель.

[](){#method_layoutAccordion}
### layoutAccordion()

Устанавливает layout accordion (аккордеон).

**С версии:** 200.4.0

**Возвращает:** `self` — Текущий строитель.

[](){#method_section}
### section()

Открывает новую секцию формы.

**С версии:** 200.4.0

**Параметры:**
- `$title` — Заголовок секции.

**Возвращает:** `FormSectionBuilder` — Строитель секции.

[](){#method_commitSection}
### commitSection()

Фиксирует секцию, построенную FormSectionBuilder.

**С версии:** 200.4.0

**Параметры:**
- `$sectionBuilder` — Завершённый строитель секции.

[](){#method_build}
### build()

Собирает immutable-объект FormSchema.

**С версии:** 200.4.0

**Возвращает:** `FormSchema` — Готовая схема формы.

[](){#method_commitCurrentSection}
### commitCurrentSection()

Фиксирует текущую незавершённую секцию, если она есть.

**С версии:** 200.4.0
