---
tags:
  - PHP
  - DLE
  - Плагин
  - Админка
title: "Класс: AbstractPage - DevCraft Admin"
description: "Документация по плагину класс: abstractpage для DLE."
keywords: "PHP, DLE, Плагин, Админка, класс: abstractpage, DevCraft, документация"
author: "Maxim Harder"
og:title: "Класс: AbstractPage"
og:description: "Документация по плагину класс: abstractpage для DLE."
og:image: "https://devcraft.club/data/assets/logo_default/devcraftx2.png"
twitter:title: "Класс: AbstractPage"
twitter:description: "Документация по плагину класс: abstractpage для DLE."
---

# Класс: AbstractPage

## Краткое содержание:

Базовый класс административной страницы с доступом к Twig и контексту админки.

---

### Свойства
* private $[adminContext](#property_adminContext)

---

### Методы
* public [resolveViewKey()](#method_resolveViewKey)
* public [bindAdminContext()](#method_bindAdminContext)
* protected [adminContext()](#method_adminContext)
* protected [addBreadcrumb()](#method_addBreadcrumb)
* protected [twig()](#method_twig)
* protected [render()](#method_render)

---

### Подробности

* Путь: `devcraft/src/classes/Abstracts/AbstractPage.php`

---

## Детали

### Свойства

[](){#property_adminContext}
#### $adminContext

Базовый класс административной страницы с доступом к Twig и контексту админки.


### Методы

[](){#method_resolveViewKey}
### resolveViewKey()

Нормализует ключ представления для загрузчика Twig.

**С версии:** 200.4.0

**Параметры:**
- `$view` — Относительный или абсолютный ключ шаблона.

**Возвращает:** `string` — Ключ, понятный загрузчику шаблонов DevCraft.

[](){#method_bindAdminContext}
### bindAdminContext()

Привязывает контекст админки к экземпляру страницы.

**С версии:** 200.4.0

**Параметры:**
- `$adminContext` — Контекст текущего запроса админки.

[](){#method_adminContext}
### adminContext()

Возвращает привязанный контекст админки.

**С версии:** 200.4.0

**Возвращает:** `AdminContext` — Контекст текущего запроса.

[](){#method_addBreadcrumb}
### addBreadcrumb()

Добавляет элемент хлебных крошек в контекст админки.

**С версии:** 200.4.0

**Параметры:**
- `$title` — Заголовок элемента.
- `$url` — URL элемента или `null` для текущей страницы.

[](){#method_twig}
### twig()

Возвращает экземпляр Twig из приложения.

**С версии:** 200.4.0

**Возвращает:** `Environment` — Настроенный движок шаблонов.

[](){#method_render}
### render()

Рендерит Twig-шаблон с переданными данными.

**С версии:** 200.4.0

**Параметры:**
- `$view` — Ключ или путь шаблона.

**Возвращает:** `string` — Сгенерированная HTML-разметка.
