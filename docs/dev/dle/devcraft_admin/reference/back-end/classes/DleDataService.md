---
tags:
  - PHP
  - DLE
  - Плагин
  - Админка
title: "Класс: DleDataService - DevCraft Admin"
description: "Документация по плагину класс: dledataservice для DLE."
keywords: "PHP, DLE, Плагин, Админка, класс: dledataservice, DevCraft, документация"
author: "Maxim Harder"
og:title: "Класс: DleDataService"
og:description: "Документация по плагину класс: dledataservice для DLE."
og:image: "https://devcraft.club/data/assets/logo_default/devcraftx2.png"
twitter:title: "Класс: DleDataService"
twitter:description: "Документация по плагину класс: dledataservice для DLE."
---

# Класс: DleDataService

## Краткое содержание:

Агрегирует справочные данные DLE: пользователи, группы, категории, xfields.

---

### Свойства
*Нет публичных свойств.*

---

### Методы
* public [__construct()](#method___construct)
* public [users()](#method_users)
* public [user()](#method_user)
* public [groups()](#method_groups)
* public [groupsFull()](#method_groupsFull)
* public [categories()](#method_categories)
* public [categoriesFull()](#method_categoriesFull)
* public [postXfields()](#method_postXfields)
* public [userXfields()](#method_userXfields)
* public [parseObjectXfields()](#method_parseObjectXfields)
* private [loadXfieldsFromJson()](#method_loadXfieldsFromJson)
* private [readJsonFields()](#method_readJsonFields)
* private [parseXfieldsString()](#method_parseXfieldsString)
* private [readJsonCache()](#method_readJsonCache)
* private [writeJsonCache()](#method_writeJsonCache)

---

### Подробности

* Путь: `devcraft/src/classes/Support/DleDataService.php`

---

## Детали

### Методы

[](){#method___construct}
### __construct()

Инициализирует зависимости: `$loader`, `$cacheTimer`.

**С версии:** 200.4.0

**Параметры:**
- `$loader` — Сервис загрузки таблиц DLE.
- `$cacheTimer` — TTL кеша xfields в секундах.

[](){#method_users}
### users()

Возвращает список пользователей DLE с основными полями.

**С версии:** 173.3.0

**Возвращает:** `array<int, array<string, mixed>>` — Строки users.

[](){#method_user}
### user()

Возвращает одного пользователя по id или имени.

**С версии:** 173.3.0

**Параметры:**
- `$id` — ID пользователя или null.
- `$uname` — Имя пользователя или null.

**Возвращает:** `array<string, mixed>|array{}` — Первая строка или пустой массив.

[](){#method_groups}
### groups()

Возвращает карту id => group_name для групп пользователей.

**С версии:** 173.3.0

**Возвращает:** `array<int|string,` — string> Ассоциативный список групп.

[](){#method_groupsFull}
### groupsFull()

Возвращает полные строки таблицы usergroups.

**С версии:** 173.3.0

**Возвращает:** `array<int, array<string, mixed>>` — Все колонки групп.

[](){#method_categories}
### categories()

Возвращает карту id => name для категорий DLE.

**С версии:** 173.3.0

**Возвращает:** `array<int|string,` — string> Ассоциативный список категорий.

[](){#method_categoriesFull}
### categoriesFull()

Возвращает полные строки таблицы category.

**С версии:** 173.3.0

**Возвращает:** `array<int, array<string, mixed>>` — Все колонки категорий.

[](){#method_postXfields}
### postXfields()

Загружает описание доп. полей публикаций из xfields.json.

**С версии:** 173.3.0

**Возвращает:** `array<string, array<string, mixed>>` — Поля по имени.

[](){#method_userXfields}
### userXfields()

Загружает описание доп. полей пользователей из userxfields.json.

**С версии:** 173.3.0

**Возвращает:** `array<string, array<string, mixed>>` — Поля по имени.

[](){#method_parseObjectXfields}
### parseObjectXfields()

Разбирает строку xfields записи post или user в ассоциативный массив.

**С версии:** 173.3.0

**Параметры:**
- `$id` — ID записи или пользователя.
- `$type` — Тип объекта: post или user.

**Возвращает:** `array<string,` — string|null> Имя поля => значение.

[](){#method_loadXfieldsFromJson}
### loadXfieldsFromJson()

Загружает xfields из JSON с кешированием.

**С версии:** 173.3.0

**Параметры:**
- `$cacheName` — Ключ кеша.
- `$fileName` — Имя файла в ENGINE_DIR/data/.

**Возвращает:** `array<string, array<string, mixed>>` — Поля xfields.

[](){#method_readJsonFields}
### readJsonFields()

Читает и декодирует JSON-файл xfields из каталога data DLE.

**С версии:** 173.3.0

**Параметры:**
- `$fileName` — Имя файла (xfields.json или userxfields.json).

**Возвращает:** `array<string, array<string, mixed>>` — Секция fields или пустой массив.

[](){#method_parseXfieldsString}
### parseXfieldsString()

Парсит сериализованную строку xfields DLE формата «name|value||…».

**С версии:** 173.3.0

**Параметры:**
- `$raw` — Сырыая строка xfields.

**Возвращает:** `array<string,` — string|null> Имя => значение.

[](){#method_readJsonCache}
### readJsonCache()

Читает закешированные xfields, если TTL не истёк.

**С версии:** 173.3.0

**Параметры:**
- `$cacheName` — Ключ кеша.

**Возвращает:** `array<string, array<string, mixed>>` — |null Поля или null.

[](){#method_writeJsonCache}
### writeJsonCache()

Записывает xfields в кеш DevCraft.

**С версии:** 173.3.0

**Параметры:**
- `$cacheName` — Ключ кеша.
