import{r as e}from"./rolldown-runtime-QTnfLwEv.js";import{t}from"./jsx-runtime-By8HlURe.js";var n=e(t()),r={title:`OAuth-клиенты`,description:`Как завести приложение в админке DLE API: ключ, grants, redirect, секрет.`,version:`200.1.0`},i=new Date(1787654208e3),a=`

OAuth-клиент — это запись «внешнее приложение» в DevCraft → **DLE API** → **OAuth-клиенты**. Права токена = права **API-ключа**, к которому клиент привязан. Сам сайт при этом раздаёт токены — см. [OAuth-сервер](oauth-server).

## Что нужно заранее [#что-нужно-заранее]

* [Установка](../install)
* API-ключ с нужным [уровнем доступа](access-levels)

## URL сервера (копируйте из админки) [#url-сервера-копируйте-из-админки]

Над списком клиентов — панель адресов (база \`/api/v2\`):

| Название  | Путь                                      |
| --------- | ----------------------------------------- |
| discovery | \`/.well-known/oauth-authorization-server\` |
| authorize | \`/oauth/authorize\`                        |
| token     | \`/oauth/token\`                            |
| revoke    | \`/oauth/revoke\`                           |
| userinfo  | \`/oauth/userinfo\`                         |

Их же отдаёт discovery JSON. Сценарии с curl: [oauth-server](oauth-server).

## Создание клиента [#создание-клиента]

<Steps>
  <Step>
    ### Создайте API-ключ [#создайте-api-ключ]

    Страница **Ключи** — без ключа клиенту не к чему привязать права.
  </Step>

  <Step>
    ### Заполните форму «Создать клиент» [#заполните-форму-создать-клиент]

    | Поле         | Обязательно             | Простыми словами                                  |
    | ------------ | ----------------------- | ------------------------------------------------- |
    | Название     | нет                     | Подпись в списке; пусто → подставится \`client_id\` |
    | API-ключ     | **да**                  | Какие таблицы и действия разрешены токену         |
    | Redirect URI | для входа через браузер | Точный URL возврата; для M2M можно пусто          |
    | Grant types  | **да** (≥1)             | Способы выдачи токена                             |

    Сервер сам выдаёт \`client_id\` и \`client_secret\`. **Секрет показывают один раз** — сохраните сразу. Потом только «Пересоздать client\\_secret».
  </Step>
</Steps>

PKCE (\`code_challenge\` / \`code_verifier\`) в форме нет — их шлёт приложение на authorize/token.

Проверка: [Postman](postman). Связка с форумом: [XenForo](xenforo).

## Редактирование [#редактирование]

* \`client_id\` **не меняется**.
* Можно менять название, ключ, Redirect URI, grants, флаг **Активен**.
* Неактивный клиент новые токены не получает.
* Секрет — только пересоздание; старый сразу мёртв.

## Какой grant выбрать [#какой-grant-выбрать]

| Grant                                          | Когда                                                                                |
| ---------------------------------------------- | ------------------------------------------------------------------------------------ |
| \`authorization_code\` (+ часто \`refresh_token\`) | Пользователь логинится через сайт DLE (SPA, внешнее приложение) — нужен Redirect URI |
| \`client_credentials\`                           | Сервер-к-серверу, без пользователя                                                   |
| \`password\`                                     | Логин/пароль в теле запроса — только доверенным клиентам                             |
| \`refresh_token\`                                | Обновить access\\_token после code-flow                                               |

Берите минимум grants. Redirect URI для code-flow должен совпадать с запросом **байт-в-байт**.

Связь с упрощённым \`credential_type\` и примерами curl: [oauth-server](oauth-server), [auth](auth).

## Если что-то не работает [#если-что-то-не-работает]

| Симптом                        | Что проверить                                               |
| ------------------------------ | ----------------------------------------------------------- |
| Не создаётся клиент            | Выбран ключ; отмечен хотя бы один grant                     |
| Ошибка на authorize            | Redirect URI = URI клиента; есть grant \`authorization_code\` |
| \`invalid_grant\`                | Нужный grant включён у клиента                              |
| Потерян секрет                 | «Пересоздать client\\_secret»                                |
| Токен \`null\` при верных данных | [Инструкция .env](env) — часто \`DEMO_MODE\`                  |
| 401 на \`/table\`                | Нужен Bearer от token, не сырой API-ключ ([auth](auth))     |

## См. также [#см-также]

* [OAuth-сервер](oauth-server)
* [Проверка в Postman](postman)
* [Авторизация](auth)
* [Безопасность](security)
`,o={contents:[{heading:void 0,content:`OAuth-клиент — это запись «внешнее приложение» в DevCraft → **DLE API** → **OAuth-клиенты**. Права токена = права **API-ключа**, к которому клиент привязан. Сам сайт при этом раздаёт токены — см. OAuth-сервер.`},{heading:`что-нужно-заранее`,content:`Установка`},{heading:`что-нужно-заранее`,content:`API-ключ с нужным уровнем доступа`},{heading:`url-сервера-копируйте-из-админки`,content:"Над списком клиентов — панель адресов (база `/api/v2`):"},{heading:`url-сервера-копируйте-из-админки`,content:`Название`},{heading:`url-сервера-копируйте-из-админки`,content:`Путь`},{heading:`url-сервера-копируйте-из-админки`,content:`discovery`},{heading:`url-сервера-копируйте-из-админки`,content:"`/.well-known/oauth-authorization-server`"},{heading:`url-сервера-копируйте-из-админки`,content:`authorize`},{heading:`url-сервера-копируйте-из-админки`,content:"`/oauth/authorize`"},{heading:`url-сервера-копируйте-из-админки`,content:`token`},{heading:`url-сервера-копируйте-из-админки`,content:"`/oauth/token`"},{heading:`url-сервера-копируйте-из-админки`,content:`revoke`},{heading:`url-сервера-копируйте-из-админки`,content:"`/oauth/revoke`"},{heading:`url-сервера-копируйте-из-админки`,content:`userinfo`},{heading:`url-сервера-копируйте-из-админки`,content:"`/oauth/userinfo`"},{heading:`url-сервера-копируйте-из-админки`,content:`Их же отдаёт discovery JSON. Сценарии с curl: oauth-server.`},{heading:`создайте-api-ключ`,content:`Страница **Ключи** — без ключа клиенту не к чему привязать права.`},{heading:`заполните-форму-создать-клиент`,content:`Поле`},{heading:`заполните-форму-создать-клиент`,content:`Обязательно`},{heading:`заполните-форму-создать-клиент`,content:`Простыми словами`},{heading:`заполните-форму-создать-клиент`,content:`Название`},{heading:`заполните-форму-создать-клиент`,content:`нет`},{heading:`заполните-форму-создать-клиент`,content:"Подпись в списке; пусто → подставится `client_id`"},{heading:`заполните-форму-создать-клиент`,content:`API-ключ`},{heading:`заполните-форму-создать-клиент`,content:`**да**`},{heading:`заполните-форму-создать-клиент`,content:`Какие таблицы и действия разрешены токену`},{heading:`заполните-форму-создать-клиент`,content:`Redirect URI`},{heading:`заполните-форму-создать-клиент`,content:`для входа через браузер`},{heading:`заполните-форму-создать-клиент`,content:`Точный URL возврата; для M2M можно пусто`},{heading:`заполните-форму-создать-клиент`,content:`Grant types`},{heading:`заполните-форму-создать-клиент`,content:`**да** (≥1)`},{heading:`заполните-форму-создать-клиент`,content:`Способы выдачи токена`},{heading:`заполните-форму-создать-клиент`,content:"Сервер сам выдаёт `client_id` и `client_secret`. **Секрет показывают один раз** — сохраните сразу. Потом только «Пересоздать client\\_secret»."},{heading:`заполните-форму-создать-клиент`,content:"PKCE (`code_challenge` / `code_verifier`) в форме нет — их шлёт приложение на authorize/token."},{heading:`заполните-форму-создать-клиент`,content:`Проверка: Postman. Связка с форумом: XenForo.`},{heading:`редактирование`,content:"`client_id` **не меняется**."},{heading:`редактирование`,content:`Можно менять название, ключ, Redirect URI, grants, флаг **Активен**.`},{heading:`редактирование`,content:`Неактивный клиент новые токены не получает.`},{heading:`редактирование`,content:`Секрет — только пересоздание; старый сразу мёртв.`},{heading:`какой-grant-выбрать`,content:`Grant`},{heading:`какой-grant-выбрать`,content:`Когда`},{heading:`какой-grant-выбрать`,content:"`authorization_code` (+ часто `refresh_token`)"},{heading:`какой-grant-выбрать`,content:`Пользователь логинится через сайт DLE (SPA, внешнее приложение) — нужен Redirect URI`},{heading:`какой-grant-выбрать`,content:"`client_credentials`"},{heading:`какой-grant-выбрать`,content:`Сервер-к-серверу, без пользователя`},{heading:`какой-grant-выбрать`,content:"`password`"},{heading:`какой-grant-выбрать`,content:`Логин/пароль в теле запроса — только доверенным клиентам`},{heading:`какой-grant-выбрать`,content:"`refresh_token`"},{heading:`какой-grant-выбрать`,content:`Обновить access\\_token после code-flow`},{heading:`какой-grant-выбрать`,content:`Берите минимум grants. Redirect URI для code-flow должен совпадать с запросом **байт-в-байт**.`},{heading:`какой-grant-выбрать`,content:"Связь с упрощённым `credential_type` и примерами curl: oauth-server, auth."},{heading:`если-что-то-не-работает`,content:`Симптом`},{heading:`если-что-то-не-работает`,content:`Что проверить`},{heading:`если-что-то-не-работает`,content:`Не создаётся клиент`},{heading:`если-что-то-не-работает`,content:`Выбран ключ; отмечен хотя бы один grant`},{heading:`если-что-то-не-работает`,content:`Ошибка на authorize`},{heading:`если-что-то-не-работает`,content:"Redirect URI = URI клиента; есть grant `authorization_code`"},{heading:`если-что-то-не-работает`,content:"`invalid_grant`"},{heading:`если-что-то-не-работает`,content:`Нужный grant включён у клиента`},{heading:`если-что-то-не-работает`,content:`Потерян секрет`},{heading:`если-что-то-не-работает`,content:`«Пересоздать client\\_secret»`},{heading:`если-что-то-не-работает`,content:"Токен `null` при верных данных"},{heading:`если-что-то-не-работает`,content:"Инструкция .env — часто `DEMO_MODE`"},{heading:`если-что-то-не-работает`,content:"401 на `/table`"},{heading:`если-что-то-не-работает`,content:`Нужен Bearer от token, не сырой API-ключ (auth)`},{heading:`см-также`,content:`OAuth-сервер`},{heading:`см-также`,content:`Проверка в Postman`},{heading:`см-также`,content:`Авторизация`},{heading:`см-также`,content:`Безопасность`}],headings:[{id:`что-нужно-заранее`,content:`Что нужно заранее`},{id:`url-сервера-копируйте-из-админки`,content:`URL сервера (копируйте из админки)`},{id:`создание-клиента`,content:`Создание клиента`},{id:`создайте-api-ключ`,content:`Создайте API-ключ`},{id:`заполните-форму-создать-клиент`,content:`Заполните форму «Создать клиент»`},{id:`редактирование`,content:`Редактирование`},{id:`какой-grant-выбрать`,content:`Какой grant выбрать`},{id:`если-что-то-не-работает`,content:`Если что-то не работает`},{id:`см-также`,content:`См. также`}]},s=[{depth:2,url:`#что-нужно-заранее`,title:(0,n.jsx)(n.Fragment,{children:`Что нужно заранее`})},{depth:2,url:`#url-сервера-копируйте-из-админки`,title:(0,n.jsx)(n.Fragment,{children:`URL сервера (копируйте из админки)`})},{depth:2,url:`#создание-клиента`,title:(0,n.jsx)(n.Fragment,{children:`Создание клиента`})},{depth:3,url:`#создайте-api-ключ`,title:(0,n.jsx)(n.Fragment,{children:`Создайте API-ключ`})},{depth:3,url:`#заполните-форму-создать-клиент`,title:(0,n.jsx)(n.Fragment,{children:`Заполните форму «Создать клиент»`})},{depth:2,url:`#редактирование`,title:(0,n.jsx)(n.Fragment,{children:`Редактирование`})},{depth:2,url:`#какой-grant-выбрать`,title:(0,n.jsx)(n.Fragment,{children:`Какой grant выбрать`})},{depth:2,url:`#если-что-то-не-работает`,title:(0,n.jsx)(n.Fragment,{children:`Если что-то не работает`})},{depth:2,url:`#см-также`,title:(0,n.jsx)(n.Fragment,{children:`См. также`})}];function c(e){let t={a:`a`,code:`code`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,strong:`strong`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,ul:`ul`,...e.components},{Step:r,Steps:i}=t;return r||u(`Step`,!0),i||u(`Steps`,!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:[`OAuth-клиент — это запись «внешнее приложение» в DevCraft → `,(0,n.jsx)(t.strong,{children:`DLE API`}),` → `,(0,n.jsx)(t.strong,{children:`OAuth-клиенты`}),`. Права токена = права `,(0,n.jsx)(t.strong,{children:`API-ключа`}),`, к которому клиент привязан. Сам сайт при этом раздаёт токены — см. `,(0,n.jsx)(t.a,{href:`oauth-server`,children:`OAuth-сервер`}),`.`]}),`
`,(0,n.jsx)(t.h2,{id:`что-нужно-заранее`,children:`Что нужно заранее`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`../install`,children:`Установка`})}),`
`,(0,n.jsxs)(t.li,{children:[`API-ключ с нужным `,(0,n.jsx)(t.a,{href:`access-levels`,children:`уровнем доступа`})]}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`url-сервера-копируйте-из-админки`,children:`URL сервера (копируйте из админки)`}),`
`,(0,n.jsxs)(t.p,{children:[`Над списком клиентов — панель адресов (база `,(0,n.jsx)(t.code,{children:`/api/v2`}),`):`]}),`
`,(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`Название`}),(0,n.jsx)(t.th,{children:`Путь`})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`discovery`}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:`/.well-known/oauth-authorization-server`})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`authorize`}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:`/oauth/authorize`})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`token`}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:`/oauth/token`})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`revoke`}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:`/oauth/revoke`})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`userinfo`}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:`/oauth/userinfo`})})]})]})]}),`
`,(0,n.jsxs)(t.p,{children:[`Их же отдаёт discovery JSON. Сценарии с curl: `,(0,n.jsx)(t.a,{href:`oauth-server`,children:`oauth-server`}),`.`]}),`
`,(0,n.jsx)(t.h2,{id:`создание-клиента`,children:`Создание клиента`}),`
`,(0,n.jsxs)(i,{children:[(0,n.jsxs)(r,{children:[(0,n.jsx)(t.h3,{id:`создайте-api-ключ`,children:`Создайте API-ключ`}),(0,n.jsxs)(t.p,{children:[`Страница `,(0,n.jsx)(t.strong,{children:`Ключи`}),` — без ключа клиенту не к чему привязать права.`]})]}),(0,n.jsxs)(r,{children:[(0,n.jsx)(t.h3,{id:`заполните-форму-создать-клиент`,children:`Заполните форму «Создать клиент»`}),(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`Поле`}),(0,n.jsx)(t.th,{children:`Обязательно`}),(0,n.jsx)(t.th,{children:`Простыми словами`})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`Название`}),(0,n.jsx)(t.td,{children:`нет`}),(0,n.jsxs)(t.td,{children:[`Подпись в списке; пусто → подставится `,(0,n.jsx)(t.code,{children:`client_id`})]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`API-ключ`}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:`да`})}),(0,n.jsx)(t.td,{children:`Какие таблицы и действия разрешены токену`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`Redirect URI`}),(0,n.jsx)(t.td,{children:`для входа через браузер`}),(0,n.jsx)(t.td,{children:`Точный URL возврата; для M2M можно пусто`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`Grant types`}),(0,n.jsxs)(t.td,{children:[(0,n.jsx)(t.strong,{children:`да`}),` (≥1)`]}),(0,n.jsx)(t.td,{children:`Способы выдачи токена`})]})]})]}),(0,n.jsxs)(t.p,{children:[`Сервер сам выдаёт `,(0,n.jsx)(t.code,{children:`client_id`}),` и `,(0,n.jsx)(t.code,{children:`client_secret`}),`. `,(0,n.jsx)(t.strong,{children:`Секрет показывают один раз`}),` — сохраните сразу. Потом только «Пересоздать client_secret».`]})]})]}),`
`,(0,n.jsxs)(t.p,{children:[`PKCE (`,(0,n.jsx)(t.code,{children:`code_challenge`}),` / `,(0,n.jsx)(t.code,{children:`code_verifier`}),`) в форме нет — их шлёт приложение на authorize/token.`]}),`
`,(0,n.jsxs)(t.p,{children:[`Проверка: `,(0,n.jsx)(t.a,{href:`postman`,children:`Postman`}),`. Связка с форумом: `,(0,n.jsx)(t.a,{href:`xenforo`,children:`XenForo`}),`.`]}),`
`,(0,n.jsx)(t.h2,{id:`редактирование`,children:`Редактирование`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`client_id`}),` `,(0,n.jsx)(t.strong,{children:`не меняется`}),`.`]}),`
`,(0,n.jsxs)(t.li,{children:[`Можно менять название, ключ, Redirect URI, grants, флаг `,(0,n.jsx)(t.strong,{children:`Активен`}),`.`]}),`
`,(0,n.jsx)(t.li,{children:`Неактивный клиент новые токены не получает.`}),`
`,(0,n.jsx)(t.li,{children:`Секрет — только пересоздание; старый сразу мёртв.`}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`какой-grant-выбрать`,children:`Какой grant выбрать`}),`
`,(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`Grant`}),(0,n.jsx)(t.th,{children:`Когда`})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsxs)(t.td,{children:[(0,n.jsx)(t.code,{children:`authorization_code`}),` (+ часто `,(0,n.jsx)(t.code,{children:`refresh_token`}),`)`]}),(0,n.jsx)(t.td,{children:`Пользователь логинится через сайт DLE (SPA, внешнее приложение) — нужен Redirect URI`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:`client_credentials`})}),(0,n.jsx)(t.td,{children:`Сервер-к-серверу, без пользователя`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:`password`})}),(0,n.jsx)(t.td,{children:`Логин/пароль в теле запроса — только доверенным клиентам`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:`refresh_token`})}),(0,n.jsx)(t.td,{children:`Обновить access_token после code-flow`})]})]})]}),`
`,(0,n.jsxs)(t.p,{children:[`Берите минимум grants. Redirect URI для code-flow должен совпадать с запросом `,(0,n.jsx)(t.strong,{children:`байт-в-байт`}),`.`]}),`
`,(0,n.jsxs)(t.p,{children:[`Связь с упрощённым `,(0,n.jsx)(t.code,{children:`credential_type`}),` и примерами curl: `,(0,n.jsx)(t.a,{href:`oauth-server`,children:`oauth-server`}),`, `,(0,n.jsx)(t.a,{href:`auth`,children:`auth`}),`.`]}),`
`,(0,n.jsx)(t.h2,{id:`если-что-то-не-работает`,children:`Если что-то не работает`}),`
`,(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`Симптом`}),(0,n.jsx)(t.th,{children:`Что проверить`})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`Не создаётся клиент`}),(0,n.jsx)(t.td,{children:`Выбран ключ; отмечен хотя бы один grant`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`Ошибка на authorize`}),(0,n.jsxs)(t.td,{children:[`Redirect URI = URI клиента; есть grant `,(0,n.jsx)(t.code,{children:`authorization_code`})]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:`invalid_grant`})}),(0,n.jsx)(t.td,{children:`Нужный grant включён у клиента`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`Потерян секрет`}),(0,n.jsx)(t.td,{children:`«Пересоздать client_secret»`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsxs)(t.td,{children:[`Токен `,(0,n.jsx)(t.code,{children:`null`}),` при верных данных`]}),(0,n.jsxs)(t.td,{children:[(0,n.jsx)(t.a,{href:`env`,children:`Инструкция .env`}),` — часто `,(0,n.jsx)(t.code,{children:`DEMO_MODE`})]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsxs)(t.td,{children:[`401 на `,(0,n.jsx)(t.code,{children:`/table`})]}),(0,n.jsxs)(t.td,{children:[`Нужен Bearer от token, не сырой API-ключ (`,(0,n.jsx)(t.a,{href:`auth`,children:`auth`}),`)`]})]})]})]}),`
`,(0,n.jsx)(t.h2,{id:`см-также`,children:`См. также`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`oauth-server`,children:`OAuth-сервер`})}),`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`postman`,children:`Проверка в Postman`})}),`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`auth`,children:`Авторизация`})}),`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`security`,children:`Безопасность`})}),`
`]})]})}function l(e={}){let{wrapper:t}=e.components||{};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}function u(e,t){throw Error(`Expected `+(t?`component`:`object`)+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}export{a as _markdown,l as default,r as frontmatter,i as lastModified,o as structuredData,s as toc};