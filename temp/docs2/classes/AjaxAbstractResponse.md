# Abstract Class: [\Default](../../packages/Default.md)\AjaxAbstractResponse

## Summary:

Абстрактный класс, представляющий базовый ответ в виде JSON.

## Description:

Предназначен для наследования, чтобы реализовать конкретные типы ответов (например, успех или ошибка).


---

### Properties
* public $[data](#property_data)
* public $[message](#property_message)
* public $[meta](#property_meta)
* public $[status](#property_status)
* public $[success](#property_success)
* protected $[data](#property_data)
* protected $[message](#property_message)
* protected $[meta](#property_meta)
* protected $[redirect](#property_redirect)
* protected $[status](#property_status)
* protected $[success](#property_success)

---

### Methods

* public [getRedirect()](#method_getRedirect)
* public [isSuccess()](#method_isSuccess)
* public [send()](#method_send)
* public [setData()](#method_setData)
* public [setMessage()](#method_setMessage)
* public [setMeta()](#method_setMeta)
* public [setRedirect()](#method_setRedirect)
* public [setStatus()](#method_setStatus)
* public [setSuccess()](#method_setSuccess)
* protected [buildResponse()](#method_buildResponse)

---

### Details

* File: [engine/inc/maharder/_includes/responses/AjaxAbstractResponse.php](../../engine/inc/maharder/_includes/responses/AjaxAbstractResponse.php)

---

## Properties
<a id="property_data"></a>
#### public $data : array
---
***Description***

Основные данные ответа.

**Type:** <a href="../array"><abbr title="array">array</abbr></a>

**Details:**


<a id="property_message"></a>
#### public $message : string
---
***Description***

Текстовое сообщение, сопровождающее ответ.

**Type:** <a href="../string"><abbr title="string">string</abbr></a>

**Details:**


<a id="property_meta"></a>
#### public $meta : array
---
***Description***

Дополнительные мета-данные.

**Type:** <a href="../array"><abbr title="array">array</abbr></a>

**Details:**


<a id="property_status"></a>
#### public $status : int
---
***Description***

HTTP статус ответа.

**Type:** <a href="../int"><abbr title="int">int</abbr></a>

**Details:**


<a id="property_success"></a>
#### public $success : bool
---
***Description***

Указывает, успешен ли ответ.

**Type:** <a href="../bool"><abbr title="bool">bool</abbr></a>

**Details:**


<a id="property_data"></a>
#### protected $data : array
---
**Type:** <a href="../array"><abbr title="array">array</abbr></a>

**Details:**


<a id="property_message"></a>
#### protected $message : string
---
**Type:** <a href="../string"><abbr title="string">string</abbr></a>

**Details:**


<a id="property_meta"></a>
#### protected $meta : array
---
**Type:** <a href="../array"><abbr title="array">array</abbr></a>

**Details:**


<a id="property_redirect"></a>
#### protected $redirect : ?string
---
**Type:** <a href="../?string"><abbr title="?string">?string</abbr></a>

**Details:**


<a id="property_status"></a>
#### protected $status : int
---
**Type:** <a href="../int"><abbr title="int">int</abbr></a>

**Details:**


<a id="property_success"></a>
#### protected $success : bool
---
**Type:** <a href="../bool"><abbr title="bool">bool</abbr></a>

**Details:**



---

## Methods

<a id="method_getRedirect"></a>
### getRedirect

```
public getRedirect() : null|string
```

##### Summary

Возвращает URL-адрес перенаправления, установленный для отклика Ajax.

##### See Also:

 * [](../)
 * [\AjaxAbstractResponse::setRedirect()](../../classes/AjaxAbstractResponse.md#method_setRedirect)

##### Returns:

```
null|string
```
URL-адрес перенаправления.

---

<a id="method_isSuccess"></a>
### isSuccess

```
public isSuccess() : bool
```

##### Summary

Проверяет, указано ли успешное выполнение запроса.

##### See Also:

 * [\AjaxAbstractResponse::$success](../../classes/AjaxAbstractResponse.md#property_success)

##### Returns:

```
bool
```
Возвращает true, если запрос выполнен успешно, иначе false.

---

<a id="method_send"></a>
### send

```
public send() : string
```

##### Summary

Отправляет HTTP-ответ в формате JSON и завершает выполнение скрипта.

##### Description

Устанавливает заголовок ответа с указанием типа содержимого (application/json),
HTTP-статус, тело ответа в формате JSON, а затем завершает выполнение.

Заголовки и статус берутся из свойств экземпляра класса, а тело ответа
формируется методом {@see}.

##### See Also:

 * [\AjaxAbstractResponse::buildResponse()](../../classes/AjaxAbstractResponse.md#method_buildResponse)
 * [\AjaxAbstractResponse::$status](../../classes/AjaxAbstractResponse.md#property_status)
 * [\AjaxAbstractResponse::$success](../../classes/AjaxAbstractResponse.md#property_success)
 * [\AjaxAbstractResponse::$message](../../classes/AjaxAbstractResponse.md#property_message)
 * [\AjaxAbstractResponse::$data](../../classes/AjaxAbstractResponse.md#property_data)
 * [\AjaxAbstractResponse::$meta](../../classes/AjaxAbstractResponse.md#property_meta)

##### Returns:

```
string
```

---

<a id="method_setData"></a>
### setData

```
public setData(array  data) : self
```

##### Summary

Устанавливает данные ответа.

##### See Also:

 * [\AjaxAbstractResponse::$data](../../classes/AjaxAbstractResponse.md#property_data)

##### Parameters:

| Name | Type | Default |
|------|------|---------|
| **$data** | array |  |

##### Returns:

```
self
```
Экземпляр текущего объекта для цепочки вызовов.

---

<a id="method_setMessage"></a>
### setMessage

```
public setMessage(string  message) : self
```

##### Summary

Устанавливает сообщение ответа.

##### See Also:

 * [\AjaxAbstractResponse::$message](../../classes/AjaxAbstractResponse.md#property_message)

##### Parameters:

| Name | Type | Default |
|------|------|---------|
| **$message** | string |  |

##### Returns:

```
self
```
Экземпляр текущего объекта для цепочки вызовов.

---

<a id="method_setMeta"></a>
### setMeta

```
public setMeta(array  meta) : self
```

##### Summary

Устанавливает дополнительные мета-данные.

##### See Also:

 * [\AjaxAbstractResponse::$meta](../../classes/AjaxAbstractResponse.md#property_meta)

##### Parameters:

| Name | Type | Default |
|------|------|---------|
| **$meta** | array |  |

##### Returns:

```
self
```
Экземпляр текущего объекта для цепочки вызовов.

---

<a id="method_setRedirect"></a>
### setRedirect

```
public setRedirect(string  redirect) : \AjaxAbstractResponse
```

##### Summary

Устанавливает URL для перенаправления.

##### Description

Метод сохраняет указанный URL в свойстве `redirect` и возвращает
текущий экземпляр объекта для цепочки вызовов.

##### See Also:

 * [\AjaxAbstractResponse::$redirect](../../classes/AjaxAbstractResponse.md#property_redirect)

##### Parameters:

| Name | Type | Default |
|------|------|---------|
| **$redirect** | string |  |

##### Returns:

```
\AjaxAbstractResponse
```
Экземпляр текущего объекта для цепочки вызовов.

---

<a id="method_setStatus"></a>
### setStatus

```
public setStatus(int  status) : self
```

##### Summary

Устанавливает HTTP статус ответа.

##### See Also:

 * [\AjaxAbstractResponse::$status](../../classes/AjaxAbstractResponse.md#property_status)

##### Parameters:

| Name | Type | Default |
|------|------|---------|
| **$status** | int |  |

##### Returns:

```
self
```
Экземпляр текущего объекта для цепочки вызовов.

---

<a id="method_setSuccess"></a>
### setSuccess

```
public setSuccess(bool  success) : \AjaxAbstractResponse
```

##### Summary

Устанавливает статус успешности выполнения операции.

##### Description

Метод сохраняет переданное булево значение в свойстве `success`
и возвращает текущий экземпляр объекта для реализации цепочки вызовов.

##### See Also:

 * [\AjaxAbstractResponse::$success](../../classes/AjaxAbstractResponse.md#property_success)

##### Parameters:

| Name | Type | Default |
|------|------|---------|
| **$success** | bool |  |

##### Returns:

```
\AjaxAbstractResponse
```
Экземпляр текущего объекта для цепочки вызовов.

---

<a id="method_buildResponse"></a>
### buildResponse

```
protected buildResponse() : string
```

##### Summary

Формирует тело ответа в формате JSON.

##### Description

Метод преобразует свойства текущего экземпляра класса, такие как успех операции,
HTTP-статус, сообщение, данные и мета-информацию, в JSON-строку.

##### See Also:

 * [\AjaxAbstractResponse::$success](../../classes/AjaxAbstractResponse.md#property_success)
 * [\AjaxAbstractResponse::$status](../../classes/AjaxAbstractResponse.md#property_status)
 * [\AjaxAbstractResponse::$message](../../classes/AjaxAbstractResponse.md#property_message)
 * [\AjaxAbstractResponse::$data](../../classes/AjaxAbstractResponse.md#property_data)
 * [\AjaxAbstractResponse::$meta](../../classes/AjaxAbstractResponse.md#property_meta)

##### Returns:

```
string
```
JSON-представление ответа.
