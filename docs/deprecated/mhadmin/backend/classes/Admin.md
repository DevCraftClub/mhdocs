---
tags:
  - PHP
  - DLE
  - Плагин
  - Админка
title: "Класс: Admin - MH Admin"
description: "Документация по плагину класс: admin для DLE."
keywords: "PHP, DLE, Плагин, Админка, класс: admin, DevCraft, документация"
author: "Maxim Harder"
og:title: "Класс: Admin"
og:description: "Документация по плагину класс: admin для DLE."
og:image: "https://devcraft.club/data/assets/logo_default/devcraftx2.png"
twitter:title: "Класс: Admin"
twitter:description: "Документация по плагину класс: admin для DLE."
---

# Класс: Admin

## Краткое содержание:

Класс Admin предназначен для управления административной панелью проекта.

## Описание:

Содержит функционал для подключения файлов CSS и JS, настройки переменных
окружения, работы с меню и шапками страниц. Использует трейты для
загрузки данных, взаимодействия с DLE и проверки файлов ресурсов.


---

### Свойства
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

### Методы

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

### Подробности

* Путь: engine/inc/maharder/_includes/classes/Admin.php
* Использованные трейты:
  * [\DataLoader](./DataLoader.md)
  * [\DleData](./DleData.md)
  * [\AssetsChecker](./AssetsChecker.md)

---

