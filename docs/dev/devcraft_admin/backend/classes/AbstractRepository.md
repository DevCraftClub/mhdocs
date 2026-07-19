---
tags:
  - PHP
  - DLE
  - Плагин
  - Админка
title: "Класс: AbstractRepository - DevCraft Admin"
description: "Документация по плагину класс: abstractrepository для DLE."
keywords: "PHP, DLE, Плагин, Админка, класс: abstractrepository, DevCraft, документация"
author: "Maxim Harder"
og:title: "Класс: AbstractRepository"
og:description: "Документация по плагину класс: abstractrepository для DLE."
og:image: "https://devcraft.club/data/assets/logo_default/devcraftx2.png"
twitter:title: "Класс: AbstractRepository"
twitter:description: "Документация по плагину класс: abstractrepository для DLE."
---

# Класс: AbstractRepository

## Краткое содержание:

Базовый Cycle ORM-репозиторий с фильтрацией, пагинацией и метаданными колонок.

---

### Свойства
*Нет публичных свойств.*

---

### Методы
* public [getFirst()](#method_getFirst)
* public [getLast()](#method_getLast)
* public [limit()](#method_limit)
* public [total()](#method_total)
* public [findFiltered()](#method_findFiltered)
* public [distinctColumnValues()](#method_distinctColumnValues)
* public [columnBounds()](#method_columnBounds)
* public [deleteEntity()](#method_deleteEntity)
* public [deleteByColumn()](#method_deleteByColumn)
* protected [applyCriteria()](#method_applyCriteria)
* protected [applyBetween()](#method_applyBetween)
* protected [extractColumnValue()](#method_extractColumnValue)
* protected [stringifyColumnValue()](#method_stringifyColumnValue)

---

### Подробности

* Путь: `devcraft/src/classes/Abstracts/AbstractRepository.php`

---

## Детали

### Методы

[](){#method_getFirst}
### getFirst()

Возвращает самую раннюю запись по дате создания.

**С версии:** 200.4.0

**Возвращает:** `object|null` — Первая сущность или `null`, если таблица пуста.

[](){#method_getLast}
### getLast()

Возвращает самую позднюю запись по дате создания.

**С версии:** 200.4.0

**Возвращает:** `object|null` — Последняя сущность или `null`, если таблица пуста.

[](){#method_limit}
### limit()

Возвращает ограниченный набор записей с заданным смещением.

**С версии:** 200.4.0

**Параметры:**
- `$total` — Количество записей.
- `$start` — Смещение от начала выборки.

**Возвращает:** `array<int,` — object> Список сущностей.

[](){#method_total}
### total()

Возвращает общее количество записей в таблице сущности.

**С версии:** 200.4.0

**Возвращает:** `int` — Число строк.

[](){#method_findFiltered}
### findFiltered()

Выполняет фильтрованную выборку с пагинацией и сортировкой.

**С версии:** 200.4.0

**Параметры:**
- `$page` — Номер страницы (начиная с 1).
- `$perPage` — Записей на странице.
- `$order` — Колонка сортировки.
- `$sort` — Направление (`asc` или `desc`).
- `$allowedOrderColumns` — Допустимые колонки сортировки.
- `$defaultOrder` — Колонка сортировки по умолчанию.

**Возвращает:** `array{items: object[], total: int}` — Элементы текущей страницы и общее количество.

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

[](){#method_deleteEntity}
### deleteEntity()

Удаляет сущность из базы данных.

**С версии:** 200.4.0

**Параметры:**
- `$entity` — Экземпляр сущности для удаления.

**Возвращает:** `bool` — Всегда `true` при успешном вызове менеджера ORM.

[](){#method_deleteByColumn}
### deleteByColumn()

Удаляет первую запись, соответствующую значению колонки.

**С версии:** 200.4.0

**Параметры:**
- `$column` — Имя колонки для поиска.
- `$value` — Значение для сравнения.

**Возвращает:** `bool` — `true`, если запись найдена и удалена; иначе `false`.

[](){#method_applyCriteria}
### applyCriteria()

Применяет список критериев фильтрации к объекту выборки Cycle ORM.

**С версии:** 200.4.0

**Параметры:**
- `$select` — Объект выборки Cycle ORM.

[](){#method_applyBetween}
### applyBetween()

Добавляет условие диапазона `between` к выборке.

**С версии:** 200.4.0

**Параметры:**
- `$select` — Объект выборки Cycle ORM.
- `$column` — Имя колонки.

[](){#method_extractColumnValue}
### extractColumnValue()

Извлекает строковое значение колонки из строки результата выборки.

**С версии:** 200.4.0

**Параметры:**
- `$row` — Строка результата (сущность, массив или объект).
- `$column` — Имя колонки.

**Возвращает:** `string` — Строковое представление значения или пустая строка.

[](){#method_stringifyColumnValue}
### stringifyColumnValue()

Преобразует значение колонки в строку для фильтров и отображения.

**С версии:** 200.4.0

**Параметры:**
- `$value` — Исходное значение.

**Возвращает:** `string` — Строковое представление.
