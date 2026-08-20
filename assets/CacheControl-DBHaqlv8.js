import{r as e}from"./rolldown-runtime-QTnfLwEv.js";import{t}from"./jsx-runtime-By8HlURe.js";var n=e(t()),r={title:`Абстрактный класс: CacheControl`,description:`Документация по плагину абстрактный класс: cachecontrol для DLE.`},i=new Date(1787217967e3),a=`

## Краткое содержание: [#краткое-содержание]

Абстрактный класс для реализации управления кэшированием.

## Описание: [#описание]

Определяет контракт для классов, управляющих различными аспектами кэш-контроля,
такими как загрузка конфигурации, миграция или работа с файлами конфигурации.

Может быть дополнен реализацией в наследниках для поддержки специфичных стратегий кэширования.

***

### Свойства [#свойства]

* private $[path](#property_path)

***

### Методы [#методы]

* public [clearCache()](#method_clearCache)
* public [getCache()](#method_getCache)
* public [getPath()](#method_getPath)
* public [init()](#method_init)
* public [setCache()](#method_setCache)
* public [setPath()](#method_setPath)

***

### Подробности [#подробности]

* Путь: engine/inc/maharder/\\_includes/classes/CacheControl.php

***

## Свойства [#свойства-1]

<span id="property_path" />

#### private $path : ?string [#private-path--string]

***

**Краткое содержание**

Определяет путь до кеша.

***Описание***

Используется для хранения или извлечения пути, где будут сохраняться
данные кеша. Значение может быть \`null\`, если путь не был задан.

**Тип:** <abbr title="?string">Текст или null</abbr>

**Подробности:**

* Смотри так-же:
  * [Для получения текущего пути.](#method_getPath)
  * [Для задания пути.](#method_setPath)

##### Tags [#tags]

| Тэг     | Версия   | Описание |
| ------- | -------- | -------- |
| version | 170.2.10 |          |

***

## Методы [#методы-1]

<span id="method_clearCache" />

### clearCache [#clearcache]

\`\`\`
static public clearCache(string|array  type = "all") : void
\`\`\`

##### Краткое содержание [#краткое-содержание-1]

Очищает кеш для указанного типа или списка типов.

##### Описание [#описание-1]

Работает по следующему алгоритму:

* Если передан строковый тип и значение \`"all"\`, очищается вся директория кеша.
* Если передан массив типов, очистка выполняется рекурсивно для каждого типа.
* В случае конкретного типа, очищается соответствующий подкаталог.

##### Смотри так-же: [#смотри-так-же]

* [\\CacheControl::init()](#method_init)
* [\\DataManager::deleteDir()](./DataManager#method_deleteDir)
* [\\DataManager::toTranslit()](./DataManager#method_toTranslit)
* [\\CacheControl::getPath()](#method_getPath)

##### Свойства: [#свойства-2]

| Название  | Тип           | По умолчанию |
| --------- | ------------- | ------------ |
| **$type** | string\\|array | 'all'        |

##### Ошибки: [#ошибки]

| Тип            | Описание                                                                                                                                                  |
| -------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| \\JsonException | Исключение может быть выброшено, если возникают ошибки при работе с JSON-библиотекой (например, при вызовах методов, зависящих от внутренних реализаций). |

##### Возвращает: [#возвращает]

\`\`\`
void
\`\`\`

Функция ничего не возвращает.

***

<span id="method_getCache" />

### getCache [#getcache]

\`\`\`
static public getCache(string  type, string  name) : false|array|int
\`\`\`

##### Краткое содержание [#краткое-содержание-2]

Получает данные из кеша, преобразуя имена и типы в транслит и извлекая содержимое файла с последующим
декодированием данных из JSON.

##### Описание [#описание-2]

Инициализирует путь к кешу, если он не был установлен ранее.
Данные извлекаются из файла с учетом типа и имени, которые преобразуются в транслит.
Если файл отсутствует или недоступен, функция возвращает \`false\`.
Если данные присутствуют, они декодируются из формата JSON и в случае ошибки выбрасывается исключение
\`JsonException\`.

##### Смотри так-же: [#смотри-так-же-1]

* [\\DataManager::toTranslit()](./DataManager#method_toTranslit)
* [\\DataManager::normalizePath()](./DataManager#method_normalizePath)
* [\\LogGenerator::generateLog()](./LogGenerator#method_generateLog)

##### Свойства: [#свойства-3]

| Название  | Тип    | По умолчанию |
| --------- | ------ | ------------ |
| **$type** | string |              |
| **$name** | string |              |

##### Ошибки: [#ошибки-1]

| Тип                        | Описание                                      |
| -------------------------- | --------------------------------------------- |
| \\JsonException\\|\\Throwable | Если произошла ошибка при декодировании JSON. |

##### Возвращает: [#возвращает-1]

\`\`\`
false|array|int
\`\`\`

Возвращает массив данных, число или \`false\` в случае ошибки.

***

<span id="method_getPath" />

### getPath [#getpath]

\`\`\`
static public getPath() : string|null
\`\`\`

##### Краткое содержание [#краткое-содержание-3]

Возвращает текущий путь, если он установлен.

##### Возвращает: [#возвращает-2]

\`\`\`
string|null
\`\`\`

Возвращает путь как строку, либо null, если путь не установлен.

***

<span id="method_init" />

### init [#init]

\`\`\`
static public init(string|null  path = null) : void
\`\`\`

##### Краткое содержание [#краткое-содержание-4]

Инициализирует систему, устанавливая путь для кэша.

##### Описание [#описание-3]

Функция получает конфигурацию с помощью DataManager::getConfig(), определяет путь для хранения кэша
(приоритет отдается переданному аргументу \`$path\`, затем значению из конфигурации, в последнюю очередь
используется стандартный путь), нормализует его и устанавливает через self::setPath().

##### Смотри так-же: [#смотри-так-же-2]

* [\\DataManager::normalizePath()](./DataManager#method_normalizePath)
* [\\DataManager::getConfig()](./DataManager#method_getConfig)
* [\\CacheControl::setPath()](#method_setPath)

##### Свойства: [#свойства-4]

| Название  | Тип          | По умолчанию |
| --------- | ------------ | ------------ |
| **$path** | string\\|null | null         |

##### Ошибки: [#ошибки-2]

| Тип            | Описание                                                                              |
| -------------- | ------------------------------------------------------------------------------------- |
| \\JsonException | Если данные конфигурации, получаемые из JSON, не могут быть прочитаны или обработаны. |

##### Возвращает: [#возвращает-3]

\`\`\`
void
\`\`\`

***

<span id="method_setCache" />

### setCache [#setcache]

\`\`\`
static public setCache(string  type, string  name, mixed  data) : void
\`\`\`

##### Краткое содержание [#краткое-содержание-5]

Сохраняет данные в кэше путем создания файла с содержимым в JSON-формате.

##### Описание [#описание-4]

Функция выполняет следующие действия:

* Преобразует имя и тип кэша в транслитерацию для формирования имени файла и пути директории.
* Проверяет и создает директорию, если она отсутствует.
* Сериализует переданные данные в JSON и записывает их в файл.
* Логирует возможные ошибки сериализации и записи данных.

##### Смотри так-же: [#смотри-так-же-3]

* [\\DataManager::toTranslit()](./DataManager#method_toTranslit)
* [\\DataManager::normalizePath()](./DataManager#method_normalizePath)
* [\\DataManager::createDir()](./DataManager#method_createDir)
* [\\LogGenerator::generateLog()](./LogGenerator#method_generateLog)

##### Свойства: [#свойства-5]

| Название  | Тип    | По умолчанию |
| --------- | ------ | ------------ |
| **$type** | string |              |
| **$name** | string |              |
| **$data** | mixed  |              |

##### Ошибки: [#ошибки-3]

| Тип            | Описание                                              |
| -------------- | ----------------------------------------------------- |
| \\JsonException | Если возникает ошибка при сериализации данных в JSON. |
| \\Throwable     | Если возникает ошибка при записи данных в файл.       |

##### Возвращает: [#возвращает-4]

\`\`\`
void
\`\`\`

***

<span id="method_setPath" />

### setPath [#setpath]

\`\`\`
static public setPath(string  path) : void
\`\`\`

##### Краткое содержание [#краткое-содержание-6]

Устанавливает значение переменной пути.

##### Описание [#описание-5]

Метод задаёт значение для статической переменной \`$path\`,
которая может быть использована для хранения пути.

##### Смотри так-же: [#смотри-так-же-4]

* [\\CacheControl::$path](#property_path)

##### Свойства: [#свойства-6]

| Название  | Тип    | По умолчанию |
| --------- | ------ | ------------ |
| **$path** | string |              |

##### Возвращает: [#возвращает-5]

\`\`\`
void
\`\`\`
`,o={contents:[{heading:`краткое-содержание`,content:`Абстрактный класс для реализации управления кэшированием.`},{heading:`описание`,content:`Определяет контракт для классов, управляющих различными аспектами кэш-контроля,
такими как загрузка конфигурации, миграция или работа с файлами конфигурации.`},{heading:`описание`,content:`Может быть дополнен реализацией в наследниках для поддержки специфичных стратегий кэширования.`},{heading:`свойства`,content:`private $path`},{heading:`методы`,content:`public clearCache()`},{heading:`методы`,content:`public getCache()`},{heading:`методы`,content:`public getPath()`},{heading:`методы`,content:`public init()`},{heading:`методы`,content:`public setCache()`},{heading:`методы`,content:`public setPath()`},{heading:`подробности`,content:`Путь: engine/inc/maharder/\\_includes/classes/CacheControl.php`},{heading:`private-path--string`,content:`**Краткое содержание**`},{heading:`private-path--string`,content:`Определяет путь до кеша.`},{heading:`private-path--string`,content:`***Описание***`},{heading:`private-path--string`,content:"Используется для хранения или извлечения пути, где будут сохраняться\nданные кеша. Значение может быть `null`, если путь не был задан."},{heading:`private-path--string`,content:`**Тип:** Текст или null`},{heading:`private-path--string`,content:`**Подробности:**`},{heading:`private-path--string`,content:`Смотри так-же:`},{heading:`private-path--string`,content:`Для получения текущего пути.`},{heading:`private-path--string`,content:`Для задания пути.`},{heading:`tags`,content:`Тэг`},{heading:`tags`,content:`Версия`},{heading:`tags`,content:`Описание`},{heading:`tags`,content:`version`},{heading:`tags`,content:`170.2.10`},{heading:`краткое-содержание-1`,content:`Очищает кеш для указанного типа или списка типов.`},{heading:`описание-1`,content:`Работает по следующему алгоритму:`},{heading:`описание-1`,content:'Если передан строковый тип и значение `"all"`, очищается вся директория кеша.'},{heading:`описание-1`,content:`Если передан массив типов, очистка выполняется рекурсивно для каждого типа.`},{heading:`описание-1`,content:`В случае конкретного типа, очищается соответствующий подкаталог.`},{heading:`смотри-так-же`,content:`\\CacheControl::init()`},{heading:`смотри-так-же`,content:`\\DataManager::deleteDir()`},{heading:`смотри-так-же`,content:`\\DataManager::toTranslit()`},{heading:`смотри-так-же`,content:`\\CacheControl::getPath()`},{heading:`свойства-2`,content:`Название`},{heading:`свойства-2`,content:`Тип`},{heading:`свойства-2`,content:`По умолчанию`},{heading:`свойства-2`,content:`**$type**`},{heading:`свойства-2`,content:`string\\|array`},{heading:`свойства-2`,content:`'all'`},{heading:`ошибки`,content:`Тип`},{heading:`ошибки`,content:`Описание`},{heading:`ошибки`,content:`\\JsonException`},{heading:`ошибки`,content:`Исключение может быть выброшено, если возникают ошибки при работе с JSON-библиотекой (например, при вызовах методов, зависящих от внутренних реализаций).`},{heading:`возвращает`,content:`Функция ничего не возвращает.`},{heading:`краткое-содержание-2`,content:`Получает данные из кеша, преобразуя имена и типы в транслит и извлекая содержимое файла с последующим
декодированием данных из JSON.`},{heading:`описание-2`,content:`Инициализирует путь к кешу, если он не был установлен ранее.
Данные извлекаются из файла с учетом типа и имени, которые преобразуются в транслит.
Если файл отсутствует или недоступен, функция возвращает \`false\`.
Если данные присутствуют, они декодируются из формата JSON и в случае ошибки выбрасывается исключение
\`JsonException\`.`},{heading:`смотри-так-же-1`,content:`\\DataManager::toTranslit()`},{heading:`смотри-так-же-1`,content:`\\DataManager::normalizePath()`},{heading:`смотри-так-же-1`,content:`\\LogGenerator::generateLog()`},{heading:`свойства-3`,content:`Название`},{heading:`свойства-3`,content:`Тип`},{heading:`свойства-3`,content:`По умолчанию`},{heading:`свойства-3`,content:`**$type**`},{heading:`свойства-3`,content:`string`},{heading:`свойства-3`,content:`**$name**`},{heading:`свойства-3`,content:`string`},{heading:`ошибки-1`,content:`Тип`},{heading:`ошибки-1`,content:`Описание`},{heading:`ошибки-1`,content:`\\JsonException\\|\\Throwable`},{heading:`ошибки-1`,content:`Если произошла ошибка при декодировании JSON.`},{heading:`возвращает-1`,content:"Возвращает массив данных, число или `false` в случае ошибки."},{heading:`краткое-содержание-3`,content:`Возвращает текущий путь, если он установлен.`},{heading:`возвращает-2`,content:`Возвращает путь как строку, либо null, если путь не установлен.`},{heading:`краткое-содержание-4`,content:`Инициализирует систему, устанавливая путь для кэша.`},{heading:`описание-3`,content:`Функция получает конфигурацию с помощью DataManager::getConfig(), определяет путь для хранения кэша
(приоритет отдается переданному аргументу \`$path\`, затем значению из конфигурации, в последнюю очередь
используется стандартный путь), нормализует его и устанавливает через self::setPath().`},{heading:`смотри-так-же-2`,content:`\\DataManager::normalizePath()`},{heading:`смотри-так-же-2`,content:`\\DataManager::getConfig()`},{heading:`смотри-так-же-2`,content:`\\CacheControl::setPath()`},{heading:`свойства-4`,content:`Название`},{heading:`свойства-4`,content:`Тип`},{heading:`свойства-4`,content:`По умолчанию`},{heading:`свойства-4`,content:`**$path**`},{heading:`свойства-4`,content:`string\\|null`},{heading:`свойства-4`,content:`null`},{heading:`ошибки-2`,content:`Тип`},{heading:`ошибки-2`,content:`Описание`},{heading:`ошибки-2`,content:`\\JsonException`},{heading:`ошибки-2`,content:`Если данные конфигурации, получаемые из JSON, не могут быть прочитаны или обработаны.`},{heading:`краткое-содержание-5`,content:`Сохраняет данные в кэше путем создания файла с содержимым в JSON-формате.`},{heading:`описание-4`,content:`Функция выполняет следующие действия:`},{heading:`описание-4`,content:`Преобразует имя и тип кэша в транслитерацию для формирования имени файла и пути директории.`},{heading:`описание-4`,content:`Проверяет и создает директорию, если она отсутствует.`},{heading:`описание-4`,content:`Сериализует переданные данные в JSON и записывает их в файл.`},{heading:`описание-4`,content:`Логирует возможные ошибки сериализации и записи данных.`},{heading:`смотри-так-же-3`,content:`\\DataManager::toTranslit()`},{heading:`смотри-так-же-3`,content:`\\DataManager::normalizePath()`},{heading:`смотри-так-же-3`,content:`\\DataManager::createDir()`},{heading:`смотри-так-же-3`,content:`\\LogGenerator::generateLog()`},{heading:`свойства-5`,content:`Название`},{heading:`свойства-5`,content:`Тип`},{heading:`свойства-5`,content:`По умолчанию`},{heading:`свойства-5`,content:`**$type**`},{heading:`свойства-5`,content:`string`},{heading:`свойства-5`,content:`**$name**`},{heading:`свойства-5`,content:`string`},{heading:`свойства-5`,content:`**$data**`},{heading:`свойства-5`,content:`mixed`},{heading:`ошибки-3`,content:`Тип`},{heading:`ошибки-3`,content:`Описание`},{heading:`ошибки-3`,content:`\\JsonException`},{heading:`ошибки-3`,content:`Если возникает ошибка при сериализации данных в JSON.`},{heading:`ошибки-3`,content:`\\Throwable`},{heading:`ошибки-3`,content:`Если возникает ошибка при записи данных в файл.`},{heading:`краткое-содержание-6`,content:`Устанавливает значение переменной пути.`},{heading:`описание-5`,content:"Метод задаёт значение для статической переменной `$path`,\nкоторая может быть использована для хранения пути."},{heading:`смотри-так-же-4`,content:`\\CacheControl::$path`},{heading:`свойства-6`,content:`Название`},{heading:`свойства-6`,content:`Тип`},{heading:`свойства-6`,content:`По умолчанию`},{heading:`свойства-6`,content:`**$path**`},{heading:`свойства-6`,content:`string`}],headings:[{id:`краткое-содержание`,content:`Краткое содержание:`},{id:`описание`,content:`Описание:`},{id:`свойства`,content:`Свойства`},{id:`методы`,content:`Методы`},{id:`подробности`,content:`Подробности`},{id:`свойства-1`,content:`Свойства`},{id:`private-path--string`,content:`private $path : ?string`},{id:`tags`,content:`Tags`},{id:`методы-1`,content:`Методы`},{id:`clearcache`,content:`clearCache`},{id:`краткое-содержание-1`,content:`Краткое содержание`},{id:`описание-1`,content:`Описание`},{id:`смотри-так-же`,content:`Смотри так-же:`},{id:`свойства-2`,content:`Свойства:`},{id:`ошибки`,content:`Ошибки:`},{id:`возвращает`,content:`Возвращает:`},{id:`getcache`,content:`getCache`},{id:`краткое-содержание-2`,content:`Краткое содержание`},{id:`описание-2`,content:`Описание`},{id:`смотри-так-же-1`,content:`Смотри так-же:`},{id:`свойства-3`,content:`Свойства:`},{id:`ошибки-1`,content:`Ошибки:`},{id:`возвращает-1`,content:`Возвращает:`},{id:`getpath`,content:`getPath`},{id:`краткое-содержание-3`,content:`Краткое содержание`},{id:`возвращает-2`,content:`Возвращает:`},{id:`init`,content:`init`},{id:`краткое-содержание-4`,content:`Краткое содержание`},{id:`описание-3`,content:`Описание`},{id:`смотри-так-же-2`,content:`Смотри так-же:`},{id:`свойства-4`,content:`Свойства:`},{id:`ошибки-2`,content:`Ошибки:`},{id:`возвращает-3`,content:`Возвращает:`},{id:`setcache`,content:`setCache`},{id:`краткое-содержание-5`,content:`Краткое содержание`},{id:`описание-4`,content:`Описание`},{id:`смотри-так-же-3`,content:`Смотри так-же:`},{id:`свойства-5`,content:`Свойства:`},{id:`ошибки-3`,content:`Ошибки:`},{id:`возвращает-4`,content:`Возвращает:`},{id:`setpath`,content:`setPath`},{id:`краткое-содержание-6`,content:`Краткое содержание`},{id:`описание-5`,content:`Описание`},{id:`смотри-так-же-4`,content:`Смотри так-же:`},{id:`свойства-6`,content:`Свойства:`},{id:`возвращает-5`,content:`Возвращает:`}]},s=[{depth:2,url:`#краткое-содержание`,title:(0,n.jsx)(n.Fragment,{children:`Краткое содержание:`})},{depth:2,url:`#описание`,title:(0,n.jsx)(n.Fragment,{children:`Описание:`})},{depth:3,url:`#свойства`,title:(0,n.jsx)(n.Fragment,{children:`Свойства`})},{depth:3,url:`#методы`,title:(0,n.jsx)(n.Fragment,{children:`Методы`})},{depth:3,url:`#подробности`,title:(0,n.jsx)(n.Fragment,{children:`Подробности`})},{depth:2,url:`#свойства-1`,title:(0,n.jsx)(n.Fragment,{children:`Свойства`})},{depth:4,url:`#private-path--string`,title:(0,n.jsx)(n.Fragment,{children:`private $path : ?string`})},{depth:5,url:`#tags`,title:(0,n.jsx)(n.Fragment,{children:`Tags`})},{depth:2,url:`#методы-1`,title:(0,n.jsx)(n.Fragment,{children:`Методы`})},{depth:3,url:`#clearcache`,title:(0,n.jsx)(n.Fragment,{children:`clearCache`})},{depth:5,url:`#краткое-содержание-1`,title:(0,n.jsx)(n.Fragment,{children:`Краткое содержание`})},{depth:5,url:`#описание-1`,title:(0,n.jsx)(n.Fragment,{children:`Описание`})},{depth:5,url:`#смотри-так-же`,title:(0,n.jsx)(n.Fragment,{children:`Смотри так-же:`})},{depth:5,url:`#свойства-2`,title:(0,n.jsx)(n.Fragment,{children:`Свойства:`})},{depth:5,url:`#ошибки`,title:(0,n.jsx)(n.Fragment,{children:`Ошибки:`})},{depth:5,url:`#возвращает`,title:(0,n.jsx)(n.Fragment,{children:`Возвращает:`})},{depth:3,url:`#getcache`,title:(0,n.jsx)(n.Fragment,{children:`getCache`})},{depth:5,url:`#краткое-содержание-2`,title:(0,n.jsx)(n.Fragment,{children:`Краткое содержание`})},{depth:5,url:`#описание-2`,title:(0,n.jsx)(n.Fragment,{children:`Описание`})},{depth:5,url:`#смотри-так-же-1`,title:(0,n.jsx)(n.Fragment,{children:`Смотри так-же:`})},{depth:5,url:`#свойства-3`,title:(0,n.jsx)(n.Fragment,{children:`Свойства:`})},{depth:5,url:`#ошибки-1`,title:(0,n.jsx)(n.Fragment,{children:`Ошибки:`})},{depth:5,url:`#возвращает-1`,title:(0,n.jsx)(n.Fragment,{children:`Возвращает:`})},{depth:3,url:`#getpath`,title:(0,n.jsx)(n.Fragment,{children:`getPath`})},{depth:5,url:`#краткое-содержание-3`,title:(0,n.jsx)(n.Fragment,{children:`Краткое содержание`})},{depth:5,url:`#возвращает-2`,title:(0,n.jsx)(n.Fragment,{children:`Возвращает:`})},{depth:3,url:`#init`,title:(0,n.jsx)(n.Fragment,{children:`init`})},{depth:5,url:`#краткое-содержание-4`,title:(0,n.jsx)(n.Fragment,{children:`Краткое содержание`})},{depth:5,url:`#описание-3`,title:(0,n.jsx)(n.Fragment,{children:`Описание`})},{depth:5,url:`#смотри-так-же-2`,title:(0,n.jsx)(n.Fragment,{children:`Смотри так-же:`})},{depth:5,url:`#свойства-4`,title:(0,n.jsx)(n.Fragment,{children:`Свойства:`})},{depth:5,url:`#ошибки-2`,title:(0,n.jsx)(n.Fragment,{children:`Ошибки:`})},{depth:5,url:`#возвращает-3`,title:(0,n.jsx)(n.Fragment,{children:`Возвращает:`})},{depth:3,url:`#setcache`,title:(0,n.jsx)(n.Fragment,{children:`setCache`})},{depth:5,url:`#краткое-содержание-5`,title:(0,n.jsx)(n.Fragment,{children:`Краткое содержание`})},{depth:5,url:`#описание-4`,title:(0,n.jsx)(n.Fragment,{children:`Описание`})},{depth:5,url:`#смотри-так-же-3`,title:(0,n.jsx)(n.Fragment,{children:`Смотри так-же:`})},{depth:5,url:`#свойства-5`,title:(0,n.jsx)(n.Fragment,{children:`Свойства:`})},{depth:5,url:`#ошибки-3`,title:(0,n.jsx)(n.Fragment,{children:`Ошибки:`})},{depth:5,url:`#возвращает-4`,title:(0,n.jsx)(n.Fragment,{children:`Возвращает:`})},{depth:3,url:`#setpath`,title:(0,n.jsx)(n.Fragment,{children:`setPath`})},{depth:5,url:`#краткое-содержание-6`,title:(0,n.jsx)(n.Fragment,{children:`Краткое содержание`})},{depth:5,url:`#описание-5`,title:(0,n.jsx)(n.Fragment,{children:`Описание`})},{depth:5,url:`#смотри-так-же-4`,title:(0,n.jsx)(n.Fragment,{children:`Смотри так-же:`})},{depth:5,url:`#свойства-6`,title:(0,n.jsx)(n.Fragment,{children:`Свойства:`})},{depth:5,url:`#возвращает-5`,title:(0,n.jsx)(n.Fragment,{children:`Возвращает:`})}];function c(e){let t={a:`a`,code:`code`,em:`em`,h2:`h2`,h3:`h3`,h4:`h4`,h5:`h5`,hr:`hr`,li:`li`,p:`p`,pre:`pre`,span:`span`,strong:`strong`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,ul:`ul`,...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h2,{id:`краткое-содержание`,children:`Краткое содержание:`}),`
`,(0,n.jsx)(t.p,{children:`Абстрактный класс для реализации управления кэшированием.`}),`
`,(0,n.jsx)(t.h2,{id:`описание`,children:`Описание:`}),`
`,(0,n.jsx)(t.p,{children:`Определяет контракт для классов, управляющих различными аспектами кэш-контроля,
такими как загрузка конфигурации, миграция или работа с файлами конфигурации.`}),`
`,(0,n.jsx)(t.p,{children:`Может быть дополнен реализацией в наследниках для поддержки специфичных стратегий кэширования.`}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsx)(t.h3,{id:`свойства`,children:`Свойства`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[`private $`,(0,n.jsx)(t.a,{href:`#property_path`,children:`path`})]}),`
`]}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsx)(t.h3,{id:`методы`,children:`Методы`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method_clearCache`,children:`clearCache()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method_getCache`,children:`getCache()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method_getPath`,children:`getPath()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method_init`,children:`init()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method_setCache`,children:`setCache()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method_setPath`,children:`setPath()`})]}),`
`]}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsx)(t.h3,{id:`подробности`,children:`Подробности`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsx)(t.li,{children:`Путь: engine/inc/maharder/_includes/classes/CacheControl.php`}),`
`]}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsx)(t.h2,{id:`свойства-1`,children:`Свойства`}),`
`,(0,n.jsx)(`span`,{id:`property_path`}),`
`,(0,n.jsx)(t.h4,{id:`private-path--string`,children:`private $path : ?string`}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Краткое содержание`})}),`
`,(0,n.jsx)(t.p,{children:`Определяет путь до кеша.`}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.em,{children:(0,n.jsx)(t.strong,{children:`Описание`})})}),`
`,(0,n.jsxs)(t.p,{children:[`Используется для хранения или извлечения пути, где будут сохраняться
данные кеша. Значение может быть `,(0,n.jsx)(t.code,{children:`null`}),`, если путь не был задан.`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Тип:`}),` `,(0,n.jsx)(`abbr`,{title:`?string`,children:`Текст или null`})]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Подробности:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[`Смотри так-же:`,`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`#method_getPath`,children:`Для получения текущего пути.`})}),`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`#method_setPath`,children:`Для задания пути.`})}),`
`]}),`
`]}),`
`]}),`
`,(0,n.jsx)(t.h5,{id:`tags`,children:`Tags`}),`
`,(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`Тэг`}),(0,n.jsx)(t.th,{children:`Версия`}),(0,n.jsx)(t.th,{children:`Описание`})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`version`}),(0,n.jsx)(t.td,{children:`170.2.10`}),(0,n.jsx)(t.td,{})]})})]}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsx)(t.h2,{id:`методы-1`,children:`Методы`}),`
`,(0,n.jsx)(`span`,{id:`method_clearCache`}),`
`,(0,n.jsx)(t.h3,{id:`clearcache`,children:`clearCache`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`static public clearCache(string|array  type = "all") : void`})})})})}),`
`,(0,n.jsx)(t.h5,{id:`краткое-содержание-1`,children:`Краткое содержание`}),`
`,(0,n.jsx)(t.p,{children:`Очищает кеш для указанного типа или списка типов.`}),`
`,(0,n.jsx)(t.h5,{id:`описание-1`,children:`Описание`}),`
`,(0,n.jsx)(t.p,{children:`Работает по следующему алгоритму:`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[`Если передан строковый тип и значение `,(0,n.jsx)(t.code,{children:`"all"`}),`, очищается вся директория кеша.`]}),`
`,(0,n.jsx)(t.li,{children:`Если передан массив типов, очистка выполняется рекурсивно для каждого типа.`}),`
`,(0,n.jsx)(t.li,{children:`В случае конкретного типа, очищается соответствующий подкаталог.`}),`
`]}),`
`,(0,n.jsx)(t.h5,{id:`смотри-так-же`,children:`Смотри так-же:`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`#method_init`,children:`\\CacheControl::init()`})}),`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`./DataManager#method_deleteDir`,children:`\\DataManager::deleteDir()`})}),`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`./DataManager#method_toTranslit`,children:`\\DataManager::toTranslit()`})}),`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`#method_getPath`,children:`\\CacheControl::getPath()`})}),`
`]}),`
`,(0,n.jsx)(t.h5,{id:`свойства-2`,children:`Свойства:`}),`
`,(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`Название`}),(0,n.jsx)(t.th,{children:`Тип`}),(0,n.jsx)(t.th,{children:`По умолчанию`})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:`$type`})}),(0,n.jsx)(t.td,{children:`string|array`}),(0,n.jsx)(t.td,{children:`'all'`})]})})]}),`
`,(0,n.jsx)(t.h5,{id:`ошибки`,children:`Ошибки:`}),`
`,(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`Тип`}),(0,n.jsx)(t.th,{children:`Описание`})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`\\JsonException`}),(0,n.jsx)(t.td,{children:`Исключение может быть выброшено, если возникают ошибки при работе с JSON-библиотекой (например, при вызовах методов, зависящих от внутренних реализаций).`})]})})]}),`
`,(0,n.jsx)(t.h5,{id:`возвращает`,children:`Возвращает:`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`void`})})})})}),`
`,(0,n.jsx)(t.p,{children:`Функция ничего не возвращает.`}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsx)(`span`,{id:`method_getCache`}),`
`,(0,n.jsx)(t.h3,{id:`getcache`,children:`getCache`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`static public getCache(string  type, string  name) : false|array|int`})})})})}),`
`,(0,n.jsx)(t.h5,{id:`краткое-содержание-2`,children:`Краткое содержание`}),`
`,(0,n.jsx)(t.p,{children:`Получает данные из кеша, преобразуя имена и типы в транслит и извлекая содержимое файла с последующим
декодированием данных из JSON.`}),`
`,(0,n.jsx)(t.h5,{id:`описание-2`,children:`Описание`}),`
`,(0,n.jsxs)(t.p,{children:[`Инициализирует путь к кешу, если он не был установлен ранее.
Данные извлекаются из файла с учетом типа и имени, которые преобразуются в транслит.
Если файл отсутствует или недоступен, функция возвращает `,(0,n.jsx)(t.code,{children:`false`}),`.
Если данные присутствуют, они декодируются из формата JSON и в случае ошибки выбрасывается исключение
`,(0,n.jsx)(t.code,{children:`JsonException`}),`.`]}),`
`,(0,n.jsx)(t.h5,{id:`смотри-так-же-1`,children:`Смотри так-же:`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`./DataManager#method_toTranslit`,children:`\\DataManager::toTranslit()`})}),`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`./DataManager#method_normalizePath`,children:`\\DataManager::normalizePath()`})}),`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`./LogGenerator#method_generateLog`,children:`\\LogGenerator::generateLog()`})}),`
`]}),`
`,(0,n.jsx)(t.h5,{id:`свойства-3`,children:`Свойства:`}),`
`,(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`Название`}),(0,n.jsx)(t.th,{children:`Тип`}),(0,n.jsx)(t.th,{children:`По умолчанию`})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:`$type`})}),(0,n.jsx)(t.td,{children:`string`}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:`$name`})}),(0,n.jsx)(t.td,{children:`string`}),(0,n.jsx)(t.td,{})]})]})]}),`
`,(0,n.jsx)(t.h5,{id:`ошибки-1`,children:`Ошибки:`}),`
`,(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`Тип`}),(0,n.jsx)(t.th,{children:`Описание`})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`\\JsonException|\\Throwable`}),(0,n.jsx)(t.td,{children:`Если произошла ошибка при декодировании JSON.`})]})})]}),`
`,(0,n.jsx)(t.h5,{id:`возвращает-1`,children:`Возвращает:`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`false|array|int`})})})})}),`
`,(0,n.jsxs)(t.p,{children:[`Возвращает массив данных, число или `,(0,n.jsx)(t.code,{children:`false`}),` в случае ошибки.`]}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsx)(`span`,{id:`method_getPath`}),`
`,(0,n.jsx)(t.h3,{id:`getpath`,children:`getPath`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`static public getPath() : string|null`})})})})}),`
`,(0,n.jsx)(t.h5,{id:`краткое-содержание-3`,children:`Краткое содержание`}),`
`,(0,n.jsx)(t.p,{children:`Возвращает текущий путь, если он установлен.`}),`
`,(0,n.jsx)(t.h5,{id:`возвращает-2`,children:`Возвращает:`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`string|null`})})})})}),`
`,(0,n.jsx)(t.p,{children:`Возвращает путь как строку, либо null, если путь не установлен.`}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsx)(`span`,{id:`method_init`}),`
`,(0,n.jsx)(t.h3,{id:`init`,children:`init`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`static public init(string|null  path = null) : void`})})})})}),`
`,(0,n.jsx)(t.h5,{id:`краткое-содержание-4`,children:`Краткое содержание`}),`
`,(0,n.jsx)(t.p,{children:`Инициализирует систему, устанавливая путь для кэша.`}),`
`,(0,n.jsx)(t.h5,{id:`описание-3`,children:`Описание`}),`
`,(0,n.jsxs)(t.p,{children:[`Функция получает конфигурацию с помощью DataManager::getConfig(), определяет путь для хранения кэша
(приоритет отдается переданному аргументу `,(0,n.jsx)(t.code,{children:`$path`}),`, затем значению из конфигурации, в последнюю очередь
используется стандартный путь), нормализует его и устанавливает через self::setPath().`]}),`
`,(0,n.jsx)(t.h5,{id:`смотри-так-же-2`,children:`Смотри так-же:`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`./DataManager#method_normalizePath`,children:`\\DataManager::normalizePath()`})}),`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`./DataManager#method_getConfig`,children:`\\DataManager::getConfig()`})}),`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`#method_setPath`,children:`\\CacheControl::setPath()`})}),`
`]}),`
`,(0,n.jsx)(t.h5,{id:`свойства-4`,children:`Свойства:`}),`
`,(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`Название`}),(0,n.jsx)(t.th,{children:`Тип`}),(0,n.jsx)(t.th,{children:`По умолчанию`})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:`$path`})}),(0,n.jsx)(t.td,{children:`string|null`}),(0,n.jsx)(t.td,{children:`null`})]})})]}),`
`,(0,n.jsx)(t.h5,{id:`ошибки-2`,children:`Ошибки:`}),`
`,(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`Тип`}),(0,n.jsx)(t.th,{children:`Описание`})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`\\JsonException`}),(0,n.jsx)(t.td,{children:`Если данные конфигурации, получаемые из JSON, не могут быть прочитаны или обработаны.`})]})})]}),`
`,(0,n.jsx)(t.h5,{id:`возвращает-3`,children:`Возвращает:`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`void`})})})})}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsx)(`span`,{id:`method_setCache`}),`
`,(0,n.jsx)(t.h3,{id:`setcache`,children:`setCache`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`static public setCache(string  type, string  name, mixed  data) : void`})})})})}),`
`,(0,n.jsx)(t.h5,{id:`краткое-содержание-5`,children:`Краткое содержание`}),`
`,(0,n.jsx)(t.p,{children:`Сохраняет данные в кэше путем создания файла с содержимым в JSON-формате.`}),`
`,(0,n.jsx)(t.h5,{id:`описание-4`,children:`Описание`}),`
`,(0,n.jsx)(t.p,{children:`Функция выполняет следующие действия:`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsx)(t.li,{children:`Преобразует имя и тип кэша в транслитерацию для формирования имени файла и пути директории.`}),`
`,(0,n.jsx)(t.li,{children:`Проверяет и создает директорию, если она отсутствует.`}),`
`,(0,n.jsx)(t.li,{children:`Сериализует переданные данные в JSON и записывает их в файл.`}),`
`,(0,n.jsx)(t.li,{children:`Логирует возможные ошибки сериализации и записи данных.`}),`
`]}),`
`,(0,n.jsx)(t.h5,{id:`смотри-так-же-3`,children:`Смотри так-же:`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`./DataManager#method_toTranslit`,children:`\\DataManager::toTranslit()`})}),`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`./DataManager#method_normalizePath`,children:`\\DataManager::normalizePath()`})}),`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`./DataManager#method_createDir`,children:`\\DataManager::createDir()`})}),`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`./LogGenerator#method_generateLog`,children:`\\LogGenerator::generateLog()`})}),`
`]}),`
`,(0,n.jsx)(t.h5,{id:`свойства-5`,children:`Свойства:`}),`
`,(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`Название`}),(0,n.jsx)(t.th,{children:`Тип`}),(0,n.jsx)(t.th,{children:`По умолчанию`})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:`$type`})}),(0,n.jsx)(t.td,{children:`string`}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:`$name`})}),(0,n.jsx)(t.td,{children:`string`}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:`$data`})}),(0,n.jsx)(t.td,{children:`mixed`}),(0,n.jsx)(t.td,{})]})]})]}),`
`,(0,n.jsx)(t.h5,{id:`ошибки-3`,children:`Ошибки:`}),`
`,(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`Тип`}),(0,n.jsx)(t.th,{children:`Описание`})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`\\JsonException`}),(0,n.jsx)(t.td,{children:`Если возникает ошибка при сериализации данных в JSON.`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`\\Throwable`}),(0,n.jsx)(t.td,{children:`Если возникает ошибка при записи данных в файл.`})]})]})]}),`
`,(0,n.jsx)(t.h5,{id:`возвращает-4`,children:`Возвращает:`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`void`})})})})}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsx)(`span`,{id:`method_setPath`}),`
`,(0,n.jsx)(t.h3,{id:`setpath`,children:`setPath`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`static public setPath(string  path) : void`})})})})}),`
`,(0,n.jsx)(t.h5,{id:`краткое-содержание-6`,children:`Краткое содержание`}),`
`,(0,n.jsx)(t.p,{children:`Устанавливает значение переменной пути.`}),`
`,(0,n.jsx)(t.h5,{id:`описание-5`,children:`Описание`}),`
`,(0,n.jsxs)(t.p,{children:[`Метод задаёт значение для статической переменной `,(0,n.jsx)(t.code,{children:`$path`}),`,
которая может быть использована для хранения пути.`]}),`
`,(0,n.jsx)(t.h5,{id:`смотри-так-же-4`,children:`Смотри так-же:`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`#property_path`,children:`\\CacheControl::$path`})}),`
`]}),`
`,(0,n.jsx)(t.h5,{id:`свойства-6`,children:`Свойства:`}),`
`,(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`Название`}),(0,n.jsx)(t.th,{children:`Тип`}),(0,n.jsx)(t.th,{children:`По умолчанию`})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:`$path`})}),(0,n.jsx)(t.td,{children:`string`}),(0,n.jsx)(t.td,{})]})})]}),`
`,(0,n.jsx)(t.h5,{id:`возвращает-5`,children:`Возвращает:`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`void`})})})})})]})}function l(e={}){let{wrapper:t}=e.components||{};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}export{a as _markdown,l as default,r as frontmatter,i as lastModified,o as structuredData,s as toc};