## Свойства
[](){#property_postXfieldKeys}
#### protected $postXfieldKeys : array
---
**Тип:** <abbr title="array">массив</abbr>

**Подробности:**


[](){#property_userXfieldKeys}
#### protected $userXfieldKeys : array
---
**Тип:** <abbr title="array">массив</abbr>

**Подробности:**


[](){#property_asset_file}
#### private $asset_file : string
---
**Краткое содержание**

Файл с информацией и хешами вспомогательных файлов

**Тип:** <abbr title="string">текст</abbr>

**Подробности:**


[](){#property_assets_arr}
#### private $assets_arr : array
---
**Краткое содержание**

Массив со всеми данными для обновления стилей и скриптов

**Тип:** <abbr title="array">массив</abbr>

**Подробности:**


[](){#property_assets_dir}
#### private $assets_dir : string
---
**Краткое содержание**

Путь до всех вспомогательных файлов

**Тип:** <abbr title="string">текст</abbr>

**Подробности:**


[](){#property_breadcrumb}
#### private $breadcrumb : array
---
**Краткое содержание**

Хранит данные для построения хлебных крошек в административной панели.

**Тип:** <abbr title="array">массив</abbr>

**Подробности:**
* Смотри так-же:
  * [Используется для установки значений хлебных крошек.](#method_setBreadcrumb)
  * [Используется для получения текущих значений хлебных крошек.](#method_getBreadcrumb)


[](){#property_cache_folder}
#### private $cache_folder : string
---
**Краткое содержание**

Папка кеша

**Тип:** <abbr title="string">текст</abbr>

**Подробности:**


[](){#property_cssArr}
#### private $cssArr : array
---
**Краткое содержание**

Список CSS-файлов, используемых в разделе администратора.

**Тип:** <abbr title="array">массив</abbr>

**Подробности:**
* Смотри так-же:
  * [Метод для добавления CSS-файлов.](#method_setCss)

##### Tags
| Тэг | Версия | Описание |
|-----|--------|----------|
| global |  | string URL Глобальная переменная, содержащая базовый URL проекта. |

[](){#property_jsArr}
#### private $jsArr : array
---
**Краткое содержание**

Массив со скриптами, которые используются в административной панели.

***Описание***

Скрипты представляют собой коллекцию путей к JavaScript-файлам,
необходимых для работы функциональных компонентов интерфейса.

**Тип:** <abbr title="array">массив</abbr>
Массив содержит ссылки на JavaScript-файлы,
таких, как библиотеки, редактор SCEditor и его плагины,
а также прочие утилиты для интерфейса административной панели.
**Подробности:**
* Смотри так-же:
  * [Метод для добавления пользовательских JavaScript-файлов.](#method_setJs)

##### Tags
| Тэг | Версия | Описание |
|-----|--------|----------|
| global |  | string URL Глобальная переменная, определяющая базовый URL приложения. |

[](){#property_links}
#### private $links : array
---
**Тип:** <abbr title="array">массив</abbr>

**Подробности:**


[](){#property_prefix}
#### private $prefix : ?string
---
**Тип:** <abbr title="?string">текст или null</abbr>

**Подробности:**


[](){#property_variables}
#### private $variables : array
---
**Краткое содержание**

Массив с различными переменными для шаблонизатора.

***Описание***

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

**Тип:** <abbr title="array">массив</abbr>
Значение свойств этой переменной задаётся по умолчанию или изменяется через методы класса.

**Подробности:**
* Смотри так-же:
  * [Для установки/обновления одного или нескольких значений.](#method_setVar)
  * [Для получения массива переменных.](#method_getVariables)
  * [Для настройки информации об авторе.](#method_setDefaultAuthor)
  * [Для присвоения ссылок (например, для меню или хлебных крошек).](#method_setLinks)
  * [\Author](./Author.md)



---

## Методы

[](){#method___construct}
### __construct

```
public __construct() : mixed
```

##### Краткое содержание

Конструктор класса.

##### Описание

Инициализирует параметры для начальной загрузки системы,
включая настройки файлов CSS и JS, меню, темы и создание
базовых директорий кеша.

##### Смотри так-же:

 * [\setVar()](#method_setvar)
 * [\htmlStatic()](#method_htmlstatic)
 * [\DataManager::getConfig()](./DataManager.md#method_getConfig)
 * [\DataManager::createDir()](./DataManager.md#method_createDir)

##### Ошибки:

| Тип | Описание |
|-----|----------|
| \JsonException|\Throwable | Генерируется при ошибках обработки JSON, связанных с конфигурацией. |

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
 * [\self::prepare_assets()](#method_prepare_assets)

##### Свойства:

| Название | Тип | По умолчанию |
|----------|-----|----------|
| **$rewrite** | bool | false |

##### Ошибки:

| Тип | Описание |
|-----|----------|
| \JsonException |  |

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

| Название | Тип | По умолчанию |
|----------|-----|----------|
| **$type** | string | &#039;all&#039; |

##### Возвращает:

```
void
```

---

[](){#method_generate_link}
### generate_link

```
static public generate_link(string  name, string  href, string  type = "link", array  children = [], string|null  data_val = null) : \AdminLink
```

##### Краткое содержание

Создаёт экземпляр класса AdminLink с данными о ссылке.

##### Смотри так-же:

 * [\AdminLink](./AdminLink.md)

##### Свойства:

| Название | Тип           | По умолчанию |
|----------|---------------|--------------|
| **$name** | string        |              |
| **$href** | string        |              |
| **$type** | string        | "link"        |
| **$children** | array         | []           |
| **$data_val** | string\| null | null |

##### Возвращает:

```
\AdminLink
```
Объект класса AdminLink с заданными параметрами.

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

| Название | Тип | По умолчанию |
|----------|-----|----------|
| **$type** | string |  |
| **$name** | string |  |

##### Ошибки:

| Тип | Описание |
|-----|----------|
| \JsonException |  |

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

 * [\load_data()](./DataLoader.md#method_load_data)

##### Свойства:

| Название | Тип | По умолчанию |
|----------|-----|----------|
| **$id** | int |  |
| **$type** | string | "post" |

##### Ошибки:

| Тип | Описание |
|-----|----------|
| \JsonException | Исключение выбрасывается, если произошла ошибка при работе с JSON. |

##### Возвращает:

```
array|bool
```
Возвращает массив дополнительных полей объекта в формате
ключ =&gt; значение, либо `false`, если данные отсутствуют.

---

[](){#method_getBreadcrumb}
### getBreadcrumb

```
public getBreadcrumb() : array
```

##### Краткое содержание

Возвращает текущий массив данных хлебных крошек.

##### Смотри так-же:

 * [\Admin::$breadcrumb](#property_breadcrumb)

##### Возвращает:

```
array
```
Массив хлебных крошек.

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

 * [\load_data()](./DataLoader.md#method_load_data)

##### Ошибки:

| Тип | Описание |
|-----|----------|
| \JsonException |  |

##### Возвращает:

```
array
```
Ассоциативный массив категорий, где ключ — ID категории, а значение — её название.

---

[](){#method_getLinkInfo}
### getLinkInfo

```
public getLinkInfo(string  name) : bool|\AdminLink
```

##### Краткое содержание

Возвращает информацию о ссылке из меню.

##### Свойства:

| Название | Тип | По умолчанию |
|----------|-----|----------|
| **$name** | string |  |

##### Возвращает:

```
bool|\AdminLink
```
Объект AdminLink, если ссылка найдена, или false, если ссылка отсутствует.

---

[](){#method_getLinkName}
### getLinkName

```
public getLinkName(string  name) : string|false
```

##### Краткое содержание

Возвращает имя ссылки на основе предоставленного имени.

##### Описание

Метод извлекает информацию о ссылке с помощью метода getLinkInfo().
Если информация найдена, возвращается имя ссылки через метод getName().
В противном случае возвращается false.

##### Смотри так-же:

 * [\getLinkInfo()](#method_getLinkInfo)
 * [\AdminLink::getName()](./AdminLink.md#method_getName)

##### Свойства:

| Название | Тип | По умолчанию |
|----------|-----|----------|
| **$name** | string |  |

##### Возвращает:

```
string|false
```
Имя ссылки или false, если информация не найдена.

---

[](){#method_getLinkUrl}
### getLinkUrl

```
public getLinkUrl(string  name) : string|false
```

##### Краткое содержание

Возвращает URL ссылки по указанному имени.

##### Описание

Метод извлекает информацию о ссылке с помощью метода getLinkInfo().
Если информация найдена, возвращается URL ссылки.
Если информация отсутствует, возвращается false.

##### Смотри так-же:

 * [\self::getLinkInfo()](#method_getLinkInfo)
 * [\AdminLink::getLink()](./AdminLink.md#method_getLink)

##### Свойства:

| Название | Тип | По умолчанию |
|----------|-----|----------|
| **$name** | string |  |

##### Возвращает:

```
string|false
```
URL ссылки, если информация доступна, или false, если ссылка не найдена.

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

 * [\load_data()](./DataLoader.md#method_load_data)

##### Свойства:

| Название | Тип          | По умолчанию |
|----------|--------------|----------|
| **$id** | int\|null    | null |
| **$uname** | string\|null | null |

##### Ошибки:

| Тип | Описание |
|-----|----------|
| \JsonException |  |

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

 * [\load_data()](./DataLoader.md#method_load_data)

##### Ошибки:

| Тип | Описание |
|-----|----------|
| \JsonException |  |

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

 * [\load_data()](./DataLoader.md#method_load_data)

##### Ошибки:

| Тип | Описание |
|-----|----------|
| \JsonException |  |

##### Возвращает:

```
array
```
Ассоциативный массив пользователей, где ключи — идентификаторы пользователей (user_id), а значения
— их имена.

---

[](){#method_getVariables}
### getVariables

```
public getVariables(string|null  name = null) : array
```

##### Краткое содержание

Получает массив переменных, связанных с модулем.

##### Описание

Метод возвращает ассоциативный массив с переменными, используемыми в модуле,
такими как параметры путей (CSS, JS), массивы подключаемых файлов, дополнительные ссылки, меню
и настройки. Если передано название переменной, метод возвращает только значение данной переменной.

##### Смотри так-же:

 * [\Admin::$variables](#property_variables)
 * [\Admin::setVars()](#method_setVars)
 * [\Admin::setLinks()](#method_setLinks)

##### Свойства:

| Название | Тип          | По умолчанию |
|----------|--------------|----------|
| **$name** | string\|null | null |

##### Возвращает:

```
array
```
Ассоциативный массив переменных модуля или значение конкретной переменной.

---

[](){#method_getXfieldInfo}
### getXfieldInfo

```
public getXfieldInfo(string  name, string  type = &#039;post&#039;) : array|null
```

##### Краткое содержание

Возвращает информацию о дополнительном поле (xfield) на основании его имени и типа.

##### Смотри так-же:

 * [\loadXfields()](./DataLoader.md#method_loadXfields)
 * [\CacheControl::getCache()](./CacheControl.md#method_getCache)

##### Свойства:

| Название | Тип | По умолчанию |
|----------|-----|----------|
| **$name** | string |  |
| **$type** | string | &#039;post&#039; |

##### Возвращает:

```
array|null
```
Возвращает информацию о поле в виде ассоциативного массива, либо null,
если поле не найдено.

---

[](){#method_htmlStatic}
### htmlStatic

```
public htmlStatic(string|array  data, string  view = "html", string  type = "css") : array
```

##### Краткое содержание

Обрабатывает массив или строку с данными ссылок на статичные файлы и формирует HTML-разметку
или массив ссылок в зависимости от переданных параметров.

##### Описание

Формирование HTML производится для типов файлов `css` и `js`, добавляя соответствующие теги
(`<link>` или `<script>`). В случае, если используются ссылки, возвращается только массив ссылок.

##### Смотри так-же:

 * [\Admin::$cssArr](#property_cssArr)
 * [\Admin::$jsArr](#property_jsArr)
 * [\Admin::setCss()](#method_setCss)
 * [\Admin::setJs()](#method_setJs)
 * [\Admin::__construct()](#method___construct)

##### Свойства:

| Название | Тип           | По умолчанию |
|----------|---------------|----------|
| **$data** | string\|array |  |
| **$view** | string        | &#039;html&#039; |
| **$type** | string        | &#039;css&#039; |

##### Возвращает:

```
array
```
Массив с HTML-строками или ссылками в зависимости от параметра `$view`.

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

| Название | Тип | По умолчанию |
|----------|-----|----------|
| **$name** | string |  |
| **$_vars** | mixed |  |

##### Ошибки:

| Тип | Описание |
|-----|----------|
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

| Название | Тип | По умолчанию |
|----------|-----|----------|
| **$type** | string | &#039;post&#039; |

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

 * [\parse_assets()](./AssetsChecker.md#method_parse_assets)

##### Свойства:

| Название | Тип | По умолчанию |
|----------|-----|----------|
| **$parse** | bool | false |

##### Ошибки:

| Тип                        | Описание |
|----------------------------|----------|
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

| Название | Тип | По умолчанию |
|----------|-----|----------|
| **$data** | array |  |
| **$file** | string |  |

##### Ошибки:

| Тип                        | Описание |
|----------------------------|----------|
| \JsonException\|\Throwable | Генерирует исключение, если возникает ошибка обработки JSON. |

##### Возвращает:

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

[](){#method_setAuthor}
### setAuthor

```
public setAuthor(\Author  autor) : void
```

##### Краткое содержание

Устанавливает объект автора в массив переменных.

##### Смотри так-же:

 * [\Author](./Author.md)

##### Свойства:

| Название | Тип | По умолчанию |
|----------|-----|----------|
| **$autor** | \Author |  |

##### Возвращает:

```
void
```

---

[](){#method_setBreadcrumb}
### setBreadcrumb

```
public setBreadcrumb(\BreadCrumb  crumb) : void
```

##### Краткое содержание

Добавляет объект хлебной крошки в массив крошек

##### Смотри так-же:

 * [\BreadCrumb](./BreadCrumb.md)

##### Свойства:

| Название | Тип | По умолчанию |
|----------|-----|----------|
| **$crumb** | \BreadCrumb |  |

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

| Название | Тип | По умолчанию |
|----------|-----|----------|
| **$cache_folder** | string |  |

##### Возвращает:

```
void
```

---

[](){#method_setCss}
### setCss

```
public setCss(array|string  css) : void
```

##### Краткое содержание

Добавляет новый CSS-файл в массив `cssArr` и обновляет соответствующую переменную `css`.

##### Описание

Метод принимает путь или массив путей к CSS-файлам и добавляет их
в массив `cssArr`. Впоследствии массив обрабатывается с помощью функции
`htmlStatic`, которая генерирует массив HTML-тегов `&lt;link&gt;`.
Обновленный массив HTML-тегов записывается в переменную `css` через метод `setVar`.

##### Смотри так-же:

 * [\Admin::$cssArr](#property_cssArr)
 * [\Admin::setVar](#method_setVar)
 * [\Admin::htmlStatic](#method_htmlStatic)

##### Свойства:

| Название | Тип           | По умолчанию |
|----------|---------------|----------|
| **$css** | array\|string |  |

##### Возвращает:

```
void
```

---

[](){#method_setJs}
### setJs

```
public setJs(array|string  js) : void
```

##### Краткое содержание

Добавляет новый JavaScript файл в массив `$jsArr`.

##### Описание

Метод принимает один или несколько путей до JavaScript файлов и объединяет их
с массивом `$jsArr`. После этого обновляет переменную `js` с помощью вызова метода `htmlStatic`
для формирования HTML-тегов `<script>`, необходимых для подключения этих файлов.

##### Смотри так-же:

 * [\Admin::$jsArr](#property_jsArr)
 * [\Admin::setVar()](#method_setVar)
 * [\Admin::htmlStatic()](#method_htmlStatic)

##### Свойства:

| Название | Тип           | По умолчанию |
|----------|---------------|----------|
| **$js** | array\|string |  |

##### Возвращает:

```
void
```

---

[](){#method_setLink}
### setLink

```
public setLink(\AdminLink  link, string  parent) : void
```

##### Краткое содержание

Устанавливает ссылку в массив меню для указанного родительского элемента.

##### Описание

Этот метод добавляет объект `AdminLink` в массив `menu`, вложенный в
переменную `variables`, обеспечивая возможность хранения структуры меню
с учетом родительских элементов. Основное назначение метода — организовать
меню по принципу вложенности.

##### Смотри так-же:

 * [\self::$variables](#property_variables)
 * [\self::generate_link()](#method_generate_link)

##### Свойства:

| Название | Тип | По умолчанию |
|----------|-----|----------|
| **$link** | \AdminLink |  |
| **$parent** | string |  |

##### Возвращает:

```
void
```

---

[](){#method_setLinks}
### setLinks

```
public setLinks(array  links) : void
```

##### Краткое содержание

Добавляет несколько ссылок в массив меню.

##### Описание

Использует метод `setLink` для добавления каждой ссылки.

##### Смотри так-же:

 * [\Admin::setLink()](#method_setLink)

##### Свойства:

| Название | Тип | По умолчанию |
|----------|-----|----------|
| **$links** | array |  |

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

| Название | Тип          | По умолчанию |
|----------|--------------|----------|
| **$name** | string\|null | null |

##### Возвращает:

```
void
```

---

[](){#method_setVar}
### setVar

```
public setVar(string  name, mixed  value) : void
```

##### Краткое содержание

Устанавливает значение переменной или обновляет существующую.

##### Описание

Метод добавляет новую переменную в массив `$variables` или обновляет значение
уже существующей, идентифицируемой по имени.


##### Свойства:

| Название | Тип | По умолчанию |
|----------|-----|----------|
| **$name** | string |  |
| **$value** | mixed |  |

##### Возвращает:

```
void
```

---

[](){#method_setVars}
### setVars

```
public setVars(array  arr = []) : void
```

##### Краткое содержание

Устанавливает или обновляет несколько переменных в массиве `$variables`.

##### Описание

Метод принимает ассоциативный массив и обновляет соответствующие переменные с использованием
метода {@see}. Если ключ из массива отсутствует в допустимых значениях,
он все равно будет добавлен.

##### Смотри так-же:

 * [\Admin::setVar()](#method_setVar)
 * [\Admin::$variables](#property_variables)

##### Свойства:

| Название | Тип | По умолчанию |
|----------|-----|----------|
| **$arr** | array | [] |

##### Возвращает:

```
void
```

---

[](){#method_upload_file}
### upload_file

```
public upload_file() : void
```

##### Краткое содержание

TODO: доработать

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

| Название | Тип | По умолчанию |
|----------|-----|----------|
| **$data** | array |  |

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

| Название | Тип | По умолчанию |
|----------|-----|----------|
| **$file_path** | string |  |

##### Ошибки:

| Тип | Описание |
|-----|----------|
| \RuntimeException | Если файл не существует или недоступен. |

##### Возвращает:

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
 * [\AssetsChecker::prepare_assets()](./AssetsChecker.md#method_repare_assets)
 * [\DataManager::dirToArray()](./DataManager.md#method_dirToArray)

##### Ошибки:

| Тип                        | Описание |
|----------------------------|----------|
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

| Название | Тип | По умолчанию |
|----------|-----|--------------|
| **$arr** | array |              |
| **$dir** | string | \_\_DIR\_\_  |

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

| Название | Тип | По умолчанию |
|----------|-----|----------|
| **$file_path** | string |  |
| **$content** | string |  |
| **$file** | string |  |

##### Ошибки:

| Тип | Описание |
|-----|----------|
| \Throwable |  |

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

| Название | Тип | По умолчанию |
|----------|-----|----------|
| **$type** | string |  |
| **$name** | string |  |
| **$data** | mixed |  |

##### Ошибки:

| Тип | Описание |
|-----|----------|
| \JsonException |  |

##### Возвращает:

```
void
```

---

[](){#method_setDefaultAuthor}
### setDefaultAuthor

```
private setDefaultAuthor() : void
```

##### Краткое содержание

Устанавливает информацию об авторе и сохраняет её в массиве глобальных переменных.

##### Описание

Информация об авторе включает:
- Имя автора;
- Контактные данные (например, E-Mail, Telegram, Вебсайт);
- Данные о пожертвованиях (например, PayPal, Ko-Fi, Yandex.Money, DonationAlerts).

Контактные данные локализуются с использованием функции `__()`.

##### Смотри так-же:

 * [\Admin::$variables](#property_variables)
 * [\Author](./Author.md)

##### Ошибки:

| Тип | Описание |
|-----|----------|
| \Throwable | В случае ошибок при добавлении информации или работе с объектом Author. |

##### Возвращает:

```
void
```
