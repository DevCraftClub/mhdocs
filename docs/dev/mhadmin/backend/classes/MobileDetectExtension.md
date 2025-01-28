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

<a id="property_detector"></a>
#### protected $detector : ?\Detection\MobileDetect
---
**Тип:
** <a href="https://docs.mobiledetect.net/home/the-constructor" target="_blank"><abbr title="?\Detection\MobileDetect">
MobileDetect</abbr></a>


---

## Методы

<a id="method___call"></a>

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

<a id="method___construct"></a>

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

<a id="method_getAvailableDevices"></a>

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

<a id="method_getFunctions"></a>

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

<a id="method_getName"></a>

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

<a id="method_fromCamelCase"></a>

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

<a id="method_toCamelCase"></a>

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
