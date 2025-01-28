# Содержание классов для разработки в Back-End

## Трейты

| Название | Краткое содержание                                                                                                                                                                      |
|----------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [\AssetsChecker](./classes/AssetsChecker.md) | Трейт для проверки и управления ассетами (файлы скриптов и стилей).                                                                                                                     |
| [\DataLoader](./classes/DataLoader.md) | Трейт для загрузки данных с использованием кеша или базы данных.                                                                                                                        |
| [\DleData](./classes/DleData.md) | Трейт `DleData` предоставляет методы для работы с дополнительными данными (xfields), пользователями, группами, категориями и другими сущностями в контексте системы управления данными. |
| [\UpdatesChecker](./classes/UpdatesChecker.md) | Трейт UpdatesChecker предоставляет функции для работы с информацией об обновлениях ресурсов.                                                                                            |

## Классы

| Название | Краткое содержание                                                                                                                                                                        |
|----------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [\Admin](./classes/Admin.md) | Класс Admin предназначен для управления административной панелью проекта.                                                                                                                 |
| [\AdminLink](./classes/AdminLink.md) | Класс `AdminLink` реализует функциональность для создания и управления административными ссылками, включая родительские связи, дочерние элементы, типы ссылок и дополнительные параметры. |
| [\AdminUrlExtension](./classes/AdminUrlExtension.md) | Класс предоставляет функции и глобальные переменные для использования в Twig-шаблонах.                                                                                                    |
| [\AjaxAbstractResponse](./classes/AjaxAbstractResponse.md) | Абстрактный класс, представляющий базовый ответ в виде JSON.                                                                                                                              |
| [\Author](./classes/Author.md) | Класс, представляющий автора с именем, списком контактов и пожертвований.                                                                                                                 |
| [\BasisModel](./classes/BasisModel.md) | Базовый абстрактный класс модели, представляющий типовую сущность базы данных.                                                                                                            |
| [\BasisRepository](./classes/BasisRepository.md) | Базовый репозиторий для работы с сущностями.                                                                                                                                              |
| [\BreadCrumb](./classes/BreadCrumb.md) | Класс, представляющий хлебную крошку для навигации.                                                                                                                                       |
| [\CacheControl](./classes/CacheControl.md) | Абстрактный класс для реализации управления кэшированием.                                                                                                                                 |
| [\ComposerAction](./classes/ComposerAction.md) |                                                                                                                                                                                           |
| [\DataManager](./classes/DataManager.md) | Абстрактный класс DataManager, представляющий базовый функционал для менеджеров данных.                                                                                                   |
| [\DateTimeFormatter](./classes/DateTimeFormatter.md) | Расширение Twig для работы с форматированием даты и времени.                                                                                                                              |
| [\DeclineExtension](./classes/DeclineExtension.md) | Склонение слова в зависимости от числа.                                                                                                                                                   |
| [\ErrorResponseAjax](./classes/ErrorResponseAjax.md) | Класс для формирования ответов об ошибке.                                                                                                                                                 |
| [\LogGenerator](./classes/LogGenerator.md) | Абстрактный класс для управления процессом логирования. Класс включает в себя базовый функционал для записи логов в файлы, базу данных и отправки уведомлений в Telegram. |
| [\MhAjax](./classes/MhAjax.md) | Вспомогательный класс для работы с системой управления DLE |
| [\MhDB](./classes/MhDB.md) | Класс для работы с базой данных                                                                                                                                                           |
| [\MhLog](./classes/MhLog.md) | Базовый абстрактный класс модели, представляющий типовую сущность базы данных.                                                                                                            |
| [\MhLogRepository](./classes/MhLogRepository.md) | Базовый репозиторий для работы с сущностями.                                                                                                                                              |
| [\MhTranslation](./classes/MhTranslation.md) | Класс для оформления фраз переводов                                                                                                                                                       |
| [\MobileDetectExtension](./classes/MobileDetectExtension.md) | Расширение Twig, основанное на MobileDetect.                                                                                                                                              |
| [\SuccessResponseAjax](./classes/SuccessResponseAjax.md) | Представляет успешный HTTP-ответ.                                                                                                                                                         |
| [\TextLimiter](./classes/TextLimiter.md) | Twig-расширение, предоставляющее инструмент для ограничения длины текста.                                                                                                                 |
| [\TwigFilter](./classes/TwigFilter.md) | Класс для создания и обработки фильтров данных, а также для работы с сортировкой и стандартными фильтрами для шаблонов.                                                                   |

