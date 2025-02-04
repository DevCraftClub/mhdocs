# Класс: SuccessResponseAjax

## Краткое содержание:

Представляет успешный HTTP-ответ.


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

* public [__construct()](#method___construct)
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

* Путь: engine/inc/maharder/_includes/responses/SuccessResponseAjax.php
* Смотри так-же:
    * [\AjaxAbstractResponse](./AjaxAbstractResponse.md)

---

## Свойства

[](){#property_data}
#### public $data : array
---
***Описание***

Основные данные ответа.

**Тип:** <abbr title="array">Массив</abbr>

**Подробности:**

* Унаследовано от: [\AjaxAbstractResponse](./AjaxAbstractResponse.md)

[](){#property_message}
#### public $message : string
---
***Описание***

Текстовое сообщение, сопровождающее ответ.

**Тип:** <abbr title="string">Текст</abbr>

**Подробности:**

* Унаследовано от: [\AjaxAbstractResponse](./AjaxAbstractResponse.md)

[](){#property_meta}
#### public $meta : array
---
***Описание***

Дополнительные мета-данные.

**Тип:** <abbr title="array">Массив</abbr>

**Подробности:**

* Унаследовано от: [\AjaxAbstractResponse](./AjaxAbstractResponse.md)

[](){#property_status}
#### public $status : int
---
***Описание***

HTTP статус ответа.

**Тип:** <abbr title="int">Целое число</abbr>

**Подробности:**

* Унаследовано от: [\AjaxAbstractResponse](./AjaxAbstractResponse.md)

[](){#property_success}
#### public $success : bool
---
***Описание***

Указывает, успешен ли ответ.

**Тип:** <abbr title="bool">Логические значения</abbr>

**Подробности:**

* Унаследовано от: [\AjaxAbstractResponse](./AjaxAbstractResponse.md)

[](){#property_data}
#### protected $data : array
---
**Тип:** <abbr title="array">Массив</abbr>

**Подробности:**

* Унаследовано от: [\AjaxAbstractResponse](./AjaxAbstractResponse.md)

[](){#property_message}
#### protected $message : string
---
**Тип:** <abbr title="string">Текст</abbr>

**Подробности:**

* Унаследовано от: [\AjaxAbstractResponse](./AjaxAbstractResponse.md)

[](){#property_meta}
#### protected $meta : array
---
**Тип:** <abbr title="array">Массив</abbr>

**Подробности:**

* Унаследовано от: [\AjaxAbstractResponse](./AjaxAbstractResponse.md)

[](){#property_redirect}
#### protected $redirect : ?string
---
**Тип:** <abbr title="?string">Текст или null</abbr>

**Подробности:**

* Унаследовано от: [\AjaxAbstractResponse](./AjaxAbstractResponse.md)

[](){#property_status}
#### protected $status : int
---
**Тип:** <abbr title="int">Целое число</abbr>

**Подробности:**

* Унаследовано от: [\AjaxAbstractResponse](./AjaxAbstractResponse.md)

[](){#property_success}
#### protected $success : bool
---
**Тип:** <abbr title="bool">Логические значения</abbr>

**Подробности:**

* Унаследовано от: [\AjaxAbstractResponse](./AjaxAbstractResponse.md)

---

## Методы

[](){#method___construct}

### __construct

```
public __construct(int  status = 200) : mixed
```

##### Краткое содержание

Создаёт объект успешного ответа.

##### Описание

Устанавливает HTTP-статус (по умолчанию 200), сообщение (локализуется через функцию __)
и флаг успешного выполнения.

##### Смотри так-же:

* [\AjaxAbstractResponse::$message](./AjaxAbstractResponse.md#property_message)
* [\AjaxAbstractResponse::$success](./AjaxAbstractResponse.md#property_success)
* [\AjaxAbstractResponse::$status](./AjaxAbstractResponse.md#property_status)

##### Свойства:

| Название    | Тип | По умолчанию |
|-------------|-----|--------------|
| **$status** | int | 200          |

##### Ошибки:

| Тип        | Описание |
|------------|----------|
| \Throwable |          |

##### Возвращает:

```
mixed
```

---

[](){#method_getRedirect}

### getRedirect

```
public getRedirect() : null|string
```

##### Краткое содержание

Возвращает URL-адрес перенаправления, установленный для отклика Ajax.

##### Смотри так-же:

* [\AjaxAbstractResponse::setRedirect()](./AjaxAbstractResponse.md#method_setRedirect)

##### Возвращает:

```
null|string
```

URL-адрес перенаправления.

---

[](){#method_isSuccess}

### isSuccess

```
public isSuccess() : bool
```

##### Краткое содержание

Проверяет, указано ли успешное выполнение запроса.

##### Смотри так-же:

* [\AjaxAbstractResponse::$success](./AjaxAbstractResponse.md#property_success)

##### Возвращает:

```
bool
```

Возвращает true, если запрос выполнен успешно, иначе false.

---

[](){#method_send}

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

* [\AjaxAbstractResponse::buildResponse()](./AjaxAbstractResponse.md#method_buildResponse)
* [\AjaxAbstractResponse::$status](./AjaxAbstractResponse.md#property_status)
* [\AjaxAbstractResponse::$success](./AjaxAbstractResponse.md#property_success)
* [\AjaxAbstractResponse::$message](./AjaxAbstractResponse.md#property_message)
* [\AjaxAbstractResponse::$data](./AjaxAbstractResponse.md#property_data)
* [\AjaxAbstractResponse::$meta](./AjaxAbstractResponse.md#property_meta)

##### Возвращает:

```
string
```

---

[](){#method_setData}

### setData

```
public setData(array  data) : self
```

##### Краткое содержание

Устанавливает данные ответа.

##### Смотри так-же:

* [\AjaxAbstractResponse::$data](./AjaxAbstractResponse.md#property_data)

##### Свойства:

| Название  | Тип   | По умолчанию |
|-----------|-------|--------------|
| **$data** | array |              |

##### Возвращает:

```
self
```

Экземпляр текущего объекта для цепочки вызовов.

---

[](){#method_setMessage}

### setMessage

```
public setMessage(string  message) : self
```

##### Краткое содержание

Устанавливает сообщение ответа.

##### Смотри так-же:

* [\AjaxAbstractResponse::$message](./AjaxAbstractResponse.md#property_message)

##### Свойства:

| Название     | Тип    | По умолчанию |
|--------------|--------|--------------|
| **$message** | string |              |

##### Возвращает:

```
self
```

Экземпляр текущего объекта для цепочки вызовов.

---

[](){#method_setMeta}

### setMeta

```
public setMeta(array  meta) : self
```

##### Краткое содержание

Устанавливает дополнительные мета-данные.

##### Смотри так-же:

* [\AjaxAbstractResponse::$meta](./AjaxAbstractResponse.md#property_meta)

##### Свойства:

| Название  | Тип   | По умолчанию |
|-----------|-------|--------------|
| **$meta** | array |              |

##### Возвращает:

```
self
```

Экземпляр текущего объекта для цепочки вызовов.

---

[](){#method_setRedirect}

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

* [\AjaxAbstractResponse::$redirect](./AjaxAbstractResponse.md#property_redirect)

##### Свойства:

| Название      | Тип    | По умолчанию |
|---------------|--------|--------------|
| **$redirect** | string |              |

##### Возвращает:

```
\AjaxAbstractResponse
```

Экземпляр текущего объекта для цепочки вызовов.

---

[](){#method_setStatus}

### setStatus

```
public setStatus(int  status) : self
```

##### Краткое содержание

Устанавливает HTTP статус ответа.

##### Смотри так-же:

* [\AjaxAbstractResponse::$status](./AjaxAbstractResponse.md#property_status)

##### Свойства:

| Название    | Тип | По умолчанию |
|-------------|-----|--------------|
| **$status** | int |              |

##### Возвращает:

```
self
```

Экземпляр текущего объекта для цепочки вызовов.

---

[](){#method_setSuccess}

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

* [\AjaxAbstractResponse::$success](./AjaxAbstractResponse.md#property_success)

##### Свойства:

| Название     | Тип  | По умолчанию |
|--------------|------|--------------|
| **$success** | bool |              |

##### Возвращает:

```
\AjaxAbstractResponse
```

Экземпляр текущего объекта для цепочки вызовов.

---

[](){#method_buildResponse}

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

* [\AjaxAbstractResponse::$success](./AjaxAbstractResponse.md#property_success)
* [\AjaxAbstractResponse::$status](./AjaxAbstractResponse.md#property_status)
* [\AjaxAbstractResponse::$message](./AjaxAbstractResponse.md#property_message)
* [\AjaxAbstractResponse::$data](./AjaxAbstractResponse.md#property_data)
* [\AjaxAbstractResponse::$meta](./AjaxAbstractResponse.md#property_meta)

##### Возвращает:

```
string
```

JSON-представление ответа.
