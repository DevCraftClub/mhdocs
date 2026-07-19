---
tags:
  - PHP
  - DLE
  - Плагин
  - Админка
title: "Интерфейс: FilterableRepositoryInterface - DevCraft Admin"
description: "Документация по плагину интерфейс: filterablerepositoryinterface для DLE."
keywords: "PHP, DLE, Плагин, Админка, интерфейс: filterablerepositoryinterface, DevCraft, документация"
author: "Maxim Harder"
og:title: "Интерфейс: FilterableRepositoryInterface"
og:description: "Документация по плагину интерфейс: filterablerepositoryinterface для DLE."
og:image: "https://devcraft.club/data/assets/logo_default/devcraftx2.png"
twitter:title: "Интерфейс: FilterableRepositoryInterface"
twitter:description: "Документация по плагину интерфейс: filterablerepositoryinterface для DLE."
---

# Интерфейс: FilterableRepositoryInterface

## Краткое содержание:

Контракт репозитория с метаданными для построения фильтров админки.

---

### Свойства
*Нет публичных свойств.*

---

### Методы
* public [distinctColumnValues()](#method_distinctColumnValues)
* public [columnBounds()](#method_columnBounds)

---

### Подробности

* Путь: `devcraft/src/classes/Interfaces/FilterableRepositoryInterface.php`

---

## Детали

### Методы

[](){#method_distinctColumnValues}
### distinctColumnValues()

Возвращает уникальные значения указанной колонки для выпадающих фильтров.

**С версии:** 200.4.0

**Параметры:**
- `$column` — Имя колонки в таблице сущности.

**Возвращает:** `list<string>` — Отсортированный список уникальных строковых значений.

[](){#method_columnBounds}
### columnBounds()

Возвращает минимальное и максимальное значение колонки для диапазонных фильтров.

**С версии:** 200.4.0

**Параметры:**
- `$column` — Имя колонки в таблице сущности.

**Возвращает:** `array{min: mixed, max: mixed}` — Границы диапазона или `null` при отсутствии данных.
