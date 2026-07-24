---
tags:
  - PHP
  - DLE
  - Плагин
  - Админка
title: "Класс: DatabaseGateway - DevCraft Admin"
description: "Документация по плагину класс: databasegateway для DLE."
keywords: "PHP, DLE, Плагин, Админка, класс: databasegateway, DevCraft, документация"
author: "Maxim Harder"
og:title: "Класс: DatabaseGateway"
og:description: "Документация по плагину класс: databasegateway для DLE."
og:image: "https://devcraft.club/data/assets/logo_default/devcraftx2.png"
twitter:title: "Класс: DatabaseGateway"
twitter:description: "Документация по плагину класс: databasegateway для DLE."
---

# Класс: DatabaseGateway

## Краткое содержание:

Шлюз доступа к базе данных через Cycle ORM.

---

### Свойства
* private $[database_manager](#property_database_manager)
* private $[entity_manager](#property_entity_manager)

---

### Методы
* public [__construct()](#method___construct)
* public [getOrm()](#method_getOrm)
* public [setManager()](#method_setManager)
* public [getManager()](#method_getManager)
* public [repository()](#method_repository)
* public [get()](#method_get)
* public [getAll()](#method_getAll)
* public [delete()](#method_delete)
* public [run()](#method_run)
* public [create()](#method_create)
* public [update()](#method_update)
* public [createOrUpdate()](#method_createOrUpdate)
* public [connection()](#method_connection)
* public [query()](#method_query)
* public [paginate()](#method_paginate)
* public [count()](#method_count)
* private [generateOrm()](#method_generateOrm)
* private [generateManager()](#method_generateManager)
* private [generateOrmConfig()](#method_generateOrmConfig)
* private [compileSchema()](#method_compileSchema)
* private [assertDatabaseConstants()](#method_assertDatabaseConstants)
* private [loadDatabaseConfigIfNeeded()](#method_loadDatabaseConfigIfNeeded)

---

### Подробности

* Путь: `devcraft/src/classes/Database/DatabaseGateway.php`

---

## Детали

### Свойства

[](){#property_database_manager}
#### $database_manager

Шлюз доступа к базе данных через Cycle ORM.


[](){#property_entity_manager}
#### $entity_manager

Конфигурация подключения к базе данных.


### Методы

[](){#method___construct}
### __construct()

Создаёт шлюз с реестром модулей для разрешения путей сущностей.

**С версии:** 171.3.0

**Параметры:**
- `$registry` — Реестр DevCraft-модулей.

[](){#method_getOrm}
### getOrm()

Возвращает экземпляр ORM, создавая его при необходимости.

**С версии:** 171.3.0

**Возвращает:** `ORM\ORM` — Экземпляр ORM.

[](){#method_setManager}
### setManager()

Инициализирует менеджер сущностей на основе текущего ORM.

**С версии:** 171.3.0

[](){#method_getManager}
### getManager()

Возвращает менеджер сущностей, создавая его при первом обращении.

**С версии:** 171.3.0

**Возвращает:** `EntityManager` — Менеджер сущностей ORM.

[](){#method_repository}
### repository()

Возвращает репозиторий для указанной сущности или класса.

**С версии:** 171.3.0

**Параметры:**
- `$entity` — Объект сущности или FQCN класса.

**Возвращает:** `RepositoryInterface` — Репозиторий Cycle ORM.

[](){#method_get}
### get()

Получает сущность по первичному ключу.

**С версии:** 171.3.0

**Параметры:**
- `$entity` — Объект сущности или FQCN класса.
- `$pk` — Первичный ключ записи.

**Возвращает:** `object|null` — Найденная сущность или null.

[](){#method_getAll}
### getAll()

Возвращает все записи указанной сущности.

**С версии:** 171.3.0

**Параметры:**
- `$entity` — Объект сущности или FQCN класса.

**Возвращает:** `array<int,` — object> Массив сущностей.

[](){#method_delete}
### delete()

Удаляет сущность по первичному ключу.

**С версии:** 171.3.0

**Параметры:**
- `$entity` — Объект сущности или FQCN класса.
- `$pk` — Первичный ключ записи.

**Возвращает:** `StateInterface` — Состояние завершённой транзакции.

[](){#method_run}
### run()

Сохраняет сущность и возвращает состояние транзакции.

**С версии:** 171.3.0

**Параметры:**
- `$entity` — Сущность для сохранения.

**Возвращает:** `StateInterface` — Состояние завершённой транзакции.

[](){#method_create}
### create()

Создаёт новую запись сущности в базе данных.

**С версии:** 171.3.0

**Параметры:**
- `$entity` — Сущность для создания.

**Возвращает:** `StateInterface` — Состояние завершённой транзакции.

[](){#method_update}
### update()

Обновляет существующую запись сущности в базе данных.

**С версии:** 171.3.0

**Параметры:**
- `$entity` — Сущность для обновления.

**Возвращает:** `StateInterface` — Состояние завершённой транзакции.

[](){#method_createOrUpdate}
### createOrUpdate()

Создаёт или обновляет сущность в зависимости от наличия первичного ключа.

**С версии:** 173.3.4

**Параметры:**
- `$entity` — Сущность для сохранения.

**Возвращает:** `StateInterface` — Состояние завершённой транзакции.

[](){#method_connection}
### connection()

Возвращает интерфейс подключения Cycle Database.

**С версии:** 171.3.0

**Возвращает:** `DatabaseInterface` — Активное подключение к БД.

[](){#method_query}
### query()

Выполняет SQL-запрос с параметрами.

**С версии:** 171.3.0

**Параметры:**
- `$sql` — SQL-запрос с плейсхолдерами.

**Возвращает:** `StatementInterface` — Результат выполнения запроса.

[](){#method_paginate}
### paginate()

Формирует пагинированную выборку для сущности.

**С версии:** 171.3.0

**Параметры:**
- `$entity` — Сущность или FQCN класса.
- `$orderby` — Поле сортировки.
- `$sortby` — Направление сортировки (`ASC` или `DESC`).
- `$limit` — Количество записей на странице.
- `$page` — Номер страницы.

**Возвращает:** `ORM\Select` — Настроенный объект выборки.

[](){#method_count}
### count()

Подсчитывает количество записей указанной сущности.

**С версии:** 171.3.0

**Параметры:**
- `$entity` — Сущность или FQCN класса.

**Возвращает:** `int` — Число записей в таблице.

[](){#method_generateOrm}
### generateOrm()

Лениво создаёт и кэширует экземпляр ORM.

**С версии:** 171.3.0

**Возвращает:** `ORM\ORM` — Инициализированный ORM.

[](){#method_generateManager}
### generateManager()

Возвращает менеджер базы данных Cycle, создавая его при необходимости.

**С версии:** 171.3.0

**Возвращает:** `DatabaseManager` — Менеджер подключений.

[](){#method_generateOrmConfig}
### generateOrmConfig()

Формирует конфигурацию подключения из констант DLE.

**С версии:** 171.3.0

**Возвращает:** `Config\DatabaseConfig` — Конфигурация Cycle Database.

[](){#method_compileSchema}
### compileSchema()

Компилирует схему ORM и возвращает массив схемы вместе с мигратором.

**С версии:** 171.3.0

**Параметры:**
- `$registry` — Реестр Cycle Schema.

**Возвращает:** `array{0: array<string, mixed>, 1: Migrations\Migrator}` — Схема и мигратор.

[](){#method_assertDatabaseConstants}
### assertDatabaseConstants()

Проверяет наличие обязательных констант подключения к БД.

**С версии:** 171.3.0

[](){#method_loadDatabaseConfigIfNeeded}
### loadDatabaseConfigIfNeeded()

Подключает dbconfig.php DLE, если константы БД ещё не определены.

**С версии:** 171.3.0
