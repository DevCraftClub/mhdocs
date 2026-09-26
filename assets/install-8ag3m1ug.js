import{r as e}from"./rolldown-runtime-QTnfLwEv.js";import{t}from"./jsx-runtime-By8HlURe.js";var n=e(t()),r={title:`Установка`,description:`Как поставить Уведомления — статистика: ZIP, needplugin и право notifications_stats_view.`,version:`200.1.0`},i=new Date(1790409255e3),a=`

Общая схема ZIP: &#x2A;*[Установка плагинов](/instructions/install_instructions)**. Ниже — только этот модуль.

<Callout type="warn" title="Сначала ядро Уведомлений">
  Нужны [DevCraft Admin](/dev/dle/devcraft_admin/200.4.1/install&#x29; (**≥ 200.4.1**) и плагин **DLE Уведомления** (\`needplugin\`).
</Callout>

Обзор: [Начало работы](getting_started).

## Требования [#требования]

| Что             | Минимум              |
| --------------- | -------------------- |
| DataLife Engine | **20.0+**            |
| PHP             | **8.3+**             |
| DevCraft Admin  | **≥ 200.4.1**        |
| DLE Уведомления | установлен и включён |

## 1. Архив плагина [#1-архив-плагина]

1. Скачайте ZIP модуля и загрузите в **Плагины → Установить плагин**.
2. В \`install.xml\` указано \`needplugin=DLE Уведомления\`.
3. На сайте должен появиться каталог \`devcraft/src/modules/NotificationsStats/\`.

Собственных таблиц модуль **не** создаёт.

В каталоге \`devcraft/\`:

\`\`\`bash
composer dump-autoload
\`\`\`

## 2. Право доступа [#2-право-доступа]

На странице **DLE Уведомления → Права групп*&#x2A; выдайте группе право &#x2A;*\`notifications_stats_view\`** («Доступ к статистике уведомлений»). Без него пункт «Статистика» недоступен.

## 3. Первый запуск [#3-первый-запуск]

1. Откройте \`?mod=notifications&action=stats\`.
2. При необходимости задайте период на \`?mod=notifications&action=stats_settings\`. См. [Настройки](guides/settings).

## См. также [#см-также]

* [Начало работы](getting_started)
* [Сводка](guides/dashboard)
* [Настройки](guides/settings)
* [История изменений](changelog)
* [Дополнительные модули ядра](/dev/dle/notifications/200.1.0/guides/satellites)
`,o={contents:[{heading:void 0,content:`Общая схема ZIP: **Установка плагинов**. Ниже — только этот модуль.`},{heading:void 0,content:"Нужны DevCraft Admi&#x6E; (**≥ 200.4.1**) и плагин **DLE Уведомления** (`needplugin`)."},{heading:void 0,content:`Обзор: Начало работы.`},{heading:`требования`,content:`Что`},{heading:`требования`,content:`Минимум`},{heading:`требования`,content:`DataLife Engine`},{heading:`требования`,content:`**20.0+**`},{heading:`требования`,content:`PHP`},{heading:`требования`,content:`**8.3+**`},{heading:`требования`,content:`DevCraft Admin`},{heading:`требования`,content:`**≥ 200.4.1**`},{heading:`требования`,content:`DLE Уведомления`},{heading:`требования`,content:`установлен и включён`},{heading:`1-архив-плагина`,content:`Скачайте ZIP модуля и загрузите в **Плагины → Установить плагин**.`},{heading:`1-архив-плагина`,content:"В `install.xml` указано `needplugin=DLE Уведомления`."},{heading:`1-архив-плагина`,content:"На сайте должен появиться каталог `devcraft/src/modules/NotificationsStats/`."},{heading:`1-архив-плагина`,content:`Собственных таблиц модуль **не** создаёт.`},{heading:`1-архив-плагина`,content:"В каталоге `devcraft/`:"},{heading:`2-право-доступа`,content:"На странице **DLE Уведомления → Права групп*&#x2A; выдайте группе право &#x2A;*`notifications_stats_view`** («Доступ к статистике уведомлений»). Без него пункт «Статистика» недоступен."},{heading:`3-первый-запуск`,content:"Откройте `?mod=notifications&action=stats`."},{heading:`3-первый-запуск`,content:"При необходимости задайте период на `?mod=notifications&action=stats_settings`. См. Настройки."},{heading:`см-также`,content:`Начало работы`},{heading:`см-также`,content:`Сводка`},{heading:`см-также`,content:`Настройки`},{heading:`см-также`,content:`История изменений`},{heading:`см-также`,content:`Дополнительные модули ядра`}],headings:[{id:`требования`,content:`Требования`},{id:`1-архив-плагина`,content:`1\\. Архив плагина`},{id:`2-право-доступа`,content:`2\\. Право доступа`},{id:`3-первый-запуск`,content:`3\\. Первый запуск`},{id:`см-также`,content:`См. также`}]},s=[{depth:2,url:`#требования`,title:(0,n.jsx)(n.Fragment,{children:`Требования`})},{depth:2,url:`#1-архив-плагина`,title:(0,n.jsx)(n.Fragment,{children:`1. Архив плагина`})},{depth:2,url:`#2-право-доступа`,title:(0,n.jsx)(n.Fragment,{children:`2. Право доступа`})},{depth:2,url:`#3-первый-запуск`,title:(0,n.jsx)(n.Fragment,{children:`3. Первый запуск`})},{depth:2,url:`#см-также`,title:(0,n.jsx)(n.Fragment,{children:`См. также`})}];function c(e){let t={a:`a`,code:`code`,h2:`h2`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,span:`span`,strong:`strong`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,ul:`ul`,...e.components},{Callout:r}=t;return r||u(`Callout`,!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:[`Общая схема ZIP: `,(0,n.jsx)(t.strong,{children:(0,n.jsx)(t.a,{href:`/instructions/install_instructions`,children:`Установка плагинов`})}),`. Ниже — только этот модуль.`]}),`
`,(0,n.jsx)(r,{type:`warn`,title:`Сначала ядро Уведомлений`,children:(0,n.jsxs)(t.p,{children:[`Нужны `,(0,n.jsx)(t.a,{href:`/dev/dle/devcraft_admin/200.4.1/install`,children:`DevCraft Admin`}),` (`,(0,n.jsx)(t.strong,{children:`≥ 200.4.1`}),`) и плагин `,(0,n.jsx)(t.strong,{children:`DLE Уведомления`}),` (`,(0,n.jsx)(t.code,{children:`needplugin`}),`).`]})}),`
`,(0,n.jsxs)(t.p,{children:[`Обзор: `,(0,n.jsx)(t.a,{href:`getting_started`,children:`Начало работы`}),`.`]}),`
`,(0,n.jsx)(t.h2,{id:`требования`,children:`Требования`}),`
`,(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`Что`}),(0,n.jsx)(t.th,{children:`Минимум`})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`DataLife Engine`}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:`20.0+`})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`PHP`}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:`8.3+`})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`DevCraft Admin`}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:`≥ 200.4.1`})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`DLE Уведомления`}),(0,n.jsx)(t.td,{children:`установлен и включён`})]})]})]}),`
`,(0,n.jsx)(t.h2,{id:`1-архив-плагина`,children:`1. Архив плагина`}),`
`,(0,n.jsxs)(t.ol,{children:[`
`,(0,n.jsxs)(t.li,{children:[`Скачайте ZIP модуля и загрузите в `,(0,n.jsx)(t.strong,{children:`Плагины → Установить плагин`}),`.`]}),`
`,(0,n.jsxs)(t.li,{children:[`В `,(0,n.jsx)(t.code,{children:`install.xml`}),` указано `,(0,n.jsx)(t.code,{children:`needplugin=DLE Уведомления`}),`.`]}),`
`,(0,n.jsxs)(t.li,{children:[`На сайте должен появиться каталог `,(0,n.jsx)(t.code,{children:`devcraft/src/modules/NotificationsStats/`}),`.`]}),`
`]}),`
`,(0,n.jsxs)(t.p,{children:[`Собственных таблиц модуль `,(0,n.jsx)(t.strong,{children:`не`}),` создаёт.`]}),`
`,(0,n.jsxs)(t.p,{children:[`В каталоге `,(0,n.jsx)(t.code,{children:`devcraft/`}),`:`]}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="m 4,4 a 1,1 0 0 0 -0.7070312,0.2929687 1,1 0 0 0 0,1.4140625 L 8.5859375,11 3.2929688,16.292969 a 1,1 0 0 0 0,1.414062 1,1 0 0 0 1.4140624,0 l 5.9999998,-6 a 1.0001,1.0001 0 0 0 0,-1.414062 L 4.7070312,4.2929687 A 1,1 0 0 0 4,4 Z m 8,14 a 1,1 0 0 0 -1,1 1,1 0 0 0 1,1 h 8 a 1,1 0 0 0 1,-1 1,1 0 0 0 -1,-1 z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`composer`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:` dump-autoload`})]})})})}),`
`,(0,n.jsx)(t.h2,{id:`2-право-доступа`,children:`2. Право доступа`}),`
`,(0,n.jsxs)(t.p,{children:[`На странице `,(0,n.jsx)(t.strong,{children:`DLE Уведомления → Права групп`}),` выдайте группе право `,(0,n.jsx)(t.strong,{children:(0,n.jsx)(t.code,{children:`notifications_stats_view`})}),` («Доступ к статистике уведомлений»). Без него пункт «Статистика» недоступен.`]}),`
`,(0,n.jsx)(t.h2,{id:`3-первый-запуск`,children:`3. Первый запуск`}),`
`,(0,n.jsxs)(t.ol,{children:[`
`,(0,n.jsxs)(t.li,{children:[`Откройте `,(0,n.jsx)(t.code,{children:`?mod=notifications&action=stats`}),`.`]}),`
`,(0,n.jsxs)(t.li,{children:[`При необходимости задайте период на `,(0,n.jsx)(t.code,{children:`?mod=notifications&action=stats_settings`}),`. См. `,(0,n.jsx)(t.a,{href:`guides/settings`,children:`Настройки`}),`.`]}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`см-также`,children:`См. также`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`getting_started`,children:`Начало работы`})}),`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`guides/dashboard`,children:`Сводка`})}),`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`guides/settings`,children:`Настройки`})}),`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`changelog`,children:`История изменений`})}),`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`/dev/dle/notifications/200.1.0/guides/satellites`,children:`Дополнительные модули ядра`})}),`
`]})]})}function l(e={}){let{wrapper:t}=e.components||{};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}function u(e,t){throw Error(`Expected `+(t?`component`:`object`)+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}export{a as _markdown,l as default,r as frontmatter,i as lastModified,o as structuredData,s as toc};