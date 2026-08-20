import{r as e}from"./rolldown-runtime-QTnfLwEv.js";import{t}from"./jsx-runtime-By8HlURe.js";var n=e(t()),r={title:`Провайдеры RePost`},i=new Date(1787213191e3),a=`

Канал доставки — каталог:

\`\`\`text
devcraft/src/modules/RePost/Provider/
├── ProviderInterface.php
├── AbstractProvider.php
├── ProviderRegistry.php
├── Telegram/
└── VK/          # платное дополнение, не в ядре
\`\`\`

\`ProviderRegistry\` сканирует \`init.php\` и регистрирует провайдер по ключу \`name\`.

## Каналы [#каналы]

| Канал    | Статус  | Документация                                |
| -------- | ------- | ------------------------------------------- |
| Telegram | в ядре  | [providers/telegram.md](providers/telegram) |
| VK.com   | платное | [providers/vk.md](providers/vk)             |

## init.php [#initphp]

\`\`\`php
return [
    'name'    => 'telegram',
    'title'   => 'Telegram',
    'version' => '200.2.0',
    'class'   => \\DevCraft\\Modules\\RePost\\Provider\\Telegram\\TelegramProvider::class,
];
\`\`\`

## Контракт [#контракт]

Класс реализует \`ProviderInterface&#x60; через &#x2A;*\`extends AbstractProvider\`**:

* \`settingsSchema()\` — поля формы подключения
* \`mediaByteLimits()\` — обязательные лимиты размера (байты) по типам медиа
* \`send(…)\` — до аплоада вызывает \`filterMediaByLimits()\`
* \`SendResult\` через \`ok()\` / \`fail()\`

Локальные файлы сверх лимита отсекаются контрактом AbstractProvider и не роняют всю отправку сырым HTTP 413. Подробности: [developing\\_providers.md](reference/developing_providers).

## Новый провайдер [#новый-провайдер]

См. [developing\\_providers.md](reference/developing_providers). Платные каналы — отдельный ZIP в \`Provider/{Code}/\` + composer deps.
`,o={contents:[{heading:void 0,content:`Канал доставки — каталог:`},{heading:void 0,content:"`ProviderRegistry` сканирует `init.php` и регистрирует провайдер по ключу `name`."},{heading:`каналы`,content:`Канал`},{heading:`каналы`,content:`Статус`},{heading:`каналы`,content:`Документация`},{heading:`каналы`,content:`Telegram`},{heading:`каналы`,content:`в ядре`},{heading:`каналы`,content:`providers/telegram.md`},{heading:`каналы`,content:`VK.com`},{heading:`каналы`,content:`платное`},{heading:`каналы`,content:`providers/vk.md`},{heading:`контракт`,content:"Класс реализует `ProviderInterface&#x60; через &#x2A;*`extends AbstractProvider`**:"},{heading:`контракт`,content:"`settingsSchema()` — поля формы подключения"},{heading:`контракт`,content:"`mediaByteLimits()` — обязательные лимиты размера (байты) по типам медиа"},{heading:`контракт`,content:"`send(…)` — до аплоада вызывает `filterMediaByLimits()`"},{heading:`контракт`,content:"`SendResult` через `ok()` / `fail()`"},{heading:`контракт`,content:`Локальные файлы сверх лимита отсекаются контрактом AbstractProvider и не роняют всю отправку сырым HTTP 413. Подробности: developing\\_providers.md.`},{heading:`новый-провайдер`,content:"См. developing\\_providers.md. Платные каналы — отдельный ZIP в `Provider/{Code}/` + composer deps."}],headings:[{id:`каналы`,content:`Каналы`},{id:`initphp`,content:`init.php`},{id:`контракт`,content:`Контракт`},{id:`новый-провайдер`,content:`Новый провайдер`}]},s=[{depth:2,url:`#каналы`,title:(0,n.jsx)(n.Fragment,{children:`Каналы`})},{depth:2,url:`#initphp`,title:(0,n.jsx)(n.Fragment,{children:`init.php`})},{depth:2,url:`#контракт`,title:(0,n.jsx)(n.Fragment,{children:`Контракт`})},{depth:2,url:`#новый-провайдер`,title:(0,n.jsx)(n.Fragment,{children:`Новый провайдер`})}];function c(e){let t={a:`a`,code:`code`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,span:`span`,strong:`strong`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,ul:`ul`,...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.p,{children:`Канал доставки — каталог:`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsxs)(t.code,{children:[(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`devcraft/src/modules/RePost/Provider/`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`├── ProviderInterface.php`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`├── AbstractProvider.php`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`├── ProviderRegistry.php`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`├── Telegram/`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`└── VK/          # платное дополнение, не в ядре`})})]})})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:`ProviderRegistry`}),` сканирует `,(0,n.jsx)(t.code,{children:`init.php`}),` и регистрирует провайдер по ключу `,(0,n.jsx)(t.code,{children:`name`}),`.`]}),`
`,(0,n.jsx)(t.h2,{id:`каналы`,children:`Каналы`}),`
`,(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`Канал`}),(0,n.jsx)(t.th,{children:`Статус`}),(0,n.jsx)(t.th,{children:`Документация`})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`Telegram`}),(0,n.jsx)(t.td,{children:`в ядре`}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:`providers/telegram`,children:`providers/telegram.md`})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`VK.com`}),(0,n.jsx)(t.td,{children:`платное`}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:`providers/vk`,children:`providers/vk.md`})})]})]})]}),`
`,(0,n.jsx)(t.h2,{id:`initphp`,children:`init.php`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M7.01 10.207h-.944l-.515 2.648h.838c.556 0 .97-.105 1.242-.314.272-.21.455-.559.55-1.049.092-.47.05-.802-.124-.995-.175-.193-.523-.29-1.047-.29zM12 5.688C5.373 5.688 0 8.514 0 12s5.373 6.313 12 6.313S24 15.486 24 12c0-3.486-5.373-6.312-12-6.312zm-3.26 7.451c-.261.25-.575.438-.917.551-.336.108-.765.164-1.285.164H5.357l-.327 1.681H3.652l1.23-6.326h2.65c.797 0 1.378.209 1.744.628.366.418.476 1.002.33 1.752a2.836 2.836 0 0 1-.305.847c-.143.255-.33.49-.561.703zm4.024.715l.543-2.799c.063-.318.039-.536-.068-.651-.107-.116-.336-.174-.687-.174H11.46l-.704 3.625H9.388l1.23-6.327h1.367l-.327 1.682h1.218c.767 0 1.295.134 1.586.401s.378.7.263 1.299l-.572 2.944h-1.389zm7.597-2.265a2.782 2.782 0 0 1-.305.847c-.143.255-.33.49-.561.703a2.44 2.44 0 0 1-.917.551c-.336.108-.765.164-1.286.164h-1.18l-.327 1.682h-1.378l1.23-6.326h2.649c.797 0 1.378.209 1.744.628.366.417.477 1.001.331 1.751zM17.766 10.207h-.943l-.516 2.648h.838c.557 0 .971-.105 1.242-.314.272-.21.455-.559.551-1.049.092-.47.049-.802-.125-.995s-.524-.29-1.047-.29z" fill="currentColor" /></svg>`,children:(0,n.jsxs)(t.code,{children:[(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`return`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:` [`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`    'name'`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`    =>`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:` 'telegram'`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`,`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`    'title'`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`   =>`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:` 'Telegram'`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`,`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`    'version'`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:` =>`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:` '200.2.0'`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`,`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`    'class'`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`   =>`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:` \\DevCraft\\Modules\\RePost\\Provider\\Telegram\\TelegramProvider`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`::class`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`,`})]}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`];`})})]})})}),`
`,(0,n.jsx)(t.h2,{id:`контракт`,children:`Контракт`}),`
`,(0,n.jsxs)(t.p,{children:[`Класс реализует `,(0,n.jsx)(t.code,{children:`ProviderInterface`}),` через `,(0,n.jsx)(t.strong,{children:(0,n.jsx)(t.code,{children:`extends AbstractProvider`})}),`:`]}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`settingsSchema()`}),` — поля формы подключения`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`mediaByteLimits()`}),` — обязательные лимиты размера (байты) по типам медиа`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`send(…)`}),` — до аплоада вызывает `,(0,n.jsx)(t.code,{children:`filterMediaByLimits()`})]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`SendResult`}),` через `,(0,n.jsx)(t.code,{children:`ok()`}),` / `,(0,n.jsx)(t.code,{children:`fail()`})]}),`
`]}),`
`,(0,n.jsxs)(t.p,{children:[`Локальные файлы сверх лимита отсекаются контрактом AbstractProvider и не роняют всю отправку сырым HTTP 413. Подробности: `,(0,n.jsx)(t.a,{href:`reference/developing_providers`,children:`developing_providers.md`}),`.`]}),`
`,(0,n.jsx)(t.h2,{id:`новый-провайдер`,children:`Новый провайдер`}),`
`,(0,n.jsxs)(t.p,{children:[`См. `,(0,n.jsx)(t.a,{href:`reference/developing_providers`,children:`developing_providers.md`}),`. Платные каналы — отдельный ZIP в `,(0,n.jsx)(t.code,{children:`Provider/{Code}/`}),` + composer deps.`]})]})}function l(e={}){let{wrapper:t}=e.components||{};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}export{a as _markdown,l as default,r as frontmatter,i as lastModified,o as structuredData,s as toc};