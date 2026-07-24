---
tags:
  - PHP
  - DLE
  - Плагин
  - Админка
title: "Класс: UploadedFile - DevCraft Admin"
description: "Обёртка над $_FILES для multipart-загрузок в админке DevCraft."
keywords: "PHP, DLE, Плагин, Админка, UploadedFile, multipart, DevCraft, документация"
author: "Maxim Harder"
og:title: "Класс: UploadedFile"
og:description: "Обёртка над $_FILES для multipart-загрузок в админке DevCraft."
og:image: "https://devcraft.club/data/assets/logo_default/devcraftx2.png"
twitter:title: "Класс: UploadedFile"
twitter:description: "Обёртка над $_FILES для multipart-загрузок в админке DevCraft."
---

# Класс: UploadedFile

## Краткое содержание:

Обёртка над элементом `$_FILES` для multipart-загрузок: валидация, проверка расширения, перенос во временный/целевой путь.

---

### Свойства
*Нет публичных свойств.*

---

### Методы
* public static [fromFilesKey()](#method_fromFilesKey)
* public [originalName()](#method_originalName)
* public [tmpName()](#method_tmpName)
* public [size()](#method_size)
* public [mime()](#method_mime)
* public [toArray()](#method_toArray)
* public [assertExtension()](#method_assertExtension)
* public [moveTo()](#method_moveTo)

---

### Подробности

* Путь: `devcraft/src/classes/Http/UploadedFile.php`
* Namespace: `DevCraft\Core\Http`

---

## Детали

### Методы

[](){#method_fromFilesKey}
### fromFilesKey()

Создаёт экземпляр из ключа `$_FILES`. Бросает `RuntimeException`, если файл не передан, код ошибки загрузки не `UPLOAD_ERR_OK` или временный файл недоступен.

**Параметры:**
- `$key` — Имя поля в `$_FILES` (например `file`).

**Возвращает:** `self`

[](){#method_originalName}
### originalName()

**Возвращает:** `string` — исходное имя файла (`basename`).

[](){#method_tmpName}
### tmpName()

**Возвращает:** `string` — путь к временному файлу PHP.

[](){#method_size}
### size()

**Возвращает:** `int` — размер в байтах.

[](){#method_mime}
### mime()

**Возвращает:** `string` — MIME из `$_FILES['type']` (не доверять слепо).

[](){#method_toArray}
### toArray()

**Возвращает:** `array` — сырой элемент `$_FILES`.

[](){#method_assertExtension}
### assertExtension()

Проверяет расширение (без точки, нижний регистр) против белого списка.

**Параметры:**
- `$allowed` — `list<string>`, например `['jpg', 'png', 'webp']`.

[](){#method_moveTo}
### moveTo()

Создаёт каталог при необходимости и вызывает `move_uploaded_file`.

**Параметры:**
- `$targetPath` — абсолютный путь назначения.

---

## Пример handler

```php
use DevCraft\Core\Http\UploadedFile;
use DevCraft\Core\Http\JsonResponse;

$uploaded = UploadedFile::fromFilesKey('file');
$uploaded->assertExtension(['jpg', 'png', 'gif', 'webp']);
$uploaded->moveTo($targetDir . '/' . $storedName);

return JsonResponse::ok(['id' => $id]);
```

Клиент: `DevCraft.Ajax.postMultipart(url, formData, onProgress?)` — см. [Шаблоны фронтенда](../../reference/front-end/templates.md#multipart-загрузка-файлов).