## Константы

<a id="constant_COMPOSER_DIRECTORY"></a>
### COMPOSER_DIRECTORY
```
COMPOSER_DIRECTORY = ENGINE_DIR . '/inc/maharder/_includes/composer'
```

<a id="constant_MH_INIT"></a>
### MH_INIT
Определяет константу, используемую для инициализации системы.

Константа используется для указания того, что система была успешно инициализирована.

```
define("MH_INIT", true);
```

<a id="constant_MH_ROOT"></a>
### MH_ROOT
Константа `MH_ROOT` указывает на путь к директории `engine/inc/maharder` в структуре проекта.
Этот путь формируется на основе значения константы `ROOT_DIR`, определяющей корневую директорию проекта.
Константа используется для упрощённого доступа к базовой директории функционала Maharder.
```
define("MH_ROOT", ROOT_DIR . '/engine/inc/maharder');
```

<a id="constant_MH_ADMIN"></a>
### MH_LOCALES
Константа MH_ADMIN определяет путь к административной директории.
Формируется путем объединения константы MH_ROOT с поддиректорией '/admin'.

```
define("MH_ADMIN", MH_ROOT . '/admin');
```

<a id="constant_MH_LOCALES"></a>
### MH_LOCALES
Константа, задающая путь к локализациям.

Константа `MH_LOCALES` определяет абсолютный путь к директории, в которой хранятся файлы локализаций. Основывается на значении константы `MH_ROOT` с добавлением директории `/_locales`.

```
define("MH_LOCALES", MH_ROOT . '/_locales');
```

<a id="constant_MH_MODULES"></a>
### MH_MODULES
Определяет константу MH_MODULES, указывающую на путь к папке модулей в корневой директории.

Константа используется для задания базового пути к директории с модулями, относительно константы  `MH_ROOT`, которая должна быть определена ранее.

```
define("MH_LOCALES", MH_ROOT . '/_modules');
```

<a id="constant_MH_INCLUDES"></a>
### MH_INCLUDES
Определяет константу `MH_INCLUDES`, содержащую путь к директории `_includes` внутри корневой директории.

Константа используется для централизованного указания пути к дополнительным включаемым файлам проекта.
Значение формируется путем объединения значения константы `MH_ROOT` и строки `/_includes`.

```
define("MH_LOCALES", MH_ROOT . '/_includes');
```

<a id="constant_MH_CONFIG"></a>
### MH_CONFIG
Определяет путь к папке конфигурации приложения.

Константа `MH_CONFIG` содержит полный путь к директории `_config`, основываясь на значении корневой директории `MH_ROOT`

```
define("MH_LOCALES", MH_ROOT . '/_config');
```

<a id="constant_MH_TEMPLATES"></a>
### MH_TEMPLATES
Определяет константу MH_TEMPLATES, которая содержит путь к директории с шаблонами проекта.
Значение пути формируется на основе константы MH_ROOT с добавлением поддиректории '_templates'.

```
define("MH_LOCALES", MH_ROOT . '/_templates');
```


## Функции / Методы

<a id="method___"></a>
### __

```
 __(string  phrase, array  params = [], int  count) : string
```

#### Краткое содержание

Синоним функции перевода translate для упрощённого использования.

#### Описание

Служит для вызова функции перевода текстовых строк с возможностью передачи параметров и обработки множественного числа.

