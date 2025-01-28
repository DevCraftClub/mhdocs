# Класс: Author

## Краткое содержание:

Класс, представляющий автора с именем, списком контактов и пожертвований.


---

### Свойства
* private $[contacts](#property_contacts)
* private $[donations](#property_donations)
* private $[name](#property_name)

---

### Методы

* public [__construct()](#method___construct)
* public [addContact()](#method_addContact)
* public [addDonation()](#method_addDonation)
* public [getContacts()](#method_getContacts)
* public [getDonations()](#method_getDonations)
* public [getName()](#method_getName)

---

### Подробности

* Путь: engine/inc/maharder/_includes/types/Author.php

---

## Свойства
<a id="property_contacts"></a>
#### private $contacts : array
---
**Тип:** <abbr title="array">Массив</abbr>


<a id="property_donations"></a>
#### private $donations : array
---
**Тип:** <abbr title="array">Массив</abbr>


<a id="property_name"></a>
#### private $name : string
---
**Тип:** <abbr title="string">Текст</abbr>



---

## Методы

<a id="method___construct"></a>
### __construct

```
public __construct(string  name) : mixed
```

##### Краткое содержание

Инициализирует новый экземпляр класса Author с указанным именем.

##### Свойства:

| Название | Тип | По умолчанию |
|----------|-----|----------|
| **$name** | string |  |

##### Возвращает:

```
mixed
```

---

<a id="method_addContact"></a>
### addContact

```
public addContact(string  name, string  link) : \Author
```

##### Краткое содержание

Добавляет контакт в список контактов автора.

##### Свойства:

| Название | Тип | По умолчанию |
|----------|-----|----------|
| **$name** | string |  |
| **$link** | string |  |

##### Возвращает:

```
\Author
```
Текущий экземпляр класса для цепочки вызовов.

---

<a id="method_addDonation"></a>
### addDonation

```
public addDonation(string  name, string  value, string  link) : \Author
```

##### Краткое содержание

Добавляет пожертвование в список пожертвований автора.

##### Свойства:

| Название | Тип | По умолчанию |
|----------|-----|----------|
| **$name** | string |  |
| **$value** | string |  |
| **$link** | string |  |

##### Возвращает:

```
\Author
```
Текущий экземпляр класса для цепочки вызовов.

---

<a id="method_getContacts"></a>
### getContacts

```
public getContacts() : array
```

##### Краткое содержание

Получает список контактов автора.

##### Возвращает:

```
array
```
Массив контактов, где каждый элемент — это ассоциативный массив с ключами &#039;name&#039; и &#039;link&#039;.

---

<a id="method_getDonations"></a>
### getDonations

```
public getDonations() : array
```

##### Краткое содержание

Получает список пожертвований автора.

##### Возвращает:

```
array
```
Массив пожертвований, где каждый элемент — это ассоциативный массив с ключами
&#039;name&#039;, &#039;value&#039; и &#039;link&#039;.

---

<a id="method_getName"></a>
### getName

```
public getName() : string
```

##### Краткое содержание

Получает имя автора.

##### Возвращает:

```
string
```
Имя автора.
