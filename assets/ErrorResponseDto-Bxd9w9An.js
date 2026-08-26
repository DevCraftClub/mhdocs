import{r as e}from"./rolldown-runtime-QTnfLwEv.js";import{t}from"./jsx-runtime-By8HlURe.js";var n=e(t()),r={title:`ErrorResponseDto`},i=new Date(1787750944e3),a=`

**Описание:** DTO для представления ответа об ошибке API
Класс инкапсулирует информацию об ошибке, возвращаемой API Kinopoisk.dev,
включая HTTP статус код, сообщение об ошибке и тип ошибки.
Используется для унифицированной обработки ошибочных ответов API.

**С версии:** 1.0.0

**Версия:** 1.0.0

**См. также:**

* \`BaseResponseDto\`:

## \`__construct()\` [#__construct]

**Описание:** Конструктор для создания DTO ошибки
Инициализирует все обязательные поля ответа об ошибке.
Все свойства являются  для обеспечения неизменности данных.

**Параметры:**

* \`$statusCode\` (int): HTTP статус код ошибки (например, 400, 401, 403, 404, 500)
* \`$message\` (string): Человекочитаемое сообщение об ошибке на русском языке
* \`$error\` (string): Краткое техническое описание типа ошибки (например, "Bad Request", "Unauthorized")

## \`fromArray()\` [#fromarray]

**Описание:** Создает экземпляр DTO из массива данных
Фабричный метод для создания объекта DTO из ассоциативного массива,
полученного из API ответа. Каждый дочерний класс должен реализовать
этот метод в соответствии со своей структурой данных.

Создает экземпляр DTO ошибки из массива данных API ответа.
Извлекает обязательные поля statusCode, message и error из массива.

**Возвращает:** \`static\` Экземпляр ErrorResponseDto с данными ошибки

**Исключения:**

* \`\\InvalidArgumentException\`: Если в массиве отсутствуют обязательные поля

## \`toArray()\` [#toarray]

**Описание:** Преобразует DTO в ассоциативный массив
Метод для сериализации объекта DTO в массив, пригодный для
передачи в JSON или другие форматы. Структура массива должна
соответствовать формату API ответа.

Преобразует DTO ошибки в ассоциативный массив для сериализации.
Структура возвращаемого массива соответствует формату API ответа.

**Возвращает:** \`array\` Ассоциативный массив с полями statusCode, message и error
`,o={contents:[{heading:void 0,content:`**Описание:** DTO для представления ответа об ошибке API
Класс инкапсулирует информацию об ошибке, возвращаемой API Kinopoisk.dev,
включая HTTP статус код, сообщение об ошибке и тип ошибки.
Используется для унифицированной обработки ошибочных ответов API.`},{heading:void 0,content:`**С версии:** 1.0.0`},{heading:void 0,content:`**Версия:** 1.0.0`},{heading:void 0,content:`**См. также:**`},{heading:void 0,content:"`BaseResponseDto`:"},{heading:`__construct`,content:`**Описание:** Конструктор для создания DTO ошибки
Инициализирует все обязательные поля ответа об ошибке.
Все свойства являются  для обеспечения неизменности данных.`},{heading:`__construct`,content:`**Параметры:**`},{heading:`__construct`,content:"`$statusCode` (int): HTTP статус код ошибки (например, 400, 401, 403, 404, 500)"},{heading:`__construct`,content:"`$message` (string): Человекочитаемое сообщение об ошибке на русском языке"},{heading:`__construct`,content:'`$error` (string): Краткое техническое описание типа ошибки (например, "Bad Request", "Unauthorized")'},{heading:`fromarray`,content:`**Описание:** Создает экземпляр DTO из массива данных
Фабричный метод для создания объекта DTO из ассоциативного массива,
полученного из API ответа. Каждый дочерний класс должен реализовать
этот метод в соответствии со своей структурой данных.`},{heading:`fromarray`,content:`Создает экземпляр DTO ошибки из массива данных API ответа.
Извлекает обязательные поля statusCode, message и error из массива.`},{heading:`fromarray`,content:"**Возвращает:** `static` Экземпляр ErrorResponseDto с данными ошибки"},{heading:`fromarray`,content:`**Исключения:**`},{heading:`fromarray`,content:"`\\InvalidArgumentException`: Если в массиве отсутствуют обязательные поля"},{heading:`toarray`,content:`**Описание:** Преобразует DTO в ассоциативный массив
Метод для сериализации объекта DTO в массив, пригодный для
передачи в JSON или другие форматы. Структура массива должна
соответствовать формату API ответа.`},{heading:`toarray`,content:`Преобразует DTO ошибки в ассоциативный массив для сериализации.
Структура возвращаемого массива соответствует формату API ответа.`},{heading:`toarray`,content:"**Возвращает:** `array` Ассоциативный массив с полями statusCode, message и error"}],headings:[{id:`__construct`,content:"`__construct()`"},{id:`fromarray`,content:"`fromArray()`"},{id:`toarray`,content:"`toArray()`"}]},s=[{depth:2,url:`#__construct`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`__construct()`})})},{depth:2,url:`#fromarray`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`fromArray()`})})},{depth:2,url:`#toarray`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`toArray()`})})}];function c(e){let t={code:`code`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` DTO для представления ответа об ошибке API
Класс инкапсулирует информацию об ошибке, возвращаемой API Kinopoisk.dev,
включая HTTP статус код, сообщение об ошибке и тип ошибки.
Используется для унифицированной обработки ошибочных ответов API.`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 1.0.0`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Версия:`}),` 1.0.0`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`См. также:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`BaseResponseDto`}),`:`]}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`__construct`,children:(0,n.jsx)(t.code,{children:`__construct()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Конструктор для создания DTO ошибки
Инициализирует все обязательные поля ответа об ошибке.
Все свойства являются  для обеспечения неизменности данных.`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$statusCode`}),` (int): HTTP статус код ошибки (например, 400, 401, 403, 404, 500)`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$message`}),` (string): Человекочитаемое сообщение об ошибке на русском языке`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$error`}),` (string): Краткое техническое описание типа ошибки (например, "Bad Request", "Unauthorized")`]}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`fromarray`,children:(0,n.jsx)(t.code,{children:`fromArray()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Создает экземпляр DTO из массива данных
Фабричный метод для создания объекта DTO из ассоциативного массива,
полученного из API ответа. Каждый дочерний класс должен реализовать
этот метод в соответствии со своей структурой данных.`]}),`
`,(0,n.jsx)(t.p,{children:`Создает экземпляр DTO ошибки из массива данных API ответа.
Извлекает обязательные поля statusCode, message и error из массива.`}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`static`}),` Экземпляр ErrorResponseDto с данными ошибки`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Исключения:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`\\InvalidArgumentException`}),`: Если в массиве отсутствуют обязательные поля`]}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`toarray`,children:(0,n.jsx)(t.code,{children:`toArray()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Преобразует DTO в ассоциативный массив
Метод для сериализации объекта DTO в массив, пригодный для
передачи в JSON или другие форматы. Структура массива должна
соответствовать формату API ответа.`]}),`
`,(0,n.jsx)(t.p,{children:`Преобразует DTO ошибки в ассоциативный массив для сериализации.
Структура возвращаемого массива соответствует формату API ответа.`}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`array`}),` Ассоциативный массив с полями statusCode, message и error`]})]})}function l(e={}){let{wrapper:t}=e.components||{};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}export{a as _markdown,l as default,r as frontmatter,i as lastModified,o as structuredData,s as toc};