---
tags:
  - PHP
  - DLE
  - Плагин
  - Админка
title: "Класс: LogGenerator - DevCraft Admin"
description: "Документация по плагину класс: loggenerator для DLE."
keywords: "PHP, DLE, Плагин, Админка, класс: loggenerator, DevCraft, документация"
author: "Maxim Harder"
og:title: "Класс: LogGenerator"
og:description: "Документация по плагину класс: loggenerator для DLE."
og:image: "https://devcraft.club/data/assets/logo_default/devcraftx2.png"
twitter:title: "Класс: LogGenerator"
twitter:description: "Документация по плагину класс: loggenerator для DLE."
---

# Класс: LogGenerator

## Краткое содержание:

Центральный генератор логов: файлы, Telegram и база данных.

---

### Свойства
* private $[telegram_bot](#property_telegram_bot)
* private $[telegram_type](#property_telegram_type)

---

### Методы
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

---

### Подробности

* Путь: `devcraft/src/classes/Logging/LogGenerator.php`

---

## Детали

### Свойства

[](){#property_telegram_bot}
#### $telegram_bot

Центральный генератор логов: файлы, Telegram и база данных.


[](){#property_telegram_type}
#### $telegram_type

Типы логов, допустимые для отправки в Telegram.


### Методы

[](){#method_init}
### init()

Инициализирует настройки логирования из конфигурации DevCraft.

**С версии:** 173.3.0

[](){#method_for}
### for()

Создаёт контекстный логгер для указанного модуля.

**С версии:** 200.4.0

**Параметры:**
- `$module` — Имя модуля или сервиса.

**Возвращает:** `ContextLogger` — Экземпляр логгера с привязанным контекстом.

[](){#method_isDebugEnabled}
### isDebugEnabled()

Проверяет, включён ли режим отладочного логирования.

**С версии:** 200.4.0

**Возвращает:** `bool` — true при активной сессии dc_debug или настройке debug.

[](){#method_debug}
### debug()

Записывает отладочное сообщение в error_log и опционально в каналы логирования.

**С версии:** 200.4.0

**Параметры:**
- `$channel` — Имя канала или модуля.
- `$message` — Текст или структура сообщения.

[](){#method_dispatchLog}
### dispatchLog()

Генерирует лог при ошибке или другой значимой ситуации.

**С версии:** 170.2.10

**Параметры:**
- `$plugin` — Название плагина или модуля.
- `$functionName` — Имя функции или метода-источника.
- `$message` — Сообщение о событии.
- `$type` — Тип события (error, info, warn и т. д.).

[](){#method_resolveCallerContext}
### resolveCallerContext()

Определяет имя вызывающего метода по стеку вызовов.

**С версии:** 200.4.0

**Параметры:**
- `$skipClasses` — Классы, которые следует пропустить.

**Возвращает:** `string` — Строка вида ClassName::method или file::closure.

[](){#method_isLoggingEnabled}
### isLoggingEnabled()

Проверяет, включено ли логирование в файлы и каналы.

**С версии:** 173.3.0

**Возвращает:** `bool` — true, если логирование активно.

[](){#method_setLogs}
### setLogs()

Устанавливает состояние логирования.

**С версии:** 173.3.0

**Параметры:**
- `$logs` — Индикатор включения логирования.

[](){#method_setTelegramSend}
### setTelegramSend()

Устанавливает флаг отправки логов через Telegram.

**С версии:** 173.3.0

**Параметры:**
- `$telegram_send` — true — включить отправку.

[](){#method_isTelegramSend}
### isTelegramSend()

Проверяет, включена ли отправка логов через Telegram.

**С версии:** 173.3.0

**Возвращает:** `bool` — true при активной отправке и включённом логировании.

[](){#method_setTelegramChannel}
### setTelegramChannel()

Устанавливает идентификатор Telegram-канала.

**С версии:** 173.3.0

**Параметры:**
- `$telegram_channel` — ID, имя канала или null.

[](){#method_telegramChannel}
### telegramChannel()

Возвращает идентификатор Telegram-канала.

**С версии:** 173.3.0

**Возвращает:** `int|string|null` — ID или имя канала.

[](){#method_setTelegramBot}
### setTelegramBot()

Устанавливает токен Telegram-бота.

**С версии:** 173.3.0

**Параметры:**
- `$telegram_bot` — API-токен или null.

[](){#method_telegramBot}
### telegramBot()

Возвращает токен Telegram-бота.

**С версии:** 173.3.0

**Возвращает:** `string` — Токен бота или пустая строка.

[](){#method_setTelegramType}
### setTelegramType()

Устанавливает фильтр типов логов для Telegram.

**С версии:** 173.3.0

**Параметры:**
- `$telegram_type` — Строка типов через пробел или null.

[](){#method_telegramType}
### telegramType()

Возвращает фильтр типов логов для Telegram.

**С версии:** 173.3.0

**Возвращает:** `string` — Строка типов; по умолчанию all.

[](){#method_allowedTypes}
### allowedTypes()

Возвращает массив допустимых типов сообщений с локализованными описаниями.

**С версии:** 173.3.0

**Возвращает:** `array<string,` — string> Ключ типа => описание.

[](){#method_allowedType}
### allowedType()

Возвращает локализованное описание типа лога.

**С версии:** 173.3.0

**Параметры:**
- `$type` — Ключ типа из allowedTypes().

**Возвращает:** `string` — Описание типа или исходный ключ.

[](){#method_setDbLogs}
### setDbLogs()

Устанавливает логирование операций в базу данных.

**С версии:** 173.3.0

**Параметры:**
- `$db_logs` — true — сохранять логи в БД.

[](){#method_isDbLogs}
### isDbLogs()

Проверяет, включено ли логирование в базу данных.

**С версии:** 173.3.0

**Возвращает:** `bool` — true, если логи пишутся в БД.

[](){#method_logLevelForType}
### logLevelForType()

Сопоставляет строковый тип лога с уровнем Analog.

**С версии:** 200.4.0

**Параметры:**
- `$type` — Тип события.

**Возвращает:** `int` — Константа уровня Analog.

[](){#method_createLogDirectory}
### createLogDirectory()

Создаёт директорию для логов, если она ещё не существует.

**С версии:** 173.3.0

**Параметры:**
- `$path` — Абсолютный путь к каталогу.

**Возвращает:** `bool` — true при успешном создании или существующей директории.

[](){#method_errorNotificationText}
### errorNotificationText()

Формирует текстовое уведомление об ошибке создания каталога логов.

**С версии:** 173.3.0

**Параметры:**
- `$service` — Название модуля.
- `$functionName` — Имя функции.
- `$type` — Тип события.
- `$dateTime` — Дата и время.
- `$message` — Сообщение об ошибке.

**Возвращает:** `string` — Многострочный текст уведомления.

[](){#method_preventCurlFile}
### preventCurlFile()

Рекурсивно заменяет объекты CURLFile на массивы для сериализации.

**С версии:** 173.3.0

**Параметры:**
- `$message` — Исходное значение сообщения.

**Возвращает:** `mixed` — Значение без CURLFile-объектов.

[](){#method_persistDebugLog}
### persistDebugLog()

Сохраняет отладочный лог в файлы, Telegram и БД при включённых каналах.

**С версии:** 200.4.0

**Параметры:**
- `$plugin` — Имя модуля.
- `$functionName` — Контекст вызывающего метода.
- `$message` — Полезная нагрузка отладки.

[](){#method_encodeDebugPayload}
### encodeDebugPayload()

Кодирует отладочную полезную нагрузку в JSON для error_log.

**С версии:** 200.4.0

**Параметры:**
- `$message` — Текст сообщения.

**Возвращает:** `string` — JSON-строка или строковое представление message.

[](){#method_writeFileLog}
### writeFileLog()

Записывает сериализованное сообщение в файл через Analog.

**С версии:** 200.4.0

**Параметры:**
- `$file` — Путь к лог-файлу.
- `$message` — Данные сообщения.
- `$level` — Уровень Analog.

[](){#method_fileLog}
### fileLog()

Логирует сообщение в файл при включённом логировании.

**С версии:** 173.3.0

**Параметры:**
- `$file` — Путь к лог-файлу.
- `$message` — Данные сообщения.
- `$level` — Уровень Analog.

[](){#method_telegramLog}
### telegramLog()

Отправляет лог-сообщение в Telegram при включённых настройках.

**С версии:** 173.3.0

**Параметры:**
- `$type` — Тип события.

[](){#method_dbLog}
### dbLog()

Сохраняет лог в базу данных через LogRecord.

**С версии:** 173.3.0

**Параметры:**
- `$type` — Тип события.

[](){#method_normalizeLogValue}
### normalizeLogValue()

Приводит значение лога к строке: объекты — в массив, массивы — в JSON.

**С версии:** 200.4.0

**Параметры:**
- `$value` — Исходное значение.

**Возвращает:** `string` — Строковое представление.

[](){#method_formatMessage}
### formatMessage()

Форматирует сообщение лога для отображения в HTML или БД.

**С версии:** 173.3.0

**Параметры:**
- `$message` — Строка или массив данных.

**Возвращает:** `string` — Отформатированное сообщение.

[](){#method_eventTime}
### eventTime()

Возвращает текущее время события логирования.

**С версии:** 200.4.0

**Возвращает:** `DateTimeImmutable` — Момент записи лога.
