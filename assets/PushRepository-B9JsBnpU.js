import{r as e}from"./rolldown-runtime-QTnfLwEv.js";import{t}from"./jsx-runtime-By8HlURe.js";var n=e(t()),r={title:`PushRepository`,description:`Методы одного раздела API.`,version:`1.0.0`},i=new Date(1791275402e3),a=`

**Описание:** Методы одного раздела API.

**Namespace:** \`DevCraftClub\\MyShows\\Repository\`

**С версии:** 1.0.0

**См. также:**

* [AbstractRepository](AbstractRepository)
* [PushTokenResponse](../dto/PushTokenResponse)

## Методы [#методы]

### \`registerTokenIOS(string $token, ?string $idfa = null): PushTokenResponse\` [#registertokeniosstring-token-string-idfa--null-pushtokenresponse]

**Описание:** Вызов \`push.RegisterTokenIOS\`.

| Параметр | Тип       | Описание                |
| -------- | --------- | ----------------------- |
| \`$token\` | \`string\`  | —                       |
| \`$idfa\`  | \`?string\` | — По умолчанию: \`null\`. |

**Возвращает:** [PushTokenResponse](../dto/PushTokenResponse)

### \`registerTokenAndroid(string $token, ?string $gaid = null): PushTokenResponse\` [#registertokenandroidstring-token-string-gaid--null-pushtokenresponse]

**Описание:** Вызов \`push.RegisterTokenAndroid\`.

| Параметр | Тип       | Описание                |
| -------- | --------- | ----------------------- |
| \`$token\` | \`string\`  | —                       |
| \`$gaid\`  | \`?string\` | — По умолчанию: \`null\`. |

**Возвращает:** [PushTokenResponse](../dto/PushTokenResponse)

### \`registerTokenWeb(string $token): PushTokenResponse\` [#registertokenwebstring-token-pushtokenresponse]

**Описание:** Вызов \`push.RegisterTokenWeb\`.

| Параметр | Тип      | Описание |
| -------- | -------- | -------- |
| \`$token\` | \`string\` | —        |

**Возвращает:** [PushTokenResponse](../dto/PushTokenResponse)

### \`sendTestAndroid(string $pushType = 'achievement'): PushTokenResponse\` [#sendtestandroidstring-pushtype--achievement-pushtokenresponse]

**Описание:** Вызов \`push.SendTestAndroid\`.

| Параметр    | Тип      | Описание                         |
| ----------- | -------- | -------------------------------- |
| \`$pushType\` | \`string\` | — По умолчанию: \`'achievement'\`. |

**Возвращает:** [PushTokenResponse](../dto/PushTokenResponse)

### \`sendTestIOS(string $pushType = 'achievement'): PushTokenResponse\` [#sendtestiosstring-pushtype--achievement-pushtokenresponse]

**Описание:** Вызов \`push.SendTestIOS\`.

| Параметр    | Тип      | Описание                         |
| ----------- | -------- | -------------------------------- |
| \`$pushType\` | \`string\` | — По умолчанию: \`'achievement'\`. |

**Возвращает:** [PushTokenResponse](../dto/PushTokenResponse)
`,o={contents:[{heading:void 0,content:`**Описание:** Методы одного раздела API.`},{heading:void 0,content:"**Namespace:** `DevCraftClub\\MyShows\\Repository`"},{heading:void 0,content:`**С версии:** 1.0.0`},{heading:void 0,content:`**См. также:**`},{heading:void 0,content:`AbstractRepository`},{heading:void 0,content:`PushTokenResponse`},{heading:`registertokeniosstring-token-string-idfa--null-pushtokenresponse`,content:"**Описание:** Вызов `push.RegisterTokenIOS`."},{heading:`registertokeniosstring-token-string-idfa--null-pushtokenresponse`,content:`Параметр`},{heading:`registertokeniosstring-token-string-idfa--null-pushtokenresponse`,content:`Тип`},{heading:`registertokeniosstring-token-string-idfa--null-pushtokenresponse`,content:`Описание`},{heading:`registertokeniosstring-token-string-idfa--null-pushtokenresponse`,content:"`$token`"},{heading:`registertokeniosstring-token-string-idfa--null-pushtokenresponse`,content:"`string`"},{heading:`registertokeniosstring-token-string-idfa--null-pushtokenresponse`,content:`—`},{heading:`registertokeniosstring-token-string-idfa--null-pushtokenresponse`,content:"`$idfa`"},{heading:`registertokeniosstring-token-string-idfa--null-pushtokenresponse`,content:"`?string`"},{heading:`registertokeniosstring-token-string-idfa--null-pushtokenresponse`,content:"— По умолчанию: `null`."},{heading:`registertokeniosstring-token-string-idfa--null-pushtokenresponse`,content:`**Возвращает:** PushTokenResponse`},{heading:`registertokenandroidstring-token-string-gaid--null-pushtokenresponse`,content:"**Описание:** Вызов `push.RegisterTokenAndroid`."},{heading:`registertokenandroidstring-token-string-gaid--null-pushtokenresponse`,content:`Параметр`},{heading:`registertokenandroidstring-token-string-gaid--null-pushtokenresponse`,content:`Тип`},{heading:`registertokenandroidstring-token-string-gaid--null-pushtokenresponse`,content:`Описание`},{heading:`registertokenandroidstring-token-string-gaid--null-pushtokenresponse`,content:"`$token`"},{heading:`registertokenandroidstring-token-string-gaid--null-pushtokenresponse`,content:"`string`"},{heading:`registertokenandroidstring-token-string-gaid--null-pushtokenresponse`,content:`—`},{heading:`registertokenandroidstring-token-string-gaid--null-pushtokenresponse`,content:"`$gaid`"},{heading:`registertokenandroidstring-token-string-gaid--null-pushtokenresponse`,content:"`?string`"},{heading:`registertokenandroidstring-token-string-gaid--null-pushtokenresponse`,content:"— По умолчанию: `null`."},{heading:`registertokenandroidstring-token-string-gaid--null-pushtokenresponse`,content:`**Возвращает:** PushTokenResponse`},{heading:`registertokenwebstring-token-pushtokenresponse`,content:"**Описание:** Вызов `push.RegisterTokenWeb`."},{heading:`registertokenwebstring-token-pushtokenresponse`,content:`Параметр`},{heading:`registertokenwebstring-token-pushtokenresponse`,content:`Тип`},{heading:`registertokenwebstring-token-pushtokenresponse`,content:`Описание`},{heading:`registertokenwebstring-token-pushtokenresponse`,content:"`$token`"},{heading:`registertokenwebstring-token-pushtokenresponse`,content:"`string`"},{heading:`registertokenwebstring-token-pushtokenresponse`,content:`—`},{heading:`registertokenwebstring-token-pushtokenresponse`,content:`**Возвращает:** PushTokenResponse`},{heading:`sendtestandroidstring-pushtype--achievement-pushtokenresponse`,content:"**Описание:** Вызов `push.SendTestAndroid`."},{heading:`sendtestandroidstring-pushtype--achievement-pushtokenresponse`,content:`Параметр`},{heading:`sendtestandroidstring-pushtype--achievement-pushtokenresponse`,content:`Тип`},{heading:`sendtestandroidstring-pushtype--achievement-pushtokenresponse`,content:`Описание`},{heading:`sendtestandroidstring-pushtype--achievement-pushtokenresponse`,content:"`$pushType`"},{heading:`sendtestandroidstring-pushtype--achievement-pushtokenresponse`,content:"`string`"},{heading:`sendtestandroidstring-pushtype--achievement-pushtokenresponse`,content:"— По умолчанию: `'achievement'`."},{heading:`sendtestandroidstring-pushtype--achievement-pushtokenresponse`,content:`**Возвращает:** PushTokenResponse`},{heading:`sendtestiosstring-pushtype--achievement-pushtokenresponse`,content:"**Описание:** Вызов `push.SendTestIOS`."},{heading:`sendtestiosstring-pushtype--achievement-pushtokenresponse`,content:`Параметр`},{heading:`sendtestiosstring-pushtype--achievement-pushtokenresponse`,content:`Тип`},{heading:`sendtestiosstring-pushtype--achievement-pushtokenresponse`,content:`Описание`},{heading:`sendtestiosstring-pushtype--achievement-pushtokenresponse`,content:"`$pushType`"},{heading:`sendtestiosstring-pushtype--achievement-pushtokenresponse`,content:"`string`"},{heading:`sendtestiosstring-pushtype--achievement-pushtokenresponse`,content:"— По умолчанию: `'achievement'`."},{heading:`sendtestiosstring-pushtype--achievement-pushtokenresponse`,content:`**Возвращает:** PushTokenResponse`}],headings:[{id:`методы`,content:`Методы`},{id:`registertokeniosstring-token-string-idfa--null-pushtokenresponse`,content:"`registerTokenIOS(string $token, ?string $idfa = null): PushTokenResponse`"},{id:`registertokenandroidstring-token-string-gaid--null-pushtokenresponse`,content:"`registerTokenAndroid(string $token, ?string $gaid = null): PushTokenResponse`"},{id:`registertokenwebstring-token-pushtokenresponse`,content:"`registerTokenWeb(string $token): PushTokenResponse`"},{id:`sendtestandroidstring-pushtype--achievement-pushtokenresponse`,content:"`sendTestAndroid(string $pushType = 'achievement'): PushTokenResponse`"},{id:`sendtestiosstring-pushtype--achievement-pushtokenresponse`,content:"`sendTestIOS(string $pushType = 'achievement'): PushTokenResponse`"}]},s=[{depth:2,url:`#методы`,title:(0,n.jsx)(n.Fragment,{children:`Методы`})},{depth:3,url:`#registertokeniosstring-token-string-idfa--null-pushtokenresponse`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`registerTokenIOS(string $token, ?string $idfa = null): PushTokenResponse`})})},{depth:3,url:`#registertokenandroidstring-token-string-gaid--null-pushtokenresponse`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`registerTokenAndroid(string $token, ?string $gaid = null): PushTokenResponse`})})},{depth:3,url:`#registertokenwebstring-token-pushtokenresponse`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`registerTokenWeb(string $token): PushTokenResponse`})})},{depth:3,url:`#sendtestandroidstring-pushtype--achievement-pushtokenresponse`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`sendTestAndroid(string $pushType = 'achievement'): PushTokenResponse`})})},{depth:3,url:`#sendtestiosstring-pushtype--achievement-pushtokenresponse`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`sendTestIOS(string $pushType = 'achievement'): PushTokenResponse`})})}];function c(e){let t={a:`a`,code:`code`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,strong:`strong`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,ul:`ul`,...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Методы одного раздела API.`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Namespace:`}),` `,(0,n.jsx)(t.code,{children:`DevCraftClub\\MyShows\\Repository`})]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 1.0.0`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`См. также:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`AbstractRepository`,children:`AbstractRepository`})}),`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`../dto/PushTokenResponse`,children:`PushTokenResponse`})}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`методы`,children:`Методы`}),`
`,(0,n.jsx)(t.h3,{id:`registertokeniosstring-token-string-idfa--null-pushtokenresponse`,children:(0,n.jsx)(t.code,{children:`registerTokenIOS(string $token, ?string $idfa = null): PushTokenResponse`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Вызов `,(0,n.jsx)(t.code,{children:`push.RegisterTokenIOS`}),`.`]}),`
`,(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`Параметр`}),(0,n.jsx)(t.th,{children:`Тип`}),(0,n.jsx)(t.th,{children:`Описание`})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:`$token`})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:`string`})}),(0,n.jsx)(t.td,{children:`—`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:`$idfa`})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:`?string`})}),(0,n.jsxs)(t.td,{children:[`— По умолчанию: `,(0,n.jsx)(t.code,{children:`null`}),`.`]})]})]})]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.a,{href:`../dto/PushTokenResponse`,children:`PushTokenResponse`})]}),`
`,(0,n.jsx)(t.h3,{id:`registertokenandroidstring-token-string-gaid--null-pushtokenresponse`,children:(0,n.jsx)(t.code,{children:`registerTokenAndroid(string $token, ?string $gaid = null): PushTokenResponse`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Вызов `,(0,n.jsx)(t.code,{children:`push.RegisterTokenAndroid`}),`.`]}),`
`,(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`Параметр`}),(0,n.jsx)(t.th,{children:`Тип`}),(0,n.jsx)(t.th,{children:`Описание`})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:`$token`})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:`string`})}),(0,n.jsx)(t.td,{children:`—`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:`$gaid`})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:`?string`})}),(0,n.jsxs)(t.td,{children:[`— По умолчанию: `,(0,n.jsx)(t.code,{children:`null`}),`.`]})]})]})]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.a,{href:`../dto/PushTokenResponse`,children:`PushTokenResponse`})]}),`
`,(0,n.jsx)(t.h3,{id:`registertokenwebstring-token-pushtokenresponse`,children:(0,n.jsx)(t.code,{children:`registerTokenWeb(string $token): PushTokenResponse`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Вызов `,(0,n.jsx)(t.code,{children:`push.RegisterTokenWeb`}),`.`]}),`
`,(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`Параметр`}),(0,n.jsx)(t.th,{children:`Тип`}),(0,n.jsx)(t.th,{children:`Описание`})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:`$token`})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:`string`})}),(0,n.jsx)(t.td,{children:`—`})]})})]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.a,{href:`../dto/PushTokenResponse`,children:`PushTokenResponse`})]}),`
`,(0,n.jsx)(t.h3,{id:`sendtestandroidstring-pushtype--achievement-pushtokenresponse`,children:(0,n.jsx)(t.code,{children:`sendTestAndroid(string $pushType = 'achievement'): PushTokenResponse`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Вызов `,(0,n.jsx)(t.code,{children:`push.SendTestAndroid`}),`.`]}),`
`,(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`Параметр`}),(0,n.jsx)(t.th,{children:`Тип`}),(0,n.jsx)(t.th,{children:`Описание`})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:`$pushType`})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:`string`})}),(0,n.jsxs)(t.td,{children:[`— По умолчанию: `,(0,n.jsx)(t.code,{children:`'achievement'`}),`.`]})]})})]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.a,{href:`../dto/PushTokenResponse`,children:`PushTokenResponse`})]}),`
`,(0,n.jsx)(t.h3,{id:`sendtestiosstring-pushtype--achievement-pushtokenresponse`,children:(0,n.jsx)(t.code,{children:`sendTestIOS(string $pushType = 'achievement'): PushTokenResponse`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Вызов `,(0,n.jsx)(t.code,{children:`push.SendTestIOS`}),`.`]}),`
`,(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`Параметр`}),(0,n.jsx)(t.th,{children:`Тип`}),(0,n.jsx)(t.th,{children:`Описание`})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:`$pushType`})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:`string`})}),(0,n.jsxs)(t.td,{children:[`— По умолчанию: `,(0,n.jsx)(t.code,{children:`'achievement'`}),`.`]})]})})]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.a,{href:`../dto/PushTokenResponse`,children:`PushTokenResponse`})]})]})}function l(e={}){let{wrapper:t}=e.components||{};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}export{a as _markdown,l as default,r as frontmatter,i as lastModified,o as structuredData,s as toc};