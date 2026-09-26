import{r as e}from"./rolldown-runtime-QTnfLwEv.js";import{t}from"./jsx-runtime-By8HlURe.js";var n=e(t()),r={title:`Начало работы`,description:`Соседний модуль DLE Уведомлений: накопление уведомлений и отправка сводкой по интервалу.`,version:`200.1.0`},i=new Date(1790409255e3),a=`

**Уведомления — сводка** — отдельный ZIP рядом с ядром [DLE Уведомления](/dev/dle/notifications/200.1.0/getting_started). Он откладывает выбранные способы доставки (почта, личные сообщения, Telegram) в очередь и шлёт пачкой по интервалу. В архиве ядра этого модуля **нет**.

Модуль встраивается в панель \`?mod=notifications\`: пункты **Сводка**, **Очередь сводки** и история изменений. Отдельного пункта меню DLE нет.

Доставка **на сайте** (колокольчик и стена) **никогда** не откладывается — сводка касается только внешних каналов.

## Что нужно [#что-нужно]

| Что                                                               | Минимум       |
| ----------------------------------------------------------------- | ------------- |
| DataLife Engine                                                   | **20.0+**     |
| PHP                                                               | **8.3+**      |
| [DevCraft Admin](/dev/dle/devcraft_admin/200.4.1/getting_started) | **≥ 200.4.1** |
| [DLE Уведомления](/dev/dle/notifications/200.1.0/getting_started) | **200.1.0+**  |

Для канала Telegram в сводке нужен ещё модуль [Уведомления — Telegram](/dev/dle/notifications_telegram/200.1.0/getting_started).

## Возможности [#возможности]

* очередь сводки и обёртка способов доставки;
* перехват почты / личных сообщений / Telegram без правки ядра рассылки;
* отправка по интервалу из cron DLE: \`notifyDigestFlush()\`;
* страница очереди \`?mod=notifications&action=digest_queue\` и ручная отправка;
* право группы \`notifications_digest_admin\`.

## Быстрый старт [#быстрый-старт]

<Steps>
  <Step>
    ### Ядро [#ядро]

    Поставьте [DLE Уведомления](/dev/dle/notifications/200.1.0/install) и Admin ≥ 200.4.1.
  </Step>

  <Step>
    ### ZIP сводки [#zip-сводки]

    Установите этот модуль. Подробности: [Установка](./install).
  </Step>

  <Step>
    ### Включить и проверить очередь [#включить-и-проверить-очередь]

    В \`?mod=notifications&action=digest\` включите сводку, выберите каналы и интервал. Очередь: [Очередь](./guides/queue).
  </Step>
</Steps>

<Cards>
  <Card title="Установка" href="./install">
    ZIP, needplugin, cron notifyDigestFlush
  </Card>

  <Card title="Настройки" href="./guides/settings">
    Интервал, каналы, текст сводки
  </Card>

  <Card title="Очередь" href="./guides/queue">
    Страница digest\\_queue и ручная отправка
  </Card>

  <Card title="Ядро Уведомлений" href="/dev/dle/notifications/200.1.0/getting_started">
    Лента и подписки — 35 €
  </Card>
</Cards>

## Дальше [#дальше]

1. [Установить](./install) модуль.
2. Настроить [сводку](./guides/settings).
3. Следить за [очередью](./guides/queue) или дождаться cron.
`,o={contents:[{heading:void 0,content:`**Уведомления — сводка** — отдельный ZIP рядом с ядром DLE Уведомления. Он откладывает выбранные способы доставки (почта, личные сообщения, Telegram) в очередь и шлёт пачкой по интервалу. В архиве ядра этого модуля **нет**.`},{heading:void 0,content:"Модуль встраивается в панель `?mod=notifications`: пункты **Сводка**, **Очередь сводки** и история изменений. Отдельного пункта меню DLE нет."},{heading:void 0,content:`Доставка **на сайте** (колокольчик и стена) **никогда** не откладывается — сводка касается только внешних каналов.`},{heading:`что-нужно`,content:`Что`},{heading:`что-нужно`,content:`Минимум`},{heading:`что-нужно`,content:`DataLife Engine`},{heading:`что-нужно`,content:`**20.0+**`},{heading:`что-нужно`,content:`PHP`},{heading:`что-нужно`,content:`**8.3+**`},{heading:`что-нужно`,content:`DevCraft Admin`},{heading:`что-нужно`,content:`**≥ 200.4.1**`},{heading:`что-нужно`,content:`DLE Уведомления`},{heading:`что-нужно`,content:`**200.1.0+**`},{heading:`что-нужно`,content:`Для канала Telegram в сводке нужен ещё модуль Уведомления — Telegram.`},{heading:`возможности`,content:`очередь сводки и обёртка способов доставки;`},{heading:`возможности`,content:`перехват почты / личных сообщений / Telegram без правки ядра рассылки;`},{heading:`возможности`,content:"отправка по интервалу из cron DLE: `notifyDigestFlush()`;"},{heading:`возможности`,content:"страница очереди `?mod=notifications&action=digest_queue` и ручная отправка;"},{heading:`возможности`,content:"право группы `notifications_digest_admin`."},{heading:`ядро`,content:`Поставьте DLE Уведомления и Admin ≥ 200.4.1.`},{heading:`zip-сводки`,content:`Установите этот модуль. Подробности: Установка.`},{heading:`включить-и-проверить-очередь`,content:"В `?mod=notifications&action=digest` включите сводку, выберите каналы и интервал. Очередь: Очередь."},{heading:`включить-и-проверить-очередь`,content:`ZIP, needplugin, cron notifyDigestFlush`},{heading:`включить-и-проверить-очередь`,content:`Интервал, каналы, текст сводки`},{heading:`включить-и-проверить-очередь`,content:`Страница digest\\_queue и ручная отправка`},{heading:`включить-и-проверить-очередь`,content:`Лента и подписки — 35 €`},{heading:`дальше`,content:`Установить модуль.`},{heading:`дальше`,content:`Настроить сводку.`},{heading:`дальше`,content:`Следить за очередью или дождаться cron.`}],headings:[{id:`что-нужно`,content:`Что нужно`},{id:`возможности`,content:`Возможности`},{id:`быстрый-старт`,content:`Быстрый старт`},{id:`ядро`,content:`Ядро`},{id:`zip-сводки`,content:`ZIP сводки`},{id:`включить-и-проверить-очередь`,content:`Включить и проверить очередь`},{id:`дальше`,content:`Дальше`}]},s=[{depth:2,url:`#что-нужно`,title:(0,n.jsx)(n.Fragment,{children:`Что нужно`})},{depth:2,url:`#возможности`,title:(0,n.jsx)(n.Fragment,{children:`Возможности`})},{depth:2,url:`#быстрый-старт`,title:(0,n.jsx)(n.Fragment,{children:`Быстрый старт`})},{depth:3,url:`#ядро`,title:(0,n.jsx)(n.Fragment,{children:`Ядро`})},{depth:3,url:`#zip-сводки`,title:(0,n.jsx)(n.Fragment,{children:`ZIP сводки`})},{depth:3,url:`#включить-и-проверить-очередь`,title:(0,n.jsx)(n.Fragment,{children:`Включить и проверить очередь`})},{depth:2,url:`#дальше`,title:(0,n.jsx)(n.Fragment,{children:`Дальше`})}];function c(e){let t={a:`a`,code:`code`,h2:`h2`,h3:`h3`,li:`li`,ol:`ol`,p:`p`,strong:`strong`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,ul:`ul`,...e.components},{Card:r,Cards:i,Step:a,Steps:o}=t;return r||u(`Card`,!0),i||u(`Cards`,!0),a||u(`Step`,!0),o||u(`Steps`,!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Уведомления — сводка`}),` — отдельный ZIP рядом с ядром `,(0,n.jsx)(t.a,{href:`/dev/dle/notifications/200.1.0/getting_started`,children:`DLE Уведомления`}),`. Он откладывает выбранные способы доставки (почта, личные сообщения, Telegram) в очередь и шлёт пачкой по интервалу. В архиве ядра этого модуля `,(0,n.jsx)(t.strong,{children:`нет`}),`.`]}),`
`,(0,n.jsxs)(t.p,{children:[`Модуль встраивается в панель `,(0,n.jsx)(t.code,{children:`?mod=notifications`}),`: пункты `,(0,n.jsx)(t.strong,{children:`Сводка`}),`, `,(0,n.jsx)(t.strong,{children:`Очередь сводки`}),` и история изменений. Отдельного пункта меню DLE нет.`]}),`
`,(0,n.jsxs)(t.p,{children:[`Доставка `,(0,n.jsx)(t.strong,{children:`на сайте`}),` (колокольчик и стена) `,(0,n.jsx)(t.strong,{children:`никогда`}),` не откладывается — сводка касается только внешних каналов.`]}),`
`,(0,n.jsx)(t.h2,{id:`что-нужно`,children:`Что нужно`}),`
`,(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`Что`}),(0,n.jsx)(t.th,{children:`Минимум`})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`DataLife Engine`}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:`20.0+`})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`PHP`}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:`8.3+`})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:`/dev/dle/devcraft_admin/200.4.1/getting_started`,children:`DevCraft Admin`})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:`≥ 200.4.1`})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:`/dev/dle/notifications/200.1.0/getting_started`,children:`DLE Уведомления`})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:`200.1.0+`})})]})]})]}),`
`,(0,n.jsxs)(t.p,{children:[`Для канала Telegram в сводке нужен ещё модуль `,(0,n.jsx)(t.a,{href:`/dev/dle/notifications_telegram/200.1.0/getting_started`,children:`Уведомления — Telegram`}),`.`]}),`
`,(0,n.jsx)(t.h2,{id:`возможности`,children:`Возможности`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsx)(t.li,{children:`очередь сводки и обёртка способов доставки;`}),`
`,(0,n.jsx)(t.li,{children:`перехват почты / личных сообщений / Telegram без правки ядра рассылки;`}),`
`,(0,n.jsxs)(t.li,{children:[`отправка по интервалу из cron DLE: `,(0,n.jsx)(t.code,{children:`notifyDigestFlush()`}),`;`]}),`
`,(0,n.jsxs)(t.li,{children:[`страница очереди `,(0,n.jsx)(t.code,{children:`?mod=notifications&action=digest_queue`}),` и ручная отправка;`]}),`
`,(0,n.jsxs)(t.li,{children:[`право группы `,(0,n.jsx)(t.code,{children:`notifications_digest_admin`}),`.`]}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`быстрый-старт`,children:`Быстрый старт`}),`
`,(0,n.jsxs)(o,{children:[(0,n.jsxs)(a,{children:[(0,n.jsx)(t.h3,{id:`ядро`,children:`Ядро`}),(0,n.jsxs)(t.p,{children:[`Поставьте `,(0,n.jsx)(t.a,{href:`/dev/dle/notifications/200.1.0/install`,children:`DLE Уведомления`}),` и Admin ≥ 200.4.1.`]})]}),(0,n.jsxs)(a,{children:[(0,n.jsx)(t.h3,{id:`zip-сводки`,children:`ZIP сводки`}),(0,n.jsxs)(t.p,{children:[`Установите этот модуль. Подробности: `,(0,n.jsx)(t.a,{href:`./install`,children:`Установка`}),`.`]})]}),(0,n.jsxs)(a,{children:[(0,n.jsx)(t.h3,{id:`включить-и-проверить-очередь`,children:`Включить и проверить очередь`}),(0,n.jsxs)(t.p,{children:[`В `,(0,n.jsx)(t.code,{children:`?mod=notifications&action=digest`}),` включите сводку, выберите каналы и интервал. Очередь: `,(0,n.jsx)(t.a,{href:`./guides/queue`,children:`Очередь`}),`.`]})]})]}),`
`,(0,n.jsxs)(i,{children:[(0,n.jsx)(r,{title:`Установка`,href:`./install`,children:(0,n.jsx)(t.p,{children:`ZIP, needplugin, cron notifyDigestFlush`})}),(0,n.jsx)(r,{title:`Настройки`,href:`./guides/settings`,children:(0,n.jsx)(t.p,{children:`Интервал, каналы, текст сводки`})}),(0,n.jsx)(r,{title:`Очередь`,href:`./guides/queue`,children:(0,n.jsx)(t.p,{children:`Страница digest_queue и ручная отправка`})}),(0,n.jsx)(r,{title:`Ядро Уведомлений`,href:`/dev/dle/notifications/200.1.0/getting_started`,children:(0,n.jsx)(t.p,{children:`Лента и подписки — 35 €`})})]}),`
`,(0,n.jsx)(t.h2,{id:`дальше`,children:`Дальше`}),`
`,(0,n.jsxs)(t.ol,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:`./install`,children:`Установить`}),` модуль.`]}),`
`,(0,n.jsxs)(t.li,{children:[`Настроить `,(0,n.jsx)(t.a,{href:`./guides/settings`,children:`сводку`}),`.`]}),`
`,(0,n.jsxs)(t.li,{children:[`Следить за `,(0,n.jsx)(t.a,{href:`./guides/queue`,children:`очередью`}),` или дождаться cron.`]}),`
`]})]})}function l(e={}){let{wrapper:t}=e.components||{};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}function u(e,t){throw Error(`Expected `+(t?`component`:`object`)+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}export{a as _markdown,l as default,r as frontmatter,i as lastModified,o as structuredData,s as toc};