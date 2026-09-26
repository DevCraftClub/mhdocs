import{r as e}from"./rolldown-runtime-QTnfLwEv.js";import{t}from"./jsx-runtime-By8HlURe.js";var n=e(t()),r={title:`Дополнительные модули`,description:`Указатель на отдельные ZIP: Telegram, сводка и статистика. В ядро не входят.`,version:`200.1.0`},i=new Date(1790413881e3),a=`

Telegram, сводка и статистика — **отдельные ZIP**. В архиве ядра DLE Уведомления их нет. После установки соседнего ZIP пункты меню появляются **внутри** \`?mod=notifications\` (через \`extends\`), без отдельного пункта меню DLE.

<Callout type="info">
  Ядро (лента, подписки, сайт / почта / личные сообщения) стоит &#x2A;*35 €**. Цены соседних модулей в этой документации не указаны.
</Callout>

## Пакеты [#пакеты]

| Модуль     | Документация                                                                       | Админка после установки              |
| ---------- | ---------------------------------------------------------------------------------- | ------------------------------------ |
| Telegram   | [notifications\\_telegram](/dev/dle/notifications_telegram/200.1.0/getting_started) | \`?mod=notifications&action=telegram\` |
| Сводка     | [notifications\\_digest](/dev/dle/notifications_digest/200.1.0/getting_started)     | \`?mod=notifications&action=digest\`   |
| Статистика | [notifications\\_stats](/dev/dle/notifications_stats/200.1.0/getting_started)       | \`?mod=notifications&action=stats\`    |

Поля настроек соседних модулей также попадают на общую страницу **DLE Уведомления → Настройки** (префикс кода модуля).

Права групп задаются на **DLE Уведомления → Права групп**.

## Как соседний модуль подключается [#как-соседний-модуль-подключается]

1. Каталог \`Notifications*\` с \`boot.php\` и \`->extends('notifications')\` в манифесте.
2. Ядро подмешивает меню, страницы, AJAX и вкладки настроек в \`mod=notifications\`.
3. \`SatelliteLoader::boot()\` подключает файлы запуска (способы доставки, функции для cron).
4. В \`boot.php\`: \`ChannelRegistry::instance()->register(…)\` и/или глобальные \`notify*\`.
5. По желанию: \`permissions.defs.php\`, \`settings.schema.php\`.

Свой способ доставки с нуля: [Свой канал доставки](./custom_channel).

## См. также [#см-также]

* [Установка ядра](../install)
* [Шаблоны темы](../templates)
* [Свой канал доставки](./custom_channel)
* [Своё событие](./custom_event)
* [Права групп](./permissions)
`,o={contents:[{heading:void 0,content:"Telegram, сводка и статистика — **отдельные ZIP**. В архиве ядра DLE Уведомления их нет. После установки соседнего ZIP пункты меню появляются **внутри** `?mod=notifications` (через `extends`), без отдельного пункта меню DLE."},{heading:void 0,content:`Ядро (лента, подписки, сайт / почта / личные сообщения) стоит &#x2A;*35 €**. Цены соседних модулей в этой документации не указаны.`},{heading:`пакеты`,content:`Модуль`},{heading:`пакеты`,content:`Документация`},{heading:`пакеты`,content:`Админка после установки`},{heading:`пакеты`,content:`Telegram`},{heading:`пакеты`,content:`notifications\\_telegram`},{heading:`пакеты`,content:"`?mod=notifications&action=telegram`"},{heading:`пакеты`,content:`Сводка`},{heading:`пакеты`,content:`notifications\\_digest`},{heading:`пакеты`,content:"`?mod=notifications&action=digest`"},{heading:`пакеты`,content:`Статистика`},{heading:`пакеты`,content:`notifications\\_stats`},{heading:`пакеты`,content:"`?mod=notifications&action=stats`"},{heading:`пакеты`,content:`Поля настроек соседних модулей также попадают на общую страницу **DLE Уведомления → Настройки** (префикс кода модуля).`},{heading:`пакеты`,content:`Права групп задаются на **DLE Уведомления → Права групп**.`},{heading:`как-соседний-модуль-подключается`,content:"Каталог `Notifications*` с `boot.php` и `->extends('notifications')` в манифесте."},{heading:`как-соседний-модуль-подключается`,content:"Ядро подмешивает меню, страницы, AJAX и вкладки настроек в `mod=notifications`."},{heading:`как-соседний-модуль-подключается`,content:"`SatelliteLoader::boot()` подключает файлы запуска (способы доставки, функции для cron)."},{heading:`как-соседний-модуль-подключается`,content:"В `boot.php`: `ChannelRegistry::instance()->register(…)` и/или глобальные `notify*`."},{heading:`как-соседний-модуль-подключается`,content:"По желанию: `permissions.defs.php`, `settings.schema.php`."},{heading:`как-соседний-модуль-подключается`,content:`Свой способ доставки с нуля: Свой канал доставки.`},{heading:`см-также`,content:`Установка ядра`},{heading:`см-также`,content:`Шаблоны темы`},{heading:`см-также`,content:`Свой канал доставки`},{heading:`см-также`,content:`Своё событие`},{heading:`см-также`,content:`Права групп`}],headings:[{id:`пакеты`,content:`Пакеты`},{id:`как-соседний-модуль-подключается`,content:`Как соседний модуль подключается`},{id:`см-также`,content:`См. также`}]},s=[{depth:2,url:`#пакеты`,title:(0,n.jsx)(n.Fragment,{children:`Пакеты`})},{depth:2,url:`#как-соседний-модуль-подключается`,title:(0,n.jsx)(n.Fragment,{children:`Как соседний модуль подключается`})},{depth:2,url:`#см-также`,title:(0,n.jsx)(n.Fragment,{children:`См. также`})}];function c(e){let t={a:`a`,code:`code`,h2:`h2`,li:`li`,ol:`ol`,p:`p`,strong:`strong`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,ul:`ul`,...e.components},{Callout:r}=t;return r||u(`Callout`,!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:[`Telegram, сводка и статистика — `,(0,n.jsx)(t.strong,{children:`отдельные ZIP`}),`. В архиве ядра DLE Уведомления их нет. После установки соседнего ZIP пункты меню появляются `,(0,n.jsx)(t.strong,{children:`внутри`}),` `,(0,n.jsx)(t.code,{children:`?mod=notifications`}),` (через `,(0,n.jsx)(t.code,{children:`extends`}),`), без отдельного пункта меню DLE.`]}),`
`,(0,n.jsx)(r,{type:`info`,children:(0,n.jsxs)(t.p,{children:[`Ядро (лента, подписки, сайт / почта / личные сообщения) стоит `,(0,n.jsx)(t.strong,{children:`35 €`}),`. Цены соседних модулей в этой документации не указаны.`]})}),`
`,(0,n.jsx)(t.h2,{id:`пакеты`,children:`Пакеты`}),`
`,(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`Модуль`}),(0,n.jsx)(t.th,{children:`Документация`}),(0,n.jsx)(t.th,{children:`Админка после установки`})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`Telegram`}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:`/dev/dle/notifications_telegram/200.1.0/getting_started`,children:`notifications_telegram`})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:`?mod=notifications&action=telegram`})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`Сводка`}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:`/dev/dle/notifications_digest/200.1.0/getting_started`,children:`notifications_digest`})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:`?mod=notifications&action=digest`})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`Статистика`}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:`/dev/dle/notifications_stats/200.1.0/getting_started`,children:`notifications_stats`})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:`?mod=notifications&action=stats`})})]})]})]}),`
`,(0,n.jsxs)(t.p,{children:[`Поля настроек соседних модулей также попадают на общую страницу `,(0,n.jsx)(t.strong,{children:`DLE Уведомления → Настройки`}),` (префикс кода модуля).`]}),`
`,(0,n.jsxs)(t.p,{children:[`Права групп задаются на `,(0,n.jsx)(t.strong,{children:`DLE Уведомления → Права групп`}),`.`]}),`
`,(0,n.jsx)(t.h2,{id:`как-соседний-модуль-подключается`,children:`Как соседний модуль подключается`}),`
`,(0,n.jsxs)(t.ol,{children:[`
`,(0,n.jsxs)(t.li,{children:[`Каталог `,(0,n.jsx)(t.code,{children:`Notifications*`}),` с `,(0,n.jsx)(t.code,{children:`boot.php`}),` и `,(0,n.jsx)(t.code,{children:`->extends('notifications')`}),` в манифесте.`]}),`
`,(0,n.jsxs)(t.li,{children:[`Ядро подмешивает меню, страницы, AJAX и вкладки настроек в `,(0,n.jsx)(t.code,{children:`mod=notifications`}),`.`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`SatelliteLoader::boot()`}),` подключает файлы запуска (способы доставки, функции для cron).`]}),`
`,(0,n.jsxs)(t.li,{children:[`В `,(0,n.jsx)(t.code,{children:`boot.php`}),`: `,(0,n.jsx)(t.code,{children:`ChannelRegistry::instance()->register(…)`}),` и/или глобальные `,(0,n.jsx)(t.code,{children:`notify*`}),`.`]}),`
`,(0,n.jsxs)(t.li,{children:[`По желанию: `,(0,n.jsx)(t.code,{children:`permissions.defs.php`}),`, `,(0,n.jsx)(t.code,{children:`settings.schema.php`}),`.`]}),`
`]}),`
`,(0,n.jsxs)(t.p,{children:[`Свой способ доставки с нуля: `,(0,n.jsx)(t.a,{href:`./custom_channel`,children:`Свой канал доставки`}),`.`]}),`
`,(0,n.jsx)(t.h2,{id:`см-также`,children:`См. также`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`../install`,children:`Установка ядра`})}),`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`../templates`,children:`Шаблоны темы`})}),`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`./custom_channel`,children:`Свой канал доставки`})}),`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`./custom_event`,children:`Своё событие`})}),`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`./permissions`,children:`Права групп`})}),`
`]})]})}function l(e={}){let{wrapper:t}=e.components||{};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}function u(e,t){throw Error(`Expected `+(t?`component`:`object`)+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}export{a as _markdown,l as default,r as frontmatter,i as lastModified,o as structuredData,s as toc};