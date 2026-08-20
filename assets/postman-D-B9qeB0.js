import{r as e}from"./rolldown-runtime-QTnfLwEv.js";import{t}from"./jsx-runtime-By8HlURe.js";var n=e(t()),r={title:`Проверка в Postman`,description:`Проверка OAuth-клиента DLE API в Postman: client_credentials, authorization_code + PKCE, GET /me.`,version:`200.1.0`},i=new Date(1787223655e3),a=`

Клиент создаёте в DevCraft: [OAuth-клиенты](oauth-client). Здесь — проверка через вкладку **Authorization** в Postman (классический \`grant_type\`, не \`credential_type\` из [oauth-server](oauth-server)).

Для XenForo как relying party используйте тот же клиент и тот же Redirect URI: [XenForo](xenforo).

<Callout type="info" title="API XenForo — это другое">
  Проверка **API XenForo** идёт на \`{board}/oauth2/authorize\` и \`{board}/api/oauth2/token\`, identity — \`GET /api/me\`. Это не \`/api/v2\` и не клиент из DevCraft. Таблица URL — в [гайде XenForo](xenforo).
</Callout>

## Что нужно заранее [#что-нужно-заранее]

* OAuth-клиент создан, \`client_secret\` сохранён
* Корневой \`.env\` без демо-режима — [Инструкция .env](env)
* URL эндпоинтов с панели AS или из discovery

Переменные коллекции:

| Переменная     | Значение                  |
| -------------- | ------------------------- |
| \`baseUrl\`      | \`https://ВАШ_САЙТ/api/v2\` |
| \`clientId\`     | \`client_id\` из админки    |
| \`clientSecret\` | \`client_secret\`           |

## Client Credentials (быстрый тест) [#client-credentials-быстрый-тест]

У клиента должен быть grant \`client_credentials\`. Redirect URI не нужен.

<Steps>
  <Step>
    ### Настройте OAuth 2.0 [#настройте-oauth-20]

    Запрос (например \`GET {{baseUrl}}/me\`) → **Authorization** → Type **OAuth 2.0** → **Get New Access Token**.

    | Поле Postman          | Значение                                     |
    | --------------------- | -------------------------------------------- |
    | Grant Type            | Client Credentials                           |
    | Access Token URL      | \`{{baseUrl}}/oauth/token\`                    |
    | Client ID / Secret    | \`{{clientId}}\` / \`{{clientSecret}}\`          |
    | Client Authentication | в body или Basic Auth (оба есть в discovery) |
  </Step>

  <Step>
    ### Получите токен и вызовите /me [#получите-токен-и-вызовите-me]

    **Get New Access Token** → ожидайте \`access_token\`. **Use Token**, затем \`GET {{baseUrl}}/me\`.

    Что увидите: кто владеет токеном (\`user_id\`, \`name\`, …) — см. [Авторизация](auth).
  </Step>
</Steps>

Помощник Postman шлёт \`grant_type=client_credentials\`, не \`credential_type=oauth_client\`.

## Authorization Code + PKCE [#authorization-code--pkce]

Нужны grants \`authorization_code\` и обычно \`refresh_token\`.

<Callout type="warn" title="Redirect URI = Callback URL">
  Значение в админке DLE и Callback URL в Postman должны совпадать **байт-в-байт**. Типичный callback Postman: \`https://oauth.pstmn.io/v1/callback\`. Несовпадение → ошибка на authorize без \`code\`.

  Для XenForo Callback = \`https://XF_BOARD/connected_account.php\` — см. [XenForo](xenforo).
</Callout>

<Steps>
  <Step>
    ### Поля Get New Access Token [#поля-get-new-access-token]

    | Поле                  | Значение                         |
    | --------------------- | -------------------------------- |
    | Grant Type            | Authorization Code (With PKCE)   |
    | Callback URL          | тот же, что Redirect URI клиента |
    | Auth URL              | \`{{baseUrl}}/oauth/authorize\`    |
    | Access Token URL      | \`{{baseUrl}}/oauth/token\`        |
    | Code Challenge Method | SHA-256 (\`S256\`)                 |
  </Step>

  <Step>
    ### Войдите на сайт в окне Postman [#войдите-на-сайт-в-окне-postman]

    Нет сессии DLE → окно логина сайта. Нужно войти **в этом** окне (cookies).
  </Step>

  <Step>
    ### Use Token → GET /me [#use-token--get-me]

    Как в Client Credentials.
  </Step>
</Steps>

## Чего не ждать от OAuth helper [#чего-не-ждать-от-oauth-helper]

* **\`credential_type\`** — это JSON-режим из [oauth-server](oauth-server); Postman шлёт \`grant_type\`
* **Implicit** — у AS его нет
* **Password** — только для доверенных клиентов; проще \`credential_type=auth\` в [oauth-server](oauth-server)

## Если что-то не работает [#если-что-то-не-работает]

| Симптом                                  | Что проверить                                       |
| ---------------------------------------- | --------------------------------------------------- |
| Нет \`code\` на authorize                  | Callback = Redirect URI; grant \`authorization_code\` |
| Grant denied                             | Grant отмечен у клиента                             |
| \`access_token: null\` / \`error=demo_mode\` | [Инструкция .env](env)                              |
| Сразу логин DLE                          | Войдите в окне Postman, не в другой вкладке         |
| 401 на \`/table\`                          | Bearer access\\_token, не сырой ключ ([auth](auth))  |

## См. также [#см-также]

* [OAuth-клиенты](oauth-client)
* [OAuth-сервер](oauth-server)
* [Авторизация](auth)
`,o={contents:[{heading:void 0,content:"Клиент создаёте в DevCraft: OAuth-клиенты. Здесь — проверка через вкладку **Authorization** в Postman (классический `grant_type`, не `credential_type` из oauth-server)."},{heading:void 0,content:`Для XenForo как relying party используйте тот же клиент и тот же Redirect URI: XenForo.`},{heading:void 0,content:"Проверка **API XenForo** идёт на `{board}/oauth2/authorize` и `{board}/api/oauth2/token`, identity — `GET /api/me`. Это не `/api/v2` и не клиент из DevCraft. Таблица URL — в гайде XenForo."},{heading:`что-нужно-заранее`,content:"OAuth-клиент создан, `client_secret` сохранён"},{heading:`что-нужно-заранее`,content:"Корневой `.env` без демо-режима — Инструкция .env"},{heading:`что-нужно-заранее`,content:`URL эндпоинтов с панели AS или из discovery`},{heading:`что-нужно-заранее`,content:`Переменные коллекции:`},{heading:`что-нужно-заранее`,content:`Переменная`},{heading:`что-нужно-заранее`,content:`Значение`},{heading:`что-нужно-заранее`,content:"`baseUrl`"},{heading:`что-нужно-заранее`,content:"`https://ВАШ_САЙТ/api/v2`"},{heading:`что-нужно-заранее`,content:"`clientId`"},{heading:`что-нужно-заранее`,content:"`client_id` из админки"},{heading:`что-нужно-заранее`,content:"`clientSecret`"},{heading:`что-нужно-заранее`,content:"`client_secret`"},{heading:`client-credentials-быстрый-тест`,content:"У клиента должен быть grant `client_credentials`. Redirect URI не нужен."},{heading:`настройте-oauth-20`,content:"Запрос (например `GET {{baseUrl}}/me`) → **Authorization** → Type **OAuth 2.0** → **Get New Access Token**."},{heading:`настройте-oauth-20`,content:`Поле Postman`},{heading:`настройте-oauth-20`,content:`Значение`},{heading:`настройте-oauth-20`,content:`Grant Type`},{heading:`настройте-oauth-20`,content:`Client Credentials`},{heading:`настройте-oauth-20`,content:`Access Token URL`},{heading:`настройте-oauth-20`,content:"`{{baseUrl}}/oauth/token`"},{heading:`настройте-oauth-20`,content:`Client ID / Secret`},{heading:`настройте-oauth-20`,content:"`{{clientId}}` / `{{clientSecret}}`"},{heading:`настройте-oauth-20`,content:`Client Authentication`},{heading:`настройте-oauth-20`,content:`в body или Basic Auth (оба есть в discovery)`},{heading:`получите-токен-и-вызовите-me`,content:"**Get New Access Token** → ожидайте `access_token`. **Use Token**, затем `GET {{baseUrl}}/me`."},{heading:`получите-токен-и-вызовите-me`,content:"Что увидите: кто владеет токеном (`user_id`, `name`, …) — см. Авторизация."},{heading:`получите-токен-и-вызовите-me`,content:"Помощник Postman шлёт `grant_type=client_credentials`, не `credential_type=oauth_client`."},{heading:`authorization-code--pkce`,content:"Нужны grants `authorization_code` и обычно `refresh_token`."},{heading:`authorization-code--pkce`,content:"Значение в админке DLE и Callback URL в Postman должны совпадать **байт-в-байт**. Типичный callback Postman: `https://oauth.pstmn.io/v1/callback`. Несовпадение → ошибка на authorize без `code`."},{heading:`authorization-code--pkce`,content:"Для XenForo Callback = `https://XF_BOARD/connected_account.php` — см. XenForo."},{heading:`поля-get-new-access-token`,content:`Поле`},{heading:`поля-get-new-access-token`,content:`Значение`},{heading:`поля-get-new-access-token`,content:`Grant Type`},{heading:`поля-get-new-access-token`,content:`Authorization Code (With PKCE)`},{heading:`поля-get-new-access-token`,content:`Callback URL`},{heading:`поля-get-new-access-token`,content:`тот же, что Redirect URI клиента`},{heading:`поля-get-new-access-token`,content:`Auth URL`},{heading:`поля-get-new-access-token`,content:"`{{baseUrl}}/oauth/authorize`"},{heading:`поля-get-new-access-token`,content:`Access Token URL`},{heading:`поля-get-new-access-token`,content:"`{{baseUrl}}/oauth/token`"},{heading:`поля-get-new-access-token`,content:`Code Challenge Method`},{heading:`поля-get-new-access-token`,content:"SHA-256 (`S256`)"},{heading:`войдите-на-сайт-в-окне-postman`,content:`Нет сессии DLE → окно логина сайта. Нужно войти **в этом** окне (cookies).`},{heading:`use-token--get-me`,content:`Как в Client Credentials.`},{heading:`чего-не-ждать-от-oauth-helper`,content:"**`credential_type`** — это JSON-режим из oauth-server; Postman шлёт `grant_type`"},{heading:`чего-не-ждать-от-oauth-helper`,content:`**Implicit** — у AS его нет`},{heading:`чего-не-ждать-от-oauth-helper`,content:"**Password** — только для доверенных клиентов; проще `credential_type=auth` в oauth-server"},{heading:`если-что-то-не-работает`,content:`Симптом`},{heading:`если-что-то-не-работает`,content:`Что проверить`},{heading:`если-что-то-не-работает`,content:"Нет `code` на authorize"},{heading:`если-что-то-не-работает`,content:"Callback = Redirect URI; grant `authorization_code`"},{heading:`если-что-то-не-работает`,content:`Grant denied`},{heading:`если-что-то-не-работает`,content:`Grant отмечен у клиента`},{heading:`если-что-то-не-работает`,content:"`access_token: null` / `error=demo_mode`"},{heading:`если-что-то-не-работает`,content:`Инструкция .env`},{heading:`если-что-то-не-работает`,content:`Сразу логин DLE`},{heading:`если-что-то-не-работает`,content:`Войдите в окне Postman, не в другой вкладке`},{heading:`если-что-то-не-работает`,content:"401 на `/table`"},{heading:`если-что-то-не-работает`,content:`Bearer access\\_token, не сырой ключ (auth)`},{heading:`см-также`,content:`OAuth-клиенты`},{heading:`см-также`,content:`OAuth-сервер`},{heading:`см-также`,content:`Авторизация`}],headings:[{id:`что-нужно-заранее`,content:`Что нужно заранее`},{id:`client-credentials-быстрый-тест`,content:`Client Credentials (быстрый тест)`},{id:`настройте-oauth-20`,content:`Настройте OAuth 2.0`},{id:`получите-токен-и-вызовите-me`,content:`Получите токен и вызовите /me`},{id:`authorization-code--pkce`,content:`Authorization Code + PKCE`},{id:`поля-get-new-access-token`,content:`Поля Get New Access Token`},{id:`войдите-на-сайт-в-окне-postman`,content:`Войдите на сайт в окне Postman`},{id:`use-token--get-me`,content:`Use Token → GET /me`},{id:`чего-не-ждать-от-oauth-helper`,content:`Чего не ждать от OAuth helper`},{id:`если-что-то-не-работает`,content:`Если что-то не работает`},{id:`см-также`,content:`См. также`}]},s=[{depth:2,url:`#что-нужно-заранее`,title:(0,n.jsx)(n.Fragment,{children:`Что нужно заранее`})},{depth:2,url:`#client-credentials-быстрый-тест`,title:(0,n.jsx)(n.Fragment,{children:`Client Credentials (быстрый тест)`})},{depth:3,url:`#настройте-oauth-20`,title:(0,n.jsx)(n.Fragment,{children:`Настройте OAuth 2.0`})},{depth:3,url:`#получите-токен-и-вызовите-me`,title:(0,n.jsx)(n.Fragment,{children:`Получите токен и вызовите /me`})},{depth:2,url:`#authorization-code--pkce`,title:(0,n.jsx)(n.Fragment,{children:`Authorization Code + PKCE`})},{depth:3,url:`#поля-get-new-access-token`,title:(0,n.jsx)(n.Fragment,{children:`Поля Get New Access Token`})},{depth:3,url:`#войдите-на-сайт-в-окне-postman`,title:(0,n.jsx)(n.Fragment,{children:`Войдите на сайт в окне Postman`})},{depth:3,url:`#use-token--get-me`,title:(0,n.jsx)(n.Fragment,{children:`Use Token → GET /me`})},{depth:2,url:`#чего-не-ждать-от-oauth-helper`,title:(0,n.jsx)(n.Fragment,{children:`Чего не ждать от OAuth helper`})},{depth:2,url:`#если-что-то-не-работает`,title:(0,n.jsx)(n.Fragment,{children:`Если что-то не работает`})},{depth:2,url:`#см-также`,title:(0,n.jsx)(n.Fragment,{children:`См. также`})}];function c(e){let t={a:`a`,code:`code`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,strong:`strong`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,ul:`ul`,...e.components},{Callout:r,Step:i,Steps:a}=t;return r||u(`Callout`,!0),i||u(`Step`,!0),a||u(`Steps`,!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:[`Клиент создаёте в DevCraft: `,(0,n.jsx)(t.a,{href:`oauth-client`,children:`OAuth-клиенты`}),`. Здесь — проверка через вкладку `,(0,n.jsx)(t.strong,{children:`Authorization`}),` в Postman (классический `,(0,n.jsx)(t.code,{children:`grant_type`}),`, не `,(0,n.jsx)(t.code,{children:`credential_type`}),` из `,(0,n.jsx)(t.a,{href:`oauth-server`,children:`oauth-server`}),`).`]}),`
`,(0,n.jsxs)(t.p,{children:[`Для XenForo как relying party используйте тот же клиент и тот же Redirect URI: `,(0,n.jsx)(t.a,{href:`xenforo`,children:`XenForo`}),`.`]}),`
`,(0,n.jsx)(r,{type:`info`,title:`API XenForo — это другое`,children:(0,n.jsxs)(t.p,{children:[`Проверка `,(0,n.jsx)(t.strong,{children:`API XenForo`}),` идёт на `,(0,n.jsx)(t.code,{children:`{board}/oauth2/authorize`}),` и `,(0,n.jsx)(t.code,{children:`{board}/api/oauth2/token`}),`, identity — `,(0,n.jsx)(t.code,{children:`GET /api/me`}),`. Это не `,(0,n.jsx)(t.code,{children:`/api/v2`}),` и не клиент из DevCraft. Таблица URL — в `,(0,n.jsx)(t.a,{href:`xenforo`,children:`гайде XenForo`}),`.`]})}),`
`,(0,n.jsx)(t.h2,{id:`что-нужно-заранее`,children:`Что нужно заранее`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[`OAuth-клиент создан, `,(0,n.jsx)(t.code,{children:`client_secret`}),` сохранён`]}),`
`,(0,n.jsxs)(t.li,{children:[`Корневой `,(0,n.jsx)(t.code,{children:`.env`}),` без демо-режима — `,(0,n.jsx)(t.a,{href:`env`,children:`Инструкция .env`})]}),`
`,(0,n.jsx)(t.li,{children:`URL эндпоинтов с панели AS или из discovery`}),`
`]}),`
`,(0,n.jsx)(t.p,{children:`Переменные коллекции:`}),`
`,(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`Переменная`}),(0,n.jsx)(t.th,{children:`Значение`})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:`baseUrl`})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:`https://ВАШ_САЙТ/api/v2`})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:`clientId`})}),(0,n.jsxs)(t.td,{children:[(0,n.jsx)(t.code,{children:`client_id`}),` из админки`]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:`clientSecret`})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:`client_secret`})})]})]})]}),`
`,(0,n.jsx)(t.h2,{id:`client-credentials-быстрый-тест`,children:`Client Credentials (быстрый тест)`}),`
`,(0,n.jsxs)(t.p,{children:[`У клиента должен быть grant `,(0,n.jsx)(t.code,{children:`client_credentials`}),`. Redirect URI не нужен.`]}),`
`,(0,n.jsxs)(a,{children:[(0,n.jsxs)(i,{children:[(0,n.jsx)(t.h3,{id:`настройте-oauth-20`,children:`Настройте OAuth 2.0`}),(0,n.jsxs)(t.p,{children:[`Запрос (например `,(0,n.jsx)(t.code,{children:`GET {{baseUrl}}/me`}),`) → `,(0,n.jsx)(t.strong,{children:`Authorization`}),` → Type `,(0,n.jsx)(t.strong,{children:`OAuth 2.0`}),` → `,(0,n.jsx)(t.strong,{children:`Get New Access Token`}),`.`]}),(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`Поле Postman`}),(0,n.jsx)(t.th,{children:`Значение`})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`Grant Type`}),(0,n.jsx)(t.td,{children:`Client Credentials`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`Access Token URL`}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:`{{baseUrl}}/oauth/token`})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`Client ID / Secret`}),(0,n.jsxs)(t.td,{children:[(0,n.jsx)(t.code,{children:`{{clientId}}`}),` / `,(0,n.jsx)(t.code,{children:`{{clientSecret}}`})]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`Client Authentication`}),(0,n.jsx)(t.td,{children:`в body или Basic Auth (оба есть в discovery)`})]})]})]})]}),(0,n.jsxs)(i,{children:[(0,n.jsx)(t.h3,{id:`получите-токен-и-вызовите-me`,children:`Получите токен и вызовите /me`}),(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Get New Access Token`}),` → ожидайте `,(0,n.jsx)(t.code,{children:`access_token`}),`. `,(0,n.jsx)(t.strong,{children:`Use Token`}),`, затем `,(0,n.jsx)(t.code,{children:`GET {{baseUrl}}/me`}),`.`]}),(0,n.jsxs)(t.p,{children:[`Что увидите: кто владеет токеном (`,(0,n.jsx)(t.code,{children:`user_id`}),`, `,(0,n.jsx)(t.code,{children:`name`}),`, …) — см. `,(0,n.jsx)(t.a,{href:`auth`,children:`Авторизация`}),`.`]})]})]}),`
`,(0,n.jsxs)(t.p,{children:[`Помощник Postman шлёт `,(0,n.jsx)(t.code,{children:`grant_type=client_credentials`}),`, не `,(0,n.jsx)(t.code,{children:`credential_type=oauth_client`}),`.`]}),`
`,(0,n.jsx)(t.h2,{id:`authorization-code--pkce`,children:`Authorization Code + PKCE`}),`
`,(0,n.jsxs)(t.p,{children:[`Нужны grants `,(0,n.jsx)(t.code,{children:`authorization_code`}),` и обычно `,(0,n.jsx)(t.code,{children:`refresh_token`}),`.`]}),`
`,(0,n.jsxs)(r,{type:`warn`,title:`Redirect URI = Callback URL`,children:[(0,n.jsxs)(t.p,{children:[`Значение в админке DLE и Callback URL в Postman должны совпадать `,(0,n.jsx)(t.strong,{children:`байт-в-байт`}),`. Типичный callback Postman: `,(0,n.jsx)(t.code,{children:`https://oauth.pstmn.io/v1/callback`}),`. Несовпадение → ошибка на authorize без `,(0,n.jsx)(t.code,{children:`code`}),`.`]}),(0,n.jsxs)(t.p,{children:[`Для XenForo Callback = `,(0,n.jsx)(t.code,{children:`https://XF_BOARD/connected_account.php`}),` — см. `,(0,n.jsx)(t.a,{href:`xenforo`,children:`XenForo`}),`.`]})]}),`
`,(0,n.jsxs)(a,{children:[(0,n.jsxs)(i,{children:[(0,n.jsx)(t.h3,{id:`поля-get-new-access-token`,children:`Поля Get New Access Token`}),(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`Поле`}),(0,n.jsx)(t.th,{children:`Значение`})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`Grant Type`}),(0,n.jsx)(t.td,{children:`Authorization Code (With PKCE)`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`Callback URL`}),(0,n.jsx)(t.td,{children:`тот же, что Redirect URI клиента`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`Auth URL`}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:`{{baseUrl}}/oauth/authorize`})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`Access Token URL`}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:`{{baseUrl}}/oauth/token`})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`Code Challenge Method`}),(0,n.jsxs)(t.td,{children:[`SHA-256 (`,(0,n.jsx)(t.code,{children:`S256`}),`)`]})]})]})]})]}),(0,n.jsxs)(i,{children:[(0,n.jsx)(t.h3,{id:`войдите-на-сайт-в-окне-postman`,children:`Войдите на сайт в окне Postman`}),(0,n.jsxs)(t.p,{children:[`Нет сессии DLE → окно логина сайта. Нужно войти `,(0,n.jsx)(t.strong,{children:`в этом`}),` окне (cookies).`]})]}),(0,n.jsxs)(i,{children:[(0,n.jsx)(t.h3,{id:`use-token--get-me`,children:`Use Token → GET /me`}),(0,n.jsx)(t.p,{children:`Как в Client Credentials.`})]})]}),`
`,(0,n.jsx)(t.h2,{id:`чего-не-ждать-от-oauth-helper`,children:`Чего не ждать от OAuth helper`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:(0,n.jsx)(t.code,{children:`credential_type`})}),` — это JSON-режим из `,(0,n.jsx)(t.a,{href:`oauth-server`,children:`oauth-server`}),`; Postman шлёт `,(0,n.jsx)(t.code,{children:`grant_type`})]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:`Implicit`}),` — у AS его нет`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:`Password`}),` — только для доверенных клиентов; проще `,(0,n.jsx)(t.code,{children:`credential_type=auth`}),` в `,(0,n.jsx)(t.a,{href:`oauth-server`,children:`oauth-server`})]}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`если-что-то-не-работает`,children:`Если что-то не работает`}),`
`,(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`Симптом`}),(0,n.jsx)(t.th,{children:`Что проверить`})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsxs)(t.td,{children:[`Нет `,(0,n.jsx)(t.code,{children:`code`}),` на authorize`]}),(0,n.jsxs)(t.td,{children:[`Callback = Redirect URI; grant `,(0,n.jsx)(t.code,{children:`authorization_code`})]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`Grant denied`}),(0,n.jsx)(t.td,{children:`Grant отмечен у клиента`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsxs)(t.td,{children:[(0,n.jsx)(t.code,{children:`access_token: null`}),` / `,(0,n.jsx)(t.code,{children:`error=demo_mode`})]}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:`env`,children:`Инструкция .env`})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`Сразу логин DLE`}),(0,n.jsx)(t.td,{children:`Войдите в окне Postman, не в другой вкладке`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsxs)(t.td,{children:[`401 на `,(0,n.jsx)(t.code,{children:`/table`})]}),(0,n.jsxs)(t.td,{children:[`Bearer access_token, не сырой ключ (`,(0,n.jsx)(t.a,{href:`auth`,children:`auth`}),`)`]})]})]})]}),`
`,(0,n.jsx)(t.h2,{id:`см-также`,children:`См. также`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`oauth-client`,children:`OAuth-клиенты`})}),`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`oauth-server`,children:`OAuth-сервер`})}),`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`auth`,children:`Авторизация`})}),`
`]})]})}function l(e={}){let{wrapper:t}=e.components||{};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}function u(e,t){throw Error(`Expected `+(t?`component`:`object`)+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}export{a as _markdown,l as default,r as frontmatter,i as lastModified,o as structuredData,s as toc};