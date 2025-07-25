---
tags:
  - PHP
  - DLE
  - Плагин
  - Админка
title: "Класс: MhAjax - MH Admin"
description: "Документация по плагину класс: mhajax для DLE."
keywords: "PHP, DLE, Плагин, Админка, класс: mhajax, DevCraft, документация"
author: "Maxim Harder"
og:title: "Класс: MhAjax"
og:description: "Документация по плагину класс: mhajax для DLE."
og:image: "https://devcraft.club/data/assets/logo_default/devcraftx2.png"
twitter:title: "Класс: MhAjax"
twitter:description: "Документация по плагину класс: mhajax для DLE."
---

# Класс: MhAjax

## Краткое содержание:

Class MhAjax

## Описание:

Вспомогательный класс для работы с системой управления DLE (Data Life Engine),
загрузкой данных и проверкой ресурсов. Содержит набор методов, облегчающих
выполнение AJAX-запросов, валидацию и взаимодействие с внешними и внутренними ресурсами.


---

### Свойства

* protected $[postXfieldKeys](#property_postXfieldKeys)
* protected $[userXfieldKeys](#property_userXfieldKeys)
* private $[api_key](#property_api_key)
* private $[asset_file](#property_asset_file)
* private $[assets_arr](#property_assets_arr)
* private $[assets_dir](#property_assets_dir)
* private $[cache_folder](#property_cache_folder)
* private $[prefix](#property_prefix)
* private $[recource_id](#property_recource_id)
* private $[update_url](#property_update_url)

---

### Методы

* public [__construct()](#method___construct)
* public [checkAssets()](#method_checkAssets)
* public [checkUpdate()](#method_checkUpdate)
* public [clear_cache()](#method_clear_cache)
* public [get_cache()](#method_get_cache)
* public [get_used_xfields()](#method_get_used_xfields)
* public [getApiKey()](#method_getApiKey)
* public [getCacheFolder()](#method_getCacheFolder)
* public [getCats()](#method_getCats)
* public [getDleUrl()](#method_getDleUrl)
* public [getPrefix()](#method_getPrefix)
* public [getRecourceId()](#method_getRecourceId)
* public [getUpdateUrl()](#method_getUpdateUrl)
* public [getUser()](#method_getUser)
* public [getUserGroups()](#method_getUserGroups)
* public [getUsers()](#method_getUsers)
* public [getXfieldInfo()](#method_getXfieldInfo)
* public [load_data()](#method_load_data)
* public [loadXfields()](#method_loadXfields)
* public [parseAssets()](#method_parseAssets)
* public [save_asset()](#method_save_asset)
* public [setApiKey()](#method_setApiKey)
* public [setCacheFolder()](#method_setCacheFolder)
* public [setPrefix()](#method_setPrefix)
* public [setRecourceId()](#method_setRecourceId)
* public [setUpdateUrl()](#method_setUpdateUrl)
* private [fetchFileContent()](#method_fetchFileContent)
* private [generateFileMetadata()](#method_generateFileMetadata)
* private [parse_assets()](#method_parse_assets)
* private [prepare_assets()](#method_prepare_assets)
* private [saveFile()](#method_saveFile)
* private [set_cache()](#method_set_cache)

---

### Подробности

* Путь: engine/inc/maharder/_includes/classes/MhAjax.php
* Использованные трейты:
    * [\AssetsChecker](./AssetsChecker.md)
    * [\UpdatesChecker](./UpdatesChecker.md)
    * [\DataLoader](./DataLoader.md)
    * [\DleData](./DleData.md)

---

## Свойства

[](){#property_postXfieldKeys}
#### protected $postXfieldKeys : array
---
**Тип:** <abbr title="array">Массив</abbr>

**Подробности:**

* Смотри так-же:
    * [DleData::$postXfieldKeys](./DleData.md#property_postXfieldKeys)

[](){#property_userXfieldKeys}
#### protected $userXfieldKeys : array
---
**Тип:** <abbr title="array">Массив</abbr>

**Подробности:**

* Смотри так-же:
    * [DleData::$userXfieldKeys](./DleData.md#property_userXfieldKeys)

[](){#property_api_key}
#### private $api_key : string
---
**Краткое содержание**

Гостевой ключ с доступом на просмотр информации ресурса на сайте

**Тип:** <abbr title="string">Текст</abbr>

[](){#property_asset_file}
#### private $asset_file : string
---
**Краткое содержание**

Файл с информацией и хешами вспомогательных файлов

**Тип:** <abbr title="string">Текст</abbr>

[](){#property_assets_arr}
#### private $assets_arr : array
---
**Краткое содержание**

Массив со всеми данными для обновления стилей и скриптов

**Тип:** <abbr title="array">Массив</abbr>

[](){#property_assets_dir}
#### private $assets_dir : string
---
**Краткое содержание**

Путь до всех вспомогательных файлов

**Тип:** <abbr title="string">Текст</abbr>

[](){#property_cache_folder}
#### private $cache_folder : string
---
**Краткое содержание**

Папка кеша

**Тип:** <abbr title="string">Текст</abbr>

[](){#property_prefix}
#### private $prefix : ?string
---
**Тип:** <abbr title="?string">Текст или null</abbr>

[](){#property_recource_id}
#### private $recource_id : ?int
---
**Тип:** <a href="../?int"><abbr title="?int">Целое число или null</abbr></a>

**Подробности:**

[](){#property_update_url}
#### private $update_url : string
---
**Тип:** <abbr title="string">Текст</abbr>


---

## Методы

[](){#method___construct}

### __construct

```
public __construct() : mixed
```

##### Краткое содержание

Конструктор класса MhAjax.

##### Описание

Инициализирует объект класса, содержащего вспомогательные методы для работы с DLE, загрузкой данных и проверкой
ресурсов.

##### Возвращает:

```
mixed
```

---

[](){#method_checkAssets}

### checkAssets

```
public checkAssets(bool  rewrite = false) : array
```

##### Краткое содержание

Проверяет целостность файлов между локальным хранилищем и сервером разработчика.

##### Описание

Если файлы отсутствуют или имеют различия в хеш-суммах, информация об этих расхождениях
возвращается в виде массива. При необходимости может быть выполнена перезапись
локального файла с данными о ресурсах.

##### Смотри так-же:

* [\DataManager::dirToArray()](./DataManager.md#method_dirToArray)
* [\AssetsChecker::prepare_assets()](./AssetsChecker.md#method_prepare_assets)

##### Свойства:

| Название     | Тип  | По умолчанию |
|--------------|------|--------------|
| **$rewrite** | bool | false        |

##### Ошибки:

| Тип            | Описание |
|----------------|----------|
| \JsonException |          |

##### Возвращает:

```
array
```

Ассоциативный массив с информацией о проверке файлов:

- `on_server` (int): Количество файлов, находящихся на сервере разработчика.
- `local` (int): Количество локальных файлов.
- `missing_count` (int): Количество недостающих файлов.
- `update_count` (int): Количество файлов, требующих обновления.
- `missing` (array): Массив с данными о недостающих файлах.
- `update` (array): Массив с данными о файлах, требующих обновления.

---

[](){#method_checkUpdate}

### checkUpdate

```
public checkUpdate(int|null  res = null) : array
```

##### Краткое содержание

Проверяет наличие и обновления ресурса, используя указанный или текущий идентификатор ресурса.

##### Смотри так-же:

* [\LogGenerator::generateLog()](./LogGenerator.md#method_generateLog)

##### Свойства:

| Название | Тип       | По умолчанию |
|----------|-----------|--------------|
| **$res** | int\|null | null         |

##### Ошибки:

| Тип                        | Описание                                                                                               |
|----------------------------|--------------------------------------------------------------------------------------------------------|
| \JsonException\|\Throwable | Исключение, связанное с ошибками в JSON-конверсии (может быть выброшено при выполнении Telegram-лога). |

##### Возвращает:

```
array
```

Возвращает массив с данными об обновлении ресурса или список ошибок.

---

[](){#method_clear_cache}

### clear_cache

```
public clear_cache(string  type = "all") : void
```

##### Краткое содержание

Очищает кеш указанного типа.

##### Описание

Метод позволяет очистить кеш для переданного типа или полностью, если тип &quot;all&quot;.
Использует внутренний метод CacheControl::clearCache для выполнения операции очистки.

##### Смотри так-же:

* [\CacheControl::clearCache()](./CacheControl.md#method_clearCache)

##### Свойства:

| Название  | Тип    | По умолчанию |
|-----------|--------|--------------|
| **$type** | string | "all"        |

##### Возвращает:

```
void
```

---

[](){#method_get_cache}

### get_cache

```
public get_cache(string  type, string  name) : array|false
```

##### Краткое содержание

Получает кешированные данные для заданного типа и имени.

##### Описание

Метод использует статический метод `CacheControl::getCache()`, чтобы получить данные из файловой системы.

##### Смотри так-же:

* [\DataManager::toTranslit()](./DataManager.md#method_toTranslit)
* [\DataManager::normalizePath()](./DataManager.md#method_normalizePath)
* [\CacheControl::getCache()](./CacheControl.md#method_getCache)

##### Свойства:

| Название  | Тип    | По умолчанию |
|-----------|--------|--------------|
| **$type** | string |              |
| **$name** | string |              |

##### Ошибки:

| Тип            | Описание |
|----------------|----------|
| \JsonException |          |

##### Возвращает:

```
array|false
```

Возвращает массив декодированных данных, если файл кеша успешно найден и данные корректны,
или `false`, если произошла ошибка (например, файл не найден или данные некорректны).

---

[](){#method_get_used_xfields}

### get_used_xfields

```
public get_used_xfields(int  id, string  type = "post") : array|bool
```

##### Краткое содержание

Возвращает массив с дополнительными полями, использованными в объекте, либо `false`, если данные отсутствуют.

##### Описание

Метод извлекает данные из базы данных для указанного объекта (поста или пользователя)
и преобразует строку с дополнительными полями в массив с ключами и их значениями.

##### Смотри так-же:

* [\DataLoader::load_data()](./DataLoader.md#method_load_data)

##### Свойства:

| Название  | Тип    | По умолчанию |
|-----------|--------|--------------|
| **$id**   | int    |              |
| **$type** | string | "post"       |

##### Ошибки:

| Тип            | Описание                                                           |
|----------------|--------------------------------------------------------------------|
| \JsonException | Исключение выбрасывается, если произошла ошибка при работе с JSON. |

##### Возвращает:

```
array|bool
```

Возвращает массив дополнительных полей объекта в формате
ключ =&gt; значение, либо `false`, если данные отсутствуют.

---

[](){#method_getApiKey}

### getApiKey

```
public getApiKey() : string
```

##### Возвращает:

```
string
```

---

[](){#method_getCacheFolder}

### getCacheFolder

```
public getCacheFolder() : string
```

##### Возвращает:

```
string
```

---

[](){#method_getCats}

### getCats

```
public getCats() : array
```

##### Краткое содержание

Возвращает список категорий в виде ассоциативного массива, где ключом является ID категории, а значением — её
название.

##### Описание

Метод загружает данные из базы данных, используя метод `load_data`, и сортирует их по названию категории в
алфавитном порядке. В результате возвращается массив с ID категорий в качестве ключей и названиями категорий в
качестве значений.

##### Смотри так-же:

* [\DataLoader::load_data()](./DataLoader.md#method_load_data)

##### Ошибки:

| Тип            | Описание |
|----------------|----------|
| \JsonException |          |

##### Возвращает:

```
array
```

Ассоциативный массив категорий, где ключ — ID категории, а значение — её название.

---

[](){#method_getDleUrl}

### getDleUrl

```
public getDleUrl() : string
```

##### Краткое содержание

Возвращает URL панели администратора DLE.

##### Описание

Использует глобальный массив настроек DLE `$config` для формирования полного URL.
Формат возвращаемого значения: http(s)://your-site.com/admin_path.

##### Возвращает:

```
string
```

Конечный URL панели администратора DLE.

---

[](){#method_getPrefix}

### getPrefix

```
public getPrefix() : string
```

##### Краткое содержание

Возвращает префикс для использования в SQL-запросах.

##### Описание

Метод проверяет, установлен ли префикс. Если префикс не задан, он вызывает метод `setPrefix()`,
чтобы установить его значение. Затем возвращает установившийся префикс.

##### Смотри так-же:

* [\DataLoader::$prefix](./DataLoader.md#property_prefix)
* [\DataLoader::setPrefix()](./DataLoader.md#method_setPrefix)

##### Возвращает:

```
string
```

Префикс, используемый для построения SQL-запросов.

---

[](){#method_getRecourceId}

### getRecourceId

```
public getRecourceId() : int|null
```

##### Возвращает:

```
int|null
```

---

[](){#method_getUpdateUrl}

### getUpdateUrl

```
public getUpdateUrl() : string
```

##### Возвращает:

```
string
```

---

[](){#method_getUser}

### getUser

```
public getUser(int|null  id = null, string|null  uname = null) : array|false
```

##### Краткое содержание

Получает данные пользователя по ID или имени пользователя.

##### Описание

Если ни идентификатор пользователя, ни имя пользователя не переданы, метод возвращает `false`.
В противном случае выполняется поиск данных в таблице `users` с использованием указанного критерия.

##### Смотри так-же:

* [\DataLoader::load_data()](./DataLoader.md#method_load_data)

##### Свойства:

| Название   | Тип          | По умолчанию |
|------------|--------------|--------------|
| **$id**    | int\|null    | null         |
| **$uname** | string\|null | null         |

##### Ошибки:

| Тип            | Описание |
|----------------|----------|
| \JsonException |          |

##### Возвращает:

```
array|false
```

Ассоциативный массив с данными о пользователе, если пользователь найден.
Возвращает `false`, если пользователь не найден или если критерии поиска не заданы.

---

[](){#method_getUserGroups}

### getUserGroups

```
public getUserGroups() : array
```

##### Краткое содержание

Получает список групп пользователей в формате массива с идентификаторами и именами групп.

##### Описание

Метод обращается к функции `load_data` для загрузки данных о группах пользователей
из таблицы &quot;usergroups&quot; с выборкой полей `id` и `group_name`,
затем преобразует результат в ассоциативный массив с ключами — идентификаторами групп,
и значениями — именами групп, отсортированными по названию группы в алфавитном порядке (ASC).

##### Смотри так-же:

* [\DataLoader::load_data()](./DataLoader.md#method_load_data)

##### Ошибки:

| Тип            | Описание |
|----------------|----------|
| \JsonException |          |

##### Возвращает:

```
array
```

Ассоциативный массив, где ключ — идентификатор группы, значение — имя группы.

---

[](){#method_getUsers}

### getUsers

```
public getUsers() : array
```

##### Краткое содержание

Возвращает список пользователей из базы данных.

##### Описание

Метод загружает данные о пользователях, используя метод `load_data`,
и возвращает массив, где ключами являются идентификаторы пользователей,
а значениями — их имена, отсортированные в алфавитном порядке.

##### Смотри так-же:

* [\DataLoader::load_data()](./DataLoader.md#method_load_data)

##### Ошибки:

| Тип            | Описание |
|----------------|----------|
| \JsonException |          |

##### Возвращает:

```
array
```

Ассоциативный массив пользователей, где ключи — идентификаторы пользователей (user_id), а значения
— их имена.

---

[](){#method_getXfieldInfo}

### getXfieldInfo

```
public getXfieldInfo(string  name, string  type = "post") : array|null
```

##### Краткое содержание

Возвращает информацию о дополнительном поле (xfield) на основании его имени и типа.

##### Смотри так-же:

* [\DleData::loadXfields()](./DleData.md#method_loadXfields)
* [\CacheControl::getCache()](./CacheControl.md#method_getCache)

##### Свойства:

| Название  | Тип    | По умолчанию |
|-----------|--------|--------------|
| **$name** | string |              |
| **$type** | string | "post"       |

##### Возвращает:

```
array|null
```

Возвращает информацию о поле в виде ассоциативного массива, либо null,
если поле не найдено.

---

[](){#method_load_data}

### load_data

```
public load_data(string  name, mixed  ..._vars) : array
```

##### Краткое содержание

Метод загружает данные из базы данных с использованием механизма кеширования.

##### Описание

Если данные уже закешированы, то они возвращаются из кеша, иначе выполняется запрос
к базе данных, формируется кеш и результат сохраняется на диск.

##### Смотри так-же:

* [\DataManager::getDb()](./DataManager.md#method_getDb)
* [\DataManager::nameArgs()](./DataManager.md#method_nameArgs)
* [\DataManager::getComparer()](./DataManager.md#method_getComparer)
* [\DataManager::getConfig()](./DataManager.md#method_getConfig)

##### Свойства:

| Название   | Тип    | По умолчанию |
|------------|--------|--------------|
| **$name**  | string |              |
| **$_vars** | mixed  |              |

##### Ошибки:

| Тип            | Описание                                 |
|----------------|------------------------------------------|
| \JsonException | В случае JSON-ошибок при работе с кешем. |

##### Возвращает:

```
array
```

Результат выборки из базы данных, либо из кеша.

---

[](){#method_loadXfields}

### loadXfields

```
public loadXfields(string  type = "post") : array|false
```

##### Краткое содержание

Загружает дополнительные поля для новостей или профилей пользователей.

##### Описание

Метод извлекает данные из кэша, либо, при его отсутствии, читает данные из файла конфигурации.
Возвращает ассоциативный массив, где ключами являются названия дополнительных полей, а значениями - их
параметры.
Данные загружаются в зависимости от значения параметра `$type`:

- `"post"`: данные загружаются из файла `xfields.txt`.
- `"user"`: данные загружаются из файла `xprofile.txt`.
  Ключи массива, формируемого из файла конфигурации, соответствуют предопределённым ключам, указанным
  в свойствах `userXfieldKeys` или `postXfieldKeys`.

##### Смотри так-же:

* [\CacheControl::getCache()](./CacheControl.md#method_getCache)
* [\CacheControl::setCache()](./CacheControl.md#method_setCache)

##### Свойства:

| Название  | Тип    | По умолчанию |
|-----------|--------|--------------|
| **$type** | string | "post"       |

##### Возвращает:

```
array|false
```

Ассоциативный массив дополнительных полей, где ключ - название поля, значение - его
параметры. Возвращает `false` в случае невозможности прочитать файл.

---

[](){#method_parseAssets}

### parseAssets

```
public parseAssets(bool  parse = false) : void
```

##### Краткое содержание

Выполняет парсинг вспомогательных файлов для управления ассетами.

##### Описание

Если файл с хешами ассетов существует, то парсинг выполняется только при принудительном запуске.
В случае отсутствия указанного файла производится полное сканирование ассетов.

##### Смотри так-же:

* [\AssetsChecker::parse_assets()](./AssetsChecker.md#method_parse_assetsc)

##### Свойства:

| Название   | Тип  | По умолчанию |
|------------|------|--------------|
| **$parse** | bool | false        |

##### Ошибки:

| Тип                        | Описание                                           |
|----------------------------|----------------------------------------------------|
| \JsonException\|\Throwable | В случае ошибок в процессах обработки JSON-файлов. |

##### Возвращает:

```
void
```

---

[](){#method_save_asset}

### save_asset

```
public save_asset(array  data, string  file) : array|false
```

##### Краткое содержание

Сохраняет файл на сервер и возвращает информацию о нём или false в случае неуспеха.

##### Смотри так-же:

* [\DataManager::createDir()](./DataManager.md#method_createDir)
* [\LogGenerator::generateLog()](./LogGenerator.md#method_generateLog)
* [\AssetsChecker::fetchFileContent()](./AssetsChecker.md#method_fetchFileContent)
* [\AssetsChecker::saveFile()](./AssetsChecker.md#method_saveFile)
* [\AssetsChecker::generateFileMetadata()](./AssetsChecker.md#method_generateFileMetadata)

##### Свойства:

| Название  | Тип    | По умолчанию |
|-----------|--------|--------------|
| **$data** | array  |              |
| **$file** | string |              |

##### Ошибки:

| Тип                        | Описание                                                     |
|----------------------------|--------------------------------------------------------------|
| \JsonException\|\Throwable | Генерирует исключение, если возникает ошибка обработки JSON. |

##### Возвращает:

```
array|false
```

Возвращает массив с информацией о сохранённом файле или false, если файл не удалось сохранить.
Массив содержит следующие ключи:

- "realpath" (string): Полный реальный путь до файла.
- "dirname" (string): Директория файла.
- "basename" (string): Имя файла с расширением.
- "filename" (string): Имя файла без расширения.
- "extension" (string): Расширение файла.
- "mime" (string): MIME-тип файла.
- "encoding" (string): Тип кодирования файла.
- "size" (int): Размер файла в байтах.
- "size_string" (string): Размер файла в человекочитаемом формате (например, &quot;1.5MB&quot;).
- "atime" (int): Время последнего доступа к файлу (в метках времени Unix).
- "mtime" (int): Время последней модификации файла (в метках времени Unix).
- "permission" (string): Права доступа на файл (в формате UNIX-подобной строки, например, &quot;0755&quot;).

---

[](){#method_setApiKey}

### setApiKey

```
public setApiKey(string  api_key) : void
```

##### Свойства:

| Название     | Тип    | По умолчанию |
|--------------|--------|--------------|
| **$api_key** | string |              |

##### Возвращает:

```
void
```

---

[](){#method_setCacheFolder}

### setCacheFolder

```
public setCacheFolder(string  cache_folder) : void
```

##### Свойства:

| Название          | Тип    | По умолчанию |
|-------------------|--------|--------------|
| **$cache_folder** | string |              |

##### Возвращает:

```
void
```

---

[](){#method_setPrefix}

### setPrefix

```
public setPrefix(string|null  name = null) : void
```

##### Краткое содержание

Устанавливает префикс для использования в загрузке данных.

##### Описание

Если переданное имя соответствует значениям &quot;users&quot; или &quot;usergroup&quot;,
то префикс устанавливается в значение константы `USERPREFIX`.
В противном случае используется значение по умолчанию из константы `PREFIX`.

##### Свойства:

| Название  | Тип          | По умолчанию |
|-----------|--------------|--------------|
| **$name** | string\|null | null         |

##### Возвращает:

```
void
```

---

[](){#method_setRecourceId}

### setRecourceId

```
public setRecourceId(int  recource_id) : void
```

##### Свойства:

| Название         | Тип | По умолчанию |
|------------------|-----|--------------|
| **$recource_id** | int |              |

##### Возвращает:

```
void
```

---

[](){#method_setUpdateUrl}

### setUpdateUrl

```
public setUpdateUrl(string  update_url) : void
```

##### Свойства:

| Название        | Тип    | По умолчанию |
|-----------------|--------|--------------|
| **$update_url** | string |              |

##### Возвращает:

```
void
```

---

[](){#method_fetchFileContent}

### fetchFileContent

```
private fetchFileContent(array  data) : string|null
```

##### Краткое содержание

Получает содержимое файла по указанным ссылкам.

##### Описание

Метод пытается загрузить содержимое файла с основной (`link`) и,
при необходимости, с альтернативной (`alt`) ссылки, если содержимое
по основной ссылке пустое.

##### Свойства:

| Название  | Тип   | По умолчанию |
|-----------|-------|--------------|
| **$data** | array |              |

##### Возвращает:

```
string|null
```

Возвращает содержимое файла, либо null, если
не удалось загрузить файл.

---

[](){#method_generateFileMetadata}

### generateFileMetadata

```
private generateFileMetadata(string  file_path) : array
```

##### Краткое содержание

Генерирует метаданные для указанного файла.

##### Свойства:

| Название       | Тип    | По умолчанию |
|----------------|--------|--------------|
| **$file_path** | string |              |

##### Ошибки:

| Тип               | Описание                                |
|-------------------|-----------------------------------------|
| \RuntimeException | Если файл не существует или недоступен. |

##### Возвращает:

```
array
```

Ассоциативный массив, содержащий следующую информацию о файле:

- "realpath" (string|null): Абсолютный путь до файла.
- "dirname" (string): Путь к директории, содержащей файл.
- "basename" (string): Имя файла с расширением.
- "filename" (string): Имя файла без расширения.
- "extension" (string|null): Расширение файла.
- "mime" (string): MIME-тип файла.
- "encoding" (string): Кодировка файла.
- "size" (int): Размер файла в байтах.
- "size_string" (string): Читаемое представление размера файла (например, &quot;10.5 KB&quot;).
- "atime" (int): Временная метка последнего доступа к файлу.
- "mtime" (int): Временная метка последней модификации файла.
- "permission" (string): Права доступа к файлу (например, &quot;0755&quot;).

---

[](){#method_parse_assets}

### parse_assets

```
private parse_assets() : void
```

##### Краткое содержание

Парсит данные о ресурсах (assets), проверяет наличие отсутствующих или обновленных,
и обновляет информацию. Также сохраняет актуальные данные в локальный файл ресурсов.

##### Описание

Процесс включает следующие этапы:

1. Получение списка локальных файлов и их данных через метод `prepare_assets`.
2. Получение данных об удаленных ресурсах через URL.
3. Сравнение данных о хэшах локальных и удаленных ресурсов.
4. Сохранение недостающих или обновленных ресурсов в локальное хранилище.
5. Запись актуализированных данных в локальный JSON-файл.

##### Смотри так-же:

* [\AssetsChecker::save_asset()](./AssetsChecker.md#method_save_asset)
* [\AssetsChecker::prepare_assets()](./AssetsChecker.md#method_prepare_assets)
* [\DataManager::dirToArray()](./DataManager.md#method_dirToArray)

##### Ошибки:

| Тип                        | Описание                                                    |
|----------------------------|-------------------------------------------------------------|
| \JsonException\|\Throwable | Исключение выбрасывается в случае ошибки при работе с JSON. |

##### Возвращает:

```
void
```

---

[](){#method_prepare_assets}

### prepare_assets

```
private prepare_assets(array  arr, string  dir = __DIR__) : void
```

##### Краткое содержание

Подготавливает данные о файлах, расположенных на локальном сервере, и сохраняет их в массив `assets_arr`.

##### Описание

Метод рекурсивно обрабатывает массив с файлами и создает запись для каждого файла в конечном массиве `assets_arr`,
содержащую путь, имя файла и его хэш.

##### Свойства:

| Название | Тип    | По умолчанию |
|----------|--------|--------------|
| **$arr** | array  |              |
| **$dir** | string | __DIR__      |

##### Возвращает:

```
void
```

---

[](){#method_saveFile}

### saveFile

```
private saveFile(string  file_path, string  content, string  file) : bool
```

##### Краткое содержание

Сохраняет содержимое в файл и логирует сообщение при возникновении ошибки.

##### Описание

Метод выполняет запись переданного содержимого в указанный путь файла,
проверяет, доступен ли файл для записи, и логирует ошибку в случае неудачи.

##### Смотри так-же:

* [\LogGenerator::generateLog()](./LogGenerator.md#method_generateLog)

##### Свойства:

| Название       | Тип    | По умолчанию |
|----------------|--------|--------------|
| **$file_path** | string |              |
| **$content**   | string |              |
| **$file**      | string |              |

##### Ошибки:

| Тип        | Описание |
|------------|----------|
| \Throwable |          |

##### Возвращает:

```
bool
```

Возвращает true, если файл успешно сохранён, или false — в случае ошибки.

---

[](){#method_set_cache}

### set_cache

```
private set_cache(string  type, string  name, mixed  data) : void
```

##### Краткое содержание

Сохраняет данные в кеш.

##### Описание

Метод записывает данные в кеш, используя указанный тип и имя.
Для сохранения данных вызывается метод `CacheControl::setCache`, который
обрабатывает директорию и имя файла, записывает данные в формате JSON
и устанавливает необходимые права доступа к файлу.

##### Смотри так-же:

* [\CacheControl::setCache()](./CacheControl.md#method_setCache)

##### Свойства:

| Название  | Тип    | По умолчанию |
|-----------|--------|--------------|
| **$type** | string |              |
| **$name** | string |              |
| **$data** | mixed  |              |

##### Ошибки:

| Тип            | Описание |
|----------------|----------|
| \JsonException |          |

##### Возвращает:

```
void
```
