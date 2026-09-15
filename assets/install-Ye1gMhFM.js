import{r as e}from"./rolldown-runtime-QTnfLwEv.js";import{t}from"./jsx-runtime-By8HlURe.js";var n=e(t()),r={title:`Установка`,description:`Как поставить UserLists 200.1.0: файлы, SQL-регистрация, Composer, первый запуск.`},i=new Date(1789477657e3),a=`

<Callout type="warn" title="Порядок установки">
  Сначала поставьте и настройте [DevCraft Admin](../../devcraft_admin/install). Потом UserLists.
</Callout>

Обзор: [Начало работы](getting_started).

### 1. Файлы пакета [#1-файлы-пакета]

Скопируйте содержимое \`upload/\` из репозитория модуля на сайт (или разверните зеркало из \`dle200test\`):

* \`engine/inc/user_lists.php\`
* \`engine/modules/devcraft/user_lists.php\`
* \`engine/modules/devcraft/user_lists_page.php\`
* \`devcraft/src/modules/UserLists/\`
* \`devcraft/config/user_lists.json\`
* \`devcraft/locales/…/user_lists.xliff\`
* \`templates/Default/devcraft/user_lists/\` (скопируйте в свою тему при необходимости)

### 2. Регистрация в менеджере плагинов [#2-регистрация-в-менеджере-плагинов]

В этом релизе **нет** \`install.xml\`. Регистрация — SQL \`register_plugin.sql\` из корня пакета:

1. Замените \`{prefix}\` на префикс таблиц (часто \`dle\`).
2. Выполните скрипт в БД.
3. В менеджере плагинов появится **UserLists** с \`needplugin = DevCraft Admin\`.

Типичная ошибка: забыли \`{prefix}\` → INSERT падает, пункта \`?mod=user_lists\` нет.

### 3. Composer autoload [#3-composer-autoload]

В каталоге \`devcraft/\`:

\`\`\`bash
composer dump-autoload
\`\`\`

Без этого классы \`DevCraft\\Modules\\UserLists\\…\` не подхватятся.

### 4. Первый запуск [#4-первый-запуск]

1. Откройте \`?mod=user_lists\` в админке.
2. Таблицы \`dc_user_lists*\` поднимает Cycle ORM / миграция модуля.
3. Сиды админ-списков создаются при первом заходе.
4. Настройте [права групп](guides/lists-and-visibility) и настройки (гости, кнопка, bad\\_words).
5. Подключите includes в [теме](guides/theme).

## См. также [#см-также]

* [Подключение в теме](guides/theme)
* [Списки и видимость](guides/lists-and-visibility)
* [История изменений](changelog)
`,o={contents:[{heading:void 0,content:`Сначала поставьте и настройте DevCraft Admin. Потом UserLists.`},{heading:void 0,content:`Обзор: Начало работы.`},{heading:`1-файлы-пакета`,content:"Скопируйте содержимое `upload/` из репозитория модуля на сайт (или разверните зеркало из `dle200test`):"},{heading:`1-файлы-пакета`,content:"`engine/inc/user_lists.php`"},{heading:`1-файлы-пакета`,content:"`engine/modules/devcraft/user_lists.php`"},{heading:`1-файлы-пакета`,content:"`engine/modules/devcraft/user_lists_page.php`"},{heading:`1-файлы-пакета`,content:"`devcraft/src/modules/UserLists/`"},{heading:`1-файлы-пакета`,content:"`devcraft/config/user_lists.json`"},{heading:`1-файлы-пакета`,content:"`devcraft/locales/…/user_lists.xliff`"},{heading:`1-файлы-пакета`,content:"`templates/Default/devcraft/user_lists/` (скопируйте в свою тему при необходимости)"},{heading:`2-регистрация-в-менеджере-плагинов`,content:"В этом релизе **нет** `install.xml`. Регистрация — SQL `register_plugin.sql` из корня пакета:"},{heading:`2-регистрация-в-менеджере-плагинов`,content:"Замените `{prefix}` на префикс таблиц (часто `dle`)."},{heading:`2-регистрация-в-менеджере-плагинов`,content:`Выполните скрипт в БД.`},{heading:`2-регистрация-в-менеджере-плагинов`,content:"В менеджере плагинов появится **UserLists** с `needplugin = DevCraft Admin`."},{heading:`2-регистрация-в-менеджере-плагинов`,content:"Типичная ошибка: забыли `{prefix}` → INSERT падает, пункта `?mod=user_lists` нет."},{heading:`3-composer-autoload`,content:"В каталоге `devcraft/`:"},{heading:`3-composer-autoload`,content:"Без этого классы `DevCraft\\Modules\\UserLists\\…` не подхватятся."},{heading:`4-первый-запуск`,content:"Откройте `?mod=user_lists` в админке."},{heading:`4-первый-запуск`,content:"Таблицы `dc_user_lists*` поднимает Cycle ORM / миграция модуля."},{heading:`4-первый-запуск`,content:`Сиды админ-списков создаются при первом заходе.`},{heading:`4-первый-запуск`,content:`Настройте права групп и настройки (гости, кнопка, bad\\_words).`},{heading:`4-первый-запуск`,content:`Подключите includes в теме.`},{heading:`см-также`,content:`Подключение в теме`},{heading:`см-также`,content:`Списки и видимость`},{heading:`см-также`,content:`История изменений`}],headings:[{id:`1-файлы-пакета`,content:`1\\. Файлы пакета`},{id:`2-регистрация-в-менеджере-плагинов`,content:`2\\. Регистрация в менеджере плагинов`},{id:`3-composer-autoload`,content:`3\\. Composer autoload`},{id:`4-первый-запуск`,content:`4\\. Первый запуск`},{id:`см-также`,content:`См. также`}]},s=[{depth:3,url:`#1-файлы-пакета`,title:(0,n.jsx)(n.Fragment,{children:`1. Файлы пакета`})},{depth:3,url:`#2-регистрация-в-менеджере-плагинов`,title:(0,n.jsx)(n.Fragment,{children:`2. Регистрация в менеджере плагинов`})},{depth:3,url:`#3-composer-autoload`,title:(0,n.jsx)(n.Fragment,{children:`3. Composer autoload`})},{depth:3,url:`#4-первый-запуск`,title:(0,n.jsx)(n.Fragment,{children:`4. Первый запуск`})},{depth:2,url:`#см-также`,title:(0,n.jsx)(n.Fragment,{children:`См. также`})}];function c(e){let t={a:`a`,code:`code`,h2:`h2`,h3:`h3`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,span:`span`,strong:`strong`,ul:`ul`,...e.components},{Callout:r}=t;return r||u(`Callout`,!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r,{type:`warn`,title:`Порядок установки`,children:(0,n.jsxs)(t.p,{children:[`Сначала поставьте и настройте `,(0,n.jsx)(t.a,{href:`../../devcraft_admin/install`,children:`DevCraft Admin`}),`. Потом UserLists.`]})}),`
`,(0,n.jsxs)(t.p,{children:[`Обзор: `,(0,n.jsx)(t.a,{href:`getting_started`,children:`Начало работы`}),`.`]}),`
`,(0,n.jsx)(t.h3,{id:`1-файлы-пакета`,children:`1. Файлы пакета`}),`
`,(0,n.jsxs)(t.p,{children:[`Скопируйте содержимое `,(0,n.jsx)(t.code,{children:`upload/`}),` из репозитория модуля на сайт (или разверните зеркало из `,(0,n.jsx)(t.code,{children:`dle200test`}),`):`]}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.code,{children:`engine/inc/user_lists.php`})}),`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.code,{children:`engine/modules/devcraft/user_lists.php`})}),`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.code,{children:`engine/modules/devcraft/user_lists_page.php`})}),`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.code,{children:`devcraft/src/modules/UserLists/`})}),`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.code,{children:`devcraft/config/user_lists.json`})}),`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.code,{children:`devcraft/locales/…/user_lists.xliff`})}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`templates/Default/devcraft/user_lists/`}),` (скопируйте в свою тему при необходимости)`]}),`
`]}),`
`,(0,n.jsx)(t.h3,{id:`2-регистрация-в-менеджере-плагинов`,children:`2. Регистрация в менеджере плагинов`}),`
`,(0,n.jsxs)(t.p,{children:[`В этом релизе `,(0,n.jsx)(t.strong,{children:`нет`}),` `,(0,n.jsx)(t.code,{children:`install.xml`}),`. Регистрация — SQL `,(0,n.jsx)(t.code,{children:`register_plugin.sql`}),` из корня пакета:`]}),`
`,(0,n.jsxs)(t.ol,{children:[`
`,(0,n.jsxs)(t.li,{children:[`Замените `,(0,n.jsx)(t.code,{children:`{prefix}`}),` на префикс таблиц (часто `,(0,n.jsx)(t.code,{children:`dle`}),`).`]}),`
`,(0,n.jsx)(t.li,{children:`Выполните скрипт в БД.`}),`
`,(0,n.jsxs)(t.li,{children:[`В менеджере плагинов появится `,(0,n.jsx)(t.strong,{children:`UserLists`}),` с `,(0,n.jsx)(t.code,{children:`needplugin = DevCraft Admin`}),`.`]}),`
`]}),`
`,(0,n.jsxs)(t.p,{children:[`Типичная ошибка: забыли `,(0,n.jsx)(t.code,{children:`{prefix}`}),` → INSERT падает, пункта `,(0,n.jsx)(t.code,{children:`?mod=user_lists`}),` нет.`]}),`
`,(0,n.jsx)(t.h3,{id:`3-composer-autoload`,children:`3. Composer autoload`}),`
`,(0,n.jsxs)(t.p,{children:[`В каталоге `,(0,n.jsx)(t.code,{children:`devcraft/`}),`:`]}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="m 4,4 a 1,1 0 0 0 -0.7070312,0.2929687 1,1 0 0 0 0,1.4140625 L 8.5859375,11 3.2929688,16.292969 a 1,1 0 0 0 0,1.414062 1,1 0 0 0 1.4140624,0 l 5.9999998,-6 a 1.0001,1.0001 0 0 0 0,-1.414062 L 4.7070312,4.2929687 A 1,1 0 0 0 4,4 Z m 8,14 a 1,1 0 0 0 -1,1 1,1 0 0 0 1,1 h 8 a 1,1 0 0 0 1,-1 1,1 0 0 0 -1,-1 z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`composer`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:` dump-autoload`})]})})})}),`
`,(0,n.jsxs)(t.p,{children:[`Без этого классы `,(0,n.jsx)(t.code,{children:`DevCraft\\Modules\\UserLists\\…`}),` не подхватятся.`]}),`
`,(0,n.jsx)(t.h3,{id:`4-первый-запуск`,children:`4. Первый запуск`}),`
`,(0,n.jsxs)(t.ol,{children:[`
`,(0,n.jsxs)(t.li,{children:[`Откройте `,(0,n.jsx)(t.code,{children:`?mod=user_lists`}),` в админке.`]}),`
`,(0,n.jsxs)(t.li,{children:[`Таблицы `,(0,n.jsx)(t.code,{children:`dc_user_lists*`}),` поднимает Cycle ORM / миграция модуля.`]}),`
`,(0,n.jsx)(t.li,{children:`Сиды админ-списков создаются при первом заходе.`}),`
`,(0,n.jsxs)(t.li,{children:[`Настройте `,(0,n.jsx)(t.a,{href:`guides/lists-and-visibility`,children:`права групп`}),` и настройки (гости, кнопка, bad_words).`]}),`
`,(0,n.jsxs)(t.li,{children:[`Подключите includes в `,(0,n.jsx)(t.a,{href:`guides/theme`,children:`теме`}),`.`]}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`см-также`,children:`См. также`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`guides/theme`,children:`Подключение в теме`})}),`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`guides/lists-and-visibility`,children:`Списки и видимость`})}),`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`changelog`,children:`История изменений`})}),`
`]})]})}function l(e={}){let{wrapper:t}=e.components||{};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}function u(e,t){throw Error(`Expected `+(t?`component`:`object`)+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}export{a as _markdown,l as default,r as frontmatter,i as lastModified,o as structuredData,s as toc};