#### Смотри так-же:

 * [\translate()](#method_translate)
 * [\DataManager::getConfig()](./classes/DataManager.md#method_getConfig)

#### Свойства:

| Название | Тип | По умолчанию |
|----------|-----|----------|
| **$phrase** | string |  |
| **$params** | array | [] |
| **$count** | int | 0 |

#### Ошибки:

| Тип | Описание |
|-----|----------|
| \Throwable |  |

#### Возвращает:

```
string
```
Переведённая строка.

<a id="method_br2nl"></a>
### br2nl

```
 br2nl(string  string, string  separator = PHP_EOL) : string
```

#### Краткое содержание

Преобразует теги `&lt;br&gt;` в заданный разделитель строк.

#### Описание

Данная функция заменяет все теги `&lt;br&gt;` (включая различные его варианты, такие как `&lt;br&gt;`, `&lt;br/&gt;` и `&lt;br /&gt;`)
на указанный разделитель строк. Если переданный разделитель не входит в список допустимых
значений, будет использован стандартный разделитель `PHP_EOL`.

#### Свойства:

| Название | Тип | По умолчанию |
|----------|-----|----------|
| **$string** | string |  |
| **$separator** | string | PHP_EOL |

#### Ошибки:

| Тип | Описание |
|-----|----------|
| \InvalidArgumentException | Исключение выбрасывается, если входные данные недействительны или пустые. |

#### Возвращает:

```
string
```
Строка, в которой все `&lt;br&gt;` заменены на указанный разделитель.

<a id="method_clearfilepath"></a>
### clearfilepath

```
 clearfilepath(mixed  file, mixed  ext = []) : string
```

#### Свойства:

| Название | Тип | По умолчанию |
|----------|-----|----------|
| **$file** | mixed |  |
| **$ext** | mixed | [] |

#### Возвращает:

```
string
```

<a id="method_dirToArray"></a>
### dirToArray

```
 dirToArray(string  dir, array  ignoredExtensions = []) : array
```

#### Краткое содержание

Преобразует заданный путь к директории в массив, содержащий дерево папок и файлов.

#### Описание

Эта функция позволяет получить структуру файловой системы в виде ассоциативного массива.
Папки представлены в виде ключей, а файлы - в виде элементов массива.
Также поддерживает возможность исключения определенных файлов и расширений.

#### Свойства:

| Название | Тип | По умолчанию |
|----------|-----|----------|
| **$dir** | string |  |
| **$ignoredExtensions** | array | [] |

#### Ошибки:

| Тип | Описание |
|-----|----------|
| \RuntimeException | Если `scandir` не удается получить содержимое директории. |

#### Возвращает:

```
array
```
Массив, представляющий собой дерево файловой структуры. Каждая директория содержит вложенные файлы/папки.

<a id="method_execute_query"></a>
### execute_query

```
 execute_query(mixed  id, mixed  query) : void
```

#### Свойства:

| Название | Тип | По умолчанию |
|----------|-----|----------|
| **$id** | mixed |  |
| **$query** | mixed |  |

#### Возвращает:

```
void
```

<a id="method_translate"></a>
### translate

```
 translate(string  phrase, array  params = [], int  count) : string
```

#### Краткое содержание

Переводит заданную фразу с использованием модуля перевода.

#### Описание

Если язык и путь для локалей не установлены в конфигурации, возвращает исходную фразу.
В зависимости от переданных параметров, поддерживает как обрабатываемый,
так и базовый перевод с использованием модулей `MhTranslation`.
При возникновении ошибки логирует её и возвращает исходную фразу.

#### Смотри так-же:

 * [\DataManager::getConfig()](./classes/DataManager.md#method_getConfig)
 * [\MhTranslation::setTranslator()](./classes/MhTranslation.md#method_setTranslator)
 * [\MhTranslation::getTranslation()](./classes/MhTranslation.md#method_getTranslation)
 * [\MhTranslation::getTranslationWithParameters()](./classes/MhTranslation.md#method_getTranslationWithParameters)
 * [\MhTranslation::getTranslationPlural()](./classes/MhTranslation.md#method_getTranslationPlural)
 * [\MhTranslation::getTranslationPluralWithParameters()](./classes/MhTranslation.md#method_getTranslationPluralWithParameters)
 * [\LogGenerator::generateLog()](./classes/LogGenerator.md#method_generateLog)

#### Свойства:

| Название | Тип | По умолчанию |
|----------|-----|----------|
| **$phrase** | string |  |
| **$params** | array | [] |
| **$count** | int | 0 |

#### Ошибки:

| Тип | Описание |
|-----|----------|
| \Exception|\Throwable | Если возникает ошибка при работе с переводом. |

#### Возвращает:

```
string
```
Переведённая строка.

