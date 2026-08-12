import{r as e}from"./rolldown-runtime-QTnfLwEv.js";import{t}from"./jsx-runtime-By8HlURe.js";var n=e(t()),r={title:`Класс: Admin`,description:`Документация по плагину класс: admin для DLE.`},i=new Date(1786541452e3),a=`

## Краткое содержание: [#краткое-содержание]

Класс Admin предназначен для управления административной панелью проекта.

## Описание: [#описание]

Содержит функционал для подключения файлов CSS и JS, настройки переменных
окружения, работы с меню и шапками страниц. Использует трейты для
загрузки данных, взаимодействия с DLE и проверки файлов ресурсов.

***

### Свойства [#свойства]

* protected $[postXfieldKeys](#property_postXfieldKeys)
* protected $[userXfieldKeys](#property_userXfieldKeys)
* private $[asset\\_file](#property_asset_file)
* private $[assets\\_arr](#property_assets_arr)
* private $[assets\\_dir](#property_assets_dir)
* private $[breadcrumb](#property_breadcrumb)
* private $[cache\\_folder](#property_cache_folder)
* private $[cssArr](#property_cssArr)
* private $[jsArr](#property_jsArr)
* private $[links](#property_links)
* private $[prefix](#property_prefix)
* private $[variables](#property_variables)

***

### Методы [#методы]

* public [\\_\\_construct()](#method___construct)
* public [checkAssets()](#method_checkAssets)
* public [clear\\_cache()](#method_clear_cache)
* public [generate\\_link()](#method_generate_link)
* public [get\\_cache()](#method_get_cache)
* public [get\\_used\\_xfields()](#method_get_used_xfields)
* public [getBreadcrumb()](#method_getBreadcrumb)
* public [getCacheFolder()](#method_getCacheFolder)
* public [getCats()](#method_getCats)
* public [getLinkInfo()](#method_getLinkInfo)
* public [getLinkName()](#method_getLinkName)
* public [getLinkUrl()](#method_getLinkUrl)
* public [getPrefix()](#method_getPrefix)
* public [getUser()](#method_getUser)
* public [getUserGroups()](#method_getUserGroups)
* public [getUsers()](#method_getUsers)
* public [getVariables()](#method_getVariables)
* public [getXfieldInfo()](#method_getXfieldInfo)
* public [htmlStatic()](#method_htmlStatic)
* public [load\\_data()](#method_load_data)
* public [loadXfields()](#method_loadXfields)
* public [parseAssets()](#method_parseAssets)
* public [save\\_asset()](#method_save_asset)
* public [setAuthor()](#method_setAuthor)
* public [setBreadcrumb()](#method_setBreadcrumb)
* public [setCacheFolder()](#method_setCacheFolder)
* public [setCss()](#method_setCss)
* public [setJs()](#method_setJs)
* public [setLink()](#method_setLink)
* public [setLinks()](#method_setLinks)
* public [setPrefix()](#method_setPrefix)
* public [setVar()](#method_setVar)
* public [setVars()](#method_setVars)
* public [upload\\_file()](#method_upload_file)
* private [fetchFileContent()](#method_fetchFileContent)
* private [generateFileMetadata()](#method_generateFileMetadata)
* private [parse\\_assets()](#method_parse_assets)
* private [prepare\\_assets()](#method_prepare_assets)
* private [saveFile()](#method_saveFile)
* private [set\\_cache()](#method_set_cache)
* private [setDefaultAuthor()](#method_setDefaultAuthor)

***

### Подробности [#подробности]

* Путь: engine/inc/maharder/\\_includes/classes/Admin.php
* Использованные трейты:
  * [\\DataLoader](./DataLoader)
  * [\\DleData](./DleData)
  * [\\AssetsChecker](./AssetsChecker)

***

## Свойства [#свойства-1]

<span id="property_postXfieldKeys" />

#### protected $postXfieldKeys : array [#protected-postxfieldkeys--array]

***

**Тип:** <abbr title="array">массив</abbr>

**Подробности:**

<span id="property_userXfieldKeys" />

#### protected $userXfieldKeys : array [#protected-userxfieldkeys--array]

***

**Тип:** <abbr title="array">массив</abbr>

**Подробности:**

<span id="property_asset_file" />

#### private $asset\\_file : string [#private-asset_file--string]

***

**Краткое содержание**

Файл с информацией и хешами вспомогательных файлов

**Тип:** <abbr title="string">текст</abbr>

**Подробности:**

<span id="property_assets_arr" />

#### private $assets\\_arr : array [#private-assets_arr--array]

***

**Краткое содержание**

Массив со всеми данными для обновления стилей и скриптов

**Тип:** <abbr title="array">массив</abbr>

**Подробности:**

<span id="property_assets_dir" />

#### private $assets\\_dir : string [#private-assets_dir--string]

***

**Краткое содержание**

Путь до всех вспомогательных файлов

**Тип:** <abbr title="string">текст</abbr>

**Подробности:**

<span id="property_breadcrumb" />

#### private $breadcrumb : array [#private-breadcrumb--array]

***

**Краткое содержание**

Хранит данные для построения хлебных крошек в административной панели.

**Тип:** <abbr title="array">массив</abbr>

**Подробности:**

* Смотри так-же:
  * [Используется для установки значений хлебных крошек.](#method_setBreadcrumb)
  * [Используется для получения текущих значений хлебных крошек.](#method_getBreadcrumb)

<span id="property_cache_folder" />

#### private $cache\\_folder : string [#private-cache_folder--string]

***

**Краткое содержание**

Папка кеша

**Тип:** <abbr title="string">текст</abbr>

**Подробности:**

<span id="property_cssArr" />

#### private $cssArr : array [#private-cssarr--array]

***

**Краткое содержание**

Список CSS-файлов, используемых в разделе администратора.

**Тип:** <abbr title="array">массив</abbr>

**Подробности:**

* Смотри так-же:
  * [Метод для добавления CSS-файлов.](#method_setCss)

##### Tags [#tags]

| Тэг    | Версия | Описание                                                          |
| ------ | ------ | ----------------------------------------------------------------- |
| global |        | string URL Глобальная переменная, содержащая базовый URL проекта. |

<span id="property_jsArr" />

#### private $jsArr : array [#private-jsarr--array]

***

**Краткое содержание**

Массив со скриптами, которые используются в административной панели.

***Описание***

Скрипты представляют собой коллекцию путей к JavaScript-файлам,
необходимых для работы функциональных компонентов интерфейса.

**Тип:** <abbr title="array">массив</abbr>
Массив содержит ссылки на JavaScript-файлы,
таких, как библиотеки, редактор SCEditor и его плагины,
а также прочие утилиты для интерфейса административной панели.
&#x2A;*Подробности:**

* Смотри так-же:
  * [Метод для добавления пользовательских JavaScript-файлов.](#method_setJs)

##### Tags [#tags-1]

| Тэг    | Версия | Описание                                                               |
| ------ | ------ | ---------------------------------------------------------------------- |
| global |        | string URL Глобальная переменная, определяющая базовый URL приложения. |

<span id="property_links" />

#### private $links : array [#private-links--array]

***

**Тип:** <abbr title="array">массив</abbr>

**Подробности:**

<span id="property_prefix" />

#### private $prefix : ?string [#private-prefix--string]

***

**Тип:** <abbr title="?string">текст или null</abbr>

**Подробности:**

<span id="property_variables" />

#### private $variables : array [#private-variables--array]

***

**Краткое содержание**

Массив с различными переменными для шаблонизатора.

***Описание***

Используется для настройки и передачи данных, таких как пути к стилям и скриптам, информация об авторе,
ссылки для хлебных крошек, а также настройки меню и другие параметры.

Описание ключей:

* **css\\_dir**: строка, папка со стилями.
* **js\\_dir**: строка, папка со скриптами.
* **css**: массив, содержит список подключаемых стилей.
* **js**: массив, содержит список подключаемых скриптов.
* **url**: строка, ссылка для корректного отображения стилей и скриптов на сайте.
* **lic\\_link**: строка, ссылка на пользовательское соглашение.
* **author**: массив, информация об авторе модуля:
  * **author.name**: строка, имя автора.
  * **author.contacts**: массив, список контактной информации автора:
    * **author.contacts.name**: строка, название контактного средства (например, E-Mail).
    * **author.contacts.link**: строка, ссылка для связи (например, mailto:[dev@devcraft.club](mailto:dev@devcraft.club)).
  * **author.donate**: массив, данные о поддержке:
    * **author.donate.name**: строка, название платёжной системы (например, PayPal).
    * **author.donate.value**: строка, описание платёжной системы (например, paypal.me/MaximH).
    * **author.donate.link**: строка, ссылка платёжной системы (например, [https://paypal.me/MaximH](https://paypal.me/MaximH)).
* **menu**: массив, ссылки для меню сайта.
* **breadcrumbs**: массив, ссылки на хлебные крошки.

**Тип:** <abbr title="array">массив</abbr>
Значение свойств этой переменной задаётся по умолчанию или изменяется через методы класса.

**Подробности:**

* Смотри так-же:
  * [Для установки/обновления одного или нескольких значений.](#method_setVar)
  * [Для получения массива переменных.](#method_getVariables)
  * [Для настройки информации об авторе.](#method_setDefaultAuthor)
  * [Для присвоения ссылок (например, для меню или хлебных крошек).](#method_setLinks)
  * [\\Author](./Author)

***

## Методы [#методы-1]

<span id="method___construct" />

### \\_\\_construct [#__construct]

\`\`\`
public __construct() : mixed
\`\`\`

##### Краткое содержание [#краткое-содержание-1]

Конструктор класса.

##### Описание [#описание-1]

Инициализирует параметры для начальной загрузки системы,
включая настройки файлов CSS и JS, меню, темы и создание
базовых директорий кеша.

##### Смотри так-же: [#смотри-так-же]

* [\\setVar()](#method_setvar)
* [\\htmlStatic()](#method_htmlstatic)
* [\\DataManager::getConfig()](./DataManager#method_getConfig)
* [\\DataManager::createDir()](./DataManager#method_createDir)

##### Ошибки: [#ошибки]

| Тип            | Описание   |                                                                     |
| -------------- | ---------- | ------------------------------------------------------------------- |
| \\JsonException | \\Throwable | Генерируется при ошибках обработки JSON, связанных с конфигурацией. |

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

##### Смотри так-же: [#смотри-так-же-1]

* [\\DataManager::dirToArray()](./DataManager#method_dirToArray)
* [\\self::prepare\\_assets()](#method_prepare_assets)

##### Свойства: [#свойства-2]

| Название     | Тип  | По умолчанию |
| ------------ | ---- | ------------ |
| **$rewrite** | bool | false        |

##### Ошибки: [#ошибки-1]

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

<span id="method_clear_cache" />

### clear\\_cache [#clear_cache]

\`\`\`
public clear_cache(string  type = "all") : void
\`\`\`

##### Краткое содержание [#краткое-содержание-3]

Очищает кеш указанного типа.

##### Описание [#описание-3]

Метод позволяет очистить кеш для переданного типа или полностью, если тип "all".
Использует внутренний метод CacheControl::clearCache для выполнения операции очистки.

##### Смотри так-же: [#смотри-так-же-2]

* [\\CacheControl::clearCache()](./CacheControl#method_clearCache)

##### Свойства: [#свойства-3]

| Название  | Тип    | По умолчанию |
| --------- | ------ | ------------ |
| **$type** | string | 'all'        |

##### Возвращает: [#возвращает-2]

\`\`\`
void
\`\`\`

***

<span id="method_generate_link" />

### generate\\_link [#generate_link]

\`\`\`
static public generate_link(string  name, string  href, string  type = "link", array  children = [], string|null  data_val = null) : \\AdminLink
\`\`\`

##### Краткое содержание [#краткое-содержание-4]

Создаёт экземпляр класса AdminLink с данными о ссылке.

##### Смотри так-же: [#смотри-так-же-3]

* [\\AdminLink](./AdminLink)

##### Свойства: [#свойства-4]

| Название       | Тип           | По умолчанию |
| -------------- | ------------- | ------------ |
| **$name**      | string        |              |
| **$href**      | string        |              |
| **$type**      | string        | "link"       |
| **$children**  | array         | \\[]          |
| **$data\\_val** | string\\| null | null         |

##### Возвращает: [#возвращает-3]

\`\`\`
\\AdminLink
\`\`\`

Объект класса AdminLink с заданными параметрами.

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

##### Смотри так-же: [#смотри-так-же-4]

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

##### Смотри так-же: [#смотри-так-же-5]

* [\\load\\_data()](./DataLoader#method_load_data)

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

<span id="method_getBreadcrumb" />

### getBreadcrumb [#getbreadcrumb]

\`\`\`
public getBreadcrumb() : array
\`\`\`

##### Краткое содержание [#краткое-содержание-7]

Возвращает текущий массив данных хлебных крошек.

##### Смотри так-же: [#смотри-так-же-6]

* [\\Admin::$breadcrumb](#property_breadcrumb)

##### Возвращает: [#возвращает-6]

\`\`\`
array
\`\`\`

Массив хлебных крошек.

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

##### Краткое содержание [#краткое-содержание-8]

Возвращает список категорий в виде ассоциативного массива, где ключом является ID категории, а значением — её
название.

##### Описание [#описание-6]

Метод загружает данные из базы данных, используя метод \`load_data\`, и сортирует их по названию категории в
алфавитном порядке. В результате возвращается массив с ID категорий в качестве ключей и названиями категорий в
качестве значений.

##### Смотри так-же: [#смотри-так-же-7]

* [\\load\\_data()](./DataLoader#method_load_data)

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

<span id="method_getLinkInfo" />

### getLinkInfo [#getlinkinfo]

\`\`\`
public getLinkInfo(string  name) : bool|\\AdminLink
\`\`\`

##### Краткое содержание [#краткое-содержание-9]

Возвращает информацию о ссылке из меню.

##### Свойства: [#свойства-7]

| Название  | Тип    | По умолчанию |
| --------- | ------ | ------------ |
| **$name** | string |              |

##### Возвращает: [#возвращает-9]

\`\`\`
bool|\\AdminLink
\`\`\`

Объект AdminLink, если ссылка найдена, или false, если ссылка отсутствует.

***

<span id="method_getLinkName" />

### getLinkName [#getlinkname]

\`\`\`
public getLinkName(string  name) : string|false
\`\`\`

##### Краткое содержание [#краткое-содержание-10]

Возвращает имя ссылки на основе предоставленного имени.

##### Описание [#описание-7]

Метод извлекает информацию о ссылке с помощью метода getLinkInfo().
Если информация найдена, возвращается имя ссылки через метод getName().
В противном случае возвращается false.

##### Смотри так-же: [#смотри-так-же-8]

* [\\getLinkInfo()](#method_getLinkInfo)
* [\\AdminLink::getName()](./AdminLink#method_getName)

##### Свойства: [#свойства-8]

| Название  | Тип    | По умолчанию |
| --------- | ------ | ------------ |
| **$name** | string |              |

##### Возвращает: [#возвращает-10]

\`\`\`
string|false
\`\`\`

Имя ссылки или false, если информация не найдена.

***

<span id="method_getLinkUrl" />

### getLinkUrl [#getlinkurl]

\`\`\`
public getLinkUrl(string  name) : string|false
\`\`\`

##### Краткое содержание [#краткое-содержание-11]

Возвращает URL ссылки по указанному имени.

##### Описание [#описание-8]

Метод извлекает информацию о ссылке с помощью метода getLinkInfo().
Если информация найдена, возвращается URL ссылки.
Если информация отсутствует, возвращается false.

##### Смотри так-же: [#смотри-так-же-9]

* [\\self::getLinkInfo()](#method_getLinkInfo)
* [\\AdminLink::getLink()](./AdminLink#method_getLink)

##### Свойства: [#свойства-9]

| Название  | Тип    | По умолчанию |
| --------- | ------ | ------------ |
| **$name** | string |              |

##### Возвращает: [#возвращает-11]

\`\`\`
string|false
\`\`\`

URL ссылки, если информация доступна, или false, если ссылка не найдена.

***

<span id="method_getPrefix" />

### getPrefix [#getprefix]

\`\`\`
public getPrefix() : string
\`\`\`

##### Краткое содержание [#краткое-содержание-12]

Возвращает префикс для использования в SQL-запросах.

##### Описание [#описание-9]

Метод проверяет, установлен ли префикс. Если префикс не задан, он вызывает метод \`setPrefix()\`,
чтобы установить его значение. Затем возвращает установившийся префикс.

##### Смотри так-же: [#смотри-так-же-10]

* [\\DataLoader::$prefix](./DataLoader#property_prefix)
* [\\DataLoader::setPrefix()](./DataLoader#method_setPrefix)

##### Возвращает: [#возвращает-12]

\`\`\`
string
\`\`\`

Префикс, используемый для построения SQL-запросов.

***

<span id="method_getUser" />

### getUser [#getuser]

\`\`\`
public getUser(int|null  id = null, string|null  uname = null) : array|false
\`\`\`

##### Краткое содержание [#краткое-содержание-13]

Получает данные пользователя по ID или имени пользователя.

##### Описание [#описание-10]

Если ни идентификатор пользователя, ни имя пользователя не переданы, метод возвращает \`false\`.
В противном случае выполняется поиск данных в таблице \`users\` с использованием указанного критерия.

##### Смотри так-же: [#смотри-так-же-11]

* [\\load\\_data()](./DataLoader#method_load_data)

##### Свойства: [#свойства-10]

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

##### Краткое содержание [#краткое-содержание-14]

Получает список групп пользователей в формате массива с идентификаторами и именами групп.

##### Описание [#описание-11]

Метод обращается к функции \`load_data\` для загрузки данных о группах пользователей
из таблицы "usergroups" с выборкой полей \`id\` и \`group_name\`,
затем преобразует результат в ассоциативный массив с ключами — идентификаторами групп,
и значениями — именами групп, отсортированными по названию группы в алфавитном порядке (ASC).

##### Смотри так-же: [#смотри-так-же-12]

* [\\load\\_data()](./DataLoader#method_load_data)

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

##### Краткое содержание [#краткое-содержание-15]

Возвращает список пользователей из базы данных.

##### Описание [#описание-12]

Метод загружает данные о пользователях, используя метод \`load_data\`,
и возвращает массив, где ключами являются идентификаторы пользователей,
а значениями — их имена, отсортированные в алфавитном порядке.

##### Смотри так-же: [#смотри-так-же-13]

* [\\load\\_data()](./DataLoader#method_load_data)

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

<span id="method_getVariables" />

### getVariables [#getvariables]

\`\`\`
public getVariables(string|null  name = null) : array
\`\`\`

##### Краткое содержание [#краткое-содержание-16]

Получает массив переменных, связанных с модулем.

##### Описание [#описание-13]

Метод возвращает ассоциативный массив с переменными, используемыми в модуле,
такими как параметры путей (CSS, JS), массивы подключаемых файлов, дополнительные ссылки, меню
и настройки. Если передано название переменной, метод возвращает только значение данной переменной.

##### Смотри так-же: [#смотри-так-же-14]

* [\\Admin::$variables](#property_variables)
* [\\Admin::setVars()](#method_setVars)
* [\\Admin::setLinks()](#method_setLinks)

##### Свойства: [#свойства-11]

| Название  | Тип          | По умолчанию |
| --------- | ------------ | ------------ |
| **$name** | string\\|null | null         |

##### Возвращает: [#возвращает-16]

\`\`\`
array
\`\`\`

Ассоциативный массив переменных модуля или значение конкретной переменной.

***

<span id="method_getXfieldInfo" />

### getXfieldInfo [#getxfieldinfo]

\`\`\`
public getXfieldInfo(string  name, string  type = &#039;post&#039;) : array|null
\`\`\`

##### Краткое содержание [#краткое-содержание-17]

Возвращает информацию о дополнительном поле (xfield) на основании его имени и типа.

##### Смотри так-же: [#смотри-так-же-15]

* [\\loadXfields()](./DataLoader#method_loadXfields)
* [\\CacheControl::getCache()](./CacheControl#method_getCache)

##### Свойства: [#свойства-12]

| Название  | Тип    | По умолчанию |
| --------- | ------ | ------------ |
| **$name** | string |              |
| **$type** | string | 'post'       |

##### Возвращает: [#возвращает-17]

\`\`\`
array|null
\`\`\`

Возвращает информацию о поле в виде ассоциативного массива, либо null,
если поле не найдено.

***

<span id="method_htmlStatic" />

### htmlStatic [#htmlstatic]

\`\`\`
public htmlStatic(string|array  data, string  view = "html", string  type = "css") : array
\`\`\`

##### Краткое содержание [#краткое-содержание-18]

Обрабатывает массив или строку с данными ссылок на статичные файлы и формирует HTML-разметку
или массив ссылок в зависимости от переданных параметров.

##### Описание [#описание-14]

Формирование HTML производится для типов файлов \`css\` и \`js\`, добавляя соответствующие теги
(\`<link />\` или \`<script>\`). В случае, если используются ссылки, возвращается только массив ссылок.

##### Смотри так-же: [#смотри-так-же-16]

* [\\Admin::$cssArr](#property_cssArr)
* [\\Admin::$jsArr](#property_jsArr)
* [\\Admin::setCss()](#method_setCss)
* [\\Admin::setJs()](#method_setJs)
* [\\Admin::\\_\\_construct()](#method___construct)

##### Свойства: [#свойства-13]

| Название  | Тип           | По умолчанию |
| --------- | ------------- | ------------ |
| **$data** | string\\|array |              |
| **$view** | string        | 'html'       |
| **$type** | string        | 'css'        |

##### Возвращает: [#возвращает-18]

\`\`\`
array
\`\`\`

Массив с HTML-строками или ссылками в зависимости от параметра \`$view\`.

***

<span id="method_load_data" />

### load\\_data [#load_data]

\`\`\`
public load_data(string  name, mixed  ..._vars) : array
\`\`\`

##### Краткое содержание [#краткое-содержание-19]

Метод загружает данные из базы данных с использованием механизма кеширования.

##### Описание [#описание-15]

Если данные уже закешированы, то они возвращаются из кеша, иначе выполняется запрос
к базе данных, формируется кеш и результат сохраняется на диск.

##### Смотри так-же: [#смотри-так-же-17]

* [\\DataManager::getDb()](./DataManager#method_getDb)
* [\\DataManager::nameArgs()](./DataManager#method_nameArgs)
* [\\DataManager::getComparer()](./DataManager#method_getComparer)
* [\\DataManager::getConfig()](./DataManager#method_getConfig)

##### Свойства: [#свойства-14]

| Название    | Тип    | По умолчанию |
| ----------- | ------ | ------------ |
| **$name**   | string |              |
| **$\\_vars** | mixed  |              |

##### Ошибки: [#ошибки-8]

| Тип            | Описание                                 |
| -------------- | ---------------------------------------- |
| \\JsonException | В случае JSON-ошибок при работе с кешем. |

##### Возвращает: [#возвращает-19]

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

##### Краткое содержание [#краткое-содержание-20]

Загружает дополнительные поля для новостей или профилей пользователей.

##### Описание [#описание-16]

Метод извлекает данные из кэша, либо, при его отсутствии, читает данные из файла конфигурации.
Возвращает ассоциативный массив, где ключами являются названия дополнительных полей, а значениями - их
параметры.
Данные загружаются в зависимости от значения параметра \`$type\`:

* \`"post"\`: данные загружаются из файла \`xfields.txt\`.
* \`"user"\`: данные загружаются из файла \`xprofile.txt\`.
  Ключи массива, формируемого из файла конфигурации, соответствуют предопределённым ключам, указанным
  в свойствах \`userXfieldKeys\` или \`postXfieldKeys\`.

##### Смотри так-же: [#смотри-так-же-18]

* [\\CacheControl::getCache()](./CacheControl#method_getCache)
* [\\CacheControl::setCache()](./CacheControl#method_setCache)

##### Свойства: [#свойства-15]

| Название  | Тип    | По умолчанию |
| --------- | ------ | ------------ |
| **$type** | string | 'post'       |

##### Возвращает: [#возвращает-20]

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

##### Краткое содержание [#краткое-содержание-21]

Выполняет парсинг вспомогательных файлов для управления ассетами.

##### Описание [#описание-17]

Если файл с хешами ассетов существует, то парсинг выполняется только при принудительном запуске.
В случае отсутствия указанного файла производится полное сканирование ассетов.

##### Смотри так-же: [#смотри-так-же-19]

* [\\parse\\_assets()](./AssetsChecker#method_parse_assets)

##### Свойства: [#свойства-16]

| Название   | Тип  | По умолчанию |
| ---------- | ---- | ------------ |
| **$parse** | bool | false        |

##### Ошибки: [#ошибки-9]

| Тип                        | Описание                                           |
| -------------------------- | -------------------------------------------------- |
| \\JsonException\\|\\Throwable | В случае ошибок в процессах обработки JSON-файлов. |

##### Возвращает: [#возвращает-21]

\`\`\`
void
\`\`\`

***

<span id="method_save_asset" />

### save\\_asset [#save_asset]

\`\`\`
public save_asset(array  data, string  file) : array|false
\`\`\`

##### Краткое содержание [#краткое-содержание-22]

Сохраняет файл на сервер и возвращает информацию о нём или false в случае неуспеха.

##### Смотри так-же: [#смотри-так-же-20]

* [\\DataManager::createDir()](./DataManager#method_createDir)
* [\\LogGenerator::generateLog()](./LogGenerator#method_generateLog)
* [\\AssetsChecker::fetchFileContent()](./AssetsChecker#method_fetchFileContent)
* [\\AssetsChecker::saveFile()](./AssetsChecker#method_saveFile)
* [\\AssetsChecker::generateFileMetadata()](./AssetsChecker#method_generateFileMetadata)

##### Свойства: [#свойства-17]

| Название  | Тип    | По умолчанию |
| --------- | ------ | ------------ |
| **$data** | array  |              |
| **$file** | string |              |

##### Ошибки: [#ошибки-10]

| Тип                        | Описание                                                     |
| -------------------------- | ------------------------------------------------------------ |
| \\JsonException\\|\\Throwable | Генерирует исключение, если возникает ошибка обработки JSON. |

##### Возвращает: [#возвращает-22]

\`\`\`
array|false
\`\`\`

Возвращает массив с информацией о сохранённом файле или false, если файл не удалось сохранить.
Массив содержит следующие ключи:

* 'realpath' (string): Полный реальный путь до файла.
* 'dirname' (string): Директория файла.
* 'basename' (string): Имя файла с расширением.
* 'filename' (string): Имя файла без расширения.
* 'extension' (string): Расширение файла.
* 'mime' (string): MIME-тип файла.
* 'encoding' (string): Тип кодирования файла.
* 'size' (int): Размер файла в байтах.
* 'size\\_string' (string): Размер файла в человекочитаемом формате (например, "1.5MB").
* 'atime' (int): Время последнего доступа к файлу (в метках времени Unix).
* 'mtime' (int): Время последней модификации файла (в метках времени Unix).
* 'permission' (string): Права доступа на файл (в формате UNIX-подобной строки, например, "0755").

***

<span id="method_setAuthor" />

### setAuthor [#setauthor]

\`\`\`
public setAuthor(\\Author  autor) : void
\`\`\`

##### Краткое содержание [#краткое-содержание-23]

Устанавливает объект автора в массив переменных.

##### Смотри так-же: [#смотри-так-же-21]

* [\\Author](./Author)

##### Свойства: [#свойства-18]

| Название   | Тип     | По умолчанию |
| ---------- | ------- | ------------ |
| **$autor** | \\Author |              |

##### Возвращает: [#возвращает-23]

\`\`\`
void
\`\`\`

***

<span id="method_setBreadcrumb" />

### setBreadcrumb [#setbreadcrumb]

\`\`\`
public setBreadcrumb(\\BreadCrumb  crumb) : void
\`\`\`

##### Краткое содержание [#краткое-содержание-24]

Добавляет объект хлебной крошки в массив крошек

##### Смотри так-же: [#смотри-так-же-22]

* [\\BreadCrumb](./BreadCrumb)

##### Свойства: [#свойства-19]

| Название   | Тип         | По умолчанию |
| ---------- | ----------- | ------------ |
| **$crumb** | \\BreadCrumb |              |

##### Возвращает: [#возвращает-24]

\`\`\`
void
\`\`\`

***

<span id="method_setCacheFolder" />

### setCacheFolder [#setcachefolder]

\`\`\`
public setCacheFolder(string  cache_folder) : void
\`\`\`

##### Свойства: [#свойства-20]

| Название           | Тип    | По умолчанию |
| ------------------ | ------ | ------------ |
| **$cache\\_folder** | string |              |

##### Возвращает: [#возвращает-25]

\`\`\`
void
\`\`\`

***

<span id="method_setCss" />

### setCss [#setcss]

\`\`\`
public setCss(array|string  css) : void
\`\`\`

##### Краткое содержание [#краткое-содержание-25]

Добавляет новый CSS-файл в массив \`cssArr\` и обновляет соответствующую переменную \`css\`.

##### Описание [#описание-18]

Метод принимает путь или массив путей к CSS-файлам и добавляет их
в массив \`cssArr\`. Впоследствии массив обрабатывается с помощью функции
\`htmlStatic\`, которая генерирует массив HTML-тегов \`&lt;link&gt;\`.
Обновленный массив HTML-тегов записывается в переменную \`css\` через метод \`setVar\`.

##### Смотри так-же: [#смотри-так-же-23]

* [\\Admin::$cssArr](#property_cssArr)
* [\\Admin::setVar](#method_setVar)
* [\\Admin::htmlStatic](#method_htmlStatic)

##### Свойства: [#свойства-21]

| Название | Тип           | По умолчанию |
| -------- | ------------- | ------------ |
| **$css** | array\\|string |              |

##### Возвращает: [#возвращает-26]

\`\`\`
void
\`\`\`

***

<span id="method_setJs" />

### setJs [#setjs]

\`\`\`
public setJs(array|string  js) : void
\`\`\`

##### Краткое содержание [#краткое-содержание-26]

Добавляет новый JavaScript файл в массив \`$jsArr\`.

##### Описание [#описание-19]

Метод принимает один или несколько путей до JavaScript файлов и объединяет их
с массивом \`$jsArr\`. После этого обновляет переменную \`js\` с помощью вызова метода \`htmlStatic\`
для формирования HTML-тегов \`<script>\`, необходимых для подключения этих файлов.

##### Смотри так-же: [#смотри-так-же-24]

* [\\Admin::$jsArr](#property_jsArr)
* [\\Admin::setVar()](#method_setVar)
* [\\Admin::htmlStatic()](#method_htmlStatic)

##### Свойства: [#свойства-22]

| Название | Тип           | По умолчанию |
| -------- | ------------- | ------------ |
| **$js**  | array\\|string |              |

##### Возвращает: [#возвращает-27]

\`\`\`
void
\`\`\`

***

<span id="method_setLink" />

### setLink [#setlink]

\`\`\`
public setLink(\\AdminLink  link, string  parent) : void
\`\`\`

##### Краткое содержание [#краткое-содержание-27]

Устанавливает ссылку в массив меню для указанного родительского элемента.

##### Описание [#описание-20]

Этот метод добавляет объект \`AdminLink\` в массив \`menu\`, вложенный в
переменную \`variables\`, обеспечивая возможность хранения структуры меню
с учетом родительских элементов. Основное назначение метода — организовать
меню по принципу вложенности.

##### Смотри так-же: [#смотри-так-же-25]

* [\\self::$variables](#property_variables)
* [\\self::generate\\_link()](#method_generate_link)

##### Свойства: [#свойства-23]

| Название    | Тип        | По умолчанию |
| ----------- | ---------- | ------------ |
| **$link**   | \\AdminLink |              |
| **$parent** | string     |              |

##### Возвращает: [#возвращает-28]

\`\`\`
void
\`\`\`

***

<span id="method_setLinks" />

### setLinks [#setlinks]

\`\`\`
public setLinks(array  links) : void
\`\`\`

##### Краткое содержание [#краткое-содержание-28]

Добавляет несколько ссылок в массив меню.

##### Описание [#описание-21]

Использует метод \`setLink\` для добавления каждой ссылки.

##### Смотри так-же: [#смотри-так-же-26]

* [\\Admin::setLink()](#method_setLink)

##### Свойства: [#свойства-24]

| Название   | Тип   | По умолчанию |
| ---------- | ----- | ------------ |
| **$links** | array |              |

##### Возвращает: [#возвращает-29]

\`\`\`
void
\`\`\`

***

<span id="method_setPrefix" />

### setPrefix [#setprefix]

\`\`\`
public setPrefix(string|null  name = null) : void
\`\`\`

##### Краткое содержание [#краткое-содержание-29]

Устанавливает префикс для использования в загрузке данных.

##### Описание [#описание-22]

Если переданное имя соответствует значениям "users" или "usergroup",
то префикс устанавливается в значение константы \`USERPREFIX\`.
В противном случае используется значение по умолчанию из константы \`PREFIX\`.

##### Свойства: [#свойства-25]

| Название  | Тип          | По умолчанию |
| --------- | ------------ | ------------ |
| **$name** | string\\|null | null         |

##### Возвращает: [#возвращает-30]

\`\`\`
void
\`\`\`

***

<span id="method_setVar" />

### setVar [#setvar]

\`\`\`
public setVar(string  name, mixed  value) : void
\`\`\`

##### Краткое содержание [#краткое-содержание-30]

Устанавливает значение переменной или обновляет существующую.

##### Описание [#описание-23]

Метод добавляет новую переменную в массив \`$variables\` или обновляет значение
уже существующей, идентифицируемой по имени.

##### Свойства: [#свойства-26]

| Название   | Тип    | По умолчанию |
| ---------- | ------ | ------------ |
| **$name**  | string |              |
| **$value** | mixed  |              |

##### Возвращает: [#возвращает-31]

\`\`\`
void
\`\`\`

***

<span id="method_setVars" />

### setVars [#setvars]

\`\`\`
public setVars(array  arr = []) : void
\`\`\`

##### Краткое содержание [#краткое-содержание-31]

Устанавливает или обновляет несколько переменных в массиве \`$variables\`.

##### Описание [#описание-24]

Метод принимает ассоциативный массив и обновляет соответствующие переменные с использованием
метода \\{@see}. Если ключ из массива отсутствует в допустимых значениях,
он все равно будет добавлен.

##### Смотри так-же: [#смотри-так-же-27]

* [\\Admin::setVar()](#method_setVar)
* [\\Admin::$variables](#property_variables)

##### Свойства: [#свойства-27]

| Название | Тип   | По умолчанию |
| -------- | ----- | ------------ |
| **$arr** | array | \\[]          |

##### Возвращает: [#возвращает-32]

\`\`\`
void
\`\`\`

***

<span id="method_upload_file" />

### upload\\_file [#upload_file]

\`\`\`
public upload_file() : void
\`\`\`

##### Краткое содержание [#краткое-содержание-32]

TODO: доработать

##### Возвращает: [#возвращает-33]

\`\`\`
void
\`\`\`

***

<span id="method_fetchFileContent" />

### fetchFileContent [#fetchfilecontent]

\`\`\`
private fetchFileContent(array  data) : string|null
\`\`\`

##### Краткое содержание [#краткое-содержание-33]

Получает содержимое файла по указанным ссылкам.

##### Описание [#описание-25]

Метод пытается загрузить содержимое файла с основной (\`link\`) и,
при необходимости, с альтернативной (\`alt\`) ссылки, если содержимое
по основной ссылке пустое.

##### Свойства: [#свойства-28]

| Название  | Тип   | По умолчанию |
| --------- | ----- | ------------ |
| **$data** | array |              |

##### Возвращает: [#возвращает-34]

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

##### Краткое содержание [#краткое-содержание-34]

Генерирует метаданные для указанного файла.

##### Свойства: [#свойства-29]

| Название        | Тип    | По умолчанию |
| --------------- | ------ | ------------ |
| **$file\\_path** | string |              |

##### Ошибки: [#ошибки-11]

| Тип               | Описание                                |
| ----------------- | --------------------------------------- |
| \\RuntimeException | Если файл не существует или недоступен. |

##### Возвращает: [#возвращает-35]

\`\`\`
array
\`\`\`

Ассоциативный массив, содержащий следующую информацию о файле:

* 'realpath' (string|null): Абсолютный путь до файла.
* 'dirname' (string): Путь к директории, содержащей файл.
* 'basename' (string): Имя файла с расширением.
* 'filename' (string): Имя файла без расширения.
* 'extension' (string|null): Расширение файла.
* 'mime' (string): MIME-тип файла.
* 'encoding' (string): Кодировка файла.
* 'size' (int): Размер файла в байтах.
* 'size\\_string' (string): Читаемое представление размера файла (например, "10.5 KB").
* 'atime' (int): Временная метка последнего доступа к файлу.
* 'mtime' (int): Временная метка последней модификации файла.
* 'permission' (string): Права доступа к файлу (например, "0755").

***

<span id="method_parse_assets" />

### parse\\_assets [#parse_assets]

\`\`\`
private parse_assets() : void
\`\`\`

##### Краткое содержание [#краткое-содержание-35]

Парсит данные о ресурсах (assets), проверяет наличие отсутствующих или обновленных,
и обновляет информацию. Также сохраняет актуальные данные в локальный файл ресурсов.

##### Описание [#описание-26]

Процесс включает следующие этапы:

1. Получение списка локальных файлов и их данных через метод \`prepare_assets\`.
2. Получение данных об удаленных ресурсах через URL.
3. Сравнение данных о хэшах локальных и удаленных ресурсов.
4. Сохранение недостающих или обновленных ресурсов в локальное хранилище.
5. Запись актуализированных данных в локальный JSON-файл.

##### Смотри так-же: [#смотри-так-же-28]

* [\\AssetsChecker::save\\_asset()](./AssetsChecker#method_save_asset)
* [\\AssetsChecker::prepare\\_assets()](./AssetsChecker#method_repare_assets)
* [\\DataManager::dirToArray()](./DataManager#method_dirToArray)

##### Ошибки: [#ошибки-12]

| Тип                        | Описание                                                    |
| -------------------------- | ----------------------------------------------------------- |
| \\JsonException\\|\\Throwable | Исключение выбрасывается в случае ошибки при работе с JSON. |

##### Возвращает: [#возвращает-36]

\`\`\`
void
\`\`\`

***

<span id="method_prepare_assets" />

### prepare\\_assets [#prepare_assets]

\`\`\`
private prepare_assets(array  arr, string  dir = __DIR__) : void
\`\`\`

##### Краткое содержание [#краткое-содержание-36]

Подготавливает данные о файлах, расположенных на локальном сервере, и сохраняет их в массив \`assets_arr\`.

##### Описание [#описание-27]

Метод рекурсивно обрабатывает массив с файлами и создает запись для каждого файла в конечном массиве \`assets_arr\`,
содержащую путь, имя файла и его хэш.

##### Свойства: [#свойства-30]

| Название | Тип    | По умолчанию |
| -------- | ------ | ------------ |
| **$arr** | array  |              |
| **$dir** | string | \\_\\_DIR\\_\\_  |

##### Возвращает: [#возвращает-37]

\`\`\`
void
\`\`\`

***

<span id="method_saveFile" />

### saveFile [#savefile]

\`\`\`
private saveFile(string  file_path, string  content, string  file) : bool
\`\`\`

##### Краткое содержание [#краткое-содержание-37]

Сохраняет содержимое в файл и логирует сообщение при возникновении ошибки.

##### Описание [#описание-28]

Метод выполняет запись переданного содержимого в указанный путь файла,
проверяет, доступен ли файл для записи, и логирует ошибку в случае неудачи.

##### Смотри так-же: [#смотри-так-же-29]

* [\\LogGenerator::generateLog()](./LogGenerator#method_generateLog)

##### Свойства: [#свойства-31]

| Название        | Тип    | По умолчанию |
| --------------- | ------ | ------------ |
| **$file\\_path** | string |              |
| **$content**    | string |              |
| **$file**       | string |              |

##### Ошибки: [#ошибки-13]

| Тип        | Описание |
| ---------- | -------- |
| \\Throwable |          |

##### Возвращает: [#возвращает-38]

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

##### Краткое содержание [#краткое-содержание-38]

Сохраняет данные в кеш.

##### Описание [#описание-29]

Метод записывает данные в кеш, используя указанный тип и имя.
Для сохранения данных вызывается метод \`CacheControl::setCache\`, который
обрабатывает директорию и имя файла, записывает данные в формате JSON
и устанавливает необходимые права доступа к файлу.

##### Смотри так-же: [#смотри-так-же-30]

* [\\CacheControl::setCache()](./CacheControl#method_setCache)

##### Свойства: [#свойства-32]

| Название  | Тип    | По умолчанию |
| --------- | ------ | ------------ |
| **$type** | string |              |
| **$name** | string |              |
| **$data** | mixed  |              |

##### Ошибки: [#ошибки-14]

| Тип            | Описание |
| -------------- | -------- |
| \\JsonException |          |

##### Возвращает: [#возвращает-39]

\`\`\`
void
\`\`\`

***

<span id="method_setDefaultAuthor" />

### setDefaultAuthor [#setdefaultauthor]

\`\`\`
private setDefaultAuthor() : void
\`\`\`

##### Краткое содержание [#краткое-содержание-39]

Устанавливает информацию об авторе и сохраняет её в массиве глобальных переменных.

##### Описание [#описание-30]

Информация об авторе включает:

* Имя автора;
* Контактные данные (например, E-Mail, Telegram, Вебсайт);
* Данные о пожертвованиях (например, PayPal, Ko-Fi, Yandex.Money, DonationAlerts).

Контактные данные локализуются с использованием функции \`__()\`.

##### Смотри так-же: [#смотри-так-же-31]

* [\\Admin::$variables](#property_variables)
* [\\Author](./Author)

##### Ошибки: [#ошибки-15]

| Тип        | Описание                                                                |
| ---------- | ----------------------------------------------------------------------- |
| \\Throwable | В случае ошибок при добавлении информации или работе с объектом Author. |

##### Возвращает: [#возвращает-40]

\`\`\`
void
\`\`\`
`,o={contents:[{heading:`краткое-содержание`,content:`Класс Admin предназначен для управления административной панелью проекта.`},{heading:`описание`,content:`Содержит функционал для подключения файлов CSS и JS, настройки переменных
окружения, работы с меню и шапками страниц. Использует трейты для
загрузки данных, взаимодействия с DLE и проверки файлов ресурсов.`},{heading:`свойства`,content:`protected $postXfieldKeys`},{heading:`свойства`,content:`protected $userXfieldKeys`},{heading:`свойства`,content:`private $asset\\_file`},{heading:`свойства`,content:`private $assets\\_arr`},{heading:`свойства`,content:`private $assets\\_dir`},{heading:`свойства`,content:`private $breadcrumb`},{heading:`свойства`,content:`private $cache\\_folder`},{heading:`свойства`,content:`private $cssArr`},{heading:`свойства`,content:`private $jsArr`},{heading:`свойства`,content:`private $links`},{heading:`свойства`,content:`private $prefix`},{heading:`свойства`,content:`private $variables`},{heading:`методы`,content:`public \\_\\_construct()`},{heading:`методы`,content:`public checkAssets()`},{heading:`методы`,content:`public clear\\_cache()`},{heading:`методы`,content:`public generate\\_link()`},{heading:`методы`,content:`public get\\_cache()`},{heading:`методы`,content:`public get\\_used\\_xfields()`},{heading:`методы`,content:`public getBreadcrumb()`},{heading:`методы`,content:`public getCacheFolder()`},{heading:`методы`,content:`public getCats()`},{heading:`методы`,content:`public getLinkInfo()`},{heading:`методы`,content:`public getLinkName()`},{heading:`методы`,content:`public getLinkUrl()`},{heading:`методы`,content:`public getPrefix()`},{heading:`методы`,content:`public getUser()`},{heading:`методы`,content:`public getUserGroups()`},{heading:`методы`,content:`public getUsers()`},{heading:`методы`,content:`public getVariables()`},{heading:`методы`,content:`public getXfieldInfo()`},{heading:`методы`,content:`public htmlStatic()`},{heading:`методы`,content:`public load\\_data()`},{heading:`методы`,content:`public loadXfields()`},{heading:`методы`,content:`public parseAssets()`},{heading:`методы`,content:`public save\\_asset()`},{heading:`методы`,content:`public setAuthor()`},{heading:`методы`,content:`public setBreadcrumb()`},{heading:`методы`,content:`public setCacheFolder()`},{heading:`методы`,content:`public setCss()`},{heading:`методы`,content:`public setJs()`},{heading:`методы`,content:`public setLink()`},{heading:`методы`,content:`public setLinks()`},{heading:`методы`,content:`public setPrefix()`},{heading:`методы`,content:`public setVar()`},{heading:`методы`,content:`public setVars()`},{heading:`методы`,content:`public upload\\_file()`},{heading:`методы`,content:`private fetchFileContent()`},{heading:`методы`,content:`private generateFileMetadata()`},{heading:`методы`,content:`private parse\\_assets()`},{heading:`методы`,content:`private prepare\\_assets()`},{heading:`методы`,content:`private saveFile()`},{heading:`методы`,content:`private set\\_cache()`},{heading:`методы`,content:`private setDefaultAuthor()`},{heading:`подробности`,content:`Путь: engine/inc/maharder/\\_includes/classes/Admin.php`},{heading:`подробности`,content:`Использованные трейты:`},{heading:`подробности`,content:`\\DataLoader`},{heading:`подробности`,content:`\\DleData`},{heading:`подробности`,content:`\\AssetsChecker`},{heading:`protected-postxfieldkeys--array`,content:`**Тип:** массив`},{heading:`protected-postxfieldkeys--array`,content:`**Подробности:**`},{heading:`protected-userxfieldkeys--array`,content:`**Тип:** массив`},{heading:`protected-userxfieldkeys--array`,content:`**Подробности:**`},{heading:`private-asset_file--string`,content:`**Краткое содержание**`},{heading:`private-asset_file--string`,content:`Файл с информацией и хешами вспомогательных файлов`},{heading:`private-asset_file--string`,content:`**Тип:** текст`},{heading:`private-asset_file--string`,content:`**Подробности:**`},{heading:`private-assets_arr--array`,content:`**Краткое содержание**`},{heading:`private-assets_arr--array`,content:`Массив со всеми данными для обновления стилей и скриптов`},{heading:`private-assets_arr--array`,content:`**Тип:** массив`},{heading:`private-assets_arr--array`,content:`**Подробности:**`},{heading:`private-assets_dir--string`,content:`**Краткое содержание**`},{heading:`private-assets_dir--string`,content:`Путь до всех вспомогательных файлов`},{heading:`private-assets_dir--string`,content:`**Тип:** текст`},{heading:`private-assets_dir--string`,content:`**Подробности:**`},{heading:`private-breadcrumb--array`,content:`**Краткое содержание**`},{heading:`private-breadcrumb--array`,content:`Хранит данные для построения хлебных крошек в административной панели.`},{heading:`private-breadcrumb--array`,content:`**Тип:** массив`},{heading:`private-breadcrumb--array`,content:`**Подробности:**`},{heading:`private-breadcrumb--array`,content:`Смотри так-же:`},{heading:`private-breadcrumb--array`,content:`Используется для установки значений хлебных крошек.`},{heading:`private-breadcrumb--array`,content:`Используется для получения текущих значений хлебных крошек.`},{heading:`private-cache_folder--string`,content:`**Краткое содержание**`},{heading:`private-cache_folder--string`,content:`Папка кеша`},{heading:`private-cache_folder--string`,content:`**Тип:** текст`},{heading:`private-cache_folder--string`,content:`**Подробности:**`},{heading:`private-cssarr--array`,content:`**Краткое содержание**`},{heading:`private-cssarr--array`,content:`Список CSS-файлов, используемых в разделе администратора.`},{heading:`private-cssarr--array`,content:`**Тип:** массив`},{heading:`private-cssarr--array`,content:`**Подробности:**`},{heading:`private-cssarr--array`,content:`Смотри так-же:`},{heading:`private-cssarr--array`,content:`Метод для добавления CSS-файлов.`},{heading:`tags`,content:`Тэг`},{heading:`tags`,content:`Версия`},{heading:`tags`,content:`Описание`},{heading:`tags`,content:`global`},{heading:`tags`,content:`string URL Глобальная переменная, содержащая базовый URL проекта.`},{heading:`private-jsarr--array`,content:`**Краткое содержание**`},{heading:`private-jsarr--array`,content:`Массив со скриптами, которые используются в административной панели.`},{heading:`private-jsarr--array`,content:`***Описание***`},{heading:`private-jsarr--array`,content:`Скрипты представляют собой коллекцию путей к JavaScript-файлам,
необходимых для работы функциональных компонентов интерфейса.`},{heading:`private-jsarr--array`,content:`**Тип:** массив
Массив содержит ссылки на JavaScript-файлы,
таких, как библиотеки, редактор SCEditor и его плагины,
а также прочие утилиты для интерфейса административной панели.
&#x2A;*Подробности:**`},{heading:`private-jsarr--array`,content:`Смотри так-же:`},{heading:`private-jsarr--array`,content:`Метод для добавления пользовательских JavaScript-файлов.`},{heading:`tags-1`,content:`Тэг`},{heading:`tags-1`,content:`Версия`},{heading:`tags-1`,content:`Описание`},{heading:`tags-1`,content:`global`},{heading:`tags-1`,content:`string URL Глобальная переменная, определяющая базовый URL приложения.`},{heading:`private-links--array`,content:`**Тип:** массив`},{heading:`private-links--array`,content:`**Подробности:**`},{heading:`private-prefix--string`,content:`**Тип:** текст или null`},{heading:`private-prefix--string`,content:`**Подробности:**`},{heading:`private-variables--array`,content:`**Краткое содержание**`},{heading:`private-variables--array`,content:`Массив с различными переменными для шаблонизатора.`},{heading:`private-variables--array`,content:`***Описание***`},{heading:`private-variables--array`,content:`Используется для настройки и передачи данных, таких как пути к стилям и скриптам, информация об авторе,
ссылки для хлебных крошек, а также настройки меню и другие параметры.`},{heading:`private-variables--array`,content:`Описание ключей:`},{heading:`private-variables--array`,content:`**css\\_dir**: строка, папка со стилями.`},{heading:`private-variables--array`,content:`**js\\_dir**: строка, папка со скриптами.`},{heading:`private-variables--array`,content:`**css**: массив, содержит список подключаемых стилей.`},{heading:`private-variables--array`,content:`**js**: массив, содержит список подключаемых скриптов.`},{heading:`private-variables--array`,content:`**url**: строка, ссылка для корректного отображения стилей и скриптов на сайте.`},{heading:`private-variables--array`,content:`**lic\\_link**: строка, ссылка на пользовательское соглашение.`},{heading:`private-variables--array`,content:`**author**: массив, информация об авторе модуля:`},{heading:`private-variables--array`,content:`**author.name**: строка, имя автора.`},{heading:`private-variables--array`,content:`**author.contacts**: массив, список контактной информации автора:`},{heading:`private-variables--array`,content:`**author.contacts.name**: строка, название контактного средства (например, E-Mail).`},{heading:`private-variables--array`,content:`**author.contacts.link**: строка, ссылка для связи (например, mailto:dev\\@devcraft.club).`},{heading:`private-variables--array`,content:`**author.donate**: массив, данные о поддержке:`},{heading:`private-variables--array`,content:`**author.donate.name**: строка, название платёжной системы (например, PayPal).`},{heading:`private-variables--array`,content:`**author.donate.value**: строка, описание платёжной системы (например, paypal.me/MaximH).`},{heading:`private-variables--array`,content:`**author.donate.link**: строка, ссылка платёжной системы (например, https\\://paypal.me/MaximH).`},{heading:`private-variables--array`,content:`**menu**: массив, ссылки для меню сайта.`},{heading:`private-variables--array`,content:`**breadcrumbs**: массив, ссылки на хлебные крошки.`},{heading:`private-variables--array`,content:`**Тип:** массив
Значение свойств этой переменной задаётся по умолчанию или изменяется через методы класса.`},{heading:`private-variables--array`,content:`**Подробности:**`},{heading:`private-variables--array`,content:`Смотри так-же:`},{heading:`private-variables--array`,content:`Для установки/обновления одного или нескольких значений.`},{heading:`private-variables--array`,content:`Для получения массива переменных.`},{heading:`private-variables--array`,content:`Для настройки информации об авторе.`},{heading:`private-variables--array`,content:`Для присвоения ссылок (например, для меню или хлебных крошек).`},{heading:`private-variables--array`,content:`\\Author`},{heading:`краткое-содержание-1`,content:`Конструктор класса.`},{heading:`описание-1`,content:`Инициализирует параметры для начальной загрузки системы,
включая настройки файлов CSS и JS, меню, темы и создание
базовых директорий кеша.`},{heading:`смотри-так-же`,content:`\\setVar()`},{heading:`смотри-так-же`,content:`\\htmlStatic()`},{heading:`смотри-так-же`,content:`\\DataManager::getConfig()`},{heading:`смотри-так-же`,content:`\\DataManager::createDir()`},{heading:`ошибки`,content:`Тип`},{heading:`ошибки`,content:`Описание`},{heading:`ошибки`,content:`\\JsonException`},{heading:`ошибки`,content:`\\Throwable`},{heading:`ошибки`,content:`Генерируется при ошибках обработки JSON, связанных с конфигурацией.`},{heading:`краткое-содержание-2`,content:`Проверяет целостность файлов между локальным хранилищем и сервером разработчика.`},{heading:`описание-2`,content:`Если файлы отсутствуют или имеют различия в хеш-суммах, информация об этих расхождениях
возвращается в виде массива. При необходимости может быть выполнена перезапись
локального файла с данными о ресурсах.`},{heading:`смотри-так-же-1`,content:`\\DataManager::dirToArray()`},{heading:`смотри-так-же-1`,content:`\\self::prepare\\_assets()`},{heading:`свойства-2`,content:`Название`},{heading:`свойства-2`,content:`Тип`},{heading:`свойства-2`,content:`По умолчанию`},{heading:`свойства-2`,content:`**$rewrite**`},{heading:`свойства-2`,content:`bool`},{heading:`свойства-2`,content:`false`},{heading:`ошибки-1`,content:`Тип`},{heading:`ошибки-1`,content:`Описание`},{heading:`ошибки-1`,content:`\\JsonException`},{heading:`возвращает-1`,content:`Ассоциативный массив с информацией о проверке файлов:`},{heading:`возвращает-1`,content:"`on_server` (int): Количество файлов, находящихся на сервере разработчика."},{heading:`возвращает-1`,content:"`local` (int): Количество локальных файлов."},{heading:`возвращает-1`,content:"`missing_count` (int): Количество недостающих файлов."},{heading:`возвращает-1`,content:"`update_count` (int): Количество файлов, требующих обновления."},{heading:`возвращает-1`,content:"`missing` (array): Массив с данными о недостающих файлах."},{heading:`возвращает-1`,content:"`update` (array): Массив с данными о файлах, требующих обновления."},{heading:`краткое-содержание-3`,content:`Очищает кеш указанного типа.`},{heading:`описание-3`,content:`Метод позволяет очистить кеш для переданного типа или полностью, если тип "all".
Использует внутренний метод CacheControl::clearCache для выполнения операции очистки.`},{heading:`смотри-так-же-2`,content:`\\CacheControl::clearCache()`},{heading:`свойства-3`,content:`Название`},{heading:`свойства-3`,content:`Тип`},{heading:`свойства-3`,content:`По умолчанию`},{heading:`свойства-3`,content:`**$type**`},{heading:`свойства-3`,content:`string`},{heading:`свойства-3`,content:`'all'`},{heading:`краткое-содержание-4`,content:`Создаёт экземпляр класса AdminLink с данными о ссылке.`},{heading:`смотри-так-же-3`,content:`\\AdminLink`},{heading:`свойства-4`,content:`Название`},{heading:`свойства-4`,content:`Тип`},{heading:`свойства-4`,content:`По умолчанию`},{heading:`свойства-4`,content:`**$name**`},{heading:`свойства-4`,content:`string`},{heading:`свойства-4`,content:`**$href**`},{heading:`свойства-4`,content:`string`},{heading:`свойства-4`,content:`**$type**`},{heading:`свойства-4`,content:`string`},{heading:`свойства-4`,content:`"link"`},{heading:`свойства-4`,content:`**$children**`},{heading:`свойства-4`,content:`array`},{heading:`свойства-4`,content:`\\[]`},{heading:`свойства-4`,content:`**$data\\_val**`},{heading:`свойства-4`,content:`string\\| null`},{heading:`свойства-4`,content:`null`},{heading:`возвращает-3`,content:`Объект класса AdminLink с заданными параметрами.`},{heading:`краткое-содержание-5`,content:`Получает кешированные данные для заданного типа и имени.`},{heading:`описание-4`,content:"Метод использует статический метод `CacheControl::getCache()`, чтобы получить данные из файловой системы."},{heading:`смотри-так-же-4`,content:`\\DataManager::toTranslit()`},{heading:`смотри-так-же-4`,content:`\\DataManager::normalizePath()`},{heading:`смотри-так-же-4`,content:`\\CacheControl::getCache()`},{heading:`свойства-5`,content:`Название`},{heading:`свойства-5`,content:`Тип`},{heading:`свойства-5`,content:`По умолчанию`},{heading:`свойства-5`,content:`**$type**`},{heading:`свойства-5`,content:`string`},{heading:`свойства-5`,content:`**$name**`},{heading:`свойства-5`,content:`string`},{heading:`ошибки-2`,content:`Тип`},{heading:`ошибки-2`,content:`Описание`},{heading:`ошибки-2`,content:`\\JsonException`},{heading:`возвращает-4`,content:"Возвращает массив декодированных данных, если файл кеша успешно найден и данные корректны,\nили `false`, если произошла ошибка (например, файл не найден или данные некорректны)."},{heading:`краткое-содержание-6`,content:"Возвращает массив с дополнительными полями, использованными в объекте, либо `false`, если данные отсутствуют."},{heading:`описание-5`,content:`Метод извлекает данные из базы данных для указанного объекта (поста или пользователя)
и преобразует строку с дополнительными полями в массив с ключами и их значениями.`},{heading:`смотри-так-же-5`,content:`\\load\\_data()`},{heading:`свойства-6`,content:`Название`},{heading:`свойства-6`,content:`Тип`},{heading:`свойства-6`,content:`По умолчанию`},{heading:`свойства-6`,content:`**$id**`},{heading:`свойства-6`,content:`int`},{heading:`свойства-6`,content:`**$type**`},{heading:`свойства-6`,content:`string`},{heading:`свойства-6`,content:`"post"`},{heading:`ошибки-3`,content:`Тип`},{heading:`ошибки-3`,content:`Описание`},{heading:`ошибки-3`,content:`\\JsonException`},{heading:`ошибки-3`,content:`Исключение выбрасывается, если произошла ошибка при работе с JSON.`},{heading:`возвращает-5`,content:"Возвращает массив дополнительных полей объекта в формате\nключ => значение, либо `false`, если данные отсутствуют."},{heading:`краткое-содержание-7`,content:`Возвращает текущий массив данных хлебных крошек.`},{heading:`смотри-так-же-6`,content:`\\Admin::$breadcrumb`},{heading:`возвращает-6`,content:`Массив хлебных крошек.`},{heading:`краткое-содержание-8`,content:`Возвращает список категорий в виде ассоциативного массива, где ключом является ID категории, а значением — её
название.`},{heading:`описание-6`,content:`Метод загружает данные из базы данных, используя метод \`load_data\`, и сортирует их по названию категории в
алфавитном порядке. В результате возвращается массив с ID категорий в качестве ключей и названиями категорий в
качестве значений.`},{heading:`смотри-так-же-7`,content:`\\load\\_data()`},{heading:`ошибки-4`,content:`Тип`},{heading:`ошибки-4`,content:`Описание`},{heading:`ошибки-4`,content:`\\JsonException`},{heading:`возвращает-8`,content:`Ассоциативный массив категорий, где ключ — ID категории, а значение — её название.`},{heading:`краткое-содержание-9`,content:`Возвращает информацию о ссылке из меню.`},{heading:`свойства-7`,content:`Название`},{heading:`свойства-7`,content:`Тип`},{heading:`свойства-7`,content:`По умолчанию`},{heading:`свойства-7`,content:`**$name**`},{heading:`свойства-7`,content:`string`},{heading:`возвращает-9`,content:`Объект AdminLink, если ссылка найдена, или false, если ссылка отсутствует.`},{heading:`краткое-содержание-10`,content:`Возвращает имя ссылки на основе предоставленного имени.`},{heading:`описание-7`,content:`Метод извлекает информацию о ссылке с помощью метода getLinkInfo().
Если информация найдена, возвращается имя ссылки через метод getName().
В противном случае возвращается false.`},{heading:`смотри-так-же-8`,content:`\\getLinkInfo()`},{heading:`смотри-так-же-8`,content:`\\AdminLink::getName()`},{heading:`свойства-8`,content:`Название`},{heading:`свойства-8`,content:`Тип`},{heading:`свойства-8`,content:`По умолчанию`},{heading:`свойства-8`,content:`**$name**`},{heading:`свойства-8`,content:`string`},{heading:`возвращает-10`,content:`Имя ссылки или false, если информация не найдена.`},{heading:`краткое-содержание-11`,content:`Возвращает URL ссылки по указанному имени.`},{heading:`описание-8`,content:`Метод извлекает информацию о ссылке с помощью метода getLinkInfo().
Если информация найдена, возвращается URL ссылки.
Если информация отсутствует, возвращается false.`},{heading:`смотри-так-же-9`,content:`\\self::getLinkInfo()`},{heading:`смотри-так-же-9`,content:`\\AdminLink::getLink()`},{heading:`свойства-9`,content:`Название`},{heading:`свойства-9`,content:`Тип`},{heading:`свойства-9`,content:`По умолчанию`},{heading:`свойства-9`,content:`**$name**`},{heading:`свойства-9`,content:`string`},{heading:`возвращает-11`,content:`URL ссылки, если информация доступна, или false, если ссылка не найдена.`},{heading:`краткое-содержание-12`,content:`Возвращает префикс для использования в SQL-запросах.`},{heading:`описание-9`,content:"Метод проверяет, установлен ли префикс. Если префикс не задан, он вызывает метод `setPrefix()`,\nчтобы установить его значение. Затем возвращает установившийся префикс."},{heading:`смотри-так-же-10`,content:`\\DataLoader::$prefix`},{heading:`смотри-так-же-10`,content:`\\DataLoader::setPrefix()`},{heading:`возвращает-12`,content:`Префикс, используемый для построения SQL-запросов.`},{heading:`краткое-содержание-13`,content:`Получает данные пользователя по ID или имени пользователя.`},{heading:`описание-10`,content:"Если ни идентификатор пользователя, ни имя пользователя не переданы, метод возвращает `false`.\nВ противном случае выполняется поиск данных в таблице `users` с использованием указанного критерия."},{heading:`смотри-так-же-11`,content:`\\load\\_data()`},{heading:`свойства-10`,content:`Название`},{heading:`свойства-10`,content:`Тип`},{heading:`свойства-10`,content:`По умолчанию`},{heading:`свойства-10`,content:`**$id**`},{heading:`свойства-10`,content:`int\\|null`},{heading:`свойства-10`,content:`null`},{heading:`свойства-10`,content:`**$uname**`},{heading:`свойства-10`,content:`string\\|null`},{heading:`свойства-10`,content:`null`},{heading:`ошибки-5`,content:`Тип`},{heading:`ошибки-5`,content:`Описание`},{heading:`ошибки-5`,content:`\\JsonException`},{heading:`возвращает-13`,content:"Ассоциативный массив с данными о пользователе, если пользователь найден.\nВозвращает `false`, если пользователь не найден или если критерии поиска не заданы."},{heading:`краткое-содержание-14`,content:`Получает список групп пользователей в формате массива с идентификаторами и именами групп.`},{heading:`описание-11`,content:'Метод обращается к функции `load_data` для загрузки данных о группах пользователей\nиз таблицы "usergroups" с выборкой полей `id` и `group_name`,\nзатем преобразует результат в ассоциативный массив с ключами — идентификаторами групп,\nи значениями — именами групп, отсортированными по названию группы в алфавитном порядке (ASC).'},{heading:`смотри-так-же-12`,content:`\\load\\_data()`},{heading:`ошибки-6`,content:`Тип`},{heading:`ошибки-6`,content:`Описание`},{heading:`ошибки-6`,content:`\\JsonException`},{heading:`возвращает-14`,content:`Ассоциативный массив, где ключ — идентификатор группы, значение — имя группы.`},{heading:`краткое-содержание-15`,content:`Возвращает список пользователей из базы данных.`},{heading:`описание-12`,content:`Метод загружает данные о пользователях, используя метод \`load_data\`,
и возвращает массив, где ключами являются идентификаторы пользователей,
а значениями — их имена, отсортированные в алфавитном порядке.`},{heading:`смотри-так-же-13`,content:`\\load\\_data()`},{heading:`ошибки-7`,content:`Тип`},{heading:`ошибки-7`,content:`Описание`},{heading:`ошибки-7`,content:`\\JsonException`},{heading:`возвращает-15`,content:`Ассоциативный массив пользователей, где ключи — идентификаторы пользователей (user\\_id), а значения
— их имена.`},{heading:`краткое-содержание-16`,content:`Получает массив переменных, связанных с модулем.`},{heading:`описание-13`,content:`Метод возвращает ассоциативный массив с переменными, используемыми в модуле,
такими как параметры путей (CSS, JS), массивы подключаемых файлов, дополнительные ссылки, меню
и настройки. Если передано название переменной, метод возвращает только значение данной переменной.`},{heading:`смотри-так-же-14`,content:`\\Admin::$variables`},{heading:`смотри-так-же-14`,content:`\\Admin::setVars()`},{heading:`смотри-так-же-14`,content:`\\Admin::setLinks()`},{heading:`свойства-11`,content:`Название`},{heading:`свойства-11`,content:`Тип`},{heading:`свойства-11`,content:`По умолчанию`},{heading:`свойства-11`,content:`**$name**`},{heading:`свойства-11`,content:`string\\|null`},{heading:`свойства-11`,content:`null`},{heading:`возвращает-16`,content:`Ассоциативный массив переменных модуля или значение конкретной переменной.`},{heading:`краткое-содержание-17`,content:`Возвращает информацию о дополнительном поле (xfield) на основании его имени и типа.`},{heading:`смотри-так-же-15`,content:`\\loadXfields()`},{heading:`смотри-так-же-15`,content:`\\CacheControl::getCache()`},{heading:`свойства-12`,content:`Название`},{heading:`свойства-12`,content:`Тип`},{heading:`свойства-12`,content:`По умолчанию`},{heading:`свойства-12`,content:`**$name**`},{heading:`свойства-12`,content:`string`},{heading:`свойства-12`,content:`**$type**`},{heading:`свойства-12`,content:`string`},{heading:`свойства-12`,content:`'post'`},{heading:`возвращает-17`,content:`Возвращает информацию о поле в виде ассоциативного массива, либо null,
если поле не найдено.`},{heading:`краткое-содержание-18`,content:`Обрабатывает массив или строку с данными ссылок на статичные файлы и формирует HTML-разметку
или массив ссылок в зависимости от переданных параметров.`},{heading:`описание-14`,content:"Формирование HTML производится для типов файлов `css` и `js`, добавляя соответствующие теги\n(`<link />` или `<script>`). В случае, если используются ссылки, возвращается только массив ссылок."},{heading:`смотри-так-же-16`,content:`\\Admin::$cssArr`},{heading:`смотри-так-же-16`,content:`\\Admin::$jsArr`},{heading:`смотри-так-же-16`,content:`\\Admin::setCss()`},{heading:`смотри-так-же-16`,content:`\\Admin::setJs()`},{heading:`смотри-так-же-16`,content:`\\Admin::\\_\\_construct()`},{heading:`свойства-13`,content:`Название`},{heading:`свойства-13`,content:`Тип`},{heading:`свойства-13`,content:`По умолчанию`},{heading:`свойства-13`,content:`**$data**`},{heading:`свойства-13`,content:`string\\|array`},{heading:`свойства-13`,content:`**$view**`},{heading:`свойства-13`,content:`string`},{heading:`свойства-13`,content:`'html'`},{heading:`свойства-13`,content:`**$type**`},{heading:`свойства-13`,content:`string`},{heading:`свойства-13`,content:`'css'`},{heading:`возвращает-18`,content:"Массив с HTML-строками или ссылками в зависимости от параметра `$view`."},{heading:`краткое-содержание-19`,content:`Метод загружает данные из базы данных с использованием механизма кеширования.`},{heading:`описание-15`,content:`Если данные уже закешированы, то они возвращаются из кеша, иначе выполняется запрос
к базе данных, формируется кеш и результат сохраняется на диск.`},{heading:`смотри-так-же-17`,content:`\\DataManager::getDb()`},{heading:`смотри-так-же-17`,content:`\\DataManager::nameArgs()`},{heading:`смотри-так-же-17`,content:`\\DataManager::getComparer()`},{heading:`смотри-так-же-17`,content:`\\DataManager::getConfig()`},{heading:`свойства-14`,content:`Название`},{heading:`свойства-14`,content:`Тип`},{heading:`свойства-14`,content:`По умолчанию`},{heading:`свойства-14`,content:`**$name**`},{heading:`свойства-14`,content:`string`},{heading:`свойства-14`,content:`**$\\_vars**`},{heading:`свойства-14`,content:`mixed`},{heading:`ошибки-8`,content:`Тип`},{heading:`ошибки-8`,content:`Описание`},{heading:`ошибки-8`,content:`\\JsonException`},{heading:`ошибки-8`,content:`В случае JSON-ошибок при работе с кешем.`},{heading:`возвращает-19`,content:`Результат выборки из базы данных, либо из кеша.`},{heading:`краткое-содержание-20`,content:`Загружает дополнительные поля для новостей или профилей пользователей.`},{heading:`описание-16`,content:`Метод извлекает данные из кэша, либо, при его отсутствии, читает данные из файла конфигурации.
Возвращает ассоциативный массив, где ключами являются названия дополнительных полей, а значениями - их
параметры.
Данные загружаются в зависимости от значения параметра \`$type\`:`},{heading:`описание-16`,content:'`"post"`: данные загружаются из файла `xfields.txt`.'},{heading:`описание-16`,content:'`"user"`: данные загружаются из файла `xprofile.txt`.\nКлючи массива, формируемого из файла конфигурации, соответствуют предопределённым ключам, указанным\nв свойствах `userXfieldKeys` или `postXfieldKeys`.'},{heading:`смотри-так-же-18`,content:`\\CacheControl::getCache()`},{heading:`смотри-так-же-18`,content:`\\CacheControl::setCache()`},{heading:`свойства-15`,content:`Название`},{heading:`свойства-15`,content:`Тип`},{heading:`свойства-15`,content:`По умолчанию`},{heading:`свойства-15`,content:`**$type**`},{heading:`свойства-15`,content:`string`},{heading:`свойства-15`,content:`'post'`},{heading:`возвращает-20`,content:"Ассоциативный массив дополнительных полей, где ключ - название поля, значение - его\nпараметры. Возвращает `false` в случае невозможности прочитать файл."},{heading:`краткое-содержание-21`,content:`Выполняет парсинг вспомогательных файлов для управления ассетами.`},{heading:`описание-17`,content:`Если файл с хешами ассетов существует, то парсинг выполняется только при принудительном запуске.
В случае отсутствия указанного файла производится полное сканирование ассетов.`},{heading:`смотри-так-же-19`,content:`\\parse\\_assets()`},{heading:`свойства-16`,content:`Название`},{heading:`свойства-16`,content:`Тип`},{heading:`свойства-16`,content:`По умолчанию`},{heading:`свойства-16`,content:`**$parse**`},{heading:`свойства-16`,content:`bool`},{heading:`свойства-16`,content:`false`},{heading:`ошибки-9`,content:`Тип`},{heading:`ошибки-9`,content:`Описание`},{heading:`ошибки-9`,content:`\\JsonException\\|\\Throwable`},{heading:`ошибки-9`,content:`В случае ошибок в процессах обработки JSON-файлов.`},{heading:`краткое-содержание-22`,content:`Сохраняет файл на сервер и возвращает информацию о нём или false в случае неуспеха.`},{heading:`смотри-так-же-20`,content:`\\DataManager::createDir()`},{heading:`смотри-так-же-20`,content:`\\LogGenerator::generateLog()`},{heading:`смотри-так-же-20`,content:`\\AssetsChecker::fetchFileContent()`},{heading:`смотри-так-же-20`,content:`\\AssetsChecker::saveFile()`},{heading:`смотри-так-же-20`,content:`\\AssetsChecker::generateFileMetadata()`},{heading:`свойства-17`,content:`Название`},{heading:`свойства-17`,content:`Тип`},{heading:`свойства-17`,content:`По умолчанию`},{heading:`свойства-17`,content:`**$data**`},{heading:`свойства-17`,content:`array`},{heading:`свойства-17`,content:`**$file**`},{heading:`свойства-17`,content:`string`},{heading:`ошибки-10`,content:`Тип`},{heading:`ошибки-10`,content:`Описание`},{heading:`ошибки-10`,content:`\\JsonException\\|\\Throwable`},{heading:`ошибки-10`,content:`Генерирует исключение, если возникает ошибка обработки JSON.`},{heading:`возвращает-22`,content:`Возвращает массив с информацией о сохранённом файле или false, если файл не удалось сохранить.
Массив содержит следующие ключи:`},{heading:`возвращает-22`,content:`'realpath' (string): Полный реальный путь до файла.`},{heading:`возвращает-22`,content:`'dirname' (string): Директория файла.`},{heading:`возвращает-22`,content:`'basename' (string): Имя файла с расширением.`},{heading:`возвращает-22`,content:`'filename' (string): Имя файла без расширения.`},{heading:`возвращает-22`,content:`'extension' (string): Расширение файла.`},{heading:`возвращает-22`,content:`'mime' (string): MIME-тип файла.`},{heading:`возвращает-22`,content:`'encoding' (string): Тип кодирования файла.`},{heading:`возвращает-22`,content:`'size' (int): Размер файла в байтах.`},{heading:`возвращает-22`,content:`'size\\_string' (string): Размер файла в человекочитаемом формате (например, "1.5MB").`},{heading:`возвращает-22`,content:`'atime' (int): Время последнего доступа к файлу (в метках времени Unix).`},{heading:`возвращает-22`,content:`'mtime' (int): Время последней модификации файла (в метках времени Unix).`},{heading:`возвращает-22`,content:`'permission' (string): Права доступа на файл (в формате UNIX-подобной строки, например, "0755").`},{heading:`краткое-содержание-23`,content:`Устанавливает объект автора в массив переменных.`},{heading:`смотри-так-же-21`,content:`\\Author`},{heading:`свойства-18`,content:`Название`},{heading:`свойства-18`,content:`Тип`},{heading:`свойства-18`,content:`По умолчанию`},{heading:`свойства-18`,content:`**$autor**`},{heading:`свойства-18`,content:`\\Author`},{heading:`краткое-содержание-24`,content:`Добавляет объект хлебной крошки в массив крошек`},{heading:`смотри-так-же-22`,content:`\\BreadCrumb`},{heading:`свойства-19`,content:`Название`},{heading:`свойства-19`,content:`Тип`},{heading:`свойства-19`,content:`По умолчанию`},{heading:`свойства-19`,content:`**$crumb**`},{heading:`свойства-19`,content:`\\BreadCrumb`},{heading:`свойства-20`,content:`Название`},{heading:`свойства-20`,content:`Тип`},{heading:`свойства-20`,content:`По умолчанию`},{heading:`свойства-20`,content:`**$cache\\_folder**`},{heading:`свойства-20`,content:`string`},{heading:`краткое-содержание-25`,content:"Добавляет новый CSS-файл в массив `cssArr` и обновляет соответствующую переменную `css`."},{heading:`описание-18`,content:"Метод принимает путь или массив путей к CSS-файлам и добавляет их\nв массив `cssArr`. Впоследствии массив обрабатывается с помощью функции\n`htmlStatic`, которая генерирует массив HTML-тегов `&lt;link&gt;`.\nОбновленный массив HTML-тегов записывается в переменную `css` через метод `setVar`."},{heading:`смотри-так-же-23`,content:`\\Admin::$cssArr`},{heading:`смотри-так-же-23`,content:`\\Admin::setVar`},{heading:`смотри-так-же-23`,content:`\\Admin::htmlStatic`},{heading:`свойства-21`,content:`Название`},{heading:`свойства-21`,content:`Тип`},{heading:`свойства-21`,content:`По умолчанию`},{heading:`свойства-21`,content:`**$css**`},{heading:`свойства-21`,content:`array\\|string`},{heading:`краткое-содержание-26`,content:"Добавляет новый JavaScript файл в массив `$jsArr`."},{heading:`описание-19`,content:"Метод принимает один или несколько путей до JavaScript файлов и объединяет их\nс массивом `$jsArr`. После этого обновляет переменную `js` с помощью вызова метода `htmlStatic`\nдля формирования HTML-тегов `<script>`, необходимых для подключения этих файлов."},{heading:`смотри-так-же-24`,content:`\\Admin::$jsArr`},{heading:`смотри-так-же-24`,content:`\\Admin::setVar()`},{heading:`смотри-так-же-24`,content:`\\Admin::htmlStatic()`},{heading:`свойства-22`,content:`Название`},{heading:`свойства-22`,content:`Тип`},{heading:`свойства-22`,content:`По умолчанию`},{heading:`свойства-22`,content:`**$js**`},{heading:`свойства-22`,content:`array\\|string`},{heading:`краткое-содержание-27`,content:`Устанавливает ссылку в массив меню для указанного родительского элемента.`},{heading:`описание-20`,content:"Этот метод добавляет объект `AdminLink` в массив `menu`, вложенный в\nпеременную `variables`, обеспечивая возможность хранения структуры меню\nс учетом родительских элементов. Основное назначение метода — организовать\nменю по принципу вложенности."},{heading:`смотри-так-же-25`,content:`\\self::$variables`},{heading:`смотри-так-же-25`,content:`\\self::generate\\_link()`},{heading:`свойства-23`,content:`Название`},{heading:`свойства-23`,content:`Тип`},{heading:`свойства-23`,content:`По умолчанию`},{heading:`свойства-23`,content:`**$link**`},{heading:`свойства-23`,content:`\\AdminLink`},{heading:`свойства-23`,content:`**$parent**`},{heading:`свойства-23`,content:`string`},{heading:`краткое-содержание-28`,content:`Добавляет несколько ссылок в массив меню.`},{heading:`описание-21`,content:"Использует метод `setLink` для добавления каждой ссылки."},{heading:`смотри-так-же-26`,content:`\\Admin::setLink()`},{heading:`свойства-24`,content:`Название`},{heading:`свойства-24`,content:`Тип`},{heading:`свойства-24`,content:`По умолчанию`},{heading:`свойства-24`,content:`**$links**`},{heading:`свойства-24`,content:`array`},{heading:`краткое-содержание-29`,content:`Устанавливает префикс для использования в загрузке данных.`},{heading:`описание-22`,content:'Если переданное имя соответствует значениям "users" или "usergroup",\nто префикс устанавливается в значение константы `USERPREFIX`.\nВ противном случае используется значение по умолчанию из константы `PREFIX`.'},{heading:`свойства-25`,content:`Название`},{heading:`свойства-25`,content:`Тип`},{heading:`свойства-25`,content:`По умолчанию`},{heading:`свойства-25`,content:`**$name**`},{heading:`свойства-25`,content:`string\\|null`},{heading:`свойства-25`,content:`null`},{heading:`краткое-содержание-30`,content:`Устанавливает значение переменной или обновляет существующую.`},{heading:`описание-23`,content:"Метод добавляет новую переменную в массив `$variables` или обновляет значение\nуже существующей, идентифицируемой по имени."},{heading:`свойства-26`,content:`Название`},{heading:`свойства-26`,content:`Тип`},{heading:`свойства-26`,content:`По умолчанию`},{heading:`свойства-26`,content:`**$name**`},{heading:`свойства-26`,content:`string`},{heading:`свойства-26`,content:`**$value**`},{heading:`свойства-26`,content:`mixed`},{heading:`краткое-содержание-31`,content:"Устанавливает или обновляет несколько переменных в массиве `$variables`."},{heading:`описание-24`,content:`Метод принимает ассоциативный массив и обновляет соответствующие переменные с использованием
метода \\{@see}. Если ключ из массива отсутствует в допустимых значениях,
он все равно будет добавлен.`},{heading:`смотри-так-же-27`,content:`\\Admin::setVar()`},{heading:`смотри-так-же-27`,content:`\\Admin::$variables`},{heading:`свойства-27`,content:`Название`},{heading:`свойства-27`,content:`Тип`},{heading:`свойства-27`,content:`По умолчанию`},{heading:`свойства-27`,content:`**$arr**`},{heading:`свойства-27`,content:`array`},{heading:`свойства-27`,content:`\\[]`},{heading:`краткое-содержание-32`,content:`TODO: доработать`},{heading:`краткое-содержание-33`,content:`Получает содержимое файла по указанным ссылкам.`},{heading:`описание-25`,content:"Метод пытается загрузить содержимое файла с основной (`link`) и,\nпри необходимости, с альтернативной (`alt`) ссылки, если содержимое\nпо основной ссылке пустое."},{heading:`свойства-28`,content:`Название`},{heading:`свойства-28`,content:`Тип`},{heading:`свойства-28`,content:`По умолчанию`},{heading:`свойства-28`,content:`**$data**`},{heading:`свойства-28`,content:`array`},{heading:`возвращает-34`,content:`Возвращает содержимое файла, либо null, если
не удалось загрузить файл.`},{heading:`краткое-содержание-34`,content:`Генерирует метаданные для указанного файла.`},{heading:`свойства-29`,content:`Название`},{heading:`свойства-29`,content:`Тип`},{heading:`свойства-29`,content:`По умолчанию`},{heading:`свойства-29`,content:`**$file\\_path**`},{heading:`свойства-29`,content:`string`},{heading:`ошибки-11`,content:`Тип`},{heading:`ошибки-11`,content:`Описание`},{heading:`ошибки-11`,content:`\\RuntimeException`},{heading:`ошибки-11`,content:`Если файл не существует или недоступен.`},{heading:`возвращает-35`,content:`Ассоциативный массив, содержащий следующую информацию о файле:`},{heading:`возвращает-35`,content:`'realpath' (string|null): Абсолютный путь до файла.`},{heading:`возвращает-35`,content:`'dirname' (string): Путь к директории, содержащей файл.`},{heading:`возвращает-35`,content:`'basename' (string): Имя файла с расширением.`},{heading:`возвращает-35`,content:`'filename' (string): Имя файла без расширения.`},{heading:`возвращает-35`,content:`'extension' (string|null): Расширение файла.`},{heading:`возвращает-35`,content:`'mime' (string): MIME-тип файла.`},{heading:`возвращает-35`,content:`'encoding' (string): Кодировка файла.`},{heading:`возвращает-35`,content:`'size' (int): Размер файла в байтах.`},{heading:`возвращает-35`,content:`'size\\_string' (string): Читаемое представление размера файла (например, "10.5 KB").`},{heading:`возвращает-35`,content:`'atime' (int): Временная метка последнего доступа к файлу.`},{heading:`возвращает-35`,content:`'mtime' (int): Временная метка последней модификации файла.`},{heading:`возвращает-35`,content:`'permission' (string): Права доступа к файлу (например, "0755").`},{heading:`краткое-содержание-35`,content:`Парсит данные о ресурсах (assets), проверяет наличие отсутствующих или обновленных,
и обновляет информацию. Также сохраняет актуальные данные в локальный файл ресурсов.`},{heading:`описание-26`,content:`Процесс включает следующие этапы:`},{heading:`описание-26`,content:"Получение списка локальных файлов и их данных через метод `prepare_assets`."},{heading:`описание-26`,content:`Получение данных об удаленных ресурсах через URL.`},{heading:`описание-26`,content:`Сравнение данных о хэшах локальных и удаленных ресурсов.`},{heading:`описание-26`,content:`Сохранение недостающих или обновленных ресурсов в локальное хранилище.`},{heading:`описание-26`,content:`Запись актуализированных данных в локальный JSON-файл.`},{heading:`смотри-так-же-28`,content:`\\AssetsChecker::save\\_asset()`},{heading:`смотри-так-же-28`,content:`\\AssetsChecker::prepare\\_assets()`},{heading:`смотри-так-же-28`,content:`\\DataManager::dirToArray()`},{heading:`ошибки-12`,content:`Тип`},{heading:`ошибки-12`,content:`Описание`},{heading:`ошибки-12`,content:`\\JsonException\\|\\Throwable`},{heading:`ошибки-12`,content:`Исключение выбрасывается в случае ошибки при работе с JSON.`},{heading:`краткое-содержание-36`,content:"Подготавливает данные о файлах, расположенных на локальном сервере, и сохраняет их в массив `assets_arr`."},{heading:`описание-27`,content:"Метод рекурсивно обрабатывает массив с файлами и создает запись для каждого файла в конечном массиве `assets_arr`,\nсодержащую путь, имя файла и его хэш."},{heading:`свойства-30`,content:`Название`},{heading:`свойства-30`,content:`Тип`},{heading:`свойства-30`,content:`По умолчанию`},{heading:`свойства-30`,content:`**$arr**`},{heading:`свойства-30`,content:`array`},{heading:`свойства-30`,content:`**$dir**`},{heading:`свойства-30`,content:`string`},{heading:`свойства-30`,content:`\\_\\_DIR\\_\\_`},{heading:`краткое-содержание-37`,content:`Сохраняет содержимое в файл и логирует сообщение при возникновении ошибки.`},{heading:`описание-28`,content:`Метод выполняет запись переданного содержимого в указанный путь файла,
проверяет, доступен ли файл для записи, и логирует ошибку в случае неудачи.`},{heading:`смотри-так-же-29`,content:`\\LogGenerator::generateLog()`},{heading:`свойства-31`,content:`Название`},{heading:`свойства-31`,content:`Тип`},{heading:`свойства-31`,content:`По умолчанию`},{heading:`свойства-31`,content:`**$file\\_path**`},{heading:`свойства-31`,content:`string`},{heading:`свойства-31`,content:`**$content**`},{heading:`свойства-31`,content:`string`},{heading:`свойства-31`,content:`**$file**`},{heading:`свойства-31`,content:`string`},{heading:`ошибки-13`,content:`Тип`},{heading:`ошибки-13`,content:`Описание`},{heading:`ошибки-13`,content:`\\Throwable`},{heading:`возвращает-38`,content:`Возвращает true, если файл успешно сохранён, или false — в случае ошибки.`},{heading:`краткое-содержание-38`,content:`Сохраняет данные в кеш.`},{heading:`описание-29`,content:`Метод записывает данные в кеш, используя указанный тип и имя.
Для сохранения данных вызывается метод \`CacheControl::setCache\`, который
обрабатывает директорию и имя файла, записывает данные в формате JSON
и устанавливает необходимые права доступа к файлу.`},{heading:`смотри-так-же-30`,content:`\\CacheControl::setCache()`},{heading:`свойства-32`,content:`Название`},{heading:`свойства-32`,content:`Тип`},{heading:`свойства-32`,content:`По умолчанию`},{heading:`свойства-32`,content:`**$type**`},{heading:`свойства-32`,content:`string`},{heading:`свойства-32`,content:`**$name**`},{heading:`свойства-32`,content:`string`},{heading:`свойства-32`,content:`**$data**`},{heading:`свойства-32`,content:`mixed`},{heading:`ошибки-14`,content:`Тип`},{heading:`ошибки-14`,content:`Описание`},{heading:`ошибки-14`,content:`\\JsonException`},{heading:`краткое-содержание-39`,content:`Устанавливает информацию об авторе и сохраняет её в массиве глобальных переменных.`},{heading:`описание-30`,content:`Информация об авторе включает:`},{heading:`описание-30`,content:`Имя автора;`},{heading:`описание-30`,content:`Контактные данные (например, E-Mail, Telegram, Вебсайт);`},{heading:`описание-30`,content:`Данные о пожертвованиях (например, PayPal, Ko-Fi, Yandex.Money, DonationAlerts).`},{heading:`описание-30`,content:"Контактные данные локализуются с использованием функции `__()`."},{heading:`смотри-так-же-31`,content:`\\Admin::$variables`},{heading:`смотри-так-же-31`,content:`\\Author`},{heading:`ошибки-15`,content:`Тип`},{heading:`ошибки-15`,content:`Описание`},{heading:`ошибки-15`,content:`\\Throwable`},{heading:`ошибки-15`,content:`В случае ошибок при добавлении информации или работе с объектом Author.`}],headings:[{id:`краткое-содержание`,content:`Краткое содержание:`},{id:`описание`,content:`Описание:`},{id:`свойства`,content:`Свойства`},{id:`методы`,content:`Методы`},{id:`подробности`,content:`Подробности`},{id:`свойства-1`,content:`Свойства`},{id:`protected-postxfieldkeys--array`,content:`protected $postXfieldKeys : array`},{id:`protected-userxfieldkeys--array`,content:`protected $userXfieldKeys : array`},{id:`private-asset_file--string`,content:`private $asset_file : string`},{id:`private-assets_arr--array`,content:`private $assets_arr : array`},{id:`private-assets_dir--string`,content:`private $assets_dir : string`},{id:`private-breadcrumb--array`,content:`private $breadcrumb : array`},{id:`private-cache_folder--string`,content:`private $cache_folder : string`},{id:`private-cssarr--array`,content:`private $cssArr : array`},{id:`tags`,content:`Tags`},{id:`private-jsarr--array`,content:`private $jsArr : array`},{id:`tags-1`,content:`Tags`},{id:`private-links--array`,content:`private $links : array`},{id:`private-prefix--string`,content:`private $prefix : ?string`},{id:`private-variables--array`,content:`private $variables : array`},{id:`методы-1`,content:`Методы`},{id:`__construct`,content:`\\__construct`},{id:`краткое-содержание-1`,content:`Краткое содержание`},{id:`описание-1`,content:`Описание`},{id:`смотри-так-же`,content:`Смотри так-же:`},{id:`ошибки`,content:`Ошибки:`},{id:`возвращает`,content:`Возвращает:`},{id:`checkassets`,content:`checkAssets`},{id:`краткое-содержание-2`,content:`Краткое содержание`},{id:`описание-2`,content:`Описание`},{id:`смотри-так-же-1`,content:`Смотри так-же:`},{id:`свойства-2`,content:`Свойства:`},{id:`ошибки-1`,content:`Ошибки:`},{id:`возвращает-1`,content:`Возвращает:`},{id:`clear_cache`,content:`clear_cache`},{id:`краткое-содержание-3`,content:`Краткое содержание`},{id:`описание-3`,content:`Описание`},{id:`смотри-так-же-2`,content:`Смотри так-же:`},{id:`свойства-3`,content:`Свойства:`},{id:`возвращает-2`,content:`Возвращает:`},{id:`generate_link`,content:`generate_link`},{id:`краткое-содержание-4`,content:`Краткое содержание`},{id:`смотри-так-же-3`,content:`Смотри так-же:`},{id:`свойства-4`,content:`Свойства:`},{id:`возвращает-3`,content:`Возвращает:`},{id:`get_cache`,content:`get_cache`},{id:`краткое-содержание-5`,content:`Краткое содержание`},{id:`описание-4`,content:`Описание`},{id:`смотри-так-же-4`,content:`Смотри так-же:`},{id:`свойства-5`,content:`Свойства:`},{id:`ошибки-2`,content:`Ошибки:`},{id:`возвращает-4`,content:`Возвращает:`},{id:`get_used_xfields`,content:`get_used_xfields`},{id:`краткое-содержание-6`,content:`Краткое содержание`},{id:`описание-5`,content:`Описание`},{id:`смотри-так-же-5`,content:`Смотри так-же:`},{id:`свойства-6`,content:`Свойства:`},{id:`ошибки-3`,content:`Ошибки:`},{id:`возвращает-5`,content:`Возвращает:`},{id:`getbreadcrumb`,content:`getBreadcrumb`},{id:`краткое-содержание-7`,content:`Краткое содержание`},{id:`смотри-так-же-6`,content:`Смотри так-же:`},{id:`возвращает-6`,content:`Возвращает:`},{id:`getcachefolder`,content:`getCacheFolder`},{id:`возвращает-7`,content:`Возвращает:`},{id:`getcats`,content:`getCats`},{id:`краткое-содержание-8`,content:`Краткое содержание`},{id:`описание-6`,content:`Описание`},{id:`смотри-так-же-7`,content:`Смотри так-же:`},{id:`ошибки-4`,content:`Ошибки:`},{id:`возвращает-8`,content:`Возвращает:`},{id:`getlinkinfo`,content:`getLinkInfo`},{id:`краткое-содержание-9`,content:`Краткое содержание`},{id:`свойства-7`,content:`Свойства:`},{id:`возвращает-9`,content:`Возвращает:`},{id:`getlinkname`,content:`getLinkName`},{id:`краткое-содержание-10`,content:`Краткое содержание`},{id:`описание-7`,content:`Описание`},{id:`смотри-так-же-8`,content:`Смотри так-же:`},{id:`свойства-8`,content:`Свойства:`},{id:`возвращает-10`,content:`Возвращает:`},{id:`getlinkurl`,content:`getLinkUrl`},{id:`краткое-содержание-11`,content:`Краткое содержание`},{id:`описание-8`,content:`Описание`},{id:`смотри-так-же-9`,content:`Смотри так-же:`},{id:`свойства-9`,content:`Свойства:`},{id:`возвращает-11`,content:`Возвращает:`},{id:`getprefix`,content:`getPrefix`},{id:`краткое-содержание-12`,content:`Краткое содержание`},{id:`описание-9`,content:`Описание`},{id:`смотри-так-же-10`,content:`Смотри так-же:`},{id:`возвращает-12`,content:`Возвращает:`},{id:`getuser`,content:`getUser`},{id:`краткое-содержание-13`,content:`Краткое содержание`},{id:`описание-10`,content:`Описание`},{id:`смотри-так-же-11`,content:`Смотри так-же:`},{id:`свойства-10`,content:`Свойства:`},{id:`ошибки-5`,content:`Ошибки:`},{id:`возвращает-13`,content:`Возвращает:`},{id:`getusergroups`,content:`getUserGroups`},{id:`краткое-содержание-14`,content:`Краткое содержание`},{id:`описание-11`,content:`Описание`},{id:`смотри-так-же-12`,content:`Смотри так-же:`},{id:`ошибки-6`,content:`Ошибки:`},{id:`возвращает-14`,content:`Возвращает:`},{id:`getusers`,content:`getUsers`},{id:`краткое-содержание-15`,content:`Краткое содержание`},{id:`описание-12`,content:`Описание`},{id:`смотри-так-же-13`,content:`Смотри так-же:`},{id:`ошибки-7`,content:`Ошибки:`},{id:`возвращает-15`,content:`Возвращает:`},{id:`getvariables`,content:`getVariables`},{id:`краткое-содержание-16`,content:`Краткое содержание`},{id:`описание-13`,content:`Описание`},{id:`смотри-так-же-14`,content:`Смотри так-же:`},{id:`свойства-11`,content:`Свойства:`},{id:`возвращает-16`,content:`Возвращает:`},{id:`getxfieldinfo`,content:`getXfieldInfo`},{id:`краткое-содержание-17`,content:`Краткое содержание`},{id:`смотри-так-же-15`,content:`Смотри так-же:`},{id:`свойства-12`,content:`Свойства:`},{id:`возвращает-17`,content:`Возвращает:`},{id:`htmlstatic`,content:`htmlStatic`},{id:`краткое-содержание-18`,content:`Краткое содержание`},{id:`описание-14`,content:`Описание`},{id:`смотри-так-же-16`,content:`Смотри так-же:`},{id:`свойства-13`,content:`Свойства:`},{id:`возвращает-18`,content:`Возвращает:`},{id:`load_data`,content:`load_data`},{id:`краткое-содержание-19`,content:`Краткое содержание`},{id:`описание-15`,content:`Описание`},{id:`смотри-так-же-17`,content:`Смотри так-же:`},{id:`свойства-14`,content:`Свойства:`},{id:`ошибки-8`,content:`Ошибки:`},{id:`возвращает-19`,content:`Возвращает:`},{id:`loadxfields`,content:`loadXfields`},{id:`краткое-содержание-20`,content:`Краткое содержание`},{id:`описание-16`,content:`Описание`},{id:`смотри-так-же-18`,content:`Смотри так-же:`},{id:`свойства-15`,content:`Свойства:`},{id:`возвращает-20`,content:`Возвращает:`},{id:`parseassets`,content:`parseAssets`},{id:`краткое-содержание-21`,content:`Краткое содержание`},{id:`описание-17`,content:`Описание`},{id:`смотри-так-же-19`,content:`Смотри так-же:`},{id:`свойства-16`,content:`Свойства:`},{id:`ошибки-9`,content:`Ошибки:`},{id:`возвращает-21`,content:`Возвращает:`},{id:`save_asset`,content:`save_asset`},{id:`краткое-содержание-22`,content:`Краткое содержание`},{id:`смотри-так-же-20`,content:`Смотри так-же:`},{id:`свойства-17`,content:`Свойства:`},{id:`ошибки-10`,content:`Ошибки:`},{id:`возвращает-22`,content:`Возвращает:`},{id:`setauthor`,content:`setAuthor`},{id:`краткое-содержание-23`,content:`Краткое содержание`},{id:`смотри-так-же-21`,content:`Смотри так-же:`},{id:`свойства-18`,content:`Свойства:`},{id:`возвращает-23`,content:`Возвращает:`},{id:`setbreadcrumb`,content:`setBreadcrumb`},{id:`краткое-содержание-24`,content:`Краткое содержание`},{id:`смотри-так-же-22`,content:`Смотри так-же:`},{id:`свойства-19`,content:`Свойства:`},{id:`возвращает-24`,content:`Возвращает:`},{id:`setcachefolder`,content:`setCacheFolder`},{id:`свойства-20`,content:`Свойства:`},{id:`возвращает-25`,content:`Возвращает:`},{id:`setcss`,content:`setCss`},{id:`краткое-содержание-25`,content:`Краткое содержание`},{id:`описание-18`,content:`Описание`},{id:`смотри-так-же-23`,content:`Смотри так-же:`},{id:`свойства-21`,content:`Свойства:`},{id:`возвращает-26`,content:`Возвращает:`},{id:`setjs`,content:`setJs`},{id:`краткое-содержание-26`,content:`Краткое содержание`},{id:`описание-19`,content:`Описание`},{id:`смотри-так-же-24`,content:`Смотри так-же:`},{id:`свойства-22`,content:`Свойства:`},{id:`возвращает-27`,content:`Возвращает:`},{id:`setlink`,content:`setLink`},{id:`краткое-содержание-27`,content:`Краткое содержание`},{id:`описание-20`,content:`Описание`},{id:`смотри-так-же-25`,content:`Смотри так-же:`},{id:`свойства-23`,content:`Свойства:`},{id:`возвращает-28`,content:`Возвращает:`},{id:`setlinks`,content:`setLinks`},{id:`краткое-содержание-28`,content:`Краткое содержание`},{id:`описание-21`,content:`Описание`},{id:`смотри-так-же-26`,content:`Смотри так-же:`},{id:`свойства-24`,content:`Свойства:`},{id:`возвращает-29`,content:`Возвращает:`},{id:`setprefix`,content:`setPrefix`},{id:`краткое-содержание-29`,content:`Краткое содержание`},{id:`описание-22`,content:`Описание`},{id:`свойства-25`,content:`Свойства:`},{id:`возвращает-30`,content:`Возвращает:`},{id:`setvar`,content:`setVar`},{id:`краткое-содержание-30`,content:`Краткое содержание`},{id:`описание-23`,content:`Описание`},{id:`свойства-26`,content:`Свойства:`},{id:`возвращает-31`,content:`Возвращает:`},{id:`setvars`,content:`setVars`},{id:`краткое-содержание-31`,content:`Краткое содержание`},{id:`описание-24`,content:`Описание`},{id:`смотри-так-же-27`,content:`Смотри так-же:`},{id:`свойства-27`,content:`Свойства:`},{id:`возвращает-32`,content:`Возвращает:`},{id:`upload_file`,content:`upload_file`},{id:`краткое-содержание-32`,content:`Краткое содержание`},{id:`возвращает-33`,content:`Возвращает:`},{id:`fetchfilecontent`,content:`fetchFileContent`},{id:`краткое-содержание-33`,content:`Краткое содержание`},{id:`описание-25`,content:`Описание`},{id:`свойства-28`,content:`Свойства:`},{id:`возвращает-34`,content:`Возвращает:`},{id:`generatefilemetadata`,content:`generateFileMetadata`},{id:`краткое-содержание-34`,content:`Краткое содержание`},{id:`свойства-29`,content:`Свойства:`},{id:`ошибки-11`,content:`Ошибки:`},{id:`возвращает-35`,content:`Возвращает:`},{id:`parse_assets`,content:`parse_assets`},{id:`краткое-содержание-35`,content:`Краткое содержание`},{id:`описание-26`,content:`Описание`},{id:`смотри-так-же-28`,content:`Смотри так-же:`},{id:`ошибки-12`,content:`Ошибки:`},{id:`возвращает-36`,content:`Возвращает:`},{id:`prepare_assets`,content:`prepare_assets`},{id:`краткое-содержание-36`,content:`Краткое содержание`},{id:`описание-27`,content:`Описание`},{id:`свойства-30`,content:`Свойства:`},{id:`возвращает-37`,content:`Возвращает:`},{id:`savefile`,content:`saveFile`},{id:`краткое-содержание-37`,content:`Краткое содержание`},{id:`описание-28`,content:`Описание`},{id:`смотри-так-же-29`,content:`Смотри так-же:`},{id:`свойства-31`,content:`Свойства:`},{id:`ошибки-13`,content:`Ошибки:`},{id:`возвращает-38`,content:`Возвращает:`},{id:`set_cache`,content:`set_cache`},{id:`краткое-содержание-38`,content:`Краткое содержание`},{id:`описание-29`,content:`Описание`},{id:`смотри-так-же-30`,content:`Смотри так-же:`},{id:`свойства-32`,content:`Свойства:`},{id:`ошибки-14`,content:`Ошибки:`},{id:`возвращает-39`,content:`Возвращает:`},{id:`setdefaultauthor`,content:`setDefaultAuthor`},{id:`краткое-содержание-39`,content:`Краткое содержание`},{id:`описание-30`,content:`Описание`},{id:`смотри-так-же-31`,content:`Смотри так-же:`},{id:`ошибки-15`,content:`Ошибки:`},{id:`возвращает-40`,content:`Возвращает:`}]},s=[{depth:2,url:`#краткое-содержание`,title:(0,n.jsx)(n.Fragment,{children:`Краткое содержание:`})},{depth:2,url:`#описание`,title:(0,n.jsx)(n.Fragment,{children:`Описание:`})},{depth:3,url:`#свойства`,title:(0,n.jsx)(n.Fragment,{children:`Свойства`})},{depth:3,url:`#методы`,title:(0,n.jsx)(n.Fragment,{children:`Методы`})},{depth:3,url:`#подробности`,title:(0,n.jsx)(n.Fragment,{children:`Подробности`})},{depth:2,url:`#свойства-1`,title:(0,n.jsx)(n.Fragment,{children:`Свойства`})},{depth:4,url:`#protected-postxfieldkeys--array`,title:(0,n.jsx)(n.Fragment,{children:`protected $postXfieldKeys : array`})},{depth:4,url:`#protected-userxfieldkeys--array`,title:(0,n.jsx)(n.Fragment,{children:`protected $userXfieldKeys : array`})},{depth:4,url:`#private-asset_file--string`,title:(0,n.jsx)(n.Fragment,{children:`private $asset_file : string`})},{depth:4,url:`#private-assets_arr--array`,title:(0,n.jsx)(n.Fragment,{children:`private $assets_arr : array`})},{depth:4,url:`#private-assets_dir--string`,title:(0,n.jsx)(n.Fragment,{children:`private $assets_dir : string`})},{depth:4,url:`#private-breadcrumb--array`,title:(0,n.jsx)(n.Fragment,{children:`private $breadcrumb : array`})},{depth:4,url:`#private-cache_folder--string`,title:(0,n.jsx)(n.Fragment,{children:`private $cache_folder : string`})},{depth:4,url:`#private-cssarr--array`,title:(0,n.jsx)(n.Fragment,{children:`private $cssArr : array`})},{depth:5,url:`#tags`,title:(0,n.jsx)(n.Fragment,{children:`Tags`})},{depth:4,url:`#private-jsarr--array`,title:(0,n.jsx)(n.Fragment,{children:`private $jsArr : array`})},{depth:5,url:`#tags-1`,title:(0,n.jsx)(n.Fragment,{children:`Tags`})},{depth:4,url:`#private-links--array`,title:(0,n.jsx)(n.Fragment,{children:`private $links : array`})},{depth:4,url:`#private-prefix--string`,title:(0,n.jsx)(n.Fragment,{children:`private $prefix : ?string`})},{depth:4,url:`#private-variables--array`,title:(0,n.jsx)(n.Fragment,{children:`private $variables : array`})},{depth:2,url:`#методы-1`,title:(0,n.jsx)(n.Fragment,{children:`Методы`})},{depth:3,url:`#__construct`,title:(0,n.jsx)(n.Fragment,{children:`__construct`})},{depth:5,url:`#краткое-содержание-1`,title:(0,n.jsx)(n.Fragment,{children:`Краткое содержание`})},{depth:5,url:`#описание-1`,title:(0,n.jsx)(n.Fragment,{children:`Описание`})},{depth:5,url:`#смотри-так-же`,title:(0,n.jsx)(n.Fragment,{children:`Смотри так-же:`})},{depth:5,url:`#ошибки`,title:(0,n.jsx)(n.Fragment,{children:`Ошибки:`})},{depth:5,url:`#возвращает`,title:(0,n.jsx)(n.Fragment,{children:`Возвращает:`})},{depth:3,url:`#checkassets`,title:(0,n.jsx)(n.Fragment,{children:`checkAssets`})},{depth:5,url:`#краткое-содержание-2`,title:(0,n.jsx)(n.Fragment,{children:`Краткое содержание`})},{depth:5,url:`#описание-2`,title:(0,n.jsx)(n.Fragment,{children:`Описание`})},{depth:5,url:`#смотри-так-же-1`,title:(0,n.jsx)(n.Fragment,{children:`Смотри так-же:`})},{depth:5,url:`#свойства-2`,title:(0,n.jsx)(n.Fragment,{children:`Свойства:`})},{depth:5,url:`#ошибки-1`,title:(0,n.jsx)(n.Fragment,{children:`Ошибки:`})},{depth:5,url:`#возвращает-1`,title:(0,n.jsx)(n.Fragment,{children:`Возвращает:`})},{depth:3,url:`#clear_cache`,title:(0,n.jsx)(n.Fragment,{children:`clear_cache`})},{depth:5,url:`#краткое-содержание-3`,title:(0,n.jsx)(n.Fragment,{children:`Краткое содержание`})},{depth:5,url:`#описание-3`,title:(0,n.jsx)(n.Fragment,{children:`Описание`})},{depth:5,url:`#смотри-так-же-2`,title:(0,n.jsx)(n.Fragment,{children:`Смотри так-же:`})},{depth:5,url:`#свойства-3`,title:(0,n.jsx)(n.Fragment,{children:`Свойства:`})},{depth:5,url:`#возвращает-2`,title:(0,n.jsx)(n.Fragment,{children:`Возвращает:`})},{depth:3,url:`#generate_link`,title:(0,n.jsx)(n.Fragment,{children:`generate_link`})},{depth:5,url:`#краткое-содержание-4`,title:(0,n.jsx)(n.Fragment,{children:`Краткое содержание`})},{depth:5,url:`#смотри-так-же-3`,title:(0,n.jsx)(n.Fragment,{children:`Смотри так-же:`})},{depth:5,url:`#свойства-4`,title:(0,n.jsx)(n.Fragment,{children:`Свойства:`})},{depth:5,url:`#возвращает-3`,title:(0,n.jsx)(n.Fragment,{children:`Возвращает:`})},{depth:3,url:`#get_cache`,title:(0,n.jsx)(n.Fragment,{children:`get_cache`})},{depth:5,url:`#краткое-содержание-5`,title:(0,n.jsx)(n.Fragment,{children:`Краткое содержание`})},{depth:5,url:`#описание-4`,title:(0,n.jsx)(n.Fragment,{children:`Описание`})},{depth:5,url:`#смотри-так-же-4`,title:(0,n.jsx)(n.Fragment,{children:`Смотри так-же:`})},{depth:5,url:`#свойства-5`,title:(0,n.jsx)(n.Fragment,{children:`Свойства:`})},{depth:5,url:`#ошибки-2`,title:(0,n.jsx)(n.Fragment,{children:`Ошибки:`})},{depth:5,url:`#возвращает-4`,title:(0,n.jsx)(n.Fragment,{children:`Возвращает:`})},{depth:3,url:`#get_used_xfields`,title:(0,n.jsx)(n.Fragment,{children:`get_used_xfields`})},{depth:5,url:`#краткое-содержание-6`,title:(0,n.jsx)(n.Fragment,{children:`Краткое содержание`})},{depth:5,url:`#описание-5`,title:(0,n.jsx)(n.Fragment,{children:`Описание`})},{depth:5,url:`#смотри-так-же-5`,title:(0,n.jsx)(n.Fragment,{children:`Смотри так-же:`})},{depth:5,url:`#свойства-6`,title:(0,n.jsx)(n.Fragment,{children:`Свойства:`})},{depth:5,url:`#ошибки-3`,title:(0,n.jsx)(n.Fragment,{children:`Ошибки:`})},{depth:5,url:`#возвращает-5`,title:(0,n.jsx)(n.Fragment,{children:`Возвращает:`})},{depth:3,url:`#getbreadcrumb`,title:(0,n.jsx)(n.Fragment,{children:`getBreadcrumb`})},{depth:5,url:`#краткое-содержание-7`,title:(0,n.jsx)(n.Fragment,{children:`Краткое содержание`})},{depth:5,url:`#смотри-так-же-6`,title:(0,n.jsx)(n.Fragment,{children:`Смотри так-же:`})},{depth:5,url:`#возвращает-6`,title:(0,n.jsx)(n.Fragment,{children:`Возвращает:`})},{depth:3,url:`#getcachefolder`,title:(0,n.jsx)(n.Fragment,{children:`getCacheFolder`})},{depth:5,url:`#возвращает-7`,title:(0,n.jsx)(n.Fragment,{children:`Возвращает:`})},{depth:3,url:`#getcats`,title:(0,n.jsx)(n.Fragment,{children:`getCats`})},{depth:5,url:`#краткое-содержание-8`,title:(0,n.jsx)(n.Fragment,{children:`Краткое содержание`})},{depth:5,url:`#описание-6`,title:(0,n.jsx)(n.Fragment,{children:`Описание`})},{depth:5,url:`#смотри-так-же-7`,title:(0,n.jsx)(n.Fragment,{children:`Смотри так-же:`})},{depth:5,url:`#ошибки-4`,title:(0,n.jsx)(n.Fragment,{children:`Ошибки:`})},{depth:5,url:`#возвращает-8`,title:(0,n.jsx)(n.Fragment,{children:`Возвращает:`})},{depth:3,url:`#getlinkinfo`,title:(0,n.jsx)(n.Fragment,{children:`getLinkInfo`})},{depth:5,url:`#краткое-содержание-9`,title:(0,n.jsx)(n.Fragment,{children:`Краткое содержание`})},{depth:5,url:`#свойства-7`,title:(0,n.jsx)(n.Fragment,{children:`Свойства:`})},{depth:5,url:`#возвращает-9`,title:(0,n.jsx)(n.Fragment,{children:`Возвращает:`})},{depth:3,url:`#getlinkname`,title:(0,n.jsx)(n.Fragment,{children:`getLinkName`})},{depth:5,url:`#краткое-содержание-10`,title:(0,n.jsx)(n.Fragment,{children:`Краткое содержание`})},{depth:5,url:`#описание-7`,title:(0,n.jsx)(n.Fragment,{children:`Описание`})},{depth:5,url:`#смотри-так-же-8`,title:(0,n.jsx)(n.Fragment,{children:`Смотри так-же:`})},{depth:5,url:`#свойства-8`,title:(0,n.jsx)(n.Fragment,{children:`Свойства:`})},{depth:5,url:`#возвращает-10`,title:(0,n.jsx)(n.Fragment,{children:`Возвращает:`})},{depth:3,url:`#getlinkurl`,title:(0,n.jsx)(n.Fragment,{children:`getLinkUrl`})},{depth:5,url:`#краткое-содержание-11`,title:(0,n.jsx)(n.Fragment,{children:`Краткое содержание`})},{depth:5,url:`#описание-8`,title:(0,n.jsx)(n.Fragment,{children:`Описание`})},{depth:5,url:`#смотри-так-же-9`,title:(0,n.jsx)(n.Fragment,{children:`Смотри так-же:`})},{depth:5,url:`#свойства-9`,title:(0,n.jsx)(n.Fragment,{children:`Свойства:`})},{depth:5,url:`#возвращает-11`,title:(0,n.jsx)(n.Fragment,{children:`Возвращает:`})},{depth:3,url:`#getprefix`,title:(0,n.jsx)(n.Fragment,{children:`getPrefix`})},{depth:5,url:`#краткое-содержание-12`,title:(0,n.jsx)(n.Fragment,{children:`Краткое содержание`})},{depth:5,url:`#описание-9`,title:(0,n.jsx)(n.Fragment,{children:`Описание`})},{depth:5,url:`#смотри-так-же-10`,title:(0,n.jsx)(n.Fragment,{children:`Смотри так-же:`})},{depth:5,url:`#возвращает-12`,title:(0,n.jsx)(n.Fragment,{children:`Возвращает:`})},{depth:3,url:`#getuser`,title:(0,n.jsx)(n.Fragment,{children:`getUser`})},{depth:5,url:`#краткое-содержание-13`,title:(0,n.jsx)(n.Fragment,{children:`Краткое содержание`})},{depth:5,url:`#описание-10`,title:(0,n.jsx)(n.Fragment,{children:`Описание`})},{depth:5,url:`#смотри-так-же-11`,title:(0,n.jsx)(n.Fragment,{children:`Смотри так-же:`})},{depth:5,url:`#свойства-10`,title:(0,n.jsx)(n.Fragment,{children:`Свойства:`})},{depth:5,url:`#ошибки-5`,title:(0,n.jsx)(n.Fragment,{children:`Ошибки:`})},{depth:5,url:`#возвращает-13`,title:(0,n.jsx)(n.Fragment,{children:`Возвращает:`})},{depth:3,url:`#getusergroups`,title:(0,n.jsx)(n.Fragment,{children:`getUserGroups`})},{depth:5,url:`#краткое-содержание-14`,title:(0,n.jsx)(n.Fragment,{children:`Краткое содержание`})},{depth:5,url:`#описание-11`,title:(0,n.jsx)(n.Fragment,{children:`Описание`})},{depth:5,url:`#смотри-так-же-12`,title:(0,n.jsx)(n.Fragment,{children:`Смотри так-же:`})},{depth:5,url:`#ошибки-6`,title:(0,n.jsx)(n.Fragment,{children:`Ошибки:`})},{depth:5,url:`#возвращает-14`,title:(0,n.jsx)(n.Fragment,{children:`Возвращает:`})},{depth:3,url:`#getusers`,title:(0,n.jsx)(n.Fragment,{children:`getUsers`})},{depth:5,url:`#краткое-содержание-15`,title:(0,n.jsx)(n.Fragment,{children:`Краткое содержание`})},{depth:5,url:`#описание-12`,title:(0,n.jsx)(n.Fragment,{children:`Описание`})},{depth:5,url:`#смотри-так-же-13`,title:(0,n.jsx)(n.Fragment,{children:`Смотри так-же:`})},{depth:5,url:`#ошибки-7`,title:(0,n.jsx)(n.Fragment,{children:`Ошибки:`})},{depth:5,url:`#возвращает-15`,title:(0,n.jsx)(n.Fragment,{children:`Возвращает:`})},{depth:3,url:`#getvariables`,title:(0,n.jsx)(n.Fragment,{children:`getVariables`})},{depth:5,url:`#краткое-содержание-16`,title:(0,n.jsx)(n.Fragment,{children:`Краткое содержание`})},{depth:5,url:`#описание-13`,title:(0,n.jsx)(n.Fragment,{children:`Описание`})},{depth:5,url:`#смотри-так-же-14`,title:(0,n.jsx)(n.Fragment,{children:`Смотри так-же:`})},{depth:5,url:`#свойства-11`,title:(0,n.jsx)(n.Fragment,{children:`Свойства:`})},{depth:5,url:`#возвращает-16`,title:(0,n.jsx)(n.Fragment,{children:`Возвращает:`})},{depth:3,url:`#getxfieldinfo`,title:(0,n.jsx)(n.Fragment,{children:`getXfieldInfo`})},{depth:5,url:`#краткое-содержание-17`,title:(0,n.jsx)(n.Fragment,{children:`Краткое содержание`})},{depth:5,url:`#смотри-так-же-15`,title:(0,n.jsx)(n.Fragment,{children:`Смотри так-же:`})},{depth:5,url:`#свойства-12`,title:(0,n.jsx)(n.Fragment,{children:`Свойства:`})},{depth:5,url:`#возвращает-17`,title:(0,n.jsx)(n.Fragment,{children:`Возвращает:`})},{depth:3,url:`#htmlstatic`,title:(0,n.jsx)(n.Fragment,{children:`htmlStatic`})},{depth:5,url:`#краткое-содержание-18`,title:(0,n.jsx)(n.Fragment,{children:`Краткое содержание`})},{depth:5,url:`#описание-14`,title:(0,n.jsx)(n.Fragment,{children:`Описание`})},{depth:5,url:`#смотри-так-же-16`,title:(0,n.jsx)(n.Fragment,{children:`Смотри так-же:`})},{depth:5,url:`#свойства-13`,title:(0,n.jsx)(n.Fragment,{children:`Свойства:`})},{depth:5,url:`#возвращает-18`,title:(0,n.jsx)(n.Fragment,{children:`Возвращает:`})},{depth:3,url:`#load_data`,title:(0,n.jsx)(n.Fragment,{children:`load_data`})},{depth:5,url:`#краткое-содержание-19`,title:(0,n.jsx)(n.Fragment,{children:`Краткое содержание`})},{depth:5,url:`#описание-15`,title:(0,n.jsx)(n.Fragment,{children:`Описание`})},{depth:5,url:`#смотри-так-же-17`,title:(0,n.jsx)(n.Fragment,{children:`Смотри так-же:`})},{depth:5,url:`#свойства-14`,title:(0,n.jsx)(n.Fragment,{children:`Свойства:`})},{depth:5,url:`#ошибки-8`,title:(0,n.jsx)(n.Fragment,{children:`Ошибки:`})},{depth:5,url:`#возвращает-19`,title:(0,n.jsx)(n.Fragment,{children:`Возвращает:`})},{depth:3,url:`#loadxfields`,title:(0,n.jsx)(n.Fragment,{children:`loadXfields`})},{depth:5,url:`#краткое-содержание-20`,title:(0,n.jsx)(n.Fragment,{children:`Краткое содержание`})},{depth:5,url:`#описание-16`,title:(0,n.jsx)(n.Fragment,{children:`Описание`})},{depth:5,url:`#смотри-так-же-18`,title:(0,n.jsx)(n.Fragment,{children:`Смотри так-же:`})},{depth:5,url:`#свойства-15`,title:(0,n.jsx)(n.Fragment,{children:`Свойства:`})},{depth:5,url:`#возвращает-20`,title:(0,n.jsx)(n.Fragment,{children:`Возвращает:`})},{depth:3,url:`#parseassets`,title:(0,n.jsx)(n.Fragment,{children:`parseAssets`})},{depth:5,url:`#краткое-содержание-21`,title:(0,n.jsx)(n.Fragment,{children:`Краткое содержание`})},{depth:5,url:`#описание-17`,title:(0,n.jsx)(n.Fragment,{children:`Описание`})},{depth:5,url:`#смотри-так-же-19`,title:(0,n.jsx)(n.Fragment,{children:`Смотри так-же:`})},{depth:5,url:`#свойства-16`,title:(0,n.jsx)(n.Fragment,{children:`Свойства:`})},{depth:5,url:`#ошибки-9`,title:(0,n.jsx)(n.Fragment,{children:`Ошибки:`})},{depth:5,url:`#возвращает-21`,title:(0,n.jsx)(n.Fragment,{children:`Возвращает:`})},{depth:3,url:`#save_asset`,title:(0,n.jsx)(n.Fragment,{children:`save_asset`})},{depth:5,url:`#краткое-содержание-22`,title:(0,n.jsx)(n.Fragment,{children:`Краткое содержание`})},{depth:5,url:`#смотри-так-же-20`,title:(0,n.jsx)(n.Fragment,{children:`Смотри так-же:`})},{depth:5,url:`#свойства-17`,title:(0,n.jsx)(n.Fragment,{children:`Свойства:`})},{depth:5,url:`#ошибки-10`,title:(0,n.jsx)(n.Fragment,{children:`Ошибки:`})},{depth:5,url:`#возвращает-22`,title:(0,n.jsx)(n.Fragment,{children:`Возвращает:`})},{depth:3,url:`#setauthor`,title:(0,n.jsx)(n.Fragment,{children:`setAuthor`})},{depth:5,url:`#краткое-содержание-23`,title:(0,n.jsx)(n.Fragment,{children:`Краткое содержание`})},{depth:5,url:`#смотри-так-же-21`,title:(0,n.jsx)(n.Fragment,{children:`Смотри так-же:`})},{depth:5,url:`#свойства-18`,title:(0,n.jsx)(n.Fragment,{children:`Свойства:`})},{depth:5,url:`#возвращает-23`,title:(0,n.jsx)(n.Fragment,{children:`Возвращает:`})},{depth:3,url:`#setbreadcrumb`,title:(0,n.jsx)(n.Fragment,{children:`setBreadcrumb`})},{depth:5,url:`#краткое-содержание-24`,title:(0,n.jsx)(n.Fragment,{children:`Краткое содержание`})},{depth:5,url:`#смотри-так-же-22`,title:(0,n.jsx)(n.Fragment,{children:`Смотри так-же:`})},{depth:5,url:`#свойства-19`,title:(0,n.jsx)(n.Fragment,{children:`Свойства:`})},{depth:5,url:`#возвращает-24`,title:(0,n.jsx)(n.Fragment,{children:`Возвращает:`})},{depth:3,url:`#setcachefolder`,title:(0,n.jsx)(n.Fragment,{children:`setCacheFolder`})},{depth:5,url:`#свойства-20`,title:(0,n.jsx)(n.Fragment,{children:`Свойства:`})},{depth:5,url:`#возвращает-25`,title:(0,n.jsx)(n.Fragment,{children:`Возвращает:`})},{depth:3,url:`#setcss`,title:(0,n.jsx)(n.Fragment,{children:`setCss`})},{depth:5,url:`#краткое-содержание-25`,title:(0,n.jsx)(n.Fragment,{children:`Краткое содержание`})},{depth:5,url:`#описание-18`,title:(0,n.jsx)(n.Fragment,{children:`Описание`})},{depth:5,url:`#смотри-так-же-23`,title:(0,n.jsx)(n.Fragment,{children:`Смотри так-же:`})},{depth:5,url:`#свойства-21`,title:(0,n.jsx)(n.Fragment,{children:`Свойства:`})},{depth:5,url:`#возвращает-26`,title:(0,n.jsx)(n.Fragment,{children:`Возвращает:`})},{depth:3,url:`#setjs`,title:(0,n.jsx)(n.Fragment,{children:`setJs`})},{depth:5,url:`#краткое-содержание-26`,title:(0,n.jsx)(n.Fragment,{children:`Краткое содержание`})},{depth:5,url:`#описание-19`,title:(0,n.jsx)(n.Fragment,{children:`Описание`})},{depth:5,url:`#смотри-так-же-24`,title:(0,n.jsx)(n.Fragment,{children:`Смотри так-же:`})},{depth:5,url:`#свойства-22`,title:(0,n.jsx)(n.Fragment,{children:`Свойства:`})},{depth:5,url:`#возвращает-27`,title:(0,n.jsx)(n.Fragment,{children:`Возвращает:`})},{depth:3,url:`#setlink`,title:(0,n.jsx)(n.Fragment,{children:`setLink`})},{depth:5,url:`#краткое-содержание-27`,title:(0,n.jsx)(n.Fragment,{children:`Краткое содержание`})},{depth:5,url:`#описание-20`,title:(0,n.jsx)(n.Fragment,{children:`Описание`})},{depth:5,url:`#смотри-так-же-25`,title:(0,n.jsx)(n.Fragment,{children:`Смотри так-же:`})},{depth:5,url:`#свойства-23`,title:(0,n.jsx)(n.Fragment,{children:`Свойства:`})},{depth:5,url:`#возвращает-28`,title:(0,n.jsx)(n.Fragment,{children:`Возвращает:`})},{depth:3,url:`#setlinks`,title:(0,n.jsx)(n.Fragment,{children:`setLinks`})},{depth:5,url:`#краткое-содержание-28`,title:(0,n.jsx)(n.Fragment,{children:`Краткое содержание`})},{depth:5,url:`#описание-21`,title:(0,n.jsx)(n.Fragment,{children:`Описание`})},{depth:5,url:`#смотри-так-же-26`,title:(0,n.jsx)(n.Fragment,{children:`Смотри так-же:`})},{depth:5,url:`#свойства-24`,title:(0,n.jsx)(n.Fragment,{children:`Свойства:`})},{depth:5,url:`#возвращает-29`,title:(0,n.jsx)(n.Fragment,{children:`Возвращает:`})},{depth:3,url:`#setprefix`,title:(0,n.jsx)(n.Fragment,{children:`setPrefix`})},{depth:5,url:`#краткое-содержание-29`,title:(0,n.jsx)(n.Fragment,{children:`Краткое содержание`})},{depth:5,url:`#описание-22`,title:(0,n.jsx)(n.Fragment,{children:`Описание`})},{depth:5,url:`#свойства-25`,title:(0,n.jsx)(n.Fragment,{children:`Свойства:`})},{depth:5,url:`#возвращает-30`,title:(0,n.jsx)(n.Fragment,{children:`Возвращает:`})},{depth:3,url:`#setvar`,title:(0,n.jsx)(n.Fragment,{children:`setVar`})},{depth:5,url:`#краткое-содержание-30`,title:(0,n.jsx)(n.Fragment,{children:`Краткое содержание`})},{depth:5,url:`#описание-23`,title:(0,n.jsx)(n.Fragment,{children:`Описание`})},{depth:5,url:`#свойства-26`,title:(0,n.jsx)(n.Fragment,{children:`Свойства:`})},{depth:5,url:`#возвращает-31`,title:(0,n.jsx)(n.Fragment,{children:`Возвращает:`})},{depth:3,url:`#setvars`,title:(0,n.jsx)(n.Fragment,{children:`setVars`})},{depth:5,url:`#краткое-содержание-31`,title:(0,n.jsx)(n.Fragment,{children:`Краткое содержание`})},{depth:5,url:`#описание-24`,title:(0,n.jsx)(n.Fragment,{children:`Описание`})},{depth:5,url:`#смотри-так-же-27`,title:(0,n.jsx)(n.Fragment,{children:`Смотри так-же:`})},{depth:5,url:`#свойства-27`,title:(0,n.jsx)(n.Fragment,{children:`Свойства:`})},{depth:5,url:`#возвращает-32`,title:(0,n.jsx)(n.Fragment,{children:`Возвращает:`})},{depth:3,url:`#upload_file`,title:(0,n.jsx)(n.Fragment,{children:`upload_file`})},{depth:5,url:`#краткое-содержание-32`,title:(0,n.jsx)(n.Fragment,{children:`Краткое содержание`})},{depth:5,url:`#возвращает-33`,title:(0,n.jsx)(n.Fragment,{children:`Возвращает:`})},{depth:3,url:`#fetchfilecontent`,title:(0,n.jsx)(n.Fragment,{children:`fetchFileContent`})},{depth:5,url:`#краткое-содержание-33`,title:(0,n.jsx)(n.Fragment,{children:`Краткое содержание`})},{depth:5,url:`#описание-25`,title:(0,n.jsx)(n.Fragment,{children:`Описание`})},{depth:5,url:`#свойства-28`,title:(0,n.jsx)(n.Fragment,{children:`Свойства:`})},{depth:5,url:`#возвращает-34`,title:(0,n.jsx)(n.Fragment,{children:`Возвращает:`})},{depth:3,url:`#generatefilemetadata`,title:(0,n.jsx)(n.Fragment,{children:`generateFileMetadata`})},{depth:5,url:`#краткое-содержание-34`,title:(0,n.jsx)(n.Fragment,{children:`Краткое содержание`})},{depth:5,url:`#свойства-29`,title:(0,n.jsx)(n.Fragment,{children:`Свойства:`})},{depth:5,url:`#ошибки-11`,title:(0,n.jsx)(n.Fragment,{children:`Ошибки:`})},{depth:5,url:`#возвращает-35`,title:(0,n.jsx)(n.Fragment,{children:`Возвращает:`})},{depth:3,url:`#parse_assets`,title:(0,n.jsx)(n.Fragment,{children:`parse_assets`})},{depth:5,url:`#краткое-содержание-35`,title:(0,n.jsx)(n.Fragment,{children:`Краткое содержание`})},{depth:5,url:`#описание-26`,title:(0,n.jsx)(n.Fragment,{children:`Описание`})},{depth:5,url:`#смотри-так-же-28`,title:(0,n.jsx)(n.Fragment,{children:`Смотри так-же:`})},{depth:5,url:`#ошибки-12`,title:(0,n.jsx)(n.Fragment,{children:`Ошибки:`})},{depth:5,url:`#возвращает-36`,title:(0,n.jsx)(n.Fragment,{children:`Возвращает:`})},{depth:3,url:`#prepare_assets`,title:(0,n.jsx)(n.Fragment,{children:`prepare_assets`})},{depth:5,url:`#краткое-содержание-36`,title:(0,n.jsx)(n.Fragment,{children:`Краткое содержание`})},{depth:5,url:`#описание-27`,title:(0,n.jsx)(n.Fragment,{children:`Описание`})},{depth:5,url:`#свойства-30`,title:(0,n.jsx)(n.Fragment,{children:`Свойства:`})},{depth:5,url:`#возвращает-37`,title:(0,n.jsx)(n.Fragment,{children:`Возвращает:`})},{depth:3,url:`#savefile`,title:(0,n.jsx)(n.Fragment,{children:`saveFile`})},{depth:5,url:`#краткое-содержание-37`,title:(0,n.jsx)(n.Fragment,{children:`Краткое содержание`})},{depth:5,url:`#описание-28`,title:(0,n.jsx)(n.Fragment,{children:`Описание`})},{depth:5,url:`#смотри-так-же-29`,title:(0,n.jsx)(n.Fragment,{children:`Смотри так-же:`})},{depth:5,url:`#свойства-31`,title:(0,n.jsx)(n.Fragment,{children:`Свойства:`})},{depth:5,url:`#ошибки-13`,title:(0,n.jsx)(n.Fragment,{children:`Ошибки:`})},{depth:5,url:`#возвращает-38`,title:(0,n.jsx)(n.Fragment,{children:`Возвращает:`})},{depth:3,url:`#set_cache`,title:(0,n.jsx)(n.Fragment,{children:`set_cache`})},{depth:5,url:`#краткое-содержание-38`,title:(0,n.jsx)(n.Fragment,{children:`Краткое содержание`})},{depth:5,url:`#описание-29`,title:(0,n.jsx)(n.Fragment,{children:`Описание`})},{depth:5,url:`#смотри-так-же-30`,title:(0,n.jsx)(n.Fragment,{children:`Смотри так-же:`})},{depth:5,url:`#свойства-32`,title:(0,n.jsx)(n.Fragment,{children:`Свойства:`})},{depth:5,url:`#ошибки-14`,title:(0,n.jsx)(n.Fragment,{children:`Ошибки:`})},{depth:5,url:`#возвращает-39`,title:(0,n.jsx)(n.Fragment,{children:`Возвращает:`})},{depth:3,url:`#setdefaultauthor`,title:(0,n.jsx)(n.Fragment,{children:`setDefaultAuthor`})},{depth:5,url:`#краткое-содержание-39`,title:(0,n.jsx)(n.Fragment,{children:`Краткое содержание`})},{depth:5,url:`#описание-30`,title:(0,n.jsx)(n.Fragment,{children:`Описание`})},{depth:5,url:`#смотри-так-же-31`,title:(0,n.jsx)(n.Fragment,{children:`Смотри так-же:`})},{depth:5,url:`#ошибки-15`,title:(0,n.jsx)(n.Fragment,{children:`Ошибки:`})},{depth:5,url:`#возвращает-40`,title:(0,n.jsx)(n.Fragment,{children:`Возвращает:`})}];function c(e){let t={a:`a`,code:`code`,em:`em`,h2:`h2`,h3:`h3`,h4:`h4`,h5:`h5`,hr:`hr`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,span:`span`,strong:`strong`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,ul:`ul`,...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h2,{id:`краткое-содержание`,children:`Краткое содержание:`}),`
`,(0,n.jsx)(t.p,{children:`Класс Admin предназначен для управления административной панелью проекта.`}),`
`,(0,n.jsx)(t.h2,{id:`описание`,children:`Описание:`}),`
`,(0,n.jsx)(t.p,{children:`Содержит функционал для подключения файлов CSS и JS, настройки переменных
окружения, работы с меню и шапками страниц. Использует трейты для
загрузки данных, взаимодействия с DLE и проверки файлов ресурсов.`}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsx)(t.h3,{id:`свойства`,children:`Свойства`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[`protected $`,(0,n.jsx)(t.a,{href:`#property_postXfieldKeys`,children:`postXfieldKeys`})]}),`
`,(0,n.jsxs)(t.li,{children:[`protected $`,(0,n.jsx)(t.a,{href:`#property_userXfieldKeys`,children:`userXfieldKeys`})]}),`
`,(0,n.jsxs)(t.li,{children:[`private $`,(0,n.jsx)(t.a,{href:`#property_asset_file`,children:`asset_file`})]}),`
`,(0,n.jsxs)(t.li,{children:[`private $`,(0,n.jsx)(t.a,{href:`#property_assets_arr`,children:`assets_arr`})]}),`
`,(0,n.jsxs)(t.li,{children:[`private $`,(0,n.jsx)(t.a,{href:`#property_assets_dir`,children:`assets_dir`})]}),`
`,(0,n.jsxs)(t.li,{children:[`private $`,(0,n.jsx)(t.a,{href:`#property_breadcrumb`,children:`breadcrumb`})]}),`
`,(0,n.jsxs)(t.li,{children:[`private $`,(0,n.jsx)(t.a,{href:`#property_cache_folder`,children:`cache_folder`})]}),`
`,(0,n.jsxs)(t.li,{children:[`private $`,(0,n.jsx)(t.a,{href:`#property_cssArr`,children:`cssArr`})]}),`
`,(0,n.jsxs)(t.li,{children:[`private $`,(0,n.jsx)(t.a,{href:`#property_jsArr`,children:`jsArr`})]}),`
`,(0,n.jsxs)(t.li,{children:[`private $`,(0,n.jsx)(t.a,{href:`#property_links`,children:`links`})]}),`
`,(0,n.jsxs)(t.li,{children:[`private $`,(0,n.jsx)(t.a,{href:`#property_prefix`,children:`prefix`})]}),`
`,(0,n.jsxs)(t.li,{children:[`private $`,(0,n.jsx)(t.a,{href:`#property_variables`,children:`variables`})]}),`
`]}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsx)(t.h3,{id:`методы`,children:`Методы`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method___construct`,children:`__construct()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method_checkAssets`,children:`checkAssets()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method_clear_cache`,children:`clear_cache()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method_generate_link`,children:`generate_link()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method_get_cache`,children:`get_cache()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method_get_used_xfields`,children:`get_used_xfields()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method_getBreadcrumb`,children:`getBreadcrumb()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method_getCacheFolder`,children:`getCacheFolder()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method_getCats`,children:`getCats()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method_getLinkInfo`,children:`getLinkInfo()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method_getLinkName`,children:`getLinkName()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method_getLinkUrl`,children:`getLinkUrl()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method_getPrefix`,children:`getPrefix()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method_getUser`,children:`getUser()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method_getUserGroups`,children:`getUserGroups()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method_getUsers`,children:`getUsers()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method_getVariables`,children:`getVariables()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method_getXfieldInfo`,children:`getXfieldInfo()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method_htmlStatic`,children:`htmlStatic()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method_load_data`,children:`load_data()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method_loadXfields`,children:`loadXfields()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method_parseAssets`,children:`parseAssets()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method_save_asset`,children:`save_asset()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method_setAuthor`,children:`setAuthor()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method_setBreadcrumb`,children:`setBreadcrumb()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method_setCacheFolder`,children:`setCacheFolder()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method_setCss`,children:`setCss()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method_setJs`,children:`setJs()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method_setLink`,children:`setLink()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method_setLinks`,children:`setLinks()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method_setPrefix`,children:`setPrefix()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method_setVar`,children:`setVar()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method_setVars`,children:`setVars()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method_upload_file`,children:`upload_file()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`private `,(0,n.jsx)(t.a,{href:`#method_fetchFileContent`,children:`fetchFileContent()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`private `,(0,n.jsx)(t.a,{href:`#method_generateFileMetadata`,children:`generateFileMetadata()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`private `,(0,n.jsx)(t.a,{href:`#method_parse_assets`,children:`parse_assets()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`private `,(0,n.jsx)(t.a,{href:`#method_prepare_assets`,children:`prepare_assets()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`private `,(0,n.jsx)(t.a,{href:`#method_saveFile`,children:`saveFile()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`private `,(0,n.jsx)(t.a,{href:`#method_set_cache`,children:`set_cache()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`private `,(0,n.jsx)(t.a,{href:`#method_setDefaultAuthor`,children:`setDefaultAuthor()`})]}),`
`]}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsx)(t.h3,{id:`подробности`,children:`Подробности`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsx)(t.li,{children:`Путь: engine/inc/maharder/_includes/classes/Admin.php`}),`
`,(0,n.jsxs)(t.li,{children:[`Использованные трейты:`,`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`./DataLoader`,children:`\\DataLoader`})}),`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`./DleData`,children:`\\DleData`})}),`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`./AssetsChecker`,children:`\\AssetsChecker`})}),`
`]}),`
`]}),`
`]}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsx)(t.h2,{id:`свойства-1`,children:`Свойства`}),`
`,(0,n.jsx)(`span`,{id:`property_postXfieldKeys`}),`
`,(0,n.jsx)(t.h4,{id:`protected-postxfieldkeys--array`,children:`protected $postXfieldKeys : array`}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Тип:`}),` `,(0,n.jsx)(`abbr`,{title:`array`,children:`массив`})]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Подробности:`})}),`
`,(0,n.jsx)(`span`,{id:`property_userXfieldKeys`}),`
`,(0,n.jsx)(t.h4,{id:`protected-userxfieldkeys--array`,children:`protected $userXfieldKeys : array`}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Тип:`}),` `,(0,n.jsx)(`abbr`,{title:`array`,children:`массив`})]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Подробности:`})}),`
`,(0,n.jsx)(`span`,{id:`property_asset_file`}),`
`,(0,n.jsx)(t.h4,{id:`private-asset_file--string`,children:`private $asset_file : string`}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Краткое содержание`})}),`
`,(0,n.jsx)(t.p,{children:`Файл с информацией и хешами вспомогательных файлов`}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Тип:`}),` `,(0,n.jsx)(`abbr`,{title:`string`,children:`текст`})]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Подробности:`})}),`
`,(0,n.jsx)(`span`,{id:`property_assets_arr`}),`
`,(0,n.jsx)(t.h4,{id:`private-assets_arr--array`,children:`private $assets_arr : array`}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Краткое содержание`})}),`
`,(0,n.jsx)(t.p,{children:`Массив со всеми данными для обновления стилей и скриптов`}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Тип:`}),` `,(0,n.jsx)(`abbr`,{title:`array`,children:`массив`})]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Подробности:`})}),`
`,(0,n.jsx)(`span`,{id:`property_assets_dir`}),`
`,(0,n.jsx)(t.h4,{id:`private-assets_dir--string`,children:`private $assets_dir : string`}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Краткое содержание`})}),`
`,(0,n.jsx)(t.p,{children:`Путь до всех вспомогательных файлов`}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Тип:`}),` `,(0,n.jsx)(`abbr`,{title:`string`,children:`текст`})]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Подробности:`})}),`
`,(0,n.jsx)(`span`,{id:`property_breadcrumb`}),`
`,(0,n.jsx)(t.h4,{id:`private-breadcrumb--array`,children:`private $breadcrumb : array`}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Краткое содержание`})}),`
`,(0,n.jsx)(t.p,{children:`Хранит данные для построения хлебных крошек в административной панели.`}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Тип:`}),` `,(0,n.jsx)(`abbr`,{title:`array`,children:`массив`})]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Подробности:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[`Смотри так-же:`,`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`#method_setBreadcrumb`,children:`Используется для установки значений хлебных крошек.`})}),`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`#method_getBreadcrumb`,children:`Используется для получения текущих значений хлебных крошек.`})}),`
`]}),`
`]}),`
`]}),`
`,(0,n.jsx)(`span`,{id:`property_cache_folder`}),`
`,(0,n.jsx)(t.h4,{id:`private-cache_folder--string`,children:`private $cache_folder : string`}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Краткое содержание`})}),`
`,(0,n.jsx)(t.p,{children:`Папка кеша`}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Тип:`}),` `,(0,n.jsx)(`abbr`,{title:`string`,children:`текст`})]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Подробности:`})}),`
`,(0,n.jsx)(`span`,{id:`property_cssArr`}),`
`,(0,n.jsx)(t.h4,{id:`private-cssarr--array`,children:`private $cssArr : array`}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Краткое содержание`})}),`
`,(0,n.jsx)(t.p,{children:`Список CSS-файлов, используемых в разделе администратора.`}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Тип:`}),` `,(0,n.jsx)(`abbr`,{title:`array`,children:`массив`})]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Подробности:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[`Смотри так-же:`,`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`#method_setCss`,children:`Метод для добавления CSS-файлов.`})}),`
`]}),`
`]}),`
`]}),`
`,(0,n.jsx)(t.h5,{id:`tags`,children:`Tags`}),`
`,(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`Тэг`}),(0,n.jsx)(t.th,{children:`Версия`}),(0,n.jsx)(t.th,{children:`Описание`})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`global`}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:`string URL Глобальная переменная, содержащая базовый URL проекта.`})]})})]}),`
`,(0,n.jsx)(`span`,{id:`property_jsArr`}),`
`,(0,n.jsx)(t.h4,{id:`private-jsarr--array`,children:`private $jsArr : array`}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Краткое содержание`})}),`
`,(0,n.jsx)(t.p,{children:`Массив со скриптами, которые используются в административной панели.`}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.em,{children:(0,n.jsx)(t.strong,{children:`Описание`})})}),`
`,(0,n.jsx)(t.p,{children:`Скрипты представляют собой коллекцию путей к JavaScript-файлам,
необходимых для работы функциональных компонентов интерфейса.`}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Тип:`}),` `,(0,n.jsx)(`abbr`,{title:`array`,children:`массив`}),`
Массив содержит ссылки на JavaScript-файлы,
таких, как библиотеки, редактор SCEditor и его плагины,
а также прочие утилиты для интерфейса административной панели.
`,(0,n.jsx)(t.strong,{children:`Подробности:`})]}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[`Смотри так-же:`,`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`#method_setJs`,children:`Метод для добавления пользовательских JavaScript-файлов.`})}),`
`]}),`
`]}),`
`]}),`
`,(0,n.jsx)(t.h5,{id:`tags-1`,children:`Tags`}),`
`,(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`Тэг`}),(0,n.jsx)(t.th,{children:`Версия`}),(0,n.jsx)(t.th,{children:`Описание`})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`global`}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:`string URL Глобальная переменная, определяющая базовый URL приложения.`})]})})]}),`
`,(0,n.jsx)(`span`,{id:`property_links`}),`
`,(0,n.jsx)(t.h4,{id:`private-links--array`,children:`private $links : array`}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Тип:`}),` `,(0,n.jsx)(`abbr`,{title:`array`,children:`массив`})]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Подробности:`})}),`
`,(0,n.jsx)(`span`,{id:`property_prefix`}),`
`,(0,n.jsx)(t.h4,{id:`private-prefix--string`,children:`private $prefix : ?string`}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Тип:`}),` `,(0,n.jsx)(`abbr`,{title:`?string`,children:`текст или null`})]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Подробности:`})}),`
`,(0,n.jsx)(`span`,{id:`property_variables`}),`
`,(0,n.jsx)(t.h4,{id:`private-variables--array`,children:`private $variables : array`}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Краткое содержание`})}),`
`,(0,n.jsx)(t.p,{children:`Массив с различными переменными для шаблонизатора.`}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.em,{children:(0,n.jsx)(t.strong,{children:`Описание`})})}),`
`,(0,n.jsx)(t.p,{children:`Используется для настройки и передачи данных, таких как пути к стилям и скриптам, информация об авторе,
ссылки для хлебных крошек, а также настройки меню и другие параметры.`}),`
`,(0,n.jsx)(t.p,{children:`Описание ключей:`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:`css_dir`}),`: строка, папка со стилями.`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:`js_dir`}),`: строка, папка со скриптами.`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:`css`}),`: массив, содержит список подключаемых стилей.`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:`js`}),`: массив, содержит список подключаемых скриптов.`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:`url`}),`: строка, ссылка для корректного отображения стилей и скриптов на сайте.`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:`lic_link`}),`: строка, ссылка на пользовательское соглашение.`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:`author`}),`: массив, информация об авторе модуля:`,`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:`author.name`}),`: строка, имя автора.`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:`author.contacts`}),`: массив, список контактной информации автора:`,`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:`author.contacts.name`}),`: строка, название контактного средства (например, E-Mail).`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:`author.contacts.link`}),`: строка, ссылка для связи (например, mailto:`,(0,n.jsx)(t.a,{href:`mailto:dev@devcraft.club`,children:`dev@devcraft.club`}),`).`]}),`
`]}),`
`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:`author.donate`}),`: массив, данные о поддержке:`,`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:`author.donate.name`}),`: строка, название платёжной системы (например, PayPal).`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:`author.donate.value`}),`: строка, описание платёжной системы (например, paypal.me/MaximH).`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:`author.donate.link`}),`: строка, ссылка платёжной системы (например, `,(0,n.jsx)(t.a,{href:`https://paypal.me/MaximH`,children:`https://paypal.me/MaximH`}),`).`]}),`
`]}),`
`]}),`
`]}),`
`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:`menu`}),`: массив, ссылки для меню сайта.`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:`breadcrumbs`}),`: массив, ссылки на хлебные крошки.`]}),`
`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Тип:`}),` `,(0,n.jsx)(`abbr`,{title:`array`,children:`массив`}),`
Значение свойств этой переменной задаётся по умолчанию или изменяется через методы класса.`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Подробности:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[`Смотри так-же:`,`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`#method_setVar`,children:`Для установки/обновления одного или нескольких значений.`})}),`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`#method_getVariables`,children:`Для получения массива переменных.`})}),`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`#method_setDefaultAuthor`,children:`Для настройки информации об авторе.`})}),`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`#method_setLinks`,children:`Для присвоения ссылок (например, для меню или хлебных крошек).`})}),`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`./Author`,children:`\\Author`})}),`
`]}),`
`]}),`
`]}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsx)(t.h2,{id:`методы-1`,children:`Методы`}),`
`,(0,n.jsx)(`span`,{id:`method___construct`}),`
`,(0,n.jsx)(t.h3,{id:`__construct`,children:`__construct`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`public __construct() : mixed`})})})})}),`
`,(0,n.jsx)(t.h5,{id:`краткое-содержание-1`,children:`Краткое содержание`}),`
`,(0,n.jsx)(t.p,{children:`Конструктор класса.`}),`
`,(0,n.jsx)(t.h5,{id:`описание-1`,children:`Описание`}),`
`,(0,n.jsx)(t.p,{children:`Инициализирует параметры для начальной загрузки системы,
включая настройки файлов CSS и JS, меню, темы и создание
базовых директорий кеша.`}),`
`,(0,n.jsx)(t.h5,{id:`смотри-так-же`,children:`Смотри так-же:`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`#method_setvar`,children:`\\setVar()`})}),`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`#method_htmlstatic`,children:`\\htmlStatic()`})}),`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`./DataManager#method_getConfig`,children:`\\DataManager::getConfig()`})}),`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`./DataManager#method_createDir`,children:`\\DataManager::createDir()`})}),`
`]}),`
`,(0,n.jsx)(t.h5,{id:`ошибки`,children:`Ошибки:`}),`
`,(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`Тип`}),(0,n.jsx)(t.th,{children:`Описание`})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`\\JsonException`}),(0,n.jsx)(t.td,{children:`\\Throwable`})]})})]}),`
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
`,(0,n.jsx)(t.h5,{id:`смотри-так-же-1`,children:`Смотри так-же:`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`./DataManager#method_dirToArray`,children:`\\DataManager::dirToArray()`})}),`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`#method_prepare_assets`,children:`\\self::prepare_assets()`})}),`
`]}),`
`,(0,n.jsx)(t.h5,{id:`свойства-2`,children:`Свойства:`}),`
`,(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`Название`}),(0,n.jsx)(t.th,{children:`Тип`}),(0,n.jsx)(t.th,{children:`По умолчанию`})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:`$rewrite`})}),(0,n.jsx)(t.td,{children:`bool`}),(0,n.jsx)(t.td,{children:`false`})]})})]}),`
`,(0,n.jsx)(t.h5,{id:`ошибки-1`,children:`Ошибки:`}),`
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
`,(0,n.jsx)(`span`,{id:`method_clear_cache`}),`
`,(0,n.jsx)(t.h3,{id:`clear_cache`,children:`clear_cache`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`public clear_cache(string  type = "all") : void`})})})})}),`
`,(0,n.jsx)(t.h5,{id:`краткое-содержание-3`,children:`Краткое содержание`}),`
`,(0,n.jsx)(t.p,{children:`Очищает кеш указанного типа.`}),`
`,(0,n.jsx)(t.h5,{id:`описание-3`,children:`Описание`}),`
`,(0,n.jsx)(t.p,{children:`Метод позволяет очистить кеш для переданного типа или полностью, если тип "all".
Использует внутренний метод CacheControl::clearCache для выполнения операции очистки.`}),`
`,(0,n.jsx)(t.h5,{id:`смотри-так-же-2`,children:`Смотри так-же:`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`./CacheControl#method_clearCache`,children:`\\CacheControl::clearCache()`})}),`
`]}),`
`,(0,n.jsx)(t.h5,{id:`свойства-3`,children:`Свойства:`}),`
`,(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`Название`}),(0,n.jsx)(t.th,{children:`Тип`}),(0,n.jsx)(t.th,{children:`По умолчанию`})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:`$type`})}),(0,n.jsx)(t.td,{children:`string`}),(0,n.jsx)(t.td,{children:`'all'`})]})})]}),`
`,(0,n.jsx)(t.h5,{id:`возвращает-2`,children:`Возвращает:`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`void`})})})})}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsx)(`span`,{id:`method_generate_link`}),`
`,(0,n.jsx)(t.h3,{id:`generate_link`,children:`generate_link`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`static public generate_link(string  name, string  href, string  type = "link", array  children = [], string|null  data_val = null) : \\AdminLink`})})})})}),`
`,(0,n.jsx)(t.h5,{id:`краткое-содержание-4`,children:`Краткое содержание`}),`
`,(0,n.jsx)(t.p,{children:`Создаёт экземпляр класса AdminLink с данными о ссылке.`}),`
`,(0,n.jsx)(t.h5,{id:`смотри-так-же-3`,children:`Смотри так-же:`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`./AdminLink`,children:`\\AdminLink`})}),`
`]}),`
`,(0,n.jsx)(t.h5,{id:`свойства-4`,children:`Свойства:`}),`
`,(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`Название`}),(0,n.jsx)(t.th,{children:`Тип`}),(0,n.jsx)(t.th,{children:`По умолчанию`})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:`$name`})}),(0,n.jsx)(t.td,{children:`string`}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:`$href`})}),(0,n.jsx)(t.td,{children:`string`}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:`$type`})}),(0,n.jsx)(t.td,{children:`string`}),(0,n.jsx)(t.td,{children:`"link"`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:`$children`})}),(0,n.jsx)(t.td,{children:`array`}),(0,n.jsx)(t.td,{children:`[]`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:`$data_val`})}),(0,n.jsx)(t.td,{children:`string| null`}),(0,n.jsx)(t.td,{children:`null`})]})]})]}),`
`,(0,n.jsx)(t.h5,{id:`возвращает-3`,children:`Возвращает:`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`\\AdminLink`})})})})}),`
`,(0,n.jsx)(t.p,{children:`Объект класса AdminLink с заданными параметрами.`}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsx)(`span`,{id:`method_get_cache`}),`
`,(0,n.jsx)(t.h3,{id:`get_cache`,children:`get_cache`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`public get_cache(string  type, string  name) : array|false`})})})})}),`
`,(0,n.jsx)(t.h5,{id:`краткое-содержание-5`,children:`Краткое содержание`}),`
`,(0,n.jsx)(t.p,{children:`Получает кешированные данные для заданного типа и имени.`}),`
`,(0,n.jsx)(t.h5,{id:`описание-4`,children:`Описание`}),`
`,(0,n.jsxs)(t.p,{children:[`Метод использует статический метод `,(0,n.jsx)(t.code,{children:`CacheControl::getCache()`}),`, чтобы получить данные из файловой системы.`]}),`
`,(0,n.jsx)(t.h5,{id:`смотри-так-же-4`,children:`Смотри так-же:`}),`
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
`,(0,n.jsx)(t.h5,{id:`смотри-так-же-5`,children:`Смотри так-же:`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`./DataLoader#method_load_data`,children:`\\load_data()`})}),`
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
`,(0,n.jsx)(`span`,{id:`method_getBreadcrumb`}),`
`,(0,n.jsx)(t.h3,{id:`getbreadcrumb`,children:`getBreadcrumb`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`public getBreadcrumb() : array`})})})})}),`
`,(0,n.jsx)(t.h5,{id:`краткое-содержание-7`,children:`Краткое содержание`}),`
`,(0,n.jsx)(t.p,{children:`Возвращает текущий массив данных хлебных крошек.`}),`
`,(0,n.jsx)(t.h5,{id:`смотри-так-же-6`,children:`Смотри так-же:`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`#property_breadcrumb`,children:`\\Admin::$breadcrumb`})}),`
`]}),`
`,(0,n.jsx)(t.h5,{id:`возвращает-6`,children:`Возвращает:`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`array`})})})})}),`
`,(0,n.jsx)(t.p,{children:`Массив хлебных крошек.`}),`
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
`,(0,n.jsx)(t.h5,{id:`краткое-содержание-8`,children:`Краткое содержание`}),`
`,(0,n.jsx)(t.p,{children:`Возвращает список категорий в виде ассоциативного массива, где ключом является ID категории, а значением — её
название.`}),`
`,(0,n.jsx)(t.h5,{id:`описание-6`,children:`Описание`}),`
`,(0,n.jsxs)(t.p,{children:[`Метод загружает данные из базы данных, используя метод `,(0,n.jsx)(t.code,{children:`load_data`}),`, и сортирует их по названию категории в
алфавитном порядке. В результате возвращается массив с ID категорий в качестве ключей и названиями категорий в
качестве значений.`]}),`
`,(0,n.jsx)(t.h5,{id:`смотри-так-же-7`,children:`Смотри так-же:`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`./DataLoader#method_load_data`,children:`\\load_data()`})}),`
`]}),`
`,(0,n.jsx)(t.h5,{id:`ошибки-4`,children:`Ошибки:`}),`
`,(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`Тип`}),(0,n.jsx)(t.th,{children:`Описание`})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`\\JsonException`}),(0,n.jsx)(t.td,{})]})})]}),`
`,(0,n.jsx)(t.h5,{id:`возвращает-8`,children:`Возвращает:`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`array`})})})})}),`
`,(0,n.jsx)(t.p,{children:`Ассоциативный массив категорий, где ключ — ID категории, а значение — её название.`}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsx)(`span`,{id:`method_getLinkInfo`}),`
`,(0,n.jsx)(t.h3,{id:`getlinkinfo`,children:`getLinkInfo`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`public getLinkInfo(string  name) : bool|\\AdminLink`})})})})}),`
`,(0,n.jsx)(t.h5,{id:`краткое-содержание-9`,children:`Краткое содержание`}),`
`,(0,n.jsx)(t.p,{children:`Возвращает информацию о ссылке из меню.`}),`
`,(0,n.jsx)(t.h5,{id:`свойства-7`,children:`Свойства:`}),`
`,(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`Название`}),(0,n.jsx)(t.th,{children:`Тип`}),(0,n.jsx)(t.th,{children:`По умолчанию`})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:`$name`})}),(0,n.jsx)(t.td,{children:`string`}),(0,n.jsx)(t.td,{})]})})]}),`
`,(0,n.jsx)(t.h5,{id:`возвращает-9`,children:`Возвращает:`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`bool|\\AdminLink`})})})})}),`
`,(0,n.jsx)(t.p,{children:`Объект AdminLink, если ссылка найдена, или false, если ссылка отсутствует.`}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsx)(`span`,{id:`method_getLinkName`}),`
`,(0,n.jsx)(t.h3,{id:`getlinkname`,children:`getLinkName`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`public getLinkName(string  name) : string|false`})})})})}),`
`,(0,n.jsx)(t.h5,{id:`краткое-содержание-10`,children:`Краткое содержание`}),`
`,(0,n.jsx)(t.p,{children:`Возвращает имя ссылки на основе предоставленного имени.`}),`
`,(0,n.jsx)(t.h5,{id:`описание-7`,children:`Описание`}),`
`,(0,n.jsx)(t.p,{children:`Метод извлекает информацию о ссылке с помощью метода getLinkInfo().
Если информация найдена, возвращается имя ссылки через метод getName().
В противном случае возвращается false.`}),`
`,(0,n.jsx)(t.h5,{id:`смотри-так-же-8`,children:`Смотри так-же:`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`#method_getLinkInfo`,children:`\\getLinkInfo()`})}),`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`./AdminLink#method_getName`,children:`\\AdminLink::getName()`})}),`
`]}),`
`,(0,n.jsx)(t.h5,{id:`свойства-8`,children:`Свойства:`}),`
`,(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`Название`}),(0,n.jsx)(t.th,{children:`Тип`}),(0,n.jsx)(t.th,{children:`По умолчанию`})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:`$name`})}),(0,n.jsx)(t.td,{children:`string`}),(0,n.jsx)(t.td,{})]})})]}),`
`,(0,n.jsx)(t.h5,{id:`возвращает-10`,children:`Возвращает:`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`string|false`})})})})}),`
`,(0,n.jsx)(t.p,{children:`Имя ссылки или false, если информация не найдена.`}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsx)(`span`,{id:`method_getLinkUrl`}),`
`,(0,n.jsx)(t.h3,{id:`getlinkurl`,children:`getLinkUrl`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`public getLinkUrl(string  name) : string|false`})})})})}),`
`,(0,n.jsx)(t.h5,{id:`краткое-содержание-11`,children:`Краткое содержание`}),`
`,(0,n.jsx)(t.p,{children:`Возвращает URL ссылки по указанному имени.`}),`
`,(0,n.jsx)(t.h5,{id:`описание-8`,children:`Описание`}),`
`,(0,n.jsx)(t.p,{children:`Метод извлекает информацию о ссылке с помощью метода getLinkInfo().
Если информация найдена, возвращается URL ссылки.
Если информация отсутствует, возвращается false.`}),`
`,(0,n.jsx)(t.h5,{id:`смотри-так-же-9`,children:`Смотри так-же:`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`#method_getLinkInfo`,children:`\\self::getLinkInfo()`})}),`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`./AdminLink#method_getLink`,children:`\\AdminLink::getLink()`})}),`
`]}),`
`,(0,n.jsx)(t.h5,{id:`свойства-9`,children:`Свойства:`}),`
`,(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`Название`}),(0,n.jsx)(t.th,{children:`Тип`}),(0,n.jsx)(t.th,{children:`По умолчанию`})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:`$name`})}),(0,n.jsx)(t.td,{children:`string`}),(0,n.jsx)(t.td,{})]})})]}),`
`,(0,n.jsx)(t.h5,{id:`возвращает-11`,children:`Возвращает:`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`string|false`})})})})}),`
`,(0,n.jsx)(t.p,{children:`URL ссылки, если информация доступна, или false, если ссылка не найдена.`}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsx)(`span`,{id:`method_getPrefix`}),`
`,(0,n.jsx)(t.h3,{id:`getprefix`,children:`getPrefix`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`public getPrefix() : string`})})})})}),`
`,(0,n.jsx)(t.h5,{id:`краткое-содержание-12`,children:`Краткое содержание`}),`
`,(0,n.jsx)(t.p,{children:`Возвращает префикс для использования в SQL-запросах.`}),`
`,(0,n.jsx)(t.h5,{id:`описание-9`,children:`Описание`}),`
`,(0,n.jsxs)(t.p,{children:[`Метод проверяет, установлен ли префикс. Если префикс не задан, он вызывает метод `,(0,n.jsx)(t.code,{children:`setPrefix()`}),`,
чтобы установить его значение. Затем возвращает установившийся префикс.`]}),`
`,(0,n.jsx)(t.h5,{id:`смотри-так-же-10`,children:`Смотри так-же:`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`./DataLoader#property_prefix`,children:`\\DataLoader::$prefix`})}),`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`./DataLoader#method_setPrefix`,children:`\\DataLoader::setPrefix()`})}),`
`]}),`
`,(0,n.jsx)(t.h5,{id:`возвращает-12`,children:`Возвращает:`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`string`})})})})}),`
`,(0,n.jsx)(t.p,{children:`Префикс, используемый для построения SQL-запросов.`}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsx)(`span`,{id:`method_getUser`}),`
`,(0,n.jsx)(t.h3,{id:`getuser`,children:`getUser`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`public getUser(int|null  id = null, string|null  uname = null) : array|false`})})})})}),`
`,(0,n.jsx)(t.h5,{id:`краткое-содержание-13`,children:`Краткое содержание`}),`
`,(0,n.jsx)(t.p,{children:`Получает данные пользователя по ID или имени пользователя.`}),`
`,(0,n.jsx)(t.h5,{id:`описание-10`,children:`Описание`}),`
`,(0,n.jsxs)(t.p,{children:[`Если ни идентификатор пользователя, ни имя пользователя не переданы, метод возвращает `,(0,n.jsx)(t.code,{children:`false`}),`.
В противном случае выполняется поиск данных в таблице `,(0,n.jsx)(t.code,{children:`users`}),` с использованием указанного критерия.`]}),`
`,(0,n.jsx)(t.h5,{id:`смотри-так-же-11`,children:`Смотри так-же:`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`./DataLoader#method_load_data`,children:`\\load_data()`})}),`
`]}),`
`,(0,n.jsx)(t.h5,{id:`свойства-10`,children:`Свойства:`}),`
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
`,(0,n.jsx)(t.h5,{id:`краткое-содержание-14`,children:`Краткое содержание`}),`
`,(0,n.jsx)(t.p,{children:`Получает список групп пользователей в формате массива с идентификаторами и именами групп.`}),`
`,(0,n.jsx)(t.h5,{id:`описание-11`,children:`Описание`}),`
`,(0,n.jsxs)(t.p,{children:[`Метод обращается к функции `,(0,n.jsx)(t.code,{children:`load_data`}),` для загрузки данных о группах пользователей
из таблицы "usergroups" с выборкой полей `,(0,n.jsx)(t.code,{children:`id`}),` и `,(0,n.jsx)(t.code,{children:`group_name`}),`,
затем преобразует результат в ассоциативный массив с ключами — идентификаторами групп,
и значениями — именами групп, отсортированными по названию группы в алфавитном порядке (ASC).`]}),`
`,(0,n.jsx)(t.h5,{id:`смотри-так-же-12`,children:`Смотри так-же:`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`./DataLoader#method_load_data`,children:`\\load_data()`})}),`
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
`,(0,n.jsx)(t.h5,{id:`краткое-содержание-15`,children:`Краткое содержание`}),`
`,(0,n.jsx)(t.p,{children:`Возвращает список пользователей из базы данных.`}),`
`,(0,n.jsx)(t.h5,{id:`описание-12`,children:`Описание`}),`
`,(0,n.jsxs)(t.p,{children:[`Метод загружает данные о пользователях, используя метод `,(0,n.jsx)(t.code,{children:`load_data`}),`,
и возвращает массив, где ключами являются идентификаторы пользователей,
а значениями — их имена, отсортированные в алфавитном порядке.`]}),`
`,(0,n.jsx)(t.h5,{id:`смотри-так-же-13`,children:`Смотри так-же:`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`./DataLoader#method_load_data`,children:`\\load_data()`})}),`
`]}),`
`,(0,n.jsx)(t.h5,{id:`ошибки-7`,children:`Ошибки:`}),`
`,(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`Тип`}),(0,n.jsx)(t.th,{children:`Описание`})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`\\JsonException`}),(0,n.jsx)(t.td,{})]})})]}),`
`,(0,n.jsx)(t.h5,{id:`возвращает-15`,children:`Возвращает:`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`array`})})})})}),`
`,(0,n.jsx)(t.p,{children:`Ассоциативный массив пользователей, где ключи — идентификаторы пользователей (user_id), а значения
— их имена.`}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsx)(`span`,{id:`method_getVariables`}),`
`,(0,n.jsx)(t.h3,{id:`getvariables`,children:`getVariables`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`public getVariables(string|null  name = null) : array`})})})})}),`
`,(0,n.jsx)(t.h5,{id:`краткое-содержание-16`,children:`Краткое содержание`}),`
`,(0,n.jsx)(t.p,{children:`Получает массив переменных, связанных с модулем.`}),`
`,(0,n.jsx)(t.h5,{id:`описание-13`,children:`Описание`}),`
`,(0,n.jsx)(t.p,{children:`Метод возвращает ассоциативный массив с переменными, используемыми в модуле,
такими как параметры путей (CSS, JS), массивы подключаемых файлов, дополнительные ссылки, меню
и настройки. Если передано название переменной, метод возвращает только значение данной переменной.`}),`
`,(0,n.jsx)(t.h5,{id:`смотри-так-же-14`,children:`Смотри так-же:`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`#property_variables`,children:`\\Admin::$variables`})}),`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`#method_setVars`,children:`\\Admin::setVars()`})}),`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`#method_setLinks`,children:`\\Admin::setLinks()`})}),`
`]}),`
`,(0,n.jsx)(t.h5,{id:`свойства-11`,children:`Свойства:`}),`
`,(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`Название`}),(0,n.jsx)(t.th,{children:`Тип`}),(0,n.jsx)(t.th,{children:`По умолчанию`})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:`$name`})}),(0,n.jsx)(t.td,{children:`string|null`}),(0,n.jsx)(t.td,{children:`null`})]})})]}),`
`,(0,n.jsx)(t.h5,{id:`возвращает-16`,children:`Возвращает:`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`array`})})})})}),`
`,(0,n.jsx)(t.p,{children:`Ассоциативный массив переменных модуля или значение конкретной переменной.`}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsx)(`span`,{id:`method_getXfieldInfo`}),`
`,(0,n.jsx)(t.h3,{id:`getxfieldinfo`,children:`getXfieldInfo`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`public getXfieldInfo(string  name, string  type = &#039;post&#039;) : array|null`})})})})}),`
`,(0,n.jsx)(t.h5,{id:`краткое-содержание-17`,children:`Краткое содержание`}),`
`,(0,n.jsx)(t.p,{children:`Возвращает информацию о дополнительном поле (xfield) на основании его имени и типа.`}),`
`,(0,n.jsx)(t.h5,{id:`смотри-так-же-15`,children:`Смотри так-же:`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`./DataLoader#method_loadXfields`,children:`\\loadXfields()`})}),`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`./CacheControl#method_getCache`,children:`\\CacheControl::getCache()`})}),`
`]}),`
`,(0,n.jsx)(t.h5,{id:`свойства-12`,children:`Свойства:`}),`
`,(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`Название`}),(0,n.jsx)(t.th,{children:`Тип`}),(0,n.jsx)(t.th,{children:`По умолчанию`})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:`$name`})}),(0,n.jsx)(t.td,{children:`string`}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:`$type`})}),(0,n.jsx)(t.td,{children:`string`}),(0,n.jsx)(t.td,{children:`'post'`})]})]})]}),`
`,(0,n.jsx)(t.h5,{id:`возвращает-17`,children:`Возвращает:`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`array|null`})})})})}),`
`,(0,n.jsx)(t.p,{children:`Возвращает информацию о поле в виде ассоциативного массива, либо null,
если поле не найдено.`}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsx)(`span`,{id:`method_htmlStatic`}),`
`,(0,n.jsx)(t.h3,{id:`htmlstatic`,children:`htmlStatic`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`public htmlStatic(string|array  data, string  view = "html", string  type = "css") : array`})})})})}),`
`,(0,n.jsx)(t.h5,{id:`краткое-содержание-18`,children:`Краткое содержание`}),`
`,(0,n.jsx)(t.p,{children:`Обрабатывает массив или строку с данными ссылок на статичные файлы и формирует HTML-разметку
или массив ссылок в зависимости от переданных параметров.`}),`
`,(0,n.jsx)(t.h5,{id:`описание-14`,children:`Описание`}),`
`,(0,n.jsxs)(t.p,{children:[`Формирование HTML производится для типов файлов `,(0,n.jsx)(t.code,{children:`css`}),` и `,(0,n.jsx)(t.code,{children:`js`}),`, добавляя соответствующие теги
(`,(0,n.jsx)(t.code,{children:`<link />`}),` или `,(0,n.jsx)(t.code,{children:`<script>`}),`). В случае, если используются ссылки, возвращается только массив ссылок.`]}),`
`,(0,n.jsx)(t.h5,{id:`смотри-так-же-16`,children:`Смотри так-же:`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`#property_cssArr`,children:`\\Admin::$cssArr`})}),`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`#property_jsArr`,children:`\\Admin::$jsArr`})}),`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`#method_setCss`,children:`\\Admin::setCss()`})}),`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`#method_setJs`,children:`\\Admin::setJs()`})}),`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`#method___construct`,children:`\\Admin::__construct()`})}),`
`]}),`
`,(0,n.jsx)(t.h5,{id:`свойства-13`,children:`Свойства:`}),`
`,(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`Название`}),(0,n.jsx)(t.th,{children:`Тип`}),(0,n.jsx)(t.th,{children:`По умолчанию`})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:`$data`})}),(0,n.jsx)(t.td,{children:`string|array`}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:`$view`})}),(0,n.jsx)(t.td,{children:`string`}),(0,n.jsx)(t.td,{children:`'html'`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:`$type`})}),(0,n.jsx)(t.td,{children:`string`}),(0,n.jsx)(t.td,{children:`'css'`})]})]})]}),`
`,(0,n.jsx)(t.h5,{id:`возвращает-18`,children:`Возвращает:`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`array`})})})})}),`
`,(0,n.jsxs)(t.p,{children:[`Массив с HTML-строками или ссылками в зависимости от параметра `,(0,n.jsx)(t.code,{children:`$view`}),`.`]}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsx)(`span`,{id:`method_load_data`}),`
`,(0,n.jsx)(t.h3,{id:`load_data`,children:`load_data`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`public load_data(string  name, mixed  ..._vars) : array`})})})})}),`
`,(0,n.jsx)(t.h5,{id:`краткое-содержание-19`,children:`Краткое содержание`}),`
`,(0,n.jsx)(t.p,{children:`Метод загружает данные из базы данных с использованием механизма кеширования.`}),`
`,(0,n.jsx)(t.h5,{id:`описание-15`,children:`Описание`}),`
`,(0,n.jsx)(t.p,{children:`Если данные уже закешированы, то они возвращаются из кеша, иначе выполняется запрос
к базе данных, формируется кеш и результат сохраняется на диск.`}),`
`,(0,n.jsx)(t.h5,{id:`смотри-так-же-17`,children:`Смотри так-же:`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`./DataManager#method_getDb`,children:`\\DataManager::getDb()`})}),`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`./DataManager#method_nameArgs`,children:`\\DataManager::nameArgs()`})}),`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`./DataManager#method_getComparer`,children:`\\DataManager::getComparer()`})}),`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`./DataManager#method_getConfig`,children:`\\DataManager::getConfig()`})}),`
`]}),`
`,(0,n.jsx)(t.h5,{id:`свойства-14`,children:`Свойства:`}),`
`,(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`Название`}),(0,n.jsx)(t.th,{children:`Тип`}),(0,n.jsx)(t.th,{children:`По умолчанию`})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:`$name`})}),(0,n.jsx)(t.td,{children:`string`}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:`$_vars`})}),(0,n.jsx)(t.td,{children:`mixed`}),(0,n.jsx)(t.td,{})]})]})]}),`
`,(0,n.jsx)(t.h5,{id:`ошибки-8`,children:`Ошибки:`}),`
`,(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`Тип`}),(0,n.jsx)(t.th,{children:`Описание`})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`\\JsonException`}),(0,n.jsx)(t.td,{children:`В случае JSON-ошибок при работе с кешем.`})]})})]}),`
`,(0,n.jsx)(t.h5,{id:`возвращает-19`,children:`Возвращает:`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`array`})})})})}),`
`,(0,n.jsx)(t.p,{children:`Результат выборки из базы данных, либо из кеша.`}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsx)(`span`,{id:`method_loadXfields`}),`
`,(0,n.jsx)(t.h3,{id:`loadxfields`,children:`loadXfields`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`public loadXfields(string  type = "post") : array|false`})})})})}),`
`,(0,n.jsx)(t.h5,{id:`краткое-содержание-20`,children:`Краткое содержание`}),`
`,(0,n.jsx)(t.p,{children:`Загружает дополнительные поля для новостей или профилей пользователей.`}),`
`,(0,n.jsx)(t.h5,{id:`описание-16`,children:`Описание`}),`
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
`,(0,n.jsx)(t.h5,{id:`смотри-так-же-18`,children:`Смотри так-же:`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`./CacheControl#method_getCache`,children:`\\CacheControl::getCache()`})}),`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`./CacheControl#method_setCache`,children:`\\CacheControl::setCache()`})}),`
`]}),`
`,(0,n.jsx)(t.h5,{id:`свойства-15`,children:`Свойства:`}),`
`,(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`Название`}),(0,n.jsx)(t.th,{children:`Тип`}),(0,n.jsx)(t.th,{children:`По умолчанию`})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:`$type`})}),(0,n.jsx)(t.td,{children:`string`}),(0,n.jsx)(t.td,{children:`'post'`})]})})]}),`
`,(0,n.jsx)(t.h5,{id:`возвращает-20`,children:`Возвращает:`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`array|false`})})})})}),`
`,(0,n.jsxs)(t.p,{children:[`Ассоциативный массив дополнительных полей, где ключ - название поля, значение - его
параметры. Возвращает `,(0,n.jsx)(t.code,{children:`false`}),` в случае невозможности прочитать файл.`]}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsx)(`span`,{id:`method_parseAssets`}),`
`,(0,n.jsx)(t.h3,{id:`parseassets`,children:`parseAssets`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`public parseAssets(bool  parse = false) : void`})})})})}),`
`,(0,n.jsx)(t.h5,{id:`краткое-содержание-21`,children:`Краткое содержание`}),`
`,(0,n.jsx)(t.p,{children:`Выполняет парсинг вспомогательных файлов для управления ассетами.`}),`
`,(0,n.jsx)(t.h5,{id:`описание-17`,children:`Описание`}),`
`,(0,n.jsx)(t.p,{children:`Если файл с хешами ассетов существует, то парсинг выполняется только при принудительном запуске.
В случае отсутствия указанного файла производится полное сканирование ассетов.`}),`
`,(0,n.jsx)(t.h5,{id:`смотри-так-же-19`,children:`Смотри так-же:`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`./AssetsChecker#method_parse_assets`,children:`\\parse_assets()`})}),`
`]}),`
`,(0,n.jsx)(t.h5,{id:`свойства-16`,children:`Свойства:`}),`
`,(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`Название`}),(0,n.jsx)(t.th,{children:`Тип`}),(0,n.jsx)(t.th,{children:`По умолчанию`})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:`$parse`})}),(0,n.jsx)(t.td,{children:`bool`}),(0,n.jsx)(t.td,{children:`false`})]})})]}),`
`,(0,n.jsx)(t.h5,{id:`ошибки-9`,children:`Ошибки:`}),`
`,(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`Тип`}),(0,n.jsx)(t.th,{children:`Описание`})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`\\JsonException|\\Throwable`}),(0,n.jsx)(t.td,{children:`В случае ошибок в процессах обработки JSON-файлов.`})]})})]}),`
`,(0,n.jsx)(t.h5,{id:`возвращает-21`,children:`Возвращает:`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`void`})})})})}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsx)(`span`,{id:`method_save_asset`}),`
`,(0,n.jsx)(t.h3,{id:`save_asset`,children:`save_asset`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`public save_asset(array  data, string  file) : array|false`})})})})}),`
`,(0,n.jsx)(t.h5,{id:`краткое-содержание-22`,children:`Краткое содержание`}),`
`,(0,n.jsx)(t.p,{children:`Сохраняет файл на сервер и возвращает информацию о нём или false в случае неуспеха.`}),`
`,(0,n.jsx)(t.h5,{id:`смотри-так-же-20`,children:`Смотри так-же:`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`./DataManager#method_createDir`,children:`\\DataManager::createDir()`})}),`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`./LogGenerator#method_generateLog`,children:`\\LogGenerator::generateLog()`})}),`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`./AssetsChecker#method_fetchFileContent`,children:`\\AssetsChecker::fetchFileContent()`})}),`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`./AssetsChecker#method_saveFile`,children:`\\AssetsChecker::saveFile()`})}),`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`./AssetsChecker#method_generateFileMetadata`,children:`\\AssetsChecker::generateFileMetadata()`})}),`
`]}),`
`,(0,n.jsx)(t.h5,{id:`свойства-17`,children:`Свойства:`}),`
`,(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`Название`}),(0,n.jsx)(t.th,{children:`Тип`}),(0,n.jsx)(t.th,{children:`По умолчанию`})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:`$data`})}),(0,n.jsx)(t.td,{children:`array`}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:`$file`})}),(0,n.jsx)(t.td,{children:`string`}),(0,n.jsx)(t.td,{})]})]})]}),`
`,(0,n.jsx)(t.h5,{id:`ошибки-10`,children:`Ошибки:`}),`
`,(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`Тип`}),(0,n.jsx)(t.th,{children:`Описание`})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`\\JsonException|\\Throwable`}),(0,n.jsx)(t.td,{children:`Генерирует исключение, если возникает ошибка обработки JSON.`})]})})]}),`
`,(0,n.jsx)(t.h5,{id:`возвращает-22`,children:`Возвращает:`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`array|false`})})})})}),`
`,(0,n.jsx)(t.p,{children:`Возвращает массив с информацией о сохранённом файле или false, если файл не удалось сохранить.
Массив содержит следующие ключи:`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsx)(t.li,{children:`'realpath' (string): Полный реальный путь до файла.`}),`
`,(0,n.jsx)(t.li,{children:`'dirname' (string): Директория файла.`}),`
`,(0,n.jsx)(t.li,{children:`'basename' (string): Имя файла с расширением.`}),`
`,(0,n.jsx)(t.li,{children:`'filename' (string): Имя файла без расширения.`}),`
`,(0,n.jsx)(t.li,{children:`'extension' (string): Расширение файла.`}),`
`,(0,n.jsx)(t.li,{children:`'mime' (string): MIME-тип файла.`}),`
`,(0,n.jsx)(t.li,{children:`'encoding' (string): Тип кодирования файла.`}),`
`,(0,n.jsx)(t.li,{children:`'size' (int): Размер файла в байтах.`}),`
`,(0,n.jsx)(t.li,{children:`'size_string' (string): Размер файла в человекочитаемом формате (например, "1.5MB").`}),`
`,(0,n.jsx)(t.li,{children:`'atime' (int): Время последнего доступа к файлу (в метках времени Unix).`}),`
`,(0,n.jsx)(t.li,{children:`'mtime' (int): Время последней модификации файла (в метках времени Unix).`}),`
`,(0,n.jsx)(t.li,{children:`'permission' (string): Права доступа на файл (в формате UNIX-подобной строки, например, "0755").`}),`
`]}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsx)(`span`,{id:`method_setAuthor`}),`
`,(0,n.jsx)(t.h3,{id:`setauthor`,children:`setAuthor`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`public setAuthor(\\Author  autor) : void`})})})})}),`
`,(0,n.jsx)(t.h5,{id:`краткое-содержание-23`,children:`Краткое содержание`}),`
`,(0,n.jsx)(t.p,{children:`Устанавливает объект автора в массив переменных.`}),`
`,(0,n.jsx)(t.h5,{id:`смотри-так-же-21`,children:`Смотри так-же:`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`./Author`,children:`\\Author`})}),`
`]}),`
`,(0,n.jsx)(t.h5,{id:`свойства-18`,children:`Свойства:`}),`
`,(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`Название`}),(0,n.jsx)(t.th,{children:`Тип`}),(0,n.jsx)(t.th,{children:`По умолчанию`})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:`$autor`})}),(0,n.jsx)(t.td,{children:`\\Author`}),(0,n.jsx)(t.td,{})]})})]}),`
`,(0,n.jsx)(t.h5,{id:`возвращает-23`,children:`Возвращает:`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`void`})})})})}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsx)(`span`,{id:`method_setBreadcrumb`}),`
`,(0,n.jsx)(t.h3,{id:`setbreadcrumb`,children:`setBreadcrumb`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`public setBreadcrumb(\\BreadCrumb  crumb) : void`})})})})}),`
`,(0,n.jsx)(t.h5,{id:`краткое-содержание-24`,children:`Краткое содержание`}),`
`,(0,n.jsx)(t.p,{children:`Добавляет объект хлебной крошки в массив крошек`}),`
`,(0,n.jsx)(t.h5,{id:`смотри-так-же-22`,children:`Смотри так-же:`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`./BreadCrumb`,children:`\\BreadCrumb`})}),`
`]}),`
`,(0,n.jsx)(t.h5,{id:`свойства-19`,children:`Свойства:`}),`
`,(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`Название`}),(0,n.jsx)(t.th,{children:`Тип`}),(0,n.jsx)(t.th,{children:`По умолчанию`})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:`$crumb`})}),(0,n.jsx)(t.td,{children:`\\BreadCrumb`}),(0,n.jsx)(t.td,{})]})})]}),`
`,(0,n.jsx)(t.h5,{id:`возвращает-24`,children:`Возвращает:`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`void`})})})})}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsx)(`span`,{id:`method_setCacheFolder`}),`
`,(0,n.jsx)(t.h3,{id:`setcachefolder`,children:`setCacheFolder`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`public setCacheFolder(string  cache_folder) : void`})})})})}),`
`,(0,n.jsx)(t.h5,{id:`свойства-20`,children:`Свойства:`}),`
`,(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`Название`}),(0,n.jsx)(t.th,{children:`Тип`}),(0,n.jsx)(t.th,{children:`По умолчанию`})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:`$cache_folder`})}),(0,n.jsx)(t.td,{children:`string`}),(0,n.jsx)(t.td,{})]})})]}),`
`,(0,n.jsx)(t.h5,{id:`возвращает-25`,children:`Возвращает:`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`void`})})})})}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsx)(`span`,{id:`method_setCss`}),`
`,(0,n.jsx)(t.h3,{id:`setcss`,children:`setCss`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`public setCss(array|string  css) : void`})})})})}),`
`,(0,n.jsx)(t.h5,{id:`краткое-содержание-25`,children:`Краткое содержание`}),`
`,(0,n.jsxs)(t.p,{children:[`Добавляет новый CSS-файл в массив `,(0,n.jsx)(t.code,{children:`cssArr`}),` и обновляет соответствующую переменную `,(0,n.jsx)(t.code,{children:`css`}),`.`]}),`
`,(0,n.jsx)(t.h5,{id:`описание-18`,children:`Описание`}),`
`,(0,n.jsxs)(t.p,{children:[`Метод принимает путь или массив путей к CSS-файлам и добавляет их
в массив `,(0,n.jsx)(t.code,{children:`cssArr`}),`. Впоследствии массив обрабатывается с помощью функции
`,(0,n.jsx)(t.code,{children:`htmlStatic`}),`, которая генерирует массив HTML-тегов `,(0,n.jsx)(t.code,{children:`&lt;link&gt;`}),`.
Обновленный массив HTML-тегов записывается в переменную `,(0,n.jsx)(t.code,{children:`css`}),` через метод `,(0,n.jsx)(t.code,{children:`setVar`}),`.`]}),`
`,(0,n.jsx)(t.h5,{id:`смотри-так-же-23`,children:`Смотри так-же:`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`#property_cssArr`,children:`\\Admin::$cssArr`})}),`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`#method_setVar`,children:`\\Admin::setVar`})}),`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`#method_htmlStatic`,children:`\\Admin::htmlStatic`})}),`
`]}),`
`,(0,n.jsx)(t.h5,{id:`свойства-21`,children:`Свойства:`}),`
`,(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`Название`}),(0,n.jsx)(t.th,{children:`Тип`}),(0,n.jsx)(t.th,{children:`По умолчанию`})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:`$css`})}),(0,n.jsx)(t.td,{children:`array|string`}),(0,n.jsx)(t.td,{})]})})]}),`
`,(0,n.jsx)(t.h5,{id:`возвращает-26`,children:`Возвращает:`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`void`})})})})}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsx)(`span`,{id:`method_setJs`}),`
`,(0,n.jsx)(t.h3,{id:`setjs`,children:`setJs`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`public setJs(array|string  js) : void`})})})})}),`
`,(0,n.jsx)(t.h5,{id:`краткое-содержание-26`,children:`Краткое содержание`}),`
`,(0,n.jsxs)(t.p,{children:[`Добавляет новый JavaScript файл в массив `,(0,n.jsx)(t.code,{children:`$jsArr`}),`.`]}),`
`,(0,n.jsx)(t.h5,{id:`описание-19`,children:`Описание`}),`
`,(0,n.jsxs)(t.p,{children:[`Метод принимает один или несколько путей до JavaScript файлов и объединяет их
с массивом `,(0,n.jsx)(t.code,{children:`$jsArr`}),`. После этого обновляет переменную `,(0,n.jsx)(t.code,{children:`js`}),` с помощью вызова метода `,(0,n.jsx)(t.code,{children:`htmlStatic`}),`
для формирования HTML-тегов `,(0,n.jsx)(t.code,{children:`<script>`}),`, необходимых для подключения этих файлов.`]}),`
`,(0,n.jsx)(t.h5,{id:`смотри-так-же-24`,children:`Смотри так-же:`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`#property_jsArr`,children:`\\Admin::$jsArr`})}),`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`#method_setVar`,children:`\\Admin::setVar()`})}),`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`#method_htmlStatic`,children:`\\Admin::htmlStatic()`})}),`
`]}),`
`,(0,n.jsx)(t.h5,{id:`свойства-22`,children:`Свойства:`}),`
`,(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`Название`}),(0,n.jsx)(t.th,{children:`Тип`}),(0,n.jsx)(t.th,{children:`По умолчанию`})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:`$js`})}),(0,n.jsx)(t.td,{children:`array|string`}),(0,n.jsx)(t.td,{})]})})]}),`
`,(0,n.jsx)(t.h5,{id:`возвращает-27`,children:`Возвращает:`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`void`})})})})}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsx)(`span`,{id:`method_setLink`}),`
`,(0,n.jsx)(t.h3,{id:`setlink`,children:`setLink`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`public setLink(\\AdminLink  link, string  parent) : void`})})})})}),`
`,(0,n.jsx)(t.h5,{id:`краткое-содержание-27`,children:`Краткое содержание`}),`
`,(0,n.jsx)(t.p,{children:`Устанавливает ссылку в массив меню для указанного родительского элемента.`}),`
`,(0,n.jsx)(t.h5,{id:`описание-20`,children:`Описание`}),`
`,(0,n.jsxs)(t.p,{children:[`Этот метод добавляет объект `,(0,n.jsx)(t.code,{children:`AdminLink`}),` в массив `,(0,n.jsx)(t.code,{children:`menu`}),`, вложенный в
переменную `,(0,n.jsx)(t.code,{children:`variables`}),`, обеспечивая возможность хранения структуры меню
с учетом родительских элементов. Основное назначение метода — организовать
меню по принципу вложенности.`]}),`
`,(0,n.jsx)(t.h5,{id:`смотри-так-же-25`,children:`Смотри так-же:`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`#property_variables`,children:`\\self::$variables`})}),`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`#method_generate_link`,children:`\\self::generate_link()`})}),`
`]}),`
`,(0,n.jsx)(t.h5,{id:`свойства-23`,children:`Свойства:`}),`
`,(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`Название`}),(0,n.jsx)(t.th,{children:`Тип`}),(0,n.jsx)(t.th,{children:`По умолчанию`})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:`$link`})}),(0,n.jsx)(t.td,{children:`\\AdminLink`}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:`$parent`})}),(0,n.jsx)(t.td,{children:`string`}),(0,n.jsx)(t.td,{})]})]})]}),`
`,(0,n.jsx)(t.h5,{id:`возвращает-28`,children:`Возвращает:`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`void`})})})})}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsx)(`span`,{id:`method_setLinks`}),`
`,(0,n.jsx)(t.h3,{id:`setlinks`,children:`setLinks`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`public setLinks(array  links) : void`})})})})}),`
`,(0,n.jsx)(t.h5,{id:`краткое-содержание-28`,children:`Краткое содержание`}),`
`,(0,n.jsx)(t.p,{children:`Добавляет несколько ссылок в массив меню.`}),`
`,(0,n.jsx)(t.h5,{id:`описание-21`,children:`Описание`}),`
`,(0,n.jsxs)(t.p,{children:[`Использует метод `,(0,n.jsx)(t.code,{children:`setLink`}),` для добавления каждой ссылки.`]}),`
`,(0,n.jsx)(t.h5,{id:`смотри-так-же-26`,children:`Смотри так-же:`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`#method_setLink`,children:`\\Admin::setLink()`})}),`
`]}),`
`,(0,n.jsx)(t.h5,{id:`свойства-24`,children:`Свойства:`}),`
`,(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`Название`}),(0,n.jsx)(t.th,{children:`Тип`}),(0,n.jsx)(t.th,{children:`По умолчанию`})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:`$links`})}),(0,n.jsx)(t.td,{children:`array`}),(0,n.jsx)(t.td,{})]})})]}),`
`,(0,n.jsx)(t.h5,{id:`возвращает-29`,children:`Возвращает:`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`void`})})})})}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsx)(`span`,{id:`method_setPrefix`}),`
`,(0,n.jsx)(t.h3,{id:`setprefix`,children:`setPrefix`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`public setPrefix(string|null  name = null) : void`})})})})}),`
`,(0,n.jsx)(t.h5,{id:`краткое-содержание-29`,children:`Краткое содержание`}),`
`,(0,n.jsx)(t.p,{children:`Устанавливает префикс для использования в загрузке данных.`}),`
`,(0,n.jsx)(t.h5,{id:`описание-22`,children:`Описание`}),`
`,(0,n.jsxs)(t.p,{children:[`Если переданное имя соответствует значениям "users" или "usergroup",
то префикс устанавливается в значение константы `,(0,n.jsx)(t.code,{children:`USERPREFIX`}),`.
В противном случае используется значение по умолчанию из константы `,(0,n.jsx)(t.code,{children:`PREFIX`}),`.`]}),`
`,(0,n.jsx)(t.h5,{id:`свойства-25`,children:`Свойства:`}),`
`,(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`Название`}),(0,n.jsx)(t.th,{children:`Тип`}),(0,n.jsx)(t.th,{children:`По умолчанию`})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:`$name`})}),(0,n.jsx)(t.td,{children:`string|null`}),(0,n.jsx)(t.td,{children:`null`})]})})]}),`
`,(0,n.jsx)(t.h5,{id:`возвращает-30`,children:`Возвращает:`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`void`})})})})}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsx)(`span`,{id:`method_setVar`}),`
`,(0,n.jsx)(t.h3,{id:`setvar`,children:`setVar`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`public setVar(string  name, mixed  value) : void`})})})})}),`
`,(0,n.jsx)(t.h5,{id:`краткое-содержание-30`,children:`Краткое содержание`}),`
`,(0,n.jsx)(t.p,{children:`Устанавливает значение переменной или обновляет существующую.`}),`
`,(0,n.jsx)(t.h5,{id:`описание-23`,children:`Описание`}),`
`,(0,n.jsxs)(t.p,{children:[`Метод добавляет новую переменную в массив `,(0,n.jsx)(t.code,{children:`$variables`}),` или обновляет значение
уже существующей, идентифицируемой по имени.`]}),`
`,(0,n.jsx)(t.h5,{id:`свойства-26`,children:`Свойства:`}),`
`,(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`Название`}),(0,n.jsx)(t.th,{children:`Тип`}),(0,n.jsx)(t.th,{children:`По умолчанию`})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:`$name`})}),(0,n.jsx)(t.td,{children:`string`}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:`$value`})}),(0,n.jsx)(t.td,{children:`mixed`}),(0,n.jsx)(t.td,{})]})]})]}),`
`,(0,n.jsx)(t.h5,{id:`возвращает-31`,children:`Возвращает:`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`void`})})})})}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsx)(`span`,{id:`method_setVars`}),`
`,(0,n.jsx)(t.h3,{id:`setvars`,children:`setVars`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`public setVars(array  arr = []) : void`})})})})}),`
`,(0,n.jsx)(t.h5,{id:`краткое-содержание-31`,children:`Краткое содержание`}),`
`,(0,n.jsxs)(t.p,{children:[`Устанавливает или обновляет несколько переменных в массиве `,(0,n.jsx)(t.code,{children:`$variables`}),`.`]}),`
`,(0,n.jsx)(t.h5,{id:`описание-24`,children:`Описание`}),`
`,(0,n.jsx)(t.p,{children:`Метод принимает ассоциативный массив и обновляет соответствующие переменные с использованием
метода {@see}. Если ключ из массива отсутствует в допустимых значениях,
он все равно будет добавлен.`}),`
`,(0,n.jsx)(t.h5,{id:`смотри-так-же-27`,children:`Смотри так-же:`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`#method_setVar`,children:`\\Admin::setVar()`})}),`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`#property_variables`,children:`\\Admin::$variables`})}),`
`]}),`
`,(0,n.jsx)(t.h5,{id:`свойства-27`,children:`Свойства:`}),`
`,(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`Название`}),(0,n.jsx)(t.th,{children:`Тип`}),(0,n.jsx)(t.th,{children:`По умолчанию`})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:`$arr`})}),(0,n.jsx)(t.td,{children:`array`}),(0,n.jsx)(t.td,{children:`[]`})]})})]}),`
`,(0,n.jsx)(t.h5,{id:`возвращает-32`,children:`Возвращает:`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`void`})})})})}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsx)(`span`,{id:`method_upload_file`}),`
`,(0,n.jsx)(t.h3,{id:`upload_file`,children:`upload_file`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`public upload_file() : void`})})})})}),`
`,(0,n.jsx)(t.h5,{id:`краткое-содержание-32`,children:`Краткое содержание`}),`
`,(0,n.jsx)(t.p,{children:`TODO: доработать`}),`
`,(0,n.jsx)(t.h5,{id:`возвращает-33`,children:`Возвращает:`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`void`})})})})}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsx)(`span`,{id:`method_fetchFileContent`}),`
`,(0,n.jsx)(t.h3,{id:`fetchfilecontent`,children:`fetchFileContent`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`private fetchFileContent(array  data) : string|null`})})})})}),`
`,(0,n.jsx)(t.h5,{id:`краткое-содержание-33`,children:`Краткое содержание`}),`
`,(0,n.jsx)(t.p,{children:`Получает содержимое файла по указанным ссылкам.`}),`
`,(0,n.jsx)(t.h5,{id:`описание-25`,children:`Описание`}),`
`,(0,n.jsxs)(t.p,{children:[`Метод пытается загрузить содержимое файла с основной (`,(0,n.jsx)(t.code,{children:`link`}),`) и,
при необходимости, с альтернативной (`,(0,n.jsx)(t.code,{children:`alt`}),`) ссылки, если содержимое
по основной ссылке пустое.`]}),`
`,(0,n.jsx)(t.h5,{id:`свойства-28`,children:`Свойства:`}),`
`,(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`Название`}),(0,n.jsx)(t.th,{children:`Тип`}),(0,n.jsx)(t.th,{children:`По умолчанию`})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:`$data`})}),(0,n.jsx)(t.td,{children:`array`}),(0,n.jsx)(t.td,{})]})})]}),`
`,(0,n.jsx)(t.h5,{id:`возвращает-34`,children:`Возвращает:`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`string|null`})})})})}),`
`,(0,n.jsx)(t.p,{children:`Возвращает содержимое файла, либо null, если
не удалось загрузить файл.`}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsx)(`span`,{id:`method_generateFileMetadata`}),`
`,(0,n.jsx)(t.h3,{id:`generatefilemetadata`,children:`generateFileMetadata`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`private generateFileMetadata(string  file_path) : array`})})})})}),`
`,(0,n.jsx)(t.h5,{id:`краткое-содержание-34`,children:`Краткое содержание`}),`
`,(0,n.jsx)(t.p,{children:`Генерирует метаданные для указанного файла.`}),`
`,(0,n.jsx)(t.h5,{id:`свойства-29`,children:`Свойства:`}),`
`,(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`Название`}),(0,n.jsx)(t.th,{children:`Тип`}),(0,n.jsx)(t.th,{children:`По умолчанию`})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:`$file_path`})}),(0,n.jsx)(t.td,{children:`string`}),(0,n.jsx)(t.td,{})]})})]}),`
`,(0,n.jsx)(t.h5,{id:`ошибки-11`,children:`Ошибки:`}),`
`,(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`Тип`}),(0,n.jsx)(t.th,{children:`Описание`})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`\\RuntimeException`}),(0,n.jsx)(t.td,{children:`Если файл не существует или недоступен.`})]})})]}),`
`,(0,n.jsx)(t.h5,{id:`возвращает-35`,children:`Возвращает:`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`array`})})})})}),`
`,(0,n.jsx)(t.p,{children:`Ассоциативный массив, содержащий следующую информацию о файле:`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsx)(t.li,{children:`'realpath' (string|null): Абсолютный путь до файла.`}),`
`,(0,n.jsx)(t.li,{children:`'dirname' (string): Путь к директории, содержащей файл.`}),`
`,(0,n.jsx)(t.li,{children:`'basename' (string): Имя файла с расширением.`}),`
`,(0,n.jsx)(t.li,{children:`'filename' (string): Имя файла без расширения.`}),`
`,(0,n.jsx)(t.li,{children:`'extension' (string|null): Расширение файла.`}),`
`,(0,n.jsx)(t.li,{children:`'mime' (string): MIME-тип файла.`}),`
`,(0,n.jsx)(t.li,{children:`'encoding' (string): Кодировка файла.`}),`
`,(0,n.jsx)(t.li,{children:`'size' (int): Размер файла в байтах.`}),`
`,(0,n.jsx)(t.li,{children:`'size_string' (string): Читаемое представление размера файла (например, "10.5 KB").`}),`
`,(0,n.jsx)(t.li,{children:`'atime' (int): Временная метка последнего доступа к файлу.`}),`
`,(0,n.jsx)(t.li,{children:`'mtime' (int): Временная метка последней модификации файла.`}),`
`,(0,n.jsx)(t.li,{children:`'permission' (string): Права доступа к файлу (например, "0755").`}),`
`]}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsx)(`span`,{id:`method_parse_assets`}),`
`,(0,n.jsx)(t.h3,{id:`parse_assets`,children:`parse_assets`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`private parse_assets() : void`})})})})}),`
`,(0,n.jsx)(t.h5,{id:`краткое-содержание-35`,children:`Краткое содержание`}),`
`,(0,n.jsx)(t.p,{children:`Парсит данные о ресурсах (assets), проверяет наличие отсутствующих или обновленных,
и обновляет информацию. Также сохраняет актуальные данные в локальный файл ресурсов.`}),`
`,(0,n.jsx)(t.h5,{id:`описание-26`,children:`Описание`}),`
`,(0,n.jsx)(t.p,{children:`Процесс включает следующие этапы:`}),`
`,(0,n.jsxs)(t.ol,{children:[`
`,(0,n.jsxs)(t.li,{children:[`Получение списка локальных файлов и их данных через метод `,(0,n.jsx)(t.code,{children:`prepare_assets`}),`.`]}),`
`,(0,n.jsx)(t.li,{children:`Получение данных об удаленных ресурсах через URL.`}),`
`,(0,n.jsx)(t.li,{children:`Сравнение данных о хэшах локальных и удаленных ресурсов.`}),`
`,(0,n.jsx)(t.li,{children:`Сохранение недостающих или обновленных ресурсов в локальное хранилище.`}),`
`,(0,n.jsx)(t.li,{children:`Запись актуализированных данных в локальный JSON-файл.`}),`
`]}),`
`,(0,n.jsx)(t.h5,{id:`смотри-так-же-28`,children:`Смотри так-же:`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`./AssetsChecker#method_save_asset`,children:`\\AssetsChecker::save_asset()`})}),`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`./AssetsChecker#method_repare_assets`,children:`\\AssetsChecker::prepare_assets()`})}),`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`./DataManager#method_dirToArray`,children:`\\DataManager::dirToArray()`})}),`
`]}),`
`,(0,n.jsx)(t.h5,{id:`ошибки-12`,children:`Ошибки:`}),`
`,(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`Тип`}),(0,n.jsx)(t.th,{children:`Описание`})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`\\JsonException|\\Throwable`}),(0,n.jsx)(t.td,{children:`Исключение выбрасывается в случае ошибки при работе с JSON.`})]})})]}),`
`,(0,n.jsx)(t.h5,{id:`возвращает-36`,children:`Возвращает:`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`void`})})})})}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsx)(`span`,{id:`method_prepare_assets`}),`
`,(0,n.jsx)(t.h3,{id:`prepare_assets`,children:`prepare_assets`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`private prepare_assets(array  arr, string  dir = __DIR__) : void`})})})})}),`
`,(0,n.jsx)(t.h5,{id:`краткое-содержание-36`,children:`Краткое содержание`}),`
`,(0,n.jsxs)(t.p,{children:[`Подготавливает данные о файлах, расположенных на локальном сервере, и сохраняет их в массив `,(0,n.jsx)(t.code,{children:`assets_arr`}),`.`]}),`
`,(0,n.jsx)(t.h5,{id:`описание-27`,children:`Описание`}),`
`,(0,n.jsxs)(t.p,{children:[`Метод рекурсивно обрабатывает массив с файлами и создает запись для каждого файла в конечном массиве `,(0,n.jsx)(t.code,{children:`assets_arr`}),`,
содержащую путь, имя файла и его хэш.`]}),`
`,(0,n.jsx)(t.h5,{id:`свойства-30`,children:`Свойства:`}),`
`,(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`Название`}),(0,n.jsx)(t.th,{children:`Тип`}),(0,n.jsx)(t.th,{children:`По умолчанию`})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:`$arr`})}),(0,n.jsx)(t.td,{children:`array`}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:`$dir`})}),(0,n.jsx)(t.td,{children:`string`}),(0,n.jsx)(t.td,{children:`__DIR__`})]})]})]}),`
`,(0,n.jsx)(t.h5,{id:`возвращает-37`,children:`Возвращает:`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`void`})})})})}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsx)(`span`,{id:`method_saveFile`}),`
`,(0,n.jsx)(t.h3,{id:`savefile`,children:`saveFile`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`private saveFile(string  file_path, string  content, string  file) : bool`})})})})}),`
`,(0,n.jsx)(t.h5,{id:`краткое-содержание-37`,children:`Краткое содержание`}),`
`,(0,n.jsx)(t.p,{children:`Сохраняет содержимое в файл и логирует сообщение при возникновении ошибки.`}),`
`,(0,n.jsx)(t.h5,{id:`описание-28`,children:`Описание`}),`
`,(0,n.jsx)(t.p,{children:`Метод выполняет запись переданного содержимого в указанный путь файла,
проверяет, доступен ли файл для записи, и логирует ошибку в случае неудачи.`}),`
`,(0,n.jsx)(t.h5,{id:`смотри-так-же-29`,children:`Смотри так-же:`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`./LogGenerator#method_generateLog`,children:`\\LogGenerator::generateLog()`})}),`
`]}),`
`,(0,n.jsx)(t.h5,{id:`свойства-31`,children:`Свойства:`}),`
`,(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`Название`}),(0,n.jsx)(t.th,{children:`Тип`}),(0,n.jsx)(t.th,{children:`По умолчанию`})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:`$file_path`})}),(0,n.jsx)(t.td,{children:`string`}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:`$content`})}),(0,n.jsx)(t.td,{children:`string`}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:`$file`})}),(0,n.jsx)(t.td,{children:`string`}),(0,n.jsx)(t.td,{})]})]})]}),`
`,(0,n.jsx)(t.h5,{id:`ошибки-13`,children:`Ошибки:`}),`
`,(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`Тип`}),(0,n.jsx)(t.th,{children:`Описание`})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`\\Throwable`}),(0,n.jsx)(t.td,{})]})})]}),`
`,(0,n.jsx)(t.h5,{id:`возвращает-38`,children:`Возвращает:`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`bool`})})})})}),`
`,(0,n.jsx)(t.p,{children:`Возвращает true, если файл успешно сохранён, или false — в случае ошибки.`}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsx)(`span`,{id:`method_set_cache`}),`
`,(0,n.jsx)(t.h3,{id:`set_cache`,children:`set_cache`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`private set_cache(string  type, string  name, mixed  data) : void`})})})})}),`
`,(0,n.jsx)(t.h5,{id:`краткое-содержание-38`,children:`Краткое содержание`}),`
`,(0,n.jsx)(t.p,{children:`Сохраняет данные в кеш.`}),`
`,(0,n.jsx)(t.h5,{id:`описание-29`,children:`Описание`}),`
`,(0,n.jsxs)(t.p,{children:[`Метод записывает данные в кеш, используя указанный тип и имя.
Для сохранения данных вызывается метод `,(0,n.jsx)(t.code,{children:`CacheControl::setCache`}),`, который
обрабатывает директорию и имя файла, записывает данные в формате JSON
и устанавливает необходимые права доступа к файлу.`]}),`
`,(0,n.jsx)(t.h5,{id:`смотри-так-же-30`,children:`Смотри так-же:`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`./CacheControl#method_setCache`,children:`\\CacheControl::setCache()`})}),`
`]}),`
`,(0,n.jsx)(t.h5,{id:`свойства-32`,children:`Свойства:`}),`
`,(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`Название`}),(0,n.jsx)(t.th,{children:`Тип`}),(0,n.jsx)(t.th,{children:`По умолчанию`})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:`$type`})}),(0,n.jsx)(t.td,{children:`string`}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:`$name`})}),(0,n.jsx)(t.td,{children:`string`}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:`$data`})}),(0,n.jsx)(t.td,{children:`mixed`}),(0,n.jsx)(t.td,{})]})]})]}),`
`,(0,n.jsx)(t.h5,{id:`ошибки-14`,children:`Ошибки:`}),`
`,(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`Тип`}),(0,n.jsx)(t.th,{children:`Описание`})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`\\JsonException`}),(0,n.jsx)(t.td,{})]})})]}),`
`,(0,n.jsx)(t.h5,{id:`возвращает-39`,children:`Возвращает:`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`void`})})})})}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsx)(`span`,{id:`method_setDefaultAuthor`}),`
`,(0,n.jsx)(t.h3,{id:`setdefaultauthor`,children:`setDefaultAuthor`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`private setDefaultAuthor() : void`})})})})}),`
`,(0,n.jsx)(t.h5,{id:`краткое-содержание-39`,children:`Краткое содержание`}),`
`,(0,n.jsx)(t.p,{children:`Устанавливает информацию об авторе и сохраняет её в массиве глобальных переменных.`}),`
`,(0,n.jsx)(t.h5,{id:`описание-30`,children:`Описание`}),`
`,(0,n.jsx)(t.p,{children:`Информация об авторе включает:`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsx)(t.li,{children:`Имя автора;`}),`
`,(0,n.jsx)(t.li,{children:`Контактные данные (например, E-Mail, Telegram, Вебсайт);`}),`
`,(0,n.jsx)(t.li,{children:`Данные о пожертвованиях (например, PayPal, Ko-Fi, Yandex.Money, DonationAlerts).`}),`
`]}),`
`,(0,n.jsxs)(t.p,{children:[`Контактные данные локализуются с использованием функции `,(0,n.jsx)(t.code,{children:`__()`}),`.`]}),`
`,(0,n.jsx)(t.h5,{id:`смотри-так-же-31`,children:`Смотри так-же:`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`#property_variables`,children:`\\Admin::$variables`})}),`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`./Author`,children:`\\Author`})}),`
`]}),`
`,(0,n.jsx)(t.h5,{id:`ошибки-15`,children:`Ошибки:`}),`
`,(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`Тип`}),(0,n.jsx)(t.th,{children:`Описание`})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`\\Throwable`}),(0,n.jsx)(t.td,{children:`В случае ошибок при добавлении информации или работе с объектом Author.`})]})})]}),`
`,(0,n.jsx)(t.h5,{id:`возвращает-40`,children:`Возвращает:`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`void`})})})})})]})}function l(e={}){let{wrapper:t}=e.components||{};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}export{a as _markdown,l as default,r as frontmatter,i as lastModified,o as structuredData,s as toc};