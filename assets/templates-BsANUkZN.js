import{r as e}from"./rolldown-runtime-QTnfLwEv.js";import{t}from"./jsx-runtime-By8HlURe.js";var n=e(t()),r={title:`Шаблоны`,description:`Email- и PM-шаблоны уведомлений DLE API: встроенный редактор, плейсхолдеры и дефолтные шаблоны.`},i=new Date(1787124777e3),a=`

Модуль шлёт уведомления о заявках на API-ключ и о решении (одобрение / отказ). Подстановка — простой \`str_replace\` тегов вида <code>{'{'}%имя%{'}'}</code>.

Источник переменных: \`KeyNotifyDelivery\` + вызовы из \`ProfileKeyService\` / \`DecideKeyRequestHandler\`.

## Email (таблица \`_email\`) [#email-таблица-_email]

При установке плагина создаются шаблоны:

| \`name\`                | Назначение                                     |
| --------------------- | ---------------------------------------------- |
| \`dleapi_key_request\`  | Новая заявка (получатели — админы из настроек) |
| \`dleapi_key_decision\` | Одобрение / отказ (получатель — заявитель)     |

Редактирование теперь вынесено прямо в **DevCraft → DLE API → Настройки**. При сохранении модуль:

* обновляет темы писем в \`dleapi.json\`
* синхронизирует тела \`dleapi_key_request\` и \`dleapi_key_decision\` в таблицу \`PREFIX_email\`
* автоматически создаёт шаблоны по умолчанию, если записей ещё нет

Тема письма берётся из поля настроек и передаётся в <code>{'{'}%subject%{'}'}</code>. При отправке дополнительно подставляется <code>{'{'}%site\\_url%{'}'}</code> (домашний URL сайта без хвостового \`/\`).

Шаблоны по умолчанию — **HTML** (\`use_html=1\`). Они показываются и редактируются в настройках модуля, а не в отдельной админке e-mail.

## PM (настройки модуля) [#pm-настройки-модуля]

Темы и тела ЛС: [Настройки](settings) → вкладки уведомлений.

* заявка: \`pm_request_subject\` / \`pm_request_body\`
* одобрение: \`pm_approve_*\`
* отказ: \`pm_deny_*\`

Те же плейсхолдеры, что и в email (кроме <code>{'{'}%username%{'}'}</code> / <code>{'{'}%site\\_url%{'}'}</code> — только в письме). Рядом с каждым полем модуль рендерит кликабельный список тегов, который вставляет значение в текущую позицию курсора или в TinyMCE.

## Плейсхолдеры [#плейсхолдеры]

### Заявка (\`dleapi_key_request\` / PM заявки) [#заявка-dleapi_key_request--pm-заявки]

Только уведомления **администраторам**. В шаблоны решения для пользователя <code>{'{'}%request\\_url%{'}'}</code> не передаётся.

| Тег                                   | Значение                                                                    |
| ------------------------------------- | --------------------------------------------------------------------------- |
| <code>{'{'}%user\\_id%{'}'}</code>     | ID пользователя-заявителя                                                   |
| <code>{'{'}%level%{'}'}</code>        | Название уровня доступа заявки                                              |
| <code>{'{'}%request\\_id%{'}'}</code>  | ID заявки                                                                   |
| <code>{'{'}%request\\_url%{'}'}</code> | Ссылка в админку: \`…/admin.php?mod=dleapi&action=key_requests#request-<id>\` |
| <code>{'{'}%subject%{'}'}</code>      | Тема (напр. «Заявка на API-ключ»)                                           |
| <code>{'{'}%username%{'}'}</code>     | Имя получателя письма (только email)                                        |
| <code>{'{'}%site\\_url%{'}'}</code>    | URL сайта (только email)                                                    |

### Решение (\`dleapi_key_decision\` / PM одобрения и отказа) [#решение-dleapi_key_decision--pm-одобрения-и-отказа]

| Тег                                | Значение                                                |
| ---------------------------------- | ------------------------------------------------------- |
| <code>{'{'}%user\\_id%{'}'}</code>  | ID пользователя                                         |
| <code>{'{'}%api\\_key%{'}'}</code>  | Выданный ключ при одобрении; при отказе — пустая строка |
| <code>{'{'}%subject%{'}'}</code>   | «API-ключ одобрен» / «API-ключ отклонён»                |
| <code>{'{'}%username%{'}'}</code>  | Имя получателя письма (только email)                    |
| <code>{'{'}%site\\_url%{'}'}</code> | URL сайта (только email)                                |

## Дефолтные тексты [#дефолтные-тексты]

### PM: заявка [#pm-заявка]

\`\`\`text
Поступила новая заявка на API-ключ.
Пользователь: {%user_id%}
Уровень доступа: {%level%}
Номер заявки: {%request_id%}
Открыть заявку: {%request_url%}
\`\`\`

### PM: одобрение [#pm-одобрение]

\`\`\`text
Ваш API-ключ одобрен.
Ключ: {%api_key%}
\`\`\`

### PM: отказ [#pm-отказ]

\`\`\`text
Ваша заявка на API-ключ отклонена.
\`\`\`

Фрагмент тела HTML-письма заявки:

\`\`\`html
{%username%},<br><br>
Это письмо отправлено с сайта <a href="{%site_url%}">{%site_url%}</a>.<br><br>
Поступила новая заявка на API-ключ.<br>
Пользователь (ID): {%user_id%}<br>
Уровень доступа: {%level%}<br>
Номер заявки: #{%request_id%}<br><br>
<a href="{%request_url%}">{%request_url%}</a>
\`\`\`

## См. также [#см-также]

* [Настройки](settings)
`,o={contents:[{heading:void 0,content:"Модуль шлёт уведомления о заявках на API-ключ и о решении (одобрение / отказ). Подстановка — простой `str_replace` тегов вида {'{'}%имя%{'}'}."},{heading:void 0,content:"Источник переменных: `KeyNotifyDelivery` + вызовы из `ProfileKeyService` / `DecideKeyRequestHandler`."},{heading:`email-таблица-_email`,content:`При установке плагина создаются шаблоны:`},{heading:`email-таблица-_email`,content:"`name`"},{heading:`email-таблица-_email`,content:`Назначение`},{heading:`email-таблица-_email`,content:"`dleapi_key_request`"},{heading:`email-таблица-_email`,content:`Новая заявка (получатели — админы из настроек)`},{heading:`email-таблица-_email`,content:"`dleapi_key_decision`"},{heading:`email-таблица-_email`,content:`Одобрение / отказ (получатель — заявитель)`},{heading:`email-таблица-_email`,content:`Редактирование теперь вынесено прямо в **DevCraft → DLE API → Настройки**. При сохранении модуль:`},{heading:`email-таблица-_email`,content:"обновляет темы писем в `dleapi.json`"},{heading:`email-таблица-_email`,content:"синхронизирует тела `dleapi_key_request` и `dleapi_key_decision` в таблицу `PREFIX_email`"},{heading:`email-таблица-_email`,content:`автоматически создаёт шаблоны по умолчанию, если записей ещё нет`},{heading:`email-таблица-_email`,content:"Тема письма берётся из поля настроек и передаётся в {'{'}%subject%{'}'}. При отправке дополнительно подставляется {'{'}%site\\_url%{'}'} (домашний URL сайта без хвостового `/`)."},{heading:`email-таблица-_email`,content:"Шаблоны по умолчанию — **HTML** (`use_html=1`). Они показываются и редактируются в настройках модуля, а не в отдельной админке e-mail."},{heading:`pm-настройки-модуля`,content:`Темы и тела ЛС: Настройки → вкладки уведомлений.`},{heading:`pm-настройки-модуля`,content:"заявка: `pm_request_subject` / `pm_request_body`"},{heading:`pm-настройки-модуля`,content:"одобрение: `pm_approve_*`"},{heading:`pm-настройки-модуля`,content:"отказ: `pm_deny_*`"},{heading:`pm-настройки-модуля`,content:`Те же плейсхолдеры, что и в email (кроме {'{'}%username%{'}'} / {'{'}%site\\_url%{'}'} — только в письме). Рядом с каждым полем модуль рендерит кликабельный список тегов, который вставляет значение в текущую позицию курсора или в TinyMCE.`},{heading:`заявка-dleapi_key_request--pm-заявки`,content:`Только уведомления **администраторам**. В шаблоны решения для пользователя {'{'}%request\\_url%{'}'} не передаётся.`},{heading:`заявка-dleapi_key_request--pm-заявки`,content:`Тег`},{heading:`заявка-dleapi_key_request--pm-заявки`,content:`Значение`},{heading:`заявка-dleapi_key_request--pm-заявки`,content:`{'{'}%user\\_id%{'}'}`},{heading:`заявка-dleapi_key_request--pm-заявки`,content:`ID пользователя-заявителя`},{heading:`заявка-dleapi_key_request--pm-заявки`,content:`{'{'}%level%{'}'}`},{heading:`заявка-dleapi_key_request--pm-заявки`,content:`Название уровня доступа заявки`},{heading:`заявка-dleapi_key_request--pm-заявки`,content:`{'{'}%request\\_id%{'}'}`},{heading:`заявка-dleapi_key_request--pm-заявки`,content:`ID заявки`},{heading:`заявка-dleapi_key_request--pm-заявки`,content:`{'{'}%request\\_url%{'}'}`},{heading:`заявка-dleapi_key_request--pm-заявки`,content:"Ссылка в админку: `…/admin.php?mod=dleapi&action=key_requests#request-<id>`"},{heading:`заявка-dleapi_key_request--pm-заявки`,content:`{'{'}%subject%{'}'}`},{heading:`заявка-dleapi_key_request--pm-заявки`,content:`Тема (напр. «Заявка на API-ключ»)`},{heading:`заявка-dleapi_key_request--pm-заявки`,content:`{'{'}%username%{'}'}`},{heading:`заявка-dleapi_key_request--pm-заявки`,content:`Имя получателя письма (только email)`},{heading:`заявка-dleapi_key_request--pm-заявки`,content:`{'{'}%site\\_url%{'}'}`},{heading:`заявка-dleapi_key_request--pm-заявки`,content:`URL сайта (только email)`},{heading:`решение-dleapi_key_decision--pm-одобрения-и-отказа`,content:`Тег`},{heading:`решение-dleapi_key_decision--pm-одобрения-и-отказа`,content:`Значение`},{heading:`решение-dleapi_key_decision--pm-одобрения-и-отказа`,content:`{'{'}%user\\_id%{'}'}`},{heading:`решение-dleapi_key_decision--pm-одобрения-и-отказа`,content:`ID пользователя`},{heading:`решение-dleapi_key_decision--pm-одобрения-и-отказа`,content:`{'{'}%api\\_key%{'}'}`},{heading:`решение-dleapi_key_decision--pm-одобрения-и-отказа`,content:`Выданный ключ при одобрении; при отказе — пустая строка`},{heading:`решение-dleapi_key_decision--pm-одобрения-и-отказа`,content:`{'{'}%subject%{'}'}`},{heading:`решение-dleapi_key_decision--pm-одобрения-и-отказа`,content:`«API-ключ одобрен» / «API-ключ отклонён»`},{heading:`решение-dleapi_key_decision--pm-одобрения-и-отказа`,content:`{'{'}%username%{'}'}`},{heading:`решение-dleapi_key_decision--pm-одобрения-и-отказа`,content:`Имя получателя письма (только email)`},{heading:`решение-dleapi_key_decision--pm-одобрения-и-отказа`,content:`{'{'}%site\\_url%{'}'}`},{heading:`решение-dleapi_key_decision--pm-одобрения-и-отказа`,content:`URL сайта (только email)`},{heading:`pm-отказ`,content:`Фрагмент тела HTML-письма заявки:`},{heading:`см-также`,content:`Настройки`}],headings:[{id:`email-таблица-_email`,content:"Email (таблица `_email`)"},{id:`pm-настройки-модуля`,content:`PM (настройки модуля)`},{id:`плейсхолдеры`,content:`Плейсхолдеры`},{id:`заявка-dleapi_key_request--pm-заявки`,content:"Заявка (`dleapi_key_request` / PM заявки)"},{id:`решение-dleapi_key_decision--pm-одобрения-и-отказа`,content:"Решение (`dleapi_key_decision` / PM одобрения и отказа)"},{id:`дефолтные-тексты`,content:`Дефолтные тексты`},{id:`pm-заявка`,content:`PM: заявка`},{id:`pm-одобрение`,content:`PM: одобрение`},{id:`pm-отказ`,content:`PM: отказ`},{id:`см-также`,content:`См. также`}]},s=[{depth:2,url:`#email-таблица-_email`,title:(0,n.jsxs)(n.Fragment,{children:[`Email (таблица `,(0,n.jsx)(`code`,{children:`_email`}),`)`]})},{depth:2,url:`#pm-настройки-модуля`,title:(0,n.jsx)(n.Fragment,{children:`PM (настройки модуля)`})},{depth:2,url:`#плейсхолдеры`,title:(0,n.jsx)(n.Fragment,{children:`Плейсхолдеры`})},{depth:3,url:`#заявка-dleapi_key_request--pm-заявки`,title:(0,n.jsxs)(n.Fragment,{children:[`Заявка (`,(0,n.jsx)(`code`,{children:`dleapi_key_request`}),` / PM заявки)`]})},{depth:3,url:`#решение-dleapi_key_decision--pm-одобрения-и-отказа`,title:(0,n.jsxs)(n.Fragment,{children:[`Решение (`,(0,n.jsx)(`code`,{children:`dleapi_key_decision`}),` / PM одобрения и отказа)`]})},{depth:2,url:`#дефолтные-тексты`,title:(0,n.jsx)(n.Fragment,{children:`Дефолтные тексты`})},{depth:3,url:`#pm-заявка`,title:(0,n.jsx)(n.Fragment,{children:`PM: заявка`})},{depth:3,url:`#pm-одобрение`,title:(0,n.jsx)(n.Fragment,{children:`PM: одобрение`})},{depth:3,url:`#pm-отказ`,title:(0,n.jsx)(n.Fragment,{children:`PM: отказ`})},{depth:2,url:`#см-также`,title:(0,n.jsx)(n.Fragment,{children:`См. также`})}];function c(e){let t={a:`a`,code:`code`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,span:`span`,strong:`strong`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,ul:`ul`,...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:[`Модуль шлёт уведомления о заявках на API-ключ и о решении (одобрение / отказ). Подстановка — простой `,(0,n.jsx)(t.code,{children:`str_replace`}),` тегов вида `,(0,n.jsxs)(`code`,{children:[`{`,`%имя%`,`}`]}),`.`]}),`
`,(0,n.jsxs)(t.p,{children:[`Источник переменных: `,(0,n.jsx)(t.code,{children:`KeyNotifyDelivery`}),` + вызовы из `,(0,n.jsx)(t.code,{children:`ProfileKeyService`}),` / `,(0,n.jsx)(t.code,{children:`DecideKeyRequestHandler`}),`.`]}),`
`,(0,n.jsxs)(t.h2,{id:`email-таблица-_email`,children:[`Email (таблица `,(0,n.jsx)(t.code,{children:`_email`}),`)`]}),`
`,(0,n.jsx)(t.p,{children:`При установке плагина создаются шаблоны:`}),`
`,(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:(0,n.jsx)(t.code,{children:`name`})}),(0,n.jsx)(t.th,{children:`Назначение`})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:`dleapi_key_request`})}),(0,n.jsx)(t.td,{children:`Новая заявка (получатели — админы из настроек)`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:`dleapi_key_decision`})}),(0,n.jsx)(t.td,{children:`Одобрение / отказ (получатель — заявитель)`})]})]})]}),`
`,(0,n.jsxs)(t.p,{children:[`Редактирование теперь вынесено прямо в `,(0,n.jsx)(t.strong,{children:`DevCraft → DLE API → Настройки`}),`. При сохранении модуль:`]}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[`обновляет темы писем в `,(0,n.jsx)(t.code,{children:`dleapi.json`})]}),`
`,(0,n.jsxs)(t.li,{children:[`синхронизирует тела `,(0,n.jsx)(t.code,{children:`dleapi_key_request`}),` и `,(0,n.jsx)(t.code,{children:`dleapi_key_decision`}),` в таблицу `,(0,n.jsx)(t.code,{children:`PREFIX_email`})]}),`
`,(0,n.jsx)(t.li,{children:`автоматически создаёт шаблоны по умолчанию, если записей ещё нет`}),`
`]}),`
`,(0,n.jsxs)(t.p,{children:[`Тема письма берётся из поля настроек и передаётся в `,(0,n.jsxs)(`code`,{children:[`{`,`%subject%`,`}`]}),`. При отправке дополнительно подставляется `,(0,n.jsxs)(`code`,{children:[`{`,`%site_url%`,`}`]}),` (домашний URL сайта без хвостового `,(0,n.jsx)(t.code,{children:`/`}),`).`]}),`
`,(0,n.jsxs)(t.p,{children:[`Шаблоны по умолчанию — `,(0,n.jsx)(t.strong,{children:`HTML`}),` (`,(0,n.jsx)(t.code,{children:`use_html=1`}),`). Они показываются и редактируются в настройках модуля, а не в отдельной админке e-mail.`]}),`
`,(0,n.jsx)(t.h2,{id:`pm-настройки-модуля`,children:`PM (настройки модуля)`}),`
`,(0,n.jsxs)(t.p,{children:[`Темы и тела ЛС: `,(0,n.jsx)(t.a,{href:`settings`,children:`Настройки`}),` → вкладки уведомлений.`]}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[`заявка: `,(0,n.jsx)(t.code,{children:`pm_request_subject`}),` / `,(0,n.jsx)(t.code,{children:`pm_request_body`})]}),`
`,(0,n.jsxs)(t.li,{children:[`одобрение: `,(0,n.jsx)(t.code,{children:`pm_approve_*`})]}),`
`,(0,n.jsxs)(t.li,{children:[`отказ: `,(0,n.jsx)(t.code,{children:`pm_deny_*`})]}),`
`]}),`
`,(0,n.jsxs)(t.p,{children:[`Те же плейсхолдеры, что и в email (кроме `,(0,n.jsxs)(`code`,{children:[`{`,`%username%`,`}`]}),` / `,(0,n.jsxs)(`code`,{children:[`{`,`%site_url%`,`}`]}),` — только в письме). Рядом с каждым полем модуль рендерит кликабельный список тегов, который вставляет значение в текущую позицию курсора или в TinyMCE.`]}),`
`,(0,n.jsx)(t.h2,{id:`плейсхолдеры`,children:`Плейсхолдеры`}),`
`,(0,n.jsxs)(t.h3,{id:`заявка-dleapi_key_request--pm-заявки`,children:[`Заявка (`,(0,n.jsx)(t.code,{children:`dleapi_key_request`}),` / PM заявки)`]}),`
`,(0,n.jsxs)(t.p,{children:[`Только уведомления `,(0,n.jsx)(t.strong,{children:`администраторам`}),`. В шаблоны решения для пользователя `,(0,n.jsxs)(`code`,{children:[`{`,`%request_url%`,`}`]}),` не передаётся.`]}),`
`,(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`Тег`}),(0,n.jsx)(t.th,{children:`Значение`})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsxs)(`code`,{children:[`{`,`%user_id%`,`}`]})}),(0,n.jsx)(t.td,{children:`ID пользователя-заявителя`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsxs)(`code`,{children:[`{`,`%level%`,`}`]})}),(0,n.jsx)(t.td,{children:`Название уровня доступа заявки`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsxs)(`code`,{children:[`{`,`%request_id%`,`}`]})}),(0,n.jsx)(t.td,{children:`ID заявки`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsxs)(`code`,{children:[`{`,`%request_url%`,`}`]})}),(0,n.jsxs)(t.td,{children:[`Ссылка в админку: `,(0,n.jsx)(t.code,{children:`…/admin.php?mod=dleapi&action=key_requests#request-<id>`})]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsxs)(`code`,{children:[`{`,`%subject%`,`}`]})}),(0,n.jsx)(t.td,{children:`Тема (напр. «Заявка на API-ключ»)`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsxs)(`code`,{children:[`{`,`%username%`,`}`]})}),(0,n.jsx)(t.td,{children:`Имя получателя письма (только email)`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsxs)(`code`,{children:[`{`,`%site_url%`,`}`]})}),(0,n.jsx)(t.td,{children:`URL сайта (только email)`})]})]})]}),`
`,(0,n.jsxs)(t.h3,{id:`решение-dleapi_key_decision--pm-одобрения-и-отказа`,children:[`Решение (`,(0,n.jsx)(t.code,{children:`dleapi_key_decision`}),` / PM одобрения и отказа)`]}),`
`,(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`Тег`}),(0,n.jsx)(t.th,{children:`Значение`})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsxs)(`code`,{children:[`{`,`%user_id%`,`}`]})}),(0,n.jsx)(t.td,{children:`ID пользователя`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsxs)(`code`,{children:[`{`,`%api_key%`,`}`]})}),(0,n.jsx)(t.td,{children:`Выданный ключ при одобрении; при отказе — пустая строка`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsxs)(`code`,{children:[`{`,`%subject%`,`}`]})}),(0,n.jsx)(t.td,{children:`«API-ключ одобрен» / «API-ключ отклонён»`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsxs)(`code`,{children:[`{`,`%username%`,`}`]})}),(0,n.jsx)(t.td,{children:`Имя получателя письма (только email)`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsxs)(`code`,{children:[`{`,`%site_url%`,`}`]})}),(0,n.jsx)(t.td,{children:`URL сайта (только email)`})]})]})]}),`
`,(0,n.jsx)(t.h2,{id:`дефолтные-тексты`,children:`Дефолтные тексты`}),`
`,(0,n.jsx)(t.h3,{id:`pm-заявка`,children:`PM: заявка`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsxs)(t.code,{children:[(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`Поступила новая заявка на API-ключ.`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`Пользователь: {%user_id%}`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`Уровень доступа: {%level%}`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`Номер заявки: {%request_id%}`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`Открыть заявку: {%request_url%}`})})]})})}),`
`,(0,n.jsx)(t.h3,{id:`pm-одобрение`,children:`PM: одобрение`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsxs)(t.code,{children:[(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`Ваш API-ключ одобрен.`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`Ключ: {%api_key%}`})})]})})}),`
`,(0,n.jsx)(t.h3,{id:`pm-отказ`,children:`PM: отказ`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`Ваша заявка на API-ключ отклонена.`})})})})}),`
`,(0,n.jsx)(t.p,{children:`Фрагмент тела HTML-письма заявки:`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsxs)(t.code,{children:[(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`{%username%},<`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#22863A`,"--shiki-dark":`#85E89D`},children:`br`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`><`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#22863A`,"--shiki-dark":`#85E89D`},children:`br`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`>`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`Это письмо отправлено с сайта <`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#22863A`,"--shiki-dark":`#85E89D`},children:`a`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:` href`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`=`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`"{%site_url%}"`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`>{%site_url%}</`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#22863A`,"--shiki-dark":`#85E89D`},children:`a`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`>.<`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#22863A`,"--shiki-dark":`#85E89D`},children:`br`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`><`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#22863A`,"--shiki-dark":`#85E89D`},children:`br`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`>`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`Поступила новая заявка на API-ключ.<`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#22863A`,"--shiki-dark":`#85E89D`},children:`br`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`>`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`Пользователь (ID): {%user_id%}<`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#22863A`,"--shiki-dark":`#85E89D`},children:`br`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`>`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`Уровень доступа: {%level%}<`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#22863A`,"--shiki-dark":`#85E89D`},children:`br`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`>`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`Номер заявки: #{%request_id%}<`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#22863A`,"--shiki-dark":`#85E89D`},children:`br`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`><`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#22863A`,"--shiki-dark":`#85E89D`},children:`br`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`>`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`<`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#22863A`,"--shiki-dark":`#85E89D`},children:`a`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:` href`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`=`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`"{%request_url%}"`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`>{%request_url%}</`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#22863A`,"--shiki-dark":`#85E89D`},children:`a`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`>`})]})]})})}),`
`,(0,n.jsx)(t.h2,{id:`см-также`,children:`См. также`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`settings`,children:`Настройки`})}),`
`]})]})}function l(e={}){let{wrapper:t}=e.components||{};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}export{a as _markdown,l as default,r as frontmatter,i as lastModified,o as structuredData,s as toc};