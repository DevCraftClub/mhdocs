---
tags:
  - PHP
  - DLE
  - Плагин
  - Админка
title: "Класс: DataLoaderService - DevCraft Admin"
description: "Документация по плагину класс: dataloaderservice для DLE."
keywords: "PHP, DLE, Плагин, Админка, класс: dataloaderservice, DevCraft, документация"
author: "Maxim Harder"
og:title: "Класс: DataLoaderService"
og:description: "Документация по плагину класс: dataloaderservice для DLE."
og:image: "https://devcraft.club/data/assets/logo_default/devcraftx2.png"
twitter:title: "Класс: DataLoaderService"
twitter:description: "Документация по плагину класс: dataloaderservice для DLE."
---

# Класс: DataLoaderService

## Краткое содержание:

Загружает строки из таблиц DLE через Cycle SelectQuery с кешированием.

---

### Свойства
*Нет публичных свойств.*

---

### Методы
* public [__construct()](#method___construct)
* public [loadData()](#method_loadData)
* public [clearCache()](#method_clearCache)
* private [normalizeArgs()](#method_normalizeArgs)
* private [executeQuery()](#method_executeQuery)
* private [applyWhere()](#method_applyWhere)
* private [applyOrder()](#method_applyOrder)
* private [normalizeSortDirection()](#method_normalizeSortDirection)
* private [resolveDatabaseForTable()](#method_resolveDatabaseForTable)
* private [resolvePrefix()](#method_resolvePrefix)
* private [readCache()](#method_readCache)
* private [writeCache()](#method_writeCache)

---

### Подробности

* Путь: `devcraft/src/classes/Support/DataLoaderService.php`

---

## Детали

### Методы

[](){#method___construct}
### __construct()

Создаёт сервис загрузки данных.

**С версии:** 173.3.0

**Параметры:**
- `$db` — Шлюз базы данных.
- `$cacheTimer` — Время жизни кеша в секундах.

[](){#method_loadData}
### loadData()

Загружает данные таблицы DLE с кешированием (legacy load_data).

**С версии:** 173.3.0

**Возвращает:** `array<int, array<string, mixed>>` — Строки результата или пустой массив при ошибке.

[](){#method_clearCache}
### clearCache()

Очищает кеш загрузчика целиком или по ключу.

**С версии:** 173.3.0

**Параметры:**
- `$key` — Ключ записи кеша или null для полной очистки типа.

[](){#method_normalizeArgs}
### normalizeArgs()

Сортирует ключи аргументов для стабильного ключа кеша.

**С версии:** 173.3.0

**Возвращает:** `array<string,` — mixed> Аргументы с ksort по ключам.

[](){#method_executeQuery}
### executeQuery()

Выполняет SELECT к таблице DLE через Cycle SelectQuery.

**С версии:** 173.3.0

**Возвращает:** `array<int, array<string, mixed>>` — Строки результата fetchAll().

[](){#method_applyWhere}
### applyWhere()

Применяет условия where к SelectQuery.

**С версии:** 173.3.0

**Параметры:**
- `$select` — Объект запроса.

[](){#method_applyOrder}
### applyOrder()

Применяет сортировку orderBy к SelectQuery.

**С версии:** 173.3.0

**Параметры:**
- `$select` — Объект запроса.

[](){#method_normalizeSortDirection}
### normalizeSortDirection()

Нормализует направление сортировки в константу SelectQuery.

**С версии:** 173.3.0

**Параметры:**
- `$direction` — Строка ASC/DESC.

**Возвращает:** `string` — SelectQuery::SORT_ASC или SelectQuery::SORT_DESC.

[](){#method_resolveDatabaseForTable}
### resolveDatabaseForTable()

Возвращает Cycle Database с корректным префиксом таблицы.

**С версии:** 173.3.0

**Параметры:**
- `$table` — Имя таблицы без префикса.

**Возвращает:** `DatabaseInterface` — Подключение с нужным prefix.

[](){#method_resolvePrefix}
### resolvePrefix()

Определяет PREFIX или USERPREFIX для таблицы DLE.

**С версии:** 173.3.0

**Параметры:**
- `$table` — Имя таблицы.

**Возвращает:** `string` — Префикс без завершающего подчёркивания.

[](){#method_readCache}
### readCache()

Читает закешированные строки, если TTL не истёк.

**С версии:** 173.3.0

**Параметры:**
- `$cacheKey` — Ключ записи кеша.

**Возвращает:** `array<int, array<string, mixed>>` — |null Строки или null при промахе/истечении.

[](){#method_writeCache}
### writeCache()

Записывает строки результата в кеш.

**С версии:** 173.3.0

**Параметры:**
- `$cacheKey` — Ключ записи.
