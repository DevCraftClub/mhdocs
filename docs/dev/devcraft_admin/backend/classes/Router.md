---
tags:
  - PHP
  - DLE
  - Плагин
  - Админка
title: "Класс: Router - DevCraft Admin"
description: "Документация по плагину класс: router для DLE."
keywords: "PHP, DLE, Плагин, Админка, класс: router, DevCraft, документация"
author: "Maxim Harder"
og:title: "Класс: Router"
og:description: "Документация по плагину класс: router для DLE."
og:image: "https://devcraft.club/data/assets/logo_default/devcraftx2.png"
twitter:title: "Класс: Router"
twitter:description: "Документация по плагину класс: router для DLE."
---

# Класс: Router

## Краткое содержание:

Маршрутизатор административных запросов DevCraft.

---

### Свойства
*Нет публичных свойств.*

---

### Методы
* public [dispatch()](#method_dispatch)
* private [buildModuleJsUrls()](#method_buildModuleJsUrls)
* private [buildTranslationJsUrl()](#method_buildTranslationJsUrl)
* private [buildMetroI18nUrl()](#method_buildMetroI18nUrl)
* private [layoutWrap()](#method_layoutWrap)

---

### Подробности

* Путь: `devcraft/src/classes/Admin/Router.php`

---

## Детали

### Методы

[](){#method_dispatch}
### dispatch()

Обрабатывает запрос админки: инициализирует контекст, вызывает страницу и рендерит layout.

**С версии:** 200.4.0

**Параметры:**
- `$plugin` — Контекст модуля.
- `$action` — Имя действия или пустая строка для значения по умолчанию.

[](){#method_buildModuleJsUrls}
### buildModuleJsUrls()

Собирает URL публичных JS-файлов модуля с версией по mtime.

**С версии:** 200.4.0

**Параметры:**
- `$plugin` — Контекст модуля.

**Возвращает:** `list<string>` — URL скриптов модуля.

[](){#method_buildTranslationJsUrl}
### buildTranslationJsUrl()

Формирует URL JS-файла переводов DevCraft для локали.

**С версии:** 200.4.0

**Параметры:**
- `$locale` — Код локали DevCraft.

**Возвращает:** `string` — URL с параметром версии.

[](){#method_buildMetroI18nUrl}
### buildMetroI18nUrl()

Формирует URL локали Metro UI или null, если addon отсутствует.

**С версии:** 200.4.0

**Параметры:**
- `$metroLocale` — Код локали Metro.

**Возвращает:** `string|null` — URL JS-локали или null.

[](){#method_layoutWrap}
### layoutWrap()

Оборачивает содержимое страницы в общий layout админки.

**С версии:** 200.4.0

**Параметры:**
- `$contentView` — Ключ шаблона страницы.
- `$adminContext` — Контекст админки.
- `$version` — Версия модуля для layout.

**Возвращает:** `string` — HTML layout.
