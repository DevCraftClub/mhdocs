# \\

### Traits

| Name | Summary |
|------|---------|
| [\AssetsChecker](../../classes/AssetsChecker.md) |  |
| [\DataLoader](../../classes/DataLoader.md) |  |
| [\DleData](../../classes/DleData.md) |  |
| [\UpdatesChecker](../../classes/UpdatesChecker.md) |  |

### Classes

| Name | Summary |
|------|---------|
| [\Admin](../../classes/Admin.md) | Класс Admin предназначен для управления административной панелью проекта. |
| [\AdminLink](../../classes/AdminLink.md) |  |
| [\AdminUrlExtension](../../classes/AdminUrlExtension.md) |  |
| [\AjaxAbstractResponse](../../classes/AjaxAbstractResponse.md) | Абстрактный класс, представляющий базовый ответ в виде JSON. |
| [\Author](../../classes/Author.md) |  |
| [\BasisModel](../../classes/BasisModel.md) |  |
| [\BasisRepository](../../classes/BasisRepository.md) |  |
| [\BreadCrumb](../../classes/BreadCrumb.md) |  |
| [\CacheControl](../../classes/CacheControl.md) | Абстрактный класс для реализации управления кэшированием. |
| [\ComposerAction](../../classes/ComposerAction.md) |  |
| [\DataManager](../../classes/DataManager.md) |  |
| [\DateTimeFormatter](../../classes/DateTimeFormatter.md) |  |
| [\DeclineExtension](../../classes/DeclineExtension.md) |  |
| [\ErrorResponseAjax](../../classes/ErrorResponseAjax.md) | Класс для формирования ответов об ошибке. |
| [\LogGenerator](../../classes/LogGenerator.md) |  |
| [\MhAjax](../../classes/MhAjax.md) |  |
| [\MhDB](../../classes/MhDB.md) | Класс для работы с базой данных |
| [\MhLog](../../classes/MhLog.md) |  |
| [\MhLogRepository](../../classes/MhLogRepository.md) |  |
| [\MhTranslation](../../classes/MhTranslation.md) | Класс для оформления фраз переводов |
| [\MobileDetectExtension](../../classes/MobileDetectExtension.md) | Inspired by bes89 |
| [\SuccessResponseAjax](../../classes/SuccessResponseAjax.md) | Представляет успешный HTTP-ответ. |
| [\TextLimiter](../../classes/TextLimiter.md) |  |
| [\TwigFilter](../../classes/TwigFilter.md) |  |

### Constants

<a id="constant_COMPOSER_DIRECTORY"></a>
###### COMPOSER_DIRECTORY
```
COMPOSER_DIRECTORY = ENGINE_DIR . '/inc/maharder/_includes/composer'
```

| Tag | Version | Desc |
|-----|---------|------|
| package |  |  |


### Functions

<a id="method___"></a>
### __

```
 __(string  phrase, array  params = [], int  count) : string
```

##### Summary

Синоним функции перевода translate для упрощённого использования.

##### Description

Служит для вызова функции перевода текстовых строк с возможностью передачи параметров и обработки множественного числа.

##### See Also:

 * [\translate()](../../namespaces/default.md#function_translate)
 * [\DataManager::getConfig()](../../classes/DataManager.md#method_getConfig)

##### Parameters:

| Name | Type | Default |
|------|------|---------|
| **$phrase** | string |  |
| **$params** | array | [] |
| **$count** | int | 0 |

##### Throws:

| Type | Description |
|------|-------------|
| \Throwable |  |

##### Returns:

```
string
```
Переведённая строка.

<a id="method_br2nl"></a>
### br2nl

```
 br2nl(string  string, string  separator = PHP_EOL) : string
```

##### Summary

Преобразует теги `&lt;br&gt;` в заданный разделитель строк.

##### Description

Данная функция заменяет все теги `&lt;br&gt;` (включая различные его варианты, такие как `&lt;br&gt;`, `&lt;br/&gt;` и `&lt;br /&gt;`)
на указанный разделитель строк. Если переданный разделитель не входит в список допустимых
значений, будет использован стандартный разделитель `PHP_EOL`.

##### Parameters:

| Name | Type | Default |
|------|------|---------|
| **$string** | string |  |
| **$separator** | string | PHP_EOL |

##### Throws:

| Type | Description |
|------|-------------|
| \InvalidArgumentException | Исключение выбрасывается, если входные данные недействительны или пустые. |

##### Returns:

```
string
```
Строка, в которой все `&lt;br&gt;` заменены на указанный разделитель.

<a id="method_clearfilepath"></a>
### clearfilepath

```
 clearfilepath(mixed  file, mixed  ext = []) : string
```

##### Parameters:

| Name | Type | Default |
|------|------|---------|
| **$file** | mixed |  |
| **$ext** | mixed | [] |

##### Returns:

```
string
```

<a id="method_dirToArray"></a>
### dirToArray

```
 dirToArray(string  dir, array  ignoredExtensions = []) : array
```

##### Summary

Преобразует заданный путь к директории в массив, содержащий дерево папок и файлов.

##### Description

Эта функция позволяет получить структуру файловой системы в виде ассоциативного массива.
Папки представлены в виде ключей, а файлы - в виде элементов массива.
Также поддерживает возможность исключения определенных файлов и расширений.

##### Parameters:

| Name | Type | Default |
|------|------|---------|
| **$dir** | string |  |
| **$ignoredExtensions** | array | [] |

##### Throws:

| Type | Description |
|------|-------------|
| \RuntimeException | Если `scandir` не удается получить содержимое директории. |

##### Returns:

```
array
```
Массив, представляющий собой дерево файловой структуры. Каждая директория содержит вложенные файлы/папки.

<a id="method_execute_query"></a>
### execute_query

```
 execute_query(mixed  id, mixed  query) : void
```

##### Parameters:

| Name | Type | Default |
|------|------|---------|
| **$id** | mixed |  |
| **$query** | mixed |  |

##### Returns:

```
void
```

<a id="method_translate"></a>
### translate

```
 translate(string  phrase, array  params = [], int  count) : string
```

##### Summary

Переводит заданную фразу с использованием модуля перевода.

##### Description

Если язык и путь для локалей не установлены в конфигурации, возвращает исходную фразу.
В зависимости от переданных параметров, поддерживает как обрабатываемый,
так и базовый перевод с использованием модулей `MhTranslation`.
При возникновении ошибки логирует её и возвращает исходную фразу.

##### See Also:

 * [\DataManager::getConfig()](../../classes/DataManager.md#method_getConfig)
 * [\MhTranslation::setTranslator()](../../classes/MhTranslation.md#method_setTranslator)
 * [\MhTranslation::getTranslation()](../../classes/MhTranslation.md#method_getTranslation)
 * [\MhTranslation::getTranslationWithParameters()](../../classes/MhTranslation.md#method_getTranslationWithParameters)
 * [\MhTranslation::getTranslationPlural()](../../classes/MhTranslation.md#method_getTranslationPlural)
 * [\MhTranslation::getTranslationPluralWithParameters()](../../classes/MhTranslation.md#method_getTranslationPluralWithParameters)
 * [\LogGenerator::generateLog()](../../classes/LogGenerator.md#method_generateLog)

##### Parameters:

| Name | Type | Default |
|------|------|---------|
| **$phrase** | string |  |
| **$params** | array | [] |
| **$count** | int | 0 |

##### Throws:

| Type | Description |
|------|-------------|
| \Exception|\Throwable | Если возникает ошибка при работе с переводом. |

##### Returns:

```
string
```
Переведённая строка.

