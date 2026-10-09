import{r as e}from"./rolldown-runtime-QTnfLwEv.js";import{t}from"./jsx-runtime-By8HlURe.js";var n=e(t()),r={title:`OAuth2Helper`,description:`Помощник OAuth2 MyShows: authorization code, refresh и password grant.`,version:`1.0.0`},i=new Date(1791534354e3),a=`

**Описание:** Помощник OAuth2 MyShows: authorization code, refresh и password grant.

**Namespace:** \`DevCraftClub\\MyShows\\Auth\`

**С версии:** 1.0.0

**См. также:**

* [TokenResponse](TokenResponse)

## Методы [#методы]

### \`__construct(SdkConfig $config, Client $httpClient = new Client()): void\` [#__constructsdkconfig-config-client-httpclient--new-client-void]

| Параметр      | Тип                    | Описание                        |
| ------------- | ---------------------- | ------------------------------- |
| \`$config\`     | [SdkConfig](SdkConfig) | —                               |
| \`$httpClient\` | \`Client\`               | — По умолчанию: \`new Client()\`. |

**Возвращает:** \`void\`

### \`buildAuthorizeUrl(string $scope = 'basic'): string\` [#buildauthorizeurlstring-scope--basic-string]

| Параметр | Тип      | Описание                   |
| -------- | -------- | -------------------------- |
| \`$scope\` | \`string\` | — По умолчанию: \`'basic'\`. |

**Возвращает:** \`string\`

### \`exchangeCode(string $code): TokenResponse\` [#exchangecodestring-code-tokenresponse]

| Параметр | Тип      | Описание |
| -------- | -------- | -------- |
| \`$code\`  | \`string\` | —        |

**Возвращает:** [TokenResponse](TokenResponse)

### \`refreshToken(?string $refreshToken = null): TokenResponse\` [#refreshtokenstring-refreshtoken--null-tokenresponse]

| Параметр        | Тип       | Описание                |
| --------------- | --------- | ----------------------- |
| \`$refreshToken\` | \`?string\` | — По умолчанию: \`null\`. |

**Возвращает:** [TokenResponse](TokenResponse)

### \`passwordGrant(string $username, string $password): TokenResponse\` [#passwordgrantstring-username-string-password-tokenresponse]

| Параметр    | Тип      | Описание |
| ----------- | -------- | -------- |
| \`$username\` | \`string\` | —        |
| \`$password\` | \`string\` | —        |

**Возвращает:** [TokenResponse](TokenResponse)
`,o={contents:[{heading:void 0,content:`**Описание:** Помощник OAuth2 MyShows: authorization code, refresh и password grant.`},{heading:void 0,content:"**Namespace:** `DevCraftClub\\MyShows\\Auth`"},{heading:void 0,content:`**С версии:** 1.0.0`},{heading:void 0,content:`**См. также:**`},{heading:void 0,content:`TokenResponse`},{heading:`__constructsdkconfig-config-client-httpclient--new-client-void`,content:`Параметр`},{heading:`__constructsdkconfig-config-client-httpclient--new-client-void`,content:`Тип`},{heading:`__constructsdkconfig-config-client-httpclient--new-client-void`,content:`Описание`},{heading:`__constructsdkconfig-config-client-httpclient--new-client-void`,content:"`$config`"},{heading:`__constructsdkconfig-config-client-httpclient--new-client-void`,content:`SdkConfig`},{heading:`__constructsdkconfig-config-client-httpclient--new-client-void`,content:`—`},{heading:`__constructsdkconfig-config-client-httpclient--new-client-void`,content:"`$httpClient`"},{heading:`__constructsdkconfig-config-client-httpclient--new-client-void`,content:"`Client`"},{heading:`__constructsdkconfig-config-client-httpclient--new-client-void`,content:"— По умолчанию: `new Client()`."},{heading:`__constructsdkconfig-config-client-httpclient--new-client-void`,content:"**Возвращает:** `void`"},{heading:`buildauthorizeurlstring-scope--basic-string`,content:`Параметр`},{heading:`buildauthorizeurlstring-scope--basic-string`,content:`Тип`},{heading:`buildauthorizeurlstring-scope--basic-string`,content:`Описание`},{heading:`buildauthorizeurlstring-scope--basic-string`,content:"`$scope`"},{heading:`buildauthorizeurlstring-scope--basic-string`,content:"`string`"},{heading:`buildauthorizeurlstring-scope--basic-string`,content:"— По умолчанию: `'basic'`."},{heading:`buildauthorizeurlstring-scope--basic-string`,content:"**Возвращает:** `string`"},{heading:`exchangecodestring-code-tokenresponse`,content:`Параметр`},{heading:`exchangecodestring-code-tokenresponse`,content:`Тип`},{heading:`exchangecodestring-code-tokenresponse`,content:`Описание`},{heading:`exchangecodestring-code-tokenresponse`,content:"`$code`"},{heading:`exchangecodestring-code-tokenresponse`,content:"`string`"},{heading:`exchangecodestring-code-tokenresponse`,content:`—`},{heading:`exchangecodestring-code-tokenresponse`,content:`**Возвращает:** TokenResponse`},{heading:`refreshtokenstring-refreshtoken--null-tokenresponse`,content:`Параметр`},{heading:`refreshtokenstring-refreshtoken--null-tokenresponse`,content:`Тип`},{heading:`refreshtokenstring-refreshtoken--null-tokenresponse`,content:`Описание`},{heading:`refreshtokenstring-refreshtoken--null-tokenresponse`,content:"`$refreshToken`"},{heading:`refreshtokenstring-refreshtoken--null-tokenresponse`,content:"`?string`"},{heading:`refreshtokenstring-refreshtoken--null-tokenresponse`,content:"— По умолчанию: `null`."},{heading:`refreshtokenstring-refreshtoken--null-tokenresponse`,content:`**Возвращает:** TokenResponse`},{heading:`passwordgrantstring-username-string-password-tokenresponse`,content:`Параметр`},{heading:`passwordgrantstring-username-string-password-tokenresponse`,content:`Тип`},{heading:`passwordgrantstring-username-string-password-tokenresponse`,content:`Описание`},{heading:`passwordgrantstring-username-string-password-tokenresponse`,content:"`$username`"},{heading:`passwordgrantstring-username-string-password-tokenresponse`,content:"`string`"},{heading:`passwordgrantstring-username-string-password-tokenresponse`,content:`—`},{heading:`passwordgrantstring-username-string-password-tokenresponse`,content:"`$password`"},{heading:`passwordgrantstring-username-string-password-tokenresponse`,content:"`string`"},{heading:`passwordgrantstring-username-string-password-tokenresponse`,content:`—`},{heading:`passwordgrantstring-username-string-password-tokenresponse`,content:`**Возвращает:** TokenResponse`}],headings:[{id:`методы`,content:`Методы`},{id:`__constructsdkconfig-config-client-httpclient--new-client-void`,content:"`__construct(SdkConfig $config, Client $httpClient = new Client()): void`"},{id:`buildauthorizeurlstring-scope--basic-string`,content:"`buildAuthorizeUrl(string $scope = 'basic'): string`"},{id:`exchangecodestring-code-tokenresponse`,content:"`exchangeCode(string $code): TokenResponse`"},{id:`refreshtokenstring-refreshtoken--null-tokenresponse`,content:"`refreshToken(?string $refreshToken = null): TokenResponse`"},{id:`passwordgrantstring-username-string-password-tokenresponse`,content:"`passwordGrant(string $username, string $password): TokenResponse`"}]},s=[{depth:2,url:`#методы`,title:(0,n.jsx)(n.Fragment,{children:`Методы`})},{depth:3,url:`#__constructsdkconfig-config-client-httpclient--new-client-void`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`__construct(SdkConfig $config, Client $httpClient = new Client()): void`})})},{depth:3,url:`#buildauthorizeurlstring-scope--basic-string`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`buildAuthorizeUrl(string $scope = 'basic'): string`})})},{depth:3,url:`#exchangecodestring-code-tokenresponse`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`exchangeCode(string $code): TokenResponse`})})},{depth:3,url:`#refreshtokenstring-refreshtoken--null-tokenresponse`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`refreshToken(?string $refreshToken = null): TokenResponse`})})},{depth:3,url:`#passwordgrantstring-username-string-password-tokenresponse`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`passwordGrant(string $username, string $password): TokenResponse`})})}];function c(e){let t={a:`a`,code:`code`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,strong:`strong`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,ul:`ul`,...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Помощник OAuth2 MyShows: authorization code, refresh и password grant.`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Namespace:`}),` `,(0,n.jsx)(t.code,{children:`DevCraftClub\\MyShows\\Auth`})]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 1.0.0`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`См. также:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`TokenResponse`,children:`TokenResponse`})}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`методы`,children:`Методы`}),`
`,(0,n.jsx)(t.h3,{id:`__constructsdkconfig-config-client-httpclient--new-client-void`,children:(0,n.jsx)(t.code,{children:`__construct(SdkConfig $config, Client $httpClient = new Client()): void`})}),`
`,(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`Параметр`}),(0,n.jsx)(t.th,{children:`Тип`}),(0,n.jsx)(t.th,{children:`Описание`})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:`$config`})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:`SdkConfig`,children:`SdkConfig`})}),(0,n.jsx)(t.td,{children:`—`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:`$httpClient`})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:`Client`})}),(0,n.jsxs)(t.td,{children:[`— По умолчанию: `,(0,n.jsx)(t.code,{children:`new Client()`}),`.`]})]})]})]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`void`})]}),`
`,(0,n.jsx)(t.h3,{id:`buildauthorizeurlstring-scope--basic-string`,children:(0,n.jsx)(t.code,{children:`buildAuthorizeUrl(string $scope = 'basic'): string`})}),`
`,(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`Параметр`}),(0,n.jsx)(t.th,{children:`Тип`}),(0,n.jsx)(t.th,{children:`Описание`})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:`$scope`})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:`string`})}),(0,n.jsxs)(t.td,{children:[`— По умолчанию: `,(0,n.jsx)(t.code,{children:`'basic'`}),`.`]})]})})]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`string`})]}),`
`,(0,n.jsx)(t.h3,{id:`exchangecodestring-code-tokenresponse`,children:(0,n.jsx)(t.code,{children:`exchangeCode(string $code): TokenResponse`})}),`
`,(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`Параметр`}),(0,n.jsx)(t.th,{children:`Тип`}),(0,n.jsx)(t.th,{children:`Описание`})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:`$code`})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:`string`})}),(0,n.jsx)(t.td,{children:`—`})]})})]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.a,{href:`TokenResponse`,children:`TokenResponse`})]}),`
`,(0,n.jsx)(t.h3,{id:`refreshtokenstring-refreshtoken--null-tokenresponse`,children:(0,n.jsx)(t.code,{children:`refreshToken(?string $refreshToken = null): TokenResponse`})}),`
`,(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`Параметр`}),(0,n.jsx)(t.th,{children:`Тип`}),(0,n.jsx)(t.th,{children:`Описание`})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:`$refreshToken`})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:`?string`})}),(0,n.jsxs)(t.td,{children:[`— По умолчанию: `,(0,n.jsx)(t.code,{children:`null`}),`.`]})]})})]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.a,{href:`TokenResponse`,children:`TokenResponse`})]}),`
`,(0,n.jsx)(t.h3,{id:`passwordgrantstring-username-string-password-tokenresponse`,children:(0,n.jsx)(t.code,{children:`passwordGrant(string $username, string $password): TokenResponse`})}),`
`,(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`Параметр`}),(0,n.jsx)(t.th,{children:`Тип`}),(0,n.jsx)(t.th,{children:`Описание`})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:`$username`})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:`string`})}),(0,n.jsx)(t.td,{children:`—`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:`$password`})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:`string`})}),(0,n.jsx)(t.td,{children:`—`})]})]})]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.a,{href:`TokenResponse`,children:`TokenResponse`})]})]})}function l(e={}){let{wrapper:t}=e.components||{};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}export{a as _markdown,l as default,r as frontmatter,i as lastModified,o as structuredData,s as toc};