import{r as e}from"./rolldown-runtime-QTnfLwEv.js";import{t}from"./jsx-runtime-By8HlURe.js";var n=e(t()),r={title:`Миграция на DevCraft Admin`,description:`Перенос с MH Admin (Legacy) на DevCraft Admin для DLE 20.0.`},i=new Date(1785402405e3),a=`

DevCraft Admin устанавливается как **новый плагин** DLE 20.0. Автоматическая миграция базы данных, локалей и сторонних модулей **не выполняется** — lifecycle создаёт только пункт меню \`devcraft\`.

<Callout type="warn" title="Полная автоматическая миграция невозможна">
  Из-за смены архитектуры (Metro UI, Cycle ORM, новые пути) старые плагины MH Admin **не совместимы** до их отдельного обновления под DevCraft.
</Callout>

Актуальная документация: [Установка](install). Legacy: [MH Admin (Legacy)](../../../../deprecated/mhadmin/install).

## Что меняется [#что-меняется]

| Legacy (MH Admin)         | DevCraft Admin                                               |
| ------------------------- | ------------------------------------------------------------ |
| \`engine/inc/maharder.php\` | \`engine/inc/devcraft.php\`                                    |
| \`engine/inc/maharder/\`    | \`devcraft/\` в корне сайта                                    |
| Fomantic UI               | Metro UI                                                     |
| \`MH_*\` константы          | \`DEVCRAFT_*\` (см. [Paths](reference/back-end/classes/Paths)) |
| \`engine/ajax/maharder/\`   | \`devcraft/ajax.php\`                                          |

## Ручные шаги [#ручные-шаги]

### 1. Резервная копия [#1-резервная-копия]

Сохраните каталоги \`engine/inc/maharder/\`, \`devcraft/\` (если уже есть) и дамп БД.

### 2. Установка DevCraft Admin [#2-установка-devcraft-admin]

Следуйте [инструкции по установке](install): архив плагина через менеджер DLE, затем \`composer install\` в \`devcraft/\`.

### 3. Перенос конфигурации JSON [#3-перенос-конфигурации-json]

Файлы из \`engine/inc/maharder/_config/\` скопируйте в \`devcraft/config/\`.

Имена ключей в основном совпадают (\`list_count\`, \`language\`, \`theme\`, \`logs\` и т.д.). При первом запуске \`DevCraftConfig\` применяет миграцию устаревших ключей.

### 4. Локализация [#4-локализация]

Скопируйте XLIFF из \`engine/inc/maharder/_locales/\` в \`devcraft/locales/\` (структура \`{locale}/{module}.xliff\`).

Путь к локалям можно проверить в [Настройка](guides/manage) → **Путь до файлов языков**.

### 5. Логи и кеш [#5-логи-и-кеш]

| Legacy                      | DevCraft                          |
| --------------------------- | --------------------------------- |
| \`engine/inc/maharder/logs/\` | \`devcraft/logs/\`                  |
| кеш MH                      | \`devcraft/cache/\` (настраивается) |

Таблица логов в БД: \`devcraft_logs\` (см. [LogRecord](reference/back-end/classes/LogRecord)). Старые записи \`{prefix}_maharder_*\` **не импортируются** автоматически.

### 6. Сторонние модули автора [#6-сторонние-модули-автора]

Каждый legacy-модуль под \`engine/inc/maharder/_modules/\` требует **переписывания** под структуру \`devcraft/src/modules/{Name}/\` (manifest, Pages, Ajax). Используйте [генератор модулей](guides/new_module) как стартовую точку.

### 7. Отключение Legacy (опционально) [#7-отключение-legacy-опционально]

После проверки DevCraft Admin можно удалить пункт меню \`maharder\` в DLE и архивировать \`engine/inc/maharder/\`. Рекомендуется оставить Legacy-документацию для ссылок на старые API.

## Планируется в будущих релизах [#планируется-в-будущих-релизах]

* Импорт таблиц \`{prefix}_maharder_*\` → \`{prefix}_devcraft_*\`
* Мастер деактивации legacy-меню
* Проверка целостности путей при обновлении

## См. также [#см-также]

* [Точки входа](reference/back-end/entry_points)
* [Манифест модуля](reference/back-end/manifest)
* [История изменений](changelog)
`,o={contents:[{heading:void 0,content:"DevCraft Admin устанавливается как **новый плагин** DLE 20.0. Автоматическая миграция базы данных, локалей и сторонних модулей **не выполняется** — lifecycle создаёт только пункт меню `devcraft`."},{heading:void 0,content:`Из-за смены архитектуры (Metro UI, Cycle ORM, новые пути) старые плагины MH Admin **не совместимы** до их отдельного обновления под DevCraft.`},{heading:void 0,content:`Актуальная документация: Установка. Legacy: MH Admin (Legacy).`},{heading:`что-меняется`,content:`Legacy (MH Admin)`},{heading:`что-меняется`,content:`DevCraft Admin`},{heading:`что-меняется`,content:"`engine/inc/maharder.php`"},{heading:`что-меняется`,content:"`engine/inc/devcraft.php`"},{heading:`что-меняется`,content:"`engine/inc/maharder/`"},{heading:`что-меняется`,content:"`devcraft/` в корне сайта"},{heading:`что-меняется`,content:`Fomantic UI`},{heading:`что-меняется`,content:`Metro UI`},{heading:`что-меняется`,content:"`MH_*` константы"},{heading:`что-меняется`,content:"`DEVCRAFT_*` (см. Paths)"},{heading:`что-меняется`,content:"`engine/ajax/maharder/`"},{heading:`что-меняется`,content:"`devcraft/ajax.php`"},{heading:`1-резервная-копия`,content:"Сохраните каталоги `engine/inc/maharder/`, `devcraft/` (если уже есть) и дамп БД."},{heading:`2-установка-devcraft-admin`,content:"Следуйте инструкции по установке: архив плагина через менеджер DLE, затем `composer install` в `devcraft/`."},{heading:`3-перенос-конфигурации-json`,content:"Файлы из `engine/inc/maharder/_config/` скопируйте в `devcraft/config/`."},{heading:`3-перенос-конфигурации-json`,content:"Имена ключей в основном совпадают (`list_count`, `language`, `theme`, `logs` и т.д.). При первом запуске `DevCraftConfig` применяет миграцию устаревших ключей."},{heading:`4-локализация`,content:"Скопируйте XLIFF из `engine/inc/maharder/_locales/` в `devcraft/locales/` (структура `{locale}/{module}.xliff`)."},{heading:`4-локализация`,content:`Путь к локалям можно проверить в Настройка → **Путь до файлов языков**.`},{heading:`5-логи-и-кеш`,content:`Legacy`},{heading:`5-логи-и-кеш`,content:`DevCraft`},{heading:`5-логи-и-кеш`,content:"`engine/inc/maharder/logs/`"},{heading:`5-логи-и-кеш`,content:"`devcraft/logs/`"},{heading:`5-логи-и-кеш`,content:`кеш MH`},{heading:`5-логи-и-кеш`,content:"`devcraft/cache/` (настраивается)"},{heading:`5-логи-и-кеш`,content:"Таблица логов в БД: `devcraft_logs` (см. LogRecord). Старые записи `{prefix}_maharder_*` **не импортируются** автоматически."},{heading:`6-сторонние-модули-автора`,content:"Каждый legacy-модуль под `engine/inc/maharder/_modules/` требует **переписывания** под структуру `devcraft/src/modules/{Name}/` (manifest, Pages, Ajax). Используйте генератор модулей как стартовую точку."},{heading:`7-отключение-legacy-опционально`,content:"После проверки DevCraft Admin можно удалить пункт меню `maharder` в DLE и архивировать `engine/inc/maharder/`. Рекомендуется оставить Legacy-документацию для ссылок на старые API."},{heading:`планируется-в-будущих-релизах`,content:"Импорт таблиц `{prefix}_maharder_*` → `{prefix}_devcraft_*`"},{heading:`планируется-в-будущих-релизах`,content:`Мастер деактивации legacy-меню`},{heading:`планируется-в-будущих-релизах`,content:`Проверка целостности путей при обновлении`},{heading:`см-также`,content:`Точки входа`},{heading:`см-также`,content:`Манифест модуля`},{heading:`см-также`,content:`История изменений`}],headings:[{id:`что-меняется`,content:`Что меняется`},{id:`ручные-шаги`,content:`Ручные шаги`},{id:`1-резервная-копия`,content:`1\\. Резервная копия`},{id:`2-установка-devcraft-admin`,content:`2\\. Установка DevCraft Admin`},{id:`3-перенос-конфигурации-json`,content:`3\\. Перенос конфигурации JSON`},{id:`4-локализация`,content:`4\\. Локализация`},{id:`5-логи-и-кеш`,content:`5\\. Логи и кеш`},{id:`6-сторонние-модули-автора`,content:`6\\. Сторонние модули автора`},{id:`7-отключение-legacy-опционально`,content:`7\\. Отключение Legacy (опционально)`},{id:`планируется-в-будущих-релизах`,content:`Планируется в будущих релизах`},{id:`см-также`,content:`См. также`}]},s=[{depth:2,url:`#что-меняется`,title:(0,n.jsx)(n.Fragment,{children:`Что меняется`})},{depth:2,url:`#ручные-шаги`,title:(0,n.jsx)(n.Fragment,{children:`Ручные шаги`})},{depth:3,url:`#1-резервная-копия`,title:(0,n.jsx)(n.Fragment,{children:`1. Резервная копия`})},{depth:3,url:`#2-установка-devcraft-admin`,title:(0,n.jsx)(n.Fragment,{children:`2. Установка DevCraft Admin`})},{depth:3,url:`#3-перенос-конфигурации-json`,title:(0,n.jsx)(n.Fragment,{children:`3. Перенос конфигурации JSON`})},{depth:3,url:`#4-локализация`,title:(0,n.jsx)(n.Fragment,{children:`4. Локализация`})},{depth:3,url:`#5-логи-и-кеш`,title:(0,n.jsx)(n.Fragment,{children:`5. Логи и кеш`})},{depth:3,url:`#6-сторонние-модули-автора`,title:(0,n.jsx)(n.Fragment,{children:`6. Сторонние модули автора`})},{depth:3,url:`#7-отключение-legacy-опционально`,title:(0,n.jsx)(n.Fragment,{children:`7. Отключение Legacy (опционально)`})},{depth:2,url:`#планируется-в-будущих-релизах`,title:(0,n.jsx)(n.Fragment,{children:`Планируется в будущих релизах`})},{depth:2,url:`#см-также`,title:(0,n.jsx)(n.Fragment,{children:`См. также`})}];function c(e){let t={a:`a`,code:`code`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,strong:`strong`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,ul:`ul`,...e.components},{Callout:r}=t;return r||u(`Callout`,!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:[`DevCraft Admin устанавливается как `,(0,n.jsx)(t.strong,{children:`новый плагин`}),` DLE 20.0. Автоматическая миграция базы данных, локалей и сторонних модулей `,(0,n.jsx)(t.strong,{children:`не выполняется`}),` — lifecycle создаёт только пункт меню `,(0,n.jsx)(t.code,{children:`devcraft`}),`.`]}),`
`,(0,n.jsx)(r,{type:`warn`,title:`Полная автоматическая миграция невозможна`,children:(0,n.jsxs)(t.p,{children:[`Из-за смены архитектуры (Metro UI, Cycle ORM, новые пути) старые плагины MH Admin `,(0,n.jsx)(t.strong,{children:`не совместимы`}),` до их отдельного обновления под DevCraft.`]})}),`
`,(0,n.jsxs)(t.p,{children:[`Актуальная документация: `,(0,n.jsx)(t.a,{href:`install`,children:`Установка`}),`. Legacy: `,(0,n.jsx)(t.a,{href:`../../../../deprecated/mhadmin/install`,children:`MH Admin (Legacy)`}),`.`]}),`
`,(0,n.jsx)(t.h2,{id:`что-меняется`,children:`Что меняется`}),`
`,(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`Legacy (MH Admin)`}),(0,n.jsx)(t.th,{children:`DevCraft Admin`})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:`engine/inc/maharder.php`})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:`engine/inc/devcraft.php`})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:`engine/inc/maharder/`})}),(0,n.jsxs)(t.td,{children:[(0,n.jsx)(t.code,{children:`devcraft/`}),` в корне сайта`]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`Fomantic UI`}),(0,n.jsx)(t.td,{children:`Metro UI`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsxs)(t.td,{children:[(0,n.jsx)(t.code,{children:`MH_*`}),` константы`]}),(0,n.jsxs)(t.td,{children:[(0,n.jsx)(t.code,{children:`DEVCRAFT_*`}),` (см. `,(0,n.jsx)(t.a,{href:`reference/back-end/classes/Paths`,children:`Paths`}),`)`]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:`engine/ajax/maharder/`})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:`devcraft/ajax.php`})})]})]})]}),`
`,(0,n.jsx)(t.h2,{id:`ручные-шаги`,children:`Ручные шаги`}),`
`,(0,n.jsx)(t.h3,{id:`1-резервная-копия`,children:`1. Резервная копия`}),`
`,(0,n.jsxs)(t.p,{children:[`Сохраните каталоги `,(0,n.jsx)(t.code,{children:`engine/inc/maharder/`}),`, `,(0,n.jsx)(t.code,{children:`devcraft/`}),` (если уже есть) и дамп БД.`]}),`
`,(0,n.jsx)(t.h3,{id:`2-установка-devcraft-admin`,children:`2. Установка DevCraft Admin`}),`
`,(0,n.jsxs)(t.p,{children:[`Следуйте `,(0,n.jsx)(t.a,{href:`install`,children:`инструкции по установке`}),`: архив плагина через менеджер DLE, затем `,(0,n.jsx)(t.code,{children:`composer install`}),` в `,(0,n.jsx)(t.code,{children:`devcraft/`}),`.`]}),`
`,(0,n.jsx)(t.h3,{id:`3-перенос-конфигурации-json`,children:`3. Перенос конфигурации JSON`}),`
`,(0,n.jsxs)(t.p,{children:[`Файлы из `,(0,n.jsx)(t.code,{children:`engine/inc/maharder/_config/`}),` скопируйте в `,(0,n.jsx)(t.code,{children:`devcraft/config/`}),`.`]}),`
`,(0,n.jsxs)(t.p,{children:[`Имена ключей в основном совпадают (`,(0,n.jsx)(t.code,{children:`list_count`}),`, `,(0,n.jsx)(t.code,{children:`language`}),`, `,(0,n.jsx)(t.code,{children:`theme`}),`, `,(0,n.jsx)(t.code,{children:`logs`}),` и т.д.). При первом запуске `,(0,n.jsx)(t.code,{children:`DevCraftConfig`}),` применяет миграцию устаревших ключей.`]}),`
`,(0,n.jsx)(t.h3,{id:`4-локализация`,children:`4. Локализация`}),`
`,(0,n.jsxs)(t.p,{children:[`Скопируйте XLIFF из `,(0,n.jsx)(t.code,{children:`engine/inc/maharder/_locales/`}),` в `,(0,n.jsx)(t.code,{children:`devcraft/locales/`}),` (структура `,(0,n.jsx)(t.code,{children:`{locale}/{module}.xliff`}),`).`]}),`
`,(0,n.jsxs)(t.p,{children:[`Путь к локалям можно проверить в `,(0,n.jsx)(t.a,{href:`guides/manage`,children:`Настройка`}),` → `,(0,n.jsx)(t.strong,{children:`Путь до файлов языков`}),`.`]}),`
`,(0,n.jsx)(t.h3,{id:`5-логи-и-кеш`,children:`5. Логи и кеш`}),`
`,(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`Legacy`}),(0,n.jsx)(t.th,{children:`DevCraft`})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:`engine/inc/maharder/logs/`})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:`devcraft/logs/`})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`кеш MH`}),(0,n.jsxs)(t.td,{children:[(0,n.jsx)(t.code,{children:`devcraft/cache/`}),` (настраивается)`]})]})]})]}),`
`,(0,n.jsxs)(t.p,{children:[`Таблица логов в БД: `,(0,n.jsx)(t.code,{children:`devcraft_logs`}),` (см. `,(0,n.jsx)(t.a,{href:`reference/back-end/classes/LogRecord`,children:`LogRecord`}),`). Старые записи `,(0,n.jsx)(t.code,{children:`{prefix}_maharder_*`}),` `,(0,n.jsx)(t.strong,{children:`не импортируются`}),` автоматически.`]}),`
`,(0,n.jsx)(t.h3,{id:`6-сторонние-модули-автора`,children:`6. Сторонние модули автора`}),`
`,(0,n.jsxs)(t.p,{children:[`Каждый legacy-модуль под `,(0,n.jsx)(t.code,{children:`engine/inc/maharder/_modules/`}),` требует `,(0,n.jsx)(t.strong,{children:`переписывания`}),` под структуру `,(0,n.jsx)(t.code,{children:`devcraft/src/modules/{Name}/`}),` (manifest, Pages, Ajax). Используйте `,(0,n.jsx)(t.a,{href:`guides/new_module`,children:`генератор модулей`}),` как стартовую точку.`]}),`
`,(0,n.jsx)(t.h3,{id:`7-отключение-legacy-опционально`,children:`7. Отключение Legacy (опционально)`}),`
`,(0,n.jsxs)(t.p,{children:[`После проверки DevCraft Admin можно удалить пункт меню `,(0,n.jsx)(t.code,{children:`maharder`}),` в DLE и архивировать `,(0,n.jsx)(t.code,{children:`engine/inc/maharder/`}),`. Рекомендуется оставить Legacy-документацию для ссылок на старые API.`]}),`
`,(0,n.jsx)(t.h2,{id:`планируется-в-будущих-релизах`,children:`Планируется в будущих релизах`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[`Импорт таблиц `,(0,n.jsx)(t.code,{children:`{prefix}_maharder_*`}),` → `,(0,n.jsx)(t.code,{children:`{prefix}_devcraft_*`})]}),`
`,(0,n.jsx)(t.li,{children:`Мастер деактивации legacy-меню`}),`
`,(0,n.jsx)(t.li,{children:`Проверка целостности путей при обновлении`}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`см-также`,children:`См. также`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`reference/back-end/entry_points`,children:`Точки входа`})}),`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`reference/back-end/manifest`,children:`Манифест модуля`})}),`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`changelog`,children:`История изменений`})}),`
`]})]})}function l(e={}){let{wrapper:t}=e.components||{};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}function u(e,t){throw Error(`Expected `+(t?`component`:`object`)+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}export{a as _markdown,l as default,r as frontmatter,i as lastModified,o as structuredData,s as toc};