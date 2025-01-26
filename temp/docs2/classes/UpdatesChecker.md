# Class: [\Default](../../packages/Default.md)\UpdatesChecker


---

### Properties
* private $[api_key](#property_api_key)
* private $[recource_id](#property_recource_id)
* private $[update_url](#property_update_url)

---

### Methods

* public [checkUpdate()](#method_checkUpdate)
* public [getApiKey()](#method_getApiKey)
* public [getRecourceId()](#method_getRecourceId)
* public [getUpdateUrl()](#method_getUpdateUrl)
* public [setApiKey()](#method_setApiKey)
* public [setRecourceId()](#method_setRecourceId)
* public [setUpdateUrl()](#method_setUpdateUrl)

---

### Details

* File: [engine/inc/maharder/_includes/traits/UpdatesChecker.php](../../engine/inc/maharder/_includes/traits/UpdatesChecker.php)

---

## Properties
<a id="property_api_key"></a>
#### private $api_key : string
---
**Summary**

Гостевой ключ с доступом на просмотр информации ресурса на сайте

**Type:** <a href="../string"><abbr title="string">string</abbr></a>

**Details:**


<a id="property_recource_id"></a>
#### private $recource_id : ?int
---
**Type:** <a href="../?int"><abbr title="?int">?int</abbr></a>

**Details:**


<a id="property_update_url"></a>
#### private $update_url : string
---
**Type:** <a href="../string"><abbr title="string">string</abbr></a>

**Details:**



---

## Methods

<a id="method_checkUpdate"></a>
### checkUpdate

```
public checkUpdate(int|null  res = null) : array
```

##### Summary

Проверяет наличие и обновления ресурса, используя указанный или текущий идентификатор ресурса.

##### See Also:

 * [\Curl](../\Curl)
 * [\LogGenerator::generateLog()](../../classes/LogGenerator.md#method_generateLog)

##### Parameters:

| Name | Type | Default |
|------|------|---------|
| **$res** | int|null | null |

##### Throws:

| Type | Description |
|------|-------------|
| \JsonException|\Throwable | Исключение, связанное с ошибками в JSON-конверсии (может быть выброшено
при выполнении Telegram-лога). |

##### Returns:

```
array
```
Возвращает массив с данными об обновлении ресурса или список ошибок.

---

<a id="method_getApiKey"></a>
### getApiKey

```
public getApiKey() : string
```

##### Returns:

```
string
```

---

<a id="method_getRecourceId"></a>
### getRecourceId

```
public getRecourceId() : int|null
```

##### Returns:

```
int|null
```

---

<a id="method_getUpdateUrl"></a>
### getUpdateUrl

```
public getUpdateUrl() : string
```

##### Returns:

```
string
```

---

<a id="method_setApiKey"></a>
### setApiKey

```
public setApiKey(string  api_key) : void
```

##### Parameters:

| Name | Type | Default |
|------|------|---------|
| **$api_key** | string |  |

##### Returns:

```
void
```

---

<a id="method_setRecourceId"></a>
### setRecourceId

```
public setRecourceId(int  recource_id) : void
```

##### Parameters:

| Name | Type | Default |
|------|------|---------|
| **$recource_id** | int |  |

##### Returns:

```
void
```

---

<a id="method_setUpdateUrl"></a>
### setUpdateUrl

```
public setUpdateUrl(string  update_url) : void
```

##### Parameters:

| Name | Type | Default |
|------|------|---------|
| **$update_url** | string |  |

##### Returns:

```
void
```
