# Class: [\Default](../../packages/Default.md)\MobileDetectExtension

## Summary:

Inspired by bes89


---

### Properties
* protected $[detector](#property_detector)

---

### Methods

* public [__call()](#method___call)
* public [__construct()](#method___construct)
* public [getAvailableDevices()](#method_getAvailableDevices)
* public [getFunctions()](#method_getFunctions)
* public [getName()](#method_getName)
* protected [fromCamelCase()](#method_fromCamelCase)
* protected [toCamelCase()](#method_toCamelCase)

---

### Details

* File: [engine/inc/maharder/_includes/twigExtensions/MobileDetectExtension.php](../../engine/inc/maharder/_includes/twigExtensions/MobileDetectExtension.php)
* See Also:
  * [](../)

---

## Properties
<a id="property_detector"></a>
#### protected $detector : ?\Detection\MobileDetect
---
**Type:** <a href="../?\Detection\MobileDetect"><abbr title="?\Detection\MobileDetect">MobileDetect</abbr></a>

**Details:**



---

## Methods

<a id="method___call"></a>
### __call

```
public __call(mixed  name, mixed  arguments) : mixed
```

##### Summary

Pass through calls of undefined methods to the mobile detect library

##### Parameters:

| Name | Type | Default |
|------|------|---------|
| **$name** | mixed |  |
| **$arguments** | mixed |  |

##### Returns:

```
mixed
```

---

<a id="method___construct"></a>
### __construct

```
public __construct() : mixed
```

##### Summary

Constructor

##### Returns:

```
mixed
```

---

<a id="method_getAvailableDevices"></a>
### getAvailableDevices

```
public getAvailableDevices() : array
```

##### Summary

Returns an array of all available devices

##### Returns:

```
array
```

---

<a id="method_getFunctions"></a>
### getFunctions

```
public getFunctions() : array
```

##### Summary

Twig functions

##### Returns:

```
array
```

---

<a id="method_getName"></a>
### getName

```
public getName() : string
```

##### Summary

The extension name

##### Returns:

```
string
```

---

<a id="method_fromCamelCase"></a>
### fromCamelCase

```
static protected fromCamelCase(string  string, string  separator = &#039;_&#039;) : string
```

##### Summary

Converts a string from camel case

##### Parameters:

| Name | Type | Default |
|------|------|---------|
| **$string** | string |  |
| **$separator** | string | &#039;_&#039; |

##### Returns:

```
string
```

---

<a id="method_toCamelCase"></a>
### toCamelCase

```
static protected toCamelCase(string  string) : array|string|string[]|null
```

##### Summary

Converts a string to camel case

##### Parameters:

| Name | Type | Default |
|------|------|---------|
| **$string** | string |  |

##### Returns:

```
array|string|string[]|null
```
