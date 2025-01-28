# Класс: BreadCrumb

## Краткое содержание:

Класс, представляющий хлебную крошку для навигации.


---

### Свойства

* private $[link](#property_link)
* private $[name](#property_name)

---

### Методы

* public [__construct()](#method___construct)
* public [getLink()](#method_getLink)
* public [getName()](#method_getName)
* public [setLink()](#method_setLink)
* public [setName()](#method_setName)

---

### Подробности

* Путь: engine/inc/maharder/_includes/types/BreadCrumb.php

---

## Свойства

<a id="property_link"></a>
#### private $link : ?string
---
**Краткое содержание**

Ссылка, ассоциированная с хлебной крошкой.

**Тип:** <abbr title="?string">Текст или null</abbr>

<a id="property_name"></a>
#### private $name : ?string
---
**Краткое содержание**

Хранит название элемента хлебных крошек.

**Тип:** <abbr title="?string">Текст или null</abbr>
Название элемента или null, если оно не задано.



---

## Методы

<a id="method___construct"></a>

### __construct

```
public __construct(string|null  name, string|null  link) : mixed
```

##### Свойства:

| Название  | Тип          | По умолчанию |
|-----------|--------------|--------------|
| **$name** | string\|null |              |
| **$link** | string\|null |              |

##### Возвращает:

```
mixed
```

---

<a id="method_getLink"></a>

### getLink

```
public getLink() : string|null
```

##### Краткое содержание

Возвращает ссылку, связанную с текущим элементом хлебных крошек.

##### Смотри так-же:

* [\BreadCrumb::$link](#property_link)

##### Возвращает:

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

##### Краткое содержание

Возвращает имя текущего элемента хлебных крошек.

##### Смотри так-же:

* [\BreadCrumb::$name](#property_name)

##### Возвращает:

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

##### Краткое содержание

Устанавливает ссылку для текущего элемента хлебных крошек.

##### Смотри так-же:

* [\BreadCrumb::$link](#property_link)

##### Свойства:

| Название  | Тип          | По умолчанию |
|-----------|--------------|--------------|
| **$link** | string\|null |              |

##### Возвращает:

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

##### Краткое содержание

Устанавливает имя текущего элемента хлебных крошек.

##### Смотри так-же:

* [\BreadCrumb::$name](#property_name)

##### Свойства:

| Название  | Тип          | По умолчанию |
|-----------|--------------|--------------|
| **$name** | string\|null |              |

##### Возвращает:

```
\BreadCrumb
```

Возвращает текущий объект для возможности цепочного вызова методов.
