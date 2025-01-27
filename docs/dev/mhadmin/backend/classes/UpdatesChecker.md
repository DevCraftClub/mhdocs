# Класс: [\Default](../../packages/Default.md)\UpdatesChecker

## Краткое содержание:

Трейт UpdatesChecker предоставляет функции для работы с информацией об обновлениях ресурсов.

## Описание:

Основной функционал включает методы для установки и получения параметров API, таких как URL для запросов,
ключ API и идентификатор ресурса, а также метод для проверки обновлений ресурса через API.


---

### Свойства
* public $[api_key](#property_api_key)
* public $[recource_id](#property_recource_id)
* public $[update_url](#property_update_url)
* private $[api_key](#property_api_key)
* private $[recource_id](#property_recource_id)
* private $[update_url](#property_update_url)

---

### Методы

* public [checkUpdate()](#method_checkUpdate)
* public [getApiKey()](#method_getApiKey)
* public [getRecourceId()](#method_getRecourceId)
* public [getUpdateUrl()](#method_getUpdateUrl)
* public [setApiKey()](#method_setApiKey)
* public [setRecourceId()](#method_setRecourceId)
* public [setUpdateUrl()](#method_setUpdateUrl)

---

### Подробности

* File: [engine/inc/maharder/_includes/traits/UpdatesChecker.php](../../engine/inc/maharder/_includes/traits/UpdatesChecker.php)

---

## Свойства
<a id="property_api_key"></a>
#### public $api_key : string
---
***Описание***

Гостевой ключ с доступом к информации о ресурсе.

**Тип:** <a href="../string"><abbr title="string">string</abbr></a>

**Подробности:**


<a id="property_recource_id"></a>
#### public $recource_id : int|null
---
***Описание***

Идентификатор ресурса, для которого проверяются обновления.

**Тип:** <a href="../int|null"><abbr title="int|null">int|null</abbr></a>

**Подробности:**


<a id="property_update_url"></a>
#### public $update_url : string
---
***Описание***

URL API, используемый для проверки обновлений.

**Тип:** <a href="../string"><abbr title="string">string</abbr></a>

**Подробности:**


<a id="property_api_key"></a>
#### private $api_key : string
---
**Краткое содержание**

Гостевой ключ с доступом на просмотр информации ресурса на сайте

**Тип:** <a href="../string"><abbr title="string">string</abbr></a>

**Подробности:**


<a id="property_recource_id"></a>
#### private $recource_id : ?int
---
**Тип:** <a href="../?int"><abbr title="?int">?int</abbr></a>

**Подробности:**


<a id="property_update_url"></a>
#### private $update_url : string
---
**Тип:** <a href="../string"><abbr title="string">string</abbr></a>

**Подробности:**



---

## Методы

<a id="method_checkUpdate"></a>
### checkUpdate

```
public checkUpdate(int|null  res = null) : array
```

##### Краткое содержание

Проверяет наличие и обновления ресурса, используя указанный или текущий идентификатор ресурса.

##### Смотри так-же:

 * [\LogGenerator::generateLog()](../../classes/LogGenerator.md#method_generateLog)
 * [\Curl](../\Curl)

##### Свойства:

| Название | Тип | По умолчанию |
|----------|-----|----------|
| **$res** | int|null | null |

##### Ошибки:

| Тип | Описание |
|-----|----------|
| \JsonException|\Throwable | Исключение, связанное с ошибками в JSON-конверсии (может быть выброшено
при выполнении Telegram-лога). |

##### Возвращает:

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

##### Возвращает:

```
string
```

---

<a id="method_getRecourceId"></a>
### getRecourceId

```
public getRecourceId() : int|null
```

##### Возвращает:

```
int|null
```

---

<a id="method_getUpdateUrl"></a>
### getUpdateUrl

```
public getUpdateUrl() : string
```

##### Возвращает:

```
string
```

---

<a id="method_setApiKey"></a>
### setApiKey

```
public setApiKey(string  api_key) : void
```

##### Свойства:

| Название | Тип | По умолчанию |
|----------|-----|----------|
| **$api_key** | string |  |

##### Возвращает:

```
void
```

---

<a id="method_setRecourceId"></a>
### setRecourceId

```
public setRecourceId(int  recource_id) : void
```

##### Свойства:

| Название | Тип | По умолчанию |
|----------|-----|----------|
| **$recource_id** | int |  |

##### Возвращает:

```
void
```

---

<a id="method_setUpdateUrl"></a>
### setUpdateUrl

```
public setUpdateUrl(string  update_url) : void
```

##### Свойства:

| Название | Тип | По умолчанию |
|----------|-----|----------|
| **$update_url** | string |  |

##### Возвращает:

```
void
```
