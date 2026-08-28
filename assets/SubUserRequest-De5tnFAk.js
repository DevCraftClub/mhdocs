import{r as e}from"./rolldown-runtime-QTnfLwEv.js";import{t}from"./jsx-runtime-By8HlURe.js";var n=e(t()),r={title:`SubUserRequest`,description:`SubUserRequest`,version:`1.0.0`},i=new Date(1787834766e3),a=`

**Описание:** SubUserRequest

**Namespace:** \`Devcraft\\Webshare\\Requests\`

**Extends:** [AbstractRequest](../abstracts/AbstractRequest)

**С версии:** 1.0.0

**См. также:**

* [AbstractRequest](../abstracts/AbstractRequest)
* [Client](../classes/Client)
* [Гайд: subusers](../../guides/subusers)

**Endpoint:** \`subuser\`

**Query fields:**

* optional: \`plan_id\`, \`ordering\`, \`label\`

## Методы [#методы]

### \`__construct(): void\` [#__construct-void]

**Возвращает:** \`void\`

### \`list(): SubUserList\` [#list-subuserlist]

**Возвращает:** [SubUserList](../responses/SubUserList)

### \`iterate(): Generator\` [#iterate-generator]

**Параметры:**

| Параметр    | Тип    | Описание                                                                            |
| ----------- | ------ | ----------------------------------------------------------------------------------- |
| \`$maxPages\` | \`?int\` | Лимит страниц iterate; по умолчанию \`App::iterateMaxPages()\`. По умолчанию: \`NULL\`. |

**Возвращает:** \`Generator\`

### \`retrieve(): SubUser\` [#retrieve-subuser]

**Параметры:**

| Параметр | Тип   | Описание               |
| -------- | ----- | ---------------------- |
| \`$id\`    | \`int\` | Идентификатор ресурса. |

**Возвращает:** [SubUser](../entities/SubUser)

### \`create(): SubUser\` [#create-subuser]

**Параметры:**

| Параметр          | Тип      | Описание                             |
| ----------------- | -------- | ------------------------------------ |
| \`$label\`          | \`string\` | Метка.                               |
| \`$proxyLimit\`     | \`?float\` | Лимит прокси. По умолчанию: \`NULL\`.  |
| \`$maxThreadCount\` | \`?int\`   | Лимит потоков. По умолчанию: \`NULL\`. |

**Возвращает:** [SubUser](../entities/SubUser)

### \`update(): SubUser\` [#update-subuser]

**Параметры:**

| Параметр  | Тип     | Описание                         |
| --------- | ------- | -------------------------------- |
| \`$id\`     | \`int\`   | Идентификатор ресурса.           |
| \`$fields\` | \`array\` | Поля ordering или списки fields. |

**Возвращает:** [SubUser](../entities/SubUser)

### \`delete(): void\` [#delete-void]

**Параметры:**

| Параметр | Тип   | Описание               |
| -------- | ----- | ---------------------- |
| \`$id\`    | \`int\` | Идентификатор ресурса. |

**Возвращает:** \`void\`

### \`refreshProxyList(): SubUser\` [#refreshproxylist-subuser]

**Параметры:**

| Параметр | Тип   | Описание               |
| -------- | ----- | ---------------------- |
| \`$id\`    | \`int\` | Идентификатор ресурса. |

**Возвращает:** [SubUser](../entities/SubUser)

### \`masqueradeAs(): void\` [#masqueradeas-void]

**Описание:** Masquerade subsequent App::Client() calls as this sub-user (X-Subuser header).

**Параметры:**

| Параметр     | Тип                         | Описание                            |
| ------------ | --------------------------- | ----------------------------------- |
| \`$subuserId\` | \`int\` \\| \`string\` \\| \`null\` | ID SubUser для заголовка X-Subuser. |

**Возвращает:** \`void\`
`,o={contents:[{heading:void 0,content:`**Описание:** SubUserRequest`},{heading:void 0,content:"**Namespace:** `Devcraft\\Webshare\\Requests`"},{heading:void 0,content:`**Extends:** AbstractRequest`},{heading:void 0,content:`**С версии:** 1.0.0`},{heading:void 0,content:`**См. также:**`},{heading:void 0,content:`AbstractRequest`},{heading:void 0,content:`Client`},{heading:void 0,content:`Гайд: subusers`},{heading:void 0,content:"**Endpoint:** `subuser`"},{heading:void 0,content:`**Query fields:**`},{heading:void 0,content:"optional: `plan_id`, `ordering`, `label`"},{heading:`__construct-void`,content:"**Возвращает:** `void`"},{heading:`list-subuserlist`,content:`**Возвращает:** SubUserList`},{heading:`iterate-generator`,content:`**Параметры:**`},{heading:`iterate-generator`,content:`Параметр`},{heading:`iterate-generator`,content:`Тип`},{heading:`iterate-generator`,content:`Описание`},{heading:`iterate-generator`,content:"`$maxPages`"},{heading:`iterate-generator`,content:"`?int`"},{heading:`iterate-generator`,content:"Лимит страниц iterate; по умолчанию `App::iterateMaxPages()`. По умолчанию: `NULL`."},{heading:`iterate-generator`,content:"**Возвращает:** `Generator`"},{heading:`retrieve-subuser`,content:`**Параметры:**`},{heading:`retrieve-subuser`,content:`Параметр`},{heading:`retrieve-subuser`,content:`Тип`},{heading:`retrieve-subuser`,content:`Описание`},{heading:`retrieve-subuser`,content:"`$id`"},{heading:`retrieve-subuser`,content:"`int`"},{heading:`retrieve-subuser`,content:`Идентификатор ресурса.`},{heading:`retrieve-subuser`,content:`**Возвращает:** SubUser`},{heading:`create-subuser`,content:`**Параметры:**`},{heading:`create-subuser`,content:`Параметр`},{heading:`create-subuser`,content:`Тип`},{heading:`create-subuser`,content:`Описание`},{heading:`create-subuser`,content:"`$label`"},{heading:`create-subuser`,content:"`string`"},{heading:`create-subuser`,content:`Метка.`},{heading:`create-subuser`,content:"`$proxyLimit`"},{heading:`create-subuser`,content:"`?float`"},{heading:`create-subuser`,content:"Лимит прокси. По умолчанию: `NULL`."},{heading:`create-subuser`,content:"`$maxThreadCount`"},{heading:`create-subuser`,content:"`?int`"},{heading:`create-subuser`,content:"Лимит потоков. По умолчанию: `NULL`."},{heading:`create-subuser`,content:`**Возвращает:** SubUser`},{heading:`update-subuser`,content:`**Параметры:**`},{heading:`update-subuser`,content:`Параметр`},{heading:`update-subuser`,content:`Тип`},{heading:`update-subuser`,content:`Описание`},{heading:`update-subuser`,content:"`$id`"},{heading:`update-subuser`,content:"`int`"},{heading:`update-subuser`,content:`Идентификатор ресурса.`},{heading:`update-subuser`,content:"`$fields`"},{heading:`update-subuser`,content:"`array`"},{heading:`update-subuser`,content:`Поля ordering или списки fields.`},{heading:`update-subuser`,content:`**Возвращает:** SubUser`},{heading:`delete-void`,content:`**Параметры:**`},{heading:`delete-void`,content:`Параметр`},{heading:`delete-void`,content:`Тип`},{heading:`delete-void`,content:`Описание`},{heading:`delete-void`,content:"`$id`"},{heading:`delete-void`,content:"`int`"},{heading:`delete-void`,content:`Идентификатор ресурса.`},{heading:`delete-void`,content:"**Возвращает:** `void`"},{heading:`refreshproxylist-subuser`,content:`**Параметры:**`},{heading:`refreshproxylist-subuser`,content:`Параметр`},{heading:`refreshproxylist-subuser`,content:`Тип`},{heading:`refreshproxylist-subuser`,content:`Описание`},{heading:`refreshproxylist-subuser`,content:"`$id`"},{heading:`refreshproxylist-subuser`,content:"`int`"},{heading:`refreshproxylist-subuser`,content:`Идентификатор ресурса.`},{heading:`refreshproxylist-subuser`,content:`**Возвращает:** SubUser`},{heading:`masqueradeas-void`,content:`**Описание:** Masquerade subsequent App::Client() calls as this sub-user (X-Subuser header).`},{heading:`masqueradeas-void`,content:`**Параметры:**`},{heading:`masqueradeas-void`,content:`Параметр`},{heading:`masqueradeas-void`,content:`Тип`},{heading:`masqueradeas-void`,content:`Описание`},{heading:`masqueradeas-void`,content:"`$subuserId`"},{heading:`masqueradeas-void`,content:"`int` \\| `string` \\| `null`"},{heading:`masqueradeas-void`,content:`ID SubUser для заголовка X-Subuser.`},{heading:`masqueradeas-void`,content:"**Возвращает:** `void`"}],headings:[{id:`методы`,content:`Методы`},{id:`__construct-void`,content:"`__construct(): void`"},{id:`list-subuserlist`,content:"`list(): SubUserList`"},{id:`iterate-generator`,content:"`iterate(): Generator`"},{id:`retrieve-subuser`,content:"`retrieve(): SubUser`"},{id:`create-subuser`,content:"`create(): SubUser`"},{id:`update-subuser`,content:"`update(): SubUser`"},{id:`delete-void`,content:"`delete(): void`"},{id:`refreshproxylist-subuser`,content:"`refreshProxyList(): SubUser`"},{id:`masqueradeas-void`,content:"`masqueradeAs(): void`"}]},s=[{depth:2,url:`#методы`,title:(0,n.jsx)(n.Fragment,{children:`Методы`})},{depth:3,url:`#__construct-void`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`__construct(): void`})})},{depth:3,url:`#list-subuserlist`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`list(): SubUserList`})})},{depth:3,url:`#iterate-generator`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`iterate(): Generator`})})},{depth:3,url:`#retrieve-subuser`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`retrieve(): SubUser`})})},{depth:3,url:`#create-subuser`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`create(): SubUser`})})},{depth:3,url:`#update-subuser`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`update(): SubUser`})})},{depth:3,url:`#delete-void`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`delete(): void`})})},{depth:3,url:`#refreshproxylist-subuser`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`refreshProxyList(): SubUser`})})},{depth:3,url:`#masqueradeas-void`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`masqueradeAs(): void`})})}];function c(e){let t={a:`a`,code:`code`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,strong:`strong`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,ul:`ul`,...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` SubUserRequest`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Namespace:`}),` `,(0,n.jsx)(t.code,{children:`Devcraft\\Webshare\\Requests`})]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Extends:`}),` `,(0,n.jsx)(t.a,{href:`../abstracts/AbstractRequest`,children:`AbstractRequest`})]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 1.0.0`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`См. также:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`../abstracts/AbstractRequest`,children:`AbstractRequest`})}),`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`../classes/Client`,children:`Client`})}),`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`../../guides/subusers`,children:`Гайд: subusers`})}),`
`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Endpoint:`}),` `,(0,n.jsx)(t.code,{children:`subuser`})]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Query fields:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[`optional: `,(0,n.jsx)(t.code,{children:`plan_id`}),`, `,(0,n.jsx)(t.code,{children:`ordering`}),`, `,(0,n.jsx)(t.code,{children:`label`})]}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`методы`,children:`Методы`}),`
`,(0,n.jsx)(t.h3,{id:`__construct-void`,children:(0,n.jsx)(t.code,{children:`__construct(): void`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`void`})]}),`
`,(0,n.jsx)(t.h3,{id:`list-subuserlist`,children:(0,n.jsx)(t.code,{children:`list(): SubUserList`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.a,{href:`../responses/SubUserList`,children:`SubUserList`})]}),`
`,(0,n.jsx)(t.h3,{id:`iterate-generator`,children:(0,n.jsx)(t.code,{children:`iterate(): Generator`})}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`Параметр`}),(0,n.jsx)(t.th,{children:`Тип`}),(0,n.jsx)(t.th,{children:`Описание`})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:`$maxPages`})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:`?int`})}),(0,n.jsxs)(t.td,{children:[`Лимит страниц iterate; по умолчанию `,(0,n.jsx)(t.code,{children:`App::iterateMaxPages()`}),`. По умолчанию: `,(0,n.jsx)(t.code,{children:`NULL`}),`.`]})]})})]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`Generator`})]}),`
`,(0,n.jsx)(t.h3,{id:`retrieve-subuser`,children:(0,n.jsx)(t.code,{children:`retrieve(): SubUser`})}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`Параметр`}),(0,n.jsx)(t.th,{children:`Тип`}),(0,n.jsx)(t.th,{children:`Описание`})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:`$id`})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:`int`})}),(0,n.jsx)(t.td,{children:`Идентификатор ресурса.`})]})})]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.a,{href:`../entities/SubUser`,children:`SubUser`})]}),`
`,(0,n.jsx)(t.h3,{id:`create-subuser`,children:(0,n.jsx)(t.code,{children:`create(): SubUser`})}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`Параметр`}),(0,n.jsx)(t.th,{children:`Тип`}),(0,n.jsx)(t.th,{children:`Описание`})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:`$label`})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:`string`})}),(0,n.jsx)(t.td,{children:`Метка.`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:`$proxyLimit`})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:`?float`})}),(0,n.jsxs)(t.td,{children:[`Лимит прокси. По умолчанию: `,(0,n.jsx)(t.code,{children:`NULL`}),`.`]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:`$maxThreadCount`})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:`?int`})}),(0,n.jsxs)(t.td,{children:[`Лимит потоков. По умолчанию: `,(0,n.jsx)(t.code,{children:`NULL`}),`.`]})]})]})]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.a,{href:`../entities/SubUser`,children:`SubUser`})]}),`
`,(0,n.jsx)(t.h3,{id:`update-subuser`,children:(0,n.jsx)(t.code,{children:`update(): SubUser`})}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`Параметр`}),(0,n.jsx)(t.th,{children:`Тип`}),(0,n.jsx)(t.th,{children:`Описание`})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:`$id`})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:`int`})}),(0,n.jsx)(t.td,{children:`Идентификатор ресурса.`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:`$fields`})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:`array`})}),(0,n.jsx)(t.td,{children:`Поля ordering или списки fields.`})]})]})]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.a,{href:`../entities/SubUser`,children:`SubUser`})]}),`
`,(0,n.jsx)(t.h3,{id:`delete-void`,children:(0,n.jsx)(t.code,{children:`delete(): void`})}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`Параметр`}),(0,n.jsx)(t.th,{children:`Тип`}),(0,n.jsx)(t.th,{children:`Описание`})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:`$id`})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:`int`})}),(0,n.jsx)(t.td,{children:`Идентификатор ресурса.`})]})})]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`void`})]}),`
`,(0,n.jsx)(t.h3,{id:`refreshproxylist-subuser`,children:(0,n.jsx)(t.code,{children:`refreshProxyList(): SubUser`})}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`Параметр`}),(0,n.jsx)(t.th,{children:`Тип`}),(0,n.jsx)(t.th,{children:`Описание`})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:`$id`})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:`int`})}),(0,n.jsx)(t.td,{children:`Идентификатор ресурса.`})]})})]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.a,{href:`../entities/SubUser`,children:`SubUser`})]}),`
`,(0,n.jsx)(t.h3,{id:`masqueradeas-void`,children:(0,n.jsx)(t.code,{children:`masqueradeAs(): void`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Masquerade subsequent App::Client() calls as this sub-user (X-Subuser header).`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`Параметр`}),(0,n.jsx)(t.th,{children:`Тип`}),(0,n.jsx)(t.th,{children:`Описание`})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:`$subuserId`})}),(0,n.jsxs)(t.td,{children:[(0,n.jsx)(t.code,{children:`int`}),` | `,(0,n.jsx)(t.code,{children:`string`}),` | `,(0,n.jsx)(t.code,{children:`null`})]}),(0,n.jsx)(t.td,{children:`ID SubUser для заголовка X-Subuser.`})]})})]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`void`})]})]})}function l(e={}){let{wrapper:t}=e.components||{};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}export{a as _markdown,l as default,r as frontmatter,i as lastModified,o as structuredData,s as toc};