# Class: [\Default](../../packages/Default.md)\Admin

## Summary:

Класс Admin предназначен для управления административной панелью проекта.

## Description:

Содержит функционал для подключения файлов CSS и JS, настройки переменных
окружения, работы с меню и шапками страниц. Использует трейты для
загрузки данных, взаимодействия с DLE и проверки файлов ресурсов.


---

### Properties
* protected $[postXfieldKeys](#property_postXfieldKeys)
* protected $[userXfieldKeys](#property_userXfieldKeys)
* private $[asset_file](#property_asset_file)
* private $[assets_arr](#property_assets_arr)
* private $[assets_dir](#property_assets_dir)
* private $[breadcrumb](#property_breadcrumb)
* private $[cache_folder](#property_cache_folder)
* private $[cssArr](#property_cssArr)
* private $[jsArr](#property_jsArr)
* private $[links](#property_links)
* private $[prefix](#property_prefix)
* private $[variables](#property_variables)

---

### Methods

* public [__construct()](#method___construct)
* public [checkAssets()](#method_checkAssets)
* public [clear_cache()](#method_clear_cache)
* public [generate_link()](#method_generate_link)
* public [get_cache()](#method_get_cache)
* public [get_used_xfields()](#method_get_used_xfields)
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
* public [load_data()](#method_load_data)
* public [loadXfields()](#method_loadXfields)
* public [parseAssets()](#method_parseAssets)
* public [save_asset()](#method_save_asset)
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
* public [upload_file()](#method_upload_file)
* private [fetchFileContent()](#method_fetchFileContent)
* private [generateFileMetadata()](#method_generateFileMetadata)
* private [parse_assets()](#method_parse_assets)
* private [prepare_assets()](#method_prepare_assets)
* private [saveFile()](#method_saveFile)
* private [set_cache()](#method_set_cache)
* private [setDefaultAuthor()](#method_setDefaultAuthor)

---

### Details

* File: [engine/inc/maharder/_includes/classes/Admin.php](../../engine/inc/maharder/_includes/classes/Admin.php)
* Uses Traits:
  * [\DataLoader](../classes/DataLoader.md)
  * [\DleData](../classes/DleData.md)
  * [\AssetsChecker](../classes/AssetsChecker.md)

---

## Properties
<a id="property_postXfieldKeys"></a>
#### protected $postXfieldKeys : array
---
**Type:** <a href="../array"><abbr title="array">array</abbr></a>

**Details:**


<a id="property_userXfieldKeys"></a>
#### protected $userXfieldKeys : array
---
**Type:** <a href="../array"><abbr title="array">array</abbr></a>

**Details:**


<a id="property_asset_file"></a>
#### private $asset_file : string
---
**Summary**

Файл с информацией и хешами вспомогательных файлов

**Type:** <a href="../string"><abbr title="string">string</abbr></a>

**Details:**


<a id="property_assets_arr"></a>
#### private $assets_arr : array
---
**Summary**

Массив со всеми данными для обновления стилей и скриптов

**Type:** <a href="../array"><abbr title="array">array</abbr></a>

**Details:**


<a id="property_assets_dir"></a>
#### private $assets_dir : string
---
**Summary**

Путь до всех вспомогательных файлов

**Type:** <a href="../string"><abbr title="string">string</abbr></a>

**Details:**


<a id="property_breadcrumb"></a>
#### private $breadcrumb : array
---
**Summary**

Хранит данные для построения хлебных крошек в административной панели.

**Type:** <a href="../array"><abbr title="array">array</abbr></a>

**Details:**
* See Also:
  * [Используется для установки значений хлебных крошек.](../classes/Admin.md#method_setBreadcrumb)
  * [Используется для получения текущих значений хлебных крошек.](../classes/Admin.md#method_getBreadcrumb)


<a id="property_cache_folder"></a>
#### private $cache_folder : string
---
**Summary**

Папка кеша

**Type:** <a href="../string"><abbr title="string">string</abbr></a>

**Details:**


<a id="property_cssArr"></a>
#### private $cssArr : array
---
**Summary**

Список CSS-файлов, используемых в разделе администратора.

**Type:** <a href="../array"><abbr title="array">array</abbr></a>

**Details:**
* See Also:
  * [Метод для добавления CSS-файлов.](../classes/Admin.md#method_setCss)

##### Tags
| Tag | Version | Description |
| --- | ------- | ----------- |
| global |  | string URL Глобальная переменная, содержащая базовый URL проекта. |

<a id="property_jsArr"></a>
#### private $jsArr : array
---
**Summary**

Массив со скриптами, которые используются в административной панели.

***Description***

Скрипты представляют собой коллекцию путей к JavaScript-файлам,
необходимых для работы функциональных компонентов интерфейса.

**Type:** <a href="../array"><abbr title="array">array</abbr></a>
Массив содержит ссылки на JavaScript-файлы,
таких, как библиотеки, редактор SCEditor и его плагины,
а также прочие утилиты для интерфейса административной панели.
**Details:**
* See Also:
  * [Метод для добавления пользовательских JavaScript-файлов.](../classes/Admin.md#method_setJs)

##### Tags
| Tag | Version | Description |
| --- | ------- | ----------- |
| global |  | string URL Глобальная переменная, определяющая базовый URL приложения. |

<a id="property_links"></a>
#### private $links : array
---
**Type:** <a href="../array"><abbr title="array">array</abbr></a>

**Details:**


<a id="property_prefix"></a>
#### private $prefix : ?string
---
**Type:** <a href="../?string"><abbr title="?string">?string</abbr></a>

**Details:**


<a id="property_variables"></a>
#### private $variables : array
---
**Summary**

Массив с различными переменными для шаблонизатора.

***Description***

Используется для настройки и передачи данных, таких как пути к стилям и скриптам, информация об авторе,
ссылки для хлебных крошек, а также настройки меню и другие параметры.

Описание ключей:
- **css_dir**: строка, папка со стилями.
- **js_dir**: строка, папка со скриптами.
- **css**: массив, содержит список подключаемых стилей.
- **js**: массив, содержит список подключаемых скриптов.
- **url**: строка, ссылка для корректного отображения стилей и скриптов на сайте.
- **lic_link**: строка, ссылка на пользовательское соглашение.
- **author**: массив, информация об авторе модуля:
  - **author.name**: строка, имя автора.
  - **author.contacts**: массив, список контактной информации автора:
    - **author.contacts.name**: строка, название контактного средства (например, E-Mail).
    - **author.contacts.link**: строка, ссылка для связи (например, mailto:dev@devcraft.club).
  - **author.donate**: массив, данные о поддержке:
    - **author.donate.name**: строка, название платёжной системы (например, PayPal).
    - **author.donate.value**: строка, описание платёжной системы (например, paypal.me/MaximH).
    - **author.donate.link**: строка, ссылка платёжной системы (например, https://paypal.me/MaximH).
- **menu**: массив, ссылки для меню сайта.
- **breadcrumbs**: массив, ссылки на хлебные крошки.

**Type:** <a href="../array"><abbr title="array">array</abbr></a>
Значение свойств этой переменной задаётся по умолчанию или изменяется через методы класса.
**Details:**
* See Also:
  * [Для установки/обновления одного или нескольких значений.](../classes/Admin.md#method_setVar)
  * [Для получения массива переменных.](../classes/Admin.md#method_getVariables)
  * [Для предварительной настройки параметров меню.](\Admin::preSetMenu())
  * [Для настройки информации об авторе.](../classes/Admin.md#method_setDefaultAuthor)
  * [Для присвоения ссылок (например, для меню или хлебных крошек).](../classes/Admin.md#method_setLinks)



---

## Methods

<a id="method___construct"></a>
### __construct

```
public __construct() : mixed
```

##### Summary

Конструктор класса.

##### Description

Инициализирует параметры для начальной загрузки системы,
включая настройки файлов CSS и JS, меню, темы и создание
базовых директорий кеша.

##### See Also:

 * [\setVar()](../\setVar())
 * [\htmlStatic()](../\htmlStatic())
 * [\preSetMenu()](../\preSetMenu())
 * [\DataManager::getConfig()](../../classes/DataManager.md#method_getConfig)
 * [\DataManager::createDir()](../../classes/DataManager.md#method_createDir)

##### Throws:

| Type | Description |
|------|-------------|
| \JsonException|\Throwable | Генерируется при ошибках обработки JSON, связанных с конфигурацией. |

##### Returns:

```
mixed
```

---

<a id="method_checkAssets"></a>
### checkAssets

```
public checkAssets(bool  rewrite = false) : array
```

##### Summary

Проверяет целостность файлов между локальным хранилищем и сервером разработчика.

##### Description

Если файлы отсутствуют или имеют различия в хеш-суммах, информация об этих расхождениях
возвращается в виде массива. При необходимости может быть выполнена перезапись
локального файла с данными о ресурсах.

##### See Also:

 * [\DataManager::dirToArray()](../../classes/DataManager.md#method_dirToArray)
 * [\self::prepare_assets()](../\self::prepare_assets())

##### Parameters:

| Name | Type | Default |
|------|------|---------|
| **$rewrite** | bool | false |

##### Throws:

| Type | Description |
|------|-------------|
| \JsonException |  |

##### Returns:

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

<a id="method_clear_cache"></a>
### clear_cache

```
public clear_cache(string  type = &#039;all&#039;) : void
```

##### Summary

Очищает кеш указанного типа.

##### Description

Метод позволяет очистить кеш для переданного типа или полностью, если тип &quot;all&quot;.
Использует внутренний метод CacheControl::clearCache для выполнения операции очистки.

##### See Also:

 * [\CacheControl::clearCache()](../../classes/CacheControl.md#method_clearCache)

##### Parameters:

| Name | Type | Default |
|------|------|---------|
| **$type** | string | &#039;all&#039; |

##### Returns:

```
void
```

---

<a id="method_generate_link"></a>
### generate_link

```
static public generate_link(string  name, string  href, string  type = &#039;link&#039;, array  children = [], string|null  data_val = null) : \AdminLink
```

##### Summary

Создаёт экземпляр класса AdminLink с данными о ссылке.

##### See Also:

 * [\AdminLink](../../classes/AdminLink.md)

##### Parameters:

| Name | Type | Default |
|------|------|---------|
| **$name** | string |  |
| **$href** | string |  |
| **$type** | string | &#039;link&#039; |
| **$children** | array | [] |
| **$data_val** | string|null | null |

##### Returns:

```
\AdminLink
```
Объект класса AdminLink с заданными параметрами.

---

<a id="method_get_cache"></a>
### get_cache

```
public get_cache(string  type, string  name) : array|false
```

##### Summary

Получает кешированные данные для заданного типа и имени.

##### Description

Метод использует статический метод `CacheControl::getCache()`, чтобы получить данные из файловой системы.

##### See Also:

 * [\DataManager::toTranslit()](../../classes/DataManager.md#method_toTranslit)
 * [\DataManager::normalizePath()](../../classes/DataManager.md#method_normalizePath)
 * [\CacheControl::getCache()](../../classes/CacheControl.md#method_getCache)

##### Parameters:

| Name | Type | Default |
|------|------|---------|
| **$type** | string |  |
| **$name** | string |  |

##### Throws:

| Type | Description |
|------|-------------|
| \JsonException |  |

##### Returns:

```
array|false
```
Возвращает массив декодированных данных, если файл кеша успешно найден и данные корректны,
или `false`, если произошла ошибка (например, файл не найден или данные некорректны).

---

<a id="method_get_used_xfields"></a>
### get_used_xfields

```
public get_used_xfields(int  id, string  type = &#039;post&#039;) : array|bool
```

##### Summary

Возвращает массив с дополнительными полями, использованными в объекте, либо `false`, если данные отсутствуют.

##### Description

Метод извлекает данные из базы данных для указанного объекта (поста или пользователя)
и преобразует строку с дополнительными полями в массив с ключами и их значениями.

##### See Also:

 * [\load_data()](../\load_data())

##### Parameters:

| Name | Type | Default |
|------|------|---------|
| **$id** | int |  |
| **$type** | string | &#039;post&#039; |

##### Throws:

| Type | Description |
|------|-------------|
| \JsonException | Исключение выбрасывается, если произошла ошибка при работе с JSON. |

##### Returns:

```
array|bool
```
Возвращает массив дополнительных полей объекта в формате
ключ =&gt; значение, либо `false`, если данные отсутствуют.

---

<a id="method_getBreadcrumb"></a>
### getBreadcrumb

```
public getBreadcrumb() : array
```

##### Summary

Возвращает текущий массив данных хлебных крошек.

##### See Also:

 * [\Admin::$breadcrumb](../../classes/Admin.md#property_breadcrumb)

##### Returns:

```
array
```
Массив хлебных крошек.

---

<a id="method_getCacheFolder"></a>
### getCacheFolder

```
public getCacheFolder() : string
```

##### Returns:

```
string
```

---

<a id="method_getCats"></a>
### getCats

```
public getCats() : array
```

##### Summary

Возвращает список категорий в виде ассоциативного массива, где ключом является ID категории, а значением — её
название.

##### Description

Метод загружает данные из базы данных, используя метод `load_data`, и сортирует их по названию категории в
алфавитном порядке. В результате возвращается массив с ID категорий в качестве ключей и названиями категорий в
качестве значений.

##### See Also:

 * [\load_data()](../\load_data())

##### Throws:

| Type | Description |
|------|-------------|
| \JsonException |  |

##### Returns:

```
array
```
Ассоциативный массив категорий, где ключ — ID категории, а значение — её название.

---

<a id="method_getLinkInfo"></a>
### getLinkInfo

```
public getLinkInfo(string  name) : bool|\AdminLink
```

##### Summary

Возвращает информацию о ссылке из меню.

##### Parameters:

| Name | Type | Default |
|------|------|---------|
| **$name** | string |  |

##### Returns:

```
bool|\AdminLink
```
Объект AdminLink, если ссылка найдена, или false, если ссылка отсутствует.

---

<a id="method_getLinkName"></a>
### getLinkName

```
public getLinkName(string  name) : string|false
```

##### Summary

Возвращает имя ссылки на основе предоставленного имени.

##### Description

Метод извлекает информацию о ссылке с помощью метода getLinkInfo().
Если информация найдена, возвращается имя ссылки через метод getName().
В противном случае возвращается false.

##### See Also:

 * [\getLinkInfo()](../\getLinkInfo())
 * [\AdminLink::getName()](../../classes/AdminLink.md#method_getName)

##### Parameters:

| Name | Type | Default |
|------|------|---------|
| **$name** | string |  |

##### Returns:

```
string|false
```
Имя ссылки или false, если информация не найдена.

---

<a id="method_getLinkUrl"></a>
### getLinkUrl

```
public getLinkUrl(string  name) : string|false
```

##### Summary

Возвращает URL ссылки по указанному имени.

##### Description

Метод извлекает информацию о ссылке с помощью метода getLinkInfo().
Если информация найдена, возвращается URL ссылки.
Если информация отсутствует, возвращается false.

##### See Also:

 * [\self::getLinkInfo()](../\self::getLinkInfo())
 * [\AdminLink::getLink()](../../classes/AdminLink.md#method_getLink)

##### Parameters:

| Name | Type | Default |
|------|------|---------|
| **$name** | string |  |

##### Returns:

```
string|false
```
URL ссылки, если информация доступна, или false, если ссылка не найдена.

---

<a id="method_getPrefix"></a>
### getPrefix

```
public getPrefix() : string
```

##### Summary

Возвращает префикс для использования в SQL-запросах.

##### Description

Метод проверяет, установлен ли префикс. Если префикс не задан, он вызывает метод `setPrefix()`,
чтобы установить его значение. Затем возвращает установившийся префикс.

##### See Also:

 * [\DataLoader::$prefix](../../classes/DataLoader.md#property_prefix)
 * [\DataLoader::setPrefix()](../../classes/DataLoader.md#method_setPrefix)

##### Returns:

```
string
```
Префикс, используемый для построения SQL-запросов.

---

<a id="method_getUser"></a>
### getUser

```
public getUser(int|null  id = null, string|null  uname = null) : array|false
```

##### Summary

Получает данные пользователя по ID или имени пользователя.

##### Description

Если ни идентификатор пользователя, ни имя пользователя не переданы, метод возвращает `false`.
В противном случае выполняется поиск данных в таблице `users` с использованием указанного критерия.

##### See Also:

 * [\load_data()](../\load_data())

##### Parameters:

| Name | Type | Default |
|------|------|---------|
| **$id** | int|null | null |
| **$uname** | string|null | null |

##### Throws:

| Type | Description |
|------|-------------|
| \JsonException |  |

##### Returns:

```
array|false
```
Ассоциативный массив с данными о пользователе, если пользователь найден.
Возвращает `false`, если пользователь не найден или если критерии поиска не заданы.

---

<a id="method_getUserGroups"></a>
### getUserGroups

```
public getUserGroups() : array
```

##### Summary

Получает список групп пользователей в формате массива с идентификаторами и именами групп.

##### Description

Метод обращается к функции `load_data` для загрузки данных о группах пользователей
из таблицы &quot;usergroups&quot; с выборкой полей `id` и `group_name`,
затем преобразует результат в ассоциативный массив с ключами — идентификаторами групп,
и значениями — именами групп, отсортированными по названию группы в алфавитном порядке (ASC).

##### See Also:

 * [\load_data()](../\load_data())

##### Throws:

| Type | Description |
|------|-------------|
| \JsonException |  |

##### Returns:

```
array
```
Ассоциативный массив, где ключ — идентификатор группы, значение — имя группы.

---

<a id="method_getUsers"></a>
### getUsers

```
public getUsers() : array
```

##### Summary

Возвращает список пользователей из базы данных.

##### Description

Метод загружает данные о пользователях, используя метод `load_data`,
и возвращает массив, где ключами являются идентификаторы пользователей,
а значениями — их имена, отсортированные в алфавитном порядке.

##### See Also:

 * [\load_data()](../\load_data())

##### Throws:

| Type | Description |
|------|-------------|
| \JsonException |  |

##### Returns:

```
array
```
Ассоциативный массив пользователей, где ключи — идентификаторы пользователей (user_id), а значения
— их имена.

---

<a id="method_getVariables"></a>
### getVariables

```
public getVariables(string|null  name = null) : array
```

##### Summary

Получает массив переменных, связанных с модулем.

##### Description

Метод возвращает ассоциативный массив с переменными, используемыми в модуле,
такими как параметры путей (CSS, JS), массивы подключаемых файлов, дополнительные ссылки, меню
и настройки. Если передано название переменной, метод возвращает только значение данной переменной.

##### See Also:

 * [\Admin::$variables](../../classes/Admin.md#property_variables)
 * [\Admin::setVars()](../../classes/Admin.md#method_setVars)
 * [\Admin::setLinks()](../../classes/Admin.md#method_setLinks)

##### Parameters:

| Name | Type | Default |
|------|------|---------|
| **$name** | string|null | null |

##### Returns:

```
array
```
Ассоциативный массив переменных модуля или значение конкретной переменной.

---

<a id="method_getXfieldInfo"></a>
### getXfieldInfo

```
public getXfieldInfo(string  name, string  type = &#039;post&#039;) : array|null
```

##### Summary

Возвращает информацию о дополнительном поле (xfield) на основании его имени и типа.

##### See Also:

 * [\loadXfields()](../\loadXfields())
 * [\CacheControl::getCache()](../../classes/CacheControl.md#method_getCache)

##### Parameters:

| Name | Type | Default |
|------|------|---------|
| **$name** | string |  |
| **$type** | string | &#039;post&#039; |

##### Returns:

```
array|null
```
Возвращает информацию о поле в виде ассоциативного массива, либо null,
если поле не найдено.

---

<a id="method_htmlStatic"></a>
### htmlStatic

```
public htmlStatic(string|array  data, string  view = &#039;html&#039;, string  type = &#039;css&#039;) : array
```

##### Summary

Обрабатывает массив или строку с данными ссылок на статичные файлы и формирует HTML-разметку
или массив ссылок в зависимости от переданных параметров.

##### Description

Формирование HTML производится для типов файлов `css` и `js`, добавляя соответствующие теги
(`&lt;link&gt;` или `&lt;script&gt;`). В случае, если используются ссылки, возвращается только массив ссылок.

##### See Also:

 * [\Admin::$cssArr](../../classes/Admin.md#property_cssArr)
 * [\Admin::$jsArr](../../classes/Admin.md#property_jsArr)
 * [\self::setCss()](../\self::setCss())
 * [\self::setJs()](../\self::setJs())
 * [\self::__construct()](../\self::__construct())

##### Parameters:

| Name | Type | Default |
|------|------|---------|
| **$data** | string|array |  |
| **$view** | string | &#039;html&#039; |
| **$type** | string | &#039;css&#039; |

##### Returns:

```
array
```
Массив с HTML-строками или ссылками в зависимости от параметра `$view`.

---

<a id="method_load_data"></a>
### load_data

```
public load_data(string  name, mixed  ..._vars) : array
```

##### Summary

Метод загружает данные из базы данных с использованием механизма кеширования.

##### Description

Если данные уже закешированы, то они возвращаются из кеша, иначе выполняется запрос
к базе данных, формируется кеш и результат сохраняется на диск.

##### See Also:

 * [\DataManager::getDb()](../../classes/DataManager.md#method_getDb)
 * [\DataManager::nameArgs()](../../classes/DataManager.md#method_nameArgs)
 * [\DataManager::getComparer()](../../classes/DataManager.md#method_getComparer)
 * [\DataManager::getConfig()](../../classes/DataManager.md#method_getConfig)

##### Parameters:

| Name | Type | Default |
|------|------|---------|
| **$name** | string |  |
| **$_vars** | mixed |  |

##### Throws:

| Type | Description |
|------|-------------|
| \JsonException | В случае JSON-ошибок при работе с кешем. |

##### Returns:

```
array
```
Результат выборки из базы данных, либо из кеша.

---

<a id="method_loadXfields"></a>
### loadXfields

```
public loadXfields(string  type = &#039;post&#039;) : array|false
```

##### Summary

Загружает дополнительные поля для новостей или профилей пользователей.

##### Description

Метод извлекает данные из кэша, либо, при его отсутствии, читает данные из файла конфигурации.
Возвращает ассоциативный массив, где ключами являются названия дополнительных полей, а значениями - их параметры.
Данные загружаются в зависимости от значения параметра `$type`:
- `&#039;post&#039;`: данные загружаются из файла `xfields.txt`.
- `&#039;user&#039;`: данные загружаются из файла `xprofile.txt`.

Ключи массива, формируемого из файла конфигурации, соответствуют предопределённым ключам, указанным
в свойствах `userXfieldKeys` или `postXfieldKeys`.

##### See Also:

 * [\CacheControl::getCache()](../../classes/CacheControl.md#method_getCache)
 * [\CacheControl::setCache()](../../classes/CacheControl.md#method_setCache)
 * [\file()](../\file())
 * [\fclose()](../\fclose())

##### Parameters:

| Name | Type | Default |
|------|------|---------|
| **$type** | string | &#039;post&#039; |

##### Returns:

```
array|false
```
Ассоциативный массив дополнительных полей, где ключ - название поля, значение - его параметры.
Возвращает `false` в случае невозможности прочитать файл.

---

<a id="method_parseAssets"></a>
### parseAssets

```
public parseAssets(bool  parse = false) : void
```

##### Summary

Выполняет парсинг вспомогательных файлов для управления ассетами.

##### Description

Если файл с хешами ассетов существует, то парсинг выполняется только при принудительном запуске.
В случае отсутствия указанного файла производится полное сканирование ассетов.

##### See Also:

 * [](../)
 * [\parse_assets()](../\parse_assets())

##### Parameters:

| Name | Type | Default |
|------|------|---------|
| **$parse** | bool | false |

##### Throws:

| Type | Description |
|------|-------------|
| \JsonException | В случае ошибок в процессах обработки JSON-файлов. |

##### Returns:

```
void
```

---

<a id="method_save_asset"></a>
### save_asset

```
public save_asset(array  data, string  file) : array|false
```

##### Summary

Сохраняет файл на сервер и возвращает информацию о нём или false в случае неуспеха.

##### See Also:

 * [\DataManager::createDir()](../../classes/DataManager.md#method_createDir)
 * [\LogGenerator::generateLog()](../../classes/LogGenerator.md#method_generateLog)
 * [\AssetsChecker::fetchFileContent()](../../classes/AssetsChecker.md#method_fetchFileContent)
 * [\AssetsChecker::saveFile()](../../classes/AssetsChecker.md#method_saveFile)
 * [\AssetsChecker::generateFileMetadata()](../../classes/AssetsChecker.md#method_generateFileMetadata)

##### Parameters:

| Name | Type | Default |
|------|------|---------|
| **$data** | array |  |
| **$file** | string |  |

##### Throws:

| Type | Description |
|------|-------------|
| \JsonException|\Throwable | Генерирует исключение, если возникает ошибка обработки JSON. |

##### Returns:

```
array|false
```
Возвращает массив с информацией о сохранённом файле или false, если файл не удалось сохранить.
Массив содержит следующие ключи:
- &#039;realpath&#039; (string): Полный реальный путь до файла.
- &#039;dirname&#039; (string): Директория файла.
- &#039;basename&#039; (string): Имя файла с расширением.
- &#039;filename&#039; (string): Имя файла без расширения.
- &#039;extension&#039; (string): Расширение файла.
- &#039;mime&#039; (string): MIME-тип файла.
- &#039;encoding&#039; (string): Тип кодирования файла.
- &#039;size&#039; (int): Размер файла в байтах.
- &#039;size_string&#039; (string): Размер файла в человекочитаемом формате (например, &quot;1.5MB&quot;).
- &#039;atime&#039; (int): Время последнего доступа к файлу (в метках времени Unix).
- &#039;mtime&#039; (int): Время последней модификации файла (в метках времени Unix).
- &#039;permission&#039; (string): Права доступа на файл (в формате UNIX-подобной строки, например, &quot;0755&quot;).

---

<a id="method_setAuthor"></a>
### setAuthor

```
public setAuthor(\Author  autor) : void
```

##### Summary

Устанавливает объект автора в массив переменных.

##### See Also:

 * [\Author](../../classes/Author.md)

##### Parameters:

| Name | Type | Default |
|------|------|---------|
| **$autor** | \Author |  |

##### Returns:

```
void
```

---

<a id="method_setBreadcrumb"></a>
### setBreadcrumb

```
public setBreadcrumb(\BreadCrumb  crumb) : void
```

##### Summary

Добавляет объект хлебной крошки в массив крошек

##### See Also:

 * [\BreadCrumb](../../classes/BreadCrumb.md)

##### Parameters:

| Name | Type | Default |
|------|------|---------|
| **$crumb** | \BreadCrumb |  |

##### Returns:

```
void
```

---

<a id="method_setCacheFolder"></a>
### setCacheFolder

```
public setCacheFolder(string  cache_folder) : void
```

##### Parameters:

| Name | Type | Default |
|------|------|---------|
| **$cache_folder** | string |  |

##### Returns:

```
void
```

---

<a id="method_setCss"></a>
### setCss

```
public setCss(array|string  css) : void
```

##### Summary

Добавляет новый CSS-файл в массив `cssArr` и обновляет соответствующую переменную `css`.

##### Description

Метод принимает путь или массив путей к CSS-файлам и добавляет их
в массив `cssArr`. Впоследствии массив обрабатывается с помощью функции
`htmlStatic`, которая генерирует массив HTML-тегов `&lt;link&gt;`.
Обновленный массив HTML-тегов записывается в переменную `css` через метод `setVar`.

##### See Also:

 * [\Admin::$cssArr](../../classes/Admin.md#property_cssArr)
 * [\Admin::setVar](../\Admin::setVar)
 * [\Admin::htmlStatic](../\Admin::htmlStatic)

##### Parameters:

| Name | Type | Default |
|------|------|---------|
| **$css** | array|string |  |

##### Returns:

```
void
```

---

<a id="method_setJs"></a>
### setJs

```
public setJs(array|string  js) : void
```

##### Summary

Добавляет новый JavaScript файл в массив `$jsArr`.

##### Description

Метод принимает один или несколько путей до JavaScript файлов и объединяет их
с массивом `$jsArr`. После этого обновляет переменную `js` с помощью вызова метода `htmlStatic`
для формирования HTML-тегов `&lt;script&gt;`, необходимых для подключения этих файлов.

##### See Also:

 * [\Admin::$jsArr](../../classes/Admin.md#property_jsArr)
 * [\Admin::setVar()](../../classes/Admin.md#method_setVar)
 * [\Admin::htmlStatic()](../../classes/Admin.md#method_htmlStatic)

##### Parameters:

| Name | Type | Default |
|------|------|---------|
| **$js** | array|string |  |

##### Returns:

```
void
```

---

<a id="method_setLink"></a>
### setLink

```
public setLink(\AdminLink  link, string  parent) : void
```

##### Summary

Устанавливает ссылку в массив меню для указанного родительского элемента.

##### Description

Этот метод добавляет объект `AdminLink` в массив `menu`, вложенный в
переменную `variables`, обеспечивая возможность хранения структуры меню
с учетом родительских элементов. Основное назначение метода — организовать
меню по принципу вложенности.

##### See Also:

 * [\self::$variables](../\self::$variables)
 * [\self::generate_link()](../\self::generate_link())

##### Parameters:

| Name | Type | Default |
|------|------|---------|
| **$link** | \AdminLink |  |
| **$parent** | string |  |

##### Returns:

```
void
```

---

<a id="method_setLinks"></a>
### setLinks

```
public setLinks(array  links) : void
```

##### Summary

Добавляет несколько ссылок в массив меню.

##### Description

Использует метод `setLink` для добавления каждой ссылки.

##### See Also:

 * [\Admin::setLink()](../../classes/Admin.md#method_setLink)

##### Parameters:

| Name | Type | Default |
|------|------|---------|
| **$links** | array |  |

##### Returns:

```
void
```

---

<a id="method_setPrefix"></a>
### setPrefix

```
public setPrefix(string|null  name = null) : void
```

##### Summary

Устанавливает префикс для использования в загрузке данных.

##### Description

Если переданное имя соответствует значениям &quot;users&quot; или &quot;usergroup&quot;,
то префикс устанавливается в значение константы `USERPREFIX`.
В противном случае используется значение по умолчанию из константы `PREFIX`.

##### Parameters:

| Name | Type | Default |
|------|------|---------|
| **$name** | string|null | null |

##### Returns:

```
void
```

---

<a id="method_setVar"></a>
### setVar

```
public setVar(string  name, mixed  value) : void
```

##### Summary

Устанавливает значение переменной или обновляет существующую.

##### Description

Метод добавляет новую переменную в массив `$variables` или обновляет значение
уже существующей, идентифицируемой по имени.

##### See Also:

 * [](../)

##### Parameters:

| Name | Type | Default |
|------|------|---------|
| **$name** | string |  |
| **$value** | mixed |  |

##### Returns:

```
void
```

---

<a id="method_setVars"></a>
### setVars

```
public setVars(array  arr = []) : void
```

##### Summary

Устанавливает или обновляет несколько переменных в массиве `$variables`.

##### Description

Метод принимает ассоциативный массив и обновляет соответствующие переменные с использованием
метода {@see}. Если ключ из массива отсутствует в допустимых значениях,
он все равно будет добавлен.

##### See Also:

 * [\Admin::setVar()](../../classes/Admin.md#method_setVar)
 * [\Admin::$variables](../../classes/Admin.md#property_variables)

##### Parameters:

| Name | Type | Default |
|------|------|---------|
| **$arr** | array | [] |

##### Returns:

```
void
```

---

<a id="method_upload_file"></a>
### upload_file

```
public upload_file() : void
```

##### Summary

TODO: доработать

##### Returns:

```
void
```

---

<a id="method_fetchFileContent"></a>
### fetchFileContent

```
private fetchFileContent(array  data) : string|null
```

##### Summary

Получает содержимое файла по указанным ссылкам.

##### Description

Метод пытается загрузить содержимое файла с основной (`link`) и,
при необходимости, с альтернативной (`alt`) ссылки, если содержимое
по основной ссылке пустое.

##### See Also:

 * [\file_get_contents()](../\file_get_contents())

##### Parameters:

| Name | Type | Default |
|------|------|---------|
| **$data** | array |  |

##### Returns:

```
string|null
```
Возвращает содержимое файла, либо null, если
не удалось загрузить файл.

---

<a id="method_generateFileMetadata"></a>
### generateFileMetadata

```
private generateFileMetadata(string  file_path) : array
```

##### Summary

Генерирует метаданные для указанного файла.

##### See Also:

 * [\format_bytes()](../\format_bytes())

##### Parameters:

| Name | Type | Default |
|------|------|---------|
| **$file_path** | string |  |

##### Throws:

| Type | Description |
|------|-------------|
| \RuntimeException | Если файл не существует или недоступен. |

##### Returns:

```
array
```
Ассоциативный массив, содержащий следующую информацию о файле:
- &#039;realpath&#039; (string|null): Абсолютный путь до файла.
- &#039;dirname&#039; (string): Путь к директории, содержащей файл.
- &#039;basename&#039; (string): Имя файла с расширением.
- &#039;filename&#039; (string): Имя файла без расширения.
- &#039;extension&#039; (string|null): Расширение файла.
- &#039;mime&#039; (string): MIME-тип файла.
- &#039;encoding&#039; (string): Кодировка файла.
- &#039;size&#039; (int): Размер файла в байтах.
- &#039;size_string&#039; (string): Читаемое представление размера файла (например, &quot;10.5 KB&quot;).
- &#039;atime&#039; (int): Временная метка последнего доступа к файлу.
- &#039;mtime&#039; (int): Временная метка последней модификации файла.
- &#039;permission&#039; (string): Права доступа к файлу (например, &quot;0755&quot;).

---

<a id="method_parse_assets"></a>
### parse_assets

```
private parse_assets() : void
```

##### Summary

Парсит данные о ресурсах (assets), проверяет наличие отсутствующих или обновленных,
и обновляет информацию. Также сохраняет актуальные данные в локальный файл ресурсов.

##### Description

Процесс включает следующие этапы:
1. Получение списка локальных файлов и их данных через метод `prepare_assets`.
2. Получение данных об удаленных ресурсах через URL.
3. Сравнение данных о хэшах локальных и удаленных ресурсов.
4. Сохранение недостающих или обновленных ресурсов в локальное хранилище.
5. Запись актуализированных данных в локальный JSON-файл.

##### See Also:

 * [\self::save_asset()](../\self::save_asset())
 * [\self::prepare_assets()](../\self::prepare_assets())
 * [](../)
 * [](../)
 * [\DataManager::dirToArray()](../../classes/DataManager.md#method_dirToArray)

##### Throws:

| Type | Description |
|------|-------------|
| \JsonException|\Throwable | Исключение выбрасывается в случае ошибки при работе с JSON. |

##### Returns:

```
void
```

---

<a id="method_prepare_assets"></a>
### prepare_assets

```
private prepare_assets(array  arr, string  dir = __DIR__) : void
```

##### Summary

Подготавливает данные о файлах, расположенных на локальном сервере, и сохраняет их в массив `assets_arr`.

##### Description

Метод рекурсивно обрабатывает массив с файлами и создает запись для каждого файла в конечном массиве `assets_arr`,
содержащую путь, имя файла и его хэш.

##### See Also:

 * [\hash_file()](../\hash_file())
 * [\pathinfo()](../\pathinfo())

##### Parameters:

| Name | Type | Default |
|------|------|---------|
| **$arr** | array |  |
| **$dir** | string | __DIR__ |

##### Returns:

```
void
```

---

<a id="method_saveFile"></a>
### saveFile

```
private saveFile(string  file_path, string  content, string  file) : bool
```

##### Summary

Сохраняет содержимое в файл и логирует сообщение при возникновении ошибки.

##### Description

Метод выполняет запись переданного содержимого в указанный путь файла,
проверяет, доступен ли файл для записи, и логирует ошибку в случае неудачи.

##### See Also:

 * [\LogGenerator::generateLog()](../../classes/LogGenerator.md#method_generateLog)

##### Parameters:

| Name | Type | Default |
|------|------|---------|
| **$file_path** | string |  |
| **$content** | string |  |
| **$file** | string |  |

##### Throws:

| Type | Description |
|------|-------------|
| \Throwable |  |

##### Returns:

```
bool
```
Возвращает true, если файл успешно сохранён, или false — в случае ошибки.

---

<a id="method_set_cache"></a>
### set_cache

```
private set_cache(string  type, string  name, mixed  data) : void
```

##### Summary

Сохраняет данные в кеш.

##### Description

Метод записывает данные в кеш, используя указанный тип и имя.
Для сохранения данных вызывается метод `CacheControl::setCache`, который
обрабатывает директорию и имя файла, записывает данные в формате JSON
и устанавливает необходимые права доступа к файлу.

##### See Also:

 * [\CacheControl::setCache()](../../classes/CacheControl.md#method_setCache)

##### Parameters:

| Name | Type | Default |
|------|------|---------|
| **$type** | string |  |
| **$name** | string |  |
| **$data** | mixed |  |

##### Throws:

| Type | Description |
|------|-------------|
| \JsonException |  |

##### Returns:

```
void
```

---

<a id="method_setDefaultAuthor"></a>
### setDefaultAuthor

```
private setDefaultAuthor() : void
```

##### Summary

Устанавливает информацию об авторе и сохраняет её в массиве глобальных переменных.

##### Description

Информация об авторе включает:
- Имя автора;
- Контактные данные (например, E-Mail, Telegram, Вебсайт);
- Данные о пожертвованиях (например, PayPal, Ko-Fi, Yandex.Money, DonationAlerts).

Контактные данные локализуются с использованием функции `__()`.

##### See Also:

 * [\variables](../\variables)
 * [\__](../\__)
 * [\Author](../../classes/Author.md)

##### Throws:

| Type | Description |
|------|-------------|
| \Throwable | В случае ошибок при добавлении информации или работе с объектом Author. |

##### Returns:

```
void
```
