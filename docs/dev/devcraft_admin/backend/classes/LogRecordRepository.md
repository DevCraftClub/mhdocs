---
tags:
  - PHP
  - DLE
  - Плагин
  - Админка
title: "Класс: LogRecordRepository - DevCraft Admin"
description: "Документация по плагину класс: logrecordrepository для DLE."
keywords: "PHP, DLE, Плагин, Админка, класс: logrecordrepository, DevCraft, документация"
author: "Maxim Harder"
og:title: "Класс: LogRecordRepository"
og:description: "Документация по плагину класс: logrecordrepository для DLE."
og:image: "https://devcraft.club/data/assets/logo_default/devcraftx2.png"
twitter:title: "Класс: LogRecordRepository"
twitter:description: "Документация по плагину класс: logrecordrepository для DLE."
---

# Класс: LogRecordRepository

## Краткое содержание:

Репозиторий записей журнала DevCraft (`devcraft_logs`).

---

### Свойства
*Нет публичных свойств.*

---

### Методы
* public [deleteByUuid()](#method_deleteByUuid)

---

### Подробности

* Путь: `devcraft/src/modules/Admin/Repositories/LogRecordRepository.php`

---

## Детали

### Методы

[](){#method_deleteByUuid}
### deleteByUuid()

Удаляет запись журнала по строковому UUID.

**С версии:** 200.4.0

**Параметры:**
- `$uuid` — Строковое представление UUID записи.

**Возвращает:** `bool` — `true`, если запись найдена и удалена.
