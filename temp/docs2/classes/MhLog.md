# Class: [\Default](../../packages/Default.md)\MhLog


---

### Properties
* protected $[createdAt](#property_createdAt)
* protected $[id](#property_id)
* protected $[updatedAt](#property_updatedAt)
* private $[fn_name](#property_fn_name)
* private $[log_type](#property_log_type)
* private $[message](#property_message)
* private $[plugin](#property_plugin)
* private $[time](#property_time)
* private $[uuid](#property_uuid)

---

### Methods

* public [getColumnVal()](#method_getColumnVal)
* public [getCreatedAt()](#method_getCreatedAt)
* public [getFnName()](#method_getFnName)
* public [getId()](#method_getId)
* public [getLogType()](#method_getLogType)
* public [getMessage()](#method_getMessage)
* public [getPlugin()](#method_getPlugin)
* public [getTime()](#method_getTime)
* public [getUpdatedAt()](#method_getUpdatedAt)
* public [getUuid()](#method_getUuid)
* public [setFnName()](#method_setFnName)
* public [setLogType()](#method_setLogType)
* public [setMessage()](#method_setMessage)
* public [setPlugin()](#method_setPlugin)
* public [setTime()](#method_setTime)
* public [setUuid()](#method_setUuid)

---

### Details

* File: [engine/inc/maharder/_modules/admin/models/MhLog.php](../../engine/inc/maharder/_modules/admin/models/MhLog.php)

---

## Properties
<a id="property_createdAt"></a>
#### protected $createdAt : \DateTimeImmutable
---
**Type:** \DateTimeImmutable

**Details:**
* Inherited From: [\BasisModel](../classes/BasisModel.md)


<a id="property_id"></a>
#### protected $id : int
---
**Type:** <a href="../int"><abbr title="int">int</abbr></a>

**Details:**
* Inherited From: [\BasisModel](../classes/BasisModel.md)


<a id="property_updatedAt"></a>
#### protected $updatedAt : ?\DateTimeImmutable
---
**Type:** <a href="../?\DateTimeImmutable"><abbr title="?\DateTimeImmutable">DateTimeImmutable</abbr></a>

**Details:**
* Inherited From: [\BasisModel](../classes/BasisModel.md)


<a id="property_fn_name"></a>
#### private $fn_name : string
---
**Type:** <a href="../string"><abbr title="string">string</abbr></a>

**Details:**


<a id="property_log_type"></a>
#### private $log_type : string
---
**Type:** <a href="../string"><abbr title="string">string</abbr></a>

**Details:**


<a id="property_message"></a>
#### private $message : string
---
**Type:** <a href="../string"><abbr title="string">string</abbr></a>

**Details:**


<a id="property_plugin"></a>
#### private $plugin : string
---
**Type:** <a href="../string"><abbr title="string">string</abbr></a>

**Details:**


<a id="property_time"></a>
#### private $time : \DateTimeImmutable
---
**Type:** \DateTimeImmutable

**Details:**


<a id="property_uuid"></a>
#### private $uuid : \Ramsey\Uuid\UuidInterface
---
**Type:** \Ramsey\Uuid\UuidInterface

**Details:**



---

## Methods

<a id="method_getColumnVal"></a>
### getColumnVal

```
public getColumnVal(string  name) : mixed
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

<a id="method_getFnName"></a>
### getFnName

```
public getFnName() : string
```

##### Returns:

```
string
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

<a id="method_getLogType"></a>
### getLogType

```
public getLogType() : string
```

##### Returns:

```
string
```

---

<a id="method_getMessage"></a>
### getMessage

```
public getMessage() : string
```

##### Returns:

```
string
```

---

<a id="method_getPlugin"></a>
### getPlugin

```
public getPlugin() : string
```

##### Returns:

```
string
```

---

<a id="method_getTime"></a>
### getTime

```
public getTime() : \DateTimeImmutable
```

##### Returns:

```
\DateTimeImmutable
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

---

<a id="method_getUuid"></a>
### getUuid

```
public getUuid() : \Ramsey\Uuid\UuidInterface
```

##### Returns:

```
\Ramsey\Uuid\UuidInterface
```

---

<a id="method_setFnName"></a>
### setFnName

```
public setFnName(string  fn_name) : void
```

##### Parameters:

| Name | Type | Default |
|------|------|---------|
| **$fn_name** | string |  |

##### Returns:

```
void
```

---

<a id="method_setLogType"></a>
### setLogType

```
public setLogType(string  log_type) : void
```

##### Parameters:

| Name | Type | Default |
|------|------|---------|
| **$log_type** | string |  |

##### Returns:

```
void
```

---

<a id="method_setMessage"></a>
### setMessage

```
public setMessage(string  message) : void
```

##### Parameters:

| Name | Type | Default |
|------|------|---------|
| **$message** | string |  |

##### Returns:

```
void
```

---

<a id="method_setPlugin"></a>
### setPlugin

```
public setPlugin(string  plugin) : void
```

##### Parameters:

| Name | Type | Default |
|------|------|---------|
| **$plugin** | string |  |

##### Returns:

```
void
```

---

<a id="method_setTime"></a>
### setTime

```
public setTime(\DateTimeImmutable  time) : void
```

##### Parameters:

| Name | Type | Default |
|------|------|---------|
| **$time** | \DateTimeImmutable |  |

##### Returns:

```
void
```

---

<a id="method_setUuid"></a>
### setUuid

```
public setUuid(\Ramsey\Uuid\UuidInterface  uuid) : void
```

##### Parameters:

| Name | Type | Default |
|------|------|---------|
| **$uuid** | \Ramsey\Uuid\UuidInterface |  |

##### Returns:

```
void
```
