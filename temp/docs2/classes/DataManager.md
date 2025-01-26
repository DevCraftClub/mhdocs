# Abstract Class: [\Default](../../packages/Default.md)\DataManager


---

### Properties
* protected $[db](#property_db)

---

### Methods

* public [abbr()](#method_abbr)
* public [connect()](#method_connect)
* public [createDir()](#method_createDir)
* public [createLockFile()](#method_createLockFile)
* public [defType()](#method_defType)
* public [deleteDir()](#method_deleteDir)
* public [dirToArray()](#method_dirToArray)
* public [getComparer()](#method_getComparer)
* public [getConfig()](#method_getConfig)
* public [getDb()](#method_getDb)
* public [getPrefix()](#method_getPrefix)
* public [getUserPrefix()](#method_getUserPrefix)
* public [joinPaths()](#method_joinPaths)
* public [nameArgs()](#method_nameArgs) - (deprecated)
* public [normalizePath()](#method_normalizePath)
* public [normalizeUrl()](#method_normalizeUrl)
* public [sanitizeArrayInput()](#method_sanitizeArrayInput)
* public [sanitizeInput()](#method_sanitizeInput)
* public [setDb()](#method_setDb)
* public [toTranslit()](#method_toTranslit)
* private [loadJsonConfig()](#method_loadJsonConfig)
* private [migrateOldConfig()](#method_migrateOldConfig)

---

### Details

* File: [engine/inc/maharder/_includes/classes/DataManager.php](../../engine/inc/maharder/_includes/classes/DataManager.php)

---

## Properties
<a id="property_db"></a>
#### protected $db : ?\db
---
**Summary**

Статическое свойство для хранения экземпляра базы данных.

**Type:** <a href="../?\db"><abbr title="?\db">db</abbr></a>
Экземпляр базы данных или null, если он не инициализирован.
**Details:**



---

## Methods

<a id="method_abbr"></a>
### abbr

```
static public abbr(string  string, string  sep = &#039;_&#039;) : string
```

##### Summary

Создает аббревиатуру из переданной строки, используя указанное разделение слов.

##### Description

Функция извлекает первую букву каждого слова из строки, разделенной указанным
разделителем, и формирует из них аббревиатуру, преобразуя результат в верхний регистр.

##### See Also:

 * [](../)

##### Parameters:

| Name | Type | Default |
|------|------|---------|
| **$string** | string |  |
| **$sep** | string | &#039;_&#039; |

##### Throws:

| Type | Description |
|------|-------------|
| \InvalidArgumentException | Если один из параметров передан с некорректным типом. |

##### Returns:

```
string
```
Аббревиатура, сформированная из начальных букв всех слов строки в верхнем регистре.

---

<a id="method_connect"></a>
### connect

```
static public connect() : void
```

##### Summary

Устанавливает подключение к базе данных, если оно еще не было установлено.

##### Description

Если глобальная переменная `DBHOST` не определена, подключение
к базе данных конфигурируется через файл `dbconfig.php` в папке ENGINE_DIR.
В противном случае используется глобальная переменная `$db`.

##### See Also:

 * [\self::setDb()](../\self::setDb())
 * [\DBHOST](../\DBHOST)

##### Returns:

```
void
```

---

<a id="method_createDir"></a>
### createDir

```
static public createDir(string  service = &#039;DataManager&#039;, string  module = &#039;mhadmin&#039;, int  permission = 0755, string  ...paths) : bool
```

##### Summary

Создаёт папку(и) по указанным путям с заданными правами доступа.

##### Description

Для каждого предоставленного пути создаётся директория, если она ещё не существует.
При возникновении ошибки (например, неудачного создания директории)
ошибка логируется через `LogGenerator::generate_log`.

##### Parameters:

| Name | Type | Default |
|------|------|---------|
| **$service** | string | &#039;DataManager&#039; |
| **$module** | string | &#039;mhadmin&#039; |
| **$permission** | int | 0755 |
| **$paths** | string |  |

##### Throws:

| Type | Description |
|------|-------------|
| \RuntimeException | Бросается, если директория не может быть создана. |
| \JsonException|\Throwable | Может быть вызван, если ошибка логирования связана с кодировкой JSON. |

##### Returns:

```
bool
```
Возвращает `true`, если все директории успешно созданы, иначе `false`.

---

<a id="method_createLockFile"></a>
### createLockFile

```
static public createLockFile(string  path) : mixed
```

##### Parameters:

| Name | Type | Default |
|------|------|---------|
| **$path** | string |  |

##### Throws:

| Type | Description |
|------|-------------|
| \Throwable |  |
| \JsonException |  |

##### Returns:

```
mixed
```

---

<a id="method_defType"></a>
### defType

```
static public defType(mixed  value, string  type) : float|bool|int|string
```

##### Summary

Приводит значение к указанному типу, если возможно, используя набор фильтров.

##### Description

Функция принимает значение и тип, преобразует значение к заданному типу с использованием соответствующего
фильтра. Если преобразование невозможно, возвращается строковое представление значения.

Поддерживаемые типы:
- `double`, `float`: преобразование в число с плавающей точкой.
- `boolean`, `bool`: преобразование в булево значение.
- `integer`, `int`, `tinyint`: преобразование в целое число.
- `string`: фильтрация как строка.

Если указанный тип отсутствует в карте типов, функция возвращает строковое представление значения.

##### Parameters:

| Name | Type | Default |
|------|------|---------|
| **$value** | mixed |  |
| **$type** | string |  |

##### Throws:

| Type | Description |
|------|-------------|
| \ValueError | Исключение может быть выброшено, если `filter_var` получит некорректный фильтр. |

##### Returns:

```
float|bool|int|string
```
Преобразованное значение в заданный тип, либо строковое представление значения,
если преобразование невозможно или тип неизвестен.

---

<a id="method_deleteDir"></a>
### deleteDir

```
static public deleteDir(string  path) : void
```

##### Summary

Полностью удаляет директорию и все её содержимое, включая файлы и вложенные директории.

##### Description

Эта функция рекурсивно обходит заданный путь, удаляя все файлы и вложенные директории,
а затем удаляет саму директорию. Игнорирует защищённую директорию,
путь к которой жёстко прописан в коде.

##### Parameters:

| Name | Type | Default |
|------|------|---------|
| **$path** | string |  |

##### Throws:

| Type | Description |
|------|-------------|
| \UnexpectedValueException | В случае, если переданный путь не является директорией
или не может быть прочитан. |

##### Returns:

```
void
```

---

<a id="method_dirToArray"></a>
### dirToArray

```
static public dirToArray(string  dir, mixed  ..._ext) : array
```

##### Summary

Преобразует указанную директорию в массив, содержащий все папки и файлы из неё.

##### Description

Этот метод является обёрткой для функции `dirToArray` и вызывает её с переданными
параметрами. Используется для рекурсивного получения структуры директорий и файлов
в виде массива.

##### See Also:

 * [\dirToArray()](../../namespaces/default.md#function_dirToArray)

##### Parameters:

| Name | Type | Default |
|------|------|---------|
| **$dir** | string |  |
| **$_ext** | mixed |  |

##### Returns:

```
array
```
Ассоциативный массив, где ключами могут быть директории, а значения —
содержимое этих директорий; файлы представлены в виде элементов массива.

---

<a id="method_getComparer"></a>
### getComparer

```
static public getComparer(mixed  value) : string
```

##### Summary

Формирует строку, представляющую оператор сравнения и значение, основанную на переданном значении.

##### Description

Эта функция анализирует начальный символ переданного значения, чтобы определить оператор сравнения
(например, &#039;=&#039;, &#039;&lt;&#039;, &#039;&gt;&#039;, &#039;LIKE&#039;, &#039;&lt;&gt;&#039;, &#039;&lt;=&#039;, &#039;&gt;=&#039;). Если переданный оператор — &#039;%&#039;, то значение
оборачивается в проценты для использования в операциях LIKE. Если значение начинается с других
специальных символов, оно интерпретируется и оператор определяется автоматически.
При необходимости значение преобразуется в указанный тип.

##### Parameters:

| Name | Type | Default |
|------|------|---------|
| **$value** | mixed |  |

##### Throws:

| Type | Description |
|------|-------------|
| \InvalidArgumentException | Если передано некорректное значение или тип недопустим для обработки. |

##### Returns:

```
string
```
Строка, представляющая оператор сравнения и значение, готовая для использования
в SQL- или других выражениях. Например: &quot; = &#039;some_value&#039;&quot;, &quot;&lt; 10&quot;, или &quot; LIKE &#039;%abc%&#039;&quot;.

---

<a id="method_getConfig"></a>
### getConfig

```
static public getConfig(string  codename, string|null  path = null, string|null  confName = null) : array
```

##### Summary

Получает конфигурацию на основе указанного кода имени и пути к файлу JSON.

##### Description

Метод сначала пытается загрузить конфигурацию из указанного или стандартного пути.
Если файл не найден, он проверяет, указано ли устаревшее имя конфигурации
для выполнения миграции данных. Если миграция невозможна, возвращается пустой массив.

##### Parameters:

| Name | Type | Default |
|------|------|---------|
| **$codename** | string |  |
| **$path** | string|null | null |
| **$confName** | string|null | null |

##### Throws:

| Type | Description |
|------|-------------|
| \JsonException | Если содержимое JSON-файла некорректно при вызове `loadJsonConfig`. |
| \RuntimeException | Если ошибка возникает во время миграции конфигурации. |

##### Returns:

```
array
```
Возвращает массив конфигурации. Если файл или миграция недоступны, возвращается пустой массив.

---

<a id="method_getDb"></a>
### getDb

```
static public getDb() : \db
```

##### Summary

Возвращает объект подключения к базе данных.

##### Description

Если подключение еще не было установлено, метод инициирует его вызовом метода connect().

##### See Also:

 * [\self::connect()](../\self::connect())
 * [\self::$db](../\self::$db)

##### Returns:

```
\db
```
Объект подключения к базе данных.

---

<a id="method_getPrefix"></a>
### getPrefix

```
static public getPrefix() : string
```

##### Summary

Возвращает префикс, заданный в системе.

##### Returns:

```
string
```
Префикс, используемый в системе.

---

<a id="method_getUserPrefix"></a>
### getUserPrefix

```
static public getUserPrefix() : string
```

##### Summary

Получает префикс пользователя.

##### Description

Данный метод возвращает значение константы `USERPREFIX`.

##### Returns:

```
string
```
Префикс пользователя.

---

<a id="method_joinPaths"></a>
### joinPaths

```
public joinPaths(string  ...paths) : string
```

##### Summary

Объединяет несколько путей в один.

##### Description

Объединение происходит слева направо. Пустые значения игнорируются.
Возвращаемый путь нормализуется (лишние символы удаляются, контролируется корректность пути).

##### Parameters:

| Name | Type | Default |
|------|------|---------|
| **$paths** | string |  |

##### Throws:

| Type | Description |
|------|-------------|
| \RuntimeException | Если произошла ошибка при нормализации пути. |

##### Returns:

```
string
```
Возвращает объединённый и нормализованный путь.

---

<a id="method_nameArgs"></a>
### nameArgs

```
(deprecated) - static public nameArgs(array|null  args) : array
```

##### Summary

Преобразует переданный массив в плоский массив ключ-значение, удаляя пустые значения.

##### Description

Метод принимает массив (или null) и возвращает новый массив,
где все вложенные массивы разворачиваются в плоскую структуру.
Для элементов с числовыми ключами их значения назначаются в виде ключей и значений одновременно.
Пустые строки или `null` удаляются из итогового массива.
**Deprecated**
Deprecatedс версии PHP 8.1. Рекомендуется использовать альтернативные методы для работы с массивами.

##### Parameters:

| Name | Type | Default |
|------|------|---------|
| **$args** | array|null |  |

##### Throws:

| Type | Description |
|------|-------------|
| \InvalidArgumentException | Если аргумент $args содержит некорректные данные. |

##### Returns:

```
array
```
Плоский массив ключ-значение, где пустые строки и `null` исключены.

---

<a id="method_normalizePath"></a>
### normalizePath

```
static public normalizePath(string  path) : string
```

##### Summary

Нормализует путь, очищая его от лишних управляющих символов, точек и других нежелательных элементов.

##### Description

Эта функция:
- Удаляет управляющие символы и преобразует все обратные слэши (`\`) в прямые (`/`).
- Убирает текущую (`.`) и родительскую (`..`) директории из пути.
- Удаляет корневой каталог (ROOT_DIR), если путь начинается с него.
- Гарантирует, что путь на Linux начинается с символа `/`.

##### Parameters:

| Name | Type | Default |
|------|------|---------|
| **$path** | string |  |

##### Throws:

| Type | Description |
|------|-------------|
| \InvalidArgumentException | Если константа ROOT_DIR не определена или имеет недопустимый тип. |

##### Returns:

```
string
```
Нормализованный путь.
Возвращается пустая строка, если входной путь содержит недопустимые символы (например,
управляющие символы).

---

<a id="method_normalizeUrl"></a>
### normalizeUrl

```
static public normalizeUrl(string  url, array  additionalQuery = []) : string
```

##### Summary

Нормализует указанный URL, добавляя дополнительные параметры запроса при необходимости.

##### Description

Если URL содержит схему или начинается с двойного слэша, возвращается исходный URL без изменений.
Если URL не содержит схему, добавляется базовый URL, который формируется на основе конфигурации `$config`.
Если путь в URL является относительным, он также дополняется базовым URL.

##### See Also:

 * [\str_starts_with()](../\str_starts_with())

##### Parameters:

| Name | Type | Default |
|------|------|---------|
| **$url** | string |  |
| **$additionalQuery** | array | [] |

##### Returns:

```
string
```
Нормализованный URL.

---

<a id="method_sanitizeArrayInput"></a>
### sanitizeArrayInput

```
static public sanitizeArrayInput(mixed  input = null, array|null  flags = null) : mixed
```

##### Summary

Очищает входные данные, массивы или значения, используя заданные флаги для фильтрации.

##### Description

Если входные данные являются массивом, рекурсивно применяется функция очистки ко всем элементам массива.
Если входные данные - одно значение, применяется очистка непосредственно к нему.

##### Parameters:

| Name | Type | Default |
|------|------|---------|
| **$input** | mixed | null |
| **$flags** | array|null | null |

##### Returns:

```
mixed
```
Очищенные данные. Если входные данные - массив, возвращается очищенный массив. Если данные не
заданы, возвращается null.

---

<a id="method_sanitizeInput"></a>
### sanitizeInput

```
static public sanitizeInput(mixed|null  value = null, array|null  flags = null) : string|null
```

##### Summary

Обрабатывает и фильтрует входящее значение на основе заданных флагов.

##### Description

Эта функция принимает значение и массив флагов фильтрации, которые применяются
к значению последовательно, используя функцию `filter_var`.

##### Parameters:

| Name | Type | Default |
|------|------|---------|
| **$value** | mixed|null | null |
| **$flags** | array|null | null |

##### Returns:

```
string|null
```
Возвращает отфильтрованное значение в виде строки или `null` в случае, если
значение или фильтрация недействительны.

---

<a id="method_setDb"></a>
### setDb

```
static public setDb(\db|null  db) : void
```

##### Summary

Устанавливает экземпляр базы данных.

##### Description

Метод задает объект базы данных, который будет использоваться в дальнейшем.

##### See Also:

 * [\self::$db](../\self::$db)

##### Parameters:

| Name | Type | Default |
|------|------|---------|
| **$db** | \db|null |  |

##### Returns:

```
void
```

---

<a id="method_toTranslit"></a>
### toTranslit

```
static public toTranslit(string  input, bool  lowercase = true) : string
```

##### Summary

Конвертирует строку в транслитерацию, форматирует её и удаляет нежелательные символы.

##### Description

Эта функция выполняет трансформацию текста с учетом заданного функционала:
- Преобразует строку в транслит с использованием Transliterator или функции `totranslit()`,
  если Transliterator недоступен.
- Удаляет все символы, кроме букв, цифр и пробелов.
- Заменяет пробелы на символы подчеркивания.
- Приводит строку к нижнему регистру.

Функция упрощает создание URL-совместимых или SEO-оптимизированных строк из произвольных
текстовых данных.

##### See Also:

 * [\totranslit()](../\totranslit())

##### Parameters:

| Name | Type | Default |
|------|------|---------|
| **$input** | string |  |
| **$lowercase** | bool | true |

##### Throws:

| Type | Description |
|------|-------------|
| \RuntimeException | Если ни один из механизмов транслитерации,
Transliterator или totranslit, недоступен или некорректен. |

##### Returns:

```
string
```
Отформатированная строка, приведенная к нижнему регистру, состоящая из
символов латиницы, цифр и подчеркиваний.

---

<a id="method_loadJsonConfig"></a>
### loadJsonConfig

```
static private loadJsonConfig(string  filePath) : array
```

##### Summary

Загружает JSON-конфигурацию из указанного файла и возвращает её в виде массива.

##### Description

Функция читает содержимое файла, парсит его как JSON и возвращает массив данных.
Если элементы данных не являются массивами, они проходят фильтрацию с использованием
`FILTER_SANITIZE_FULL_SPECIAL_CHARS`.

##### Parameters:

| Name | Type | Default |
|------|------|---------|
| **$filePath** | string |  |

##### Throws:

| Type | Description |
|------|-------------|
| \JsonException | Если произошла ошибка при парсинге JSON. |
| \RuntimeException | Если файл не существует или недоступен для чтения. |

##### Returns:

```
array
```
Ассоциативный массив, содержащий данные из файла JSON.

---

<a id="method_migrateOldConfig"></a>
### migrateOldConfig

```
static private migrateOldConfig(string  codename, string  confName, string  configPath) : array
```

##### Summary

Мигрирует старый файл конфигурации в новый JSON-формат.

##### Description

Функция проверяет наличие старого конфигурационного файла, преобразует его
содержимое в новый формат, сохраняет в указанной директории в формате JSON и
удаляет старый файл. Если файл отсутствует или содержит некорректный формат данных,
выполняются соответствующие обработки ошибок и возвращается пустой массив.

##### See Also:

 * [\DLEPlugins::Check()](../\DLEPlugins::Check())
 * [\LogGenerator::generateLog()](../../classes/LogGenerator.md#method_generateLog)

##### Parameters:

| Name | Type | Default |
|------|------|---------|
| **$codename** | string |  |
| **$confName** | string |  |
| **$configPath** | string |  |

##### Throws:

| Type | Description |
|------|-------------|
| \JsonException | Если возникают ошибки при кодировании JSON. |
| \RuntimeException | Если не удается записать файл или выполнить операции с файловой системой. |
| \Throwable |  |

##### Returns:

```
array
```
Вернет массив настроек, извлеченных из старого конфигурационного файла.
