---
tags:
  - PHP
  - DLE
  - Плагин
  - Админка
title: "Класс: MobileDetectExtension - MH Admin"
description: "Документация по плагину класс: mobiledetectextension для DLE."
keywords: "PHP, DLE, Плагин, Админка, класс: mobiledetectextension, DevCraft, документация"
author: "Maxim Harder"
og:title: "Класс: MobileDetectExtension"
og:description: "Документация по плагину класс: mobiledetectextension для DLE."
og:image: "https://devcraft.club/data/assets/logo_default/devcraftx2.png"
twitter:title: "Класс: MobileDetectExtension"
twitter:description: "Документация по плагину класс: mobiledetectextension для DLE."
---

# Класс: MobileDetectExtension

## Краткое содержание:

Расширение Twig, основанное на MobileDetect.

## Описание:

Это расширение предоставляет функции, которые позволяют определять устройства,
такие как мобильные телефоны, планшеты, операционные системы и браузеры, через Twig.


---

### Свойства

* protected $[detector](#property_detector)

---

### Методы

* public [__call()](#method___call)
* public [__construct()](#method___construct)
* public [getAvailableDevices()](#method_getAvailableDevices)
* public [getFunctions()](#method_getFunctions)
* public [getName()](#method_getName)
* protected [fromCamelCase()](#method_fromCamelCase)
* protected [toCamelCase()](#method_toCamelCase)

---

### Подробности

* Путь: engine/inc/maharder/_includes/twigExtensions/MobileDetectExtension.php

---

## Свойства

[](){#property_detector}
#### protected $detector : ?\Detection\MobileDetect
---
**Тип:
** <a href="https://docs.mobiledetect.net/home/the-constructor" target="_blank"><abbr title="?\Detection\MobileDetect">
MobileDetect</abbr></a>


---

## Методы

[](){#method___call}

### __call

```
public __call(mixed  name, mixed  arguments) : mixed
```

##### Краткое содержание

Pass through calls of undefined methods to the mobile detect library

##### Свойства:

| Название       | Тип   | По умолчанию |
|----------------|-------|--------------|
| **$name**      | mixed |              |
| **$arguments** | mixed |              |

##### Возвращает:

```
mixed
```

---

[](){#method___construct}

### __construct

```
public __construct() : mixed
```

##### Краткое содержание

Constructor

##### Возвращает:

```
mixed
```

---

[](){#method_getAvailableDevices}

### getAvailableDevices

```
public getAvailableDevices() : array
```

##### Краткое содержание

Returns an array of all available devices

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

##### Краткое содержание

Twig functions

##### Возвращает:

```
array
```

---

[](){#method_getName}

### getName

```
public getName() : string
```

##### Краткое содержание

The extension name

##### Возвращает:

```
string
```

---

[](){#method_fromCamelCase}

### fromCamelCase

```
static protected fromCamelCase(string  string, string  separator = "_") : string
```

##### Краткое содержание

Converts a string from camel case

##### Свойства:

| Название       | Тип    | По умолчанию |
|----------------|--------|--------------|
| **$string**    | string |              |
| **$separator** | string | "_"          |

##### Возвращает:

```
string
```

---

[](){#method_toCamelCase}

### toCamelCase

```
static protected toCamelCase(string  string) : array|string|string[]|null
```

##### Краткое содержание

Converts a string to camel case

##### Свойства:

| Название    | Тип    | По умолчанию |
|-------------|--------|--------------|
| **$string** | string |              |

##### Возвращает:

```
array|string|string[]|null
```
