import{r as e}from"./rolldown-runtime-QTnfLwEv.js";import{t}from"./jsx-runtime-By8HlURe.js";var n=e(t()),r={title:`AbstractRequest`,description:`Базовый Request: endpoint, QueryBuilder, request() к Client.`,version:`1.0.0`},i=new Date(1787213191e3),a=`

**Описание:** Базовый Request: endpoint, QueryBuilder, request() к Client.

**Namespace:** \`Devcraft\\Webshare\\Abstracts\`

**Extends:** [AbstractBasicClass](AbstractBasicClass)

**С версии:** 1.0.0

**См. также:**

* [AbstractBasicClass](AbstractBasicClass)
* [QueryBuilder](../classes/QueryBuilder)
* [Client](../classes/Client)
* [App](../classes/App)

## Методы [#методы]

### \`__construct(): void\` [#__construct-void]

**Описание:** Создать request с endpoint и полями QueryBuilder.

**Параметры:**

| Параметр          | Тип      | Описание                                     |
| ----------------- | -------- | -------------------------------------------- |
| \`$endpoint\`       | \`string\` | Относительный путь ресурса.                  |
| \`$parameters\`     | \`array\`  | Разрешённые optional query-поля.             |
| \`$requiredFields\` | \`array\`  | Обязательные query-поля. По умолчанию: \`[]\`. |

**Возвращает:** \`void\`

### \`query(): QueryBuilder\` [#query-querybuilder]

**Описание:** QueryBuilder этого request.

**Возвращает:** [QueryBuilder](../classes/QueryBuilder)

### \`updateQuery(): void\` [#updatequery-void]

**Описание:** Заменить QueryBuilder.

**Параметры:**

| Параметр        | Тип                                     | Описание                |
| --------------- | --------------------------------------- | ----------------------- |
| \`$queryBuilder\` | [QueryBuilder](../classes/QueryBuilder) | Экземпляр QueryBuilder. |

**Возвращает:** \`void\`

### \`setEndpoint(): void\` [#setendpoint-void]

**Описание:** Изменить endpoint.

**Параметры:**

| Параметр    | Тип      | Описание                    |
| ----------- | -------- | --------------------------- |
| \`$endpoint\` | \`string\` | Относительный путь ресурса. |

**Возвращает:** \`void\`

### \`withEndpoint(): self\` [#withendpoint-self]

**Описание:** Fluent смена endpoint.

**Параметры:**

| Параметр    | Тип      | Описание                    |
| ----------- | -------- | --------------------------- |
| \`$endpoint\` | \`string\` | Относительный путь ресурса. |

**Возвращает:** \`self\`

### \`getEndpoint(): string\` [#getendpoint-string]

**Описание:** Текущий endpoint.

**Возвращает:** \`string\`

### \`request(): string\` [#request-string]

**Описание:** Выполнить HTTP-запрос через Client.

**Параметры:**

| Параметр              | Тип                                     | Описание                                                    |
| --------------------- | --------------------------------------- | ----------------------------------------------------------- |
| \`$method\`             | [RequestMethod](../enums/RequestMethod) | HTTP-метод. По умолчанию: \`RequestMethod::GET\`.             |
| \`$additionalEndpoint\` | \`?string\`                               | Суффикс к базовому endpoint. По умолчанию: \`NULL\`.          |
| \`$body\`               | ?[RequestBody](../entities/RequestBody) | Тело запроса. По умолчанию: \`NULL\`.                         |
| \`$apiVersion\`         | \`?string\`                               | Override версии API для этого вызова. По умолчанию: \`NULL\`. |
| \`$forceRefresh\`       | \`bool\`                                  | Обойти кэш GET. По умолчанию: \`false\`.                      |

**Возвращает:** \`string\`

**Исключения:** \`\\JsonException\`
`,o={contents:[{heading:void 0,content:`**Описание:** Базовый Request: endpoint, QueryBuilder, request() к Client.`},{heading:void 0,content:"**Namespace:** `Devcraft\\Webshare\\Abstracts`"},{heading:void 0,content:`**Extends:** AbstractBasicClass`},{heading:void 0,content:`**С версии:** 1.0.0`},{heading:void 0,content:`**См. также:**`},{heading:void 0,content:`AbstractBasicClass`},{heading:void 0,content:`QueryBuilder`},{heading:void 0,content:`Client`},{heading:void 0,content:`App`},{heading:`__construct-void`,content:`**Описание:** Создать request с endpoint и полями QueryBuilder.`},{heading:`__construct-void`,content:`**Параметры:**`},{heading:`__construct-void`,content:`Параметр`},{heading:`__construct-void`,content:`Тип`},{heading:`__construct-void`,content:`Описание`},{heading:`__construct-void`,content:"`$endpoint`"},{heading:`__construct-void`,content:"`string`"},{heading:`__construct-void`,content:`Относительный путь ресурса.`},{heading:`__construct-void`,content:"`$parameters`"},{heading:`__construct-void`,content:"`array`"},{heading:`__construct-void`,content:`Разрешённые optional query-поля.`},{heading:`__construct-void`,content:"`$requiredFields`"},{heading:`__construct-void`,content:"`array`"},{heading:`__construct-void`,content:"Обязательные query-поля. По умолчанию: `[]`."},{heading:`__construct-void`,content:"**Возвращает:** `void`"},{heading:`query-querybuilder`,content:`**Описание:** QueryBuilder этого request.`},{heading:`query-querybuilder`,content:`**Возвращает:** QueryBuilder`},{heading:`updatequery-void`,content:`**Описание:** Заменить QueryBuilder.`},{heading:`updatequery-void`,content:`**Параметры:**`},{heading:`updatequery-void`,content:`Параметр`},{heading:`updatequery-void`,content:`Тип`},{heading:`updatequery-void`,content:`Описание`},{heading:`updatequery-void`,content:"`$queryBuilder`"},{heading:`updatequery-void`,content:`QueryBuilder`},{heading:`updatequery-void`,content:`Экземпляр QueryBuilder.`},{heading:`updatequery-void`,content:"**Возвращает:** `void`"},{heading:`setendpoint-void`,content:`**Описание:** Изменить endpoint.`},{heading:`setendpoint-void`,content:`**Параметры:**`},{heading:`setendpoint-void`,content:`Параметр`},{heading:`setendpoint-void`,content:`Тип`},{heading:`setendpoint-void`,content:`Описание`},{heading:`setendpoint-void`,content:"`$endpoint`"},{heading:`setendpoint-void`,content:"`string`"},{heading:`setendpoint-void`,content:`Относительный путь ресурса.`},{heading:`setendpoint-void`,content:"**Возвращает:** `void`"},{heading:`withendpoint-self`,content:`**Описание:** Fluent смена endpoint.`},{heading:`withendpoint-self`,content:`**Параметры:**`},{heading:`withendpoint-self`,content:`Параметр`},{heading:`withendpoint-self`,content:`Тип`},{heading:`withendpoint-self`,content:`Описание`},{heading:`withendpoint-self`,content:"`$endpoint`"},{heading:`withendpoint-self`,content:"`string`"},{heading:`withendpoint-self`,content:`Относительный путь ресурса.`},{heading:`withendpoint-self`,content:"**Возвращает:** `self`"},{heading:`getendpoint-string`,content:`**Описание:** Текущий endpoint.`},{heading:`getendpoint-string`,content:"**Возвращает:** `string`"},{heading:`request-string`,content:`**Описание:** Выполнить HTTP-запрос через Client.`},{heading:`request-string`,content:`**Параметры:**`},{heading:`request-string`,content:`Параметр`},{heading:`request-string`,content:`Тип`},{heading:`request-string`,content:`Описание`},{heading:`request-string`,content:"`$method`"},{heading:`request-string`,content:`RequestMethod`},{heading:`request-string`,content:"HTTP-метод. По умолчанию: `RequestMethod::GET`."},{heading:`request-string`,content:"`$additionalEndpoint`"},{heading:`request-string`,content:"`?string`"},{heading:`request-string`,content:"Суффикс к базовому endpoint. По умолчанию: `NULL`."},{heading:`request-string`,content:"`$body`"},{heading:`request-string`,content:`?RequestBody`},{heading:`request-string`,content:"Тело запроса. По умолчанию: `NULL`."},{heading:`request-string`,content:"`$apiVersion`"},{heading:`request-string`,content:"`?string`"},{heading:`request-string`,content:"Override версии API для этого вызова. По умолчанию: `NULL`."},{heading:`request-string`,content:"`$forceRefresh`"},{heading:`request-string`,content:"`bool`"},{heading:`request-string`,content:"Обойти кэш GET. По умолчанию: `false`."},{heading:`request-string`,content:"**Возвращает:** `string`"},{heading:`request-string`,content:"**Исключения:** `\\JsonException`"}],headings:[{id:`методы`,content:`Методы`},{id:`__construct-void`,content:"`__construct(): void`"},{id:`query-querybuilder`,content:"`query(): QueryBuilder`"},{id:`updatequery-void`,content:"`updateQuery(): void`"},{id:`setendpoint-void`,content:"`setEndpoint(): void`"},{id:`withendpoint-self`,content:"`withEndpoint(): self`"},{id:`getendpoint-string`,content:"`getEndpoint(): string`"},{id:`request-string`,content:"`request(): string`"}]},s=[{depth:2,url:`#методы`,title:(0,n.jsx)(n.Fragment,{children:`Методы`})},{depth:3,url:`#__construct-void`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`__construct(): void`})})},{depth:3,url:`#query-querybuilder`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`query(): QueryBuilder`})})},{depth:3,url:`#updatequery-void`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`updateQuery(): void`})})},{depth:3,url:`#setendpoint-void`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`setEndpoint(): void`})})},{depth:3,url:`#withendpoint-self`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`withEndpoint(): self`})})},{depth:3,url:`#getendpoint-string`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`getEndpoint(): string`})})},{depth:3,url:`#request-string`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`request(): string`})})}];function c(e){let t={a:`a`,code:`code`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,strong:`strong`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,ul:`ul`,...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Базовый Request: endpoint, QueryBuilder, request() к Client.`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Namespace:`}),` `,(0,n.jsx)(t.code,{children:`Devcraft\\Webshare\\Abstracts`})]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Extends:`}),` `,(0,n.jsx)(t.a,{href:`AbstractBasicClass`,children:`AbstractBasicClass`})]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 1.0.0`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`См. также:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`AbstractBasicClass`,children:`AbstractBasicClass`})}),`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`../classes/QueryBuilder`,children:`QueryBuilder`})}),`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`../classes/Client`,children:`Client`})}),`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`../classes/App`,children:`App`})}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`методы`,children:`Методы`}),`
`,(0,n.jsx)(t.h3,{id:`__construct-void`,children:(0,n.jsx)(t.code,{children:`__construct(): void`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Создать request с endpoint и полями QueryBuilder.`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`Параметр`}),(0,n.jsx)(t.th,{children:`Тип`}),(0,n.jsx)(t.th,{children:`Описание`})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:`$endpoint`})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:`string`})}),(0,n.jsx)(t.td,{children:`Относительный путь ресурса.`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:`$parameters`})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:`array`})}),(0,n.jsx)(t.td,{children:`Разрешённые optional query-поля.`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:`$requiredFields`})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:`array`})}),(0,n.jsxs)(t.td,{children:[`Обязательные query-поля. По умолчанию: `,(0,n.jsx)(t.code,{children:`[]`}),`.`]})]})]})]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`void`})]}),`
`,(0,n.jsx)(t.h3,{id:`query-querybuilder`,children:(0,n.jsx)(t.code,{children:`query(): QueryBuilder`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` QueryBuilder этого request.`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.a,{href:`../classes/QueryBuilder`,children:`QueryBuilder`})]}),`
`,(0,n.jsx)(t.h3,{id:`updatequery-void`,children:(0,n.jsx)(t.code,{children:`updateQuery(): void`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Заменить QueryBuilder.`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`Параметр`}),(0,n.jsx)(t.th,{children:`Тип`}),(0,n.jsx)(t.th,{children:`Описание`})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:`$queryBuilder`})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:`../classes/QueryBuilder`,children:`QueryBuilder`})}),(0,n.jsx)(t.td,{children:`Экземпляр QueryBuilder.`})]})})]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`void`})]}),`
`,(0,n.jsx)(t.h3,{id:`setendpoint-void`,children:(0,n.jsx)(t.code,{children:`setEndpoint(): void`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Изменить endpoint.`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`Параметр`}),(0,n.jsx)(t.th,{children:`Тип`}),(0,n.jsx)(t.th,{children:`Описание`})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:`$endpoint`})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:`string`})}),(0,n.jsx)(t.td,{children:`Относительный путь ресурса.`})]})})]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`void`})]}),`
`,(0,n.jsx)(t.h3,{id:`withendpoint-self`,children:(0,n.jsx)(t.code,{children:`withEndpoint(): self`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Fluent смена endpoint.`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`Параметр`}),(0,n.jsx)(t.th,{children:`Тип`}),(0,n.jsx)(t.th,{children:`Описание`})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:`$endpoint`})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:`string`})}),(0,n.jsx)(t.td,{children:`Относительный путь ресурса.`})]})})]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`self`})]}),`
`,(0,n.jsx)(t.h3,{id:`getendpoint-string`,children:(0,n.jsx)(t.code,{children:`getEndpoint(): string`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Текущий endpoint.`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`string`})]}),`
`,(0,n.jsx)(t.h3,{id:`request-string`,children:(0,n.jsx)(t.code,{children:`request(): string`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Выполнить HTTP-запрос через Client.`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`Параметр`}),(0,n.jsx)(t.th,{children:`Тип`}),(0,n.jsx)(t.th,{children:`Описание`})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:`$method`})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:`../enums/RequestMethod`,children:`RequestMethod`})}),(0,n.jsxs)(t.td,{children:[`HTTP-метод. По умолчанию: `,(0,n.jsx)(t.code,{children:`RequestMethod::GET`}),`.`]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:`$additionalEndpoint`})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:`?string`})}),(0,n.jsxs)(t.td,{children:[`Суффикс к базовому endpoint. По умолчанию: `,(0,n.jsx)(t.code,{children:`NULL`}),`.`]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:`$body`})}),(0,n.jsxs)(t.td,{children:[`?`,(0,n.jsx)(t.a,{href:`../entities/RequestBody`,children:`RequestBody`})]}),(0,n.jsxs)(t.td,{children:[`Тело запроса. По умолчанию: `,(0,n.jsx)(t.code,{children:`NULL`}),`.`]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:`$apiVersion`})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:`?string`})}),(0,n.jsxs)(t.td,{children:[`Override версии API для этого вызова. По умолчанию: `,(0,n.jsx)(t.code,{children:`NULL`}),`.`]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:`$forceRefresh`})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:`bool`})}),(0,n.jsxs)(t.td,{children:[`Обойти кэш GET. По умолчанию: `,(0,n.jsx)(t.code,{children:`false`}),`.`]})]})]})]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`string`})]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Исключения:`}),` `,(0,n.jsx)(t.code,{children:`\\JsonException`})]})]})}function l(e={}){let{wrapper:t}=e.components||{};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}export{a as _markdown,l as default,r as frontmatter,i as lastModified,o as structuredData,s as toc};