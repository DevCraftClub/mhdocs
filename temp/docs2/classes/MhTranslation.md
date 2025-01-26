# Abstract Class: [\Default](../../packages/Default.md)\MhTranslation

## Summary:

Класс для оформления фраз переводов


---

### Properties
* private $[cache_folder](#property_cache_folder)
* private $[locale](#property_locale)
* private $[localization_path](#property_localization_path)
* private $[prefix](#property_prefix)
* private $[translator](#property_translator)
* private $[use_translator](#property_use_translator)

---

### Methods

* public [clear_cache()](#method_clear_cache)
* public [convertXliffToJs()](#method_convertXliffToJs)
* public [get_cache()](#method_get_cache)
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
* public [load_data()](#method_load_data)
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
* private [set_cache()](#method_set_cache)
* private [writeJsFile()](#method_writeJsFile)

---

### Details

* File: [engine/inc/maharder/_includes/classes/MhTranslation.php](../../engine/inc/maharder/_includes/classes/MhTranslation.php)
* Uses Traits:
  * [\DataLoader](../classes/DataLoader.md)

---

## Properties
<a id="property_cache_folder"></a>
#### private $cache_folder : string
---
**Summary**

Папка кеша

**Type:** <a href="../string"><abbr title="string">string</abbr></a>

**Details:**


<a id="property_locale"></a>
#### private $locale : ?string
---
**Summary**

Название локали

**Type:** <a href="../?string"><abbr title="?string">?string</abbr></a>

**Details:**

##### Tags
| Tag | Version | Description |
| --- | ------- | ----------- |
| version | 173.3.0 |  |
| since | 173.3.0 |  |

<a id="property_localization_path"></a>
#### private $localization_path : ?string
---
**Summary**

Путь до фраз перевода

**Type:** <a href="../?string"><abbr title="?string">?string</abbr></a>

**Details:**

##### Tags
| Tag | Version | Description |
| --- | ------- | ----------- |
| version | 173.3.0 |  |
| since | 173.3.0 |  |

<a id="property_prefix"></a>
#### private $prefix : ?string
---
**Type:** <a href="../?string"><abbr title="?string">?string</abbr></a>

**Details:**


<a id="property_translator"></a>
#### private $translator : ?\Symfony\Component\Translation\Translator
---
**Summary**

Класс переводчика

**Type:** <a href="../?\Symfony\Component\Translation\Translator"><abbr title="?\Symfony\Component\Translation\Translator">Translator</abbr></a>

**Details:**

##### Tags
| Tag | Version | Description |
| --- | ------- | ----------- |
| version | 173.3.0 |  |
| since | 173.3.0 |  |

<a id="property_use_translator"></a>
#### private $use_translator : bool
---
**Type:** <a href="../bool"><abbr title="bool">bool</abbr></a>

**Details:**



---

## Methods

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

<a id="method_convertXliffToJs"></a>
### convertXliffToJs

```
static public convertXliffToJs() : void
```

##### Summary

Преобразует XLIFF-файлы переводов в JavaScript-файлы для поддержки локализации на клиентской стороне.

##### Description

Метод перебирает доступные языки из функции {@see}, кэширует переводы,
преобразует их из XLIFF-файлов и генерирует JavaScript-файлы с переводами.
Если переводы не найдены или директория переводов отсутствует, генерируется лог ошибки.

##### See Also:

 * [\LogGenerator::generateLog()](../../classes/LogGenerator.md#method_generateLog)
 * [\self::getLanguages()](../\self::getLanguages())
 * [\CacheControl::getCache()](../../classes/CacheControl.md#method_getCache)
 * [\DataManager::normalizePath()](../../classes/DataManager.md#method_normalizePath)
 * [\DataManager::dirToArray()](../../classes/DataManager.md#method_dirToArray)

##### Throws:

| Type | Description |
|------|-------------|
| \JsonException|\Throwable |  |

##### Returns:

```
void
```

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

<a id="method_getFormattedLanguageList"></a>
### getFormattedLanguageList

```
static public getFormattedLanguageList(string|null  format = &#039;{original} ({english})&#039;) : array
```

##### Summary

Возвращает отформатированный список языков с заданным шаблоном формата.

##### Description

Поддерживаемые подстановочные шаблоны в строке формата:
- `{original}` - заменяется на переведённое название языка.
- `{english}` - заменяется на английское название языка.
- `{iso2}` - заменяется на двузначный код языка (например: `ru`).
- `{tag}` - заменяется на код языка (например: `ru_RU`).
Если формат не указан, по умолчанию используется шаблон: &quot;{original} ({english})&quot;.

##### See Also:

 * [\self::getLanguages()](../\self::getLanguages())

##### Parameters:

| Name | Type | Default |
|------|------|---------|
| **$format** | string|null | &#039;{original} ({english})&#039; |

##### Throws:

| Type | Description |
|------|-------------|
| \JsonException | Выбрасывается в случае ошибок при JSON-операциях. |
| \Throwable |  |

##### Returns:

```
array
```
Возвращает массив языков, где каждый элемент содержит:
- `tag` - код языка,
- `name` - сгенерированное название языка на основе переданного формата.

---

<a id="method_getLanguages"></a>
### getLanguages

```
static public getLanguages() : array
```

##### Summary

Получает список доступных языков.

##### Description

Метод проверяет наличие кэша для списка языков.
Если кэш отсутствует, формирует список языков на основе содержимого директории локализаций.
Полученные данные сохраняются в кэше для последующего использования.

##### See Also:

 * [\CacheControl::setCache()](../../classes/CacheControl.md#method_setCache)
 * [\CacheControl::getCache()](../../classes/CacheControl.md#method_getCache)

##### Throws:

| Type | Description |
|------|-------------|
| \JsonException|\Throwable | Возникает при ошибке декодирования JSON в момент работы с кэшем. |

##### Returns:

```
array
```
Массив доступных языков, где ключ — идентификатор языка, а значение — данные языка.

---

<a id="method_getLocale"></a>
### getLocale

```
static public getLocale() : string
```

##### Summary

Возвращает текущую локаль или значение по умолчанию (&#039;ru_RU&#039;), если локаль не определена.

##### Returns:

```
string
```
Текущая локаль или значение по умолчанию (&#039;ru_RU&#039;).

---

<a id="method_getLocaleData"></a>
### getLocaleData

```
static public getLocaleData(string  locale) : array
```

##### Summary

Возвращает локализованные данные для указанного языка.

##### See Also:

 * [\self::getLanguages()](../\self::getLanguages())

##### Parameters:

| Name | Type | Default |
|------|------|---------|
| **$locale** | string |  |

##### Throws:

| Type | Description |
|------|-------------|
| \JsonException | Если возникли ошибки при декодировании JSON-данных. |
| \Throwable | Если возникают ошибки при работе с кешем или файловой системой. |

##### Returns:

```
array
```
Массив данных локализации для указанного языка.

---

<a id="method_getLocalizationPath"></a>
### getLocalizationPath

```
static public getLocalizationPath() : string|null
```

##### Summary

Получает путь к локализации приложения.

##### Description

Метод возвращает путь к директории с файлами локализации. Если путь ранее
не был установлен или пуст, он загружается из конфигурации `mhadmin` и
по умолчанию указывает на директорию `/engine/inc/maharder/_locales`.

##### See Also:

 * [\DataManager::getConfig()](../../classes/DataManager.md#method_getConfig)
 * [\self::$localization_path](../\self::$localization_path)

##### Throws:

| Type | Description |
|------|-------------|
| \JsonException | Если возникает ошибка при загрузке конфигурации. |

##### Returns:

```
string|null
```
Полный путь к локализации, или null, если ROOT_DIR не определён.

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

<a id="method_getTranslation"></a>
### getTranslation

```
static public getTranslation(string  phrase) : string
```

##### Summary

Возвращает переведённую фразу.

##### Description

Метод использует функцию `getTranslationWithParameters` для получения перевода
без указания дополнительных параметров.

##### See Also:

 * [\self::getTranslationWithParameters](../\self::getTranslationWithParameters)

##### Parameters:

| Name | Type | Default |
|------|------|---------|
| **$phrase** | string |  |

##### Throws:

| Type | Description |
|------|-------------|
| \JsonException | Исключение, выбрасываемое при ошибках обработки JSON
(возможные ошибки в логе или настройках переводчика). |

##### Returns:

```
string
```
Переведённая строка.

---

<a id="method_getTranslationPlural"></a>
### getTranslationPlural

```
static public getTranslationPlural(string  phrase, int  count) : string
```

##### Summary

Возвращает переведённую фразу с учётом параметров множественного числа/склонения.

##### Description

Делегирует обработку перевода методу `getTranslationPluralWithParameters`, передавая
пустой массив параметров в качестве третьего аргумента.

##### See Also:

 * [\getTranslationPluralWithParameters()](../\getTranslationPluralWithParameters())

##### Parameters:

| Name | Type | Default |
|------|------|---------|
| **$phrase** | string |  |
| **$count** | int |  |

##### Throws:

| Type | Description |
|------|-------------|
| \JsonException | Если в процессе выполнения произошла ошибка обработки JSON. |

##### Returns:

```
string
```
Переведённая строка с учётом параметров множественного числа/склонения.

---

<a id="method_getTranslationPluralWithParameters"></a>
### getTranslationPluralWithParameters

```
static public getTranslationPluralWithParameters(string  phrase, int  count, array  parameters) : string
```

##### Summary

Возвращает переведённую фразу с параметрами множественного числа, учитывая склонения, с дополнительной
поддержкой параметров.

##### See Also:

 * [\self::$translator](../\self::$translator)
 * [\self::isUseTranslator()](../\self::isUseTranslator())
 * [\self::setTranslator()](../\self::setTranslator())
 * [\self::getTranslationWithParameters()](../\self::getTranslationWithParameters())
 * [\self::nonTranslator()](../\self::nonTranslator())

##### Parameters:

| Name | Type | Default |
|------|------|---------|
| **$phrase** | string |  |
| **$count** | int |  |
| **$parameters** | array |  |

##### Throws:

| Type | Description |
|------|-------------|
| \JsonException | Если возникает ошибка при обработке JSON данных. |
| \Throwable |  |

##### Returns:

```
string
```
Переведённая фраза с учетом склонений и параметров.

---

<a id="method_getTranslationWithParameters"></a>
### getTranslationWithParameters

```
static public getTranslationWithParameters(string  phrase, array  parameters) : string
```

##### Summary

Возвращает переведённую фразу с установленными параметрами.

##### Description

Перевод осуществляется с использованием зарегистрированного переводчика.
Если переводчик не установлен, он инициализируется вызовом метода `setTranslator`.
Если использование переводчика отключено, возвращается результат без перевода.

##### See Also:

 * [\self::$translator](../\self::$translator)
 * [\self::isUseTranslator](../\self::isUseTranslator)
 * [\self::nonTranslator](../\self::nonTranslator)

##### Parameters:

| Name | Type | Default |
|------|------|---------|
| **$phrase** | string |  |
| **$parameters** | array |  |

##### Throws:

| Type | Description |
|------|-------------|
| \JsonException | В случае возникновения ошибки при работе с переводчиком. |

##### Returns:

```
string
```
Переведённая фраза или исходная строка при отключённом переводчике.

---

<a id="method_getTranslator"></a>
### getTranslator

```
static public getTranslator() : \Translator|null
```

##### Summary

Возвращает экземпляр переводчика, связанный с текущим модулем.

##### Description

Если модуль передан как параметр, то он устанавливается перед получением переводчика.
Если переводчик ещё не установлен, он будет автоматически инициализирован для текущего модуля.

##### See Also:

 * [\self::$translator](../\self::$translator)
 * [\self::setTranslator()](../\self::setTranslator())

##### Throws:

| Type | Description |
|------|-------------|
| \Throwable |  |
| \JsonException | Генерируется при ошибках работы с JSON во внутренних методах. |

##### Returns:

```
\Translator|null
```
Экземпляр переводчика или null, если переводчик не установлен.

---

<a id="method_isUseTranslator"></a>
### isUseTranslator

```
static public isUseTranslator() : bool
```

##### Summary

Проверяет, используется ли переводчик.

##### Description

Метод проверяет, инициализирован ли статический переводчик
(`self::$translator`). Если переменная не равна null, значит переводчик
используется.

##### Returns:

```
bool
```
Возвращает true, если переводчик задан; иначе false.

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

<a id="method_setLocale"></a>
### setLocale

```
static public setLocale(string  locale) : void
```

##### Summary

Устанавливает локаль для приложения.

##### Parameters:

| Name | Type | Default |
|------|------|---------|
| **$locale** | string |  |

##### Returns:

```
void
```

---

<a id="method_setLocalizationPath"></a>
### setLocalizationPath

```
static public setLocalizationPath(string  localization_path) : void
```

##### Summary

Устанавливает путь до переводимых фраз

##### Parameters:

| Name | Type | Default |
|------|------|---------|
| **$localization_path** | string |  |

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

<a id="method_setTranslator"></a>
### setTranslator

```
static public setTranslator() : void
```

##### Summary

Устанавливает переводчик для модуля с заданными настройками.

##### Description

Использует параметры из конфигурации для настройки локализации,
загрузки переводов и их применения.

##### See Also:

 * [\DataManager::getConfig()](../../classes/DataManager.md#method_getConfig)
 * [\Translator::setFallbackLocales()](../\Translator::setFallbackLocales())
 * [\Translator::addLoader()](../\Translator::addLoader())
 * [\Translator::addResource()](../\Translator::addResource())
 * [\ArrayLoader](../\ArrayLoader)

##### Throws:

| Type | Description |
|------|-------------|
| \JsonException|\Throwable | Если возникла ошибка при работе с JSON-файлами. |

##### Returns:

```
void
```

---

<a id="method_setUseTranslator"></a>
### setUseTranslator

```
static public setUseTranslator(bool  use_translator) : void
```

##### Summary

Устанавливает использование переводчика.

##### Parameters:

| Name | Type | Default |
|------|------|---------|
| **$use_translator** | bool |  |

##### Returns:

```
void
```

---

<a id="method_generateJsTranslationContent"></a>
### generateJsTranslationContent

```
static private generateJsTranslationContent(array  translations) : string
```

##### Summary

Генерирует содержимое JavaScript-файла с переводами на основе переданного массива переводов.

##### Parameters:

| Name | Type | Default |
|------|------|---------|
| **$translations** | array |  |

##### Returns:

```
string
```
Содержимое для JavaScript, включающее объект переводов и экспорт по умолчанию.

---

<a id="method_getTranslationArray"></a>
### getTranslationArray

```
static private getTranslationArray() : array
```

##### Summary

Возвращает массив переводов из XLIFF файла в виде ассоциативного массива,
где ключами являются исходные строки, а значениями — переведённые строки.

##### Description

Если файл перевода отсутствует или возникает ошибка при его обработке,
возвращается пустой массив. Реализована поддержка кеширования для ускорения
получения данных при последующих вызовах.

##### See Also:

 * [\DataManager::normalizePath()](../../classes/DataManager.md#method_normalizePath)
 * [\LogGenerator::generateLog()](../../classes/LogGenerator.md#method_generateLog)
 * [\CacheControl::getCache()](../../classes/CacheControl.md#method_getCache)
 * [\CacheControl::setCache()](../../classes/CacheControl.md#method_setCache)

##### Throws:

| Type | Description |
|------|-------------|
| \JsonException | Исключение при ошибке работы с JSON при кэшировании. |
| \Throwable | Исключение при неизвестной ошибке в процессе обработки файла. |

##### Returns:

```
array
```
Ассоциативный массив переводов.

---

<a id="method_languageList"></a>
### languageList

```
static private languageList(string  lang) : array
```

##### Summary

Возвращает массив данных о языке на основе переданного кода языка.

##### See Also:

 * [\__](../\__)

##### Parameters:

| Name | Type | Default |
|------|------|---------|
| **$lang** | string |  |

##### Returns:

```
array
```
Ассоциативный массив с данными о языке. Содержит следующие ключи:
- `original` (string): Название языка на его родном языке.
- `english` (string): Название языка на английском.
- `iso2` (string): Код ISO 639-1 языка.
- `tag` (string): Полный тег языка.

---

<a id="method_nonTranslator"></a>
### nonTranslator

```
static private nonTranslator(string  phrase, array  params = []) : string
```

##### Summary

Заменяет плейсхолдеры в строке на указанные значения.

##### Description

Метод принимает строку и массив пар &quot;ключ-значение&quot;, где каждый ключ - это плейсхолдер,
который заменяется соответствующим значением в строке.

##### Parameters:

| Name | Type | Default |
|------|------|---------|
| **$phrase** | string |  |
| **$params** | array | [] |

##### Returns:

```
string
```
Обработанная строка с произведёнными заменами.

---

<a id="method_parseXliffFile"></a>
### parseXliffFile

```
static private parseXliffFile(string  filePath) : array
```

##### Parameters:

| Name | Type | Default |
|------|------|---------|
| **$filePath** | string |  |

##### Returns:

```
array
```

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

<a id="method_writeJsFile"></a>
### writeJsFile

```
static private writeJsFile(string  path, string  content) : bool
```

##### Summary

Записывает переданное содержимое в указанный файл JavaScript.

##### Description

В случае неуспешной записи генерирует критический лог с использованием метода LogGenerator::generateLog.

##### See Also:

 * [\LogGenerator::generateLog()](../../classes/LogGenerator.md#method_generateLog)

##### Parameters:

| Name | Type | Default |
|------|------|---------|
| **$path** | string |  |
| **$content** | string |  |

##### Throws:

| Type | Description |
|------|-------------|
| \Throwable |  |

##### Returns:

```
bool
```
Возвращает true, если запись прошла успешно, или false, если возникла ошибка.
