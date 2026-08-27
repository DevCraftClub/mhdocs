import{r as e}from"./rolldown-runtime-QTnfLwEv.js";import{t}from"./jsx-runtime-By8HlURe.js";var n=e(t()),r={title:`Client`,description:`HTTP-клиент Guzzle с кэшем GET, ретраями 429/5xx и X-Subuser.`,version:`1.0.0`},i=new Date(1787834766e3),a=`

**Описание:** HTTP-клиент Guzzle с кэшем GET, ретраями 429/5xx и X-Subuser.

**Namespace:** \`Devcraft\\Webshare\\Classes\`

**Extends:** [AbstractBasicClass](../abstracts/AbstractBasicClass)

**С версии:** 1.0.0

**См. также:**

* [AbstractBasicClass](../abstracts/AbstractBasicClass)
* [App](App)
* [CacheManager](CacheManager)
* [QueryBuilder](QueryBuilder)

## Методы [#методы]

### \`__construct(): void\` [#__construct-void]

**Описание:** Создать HTTP-клиент с Token-авторизацией.

**Параметры:**

| Параметр      | Тип             | Описание                                                     |
| ------------- | --------------- | ------------------------------------------------------------ |
| \`$apiKey\`     | \`string\`        | API ключ. Если не указан — из \`API_KEY\`.                     |
| \`$apiUrl\`     | \`string\`        | —                                                            |
| \`$apiVersion\` | \`string\`        | Override версии API для этого вызова.                        |
| \`$httpClient\` | \`?GuzzleClient\` | Опциональный Guzzle client (тесты/DI). По умолчанию: \`NULL\`. |

**Возвращает:** \`void\`

### \`withSubuser(): self\` [#withsubuser-self]

**Описание:** Установить X-Subuser для последующих запросов.

**Параметры:**

| Параметр     | Тип       | Описание                            |
| ------------ | --------- | ----------------------------------- |
| \`$subuserId\` | \`?string\` | ID SubUser для заголовка X-Subuser. |

**Возвращает:** \`self\`

### \`getSubuser(): ?string\` [#getsubuser-string]

**Описание:** Текущий SubUser id для маскировки.

**Возвращает:** \`?string\`

### \`send(): string\` [#send-string]

**Описание:** Отправить запрос к WebShare API.

**Параметры:**

| Параметр        | Тип                                     | Описание                                             |
| --------------- | --------------------------------------- | ---------------------------------------------------- |
| \`$endpoint\`     | \`string\`                                | Относительный путь ресурса.                          |
| \`$method\`       | [RequestMethod](../enums/RequestMethod) | HTTP-метод. По умолчанию: \`RequestMethod::GET\`.      |
| \`$query\`        | ?[QueryBuilder](QueryBuilder)           | QueryBuilder query-параметров. По умолчанию: \`NULL\`. |
| \`$body\`         | ?[RequestBody](../entities/RequestBody) | Тело запроса. По умолчанию: \`NULL\`.                  |
| \`$forceRefresh\` | \`bool\`                                  | Обойти кэш GET. По умолчанию: \`false\`.               |

**Возвращает:** \`string\`

**Исключения:** [ApiException](../exceptions/ApiException), [RateLimitException](../exceptions/RateLimitException), \`JsonException\`

### \`getRateLimits(): array\` [#getratelimits-array]

**Описание:** Последние x-ratelimit-\\* заголовки.

**Возвращает:** \`array\`

### \`getApiVersion(): string\` [#getapiversion-string]

**Описание:** Версия API этого клиента.

**Возвращает:** \`string\`
`,o={contents:[{heading:void 0,content:`**Описание:** HTTP-клиент Guzzle с кэшем GET, ретраями 429/5xx и X-Subuser.`},{heading:void 0,content:"**Namespace:** `Devcraft\\Webshare\\Classes`"},{heading:void 0,content:`**Extends:** AbstractBasicClass`},{heading:void 0,content:`**С версии:** 1.0.0`},{heading:void 0,content:`**См. также:**`},{heading:void 0,content:`AbstractBasicClass`},{heading:void 0,content:`App`},{heading:void 0,content:`CacheManager`},{heading:void 0,content:`QueryBuilder`},{heading:`__construct-void`,content:`**Описание:** Создать HTTP-клиент с Token-авторизацией.`},{heading:`__construct-void`,content:`**Параметры:**`},{heading:`__construct-void`,content:`Параметр`},{heading:`__construct-void`,content:`Тип`},{heading:`__construct-void`,content:`Описание`},{heading:`__construct-void`,content:"`$apiKey`"},{heading:`__construct-void`,content:"`string`"},{heading:`__construct-void`,content:"API ключ. Если не указан — из `API_KEY`."},{heading:`__construct-void`,content:"`$apiUrl`"},{heading:`__construct-void`,content:"`string`"},{heading:`__construct-void`,content:`—`},{heading:`__construct-void`,content:"`$apiVersion`"},{heading:`__construct-void`,content:"`string`"},{heading:`__construct-void`,content:`Override версии API для этого вызова.`},{heading:`__construct-void`,content:"`$httpClient`"},{heading:`__construct-void`,content:"`?GuzzleClient`"},{heading:`__construct-void`,content:"Опциональный Guzzle client (тесты/DI). По умолчанию: `NULL`."},{heading:`__construct-void`,content:"**Возвращает:** `void`"},{heading:`withsubuser-self`,content:`**Описание:** Установить X-Subuser для последующих запросов.`},{heading:`withsubuser-self`,content:`**Параметры:**`},{heading:`withsubuser-self`,content:`Параметр`},{heading:`withsubuser-self`,content:`Тип`},{heading:`withsubuser-self`,content:`Описание`},{heading:`withsubuser-self`,content:"`$subuserId`"},{heading:`withsubuser-self`,content:"`?string`"},{heading:`withsubuser-self`,content:`ID SubUser для заголовка X-Subuser.`},{heading:`withsubuser-self`,content:"**Возвращает:** `self`"},{heading:`getsubuser-string`,content:`**Описание:** Текущий SubUser id для маскировки.`},{heading:`getsubuser-string`,content:"**Возвращает:** `?string`"},{heading:`send-string`,content:`**Описание:** Отправить запрос к WebShare API.`},{heading:`send-string`,content:`**Параметры:**`},{heading:`send-string`,content:`Параметр`},{heading:`send-string`,content:`Тип`},{heading:`send-string`,content:`Описание`},{heading:`send-string`,content:"`$endpoint`"},{heading:`send-string`,content:"`string`"},{heading:`send-string`,content:`Относительный путь ресурса.`},{heading:`send-string`,content:"`$method`"},{heading:`send-string`,content:`RequestMethod`},{heading:`send-string`,content:"HTTP-метод. По умолчанию: `RequestMethod::GET`."},{heading:`send-string`,content:"`$query`"},{heading:`send-string`,content:`?QueryBuilder`},{heading:`send-string`,content:"QueryBuilder query-параметров. По умолчанию: `NULL`."},{heading:`send-string`,content:"`$body`"},{heading:`send-string`,content:`?RequestBody`},{heading:`send-string`,content:"Тело запроса. По умолчанию: `NULL`."},{heading:`send-string`,content:"`$forceRefresh`"},{heading:`send-string`,content:"`bool`"},{heading:`send-string`,content:"Обойти кэш GET. По умолчанию: `false`."},{heading:`send-string`,content:"**Возвращает:** `string`"},{heading:`send-string`,content:"**Исключения:** ApiException, RateLimitException, `JsonException`"},{heading:`getratelimits-array`,content:`**Описание:** Последние x-ratelimit-\\* заголовки.`},{heading:`getratelimits-array`,content:"**Возвращает:** `array`"},{heading:`getapiversion-string`,content:`**Описание:** Версия API этого клиента.`},{heading:`getapiversion-string`,content:"**Возвращает:** `string`"}],headings:[{id:`методы`,content:`Методы`},{id:`__construct-void`,content:"`__construct(): void`"},{id:`withsubuser-self`,content:"`withSubuser(): self`"},{id:`getsubuser-string`,content:"`getSubuser(): ?string`"},{id:`send-string`,content:"`send(): string`"},{id:`getratelimits-array`,content:"`getRateLimits(): array`"},{id:`getapiversion-string`,content:"`getApiVersion(): string`"}]},s=[{depth:2,url:`#методы`,title:(0,n.jsx)(n.Fragment,{children:`Методы`})},{depth:3,url:`#__construct-void`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`__construct(): void`})})},{depth:3,url:`#withsubuser-self`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`withSubuser(): self`})})},{depth:3,url:`#getsubuser-string`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`getSubuser(): ?string`})})},{depth:3,url:`#send-string`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`send(): string`})})},{depth:3,url:`#getratelimits-array`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`getRateLimits(): array`})})},{depth:3,url:`#getapiversion-string`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`getApiVersion(): string`})})}];function c(e){let t={a:`a`,code:`code`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,strong:`strong`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,ul:`ul`,...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` HTTP-клиент Guzzle с кэшем GET, ретраями 429/5xx и X-Subuser.`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Namespace:`}),` `,(0,n.jsx)(t.code,{children:`Devcraft\\Webshare\\Classes`})]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Extends:`}),` `,(0,n.jsx)(t.a,{href:`../abstracts/AbstractBasicClass`,children:`AbstractBasicClass`})]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 1.0.0`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`См. также:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`../abstracts/AbstractBasicClass`,children:`AbstractBasicClass`})}),`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`App`,children:`App`})}),`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`CacheManager`,children:`CacheManager`})}),`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`QueryBuilder`,children:`QueryBuilder`})}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`методы`,children:`Методы`}),`
`,(0,n.jsx)(t.h3,{id:`__construct-void`,children:(0,n.jsx)(t.code,{children:`__construct(): void`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Создать HTTP-клиент с Token-авторизацией.`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`Параметр`}),(0,n.jsx)(t.th,{children:`Тип`}),(0,n.jsx)(t.th,{children:`Описание`})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:`$apiKey`})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:`string`})}),(0,n.jsxs)(t.td,{children:[`API ключ. Если не указан — из `,(0,n.jsx)(t.code,{children:`API_KEY`}),`.`]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:`$apiUrl`})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:`string`})}),(0,n.jsx)(t.td,{children:`—`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:`$apiVersion`})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:`string`})}),(0,n.jsx)(t.td,{children:`Override версии API для этого вызова.`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:`$httpClient`})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:`?GuzzleClient`})}),(0,n.jsxs)(t.td,{children:[`Опциональный Guzzle client (тесты/DI). По умолчанию: `,(0,n.jsx)(t.code,{children:`NULL`}),`.`]})]})]})]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`void`})]}),`
`,(0,n.jsx)(t.h3,{id:`withsubuser-self`,children:(0,n.jsx)(t.code,{children:`withSubuser(): self`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Установить X-Subuser для последующих запросов.`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`Параметр`}),(0,n.jsx)(t.th,{children:`Тип`}),(0,n.jsx)(t.th,{children:`Описание`})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:`$subuserId`})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:`?string`})}),(0,n.jsx)(t.td,{children:`ID SubUser для заголовка X-Subuser.`})]})})]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`self`})]}),`
`,(0,n.jsx)(t.h3,{id:`getsubuser-string`,children:(0,n.jsx)(t.code,{children:`getSubuser(): ?string`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Текущий SubUser id для маскировки.`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`?string`})]}),`
`,(0,n.jsx)(t.h3,{id:`send-string`,children:(0,n.jsx)(t.code,{children:`send(): string`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Отправить запрос к WebShare API.`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`Параметр`}),(0,n.jsx)(t.th,{children:`Тип`}),(0,n.jsx)(t.th,{children:`Описание`})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:`$endpoint`})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:`string`})}),(0,n.jsx)(t.td,{children:`Относительный путь ресурса.`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:`$method`})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:`../enums/RequestMethod`,children:`RequestMethod`})}),(0,n.jsxs)(t.td,{children:[`HTTP-метод. По умолчанию: `,(0,n.jsx)(t.code,{children:`RequestMethod::GET`}),`.`]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:`$query`})}),(0,n.jsxs)(t.td,{children:[`?`,(0,n.jsx)(t.a,{href:`QueryBuilder`,children:`QueryBuilder`})]}),(0,n.jsxs)(t.td,{children:[`QueryBuilder query-параметров. По умолчанию: `,(0,n.jsx)(t.code,{children:`NULL`}),`.`]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:`$body`})}),(0,n.jsxs)(t.td,{children:[`?`,(0,n.jsx)(t.a,{href:`../entities/RequestBody`,children:`RequestBody`})]}),(0,n.jsxs)(t.td,{children:[`Тело запроса. По умолчанию: `,(0,n.jsx)(t.code,{children:`NULL`}),`.`]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:`$forceRefresh`})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:`bool`})}),(0,n.jsxs)(t.td,{children:[`Обойти кэш GET. По умолчанию: `,(0,n.jsx)(t.code,{children:`false`}),`.`]})]})]})]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`string`})]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Исключения:`}),` `,(0,n.jsx)(t.a,{href:`../exceptions/ApiException`,children:`ApiException`}),`, `,(0,n.jsx)(t.a,{href:`../exceptions/RateLimitException`,children:`RateLimitException`}),`, `,(0,n.jsx)(t.code,{children:`JsonException`})]}),`
`,(0,n.jsx)(t.h3,{id:`getratelimits-array`,children:(0,n.jsx)(t.code,{children:`getRateLimits(): array`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Последние x-ratelimit-* заголовки.`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`array`})]}),`
`,(0,n.jsx)(t.h3,{id:`getapiversion-string`,children:(0,n.jsx)(t.code,{children:`getApiVersion(): string`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Версия API этого клиента.`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`string`})]})]})}function l(e={}){let{wrapper:t}=e.components||{};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}export{a as _markdown,l as default,r as frontmatter,i as lastModified,o as structuredData,s as toc};