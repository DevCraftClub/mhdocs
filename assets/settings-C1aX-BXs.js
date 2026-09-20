import{r as e}from"./rolldown-runtime-QTnfLwEv.js";import{t}from"./jsx-runtime-By8HlURe.js";var n=e(t()),r={title:`Настройки бота`,description:`Ключ бота, имя без @, срок ссылки привязки и сколько сообщений забирать за раз.`,version:`200.1.0`},i=new Date(1789913881e3),a=`

Страница: \`?mod=notifications&action=telegram\`. Те же поля попадают на общую страницу настроек ядра Уведомлений (префикс кода модуля).

## Бот [#бот]

| Поле                             | Зачем                                                                                                                         |
| -------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| **Включить доставку в Telegram** | Без галочки способ доставки не подключается к рассылке.                                                                       |
| **Ключ бота**                    | Строка от [@BotFather](https://t.me/BotFather). На DLE 21 — тот же бот, что в настройках входа Telegram на сайте.             |
| **Имя бота (без @)**             | Нужно для ссылки \`t.me/…\`. На DLE 20 — вместе с секретной строкой; на DLE 21 со входом Telegram — обычная ссылка без секрета. |

## Привязка [#привязка]

| Поле                                        | Зачем                                                                                                                                                     |
| ------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Сколько минут действует ссылка привязки** | Только путь без системного Telegram: через сколько минут выдать новую секретную строку. По умолчанию \`60\`.                                                |
| **Сколько сообщений бота забирать за раз**  | От 1 до 100. При каждом запуске cron модуль забирает порцию новых сообщений бота (в основном команды «Старт») и обрабатывает привязки. По умолчанию \`50\`. |
| **Служебный счётчик опроса бота**           | Обновляется сам. \`0\` — начать опрос с начала. Обычно руками не трогают.                                                                                   |

Привязка идёт по команде **Старт** в боте. Подробности путей: [Привязка](./bind).

## Права администратора [#права-администратора]

Управление ботом и тестовая отправка — право \`notifications_telegram_admin\` на странице прав ядра Уведомлений.

## См. также [#см-также]

* [Привязка](./bind)
* [Установка](../install)
* [Начало работы](../getting_started)
`,o={contents:[{heading:void 0,content:"Страница: `?mod=notifications&action=telegram`. Те же поля попадают на общую страницу настроек ядра Уведомлений (префикс кода модуля)."},{heading:`бот`,content:`Поле`},{heading:`бот`,content:`Зачем`},{heading:`бот`,content:`**Включить доставку в Telegram**`},{heading:`бот`,content:`Без галочки способ доставки не подключается к рассылке.`},{heading:`бот`,content:`**Ключ бота**`},{heading:`бот`,content:`Строка от @BotFather. На DLE 21 — тот же бот, что в настройках входа Telegram на сайте.`},{heading:`бот`,content:`**Имя бота (без @)**`},{heading:`бот`,content:"Нужно для ссылки `t.me/…`. На DLE 20 — вместе с секретной строкой; на DLE 21 со входом Telegram — обычная ссылка без секрета."},{heading:`привязка`,content:`Поле`},{heading:`привязка`,content:`Зачем`},{heading:`привязка`,content:`**Сколько минут действует ссылка привязки**`},{heading:`привязка`,content:"Только путь без системного Telegram: через сколько минут выдать новую секретную строку. По умолчанию `60`."},{heading:`привязка`,content:`**Сколько сообщений бота забирать за раз**`},{heading:`привязка`,content:"От 1 до 100. При каждом запуске cron модуль забирает порцию новых сообщений бота (в основном команды «Старт») и обрабатывает привязки. По умолчанию `50`."},{heading:`привязка`,content:`**Служебный счётчик опроса бота**`},{heading:`привязка`,content:"Обновляется сам. `0` — начать опрос с начала. Обычно руками не трогают."},{heading:`привязка`,content:`Привязка идёт по команде **Старт** в боте. Подробности путей: Привязка.`},{heading:`права-администратора`,content:"Управление ботом и тестовая отправка — право `notifications_telegram_admin` на странице прав ядра Уведомлений."},{heading:`см-также`,content:`Привязка`},{heading:`см-также`,content:`Установка`},{heading:`см-также`,content:`Начало работы`}],headings:[{id:`бот`,content:`Бот`},{id:`привязка`,content:`Привязка`},{id:`права-администратора`,content:`Права администратора`},{id:`см-также`,content:`См. также`}]},s=[{depth:2,url:`#бот`,title:(0,n.jsx)(n.Fragment,{children:`Бот`})},{depth:2,url:`#привязка`,title:(0,n.jsx)(n.Fragment,{children:`Привязка`})},{depth:2,url:`#права-администратора`,title:(0,n.jsx)(n.Fragment,{children:`Права администратора`})},{depth:2,url:`#см-также`,title:(0,n.jsx)(n.Fragment,{children:`См. также`})}];function c(e){let t={a:`a`,code:`code`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,ul:`ul`,...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:[`Страница: `,(0,n.jsx)(t.code,{children:`?mod=notifications&action=telegram`}),`. Те же поля попадают на общую страницу настроек ядра Уведомлений (префикс кода модуля).`]}),`
`,(0,n.jsx)(t.h2,{id:`бот`,children:`Бот`}),`
`,(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`Поле`}),(0,n.jsx)(t.th,{children:`Зачем`})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:`Включить доставку в Telegram`})}),(0,n.jsx)(t.td,{children:`Без галочки способ доставки не подключается к рассылке.`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:`Ключ бота`})}),(0,n.jsxs)(t.td,{children:[`Строка от `,(0,n.jsx)(t.a,{href:`https://t.me/BotFather`,children:`@BotFather`}),`. На DLE 21 — тот же бот, что в настройках входа Telegram на сайте.`]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:`Имя бота (без @)`})}),(0,n.jsxs)(t.td,{children:[`Нужно для ссылки `,(0,n.jsx)(t.code,{children:`t.me/…`}),`. На DLE 20 — вместе с секретной строкой; на DLE 21 со входом Telegram — обычная ссылка без секрета.`]})]})]})]}),`
`,(0,n.jsx)(t.h2,{id:`привязка`,children:`Привязка`}),`
`,(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`Поле`}),(0,n.jsx)(t.th,{children:`Зачем`})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:`Сколько минут действует ссылка привязки`})}),(0,n.jsxs)(t.td,{children:[`Только путь без системного Telegram: через сколько минут выдать новую секретную строку. По умолчанию `,(0,n.jsx)(t.code,{children:`60`}),`.`]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:`Сколько сообщений бота забирать за раз`})}),(0,n.jsxs)(t.td,{children:[`От 1 до 100. При каждом запуске cron модуль забирает порцию новых сообщений бота (в основном команды «Старт») и обрабатывает привязки. По умолчанию `,(0,n.jsx)(t.code,{children:`50`}),`.`]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:`Служебный счётчик опроса бота`})}),(0,n.jsxs)(t.td,{children:[`Обновляется сам. `,(0,n.jsx)(t.code,{children:`0`}),` — начать опрос с начала. Обычно руками не трогают.`]})]})]})]}),`
`,(0,n.jsxs)(t.p,{children:[`Привязка идёт по команде `,(0,n.jsx)(t.strong,{children:`Старт`}),` в боте. Подробности путей: `,(0,n.jsx)(t.a,{href:`./bind`,children:`Привязка`}),`.`]}),`
`,(0,n.jsx)(t.h2,{id:`права-администратора`,children:`Права администратора`}),`
`,(0,n.jsxs)(t.p,{children:[`Управление ботом и тестовая отправка — право `,(0,n.jsx)(t.code,{children:`notifications_telegram_admin`}),` на странице прав ядра Уведомлений.`]}),`
`,(0,n.jsx)(t.h2,{id:`см-также`,children:`См. также`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`./bind`,children:`Привязка`})}),`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`../install`,children:`Установка`})}),`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`../getting_started`,children:`Начало работы`})}),`
`]})]})}function l(e={}){let{wrapper:t}=e.components||{};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}export{a as _markdown,l as default,r as frontmatter,i as lastModified,o as structuredData,s as toc};