import{r as e}from"./rolldown-runtime-QTnfLwEv.js";import{t}from"./jsx-runtime-By8HlURe.js";var n=e(t()),r={title:`App`,description:`Фасад библиотеки: init, Client, Cache, Requests discovery.`,version:`1.0.0`},i=new Date(1787218238e3),a=`

**Описание:** Фасад библиотеки: init, Client, Cache, Requests discovery.

**Namespace:** \`Devcraft\\Webshare\\Classes\`

**С версии:** 1.0.0

**См. также:**

* [Client](Client)
* [Гайд: proxies](../../guides/proxies)

## Public константы [#public-константы]

| Константа           | Тип   | Описание                                      |
| ------------------- | ----- | --------------------------------------------- |
| \`API_URL\`           | const | Значение: \`'https://proxy.webshare.io/api/'\`. |
| \`API_VERSION\`       | const | Значение: \`'v2'\`.                             |
| \`CACHE_LIFETIME\`    | const | Значение: \`3600\`.                             |
| \`ITERATE_MAX_PAGES\` | const | Значение: \`100\`.                              |

## Public свойства [#public-свойства]

| Свойство | Тип    | Описание                                            |
| -------- | ------ | --------------------------------------------------- |
| \`$debug\` | \`bool\` | Вывод отладочной информации. По умолчанию: \`false\`. |

## Методы [#методы]

### \`init(): void\` [#init-void]

**Описание:** Инициализация приложения с API ключом и env-конфигом.

**Параметры:**

| Параметр  | Тип       | Описание                                                       |
| --------- | --------- | -------------------------------------------------------------- |
| \`$apiKey\` | \`?string\` | API ключ. Если не указан — из \`API_KEY\`. По умолчанию: \`NULL\`. |
| \`$force\`  | \`bool\`    | Принудительная повторная инициализация. По умолчанию: \`false\`. |

**Возвращает:** \`void\`

### \`resetForTests(): void\` [#resetfortests-void]

**Описание:*&#x2A; Сброс singleton-состояния для PHPUnit. Не для production. **@internal** — только для тестов.

**Возвращает:** \`void\`

### \`defineApiKey(): void\` [#defineapikey-void]

**Описание:** Переопределить API ключ без полного re-init.

**Параметры:**

| Параметр  | Тип      | Описание                                 |
| --------- | -------- | ---------------------------------------- |
| \`$apiKey\` | \`string\` | API ключ. Если не указан — из \`API_KEY\`. |

**Возвращает:** \`void\`

### \`Cache(): TagAwareCacheInterface\` [#cache-tagawarecacheinterface]

**Описание:** Tag-aware filesystem cache (Symfony Cache).

**Возвращает:** \`TagAwareCacheInterface\`

### \`Client(): Client\` [#client-client]

**Описание:** Общий HTTP-клиент.

**Возвращает:** [Client](Client)

### \`newClient(): Client\` [#newclient-client]

**Описание:** Создать отдельный Client (например, с другой API version).

**Параметры:**

| Параметр   | Тип       | Описание                                                                             |
| ---------- | --------- | ------------------------------------------------------------------------------------ |
| \`$url\`     | \`?string\` | Base URL API. По умолчанию: \`NULL\`.                                                  |
| \`$version\` | \`?string\` | Версия API (\`v2\` / \`v3\`). По умолчанию: \`NULL\`.                                      |
| \`$key\`     | \`?string\` | API ключ клиента или cache/download key — по контексту метода. По умолчанию: \`NULL\`. |

**Возвращает:** [Client](Client)

### \`Requests(): AbstractRequest\` [#requests-abstractrequest]

**Описание:** Discovery Request-класса по короткому ключу (\`Proxy\`, \`Profile\`, …).

**Параметры:**

| Параметр       | Тип      | Описание                                       |
| -------------- | -------- | ---------------------------------------------- |
| \`$requestType\` | \`string\` | Короткий ключ Request (\`Proxy\`, \`Profile\`, …). |

**Возвращает:** [AbstractRequest](../abstracts/AbstractRequest) | \`null\`

### \`cacheEnabled(): bool\` [#cacheenabled-bool]

**Описание:** Включён ли кэш GET-ответов.

**Возвращает:** \`bool\`

### \`cacheLifetime(): int\` [#cachelifetime-int]

**Описание:** TTL кэша в секундах.

**Возвращает:** \`int\`

### \`iterateMaxPages(): int\` [#iteratemaxpages-int]

**Описание:** Лимит страниц для iterate().

**Возвращает:** \`int\`

### \`Debug(): bool\` [#debug-bool]

**Описание:** Флаг отладки.

**Возвращает:** \`bool\`
`,o={contents:[{heading:void 0,content:`**Описание:** Фасад библиотеки: init, Client, Cache, Requests discovery.`},{heading:void 0,content:"**Namespace:** `Devcraft\\Webshare\\Classes`"},{heading:void 0,content:`**С версии:** 1.0.0`},{heading:void 0,content:`**См. также:**`},{heading:void 0,content:`Client`},{heading:void 0,content:`Гайд: proxies`},{heading:`public-константы`,content:`Константа`},{heading:`public-константы`,content:`Тип`},{heading:`public-константы`,content:`Описание`},{heading:`public-константы`,content:"`API_URL`"},{heading:`public-константы`,content:`const`},{heading:`public-константы`,content:"Значение: `'https://proxy.webshare.io/api/'`."},{heading:`public-константы`,content:"`API_VERSION`"},{heading:`public-константы`,content:`const`},{heading:`public-константы`,content:"Значение: `'v2'`."},{heading:`public-константы`,content:"`CACHE_LIFETIME`"},{heading:`public-константы`,content:`const`},{heading:`public-константы`,content:"Значение: `3600`."},{heading:`public-константы`,content:"`ITERATE_MAX_PAGES`"},{heading:`public-константы`,content:`const`},{heading:`public-константы`,content:"Значение: `100`."},{heading:`public-свойства`,content:`Свойство`},{heading:`public-свойства`,content:`Тип`},{heading:`public-свойства`,content:`Описание`},{heading:`public-свойства`,content:"`$debug`"},{heading:`public-свойства`,content:"`bool`"},{heading:`public-свойства`,content:"Вывод отладочной информации. По умолчанию: `false`."},{heading:`init-void`,content:`**Описание:** Инициализация приложения с API ключом и env-конфигом.`},{heading:`init-void`,content:`**Параметры:**`},{heading:`init-void`,content:`Параметр`},{heading:`init-void`,content:`Тип`},{heading:`init-void`,content:`Описание`},{heading:`init-void`,content:"`$apiKey`"},{heading:`init-void`,content:"`?string`"},{heading:`init-void`,content:"API ключ. Если не указан — из `API_KEY`. По умолчанию: `NULL`."},{heading:`init-void`,content:"`$force`"},{heading:`init-void`,content:"`bool`"},{heading:`init-void`,content:"Принудительная повторная инициализация. По умолчанию: `false`."},{heading:`init-void`,content:"**Возвращает:** `void`"},{heading:`resetfortests-void`,content:`**Описание:*&#x2A; Сброс singleton-состояния для PHPUnit. Не для production. **@internal** — только для тестов.`},{heading:`resetfortests-void`,content:"**Возвращает:** `void`"},{heading:`defineapikey-void`,content:`**Описание:** Переопределить API ключ без полного re-init.`},{heading:`defineapikey-void`,content:`**Параметры:**`},{heading:`defineapikey-void`,content:`Параметр`},{heading:`defineapikey-void`,content:`Тип`},{heading:`defineapikey-void`,content:`Описание`},{heading:`defineapikey-void`,content:"`$apiKey`"},{heading:`defineapikey-void`,content:"`string`"},{heading:`defineapikey-void`,content:"API ключ. Если не указан — из `API_KEY`."},{heading:`defineapikey-void`,content:"**Возвращает:** `void`"},{heading:`cache-tagawarecacheinterface`,content:`**Описание:** Tag-aware filesystem cache (Symfony Cache).`},{heading:`cache-tagawarecacheinterface`,content:"**Возвращает:** `TagAwareCacheInterface`"},{heading:`client-client`,content:`**Описание:** Общий HTTP-клиент.`},{heading:`client-client`,content:`**Возвращает:** Client`},{heading:`newclient-client`,content:`**Описание:** Создать отдельный Client (например, с другой API version).`},{heading:`newclient-client`,content:`**Параметры:**`},{heading:`newclient-client`,content:`Параметр`},{heading:`newclient-client`,content:`Тип`},{heading:`newclient-client`,content:`Описание`},{heading:`newclient-client`,content:"`$url`"},{heading:`newclient-client`,content:"`?string`"},{heading:`newclient-client`,content:"Base URL API. По умолчанию: `NULL`."},{heading:`newclient-client`,content:"`$version`"},{heading:`newclient-client`,content:"`?string`"},{heading:`newclient-client`,content:"Версия API (`v2` / `v3`). По умолчанию: `NULL`."},{heading:`newclient-client`,content:"`$key`"},{heading:`newclient-client`,content:"`?string`"},{heading:`newclient-client`,content:"API ключ клиента или cache/download key — по контексту метода. По умолчанию: `NULL`."},{heading:`newclient-client`,content:`**Возвращает:** Client`},{heading:`requests-abstractrequest`,content:"**Описание:** Discovery Request-класса по короткому ключу (`Proxy`, `Profile`, …)."},{heading:`requests-abstractrequest`,content:`**Параметры:**`},{heading:`requests-abstractrequest`,content:`Параметр`},{heading:`requests-abstractrequest`,content:`Тип`},{heading:`requests-abstractrequest`,content:`Описание`},{heading:`requests-abstractrequest`,content:"`$requestType`"},{heading:`requests-abstractrequest`,content:"`string`"},{heading:`requests-abstractrequest`,content:"Короткий ключ Request (`Proxy`, `Profile`, …)."},{heading:`requests-abstractrequest`,content:"**Возвращает:** AbstractRequest | `null`"},{heading:`cacheenabled-bool`,content:`**Описание:** Включён ли кэш GET-ответов.`},{heading:`cacheenabled-bool`,content:"**Возвращает:** `bool`"},{heading:`cachelifetime-int`,content:`**Описание:** TTL кэша в секундах.`},{heading:`cachelifetime-int`,content:"**Возвращает:** `int`"},{heading:`iteratemaxpages-int`,content:`**Описание:** Лимит страниц для iterate().`},{heading:`iteratemaxpages-int`,content:"**Возвращает:** `int`"},{heading:`debug-bool`,content:`**Описание:** Флаг отладки.`},{heading:`debug-bool`,content:"**Возвращает:** `bool`"}],headings:[{id:`public-константы`,content:`Public константы`},{id:`public-свойства`,content:`Public свойства`},{id:`методы`,content:`Методы`},{id:`init-void`,content:"`init(): void`"},{id:`resetfortests-void`,content:"`resetForTests(): void`"},{id:`defineapikey-void`,content:"`defineApiKey(): void`"},{id:`cache-tagawarecacheinterface`,content:"`Cache(): TagAwareCacheInterface`"},{id:`client-client`,content:"`Client(): Client`"},{id:`newclient-client`,content:"`newClient(): Client`"},{id:`requests-abstractrequest`,content:"`Requests(): AbstractRequest`"},{id:`cacheenabled-bool`,content:"`cacheEnabled(): bool`"},{id:`cachelifetime-int`,content:"`cacheLifetime(): int`"},{id:`iteratemaxpages-int`,content:"`iterateMaxPages(): int`"},{id:`debug-bool`,content:"`Debug(): bool`"}]},s=[{depth:2,url:`#public-константы`,title:(0,n.jsx)(n.Fragment,{children:`Public константы`})},{depth:2,url:`#public-свойства`,title:(0,n.jsx)(n.Fragment,{children:`Public свойства`})},{depth:2,url:`#методы`,title:(0,n.jsx)(n.Fragment,{children:`Методы`})},{depth:3,url:`#init-void`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`init(): void`})})},{depth:3,url:`#resetfortests-void`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`resetForTests(): void`})})},{depth:3,url:`#defineapikey-void`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`defineApiKey(): void`})})},{depth:3,url:`#cache-tagawarecacheinterface`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`Cache(): TagAwareCacheInterface`})})},{depth:3,url:`#client-client`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`Client(): Client`})})},{depth:3,url:`#newclient-client`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`newClient(): Client`})})},{depth:3,url:`#requests-abstractrequest`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`Requests(): AbstractRequest`})})},{depth:3,url:`#cacheenabled-bool`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`cacheEnabled(): bool`})})},{depth:3,url:`#cachelifetime-int`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`cacheLifetime(): int`})})},{depth:3,url:`#iteratemaxpages-int`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`iterateMaxPages(): int`})})},{depth:3,url:`#debug-bool`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`Debug(): bool`})})}];function c(e){let t={a:`a`,code:`code`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,strong:`strong`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,ul:`ul`,...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Фасад библиотеки: init, Client, Cache, Requests discovery.`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Namespace:`}),` `,(0,n.jsx)(t.code,{children:`Devcraft\\Webshare\\Classes`})]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 1.0.0`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`См. также:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`Client`,children:`Client`})}),`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`../../guides/proxies`,children:`Гайд: proxies`})}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`public-константы`,children:`Public константы`}),`
`,(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`Константа`}),(0,n.jsx)(t.th,{children:`Тип`}),(0,n.jsx)(t.th,{children:`Описание`})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:`API_URL`})}),(0,n.jsx)(t.td,{children:`const`}),(0,n.jsxs)(t.td,{children:[`Значение: `,(0,n.jsx)(t.code,{children:`'https://proxy.webshare.io/api/'`}),`.`]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:`API_VERSION`})}),(0,n.jsx)(t.td,{children:`const`}),(0,n.jsxs)(t.td,{children:[`Значение: `,(0,n.jsx)(t.code,{children:`'v2'`}),`.`]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:`CACHE_LIFETIME`})}),(0,n.jsx)(t.td,{children:`const`}),(0,n.jsxs)(t.td,{children:[`Значение: `,(0,n.jsx)(t.code,{children:`3600`}),`.`]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:`ITERATE_MAX_PAGES`})}),(0,n.jsx)(t.td,{children:`const`}),(0,n.jsxs)(t.td,{children:[`Значение: `,(0,n.jsx)(t.code,{children:`100`}),`.`]})]})]})]}),`
`,(0,n.jsx)(t.h2,{id:`public-свойства`,children:`Public свойства`}),`
`,(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`Свойство`}),(0,n.jsx)(t.th,{children:`Тип`}),(0,n.jsx)(t.th,{children:`Описание`})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:`$debug`})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:`bool`})}),(0,n.jsxs)(t.td,{children:[`Вывод отладочной информации. По умолчанию: `,(0,n.jsx)(t.code,{children:`false`}),`.`]})]})})]}),`
`,(0,n.jsx)(t.h2,{id:`методы`,children:`Методы`}),`
`,(0,n.jsx)(t.h3,{id:`init-void`,children:(0,n.jsx)(t.code,{children:`init(): void`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Инициализация приложения с API ключом и env-конфигом.`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`Параметр`}),(0,n.jsx)(t.th,{children:`Тип`}),(0,n.jsx)(t.th,{children:`Описание`})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:`$apiKey`})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:`?string`})}),(0,n.jsxs)(t.td,{children:[`API ключ. Если не указан — из `,(0,n.jsx)(t.code,{children:`API_KEY`}),`. По умолчанию: `,(0,n.jsx)(t.code,{children:`NULL`}),`.`]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:`$force`})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:`bool`})}),(0,n.jsxs)(t.td,{children:[`Принудительная повторная инициализация. По умолчанию: `,(0,n.jsx)(t.code,{children:`false`}),`.`]})]})]})]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`void`})]}),`
`,(0,n.jsx)(t.h3,{id:`resetfortests-void`,children:(0,n.jsx)(t.code,{children:`resetForTests(): void`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Сброс singleton-состояния для PHPUnit. Не для production. `,(0,n.jsx)(t.strong,{children:`@internal`}),` — только для тестов.`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`void`})]}),`
`,(0,n.jsx)(t.h3,{id:`defineapikey-void`,children:(0,n.jsx)(t.code,{children:`defineApiKey(): void`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Переопределить API ключ без полного re-init.`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`Параметр`}),(0,n.jsx)(t.th,{children:`Тип`}),(0,n.jsx)(t.th,{children:`Описание`})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:`$apiKey`})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:`string`})}),(0,n.jsxs)(t.td,{children:[`API ключ. Если не указан — из `,(0,n.jsx)(t.code,{children:`API_KEY`}),`.`]})]})})]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`void`})]}),`
`,(0,n.jsx)(t.h3,{id:`cache-tagawarecacheinterface`,children:(0,n.jsx)(t.code,{children:`Cache(): TagAwareCacheInterface`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Tag-aware filesystem cache (Symfony Cache).`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`TagAwareCacheInterface`})]}),`
`,(0,n.jsx)(t.h3,{id:`client-client`,children:(0,n.jsx)(t.code,{children:`Client(): Client`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Общий HTTP-клиент.`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.a,{href:`Client`,children:`Client`})]}),`
`,(0,n.jsx)(t.h3,{id:`newclient-client`,children:(0,n.jsx)(t.code,{children:`newClient(): Client`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Создать отдельный Client (например, с другой API version).`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`Параметр`}),(0,n.jsx)(t.th,{children:`Тип`}),(0,n.jsx)(t.th,{children:`Описание`})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:`$url`})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:`?string`})}),(0,n.jsxs)(t.td,{children:[`Base URL API. По умолчанию: `,(0,n.jsx)(t.code,{children:`NULL`}),`.`]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:`$version`})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:`?string`})}),(0,n.jsxs)(t.td,{children:[`Версия API (`,(0,n.jsx)(t.code,{children:`v2`}),` / `,(0,n.jsx)(t.code,{children:`v3`}),`). По умолчанию: `,(0,n.jsx)(t.code,{children:`NULL`}),`.`]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:`$key`})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:`?string`})}),(0,n.jsxs)(t.td,{children:[`API ключ клиента или cache/download key — по контексту метода. По умолчанию: `,(0,n.jsx)(t.code,{children:`NULL`}),`.`]})]})]})]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.a,{href:`Client`,children:`Client`})]}),`
`,(0,n.jsx)(t.h3,{id:`requests-abstractrequest`,children:(0,n.jsx)(t.code,{children:`Requests(): AbstractRequest`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Discovery Request-класса по короткому ключу (`,(0,n.jsx)(t.code,{children:`Proxy`}),`, `,(0,n.jsx)(t.code,{children:`Profile`}),`, …).`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`Параметр`}),(0,n.jsx)(t.th,{children:`Тип`}),(0,n.jsx)(t.th,{children:`Описание`})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:`$requestType`})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:`string`})}),(0,n.jsxs)(t.td,{children:[`Короткий ключ Request (`,(0,n.jsx)(t.code,{children:`Proxy`}),`, `,(0,n.jsx)(t.code,{children:`Profile`}),`, …).`]})]})})]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.a,{href:`../abstracts/AbstractRequest`,children:`AbstractRequest`}),` | `,(0,n.jsx)(t.code,{children:`null`})]}),`
`,(0,n.jsx)(t.h3,{id:`cacheenabled-bool`,children:(0,n.jsx)(t.code,{children:`cacheEnabled(): bool`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Включён ли кэш GET-ответов.`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`bool`})]}),`
`,(0,n.jsx)(t.h3,{id:`cachelifetime-int`,children:(0,n.jsx)(t.code,{children:`cacheLifetime(): int`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` TTL кэша в секундах.`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`int`})]}),`
`,(0,n.jsx)(t.h3,{id:`iteratemaxpages-int`,children:(0,n.jsx)(t.code,{children:`iterateMaxPages(): int`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Лимит страниц для iterate().`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`int`})]}),`
`,(0,n.jsx)(t.h3,{id:`debug-bool`,children:(0,n.jsx)(t.code,{children:`Debug(): bool`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Флаг отладки.`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`bool`})]})]})}function l(e={}){let{wrapper:t}=e.components||{};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}export{a as _markdown,l as default,r as frontmatter,i as lastModified,o as structuredData,s as toc};