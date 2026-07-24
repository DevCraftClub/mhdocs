---
tags:
  - PHP
  - DLE
  - Плагин
  - Админка
title: "Класс: EntityPathResolver - DevCraft Admin"
description: "Документация по плагину класс: entitypathresolver для DLE."
keywords: "PHP, DLE, Плагин, Админка, класс: entitypathresolver, DevCraft, документация"
author: "Maxim Harder"
og:title: "Класс: EntityPathResolver"
og:description: "Документация по плагину класс: entitypathresolver для DLE."
og:image: "https://devcraft.club/data/assets/logo_default/devcraftx2.png"
twitter:title: "Класс: EntityPathResolver"
twitter:description: "Документация по плагину класс: entitypathresolver для DLE."
---

# Класс: EntityPathResolver

## Краткое содержание:

Разрешает пути к моделям сущностей и каталогу миграций DevCraft.

---

### Свойства
*Нет публичных свойств.*

---

### Методы
* public [__construct()](#method___construct)
* public [entityModelDirectories()](#method_entityModelDirectories)
* public [migrationsDirectory()](#method_migrationsDirectory)
* private [hasConcreteEntityFiles()](#method_hasConcreteEntityFiles)

---

### Подробности

* Путь: `devcraft/src/classes/Database/EntityPathResolver.php`

---

## Детали

### Методы

[](){#method___construct}
### __construct()

Создаёт резолвер на основе реестра модулей.

**С версии:** 200.4.0

**Параметры:**
- `$registry` — Реестр DevCraft-модулей.

[](){#method_entityModelDirectories}
### entityModelDirectories()

Возвращает каталоги Models всех модулей с PHP-файлами сущностей.

**С версии:** 200.4.0

**Возвращает:** `string[]` — Список абсолютных путей к каталогам Models.

[](){#method_migrationsDirectory}
### migrationsDirectory()

Возвращает каталог миграций DevCraft, создавая его при необходимости.

**С версии:** 200.4.0

**Возвращает:** `string` — Абсолютный путь к каталогу миграций.

[](){#method_hasConcreteEntityFiles}
### hasConcreteEntityFiles()

Проверяет наличие хотя бы одного PHP-файла в каталоге моделей.

**С версии:** 200.4.0

**Параметры:**
- `$directory` — Абсолютный путь к каталогу Models.

**Возвращает:** `bool` — true, если найден хотя бы один .php-файл.
