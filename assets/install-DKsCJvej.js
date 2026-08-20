import{r as e}from"./rolldown-runtime-QTnfLwEv.js";import{t}from"./jsx-runtime-By8HlURe.js";var n=e(t()),r={title:`Установка - TagsAdd (Пользовательские теги)`,description:`Установка TagsAdd 200.3.1 для DLE 20.0 с DevCraft Admin.`},i=new Date(1787218238e3),a=`

<Callout type="warn" title="Порядок установки">
  Сначала установите и настройте [DevCraft Admin](../../devcraft_admin/install). Затем устанавливайте TagsAdd.
</Callout>

Обзор модуля: [Начало работы](getting_started).

### 1. Архив плагина [#1-архив-плагина]

1. Скачайте \`install.zip\` из [репозитория](https://github.com/DevCraftClub/tagsadd) (ветка \`releases/200.3.0\` / содержимое \`upload/\`) или со страницы загрузки.
2. Загрузите в **Панель управления DLE → Плагины → Установить плагин**.
3. Убедитесь, что появились:
   * \`engine/inc/tags_add.php\`
   * \`engine/modules/devcraft/tags_add.php\`
   * \`devcraft/src/modules/TagsAdd/\`
   * \`templates/Default/devcraft/tags_add/\` (или скопируйте в свою тему)

Legacy-пути \`engine/inc/maharder/\`, \`engine/modules/maharder/tagsadd.php\` и \`install.php\` в корне **не используются** и в пакет 200.x не входят.

### 2. Composer autoload [#2-composer-autoload]

В каталоге \`devcraft/\`:

\`\`\`bash
composer dump-autoload
\`\`\`

### 3. Первый запуск [#3-первый-запуск]

1. Откройте \`?mod=tags_add\` в админке DevCraft.
2. Таблица \`{prefix}_tags_add\` создаётся Cycle ORM по модели при первом обращении.
3. Сохраните [настройки](settings) (получатель PM, шаблоны ЛС, куда вставлять теги).
4. Подключите модуль в [теме](guides/theme).

## См. также [#см-также]

* [Настройки](settings)
* [Подключение в теме](guides/theme)
* [История изменений](changelog)
`,o={contents:[{heading:void 0,content:`Сначала установите и настройте DevCraft Admin. Затем устанавливайте TagsAdd.`},{heading:void 0,content:`Обзор модуля: Начало работы.`},{heading:`1-архив-плагина`,content:"Скачайте `install.zip` из репозитория (ветка `releases/200.3.0` / содержимое `upload/`) или со страницы загрузки."},{heading:`1-архив-плагина`,content:`Загрузите в **Панель управления DLE → Плагины → Установить плагин**.`},{heading:`1-архив-плагина`,content:`Убедитесь, что появились:`},{heading:`1-архив-плагина`,content:"`engine/inc/tags_add.php`"},{heading:`1-архив-плагина`,content:"`engine/modules/devcraft/tags_add.php`"},{heading:`1-архив-плагина`,content:"`devcraft/src/modules/TagsAdd/`"},{heading:`1-архив-плагина`,content:"`templates/Default/devcraft/tags_add/` (или скопируйте в свою тему)"},{heading:`1-архив-плагина`,content:"Legacy-пути `engine/inc/maharder/`, `engine/modules/maharder/tagsadd.php` и `install.php` в корне **не используются** и в пакет 200.x не входят."},{heading:`2-composer-autoload`,content:"В каталоге `devcraft/`:"},{heading:`3-первый-запуск`,content:"Откройте `?mod=tags_add` в админке DevCraft."},{heading:`3-первый-запуск`,content:"Таблица `{prefix}_tags_add` создаётся Cycle ORM по модели при первом обращении."},{heading:`3-первый-запуск`,content:`Сохраните настройки (получатель PM, шаблоны ЛС, куда вставлять теги).`},{heading:`3-первый-запуск`,content:`Подключите модуль в теме.`},{heading:`см-также`,content:`Настройки`},{heading:`см-также`,content:`Подключение в теме`},{heading:`см-также`,content:`История изменений`}],headings:[{id:`1-архив-плагина`,content:`1\\. Архив плагина`},{id:`2-composer-autoload`,content:`2\\. Composer autoload`},{id:`3-первый-запуск`,content:`3\\. Первый запуск`},{id:`см-также`,content:`См. также`}]},s=[{depth:3,url:`#1-архив-плагина`,title:(0,n.jsx)(n.Fragment,{children:`1. Архив плагина`})},{depth:3,url:`#2-composer-autoload`,title:(0,n.jsx)(n.Fragment,{children:`2. Composer autoload`})},{depth:3,url:`#3-первый-запуск`,title:(0,n.jsx)(n.Fragment,{children:`3. Первый запуск`})},{depth:2,url:`#см-также`,title:(0,n.jsx)(n.Fragment,{children:`См. также`})}];function c(e){let t={a:`a`,code:`code`,h2:`h2`,h3:`h3`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,span:`span`,strong:`strong`,ul:`ul`,...e.components},{Callout:r}=t;return r||u(`Callout`,!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r,{type:`warn`,title:`Порядок установки`,children:(0,n.jsxs)(t.p,{children:[`Сначала установите и настройте `,(0,n.jsx)(t.a,{href:`../../devcraft_admin/install`,children:`DevCraft Admin`}),`. Затем устанавливайте TagsAdd.`]})}),`
`,(0,n.jsxs)(t.p,{children:[`Обзор модуля: `,(0,n.jsx)(t.a,{href:`getting_started`,children:`Начало работы`}),`.`]}),`
`,(0,n.jsx)(t.h3,{id:`1-архив-плагина`,children:`1. Архив плагина`}),`
`,(0,n.jsxs)(t.ol,{children:[`
`,(0,n.jsxs)(t.li,{children:[`Скачайте `,(0,n.jsx)(t.code,{children:`install.zip`}),` из `,(0,n.jsx)(t.a,{href:`https://github.com/DevCraftClub/tagsadd`,children:`репозитория`}),` (ветка `,(0,n.jsx)(t.code,{children:`releases/200.3.0`}),` / содержимое `,(0,n.jsx)(t.code,{children:`upload/`}),`) или со страницы загрузки.`]}),`
`,(0,n.jsxs)(t.li,{children:[`Загрузите в `,(0,n.jsx)(t.strong,{children:`Панель управления DLE → Плагины → Установить плагин`}),`.`]}),`
`,(0,n.jsxs)(t.li,{children:[`Убедитесь, что появились:`,`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.code,{children:`engine/inc/tags_add.php`})}),`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.code,{children:`engine/modules/devcraft/tags_add.php`})}),`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.code,{children:`devcraft/src/modules/TagsAdd/`})}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`templates/Default/devcraft/tags_add/`}),` (или скопируйте в свою тему)`]}),`
`]}),`
`]}),`
`]}),`
`,(0,n.jsxs)(t.p,{children:[`Legacy-пути `,(0,n.jsx)(t.code,{children:`engine/inc/maharder/`}),`, `,(0,n.jsx)(t.code,{children:`engine/modules/maharder/tagsadd.php`}),` и `,(0,n.jsx)(t.code,{children:`install.php`}),` в корне `,(0,n.jsx)(t.strong,{children:`не используются`}),` и в пакет 200.x не входят.`]}),`
`,(0,n.jsx)(t.h3,{id:`2-composer-autoload`,children:`2. Composer autoload`}),`
`,(0,n.jsxs)(t.p,{children:[`В каталоге `,(0,n.jsx)(t.code,{children:`devcraft/`}),`:`]}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="m 4,4 a 1,1 0 0 0 -0.7070312,0.2929687 1,1 0 0 0 0,1.4140625 L 8.5859375,11 3.2929688,16.292969 a 1,1 0 0 0 0,1.414062 1,1 0 0 0 1.4140624,0 l 5.9999998,-6 a 1.0001,1.0001 0 0 0 0,-1.414062 L 4.7070312,4.2929687 A 1,1 0 0 0 4,4 Z m 8,14 a 1,1 0 0 0 -1,1 1,1 0 0 0 1,1 h 8 a 1,1 0 0 0 1,-1 1,1 0 0 0 -1,-1 z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`composer`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:` dump-autoload`})]})})})}),`
`,(0,n.jsx)(t.h3,{id:`3-первый-запуск`,children:`3. Первый запуск`}),`
`,(0,n.jsxs)(t.ol,{children:[`
`,(0,n.jsxs)(t.li,{children:[`Откройте `,(0,n.jsx)(t.code,{children:`?mod=tags_add`}),` в админке DevCraft.`]}),`
`,(0,n.jsxs)(t.li,{children:[`Таблица `,(0,n.jsx)(t.code,{children:`{prefix}_tags_add`}),` создаётся Cycle ORM по модели при первом обращении.`]}),`
`,(0,n.jsxs)(t.li,{children:[`Сохраните `,(0,n.jsx)(t.a,{href:`settings`,children:`настройки`}),` (получатель PM, шаблоны ЛС, куда вставлять теги).`]}),`
`,(0,n.jsxs)(t.li,{children:[`Подключите модуль в `,(0,n.jsx)(t.a,{href:`guides/theme`,children:`теме`}),`.`]}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`см-также`,children:`См. также`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`settings`,children:`Настройки`})}),`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`guides/theme`,children:`Подключение в теме`})}),`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`changelog`,children:`История изменений`})}),`
`]})]})}function l(e={}){let{wrapper:t}=e.components||{};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}function u(e,t){throw Error(`Expected `+(t?`component`:`object`)+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}export{a as _markdown,l as default,r as frontmatter,i as lastModified,o as structuredData,s as toc};