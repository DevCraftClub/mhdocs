# Класс: AdminLink

## Краткое содержание:

Класс `AdminLink` реализует функциональность для создания и управления административными ссылками,
включая родительские связи, дочерние элементы, типы ссылок и дополнительные параметры.

## Описание:

Содержит методы для установки и получения атрибутов ссылки, а также для манипуляции дочерними элементами,
такими как добавление, установка и рекурсивное построение иерархии.

Основные свойства включают:

- `$parent` – идентификатор родительского элемента.
- `$name` – имя ссылки.
- `$link` – URL-адрес.
- `$type` – тип элемента (например, 'link', 'dropdown').
- `$extra` – дополнительные параметры.
- `$children` – массив дочерних элементов.

---

### Свойства

* private $[children](#property_children)
* private $[extra](#property_extra)
* private $[link](#property_link)
* private $[name](#property_name)
* private $[parent](#property_parent)
* private $[type](#property_type)

---

### Методы

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

### Подробности

* Путь: `engine/inc/maharder/_includes/types/AdminLink.php`

---

## Свойства

<a id="property_children"></a>
#### private $children : array
---
**Тип:** <abbr title="array">Массив</abbr>

Список дочерних элементов. Устанавливается через метод [\AdminLink::setChildren()](#method_setChildren).

<a id="property_extra"></a>
#### private $extra : ?string
---
**Тип:** <abbr title="?string">Текст или null</abbr>

Дополнительная информация. Устанавливается через метод [\AdminLink::setExtra()](#method_setExtra)
и фильтруется с помощью FILTER_SANITIZE_FULL_SPECIAL_CHARS.

<a id="property_link"></a>
#### private $link : ?string
---
**Тип:** <abbr title="?string">Текст или null</abbr>

URL ссылки. Устанавливается через метод [\AdminLink::setLink()](#method_setLink)
и валидируется с помощью FILTER_VALIDATE_URL.

<a id="property_name"></a>
#### private $name : ?string
---
**Тип:** <abbr title="?string">Текст или null</abbr>

Имя ссылки. Устанавливается через метод [\AdminLink::setName()](#method_setName)
и фильтруется с помощью FILTER_SANITIZE_FULL_SPECIAL_CHARS.

<a id="property_parent"></a>
#### private $parent : ?string
---
**Тип:** <abbr title="?string">Текст или null</abbr>

Родительский элемент. Устанавливается через метод [\AdminLink::setParent()](#method_setParent).

<a id="property_type"></a>
#### private $type : ?string
---
**Тип:** <abbr title="?string">Текст или null</abbr>

Тип ссылки. Устанавливается через метод [\AdminLink::setType()](#method_setType).
Ожидаемые значения: &#039;link&#039;, &#039;dropdown&#039;, &#039;divider&#039;, &#039;data&#039;.
По умолчанию: &#039;link&#039;.



---

## Методы

<a id="method___construct"></a>

### __construct

```
public __construct(string|null  parent = null, string|null  name = null, string|null  link = null, string|null  type = null, string|null  extra = null, array  children = []) : mixed
```

##### Краткое содержание

Конструктор класса AdminLink.

##### Описание

Инициализирует объект с переданными параметрами, вызывая соответствующие
методы установки свойств.

##### Смотри так-же:

* [\AdminLink::setParent()](#method_setParent)
* [\AdminLink::setName()](#method_setName)
* [\AdminLink::setLink()](#method_setLink)
* [\AdminLink::setType()](#method_setType)
* [\AdminLink::setExtra()](#method_setExtra)
* [\AdminLink::setChildren()](#method_setChildren)

##### Свойства:

| Название      | Тип          | По умолчанию |
|---------------|--------------|--------------|
| **$parent**   | string\|null | null         |
| **$name**     | string\|null | null         |
| **$link**     | string\|null | null         |
| **$type**     | string\|null | null         |
| **$extra**    | string\|null | null         |
| **$children** | array        | []           |

##### Возвращает:

```
mixed
```

---

<a id="method_addChild"></a>

### addChild

```
public addChild(\AdminLink  link) : \AdminLink
```

##### Краткое содержание

Добавляет дочернюю ссылку к текущему объекту `AdminLink`.

##### Описание

Если переданная ссылка имеет родительский идентификатор (`parentId`), проверяется, существует ли такой
дочерний элемент у текущего объекта. В случае его существования вызов метода продолжается рекурсивно
для добавления дочерней ссылки. Если дочерний элемент отсутствует, ссылка добавляется как новый дочерний элемент.
Если у переданной ссылки нет родительского идентификатора, она добавляется в общий список дочерних элементов.

##### Смотри так-же:

* [\AdminLink::getParent()](#method_getParent)
* [\AdminLink::getChildren()](#method_getChildren)

##### Свойства:

| Название  | Тип        | По умолчанию |
|-----------|------------|--------------|
| **$link** | \AdminLink |              |

##### Возвращает:

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

##### Краткое содержание

Возвращает массив детей текущего объекта.

##### Смотри так-же:

* [\AdminLink::$children](#property_children)
* [\AdminLink::setChildren()](#method_setChildren)

##### Возвращает:

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

##### Краткое содержание

Возвращает значение дополнительного параметра.

##### Возвращает:

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

##### Краткое содержание

Возвращает значение свойства ссылки.

##### Смотри так-же:

* [\AdminLink::setLink()](#method_setLink)

##### Возвращает:

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

##### Возвращает:

```
?string
```

---

<a id="method_getParent"></a>

### getParent

```
public getParent() : string|null
```

##### Краткое содержание

Возвращает идентификатор родителя текущего объекта AdminLink.

##### Возвращает:

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

##### Краткое содержание

Возвращает текущий тип элемента.

##### Описание

Тип может принимать следующие значения: &#039;link&#039;, &#039;dropdown&#039;, &#039;divider&#039;, &#039;data&#039;,
или null, если он не был установлен.

##### Смотри так-же:

* [\AdminLink::setType()](#method_setType)
* [\AdminLink::$type](#property_type)

##### Возвращает:

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

##### Краткое содержание

Устанавливает массив дочерних элементов для текущего объекта.

##### Описание

Этот метод заменяет существующий массив дочерних элементов переданным массивом.

##### Смотри так-же:

* [\AdminLink::getChildren()](#method_getChildren)
* [\AdminLink::addChild()](#method_addChild)

##### Свойства:

| Название      | Тип   | По умолчанию |
|---------------|-------|--------------|
| **$children** | array |              |

##### Возвращает:

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

##### Краткое содержание

Устанавливает значение дополнительного параметра и применяет фильтрацию.

##### Свойства:

| Название   | Тип          | По умолчанию |
|------------|--------------|--------------|
| **$extra** | string\|null |  |

##### Возвращает:

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

##### Краткое содержание

Устанавливает URL-ссылку для текущего объекта класса `AdminLink`.

##### Описание

Метод проверяет переданную строку на соответствие формату URL с использованием фильтрации через {@see}.
Если переданное значение не является допустимым URL, оно будет проигнорировано.

##### Смотри так-же:

* [\AdminLink::$link](#property_link)
* [\AdminLink::getLink()](#method_getLink)

##### Свойства:

| Название  | Тип           | По умолчанию |
|-----------|---------------|--------------|
| **$link** | string\|null |  |

##### Возвращает:

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

##### Краткое содержание

Устанавливает название ссылки после фильтрации входного значения.

##### Свойства:

| Название  | Тип          | По умолчанию |
|-----------|--------------|--------------|
| **$name** | string\|null |  |

##### Возвращает:

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

##### Краткое содержание

Устанавливает родительский идентификатор для ссылки.

##### Свойства:

| Название    | Тип          | По умолчанию |
|-------------|--------------|--------------|
| **$parent** | string\|null |  |

##### Возвращает:

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

##### Краткое содержание

Устанавливает тип текущего объекта `AdminLink`.

##### Описание

Метод позволяет задать тип ссылки из набора допустимых значений.
Если значение передано и соответствует одному из допустимых значений,
оно будет установлено в соответствующее свойство объекта.

##### Смотри так-же:

* [\AdminLink::$type](#property_type)
* [\AdminLink::getType()](#method_getType)

##### Свойства:

| Название  | Тип          | По умолчанию |
|-----------|--------------|--------------|
| **$type** | string\|null |  |

##### Возвращает:

```
\AdminLink
```

Возвращает текущий экземпляр `AdminLink` для возможности цепочки вызовов.
