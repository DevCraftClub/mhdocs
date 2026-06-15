---
tags:
  - PHP
  - DLE
  - Плагин
  - Админка
title: "Класс: ModuleData - DevCraft Admin"
description: "Документация по плагину класс: moduledata для DLE."
keywords: "PHP, DLE, Плагин, Админка, класс: moduledata, DevCraft, документация"
author: "Maxim Harder"
og:title: "Класс: ModuleData"
og:description: "Документация по плагину класс: moduledata для DLE."
og:image: "https://devcraft.club/data/assets/logo_default/devcraftx2.png"
twitter:title: "Класс: ModuleData"
twitter:description: "Документация по плагину класс: moduledata для DLE."
---

# Класс: ModuleData

## Краткое содержание:

Метаданные зарегистрированного модуля DevCraft.

---

### Свойства
* public $[id](#property_id)
* public $[name](#property_name)
* public $[version](#property_version)
* public $[namespace](#property_namespace)
* public $[path](#property_path)
* public $[description](#property_description)
* public $[code](#property_code)
* public $[siteId](#property_siteId)
* public $[icon](#property_icon)
* public $[siteLink](#property_siteLink)
* public $[docsLink](#property_docsLink)
* public $[crowdinName](#property_crowdinName)
* public $[crowdinStatId](#property_crowdinStatId)
* public $[changelog](#property_changelog)

---

### Методы
* public [__construct()](#method___construct)
* public [fromManifest()](#method_fromManifest)
* public [fromArray()](#method_fromArray)
* public [toArray()](#method_toArray)

---

### Подробности

* Путь: `devcraft/src/classes/Types/ModuleData.php`

---

## Детали

### Свойства

[](){#property_id}
#### $id

Уникальный идентификатор модуля.


[](){#property_name}
#### $name

Отображаемое имя модуля.


[](){#property_version}
#### $version

Версия модуля.


[](){#property_namespace}
#### $namespace

PHP-пространство имён модуля.


[](){#property_path}
#### $path

Абсолютный путь к каталогу модуля.


[](){#property_description}
#### $description

Описание модуля.


[](){#property_code}
#### $code

Код модуля для DLE.


[](){#property_siteId}
#### $siteId

Идентификатор сайта.


[](){#property_icon}
#### $icon

Иконка модуля.


[](){#property_siteLink}
#### $siteLink

Ссылка на сайт модуля.


[](){#property_docsLink}
#### $docsLink

Ссылка на документацию.


[](){#property_crowdinName}
#### $crowdinName

Имя проекта в Crowdin.


[](){#property_crowdinStatId}
#### $crowdinStatId

Идентификатор статистики Crowdin.


[](){#property_changelog}
#### $changelog

Записи журнала изменений.


### Методы

[](){#method___construct}
### __construct()

Создаёт метаданные модуля.

**С версии:** 200.4.0

**Параметры:**
- `$id` — Уникальный идентификатор модуля.
- `$name` — Отображаемое имя модуля.
- `$version` — Версия модуля.
- `$namespace` — PHP-пространство имён модуля.
- `$path` — Абсолютный путь к каталогу модуля.
- `$description` — Описание модуля.
- `$code` — Код модуля для DLE.
- `$siteId` — Идентификатор сайта.
- `$icon` — Иконка модуля.
- `$siteLink` — Ссылка на сайт модуля.
- `$docsLink` — Ссылка на документацию.
- `$crowdinName` — Имя проекта в Crowdin.
- `$crowdinStatId` — Идентификатор статистики Crowdin.
- `$changelog` — Записи журнала изменений.

[](){#method_fromManifest}
### fromManifest()

Создаёт метаданные модуля из массива манифеста.

**С версии:** 200.4.0

**Параметры:**
- `$mod` — Код модуля.
- `$modulePath` — Абсолютный путь к каталогу модуля.

**Возвращает:** `self` — Метаданные модуля.

[](){#method_fromArray}
### fromArray()

Создаёт метаданные модуля из конфигурационного массива.

**С версии:** 200.4.0

**Параметры:**
- `$id` — Идентификатор модуля.

**Возвращает:** `self` — Метаданные модуля.

[](){#method_toArray}
### toArray()

Преобразует метаданные модуля в ассоциативный массив.

**С версии:** 200.4.0

**Возвращает:** `array<string,` — mixed> Сериализованные метаданные.
