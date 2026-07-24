---
tags:
  - PHP
  - DLE
  - Плагин
  - Админка
title: "Класс: DateTimeFormatter - MH Admin"
description: "Документация по плагину класс: datetimeformatter для DLE."
keywords: "PHP, DLE, Плагин, Админка, класс: datetimeformatter, DevCraft, документация"
author: "Maxim Harder"
og:title: "Класс: DateTimeFormatter"
og:description: "Документация по плагину класс: datetimeformatter для DLE."
og:image: "https://devcraft.club/data/assets/logo_default/devcraftx2.png"
twitter:title: "Класс: DateTimeFormatter"
twitter:description: "Документация по плагину класс: datetimeformatter для DLE."
---

# Класс: DateTimeFormatter

## Краткое содержание:

Расширение Twig для работы с форматированием даты и времени.

## Описание:

Основной функционал включает преобразование объекта DateTimeImmutable
или строки в строки заданного формата для использования в фильтрах и функциях Twig.


---

### Методы

* public [dateTimeImmutable()](#method_dateTimeImmutable)
* public [getFilters()](#method_getFilters)
* public [getFunctions()](#method_getFunctions)

---

### Подробности

* Путь: engine/inc/maharder/_includes/twigExtensions/DateTimeFormatter.php

---

## Методы

[](){#method_dateTimeImmutable}

### dateTimeImmutable

```
public dateTimeImmutable(\DateTimeImmutable|string|null  dateString, string  format = "Y-m-d H:i:s", string  sourceFormat = "Y-m-d H:i:s") : string
```

##### Краткое содержание

Преобразует объект DateTimeImmutable или строку в строку формата даты и времени.

##### Свойства:

| Название          | Тип                              | По умолчанию  |
|-------------------|----------------------------------|---------------|
| **$dateString**   | \DateTimeImmutable\|string\|null |               |
| **$format**       | string                           | "Y-m-d H:i:s" |
| **$sourceFormat** | string                           | "Y-m-d H:i:s" |

##### Ошибки:

| Тип         | Описание                                                                                                |
|-------------|---------------------------------------------------------------------------------------------------------|
| \ValueError | Выбрасывается, если невозможно создать объект DateTimeImmutable из строки с помощью указанного формата. |

##### Возвращает:

```
string
```

Отформатированное значение даты и времени или пустая строка, если $dateString равно null.

---

[](){#method_getFilters}

### getFilters

```
public getFilters() : array
```

##### Возвращает:

```
array
```

---

[](){#method_getFunctions}

### getFunctions

```
public getFunctions() : array
```

##### Возвращает:

```
array
```
