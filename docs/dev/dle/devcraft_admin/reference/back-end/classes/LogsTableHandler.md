---
tags:
  - PHP
  - DLE
  - Плагин
  - Админка
title: "Класс: LogsTableHandler - DevCraft Admin"
description: "Документация по плагину класс: logstablehandler для DLE."
keywords: "PHP, DLE, Плагин, Админка, класс: logstablehandler, DevCraft, документация"
author: "Maxim Harder"
og:title: "Класс: LogsTableHandler"
og:description: "Документация по плагину класс: logstablehandler для DLE."
og:image: "https://devcraft.club/data/assets/logo_default/devcraftx2.png"
twitter:title: "Класс: LogsTableHandler"
twitter:description: "Документация по плагину класс: logstablehandler для DLE."
---

# Класс: LogsTableHandler

## Краткое содержание:

AJAX-обработчик загрузки строк таблицы журнала с фильтрацией и сортировкой.

---

### Свойства
*Нет публичных свойств.*

---

### Методы
* public [handle()](#method_handle)
* private [buildTableHeader()](#method_buildTableHeader)
* private [loadFilterSchema()](#method_loadFilterSchema)

---

### Подробности

* Путь: `devcraft/src/modules/Admin/Ajax/LogsTableHandler.php`

---

## Детали

### Методы

[](){#method_handle}
### handle()

Возвращает заголовок и строки таблицы журнала по текущим фильтрам.

**С версии:** 200.4.0

**Параметры:**
- `$request` — AJAX-запрос с параметрами фильтра и сортировки.

**Возвращает:** `JsonResponse` — JSON-ответ с колонками, строками и общим количеством.

[](){#method_buildTableHeader}
### buildTableHeader()

Формирует описание колонок таблицы журнала для Metro UI DataTable.

**С версии:** 200.4.0

**Параметры:**
- `$schema` — Схема фильтра с подписями колонок.
- `$order` — Имя колонки активной сортировки.
- `$sort` — Направление сортировки (`ASC` или `DESC`).

**Возвращает:** `list<array<string, mixed>>` — Массив описаний колонок таблицы.

[](){#method_loadFilterSchema}
### loadFilterSchema()

Загружает схему фильтра журнала из файла модуля Admin.

**С версии:** 200.4.0

**Возвращает:** `FilterSchema` — Нормализованная схема фильтрации и сортировки.
