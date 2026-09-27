import{r as e}from"./rolldown-runtime-QTnfLwEv.js";import{t}from"./jsx-runtime-By8HlURe.js";var n=e(t()),r={title:`Привязка Telegram`,description:`Два пути привязки: секретная строка на DLE 20 и вход Telegram в профиле на DLE 21.`,version:`200.1.0`},i=new Date(1790523217e3),a=`

Чтобы уведомления приходили в чат, сайт должен знать **chat id** пользователя. Модуль выбирает путь сам: есть ли на сайте системный вход Telegram (DLE 21) или нет.

<Callout type="info" title="Один и тот же бот">
  Ключ и имя бота в настройках модуля — тот же бот, с которым человек переписывается. На DLE 21 он должен совпадать с \`telegramid\` в настройках соцсетей DLE.
</Callout>

## Путь A: DLE 20 или без системного Telegram [#путь-a-dle-20-или-без-системного-telegram]

Когда встроенный вход Telegram на сайте **выключен** (или версия DLE ниже 21):

1. Пользователь открывает блок привязки в кабинете (или кнопку из \`show_telegram_bind.php\`).
2. Сайт выдаёт ссылку вида \`https://t.me/{имя_бота}?start={секретная_строка}\`.
3. Человек открывает ссылку и нажимает **Старт** (в чат уходит \`/start СЕКРЕТ\`).
4. Планировщик DLE вызывает \`notifyTelegramPollUpdates()\`: модуль читает новые сообщения бота и связывает секрет с chat id.
5. В чат приходит подтверждение: аккаунт привязан.

Секретная строка живёт ограниченное время (\`link_ttl_minutes\`, по умолчанию 60 минут). Истекла — блок выдаст новую.

## Путь B: DLE 21 с включённым Telegram в соцсетях [#путь-b-dle-21-с-включённым-telegram-в-соцсетях]

Когда в настройках соцсетей DLE включён Telegram и заданы \`telegramid\` / секрет:

1. Сначала человек **привязывает Telegram в профиле DLE** (штатный вход соцсети). Блок привязки ведёт на страницу профиля.
2. Патч \`social.class.php\` запоминает Telegram id пользователя в таблице модуля (ещё без подтверждения чата).
3. Затем человек открывает **того же** бота и жмёт обычный **Старт** (\`/start\` **без** секретной строки).
4. Опрос бота из cron подтверждает привязку по chat id и ставит дату связи.
5. В чат приходит то же подтверждение.

Если бот в настройках уведомлений **не** совпадает с ботом Login в DLE, вход в профиль и «Старт» в боте уведомлений разъедутся — привязка не состоится.

## Снять привязку [#снять-привязку]

Отвязка в модуле снимает только запись уведомлений (chat id). Штатную соцсеть Telegram в профиле DLE это не трогает. В блоке кабинета есть действие отвязки (публичный AJAX \`unlink\`).

## Права [#права]

Группе нужно право \`notifications_receive_telegram\` (страница **DLE Уведомления → Права групп**). Без него блок привязки и доставка в Telegram недоступны.

## См. также [#см-также]

* [Настройки бота](./settings)
* [Установка](../install)
* [Права групп ядра](/dev/dle/notifications/200.1.0/guides/permissions)
`,o={contents:[{heading:void 0,content:`Чтобы уведомления приходили в чат, сайт должен знать **chat id** пользователя. Модуль выбирает путь сам: есть ли на сайте системный вход Telegram (DLE 21) или нет.`},{heading:void 0,content:"Ключ и имя бота в настройках модуля — тот же бот, с которым человек переписывается. На DLE 21 он должен совпадать с `telegramid` в настройках соцсетей DLE."},{heading:`путь-a-dle-20-или-без-системного-telegram`,content:`Когда встроенный вход Telegram на сайте **выключен** (или версия DLE ниже 21):`},{heading:`путь-a-dle-20-или-без-системного-telegram`,content:"Пользователь открывает блок привязки в кабинете (или кнопку из `show_telegram_bind.php`)."},{heading:`путь-a-dle-20-или-без-системного-telegram`,content:"Сайт выдаёт ссылку вида `https://t.me/{имя_бота}?start={секретная_строка}`."},{heading:`путь-a-dle-20-или-без-системного-telegram`,content:"Человек открывает ссылку и нажимает **Старт** (в чат уходит `/start СЕКРЕТ`)."},{heading:`путь-a-dle-20-или-без-системного-telegram`,content:"Планировщик DLE вызывает `notifyTelegramPollUpdates()`: модуль читает новые сообщения бота и связывает секрет с chat id."},{heading:`путь-a-dle-20-или-без-системного-telegram`,content:`В чат приходит подтверждение: аккаунт привязан.`},{heading:`путь-a-dle-20-или-без-системного-telegram`,content:"Секретная строка живёт ограниченное время (`link_ttl_minutes`, по умолчанию 60 минут). Истекла — блок выдаст новую."},{heading:`путь-b-dle-21-с-включённым-telegram-в-соцсетях`,content:"Когда в настройках соцсетей DLE включён Telegram и заданы `telegramid` / секрет:"},{heading:`путь-b-dle-21-с-включённым-telegram-в-соцсетях`,content:`Сначала человек **привязывает Telegram в профиле DLE** (штатный вход соцсети). Блок привязки ведёт на страницу профиля.`},{heading:`путь-b-dle-21-с-включённым-telegram-в-соцсетях`,content:"Патч `social.class.php` запоминает Telegram id пользователя в таблице модуля (ещё без подтверждения чата)."},{heading:`путь-b-dle-21-с-включённым-telegram-в-соцсетях`,content:"Затем человек открывает **того же** бота и жмёт обычный **Старт** (`/start` **без** секретной строки)."},{heading:`путь-b-dle-21-с-включённым-telegram-в-соцсетях`,content:`Опрос бота из cron подтверждает привязку по chat id и ставит дату связи.`},{heading:`путь-b-dle-21-с-включённым-telegram-в-соцсетях`,content:`В чат приходит то же подтверждение.`},{heading:`путь-b-dle-21-с-включённым-telegram-в-соцсетях`,content:`Если бот в настройках уведомлений **не** совпадает с ботом Login в DLE, вход в профиль и «Старт» в боте уведомлений разъедутся — привязка не состоится.`},{heading:`снять-привязку`,content:"Отвязка в модуле снимает только запись уведомлений (chat id). Штатную соцсеть Telegram в профиле DLE это не трогает. В блоке кабинета есть действие отвязки (публичный AJAX `unlink`)."},{heading:`права`,content:"Группе нужно право `notifications_receive_telegram` (страница **DLE Уведомления → Права групп**). Без него блок привязки и доставка в Telegram недоступны."},{heading:`см-также`,content:`Настройки бота`},{heading:`см-также`,content:`Установка`},{heading:`см-также`,content:`Права групп ядра`}],headings:[{id:`путь-a-dle-20-или-без-системного-telegram`,content:`Путь A: DLE 20 или без системного Telegram`},{id:`путь-b-dle-21-с-включённым-telegram-в-соцсетях`,content:`Путь B: DLE 21 с включённым Telegram в соцсетях`},{id:`снять-привязку`,content:`Снять привязку`},{id:`права`,content:`Права`},{id:`см-также`,content:`См. также`}]},s=[{depth:2,url:`#путь-a-dle-20-или-без-системного-telegram`,title:(0,n.jsx)(n.Fragment,{children:`Путь A: DLE 20 или без системного Telegram`})},{depth:2,url:`#путь-b-dle-21-с-включённым-telegram-в-соцсетях`,title:(0,n.jsx)(n.Fragment,{children:`Путь B: DLE 21 с включённым Telegram в соцсетях`})},{depth:2,url:`#снять-привязку`,title:(0,n.jsx)(n.Fragment,{children:`Снять привязку`})},{depth:2,url:`#права`,title:(0,n.jsx)(n.Fragment,{children:`Права`})},{depth:2,url:`#см-также`,title:(0,n.jsx)(n.Fragment,{children:`См. также`})}];function c(e){let t={a:`a`,code:`code`,h2:`h2`,li:`li`,ol:`ol`,p:`p`,strong:`strong`,ul:`ul`,...e.components},{Callout:r}=t;return r||u(`Callout`,!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:[`Чтобы уведомления приходили в чат, сайт должен знать `,(0,n.jsx)(t.strong,{children:`chat id`}),` пользователя. Модуль выбирает путь сам: есть ли на сайте системный вход Telegram (DLE 21) или нет.`]}),`
`,(0,n.jsx)(r,{type:`info`,title:`Один и тот же бот`,children:(0,n.jsxs)(t.p,{children:[`Ключ и имя бота в настройках модуля — тот же бот, с которым человек переписывается. На DLE 21 он должен совпадать с `,(0,n.jsx)(t.code,{children:`telegramid`}),` в настройках соцсетей DLE.`]})}),`
`,(0,n.jsx)(t.h2,{id:`путь-a-dle-20-или-без-системного-telegram`,children:`Путь A: DLE 20 или без системного Telegram`}),`
`,(0,n.jsxs)(t.p,{children:[`Когда встроенный вход Telegram на сайте `,(0,n.jsx)(t.strong,{children:`выключен`}),` (или версия DLE ниже 21):`]}),`
`,(0,n.jsxs)(t.ol,{children:[`
`,(0,n.jsxs)(t.li,{children:[`Пользователь открывает блок привязки в кабинете (или кнопку из `,(0,n.jsx)(t.code,{children:`show_telegram_bind.php`}),`).`]}),`
`,(0,n.jsxs)(t.li,{children:[`Сайт выдаёт ссылку вида `,(0,n.jsx)(t.code,{children:`https://t.me/{имя_бота}?start={секретная_строка}`}),`.`]}),`
`,(0,n.jsxs)(t.li,{children:[`Человек открывает ссылку и нажимает `,(0,n.jsx)(t.strong,{children:`Старт`}),` (в чат уходит `,(0,n.jsx)(t.code,{children:`/start СЕКРЕТ`}),`).`]}),`
`,(0,n.jsxs)(t.li,{children:[`Планировщик DLE вызывает `,(0,n.jsx)(t.code,{children:`notifyTelegramPollUpdates()`}),`: модуль читает новые сообщения бота и связывает секрет с chat id.`]}),`
`,(0,n.jsx)(t.li,{children:`В чат приходит подтверждение: аккаунт привязан.`}),`
`]}),`
`,(0,n.jsxs)(t.p,{children:[`Секретная строка живёт ограниченное время (`,(0,n.jsx)(t.code,{children:`link_ttl_minutes`}),`, по умолчанию 60 минут). Истекла — блок выдаст новую.`]}),`
`,(0,n.jsx)(t.h2,{id:`путь-b-dle-21-с-включённым-telegram-в-соцсетях`,children:`Путь B: DLE 21 с включённым Telegram в соцсетях`}),`
`,(0,n.jsxs)(t.p,{children:[`Когда в настройках соцсетей DLE включён Telegram и заданы `,(0,n.jsx)(t.code,{children:`telegramid`}),` / секрет:`]}),`
`,(0,n.jsxs)(t.ol,{children:[`
`,(0,n.jsxs)(t.li,{children:[`Сначала человек `,(0,n.jsx)(t.strong,{children:`привязывает Telegram в профиле DLE`}),` (штатный вход соцсети). Блок привязки ведёт на страницу профиля.`]}),`
`,(0,n.jsxs)(t.li,{children:[`Патч `,(0,n.jsx)(t.code,{children:`social.class.php`}),` запоминает Telegram id пользователя в таблице модуля (ещё без подтверждения чата).`]}),`
`,(0,n.jsxs)(t.li,{children:[`Затем человек открывает `,(0,n.jsx)(t.strong,{children:`того же`}),` бота и жмёт обычный `,(0,n.jsx)(t.strong,{children:`Старт`}),` (`,(0,n.jsx)(t.code,{children:`/start`}),` `,(0,n.jsx)(t.strong,{children:`без`}),` секретной строки).`]}),`
`,(0,n.jsx)(t.li,{children:`Опрос бота из cron подтверждает привязку по chat id и ставит дату связи.`}),`
`,(0,n.jsx)(t.li,{children:`В чат приходит то же подтверждение.`}),`
`]}),`
`,(0,n.jsxs)(t.p,{children:[`Если бот в настройках уведомлений `,(0,n.jsx)(t.strong,{children:`не`}),` совпадает с ботом Login в DLE, вход в профиль и «Старт» в боте уведомлений разъедутся — привязка не состоится.`]}),`
`,(0,n.jsx)(t.h2,{id:`снять-привязку`,children:`Снять привязку`}),`
`,(0,n.jsxs)(t.p,{children:[`Отвязка в модуле снимает только запись уведомлений (chat id). Штатную соцсеть Telegram в профиле DLE это не трогает. В блоке кабинета есть действие отвязки (публичный AJAX `,(0,n.jsx)(t.code,{children:`unlink`}),`).`]}),`
`,(0,n.jsx)(t.h2,{id:`права`,children:`Права`}),`
`,(0,n.jsxs)(t.p,{children:[`Группе нужно право `,(0,n.jsx)(t.code,{children:`notifications_receive_telegram`}),` (страница `,(0,n.jsx)(t.strong,{children:`DLE Уведомления → Права групп`}),`). Без него блок привязки и доставка в Telegram недоступны.`]}),`
`,(0,n.jsx)(t.h2,{id:`см-также`,children:`См. также`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`./settings`,children:`Настройки бота`})}),`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`../install`,children:`Установка`})}),`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`/dev/dle/notifications/200.1.0/guides/permissions`,children:`Права групп ядра`})}),`
`]})]})}function l(e={}){let{wrapper:t}=e.components||{};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}function u(e,t){throw Error(`Expected `+(t?`component`:`object`)+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}export{a as _markdown,l as default,r as frontmatter,i as lastModified,o as structuredData,s as toc};