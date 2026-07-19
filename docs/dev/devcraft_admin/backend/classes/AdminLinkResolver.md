---
tags:
  - PHP
  - DLE
  - Плагин
  - Админка
title: "Класс: AdminLinkResolver - DevCraft Admin"
description: "Документация по плагину класс: adminlinkresolver для DLE."
keywords: "PHP, DLE, Плагин, Админка, класс: adminlinkresolver, DevCraft, документация"
author: "Maxim Harder"
og:title: "Класс: AdminLinkResolver"
og:description: "Документация по плагину класс: adminlinkresolver для DLE."
og:image: "https://devcraft.club/data/assets/logo_default/devcraftx2.png"
twitter:title: "Класс: AdminLinkResolver"
twitter:description: "Документация по плагину класс: adminlinkresolver для DLE."
---

# Класс: AdminLinkResolver

## Краткое содержание:

Разрешает действия и классы страниц по дереву пунктов меню.

---

### Свойства
*Нет публичных свойств.*

---

### Методы
* public [resolvePageClass()](#method_resolvePageClass)
* public [pluginLinks()](#method_pluginLinks)
* public [defaultAction()](#method_defaultAction)
* public [collectActions()](#method_collectActions)
* public [validateStartActions()](#method_validateStartActions)

---

### Подробности

* Путь: `devcraft/src/classes/Admin/AdminLinkResolver.php`

---

## Детали

### Методы

[](){#method_resolvePageClass}
### resolvePageClass()

Находит класс страницы по имени действия в дереве меню.

**С версии:** 200.4.0

**Параметры:**
- `$menu` — Дерево пунктов меню.
- `$action` — Искомое действие.

**Возвращает:** `string|null` — FQCN обработчика страницы или null.

[](){#method_pluginLinks}
### pluginLinks()

Возвращает пункты меню плагина без изменений (точка расширения).

**С версии:** 200.4.0

**Параметры:**
- `$menu` — Дерево пунктов меню.

**Возвращает:** `AdminLink[]` — Тот же массив ссылок.

[](){#method_defaultAction}
### defaultAction()

Определяет стартовое действие модуля по доступным пунктам меню.

**С версии:** 200.4.0

**Параметры:**
- `$menu` — Дерево пунктов меню.

**Возвращает:** `string|null` — Имя действия dashboard/index или null.

[](){#method_collectActions}
### collectActions()

Собирает все имена действий из дерева меню рекурсивно.

**С версии:** 200.4.0

**Параметры:**
- `$menu` — Дерево пунктов меню.

**Возвращает:** `string[]` — Список имён действий.

[](){#method_validateStartActions}
### validateStartActions()

Проверяет, что в меню не объявлены одновременно dashboard и index.

**С версии:** 200.4.0

**Параметры:**
- `$menu` — Дерево пунктов меню.
