---
tags:
  - PHP
  - DLE
  - Плагин
  - Админка
title: "Класс: ModuleGeneratorInput - DevCraft Admin"
description: "Документация по плагину класс: modulegeneratorinput для DLE."
keywords: "PHP, DLE, Плагин, Админка, класс: modulegeneratorinput, DevCraft, документация"
author: "Maxim Harder"
og:title: "Класс: ModuleGeneratorInput"
og:description: "Документация по плагину класс: modulegeneratorinput для DLE."
og:image: "https://devcraft.club/data/assets/logo_default/devcraftx2.png"
twitter:title: "Класс: ModuleGeneratorInput"
twitter:description: "Документация по плагину класс: modulegeneratorinput для DLE."
---

# Класс: ModuleGeneratorInput

## Краткое содержание:

DTO входных данных формы генератора DevCraft-модулей.

---

### Свойства
*Нет публичных свойств.*

---

### Методы
* public [__construct()](#method___construct)
* public [fromArray()](#method_fromArray)
* private [toBool()](#method_toBool)

---

### Подробности

* Путь: `devcraft/src/modules/Admin/Services/ModuleGeneratorInput.php`

---

## Детали

### Методы

[](){#method___construct}
### __construct()

Создаёт объект входных данных генератора модулей.

**С версии:** 200.4.0

**Параметры:**
- `$name` — Отображаемое имя модуля.
- `$translit` — Латинский код модуля (пустой — транслитерация из имени).
- `$description` — Краткое описание модуля.
- `$version` — Версия модуля.
- `$icon` — Иконка Metro UI для меню.
- `$pluginIcon` — Путь к иконке плагина DLE.
- `$link` — Ссылка на страницу плагина.
- `$docs` — Ссылка на документацию.
- `$db` — Регистрировать модуль как плагин DLE.
- `$override` — Перезаписывать существующие файлы.

[](){#method_fromArray}
### fromArray()

Создаёт DTO из массива данных AJAX-запроса или формы.

**С версии:** 200.4.0

**Возвращает:** `self` — Нормализованный объект входных данных.

[](){#method_toBool}
### toBool()

Приводит произвольное значение к логическому типу PHP.

**С версии:** 200.4.0

**Параметры:**
- `$value` — Значение из запроса (`bool`, `int`, строка).

**Возвращает:** `bool` — Результат приведения.
