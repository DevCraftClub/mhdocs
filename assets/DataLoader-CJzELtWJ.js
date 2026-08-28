import{r as e}from"./rolldown-runtime-QTnfLwEv.js";import{t}from"./jsx-runtime-By8HlURe.js";var n=e(t()),r={title:`Класс: DataLoader`,description:`Документация по плагину класс: dataloader для DLE.`},i=new Date(1787834766e3),a=`

## Краткое содержание: [#краткое-содержание]

Трейт для загрузки данных с использованием кеша или базы данных.

## Описание: [#описание]

Обеспечивает базовые операции с данными, такие как загрузка, сохранение или обновление
с интеграцией в систему кеширования и базу данных.
Использование:
Подключите этот трейт к классу для получения базовой функциональности
работы с данными.

***

### Свойства [#свойства]

* private $[cache\\_folder](#property_cache_folder)
* private $[prefix](#property_prefix)

***

### Методы [#методы]

* public [clear\\_cache()](#method_clear_cache)
* public [get\\_cache()](#method_get_cache)
* public [getCacheFolder()](#method_getCacheFolder)
* public [getPrefix()](#method_getPrefix)
* public [load\\_data()](#method_load_data)
* public [setCacheFolder()](#method_setCacheFolder)
* public [setPrefix()](#method_setPrefix)
* private [set\\_cache()](#method_set_cache)

***

### Подробности [#подробности]

* Путь: engine/inc/maharder/\\_includes/traits/DataLoader.php

***

## Свойства [#свойства-1]

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

***

## Методы [#методы-1]

<span id="method_clear_cache" />

### clear\\_cache [#clear_cache]

\`\`\`
public clear_cache(string  type = "all") : void
\`\`\`

##### Краткое содержание [#краткое-содержание-1]

Очищает кеш указанного типа.

##### Описание [#описание-1]

Метод позволяет очистить кеш для переданного типа или полностью, если тип "all".
Использует внутренний метод CacheControl::clearCache для выполнения операции очистки.

##### Смотри так-же: [#смотри-так-же]

* [\\CacheControl::clearCache()](./CacheControl#method_clearCache)

##### Свойства: [#свойства-2]

| Название  | Тип    | По умолчанию |
| --------- | ------ | ------------ |
| **$type** | string | 'all'        |

##### Возвращает: [#возвращает]

\`\`\`
void
\`\`\`

***

<span id="method_get_cache" />

### get\\_cache [#get_cache]

\`\`\`
public get_cache(string  type, string  name) : array|false
\`\`\`

##### Краткое содержание [#краткое-содержание-2]

Получает кешированные данные для заданного типа и имени.

##### Описание [#описание-2]

Метод использует статический метод \`CacheControl::getCache()\`, чтобы получить данные из файловой системы.

##### Смотри так-же: [#смотри-так-же-1]

* [\\DataManager::toTranslit()](./DataManager#method_toTranslit)
* [\\DataManager::normalizePath()](./DataManager#method_normalizePath)
* [\\CacheControl::getCache()](./CacheControl#method_getCache)

##### Свойства: [#свойства-3]

| Название  | Тип    | По умолчанию |
| --------- | ------ | ------------ |
| **$type** | string |              |
| **$name** | string |              |

##### Ошибки: [#ошибки]

| Тип            | Описание |
| -------------- | -------- |
| \\JsonException |          |

##### Возвращает: [#возвращает-1]

\`\`\`
array|false
\`\`\`

Возвращает массив декодированных данных, если файл кеша успешно найден и данные корректны,
или \`false\`, если произошла ошибка (например, файл не найден или данные некорректны).

***

<span id="method_getCacheFolder" />

### getCacheFolder [#getcachefolder]

\`\`\`
public getCacheFolder() : string
\`\`\`

##### Возвращает: [#возвращает-2]

\`\`\`
string
\`\`\`

***

<span id="method_getPrefix" />

### getPrefix [#getprefix]

\`\`\`
public getPrefix() : string
\`\`\`

##### Краткое содержание [#краткое-содержание-3]

Возвращает префикс для использования в SQL-запросах.

##### Описание [#описание-3]

Метод проверяет, установлен ли префикс. Если префикс не задан, он вызывает метод \`setPrefix()\`,
чтобы установить его значение. Затем возвращает установившийся префикс.

##### Смотри так-же: [#смотри-так-же-2]

* [\\DataLoader::$prefix](./DataLoader#property_prefix)
* [\\DataLoader::setPrefix()](./DataLoader#method_setPrefix)

##### Возвращает: [#возвращает-3]

\`\`\`
string
\`\`\`

Префикс, используемый для построения SQL-запросов.

***

<span id="method_load_data" />

### load\\_data [#load_data]

\`\`\`
public load_data(string  name, mixed  ..._vars) : array
\`\`\`

##### Краткое содержание [#краткое-содержание-4]

Метод загружает данные из базы данных с использованием механизма кеширования.

##### Описание [#описание-4]

Если данные уже закешированы, то они возвращаются из кеша, иначе выполняется запрос
к базе данных, формируется кеш и результат сохраняется на диск.

##### Смотри так-же: [#смотри-так-же-3]

* [\\DataManager::getDb()](./DataManager#method_getDb)
* [\\DataManager::nameArgs()](./DataManager#method_nameArgs)
* [\\DataManager::getComparer()](./DataManager#method_getComparer)
* [\\DataManager::getConfig()](./DataManager#method_getConfig)

##### Свойства: [#свойства-4]

| Название    | Тип    | По умолчанию |
| ----------- | ------ | ------------ |
| **$name**   | string |              |
| **$\\_vars** | mixed  |              |

##### Ошибки: [#ошибки-1]

| Тип            | Описание                                 |
| -------------- | ---------------------------------------- |
| \\JsonException | В случае JSON-ошибок при работе с кешем. |

##### Возвращает: [#возвращает-4]

\`\`\`
array
\`\`\`

Результат выборки из базы данных, либо из кеша.

***

<span id="method_setCacheFolder" />

### setCacheFolder [#setcachefolder]

\`\`\`
public setCacheFolder(string  cache_folder) : void
\`\`\`

##### Свойства: [#свойства-5]

| Название           | Тип    | По умолчанию |
| ------------------ | ------ | ------------ |
| **$cache\\_folder** | string |              |

##### Возвращает: [#возвращает-5]

\`\`\`
void
\`\`\`

***

<span id="method_setPrefix" />

### setPrefix [#setprefix]

\`\`\`
public setPrefix(string|null  name = null) : void
\`\`\`

##### Краткое содержание [#краткое-содержание-5]

Устанавливает префикс для использования в загрузке данных.

##### Описание [#описание-5]

Если переданное имя соответствует значениям "users" или "usergroup",
то префикс устанавливается в значение константы \`USERPREFIX\`.
В противном случае используется значение по умолчанию из константы \`PREFIX\`.

##### Свойства: [#свойства-6]

| Название  | Тип          | По умолчанию |
| --------- | ------------ | ------------ |
| **$name** | string\\|null | null         |

##### Возвращает: [#возвращает-6]

\`\`\`
void
\`\`\`

***

<span id="method_set_cache" />

### set\\_cache [#set_cache]

\`\`\`
private set_cache(string  type, string  name, mixed  data) : void
\`\`\`

##### Краткое содержание [#краткое-содержание-6]

Сохраняет данные в кеш.

##### Описание [#описание-6]

Метод записывает данные в кеш, используя указанный тип и имя.
Для сохранения данных вызывается метод \`CacheControl::setCache\`, который
обрабатывает директорию и имя файла, записывает данные в формате JSON
и устанавливает необходимые права доступа к файлу.

##### Смотри так-же: [#смотри-так-же-4]

* [\\CacheControl::setCache()](./CacheControl#method_setCache)

##### Свойства: [#свойства-7]

| Название  | Тип    | По умолчанию |
| --------- | ------ | ------------ |
| **$type** | string |              |
| **$name** | string |              |
| **$data** | mixed  |              |

##### Ошибки: [#ошибки-2]

| Тип            | Описание |
| -------------- | -------- |
| \\JsonException |          |

##### Возвращает: [#возвращает-7]

\`\`\`
void
\`\`\`
`,o={contents:[{heading:`краткое-содержание`,content:`Трейт для загрузки данных с использованием кеша или базы данных.`},{heading:`описание`,content:`Обеспечивает базовые операции с данными, такие как загрузка, сохранение или обновление
с интеграцией в систему кеширования и базу данных.
Использование:
Подключите этот трейт к классу для получения базовой функциональности
работы с данными.`},{heading:`свойства`,content:`private $cache\\_folder`},{heading:`свойства`,content:`private $prefix`},{heading:`методы`,content:`public clear\\_cache()`},{heading:`методы`,content:`public get\\_cache()`},{heading:`методы`,content:`public getCacheFolder()`},{heading:`методы`,content:`public getPrefix()`},{heading:`методы`,content:`public load\\_data()`},{heading:`методы`,content:`public setCacheFolder()`},{heading:`методы`,content:`public setPrefix()`},{heading:`методы`,content:`private set\\_cache()`},{heading:`подробности`,content:`Путь: engine/inc/maharder/\\_includes/traits/DataLoader.php`},{heading:`private-cache_folder--string`,content:`**Краткое содержание**`},{heading:`private-cache_folder--string`,content:`Папка кеша`},{heading:`private-cache_folder--string`,content:`**Тип:** Текст`},{heading:`private-prefix--string`,content:`**Тип:** Текст или null`},{heading:`краткое-содержание-1`,content:`Очищает кеш указанного типа.`},{heading:`описание-1`,content:`Метод позволяет очистить кеш для переданного типа или полностью, если тип "all".
Использует внутренний метод CacheControl::clearCache для выполнения операции очистки.`},{heading:`смотри-так-же`,content:`\\CacheControl::clearCache()`},{heading:`свойства-2`,content:`Название`},{heading:`свойства-2`,content:`Тип`},{heading:`свойства-2`,content:`По умолчанию`},{heading:`свойства-2`,content:`**$type**`},{heading:`свойства-2`,content:`string`},{heading:`свойства-2`,content:`'all'`},{heading:`краткое-содержание-2`,content:`Получает кешированные данные для заданного типа и имени.`},{heading:`описание-2`,content:"Метод использует статический метод `CacheControl::getCache()`, чтобы получить данные из файловой системы."},{heading:`смотри-так-же-1`,content:`\\DataManager::toTranslit()`},{heading:`смотри-так-же-1`,content:`\\DataManager::normalizePath()`},{heading:`смотри-так-же-1`,content:`\\CacheControl::getCache()`},{heading:`свойства-3`,content:`Название`},{heading:`свойства-3`,content:`Тип`},{heading:`свойства-3`,content:`По умолчанию`},{heading:`свойства-3`,content:`**$type**`},{heading:`свойства-3`,content:`string`},{heading:`свойства-3`,content:`**$name**`},{heading:`свойства-3`,content:`string`},{heading:`ошибки`,content:`Тип`},{heading:`ошибки`,content:`Описание`},{heading:`ошибки`,content:`\\JsonException`},{heading:`возвращает-1`,content:"Возвращает массив декодированных данных, если файл кеша успешно найден и данные корректны,\nили `false`, если произошла ошибка (например, файл не найден или данные некорректны)."},{heading:`краткое-содержание-3`,content:`Возвращает префикс для использования в SQL-запросах.`},{heading:`описание-3`,content:"Метод проверяет, установлен ли префикс. Если префикс не задан, он вызывает метод `setPrefix()`,\nчтобы установить его значение. Затем возвращает установившийся префикс."},{heading:`смотри-так-же-2`,content:`\\DataLoader::$prefix`},{heading:`смотри-так-же-2`,content:`\\DataLoader::setPrefix()`},{heading:`возвращает-3`,content:`Префикс, используемый для построения SQL-запросов.`},{heading:`краткое-содержание-4`,content:`Метод загружает данные из базы данных с использованием механизма кеширования.`},{heading:`описание-4`,content:`Если данные уже закешированы, то они возвращаются из кеша, иначе выполняется запрос
к базе данных, формируется кеш и результат сохраняется на диск.`},{heading:`смотри-так-же-3`,content:`\\DataManager::getDb()`},{heading:`смотри-так-же-3`,content:`\\DataManager::nameArgs()`},{heading:`смотри-так-же-3`,content:`\\DataManager::getComparer()`},{heading:`смотри-так-же-3`,content:`\\DataManager::getConfig()`},{heading:`свойства-4`,content:`Название`},{heading:`свойства-4`,content:`Тип`},{heading:`свойства-4`,content:`По умолчанию`},{heading:`свойства-4`,content:`**$name**`},{heading:`свойства-4`,content:`string`},{heading:`свойства-4`,content:`**$\\_vars**`},{heading:`свойства-4`,content:`mixed`},{heading:`ошибки-1`,content:`Тип`},{heading:`ошибки-1`,content:`Описание`},{heading:`ошибки-1`,content:`\\JsonException`},{heading:`ошибки-1`,content:`В случае JSON-ошибок при работе с кешем.`},{heading:`возвращает-4`,content:`Результат выборки из базы данных, либо из кеша.`},{heading:`свойства-5`,content:`Название`},{heading:`свойства-5`,content:`Тип`},{heading:`свойства-5`,content:`По умолчанию`},{heading:`свойства-5`,content:`**$cache\\_folder**`},{heading:`свойства-5`,content:`string`},{heading:`краткое-содержание-5`,content:`Устанавливает префикс для использования в загрузке данных.`},{heading:`описание-5`,content:'Если переданное имя соответствует значениям "users" или "usergroup",\nто префикс устанавливается в значение константы `USERPREFIX`.\nВ противном случае используется значение по умолчанию из константы `PREFIX`.'},{heading:`свойства-6`,content:`Название`},{heading:`свойства-6`,content:`Тип`},{heading:`свойства-6`,content:`По умолчанию`},{heading:`свойства-6`,content:`**$name**`},{heading:`свойства-6`,content:`string\\|null`},{heading:`свойства-6`,content:`null`},{heading:`краткое-содержание-6`,content:`Сохраняет данные в кеш.`},{heading:`описание-6`,content:`Метод записывает данные в кеш, используя указанный тип и имя.
Для сохранения данных вызывается метод \`CacheControl::setCache\`, который
обрабатывает директорию и имя файла, записывает данные в формате JSON
и устанавливает необходимые права доступа к файлу.`},{heading:`смотри-так-же-4`,content:`\\CacheControl::setCache()`},{heading:`свойства-7`,content:`Название`},{heading:`свойства-7`,content:`Тип`},{heading:`свойства-7`,content:`По умолчанию`},{heading:`свойства-7`,content:`**$type**`},{heading:`свойства-7`,content:`string`},{heading:`свойства-7`,content:`**$name**`},{heading:`свойства-7`,content:`string`},{heading:`свойства-7`,content:`**$data**`},{heading:`свойства-7`,content:`mixed`},{heading:`ошибки-2`,content:`Тип`},{heading:`ошибки-2`,content:`Описание`},{heading:`ошибки-2`,content:`\\JsonException`}],headings:[{id:`краткое-содержание`,content:`Краткое содержание:`},{id:`описание`,content:`Описание:`},{id:`свойства`,content:`Свойства`},{id:`методы`,content:`Методы`},{id:`подробности`,content:`Подробности`},{id:`свойства-1`,content:`Свойства`},{id:`private-cache_folder--string`,content:`private $cache_folder : string`},{id:`private-prefix--string`,content:`private $prefix : ?string`},{id:`методы-1`,content:`Методы`},{id:`clear_cache`,content:`clear_cache`},{id:`краткое-содержание-1`,content:`Краткое содержание`},{id:`описание-1`,content:`Описание`},{id:`смотри-так-же`,content:`Смотри так-же:`},{id:`свойства-2`,content:`Свойства:`},{id:`возвращает`,content:`Возвращает:`},{id:`get_cache`,content:`get_cache`},{id:`краткое-содержание-2`,content:`Краткое содержание`},{id:`описание-2`,content:`Описание`},{id:`смотри-так-же-1`,content:`Смотри так-же:`},{id:`свойства-3`,content:`Свойства:`},{id:`ошибки`,content:`Ошибки:`},{id:`возвращает-1`,content:`Возвращает:`},{id:`getcachefolder`,content:`getCacheFolder`},{id:`возвращает-2`,content:`Возвращает:`},{id:`getprefix`,content:`getPrefix`},{id:`краткое-содержание-3`,content:`Краткое содержание`},{id:`описание-3`,content:`Описание`},{id:`смотри-так-же-2`,content:`Смотри так-же:`},{id:`возвращает-3`,content:`Возвращает:`},{id:`load_data`,content:`load_data`},{id:`краткое-содержание-4`,content:`Краткое содержание`},{id:`описание-4`,content:`Описание`},{id:`смотри-так-же-3`,content:`Смотри так-же:`},{id:`свойства-4`,content:`Свойства:`},{id:`ошибки-1`,content:`Ошибки:`},{id:`возвращает-4`,content:`Возвращает:`},{id:`setcachefolder`,content:`setCacheFolder`},{id:`свойства-5`,content:`Свойства:`},{id:`возвращает-5`,content:`Возвращает:`},{id:`setprefix`,content:`setPrefix`},{id:`краткое-содержание-5`,content:`Краткое содержание`},{id:`описание-5`,content:`Описание`},{id:`свойства-6`,content:`Свойства:`},{id:`возвращает-6`,content:`Возвращает:`},{id:`set_cache`,content:`set_cache`},{id:`краткое-содержание-6`,content:`Краткое содержание`},{id:`описание-6`,content:`Описание`},{id:`смотри-так-же-4`,content:`Смотри так-же:`},{id:`свойства-7`,content:`Свойства:`},{id:`ошибки-2`,content:`Ошибки:`},{id:`возвращает-7`,content:`Возвращает:`}]},s=[{depth:2,url:`#краткое-содержание`,title:(0,n.jsx)(n.Fragment,{children:`Краткое содержание:`})},{depth:2,url:`#описание`,title:(0,n.jsx)(n.Fragment,{children:`Описание:`})},{depth:3,url:`#свойства`,title:(0,n.jsx)(n.Fragment,{children:`Свойства`})},{depth:3,url:`#методы`,title:(0,n.jsx)(n.Fragment,{children:`Методы`})},{depth:3,url:`#подробности`,title:(0,n.jsx)(n.Fragment,{children:`Подробности`})},{depth:2,url:`#свойства-1`,title:(0,n.jsx)(n.Fragment,{children:`Свойства`})},{depth:4,url:`#private-cache_folder--string`,title:(0,n.jsx)(n.Fragment,{children:`private $cache_folder : string`})},{depth:4,url:`#private-prefix--string`,title:(0,n.jsx)(n.Fragment,{children:`private $prefix : ?string`})},{depth:2,url:`#методы-1`,title:(0,n.jsx)(n.Fragment,{children:`Методы`})},{depth:3,url:`#clear_cache`,title:(0,n.jsx)(n.Fragment,{children:`clear_cache`})},{depth:5,url:`#краткое-содержание-1`,title:(0,n.jsx)(n.Fragment,{children:`Краткое содержание`})},{depth:5,url:`#описание-1`,title:(0,n.jsx)(n.Fragment,{children:`Описание`})},{depth:5,url:`#смотри-так-же`,title:(0,n.jsx)(n.Fragment,{children:`Смотри так-же:`})},{depth:5,url:`#свойства-2`,title:(0,n.jsx)(n.Fragment,{children:`Свойства:`})},{depth:5,url:`#возвращает`,title:(0,n.jsx)(n.Fragment,{children:`Возвращает:`})},{depth:3,url:`#get_cache`,title:(0,n.jsx)(n.Fragment,{children:`get_cache`})},{depth:5,url:`#краткое-содержание-2`,title:(0,n.jsx)(n.Fragment,{children:`Краткое содержание`})},{depth:5,url:`#описание-2`,title:(0,n.jsx)(n.Fragment,{children:`Описание`})},{depth:5,url:`#смотри-так-же-1`,title:(0,n.jsx)(n.Fragment,{children:`Смотри так-же:`})},{depth:5,url:`#свойства-3`,title:(0,n.jsx)(n.Fragment,{children:`Свойства:`})},{depth:5,url:`#ошибки`,title:(0,n.jsx)(n.Fragment,{children:`Ошибки:`})},{depth:5,url:`#возвращает-1`,title:(0,n.jsx)(n.Fragment,{children:`Возвращает:`})},{depth:3,url:`#getcachefolder`,title:(0,n.jsx)(n.Fragment,{children:`getCacheFolder`})},{depth:5,url:`#возвращает-2`,title:(0,n.jsx)(n.Fragment,{children:`Возвращает:`})},{depth:3,url:`#getprefix`,title:(0,n.jsx)(n.Fragment,{children:`getPrefix`})},{depth:5,url:`#краткое-содержание-3`,title:(0,n.jsx)(n.Fragment,{children:`Краткое содержание`})},{depth:5,url:`#описание-3`,title:(0,n.jsx)(n.Fragment,{children:`Описание`})},{depth:5,url:`#смотри-так-же-2`,title:(0,n.jsx)(n.Fragment,{children:`Смотри так-же:`})},{depth:5,url:`#возвращает-3`,title:(0,n.jsx)(n.Fragment,{children:`Возвращает:`})},{depth:3,url:`#load_data`,title:(0,n.jsx)(n.Fragment,{children:`load_data`})},{depth:5,url:`#краткое-содержание-4`,title:(0,n.jsx)(n.Fragment,{children:`Краткое содержание`})},{depth:5,url:`#описание-4`,title:(0,n.jsx)(n.Fragment,{children:`Описание`})},{depth:5,url:`#смотри-так-же-3`,title:(0,n.jsx)(n.Fragment,{children:`Смотри так-же:`})},{depth:5,url:`#свойства-4`,title:(0,n.jsx)(n.Fragment,{children:`Свойства:`})},{depth:5,url:`#ошибки-1`,title:(0,n.jsx)(n.Fragment,{children:`Ошибки:`})},{depth:5,url:`#возвращает-4`,title:(0,n.jsx)(n.Fragment,{children:`Возвращает:`})},{depth:3,url:`#setcachefolder`,title:(0,n.jsx)(n.Fragment,{children:`setCacheFolder`})},{depth:5,url:`#свойства-5`,title:(0,n.jsx)(n.Fragment,{children:`Свойства:`})},{depth:5,url:`#возвращает-5`,title:(0,n.jsx)(n.Fragment,{children:`Возвращает:`})},{depth:3,url:`#setprefix`,title:(0,n.jsx)(n.Fragment,{children:`setPrefix`})},{depth:5,url:`#краткое-содержание-5`,title:(0,n.jsx)(n.Fragment,{children:`Краткое содержание`})},{depth:5,url:`#описание-5`,title:(0,n.jsx)(n.Fragment,{children:`Описание`})},{depth:5,url:`#свойства-6`,title:(0,n.jsx)(n.Fragment,{children:`Свойства:`})},{depth:5,url:`#возвращает-6`,title:(0,n.jsx)(n.Fragment,{children:`Возвращает:`})},{depth:3,url:`#set_cache`,title:(0,n.jsx)(n.Fragment,{children:`set_cache`})},{depth:5,url:`#краткое-содержание-6`,title:(0,n.jsx)(n.Fragment,{children:`Краткое содержание`})},{depth:5,url:`#описание-6`,title:(0,n.jsx)(n.Fragment,{children:`Описание`})},{depth:5,url:`#смотри-так-же-4`,title:(0,n.jsx)(n.Fragment,{children:`Смотри так-же:`})},{depth:5,url:`#свойства-7`,title:(0,n.jsx)(n.Fragment,{children:`Свойства:`})},{depth:5,url:`#ошибки-2`,title:(0,n.jsx)(n.Fragment,{children:`Ошибки:`})},{depth:5,url:`#возвращает-7`,title:(0,n.jsx)(n.Fragment,{children:`Возвращает:`})}];function c(e){let t={a:`a`,code:`code`,h2:`h2`,h3:`h3`,h4:`h4`,h5:`h5`,hr:`hr`,li:`li`,p:`p`,pre:`pre`,span:`span`,strong:`strong`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,ul:`ul`,...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h2,{id:`краткое-содержание`,children:`Краткое содержание:`}),`
`,(0,n.jsx)(t.p,{children:`Трейт для загрузки данных с использованием кеша или базы данных.`}),`
`,(0,n.jsx)(t.h2,{id:`описание`,children:`Описание:`}),`
`,(0,n.jsx)(t.p,{children:`Обеспечивает базовые операции с данными, такие как загрузка, сохранение или обновление
с интеграцией в систему кеширования и базу данных.
Использование:
Подключите этот трейт к классу для получения базовой функциональности
работы с данными.`}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsx)(t.h3,{id:`свойства`,children:`Свойства`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[`private $`,(0,n.jsx)(t.a,{href:`#property_cache_folder`,children:`cache_folder`})]}),`
`,(0,n.jsxs)(t.li,{children:[`private $`,(0,n.jsx)(t.a,{href:`#property_prefix`,children:`prefix`})]}),`
`]}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsx)(t.h3,{id:`методы`,children:`Методы`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method_clear_cache`,children:`clear_cache()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method_get_cache`,children:`get_cache()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method_getCacheFolder`,children:`getCacheFolder()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method_getPrefix`,children:`getPrefix()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method_load_data`,children:`load_data()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method_setCacheFolder`,children:`setCacheFolder()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method_setPrefix`,children:`setPrefix()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`private `,(0,n.jsx)(t.a,{href:`#method_set_cache`,children:`set_cache()`})]}),`
`]}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsx)(t.h3,{id:`подробности`,children:`Подробности`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsx)(t.li,{children:`Путь: engine/inc/maharder/_includes/traits/DataLoader.php`}),`
`]}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsx)(t.h2,{id:`свойства-1`,children:`Свойства`}),`
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
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsx)(t.h2,{id:`методы-1`,children:`Методы`}),`
`,(0,n.jsx)(`span`,{id:`method_clear_cache`}),`
`,(0,n.jsx)(t.h3,{id:`clear_cache`,children:`clear_cache`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`public clear_cache(string  type = "all") : void`})})})})}),`
`,(0,n.jsx)(t.h5,{id:`краткое-содержание-1`,children:`Краткое содержание`}),`
`,(0,n.jsx)(t.p,{children:`Очищает кеш указанного типа.`}),`
`,(0,n.jsx)(t.h5,{id:`описание-1`,children:`Описание`}),`
`,(0,n.jsx)(t.p,{children:`Метод позволяет очистить кеш для переданного типа или полностью, если тип "all".
Использует внутренний метод CacheControl::clearCache для выполнения операции очистки.`}),`
`,(0,n.jsx)(t.h5,{id:`смотри-так-же`,children:`Смотри так-же:`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`./CacheControl#method_clearCache`,children:`\\CacheControl::clearCache()`})}),`
`]}),`
`,(0,n.jsx)(t.h5,{id:`свойства-2`,children:`Свойства:`}),`
`,(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`Название`}),(0,n.jsx)(t.th,{children:`Тип`}),(0,n.jsx)(t.th,{children:`По умолчанию`})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:`$type`})}),(0,n.jsx)(t.td,{children:`string`}),(0,n.jsx)(t.td,{children:`'all'`})]})})]}),`
`,(0,n.jsx)(t.h5,{id:`возвращает`,children:`Возвращает:`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`void`})})})})}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsx)(`span`,{id:`method_get_cache`}),`
`,(0,n.jsx)(t.h3,{id:`get_cache`,children:`get_cache`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`public get_cache(string  type, string  name) : array|false`})})})})}),`
`,(0,n.jsx)(t.h5,{id:`краткое-содержание-2`,children:`Краткое содержание`}),`
`,(0,n.jsx)(t.p,{children:`Получает кешированные данные для заданного типа и имени.`}),`
`,(0,n.jsx)(t.h5,{id:`описание-2`,children:`Описание`}),`
`,(0,n.jsxs)(t.p,{children:[`Метод использует статический метод `,(0,n.jsx)(t.code,{children:`CacheControl::getCache()`}),`, чтобы получить данные из файловой системы.`]}),`
`,(0,n.jsx)(t.h5,{id:`смотри-так-же-1`,children:`Смотри так-же:`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`./DataManager#method_toTranslit`,children:`\\DataManager::toTranslit()`})}),`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`./DataManager#method_normalizePath`,children:`\\DataManager::normalizePath()`})}),`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`./CacheControl#method_getCache`,children:`\\CacheControl::getCache()`})}),`
`]}),`
`,(0,n.jsx)(t.h5,{id:`свойства-3`,children:`Свойства:`}),`
`,(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`Название`}),(0,n.jsx)(t.th,{children:`Тип`}),(0,n.jsx)(t.th,{children:`По умолчанию`})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:`$type`})}),(0,n.jsx)(t.td,{children:`string`}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:`$name`})}),(0,n.jsx)(t.td,{children:`string`}),(0,n.jsx)(t.td,{})]})]})]}),`
`,(0,n.jsx)(t.h5,{id:`ошибки`,children:`Ошибки:`}),`
`,(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`Тип`}),(0,n.jsx)(t.th,{children:`Описание`})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`\\JsonException`}),(0,n.jsx)(t.td,{})]})})]}),`
`,(0,n.jsx)(t.h5,{id:`возвращает-1`,children:`Возвращает:`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`array|false`})})})})}),`
`,(0,n.jsxs)(t.p,{children:[`Возвращает массив декодированных данных, если файл кеша успешно найден и данные корректны,
или `,(0,n.jsx)(t.code,{children:`false`}),`, если произошла ошибка (например, файл не найден или данные некорректны).`]}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsx)(`span`,{id:`method_getCacheFolder`}),`
`,(0,n.jsx)(t.h3,{id:`getcachefolder`,children:`getCacheFolder`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`public getCacheFolder() : string`})})})})}),`
`,(0,n.jsx)(t.h5,{id:`возвращает-2`,children:`Возвращает:`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`string`})})})})}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsx)(`span`,{id:`method_getPrefix`}),`
`,(0,n.jsx)(t.h3,{id:`getprefix`,children:`getPrefix`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`public getPrefix() : string`})})})})}),`
`,(0,n.jsx)(t.h5,{id:`краткое-содержание-3`,children:`Краткое содержание`}),`
`,(0,n.jsx)(t.p,{children:`Возвращает префикс для использования в SQL-запросах.`}),`
`,(0,n.jsx)(t.h5,{id:`описание-3`,children:`Описание`}),`
`,(0,n.jsxs)(t.p,{children:[`Метод проверяет, установлен ли префикс. Если префикс не задан, он вызывает метод `,(0,n.jsx)(t.code,{children:`setPrefix()`}),`,
чтобы установить его значение. Затем возвращает установившийся префикс.`]}),`
`,(0,n.jsx)(t.h5,{id:`смотри-так-же-2`,children:`Смотри так-же:`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`./DataLoader#property_prefix`,children:`\\DataLoader::$prefix`})}),`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`./DataLoader#method_setPrefix`,children:`\\DataLoader::setPrefix()`})}),`
`]}),`
`,(0,n.jsx)(t.h5,{id:`возвращает-3`,children:`Возвращает:`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`string`})})})})}),`
`,(0,n.jsx)(t.p,{children:`Префикс, используемый для построения SQL-запросов.`}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsx)(`span`,{id:`method_load_data`}),`
`,(0,n.jsx)(t.h3,{id:`load_data`,children:`load_data`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`public load_data(string  name, mixed  ..._vars) : array`})})})})}),`
`,(0,n.jsx)(t.h5,{id:`краткое-содержание-4`,children:`Краткое содержание`}),`
`,(0,n.jsx)(t.p,{children:`Метод загружает данные из базы данных с использованием механизма кеширования.`}),`
`,(0,n.jsx)(t.h5,{id:`описание-4`,children:`Описание`}),`
`,(0,n.jsx)(t.p,{children:`Если данные уже закешированы, то они возвращаются из кеша, иначе выполняется запрос
к базе данных, формируется кеш и результат сохраняется на диск.`}),`
`,(0,n.jsx)(t.h5,{id:`смотри-так-же-3`,children:`Смотри так-же:`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`./DataManager#method_getDb`,children:`\\DataManager::getDb()`})}),`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`./DataManager#method_nameArgs`,children:`\\DataManager::nameArgs()`})}),`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`./DataManager#method_getComparer`,children:`\\DataManager::getComparer()`})}),`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`./DataManager#method_getConfig`,children:`\\DataManager::getConfig()`})}),`
`]}),`
`,(0,n.jsx)(t.h5,{id:`свойства-4`,children:`Свойства:`}),`
`,(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`Название`}),(0,n.jsx)(t.th,{children:`Тип`}),(0,n.jsx)(t.th,{children:`По умолчанию`})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:`$name`})}),(0,n.jsx)(t.td,{children:`string`}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:`$_vars`})}),(0,n.jsx)(t.td,{children:`mixed`}),(0,n.jsx)(t.td,{})]})]})]}),`
`,(0,n.jsx)(t.h5,{id:`ошибки-1`,children:`Ошибки:`}),`
`,(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`Тип`}),(0,n.jsx)(t.th,{children:`Описание`})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`\\JsonException`}),(0,n.jsx)(t.td,{children:`В случае JSON-ошибок при работе с кешем.`})]})})]}),`
`,(0,n.jsx)(t.h5,{id:`возвращает-4`,children:`Возвращает:`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`array`})})})})}),`
`,(0,n.jsx)(t.p,{children:`Результат выборки из базы данных, либо из кеша.`}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsx)(`span`,{id:`method_setCacheFolder`}),`
`,(0,n.jsx)(t.h3,{id:`setcachefolder`,children:`setCacheFolder`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`public setCacheFolder(string  cache_folder) : void`})})})})}),`
`,(0,n.jsx)(t.h5,{id:`свойства-5`,children:`Свойства:`}),`
`,(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`Название`}),(0,n.jsx)(t.th,{children:`Тип`}),(0,n.jsx)(t.th,{children:`По умолчанию`})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:`$cache_folder`})}),(0,n.jsx)(t.td,{children:`string`}),(0,n.jsx)(t.td,{})]})})]}),`
`,(0,n.jsx)(t.h5,{id:`возвращает-5`,children:`Возвращает:`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`void`})})})})}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsx)(`span`,{id:`method_setPrefix`}),`
`,(0,n.jsx)(t.h3,{id:`setprefix`,children:`setPrefix`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`public setPrefix(string|null  name = null) : void`})})})})}),`
`,(0,n.jsx)(t.h5,{id:`краткое-содержание-5`,children:`Краткое содержание`}),`
`,(0,n.jsx)(t.p,{children:`Устанавливает префикс для использования в загрузке данных.`}),`
`,(0,n.jsx)(t.h5,{id:`описание-5`,children:`Описание`}),`
`,(0,n.jsxs)(t.p,{children:[`Если переданное имя соответствует значениям "users" или "usergroup",
то префикс устанавливается в значение константы `,(0,n.jsx)(t.code,{children:`USERPREFIX`}),`.
В противном случае используется значение по умолчанию из константы `,(0,n.jsx)(t.code,{children:`PREFIX`}),`.`]}),`
`,(0,n.jsx)(t.h5,{id:`свойства-6`,children:`Свойства:`}),`
`,(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`Название`}),(0,n.jsx)(t.th,{children:`Тип`}),(0,n.jsx)(t.th,{children:`По умолчанию`})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:`$name`})}),(0,n.jsx)(t.td,{children:`string|null`}),(0,n.jsx)(t.td,{children:`null`})]})})]}),`
`,(0,n.jsx)(t.h5,{id:`возвращает-6`,children:`Возвращает:`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`void`})})})})}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsx)(`span`,{id:`method_set_cache`}),`
`,(0,n.jsx)(t.h3,{id:`set_cache`,children:`set_cache`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`private set_cache(string  type, string  name, mixed  data) : void`})})})})}),`
`,(0,n.jsx)(t.h5,{id:`краткое-содержание-6`,children:`Краткое содержание`}),`
`,(0,n.jsx)(t.p,{children:`Сохраняет данные в кеш.`}),`
`,(0,n.jsx)(t.h5,{id:`описание-6`,children:`Описание`}),`
`,(0,n.jsxs)(t.p,{children:[`Метод записывает данные в кеш, используя указанный тип и имя.
Для сохранения данных вызывается метод `,(0,n.jsx)(t.code,{children:`CacheControl::setCache`}),`, который
обрабатывает директорию и имя файла, записывает данные в формате JSON
и устанавливает необходимые права доступа к файлу.`]}),`
`,(0,n.jsx)(t.h5,{id:`смотри-так-же-4`,children:`Смотри так-же:`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`./CacheControl#method_setCache`,children:`\\CacheControl::setCache()`})}),`
`]}),`
`,(0,n.jsx)(t.h5,{id:`свойства-7`,children:`Свойства:`}),`
`,(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`Название`}),(0,n.jsx)(t.th,{children:`Тип`}),(0,n.jsx)(t.th,{children:`По умолчанию`})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:`$type`})}),(0,n.jsx)(t.td,{children:`string`}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:`$name`})}),(0,n.jsx)(t.td,{children:`string`}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:`$data`})}),(0,n.jsx)(t.td,{children:`mixed`}),(0,n.jsx)(t.td,{})]})]})]}),`
`,(0,n.jsx)(t.h5,{id:`ошибки-2`,children:`Ошибки:`}),`
`,(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`Тип`}),(0,n.jsx)(t.th,{children:`Описание`})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`\\JsonException`}),(0,n.jsx)(t.td,{})]})})]}),`
`,(0,n.jsx)(t.h5,{id:`возвращает-7`,children:`Возвращает:`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`void`})})})})})]})}function l(e={}){let{wrapper:t}=e.components||{};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}export{a as _markdown,l as default,r as frontmatter,i as lastModified,o as structuredData,s as toc};