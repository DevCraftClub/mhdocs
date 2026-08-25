import{r as e}from"./rolldown-runtime-QTnfLwEv.js";import{t}from"./jsx-runtime-By8HlURe.js";var n=e(t()),r={title:`Содержание классов для разработки в Back-End`,description:`Документация по плагину содержание классов для разработки в back-end для DLE.`},i=new Date(1787654208e3),a=`

## Трейты [#трейты]

| Название                                    | Краткое содержание                                                                                                                                                                      |
| ------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [\\AssetsChecker](./classes/AssetsChecker)   | Трейт для проверки и управления ассетами (файлы скриптов и стилей).                                                                                                                     |
| [\\DataLoader](./classes/DataLoader)         | Трейт для загрузки данных с использованием кеша или базы данных.                                                                                                                        |
| [\\DleData](./classes/DleData)               | Трейт \`DleData\` предоставляет методы для работы с дополнительными данными (xfields), пользователями, группами, категориями и другими сущностями в контексте системы управления данными. |
| [\\UpdatesChecker](./classes/UpdatesChecker) | Трейт UpdatesChecker предоставляет функции для работы с информацией об обновлениях ресурсов.                                                                                            |

## Классы [#классы]

| Название                                                  | Краткое содержание                                                                                                                                                                        |
| --------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [\\Admin](./classes/Admin)                                 | Класс Admin предназначен для управления административной панелью проекта.                                                                                                                 |
| [\\AdminLink](./classes/AdminLink)                         | Класс \`AdminLink\` реализует функциональность для создания и управления административными ссылками, включая родительские связи, дочерние элементы, типы ссылок и дополнительные параметры. |
| [\\AdminUrlExtension](./classes/AdminUrlExtension)         | Класс предоставляет функции и глобальные переменные для использования в Twig-шаблонах.                                                                                                    |
| [\\AjaxAbstractResponse](./classes/AjaxAbstractResponse)   | Абстрактный класс, представляющий базовый ответ в виде JSON.                                                                                                                              |
| [\\Author](./classes/Author)                               | Класс, представляющий автора с именем, списком контактов и пожертвований.                                                                                                                 |
| [\\BasisModel](./classes/BasisModel)                       | Базовый абстрактный класс модели, представляющий типовую сущность базы данных.                                                                                                            |
| [\\BasisRepository](./classes/BasisRepository)             | Базовый репозиторий для работы с сущностями.                                                                                                                                              |
| [\\BreadCrumb](./classes/BreadCrumb)                       | Класс, представляющий хлебную крошку для навигации.                                                                                                                                       |
| [\\CacheControl](./classes/CacheControl)                   | Абстрактный класс для реализации управления кэшированием.                                                                                                                                 |
| [\\ComposerAction](./classes/ComposerAction)               |                                                                                                                                                                                           |
| [\\DataManager](./classes/DataManager)                     | Абстрактный класс DataManager, представляющий базовый функционал для менеджеров данных.                                                                                                   |
| [\\DateTimeFormatter](./classes/DateTimeFormatter)         | Расширение Twig для работы с форматированием даты и времени.                                                                                                                              |
| [\\DeclineExtension](./classes/DeclineExtension)           | Склонение слова в зависимости от числа.                                                                                                                                                   |
| [\\ErrorResponseAjax](./classes/ErrorResponseAjax)         | Класс для формирования ответов об ошибке.                                                                                                                                                 |
| [\\LogGenerator](./classes/LogGenerator)                   | Абстрактный класс для управления процессом логирования. Класс включает в себя базовый функционал для записи логов в файлы, базу данных и отправки уведомлений в Telegram.                 |
| [\\MhAjax](./classes/MhAjax)                               | Вспомогательный класс для работы с системой управления DLE                                                                                                                                |
| [\\MhDB](./classes/MhDB)                                   | Класс для работы с базой данных                                                                                                                                                           |
| [\\MhLog](./classes/MhLog)                                 | Базовый абстрактный класс модели, представляющий типовую сущность базы данных.                                                                                                            |
| [\\MhLogRepository](./classes/MhLogRepository)             | Базовый репозиторий для работы с сущностями.                                                                                                                                              |
| [\\MhTranslation](./classes/MhTranslation)                 | Класс для оформления фраз переводов                                                                                                                                                       |
| [\\MobileDetectExtension](./classes/MobileDetectExtension) | Расширение Twig, основанное на MobileDetect.                                                                                                                                              |
| [\\SuccessResponseAjax](./classes/SuccessResponseAjax)     | Представляет успешный HTTP-ответ.                                                                                                                                                         |
| [\\TextLimiter](./classes/TextLimiter)                     | Twig-расширение, предоставляющее инструмент для ограничения длины текста.                                                                                                                 |
| [\\TwigFilter](./classes/TwigFilter)                       | Класс для создания и обработки фильтров данных, а также для работы с сортировкой и стандартными фильтрами для шаблонов.                                                                   |

## Константы [#константы]

<span id="constant_MH_INIT" />

### MH\\_INIT [#mh_init]

Определяет константу, используемую для инициализации системы.

Константа используется для указания того, что система была успешно инициализирована.

\`\`\`
define("MH_INIT", true);
\`\`\`

<span id="constant_MH_ROOT" />

### MH\\_ROOT [#mh_root]

Константа \`MH_ROOT\` указывает на путь к директории \`engine/inc/maharder\` в структуре проекта.
Этот путь формируется на основе значения константы \`ROOT_DIR\`, определяющей корневую директорию проекта.
Константа используется для упрощённого доступа к базовой директории функционала Maharder.

\`\`\`
define("MH_ROOT", ROOT_DIR . '/engine/inc/maharder');
\`\`\`

<span id="constant_MH_ADMIN" />

### MH\\_LOCALES [#mh_locales]

Константа MH\\_ADMIN определяет путь к административной директории.
Формируется путем объединения константы MH\\_ROOT с поддиректорией '/admin'.

\`\`\`
define("MH_ADMIN", MH_ROOT . '/admin');
\`\`\`

<span id="constant_MH_LOCALES" />

### MH\\_LOCALES [#mh_locales-1]

Константа, задающая путь к локализациям.

Константа \`MH_LOCALES\` определяет абсолютный путь к директории, в которой хранятся файлы локализаций. Основывается на значении константы \`MH_ROOT\` с добавлением директории \`/_locales\`.

\`\`\`
define("MH_LOCALES", MH_ROOT . '/_locales');
\`\`\`

<span id="constant_MH_MODULES" />

### MH\\_MODULES [#mh_modules]

Определяет константу MH\\_MODULES, указывающую на путь к папке модулей в корневой директории.

Константа используется для задания базового пути к директории с модулями, относительно константы  \`MH_ROOT\`, которая должна быть определена ранее.

\`\`\`
define("MH_LOCALES", MH_ROOT . '/_modules');
\`\`\`

<span id="constant_MH_INCLUDES" />

### MH\\_INCLUDES [#mh_includes]

Определяет константу \`MH_INCLUDES\`, содержащую путь к директории \`_includes\` внутри корневой директории.

Константа используется для централизованного указания пути к дополнительным включаемым файлам проекта.
Значение формируется путем объединения значения константы \`MH_ROOT\` и строки \`/_includes\`.

\`\`\`
define("MH_LOCALES", MH_ROOT . '/_includes');
\`\`\`

<span id="constant_MH_CONFIG" />

### MH\\_CONFIG [#mh_config]

Определяет путь к папке конфигурации приложения.

Константа \`MH_CONFIG\` содержит полный путь к директории \`_config\`, основываясь на значении корневой директории \`MH_ROOT\`

\`\`\`
define("MH_LOCALES", MH_ROOT . '/_config');
\`\`\`

<span id="constant_MH_TEMPLATES" />

### MH\\_TEMPLATES [#mh_templates]

Определяет константу MH\\_TEMPLATES, которая содержит путь к директории с шаблонами проекта.
Значение пути формируется на основе константы MH\\_ROOT с добавлением поддиректории '\\_templates'.

\`\`\`
define("MH_LOCALES", MH_ROOT . '/_templates');
\`\`\`

### COMPOSER\\_DIR<span id="constant_COMPOSER_DIR" /> [#composer_dir]

Определяет константу COMPOSER\\_DIR, которая содержит путь к директории с [композером](../../../instructions/composer).

\`\`\`
define("COMPOSER_DIR", MH_INCLUDES . '/composer');
\`\`\`

## Функции / Методы [#функции--методы]

<span id="method___" />

### \\_\\_ [#__]

\`\`\`
 __(string  phrase, array  params = [], int  count) : string
\`\`\`

#### Краткое содержание [#краткое-содержание]

Синоним функции перевода translate для упрощённого использования.

#### Описание [#описание]

Служит для вызова функции перевода текстовых строк с возможностью передачи параметров и обработки множественного числа.

#### Смотри так-же: [#смотри-так-же]

* [\\translate()](#method_translate)
* [\\DataManager::getConfig()](./classes/DataManager#method_getConfig)

#### Свойства: [#свойства]

| Название    | Тип    | По умолчанию |
| ----------- | ------ | ------------ |
| **$phrase** | string |              |
| **$params** | array  | \\[]          |
| **$count**  | int    | 0            |

#### Ошибки: [#ошибки]

| Тип        | Описание |
| ---------- | -------- |
| \\Throwable |          |

#### Возвращает: [#возвращает]

\`\`\`
string
\`\`\`

Переведённая строка.

<span id="method_br2nl" />

### br2nl [#br2nl]

\`\`\`
 br2nl(string  string, string  separator = PHP_EOL) : string
\`\`\`

#### Краткое содержание [#краткое-содержание-1]

Преобразует теги \`&lt;br&gt;\` в заданный разделитель строк.

#### Описание [#описание-1]

Данная функция заменяет все теги \`&lt;br&gt;\` (включая различные его варианты, такие как \`&lt;br&gt;\`, \`&lt;br/&gt;\` и \`&lt;br /&gt;\`)
на указанный разделитель строк. Если переданный разделитель не входит в список допустимых
значений, будет использован стандартный разделитель \`PHP_EOL\`.

#### Свойства: [#свойства-1]

| Название       | Тип    | По умолчанию |
| -------------- | ------ | ------------ |
| **$string**    | string |              |
| **$separator** | string | PHP\\_EOL     |

#### Ошибки: [#ошибки-1]

| Тип                       | Описание                                                                  |
| ------------------------- | ------------------------------------------------------------------------- |
| \\InvalidArgumentException | Исключение выбрасывается, если входные данные недействительны или пустые. |

#### Возвращает: [#возвращает-1]

\`\`\`
string
\`\`\`

Строка, в которой все \`&lt;br&gt;\` заменены на указанный разделитель.

<span id="method_clearfilepath" />

### clearfilepath [#clearfilepath]

\`\`\`
 clearfilepath(mixed  file, mixed  ext = []) : string
\`\`\`

#### Свойства: [#свойства-2]

| Название  | Тип   | По умолчанию |
| --------- | ----- | ------------ |
| **$file** | mixed |              |
| **$ext**  | mixed | \\[]          |

#### Возвращает: [#возвращает-2]

\`\`\`
string
\`\`\`

<span id="method_dirToArray" />

### dirToArray [#dirtoarray]

\`\`\`
 dirToArray(string  dir, array  ignoredExtensions = []) : array
\`\`\`

#### Краткое содержание [#краткое-содержание-2]

Преобразует заданный путь к директории в массив, содержащий дерево папок и файлов.

#### Описание [#описание-2]

Эта функция позволяет получить структуру файловой системы в виде ассоциативного массива.
Папки представлены в виде ключей, а файлы - в виде элементов массива.
Также поддерживает возможность исключения определенных файлов и расширений.

#### Свойства: [#свойства-3]

| Название               | Тип    | По умолчанию |
| ---------------------- | ------ | ------------ |
| **$dir**               | string |              |
| **$ignoredExtensions** | array  | \\[]          |

#### Ошибки: [#ошибки-2]

| Тип               | Описание                                                  |
| ----------------- | --------------------------------------------------------- |
| \\RuntimeException | Если \`scandir\` не удается получить содержимое директории. |

#### Возвращает: [#возвращает-3]

\`\`\`
array
\`\`\`

Массив, представляющий собой дерево файловой структуры. Каждая директория содержит вложенные файлы/папки.

<span id="method_execute_query" />

### execute\\_query [#execute_query]

\`\`\`
 execute_query(mixed  id, mixed  query) : void
\`\`\`

#### Свойства: [#свойства-4]

| Название   | Тип   | По умолчанию |
| ---------- | ----- | ------------ |
| **$id**    | mixed |              |
| **$query** | mixed |              |

#### Возвращает: [#возвращает-4]

\`\`\`
void
\`\`\`

<span id="method_translate" />

### translate [#translate]

\`\`\`
 translate(string  phrase, array  params = [], int  count) : string
\`\`\`

#### Краткое содержание [#краткое-содержание-3]

Переводит заданную фразу с использованием модуля перевода.

#### Описание [#описание-3]

Если язык и путь для локалей не установлены в конфигурации, возвращает исходную фразу.
В зависимости от переданных параметров, поддерживает как обрабатываемый,
так и базовый перевод с использованием модулей \`MhTranslation\`.
При возникновении ошибки логирует её и возвращает исходную фразу.

#### Смотри так-же: [#смотри-так-же-1]

* [\\DataManager::getConfig()](./classes/DataManager#method_getConfig)
* [\\MhTranslation::setTranslator()](./classes/MhTranslation#method_setTranslator)
* [\\MhTranslation::getTranslation()](./classes/MhTranslation#method_getTranslation)
* [\\MhTranslation::getTranslationWithParameters()](./classes/MhTranslation#method_getTranslationWithParameters)
* [\\MhTranslation::getTranslationPlural()](./classes/MhTranslation#method_getTranslationPlural)
* [\\MhTranslation::getTranslationPluralWithParameters()](./classes/MhTranslation#method_getTranslationPluralWithParameters)
* [\\LogGenerator::generateLog()](./classes/LogGenerator#method_generateLog)

#### Свойства: [#свойства-5]

| Название    | Тип    | По умолчанию |
| ----------- | ------ | ------------ |
| **$phrase** | string |              |
| **$params** | array  | \\[]          |
| **$count**  | int    | 0            |

#### Ошибки: [#ошибки-3]

| Тип        | Описание   |                                               |
| ---------- | ---------- | --------------------------------------------- |
| \\Exception | \\Throwable | Если возникает ошибка при работе с переводом. |

#### Возвращает: [#возвращает-5]

\`\`\`
string
\`\`\`

Переведённая строка.
`,o={contents:[{heading:`трейты`,content:`Название`},{heading:`трейты`,content:`Краткое содержание`},{heading:`трейты`,content:`\\AssetsChecker`},{heading:`трейты`,content:`Трейт для проверки и управления ассетами (файлы скриптов и стилей).`},{heading:`трейты`,content:`\\DataLoader`},{heading:`трейты`,content:`Трейт для загрузки данных с использованием кеша или базы данных.`},{heading:`трейты`,content:`\\DleData`},{heading:`трейты`,content:"Трейт `DleData` предоставляет методы для работы с дополнительными данными (xfields), пользователями, группами, категориями и другими сущностями в контексте системы управления данными."},{heading:`трейты`,content:`\\UpdatesChecker`},{heading:`трейты`,content:`Трейт UpdatesChecker предоставляет функции для работы с информацией об обновлениях ресурсов.`},{heading:`классы`,content:`Название`},{heading:`классы`,content:`Краткое содержание`},{heading:`классы`,content:`\\Admin`},{heading:`классы`,content:`Класс Admin предназначен для управления административной панелью проекта.`},{heading:`классы`,content:`\\AdminLink`},{heading:`классы`,content:"Класс `AdminLink` реализует функциональность для создания и управления административными ссылками, включая родительские связи, дочерние элементы, типы ссылок и дополнительные параметры."},{heading:`классы`,content:`\\AdminUrlExtension`},{heading:`классы`,content:`Класс предоставляет функции и глобальные переменные для использования в Twig-шаблонах.`},{heading:`классы`,content:`\\AjaxAbstractResponse`},{heading:`классы`,content:`Абстрактный класс, представляющий базовый ответ в виде JSON.`},{heading:`классы`,content:`\\Author`},{heading:`классы`,content:`Класс, представляющий автора с именем, списком контактов и пожертвований.`},{heading:`классы`,content:`\\BasisModel`},{heading:`классы`,content:`Базовый абстрактный класс модели, представляющий типовую сущность базы данных.`},{heading:`классы`,content:`\\BasisRepository`},{heading:`классы`,content:`Базовый репозиторий для работы с сущностями.`},{heading:`классы`,content:`\\BreadCrumb`},{heading:`классы`,content:`Класс, представляющий хлебную крошку для навигации.`},{heading:`классы`,content:`\\CacheControl`},{heading:`классы`,content:`Абстрактный класс для реализации управления кэшированием.`},{heading:`классы`,content:`\\ComposerAction`},{heading:`классы`,content:`\\DataManager`},{heading:`классы`,content:`Абстрактный класс DataManager, представляющий базовый функционал для менеджеров данных.`},{heading:`классы`,content:`\\DateTimeFormatter`},{heading:`классы`,content:`Расширение Twig для работы с форматированием даты и времени.`},{heading:`классы`,content:`\\DeclineExtension`},{heading:`классы`,content:`Склонение слова в зависимости от числа.`},{heading:`классы`,content:`\\ErrorResponseAjax`},{heading:`классы`,content:`Класс для формирования ответов об ошибке.`},{heading:`классы`,content:`\\LogGenerator`},{heading:`классы`,content:`Абстрактный класс для управления процессом логирования. Класс включает в себя базовый функционал для записи логов в файлы, базу данных и отправки уведомлений в Telegram.`},{heading:`классы`,content:`\\MhAjax`},{heading:`классы`,content:`Вспомогательный класс для работы с системой управления DLE`},{heading:`классы`,content:`\\MhDB`},{heading:`классы`,content:`Класс для работы с базой данных`},{heading:`классы`,content:`\\MhLog`},{heading:`классы`,content:`Базовый абстрактный класс модели, представляющий типовую сущность базы данных.`},{heading:`классы`,content:`\\MhLogRepository`},{heading:`классы`,content:`Базовый репозиторий для работы с сущностями.`},{heading:`классы`,content:`\\MhTranslation`},{heading:`классы`,content:`Класс для оформления фраз переводов`},{heading:`классы`,content:`\\MobileDetectExtension`},{heading:`классы`,content:`Расширение Twig, основанное на MobileDetect.`},{heading:`классы`,content:`\\SuccessResponseAjax`},{heading:`классы`,content:`Представляет успешный HTTP-ответ.`},{heading:`классы`,content:`\\TextLimiter`},{heading:`классы`,content:`Twig-расширение, предоставляющее инструмент для ограничения длины текста.`},{heading:`классы`,content:`\\TwigFilter`},{heading:`классы`,content:`Класс для создания и обработки фильтров данных, а также для работы с сортировкой и стандартными фильтрами для шаблонов.`},{heading:`mh_init`,content:`Определяет константу, используемую для инициализации системы.`},{heading:`mh_init`,content:`Константа используется для указания того, что система была успешно инициализирована.`},{heading:`mh_root`,content:"Константа `MH_ROOT` указывает на путь к директории `engine/inc/maharder` в структуре проекта.\nЭтот путь формируется на основе значения константы `ROOT_DIR`, определяющей корневую директорию проекта.\nКонстанта используется для упрощённого доступа к базовой директории функционала Maharder."},{heading:`mh_locales`,content:`Константа MH\\_ADMIN определяет путь к административной директории.
Формируется путем объединения константы MH\\_ROOT с поддиректорией '/admin'.`},{heading:`mh_locales-1`,content:`Константа, задающая путь к локализациям.`},{heading:`mh_locales-1`,content:"Константа `MH_LOCALES` определяет абсолютный путь к директории, в которой хранятся файлы локализаций. Основывается на значении константы `MH_ROOT` с добавлением директории `/_locales`."},{heading:`mh_modules`,content:`Определяет константу MH\\_MODULES, указывающую на путь к папке модулей в корневой директории.`},{heading:`mh_modules`,content:"Константа используется для задания базового пути к директории с модулями, относительно константы  `MH_ROOT`, которая должна быть определена ранее."},{heading:`mh_includes`,content:"Определяет константу `MH_INCLUDES`, содержащую путь к директории `_includes` внутри корневой директории."},{heading:`mh_includes`,content:"Константа используется для централизованного указания пути к дополнительным включаемым файлам проекта.\nЗначение формируется путем объединения значения константы `MH_ROOT` и строки `/_includes`."},{heading:`mh_config`,content:`Определяет путь к папке конфигурации приложения.`},{heading:`mh_config`,content:"Константа `MH_CONFIG` содержит полный путь к директории `_config`, основываясь на значении корневой директории `MH_ROOT`"},{heading:`mh_templates`,content:`Определяет константу MH\\_TEMPLATES, которая содержит путь к директории с шаблонами проекта.
Значение пути формируется на основе константы MH\\_ROOT с добавлением поддиректории '\\_templates'.`},{heading:`composer_dir`,content:`Определяет константу COMPOSER\\_DIR, которая содержит путь к директории с композером.`},{heading:`краткое-содержание`,content:`Синоним функции перевода translate для упрощённого использования.`},{heading:`описание`,content:`Служит для вызова функции перевода текстовых строк с возможностью передачи параметров и обработки множественного числа.`},{heading:`смотри-так-же`,content:`\\translate()`},{heading:`смотри-так-же`,content:`\\DataManager::getConfig()`},{heading:`свойства`,content:`Название`},{heading:`свойства`,content:`Тип`},{heading:`свойства`,content:`По умолчанию`},{heading:`свойства`,content:`**$phrase**`},{heading:`свойства`,content:`string`},{heading:`свойства`,content:`**$params**`},{heading:`свойства`,content:`array`},{heading:`свойства`,content:`\\[]`},{heading:`свойства`,content:`**$count**`},{heading:`свойства`,content:`int`},{heading:`свойства`,content:`0`},{heading:`ошибки`,content:`Тип`},{heading:`ошибки`,content:`Описание`},{heading:`ошибки`,content:`\\Throwable`},{heading:`возвращает`,content:`Переведённая строка.`},{heading:`краткое-содержание-1`,content:"Преобразует теги `&lt;br&gt;` в заданный разделитель строк."},{heading:`описание-1`,content:"Данная функция заменяет все теги `&lt;br&gt;` (включая различные его варианты, такие как `&lt;br&gt;`, `&lt;br/&gt;` и `&lt;br /&gt;`)\nна указанный разделитель строк. Если переданный разделитель не входит в список допустимых\nзначений, будет использован стандартный разделитель `PHP_EOL`."},{heading:`свойства-1`,content:`Название`},{heading:`свойства-1`,content:`Тип`},{heading:`свойства-1`,content:`По умолчанию`},{heading:`свойства-1`,content:`**$string**`},{heading:`свойства-1`,content:`string`},{heading:`свойства-1`,content:`**$separator**`},{heading:`свойства-1`,content:`string`},{heading:`свойства-1`,content:`PHP\\_EOL`},{heading:`ошибки-1`,content:`Тип`},{heading:`ошибки-1`,content:`Описание`},{heading:`ошибки-1`,content:`\\InvalidArgumentException`},{heading:`ошибки-1`,content:`Исключение выбрасывается, если входные данные недействительны или пустые.`},{heading:`возвращает-1`,content:"Строка, в которой все `&lt;br&gt;` заменены на указанный разделитель."},{heading:`свойства-2`,content:`Название`},{heading:`свойства-2`,content:`Тип`},{heading:`свойства-2`,content:`По умолчанию`},{heading:`свойства-2`,content:`**$file**`},{heading:`свойства-2`,content:`mixed`},{heading:`свойства-2`,content:`**$ext**`},{heading:`свойства-2`,content:`mixed`},{heading:`свойства-2`,content:`\\[]`},{heading:`краткое-содержание-2`,content:`Преобразует заданный путь к директории в массив, содержащий дерево папок и файлов.`},{heading:`описание-2`,content:`Эта функция позволяет получить структуру файловой системы в виде ассоциативного массива.
Папки представлены в виде ключей, а файлы - в виде элементов массива.
Также поддерживает возможность исключения определенных файлов и расширений.`},{heading:`свойства-3`,content:`Название`},{heading:`свойства-3`,content:`Тип`},{heading:`свойства-3`,content:`По умолчанию`},{heading:`свойства-3`,content:`**$dir**`},{heading:`свойства-3`,content:`string`},{heading:`свойства-3`,content:`**$ignoredExtensions**`},{heading:`свойства-3`,content:`array`},{heading:`свойства-3`,content:`\\[]`},{heading:`ошибки-2`,content:`Тип`},{heading:`ошибки-2`,content:`Описание`},{heading:`ошибки-2`,content:`\\RuntimeException`},{heading:`ошибки-2`,content:"Если `scandir` не удается получить содержимое директории."},{heading:`возвращает-3`,content:`Массив, представляющий собой дерево файловой структуры. Каждая директория содержит вложенные файлы/папки.`},{heading:`свойства-4`,content:`Название`},{heading:`свойства-4`,content:`Тип`},{heading:`свойства-4`,content:`По умолчанию`},{heading:`свойства-4`,content:`**$id**`},{heading:`свойства-4`,content:`mixed`},{heading:`свойства-4`,content:`**$query**`},{heading:`свойства-4`,content:`mixed`},{heading:`краткое-содержание-3`,content:`Переводит заданную фразу с использованием модуля перевода.`},{heading:`описание-3`,content:`Если язык и путь для локалей не установлены в конфигурации, возвращает исходную фразу.
В зависимости от переданных параметров, поддерживает как обрабатываемый,
так и базовый перевод с использованием модулей \`MhTranslation\`.
При возникновении ошибки логирует её и возвращает исходную фразу.`},{heading:`смотри-так-же-1`,content:`\\DataManager::getConfig()`},{heading:`смотри-так-же-1`,content:`\\MhTranslation::setTranslator()`},{heading:`смотри-так-же-1`,content:`\\MhTranslation::getTranslation()`},{heading:`смотри-так-же-1`,content:`\\MhTranslation::getTranslationWithParameters()`},{heading:`смотри-так-же-1`,content:`\\MhTranslation::getTranslationPlural()`},{heading:`смотри-так-же-1`,content:`\\MhTranslation::getTranslationPluralWithParameters()`},{heading:`смотри-так-же-1`,content:`\\LogGenerator::generateLog()`},{heading:`свойства-5`,content:`Название`},{heading:`свойства-5`,content:`Тип`},{heading:`свойства-5`,content:`По умолчанию`},{heading:`свойства-5`,content:`**$phrase**`},{heading:`свойства-5`,content:`string`},{heading:`свойства-5`,content:`**$params**`},{heading:`свойства-5`,content:`array`},{heading:`свойства-5`,content:`\\[]`},{heading:`свойства-5`,content:`**$count**`},{heading:`свойства-5`,content:`int`},{heading:`свойства-5`,content:`0`},{heading:`ошибки-3`,content:`Тип`},{heading:`ошибки-3`,content:`Описание`},{heading:`ошибки-3`,content:`\\Exception`},{heading:`ошибки-3`,content:`\\Throwable`},{heading:`ошибки-3`,content:`Если возникает ошибка при работе с переводом.`},{heading:`возвращает-5`,content:`Переведённая строка.`}],headings:[{id:`трейты`,content:`Трейты`},{id:`классы`,content:`Классы`},{id:`константы`,content:`Константы`},{id:`mh_init`,content:`MH_INIT`},{id:`mh_root`,content:`MH_ROOT`},{id:`mh_locales`,content:`MH_LOCALES`},{id:`mh_locales-1`,content:`MH_LOCALES`},{id:`mh_modules`,content:`MH_MODULES`},{id:`mh_includes`,content:`MH_INCLUDES`},{id:`mh_config`,content:`MH_CONFIG`},{id:`mh_templates`,content:`MH_TEMPLATES`},{id:`composer_dir`,content:`COMPOSER_DIR`},{id:`функции--методы`,content:`Функции / Методы`},{id:`__`,content:`\\__`},{id:`краткое-содержание`,content:`Краткое содержание`},{id:`описание`,content:`Описание`},{id:`смотри-так-же`,content:`Смотри так-же:`},{id:`свойства`,content:`Свойства:`},{id:`ошибки`,content:`Ошибки:`},{id:`возвращает`,content:`Возвращает:`},{id:`br2nl`,content:`br2nl`},{id:`краткое-содержание-1`,content:`Краткое содержание`},{id:`описание-1`,content:`Описание`},{id:`свойства-1`,content:`Свойства:`},{id:`ошибки-1`,content:`Ошибки:`},{id:`возвращает-1`,content:`Возвращает:`},{id:`clearfilepath`,content:`clearfilepath`},{id:`свойства-2`,content:`Свойства:`},{id:`возвращает-2`,content:`Возвращает:`},{id:`dirtoarray`,content:`dirToArray`},{id:`краткое-содержание-2`,content:`Краткое содержание`},{id:`описание-2`,content:`Описание`},{id:`свойства-3`,content:`Свойства:`},{id:`ошибки-2`,content:`Ошибки:`},{id:`возвращает-3`,content:`Возвращает:`},{id:`execute_query`,content:`execute_query`},{id:`свойства-4`,content:`Свойства:`},{id:`возвращает-4`,content:`Возвращает:`},{id:`translate`,content:`translate`},{id:`краткое-содержание-3`,content:`Краткое содержание`},{id:`описание-3`,content:`Описание`},{id:`смотри-так-же-1`,content:`Смотри так-же:`},{id:`свойства-5`,content:`Свойства:`},{id:`ошибки-3`,content:`Ошибки:`},{id:`возвращает-5`,content:`Возвращает:`}]},s=[{depth:2,url:`#трейты`,title:(0,n.jsx)(n.Fragment,{children:`Трейты`})},{depth:2,url:`#классы`,title:(0,n.jsx)(n.Fragment,{children:`Классы`})},{depth:2,url:`#константы`,title:(0,n.jsx)(n.Fragment,{children:`Константы`})},{depth:3,url:`#mh_init`,title:(0,n.jsx)(n.Fragment,{children:`MH_INIT`})},{depth:3,url:`#mh_root`,title:(0,n.jsx)(n.Fragment,{children:`MH_ROOT`})},{depth:3,url:`#mh_locales`,title:(0,n.jsx)(n.Fragment,{children:`MH_LOCALES`})},{depth:3,url:`#mh_locales-1`,title:(0,n.jsx)(n.Fragment,{children:`MH_LOCALES`})},{depth:3,url:`#mh_modules`,title:(0,n.jsx)(n.Fragment,{children:`MH_MODULES`})},{depth:3,url:`#mh_includes`,title:(0,n.jsx)(n.Fragment,{children:`MH_INCLUDES`})},{depth:3,url:`#mh_config`,title:(0,n.jsx)(n.Fragment,{children:`MH_CONFIG`})},{depth:3,url:`#mh_templates`,title:(0,n.jsx)(n.Fragment,{children:`MH_TEMPLATES`})},{depth:3,url:`#composer_dir`,title:(0,n.jsxs)(n.Fragment,{children:[`COMPOSER_DIR`,(0,n.jsx)(`span`,{id:`constant_COMPOSER_DIR`})]})},{depth:2,url:`#функции--методы`,title:(0,n.jsx)(n.Fragment,{children:`Функции / Методы`})},{depth:3,url:`#__`,title:(0,n.jsx)(n.Fragment,{children:`__`})},{depth:4,url:`#краткое-содержание`,title:(0,n.jsx)(n.Fragment,{children:`Краткое содержание`})},{depth:4,url:`#описание`,title:(0,n.jsx)(n.Fragment,{children:`Описание`})},{depth:4,url:`#смотри-так-же`,title:(0,n.jsx)(n.Fragment,{children:`Смотри так-же:`})},{depth:4,url:`#свойства`,title:(0,n.jsx)(n.Fragment,{children:`Свойства:`})},{depth:4,url:`#ошибки`,title:(0,n.jsx)(n.Fragment,{children:`Ошибки:`})},{depth:4,url:`#возвращает`,title:(0,n.jsx)(n.Fragment,{children:`Возвращает:`})},{depth:3,url:`#br2nl`,title:(0,n.jsx)(n.Fragment,{children:`br2nl`})},{depth:4,url:`#краткое-содержание-1`,title:(0,n.jsx)(n.Fragment,{children:`Краткое содержание`})},{depth:4,url:`#описание-1`,title:(0,n.jsx)(n.Fragment,{children:`Описание`})},{depth:4,url:`#свойства-1`,title:(0,n.jsx)(n.Fragment,{children:`Свойства:`})},{depth:4,url:`#ошибки-1`,title:(0,n.jsx)(n.Fragment,{children:`Ошибки:`})},{depth:4,url:`#возвращает-1`,title:(0,n.jsx)(n.Fragment,{children:`Возвращает:`})},{depth:3,url:`#clearfilepath`,title:(0,n.jsx)(n.Fragment,{children:`clearfilepath`})},{depth:4,url:`#свойства-2`,title:(0,n.jsx)(n.Fragment,{children:`Свойства:`})},{depth:4,url:`#возвращает-2`,title:(0,n.jsx)(n.Fragment,{children:`Возвращает:`})},{depth:3,url:`#dirtoarray`,title:(0,n.jsx)(n.Fragment,{children:`dirToArray`})},{depth:4,url:`#краткое-содержание-2`,title:(0,n.jsx)(n.Fragment,{children:`Краткое содержание`})},{depth:4,url:`#описание-2`,title:(0,n.jsx)(n.Fragment,{children:`Описание`})},{depth:4,url:`#свойства-3`,title:(0,n.jsx)(n.Fragment,{children:`Свойства:`})},{depth:4,url:`#ошибки-2`,title:(0,n.jsx)(n.Fragment,{children:`Ошибки:`})},{depth:4,url:`#возвращает-3`,title:(0,n.jsx)(n.Fragment,{children:`Возвращает:`})},{depth:3,url:`#execute_query`,title:(0,n.jsx)(n.Fragment,{children:`execute_query`})},{depth:4,url:`#свойства-4`,title:(0,n.jsx)(n.Fragment,{children:`Свойства:`})},{depth:4,url:`#возвращает-4`,title:(0,n.jsx)(n.Fragment,{children:`Возвращает:`})},{depth:3,url:`#translate`,title:(0,n.jsx)(n.Fragment,{children:`translate`})},{depth:4,url:`#краткое-содержание-3`,title:(0,n.jsx)(n.Fragment,{children:`Краткое содержание`})},{depth:4,url:`#описание-3`,title:(0,n.jsx)(n.Fragment,{children:`Описание`})},{depth:4,url:`#смотри-так-же-1`,title:(0,n.jsx)(n.Fragment,{children:`Смотри так-же:`})},{depth:4,url:`#свойства-5`,title:(0,n.jsx)(n.Fragment,{children:`Свойства:`})},{depth:4,url:`#ошибки-3`,title:(0,n.jsx)(n.Fragment,{children:`Ошибки:`})},{depth:4,url:`#возвращает-5`,title:(0,n.jsx)(n.Fragment,{children:`Возвращает:`})}];function c(e){let t={a:`a`,code:`code`,h2:`h2`,h3:`h3`,h4:`h4`,li:`li`,p:`p`,pre:`pre`,span:`span`,strong:`strong`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,ul:`ul`,...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h2,{id:`трейты`,children:`Трейты`}),`
`,(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`Название`}),(0,n.jsx)(t.th,{children:`Краткое содержание`})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:`./classes/AssetsChecker`,children:`\\AssetsChecker`})}),(0,n.jsx)(t.td,{children:`Трейт для проверки и управления ассетами (файлы скриптов и стилей).`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:`./classes/DataLoader`,children:`\\DataLoader`})}),(0,n.jsx)(t.td,{children:`Трейт для загрузки данных с использованием кеша или базы данных.`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:`./classes/DleData`,children:`\\DleData`})}),(0,n.jsxs)(t.td,{children:[`Трейт `,(0,n.jsx)(t.code,{children:`DleData`}),` предоставляет методы для работы с дополнительными данными (xfields), пользователями, группами, категориями и другими сущностями в контексте системы управления данными.`]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:`./classes/UpdatesChecker`,children:`\\UpdatesChecker`})}),(0,n.jsx)(t.td,{children:`Трейт UpdatesChecker предоставляет функции для работы с информацией об обновлениях ресурсов.`})]})]})]}),`
`,(0,n.jsx)(t.h2,{id:`классы`,children:`Классы`}),`
`,(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`Название`}),(0,n.jsx)(t.th,{children:`Краткое содержание`})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:`./classes/Admin`,children:`\\Admin`})}),(0,n.jsx)(t.td,{children:`Класс Admin предназначен для управления административной панелью проекта.`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:`./classes/AdminLink`,children:`\\AdminLink`})}),(0,n.jsxs)(t.td,{children:[`Класс `,(0,n.jsx)(t.code,{children:`AdminLink`}),` реализует функциональность для создания и управления административными ссылками, включая родительские связи, дочерние элементы, типы ссылок и дополнительные параметры.`]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:`./classes/AdminUrlExtension`,children:`\\AdminUrlExtension`})}),(0,n.jsx)(t.td,{children:`Класс предоставляет функции и глобальные переменные для использования в Twig-шаблонах.`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:`./classes/AjaxAbstractResponse`,children:`\\AjaxAbstractResponse`})}),(0,n.jsx)(t.td,{children:`Абстрактный класс, представляющий базовый ответ в виде JSON.`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:`./classes/Author`,children:`\\Author`})}),(0,n.jsx)(t.td,{children:`Класс, представляющий автора с именем, списком контактов и пожертвований.`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:`./classes/BasisModel`,children:`\\BasisModel`})}),(0,n.jsx)(t.td,{children:`Базовый абстрактный класс модели, представляющий типовую сущность базы данных.`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:`./classes/BasisRepository`,children:`\\BasisRepository`})}),(0,n.jsx)(t.td,{children:`Базовый репозиторий для работы с сущностями.`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:`./classes/BreadCrumb`,children:`\\BreadCrumb`})}),(0,n.jsx)(t.td,{children:`Класс, представляющий хлебную крошку для навигации.`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:`./classes/CacheControl`,children:`\\CacheControl`})}),(0,n.jsx)(t.td,{children:`Абстрактный класс для реализации управления кэшированием.`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:`./classes/ComposerAction`,children:`\\ComposerAction`})}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:`./classes/DataManager`,children:`\\DataManager`})}),(0,n.jsx)(t.td,{children:`Абстрактный класс DataManager, представляющий базовый функционал для менеджеров данных.`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:`./classes/DateTimeFormatter`,children:`\\DateTimeFormatter`})}),(0,n.jsx)(t.td,{children:`Расширение Twig для работы с форматированием даты и времени.`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:`./classes/DeclineExtension`,children:`\\DeclineExtension`})}),(0,n.jsx)(t.td,{children:`Склонение слова в зависимости от числа.`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:`./classes/ErrorResponseAjax`,children:`\\ErrorResponseAjax`})}),(0,n.jsx)(t.td,{children:`Класс для формирования ответов об ошибке.`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:`./classes/LogGenerator`,children:`\\LogGenerator`})}),(0,n.jsx)(t.td,{children:`Абстрактный класс для управления процессом логирования. Класс включает в себя базовый функционал для записи логов в файлы, базу данных и отправки уведомлений в Telegram.`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:`./classes/MhAjax`,children:`\\MhAjax`})}),(0,n.jsx)(t.td,{children:`Вспомогательный класс для работы с системой управления DLE`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:`./classes/MhDB`,children:`\\MhDB`})}),(0,n.jsx)(t.td,{children:`Класс для работы с базой данных`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:`./classes/MhLog`,children:`\\MhLog`})}),(0,n.jsx)(t.td,{children:`Базовый абстрактный класс модели, представляющий типовую сущность базы данных.`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:`./classes/MhLogRepository`,children:`\\MhLogRepository`})}),(0,n.jsx)(t.td,{children:`Базовый репозиторий для работы с сущностями.`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:`./classes/MhTranslation`,children:`\\MhTranslation`})}),(0,n.jsx)(t.td,{children:`Класс для оформления фраз переводов`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:`./classes/MobileDetectExtension`,children:`\\MobileDetectExtension`})}),(0,n.jsx)(t.td,{children:`Расширение Twig, основанное на MobileDetect.`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:`./classes/SuccessResponseAjax`,children:`\\SuccessResponseAjax`})}),(0,n.jsx)(t.td,{children:`Представляет успешный HTTP-ответ.`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:`./classes/TextLimiter`,children:`\\TextLimiter`})}),(0,n.jsx)(t.td,{children:`Twig-расширение, предоставляющее инструмент для ограничения длины текста.`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:`./classes/TwigFilter`,children:`\\TwigFilter`})}),(0,n.jsx)(t.td,{children:`Класс для создания и обработки фильтров данных, а также для работы с сортировкой и стандартными фильтрами для шаблонов.`})]})]})]}),`
`,(0,n.jsx)(t.h2,{id:`константы`,children:`Константы`}),`
`,(0,n.jsx)(`span`,{id:`constant_MH_INIT`}),`
`,(0,n.jsx)(t.h3,{id:`mh_init`,children:`MH_INIT`}),`
`,(0,n.jsx)(t.p,{children:`Определяет константу, используемую для инициализации системы.`}),`
`,(0,n.jsx)(t.p,{children:`Константа используется для указания того, что система была успешно инициализирована.`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`define("MH_INIT", true);`})})})})}),`
`,(0,n.jsx)(`span`,{id:`constant_MH_ROOT`}),`
`,(0,n.jsx)(t.h3,{id:`mh_root`,children:`MH_ROOT`}),`
`,(0,n.jsxs)(t.p,{children:[`Константа `,(0,n.jsx)(t.code,{children:`MH_ROOT`}),` указывает на путь к директории `,(0,n.jsx)(t.code,{children:`engine/inc/maharder`}),` в структуре проекта.
Этот путь формируется на основе значения константы `,(0,n.jsx)(t.code,{children:`ROOT_DIR`}),`, определяющей корневую директорию проекта.
Константа используется для упрощённого доступа к базовой директории функционала Maharder.`]}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`define("MH_ROOT", ROOT_DIR . '/engine/inc/maharder');`})})})})}),`
`,(0,n.jsx)(`span`,{id:`constant_MH_ADMIN`}),`
`,(0,n.jsx)(t.h3,{id:`mh_locales`,children:`MH_LOCALES`}),`
`,(0,n.jsx)(t.p,{children:`Константа MH_ADMIN определяет путь к административной директории.
Формируется путем объединения константы MH_ROOT с поддиректорией '/admin'.`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`define("MH_ADMIN", MH_ROOT . '/admin');`})})})})}),`
`,(0,n.jsx)(`span`,{id:`constant_MH_LOCALES`}),`
`,(0,n.jsx)(t.h3,{id:`mh_locales-1`,children:`MH_LOCALES`}),`
`,(0,n.jsx)(t.p,{children:`Константа, задающая путь к локализациям.`}),`
`,(0,n.jsxs)(t.p,{children:[`Константа `,(0,n.jsx)(t.code,{children:`MH_LOCALES`}),` определяет абсолютный путь к директории, в которой хранятся файлы локализаций. Основывается на значении константы `,(0,n.jsx)(t.code,{children:`MH_ROOT`}),` с добавлением директории `,(0,n.jsx)(t.code,{children:`/_locales`}),`.`]}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`define("MH_LOCALES", MH_ROOT . '/_locales');`})})})})}),`
`,(0,n.jsx)(`span`,{id:`constant_MH_MODULES`}),`
`,(0,n.jsx)(t.h3,{id:`mh_modules`,children:`MH_MODULES`}),`
`,(0,n.jsx)(t.p,{children:`Определяет константу MH_MODULES, указывающую на путь к папке модулей в корневой директории.`}),`
`,(0,n.jsxs)(t.p,{children:[`Константа используется для задания базового пути к директории с модулями, относительно константы  `,(0,n.jsx)(t.code,{children:`MH_ROOT`}),`, которая должна быть определена ранее.`]}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`define("MH_LOCALES", MH_ROOT . '/_modules');`})})})})}),`
`,(0,n.jsx)(`span`,{id:`constant_MH_INCLUDES`}),`
`,(0,n.jsx)(t.h3,{id:`mh_includes`,children:`MH_INCLUDES`}),`
`,(0,n.jsxs)(t.p,{children:[`Определяет константу `,(0,n.jsx)(t.code,{children:`MH_INCLUDES`}),`, содержащую путь к директории `,(0,n.jsx)(t.code,{children:`_includes`}),` внутри корневой директории.`]}),`
`,(0,n.jsxs)(t.p,{children:[`Константа используется для централизованного указания пути к дополнительным включаемым файлам проекта.
Значение формируется путем объединения значения константы `,(0,n.jsx)(t.code,{children:`MH_ROOT`}),` и строки `,(0,n.jsx)(t.code,{children:`/_includes`}),`.`]}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`define("MH_LOCALES", MH_ROOT . '/_includes');`})})})})}),`
`,(0,n.jsx)(`span`,{id:`constant_MH_CONFIG`}),`
`,(0,n.jsx)(t.h3,{id:`mh_config`,children:`MH_CONFIG`}),`
`,(0,n.jsx)(t.p,{children:`Определяет путь к папке конфигурации приложения.`}),`
`,(0,n.jsxs)(t.p,{children:[`Константа `,(0,n.jsx)(t.code,{children:`MH_CONFIG`}),` содержит полный путь к директории `,(0,n.jsx)(t.code,{children:`_config`}),`, основываясь на значении корневой директории `,(0,n.jsx)(t.code,{children:`MH_ROOT`})]}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`define("MH_LOCALES", MH_ROOT . '/_config');`})})})})}),`
`,(0,n.jsx)(`span`,{id:`constant_MH_TEMPLATES`}),`
`,(0,n.jsx)(t.h3,{id:`mh_templates`,children:`MH_TEMPLATES`}),`
`,(0,n.jsx)(t.p,{children:`Определяет константу MH_TEMPLATES, которая содержит путь к директории с шаблонами проекта.
Значение пути формируется на основе константы MH_ROOT с добавлением поддиректории '_templates'.`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`define("MH_LOCALES", MH_ROOT . '/_templates');`})})})})}),`
`,(0,n.jsxs)(t.h3,{id:`composer_dir`,children:[`COMPOSER_DIR`,(0,n.jsx)(`span`,{id:`constant_COMPOSER_DIR`})]}),`
`,(0,n.jsxs)(t.p,{children:[`Определяет константу COMPOSER_DIR, которая содержит путь к директории с `,(0,n.jsx)(t.a,{href:`../../../instructions/composer`,children:`композером`}),`.`]}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`define("COMPOSER_DIR", MH_INCLUDES . '/composer');`})})})})}),`
`,(0,n.jsx)(t.h2,{id:`функции--методы`,children:`Функции / Методы`}),`
`,(0,n.jsx)(`span`,{id:`method___`}),`
`,(0,n.jsx)(t.h3,{id:`__`,children:`__`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:` __(string  phrase, array  params = [], int  count) : string`})})})})}),`
`,(0,n.jsx)(t.h4,{id:`краткое-содержание`,children:`Краткое содержание`}),`
`,(0,n.jsx)(t.p,{children:`Синоним функции перевода translate для упрощённого использования.`}),`
`,(0,n.jsx)(t.h4,{id:`описание`,children:`Описание`}),`
`,(0,n.jsx)(t.p,{children:`Служит для вызова функции перевода текстовых строк с возможностью передачи параметров и обработки множественного числа.`}),`
`,(0,n.jsx)(t.h4,{id:`смотри-так-же`,children:`Смотри так-же:`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`#method_translate`,children:`\\translate()`})}),`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`./classes/DataManager#method_getConfig`,children:`\\DataManager::getConfig()`})}),`
`]}),`
`,(0,n.jsx)(t.h4,{id:`свойства`,children:`Свойства:`}),`
`,(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`Название`}),(0,n.jsx)(t.th,{children:`Тип`}),(0,n.jsx)(t.th,{children:`По умолчанию`})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:`$phrase`})}),(0,n.jsx)(t.td,{children:`string`}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:`$params`})}),(0,n.jsx)(t.td,{children:`array`}),(0,n.jsx)(t.td,{children:`[]`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:`$count`})}),(0,n.jsx)(t.td,{children:`int`}),(0,n.jsx)(t.td,{children:`0`})]})]})]}),`
`,(0,n.jsx)(t.h4,{id:`ошибки`,children:`Ошибки:`}),`
`,(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`Тип`}),(0,n.jsx)(t.th,{children:`Описание`})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`\\Throwable`}),(0,n.jsx)(t.td,{})]})})]}),`
`,(0,n.jsx)(t.h4,{id:`возвращает`,children:`Возвращает:`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`string`})})})})}),`
`,(0,n.jsx)(t.p,{children:`Переведённая строка.`}),`
`,(0,n.jsx)(`span`,{id:`method_br2nl`}),`
`,(0,n.jsx)(t.h3,{id:`br2nl`,children:`br2nl`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:` br2nl(string  string, string  separator = PHP_EOL) : string`})})})})}),`
`,(0,n.jsx)(t.h4,{id:`краткое-содержание-1`,children:`Краткое содержание`}),`
`,(0,n.jsxs)(t.p,{children:[`Преобразует теги `,(0,n.jsx)(t.code,{children:`&lt;br&gt;`}),` в заданный разделитель строк.`]}),`
`,(0,n.jsx)(t.h4,{id:`описание-1`,children:`Описание`}),`
`,(0,n.jsxs)(t.p,{children:[`Данная функция заменяет все теги `,(0,n.jsx)(t.code,{children:`&lt;br&gt;`}),` (включая различные его варианты, такие как `,(0,n.jsx)(t.code,{children:`&lt;br&gt;`}),`, `,(0,n.jsx)(t.code,{children:`&lt;br/&gt;`}),` и `,(0,n.jsx)(t.code,{children:`&lt;br /&gt;`}),`)
на указанный разделитель строк. Если переданный разделитель не входит в список допустимых
значений, будет использован стандартный разделитель `,(0,n.jsx)(t.code,{children:`PHP_EOL`}),`.`]}),`
`,(0,n.jsx)(t.h4,{id:`свойства-1`,children:`Свойства:`}),`
`,(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`Название`}),(0,n.jsx)(t.th,{children:`Тип`}),(0,n.jsx)(t.th,{children:`По умолчанию`})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:`$string`})}),(0,n.jsx)(t.td,{children:`string`}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:`$separator`})}),(0,n.jsx)(t.td,{children:`string`}),(0,n.jsx)(t.td,{children:`PHP_EOL`})]})]})]}),`
`,(0,n.jsx)(t.h4,{id:`ошибки-1`,children:`Ошибки:`}),`
`,(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`Тип`}),(0,n.jsx)(t.th,{children:`Описание`})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`\\InvalidArgumentException`}),(0,n.jsx)(t.td,{children:`Исключение выбрасывается, если входные данные недействительны или пустые.`})]})})]}),`
`,(0,n.jsx)(t.h4,{id:`возвращает-1`,children:`Возвращает:`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`string`})})})})}),`
`,(0,n.jsxs)(t.p,{children:[`Строка, в которой все `,(0,n.jsx)(t.code,{children:`&lt;br&gt;`}),` заменены на указанный разделитель.`]}),`
`,(0,n.jsx)(`span`,{id:`method_clearfilepath`}),`
`,(0,n.jsx)(t.h3,{id:`clearfilepath`,children:`clearfilepath`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:` clearfilepath(mixed  file, mixed  ext = []) : string`})})})})}),`
`,(0,n.jsx)(t.h4,{id:`свойства-2`,children:`Свойства:`}),`
`,(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`Название`}),(0,n.jsx)(t.th,{children:`Тип`}),(0,n.jsx)(t.th,{children:`По умолчанию`})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:`$file`})}),(0,n.jsx)(t.td,{children:`mixed`}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:`$ext`})}),(0,n.jsx)(t.td,{children:`mixed`}),(0,n.jsx)(t.td,{children:`[]`})]})]})]}),`
`,(0,n.jsx)(t.h4,{id:`возвращает-2`,children:`Возвращает:`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`string`})})})})}),`
`,(0,n.jsx)(`span`,{id:`method_dirToArray`}),`
`,(0,n.jsx)(t.h3,{id:`dirtoarray`,children:`dirToArray`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:` dirToArray(string  dir, array  ignoredExtensions = []) : array`})})})})}),`
`,(0,n.jsx)(t.h4,{id:`краткое-содержание-2`,children:`Краткое содержание`}),`
`,(0,n.jsx)(t.p,{children:`Преобразует заданный путь к директории в массив, содержащий дерево папок и файлов.`}),`
`,(0,n.jsx)(t.h4,{id:`описание-2`,children:`Описание`}),`
`,(0,n.jsx)(t.p,{children:`Эта функция позволяет получить структуру файловой системы в виде ассоциативного массива.
Папки представлены в виде ключей, а файлы - в виде элементов массива.
Также поддерживает возможность исключения определенных файлов и расширений.`}),`
`,(0,n.jsx)(t.h4,{id:`свойства-3`,children:`Свойства:`}),`
`,(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`Название`}),(0,n.jsx)(t.th,{children:`Тип`}),(0,n.jsx)(t.th,{children:`По умолчанию`})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:`$dir`})}),(0,n.jsx)(t.td,{children:`string`}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:`$ignoredExtensions`})}),(0,n.jsx)(t.td,{children:`array`}),(0,n.jsx)(t.td,{children:`[]`})]})]})]}),`
`,(0,n.jsx)(t.h4,{id:`ошибки-2`,children:`Ошибки:`}),`
`,(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`Тип`}),(0,n.jsx)(t.th,{children:`Описание`})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`\\RuntimeException`}),(0,n.jsxs)(t.td,{children:[`Если `,(0,n.jsx)(t.code,{children:`scandir`}),` не удается получить содержимое директории.`]})]})})]}),`
`,(0,n.jsx)(t.h4,{id:`возвращает-3`,children:`Возвращает:`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`array`})})})})}),`
`,(0,n.jsx)(t.p,{children:`Массив, представляющий собой дерево файловой структуры. Каждая директория содержит вложенные файлы/папки.`}),`
`,(0,n.jsx)(`span`,{id:`method_execute_query`}),`
`,(0,n.jsx)(t.h3,{id:`execute_query`,children:`execute_query`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:` execute_query(mixed  id, mixed  query) : void`})})})})}),`
`,(0,n.jsx)(t.h4,{id:`свойства-4`,children:`Свойства:`}),`
`,(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`Название`}),(0,n.jsx)(t.th,{children:`Тип`}),(0,n.jsx)(t.th,{children:`По умолчанию`})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:`$id`})}),(0,n.jsx)(t.td,{children:`mixed`}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:`$query`})}),(0,n.jsx)(t.td,{children:`mixed`}),(0,n.jsx)(t.td,{})]})]})]}),`
`,(0,n.jsx)(t.h4,{id:`возвращает-4`,children:`Возвращает:`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`void`})})})})}),`
`,(0,n.jsx)(`span`,{id:`method_translate`}),`
`,(0,n.jsx)(t.h3,{id:`translate`,children:`translate`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:` translate(string  phrase, array  params = [], int  count) : string`})})})})}),`
`,(0,n.jsx)(t.h4,{id:`краткое-содержание-3`,children:`Краткое содержание`}),`
`,(0,n.jsx)(t.p,{children:`Переводит заданную фразу с использованием модуля перевода.`}),`
`,(0,n.jsx)(t.h4,{id:`описание-3`,children:`Описание`}),`
`,(0,n.jsxs)(t.p,{children:[`Если язык и путь для локалей не установлены в конфигурации, возвращает исходную фразу.
В зависимости от переданных параметров, поддерживает как обрабатываемый,
так и базовый перевод с использованием модулей `,(0,n.jsx)(t.code,{children:`MhTranslation`}),`.
При возникновении ошибки логирует её и возвращает исходную фразу.`]}),`
`,(0,n.jsx)(t.h4,{id:`смотри-так-же-1`,children:`Смотри так-же:`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`./classes/DataManager#method_getConfig`,children:`\\DataManager::getConfig()`})}),`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`./classes/MhTranslation#method_setTranslator`,children:`\\MhTranslation::setTranslator()`})}),`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`./classes/MhTranslation#method_getTranslation`,children:`\\MhTranslation::getTranslation()`})}),`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`./classes/MhTranslation#method_getTranslationWithParameters`,children:`\\MhTranslation::getTranslationWithParameters()`})}),`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`./classes/MhTranslation#method_getTranslationPlural`,children:`\\MhTranslation::getTranslationPlural()`})}),`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`./classes/MhTranslation#method_getTranslationPluralWithParameters`,children:`\\MhTranslation::getTranslationPluralWithParameters()`})}),`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`./classes/LogGenerator#method_generateLog`,children:`\\LogGenerator::generateLog()`})}),`
`]}),`
`,(0,n.jsx)(t.h4,{id:`свойства-5`,children:`Свойства:`}),`
`,(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`Название`}),(0,n.jsx)(t.th,{children:`Тип`}),(0,n.jsx)(t.th,{children:`По умолчанию`})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:`$phrase`})}),(0,n.jsx)(t.td,{children:`string`}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:`$params`})}),(0,n.jsx)(t.td,{children:`array`}),(0,n.jsx)(t.td,{children:`[]`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:`$count`})}),(0,n.jsx)(t.td,{children:`int`}),(0,n.jsx)(t.td,{children:`0`})]})]})]}),`
`,(0,n.jsx)(t.h4,{id:`ошибки-3`,children:`Ошибки:`}),`
`,(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`Тип`}),(0,n.jsx)(t.th,{children:`Описание`})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`\\Exception`}),(0,n.jsx)(t.td,{children:`\\Throwable`})]})})]}),`
`,(0,n.jsx)(t.h4,{id:`возвращает-5`,children:`Возвращает:`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`string`})})})})}),`
`,(0,n.jsx)(t.p,{children:`Переведённая строка.`})]})}function l(e={}){let{wrapper:t}=e.components||{};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}export{a as _markdown,l as default,r as frontmatter,i as lastModified,o as structuredData,s as toc};