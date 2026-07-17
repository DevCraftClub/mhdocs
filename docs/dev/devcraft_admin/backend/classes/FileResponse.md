---
tags:
  - PHP
  - DLE
  - Плагин
  - Админка
title: "Класс: FileResponse - DevCraft Admin"
description: "HTTP-ответ со скачиванием файла из AJAX-handler DevCraft."
keywords: "PHP, DLE, Плагин, Админка, FileResponse, скачивание, DevCraft, документация"
author: "Maxim Harder"
og:title: "Класс: FileResponse"
og:description: "HTTP-ответ со скачиванием файла из AJAX-handler DevCraft."
og:image: "https://devcraft.club/data/assets/logo_default/devcraftx2.png"
twitter:title: "Класс: FileResponse"
twitter:description: "HTTP-ответ со скачиванием файла из AJAX-handler DevCraft."
---

# Класс: FileResponse

## Краткое содержание:

HTTP-ответ с потоковой отдачей файла (`Content-Disposition: attachment`). Альтернатива `JsonResponse` для AJAX-handler'ов, которые должны отдать файл на скачивание.

---

### Свойства
*Нет публичных свойств.*

---

### Методы
* public [__construct()](#method___construct)
* public [send()](#method_send)

---

### Подробности

* Путь: `devcraft/src/classes/Http/FileResponse.php`
* Namespace: `DevCraft\Core\Http`
* Интерфейс: `DevCraft\Core\Interfaces\ResponseInterface`
* С версии: 200.4.0

---

## Детали

### Методы

[](){#method___construct}
### __construct()

**Параметры:**
- `$filePath` — абсолютный путь к существующему файлу на диске;
- `$downloadName` — имя в заголовке; по умолчанию `basename($filePath)`;
- `$mimeType` — MIME; по умолчанию `application/octet-stream`.

[](){#method_send}
### send()

Очищает буферы вывода, отправляет заголовки и тело файла через `readfile`. Бросает `RuntimeException`, если файл недоступен.

---

## Пример

```php
use DevCraft\Core\Http\FileResponse;

return new FileResponse(
    ROOT_DIR . '/uploads/export.csv',
    'export.csv',
    'text/csv',
);
```

Для загрузки файла **на сервер** используйте [`UploadedFile`](UploadedFile.md) и [`postMultipart`](../../frontend/templates.md#multipart-загрузка-файлов).
