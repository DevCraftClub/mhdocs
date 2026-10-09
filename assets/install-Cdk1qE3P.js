import{r as e}from"./rolldown-runtime-QTnfLwEv.js";import{t}from"./jsx-runtime-By8HlURe.js";var n=e(t()),r={title:`Установка`,description:`Как поставить DLE Уведомления после DevCraft Admin: ZIP, Composer, первый запуск.`,version:`200.1.0`},i=new Date(1791534354e3),a=`

Как поставить ZIP через менеджер плагинов DLE — в общей инструкции: &#x2A;*[Установка плагинов](/instructions/install_instructions)**. Ниже — только шаги этого модуля.

<Callout type="warn" title="Сначала DevCraft Admin">
  Установите и включите [DevCraft Admin](/dev/dle/devcraft_admin/200.4.1/install&#x29; (**≥ 200.4.1**), затем Уведомления. Без оболочки модуль не поднимется как задумано.
</Callout>

Обзор: [Начало работы](getting_started).

## Требования [#требования]

| Что             | Минимум       |
| --------------- | ------------- |
| DataLife Engine | **20.0+**     |
| PHP             | **8.3+**      |
| DevCraft Admin  | **≥ 200.4.1** |

## 1. Архив плагина [#1-архив-плагина]

1. Скачайте ZIP из [репозитория](https://github.com/DevCraftClub/DLE-Notifications) или [соберите архив](/instructions/install_instructions#три-способа-поставить-плагин): \`./create_install_archive.sh\`.
2. [Загрузите в Панель управления DLE → Плагины → Установить плагин](/instructions/install_instructions#три-способа-поставить-плагин).
3. Убедитесь, что на сайте есть:
   * \`engine/inc/notifications.php\`
   * \`devcraft/src/modules/Notifications/\` (включая \`Controller/show_notifications.php\`)
   * \`templates/Default/devcraft/notifications/\` (при другой теме — скопируйте каталог в свой скин)

<Callout type="warn" title="Шаблоны темы — вручную">
  Менеджер плагинов DLE **не меняет** файлы в \`templates/\`. Колокольчик в шапке Air, символ \`#i-bell\` и другие вставки делаются руками по [Куда вставить в тему](guides/template_includes).
</Callout>

## 2. Composer [#2-composer]

[В каталоге \`devcraft/\`](/instructions/composer#установка-зависимостей):

\`\`\`bash
composer dump-autoload
\`\`\`

То же действие есть в панели DevCraft Admin: на главной, в блоке Composer, кнопка **dump-autoload**.

## 3. Первый запуск [#3-первый-запуск]

1. Откройте \`?mod=notifications\` в админке DevCraft.
2. Таблицы создаются при первом обращении к модулю.
3. В настройках включите типы подписок и каналы (сайт / почта / личные сообщения).
4. Подключите блоки в [теме](guides/template_includes) (менеджер плагинов **не** правит \`templates/\` — колокольчик и \`#i-bell\` для Air вручную). В \`main.tpl\` нужны теги \`{devcraft}\` или \`{devcraft-header}\` / \`{devcraft-scripts}\`.

После установки функции \`notify*\` доступны на обычных страницах сайта. В своём хаке достаточно \`function_exists('notifySend')\` — отдельный \`include\` не нужен.

Плагин регистрирует страницу списка: \`/index.php?do=notifications\` и, если включены человекопонятные адреса DLE, \`/notifications/\`. См. [Страница уведомлений](guides/notifications_page).

На сайте колокольчик и кнопки сами не появляются: нужны вставки в шаблоны темы ([Куда вставить в тему](guides/template_includes)). Тексты сообщений — \`.tpl\` в той же папке, см. [Шаблоны и теги](guides/scenario_templates).

Свой канал доставки: [Свой канал](guides/custom_channel).

## Если блока нет [#если-блока-нет]

* человек не вошёл на сайт;
* у группы нет права на подписку / стену / ленту ([права групп](guides/permissions));
* тип подписки выключен в настройках модуля.

## См. также [#см-также]

* [Начало работы](getting_started)
* [Страница уведомлений](guides/notifications_page)
* [Права групп](guides/permissions)
* [История изменений](changelog)
`,o={contents:[{heading:void 0,content:`Как поставить ZIP через менеджер плагинов DLE — в общей инструкции: **Установка плагинов**. Ниже — только шаги этого модуля.`},{heading:void 0,content:`Установите и включите DevCraft Admi&#x6E; (**≥ 200.4.1**), затем Уведомления. Без оболочки модуль не поднимется как задумано.`},{heading:void 0,content:`Обзор: Начало работы.`},{heading:`требования`,content:`Что`},{heading:`требования`,content:`Минимум`},{heading:`требования`,content:`DataLife Engine`},{heading:`требования`,content:`**20.0+**`},{heading:`требования`,content:`PHP`},{heading:`требования`,content:`**8.3+**`},{heading:`требования`,content:`DevCraft Admin`},{heading:`требования`,content:`**≥ 200.4.1**`},{heading:`1-архив-плагина`,content:"Скачайте ZIP из репозитория или соберите архив: `./create_install_archive.sh`."},{heading:`1-архив-плагина`,content:`Загрузите в Панель управления DLE → Плагины → Установить плагин.`},{heading:`1-архив-плагина`,content:`Убедитесь, что на сайте есть:`},{heading:`1-архив-плагина`,content:"`engine/inc/notifications.php`"},{heading:`1-архив-плагина`,content:"`devcraft/src/modules/Notifications/` (включая `Controller/show_notifications.php`)"},{heading:`1-архив-плагина`,content:"`templates/Default/devcraft/notifications/` (при другой теме — скопируйте каталог в свой скин)"},{heading:`1-архив-плагина`,content:"Менеджер плагинов DLE **не меняет** файлы в `templates/`. Колокольчик в шапке Air, символ `#i-bell` и другие вставки делаются руками по Куда вставить в тему."},{heading:`2-composer`,content:"В каталоге `devcraft/`:"},{heading:`2-composer`,content:`То же действие есть в панели DevCraft Admin: на главной, в блоке Composer, кнопка **dump-autoload**.`},{heading:`3-первый-запуск`,content:"Откройте `?mod=notifications` в админке DevCraft."},{heading:`3-первый-запуск`,content:`Таблицы создаются при первом обращении к модулю.`},{heading:`3-первый-запуск`,content:`В настройках включите типы подписок и каналы (сайт / почта / личные сообщения).`},{heading:`3-первый-запуск`,content:"Подключите блоки в теме (менеджер плагинов **не** правит `templates/` — колокольчик и `#i-bell` для Air вручную). В `main.tpl` нужны теги `{devcraft}` или `{devcraft-header}` / `{devcraft-scripts}`."},{heading:`3-первый-запуск`,content:"После установки функции `notify*` доступны на обычных страницах сайта. В своём хаке достаточно `function_exists('notifySend')` — отдельный `include` не нужен."},{heading:`3-первый-запуск`,content:"Плагин регистрирует страницу списка: `/index.php?do=notifications` и, если включены человекопонятные адреса DLE, `/notifications/`. См. Страница уведомлений."},{heading:`3-первый-запуск`,content:"На сайте колокольчик и кнопки сами не появляются: нужны вставки в шаблоны темы (Куда вставить в тему). Тексты сообщений — `.tpl` в той же папке, см. Шаблоны и теги."},{heading:`3-первый-запуск`,content:`Свой канал доставки: Свой канал.`},{heading:`если-блока-нет`,content:`человек не вошёл на сайт;`},{heading:`если-блока-нет`,content:`у группы нет права на подписку / стену / ленту (права групп);`},{heading:`если-блока-нет`,content:`тип подписки выключен в настройках модуля.`},{heading:`см-также`,content:`Начало работы`},{heading:`см-также`,content:`Страница уведомлений`},{heading:`см-также`,content:`Права групп`},{heading:`см-также`,content:`История изменений`}],headings:[{id:`требования`,content:`Требования`},{id:`1-архив-плагина`,content:`1\\. Архив плагина`},{id:`2-composer`,content:`2\\. Composer`},{id:`3-первый-запуск`,content:`3\\. Первый запуск`},{id:`если-блока-нет`,content:`Если блока нет`},{id:`см-также`,content:`См. также`}]},s=[{depth:2,url:`#требования`,title:(0,n.jsx)(n.Fragment,{children:`Требования`})},{depth:2,url:`#1-архив-плагина`,title:(0,n.jsx)(n.Fragment,{children:`1. Архив плагина`})},{depth:2,url:`#2-composer`,title:(0,n.jsx)(n.Fragment,{children:`2. Composer`})},{depth:2,url:`#3-первый-запуск`,title:(0,n.jsx)(n.Fragment,{children:`3. Первый запуск`})},{depth:2,url:`#если-блока-нет`,title:(0,n.jsx)(n.Fragment,{children:`Если блока нет`})},{depth:2,url:`#см-также`,title:(0,n.jsx)(n.Fragment,{children:`См. также`})}];function c(e){let t={a:`a`,code:`code`,h2:`h2`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,span:`span`,strong:`strong`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,ul:`ul`,...e.components},{Callout:r}=t;return r||u(`Callout`,!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:[`Как поставить ZIP через менеджер плагинов DLE — в общей инструкции: `,(0,n.jsx)(t.strong,{children:(0,n.jsx)(t.a,{href:`/instructions/install_instructions`,children:`Установка плагинов`})}),`. Ниже — только шаги этого модуля.`]}),`
`,(0,n.jsx)(r,{type:`warn`,title:`Сначала DevCraft Admin`,children:(0,n.jsxs)(t.p,{children:[`Установите и включите `,(0,n.jsx)(t.a,{href:`/dev/dle/devcraft_admin/200.4.1/install`,children:`DevCraft Admin`}),` (`,(0,n.jsx)(t.strong,{children:`≥ 200.4.1`}),`), затем Уведомления. Без оболочки модуль не поднимется как задумано.`]})}),`
`,(0,n.jsxs)(t.p,{children:[`Обзор: `,(0,n.jsx)(t.a,{href:`getting_started`,children:`Начало работы`}),`.`]}),`
`,(0,n.jsx)(t.h2,{id:`требования`,children:`Требования`}),`
`,(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`Что`}),(0,n.jsx)(t.th,{children:`Минимум`})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`DataLife Engine`}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:`20.0+`})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`PHP`}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:`8.3+`})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`DevCraft Admin`}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:`≥ 200.4.1`})})]})]})]}),`
`,(0,n.jsx)(t.h2,{id:`1-архив-плагина`,children:`1. Архив плагина`}),`
`,(0,n.jsxs)(t.ol,{children:[`
`,(0,n.jsxs)(t.li,{children:[`Скачайте ZIP из `,(0,n.jsx)(t.a,{href:`https://github.com/DevCraftClub/DLE-Notifications`,children:`репозитория`}),` или `,(0,n.jsx)(t.a,{href:`/instructions/install_instructions#%D1%82%D1%80%D0%B8-%D1%81%D0%BF%D0%BE%D1%81%D0%BE%D0%B1%D0%B0-%D0%BF%D0%BE%D1%81%D1%82%D0%B0%D0%B2%D0%B8%D1%82%D1%8C-%D0%BF%D0%BB%D0%B0%D0%B3%D0%B8%D0%BD`,children:`соберите архив`}),`: `,(0,n.jsx)(t.code,{children:`./create_install_archive.sh`}),`.`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:`/instructions/install_instructions#%D1%82%D1%80%D0%B8-%D1%81%D0%BF%D0%BE%D1%81%D0%BE%D0%B1%D0%B0-%D0%BF%D0%BE%D1%81%D1%82%D0%B0%D0%B2%D0%B8%D1%82%D1%8C-%D0%BF%D0%BB%D0%B0%D0%B3%D0%B8%D0%BD`,children:`Загрузите в Панель управления DLE → Плагины → Установить плагин`}),`.`]}),`
`,(0,n.jsxs)(t.li,{children:[`Убедитесь, что на сайте есть:`,`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.code,{children:`engine/inc/notifications.php`})}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`devcraft/src/modules/Notifications/`}),` (включая `,(0,n.jsx)(t.code,{children:`Controller/show_notifications.php`}),`)`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`templates/Default/devcraft/notifications/`}),` (при другой теме — скопируйте каталог в свой скин)`]}),`
`]}),`
`]}),`
`]}),`
`,(0,n.jsx)(r,{type:`warn`,title:`Шаблоны темы — вручную`,children:(0,n.jsxs)(t.p,{children:[`Менеджер плагинов DLE `,(0,n.jsx)(t.strong,{children:`не меняет`}),` файлы в `,(0,n.jsx)(t.code,{children:`templates/`}),`. Колокольчик в шапке Air, символ `,(0,n.jsx)(t.code,{children:`#i-bell`}),` и другие вставки делаются руками по `,(0,n.jsx)(t.a,{href:`guides/template_includes`,children:`Куда вставить в тему`}),`.`]})}),`
`,(0,n.jsx)(t.h2,{id:`2-composer`,children:`2. Composer`}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsxs)(t.a,{href:`/instructions/composer#%D1%83%D1%81%D1%82%D0%B0%D0%BD%D0%BE%D0%B2%D0%BA%D0%B0-%D0%B7%D0%B0%D0%B2%D0%B8%D1%81%D0%B8%D0%BC%D0%BE%D1%81%D1%82%D0%B5%D0%B9`,children:[`В каталоге `,(0,n.jsx)(t.code,{children:`devcraft/`})]}),`:`]}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="m 4,4 a 1,1 0 0 0 -0.7070312,0.2929687 1,1 0 0 0 0,1.4140625 L 8.5859375,11 3.2929688,16.292969 a 1,1 0 0 0 0,1.414062 1,1 0 0 0 1.4140624,0 l 5.9999998,-6 a 1.0001,1.0001 0 0 0 0,-1.414062 L 4.7070312,4.2929687 A 1,1 0 0 0 4,4 Z m 8,14 a 1,1 0 0 0 -1,1 1,1 0 0 0 1,1 h 8 a 1,1 0 0 0 1,-1 1,1 0 0 0 -1,-1 z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`composer`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:` dump-autoload`})]})})})}),`
`,(0,n.jsxs)(t.p,{children:[`То же действие есть в панели DevCraft Admin: на главной, в блоке Composer, кнопка `,(0,n.jsx)(t.strong,{children:`dump-autoload`}),`.`]}),`
`,(0,n.jsx)(t.h2,{id:`3-первый-запуск`,children:`3. Первый запуск`}),`
`,(0,n.jsxs)(t.ol,{children:[`
`,(0,n.jsxs)(t.li,{children:[`Откройте `,(0,n.jsx)(t.code,{children:`?mod=notifications`}),` в админке DevCraft.`]}),`
`,(0,n.jsx)(t.li,{children:`Таблицы создаются при первом обращении к модулю.`}),`
`,(0,n.jsx)(t.li,{children:`В настройках включите типы подписок и каналы (сайт / почта / личные сообщения).`}),`
`,(0,n.jsxs)(t.li,{children:[`Подключите блоки в `,(0,n.jsx)(t.a,{href:`guides/template_includes`,children:`теме`}),` (менеджер плагинов `,(0,n.jsx)(t.strong,{children:`не`}),` правит `,(0,n.jsx)(t.code,{children:`templates/`}),` — колокольчик и `,(0,n.jsx)(t.code,{children:`#i-bell`}),` для Air вручную). В `,(0,n.jsx)(t.code,{children:`main.tpl`}),` нужны теги `,(0,n.jsx)(t.code,{children:`{devcraft}`}),` или `,(0,n.jsx)(t.code,{children:`{devcraft-header}`}),` / `,(0,n.jsx)(t.code,{children:`{devcraft-scripts}`}),`.`]}),`
`]}),`
`,(0,n.jsxs)(t.p,{children:[`После установки функции `,(0,n.jsx)(t.code,{children:`notify*`}),` доступны на обычных страницах сайта. В своём хаке достаточно `,(0,n.jsx)(t.code,{children:`function_exists('notifySend')`}),` — отдельный `,(0,n.jsx)(t.code,{children:`include`}),` не нужен.`]}),`
`,(0,n.jsxs)(t.p,{children:[`Плагин регистрирует страницу списка: `,(0,n.jsx)(t.code,{children:`/index.php?do=notifications`}),` и, если включены человекопонятные адреса DLE, `,(0,n.jsx)(t.code,{children:`/notifications/`}),`. См. `,(0,n.jsx)(t.a,{href:`guides/notifications_page`,children:`Страница уведомлений`}),`.`]}),`
`,(0,n.jsxs)(t.p,{children:[`На сайте колокольчик и кнопки сами не появляются: нужны вставки в шаблоны темы (`,(0,n.jsx)(t.a,{href:`guides/template_includes`,children:`Куда вставить в тему`}),`). Тексты сообщений — `,(0,n.jsx)(t.code,{children:`.tpl`}),` в той же папке, см. `,(0,n.jsx)(t.a,{href:`guides/scenario_templates`,children:`Шаблоны и теги`}),`.`]}),`
`,(0,n.jsxs)(t.p,{children:[`Свой канал доставки: `,(0,n.jsx)(t.a,{href:`guides/custom_channel`,children:`Свой канал`}),`.`]}),`
`,(0,n.jsx)(t.h2,{id:`если-блока-нет`,children:`Если блока нет`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsx)(t.li,{children:`человек не вошёл на сайт;`}),`
`,(0,n.jsxs)(t.li,{children:[`у группы нет права на подписку / стену / ленту (`,(0,n.jsx)(t.a,{href:`guides/permissions`,children:`права групп`}),`);`]}),`
`,(0,n.jsx)(t.li,{children:`тип подписки выключен в настройках модуля.`}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`см-также`,children:`См. также`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`getting_started`,children:`Начало работы`})}),`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`guides/notifications_page`,children:`Страница уведомлений`})}),`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`guides/permissions`,children:`Права групп`})}),`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`changelog`,children:`История изменений`})}),`
`]})]})}function l(e={}){let{wrapper:t}=e.components||{};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}function u(e,t){throw Error(`Expected `+(t?`component`:`object`)+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}export{a as _markdown,l as default,r as frontmatter,i as lastModified,o as structuredData,s as toc};