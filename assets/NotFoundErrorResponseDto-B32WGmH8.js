import{r as e}from"./rolldown-runtime-QTnfLwEv.js";import{t}from"./jsx-runtime-By8HlURe.js";var n=e(t()),r={title:`NotFoundErrorResponseDto`},i=new Date(1785400635e3),a=`

**Описание:** DTO для представления ответа с ошибкой "не найдено" (HTTP 404)
Этот класс наследует от BaseResponseDto и предоставляет специализированное
представление ошибки 404 Not Found, которая возникает когда запрошенный
ресурс не найден или лимит запросов к API Kinopoisk.dev был превышен.
Все свойства класса являются  для обеспечения неизменности данных ответа.

**С версии:** 1.0.0

**Версия:** 1.0.0

**См. также:**

* \`BaseResponseDto\`: Базовый класс для всех DTO ответов

## \`__construct()\` [#__construct]

**Описание:** Конструктор для создания DTO ошибки "не найдено"
Инициализирует все свойства ответа об ошибке 404 Not Found со значениями
по умолчанию. Все параметры являются  для обеспечения неизменности
данных после создания объекта.

**Параметры:**

* \`$statusCode\` (int): HTTP статус код 404
* \`$message\` (string): Сообщение об ошибке (по умолчанию: сообщение о превышении лимита)
* \`$error\` (string): Техническое описание ошибки (по умолчанию: "Not Found")

## \`fromArray()\` [#fromarray]

**Описание:** Создает экземпляр DTO из массива данных
Фабричный метод для создания объекта DTO из ассоциативного массива,
полученного из API ответа. Каждый дочерний класс должен реализовать
этот метод в соответствии со своей структурой данных.

Создает экземпляр DTO ошибки 404 из массива данных API ответа.
Использует значения по умолчанию для отсутствующих полей в массиве.

* statusCode: int - HTTP статус код (по умолчанию 404)
* message: string - сообщение об ошибке
* error: string - техническое описание ошибки

**Возвращает:** \`static\` Экземпляр NotFoundErrorResponseDto с данными ошибки

## \`toArray()\` [#toarray]

**Описание:** Преобразует DTO в ассоциативный массив
Метод для сериализации объекта DTO в массив, пригодный для
передачи в JSON или другие форматы. Структура массива должна
соответствовать формату API ответа.

Преобразует DTO ошибки 404 в ассоциативный массив для сериализации.
Структура возвращаемого массива соответствует формату API ответа.

**Возвращает:** \`array\` Ассоциативный массив с полями statusCode, message и error
`,o={contents:[{heading:void 0,content:`**Описание:** DTO для представления ответа с ошибкой "не найдено" (HTTP 404)
Этот класс наследует от BaseResponseDto и предоставляет специализированное
представление ошибки 404 Not Found, которая возникает когда запрошенный
ресурс не найден или лимит запросов к API Kinopoisk.dev был превышен.
Все свойства класса являются  для обеспечения неизменности данных ответа.`},{heading:void 0,content:`**С версии:** 1.0.0`},{heading:void 0,content:`**Версия:** 1.0.0`},{heading:void 0,content:`**См. также:**`},{heading:void 0,content:"`BaseResponseDto`: Базовый класс для всех DTO ответов"},{heading:`__construct`,content:`**Описание:** Конструктор для создания DTO ошибки "не найдено"
Инициализирует все свойства ответа об ошибке 404 Not Found со значениями
по умолчанию. Все параметры являются  для обеспечения неизменности
данных после создания объекта.`},{heading:`__construct`,content:`**Параметры:**`},{heading:`__construct`,content:"`$statusCode` (int): HTTP статус код 404"},{heading:`__construct`,content:"`$message` (string): Сообщение об ошибке (по умолчанию: сообщение о превышении лимита)"},{heading:`__construct`,content:'`$error` (string): Техническое описание ошибки (по умолчанию: "Not Found")'},{heading:`fromarray`,content:`**Описание:** Создает экземпляр DTO из массива данных
Фабричный метод для создания объекта DTO из ассоциативного массива,
полученного из API ответа. Каждый дочерний класс должен реализовать
этот метод в соответствии со своей структурой данных.`},{heading:`fromarray`,content:`Создает экземпляр DTO ошибки 404 из массива данных API ответа.
Использует значения по умолчанию для отсутствующих полей в массиве.`},{heading:`fromarray`,content:`statusCode: int - HTTP статус код (по умолчанию 404)`},{heading:`fromarray`,content:`message: string - сообщение об ошибке`},{heading:`fromarray`,content:`error: string - техническое описание ошибки`},{heading:`fromarray`,content:"**Возвращает:** `static` Экземпляр NotFoundErrorResponseDto с данными ошибки"},{heading:`toarray`,content:`**Описание:** Преобразует DTO в ассоциативный массив
Метод для сериализации объекта DTO в массив, пригодный для
передачи в JSON или другие форматы. Структура массива должна
соответствовать формату API ответа.`},{heading:`toarray`,content:`Преобразует DTO ошибки 404 в ассоциативный массив для сериализации.
Структура возвращаемого массива соответствует формату API ответа.`},{heading:`toarray`,content:"**Возвращает:** `array` Ассоциативный массив с полями statusCode, message и error"}],headings:[{id:`__construct`,content:"`__construct()`"},{id:`fromarray`,content:"`fromArray()`"},{id:`toarray`,content:"`toArray()`"}]},s=[{depth:2,url:`#__construct`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`__construct()`})})},{depth:2,url:`#fromarray`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`fromArray()`})})},{depth:2,url:`#toarray`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`toArray()`})})}];function c(e){let t={code:`code`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` DTO для представления ответа с ошибкой "не найдено" (HTTP 404)
Этот класс наследует от BaseResponseDto и предоставляет специализированное
представление ошибки 404 Not Found, которая возникает когда запрошенный
ресурс не найден или лимит запросов к API Kinopoisk.dev был превышен.
Все свойства класса являются  для обеспечения неизменности данных ответа.`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 1.0.0`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Версия:`}),` 1.0.0`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`См. также:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`BaseResponseDto`}),`: Базовый класс для всех DTO ответов`]}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`__construct`,children:(0,n.jsx)(t.code,{children:`__construct()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Конструктор для создания DTO ошибки "не найдено"
Инициализирует все свойства ответа об ошибке 404 Not Found со значениями
по умолчанию. Все параметры являются  для обеспечения неизменности
данных после создания объекта.`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$statusCode`}),` (int): HTTP статус код 404`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$message`}),` (string): Сообщение об ошибке (по умолчанию: сообщение о превышении лимита)`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$error`}),` (string): Техническое описание ошибки (по умолчанию: "Not Found")`]}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`fromarray`,children:(0,n.jsx)(t.code,{children:`fromArray()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Создает экземпляр DTO из массива данных
Фабричный метод для создания объекта DTO из ассоциативного массива,
полученного из API ответа. Каждый дочерний класс должен реализовать
этот метод в соответствии со своей структурой данных.`]}),`
`,(0,n.jsx)(t.p,{children:`Создает экземпляр DTO ошибки 404 из массива данных API ответа.
Использует значения по умолчанию для отсутствующих полей в массиве.`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsx)(t.li,{children:`statusCode: int - HTTP статус код (по умолчанию 404)`}),`
`,(0,n.jsx)(t.li,{children:`message: string - сообщение об ошибке`}),`
`,(0,n.jsx)(t.li,{children:`error: string - техническое описание ошибки`}),`
`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`static`}),` Экземпляр NotFoundErrorResponseDto с данными ошибки`]}),`
`,(0,n.jsx)(t.h2,{id:`toarray`,children:(0,n.jsx)(t.code,{children:`toArray()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Преобразует DTO в ассоциативный массив
Метод для сериализации объекта DTO в массив, пригодный для
передачи в JSON или другие форматы. Структура массива должна
соответствовать формату API ответа.`]}),`
`,(0,n.jsx)(t.p,{children:`Преобразует DTO ошибки 404 в ассоциативный массив для сериализации.
Структура возвращаемого массива соответствует формату API ответа.`}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`array`}),` Ассоциативный массив с полями statusCode, message и error`]})]})}function l(e={}){let{wrapper:t}=e.components||{};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}export{a as _markdown,l as default,r as frontmatter,i as lastModified,o as structuredData,s as toc};