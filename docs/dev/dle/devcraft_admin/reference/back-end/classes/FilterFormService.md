---
tags:
  - PHP
  - DLE
  - Плагин
  - Админка
title: "Класс: FilterFormService - DevCraft Admin"
description: "Документация по плагину класс: filterformservice для DLE."
keywords: "PHP, DLE, Плагин, Админка, класс: filterformservice, DevCraft, документация"
author: "Maxim Harder"
og:title: "Класс: FilterFormService"
og:description: "Документация по плагину класс: filterformservice для DLE."
og:image: "https://devcraft.club/data/assets/logo_default/devcraftx2.png"
twitter:title: "Класс: FilterFormService"
twitter:description: "Документация по плагину класс: filterformservice для DLE."
---

# Класс: FilterFormService

## Краткое содержание:

Сервис фильтрации списковых страниц админки (наследник логики TwigFilter).

---

### Свойства
*Нет публичных свойств.*

---

### Методы
* public [getDefaultFilters()](#method_getDefaultFilters)
* public [getSort()](#method_getSort)
* public [resolveListCount()](#method_resolveListCount)
* public [normalizeOrder()](#method_normalizeOrder)
* public [buildLogsTableAjaxUrl()](#method_buildLogsTableAjaxUrl)
* public [parseRequestQuery()](#method_parseRequestQuery)
* public [parseRules()](#method_parseRules)
* public [buildCatalogViewModel()](#method_buildCatalogViewModel)
* public [buildChipViewModel()](#method_buildChipViewModel)
* public [createFilterChoices()](#method_createFilterChoices)
* public [createRangeFilter()](#method_createRangeFilter)
* public [createDateRangeFilter()](#method_createDateRangeFilter)
* public [rulesToCriteria()](#method_rulesToCriteria)
* private [isRuleComplete()](#method_isRuleComplete)
* private [enrichCatalogField()](#method_enrichCatalogField)
* private [findField()](#method_findField)
* private [formatRuleSummary()](#method_formatRuleSummary)
* private [appendMultiCriterion()](#method_appendMultiCriterion)
* private [appendTextCriterion()](#method_appendTextCriterion)
* private [appendBetweenCriterion()](#method_appendBetweenCriterion)

---

### Подробности

* Путь: `devcraft/src/classes/Admin/FilterFormService.php`

---

## Детали

### Методы

[](){#method_getDefaultFilters}
### getDefaultFilters()

Возвращает карту стандартных PHP-фильтров для query-параметров админки.

**С версии:** 173.3.0

**Возвращает:** `array<string,` — int> Объединённые фильтры без null-значений.

[](){#method_getSort}
### getSort()

Преобразует строку направления сортировки в константу SelectQuery.

**С версии:** 173.3.0

**Параметры:**
- `$sort` — Строка asc/desc.

**Возвращает:** `string` — SelectQuery::SORT_ASC или SelectQuery::SORT_DESC.

[](){#method_resolveListCount}
### resolveListCount()

Определяет размер страницы списка из настроек DevCraft или DLE.

**С версии:** 200.4.0

**Возвращает:** `int` — Число записей на странице.

[](){#method_normalizeOrder}
### normalizeOrder()

Нормализует имя колонки сортировки по допустимым ключам схемы.

**С версии:** 200.4.0

**Параметры:**
- `$order` — Запрошенная колонка.
- `$schema` — Схема фильтра.

**Возвращает:** `string` — Валидная колонка или исходное значение.

[](){#method_buildLogsTableAjaxUrl}
### buildLogsTableAjaxUrl()

Формирует URL Ajax-запроса таблицы журнала с параметрами фильтра.

**С версии:** 200.4.0

**Параметры:**
- `$userHash` — CSRF-хеш пользователя DLE.
- `$order` — Колонка сортировки.
- `$sort` — Направление сортировки.

**Возвращает:** `string` — Полный URL ajax-контроллера.

[](){#method_parseRequestQuery}
### parseRequestQuery()

Читает и санитизирует query-параметры текущего GET-запроса.

**С версии:** 173.3.4

**Возвращает:** `array<string,` — mixed> Нормализованные параметры запроса.

[](){#method_parseRules}
### parseRules()

Разбирает массив filter_rules в список нормализованных правил.

**С версии:** 200.4.0

**Возвращает:** `list<array<string, mixed>>` — Завершённые правила фильтрации.

[](){#method_buildCatalogViewModel}
### buildCatalogViewModel()

Строит view-model каталога полей фильтра с опциями из репозитория.

**С версии:** 200.4.0

**Параметры:**
- `$schema` — Схема фильтра.
- `$repo` — Репозиторий для динамических choices.

**Возвращает:** `array{sections: list<array{title: string, fields: list<array<string, mixed>>` — }>} Каталог секций.

[](){#method_buildChipViewModel}
### buildChipViewModel()

Формирует view-model чипов активных правил фильтра.

**С версии:** 200.4.0

**Параметры:**
- `$schema` — Схема фильтра.

**Возвращает:** `list<array{index: int, field: string, label: string, summary: string}` — > Чипы для UI.

[](){#method_createFilterChoices}
### createFilterChoices()

Создаёт список значений для multi-фильтра по distinct-колонке репозитория.

**С версии:** 200.4.0

**Параметры:**
- `$repo` — Репозиторий с FilterableRepositoryInterface.
- `$name` — Id поля (legacy-параметр).
- `$column` — Имя SQL-колонки.
- `$schema` — Схема фильтра.

**Возвращает:** `array<string,` — string> Карта value => label.

[](){#method_createRangeFilter}
### createRangeFilter()

Создаёт конфигурацию range-фильтра по границам колонки.

**С версии:** 200.4.0

**Параметры:**
- `$repo` — Репозиторий данных.
- `$column` — Имя SQL-колонки.
- `$label` — Подпись фильтра.
- `$schema` — Схема фильтра.

**Возвращает:** `array<string, array<string, mixed>>` — Конфигурация по ключу колонки.

[](){#method_createDateRangeFilter}
### createDateRangeFilter()

Создаёт конфигурацию daterange-фильтра по границам дат колонки.

**С версии:** 200.4.0

**Параметры:**
- `$repo` — Репозиторий данных.
- `$column` — Имя SQL-колонки.
- `$label` — Подпись фильтра.
- `$schema` — Схема фильтра.

**Возвращает:** `array<string, array<string, mixed>>` — Конфигурация по ключу колонки.

[](){#method_rulesToCriteria}
### rulesToCriteria()

Преобразует UI-правила в критерии запроса репозитория.

**С версии:** 200.4.0

**Параметры:**
- `$schema` — Схема фильтра.

**Возвращает:** `list<array{column: string, op: string, value: mixed}` — > Критерии where.

[](){#method_isRuleComplete}
### isRuleComplete()

Проверяет, содержит ли черновик правила все обязательные значения.

**С версии:** 200.4.0

**Возвращает:** `bool` — true, если правило можно применить.

[](){#method_enrichCatalogField}
### enrichCatalogField()

Обогащает поле каталога данными choices или границ диапазона.

**С версии:** 200.4.0

**Параметры:**
- `$field` — Поле схемы.
- `$repo` — Репозиторий или null.
- `$schema` — Схема фильтра.

**Возвращает:** `array<string,` — mixed> Данные поля для Twig.

[](){#method_findField}
### findField()

Находит поле схемы по id.

**С версии:** 200.4.0

**Параметры:**
- `$schema` — Схема фильтра.
- `$fieldId` — Id поля.

**Возвращает:** `FormField|null` — Поле или null.

[](){#method_formatRuleSummary}
### formatRuleSummary()

Формирует краткую текстовую сводку правила для чипа.

**С версии:** 200.4.0

**Параметры:**
- `$label` — Подпись поля.

**Возвращает:** `string` — Текстовая сводка.

[](){#method_appendMultiCriterion}
### appendMultiCriterion()

Добавляет критерий IN для multi-правила.

**С версии:** 200.4.0

**Параметры:**
- `$column` — SQL-колонка.

[](){#method_appendTextCriterion}
### appendTextCriterion()

Добавляет критерий LIKE для text-правила.

**С версии:** 200.4.0

**Параметры:**
- `$column` — SQL-колонка.

[](){#method_appendBetweenCriterion}
### appendBetweenCriterion()

Добавляет критерий BETWEEN для range/daterange-правила.

**С версии:** 200.4.0

**Параметры:**
- `$column` — SQL-колонка.
- `$type` — Тип диапазона (range|daterange).
