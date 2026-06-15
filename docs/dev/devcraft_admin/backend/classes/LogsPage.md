---
tags:
  - PHP
  - DLE
  - Плагин
  - Админка
title: "Класс: LogsPage - DevCraft Admin"
description: "Документация по плагину класс: logspage для DLE."
keywords: "PHP, DLE, Плагин, Админка, класс: logspage, DevCraft, документация"
author: "Maxim Harder"
og:title: "Класс: LogsPage"
og:description: "Документация по плагину класс: logspage для DLE."
og:image: "https://devcraft.club/data/assets/logo_default/devcraftx2.png"
twitter:title: "Класс: LogsPage"
twitter:description: "Документация по плагину класс: logspage для DLE."
---

# Класс: LogsPage

## Краткое содержание:

Страница просмотра и фильтрации журнала событий DevCraft.

---

### Свойства
*Нет публичных свойств.*

---

### Методы
* public [handle()](#method_handle)
* private [loadFilterSchema()](#method_loadFilterSchema)

---

### Подробности

* Путь: `devcraft/src/modules/Admin/Pages/LogsPage.php`

---

## Детали

### Методы

[](){#method_handle}
### handle()

Формирует представление и данные страницы журнала с фильтрами и таблицей.

**С версии:** 200.4.0

**Возвращает:** `array{view: string, data: array<string, mixed>}` — Ключ шаблона и данные для Twig.

[](){#method_loadFilterSchema}
### loadFilterSchema()

Загружает схему фильтра журнала из файла модуля Admin.

**С версии:** 200.4.0

**Возвращает:** `FilterSchema` — Нормализованная схема фильтрации и сортировки.
