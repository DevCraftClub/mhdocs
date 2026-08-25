import{r as e}from"./rolldown-runtime-QTnfLwEv.js";import{t}from"./jsx-runtime-By8HlURe.js";var n=e(t()),r={title:`Класс: LogGenerator`,description:`Документация по плагину класс: loggenerator для DLE.`},i=new Date(1787654208e3),a=`

## Краткое содержание: [#краткое-содержание]

Центральный генератор логов: файлы, Telegram и база данных.

***

### Свойства [#свойства]

* private $[telegram\\_bot](#property_telegram_bot)
* private $[telegram\\_type](#property_telegram_type)

***

### Методы [#методы]

* public [init()](#method_init)
* public [for()](#method_for)
* public [isDebugEnabled()](#method_isDebugEnabled)
* public [debug()](#method_debug)
* public [dispatchLog()](#method_dispatchLog)
* public [resolveCallerContext()](#method_resolveCallerContext)
* public [isLoggingEnabled()](#method_isLoggingEnabled)
* public [setLogs()](#method_setLogs)
* public [setTelegramSend()](#method_setTelegramSend)
* public [isTelegramSend()](#method_isTelegramSend)
* public [setTelegramChannel()](#method_setTelegramChannel)
* public [telegramChannel()](#method_telegramChannel)
* public [setTelegramBot()](#method_setTelegramBot)
* public [telegramBot()](#method_telegramBot)
* public [setTelegramType()](#method_setTelegramType)
* public [telegramType()](#method_telegramType)
* public [allowedTypes()](#method_allowedTypes)
* public [allowedType()](#method_allowedType)
* public [setDbLogs()](#method_setDbLogs)
* public [isDbLogs()](#method_isDbLogs)
* private [logLevelForType()](#method_logLevelForType)
* private [createLogDirectory()](#method_createLogDirectory)
* private [errorNotificationText()](#method_errorNotificationText)
* private [preventCurlFile()](#method_preventCurlFile)
* private [persistDebugLog()](#method_persistDebugLog)
* private [encodeDebugPayload()](#method_encodeDebugPayload)
* private [writeFileLog()](#method_writeFileLog)
* private [fileLog()](#method_fileLog)
* private [telegramLog()](#method_telegramLog)
* private [dbLog()](#method_dbLog)
* private [normalizeLogValue()](#method_normalizeLogValue)
* private [formatMessage()](#method_formatMessage)
* private [eventTime()](#method_eventTime)

***

### Подробности [#подробности]

* Путь: \`devcraft/src/classes/Logging/LogGenerator.php\`

***

## Детали [#детали]

### Свойства [#свойства-1]

<span id="property_telegram_bot" />

#### $telegram\\_bot [#telegram_bot]

Центральный генератор логов: файлы, Telegram и база данных.

<span id="property_telegram_type" />

#### $telegram\\_type [#telegram_type]

Типы логов, допустимые для отправки в Telegram.

### Методы [#методы-1]

<span id="method_init" />

### init() [#init]

Инициализирует настройки логирования из конфигурации DevCraft.

**С версии:** 173.3.0

<span id="method_for" />

### for() [#for]

Создаёт контекстный логгер для указанного модуля.

**С версии:** 200.4.0

**Параметры:**

* \`$module\` — Имя модуля или сервиса.

**Возвращает:** \`ContextLogger\` — Экземпляр логгера с привязанным контекстом.

<span id="method_isDebugEnabled" />

### isDebugEnabled() [#isdebugenabled]

Проверяет, включён ли режим отладочного логирования.

**С версии:** 200.4.0

**Возвращает:** \`bool\` — true при активной сессии dc\\_debug или настройке debug.

<span id="method_debug" />

### debug() [#debug]

Записывает отладочное сообщение в error\\_log и опционально в каналы логирования.

**С версии:** 200.4.0

**Параметры:**

* \`$channel\` — Имя канала или модуля.
* \`$message\` — Текст или структура сообщения.

<span id="method_dispatchLog" />

### dispatchLog() [#dispatchlog]

Генерирует лог при ошибке или другой значимой ситуации.

**С версии:** 170.2.10

**Параметры:**

* \`$plugin\` — Название плагина или модуля.
* \`$functionName\` — Имя функции или метода-источника.
* \`$message\` — Сообщение о событии.
* \`$type\` — Тип события (error, info, warn и т. д.).

<span id="method_resolveCallerContext" />

### resolveCallerContext() [#resolvecallercontext]

Определяет имя вызывающего метода по стеку вызовов.

**С версии:** 200.4.0

**Параметры:**

* \`$skipClasses\` — Классы, которые следует пропустить.

**Возвращает:** \`string\` — Строка вида ClassName::method или file::closure.

<span id="method_isLoggingEnabled" />

### isLoggingEnabled() [#isloggingenabled]

Проверяет, включено ли логирование в файлы и каналы.

**С версии:** 173.3.0

**Возвращает:** \`bool\` — true, если логирование активно.

<span id="method_setLogs" />

### setLogs() [#setlogs]

Устанавливает состояние логирования.

**С версии:** 173.3.0

**Параметры:**

* \`$logs\` — Индикатор включения логирования.

<span id="method_setTelegramSend" />

### setTelegramSend() [#settelegramsend]

Устанавливает флаг отправки логов через Telegram.

**С версии:** 173.3.0

**Параметры:**

* \`$telegram_send\` — true — включить отправку.

<span id="method_isTelegramSend" />

### isTelegramSend() [#istelegramsend]

Проверяет, включена ли отправка логов через Telegram.

**С версии:** 173.3.0

**Возвращает:** \`bool\` — true при активной отправке и включённом логировании.

<span id="method_setTelegramChannel" />

### setTelegramChannel() [#settelegramchannel]

Устанавливает идентификатор Telegram-канала.

**С версии:** 173.3.0

**Параметры:**

* \`$telegram_channel\` — ID, имя канала или null.

<span id="method_telegramChannel" />

### telegramChannel() [#telegramchannel]

Возвращает идентификатор Telegram-канала.

**С версии:** 173.3.0

**Возвращает:** \`int|string|null\` — ID или имя канала.

<span id="method_setTelegramBot" />

### setTelegramBot() [#settelegrambot]

Устанавливает токен Telegram-бота.

**С версии:** 173.3.0

**Параметры:**

* \`$telegram_bot\` — API-токен или null.

<span id="method_telegramBot" />

### telegramBot() [#telegrambot]

Возвращает токен Telegram-бота.

**С версии:** 173.3.0

**Возвращает:** \`string\` — Токен бота или пустая строка.

<span id="method_setTelegramType" />

### setTelegramType() [#settelegramtype]

Устанавливает фильтр типов логов для Telegram.

**С версии:** 173.3.0

**Параметры:**

* \`$telegram_type\` — Строка типов через пробел или null.

<span id="method_telegramType" />

### telegramType() [#telegramtype]

Возвращает фильтр типов логов для Telegram.

**С версии:** 173.3.0

**Возвращает:** \`string\` — Строка типов; по умолчанию all.

<span id="method_allowedTypes" />

### allowedTypes() [#allowedtypes]

Возвращает массив допустимых типов сообщений с локализованными описаниями.

**С версии:** 173.3.0

**Возвращает:** \`array<string,\` — string> Ключ типа => описание.

<span id="method_allowedType" />

### allowedType() [#allowedtype]

Возвращает локализованное описание типа лога.

**С версии:** 173.3.0

**Параметры:**

* \`$type\` — Ключ типа из allowedTypes().

**Возвращает:** \`string\` — Описание типа или исходный ключ.

<span id="method_setDbLogs" />

### setDbLogs() [#setdblogs]

Устанавливает логирование операций в базу данных.

**С версии:** 173.3.0

**Параметры:**

* \`$db_logs\` — true — сохранять логи в БД.

<span id="method_isDbLogs" />

### isDbLogs() [#isdblogs]

Проверяет, включено ли логирование в базу данных.

**С версии:** 173.3.0

**Возвращает:** \`bool\` — true, если логи пишутся в БД.

<span id="method_logLevelForType" />

### logLevelForType() [#loglevelfortype]

Сопоставляет строковый тип лога с уровнем Analog.

**С версии:** 200.4.0

**Параметры:**

* \`$type\` — Тип события.

**Возвращает:** \`int\` — Константа уровня Analog.

<span id="method_createLogDirectory" />

### createLogDirectory() [#createlogdirectory]

Создаёт директорию для логов, если она ещё не существует.

**С версии:** 173.3.0

**Параметры:**

* \`$path\` — Абсолютный путь к каталогу.

**Возвращает:** \`bool\` — true при успешном создании или существующей директории.

<span id="method_errorNotificationText" />

### errorNotificationText() [#errornotificationtext]

Формирует текстовое уведомление об ошибке создания каталога логов.

**С версии:** 173.3.0

**Параметры:**

* \`$service\` — Название модуля.
* \`$functionName\` — Имя функции.
* \`$type\` — Тип события.
* \`$dateTime\` — Дата и время.
* \`$message\` — Сообщение об ошибке.

**Возвращает:** \`string\` — Многострочный текст уведомления.

<span id="method_preventCurlFile" />

### preventCurlFile() [#preventcurlfile]

Рекурсивно заменяет объекты CURLFile на массивы для сериализации.

**С версии:** 173.3.0

**Параметры:**

* \`$message\` — Исходное значение сообщения.

**Возвращает:** \`mixed\` — Значение без CURLFile-объектов.

<span id="method_persistDebugLog" />

### persistDebugLog() [#persistdebuglog]

Сохраняет отладочный лог в файлы, Telegram и БД при включённых каналах.

**С версии:** 200.4.0

**Параметры:**

* \`$plugin\` — Имя модуля.
* \`$functionName\` — Контекст вызывающего метода.
* \`$message\` — Полезная нагрузка отладки.

<span id="method_encodeDebugPayload" />

### encodeDebugPayload() [#encodedebugpayload]

Кодирует отладочную полезную нагрузку в JSON для error\\_log.

**С версии:** 200.4.0

**Параметры:**

* \`$message\` — Текст сообщения.

**Возвращает:** \`string\` — JSON-строка или строковое представление message.

<span id="method_writeFileLog" />

### writeFileLog() [#writefilelog]

Записывает сериализованное сообщение в файл через Analog.

**С версии:** 200.4.0

**Параметры:**

* \`$file\` — Путь к лог-файлу.
* \`$message\` — Данные сообщения.
* \`$level\` — Уровень Analog.

<span id="method_fileLog" />

### fileLog() [#filelog]

Логирует сообщение в файл при включённом логировании.

**С версии:** 173.3.0

**Параметры:**

* \`$file\` — Путь к лог-файлу.
* \`$message\` — Данные сообщения.
* \`$level\` — Уровень Analog.

<span id="method_telegramLog" />

### telegramLog() [#telegramlog]

Отправляет лог-сообщение в Telegram при включённых настройках.

**С версии:** 173.3.0

**Параметры:**

* \`$type\` — Тип события.

<span id="method_dbLog" />

### dbLog() [#dblog]

Сохраняет лог в базу данных через LogRecord.

**С версии:** 173.3.0

**Параметры:**

* \`$type\` — Тип события.

<span id="method_normalizeLogValue" />

### normalizeLogValue() [#normalizelogvalue]

Приводит значение лога к строке: объекты — в массив, массивы — в JSON.

**С версии:** 200.4.0

**Параметры:**

* \`$value\` — Исходное значение.

**Возвращает:** \`string\` — Строковое представление.

<span id="method_formatMessage" />

### formatMessage() [#formatmessage]

Форматирует сообщение лога для отображения в HTML или БД.

**С версии:** 173.3.0

**Параметры:**

* \`$message\` — Строка или массив данных.

**Возвращает:** \`string\` — Отформатированное сообщение.

<span id="method_eventTime" />

### eventTime() [#eventtime]

Возвращает текущее время события логирования.

**С версии:** 200.4.0

**Возвращает:** \`DateTimeImmutable\` — Момент записи лога.
`,o={contents:[{heading:`краткое-содержание`,content:`Центральный генератор логов: файлы, Telegram и база данных.`},{heading:`свойства`,content:`private $telegram\\_bot`},{heading:`свойства`,content:`private $telegram\\_type`},{heading:`методы`,content:`public init()`},{heading:`методы`,content:`public for()`},{heading:`методы`,content:`public isDebugEnabled()`},{heading:`методы`,content:`public debug()`},{heading:`методы`,content:`public dispatchLog()`},{heading:`методы`,content:`public resolveCallerContext()`},{heading:`методы`,content:`public isLoggingEnabled()`},{heading:`методы`,content:`public setLogs()`},{heading:`методы`,content:`public setTelegramSend()`},{heading:`методы`,content:`public isTelegramSend()`},{heading:`методы`,content:`public setTelegramChannel()`},{heading:`методы`,content:`public telegramChannel()`},{heading:`методы`,content:`public setTelegramBot()`},{heading:`методы`,content:`public telegramBot()`},{heading:`методы`,content:`public setTelegramType()`},{heading:`методы`,content:`public telegramType()`},{heading:`методы`,content:`public allowedTypes()`},{heading:`методы`,content:`public allowedType()`},{heading:`методы`,content:`public setDbLogs()`},{heading:`методы`,content:`public isDbLogs()`},{heading:`методы`,content:`private logLevelForType()`},{heading:`методы`,content:`private createLogDirectory()`},{heading:`методы`,content:`private errorNotificationText()`},{heading:`методы`,content:`private preventCurlFile()`},{heading:`методы`,content:`private persistDebugLog()`},{heading:`методы`,content:`private encodeDebugPayload()`},{heading:`методы`,content:`private writeFileLog()`},{heading:`методы`,content:`private fileLog()`},{heading:`методы`,content:`private telegramLog()`},{heading:`методы`,content:`private dbLog()`},{heading:`методы`,content:`private normalizeLogValue()`},{heading:`методы`,content:`private formatMessage()`},{heading:`методы`,content:`private eventTime()`},{heading:`подробности`,content:"Путь: `devcraft/src/classes/Logging/LogGenerator.php`"},{heading:`telegram_bot`,content:`Центральный генератор логов: файлы, Telegram и база данных.`},{heading:`telegram_type`,content:`Типы логов, допустимые для отправки в Telegram.`},{heading:`init`,content:`Инициализирует настройки логирования из конфигурации DevCraft.`},{heading:`init`,content:`**С версии:** 173.3.0`},{heading:`for`,content:`Создаёт контекстный логгер для указанного модуля.`},{heading:`for`,content:`**С версии:** 200.4.0`},{heading:`for`,content:`**Параметры:**`},{heading:`for`,content:"`$module` — Имя модуля или сервиса."},{heading:`for`,content:"**Возвращает:** `ContextLogger` — Экземпляр логгера с привязанным контекстом."},{heading:`isdebugenabled`,content:`Проверяет, включён ли режим отладочного логирования.`},{heading:`isdebugenabled`,content:`**С версии:** 200.4.0`},{heading:`isdebugenabled`,content:"**Возвращает:** `bool` — true при активной сессии dc\\_debug или настройке debug."},{heading:`debug`,content:`Записывает отладочное сообщение в error\\_log и опционально в каналы логирования.`},{heading:`debug`,content:`**С версии:** 200.4.0`},{heading:`debug`,content:`**Параметры:**`},{heading:`debug`,content:"`$channel` — Имя канала или модуля."},{heading:`debug`,content:"`$message` — Текст или структура сообщения."},{heading:`dispatchlog`,content:`Генерирует лог при ошибке или другой значимой ситуации.`},{heading:`dispatchlog`,content:`**С версии:** 170.2.10`},{heading:`dispatchlog`,content:`**Параметры:**`},{heading:`dispatchlog`,content:"`$plugin` — Название плагина или модуля."},{heading:`dispatchlog`,content:"`$functionName` — Имя функции или метода-источника."},{heading:`dispatchlog`,content:"`$message` — Сообщение о событии."},{heading:`dispatchlog`,content:"`$type` — Тип события (error, info, warn и т. д.)."},{heading:`resolvecallercontext`,content:`Определяет имя вызывающего метода по стеку вызовов.`},{heading:`resolvecallercontext`,content:`**С версии:** 200.4.0`},{heading:`resolvecallercontext`,content:`**Параметры:**`},{heading:`resolvecallercontext`,content:"`$skipClasses` — Классы, которые следует пропустить."},{heading:`resolvecallercontext`,content:"**Возвращает:** `string` — Строка вида ClassName::method или file::closure."},{heading:`isloggingenabled`,content:`Проверяет, включено ли логирование в файлы и каналы.`},{heading:`isloggingenabled`,content:`**С версии:** 173.3.0`},{heading:`isloggingenabled`,content:"**Возвращает:** `bool` — true, если логирование активно."},{heading:`setlogs`,content:`Устанавливает состояние логирования.`},{heading:`setlogs`,content:`**С версии:** 173.3.0`},{heading:`setlogs`,content:`**Параметры:**`},{heading:`setlogs`,content:"`$logs` — Индикатор включения логирования."},{heading:`settelegramsend`,content:`Устанавливает флаг отправки логов через Telegram.`},{heading:`settelegramsend`,content:`**С версии:** 173.3.0`},{heading:`settelegramsend`,content:`**Параметры:**`},{heading:`settelegramsend`,content:"`$telegram_send` — true — включить отправку."},{heading:`istelegramsend`,content:`Проверяет, включена ли отправка логов через Telegram.`},{heading:`istelegramsend`,content:`**С версии:** 173.3.0`},{heading:`istelegramsend`,content:"**Возвращает:** `bool` — true при активной отправке и включённом логировании."},{heading:`settelegramchannel`,content:`Устанавливает идентификатор Telegram-канала.`},{heading:`settelegramchannel`,content:`**С версии:** 173.3.0`},{heading:`settelegramchannel`,content:`**Параметры:**`},{heading:`settelegramchannel`,content:"`$telegram_channel` — ID, имя канала или null."},{heading:`telegramchannel`,content:`Возвращает идентификатор Telegram-канала.`},{heading:`telegramchannel`,content:`**С версии:** 173.3.0`},{heading:`telegramchannel`,content:"**Возвращает:** `int|string|null` — ID или имя канала."},{heading:`settelegrambot`,content:`Устанавливает токен Telegram-бота.`},{heading:`settelegrambot`,content:`**С версии:** 173.3.0`},{heading:`settelegrambot`,content:`**Параметры:**`},{heading:`settelegrambot`,content:"`$telegram_bot` — API-токен или null."},{heading:`telegrambot`,content:`Возвращает токен Telegram-бота.`},{heading:`telegrambot`,content:`**С версии:** 173.3.0`},{heading:`telegrambot`,content:"**Возвращает:** `string` — Токен бота или пустая строка."},{heading:`settelegramtype`,content:`Устанавливает фильтр типов логов для Telegram.`},{heading:`settelegramtype`,content:`**С версии:** 173.3.0`},{heading:`settelegramtype`,content:`**Параметры:**`},{heading:`settelegramtype`,content:"`$telegram_type` — Строка типов через пробел или null."},{heading:`telegramtype`,content:`Возвращает фильтр типов логов для Telegram.`},{heading:`telegramtype`,content:`**С версии:** 173.3.0`},{heading:`telegramtype`,content:"**Возвращает:** `string` — Строка типов; по умолчанию all."},{heading:`allowedtypes`,content:`Возвращает массив допустимых типов сообщений с локализованными описаниями.`},{heading:`allowedtypes`,content:`**С версии:** 173.3.0`},{heading:`allowedtypes`,content:"**Возвращает:** `array<string,` — string> Ключ типа => описание."},{heading:`allowedtype`,content:`Возвращает локализованное описание типа лога.`},{heading:`allowedtype`,content:`**С версии:** 173.3.0`},{heading:`allowedtype`,content:`**Параметры:**`},{heading:`allowedtype`,content:"`$type` — Ключ типа из allowedTypes()."},{heading:`allowedtype`,content:"**Возвращает:** `string` — Описание типа или исходный ключ."},{heading:`setdblogs`,content:`Устанавливает логирование операций в базу данных.`},{heading:`setdblogs`,content:`**С версии:** 173.3.0`},{heading:`setdblogs`,content:`**Параметры:**`},{heading:`setdblogs`,content:"`$db_logs` — true — сохранять логи в БД."},{heading:`isdblogs`,content:`Проверяет, включено ли логирование в базу данных.`},{heading:`isdblogs`,content:`**С версии:** 173.3.0`},{heading:`isdblogs`,content:"**Возвращает:** `bool` — true, если логи пишутся в БД."},{heading:`loglevelfortype`,content:`Сопоставляет строковый тип лога с уровнем Analog.`},{heading:`loglevelfortype`,content:`**С версии:** 200.4.0`},{heading:`loglevelfortype`,content:`**Параметры:**`},{heading:`loglevelfortype`,content:"`$type` — Тип события."},{heading:`loglevelfortype`,content:"**Возвращает:** `int` — Константа уровня Analog."},{heading:`createlogdirectory`,content:`Создаёт директорию для логов, если она ещё не существует.`},{heading:`createlogdirectory`,content:`**С версии:** 173.3.0`},{heading:`createlogdirectory`,content:`**Параметры:**`},{heading:`createlogdirectory`,content:"`$path` — Абсолютный путь к каталогу."},{heading:`createlogdirectory`,content:"**Возвращает:** `bool` — true при успешном создании или существующей директории."},{heading:`errornotificationtext`,content:`Формирует текстовое уведомление об ошибке создания каталога логов.`},{heading:`errornotificationtext`,content:`**С версии:** 173.3.0`},{heading:`errornotificationtext`,content:`**Параметры:**`},{heading:`errornotificationtext`,content:"`$service` — Название модуля."},{heading:`errornotificationtext`,content:"`$functionName` — Имя функции."},{heading:`errornotificationtext`,content:"`$type` — Тип события."},{heading:`errornotificationtext`,content:"`$dateTime` — Дата и время."},{heading:`errornotificationtext`,content:"`$message` — Сообщение об ошибке."},{heading:`errornotificationtext`,content:"**Возвращает:** `string` — Многострочный текст уведомления."},{heading:`preventcurlfile`,content:`Рекурсивно заменяет объекты CURLFile на массивы для сериализации.`},{heading:`preventcurlfile`,content:`**С версии:** 173.3.0`},{heading:`preventcurlfile`,content:`**Параметры:**`},{heading:`preventcurlfile`,content:"`$message` — Исходное значение сообщения."},{heading:`preventcurlfile`,content:"**Возвращает:** `mixed` — Значение без CURLFile-объектов."},{heading:`persistdebuglog`,content:`Сохраняет отладочный лог в файлы, Telegram и БД при включённых каналах.`},{heading:`persistdebuglog`,content:`**С версии:** 200.4.0`},{heading:`persistdebuglog`,content:`**Параметры:**`},{heading:`persistdebuglog`,content:"`$plugin` — Имя модуля."},{heading:`persistdebuglog`,content:"`$functionName` — Контекст вызывающего метода."},{heading:`persistdebuglog`,content:"`$message` — Полезная нагрузка отладки."},{heading:`encodedebugpayload`,content:`Кодирует отладочную полезную нагрузку в JSON для error\\_log.`},{heading:`encodedebugpayload`,content:`**С версии:** 200.4.0`},{heading:`encodedebugpayload`,content:`**Параметры:**`},{heading:`encodedebugpayload`,content:"`$message` — Текст сообщения."},{heading:`encodedebugpayload`,content:"**Возвращает:** `string` — JSON-строка или строковое представление message."},{heading:`writefilelog`,content:`Записывает сериализованное сообщение в файл через Analog.`},{heading:`writefilelog`,content:`**С версии:** 200.4.0`},{heading:`writefilelog`,content:`**Параметры:**`},{heading:`writefilelog`,content:"`$file` — Путь к лог-файлу."},{heading:`writefilelog`,content:"`$message` — Данные сообщения."},{heading:`writefilelog`,content:"`$level` — Уровень Analog."},{heading:`filelog`,content:`Логирует сообщение в файл при включённом логировании.`},{heading:`filelog`,content:`**С версии:** 173.3.0`},{heading:`filelog`,content:`**Параметры:**`},{heading:`filelog`,content:"`$file` — Путь к лог-файлу."},{heading:`filelog`,content:"`$message` — Данные сообщения."},{heading:`filelog`,content:"`$level` — Уровень Analog."},{heading:`telegramlog`,content:`Отправляет лог-сообщение в Telegram при включённых настройках.`},{heading:`telegramlog`,content:`**С версии:** 173.3.0`},{heading:`telegramlog`,content:`**Параметры:**`},{heading:`telegramlog`,content:"`$type` — Тип события."},{heading:`dblog`,content:`Сохраняет лог в базу данных через LogRecord.`},{heading:`dblog`,content:`**С версии:** 173.3.0`},{heading:`dblog`,content:`**Параметры:**`},{heading:`dblog`,content:"`$type` — Тип события."},{heading:`normalizelogvalue`,content:`Приводит значение лога к строке: объекты — в массив, массивы — в JSON.`},{heading:`normalizelogvalue`,content:`**С версии:** 200.4.0`},{heading:`normalizelogvalue`,content:`**Параметры:**`},{heading:`normalizelogvalue`,content:"`$value` — Исходное значение."},{heading:`normalizelogvalue`,content:"**Возвращает:** `string` — Строковое представление."},{heading:`formatmessage`,content:`Форматирует сообщение лога для отображения в HTML или БД.`},{heading:`formatmessage`,content:`**С версии:** 173.3.0`},{heading:`formatmessage`,content:`**Параметры:**`},{heading:`formatmessage`,content:"`$message` — Строка или массив данных."},{heading:`formatmessage`,content:"**Возвращает:** `string` — Отформатированное сообщение."},{heading:`eventtime`,content:`Возвращает текущее время события логирования.`},{heading:`eventtime`,content:`**С версии:** 200.4.0`},{heading:`eventtime`,content:"**Возвращает:** `DateTimeImmutable` — Момент записи лога."}],headings:[{id:`краткое-содержание`,content:`Краткое содержание:`},{id:`свойства`,content:`Свойства`},{id:`методы`,content:`Методы`},{id:`подробности`,content:`Подробности`},{id:`детали`,content:`Детали`},{id:`свойства-1`,content:`Свойства`},{id:`telegram_bot`,content:`$telegram_bot`},{id:`telegram_type`,content:`$telegram_type`},{id:`методы-1`,content:`Методы`},{id:`init`,content:`init()`},{id:`for`,content:`for()`},{id:`isdebugenabled`,content:`isDebugEnabled()`},{id:`debug`,content:`debug()`},{id:`dispatchlog`,content:`dispatchLog()`},{id:`resolvecallercontext`,content:`resolveCallerContext()`},{id:`isloggingenabled`,content:`isLoggingEnabled()`},{id:`setlogs`,content:`setLogs()`},{id:`settelegramsend`,content:`setTelegramSend()`},{id:`istelegramsend`,content:`isTelegramSend()`},{id:`settelegramchannel`,content:`setTelegramChannel()`},{id:`telegramchannel`,content:`telegramChannel()`},{id:`settelegrambot`,content:`setTelegramBot()`},{id:`telegrambot`,content:`telegramBot()`},{id:`settelegramtype`,content:`setTelegramType()`},{id:`telegramtype`,content:`telegramType()`},{id:`allowedtypes`,content:`allowedTypes()`},{id:`allowedtype`,content:`allowedType()`},{id:`setdblogs`,content:`setDbLogs()`},{id:`isdblogs`,content:`isDbLogs()`},{id:`loglevelfortype`,content:`logLevelForType()`},{id:`createlogdirectory`,content:`createLogDirectory()`},{id:`errornotificationtext`,content:`errorNotificationText()`},{id:`preventcurlfile`,content:`preventCurlFile()`},{id:`persistdebuglog`,content:`persistDebugLog()`},{id:`encodedebugpayload`,content:`encodeDebugPayload()`},{id:`writefilelog`,content:`writeFileLog()`},{id:`filelog`,content:`fileLog()`},{id:`telegramlog`,content:`telegramLog()`},{id:`dblog`,content:`dbLog()`},{id:`normalizelogvalue`,content:`normalizeLogValue()`},{id:`formatmessage`,content:`formatMessage()`},{id:`eventtime`,content:`eventTime()`}]},s=[{depth:2,url:`#краткое-содержание`,title:(0,n.jsx)(n.Fragment,{children:`Краткое содержание:`})},{depth:3,url:`#свойства`,title:(0,n.jsx)(n.Fragment,{children:`Свойства`})},{depth:3,url:`#методы`,title:(0,n.jsx)(n.Fragment,{children:`Методы`})},{depth:3,url:`#подробности`,title:(0,n.jsx)(n.Fragment,{children:`Подробности`})},{depth:2,url:`#детали`,title:(0,n.jsx)(n.Fragment,{children:`Детали`})},{depth:3,url:`#свойства-1`,title:(0,n.jsx)(n.Fragment,{children:`Свойства`})},{depth:4,url:`#telegram_bot`,title:(0,n.jsx)(n.Fragment,{children:`$telegram_bot`})},{depth:4,url:`#telegram_type`,title:(0,n.jsx)(n.Fragment,{children:`$telegram_type`})},{depth:3,url:`#методы-1`,title:(0,n.jsx)(n.Fragment,{children:`Методы`})},{depth:3,url:`#init`,title:(0,n.jsx)(n.Fragment,{children:`init()`})},{depth:3,url:`#for`,title:(0,n.jsx)(n.Fragment,{children:`for()`})},{depth:3,url:`#isdebugenabled`,title:(0,n.jsx)(n.Fragment,{children:`isDebugEnabled()`})},{depth:3,url:`#debug`,title:(0,n.jsx)(n.Fragment,{children:`debug()`})},{depth:3,url:`#dispatchlog`,title:(0,n.jsx)(n.Fragment,{children:`dispatchLog()`})},{depth:3,url:`#resolvecallercontext`,title:(0,n.jsx)(n.Fragment,{children:`resolveCallerContext()`})},{depth:3,url:`#isloggingenabled`,title:(0,n.jsx)(n.Fragment,{children:`isLoggingEnabled()`})},{depth:3,url:`#setlogs`,title:(0,n.jsx)(n.Fragment,{children:`setLogs()`})},{depth:3,url:`#settelegramsend`,title:(0,n.jsx)(n.Fragment,{children:`setTelegramSend()`})},{depth:3,url:`#istelegramsend`,title:(0,n.jsx)(n.Fragment,{children:`isTelegramSend()`})},{depth:3,url:`#settelegramchannel`,title:(0,n.jsx)(n.Fragment,{children:`setTelegramChannel()`})},{depth:3,url:`#telegramchannel`,title:(0,n.jsx)(n.Fragment,{children:`telegramChannel()`})},{depth:3,url:`#settelegrambot`,title:(0,n.jsx)(n.Fragment,{children:`setTelegramBot()`})},{depth:3,url:`#telegrambot`,title:(0,n.jsx)(n.Fragment,{children:`telegramBot()`})},{depth:3,url:`#settelegramtype`,title:(0,n.jsx)(n.Fragment,{children:`setTelegramType()`})},{depth:3,url:`#telegramtype`,title:(0,n.jsx)(n.Fragment,{children:`telegramType()`})},{depth:3,url:`#allowedtypes`,title:(0,n.jsx)(n.Fragment,{children:`allowedTypes()`})},{depth:3,url:`#allowedtype`,title:(0,n.jsx)(n.Fragment,{children:`allowedType()`})},{depth:3,url:`#setdblogs`,title:(0,n.jsx)(n.Fragment,{children:`setDbLogs()`})},{depth:3,url:`#isdblogs`,title:(0,n.jsx)(n.Fragment,{children:`isDbLogs()`})},{depth:3,url:`#loglevelfortype`,title:(0,n.jsx)(n.Fragment,{children:`logLevelForType()`})},{depth:3,url:`#createlogdirectory`,title:(0,n.jsx)(n.Fragment,{children:`createLogDirectory()`})},{depth:3,url:`#errornotificationtext`,title:(0,n.jsx)(n.Fragment,{children:`errorNotificationText()`})},{depth:3,url:`#preventcurlfile`,title:(0,n.jsx)(n.Fragment,{children:`preventCurlFile()`})},{depth:3,url:`#persistdebuglog`,title:(0,n.jsx)(n.Fragment,{children:`persistDebugLog()`})},{depth:3,url:`#encodedebugpayload`,title:(0,n.jsx)(n.Fragment,{children:`encodeDebugPayload()`})},{depth:3,url:`#writefilelog`,title:(0,n.jsx)(n.Fragment,{children:`writeFileLog()`})},{depth:3,url:`#filelog`,title:(0,n.jsx)(n.Fragment,{children:`fileLog()`})},{depth:3,url:`#telegramlog`,title:(0,n.jsx)(n.Fragment,{children:`telegramLog()`})},{depth:3,url:`#dblog`,title:(0,n.jsx)(n.Fragment,{children:`dbLog()`})},{depth:3,url:`#normalizelogvalue`,title:(0,n.jsx)(n.Fragment,{children:`normalizeLogValue()`})},{depth:3,url:`#formatmessage`,title:(0,n.jsx)(n.Fragment,{children:`formatMessage()`})},{depth:3,url:`#eventtime`,title:(0,n.jsx)(n.Fragment,{children:`eventTime()`})}];function c(e){let t={a:`a`,code:`code`,h2:`h2`,h3:`h3`,h4:`h4`,hr:`hr`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h2,{id:`краткое-содержание`,children:`Краткое содержание:`}),`
`,(0,n.jsx)(t.p,{children:`Центральный генератор логов: файлы, Telegram и база данных.`}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsx)(t.h3,{id:`свойства`,children:`Свойства`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[`private $`,(0,n.jsx)(t.a,{href:`#property_telegram_bot`,children:`telegram_bot`})]}),`
`,(0,n.jsxs)(t.li,{children:[`private $`,(0,n.jsx)(t.a,{href:`#property_telegram_type`,children:`telegram_type`})]}),`
`]}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsx)(t.h3,{id:`методы`,children:`Методы`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method_init`,children:`init()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method_for`,children:`for()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method_isDebugEnabled`,children:`isDebugEnabled()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method_debug`,children:`debug()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method_dispatchLog`,children:`dispatchLog()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method_resolveCallerContext`,children:`resolveCallerContext()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method_isLoggingEnabled`,children:`isLoggingEnabled()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method_setLogs`,children:`setLogs()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method_setTelegramSend`,children:`setTelegramSend()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method_isTelegramSend`,children:`isTelegramSend()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method_setTelegramChannel`,children:`setTelegramChannel()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method_telegramChannel`,children:`telegramChannel()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method_setTelegramBot`,children:`setTelegramBot()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method_telegramBot`,children:`telegramBot()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method_setTelegramType`,children:`setTelegramType()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method_telegramType`,children:`telegramType()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method_allowedTypes`,children:`allowedTypes()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method_allowedType`,children:`allowedType()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method_setDbLogs`,children:`setDbLogs()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method_isDbLogs`,children:`isDbLogs()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`private `,(0,n.jsx)(t.a,{href:`#method_logLevelForType`,children:`logLevelForType()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`private `,(0,n.jsx)(t.a,{href:`#method_createLogDirectory`,children:`createLogDirectory()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`private `,(0,n.jsx)(t.a,{href:`#method_errorNotificationText`,children:`errorNotificationText()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`private `,(0,n.jsx)(t.a,{href:`#method_preventCurlFile`,children:`preventCurlFile()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`private `,(0,n.jsx)(t.a,{href:`#method_persistDebugLog`,children:`persistDebugLog()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`private `,(0,n.jsx)(t.a,{href:`#method_encodeDebugPayload`,children:`encodeDebugPayload()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`private `,(0,n.jsx)(t.a,{href:`#method_writeFileLog`,children:`writeFileLog()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`private `,(0,n.jsx)(t.a,{href:`#method_fileLog`,children:`fileLog()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`private `,(0,n.jsx)(t.a,{href:`#method_telegramLog`,children:`telegramLog()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`private `,(0,n.jsx)(t.a,{href:`#method_dbLog`,children:`dbLog()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`private `,(0,n.jsx)(t.a,{href:`#method_normalizeLogValue`,children:`normalizeLogValue()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`private `,(0,n.jsx)(t.a,{href:`#method_formatMessage`,children:`formatMessage()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`private `,(0,n.jsx)(t.a,{href:`#method_eventTime`,children:`eventTime()`})]}),`
`]}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsx)(t.h3,{id:`подробности`,children:`Подробности`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[`Путь: `,(0,n.jsx)(t.code,{children:`devcraft/src/classes/Logging/LogGenerator.php`})]}),`
`]}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsx)(t.h2,{id:`детали`,children:`Детали`}),`
`,(0,n.jsx)(t.h3,{id:`свойства-1`,children:`Свойства`}),`
`,(0,n.jsx)(`span`,{id:`property_telegram_bot`}),`
`,(0,n.jsx)(t.h4,{id:`telegram_bot`,children:`$telegram_bot`}),`
`,(0,n.jsx)(t.p,{children:`Центральный генератор логов: файлы, Telegram и база данных.`}),`
`,(0,n.jsx)(`span`,{id:`property_telegram_type`}),`
`,(0,n.jsx)(t.h4,{id:`telegram_type`,children:`$telegram_type`}),`
`,(0,n.jsx)(t.p,{children:`Типы логов, допустимые для отправки в Telegram.`}),`
`,(0,n.jsx)(t.h3,{id:`методы-1`,children:`Методы`}),`
`,(0,n.jsx)(`span`,{id:`method_init`}),`
`,(0,n.jsx)(t.h3,{id:`init`,children:`init()`}),`
`,(0,n.jsx)(t.p,{children:`Инициализирует настройки логирования из конфигурации DevCraft.`}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 173.3.0`]}),`
`,(0,n.jsx)(`span`,{id:`method_for`}),`
`,(0,n.jsx)(t.h3,{id:`for`,children:`for()`}),`
`,(0,n.jsx)(t.p,{children:`Создаёт контекстный логгер для указанного модуля.`}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 200.4.0`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$module`}),` — Имя модуля или сервиса.`]}),`
`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`ContextLogger`}),` — Экземпляр логгера с привязанным контекстом.`]}),`
`,(0,n.jsx)(`span`,{id:`method_isDebugEnabled`}),`
`,(0,n.jsx)(t.h3,{id:`isdebugenabled`,children:`isDebugEnabled()`}),`
`,(0,n.jsx)(t.p,{children:`Проверяет, включён ли режим отладочного логирования.`}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 200.4.0`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`bool`}),` — true при активной сессии dc_debug или настройке debug.`]}),`
`,(0,n.jsx)(`span`,{id:`method_debug`}),`
`,(0,n.jsx)(t.h3,{id:`debug`,children:`debug()`}),`
`,(0,n.jsx)(t.p,{children:`Записывает отладочное сообщение в error_log и опционально в каналы логирования.`}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 200.4.0`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$channel`}),` — Имя канала или модуля.`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$message`}),` — Текст или структура сообщения.`]}),`
`]}),`
`,(0,n.jsx)(`span`,{id:`method_dispatchLog`}),`
`,(0,n.jsx)(t.h3,{id:`dispatchlog`,children:`dispatchLog()`}),`
`,(0,n.jsx)(t.p,{children:`Генерирует лог при ошибке или другой значимой ситуации.`}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 170.2.10`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$plugin`}),` — Название плагина или модуля.`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$functionName`}),` — Имя функции или метода-источника.`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$message`}),` — Сообщение о событии.`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$type`}),` — Тип события (error, info, warn и т. д.).`]}),`
`]}),`
`,(0,n.jsx)(`span`,{id:`method_resolveCallerContext`}),`
`,(0,n.jsx)(t.h3,{id:`resolvecallercontext`,children:`resolveCallerContext()`}),`
`,(0,n.jsx)(t.p,{children:`Определяет имя вызывающего метода по стеку вызовов.`}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 200.4.0`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$skipClasses`}),` — Классы, которые следует пропустить.`]}),`
`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`string`}),` — Строка вида ClassName::method или file::closure.`]}),`
`,(0,n.jsx)(`span`,{id:`method_isLoggingEnabled`}),`
`,(0,n.jsx)(t.h3,{id:`isloggingenabled`,children:`isLoggingEnabled()`}),`
`,(0,n.jsx)(t.p,{children:`Проверяет, включено ли логирование в файлы и каналы.`}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 173.3.0`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`bool`}),` — true, если логирование активно.`]}),`
`,(0,n.jsx)(`span`,{id:`method_setLogs`}),`
`,(0,n.jsx)(t.h3,{id:`setlogs`,children:`setLogs()`}),`
`,(0,n.jsx)(t.p,{children:`Устанавливает состояние логирования.`}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 173.3.0`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$logs`}),` — Индикатор включения логирования.`]}),`
`]}),`
`,(0,n.jsx)(`span`,{id:`method_setTelegramSend`}),`
`,(0,n.jsx)(t.h3,{id:`settelegramsend`,children:`setTelegramSend()`}),`
`,(0,n.jsx)(t.p,{children:`Устанавливает флаг отправки логов через Telegram.`}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 173.3.0`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$telegram_send`}),` — true — включить отправку.`]}),`
`]}),`
`,(0,n.jsx)(`span`,{id:`method_isTelegramSend`}),`
`,(0,n.jsx)(t.h3,{id:`istelegramsend`,children:`isTelegramSend()`}),`
`,(0,n.jsx)(t.p,{children:`Проверяет, включена ли отправка логов через Telegram.`}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 173.3.0`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`bool`}),` — true при активной отправке и включённом логировании.`]}),`
`,(0,n.jsx)(`span`,{id:`method_setTelegramChannel`}),`
`,(0,n.jsx)(t.h3,{id:`settelegramchannel`,children:`setTelegramChannel()`}),`
`,(0,n.jsx)(t.p,{children:`Устанавливает идентификатор Telegram-канала.`}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 173.3.0`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$telegram_channel`}),` — ID, имя канала или null.`]}),`
`]}),`
`,(0,n.jsx)(`span`,{id:`method_telegramChannel`}),`
`,(0,n.jsx)(t.h3,{id:`telegramchannel`,children:`telegramChannel()`}),`
`,(0,n.jsx)(t.p,{children:`Возвращает идентификатор Telegram-канала.`}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 173.3.0`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`int|string|null`}),` — ID или имя канала.`]}),`
`,(0,n.jsx)(`span`,{id:`method_setTelegramBot`}),`
`,(0,n.jsx)(t.h3,{id:`settelegrambot`,children:`setTelegramBot()`}),`
`,(0,n.jsx)(t.p,{children:`Устанавливает токен Telegram-бота.`}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 173.3.0`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$telegram_bot`}),` — API-токен или null.`]}),`
`]}),`
`,(0,n.jsx)(`span`,{id:`method_telegramBot`}),`
`,(0,n.jsx)(t.h3,{id:`telegrambot`,children:`telegramBot()`}),`
`,(0,n.jsx)(t.p,{children:`Возвращает токен Telegram-бота.`}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 173.3.0`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`string`}),` — Токен бота или пустая строка.`]}),`
`,(0,n.jsx)(`span`,{id:`method_setTelegramType`}),`
`,(0,n.jsx)(t.h3,{id:`settelegramtype`,children:`setTelegramType()`}),`
`,(0,n.jsx)(t.p,{children:`Устанавливает фильтр типов логов для Telegram.`}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 173.3.0`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$telegram_type`}),` — Строка типов через пробел или null.`]}),`
`]}),`
`,(0,n.jsx)(`span`,{id:`method_telegramType`}),`
`,(0,n.jsx)(t.h3,{id:`telegramtype`,children:`telegramType()`}),`
`,(0,n.jsx)(t.p,{children:`Возвращает фильтр типов логов для Telegram.`}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 173.3.0`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`string`}),` — Строка типов; по умолчанию all.`]}),`
`,(0,n.jsx)(`span`,{id:`method_allowedTypes`}),`
`,(0,n.jsx)(t.h3,{id:`allowedtypes`,children:`allowedTypes()`}),`
`,(0,n.jsx)(t.p,{children:`Возвращает массив допустимых типов сообщений с локализованными описаниями.`}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 173.3.0`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`array<string,`}),` — string> Ключ типа => описание.`]}),`
`,(0,n.jsx)(`span`,{id:`method_allowedType`}),`
`,(0,n.jsx)(t.h3,{id:`allowedtype`,children:`allowedType()`}),`
`,(0,n.jsx)(t.p,{children:`Возвращает локализованное описание типа лога.`}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 173.3.0`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$type`}),` — Ключ типа из allowedTypes().`]}),`
`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`string`}),` — Описание типа или исходный ключ.`]}),`
`,(0,n.jsx)(`span`,{id:`method_setDbLogs`}),`
`,(0,n.jsx)(t.h3,{id:`setdblogs`,children:`setDbLogs()`}),`
`,(0,n.jsx)(t.p,{children:`Устанавливает логирование операций в базу данных.`}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 173.3.0`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$db_logs`}),` — true — сохранять логи в БД.`]}),`
`]}),`
`,(0,n.jsx)(`span`,{id:`method_isDbLogs`}),`
`,(0,n.jsx)(t.h3,{id:`isdblogs`,children:`isDbLogs()`}),`
`,(0,n.jsx)(t.p,{children:`Проверяет, включено ли логирование в базу данных.`}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 173.3.0`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`bool`}),` — true, если логи пишутся в БД.`]}),`
`,(0,n.jsx)(`span`,{id:`method_logLevelForType`}),`
`,(0,n.jsx)(t.h3,{id:`loglevelfortype`,children:`logLevelForType()`}),`
`,(0,n.jsx)(t.p,{children:`Сопоставляет строковый тип лога с уровнем Analog.`}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 200.4.0`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$type`}),` — Тип события.`]}),`
`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`int`}),` — Константа уровня Analog.`]}),`
`,(0,n.jsx)(`span`,{id:`method_createLogDirectory`}),`
`,(0,n.jsx)(t.h3,{id:`createlogdirectory`,children:`createLogDirectory()`}),`
`,(0,n.jsx)(t.p,{children:`Создаёт директорию для логов, если она ещё не существует.`}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 173.3.0`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$path`}),` — Абсолютный путь к каталогу.`]}),`
`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`bool`}),` — true при успешном создании или существующей директории.`]}),`
`,(0,n.jsx)(`span`,{id:`method_errorNotificationText`}),`
`,(0,n.jsx)(t.h3,{id:`errornotificationtext`,children:`errorNotificationText()`}),`
`,(0,n.jsx)(t.p,{children:`Формирует текстовое уведомление об ошибке создания каталога логов.`}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 173.3.0`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$service`}),` — Название модуля.`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$functionName`}),` — Имя функции.`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$type`}),` — Тип события.`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$dateTime`}),` — Дата и время.`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$message`}),` — Сообщение об ошибке.`]}),`
`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`string`}),` — Многострочный текст уведомления.`]}),`
`,(0,n.jsx)(`span`,{id:`method_preventCurlFile`}),`
`,(0,n.jsx)(t.h3,{id:`preventcurlfile`,children:`preventCurlFile()`}),`
`,(0,n.jsx)(t.p,{children:`Рекурсивно заменяет объекты CURLFile на массивы для сериализации.`}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 173.3.0`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$message`}),` — Исходное значение сообщения.`]}),`
`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`mixed`}),` — Значение без CURLFile-объектов.`]}),`
`,(0,n.jsx)(`span`,{id:`method_persistDebugLog`}),`
`,(0,n.jsx)(t.h3,{id:`persistdebuglog`,children:`persistDebugLog()`}),`
`,(0,n.jsx)(t.p,{children:`Сохраняет отладочный лог в файлы, Telegram и БД при включённых каналах.`}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 200.4.0`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$plugin`}),` — Имя модуля.`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$functionName`}),` — Контекст вызывающего метода.`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$message`}),` — Полезная нагрузка отладки.`]}),`
`]}),`
`,(0,n.jsx)(`span`,{id:`method_encodeDebugPayload`}),`
`,(0,n.jsx)(t.h3,{id:`encodedebugpayload`,children:`encodeDebugPayload()`}),`
`,(0,n.jsx)(t.p,{children:`Кодирует отладочную полезную нагрузку в JSON для error_log.`}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 200.4.0`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$message`}),` — Текст сообщения.`]}),`
`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`string`}),` — JSON-строка или строковое представление message.`]}),`
`,(0,n.jsx)(`span`,{id:`method_writeFileLog`}),`
`,(0,n.jsx)(t.h3,{id:`writefilelog`,children:`writeFileLog()`}),`
`,(0,n.jsx)(t.p,{children:`Записывает сериализованное сообщение в файл через Analog.`}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 200.4.0`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$file`}),` — Путь к лог-файлу.`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$message`}),` — Данные сообщения.`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$level`}),` — Уровень Analog.`]}),`
`]}),`
`,(0,n.jsx)(`span`,{id:`method_fileLog`}),`
`,(0,n.jsx)(t.h3,{id:`filelog`,children:`fileLog()`}),`
`,(0,n.jsx)(t.p,{children:`Логирует сообщение в файл при включённом логировании.`}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 173.3.0`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$file`}),` — Путь к лог-файлу.`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$message`}),` — Данные сообщения.`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$level`}),` — Уровень Analog.`]}),`
`]}),`
`,(0,n.jsx)(`span`,{id:`method_telegramLog`}),`
`,(0,n.jsx)(t.h3,{id:`telegramlog`,children:`telegramLog()`}),`
`,(0,n.jsx)(t.p,{children:`Отправляет лог-сообщение в Telegram при включённых настройках.`}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 173.3.0`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$type`}),` — Тип события.`]}),`
`]}),`
`,(0,n.jsx)(`span`,{id:`method_dbLog`}),`
`,(0,n.jsx)(t.h3,{id:`dblog`,children:`dbLog()`}),`
`,(0,n.jsx)(t.p,{children:`Сохраняет лог в базу данных через LogRecord.`}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 173.3.0`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$type`}),` — Тип события.`]}),`
`]}),`
`,(0,n.jsx)(`span`,{id:`method_normalizeLogValue`}),`
`,(0,n.jsx)(t.h3,{id:`normalizelogvalue`,children:`normalizeLogValue()`}),`
`,(0,n.jsx)(t.p,{children:`Приводит значение лога к строке: объекты — в массив, массивы — в JSON.`}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 200.4.0`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$value`}),` — Исходное значение.`]}),`
`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`string`}),` — Строковое представление.`]}),`
`,(0,n.jsx)(`span`,{id:`method_formatMessage`}),`
`,(0,n.jsx)(t.h3,{id:`formatmessage`,children:`formatMessage()`}),`
`,(0,n.jsx)(t.p,{children:`Форматирует сообщение лога для отображения в HTML или БД.`}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 173.3.0`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$message`}),` — Строка или массив данных.`]}),`
`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`string`}),` — Отформатированное сообщение.`]}),`
`,(0,n.jsx)(`span`,{id:`method_eventTime`}),`
`,(0,n.jsx)(t.h3,{id:`eventtime`,children:`eventTime()`}),`
`,(0,n.jsx)(t.p,{children:`Возвращает текущее время события логирования.`}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 200.4.0`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`DateTimeImmutable`}),` — Момент записи лога.`]})]})}function l(e={}){let{wrapper:t}=e.components||{};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}export{a as _markdown,l as default,r as frontmatter,i as lastModified,o as structuredData,s as toc};