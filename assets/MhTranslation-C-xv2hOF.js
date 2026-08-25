import{r as e}from"./rolldown-runtime-QTnfLwEv.js";import{t}from"./jsx-runtime-By8HlURe.js";var n=e(t()),r={title:`Абстрактный класс: MhTranslation`,description:`Документация по плагину абстрактный класс: mhtranslation для DLE.`},i=new Date(1787654208e3),a=`

## Краткое содержание: [#краткое-содержание]

Класс для оформления фраз переводов

***

### Свойства [#свойства]

* private $[cache\\_folder](#property_cache_folder)
* private $[locale](#property_locale)
* private $[localization\\_path](#property_localization_path)
* private $[prefix](#property_prefix)
* private $[translator](#property_translator)
* private $[use\\_translator](#property_use_translator)

***

### Методы [#методы]

* public [clear\\_cache()](#method_clear_cache)
* public [convertXliffToJs()](#method_convertXliffToJs)
* public [get\\_cache()](#method_get_cache)
* public [getCacheFolder()](#method_getCacheFolder)
* public [getFormattedLanguageList()](#method_getFormattedLanguageList)
* public [getLanguages()](#method_getLanguages)
* public [getLocale()](#method_getLocale)
* public [getLocaleData()](#method_getLocaleData)
* public [getLocalizationPath()](#method_getLocalizationPath)
* public [getPrefix()](#method_getPrefix)
* public [getTranslation()](#method_getTranslation)
* public [getTranslationPlural()](#method_getTranslationPlural)
* public [getTranslationPluralWithParameters()](#method_getTranslationPluralWithParameters)
* public [getTranslationWithParameters()](#method_getTranslationWithParameters)
* public [getTranslator()](#method_getTranslator)
* public [isUseTranslator()](#method_isUseTranslator)
* public [load\\_data()](#method_load_data)
* public [setCacheFolder()](#method_setCacheFolder)
* public [setLocale()](#method_setLocale)
* public [setLocalizationPath()](#method_setLocalizationPath)
* public [setPrefix()](#method_setPrefix)
* public [setTranslator()](#method_setTranslator)
* public [setUseTranslator()](#method_setUseTranslator)
* private [generateJsTranslationContent()](#method_generateJsTranslationContent)
* private [getTranslationArray()](#method_getTranslationArray)
* private [languageList()](#method_languageList)
* private [nonTranslator()](#method_nonTranslator)
* private [parseXliffFile()](#method_parseXliffFile)
* private [set\\_cache()](#method_set_cache)
* private [writeJsFile()](#method_writeJsFile)

***

### Подробности [#подробности]

* Путь: engine/inc/maharder/\\_includes/classes/MhTranslation.php
* Использованные трейты:
  * [\\DataLoader](./DataLoader)

***

## Свойства [#свойства-1]

<span id="property_cache_folder" />

#### private $cache\\_folder : string [#private-cache_folder--string]

***

**Краткое содержание**

Папка кеша

**Тип:** <abbr title="string">Текст</abbr>

<span id="property_locale" />

#### private $locale : ?string [#private-locale--string]

***

**Краткое содержание**

Название локали

**Тип:** <abbr title="?string">Текст или null</abbr>

**Подробности:**

##### Tags [#tags]

| Тэг     | Версия  | Описание |
| ------- | ------- | -------- |
| version | 173.3.0 |          |
| since   | 173.3.0 |          |

<span id="property_localization_path" />

#### private $localization\\_path : ?string [#private-localization_path--string]

***

**Краткое содержание**

Путь до фраз перевода

**Тип:** <abbr title="?string">Текст или null</abbr>

**Подробности:**

##### Tags [#tags-1]

| Тэг     | Версия  | Описание |
| ------- | ------- | -------- |
| version | 173.3.0 |          |
| since   | 173.3.0 |          |

<span id="property_prefix" />

#### private $prefix : ?string [#private-prefix--string]

***

**Тип:** <abbr title="?string">Текст или null</abbr>

**Подробности:**

<span id="property_translator" />

#### private $translator : ?\\Symfony\\Component\\Translation\\Translator [#private-translator--symfonycomponenttranslationtranslator]

***

**Краткое содержание**

Класс переводчика

\\*\\*Тип:
\\*\\* <a href="https://symfony.com/doc/current/translation.html" target="_blank"><abbr title="?\\Symfony\\Component\\Translation\\Translator">
Translator</abbr></a>

**Подробности:**

##### Tags [#tags-2]

| Тэг     | Версия  | Описание |
| ------- | ------- | -------- |
| version | 173.3.0 |          |
| since   | 173.3.0 |          |

<span id="property_use_translator" />

#### private $use\\_translator : bool [#private-use_translator--bool]

***

**Тип:** <abbr title="bool">Логические значения</abbr>

**Подробности:**

***

## Методы [#методы-1]

<span id="method_clear_cache" />

### clear\\_cache [#clear_cache]

\`\`\`
public clear_cache(string  type = "all") : void
\`\`\`

##### Краткое содержание [#краткое-содержание-1]

Очищает кеш указанного типа.

##### Описание [#описание]

Метод позволяет очистить кеш для переданного типа или полностью, если тип "all".
Использует внутренний метод CacheControl::clearCache для выполнения операции очистки.

##### Смотри так-же: [#смотри-так-же]

* [\\CacheControl::clearCache()](./CacheControl#method_clearCache)

##### Свойства: [#свойства-2]

| Название  | Тип    | По умолчанию |
| --------- | ------ | ------------ |
| **$type** | string | "all"        |

##### Возвращает: [#возвращает]

\`\`\`
void
\`\`\`

***

<span id="method_convertXliffToJs" />

### convertXliffToJs [#convertxlifftojs]

\`\`\`
static public convertXliffToJs() : void
\`\`\`

##### Краткое содержание [#краткое-содержание-2]

Преобразует XLIFF-файлы переводов в JavaScript-файлы для поддержки локализации на клиентской стороне.

##### Описание [#описание-1]

Метод перебирает доступные языки из функции \\{@see}, кэширует переводы,
преобразует их из XLIFF-файлов и генерирует JavaScript-файлы с переводами.
Если переводы не найдены или директория переводов отсутствует, генерируется лог ошибки.

##### Смотри так-же: [#смотри-так-же-1]

* [\\LogGenerator::generateLog()](./LogGenerator#method_generateLog)
* [\\MhTranslation::getLanguages()](#method_getLanguages)
* [\\CacheControl::getCache()](./CacheControl#method_getCache)
* [\\DataManager::normalizePath()](./DataManager#method_normalizePath)
* [\\DataManager::dirToArray()](./DataManager#method_dirToArray)

##### Ошибки: [#ошибки]

| Тип            | Описание   |   |
| -------------- | ---------- | - |
| \\JsonException | \\Throwable |   |

##### Возвращает: [#возвращает-1]

\`\`\`
void
\`\`\`

***

<span id="method_get_cache" />

### get\\_cache [#get_cache]

\`\`\`
public get_cache(string  type, string  name) : array|false
\`\`\`

##### Краткое содержание [#краткое-содержание-3]

Получает кешированные данные для заданного типа и имени.

##### Описание [#описание-2]

Метод использует статический метод \`CacheControl::getCache()\`, чтобы получить данные из файловой системы.

##### Смотри так-же: [#смотри-так-же-2]

* [\\DataManager::toTranslit()](./DataManager#method_toTranslit)
* [\\DataManager::normalizePath()](./DataManager#method_normalizePath)
* [\\CacheControl::getCache()](./CacheControl#method_getCache)

##### Свойства: [#свойства-3]

| Название  | Тип    | По умолчанию |
| --------- | ------ | ------------ |
| **$type** | string |              |
| **$name** | string |              |

##### Ошибки: [#ошибки-1]

| Тип            | Описание |
| -------------- | -------- |
| \\JsonException |          |

##### Возвращает: [#возвращает-2]

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

##### Возвращает: [#возвращает-3]

\`\`\`
string
\`\`\`

***

<span id="method_getFormattedLanguageList" />

### getFormattedLanguageList [#getformattedlanguagelist]

\`\`\`
static public getFormattedLanguageList(string|null  format = "{original} ({english})") : array
\`\`\`

##### Краткое содержание [#краткое-содержание-4]

Возвращает отформатированный список языков с заданным шаблоном формата.

##### Описание [#описание-3]

Поддерживаемые подстановочные шаблоны в строке формата:

* \`{original}\` - заменяется на переведённое название языка.
* \`{english}\` - заменяется на английское название языка.
* \`{iso2}\` - заменяется на двузначный код языка (например: \`ru\`).
* \`{tag}\` - заменяется на код языка (например: \`ru_RU\`).
  Если формат не указан, по умолчанию используется шаблон: "\\{original} (\\{english})".

##### Смотри так-же: [#смотри-так-же-3]

* [\\MhTranslation::getLanguages()](#method_getLanguages)

##### Свойства: [#свойства-4]

| Название    | Тип          | По умолчанию               |
| ----------- | ------------ | -------------------------- |
| **$format** | string\\|null | "\\{original} (\\{english})" |

##### Ошибки: [#ошибки-2]

| Тип            | Описание                                          |
| -------------- | ------------------------------------------------- |
| \\JsonException | Выбрасывается в случае ошибок при JSON-операциях. |
| \\Throwable     |                                                   |

##### Возвращает: [#возвращает-4]

\`\`\`
array
\`\`\`

Возвращает массив языков, где каждый элемент содержит:

* \`tag\` - код языка,
* \`name\` - сгенерированное название языка на основе переданного формата.

***

<span id="method_getLanguages" />

### getLanguages [#getlanguages]

\`\`\`
static public getLanguages() : array
\`\`\`

##### Краткое содержание [#краткое-содержание-5]

Получает список доступных языков.

##### Описание [#описание-4]

Метод проверяет наличие кэша для списка языков.
Если кэш отсутствует, формирует список языков на основе содержимого директории локализаций.
Полученные данные сохраняются в кэше для последующего использования.

##### Смотри так-же: [#смотри-так-же-4]

* [\\CacheControl::setCache()](./CacheControl#method_setCache)
* [\\CacheControl::getCache()](./CacheControl#method_getCache)

##### Ошибки: [#ошибки-3]

| Тип                        | Описание                                                         |
| -------------------------- | ---------------------------------------------------------------- |
| \\JsonException\\|\\Throwable | Возникает при ошибке декодирования JSON в момент работы с кэшем. |

##### Возвращает: [#возвращает-5]

\`\`\`
array
\`\`\`

Массив доступных языков, где ключ — идентификатор языка, а значение — данные языка.

***

<span id="method_getLocale" />

### getLocale [#getlocale]

\`\`\`
static public getLocale() : string
\`\`\`

##### Краткое содержание [#краткое-содержание-6]

Возвращает текущую локаль или значение по умолчанию ("ru\\_RU"), если локаль не определена.

##### Возвращает: [#возвращает-6]

\`\`\`
string
\`\`\`

Текущая локаль или значение по умолчанию ("ru\\_RU").

***

<span id="method_getLocaleData" />

### getLocaleData [#getlocaledata]

\`\`\`
static public getLocaleData(string  locale) : array
\`\`\`

##### Краткое содержание [#краткое-содержание-7]

Возвращает локализованные данные для указанного языка.

##### Смотри так-же: [#смотри-так-же-5]

* [\\MhTranslation::getLanguages()](#method_getLanguages)

##### Свойства: [#свойства-5]

| Название    | Тип    | По умолчанию |
| ----------- | ------ | ------------ |
| **$locale** | string |              |

##### Ошибки: [#ошибки-4]

| Тип            | Описание                                                        |
| -------------- | --------------------------------------------------------------- |
| \\JsonException | Если возникли ошибки при декодировании JSON-данных.             |
| \\Throwable     | Если возникают ошибки при работе с кешем или файловой системой. |

##### Возвращает: [#возвращает-7]

\`\`\`
array
\`\`\`

Массив данных локализации для указанного языка.

***

<span id="method_getLocalizationPath" />

### getLocalizationPath [#getlocalizationpath]

\`\`\`
static public getLocalizationPath() : string|null
\`\`\`

##### Краткое содержание [#краткое-содержание-8]

Получает путь к локализации приложения.

##### Описание [#описание-5]

Метод возвращает путь к директории с файлами локализации. Если путь ранее
не был установлен или пуст, он загружается из конфигурации \`mhadmin\` и
по умолчанию указывает на директорию \`/engine/inc/maharder/_locales\`.

##### Смотри так-же: [#смотри-так-же-6]

* [\\DataManager::getConfig()](./DataManager#method_getConfig)
* [\\MhTranslation::$localization\\_path](#property_localization_path)

##### Ошибки: [#ошибки-5]

| Тип            | Описание                                         |
| -------------- | ------------------------------------------------ |
| \\JsonException | Если возникает ошибка при загрузке конфигурации. |

##### Возвращает: [#возвращает-8]

\`\`\`
string|null
\`\`\`

Полный путь к локализации, или null, если ROOT\\_DIR не определён.

***

<span id="method_getPrefix" />

### getPrefix [#getprefix]

\`\`\`
public getPrefix() : string
\`\`\`

##### Краткое содержание [#краткое-содержание-9]

Возвращает префикс для использования в SQL-запросах.

##### Описание [#описание-6]

Метод проверяет, установлен ли префикс. Если префикс не задан, он вызывает метод \`setPrefix()\`,
чтобы установить его значение. Затем возвращает установившийся префикс.

##### Смотри так-же: [#смотри-так-же-7]

* [\\DataLoader::$prefix](./DataLoader#property_prefix)
* [\\DataLoader::setPrefix()](./DataLoader#method_setPrefix)

##### Возвращает: [#возвращает-9]

\`\`\`
string
\`\`\`

Префикс, используемый для построения SQL-запросов.

***

<span id="method_getTranslation" />

### getTranslation [#gettranslation]

\`\`\`
static public getTranslation(string  phrase) : string
\`\`\`

##### Краткое содержание [#краткое-содержание-10]

Возвращает переведённую фразу.

##### Описание [#описание-7]

Метод использует функцию \`getTranslationWithParameters\` для получения перевода
без указания дополнительных параметров.

##### Смотри так-же: [#смотри-так-же-8]

* [\\MhTranslation::getTranslationWithParameters](#method_getTranslationWithParameters)

##### Свойства: [#свойства-6]

| Название    | Тип    | По умолчанию |
| ----------- | ------ | ------------ |
| **$phrase** | string |              |

##### Ошибки: [#ошибки-6]

| Тип            | Описание                                                                                                   |
| -------------- | ---------------------------------------------------------------------------------------------------------- |
| \\JsonException | Исключение, выбрасываемое при ошибках обработки JSON (возможные ошибки в логе или настройках переводчика). |

##### Возвращает: [#возвращает-10]

\`\`\`
string
\`\`\`

Переведённая строка.

***

<span id="method_getTranslationPlural" />

### getTranslationPlural [#gettranslationplural]

\`\`\`
static public getTranslationPlural(string  phrase, int  count) : string
\`\`\`

##### Краткое содержание [#краткое-содержание-11]

Возвращает переведённую фразу с учётом параметров множественного числа/склонения.

##### Описание [#описание-8]

Делегирует обработку перевода методу \`getTranslationPluralWithParameters\`, передавая
пустой массив параметров в качестве третьего аргумента.

##### Смотри так-же: [#смотри-так-же-9]

* [\\getTranslationPluralWithParameters()](#method_getTranslationPluralWithParameters)

##### Свойства: [#свойства-7]

| Название    | Тип    | По умолчанию |
| ----------- | ------ | ------------ |
| **$phrase** | string |              |
| **$count**  | int    |              |

##### Ошибки: [#ошибки-7]

| Тип            | Описание                                                    |
| -------------- | ----------------------------------------------------------- |
| \\JsonException | Если в процессе выполнения произошла ошибка обработки JSON. |

##### Возвращает: [#возвращает-11]

\`\`\`
string
\`\`\`

Переведённая строка с учётом параметров множественного числа/склонения.

***

<span id="method_getTranslationPluralWithParameters" />

### getTranslationPluralWithParameters [#gettranslationpluralwithparameters]

\`\`\`
static public getTranslationPluralWithParameters(string  phrase, int  count, array  parameters) : string
\`\`\`

##### Краткое содержание [#краткое-содержание-12]

Возвращает переведённую фразу с параметрами множественного числа, учитывая склонения, с дополнительной
поддержкой параметров.

##### Смотри так-же: [#смотри-так-же-10]

* [\\MhTranslation::$translator](#property_translator)
* [\\MhTranslation::isUseTranslator()](#method_isUseTranslator)
* [\\MhTranslation::setTranslator()](#method_setTranslator)
* [\\MhTranslation::getTranslationWithParameters()](#method_getTranslationWithParameters)
* [\\MhTranslation::nonTranslator()](#method_nonTranslator)

##### Свойства: [#свойства-8]

| Название        | Тип    | По умолчанию |
| --------------- | ------ | ------------ |
| **$phrase**     | string |              |
| **$count**      | int    |              |
| **$parameters** | array  |              |

##### Ошибки: [#ошибки-8]

| Тип            | Описание                                         |
| -------------- | ------------------------------------------------ |
| \\JsonException | Если возникает ошибка при обработке JSON данных. |
| \\Throwable     |                                                  |

##### Возвращает: [#возвращает-12]

\`\`\`
string
\`\`\`

Переведённая фраза с учетом склонений и параметров.

***

<span id="method_getTranslationWithParameters" />

### getTranslationWithParameters [#gettranslationwithparameters]

\`\`\`
static public getTranslationWithParameters(string  phrase, array  parameters) : string
\`\`\`

##### Краткое содержание [#краткое-содержание-13]

Возвращает переведённую фразу с установленными параметрами.

##### Описание [#описание-9]

Перевод осуществляется с использованием зарегистрированного переводчика.
Если переводчик не установлен, он инициализируется вызовом метода \`setTranslator\`.
Если использование переводчика отключено, возвращается результат без перевода.

##### Смотри так-же: [#смотри-так-же-11]

* [\\MhTranslation::$translator](#property_translator)
* [\\MhTranslation::isUseTranslator](#method_isUseTranslator)
* [\\MhTranslation::nonTranslator](#method_nonTranslator)

##### Свойства: [#свойства-9]

| Название        | Тип    | По умолчанию |
| --------------- | ------ | ------------ |
| **$phrase**     | string |              |
| **$parameters** | array  |              |

##### Ошибки: [#ошибки-9]

| Тип            | Описание                                                 |
| -------------- | -------------------------------------------------------- |
| \\JsonException | В случае возникновения ошибки при работе с переводчиком. |

##### Возвращает: [#возвращает-13]

\`\`\`
string
\`\`\`

Переведённая фраза или исходная строка при отключённом переводчике.

***

<span id="method_getTranslator" />

### getTranslator [#gettranslator]

\`\`\`
static public getTranslator() : \\Translator|null
\`\`\`

##### Краткое содержание [#краткое-содержание-14]

Возвращает экземпляр переводчика, связанный с текущим модулем.

##### Описание [#описание-10]

Если модуль передан как параметр, то он устанавливается перед получением переводчика.
Если переводчик ещё не установлен, он будет автоматически инициализирован для текущего модуля.

##### Смотри так-же: [#смотри-так-же-12]

* [\\MhTranslation::$translator](#property_translator)
* [\\MhTranslation::setTranslator()](#method_setTranslator\\(\\))

##### Ошибки: [#ошибки-10]

| Тип            | Описание                                                      |
| -------------- | ------------------------------------------------------------- |
| \\Throwable     |                                                               |
| \\JsonException | Генерируется при ошибках работы с JSON во внутренних методах. |

##### Возвращает: [#возвращает-14]

\`\`\`
\\Translator|null
\`\`\`

Экземпляр переводчика или null, если переводчик не установлен.

***

<span id="method_isUseTranslator" />

### isUseTranslator [#isusetranslator]

\`\`\`
static public isUseTranslator() : bool
\`\`\`

##### Краткое содержание [#краткое-содержание-15]

Проверяет, используется ли переводчик.

##### Описание [#описание-11]

Метод проверяет, инициализирован ли статический переводчик
(\`self::$translator\`). Если переменная не равна null, значит переводчик
используется.

##### Возвращает: [#возвращает-15]

\`\`\`
bool
\`\`\`

Возвращает true, если переводчик задан; иначе false.

***

<span id="method_load_data" />

### load\\_data [#load_data]

\`\`\`
public load_data(string  name, mixed  ..._vars) : array
\`\`\`

##### Краткое содержание [#краткое-содержание-16]

Метод загружает данные из базы данных с использованием механизма кеширования.

##### Описание [#описание-12]

Если данные уже закешированы, то они возвращаются из кеша, иначе выполняется запрос
к базе данных, формируется кеш и результат сохраняется на диск.

##### Смотри так-же: [#смотри-так-же-13]

* [\\DataManager::getDb()](./DataManager#method_getDb)
* [\\DataManager::nameArgs()](./DataManager#method_nameArgs)
* [\\DataManager::getComparer()](./DataManager#method_getComparer)
* [\\DataManager::getConfig()](./DataManager#method_getConfig)

##### Свойства: [#свойства-10]

| Название    | Тип    | По умолчанию |
| ----------- | ------ | ------------ |
| **$name**   | string |              |
| **$\\_vars** | mixed  |              |

##### Ошибки: [#ошибки-11]

| Тип            | Описание                                 |
| -------------- | ---------------------------------------- |
| \\JsonException | В случае JSON-ошибок при работе с кешем. |

##### Возвращает: [#возвращает-16]

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

##### Свойства: [#свойства-11]

| Название           | Тип    | По умолчанию |
| ------------------ | ------ | ------------ |
| **$cache\\_folder** | string |              |

##### Возвращает: [#возвращает-17]

\`\`\`
void
\`\`\`

***

<span id="method_setLocale" />

### setLocale [#setlocale]

\`\`\`
static public setLocale(string  locale) : void
\`\`\`

##### Краткое содержание [#краткое-содержание-17]

Устанавливает локаль для приложения.

##### Свойства: [#свойства-12]

| Название    | Тип    | По умолчанию |
| ----------- | ------ | ------------ |
| **$locale** | string |              |

##### Возвращает: [#возвращает-18]

\`\`\`
void
\`\`\`

***

<span id="method_setLocalizationPath" />

### setLocalizationPath [#setlocalizationpath]

\`\`\`
static public setLocalizationPath(string  localization_path) : void
\`\`\`

##### Краткое содержание [#краткое-содержание-18]

Устанавливает путь до переводимых фраз

##### Свойства: [#свойства-13]

| Название                | Тип    | По умолчанию |
| ----------------------- | ------ | ------------ |
| **$localization\\_path** | string |              |

##### Возвращает: [#возвращает-19]

\`\`\`
void
\`\`\`

***

<span id="method_setPrefix" />

### setPrefix [#setprefix]

\`\`\`
public setPrefix(string|null  name = null) : void
\`\`\`

##### Краткое содержание [#краткое-содержание-19]

Устанавливает префикс для использования в загрузке данных.

##### Описание [#описание-13]

Если переданное имя соответствует значениям "users" или "usergroup",
то префикс устанавливается в значение константы \`USERPREFIX\`.
В противном случае используется значение по умолчанию из константы \`PREFIX\`.

##### Свойства: [#свойства-14]

| Название  | Тип          | По умолчанию |
| --------- | ------------ | ------------ |
| **$name** | string\\|null | null         |

##### Возвращает: [#возвращает-20]

\`\`\`
void
\`\`\`

***

<span id="method_setTranslator" />

### setTranslator [#settranslator]

\`\`\`
static public setTranslator() : void
\`\`\`

##### Краткое содержание [#краткое-содержание-20]

Устанавливает переводчик для модуля с заданными настройками.

##### Описание [#описание-14]

Использует параметры из конфигурации для настройки локализации,
загрузки переводов и их применения.

##### Смотри так-же: [#смотри-так-же-14]

* [\\DataManager::getConfig()](./DataManager#method_getConfig)

##### Ошибки: [#ошибки-12]

| Тип                        | Описание                                        |
| -------------------------- | ----------------------------------------------- |
| \\JsonException\\|\\Throwable | Если возникла ошибка при работе с JSON-файлами. |

##### Возвращает: [#возвращает-21]

\`\`\`
void
\`\`\`

***

<span id="method_setUseTranslator" />

### setUseTranslator [#setusetranslator]

\`\`\`
static public setUseTranslator(bool  use_translator) : void
\`\`\`

##### Краткое содержание [#краткое-содержание-21]

Устанавливает использование переводчика.

##### Свойства: [#свойства-15]

| Название             | Тип  | По умолчанию |
| -------------------- | ---- | ------------ |
| **$use\\_translator** | bool |              |

##### Возвращает: [#возвращает-22]

\`\`\`
void
\`\`\`

***

<span id="method_generateJsTranslationContent" />

### generateJsTranslationContent [#generatejstranslationcontent]

\`\`\`
static private generateJsTranslationContent(array  translations) : string
\`\`\`

##### Краткое содержание [#краткое-содержание-22]

Генерирует содержимое JavaScript-файла с переводами на основе переданного массива переводов.

##### Свойства: [#свойства-16]

| Название          | Тип   | По умолчанию |
| ----------------- | ----- | ------------ |
| **$translations** | array |              |

##### Возвращает: [#возвращает-23]

\`\`\`
string
\`\`\`

Содержимое для JavaScript, включающее объект переводов и экспорт по умолчанию.

***

<span id="method_getTranslationArray" />

### getTranslationArray [#gettranslationarray]

\`\`\`
static private getTranslationArray() : array
\`\`\`

##### Краткое содержание [#краткое-содержание-23]

Возвращает массив переводов из XLIFF файла в виде ассоциативного массива,
где ключами являются исходные строки, а значениями — переведённые строки.

##### Описание [#описание-15]

Если файл перевода отсутствует или возникает ошибка при его обработке,
возвращается пустой массив. Реализована поддержка кеширования для ускорения
получения данных при последующих вызовах.

##### Смотри так-же: [#смотри-так-же-15]

* [\\DataManager::normalizePath()](./DataManager#method_normalizePath)
* [\\LogGenerator::generateLog()](./LogGenerator#method_generateLog)
* [\\CacheControl::getCache()](./CacheControl#method_getCache)
* [\\CacheControl::setCache()](./CacheControl#method_setCache)

##### Ошибки: [#ошибки-13]

| Тип            | Описание                                                      |
| -------------- | ------------------------------------------------------------- |
| \\JsonException | Исключение при ошибке работы с JSON при кэшировании.          |
| \\Throwable     | Исключение при неизвестной ошибке в процессе обработки файла. |

##### Возвращает: [#возвращает-24]

\`\`\`
array
\`\`\`

Ассоциативный массив переводов.

***

<span id="method_languageList" />

### languageList [#languagelist]

\`\`\`
static private languageList(string  lang) : array
\`\`\`

##### Краткое содержание [#краткое-содержание-24]

Возвращает массив данных о языке на основе переданного кода языка.

##### Смотри так-же: [#смотри-так-же-16]

* [\\_\\_](../index#function___)

##### Свойства: [#свойства-17]

| Название  | Тип    | По умолчанию |
| --------- | ------ | ------------ |
| **$lang** | string |              |

##### Возвращает: [#возвращает-25]

\`\`\`
array
\`\`\`

Ассоциативный массив с данными о языке. Содержит следующие ключи:

* \`original\` (string): Название языка на его родном языке.
* \`english\` (string): Название языка на английском.
* \`iso2\` (string): Код ISO 639-1 языка.
* \`tag\` (string): Полный тег языка.

***

<span id="method_nonTranslator" />

### nonTranslator [#nontranslator]

\`\`\`
static private nonTranslator(string  phrase, array  params = []) : string
\`\`\`

##### Краткое содержание [#краткое-содержание-25]

Заменяет плейсхолдеры в строке на указанные значения.

##### Описание [#описание-16]

Метод принимает строку и массив пар "ключ-значение", где каждый ключ - это плейсхолдер,
который заменяется соответствующим значением в строке.

##### Свойства: [#свойства-18]

| Название    | Тип    | По умолчанию |
| ----------- | ------ | ------------ |
| **$phrase** | string |              |
| **$params** | array  | \\[]          |

##### Возвращает: [#возвращает-26]

\`\`\`
string
\`\`\`

Обработанная строка с произведёнными заменами.

***

<span id="method_parseXliffFile" />

### parseXliffFile [#parsexlifffile]

\`\`\`
static private parseXliffFile(string  filePath) : array
\`\`\`

##### Свойства: [#свойства-19]

| Название      | Тип    | По умолчанию |
| ------------- | ------ | ------------ |
| **$filePath** | string |              |

##### Возвращает: [#возвращает-27]

\`\`\`
array
\`\`\`

***

<span id="method_set_cache" />

### set\\_cache [#set_cache]

\`\`\`
private set_cache(string  type, string  name, mixed  data) : void
\`\`\`

##### Краткое содержание [#краткое-содержание-26]

Сохраняет данные в кеш.

##### Описание [#описание-17]

Метод записывает данные в кеш, используя указанный тип и имя.
Для сохранения данных вызывается метод \`CacheControl::setCache\`, который
обрабатывает директорию и имя файла, записывает данные в формате JSON
и устанавливает необходимые права доступа к файлу.

##### Смотри так-же: [#смотри-так-же-17]

* [\\CacheControl::setCache()](./CacheControl#method_setCache)

##### Свойства: [#свойства-20]

| Название  | Тип    | По умолчанию |
| --------- | ------ | ------------ |
| **$type** | string |              |
| **$name** | string |              |
| **$data** | mixed  |              |

##### Ошибки: [#ошибки-14]

| Тип            | Описание |
| -------------- | -------- |
| \\JsonException |          |

##### Возвращает: [#возвращает-28]

\`\`\`
void
\`\`\`

***

<span id="method_writeJsFile" />

### writeJsFile [#writejsfile]

\`\`\`
static private writeJsFile(string  path, string  content) : bool
\`\`\`

##### Краткое содержание [#краткое-содержание-27]

Записывает переданное содержимое в указанный файл JavaScript.

##### Описание [#описание-18]

В случае неуспешной записи генерирует критический лог с использованием метода LogGenerator::generateLog.

##### Смотри так-же: [#смотри-так-же-18]

* [\\LogGenerator::generateLog()](./LogGenerator#method_generateLog)

##### Свойства: [#свойства-21]

| Название     | Тип    | По умолчанию |
| ------------ | ------ | ------------ |
| **$path**    | string |              |
| **$content** | string |              |

##### Ошибки: [#ошибки-15]

| Тип        | Описание |
| ---------- | -------- |
| \\Throwable |          |

##### Возвращает: [#возвращает-29]

\`\`\`
bool
\`\`\`

Возвращает true, если запись прошла успешно, или false, если возникла ошибка.
`,o={contents:[{heading:`краткое-содержание`,content:`Класс для оформления фраз переводов`},{heading:`свойства`,content:`private $cache\\_folder`},{heading:`свойства`,content:`private $locale`},{heading:`свойства`,content:`private $localization\\_path`},{heading:`свойства`,content:`private $prefix`},{heading:`свойства`,content:`private $translator`},{heading:`свойства`,content:`private $use\\_translator`},{heading:`методы`,content:`public clear\\_cache()`},{heading:`методы`,content:`public convertXliffToJs()`},{heading:`методы`,content:`public get\\_cache()`},{heading:`методы`,content:`public getCacheFolder()`},{heading:`методы`,content:`public getFormattedLanguageList()`},{heading:`методы`,content:`public getLanguages()`},{heading:`методы`,content:`public getLocale()`},{heading:`методы`,content:`public getLocaleData()`},{heading:`методы`,content:`public getLocalizationPath()`},{heading:`методы`,content:`public getPrefix()`},{heading:`методы`,content:`public getTranslation()`},{heading:`методы`,content:`public getTranslationPlural()`},{heading:`методы`,content:`public getTranslationPluralWithParameters()`},{heading:`методы`,content:`public getTranslationWithParameters()`},{heading:`методы`,content:`public getTranslator()`},{heading:`методы`,content:`public isUseTranslator()`},{heading:`методы`,content:`public load\\_data()`},{heading:`методы`,content:`public setCacheFolder()`},{heading:`методы`,content:`public setLocale()`},{heading:`методы`,content:`public setLocalizationPath()`},{heading:`методы`,content:`public setPrefix()`},{heading:`методы`,content:`public setTranslator()`},{heading:`методы`,content:`public setUseTranslator()`},{heading:`методы`,content:`private generateJsTranslationContent()`},{heading:`методы`,content:`private getTranslationArray()`},{heading:`методы`,content:`private languageList()`},{heading:`методы`,content:`private nonTranslator()`},{heading:`методы`,content:`private parseXliffFile()`},{heading:`методы`,content:`private set\\_cache()`},{heading:`методы`,content:`private writeJsFile()`},{heading:`подробности`,content:`Путь: engine/inc/maharder/\\_includes/classes/MhTranslation.php`},{heading:`подробности`,content:`Использованные трейты:`},{heading:`подробности`,content:`\\DataLoader`},{heading:`private-cache_folder--string`,content:`**Краткое содержание**`},{heading:`private-cache_folder--string`,content:`Папка кеша`},{heading:`private-cache_folder--string`,content:`**Тип:** Текст`},{heading:`private-locale--string`,content:`**Краткое содержание**`},{heading:`private-locale--string`,content:`Название локали`},{heading:`private-locale--string`,content:`**Тип:** Текст или null`},{heading:`private-locale--string`,content:`**Подробности:**`},{heading:`tags`,content:`Тэг`},{heading:`tags`,content:`Версия`},{heading:`tags`,content:`Описание`},{heading:`tags`,content:`version`},{heading:`tags`,content:`173.3.0`},{heading:`tags`,content:`since`},{heading:`tags`,content:`173.3.0`},{heading:`private-localization_path--string`,content:`**Краткое содержание**`},{heading:`private-localization_path--string`,content:`Путь до фраз перевода`},{heading:`private-localization_path--string`,content:`**Тип:** Текст или null`},{heading:`private-localization_path--string`,content:`**Подробности:**`},{heading:`tags-1`,content:`Тэг`},{heading:`tags-1`,content:`Версия`},{heading:`tags-1`,content:`Описание`},{heading:`tags-1`,content:`version`},{heading:`tags-1`,content:`173.3.0`},{heading:`tags-1`,content:`since`},{heading:`tags-1`,content:`173.3.0`},{heading:`private-prefix--string`,content:`**Тип:** Текст или null`},{heading:`private-prefix--string`,content:`**Подробности:**`},{heading:`private-translator--symfonycomponenttranslationtranslator`,content:`**Краткое содержание**`},{heading:`private-translator--symfonycomponenttranslationtranslator`,content:`Класс переводчика`},{heading:`private-translator--symfonycomponenttranslationtranslator`,content:`\\*\\*Тип:
\\*\\*&#x20;
Translator`},{heading:`private-translator--symfonycomponenttranslationtranslator`,content:`**Подробности:**`},{heading:`tags-2`,content:`Тэг`},{heading:`tags-2`,content:`Версия`},{heading:`tags-2`,content:`Описание`},{heading:`tags-2`,content:`version`},{heading:`tags-2`,content:`173.3.0`},{heading:`tags-2`,content:`since`},{heading:`tags-2`,content:`173.3.0`},{heading:`private-use_translator--bool`,content:`**Тип:** Логические значения`},{heading:`private-use_translator--bool`,content:`**Подробности:**`},{heading:`краткое-содержание-1`,content:`Очищает кеш указанного типа.`},{heading:`описание`,content:`Метод позволяет очистить кеш для переданного типа или полностью, если тип "all".
Использует внутренний метод CacheControl::clearCache для выполнения операции очистки.`},{heading:`смотри-так-же`,content:`\\CacheControl::clearCache()`},{heading:`свойства-2`,content:`Название`},{heading:`свойства-2`,content:`Тип`},{heading:`свойства-2`,content:`По умолчанию`},{heading:`свойства-2`,content:`**$type**`},{heading:`свойства-2`,content:`string`},{heading:`свойства-2`,content:`"all"`},{heading:`краткое-содержание-2`,content:`Преобразует XLIFF-файлы переводов в JavaScript-файлы для поддержки локализации на клиентской стороне.`},{heading:`описание-1`,content:`Метод перебирает доступные языки из функции \\{@see}, кэширует переводы,
преобразует их из XLIFF-файлов и генерирует JavaScript-файлы с переводами.
Если переводы не найдены или директория переводов отсутствует, генерируется лог ошибки.`},{heading:`смотри-так-же-1`,content:`\\LogGenerator::generateLog()`},{heading:`смотри-так-же-1`,content:`\\MhTranslation::getLanguages()`},{heading:`смотри-так-же-1`,content:`\\CacheControl::getCache()`},{heading:`смотри-так-же-1`,content:`\\DataManager::normalizePath()`},{heading:`смотри-так-же-1`,content:`\\DataManager::dirToArray()`},{heading:`ошибки`,content:`Тип`},{heading:`ошибки`,content:`Описание`},{heading:`ошибки`,content:`\\JsonException`},{heading:`ошибки`,content:`\\Throwable`},{heading:`краткое-содержание-3`,content:`Получает кешированные данные для заданного типа и имени.`},{heading:`описание-2`,content:"Метод использует статический метод `CacheControl::getCache()`, чтобы получить данные из файловой системы."},{heading:`смотри-так-же-2`,content:`\\DataManager::toTranslit()`},{heading:`смотри-так-же-2`,content:`\\DataManager::normalizePath()`},{heading:`смотри-так-же-2`,content:`\\CacheControl::getCache()`},{heading:`свойства-3`,content:`Название`},{heading:`свойства-3`,content:`Тип`},{heading:`свойства-3`,content:`По умолчанию`},{heading:`свойства-3`,content:`**$type**`},{heading:`свойства-3`,content:`string`},{heading:`свойства-3`,content:`**$name**`},{heading:`свойства-3`,content:`string`},{heading:`ошибки-1`,content:`Тип`},{heading:`ошибки-1`,content:`Описание`},{heading:`ошибки-1`,content:`\\JsonException`},{heading:`возвращает-2`,content:"Возвращает массив декодированных данных, если файл кеша успешно найден и данные корректны,\nили `false`, если произошла ошибка (например, файл не найден или данные некорректны)."},{heading:`краткое-содержание-4`,content:`Возвращает отформатированный список языков с заданным шаблоном формата.`},{heading:`описание-3`,content:`Поддерживаемые подстановочные шаблоны в строке формата:`},{heading:`описание-3`,content:"`{original}` - заменяется на переведённое название языка."},{heading:`описание-3`,content:"`{english}` - заменяется на английское название языка."},{heading:`описание-3`,content:"`{iso2}` - заменяется на двузначный код языка (например: `ru`)."},{heading:`описание-3`,content:'`{tag}` - заменяется на код языка (например: `ru_RU`).\nЕсли формат не указан, по умолчанию используется шаблон: "\\{original} (\\{english})".'},{heading:`смотри-так-же-3`,content:`\\MhTranslation::getLanguages()`},{heading:`свойства-4`,content:`Название`},{heading:`свойства-4`,content:`Тип`},{heading:`свойства-4`,content:`По умолчанию`},{heading:`свойства-4`,content:`**$format**`},{heading:`свойства-4`,content:`string\\|null`},{heading:`свойства-4`,content:`"\\{original} (\\{english})"`},{heading:`ошибки-2`,content:`Тип`},{heading:`ошибки-2`,content:`Описание`},{heading:`ошибки-2`,content:`\\JsonException`},{heading:`ошибки-2`,content:`Выбрасывается в случае ошибок при JSON-операциях.`},{heading:`ошибки-2`,content:`\\Throwable`},{heading:`возвращает-4`,content:`Возвращает массив языков, где каждый элемент содержит:`},{heading:`возвращает-4`,content:"`tag` - код языка,"},{heading:`возвращает-4`,content:"`name` - сгенерированное название языка на основе переданного формата."},{heading:`краткое-содержание-5`,content:`Получает список доступных языков.`},{heading:`описание-4`,content:`Метод проверяет наличие кэша для списка языков.
Если кэш отсутствует, формирует список языков на основе содержимого директории локализаций.
Полученные данные сохраняются в кэше для последующего использования.`},{heading:`смотри-так-же-4`,content:`\\CacheControl::setCache()`},{heading:`смотри-так-же-4`,content:`\\CacheControl::getCache()`},{heading:`ошибки-3`,content:`Тип`},{heading:`ошибки-3`,content:`Описание`},{heading:`ошибки-3`,content:`\\JsonException\\|\\Throwable`},{heading:`ошибки-3`,content:`Возникает при ошибке декодирования JSON в момент работы с кэшем.`},{heading:`возвращает-5`,content:`Массив доступных языков, где ключ — идентификатор языка, а значение — данные языка.`},{heading:`краткое-содержание-6`,content:`Возвращает текущую локаль или значение по умолчанию ("ru\\_RU"), если локаль не определена.`},{heading:`возвращает-6`,content:`Текущая локаль или значение по умолчанию ("ru\\_RU").`},{heading:`краткое-содержание-7`,content:`Возвращает локализованные данные для указанного языка.`},{heading:`смотри-так-же-5`,content:`\\MhTranslation::getLanguages()`},{heading:`свойства-5`,content:`Название`},{heading:`свойства-5`,content:`Тип`},{heading:`свойства-5`,content:`По умолчанию`},{heading:`свойства-5`,content:`**$locale**`},{heading:`свойства-5`,content:`string`},{heading:`ошибки-4`,content:`Тип`},{heading:`ошибки-4`,content:`Описание`},{heading:`ошибки-4`,content:`\\JsonException`},{heading:`ошибки-4`,content:`Если возникли ошибки при декодировании JSON-данных.`},{heading:`ошибки-4`,content:`\\Throwable`},{heading:`ошибки-4`,content:`Если возникают ошибки при работе с кешем или файловой системой.`},{heading:`возвращает-7`,content:`Массив данных локализации для указанного языка.`},{heading:`краткое-содержание-8`,content:`Получает путь к локализации приложения.`},{heading:`описание-5`,content:"Метод возвращает путь к директории с файлами локализации. Если путь ранее\nне был установлен или пуст, он загружается из конфигурации `mhadmin` и\nпо умолчанию указывает на директорию `/engine/inc/maharder/_locales`."},{heading:`смотри-так-же-6`,content:`\\DataManager::getConfig()`},{heading:`смотри-так-же-6`,content:`\\MhTranslation::$localization\\_path`},{heading:`ошибки-5`,content:`Тип`},{heading:`ошибки-5`,content:`Описание`},{heading:`ошибки-5`,content:`\\JsonException`},{heading:`ошибки-5`,content:`Если возникает ошибка при загрузке конфигурации.`},{heading:`возвращает-8`,content:`Полный путь к локализации, или null, если ROOT\\_DIR не определён.`},{heading:`краткое-содержание-9`,content:`Возвращает префикс для использования в SQL-запросах.`},{heading:`описание-6`,content:"Метод проверяет, установлен ли префикс. Если префикс не задан, он вызывает метод `setPrefix()`,\nчтобы установить его значение. Затем возвращает установившийся префикс."},{heading:`смотри-так-же-7`,content:`\\DataLoader::$prefix`},{heading:`смотри-так-же-7`,content:`\\DataLoader::setPrefix()`},{heading:`возвращает-9`,content:`Префикс, используемый для построения SQL-запросов.`},{heading:`краткое-содержание-10`,content:`Возвращает переведённую фразу.`},{heading:`описание-7`,content:"Метод использует функцию `getTranslationWithParameters` для получения перевода\nбез указания дополнительных параметров."},{heading:`смотри-так-же-8`,content:`\\MhTranslation::getTranslationWithParameters`},{heading:`свойства-6`,content:`Название`},{heading:`свойства-6`,content:`Тип`},{heading:`свойства-6`,content:`По умолчанию`},{heading:`свойства-6`,content:`**$phrase**`},{heading:`свойства-6`,content:`string`},{heading:`ошибки-6`,content:`Тип`},{heading:`ошибки-6`,content:`Описание`},{heading:`ошибки-6`,content:`\\JsonException`},{heading:`ошибки-6`,content:`Исключение, выбрасываемое при ошибках обработки JSON (возможные ошибки в логе или настройках переводчика).`},{heading:`возвращает-10`,content:`Переведённая строка.`},{heading:`краткое-содержание-11`,content:`Возвращает переведённую фразу с учётом параметров множественного числа/склонения.`},{heading:`описание-8`,content:"Делегирует обработку перевода методу `getTranslationPluralWithParameters`, передавая\nпустой массив параметров в качестве третьего аргумента."},{heading:`смотри-так-же-9`,content:`\\getTranslationPluralWithParameters()`},{heading:`свойства-7`,content:`Название`},{heading:`свойства-7`,content:`Тип`},{heading:`свойства-7`,content:`По умолчанию`},{heading:`свойства-7`,content:`**$phrase**`},{heading:`свойства-7`,content:`string`},{heading:`свойства-7`,content:`**$count**`},{heading:`свойства-7`,content:`int`},{heading:`ошибки-7`,content:`Тип`},{heading:`ошибки-7`,content:`Описание`},{heading:`ошибки-7`,content:`\\JsonException`},{heading:`ошибки-7`,content:`Если в процессе выполнения произошла ошибка обработки JSON.`},{heading:`возвращает-11`,content:`Переведённая строка с учётом параметров множественного числа/склонения.`},{heading:`краткое-содержание-12`,content:`Возвращает переведённую фразу с параметрами множественного числа, учитывая склонения, с дополнительной
поддержкой параметров.`},{heading:`смотри-так-же-10`,content:`\\MhTranslation::$translator`},{heading:`смотри-так-же-10`,content:`\\MhTranslation::isUseTranslator()`},{heading:`смотри-так-же-10`,content:`\\MhTranslation::setTranslator()`},{heading:`смотри-так-же-10`,content:`\\MhTranslation::getTranslationWithParameters()`},{heading:`смотри-так-же-10`,content:`\\MhTranslation::nonTranslator()`},{heading:`свойства-8`,content:`Название`},{heading:`свойства-8`,content:`Тип`},{heading:`свойства-8`,content:`По умолчанию`},{heading:`свойства-8`,content:`**$phrase**`},{heading:`свойства-8`,content:`string`},{heading:`свойства-8`,content:`**$count**`},{heading:`свойства-8`,content:`int`},{heading:`свойства-8`,content:`**$parameters**`},{heading:`свойства-8`,content:`array`},{heading:`ошибки-8`,content:`Тип`},{heading:`ошибки-8`,content:`Описание`},{heading:`ошибки-8`,content:`\\JsonException`},{heading:`ошибки-8`,content:`Если возникает ошибка при обработке JSON данных.`},{heading:`ошибки-8`,content:`\\Throwable`},{heading:`возвращает-12`,content:`Переведённая фраза с учетом склонений и параметров.`},{heading:`краткое-содержание-13`,content:`Возвращает переведённую фразу с установленными параметрами.`},{heading:`описание-9`,content:`Перевод осуществляется с использованием зарегистрированного переводчика.
Если переводчик не установлен, он инициализируется вызовом метода \`setTranslator\`.
Если использование переводчика отключено, возвращается результат без перевода.`},{heading:`смотри-так-же-11`,content:`\\MhTranslation::$translator`},{heading:`смотри-так-же-11`,content:`\\MhTranslation::isUseTranslator`},{heading:`смотри-так-же-11`,content:`\\MhTranslation::nonTranslator`},{heading:`свойства-9`,content:`Название`},{heading:`свойства-9`,content:`Тип`},{heading:`свойства-9`,content:`По умолчанию`},{heading:`свойства-9`,content:`**$phrase**`},{heading:`свойства-9`,content:`string`},{heading:`свойства-9`,content:`**$parameters**`},{heading:`свойства-9`,content:`array`},{heading:`ошибки-9`,content:`Тип`},{heading:`ошибки-9`,content:`Описание`},{heading:`ошибки-9`,content:`\\JsonException`},{heading:`ошибки-9`,content:`В случае возникновения ошибки при работе с переводчиком.`},{heading:`возвращает-13`,content:`Переведённая фраза или исходная строка при отключённом переводчике.`},{heading:`краткое-содержание-14`,content:`Возвращает экземпляр переводчика, связанный с текущим модулем.`},{heading:`описание-10`,content:`Если модуль передан как параметр, то он устанавливается перед получением переводчика.
Если переводчик ещё не установлен, он будет автоматически инициализирован для текущего модуля.`},{heading:`смотри-так-же-12`,content:`\\MhTranslation::$translator`},{heading:`смотри-так-же-12`,content:`\\MhTranslation::setTranslator()`},{heading:`ошибки-10`,content:`Тип`},{heading:`ошибки-10`,content:`Описание`},{heading:`ошибки-10`,content:`\\Throwable`},{heading:`ошибки-10`,content:`\\JsonException`},{heading:`ошибки-10`,content:`Генерируется при ошибках работы с JSON во внутренних методах.`},{heading:`возвращает-14`,content:`Экземпляр переводчика или null, если переводчик не установлен.`},{heading:`краткое-содержание-15`,content:`Проверяет, используется ли переводчик.`},{heading:`описание-11`,content:`Метод проверяет, инициализирован ли статический переводчик
(\`self::$translator\`). Если переменная не равна null, значит переводчик
используется.`},{heading:`возвращает-15`,content:`Возвращает true, если переводчик задан; иначе false.`},{heading:`краткое-содержание-16`,content:`Метод загружает данные из базы данных с использованием механизма кеширования.`},{heading:`описание-12`,content:`Если данные уже закешированы, то они возвращаются из кеша, иначе выполняется запрос
к базе данных, формируется кеш и результат сохраняется на диск.`},{heading:`смотри-так-же-13`,content:`\\DataManager::getDb()`},{heading:`смотри-так-же-13`,content:`\\DataManager::nameArgs()`},{heading:`смотри-так-же-13`,content:`\\DataManager::getComparer()`},{heading:`смотри-так-же-13`,content:`\\DataManager::getConfig()`},{heading:`свойства-10`,content:`Название`},{heading:`свойства-10`,content:`Тип`},{heading:`свойства-10`,content:`По умолчанию`},{heading:`свойства-10`,content:`**$name**`},{heading:`свойства-10`,content:`string`},{heading:`свойства-10`,content:`**$\\_vars**`},{heading:`свойства-10`,content:`mixed`},{heading:`ошибки-11`,content:`Тип`},{heading:`ошибки-11`,content:`Описание`},{heading:`ошибки-11`,content:`\\JsonException`},{heading:`ошибки-11`,content:`В случае JSON-ошибок при работе с кешем.`},{heading:`возвращает-16`,content:`Результат выборки из базы данных, либо из кеша.`},{heading:`свойства-11`,content:`Название`},{heading:`свойства-11`,content:`Тип`},{heading:`свойства-11`,content:`По умолчанию`},{heading:`свойства-11`,content:`**$cache\\_folder**`},{heading:`свойства-11`,content:`string`},{heading:`краткое-содержание-17`,content:`Устанавливает локаль для приложения.`},{heading:`свойства-12`,content:`Название`},{heading:`свойства-12`,content:`Тип`},{heading:`свойства-12`,content:`По умолчанию`},{heading:`свойства-12`,content:`**$locale**`},{heading:`свойства-12`,content:`string`},{heading:`краткое-содержание-18`,content:`Устанавливает путь до переводимых фраз`},{heading:`свойства-13`,content:`Название`},{heading:`свойства-13`,content:`Тип`},{heading:`свойства-13`,content:`По умолчанию`},{heading:`свойства-13`,content:`**$localization\\_path**`},{heading:`свойства-13`,content:`string`},{heading:`краткое-содержание-19`,content:`Устанавливает префикс для использования в загрузке данных.`},{heading:`описание-13`,content:'Если переданное имя соответствует значениям "users" или "usergroup",\nто префикс устанавливается в значение константы `USERPREFIX`.\nВ противном случае используется значение по умолчанию из константы `PREFIX`.'},{heading:`свойства-14`,content:`Название`},{heading:`свойства-14`,content:`Тип`},{heading:`свойства-14`,content:`По умолчанию`},{heading:`свойства-14`,content:`**$name**`},{heading:`свойства-14`,content:`string\\|null`},{heading:`свойства-14`,content:`null`},{heading:`краткое-содержание-20`,content:`Устанавливает переводчик для модуля с заданными настройками.`},{heading:`описание-14`,content:`Использует параметры из конфигурации для настройки локализации,
загрузки переводов и их применения.`},{heading:`смотри-так-же-14`,content:`\\DataManager::getConfig()`},{heading:`ошибки-12`,content:`Тип`},{heading:`ошибки-12`,content:`Описание`},{heading:`ошибки-12`,content:`\\JsonException\\|\\Throwable`},{heading:`ошибки-12`,content:`Если возникла ошибка при работе с JSON-файлами.`},{heading:`краткое-содержание-21`,content:`Устанавливает использование переводчика.`},{heading:`свойства-15`,content:`Название`},{heading:`свойства-15`,content:`Тип`},{heading:`свойства-15`,content:`По умолчанию`},{heading:`свойства-15`,content:`**$use\\_translator**`},{heading:`свойства-15`,content:`bool`},{heading:`краткое-содержание-22`,content:`Генерирует содержимое JavaScript-файла с переводами на основе переданного массива переводов.`},{heading:`свойства-16`,content:`Название`},{heading:`свойства-16`,content:`Тип`},{heading:`свойства-16`,content:`По умолчанию`},{heading:`свойства-16`,content:`**$translations**`},{heading:`свойства-16`,content:`array`},{heading:`возвращает-23`,content:`Содержимое для JavaScript, включающее объект переводов и экспорт по умолчанию.`},{heading:`краткое-содержание-23`,content:`Возвращает массив переводов из XLIFF файла в виде ассоциативного массива,
где ключами являются исходные строки, а значениями — переведённые строки.`},{heading:`описание-15`,content:`Если файл перевода отсутствует или возникает ошибка при его обработке,
возвращается пустой массив. Реализована поддержка кеширования для ускорения
получения данных при последующих вызовах.`},{heading:`смотри-так-же-15`,content:`\\DataManager::normalizePath()`},{heading:`смотри-так-же-15`,content:`\\LogGenerator::generateLog()`},{heading:`смотри-так-же-15`,content:`\\CacheControl::getCache()`},{heading:`смотри-так-же-15`,content:`\\CacheControl::setCache()`},{heading:`ошибки-13`,content:`Тип`},{heading:`ошибки-13`,content:`Описание`},{heading:`ошибки-13`,content:`\\JsonException`},{heading:`ошибки-13`,content:`Исключение при ошибке работы с JSON при кэшировании.`},{heading:`ошибки-13`,content:`\\Throwable`},{heading:`ошибки-13`,content:`Исключение при неизвестной ошибке в процессе обработки файла.`},{heading:`возвращает-24`,content:`Ассоциативный массив переводов.`},{heading:`краткое-содержание-24`,content:`Возвращает массив данных о языке на основе переданного кода языка.`},{heading:`смотри-так-же-16`,content:`\\_\\_`},{heading:`свойства-17`,content:`Название`},{heading:`свойства-17`,content:`Тип`},{heading:`свойства-17`,content:`По умолчанию`},{heading:`свойства-17`,content:`**$lang**`},{heading:`свойства-17`,content:`string`},{heading:`возвращает-25`,content:`Ассоциативный массив с данными о языке. Содержит следующие ключи:`},{heading:`возвращает-25`,content:"`original` (string): Название языка на его родном языке."},{heading:`возвращает-25`,content:"`english` (string): Название языка на английском."},{heading:`возвращает-25`,content:"`iso2` (string): Код ISO 639-1 языка."},{heading:`возвращает-25`,content:"`tag` (string): Полный тег языка."},{heading:`краткое-содержание-25`,content:`Заменяет плейсхолдеры в строке на указанные значения.`},{heading:`описание-16`,content:`Метод принимает строку и массив пар "ключ-значение", где каждый ключ - это плейсхолдер,
который заменяется соответствующим значением в строке.`},{heading:`свойства-18`,content:`Название`},{heading:`свойства-18`,content:`Тип`},{heading:`свойства-18`,content:`По умолчанию`},{heading:`свойства-18`,content:`**$phrase**`},{heading:`свойства-18`,content:`string`},{heading:`свойства-18`,content:`**$params**`},{heading:`свойства-18`,content:`array`},{heading:`свойства-18`,content:`\\[]`},{heading:`возвращает-26`,content:`Обработанная строка с произведёнными заменами.`},{heading:`свойства-19`,content:`Название`},{heading:`свойства-19`,content:`Тип`},{heading:`свойства-19`,content:`По умолчанию`},{heading:`свойства-19`,content:`**$filePath**`},{heading:`свойства-19`,content:`string`},{heading:`краткое-содержание-26`,content:`Сохраняет данные в кеш.`},{heading:`описание-17`,content:`Метод записывает данные в кеш, используя указанный тип и имя.
Для сохранения данных вызывается метод \`CacheControl::setCache\`, который
обрабатывает директорию и имя файла, записывает данные в формате JSON
и устанавливает необходимые права доступа к файлу.`},{heading:`смотри-так-же-17`,content:`\\CacheControl::setCache()`},{heading:`свойства-20`,content:`Название`},{heading:`свойства-20`,content:`Тип`},{heading:`свойства-20`,content:`По умолчанию`},{heading:`свойства-20`,content:`**$type**`},{heading:`свойства-20`,content:`string`},{heading:`свойства-20`,content:`**$name**`},{heading:`свойства-20`,content:`string`},{heading:`свойства-20`,content:`**$data**`},{heading:`свойства-20`,content:`mixed`},{heading:`ошибки-14`,content:`Тип`},{heading:`ошибки-14`,content:`Описание`},{heading:`ошибки-14`,content:`\\JsonException`},{heading:`краткое-содержание-27`,content:`Записывает переданное содержимое в указанный файл JavaScript.`},{heading:`описание-18`,content:`В случае неуспешной записи генерирует критический лог с использованием метода LogGenerator::generateLog.`},{heading:`смотри-так-же-18`,content:`\\LogGenerator::generateLog()`},{heading:`свойства-21`,content:`Название`},{heading:`свойства-21`,content:`Тип`},{heading:`свойства-21`,content:`По умолчанию`},{heading:`свойства-21`,content:`**$path**`},{heading:`свойства-21`,content:`string`},{heading:`свойства-21`,content:`**$content**`},{heading:`свойства-21`,content:`string`},{heading:`ошибки-15`,content:`Тип`},{heading:`ошибки-15`,content:`Описание`},{heading:`ошибки-15`,content:`\\Throwable`},{heading:`возвращает-29`,content:`Возвращает true, если запись прошла успешно, или false, если возникла ошибка.`}],headings:[{id:`краткое-содержание`,content:`Краткое содержание:`},{id:`свойства`,content:`Свойства`},{id:`методы`,content:`Методы`},{id:`подробности`,content:`Подробности`},{id:`свойства-1`,content:`Свойства`},{id:`private-cache_folder--string`,content:`private $cache_folder : string`},{id:`private-locale--string`,content:`private $locale : ?string`},{id:`tags`,content:`Tags`},{id:`private-localization_path--string`,content:`private $localization_path : ?string`},{id:`tags-1`,content:`Tags`},{id:`private-prefix--string`,content:`private $prefix : ?string`},{id:`private-translator--symfonycomponenttranslationtranslator`,content:`private $translator : ?\\Symfony\\Component\\Translation\\Translator`},{id:`tags-2`,content:`Tags`},{id:`private-use_translator--bool`,content:`private $use_translator : bool`},{id:`методы-1`,content:`Методы`},{id:`clear_cache`,content:`clear_cache`},{id:`краткое-содержание-1`,content:`Краткое содержание`},{id:`описание`,content:`Описание`},{id:`смотри-так-же`,content:`Смотри так-же:`},{id:`свойства-2`,content:`Свойства:`},{id:`возвращает`,content:`Возвращает:`},{id:`convertxlifftojs`,content:`convertXliffToJs`},{id:`краткое-содержание-2`,content:`Краткое содержание`},{id:`описание-1`,content:`Описание`},{id:`смотри-так-же-1`,content:`Смотри так-же:`},{id:`ошибки`,content:`Ошибки:`},{id:`возвращает-1`,content:`Возвращает:`},{id:`get_cache`,content:`get_cache`},{id:`краткое-содержание-3`,content:`Краткое содержание`},{id:`описание-2`,content:`Описание`},{id:`смотри-так-же-2`,content:`Смотри так-же:`},{id:`свойства-3`,content:`Свойства:`},{id:`ошибки-1`,content:`Ошибки:`},{id:`возвращает-2`,content:`Возвращает:`},{id:`getcachefolder`,content:`getCacheFolder`},{id:`возвращает-3`,content:`Возвращает:`},{id:`getformattedlanguagelist`,content:`getFormattedLanguageList`},{id:`краткое-содержание-4`,content:`Краткое содержание`},{id:`описание-3`,content:`Описание`},{id:`смотри-так-же-3`,content:`Смотри так-же:`},{id:`свойства-4`,content:`Свойства:`},{id:`ошибки-2`,content:`Ошибки:`},{id:`возвращает-4`,content:`Возвращает:`},{id:`getlanguages`,content:`getLanguages`},{id:`краткое-содержание-5`,content:`Краткое содержание`},{id:`описание-4`,content:`Описание`},{id:`смотри-так-же-4`,content:`Смотри так-же:`},{id:`ошибки-3`,content:`Ошибки:`},{id:`возвращает-5`,content:`Возвращает:`},{id:`getlocale`,content:`getLocale`},{id:`краткое-содержание-6`,content:`Краткое содержание`},{id:`возвращает-6`,content:`Возвращает:`},{id:`getlocaledata`,content:`getLocaleData`},{id:`краткое-содержание-7`,content:`Краткое содержание`},{id:`смотри-так-же-5`,content:`Смотри так-же:`},{id:`свойства-5`,content:`Свойства:`},{id:`ошибки-4`,content:`Ошибки:`},{id:`возвращает-7`,content:`Возвращает:`},{id:`getlocalizationpath`,content:`getLocalizationPath`},{id:`краткое-содержание-8`,content:`Краткое содержание`},{id:`описание-5`,content:`Описание`},{id:`смотри-так-же-6`,content:`Смотри так-же:`},{id:`ошибки-5`,content:`Ошибки:`},{id:`возвращает-8`,content:`Возвращает:`},{id:`getprefix`,content:`getPrefix`},{id:`краткое-содержание-9`,content:`Краткое содержание`},{id:`описание-6`,content:`Описание`},{id:`смотри-так-же-7`,content:`Смотри так-же:`},{id:`возвращает-9`,content:`Возвращает:`},{id:`gettranslation`,content:`getTranslation`},{id:`краткое-содержание-10`,content:`Краткое содержание`},{id:`описание-7`,content:`Описание`},{id:`смотри-так-же-8`,content:`Смотри так-же:`},{id:`свойства-6`,content:`Свойства:`},{id:`ошибки-6`,content:`Ошибки:`},{id:`возвращает-10`,content:`Возвращает:`},{id:`gettranslationplural`,content:`getTranslationPlural`},{id:`краткое-содержание-11`,content:`Краткое содержание`},{id:`описание-8`,content:`Описание`},{id:`смотри-так-же-9`,content:`Смотри так-же:`},{id:`свойства-7`,content:`Свойства:`},{id:`ошибки-7`,content:`Ошибки:`},{id:`возвращает-11`,content:`Возвращает:`},{id:`gettranslationpluralwithparameters`,content:`getTranslationPluralWithParameters`},{id:`краткое-содержание-12`,content:`Краткое содержание`},{id:`смотри-так-же-10`,content:`Смотри так-же:`},{id:`свойства-8`,content:`Свойства:`},{id:`ошибки-8`,content:`Ошибки:`},{id:`возвращает-12`,content:`Возвращает:`},{id:`gettranslationwithparameters`,content:`getTranslationWithParameters`},{id:`краткое-содержание-13`,content:`Краткое содержание`},{id:`описание-9`,content:`Описание`},{id:`смотри-так-же-11`,content:`Смотри так-же:`},{id:`свойства-9`,content:`Свойства:`},{id:`ошибки-9`,content:`Ошибки:`},{id:`возвращает-13`,content:`Возвращает:`},{id:`gettranslator`,content:`getTranslator`},{id:`краткое-содержание-14`,content:`Краткое содержание`},{id:`описание-10`,content:`Описание`},{id:`смотри-так-же-12`,content:`Смотри так-же:`},{id:`ошибки-10`,content:`Ошибки:`},{id:`возвращает-14`,content:`Возвращает:`},{id:`isusetranslator`,content:`isUseTranslator`},{id:`краткое-содержание-15`,content:`Краткое содержание`},{id:`описание-11`,content:`Описание`},{id:`возвращает-15`,content:`Возвращает:`},{id:`load_data`,content:`load_data`},{id:`краткое-содержание-16`,content:`Краткое содержание`},{id:`описание-12`,content:`Описание`},{id:`смотри-так-же-13`,content:`Смотри так-же:`},{id:`свойства-10`,content:`Свойства:`},{id:`ошибки-11`,content:`Ошибки:`},{id:`возвращает-16`,content:`Возвращает:`},{id:`setcachefolder`,content:`setCacheFolder`},{id:`свойства-11`,content:`Свойства:`},{id:`возвращает-17`,content:`Возвращает:`},{id:`setlocale`,content:`setLocale`},{id:`краткое-содержание-17`,content:`Краткое содержание`},{id:`свойства-12`,content:`Свойства:`},{id:`возвращает-18`,content:`Возвращает:`},{id:`setlocalizationpath`,content:`setLocalizationPath`},{id:`краткое-содержание-18`,content:`Краткое содержание`},{id:`свойства-13`,content:`Свойства:`},{id:`возвращает-19`,content:`Возвращает:`},{id:`setprefix`,content:`setPrefix`},{id:`краткое-содержание-19`,content:`Краткое содержание`},{id:`описание-13`,content:`Описание`},{id:`свойства-14`,content:`Свойства:`},{id:`возвращает-20`,content:`Возвращает:`},{id:`settranslator`,content:`setTranslator`},{id:`краткое-содержание-20`,content:`Краткое содержание`},{id:`описание-14`,content:`Описание`},{id:`смотри-так-же-14`,content:`Смотри так-же:`},{id:`ошибки-12`,content:`Ошибки:`},{id:`возвращает-21`,content:`Возвращает:`},{id:`setusetranslator`,content:`setUseTranslator`},{id:`краткое-содержание-21`,content:`Краткое содержание`},{id:`свойства-15`,content:`Свойства:`},{id:`возвращает-22`,content:`Возвращает:`},{id:`generatejstranslationcontent`,content:`generateJsTranslationContent`},{id:`краткое-содержание-22`,content:`Краткое содержание`},{id:`свойства-16`,content:`Свойства:`},{id:`возвращает-23`,content:`Возвращает:`},{id:`gettranslationarray`,content:`getTranslationArray`},{id:`краткое-содержание-23`,content:`Краткое содержание`},{id:`описание-15`,content:`Описание`},{id:`смотри-так-же-15`,content:`Смотри так-же:`},{id:`ошибки-13`,content:`Ошибки:`},{id:`возвращает-24`,content:`Возвращает:`},{id:`languagelist`,content:`languageList`},{id:`краткое-содержание-24`,content:`Краткое содержание`},{id:`смотри-так-же-16`,content:`Смотри так-же:`},{id:`свойства-17`,content:`Свойства:`},{id:`возвращает-25`,content:`Возвращает:`},{id:`nontranslator`,content:`nonTranslator`},{id:`краткое-содержание-25`,content:`Краткое содержание`},{id:`описание-16`,content:`Описание`},{id:`свойства-18`,content:`Свойства:`},{id:`возвращает-26`,content:`Возвращает:`},{id:`parsexlifffile`,content:`parseXliffFile`},{id:`свойства-19`,content:`Свойства:`},{id:`возвращает-27`,content:`Возвращает:`},{id:`set_cache`,content:`set_cache`},{id:`краткое-содержание-26`,content:`Краткое содержание`},{id:`описание-17`,content:`Описание`},{id:`смотри-так-же-17`,content:`Смотри так-же:`},{id:`свойства-20`,content:`Свойства:`},{id:`ошибки-14`,content:`Ошибки:`},{id:`возвращает-28`,content:`Возвращает:`},{id:`writejsfile`,content:`writeJsFile`},{id:`краткое-содержание-27`,content:`Краткое содержание`},{id:`описание-18`,content:`Описание`},{id:`смотри-так-же-18`,content:`Смотри так-же:`},{id:`свойства-21`,content:`Свойства:`},{id:`ошибки-15`,content:`Ошибки:`},{id:`возвращает-29`,content:`Возвращает:`}]},s=[{depth:2,url:`#краткое-содержание`,title:(0,n.jsx)(n.Fragment,{children:`Краткое содержание:`})},{depth:3,url:`#свойства`,title:(0,n.jsx)(n.Fragment,{children:`Свойства`})},{depth:3,url:`#методы`,title:(0,n.jsx)(n.Fragment,{children:`Методы`})},{depth:3,url:`#подробности`,title:(0,n.jsx)(n.Fragment,{children:`Подробности`})},{depth:2,url:`#свойства-1`,title:(0,n.jsx)(n.Fragment,{children:`Свойства`})},{depth:4,url:`#private-cache_folder--string`,title:(0,n.jsx)(n.Fragment,{children:`private $cache_folder : string`})},{depth:4,url:`#private-locale--string`,title:(0,n.jsx)(n.Fragment,{children:`private $locale : ?string`})},{depth:5,url:`#tags`,title:(0,n.jsx)(n.Fragment,{children:`Tags`})},{depth:4,url:`#private-localization_path--string`,title:(0,n.jsx)(n.Fragment,{children:`private $localization_path : ?string`})},{depth:5,url:`#tags-1`,title:(0,n.jsx)(n.Fragment,{children:`Tags`})},{depth:4,url:`#private-prefix--string`,title:(0,n.jsx)(n.Fragment,{children:`private $prefix : ?string`})},{depth:4,url:`#private-translator--symfonycomponenttranslationtranslator`,title:(0,n.jsx)(n.Fragment,{children:`private $translator : ?\\Symfony\\Component\\Translation\\Translator`})},{depth:5,url:`#tags-2`,title:(0,n.jsx)(n.Fragment,{children:`Tags`})},{depth:4,url:`#private-use_translator--bool`,title:(0,n.jsx)(n.Fragment,{children:`private $use_translator : bool`})},{depth:2,url:`#методы-1`,title:(0,n.jsx)(n.Fragment,{children:`Методы`})},{depth:3,url:`#clear_cache`,title:(0,n.jsx)(n.Fragment,{children:`clear_cache`})},{depth:5,url:`#краткое-содержание-1`,title:(0,n.jsx)(n.Fragment,{children:`Краткое содержание`})},{depth:5,url:`#описание`,title:(0,n.jsx)(n.Fragment,{children:`Описание`})},{depth:5,url:`#смотри-так-же`,title:(0,n.jsx)(n.Fragment,{children:`Смотри так-же:`})},{depth:5,url:`#свойства-2`,title:(0,n.jsx)(n.Fragment,{children:`Свойства:`})},{depth:5,url:`#возвращает`,title:(0,n.jsx)(n.Fragment,{children:`Возвращает:`})},{depth:3,url:`#convertxlifftojs`,title:(0,n.jsx)(n.Fragment,{children:`convertXliffToJs`})},{depth:5,url:`#краткое-содержание-2`,title:(0,n.jsx)(n.Fragment,{children:`Краткое содержание`})},{depth:5,url:`#описание-1`,title:(0,n.jsx)(n.Fragment,{children:`Описание`})},{depth:5,url:`#смотри-так-же-1`,title:(0,n.jsx)(n.Fragment,{children:`Смотри так-же:`})},{depth:5,url:`#ошибки`,title:(0,n.jsx)(n.Fragment,{children:`Ошибки:`})},{depth:5,url:`#возвращает-1`,title:(0,n.jsx)(n.Fragment,{children:`Возвращает:`})},{depth:3,url:`#get_cache`,title:(0,n.jsx)(n.Fragment,{children:`get_cache`})},{depth:5,url:`#краткое-содержание-3`,title:(0,n.jsx)(n.Fragment,{children:`Краткое содержание`})},{depth:5,url:`#описание-2`,title:(0,n.jsx)(n.Fragment,{children:`Описание`})},{depth:5,url:`#смотри-так-же-2`,title:(0,n.jsx)(n.Fragment,{children:`Смотри так-же:`})},{depth:5,url:`#свойства-3`,title:(0,n.jsx)(n.Fragment,{children:`Свойства:`})},{depth:5,url:`#ошибки-1`,title:(0,n.jsx)(n.Fragment,{children:`Ошибки:`})},{depth:5,url:`#возвращает-2`,title:(0,n.jsx)(n.Fragment,{children:`Возвращает:`})},{depth:3,url:`#getcachefolder`,title:(0,n.jsx)(n.Fragment,{children:`getCacheFolder`})},{depth:5,url:`#возвращает-3`,title:(0,n.jsx)(n.Fragment,{children:`Возвращает:`})},{depth:3,url:`#getformattedlanguagelist`,title:(0,n.jsx)(n.Fragment,{children:`getFormattedLanguageList`})},{depth:5,url:`#краткое-содержание-4`,title:(0,n.jsx)(n.Fragment,{children:`Краткое содержание`})},{depth:5,url:`#описание-3`,title:(0,n.jsx)(n.Fragment,{children:`Описание`})},{depth:5,url:`#смотри-так-же-3`,title:(0,n.jsx)(n.Fragment,{children:`Смотри так-же:`})},{depth:5,url:`#свойства-4`,title:(0,n.jsx)(n.Fragment,{children:`Свойства:`})},{depth:5,url:`#ошибки-2`,title:(0,n.jsx)(n.Fragment,{children:`Ошибки:`})},{depth:5,url:`#возвращает-4`,title:(0,n.jsx)(n.Fragment,{children:`Возвращает:`})},{depth:3,url:`#getlanguages`,title:(0,n.jsx)(n.Fragment,{children:`getLanguages`})},{depth:5,url:`#краткое-содержание-5`,title:(0,n.jsx)(n.Fragment,{children:`Краткое содержание`})},{depth:5,url:`#описание-4`,title:(0,n.jsx)(n.Fragment,{children:`Описание`})},{depth:5,url:`#смотри-так-же-4`,title:(0,n.jsx)(n.Fragment,{children:`Смотри так-же:`})},{depth:5,url:`#ошибки-3`,title:(0,n.jsx)(n.Fragment,{children:`Ошибки:`})},{depth:5,url:`#возвращает-5`,title:(0,n.jsx)(n.Fragment,{children:`Возвращает:`})},{depth:3,url:`#getlocale`,title:(0,n.jsx)(n.Fragment,{children:`getLocale`})},{depth:5,url:`#краткое-содержание-6`,title:(0,n.jsx)(n.Fragment,{children:`Краткое содержание`})},{depth:5,url:`#возвращает-6`,title:(0,n.jsx)(n.Fragment,{children:`Возвращает:`})},{depth:3,url:`#getlocaledata`,title:(0,n.jsx)(n.Fragment,{children:`getLocaleData`})},{depth:5,url:`#краткое-содержание-7`,title:(0,n.jsx)(n.Fragment,{children:`Краткое содержание`})},{depth:5,url:`#смотри-так-же-5`,title:(0,n.jsx)(n.Fragment,{children:`Смотри так-же:`})},{depth:5,url:`#свойства-5`,title:(0,n.jsx)(n.Fragment,{children:`Свойства:`})},{depth:5,url:`#ошибки-4`,title:(0,n.jsx)(n.Fragment,{children:`Ошибки:`})},{depth:5,url:`#возвращает-7`,title:(0,n.jsx)(n.Fragment,{children:`Возвращает:`})},{depth:3,url:`#getlocalizationpath`,title:(0,n.jsx)(n.Fragment,{children:`getLocalizationPath`})},{depth:5,url:`#краткое-содержание-8`,title:(0,n.jsx)(n.Fragment,{children:`Краткое содержание`})},{depth:5,url:`#описание-5`,title:(0,n.jsx)(n.Fragment,{children:`Описание`})},{depth:5,url:`#смотри-так-же-6`,title:(0,n.jsx)(n.Fragment,{children:`Смотри так-же:`})},{depth:5,url:`#ошибки-5`,title:(0,n.jsx)(n.Fragment,{children:`Ошибки:`})},{depth:5,url:`#возвращает-8`,title:(0,n.jsx)(n.Fragment,{children:`Возвращает:`})},{depth:3,url:`#getprefix`,title:(0,n.jsx)(n.Fragment,{children:`getPrefix`})},{depth:5,url:`#краткое-содержание-9`,title:(0,n.jsx)(n.Fragment,{children:`Краткое содержание`})},{depth:5,url:`#описание-6`,title:(0,n.jsx)(n.Fragment,{children:`Описание`})},{depth:5,url:`#смотри-так-же-7`,title:(0,n.jsx)(n.Fragment,{children:`Смотри так-же:`})},{depth:5,url:`#возвращает-9`,title:(0,n.jsx)(n.Fragment,{children:`Возвращает:`})},{depth:3,url:`#gettranslation`,title:(0,n.jsx)(n.Fragment,{children:`getTranslation`})},{depth:5,url:`#краткое-содержание-10`,title:(0,n.jsx)(n.Fragment,{children:`Краткое содержание`})},{depth:5,url:`#описание-7`,title:(0,n.jsx)(n.Fragment,{children:`Описание`})},{depth:5,url:`#смотри-так-же-8`,title:(0,n.jsx)(n.Fragment,{children:`Смотри так-же:`})},{depth:5,url:`#свойства-6`,title:(0,n.jsx)(n.Fragment,{children:`Свойства:`})},{depth:5,url:`#ошибки-6`,title:(0,n.jsx)(n.Fragment,{children:`Ошибки:`})},{depth:5,url:`#возвращает-10`,title:(0,n.jsx)(n.Fragment,{children:`Возвращает:`})},{depth:3,url:`#gettranslationplural`,title:(0,n.jsx)(n.Fragment,{children:`getTranslationPlural`})},{depth:5,url:`#краткое-содержание-11`,title:(0,n.jsx)(n.Fragment,{children:`Краткое содержание`})},{depth:5,url:`#описание-8`,title:(0,n.jsx)(n.Fragment,{children:`Описание`})},{depth:5,url:`#смотри-так-же-9`,title:(0,n.jsx)(n.Fragment,{children:`Смотри так-же:`})},{depth:5,url:`#свойства-7`,title:(0,n.jsx)(n.Fragment,{children:`Свойства:`})},{depth:5,url:`#ошибки-7`,title:(0,n.jsx)(n.Fragment,{children:`Ошибки:`})},{depth:5,url:`#возвращает-11`,title:(0,n.jsx)(n.Fragment,{children:`Возвращает:`})},{depth:3,url:`#gettranslationpluralwithparameters`,title:(0,n.jsx)(n.Fragment,{children:`getTranslationPluralWithParameters`})},{depth:5,url:`#краткое-содержание-12`,title:(0,n.jsx)(n.Fragment,{children:`Краткое содержание`})},{depth:5,url:`#смотри-так-же-10`,title:(0,n.jsx)(n.Fragment,{children:`Смотри так-же:`})},{depth:5,url:`#свойства-8`,title:(0,n.jsx)(n.Fragment,{children:`Свойства:`})},{depth:5,url:`#ошибки-8`,title:(0,n.jsx)(n.Fragment,{children:`Ошибки:`})},{depth:5,url:`#возвращает-12`,title:(0,n.jsx)(n.Fragment,{children:`Возвращает:`})},{depth:3,url:`#gettranslationwithparameters`,title:(0,n.jsx)(n.Fragment,{children:`getTranslationWithParameters`})},{depth:5,url:`#краткое-содержание-13`,title:(0,n.jsx)(n.Fragment,{children:`Краткое содержание`})},{depth:5,url:`#описание-9`,title:(0,n.jsx)(n.Fragment,{children:`Описание`})},{depth:5,url:`#смотри-так-же-11`,title:(0,n.jsx)(n.Fragment,{children:`Смотри так-же:`})},{depth:5,url:`#свойства-9`,title:(0,n.jsx)(n.Fragment,{children:`Свойства:`})},{depth:5,url:`#ошибки-9`,title:(0,n.jsx)(n.Fragment,{children:`Ошибки:`})},{depth:5,url:`#возвращает-13`,title:(0,n.jsx)(n.Fragment,{children:`Возвращает:`})},{depth:3,url:`#gettranslator`,title:(0,n.jsx)(n.Fragment,{children:`getTranslator`})},{depth:5,url:`#краткое-содержание-14`,title:(0,n.jsx)(n.Fragment,{children:`Краткое содержание`})},{depth:5,url:`#описание-10`,title:(0,n.jsx)(n.Fragment,{children:`Описание`})},{depth:5,url:`#смотри-так-же-12`,title:(0,n.jsx)(n.Fragment,{children:`Смотри так-же:`})},{depth:5,url:`#ошибки-10`,title:(0,n.jsx)(n.Fragment,{children:`Ошибки:`})},{depth:5,url:`#возвращает-14`,title:(0,n.jsx)(n.Fragment,{children:`Возвращает:`})},{depth:3,url:`#isusetranslator`,title:(0,n.jsx)(n.Fragment,{children:`isUseTranslator`})},{depth:5,url:`#краткое-содержание-15`,title:(0,n.jsx)(n.Fragment,{children:`Краткое содержание`})},{depth:5,url:`#описание-11`,title:(0,n.jsx)(n.Fragment,{children:`Описание`})},{depth:5,url:`#возвращает-15`,title:(0,n.jsx)(n.Fragment,{children:`Возвращает:`})},{depth:3,url:`#load_data`,title:(0,n.jsx)(n.Fragment,{children:`load_data`})},{depth:5,url:`#краткое-содержание-16`,title:(0,n.jsx)(n.Fragment,{children:`Краткое содержание`})},{depth:5,url:`#описание-12`,title:(0,n.jsx)(n.Fragment,{children:`Описание`})},{depth:5,url:`#смотри-так-же-13`,title:(0,n.jsx)(n.Fragment,{children:`Смотри так-же:`})},{depth:5,url:`#свойства-10`,title:(0,n.jsx)(n.Fragment,{children:`Свойства:`})},{depth:5,url:`#ошибки-11`,title:(0,n.jsx)(n.Fragment,{children:`Ошибки:`})},{depth:5,url:`#возвращает-16`,title:(0,n.jsx)(n.Fragment,{children:`Возвращает:`})},{depth:3,url:`#setcachefolder`,title:(0,n.jsx)(n.Fragment,{children:`setCacheFolder`})},{depth:5,url:`#свойства-11`,title:(0,n.jsx)(n.Fragment,{children:`Свойства:`})},{depth:5,url:`#возвращает-17`,title:(0,n.jsx)(n.Fragment,{children:`Возвращает:`})},{depth:3,url:`#setlocale`,title:(0,n.jsx)(n.Fragment,{children:`setLocale`})},{depth:5,url:`#краткое-содержание-17`,title:(0,n.jsx)(n.Fragment,{children:`Краткое содержание`})},{depth:5,url:`#свойства-12`,title:(0,n.jsx)(n.Fragment,{children:`Свойства:`})},{depth:5,url:`#возвращает-18`,title:(0,n.jsx)(n.Fragment,{children:`Возвращает:`})},{depth:3,url:`#setlocalizationpath`,title:(0,n.jsx)(n.Fragment,{children:`setLocalizationPath`})},{depth:5,url:`#краткое-содержание-18`,title:(0,n.jsx)(n.Fragment,{children:`Краткое содержание`})},{depth:5,url:`#свойства-13`,title:(0,n.jsx)(n.Fragment,{children:`Свойства:`})},{depth:5,url:`#возвращает-19`,title:(0,n.jsx)(n.Fragment,{children:`Возвращает:`})},{depth:3,url:`#setprefix`,title:(0,n.jsx)(n.Fragment,{children:`setPrefix`})},{depth:5,url:`#краткое-содержание-19`,title:(0,n.jsx)(n.Fragment,{children:`Краткое содержание`})},{depth:5,url:`#описание-13`,title:(0,n.jsx)(n.Fragment,{children:`Описание`})},{depth:5,url:`#свойства-14`,title:(0,n.jsx)(n.Fragment,{children:`Свойства:`})},{depth:5,url:`#возвращает-20`,title:(0,n.jsx)(n.Fragment,{children:`Возвращает:`})},{depth:3,url:`#settranslator`,title:(0,n.jsx)(n.Fragment,{children:`setTranslator`})},{depth:5,url:`#краткое-содержание-20`,title:(0,n.jsx)(n.Fragment,{children:`Краткое содержание`})},{depth:5,url:`#описание-14`,title:(0,n.jsx)(n.Fragment,{children:`Описание`})},{depth:5,url:`#смотри-так-же-14`,title:(0,n.jsx)(n.Fragment,{children:`Смотри так-же:`})},{depth:5,url:`#ошибки-12`,title:(0,n.jsx)(n.Fragment,{children:`Ошибки:`})},{depth:5,url:`#возвращает-21`,title:(0,n.jsx)(n.Fragment,{children:`Возвращает:`})},{depth:3,url:`#setusetranslator`,title:(0,n.jsx)(n.Fragment,{children:`setUseTranslator`})},{depth:5,url:`#краткое-содержание-21`,title:(0,n.jsx)(n.Fragment,{children:`Краткое содержание`})},{depth:5,url:`#свойства-15`,title:(0,n.jsx)(n.Fragment,{children:`Свойства:`})},{depth:5,url:`#возвращает-22`,title:(0,n.jsx)(n.Fragment,{children:`Возвращает:`})},{depth:3,url:`#generatejstranslationcontent`,title:(0,n.jsx)(n.Fragment,{children:`generateJsTranslationContent`})},{depth:5,url:`#краткое-содержание-22`,title:(0,n.jsx)(n.Fragment,{children:`Краткое содержание`})},{depth:5,url:`#свойства-16`,title:(0,n.jsx)(n.Fragment,{children:`Свойства:`})},{depth:5,url:`#возвращает-23`,title:(0,n.jsx)(n.Fragment,{children:`Возвращает:`})},{depth:3,url:`#gettranslationarray`,title:(0,n.jsx)(n.Fragment,{children:`getTranslationArray`})},{depth:5,url:`#краткое-содержание-23`,title:(0,n.jsx)(n.Fragment,{children:`Краткое содержание`})},{depth:5,url:`#описание-15`,title:(0,n.jsx)(n.Fragment,{children:`Описание`})},{depth:5,url:`#смотри-так-же-15`,title:(0,n.jsx)(n.Fragment,{children:`Смотри так-же:`})},{depth:5,url:`#ошибки-13`,title:(0,n.jsx)(n.Fragment,{children:`Ошибки:`})},{depth:5,url:`#возвращает-24`,title:(0,n.jsx)(n.Fragment,{children:`Возвращает:`})},{depth:3,url:`#languagelist`,title:(0,n.jsx)(n.Fragment,{children:`languageList`})},{depth:5,url:`#краткое-содержание-24`,title:(0,n.jsx)(n.Fragment,{children:`Краткое содержание`})},{depth:5,url:`#смотри-так-же-16`,title:(0,n.jsx)(n.Fragment,{children:`Смотри так-же:`})},{depth:5,url:`#свойства-17`,title:(0,n.jsx)(n.Fragment,{children:`Свойства:`})},{depth:5,url:`#возвращает-25`,title:(0,n.jsx)(n.Fragment,{children:`Возвращает:`})},{depth:3,url:`#nontranslator`,title:(0,n.jsx)(n.Fragment,{children:`nonTranslator`})},{depth:5,url:`#краткое-содержание-25`,title:(0,n.jsx)(n.Fragment,{children:`Краткое содержание`})},{depth:5,url:`#описание-16`,title:(0,n.jsx)(n.Fragment,{children:`Описание`})},{depth:5,url:`#свойства-18`,title:(0,n.jsx)(n.Fragment,{children:`Свойства:`})},{depth:5,url:`#возвращает-26`,title:(0,n.jsx)(n.Fragment,{children:`Возвращает:`})},{depth:3,url:`#parsexlifffile`,title:(0,n.jsx)(n.Fragment,{children:`parseXliffFile`})},{depth:5,url:`#свойства-19`,title:(0,n.jsx)(n.Fragment,{children:`Свойства:`})},{depth:5,url:`#возвращает-27`,title:(0,n.jsx)(n.Fragment,{children:`Возвращает:`})},{depth:3,url:`#set_cache`,title:(0,n.jsx)(n.Fragment,{children:`set_cache`})},{depth:5,url:`#краткое-содержание-26`,title:(0,n.jsx)(n.Fragment,{children:`Краткое содержание`})},{depth:5,url:`#описание-17`,title:(0,n.jsx)(n.Fragment,{children:`Описание`})},{depth:5,url:`#смотри-так-же-17`,title:(0,n.jsx)(n.Fragment,{children:`Смотри так-же:`})},{depth:5,url:`#свойства-20`,title:(0,n.jsx)(n.Fragment,{children:`Свойства:`})},{depth:5,url:`#ошибки-14`,title:(0,n.jsx)(n.Fragment,{children:`Ошибки:`})},{depth:5,url:`#возвращает-28`,title:(0,n.jsx)(n.Fragment,{children:`Возвращает:`})},{depth:3,url:`#writejsfile`,title:(0,n.jsx)(n.Fragment,{children:`writeJsFile`})},{depth:5,url:`#краткое-содержание-27`,title:(0,n.jsx)(n.Fragment,{children:`Краткое содержание`})},{depth:5,url:`#описание-18`,title:(0,n.jsx)(n.Fragment,{children:`Описание`})},{depth:5,url:`#смотри-так-же-18`,title:(0,n.jsx)(n.Fragment,{children:`Смотри так-же:`})},{depth:5,url:`#свойства-21`,title:(0,n.jsx)(n.Fragment,{children:`Свойства:`})},{depth:5,url:`#ошибки-15`,title:(0,n.jsx)(n.Fragment,{children:`Ошибки:`})},{depth:5,url:`#возвращает-29`,title:(0,n.jsx)(n.Fragment,{children:`Возвращает:`})}];function c(e){let t={a:`a`,code:`code`,h2:`h2`,h3:`h3`,h4:`h4`,h5:`h5`,hr:`hr`,li:`li`,p:`p`,pre:`pre`,span:`span`,strong:`strong`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,ul:`ul`,...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h2,{id:`краткое-содержание`,children:`Краткое содержание:`}),`
`,(0,n.jsx)(t.p,{children:`Класс для оформления фраз переводов`}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsx)(t.h3,{id:`свойства`,children:`Свойства`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[`private $`,(0,n.jsx)(t.a,{href:`#property_cache_folder`,children:`cache_folder`})]}),`
`,(0,n.jsxs)(t.li,{children:[`private $`,(0,n.jsx)(t.a,{href:`#property_locale`,children:`locale`})]}),`
`,(0,n.jsxs)(t.li,{children:[`private $`,(0,n.jsx)(t.a,{href:`#property_localization_path`,children:`localization_path`})]}),`
`,(0,n.jsxs)(t.li,{children:[`private $`,(0,n.jsx)(t.a,{href:`#property_prefix`,children:`prefix`})]}),`
`,(0,n.jsxs)(t.li,{children:[`private $`,(0,n.jsx)(t.a,{href:`#property_translator`,children:`translator`})]}),`
`,(0,n.jsxs)(t.li,{children:[`private $`,(0,n.jsx)(t.a,{href:`#property_use_translator`,children:`use_translator`})]}),`
`]}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsx)(t.h3,{id:`методы`,children:`Методы`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method_clear_cache`,children:`clear_cache()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method_convertXliffToJs`,children:`convertXliffToJs()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method_get_cache`,children:`get_cache()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method_getCacheFolder`,children:`getCacheFolder()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method_getFormattedLanguageList`,children:`getFormattedLanguageList()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method_getLanguages`,children:`getLanguages()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method_getLocale`,children:`getLocale()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method_getLocaleData`,children:`getLocaleData()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method_getLocalizationPath`,children:`getLocalizationPath()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method_getPrefix`,children:`getPrefix()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method_getTranslation`,children:`getTranslation()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method_getTranslationPlural`,children:`getTranslationPlural()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method_getTranslationPluralWithParameters`,children:`getTranslationPluralWithParameters()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method_getTranslationWithParameters`,children:`getTranslationWithParameters()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method_getTranslator`,children:`getTranslator()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method_isUseTranslator`,children:`isUseTranslator()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method_load_data`,children:`load_data()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method_setCacheFolder`,children:`setCacheFolder()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method_setLocale`,children:`setLocale()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method_setLocalizationPath`,children:`setLocalizationPath()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method_setPrefix`,children:`setPrefix()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method_setTranslator`,children:`setTranslator()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method_setUseTranslator`,children:`setUseTranslator()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`private `,(0,n.jsx)(t.a,{href:`#method_generateJsTranslationContent`,children:`generateJsTranslationContent()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`private `,(0,n.jsx)(t.a,{href:`#method_getTranslationArray`,children:`getTranslationArray()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`private `,(0,n.jsx)(t.a,{href:`#method_languageList`,children:`languageList()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`private `,(0,n.jsx)(t.a,{href:`#method_nonTranslator`,children:`nonTranslator()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`private `,(0,n.jsx)(t.a,{href:`#method_parseXliffFile`,children:`parseXliffFile()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`private `,(0,n.jsx)(t.a,{href:`#method_set_cache`,children:`set_cache()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`private `,(0,n.jsx)(t.a,{href:`#method_writeJsFile`,children:`writeJsFile()`})]}),`
`]}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsx)(t.h3,{id:`подробности`,children:`Подробности`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsx)(t.li,{children:`Путь: engine/inc/maharder/_includes/classes/MhTranslation.php`}),`
`,(0,n.jsxs)(t.li,{children:[`Использованные трейты:`,`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`./DataLoader`,children:`\\DataLoader`})}),`
`]}),`
`]}),`
`]}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsx)(t.h2,{id:`свойства-1`,children:`Свойства`}),`
`,(0,n.jsx)(`span`,{id:`property_cache_folder`}),`
`,(0,n.jsx)(t.h4,{id:`private-cache_folder--string`,children:`private $cache_folder : string`}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Краткое содержание`})}),`
`,(0,n.jsx)(t.p,{children:`Папка кеша`}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Тип:`}),` `,(0,n.jsx)(`abbr`,{title:`string`,children:`Текст`})]}),`
`,(0,n.jsx)(`span`,{id:`property_locale`}),`
`,(0,n.jsx)(t.h4,{id:`private-locale--string`,children:`private $locale : ?string`}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Краткое содержание`})}),`
`,(0,n.jsx)(t.p,{children:`Название локали`}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Тип:`}),` `,(0,n.jsx)(`abbr`,{title:`?string`,children:`Текст или null`})]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Подробности:`})}),`
`,(0,n.jsx)(t.h5,{id:`tags`,children:`Tags`}),`
`,(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`Тэг`}),(0,n.jsx)(t.th,{children:`Версия`}),(0,n.jsx)(t.th,{children:`Описание`})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`version`}),(0,n.jsx)(t.td,{children:`173.3.0`}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`since`}),(0,n.jsx)(t.td,{children:`173.3.0`}),(0,n.jsx)(t.td,{})]})]})]}),`
`,(0,n.jsx)(`span`,{id:`property_localization_path`}),`
`,(0,n.jsx)(t.h4,{id:`private-localization_path--string`,children:`private $localization_path : ?string`}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Краткое содержание`})}),`
`,(0,n.jsx)(t.p,{children:`Путь до фраз перевода`}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Тип:`}),` `,(0,n.jsx)(`abbr`,{title:`?string`,children:`Текст или null`})]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Подробности:`})}),`
`,(0,n.jsx)(t.h5,{id:`tags-1`,children:`Tags`}),`
`,(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`Тэг`}),(0,n.jsx)(t.th,{children:`Версия`}),(0,n.jsx)(t.th,{children:`Описание`})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`version`}),(0,n.jsx)(t.td,{children:`173.3.0`}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`since`}),(0,n.jsx)(t.td,{children:`173.3.0`}),(0,n.jsx)(t.td,{})]})]})]}),`
`,(0,n.jsx)(`span`,{id:`property_prefix`}),`
`,(0,n.jsx)(t.h4,{id:`private-prefix--string`,children:`private $prefix : ?string`}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Тип:`}),` `,(0,n.jsx)(`abbr`,{title:`?string`,children:`Текст или null`})]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Подробности:`})}),`
`,(0,n.jsx)(`span`,{id:`property_translator`}),`
`,(0,n.jsx)(t.h4,{id:`private-translator--symfonycomponenttranslationtranslator`,children:`private $translator : ?\\Symfony\\Component\\Translation\\Translator`}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Краткое содержание`})}),`
`,(0,n.jsx)(t.p,{children:`Класс переводчика`}),`
`,(0,n.jsxs)(t.p,{children:[`**Тип:
** `,(0,n.jsx)(`a`,{href:`https://symfony.com/doc/current/translation.html`,target:`_blank`,children:(0,n.jsx)(`abbr`,{title:`?\\Symfony\\Component\\Translation\\Translator`,children:`
Translator`})})]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Подробности:`})}),`
`,(0,n.jsx)(t.h5,{id:`tags-2`,children:`Tags`}),`
`,(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`Тэг`}),(0,n.jsx)(t.th,{children:`Версия`}),(0,n.jsx)(t.th,{children:`Описание`})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`version`}),(0,n.jsx)(t.td,{children:`173.3.0`}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`since`}),(0,n.jsx)(t.td,{children:`173.3.0`}),(0,n.jsx)(t.td,{})]})]})]}),`
`,(0,n.jsx)(`span`,{id:`property_use_translator`}),`
`,(0,n.jsx)(t.h4,{id:`private-use_translator--bool`,children:`private $use_translator : bool`}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Тип:`}),` `,(0,n.jsx)(`abbr`,{title:`bool`,children:`Логические значения`})]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Подробности:`})}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsx)(t.h2,{id:`методы-1`,children:`Методы`}),`
`,(0,n.jsx)(`span`,{id:`method_clear_cache`}),`
`,(0,n.jsx)(t.h3,{id:`clear_cache`,children:`clear_cache`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`public clear_cache(string  type = "all") : void`})})})})}),`
`,(0,n.jsx)(t.h5,{id:`краткое-содержание-1`,children:`Краткое содержание`}),`
`,(0,n.jsx)(t.p,{children:`Очищает кеш указанного типа.`}),`
`,(0,n.jsx)(t.h5,{id:`описание`,children:`Описание`}),`
`,(0,n.jsx)(t.p,{children:`Метод позволяет очистить кеш для переданного типа или полностью, если тип "all".
Использует внутренний метод CacheControl::clearCache для выполнения операции очистки.`}),`
`,(0,n.jsx)(t.h5,{id:`смотри-так-же`,children:`Смотри так-же:`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`./CacheControl#method_clearCache`,children:`\\CacheControl::clearCache()`})}),`
`]}),`
`,(0,n.jsx)(t.h5,{id:`свойства-2`,children:`Свойства:`}),`
`,(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`Название`}),(0,n.jsx)(t.th,{children:`Тип`}),(0,n.jsx)(t.th,{children:`По умолчанию`})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:`$type`})}),(0,n.jsx)(t.td,{children:`string`}),(0,n.jsx)(t.td,{children:`"all"`})]})})]}),`
`,(0,n.jsx)(t.h5,{id:`возвращает`,children:`Возвращает:`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`void`})})})})}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsx)(`span`,{id:`method_convertXliffToJs`}),`
`,(0,n.jsx)(t.h3,{id:`convertxlifftojs`,children:`convertXliffToJs`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`static public convertXliffToJs() : void`})})})})}),`
`,(0,n.jsx)(t.h5,{id:`краткое-содержание-2`,children:`Краткое содержание`}),`
`,(0,n.jsx)(t.p,{children:`Преобразует XLIFF-файлы переводов в JavaScript-файлы для поддержки локализации на клиентской стороне.`}),`
`,(0,n.jsx)(t.h5,{id:`описание-1`,children:`Описание`}),`
`,(0,n.jsx)(t.p,{children:`Метод перебирает доступные языки из функции {@see}, кэширует переводы,
преобразует их из XLIFF-файлов и генерирует JavaScript-файлы с переводами.
Если переводы не найдены или директория переводов отсутствует, генерируется лог ошибки.`}),`
`,(0,n.jsx)(t.h5,{id:`смотри-так-же-1`,children:`Смотри так-же:`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`./LogGenerator#method_generateLog`,children:`\\LogGenerator::generateLog()`})}),`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`#method_getLanguages`,children:`\\MhTranslation::getLanguages()`})}),`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`./CacheControl#method_getCache`,children:`\\CacheControl::getCache()`})}),`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`./DataManager#method_normalizePath`,children:`\\DataManager::normalizePath()`})}),`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`./DataManager#method_dirToArray`,children:`\\DataManager::dirToArray()`})}),`
`]}),`
`,(0,n.jsx)(t.h5,{id:`ошибки`,children:`Ошибки:`}),`
`,(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`Тип`}),(0,n.jsx)(t.th,{children:`Описание`})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`\\JsonException`}),(0,n.jsx)(t.td,{children:`\\Throwable`})]})})]}),`
`,(0,n.jsx)(t.h5,{id:`возвращает-1`,children:`Возвращает:`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`void`})})})})}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsx)(`span`,{id:`method_get_cache`}),`
`,(0,n.jsx)(t.h3,{id:`get_cache`,children:`get_cache`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`public get_cache(string  type, string  name) : array|false`})})})})}),`
`,(0,n.jsx)(t.h5,{id:`краткое-содержание-3`,children:`Краткое содержание`}),`
`,(0,n.jsx)(t.p,{children:`Получает кешированные данные для заданного типа и имени.`}),`
`,(0,n.jsx)(t.h5,{id:`описание-2`,children:`Описание`}),`
`,(0,n.jsxs)(t.p,{children:[`Метод использует статический метод `,(0,n.jsx)(t.code,{children:`CacheControl::getCache()`}),`, чтобы получить данные из файловой системы.`]}),`
`,(0,n.jsx)(t.h5,{id:`смотри-так-же-2`,children:`Смотри так-же:`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`./DataManager#method_toTranslit`,children:`\\DataManager::toTranslit()`})}),`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`./DataManager#method_normalizePath`,children:`\\DataManager::normalizePath()`})}),`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`./CacheControl#method_getCache`,children:`\\CacheControl::getCache()`})}),`
`]}),`
`,(0,n.jsx)(t.h5,{id:`свойства-3`,children:`Свойства:`}),`
`,(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`Название`}),(0,n.jsx)(t.th,{children:`Тип`}),(0,n.jsx)(t.th,{children:`По умолчанию`})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:`$type`})}),(0,n.jsx)(t.td,{children:`string`}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:`$name`})}),(0,n.jsx)(t.td,{children:`string`}),(0,n.jsx)(t.td,{})]})]})]}),`
`,(0,n.jsx)(t.h5,{id:`ошибки-1`,children:`Ошибки:`}),`
`,(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`Тип`}),(0,n.jsx)(t.th,{children:`Описание`})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`\\JsonException`}),(0,n.jsx)(t.td,{})]})})]}),`
`,(0,n.jsx)(t.h5,{id:`возвращает-2`,children:`Возвращает:`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`array|false`})})})})}),`
`,(0,n.jsxs)(t.p,{children:[`Возвращает массив декодированных данных, если файл кеша успешно найден и данные корректны,
или `,(0,n.jsx)(t.code,{children:`false`}),`, если произошла ошибка (например, файл не найден или данные некорректны).`]}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsx)(`span`,{id:`method_getCacheFolder`}),`
`,(0,n.jsx)(t.h3,{id:`getcachefolder`,children:`getCacheFolder`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`public getCacheFolder() : string`})})})})}),`
`,(0,n.jsx)(t.h5,{id:`возвращает-3`,children:`Возвращает:`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`string`})})})})}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsx)(`span`,{id:`method_getFormattedLanguageList`}),`
`,(0,n.jsx)(t.h3,{id:`getformattedlanguagelist`,children:`getFormattedLanguageList`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`static public getFormattedLanguageList(string|null  format = "{original} ({english})") : array`})})})})}),`
`,(0,n.jsx)(t.h5,{id:`краткое-содержание-4`,children:`Краткое содержание`}),`
`,(0,n.jsx)(t.p,{children:`Возвращает отформатированный список языков с заданным шаблоном формата.`}),`
`,(0,n.jsx)(t.h5,{id:`описание-3`,children:`Описание`}),`
`,(0,n.jsx)(t.p,{children:`Поддерживаемые подстановочные шаблоны в строке формата:`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`{original}`}),` - заменяется на переведённое название языка.`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`{english}`}),` - заменяется на английское название языка.`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`{iso2}`}),` - заменяется на двузначный код языка (например: `,(0,n.jsx)(t.code,{children:`ru`}),`).`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`{tag}`}),` - заменяется на код языка (например: `,(0,n.jsx)(t.code,{children:`ru_RU`}),`).
Если формат не указан, по умолчанию используется шаблон: "{original} ({english})".`]}),`
`]}),`
`,(0,n.jsx)(t.h5,{id:`смотри-так-же-3`,children:`Смотри так-же:`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`#method_getLanguages`,children:`\\MhTranslation::getLanguages()`})}),`
`]}),`
`,(0,n.jsx)(t.h5,{id:`свойства-4`,children:`Свойства:`}),`
`,(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`Название`}),(0,n.jsx)(t.th,{children:`Тип`}),(0,n.jsx)(t.th,{children:`По умолчанию`})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:`$format`})}),(0,n.jsx)(t.td,{children:`string|null`}),(0,n.jsx)(t.td,{children:`"{original} ({english})"`})]})})]}),`
`,(0,n.jsx)(t.h5,{id:`ошибки-2`,children:`Ошибки:`}),`
`,(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`Тип`}),(0,n.jsx)(t.th,{children:`Описание`})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`\\JsonException`}),(0,n.jsx)(t.td,{children:`Выбрасывается в случае ошибок при JSON-операциях.`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`\\Throwable`}),(0,n.jsx)(t.td,{})]})]})]}),`
`,(0,n.jsx)(t.h5,{id:`возвращает-4`,children:`Возвращает:`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`array`})})})})}),`
`,(0,n.jsx)(t.p,{children:`Возвращает массив языков, где каждый элемент содержит:`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`tag`}),` - код языка,`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`name`}),` - сгенерированное название языка на основе переданного формата.`]}),`
`]}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsx)(`span`,{id:`method_getLanguages`}),`
`,(0,n.jsx)(t.h3,{id:`getlanguages`,children:`getLanguages`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`static public getLanguages() : array`})})})})}),`
`,(0,n.jsx)(t.h5,{id:`краткое-содержание-5`,children:`Краткое содержание`}),`
`,(0,n.jsx)(t.p,{children:`Получает список доступных языков.`}),`
`,(0,n.jsx)(t.h5,{id:`описание-4`,children:`Описание`}),`
`,(0,n.jsx)(t.p,{children:`Метод проверяет наличие кэша для списка языков.
Если кэш отсутствует, формирует список языков на основе содержимого директории локализаций.
Полученные данные сохраняются в кэше для последующего использования.`}),`
`,(0,n.jsx)(t.h5,{id:`смотри-так-же-4`,children:`Смотри так-же:`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`./CacheControl#method_setCache`,children:`\\CacheControl::setCache()`})}),`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`./CacheControl#method_getCache`,children:`\\CacheControl::getCache()`})}),`
`]}),`
`,(0,n.jsx)(t.h5,{id:`ошибки-3`,children:`Ошибки:`}),`
`,(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`Тип`}),(0,n.jsx)(t.th,{children:`Описание`})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`\\JsonException|\\Throwable`}),(0,n.jsx)(t.td,{children:`Возникает при ошибке декодирования JSON в момент работы с кэшем.`})]})})]}),`
`,(0,n.jsx)(t.h5,{id:`возвращает-5`,children:`Возвращает:`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`array`})})})})}),`
`,(0,n.jsx)(t.p,{children:`Массив доступных языков, где ключ — идентификатор языка, а значение — данные языка.`}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsx)(`span`,{id:`method_getLocale`}),`
`,(0,n.jsx)(t.h3,{id:`getlocale`,children:`getLocale`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`static public getLocale() : string`})})})})}),`
`,(0,n.jsx)(t.h5,{id:`краткое-содержание-6`,children:`Краткое содержание`}),`
`,(0,n.jsx)(t.p,{children:`Возвращает текущую локаль или значение по умолчанию ("ru_RU"), если локаль не определена.`}),`
`,(0,n.jsx)(t.h5,{id:`возвращает-6`,children:`Возвращает:`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`string`})})})})}),`
`,(0,n.jsx)(t.p,{children:`Текущая локаль или значение по умолчанию ("ru_RU").`}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsx)(`span`,{id:`method_getLocaleData`}),`
`,(0,n.jsx)(t.h3,{id:`getlocaledata`,children:`getLocaleData`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`static public getLocaleData(string  locale) : array`})})})})}),`
`,(0,n.jsx)(t.h5,{id:`краткое-содержание-7`,children:`Краткое содержание`}),`
`,(0,n.jsx)(t.p,{children:`Возвращает локализованные данные для указанного языка.`}),`
`,(0,n.jsx)(t.h5,{id:`смотри-так-же-5`,children:`Смотри так-же:`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`#method_getLanguages`,children:`\\MhTranslation::getLanguages()`})}),`
`]}),`
`,(0,n.jsx)(t.h5,{id:`свойства-5`,children:`Свойства:`}),`
`,(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`Название`}),(0,n.jsx)(t.th,{children:`Тип`}),(0,n.jsx)(t.th,{children:`По умолчанию`})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:`$locale`})}),(0,n.jsx)(t.td,{children:`string`}),(0,n.jsx)(t.td,{})]})})]}),`
`,(0,n.jsx)(t.h5,{id:`ошибки-4`,children:`Ошибки:`}),`
`,(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`Тип`}),(0,n.jsx)(t.th,{children:`Описание`})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`\\JsonException`}),(0,n.jsx)(t.td,{children:`Если возникли ошибки при декодировании JSON-данных.`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`\\Throwable`}),(0,n.jsx)(t.td,{children:`Если возникают ошибки при работе с кешем или файловой системой.`})]})]})]}),`
`,(0,n.jsx)(t.h5,{id:`возвращает-7`,children:`Возвращает:`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`array`})})})})}),`
`,(0,n.jsx)(t.p,{children:`Массив данных локализации для указанного языка.`}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsx)(`span`,{id:`method_getLocalizationPath`}),`
`,(0,n.jsx)(t.h3,{id:`getlocalizationpath`,children:`getLocalizationPath`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`static public getLocalizationPath() : string|null`})})})})}),`
`,(0,n.jsx)(t.h5,{id:`краткое-содержание-8`,children:`Краткое содержание`}),`
`,(0,n.jsx)(t.p,{children:`Получает путь к локализации приложения.`}),`
`,(0,n.jsx)(t.h5,{id:`описание-5`,children:`Описание`}),`
`,(0,n.jsxs)(t.p,{children:[`Метод возвращает путь к директории с файлами локализации. Если путь ранее
не был установлен или пуст, он загружается из конфигурации `,(0,n.jsx)(t.code,{children:`mhadmin`}),` и
по умолчанию указывает на директорию `,(0,n.jsx)(t.code,{children:`/engine/inc/maharder/_locales`}),`.`]}),`
`,(0,n.jsx)(t.h5,{id:`смотри-так-же-6`,children:`Смотри так-же:`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`./DataManager#method_getConfig`,children:`\\DataManager::getConfig()`})}),`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`#property_localization_path`,children:`\\MhTranslation::$localization_path`})}),`
`]}),`
`,(0,n.jsx)(t.h5,{id:`ошибки-5`,children:`Ошибки:`}),`
`,(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`Тип`}),(0,n.jsx)(t.th,{children:`Описание`})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`\\JsonException`}),(0,n.jsx)(t.td,{children:`Если возникает ошибка при загрузке конфигурации.`})]})})]}),`
`,(0,n.jsx)(t.h5,{id:`возвращает-8`,children:`Возвращает:`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`string|null`})})})})}),`
`,(0,n.jsx)(t.p,{children:`Полный путь к локализации, или null, если ROOT_DIR не определён.`}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsx)(`span`,{id:`method_getPrefix`}),`
`,(0,n.jsx)(t.h3,{id:`getprefix`,children:`getPrefix`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`public getPrefix() : string`})})})})}),`
`,(0,n.jsx)(t.h5,{id:`краткое-содержание-9`,children:`Краткое содержание`}),`
`,(0,n.jsx)(t.p,{children:`Возвращает префикс для использования в SQL-запросах.`}),`
`,(0,n.jsx)(t.h5,{id:`описание-6`,children:`Описание`}),`
`,(0,n.jsxs)(t.p,{children:[`Метод проверяет, установлен ли префикс. Если префикс не задан, он вызывает метод `,(0,n.jsx)(t.code,{children:`setPrefix()`}),`,
чтобы установить его значение. Затем возвращает установившийся префикс.`]}),`
`,(0,n.jsx)(t.h5,{id:`смотри-так-же-7`,children:`Смотри так-же:`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`./DataLoader#property_prefix`,children:`\\DataLoader::$prefix`})}),`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`./DataLoader#method_setPrefix`,children:`\\DataLoader::setPrefix()`})}),`
`]}),`
`,(0,n.jsx)(t.h5,{id:`возвращает-9`,children:`Возвращает:`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`string`})})})})}),`
`,(0,n.jsx)(t.p,{children:`Префикс, используемый для построения SQL-запросов.`}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsx)(`span`,{id:`method_getTranslation`}),`
`,(0,n.jsx)(t.h3,{id:`gettranslation`,children:`getTranslation`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`static public getTranslation(string  phrase) : string`})})})})}),`
`,(0,n.jsx)(t.h5,{id:`краткое-содержание-10`,children:`Краткое содержание`}),`
`,(0,n.jsx)(t.p,{children:`Возвращает переведённую фразу.`}),`
`,(0,n.jsx)(t.h5,{id:`описание-7`,children:`Описание`}),`
`,(0,n.jsxs)(t.p,{children:[`Метод использует функцию `,(0,n.jsx)(t.code,{children:`getTranslationWithParameters`}),` для получения перевода
без указания дополнительных параметров.`]}),`
`,(0,n.jsx)(t.h5,{id:`смотри-так-же-8`,children:`Смотри так-же:`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`#method_getTranslationWithParameters`,children:`\\MhTranslation::getTranslationWithParameters`})}),`
`]}),`
`,(0,n.jsx)(t.h5,{id:`свойства-6`,children:`Свойства:`}),`
`,(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`Название`}),(0,n.jsx)(t.th,{children:`Тип`}),(0,n.jsx)(t.th,{children:`По умолчанию`})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:`$phrase`})}),(0,n.jsx)(t.td,{children:`string`}),(0,n.jsx)(t.td,{})]})})]}),`
`,(0,n.jsx)(t.h5,{id:`ошибки-6`,children:`Ошибки:`}),`
`,(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`Тип`}),(0,n.jsx)(t.th,{children:`Описание`})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`\\JsonException`}),(0,n.jsx)(t.td,{children:`Исключение, выбрасываемое при ошибках обработки JSON (возможные ошибки в логе или настройках переводчика).`})]})})]}),`
`,(0,n.jsx)(t.h5,{id:`возвращает-10`,children:`Возвращает:`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`string`})})})})}),`
`,(0,n.jsx)(t.p,{children:`Переведённая строка.`}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsx)(`span`,{id:`method_getTranslationPlural`}),`
`,(0,n.jsx)(t.h3,{id:`gettranslationplural`,children:`getTranslationPlural`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`static public getTranslationPlural(string  phrase, int  count) : string`})})})})}),`
`,(0,n.jsx)(t.h5,{id:`краткое-содержание-11`,children:`Краткое содержание`}),`
`,(0,n.jsx)(t.p,{children:`Возвращает переведённую фразу с учётом параметров множественного числа/склонения.`}),`
`,(0,n.jsx)(t.h5,{id:`описание-8`,children:`Описание`}),`
`,(0,n.jsxs)(t.p,{children:[`Делегирует обработку перевода методу `,(0,n.jsx)(t.code,{children:`getTranslationPluralWithParameters`}),`, передавая
пустой массив параметров в качестве третьего аргумента.`]}),`
`,(0,n.jsx)(t.h5,{id:`смотри-так-же-9`,children:`Смотри так-же:`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`#method_getTranslationPluralWithParameters`,children:`\\getTranslationPluralWithParameters()`})}),`
`]}),`
`,(0,n.jsx)(t.h5,{id:`свойства-7`,children:`Свойства:`}),`
`,(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`Название`}),(0,n.jsx)(t.th,{children:`Тип`}),(0,n.jsx)(t.th,{children:`По умолчанию`})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:`$phrase`})}),(0,n.jsx)(t.td,{children:`string`}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:`$count`})}),(0,n.jsx)(t.td,{children:`int`}),(0,n.jsx)(t.td,{})]})]})]}),`
`,(0,n.jsx)(t.h5,{id:`ошибки-7`,children:`Ошибки:`}),`
`,(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`Тип`}),(0,n.jsx)(t.th,{children:`Описание`})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`\\JsonException`}),(0,n.jsx)(t.td,{children:`Если в процессе выполнения произошла ошибка обработки JSON.`})]})})]}),`
`,(0,n.jsx)(t.h5,{id:`возвращает-11`,children:`Возвращает:`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`string`})})})})}),`
`,(0,n.jsx)(t.p,{children:`Переведённая строка с учётом параметров множественного числа/склонения.`}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsx)(`span`,{id:`method_getTranslationPluralWithParameters`}),`
`,(0,n.jsx)(t.h3,{id:`gettranslationpluralwithparameters`,children:`getTranslationPluralWithParameters`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`static public getTranslationPluralWithParameters(string  phrase, int  count, array  parameters) : string`})})})})}),`
`,(0,n.jsx)(t.h5,{id:`краткое-содержание-12`,children:`Краткое содержание`}),`
`,(0,n.jsx)(t.p,{children:`Возвращает переведённую фразу с параметрами множественного числа, учитывая склонения, с дополнительной
поддержкой параметров.`}),`
`,(0,n.jsx)(t.h5,{id:`смотри-так-же-10`,children:`Смотри так-же:`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`#property_translator`,children:`\\MhTranslation::$translator`})}),`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`#method_isUseTranslator`,children:`\\MhTranslation::isUseTranslator()`})}),`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`#method_setTranslator`,children:`\\MhTranslation::setTranslator()`})}),`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`#method_getTranslationWithParameters`,children:`\\MhTranslation::getTranslationWithParameters()`})}),`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`#method_nonTranslator`,children:`\\MhTranslation::nonTranslator()`})}),`
`]}),`
`,(0,n.jsx)(t.h5,{id:`свойства-8`,children:`Свойства:`}),`
`,(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`Название`}),(0,n.jsx)(t.th,{children:`Тип`}),(0,n.jsx)(t.th,{children:`По умолчанию`})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:`$phrase`})}),(0,n.jsx)(t.td,{children:`string`}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:`$count`})}),(0,n.jsx)(t.td,{children:`int`}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:`$parameters`})}),(0,n.jsx)(t.td,{children:`array`}),(0,n.jsx)(t.td,{})]})]})]}),`
`,(0,n.jsx)(t.h5,{id:`ошибки-8`,children:`Ошибки:`}),`
`,(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`Тип`}),(0,n.jsx)(t.th,{children:`Описание`})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`\\JsonException`}),(0,n.jsx)(t.td,{children:`Если возникает ошибка при обработке JSON данных.`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`\\Throwable`}),(0,n.jsx)(t.td,{})]})]})]}),`
`,(0,n.jsx)(t.h5,{id:`возвращает-12`,children:`Возвращает:`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`string`})})})})}),`
`,(0,n.jsx)(t.p,{children:`Переведённая фраза с учетом склонений и параметров.`}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsx)(`span`,{id:`method_getTranslationWithParameters`}),`
`,(0,n.jsx)(t.h3,{id:`gettranslationwithparameters`,children:`getTranslationWithParameters`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`static public getTranslationWithParameters(string  phrase, array  parameters) : string`})})})})}),`
`,(0,n.jsx)(t.h5,{id:`краткое-содержание-13`,children:`Краткое содержание`}),`
`,(0,n.jsx)(t.p,{children:`Возвращает переведённую фразу с установленными параметрами.`}),`
`,(0,n.jsx)(t.h5,{id:`описание-9`,children:`Описание`}),`
`,(0,n.jsxs)(t.p,{children:[`Перевод осуществляется с использованием зарегистрированного переводчика.
Если переводчик не установлен, он инициализируется вызовом метода `,(0,n.jsx)(t.code,{children:`setTranslator`}),`.
Если использование переводчика отключено, возвращается результат без перевода.`]}),`
`,(0,n.jsx)(t.h5,{id:`смотри-так-же-11`,children:`Смотри так-же:`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`#property_translator`,children:`\\MhTranslation::$translator`})}),`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`#method_isUseTranslator`,children:`\\MhTranslation::isUseTranslator`})}),`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`#method_nonTranslator`,children:`\\MhTranslation::nonTranslator`})}),`
`]}),`
`,(0,n.jsx)(t.h5,{id:`свойства-9`,children:`Свойства:`}),`
`,(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`Название`}),(0,n.jsx)(t.th,{children:`Тип`}),(0,n.jsx)(t.th,{children:`По умолчанию`})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:`$phrase`})}),(0,n.jsx)(t.td,{children:`string`}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:`$parameters`})}),(0,n.jsx)(t.td,{children:`array`}),(0,n.jsx)(t.td,{})]})]})]}),`
`,(0,n.jsx)(t.h5,{id:`ошибки-9`,children:`Ошибки:`}),`
`,(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`Тип`}),(0,n.jsx)(t.th,{children:`Описание`})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`\\JsonException`}),(0,n.jsx)(t.td,{children:`В случае возникновения ошибки при работе с переводчиком.`})]})})]}),`
`,(0,n.jsx)(t.h5,{id:`возвращает-13`,children:`Возвращает:`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`string`})})})})}),`
`,(0,n.jsx)(t.p,{children:`Переведённая фраза или исходная строка при отключённом переводчике.`}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsx)(`span`,{id:`method_getTranslator`}),`
`,(0,n.jsx)(t.h3,{id:`gettranslator`,children:`getTranslator`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`static public getTranslator() : \\Translator|null`})})})})}),`
`,(0,n.jsx)(t.h5,{id:`краткое-содержание-14`,children:`Краткое содержание`}),`
`,(0,n.jsx)(t.p,{children:`Возвращает экземпляр переводчика, связанный с текущим модулем.`}),`
`,(0,n.jsx)(t.h5,{id:`описание-10`,children:`Описание`}),`
`,(0,n.jsx)(t.p,{children:`Если модуль передан как параметр, то он устанавливается перед получением переводчика.
Если переводчик ещё не установлен, он будет автоматически инициализирован для текущего модуля.`}),`
`,(0,n.jsx)(t.h5,{id:`смотри-так-же-12`,children:`Смотри так-же:`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`#property_translator`,children:`\\MhTranslation::$translator`})}),`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`#method_setTranslator()`,children:`\\MhTranslation::setTranslator()`})}),`
`]}),`
`,(0,n.jsx)(t.h5,{id:`ошибки-10`,children:`Ошибки:`}),`
`,(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`Тип`}),(0,n.jsx)(t.th,{children:`Описание`})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`\\Throwable`}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`\\JsonException`}),(0,n.jsx)(t.td,{children:`Генерируется при ошибках работы с JSON во внутренних методах.`})]})]})]}),`
`,(0,n.jsx)(t.h5,{id:`возвращает-14`,children:`Возвращает:`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`\\Translator|null`})})})})}),`
`,(0,n.jsx)(t.p,{children:`Экземпляр переводчика или null, если переводчик не установлен.`}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsx)(`span`,{id:`method_isUseTranslator`}),`
`,(0,n.jsx)(t.h3,{id:`isusetranslator`,children:`isUseTranslator`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`static public isUseTranslator() : bool`})})})})}),`
`,(0,n.jsx)(t.h5,{id:`краткое-содержание-15`,children:`Краткое содержание`}),`
`,(0,n.jsx)(t.p,{children:`Проверяет, используется ли переводчик.`}),`
`,(0,n.jsx)(t.h5,{id:`описание-11`,children:`Описание`}),`
`,(0,n.jsxs)(t.p,{children:[`Метод проверяет, инициализирован ли статический переводчик
(`,(0,n.jsx)(t.code,{children:`self::$translator`}),`). Если переменная не равна null, значит переводчик
используется.`]}),`
`,(0,n.jsx)(t.h5,{id:`возвращает-15`,children:`Возвращает:`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`bool`})})})})}),`
`,(0,n.jsx)(t.p,{children:`Возвращает true, если переводчик задан; иначе false.`}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsx)(`span`,{id:`method_load_data`}),`
`,(0,n.jsx)(t.h3,{id:`load_data`,children:`load_data`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`public load_data(string  name, mixed  ..._vars) : array`})})})})}),`
`,(0,n.jsx)(t.h5,{id:`краткое-содержание-16`,children:`Краткое содержание`}),`
`,(0,n.jsx)(t.p,{children:`Метод загружает данные из базы данных с использованием механизма кеширования.`}),`
`,(0,n.jsx)(t.h5,{id:`описание-12`,children:`Описание`}),`
`,(0,n.jsx)(t.p,{children:`Если данные уже закешированы, то они возвращаются из кеша, иначе выполняется запрос
к базе данных, формируется кеш и результат сохраняется на диск.`}),`
`,(0,n.jsx)(t.h5,{id:`смотри-так-же-13`,children:`Смотри так-же:`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`./DataManager#method_getDb`,children:`\\DataManager::getDb()`})}),`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`./DataManager#method_nameArgs`,children:`\\DataManager::nameArgs()`})}),`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`./DataManager#method_getComparer`,children:`\\DataManager::getComparer()`})}),`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`./DataManager#method_getConfig`,children:`\\DataManager::getConfig()`})}),`
`]}),`
`,(0,n.jsx)(t.h5,{id:`свойства-10`,children:`Свойства:`}),`
`,(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`Название`}),(0,n.jsx)(t.th,{children:`Тип`}),(0,n.jsx)(t.th,{children:`По умолчанию`})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:`$name`})}),(0,n.jsx)(t.td,{children:`string`}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:`$_vars`})}),(0,n.jsx)(t.td,{children:`mixed`}),(0,n.jsx)(t.td,{})]})]})]}),`
`,(0,n.jsx)(t.h5,{id:`ошибки-11`,children:`Ошибки:`}),`
`,(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`Тип`}),(0,n.jsx)(t.th,{children:`Описание`})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`\\JsonException`}),(0,n.jsx)(t.td,{children:`В случае JSON-ошибок при работе с кешем.`})]})})]}),`
`,(0,n.jsx)(t.h5,{id:`возвращает-16`,children:`Возвращает:`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`array`})})})})}),`
`,(0,n.jsx)(t.p,{children:`Результат выборки из базы данных, либо из кеша.`}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsx)(`span`,{id:`method_setCacheFolder`}),`
`,(0,n.jsx)(t.h3,{id:`setcachefolder`,children:`setCacheFolder`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`public setCacheFolder(string  cache_folder) : void`})})})})}),`
`,(0,n.jsx)(t.h5,{id:`свойства-11`,children:`Свойства:`}),`
`,(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`Название`}),(0,n.jsx)(t.th,{children:`Тип`}),(0,n.jsx)(t.th,{children:`По умолчанию`})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:`$cache_folder`})}),(0,n.jsx)(t.td,{children:`string`}),(0,n.jsx)(t.td,{})]})})]}),`
`,(0,n.jsx)(t.h5,{id:`возвращает-17`,children:`Возвращает:`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`void`})})})})}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsx)(`span`,{id:`method_setLocale`}),`
`,(0,n.jsx)(t.h3,{id:`setlocale`,children:`setLocale`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`static public setLocale(string  locale) : void`})})})})}),`
`,(0,n.jsx)(t.h5,{id:`краткое-содержание-17`,children:`Краткое содержание`}),`
`,(0,n.jsx)(t.p,{children:`Устанавливает локаль для приложения.`}),`
`,(0,n.jsx)(t.h5,{id:`свойства-12`,children:`Свойства:`}),`
`,(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`Название`}),(0,n.jsx)(t.th,{children:`Тип`}),(0,n.jsx)(t.th,{children:`По умолчанию`})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:`$locale`})}),(0,n.jsx)(t.td,{children:`string`}),(0,n.jsx)(t.td,{})]})})]}),`
`,(0,n.jsx)(t.h5,{id:`возвращает-18`,children:`Возвращает:`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`void`})})})})}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsx)(`span`,{id:`method_setLocalizationPath`}),`
`,(0,n.jsx)(t.h3,{id:`setlocalizationpath`,children:`setLocalizationPath`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`static public setLocalizationPath(string  localization_path) : void`})})})})}),`
`,(0,n.jsx)(t.h5,{id:`краткое-содержание-18`,children:`Краткое содержание`}),`
`,(0,n.jsx)(t.p,{children:`Устанавливает путь до переводимых фраз`}),`
`,(0,n.jsx)(t.h5,{id:`свойства-13`,children:`Свойства:`}),`
`,(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`Название`}),(0,n.jsx)(t.th,{children:`Тип`}),(0,n.jsx)(t.th,{children:`По умолчанию`})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:`$localization_path`})}),(0,n.jsx)(t.td,{children:`string`}),(0,n.jsx)(t.td,{})]})})]}),`
`,(0,n.jsx)(t.h5,{id:`возвращает-19`,children:`Возвращает:`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`void`})})})})}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsx)(`span`,{id:`method_setPrefix`}),`
`,(0,n.jsx)(t.h3,{id:`setprefix`,children:`setPrefix`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`public setPrefix(string|null  name = null) : void`})})})})}),`
`,(0,n.jsx)(t.h5,{id:`краткое-содержание-19`,children:`Краткое содержание`}),`
`,(0,n.jsx)(t.p,{children:`Устанавливает префикс для использования в загрузке данных.`}),`
`,(0,n.jsx)(t.h5,{id:`описание-13`,children:`Описание`}),`
`,(0,n.jsxs)(t.p,{children:[`Если переданное имя соответствует значениям "users" или "usergroup",
то префикс устанавливается в значение константы `,(0,n.jsx)(t.code,{children:`USERPREFIX`}),`.
В противном случае используется значение по умолчанию из константы `,(0,n.jsx)(t.code,{children:`PREFIX`}),`.`]}),`
`,(0,n.jsx)(t.h5,{id:`свойства-14`,children:`Свойства:`}),`
`,(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`Название`}),(0,n.jsx)(t.th,{children:`Тип`}),(0,n.jsx)(t.th,{children:`По умолчанию`})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:`$name`})}),(0,n.jsx)(t.td,{children:`string|null`}),(0,n.jsx)(t.td,{children:`null`})]})})]}),`
`,(0,n.jsx)(t.h5,{id:`возвращает-20`,children:`Возвращает:`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`void`})})})})}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsx)(`span`,{id:`method_setTranslator`}),`
`,(0,n.jsx)(t.h3,{id:`settranslator`,children:`setTranslator`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`static public setTranslator() : void`})})})})}),`
`,(0,n.jsx)(t.h5,{id:`краткое-содержание-20`,children:`Краткое содержание`}),`
`,(0,n.jsx)(t.p,{children:`Устанавливает переводчик для модуля с заданными настройками.`}),`
`,(0,n.jsx)(t.h5,{id:`описание-14`,children:`Описание`}),`
`,(0,n.jsx)(t.p,{children:`Использует параметры из конфигурации для настройки локализации,
загрузки переводов и их применения.`}),`
`,(0,n.jsx)(t.h5,{id:`смотри-так-же-14`,children:`Смотри так-же:`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`./DataManager#method_getConfig`,children:`\\DataManager::getConfig()`})}),`
`]}),`
`,(0,n.jsx)(t.h5,{id:`ошибки-12`,children:`Ошибки:`}),`
`,(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`Тип`}),(0,n.jsx)(t.th,{children:`Описание`})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`\\JsonException|\\Throwable`}),(0,n.jsx)(t.td,{children:`Если возникла ошибка при работе с JSON-файлами.`})]})})]}),`
`,(0,n.jsx)(t.h5,{id:`возвращает-21`,children:`Возвращает:`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`void`})})})})}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsx)(`span`,{id:`method_setUseTranslator`}),`
`,(0,n.jsx)(t.h3,{id:`setusetranslator`,children:`setUseTranslator`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`static public setUseTranslator(bool  use_translator) : void`})})})})}),`
`,(0,n.jsx)(t.h5,{id:`краткое-содержание-21`,children:`Краткое содержание`}),`
`,(0,n.jsx)(t.p,{children:`Устанавливает использование переводчика.`}),`
`,(0,n.jsx)(t.h5,{id:`свойства-15`,children:`Свойства:`}),`
`,(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`Название`}),(0,n.jsx)(t.th,{children:`Тип`}),(0,n.jsx)(t.th,{children:`По умолчанию`})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:`$use_translator`})}),(0,n.jsx)(t.td,{children:`bool`}),(0,n.jsx)(t.td,{})]})})]}),`
`,(0,n.jsx)(t.h5,{id:`возвращает-22`,children:`Возвращает:`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`void`})})})})}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsx)(`span`,{id:`method_generateJsTranslationContent`}),`
`,(0,n.jsx)(t.h3,{id:`generatejstranslationcontent`,children:`generateJsTranslationContent`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`static private generateJsTranslationContent(array  translations) : string`})})})})}),`
`,(0,n.jsx)(t.h5,{id:`краткое-содержание-22`,children:`Краткое содержание`}),`
`,(0,n.jsx)(t.p,{children:`Генерирует содержимое JavaScript-файла с переводами на основе переданного массива переводов.`}),`
`,(0,n.jsx)(t.h5,{id:`свойства-16`,children:`Свойства:`}),`
`,(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`Название`}),(0,n.jsx)(t.th,{children:`Тип`}),(0,n.jsx)(t.th,{children:`По умолчанию`})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:`$translations`})}),(0,n.jsx)(t.td,{children:`array`}),(0,n.jsx)(t.td,{})]})})]}),`
`,(0,n.jsx)(t.h5,{id:`возвращает-23`,children:`Возвращает:`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`string`})})})})}),`
`,(0,n.jsx)(t.p,{children:`Содержимое для JavaScript, включающее объект переводов и экспорт по умолчанию.`}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsx)(`span`,{id:`method_getTranslationArray`}),`
`,(0,n.jsx)(t.h3,{id:`gettranslationarray`,children:`getTranslationArray`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`static private getTranslationArray() : array`})})})})}),`
`,(0,n.jsx)(t.h5,{id:`краткое-содержание-23`,children:`Краткое содержание`}),`
`,(0,n.jsx)(t.p,{children:`Возвращает массив переводов из XLIFF файла в виде ассоциативного массива,
где ключами являются исходные строки, а значениями — переведённые строки.`}),`
`,(0,n.jsx)(t.h5,{id:`описание-15`,children:`Описание`}),`
`,(0,n.jsx)(t.p,{children:`Если файл перевода отсутствует или возникает ошибка при его обработке,
возвращается пустой массив. Реализована поддержка кеширования для ускорения
получения данных при последующих вызовах.`}),`
`,(0,n.jsx)(t.h5,{id:`смотри-так-же-15`,children:`Смотри так-же:`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`./DataManager#method_normalizePath`,children:`\\DataManager::normalizePath()`})}),`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`./LogGenerator#method_generateLog`,children:`\\LogGenerator::generateLog()`})}),`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`./CacheControl#method_getCache`,children:`\\CacheControl::getCache()`})}),`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`./CacheControl#method_setCache`,children:`\\CacheControl::setCache()`})}),`
`]}),`
`,(0,n.jsx)(t.h5,{id:`ошибки-13`,children:`Ошибки:`}),`
`,(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`Тип`}),(0,n.jsx)(t.th,{children:`Описание`})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`\\JsonException`}),(0,n.jsx)(t.td,{children:`Исключение при ошибке работы с JSON при кэшировании.`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`\\Throwable`}),(0,n.jsx)(t.td,{children:`Исключение при неизвестной ошибке в процессе обработки файла.`})]})]})]}),`
`,(0,n.jsx)(t.h5,{id:`возвращает-24`,children:`Возвращает:`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`array`})})})})}),`
`,(0,n.jsx)(t.p,{children:`Ассоциативный массив переводов.`}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsx)(`span`,{id:`method_languageList`}),`
`,(0,n.jsx)(t.h3,{id:`languagelist`,children:`languageList`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`static private languageList(string  lang) : array`})})})})}),`
`,(0,n.jsx)(t.h5,{id:`краткое-содержание-24`,children:`Краткое содержание`}),`
`,(0,n.jsx)(t.p,{children:`Возвращает массив данных о языке на основе переданного кода языка.`}),`
`,(0,n.jsx)(t.h5,{id:`смотри-так-же-16`,children:`Смотри так-же:`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`../index#function___`,children:`__`})}),`
`]}),`
`,(0,n.jsx)(t.h5,{id:`свойства-17`,children:`Свойства:`}),`
`,(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`Название`}),(0,n.jsx)(t.th,{children:`Тип`}),(0,n.jsx)(t.th,{children:`По умолчанию`})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:`$lang`})}),(0,n.jsx)(t.td,{children:`string`}),(0,n.jsx)(t.td,{})]})})]}),`
`,(0,n.jsx)(t.h5,{id:`возвращает-25`,children:`Возвращает:`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`array`})})})})}),`
`,(0,n.jsx)(t.p,{children:`Ассоциативный массив с данными о языке. Содержит следующие ключи:`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`original`}),` (string): Название языка на его родном языке.`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`english`}),` (string): Название языка на английском.`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`iso2`}),` (string): Код ISO 639-1 языка.`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`tag`}),` (string): Полный тег языка.`]}),`
`]}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsx)(`span`,{id:`method_nonTranslator`}),`
`,(0,n.jsx)(t.h3,{id:`nontranslator`,children:`nonTranslator`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`static private nonTranslator(string  phrase, array  params = []) : string`})})})})}),`
`,(0,n.jsx)(t.h5,{id:`краткое-содержание-25`,children:`Краткое содержание`}),`
`,(0,n.jsx)(t.p,{children:`Заменяет плейсхолдеры в строке на указанные значения.`}),`
`,(0,n.jsx)(t.h5,{id:`описание-16`,children:`Описание`}),`
`,(0,n.jsx)(t.p,{children:`Метод принимает строку и массив пар "ключ-значение", где каждый ключ - это плейсхолдер,
который заменяется соответствующим значением в строке.`}),`
`,(0,n.jsx)(t.h5,{id:`свойства-18`,children:`Свойства:`}),`
`,(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`Название`}),(0,n.jsx)(t.th,{children:`Тип`}),(0,n.jsx)(t.th,{children:`По умолчанию`})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:`$phrase`})}),(0,n.jsx)(t.td,{children:`string`}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:`$params`})}),(0,n.jsx)(t.td,{children:`array`}),(0,n.jsx)(t.td,{children:`[]`})]})]})]}),`
`,(0,n.jsx)(t.h5,{id:`возвращает-26`,children:`Возвращает:`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`string`})})})})}),`
`,(0,n.jsx)(t.p,{children:`Обработанная строка с произведёнными заменами.`}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsx)(`span`,{id:`method_parseXliffFile`}),`
`,(0,n.jsx)(t.h3,{id:`parsexlifffile`,children:`parseXliffFile`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`static private parseXliffFile(string  filePath) : array`})})})})}),`
`,(0,n.jsx)(t.h5,{id:`свойства-19`,children:`Свойства:`}),`
`,(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`Название`}),(0,n.jsx)(t.th,{children:`Тип`}),(0,n.jsx)(t.th,{children:`По умолчанию`})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:`$filePath`})}),(0,n.jsx)(t.td,{children:`string`}),(0,n.jsx)(t.td,{})]})})]}),`
`,(0,n.jsx)(t.h5,{id:`возвращает-27`,children:`Возвращает:`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`array`})})})})}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsx)(`span`,{id:`method_set_cache`}),`
`,(0,n.jsx)(t.h3,{id:`set_cache`,children:`set_cache`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`private set_cache(string  type, string  name, mixed  data) : void`})})})})}),`
`,(0,n.jsx)(t.h5,{id:`краткое-содержание-26`,children:`Краткое содержание`}),`
`,(0,n.jsx)(t.p,{children:`Сохраняет данные в кеш.`}),`
`,(0,n.jsx)(t.h5,{id:`описание-17`,children:`Описание`}),`
`,(0,n.jsxs)(t.p,{children:[`Метод записывает данные в кеш, используя указанный тип и имя.
Для сохранения данных вызывается метод `,(0,n.jsx)(t.code,{children:`CacheControl::setCache`}),`, который
обрабатывает директорию и имя файла, записывает данные в формате JSON
и устанавливает необходимые права доступа к файлу.`]}),`
`,(0,n.jsx)(t.h5,{id:`смотри-так-же-17`,children:`Смотри так-же:`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`./CacheControl#method_setCache`,children:`\\CacheControl::setCache()`})}),`
`]}),`
`,(0,n.jsx)(t.h5,{id:`свойства-20`,children:`Свойства:`}),`
`,(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`Название`}),(0,n.jsx)(t.th,{children:`Тип`}),(0,n.jsx)(t.th,{children:`По умолчанию`})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:`$type`})}),(0,n.jsx)(t.td,{children:`string`}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:`$name`})}),(0,n.jsx)(t.td,{children:`string`}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:`$data`})}),(0,n.jsx)(t.td,{children:`mixed`}),(0,n.jsx)(t.td,{})]})]})]}),`
`,(0,n.jsx)(t.h5,{id:`ошибки-14`,children:`Ошибки:`}),`
`,(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`Тип`}),(0,n.jsx)(t.th,{children:`Описание`})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`\\JsonException`}),(0,n.jsx)(t.td,{})]})})]}),`
`,(0,n.jsx)(t.h5,{id:`возвращает-28`,children:`Возвращает:`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`void`})})})})}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsx)(`span`,{id:`method_writeJsFile`}),`
`,(0,n.jsx)(t.h3,{id:`writejsfile`,children:`writeJsFile`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`static private writeJsFile(string  path, string  content) : bool`})})})})}),`
`,(0,n.jsx)(t.h5,{id:`краткое-содержание-27`,children:`Краткое содержание`}),`
`,(0,n.jsx)(t.p,{children:`Записывает переданное содержимое в указанный файл JavaScript.`}),`
`,(0,n.jsx)(t.h5,{id:`описание-18`,children:`Описание`}),`
`,(0,n.jsx)(t.p,{children:`В случае неуспешной записи генерирует критический лог с использованием метода LogGenerator::generateLog.`}),`
`,(0,n.jsx)(t.h5,{id:`смотри-так-же-18`,children:`Смотри так-же:`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`./LogGenerator#method_generateLog`,children:`\\LogGenerator::generateLog()`})}),`
`]}),`
`,(0,n.jsx)(t.h5,{id:`свойства-21`,children:`Свойства:`}),`
`,(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`Название`}),(0,n.jsx)(t.th,{children:`Тип`}),(0,n.jsx)(t.th,{children:`По умолчанию`})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:`$path`})}),(0,n.jsx)(t.td,{children:`string`}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:`$content`})}),(0,n.jsx)(t.td,{children:`string`}),(0,n.jsx)(t.td,{})]})]})]}),`
`,(0,n.jsx)(t.h5,{id:`ошибки-15`,children:`Ошибки:`}),`
`,(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`Тип`}),(0,n.jsx)(t.th,{children:`Описание`})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`\\Throwable`}),(0,n.jsx)(t.td,{})]})})]}),`
`,(0,n.jsx)(t.h5,{id:`возвращает-29`,children:`Возвращает:`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`bool`})})})})}),`
`,(0,n.jsx)(t.p,{children:`Возвращает true, если запись прошла успешно, или false, если возникла ошибка.`})]})}function l(e={}){let{wrapper:t}=e.components||{};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}export{a as _markdown,l as default,r as frontmatter,i as lastModified,o as structuredData,s as toc};