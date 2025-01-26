# Abstract Class: [\Default](../../packages/Default.md)\BasisModel


---

### Properties
* protected $[createdAt](#property_createdAt)
* protected $[id](#property_id)
* protected $[updatedAt](#property_updatedAt)

---

### Methods

* public [getColumnVal()](#method_getColumnVal)
* public [getCreatedAt()](#method_getCreatedAt)
* public [getId()](#method_getId)
* public [getUpdatedAt()](#method_getUpdatedAt)

---

### Details

* File: [engine/inc/maharder/_includes/database/BasisModel.php](../../engine/inc/maharder/_includes/database/BasisModel.php)

---

## Properties
<a id="property_createdAt"></a>
#### protected $createdAt : \DateTimeImmutable
---
**Type:** \DateTimeImmutable

**Details:**


<a id="property_id"></a>
#### protected $id : int
---
**Type:** <a href="../int"><abbr title="int">int</abbr></a>

**Details:**


<a id="property_updatedAt"></a>
#### protected $updatedAt : ?\DateTimeImmutable
---
**Type:** <a href="../?\DateTimeImmutable"><abbr title="?\DateTimeImmutable">DateTimeImmutable</abbr></a>

**Details:**



---

## Methods

<a id="method_getColumnVal"></a>
### getColumnVal

```
abstract public getColumnVal(string  name) : mixed
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

<a id="method_getCreatedAt"></a>
### getCreatedAt

```
public getCreatedAt() : \DateTimeImmutable
```

##### Returns:

```
\DateTimeImmutable
```

---

<a id="method_getId"></a>
### getId

```
public getId() : int
```

##### Returns:

```
int
```

---

<a id="method_getUpdatedAt"></a>
### getUpdatedAt

```
public getUpdatedAt() : ?\DateTimeImmutable
```

##### Returns:

```
?\DateTimeImmutable
```
