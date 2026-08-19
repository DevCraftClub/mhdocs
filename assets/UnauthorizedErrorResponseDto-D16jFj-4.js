import{r as e}from"./rolldown-runtime-QTnfLwEv.js";import{t}from"./jsx-runtime-By8HlURe.js";var n=e(t()),r={title:`UnauthorizedErrorResponseDto`},i=new Date(1787141927e3),a=`

**Описание:** DTO для представления ответа об ошибке авторизации API
Специализированный класс для обработки ошибок авторизации (HTTP 401),
возникающих при отсутствии или недействительности токена доступа.
Наследуется от BaseResponseDto и предоставляет предустановленные
значения для типичных ошибок авторизации.

**С версии:** 1.0.0

**Версия:** 1.0.0

**См. также:**

* \`\\KinopoiskDev\\Responses\\BaseResponseDto\`:
* \`\\KinopoiskDev\\Responses\\ErrorResponseDto\`:

## \`__construct()\` [#__construct]

**Описание:** Конструктор для создания DTO ошибки авторизации
Инициализирует объект с предустановленными значениями для типичных
ошибок авторизации. Все параметры имеют значения по умолчанию,
соответствующие стандартному ответу об отсутствии токена.
Все свойства являются  для обеспечения неизменности данных.

**Параметры:**

* \`$statusCode\` (int): HTTP статус код авторизации (по умолчанию 401 - Unauthorized)
* \`$message\` (string): Сообщение об ошибке на русском языке (по умолчанию "В запросе не указан токен!")
* \`$error\` (string): Краткое техническое описание ошибки (по умолчанию "Unauthorized")

## \`fromArray()\` [#fromarray]

**Описание:** Создает экземпляр DTO из массива данных
Фабричный метод для создания объекта DTO из ассоциативного массива,
полученного из API ответа. Каждый дочерний класс должен реализовать
этот метод в соответствии со своей структурой данных.

Создает экземпляр DTO ошибки авторизации из массива данных API ответа.
Использует значения по умолчанию для отсутствующих полей, что обеспечивает
корректное создание объекта даже при неполных данных от API.

* statusCode: int - HTTP статус код (по умолчанию 401)
* message: string - сообщение об ошибке (по умолчанию "В запросе не указан токен!")
* error: string - тип ошибки (по умолчанию "Unauthorized")

**Возвращает:** \`static\` Новый экземпляр UnauthorizedErrorResponseDto с данными ошибки авторизации

## \`toArray()\` [#toarray]

**Описание:** Преобразует DTO в ассоциативный массив
Метод для сериализации объекта DTO в массив, пригодный для
передачи в JSON или другие форматы. Структура массива должна
соответствовать формату API ответа.

Преобразует DTO ошибки авторизации в ассоциативный массив для сериализации.
Структура возвращаемого массива полностью соответствует формату API ответа
и содержит все необходимые поля для обработки ошибки авторизации.

* statusCode: int - HTTP статус код ошибки
* message: string - человекочитаемое сообщение об ошибке
* error: string - техническое описание типа ошибки

**Возвращает:** \`array<string, string|int>\` Ассоциативный массив с полями:
`,o={contents:[{heading:void 0,content:`**Описание:** DTO для представления ответа об ошибке авторизации API
Специализированный класс для обработки ошибок авторизации (HTTP 401),
возникающих при отсутствии или недействительности токена доступа.
Наследуется от BaseResponseDto и предоставляет предустановленные
значения для типичных ошибок авторизации.`},{heading:void 0,content:`**С версии:** 1.0.0`},{heading:void 0,content:`**Версия:** 1.0.0`},{heading:void 0,content:`**См. также:**`},{heading:void 0,content:"`\\KinopoiskDev\\Responses\\BaseResponseDto`:"},{heading:void 0,content:"`\\KinopoiskDev\\Responses\\ErrorResponseDto`:"},{heading:`__construct`,content:`**Описание:** Конструктор для создания DTO ошибки авторизации
Инициализирует объект с предустановленными значениями для типичных
ошибок авторизации. Все параметры имеют значения по умолчанию,
соответствующие стандартному ответу об отсутствии токена.
Все свойства являются  для обеспечения неизменности данных.`},{heading:`__construct`,content:`**Параметры:**`},{heading:`__construct`,content:"`$statusCode` (int): HTTP статус код авторизации (по умолчанию 401 - Unauthorized)"},{heading:`__construct`,content:'`$message` (string): Сообщение об ошибке на русском языке (по умолчанию "В запросе не указан токен!")'},{heading:`__construct`,content:'`$error` (string): Краткое техническое описание ошибки (по умолчанию "Unauthorized")'},{heading:`fromarray`,content:`**Описание:** Создает экземпляр DTO из массива данных
Фабричный метод для создания объекта DTO из ассоциативного массива,
полученного из API ответа. Каждый дочерний класс должен реализовать
этот метод в соответствии со своей структурой данных.`},{heading:`fromarray`,content:`Создает экземпляр DTO ошибки авторизации из массива данных API ответа.
Использует значения по умолчанию для отсутствующих полей, что обеспечивает
корректное создание объекта даже при неполных данных от API.`},{heading:`fromarray`,content:`statusCode: int - HTTP статус код (по умолчанию 401)`},{heading:`fromarray`,content:`message: string - сообщение об ошибке (по умолчанию "В запросе не указан токен!")`},{heading:`fromarray`,content:`error: string - тип ошибки (по умолчанию "Unauthorized")`},{heading:`fromarray`,content:"**Возвращает:** `static` Новый экземпляр UnauthorizedErrorResponseDto с данными ошибки авторизации"},{heading:`toarray`,content:`**Описание:** Преобразует DTO в ассоциативный массив
Метод для сериализации объекта DTO в массив, пригодный для
передачи в JSON или другие форматы. Структура массива должна
соответствовать формату API ответа.`},{heading:`toarray`,content:`Преобразует DTO ошибки авторизации в ассоциативный массив для сериализации.
Структура возвращаемого массива полностью соответствует формату API ответа
и содержит все необходимые поля для обработки ошибки авторизации.`},{heading:`toarray`,content:`statusCode: int - HTTP статус код ошибки`},{heading:`toarray`,content:`message: string - человекочитаемое сообщение об ошибке`},{heading:`toarray`,content:`error: string - техническое описание типа ошибки`},{heading:`toarray`,content:"**Возвращает:** `array<string, string|int>` Ассоциативный массив с полями:"}],headings:[{id:`__construct`,content:"`__construct()`"},{id:`fromarray`,content:"`fromArray()`"},{id:`toarray`,content:"`toArray()`"}]},s=[{depth:2,url:`#__construct`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`__construct()`})})},{depth:2,url:`#fromarray`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`fromArray()`})})},{depth:2,url:`#toarray`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`toArray()`})})}];function c(e){let t={code:`code`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` DTO для представления ответа об ошибке авторизации API
Специализированный класс для обработки ошибок авторизации (HTTP 401),
возникающих при отсутствии или недействительности токена доступа.
Наследуется от BaseResponseDto и предоставляет предустановленные
значения для типичных ошибок авторизации.`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 1.0.0`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Версия:`}),` 1.0.0`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`См. также:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`\\KinopoiskDev\\Responses\\BaseResponseDto`}),`:`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`\\KinopoiskDev\\Responses\\ErrorResponseDto`}),`:`]}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`__construct`,children:(0,n.jsx)(t.code,{children:`__construct()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Конструктор для создания DTO ошибки авторизации
Инициализирует объект с предустановленными значениями для типичных
ошибок авторизации. Все параметры имеют значения по умолчанию,
соответствующие стандартному ответу об отсутствии токена.
Все свойства являются  для обеспечения неизменности данных.`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$statusCode`}),` (int): HTTP статус код авторизации (по умолчанию 401 - Unauthorized)`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$message`}),` (string): Сообщение об ошибке на русском языке (по умолчанию "В запросе не указан токен!")`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$error`}),` (string): Краткое техническое описание ошибки (по умолчанию "Unauthorized")`]}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`fromarray`,children:(0,n.jsx)(t.code,{children:`fromArray()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Создает экземпляр DTO из массива данных
Фабричный метод для создания объекта DTO из ассоциативного массива,
полученного из API ответа. Каждый дочерний класс должен реализовать
этот метод в соответствии со своей структурой данных.`]}),`
`,(0,n.jsx)(t.p,{children:`Создает экземпляр DTO ошибки авторизации из массива данных API ответа.
Использует значения по умолчанию для отсутствующих полей, что обеспечивает
корректное создание объекта даже при неполных данных от API.`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsx)(t.li,{children:`statusCode: int - HTTP статус код (по умолчанию 401)`}),`
`,(0,n.jsx)(t.li,{children:`message: string - сообщение об ошибке (по умолчанию "В запросе не указан токен!")`}),`
`,(0,n.jsx)(t.li,{children:`error: string - тип ошибки (по умолчанию "Unauthorized")`}),`
`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`static`}),` Новый экземпляр UnauthorizedErrorResponseDto с данными ошибки авторизации`]}),`
`,(0,n.jsx)(t.h2,{id:`toarray`,children:(0,n.jsx)(t.code,{children:`toArray()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Преобразует DTO в ассоциативный массив
Метод для сериализации объекта DTO в массив, пригодный для
передачи в JSON или другие форматы. Структура массива должна
соответствовать формату API ответа.`]}),`
`,(0,n.jsx)(t.p,{children:`Преобразует DTO ошибки авторизации в ассоциативный массив для сериализации.
Структура возвращаемого массива полностью соответствует формату API ответа
и содержит все необходимые поля для обработки ошибки авторизации.`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsx)(t.li,{children:`statusCode: int - HTTP статус код ошибки`}),`
`,(0,n.jsx)(t.li,{children:`message: string - человекочитаемое сообщение об ошибке`}),`
`,(0,n.jsx)(t.li,{children:`error: string - техническое описание типа ошибки`}),`
`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`array<string, string|int>`}),` Ассоциативный массив с полями:`]})]})}function l(e={}){let{wrapper:t}=e.components||{};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}export{a as _markdown,l as default,r as frontmatter,i as lastModified,o as structuredData,s as toc};