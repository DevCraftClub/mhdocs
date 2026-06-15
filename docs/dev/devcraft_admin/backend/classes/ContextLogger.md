---
tags:
  - PHP
  - DLE
  - Плагин
  - Админка
title: "Класс: ContextLogger - DevCraft Admin"
description: "Документация по плагину класс: contextlogger для DLE."
keywords: "PHP, DLE, Плагин, Админка, класс: contextlogger, DevCraft, документация"
author: "Maxim Harder"
og:title: "Класс: ContextLogger"
og:description: "Документация по плагину класс: contextlogger для DLE."
og:image: "https://devcraft.club/data/assets/logo_default/devcraftx2.png"
twitter:title: "Класс: ContextLogger"
twitter:description: "Документация по плагину класс: contextlogger для DLE."
---

# Класс: ContextLogger

## Краткое содержание:

Контекстный логгер с привязкой к имени модуля.

---

### Свойства
*Нет публичных свойств.*

---

### Методы
* public [__construct()](#method___construct)
* public [debug()](#method_debug)
* public [log()](#method_log)

---

### Подробности

* Путь: `devcraft/src/classes/Logging/ContextLogger.php`

---

## Детали

### Методы

[](){#method___construct}
### __construct()

Создаёт логгер для указанного модуля.

**С версии:** 200.4.0

**Параметры:**
- `$module` — Имя модуля или сервиса.

[](){#method_debug}
### debug()

Записывает отладочное сообщение через LogGenerator::debug().

**С версии:** 200.4.0

**Параметры:**
- `$message` — Текст или структура сообщения.

[](){#method_log}
### log()

Записывает событие в каналы логирования через LogGenerator::dispatchLog().

**С версии:** 200.4.0

**Параметры:**
- `$message` — Сообщение о событии.
- `$type` — Тип события (error, warn, info и т. д.).
