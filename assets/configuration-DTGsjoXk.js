import{r as e}from"./rolldown-runtime-QTnfLwEv.js";import{t}from"./jsx-runtime-By8HlURe.js";var n=e(t()),r={title:`Настройка`,description:`OAuth-клиент DLE и Connected account DLE API в ACP XenForo`,version:`1.0.0`},i=new Date(1787218238e3),a=`

Примеры URL: XenForo \`http://localhost:8789\`, DLE \`http://dle200.test\`.

## 1. OAuth-клиент на DLE [#1-oauth-клиент-на-dle]

DevCraft Admin → **DLE API** → [OAuth-клиенты](../../dle/dle_api/200.1.0/guides/oauth-client).

| Поле         | Значение                                                                                                          |
| ------------ | ----------------------------------------------------------------------------------------------------------------- |
| Grants       | \`authorization_code\`, \`refresh_token\`                                                                             |
| Redirect URI | \`{Board URL XenForo}/connected_account.php\` — байт-в-байт, например \`http://localhost:8789/connected_account.php\` |
| API-ключ     | с нужным [уровнем доступа](../../dle/dle_api/200.1.0/guides/access-levels)                                        |

Сохраните \`client_id\` и \`client_secret\` (секрет показывают один раз).

<Callout type="info" title="Postman">
  Проверка клиента DLE — [гайд Postman](../../dle/dle_api/200.1.0/guides/postman). Callback = тот же \`connected_account.php\`, не \`oauth.pstmn.io\` (это только для клиента DLE без форума).
</Callout>

## 2. Connected account в XenForo [#2-connected-account-в-xenforo]

ACP → **Setup → Connected accounts** → **DLE API** (\`dleapi\`).

| Поле ACP           | Пример                                                           |
| ------------------ | ---------------------------------------------------------------- |
| Display title      | «Мой сайт DLE» (кнопка входа)                                    |
| DLE base URL       | \`http://dle200.test\` — без \`/\` в конце, без \`/api/v2\` и путей XF |
| Client ID / secret | из DevCraft                                                      |

**Test provider** — откроется OAuth к DLE; после входа должны отобразиться имя и email из \`/api/v2/me\`.

## 3. Регистрация и вход [#3-регистрация-и-вход]

В **Setup → Options → User registration** включите connected accounts, если нужна регистрация через DLE. Кнопка «Continue with …» использует \`display_title\`.

## Типичные ошибки [#типичные-ошибки]

| Симптом                              | Что проверить                                                                       |
| ------------------------------------ | ----------------------------------------------------------------------------------- |
| JSON-ошибка на authorize, нет \`code\` | Redirect URI в DLE = \`{board}/connected_account.php\` байт-в-байт                    |
| \`error=demo_mode\`                    | \`DEMO_MODE=false\` в \`.env\` DLE                                                      |
| Authorize сразу на логин DLE         | Войдите на DLE в том же браузере                                                    |
| Test provider: 404 на token          | В DLE base URL не должно быть \`/oauth2\` или \`/api/oauth2\` — только корень сайта DLE |
| Штатный CA «XenForo» вместо add-on   | Board URL другого XF ≠ URL DLE; нужен провайдер **DLE API** из add-on               |

## См. также [#см-также]

* [Начало работы](../getting_started)
* [DLE API: XenForo (оба направления)](../../dle/dle_api/200.1.0/guides/xenforo)
* [OAuth-сервер DLE](../../dle/dle_api/200.1.0/guides/oauth-server)
`,o={contents:[{heading:void 0,content:"Примеры URL: XenForo `http://localhost:8789`, DLE `http://dle200.test`."},{heading:`1-oauth-клиент-на-dle`,content:`DevCraft Admin → **DLE API** → OAuth-клиенты.`},{heading:`1-oauth-клиент-на-dle`,content:`Поле`},{heading:`1-oauth-клиент-на-dle`,content:`Значение`},{heading:`1-oauth-клиент-на-dle`,content:`Grants`},{heading:`1-oauth-клиент-на-dle`,content:"`authorization_code`, `refresh_token`"},{heading:`1-oauth-клиент-на-dle`,content:`Redirect URI`},{heading:`1-oauth-клиент-на-dle`,content:"`{Board URL XenForo}/connected_account.php` — байт-в-байт, например `http://localhost:8789/connected_account.php`"},{heading:`1-oauth-клиент-на-dle`,content:`API-ключ`},{heading:`1-oauth-клиент-на-dle`,content:`с нужным уровнем доступа`},{heading:`1-oauth-клиент-на-dle`,content:"Сохраните `client_id` и `client_secret` (секрет показывают один раз)."},{heading:`1-oauth-клиент-на-dle`,content:"Проверка клиента DLE — гайд Postman. Callback = тот же `connected_account.php`, не `oauth.pstmn.io` (это только для клиента DLE без форума)."},{heading:`2-connected-account-в-xenforo`,content:"ACP → **Setup → Connected accounts** → **DLE API** (`dleapi`)."},{heading:`2-connected-account-в-xenforo`,content:`Поле ACP`},{heading:`2-connected-account-в-xenforo`,content:`Пример`},{heading:`2-connected-account-в-xenforo`,content:`Display title`},{heading:`2-connected-account-в-xenforo`,content:`«Мой сайт DLE» (кнопка входа)`},{heading:`2-connected-account-в-xenforo`,content:`DLE base URL`},{heading:`2-connected-account-в-xenforo`,content:"`http://dle200.test` — без `/` в конце, без `/api/v2` и путей XF"},{heading:`2-connected-account-в-xenforo`,content:`Client ID / secret`},{heading:`2-connected-account-в-xenforo`,content:`из DevCraft`},{heading:`2-connected-account-в-xenforo`,content:"**Test provider** — откроется OAuth к DLE; после входа должны отобразиться имя и email из `/api/v2/me`."},{heading:`3-регистрация-и-вход`,content:"В **Setup → Options → User registration** включите connected accounts, если нужна регистрация через DLE. Кнопка «Continue with …» использует `display_title`."},{heading:`типичные-ошибки`,content:`Симптом`},{heading:`типичные-ошибки`,content:`Что проверить`},{heading:`типичные-ошибки`,content:"JSON-ошибка на authorize, нет `code`"},{heading:`типичные-ошибки`,content:"Redirect URI в DLE = `{board}/connected_account.php` байт-в-байт"},{heading:`типичные-ошибки`,content:"`error=demo_mode`"},{heading:`типичные-ошибки`,content:"`DEMO_MODE=false` в `.env` DLE"},{heading:`типичные-ошибки`,content:`Authorize сразу на логин DLE`},{heading:`типичные-ошибки`,content:`Войдите на DLE в том же браузере`},{heading:`типичные-ошибки`,content:`Test provider: 404 на token`},{heading:`типичные-ошибки`,content:"В DLE base URL не должно быть `/oauth2` или `/api/oauth2` — только корень сайта DLE"},{heading:`типичные-ошибки`,content:`Штатный CA «XenForo» вместо add-on`},{heading:`типичные-ошибки`,content:`Board URL другого XF ≠ URL DLE; нужен провайдер **DLE API** из add-on`},{heading:`см-также`,content:`Начало работы`},{heading:`см-также`,content:`DLE API: XenForo (оба направления)`},{heading:`см-также`,content:`OAuth-сервер DLE`}],headings:[{id:`1-oauth-клиент-на-dle`,content:`1\\. OAuth-клиент на DLE`},{id:`2-connected-account-в-xenforo`,content:`2\\. Connected account в XenForo`},{id:`3-регистрация-и-вход`,content:`3\\. Регистрация и вход`},{id:`типичные-ошибки`,content:`Типичные ошибки`},{id:`см-также`,content:`См. также`}]},s=[{depth:2,url:`#1-oauth-клиент-на-dle`,title:(0,n.jsx)(n.Fragment,{children:`1. OAuth-клиент на DLE`})},{depth:2,url:`#2-connected-account-в-xenforo`,title:(0,n.jsx)(n.Fragment,{children:`2. Connected account в XenForo`})},{depth:2,url:`#3-регистрация-и-вход`,title:(0,n.jsx)(n.Fragment,{children:`3. Регистрация и вход`})},{depth:2,url:`#типичные-ошибки`,title:(0,n.jsx)(n.Fragment,{children:`Типичные ошибки`})},{depth:2,url:`#см-также`,title:(0,n.jsx)(n.Fragment,{children:`См. также`})}];function c(e){let t={a:`a`,code:`code`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,ul:`ul`,...e.components},{Callout:r}=t;return r||u(`Callout`,!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:[`Примеры URL: XenForo `,(0,n.jsx)(t.code,{children:`http://localhost:8789`}),`, DLE `,(0,n.jsx)(t.code,{children:`http://dle200.test`}),`.`]}),`
`,(0,n.jsx)(t.h2,{id:`1-oauth-клиент-на-dle`,children:`1. OAuth-клиент на DLE`}),`
`,(0,n.jsxs)(t.p,{children:[`DevCraft Admin → `,(0,n.jsx)(t.strong,{children:`DLE API`}),` → `,(0,n.jsx)(t.a,{href:`../../dle/dle_api/200.1.0/guides/oauth-client`,children:`OAuth-клиенты`}),`.`]}),`
`,(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`Поле`}),(0,n.jsx)(t.th,{children:`Значение`})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`Grants`}),(0,n.jsxs)(t.td,{children:[(0,n.jsx)(t.code,{children:`authorization_code`}),`, `,(0,n.jsx)(t.code,{children:`refresh_token`})]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`Redirect URI`}),(0,n.jsxs)(t.td,{children:[(0,n.jsx)(t.code,{children:`{Board URL XenForo}/connected_account.php`}),` — байт-в-байт, например `,(0,n.jsx)(t.code,{children:`http://localhost:8789/connected_account.php`})]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`API-ключ`}),(0,n.jsxs)(t.td,{children:[`с нужным `,(0,n.jsx)(t.a,{href:`../../dle/dle_api/200.1.0/guides/access-levels`,children:`уровнем доступа`})]})]})]})]}),`
`,(0,n.jsxs)(t.p,{children:[`Сохраните `,(0,n.jsx)(t.code,{children:`client_id`}),` и `,(0,n.jsx)(t.code,{children:`client_secret`}),` (секрет показывают один раз).`]}),`
`,(0,n.jsx)(r,{type:`info`,title:`Postman`,children:(0,n.jsxs)(t.p,{children:[`Проверка клиента DLE — `,(0,n.jsx)(t.a,{href:`../../dle/dle_api/200.1.0/guides/postman`,children:`гайд Postman`}),`. Callback = тот же `,(0,n.jsx)(t.code,{children:`connected_account.php`}),`, не `,(0,n.jsx)(t.code,{children:`oauth.pstmn.io`}),` (это только для клиента DLE без форума).`]})}),`
`,(0,n.jsx)(t.h2,{id:`2-connected-account-в-xenforo`,children:`2. Connected account в XenForo`}),`
`,(0,n.jsxs)(t.p,{children:[`ACP → `,(0,n.jsx)(t.strong,{children:`Setup → Connected accounts`}),` → `,(0,n.jsx)(t.strong,{children:`DLE API`}),` (`,(0,n.jsx)(t.code,{children:`dleapi`}),`).`]}),`
`,(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`Поле ACP`}),(0,n.jsx)(t.th,{children:`Пример`})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`Display title`}),(0,n.jsx)(t.td,{children:`«Мой сайт DLE» (кнопка входа)`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`DLE base URL`}),(0,n.jsxs)(t.td,{children:[(0,n.jsx)(t.code,{children:`http://dle200.test`}),` — без `,(0,n.jsx)(t.code,{children:`/`}),` в конце, без `,(0,n.jsx)(t.code,{children:`/api/v2`}),` и путей XF`]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`Client ID / secret`}),(0,n.jsx)(t.td,{children:`из DevCraft`})]})]})]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Test provider`}),` — откроется OAuth к DLE; после входа должны отобразиться имя и email из `,(0,n.jsx)(t.code,{children:`/api/v2/me`}),`.`]}),`
`,(0,n.jsx)(t.h2,{id:`3-регистрация-и-вход`,children:`3. Регистрация и вход`}),`
`,(0,n.jsxs)(t.p,{children:[`В `,(0,n.jsx)(t.strong,{children:`Setup → Options → User registration`}),` включите connected accounts, если нужна регистрация через DLE. Кнопка «Continue with …» использует `,(0,n.jsx)(t.code,{children:`display_title`}),`.`]}),`
`,(0,n.jsx)(t.h2,{id:`типичные-ошибки`,children:`Типичные ошибки`}),`
`,(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`Симптом`}),(0,n.jsx)(t.th,{children:`Что проверить`})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsxs)(t.td,{children:[`JSON-ошибка на authorize, нет `,(0,n.jsx)(t.code,{children:`code`})]}),(0,n.jsxs)(t.td,{children:[`Redirect URI в DLE = `,(0,n.jsx)(t.code,{children:`{board}/connected_account.php`}),` байт-в-байт`]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:`error=demo_mode`})}),(0,n.jsxs)(t.td,{children:[(0,n.jsx)(t.code,{children:`DEMO_MODE=false`}),` в `,(0,n.jsx)(t.code,{children:`.env`}),` DLE`]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`Authorize сразу на логин DLE`}),(0,n.jsx)(t.td,{children:`Войдите на DLE в том же браузере`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`Test provider: 404 на token`}),(0,n.jsxs)(t.td,{children:[`В DLE base URL не должно быть `,(0,n.jsx)(t.code,{children:`/oauth2`}),` или `,(0,n.jsx)(t.code,{children:`/api/oauth2`}),` — только корень сайта DLE`]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`Штатный CA «XenForo» вместо add-on`}),(0,n.jsxs)(t.td,{children:[`Board URL другого XF ≠ URL DLE; нужен провайдер `,(0,n.jsx)(t.strong,{children:`DLE API`}),` из add-on`]})]})]})]}),`
`,(0,n.jsx)(t.h2,{id:`см-также`,children:`См. также`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`../getting_started`,children:`Начало работы`})}),`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`../../dle/dle_api/200.1.0/guides/xenforo`,children:`DLE API: XenForo (оба направления)`})}),`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`../../dle/dle_api/200.1.0/guides/oauth-server`,children:`OAuth-сервер DLE`})}),`
`]})]})}function l(e={}){let{wrapper:t}=e.components||{};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}function u(e,t){throw Error(`Expected `+(t?`component`:`object`)+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}export{a as _markdown,l as default,r as frontmatter,i as lastModified,o as structuredData,s as toc};