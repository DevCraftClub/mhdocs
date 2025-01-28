# Класс: \AssetsChecker

## Краткое содержание:

Трейт для проверки и управления ассетами (файлы скриптов и стилей).


---

### Свойства
* private $[asset_file](#property_asset_file)
* private $[assets_arr](#property_assets_arr)
* private $[assets_dir](#property_assets_dir)

---

### Методы

* public [checkAssets()](#method_checkAssets)
* public [parseAssets()](#method_parseAssets)
* public [save_asset()](#method_save_asset)
* private [fetchFileContent()](#method_fetchFileContent)
* private [generateFileMetadata()](#method_generateFileMetadata)
* private [parse_assets()](#method_parse_assets)
* private [prepare_assets()](#method_prepare_assets)
* private [saveFile()](#method_saveFile)

---

### Подробности

* Путь: engine/inc/maharder/_includes/traits/AssetsChecker.php

---

## Свойства
<a id="property_asset_file"></a>
#### private $asset_file : string
---
**Краткое содержание**

Файл с информацией и хешами вспомогательных файлов

**Тип:** <abbr title="string">Текст</abbr>


<a id="property_assets_arr"></a>
#### private $assets_arr : array
---
**Краткое содержание**

Массив со всеми данными для обновления стилей и скриптов

**Тип:** <abbr title="array">Массив</abbr>


<a id="property_assets_dir"></a>
#### private $assets_dir : string
---
**Краткое содержание**

Путь до всех вспомогательных файлов

**Тип:** <abbr title="string">Текст</abbr>



---

## Методы

<a id="method_checkAssets"></a>
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

 * [\DataManager::dirToArray()](#method_dirToArray)
 * [\AssetsChecker::prepare_assets()](#method_prepare_assets)

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

<a id="method_parseAssets"></a>
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

 * [\parse_assets()](#method_parse_assets)

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

<a id="method_save_asset"></a>
### save_asset

```
public save_asset(array  data, string  file) : array|false
```

##### Краткое содержание

Сохраняет файл на сервер и возвращает информацию о нём или false в случае неуспеха.

##### Смотри так-же:

 * [\DataManager::createDir()](./DataManager.md#method_createDir)
 * [\LogGenerator::generateLog()](./LogGenerator.md#method_generateLog)
 * [\AssetsChecker::fetchFileContent()](#method_fetchFileContent)
 * [\AssetsChecker::saveFile()](#method_saveFile)
 * [\AssetsChecker::generateFileMetadata()](#method_generateFileMetadata)

##### Свойства:

| Название | Тип | По умолчанию |
|----------|-----|----------|
| **$data** | array |  |
| **$file** | string |  |

##### Ошибки:

| Тип | Описание |
|-----|----------|
| \JsonException|\Throwable | Генерирует исключение, если возникает ошибка обработки JSON. |

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

<a id="method_fetchFileContent"></a>
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

<a id="method_generateFileMetadata"></a>
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

<a id="method_parse_assets"></a>
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

 * [\AssetsChecker::save_asset()](#method_save_asset)
 * [\self::prepare_assets()](#method_prepare_assets)
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

<a id="method_prepare_assets"></a>
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

<a id="method_saveFile"></a>
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
