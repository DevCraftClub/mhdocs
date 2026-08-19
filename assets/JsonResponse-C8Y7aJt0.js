import{r as e}from"./rolldown-runtime-QTnfLwEv.js";import{t}from"./jsx-runtime-By8HlURe.js";var n=e(t()),r={title:`Класс: JsonResponse`,description:`Документация по плагину класс: jsonresponse для DLE.`},i=new Date(1787141927e3),a=`

## Краткое содержание: [#краткое-содержание]

JSON-ответ AJAX с единым контрактом success/data/notice/error.

***

### Свойства [#свойства]

*Нет публичных свойств.*

***

### Методы [#методы]

* public [\\_\\_construct()](#method___construct)
* public [toast()](#method_toast)
* public [ok()](#method_ok)
* public [notify()](#method_notify)
* public [fail()](#method_fail)
* private [noticePayload()](#method_noticePayload)
* private [build()](#method_build)
* public [send()](#method_send)

***

### Подробности [#подробности]

* Путь: \`devcraft/src/classes/Http/JsonResponse.php\`

***

## Детали [#детали]

### Методы [#методы-1]

<span id="method___construct" />

### \\_\\_construct() [#__construct]

Создаёт JSON-ответ с заданным телом и HTTP-кодом.

**С версии:** 200.4.0

**Параметры:**

* \`$status_code\` — HTTP-статус.

<span id="method_toast" />

### toast() [#toast]

Формирует успешный ответ с toast-уведомлением.

**С версии:** 200.4.0

**Параметры:**

* \`$message\` — Текст toast.
* \`$status\` — HTTP-статус.

**Возвращает:** \`self\` — Экземпляр JSON-ответа.

<span id="method_ok" />

### ok() [#ok]

Формирует успешный ответ без обязательного уведомления.

**С версии:** 200.4.0

**Параметры:**

* \`$toastMessage\` — Необязательный текст toast.

**Возвращает:** \`self\` — Экземпляр JSON-ответа.

<span id="method_notify" />

### notify() [#notify]

Формирует ответ с notify-блоком в интерфейсе.

**С версии:** 200.4.0

**Параметры:**

* \`$title\` — Заголовок уведомления.
* \`$message\` — Текст уведомления.
* \`$type\` — Тип уведомления (см. TYPE\\_\\*).
* \`$status\` — HTTP-статус.
* \`$success\` — Флаг успеха операции.

**Возвращает:** \`self\` — Экземпляр JSON-ответа.

<span id="method_fail" />

### fail() [#fail]

Формирует ответ об ошибке с notify и структурой error.

**С версии:** 200.4.0

**Параметры:**

* \`$title\` — Заголовок ошибки.
* \`$message\` — Текст ошибки.
* \`$code\` — Машиночитаемый код ошибки.
* \`$status\` — HTTP-статус.

**Возвращает:** \`self\` — Экземпляр JSON-ответа.

<span id="method_noticePayload" />

### noticePayload() [#noticepayload]

Собирает структуру notice для toast или notify.

**С версии:** 200.4.0

**Параметры:**

* \`$channel\` — Канал уведомления.
* \`$message\` — Текст сообщения.
* \`$title\` — Заголовок (для notify).
* \`$type\` — Тип уведомления.

**Возвращает:** \`array{channel: string, message: string, title?: string, type?: string}\` — Payload notice.

<span id="method_build" />

### build() [#build]

Создаёт экземпляр ответа из готового тела.

**С версии:** 200.4.0

**Параметры:**

* \`$status\` — HTTP-статус.

**Возвращает:** \`self\` — Экземпляр JSON-ответа.

<span id="method_send" />

### send() [#send]

Отправляет JSON-ответ клиенту с заголовками и HTTP-кодом.

**С версии:** 200.4.0
`,o={contents:[{heading:`краткое-содержание`,content:`JSON-ответ AJAX с единым контрактом success/data/notice/error.`},{heading:`свойства`,content:`*Нет публичных свойств.*`},{heading:`методы`,content:`public \\_\\_construct()`},{heading:`методы`,content:`public toast()`},{heading:`методы`,content:`public ok()`},{heading:`методы`,content:`public notify()`},{heading:`методы`,content:`public fail()`},{heading:`методы`,content:`private noticePayload()`},{heading:`методы`,content:`private build()`},{heading:`методы`,content:`public send()`},{heading:`подробности`,content:"Путь: `devcraft/src/classes/Http/JsonResponse.php`"},{heading:`__construct`,content:`Создаёт JSON-ответ с заданным телом и HTTP-кодом.`},{heading:`__construct`,content:`**С версии:** 200.4.0`},{heading:`__construct`,content:`**Параметры:**`},{heading:`__construct`,content:"`$status_code` — HTTP-статус."},{heading:`toast`,content:`Формирует успешный ответ с toast-уведомлением.`},{heading:`toast`,content:`**С версии:** 200.4.0`},{heading:`toast`,content:`**Параметры:**`},{heading:`toast`,content:"`$message` — Текст toast."},{heading:`toast`,content:"`$status` — HTTP-статус."},{heading:`toast`,content:"**Возвращает:** `self` — Экземпляр JSON-ответа."},{heading:`ok`,content:`Формирует успешный ответ без обязательного уведомления.`},{heading:`ok`,content:`**С версии:** 200.4.0`},{heading:`ok`,content:`**Параметры:**`},{heading:`ok`,content:"`$toastMessage` — Необязательный текст toast."},{heading:`ok`,content:"**Возвращает:** `self` — Экземпляр JSON-ответа."},{heading:`notify`,content:`Формирует ответ с notify-блоком в интерфейсе.`},{heading:`notify`,content:`**С версии:** 200.4.0`},{heading:`notify`,content:`**Параметры:**`},{heading:`notify`,content:"`$title` — Заголовок уведомления."},{heading:`notify`,content:"`$message` — Текст уведомления."},{heading:`notify`,content:"`$type` — Тип уведомления (см. TYPE\\_\\*)."},{heading:`notify`,content:"`$status` — HTTP-статус."},{heading:`notify`,content:"`$success` — Флаг успеха операции."},{heading:`notify`,content:"**Возвращает:** `self` — Экземпляр JSON-ответа."},{heading:`fail`,content:`Формирует ответ об ошибке с notify и структурой error.`},{heading:`fail`,content:`**С версии:** 200.4.0`},{heading:`fail`,content:`**Параметры:**`},{heading:`fail`,content:"`$title` — Заголовок ошибки."},{heading:`fail`,content:"`$message` — Текст ошибки."},{heading:`fail`,content:"`$code` — Машиночитаемый код ошибки."},{heading:`fail`,content:"`$status` — HTTP-статус."},{heading:`fail`,content:"**Возвращает:** `self` — Экземпляр JSON-ответа."},{heading:`noticepayload`,content:`Собирает структуру notice для toast или notify.`},{heading:`noticepayload`,content:`**С версии:** 200.4.0`},{heading:`noticepayload`,content:`**Параметры:**`},{heading:`noticepayload`,content:"`$channel` — Канал уведомления."},{heading:`noticepayload`,content:"`$message` — Текст сообщения."},{heading:`noticepayload`,content:"`$title` — Заголовок (для notify)."},{heading:`noticepayload`,content:"`$type` — Тип уведомления."},{heading:`noticepayload`,content:"**Возвращает:** `array{channel: string, message: string, title?: string, type?: string}` — Payload notice."},{heading:`build`,content:`Создаёт экземпляр ответа из готового тела.`},{heading:`build`,content:`**С версии:** 200.4.0`},{heading:`build`,content:`**Параметры:**`},{heading:`build`,content:"`$status` — HTTP-статус."},{heading:`build`,content:"**Возвращает:** `self` — Экземпляр JSON-ответа."},{heading:`send`,content:`Отправляет JSON-ответ клиенту с заголовками и HTTP-кодом.`},{heading:`send`,content:`**С версии:** 200.4.0`}],headings:[{id:`краткое-содержание`,content:`Краткое содержание:`},{id:`свойства`,content:`Свойства`},{id:`методы`,content:`Методы`},{id:`подробности`,content:`Подробности`},{id:`детали`,content:`Детали`},{id:`методы-1`,content:`Методы`},{id:`__construct`,content:`\\__construct()`},{id:`toast`,content:`toast()`},{id:`ok`,content:`ok()`},{id:`notify`,content:`notify()`},{id:`fail`,content:`fail()`},{id:`noticepayload`,content:`noticePayload()`},{id:`build`,content:`build()`},{id:`send`,content:`send()`}]},s=[{depth:2,url:`#краткое-содержание`,title:(0,n.jsx)(n.Fragment,{children:`Краткое содержание:`})},{depth:3,url:`#свойства`,title:(0,n.jsx)(n.Fragment,{children:`Свойства`})},{depth:3,url:`#методы`,title:(0,n.jsx)(n.Fragment,{children:`Методы`})},{depth:3,url:`#подробности`,title:(0,n.jsx)(n.Fragment,{children:`Подробности`})},{depth:2,url:`#детали`,title:(0,n.jsx)(n.Fragment,{children:`Детали`})},{depth:3,url:`#методы-1`,title:(0,n.jsx)(n.Fragment,{children:`Методы`})},{depth:3,url:`#__construct`,title:(0,n.jsx)(n.Fragment,{children:`__construct()`})},{depth:3,url:`#toast`,title:(0,n.jsx)(n.Fragment,{children:`toast()`})},{depth:3,url:`#ok`,title:(0,n.jsx)(n.Fragment,{children:`ok()`})},{depth:3,url:`#notify`,title:(0,n.jsx)(n.Fragment,{children:`notify()`})},{depth:3,url:`#fail`,title:(0,n.jsx)(n.Fragment,{children:`fail()`})},{depth:3,url:`#noticepayload`,title:(0,n.jsx)(n.Fragment,{children:`noticePayload()`})},{depth:3,url:`#build`,title:(0,n.jsx)(n.Fragment,{children:`build()`})},{depth:3,url:`#send`,title:(0,n.jsx)(n.Fragment,{children:`send()`})}];function c(e){let t={a:`a`,code:`code`,em:`em`,h2:`h2`,h3:`h3`,hr:`hr`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h2,{id:`краткое-содержание`,children:`Краткое содержание:`}),`
`,(0,n.jsx)(t.p,{children:`JSON-ответ AJAX с единым контрактом success/data/notice/error.`}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsx)(t.h3,{id:`свойства`,children:`Свойства`}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.em,{children:`Нет публичных свойств.`})}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsx)(t.h3,{id:`методы`,children:`Методы`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method___construct`,children:`__construct()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method_toast`,children:`toast()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method_ok`,children:`ok()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method_notify`,children:`notify()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method_fail`,children:`fail()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`private `,(0,n.jsx)(t.a,{href:`#method_noticePayload`,children:`noticePayload()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`private `,(0,n.jsx)(t.a,{href:`#method_build`,children:`build()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method_send`,children:`send()`})]}),`
`]}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsx)(t.h3,{id:`подробности`,children:`Подробности`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[`Путь: `,(0,n.jsx)(t.code,{children:`devcraft/src/classes/Http/JsonResponse.php`})]}),`
`]}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsx)(t.h2,{id:`детали`,children:`Детали`}),`
`,(0,n.jsx)(t.h3,{id:`методы-1`,children:`Методы`}),`
`,(0,n.jsx)(`span`,{id:`method___construct`}),`
`,(0,n.jsx)(t.h3,{id:`__construct`,children:`__construct()`}),`
`,(0,n.jsx)(t.p,{children:`Создаёт JSON-ответ с заданным телом и HTTP-кодом.`}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 200.4.0`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$status_code`}),` — HTTP-статус.`]}),`
`]}),`
`,(0,n.jsx)(`span`,{id:`method_toast`}),`
`,(0,n.jsx)(t.h3,{id:`toast`,children:`toast()`}),`
`,(0,n.jsx)(t.p,{children:`Формирует успешный ответ с toast-уведомлением.`}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 200.4.0`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$message`}),` — Текст toast.`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$status`}),` — HTTP-статус.`]}),`
`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`self`}),` — Экземпляр JSON-ответа.`]}),`
`,(0,n.jsx)(`span`,{id:`method_ok`}),`
`,(0,n.jsx)(t.h3,{id:`ok`,children:`ok()`}),`
`,(0,n.jsx)(t.p,{children:`Формирует успешный ответ без обязательного уведомления.`}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 200.4.0`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$toastMessage`}),` — Необязательный текст toast.`]}),`
`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`self`}),` — Экземпляр JSON-ответа.`]}),`
`,(0,n.jsx)(`span`,{id:`method_notify`}),`
`,(0,n.jsx)(t.h3,{id:`notify`,children:`notify()`}),`
`,(0,n.jsx)(t.p,{children:`Формирует ответ с notify-блоком в интерфейсе.`}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 200.4.0`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$title`}),` — Заголовок уведомления.`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$message`}),` — Текст уведомления.`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$type`}),` — Тип уведомления (см. TYPE_*).`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$status`}),` — HTTP-статус.`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$success`}),` — Флаг успеха операции.`]}),`
`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`self`}),` — Экземпляр JSON-ответа.`]}),`
`,(0,n.jsx)(`span`,{id:`method_fail`}),`
`,(0,n.jsx)(t.h3,{id:`fail`,children:`fail()`}),`
`,(0,n.jsx)(t.p,{children:`Формирует ответ об ошибке с notify и структурой error.`}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 200.4.0`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$title`}),` — Заголовок ошибки.`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$message`}),` — Текст ошибки.`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$code`}),` — Машиночитаемый код ошибки.`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$status`}),` — HTTP-статус.`]}),`
`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`self`}),` — Экземпляр JSON-ответа.`]}),`
`,(0,n.jsx)(`span`,{id:`method_noticePayload`}),`
`,(0,n.jsx)(t.h3,{id:`noticepayload`,children:`noticePayload()`}),`
`,(0,n.jsx)(t.p,{children:`Собирает структуру notice для toast или notify.`}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 200.4.0`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$channel`}),` — Канал уведомления.`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$message`}),` — Текст сообщения.`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$title`}),` — Заголовок (для notify).`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$type`}),` — Тип уведомления.`]}),`
`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`array{channel: string, message: string, title?: string, type?: string}`}),` — Payload notice.`]}),`
`,(0,n.jsx)(`span`,{id:`method_build`}),`
`,(0,n.jsx)(t.h3,{id:`build`,children:`build()`}),`
`,(0,n.jsx)(t.p,{children:`Создаёт экземпляр ответа из готового тела.`}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 200.4.0`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$status`}),` — HTTP-статус.`]}),`
`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`self`}),` — Экземпляр JSON-ответа.`]}),`
`,(0,n.jsx)(`span`,{id:`method_send`}),`
`,(0,n.jsx)(t.h3,{id:`send`,children:`send()`}),`
`,(0,n.jsx)(t.p,{children:`Отправляет JSON-ответ клиенту с заголовками и HTTP-кодом.`}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 200.4.0`]})]})}function l(e={}){let{wrapper:t}=e.components||{};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}export{a as _markdown,l as default,r as frontmatter,i as lastModified,o as structuredData,s as toc};