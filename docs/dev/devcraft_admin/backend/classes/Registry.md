---
tags:
  - PHP
  - DLE
  - Плагин
  - Админка
title: "Класс: Registry - DevCraft Admin"
description: "Документация по плагину класс: registry для DLE."
keywords: "PHP, DLE, Плагин, Админка, класс: registry, DevCraft, документация"
author: "Maxim Harder"
og:title: "Класс: Registry"
og:description: "Документация по плагину класс: registry для DLE."
og:image: "https://devcraft.club/data/assets/logo_default/devcraftx2.png"
twitter:title: "Класс: Registry"
twitter:description: "Документация по плагину класс: registry для DLE."
---

# Класс: Registry

## Краткое содержание:

Реестр модулей DevCraft и фабрика контекстов плагинов.

---

### Свойства
*Нет публичных свойств.*

---

### Методы
* public [modules()](#method_modules)
* public [module()](#method_module)
* public [page_class()](#method_page_class)
* public [forMod()](#method_forMod)
* public [forModuleDir()](#method_forModuleDir)
* private [listModuleDirectories()](#method_listModuleDirectories)

---

### Подробности

* Путь: `devcraft/src/classes/Module/Registry.php`

---

## Детали

### Методы

[](){#method_modules}
### modules()

Возвращает карту активных модулей, индексированную по идентификатору mod.

**С версии:** 200.4.0

**Возвращает:** `array<string,` — ModuleData> Метаданные модулей с валидным манифестом.

[](){#method_module}
### module()

Возвращает метаданные одного модуля по идентификатору mod.

**С версии:** 200.4.0

**Параметры:**
- `$module_id` — Идентификатор модуля из manifest.php.

**Возвращает:** `ModuleData|null` — Данные модуля или null, если модуль не найден.

[](){#method_page_class}
### page_class()

Возвращает FQCN класса страницы для action модуля.

**С версии:** 200.4.0

**Параметры:**
- `$module_id` — Идентификатор модуля (mod).
- `$action` — Имя action из URL админки.

**Возвращает:** `string|null` — FQCN класса страницы или null.

[](){#method_forMod}
### forMod()

Ищет контекст плагина по идентификатору mod среди всех каталогов модулей.

**С версии:** 200.4.0

**Параметры:**
- `$mod` — Идентификатор модуля из manifest.php.

**Возвращает:** `PluginContext|null` — Контекст плагина или null.

[](){#method_forModuleDir}
### forModuleDir()

Загружает контекст плагина по имени каталога модуля.

**С версии:** 200.4.0

**Параметры:**
- `$moduleDir` — Имя каталога относительно DEVCRAFT_MODULES.
- `$modOverride` — Переопределение mod из манифеста (необязательно).

**Возвращает:** `PluginContext|null` — Контекст плагина или null при ошибке загрузки.

[](){#method_listModuleDirectories}
### listModuleDirectories()

Возвращает отсортированный список имён каталогов модулей с manifest.php.

**С версии:** 200.4.0

**Возвращает:** `string[]` — Имена подкаталогов DEVCRAFT_MODULES.
