---
tags:
  - PHP
  - DLE
  - Плагин
  - Админка
title: "Класс: DataManager - DevCraft Admin"
description: "Документация по плагину класс: datamanager для DLE."
keywords: "PHP, DLE, Плагин, Админка, класс: datamanager, DevCraft, документация"
author: "Maxim Harder"
og:title: "Класс: DataManager"
og:description: "Документация по плагину класс: datamanager для DLE."
og:image: "https://devcraft.club/data/assets/logo_default/devcraftx2.png"
twitter:title: "Класс: DataManager"
twitter:description: "Документация по плагину класс: datamanager для DLE."
---

# Класс: DataManager

## Краткое содержание:

Утилиты работы с файлами, конфигурацией JSON и санитизацией ввода DLE.

---

### Свойства
*Нет публичных свойств.*

---

### Методы
* public [abbr()](#method_abbr)
* public [dirToArray()](#method_dirToArray)
* public [createDir()](#method_createDir)
* public [setPermission()](#method_setPermission)
* public [joinPaths()](#method_joinPaths)
* public [deleteDir()](#method_deleteDir)
* public [nameArgs()](#method_nameArgs)
* public [defType()](#method_defType)
* public [getComparer()](#method_getComparer)
* public [saveConfig()](#method_saveConfig)
* public [getConfig()](#method_getConfig)
* public [normalizePath()](#method_normalizePath)
* public [getPrefix()](#method_getPrefix)
* public [getUserPrefix()](#method_getUserPrefix)
* public [toTranslit()](#method_toTranslit)
* public [sanitizeArrayInput()](#method_sanitizeArrayInput)
* public [sanitizeInput()](#method_sanitizeInput)
* public [createLockFile()](#method_createLockFile)
* public [normalizeUrl()](#method_normalizeUrl)
* private [loadJsonConfig()](#method_loadJsonConfig)
* private [migrateOldConfig()](#method_migrateOldConfig)
* private [scanDirectory()](#method_scanDirectory)

---

### Подробности

* Путь: `devcraft/src/classes/Support/DataManager.php`

---

## Детали

### Методы

[](){#method_abbr}
### abbr()

Формирует аббревиатуру из слов строки с суффиксом длины.

**С версии:** 173.3.0

**Параметры:**
- `$string` — Исходная строка.
- `$sep` — Разделитель слов.

**Возвращает:** `string` — Аббревиатура вида «Abbr_0008».

[](){#method_dirToArray}
### dirToArray()

Рекурсивно преобразует каталог в массив файлов и подкаталогов.

**С версии:** 173.3.0

**Параметры:**
- `$dir` — Путь к каталогу.

**Возвращает:** `array<mixed>` — Дерево каталога.

[](){#method_createDir}
### createDir()

Создаёт каталоги с правами 0755, если они ещё не существуют.

**С версии:** 173.3.0

**Возвращает:** `bool` — true при успехе для всех путей.

[](){#method_setPermission}
### setPermission()

Создаёт каталоги с указанными правами доступа.

**С версии:** 200.4.0

**Параметры:**
- `$permission` — Права в восьмеричном виде.

**Возвращает:** `bool` — true при успехе для всех путей.

[](){#method_joinPaths}
### joinPaths()

Объединяет несколько сегментов пути в один нормализованный путь.

**С версии:** 173.3.0

**Возвращает:** `string` — Объединённый путь.

[](){#method_deleteDir}
### deleteDir()

Рекурсивно удаляет каталог, кроме защищённых vendor и var/cache.

**С версии:** 173.3.0

**Параметры:**
- `$path` — Абсолютный путь к каталогу.

[](){#method_nameArgs}
### nameArgs()

Преобразует вложенный массив аргументов в плоский ассоциативный массив.

**С версии:** 173.3.0

**Параметры:**
- `$args` — Исходные аргументы или null.

**Возвращает:** `array<mixed>` — Именованные аргументы без пустых значений.

[](){#method_defType}
### defType()

Приводит значение к типу через filter_var по имени SQL/PHP-типа.

**С версии:** 173.3.0

**Параметры:**
- `$value` — Исходное значение.
- `$type` — Имя типа (int, string, bool и т.д.).

**Возвращает:** `float|bool|int|string` — Приведённое значение.

[](){#method_getComparer}
### getComparer()

Формирует SQL-фрагмент сравнения с оператором из префикса значения.

**С версии:** 173.3.0

**Параметры:**
- `$value` — Значение с опциональным префиксом оператора (!, <, >, %).

**Возвращает:** `string` — Фрагмент « OP value» для SQL.

[](){#method_saveConfig}
### saveConfig()

Сохраняет конфигурацию модуля в JSON-файл.

**С версии:** 180.3.5

**Параметры:**
- `$codename` — Имя конфигурации (имя файла без .json).
- `$configPath` — Каталог конфигурации или null для Paths::config().

[](){#method_getConfig}
### getConfig()

Загружает конфигурацию из JSON или мигрирует legacy PHP-конфиг DLE.

**С версии:** 173.3.0

**Параметры:**
- `$codename` — Имя конфигурации.
- `$path` — Каталог JSON или null.
- `$confName` — Имя legacy PHP-конфига для миграции.

**Возвращает:** `array<string,` — mixed> Ассоциативный массив настроек.

[](){#method_normalizePath}
### normalizePath()

Нормализует путь относительно ROOT_DIR и realpath.

**С версии:** 173.3.0

**Параметры:**
- `$path` — Исходный путь.

**Возвращает:** `string` — Абсолютный нормализованный путь или пустая строка при ошибке.

[](){#method_getPrefix}
### getPrefix()

Возвращает префикс таблиц DLE (константа PREFIX).

**С версии:** 173.3.0

**Возвращает:** `string` — Значение PREFIX или пустая строка.

[](){#method_getUserPrefix}
### getUserPrefix()

Возвращает префикс пользовательских таблиц DLE (USERPREFIX).

**С версии:** 173.3.0

**Возвращает:** `string` — Значение USERPREFIX или пустая строка.

[](){#method_toTranslit}
### toTranslit()

Транслитерирует строку в латинский идентификатор с подчёркиваниями.

**С версии:** 173.3.0

**Параметры:**
- `$input` — Исходная строка.
- `$lowercase` — Приводить результат к нижнему регистру.

**Возвращает:** `string` — Транслитерированная строка.

[](){#method_sanitizeArrayInput}
### sanitizeArrayInput()

Рекурсивно санитизирует массив ввода через filter_var.

**С версии:** 173.3.0

**Параметры:**
- `$input` — Входные данные.
- `$flags` — Флаги filter_var или null.

**Возвращает:** `mixed` — Санитизированный массив или скаляр, null при пустом вводе.

[](){#method_sanitizeInput}
### sanitizeInput()

Санитизирует скалярное значение через один или несколько filter_var.

**С версии:** 173.3.0

**Параметры:**
- `$value` — Сырое значение.
- `$flags` — Цепочка флагов filter_var.

**Возвращает:** `string|null` — Строка или null при неудачной фильтрации.

[](){#method_createLockFile}
### createLockFile()

Создаёт lock-файл обновлений с меткой времени.

**С версии:** 173.3.0

**Параметры:**
- `$path` — Путь к lock-файлу.

[](){#method_normalizeUrl}
### normalizeUrl()

Нормализует относительный URL админки DLE с дополнительными query-параметрами.

**С версии:** 173.3.0

**Параметры:**
- `$url` — Исходный URL или query.

**Возвращает:** `string` — Полный URL админки с query.

[](){#method_loadJsonConfig}
### loadJsonConfig()

Загружает и санитизирует JSON-конфигурацию из файла.

**С версии:** 173.3.0

**Параметры:**
- `$filePath` — Путь к .json файлу.

**Возвращает:** `array<string,` — mixed> Декодированный массив.

[](){#method_migrateOldConfig}
### migrateOldConfig()

Мигрирует legacy PHP-конфиг DLE в JSON и удаляет старый файл.

**С версии:** 173.3.0

**Параметры:**
- `$codename` — Имя конфигурации DevCraft.
- `$confName` — Имя переменной legacy-конфига.
- `$configPath` — Каталог для JSON.

**Возвращает:** `array<string,` — mixed> Загруженные настройки.

[](){#method_scanDirectory}
### scanDirectory()

Рекурсивно сканирует каталог в массив (внутренний метод dirToArray).

**С версии:** 173.3.0

**Параметры:**
- `$dir` — Путь к каталогу.
- `$ignoredExtensions` — Игнорируемые имена и расширения.

**Возвращает:** `array<mixed>` — Дерево каталога.
