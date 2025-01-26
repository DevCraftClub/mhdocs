# Class: [\Default](../../packages/Default.md)\AdminLink


---

### Properties
* private $[children](#property_children)
* private $[extra](#property_extra)
* private $[link](#property_link)
* private $[name](#property_name)
* private $[parent](#property_parent)
* private $[type](#property_type)

---

### Methods

* public [__construct()](#method___construct)
* public [addChild()](#method_addChild)
* public [getChildren()](#method_getChildren)
* public [getExtra()](#method_getExtra)
* public [getLink()](#method_getLink)
* public [getName()](#method_getName)
* public [getParent()](#method_getParent)
* public [getType()](#method_getType)
* public [setChildren()](#method_setChildren)
* public [setExtra()](#method_setExtra)
* public [setLink()](#method_setLink)
* public [setName()](#method_setName)
* public [setParent()](#method_setParent)
* public [setType()](#method_setType)

---

### Details

* File: [engine/inc/maharder/_includes/types/AdminLink.php](../../engine/inc/maharder/_includes/types/AdminLink.php)

---

## Properties
<a id="property_children"></a>
#### private $children : array
---
**Type:** <a href="../array"><abbr title="array">array</abbr></a>
Список дочерних элементов. Устанавливается через метод {@see}.
**Details:**


<a id="property_extra"></a>
#### private $extra : ?string
---
**Type:** <a href="../?string"><abbr title="?string">?string</abbr></a>
Дополнительная информация. Устанавливается через метод {@see}
и фильтруется с помощью FILTER_SANITIZE_FULL_SPECIAL_CHARS.
**Details:**


<a id="property_link"></a>
#### private $link : ?string
---
**Type:** <a href="../?string"><abbr title="?string">?string</abbr></a>
URL ссылки. Устанавливается через метод {@see}
и валидируется с помощью FILTER_VALIDATE_URL.
**Details:**


<a id="property_name"></a>
#### private $name : ?string
---
**Type:** <a href="../?string"><abbr title="?string">?string</abbr></a>
Имя ссылки. Устанавливается через метод {@see}
и фильтруется с помощью FILTER_SANITIZE_FULL_SPECIAL_CHARS.
**Details:**


<a id="property_parent"></a>
#### private $parent : ?string
---
**Type:** <a href="../?string"><abbr title="?string">?string</abbr></a>
Родительский элемент. Устанавливается через метод {@see}.
**Details:**


<a id="property_type"></a>
#### private $type : ?string
---
**Type:** <a href="../?string"><abbr title="?string">?string</abbr></a>
Тип ссылки. Устанавливается через метод {@see}.
Ожидаемые значения: &#039;link&#039;, &#039;dropdown&#039;, &#039;divider&#039;, &#039;data&#039;.
По умолчанию: &#039;link&#039;.
**Details:**



---

## Methods

<a id="method___construct"></a>
### __construct

```
public __construct(string|null  parent = null, string|null  name = null, string|null  link = null, string|null  type = null, string|null  extra = null, array  children = []) : mixed
```

##### Summary

Конструктор класса AdminLink.

##### Description

Инициализирует объект с переданными параметрами, вызывая соответствующие
методы установки свойств.

##### See Also:

 * [\AdminLink::setParent()](../../classes/AdminLink.md#method_setParent)
 * [\AdminLink::setName()](../../classes/AdminLink.md#method_setName)
 * [\AdminLink::setLink()](../../classes/AdminLink.md#method_setLink)
 * [\AdminLink::setType()](../../classes/AdminLink.md#method_setType)
 * [\AdminLink::setExtra()](../../classes/AdminLink.md#method_setExtra)
 * [\AdminLink::setChildren()](../../classes/AdminLink.md#method_setChildren)

##### Parameters:

| Name | Type | Default |
|------|------|---------|
| **$parent** | string|null | null |
| **$name** | string|null | null |
| **$link** | string|null | null |
| **$type** | string|null | null |
| **$extra** | string|null | null |
| **$children** | array | [] |

##### Returns:

```
mixed
```

---

<a id="method_addChild"></a>
### addChild

```
public addChild(\AdminLink  link) : \AdminLink
```

##### Summary

Добавляет дочернюю ссылку к текущему объекту `AdminLink`.

##### Description

Если переданная ссылка имеет родительский идентификатор (`parentId`), проверяется, существует ли такой
дочерний элемент у текущего объекта. В случае его существования вызов метода продолжается рекурсивно
для добавления дочерней ссылки. Если дочерний элемент отсутствует, ссылка добавляется как новый дочерний элемент.
Если у переданной ссылки нет родительского идентификатора, она добавляется в общий список дочерних элементов.

##### See Also:

 * [\AdminLink::getParent()](../../classes/AdminLink.md#method_getParent)
 * [\AdminLink::getChildren()](../../classes/AdminLink.md#method_getChildren)

##### Parameters:

| Name | Type | Default |
|------|------|---------|
| **$link** | \AdminLink |  |

##### Returns:

```
\AdminLink
```
Возвращает текущий экземпляр `AdminLink` для возможности дальнейшей цепочки вызовов.

---

<a id="method_getChildren"></a>
### getChildren

```
public getChildren() : array
```

##### Summary

Возвращает массив детей текущего объекта.

##### See Also:

 * [\AdminLink::$children](../../classes/AdminLink.md#property_children)
 * [\AdminLink::setChildren()](../../classes/AdminLink.md#method_setChildren)

##### Returns:

```
array
```
Список объектов, являющихся потомками текущего объекта.

---

<a id="method_getExtra"></a>
### getExtra

```
public getExtra() : string|null
```

##### Summary

Возвращает значение дополнительного параметра.

##### Returns:

```
string|null
```
Дополнительный параметр или null, если он не установлен.

---

<a id="method_getLink"></a>
### getLink

```
public getLink() : string|null
```

##### Summary

Возвращает значение свойства ссылки.

##### See Also:

 * [\AdminLink::setLink()](../../classes/AdminLink.md#method_setLink)

##### Returns:

```
string|null
```
Вернётся строка с URL или `null`, если ссылка не установлена.

---

<a id="method_getName"></a>
### getName

```
public getName() : ?string
```

##### Returns:

```
?string
```

---

<a id="method_getParent"></a>
### getParent

```
public getParent() : string|null
```

##### Summary

Возвращает идентификатор родителя текущего объекта AdminLink.

##### Returns:

```
string|null
```
Идентификатор родителя или null, если родитель не установлен.

---

<a id="method_getType"></a>
### getType

```
public getType() : string|null
```

##### Summary

Возвращает текущий тип элемента.

##### Description

Тип может принимать следующие значения: &#039;link&#039;, &#039;dropdown&#039;, &#039;divider&#039;, &#039;data&#039;,
или null, если он не был установлен.

##### See Also:

 * [\AdminLink::setType()](../../classes/AdminLink.md#method_setType)
 * [\AdminLink::$type](../../classes/AdminLink.md#property_type)

##### Returns:

```
string|null
```
Текущий тип элемента или null, если тип не задан.

---

<a id="method_setChildren"></a>
### setChildren

```
public setChildren(array  children) : \AdminLink
```

##### Summary

Устанавливает массив дочерних элементов для текущего объекта.

##### Description

Этот метод заменяет существующий массив дочерних элементов переданным массивом.

##### See Also:

 * [\AdminLink::getChildren()](../../classes/AdminLink.md#method_getChildren)
 * [\AdminLink::addChild()](../../classes/AdminLink.md#method_addChild)

##### Parameters:

| Name | Type | Default |
|------|------|---------|
| **$children** | array |  |

##### Returns:

```
\AdminLink
```
Возвращает текущий экземпляр класса для возможности цепочки вызовов.

---

<a id="method_setExtra"></a>
### setExtra

```
public setExtra(string|null  extra) : \AdminLink
```

##### Summary

Устанавливает значение дополнительного параметра и применяет фильтрацию.

##### Parameters:

| Name | Type | Default |
|------|------|---------|
| **$extra** | string|null |  |

##### Returns:

```
\AdminLink
```
Возвращает текущий экземпляр класса для цепочки вызовов.

---

<a id="method_setLink"></a>
### setLink

```
public setLink(string|null  link) : \AdminLink
```

##### Summary

Устанавливает URL-ссылку для текущего объекта класса `AdminLink`.

##### Description

Метод проверяет переданную строку на соответствие формату URL с использованием фильтрации через {@see}.
Если переданное значение не является допустимым URL, оно будет проигнорировано.

##### See Also:

 * [\AdminLink::$link](../../classes/AdminLink.md#property_link)
 * [\AdminLink::getLink()](../../classes/AdminLink.md#method_getLink)

##### Parameters:

| Name | Type | Default |
|------|------|---------|
| **$link** | string|null |  |

##### Returns:

```
\AdminLink
```
Возвращает текущий экземпляр объекта `AdminLink` для возможности цепочки вызовов.

---

<a id="method_setName"></a>
### setName

```
public setName(string|null  name) : \AdminLink
```

##### Summary

Устанавливает название ссылки после фильтрации входного значения.

##### Parameters:

| Name | Type | Default |
|------|------|---------|
| **$name** | string|null |  |

##### Returns:

```
\AdminLink
```
Возвращает текущий экземпляр класса AdminLink.

---

<a id="method_setParent"></a>
### setParent

```
public setParent(string|null  parent) : \AdminLink
```

##### Summary

Устанавливает родительский идентификатор для ссылки.

##### Parameters:

| Name | Type | Default |
|------|------|---------|
| **$parent** | string|null |  |

##### Returns:

```
\AdminLink
```
Возвращает текущий экземпляр класса для цепочки вызовов.

---

<a id="method_setType"></a>
### setType

```
public setType(string|null  type) : \AdminLink
```

##### Summary

Устанавливает тип текущего объекта `AdminLink`.

##### Description

Метод позволяет задать тип ссылки из набора допустимых значений.
Если значение передано и соответствует одному из допустимых значений,
оно будет установлено в соответствующее свойство объекта.

##### See Also:

 * [\AdminLink::$type](../../classes/AdminLink.md#property_type)
 * [\AdminLink::getType()](../../classes/AdminLink.md#method_getType)

##### Parameters:

| Name | Type | Default |
|------|------|---------|
| **$type** | string|null |  |

##### Returns:

```
\AdminLink
```
Возвращает текущий экземпляр `AdminLink` для возможности цепочки вызовов.
