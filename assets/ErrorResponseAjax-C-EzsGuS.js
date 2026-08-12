import{r as e}from"./rolldown-runtime-QTnfLwEv.js";import{t}from"./jsx-runtime-By8HlURe.js";var n=e(t()),r={title:`Класс: ErrorResponseAjax`,description:`Документация по плагину класс: errorresponseajax для DLE.`},i=new Date(1786541452e3),a=`

## Краткое содержание: [#краткое-содержание]

Класс для формирования ответов об ошибке.

## Описание: [#описание]

Данный класс наследует [AjaxAbstractResponse](./AjaxAbstractResponse) и предназначен для создания
ответа с сообщением об ошибке. По умолчанию возвращается HTTP-статус 400 (Bad Request) и общее сообщение об ошибке.

***

### Свойства [#свойства]

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

***

### Методы [#методы]

* public [\\_\\_construct()](#method___construct)
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

***

### Подробности [#подробности]

* Путь: engine/inc/maharder/\\_includes/responses/ErrorResponseAjax.php
* Смотри так-же:
  * [\\AjaxAbstractResponse::$message](./AjaxAbstractResponse#property_message)
  * [\\AjaxAbstractResponse::$success](./AjaxAbstractResponse#property_success)
  * [\\AjaxAbstractResponse::$status](./AjaxAbstractResponse#property_status)

***

## Свойства [#свойства-1]

<span id="property_data" />

#### public $data : array [#public-data--array]

***

***Описание***

Основные данные ответа.

**Тип:** <abbr title="array">Массив</abbr>

**Подробности:**

* Унаследовано от: [\\AjaxAbstractResponse](./AjaxAbstractResponse)

<span id="property_message" />

#### public $message : string [#public-message--string]

***

***Описание***

Текстовое сообщение, сопровождающее ответ.

**Тип:** <abbr title="string">Текст</abbr>

**Подробности:**

* Унаследовано от: [\\AjaxAbstractResponse](./AjaxAbstractResponse)

<span id="property_meta" />

#### public $meta : array [#public-meta--array]

***

***Описание***

Дополнительные мета-данные.

**Тип:** <abbr title="array">Массив</abbr>

**Подробности:**

* Унаследовано от: [\\AjaxAbstractResponse](./AjaxAbstractResponse)

<span id="property_status" />

#### public $status : int [#public-status--int]

***

***Описание***

HTTP статус ответа.

**Тип:** <abbr title="int">Целое число</abbr>

**Подробности:**

* Унаследовано от: [\\AjaxAbstractResponse](./AjaxAbstractResponse)

<span id="property_success" />

#### public $success : bool [#public-success--bool]

***

***Описание***

Указывает, успешен ли ответ.

**Тип:** <abbr title="bool">Логические значения</abbr>

**Подробности:**

* Унаследовано от: [\\AjaxAbstractResponse](./AjaxAbstractResponse)

<span id="property_data" />

#### protected $data : array [#protected-data--array]

***

**Тип:** <abbr title="array">Массив</abbr>

**Подробности:**

* Унаследовано от: [\\AjaxAbstractResponse](./AjaxAbstractResponse)

<span id="property_message" />

#### protected $message : string [#protected-message--string]

***

**Тип:** <abbr title="string">Текст</abbr>

**Подробности:**

* Унаследовано от: [\\AjaxAbstractResponse](./AjaxAbstractResponse)

<span id="property_meta" />

#### protected $meta : array [#protected-meta--array]

***

**Тип:** <abbr title="array">Массив</abbr>

**Подробности:**

* Унаследовано от: [\\AjaxAbstractResponse](./AjaxAbstractResponse)

<span id="property_redirect" />

#### protected $redirect : ?string [#protected-redirect--string]

***

**Тип:** <abbr title="?string">Текст или null</abbr>

**Подробности:**

* Унаследовано от: [\\AjaxAbstractResponse](./AjaxAbstractResponse)

<span id="property_status" />

#### protected $status : int [#protected-status--int]

***

**Тип:** <abbr title="int">Целое число</abbr>

**Подробности:**

* Унаследовано от: [\\AjaxAbstractResponse](./AjaxAbstractResponse)

<span id="property_success" />

#### protected $success : bool [#protected-success--bool]

***

**Тип:** <abbr title="bool">Логические значения</abbr>

**Подробности:**

* Унаследовано от: [\\AjaxAbstractResponse](./AjaxAbstractResponse)

***

## Методы [#методы-1]

<span id="method___construct" />

### \\_\\_construct [#__construct]

\`\`\`
public __construct(int  status = 400) : mixed
\`\`\`

##### Краткое содержание [#краткое-содержание-1]

Конструктор класса ErrorResponse.

##### Описание [#описание-1]

Устанавливает HTTP-статус ответа, сообщение об ошибке и флаг успешности.
По умолчанию используется статус 400 и стандартное сообщение.

##### Смотри так-же: [#смотри-так-же]

* [\\AjaxAbstractResponse::$message](./AjaxAbstractResponse#property_message)
* [\\AjaxAbstractResponse::$success](./AjaxAbstractResponse#property_success)
* [\\_\\_()](../index#function___)
* [\\AjaxAbstractResponse::$status](./AjaxAbstractResponse#property_status)

##### Свойства: [#свойства-2]

| Название    | Тип | По умолчанию |
| ----------- | --- | ------------ |
| **$status** | int | 400          |

##### Ошибки: [#ошибки]

| Тип        | Описание |
| ---------- | -------- |
| \\Throwable |          |

##### Возвращает: [#возвращает]

\`\`\`
mixed
\`\`\`

***

<span id="method_getRedirect" />

### getRedirect [#getredirect]

\`\`\`
public getRedirect() : null|string
\`\`\`

##### Краткое содержание [#краткое-содержание-2]

Возвращает URL-адрес перенаправления, установленный для отклика Ajax.

##### Смотри так-же: [#смотри-так-же-1]

* [\\AjaxAbstractResponse::setRedirect()](./AjaxAbstractResponse#method_setRedirect)

##### Возвращает: [#возвращает-1]

\`\`\`
null|string
\`\`\`

URL-адрес перенаправления.

***

<span id="method_isSuccess" />

### isSuccess [#issuccess]

\`\`\`
public isSuccess() : bool
\`\`\`

##### Краткое содержание [#краткое-содержание-3]

Проверяет, указано ли успешное выполнение запроса.

##### Смотри так-же: [#смотри-так-же-2]

* [\\AjaxAbstractResponse::$success](./AjaxAbstractResponse#property_success)

##### Возвращает: [#возвращает-2]

\`\`\`
bool
\`\`\`

Возвращает true, если запрос выполнен успешно, иначе false.

***

<span id="method_send" />

### send [#send]

\`\`\`
public send() : string
\`\`\`

##### Краткое содержание [#краткое-содержание-4]

Отправляет HTTP-ответ в формате JSON и завершает выполнение скрипта.

##### Описание [#описание-2]

Устанавливает заголовок ответа с указанием типа содержимого (application/json),
HTTP-статус, тело ответа в формате JSON, а затем завершает выполнение.

Заголовки и статус берутся из свойств экземпляра класса, а тело ответа
формируется методом \\{@see}.

##### Смотри так-же: [#смотри-так-же-3]

* [\\AjaxAbstractResponse::buildResponse()](./AjaxAbstractResponse#method_buildResponse)
* [\\AjaxAbstractResponse::$status](./AjaxAbstractResponse#property_status)
* [\\AjaxAbstractResponse::$success](./AjaxAbstractResponse#property_success)
* [\\AjaxAbstractResponse::$message](./AjaxAbstractResponse#property_message)
* [\\AjaxAbstractResponse::$data](./AjaxAbstractResponse#property_data)
* [\\AjaxAbstractResponse::$meta](./AjaxAbstractResponse#property_meta)

##### Возвращает: [#возвращает-3]

\`\`\`
string
\`\`\`

***

<span id="method_setData" />

### setData [#setdata]

\`\`\`
public setData(array  data) : self
\`\`\`

##### Краткое содержание [#краткое-содержание-5]

Устанавливает данные ответа.

##### Смотри так-же: [#смотри-так-же-4]

* [\\AjaxAbstractResponse::$data](./AjaxAbstractResponse#property_data)

##### Свойства: [#свойства-3]

| Название  | Тип   | По умолчанию |
| --------- | ----- | ------------ |
| **$data** | array |              |

##### Возвращает: [#возвращает-4]

\`\`\`
self
\`\`\`

Экземпляр текущего объекта для цепочки вызовов.

***

<span id="method_setMessage" />

### setMessage [#setmessage]

\`\`\`
public setMessage(string  message) : self
\`\`\`

##### Краткое содержание [#краткое-содержание-6]

Устанавливает сообщение ответа.

##### Смотри так-же: [#смотри-так-же-5]

* [\\AjaxAbstractResponse::$message](./AjaxAbstractResponse#property_message)

##### Свойства: [#свойства-4]

| Название     | Тип    | По умолчанию |
| ------------ | ------ | ------------ |
| **$message** | string |              |

##### Возвращает: [#возвращает-5]

\`\`\`
self
\`\`\`

Экземпляр текущего объекта для цепочки вызовов.

***

<span id="method_setMeta" />

### setMeta [#setmeta]

\`\`\`
public setMeta(array  meta) : self
\`\`\`

##### Краткое содержание [#краткое-содержание-7]

Устанавливает дополнительные мета-данные.

##### Смотри так-же: [#смотри-так-же-6]

* [\\AjaxAbstractResponse::$meta](./AjaxAbstractResponse#property_meta)

##### Свойства: [#свойства-5]

| Название  | Тип   | По умолчанию |
| --------- | ----- | ------------ |
| **$meta** | array |              |

##### Возвращает: [#возвращает-6]

\`\`\`
self
\`\`\`

Экземпляр текущего объекта для цепочки вызовов.

***

<span id="method_setRedirect" />

### setRedirect [#setredirect]

\`\`\`
public setRedirect(string  redirect) : \\AjaxAbstractResponse
\`\`\`

##### Краткое содержание [#краткое-содержание-8]

Устанавливает URL для перенаправления.

##### Описание [#описание-3]

Метод сохраняет указанный URL в свойстве \`redirect\` и возвращает
текущий экземпляр объекта для цепочки вызовов.

##### Смотри так-же: [#смотри-так-же-7]

* [\\AjaxAbstractResponse::$redirect](./AjaxAbstractResponse#property_redirect)

##### Свойства: [#свойства-6]

| Название      | Тип    | По умолчанию |
| ------------- | ------ | ------------ |
| **$redirect** | string |              |

##### Возвращает: [#возвращает-7]

\`\`\`
\\AjaxAbstractResponse
\`\`\`

Экземпляр текущего объекта для цепочки вызовов.

***

<span id="method_setStatus" />

### setStatus [#setstatus]

\`\`\`
public setStatus(int  status) : self
\`\`\`

##### Краткое содержание [#краткое-содержание-9]

Устанавливает HTTP статус ответа.

##### Смотри так-же: [#смотри-так-же-8]

* [\\AjaxAbstractResponse::$status](./AjaxAbstractResponse#property_status)

##### Свойства: [#свойства-7]

| Название    | Тип | По умолчанию |
| ----------- | --- | ------------ |
| **$status** | int |              |

##### Возвращает: [#возвращает-8]

\`\`\`
self
\`\`\`

Экземпляр текущего объекта для цепочки вызовов.

***

<span id="method_setSuccess" />

### setSuccess [#setsuccess]

\`\`\`
public setSuccess(bool  success) : \\AjaxAbstractResponse
\`\`\`

##### Краткое содержание [#краткое-содержание-10]

Устанавливает статус успешности выполнения операции.

##### Описание [#описание-4]

Метод сохраняет переданное булево значение в свойстве \`success\`
и возвращает текущий экземпляр объекта для реализации цепочки вызовов.

##### Смотри так-же: [#смотри-так-же-9]

* [\\AjaxAbstractResponse::$success](./AjaxAbstractResponse#property_success)

##### Свойства: [#свойства-8]

| Название     | Тип  | По умолчанию |
| ------------ | ---- | ------------ |
| **$success** | bool |              |

##### Возвращает: [#возвращает-9]

\`\`\`
\\AjaxAbstractResponse
\`\`\`

Экземпляр текущего объекта для цепочки вызовов.

***

<span id="method_buildResponse" />

### buildResponse [#buildresponse]

\`\`\`
protected buildResponse() : string
\`\`\`

##### Краткое содержание [#краткое-содержание-11]

Формирует тело ответа в формате JSON.

##### Описание [#описание-5]

Метод преобразует свойства текущего экземпляра класса, такие как успех операции,
HTTP-статус, сообщение, данные и мета-информацию, в JSON-строку.

##### Смотри так-же: [#смотри-так-же-10]

* [\\AjaxAbstractResponse::$success](./AjaxAbstractResponse#property_success)
* [\\AjaxAbstractResponse::$status](./AjaxAbstractResponse#property_status)
* [\\AjaxAbstractResponse::$message](./AjaxAbstractResponse#property_message)
* [\\AjaxAbstractResponse::$data](./AjaxAbstractResponse#property_data)
* [\\AjaxAbstractResponse::$meta](./AjaxAbstractResponse#property_meta)

##### Возвращает: [#возвращает-10]

\`\`\`
string
\`\`\`

JSON-представление ответа.
`,o={contents:[{heading:`краткое-содержание`,content:`Класс для формирования ответов об ошибке.`},{heading:`описание`,content:`Данный класс наследует AjaxAbstractResponse и предназначен для создания
ответа с сообщением об ошибке. По умолчанию возвращается HTTP-статус 400 (Bad Request) и общее сообщение об ошибке.`},{heading:`свойства`,content:`public $data`},{heading:`свойства`,content:`public $message`},{heading:`свойства`,content:`public $meta`},{heading:`свойства`,content:`public $status`},{heading:`свойства`,content:`public $success`},{heading:`свойства`,content:`protected $data`},{heading:`свойства`,content:`protected $message`},{heading:`свойства`,content:`protected $meta`},{heading:`свойства`,content:`protected $redirect`},{heading:`свойства`,content:`protected $status`},{heading:`свойства`,content:`protected $success`},{heading:`методы`,content:`public \\_\\_construct()`},{heading:`методы`,content:`public getRedirect()`},{heading:`методы`,content:`public isSuccess()`},{heading:`методы`,content:`public send()`},{heading:`методы`,content:`public setData()`},{heading:`методы`,content:`public setMessage()`},{heading:`методы`,content:`public setMeta()`},{heading:`методы`,content:`public setRedirect()`},{heading:`методы`,content:`public setStatus()`},{heading:`методы`,content:`public setSuccess()`},{heading:`методы`,content:`protected buildResponse()`},{heading:`подробности`,content:`Путь: engine/inc/maharder/\\_includes/responses/ErrorResponseAjax.php`},{heading:`подробности`,content:`Смотри так-же:`},{heading:`подробности`,content:`\\AjaxAbstractResponse::$message`},{heading:`подробности`,content:`\\AjaxAbstractResponse::$success`},{heading:`подробности`,content:`\\AjaxAbstractResponse::$status`},{heading:`public-data--array`,content:`***Описание***`},{heading:`public-data--array`,content:`Основные данные ответа.`},{heading:`public-data--array`,content:`**Тип:** Массив`},{heading:`public-data--array`,content:`**Подробности:**`},{heading:`public-data--array`,content:`Унаследовано от: \\AjaxAbstractResponse`},{heading:`public-message--string`,content:`***Описание***`},{heading:`public-message--string`,content:`Текстовое сообщение, сопровождающее ответ.`},{heading:`public-message--string`,content:`**Тип:** Текст`},{heading:`public-message--string`,content:`**Подробности:**`},{heading:`public-message--string`,content:`Унаследовано от: \\AjaxAbstractResponse`},{heading:`public-meta--array`,content:`***Описание***`},{heading:`public-meta--array`,content:`Дополнительные мета-данные.`},{heading:`public-meta--array`,content:`**Тип:** Массив`},{heading:`public-meta--array`,content:`**Подробности:**`},{heading:`public-meta--array`,content:`Унаследовано от: \\AjaxAbstractResponse`},{heading:`public-status--int`,content:`***Описание***`},{heading:`public-status--int`,content:`HTTP статус ответа.`},{heading:`public-status--int`,content:`**Тип:** Целое число`},{heading:`public-status--int`,content:`**Подробности:**`},{heading:`public-status--int`,content:`Унаследовано от: \\AjaxAbstractResponse`},{heading:`public-success--bool`,content:`***Описание***`},{heading:`public-success--bool`,content:`Указывает, успешен ли ответ.`},{heading:`public-success--bool`,content:`**Тип:** Логические значения`},{heading:`public-success--bool`,content:`**Подробности:**`},{heading:`public-success--bool`,content:`Унаследовано от: \\AjaxAbstractResponse`},{heading:`protected-data--array`,content:`**Тип:** Массив`},{heading:`protected-data--array`,content:`**Подробности:**`},{heading:`protected-data--array`,content:`Унаследовано от: \\AjaxAbstractResponse`},{heading:`protected-message--string`,content:`**Тип:** Текст`},{heading:`protected-message--string`,content:`**Подробности:**`},{heading:`protected-message--string`,content:`Унаследовано от: \\AjaxAbstractResponse`},{heading:`protected-meta--array`,content:`**Тип:** Массив`},{heading:`protected-meta--array`,content:`**Подробности:**`},{heading:`protected-meta--array`,content:`Унаследовано от: \\AjaxAbstractResponse`},{heading:`protected-redirect--string`,content:`**Тип:** Текст или null`},{heading:`protected-redirect--string`,content:`**Подробности:**`},{heading:`protected-redirect--string`,content:`Унаследовано от: \\AjaxAbstractResponse`},{heading:`protected-status--int`,content:`**Тип:** Целое число`},{heading:`protected-status--int`,content:`**Подробности:**`},{heading:`protected-status--int`,content:`Унаследовано от: \\AjaxAbstractResponse`},{heading:`protected-success--bool`,content:`**Тип:** Логические значения`},{heading:`protected-success--bool`,content:`**Подробности:**`},{heading:`protected-success--bool`,content:`Унаследовано от: \\AjaxAbstractResponse`},{heading:`краткое-содержание-1`,content:`Конструктор класса ErrorResponse.`},{heading:`описание-1`,content:`Устанавливает HTTP-статус ответа, сообщение об ошибке и флаг успешности.
По умолчанию используется статус 400 и стандартное сообщение.`},{heading:`смотри-так-же`,content:`\\AjaxAbstractResponse::$message`},{heading:`смотри-так-же`,content:`\\AjaxAbstractResponse::$success`},{heading:`смотри-так-же`,content:`\\_\\_()`},{heading:`смотри-так-же`,content:`\\AjaxAbstractResponse::$status`},{heading:`свойства-2`,content:`Название`},{heading:`свойства-2`,content:`Тип`},{heading:`свойства-2`,content:`По умолчанию`},{heading:`свойства-2`,content:`**$status**`},{heading:`свойства-2`,content:`int`},{heading:`свойства-2`,content:`400`},{heading:`ошибки`,content:`Тип`},{heading:`ошибки`,content:`Описание`},{heading:`ошибки`,content:`\\Throwable`},{heading:`краткое-содержание-2`,content:`Возвращает URL-адрес перенаправления, установленный для отклика Ajax.`},{heading:`смотри-так-же-1`,content:`\\AjaxAbstractResponse::setRedirect()`},{heading:`возвращает-1`,content:`URL-адрес перенаправления.`},{heading:`краткое-содержание-3`,content:`Проверяет, указано ли успешное выполнение запроса.`},{heading:`смотри-так-же-2`,content:`\\AjaxAbstractResponse::$success`},{heading:`возвращает-2`,content:`Возвращает true, если запрос выполнен успешно, иначе false.`},{heading:`краткое-содержание-4`,content:`Отправляет HTTP-ответ в формате JSON и завершает выполнение скрипта.`},{heading:`описание-2`,content:`Устанавливает заголовок ответа с указанием типа содержимого (application/json),
HTTP-статус, тело ответа в формате JSON, а затем завершает выполнение.`},{heading:`описание-2`,content:`Заголовки и статус берутся из свойств экземпляра класса, а тело ответа
формируется методом \\{@see}.`},{heading:`смотри-так-же-3`,content:`\\AjaxAbstractResponse::buildResponse()`},{heading:`смотри-так-же-3`,content:`\\AjaxAbstractResponse::$status`},{heading:`смотри-так-же-3`,content:`\\AjaxAbstractResponse::$success`},{heading:`смотри-так-же-3`,content:`\\AjaxAbstractResponse::$message`},{heading:`смотри-так-же-3`,content:`\\AjaxAbstractResponse::$data`},{heading:`смотри-так-же-3`,content:`\\AjaxAbstractResponse::$meta`},{heading:`краткое-содержание-5`,content:`Устанавливает данные ответа.`},{heading:`смотри-так-же-4`,content:`\\AjaxAbstractResponse::$data`},{heading:`свойства-3`,content:`Название`},{heading:`свойства-3`,content:`Тип`},{heading:`свойства-3`,content:`По умолчанию`},{heading:`свойства-3`,content:`**$data**`},{heading:`свойства-3`,content:`array`},{heading:`возвращает-4`,content:`Экземпляр текущего объекта для цепочки вызовов.`},{heading:`краткое-содержание-6`,content:`Устанавливает сообщение ответа.`},{heading:`смотри-так-же-5`,content:`\\AjaxAbstractResponse::$message`},{heading:`свойства-4`,content:`Название`},{heading:`свойства-4`,content:`Тип`},{heading:`свойства-4`,content:`По умолчанию`},{heading:`свойства-4`,content:`**$message**`},{heading:`свойства-4`,content:`string`},{heading:`возвращает-5`,content:`Экземпляр текущего объекта для цепочки вызовов.`},{heading:`краткое-содержание-7`,content:`Устанавливает дополнительные мета-данные.`},{heading:`смотри-так-же-6`,content:`\\AjaxAbstractResponse::$meta`},{heading:`свойства-5`,content:`Название`},{heading:`свойства-5`,content:`Тип`},{heading:`свойства-5`,content:`По умолчанию`},{heading:`свойства-5`,content:`**$meta**`},{heading:`свойства-5`,content:`array`},{heading:`возвращает-6`,content:`Экземпляр текущего объекта для цепочки вызовов.`},{heading:`краткое-содержание-8`,content:`Устанавливает URL для перенаправления.`},{heading:`описание-3`,content:"Метод сохраняет указанный URL в свойстве `redirect` и возвращает\nтекущий экземпляр объекта для цепочки вызовов."},{heading:`смотри-так-же-7`,content:`\\AjaxAbstractResponse::$redirect`},{heading:`свойства-6`,content:`Название`},{heading:`свойства-6`,content:`Тип`},{heading:`свойства-6`,content:`По умолчанию`},{heading:`свойства-6`,content:`**$redirect**`},{heading:`свойства-6`,content:`string`},{heading:`возвращает-7`,content:`Экземпляр текущего объекта для цепочки вызовов.`},{heading:`краткое-содержание-9`,content:`Устанавливает HTTP статус ответа.`},{heading:`смотри-так-же-8`,content:`\\AjaxAbstractResponse::$status`},{heading:`свойства-7`,content:`Название`},{heading:`свойства-7`,content:`Тип`},{heading:`свойства-7`,content:`По умолчанию`},{heading:`свойства-7`,content:`**$status**`},{heading:`свойства-7`,content:`int`},{heading:`возвращает-8`,content:`Экземпляр текущего объекта для цепочки вызовов.`},{heading:`краткое-содержание-10`,content:`Устанавливает статус успешности выполнения операции.`},{heading:`описание-4`,content:"Метод сохраняет переданное булево значение в свойстве `success`\nи возвращает текущий экземпляр объекта для реализации цепочки вызовов."},{heading:`смотри-так-же-9`,content:`\\AjaxAbstractResponse::$success`},{heading:`свойства-8`,content:`Название`},{heading:`свойства-8`,content:`Тип`},{heading:`свойства-8`,content:`По умолчанию`},{heading:`свойства-8`,content:`**$success**`},{heading:`свойства-8`,content:`bool`},{heading:`возвращает-9`,content:`Экземпляр текущего объекта для цепочки вызовов.`},{heading:`краткое-содержание-11`,content:`Формирует тело ответа в формате JSON.`},{heading:`описание-5`,content:`Метод преобразует свойства текущего экземпляра класса, такие как успех операции,
HTTP-статус, сообщение, данные и мета-информацию, в JSON-строку.`},{heading:`смотри-так-же-10`,content:`\\AjaxAbstractResponse::$success`},{heading:`смотри-так-же-10`,content:`\\AjaxAbstractResponse::$status`},{heading:`смотри-так-же-10`,content:`\\AjaxAbstractResponse::$message`},{heading:`смотри-так-же-10`,content:`\\AjaxAbstractResponse::$data`},{heading:`смотри-так-же-10`,content:`\\AjaxAbstractResponse::$meta`},{heading:`возвращает-10`,content:`JSON-представление ответа.`}],headings:[{id:`краткое-содержание`,content:`Краткое содержание:`},{id:`описание`,content:`Описание:`},{id:`свойства`,content:`Свойства`},{id:`методы`,content:`Методы`},{id:`подробности`,content:`Подробности`},{id:`свойства-1`,content:`Свойства`},{id:`public-data--array`,content:`public $data : array`},{id:`public-message--string`,content:`public $message : string`},{id:`public-meta--array`,content:`public $meta : array`},{id:`public-status--int`,content:`public $status : int`},{id:`public-success--bool`,content:`public $success : bool`},{id:`protected-data--array`,content:`protected $data : array`},{id:`protected-message--string`,content:`protected $message : string`},{id:`protected-meta--array`,content:`protected $meta : array`},{id:`protected-redirect--string`,content:`protected $redirect : ?string`},{id:`protected-status--int`,content:`protected $status : int`},{id:`protected-success--bool`,content:`protected $success : bool`},{id:`методы-1`,content:`Методы`},{id:`__construct`,content:`\\__construct`},{id:`краткое-содержание-1`,content:`Краткое содержание`},{id:`описание-1`,content:`Описание`},{id:`смотри-так-же`,content:`Смотри так-же:`},{id:`свойства-2`,content:`Свойства:`},{id:`ошибки`,content:`Ошибки:`},{id:`возвращает`,content:`Возвращает:`},{id:`getredirect`,content:`getRedirect`},{id:`краткое-содержание-2`,content:`Краткое содержание`},{id:`смотри-так-же-1`,content:`Смотри так-же:`},{id:`возвращает-1`,content:`Возвращает:`},{id:`issuccess`,content:`isSuccess`},{id:`краткое-содержание-3`,content:`Краткое содержание`},{id:`смотри-так-же-2`,content:`Смотри так-же:`},{id:`возвращает-2`,content:`Возвращает:`},{id:`send`,content:`send`},{id:`краткое-содержание-4`,content:`Краткое содержание`},{id:`описание-2`,content:`Описание`},{id:`смотри-так-же-3`,content:`Смотри так-же:`},{id:`возвращает-3`,content:`Возвращает:`},{id:`setdata`,content:`setData`},{id:`краткое-содержание-5`,content:`Краткое содержание`},{id:`смотри-так-же-4`,content:`Смотри так-же:`},{id:`свойства-3`,content:`Свойства:`},{id:`возвращает-4`,content:`Возвращает:`},{id:`setmessage`,content:`setMessage`},{id:`краткое-содержание-6`,content:`Краткое содержание`},{id:`смотри-так-же-5`,content:`Смотри так-же:`},{id:`свойства-4`,content:`Свойства:`},{id:`возвращает-5`,content:`Возвращает:`},{id:`setmeta`,content:`setMeta`},{id:`краткое-содержание-7`,content:`Краткое содержание`},{id:`смотри-так-же-6`,content:`Смотри так-же:`},{id:`свойства-5`,content:`Свойства:`},{id:`возвращает-6`,content:`Возвращает:`},{id:`setredirect`,content:`setRedirect`},{id:`краткое-содержание-8`,content:`Краткое содержание`},{id:`описание-3`,content:`Описание`},{id:`смотри-так-же-7`,content:`Смотри так-же:`},{id:`свойства-6`,content:`Свойства:`},{id:`возвращает-7`,content:`Возвращает:`},{id:`setstatus`,content:`setStatus`},{id:`краткое-содержание-9`,content:`Краткое содержание`},{id:`смотри-так-же-8`,content:`Смотри так-же:`},{id:`свойства-7`,content:`Свойства:`},{id:`возвращает-8`,content:`Возвращает:`},{id:`setsuccess`,content:`setSuccess`},{id:`краткое-содержание-10`,content:`Краткое содержание`},{id:`описание-4`,content:`Описание`},{id:`смотри-так-же-9`,content:`Смотри так-же:`},{id:`свойства-8`,content:`Свойства:`},{id:`возвращает-9`,content:`Возвращает:`},{id:`buildresponse`,content:`buildResponse`},{id:`краткое-содержание-11`,content:`Краткое содержание`},{id:`описание-5`,content:`Описание`},{id:`смотри-так-же-10`,content:`Смотри так-же:`},{id:`возвращает-10`,content:`Возвращает:`}]},s=[{depth:2,url:`#краткое-содержание`,title:(0,n.jsx)(n.Fragment,{children:`Краткое содержание:`})},{depth:2,url:`#описание`,title:(0,n.jsx)(n.Fragment,{children:`Описание:`})},{depth:3,url:`#свойства`,title:(0,n.jsx)(n.Fragment,{children:`Свойства`})},{depth:3,url:`#методы`,title:(0,n.jsx)(n.Fragment,{children:`Методы`})},{depth:3,url:`#подробности`,title:(0,n.jsx)(n.Fragment,{children:`Подробности`})},{depth:2,url:`#свойства-1`,title:(0,n.jsx)(n.Fragment,{children:`Свойства`})},{depth:4,url:`#public-data--array`,title:(0,n.jsx)(n.Fragment,{children:`public $data : array`})},{depth:4,url:`#public-message--string`,title:(0,n.jsx)(n.Fragment,{children:`public $message : string`})},{depth:4,url:`#public-meta--array`,title:(0,n.jsx)(n.Fragment,{children:`public $meta : array`})},{depth:4,url:`#public-status--int`,title:(0,n.jsx)(n.Fragment,{children:`public $status : int`})},{depth:4,url:`#public-success--bool`,title:(0,n.jsx)(n.Fragment,{children:`public $success : bool`})},{depth:4,url:`#protected-data--array`,title:(0,n.jsx)(n.Fragment,{children:`protected $data : array`})},{depth:4,url:`#protected-message--string`,title:(0,n.jsx)(n.Fragment,{children:`protected $message : string`})},{depth:4,url:`#protected-meta--array`,title:(0,n.jsx)(n.Fragment,{children:`protected $meta : array`})},{depth:4,url:`#protected-redirect--string`,title:(0,n.jsx)(n.Fragment,{children:`protected $redirect : ?string`})},{depth:4,url:`#protected-status--int`,title:(0,n.jsx)(n.Fragment,{children:`protected $status : int`})},{depth:4,url:`#protected-success--bool`,title:(0,n.jsx)(n.Fragment,{children:`protected $success : bool`})},{depth:2,url:`#методы-1`,title:(0,n.jsx)(n.Fragment,{children:`Методы`})},{depth:3,url:`#__construct`,title:(0,n.jsx)(n.Fragment,{children:`__construct`})},{depth:5,url:`#краткое-содержание-1`,title:(0,n.jsx)(n.Fragment,{children:`Краткое содержание`})},{depth:5,url:`#описание-1`,title:(0,n.jsx)(n.Fragment,{children:`Описание`})},{depth:5,url:`#смотри-так-же`,title:(0,n.jsx)(n.Fragment,{children:`Смотри так-же:`})},{depth:5,url:`#свойства-2`,title:(0,n.jsx)(n.Fragment,{children:`Свойства:`})},{depth:5,url:`#ошибки`,title:(0,n.jsx)(n.Fragment,{children:`Ошибки:`})},{depth:5,url:`#возвращает`,title:(0,n.jsx)(n.Fragment,{children:`Возвращает:`})},{depth:3,url:`#getredirect`,title:(0,n.jsx)(n.Fragment,{children:`getRedirect`})},{depth:5,url:`#краткое-содержание-2`,title:(0,n.jsx)(n.Fragment,{children:`Краткое содержание`})},{depth:5,url:`#смотри-так-же-1`,title:(0,n.jsx)(n.Fragment,{children:`Смотри так-же:`})},{depth:5,url:`#возвращает-1`,title:(0,n.jsx)(n.Fragment,{children:`Возвращает:`})},{depth:3,url:`#issuccess`,title:(0,n.jsx)(n.Fragment,{children:`isSuccess`})},{depth:5,url:`#краткое-содержание-3`,title:(0,n.jsx)(n.Fragment,{children:`Краткое содержание`})},{depth:5,url:`#смотри-так-же-2`,title:(0,n.jsx)(n.Fragment,{children:`Смотри так-же:`})},{depth:5,url:`#возвращает-2`,title:(0,n.jsx)(n.Fragment,{children:`Возвращает:`})},{depth:3,url:`#send`,title:(0,n.jsx)(n.Fragment,{children:`send`})},{depth:5,url:`#краткое-содержание-4`,title:(0,n.jsx)(n.Fragment,{children:`Краткое содержание`})},{depth:5,url:`#описание-2`,title:(0,n.jsx)(n.Fragment,{children:`Описание`})},{depth:5,url:`#смотри-так-же-3`,title:(0,n.jsx)(n.Fragment,{children:`Смотри так-же:`})},{depth:5,url:`#возвращает-3`,title:(0,n.jsx)(n.Fragment,{children:`Возвращает:`})},{depth:3,url:`#setdata`,title:(0,n.jsx)(n.Fragment,{children:`setData`})},{depth:5,url:`#краткое-содержание-5`,title:(0,n.jsx)(n.Fragment,{children:`Краткое содержание`})},{depth:5,url:`#смотри-так-же-4`,title:(0,n.jsx)(n.Fragment,{children:`Смотри так-же:`})},{depth:5,url:`#свойства-3`,title:(0,n.jsx)(n.Fragment,{children:`Свойства:`})},{depth:5,url:`#возвращает-4`,title:(0,n.jsx)(n.Fragment,{children:`Возвращает:`})},{depth:3,url:`#setmessage`,title:(0,n.jsx)(n.Fragment,{children:`setMessage`})},{depth:5,url:`#краткое-содержание-6`,title:(0,n.jsx)(n.Fragment,{children:`Краткое содержание`})},{depth:5,url:`#смотри-так-же-5`,title:(0,n.jsx)(n.Fragment,{children:`Смотри так-же:`})},{depth:5,url:`#свойства-4`,title:(0,n.jsx)(n.Fragment,{children:`Свойства:`})},{depth:5,url:`#возвращает-5`,title:(0,n.jsx)(n.Fragment,{children:`Возвращает:`})},{depth:3,url:`#setmeta`,title:(0,n.jsx)(n.Fragment,{children:`setMeta`})},{depth:5,url:`#краткое-содержание-7`,title:(0,n.jsx)(n.Fragment,{children:`Краткое содержание`})},{depth:5,url:`#смотри-так-же-6`,title:(0,n.jsx)(n.Fragment,{children:`Смотри так-же:`})},{depth:5,url:`#свойства-5`,title:(0,n.jsx)(n.Fragment,{children:`Свойства:`})},{depth:5,url:`#возвращает-6`,title:(0,n.jsx)(n.Fragment,{children:`Возвращает:`})},{depth:3,url:`#setredirect`,title:(0,n.jsx)(n.Fragment,{children:`setRedirect`})},{depth:5,url:`#краткое-содержание-8`,title:(0,n.jsx)(n.Fragment,{children:`Краткое содержание`})},{depth:5,url:`#описание-3`,title:(0,n.jsx)(n.Fragment,{children:`Описание`})},{depth:5,url:`#смотри-так-же-7`,title:(0,n.jsx)(n.Fragment,{children:`Смотри так-же:`})},{depth:5,url:`#свойства-6`,title:(0,n.jsx)(n.Fragment,{children:`Свойства:`})},{depth:5,url:`#возвращает-7`,title:(0,n.jsx)(n.Fragment,{children:`Возвращает:`})},{depth:3,url:`#setstatus`,title:(0,n.jsx)(n.Fragment,{children:`setStatus`})},{depth:5,url:`#краткое-содержание-9`,title:(0,n.jsx)(n.Fragment,{children:`Краткое содержание`})},{depth:5,url:`#смотри-так-же-8`,title:(0,n.jsx)(n.Fragment,{children:`Смотри так-же:`})},{depth:5,url:`#свойства-7`,title:(0,n.jsx)(n.Fragment,{children:`Свойства:`})},{depth:5,url:`#возвращает-8`,title:(0,n.jsx)(n.Fragment,{children:`Возвращает:`})},{depth:3,url:`#setsuccess`,title:(0,n.jsx)(n.Fragment,{children:`setSuccess`})},{depth:5,url:`#краткое-содержание-10`,title:(0,n.jsx)(n.Fragment,{children:`Краткое содержание`})},{depth:5,url:`#описание-4`,title:(0,n.jsx)(n.Fragment,{children:`Описание`})},{depth:5,url:`#смотри-так-же-9`,title:(0,n.jsx)(n.Fragment,{children:`Смотри так-же:`})},{depth:5,url:`#свойства-8`,title:(0,n.jsx)(n.Fragment,{children:`Свойства:`})},{depth:5,url:`#возвращает-9`,title:(0,n.jsx)(n.Fragment,{children:`Возвращает:`})},{depth:3,url:`#buildresponse`,title:(0,n.jsx)(n.Fragment,{children:`buildResponse`})},{depth:5,url:`#краткое-содержание-11`,title:(0,n.jsx)(n.Fragment,{children:`Краткое содержание`})},{depth:5,url:`#описание-5`,title:(0,n.jsx)(n.Fragment,{children:`Описание`})},{depth:5,url:`#смотри-так-же-10`,title:(0,n.jsx)(n.Fragment,{children:`Смотри так-же:`})},{depth:5,url:`#возвращает-10`,title:(0,n.jsx)(n.Fragment,{children:`Возвращает:`})}];function c(e){let t={a:`a`,code:`code`,em:`em`,h2:`h2`,h3:`h3`,h4:`h4`,h5:`h5`,hr:`hr`,li:`li`,p:`p`,pre:`pre`,span:`span`,strong:`strong`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,ul:`ul`,...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h2,{id:`краткое-содержание`,children:`Краткое содержание:`}),`
`,(0,n.jsx)(t.p,{children:`Класс для формирования ответов об ошибке.`}),`
`,(0,n.jsx)(t.h2,{id:`описание`,children:`Описание:`}),`
`,(0,n.jsxs)(t.p,{children:[`Данный класс наследует `,(0,n.jsx)(t.a,{href:`./AjaxAbstractResponse`,children:`AjaxAbstractResponse`}),` и предназначен для создания
ответа с сообщением об ошибке. По умолчанию возвращается HTTP-статус 400 (Bad Request) и общее сообщение об ошибке.`]}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsx)(t.h3,{id:`свойства`,children:`Свойства`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[`public $`,(0,n.jsx)(t.a,{href:`#property_data`,children:`data`})]}),`
`,(0,n.jsxs)(t.li,{children:[`public $`,(0,n.jsx)(t.a,{href:`#property_message`,children:`message`})]}),`
`,(0,n.jsxs)(t.li,{children:[`public $`,(0,n.jsx)(t.a,{href:`#property_meta`,children:`meta`})]}),`
`,(0,n.jsxs)(t.li,{children:[`public $`,(0,n.jsx)(t.a,{href:`#property_status`,children:`status`})]}),`
`,(0,n.jsxs)(t.li,{children:[`public $`,(0,n.jsx)(t.a,{href:`#property_success`,children:`success`})]}),`
`,(0,n.jsxs)(t.li,{children:[`protected $`,(0,n.jsx)(t.a,{href:`#property_data`,children:`data`})]}),`
`,(0,n.jsxs)(t.li,{children:[`protected $`,(0,n.jsx)(t.a,{href:`#property_message`,children:`message`})]}),`
`,(0,n.jsxs)(t.li,{children:[`protected $`,(0,n.jsx)(t.a,{href:`#property_meta`,children:`meta`})]}),`
`,(0,n.jsxs)(t.li,{children:[`protected $`,(0,n.jsx)(t.a,{href:`#property_redirect`,children:`redirect`})]}),`
`,(0,n.jsxs)(t.li,{children:[`protected $`,(0,n.jsx)(t.a,{href:`#property_status`,children:`status`})]}),`
`,(0,n.jsxs)(t.li,{children:[`protected $`,(0,n.jsx)(t.a,{href:`#property_success`,children:`success`})]}),`
`]}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsx)(t.h3,{id:`методы`,children:`Методы`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method___construct`,children:`__construct()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method_getRedirect`,children:`getRedirect()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method_isSuccess`,children:`isSuccess()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method_send`,children:`send()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method_setData`,children:`setData()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method_setMessage`,children:`setMessage()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method_setMeta`,children:`setMeta()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method_setRedirect`,children:`setRedirect()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method_setStatus`,children:`setStatus()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method_setSuccess`,children:`setSuccess()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`protected `,(0,n.jsx)(t.a,{href:`#method_buildResponse`,children:`buildResponse()`})]}),`
`]}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsx)(t.h3,{id:`подробности`,children:`Подробности`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsx)(t.li,{children:`Путь: engine/inc/maharder/_includes/responses/ErrorResponseAjax.php`}),`
`,(0,n.jsxs)(t.li,{children:[`Смотри так-же:`,`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`./AjaxAbstractResponse#property_message`,children:`\\AjaxAbstractResponse::$message`})}),`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`./AjaxAbstractResponse#property_success`,children:`\\AjaxAbstractResponse::$success`})}),`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`./AjaxAbstractResponse#property_status`,children:`\\AjaxAbstractResponse::$status`})}),`
`]}),`
`]}),`
`]}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsx)(t.h2,{id:`свойства-1`,children:`Свойства`}),`
`,(0,n.jsx)(`span`,{id:`property_data`}),`
`,(0,n.jsx)(t.h4,{id:`public-data--array`,children:`public $data : array`}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.em,{children:(0,n.jsx)(t.strong,{children:`Описание`})})}),`
`,(0,n.jsx)(t.p,{children:`Основные данные ответа.`}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Тип:`}),` `,(0,n.jsx)(`abbr`,{title:`array`,children:`Массив`})]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Подробности:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[`Унаследовано от: `,(0,n.jsx)(t.a,{href:`./AjaxAbstractResponse`,children:`\\AjaxAbstractResponse`})]}),`
`]}),`
`,(0,n.jsx)(`span`,{id:`property_message`}),`
`,(0,n.jsx)(t.h4,{id:`public-message--string`,children:`public $message : string`}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.em,{children:(0,n.jsx)(t.strong,{children:`Описание`})})}),`
`,(0,n.jsx)(t.p,{children:`Текстовое сообщение, сопровождающее ответ.`}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Тип:`}),` `,(0,n.jsx)(`abbr`,{title:`string`,children:`Текст`})]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Подробности:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[`Унаследовано от: `,(0,n.jsx)(t.a,{href:`./AjaxAbstractResponse`,children:`\\AjaxAbstractResponse`})]}),`
`]}),`
`,(0,n.jsx)(`span`,{id:`property_meta`}),`
`,(0,n.jsx)(t.h4,{id:`public-meta--array`,children:`public $meta : array`}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.em,{children:(0,n.jsx)(t.strong,{children:`Описание`})})}),`
`,(0,n.jsx)(t.p,{children:`Дополнительные мета-данные.`}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Тип:`}),` `,(0,n.jsx)(`abbr`,{title:`array`,children:`Массив`})]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Подробности:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[`Унаследовано от: `,(0,n.jsx)(t.a,{href:`./AjaxAbstractResponse`,children:`\\AjaxAbstractResponse`})]}),`
`]}),`
`,(0,n.jsx)(`span`,{id:`property_status`}),`
`,(0,n.jsx)(t.h4,{id:`public-status--int`,children:`public $status : int`}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.em,{children:(0,n.jsx)(t.strong,{children:`Описание`})})}),`
`,(0,n.jsx)(t.p,{children:`HTTP статус ответа.`}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Тип:`}),` `,(0,n.jsx)(`abbr`,{title:`int`,children:`Целое число`})]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Подробности:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[`Унаследовано от: `,(0,n.jsx)(t.a,{href:`./AjaxAbstractResponse`,children:`\\AjaxAbstractResponse`})]}),`
`]}),`
`,(0,n.jsx)(`span`,{id:`property_success`}),`
`,(0,n.jsx)(t.h4,{id:`public-success--bool`,children:`public $success : bool`}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.em,{children:(0,n.jsx)(t.strong,{children:`Описание`})})}),`
`,(0,n.jsx)(t.p,{children:`Указывает, успешен ли ответ.`}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Тип:`}),` `,(0,n.jsx)(`abbr`,{title:`bool`,children:`Логические значения`})]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Подробности:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[`Унаследовано от: `,(0,n.jsx)(t.a,{href:`./AjaxAbstractResponse`,children:`\\AjaxAbstractResponse`})]}),`
`]}),`
`,(0,n.jsx)(`span`,{id:`property_data`}),`
`,(0,n.jsx)(t.h4,{id:`protected-data--array`,children:`protected $data : array`}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Тип:`}),` `,(0,n.jsx)(`abbr`,{title:`array`,children:`Массив`})]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Подробности:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[`Унаследовано от: `,(0,n.jsx)(t.a,{href:`./AjaxAbstractResponse`,children:`\\AjaxAbstractResponse`})]}),`
`]}),`
`,(0,n.jsx)(`span`,{id:`property_message`}),`
`,(0,n.jsx)(t.h4,{id:`protected-message--string`,children:`protected $message : string`}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Тип:`}),` `,(0,n.jsx)(`abbr`,{title:`string`,children:`Текст`})]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Подробности:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[`Унаследовано от: `,(0,n.jsx)(t.a,{href:`./AjaxAbstractResponse`,children:`\\AjaxAbstractResponse`})]}),`
`]}),`
`,(0,n.jsx)(`span`,{id:`property_meta`}),`
`,(0,n.jsx)(t.h4,{id:`protected-meta--array`,children:`protected $meta : array`}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Тип:`}),` `,(0,n.jsx)(`abbr`,{title:`array`,children:`Массив`})]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Подробности:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[`Унаследовано от: `,(0,n.jsx)(t.a,{href:`./AjaxAbstractResponse`,children:`\\AjaxAbstractResponse`})]}),`
`]}),`
`,(0,n.jsx)(`span`,{id:`property_redirect`}),`
`,(0,n.jsx)(t.h4,{id:`protected-redirect--string`,children:`protected $redirect : ?string`}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Тип:`}),` `,(0,n.jsx)(`abbr`,{title:`?string`,children:`Текст или null`})]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Подробности:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[`Унаследовано от: `,(0,n.jsx)(t.a,{href:`./AjaxAbstractResponse`,children:`\\AjaxAbstractResponse`})]}),`
`]}),`
`,(0,n.jsx)(`span`,{id:`property_status`}),`
`,(0,n.jsx)(t.h4,{id:`protected-status--int`,children:`protected $status : int`}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Тип:`}),` `,(0,n.jsx)(`abbr`,{title:`int`,children:`Целое число`})]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Подробности:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[`Унаследовано от: `,(0,n.jsx)(t.a,{href:`./AjaxAbstractResponse`,children:`\\AjaxAbstractResponse`})]}),`
`]}),`
`,(0,n.jsx)(`span`,{id:`property_success`}),`
`,(0,n.jsx)(t.h4,{id:`protected-success--bool`,children:`protected $success : bool`}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Тип:`}),` `,(0,n.jsx)(`abbr`,{title:`bool`,children:`Логические значения`})]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Подробности:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[`Унаследовано от: `,(0,n.jsx)(t.a,{href:`./AjaxAbstractResponse`,children:`\\AjaxAbstractResponse`})]}),`
`]}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsx)(t.h2,{id:`методы-1`,children:`Методы`}),`
`,(0,n.jsx)(`span`,{id:`method___construct`}),`
`,(0,n.jsx)(t.h3,{id:`__construct`,children:`__construct`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`public __construct(int  status = 400) : mixed`})})})})}),`
`,(0,n.jsx)(t.h5,{id:`краткое-содержание-1`,children:`Краткое содержание`}),`
`,(0,n.jsx)(t.p,{children:`Конструктор класса ErrorResponse.`}),`
`,(0,n.jsx)(t.h5,{id:`описание-1`,children:`Описание`}),`
`,(0,n.jsx)(t.p,{children:`Устанавливает HTTP-статус ответа, сообщение об ошибке и флаг успешности.
По умолчанию используется статус 400 и стандартное сообщение.`}),`
`,(0,n.jsx)(t.h5,{id:`смотри-так-же`,children:`Смотри так-же:`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`./AjaxAbstractResponse#property_message`,children:`\\AjaxAbstractResponse::$message`})}),`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`./AjaxAbstractResponse#property_success`,children:`\\AjaxAbstractResponse::$success`})}),`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`../index#function___`,children:`__()`})}),`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`./AjaxAbstractResponse#property_status`,children:`\\AjaxAbstractResponse::$status`})}),`
`]}),`
`,(0,n.jsx)(t.h5,{id:`свойства-2`,children:`Свойства:`}),`
`,(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`Название`}),(0,n.jsx)(t.th,{children:`Тип`}),(0,n.jsx)(t.th,{children:`По умолчанию`})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:`$status`})}),(0,n.jsx)(t.td,{children:`int`}),(0,n.jsx)(t.td,{children:`400`})]})})]}),`
`,(0,n.jsx)(t.h5,{id:`ошибки`,children:`Ошибки:`}),`
`,(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`Тип`}),(0,n.jsx)(t.th,{children:`Описание`})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`\\Throwable`}),(0,n.jsx)(t.td,{})]})})]}),`
`,(0,n.jsx)(t.h5,{id:`возвращает`,children:`Возвращает:`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`mixed`})})})})}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsx)(`span`,{id:`method_getRedirect`}),`
`,(0,n.jsx)(t.h3,{id:`getredirect`,children:`getRedirect`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`public getRedirect() : null|string`})})})})}),`
`,(0,n.jsx)(t.h5,{id:`краткое-содержание-2`,children:`Краткое содержание`}),`
`,(0,n.jsx)(t.p,{children:`Возвращает URL-адрес перенаправления, установленный для отклика Ajax.`}),`
`,(0,n.jsx)(t.h5,{id:`смотри-так-же-1`,children:`Смотри так-же:`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`./AjaxAbstractResponse#method_setRedirect`,children:`\\AjaxAbstractResponse::setRedirect()`})}),`
`]}),`
`,(0,n.jsx)(t.h5,{id:`возвращает-1`,children:`Возвращает:`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`null|string`})})})})}),`
`,(0,n.jsx)(t.p,{children:`URL-адрес перенаправления.`}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsx)(`span`,{id:`method_isSuccess`}),`
`,(0,n.jsx)(t.h3,{id:`issuccess`,children:`isSuccess`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`public isSuccess() : bool`})})})})}),`
`,(0,n.jsx)(t.h5,{id:`краткое-содержание-3`,children:`Краткое содержание`}),`
`,(0,n.jsx)(t.p,{children:`Проверяет, указано ли успешное выполнение запроса.`}),`
`,(0,n.jsx)(t.h5,{id:`смотри-так-же-2`,children:`Смотри так-же:`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`./AjaxAbstractResponse#property_success`,children:`\\AjaxAbstractResponse::$success`})}),`
`]}),`
`,(0,n.jsx)(t.h5,{id:`возвращает-2`,children:`Возвращает:`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`bool`})})})})}),`
`,(0,n.jsx)(t.p,{children:`Возвращает true, если запрос выполнен успешно, иначе false.`}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsx)(`span`,{id:`method_send`}),`
`,(0,n.jsx)(t.h3,{id:`send`,children:`send`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`public send() : string`})})})})}),`
`,(0,n.jsx)(t.h5,{id:`краткое-содержание-4`,children:`Краткое содержание`}),`
`,(0,n.jsx)(t.p,{children:`Отправляет HTTP-ответ в формате JSON и завершает выполнение скрипта.`}),`
`,(0,n.jsx)(t.h5,{id:`описание-2`,children:`Описание`}),`
`,(0,n.jsx)(t.p,{children:`Устанавливает заголовок ответа с указанием типа содержимого (application/json),
HTTP-статус, тело ответа в формате JSON, а затем завершает выполнение.`}),`
`,(0,n.jsx)(t.p,{children:`Заголовки и статус берутся из свойств экземпляра класса, а тело ответа
формируется методом {@see}.`}),`
`,(0,n.jsx)(t.h5,{id:`смотри-так-же-3`,children:`Смотри так-же:`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`./AjaxAbstractResponse#method_buildResponse`,children:`\\AjaxAbstractResponse::buildResponse()`})}),`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`./AjaxAbstractResponse#property_status`,children:`\\AjaxAbstractResponse::$status`})}),`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`./AjaxAbstractResponse#property_success`,children:`\\AjaxAbstractResponse::$success`})}),`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`./AjaxAbstractResponse#property_message`,children:`\\AjaxAbstractResponse::$message`})}),`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`./AjaxAbstractResponse#property_data`,children:`\\AjaxAbstractResponse::$data`})}),`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`./AjaxAbstractResponse#property_meta`,children:`\\AjaxAbstractResponse::$meta`})}),`
`]}),`
`,(0,n.jsx)(t.h5,{id:`возвращает-3`,children:`Возвращает:`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`string`})})})})}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsx)(`span`,{id:`method_setData`}),`
`,(0,n.jsx)(t.h3,{id:`setdata`,children:`setData`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`public setData(array  data) : self`})})})})}),`
`,(0,n.jsx)(t.h5,{id:`краткое-содержание-5`,children:`Краткое содержание`}),`
`,(0,n.jsx)(t.p,{children:`Устанавливает данные ответа.`}),`
`,(0,n.jsx)(t.h5,{id:`смотри-так-же-4`,children:`Смотри так-же:`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`./AjaxAbstractResponse#property_data`,children:`\\AjaxAbstractResponse::$data`})}),`
`]}),`
`,(0,n.jsx)(t.h5,{id:`свойства-3`,children:`Свойства:`}),`
`,(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`Название`}),(0,n.jsx)(t.th,{children:`Тип`}),(0,n.jsx)(t.th,{children:`По умолчанию`})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:`$data`})}),(0,n.jsx)(t.td,{children:`array`}),(0,n.jsx)(t.td,{})]})})]}),`
`,(0,n.jsx)(t.h5,{id:`возвращает-4`,children:`Возвращает:`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`self`})})})})}),`
`,(0,n.jsx)(t.p,{children:`Экземпляр текущего объекта для цепочки вызовов.`}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsx)(`span`,{id:`method_setMessage`}),`
`,(0,n.jsx)(t.h3,{id:`setmessage`,children:`setMessage`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`public setMessage(string  message) : self`})})})})}),`
`,(0,n.jsx)(t.h5,{id:`краткое-содержание-6`,children:`Краткое содержание`}),`
`,(0,n.jsx)(t.p,{children:`Устанавливает сообщение ответа.`}),`
`,(0,n.jsx)(t.h5,{id:`смотри-так-же-5`,children:`Смотри так-же:`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`./AjaxAbstractResponse#property_message`,children:`\\AjaxAbstractResponse::$message`})}),`
`]}),`
`,(0,n.jsx)(t.h5,{id:`свойства-4`,children:`Свойства:`}),`
`,(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`Название`}),(0,n.jsx)(t.th,{children:`Тип`}),(0,n.jsx)(t.th,{children:`По умолчанию`})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:`$message`})}),(0,n.jsx)(t.td,{children:`string`}),(0,n.jsx)(t.td,{})]})})]}),`
`,(0,n.jsx)(t.h5,{id:`возвращает-5`,children:`Возвращает:`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`self`})})})})}),`
`,(0,n.jsx)(t.p,{children:`Экземпляр текущего объекта для цепочки вызовов.`}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsx)(`span`,{id:`method_setMeta`}),`
`,(0,n.jsx)(t.h3,{id:`setmeta`,children:`setMeta`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`public setMeta(array  meta) : self`})})})})}),`
`,(0,n.jsx)(t.h5,{id:`краткое-содержание-7`,children:`Краткое содержание`}),`
`,(0,n.jsx)(t.p,{children:`Устанавливает дополнительные мета-данные.`}),`
`,(0,n.jsx)(t.h5,{id:`смотри-так-же-6`,children:`Смотри так-же:`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`./AjaxAbstractResponse#property_meta`,children:`\\AjaxAbstractResponse::$meta`})}),`
`]}),`
`,(0,n.jsx)(t.h5,{id:`свойства-5`,children:`Свойства:`}),`
`,(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`Название`}),(0,n.jsx)(t.th,{children:`Тип`}),(0,n.jsx)(t.th,{children:`По умолчанию`})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:`$meta`})}),(0,n.jsx)(t.td,{children:`array`}),(0,n.jsx)(t.td,{})]})})]}),`
`,(0,n.jsx)(t.h5,{id:`возвращает-6`,children:`Возвращает:`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`self`})})})})}),`
`,(0,n.jsx)(t.p,{children:`Экземпляр текущего объекта для цепочки вызовов.`}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsx)(`span`,{id:`method_setRedirect`}),`
`,(0,n.jsx)(t.h3,{id:`setredirect`,children:`setRedirect`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`public setRedirect(string  redirect) : \\AjaxAbstractResponse`})})})})}),`
`,(0,n.jsx)(t.h5,{id:`краткое-содержание-8`,children:`Краткое содержание`}),`
`,(0,n.jsx)(t.p,{children:`Устанавливает URL для перенаправления.`}),`
`,(0,n.jsx)(t.h5,{id:`описание-3`,children:`Описание`}),`
`,(0,n.jsxs)(t.p,{children:[`Метод сохраняет указанный URL в свойстве `,(0,n.jsx)(t.code,{children:`redirect`}),` и возвращает
текущий экземпляр объекта для цепочки вызовов.`]}),`
`,(0,n.jsx)(t.h5,{id:`смотри-так-же-7`,children:`Смотри так-же:`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`./AjaxAbstractResponse#property_redirect`,children:`\\AjaxAbstractResponse::$redirect`})}),`
`]}),`
`,(0,n.jsx)(t.h5,{id:`свойства-6`,children:`Свойства:`}),`
`,(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`Название`}),(0,n.jsx)(t.th,{children:`Тип`}),(0,n.jsx)(t.th,{children:`По умолчанию`})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:`$redirect`})}),(0,n.jsx)(t.td,{children:`string`}),(0,n.jsx)(t.td,{})]})})]}),`
`,(0,n.jsx)(t.h5,{id:`возвращает-7`,children:`Возвращает:`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`\\AjaxAbstractResponse`})})})})}),`
`,(0,n.jsx)(t.p,{children:`Экземпляр текущего объекта для цепочки вызовов.`}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsx)(`span`,{id:`method_setStatus`}),`
`,(0,n.jsx)(t.h3,{id:`setstatus`,children:`setStatus`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`public setStatus(int  status) : self`})})})})}),`
`,(0,n.jsx)(t.h5,{id:`краткое-содержание-9`,children:`Краткое содержание`}),`
`,(0,n.jsx)(t.p,{children:`Устанавливает HTTP статус ответа.`}),`
`,(0,n.jsx)(t.h5,{id:`смотри-так-же-8`,children:`Смотри так-же:`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`./AjaxAbstractResponse#property_status`,children:`\\AjaxAbstractResponse::$status`})}),`
`]}),`
`,(0,n.jsx)(t.h5,{id:`свойства-7`,children:`Свойства:`}),`
`,(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`Название`}),(0,n.jsx)(t.th,{children:`Тип`}),(0,n.jsx)(t.th,{children:`По умолчанию`})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:`$status`})}),(0,n.jsx)(t.td,{children:`int`}),(0,n.jsx)(t.td,{})]})})]}),`
`,(0,n.jsx)(t.h5,{id:`возвращает-8`,children:`Возвращает:`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`self`})})})})}),`
`,(0,n.jsx)(t.p,{children:`Экземпляр текущего объекта для цепочки вызовов.`}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsx)(`span`,{id:`method_setSuccess`}),`
`,(0,n.jsx)(t.h3,{id:`setsuccess`,children:`setSuccess`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`public setSuccess(bool  success) : \\AjaxAbstractResponse`})})})})}),`
`,(0,n.jsx)(t.h5,{id:`краткое-содержание-10`,children:`Краткое содержание`}),`
`,(0,n.jsx)(t.p,{children:`Устанавливает статус успешности выполнения операции.`}),`
`,(0,n.jsx)(t.h5,{id:`описание-4`,children:`Описание`}),`
`,(0,n.jsxs)(t.p,{children:[`Метод сохраняет переданное булево значение в свойстве `,(0,n.jsx)(t.code,{children:`success`}),`
и возвращает текущий экземпляр объекта для реализации цепочки вызовов.`]}),`
`,(0,n.jsx)(t.h5,{id:`смотри-так-же-9`,children:`Смотри так-же:`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`./AjaxAbstractResponse#property_success`,children:`\\AjaxAbstractResponse::$success`})}),`
`]}),`
`,(0,n.jsx)(t.h5,{id:`свойства-8`,children:`Свойства:`}),`
`,(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`Название`}),(0,n.jsx)(t.th,{children:`Тип`}),(0,n.jsx)(t.th,{children:`По умолчанию`})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:`$success`})}),(0,n.jsx)(t.td,{children:`bool`}),(0,n.jsx)(t.td,{})]})})]}),`
`,(0,n.jsx)(t.h5,{id:`возвращает-9`,children:`Возвращает:`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`\\AjaxAbstractResponse`})})})})}),`
`,(0,n.jsx)(t.p,{children:`Экземпляр текущего объекта для цепочки вызовов.`}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsx)(`span`,{id:`method_buildResponse`}),`
`,(0,n.jsx)(t.h3,{id:`buildresponse`,children:`buildResponse`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`protected buildResponse() : string`})})})})}),`
`,(0,n.jsx)(t.h5,{id:`краткое-содержание-11`,children:`Краткое содержание`}),`
`,(0,n.jsx)(t.p,{children:`Формирует тело ответа в формате JSON.`}),`
`,(0,n.jsx)(t.h5,{id:`описание-5`,children:`Описание`}),`
`,(0,n.jsx)(t.p,{children:`Метод преобразует свойства текущего экземпляра класса, такие как успех операции,
HTTP-статус, сообщение, данные и мета-информацию, в JSON-строку.`}),`
`,(0,n.jsx)(t.h5,{id:`смотри-так-же-10`,children:`Смотри так-же:`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`./AjaxAbstractResponse#property_success`,children:`\\AjaxAbstractResponse::$success`})}),`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`./AjaxAbstractResponse#property_status`,children:`\\AjaxAbstractResponse::$status`})}),`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`./AjaxAbstractResponse#property_message`,children:`\\AjaxAbstractResponse::$message`})}),`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`./AjaxAbstractResponse#property_data`,children:`\\AjaxAbstractResponse::$data`})}),`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`./AjaxAbstractResponse#property_meta`,children:`\\AjaxAbstractResponse::$meta`})}),`
`]}),`
`,(0,n.jsx)(t.h5,{id:`возвращает-10`,children:`Возвращает:`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`string`})})})})}),`
`,(0,n.jsx)(t.p,{children:`JSON-представление ответа.`})]})}function l(e={}){let{wrapper:t}=e.components||{};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}export{a as _markdown,l as default,r as frontmatter,i as lastModified,o as structuredData,s as toc};