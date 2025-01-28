# Абстрактный класс: AjaxAbstractResponse

## Краткое содержание:

Абстрактный класс, представляющий базовый ответ в виде JSON.

## Описание:

Предназначен для наследования, чтобы реализовать конкретные типы ответов (например, успех или ошибка).


---

### Свойства
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

### Методы

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

### Подробности

* Путь: engine/inc/maharder/_includes/responses/AjaxAbstractResponse.php

---

## Свойства
<a id="property_data"></a>
#### public $data : array
---
***Описание***

Основные данные ответа.

**Тип:** <abbr title="array">Массив</abbr>


<a id="property_message"></a>
#### public $message : string
---
***Описание***

Текстовое сообщение, сопровождающее ответ.

**Тип:** <abbr title="string">Текст</abbr>


<a id="property_meta"></a>
#### public $meta : array
---
***Описание***

Дополнительные мета-данные.

**Тип:** <abbr title="array">Массив</abbr>


<a id="property_status"></a>
#### public $status : int
---
***Описание***

HTTP статус ответа.

**Тип:** <abbr title="int">Целое число</abbr>


<a id="property_success"></a>
#### public $success : bool
---
***Описание***

Указывает, успешен ли ответ.

**Тип:** <abbr title="bool">Логические значения</abbr>


<a id="property_data"></a>
#### protected $data : array
---
**Тип:** <abbr title="array">Массив</abbr>


<a id="property_message"></a>
#### protected $message : string
---
**Тип:** <abbr title="string">Текст</abbr>


<a id="property_meta"></a>
#### protected $meta : array
---
**Тип:** <abbr title="array">Массив</abbr>

**Подробности:**


<a id="property_redirect"></a>
#### protected $redirect : ?string
---
**Тип:** <abbr title="?string">Текст или null</abbr>


<a id="property_status"></a>
#### protected $status : int
---
**Тип:** <abbr title="int">Целое число</abbr>


<a id="property_success"></a>
#### protected $success : bool
---
**Тип:** <abbr title="bool">Логические значения</abbr>



---

## Методы

<a id="method_getRedirect"></a>
### getRedirect

```
public getRedirect() : null|string
```

##### Краткое содержание

Возвращает URL-адрес перенаправления, установленный для отклика Ajax.

##### Смотри так-же:

 * [\AjaxAbstractResponse::setRedirect()](#method_setRedirect)

##### Возвращает:

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

##### Краткое содержание

Проверяет, указано ли успешное выполнение запроса.

##### Смотри так-же:

 * [\AjaxAbstractResponse::$success](#property_success)

##### Возвращает:

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

##### Краткое содержание

Отправляет HTTP-ответ в формате JSON и завершает выполнение скрипта.

##### Описание

Устанавливает заголовок ответа с указанием типа содержимого (application/json),
HTTP-статус, тело ответа в формате JSON, а затем завершает выполнение.

Заголовки и статус берутся из свойств экземпляра класса, а тело ответа
формируется методом {@see}.

##### Смотри так-же:

 * [\AjaxAbstractResponse::buildResponse()](#method_buildResponse)
 * [\AjaxAbstractResponse::$status](#property_status)
 * [\AjaxAbstractResponse::$success](#property_success)
 * [\AjaxAbstractResponse::$message](#property_message)
 * [\AjaxAbstractResponse::$data](#property_data)
 * [\AjaxAbstractResponse::$meta](#property_meta)

##### Возвращает:

```
string
```

---

<a id="method_setData"></a>
### setData

```
public setData(array  data) : self
```

##### Краткое содержание

Устанавливает данные ответа.

##### Смотри так-же:

 * [\AjaxAbstractResponse::$data](#property_data)

##### Свойства:

| Название | Тип | По умолчанию |
|----------|-----|----------|
| **$data** | array |  |

##### Возвращает:

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

##### Краткое содержание

Устанавливает сообщение ответа.

##### Смотри так-же:

 * [\AjaxAbstractResponse::$message](#property_message)

##### Свойства:

| Название | Тип | По умолчанию |
|----------|-----|----------|
| **$message** | string |  |

##### Возвращает:

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

##### Краткое содержание

Устанавливает дополнительные мета-данные.

##### Смотри так-же:

 * [\AjaxAbstractResponse::$meta](#property_meta)

##### Свойства:

| Название | Тип | По умолчанию |
|----------|-----|----------|
| **$meta** | array |  |

##### Возвращает:

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

##### Краткое содержание

Устанавливает URL для перенаправления.

##### Описание

Метод сохраняет указанный URL в свойстве `redirect` и возвращает
текущий экземпляр объекта для цепочки вызовов.

##### Смотри так-же:

 * [\AjaxAbstractResponse::$redirect](#property_redirect)

##### Свойства:

| Название | Тип | По умолчанию |
|----------|-----|----------|
| **$redirect** | string |  |

##### Возвращает:

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

##### Краткое содержание

Устанавливает HTTP статус ответа.

##### Смотри так-же:

 * [\AjaxAbstractResponse::$status](#property_status)

##### Свойства:

| Название | Тип | По умолчанию |
|----------|-----|----------|
| **$status** | int |  |

##### Возвращает:

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

##### Краткое содержание

Устанавливает статус успешности выполнения операции.

##### Описание

Метод сохраняет переданное булево значение в свойстве `success`
и возвращает текущий экземпляр объекта для реализации цепочки вызовов.

##### Смотри так-же:

 * [\AjaxAbstractResponse::$success](#property_success)

##### Свойства:

| Название | Тип | По умолчанию |
|----------|-----|----------|
| **$success** | bool |  |

##### Возвращает:

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

##### Краткое содержание

Формирует тело ответа в формате JSON.

##### Описание

Метод преобразует свойства текущего экземпляра класса, такие как успех операции,
HTTP-статус, сообщение, данные и мета-информацию, в JSON-строку.

##### Смотри так-же:

 * [\AjaxAbstractResponse::$success](#property_success)
 * [\AjaxAbstractResponse::$status](#property_status)
 * [\AjaxAbstractResponse::$message](#property_message)
 * [\AjaxAbstractResponse::$data](#property_data)
 * [\AjaxAbstractResponse::$meta](#property_meta)

##### Возвращает:

```
string
```
JSON-представление ответа.
