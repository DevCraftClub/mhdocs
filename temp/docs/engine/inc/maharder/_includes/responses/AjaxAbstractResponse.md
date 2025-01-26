# AjaxAbstractResponse

## Свойства класса

### `status`
**Тип:** ``  
**Описание:** Абстрактный класс, представляющий базовый ответ в виде JSON. Предназначен для наследования, чтобы реализовать конкретные типы ответов (например, успех или ошибка). @property int    $status  HTTP статус ответа. @property bool   $success Указывает, успешен ли ответ. @property string $message Текстовое сообщение, сопровождающее ответ. @property array  $data    Основные данные ответа. @property array  $meta    Дополнительные мета-данные.

## Методы

### `setStatus` {#метод-setStatus}
**Модификатор:** public function setStatus(

### `setMessage` {#метод-setMessage}
**Модификатор:** public function setMessage(

### `setData` {#метод-setData}
**Модификатор:** public function setData(

### `setMeta` {#метод-setMeta}
**Модификатор:** public function setMeta(

### `isSuccess` {#метод-isSuccess}
**Модификатор:** public function isSuccess(

### `setSuccess` {#метод-setSuccess}
**Модификатор:** public function setSuccess(

### `getRedirect` {#метод-getRedirect}
**Модификатор:** public function getRedirect(

### `setRedirect` {#метод-setRedirect}
**Модификатор:** public function setRedirect(

### `send` {#метод-send}
**Модификатор:** public function send(

### `buildResponse` {#метод-buildResponse}
**Модификатор:** protected function buildResponse(

## Функция: `AjaxAbstractResponse`

**Описание:**  
Абстрактный класс, представляющий базовый ответ в виде JSON.
Предназначен для наследования, чтобы реализовать конкретные типы ответов (например, успех или ошибка).

**Теги:**
- [AjaxAbstractResponse::\$meta](./)
- [AjaxAbstractResponse::\$meta](./)
- [AjaxAbstractResponse::\$meta](./)
- [AjaxAbstractResponse::\$meta](./)
- [AjaxAbstractResponse::\$meta](./)
## Функция: `setStatus`

**Описание:**  
Устанавливает HTTP статус ответа.

**Теги:**
- [AjaxAbstractResponse::\$meta](./)
- [AjaxAbstractResponse::\$meta](./)
- [AjaxAbstractResponse::\$meta](./)
## Функция: `setMessage`

**Описание:**  
Устанавливает сообщение ответа.

**Теги:**
- [AjaxAbstractResponse::\$meta](./)
- [AjaxAbstractResponse::\$meta](./)
- [AjaxAbstractResponse::\$meta](./)
## Функция: `setData`

**Описание:**  
Устанавливает данные ответа.

**Теги:**
- [AjaxAbstractResponse::\$meta](./)
- [AjaxAbstractResponse::\$meta](./)
- [AjaxAbstractResponse::\$meta](./)
## Функция: `setMeta`

**Описание:**  
Устанавливает дополнительные мета-данные.

**Теги:**
- [AjaxAbstractResponse::\$meta](./)
- [AjaxAbstractResponse::\$meta](./)
- [AjaxAbstractResponse::\$meta](./)
## Функция: `isSuccess`

**Описание:**  
Проверяет, указано ли успешное выполнение запроса.

**Теги:**
- [AjaxAbstractResponse::\$meta](./)
- [AjaxAbstractResponse::\$meta](./)
## Функция: `setSuccess`

**Описание:**  
Устанавливает статус успешности выполнения операции.
Метод сохраняет переданное булево значение в свойстве `success`
и возвращает текущий экземпляр объекта для реализации цепочки вызовов.

**Теги:**
- [AjaxAbstractResponse::\$meta](./)
- [AjaxAbstractResponse::\$meta](./)
- [AjaxAbstractResponse::\$meta](./)
## Функция: `getRedirect`

**Описание:**  
Возвращает URL-адрес перенаправления, установленный для отклика Ajax.

**Теги:**
- [AjaxAbstractResponse::\$meta](./)
- [AjaxAbstractResponse::\$meta](./)
- [AjaxAbstractResponse::\$meta](./)
## Функция: `setRedirect`

**Описание:**  
Устанавливает URL для перенаправления.
Метод сохраняет указанный URL в свойстве `redirect` и возвращает
текущий экземпляр объекта для цепочки вызовов.

**Теги:**
- [AjaxAbstractResponse::\$meta](./)
- [AjaxAbstractResponse::\$meta](./)
- [AjaxAbstractResponse::\$meta](./)
## Функция: `send`

**Описание:**  
Отправляет HTTP-ответ в формате JSON и завершает выполнение скрипта.
Устанавливает заголовок ответа с указанием типа содержимого (application/json),
HTTP-статус, тело ответа в формате JSON, а затем завершает выполнение.
Заголовки и статус берутся из свойств экземпляра класса, а тело ответа
формируется методом {@see AjaxAbstractResponse::buildResponse()}.

**Теги:**
- [AjaxAbstractResponse::\$meta](./)
- [AjaxAbstractResponse::\$meta](./)
- [AjaxAbstractResponse::\$meta](./)
- [AjaxAbstractResponse::\$meta](./)
- [AjaxAbstractResponse::\$meta](./)
- [AjaxAbstractResponse::\$meta](./)
- [AjaxAbstractResponse::\$meta](./)
- [AjaxAbstractResponse::\$meta](./)
## Функция: `buildResponse`

**Описание:**  
Формирует тело ответа в формате JSON.
Метод преобразует свойства текущего экземпляра класса, такие как успех операции,
HTTP-статус, сообщение, данные и мета-информацию, в JSON-строку.

**Теги:**
- [AjaxAbstractResponse::\$meta](./)
- [AjaxAbstractResponse::\$meta](./)
- [AjaxAbstractResponse::\$meta](./)
- [AjaxAbstractResponse::\$meta](./)
- [AjaxAbstractResponse::\$meta](./)
- [AjaxAbstractResponse::\$meta](./)
