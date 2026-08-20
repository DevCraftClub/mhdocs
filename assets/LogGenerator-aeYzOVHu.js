import{r as e}from"./rolldown-runtime-QTnfLwEv.js";import{t}from"./jsx-runtime-By8HlURe.js";var n=e(t()),r={title:`Абстрактный класс: LogGenerator`,description:`Документация по плагину абстрактный класс: loggenerator для DLE.`},i=new Date(1787223655e3),a=`

## Краткое содержание: [#краткое-содержание]

Абстрактный класс для управления процессом логирования. Класс включает в себя базовый функционал для записи логов
в файлы, базу данных и отправки уведомлений в Telegram.

***

### Свойства [#свойства]

* protected $[db\\_logs](#property_db_logs)
* protected $[initialized](#property_initialized)
* protected $[logs](#property_logs)
* protected $[telegram\\_bot](#property_telegram_bot)
* protected $[telegram\\_channel](#property_telegram_channel)
* protected $[telegram\\_send](#property_telegram_send)
* protected $[telegram\\_type](#property_telegram_type)

***

### Методы [#методы]

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

***

### Подробности [#подробности]

* Путь: engine/inc/maharder/\\_includes/classes/LogGenerator.php

***

## Свойства [#свойства-1]

<span id="property_db_logs" />

#### protected $db\\_logs : bool [#protected-db_logs--bool]

***

**Краткое содержание**

Сохранять логи в базе данных

**Тип:** <abbr title="bool">Логические значения</abbr>

<span id="property_initialized" />

#### protected $initialized : bool [#protected-initialized--bool]

***

**Краткое содержание**

Проверяет, сформирован класс или нет

**Тип:** <abbr title="bool">Логические значения</abbr>

##### Tags [#tags]

| Тэг   | Версия  | Описание |
| ----- | ------- | -------- |
| since | 173.3.0 |          |

<span id="property_logs" />

#### protected $logs : bool [#protected-logs--bool]

***

**Краткое содержание**

Регулятор логирования системы

**Тип:** <abbr title="bool">Логические значения</abbr>

<span id="property_telegram_bot" />

#### protected $telegram\\_bot : ?string [#protected-telegram_bot--string]

***

**Краткое содержание**

API телеграм бота, который будет отправлять логи

**Тип:** <abbr title="?string">Текст или null</abbr>

<span id="property_telegram_channel" />

#### protected $telegram\\_channel : string|int|null [#protected-telegram_channel--stringintnull]

***

**Краткое содержание**

ID канала, куда будут отправляться логи

**Тип:** <abbr title="string|int|null">Текст / целое число / null</abbr>

<span id="property_telegram_send" />

#### protected $telegram\\_send : bool [#protected-telegram_send--bool]

***

**Краткое содержание**

Регулятор отправки логов в телеграм канал
По умолчанию - выключен

**Тип:** <abbr title="bool">Логические значения</abbr>

<span id="property_telegram_type" />

#### protected $telegram\\_type : ?string [#protected-telegram_type--string]

***

**Краткое содержание**

Тип логов, которые будут отправлены в телеграм

**Тип:** <abbr title="?string">Текст или null</abbr>

**Подробности:**

***

## Методы [#методы-1]

<span id="method_generateLog" />

### generateLog [#generatelog]

\`\`\`
static public generateLog(string  service, string  functionName, mixed  message, string  type = "error") : void
\`\`\`

##### Краткое содержание [#краткое-содержание-1]

Генерация лог-файлов при возникновении ошибки или другой значимой ситуации в процессе работы системы.

##### Описание [#описание]

Данная функция создаёт лог-файлы в зависимости от указанного типа ошибки, хранит подробную информацию о сервисе,
функции, дате/времени и сообщении. Помимо записи в файл, опционально отправляются уведомления в Telegram и
сохраняются логи в базу данных.

##### Свойства: [#свойства-2]

| Название          | Тип    | По умолчанию |
| ----------------- | ------ | ------------ |
| **$service**      | string |              |
| **$functionName** | string |              |
| **$message**      | mixed  |              |
| **$type**         | string | "error"      |

##### Ошибки: [#ошибки]

| Тип                        | Описание                                                                                               |
| -------------------------- | ------------------------------------------------------------------------------------------------------ |
| \\JsonException\\|\\Throwable | Исключение, связанное с ошибками в JSON-конверсии (может быть выброшено при выполнении Telegram-лога). |

##### Возвращает: [#возвращает]

\`\`\`
void
\`\`\`

***

<span id="method_getAllowedType" />

### getAllowedType [#getallowedtype]

\`\`\`
static public getAllowedType(string  type) : string
\`\`\`

##### Краткое содержание [#краткое-содержание-2]

Возвращает описание разрешенного типа ошибки по его ключу.

##### Описание [#описание-1]

Перечень всех доступных типов с их описаниями
задается методом \`getAllowedTypes()\`. Если указанный ключ \`$type\`
отсутствует в списке, будет сгенерирована ошибка типа PHP \`undefined index\`.

##### Свойства: [#свойства-3]

| Название  | Тип    | По умолчанию |
| --------- | ------ | ------------ |
| **$type** | string |              |

##### Возвращает: [#возвращает-1]

\`\`\`
string
\`\`\`

Описание типа ошибки, соответствующее переданному ключу.

\`getAllowedTypes()\`.

***

<span id="method_getAllowedTypes" />

### getAllowedTypes [#getallowedtypes]

\`\`\`
static public getAllowedTypes() : array
\`\`\`

##### Краткое содержание [#краткое-содержание-3]

Возвращает массив доступных типов сообщений с их локализованными описаниями.

##### Описание [#описание-2]

Типы сообщений включают различные уровни, такие как ошибка, информация, предупреждение, и другие.
Также добавляются сокращенные обозначения для некоторых ключевых типов, таких как "warn", "crit" или
"emergency".
Локализация осуществляется с использованием функции [\\_\\_](../index#function___).

##### Возвращает: [#возвращает-2]

\`\`\`
array
\`\`\`

Ассоциативный массив, где ключи — идентификаторы типов сообщений, а значения — локализованные
описания.

***

<span id="method_getLogs" />

### getLogs [#getlogs]

\`\`\`
static public getLogs() : bool
\`\`\`

##### Краткое содержание [#краткое-содержание-4]

Получает текущий статус логирования.

##### Описание [#описание-3]

Метод инициализирует необходимые настройки через \`self::init()\`, если они еще не были установлены,
и устанавливает значение \`self::$logs\`, если оно не было задано. Значение берется из настроек,
полученных через \`DataManager::getConfig("maharder")\`.

##### Ошибки: [#ошибки-1]

| Тип                               | Описание                                                                                           |
| --------------------------------- | -------------------------------------------------------------------------------------------------- |
| \\RuntimeException\\|\\JsonException | Если \`DataManager::getConfig()\` выбрасывает исключение (например, при ошибке чтения конфигурации). |
| \\Exception                        | Если возникнут ошибки во время инициализации (в методе init()).                                    |

##### Возвращает: [#возвращает-3]

\`\`\`
bool
\`\`\`

Возвращает текущее состояние логирования.

***

<span id="method_getTelegramBot" />

### getTelegramBot [#gettelegrambot]

\`\`\`
static public getTelegramBot() : string
\`\`\`

##### Краткое содержание [#краткое-содержание-5]

Возвращает идентификатор Telegram-бота.

##### Описание [#описание-4]

Метод возвращает текущее значение идентификатора Telegram-бота,
хранящегося в статическом свойстве \`$telegram_bot\`.

##### Ошибки: [#ошибки-2]

| Тип               | Описание                                                     |
| ----------------- | ------------------------------------------------------------ |
| \\RuntimeException | Если идентификатор Telegram-бота не установлен (равен null). |

##### Возвращает: [#возвращает-4]

\`\`\`
string
\`\`\`

Идентификатор Telegram-бота.

***

<span id="method_getTelegramChannel" />

### getTelegramChannel [#gettelegramchannel]

\`\`\`
static public getTelegramChannel() : int|string|null
\`\`\`

##### Краткое содержание [#краткое-содержание-6]

Возвращает идентификатор Telegram-канала.

##### Описание [#описание-5]

Метод возвращает идентификатор канала в различных форматах:

* Если канал настроен, он может быть представлен числом (целочисленным идентификатором) или строкой (например, в виде
  alias).
* Если канал отсутствует, метод вернет null.

##### Возвращает: [#возвращает-5]

\`\`\`
int|string|null
\`\`\`

Возвращает идентификатор Telegram-канала в виде числа, строки или null, если канал не
настроен.

***

<span id="method_getTelegramType" />

### getTelegramType [#gettelegramtype]

\`\`\`
static public getTelegramType() : string
\`\`\`

##### Краткое содержание [#краткое-содержание-7]

Возвращает тип Telegram в зависимости от установленного значения.

##### Описание [#описание-6]

Если свойство \`$telegram_type\` не задано (null или пустое значение),
возвращает значение по умолчанию \`"all"\`.

##### Возвращает: [#возвращает-6]

\`\`\`
string
\`\`\`

Тип Telegram. Может возвращать либо значение \`$telegram_type\`,
либо строку \`"all"\` в качестве значения по умолчанию.

***

<span id="method_init" />

### init [#init]

\`\`\`
static public init() : void
\`\`\`

##### Краткое содержание [#краткое-содержание-8]

Инициализирует настройки для логирования. Функция настраивает параметры телеграм-логирования, базы данных для
логов и другие параметры, используя данные конфигурации. Флаг \`initialized\` предотвращает повторную
инициализацию.

##### Ошибки: [#ошибки-3]

| Тип            | Описание                                                                                                                                    |
| -------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| \\JsonException | Исключение выбрасывается, если манипуляции с JSON в процессе получения данных конфигурации или установки параметров окажутся некорректными. |

##### Возвращает: [#возвращает-7]

\`\`\`
void
\`\`\`

***

<span id="method_isDbLogs" />

### isDbLogs [#isdblogs]

\`\`\`
static public isDbLogs() : bool
\`\`\`

##### Краткое содержание [#краткое-содержание-9]

Проверяет, включены ли логирования в базе данных.

##### Описание [#описание-7]

Если состояние логов в базе данных еще не было установлено, метод загружает
конфигурацию из DataManager и устанавливает значение на основании
параметра \`logs_db\` в конфигурации. Если параметр отсутствует,
логирование в БД считается выключенным по умолчанию.

##### Ошибки: [#ошибки-4]

| Тип                               | Описание                                                                                 |
| --------------------------------- | ---------------------------------------------------------------------------------------- |
| \\RuntimeException\\|\\JsonException | Если конфигурация приложения не может быть получена (зависит от реализации DataManager). |

##### Возвращает: [#возвращает-8]

\`\`\`
bool
\`\`\`

Возвращает \`true\`, если логирование в базе данных включено, иначе \`false\`.

***

<span id="method_isTelegramSend" />

### isTelegramSend [#istelegramsend]

\`\`\`
static public isTelegramSend() : bool
\`\`\`

##### Краткое содержание [#краткое-содержание-10]

Проверяет, включена ли отправка логов через Telegram.

##### Описание [#описание-8]

Если флаг \`$telegram_send\` еще не установлен (\`false\`) и есть логи (определяется методом \`getLogs()\`),
функция загружает конфигурацию из \`DataManager\` и устанавливает флаг на основе значения опции \`logs_telegram\`.
В противном случае отправка через Telegram отключается.

##### Ошибки: [#ошибки-5]

| Тип                               | Описание                                                                      |
| --------------------------------- | ----------------------------------------------------------------------------- |
| \\RuntimeException\\|\\JsonException | Если возникает ошибка при загрузке или обработке конфигурации из DataManager. |

##### Возвращает: [#возвращает-9]

\`\`\`
bool
\`\`\`

Возвращает \`true\`, если отправка логов через Telegram включена, или \`false\`, если отключена.

***

<span id="method_setDbLogs" />

### setDbLogs [#setdblogs]

\`\`\`
static public setDbLogs(bool  db_logs) : void
\`\`\`

##### Краткое содержание [#краткое-содержание-11]

Устанавливает логирование работы с базой данных.

##### Свойства: [#свойства-4]

| Название      | Тип  | По умолчанию |
| ------------- | ---- | ------------ |
| **$db\\_logs** | bool |              |

##### Возвращает: [#возвращает-10]

\`\`\`
void
\`\`\`

***

<span id="method_setLogs" />

### setLogs [#setlogs]

\`\`\`
static public setLogs(bool|int  logs) : void
\`\`\`

##### Краткое содержание [#краткое-содержание-12]

Устанавливает состояние логирования.

##### Описание [#описание-9]

Если передано значение \`true\`, включается логирование. Если передано значение \`false\`, логирование выключается.
Также поддерживается передача целочисленного значения, которое будет приведено к булевому типу.

##### Смотри так-же: [#смотри-так-же]

* [\\self::init()](#method_init)

##### Свойства: [#свойства-5]

| Название  | Тип       | По умолчанию |
| --------- | --------- | ------------ |
| **$logs** | bool\\|int |              |

##### Ошибки: [#ошибки-6]

| Тип        | Описание                                                        |
| ---------- | --------------------------------------------------------------- |
| \\Exception | Если возникнут ошибки во время инициализации (в методе init()). |

##### Возвращает: [#возвращает-11]

\`\`\`
void
\`\`\`

Функция не возвращает значения.

***

<span id="method_setTelegramBot" />

### setTelegramBot [#settelegrambot]

\`\`\`
static public setTelegramBot(string|null  telegram_bot) : void
\`\`\`

##### Краткое содержание [#краткое-содержание-13]

Устанавливает идентификатор или токен Telegram-бота.

##### Описание [#описание-10]

Метод позволяет задать идентификатор или токен используемого Telegram-бота,
если он используется в приложении. Для удаления текущего значения передайте \`null\`.

##### Свойства: [#свойства-6]

| Название           | Тип          | По умолчанию |
| ------------------ | ------------ | ------------ |
| **$telegram\\_bot** | string\\|null |              |

##### Возвращает: [#возвращает-12]

\`\`\`
void
\`\`\`

***

<span id="method_setTelegramChannel" />

### setTelegramChannel [#settelegramchannel]

\`\`\`
static public setTelegramChannel(int|string|null  telegram_channel) : void
\`\`\`

##### Краткое содержание [#краткое-содержание-14]

Устанавливает идентификатор или имя канала Telegram.

##### Описание [#описание-11]

Эта функция задаёт значение статического свойства \`$telegram_channel\`, позволяя указать идентификатор
канала, имя или установить значение в \`null\`, чтобы сбросить текущее состояние.

##### Свойства: [#свойства-7]

| Название               | Тип                   | По умолчанию |
| ---------------------- | --------------------- | ------------ |
| **$telegram\\_channel** | int \\| string \\| null |              |

##### Возвращает: [#возвращает-13]

\`\`\`
void
\`\`\`

***

<span id="method_setTelegramSend" />

### setTelegramSend [#settelegramsend]

\`\`\`
static public setTelegramSend(bool  telegram_send = false) : void
\`\`\`

##### Краткое содержание [#краткое-содержание-15]

Устанавливает флаг для отправки сообщений через Telegram.

##### Описание [#описание-12]

Этот метод изменяет состояние статического свойства \`$telegram_send\`,
которое указывает, должны ли сообщения отправляться через Telegram.

##### Свойства: [#свойства-8]

| Название            | Тип  | По умолчанию |
| ------------------- | ---- | ------------ |
| **$telegram\\_send** | bool | false        |

##### Возвращает: [#возвращает-14]

\`\`\`
void
\`\`\`

Метод не возвращает значения.

***

<span id="method_setTelegramType" />

### setTelegramType [#settelegramtype]

\`\`\`
static public setTelegramType(string|null  telegram_type) : void
\`\`\`

##### Краткое содержание [#краткое-содержание-16]

Устанавливает тип Telegram для текущего экземпляра.

##### Свойства: [#свойства-9]

| Название            | Тип          | По умолчанию |
| ------------------- | ------------ | ------------ |
| **$telegram\\_type** | string\\|null |              |

##### Возвращает: [#возвращает-15]

\`\`\`
void
\`\`\`

***

<span id="method_createLogDirectory" />

### createLogDirectory [#createlogdirectory]

\`\`\`
static private createLogDirectory(string  service, string  module, string  path) : bool
\`\`\`

##### Краткое содержание [#краткое-содержание-17]

Создает директорию для логов с учетом указанного сервиса, модуля и пути.

##### Описание [#описание-13]

Функция вызывает метод [DataManager::createDir](./DataManager#method_createDir) для создания директории,
а также дополнительно проверяет существование директории через \`is_dir()\`.

##### Свойства: [#свойства-10]

| Название     | Тип    | По умолчанию |
| ------------ | ------ | ------------ |
| **$service** | string |              |
| **$module**  | string |              |
| **$path**    | string |              |

##### Ошибки: [#ошибки-7]

| Тип        | Описание                                                                                                                                           |
| ---------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| \\Throwable | В случае ошибки при вызове [DataManager::createDir](./DataManager#method_createDir) могут быть выброшены исключения, которые логируются в системе. |

##### Возвращает: [#возвращает-16]

\`\`\`
bool
\`\`\`

Возвращает true, если директория была успешно создана или уже существует;
false, если создание директории завершилось ошибкой.

***

<span id="method_dbLog" />

### dbLog [#dblog]

\`\`\`
static private dbLog(array  message, string  type) : void
\`\`\`

##### Краткое содержание [#краткое-содержание-18]

Логирует сообщение в базу данных, если включены настройки логирования в БД.

##### Описание [#описание-14]

Функция инициализирует настройки логирования, проверяет, включено ли логирование в базу данных,
создает объект лога, форматирует сообщение и сохраняет его в базу данных.

##### Свойства: [#свойства-11]

| Название     | Тип    | По умолчанию |
| ------------ | ------ | ------------ |
| **$message** | array  |              |
| **$type**    | string |              |

##### Ошибки: [#ошибки-8]

| Тип                        | Описание                                                                 |
| -------------------------- | ------------------------------------------------------------------------ |
| \\RuntimeException          | Если не удается сохранить лог в базу данных.                             |
| \\JsonException\\|\\Throwable | При возникновении ошибок в процессе работы с JSON или других исключений. |

##### Возвращает: [#возвращает-17]

\`\`\`
void
\`\`\`

***

<span id="method_fileLog" />

### fileLog [#filelog]

\`\`\`
static private fileLog(string  file, mixed  message, int  level) : void
\`\`\`

##### Краткое содержание [#краткое-содержание-19]

Логирование сообщений в файл.

##### Описание [#описание-15]

Метод записывает переданное сообщение в указанный лог-файл, если включено логирование.
Сообщение предварительно сериализуется перед записью.

##### Свойства: [#свойства-12]

| Название     | Тип    | По умолчанию |
| ------------ | ------ | ------------ |
| **$file**    | string |              |
| **$message** | mixed  |              |
| **$level**   | int    |              |

##### Ошибки: [#ошибки-9]

| Тип            | Описание                                                                                                                                                                                          |
| -------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| \\JsonException | Генерируется, если в процессе инициализации (инициализация через \`self::init()\`) возникает ошибка, связанная с обработкой JSON (например, при работе с конфигурацией \`DataManager::getConfig()\`). |

##### Возвращает: [#возвращает-18]

\`\`\`
void
\`\`\`

Функция ничего не возвращает.

***

<span id="method_formatMessage" />

### formatMessage [#formatmessage]

\`\`\`
static private formatMessage(string|array  message) : string
\`\`\`

##### Краткое содержание [#краткое-содержание-20]

Форматирует сообщение для отображения в виде строки.

##### Описание [#описание-16]

Если сообщение передано в виде массива, функция преобразует его в строку,
где каждый элемент массива будет представлен как отдельная строка,
разделенная тегами \`&lt;br /&gt;\`. В случае, если ключ является строкой, он
будет выделен тегом \`&lt;b&gt;\`. Если сообщение уже является строкой, возвращает
его без изменений.

##### Свойства: [#свойства-13]

| Название     | Тип           | По умолчанию |
| ------------ | ------------- | ------------ |
| **$message** | string\\|array |              |

##### Ошибки: [#ошибки-10]

| Тип                       | Описание                                                                                                                                               |
| ------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| \\InvalidArgumentException | Если входной параметр не является строкой или массивом (сценарий невозможен в данной реализации, но документация указывает на строгие ожидания типов). |

##### Возвращает: [#возвращает-19]

\`\`\`
string
\`\`\`

Возвращает отформатированное сообщение в виде строки. Если
входной параметр — строка, возвращается без изменений,
если массив — объединяется в строку с использованием
тега \`&lt;br /&gt;\`.

***

<span id="method_getErrorNotification" />

### getErrorNotification [#geterrornotification]

\`\`\`
static private getErrorNotification(string  service, string  functionName, string  type, string  dateTime, mixed  message) : string
\`\`\`

##### Краткое содержание [#краткое-содержание-21]

Генерирует HTML-уведомление об ошибке для указанного модуля и функции.

##### Описание [#описание-17]

Формирует содержимое уведомления с информацией о модуле, функции, типе ошибки, дате и времени, а также
сообщением об ошибке.

##### Свойства: [#свойства-14]

| Название          | Тип    | По умолчанию |
| ----------------- | ------ | ------------ |
| **$service**      | string |              |
| **$functionName** | string |              |
| **$type**         | string |              |
| **$dateTime**     | string |              |
| **$message**      | mixed  |              |

##### Возвращает: [#возвращает-20]

\`\`\`
string
\`\`\`

Возвращает сгенерированное HTML-уведомление с детализированной информацией об ошибке.

***

<span id="method_telegramLog" />

### telegramLog [#telegramlog]

\`\`\`
static private telegramLog(array  message, string  type) : void
\`\`\`

##### Краткое содержание [#краткое-содержание-22]

Отправляет лог-сообщение в Telegram.

##### Описание [#описание-18]

Функция формирует и отправляет сообщение с логом в указанный Telegram-чат,
проверяя настройки и типы логов, допустимые для отправки.
Если отправка не удалась, сообщение об ошибке записывается в лог приложения.

##### Свойства: [#свойства-15]

| Название     | Тип    | По умолчанию |
| ------------ | ------ | ------------ |
| **$message** | array  |              |
| **$type**    | string |              |

##### Ошибки: [#ошибки-11]

| Тип                        | Описание                                                                 |
| -------------------------- | ------------------------------------------------------------------------ |
| \\RuntimeException          | В случае ошибки HTTP-запроса или сбоя при работе с Telegram API.         |
| \\JsonException\\|\\Throwable | При возникновении ошибок в процессе работы с JSON или других исключений. |

##### Возвращает: [#возвращает-21]

\`\`\`
void
\`\`\`

Функция ничего не возвращает.
`,o={contents:[{heading:`краткое-содержание`,content:`Абстрактный класс для управления процессом логирования. Класс включает в себя базовый функционал для записи логов
в файлы, базу данных и отправки уведомлений в Telegram.`},{heading:`свойства`,content:`protected $db\\_logs`},{heading:`свойства`,content:`protected $initialized`},{heading:`свойства`,content:`protected $logs`},{heading:`свойства`,content:`protected $telegram\\_bot`},{heading:`свойства`,content:`protected $telegram\\_channel`},{heading:`свойства`,content:`protected $telegram\\_send`},{heading:`свойства`,content:`protected $telegram\\_type`},{heading:`методы`,content:`public generateLog()`},{heading:`методы`,content:`public getAllowedType()`},{heading:`методы`,content:`public getAllowedTypes()`},{heading:`методы`,content:`public getLogs()`},{heading:`методы`,content:`public getTelegramBot()`},{heading:`методы`,content:`public getTelegramChannel()`},{heading:`методы`,content:`public getTelegramType()`},{heading:`методы`,content:`public init()`},{heading:`методы`,content:`public isDbLogs()`},{heading:`методы`,content:`public isTelegramSend()`},{heading:`методы`,content:`public setDbLogs()`},{heading:`методы`,content:`public setLogs()`},{heading:`методы`,content:`public setTelegramBot()`},{heading:`методы`,content:`public setTelegramChannel()`},{heading:`методы`,content:`public setTelegramSend()`},{heading:`методы`,content:`public setTelegramType()`},{heading:`методы`,content:`private createLogDirectory()`},{heading:`методы`,content:`private dbLog()`},{heading:`методы`,content:`private fileLog()`},{heading:`методы`,content:`private formatMessage()`},{heading:`методы`,content:`private getErrorNotification()`},{heading:`методы`,content:`private telegramLog()`},{heading:`подробности`,content:`Путь: engine/inc/maharder/\\_includes/classes/LogGenerator.php`},{heading:`protected-db_logs--bool`,content:`**Краткое содержание**`},{heading:`protected-db_logs--bool`,content:`Сохранять логи в базе данных`},{heading:`protected-db_logs--bool`,content:`**Тип:** Логические значения`},{heading:`protected-initialized--bool`,content:`**Краткое содержание**`},{heading:`protected-initialized--bool`,content:`Проверяет, сформирован класс или нет`},{heading:`protected-initialized--bool`,content:`**Тип:** Логические значения`},{heading:`tags`,content:`Тэг`},{heading:`tags`,content:`Версия`},{heading:`tags`,content:`Описание`},{heading:`tags`,content:`since`},{heading:`tags`,content:`173.3.0`},{heading:`protected-logs--bool`,content:`**Краткое содержание**`},{heading:`protected-logs--bool`,content:`Регулятор логирования системы`},{heading:`protected-logs--bool`,content:`**Тип:** Логические значения`},{heading:`protected-telegram_bot--string`,content:`**Краткое содержание**`},{heading:`protected-telegram_bot--string`,content:`API телеграм бота, который будет отправлять логи`},{heading:`protected-telegram_bot--string`,content:`**Тип:** Текст или null`},{heading:`protected-telegram_channel--stringintnull`,content:`**Краткое содержание**`},{heading:`protected-telegram_channel--stringintnull`,content:`ID канала, куда будут отправляться логи`},{heading:`protected-telegram_channel--stringintnull`,content:`**Тип:** Текст / целое число / null`},{heading:`protected-telegram_send--bool`,content:`**Краткое содержание**`},{heading:`protected-telegram_send--bool`,content:`Регулятор отправки логов в телеграм канал
По умолчанию - выключен`},{heading:`protected-telegram_send--bool`,content:`**Тип:** Логические значения`},{heading:`protected-telegram_type--string`,content:`**Краткое содержание**`},{heading:`protected-telegram_type--string`,content:`Тип логов, которые будут отправлены в телеграм`},{heading:`protected-telegram_type--string`,content:`**Тип:** Текст или null`},{heading:`protected-telegram_type--string`,content:`**Подробности:**`},{heading:`краткое-содержание-1`,content:`Генерация лог-файлов при возникновении ошибки или другой значимой ситуации в процессе работы системы.`},{heading:`описание`,content:`Данная функция создаёт лог-файлы в зависимости от указанного типа ошибки, хранит подробную информацию о сервисе,
функции, дате/времени и сообщении. Помимо записи в файл, опционально отправляются уведомления в Telegram и
сохраняются логи в базу данных.`},{heading:`свойства-2`,content:`Название`},{heading:`свойства-2`,content:`Тип`},{heading:`свойства-2`,content:`По умолчанию`},{heading:`свойства-2`,content:`**$service**`},{heading:`свойства-2`,content:`string`},{heading:`свойства-2`,content:`**$functionName**`},{heading:`свойства-2`,content:`string`},{heading:`свойства-2`,content:`**$message**`},{heading:`свойства-2`,content:`mixed`},{heading:`свойства-2`,content:`**$type**`},{heading:`свойства-2`,content:`string`},{heading:`свойства-2`,content:`"error"`},{heading:`ошибки`,content:`Тип`},{heading:`ошибки`,content:`Описание`},{heading:`ошибки`,content:`\\JsonException\\|\\Throwable`},{heading:`ошибки`,content:`Исключение, связанное с ошибками в JSON-конверсии (может быть выброшено при выполнении Telegram-лога).`},{heading:`краткое-содержание-2`,content:`Возвращает описание разрешенного типа ошибки по его ключу.`},{heading:`описание-1`,content:"Перечень всех доступных типов с их описаниями\nзадается методом `getAllowedTypes()`. Если указанный ключ `$type`\nотсутствует в списке, будет сгенерирована ошибка типа PHP `undefined index`."},{heading:`свойства-3`,content:`Название`},{heading:`свойства-3`,content:`Тип`},{heading:`свойства-3`,content:`По умолчанию`},{heading:`свойства-3`,content:`**$type**`},{heading:`свойства-3`,content:`string`},{heading:`возвращает-1`,content:`Описание типа ошибки, соответствующее переданному ключу.`},{heading:`возвращает-1`,content:"`getAllowedTypes()`."},{heading:`краткое-содержание-3`,content:`Возвращает массив доступных типов сообщений с их локализованными описаниями.`},{heading:`описание-2`,content:`Типы сообщений включают различные уровни, такие как ошибка, информация, предупреждение, и другие.
Также добавляются сокращенные обозначения для некоторых ключевых типов, таких как "warn", "crit" или
"emergency".
Локализация осуществляется с использованием функции \\_\\_.`},{heading:`возвращает-2`,content:`Ассоциативный массив, где ключи — идентификаторы типов сообщений, а значения — локализованные
описания.`},{heading:`краткое-содержание-4`,content:`Получает текущий статус логирования.`},{heading:`описание-3`,content:'Метод инициализирует необходимые настройки через `self::init()`, если они еще не были установлены,\nи устанавливает значение `self::$logs`, если оно не было задано. Значение берется из настроек,\nполученных через `DataManager::getConfig("maharder")`.'},{heading:`ошибки-1`,content:`Тип`},{heading:`ошибки-1`,content:`Описание`},{heading:`ошибки-1`,content:`\\RuntimeException\\|\\JsonException`},{heading:`ошибки-1`,content:"Если `DataManager::getConfig()` выбрасывает исключение (например, при ошибке чтения конфигурации)."},{heading:`ошибки-1`,content:`\\Exception`},{heading:`ошибки-1`,content:`Если возникнут ошибки во время инициализации (в методе init()).`},{heading:`возвращает-3`,content:`Возвращает текущее состояние логирования.`},{heading:`краткое-содержание-5`,content:`Возвращает идентификатор Telegram-бота.`},{heading:`описание-4`,content:"Метод возвращает текущее значение идентификатора Telegram-бота,\nхранящегося в статическом свойстве `$telegram_bot`."},{heading:`ошибки-2`,content:`Тип`},{heading:`ошибки-2`,content:`Описание`},{heading:`ошибки-2`,content:`\\RuntimeException`},{heading:`ошибки-2`,content:`Если идентификатор Telegram-бота не установлен (равен null).`},{heading:`возвращает-4`,content:`Идентификатор Telegram-бота.`},{heading:`краткое-содержание-6`,content:`Возвращает идентификатор Telegram-канала.`},{heading:`описание-5`,content:`Метод возвращает идентификатор канала в различных форматах:`},{heading:`описание-5`,content:`Если канал настроен, он может быть представлен числом (целочисленным идентификатором) или строкой (например, в виде
alias).`},{heading:`описание-5`,content:`Если канал отсутствует, метод вернет null.`},{heading:`возвращает-5`,content:`Возвращает идентификатор Telegram-канала в виде числа, строки или null, если канал не
настроен.`},{heading:`краткое-содержание-7`,content:`Возвращает тип Telegram в зависимости от установленного значения.`},{heading:`описание-6`,content:'Если свойство `$telegram_type` не задано (null или пустое значение),\nвозвращает значение по умолчанию `"all"`.'},{heading:`возвращает-6`,content:'Тип Telegram. Может возвращать либо значение `$telegram_type`,\nлибо строку `"all"` в качестве значения по умолчанию.'},{heading:`краткое-содержание-8`,content:`Инициализирует настройки для логирования. Функция настраивает параметры телеграм-логирования, базы данных для
логов и другие параметры, используя данные конфигурации. Флаг \`initialized\` предотвращает повторную
инициализацию.`},{heading:`ошибки-3`,content:`Тип`},{heading:`ошибки-3`,content:`Описание`},{heading:`ошибки-3`,content:`\\JsonException`},{heading:`ошибки-3`,content:`Исключение выбрасывается, если манипуляции с JSON в процессе получения данных конфигурации или установки параметров окажутся некорректными.`},{heading:`краткое-содержание-9`,content:`Проверяет, включены ли логирования в базе данных.`},{heading:`описание-7`,content:`Если состояние логов в базе данных еще не было установлено, метод загружает
конфигурацию из DataManager и устанавливает значение на основании
параметра \`logs_db\` в конфигурации. Если параметр отсутствует,
логирование в БД считается выключенным по умолчанию.`},{heading:`ошибки-4`,content:`Тип`},{heading:`ошибки-4`,content:`Описание`},{heading:`ошибки-4`,content:`\\RuntimeException\\|\\JsonException`},{heading:`ошибки-4`,content:`Если конфигурация приложения не может быть получена (зависит от реализации DataManager).`},{heading:`возвращает-8`,content:"Возвращает `true`, если логирование в базе данных включено, иначе `false`."},{heading:`краткое-содержание-10`,content:`Проверяет, включена ли отправка логов через Telegram.`},{heading:`описание-8`,content:"Если флаг `$telegram_send` еще не установлен (`false`) и есть логи (определяется методом `getLogs()`),\nфункция загружает конфигурацию из `DataManager` и устанавливает флаг на основе значения опции `logs_telegram`.\nВ противном случае отправка через Telegram отключается."},{heading:`ошибки-5`,content:`Тип`},{heading:`ошибки-5`,content:`Описание`},{heading:`ошибки-5`,content:`\\RuntimeException\\|\\JsonException`},{heading:`ошибки-5`,content:`Если возникает ошибка при загрузке или обработке конфигурации из DataManager.`},{heading:`возвращает-9`,content:"Возвращает `true`, если отправка логов через Telegram включена, или `false`, если отключена."},{heading:`краткое-содержание-11`,content:`Устанавливает логирование работы с базой данных.`},{heading:`свойства-4`,content:`Название`},{heading:`свойства-4`,content:`Тип`},{heading:`свойства-4`,content:`По умолчанию`},{heading:`свойства-4`,content:`**$db\\_logs**`},{heading:`свойства-4`,content:`bool`},{heading:`краткое-содержание-12`,content:`Устанавливает состояние логирования.`},{heading:`описание-9`,content:"Если передано значение `true`, включается логирование. Если передано значение `false`, логирование выключается.\nТакже поддерживается передача целочисленного значения, которое будет приведено к булевому типу."},{heading:`смотри-так-же`,content:`\\self::init()`},{heading:`свойства-5`,content:`Название`},{heading:`свойства-5`,content:`Тип`},{heading:`свойства-5`,content:`По умолчанию`},{heading:`свойства-5`,content:`**$logs**`},{heading:`свойства-5`,content:`bool\\|int`},{heading:`ошибки-6`,content:`Тип`},{heading:`ошибки-6`,content:`Описание`},{heading:`ошибки-6`,content:`\\Exception`},{heading:`ошибки-6`,content:`Если возникнут ошибки во время инициализации (в методе init()).`},{heading:`возвращает-11`,content:`Функция не возвращает значения.`},{heading:`краткое-содержание-13`,content:`Устанавливает идентификатор или токен Telegram-бота.`},{heading:`описание-10`,content:"Метод позволяет задать идентификатор или токен используемого Telegram-бота,\nесли он используется в приложении. Для удаления текущего значения передайте `null`."},{heading:`свойства-6`,content:`Название`},{heading:`свойства-6`,content:`Тип`},{heading:`свойства-6`,content:`По умолчанию`},{heading:`свойства-6`,content:`**$telegram\\_bot**`},{heading:`свойства-6`,content:`string\\|null`},{heading:`краткое-содержание-14`,content:`Устанавливает идентификатор или имя канала Telegram.`},{heading:`описание-11`,content:"Эта функция задаёт значение статического свойства `$telegram_channel`, позволяя указать идентификатор\nканала, имя или установить значение в `null`, чтобы сбросить текущее состояние."},{heading:`свойства-7`,content:`Название`},{heading:`свойства-7`,content:`Тип`},{heading:`свойства-7`,content:`По умолчанию`},{heading:`свойства-7`,content:`**$telegram\\_channel**`},{heading:`свойства-7`,content:`int \\| string \\| null`},{heading:`краткое-содержание-15`,content:`Устанавливает флаг для отправки сообщений через Telegram.`},{heading:`описание-12`,content:"Этот метод изменяет состояние статического свойства `$telegram_send`,\nкоторое указывает, должны ли сообщения отправляться через Telegram."},{heading:`свойства-8`,content:`Название`},{heading:`свойства-8`,content:`Тип`},{heading:`свойства-8`,content:`По умолчанию`},{heading:`свойства-8`,content:`**$telegram\\_send**`},{heading:`свойства-8`,content:`bool`},{heading:`свойства-8`,content:`false`},{heading:`возвращает-14`,content:`Метод не возвращает значения.`},{heading:`краткое-содержание-16`,content:`Устанавливает тип Telegram для текущего экземпляра.`},{heading:`свойства-9`,content:`Название`},{heading:`свойства-9`,content:`Тип`},{heading:`свойства-9`,content:`По умолчанию`},{heading:`свойства-9`,content:`**$telegram\\_type**`},{heading:`свойства-9`,content:`string\\|null`},{heading:`краткое-содержание-17`,content:`Создает директорию для логов с учетом указанного сервиса, модуля и пути.`},{heading:`описание-13`,content:"Функция вызывает метод DataManager::createDir для создания директории,\nа также дополнительно проверяет существование директории через `is_dir()`."},{heading:`свойства-10`,content:`Название`},{heading:`свойства-10`,content:`Тип`},{heading:`свойства-10`,content:`По умолчанию`},{heading:`свойства-10`,content:`**$service**`},{heading:`свойства-10`,content:`string`},{heading:`свойства-10`,content:`**$module**`},{heading:`свойства-10`,content:`string`},{heading:`свойства-10`,content:`**$path**`},{heading:`свойства-10`,content:`string`},{heading:`ошибки-7`,content:`Тип`},{heading:`ошибки-7`,content:`Описание`},{heading:`ошибки-7`,content:`\\Throwable`},{heading:`ошибки-7`,content:`В случае ошибки при вызове DataManager::createDir могут быть выброшены исключения, которые логируются в системе.`},{heading:`возвращает-16`,content:`Возвращает true, если директория была успешно создана или уже существует;
false, если создание директории завершилось ошибкой.`},{heading:`краткое-содержание-18`,content:`Логирует сообщение в базу данных, если включены настройки логирования в БД.`},{heading:`описание-14`,content:`Функция инициализирует настройки логирования, проверяет, включено ли логирование в базу данных,
создает объект лога, форматирует сообщение и сохраняет его в базу данных.`},{heading:`свойства-11`,content:`Название`},{heading:`свойства-11`,content:`Тип`},{heading:`свойства-11`,content:`По умолчанию`},{heading:`свойства-11`,content:`**$message**`},{heading:`свойства-11`,content:`array`},{heading:`свойства-11`,content:`**$type**`},{heading:`свойства-11`,content:`string`},{heading:`ошибки-8`,content:`Тип`},{heading:`ошибки-8`,content:`Описание`},{heading:`ошибки-8`,content:`\\RuntimeException`},{heading:`ошибки-8`,content:`Если не удается сохранить лог в базу данных.`},{heading:`ошибки-8`,content:`\\JsonException\\|\\Throwable`},{heading:`ошибки-8`,content:`При возникновении ошибок в процессе работы с JSON или других исключений.`},{heading:`краткое-содержание-19`,content:`Логирование сообщений в файл.`},{heading:`описание-15`,content:`Метод записывает переданное сообщение в указанный лог-файл, если включено логирование.
Сообщение предварительно сериализуется перед записью.`},{heading:`свойства-12`,content:`Название`},{heading:`свойства-12`,content:`Тип`},{heading:`свойства-12`,content:`По умолчанию`},{heading:`свойства-12`,content:`**$file**`},{heading:`свойства-12`,content:`string`},{heading:`свойства-12`,content:`**$message**`},{heading:`свойства-12`,content:`mixed`},{heading:`свойства-12`,content:`**$level**`},{heading:`свойства-12`,content:`int`},{heading:`ошибки-9`,content:`Тип`},{heading:`ошибки-9`,content:`Описание`},{heading:`ошибки-9`,content:`\\JsonException`},{heading:`ошибки-9`,content:"Генерируется, если в процессе инициализации (инициализация через `self::init()`) возникает ошибка, связанная с обработкой JSON (например, при работе с конфигурацией `DataManager::getConfig()`)."},{heading:`возвращает-18`,content:`Функция ничего не возвращает.`},{heading:`краткое-содержание-20`,content:`Форматирует сообщение для отображения в виде строки.`},{heading:`описание-16`,content:`Если сообщение передано в виде массива, функция преобразует его в строку,
где каждый элемент массива будет представлен как отдельная строка,
разделенная тегами \`&lt;br /&gt;\`. В случае, если ключ является строкой, он
будет выделен тегом \`&lt;b&gt;\`. Если сообщение уже является строкой, возвращает
его без изменений.`},{heading:`свойства-13`,content:`Название`},{heading:`свойства-13`,content:`Тип`},{heading:`свойства-13`,content:`По умолчанию`},{heading:`свойства-13`,content:`**$message**`},{heading:`свойства-13`,content:`string\\|array`},{heading:`ошибки-10`,content:`Тип`},{heading:`ошибки-10`,content:`Описание`},{heading:`ошибки-10`,content:`\\InvalidArgumentException`},{heading:`ошибки-10`,content:`Если входной параметр не является строкой или массивом (сценарий невозможен в данной реализации, но документация указывает на строгие ожидания типов).`},{heading:`возвращает-19`,content:`Возвращает отформатированное сообщение в виде строки. Если
входной параметр — строка, возвращается без изменений,
если массив — объединяется в строку с использованием
тега \`&lt;br /&gt;\`.`},{heading:`краткое-содержание-21`,content:`Генерирует HTML-уведомление об ошибке для указанного модуля и функции.`},{heading:`описание-17`,content:`Формирует содержимое уведомления с информацией о модуле, функции, типе ошибки, дате и времени, а также
сообщением об ошибке.`},{heading:`свойства-14`,content:`Название`},{heading:`свойства-14`,content:`Тип`},{heading:`свойства-14`,content:`По умолчанию`},{heading:`свойства-14`,content:`**$service**`},{heading:`свойства-14`,content:`string`},{heading:`свойства-14`,content:`**$functionName**`},{heading:`свойства-14`,content:`string`},{heading:`свойства-14`,content:`**$type**`},{heading:`свойства-14`,content:`string`},{heading:`свойства-14`,content:`**$dateTime**`},{heading:`свойства-14`,content:`string`},{heading:`свойства-14`,content:`**$message**`},{heading:`свойства-14`,content:`mixed`},{heading:`возвращает-20`,content:`Возвращает сгенерированное HTML-уведомление с детализированной информацией об ошибке.`},{heading:`краткое-содержание-22`,content:`Отправляет лог-сообщение в Telegram.`},{heading:`описание-18`,content:`Функция формирует и отправляет сообщение с логом в указанный Telegram-чат,
проверяя настройки и типы логов, допустимые для отправки.
Если отправка не удалась, сообщение об ошибке записывается в лог приложения.`},{heading:`свойства-15`,content:`Название`},{heading:`свойства-15`,content:`Тип`},{heading:`свойства-15`,content:`По умолчанию`},{heading:`свойства-15`,content:`**$message**`},{heading:`свойства-15`,content:`array`},{heading:`свойства-15`,content:`**$type**`},{heading:`свойства-15`,content:`string`},{heading:`ошибки-11`,content:`Тип`},{heading:`ошибки-11`,content:`Описание`},{heading:`ошибки-11`,content:`\\RuntimeException`},{heading:`ошибки-11`,content:`В случае ошибки HTTP-запроса или сбоя при работе с Telegram API.`},{heading:`ошибки-11`,content:`\\JsonException\\|\\Throwable`},{heading:`ошибки-11`,content:`При возникновении ошибок в процессе работы с JSON или других исключений.`},{heading:`возвращает-21`,content:`Функция ничего не возвращает.`}],headings:[{id:`краткое-содержание`,content:`Краткое содержание:`},{id:`свойства`,content:`Свойства`},{id:`методы`,content:`Методы`},{id:`подробности`,content:`Подробности`},{id:`свойства-1`,content:`Свойства`},{id:`protected-db_logs--bool`,content:`protected $db_logs : bool`},{id:`protected-initialized--bool`,content:`protected $initialized : bool`},{id:`tags`,content:`Tags`},{id:`protected-logs--bool`,content:`protected $logs : bool`},{id:`protected-telegram_bot--string`,content:`protected $telegram_bot : ?string`},{id:`protected-telegram_channel--stringintnull`,content:`protected $telegram_channel : string|int|null`},{id:`protected-telegram_send--bool`,content:`protected $telegram_send : bool`},{id:`protected-telegram_type--string`,content:`protected $telegram_type : ?string`},{id:`методы-1`,content:`Методы`},{id:`generatelog`,content:`generateLog`},{id:`краткое-содержание-1`,content:`Краткое содержание`},{id:`описание`,content:`Описание`},{id:`свойства-2`,content:`Свойства:`},{id:`ошибки`,content:`Ошибки:`},{id:`возвращает`,content:`Возвращает:`},{id:`getallowedtype`,content:`getAllowedType`},{id:`краткое-содержание-2`,content:`Краткое содержание`},{id:`описание-1`,content:`Описание`},{id:`свойства-3`,content:`Свойства:`},{id:`возвращает-1`,content:`Возвращает:`},{id:`getallowedtypes`,content:`getAllowedTypes`},{id:`краткое-содержание-3`,content:`Краткое содержание`},{id:`описание-2`,content:`Описание`},{id:`возвращает-2`,content:`Возвращает:`},{id:`getlogs`,content:`getLogs`},{id:`краткое-содержание-4`,content:`Краткое содержание`},{id:`описание-3`,content:`Описание`},{id:`ошибки-1`,content:`Ошибки:`},{id:`возвращает-3`,content:`Возвращает:`},{id:`gettelegrambot`,content:`getTelegramBot`},{id:`краткое-содержание-5`,content:`Краткое содержание`},{id:`описание-4`,content:`Описание`},{id:`ошибки-2`,content:`Ошибки:`},{id:`возвращает-4`,content:`Возвращает:`},{id:`gettelegramchannel`,content:`getTelegramChannel`},{id:`краткое-содержание-6`,content:`Краткое содержание`},{id:`описание-5`,content:`Описание`},{id:`возвращает-5`,content:`Возвращает:`},{id:`gettelegramtype`,content:`getTelegramType`},{id:`краткое-содержание-7`,content:`Краткое содержание`},{id:`описание-6`,content:`Описание`},{id:`возвращает-6`,content:`Возвращает:`},{id:`init`,content:`init`},{id:`краткое-содержание-8`,content:`Краткое содержание`},{id:`ошибки-3`,content:`Ошибки:`},{id:`возвращает-7`,content:`Возвращает:`},{id:`isdblogs`,content:`isDbLogs`},{id:`краткое-содержание-9`,content:`Краткое содержание`},{id:`описание-7`,content:`Описание`},{id:`ошибки-4`,content:`Ошибки:`},{id:`возвращает-8`,content:`Возвращает:`},{id:`istelegramsend`,content:`isTelegramSend`},{id:`краткое-содержание-10`,content:`Краткое содержание`},{id:`описание-8`,content:`Описание`},{id:`ошибки-5`,content:`Ошибки:`},{id:`возвращает-9`,content:`Возвращает:`},{id:`setdblogs`,content:`setDbLogs`},{id:`краткое-содержание-11`,content:`Краткое содержание`},{id:`свойства-4`,content:`Свойства:`},{id:`возвращает-10`,content:`Возвращает:`},{id:`setlogs`,content:`setLogs`},{id:`краткое-содержание-12`,content:`Краткое содержание`},{id:`описание-9`,content:`Описание`},{id:`смотри-так-же`,content:`Смотри так-же:`},{id:`свойства-5`,content:`Свойства:`},{id:`ошибки-6`,content:`Ошибки:`},{id:`возвращает-11`,content:`Возвращает:`},{id:`settelegrambot`,content:`setTelegramBot`},{id:`краткое-содержание-13`,content:`Краткое содержание`},{id:`описание-10`,content:`Описание`},{id:`свойства-6`,content:`Свойства:`},{id:`возвращает-12`,content:`Возвращает:`},{id:`settelegramchannel`,content:`setTelegramChannel`},{id:`краткое-содержание-14`,content:`Краткое содержание`},{id:`описание-11`,content:`Описание`},{id:`свойства-7`,content:`Свойства:`},{id:`возвращает-13`,content:`Возвращает:`},{id:`settelegramsend`,content:`setTelegramSend`},{id:`краткое-содержание-15`,content:`Краткое содержание`},{id:`описание-12`,content:`Описание`},{id:`свойства-8`,content:`Свойства:`},{id:`возвращает-14`,content:`Возвращает:`},{id:`settelegramtype`,content:`setTelegramType`},{id:`краткое-содержание-16`,content:`Краткое содержание`},{id:`свойства-9`,content:`Свойства:`},{id:`возвращает-15`,content:`Возвращает:`},{id:`createlogdirectory`,content:`createLogDirectory`},{id:`краткое-содержание-17`,content:`Краткое содержание`},{id:`описание-13`,content:`Описание`},{id:`свойства-10`,content:`Свойства:`},{id:`ошибки-7`,content:`Ошибки:`},{id:`возвращает-16`,content:`Возвращает:`},{id:`dblog`,content:`dbLog`},{id:`краткое-содержание-18`,content:`Краткое содержание`},{id:`описание-14`,content:`Описание`},{id:`свойства-11`,content:`Свойства:`},{id:`ошибки-8`,content:`Ошибки:`},{id:`возвращает-17`,content:`Возвращает:`},{id:`filelog`,content:`fileLog`},{id:`краткое-содержание-19`,content:`Краткое содержание`},{id:`описание-15`,content:`Описание`},{id:`свойства-12`,content:`Свойства:`},{id:`ошибки-9`,content:`Ошибки:`},{id:`возвращает-18`,content:`Возвращает:`},{id:`formatmessage`,content:`formatMessage`},{id:`краткое-содержание-20`,content:`Краткое содержание`},{id:`описание-16`,content:`Описание`},{id:`свойства-13`,content:`Свойства:`},{id:`ошибки-10`,content:`Ошибки:`},{id:`возвращает-19`,content:`Возвращает:`},{id:`geterrornotification`,content:`getErrorNotification`},{id:`краткое-содержание-21`,content:`Краткое содержание`},{id:`описание-17`,content:`Описание`},{id:`свойства-14`,content:`Свойства:`},{id:`возвращает-20`,content:`Возвращает:`},{id:`telegramlog`,content:`telegramLog`},{id:`краткое-содержание-22`,content:`Краткое содержание`},{id:`описание-18`,content:`Описание`},{id:`свойства-15`,content:`Свойства:`},{id:`ошибки-11`,content:`Ошибки:`},{id:`возвращает-21`,content:`Возвращает:`}]},s=[{depth:2,url:`#краткое-содержание`,title:(0,n.jsx)(n.Fragment,{children:`Краткое содержание:`})},{depth:3,url:`#свойства`,title:(0,n.jsx)(n.Fragment,{children:`Свойства`})},{depth:3,url:`#методы`,title:(0,n.jsx)(n.Fragment,{children:`Методы`})},{depth:3,url:`#подробности`,title:(0,n.jsx)(n.Fragment,{children:`Подробности`})},{depth:2,url:`#свойства-1`,title:(0,n.jsx)(n.Fragment,{children:`Свойства`})},{depth:4,url:`#protected-db_logs--bool`,title:(0,n.jsx)(n.Fragment,{children:`protected $db_logs : bool`})},{depth:4,url:`#protected-initialized--bool`,title:(0,n.jsx)(n.Fragment,{children:`protected $initialized : bool`})},{depth:5,url:`#tags`,title:(0,n.jsx)(n.Fragment,{children:`Tags`})},{depth:4,url:`#protected-logs--bool`,title:(0,n.jsx)(n.Fragment,{children:`protected $logs : bool`})},{depth:4,url:`#protected-telegram_bot--string`,title:(0,n.jsx)(n.Fragment,{children:`protected $telegram_bot : ?string`})},{depth:4,url:`#protected-telegram_channel--stringintnull`,title:(0,n.jsx)(n.Fragment,{children:`protected $telegram_channel : string|int|null`})},{depth:4,url:`#protected-telegram_send--bool`,title:(0,n.jsx)(n.Fragment,{children:`protected $telegram_send : bool`})},{depth:4,url:`#protected-telegram_type--string`,title:(0,n.jsx)(n.Fragment,{children:`protected $telegram_type : ?string`})},{depth:2,url:`#методы-1`,title:(0,n.jsx)(n.Fragment,{children:`Методы`})},{depth:3,url:`#generatelog`,title:(0,n.jsx)(n.Fragment,{children:`generateLog`})},{depth:5,url:`#краткое-содержание-1`,title:(0,n.jsx)(n.Fragment,{children:`Краткое содержание`})},{depth:5,url:`#описание`,title:(0,n.jsx)(n.Fragment,{children:`Описание`})},{depth:5,url:`#свойства-2`,title:(0,n.jsx)(n.Fragment,{children:`Свойства:`})},{depth:5,url:`#ошибки`,title:(0,n.jsx)(n.Fragment,{children:`Ошибки:`})},{depth:5,url:`#возвращает`,title:(0,n.jsx)(n.Fragment,{children:`Возвращает:`})},{depth:3,url:`#getallowedtype`,title:(0,n.jsx)(n.Fragment,{children:`getAllowedType`})},{depth:5,url:`#краткое-содержание-2`,title:(0,n.jsx)(n.Fragment,{children:`Краткое содержание`})},{depth:5,url:`#описание-1`,title:(0,n.jsx)(n.Fragment,{children:`Описание`})},{depth:5,url:`#свойства-3`,title:(0,n.jsx)(n.Fragment,{children:`Свойства:`})},{depth:5,url:`#возвращает-1`,title:(0,n.jsx)(n.Fragment,{children:`Возвращает:`})},{depth:3,url:`#getallowedtypes`,title:(0,n.jsx)(n.Fragment,{children:`getAllowedTypes`})},{depth:5,url:`#краткое-содержание-3`,title:(0,n.jsx)(n.Fragment,{children:`Краткое содержание`})},{depth:5,url:`#описание-2`,title:(0,n.jsx)(n.Fragment,{children:`Описание`})},{depth:5,url:`#возвращает-2`,title:(0,n.jsx)(n.Fragment,{children:`Возвращает:`})},{depth:3,url:`#getlogs`,title:(0,n.jsx)(n.Fragment,{children:`getLogs`})},{depth:5,url:`#краткое-содержание-4`,title:(0,n.jsx)(n.Fragment,{children:`Краткое содержание`})},{depth:5,url:`#описание-3`,title:(0,n.jsx)(n.Fragment,{children:`Описание`})},{depth:5,url:`#ошибки-1`,title:(0,n.jsx)(n.Fragment,{children:`Ошибки:`})},{depth:5,url:`#возвращает-3`,title:(0,n.jsx)(n.Fragment,{children:`Возвращает:`})},{depth:3,url:`#gettelegrambot`,title:(0,n.jsx)(n.Fragment,{children:`getTelegramBot`})},{depth:5,url:`#краткое-содержание-5`,title:(0,n.jsx)(n.Fragment,{children:`Краткое содержание`})},{depth:5,url:`#описание-4`,title:(0,n.jsx)(n.Fragment,{children:`Описание`})},{depth:5,url:`#ошибки-2`,title:(0,n.jsx)(n.Fragment,{children:`Ошибки:`})},{depth:5,url:`#возвращает-4`,title:(0,n.jsx)(n.Fragment,{children:`Возвращает:`})},{depth:3,url:`#gettelegramchannel`,title:(0,n.jsx)(n.Fragment,{children:`getTelegramChannel`})},{depth:5,url:`#краткое-содержание-6`,title:(0,n.jsx)(n.Fragment,{children:`Краткое содержание`})},{depth:5,url:`#описание-5`,title:(0,n.jsx)(n.Fragment,{children:`Описание`})},{depth:5,url:`#возвращает-5`,title:(0,n.jsx)(n.Fragment,{children:`Возвращает:`})},{depth:3,url:`#gettelegramtype`,title:(0,n.jsx)(n.Fragment,{children:`getTelegramType`})},{depth:5,url:`#краткое-содержание-7`,title:(0,n.jsx)(n.Fragment,{children:`Краткое содержание`})},{depth:5,url:`#описание-6`,title:(0,n.jsx)(n.Fragment,{children:`Описание`})},{depth:5,url:`#возвращает-6`,title:(0,n.jsx)(n.Fragment,{children:`Возвращает:`})},{depth:3,url:`#init`,title:(0,n.jsx)(n.Fragment,{children:`init`})},{depth:5,url:`#краткое-содержание-8`,title:(0,n.jsx)(n.Fragment,{children:`Краткое содержание`})},{depth:5,url:`#ошибки-3`,title:(0,n.jsx)(n.Fragment,{children:`Ошибки:`})},{depth:5,url:`#возвращает-7`,title:(0,n.jsx)(n.Fragment,{children:`Возвращает:`})},{depth:3,url:`#isdblogs`,title:(0,n.jsx)(n.Fragment,{children:`isDbLogs`})},{depth:5,url:`#краткое-содержание-9`,title:(0,n.jsx)(n.Fragment,{children:`Краткое содержание`})},{depth:5,url:`#описание-7`,title:(0,n.jsx)(n.Fragment,{children:`Описание`})},{depth:5,url:`#ошибки-4`,title:(0,n.jsx)(n.Fragment,{children:`Ошибки:`})},{depth:5,url:`#возвращает-8`,title:(0,n.jsx)(n.Fragment,{children:`Возвращает:`})},{depth:3,url:`#istelegramsend`,title:(0,n.jsx)(n.Fragment,{children:`isTelegramSend`})},{depth:5,url:`#краткое-содержание-10`,title:(0,n.jsx)(n.Fragment,{children:`Краткое содержание`})},{depth:5,url:`#описание-8`,title:(0,n.jsx)(n.Fragment,{children:`Описание`})},{depth:5,url:`#ошибки-5`,title:(0,n.jsx)(n.Fragment,{children:`Ошибки:`})},{depth:5,url:`#возвращает-9`,title:(0,n.jsx)(n.Fragment,{children:`Возвращает:`})},{depth:3,url:`#setdblogs`,title:(0,n.jsx)(n.Fragment,{children:`setDbLogs`})},{depth:5,url:`#краткое-содержание-11`,title:(0,n.jsx)(n.Fragment,{children:`Краткое содержание`})},{depth:5,url:`#свойства-4`,title:(0,n.jsx)(n.Fragment,{children:`Свойства:`})},{depth:5,url:`#возвращает-10`,title:(0,n.jsx)(n.Fragment,{children:`Возвращает:`})},{depth:3,url:`#setlogs`,title:(0,n.jsx)(n.Fragment,{children:`setLogs`})},{depth:5,url:`#краткое-содержание-12`,title:(0,n.jsx)(n.Fragment,{children:`Краткое содержание`})},{depth:5,url:`#описание-9`,title:(0,n.jsx)(n.Fragment,{children:`Описание`})},{depth:5,url:`#смотри-так-же`,title:(0,n.jsx)(n.Fragment,{children:`Смотри так-же:`})},{depth:5,url:`#свойства-5`,title:(0,n.jsx)(n.Fragment,{children:`Свойства:`})},{depth:5,url:`#ошибки-6`,title:(0,n.jsx)(n.Fragment,{children:`Ошибки:`})},{depth:5,url:`#возвращает-11`,title:(0,n.jsx)(n.Fragment,{children:`Возвращает:`})},{depth:3,url:`#settelegrambot`,title:(0,n.jsx)(n.Fragment,{children:`setTelegramBot`})},{depth:5,url:`#краткое-содержание-13`,title:(0,n.jsx)(n.Fragment,{children:`Краткое содержание`})},{depth:5,url:`#описание-10`,title:(0,n.jsx)(n.Fragment,{children:`Описание`})},{depth:5,url:`#свойства-6`,title:(0,n.jsx)(n.Fragment,{children:`Свойства:`})},{depth:5,url:`#возвращает-12`,title:(0,n.jsx)(n.Fragment,{children:`Возвращает:`})},{depth:3,url:`#settelegramchannel`,title:(0,n.jsx)(n.Fragment,{children:`setTelegramChannel`})},{depth:5,url:`#краткое-содержание-14`,title:(0,n.jsx)(n.Fragment,{children:`Краткое содержание`})},{depth:5,url:`#описание-11`,title:(0,n.jsx)(n.Fragment,{children:`Описание`})},{depth:5,url:`#свойства-7`,title:(0,n.jsx)(n.Fragment,{children:`Свойства:`})},{depth:5,url:`#возвращает-13`,title:(0,n.jsx)(n.Fragment,{children:`Возвращает:`})},{depth:3,url:`#settelegramsend`,title:(0,n.jsx)(n.Fragment,{children:`setTelegramSend`})},{depth:5,url:`#краткое-содержание-15`,title:(0,n.jsx)(n.Fragment,{children:`Краткое содержание`})},{depth:5,url:`#описание-12`,title:(0,n.jsx)(n.Fragment,{children:`Описание`})},{depth:5,url:`#свойства-8`,title:(0,n.jsx)(n.Fragment,{children:`Свойства:`})},{depth:5,url:`#возвращает-14`,title:(0,n.jsx)(n.Fragment,{children:`Возвращает:`})},{depth:3,url:`#settelegramtype`,title:(0,n.jsx)(n.Fragment,{children:`setTelegramType`})},{depth:5,url:`#краткое-содержание-16`,title:(0,n.jsx)(n.Fragment,{children:`Краткое содержание`})},{depth:5,url:`#свойства-9`,title:(0,n.jsx)(n.Fragment,{children:`Свойства:`})},{depth:5,url:`#возвращает-15`,title:(0,n.jsx)(n.Fragment,{children:`Возвращает:`})},{depth:3,url:`#createlogdirectory`,title:(0,n.jsx)(n.Fragment,{children:`createLogDirectory`})},{depth:5,url:`#краткое-содержание-17`,title:(0,n.jsx)(n.Fragment,{children:`Краткое содержание`})},{depth:5,url:`#описание-13`,title:(0,n.jsx)(n.Fragment,{children:`Описание`})},{depth:5,url:`#свойства-10`,title:(0,n.jsx)(n.Fragment,{children:`Свойства:`})},{depth:5,url:`#ошибки-7`,title:(0,n.jsx)(n.Fragment,{children:`Ошибки:`})},{depth:5,url:`#возвращает-16`,title:(0,n.jsx)(n.Fragment,{children:`Возвращает:`})},{depth:3,url:`#dblog`,title:(0,n.jsx)(n.Fragment,{children:`dbLog`})},{depth:5,url:`#краткое-содержание-18`,title:(0,n.jsx)(n.Fragment,{children:`Краткое содержание`})},{depth:5,url:`#описание-14`,title:(0,n.jsx)(n.Fragment,{children:`Описание`})},{depth:5,url:`#свойства-11`,title:(0,n.jsx)(n.Fragment,{children:`Свойства:`})},{depth:5,url:`#ошибки-8`,title:(0,n.jsx)(n.Fragment,{children:`Ошибки:`})},{depth:5,url:`#возвращает-17`,title:(0,n.jsx)(n.Fragment,{children:`Возвращает:`})},{depth:3,url:`#filelog`,title:(0,n.jsx)(n.Fragment,{children:`fileLog`})},{depth:5,url:`#краткое-содержание-19`,title:(0,n.jsx)(n.Fragment,{children:`Краткое содержание`})},{depth:5,url:`#описание-15`,title:(0,n.jsx)(n.Fragment,{children:`Описание`})},{depth:5,url:`#свойства-12`,title:(0,n.jsx)(n.Fragment,{children:`Свойства:`})},{depth:5,url:`#ошибки-9`,title:(0,n.jsx)(n.Fragment,{children:`Ошибки:`})},{depth:5,url:`#возвращает-18`,title:(0,n.jsx)(n.Fragment,{children:`Возвращает:`})},{depth:3,url:`#formatmessage`,title:(0,n.jsx)(n.Fragment,{children:`formatMessage`})},{depth:5,url:`#краткое-содержание-20`,title:(0,n.jsx)(n.Fragment,{children:`Краткое содержание`})},{depth:5,url:`#описание-16`,title:(0,n.jsx)(n.Fragment,{children:`Описание`})},{depth:5,url:`#свойства-13`,title:(0,n.jsx)(n.Fragment,{children:`Свойства:`})},{depth:5,url:`#ошибки-10`,title:(0,n.jsx)(n.Fragment,{children:`Ошибки:`})},{depth:5,url:`#возвращает-19`,title:(0,n.jsx)(n.Fragment,{children:`Возвращает:`})},{depth:3,url:`#geterrornotification`,title:(0,n.jsx)(n.Fragment,{children:`getErrorNotification`})},{depth:5,url:`#краткое-содержание-21`,title:(0,n.jsx)(n.Fragment,{children:`Краткое содержание`})},{depth:5,url:`#описание-17`,title:(0,n.jsx)(n.Fragment,{children:`Описание`})},{depth:5,url:`#свойства-14`,title:(0,n.jsx)(n.Fragment,{children:`Свойства:`})},{depth:5,url:`#возвращает-20`,title:(0,n.jsx)(n.Fragment,{children:`Возвращает:`})},{depth:3,url:`#telegramlog`,title:(0,n.jsx)(n.Fragment,{children:`telegramLog`})},{depth:5,url:`#краткое-содержание-22`,title:(0,n.jsx)(n.Fragment,{children:`Краткое содержание`})},{depth:5,url:`#описание-18`,title:(0,n.jsx)(n.Fragment,{children:`Описание`})},{depth:5,url:`#свойства-15`,title:(0,n.jsx)(n.Fragment,{children:`Свойства:`})},{depth:5,url:`#ошибки-11`,title:(0,n.jsx)(n.Fragment,{children:`Ошибки:`})},{depth:5,url:`#возвращает-21`,title:(0,n.jsx)(n.Fragment,{children:`Возвращает:`})}];function c(e){let t={a:`a`,code:`code`,h2:`h2`,h3:`h3`,h4:`h4`,h5:`h5`,hr:`hr`,li:`li`,p:`p`,pre:`pre`,span:`span`,strong:`strong`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,ul:`ul`,...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h2,{id:`краткое-содержание`,children:`Краткое содержание:`}),`
`,(0,n.jsx)(t.p,{children:`Абстрактный класс для управления процессом логирования. Класс включает в себя базовый функционал для записи логов
в файлы, базу данных и отправки уведомлений в Telegram.`}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsx)(t.h3,{id:`свойства`,children:`Свойства`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[`protected $`,(0,n.jsx)(t.a,{href:`#property_db_logs`,children:`db_logs`})]}),`
`,(0,n.jsxs)(t.li,{children:[`protected $`,(0,n.jsx)(t.a,{href:`#property_initialized`,children:`initialized`})]}),`
`,(0,n.jsxs)(t.li,{children:[`protected $`,(0,n.jsx)(t.a,{href:`#property_logs`,children:`logs`})]}),`
`,(0,n.jsxs)(t.li,{children:[`protected $`,(0,n.jsx)(t.a,{href:`#property_telegram_bot`,children:`telegram_bot`})]}),`
`,(0,n.jsxs)(t.li,{children:[`protected $`,(0,n.jsx)(t.a,{href:`#property_telegram_channel`,children:`telegram_channel`})]}),`
`,(0,n.jsxs)(t.li,{children:[`protected $`,(0,n.jsx)(t.a,{href:`#property_telegram_send`,children:`telegram_send`})]}),`
`,(0,n.jsxs)(t.li,{children:[`protected $`,(0,n.jsx)(t.a,{href:`#property_telegram_type`,children:`telegram_type`})]}),`
`]}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsx)(t.h3,{id:`методы`,children:`Методы`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method_generateLog`,children:`generateLog()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method_getAllowedType`,children:`getAllowedType()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method_getAllowedTypes`,children:`getAllowedTypes()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method_getLogs`,children:`getLogs()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method_getTelegramBot`,children:`getTelegramBot()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method_getTelegramChannel`,children:`getTelegramChannel()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method_getTelegramType`,children:`getTelegramType()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method_init`,children:`init()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method_isDbLogs`,children:`isDbLogs()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method_isTelegramSend`,children:`isTelegramSend()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method_setDbLogs`,children:`setDbLogs()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method_setLogs`,children:`setLogs()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method_setTelegramBot`,children:`setTelegramBot()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method_setTelegramChannel`,children:`setTelegramChannel()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method_setTelegramSend`,children:`setTelegramSend()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method_setTelegramType`,children:`setTelegramType()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`private `,(0,n.jsx)(t.a,{href:`#method_createLogDirectory`,children:`createLogDirectory()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`private `,(0,n.jsx)(t.a,{href:`#method_dbLog`,children:`dbLog()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`private `,(0,n.jsx)(t.a,{href:`#method_fileLog`,children:`fileLog()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`private `,(0,n.jsx)(t.a,{href:`#method_formatMessage`,children:`formatMessage()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`private `,(0,n.jsx)(t.a,{href:`#method_getErrorNotification`,children:`getErrorNotification()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`private `,(0,n.jsx)(t.a,{href:`#method_telegramLog`,children:`telegramLog()`})]}),`
`]}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsx)(t.h3,{id:`подробности`,children:`Подробности`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsx)(t.li,{children:`Путь: engine/inc/maharder/_includes/classes/LogGenerator.php`}),`
`]}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsx)(t.h2,{id:`свойства-1`,children:`Свойства`}),`
`,(0,n.jsx)(`span`,{id:`property_db_logs`}),`
`,(0,n.jsx)(t.h4,{id:`protected-db_logs--bool`,children:`protected $db_logs : bool`}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Краткое содержание`})}),`
`,(0,n.jsx)(t.p,{children:`Сохранять логи в базе данных`}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Тип:`}),` `,(0,n.jsx)(`abbr`,{title:`bool`,children:`Логические значения`})]}),`
`,(0,n.jsx)(`span`,{id:`property_initialized`}),`
`,(0,n.jsx)(t.h4,{id:`protected-initialized--bool`,children:`protected $initialized : bool`}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Краткое содержание`})}),`
`,(0,n.jsx)(t.p,{children:`Проверяет, сформирован класс или нет`}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Тип:`}),` `,(0,n.jsx)(`abbr`,{title:`bool`,children:`Логические значения`})]}),`
`,(0,n.jsx)(t.h5,{id:`tags`,children:`Tags`}),`
`,(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`Тэг`}),(0,n.jsx)(t.th,{children:`Версия`}),(0,n.jsx)(t.th,{children:`Описание`})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`since`}),(0,n.jsx)(t.td,{children:`173.3.0`}),(0,n.jsx)(t.td,{})]})})]}),`
`,(0,n.jsx)(`span`,{id:`property_logs`}),`
`,(0,n.jsx)(t.h4,{id:`protected-logs--bool`,children:`protected $logs : bool`}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Краткое содержание`})}),`
`,(0,n.jsx)(t.p,{children:`Регулятор логирования системы`}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Тип:`}),` `,(0,n.jsx)(`abbr`,{title:`bool`,children:`Логические значения`})]}),`
`,(0,n.jsx)(`span`,{id:`property_telegram_bot`}),`
`,(0,n.jsx)(t.h4,{id:`protected-telegram_bot--string`,children:`protected $telegram_bot : ?string`}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Краткое содержание`})}),`
`,(0,n.jsx)(t.p,{children:`API телеграм бота, который будет отправлять логи`}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Тип:`}),` `,(0,n.jsx)(`abbr`,{title:`?string`,children:`Текст или null`})]}),`
`,(0,n.jsx)(`span`,{id:`property_telegram_channel`}),`
`,(0,n.jsx)(t.h4,{id:`protected-telegram_channel--stringintnull`,children:`protected $telegram_channel : string|int|null`}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Краткое содержание`})}),`
`,(0,n.jsx)(t.p,{children:`ID канала, куда будут отправляться логи`}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Тип:`}),` `,(0,n.jsx)(`abbr`,{title:`string|int|null`,children:`Текст / целое число / null`})]}),`
`,(0,n.jsx)(`span`,{id:`property_telegram_send`}),`
`,(0,n.jsx)(t.h4,{id:`protected-telegram_send--bool`,children:`protected $telegram_send : bool`}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Краткое содержание`})}),`
`,(0,n.jsx)(t.p,{children:`Регулятор отправки логов в телеграм канал
По умолчанию - выключен`}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Тип:`}),` `,(0,n.jsx)(`abbr`,{title:`bool`,children:`Логические значения`})]}),`
`,(0,n.jsx)(`span`,{id:`property_telegram_type`}),`
`,(0,n.jsx)(t.h4,{id:`protected-telegram_type--string`,children:`protected $telegram_type : ?string`}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Краткое содержание`})}),`
`,(0,n.jsx)(t.p,{children:`Тип логов, которые будут отправлены в телеграм`}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Тип:`}),` `,(0,n.jsx)(`abbr`,{title:`?string`,children:`Текст или null`})]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Подробности:`})}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsx)(t.h2,{id:`методы-1`,children:`Методы`}),`
`,(0,n.jsx)(`span`,{id:`method_generateLog`}),`
`,(0,n.jsx)(t.h3,{id:`generatelog`,children:`generateLog`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`static public generateLog(string  service, string  functionName, mixed  message, string  type = "error") : void`})})})})}),`
`,(0,n.jsx)(t.h5,{id:`краткое-содержание-1`,children:`Краткое содержание`}),`
`,(0,n.jsx)(t.p,{children:`Генерация лог-файлов при возникновении ошибки или другой значимой ситуации в процессе работы системы.`}),`
`,(0,n.jsx)(t.h5,{id:`описание`,children:`Описание`}),`
`,(0,n.jsx)(t.p,{children:`Данная функция создаёт лог-файлы в зависимости от указанного типа ошибки, хранит подробную информацию о сервисе,
функции, дате/времени и сообщении. Помимо записи в файл, опционально отправляются уведомления в Telegram и
сохраняются логи в базу данных.`}),`
`,(0,n.jsx)(t.h5,{id:`свойства-2`,children:`Свойства:`}),`
`,(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`Название`}),(0,n.jsx)(t.th,{children:`Тип`}),(0,n.jsx)(t.th,{children:`По умолчанию`})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:`$service`})}),(0,n.jsx)(t.td,{children:`string`}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:`$functionName`})}),(0,n.jsx)(t.td,{children:`string`}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:`$message`})}),(0,n.jsx)(t.td,{children:`mixed`}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:`$type`})}),(0,n.jsx)(t.td,{children:`string`}),(0,n.jsx)(t.td,{children:`"error"`})]})]})]}),`
`,(0,n.jsx)(t.h5,{id:`ошибки`,children:`Ошибки:`}),`
`,(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`Тип`}),(0,n.jsx)(t.th,{children:`Описание`})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`\\JsonException|\\Throwable`}),(0,n.jsx)(t.td,{children:`Исключение, связанное с ошибками в JSON-конверсии (может быть выброшено при выполнении Telegram-лога).`})]})})]}),`
`,(0,n.jsx)(t.h5,{id:`возвращает`,children:`Возвращает:`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`void`})})})})}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsx)(`span`,{id:`method_getAllowedType`}),`
`,(0,n.jsx)(t.h3,{id:`getallowedtype`,children:`getAllowedType`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`static public getAllowedType(string  type) : string`})})})})}),`
`,(0,n.jsx)(t.h5,{id:`краткое-содержание-2`,children:`Краткое содержание`}),`
`,(0,n.jsx)(t.p,{children:`Возвращает описание разрешенного типа ошибки по его ключу.`}),`
`,(0,n.jsx)(t.h5,{id:`описание-1`,children:`Описание`}),`
`,(0,n.jsxs)(t.p,{children:[`Перечень всех доступных типов с их описаниями
задается методом `,(0,n.jsx)(t.code,{children:`getAllowedTypes()`}),`. Если указанный ключ `,(0,n.jsx)(t.code,{children:`$type`}),`
отсутствует в списке, будет сгенерирована ошибка типа PHP `,(0,n.jsx)(t.code,{children:`undefined index`}),`.`]}),`
`,(0,n.jsx)(t.h5,{id:`свойства-3`,children:`Свойства:`}),`
`,(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`Название`}),(0,n.jsx)(t.th,{children:`Тип`}),(0,n.jsx)(t.th,{children:`По умолчанию`})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:`$type`})}),(0,n.jsx)(t.td,{children:`string`}),(0,n.jsx)(t.td,{})]})})]}),`
`,(0,n.jsx)(t.h5,{id:`возвращает-1`,children:`Возвращает:`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`string`})})})})}),`
`,(0,n.jsx)(t.p,{children:`Описание типа ошибки, соответствующее переданному ключу.`}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:`getAllowedTypes()`}),`.`]}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsx)(`span`,{id:`method_getAllowedTypes`}),`
`,(0,n.jsx)(t.h3,{id:`getallowedtypes`,children:`getAllowedTypes`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`static public getAllowedTypes() : array`})})})})}),`
`,(0,n.jsx)(t.h5,{id:`краткое-содержание-3`,children:`Краткое содержание`}),`
`,(0,n.jsx)(t.p,{children:`Возвращает массив доступных типов сообщений с их локализованными описаниями.`}),`
`,(0,n.jsx)(t.h5,{id:`описание-2`,children:`Описание`}),`
`,(0,n.jsxs)(t.p,{children:[`Типы сообщений включают различные уровни, такие как ошибка, информация, предупреждение, и другие.
Также добавляются сокращенные обозначения для некоторых ключевых типов, таких как "warn", "crit" или
"emergency".
Локализация осуществляется с использованием функции `,(0,n.jsx)(t.a,{href:`../index#function___`,children:`__`}),`.`]}),`
`,(0,n.jsx)(t.h5,{id:`возвращает-2`,children:`Возвращает:`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`array`})})})})}),`
`,(0,n.jsx)(t.p,{children:`Ассоциативный массив, где ключи — идентификаторы типов сообщений, а значения — локализованные
описания.`}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsx)(`span`,{id:`method_getLogs`}),`
`,(0,n.jsx)(t.h3,{id:`getlogs`,children:`getLogs`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`static public getLogs() : bool`})})})})}),`
`,(0,n.jsx)(t.h5,{id:`краткое-содержание-4`,children:`Краткое содержание`}),`
`,(0,n.jsx)(t.p,{children:`Получает текущий статус логирования.`}),`
`,(0,n.jsx)(t.h5,{id:`описание-3`,children:`Описание`}),`
`,(0,n.jsxs)(t.p,{children:[`Метод инициализирует необходимые настройки через `,(0,n.jsx)(t.code,{children:`self::init()`}),`, если они еще не были установлены,
и устанавливает значение `,(0,n.jsx)(t.code,{children:`self::$logs`}),`, если оно не было задано. Значение берется из настроек,
полученных через `,(0,n.jsx)(t.code,{children:`DataManager::getConfig("maharder")`}),`.`]}),`
`,(0,n.jsx)(t.h5,{id:`ошибки-1`,children:`Ошибки:`}),`
`,(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`Тип`}),(0,n.jsx)(t.th,{children:`Описание`})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`\\RuntimeException|\\JsonException`}),(0,n.jsxs)(t.td,{children:[`Если `,(0,n.jsx)(t.code,{children:`DataManager::getConfig()`}),` выбрасывает исключение (например, при ошибке чтения конфигурации).`]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`\\Exception`}),(0,n.jsx)(t.td,{children:`Если возникнут ошибки во время инициализации (в методе init()).`})]})]})]}),`
`,(0,n.jsx)(t.h5,{id:`возвращает-3`,children:`Возвращает:`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`bool`})})})})}),`
`,(0,n.jsx)(t.p,{children:`Возвращает текущее состояние логирования.`}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsx)(`span`,{id:`method_getTelegramBot`}),`
`,(0,n.jsx)(t.h3,{id:`gettelegrambot`,children:`getTelegramBot`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`static public getTelegramBot() : string`})})})})}),`
`,(0,n.jsx)(t.h5,{id:`краткое-содержание-5`,children:`Краткое содержание`}),`
`,(0,n.jsx)(t.p,{children:`Возвращает идентификатор Telegram-бота.`}),`
`,(0,n.jsx)(t.h5,{id:`описание-4`,children:`Описание`}),`
`,(0,n.jsxs)(t.p,{children:[`Метод возвращает текущее значение идентификатора Telegram-бота,
хранящегося в статическом свойстве `,(0,n.jsx)(t.code,{children:`$telegram_bot`}),`.`]}),`
`,(0,n.jsx)(t.h5,{id:`ошибки-2`,children:`Ошибки:`}),`
`,(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`Тип`}),(0,n.jsx)(t.th,{children:`Описание`})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`\\RuntimeException`}),(0,n.jsx)(t.td,{children:`Если идентификатор Telegram-бота не установлен (равен null).`})]})})]}),`
`,(0,n.jsx)(t.h5,{id:`возвращает-4`,children:`Возвращает:`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`string`})})})})}),`
`,(0,n.jsx)(t.p,{children:`Идентификатор Telegram-бота.`}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsx)(`span`,{id:`method_getTelegramChannel`}),`
`,(0,n.jsx)(t.h3,{id:`gettelegramchannel`,children:`getTelegramChannel`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`static public getTelegramChannel() : int|string|null`})})})})}),`
`,(0,n.jsx)(t.h5,{id:`краткое-содержание-6`,children:`Краткое содержание`}),`
`,(0,n.jsx)(t.p,{children:`Возвращает идентификатор Telegram-канала.`}),`
`,(0,n.jsx)(t.h5,{id:`описание-5`,children:`Описание`}),`
`,(0,n.jsx)(t.p,{children:`Метод возвращает идентификатор канала в различных форматах:`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsx)(t.li,{children:`Если канал настроен, он может быть представлен числом (целочисленным идентификатором) или строкой (например, в виде
alias).`}),`
`,(0,n.jsx)(t.li,{children:`Если канал отсутствует, метод вернет null.`}),`
`]}),`
`,(0,n.jsx)(t.h5,{id:`возвращает-5`,children:`Возвращает:`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`int|string|null`})})})})}),`
`,(0,n.jsx)(t.p,{children:`Возвращает идентификатор Telegram-канала в виде числа, строки или null, если канал не
настроен.`}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsx)(`span`,{id:`method_getTelegramType`}),`
`,(0,n.jsx)(t.h3,{id:`gettelegramtype`,children:`getTelegramType`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`static public getTelegramType() : string`})})})})}),`
`,(0,n.jsx)(t.h5,{id:`краткое-содержание-7`,children:`Краткое содержание`}),`
`,(0,n.jsx)(t.p,{children:`Возвращает тип Telegram в зависимости от установленного значения.`}),`
`,(0,n.jsx)(t.h5,{id:`описание-6`,children:`Описание`}),`
`,(0,n.jsxs)(t.p,{children:[`Если свойство `,(0,n.jsx)(t.code,{children:`$telegram_type`}),` не задано (null или пустое значение),
возвращает значение по умолчанию `,(0,n.jsx)(t.code,{children:`"all"`}),`.`]}),`
`,(0,n.jsx)(t.h5,{id:`возвращает-6`,children:`Возвращает:`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`string`})})})})}),`
`,(0,n.jsxs)(t.p,{children:[`Тип Telegram. Может возвращать либо значение `,(0,n.jsx)(t.code,{children:`$telegram_type`}),`,
либо строку `,(0,n.jsx)(t.code,{children:`"all"`}),` в качестве значения по умолчанию.`]}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsx)(`span`,{id:`method_init`}),`
`,(0,n.jsx)(t.h3,{id:`init`,children:`init`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`static public init() : void`})})})})}),`
`,(0,n.jsx)(t.h5,{id:`краткое-содержание-8`,children:`Краткое содержание`}),`
`,(0,n.jsxs)(t.p,{children:[`Инициализирует настройки для логирования. Функция настраивает параметры телеграм-логирования, базы данных для
логов и другие параметры, используя данные конфигурации. Флаг `,(0,n.jsx)(t.code,{children:`initialized`}),` предотвращает повторную
инициализацию.`]}),`
`,(0,n.jsx)(t.h5,{id:`ошибки-3`,children:`Ошибки:`}),`
`,(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`Тип`}),(0,n.jsx)(t.th,{children:`Описание`})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`\\JsonException`}),(0,n.jsx)(t.td,{children:`Исключение выбрасывается, если манипуляции с JSON в процессе получения данных конфигурации или установки параметров окажутся некорректными.`})]})})]}),`
`,(0,n.jsx)(t.h5,{id:`возвращает-7`,children:`Возвращает:`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`void`})})})})}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsx)(`span`,{id:`method_isDbLogs`}),`
`,(0,n.jsx)(t.h3,{id:`isdblogs`,children:`isDbLogs`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`static public isDbLogs() : bool`})})})})}),`
`,(0,n.jsx)(t.h5,{id:`краткое-содержание-9`,children:`Краткое содержание`}),`
`,(0,n.jsx)(t.p,{children:`Проверяет, включены ли логирования в базе данных.`}),`
`,(0,n.jsx)(t.h5,{id:`описание-7`,children:`Описание`}),`
`,(0,n.jsxs)(t.p,{children:[`Если состояние логов в базе данных еще не было установлено, метод загружает
конфигурацию из DataManager и устанавливает значение на основании
параметра `,(0,n.jsx)(t.code,{children:`logs_db`}),` в конфигурации. Если параметр отсутствует,
логирование в БД считается выключенным по умолчанию.`]}),`
`,(0,n.jsx)(t.h5,{id:`ошибки-4`,children:`Ошибки:`}),`
`,(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`Тип`}),(0,n.jsx)(t.th,{children:`Описание`})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`\\RuntimeException|\\JsonException`}),(0,n.jsx)(t.td,{children:`Если конфигурация приложения не может быть получена (зависит от реализации DataManager).`})]})})]}),`
`,(0,n.jsx)(t.h5,{id:`возвращает-8`,children:`Возвращает:`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`bool`})})})})}),`
`,(0,n.jsxs)(t.p,{children:[`Возвращает `,(0,n.jsx)(t.code,{children:`true`}),`, если логирование в базе данных включено, иначе `,(0,n.jsx)(t.code,{children:`false`}),`.`]}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsx)(`span`,{id:`method_isTelegramSend`}),`
`,(0,n.jsx)(t.h3,{id:`istelegramsend`,children:`isTelegramSend`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`static public isTelegramSend() : bool`})})})})}),`
`,(0,n.jsx)(t.h5,{id:`краткое-содержание-10`,children:`Краткое содержание`}),`
`,(0,n.jsx)(t.p,{children:`Проверяет, включена ли отправка логов через Telegram.`}),`
`,(0,n.jsx)(t.h5,{id:`описание-8`,children:`Описание`}),`
`,(0,n.jsxs)(t.p,{children:[`Если флаг `,(0,n.jsx)(t.code,{children:`$telegram_send`}),` еще не установлен (`,(0,n.jsx)(t.code,{children:`false`}),`) и есть логи (определяется методом `,(0,n.jsx)(t.code,{children:`getLogs()`}),`),
функция загружает конфигурацию из `,(0,n.jsx)(t.code,{children:`DataManager`}),` и устанавливает флаг на основе значения опции `,(0,n.jsx)(t.code,{children:`logs_telegram`}),`.
В противном случае отправка через Telegram отключается.`]}),`
`,(0,n.jsx)(t.h5,{id:`ошибки-5`,children:`Ошибки:`}),`
`,(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`Тип`}),(0,n.jsx)(t.th,{children:`Описание`})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`\\RuntimeException|\\JsonException`}),(0,n.jsx)(t.td,{children:`Если возникает ошибка при загрузке или обработке конфигурации из DataManager.`})]})})]}),`
`,(0,n.jsx)(t.h5,{id:`возвращает-9`,children:`Возвращает:`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`bool`})})})})}),`
`,(0,n.jsxs)(t.p,{children:[`Возвращает `,(0,n.jsx)(t.code,{children:`true`}),`, если отправка логов через Telegram включена, или `,(0,n.jsx)(t.code,{children:`false`}),`, если отключена.`]}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsx)(`span`,{id:`method_setDbLogs`}),`
`,(0,n.jsx)(t.h3,{id:`setdblogs`,children:`setDbLogs`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`static public setDbLogs(bool  db_logs) : void`})})})})}),`
`,(0,n.jsx)(t.h5,{id:`краткое-содержание-11`,children:`Краткое содержание`}),`
`,(0,n.jsx)(t.p,{children:`Устанавливает логирование работы с базой данных.`}),`
`,(0,n.jsx)(t.h5,{id:`свойства-4`,children:`Свойства:`}),`
`,(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`Название`}),(0,n.jsx)(t.th,{children:`Тип`}),(0,n.jsx)(t.th,{children:`По умолчанию`})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:`$db_logs`})}),(0,n.jsx)(t.td,{children:`bool`}),(0,n.jsx)(t.td,{})]})})]}),`
`,(0,n.jsx)(t.h5,{id:`возвращает-10`,children:`Возвращает:`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`void`})})})})}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsx)(`span`,{id:`method_setLogs`}),`
`,(0,n.jsx)(t.h3,{id:`setlogs`,children:`setLogs`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`static public setLogs(bool|int  logs) : void`})})})})}),`
`,(0,n.jsx)(t.h5,{id:`краткое-содержание-12`,children:`Краткое содержание`}),`
`,(0,n.jsx)(t.p,{children:`Устанавливает состояние логирования.`}),`
`,(0,n.jsx)(t.h5,{id:`описание-9`,children:`Описание`}),`
`,(0,n.jsxs)(t.p,{children:[`Если передано значение `,(0,n.jsx)(t.code,{children:`true`}),`, включается логирование. Если передано значение `,(0,n.jsx)(t.code,{children:`false`}),`, логирование выключается.
Также поддерживается передача целочисленного значения, которое будет приведено к булевому типу.`]}),`
`,(0,n.jsx)(t.h5,{id:`смотри-так-же`,children:`Смотри так-же:`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`#method_init`,children:`\\self::init()`})}),`
`]}),`
`,(0,n.jsx)(t.h5,{id:`свойства-5`,children:`Свойства:`}),`
`,(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`Название`}),(0,n.jsx)(t.th,{children:`Тип`}),(0,n.jsx)(t.th,{children:`По умолчанию`})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:`$logs`})}),(0,n.jsx)(t.td,{children:`bool|int`}),(0,n.jsx)(t.td,{})]})})]}),`
`,(0,n.jsx)(t.h5,{id:`ошибки-6`,children:`Ошибки:`}),`
`,(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`Тип`}),(0,n.jsx)(t.th,{children:`Описание`})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`\\Exception`}),(0,n.jsx)(t.td,{children:`Если возникнут ошибки во время инициализации (в методе init()).`})]})})]}),`
`,(0,n.jsx)(t.h5,{id:`возвращает-11`,children:`Возвращает:`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`void`})})})})}),`
`,(0,n.jsx)(t.p,{children:`Функция не возвращает значения.`}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsx)(`span`,{id:`method_setTelegramBot`}),`
`,(0,n.jsx)(t.h3,{id:`settelegrambot`,children:`setTelegramBot`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`static public setTelegramBot(string|null  telegram_bot) : void`})})})})}),`
`,(0,n.jsx)(t.h5,{id:`краткое-содержание-13`,children:`Краткое содержание`}),`
`,(0,n.jsx)(t.p,{children:`Устанавливает идентификатор или токен Telegram-бота.`}),`
`,(0,n.jsx)(t.h5,{id:`описание-10`,children:`Описание`}),`
`,(0,n.jsxs)(t.p,{children:[`Метод позволяет задать идентификатор или токен используемого Telegram-бота,
если он используется в приложении. Для удаления текущего значения передайте `,(0,n.jsx)(t.code,{children:`null`}),`.`]}),`
`,(0,n.jsx)(t.h5,{id:`свойства-6`,children:`Свойства:`}),`
`,(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`Название`}),(0,n.jsx)(t.th,{children:`Тип`}),(0,n.jsx)(t.th,{children:`По умолчанию`})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:`$telegram_bot`})}),(0,n.jsx)(t.td,{children:`string|null`}),(0,n.jsx)(t.td,{})]})})]}),`
`,(0,n.jsx)(t.h5,{id:`возвращает-12`,children:`Возвращает:`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`void`})})})})}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsx)(`span`,{id:`method_setTelegramChannel`}),`
`,(0,n.jsx)(t.h3,{id:`settelegramchannel`,children:`setTelegramChannel`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`static public setTelegramChannel(int|string|null  telegram_channel) : void`})})})})}),`
`,(0,n.jsx)(t.h5,{id:`краткое-содержание-14`,children:`Краткое содержание`}),`
`,(0,n.jsx)(t.p,{children:`Устанавливает идентификатор или имя канала Telegram.`}),`
`,(0,n.jsx)(t.h5,{id:`описание-11`,children:`Описание`}),`
`,(0,n.jsxs)(t.p,{children:[`Эта функция задаёт значение статического свойства `,(0,n.jsx)(t.code,{children:`$telegram_channel`}),`, позволяя указать идентификатор
канала, имя или установить значение в `,(0,n.jsx)(t.code,{children:`null`}),`, чтобы сбросить текущее состояние.`]}),`
`,(0,n.jsx)(t.h5,{id:`свойства-7`,children:`Свойства:`}),`
`,(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`Название`}),(0,n.jsx)(t.th,{children:`Тип`}),(0,n.jsx)(t.th,{children:`По умолчанию`})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:`$telegram_channel`})}),(0,n.jsx)(t.td,{children:`int | string | null`}),(0,n.jsx)(t.td,{})]})})]}),`
`,(0,n.jsx)(t.h5,{id:`возвращает-13`,children:`Возвращает:`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`void`})})})})}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsx)(`span`,{id:`method_setTelegramSend`}),`
`,(0,n.jsx)(t.h3,{id:`settelegramsend`,children:`setTelegramSend`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`static public setTelegramSend(bool  telegram_send = false) : void`})})})})}),`
`,(0,n.jsx)(t.h5,{id:`краткое-содержание-15`,children:`Краткое содержание`}),`
`,(0,n.jsx)(t.p,{children:`Устанавливает флаг для отправки сообщений через Telegram.`}),`
`,(0,n.jsx)(t.h5,{id:`описание-12`,children:`Описание`}),`
`,(0,n.jsxs)(t.p,{children:[`Этот метод изменяет состояние статического свойства `,(0,n.jsx)(t.code,{children:`$telegram_send`}),`,
которое указывает, должны ли сообщения отправляться через Telegram.`]}),`
`,(0,n.jsx)(t.h5,{id:`свойства-8`,children:`Свойства:`}),`
`,(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`Название`}),(0,n.jsx)(t.th,{children:`Тип`}),(0,n.jsx)(t.th,{children:`По умолчанию`})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:`$telegram_send`})}),(0,n.jsx)(t.td,{children:`bool`}),(0,n.jsx)(t.td,{children:`false`})]})})]}),`
`,(0,n.jsx)(t.h5,{id:`возвращает-14`,children:`Возвращает:`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`void`})})})})}),`
`,(0,n.jsx)(t.p,{children:`Метод не возвращает значения.`}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsx)(`span`,{id:`method_setTelegramType`}),`
`,(0,n.jsx)(t.h3,{id:`settelegramtype`,children:`setTelegramType`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`static public setTelegramType(string|null  telegram_type) : void`})})})})}),`
`,(0,n.jsx)(t.h5,{id:`краткое-содержание-16`,children:`Краткое содержание`}),`
`,(0,n.jsx)(t.p,{children:`Устанавливает тип Telegram для текущего экземпляра.`}),`
`,(0,n.jsx)(t.h5,{id:`свойства-9`,children:`Свойства:`}),`
`,(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`Название`}),(0,n.jsx)(t.th,{children:`Тип`}),(0,n.jsx)(t.th,{children:`По умолчанию`})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:`$telegram_type`})}),(0,n.jsx)(t.td,{children:`string|null`}),(0,n.jsx)(t.td,{})]})})]}),`
`,(0,n.jsx)(t.h5,{id:`возвращает-15`,children:`Возвращает:`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`void`})})})})}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsx)(`span`,{id:`method_createLogDirectory`}),`
`,(0,n.jsx)(t.h3,{id:`createlogdirectory`,children:`createLogDirectory`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`static private createLogDirectory(string  service, string  module, string  path) : bool`})})})})}),`
`,(0,n.jsx)(t.h5,{id:`краткое-содержание-17`,children:`Краткое содержание`}),`
`,(0,n.jsx)(t.p,{children:`Создает директорию для логов с учетом указанного сервиса, модуля и пути.`}),`
`,(0,n.jsx)(t.h5,{id:`описание-13`,children:`Описание`}),`
`,(0,n.jsxs)(t.p,{children:[`Функция вызывает метод `,(0,n.jsx)(t.a,{href:`./DataManager#method_createDir`,children:`DataManager::createDir`}),` для создания директории,
а также дополнительно проверяет существование директории через `,(0,n.jsx)(t.code,{children:`is_dir()`}),`.`]}),`
`,(0,n.jsx)(t.h5,{id:`свойства-10`,children:`Свойства:`}),`
`,(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`Название`}),(0,n.jsx)(t.th,{children:`Тип`}),(0,n.jsx)(t.th,{children:`По умолчанию`})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:`$service`})}),(0,n.jsx)(t.td,{children:`string`}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:`$module`})}),(0,n.jsx)(t.td,{children:`string`}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:`$path`})}),(0,n.jsx)(t.td,{children:`string`}),(0,n.jsx)(t.td,{})]})]})]}),`
`,(0,n.jsx)(t.h5,{id:`ошибки-7`,children:`Ошибки:`}),`
`,(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`Тип`}),(0,n.jsx)(t.th,{children:`Описание`})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`\\Throwable`}),(0,n.jsxs)(t.td,{children:[`В случае ошибки при вызове `,(0,n.jsx)(t.a,{href:`./DataManager#method_createDir`,children:`DataManager::createDir`}),` могут быть выброшены исключения, которые логируются в системе.`]})]})})]}),`
`,(0,n.jsx)(t.h5,{id:`возвращает-16`,children:`Возвращает:`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`bool`})})})})}),`
`,(0,n.jsx)(t.p,{children:`Возвращает true, если директория была успешно создана или уже существует;
false, если создание директории завершилось ошибкой.`}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsx)(`span`,{id:`method_dbLog`}),`
`,(0,n.jsx)(t.h3,{id:`dblog`,children:`dbLog`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`static private dbLog(array  message, string  type) : void`})})})})}),`
`,(0,n.jsx)(t.h5,{id:`краткое-содержание-18`,children:`Краткое содержание`}),`
`,(0,n.jsx)(t.p,{children:`Логирует сообщение в базу данных, если включены настройки логирования в БД.`}),`
`,(0,n.jsx)(t.h5,{id:`описание-14`,children:`Описание`}),`
`,(0,n.jsx)(t.p,{children:`Функция инициализирует настройки логирования, проверяет, включено ли логирование в базу данных,
создает объект лога, форматирует сообщение и сохраняет его в базу данных.`}),`
`,(0,n.jsx)(t.h5,{id:`свойства-11`,children:`Свойства:`}),`
`,(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`Название`}),(0,n.jsx)(t.th,{children:`Тип`}),(0,n.jsx)(t.th,{children:`По умолчанию`})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:`$message`})}),(0,n.jsx)(t.td,{children:`array`}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:`$type`})}),(0,n.jsx)(t.td,{children:`string`}),(0,n.jsx)(t.td,{})]})]})]}),`
`,(0,n.jsx)(t.h5,{id:`ошибки-8`,children:`Ошибки:`}),`
`,(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`Тип`}),(0,n.jsx)(t.th,{children:`Описание`})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`\\RuntimeException`}),(0,n.jsx)(t.td,{children:`Если не удается сохранить лог в базу данных.`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`\\JsonException|\\Throwable`}),(0,n.jsx)(t.td,{children:`При возникновении ошибок в процессе работы с JSON или других исключений.`})]})]})]}),`
`,(0,n.jsx)(t.h5,{id:`возвращает-17`,children:`Возвращает:`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`void`})})})})}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsx)(`span`,{id:`method_fileLog`}),`
`,(0,n.jsx)(t.h3,{id:`filelog`,children:`fileLog`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`static private fileLog(string  file, mixed  message, int  level) : void`})})})})}),`
`,(0,n.jsx)(t.h5,{id:`краткое-содержание-19`,children:`Краткое содержание`}),`
`,(0,n.jsx)(t.p,{children:`Логирование сообщений в файл.`}),`
`,(0,n.jsx)(t.h5,{id:`описание-15`,children:`Описание`}),`
`,(0,n.jsx)(t.p,{children:`Метод записывает переданное сообщение в указанный лог-файл, если включено логирование.
Сообщение предварительно сериализуется перед записью.`}),`
`,(0,n.jsx)(t.h5,{id:`свойства-12`,children:`Свойства:`}),`
`,(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`Название`}),(0,n.jsx)(t.th,{children:`Тип`}),(0,n.jsx)(t.th,{children:`По умолчанию`})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:`$file`})}),(0,n.jsx)(t.td,{children:`string`}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:`$message`})}),(0,n.jsx)(t.td,{children:`mixed`}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:`$level`})}),(0,n.jsx)(t.td,{children:`int`}),(0,n.jsx)(t.td,{})]})]})]}),`
`,(0,n.jsx)(t.h5,{id:`ошибки-9`,children:`Ошибки:`}),`
`,(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`Тип`}),(0,n.jsx)(t.th,{children:`Описание`})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`\\JsonException`}),(0,n.jsxs)(t.td,{children:[`Генерируется, если в процессе инициализации (инициализация через `,(0,n.jsx)(t.code,{children:`self::init()`}),`) возникает ошибка, связанная с обработкой JSON (например, при работе с конфигурацией `,(0,n.jsx)(t.code,{children:`DataManager::getConfig()`}),`).`]})]})})]}),`
`,(0,n.jsx)(t.h5,{id:`возвращает-18`,children:`Возвращает:`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`void`})})})})}),`
`,(0,n.jsx)(t.p,{children:`Функция ничего не возвращает.`}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsx)(`span`,{id:`method_formatMessage`}),`
`,(0,n.jsx)(t.h3,{id:`formatmessage`,children:`formatMessage`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`static private formatMessage(string|array  message) : string`})})})})}),`
`,(0,n.jsx)(t.h5,{id:`краткое-содержание-20`,children:`Краткое содержание`}),`
`,(0,n.jsx)(t.p,{children:`Форматирует сообщение для отображения в виде строки.`}),`
`,(0,n.jsx)(t.h5,{id:`описание-16`,children:`Описание`}),`
`,(0,n.jsxs)(t.p,{children:[`Если сообщение передано в виде массива, функция преобразует его в строку,
где каждый элемент массива будет представлен как отдельная строка,
разделенная тегами `,(0,n.jsx)(t.code,{children:`&lt;br /&gt;`}),`. В случае, если ключ является строкой, он
будет выделен тегом `,(0,n.jsx)(t.code,{children:`&lt;b&gt;`}),`. Если сообщение уже является строкой, возвращает
его без изменений.`]}),`
`,(0,n.jsx)(t.h5,{id:`свойства-13`,children:`Свойства:`}),`
`,(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`Название`}),(0,n.jsx)(t.th,{children:`Тип`}),(0,n.jsx)(t.th,{children:`По умолчанию`})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:`$message`})}),(0,n.jsx)(t.td,{children:`string|array`}),(0,n.jsx)(t.td,{})]})})]}),`
`,(0,n.jsx)(t.h5,{id:`ошибки-10`,children:`Ошибки:`}),`
`,(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`Тип`}),(0,n.jsx)(t.th,{children:`Описание`})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`\\InvalidArgumentException`}),(0,n.jsx)(t.td,{children:`Если входной параметр не является строкой или массивом (сценарий невозможен в данной реализации, но документация указывает на строгие ожидания типов).`})]})})]}),`
`,(0,n.jsx)(t.h5,{id:`возвращает-19`,children:`Возвращает:`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`string`})})})})}),`
`,(0,n.jsxs)(t.p,{children:[`Возвращает отформатированное сообщение в виде строки. Если
входной параметр — строка, возвращается без изменений,
если массив — объединяется в строку с использованием
тега `,(0,n.jsx)(t.code,{children:`&lt;br /&gt;`}),`.`]}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsx)(`span`,{id:`method_getErrorNotification`}),`
`,(0,n.jsx)(t.h3,{id:`geterrornotification`,children:`getErrorNotification`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`static private getErrorNotification(string  service, string  functionName, string  type, string  dateTime, mixed  message) : string`})})})})}),`
`,(0,n.jsx)(t.h5,{id:`краткое-содержание-21`,children:`Краткое содержание`}),`
`,(0,n.jsx)(t.p,{children:`Генерирует HTML-уведомление об ошибке для указанного модуля и функции.`}),`
`,(0,n.jsx)(t.h5,{id:`описание-17`,children:`Описание`}),`
`,(0,n.jsx)(t.p,{children:`Формирует содержимое уведомления с информацией о модуле, функции, типе ошибки, дате и времени, а также
сообщением об ошибке.`}),`
`,(0,n.jsx)(t.h5,{id:`свойства-14`,children:`Свойства:`}),`
`,(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`Название`}),(0,n.jsx)(t.th,{children:`Тип`}),(0,n.jsx)(t.th,{children:`По умолчанию`})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:`$service`})}),(0,n.jsx)(t.td,{children:`string`}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:`$functionName`})}),(0,n.jsx)(t.td,{children:`string`}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:`$type`})}),(0,n.jsx)(t.td,{children:`string`}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:`$dateTime`})}),(0,n.jsx)(t.td,{children:`string`}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:`$message`})}),(0,n.jsx)(t.td,{children:`mixed`}),(0,n.jsx)(t.td,{})]})]})]}),`
`,(0,n.jsx)(t.h5,{id:`возвращает-20`,children:`Возвращает:`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`string`})})})})}),`
`,(0,n.jsx)(t.p,{children:`Возвращает сгенерированное HTML-уведомление с детализированной информацией об ошибке.`}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsx)(`span`,{id:`method_telegramLog`}),`
`,(0,n.jsx)(t.h3,{id:`telegramlog`,children:`telegramLog`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`static private telegramLog(array  message, string  type) : void`})})})})}),`
`,(0,n.jsx)(t.h5,{id:`краткое-содержание-22`,children:`Краткое содержание`}),`
`,(0,n.jsx)(t.p,{children:`Отправляет лог-сообщение в Telegram.`}),`
`,(0,n.jsx)(t.h5,{id:`описание-18`,children:`Описание`}),`
`,(0,n.jsx)(t.p,{children:`Функция формирует и отправляет сообщение с логом в указанный Telegram-чат,
проверяя настройки и типы логов, допустимые для отправки.
Если отправка не удалась, сообщение об ошибке записывается в лог приложения.`}),`
`,(0,n.jsx)(t.h5,{id:`свойства-15`,children:`Свойства:`}),`
`,(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`Название`}),(0,n.jsx)(t.th,{children:`Тип`}),(0,n.jsx)(t.th,{children:`По умолчанию`})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:`$message`})}),(0,n.jsx)(t.td,{children:`array`}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:`$type`})}),(0,n.jsx)(t.td,{children:`string`}),(0,n.jsx)(t.td,{})]})]})]}),`
`,(0,n.jsx)(t.h5,{id:`ошибки-11`,children:`Ошибки:`}),`
`,(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`Тип`}),(0,n.jsx)(t.th,{children:`Описание`})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`\\RuntimeException`}),(0,n.jsx)(t.td,{children:`В случае ошибки HTTP-запроса или сбоя при работе с Telegram API.`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`\\JsonException|\\Throwable`}),(0,n.jsx)(t.td,{children:`При возникновении ошибок в процессе работы с JSON или других исключений.`})]})]})]}),`
`,(0,n.jsx)(t.h5,{id:`возвращает-21`,children:`Возвращает:`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`void`})})})})}),`
`,(0,n.jsx)(t.p,{children:`Функция ничего не возвращает.`})]})}function l(e={}){let{wrapper:t}=e.components||{};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}export{a as _markdown,l as default,r as frontmatter,i as lastModified,o as structuredData,s as toc};