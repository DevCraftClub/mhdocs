# Class: [\Default](../../packages/Default.md)\BreadCrumb


---

### Properties
* private $[link](#property_link)
* private $[name](#property_name)

---

### Methods

* public [__construct()](#method___construct)
* public [getLink()](#method_getLink)
* public [getName()](#method_getName)
* public [setLink()](#method_setLink)
* public [setName()](#method_setName)

---

### Details

* File: [engine/inc/maharder/_includes/types/BreadCrumb.php](../../engine/inc/maharder/_includes/types/BreadCrumb.php)

---

## Properties
<a id="property_link"></a>
#### private $link : ?string
---
**Summary**

Ссылка, ассоциированная с хлебной крошкой.

**Type:** <a href="../?string"><abbr title="?string">?string</abbr></a>

**Details:**
* See Also:
  * [](../classes/BreadCrumb.md#method_setLink)
  * [](../classes/BreadCrumb.md#method_getLink)


<a id="property_name"></a>
#### private $name : ?string
---
**Summary**

Хранит название элемента хлебных крошек.

**Type:** <a href="../?string"><abbr title="?string">?string</abbr></a>
Название элемента или null, если оно не задано.
**Details:**
* See Also:
  * [](../classes/BreadCrumb.md#method_setName)
  * [](../classes/BreadCrumb.md#method_getName)



---

## Methods

<a id="method___construct"></a>
### __construct

```
public __construct(string|null  name, string|null  link) : mixed
```

##### Parameters:

| Name | Type | Default |
|------|------|---------|
| **$name** | string|null |  |
| **$link** | string|null |  |

##### Returns:

```
mixed
```

---

<a id="method_getLink"></a>
### getLink

```
public getLink() : string|null
```

##### Summary

Возвращает ссылку, связанную с текущим элементом хлебных крошек.

##### See Also:

 * [\BreadCrumb::$link](../../classes/BreadCrumb.md#property_link)

##### Returns:

```
string|null
```
Ссылка или null, если ссылка не установлена.

---

<a id="method_getName"></a>
### getName

```
public getName() : string|null
```

##### Summary

Возвращает имя текущего элемента хлебных крошек.

##### See Also:

 * [\BreadCrumb::$name](../../classes/BreadCrumb.md#property_name)

##### Returns:

```
string|null
```
Имя элемента или null, если имя не установлено.

---

<a id="method_setLink"></a>
### setLink

```
public setLink(string|null  link) : \BreadCrumb
```

##### Summary

Устанавливает ссылку для текущего элемента хлебных крошек.

##### See Also:

 * [\BreadCrumb::$link](../../classes/BreadCrumb.md#property_link)

##### Parameters:

| Name | Type | Default |
|------|------|---------|
| **$link** | string|null |  |

##### Returns:

```
\BreadCrumb
```
Возвращает текущий объект для возможности цепочного вызова методов.

---

<a id="method_setName"></a>
### setName

```
public setName(string|null  name) : \BreadCrumb
```

##### Summary

Устанавливает имя текущего элемента хлебных крошек.

##### See Also:

 * [\BreadCrumb::$name](../../classes/BreadCrumb.md#property_name)

##### Parameters:

| Name | Type | Default |
|------|------|---------|
| **$name** | string|null |  |

##### Returns:

```
\BreadCrumb
```
Возвращает текущий объект для возможности цепочного вызова методов.
