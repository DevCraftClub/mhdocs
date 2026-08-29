import{r as e}from"./rolldown-runtime-QTnfLwEv.js";import{t}from"./jsx-runtime-By8HlURe.js";var n=e(t()),r={title:`Установка`,description:`Установка плагина, autoload, схема БД и шаблоны темы`,version:`200.1.0`},i=new Date(1788011088e3),a=`

<Callout type="warn" title="DevCraft Admin">
  Сначала установите [DevCraft Admin](../../devcraft_admin/install). Без него модуль не поднимается.
</Callout>

## Требования [#требования]

* DLE 20+
* PHP 8.3+
* DevCraft Admin 200.4.0+

## Порядок [#порядок]

1. Скачайте ZIP или соберите его в репозитории: \`./create_install_archive.sh\`.
2. В админке DLE: **Плагины → Установить плагин**.
3. В каталоге \`devcraft/\` выполните:

\`\`\`bash
composer dump-autoload
\`\`\`

4. Откройте **DLE Уведомления**. При первом заходе создаются таблицы.
5. Если активная тема не \`Default\`, скопируйте\\
   \`templates/Default/devcraft/notifications/\`\\
   в \`templates/ИмяТемы/devcraft/notifications/\`\\
   и при необходимости \`templates/{тема}/devcraft/notifications/page.tpl\` (страница \`do=notifications\`).\\
   Fallback на \`Default\` срабатывает только если файла нет в текущем скине.
6. В **Настройках** включите типы подписок и каналы (сайт / почта / ЛС).
7. В шапке темы добавьте \`focus=css\`, внизу — \`focus=js\` — см. [вставка в тему](./guides/subscribe_wall).

После установки \`notify*\` доступны глобально (bootstrap в \`engine/init.php\` / admin init). В своём хаке достаточно \`function_exists('notifySend')\` — отдельный include не нужен.

Плагин регистрирует маршрут [страницы уведомлений](./guides/notifications_page): \`/index.php?do=notifications\` и ЧПУ \`/notifications/\`.

На сайте блоки не появляются сами: нужны include в шаблонах темы. Тексты уведомлений — \`.tpl\` в той же папке, см. [шаблоны и теги](./guides/scenario_templates).

## Если блока нет [#если-блока-нет]

* пользователь не авторизован;
* у группы нет права на подписку / стену / ленту ([права групп](./guides/permissions));
* тип подписки выключен в настройках модуля.

## См. также [#см-также]

* [Начало работы](./getting_started)
* [Страница уведомлений](./guides/notifications_page)
* [Права групп](./guides/permissions)
* [История изменений](./changelog)
`,o={contents:[{heading:void 0,content:`Сначала установите DevCraft Admin. Без него модуль не поднимается.`},{heading:`требования`,content:`DLE 20+`},{heading:`требования`,content:`PHP 8.3+`},{heading:`требования`,content:`DevCraft Admin 200.4.0+`},{heading:`порядок`,content:"Скачайте ZIP или соберите его в репозитории: `./create_install_archive.sh`."},{heading:`порядок`,content:`В админке DLE: **Плагины → Установить плагин**.`},{heading:`порядок`,content:"В каталоге `devcraft/` выполните:"},{heading:`порядок`,content:`Откройте **DLE Уведомления**. При первом заходе создаются таблицы.`},{heading:`порядок`,content:"Если активная тема не `Default`, скопируйте\\\n`templates/Default/devcraft/notifications/`\\\nв `templates/ИмяТемы/devcraft/notifications/`\\\nи при необходимости `templates/{тема}/devcraft/notifications/page.tpl` (страница `do=notifications`).\\\nFallback на `Default` срабатывает только если файла нет в текущем скине."},{heading:`порядок`,content:`В **Настройках** включите типы подписок и каналы (сайт / почта / ЛС).`},{heading:`порядок`,content:"В шапке темы добавьте `focus=css`, внизу — `focus=js` — см. вставка в тему."},{heading:`порядок`,content:"После установки `notify*` доступны глобально (bootstrap в `engine/init.php` / admin init). В своём хаке достаточно `function_exists('notifySend')` — отдельный include не нужен."},{heading:`порядок`,content:"Плагин регистрирует маршрут страницы уведомлений: `/index.php?do=notifications` и ЧПУ `/notifications/`."},{heading:`порядок`,content:"На сайте блоки не появляются сами: нужны include в шаблонах темы. Тексты уведомлений — `.tpl` в той же папке, см. шаблоны и теги."},{heading:`если-блока-нет`,content:`пользователь не авторизован;`},{heading:`если-блока-нет`,content:`у группы нет права на подписку / стену / ленту (права групп);`},{heading:`если-блока-нет`,content:`тип подписки выключен в настройках модуля.`},{heading:`см-также`,content:`Начало работы`},{heading:`см-также`,content:`Страница уведомлений`},{heading:`см-также`,content:`Права групп`},{heading:`см-также`,content:`История изменений`}],headings:[{id:`требования`,content:`Требования`},{id:`порядок`,content:`Порядок`},{id:`если-блока-нет`,content:`Если блока нет`},{id:`см-также`,content:`См. также`}]},s=[{depth:2,url:`#требования`,title:(0,n.jsx)(n.Fragment,{children:`Требования`})},{depth:2,url:`#порядок`,title:(0,n.jsx)(n.Fragment,{children:`Порядок`})},{depth:2,url:`#если-блока-нет`,title:(0,n.jsx)(n.Fragment,{children:`Если блока нет`})},{depth:2,url:`#см-также`,title:(0,n.jsx)(n.Fragment,{children:`См. также`})}];function c(e){let t={a:`a`,br:`br`,code:`code`,h2:`h2`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,span:`span`,strong:`strong`,ul:`ul`,...e.components},{Callout:r}=t;return r||u(`Callout`,!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r,{type:`warn`,title:`DevCraft Admin`,children:(0,n.jsxs)(t.p,{children:[`Сначала установите `,(0,n.jsx)(t.a,{href:`../../devcraft_admin/install`,children:`DevCraft Admin`}),`. Без него модуль не поднимается.`]})}),`
`,(0,n.jsx)(t.h2,{id:`требования`,children:`Требования`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsx)(t.li,{children:`DLE 20+`}),`
`,(0,n.jsx)(t.li,{children:`PHP 8.3+`}),`
`,(0,n.jsx)(t.li,{children:`DevCraft Admin 200.4.0+`}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`порядок`,children:`Порядок`}),`
`,(0,n.jsxs)(t.ol,{children:[`
`,(0,n.jsxs)(t.li,{children:[`Скачайте ZIP или соберите его в репозитории: `,(0,n.jsx)(t.code,{children:`./create_install_archive.sh`}),`.`]}),`
`,(0,n.jsxs)(t.li,{children:[`В админке DLE: `,(0,n.jsx)(t.strong,{children:`Плагины → Установить плагин`}),`.`]}),`
`,(0,n.jsxs)(t.li,{children:[`В каталоге `,(0,n.jsx)(t.code,{children:`devcraft/`}),` выполните:`]}),`
`]}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="m 4,4 a 1,1 0 0 0 -0.7070312,0.2929687 1,1 0 0 0 0,1.4140625 L 8.5859375,11 3.2929688,16.292969 a 1,1 0 0 0 0,1.414062 1,1 0 0 0 1.4140624,0 l 5.9999998,-6 a 1.0001,1.0001 0 0 0 0,-1.414062 L 4.7070312,4.2929687 A 1,1 0 0 0 4,4 Z m 8,14 a 1,1 0 0 0 -1,1 1,1 0 0 0 1,1 h 8 a 1,1 0 0 0 1,-1 1,1 0 0 0 -1,-1 z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`composer`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:` dump-autoload`})]})})})}),`
`,(0,n.jsxs)(t.ol,{start:`4`,children:[`
`,(0,n.jsxs)(t.li,{children:[`Откройте `,(0,n.jsx)(t.strong,{children:`DLE Уведомления`}),`. При первом заходе создаются таблицы.`]}),`
`,(0,n.jsxs)(t.li,{children:[`Если активная тема не `,(0,n.jsx)(t.code,{children:`Default`}),`, скопируйте`,(0,n.jsx)(t.br,{}),`
`,(0,n.jsx)(t.code,{children:`templates/Default/devcraft/notifications/`}),(0,n.jsx)(t.br,{}),`
`,`в `,(0,n.jsx)(t.code,{children:`templates/ИмяТемы/devcraft/notifications/`}),(0,n.jsx)(t.br,{}),`
`,`и при необходимости `,(0,n.jsx)(t.code,{children:`templates/{тема}/devcraft/notifications/page.tpl`}),` (страница `,(0,n.jsx)(t.code,{children:`do=notifications`}),`).`,(0,n.jsx)(t.br,{}),`
`,`Fallback на `,(0,n.jsx)(t.code,{children:`Default`}),` срабатывает только если файла нет в текущем скине.`]}),`
`,(0,n.jsxs)(t.li,{children:[`В `,(0,n.jsx)(t.strong,{children:`Настройках`}),` включите типы подписок и каналы (сайт / почта / ЛС).`]}),`
`,(0,n.jsxs)(t.li,{children:[`В шапке темы добавьте `,(0,n.jsx)(t.code,{children:`focus=css`}),`, внизу — `,(0,n.jsx)(t.code,{children:`focus=js`}),` — см. `,(0,n.jsx)(t.a,{href:`./guides/subscribe_wall`,children:`вставка в тему`}),`.`]}),`
`]}),`
`,(0,n.jsxs)(t.p,{children:[`После установки `,(0,n.jsx)(t.code,{children:`notify*`}),` доступны глобально (bootstrap в `,(0,n.jsx)(t.code,{children:`engine/init.php`}),` / admin init). В своём хаке достаточно `,(0,n.jsx)(t.code,{children:`function_exists('notifySend')`}),` — отдельный include не нужен.`]}),`
`,(0,n.jsxs)(t.p,{children:[`Плагин регистрирует маршрут `,(0,n.jsx)(t.a,{href:`./guides/notifications_page`,children:`страницы уведомлений`}),`: `,(0,n.jsx)(t.code,{children:`/index.php?do=notifications`}),` и ЧПУ `,(0,n.jsx)(t.code,{children:`/notifications/`}),`.`]}),`
`,(0,n.jsxs)(t.p,{children:[`На сайте блоки не появляются сами: нужны include в шаблонах темы. Тексты уведомлений — `,(0,n.jsx)(t.code,{children:`.tpl`}),` в той же папке, см. `,(0,n.jsx)(t.a,{href:`./guides/scenario_templates`,children:`шаблоны и теги`}),`.`]}),`
`,(0,n.jsx)(t.h2,{id:`если-блока-нет`,children:`Если блока нет`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsx)(t.li,{children:`пользователь не авторизован;`}),`
`,(0,n.jsxs)(t.li,{children:[`у группы нет права на подписку / стену / ленту (`,(0,n.jsx)(t.a,{href:`./guides/permissions`,children:`права групп`}),`);`]}),`
`,(0,n.jsx)(t.li,{children:`тип подписки выключен в настройках модуля.`}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`см-также`,children:`См. также`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`./getting_started`,children:`Начало работы`})}),`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`./guides/notifications_page`,children:`Страница уведомлений`})}),`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`./guides/permissions`,children:`Права групп`})}),`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`./changelog`,children:`История изменений`})}),`
`]})]})}function l(e={}){let{wrapper:t}=e.components||{};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}function u(e,t){throw Error(`Expected `+(t?`component`:`object`)+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}export{a as _markdown,l as default,r as frontmatter,i as lastModified,o as structuredData,s as toc};