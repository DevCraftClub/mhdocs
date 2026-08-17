import{r as e}from"./rolldown-runtime-QTnfLwEv.js";import{t}from"./jsx-runtime-By8HlURe.js";var n=e(t()),r={title:`Установка`,description:`Установка DB Manager 200.1.3 для DLE 20.0 с DevCraft Admin.`},i=new Date(1786951824e3),a=`

<Callout type="warn" title="Порядок установки">
  Сначала установите и настройте [DevCraft Admin](../../devcraft_admin/install) (включая \`composer install\` в \`devcraft/\`). Затем устанавливайте DB Manager.
</Callout>

Обзор модуля: [Начало работы](getting_started).

### 1. Архив плагина [#1-архив-плагина]

1. Скачайте \`install.zip\` из [репозитория](https://github.com/DevCraftClub/DB-Manager) или релиза.
2. Загрузите в **Панель управления DLE → Плагины → Установить плагин**.
3. Убедитесь, что появились:
   * \`engine/inc/db_manager.php\`
   * \`devcraft/src/modules/DbManager/\`
   * \`devcraft/locales/*/db_manager.xliff\`

### 2. Composer autoload [#2-composer-autoload]

На сервере в каталоге \`devcraft/\`:

\`\`\`bash
composer dump-autoload
\`\`\`

Без этого шага классы модуля \`DevCraft\\Modules\\DbManager\\\` не будут найдены.

### 3. Первый запуск [#3-первый-запуск]

1. Откройте в админке DLE: **DB Manager** (\`?mod=db_manager\`).
2. Перейдите в **Настройки** и сохраните форму (можно с пустыми полями — подставятся значения по умолчанию).
3. Каталог резервных копий по умолчанию: \`devcraft/backup\` (относительно корня сайта).

## Миграция с MHAdmin [#миграция-с-mhadmin]

Если у вас уже был DB Manager под MHAdmin, см. отдельную страницу [Миграция](migration). Конфигурацию нужно **скопировать вручную**.

## История изменений (200.1.3) [#история-изменений-20013]

* Миграция на структуру **DevCraft Admin** (модуль \`DbManager\`, AJAX через \`devcraft/ajax.php\`).
* Зависимость от DevCraft Admin **≥ 200.4.0**.
* Стандартный путь экспорта: \`devcraft/backup\`.
* Удалены legacy-пути \`engine/inc/maharder/_modules/db_manager/\` и \`engine/ajax/maharder/db_manager/\`.

Полный журнал — в разделе **История изменений** внутри модуля в админке.

## Использование [#использование]

Перед экспортом сохраните настройки хотя бы один раз. На странице **Управление БД** слева — список таблиц, справа — файлы резервных копий (скачать, удалить, восстановить).

Меню модуля: **Панель** (\`dashboard\`), **Управление БД** (\`manager\`), **Настройки**, **История изменений**.

Скачивание резервных копий идёт через \`devcraft/ajax.php\` (обработчик \`DownloadFileHandler\` + \`FileResponse\`, DevCraft ≥ 200.4.0).

## См. также [#см-также]

* [Миграция с MHAdmin](migration)
* [DevCraft Admin — установка](../../devcraft_admin/install)
* [Начало работы с модулями DevCraft](../../devcraft_admin/getting_started)
`,o={contents:[{heading:void 0,content:"Сначала установите и настройте DevCraft Admin (включая `composer install` в `devcraft/`). Затем устанавливайте DB Manager."},{heading:void 0,content:`Обзор модуля: Начало работы.`},{heading:`1-архив-плагина`,content:"Скачайте `install.zip` из репозитория или релиза."},{heading:`1-архив-плагина`,content:`Загрузите в **Панель управления DLE → Плагины → Установить плагин**.`},{heading:`1-архив-плагина`,content:`Убедитесь, что появились:`},{heading:`1-архив-плагина`,content:"`engine/inc/db_manager.php`"},{heading:`1-архив-плагина`,content:"`devcraft/src/modules/DbManager/`"},{heading:`1-архив-плагина`,content:"`devcraft/locales/*/db_manager.xliff`"},{heading:`2-composer-autoload`,content:"На сервере в каталоге `devcraft/`:"},{heading:`2-composer-autoload`,content:"Без этого шага классы модуля `DevCraft\\Modules\\DbManager\\` не будут найдены."},{heading:`3-первый-запуск`,content:"Откройте в админке DLE: **DB Manager** (`?mod=db_manager`)."},{heading:`3-первый-запуск`,content:`Перейдите в **Настройки** и сохраните форму (можно с пустыми полями — подставятся значения по умолчанию).`},{heading:`3-первый-запуск`,content:"Каталог резервных копий по умолчанию: `devcraft/backup` (относительно корня сайта)."},{heading:`миграция-с-mhadmin`,content:`Если у вас уже был DB Manager под MHAdmin, см. отдельную страницу Миграция. Конфигурацию нужно **скопировать вручную**.`},{heading:`история-изменений-20013`,content:"Миграция на структуру **DevCraft Admin** (модуль `DbManager`, AJAX через `devcraft/ajax.php`)."},{heading:`история-изменений-20013`,content:`Зависимость от DevCraft Admin **≥ 200.4.0**.`},{heading:`история-изменений-20013`,content:"Стандартный путь экспорта: `devcraft/backup`."},{heading:`история-изменений-20013`,content:"Удалены legacy-пути `engine/inc/maharder/_modules/db_manager/` и `engine/ajax/maharder/db_manager/`."},{heading:`история-изменений-20013`,content:`Полный журнал — в разделе **История изменений** внутри модуля в админке.`},{heading:`использование`,content:`Перед экспортом сохраните настройки хотя бы один раз. На странице **Управление БД** слева — список таблиц, справа — файлы резервных копий (скачать, удалить, восстановить).`},{heading:`использование`,content:"Меню модуля: **Панель** (`dashboard`), **Управление БД** (`manager`), **Настройки**, **История изменений**."},{heading:`использование`,content:"Скачивание резервных копий идёт через `devcraft/ajax.php` (обработчик `DownloadFileHandler` + `FileResponse`, DevCraft ≥ 200.4.0)."},{heading:`см-также`,content:`Миграция с MHAdmin`},{heading:`см-также`,content:`DevCraft Admin — установка`},{heading:`см-также`,content:`Начало работы с модулями DevCraft`}],headings:[{id:`1-архив-плагина`,content:`1\\. Архив плагина`},{id:`2-composer-autoload`,content:`2\\. Composer autoload`},{id:`3-первый-запуск`,content:`3\\. Первый запуск`},{id:`миграция-с-mhadmin`,content:`Миграция с MHAdmin`},{id:`история-изменений-20013`,content:`История изменений (200.1.3)`},{id:`использование`,content:`Использование`},{id:`см-также`,content:`См. также`}]},s=[{depth:3,url:`#1-архив-плагина`,title:(0,n.jsx)(n.Fragment,{children:`1. Архив плагина`})},{depth:3,url:`#2-composer-autoload`,title:(0,n.jsx)(n.Fragment,{children:`2. Composer autoload`})},{depth:3,url:`#3-первый-запуск`,title:(0,n.jsx)(n.Fragment,{children:`3. Первый запуск`})},{depth:2,url:`#миграция-с-mhadmin`,title:(0,n.jsx)(n.Fragment,{children:`Миграция с MHAdmin`})},{depth:2,url:`#история-изменений-20013`,title:(0,n.jsx)(n.Fragment,{children:`История изменений (200.1.3)`})},{depth:2,url:`#использование`,title:(0,n.jsx)(n.Fragment,{children:`Использование`})},{depth:2,url:`#см-также`,title:(0,n.jsx)(n.Fragment,{children:`См. также`})}];function c(e){let t={a:`a`,code:`code`,h2:`h2`,h3:`h3`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,span:`span`,strong:`strong`,ul:`ul`,...e.components},{Callout:r}=t;return r||u(`Callout`,!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r,{type:`warn`,title:`Порядок установки`,children:(0,n.jsxs)(t.p,{children:[`Сначала установите и настройте `,(0,n.jsx)(t.a,{href:`../../devcraft_admin/install`,children:`DevCraft Admin`}),` (включая `,(0,n.jsx)(t.code,{children:`composer install`}),` в `,(0,n.jsx)(t.code,{children:`devcraft/`}),`). Затем устанавливайте DB Manager.`]})}),`
`,(0,n.jsxs)(t.p,{children:[`Обзор модуля: `,(0,n.jsx)(t.a,{href:`getting_started`,children:`Начало работы`}),`.`]}),`
`,(0,n.jsx)(t.h3,{id:`1-архив-плагина`,children:`1. Архив плагина`}),`
`,(0,n.jsxs)(t.ol,{children:[`
`,(0,n.jsxs)(t.li,{children:[`Скачайте `,(0,n.jsx)(t.code,{children:`install.zip`}),` из `,(0,n.jsx)(t.a,{href:`https://github.com/DevCraftClub/DB-Manager`,children:`репозитория`}),` или релиза.`]}),`
`,(0,n.jsxs)(t.li,{children:[`Загрузите в `,(0,n.jsx)(t.strong,{children:`Панель управления DLE → Плагины → Установить плагин`}),`.`]}),`
`,(0,n.jsxs)(t.li,{children:[`Убедитесь, что появились:`,`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.code,{children:`engine/inc/db_manager.php`})}),`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.code,{children:`devcraft/src/modules/DbManager/`})}),`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.code,{children:`devcraft/locales/*/db_manager.xliff`})}),`
`]}),`
`]}),`
`]}),`
`,(0,n.jsx)(t.h3,{id:`2-composer-autoload`,children:`2. Composer autoload`}),`
`,(0,n.jsxs)(t.p,{children:[`На сервере в каталоге `,(0,n.jsx)(t.code,{children:`devcraft/`}),`:`]}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="m 4,4 a 1,1 0 0 0 -0.7070312,0.2929687 1,1 0 0 0 0,1.4140625 L 8.5859375,11 3.2929688,16.292969 a 1,1 0 0 0 0,1.414062 1,1 0 0 0 1.4140624,0 l 5.9999998,-6 a 1.0001,1.0001 0 0 0 0,-1.414062 L 4.7070312,4.2929687 A 1,1 0 0 0 4,4 Z m 8,14 a 1,1 0 0 0 -1,1 1,1 0 0 0 1,1 h 8 a 1,1 0 0 0 1,-1 1,1 0 0 0 -1,-1 z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`composer`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:` dump-autoload`})]})})})}),`
`,(0,n.jsxs)(t.p,{children:[`Без этого шага классы модуля `,(0,n.jsx)(t.code,{children:`DevCraft\\Modules\\DbManager\\`}),` не будут найдены.`]}),`
`,(0,n.jsx)(t.h3,{id:`3-первый-запуск`,children:`3. Первый запуск`}),`
`,(0,n.jsxs)(t.ol,{children:[`
`,(0,n.jsxs)(t.li,{children:[`Откройте в админке DLE: `,(0,n.jsx)(t.strong,{children:`DB Manager`}),` (`,(0,n.jsx)(t.code,{children:`?mod=db_manager`}),`).`]}),`
`,(0,n.jsxs)(t.li,{children:[`Перейдите в `,(0,n.jsx)(t.strong,{children:`Настройки`}),` и сохраните форму (можно с пустыми полями — подставятся значения по умолчанию).`]}),`
`,(0,n.jsxs)(t.li,{children:[`Каталог резервных копий по умолчанию: `,(0,n.jsx)(t.code,{children:`devcraft/backup`}),` (относительно корня сайта).`]}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`миграция-с-mhadmin`,children:`Миграция с MHAdmin`}),`
`,(0,n.jsxs)(t.p,{children:[`Если у вас уже был DB Manager под MHAdmin, см. отдельную страницу `,(0,n.jsx)(t.a,{href:`migration`,children:`Миграция`}),`. Конфигурацию нужно `,(0,n.jsx)(t.strong,{children:`скопировать вручную`}),`.`]}),`
`,(0,n.jsx)(t.h2,{id:`история-изменений-20013`,children:`История изменений (200.1.3)`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[`Миграция на структуру `,(0,n.jsx)(t.strong,{children:`DevCraft Admin`}),` (модуль `,(0,n.jsx)(t.code,{children:`DbManager`}),`, AJAX через `,(0,n.jsx)(t.code,{children:`devcraft/ajax.php`}),`).`]}),`
`,(0,n.jsxs)(t.li,{children:[`Зависимость от DevCraft Admin `,(0,n.jsx)(t.strong,{children:`≥ 200.4.0`}),`.`]}),`
`,(0,n.jsxs)(t.li,{children:[`Стандартный путь экспорта: `,(0,n.jsx)(t.code,{children:`devcraft/backup`}),`.`]}),`
`,(0,n.jsxs)(t.li,{children:[`Удалены legacy-пути `,(0,n.jsx)(t.code,{children:`engine/inc/maharder/_modules/db_manager/`}),` и `,(0,n.jsx)(t.code,{children:`engine/ajax/maharder/db_manager/`}),`.`]}),`
`]}),`
`,(0,n.jsxs)(t.p,{children:[`Полный журнал — в разделе `,(0,n.jsx)(t.strong,{children:`История изменений`}),` внутри модуля в админке.`]}),`
`,(0,n.jsx)(t.h2,{id:`использование`,children:`Использование`}),`
`,(0,n.jsxs)(t.p,{children:[`Перед экспортом сохраните настройки хотя бы один раз. На странице `,(0,n.jsx)(t.strong,{children:`Управление БД`}),` слева — список таблиц, справа — файлы резервных копий (скачать, удалить, восстановить).`]}),`
`,(0,n.jsxs)(t.p,{children:[`Меню модуля: `,(0,n.jsx)(t.strong,{children:`Панель`}),` (`,(0,n.jsx)(t.code,{children:`dashboard`}),`), `,(0,n.jsx)(t.strong,{children:`Управление БД`}),` (`,(0,n.jsx)(t.code,{children:`manager`}),`), `,(0,n.jsx)(t.strong,{children:`Настройки`}),`, `,(0,n.jsx)(t.strong,{children:`История изменений`}),`.`]}),`
`,(0,n.jsxs)(t.p,{children:[`Скачивание резервных копий идёт через `,(0,n.jsx)(t.code,{children:`devcraft/ajax.php`}),` (обработчик `,(0,n.jsx)(t.code,{children:`DownloadFileHandler`}),` + `,(0,n.jsx)(t.code,{children:`FileResponse`}),`, DevCraft ≥ 200.4.0).`]}),`
`,(0,n.jsx)(t.h2,{id:`см-также`,children:`См. также`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`migration`,children:`Миграция с MHAdmin`})}),`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`../../devcraft_admin/install`,children:`DevCraft Admin — установка`})}),`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`../../devcraft_admin/getting_started`,children:`Начало работы с модулями DevCraft`})}),`
`]})]})}function l(e={}){let{wrapper:t}=e.components||{};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}function u(e,t){throw Error(`Expected `+(t?`component`:`object`)+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}export{a as _markdown,l as default,r as frontmatter,i as lastModified,o as structuredData,s as toc};