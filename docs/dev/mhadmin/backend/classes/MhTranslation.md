# Абстрактный класс: MhTranslation

## Краткое содержание:

Класс для оформления фраз переводов


---

### Свойства

* private $[cache_folder](#property_cache_folder)
* private $[locale](#property_locale)
* private $[localization_path](#property_localization_path)
* private $[prefix](#property_prefix)
* private $[translator](#property_translator)
* private $[use_translator](#property_use_translator)

---

### Методы

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

### Подробности

* Путь: engine/inc/maharder/_includes/classes/MhTranslation.php
* Использованные трейты:
    * [\DataLoader](./DataLoader.md)

---

## Свойства

[](){#property_cache_folder}
#### private $cache_folder : string
---
**Краткое содержание**

Папка кеша

**Тип:** <abbr title="string">Текст</abbr>

[](){#property_locale}
#### private $locale : ?string
---
**Краткое содержание**

Название локали

**Тип:** <abbr title="?string">Текст или null</abbr>

**Подробности:**

##### Tags

| Тэг     | Версия  | Описание |
|---------|---------|----------|
| version | 173.3.0 |          |
| since   | 173.3.0 |          |

[](){#property_localization_path}
#### private $localization_path : ?string
---
**Краткое содержание**

Путь до фраз перевода

**Тип:** <abbr title="?string">Текст или null</abbr>

**Подробности:**

##### Tags

| Тэг     | Версия  | Описание |
|---------|---------|----------|
| version | 173.3.0 |          |
| since   | 173.3.0 |          |

[](){#property_prefix}
#### private $prefix : ?string
---
**Тип:** <abbr title="?string">Текст или null</abbr>

**Подробности:**

[](){#property_translator}
#### private $translator : ?\Symfony\Component\Translation\Translator
---
**Краткое содержание**

Класс переводчика

**Тип:
** <a href="https://symfony.com/doc/current/translation.html" target="_blank"><abbr title="?\Symfony\Component\Translation\Translator">
Translator</abbr></a>

**Подробности:**

##### Tags

| Тэг     | Версия  | Описание |
|---------|---------|----------|
| version | 173.3.0 |          |
| since   | 173.3.0 |          |

[](){#property_use_translator}
#### private $use_translator : bool
---
**Тип:** <abbr title="bool">Логические значения</abbr>

**Подробности:**



---

## Методы

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

[](){#method_convertXliffToJs}

### convertXliffToJs

```
static public convertXliffToJs() : void
```

##### Краткое содержание

Преобразует XLIFF-файлы переводов в JavaScript-файлы для поддержки локализации на клиентской стороне.

##### Описание

Метод перебирает доступные языки из функции {@see}, кэширует переводы,
преобразует их из XLIFF-файлов и генерирует JavaScript-файлы с переводами.
Если переводы не найдены или директория переводов отсутствует, генерируется лог ошибки.

##### Смотри так-же:

* [\LogGenerator::generateLog()](./LogGenerator.md#method_generateLog)
* [\MhTranslation::getLanguages()](#method_getLanguages)
* [\CacheControl::getCache()](./CacheControl.md#method_getCache)
* [\DataManager::normalizePath()](./DataManager.md#method_normalizePath)
* [\DataManager::dirToArray()](./DataManager.md#method_dirToArray)

##### Ошибки:

| Тип            | Описание   |
|----------------|------------|
| \JsonException | \Throwable |  |

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

[](){#method_getFormattedLanguageList}

### getFormattedLanguageList

```
static public getFormattedLanguageList(string|null  format = "{original} ({english})") : array
```

##### Краткое содержание

Возвращает отформатированный список языков с заданным шаблоном формата.

##### Описание

Поддерживаемые подстановочные шаблоны в строке формата:

- `{original}` - заменяется на переведённое название языка.
- `{english}` - заменяется на английское название языка.
- `{iso2}` - заменяется на двузначный код языка (например: `ru`).
- `{tag}` - заменяется на код языка (например: `ru_RU`).
  Если формат не указан, по умолчанию используется шаблон: &quot;{original} ({english})&quot;.

##### Смотри так-же:

* [\MhTranslation::getLanguages()](#method_getLanguages)

##### Свойства:

| Название    | Тип          | По умолчанию             |
|-------------|--------------|--------------------------|
| **$format** | string\|null | "{original} ({english})" |

##### Ошибки:

| Тип            | Описание                                          |
|----------------|---------------------------------------------------|
| \JsonException | Выбрасывается в случае ошибок при JSON-операциях. |
| \Throwable     |                                                   |

##### Возвращает:

```
array
```

Возвращает массив языков, где каждый элемент содержит:

- `tag` - код языка,
- `name` - сгенерированное название языка на основе переданного формата.

---

[](){#method_getLanguages}

### getLanguages

```
static public getLanguages() : array
```

##### Краткое содержание

Получает список доступных языков.

##### Описание

Метод проверяет наличие кэша для списка языков.
Если кэш отсутствует, формирует список языков на основе содержимого директории локализаций.
Полученные данные сохраняются в кэше для последующего использования.

##### Смотри так-же:

* [\CacheControl::setCache()](./CacheControl.md#method_setCache)
* [\CacheControl::getCache()](./CacheControl.md#method_getCache)

##### Ошибки:

| Тип                        | Описание                                                         |
|----------------------------|------------------------------------------------------------------|
| \JsonException\|\Throwable | Возникает при ошибке декодирования JSON в момент работы с кэшем. |

##### Возвращает:

```
array
```

Массив доступных языков, где ключ — идентификатор языка, а значение — данные языка.

---

[](){#method_getLocale}

### getLocale

```
static public getLocale() : string
```

##### Краткое содержание

Возвращает текущую локаль или значение по умолчанию ("ru_RU"), если локаль не определена.

##### Возвращает:

```
string
```

Текущая локаль или значение по умолчанию ("ru_RU").

---

[](){#method_getLocaleData}

### getLocaleData

```
static public getLocaleData(string  locale) : array
```

##### Краткое содержание

Возвращает локализованные данные для указанного языка.

##### Смотри так-же:

* [\MhTranslation::getLanguages()](#method_getLanguages)

##### Свойства:

| Название    | Тип    | По умолчанию |
|-------------|--------|--------------|
| **$locale** | string |              |

##### Ошибки:

| Тип            | Описание                                                        |
|----------------|-----------------------------------------------------------------|
| \JsonException | Если возникли ошибки при декодировании JSON-данных.             |
| \Throwable     | Если возникают ошибки при работе с кешем или файловой системой. |

##### Возвращает:

```
array
```

Массив данных локализации для указанного языка.

---

[](){#method_getLocalizationPath}

### getLocalizationPath

```
static public getLocalizationPath() : string|null
```

##### Краткое содержание

Получает путь к локализации приложения.

##### Описание

Метод возвращает путь к директории с файлами локализации. Если путь ранее
не был установлен или пуст, он загружается из конфигурации `mhadmin` и
по умолчанию указывает на директорию `/engine/inc/maharder/_locales`.

##### Смотри так-же:

* [\DataManager::getConfig()](./DataManager.md#method_getConfig)
* [\MhTranslation::$localization_path](#property_localization_path)

##### Ошибки:

| Тип            | Описание                                         |
|----------------|--------------------------------------------------|
| \JsonException | Если возникает ошибка при загрузке конфигурации. |

##### Возвращает:

```
string|null
```

Полный путь к локализации, или null, если ROOT_DIR не определён.

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

[](){#method_getTranslation}

### getTranslation

```
static public getTranslation(string  phrase) : string
```

##### Краткое содержание

Возвращает переведённую фразу.

##### Описание

Метод использует функцию `getTranslationWithParameters` для получения перевода
без указания дополнительных параметров.

##### Смотри так-же:

* [\MhTranslation::getTranslationWithParameters](#method_getTranslationWithParameters)

##### Свойства:

| Название    | Тип    | По умолчанию |
|-------------|--------|--------------|
| **$phrase** | string |              |

##### Ошибки:

| Тип            | Описание                                                                                                   |
|----------------|------------------------------------------------------------------------------------------------------------|
| \JsonException | Исключение, выбрасываемое при ошибках обработки JSON (возможные ошибки в логе или настройках переводчика). |

##### Возвращает:

```
string
```

Переведённая строка.

---

[](){#method_getTranslationPlural}

### getTranslationPlural

```
static public getTranslationPlural(string  phrase, int  count) : string
```

##### Краткое содержание

Возвращает переведённую фразу с учётом параметров множественного числа/склонения.

##### Описание

Делегирует обработку перевода методу `getTranslationPluralWithParameters`, передавая
пустой массив параметров в качестве третьего аргумента.

##### Смотри так-же:

* [\getTranslationPluralWithParameters()](#method_getTranslationPluralWithParameters)

##### Свойства:

| Название    | Тип    | По умолчанию |
|-------------|--------|--------------|
| **$phrase** | string |              |
| **$count**  | int    |              |

##### Ошибки:

| Тип            | Описание                                                    |
|----------------|-------------------------------------------------------------|
| \JsonException | Если в процессе выполнения произошла ошибка обработки JSON. |

##### Возвращает:

```
string
```

Переведённая строка с учётом параметров множественного числа/склонения.

---

[](){#method_getTranslationPluralWithParameters}

### getTranslationPluralWithParameters

```
static public getTranslationPluralWithParameters(string  phrase, int  count, array  parameters) : string
```

##### Краткое содержание

Возвращает переведённую фразу с параметрами множественного числа, учитывая склонения, с дополнительной
поддержкой параметров.

##### Смотри так-же:

* [\MhTranslation::$translator](#property_translator)
* [\MhTranslation::isUseTranslator()](#method_isUseTranslator)
* [\MhTranslation::setTranslator()](#method_setTranslator)
* [\MhTranslation::getTranslationWithParameters()](#method_getTranslationWithParameters)
* [\MhTranslation::nonTranslator()](#method_nonTranslator)

##### Свойства:

| Название        | Тип    | По умолчанию |
|-----------------|--------|--------------|
| **$phrase**     | string |              |
| **$count**      | int    |              |
| **$parameters** | array  |              |

##### Ошибки:

| Тип            | Описание                                         |
|----------------|--------------------------------------------------|
| \JsonException | Если возникает ошибка при обработке JSON данных. |
| \Throwable     |                                                  |

##### Возвращает:

```
string
```

Переведённая фраза с учетом склонений и параметров.

---

[](){#method_getTranslationWithParameters}

### getTranslationWithParameters

```
static public getTranslationWithParameters(string  phrase, array  parameters) : string
```

##### Краткое содержание

Возвращает переведённую фразу с установленными параметрами.

##### Описание

Перевод осуществляется с использованием зарегистрированного переводчика.
Если переводчик не установлен, он инициализируется вызовом метода `setTranslator`.
Если использование переводчика отключено, возвращается результат без перевода.

##### Смотри так-же:

* [\MhTranslation::$translator](#property_translator)
* [\MhTranslation::isUseTranslator](#method_isUseTranslator)
* [\MhTranslation::nonTranslator](#method_nonTranslator)

##### Свойства:

| Название        | Тип    | По умолчанию |
|-----------------|--------|--------------|
| **$phrase**     | string |              |
| **$parameters** | array  |              |

##### Ошибки:

| Тип            | Описание                                                 |
|----------------|----------------------------------------------------------|
| \JsonException | В случае возникновения ошибки при работе с переводчиком. |

##### Возвращает:

```
string
```

Переведённая фраза или исходная строка при отключённом переводчике.

---

[](){#method_getTranslator}

### getTranslator

```
static public getTranslator() : \Translator|null
```

##### Краткое содержание

Возвращает экземпляр переводчика, связанный с текущим модулем.

##### Описание

Если модуль передан как параметр, то он устанавливается перед получением переводчика.
Если переводчик ещё не установлен, он будет автоматически инициализирован для текущего модуля.

##### Смотри так-же:

* [\MhTranslation::$translator](#property_translator)
* [\MhTranslation::setTranslator()](#method_setTranslator())

##### Ошибки:

| Тип            | Описание                                                      |
|----------------|---------------------------------------------------------------|
| \Throwable     |                                                               |
| \JsonException | Генерируется при ошибках работы с JSON во внутренних методах. |

##### Возвращает:

```
\Translator|null
```

Экземпляр переводчика или null, если переводчик не установлен.

---

[](){#method_isUseTranslator}

### isUseTranslator

```
static public isUseTranslator() : bool
```

##### Краткое содержание

Проверяет, используется ли переводчик.

##### Описание

Метод проверяет, инициализирован ли статический переводчик
(`self::$translator`). Если переменная не равна null, значит переводчик
используется.

##### Возвращает:

```
bool
```

Возвращает true, если переводчик задан; иначе false.

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

[](){#method_setLocale}

### setLocale

```
static public setLocale(string  locale) : void
```

##### Краткое содержание

Устанавливает локаль для приложения.

##### Свойства:

| Название    | Тип    | По умолчанию |
|-------------|--------|--------------|
| **$locale** | string |              |

##### Возвращает:

```
void
```

---

[](){#method_setLocalizationPath}

### setLocalizationPath

```
static public setLocalizationPath(string  localization_path) : void
```

##### Краткое содержание

Устанавливает путь до переводимых фраз

##### Свойства:

| Название               | Тип    | По умолчанию |
|------------------------|--------|--------------|
| **$localization_path** | string |              |

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

[](){#method_setTranslator}

### setTranslator

```
static public setTranslator() : void
```

##### Краткое содержание

Устанавливает переводчик для модуля с заданными настройками.

##### Описание

Использует параметры из конфигурации для настройки локализации,
загрузки переводов и их применения.

##### Смотри так-же:

* [\DataManager::getConfig()](./DataManager.md#method_getConfig)

##### Ошибки:

| Тип                        | Описание                                        |
|----------------------------|-------------------------------------------------|
| \JsonException\|\Throwable | Если возникла ошибка при работе с JSON-файлами. |

##### Возвращает:

```
void
```

---

[](){#method_setUseTranslator}

### setUseTranslator

```
static public setUseTranslator(bool  use_translator) : void
```

##### Краткое содержание

Устанавливает использование переводчика.

##### Свойства:

| Название            | Тип  | По умолчанию |
|---------------------|------|--------------|
| **$use_translator** | bool |              |

##### Возвращает:

```
void
```

---

[](){#method_generateJsTranslationContent}

### generateJsTranslationContent

```
static private generateJsTranslationContent(array  translations) : string
```

##### Краткое содержание

Генерирует содержимое JavaScript-файла с переводами на основе переданного массива переводов.

##### Свойства:

| Название          | Тип   | По умолчанию |
|-------------------|-------|--------------|
| **$translations** | array |              |

##### Возвращает:

```
string
```

Содержимое для JavaScript, включающее объект переводов и экспорт по умолчанию.

---

[](){#method_getTranslationArray}

### getTranslationArray

```
static private getTranslationArray() : array
```

##### Краткое содержание

Возвращает массив переводов из XLIFF файла в виде ассоциативного массива,
где ключами являются исходные строки, а значениями — переведённые строки.

##### Описание

Если файл перевода отсутствует или возникает ошибка при его обработке,
возвращается пустой массив. Реализована поддержка кеширования для ускорения
получения данных при последующих вызовах.

##### Смотри так-же:

* [\DataManager::normalizePath()](./DataManager.md#method_normalizePath)
* [\LogGenerator::generateLog()](./LogGenerator.md#method_generateLog)
* [\CacheControl::getCache()](./CacheControl.md#method_getCache)
* [\CacheControl::setCache()](./CacheControl.md#method_setCache)

##### Ошибки:

| Тип            | Описание                                                      |
|----------------|---------------------------------------------------------------|
| \JsonException | Исключение при ошибке работы с JSON при кэшировании.          |
| \Throwable     | Исключение при неизвестной ошибке в процессе обработки файла. |

##### Возвращает:

```
array
```

Ассоциативный массив переводов.

---

[](){#method_languageList}

### languageList

```
static private languageList(string  lang) : array
```

##### Краткое содержание

Возвращает массив данных о языке на основе переданного кода языка.

##### Смотри так-же:

* [\__](../index.md#function___)

##### Свойства:

| Название  | Тип    | По умолчанию |
|-----------|--------|--------------|
| **$lang** | string |              |

##### Возвращает:

```
array
```

Ассоциативный массив с данными о языке. Содержит следующие ключи:

- `original` (string): Название языка на его родном языке.
- `english` (string): Название языка на английском.
- `iso2` (string): Код ISO 639-1 языка.
- `tag` (string): Полный тег языка.

---

[](){#method_nonTranslator}

### nonTranslator

```
static private nonTranslator(string  phrase, array  params = []) : string
```

##### Краткое содержание

Заменяет плейсхолдеры в строке на указанные значения.

##### Описание

Метод принимает строку и массив пар &quot;ключ-значение&quot;, где каждый ключ - это плейсхолдер,
который заменяется соответствующим значением в строке.

##### Свойства:

| Название    | Тип    | По умолчанию |
|-------------|--------|--------------|
| **$phrase** | string |              |
| **$params** | array  | []           |

##### Возвращает:

```
string
```

Обработанная строка с произведёнными заменами.

---

[](){#method_parseXliffFile}

### parseXliffFile

```
static private parseXliffFile(string  filePath) : array
```

##### Свойства:

| Название      | Тип    | По умолчанию |
|---------------|--------|--------------|
| **$filePath** | string |              |

##### Возвращает:

```
array
```

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

---

[](){#method_writeJsFile}

### writeJsFile

```
static private writeJsFile(string  path, string  content) : bool
```

##### Краткое содержание

Записывает переданное содержимое в указанный файл JavaScript.

##### Описание

В случае неуспешной записи генерирует критический лог с использованием метода LogGenerator::generateLog.

##### Смотри так-же:

* [\LogGenerator::generateLog()](./LogGenerator.md#method_generateLog)

##### Свойства:

| Название     | Тип    | По умолчанию |
|--------------|--------|--------------|
| **$path**    | string |              |
| **$content** | string |              |

##### Ошибки:

| Тип        | Описание |
|------------|----------|
| \Throwable |          |

##### Возвращает:

```
bool
```

Возвращает true, если запись прошла успешно, или false, если возникла ошибка.
