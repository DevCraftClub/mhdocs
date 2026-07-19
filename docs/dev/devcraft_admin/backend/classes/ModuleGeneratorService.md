---
tags:
  - PHP
  - DLE
  - Плагин
  - Админка
title: "Класс: ModuleGeneratorService - DevCraft Admin"
description: "Документация по плагину класс: modulegeneratorservice для DLE."
keywords: "PHP, DLE, Плагин, Админка, класс: modulegeneratorservice, DevCraft, документация"
author: "Maxim Harder"
og:title: "Класс: ModuleGeneratorService"
og:description: "Документация по плагину класс: modulegeneratorservice для DLE."
og:image: "https://devcraft.club/data/assets/logo_default/devcraftx2.png"
twitter:title: "Класс: ModuleGeneratorService"
twitter:description: "Документация по плагину класс: modulegeneratorservice для DLE."
---

# Класс: ModuleGeneratorService

## Краткое содержание:

Сервис генерации каркаса нового DevCraft-модуля из шаблонов.

---

### Свойства
*Нет публичных свойств.*

---

### Методы
* public [defaultVersion()](#method_defaultVersion)
* public [generate()](#method_generate)
* private [normalize()](#method_normalize)
* private [replacements()](#method_replacements)
* private [writeFromStub()](#method_writeFromStub)
* private [writeLocales()](#method_writeLocales)
* private [registerPlugin()](#method_registerPlugin)
* private [stubPath()](#method_stubPath)

---

### Подробности

* Путь: `devcraft/src/modules/Admin/Services/ModuleGeneratorService.php`

---

## Детали

### Методы

[](){#method_defaultVersion}
### defaultVersion()

Возвращает версию по умолчанию для нового модуля на основе VERSIONID DLE.

**С версии:** 200.4.0

**Возвращает:** `string` — Строка версии вида `200.40.1.0` или `200.1.0`.

[](){#method_generate}
### generate()

Создаёт каталоги, файлы и при необходимости регистрирует плагин DLE.

**С версии:** 200.4.0

**Параметры:**
- `$input` — Нормализованные данные формы генератора.

**Возвращает:** `array{` — 

[](){#method_normalize}
### normalize()

Нормализует и дополняет входные данные генератора модулей.

**С версии:** 200.4.0

**Параметры:**
- `$input` — Исходные данные формы.

**Возвращает:** `array{` — 

[](){#method_replacements}
### replacements()

Формирует карту плейсхолдеров для подстановки в stub-файлы.

**С версии:** 200.4.0

**Возвращает:** `array<string,` — string> Карта `%ключ%` → значение.

[](){#method_writeFromStub}
### writeFromStub()

Записывает целевой файл из stub-шаблона с подстановкой плейсхолдеров.

**С версии:** 200.4.0

**Параметры:**
- `$stubFile` — Имя stub-файла в каталоге шаблонов.
- `$targetFile` — Абсолютный путь создаваемого файла.
- `$override` — Перезаписывать существующие файлы.

[](){#method_writeLocales}
### writeLocales()

Создаёт XLIFF-файлы локализации для нового модуля.

**С версии:** 200.4.0

**Параметры:**
- `$latin` — Латинский код модуля (имя каталога локали).
- `$override` — Перезаписывать существующие файлы локали.

[](){#method_registerPlugin}
### registerPlugin()

Регистрирует модуль как плагин DLE в таблице `_plugins`.

**С версии:** 200.4.0

[](){#method_stubPath}
### stubPath()

Возвращает абсолютный путь к stub-файлу генератора модулей.

**С версии:** 200.4.0

**Параметры:**
- `$file` — Имя stub-файла в каталоге `scaffold/module`.

**Возвращает:** `string` — Нормализованный абсолютный путь к шаблону.
