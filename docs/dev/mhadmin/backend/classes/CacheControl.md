---
tags:
  - PHP
  - DLE
  - Плагин
  - Админка
title: "Абстрактный класс: CacheControl - MH Admin"
description: "Документация по плагину абстрактный класс: cachecontrol для DLE."
keywords: "PHP, DLE, Плагин, Админка, абстрактный класс: cachecontrol, DevCraft, документация"
author: "Maxim Harder"
og:title: "Абстрактный класс: CacheControl"
og:description: "Документация по плагину абстрактный класс: cachecontrol для DLE."
og:image: "https://devcraft.club/data/assets/logo_default/devcraftx2.png"
twitter:title: "Абстрактный класс: CacheControl"
twitter:description: "Документация по плагину абстрактный класс: cachecontrol для DLE."
---

# Абстрактный класс: CacheControl

## Краткое содержание:

Абстрактный класс для реализации управления кэшированием.

## Описание:

Определяет контракт для классов, управляющих различными аспектами кэш-контроля,
такими как загрузка конфигурации, миграция или работа с файлами конфигурации.

Может быть дополнен реализацией в наследниках для поддержки специфичных стратегий кэширования.


---

### Свойства
* private $[path](#property_path)

---

### Методы

* public [clearCache()](#method_clearCache)
* public [getCache()](#method_getCache)
* public [getPath()](#method_getPath)
* public [init()](#method_init)
* public [setCache()](#method_setCache)
* public [setPath()](#method_setPath)

---

### Подробности

* Путь: engine/inc/maharder/_includes/classes/CacheControl.php

---

## Свойства
[](){#property_path}
#### private $path : ?string
---
**Краткое содержание**

Определяет путь до кеша.

***Описание***

Используется для хранения или извлечения пути, где будут сохраняться
данные кеша. Значение может быть `null`, если путь не был задан.

**Тип:** <abbr title="?string">Текст или null</abbr>

**Подробности:**
* Смотри так-же:
    * [Для получения текущего пути.](#method_getPath)
    * [Для задания пути.](#method_setPath)

##### Tags
| Тэг | Версия | Описание |
|-----|--------|----------|
| version | 170.2.10 |  |


---

## Методы

[](){#method_clearCache}
### clearCache

```
static public clearCache(string|array  type = "all") : void
```

##### Краткое содержание

Очищает кеш для указанного типа или списка типов.

##### Описание

Работает по следующему алгоритму:
- Если передан строковый тип и значение `"all"`, очищается вся директория кеша.
- Если передан массив типов, очистка выполняется рекурсивно для каждого типа.
- В случае конкретного типа, очищается соответствующий подкаталог.

##### Смотри так-же:

* [\CacheControl::init()](#method_init)
* [\DataManager::deleteDir()](./DataManager.md#method_deleteDir)
* [\DataManager::toTranslit()](./DataManager.md#method_toTranslit)
* [\CacheControl::getPath()](#method_getPath)

##### Свойства:

| Название | Тип           | По умолчанию |
|----------|---------------|----------|
| **$type** | string\|array | &#039;all&#039; |

##### Ошибки:

| Тип                                                                  | Описание |
|----------------------------------------------------------------------|----------|
| \JsonException                                                       |Исключение может быть выброшено, если возникают ошибки при работе с JSON-библиотекой (например, при вызовах методов, зависящих от внутренних реализаций). |

##### Возвращает:

```
void
```
Функция ничего не возвращает.

---

[](){#method_getCache}
### getCache

```
static public getCache(string  type, string  name) : false|array|int
```

##### Краткое содержание

Получает данные из кеша, преобразуя имена и типы в транслит и извлекая содержимое файла с последующим
декодированием данных из JSON.

##### Описание

Инициализирует путь к кешу, если он не был установлен ранее.
Данные извлекаются из файла с учетом типа и имени, которые преобразуются в транслит.
Если файл отсутствует или недоступен, функция возвращает `false`.
Если данные присутствуют, они декодируются из формата JSON и в случае ошибки выбрасывается исключение
`JsonException`.

##### Смотри так-же:

* [\DataManager::toTranslit()](./DataManager.md#method_toTranslit)
* [\DataManager::normalizePath()](./DataManager.md#method_normalizePath)
* [\LogGenerator::generateLog()](./LogGenerator.md#method_generateLog)

##### Свойства:

| Название | Тип | По умолчанию |
|----------|-----|----------|
| **$type** | string |  |
| **$name** | string |  |

##### Ошибки:

| Тип                        | Описание |
|----------------------------|----------|
| \JsonException\|\Throwable | Если произошла ошибка при декодировании JSON. |

##### Возвращает:

```
false|array|int
```
Возвращает массив данных, число или `false` в случае ошибки.

---

[](){#method_getPath}
### getPath

```
static public getPath() : string|null
```

##### Краткое содержание

Возвращает текущий путь, если он установлен.

##### Возвращает:

```
string|null
```
Возвращает путь как строку, либо null, если путь не установлен.

---

[](){#method_init}
### init

```
static public init(string|null  path = null) : void
```

##### Краткое содержание

Инициализирует систему, устанавливая путь для кэша.

##### Описание

Функция получает конфигурацию с помощью DataManager::getConfig(), определяет путь для хранения кэша
(приоритет отдается переданному аргументу `$path`, затем значению из конфигурации, в последнюю очередь
используется стандартный путь), нормализует его и устанавливает через self::setPath().

##### Смотри так-же:

* [\DataManager::normalizePath()](./DataManager.md#method_normalizePath)
* [\DataManager::getConfig()](./DataManager.md#method_getConfig)
* [\CacheControl::setPath()](#method_setPath)

##### Свойства:

| Название | Тип          | По умолчанию |
|----------|--------------|----------|
| **$path** | string\|null | null |

##### Ошибки:

| Тип | Описание |
|-----|----------|
| \JsonException | Если данные конфигурации, получаемые из JSON, не могут быть прочитаны или обработаны. |

##### Возвращает:

```
void
```

---

[](){#method_setCache}
### setCache

```
static public setCache(string  type, string  name, mixed  data) : void
```

##### Краткое содержание

Сохраняет данные в кэше путем создания файла с содержимым в JSON-формате.

##### Описание

Функция выполняет следующие действия:
- Преобразует имя и тип кэша в транслитерацию для формирования имени файла и пути директории.
- Проверяет и создает директорию, если она отсутствует.
- Сериализует переданные данные в JSON и записывает их в файл.
- Логирует возможные ошибки сериализации и записи данных.

##### Смотри так-же:

* [\DataManager::toTranslit()](./DataManager.md#method_toTranslit)
* [\DataManager::normalizePath()](./DataManager.md#method_normalizePath)
* [\DataManager::createDir()](./DataManager.md#method_createDir)
* [\LogGenerator::generateLog()](./LogGenerator.md#method_generateLog)

##### Свойства:

| Название | Тип | По умолчанию |
|----------|-----|----------|
| **$type** | string |  |
| **$name** | string |  |
| **$data** | mixed |  |

##### Ошибки:

| Тип | Описание |
|-----|----------|
| \JsonException | Если возникает ошибка при сериализации данных в JSON. |
| \Throwable | Если возникает ошибка при записи данных в файл. |

##### Возвращает:

```
void
```

---

[](){#method_setPath}
### setPath

```
static public setPath(string  path) : void
```

##### Краткое содержание

Устанавливает значение переменной пути.

##### Описание

Метод задаёт значение для статической переменной `$path`,
которая может быть использована для хранения пути.

##### Смотри так-же:

* [\CacheControl::$path](#property_path)

##### Свойства:

| Название | Тип | По умолчанию |
|----------|-----|----------|
| **$path** | string |  |

##### Возвращает:

```
void
```
