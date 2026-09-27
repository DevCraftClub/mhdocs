import{r as e}from"./rolldown-runtime-QTnfLwEv.js";import{t}from"./jsx-runtime-By8HlURe.js";var n=e(t()),r={title:`Начало работы`,description:`Соседний модуль DLE Уведомлений: сводка по подпискам и событиям в админке.`,version:`200.1.0`},i=new Date(1790523217e3),a=`

**Уведомления — статистика** — отдельный ZIP рядом с ядром [DLE Уведомления](/dev/dle/notifications/200.1.0/getting_started). Он показывает в админке счётчики по подпискам и уведомлениям. Собственных таблиц нет: данные читаются из таблиц ядра. В архиве ядра этого модуля **нет**.

Модуль встраивается в панель \`?mod=notifications\`: пункты **Статистика**, **Настройки статистики** и история изменений. Отдельного пункта меню DLE нет.

Это **не** способ доставки — только отчёт для администратора.

## Что нужно [#что-нужно]

| Что                                                               | Минимум       |
| ----------------------------------------------------------------- | ------------- |
| DataLife Engine                                                   | **20.0+**     |
| PHP                                                               | **8.3+**      |
| [DevCraft Admin](/dev/dle/devcraft_admin/200.4.1/getting_started) | **≥ 200.4.1** |
| [DLE Уведомления](/dev/dle/notifications/200.1.0/getting_started) | **200.1.0+**  |

## Возможности [#возможности]

* итоги: уведомления, непрочитанные, подписки, получатели, подписчики;
* подписки по типам и включённым каналам;
* уведомления по событиям и по дням за выбранный период;
* право группы \`notifications_stats_view\` для доступа к сводке.

## Быстрый старт [#быстрый-старт]

<Steps>
  <Step>
    ### Ядро [#ядро]

    Поставьте [DLE Уведомления](/dev/dle/notifications/200.1.0/install) и Admin ≥ 200.4.1.
  </Step>

  <Step>
    ### ZIP статистики [#zip-статистики]

    Установите этот модуль. Подробности: [Установка](./install).
  </Step>

  <Step>
    ### Право и отчёт [#право-и-отчёт]

    Выдайте группе право \`notifications_stats_view\`. Откройте \`?mod=notifications&action=stats\`. См. [Сводка](./guides/dashboard).
  </Step>
</Steps>

<Cards>
  <Card title="Установка" href="./install">
    ZIP, needplugin, право notifications\\_stats\\_view
  </Card>

  <Card title="Сводка" href="./guides/dashboard">
    Что показывает страница статистики
  </Card>

  <Card title="Настройки" href="./guides/settings">
    Период отчёта и топ событий
  </Card>

  <Card title="Ядро Уведомлений" href="/dev/dle/notifications/200.1.0/getting_started">
    Лента и подписки — 35 €
  </Card>
</Cards>

## Дальше [#дальше]

1. [Установить](./install) модуль.
2. Выдать \`notifications_stats_view\`.
3. Открыть [сводку](./guides/dashboard).
`,o={contents:[{heading:void 0,content:`**Уведомления — статистика** — отдельный ZIP рядом с ядром DLE Уведомления. Он показывает в админке счётчики по подпискам и уведомлениям. Собственных таблиц нет: данные читаются из таблиц ядра. В архиве ядра этого модуля **нет**.`},{heading:void 0,content:"Модуль встраивается в панель `?mod=notifications`: пункты **Статистика**, **Настройки статистики** и история изменений. Отдельного пункта меню DLE нет."},{heading:void 0,content:`Это **не** способ доставки — только отчёт для администратора.`},{heading:`что-нужно`,content:`Что`},{heading:`что-нужно`,content:`Минимум`},{heading:`что-нужно`,content:`DataLife Engine`},{heading:`что-нужно`,content:`**20.0+**`},{heading:`что-нужно`,content:`PHP`},{heading:`что-нужно`,content:`**8.3+**`},{heading:`что-нужно`,content:`DevCraft Admin`},{heading:`что-нужно`,content:`**≥ 200.4.1**`},{heading:`что-нужно`,content:`DLE Уведомления`},{heading:`что-нужно`,content:`**200.1.0+**`},{heading:`возможности`,content:`итоги: уведомления, непрочитанные, подписки, получатели, подписчики;`},{heading:`возможности`,content:`подписки по типам и включённым каналам;`},{heading:`возможности`,content:`уведомления по событиям и по дням за выбранный период;`},{heading:`возможности`,content:"право группы `notifications_stats_view` для доступа к сводке."},{heading:`ядро`,content:`Поставьте DLE Уведомления и Admin ≥ 200.4.1.`},{heading:`zip-статистики`,content:`Установите этот модуль. Подробности: Установка.`},{heading:`право-и-отчёт`,content:"Выдайте группе право `notifications_stats_view`. Откройте `?mod=notifications&action=stats`. См. Сводка."},{heading:`право-и-отчёт`,content:`ZIP, needplugin, право notifications\\_stats\\_view`},{heading:`право-и-отчёт`,content:`Что показывает страница статистики`},{heading:`право-и-отчёт`,content:`Период отчёта и топ событий`},{heading:`право-и-отчёт`,content:`Лента и подписки — 35 €`},{heading:`дальше`,content:`Установить модуль.`},{heading:`дальше`,content:"Выдать `notifications_stats_view`."},{heading:`дальше`,content:`Открыть сводку.`}],headings:[{id:`что-нужно`,content:`Что нужно`},{id:`возможности`,content:`Возможности`},{id:`быстрый-старт`,content:`Быстрый старт`},{id:`ядро`,content:`Ядро`},{id:`zip-статистики`,content:`ZIP статистики`},{id:`право-и-отчёт`,content:`Право и отчёт`},{id:`дальше`,content:`Дальше`}]},s=[{depth:2,url:`#что-нужно`,title:(0,n.jsx)(n.Fragment,{children:`Что нужно`})},{depth:2,url:`#возможности`,title:(0,n.jsx)(n.Fragment,{children:`Возможности`})},{depth:2,url:`#быстрый-старт`,title:(0,n.jsx)(n.Fragment,{children:`Быстрый старт`})},{depth:3,url:`#ядро`,title:(0,n.jsx)(n.Fragment,{children:`Ядро`})},{depth:3,url:`#zip-статистики`,title:(0,n.jsx)(n.Fragment,{children:`ZIP статистики`})},{depth:3,url:`#право-и-отчёт`,title:(0,n.jsx)(n.Fragment,{children:`Право и отчёт`})},{depth:2,url:`#дальше`,title:(0,n.jsx)(n.Fragment,{children:`Дальше`})}];function c(e){let t={a:`a`,code:`code`,h2:`h2`,h3:`h3`,li:`li`,ol:`ol`,p:`p`,strong:`strong`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,ul:`ul`,...e.components},{Card:r,Cards:i,Step:a,Steps:o}=t;return r||u(`Card`,!0),i||u(`Cards`,!0),a||u(`Step`,!0),o||u(`Steps`,!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Уведомления — статистика`}),` — отдельный ZIP рядом с ядром `,(0,n.jsx)(t.a,{href:`/dev/dle/notifications/200.1.0/getting_started`,children:`DLE Уведомления`}),`. Он показывает в админке счётчики по подпискам и уведомлениям. Собственных таблиц нет: данные читаются из таблиц ядра. В архиве ядра этого модуля `,(0,n.jsx)(t.strong,{children:`нет`}),`.`]}),`
`,(0,n.jsxs)(t.p,{children:[`Модуль встраивается в панель `,(0,n.jsx)(t.code,{children:`?mod=notifications`}),`: пункты `,(0,n.jsx)(t.strong,{children:`Статистика`}),`, `,(0,n.jsx)(t.strong,{children:`Настройки статистики`}),` и история изменений. Отдельного пункта меню DLE нет.`]}),`
`,(0,n.jsxs)(t.p,{children:[`Это `,(0,n.jsx)(t.strong,{children:`не`}),` способ доставки — только отчёт для администратора.`]}),`
`,(0,n.jsx)(t.h2,{id:`что-нужно`,children:`Что нужно`}),`
`,(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`Что`}),(0,n.jsx)(t.th,{children:`Минимум`})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`DataLife Engine`}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:`20.0+`})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`PHP`}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:`8.3+`})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:`/dev/dle/devcraft_admin/200.4.1/getting_started`,children:`DevCraft Admin`})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:`≥ 200.4.1`})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:`/dev/dle/notifications/200.1.0/getting_started`,children:`DLE Уведомления`})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:`200.1.0+`})})]})]})]}),`
`,(0,n.jsx)(t.h2,{id:`возможности`,children:`Возможности`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsx)(t.li,{children:`итоги: уведомления, непрочитанные, подписки, получатели, подписчики;`}),`
`,(0,n.jsx)(t.li,{children:`подписки по типам и включённым каналам;`}),`
`,(0,n.jsx)(t.li,{children:`уведомления по событиям и по дням за выбранный период;`}),`
`,(0,n.jsxs)(t.li,{children:[`право группы `,(0,n.jsx)(t.code,{children:`notifications_stats_view`}),` для доступа к сводке.`]}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`быстрый-старт`,children:`Быстрый старт`}),`
`,(0,n.jsxs)(o,{children:[(0,n.jsxs)(a,{children:[(0,n.jsx)(t.h3,{id:`ядро`,children:`Ядро`}),(0,n.jsxs)(t.p,{children:[`Поставьте `,(0,n.jsx)(t.a,{href:`/dev/dle/notifications/200.1.0/install`,children:`DLE Уведомления`}),` и Admin ≥ 200.4.1.`]})]}),(0,n.jsxs)(a,{children:[(0,n.jsx)(t.h3,{id:`zip-статистики`,children:`ZIP статистики`}),(0,n.jsxs)(t.p,{children:[`Установите этот модуль. Подробности: `,(0,n.jsx)(t.a,{href:`./install`,children:`Установка`}),`.`]})]}),(0,n.jsxs)(a,{children:[(0,n.jsx)(t.h3,{id:`право-и-отчёт`,children:`Право и отчёт`}),(0,n.jsxs)(t.p,{children:[`Выдайте группе право `,(0,n.jsx)(t.code,{children:`notifications_stats_view`}),`. Откройте `,(0,n.jsx)(t.code,{children:`?mod=notifications&action=stats`}),`. См. `,(0,n.jsx)(t.a,{href:`./guides/dashboard`,children:`Сводка`}),`.`]})]})]}),`
`,(0,n.jsxs)(i,{children:[(0,n.jsx)(r,{title:`Установка`,href:`./install`,children:(0,n.jsx)(t.p,{children:`ZIP, needplugin, право notifications_stats_view`})}),(0,n.jsx)(r,{title:`Сводка`,href:`./guides/dashboard`,children:(0,n.jsx)(t.p,{children:`Что показывает страница статистики`})}),(0,n.jsx)(r,{title:`Настройки`,href:`./guides/settings`,children:(0,n.jsx)(t.p,{children:`Период отчёта и топ событий`})}),(0,n.jsx)(r,{title:`Ядро Уведомлений`,href:`/dev/dle/notifications/200.1.0/getting_started`,children:(0,n.jsx)(t.p,{children:`Лента и подписки — 35 €`})})]}),`
`,(0,n.jsx)(t.h2,{id:`дальше`,children:`Дальше`}),`
`,(0,n.jsxs)(t.ol,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:`./install`,children:`Установить`}),` модуль.`]}),`
`,(0,n.jsxs)(t.li,{children:[`Выдать `,(0,n.jsx)(t.code,{children:`notifications_stats_view`}),`.`]}),`
`,(0,n.jsxs)(t.li,{children:[`Открыть `,(0,n.jsx)(t.a,{href:`./guides/dashboard`,children:`сводку`}),`.`]}),`
`]})]})}function l(e={}){let{wrapper:t}=e.components||{};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}function u(e,t){throw Error(`Expected `+(t?`component`:`object`)+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}export{a as _markdown,l as default,r as frontmatter,i as lastModified,o as structuredData,s as toc};