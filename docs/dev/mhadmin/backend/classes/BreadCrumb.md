---
tags:
  - PHP
  - DLE
  - Плагин
  - Админка
title: "Класс: BreadCrumb - MH Admin"
description: "Документация по плагину класс: breadcrumb для DLE."
keywords: "PHP, DLE, Плагин, Админка, класс: breadcrumb, DevCraft, документация"
author: "Maxim Harder"
og:title: "Класс: BreadCrumb"
og:description: "Документация по плагину класс: breadcrumb для DLE."
og:image: "https://devcraft.club/data/assets/logo_default/devcraftx2.png"
twitter:title: "Класс: BreadCrumb"
twitter:description: "Документация по плагину класс: breadcrumb для DLE."
---

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

[](){#property_link}
#### private $link : ?string
---
**Краткое содержание**

Ссылка, ассоциированная с хлебной крошкой.

**Тип:** <abbr title="?string">Текст или null</abbr>

[](){#property_name}
#### private $name : ?string
---
**Краткое содержание**

Хранит название элемента хлебных крошек.

**Тип:** <abbr title="?string">Текст или null</abbr>
Название элемента или null, если оно не задано.



---

## Методы

[](){#method___construct}

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

[](){#method_getLink}

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

[](){#method_getName}

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

[](){#method_setLink}

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

[](){#method_setName}

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
