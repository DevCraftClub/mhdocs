---
tags:
  - PHP
  - DLE
  - Плагин
  - Админка
title: "Класс: JsonResponse - DevCraft Admin"
description: "Документация по плагину класс: jsonresponse для DLE."
keywords: "PHP, DLE, Плагин, Админка, класс: jsonresponse, DevCraft, документация"
author: "Maxim Harder"
og:title: "Класс: JsonResponse"
og:description: "Документация по плагину класс: jsonresponse для DLE."
og:image: "https://devcraft.club/data/assets/logo_default/devcraftx2.png"
twitter:title: "Класс: JsonResponse"
twitter:description: "Документация по плагину класс: jsonresponse для DLE."
---

# Класс: JsonResponse

## Краткое содержание:

JSON-ответ AJAX с единым контрактом success/data/notice/error.

---

### Свойства
*Нет публичных свойств.*

---

### Методы
* public [__construct()](#method___construct)
* public [toast()](#method_toast)
* public [ok()](#method_ok)
* public [notify()](#method_notify)
* public [fail()](#method_fail)
* private [noticePayload()](#method_noticePayload)
* private [build()](#method_build)
* public [send()](#method_send)

---

### Подробности

* Путь: `devcraft/src/classes/Http/JsonResponse.php`

---

## Детали

### Методы

[](){#method___construct}
### __construct()

Создаёт JSON-ответ с заданным телом и HTTP-кодом.

**С версии:** 200.4.0

**Параметры:**
- `$status_code` — HTTP-статус.

[](){#method_toast}
### toast()

Формирует успешный ответ с toast-уведомлением.

**С версии:** 200.4.0

**Параметры:**
- `$message` — Текст toast.
- `$status` — HTTP-статус.

**Возвращает:** `self` — Экземпляр JSON-ответа.

[](){#method_ok}
### ok()

Формирует успешный ответ без обязательного уведомления.

**С версии:** 200.4.0

**Параметры:**
- `$toastMessage` — Необязательный текст toast.

**Возвращает:** `self` — Экземпляр JSON-ответа.

[](){#method_notify}
### notify()

Формирует ответ с notify-блоком в интерфейсе.

**С версии:** 200.4.0

**Параметры:**
- `$title` — Заголовок уведомления.
- `$message` — Текст уведомления.
- `$type` — Тип уведомления (см. TYPE_*).
- `$status` — HTTP-статус.
- `$success` — Флаг успеха операции.

**Возвращает:** `self` — Экземпляр JSON-ответа.

[](){#method_fail}
### fail()

Формирует ответ об ошибке с notify и структурой error.

**С версии:** 200.4.0

**Параметры:**
- `$title` — Заголовок ошибки.
- `$message` — Текст ошибки.
- `$code` — Машиночитаемый код ошибки.
- `$status` — HTTP-статус.

**Возвращает:** `self` — Экземпляр JSON-ответа.

[](){#method_noticePayload}
### noticePayload()

Собирает структуру notice для toast или notify.

**С версии:** 200.4.0

**Параметры:**
- `$channel` — Канал уведомления.
- `$message` — Текст сообщения.
- `$title` — Заголовок (для notify).
- `$type` — Тип уведомления.

**Возвращает:** `array{channel: string, message: string, title?: string, type?: string}` — Payload notice.

[](){#method_build}
### build()

Создаёт экземпляр ответа из готового тела.

**С версии:** 200.4.0

**Параметры:**
- `$status` — HTTP-статус.

**Возвращает:** `self` — Экземпляр JSON-ответа.

[](){#method_send}
### send()

Отправляет JSON-ответ клиенту с заголовками и HTTP-кодом.

**С версии:** 200.4.0
