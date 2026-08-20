import{r as e}from"./rolldown-runtime-QTnfLwEv.js";import{t}from"./jsx-runtime-By8HlURe.js";var n=e(t()),r={title:`Настройки`,description:`Что крутить в DevCraft → DLE API → Настройки: ключи, TTL, профиль, уведомления.`,version:`200.1.0`},i=new Date(1787218238e3),a=`

Страница **DevCraft → DLE API → Настройки** сохраняет параметры в \`dleapi.json\`. Часть флагов безопасности перекрывается файлом \`.env\` — см. [Инструкция .env](env).

## Безопасность (в админке) [#безопасность-в-админке]

| Параметр                        | Зачем                                                                         |
| ------------------------------- | ----------------------------------------------------------------------------- |
| Алгоритм HMAC                   | Как считается «отпечаток» при генерации ключей (\`sha256\` / \`sha512\` / \`sha1\`) |
| Секрет                          | Строка для HMAC; пусто → сгенерируется при сохранении                         |
| Длина ключа                     | Сколько символов у нового API-ключа                                           |
| Маскировать чувствительные поля | Прятать пароли, IP, хеши в ответах CRUD                                       |

На проде обычно ещё включают \`DLEAPI_SECURE\` в \`.env\` — [env](env), [Безопасность](security).

## OAuth2 [#oauth2]

| Параметр               | Зачем                                            |
| ---------------------- | ------------------------------------------------ |
| TTL access token (сек) | Сколько живёт \`access_token\` (по умолчанию 3600) |

## Уровни доступа [#уровни-доступа]

| Параметр             | Зачем                                                                                         |
| -------------------- | --------------------------------------------------------------------------------------------- |
| Уровень по умолчанию | Если пользователь сам запросил ключ, а группа DLE не привязана — [синхронизация](access-sync) |

## Профиль на сайте [#профиль-на-сайте]

| Параметр                    | Зачем                                      |
| --------------------------- | ------------------------------------------ |
| Показывать блок API-ключа   | Виджет в профиле                           |
| Разрешить генерировать ключ | Если выкл. — кнопки нет; ключ выдаёт админ |

Как воткнуть include в шаблон: [Установка → Профиль](../install#профиль-на-сайте). Теги \`.tpl\` и email/PM: [Шаблоны](templates).

## Уведомления о заявках [#уведомления-о-заявках]

* Email и/или личные сообщения при новой заявке и при одобрении/отказе
* Получатели: группы DLE и/или конкретные пользователи
* Темы и тела PM (\`pm_*\`); рядом с полями — кликабельные теги плейсхолдеров
* После установки в PM уже лежат готовые тексты

Редактор писем тоже здесь: темы в \`dleapi.json\`, тела синхронизируются с \`PREFIX_email\`. Подробности плейсхолдеров: [Шаблоны](templates).

## Состояния блока в профиле [#состояния-блока-в-профиле]

* \`idle\` — ключа ещё нет
* \`pending\` — заявка ждёт решения
* \`approved\` — ключ активен
* \`denied\` — отказ

Админ на чужом профиле может одобрить/отклонить прямо в блоке.

## См. также [#см-также]

* [Инструкция .env](env)
* [Уровни доступа](access-levels)
* [Безопасность](security)
* [OAuth-клиенты](oauth-client)
`,o={contents:[{heading:void 0,content:"Страница **DevCraft → DLE API → Настройки** сохраняет параметры в `dleapi.json`. Часть флагов безопасности перекрывается файлом `.env` — см. Инструкция .env."},{heading:`безопасность-в-админке`,content:`Параметр`},{heading:`безопасность-в-админке`,content:`Зачем`},{heading:`безопасность-в-админке`,content:`Алгоритм HMAC`},{heading:`безопасность-в-админке`,content:"Как считается «отпечаток» при генерации ключей (`sha256` / `sha512` / `sha1`)"},{heading:`безопасность-в-админке`,content:`Секрет`},{heading:`безопасность-в-админке`,content:`Строка для HMAC; пусто → сгенерируется при сохранении`},{heading:`безопасность-в-админке`,content:`Длина ключа`},{heading:`безопасность-в-админке`,content:`Сколько символов у нового API-ключа`},{heading:`безопасность-в-админке`,content:`Маскировать чувствительные поля`},{heading:`безопасность-в-админке`,content:`Прятать пароли, IP, хеши в ответах CRUD`},{heading:`безопасность-в-админке`,content:"На проде обычно ещё включают `DLEAPI_SECURE` в `.env` — env, Безопасность."},{heading:`oauth2`,content:`Параметр`},{heading:`oauth2`,content:`Зачем`},{heading:`oauth2`,content:`TTL access token (сек)`},{heading:`oauth2`,content:"Сколько живёт `access_token` (по умолчанию 3600)"},{heading:`уровни-доступа`,content:`Параметр`},{heading:`уровни-доступа`,content:`Зачем`},{heading:`уровни-доступа`,content:`Уровень по умолчанию`},{heading:`уровни-доступа`,content:`Если пользователь сам запросил ключ, а группа DLE не привязана — синхронизация`},{heading:`профиль-на-сайте`,content:`Параметр`},{heading:`профиль-на-сайте`,content:`Зачем`},{heading:`профиль-на-сайте`,content:`Показывать блок API-ключа`},{heading:`профиль-на-сайте`,content:`Виджет в профиле`},{heading:`профиль-на-сайте`,content:`Разрешить генерировать ключ`},{heading:`профиль-на-сайте`,content:`Если выкл. — кнопки нет; ключ выдаёт админ`},{heading:`профиль-на-сайте`,content:"Как воткнуть include в шаблон: Установка → Профиль. Теги `.tpl` и email/PM: Шаблоны."},{heading:`уведомления-о-заявках`,content:`Email и/или личные сообщения при новой заявке и при одобрении/отказе`},{heading:`уведомления-о-заявках`,content:`Получатели: группы DLE и/или конкретные пользователи`},{heading:`уведомления-о-заявках`,content:"Темы и тела PM (`pm_*`); рядом с полями — кликабельные теги плейсхолдеров"},{heading:`уведомления-о-заявках`,content:`После установки в PM уже лежат готовые тексты`},{heading:`уведомления-о-заявках`,content:"Редактор писем тоже здесь: темы в `dleapi.json`, тела синхронизируются с `PREFIX_email`. Подробности плейсхолдеров: Шаблоны."},{heading:`состояния-блока-в-профиле`,content:"`idle` — ключа ещё нет"},{heading:`состояния-блока-в-профиле`,content:"`pending` — заявка ждёт решения"},{heading:`состояния-блока-в-профиле`,content:"`approved` — ключ активен"},{heading:`состояния-блока-в-профиле`,content:"`denied` — отказ"},{heading:`состояния-блока-в-профиле`,content:`Админ на чужом профиле может одобрить/отклонить прямо в блоке.`},{heading:`см-также`,content:`Инструкция .env`},{heading:`см-также`,content:`Уровни доступа`},{heading:`см-также`,content:`Безопасность`},{heading:`см-также`,content:`OAuth-клиенты`}],headings:[{id:`безопасность-в-админке`,content:`Безопасность (в админке)`},{id:`oauth2`,content:`OAuth2`},{id:`уровни-доступа`,content:`Уровни доступа`},{id:`профиль-на-сайте`,content:`Профиль на сайте`},{id:`уведомления-о-заявках`,content:`Уведомления о заявках`},{id:`состояния-блока-в-профиле`,content:`Состояния блока в профиле`},{id:`см-также`,content:`См. также`}]},s=[{depth:2,url:`#безопасность-в-админке`,title:(0,n.jsx)(n.Fragment,{children:`Безопасность (в админке)`})},{depth:2,url:`#oauth2`,title:(0,n.jsx)(n.Fragment,{children:`OAuth2`})},{depth:2,url:`#уровни-доступа`,title:(0,n.jsx)(n.Fragment,{children:`Уровни доступа`})},{depth:2,url:`#профиль-на-сайте`,title:(0,n.jsx)(n.Fragment,{children:`Профиль на сайте`})},{depth:2,url:`#уведомления-о-заявках`,title:(0,n.jsx)(n.Fragment,{children:`Уведомления о заявках`})},{depth:2,url:`#состояния-блока-в-профиле`,title:(0,n.jsx)(n.Fragment,{children:`Состояния блока в профиле`})},{depth:2,url:`#см-также`,title:(0,n.jsx)(n.Fragment,{children:`См. также`})}];function c(e){let t={a:`a`,code:`code`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,ul:`ul`,...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:[`Страница `,(0,n.jsx)(t.strong,{children:`DevCraft → DLE API → Настройки`}),` сохраняет параметры в `,(0,n.jsx)(t.code,{children:`dleapi.json`}),`. Часть флагов безопасности перекрывается файлом `,(0,n.jsx)(t.code,{children:`.env`}),` — см. `,(0,n.jsx)(t.a,{href:`env`,children:`Инструкция .env`}),`.`]}),`
`,(0,n.jsx)(t.h2,{id:`безопасность-в-админке`,children:`Безопасность (в админке)`}),`
`,(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`Параметр`}),(0,n.jsx)(t.th,{children:`Зачем`})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`Алгоритм HMAC`}),(0,n.jsxs)(t.td,{children:[`Как считается «отпечаток» при генерации ключей (`,(0,n.jsx)(t.code,{children:`sha256`}),` / `,(0,n.jsx)(t.code,{children:`sha512`}),` / `,(0,n.jsx)(t.code,{children:`sha1`}),`)`]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`Секрет`}),(0,n.jsx)(t.td,{children:`Строка для HMAC; пусто → сгенерируется при сохранении`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`Длина ключа`}),(0,n.jsx)(t.td,{children:`Сколько символов у нового API-ключа`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`Маскировать чувствительные поля`}),(0,n.jsx)(t.td,{children:`Прятать пароли, IP, хеши в ответах CRUD`})]})]})]}),`
`,(0,n.jsxs)(t.p,{children:[`На проде обычно ещё включают `,(0,n.jsx)(t.code,{children:`DLEAPI_SECURE`}),` в `,(0,n.jsx)(t.code,{children:`.env`}),` — `,(0,n.jsx)(t.a,{href:`env`,children:`env`}),`, `,(0,n.jsx)(t.a,{href:`security`,children:`Безопасность`}),`.`]}),`
`,(0,n.jsx)(t.h2,{id:`oauth2`,children:`OAuth2`}),`
`,(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`Параметр`}),(0,n.jsx)(t.th,{children:`Зачем`})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`TTL access token (сек)`}),(0,n.jsxs)(t.td,{children:[`Сколько живёт `,(0,n.jsx)(t.code,{children:`access_token`}),` (по умолчанию 3600)`]})]})})]}),`
`,(0,n.jsx)(t.h2,{id:`уровни-доступа`,children:`Уровни доступа`}),`
`,(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`Параметр`}),(0,n.jsx)(t.th,{children:`Зачем`})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`Уровень по умолчанию`}),(0,n.jsxs)(t.td,{children:[`Если пользователь сам запросил ключ, а группа DLE не привязана — `,(0,n.jsx)(t.a,{href:`access-sync`,children:`синхронизация`})]})]})})]}),`
`,(0,n.jsx)(t.h2,{id:`профиль-на-сайте`,children:`Профиль на сайте`}),`
`,(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`Параметр`}),(0,n.jsx)(t.th,{children:`Зачем`})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`Показывать блок API-ключа`}),(0,n.jsx)(t.td,{children:`Виджет в профиле`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`Разрешить генерировать ключ`}),(0,n.jsx)(t.td,{children:`Если выкл. — кнопки нет; ключ выдаёт админ`})]})]})]}),`
`,(0,n.jsxs)(t.p,{children:[`Как воткнуть include в шаблон: `,(0,n.jsx)(t.a,{href:`../install#%D0%BF%D1%80%D0%BE%D1%84%D0%B8%D0%BB%D1%8C-%D0%BD%D0%B0-%D1%81%D0%B0%D0%B9%D1%82%D0%B5`,children:`Установка → Профиль`}),`. Теги `,(0,n.jsx)(t.code,{children:`.tpl`}),` и email/PM: `,(0,n.jsx)(t.a,{href:`templates`,children:`Шаблоны`}),`.`]}),`
`,(0,n.jsx)(t.h2,{id:`уведомления-о-заявках`,children:`Уведомления о заявках`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsx)(t.li,{children:`Email и/или личные сообщения при новой заявке и при одобрении/отказе`}),`
`,(0,n.jsx)(t.li,{children:`Получатели: группы DLE и/или конкретные пользователи`}),`
`,(0,n.jsxs)(t.li,{children:[`Темы и тела PM (`,(0,n.jsx)(t.code,{children:`pm_*`}),`); рядом с полями — кликабельные теги плейсхолдеров`]}),`
`,(0,n.jsx)(t.li,{children:`После установки в PM уже лежат готовые тексты`}),`
`]}),`
`,(0,n.jsxs)(t.p,{children:[`Редактор писем тоже здесь: темы в `,(0,n.jsx)(t.code,{children:`dleapi.json`}),`, тела синхронизируются с `,(0,n.jsx)(t.code,{children:`PREFIX_email`}),`. Подробности плейсхолдеров: `,(0,n.jsx)(t.a,{href:`templates`,children:`Шаблоны`}),`.`]}),`
`,(0,n.jsx)(t.h2,{id:`состояния-блока-в-профиле`,children:`Состояния блока в профиле`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`idle`}),` — ключа ещё нет`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`pending`}),` — заявка ждёт решения`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`approved`}),` — ключ активен`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`denied`}),` — отказ`]}),`
`]}),`
`,(0,n.jsx)(t.p,{children:`Админ на чужом профиле может одобрить/отклонить прямо в блоке.`}),`
`,(0,n.jsx)(t.h2,{id:`см-также`,children:`См. также`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`env`,children:`Инструкция .env`})}),`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`access-levels`,children:`Уровни доступа`})}),`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`security`,children:`Безопасность`})}),`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`oauth-client`,children:`OAuth-клиенты`})}),`
`]})]})}function l(e={}){let{wrapper:t}=e.components||{};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}export{a as _markdown,l as default,r as frontmatter,i as lastModified,o as structuredData,s as toc};