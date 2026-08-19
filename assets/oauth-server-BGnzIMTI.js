import{r as e}from"./rolldown-runtime-QTnfLwEv.js";import{t}from"./jsx-runtime-By8HlURe.js";var n=e(t()),r={title:`OAuth Authorization Server`,description:`Discovery, authorize/token/revoke, credential_type с примерами curl в табах.`},i=new Date(1787142659e3),a=`

Сайт с DLE API — **OAuth 2.0 Authorization Server** для \`/api/v2\`. Клиент создаёте в админке: [OAuth-клиенты](oauth-client).

## Discovery и URL [#discovery-и-url]

Без Bearer:

\`\`\`http
GET /api/v2/.well-known/oauth-authorization-server
\`\`\`

В ответе: \`issuer\`, \`authorization_endpoint\`, \`token_endpoint\`, \`revocation_endpoint\`, \`userinfo_endpoint\`, поддерживаемые grants / PKCE / \`credential_types_supported\`.

Те же URL копируются с панели **OAuth-клиенты** в админке.

| Метод    | Путь               | Bearer                     |
| -------- | ------------------ | -------------------------- |
| GET/POST | \`/oauth/authorize\` | сессия DLE (гость → логин) |
| POST     | \`/oauth/token\`     | нет                        |
| POST     | \`/oauth/revoke\`    | нет (\`token\` в теле)       |
| GET      | \`/oauth/userinfo\`  | да                         |
| GET      | \`/me\`              | да                         |

## Authorization Code (+ PKCE) [#authorization-code--pkce]

1. Приложение открывает\\
   \`GET /api/v2/oauth/authorize?client_id=…&redirect_uri=…&state=…&scope=…&code_challenge=…&code_challenge_method=S256\`
2. Нет сессии DLE → редирект на логин сайта, затем возврат.
3. Залогинен → **302** на \`redirect_uri?code=…&state=…\` (код живёт ограниченное время). На этапе authorize \`redirect_uri\` **обязан** совпадать с URI клиента; иначе JSON-ошибка без code. У клиента должен быть grant \`authorization_code\`.
4. \`POST /oauth/token\` с \`grant_type=authorization_code\`, \`client_id\`, \`client_secret\`, \`code\`, \`redirect_uri\`, опционально \`code_verifier\`.
5. Ресурсы: \`Authorization: Bearer <access_token>\`.

## Выдача токена: \`credential_type\` [#выдача-токена-credential_type]

Упрощённый режим: в теле \`POST /oauth/token&#x60; поле &#x2A;*\`credential_type\`** вместо классического \`grant_type\`. Если задан \`credential_type\`, берётся эта ветка.

<Tabs groupId="credential_type" items="['api_key', 'auth', 'oauth_client']">
  <Tab value="api_key">
    Ключ из админки → токен с scopes этого ключа. Удобно для скриптов и интеграций без OAuth-клиента.

    \`\`\`bash
    curl -sS -X POST 'https://ВАШ_САЙТ/api/v2/oauth/token' \\
      -H 'Content-Type: application/json' \\
      -d '{"credential_type":"api_key","api_key":"…"}'
    \`\`\`
  </Tab>

  <Tab value="auth">
    Логин/пароль пользователя DLE (\`users.name\` или email). Резолв: ключ пользователя → иначе гость / \`access_denied\`. Близко к \`grant_type=password\` без обязательного client.

    \`\`\`bash
    curl -sS -X POST 'https://ВАШ_САЙТ/api/v2/oauth/token' \\
      -H 'Content-Type: application/json' \\
      -d '{"credential_type":"auth","username":"admin","password":"…"}'
    \`\`\`
  </Tab>

  <Tab value="oauth_client">
    M2M: \`client_id\` + \`client_secret\` → токен с scopes ключа, привязанного к клиенту. Эквивалент \`grant_type=client_credentials\`.

    \`\`\`bash
    curl -sS -X POST 'https://ВАШ_САЙТ/api/v2/oauth/token' \\
      -H 'Content-Type: application/json' \\
      -d '{"credential_type":"oauth_client","client_id":"…","client_secret":"…"}'
    \`\`\`
  </Tab>
</Tabs>

### Эквиваленты \`grant_type\` [#эквиваленты-grant_type]

| credential\\_type | Близкий grant\\_type                       |
| ---------------- | ----------------------------------------- |
| \`oauth_client\`   | \`client_credentials\`                      |
| \`auth\`           | \`password\` (часто без жёсткого client)    |
| \`api_key\`        | нет прямого аналога в классическом OAuth2 |

Также: \`authorization_code\`, \`refresh_token\` — только через \`grant_type\`.

## Revoke [#revoke]

\`\`\`bash
curl -sS -X POST 'https://ВАШ_САЙТ/api/v2/oauth/revoke' \\
  -H 'Content-Type: application/json' \\
  -d '{"token":"…"}'
\`\`\`

## DEMO\\_MODE [#demo_mode]

В \`ROOT_DIR/.env\`: \`DEMO_MODE=true\` — успешная проверка credentials **не** выдаёт токен; authorize уходит с \`error=demo_mode\`. Подробнее: [Авторизация](auth).

## Чеклист для внешнего приложения [#чеклист-для-внешнего-приложения]

1. Access level + API-ключ; OAuth-клиент с нужными grants и Redirect URI.
2. Discovery / скопированные endpoint URL.
3. Code-flow или M2M (\`oauth_client\` / \`client_credentials\`).
4. Секрет хранить только на сервере приложения.
5. API только с Bearer access\\_token.

## См. также [#см-также]

* [OAuth-клиенты](oauth-client)
* [Проверка в Postman](postman)
* [XenForo и DLE API](xenforo)
* [HTTP](../reference/http)
* [OpenAPI](../reference/openapi)
`,o={contents:[{heading:void 0,content:"Сайт с DLE API — **OAuth 2.0 Authorization Server** для `/api/v2`. Клиент создаёте в админке: OAuth-клиенты."},{heading:`discovery-и-url`,content:`Без Bearer:`},{heading:`discovery-и-url`,content:"В ответе: `issuer`, `authorization_endpoint`, `token_endpoint`, `revocation_endpoint`, `userinfo_endpoint`, поддерживаемые grants / PKCE / `credential_types_supported`."},{heading:`discovery-и-url`,content:`Те же URL копируются с панели **OAuth-клиенты** в админке.`},{heading:`discovery-и-url`,content:`Метод`},{heading:`discovery-и-url`,content:`Путь`},{heading:`discovery-и-url`,content:`Bearer`},{heading:`discovery-и-url`,content:`GET/POST`},{heading:`discovery-и-url`,content:"`/oauth/authorize`"},{heading:`discovery-и-url`,content:`сессия DLE (гость → логин)`},{heading:`discovery-и-url`,content:`POST`},{heading:`discovery-и-url`,content:"`/oauth/token`"},{heading:`discovery-и-url`,content:`нет`},{heading:`discovery-и-url`,content:`POST`},{heading:`discovery-и-url`,content:"`/oauth/revoke`"},{heading:`discovery-и-url`,content:"нет (`token` в теле)"},{heading:`discovery-и-url`,content:`GET`},{heading:`discovery-и-url`,content:"`/oauth/userinfo`"},{heading:`discovery-и-url`,content:`да`},{heading:`discovery-и-url`,content:`GET`},{heading:`discovery-и-url`,content:"`/me`"},{heading:`discovery-и-url`,content:`да`},{heading:`authorization-code--pkce`,content:"Приложение открывает\\\n`GET /api/v2/oauth/authorize?client_id=…&redirect_uri=…&state=…&scope=…&code_challenge=…&code_challenge_method=S256`"},{heading:`authorization-code--pkce`,content:`Нет сессии DLE → редирект на логин сайта, затем возврат.`},{heading:`authorization-code--pkce`,content:"Залогинен → **302** на `redirect_uri?code=…&state=…` (код живёт ограниченное время). На этапе authorize `redirect_uri` **обязан** совпадать с URI клиента; иначе JSON-ошибка без code. У клиента должен быть grant `authorization_code`."},{heading:`authorization-code--pkce`,content:"`POST /oauth/token` с `grant_type=authorization_code`, `client_id`, `client_secret`, `code`, `redirect_uri`, опционально `code_verifier`."},{heading:`authorization-code--pkce`,content:"Ресурсы: `Authorization: Bearer <access_token>`."},{heading:`выдача-токена-credential_type`,content:"Упрощённый режим: в теле `POST /oauth/token&#x60; поле &#x2A;*`credential_type`** вместо классического `grant_type`. Если задан `credential_type`, берётся эта ветка."},{heading:`выдача-токена-credential_type`,content:`Ключ из админки → токен с scopes этого ключа. Удобно для скриптов и интеграций без OAuth-клиента.`},{heading:`выдача-токена-credential_type`,content:"Логин/пароль пользователя DLE (`users.name` или email). Резолв: ключ пользователя → иначе гость / `access_denied`. Близко к `grant_type=password` без обязательного client."},{heading:`выдача-токена-credential_type`,content:"M2M: `client_id` + `client_secret` → токен с scopes ключа, привязанного к клиенту. Эквивалент `grant_type=client_credentials`."},{heading:`эквиваленты-grant_type`,content:`credential\\_type`},{heading:`эквиваленты-grant_type`,content:`Близкий grant\\_type`},{heading:`эквиваленты-grant_type`,content:"`oauth_client`"},{heading:`эквиваленты-grant_type`,content:"`client_credentials`"},{heading:`эквиваленты-grant_type`,content:"`auth`"},{heading:`эквиваленты-grant_type`,content:"`password` (часто без жёсткого client)"},{heading:`эквиваленты-grant_type`,content:"`api_key`"},{heading:`эквиваленты-grant_type`,content:`нет прямого аналога в классическом OAuth2`},{heading:`эквиваленты-grant_type`,content:"Также: `authorization_code`, `refresh_token` — только через `grant_type`."},{heading:`demo_mode`,content:"В `ROOT_DIR/.env`: `DEMO_MODE=true` — успешная проверка credentials **не** выдаёт токен; authorize уходит с `error=demo_mode`. Подробнее: Авторизация."},{heading:`чеклист-для-внешнего-приложения`,content:`Access level + API-ключ; OAuth-клиент с нужными grants и Redirect URI.`},{heading:`чеклист-для-внешнего-приложения`,content:`Discovery / скопированные endpoint URL.`},{heading:`чеклист-для-внешнего-приложения`,content:"Code-flow или M2M (`oauth_client` / `client_credentials`)."},{heading:`чеклист-для-внешнего-приложения`,content:`Секрет хранить только на сервере приложения.`},{heading:`чеклист-для-внешнего-приложения`,content:`API только с Bearer access\\_token.`},{heading:`см-также`,content:`OAuth-клиенты`},{heading:`см-также`,content:`Проверка в Postman`},{heading:`см-также`,content:`XenForo и DLE API`},{heading:`см-также`,content:`HTTP`},{heading:`см-также`,content:`OpenAPI`}],headings:[{id:`discovery-и-url`,content:`Discovery и URL`},{id:`authorization-code--pkce`,content:`Authorization Code (+ PKCE)`},{id:`выдача-токена-credential_type`,content:"Выдача токена: `credential_type`"},{id:`эквиваленты-grant_type`,content:"Эквиваленты `grant_type`"},{id:`revoke`,content:`Revoke`},{id:`demo_mode`,content:`DEMO_MODE`},{id:`чеклист-для-внешнего-приложения`,content:`Чеклист для внешнего приложения`},{id:`см-также`,content:`См. также`}]},s=[{depth:2,url:`#discovery-и-url`,title:(0,n.jsx)(n.Fragment,{children:`Discovery и URL`})},{depth:2,url:`#authorization-code--pkce`,title:(0,n.jsx)(n.Fragment,{children:`Authorization Code (+ PKCE)`})},{depth:2,url:`#выдача-токена-credential_type`,title:(0,n.jsxs)(n.Fragment,{children:[`Выдача токена: `,(0,n.jsx)(`code`,{children:`credential_type`})]})},{depth:3,url:`#эквиваленты-grant_type`,title:(0,n.jsxs)(n.Fragment,{children:[`Эквиваленты `,(0,n.jsx)(`code`,{children:`grant_type`})]})},{depth:2,url:`#revoke`,title:(0,n.jsx)(n.Fragment,{children:`Revoke`})},{depth:2,url:`#demo_mode`,title:(0,n.jsx)(n.Fragment,{children:`DEMO_MODE`})},{depth:2,url:`#чеклист-для-внешнего-приложения`,title:(0,n.jsx)(n.Fragment,{children:`Чеклист для внешнего приложения`})},{depth:2,url:`#см-также`,title:(0,n.jsx)(n.Fragment,{children:`См. также`})}];function c(e){let t={a:`a`,br:`br`,code:`code`,h2:`h2`,h3:`h3`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,span:`span`,strong:`strong`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,ul:`ul`,...e.components},{Tab:r,Tabs:i}=t;return r||u(`Tab`,!0),i||u(`Tabs`,!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:[`Сайт с DLE API — `,(0,n.jsx)(t.strong,{children:`OAuth 2.0 Authorization Server`}),` для `,(0,n.jsx)(t.code,{children:`/api/v2`}),`. Клиент создаёте в админке: `,(0,n.jsx)(t.a,{href:`oauth-client`,children:`OAuth-клиенты`}),`.`]}),`
`,(0,n.jsx)(t.h2,{id:`discovery-и-url`,children:`Discovery и URL`}),`
`,(0,n.jsx)(t.p,{children:`Без Bearer:`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`GET`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:` /api/v2/.well-known/oauth-authorization-server`})]})})})}),`
`,(0,n.jsxs)(t.p,{children:[`В ответе: `,(0,n.jsx)(t.code,{children:`issuer`}),`, `,(0,n.jsx)(t.code,{children:`authorization_endpoint`}),`, `,(0,n.jsx)(t.code,{children:`token_endpoint`}),`, `,(0,n.jsx)(t.code,{children:`revocation_endpoint`}),`, `,(0,n.jsx)(t.code,{children:`userinfo_endpoint`}),`, поддерживаемые grants / PKCE / `,(0,n.jsx)(t.code,{children:`credential_types_supported`}),`.`]}),`
`,(0,n.jsxs)(t.p,{children:[`Те же URL копируются с панели `,(0,n.jsx)(t.strong,{children:`OAuth-клиенты`}),` в админке.`]}),`
`,(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`Метод`}),(0,n.jsx)(t.th,{children:`Путь`}),(0,n.jsx)(t.th,{children:`Bearer`})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`GET/POST`}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:`/oauth/authorize`})}),(0,n.jsx)(t.td,{children:`сессия DLE (гость → логин)`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`POST`}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:`/oauth/token`})}),(0,n.jsx)(t.td,{children:`нет`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`POST`}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:`/oauth/revoke`})}),(0,n.jsxs)(t.td,{children:[`нет (`,(0,n.jsx)(t.code,{children:`token`}),` в теле)`]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`GET`}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:`/oauth/userinfo`})}),(0,n.jsx)(t.td,{children:`да`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`GET`}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:`/me`})}),(0,n.jsx)(t.td,{children:`да`})]})]})]}),`
`,(0,n.jsx)(t.h2,{id:`authorization-code--pkce`,children:`Authorization Code (+ PKCE)`}),`
`,(0,n.jsxs)(t.ol,{children:[`
`,(0,n.jsxs)(t.li,{children:[`Приложение открывает`,(0,n.jsx)(t.br,{}),`
`,(0,n.jsx)(t.code,{children:`GET /api/v2/oauth/authorize?client_id=…&redirect_uri=…&state=…&scope=…&code_challenge=…&code_challenge_method=S256`})]}),`
`,(0,n.jsx)(t.li,{children:`Нет сессии DLE → редирект на логин сайта, затем возврат.`}),`
`,(0,n.jsxs)(t.li,{children:[`Залогинен → `,(0,n.jsx)(t.strong,{children:`302`}),` на `,(0,n.jsx)(t.code,{children:`redirect_uri?code=…&state=…`}),` (код живёт ограниченное время). На этапе authorize `,(0,n.jsx)(t.code,{children:`redirect_uri`}),` `,(0,n.jsx)(t.strong,{children:`обязан`}),` совпадать с URI клиента; иначе JSON-ошибка без code. У клиента должен быть grant `,(0,n.jsx)(t.code,{children:`authorization_code`}),`.`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`POST /oauth/token`}),` с `,(0,n.jsx)(t.code,{children:`grant_type=authorization_code`}),`, `,(0,n.jsx)(t.code,{children:`client_id`}),`, `,(0,n.jsx)(t.code,{children:`client_secret`}),`, `,(0,n.jsx)(t.code,{children:`code`}),`, `,(0,n.jsx)(t.code,{children:`redirect_uri`}),`, опционально `,(0,n.jsx)(t.code,{children:`code_verifier`}),`.`]}),`
`,(0,n.jsxs)(t.li,{children:[`Ресурсы: `,(0,n.jsx)(t.code,{children:`Authorization: Bearer <access_token>`}),`.`]}),`
`]}),`
`,(0,n.jsxs)(t.h2,{id:`выдача-токена-credential_type`,children:[`Выдача токена: `,(0,n.jsx)(t.code,{children:`credential_type`})]}),`
`,(0,n.jsxs)(t.p,{children:[`Упрощённый режим: в теле `,(0,n.jsx)(t.code,{children:`POST /oauth/token`}),` поле `,(0,n.jsx)(t.strong,{children:(0,n.jsx)(t.code,{children:`credential_type`})}),` вместо классического `,(0,n.jsx)(t.code,{children:`grant_type`}),`. Если задан `,(0,n.jsx)(t.code,{children:`credential_type`}),`, берётся эта ветка.`]}),`
`,(0,n.jsxs)(i,{groupId:`credential_type`,items:[`api_key`,`auth`,`oauth_client`],children:[(0,n.jsxs)(r,{value:`api_key`,children:[(0,n.jsx)(t.p,{children:`Ключ из админки → токен с scopes этого ключа. Удобно для скриптов и интеграций без OAuth-клиента.`}),(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="m 4,4 a 1,1 0 0 0 -0.7070312,0.2929687 1,1 0 0 0 0,1.4140625 L 8.5859375,11 3.2929688,16.292969 a 1,1 0 0 0 0,1.414062 1,1 0 0 0 1.4140624,0 l 5.9999998,-6 a 1.0001,1.0001 0 0 0 0,-1.414062 L 4.7070312,4.2929687 A 1,1 0 0 0 4,4 Z m 8,14 a 1,1 0 0 0 -1,1 1,1 0 0 0 1,1 h 8 a 1,1 0 0 0 1,-1 1,1 0 0 0 -1,-1 z" fill="currentColor" /></svg>`,children:(0,n.jsxs)(t.code,{children:[(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`curl`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:` -sS`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:` -X`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:` POST`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:` 'https://ВАШ_САЙТ/api/v2/oauth/token'`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:` \\`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`  -H`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:` 'Content-Type: application/json'`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:` \\`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`  -d`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:` '{"credential_type":"api_key","api_key":"…"}'`})]})]})})})]}),(0,n.jsxs)(r,{value:`auth`,children:[(0,n.jsxs)(t.p,{children:[`Логин/пароль пользователя DLE (`,(0,n.jsx)(t.code,{children:`users.name`}),` или email). Резолв: ключ пользователя → иначе гость / `,(0,n.jsx)(t.code,{children:`access_denied`}),`. Близко к `,(0,n.jsx)(t.code,{children:`grant_type=password`}),` без обязательного client.`]}),(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="m 4,4 a 1,1 0 0 0 -0.7070312,0.2929687 1,1 0 0 0 0,1.4140625 L 8.5859375,11 3.2929688,16.292969 a 1,1 0 0 0 0,1.414062 1,1 0 0 0 1.4140624,0 l 5.9999998,-6 a 1.0001,1.0001 0 0 0 0,-1.414062 L 4.7070312,4.2929687 A 1,1 0 0 0 4,4 Z m 8,14 a 1,1 0 0 0 -1,1 1,1 0 0 0 1,1 h 8 a 1,1 0 0 0 1,-1 1,1 0 0 0 -1,-1 z" fill="currentColor" /></svg>`,children:(0,n.jsxs)(t.code,{children:[(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`curl`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:` -sS`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:` -X`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:` POST`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:` 'https://ВАШ_САЙТ/api/v2/oauth/token'`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:` \\`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`  -H`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:` 'Content-Type: application/json'`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:` \\`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`  -d`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:` '{"credential_type":"auth","username":"admin","password":"…"}'`})]})]})})})]}),(0,n.jsxs)(r,{value:`oauth_client`,children:[(0,n.jsxs)(t.p,{children:[`M2M: `,(0,n.jsx)(t.code,{children:`client_id`}),` + `,(0,n.jsx)(t.code,{children:`client_secret`}),` → токен с scopes ключа, привязанного к клиенту. Эквивалент `,(0,n.jsx)(t.code,{children:`grant_type=client_credentials`}),`.`]}),(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="m 4,4 a 1,1 0 0 0 -0.7070312,0.2929687 1,1 0 0 0 0,1.4140625 L 8.5859375,11 3.2929688,16.292969 a 1,1 0 0 0 0,1.414062 1,1 0 0 0 1.4140624,0 l 5.9999998,-6 a 1.0001,1.0001 0 0 0 0,-1.414062 L 4.7070312,4.2929687 A 1,1 0 0 0 4,4 Z m 8,14 a 1,1 0 0 0 -1,1 1,1 0 0 0 1,1 h 8 a 1,1 0 0 0 1,-1 1,1 0 0 0 -1,-1 z" fill="currentColor" /></svg>`,children:(0,n.jsxs)(t.code,{children:[(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`curl`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:` -sS`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:` -X`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:` POST`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:` 'https://ВАШ_САЙТ/api/v2/oauth/token'`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:` \\`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`  -H`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:` 'Content-Type: application/json'`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:` \\`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`  -d`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:` '{"credential_type":"oauth_client","client_id":"…","client_secret":"…"}'`})]})]})})})]})]}),`
`,(0,n.jsxs)(t.h3,{id:`эквиваленты-grant_type`,children:[`Эквиваленты `,(0,n.jsx)(t.code,{children:`grant_type`})]}),`
`,(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`credential_type`}),(0,n.jsx)(t.th,{children:`Близкий grant_type`})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:`oauth_client`})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:`client_credentials`})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:`auth`})}),(0,n.jsxs)(t.td,{children:[(0,n.jsx)(t.code,{children:`password`}),` (часто без жёсткого client)`]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:`api_key`})}),(0,n.jsx)(t.td,{children:`нет прямого аналога в классическом OAuth2`})]})]})]}),`
`,(0,n.jsxs)(t.p,{children:[`Также: `,(0,n.jsx)(t.code,{children:`authorization_code`}),`, `,(0,n.jsx)(t.code,{children:`refresh_token`}),` — только через `,(0,n.jsx)(t.code,{children:`grant_type`}),`.`]}),`
`,(0,n.jsx)(t.h2,{id:`revoke`,children:`Revoke`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="m 4,4 a 1,1 0 0 0 -0.7070312,0.2929687 1,1 0 0 0 0,1.4140625 L 8.5859375,11 3.2929688,16.292969 a 1,1 0 0 0 0,1.414062 1,1 0 0 0 1.4140624,0 l 5.9999998,-6 a 1.0001,1.0001 0 0 0 0,-1.414062 L 4.7070312,4.2929687 A 1,1 0 0 0 4,4 Z m 8,14 a 1,1 0 0 0 -1,1 1,1 0 0 0 1,1 h 8 a 1,1 0 0 0 1,-1 1,1 0 0 0 -1,-1 z" fill="currentColor" /></svg>`,children:(0,n.jsxs)(t.code,{children:[(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`curl`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:` -sS`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:` -X`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:` POST`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:` 'https://ВАШ_САЙТ/api/v2/oauth/revoke'`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:` \\`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`  -H`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:` 'Content-Type: application/json'`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:` \\`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`  -d`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:` '{"token":"…"}'`})]})]})})}),`
`,(0,n.jsx)(t.h2,{id:`demo_mode`,children:`DEMO_MODE`}),`
`,(0,n.jsxs)(t.p,{children:[`В `,(0,n.jsx)(t.code,{children:`ROOT_DIR/.env`}),`: `,(0,n.jsx)(t.code,{children:`DEMO_MODE=true`}),` — успешная проверка credentials `,(0,n.jsx)(t.strong,{children:`не`}),` выдаёт токен; authorize уходит с `,(0,n.jsx)(t.code,{children:`error=demo_mode`}),`. Подробнее: `,(0,n.jsx)(t.a,{href:`auth`,children:`Авторизация`}),`.`]}),`
`,(0,n.jsx)(t.h2,{id:`чеклист-для-внешнего-приложения`,children:`Чеклист для внешнего приложения`}),`
`,(0,n.jsxs)(t.ol,{children:[`
`,(0,n.jsx)(t.li,{children:`Access level + API-ключ; OAuth-клиент с нужными grants и Redirect URI.`}),`
`,(0,n.jsx)(t.li,{children:`Discovery / скопированные endpoint URL.`}),`
`,(0,n.jsxs)(t.li,{children:[`Code-flow или M2M (`,(0,n.jsx)(t.code,{children:`oauth_client`}),` / `,(0,n.jsx)(t.code,{children:`client_credentials`}),`).`]}),`
`,(0,n.jsx)(t.li,{children:`Секрет хранить только на сервере приложения.`}),`
`,(0,n.jsx)(t.li,{children:`API только с Bearer access_token.`}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`см-также`,children:`См. также`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`oauth-client`,children:`OAuth-клиенты`})}),`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`postman`,children:`Проверка в Postman`})}),`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`xenforo`,children:`XenForo и DLE API`})}),`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`../reference/http`,children:`HTTP`})}),`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`../reference/openapi`,children:`OpenAPI`})}),`
`]})]})}function l(e={}){let{wrapper:t}=e.components||{};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}function u(e,t){throw Error(`Expected `+(t?`component`:`object`)+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}export{a as _markdown,l as default,r as frontmatter,i as lastModified,o as structuredData,s as toc};