import{r as e}from"./rolldown-runtime-QTnfLwEv.js";import{t}from"./jsx-runtime-By8HlURe.js";var n=e(t()),r={title:`Класс: SchemaSyncService`,description:`Готовит схему Cycle ORM: ожидающие файлы, затем debug или файлы изменений.`,version:`200.4.1`},i=new Date(1789477657e3),a=`

**Описание:** Единая точка «убедись, что схема актуальна». Вызывается из [\`DatabaseGateway\`](DatabaseGateway) перед сборкой ORM.

**Namespace:** \`DevCraft\\Core\\Database\`

**Путь:** \`devcraft/src/classes/Database/SchemaSyncService.php\`

## Методы [#методы]

### \`ensureSchemaReady(): array\` [#ensureschemaready-array]

**Описание:** С файловой блокировкой рядом с кэшем схемы:

1. Накатывает все ожидающие файлы в \`devcraft/src/database/migrations/\`.
2. Если в настройках Admin включён **debug** — применяет \`SyncTables\` (без новых файлов).
3. Если debug выключен — \`GenerateMigrations\` только при реальном расхождении, сразу накат нового файла.
4. Пишет кэш \`cycle_orm_schema.ser\` с подписью Models.

Повтор без смены сущностей и без ожидающих файлов читает кэш и не пишет миграции.

**Возвращает:** массив схемы Cycle ORM.
`,o={contents:[{heading:void 0,content:"**Описание:** Единая точка «убедись, что схема актуальна». Вызывается из `DatabaseGateway` перед сборкой ORM."},{heading:void 0,content:"**Namespace:** `DevCraft\\Core\\Database`"},{heading:void 0,content:"**Путь:** `devcraft/src/classes/Database/SchemaSyncService.php`"},{heading:`ensureschemaready-array`,content:`**Описание:** С файловой блокировкой рядом с кэшем схемы:`},{heading:`ensureschemaready-array`,content:"Накатывает все ожидающие файлы в `devcraft/src/database/migrations/`."},{heading:`ensureschemaready-array`,content:"Если в настройках Admin включён **debug** — применяет `SyncTables` (без новых файлов)."},{heading:`ensureschemaready-array`,content:"Если debug выключен — `GenerateMigrations` только при реальном расхождении, сразу накат нового файла."},{heading:`ensureschemaready-array`,content:"Пишет кэш `cycle_orm_schema.ser` с подписью Models."},{heading:`ensureschemaready-array`,content:`Повтор без смены сущностей и без ожидающих файлов читает кэш и не пишет миграции.`},{heading:`ensureschemaready-array`,content:`**Возвращает:** массив схемы Cycle ORM.`}],headings:[{id:`методы`,content:`Методы`},{id:`ensureschemaready-array`,content:"`ensureSchemaReady(): array`"}]},s=[{depth:2,url:`#методы`,title:(0,n.jsx)(n.Fragment,{children:`Методы`})},{depth:3,url:`#ensureschemaready-array`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`ensureSchemaReady(): array`})})}];function c(e){let t={a:`a`,code:`code`,h2:`h2`,h3:`h3`,li:`li`,ol:`ol`,p:`p`,strong:`strong`,...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Единая точка «убедись, что схема актуальна». Вызывается из `,(0,n.jsx)(t.a,{href:`DatabaseGateway`,children:(0,n.jsx)(t.code,{children:`DatabaseGateway`})}),` перед сборкой ORM.`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Namespace:`}),` `,(0,n.jsx)(t.code,{children:`DevCraft\\Core\\Database`})]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Путь:`}),` `,(0,n.jsx)(t.code,{children:`devcraft/src/classes/Database/SchemaSyncService.php`})]}),`
`,(0,n.jsx)(t.h2,{id:`методы`,children:`Методы`}),`
`,(0,n.jsx)(t.h3,{id:`ensureschemaready-array`,children:(0,n.jsx)(t.code,{children:`ensureSchemaReady(): array`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` С файловой блокировкой рядом с кэшем схемы:`]}),`
`,(0,n.jsxs)(t.ol,{children:[`
`,(0,n.jsxs)(t.li,{children:[`Накатывает все ожидающие файлы в `,(0,n.jsx)(t.code,{children:`devcraft/src/database/migrations/`}),`.`]}),`
`,(0,n.jsxs)(t.li,{children:[`Если в настройках Admin включён `,(0,n.jsx)(t.strong,{children:`debug`}),` — применяет `,(0,n.jsx)(t.code,{children:`SyncTables`}),` (без новых файлов).`]}),`
`,(0,n.jsxs)(t.li,{children:[`Если debug выключен — `,(0,n.jsx)(t.code,{children:`GenerateMigrations`}),` только при реальном расхождении, сразу накат нового файла.`]}),`
`,(0,n.jsxs)(t.li,{children:[`Пишет кэш `,(0,n.jsx)(t.code,{children:`cycle_orm_schema.ser`}),` с подписью Models.`]}),`
`]}),`
`,(0,n.jsx)(t.p,{children:`Повтор без смены сущностей и без ожидающих файлов читает кэш и не пишет миграции.`}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` массив схемы Cycle ORM.`]})]})}function l(e={}){let{wrapper:t}=e.components||{};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}export{a as _markdown,l as default,r as frontmatter,i as lastModified,o as structuredData,s as toc};