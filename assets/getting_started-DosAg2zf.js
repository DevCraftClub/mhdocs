import{r as e}from"./rolldown-runtime-QTnfLwEv.js";import{t}from"./jsx-runtime-By8HlURe.js";var n=e(t()),r={title:`Начало работы`,description:`Соседний модуль DLE Уведомлений: доставка в Telegram и привязка аккаунта через бота.`,version:`200.1.0`},i=new Date(1790413881e3),a=`

**Уведомления — Telegram** — отдельный ZIP рядом с ядром [DLE Уведомления](/dev/dle/notifications/200.1.0/getting_started). Он добавляет способ доставки в чат бота и блок привязки в кабинете. В архиве ядра этого модуля **нет**.

Модуль встраивается в панель \`?mod=notifications\` (через \`extends\`): пункты **Telegram** и история изменений появляются **внутри** меню Уведомлений. Отдельного пункта меню DLE нет.

## Что нужно [#что-нужно]

| Что                                                               | Минимум                            |
| ----------------------------------------------------------------- | ---------------------------------- |
| DataLife Engine                                                   | **20.0+**                          |
| PHP                                                               | **8.3+**                           |
| [DevCraft Admin](/dev/dle/devcraft_admin/200.4.1/getting_started) | **≥ 200.4.1**                      |
| [DLE Уведомления](/dev/dle/notifications/200.1.0/getting_started) | **200.1.0+**                       |
| Пакет Composer                                                    | \`luzrain/telegram-bot-api\` (^3.17) |

## Возможности [#возможности]

* способ доставки \`telegram\` в реестре ядра Уведомлений;
* два пути привязки: секретная строка в ссылке (DLE 20 / без системного Telegram) или вход Telegram в профиле DLE 21, затем обычный «Старт» в боте;
* опрос бота из планировщика DLE: \`notifyTelegramPollUpdates()\`;
* права групп: \`notifications_receive_telegram\`, \`notifications_telegram_admin\`;
* блок кабинета: \`{include}\` к \`Controller/show_telegram_bind.php\`.

## Быстрый старт [#быстрый-старт]

<Steps>
  <Step>
    ### Ядро и Admin [#ядро-и-admin]

    Убедитесь, что стоят [DevCraft Admin](/dev/dle/devcraft_admin/200.4.1/install) и [DLE Уведомления](/dev/dle/notifications/200.1.0/install).
  </Step>

  <Step>
    ### ZIP Telegram [#zip-telegram]

    Поставьте этот модуль через менеджер плагинов. Подробности: [Установка](./install).
  </Step>

  <Step>
    ### Бот и привязка [#бот-и-привязка]

    В \`?mod=notifications&action=telegram\` укажите ключ и имя бота, включите доставку. Как привязать аккаунт: [Привязка](./guides/bind).
  </Step>
</Steps>

<Cards>
  <Card title="Установка" href="./install">
    ZIP, Composer, cron, патч social.class.php
  </Card>

  <Card title="Привязка" href="./guides/bind">
    DLE 20 и DLE 21 — два разных пути
  </Card>

  <Card title="Настройки" href="./guides/settings">
    Ключ бота, имя, лимит опроса
  </Card>

  <Card title="Ядро Уведомлений" href="/dev/dle/notifications/200.1.0/getting_started">
    Лента, подписки, колокольчик — 35 €
  </Card>
</Cards>

## Дальше [#дальше]

1. [Установить](./install) модуль.
2. Настроить [бота](./guides/settings) и [привязку](./guides/bind).
3. Выдать группе право \`notifications_receive_telegram\` на странице прав ядра Уведомлений.
`,o={contents:[{heading:void 0,content:`**Уведомления — Telegram** — отдельный ZIP рядом с ядром DLE Уведомления. Он добавляет способ доставки в чат бота и блок привязки в кабинете. В архиве ядра этого модуля **нет**.`},{heading:void 0,content:"Модуль встраивается в панель `?mod=notifications` (через `extends`): пункты **Telegram** и история изменений появляются **внутри** меню Уведомлений. Отдельного пункта меню DLE нет."},{heading:`что-нужно`,content:`Что`},{heading:`что-нужно`,content:`Минимум`},{heading:`что-нужно`,content:`DataLife Engine`},{heading:`что-нужно`,content:`**20.0+**`},{heading:`что-нужно`,content:`PHP`},{heading:`что-нужно`,content:`**8.3+**`},{heading:`что-нужно`,content:`DevCraft Admin`},{heading:`что-нужно`,content:`**≥ 200.4.1**`},{heading:`что-нужно`,content:`DLE Уведомления`},{heading:`что-нужно`,content:`**200.1.0+**`},{heading:`что-нужно`,content:`Пакет Composer`},{heading:`что-нужно`,content:"`luzrain/telegram-bot-api` (^3.17)"},{heading:`возможности`,content:"способ доставки `telegram` в реестре ядра Уведомлений;"},{heading:`возможности`,content:`два пути привязки: секретная строка в ссылке (DLE 20 / без системного Telegram) или вход Telegram в профиле DLE 21, затем обычный «Старт» в боте;`},{heading:`возможности`,content:"опрос бота из планировщика DLE: `notifyTelegramPollUpdates()`;"},{heading:`возможности`,content:"права групп: `notifications_receive_telegram`, `notifications_telegram_admin`;"},{heading:`возможности`,content:"блок кабинета: `{include}` к `Controller/show_telegram_bind.php`."},{heading:`ядро-и-admin`,content:`Убедитесь, что стоят DevCraft Admin и DLE Уведомления.`},{heading:`zip-telegram`,content:`Поставьте этот модуль через менеджер плагинов. Подробности: Установка.`},{heading:`бот-и-привязка`,content:"В `?mod=notifications&action=telegram` укажите ключ и имя бота, включите доставку. Как привязать аккаунт: Привязка."},{heading:`бот-и-привязка`,content:`ZIP, Composer, cron, патч social.class.php`},{heading:`бот-и-привязка`,content:`DLE 20 и DLE 21 — два разных пути`},{heading:`бот-и-привязка`,content:`Ключ бота, имя, лимит опроса`},{heading:`бот-и-привязка`,content:`Лента, подписки, колокольчик — 35 €`},{heading:`дальше`,content:`Установить модуль.`},{heading:`дальше`,content:`Настроить бота и привязку.`},{heading:`дальше`,content:"Выдать группе право `notifications_receive_telegram` на странице прав ядра Уведомлений."}],headings:[{id:`что-нужно`,content:`Что нужно`},{id:`возможности`,content:`Возможности`},{id:`быстрый-старт`,content:`Быстрый старт`},{id:`ядро-и-admin`,content:`Ядро и Admin`},{id:`zip-telegram`,content:`ZIP Telegram`},{id:`бот-и-привязка`,content:`Бот и привязка`},{id:`дальше`,content:`Дальше`}]},s=[{depth:2,url:`#что-нужно`,title:(0,n.jsx)(n.Fragment,{children:`Что нужно`})},{depth:2,url:`#возможности`,title:(0,n.jsx)(n.Fragment,{children:`Возможности`})},{depth:2,url:`#быстрый-старт`,title:(0,n.jsx)(n.Fragment,{children:`Быстрый старт`})},{depth:3,url:`#ядро-и-admin`,title:(0,n.jsx)(n.Fragment,{children:`Ядро и Admin`})},{depth:3,url:`#zip-telegram`,title:(0,n.jsx)(n.Fragment,{children:`ZIP Telegram`})},{depth:3,url:`#бот-и-привязка`,title:(0,n.jsx)(n.Fragment,{children:`Бот и привязка`})},{depth:2,url:`#дальше`,title:(0,n.jsx)(n.Fragment,{children:`Дальше`})}];function c(e){let t={a:`a`,code:`code`,h2:`h2`,h3:`h3`,li:`li`,ol:`ol`,p:`p`,strong:`strong`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,ul:`ul`,...e.components},{Card:r,Cards:i,Step:a,Steps:o}=t;return r||u(`Card`,!0),i||u(`Cards`,!0),a||u(`Step`,!0),o||u(`Steps`,!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Уведомления — Telegram`}),` — отдельный ZIP рядом с ядром `,(0,n.jsx)(t.a,{href:`/dev/dle/notifications/200.1.0/getting_started`,children:`DLE Уведомления`}),`. Он добавляет способ доставки в чат бота и блок привязки в кабинете. В архиве ядра этого модуля `,(0,n.jsx)(t.strong,{children:`нет`}),`.`]}),`
`,(0,n.jsxs)(t.p,{children:[`Модуль встраивается в панель `,(0,n.jsx)(t.code,{children:`?mod=notifications`}),` (через `,(0,n.jsx)(t.code,{children:`extends`}),`): пункты `,(0,n.jsx)(t.strong,{children:`Telegram`}),` и история изменений появляются `,(0,n.jsx)(t.strong,{children:`внутри`}),` меню Уведомлений. Отдельного пункта меню DLE нет.`]}),`
`,(0,n.jsx)(t.h2,{id:`что-нужно`,children:`Что нужно`}),`
`,(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`Что`}),(0,n.jsx)(t.th,{children:`Минимум`})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`DataLife Engine`}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:`20.0+`})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`PHP`}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:`8.3+`})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:`/dev/dle/devcraft_admin/200.4.1/getting_started`,children:`DevCraft Admin`})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:`≥ 200.4.1`})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:`/dev/dle/notifications/200.1.0/getting_started`,children:`DLE Уведомления`})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:`200.1.0+`})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`Пакет Composer`}),(0,n.jsxs)(t.td,{children:[(0,n.jsx)(t.code,{children:`luzrain/telegram-bot-api`}),` (^3.17)`]})]})]})]}),`
`,(0,n.jsx)(t.h2,{id:`возможности`,children:`Возможности`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[`способ доставки `,(0,n.jsx)(t.code,{children:`telegram`}),` в реестре ядра Уведомлений;`]}),`
`,(0,n.jsx)(t.li,{children:`два пути привязки: секретная строка в ссылке (DLE 20 / без системного Telegram) или вход Telegram в профиле DLE 21, затем обычный «Старт» в боте;`}),`
`,(0,n.jsxs)(t.li,{children:[`опрос бота из планировщика DLE: `,(0,n.jsx)(t.code,{children:`notifyTelegramPollUpdates()`}),`;`]}),`
`,(0,n.jsxs)(t.li,{children:[`права групп: `,(0,n.jsx)(t.code,{children:`notifications_receive_telegram`}),`, `,(0,n.jsx)(t.code,{children:`notifications_telegram_admin`}),`;`]}),`
`,(0,n.jsxs)(t.li,{children:[`блок кабинета: `,(0,n.jsx)(t.code,{children:`{include}`}),` к `,(0,n.jsx)(t.code,{children:`Controller/show_telegram_bind.php`}),`.`]}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`быстрый-старт`,children:`Быстрый старт`}),`
`,(0,n.jsxs)(o,{children:[(0,n.jsxs)(a,{children:[(0,n.jsx)(t.h3,{id:`ядро-и-admin`,children:`Ядро и Admin`}),(0,n.jsxs)(t.p,{children:[`Убедитесь, что стоят `,(0,n.jsx)(t.a,{href:`/dev/dle/devcraft_admin/200.4.1/install`,children:`DevCraft Admin`}),` и `,(0,n.jsx)(t.a,{href:`/dev/dle/notifications/200.1.0/install`,children:`DLE Уведомления`}),`.`]})]}),(0,n.jsxs)(a,{children:[(0,n.jsx)(t.h3,{id:`zip-telegram`,children:`ZIP Telegram`}),(0,n.jsxs)(t.p,{children:[`Поставьте этот модуль через менеджер плагинов. Подробности: `,(0,n.jsx)(t.a,{href:`./install`,children:`Установка`}),`.`]})]}),(0,n.jsxs)(a,{children:[(0,n.jsx)(t.h3,{id:`бот-и-привязка`,children:`Бот и привязка`}),(0,n.jsxs)(t.p,{children:[`В `,(0,n.jsx)(t.code,{children:`?mod=notifications&action=telegram`}),` укажите ключ и имя бота, включите доставку. Как привязать аккаунт: `,(0,n.jsx)(t.a,{href:`./guides/bind`,children:`Привязка`}),`.`]})]})]}),`
`,(0,n.jsxs)(i,{children:[(0,n.jsx)(r,{title:`Установка`,href:`./install`,children:(0,n.jsx)(t.p,{children:`ZIP, Composer, cron, патч social.class.php`})}),(0,n.jsx)(r,{title:`Привязка`,href:`./guides/bind`,children:(0,n.jsx)(t.p,{children:`DLE 20 и DLE 21 — два разных пути`})}),(0,n.jsx)(r,{title:`Настройки`,href:`./guides/settings`,children:(0,n.jsx)(t.p,{children:`Ключ бота, имя, лимит опроса`})}),(0,n.jsx)(r,{title:`Ядро Уведомлений`,href:`/dev/dle/notifications/200.1.0/getting_started`,children:(0,n.jsx)(t.p,{children:`Лента, подписки, колокольчик — 35 €`})})]}),`
`,(0,n.jsx)(t.h2,{id:`дальше`,children:`Дальше`}),`
`,(0,n.jsxs)(t.ol,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:`./install`,children:`Установить`}),` модуль.`]}),`
`,(0,n.jsxs)(t.li,{children:[`Настроить `,(0,n.jsx)(t.a,{href:`./guides/settings`,children:`бота`}),` и `,(0,n.jsx)(t.a,{href:`./guides/bind`,children:`привязку`}),`.`]}),`
`,(0,n.jsxs)(t.li,{children:[`Выдать группе право `,(0,n.jsx)(t.code,{children:`notifications_receive_telegram`}),` на странице прав ядра Уведомлений.`]}),`
`]})]})}function l(e={}){let{wrapper:t}=e.components||{};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}function u(e,t){throw Error(`Expected `+(t?`component`:`object`)+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}export{a as _markdown,l as default,r as frontmatter,i as lastModified,o as structuredData,s as toc};