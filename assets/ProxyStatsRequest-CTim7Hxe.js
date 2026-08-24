import{r as e}from"./rolldown-runtime-QTnfLwEv.js";import{t}from"./jsx-runtime-By8HlURe.js";var n=e(t()),r={title:`ProxyStatsRequest`,description:`ProxyStatsRequest`,version:`1.0.0`},i=new Date(1787223655e3),a=`

**Описание:** ProxyStatsRequest

**Namespace:** \`Devcraft\\Webshare\\Requests\`

**Extends:** [AbstractRequest](../abstracts/AbstractRequest)

**С версии:** 1.0.0

**См. также:**

* [AbstractRequest](../abstracts/AbstractRequest)

**Endpoint:** \`stats\`

**Query fields:**

* optional: \`plan_id\`, \`timestamp__lte\`, \`timestamp__gte\`, \`search\`, \`error_reason\`, \`bytes__gte\`, \`bytes__lte\`, \`verification_category\`, \`download_token\`

## Методы [#методы]

### \`__construct(): void\` [#__construct-void]

**Возвращает:** \`void\`

### \`list(): array\` [#list-array]

**Описание:** Hourly stats list (not paginated by the API).

**Возвращает:** \`array\`

### \`aggregate(): ProxyStat\` [#aggregate-proxystat]

**Возвращает:** [ProxyStat](../entities/ProxyStat)

### \`listActivities(): ProxyActivityList\` [#listactivities-proxyactivitylist]

**Возвращает:** [ProxyActivityList](../responses/ProxyActivityList)

### \`iterateActivities(): Generator\` [#iterateactivities-generator]

**Параметры:**

| Параметр    | Тип    | Описание                                                                            |
| ----------- | ------ | ----------------------------------------------------------------------------------- |
| \`$maxPages\` | \`?int\` | Лимит страниц iterate; по умолчанию \`App::iterateMaxPages()\`. По умолчанию: \`NULL\`. |

**Возвращает:** \`Generator\`

### \`downloadActivities(): string\` [#downloadactivities-string]

**Возвращает:** \`string\`
`,o={contents:[{heading:void 0,content:`**Описание:** ProxyStatsRequest`},{heading:void 0,content:"**Namespace:** `Devcraft\\Webshare\\Requests`"},{heading:void 0,content:`**Extends:** AbstractRequest`},{heading:void 0,content:`**С версии:** 1.0.0`},{heading:void 0,content:`**См. также:**`},{heading:void 0,content:`AbstractRequest`},{heading:void 0,content:"**Endpoint:** `stats`"},{heading:void 0,content:`**Query fields:**`},{heading:void 0,content:"optional: `plan_id`, `timestamp__lte`, `timestamp__gte`, `search`, `error_reason`, `bytes__gte`, `bytes__lte`, `verification_category`, `download_token`"},{heading:`__construct-void`,content:"**Возвращает:** `void`"},{heading:`list-array`,content:`**Описание:** Hourly stats list (not paginated by the API).`},{heading:`list-array`,content:"**Возвращает:** `array`"},{heading:`aggregate-proxystat`,content:`**Возвращает:** ProxyStat`},{heading:`listactivities-proxyactivitylist`,content:`**Возвращает:** ProxyActivityList`},{heading:`iterateactivities-generator`,content:`**Параметры:**`},{heading:`iterateactivities-generator`,content:`Параметр`},{heading:`iterateactivities-generator`,content:`Тип`},{heading:`iterateactivities-generator`,content:`Описание`},{heading:`iterateactivities-generator`,content:"`$maxPages`"},{heading:`iterateactivities-generator`,content:"`?int`"},{heading:`iterateactivities-generator`,content:"Лимит страниц iterate; по умолчанию `App::iterateMaxPages()`. По умолчанию: `NULL`."},{heading:`iterateactivities-generator`,content:"**Возвращает:** `Generator`"},{heading:`downloadactivities-string`,content:"**Возвращает:** `string`"}],headings:[{id:`методы`,content:`Методы`},{id:`__construct-void`,content:"`__construct(): void`"},{id:`list-array`,content:"`list(): array`"},{id:`aggregate-proxystat`,content:"`aggregate(): ProxyStat`"},{id:`listactivities-proxyactivitylist`,content:"`listActivities(): ProxyActivityList`"},{id:`iterateactivities-generator`,content:"`iterateActivities(): Generator`"},{id:`downloadactivities-string`,content:"`downloadActivities(): string`"}]},s=[{depth:2,url:`#методы`,title:(0,n.jsx)(n.Fragment,{children:`Методы`})},{depth:3,url:`#__construct-void`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`__construct(): void`})})},{depth:3,url:`#list-array`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`list(): array`})})},{depth:3,url:`#aggregate-proxystat`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`aggregate(): ProxyStat`})})},{depth:3,url:`#listactivities-proxyactivitylist`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`listActivities(): ProxyActivityList`})})},{depth:3,url:`#iterateactivities-generator`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`iterateActivities(): Generator`})})},{depth:3,url:`#downloadactivities-string`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`downloadActivities(): string`})})}];function c(e){let t={a:`a`,code:`code`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,strong:`strong`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,ul:`ul`,...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` ProxyStatsRequest`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Namespace:`}),` `,(0,n.jsx)(t.code,{children:`Devcraft\\Webshare\\Requests`})]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Extends:`}),` `,(0,n.jsx)(t.a,{href:`../abstracts/AbstractRequest`,children:`AbstractRequest`})]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 1.0.0`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`См. также:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`../abstracts/AbstractRequest`,children:`AbstractRequest`})}),`
`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Endpoint:`}),` `,(0,n.jsx)(t.code,{children:`stats`})]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Query fields:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[`optional: `,(0,n.jsx)(t.code,{children:`plan_id`}),`, `,(0,n.jsx)(t.code,{children:`timestamp__lte`}),`, `,(0,n.jsx)(t.code,{children:`timestamp__gte`}),`, `,(0,n.jsx)(t.code,{children:`search`}),`, `,(0,n.jsx)(t.code,{children:`error_reason`}),`, `,(0,n.jsx)(t.code,{children:`bytes__gte`}),`, `,(0,n.jsx)(t.code,{children:`bytes__lte`}),`, `,(0,n.jsx)(t.code,{children:`verification_category`}),`, `,(0,n.jsx)(t.code,{children:`download_token`})]}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`методы`,children:`Методы`}),`
`,(0,n.jsx)(t.h3,{id:`__construct-void`,children:(0,n.jsx)(t.code,{children:`__construct(): void`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`void`})]}),`
`,(0,n.jsx)(t.h3,{id:`list-array`,children:(0,n.jsx)(t.code,{children:`list(): array`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Hourly stats list (not paginated by the API).`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`array`})]}),`
`,(0,n.jsx)(t.h3,{id:`aggregate-proxystat`,children:(0,n.jsx)(t.code,{children:`aggregate(): ProxyStat`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.a,{href:`../entities/ProxyStat`,children:`ProxyStat`})]}),`
`,(0,n.jsx)(t.h3,{id:`listactivities-proxyactivitylist`,children:(0,n.jsx)(t.code,{children:`listActivities(): ProxyActivityList`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.a,{href:`../responses/ProxyActivityList`,children:`ProxyActivityList`})]}),`
`,(0,n.jsx)(t.h3,{id:`iterateactivities-generator`,children:(0,n.jsx)(t.code,{children:`iterateActivities(): Generator`})}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`Параметр`}),(0,n.jsx)(t.th,{children:`Тип`}),(0,n.jsx)(t.th,{children:`Описание`})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:`$maxPages`})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:`?int`})}),(0,n.jsxs)(t.td,{children:[`Лимит страниц iterate; по умолчанию `,(0,n.jsx)(t.code,{children:`App::iterateMaxPages()`}),`. По умолчанию: `,(0,n.jsx)(t.code,{children:`NULL`}),`.`]})]})})]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`Generator`})]}),`
`,(0,n.jsx)(t.h3,{id:`downloadactivities-string`,children:(0,n.jsx)(t.code,{children:`downloadActivities(): string`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`string`})]})]})}function l(e={}){let{wrapper:t}=e.components||{};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}export{a as _markdown,l as default,r as frontmatter,i as lastModified,o as structuredData,s as toc};