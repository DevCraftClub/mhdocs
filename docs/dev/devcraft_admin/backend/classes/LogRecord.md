---
tags:
  - PHP
  - DLE
  - Плагин
  - Админка
title: "Класс: LogRecord - DevCraft Admin"
description: "Документация по плагину класс: logrecord для DLE."
keywords: "PHP, DLE, Плагин, Админка, класс: logrecord, DevCraft, документация"
author: "Maxim Harder"
og:title: "Класс: LogRecord"
og:description: "Документация по плагину класс: logrecord для DLE."
og:image: "https://devcraft.club/data/assets/logo_default/devcraftx2.png"
twitter:title: "Класс: LogRecord"
twitter:description: "Документация по плагину класс: logrecord для DLE."
---

# Класс: LogRecord

## Краткое содержание:

Сущность записи журнала DevCraft в таблице `devcraft_logs`.

---

### Свойства
*Нет публичных свойств.*

---

### Методы
* public [__construct()](#method___construct)
* public [getColumnVal()](#method_getColumnVal)

---

### Подробности

* Путь: `devcraft/src/modules/Admin/Models/LogRecord.php`

---

## Детали

### Методы

[](){#method___construct}
### __construct()

Инициализирует запись с текущим временем по умолчанию.

**С версии:** 200.4.0

[](){#method_getColumnVal}
### getColumnVal()

Возвращает значение колонки по логическому имени для таблицы и фильтров.

**С версии:** 200.4.0

**Параметры:**
- `$name` — Имя колонки (`id`, `log_type`, `plugin`, `fn_name`, `time`, `message`).

**Возвращает:** `mixed` — Скалярное значение колонки или `null` для неизвестного имени.
