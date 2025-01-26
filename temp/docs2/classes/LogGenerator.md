# Abstract Class: [\Default](../../packages/Default.md)\LogGenerator


---

### Properties
* protected $[db_logs](#property_db_logs)
* protected $[initialized](#property_initialized)
* protected $[logs](#property_logs)
* protected $[telegram_bot](#property_telegram_bot)
* protected $[telegram_channel](#property_telegram_channel)
* protected $[telegram_send](#property_telegram_send)
* protected $[telegram_type](#property_telegram_type)

---

### Methods

* public [generateLog()](#method_generateLog)
* public [getAllowedType()](#method_getAllowedType)
* public [getAllowedTypes()](#method_getAllowedTypes)
* public [getLogs()](#method_getLogs)
* public [getTelegramBot()](#method_getTelegramBot)
* public [getTelegramChannel()](#method_getTelegramChannel)
* public [getTelegramType()](#method_getTelegramType)
* public [init()](#method_init)
* public [isDbLogs()](#method_isDbLogs)
* public [isTelegramSend()](#method_isTelegramSend)
* public [setDbLogs()](#method_setDbLogs)
* public [setLogs()](#method_setLogs)
* public [setTelegramBot()](#method_setTelegramBot)
* public [setTelegramChannel()](#method_setTelegramChannel)
* public [setTelegramSend()](#method_setTelegramSend)
* public [setTelegramType()](#method_setTelegramType)
* private [createLogDirectory()](#method_createLogDirectory)
* private [dbLog()](#method_dbLog)
* private [fileLog()](#method_fileLog)
* private [formatMessage()](#method_formatMessage)
* private [getErrorNotification()](#method_getErrorNotification)
* private [telegramLog()](#method_telegramLog)

---

### Details

* File: [engine/inc/maharder/_includes/classes/LogGenerator.php](../../engine/inc/maharder/_includes/classes/LogGenerator.php)

---

## Properties
<a id="property_db_logs"></a>
#### protected $db_logs : bool
---
**Summary**

Сохранять логи в базе данных

**Type:** <a href="../bool"><abbr title="bool">bool</abbr></a>

**Details:**


<a id="property_initialized"></a>
#### protected $initialized : bool
---
**Summary**

Проверяет, сформирован класс или нет

**Type:** <a href="../bool"><abbr title="bool">bool</abbr></a>

**Details:**

##### Tags
| Tag | Version | Description |
| --- | ------- | ----------- |
| since | 173.3.0 |  |

<a id="property_logs"></a>
#### protected $logs : bool
---
**Summary**

Регулятор логирования системы

**Type:** <a href="../bool"><abbr title="bool">bool</abbr></a>

**Details:**


<a id="property_telegram_bot"></a>
#### protected $telegram_bot : ?string
---
**Summary**

API телеграм бота, который будет отправлять логи

**Type:** <a href="../?string"><abbr title="?string">?string</abbr></a>

**Details:**


<a id="property_telegram_channel"></a>
#### protected $telegram_channel : string|int|null
---
**Summary**

ID канала, куда будут отправляться логи

**Type:** <a href="../string|int|null"><abbr title="string|int|null">string|int|null</abbr></a>

**Details:**


<a id="property_telegram_send"></a>
#### protected $telegram_send : bool
---
**Summary**

Регулятор отправки логов в телеграм канал
По умолчанию - выключен

**Type:** <a href="../bool"><abbr title="bool">bool</abbr></a>

**Details:**


<a id="property_telegram_type"></a>
#### protected $telegram_type : ?string
---
**Summary**

Тип логов, которые будут отправлены в телеграм

**Type:** <a href="../?string"><abbr title="?string">?string</abbr></a>

**Details:**



---

## Methods

<a id="method_generateLog"></a>
### generateLog

```
static public generateLog(string  service, string  functionName, mixed  message, string  type = &#039;error&#039;) : void
```

##### Summary

Генерация лог-файлов при возникновении ошибки или другой значимой ситуации в процессе работы системы.

##### Description

Данная функция создаёт лог-файлы в зависимости от указанного типа ошибки, хранит подробную информацию о сервисе,
функции, дате/времени и сообщении. Помимо записи в файл, опционально отправляются уведомления в Telegram и
сохраняются логи в базу данных.

##### Parameters:

| Name | Type | Default |
|------|------|---------|
| **$service** | string |  |
| **$functionName** | string |  |
| **$message** | mixed |  |
| **$type** | string | &#039;error&#039; |

##### Throws:

| Type | Description |
|------|-------------|
| \JsonException|\Throwable | Исключение, связанное с ошибками в JSON-конверсии (может быть выброшено
при выполнении Telegram-лога). |

##### Returns:

```
void
```

---

<a id="method_getAllowedType"></a>
### getAllowedType

```
static public getAllowedType(string  type) : string
```

##### Summary

Возвращает описание разрешенного типа ошибки по его ключу.

##### Description

Перечень всех доступных типов с их описаниями
задается методом `getAllowedTypes()`. Если указанный ключ `$type`
отсутствует в списке, будет сгенерирована ошибка типа PHP `undefined index`.

##### Parameters:

| Name | Type | Default |
|------|------|---------|
| **$type** | string |  |

##### Returns:

```
string
```
Описание типа ошибки, соответствующее переданному ключу.

`getAllowedTypes()`.

---

<a id="method_getAllowedTypes"></a>
### getAllowedTypes

```
static public getAllowedTypes() : array
```

##### Summary

Возвращает массив доступных типов сообщений с их локализованными описаниями.

##### Description

Типы сообщений включают различные уровни, такие как ошибка, информация, предупреждение, и другие.
Также добавляются сокращенные обозначения для некоторых ключевых типов, таких как &quot;warn&quot;, &quot;crit&quot; или
&quot;emergency&quot;.
Локализация осуществляется с использованием функции `__`.

##### Returns:

```
array
```
Ассоциативный массив, где ключи — идентификаторы типов сообщений, а значения — локализованные
описания.

---

<a id="method_getLogs"></a>
### getLogs

```
static public getLogs() : bool
```

##### Summary

Получает текущий статус логирования.

##### Description

Метод инициализирует необходимые настройки через `self::init()`, если они еще не были установлены,
и устанавливает значение `self::$logs`, если оно не было задано. Значение берется из настроек,
полученных через `DataManager::getConfig(&#039;maharder&#039;)`.

##### Throws:

| Type | Description |
|------|-------------|
| \RuntimeException|\JsonException | Если `DataManager::getConfig()` выбрасывает исключение (например, при
ошибке чтения конфигурации). |
| \Exception | Если возникнут ошибки во время инициализации (в методе init()). |

##### Returns:

```
bool
```
Возвращает текущее состояние логирования.

---

<a id="method_getTelegramBot"></a>
### getTelegramBot

```
static public getTelegramBot() : string
```

##### Summary

Возвращает идентификатор Telegram-бота.

##### Description

Метод возвращает текущее значение идентификатора Telegram-бота,
хранящегося в статическом свойстве `$telegram_bot`.

##### Throws:

| Type | Description |
|------|-------------|
| \RuntimeException | Если идентификатор Telegram-бота не установлен (равен null). |

##### Returns:

```
string
```
Идентификатор Telegram-бота.

---

<a id="method_getTelegramChannel"></a>
### getTelegramChannel

```
static public getTelegramChannel() : int|string|null
```

##### Summary

Возвращает идентификатор Telegram-канала.

##### Description

Метод возвращает идентификатор канала в различных форматах:
- Если канал настроен, он может быть представлен числом (целочисленным идентификатором) или строкой (например, в
виде alias).
- Если канал отсутствует, метод вернет null.

##### Returns:

```
int|string|null
```
Возвращает идентификатор Telegram-канала в виде числа, строки или null, если канал не
настроен.

---

<a id="method_getTelegramType"></a>
### getTelegramType

```
static public getTelegramType() : string
```

##### Summary

Возвращает тип Telegram в зависимости от установленного значения.

##### Description

Если свойство `$telegram_type` не задано (null или пустое значение),
возвращает значение по умолчанию `&#039;all&#039;`.

##### Returns:

```
string
```
Тип Telegram. Может возвращать либо значение `$telegram_type`,
либо строку `&#039;all&#039;` в качестве значения по умолчанию.

---

<a id="method_init"></a>
### init

```
static public init() : void
```

##### Summary

Инициализирует настройки для логирования. Функция настраивает параметры телеграм-логирования, базы данных для
логов и другие параметры, используя данные конфигурации. Флаг `initialized` предотвращает повторную
инициализацию.

##### Throws:

| Type | Description |
|------|-------------|
| \JsonException | Исключение выбрасывается, если манипуляции с JSON в процессе получения данных конфигурации
или установки параметров окажутся некорректными. |

##### Returns:

```
void
```

---

<a id="method_isDbLogs"></a>
### isDbLogs

```
static public isDbLogs() : bool
```

##### Summary

Проверяет, включены ли логирования в базе данных.

##### Description

Если состояние логов в базе данных еще не было установлено, метод загружает
конфигурацию из DataManager и устанавливает значение на основании
параметра `logs_db` в конфигурации. Если параметр отсутствует,
логирование в БД считается выключенным по умолчанию.

##### Throws:

| Type | Description |
|------|-------------|
| \RuntimeException|\JsonException | Если конфигурация приложения не может быть получена
(зависит от реализации DataManager). |

##### Returns:

```
bool
```
Возвращает `true`, если логирование в базе данных включено, иначе `false`.

---

<a id="method_isTelegramSend"></a>
### isTelegramSend

```
static public isTelegramSend() : bool
```

##### Summary

Проверяет, включена ли отправка логов через Telegram.

##### Description

Если флаг `$telegram_send` еще не установлен (`false`) и есть логи (определяется методом `getLogs()`),
функция загружает конфигурацию из `DataManager` и устанавливает флаг на основе значения опции `logs_telegram`.
В противном случае отправка через Telegram отключается.

##### Throws:

| Type | Description |
|------|-------------|
| \RuntimeException|\JsonException | Если возникает ошибка при загрузке или обработке конфигурации из
DataManager. |

##### Returns:

```
bool
```
Возвращает `true`, если отправка логов через Telegram включена, или `false`, если отключена.

---

<a id="method_setDbLogs"></a>
### setDbLogs

```
static public setDbLogs(bool  db_logs) : void
```

##### Summary

Устанавливает логирование работы с базой данных.

##### Parameters:

| Name | Type | Default |
|------|------|---------|
| **$db_logs** | bool |  |

##### Returns:

```
void
```

---

<a id="method_setLogs"></a>
### setLogs

```
static public setLogs(bool|int  logs) : void
```

##### Summary

Устанавливает состояние логирования.

##### Description

Если передано значение `true`, включается логирование. Если передано значение `false`, логирование выключается.
Также поддерживается передача целочисленного значения, которое будет приведено к булевому типу.

##### See Also:

 * [\self::init()](../\self::init())

##### Parameters:

| Name | Type | Default |
|------|------|---------|
| **$logs** | bool|int |  |

##### Throws:

| Type | Description |
|------|-------------|
| \Exception | Если возникнут ошибки во время инициализации (в методе init()). |

##### Returns:

```
void
```
Функция не возвращает значения.

---

<a id="method_setTelegramBot"></a>
### setTelegramBot

```
static public setTelegramBot(string|null  telegram_bot) : void
```

##### Summary

Устанавливает идентификатор или токен Telegram-бота.

##### Description

Метод позволяет задать идентификатор или токен используемого Telegram-бота,
если он используется в приложении. Для удаления текущего значения передайте `null`.

##### Parameters:

| Name | Type | Default |
|------|------|---------|
| **$telegram_bot** | string|null |  |

##### Returns:

```
void
```

---

<a id="method_setTelegramChannel"></a>
### setTelegramChannel

```
static public setTelegramChannel(int|string|null  telegram_channel) : void
```

##### Summary

Устанавливает идентификатор или имя канала Telegram.

##### Description

Эта функция задаёт значение статического свойства `$telegram_channel`, позволяя указать идентификатор
канала, имя или установить значение в `null`, чтобы сбросить текущее состояние.

##### Parameters:

| Name | Type | Default |
|------|------|---------|
| **$telegram_channel** | int|string|null |  |

##### Returns:

```
void
```

---

<a id="method_setTelegramSend"></a>
### setTelegramSend

```
static public setTelegramSend(bool  telegram_send = false) : void
```

##### Summary

Устанавливает флаг для отправки сообщений через Telegram.

##### Description

Этот метод изменяет состояние статического свойства `$telegram_send`,
которое указывает, должны ли сообщения отправляться через Telegram.

##### Parameters:

| Name | Type | Default |
|------|------|---------|
| **$telegram_send** | bool | false |

##### Returns:

```
void
```
Метод не возвращает значения.

---

<a id="method_setTelegramType"></a>
### setTelegramType

```
static public setTelegramType(string|null  telegram_type) : void
```

##### Summary

Устанавливает тип Telegram для текущего экземпляра.

##### Parameters:

| Name | Type | Default |
|------|------|---------|
| **$telegram_type** | string|null |  |

##### Returns:

```
void
```

---

<a id="method_createLogDirectory"></a>
### createLogDirectory

```
static private createLogDirectory(string  service, string  module, string  path) : bool
```

##### Summary

Создает директорию для логов с учетом указанного сервиса, модуля и пути.

##### Description

Функция вызывает метод {@see} для создания директории,
а также дополнительно проверяет существование директории через {@see}.

##### Parameters:

| Name | Type | Default |
|------|------|---------|
| **$service** | string |  |
| **$module** | string |  |
| **$path** | string |  |

##### Throws:

| Type | Description |
|------|-------------|
| \Throwable | В случае ошибки при вызове {@see}
могут быть выброшены исключения, которые логируются в системе. |

##### Returns:

```
bool
```
Возвращает true, если директория была успешно создана или уже существует;
false, если создание директории завершилось ошибкой.

---

<a id="method_dbLog"></a>
### dbLog

```
static private dbLog(array  message, string  type) : void
```

##### Summary

Логирует сообщение в базу данных, если включены настройки логирования в БД.

##### Description

Функция инициализирует настройки логирования, проверяет, включено ли логирование в базу данных,
создает объект лога, форматирует сообщение и сохраняет его в базу данных.

##### Parameters:

| Name | Type | Default |
|------|------|---------|
| **$message** | array |  |
| **$type** | string |  |

##### Throws:

| Type | Description |
|------|-------------|
| \RuntimeException | Если не удается сохранить лог в базу данных. |
| \JsonException|\Throwable | При возникновении ошибок в процессе работы с JSON или других исключений. |

##### Returns:

```
void
```

---

<a id="method_fileLog"></a>
### fileLog

```
static private fileLog(string  file, mixed  message, int  level) : void
```

##### Summary

Логирование сообщений в файл.

##### Description

Метод записывает переданное сообщение в указанный лог-файл, если включено логирование.
Сообщение предварительно сериализуется перед записью.

##### Parameters:

| Name | Type | Default |
|------|------|---------|
| **$file** | string |  |
| **$message** | mixed |  |
| **$level** | int |  |

##### Throws:

| Type | Description |
|------|-------------|
| \JsonException | Генерируется, если в процессе инициализации (инициализация через `self::init()`)
возникает ошибка, связанная с обработкой JSON (например, при работе с конфигурацией
DataManager::getConfig()). |

##### Returns:

```
void
```
Функция ничего не возвращает.

---

<a id="method_formatMessage"></a>
### formatMessage

```
static private formatMessage(string|array  message) : string
```

##### Summary

Форматирует сообщение для отображения в виде строки.

##### Description

Если сообщение передано в виде массива, функция преобразует его в строку,
где каждый элемент массива будет представлен как отдельная строка,
разделенная тегами `&lt;br /&gt;`. В случае, если ключ является строкой, он
будет выделен тегом `&lt;b&gt;`. Если сообщение уже является строкой, возвращает
его без изменений.

##### Parameters:

| Name | Type | Default |
|------|------|---------|
| **$message** | string|array |  |

##### Throws:

| Type | Description |
|------|-------------|
| \InvalidArgumentException | Если входной параметр не является строкой
или массивом (сценарий невозможен в данной
реализации, но документация указывает на
строгие ожидания типов). |

##### Returns:

```
string
```
Возвращает отформатированное сообщение в виде строки. Если
входной параметр — строка, возвращается без изменений,
если массив — объединяется в строку с использованием
тега `&lt;br /&gt;`.

---

<a id="method_getErrorNotification"></a>
### getErrorNotification

```
static private getErrorNotification(string  service, string  functionName, string  type, string  dateTime, mixed  message) : string
```

##### Summary

Генерирует HTML-уведомление об ошибке для указанного модуля и функции.

##### Description

Формирует содержимое уведомления с информацией о модуле, функции, типе ошибки, дате и времени, а также
сообщением об ошибке.

##### Parameters:

| Name | Type | Default |
|------|------|---------|
| **$service** | string |  |
| **$functionName** | string |  |
| **$type** | string |  |
| **$dateTime** | string |  |
| **$message** | mixed |  |

##### Returns:

```
string
```
Возвращает сгенерированное HTML-уведомление с детализированной информацией об ошибке.

---

<a id="method_telegramLog"></a>
### telegramLog

```
static private telegramLog(array  message, string  type) : void
```

##### Summary

Отправляет лог-сообщение в Telegram.

##### Description

Функция формирует и отправляет сообщение с логом в указанный Telegram-чат,
проверяя настройки и типы логов, допустимые для отправки.
Если отправка не удалась, сообщение об ошибке записывается в лог приложения.

##### Parameters:

| Name | Type | Default |
|------|------|---------|
| **$message** | array |  |
| **$type** | string |  |

##### Throws:

| Type | Description |
|------|-------------|
| \RuntimeException | В случае ошибки HTTP-запроса или сбоя при работе с Telegram API. |
| \JsonException|\Throwable | При возникновении ошибок в процессе работы с JSON или других исключений. |

##### Returns:

```
void
```
Функция ничего не возвращает.
