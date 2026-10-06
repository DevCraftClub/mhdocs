import{r as e}from"./rolldown-runtime-QTnfLwEv.js";import{t}from"./jsx-runtime-By8HlURe.js";var n=e(t()),r={title:`PushRepository`,description:`Methods for one API section.`,version:`1.0.0`},i=new Date(1791275402e3),a=`

**Description:** Methods for one API section.

**Namespace:** \`DevCraftClub\\MyShows\\Repository\`

**Since:** 1.0.0

**See also:**

* [AbstractRepository](AbstractRepository)
* [PushTokenResponse](../dto/PushTokenResponse)

## Methods [#methods]

### \`registerTokenIOS(string $token, ?string $idfa = null): PushTokenResponse\` [#registertokeniosstring-token-string-idfa--null-pushtokenresponse]

**Description:** Calls \`push.RegisterTokenIOS\`.

| Parameter | Type      | Description        |
| --------- | --------- | ------------------ |
| \`$token\`  | \`string\`  | —                  |
| \`$idfa\`   | \`?string\` | — Default: \`null\`. |

**Returns:** [PushTokenResponse](../dto/PushTokenResponse)

### \`registerTokenAndroid(string $token, ?string $gaid = null): PushTokenResponse\` [#registertokenandroidstring-token-string-gaid--null-pushtokenresponse]

**Description:** Calls \`push.RegisterTokenAndroid\`.

| Parameter | Type      | Description        |
| --------- | --------- | ------------------ |
| \`$token\`  | \`string\`  | —                  |
| \`$gaid\`   | \`?string\` | — Default: \`null\`. |

**Returns:** [PushTokenResponse](../dto/PushTokenResponse)

### \`registerTokenWeb(string $token): PushTokenResponse\` [#registertokenwebstring-token-pushtokenresponse]

**Description:** Calls \`push.RegisterTokenWeb\`.

| Parameter | Type     | Description |
| --------- | -------- | ----------- |
| \`$token\`  | \`string\` | —           |

**Returns:** [PushTokenResponse](../dto/PushTokenResponse)

### \`sendTestAndroid(string $pushType = 'achievement'): PushTokenResponse\` [#sendtestandroidstring-pushtype--achievement-pushtokenresponse]

**Description:** Calls \`push.SendTestAndroid\`.

| Parameter   | Type     | Description                 |
| ----------- | -------- | --------------------------- |
| \`$pushType\` | \`string\` | — Default: \`'achievement'\`. |

**Returns:** [PushTokenResponse](../dto/PushTokenResponse)

### \`sendTestIOS(string $pushType = 'achievement'): PushTokenResponse\` [#sendtestiosstring-pushtype--achievement-pushtokenresponse]

**Description:** Calls \`push.SendTestIOS\`.

| Parameter   | Type     | Description                 |
| ----------- | -------- | --------------------------- |
| \`$pushType\` | \`string\` | — Default: \`'achievement'\`. |

**Returns:** [PushTokenResponse](../dto/PushTokenResponse)
`,o={contents:[{heading:void 0,content:`**Description:** Methods for one API section.`},{heading:void 0,content:"**Namespace:** `DevCraftClub\\MyShows\\Repository`"},{heading:void 0,content:`**Since:** 1.0.0`},{heading:void 0,content:`**See also:**`},{heading:void 0,content:`AbstractRepository`},{heading:void 0,content:`PushTokenResponse`},{heading:`registertokeniosstring-token-string-idfa--null-pushtokenresponse`,content:"**Description:** Calls `push.RegisterTokenIOS`."},{heading:`registertokeniosstring-token-string-idfa--null-pushtokenresponse`,content:`Parameter`},{heading:`registertokeniosstring-token-string-idfa--null-pushtokenresponse`,content:`Type`},{heading:`registertokeniosstring-token-string-idfa--null-pushtokenresponse`,content:`Description`},{heading:`registertokeniosstring-token-string-idfa--null-pushtokenresponse`,content:"`$token`"},{heading:`registertokeniosstring-token-string-idfa--null-pushtokenresponse`,content:"`string`"},{heading:`registertokeniosstring-token-string-idfa--null-pushtokenresponse`,content:`—`},{heading:`registertokeniosstring-token-string-idfa--null-pushtokenresponse`,content:"`$idfa`"},{heading:`registertokeniosstring-token-string-idfa--null-pushtokenresponse`,content:"`?string`"},{heading:`registertokeniosstring-token-string-idfa--null-pushtokenresponse`,content:"— Default: `null`."},{heading:`registertokeniosstring-token-string-idfa--null-pushtokenresponse`,content:`**Returns:** PushTokenResponse`},{heading:`registertokenandroidstring-token-string-gaid--null-pushtokenresponse`,content:"**Description:** Calls `push.RegisterTokenAndroid`."},{heading:`registertokenandroidstring-token-string-gaid--null-pushtokenresponse`,content:`Parameter`},{heading:`registertokenandroidstring-token-string-gaid--null-pushtokenresponse`,content:`Type`},{heading:`registertokenandroidstring-token-string-gaid--null-pushtokenresponse`,content:`Description`},{heading:`registertokenandroidstring-token-string-gaid--null-pushtokenresponse`,content:"`$token`"},{heading:`registertokenandroidstring-token-string-gaid--null-pushtokenresponse`,content:"`string`"},{heading:`registertokenandroidstring-token-string-gaid--null-pushtokenresponse`,content:`—`},{heading:`registertokenandroidstring-token-string-gaid--null-pushtokenresponse`,content:"`$gaid`"},{heading:`registertokenandroidstring-token-string-gaid--null-pushtokenresponse`,content:"`?string`"},{heading:`registertokenandroidstring-token-string-gaid--null-pushtokenresponse`,content:"— Default: `null`."},{heading:`registertokenandroidstring-token-string-gaid--null-pushtokenresponse`,content:`**Returns:** PushTokenResponse`},{heading:`registertokenwebstring-token-pushtokenresponse`,content:"**Description:** Calls `push.RegisterTokenWeb`."},{heading:`registertokenwebstring-token-pushtokenresponse`,content:`Parameter`},{heading:`registertokenwebstring-token-pushtokenresponse`,content:`Type`},{heading:`registertokenwebstring-token-pushtokenresponse`,content:`Description`},{heading:`registertokenwebstring-token-pushtokenresponse`,content:"`$token`"},{heading:`registertokenwebstring-token-pushtokenresponse`,content:"`string`"},{heading:`registertokenwebstring-token-pushtokenresponse`,content:`—`},{heading:`registertokenwebstring-token-pushtokenresponse`,content:`**Returns:** PushTokenResponse`},{heading:`sendtestandroidstring-pushtype--achievement-pushtokenresponse`,content:"**Description:** Calls `push.SendTestAndroid`."},{heading:`sendtestandroidstring-pushtype--achievement-pushtokenresponse`,content:`Parameter`},{heading:`sendtestandroidstring-pushtype--achievement-pushtokenresponse`,content:`Type`},{heading:`sendtestandroidstring-pushtype--achievement-pushtokenresponse`,content:`Description`},{heading:`sendtestandroidstring-pushtype--achievement-pushtokenresponse`,content:"`$pushType`"},{heading:`sendtestandroidstring-pushtype--achievement-pushtokenresponse`,content:"`string`"},{heading:`sendtestandroidstring-pushtype--achievement-pushtokenresponse`,content:"— Default: `'achievement'`."},{heading:`sendtestandroidstring-pushtype--achievement-pushtokenresponse`,content:`**Returns:** PushTokenResponse`},{heading:`sendtestiosstring-pushtype--achievement-pushtokenresponse`,content:"**Description:** Calls `push.SendTestIOS`."},{heading:`sendtestiosstring-pushtype--achievement-pushtokenresponse`,content:`Parameter`},{heading:`sendtestiosstring-pushtype--achievement-pushtokenresponse`,content:`Type`},{heading:`sendtestiosstring-pushtype--achievement-pushtokenresponse`,content:`Description`},{heading:`sendtestiosstring-pushtype--achievement-pushtokenresponse`,content:"`$pushType`"},{heading:`sendtestiosstring-pushtype--achievement-pushtokenresponse`,content:"`string`"},{heading:`sendtestiosstring-pushtype--achievement-pushtokenresponse`,content:"— Default: `'achievement'`."},{heading:`sendtestiosstring-pushtype--achievement-pushtokenresponse`,content:`**Returns:** PushTokenResponse`}],headings:[{id:`methods`,content:`Methods`},{id:`registertokeniosstring-token-string-idfa--null-pushtokenresponse`,content:"`registerTokenIOS(string $token, ?string $idfa = null): PushTokenResponse`"},{id:`registertokenandroidstring-token-string-gaid--null-pushtokenresponse`,content:"`registerTokenAndroid(string $token, ?string $gaid = null): PushTokenResponse`"},{id:`registertokenwebstring-token-pushtokenresponse`,content:"`registerTokenWeb(string $token): PushTokenResponse`"},{id:`sendtestandroidstring-pushtype--achievement-pushtokenresponse`,content:"`sendTestAndroid(string $pushType = 'achievement'): PushTokenResponse`"},{id:`sendtestiosstring-pushtype--achievement-pushtokenresponse`,content:"`sendTestIOS(string $pushType = 'achievement'): PushTokenResponse`"}]},s=[{depth:2,url:`#methods`,title:(0,n.jsx)(n.Fragment,{children:`Methods`})},{depth:3,url:`#registertokeniosstring-token-string-idfa--null-pushtokenresponse`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`registerTokenIOS(string $token, ?string $idfa = null): PushTokenResponse`})})},{depth:3,url:`#registertokenandroidstring-token-string-gaid--null-pushtokenresponse`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`registerTokenAndroid(string $token, ?string $gaid = null): PushTokenResponse`})})},{depth:3,url:`#registertokenwebstring-token-pushtokenresponse`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`registerTokenWeb(string $token): PushTokenResponse`})})},{depth:3,url:`#sendtestandroidstring-pushtype--achievement-pushtokenresponse`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`sendTestAndroid(string $pushType = 'achievement'): PushTokenResponse`})})},{depth:3,url:`#sendtestiosstring-pushtype--achievement-pushtokenresponse`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`sendTestIOS(string $pushType = 'achievement'): PushTokenResponse`})})}];function c(e){let t={a:`a`,code:`code`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,strong:`strong`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,ul:`ul`,...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Description:`}),` Methods for one API section.`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Namespace:`}),` `,(0,n.jsx)(t.code,{children:`DevCraftClub\\MyShows\\Repository`})]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Since:`}),` 1.0.0`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`See also:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`AbstractRepository`,children:`AbstractRepository`})}),`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`../dto/PushTokenResponse`,children:`PushTokenResponse`})}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`methods`,children:`Methods`}),`
`,(0,n.jsx)(t.h3,{id:`registertokeniosstring-token-string-idfa--null-pushtokenresponse`,children:(0,n.jsx)(t.code,{children:`registerTokenIOS(string $token, ?string $idfa = null): PushTokenResponse`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Description:`}),` Calls `,(0,n.jsx)(t.code,{children:`push.RegisterTokenIOS`}),`.`]}),`
`,(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`Parameter`}),(0,n.jsx)(t.th,{children:`Type`}),(0,n.jsx)(t.th,{children:`Description`})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:`$token`})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:`string`})}),(0,n.jsx)(t.td,{children:`—`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:`$idfa`})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:`?string`})}),(0,n.jsxs)(t.td,{children:[`— Default: `,(0,n.jsx)(t.code,{children:`null`}),`.`]})]})]})]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Returns:`}),` `,(0,n.jsx)(t.a,{href:`../dto/PushTokenResponse`,children:`PushTokenResponse`})]}),`
`,(0,n.jsx)(t.h3,{id:`registertokenandroidstring-token-string-gaid--null-pushtokenresponse`,children:(0,n.jsx)(t.code,{children:`registerTokenAndroid(string $token, ?string $gaid = null): PushTokenResponse`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Description:`}),` Calls `,(0,n.jsx)(t.code,{children:`push.RegisterTokenAndroid`}),`.`]}),`
`,(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`Parameter`}),(0,n.jsx)(t.th,{children:`Type`}),(0,n.jsx)(t.th,{children:`Description`})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:`$token`})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:`string`})}),(0,n.jsx)(t.td,{children:`—`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:`$gaid`})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:`?string`})}),(0,n.jsxs)(t.td,{children:[`— Default: `,(0,n.jsx)(t.code,{children:`null`}),`.`]})]})]})]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Returns:`}),` `,(0,n.jsx)(t.a,{href:`../dto/PushTokenResponse`,children:`PushTokenResponse`})]}),`
`,(0,n.jsx)(t.h3,{id:`registertokenwebstring-token-pushtokenresponse`,children:(0,n.jsx)(t.code,{children:`registerTokenWeb(string $token): PushTokenResponse`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Description:`}),` Calls `,(0,n.jsx)(t.code,{children:`push.RegisterTokenWeb`}),`.`]}),`
`,(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`Parameter`}),(0,n.jsx)(t.th,{children:`Type`}),(0,n.jsx)(t.th,{children:`Description`})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:`$token`})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:`string`})}),(0,n.jsx)(t.td,{children:`—`})]})})]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Returns:`}),` `,(0,n.jsx)(t.a,{href:`../dto/PushTokenResponse`,children:`PushTokenResponse`})]}),`
`,(0,n.jsx)(t.h3,{id:`sendtestandroidstring-pushtype--achievement-pushtokenresponse`,children:(0,n.jsx)(t.code,{children:`sendTestAndroid(string $pushType = 'achievement'): PushTokenResponse`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Description:`}),` Calls `,(0,n.jsx)(t.code,{children:`push.SendTestAndroid`}),`.`]}),`
`,(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`Parameter`}),(0,n.jsx)(t.th,{children:`Type`}),(0,n.jsx)(t.th,{children:`Description`})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:`$pushType`})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:`string`})}),(0,n.jsxs)(t.td,{children:[`— Default: `,(0,n.jsx)(t.code,{children:`'achievement'`}),`.`]})]})})]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Returns:`}),` `,(0,n.jsx)(t.a,{href:`../dto/PushTokenResponse`,children:`PushTokenResponse`})]}),`
`,(0,n.jsx)(t.h3,{id:`sendtestiosstring-pushtype--achievement-pushtokenresponse`,children:(0,n.jsx)(t.code,{children:`sendTestIOS(string $pushType = 'achievement'): PushTokenResponse`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Description:`}),` Calls `,(0,n.jsx)(t.code,{children:`push.SendTestIOS`}),`.`]}),`
`,(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`Parameter`}),(0,n.jsx)(t.th,{children:`Type`}),(0,n.jsx)(t.th,{children:`Description`})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:`$pushType`})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:`string`})}),(0,n.jsxs)(t.td,{children:[`— Default: `,(0,n.jsx)(t.code,{children:`'achievement'`}),`.`]})]})})]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Returns:`}),` `,(0,n.jsx)(t.a,{href:`../dto/PushTokenResponse`,children:`PushTokenResponse`})]})]})}function l(e={}){let{wrapper:t}=e.components||{};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}export{a as _markdown,l as default,r as frontmatter,i as lastModified,o as structuredData,s as toc};