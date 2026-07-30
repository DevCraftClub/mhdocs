import{r as e}from"./rolldown-runtime-QTnfLwEv.js";import{t}from"./jsx-runtime-By8HlURe.js";var n=e(t()),r={title:`Миграция`,description:`Перенос DB Manager с MHAdmin на DevCraft Admin 200.1.3.`},i=new Date(1785400635e3),a=`

Версия **200.1.3** работает только с [DevCraft Admin](../../devcraft_admin/install&#x29; **≥ 200.4.0**. Автоматический перенос настроек **не выполняется**.

Общий контекст миграции с MHAdmin: [Миграция на DevCraft Admin](../../devcraft_admin/migration).

## Соответствие путей [#соответствие-путей]

| Legacy (MHAdmin)                                         | DevCraft (200.1.3)                           |
| -------------------------------------------------------- | -------------------------------------------- |
| \`engine/inc/maharder/_modules/db_manager/\`               | \`devcraft/src/modules/DbManager/\`            |
| \`engine/inc/maharder/_config/db_manager.json\`            | \`devcraft/config/db_manager.json\`            |
| \`engine/inc/maharder/_templates/db_manager/\`             | \`devcraft/src/modules/DbManager/templates/\`  |
| \`engine/inc/maharder/_locales/*/db_manager.xliff\`        | \`devcraft/locales/*/db_manager.xliff\`        |
| \`engine/ajax/maharder/db_manager/\`                       | **удалено** — AJAX через \`devcraft/ajax.php\` |
| \`?mod=maharder\` + sites                                  | \`?mod=db_manager\`                            |
| Путь экспорта по умолчанию \`engine/inc/maharder/_backup\` | \`devcraft/backup\`                            |

## Пошаговая инструкция [#пошаговая-инструкция]

### 1. Резервная копия [#1-резервная-копия]

Сохраните \`engine/inc/maharder/_config/db_manager.json\`, каталог с SQL-резервными копиями и дамп БД.

### 2. DevCraft Admin [#2-devcraft-admin]

Установите DevCraft Admin по [инструкции](../../devcraft_admin/install). Выполните \`composer install\` в \`devcraft/\`.

### 3. Установка DB Manager 200.1.3 [#3-установка-db-manager-20013]

Установите новый архив плагина через менеджер DLE. Затем:

\`\`\`bash
cd devcraft
composer dump-autoload
\`\`\`

### 4. Перенос конфигурации [#4-перенос-конфигурации]

\`\`\`bash
cp engine/inc/maharder/_config/db_manager.json devcraft/config/db_manager.json
\`\`\`

Откройте файл и при необходимости измените \`export_path\`:

\`\`\`json
"export_path": "devcraft/backup"
\`\`\`

Старые файлы в \`engine/inc/maharder/_backup/\` можно перенести в новый каталог вручную.

### 5. Проверка [#5-проверка]

1. \`?mod=db_manager\` → меню: Настройки, Управление БД, История изменений.
2. Настройки отображают сохранённые значения (Telegram, режим совместимости и т.д.).
3. Экспорт, скачивание, удаление и импорт работают через интерфейс DevCraft.

### 6. Legacy (опционально) [#6-legacy-опционально]

После проверки можно удалить:

* \`engine/inc/maharder/_modules/db_manager/\`
* \`engine/ajax/maharder/db_manager/\`

Глобальный плагин MHAdmin отключать не обязательно, если другие модули ещё на нём работают.

## Импорт SQL [#импорт-sql]

Поведение импорта (\`multi_query\` без транзакции) совпадает с legacy-версией. Для production рекомендуется тестовая копия БД.

## См. также [#см-также]

* [Установка](install)
* [DevCraft Admin — миграция](../../devcraft_admin/migration)
`,o={contents:[{heading:void 0,content:`Версия **200.1.3** работает только с DevCraft Admi&#x6E; **≥ 200.4.0**. Автоматический перенос настроек **не выполняется**.`},{heading:void 0,content:`Общий контекст миграции с MHAdmin: Миграция на DevCraft Admin.`},{heading:`соответствие-путей`,content:`Legacy (MHAdmin)`},{heading:`соответствие-путей`,content:`DevCraft (200.1.3)`},{heading:`соответствие-путей`,content:"`engine/inc/maharder/_modules/db_manager/`"},{heading:`соответствие-путей`,content:"`devcraft/src/modules/DbManager/`"},{heading:`соответствие-путей`,content:"`engine/inc/maharder/_config/db_manager.json`"},{heading:`соответствие-путей`,content:"`devcraft/config/db_manager.json`"},{heading:`соответствие-путей`,content:"`engine/inc/maharder/_templates/db_manager/`"},{heading:`соответствие-путей`,content:"`devcraft/src/modules/DbManager/templates/`"},{heading:`соответствие-путей`,content:"`engine/inc/maharder/_locales/*/db_manager.xliff`"},{heading:`соответствие-путей`,content:"`devcraft/locales/*/db_manager.xliff`"},{heading:`соответствие-путей`,content:"`engine/ajax/maharder/db_manager/`"},{heading:`соответствие-путей`,content:"**удалено** — AJAX через `devcraft/ajax.php`"},{heading:`соответствие-путей`,content:"`?mod=maharder` + sites"},{heading:`соответствие-путей`,content:"`?mod=db_manager`"},{heading:`соответствие-путей`,content:"Путь экспорта по умолчанию `engine/inc/maharder/_backup`"},{heading:`соответствие-путей`,content:"`devcraft/backup`"},{heading:`1-резервная-копия`,content:"Сохраните `engine/inc/maharder/_config/db_manager.json`, каталог с SQL-резервными копиями и дамп БД."},{heading:`2-devcraft-admin`,content:"Установите DevCraft Admin по инструкции. Выполните `composer install` в `devcraft/`."},{heading:`3-установка-db-manager-20013`,content:`Установите новый архив плагина через менеджер DLE. Затем:`},{heading:`4-перенос-конфигурации`,content:"Откройте файл и при необходимости измените `export_path`:"},{heading:`4-перенос-конфигурации`,content:"Старые файлы в `engine/inc/maharder/_backup/` можно перенести в новый каталог вручную."},{heading:`5-проверка`,content:"`?mod=db_manager` → меню: Настройки, Управление БД, История изменений."},{heading:`5-проверка`,content:`Настройки отображают сохранённые значения (Telegram, режим совместимости и т.д.).`},{heading:`5-проверка`,content:`Экспорт, скачивание, удаление и импорт работают через интерфейс DevCraft.`},{heading:`6-legacy-опционально`,content:`После проверки можно удалить:`},{heading:`6-legacy-опционально`,content:"`engine/inc/maharder/_modules/db_manager/`"},{heading:`6-legacy-опционально`,content:"`engine/ajax/maharder/db_manager/`"},{heading:`6-legacy-опционально`,content:`Глобальный плагин MHAdmin отключать не обязательно, если другие модули ещё на нём работают.`},{heading:`импорт-sql`,content:"Поведение импорта (`multi_query` без транзакции) совпадает с legacy-версией. Для production рекомендуется тестовая копия БД."},{heading:`см-также`,content:`Установка`},{heading:`см-также`,content:`DevCraft Admin — миграция`}],headings:[{id:`соответствие-путей`,content:`Соответствие путей`},{id:`пошаговая-инструкция`,content:`Пошаговая инструкция`},{id:`1-резервная-копия`,content:`1\\. Резервная копия`},{id:`2-devcraft-admin`,content:`2\\. DevCraft Admin`},{id:`3-установка-db-manager-20013`,content:`3\\. Установка DB Manager 200.1.3`},{id:`4-перенос-конфигурации`,content:`4\\. Перенос конфигурации`},{id:`5-проверка`,content:`5\\. Проверка`},{id:`6-legacy-опционально`,content:`6\\. Legacy (опционально)`},{id:`импорт-sql`,content:`Импорт SQL`},{id:`см-также`,content:`См. также`}]},s=[{depth:2,url:`#соответствие-путей`,title:(0,n.jsx)(n.Fragment,{children:`Соответствие путей`})},{depth:2,url:`#пошаговая-инструкция`,title:(0,n.jsx)(n.Fragment,{children:`Пошаговая инструкция`})},{depth:3,url:`#1-резервная-копия`,title:(0,n.jsx)(n.Fragment,{children:`1. Резервная копия`})},{depth:3,url:`#2-devcraft-admin`,title:(0,n.jsx)(n.Fragment,{children:`2. DevCraft Admin`})},{depth:3,url:`#3-установка-db-manager-20013`,title:(0,n.jsx)(n.Fragment,{children:`3. Установка DB Manager 200.1.3`})},{depth:3,url:`#4-перенос-конфигурации`,title:(0,n.jsx)(n.Fragment,{children:`4. Перенос конфигурации`})},{depth:3,url:`#5-проверка`,title:(0,n.jsx)(n.Fragment,{children:`5. Проверка`})},{depth:3,url:`#6-legacy-опционально`,title:(0,n.jsx)(n.Fragment,{children:`6. Legacy (опционально)`})},{depth:2,url:`#импорт-sql`,title:(0,n.jsx)(n.Fragment,{children:`Импорт SQL`})},{depth:2,url:`#см-также`,title:(0,n.jsx)(n.Fragment,{children:`См. также`})}];function c(e){let t={a:`a`,code:`code`,h2:`h2`,h3:`h3`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,span:`span`,strong:`strong`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,ul:`ul`,...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:[`Версия `,(0,n.jsx)(t.strong,{children:`200.1.3`}),` работает только с `,(0,n.jsx)(t.a,{href:`../../devcraft_admin/install`,children:`DevCraft Admin`}),` `,(0,n.jsx)(t.strong,{children:`≥ 200.4.0`}),`. Автоматический перенос настроек `,(0,n.jsx)(t.strong,{children:`не выполняется`}),`.`]}),`
`,(0,n.jsxs)(t.p,{children:[`Общий контекст миграции с MHAdmin: `,(0,n.jsx)(t.a,{href:`../../devcraft_admin/migration`,children:`Миграция на DevCraft Admin`}),`.`]}),`
`,(0,n.jsx)(t.h2,{id:`соответствие-путей`,children:`Соответствие путей`}),`
`,(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`Legacy (MHAdmin)`}),(0,n.jsx)(t.th,{children:`DevCraft (200.1.3)`})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:`engine/inc/maharder/_modules/db_manager/`})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:`devcraft/src/modules/DbManager/`})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:`engine/inc/maharder/_config/db_manager.json`})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:`devcraft/config/db_manager.json`})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:`engine/inc/maharder/_templates/db_manager/`})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:`devcraft/src/modules/DbManager/templates/`})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:`engine/inc/maharder/_locales/*/db_manager.xliff`})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:`devcraft/locales/*/db_manager.xliff`})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:`engine/ajax/maharder/db_manager/`})}),(0,n.jsxs)(t.td,{children:[(0,n.jsx)(t.strong,{children:`удалено`}),` — AJAX через `,(0,n.jsx)(t.code,{children:`devcraft/ajax.php`})]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsxs)(t.td,{children:[(0,n.jsx)(t.code,{children:`?mod=maharder`}),` + sites`]}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:`?mod=db_manager`})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsxs)(t.td,{children:[`Путь экспорта по умолчанию `,(0,n.jsx)(t.code,{children:`engine/inc/maharder/_backup`})]}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:`devcraft/backup`})})]})]})]}),`
`,(0,n.jsx)(t.h2,{id:`пошаговая-инструкция`,children:`Пошаговая инструкция`}),`
`,(0,n.jsx)(t.h3,{id:`1-резервная-копия`,children:`1. Резервная копия`}),`
`,(0,n.jsxs)(t.p,{children:[`Сохраните `,(0,n.jsx)(t.code,{children:`engine/inc/maharder/_config/db_manager.json`}),`, каталог с SQL-резервными копиями и дамп БД.`]}),`
`,(0,n.jsx)(t.h3,{id:`2-devcraft-admin`,children:`2. DevCraft Admin`}),`
`,(0,n.jsxs)(t.p,{children:[`Установите DevCraft Admin по `,(0,n.jsx)(t.a,{href:`../../devcraft_admin/install`,children:`инструкции`}),`. Выполните `,(0,n.jsx)(t.code,{children:`composer install`}),` в `,(0,n.jsx)(t.code,{children:`devcraft/`}),`.`]}),`
`,(0,n.jsx)(t.h3,{id:`3-установка-db-manager-20013`,children:`3. Установка DB Manager 200.1.3`}),`
`,(0,n.jsx)(t.p,{children:`Установите новый архив плагина через менеджер DLE. Затем:`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="m 4,4 a 1,1 0 0 0 -0.7070312,0.2929687 1,1 0 0 0 0,1.4140625 L 8.5859375,11 3.2929688,16.292969 a 1,1 0 0 0 0,1.414062 1,1 0 0 0 1.4140624,0 l 5.9999998,-6 a 1.0001,1.0001 0 0 0 0,-1.414062 L 4.7070312,4.2929687 A 1,1 0 0 0 4,4 Z m 8,14 a 1,1 0 0 0 -1,1 1,1 0 0 0 1,1 h 8 a 1,1 0 0 0 1,-1 1,1 0 0 0 -1,-1 z" fill="currentColor" /></svg>`,children:(0,n.jsxs)(t.code,{children:[(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`cd`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:` devcraft`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`composer`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:` dump-autoload`})]})]})})}),`
`,(0,n.jsx)(t.h3,{id:`4-перенос-конфигурации`,children:`4. Перенос конфигурации`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="m 4,4 a 1,1 0 0 0 -0.7070312,0.2929687 1,1 0 0 0 0,1.4140625 L 8.5859375,11 3.2929688,16.292969 a 1,1 0 0 0 0,1.414062 1,1 0 0 0 1.4140624,0 l 5.9999998,-6 a 1.0001,1.0001 0 0 0 0,-1.414062 L 4.7070312,4.2929687 A 1,1 0 0 0 4,4 Z m 8,14 a 1,1 0 0 0 -1,1 1,1 0 0 0 1,1 h 8 a 1,1 0 0 0 1,-1 1,1 0 0 0 -1,-1 z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`cp`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:` engine/inc/maharder/_config/db_manager.json`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:` devcraft/config/db_manager.json`})]})})})}),`
`,(0,n.jsxs)(t.p,{children:[`Откройте файл и при необходимости измените `,(0,n.jsx)(t.code,{children:`export_path`}),`:`]}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`"export_path"`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`: `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`"devcraft/backup"`})]})})})}),`
`,(0,n.jsxs)(t.p,{children:[`Старые файлы в `,(0,n.jsx)(t.code,{children:`engine/inc/maharder/_backup/`}),` можно перенести в новый каталог вручную.`]}),`
`,(0,n.jsx)(t.h3,{id:`5-проверка`,children:`5. Проверка`}),`
`,(0,n.jsxs)(t.ol,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`?mod=db_manager`}),` → меню: Настройки, Управление БД, История изменений.`]}),`
`,(0,n.jsx)(t.li,{children:`Настройки отображают сохранённые значения (Telegram, режим совместимости и т.д.).`}),`
`,(0,n.jsx)(t.li,{children:`Экспорт, скачивание, удаление и импорт работают через интерфейс DevCraft.`}),`
`]}),`
`,(0,n.jsx)(t.h3,{id:`6-legacy-опционально`,children:`6. Legacy (опционально)`}),`
`,(0,n.jsx)(t.p,{children:`После проверки можно удалить:`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.code,{children:`engine/inc/maharder/_modules/db_manager/`})}),`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.code,{children:`engine/ajax/maharder/db_manager/`})}),`
`]}),`
`,(0,n.jsx)(t.p,{children:`Глобальный плагин MHAdmin отключать не обязательно, если другие модули ещё на нём работают.`}),`
`,(0,n.jsx)(t.h2,{id:`импорт-sql`,children:`Импорт SQL`}),`
`,(0,n.jsxs)(t.p,{children:[`Поведение импорта (`,(0,n.jsx)(t.code,{children:`multi_query`}),` без транзакции) совпадает с legacy-версией. Для production рекомендуется тестовая копия БД.`]}),`
`,(0,n.jsx)(t.h2,{id:`см-также`,children:`См. также`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`install`,children:`Установка`})}),`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`../../devcraft_admin/migration`,children:`DevCraft Admin — миграция`})}),`
`]})]})}function l(e={}){let{wrapper:t}=e.components||{};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}export{a as _markdown,l as default,r as frontmatter,i as lastModified,o as structuredData,s as toc};