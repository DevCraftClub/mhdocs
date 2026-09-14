import{r as e}from"./rolldown-runtime-QTnfLwEv.js";import{t}from"./jsx-runtime-By8HlURe.js";var n=e(t()),r={title:`ChannelInterface`,description:`Контракт канала доставки уведомлений и регистрация в ChannelRegistry`,version:`200.1.0`},i=new Date(1789411081e3),a=`

**Описание:** интерфейс канала доставки. Реализации: \`SiteChannel\`, \`EmailChannel\`, \`PmChannel\` и каналы сателлитов (например \`TelegramChannel\`).

**Namespace:** \`DevCraft\\Modules\\Notifications\\Channels\`

**С версии:** 200.1.0

**См. также:**

* [Свой канал доставки](../guides/custom_channel)
* [Сателлиты](../guides/satellites)
* [Notify](./Notify)

## Методы [#методы]

### \`id(): string\` [#id-string]

**Описание:** уникальный ключ канала (\`site\`, \`email\`, \`pm\`, \`telegram\`, …).

**Возвращает:** \`string\`

### \`deliver(ChannelDeliveryContext $ctx): bool\` [#deliverchanneldeliverycontext-ctx-bool]

**Описание:** отправляет одно уведомление получателю. При ошибке возвращает \`false\` (исключения лучше ловить внутри).

**Параметры:**

| Параметр | Тип                      | Описание                                           |
| -------- | ------------------------ | -------------------------------------------------- |
| \`$ctx\`   | \`ChannelDeliveryContext\` | Получатель, тело, vars, cfg, Activity Streams поля |

**Возвращает:** \`bool\` — успех доставки

## ChannelRegistry [#channelregistry]

Синглтон \`ChannelRegistry::instance()\`:

| Метод                                 | Описание                                                          |
| ------------------------------------- | ----------------------------------------------------------------- |
| \`register(ChannelInterface $channel)\` | Добавить / заменить канал по \`id()\`                               |
| \`get(string $id)\`                     | Канал или \`null\`                                                  |
| \`all()\`                               | Все каналы (сначала базовые site/email/pm, затем boot сателлитов) |
| \`ids()\`                               | Список id                                                         |

При первом обращении к реестру вызывается \`SatelliteLoader::boot()\`.

## Пример [#пример]

\`\`\`php
use DevCraft\\Modules\\Notifications\\Channels\\ChannelRegistry;

ChannelRegistry::instance()->register(new \\DevCraft\\Modules\\MyMod\\Channels\\DiscordChannel());

$channel = ChannelRegistry::instance()->get('discord');
\`\`\`

Практический гайд: [Свой канал доставки](../guides/custom_channel).
`,o={contents:[{heading:void 0,content:"**Описание:** интерфейс канала доставки. Реализации: `SiteChannel`, `EmailChannel`, `PmChannel` и каналы сателлитов (например `TelegramChannel`)."},{heading:void 0,content:"**Namespace:** `DevCraft\\Modules\\Notifications\\Channels`"},{heading:void 0,content:`**С версии:** 200.1.0`},{heading:void 0,content:`**См. также:**`},{heading:void 0,content:`Свой канал доставки`},{heading:void 0,content:`Сателлиты`},{heading:void 0,content:`Notify`},{heading:`id-string`,content:"**Описание:** уникальный ключ канала (`site`, `email`, `pm`, `telegram`, …)."},{heading:`id-string`,content:"**Возвращает:** `string`"},{heading:`deliverchanneldeliverycontext-ctx-bool`,content:"**Описание:** отправляет одно уведомление получателю. При ошибке возвращает `false` (исключения лучше ловить внутри)."},{heading:`deliverchanneldeliverycontext-ctx-bool`,content:`**Параметры:**`},{heading:`deliverchanneldeliverycontext-ctx-bool`,content:`Параметр`},{heading:`deliverchanneldeliverycontext-ctx-bool`,content:`Тип`},{heading:`deliverchanneldeliverycontext-ctx-bool`,content:`Описание`},{heading:`deliverchanneldeliverycontext-ctx-bool`,content:"`$ctx`"},{heading:`deliverchanneldeliverycontext-ctx-bool`,content:"`ChannelDeliveryContext`"},{heading:`deliverchanneldeliverycontext-ctx-bool`,content:`Получатель, тело, vars, cfg, Activity Streams поля`},{heading:`deliverchanneldeliverycontext-ctx-bool`,content:"**Возвращает:** `bool` — успех доставки"},{heading:`channelregistry`,content:"Синглтон `ChannelRegistry::instance()`:"},{heading:`channelregistry`,content:`Метод`},{heading:`channelregistry`,content:`Описание`},{heading:`channelregistry`,content:"`register(ChannelInterface $channel)`"},{heading:`channelregistry`,content:"Добавить / заменить канал по `id()`"},{heading:`channelregistry`,content:"`get(string $id)`"},{heading:`channelregistry`,content:"Канал или `null`"},{heading:`channelregistry`,content:"`all()`"},{heading:`channelregistry`,content:`Все каналы (сначала базовые site/email/pm, затем boot сателлитов)`},{heading:`channelregistry`,content:"`ids()`"},{heading:`channelregistry`,content:`Список id`},{heading:`channelregistry`,content:"При первом обращении к реестру вызывается `SatelliteLoader::boot()`."},{heading:`пример`,content:`Практический гайд: Свой канал доставки.`}],headings:[{id:`методы`,content:`Методы`},{id:`id-string`,content:"`id(): string`"},{id:`deliverchanneldeliverycontext-ctx-bool`,content:"`deliver(ChannelDeliveryContext $ctx): bool`"},{id:`channelregistry`,content:`ChannelRegistry`},{id:`пример`,content:`Пример`}]},s=[{depth:2,url:`#методы`,title:(0,n.jsx)(n.Fragment,{children:`Методы`})},{depth:3,url:`#id-string`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`id(): string`})})},{depth:3,url:`#deliverchanneldeliverycontext-ctx-bool`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`deliver(ChannelDeliveryContext $ctx): bool`})})},{depth:2,url:`#channelregistry`,title:(0,n.jsx)(n.Fragment,{children:`ChannelRegistry`})},{depth:2,url:`#пример`,title:(0,n.jsx)(n.Fragment,{children:`Пример`})}];function c(e){let t={a:`a`,code:`code`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,span:`span`,strong:`strong`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,ul:`ul`,...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` интерфейс канала доставки. Реализации: `,(0,n.jsx)(t.code,{children:`SiteChannel`}),`, `,(0,n.jsx)(t.code,{children:`EmailChannel`}),`, `,(0,n.jsx)(t.code,{children:`PmChannel`}),` и каналы сателлитов (например `,(0,n.jsx)(t.code,{children:`TelegramChannel`}),`).`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Namespace:`}),` `,(0,n.jsx)(t.code,{children:`DevCraft\\Modules\\Notifications\\Channels`})]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 200.1.0`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`См. также:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`../guides/custom_channel`,children:`Свой канал доставки`})}),`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`../guides/satellites`,children:`Сателлиты`})}),`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`./Notify`,children:`Notify`})}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`методы`,children:`Методы`}),`
`,(0,n.jsx)(t.h3,{id:`id-string`,children:(0,n.jsx)(t.code,{children:`id(): string`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` уникальный ключ канала (`,(0,n.jsx)(t.code,{children:`site`}),`, `,(0,n.jsx)(t.code,{children:`email`}),`, `,(0,n.jsx)(t.code,{children:`pm`}),`, `,(0,n.jsx)(t.code,{children:`telegram`}),`, …).`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`string`})]}),`
`,(0,n.jsx)(t.h3,{id:`deliverchanneldeliverycontext-ctx-bool`,children:(0,n.jsx)(t.code,{children:`deliver(ChannelDeliveryContext $ctx): bool`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` отправляет одно уведомление получателю. При ошибке возвращает `,(0,n.jsx)(t.code,{children:`false`}),` (исключения лучше ловить внутри).`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`Параметр`}),(0,n.jsx)(t.th,{children:`Тип`}),(0,n.jsx)(t.th,{children:`Описание`})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:`$ctx`})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:`ChannelDeliveryContext`})}),(0,n.jsx)(t.td,{children:`Получатель, тело, vars, cfg, Activity Streams поля`})]})})]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`bool`}),` — успех доставки`]}),`
`,(0,n.jsx)(t.h2,{id:`channelregistry`,children:`ChannelRegistry`}),`
`,(0,n.jsxs)(t.p,{children:[`Синглтон `,(0,n.jsx)(t.code,{children:`ChannelRegistry::instance()`}),`:`]}),`
`,(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`Метод`}),(0,n.jsx)(t.th,{children:`Описание`})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:`register(ChannelInterface $channel)`})}),(0,n.jsxs)(t.td,{children:[`Добавить / заменить канал по `,(0,n.jsx)(t.code,{children:`id()`})]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:`get(string $id)`})}),(0,n.jsxs)(t.td,{children:[`Канал или `,(0,n.jsx)(t.code,{children:`null`})]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:`all()`})}),(0,n.jsx)(t.td,{children:`Все каналы (сначала базовые site/email/pm, затем boot сателлитов)`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:`ids()`})}),(0,n.jsx)(t.td,{children:`Список id`})]})]})]}),`
`,(0,n.jsxs)(t.p,{children:[`При первом обращении к реестру вызывается `,(0,n.jsx)(t.code,{children:`SatelliteLoader::boot()`}),`.`]}),`
`,(0,n.jsx)(t.h2,{id:`пример`,children:`Пример`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M7.01 10.207h-.944l-.515 2.648h.838c.556 0 .97-.105 1.242-.314.272-.21.455-.559.55-1.049.092-.47.05-.802-.124-.995-.175-.193-.523-.29-1.047-.29zM12 5.688C5.373 5.688 0 8.514 0 12s5.373 6.313 12 6.313S24 15.486 24 12c0-3.486-5.373-6.312-12-6.312zm-3.26 7.451c-.261.25-.575.438-.917.551-.336.108-.765.164-1.285.164H5.357l-.327 1.681H3.652l1.23-6.326h2.65c.797 0 1.378.209 1.744.628.366.418.476 1.002.33 1.752a2.836 2.836 0 0 1-.305.847c-.143.255-.33.49-.561.703zm4.024.715l.543-2.799c.063-.318.039-.536-.068-.651-.107-.116-.336-.174-.687-.174H11.46l-.704 3.625H9.388l1.23-6.327h1.367l-.327 1.682h1.218c.767 0 1.295.134 1.586.401s.378.7.263 1.299l-.572 2.944h-1.389zm7.597-2.265a2.782 2.782 0 0 1-.305.847c-.143.255-.33.49-.561.703a2.44 2.44 0 0 1-.917.551c-.336.108-.765.164-1.286.164h-1.18l-.327 1.682h-1.378l1.23-6.326h2.649c.797 0 1.378.209 1.744.628.366.417.477 1.001.331 1.751zM17.766 10.207h-.943l-.516 2.648h.838c.557 0 .971-.105 1.242-.314.272-.21.455-.559.551-1.049.092-.47.049-.802-.125-.995s-.524-.29-1.047-.29z" fill="currentColor" /></svg>`,children:(0,n.jsxs)(t.code,{children:[(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`use`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:` DevCraft\\Modules\\Notifications\\Channels\\ChannelRegistry`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`;`})]}),`
`,(0,n.jsx)(t.span,{className:`line`}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`ChannelRegistry`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`::`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`instance`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`()`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`->`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`register`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`(`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`new`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:` \\DevCraft\\Modules\\MyMod\\Channels\\DiscordChannel`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`());`})]}),`
`,(0,n.jsx)(t.span,{className:`line`}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`$channel `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`=`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:` ChannelRegistry`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`::`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`instance`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`()`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`->`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`get`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`(`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`'discord'`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`);`})]})]})})}),`
`,(0,n.jsxs)(t.p,{children:[`Практический гайд: `,(0,n.jsx)(t.a,{href:`../guides/custom_channel`,children:`Свой канал доставки`}),`.`]})]})}function l(e={}){let{wrapper:t}=e.components||{};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}export{a as _markdown,l as default,r as frontmatter,i as lastModified,o as structuredData,s as toc};