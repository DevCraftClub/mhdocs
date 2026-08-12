import{r as e}from"./rolldown-runtime-QTnfLwEv.js";import{t}from"./jsx-runtime-By8HlURe.js";var n=e(t()),r={title:`Настройки`,description:`Параметры модуля DLE API в DevCraft: безопасность, OAuth TTL, профиль, уведомления.`},i=new Date(1786544989e3),a=`

DevCraft → **DLE API** → **Настройки** (\`dleapi.json\`). Часть флагов перекрывается из корневого \`.env\`.

## Безопасность [#безопасность]

| Параметр                        | Описание                                            |
| ------------------------------- | --------------------------------------------------- |
| Алгоритм HMAC                   | \`sha256\` / \`sha512\` / \`sha1\` — генерация API-ключей |
| Секрет                          | Строка HMAC; пусто → автогенерация при сохранении   |
| Длина ключа                     | Длина генерируемого API-ключа                       |
| Маскировать чувствительные поля | Скрывать пароли, IP, хеши в CRUD-ответах            |

Из \`.env\`: \`DEMO_MODE=true\` — secure принудительно, токены не выдаются; \`DLEAPI_SECURE=true\` — маскирование на проде.

## OAuth2 [#oauth2]

| Параметр               | Описание                                       |
| ---------------------- | ---------------------------------------------- |
| TTL access token (сек) | Время жизни \`access_token\` (по умолчанию 3600) |

## Уровни доступа [#уровни-доступа]

| Параметр             | Описание                                                                               |
| -------------------- | -------------------------------------------------------------------------------------- |
| Уровень по умолчанию | При самогенерации ключа и если группа DLE не привязана на [синхронизации](access-sync) |

## Профиль пользователя [#профиль-пользователя]

| Параметр                    | Описание                                                     |
| --------------------------- | ------------------------------------------------------------ |
| Показывать блок API-ключа   | Показ блока в профиле (ключ из таблицы \`api_keys\`)           |
| Разрешить генерировать ключ | Если выкл. — кнопку не показывают; ключ выдаёт администратор |

Подключение: \`userinfo.tpl\` + \`main.tpl\` (\`focus=js\`) — [Установка → Профиль на сайте](../install#профиль-на-сайте).

## Уведомления о заявках / решении [#уведомления-о-заявках--решении]

* Email и/или ЛС при новой заявке и при одобрении/отказе.
* **Группы DLE** и **пользователи** — multi-select получателей заявки.
* Темы и тела PM (\`pm_*_subject\` / \`pm_*_body\`); тела — WYSIWYG, если в DLE включён PM-редактор.
* В описаниях полей PM перечислены плейсхолдеры \`{%…%}\`. Полная таблица: [Шаблоны](templates).

Email-шаблоны движка: [Шаблоны](templates).

## См. также [#см-также]

* [Уровни доступа](access-levels)
* [Безопасность](security)
* [OAuth-клиенты](oauth-client)
`,o={contents:[{heading:void 0,content:"DevCraft → **DLE API** → **Настройки** (`dleapi.json`). Часть флагов перекрывается из корневого `.env`."},{heading:`безопасность`,content:`Параметр`},{heading:`безопасность`,content:`Описание`},{heading:`безопасность`,content:`Алгоритм HMAC`},{heading:`безопасность`,content:"`sha256` / `sha512` / `sha1` — генерация API-ключей"},{heading:`безопасность`,content:`Секрет`},{heading:`безопасность`,content:`Строка HMAC; пусто → автогенерация при сохранении`},{heading:`безопасность`,content:`Длина ключа`},{heading:`безопасность`,content:`Длина генерируемого API-ключа`},{heading:`безопасность`,content:`Маскировать чувствительные поля`},{heading:`безопасность`,content:`Скрывать пароли, IP, хеши в CRUD-ответах`},{heading:`безопасность`,content:"Из `.env`: `DEMO_MODE=true` — secure принудительно, токены не выдаются; `DLEAPI_SECURE=true` — маскирование на проде."},{heading:`oauth2`,content:`Параметр`},{heading:`oauth2`,content:`Описание`},{heading:`oauth2`,content:`TTL access token (сек)`},{heading:`oauth2`,content:"Время жизни `access_token` (по умолчанию 3600)"},{heading:`уровни-доступа`,content:`Параметр`},{heading:`уровни-доступа`,content:`Описание`},{heading:`уровни-доступа`,content:`Уровень по умолчанию`},{heading:`уровни-доступа`,content:`При самогенерации ключа и если группа DLE не привязана на синхронизации`},{heading:`профиль-пользователя`,content:`Параметр`},{heading:`профиль-пользователя`,content:`Описание`},{heading:`профиль-пользователя`,content:`Показывать блок API-ключа`},{heading:`профиль-пользователя`,content:"Показ блока в профиле (ключ из таблицы `api_keys`)"},{heading:`профиль-пользователя`,content:`Разрешить генерировать ключ`},{heading:`профиль-пользователя`,content:`Если выкл. — кнопку не показывают; ключ выдаёт администратор`},{heading:`профиль-пользователя`,content:"Подключение: `userinfo.tpl` + `main.tpl` (`focus=js`) — Установка → Профиль на сайте."},{heading:`уведомления-о-заявках--решении`,content:`Email и/или ЛС при новой заявке и при одобрении/отказе.`},{heading:`уведомления-о-заявках--решении`,content:`**Группы DLE** и **пользователи** — multi-select получателей заявки.`},{heading:`уведомления-о-заявках--решении`,content:"Темы и тела PM (`pm_*_subject` / `pm_*_body`); тела — WYSIWYG, если в DLE включён PM-редактор."},{heading:`уведомления-о-заявках--решении`,content:"В описаниях полей PM перечислены плейсхолдеры `{%…%}`. Полная таблица: Шаблоны."},{heading:`уведомления-о-заявках--решении`,content:`Email-шаблоны движка: Шаблоны.`},{heading:`см-также`,content:`Уровни доступа`},{heading:`см-также`,content:`Безопасность`},{heading:`см-также`,content:`OAuth-клиенты`}],headings:[{id:`безопасность`,content:`Безопасность`},{id:`oauth2`,content:`OAuth2`},{id:`уровни-доступа`,content:`Уровни доступа`},{id:`профиль-пользователя`,content:`Профиль пользователя`},{id:`уведомления-о-заявках--решении`,content:`Уведомления о заявках / решении`},{id:`см-также`,content:`См. также`}]},s=[{depth:2,url:`#безопасность`,title:(0,n.jsx)(n.Fragment,{children:`Безопасность`})},{depth:2,url:`#oauth2`,title:(0,n.jsx)(n.Fragment,{children:`OAuth2`})},{depth:2,url:`#уровни-доступа`,title:(0,n.jsx)(n.Fragment,{children:`Уровни доступа`})},{depth:2,url:`#профиль-пользователя`,title:(0,n.jsx)(n.Fragment,{children:`Профиль пользователя`})},{depth:2,url:`#уведомления-о-заявках--решении`,title:(0,n.jsx)(n.Fragment,{children:`Уведомления о заявках / решении`})},{depth:2,url:`#см-также`,title:(0,n.jsx)(n.Fragment,{children:`См. также`})}];function c(e){let t={a:`a`,code:`code`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,ul:`ul`,...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:[`DevCraft → `,(0,n.jsx)(t.strong,{children:`DLE API`}),` → `,(0,n.jsx)(t.strong,{children:`Настройки`}),` (`,(0,n.jsx)(t.code,{children:`dleapi.json`}),`). Часть флагов перекрывается из корневого `,(0,n.jsx)(t.code,{children:`.env`}),`.`]}),`
`,(0,n.jsx)(t.h2,{id:`безопасность`,children:`Безопасность`}),`
`,(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`Параметр`}),(0,n.jsx)(t.th,{children:`Описание`})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`Алгоритм HMAC`}),(0,n.jsxs)(t.td,{children:[(0,n.jsx)(t.code,{children:`sha256`}),` / `,(0,n.jsx)(t.code,{children:`sha512`}),` / `,(0,n.jsx)(t.code,{children:`sha1`}),` — генерация API-ключей`]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`Секрет`}),(0,n.jsx)(t.td,{children:`Строка HMAC; пусто → автогенерация при сохранении`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`Длина ключа`}),(0,n.jsx)(t.td,{children:`Длина генерируемого API-ключа`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`Маскировать чувствительные поля`}),(0,n.jsx)(t.td,{children:`Скрывать пароли, IP, хеши в CRUD-ответах`})]})]})]}),`
`,(0,n.jsxs)(t.p,{children:[`Из `,(0,n.jsx)(t.code,{children:`.env`}),`: `,(0,n.jsx)(t.code,{children:`DEMO_MODE=true`}),` — secure принудительно, токены не выдаются; `,(0,n.jsx)(t.code,{children:`DLEAPI_SECURE=true`}),` — маскирование на проде.`]}),`
`,(0,n.jsx)(t.h2,{id:`oauth2`,children:`OAuth2`}),`
`,(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`Параметр`}),(0,n.jsx)(t.th,{children:`Описание`})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`TTL access token (сек)`}),(0,n.jsxs)(t.td,{children:[`Время жизни `,(0,n.jsx)(t.code,{children:`access_token`}),` (по умолчанию 3600)`]})]})})]}),`
`,(0,n.jsx)(t.h2,{id:`уровни-доступа`,children:`Уровни доступа`}),`
`,(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`Параметр`}),(0,n.jsx)(t.th,{children:`Описание`})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`Уровень по умолчанию`}),(0,n.jsxs)(t.td,{children:[`При самогенерации ключа и если группа DLE не привязана на `,(0,n.jsx)(t.a,{href:`access-sync`,children:`синхронизации`})]})]})})]}),`
`,(0,n.jsx)(t.h2,{id:`профиль-пользователя`,children:`Профиль пользователя`}),`
`,(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`Параметр`}),(0,n.jsx)(t.th,{children:`Описание`})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`Показывать блок API-ключа`}),(0,n.jsxs)(t.td,{children:[`Показ блока в профиле (ключ из таблицы `,(0,n.jsx)(t.code,{children:`api_keys`}),`)`]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`Разрешить генерировать ключ`}),(0,n.jsx)(t.td,{children:`Если выкл. — кнопку не показывают; ключ выдаёт администратор`})]})]})]}),`
`,(0,n.jsxs)(t.p,{children:[`Подключение: `,(0,n.jsx)(t.code,{children:`userinfo.tpl`}),` + `,(0,n.jsx)(t.code,{children:`main.tpl`}),` (`,(0,n.jsx)(t.code,{children:`focus=js`}),`) — `,(0,n.jsx)(t.a,{href:`../install#%D0%BF%D1%80%D0%BE%D1%84%D0%B8%D0%BB%D1%8C-%D0%BD%D0%B0-%D1%81%D0%B0%D0%B9%D1%82%D0%B5`,children:`Установка → Профиль на сайте`}),`.`]}),`
`,(0,n.jsx)(t.h2,{id:`уведомления-о-заявках--решении`,children:`Уведомления о заявках / решении`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsx)(t.li,{children:`Email и/или ЛС при новой заявке и при одобрении/отказе.`}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:`Группы DLE`}),` и `,(0,n.jsx)(t.strong,{children:`пользователи`}),` — multi-select получателей заявки.`]}),`
`,(0,n.jsxs)(t.li,{children:[`Темы и тела PM (`,(0,n.jsx)(t.code,{children:`pm_*_subject`}),` / `,(0,n.jsx)(t.code,{children:`pm_*_body`}),`); тела — WYSIWYG, если в DLE включён PM-редактор.`]}),`
`,(0,n.jsxs)(t.li,{children:[`В описаниях полей PM перечислены плейсхолдеры `,(0,n.jsx)(t.code,{children:`{%…%}`}),`. Полная таблица: `,(0,n.jsx)(t.a,{href:`templates`,children:`Шаблоны`}),`.`]}),`
`]}),`
`,(0,n.jsxs)(t.p,{children:[`Email-шаблоны движка: `,(0,n.jsx)(t.a,{href:`templates`,children:`Шаблоны`}),`.`]}),`
`,(0,n.jsx)(t.h2,{id:`см-также`,children:`См. также`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`access-levels`,children:`Уровни доступа`})}),`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`security`,children:`Безопасность`})}),`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`oauth-client`,children:`OAuth-клиенты`})}),`
`]})]})}function l(e={}){let{wrapper:t}=e.components||{};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}export{a as _markdown,l as default,r as frontmatter,i as lastModified,o as structuredData,s as toc};