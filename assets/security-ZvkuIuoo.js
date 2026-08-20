import{r as e}from"./rolldown-runtime-QTnfLwEv.js";import{t}from"./jsx-runtime-By8HlURe.js";var n=e(t()),r={title:`Безопасность`,description:`Что API уже защищает сам и что проверить перед продакшеном.`,version:`200.1.0`},i=new Date(1787217967e3),a=`

Короткий чеклист: что уже встроено и что настроить вам.

## Уже в API [#уже-в-api]

* Почти весь \`/api/v2\` — только с **Bearer** (пропуском). Сырой ключ на \`/table\` не принимают. Исключение: диагностика [\`GET /key/check\`](auth#проверка-сырого-ключа-keycheck).
* Права — [уровни доступа](access-levels) (scopes, \`own_only\`, \`cheater\`).
* Маскирование полей и демо-режим — [Инструкция .env](env) и флаг в [Настройках](settings).
* Authorize сверяет Redirect URI и grant у [OAuth-клиента](oauth-client).
* \`client_secret\` показывают один раз (или после regenerate).

## Перед продом [#перед-продом]

1. **Только HTTPS** — иначе утекают Bearer и секреты.
2. Не включайте &#x2A;*\`password\` / \`auth\`**, если не нужны; для M2M — \`client_credentials\` / \`oauth_client\`.
3. **Минимальные scopes** на уровне ключа; \`cheater\` — только админским ключам.
4. Короткий TTL токена; \`refresh_token\` — только где нужен code-flow ([settings](settings)).
5. Сильный HMAC-секрет, ротация ключей, не коммитить в git; на проде \`DLEAPI_SECURE=true\` — [env](env).
6. Redirect URI — точный https URL; пустой URI только для M2M.
7. Самогенерацию ключа в профиле лучше держать выкл. или с премодерацией.
8. Rate limit / firewall на \`/api/v2\` на reverse proxy (в PHP API лимита нет).
9. **Не логировать** Authorization, сырые ключи, секреты.

## См. также [#см-также]

* [Инструкция .env](env)
* [Настройки](settings)
* [Авторизация](auth)
* [OAuth-клиенты](oauth-client)
`,o={contents:[{heading:void 0,content:`Короткий чеклист: что уже встроено и что настроить вам.`},{heading:`уже-в-api`,content:"Почти весь `/api/v2` — только с **Bearer** (пропуском). Сырой ключ на `/table` не принимают. Исключение: диагностика `GET /key/check`."},{heading:`уже-в-api`,content:"Права — уровни доступа (scopes, `own_only`, `cheater`)."},{heading:`уже-в-api`,content:`Маскирование полей и демо-режим — Инструкция .env и флаг в Настройках.`},{heading:`уже-в-api`,content:`Authorize сверяет Redirect URI и grant у OAuth-клиента.`},{heading:`уже-в-api`,content:"`client_secret` показывают один раз (или после regenerate)."},{heading:`перед-продом`,content:`**Только HTTPS** — иначе утекают Bearer и секреты.`},{heading:`перед-продом`,content:"Не включайте &#x2A;*`password` / `auth`**, если не нужны; для M2M — `client_credentials` / `oauth_client`."},{heading:`перед-продом`,content:"**Минимальные scopes** на уровне ключа; `cheater` — только админским ключам."},{heading:`перед-продом`,content:"Короткий TTL токена; `refresh_token` — только где нужен code-flow (settings)."},{heading:`перед-продом`,content:"Сильный HMAC-секрет, ротация ключей, не коммитить в git; на проде `DLEAPI_SECURE=true` — env."},{heading:`перед-продом`,content:`Redirect URI — точный https URL; пустой URI только для M2M.`},{heading:`перед-продом`,content:`Самогенерацию ключа в профиле лучше держать выкл. или с премодерацией.`},{heading:`перед-продом`,content:"Rate limit / firewall на `/api/v2` на reverse proxy (в PHP API лимита нет)."},{heading:`перед-продом`,content:`**Не логировать** Authorization, сырые ключи, секреты.`},{heading:`см-также`,content:`Инструкция .env`},{heading:`см-также`,content:`Настройки`},{heading:`см-также`,content:`Авторизация`},{heading:`см-также`,content:`OAuth-клиенты`}],headings:[{id:`уже-в-api`,content:`Уже в API`},{id:`перед-продом`,content:`Перед продом`},{id:`см-также`,content:`См. также`}]},s=[{depth:2,url:`#уже-в-api`,title:(0,n.jsx)(n.Fragment,{children:`Уже в API`})},{depth:2,url:`#перед-продом`,title:(0,n.jsx)(n.Fragment,{children:`Перед продом`})},{depth:2,url:`#см-также`,title:(0,n.jsx)(n.Fragment,{children:`См. также`})}];function c(e){let t={a:`a`,code:`code`,h2:`h2`,li:`li`,ol:`ol`,p:`p`,strong:`strong`,ul:`ul`,...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.p,{children:`Короткий чеклист: что уже встроено и что настроить вам.`}),`
`,(0,n.jsx)(t.h2,{id:`уже-в-api`,children:`Уже в API`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[`Почти весь `,(0,n.jsx)(t.code,{children:`/api/v2`}),` — только с `,(0,n.jsx)(t.strong,{children:`Bearer`}),` (пропуском). Сырой ключ на `,(0,n.jsx)(t.code,{children:`/table`}),` не принимают. Исключение: диагностика `,(0,n.jsx)(t.a,{href:`auth#%D0%BF%D1%80%D0%BE%D0%B2%D0%B5%D1%80%D0%BA%D0%B0-%D1%81%D1%8B%D1%80%D0%BE%D0%B3%D0%BE-%D0%BA%D0%BB%D1%8E%D1%87%D0%B0-keycheck`,children:(0,n.jsx)(t.code,{children:`GET /key/check`})}),`.`]}),`
`,(0,n.jsxs)(t.li,{children:[`Права — `,(0,n.jsx)(t.a,{href:`access-levels`,children:`уровни доступа`}),` (scopes, `,(0,n.jsx)(t.code,{children:`own_only`}),`, `,(0,n.jsx)(t.code,{children:`cheater`}),`).`]}),`
`,(0,n.jsxs)(t.li,{children:[`Маскирование полей и демо-режим — `,(0,n.jsx)(t.a,{href:`env`,children:`Инструкция .env`}),` и флаг в `,(0,n.jsx)(t.a,{href:`settings`,children:`Настройках`}),`.`]}),`
`,(0,n.jsxs)(t.li,{children:[`Authorize сверяет Redirect URI и grant у `,(0,n.jsx)(t.a,{href:`oauth-client`,children:`OAuth-клиента`}),`.`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`client_secret`}),` показывают один раз (или после regenerate).`]}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`перед-продом`,children:`Перед продом`}),`
`,(0,n.jsxs)(t.ol,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:`Только HTTPS`}),` — иначе утекают Bearer и секреты.`]}),`
`,(0,n.jsxs)(t.li,{children:[`Не включайте `,(0,n.jsxs)(t.strong,{children:[(0,n.jsx)(t.code,{children:`password`}),` / `,(0,n.jsx)(t.code,{children:`auth`})]}),`, если не нужны; для M2M — `,(0,n.jsx)(t.code,{children:`client_credentials`}),` / `,(0,n.jsx)(t.code,{children:`oauth_client`}),`.`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:`Минимальные scopes`}),` на уровне ключа; `,(0,n.jsx)(t.code,{children:`cheater`}),` — только админским ключам.`]}),`
`,(0,n.jsxs)(t.li,{children:[`Короткий TTL токена; `,(0,n.jsx)(t.code,{children:`refresh_token`}),` — только где нужен code-flow (`,(0,n.jsx)(t.a,{href:`settings`,children:`settings`}),`).`]}),`
`,(0,n.jsxs)(t.li,{children:[`Сильный HMAC-секрет, ротация ключей, не коммитить в git; на проде `,(0,n.jsx)(t.code,{children:`DLEAPI_SECURE=true`}),` — `,(0,n.jsx)(t.a,{href:`env`,children:`env`}),`.`]}),`
`,(0,n.jsx)(t.li,{children:`Redirect URI — точный https URL; пустой URI только для M2M.`}),`
`,(0,n.jsx)(t.li,{children:`Самогенерацию ключа в профиле лучше держать выкл. или с премодерацией.`}),`
`,(0,n.jsxs)(t.li,{children:[`Rate limit / firewall на `,(0,n.jsx)(t.code,{children:`/api/v2`}),` на reverse proxy (в PHP API лимита нет).`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:`Не логировать`}),` Authorization, сырые ключи, секреты.`]}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`см-также`,children:`См. также`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`env`,children:`Инструкция .env`})}),`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`settings`,children:`Настройки`})}),`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`auth`,children:`Авторизация`})}),`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`oauth-client`,children:`OAuth-клиенты`})}),`
`]})]})}function l(e={}){let{wrapper:t}=e.components||{};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}export{a as _markdown,l as default,r as frontmatter,i as lastModified,o as structuredData,s as toc};