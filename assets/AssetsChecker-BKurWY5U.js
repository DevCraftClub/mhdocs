import{r as e}from"./rolldown-runtime-QTnfLwEv.js";import{t}from"./jsx-runtime-By8HlURe.js";var n=e(t()),r={title:`Класс: AssetsChecker`,description:`Документация по плагину класс: AssetsChecker для DLE.`},i=new Date(1785402405e3),a=`

## Краткое содержание: [#краткое-содержание]

Трейт для проверки и управления ассетами (файлы скриптов и стилей).

***

### Свойства [#свойства]

* private $[asset\\_file](#property_asset_file)
* private $[assets\\_arr](#property_assets_arr)
* private $[assets\\_dir](#property_assets_dir)

***

### Методы [#методы]

* public [checkAssets()](#method_checkAssets)
* public [parseAssets()](#method_parseAssets)
* public [save\\_asset()](#method_save_asset)
* private [fetchFileContent()](#method_fetchFileContent)
* private [generateFileMetadata()](#method_generateFileMetadata)
* private [parse\\_assets()](#method_parse_assets)
* private [prepare\\_assets()](#method_prepare_assets)
* private [saveFile()](#method_saveFile)

***

### Подробности [#подробности]

* Путь: engine/inc/maharder/\\_includes/traits/AssetsChecker.php

***

## Свойства [#свойства-1]

<span id="property_asset_file" />

#### private $asset\\_file : string [#private-asset_file--string]

***

**Краткое содержание**

Файл с информацией и хешами вспомогательных файлов

**Тип:** <abbr title="string">Текст</abbr>

<span id="property_assets_arr" />

#### private $assets\\_arr : array [#private-assets_arr--array]

***

**Краткое содержание**

Массив со всеми данными для обновления стилей и скриптов

**Тип:** <abbr title="array">Массив</abbr>

<span id="property_assets_dir" />

#### private $assets\\_dir : string [#private-assets_dir--string]

***

**Краткое содержание**

Путь до всех вспомогательных файлов

**Тип:** <abbr title="string">Текст</abbr>

***

## Методы [#методы-1]

<span id="method_checkAssets" />

### checkAssets [#checkassets]

\`\`\`
public checkAssets(bool  rewrite = false) : array
\`\`\`

##### Краткое содержание [#краткое-содержание-1]

Проверяет целостность файлов между локальным хранилищем и сервером разработчика.

##### Описание [#описание]

Если файлы отсутствуют или имеют различия в хеш-суммах, информация об этих расхождениях
возвращается в виде массива. При необходимости может быть выполнена перезапись
локального файла с данными о ресурсах.

##### Смотри так-же: [#смотри-так-же]

* [\\DataManager::dirToArray()](#method_dirToArray)
* [\\AssetsChecker::prepare\\_assets()](#method_prepare_assets)

##### Свойства: [#свойства-2]

| Название     | Тип  | По умолчанию |
| ------------ | ---- | ------------ |
| **$rewrite** | bool | false        |

##### Ошибки: [#ошибки]

| Тип            | Описание |
| -------------- | -------- |
| \\JsonException |          |

##### Возвращает: [#возвращает]

\`\`\`
array
\`\`\`

Ассоциативный массив с информацией о проверке файлов:

* \`on_server\` (int): Количество файлов, находящихся на сервере разработчика.
* \`local\` (int): Количество локальных файлов.
* \`missing_count\` (int): Количество недостающих файлов.
* \`update_count\` (int): Количество файлов, требующих обновления.
* \`missing\` (array): Массив с данными о недостающих файлах.
* \`update\` (array): Массив с данными о файлах, требующих обновления.

***

<span id="method_parseAssets" />

### parseAssets [#parseassets]

\`\`\`
public parseAssets(bool  parse = false) : void
\`\`\`

##### Краткое содержание [#краткое-содержание-2]

Выполняет парсинг вспомогательных файлов для управления ассетами.

##### Описание [#описание-1]

Если файл с хешами ассетов существует, то парсинг выполняется только при принудительном запуске.
В случае отсутствия указанного файла производится полное сканирование ассетов.

##### Смотри так-же: [#смотри-так-же-1]

* [\\parse\\_assets()](#method_parse_assets)

##### Свойства: [#свойства-3]

| Название   | Тип  | По умолчанию |
| ---------- | ---- | ------------ |
| **$parse** | bool | false        |

##### Ошибки: [#ошибки-1]

| Тип                        | Описание                                           |
| -------------------------- | -------------------------------------------------- |
| \\JsonException\\|\\Throwable | В случае ошибок в процессах обработки JSON-файлов. |

##### Возвращает: [#возвращает-1]

\`\`\`
void
\`\`\`

***

<span id="method_save_asset" />

### save\\_asset [#save_asset]

\`\`\`
public save_asset(array  data, string  file) : array|false
\`\`\`

##### Краткое содержание [#краткое-содержание-3]

Сохраняет файл на сервер и возвращает информацию о нём или false в случае неуспеха.

##### Смотри так-же: [#смотри-так-же-2]

* [\\DataManager::createDir()](./DataManager#method_createDir)
* [\\LogGenerator::generateLog()](./LogGenerator#method_generateLog)
* [\\AssetsChecker::fetchFileContent()](#method_fetchFileContent)
* [\\AssetsChecker::saveFile()](#method_saveFile)
* [\\AssetsChecker::generateFileMetadata()](#method_generateFileMetadata)

##### Свойства: [#свойства-4]

| Название  | Тип    | По умолчанию |
| --------- | ------ | ------------ |
| **$data** | array  |              |
| **$file** | string |              |

##### Ошибки: [#ошибки-2]

| Тип            | Описание   |                                                              |
| -------------- | ---------- | ------------------------------------------------------------ |
| \\JsonException | \\Throwable | Генерирует исключение, если возникает ошибка обработки JSON. |

##### Возвращает: [#возвращает-2]

\`\`\`
array|false
\`\`\`

Возвращает массив с информацией о сохранённом файле или false, если файл не удалось сохранить.
Массив содержит следующие ключи:

* 'realpath' (string): Полный реальный путь до файла.
* 'dirname' (string): Директория файла.
* 'basename' (string): Имя файла с расширением.
* 'filename' (string): Имя файла без расширения.
* 'extension' (string): Расширение файла.
* 'mime' (string): MIME-тип файла.
* 'encoding' (string): Тип кодирования файла.
* 'size' (int): Размер файла в байтах.
* 'size\\_string' (string): Размер файла в человекочитаемом формате (например, "1.5MB").
* 'atime' (int): Время последнего доступа к файлу (в метках времени Unix).
* 'mtime' (int): Время последней модификации файла (в метках времени Unix).
* 'permission' (string): Права доступа на файл (в формате UNIX-подобной строки, например, "0755").

***

<span id="method_fetchFileContent" />

### fetchFileContent [#fetchfilecontent]

\`\`\`
private fetchFileContent(array  data) : string|null
\`\`\`

##### Краткое содержание [#краткое-содержание-4]

Получает содержимое файла по указанным ссылкам.

##### Описание [#описание-2]

Метод пытается загрузить содержимое файла с основной (\`link\`) и,
при необходимости, с альтернативной (\`alt\`) ссылки, если содержимое
по основной ссылке пустое.

##### Свойства: [#свойства-5]

| Название  | Тип   | По умолчанию |
| --------- | ----- | ------------ |
| **$data** | array |              |

##### Возвращает: [#возвращает-3]

\`\`\`
string|null
\`\`\`

Возвращает содержимое файла, либо null, если
не удалось загрузить файл.

***

<span id="method_generateFileMetadata" />

### generateFileMetadata [#generatefilemetadata]

\`\`\`
private generateFileMetadata(string  file_path) : array
\`\`\`

##### Краткое содержание [#краткое-содержание-5]

Генерирует метаданные для указанного файла.

##### Свойства: [#свойства-6]

| Название        | Тип    | По умолчанию |
| --------------- | ------ | ------------ |
| **$file\\_path** | string |              |

##### Ошибки: [#ошибки-3]

| Тип               | Описание                                |
| ----------------- | --------------------------------------- |
| \\RuntimeException | Если файл не существует или недоступен. |

##### Возвращает: [#возвращает-4]

\`\`\`
array
\`\`\`

Ассоциативный массив, содержащий следующую информацию о файле:

* 'realpath' (string|null): Абсолютный путь до файла.
* 'dirname' (string): Путь к директории, содержащей файл.
* 'basename' (string): Имя файла с расширением.
* 'filename' (string): Имя файла без расширения.
* 'extension' (string|null): Расширение файла.
* 'mime' (string): MIME-тип файла.
* 'encoding' (string): Кодировка файла.
* 'size' (int): Размер файла в байтах.
* 'size\\_string' (string): Читаемое представление размера файла (например, "10.5 KB").
* 'atime' (int): Временная метка последнего доступа к файлу.
* 'mtime' (int): Временная метка последней модификации файла.
* 'permission' (string): Права доступа к файлу (например, "0755").

***

<span id="method_parse_assets" />

### parse\\_assets [#parse_assets]

\`\`\`
private parse_assets() : void
\`\`\`

##### Краткое содержание [#краткое-содержание-6]

Парсит данные о ресурсах (assets), проверяет наличие отсутствующих или обновленных,
и обновляет информацию. Также сохраняет актуальные данные в локальный файл ресурсов.

##### Описание [#описание-3]

Процесс включает следующие этапы:

1. Получение списка локальных файлов и их данных через метод \`prepare_assets\`.
2. Получение данных об удаленных ресурсах через URL.
3. Сравнение данных о хэшах локальных и удаленных ресурсов.
4. Сохранение недостающих или обновленных ресурсов в локальное хранилище.
5. Запись актуализированных данных в локальный JSON-файл.

##### Смотри так-же: [#смотри-так-же-3]

* [\\AssetsChecker::save\\_asset()](#method_save_asset)
* [\\self::prepare\\_assets()](#method_prepare_assets)
* [\\DataManager::dirToArray()](./DataManager#method_dirToArray)

##### Ошибки: [#ошибки-4]

| Тип                        | Описание                                                    |
| -------------------------- | ----------------------------------------------------------- |
| \\JsonException\\|\\Throwable | Исключение выбрасывается в случае ошибки при работе с JSON. |

##### Возвращает: [#возвращает-5]

\`\`\`
void
\`\`\`

***

<span id="method_prepare_assets" />

### prepare\\_assets [#prepare_assets]

\`\`\`
private prepare_assets(array  arr, string  dir = __DIR__) : void
\`\`\`

##### Краткое содержание [#краткое-содержание-7]

Подготавливает данные о файлах, расположенных на локальном сервере, и сохраняет их в массив \`assets_arr\`.

##### Описание [#описание-4]

Метод рекурсивно обрабатывает массив с файлами и создает запись для каждого файла в конечном массиве \`assets_arr\`,
содержащую путь, имя файла и его хэш.

##### Свойства: [#свойства-7]

| Название | Тип    | По умолчанию |
| -------- | ------ | ------------ |
| **$arr** | array  |              |
| **$dir** | string | \\_\\_DIR\\_\\_  |

##### Возвращает: [#возвращает-6]

\`\`\`
void
\`\`\`

***

<span id="method_saveFile" />

### saveFile [#savefile]

\`\`\`
private saveFile(string  file_path, string  content, string  file) : bool
\`\`\`

##### Краткое содержание [#краткое-содержание-8]

Сохраняет содержимое в файл и логирует сообщение при возникновении ошибки.

##### Описание [#описание-5]

Метод выполняет запись переданного содержимого в указанный путь файла,
проверяет, доступен ли файл для записи, и логирует ошибку в случае неудачи.

##### Смотри так-же: [#смотри-так-же-4]

* [\\LogGenerator::generateLog()](./LogGenerator#method_generateLog)

##### Свойства: [#свойства-8]

| Название        | Тип    | По умолчанию |
| --------------- | ------ | ------------ |
| **$file\\_path** | string |              |
| **$content**    | string |              |
| **$file**       | string |              |

##### Ошибки: [#ошибки-5]

| Тип        | Описание |
| ---------- | -------- |
| \\Throwable |          |

##### Возвращает: [#возвращает-7]

\`\`\`
bool
\`\`\`

Возвращает true, если файл успешно сохранён, или false — в случае ошибки.
`,o={contents:[{heading:`краткое-содержание`,content:`Трейт для проверки и управления ассетами (файлы скриптов и стилей).`},{heading:`свойства`,content:`private $asset\\_file`},{heading:`свойства`,content:`private $assets\\_arr`},{heading:`свойства`,content:`private $assets\\_dir`},{heading:`методы`,content:`public checkAssets()`},{heading:`методы`,content:`public parseAssets()`},{heading:`методы`,content:`public save\\_asset()`},{heading:`методы`,content:`private fetchFileContent()`},{heading:`методы`,content:`private generateFileMetadata()`},{heading:`методы`,content:`private parse\\_assets()`},{heading:`методы`,content:`private prepare\\_assets()`},{heading:`методы`,content:`private saveFile()`},{heading:`подробности`,content:`Путь: engine/inc/maharder/\\_includes/traits/AssetsChecker.php`},{heading:`private-asset_file--string`,content:`**Краткое содержание**`},{heading:`private-asset_file--string`,content:`Файл с информацией и хешами вспомогательных файлов`},{heading:`private-asset_file--string`,content:`**Тип:** Текст`},{heading:`private-assets_arr--array`,content:`**Краткое содержание**`},{heading:`private-assets_arr--array`,content:`Массив со всеми данными для обновления стилей и скриптов`},{heading:`private-assets_arr--array`,content:`**Тип:** Массив`},{heading:`private-assets_dir--string`,content:`**Краткое содержание**`},{heading:`private-assets_dir--string`,content:`Путь до всех вспомогательных файлов`},{heading:`private-assets_dir--string`,content:`**Тип:** Текст`},{heading:`краткое-содержание-1`,content:`Проверяет целостность файлов между локальным хранилищем и сервером разработчика.`},{heading:`описание`,content:`Если файлы отсутствуют или имеют различия в хеш-суммах, информация об этих расхождениях
возвращается в виде массива. При необходимости может быть выполнена перезапись
локального файла с данными о ресурсах.`},{heading:`смотри-так-же`,content:`\\DataManager::dirToArray()`},{heading:`смотри-так-же`,content:`\\AssetsChecker::prepare\\_assets()`},{heading:`свойства-2`,content:`Название`},{heading:`свойства-2`,content:`Тип`},{heading:`свойства-2`,content:`По умолчанию`},{heading:`свойства-2`,content:`**$rewrite**`},{heading:`свойства-2`,content:`bool`},{heading:`свойства-2`,content:`false`},{heading:`ошибки`,content:`Тип`},{heading:`ошибки`,content:`Описание`},{heading:`ошибки`,content:`\\JsonException`},{heading:`возвращает`,content:`Ассоциативный массив с информацией о проверке файлов:`},{heading:`возвращает`,content:"`on_server` (int): Количество файлов, находящихся на сервере разработчика."},{heading:`возвращает`,content:"`local` (int): Количество локальных файлов."},{heading:`возвращает`,content:"`missing_count` (int): Количество недостающих файлов."},{heading:`возвращает`,content:"`update_count` (int): Количество файлов, требующих обновления."},{heading:`возвращает`,content:"`missing` (array): Массив с данными о недостающих файлах."},{heading:`возвращает`,content:"`update` (array): Массив с данными о файлах, требующих обновления."},{heading:`краткое-содержание-2`,content:`Выполняет парсинг вспомогательных файлов для управления ассетами.`},{heading:`описание-1`,content:`Если файл с хешами ассетов существует, то парсинг выполняется только при принудительном запуске.
В случае отсутствия указанного файла производится полное сканирование ассетов.`},{heading:`смотри-так-же-1`,content:`\\parse\\_assets()`},{heading:`свойства-3`,content:`Название`},{heading:`свойства-3`,content:`Тип`},{heading:`свойства-3`,content:`По умолчанию`},{heading:`свойства-3`,content:`**$parse**`},{heading:`свойства-3`,content:`bool`},{heading:`свойства-3`,content:`false`},{heading:`ошибки-1`,content:`Тип`},{heading:`ошибки-1`,content:`Описание`},{heading:`ошибки-1`,content:`\\JsonException\\|\\Throwable`},{heading:`ошибки-1`,content:`В случае ошибок в процессах обработки JSON-файлов.`},{heading:`краткое-содержание-3`,content:`Сохраняет файл на сервер и возвращает информацию о нём или false в случае неуспеха.`},{heading:`смотри-так-же-2`,content:`\\DataManager::createDir()`},{heading:`смотри-так-же-2`,content:`\\LogGenerator::generateLog()`},{heading:`смотри-так-же-2`,content:`\\AssetsChecker::fetchFileContent()`},{heading:`смотри-так-же-2`,content:`\\AssetsChecker::saveFile()`},{heading:`смотри-так-же-2`,content:`\\AssetsChecker::generateFileMetadata()`},{heading:`свойства-4`,content:`Название`},{heading:`свойства-4`,content:`Тип`},{heading:`свойства-4`,content:`По умолчанию`},{heading:`свойства-4`,content:`**$data**`},{heading:`свойства-4`,content:`array`},{heading:`свойства-4`,content:`**$file**`},{heading:`свойства-4`,content:`string`},{heading:`ошибки-2`,content:`Тип`},{heading:`ошибки-2`,content:`Описание`},{heading:`ошибки-2`,content:`\\JsonException`},{heading:`ошибки-2`,content:`\\Throwable`},{heading:`ошибки-2`,content:`Генерирует исключение, если возникает ошибка обработки JSON.`},{heading:`возвращает-2`,content:`Возвращает массив с информацией о сохранённом файле или false, если файл не удалось сохранить.
Массив содержит следующие ключи:`},{heading:`возвращает-2`,content:`'realpath' (string): Полный реальный путь до файла.`},{heading:`возвращает-2`,content:`'dirname' (string): Директория файла.`},{heading:`возвращает-2`,content:`'basename' (string): Имя файла с расширением.`},{heading:`возвращает-2`,content:`'filename' (string): Имя файла без расширения.`},{heading:`возвращает-2`,content:`'extension' (string): Расширение файла.`},{heading:`возвращает-2`,content:`'mime' (string): MIME-тип файла.`},{heading:`возвращает-2`,content:`'encoding' (string): Тип кодирования файла.`},{heading:`возвращает-2`,content:`'size' (int): Размер файла в байтах.`},{heading:`возвращает-2`,content:`'size\\_string' (string): Размер файла в человекочитаемом формате (например, "1.5MB").`},{heading:`возвращает-2`,content:`'atime' (int): Время последнего доступа к файлу (в метках времени Unix).`},{heading:`возвращает-2`,content:`'mtime' (int): Время последней модификации файла (в метках времени Unix).`},{heading:`возвращает-2`,content:`'permission' (string): Права доступа на файл (в формате UNIX-подобной строки, например, "0755").`},{heading:`краткое-содержание-4`,content:`Получает содержимое файла по указанным ссылкам.`},{heading:`описание-2`,content:"Метод пытается загрузить содержимое файла с основной (`link`) и,\nпри необходимости, с альтернативной (`alt`) ссылки, если содержимое\nпо основной ссылке пустое."},{heading:`свойства-5`,content:`Название`},{heading:`свойства-5`,content:`Тип`},{heading:`свойства-5`,content:`По умолчанию`},{heading:`свойства-5`,content:`**$data**`},{heading:`свойства-5`,content:`array`},{heading:`возвращает-3`,content:`Возвращает содержимое файла, либо null, если
не удалось загрузить файл.`},{heading:`краткое-содержание-5`,content:`Генерирует метаданные для указанного файла.`},{heading:`свойства-6`,content:`Название`},{heading:`свойства-6`,content:`Тип`},{heading:`свойства-6`,content:`По умолчанию`},{heading:`свойства-6`,content:`**$file\\_path**`},{heading:`свойства-6`,content:`string`},{heading:`ошибки-3`,content:`Тип`},{heading:`ошибки-3`,content:`Описание`},{heading:`ошибки-3`,content:`\\RuntimeException`},{heading:`ошибки-3`,content:`Если файл не существует или недоступен.`},{heading:`возвращает-4`,content:`Ассоциативный массив, содержащий следующую информацию о файле:`},{heading:`возвращает-4`,content:`'realpath' (string|null): Абсолютный путь до файла.`},{heading:`возвращает-4`,content:`'dirname' (string): Путь к директории, содержащей файл.`},{heading:`возвращает-4`,content:`'basename' (string): Имя файла с расширением.`},{heading:`возвращает-4`,content:`'filename' (string): Имя файла без расширения.`},{heading:`возвращает-4`,content:`'extension' (string|null): Расширение файла.`},{heading:`возвращает-4`,content:`'mime' (string): MIME-тип файла.`},{heading:`возвращает-4`,content:`'encoding' (string): Кодировка файла.`},{heading:`возвращает-4`,content:`'size' (int): Размер файла в байтах.`},{heading:`возвращает-4`,content:`'size\\_string' (string): Читаемое представление размера файла (например, "10.5 KB").`},{heading:`возвращает-4`,content:`'atime' (int): Временная метка последнего доступа к файлу.`},{heading:`возвращает-4`,content:`'mtime' (int): Временная метка последней модификации файла.`},{heading:`возвращает-4`,content:`'permission' (string): Права доступа к файлу (например, "0755").`},{heading:`краткое-содержание-6`,content:`Парсит данные о ресурсах (assets), проверяет наличие отсутствующих или обновленных,
и обновляет информацию. Также сохраняет актуальные данные в локальный файл ресурсов.`},{heading:`описание-3`,content:`Процесс включает следующие этапы:`},{heading:`описание-3`,content:"Получение списка локальных файлов и их данных через метод `prepare_assets`."},{heading:`описание-3`,content:`Получение данных об удаленных ресурсах через URL.`},{heading:`описание-3`,content:`Сравнение данных о хэшах локальных и удаленных ресурсов.`},{heading:`описание-3`,content:`Сохранение недостающих или обновленных ресурсов в локальное хранилище.`},{heading:`описание-3`,content:`Запись актуализированных данных в локальный JSON-файл.`},{heading:`смотри-так-же-3`,content:`\\AssetsChecker::save\\_asset()`},{heading:`смотри-так-же-3`,content:`\\self::prepare\\_assets()`},{heading:`смотри-так-же-3`,content:`\\DataManager::dirToArray()`},{heading:`ошибки-4`,content:`Тип`},{heading:`ошибки-4`,content:`Описание`},{heading:`ошибки-4`,content:`\\JsonException\\|\\Throwable`},{heading:`ошибки-4`,content:`Исключение выбрасывается в случае ошибки при работе с JSON.`},{heading:`краткое-содержание-7`,content:"Подготавливает данные о файлах, расположенных на локальном сервере, и сохраняет их в массив `assets_arr`."},{heading:`описание-4`,content:"Метод рекурсивно обрабатывает массив с файлами и создает запись для каждого файла в конечном массиве `assets_arr`,\nсодержащую путь, имя файла и его хэш."},{heading:`свойства-7`,content:`Название`},{heading:`свойства-7`,content:`Тип`},{heading:`свойства-7`,content:`По умолчанию`},{heading:`свойства-7`,content:`**$arr**`},{heading:`свойства-7`,content:`array`},{heading:`свойства-7`,content:`**$dir**`},{heading:`свойства-7`,content:`string`},{heading:`свойства-7`,content:`\\_\\_DIR\\_\\_`},{heading:`краткое-содержание-8`,content:`Сохраняет содержимое в файл и логирует сообщение при возникновении ошибки.`},{heading:`описание-5`,content:`Метод выполняет запись переданного содержимого в указанный путь файла,
проверяет, доступен ли файл для записи, и логирует ошибку в случае неудачи.`},{heading:`смотри-так-же-4`,content:`\\LogGenerator::generateLog()`},{heading:`свойства-8`,content:`Название`},{heading:`свойства-8`,content:`Тип`},{heading:`свойства-8`,content:`По умолчанию`},{heading:`свойства-8`,content:`**$file\\_path**`},{heading:`свойства-8`,content:`string`},{heading:`свойства-8`,content:`**$content**`},{heading:`свойства-8`,content:`string`},{heading:`свойства-8`,content:`**$file**`},{heading:`свойства-8`,content:`string`},{heading:`ошибки-5`,content:`Тип`},{heading:`ошибки-5`,content:`Описание`},{heading:`ошибки-5`,content:`\\Throwable`},{heading:`возвращает-7`,content:`Возвращает true, если файл успешно сохранён, или false — в случае ошибки.`}],headings:[{id:`краткое-содержание`,content:`Краткое содержание:`},{id:`свойства`,content:`Свойства`},{id:`методы`,content:`Методы`},{id:`подробности`,content:`Подробности`},{id:`свойства-1`,content:`Свойства`},{id:`private-asset_file--string`,content:`private $asset_file : string`},{id:`private-assets_arr--array`,content:`private $assets_arr : array`},{id:`private-assets_dir--string`,content:`private $assets_dir : string`},{id:`методы-1`,content:`Методы`},{id:`checkassets`,content:`checkAssets`},{id:`краткое-содержание-1`,content:`Краткое содержание`},{id:`описание`,content:`Описание`},{id:`смотри-так-же`,content:`Смотри так-же:`},{id:`свойства-2`,content:`Свойства:`},{id:`ошибки`,content:`Ошибки:`},{id:`возвращает`,content:`Возвращает:`},{id:`parseassets`,content:`parseAssets`},{id:`краткое-содержание-2`,content:`Краткое содержание`},{id:`описание-1`,content:`Описание`},{id:`смотри-так-же-1`,content:`Смотри так-же:`},{id:`свойства-3`,content:`Свойства:`},{id:`ошибки-1`,content:`Ошибки:`},{id:`возвращает-1`,content:`Возвращает:`},{id:`save_asset`,content:`save_asset`},{id:`краткое-содержание-3`,content:`Краткое содержание`},{id:`смотри-так-же-2`,content:`Смотри так-же:`},{id:`свойства-4`,content:`Свойства:`},{id:`ошибки-2`,content:`Ошибки:`},{id:`возвращает-2`,content:`Возвращает:`},{id:`fetchfilecontent`,content:`fetchFileContent`},{id:`краткое-содержание-4`,content:`Краткое содержание`},{id:`описание-2`,content:`Описание`},{id:`свойства-5`,content:`Свойства:`},{id:`возвращает-3`,content:`Возвращает:`},{id:`generatefilemetadata`,content:`generateFileMetadata`},{id:`краткое-содержание-5`,content:`Краткое содержание`},{id:`свойства-6`,content:`Свойства:`},{id:`ошибки-3`,content:`Ошибки:`},{id:`возвращает-4`,content:`Возвращает:`},{id:`parse_assets`,content:`parse_assets`},{id:`краткое-содержание-6`,content:`Краткое содержание`},{id:`описание-3`,content:`Описание`},{id:`смотри-так-же-3`,content:`Смотри так-же:`},{id:`ошибки-4`,content:`Ошибки:`},{id:`возвращает-5`,content:`Возвращает:`},{id:`prepare_assets`,content:`prepare_assets`},{id:`краткое-содержание-7`,content:`Краткое содержание`},{id:`описание-4`,content:`Описание`},{id:`свойства-7`,content:`Свойства:`},{id:`возвращает-6`,content:`Возвращает:`},{id:`savefile`,content:`saveFile`},{id:`краткое-содержание-8`,content:`Краткое содержание`},{id:`описание-5`,content:`Описание`},{id:`смотри-так-же-4`,content:`Смотри так-же:`},{id:`свойства-8`,content:`Свойства:`},{id:`ошибки-5`,content:`Ошибки:`},{id:`возвращает-7`,content:`Возвращает:`}]},s=[{depth:2,url:`#краткое-содержание`,title:(0,n.jsx)(n.Fragment,{children:`Краткое содержание:`})},{depth:3,url:`#свойства`,title:(0,n.jsx)(n.Fragment,{children:`Свойства`})},{depth:3,url:`#методы`,title:(0,n.jsx)(n.Fragment,{children:`Методы`})},{depth:3,url:`#подробности`,title:(0,n.jsx)(n.Fragment,{children:`Подробности`})},{depth:2,url:`#свойства-1`,title:(0,n.jsx)(n.Fragment,{children:`Свойства`})},{depth:4,url:`#private-asset_file--string`,title:(0,n.jsx)(n.Fragment,{children:`private $asset_file : string`})},{depth:4,url:`#private-assets_arr--array`,title:(0,n.jsx)(n.Fragment,{children:`private $assets_arr : array`})},{depth:4,url:`#private-assets_dir--string`,title:(0,n.jsx)(n.Fragment,{children:`private $assets_dir : string`})},{depth:2,url:`#методы-1`,title:(0,n.jsx)(n.Fragment,{children:`Методы`})},{depth:3,url:`#checkassets`,title:(0,n.jsx)(n.Fragment,{children:`checkAssets`})},{depth:5,url:`#краткое-содержание-1`,title:(0,n.jsx)(n.Fragment,{children:`Краткое содержание`})},{depth:5,url:`#описание`,title:(0,n.jsx)(n.Fragment,{children:`Описание`})},{depth:5,url:`#смотри-так-же`,title:(0,n.jsx)(n.Fragment,{children:`Смотри так-же:`})},{depth:5,url:`#свойства-2`,title:(0,n.jsx)(n.Fragment,{children:`Свойства:`})},{depth:5,url:`#ошибки`,title:(0,n.jsx)(n.Fragment,{children:`Ошибки:`})},{depth:5,url:`#возвращает`,title:(0,n.jsx)(n.Fragment,{children:`Возвращает:`})},{depth:3,url:`#parseassets`,title:(0,n.jsx)(n.Fragment,{children:`parseAssets`})},{depth:5,url:`#краткое-содержание-2`,title:(0,n.jsx)(n.Fragment,{children:`Краткое содержание`})},{depth:5,url:`#описание-1`,title:(0,n.jsx)(n.Fragment,{children:`Описание`})},{depth:5,url:`#смотри-так-же-1`,title:(0,n.jsx)(n.Fragment,{children:`Смотри так-же:`})},{depth:5,url:`#свойства-3`,title:(0,n.jsx)(n.Fragment,{children:`Свойства:`})},{depth:5,url:`#ошибки-1`,title:(0,n.jsx)(n.Fragment,{children:`Ошибки:`})},{depth:5,url:`#возвращает-1`,title:(0,n.jsx)(n.Fragment,{children:`Возвращает:`})},{depth:3,url:`#save_asset`,title:(0,n.jsx)(n.Fragment,{children:`save_asset`})},{depth:5,url:`#краткое-содержание-3`,title:(0,n.jsx)(n.Fragment,{children:`Краткое содержание`})},{depth:5,url:`#смотри-так-же-2`,title:(0,n.jsx)(n.Fragment,{children:`Смотри так-же:`})},{depth:5,url:`#свойства-4`,title:(0,n.jsx)(n.Fragment,{children:`Свойства:`})},{depth:5,url:`#ошибки-2`,title:(0,n.jsx)(n.Fragment,{children:`Ошибки:`})},{depth:5,url:`#возвращает-2`,title:(0,n.jsx)(n.Fragment,{children:`Возвращает:`})},{depth:3,url:`#fetchfilecontent`,title:(0,n.jsx)(n.Fragment,{children:`fetchFileContent`})},{depth:5,url:`#краткое-содержание-4`,title:(0,n.jsx)(n.Fragment,{children:`Краткое содержание`})},{depth:5,url:`#описание-2`,title:(0,n.jsx)(n.Fragment,{children:`Описание`})},{depth:5,url:`#свойства-5`,title:(0,n.jsx)(n.Fragment,{children:`Свойства:`})},{depth:5,url:`#возвращает-3`,title:(0,n.jsx)(n.Fragment,{children:`Возвращает:`})},{depth:3,url:`#generatefilemetadata`,title:(0,n.jsx)(n.Fragment,{children:`generateFileMetadata`})},{depth:5,url:`#краткое-содержание-5`,title:(0,n.jsx)(n.Fragment,{children:`Краткое содержание`})},{depth:5,url:`#свойства-6`,title:(0,n.jsx)(n.Fragment,{children:`Свойства:`})},{depth:5,url:`#ошибки-3`,title:(0,n.jsx)(n.Fragment,{children:`Ошибки:`})},{depth:5,url:`#возвращает-4`,title:(0,n.jsx)(n.Fragment,{children:`Возвращает:`})},{depth:3,url:`#parse_assets`,title:(0,n.jsx)(n.Fragment,{children:`parse_assets`})},{depth:5,url:`#краткое-содержание-6`,title:(0,n.jsx)(n.Fragment,{children:`Краткое содержание`})},{depth:5,url:`#описание-3`,title:(0,n.jsx)(n.Fragment,{children:`Описание`})},{depth:5,url:`#смотри-так-же-3`,title:(0,n.jsx)(n.Fragment,{children:`Смотри так-же:`})},{depth:5,url:`#ошибки-4`,title:(0,n.jsx)(n.Fragment,{children:`Ошибки:`})},{depth:5,url:`#возвращает-5`,title:(0,n.jsx)(n.Fragment,{children:`Возвращает:`})},{depth:3,url:`#prepare_assets`,title:(0,n.jsx)(n.Fragment,{children:`prepare_assets`})},{depth:5,url:`#краткое-содержание-7`,title:(0,n.jsx)(n.Fragment,{children:`Краткое содержание`})},{depth:5,url:`#описание-4`,title:(0,n.jsx)(n.Fragment,{children:`Описание`})},{depth:5,url:`#свойства-7`,title:(0,n.jsx)(n.Fragment,{children:`Свойства:`})},{depth:5,url:`#возвращает-6`,title:(0,n.jsx)(n.Fragment,{children:`Возвращает:`})},{depth:3,url:`#savefile`,title:(0,n.jsx)(n.Fragment,{children:`saveFile`})},{depth:5,url:`#краткое-содержание-8`,title:(0,n.jsx)(n.Fragment,{children:`Краткое содержание`})},{depth:5,url:`#описание-5`,title:(0,n.jsx)(n.Fragment,{children:`Описание`})},{depth:5,url:`#смотри-так-же-4`,title:(0,n.jsx)(n.Fragment,{children:`Смотри так-же:`})},{depth:5,url:`#свойства-8`,title:(0,n.jsx)(n.Fragment,{children:`Свойства:`})},{depth:5,url:`#ошибки-5`,title:(0,n.jsx)(n.Fragment,{children:`Ошибки:`})},{depth:5,url:`#возвращает-7`,title:(0,n.jsx)(n.Fragment,{children:`Возвращает:`})}];function c(e){let t={a:`a`,code:`code`,h2:`h2`,h3:`h3`,h4:`h4`,h5:`h5`,hr:`hr`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,span:`span`,strong:`strong`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,ul:`ul`,...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h2,{id:`краткое-содержание`,children:`Краткое содержание:`}),`
`,(0,n.jsx)(t.p,{children:`Трейт для проверки и управления ассетами (файлы скриптов и стилей).`}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsx)(t.h3,{id:`свойства`,children:`Свойства`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[`private $`,(0,n.jsx)(t.a,{href:`#property_asset_file`,children:`asset_file`})]}),`
`,(0,n.jsxs)(t.li,{children:[`private $`,(0,n.jsx)(t.a,{href:`#property_assets_arr`,children:`assets_arr`})]}),`
`,(0,n.jsxs)(t.li,{children:[`private $`,(0,n.jsx)(t.a,{href:`#property_assets_dir`,children:`assets_dir`})]}),`
`]}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsx)(t.h3,{id:`методы`,children:`Методы`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method_checkAssets`,children:`checkAssets()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method_parseAssets`,children:`parseAssets()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method_save_asset`,children:`save_asset()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`private `,(0,n.jsx)(t.a,{href:`#method_fetchFileContent`,children:`fetchFileContent()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`private `,(0,n.jsx)(t.a,{href:`#method_generateFileMetadata`,children:`generateFileMetadata()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`private `,(0,n.jsx)(t.a,{href:`#method_parse_assets`,children:`parse_assets()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`private `,(0,n.jsx)(t.a,{href:`#method_prepare_assets`,children:`prepare_assets()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`private `,(0,n.jsx)(t.a,{href:`#method_saveFile`,children:`saveFile()`})]}),`
`]}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsx)(t.h3,{id:`подробности`,children:`Подробности`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsx)(t.li,{children:`Путь: engine/inc/maharder/_includes/traits/AssetsChecker.php`}),`
`]}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsx)(t.h2,{id:`свойства-1`,children:`Свойства`}),`
`,(0,n.jsx)(`span`,{id:`property_asset_file`}),`
`,(0,n.jsx)(t.h4,{id:`private-asset_file--string`,children:`private $asset_file : string`}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Краткое содержание`})}),`
`,(0,n.jsx)(t.p,{children:`Файл с информацией и хешами вспомогательных файлов`}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Тип:`}),` `,(0,n.jsx)(`abbr`,{title:`string`,children:`Текст`})]}),`
`,(0,n.jsx)(`span`,{id:`property_assets_arr`}),`
`,(0,n.jsx)(t.h4,{id:`private-assets_arr--array`,children:`private $assets_arr : array`}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Краткое содержание`})}),`
`,(0,n.jsx)(t.p,{children:`Массив со всеми данными для обновления стилей и скриптов`}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Тип:`}),` `,(0,n.jsx)(`abbr`,{title:`array`,children:`Массив`})]}),`
`,(0,n.jsx)(`span`,{id:`property_assets_dir`}),`
`,(0,n.jsx)(t.h4,{id:`private-assets_dir--string`,children:`private $assets_dir : string`}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Краткое содержание`})}),`
`,(0,n.jsx)(t.p,{children:`Путь до всех вспомогательных файлов`}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Тип:`}),` `,(0,n.jsx)(`abbr`,{title:`string`,children:`Текст`})]}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsx)(t.h2,{id:`методы-1`,children:`Методы`}),`
`,(0,n.jsx)(`span`,{id:`method_checkAssets`}),`
`,(0,n.jsx)(t.h3,{id:`checkassets`,children:`checkAssets`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`public checkAssets(bool  rewrite = false) : array`})})})})}),`
`,(0,n.jsx)(t.h5,{id:`краткое-содержание-1`,children:`Краткое содержание`}),`
`,(0,n.jsx)(t.p,{children:`Проверяет целостность файлов между локальным хранилищем и сервером разработчика.`}),`
`,(0,n.jsx)(t.h5,{id:`описание`,children:`Описание`}),`
`,(0,n.jsx)(t.p,{children:`Если файлы отсутствуют или имеют различия в хеш-суммах, информация об этих расхождениях
возвращается в виде массива. При необходимости может быть выполнена перезапись
локального файла с данными о ресурсах.`}),`
`,(0,n.jsx)(t.h5,{id:`смотри-так-же`,children:`Смотри так-же:`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`#method_dirToArray`,children:`\\DataManager::dirToArray()`})}),`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`#method_prepare_assets`,children:`\\AssetsChecker::prepare_assets()`})}),`
`]}),`
`,(0,n.jsx)(t.h5,{id:`свойства-2`,children:`Свойства:`}),`
`,(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`Название`}),(0,n.jsx)(t.th,{children:`Тип`}),(0,n.jsx)(t.th,{children:`По умолчанию`})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:`$rewrite`})}),(0,n.jsx)(t.td,{children:`bool`}),(0,n.jsx)(t.td,{children:`false`})]})})]}),`
`,(0,n.jsx)(t.h5,{id:`ошибки`,children:`Ошибки:`}),`
`,(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`Тип`}),(0,n.jsx)(t.th,{children:`Описание`})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`\\JsonException`}),(0,n.jsx)(t.td,{})]})})]}),`
`,(0,n.jsx)(t.h5,{id:`возвращает`,children:`Возвращает:`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`array`})})})})}),`
`,(0,n.jsx)(t.p,{children:`Ассоциативный массив с информацией о проверке файлов:`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`on_server`}),` (int): Количество файлов, находящихся на сервере разработчика.`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`local`}),` (int): Количество локальных файлов.`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`missing_count`}),` (int): Количество недостающих файлов.`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`update_count`}),` (int): Количество файлов, требующих обновления.`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`missing`}),` (array): Массив с данными о недостающих файлах.`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`update`}),` (array): Массив с данными о файлах, требующих обновления.`]}),`
`]}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsx)(`span`,{id:`method_parseAssets`}),`
`,(0,n.jsx)(t.h3,{id:`parseassets`,children:`parseAssets`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`public parseAssets(bool  parse = false) : void`})})})})}),`
`,(0,n.jsx)(t.h5,{id:`краткое-содержание-2`,children:`Краткое содержание`}),`
`,(0,n.jsx)(t.p,{children:`Выполняет парсинг вспомогательных файлов для управления ассетами.`}),`
`,(0,n.jsx)(t.h5,{id:`описание-1`,children:`Описание`}),`
`,(0,n.jsx)(t.p,{children:`Если файл с хешами ассетов существует, то парсинг выполняется только при принудительном запуске.
В случае отсутствия указанного файла производится полное сканирование ассетов.`}),`
`,(0,n.jsx)(t.h5,{id:`смотри-так-же-1`,children:`Смотри так-же:`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`#method_parse_assets`,children:`\\parse_assets()`})}),`
`]}),`
`,(0,n.jsx)(t.h5,{id:`свойства-3`,children:`Свойства:`}),`
`,(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`Название`}),(0,n.jsx)(t.th,{children:`Тип`}),(0,n.jsx)(t.th,{children:`По умолчанию`})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:`$parse`})}),(0,n.jsx)(t.td,{children:`bool`}),(0,n.jsx)(t.td,{children:`false`})]})})]}),`
`,(0,n.jsx)(t.h5,{id:`ошибки-1`,children:`Ошибки:`}),`
`,(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`Тип`}),(0,n.jsx)(t.th,{children:`Описание`})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`\\JsonException|\\Throwable`}),(0,n.jsx)(t.td,{children:`В случае ошибок в процессах обработки JSON-файлов.`})]})})]}),`
`,(0,n.jsx)(t.h5,{id:`возвращает-1`,children:`Возвращает:`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`void`})})})})}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsx)(`span`,{id:`method_save_asset`}),`
`,(0,n.jsx)(t.h3,{id:`save_asset`,children:`save_asset`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`public save_asset(array  data, string  file) : array|false`})})})})}),`
`,(0,n.jsx)(t.h5,{id:`краткое-содержание-3`,children:`Краткое содержание`}),`
`,(0,n.jsx)(t.p,{children:`Сохраняет файл на сервер и возвращает информацию о нём или false в случае неуспеха.`}),`
`,(0,n.jsx)(t.h5,{id:`смотри-так-же-2`,children:`Смотри так-же:`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`./DataManager#method_createDir`,children:`\\DataManager::createDir()`})}),`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`./LogGenerator#method_generateLog`,children:`\\LogGenerator::generateLog()`})}),`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`#method_fetchFileContent`,children:`\\AssetsChecker::fetchFileContent()`})}),`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`#method_saveFile`,children:`\\AssetsChecker::saveFile()`})}),`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`#method_generateFileMetadata`,children:`\\AssetsChecker::generateFileMetadata()`})}),`
`]}),`
`,(0,n.jsx)(t.h5,{id:`свойства-4`,children:`Свойства:`}),`
`,(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`Название`}),(0,n.jsx)(t.th,{children:`Тип`}),(0,n.jsx)(t.th,{children:`По умолчанию`})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:`$data`})}),(0,n.jsx)(t.td,{children:`array`}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:`$file`})}),(0,n.jsx)(t.td,{children:`string`}),(0,n.jsx)(t.td,{})]})]})]}),`
`,(0,n.jsx)(t.h5,{id:`ошибки-2`,children:`Ошибки:`}),`
`,(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`Тип`}),(0,n.jsx)(t.th,{children:`Описание`})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`\\JsonException`}),(0,n.jsx)(t.td,{children:`\\Throwable`})]})})]}),`
`,(0,n.jsx)(t.h5,{id:`возвращает-2`,children:`Возвращает:`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`array|false`})})})})}),`
`,(0,n.jsx)(t.p,{children:`Возвращает массив с информацией о сохранённом файле или false, если файл не удалось сохранить.
Массив содержит следующие ключи:`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsx)(t.li,{children:`'realpath' (string): Полный реальный путь до файла.`}),`
`,(0,n.jsx)(t.li,{children:`'dirname' (string): Директория файла.`}),`
`,(0,n.jsx)(t.li,{children:`'basename' (string): Имя файла с расширением.`}),`
`,(0,n.jsx)(t.li,{children:`'filename' (string): Имя файла без расширения.`}),`
`,(0,n.jsx)(t.li,{children:`'extension' (string): Расширение файла.`}),`
`,(0,n.jsx)(t.li,{children:`'mime' (string): MIME-тип файла.`}),`
`,(0,n.jsx)(t.li,{children:`'encoding' (string): Тип кодирования файла.`}),`
`,(0,n.jsx)(t.li,{children:`'size' (int): Размер файла в байтах.`}),`
`,(0,n.jsx)(t.li,{children:`'size_string' (string): Размер файла в человекочитаемом формате (например, "1.5MB").`}),`
`,(0,n.jsx)(t.li,{children:`'atime' (int): Время последнего доступа к файлу (в метках времени Unix).`}),`
`,(0,n.jsx)(t.li,{children:`'mtime' (int): Время последней модификации файла (в метках времени Unix).`}),`
`,(0,n.jsx)(t.li,{children:`'permission' (string): Права доступа на файл (в формате UNIX-подобной строки, например, "0755").`}),`
`]}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsx)(`span`,{id:`method_fetchFileContent`}),`
`,(0,n.jsx)(t.h3,{id:`fetchfilecontent`,children:`fetchFileContent`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`private fetchFileContent(array  data) : string|null`})})})})}),`
`,(0,n.jsx)(t.h5,{id:`краткое-содержание-4`,children:`Краткое содержание`}),`
`,(0,n.jsx)(t.p,{children:`Получает содержимое файла по указанным ссылкам.`}),`
`,(0,n.jsx)(t.h5,{id:`описание-2`,children:`Описание`}),`
`,(0,n.jsxs)(t.p,{children:[`Метод пытается загрузить содержимое файла с основной (`,(0,n.jsx)(t.code,{children:`link`}),`) и,
при необходимости, с альтернативной (`,(0,n.jsx)(t.code,{children:`alt`}),`) ссылки, если содержимое
по основной ссылке пустое.`]}),`
`,(0,n.jsx)(t.h5,{id:`свойства-5`,children:`Свойства:`}),`
`,(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`Название`}),(0,n.jsx)(t.th,{children:`Тип`}),(0,n.jsx)(t.th,{children:`По умолчанию`})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:`$data`})}),(0,n.jsx)(t.td,{children:`array`}),(0,n.jsx)(t.td,{})]})})]}),`
`,(0,n.jsx)(t.h5,{id:`возвращает-3`,children:`Возвращает:`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`string|null`})})})})}),`
`,(0,n.jsx)(t.p,{children:`Возвращает содержимое файла, либо null, если
не удалось загрузить файл.`}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsx)(`span`,{id:`method_generateFileMetadata`}),`
`,(0,n.jsx)(t.h3,{id:`generatefilemetadata`,children:`generateFileMetadata`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`private generateFileMetadata(string  file_path) : array`})})})})}),`
`,(0,n.jsx)(t.h5,{id:`краткое-содержание-5`,children:`Краткое содержание`}),`
`,(0,n.jsx)(t.p,{children:`Генерирует метаданные для указанного файла.`}),`
`,(0,n.jsx)(t.h5,{id:`свойства-6`,children:`Свойства:`}),`
`,(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`Название`}),(0,n.jsx)(t.th,{children:`Тип`}),(0,n.jsx)(t.th,{children:`По умолчанию`})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:`$file_path`})}),(0,n.jsx)(t.td,{children:`string`}),(0,n.jsx)(t.td,{})]})})]}),`
`,(0,n.jsx)(t.h5,{id:`ошибки-3`,children:`Ошибки:`}),`
`,(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`Тип`}),(0,n.jsx)(t.th,{children:`Описание`})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`\\RuntimeException`}),(0,n.jsx)(t.td,{children:`Если файл не существует или недоступен.`})]})})]}),`
`,(0,n.jsx)(t.h5,{id:`возвращает-4`,children:`Возвращает:`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`array`})})})})}),`
`,(0,n.jsx)(t.p,{children:`Ассоциативный массив, содержащий следующую информацию о файле:`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsx)(t.li,{children:`'realpath' (string|null): Абсолютный путь до файла.`}),`
`,(0,n.jsx)(t.li,{children:`'dirname' (string): Путь к директории, содержащей файл.`}),`
`,(0,n.jsx)(t.li,{children:`'basename' (string): Имя файла с расширением.`}),`
`,(0,n.jsx)(t.li,{children:`'filename' (string): Имя файла без расширения.`}),`
`,(0,n.jsx)(t.li,{children:`'extension' (string|null): Расширение файла.`}),`
`,(0,n.jsx)(t.li,{children:`'mime' (string): MIME-тип файла.`}),`
`,(0,n.jsx)(t.li,{children:`'encoding' (string): Кодировка файла.`}),`
`,(0,n.jsx)(t.li,{children:`'size' (int): Размер файла в байтах.`}),`
`,(0,n.jsx)(t.li,{children:`'size_string' (string): Читаемое представление размера файла (например, "10.5 KB").`}),`
`,(0,n.jsx)(t.li,{children:`'atime' (int): Временная метка последнего доступа к файлу.`}),`
`,(0,n.jsx)(t.li,{children:`'mtime' (int): Временная метка последней модификации файла.`}),`
`,(0,n.jsx)(t.li,{children:`'permission' (string): Права доступа к файлу (например, "0755").`}),`
`]}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsx)(`span`,{id:`method_parse_assets`}),`
`,(0,n.jsx)(t.h3,{id:`parse_assets`,children:`parse_assets`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`private parse_assets() : void`})})})})}),`
`,(0,n.jsx)(t.h5,{id:`краткое-содержание-6`,children:`Краткое содержание`}),`
`,(0,n.jsx)(t.p,{children:`Парсит данные о ресурсах (assets), проверяет наличие отсутствующих или обновленных,
и обновляет информацию. Также сохраняет актуальные данные в локальный файл ресурсов.`}),`
`,(0,n.jsx)(t.h5,{id:`описание-3`,children:`Описание`}),`
`,(0,n.jsx)(t.p,{children:`Процесс включает следующие этапы:`}),`
`,(0,n.jsxs)(t.ol,{children:[`
`,(0,n.jsxs)(t.li,{children:[`Получение списка локальных файлов и их данных через метод `,(0,n.jsx)(t.code,{children:`prepare_assets`}),`.`]}),`
`,(0,n.jsx)(t.li,{children:`Получение данных об удаленных ресурсах через URL.`}),`
`,(0,n.jsx)(t.li,{children:`Сравнение данных о хэшах локальных и удаленных ресурсов.`}),`
`,(0,n.jsx)(t.li,{children:`Сохранение недостающих или обновленных ресурсов в локальное хранилище.`}),`
`,(0,n.jsx)(t.li,{children:`Запись актуализированных данных в локальный JSON-файл.`}),`
`]}),`
`,(0,n.jsx)(t.h5,{id:`смотри-так-же-3`,children:`Смотри так-же:`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`#method_save_asset`,children:`\\AssetsChecker::save_asset()`})}),`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`#method_prepare_assets`,children:`\\self::prepare_assets()`})}),`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`./DataManager#method_dirToArray`,children:`\\DataManager::dirToArray()`})}),`
`]}),`
`,(0,n.jsx)(t.h5,{id:`ошибки-4`,children:`Ошибки:`}),`
`,(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`Тип`}),(0,n.jsx)(t.th,{children:`Описание`})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`\\JsonException|\\Throwable`}),(0,n.jsx)(t.td,{children:`Исключение выбрасывается в случае ошибки при работе с JSON.`})]})})]}),`
`,(0,n.jsx)(t.h5,{id:`возвращает-5`,children:`Возвращает:`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`void`})})})})}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsx)(`span`,{id:`method_prepare_assets`}),`
`,(0,n.jsx)(t.h3,{id:`prepare_assets`,children:`prepare_assets`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`private prepare_assets(array  arr, string  dir = __DIR__) : void`})})})})}),`
`,(0,n.jsx)(t.h5,{id:`краткое-содержание-7`,children:`Краткое содержание`}),`
`,(0,n.jsxs)(t.p,{children:[`Подготавливает данные о файлах, расположенных на локальном сервере, и сохраняет их в массив `,(0,n.jsx)(t.code,{children:`assets_arr`}),`.`]}),`
`,(0,n.jsx)(t.h5,{id:`описание-4`,children:`Описание`}),`
`,(0,n.jsxs)(t.p,{children:[`Метод рекурсивно обрабатывает массив с файлами и создает запись для каждого файла в конечном массиве `,(0,n.jsx)(t.code,{children:`assets_arr`}),`,
содержащую путь, имя файла и его хэш.`]}),`
`,(0,n.jsx)(t.h5,{id:`свойства-7`,children:`Свойства:`}),`
`,(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`Название`}),(0,n.jsx)(t.th,{children:`Тип`}),(0,n.jsx)(t.th,{children:`По умолчанию`})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:`$arr`})}),(0,n.jsx)(t.td,{children:`array`}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:`$dir`})}),(0,n.jsx)(t.td,{children:`string`}),(0,n.jsx)(t.td,{children:`__DIR__`})]})]})]}),`
`,(0,n.jsx)(t.h5,{id:`возвращает-6`,children:`Возвращает:`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`void`})})})})}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsx)(`span`,{id:`method_saveFile`}),`
`,(0,n.jsx)(t.h3,{id:`savefile`,children:`saveFile`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`private saveFile(string  file_path, string  content, string  file) : bool`})})})})}),`
`,(0,n.jsx)(t.h5,{id:`краткое-содержание-8`,children:`Краткое содержание`}),`
`,(0,n.jsx)(t.p,{children:`Сохраняет содержимое в файл и логирует сообщение при возникновении ошибки.`}),`
`,(0,n.jsx)(t.h5,{id:`описание-5`,children:`Описание`}),`
`,(0,n.jsx)(t.p,{children:`Метод выполняет запись переданного содержимого в указанный путь файла,
проверяет, доступен ли файл для записи, и логирует ошибку в случае неудачи.`}),`
`,(0,n.jsx)(t.h5,{id:`смотри-так-же-4`,children:`Смотри так-же:`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`./LogGenerator#method_generateLog`,children:`\\LogGenerator::generateLog()`})}),`
`]}),`
`,(0,n.jsx)(t.h5,{id:`свойства-8`,children:`Свойства:`}),`
`,(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`Название`}),(0,n.jsx)(t.th,{children:`Тип`}),(0,n.jsx)(t.th,{children:`По умолчанию`})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:`$file_path`})}),(0,n.jsx)(t.td,{children:`string`}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:`$content`})}),(0,n.jsx)(t.td,{children:`string`}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:`$file`})}),(0,n.jsx)(t.td,{children:`string`}),(0,n.jsx)(t.td,{})]})]})]}),`
`,(0,n.jsx)(t.h5,{id:`ошибки-5`,children:`Ошибки:`}),`
`,(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`Тип`}),(0,n.jsx)(t.th,{children:`Описание`})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`\\Throwable`}),(0,n.jsx)(t.td,{})]})})]}),`
`,(0,n.jsx)(t.h5,{id:`возвращает-7`,children:`Возвращает:`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`bool`})})})})}),`
`,(0,n.jsx)(t.p,{children:`Возвращает true, если файл успешно сохранён, или false — в случае ошибки.`})]})}function l(e={}){let{wrapper:t}=e.components||{};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}export{a as _markdown,l as default,r as frontmatter,i as lastModified,o as structuredData,s as toc};