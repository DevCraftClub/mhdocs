---
tags:
  - PHP
  - DLE
  - Плагин
  - Админка
title: "Класс: PluginContext - DevCraft Admin"
description: "Документация по плагину класс: plugincontext для DLE."
keywords: "PHP, DLE, Плагин, Админка, класс: plugincontext, DevCraft, документация"
author: "Maxim Harder"
og:title: "Класс: PluginContext"
og:description: "Документация по плагину класс: plugincontext для DLE."
og:image: "https://devcraft.club/data/assets/logo_default/devcraftx2.png"
twitter:title: "Класс: PluginContext"
twitter:description: "Документация по плагину класс: plugincontext для DLE."
---

# Класс: PluginContext

## Краткое содержание:

Контекст одного DevCraft-модуля после загрузки manifest.php.

---

### Свойства
* private $[settingsSchema](#property_settingsSchema)

---

### Методы
* public [__construct()](#method___construct)
* public [mod()](#method_mod)
* public [meta()](#method_meta)
* public [menu()](#method_menu)
* public [pageClass()](#method_pageClass)
* public [defaultAction()](#method_defaultAction)
* public [settingsSchema()](#method_settingsSchema)
* public [filterSchema()](#method_filterSchema)
* public [ajaxMethods()](#method_ajaxMethods)
* public [ajaxController()](#method_ajaxController)
* public [modulePath()](#method_modulePath)
* public [jsAssetFiles()](#method_jsAssetFiles)
* public [moduleData()](#method_moduleData)
* public [changelog()](#method_changelog)
* private [parseMenu()](#method_parseMenu)
* private [parseAjaxMethods()](#method_parseAjaxMethods)
* private [loadSchemas()](#method_loadSchemas)

---

### Подробности

* Путь: `devcraft/src/classes/Module/PluginContext.php`

---

## Детали

### Свойства

[](){#property_settingsSchema}
#### $settingsSchema

Контекст одного DevCraft-модуля после загрузки manifest.php.


### Методы

[](){#method___construct}
### __construct()

Создаёт контекст плагина из загруженного манифеста и пути к модулю.

**С версии:** 200.4.0

**Параметры:**
- `$mod` — Идентификатор модуля в URL админки.
- `$modulePath` — Абсолютный путь к каталогу модуля.

[](){#method_mod}
### mod()

Возвращает идентификатор модуля (mod) для URL и конфигурации.

**С версии:** 200.4.0

**Возвращает:** `string` — Значение mod из манифеста или переопределения.

[](){#method_meta}
### meta()

Возвращает блок meta манифеста с добавленным module_code.

**С версии:** 200.4.0

**Возвращает:** `array<string,` — mixed> Метаданные модуля для шаблонов.

[](){#method_menu}
### menu()

Возвращает пункты меню админки модуля.

**С версии:** 200.4.0

**Возвращает:** `AdminLink[]` — Ссылки меню из manifest.php.

[](){#method_pageClass}
### pageClass()

Возвращает FQCN класса страницы для указанного action.

**С версии:** 200.4.0

**Параметры:**
- `$action` — Имя action из URL.

**Возвращает:** `string|null` — FQCN класса страницы или null.

[](){#method_defaultAction}
### defaultAction()

Возвращает action страницы по умолчанию (start) для модуля.

**С версии:** 200.4.0

**Возвращает:** `string|null` — Имя action или null, если меню пусто.

[](){#method_settingsSchema}
### settingsSchema()

Возвращает схему настроек модуля, если файл settings.schema.php существует.

**С версии:** 200.4.0

**Возвращает:** `FormSchema|null` — Схема полей или null.

[](){#method_filterSchema}
### filterSchema()

Возвращает схему фильтра для указанного action (например, «logs»).

**С версии:** 200.4.0

**Параметры:**
- `$action` — Ключ action, для которого загружена схема фильтра.

**Возвращает:** `FilterSchema|null` — Схема фильтра или null.

[](){#method_ajaxMethods}
### ajaxMethods()

Возвращает карту зарегистрированных AJAX-методов модуля.

**С версии:** 200.4.0

**Возвращает:** `array<string,` — class-string> Имя метода => FQCN обработчика.

[](){#method_ajaxController}
### ajaxController()

Возвращает идентификатор AJAX-контроллера из манифеста.

**С версии:** 200.4.0

**Возвращает:** `string` — Значение ajax.controller (по умолчанию «admin»).

[](){#method_modulePath}
### modulePath()

Возвращает абсолютный путь к корневому каталогу модуля.

**С версии:** 200.4.0

**Возвращает:** `string` — Путь к каталогу модуля на диске.

[](){#method_jsAssetFiles}
### jsAssetFiles()

Возвращает список имён JS-файлов из секции assets.js манифеста.

**С версии:** 200.4.0

**Возвращает:** `list<string>` — Имена файлов относительно Public/.

[](){#method_moduleData}
### moduleData()

Формирует объект ModuleData для реестра и шаблонов.

**С версии:** 200.4.0

**Возвращает:** `ModuleData` — Агрегированные метаданные модуля.

[](){#method_changelog}
### changelog()

Возвращает записи changelog модуля.

**С версии:** 200.4.0

**Возвращает:** `Changelog[]` — История изменений из changelog.data.php.

[](){#method_parseMenu}
### parseMenu()

Преобразует сырой массив menu из манифеста в объекты AdminLink.

**С версии:** 200.4.0

**Возвращает:** `AdminLink[]` — Только элементы типа AdminLink.

[](){#method_parseAjaxMethods}
### parseAjaxMethods()

Нормализует карту AJAX-методов из манифеста.

**С версии:** 200.4.0

**Возвращает:** `array<string,` — class-string> Валидные пары method => handler.

[](){#method_loadSchemas}
### loadSchemas()

Загружает settings.schema.php и logs.filter.schema.php модуля при наличии.

**С версии:** 200.4.0
