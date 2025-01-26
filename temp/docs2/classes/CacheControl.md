# Abstract Class: [\Default](../../packages/Default.md)\CacheControl

## Summary:

Абстрактный класс для реализации управления кэшированием.

## Description:

Определяет контракт для классов, управляющих различными аспектами кэш-контроля,
такими как загрузка конфигурации, миграция или работа с файлами конфигурации.

Может быть дополнен реализацией в наследниках для поддержки специфичных стратегий кэширования.


---

### Properties
* private $[path](#property_path)

---

### Methods

* public [clearCache()](#method_clearCache)
* public [getCache()](#method_getCache)
* public [getPath()](#method_getPath)
* public [init()](#method_init)
* public [setCache()](#method_setCache)
* public [setPath()](#method_setPath)

---

### Details

* File: [engine/inc/maharder/_includes/classes/CacheControl.php](../../engine/inc/maharder/_includes/classes/CacheControl.php)

---

## Properties
<a id="property_path"></a>
#### private $path : ?string
---
**Summary**

Определяет путь до кеша.

***Description***

Используется для хранения или извлечения пути, где будут сохраняться
данные кеша. Значение может быть `null`, если путь не был задан.

**Type:** <a href="../?string"><abbr title="?string">?string</abbr></a>

**Details:**
* See Also:
  * [Для получения текущего пути.](../classes/CacheControl.md#method_getPath)
  * [Для задания пути.](../classes/CacheControl.md#method_setPath)

##### Tags
| Tag | Version | Description |
| --- | ------- | ----------- |
| version | 170.2.10 |  |


---

## Methods

<a id="method_clearCache"></a>
### clearCache

```
static public clearCache(string|array  type = &#039;all&#039;) : void
```

##### Summary

Очищает кеш для указанного типа или списка типов.

##### Description

Работает по следующему алгоритму:
- Если передан строковый тип и значение `&#039;all&#039;`, очищается вся директория кеша.
- Если передан массив типов, очистка выполняется рекурсивно для каждого типа.
- В случае конкретного типа, очищается соответствующий подкаталог.

##### See Also:

 * [\self::init()](../\self::init())
 * [\DataManager::deleteDir()](../../classes/DataManager.md#method_deleteDir)
 * [\DataManager::toTranslit()](../../classes/DataManager.md#method_toTranslit)
 * [\self::getPath()](../\self::getPath())

##### Parameters:

| Name | Type | Default |
|------|------|---------|
| **$type** | string|array | &#039;all&#039; |

##### Throws:

| Type | Description |
|------|-------------|
| \JsonException | Исключение может быть выброшено, если возникают ошибки при работе с JSON-библиотекой
(например, при вызовах методов, зависящих от внутренних реализаций). |

##### Returns:

```
void
```
Функция ничего не возвращает.

---

<a id="method_getCache"></a>
### getCache

```
static public getCache(string  type, string  name) : false|array|int
```

##### Summary

Получает данные из кеша, преобразуя имена и типы в транслит и извлекая содержимое файла с последующим
декодированием данных из JSON.

##### Description

Инициализирует путь к кешу, если он не был установлен ранее.
Данные извлекаются из файла с учетом типа и имени, которые преобразуются в транслит.
Если файл отсутствует или недоступен, функция возвращает `false`.
Если данные присутствуют, они декодируются из формата JSON и в случае ошибки выбрасывается исключение
`JsonException`.

##### See Also:

 * [\DataManager::toTranslit()](../../classes/DataManager.md#method_toTranslit)
 * [\DataManager::normalizePath()](../../classes/DataManager.md#method_normalizePath)
 * [\json_decode()](../\json_decode())
 * [\LogGenerator::generateLog()](../../classes/LogGenerator.md#method_generateLog)

##### Parameters:

| Name | Type | Default |
|------|------|---------|
| **$type** | string |  |
| **$name** | string |  |

##### Throws:

| Type | Description |
|------|-------------|
| \JsonException|\Throwable | Если произошла ошибка при декодировании JSON. |

##### Returns:

```
false|array|int
```
Возвращает массив данных, число или `false` в случае ошибки.

---

<a id="method_getPath"></a>
### getPath

```
static public getPath() : string|null
```

##### Summary

Возвращает текущий путь, если он установлен.

##### See Also:

 * [](../)

##### Returns:

```
string|null
```
Возвращает путь как строку, либо null, если путь не установлен.

---

<a id="method_init"></a>
### init

```
static public init(string|null  path = null) : void
```

##### Summary

Инициализирует систему, устанавливая путь для кэша.

##### Description

Функция получает конфигурацию с помощью DataManager::getConfig(), определяет путь для хранения кэша
(приоритет отдается переданному аргументу `$path`, затем значению из конфигурации, в последнюю очередь
используется стандартный путь), нормализует его и устанавливает через self::setPath().

##### See Also:

 * [\DataManager::normalizePath()](../../classes/DataManager.md#method_normalizePath)
 * [\DataManager::getConfig()](../../classes/DataManager.md#method_getConfig)
 * [\self::setPath()](../\self::setPath())

##### Parameters:

| Name | Type | Default |
|------|------|---------|
| **$path** | string|null | null |

##### Throws:

| Type | Description |
|------|-------------|
| \JsonException | Если данные конфигурации, получаемые из JSON, не могут быть прочитаны или обработаны. |

##### Returns:

```
void
```

---

<a id="method_setCache"></a>
### setCache

```
static public setCache(string  type, string  name, mixed  data) : void
```

##### Summary

Сохраняет данные в кэше путем создания файла с содержимым в JSON-формате.

##### Description

Функция выполняет следующие действия:
- Преобразует имя и тип кэша в транслитерацию для формирования имени файла и пути директории.
- Проверяет и создает директорию, если она отсутствует.
- Сериализует переданные данные в JSON и записывает их в файл.
- Логирует возможные ошибки сериализации и записи данных.

##### See Also:

 * [\DataManager::toTranslit()](../../classes/DataManager.md#method_toTranslit)
 * [\DataManager::normalizePath()](../../classes/DataManager.md#method_normalizePath)
 * [\DataManager::createDir()](../../classes/DataManager.md#method_createDir)
 * [\json_encode()](../\json_encode())
 * [\file_put_contents()](../\file_put_contents())
 * [\chmod()](../\chmod())
 * [\LogGenerator::generateLog()](../../classes/LogGenerator.md#method_generateLog)

##### Parameters:

| Name | Type | Default |
|------|------|---------|
| **$type** | string |  |
| **$name** | string |  |
| **$data** | mixed |  |

##### Throws:

| Type | Description |
|------|-------------|
| \JsonException | Если возникает ошибка при сериализации данных в JSON. |
| \Throwable | Если возникает ошибка при записи данных в файл. |

##### Returns:

```
void
```

---

<a id="method_setPath"></a>
### setPath

```
static public setPath(string  path) : void
```

##### Summary

Устанавливает значение переменной пути.

##### Description

Метод задаёт значение для статической переменной `$path`,
которая может быть использована для хранения пути.

##### See Also:

 * [\self::$path](../\self::$path)

##### Parameters:

| Name | Type | Default |
|------|------|---------|
| **$path** | string |  |

##### Returns:

```
void
```
