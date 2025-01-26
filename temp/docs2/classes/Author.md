# Class: [\Default](../../packages/Default.md)\Author


---

### Properties
* private $[contacts](#property_contacts)
* private $[donations](#property_donations)
* private $[name](#property_name)

---

### Methods

* public [__construct()](#method___construct)
* public [addContact()](#method_addContact)
* public [addDonation()](#method_addDonation)
* public [getContacts()](#method_getContacts)
* public [getDonations()](#method_getDonations)
* public [getName()](#method_getName)

---

### Details

* File: [engine/inc/maharder/_includes/types/Author.php](../../engine/inc/maharder/_includes/types/Author.php)

---

## Properties
<a id="property_contacts"></a>
#### private $contacts : array
---
**Type:** <a href="../array"><abbr title="array">array</abbr></a>

**Details:**


<a id="property_donations"></a>
#### private $donations : array
---
**Type:** <a href="../array"><abbr title="array">array</abbr></a>

**Details:**


<a id="property_name"></a>
#### private $name : string
---
**Type:** <a href="../string"><abbr title="string">string</abbr></a>

**Details:**



---

## Methods

<a id="method___construct"></a>
### __construct

```
public __construct(string  name) : mixed
```

##### Parameters:

| Name | Type | Default |
|------|------|---------|
| **$name** | string |  |

##### Returns:

```
mixed
```

---

<a id="method_addContact"></a>
### addContact

```
public addContact(string  name, string  link) : \Author
```

##### Parameters:

| Name | Type | Default |
|------|------|---------|
| **$name** | string |  |
| **$link** | string |  |

##### Returns:

```
\Author
```

---

<a id="method_addDonation"></a>
### addDonation

```
public addDonation(string  name, string  value, string  link) : mixed
```

##### Parameters:

| Name | Type | Default |
|------|------|---------|
| **$name** | string |  |
| **$value** | string |  |
| **$link** | string |  |

##### Returns:

```
mixed
```

---

<a id="method_getContacts"></a>
### getContacts

```
public getContacts() : array
```

##### Returns:

```
array
```

---

<a id="method_getDonations"></a>
### getDonations

```
public getDonations() : array
```

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

##### Returns:

```
string
```
