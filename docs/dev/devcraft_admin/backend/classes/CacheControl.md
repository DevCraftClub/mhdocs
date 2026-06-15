---
tags:
  - PHP
  - DLE
  - Плагин
  - Админка
title: "Класс: CacheControl - DevCraft Admin"
description: "Документация по плагину класс: cachecontrol для DLE."
keywords: "PHP, DLE, Плагин, Админка, класс: cachecontrol, DevCraft, документация"
author: "Maxim Harder"
og:title: "Класс: CacheControl"
og:description: "Документация по плагину класс: cachecontrol для DLE."
og:image: "https://devcraft.club/data/assets/logo_default/devcraftx2.png"
twitter:title: "Класс: CacheControl"
twitter:description: "Документация по плагину класс: cachecontrol для DLE."
---

# Класс: CacheControl

## Краткое содержание:

Файловый кэш DevCraft: запись, чтение и очистка по типу и имени.

---

### Свойства
* private $[path](#property_path)

---

### Методы
* public [init()](#method_init)
* public [setPath()](#method_setPath)
* public [getPath()](#method_getPath)
* public [setCache()](#method_setCache)
* public [getCache()](#method_getCache)
* public [clearCache()](#method_clearCache)

---

### Подробности

* Путь: `devcraft/src/classes/Cache/CacheControl.php`

---

## Детали

### Свойства

[](){#property_path}
#### $path

Файловый кэш DevCraft: запись, чтение и очистка по типу и имени.


### Методы

[](){#method_init}
### init()

Инициализирует путь к кэшу из конфигурации или переданного аргумента.

**С версии:** 200.4.0

**Параметры:**
- `$path` — Явный путь к кэшу; при null — из DevCraftConfig.

[](){#method_setPath}
### setPath()

Устанавливает корневой каталог файлового кэша.

**С версии:** 200.4.0

**Параметры:**
- `$path` — Абсолютный или нормализованный путь к кэшу.

[](){#method_getPath}
### getPath()

Возвращает текущий корневой каталог кэша.

**С версии:** 200.4.0

**Возвращает:** `string|null` — Путь к кэшу или null, если не инициализирован.

[](){#method_setCache}
### setCache()

Сохраняет данные в файловый кэш по типу и имени.

**С версии:** 200.4.0

**Параметры:**
- `$type` — Тип кэша (подкаталог).
- `$name` — Имя записи кэша.
- `$data` — Данные для сохранения; массивы сериализуются в JSON.

[](){#method_getCache}
### getCache()

Читает данные из файлового кэша по типу и имени.

**С версии:** 200.4.0

**Параметры:**
- `$type` — Тип кэша (подкаталог).
- `$name` — Имя записи кэша.

**Возвращает:** `mixed` — Декодированные данные, строка или false при отсутствии/ошибке.

[](){#method_clearCache}
### clearCache()

Очищает кэш целиком, по типу или списку типов.

**С версии:** 200.4.0
