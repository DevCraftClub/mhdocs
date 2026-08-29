import{r as e}from"./rolldown-runtime-QTnfLwEv.js";import{t}from"./jsx-runtime-By8HlURe.js";var n=e(t()),r={title:`Класс: MhAjax`,description:`Документация по плагину класс: mhajax для DLE.`},i=new Date(1788011088e3),a=`

## Краткое содержание: [#краткое-содержание]

Class MhAjax

## Описание: [#описание]

Вспомогательный класс для работы с системой управления DLE (Data Life Engine),
загрузкой данных и проверкой ресурсов. Содержит набор методов, облегчающих
выполнение AJAX-запросов, валидацию и взаимодействие с внешними и внутренними ресурсами.

***

### Свойства [#свойства]

* protected $[postXfieldKeys](#property_postXfieldKeys)
* protected $[userXfieldKeys](#property_userXfieldKeys)
* private $[api\\_key](#property_api_key)
* private $[asset\\_file](#property_asset_file)
* private $[assets\\_arr](#property_assets_arr)
* private $[assets\\_dir](#property_assets_dir)
* private $[cache\\_folder](#property_cache_folder)
* private $[prefix](#property_prefix)
* private $[recource\\_id](#property_recource_id)
* private $[update\\_url](#property_update_url)

***

### Методы [#методы]

* public [\\_\\_construct()](#method___construct)
* public [checkAssets()](#method_checkAssets)
* public [checkUpdate()](#method_checkUpdate)
* public [clear\\_cache()](#method_clear_cache)
* public [get\\_cache()](#method_get_cache)
* public [get\\_used\\_xfields()](#method_get_used_xfields)
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
* public [load\\_data()](#method_load_data)
* public [loadXfields()](#method_loadXfields)
* public [parseAssets()](#method_parseAssets)
* public [save\\_asset()](#method_save_asset)
* public [setApiKey()](#method_setApiKey)
* public [setCacheFolder()](#method_setCacheFolder)
* public [setPrefix()](#method_setPrefix)
* public [setRecourceId()](#method_setRecourceId)
* public [setUpdateUrl()](#method_setUpdateUrl)
* private [fetchFileContent()](#method_fetchFileContent)
* private [generateFileMetadata()](#method_generateFileMetadata)
* private [parse\\_assets()](#method_parse_assets)
* private [prepare\\_assets()](#method_prepare_assets)
* private [saveFile()](#method_saveFile)
* private [set\\_cache()](#method_set_cache)

***

### Подробности [#подробности]

* Путь: engine/inc/maharder/\\_includes/classes/MhAjax.php
* Использованные трейты:
  * [\\AssetsChecker](./AssetsChecker)
  * [\\UpdatesChecker](./UpdatesChecker)
  * [\\DataLoader](./DataLoader)
  * [\\DleData](./DleData)

***

## Свойства [#свойства-1]

<span id="property_postXfieldKeys" />

#### protected $postXfieldKeys : array [#protected-postxfieldkeys--array]

***

**Тип:** <abbr title="array">Массив</abbr>

**Подробности:**

* Смотри так-же:
  * [DleData::$postXfieldKeys](./DleData#property_postXfieldKeys)

<span id="property_userXfieldKeys" />

#### protected $userXfieldKeys : array [#protected-userxfieldkeys--array]

***

**Тип:** <abbr title="array">Массив</abbr>

**Подробности:**

* Смотри так-же:
  * [DleData::$userXfieldKeys](./DleData#property_userXfieldKeys)

<span id="property_api_key" />

#### private $api\\_key : string [#private-api_key--string]

***

**Краткое содержание**

Гостевой ключ с доступом на просмотр информации ресурса на сайте

**Тип:** <abbr title="string">Текст</abbr>

<span id="property_asset_file" />

#### private $asset\\_file : string [#private-asset_file--string]

***

**Краткое содержание**

Файл с информацией и хешами вспомогательных файлов

**Тип:** <abbr title="string">Текст</abbr>

<span id="property_assets_arr" />

#### private $assets\\_arr : array [#private-assets_arr--array]

***

**Краткое содержание**

Массив со всеми данными для обновления стилей и скриптов

**Тип:** <abbr title="array">Массив</abbr>

<span id="property_assets_dir" />

#### private $assets\\_dir : string [#private-assets_dir--string]

***

**Краткое содержание**

Путь до всех вспомогательных файлов

**Тип:** <abbr title="string">Текст</abbr>

<span id="property_cache_folder" />

#### private $cache\\_folder : string [#private-cache_folder--string]

***

**Краткое содержание**

Папка кеша

**Тип:** <abbr title="string">Текст</abbr>

<span id="property_prefix" />

#### private $prefix : ?string [#private-prefix--string]

***

**Тип:** <abbr title="?string">Текст или null</abbr>

<span id="property_recource_id" />

#### private $recource\\_id : ?int [#private-recource_id--int]

***

**Тип:** <a href="../?int"><abbr title="?int">Целое число или null</abbr></a>

**Подробности:**

<span id="property_update_url" />

#### private $update\\_url : string [#private-update_url--string]

***

**Тип:** <abbr title="string">Текст</abbr>

***

## Методы [#методы-1]

<span id="method___construct" />

### \\_\\_construct [#__construct]

\`\`\`
public __construct() : mixed
\`\`\`

##### Краткое содержание [#краткое-содержание-1]

Конструктор класса MhAjax.

##### Описание [#описание-1]

Инициализирует объект класса, содержащего вспомогательные методы для работы с DLE, загрузкой данных и проверкой
ресурсов.

##### Возвращает: [#возвращает]

\`\`\`
mixed
\`\`\`

***

<span id="method_checkAssets" />

### checkAssets [#checkassets]

\`\`\`
public checkAssets(bool  rewrite = false) : array
\`\`\`

##### Краткое содержание [#краткое-содержание-2]

Проверяет целостность файлов между локальным хранилищем и сервером разработчика.

##### Описание [#описание-2]

Если файлы отсутствуют или имеют различия в хеш-суммах, информация об этих расхождениях
возвращается в виде массива. При необходимости может быть выполнена перезапись
локального файла с данными о ресурсах.

##### Смотри так-же: [#смотри-так-же]

* [\\DataManager::dirToArray()](./DataManager#method_dirToArray)
* [\\AssetsChecker::prepare\\_assets()](./AssetsChecker#method_prepare_assets)

##### Свойства: [#свойства-2]

| Название     | Тип  | По умолчанию |
| ------------ | ---- | ------------ |
| **$rewrite** | bool | false        |

##### Ошибки: [#ошибки]

| Тип            | Описание |
| -------------- | -------- |
| \\JsonException |          |

##### Возвращает: [#возвращает-1]

\`\`\`
array
\`\`\`

Ассоциативный массив с информацией о проверке файлов:

* \`on_server\` (int): Количество файлов, находящихся на сервере разработчика.
* \`local\` (int): Количество локальных файлов.
* \`missing_count\` (int): Количество недостающих файлов.
* \`update_count\` (int): Количество файлов, требующих обновления.
* \`missing\` (array): Массив с данными о недостающих файлах.
* \`update\` (array): Массив с данными о файлах, требующих обновления.

***

<span id="method_checkUpdate" />

### checkUpdate [#checkupdate]

\`\`\`
public checkUpdate(int|null  res = null) : array
\`\`\`

##### Краткое содержание [#краткое-содержание-3]

Проверяет наличие и обновления ресурса, используя указанный или текущий идентификатор ресурса.

##### Смотри так-же: [#смотри-так-же-1]

* [\\LogGenerator::generateLog()](./LogGenerator#method_generateLog)

##### Свойства: [#свойства-3]

| Название | Тип       | По умолчанию |
| -------- | --------- | ------------ |
| **$res** | int\\|null | null         |

##### Ошибки: [#ошибки-1]

| Тип                        | Описание                                                                                               |
| -------------------------- | ------------------------------------------------------------------------------------------------------ |
| \\JsonException\\|\\Throwable | Исключение, связанное с ошибками в JSON-конверсии (может быть выброшено при выполнении Telegram-лога). |

##### Возвращает: [#возвращает-2]

\`\`\`
array
\`\`\`

Возвращает массив с данными об обновлении ресурса или список ошибок.

***

<span id="method_clear_cache" />

### clear\\_cache [#clear_cache]

\`\`\`
public clear_cache(string  type = "all") : void
\`\`\`

##### Краткое содержание [#краткое-содержание-4]

Очищает кеш указанного типа.

##### Описание [#описание-3]

Метод позволяет очистить кеш для переданного типа или полностью, если тип "all".
Использует внутренний метод CacheControl::clearCache для выполнения операции очистки.

##### Смотри так-же: [#смотри-так-же-2]

* [\\CacheControl::clearCache()](./CacheControl#method_clearCache)

##### Свойства: [#свойства-4]

| Название  | Тип    | По умолчанию |
| --------- | ------ | ------------ |
| **$type** | string | "all"        |

##### Возвращает: [#возвращает-3]

\`\`\`
void
\`\`\`

***

<span id="method_get_cache" />

### get\\_cache [#get_cache]

\`\`\`
public get_cache(string  type, string  name) : array|false
\`\`\`

##### Краткое содержание [#краткое-содержание-5]

Получает кешированные данные для заданного типа и имени.

##### Описание [#описание-4]

Метод использует статический метод \`CacheControl::getCache()\`, чтобы получить данные из файловой системы.

##### Смотри так-же: [#смотри-так-же-3]

* [\\DataManager::toTranslit()](./DataManager#method_toTranslit)
* [\\DataManager::normalizePath()](./DataManager#method_normalizePath)
* [\\CacheControl::getCache()](./CacheControl#method_getCache)

##### Свойства: [#свойства-5]

| Название  | Тип    | По умолчанию |
| --------- | ------ | ------------ |
| **$type** | string |              |
| **$name** | string |              |

##### Ошибки: [#ошибки-2]

| Тип            | Описание |
| -------------- | -------- |
| \\JsonException |          |

##### Возвращает: [#возвращает-4]

\`\`\`
array|false
\`\`\`

Возвращает массив декодированных данных, если файл кеша успешно найден и данные корректны,
или \`false\`, если произошла ошибка (например, файл не найден или данные некорректны).

***

<span id="method_get_used_xfields" />

### get\\_used\\_xfields [#get_used_xfields]

\`\`\`
public get_used_xfields(int  id, string  type = "post") : array|bool
\`\`\`

##### Краткое содержание [#краткое-содержание-6]

Возвращает массив с дополнительными полями, использованными в объекте, либо \`false\`, если данные отсутствуют.

##### Описание [#описание-5]

Метод извлекает данные из базы данных для указанного объекта (поста или пользователя)
и преобразует строку с дополнительными полями в массив с ключами и их значениями.

##### Смотри так-же: [#смотри-так-же-4]

* [\\DataLoader::load\\_data()](./DataLoader#method_load_data)

##### Свойства: [#свойства-6]

| Название  | Тип    | По умолчанию |
| --------- | ------ | ------------ |
| **$id**   | int    |              |
| **$type** | string | "post"       |

##### Ошибки: [#ошибки-3]

| Тип            | Описание                                                           |
| -------------- | ------------------------------------------------------------------ |
| \\JsonException | Исключение выбрасывается, если произошла ошибка при работе с JSON. |

##### Возвращает: [#возвращает-5]

\`\`\`
array|bool
\`\`\`

Возвращает массив дополнительных полей объекта в формате
ключ => значение, либо \`false\`, если данные отсутствуют.

***

<span id="method_getApiKey" />

### getApiKey [#getapikey]

\`\`\`
public getApiKey() : string
\`\`\`

##### Возвращает: [#возвращает-6]

\`\`\`
string
\`\`\`

***

<span id="method_getCacheFolder" />

### getCacheFolder [#getcachefolder]

\`\`\`
public getCacheFolder() : string
\`\`\`

##### Возвращает: [#возвращает-7]

\`\`\`
string
\`\`\`

***

<span id="method_getCats" />

### getCats [#getcats]

\`\`\`
public getCats() : array
\`\`\`

##### Краткое содержание [#краткое-содержание-7]

Возвращает список категорий в виде ассоциативного массива, где ключом является ID категории, а значением — её
название.

##### Описание [#описание-6]

Метод загружает данные из базы данных, используя метод \`load_data\`, и сортирует их по названию категории в
алфавитном порядке. В результате возвращается массив с ID категорий в качестве ключей и названиями категорий в
качестве значений.

##### Смотри так-же: [#смотри-так-же-5]

* [\\DataLoader::load\\_data()](./DataLoader#method_load_data)

##### Ошибки: [#ошибки-4]

| Тип            | Описание |
| -------------- | -------- |
| \\JsonException |          |

##### Возвращает: [#возвращает-8]

\`\`\`
array
\`\`\`

Ассоциативный массив категорий, где ключ — ID категории, а значение — её название.

***

<span id="method_getDleUrl" />

### getDleUrl [#getdleurl]

\`\`\`
public getDleUrl() : string
\`\`\`

##### Краткое содержание [#краткое-содержание-8]

Возвращает URL панели администратора DLE.

##### Описание [#описание-7]

Использует глобальный массив настроек DLE \`$config\` для формирования полного URL.
Формат возвращаемого значения: http(s)://your-site.com/admin\\_path.

##### Возвращает: [#возвращает-9]

\`\`\`
string
\`\`\`

Конечный URL панели администратора DLE.

***

<span id="method_getPrefix" />

### getPrefix [#getprefix]

\`\`\`
public getPrefix() : string
\`\`\`

##### Краткое содержание [#краткое-содержание-9]

Возвращает префикс для использования в SQL-запросах.

##### Описание [#описание-8]

Метод проверяет, установлен ли префикс. Если префикс не задан, он вызывает метод \`setPrefix()\`,
чтобы установить его значение. Затем возвращает установившийся префикс.

##### Смотри так-же: [#смотри-так-же-6]

* [\\DataLoader::$prefix](./DataLoader#property_prefix)
* [\\DataLoader::setPrefix()](./DataLoader#method_setPrefix)

##### Возвращает: [#возвращает-10]

\`\`\`
string
\`\`\`

Префикс, используемый для построения SQL-запросов.

***

<span id="method_getRecourceId" />

### getRecourceId [#getrecourceid]

\`\`\`
public getRecourceId() : int|null
\`\`\`

##### Возвращает: [#возвращает-11]

\`\`\`
int|null
\`\`\`

***

<span id="method_getUpdateUrl" />

### getUpdateUrl [#getupdateurl]

\`\`\`
public getUpdateUrl() : string
\`\`\`

##### Возвращает: [#возвращает-12]

\`\`\`
string
\`\`\`

***

<span id="method_getUser" />

### getUser [#getuser]

\`\`\`
public getUser(int|null  id = null, string|null  uname = null) : array|false
\`\`\`

##### Краткое содержание [#краткое-содержание-10]

Получает данные пользователя по ID или имени пользователя.

##### Описание [#описание-9]

Если ни идентификатор пользователя, ни имя пользователя не переданы, метод возвращает \`false\`.
В противном случае выполняется поиск данных в таблице \`users\` с использованием указанного критерия.

##### Смотри так-же: [#смотри-так-же-7]

* [\\DataLoader::load\\_data()](./DataLoader#method_load_data)

##### Свойства: [#свойства-7]

| Название   | Тип          | По умолчанию |
| ---------- | ------------ | ------------ |
| **$id**    | int\\|null    | null         |
| **$uname** | string\\|null | null         |

##### Ошибки: [#ошибки-5]

| Тип            | Описание |
| -------------- | -------- |
| \\JsonException |          |

##### Возвращает: [#возвращает-13]

\`\`\`
array|false
\`\`\`

Ассоциативный массив с данными о пользователе, если пользователь найден.
Возвращает \`false\`, если пользователь не найден или если критерии поиска не заданы.

***

<span id="method_getUserGroups" />

### getUserGroups [#getusergroups]

\`\`\`
public getUserGroups() : array
\`\`\`

##### Краткое содержание [#краткое-содержание-11]

Получает список групп пользователей в формате массива с идентификаторами и именами групп.

##### Описание [#описание-10]

Метод обращается к функции \`load_data\` для загрузки данных о группах пользователей
из таблицы "usergroups" с выборкой полей \`id\` и \`group_name\`,
затем преобразует результат в ассоциативный массив с ключами — идентификаторами групп,
и значениями — именами групп, отсортированными по названию группы в алфавитном порядке (ASC).

##### Смотри так-же: [#смотри-так-же-8]

* [\\DataLoader::load\\_data()](./DataLoader#method_load_data)

##### Ошибки: [#ошибки-6]

| Тип            | Описание |
| -------------- | -------- |
| \\JsonException |          |

##### Возвращает: [#возвращает-14]

\`\`\`
array
\`\`\`

Ассоциативный массив, где ключ — идентификатор группы, значение — имя группы.

***

<span id="method_getUsers" />

### getUsers [#getusers]

\`\`\`
public getUsers() : array
\`\`\`

##### Краткое содержание [#краткое-содержание-12]

Возвращает список пользователей из базы данных.

##### Описание [#описание-11]

Метод загружает данные о пользователях, используя метод \`load_data\`,
и возвращает массив, где ключами являются идентификаторы пользователей,
а значениями — их имена, отсортированные в алфавитном порядке.

##### Смотри так-же: [#смотри-так-же-9]

* [\\DataLoader::load\\_data()](./DataLoader#method_load_data)

##### Ошибки: [#ошибки-7]

| Тип            | Описание |
| -------------- | -------- |
| \\JsonException |          |

##### Возвращает: [#возвращает-15]

\`\`\`
array
\`\`\`

Ассоциативный массив пользователей, где ключи — идентификаторы пользователей (user\\_id), а значения
— их имена.

***

<span id="method_getXfieldInfo" />

### getXfieldInfo [#getxfieldinfo]

\`\`\`
public getXfieldInfo(string  name, string  type = "post") : array|null
\`\`\`

##### Краткое содержание [#краткое-содержание-13]

Возвращает информацию о дополнительном поле (xfield) на основании его имени и типа.

##### Смотри так-же: [#смотри-так-же-10]

* [\\DleData::loadXfields()](./DleData#method_loadXfields)
* [\\CacheControl::getCache()](./CacheControl#method_getCache)

##### Свойства: [#свойства-8]

| Название  | Тип    | По умолчанию |
| --------- | ------ | ------------ |
| **$name** | string |              |
| **$type** | string | "post"       |

##### Возвращает: [#возвращает-16]

\`\`\`
array|null
\`\`\`

Возвращает информацию о поле в виде ассоциативного массива, либо null,
если поле не найдено.

***

<span id="method_load_data" />

### load\\_data [#load_data]

\`\`\`
public load_data(string  name, mixed  ..._vars) : array
\`\`\`

##### Краткое содержание [#краткое-содержание-14]

Метод загружает данные из базы данных с использованием механизма кеширования.

##### Описание [#описание-12]

Если данные уже закешированы, то они возвращаются из кеша, иначе выполняется запрос
к базе данных, формируется кеш и результат сохраняется на диск.

##### Смотри так-же: [#смотри-так-же-11]

* [\\DataManager::getDb()](./DataManager#method_getDb)
* [\\DataManager::nameArgs()](./DataManager#method_nameArgs)
* [\\DataManager::getComparer()](./DataManager#method_getComparer)
* [\\DataManager::getConfig()](./DataManager#method_getConfig)

##### Свойства: [#свойства-9]

| Название    | Тип    | По умолчанию |
| ----------- | ------ | ------------ |
| **$name**   | string |              |
| **$\\_vars** | mixed  |              |

##### Ошибки: [#ошибки-8]

| Тип            | Описание                                 |
| -------------- | ---------------------------------------- |
| \\JsonException | В случае JSON-ошибок при работе с кешем. |

##### Возвращает: [#возвращает-17]

\`\`\`
array
\`\`\`

Результат выборки из базы данных, либо из кеша.

***

<span id="method_loadXfields" />

### loadXfields [#loadxfields]

\`\`\`
public loadXfields(string  type = "post") : array|false
\`\`\`

##### Краткое содержание [#краткое-содержание-15]

Загружает дополнительные поля для новостей или профилей пользователей.

##### Описание [#описание-13]

Метод извлекает данные из кэша, либо, при его отсутствии, читает данные из файла конфигурации.
Возвращает ассоциативный массив, где ключами являются названия дополнительных полей, а значениями - их
параметры.
Данные загружаются в зависимости от значения параметра \`$type\`:

* \`"post"\`: данные загружаются из файла \`xfields.txt\`.
* \`"user"\`: данные загружаются из файла \`xprofile.txt\`.
  Ключи массива, формируемого из файла конфигурации, соответствуют предопределённым ключам, указанным
  в свойствах \`userXfieldKeys\` или \`postXfieldKeys\`.

##### Смотри так-же: [#смотри-так-же-12]

* [\\CacheControl::getCache()](./CacheControl#method_getCache)
* [\\CacheControl::setCache()](./CacheControl#method_setCache)

##### Свойства: [#свойства-10]

| Название  | Тип    | По умолчанию |
| --------- | ------ | ------------ |
| **$type** | string | "post"       |

##### Возвращает: [#возвращает-18]

\`\`\`
array|false
\`\`\`

Ассоциативный массив дополнительных полей, где ключ - название поля, значение - его
параметры. Возвращает \`false\` в случае невозможности прочитать файл.

***

<span id="method_parseAssets" />

### parseAssets [#parseassets]

\`\`\`
public parseAssets(bool  parse = false) : void
\`\`\`

##### Краткое содержание [#краткое-содержание-16]

Выполняет парсинг вспомогательных файлов для управления ассетами.

##### Описание [#описание-14]

Если файл с хешами ассетов существует, то парсинг выполняется только при принудительном запуске.
В случае отсутствия указанного файла производится полное сканирование ассетов.

##### Смотри так-же: [#смотри-так-же-13]

* [\\AssetsChecker::parse\\_assets()](./AssetsChecker#method_parse_assetsc)

##### Свойства: [#свойства-11]

| Название   | Тип  | По умолчанию |
| ---------- | ---- | ------------ |
| **$parse** | bool | false        |

##### Ошибки: [#ошибки-9]

| Тип                        | Описание                                           |
| -------------------------- | -------------------------------------------------- |
| \\JsonException\\|\\Throwable | В случае ошибок в процессах обработки JSON-файлов. |

##### Возвращает: [#возвращает-19]

\`\`\`
void
\`\`\`

***

<span id="method_save_asset" />

### save\\_asset [#save_asset]

\`\`\`
public save_asset(array  data, string  file) : array|false
\`\`\`

##### Краткое содержание [#краткое-содержание-17]

Сохраняет файл на сервер и возвращает информацию о нём или false в случае неуспеха.

##### Смотри так-же: [#смотри-так-же-14]

* [\\DataManager::createDir()](./DataManager#method_createDir)
* [\\LogGenerator::generateLog()](./LogGenerator#method_generateLog)
* [\\AssetsChecker::fetchFileContent()](./AssetsChecker#method_fetchFileContent)
* [\\AssetsChecker::saveFile()](./AssetsChecker#method_saveFile)
* [\\AssetsChecker::generateFileMetadata()](./AssetsChecker#method_generateFileMetadata)

##### Свойства: [#свойства-12]

| Название  | Тип    | По умолчанию |
| --------- | ------ | ------------ |
| **$data** | array  |              |
| **$file** | string |              |

##### Ошибки: [#ошибки-10]

| Тип                        | Описание                                                     |
| -------------------------- | ------------------------------------------------------------ |
| \\JsonException\\|\\Throwable | Генерирует исключение, если возникает ошибка обработки JSON. |

##### Возвращает: [#возвращает-20]

\`\`\`
array|false
\`\`\`

Возвращает массив с информацией о сохранённом файле или false, если файл не удалось сохранить.
Массив содержит следующие ключи:

* "realpath" (string): Полный реальный путь до файла.
* "dirname" (string): Директория файла.
* "basename" (string): Имя файла с расширением.
* "filename" (string): Имя файла без расширения.
* "extension" (string): Расширение файла.
* "mime" (string): MIME-тип файла.
* "encoding" (string): Тип кодирования файла.
* "size" (int): Размер файла в байтах.
* "size\\_string" (string): Размер файла в человекочитаемом формате (например, "1.5MB").
* "atime" (int): Время последнего доступа к файлу (в метках времени Unix).
* "mtime" (int): Время последней модификации файла (в метках времени Unix).
* "permission" (string): Права доступа на файл (в формате UNIX-подобной строки, например, "0755").

***

<span id="method_setApiKey" />

### setApiKey [#setapikey]

\`\`\`
public setApiKey(string  api_key) : void
\`\`\`

##### Свойства: [#свойства-13]

| Название      | Тип    | По умолчанию |
| ------------- | ------ | ------------ |
| **$api\\_key** | string |              |

##### Возвращает: [#возвращает-21]

\`\`\`
void
\`\`\`

***

<span id="method_setCacheFolder" />

### setCacheFolder [#setcachefolder]

\`\`\`
public setCacheFolder(string  cache_folder) : void
\`\`\`

##### Свойства: [#свойства-14]

| Название           | Тип    | По умолчанию |
| ------------------ | ------ | ------------ |
| **$cache\\_folder** | string |              |

##### Возвращает: [#возвращает-22]

\`\`\`
void
\`\`\`

***

<span id="method_setPrefix" />

### setPrefix [#setprefix]

\`\`\`
public setPrefix(string|null  name = null) : void
\`\`\`

##### Краткое содержание [#краткое-содержание-18]

Устанавливает префикс для использования в загрузке данных.

##### Описание [#описание-15]

Если переданное имя соответствует значениям "users" или "usergroup",
то префикс устанавливается в значение константы \`USERPREFIX\`.
В противном случае используется значение по умолчанию из константы \`PREFIX\`.

##### Свойства: [#свойства-15]

| Название  | Тип          | По умолчанию |
| --------- | ------------ | ------------ |
| **$name** | string\\|null | null         |

##### Возвращает: [#возвращает-23]

\`\`\`
void
\`\`\`

***

<span id="method_setRecourceId" />

### setRecourceId [#setrecourceid]

\`\`\`
public setRecourceId(int  recource_id) : void
\`\`\`

##### Свойства: [#свойства-16]

| Название          | Тип | По умолчанию |
| ----------------- | --- | ------------ |
| **$recource\\_id** | int |              |

##### Возвращает: [#возвращает-24]

\`\`\`
void
\`\`\`

***

<span id="method_setUpdateUrl" />

### setUpdateUrl [#setupdateurl]

\`\`\`
public setUpdateUrl(string  update_url) : void
\`\`\`

##### Свойства: [#свойства-17]

| Название         | Тип    | По умолчанию |
| ---------------- | ------ | ------------ |
| **$update\\_url** | string |              |

##### Возвращает: [#возвращает-25]

\`\`\`
void
\`\`\`

***

<span id="method_fetchFileContent" />

### fetchFileContent [#fetchfilecontent]

\`\`\`
private fetchFileContent(array  data) : string|null
\`\`\`

##### Краткое содержание [#краткое-содержание-19]

Получает содержимое файла по указанным ссылкам.

##### Описание [#описание-16]

Метод пытается загрузить содержимое файла с основной (\`link\`) и,
при необходимости, с альтернативной (\`alt\`) ссылки, если содержимое
по основной ссылке пустое.

##### Свойства: [#свойства-18]

| Название  | Тип   | По умолчанию |
| --------- | ----- | ------------ |
| **$data** | array |              |

##### Возвращает: [#возвращает-26]

\`\`\`
string|null
\`\`\`

Возвращает содержимое файла, либо null, если
не удалось загрузить файл.

***

<span id="method_generateFileMetadata" />

### generateFileMetadata [#generatefilemetadata]

\`\`\`
private generateFileMetadata(string  file_path) : array
\`\`\`

##### Краткое содержание [#краткое-содержание-20]

Генерирует метаданные для указанного файла.

##### Свойства: [#свойства-19]

| Название        | Тип    | По умолчанию |
| --------------- | ------ | ------------ |
| **$file\\_path** | string |              |

##### Ошибки: [#ошибки-11]

| Тип               | Описание                                |
| ----------------- | --------------------------------------- |
| \\RuntimeException | Если файл не существует или недоступен. |

##### Возвращает: [#возвращает-27]

\`\`\`
array
\`\`\`

Ассоциативный массив, содержащий следующую информацию о файле:

* "realpath" (string|null): Абсолютный путь до файла.
* "dirname" (string): Путь к директории, содержащей файл.
* "basename" (string): Имя файла с расширением.
* "filename" (string): Имя файла без расширения.
* "extension" (string|null): Расширение файла.
* "mime" (string): MIME-тип файла.
* "encoding" (string): Кодировка файла.
* "size" (int): Размер файла в байтах.
* "size\\_string" (string): Читаемое представление размера файла (например, "10.5 KB").
* "atime" (int): Временная метка последнего доступа к файлу.
* "mtime" (int): Временная метка последней модификации файла.
* "permission" (string): Права доступа к файлу (например, "0755").

***

<span id="method_parse_assets" />

### parse\\_assets [#parse_assets]

\`\`\`
private parse_assets() : void
\`\`\`

##### Краткое содержание [#краткое-содержание-21]

Парсит данные о ресурсах (assets), проверяет наличие отсутствующих или обновленных,
и обновляет информацию. Также сохраняет актуальные данные в локальный файл ресурсов.

##### Описание [#описание-17]

Процесс включает следующие этапы:

1. Получение списка локальных файлов и их данных через метод \`prepare_assets\`.
2. Получение данных об удаленных ресурсах через URL.
3. Сравнение данных о хэшах локальных и удаленных ресурсов.
4. Сохранение недостающих или обновленных ресурсов в локальное хранилище.
5. Запись актуализированных данных в локальный JSON-файл.

##### Смотри так-же: [#смотри-так-же-15]

* [\\AssetsChecker::save\\_asset()](./AssetsChecker#method_save_asset)
* [\\AssetsChecker::prepare\\_assets()](./AssetsChecker#method_prepare_assets)
* [\\DataManager::dirToArray()](./DataManager#method_dirToArray)

##### Ошибки: [#ошибки-12]

| Тип                        | Описание                                                    |
| -------------------------- | ----------------------------------------------------------- |
| \\JsonException\\|\\Throwable | Исключение выбрасывается в случае ошибки при работе с JSON. |

##### Возвращает: [#возвращает-28]

\`\`\`
void
\`\`\`

***

<span id="method_prepare_assets" />

### prepare\\_assets [#prepare_assets]

\`\`\`
private prepare_assets(array  arr, string  dir = __DIR__) : void
\`\`\`

##### Краткое содержание [#краткое-содержание-22]

Подготавливает данные о файлах, расположенных на локальном сервере, и сохраняет их в массив \`assets_arr\`.

##### Описание [#описание-18]

Метод рекурсивно обрабатывает массив с файлами и создает запись для каждого файла в конечном массиве \`assets_arr\`,
содержащую путь, имя файла и его хэш.

##### Свойства: [#свойства-20]

| Название | Тип    | По умолчанию |
| -------- | ------ | ------------ |
| **$arr** | array  |              |
| **$dir** | string | **DIR**      |

##### Возвращает: [#возвращает-29]

\`\`\`
void
\`\`\`

***

<span id="method_saveFile" />

### saveFile [#savefile]

\`\`\`
private saveFile(string  file_path, string  content, string  file) : bool
\`\`\`

##### Краткое содержание [#краткое-содержание-23]

Сохраняет содержимое в файл и логирует сообщение при возникновении ошибки.

##### Описание [#описание-19]

Метод выполняет запись переданного содержимого в указанный путь файла,
проверяет, доступен ли файл для записи, и логирует ошибку в случае неудачи.

##### Смотри так-же: [#смотри-так-же-16]

* [\\LogGenerator::generateLog()](./LogGenerator#method_generateLog)

##### Свойства: [#свойства-21]

| Название        | Тип    | По умолчанию |
| --------------- | ------ | ------------ |
| **$file\\_path** | string |              |
| **$content**    | string |              |
| **$file**       | string |              |

##### Ошибки: [#ошибки-13]

| Тип        | Описание |
| ---------- | -------- |
| \\Throwable |          |

##### Возвращает: [#возвращает-30]

\`\`\`
bool
\`\`\`

Возвращает true, если файл успешно сохранён, или false — в случае ошибки.

***

<span id="method_set_cache" />

### set\\_cache [#set_cache]

\`\`\`
private set_cache(string  type, string  name, mixed  data) : void
\`\`\`

##### Краткое содержание [#краткое-содержание-24]

Сохраняет данные в кеш.

##### Описание [#описание-20]

Метод записывает данные в кеш, используя указанный тип и имя.
Для сохранения данных вызывается метод \`CacheControl::setCache\`, который
обрабатывает директорию и имя файла, записывает данные в формате JSON
и устанавливает необходимые права доступа к файлу.

##### Смотри так-же: [#смотри-так-же-17]

* [\\CacheControl::setCache()](./CacheControl#method_setCache)

##### Свойства: [#свойства-22]

| Название  | Тип    | По умолчанию |
| --------- | ------ | ------------ |
| **$type** | string |              |
| **$name** | string |              |
| **$data** | mixed  |              |

##### Ошибки: [#ошибки-14]

| Тип            | Описание |
| -------------- | -------- |
| \\JsonException |          |

##### Возвращает: [#возвращает-31]

\`\`\`
void
\`\`\`
`,o={contents:[{heading:`краткое-содержание`,content:`Class MhAjax`},{heading:`описание`,content:`Вспомогательный класс для работы с системой управления DLE (Data Life Engine),
загрузкой данных и проверкой ресурсов. Содержит набор методов, облегчающих
выполнение AJAX-запросов, валидацию и взаимодействие с внешними и внутренними ресурсами.`},{heading:`свойства`,content:`protected $postXfieldKeys`},{heading:`свойства`,content:`protected $userXfieldKeys`},{heading:`свойства`,content:`private $api\\_key`},{heading:`свойства`,content:`private $asset\\_file`},{heading:`свойства`,content:`private $assets\\_arr`},{heading:`свойства`,content:`private $assets\\_dir`},{heading:`свойства`,content:`private $cache\\_folder`},{heading:`свойства`,content:`private $prefix`},{heading:`свойства`,content:`private $recource\\_id`},{heading:`свойства`,content:`private $update\\_url`},{heading:`методы`,content:`public \\_\\_construct()`},{heading:`методы`,content:`public checkAssets()`},{heading:`методы`,content:`public checkUpdate()`},{heading:`методы`,content:`public clear\\_cache()`},{heading:`методы`,content:`public get\\_cache()`},{heading:`методы`,content:`public get\\_used\\_xfields()`},{heading:`методы`,content:`public getApiKey()`},{heading:`методы`,content:`public getCacheFolder()`},{heading:`методы`,content:`public getCats()`},{heading:`методы`,content:`public getDleUrl()`},{heading:`методы`,content:`public getPrefix()`},{heading:`методы`,content:`public getRecourceId()`},{heading:`методы`,content:`public getUpdateUrl()`},{heading:`методы`,content:`public getUser()`},{heading:`методы`,content:`public getUserGroups()`},{heading:`методы`,content:`public getUsers()`},{heading:`методы`,content:`public getXfieldInfo()`},{heading:`методы`,content:`public load\\_data()`},{heading:`методы`,content:`public loadXfields()`},{heading:`методы`,content:`public parseAssets()`},{heading:`методы`,content:`public save\\_asset()`},{heading:`методы`,content:`public setApiKey()`},{heading:`методы`,content:`public setCacheFolder()`},{heading:`методы`,content:`public setPrefix()`},{heading:`методы`,content:`public setRecourceId()`},{heading:`методы`,content:`public setUpdateUrl()`},{heading:`методы`,content:`private fetchFileContent()`},{heading:`методы`,content:`private generateFileMetadata()`},{heading:`методы`,content:`private parse\\_assets()`},{heading:`методы`,content:`private prepare\\_assets()`},{heading:`методы`,content:`private saveFile()`},{heading:`методы`,content:`private set\\_cache()`},{heading:`подробности`,content:`Путь: engine/inc/maharder/\\_includes/classes/MhAjax.php`},{heading:`подробности`,content:`Использованные трейты:`},{heading:`подробности`,content:`\\AssetsChecker`},{heading:`подробности`,content:`\\UpdatesChecker`},{heading:`подробности`,content:`\\DataLoader`},{heading:`подробности`,content:`\\DleData`},{heading:`protected-postxfieldkeys--array`,content:`**Тип:** Массив`},{heading:`protected-postxfieldkeys--array`,content:`**Подробности:**`},{heading:`protected-postxfieldkeys--array`,content:`Смотри так-же:`},{heading:`protected-postxfieldkeys--array`,content:`DleData::$postXfieldKeys`},{heading:`protected-userxfieldkeys--array`,content:`**Тип:** Массив`},{heading:`protected-userxfieldkeys--array`,content:`**Подробности:**`},{heading:`protected-userxfieldkeys--array`,content:`Смотри так-же:`},{heading:`protected-userxfieldkeys--array`,content:`DleData::$userXfieldKeys`},{heading:`private-api_key--string`,content:`**Краткое содержание**`},{heading:`private-api_key--string`,content:`Гостевой ключ с доступом на просмотр информации ресурса на сайте`},{heading:`private-api_key--string`,content:`**Тип:** Текст`},{heading:`private-asset_file--string`,content:`**Краткое содержание**`},{heading:`private-asset_file--string`,content:`Файл с информацией и хешами вспомогательных файлов`},{heading:`private-asset_file--string`,content:`**Тип:** Текст`},{heading:`private-assets_arr--array`,content:`**Краткое содержание**`},{heading:`private-assets_arr--array`,content:`Массив со всеми данными для обновления стилей и скриптов`},{heading:`private-assets_arr--array`,content:`**Тип:** Массив`},{heading:`private-assets_dir--string`,content:`**Краткое содержание**`},{heading:`private-assets_dir--string`,content:`Путь до всех вспомогательных файлов`},{heading:`private-assets_dir--string`,content:`**Тип:** Текст`},{heading:`private-cache_folder--string`,content:`**Краткое содержание**`},{heading:`private-cache_folder--string`,content:`Папка кеша`},{heading:`private-cache_folder--string`,content:`**Тип:** Текст`},{heading:`private-prefix--string`,content:`**Тип:** Текст или null`},{heading:`private-recource_id--int`,content:`**Тип:** Целое число или null`},{heading:`private-recource_id--int`,content:`**Подробности:**`},{heading:`private-update_url--string`,content:`**Тип:** Текст`},{heading:`краткое-содержание-1`,content:`Конструктор класса MhAjax.`},{heading:`описание-1`,content:`Инициализирует объект класса, содержащего вспомогательные методы для работы с DLE, загрузкой данных и проверкой
ресурсов.`},{heading:`краткое-содержание-2`,content:`Проверяет целостность файлов между локальным хранилищем и сервером разработчика.`},{heading:`описание-2`,content:`Если файлы отсутствуют или имеют различия в хеш-суммах, информация об этих расхождениях
возвращается в виде массива. При необходимости может быть выполнена перезапись
локального файла с данными о ресурсах.`},{heading:`смотри-так-же`,content:`\\DataManager::dirToArray()`},{heading:`смотри-так-же`,content:`\\AssetsChecker::prepare\\_assets()`},{heading:`свойства-2`,content:`Название`},{heading:`свойства-2`,content:`Тип`},{heading:`свойства-2`,content:`По умолчанию`},{heading:`свойства-2`,content:`**$rewrite**`},{heading:`свойства-2`,content:`bool`},{heading:`свойства-2`,content:`false`},{heading:`ошибки`,content:`Тип`},{heading:`ошибки`,content:`Описание`},{heading:`ошибки`,content:`\\JsonException`},{heading:`возвращает-1`,content:`Ассоциативный массив с информацией о проверке файлов:`},{heading:`возвращает-1`,content:"`on_server` (int): Количество файлов, находящихся на сервере разработчика."},{heading:`возвращает-1`,content:"`local` (int): Количество локальных файлов."},{heading:`возвращает-1`,content:"`missing_count` (int): Количество недостающих файлов."},{heading:`возвращает-1`,content:"`update_count` (int): Количество файлов, требующих обновления."},{heading:`возвращает-1`,content:"`missing` (array): Массив с данными о недостающих файлах."},{heading:`возвращает-1`,content:"`update` (array): Массив с данными о файлах, требующих обновления."},{heading:`краткое-содержание-3`,content:`Проверяет наличие и обновления ресурса, используя указанный или текущий идентификатор ресурса.`},{heading:`смотри-так-же-1`,content:`\\LogGenerator::generateLog()`},{heading:`свойства-3`,content:`Название`},{heading:`свойства-3`,content:`Тип`},{heading:`свойства-3`,content:`По умолчанию`},{heading:`свойства-3`,content:`**$res**`},{heading:`свойства-3`,content:`int\\|null`},{heading:`свойства-3`,content:`null`},{heading:`ошибки-1`,content:`Тип`},{heading:`ошибки-1`,content:`Описание`},{heading:`ошибки-1`,content:`\\JsonException\\|\\Throwable`},{heading:`ошибки-1`,content:`Исключение, связанное с ошибками в JSON-конверсии (может быть выброшено при выполнении Telegram-лога).`},{heading:`возвращает-2`,content:`Возвращает массив с данными об обновлении ресурса или список ошибок.`},{heading:`краткое-содержание-4`,content:`Очищает кеш указанного типа.`},{heading:`описание-3`,content:`Метод позволяет очистить кеш для переданного типа или полностью, если тип "all".
Использует внутренний метод CacheControl::clearCache для выполнения операции очистки.`},{heading:`смотри-так-же-2`,content:`\\CacheControl::clearCache()`},{heading:`свойства-4`,content:`Название`},{heading:`свойства-4`,content:`Тип`},{heading:`свойства-4`,content:`По умолчанию`},{heading:`свойства-4`,content:`**$type**`},{heading:`свойства-4`,content:`string`},{heading:`свойства-4`,content:`"all"`},{heading:`краткое-содержание-5`,content:`Получает кешированные данные для заданного типа и имени.`},{heading:`описание-4`,content:"Метод использует статический метод `CacheControl::getCache()`, чтобы получить данные из файловой системы."},{heading:`смотри-так-же-3`,content:`\\DataManager::toTranslit()`},{heading:`смотри-так-же-3`,content:`\\DataManager::normalizePath()`},{heading:`смотри-так-же-3`,content:`\\CacheControl::getCache()`},{heading:`свойства-5`,content:`Название`},{heading:`свойства-5`,content:`Тип`},{heading:`свойства-5`,content:`По умолчанию`},{heading:`свойства-5`,content:`**$type**`},{heading:`свойства-5`,content:`string`},{heading:`свойства-5`,content:`**$name**`},{heading:`свойства-5`,content:`string`},{heading:`ошибки-2`,content:`Тип`},{heading:`ошибки-2`,content:`Описание`},{heading:`ошибки-2`,content:`\\JsonException`},{heading:`возвращает-4`,content:"Возвращает массив декодированных данных, если файл кеша успешно найден и данные корректны,\nили `false`, если произошла ошибка (например, файл не найден или данные некорректны)."},{heading:`краткое-содержание-6`,content:"Возвращает массив с дополнительными полями, использованными в объекте, либо `false`, если данные отсутствуют."},{heading:`описание-5`,content:`Метод извлекает данные из базы данных для указанного объекта (поста или пользователя)
и преобразует строку с дополнительными полями в массив с ключами и их значениями.`},{heading:`смотри-так-же-4`,content:`\\DataLoader::load\\_data()`},{heading:`свойства-6`,content:`Название`},{heading:`свойства-6`,content:`Тип`},{heading:`свойства-6`,content:`По умолчанию`},{heading:`свойства-6`,content:`**$id**`},{heading:`свойства-6`,content:`int`},{heading:`свойства-6`,content:`**$type**`},{heading:`свойства-6`,content:`string`},{heading:`свойства-6`,content:`"post"`},{heading:`ошибки-3`,content:`Тип`},{heading:`ошибки-3`,content:`Описание`},{heading:`ошибки-3`,content:`\\JsonException`},{heading:`ошибки-3`,content:`Исключение выбрасывается, если произошла ошибка при работе с JSON.`},{heading:`возвращает-5`,content:"Возвращает массив дополнительных полей объекта в формате\nключ => значение, либо `false`, если данные отсутствуют."},{heading:`краткое-содержание-7`,content:`Возвращает список категорий в виде ассоциативного массива, где ключом является ID категории, а значением — её
название.`},{heading:`описание-6`,content:`Метод загружает данные из базы данных, используя метод \`load_data\`, и сортирует их по названию категории в
алфавитном порядке. В результате возвращается массив с ID категорий в качестве ключей и названиями категорий в
качестве значений.`},{heading:`смотри-так-же-5`,content:`\\DataLoader::load\\_data()`},{heading:`ошибки-4`,content:`Тип`},{heading:`ошибки-4`,content:`Описание`},{heading:`ошибки-4`,content:`\\JsonException`},{heading:`возвращает-8`,content:`Ассоциативный массив категорий, где ключ — ID категории, а значение — её название.`},{heading:`краткое-содержание-8`,content:`Возвращает URL панели администратора DLE.`},{heading:`описание-7`,content:"Использует глобальный массив настроек DLE `$config` для формирования полного URL.\nФормат возвращаемого значения: http(s)://your-site.com/admin\\_path."},{heading:`возвращает-9`,content:`Конечный URL панели администратора DLE.`},{heading:`краткое-содержание-9`,content:`Возвращает префикс для использования в SQL-запросах.`},{heading:`описание-8`,content:"Метод проверяет, установлен ли префикс. Если префикс не задан, он вызывает метод `setPrefix()`,\nчтобы установить его значение. Затем возвращает установившийся префикс."},{heading:`смотри-так-же-6`,content:`\\DataLoader::$prefix`},{heading:`смотри-так-же-6`,content:`\\DataLoader::setPrefix()`},{heading:`возвращает-10`,content:`Префикс, используемый для построения SQL-запросов.`},{heading:`краткое-содержание-10`,content:`Получает данные пользователя по ID или имени пользователя.`},{heading:`описание-9`,content:"Если ни идентификатор пользователя, ни имя пользователя не переданы, метод возвращает `false`.\nВ противном случае выполняется поиск данных в таблице `users` с использованием указанного критерия."},{heading:`смотри-так-же-7`,content:`\\DataLoader::load\\_data()`},{heading:`свойства-7`,content:`Название`},{heading:`свойства-7`,content:`Тип`},{heading:`свойства-7`,content:`По умолчанию`},{heading:`свойства-7`,content:`**$id**`},{heading:`свойства-7`,content:`int\\|null`},{heading:`свойства-7`,content:`null`},{heading:`свойства-7`,content:`**$uname**`},{heading:`свойства-7`,content:`string\\|null`},{heading:`свойства-7`,content:`null`},{heading:`ошибки-5`,content:`Тип`},{heading:`ошибки-5`,content:`Описание`},{heading:`ошибки-5`,content:`\\JsonException`},{heading:`возвращает-13`,content:"Ассоциативный массив с данными о пользователе, если пользователь найден.\nВозвращает `false`, если пользователь не найден или если критерии поиска не заданы."},{heading:`краткое-содержание-11`,content:`Получает список групп пользователей в формате массива с идентификаторами и именами групп.`},{heading:`описание-10`,content:'Метод обращается к функции `load_data` для загрузки данных о группах пользователей\nиз таблицы "usergroups" с выборкой полей `id` и `group_name`,\nзатем преобразует результат в ассоциативный массив с ключами — идентификаторами групп,\nи значениями — именами групп, отсортированными по названию группы в алфавитном порядке (ASC).'},{heading:`смотри-так-же-8`,content:`\\DataLoader::load\\_data()`},{heading:`ошибки-6`,content:`Тип`},{heading:`ошибки-6`,content:`Описание`},{heading:`ошибки-6`,content:`\\JsonException`},{heading:`возвращает-14`,content:`Ассоциативный массив, где ключ — идентификатор группы, значение — имя группы.`},{heading:`краткое-содержание-12`,content:`Возвращает список пользователей из базы данных.`},{heading:`описание-11`,content:`Метод загружает данные о пользователях, используя метод \`load_data\`,
и возвращает массив, где ключами являются идентификаторы пользователей,
а значениями — их имена, отсортированные в алфавитном порядке.`},{heading:`смотри-так-же-9`,content:`\\DataLoader::load\\_data()`},{heading:`ошибки-7`,content:`Тип`},{heading:`ошибки-7`,content:`Описание`},{heading:`ошибки-7`,content:`\\JsonException`},{heading:`возвращает-15`,content:`Ассоциативный массив пользователей, где ключи — идентификаторы пользователей (user\\_id), а значения
— их имена.`},{heading:`краткое-содержание-13`,content:`Возвращает информацию о дополнительном поле (xfield) на основании его имени и типа.`},{heading:`смотри-так-же-10`,content:`\\DleData::loadXfields()`},{heading:`смотри-так-же-10`,content:`\\CacheControl::getCache()`},{heading:`свойства-8`,content:`Название`},{heading:`свойства-8`,content:`Тип`},{heading:`свойства-8`,content:`По умолчанию`},{heading:`свойства-8`,content:`**$name**`},{heading:`свойства-8`,content:`string`},{heading:`свойства-8`,content:`**$type**`},{heading:`свойства-8`,content:`string`},{heading:`свойства-8`,content:`"post"`},{heading:`возвращает-16`,content:`Возвращает информацию о поле в виде ассоциативного массива, либо null,
если поле не найдено.`},{heading:`краткое-содержание-14`,content:`Метод загружает данные из базы данных с использованием механизма кеширования.`},{heading:`описание-12`,content:`Если данные уже закешированы, то они возвращаются из кеша, иначе выполняется запрос
к базе данных, формируется кеш и результат сохраняется на диск.`},{heading:`смотри-так-же-11`,content:`\\DataManager::getDb()`},{heading:`смотри-так-же-11`,content:`\\DataManager::nameArgs()`},{heading:`смотри-так-же-11`,content:`\\DataManager::getComparer()`},{heading:`смотри-так-же-11`,content:`\\DataManager::getConfig()`},{heading:`свойства-9`,content:`Название`},{heading:`свойства-9`,content:`Тип`},{heading:`свойства-9`,content:`По умолчанию`},{heading:`свойства-9`,content:`**$name**`},{heading:`свойства-9`,content:`string`},{heading:`свойства-9`,content:`**$\\_vars**`},{heading:`свойства-9`,content:`mixed`},{heading:`ошибки-8`,content:`Тип`},{heading:`ошибки-8`,content:`Описание`},{heading:`ошибки-8`,content:`\\JsonException`},{heading:`ошибки-8`,content:`В случае JSON-ошибок при работе с кешем.`},{heading:`возвращает-17`,content:`Результат выборки из базы данных, либо из кеша.`},{heading:`краткое-содержание-15`,content:`Загружает дополнительные поля для новостей или профилей пользователей.`},{heading:`описание-13`,content:`Метод извлекает данные из кэша, либо, при его отсутствии, читает данные из файла конфигурации.
Возвращает ассоциативный массив, где ключами являются названия дополнительных полей, а значениями - их
параметры.
Данные загружаются в зависимости от значения параметра \`$type\`:`},{heading:`описание-13`,content:'`"post"`: данные загружаются из файла `xfields.txt`.'},{heading:`описание-13`,content:'`"user"`: данные загружаются из файла `xprofile.txt`.\nКлючи массива, формируемого из файла конфигурации, соответствуют предопределённым ключам, указанным\nв свойствах `userXfieldKeys` или `postXfieldKeys`.'},{heading:`смотри-так-же-12`,content:`\\CacheControl::getCache()`},{heading:`смотри-так-же-12`,content:`\\CacheControl::setCache()`},{heading:`свойства-10`,content:`Название`},{heading:`свойства-10`,content:`Тип`},{heading:`свойства-10`,content:`По умолчанию`},{heading:`свойства-10`,content:`**$type**`},{heading:`свойства-10`,content:`string`},{heading:`свойства-10`,content:`"post"`},{heading:`возвращает-18`,content:"Ассоциативный массив дополнительных полей, где ключ - название поля, значение - его\nпараметры. Возвращает `false` в случае невозможности прочитать файл."},{heading:`краткое-содержание-16`,content:`Выполняет парсинг вспомогательных файлов для управления ассетами.`},{heading:`описание-14`,content:`Если файл с хешами ассетов существует, то парсинг выполняется только при принудительном запуске.
В случае отсутствия указанного файла производится полное сканирование ассетов.`},{heading:`смотри-так-же-13`,content:`\\AssetsChecker::parse\\_assets()`},{heading:`свойства-11`,content:`Название`},{heading:`свойства-11`,content:`Тип`},{heading:`свойства-11`,content:`По умолчанию`},{heading:`свойства-11`,content:`**$parse**`},{heading:`свойства-11`,content:`bool`},{heading:`свойства-11`,content:`false`},{heading:`ошибки-9`,content:`Тип`},{heading:`ошибки-9`,content:`Описание`},{heading:`ошибки-9`,content:`\\JsonException\\|\\Throwable`},{heading:`ошибки-9`,content:`В случае ошибок в процессах обработки JSON-файлов.`},{heading:`краткое-содержание-17`,content:`Сохраняет файл на сервер и возвращает информацию о нём или false в случае неуспеха.`},{heading:`смотри-так-же-14`,content:`\\DataManager::createDir()`},{heading:`смотри-так-же-14`,content:`\\LogGenerator::generateLog()`},{heading:`смотри-так-же-14`,content:`\\AssetsChecker::fetchFileContent()`},{heading:`смотри-так-же-14`,content:`\\AssetsChecker::saveFile()`},{heading:`смотри-так-же-14`,content:`\\AssetsChecker::generateFileMetadata()`},{heading:`свойства-12`,content:`Название`},{heading:`свойства-12`,content:`Тип`},{heading:`свойства-12`,content:`По умолчанию`},{heading:`свойства-12`,content:`**$data**`},{heading:`свойства-12`,content:`array`},{heading:`свойства-12`,content:`**$file**`},{heading:`свойства-12`,content:`string`},{heading:`ошибки-10`,content:`Тип`},{heading:`ошибки-10`,content:`Описание`},{heading:`ошибки-10`,content:`\\JsonException\\|\\Throwable`},{heading:`ошибки-10`,content:`Генерирует исключение, если возникает ошибка обработки JSON.`},{heading:`возвращает-20`,content:`Возвращает массив с информацией о сохранённом файле или false, если файл не удалось сохранить.
Массив содержит следующие ключи:`},{heading:`возвращает-20`,content:`"realpath" (string): Полный реальный путь до файла.`},{heading:`возвращает-20`,content:`"dirname" (string): Директория файла.`},{heading:`возвращает-20`,content:`"basename" (string): Имя файла с расширением.`},{heading:`возвращает-20`,content:`"filename" (string): Имя файла без расширения.`},{heading:`возвращает-20`,content:`"extension" (string): Расширение файла.`},{heading:`возвращает-20`,content:`"mime" (string): MIME-тип файла.`},{heading:`возвращает-20`,content:`"encoding" (string): Тип кодирования файла.`},{heading:`возвращает-20`,content:`"size" (int): Размер файла в байтах.`},{heading:`возвращает-20`,content:`"size\\_string" (string): Размер файла в человекочитаемом формате (например, "1.5MB").`},{heading:`возвращает-20`,content:`"atime" (int): Время последнего доступа к файлу (в метках времени Unix).`},{heading:`возвращает-20`,content:`"mtime" (int): Время последней модификации файла (в метках времени Unix).`},{heading:`возвращает-20`,content:`"permission" (string): Права доступа на файл (в формате UNIX-подобной строки, например, "0755").`},{heading:`свойства-13`,content:`Название`},{heading:`свойства-13`,content:`Тип`},{heading:`свойства-13`,content:`По умолчанию`},{heading:`свойства-13`,content:`**$api\\_key**`},{heading:`свойства-13`,content:`string`},{heading:`свойства-14`,content:`Название`},{heading:`свойства-14`,content:`Тип`},{heading:`свойства-14`,content:`По умолчанию`},{heading:`свойства-14`,content:`**$cache\\_folder**`},{heading:`свойства-14`,content:`string`},{heading:`краткое-содержание-18`,content:`Устанавливает префикс для использования в загрузке данных.`},{heading:`описание-15`,content:'Если переданное имя соответствует значениям "users" или "usergroup",\nто префикс устанавливается в значение константы `USERPREFIX`.\nВ противном случае используется значение по умолчанию из константы `PREFIX`.'},{heading:`свойства-15`,content:`Название`},{heading:`свойства-15`,content:`Тип`},{heading:`свойства-15`,content:`По умолчанию`},{heading:`свойства-15`,content:`**$name**`},{heading:`свойства-15`,content:`string\\|null`},{heading:`свойства-15`,content:`null`},{heading:`свойства-16`,content:`Название`},{heading:`свойства-16`,content:`Тип`},{heading:`свойства-16`,content:`По умолчанию`},{heading:`свойства-16`,content:`**$recource\\_id**`},{heading:`свойства-16`,content:`int`},{heading:`свойства-17`,content:`Название`},{heading:`свойства-17`,content:`Тип`},{heading:`свойства-17`,content:`По умолчанию`},{heading:`свойства-17`,content:`**$update\\_url**`},{heading:`свойства-17`,content:`string`},{heading:`краткое-содержание-19`,content:`Получает содержимое файла по указанным ссылкам.`},{heading:`описание-16`,content:"Метод пытается загрузить содержимое файла с основной (`link`) и,\nпри необходимости, с альтернативной (`alt`) ссылки, если содержимое\nпо основной ссылке пустое."},{heading:`свойства-18`,content:`Название`},{heading:`свойства-18`,content:`Тип`},{heading:`свойства-18`,content:`По умолчанию`},{heading:`свойства-18`,content:`**$data**`},{heading:`свойства-18`,content:`array`},{heading:`возвращает-26`,content:`Возвращает содержимое файла, либо null, если
не удалось загрузить файл.`},{heading:`краткое-содержание-20`,content:`Генерирует метаданные для указанного файла.`},{heading:`свойства-19`,content:`Название`},{heading:`свойства-19`,content:`Тип`},{heading:`свойства-19`,content:`По умолчанию`},{heading:`свойства-19`,content:`**$file\\_path**`},{heading:`свойства-19`,content:`string`},{heading:`ошибки-11`,content:`Тип`},{heading:`ошибки-11`,content:`Описание`},{heading:`ошибки-11`,content:`\\RuntimeException`},{heading:`ошибки-11`,content:`Если файл не существует или недоступен.`},{heading:`возвращает-27`,content:`Ассоциативный массив, содержащий следующую информацию о файле:`},{heading:`возвращает-27`,content:`"realpath" (string|null): Абсолютный путь до файла.`},{heading:`возвращает-27`,content:`"dirname" (string): Путь к директории, содержащей файл.`},{heading:`возвращает-27`,content:`"basename" (string): Имя файла с расширением.`},{heading:`возвращает-27`,content:`"filename" (string): Имя файла без расширения.`},{heading:`возвращает-27`,content:`"extension" (string|null): Расширение файла.`},{heading:`возвращает-27`,content:`"mime" (string): MIME-тип файла.`},{heading:`возвращает-27`,content:`"encoding" (string): Кодировка файла.`},{heading:`возвращает-27`,content:`"size" (int): Размер файла в байтах.`},{heading:`возвращает-27`,content:`"size\\_string" (string): Читаемое представление размера файла (например, "10.5 KB").`},{heading:`возвращает-27`,content:`"atime" (int): Временная метка последнего доступа к файлу.`},{heading:`возвращает-27`,content:`"mtime" (int): Временная метка последней модификации файла.`},{heading:`возвращает-27`,content:`"permission" (string): Права доступа к файлу (например, "0755").`},{heading:`краткое-содержание-21`,content:`Парсит данные о ресурсах (assets), проверяет наличие отсутствующих или обновленных,
и обновляет информацию. Также сохраняет актуальные данные в локальный файл ресурсов.`},{heading:`описание-17`,content:`Процесс включает следующие этапы:`},{heading:`описание-17`,content:"Получение списка локальных файлов и их данных через метод `prepare_assets`."},{heading:`описание-17`,content:`Получение данных об удаленных ресурсах через URL.`},{heading:`описание-17`,content:`Сравнение данных о хэшах локальных и удаленных ресурсов.`},{heading:`описание-17`,content:`Сохранение недостающих или обновленных ресурсов в локальное хранилище.`},{heading:`описание-17`,content:`Запись актуализированных данных в локальный JSON-файл.`},{heading:`смотри-так-же-15`,content:`\\AssetsChecker::save\\_asset()`},{heading:`смотри-так-же-15`,content:`\\AssetsChecker::prepare\\_assets()`},{heading:`смотри-так-же-15`,content:`\\DataManager::dirToArray()`},{heading:`ошибки-12`,content:`Тип`},{heading:`ошибки-12`,content:`Описание`},{heading:`ошибки-12`,content:`\\JsonException\\|\\Throwable`},{heading:`ошибки-12`,content:`Исключение выбрасывается в случае ошибки при работе с JSON.`},{heading:`краткое-содержание-22`,content:"Подготавливает данные о файлах, расположенных на локальном сервере, и сохраняет их в массив `assets_arr`."},{heading:`описание-18`,content:"Метод рекурсивно обрабатывает массив с файлами и создает запись для каждого файла в конечном массиве `assets_arr`,\nсодержащую путь, имя файла и его хэш."},{heading:`свойства-20`,content:`Название`},{heading:`свойства-20`,content:`Тип`},{heading:`свойства-20`,content:`По умолчанию`},{heading:`свойства-20`,content:`**$arr**`},{heading:`свойства-20`,content:`array`},{heading:`свойства-20`,content:`**$dir**`},{heading:`свойства-20`,content:`string`},{heading:`свойства-20`,content:`**DIR**`},{heading:`краткое-содержание-23`,content:`Сохраняет содержимое в файл и логирует сообщение при возникновении ошибки.`},{heading:`описание-19`,content:`Метод выполняет запись переданного содержимого в указанный путь файла,
проверяет, доступен ли файл для записи, и логирует ошибку в случае неудачи.`},{heading:`смотри-так-же-16`,content:`\\LogGenerator::generateLog()`},{heading:`свойства-21`,content:`Название`},{heading:`свойства-21`,content:`Тип`},{heading:`свойства-21`,content:`По умолчанию`},{heading:`свойства-21`,content:`**$file\\_path**`},{heading:`свойства-21`,content:`string`},{heading:`свойства-21`,content:`**$content**`},{heading:`свойства-21`,content:`string`},{heading:`свойства-21`,content:`**$file**`},{heading:`свойства-21`,content:`string`},{heading:`ошибки-13`,content:`Тип`},{heading:`ошибки-13`,content:`Описание`},{heading:`ошибки-13`,content:`\\Throwable`},{heading:`возвращает-30`,content:`Возвращает true, если файл успешно сохранён, или false — в случае ошибки.`},{heading:`краткое-содержание-24`,content:`Сохраняет данные в кеш.`},{heading:`описание-20`,content:`Метод записывает данные в кеш, используя указанный тип и имя.
Для сохранения данных вызывается метод \`CacheControl::setCache\`, который
обрабатывает директорию и имя файла, записывает данные в формате JSON
и устанавливает необходимые права доступа к файлу.`},{heading:`смотри-так-же-17`,content:`\\CacheControl::setCache()`},{heading:`свойства-22`,content:`Название`},{heading:`свойства-22`,content:`Тип`},{heading:`свойства-22`,content:`По умолчанию`},{heading:`свойства-22`,content:`**$type**`},{heading:`свойства-22`,content:`string`},{heading:`свойства-22`,content:`**$name**`},{heading:`свойства-22`,content:`string`},{heading:`свойства-22`,content:`**$data**`},{heading:`свойства-22`,content:`mixed`},{heading:`ошибки-14`,content:`Тип`},{heading:`ошибки-14`,content:`Описание`},{heading:`ошибки-14`,content:`\\JsonException`}],headings:[{id:`краткое-содержание`,content:`Краткое содержание:`},{id:`описание`,content:`Описание:`},{id:`свойства`,content:`Свойства`},{id:`методы`,content:`Методы`},{id:`подробности`,content:`Подробности`},{id:`свойства-1`,content:`Свойства`},{id:`protected-postxfieldkeys--array`,content:`protected $postXfieldKeys : array`},{id:`protected-userxfieldkeys--array`,content:`protected $userXfieldKeys : array`},{id:`private-api_key--string`,content:`private $api_key : string`},{id:`private-asset_file--string`,content:`private $asset_file : string`},{id:`private-assets_arr--array`,content:`private $assets_arr : array`},{id:`private-assets_dir--string`,content:`private $assets_dir : string`},{id:`private-cache_folder--string`,content:`private $cache_folder : string`},{id:`private-prefix--string`,content:`private $prefix : ?string`},{id:`private-recource_id--int`,content:`private $recource_id : ?int`},{id:`private-update_url--string`,content:`private $update_url : string`},{id:`методы-1`,content:`Методы`},{id:`__construct`,content:`\\__construct`},{id:`краткое-содержание-1`,content:`Краткое содержание`},{id:`описание-1`,content:`Описание`},{id:`возвращает`,content:`Возвращает:`},{id:`checkassets`,content:`checkAssets`},{id:`краткое-содержание-2`,content:`Краткое содержание`},{id:`описание-2`,content:`Описание`},{id:`смотри-так-же`,content:`Смотри так-же:`},{id:`свойства-2`,content:`Свойства:`},{id:`ошибки`,content:`Ошибки:`},{id:`возвращает-1`,content:`Возвращает:`},{id:`checkupdate`,content:`checkUpdate`},{id:`краткое-содержание-3`,content:`Краткое содержание`},{id:`смотри-так-же-1`,content:`Смотри так-же:`},{id:`свойства-3`,content:`Свойства:`},{id:`ошибки-1`,content:`Ошибки:`},{id:`возвращает-2`,content:`Возвращает:`},{id:`clear_cache`,content:`clear_cache`},{id:`краткое-содержание-4`,content:`Краткое содержание`},{id:`описание-3`,content:`Описание`},{id:`смотри-так-же-2`,content:`Смотри так-же:`},{id:`свойства-4`,content:`Свойства:`},{id:`возвращает-3`,content:`Возвращает:`},{id:`get_cache`,content:`get_cache`},{id:`краткое-содержание-5`,content:`Краткое содержание`},{id:`описание-4`,content:`Описание`},{id:`смотри-так-же-3`,content:`Смотри так-же:`},{id:`свойства-5`,content:`Свойства:`},{id:`ошибки-2`,content:`Ошибки:`},{id:`возвращает-4`,content:`Возвращает:`},{id:`get_used_xfields`,content:`get_used_xfields`},{id:`краткое-содержание-6`,content:`Краткое содержание`},{id:`описание-5`,content:`Описание`},{id:`смотри-так-же-4`,content:`Смотри так-же:`},{id:`свойства-6`,content:`Свойства:`},{id:`ошибки-3`,content:`Ошибки:`},{id:`возвращает-5`,content:`Возвращает:`},{id:`getapikey`,content:`getApiKey`},{id:`возвращает-6`,content:`Возвращает:`},{id:`getcachefolder`,content:`getCacheFolder`},{id:`возвращает-7`,content:`Возвращает:`},{id:`getcats`,content:`getCats`},{id:`краткое-содержание-7`,content:`Краткое содержание`},{id:`описание-6`,content:`Описание`},{id:`смотри-так-же-5`,content:`Смотри так-же:`},{id:`ошибки-4`,content:`Ошибки:`},{id:`возвращает-8`,content:`Возвращает:`},{id:`getdleurl`,content:`getDleUrl`},{id:`краткое-содержание-8`,content:`Краткое содержание`},{id:`описание-7`,content:`Описание`},{id:`возвращает-9`,content:`Возвращает:`},{id:`getprefix`,content:`getPrefix`},{id:`краткое-содержание-9`,content:`Краткое содержание`},{id:`описание-8`,content:`Описание`},{id:`смотри-так-же-6`,content:`Смотри так-же:`},{id:`возвращает-10`,content:`Возвращает:`},{id:`getrecourceid`,content:`getRecourceId`},{id:`возвращает-11`,content:`Возвращает:`},{id:`getupdateurl`,content:`getUpdateUrl`},{id:`возвращает-12`,content:`Возвращает:`},{id:`getuser`,content:`getUser`},{id:`краткое-содержание-10`,content:`Краткое содержание`},{id:`описание-9`,content:`Описание`},{id:`смотри-так-же-7`,content:`Смотри так-же:`},{id:`свойства-7`,content:`Свойства:`},{id:`ошибки-5`,content:`Ошибки:`},{id:`возвращает-13`,content:`Возвращает:`},{id:`getusergroups`,content:`getUserGroups`},{id:`краткое-содержание-11`,content:`Краткое содержание`},{id:`описание-10`,content:`Описание`},{id:`смотри-так-же-8`,content:`Смотри так-же:`},{id:`ошибки-6`,content:`Ошибки:`},{id:`возвращает-14`,content:`Возвращает:`},{id:`getusers`,content:`getUsers`},{id:`краткое-содержание-12`,content:`Краткое содержание`},{id:`описание-11`,content:`Описание`},{id:`смотри-так-же-9`,content:`Смотри так-же:`},{id:`ошибки-7`,content:`Ошибки:`},{id:`возвращает-15`,content:`Возвращает:`},{id:`getxfieldinfo`,content:`getXfieldInfo`},{id:`краткое-содержание-13`,content:`Краткое содержание`},{id:`смотри-так-же-10`,content:`Смотри так-же:`},{id:`свойства-8`,content:`Свойства:`},{id:`возвращает-16`,content:`Возвращает:`},{id:`load_data`,content:`load_data`},{id:`краткое-содержание-14`,content:`Краткое содержание`},{id:`описание-12`,content:`Описание`},{id:`смотри-так-же-11`,content:`Смотри так-же:`},{id:`свойства-9`,content:`Свойства:`},{id:`ошибки-8`,content:`Ошибки:`},{id:`возвращает-17`,content:`Возвращает:`},{id:`loadxfields`,content:`loadXfields`},{id:`краткое-содержание-15`,content:`Краткое содержание`},{id:`описание-13`,content:`Описание`},{id:`смотри-так-же-12`,content:`Смотри так-же:`},{id:`свойства-10`,content:`Свойства:`},{id:`возвращает-18`,content:`Возвращает:`},{id:`parseassets`,content:`parseAssets`},{id:`краткое-содержание-16`,content:`Краткое содержание`},{id:`описание-14`,content:`Описание`},{id:`смотри-так-же-13`,content:`Смотри так-же:`},{id:`свойства-11`,content:`Свойства:`},{id:`ошибки-9`,content:`Ошибки:`},{id:`возвращает-19`,content:`Возвращает:`},{id:`save_asset`,content:`save_asset`},{id:`краткое-содержание-17`,content:`Краткое содержание`},{id:`смотри-так-же-14`,content:`Смотри так-же:`},{id:`свойства-12`,content:`Свойства:`},{id:`ошибки-10`,content:`Ошибки:`},{id:`возвращает-20`,content:`Возвращает:`},{id:`setapikey`,content:`setApiKey`},{id:`свойства-13`,content:`Свойства:`},{id:`возвращает-21`,content:`Возвращает:`},{id:`setcachefolder`,content:`setCacheFolder`},{id:`свойства-14`,content:`Свойства:`},{id:`возвращает-22`,content:`Возвращает:`},{id:`setprefix`,content:`setPrefix`},{id:`краткое-содержание-18`,content:`Краткое содержание`},{id:`описание-15`,content:`Описание`},{id:`свойства-15`,content:`Свойства:`},{id:`возвращает-23`,content:`Возвращает:`},{id:`setrecourceid`,content:`setRecourceId`},{id:`свойства-16`,content:`Свойства:`},{id:`возвращает-24`,content:`Возвращает:`},{id:`setupdateurl`,content:`setUpdateUrl`},{id:`свойства-17`,content:`Свойства:`},{id:`возвращает-25`,content:`Возвращает:`},{id:`fetchfilecontent`,content:`fetchFileContent`},{id:`краткое-содержание-19`,content:`Краткое содержание`},{id:`описание-16`,content:`Описание`},{id:`свойства-18`,content:`Свойства:`},{id:`возвращает-26`,content:`Возвращает:`},{id:`generatefilemetadata`,content:`generateFileMetadata`},{id:`краткое-содержание-20`,content:`Краткое содержание`},{id:`свойства-19`,content:`Свойства:`},{id:`ошибки-11`,content:`Ошибки:`},{id:`возвращает-27`,content:`Возвращает:`},{id:`parse_assets`,content:`parse_assets`},{id:`краткое-содержание-21`,content:`Краткое содержание`},{id:`описание-17`,content:`Описание`},{id:`смотри-так-же-15`,content:`Смотри так-же:`},{id:`ошибки-12`,content:`Ошибки:`},{id:`возвращает-28`,content:`Возвращает:`},{id:`prepare_assets`,content:`prepare_assets`},{id:`краткое-содержание-22`,content:`Краткое содержание`},{id:`описание-18`,content:`Описание`},{id:`свойства-20`,content:`Свойства:`},{id:`возвращает-29`,content:`Возвращает:`},{id:`savefile`,content:`saveFile`},{id:`краткое-содержание-23`,content:`Краткое содержание`},{id:`описание-19`,content:`Описание`},{id:`смотри-так-же-16`,content:`Смотри так-же:`},{id:`свойства-21`,content:`Свойства:`},{id:`ошибки-13`,content:`Ошибки:`},{id:`возвращает-30`,content:`Возвращает:`},{id:`set_cache`,content:`set_cache`},{id:`краткое-содержание-24`,content:`Краткое содержание`},{id:`описание-20`,content:`Описание`},{id:`смотри-так-же-17`,content:`Смотри так-же:`},{id:`свойства-22`,content:`Свойства:`},{id:`ошибки-14`,content:`Ошибки:`},{id:`возвращает-31`,content:`Возвращает:`}]},s=[{depth:2,url:`#краткое-содержание`,title:(0,n.jsx)(n.Fragment,{children:`Краткое содержание:`})},{depth:2,url:`#описание`,title:(0,n.jsx)(n.Fragment,{children:`Описание:`})},{depth:3,url:`#свойства`,title:(0,n.jsx)(n.Fragment,{children:`Свойства`})},{depth:3,url:`#методы`,title:(0,n.jsx)(n.Fragment,{children:`Методы`})},{depth:3,url:`#подробности`,title:(0,n.jsx)(n.Fragment,{children:`Подробности`})},{depth:2,url:`#свойства-1`,title:(0,n.jsx)(n.Fragment,{children:`Свойства`})},{depth:4,url:`#protected-postxfieldkeys--array`,title:(0,n.jsx)(n.Fragment,{children:`protected $postXfieldKeys : array`})},{depth:4,url:`#protected-userxfieldkeys--array`,title:(0,n.jsx)(n.Fragment,{children:`protected $userXfieldKeys : array`})},{depth:4,url:`#private-api_key--string`,title:(0,n.jsx)(n.Fragment,{children:`private $api_key : string`})},{depth:4,url:`#private-asset_file--string`,title:(0,n.jsx)(n.Fragment,{children:`private $asset_file : string`})},{depth:4,url:`#private-assets_arr--array`,title:(0,n.jsx)(n.Fragment,{children:`private $assets_arr : array`})},{depth:4,url:`#private-assets_dir--string`,title:(0,n.jsx)(n.Fragment,{children:`private $assets_dir : string`})},{depth:4,url:`#private-cache_folder--string`,title:(0,n.jsx)(n.Fragment,{children:`private $cache_folder : string`})},{depth:4,url:`#private-prefix--string`,title:(0,n.jsx)(n.Fragment,{children:`private $prefix : ?string`})},{depth:4,url:`#private-recource_id--int`,title:(0,n.jsx)(n.Fragment,{children:`private $recource_id : ?int`})},{depth:4,url:`#private-update_url--string`,title:(0,n.jsx)(n.Fragment,{children:`private $update_url : string`})},{depth:2,url:`#методы-1`,title:(0,n.jsx)(n.Fragment,{children:`Методы`})},{depth:3,url:`#__construct`,title:(0,n.jsx)(n.Fragment,{children:`__construct`})},{depth:5,url:`#краткое-содержание-1`,title:(0,n.jsx)(n.Fragment,{children:`Краткое содержание`})},{depth:5,url:`#описание-1`,title:(0,n.jsx)(n.Fragment,{children:`Описание`})},{depth:5,url:`#возвращает`,title:(0,n.jsx)(n.Fragment,{children:`Возвращает:`})},{depth:3,url:`#checkassets`,title:(0,n.jsx)(n.Fragment,{children:`checkAssets`})},{depth:5,url:`#краткое-содержание-2`,title:(0,n.jsx)(n.Fragment,{children:`Краткое содержание`})},{depth:5,url:`#описание-2`,title:(0,n.jsx)(n.Fragment,{children:`Описание`})},{depth:5,url:`#смотри-так-же`,title:(0,n.jsx)(n.Fragment,{children:`Смотри так-же:`})},{depth:5,url:`#свойства-2`,title:(0,n.jsx)(n.Fragment,{children:`Свойства:`})},{depth:5,url:`#ошибки`,title:(0,n.jsx)(n.Fragment,{children:`Ошибки:`})},{depth:5,url:`#возвращает-1`,title:(0,n.jsx)(n.Fragment,{children:`Возвращает:`})},{depth:3,url:`#checkupdate`,title:(0,n.jsx)(n.Fragment,{children:`checkUpdate`})},{depth:5,url:`#краткое-содержание-3`,title:(0,n.jsx)(n.Fragment,{children:`Краткое содержание`})},{depth:5,url:`#смотри-так-же-1`,title:(0,n.jsx)(n.Fragment,{children:`Смотри так-же:`})},{depth:5,url:`#свойства-3`,title:(0,n.jsx)(n.Fragment,{children:`Свойства:`})},{depth:5,url:`#ошибки-1`,title:(0,n.jsx)(n.Fragment,{children:`Ошибки:`})},{depth:5,url:`#возвращает-2`,title:(0,n.jsx)(n.Fragment,{children:`Возвращает:`})},{depth:3,url:`#clear_cache`,title:(0,n.jsx)(n.Fragment,{children:`clear_cache`})},{depth:5,url:`#краткое-содержание-4`,title:(0,n.jsx)(n.Fragment,{children:`Краткое содержание`})},{depth:5,url:`#описание-3`,title:(0,n.jsx)(n.Fragment,{children:`Описание`})},{depth:5,url:`#смотри-так-же-2`,title:(0,n.jsx)(n.Fragment,{children:`Смотри так-же:`})},{depth:5,url:`#свойства-4`,title:(0,n.jsx)(n.Fragment,{children:`Свойства:`})},{depth:5,url:`#возвращает-3`,title:(0,n.jsx)(n.Fragment,{children:`Возвращает:`})},{depth:3,url:`#get_cache`,title:(0,n.jsx)(n.Fragment,{children:`get_cache`})},{depth:5,url:`#краткое-содержание-5`,title:(0,n.jsx)(n.Fragment,{children:`Краткое содержание`})},{depth:5,url:`#описание-4`,title:(0,n.jsx)(n.Fragment,{children:`Описание`})},{depth:5,url:`#смотри-так-же-3`,title:(0,n.jsx)(n.Fragment,{children:`Смотри так-же:`})},{depth:5,url:`#свойства-5`,title:(0,n.jsx)(n.Fragment,{children:`Свойства:`})},{depth:5,url:`#ошибки-2`,title:(0,n.jsx)(n.Fragment,{children:`Ошибки:`})},{depth:5,url:`#возвращает-4`,title:(0,n.jsx)(n.Fragment,{children:`Возвращает:`})},{depth:3,url:`#get_used_xfields`,title:(0,n.jsx)(n.Fragment,{children:`get_used_xfields`})},{depth:5,url:`#краткое-содержание-6`,title:(0,n.jsx)(n.Fragment,{children:`Краткое содержание`})},{depth:5,url:`#описание-5`,title:(0,n.jsx)(n.Fragment,{children:`Описание`})},{depth:5,url:`#смотри-так-же-4`,title:(0,n.jsx)(n.Fragment,{children:`Смотри так-же:`})},{depth:5,url:`#свойства-6`,title:(0,n.jsx)(n.Fragment,{children:`Свойства:`})},{depth:5,url:`#ошибки-3`,title:(0,n.jsx)(n.Fragment,{children:`Ошибки:`})},{depth:5,url:`#возвращает-5`,title:(0,n.jsx)(n.Fragment,{children:`Возвращает:`})},{depth:3,url:`#getapikey`,title:(0,n.jsx)(n.Fragment,{children:`getApiKey`})},{depth:5,url:`#возвращает-6`,title:(0,n.jsx)(n.Fragment,{children:`Возвращает:`})},{depth:3,url:`#getcachefolder`,title:(0,n.jsx)(n.Fragment,{children:`getCacheFolder`})},{depth:5,url:`#возвращает-7`,title:(0,n.jsx)(n.Fragment,{children:`Возвращает:`})},{depth:3,url:`#getcats`,title:(0,n.jsx)(n.Fragment,{children:`getCats`})},{depth:5,url:`#краткое-содержание-7`,title:(0,n.jsx)(n.Fragment,{children:`Краткое содержание`})},{depth:5,url:`#описание-6`,title:(0,n.jsx)(n.Fragment,{children:`Описание`})},{depth:5,url:`#смотри-так-же-5`,title:(0,n.jsx)(n.Fragment,{children:`Смотри так-же:`})},{depth:5,url:`#ошибки-4`,title:(0,n.jsx)(n.Fragment,{children:`Ошибки:`})},{depth:5,url:`#возвращает-8`,title:(0,n.jsx)(n.Fragment,{children:`Возвращает:`})},{depth:3,url:`#getdleurl`,title:(0,n.jsx)(n.Fragment,{children:`getDleUrl`})},{depth:5,url:`#краткое-содержание-8`,title:(0,n.jsx)(n.Fragment,{children:`Краткое содержание`})},{depth:5,url:`#описание-7`,title:(0,n.jsx)(n.Fragment,{children:`Описание`})},{depth:5,url:`#возвращает-9`,title:(0,n.jsx)(n.Fragment,{children:`Возвращает:`})},{depth:3,url:`#getprefix`,title:(0,n.jsx)(n.Fragment,{children:`getPrefix`})},{depth:5,url:`#краткое-содержание-9`,title:(0,n.jsx)(n.Fragment,{children:`Краткое содержание`})},{depth:5,url:`#описание-8`,title:(0,n.jsx)(n.Fragment,{children:`Описание`})},{depth:5,url:`#смотри-так-же-6`,title:(0,n.jsx)(n.Fragment,{children:`Смотри так-же:`})},{depth:5,url:`#возвращает-10`,title:(0,n.jsx)(n.Fragment,{children:`Возвращает:`})},{depth:3,url:`#getrecourceid`,title:(0,n.jsx)(n.Fragment,{children:`getRecourceId`})},{depth:5,url:`#возвращает-11`,title:(0,n.jsx)(n.Fragment,{children:`Возвращает:`})},{depth:3,url:`#getupdateurl`,title:(0,n.jsx)(n.Fragment,{children:`getUpdateUrl`})},{depth:5,url:`#возвращает-12`,title:(0,n.jsx)(n.Fragment,{children:`Возвращает:`})},{depth:3,url:`#getuser`,title:(0,n.jsx)(n.Fragment,{children:`getUser`})},{depth:5,url:`#краткое-содержание-10`,title:(0,n.jsx)(n.Fragment,{children:`Краткое содержание`})},{depth:5,url:`#описание-9`,title:(0,n.jsx)(n.Fragment,{children:`Описание`})},{depth:5,url:`#смотри-так-же-7`,title:(0,n.jsx)(n.Fragment,{children:`Смотри так-же:`})},{depth:5,url:`#свойства-7`,title:(0,n.jsx)(n.Fragment,{children:`Свойства:`})},{depth:5,url:`#ошибки-5`,title:(0,n.jsx)(n.Fragment,{children:`Ошибки:`})},{depth:5,url:`#возвращает-13`,title:(0,n.jsx)(n.Fragment,{children:`Возвращает:`})},{depth:3,url:`#getusergroups`,title:(0,n.jsx)(n.Fragment,{children:`getUserGroups`})},{depth:5,url:`#краткое-содержание-11`,title:(0,n.jsx)(n.Fragment,{children:`Краткое содержание`})},{depth:5,url:`#описание-10`,title:(0,n.jsx)(n.Fragment,{children:`Описание`})},{depth:5,url:`#смотри-так-же-8`,title:(0,n.jsx)(n.Fragment,{children:`Смотри так-же:`})},{depth:5,url:`#ошибки-6`,title:(0,n.jsx)(n.Fragment,{children:`Ошибки:`})},{depth:5,url:`#возвращает-14`,title:(0,n.jsx)(n.Fragment,{children:`Возвращает:`})},{depth:3,url:`#getusers`,title:(0,n.jsx)(n.Fragment,{children:`getUsers`})},{depth:5,url:`#краткое-содержание-12`,title:(0,n.jsx)(n.Fragment,{children:`Краткое содержание`})},{depth:5,url:`#описание-11`,title:(0,n.jsx)(n.Fragment,{children:`Описание`})},{depth:5,url:`#смотри-так-же-9`,title:(0,n.jsx)(n.Fragment,{children:`Смотри так-же:`})},{depth:5,url:`#ошибки-7`,title:(0,n.jsx)(n.Fragment,{children:`Ошибки:`})},{depth:5,url:`#возвращает-15`,title:(0,n.jsx)(n.Fragment,{children:`Возвращает:`})},{depth:3,url:`#getxfieldinfo`,title:(0,n.jsx)(n.Fragment,{children:`getXfieldInfo`})},{depth:5,url:`#краткое-содержание-13`,title:(0,n.jsx)(n.Fragment,{children:`Краткое содержание`})},{depth:5,url:`#смотри-так-же-10`,title:(0,n.jsx)(n.Fragment,{children:`Смотри так-же:`})},{depth:5,url:`#свойства-8`,title:(0,n.jsx)(n.Fragment,{children:`Свойства:`})},{depth:5,url:`#возвращает-16`,title:(0,n.jsx)(n.Fragment,{children:`Возвращает:`})},{depth:3,url:`#load_data`,title:(0,n.jsx)(n.Fragment,{children:`load_data`})},{depth:5,url:`#краткое-содержание-14`,title:(0,n.jsx)(n.Fragment,{children:`Краткое содержание`})},{depth:5,url:`#описание-12`,title:(0,n.jsx)(n.Fragment,{children:`Описание`})},{depth:5,url:`#смотри-так-же-11`,title:(0,n.jsx)(n.Fragment,{children:`Смотри так-же:`})},{depth:5,url:`#свойства-9`,title:(0,n.jsx)(n.Fragment,{children:`Свойства:`})},{depth:5,url:`#ошибки-8`,title:(0,n.jsx)(n.Fragment,{children:`Ошибки:`})},{depth:5,url:`#возвращает-17`,title:(0,n.jsx)(n.Fragment,{children:`Возвращает:`})},{depth:3,url:`#loadxfields`,title:(0,n.jsx)(n.Fragment,{children:`loadXfields`})},{depth:5,url:`#краткое-содержание-15`,title:(0,n.jsx)(n.Fragment,{children:`Краткое содержание`})},{depth:5,url:`#описание-13`,title:(0,n.jsx)(n.Fragment,{children:`Описание`})},{depth:5,url:`#смотри-так-же-12`,title:(0,n.jsx)(n.Fragment,{children:`Смотри так-же:`})},{depth:5,url:`#свойства-10`,title:(0,n.jsx)(n.Fragment,{children:`Свойства:`})},{depth:5,url:`#возвращает-18`,title:(0,n.jsx)(n.Fragment,{children:`Возвращает:`})},{depth:3,url:`#parseassets`,title:(0,n.jsx)(n.Fragment,{children:`parseAssets`})},{depth:5,url:`#краткое-содержание-16`,title:(0,n.jsx)(n.Fragment,{children:`Краткое содержание`})},{depth:5,url:`#описание-14`,title:(0,n.jsx)(n.Fragment,{children:`Описание`})},{depth:5,url:`#смотри-так-же-13`,title:(0,n.jsx)(n.Fragment,{children:`Смотри так-же:`})},{depth:5,url:`#свойства-11`,title:(0,n.jsx)(n.Fragment,{children:`Свойства:`})},{depth:5,url:`#ошибки-9`,title:(0,n.jsx)(n.Fragment,{children:`Ошибки:`})},{depth:5,url:`#возвращает-19`,title:(0,n.jsx)(n.Fragment,{children:`Возвращает:`})},{depth:3,url:`#save_asset`,title:(0,n.jsx)(n.Fragment,{children:`save_asset`})},{depth:5,url:`#краткое-содержание-17`,title:(0,n.jsx)(n.Fragment,{children:`Краткое содержание`})},{depth:5,url:`#смотри-так-же-14`,title:(0,n.jsx)(n.Fragment,{children:`Смотри так-же:`})},{depth:5,url:`#свойства-12`,title:(0,n.jsx)(n.Fragment,{children:`Свойства:`})},{depth:5,url:`#ошибки-10`,title:(0,n.jsx)(n.Fragment,{children:`Ошибки:`})},{depth:5,url:`#возвращает-20`,title:(0,n.jsx)(n.Fragment,{children:`Возвращает:`})},{depth:3,url:`#setapikey`,title:(0,n.jsx)(n.Fragment,{children:`setApiKey`})},{depth:5,url:`#свойства-13`,title:(0,n.jsx)(n.Fragment,{children:`Свойства:`})},{depth:5,url:`#возвращает-21`,title:(0,n.jsx)(n.Fragment,{children:`Возвращает:`})},{depth:3,url:`#setcachefolder`,title:(0,n.jsx)(n.Fragment,{children:`setCacheFolder`})},{depth:5,url:`#свойства-14`,title:(0,n.jsx)(n.Fragment,{children:`Свойства:`})},{depth:5,url:`#возвращает-22`,title:(0,n.jsx)(n.Fragment,{children:`Возвращает:`})},{depth:3,url:`#setprefix`,title:(0,n.jsx)(n.Fragment,{children:`setPrefix`})},{depth:5,url:`#краткое-содержание-18`,title:(0,n.jsx)(n.Fragment,{children:`Краткое содержание`})},{depth:5,url:`#описание-15`,title:(0,n.jsx)(n.Fragment,{children:`Описание`})},{depth:5,url:`#свойства-15`,title:(0,n.jsx)(n.Fragment,{children:`Свойства:`})},{depth:5,url:`#возвращает-23`,title:(0,n.jsx)(n.Fragment,{children:`Возвращает:`})},{depth:3,url:`#setrecourceid`,title:(0,n.jsx)(n.Fragment,{children:`setRecourceId`})},{depth:5,url:`#свойства-16`,title:(0,n.jsx)(n.Fragment,{children:`Свойства:`})},{depth:5,url:`#возвращает-24`,title:(0,n.jsx)(n.Fragment,{children:`Возвращает:`})},{depth:3,url:`#setupdateurl`,title:(0,n.jsx)(n.Fragment,{children:`setUpdateUrl`})},{depth:5,url:`#свойства-17`,title:(0,n.jsx)(n.Fragment,{children:`Свойства:`})},{depth:5,url:`#возвращает-25`,title:(0,n.jsx)(n.Fragment,{children:`Возвращает:`})},{depth:3,url:`#fetchfilecontent`,title:(0,n.jsx)(n.Fragment,{children:`fetchFileContent`})},{depth:5,url:`#краткое-содержание-19`,title:(0,n.jsx)(n.Fragment,{children:`Краткое содержание`})},{depth:5,url:`#описание-16`,title:(0,n.jsx)(n.Fragment,{children:`Описание`})},{depth:5,url:`#свойства-18`,title:(0,n.jsx)(n.Fragment,{children:`Свойства:`})},{depth:5,url:`#возвращает-26`,title:(0,n.jsx)(n.Fragment,{children:`Возвращает:`})},{depth:3,url:`#generatefilemetadata`,title:(0,n.jsx)(n.Fragment,{children:`generateFileMetadata`})},{depth:5,url:`#краткое-содержание-20`,title:(0,n.jsx)(n.Fragment,{children:`Краткое содержание`})},{depth:5,url:`#свойства-19`,title:(0,n.jsx)(n.Fragment,{children:`Свойства:`})},{depth:5,url:`#ошибки-11`,title:(0,n.jsx)(n.Fragment,{children:`Ошибки:`})},{depth:5,url:`#возвращает-27`,title:(0,n.jsx)(n.Fragment,{children:`Возвращает:`})},{depth:3,url:`#parse_assets`,title:(0,n.jsx)(n.Fragment,{children:`parse_assets`})},{depth:5,url:`#краткое-содержание-21`,title:(0,n.jsx)(n.Fragment,{children:`Краткое содержание`})},{depth:5,url:`#описание-17`,title:(0,n.jsx)(n.Fragment,{children:`Описание`})},{depth:5,url:`#смотри-так-же-15`,title:(0,n.jsx)(n.Fragment,{children:`Смотри так-же:`})},{depth:5,url:`#ошибки-12`,title:(0,n.jsx)(n.Fragment,{children:`Ошибки:`})},{depth:5,url:`#возвращает-28`,title:(0,n.jsx)(n.Fragment,{children:`Возвращает:`})},{depth:3,url:`#prepare_assets`,title:(0,n.jsx)(n.Fragment,{children:`prepare_assets`})},{depth:5,url:`#краткое-содержание-22`,title:(0,n.jsx)(n.Fragment,{children:`Краткое содержание`})},{depth:5,url:`#описание-18`,title:(0,n.jsx)(n.Fragment,{children:`Описание`})},{depth:5,url:`#свойства-20`,title:(0,n.jsx)(n.Fragment,{children:`Свойства:`})},{depth:5,url:`#возвращает-29`,title:(0,n.jsx)(n.Fragment,{children:`Возвращает:`})},{depth:3,url:`#savefile`,title:(0,n.jsx)(n.Fragment,{children:`saveFile`})},{depth:5,url:`#краткое-содержание-23`,title:(0,n.jsx)(n.Fragment,{children:`Краткое содержание`})},{depth:5,url:`#описание-19`,title:(0,n.jsx)(n.Fragment,{children:`Описание`})},{depth:5,url:`#смотри-так-же-16`,title:(0,n.jsx)(n.Fragment,{children:`Смотри так-же:`})},{depth:5,url:`#свойства-21`,title:(0,n.jsx)(n.Fragment,{children:`Свойства:`})},{depth:5,url:`#ошибки-13`,title:(0,n.jsx)(n.Fragment,{children:`Ошибки:`})},{depth:5,url:`#возвращает-30`,title:(0,n.jsx)(n.Fragment,{children:`Возвращает:`})},{depth:3,url:`#set_cache`,title:(0,n.jsx)(n.Fragment,{children:`set_cache`})},{depth:5,url:`#краткое-содержание-24`,title:(0,n.jsx)(n.Fragment,{children:`Краткое содержание`})},{depth:5,url:`#описание-20`,title:(0,n.jsx)(n.Fragment,{children:`Описание`})},{depth:5,url:`#смотри-так-же-17`,title:(0,n.jsx)(n.Fragment,{children:`Смотри так-же:`})},{depth:5,url:`#свойства-22`,title:(0,n.jsx)(n.Fragment,{children:`Свойства:`})},{depth:5,url:`#ошибки-14`,title:(0,n.jsx)(n.Fragment,{children:`Ошибки:`})},{depth:5,url:`#возвращает-31`,title:(0,n.jsx)(n.Fragment,{children:`Возвращает:`})}];function c(e){let t={a:`a`,code:`code`,h2:`h2`,h3:`h3`,h4:`h4`,h5:`h5`,hr:`hr`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,span:`span`,strong:`strong`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,ul:`ul`,...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h2,{id:`краткое-содержание`,children:`Краткое содержание:`}),`
`,(0,n.jsx)(t.p,{children:`Class MhAjax`}),`
`,(0,n.jsx)(t.h2,{id:`описание`,children:`Описание:`}),`
`,(0,n.jsx)(t.p,{children:`Вспомогательный класс для работы с системой управления DLE (Data Life Engine),
загрузкой данных и проверкой ресурсов. Содержит набор методов, облегчающих
выполнение AJAX-запросов, валидацию и взаимодействие с внешними и внутренними ресурсами.`}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsx)(t.h3,{id:`свойства`,children:`Свойства`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[`protected $`,(0,n.jsx)(t.a,{href:`#property_postXfieldKeys`,children:`postXfieldKeys`})]}),`
`,(0,n.jsxs)(t.li,{children:[`protected $`,(0,n.jsx)(t.a,{href:`#property_userXfieldKeys`,children:`userXfieldKeys`})]}),`
`,(0,n.jsxs)(t.li,{children:[`private $`,(0,n.jsx)(t.a,{href:`#property_api_key`,children:`api_key`})]}),`
`,(0,n.jsxs)(t.li,{children:[`private $`,(0,n.jsx)(t.a,{href:`#property_asset_file`,children:`asset_file`})]}),`
`,(0,n.jsxs)(t.li,{children:[`private $`,(0,n.jsx)(t.a,{href:`#property_assets_arr`,children:`assets_arr`})]}),`
`,(0,n.jsxs)(t.li,{children:[`private $`,(0,n.jsx)(t.a,{href:`#property_assets_dir`,children:`assets_dir`})]}),`
`,(0,n.jsxs)(t.li,{children:[`private $`,(0,n.jsx)(t.a,{href:`#property_cache_folder`,children:`cache_folder`})]}),`
`,(0,n.jsxs)(t.li,{children:[`private $`,(0,n.jsx)(t.a,{href:`#property_prefix`,children:`prefix`})]}),`
`,(0,n.jsxs)(t.li,{children:[`private $`,(0,n.jsx)(t.a,{href:`#property_recource_id`,children:`recource_id`})]}),`
`,(0,n.jsxs)(t.li,{children:[`private $`,(0,n.jsx)(t.a,{href:`#property_update_url`,children:`update_url`})]}),`
`]}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsx)(t.h3,{id:`методы`,children:`Методы`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method___construct`,children:`__construct()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method_checkAssets`,children:`checkAssets()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method_checkUpdate`,children:`checkUpdate()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method_clear_cache`,children:`clear_cache()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method_get_cache`,children:`get_cache()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method_get_used_xfields`,children:`get_used_xfields()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method_getApiKey`,children:`getApiKey()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method_getCacheFolder`,children:`getCacheFolder()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method_getCats`,children:`getCats()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method_getDleUrl`,children:`getDleUrl()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method_getPrefix`,children:`getPrefix()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method_getRecourceId`,children:`getRecourceId()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method_getUpdateUrl`,children:`getUpdateUrl()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method_getUser`,children:`getUser()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method_getUserGroups`,children:`getUserGroups()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method_getUsers`,children:`getUsers()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method_getXfieldInfo`,children:`getXfieldInfo()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method_load_data`,children:`load_data()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method_loadXfields`,children:`loadXfields()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method_parseAssets`,children:`parseAssets()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method_save_asset`,children:`save_asset()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method_setApiKey`,children:`setApiKey()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method_setCacheFolder`,children:`setCacheFolder()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method_setPrefix`,children:`setPrefix()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method_setRecourceId`,children:`setRecourceId()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method_setUpdateUrl`,children:`setUpdateUrl()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`private `,(0,n.jsx)(t.a,{href:`#method_fetchFileContent`,children:`fetchFileContent()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`private `,(0,n.jsx)(t.a,{href:`#method_generateFileMetadata`,children:`generateFileMetadata()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`private `,(0,n.jsx)(t.a,{href:`#method_parse_assets`,children:`parse_assets()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`private `,(0,n.jsx)(t.a,{href:`#method_prepare_assets`,children:`prepare_assets()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`private `,(0,n.jsx)(t.a,{href:`#method_saveFile`,children:`saveFile()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`private `,(0,n.jsx)(t.a,{href:`#method_set_cache`,children:`set_cache()`})]}),`
`]}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsx)(t.h3,{id:`подробности`,children:`Подробности`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsx)(t.li,{children:`Путь: engine/inc/maharder/_includes/classes/MhAjax.php`}),`
`,(0,n.jsxs)(t.li,{children:[`Использованные трейты:`,`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`./AssetsChecker`,children:`\\AssetsChecker`})}),`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`./UpdatesChecker`,children:`\\UpdatesChecker`})}),`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`./DataLoader`,children:`\\DataLoader`})}),`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`./DleData`,children:`\\DleData`})}),`
`]}),`
`]}),`
`]}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsx)(t.h2,{id:`свойства-1`,children:`Свойства`}),`
`,(0,n.jsx)(`span`,{id:`property_postXfieldKeys`}),`
`,(0,n.jsx)(t.h4,{id:`protected-postxfieldkeys--array`,children:`protected $postXfieldKeys : array`}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Тип:`}),` `,(0,n.jsx)(`abbr`,{title:`array`,children:`Массив`})]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Подробности:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[`Смотри так-же:`,`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`./DleData#property_postXfieldKeys`,children:`DleData::$postXfieldKeys`})}),`
`]}),`
`]}),`
`]}),`
`,(0,n.jsx)(`span`,{id:`property_userXfieldKeys`}),`
`,(0,n.jsx)(t.h4,{id:`protected-userxfieldkeys--array`,children:`protected $userXfieldKeys : array`}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Тип:`}),` `,(0,n.jsx)(`abbr`,{title:`array`,children:`Массив`})]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Подробности:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[`Смотри так-же:`,`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`./DleData#property_userXfieldKeys`,children:`DleData::$userXfieldKeys`})}),`
`]}),`
`]}),`
`]}),`
`,(0,n.jsx)(`span`,{id:`property_api_key`}),`
`,(0,n.jsx)(t.h4,{id:`private-api_key--string`,children:`private $api_key : string`}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Краткое содержание`})}),`
`,(0,n.jsx)(t.p,{children:`Гостевой ключ с доступом на просмотр информации ресурса на сайте`}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Тип:`}),` `,(0,n.jsx)(`abbr`,{title:`string`,children:`Текст`})]}),`
`,(0,n.jsx)(`span`,{id:`property_asset_file`}),`
`,(0,n.jsx)(t.h4,{id:`private-asset_file--string`,children:`private $asset_file : string`}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Краткое содержание`})}),`
`,(0,n.jsx)(t.p,{children:`Файл с информацией и хешами вспомогательных файлов`}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Тип:`}),` `,(0,n.jsx)(`abbr`,{title:`string`,children:`Текст`})]}),`
`,(0,n.jsx)(`span`,{id:`property_assets_arr`}),`
`,(0,n.jsx)(t.h4,{id:`private-assets_arr--array`,children:`private $assets_arr : array`}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Краткое содержание`})}),`
`,(0,n.jsx)(t.p,{children:`Массив со всеми данными для обновления стилей и скриптов`}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Тип:`}),` `,(0,n.jsx)(`abbr`,{title:`array`,children:`Массив`})]}),`
`,(0,n.jsx)(`span`,{id:`property_assets_dir`}),`
`,(0,n.jsx)(t.h4,{id:`private-assets_dir--string`,children:`private $assets_dir : string`}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Краткое содержание`})}),`
`,(0,n.jsx)(t.p,{children:`Путь до всех вспомогательных файлов`}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Тип:`}),` `,(0,n.jsx)(`abbr`,{title:`string`,children:`Текст`})]}),`
`,(0,n.jsx)(`span`,{id:`property_cache_folder`}),`
`,(0,n.jsx)(t.h4,{id:`private-cache_folder--string`,children:`private $cache_folder : string`}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Краткое содержание`})}),`
`,(0,n.jsx)(t.p,{children:`Папка кеша`}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Тип:`}),` `,(0,n.jsx)(`abbr`,{title:`string`,children:`Текст`})]}),`
`,(0,n.jsx)(`span`,{id:`property_prefix`}),`
`,(0,n.jsx)(t.h4,{id:`private-prefix--string`,children:`private $prefix : ?string`}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Тип:`}),` `,(0,n.jsx)(`abbr`,{title:`?string`,children:`Текст или null`})]}),`
`,(0,n.jsx)(`span`,{id:`property_recource_id`}),`
`,(0,n.jsx)(t.h4,{id:`private-recource_id--int`,children:`private $recource_id : ?int`}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Тип:`}),` `,(0,n.jsx)(`a`,{href:`../?int`,children:(0,n.jsx)(`abbr`,{title:`?int`,children:`Целое число или null`})})]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Подробности:`})}),`
`,(0,n.jsx)(`span`,{id:`property_update_url`}),`
`,(0,n.jsx)(t.h4,{id:`private-update_url--string`,children:`private $update_url : string`}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Тип:`}),` `,(0,n.jsx)(`abbr`,{title:`string`,children:`Текст`})]}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsx)(t.h2,{id:`методы-1`,children:`Методы`}),`
`,(0,n.jsx)(`span`,{id:`method___construct`}),`
`,(0,n.jsx)(t.h3,{id:`__construct`,children:`__construct`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`public __construct() : mixed`})})})})}),`
`,(0,n.jsx)(t.h5,{id:`краткое-содержание-1`,children:`Краткое содержание`}),`
`,(0,n.jsx)(t.p,{children:`Конструктор класса MhAjax.`}),`
`,(0,n.jsx)(t.h5,{id:`описание-1`,children:`Описание`}),`
`,(0,n.jsx)(t.p,{children:`Инициализирует объект класса, содержащего вспомогательные методы для работы с DLE, загрузкой данных и проверкой
ресурсов.`}),`
`,(0,n.jsx)(t.h5,{id:`возвращает`,children:`Возвращает:`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`mixed`})})})})}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsx)(`span`,{id:`method_checkAssets`}),`
`,(0,n.jsx)(t.h3,{id:`checkassets`,children:`checkAssets`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`public checkAssets(bool  rewrite = false) : array`})})})})}),`
`,(0,n.jsx)(t.h5,{id:`краткое-содержание-2`,children:`Краткое содержание`}),`
`,(0,n.jsx)(t.p,{children:`Проверяет целостность файлов между локальным хранилищем и сервером разработчика.`}),`
`,(0,n.jsx)(t.h5,{id:`описание-2`,children:`Описание`}),`
`,(0,n.jsx)(t.p,{children:`Если файлы отсутствуют или имеют различия в хеш-суммах, информация об этих расхождениях
возвращается в виде массива. При необходимости может быть выполнена перезапись
локального файла с данными о ресурсах.`}),`
`,(0,n.jsx)(t.h5,{id:`смотри-так-же`,children:`Смотри так-же:`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`./DataManager#method_dirToArray`,children:`\\DataManager::dirToArray()`})}),`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`./AssetsChecker#method_prepare_assets`,children:`\\AssetsChecker::prepare_assets()`})}),`
`]}),`
`,(0,n.jsx)(t.h5,{id:`свойства-2`,children:`Свойства:`}),`
`,(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`Название`}),(0,n.jsx)(t.th,{children:`Тип`}),(0,n.jsx)(t.th,{children:`По умолчанию`})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:`$rewrite`})}),(0,n.jsx)(t.td,{children:`bool`}),(0,n.jsx)(t.td,{children:`false`})]})})]}),`
`,(0,n.jsx)(t.h5,{id:`ошибки`,children:`Ошибки:`}),`
`,(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`Тип`}),(0,n.jsx)(t.th,{children:`Описание`})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`\\JsonException`}),(0,n.jsx)(t.td,{})]})})]}),`
`,(0,n.jsx)(t.h5,{id:`возвращает-1`,children:`Возвращает:`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`array`})})})})}),`
`,(0,n.jsx)(t.p,{children:`Ассоциативный массив с информацией о проверке файлов:`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`on_server`}),` (int): Количество файлов, находящихся на сервере разработчика.`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`local`}),` (int): Количество локальных файлов.`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`missing_count`}),` (int): Количество недостающих файлов.`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`update_count`}),` (int): Количество файлов, требующих обновления.`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`missing`}),` (array): Массив с данными о недостающих файлах.`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`update`}),` (array): Массив с данными о файлах, требующих обновления.`]}),`
`]}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsx)(`span`,{id:`method_checkUpdate`}),`
`,(0,n.jsx)(t.h3,{id:`checkupdate`,children:`checkUpdate`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`public checkUpdate(int|null  res = null) : array`})})})})}),`
`,(0,n.jsx)(t.h5,{id:`краткое-содержание-3`,children:`Краткое содержание`}),`
`,(0,n.jsx)(t.p,{children:`Проверяет наличие и обновления ресурса, используя указанный или текущий идентификатор ресурса.`}),`
`,(0,n.jsx)(t.h5,{id:`смотри-так-же-1`,children:`Смотри так-же:`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`./LogGenerator#method_generateLog`,children:`\\LogGenerator::generateLog()`})}),`
`]}),`
`,(0,n.jsx)(t.h5,{id:`свойства-3`,children:`Свойства:`}),`
`,(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`Название`}),(0,n.jsx)(t.th,{children:`Тип`}),(0,n.jsx)(t.th,{children:`По умолчанию`})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:`$res`})}),(0,n.jsx)(t.td,{children:`int|null`}),(0,n.jsx)(t.td,{children:`null`})]})})]}),`
`,(0,n.jsx)(t.h5,{id:`ошибки-1`,children:`Ошибки:`}),`
`,(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`Тип`}),(0,n.jsx)(t.th,{children:`Описание`})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`\\JsonException|\\Throwable`}),(0,n.jsx)(t.td,{children:`Исключение, связанное с ошибками в JSON-конверсии (может быть выброшено при выполнении Telegram-лога).`})]})})]}),`
`,(0,n.jsx)(t.h5,{id:`возвращает-2`,children:`Возвращает:`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`array`})})})})}),`
`,(0,n.jsx)(t.p,{children:`Возвращает массив с данными об обновлении ресурса или список ошибок.`}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsx)(`span`,{id:`method_clear_cache`}),`
`,(0,n.jsx)(t.h3,{id:`clear_cache`,children:`clear_cache`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`public clear_cache(string  type = "all") : void`})})})})}),`
`,(0,n.jsx)(t.h5,{id:`краткое-содержание-4`,children:`Краткое содержание`}),`
`,(0,n.jsx)(t.p,{children:`Очищает кеш указанного типа.`}),`
`,(0,n.jsx)(t.h5,{id:`описание-3`,children:`Описание`}),`
`,(0,n.jsx)(t.p,{children:`Метод позволяет очистить кеш для переданного типа или полностью, если тип "all".
Использует внутренний метод CacheControl::clearCache для выполнения операции очистки.`}),`
`,(0,n.jsx)(t.h5,{id:`смотри-так-же-2`,children:`Смотри так-же:`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`./CacheControl#method_clearCache`,children:`\\CacheControl::clearCache()`})}),`
`]}),`
`,(0,n.jsx)(t.h5,{id:`свойства-4`,children:`Свойства:`}),`
`,(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`Название`}),(0,n.jsx)(t.th,{children:`Тип`}),(0,n.jsx)(t.th,{children:`По умолчанию`})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:`$type`})}),(0,n.jsx)(t.td,{children:`string`}),(0,n.jsx)(t.td,{children:`"all"`})]})})]}),`
`,(0,n.jsx)(t.h5,{id:`возвращает-3`,children:`Возвращает:`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`void`})})})})}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsx)(`span`,{id:`method_get_cache`}),`
`,(0,n.jsx)(t.h3,{id:`get_cache`,children:`get_cache`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`public get_cache(string  type, string  name) : array|false`})})})})}),`
`,(0,n.jsx)(t.h5,{id:`краткое-содержание-5`,children:`Краткое содержание`}),`
`,(0,n.jsx)(t.p,{children:`Получает кешированные данные для заданного типа и имени.`}),`
`,(0,n.jsx)(t.h5,{id:`описание-4`,children:`Описание`}),`
`,(0,n.jsxs)(t.p,{children:[`Метод использует статический метод `,(0,n.jsx)(t.code,{children:`CacheControl::getCache()`}),`, чтобы получить данные из файловой системы.`]}),`
`,(0,n.jsx)(t.h5,{id:`смотри-так-же-3`,children:`Смотри так-же:`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`./DataManager#method_toTranslit`,children:`\\DataManager::toTranslit()`})}),`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`./DataManager#method_normalizePath`,children:`\\DataManager::normalizePath()`})}),`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`./CacheControl#method_getCache`,children:`\\CacheControl::getCache()`})}),`
`]}),`
`,(0,n.jsx)(t.h5,{id:`свойства-5`,children:`Свойства:`}),`
`,(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`Название`}),(0,n.jsx)(t.th,{children:`Тип`}),(0,n.jsx)(t.th,{children:`По умолчанию`})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:`$type`})}),(0,n.jsx)(t.td,{children:`string`}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:`$name`})}),(0,n.jsx)(t.td,{children:`string`}),(0,n.jsx)(t.td,{})]})]})]}),`
`,(0,n.jsx)(t.h5,{id:`ошибки-2`,children:`Ошибки:`}),`
`,(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`Тип`}),(0,n.jsx)(t.th,{children:`Описание`})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`\\JsonException`}),(0,n.jsx)(t.td,{})]})})]}),`
`,(0,n.jsx)(t.h5,{id:`возвращает-4`,children:`Возвращает:`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`array|false`})})})})}),`
`,(0,n.jsxs)(t.p,{children:[`Возвращает массив декодированных данных, если файл кеша успешно найден и данные корректны,
или `,(0,n.jsx)(t.code,{children:`false`}),`, если произошла ошибка (например, файл не найден или данные некорректны).`]}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsx)(`span`,{id:`method_get_used_xfields`}),`
`,(0,n.jsx)(t.h3,{id:`get_used_xfields`,children:`get_used_xfields`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`public get_used_xfields(int  id, string  type = "post") : array|bool`})})})})}),`
`,(0,n.jsx)(t.h5,{id:`краткое-содержание-6`,children:`Краткое содержание`}),`
`,(0,n.jsxs)(t.p,{children:[`Возвращает массив с дополнительными полями, использованными в объекте, либо `,(0,n.jsx)(t.code,{children:`false`}),`, если данные отсутствуют.`]}),`
`,(0,n.jsx)(t.h5,{id:`описание-5`,children:`Описание`}),`
`,(0,n.jsx)(t.p,{children:`Метод извлекает данные из базы данных для указанного объекта (поста или пользователя)
и преобразует строку с дополнительными полями в массив с ключами и их значениями.`}),`
`,(0,n.jsx)(t.h5,{id:`смотри-так-же-4`,children:`Смотри так-же:`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`./DataLoader#method_load_data`,children:`\\DataLoader::load_data()`})}),`
`]}),`
`,(0,n.jsx)(t.h5,{id:`свойства-6`,children:`Свойства:`}),`
`,(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`Название`}),(0,n.jsx)(t.th,{children:`Тип`}),(0,n.jsx)(t.th,{children:`По умолчанию`})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:`$id`})}),(0,n.jsx)(t.td,{children:`int`}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:`$type`})}),(0,n.jsx)(t.td,{children:`string`}),(0,n.jsx)(t.td,{children:`"post"`})]})]})]}),`
`,(0,n.jsx)(t.h5,{id:`ошибки-3`,children:`Ошибки:`}),`
`,(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`Тип`}),(0,n.jsx)(t.th,{children:`Описание`})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`\\JsonException`}),(0,n.jsx)(t.td,{children:`Исключение выбрасывается, если произошла ошибка при работе с JSON.`})]})})]}),`
`,(0,n.jsx)(t.h5,{id:`возвращает-5`,children:`Возвращает:`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`array|bool`})})})})}),`
`,(0,n.jsxs)(t.p,{children:[`Возвращает массив дополнительных полей объекта в формате
ключ => значение, либо `,(0,n.jsx)(t.code,{children:`false`}),`, если данные отсутствуют.`]}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsx)(`span`,{id:`method_getApiKey`}),`
`,(0,n.jsx)(t.h3,{id:`getapikey`,children:`getApiKey`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`public getApiKey() : string`})})})})}),`
`,(0,n.jsx)(t.h5,{id:`возвращает-6`,children:`Возвращает:`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`string`})})})})}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsx)(`span`,{id:`method_getCacheFolder`}),`
`,(0,n.jsx)(t.h3,{id:`getcachefolder`,children:`getCacheFolder`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`public getCacheFolder() : string`})})})})}),`
`,(0,n.jsx)(t.h5,{id:`возвращает-7`,children:`Возвращает:`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`string`})})})})}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsx)(`span`,{id:`method_getCats`}),`
`,(0,n.jsx)(t.h3,{id:`getcats`,children:`getCats`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`public getCats() : array`})})})})}),`
`,(0,n.jsx)(t.h5,{id:`краткое-содержание-7`,children:`Краткое содержание`}),`
`,(0,n.jsx)(t.p,{children:`Возвращает список категорий в виде ассоциативного массива, где ключом является ID категории, а значением — её
название.`}),`
`,(0,n.jsx)(t.h5,{id:`описание-6`,children:`Описание`}),`
`,(0,n.jsxs)(t.p,{children:[`Метод загружает данные из базы данных, используя метод `,(0,n.jsx)(t.code,{children:`load_data`}),`, и сортирует их по названию категории в
алфавитном порядке. В результате возвращается массив с ID категорий в качестве ключей и названиями категорий в
качестве значений.`]}),`
`,(0,n.jsx)(t.h5,{id:`смотри-так-же-5`,children:`Смотри так-же:`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`./DataLoader#method_load_data`,children:`\\DataLoader::load_data()`})}),`
`]}),`
`,(0,n.jsx)(t.h5,{id:`ошибки-4`,children:`Ошибки:`}),`
`,(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`Тип`}),(0,n.jsx)(t.th,{children:`Описание`})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`\\JsonException`}),(0,n.jsx)(t.td,{})]})})]}),`
`,(0,n.jsx)(t.h5,{id:`возвращает-8`,children:`Возвращает:`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`array`})})})})}),`
`,(0,n.jsx)(t.p,{children:`Ассоциативный массив категорий, где ключ — ID категории, а значение — её название.`}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsx)(`span`,{id:`method_getDleUrl`}),`
`,(0,n.jsx)(t.h3,{id:`getdleurl`,children:`getDleUrl`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`public getDleUrl() : string`})})})})}),`
`,(0,n.jsx)(t.h5,{id:`краткое-содержание-8`,children:`Краткое содержание`}),`
`,(0,n.jsx)(t.p,{children:`Возвращает URL панели администратора DLE.`}),`
`,(0,n.jsx)(t.h5,{id:`описание-7`,children:`Описание`}),`
`,(0,n.jsxs)(t.p,{children:[`Использует глобальный массив настроек DLE `,(0,n.jsx)(t.code,{children:`$config`}),` для формирования полного URL.
Формат возвращаемого значения: http(s)://your-site.com/admin_path.`]}),`
`,(0,n.jsx)(t.h5,{id:`возвращает-9`,children:`Возвращает:`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`string`})})})})}),`
`,(0,n.jsx)(t.p,{children:`Конечный URL панели администратора DLE.`}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsx)(`span`,{id:`method_getPrefix`}),`
`,(0,n.jsx)(t.h3,{id:`getprefix`,children:`getPrefix`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`public getPrefix() : string`})})})})}),`
`,(0,n.jsx)(t.h5,{id:`краткое-содержание-9`,children:`Краткое содержание`}),`
`,(0,n.jsx)(t.p,{children:`Возвращает префикс для использования в SQL-запросах.`}),`
`,(0,n.jsx)(t.h5,{id:`описание-8`,children:`Описание`}),`
`,(0,n.jsxs)(t.p,{children:[`Метод проверяет, установлен ли префикс. Если префикс не задан, он вызывает метод `,(0,n.jsx)(t.code,{children:`setPrefix()`}),`,
чтобы установить его значение. Затем возвращает установившийся префикс.`]}),`
`,(0,n.jsx)(t.h5,{id:`смотри-так-же-6`,children:`Смотри так-же:`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`./DataLoader#property_prefix`,children:`\\DataLoader::$prefix`})}),`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`./DataLoader#method_setPrefix`,children:`\\DataLoader::setPrefix()`})}),`
`]}),`
`,(0,n.jsx)(t.h5,{id:`возвращает-10`,children:`Возвращает:`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`string`})})})})}),`
`,(0,n.jsx)(t.p,{children:`Префикс, используемый для построения SQL-запросов.`}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsx)(`span`,{id:`method_getRecourceId`}),`
`,(0,n.jsx)(t.h3,{id:`getrecourceid`,children:`getRecourceId`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`public getRecourceId() : int|null`})})})})}),`
`,(0,n.jsx)(t.h5,{id:`возвращает-11`,children:`Возвращает:`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`int|null`})})})})}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsx)(`span`,{id:`method_getUpdateUrl`}),`
`,(0,n.jsx)(t.h3,{id:`getupdateurl`,children:`getUpdateUrl`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`public getUpdateUrl() : string`})})})})}),`
`,(0,n.jsx)(t.h5,{id:`возвращает-12`,children:`Возвращает:`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`string`})})})})}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsx)(`span`,{id:`method_getUser`}),`
`,(0,n.jsx)(t.h3,{id:`getuser`,children:`getUser`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`public getUser(int|null  id = null, string|null  uname = null) : array|false`})})})})}),`
`,(0,n.jsx)(t.h5,{id:`краткое-содержание-10`,children:`Краткое содержание`}),`
`,(0,n.jsx)(t.p,{children:`Получает данные пользователя по ID или имени пользователя.`}),`
`,(0,n.jsx)(t.h5,{id:`описание-9`,children:`Описание`}),`
`,(0,n.jsxs)(t.p,{children:[`Если ни идентификатор пользователя, ни имя пользователя не переданы, метод возвращает `,(0,n.jsx)(t.code,{children:`false`}),`.
В противном случае выполняется поиск данных в таблице `,(0,n.jsx)(t.code,{children:`users`}),` с использованием указанного критерия.`]}),`
`,(0,n.jsx)(t.h5,{id:`смотри-так-же-7`,children:`Смотри так-же:`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`./DataLoader#method_load_data`,children:`\\DataLoader::load_data()`})}),`
`]}),`
`,(0,n.jsx)(t.h5,{id:`свойства-7`,children:`Свойства:`}),`
`,(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`Название`}),(0,n.jsx)(t.th,{children:`Тип`}),(0,n.jsx)(t.th,{children:`По умолчанию`})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:`$id`})}),(0,n.jsx)(t.td,{children:`int|null`}),(0,n.jsx)(t.td,{children:`null`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:`$uname`})}),(0,n.jsx)(t.td,{children:`string|null`}),(0,n.jsx)(t.td,{children:`null`})]})]})]}),`
`,(0,n.jsx)(t.h5,{id:`ошибки-5`,children:`Ошибки:`}),`
`,(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`Тип`}),(0,n.jsx)(t.th,{children:`Описание`})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`\\JsonException`}),(0,n.jsx)(t.td,{})]})})]}),`
`,(0,n.jsx)(t.h5,{id:`возвращает-13`,children:`Возвращает:`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`array|false`})})})})}),`
`,(0,n.jsxs)(t.p,{children:[`Ассоциативный массив с данными о пользователе, если пользователь найден.
Возвращает `,(0,n.jsx)(t.code,{children:`false`}),`, если пользователь не найден или если критерии поиска не заданы.`]}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsx)(`span`,{id:`method_getUserGroups`}),`
`,(0,n.jsx)(t.h3,{id:`getusergroups`,children:`getUserGroups`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`public getUserGroups() : array`})})})})}),`
`,(0,n.jsx)(t.h5,{id:`краткое-содержание-11`,children:`Краткое содержание`}),`
`,(0,n.jsx)(t.p,{children:`Получает список групп пользователей в формате массива с идентификаторами и именами групп.`}),`
`,(0,n.jsx)(t.h5,{id:`описание-10`,children:`Описание`}),`
`,(0,n.jsxs)(t.p,{children:[`Метод обращается к функции `,(0,n.jsx)(t.code,{children:`load_data`}),` для загрузки данных о группах пользователей
из таблицы "usergroups" с выборкой полей `,(0,n.jsx)(t.code,{children:`id`}),` и `,(0,n.jsx)(t.code,{children:`group_name`}),`,
затем преобразует результат в ассоциативный массив с ключами — идентификаторами групп,
и значениями — именами групп, отсортированными по названию группы в алфавитном порядке (ASC).`]}),`
`,(0,n.jsx)(t.h5,{id:`смотри-так-же-8`,children:`Смотри так-же:`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`./DataLoader#method_load_data`,children:`\\DataLoader::load_data()`})}),`
`]}),`
`,(0,n.jsx)(t.h5,{id:`ошибки-6`,children:`Ошибки:`}),`
`,(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`Тип`}),(0,n.jsx)(t.th,{children:`Описание`})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`\\JsonException`}),(0,n.jsx)(t.td,{})]})})]}),`
`,(0,n.jsx)(t.h5,{id:`возвращает-14`,children:`Возвращает:`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`array`})})})})}),`
`,(0,n.jsx)(t.p,{children:`Ассоциативный массив, где ключ — идентификатор группы, значение — имя группы.`}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsx)(`span`,{id:`method_getUsers`}),`
`,(0,n.jsx)(t.h3,{id:`getusers`,children:`getUsers`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`public getUsers() : array`})})})})}),`
`,(0,n.jsx)(t.h5,{id:`краткое-содержание-12`,children:`Краткое содержание`}),`
`,(0,n.jsx)(t.p,{children:`Возвращает список пользователей из базы данных.`}),`
`,(0,n.jsx)(t.h5,{id:`описание-11`,children:`Описание`}),`
`,(0,n.jsxs)(t.p,{children:[`Метод загружает данные о пользователях, используя метод `,(0,n.jsx)(t.code,{children:`load_data`}),`,
и возвращает массив, где ключами являются идентификаторы пользователей,
а значениями — их имена, отсортированные в алфавитном порядке.`]}),`
`,(0,n.jsx)(t.h5,{id:`смотри-так-же-9`,children:`Смотри так-же:`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`./DataLoader#method_load_data`,children:`\\DataLoader::load_data()`})}),`
`]}),`
`,(0,n.jsx)(t.h5,{id:`ошибки-7`,children:`Ошибки:`}),`
`,(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`Тип`}),(0,n.jsx)(t.th,{children:`Описание`})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`\\JsonException`}),(0,n.jsx)(t.td,{})]})})]}),`
`,(0,n.jsx)(t.h5,{id:`возвращает-15`,children:`Возвращает:`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`array`})})})})}),`
`,(0,n.jsx)(t.p,{children:`Ассоциативный массив пользователей, где ключи — идентификаторы пользователей (user_id), а значения
— их имена.`}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsx)(`span`,{id:`method_getXfieldInfo`}),`
`,(0,n.jsx)(t.h3,{id:`getxfieldinfo`,children:`getXfieldInfo`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`public getXfieldInfo(string  name, string  type = "post") : array|null`})})})})}),`
`,(0,n.jsx)(t.h5,{id:`краткое-содержание-13`,children:`Краткое содержание`}),`
`,(0,n.jsx)(t.p,{children:`Возвращает информацию о дополнительном поле (xfield) на основании его имени и типа.`}),`
`,(0,n.jsx)(t.h5,{id:`смотри-так-же-10`,children:`Смотри так-же:`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`./DleData#method_loadXfields`,children:`\\DleData::loadXfields()`})}),`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`./CacheControl#method_getCache`,children:`\\CacheControl::getCache()`})}),`
`]}),`
`,(0,n.jsx)(t.h5,{id:`свойства-8`,children:`Свойства:`}),`
`,(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`Название`}),(0,n.jsx)(t.th,{children:`Тип`}),(0,n.jsx)(t.th,{children:`По умолчанию`})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:`$name`})}),(0,n.jsx)(t.td,{children:`string`}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:`$type`})}),(0,n.jsx)(t.td,{children:`string`}),(0,n.jsx)(t.td,{children:`"post"`})]})]})]}),`
`,(0,n.jsx)(t.h5,{id:`возвращает-16`,children:`Возвращает:`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`array|null`})})})})}),`
`,(0,n.jsx)(t.p,{children:`Возвращает информацию о поле в виде ассоциативного массива, либо null,
если поле не найдено.`}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsx)(`span`,{id:`method_load_data`}),`
`,(0,n.jsx)(t.h3,{id:`load_data`,children:`load_data`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`public load_data(string  name, mixed  ..._vars) : array`})})})})}),`
`,(0,n.jsx)(t.h5,{id:`краткое-содержание-14`,children:`Краткое содержание`}),`
`,(0,n.jsx)(t.p,{children:`Метод загружает данные из базы данных с использованием механизма кеширования.`}),`
`,(0,n.jsx)(t.h5,{id:`описание-12`,children:`Описание`}),`
`,(0,n.jsx)(t.p,{children:`Если данные уже закешированы, то они возвращаются из кеша, иначе выполняется запрос
к базе данных, формируется кеш и результат сохраняется на диск.`}),`
`,(0,n.jsx)(t.h5,{id:`смотри-так-же-11`,children:`Смотри так-же:`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`./DataManager#method_getDb`,children:`\\DataManager::getDb()`})}),`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`./DataManager#method_nameArgs`,children:`\\DataManager::nameArgs()`})}),`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`./DataManager#method_getComparer`,children:`\\DataManager::getComparer()`})}),`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`./DataManager#method_getConfig`,children:`\\DataManager::getConfig()`})}),`
`]}),`
`,(0,n.jsx)(t.h5,{id:`свойства-9`,children:`Свойства:`}),`
`,(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`Название`}),(0,n.jsx)(t.th,{children:`Тип`}),(0,n.jsx)(t.th,{children:`По умолчанию`})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:`$name`})}),(0,n.jsx)(t.td,{children:`string`}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:`$_vars`})}),(0,n.jsx)(t.td,{children:`mixed`}),(0,n.jsx)(t.td,{})]})]})]}),`
`,(0,n.jsx)(t.h5,{id:`ошибки-8`,children:`Ошибки:`}),`
`,(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`Тип`}),(0,n.jsx)(t.th,{children:`Описание`})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`\\JsonException`}),(0,n.jsx)(t.td,{children:`В случае JSON-ошибок при работе с кешем.`})]})})]}),`
`,(0,n.jsx)(t.h5,{id:`возвращает-17`,children:`Возвращает:`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`array`})})})})}),`
`,(0,n.jsx)(t.p,{children:`Результат выборки из базы данных, либо из кеша.`}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsx)(`span`,{id:`method_loadXfields`}),`
`,(0,n.jsx)(t.h3,{id:`loadxfields`,children:`loadXfields`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`public loadXfields(string  type = "post") : array|false`})})})})}),`
`,(0,n.jsx)(t.h5,{id:`краткое-содержание-15`,children:`Краткое содержание`}),`
`,(0,n.jsx)(t.p,{children:`Загружает дополнительные поля для новостей или профилей пользователей.`}),`
`,(0,n.jsx)(t.h5,{id:`описание-13`,children:`Описание`}),`
`,(0,n.jsxs)(t.p,{children:[`Метод извлекает данные из кэша, либо, при его отсутствии, читает данные из файла конфигурации.
Возвращает ассоциативный массив, где ключами являются названия дополнительных полей, а значениями - их
параметры.
Данные загружаются в зависимости от значения параметра `,(0,n.jsx)(t.code,{children:`$type`}),`:`]}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`"post"`}),`: данные загружаются из файла `,(0,n.jsx)(t.code,{children:`xfields.txt`}),`.`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`"user"`}),`: данные загружаются из файла `,(0,n.jsx)(t.code,{children:`xprofile.txt`}),`.
Ключи массива, формируемого из файла конфигурации, соответствуют предопределённым ключам, указанным
в свойствах `,(0,n.jsx)(t.code,{children:`userXfieldKeys`}),` или `,(0,n.jsx)(t.code,{children:`postXfieldKeys`}),`.`]}),`
`]}),`
`,(0,n.jsx)(t.h5,{id:`смотри-так-же-12`,children:`Смотри так-же:`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`./CacheControl#method_getCache`,children:`\\CacheControl::getCache()`})}),`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`./CacheControl#method_setCache`,children:`\\CacheControl::setCache()`})}),`
`]}),`
`,(0,n.jsx)(t.h5,{id:`свойства-10`,children:`Свойства:`}),`
`,(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`Название`}),(0,n.jsx)(t.th,{children:`Тип`}),(0,n.jsx)(t.th,{children:`По умолчанию`})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:`$type`})}),(0,n.jsx)(t.td,{children:`string`}),(0,n.jsx)(t.td,{children:`"post"`})]})})]}),`
`,(0,n.jsx)(t.h5,{id:`возвращает-18`,children:`Возвращает:`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`array|false`})})})})}),`
`,(0,n.jsxs)(t.p,{children:[`Ассоциативный массив дополнительных полей, где ключ - название поля, значение - его
параметры. Возвращает `,(0,n.jsx)(t.code,{children:`false`}),` в случае невозможности прочитать файл.`]}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsx)(`span`,{id:`method_parseAssets`}),`
`,(0,n.jsx)(t.h3,{id:`parseassets`,children:`parseAssets`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`public parseAssets(bool  parse = false) : void`})})})})}),`
`,(0,n.jsx)(t.h5,{id:`краткое-содержание-16`,children:`Краткое содержание`}),`
`,(0,n.jsx)(t.p,{children:`Выполняет парсинг вспомогательных файлов для управления ассетами.`}),`
`,(0,n.jsx)(t.h5,{id:`описание-14`,children:`Описание`}),`
`,(0,n.jsx)(t.p,{children:`Если файл с хешами ассетов существует, то парсинг выполняется только при принудительном запуске.
В случае отсутствия указанного файла производится полное сканирование ассетов.`}),`
`,(0,n.jsx)(t.h5,{id:`смотри-так-же-13`,children:`Смотри так-же:`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`./AssetsChecker#method_parse_assetsc`,children:`\\AssetsChecker::parse_assets()`})}),`
`]}),`
`,(0,n.jsx)(t.h5,{id:`свойства-11`,children:`Свойства:`}),`
`,(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`Название`}),(0,n.jsx)(t.th,{children:`Тип`}),(0,n.jsx)(t.th,{children:`По умолчанию`})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:`$parse`})}),(0,n.jsx)(t.td,{children:`bool`}),(0,n.jsx)(t.td,{children:`false`})]})})]}),`
`,(0,n.jsx)(t.h5,{id:`ошибки-9`,children:`Ошибки:`}),`
`,(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`Тип`}),(0,n.jsx)(t.th,{children:`Описание`})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`\\JsonException|\\Throwable`}),(0,n.jsx)(t.td,{children:`В случае ошибок в процессах обработки JSON-файлов.`})]})})]}),`
`,(0,n.jsx)(t.h5,{id:`возвращает-19`,children:`Возвращает:`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`void`})})})})}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsx)(`span`,{id:`method_save_asset`}),`
`,(0,n.jsx)(t.h3,{id:`save_asset`,children:`save_asset`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`public save_asset(array  data, string  file) : array|false`})})})})}),`
`,(0,n.jsx)(t.h5,{id:`краткое-содержание-17`,children:`Краткое содержание`}),`
`,(0,n.jsx)(t.p,{children:`Сохраняет файл на сервер и возвращает информацию о нём или false в случае неуспеха.`}),`
`,(0,n.jsx)(t.h5,{id:`смотри-так-же-14`,children:`Смотри так-же:`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`./DataManager#method_createDir`,children:`\\DataManager::createDir()`})}),`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`./LogGenerator#method_generateLog`,children:`\\LogGenerator::generateLog()`})}),`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`./AssetsChecker#method_fetchFileContent`,children:`\\AssetsChecker::fetchFileContent()`})}),`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`./AssetsChecker#method_saveFile`,children:`\\AssetsChecker::saveFile()`})}),`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`./AssetsChecker#method_generateFileMetadata`,children:`\\AssetsChecker::generateFileMetadata()`})}),`
`]}),`
`,(0,n.jsx)(t.h5,{id:`свойства-12`,children:`Свойства:`}),`
`,(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`Название`}),(0,n.jsx)(t.th,{children:`Тип`}),(0,n.jsx)(t.th,{children:`По умолчанию`})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:`$data`})}),(0,n.jsx)(t.td,{children:`array`}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:`$file`})}),(0,n.jsx)(t.td,{children:`string`}),(0,n.jsx)(t.td,{})]})]})]}),`
`,(0,n.jsx)(t.h5,{id:`ошибки-10`,children:`Ошибки:`}),`
`,(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`Тип`}),(0,n.jsx)(t.th,{children:`Описание`})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`\\JsonException|\\Throwable`}),(0,n.jsx)(t.td,{children:`Генерирует исключение, если возникает ошибка обработки JSON.`})]})})]}),`
`,(0,n.jsx)(t.h5,{id:`возвращает-20`,children:`Возвращает:`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`array|false`})})})})}),`
`,(0,n.jsx)(t.p,{children:`Возвращает массив с информацией о сохранённом файле или false, если файл не удалось сохранить.
Массив содержит следующие ключи:`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsx)(t.li,{children:`"realpath" (string): Полный реальный путь до файла.`}),`
`,(0,n.jsx)(t.li,{children:`"dirname" (string): Директория файла.`}),`
`,(0,n.jsx)(t.li,{children:`"basename" (string): Имя файла с расширением.`}),`
`,(0,n.jsx)(t.li,{children:`"filename" (string): Имя файла без расширения.`}),`
`,(0,n.jsx)(t.li,{children:`"extension" (string): Расширение файла.`}),`
`,(0,n.jsx)(t.li,{children:`"mime" (string): MIME-тип файла.`}),`
`,(0,n.jsx)(t.li,{children:`"encoding" (string): Тип кодирования файла.`}),`
`,(0,n.jsx)(t.li,{children:`"size" (int): Размер файла в байтах.`}),`
`,(0,n.jsx)(t.li,{children:`"size_string" (string): Размер файла в человекочитаемом формате (например, "1.5MB").`}),`
`,(0,n.jsx)(t.li,{children:`"atime" (int): Время последнего доступа к файлу (в метках времени Unix).`}),`
`,(0,n.jsx)(t.li,{children:`"mtime" (int): Время последней модификации файла (в метках времени Unix).`}),`
`,(0,n.jsx)(t.li,{children:`"permission" (string): Права доступа на файл (в формате UNIX-подобной строки, например, "0755").`}),`
`]}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsx)(`span`,{id:`method_setApiKey`}),`
`,(0,n.jsx)(t.h3,{id:`setapikey`,children:`setApiKey`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`public setApiKey(string  api_key) : void`})})})})}),`
`,(0,n.jsx)(t.h5,{id:`свойства-13`,children:`Свойства:`}),`
`,(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`Название`}),(0,n.jsx)(t.th,{children:`Тип`}),(0,n.jsx)(t.th,{children:`По умолчанию`})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:`$api_key`})}),(0,n.jsx)(t.td,{children:`string`}),(0,n.jsx)(t.td,{})]})})]}),`
`,(0,n.jsx)(t.h5,{id:`возвращает-21`,children:`Возвращает:`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`void`})})})})}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsx)(`span`,{id:`method_setCacheFolder`}),`
`,(0,n.jsx)(t.h3,{id:`setcachefolder`,children:`setCacheFolder`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`public setCacheFolder(string  cache_folder) : void`})})})})}),`
`,(0,n.jsx)(t.h5,{id:`свойства-14`,children:`Свойства:`}),`
`,(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`Название`}),(0,n.jsx)(t.th,{children:`Тип`}),(0,n.jsx)(t.th,{children:`По умолчанию`})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:`$cache_folder`})}),(0,n.jsx)(t.td,{children:`string`}),(0,n.jsx)(t.td,{})]})})]}),`
`,(0,n.jsx)(t.h5,{id:`возвращает-22`,children:`Возвращает:`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`void`})})})})}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsx)(`span`,{id:`method_setPrefix`}),`
`,(0,n.jsx)(t.h3,{id:`setprefix`,children:`setPrefix`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`public setPrefix(string|null  name = null) : void`})})})})}),`
`,(0,n.jsx)(t.h5,{id:`краткое-содержание-18`,children:`Краткое содержание`}),`
`,(0,n.jsx)(t.p,{children:`Устанавливает префикс для использования в загрузке данных.`}),`
`,(0,n.jsx)(t.h5,{id:`описание-15`,children:`Описание`}),`
`,(0,n.jsxs)(t.p,{children:[`Если переданное имя соответствует значениям "users" или "usergroup",
то префикс устанавливается в значение константы `,(0,n.jsx)(t.code,{children:`USERPREFIX`}),`.
В противном случае используется значение по умолчанию из константы `,(0,n.jsx)(t.code,{children:`PREFIX`}),`.`]}),`
`,(0,n.jsx)(t.h5,{id:`свойства-15`,children:`Свойства:`}),`
`,(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`Название`}),(0,n.jsx)(t.th,{children:`Тип`}),(0,n.jsx)(t.th,{children:`По умолчанию`})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:`$name`})}),(0,n.jsx)(t.td,{children:`string|null`}),(0,n.jsx)(t.td,{children:`null`})]})})]}),`
`,(0,n.jsx)(t.h5,{id:`возвращает-23`,children:`Возвращает:`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`void`})})})})}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsx)(`span`,{id:`method_setRecourceId`}),`
`,(0,n.jsx)(t.h3,{id:`setrecourceid`,children:`setRecourceId`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`public setRecourceId(int  recource_id) : void`})})})})}),`
`,(0,n.jsx)(t.h5,{id:`свойства-16`,children:`Свойства:`}),`
`,(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`Название`}),(0,n.jsx)(t.th,{children:`Тип`}),(0,n.jsx)(t.th,{children:`По умолчанию`})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:`$recource_id`})}),(0,n.jsx)(t.td,{children:`int`}),(0,n.jsx)(t.td,{})]})})]}),`
`,(0,n.jsx)(t.h5,{id:`возвращает-24`,children:`Возвращает:`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`void`})})})})}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsx)(`span`,{id:`method_setUpdateUrl`}),`
`,(0,n.jsx)(t.h3,{id:`setupdateurl`,children:`setUpdateUrl`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`public setUpdateUrl(string  update_url) : void`})})})})}),`
`,(0,n.jsx)(t.h5,{id:`свойства-17`,children:`Свойства:`}),`
`,(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`Название`}),(0,n.jsx)(t.th,{children:`Тип`}),(0,n.jsx)(t.th,{children:`По умолчанию`})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:`$update_url`})}),(0,n.jsx)(t.td,{children:`string`}),(0,n.jsx)(t.td,{})]})})]}),`
`,(0,n.jsx)(t.h5,{id:`возвращает-25`,children:`Возвращает:`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`void`})})})})}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsx)(`span`,{id:`method_fetchFileContent`}),`
`,(0,n.jsx)(t.h3,{id:`fetchfilecontent`,children:`fetchFileContent`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`private fetchFileContent(array  data) : string|null`})})})})}),`
`,(0,n.jsx)(t.h5,{id:`краткое-содержание-19`,children:`Краткое содержание`}),`
`,(0,n.jsx)(t.p,{children:`Получает содержимое файла по указанным ссылкам.`}),`
`,(0,n.jsx)(t.h5,{id:`описание-16`,children:`Описание`}),`
`,(0,n.jsxs)(t.p,{children:[`Метод пытается загрузить содержимое файла с основной (`,(0,n.jsx)(t.code,{children:`link`}),`) и,
при необходимости, с альтернативной (`,(0,n.jsx)(t.code,{children:`alt`}),`) ссылки, если содержимое
по основной ссылке пустое.`]}),`
`,(0,n.jsx)(t.h5,{id:`свойства-18`,children:`Свойства:`}),`
`,(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`Название`}),(0,n.jsx)(t.th,{children:`Тип`}),(0,n.jsx)(t.th,{children:`По умолчанию`})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:`$data`})}),(0,n.jsx)(t.td,{children:`array`}),(0,n.jsx)(t.td,{})]})})]}),`
`,(0,n.jsx)(t.h5,{id:`возвращает-26`,children:`Возвращает:`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`string|null`})})})})}),`
`,(0,n.jsx)(t.p,{children:`Возвращает содержимое файла, либо null, если
не удалось загрузить файл.`}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsx)(`span`,{id:`method_generateFileMetadata`}),`
`,(0,n.jsx)(t.h3,{id:`generatefilemetadata`,children:`generateFileMetadata`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`private generateFileMetadata(string  file_path) : array`})})})})}),`
`,(0,n.jsx)(t.h5,{id:`краткое-содержание-20`,children:`Краткое содержание`}),`
`,(0,n.jsx)(t.p,{children:`Генерирует метаданные для указанного файла.`}),`
`,(0,n.jsx)(t.h5,{id:`свойства-19`,children:`Свойства:`}),`
`,(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`Название`}),(0,n.jsx)(t.th,{children:`Тип`}),(0,n.jsx)(t.th,{children:`По умолчанию`})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:`$file_path`})}),(0,n.jsx)(t.td,{children:`string`}),(0,n.jsx)(t.td,{})]})})]}),`
`,(0,n.jsx)(t.h5,{id:`ошибки-11`,children:`Ошибки:`}),`
`,(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`Тип`}),(0,n.jsx)(t.th,{children:`Описание`})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`\\RuntimeException`}),(0,n.jsx)(t.td,{children:`Если файл не существует или недоступен.`})]})})]}),`
`,(0,n.jsx)(t.h5,{id:`возвращает-27`,children:`Возвращает:`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`array`})})})})}),`
`,(0,n.jsx)(t.p,{children:`Ассоциативный массив, содержащий следующую информацию о файле:`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsx)(t.li,{children:`"realpath" (string|null): Абсолютный путь до файла.`}),`
`,(0,n.jsx)(t.li,{children:`"dirname" (string): Путь к директории, содержащей файл.`}),`
`,(0,n.jsx)(t.li,{children:`"basename" (string): Имя файла с расширением.`}),`
`,(0,n.jsx)(t.li,{children:`"filename" (string): Имя файла без расширения.`}),`
`,(0,n.jsx)(t.li,{children:`"extension" (string|null): Расширение файла.`}),`
`,(0,n.jsx)(t.li,{children:`"mime" (string): MIME-тип файла.`}),`
`,(0,n.jsx)(t.li,{children:`"encoding" (string): Кодировка файла.`}),`
`,(0,n.jsx)(t.li,{children:`"size" (int): Размер файла в байтах.`}),`
`,(0,n.jsx)(t.li,{children:`"size_string" (string): Читаемое представление размера файла (например, "10.5 KB").`}),`
`,(0,n.jsx)(t.li,{children:`"atime" (int): Временная метка последнего доступа к файлу.`}),`
`,(0,n.jsx)(t.li,{children:`"mtime" (int): Временная метка последней модификации файла.`}),`
`,(0,n.jsx)(t.li,{children:`"permission" (string): Права доступа к файлу (например, "0755").`}),`
`]}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsx)(`span`,{id:`method_parse_assets`}),`
`,(0,n.jsx)(t.h3,{id:`parse_assets`,children:`parse_assets`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`private parse_assets() : void`})})})})}),`
`,(0,n.jsx)(t.h5,{id:`краткое-содержание-21`,children:`Краткое содержание`}),`
`,(0,n.jsx)(t.p,{children:`Парсит данные о ресурсах (assets), проверяет наличие отсутствующих или обновленных,
и обновляет информацию. Также сохраняет актуальные данные в локальный файл ресурсов.`}),`
`,(0,n.jsx)(t.h5,{id:`описание-17`,children:`Описание`}),`
`,(0,n.jsx)(t.p,{children:`Процесс включает следующие этапы:`}),`
`,(0,n.jsxs)(t.ol,{children:[`
`,(0,n.jsxs)(t.li,{children:[`Получение списка локальных файлов и их данных через метод `,(0,n.jsx)(t.code,{children:`prepare_assets`}),`.`]}),`
`,(0,n.jsx)(t.li,{children:`Получение данных об удаленных ресурсах через URL.`}),`
`,(0,n.jsx)(t.li,{children:`Сравнение данных о хэшах локальных и удаленных ресурсов.`}),`
`,(0,n.jsx)(t.li,{children:`Сохранение недостающих или обновленных ресурсов в локальное хранилище.`}),`
`,(0,n.jsx)(t.li,{children:`Запись актуализированных данных в локальный JSON-файл.`}),`
`]}),`
`,(0,n.jsx)(t.h5,{id:`смотри-так-же-15`,children:`Смотри так-же:`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`./AssetsChecker#method_save_asset`,children:`\\AssetsChecker::save_asset()`})}),`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`./AssetsChecker#method_prepare_assets`,children:`\\AssetsChecker::prepare_assets()`})}),`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`./DataManager#method_dirToArray`,children:`\\DataManager::dirToArray()`})}),`
`]}),`
`,(0,n.jsx)(t.h5,{id:`ошибки-12`,children:`Ошибки:`}),`
`,(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`Тип`}),(0,n.jsx)(t.th,{children:`Описание`})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`\\JsonException|\\Throwable`}),(0,n.jsx)(t.td,{children:`Исключение выбрасывается в случае ошибки при работе с JSON.`})]})})]}),`
`,(0,n.jsx)(t.h5,{id:`возвращает-28`,children:`Возвращает:`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`void`})})})})}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsx)(`span`,{id:`method_prepare_assets`}),`
`,(0,n.jsx)(t.h3,{id:`prepare_assets`,children:`prepare_assets`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`private prepare_assets(array  arr, string  dir = __DIR__) : void`})})})})}),`
`,(0,n.jsx)(t.h5,{id:`краткое-содержание-22`,children:`Краткое содержание`}),`
`,(0,n.jsxs)(t.p,{children:[`Подготавливает данные о файлах, расположенных на локальном сервере, и сохраняет их в массив `,(0,n.jsx)(t.code,{children:`assets_arr`}),`.`]}),`
`,(0,n.jsx)(t.h5,{id:`описание-18`,children:`Описание`}),`
`,(0,n.jsxs)(t.p,{children:[`Метод рекурсивно обрабатывает массив с файлами и создает запись для каждого файла в конечном массиве `,(0,n.jsx)(t.code,{children:`assets_arr`}),`,
содержащую путь, имя файла и его хэш.`]}),`
`,(0,n.jsx)(t.h5,{id:`свойства-20`,children:`Свойства:`}),`
`,(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`Название`}),(0,n.jsx)(t.th,{children:`Тип`}),(0,n.jsx)(t.th,{children:`По умолчанию`})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:`$arr`})}),(0,n.jsx)(t.td,{children:`array`}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:`$dir`})}),(0,n.jsx)(t.td,{children:`string`}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:`DIR`})})]})]})]}),`
`,(0,n.jsx)(t.h5,{id:`возвращает-29`,children:`Возвращает:`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`void`})})})})}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsx)(`span`,{id:`method_saveFile`}),`
`,(0,n.jsx)(t.h3,{id:`savefile`,children:`saveFile`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`private saveFile(string  file_path, string  content, string  file) : bool`})})})})}),`
`,(0,n.jsx)(t.h5,{id:`краткое-содержание-23`,children:`Краткое содержание`}),`
`,(0,n.jsx)(t.p,{children:`Сохраняет содержимое в файл и логирует сообщение при возникновении ошибки.`}),`
`,(0,n.jsx)(t.h5,{id:`описание-19`,children:`Описание`}),`
`,(0,n.jsx)(t.p,{children:`Метод выполняет запись переданного содержимого в указанный путь файла,
проверяет, доступен ли файл для записи, и логирует ошибку в случае неудачи.`}),`
`,(0,n.jsx)(t.h5,{id:`смотри-так-же-16`,children:`Смотри так-же:`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`./LogGenerator#method_generateLog`,children:`\\LogGenerator::generateLog()`})}),`
`]}),`
`,(0,n.jsx)(t.h5,{id:`свойства-21`,children:`Свойства:`}),`
`,(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`Название`}),(0,n.jsx)(t.th,{children:`Тип`}),(0,n.jsx)(t.th,{children:`По умолчанию`})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:`$file_path`})}),(0,n.jsx)(t.td,{children:`string`}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:`$content`})}),(0,n.jsx)(t.td,{children:`string`}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:`$file`})}),(0,n.jsx)(t.td,{children:`string`}),(0,n.jsx)(t.td,{})]})]})]}),`
`,(0,n.jsx)(t.h5,{id:`ошибки-13`,children:`Ошибки:`}),`
`,(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`Тип`}),(0,n.jsx)(t.th,{children:`Описание`})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`\\Throwable`}),(0,n.jsx)(t.td,{})]})})]}),`
`,(0,n.jsx)(t.h5,{id:`возвращает-30`,children:`Возвращает:`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`bool`})})})})}),`
`,(0,n.jsx)(t.p,{children:`Возвращает true, если файл успешно сохранён, или false — в случае ошибки.`}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsx)(`span`,{id:`method_set_cache`}),`
`,(0,n.jsx)(t.h3,{id:`set_cache`,children:`set_cache`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`private set_cache(string  type, string  name, mixed  data) : void`})})})})}),`
`,(0,n.jsx)(t.h5,{id:`краткое-содержание-24`,children:`Краткое содержание`}),`
`,(0,n.jsx)(t.p,{children:`Сохраняет данные в кеш.`}),`
`,(0,n.jsx)(t.h5,{id:`описание-20`,children:`Описание`}),`
`,(0,n.jsxs)(t.p,{children:[`Метод записывает данные в кеш, используя указанный тип и имя.
Для сохранения данных вызывается метод `,(0,n.jsx)(t.code,{children:`CacheControl::setCache`}),`, который
обрабатывает директорию и имя файла, записывает данные в формате JSON
и устанавливает необходимые права доступа к файлу.`]}),`
`,(0,n.jsx)(t.h5,{id:`смотри-так-же-17`,children:`Смотри так-же:`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`./CacheControl#method_setCache`,children:`\\CacheControl::setCache()`})}),`
`]}),`
`,(0,n.jsx)(t.h5,{id:`свойства-22`,children:`Свойства:`}),`
`,(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`Название`}),(0,n.jsx)(t.th,{children:`Тип`}),(0,n.jsx)(t.th,{children:`По умолчанию`})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:`$type`})}),(0,n.jsx)(t.td,{children:`string`}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:`$name`})}),(0,n.jsx)(t.td,{children:`string`}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:`$data`})}),(0,n.jsx)(t.td,{children:`mixed`}),(0,n.jsx)(t.td,{})]})]})]}),`
`,(0,n.jsx)(t.h5,{id:`ошибки-14`,children:`Ошибки:`}),`
`,(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`Тип`}),(0,n.jsx)(t.th,{children:`Описание`})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`\\JsonException`}),(0,n.jsx)(t.td,{})]})})]}),`
`,(0,n.jsx)(t.h5,{id:`возвращает-31`,children:`Возвращает:`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`void`})})})})})]})}function l(e={}){let{wrapper:t}=e.components||{};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}export{a as _markdown,l as default,r as frontmatter,i as lastModified,o as structuredData,s as toc};