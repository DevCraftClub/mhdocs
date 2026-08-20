import{r as e}from"./rolldown-runtime-QTnfLwEv.js";import{t}from"./jsx-runtime-By8HlURe.js";var n=e(t()),r={title:`XenForo и DLE API`,description:`Два направления OAuth: логин на форуме через DLE и токены XenForo для XF API.`,version:`200.1.0`},i=new Date(1787217967e3),a=`

Здесь два **разных** сценария. Не смешивайте URL.

Примеры: XenForo \`http://localhost:8789\`, DLE \`http://dle200.test\`.

<Callout type="warn" title="Кто выдаёт токен?">
  | Направление       | Кто сервер | Где заводят клиент                       | Authorize / token      |
  | ----------------- | ---------- | ---------------------------------------- | ---------------------- |
  | **DLE → XenForo** | XenForo    | ACP XF: OAuth2 clients                   | \`{XF}/oauth2/…\`        |
  | **XenForo → DLE** | DLE API    | DevCraft → [OAuth-клиенты](oauth-client) | \`{DLE}/api/v2/oauth/…\` |

  Board URL Connected Account «XenForo» = **другой форум**, не сайт DLE.
</Callout>

Клиент DLE проверяйте в [Postman](postman).

## DLE → XenForo (нужен API форума) [#dle--xenforo-нужен-api-форума]

Приложение получает токен **у XenForo** и ходит в [XF API](https://docs.xenforo.com/api). Это не логин на DLE и не клиент DevCraft.

ACP: **Setup → OAuth2 clients → Add**.

| Поле           | Что ставить                                 |
| -------------- | ------------------------------------------- |
| Client type    | Confidential (есть secret) или Public       |
| Redirect URIs  | callback **вашего** приложения, байт-в-байт |
| Allowed scopes | минимум \`user:read\`                         |
| Active         | включить                                    |

Endpoints с формы XF (пример):

* Authorize: \`http://localhost:8789/oauth2/authorize\`
* Token: \`http://localhost:8789/api/oauth2/token\`

Identity: \`GET http://localhost:8789/api/me\` с Bearer **этого** клиента. Форма ответа XF: \`{ "me": { "user_id": … } }\` — не путать с DLE \`/api/v2/me\`.

SSO XF→XF: на втором форуме Connected accounts → XenForo, Board URL = первый форум.

## XenForo → DLE (логин на форуме через аккаунт DLE) [#xenforo--dle-логин-на-форуме-через-аккаунт-dle]

### На стороне DLE [#на-стороне-dle]

1. API-ключ с [уровнем](access-levels).
2. OAuth-клиент: grants \`authorization_code\` + \`refresh_token\`.
3. Redirect URI = Board URL XF + \`/connected_account.php\`, например \`http://localhost:8789/connected_account.php\`.
4. Сохраните секрет; прогоните code-flow в [Postman](postman) с тем же Callback.

### Add-on на XenForo [#add-on-на-xenforo]

Готовый провайдер: &#x2A;*[DLE API Connection Provider](../../../xenforo/dle_api_connection_provider/1.0.0/getting_started)**. После установки: **Setup → Connected accounts → DLE API** — base URL, client\\_id, secret → **Test provider**.

Настройка: [configuration](../../../xenforo/dle_api_connection_provider/1.0.0/guides/configuration).

### League GenericProvider (скрипт, не кнопка логина) [#league-genericprovider-скрипт-не-кнопка-логина]

\`\`\`php
$provider = new \\League\\OAuth2\\Client\\Provider\\GenericProvider([
    'clientId'                => '…',
    'clientSecret'            => '…',
    'redirectUri'             => 'http://localhost:8789/connected_account.php',
    'urlAuthorize'            => 'http://dle200.test/api/v2/oauth/authorize',
    'urlAccessToken'          => 'http://dle200.test/api/v2/oauth/token',
    'urlResourceOwnerDetails' => 'http://dle200.test/api/v2/me',
]);
\`\`\`

## Какой URL в Postman [#какой-url-в-postman]

| Цель          | Auth                       | Token                  | Identity         |
| ------------- | -------------------------- | ---------------------- | ---------------- |
| Токен DLE     | \`…/api/v2/oauth/authorize\` | \`…/api/v2/oauth/token\` | \`GET /api/v2/me\` |
| Токен XenForo | \`…/oauth2/authorize\`       | \`…/api/oauth2/token\`   | \`GET /api/me\`    |

Первая строка — [гайд Postman](postman).

## Если что-то не работает [#если-что-то-не-работает]

| Симптом                     | Что проверить                                                                    |
| --------------------------- | -------------------------------------------------------------------------------- |
| Нет \`code\` на authorize DLE | Redirect URI = \`…/connected_account.php\` байт-в-байт; grant \`authorization_code\` |
| 404 на token                | Не перепутать XF \`/api/oauth2/token\` и DLE \`/api/v2/oauth/token\`                 |
| Штатный CA «XenForo» к DLE  | Не подойдёт — нужен add-on                                                       |
| \`error=demo_mode\`           | [Инструкция .env](env)                                                           |
| XF \`/api/me\` 401            | Bearer от **XF**-токена; scope \`user:read\`                                       |

## См. также [#см-также]

* [DLE API Connection Provider](../../../xenforo/dle_api_connection_provider/1.0.0/getting_started)
* [OAuth-клиенты](oauth-client)
* [OAuth-сервер](oauth-server)
* [Авторизация](auth)
`,o={contents:[{heading:void 0,content:`Здесь два **разных** сценария. Не смешивайте URL.`},{heading:void 0,content:"Примеры: XenForo `http://localhost:8789`, DLE `http://dle200.test`."},{heading:void 0,content:`Направление`},{heading:void 0,content:`Кто сервер`},{heading:void 0,content:`Где заводят клиент`},{heading:void 0,content:`Authorize / token`},{heading:void 0,content:`**DLE → XenForo**`},{heading:void 0,content:`XenForo`},{heading:void 0,content:`ACP XF: OAuth2 clients`},{heading:void 0,content:"`{XF}/oauth2/…`"},{heading:void 0,content:`**XenForo → DLE**`},{heading:void 0,content:`DLE API`},{heading:void 0,content:`DevCraft → OAuth-клиенты`},{heading:void 0,content:"`{DLE}/api/v2/oauth/…`"},{heading:void 0,content:`Board URL Connected Account «XenForo» = **другой форум**, не сайт DLE.`},{heading:void 0,content:`Клиент DLE проверяйте в Postman.`},{heading:`dle--xenforo-нужен-api-форума`,content:`Приложение получает токен **у XenForo** и ходит в XF API. Это не логин на DLE и не клиент DevCraft.`},{heading:`dle--xenforo-нужен-api-форума`,content:`ACP: **Setup → OAuth2 clients → Add**.`},{heading:`dle--xenforo-нужен-api-форума`,content:`Поле`},{heading:`dle--xenforo-нужен-api-форума`,content:`Что ставить`},{heading:`dle--xenforo-нужен-api-форума`,content:`Client type`},{heading:`dle--xenforo-нужен-api-форума`,content:`Confidential (есть secret) или Public`},{heading:`dle--xenforo-нужен-api-форума`,content:`Redirect URIs`},{heading:`dle--xenforo-нужен-api-форума`,content:`callback **вашего** приложения, байт-в-байт`},{heading:`dle--xenforo-нужен-api-форума`,content:`Allowed scopes`},{heading:`dle--xenforo-нужен-api-форума`,content:"минимум `user:read`"},{heading:`dle--xenforo-нужен-api-форума`,content:`Active`},{heading:`dle--xenforo-нужен-api-форума`,content:`включить`},{heading:`dle--xenforo-нужен-api-форума`,content:`Endpoints с формы XF (пример):`},{heading:`dle--xenforo-нужен-api-форума`,content:"Authorize: `http://localhost:8789/oauth2/authorize`"},{heading:`dle--xenforo-нужен-api-форума`,content:"Token: `http://localhost:8789/api/oauth2/token`"},{heading:`dle--xenforo-нужен-api-форума`,content:'Identity: `GET http://localhost:8789/api/me` с Bearer **этого** клиента. Форма ответа XF: `{ "me": { "user_id": … } }` — не путать с DLE `/api/v2/me`.'},{heading:`dle--xenforo-нужен-api-форума`,content:`SSO XF→XF: на втором форуме Connected accounts → XenForo, Board URL = первый форум.`},{heading:`на-стороне-dle`,content:`API-ключ с уровнем.`},{heading:`на-стороне-dle`,content:"OAuth-клиент: grants `authorization_code` + `refresh_token`."},{heading:`на-стороне-dle`,content:"Redirect URI = Board URL XF + `/connected_account.php`, например `http://localhost:8789/connected_account.php`."},{heading:`на-стороне-dle`,content:`Сохраните секрет; прогоните code-flow в Postman с тем же Callback.`},{heading:`add-on-на-xenforo`,content:`Готовый провайдер: **DLE API Connection Provider**. После установки: **Setup → Connected accounts → DLE API** — base URL, client\\_id, secret → **Test provider**.`},{heading:`add-on-на-xenforo`,content:`Настройка: configuration.`},{heading:`какой-url-в-postman`,content:`Цель`},{heading:`какой-url-в-postman`,content:`Auth`},{heading:`какой-url-в-postman`,content:`Token`},{heading:`какой-url-в-postman`,content:`Identity`},{heading:`какой-url-в-postman`,content:`Токен DLE`},{heading:`какой-url-в-postman`,content:"`…/api/v2/oauth/authorize`"},{heading:`какой-url-в-postman`,content:"`…/api/v2/oauth/token`"},{heading:`какой-url-в-postman`,content:"`GET /api/v2/me`"},{heading:`какой-url-в-postman`,content:`Токен XenForo`},{heading:`какой-url-в-postman`,content:"`…/oauth2/authorize`"},{heading:`какой-url-в-postman`,content:"`…/api/oauth2/token`"},{heading:`какой-url-в-postman`,content:"`GET /api/me`"},{heading:`какой-url-в-postman`,content:`Первая строка — гайд Postman.`},{heading:`если-что-то-не-работает`,content:`Симптом`},{heading:`если-что-то-не-работает`,content:`Что проверить`},{heading:`если-что-то-не-работает`,content:"Нет `code` на authorize DLE"},{heading:`если-что-то-не-работает`,content:"Redirect URI = `…/connected_account.php` байт-в-байт; grant `authorization_code`"},{heading:`если-что-то-не-работает`,content:`404 на token`},{heading:`если-что-то-не-работает`,content:"Не перепутать XF `/api/oauth2/token` и DLE `/api/v2/oauth/token`"},{heading:`если-что-то-не-работает`,content:`Штатный CA «XenForo» к DLE`},{heading:`если-что-то-не-работает`,content:`Не подойдёт — нужен add-on`},{heading:`если-что-то-не-работает`,content:"`error=demo_mode`"},{heading:`если-что-то-не-работает`,content:`Инструкция .env`},{heading:`если-что-то-не-работает`,content:"XF `/api/me` 401"},{heading:`если-что-то-не-работает`,content:"Bearer от **XF**-токена; scope `user:read`"},{heading:`см-также`,content:`DLE API Connection Provider`},{heading:`см-также`,content:`OAuth-клиенты`},{heading:`см-также`,content:`OAuth-сервер`},{heading:`см-также`,content:`Авторизация`}],headings:[{id:`dle--xenforo-нужен-api-форума`,content:`DLE → XenForo (нужен API форума)`},{id:`xenforo--dle-логин-на-форуме-через-аккаунт-dle`,content:`XenForo → DLE (логин на форуме через аккаунт DLE)`},{id:`на-стороне-dle`,content:`На стороне DLE`},{id:`add-on-на-xenforo`,content:`Add-on на XenForo`},{id:`league-genericprovider-скрипт-не-кнопка-логина`,content:`League GenericProvider (скрипт, не кнопка логина)`},{id:`какой-url-в-postman`,content:`Какой URL в Postman`},{id:`если-что-то-не-работает`,content:`Если что-то не работает`},{id:`см-также`,content:`См. также`}]},s=[{depth:2,url:`#dle--xenforo-нужен-api-форума`,title:(0,n.jsx)(n.Fragment,{children:`DLE → XenForo (нужен API форума)`})},{depth:2,url:`#xenforo--dle-логин-на-форуме-через-аккаунт-dle`,title:(0,n.jsx)(n.Fragment,{children:`XenForo → DLE (логин на форуме через аккаунт DLE)`})},{depth:3,url:`#на-стороне-dle`,title:(0,n.jsx)(n.Fragment,{children:`На стороне DLE`})},{depth:3,url:`#add-on-на-xenforo`,title:(0,n.jsx)(n.Fragment,{children:`Add-on на XenForo`})},{depth:3,url:`#league-genericprovider-скрипт-не-кнопка-логина`,title:(0,n.jsx)(n.Fragment,{children:`League GenericProvider (скрипт, не кнопка логина)`})},{depth:2,url:`#какой-url-в-postman`,title:(0,n.jsx)(n.Fragment,{children:`Какой URL в Postman`})},{depth:2,url:`#если-что-то-не-работает`,title:(0,n.jsx)(n.Fragment,{children:`Если что-то не работает`})},{depth:2,url:`#см-также`,title:(0,n.jsx)(n.Fragment,{children:`См. также`})}];function c(e){let t={a:`a`,code:`code`,h2:`h2`,h3:`h3`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,span:`span`,strong:`strong`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,ul:`ul`,...e.components},{Callout:r}=t;return r||u(`Callout`,!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:[`Здесь два `,(0,n.jsx)(t.strong,{children:`разных`}),` сценария. Не смешивайте URL.`]}),`
`,(0,n.jsxs)(t.p,{children:[`Примеры: XenForo `,(0,n.jsx)(t.code,{children:`http://localhost:8789`}),`, DLE `,(0,n.jsx)(t.code,{children:`http://dle200.test`}),`.`]}),`
`,(0,n.jsxs)(r,{type:`warn`,title:`Кто выдаёт токен?`,children:[(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`Направление`}),(0,n.jsx)(t.th,{children:`Кто сервер`}),(0,n.jsx)(t.th,{children:`Где заводят клиент`}),(0,n.jsx)(t.th,{children:`Authorize / token`})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:`DLE → XenForo`})}),(0,n.jsx)(t.td,{children:`XenForo`}),(0,n.jsx)(t.td,{children:`ACP XF: OAuth2 clients`}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:`{XF}/oauth2/…`})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:`XenForo → DLE`})}),(0,n.jsx)(t.td,{children:`DLE API`}),(0,n.jsxs)(t.td,{children:[`DevCraft → `,(0,n.jsx)(t.a,{href:`oauth-client`,children:`OAuth-клиенты`})]}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:`{DLE}/api/v2/oauth/…`})})]})]})]}),(0,n.jsxs)(t.p,{children:[`Board URL Connected Account «XenForo» = `,(0,n.jsx)(t.strong,{children:`другой форум`}),`, не сайт DLE.`]})]}),`
`,(0,n.jsxs)(t.p,{children:[`Клиент DLE проверяйте в `,(0,n.jsx)(t.a,{href:`postman`,children:`Postman`}),`.`]}),`
`,(0,n.jsx)(t.h2,{id:`dle--xenforo-нужен-api-форума`,children:`DLE → XenForo (нужен API форума)`}),`
`,(0,n.jsxs)(t.p,{children:[`Приложение получает токен `,(0,n.jsx)(t.strong,{children:`у XenForo`}),` и ходит в `,(0,n.jsx)(t.a,{href:`https://docs.xenforo.com/api`,children:`XF API`}),`. Это не логин на DLE и не клиент DevCraft.`]}),`
`,(0,n.jsxs)(t.p,{children:[`ACP: `,(0,n.jsx)(t.strong,{children:`Setup → OAuth2 clients → Add`}),`.`]}),`
`,(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`Поле`}),(0,n.jsx)(t.th,{children:`Что ставить`})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`Client type`}),(0,n.jsx)(t.td,{children:`Confidential (есть secret) или Public`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`Redirect URIs`}),(0,n.jsxs)(t.td,{children:[`callback `,(0,n.jsx)(t.strong,{children:`вашего`}),` приложения, байт-в-байт`]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`Allowed scopes`}),(0,n.jsxs)(t.td,{children:[`минимум `,(0,n.jsx)(t.code,{children:`user:read`})]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`Active`}),(0,n.jsx)(t.td,{children:`включить`})]})]})]}),`
`,(0,n.jsx)(t.p,{children:`Endpoints с формы XF (пример):`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[`Authorize: `,(0,n.jsx)(t.code,{children:`http://localhost:8789/oauth2/authorize`})]}),`
`,(0,n.jsxs)(t.li,{children:[`Token: `,(0,n.jsx)(t.code,{children:`http://localhost:8789/api/oauth2/token`})]}),`
`]}),`
`,(0,n.jsxs)(t.p,{children:[`Identity: `,(0,n.jsx)(t.code,{children:`GET http://localhost:8789/api/me`}),` с Bearer `,(0,n.jsx)(t.strong,{children:`этого`}),` клиента. Форма ответа XF: `,(0,n.jsx)(t.code,{children:`{ "me": { "user_id": … } }`}),` — не путать с DLE `,(0,n.jsx)(t.code,{children:`/api/v2/me`}),`.`]}),`
`,(0,n.jsx)(t.p,{children:`SSO XF→XF: на втором форуме Connected accounts → XenForo, Board URL = первый форум.`}),`
`,(0,n.jsx)(t.h2,{id:`xenforo--dle-логин-на-форуме-через-аккаунт-dle`,children:`XenForo → DLE (логин на форуме через аккаунт DLE)`}),`
`,(0,n.jsx)(t.h3,{id:`на-стороне-dle`,children:`На стороне DLE`}),`
`,(0,n.jsxs)(t.ol,{children:[`
`,(0,n.jsxs)(t.li,{children:[`API-ключ с `,(0,n.jsx)(t.a,{href:`access-levels`,children:`уровнем`}),`.`]}),`
`,(0,n.jsxs)(t.li,{children:[`OAuth-клиент: grants `,(0,n.jsx)(t.code,{children:`authorization_code`}),` + `,(0,n.jsx)(t.code,{children:`refresh_token`}),`.`]}),`
`,(0,n.jsxs)(t.li,{children:[`Redirect URI = Board URL XF + `,(0,n.jsx)(t.code,{children:`/connected_account.php`}),`, например `,(0,n.jsx)(t.code,{children:`http://localhost:8789/connected_account.php`}),`.`]}),`
`,(0,n.jsxs)(t.li,{children:[`Сохраните секрет; прогоните code-flow в `,(0,n.jsx)(t.a,{href:`postman`,children:`Postman`}),` с тем же Callback.`]}),`
`]}),`
`,(0,n.jsx)(t.h3,{id:`add-on-на-xenforo`,children:`Add-on на XenForo`}),`
`,(0,n.jsxs)(t.p,{children:[`Готовый провайдер: `,(0,n.jsx)(t.strong,{children:(0,n.jsx)(t.a,{href:`../../../xenforo/dle_api_connection_provider/1.0.0/getting_started`,children:`DLE API Connection Provider`})}),`. После установки: `,(0,n.jsx)(t.strong,{children:`Setup → Connected accounts → DLE API`}),` — base URL, client_id, secret → `,(0,n.jsx)(t.strong,{children:`Test provider`}),`.`]}),`
`,(0,n.jsxs)(t.p,{children:[`Настройка: `,(0,n.jsx)(t.a,{href:`../../../xenforo/dle_api_connection_provider/1.0.0/guides/configuration`,children:`configuration`}),`.`]}),`
`,(0,n.jsx)(t.h3,{id:`league-genericprovider-скрипт-не-кнопка-логина`,children:`League GenericProvider (скрипт, не кнопка логина)`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M7.01 10.207h-.944l-.515 2.648h.838c.556 0 .97-.105 1.242-.314.272-.21.455-.559.55-1.049.092-.47.05-.802-.124-.995-.175-.193-.523-.29-1.047-.29zM12 5.688C5.373 5.688 0 8.514 0 12s5.373 6.313 12 6.313S24 15.486 24 12c0-3.486-5.373-6.312-12-6.312zm-3.26 7.451c-.261.25-.575.438-.917.551-.336.108-.765.164-1.285.164H5.357l-.327 1.681H3.652l1.23-6.326h2.65c.797 0 1.378.209 1.744.628.366.418.476 1.002.33 1.752a2.836 2.836 0 0 1-.305.847c-.143.255-.33.49-.561.703zm4.024.715l.543-2.799c.063-.318.039-.536-.068-.651-.107-.116-.336-.174-.687-.174H11.46l-.704 3.625H9.388l1.23-6.327h1.367l-.327 1.682h1.218c.767 0 1.295.134 1.586.401s.378.7.263 1.299l-.572 2.944h-1.389zm7.597-2.265a2.782 2.782 0 0 1-.305.847c-.143.255-.33.49-.561.703a2.44 2.44 0 0 1-.917.551c-.336.108-.765.164-1.286.164h-1.18l-.327 1.682h-1.378l1.23-6.326h2.649c.797 0 1.378.209 1.744.628.366.417.477 1.001.331 1.751zM17.766 10.207h-.943l-.516 2.648h.838c.557 0 .971-.105 1.242-.314.272-.21.455-.559.551-1.049.092-.47.049-.802-.125-.995s-.524-.29-1.047-.29z" fill="currentColor" /></svg>`,children:(0,n.jsxs)(t.code,{children:[(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`$provider `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`=`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:` new`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:` \\League\\OAuth2\\Client\\Provider\\GenericProvider`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`([`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`    'clientId'`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`                =>`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:` '…'`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`,`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`    'clientSecret'`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`            =>`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:` '…'`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`,`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`    'redirectUri'`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`             =>`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:` 'http://localhost:8789/connected_account.php'`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`,`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`    'urlAuthorize'`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`            =>`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:` 'http://dle200.test/api/v2/oauth/authorize'`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`,`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`    'urlAccessToken'`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`          =>`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:` 'http://dle200.test/api/v2/oauth/token'`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`,`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`    'urlResourceOwnerDetails'`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:` =>`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:` 'http://dle200.test/api/v2/me'`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`,`})]}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`]);`})})]})})}),`
`,(0,n.jsx)(t.h2,{id:`какой-url-в-postman`,children:`Какой URL в Postman`}),`
`,(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`Цель`}),(0,n.jsx)(t.th,{children:`Auth`}),(0,n.jsx)(t.th,{children:`Token`}),(0,n.jsx)(t.th,{children:`Identity`})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`Токен DLE`}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:`…/api/v2/oauth/authorize`})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:`…/api/v2/oauth/token`})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:`GET /api/v2/me`})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`Токен XenForo`}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:`…/oauth2/authorize`})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:`…/api/oauth2/token`})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:`GET /api/me`})})]})]})]}),`
`,(0,n.jsxs)(t.p,{children:[`Первая строка — `,(0,n.jsx)(t.a,{href:`postman`,children:`гайд Postman`}),`.`]}),`
`,(0,n.jsx)(t.h2,{id:`если-что-то-не-работает`,children:`Если что-то не работает`}),`
`,(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`Симптом`}),(0,n.jsx)(t.th,{children:`Что проверить`})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsxs)(t.td,{children:[`Нет `,(0,n.jsx)(t.code,{children:`code`}),` на authorize DLE`]}),(0,n.jsxs)(t.td,{children:[`Redirect URI = `,(0,n.jsx)(t.code,{children:`…/connected_account.php`}),` байт-в-байт; grant `,(0,n.jsx)(t.code,{children:`authorization_code`})]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`404 на token`}),(0,n.jsxs)(t.td,{children:[`Не перепутать XF `,(0,n.jsx)(t.code,{children:`/api/oauth2/token`}),` и DLE `,(0,n.jsx)(t.code,{children:`/api/v2/oauth/token`})]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`Штатный CA «XenForo» к DLE`}),(0,n.jsx)(t.td,{children:`Не подойдёт — нужен add-on`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:`error=demo_mode`})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:`env`,children:`Инструкция .env`})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsxs)(t.td,{children:[`XF `,(0,n.jsx)(t.code,{children:`/api/me`}),` 401`]}),(0,n.jsxs)(t.td,{children:[`Bearer от `,(0,n.jsx)(t.strong,{children:`XF`}),`-токена; scope `,(0,n.jsx)(t.code,{children:`user:read`})]})]})]})]}),`
`,(0,n.jsx)(t.h2,{id:`см-также`,children:`См. также`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`../../../xenforo/dle_api_connection_provider/1.0.0/getting_started`,children:`DLE API Connection Provider`})}),`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`oauth-client`,children:`OAuth-клиенты`})}),`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`oauth-server`,children:`OAuth-сервер`})}),`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`auth`,children:`Авторизация`})}),`
`]})]})}function l(e={}){let{wrapper:t}=e.components||{};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}function u(e,t){throw Error(`Expected `+(t?`component`:`object`)+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}export{a as _markdown,l as default,r as frontmatter,i as lastModified,o as structuredData,s as toc};