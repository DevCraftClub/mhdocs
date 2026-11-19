import{r as e}from"./rolldown-runtime-QTnfLwEv.js";import{t}from"./jsx-runtime-By8HlURe.js";var n=e(t()),r={title:`Класс: SchemaSyncService`,description:`Готовит схему Cycle ORM: ожидающие файлы, затем debug или файлы изменений.`,version:`200.4.1`},i=new Date(1795075056e3),a=`

**Описание:** Единая точка «убедись, что схема актуальна». Вызывается из [\`DatabaseGateway\`](DatabaseGateway) перед сборкой ORM.

**Namespace:** \`DevCraft\\Core\\Database\`

**Путь:** \`devcraft/src/classes/Database/SchemaSyncService.php\`

## Методы [#методы]

### \`ensureSchemaReady(): array\` [#ensureschemaready-array]

**Описание:** С файловой блокировкой рядом с кэшем схемы:

1. Удаляет записи учёта без файлов и накатывает все ожидающие файлы из \`modules/{Name}/Migrations/\`.
2. Если в настройках Admin включён **debug** — применяет \`SyncTables\` (без новых файлов).
3. Если debug выключен — \`ModuleMigrationsGenerator\` только при реальном расхождении: отдельный файл на таблицу в \`Migrations\` модуля-владельца модели, сразу накат.
4. Пишет кэш \`cycle_orm_schema.ser\` с подписью Models.

Повтор без смены сущностей и без ожидающих файлов читает кэш и не пишет миграции.

**Возвращает:** массив схемы Cycle ORM.

### \`migrator(?EntityPathResolver $path_resolver = null): Migrator\` [#migratorentitypathresolver-path_resolver--null-migrator]

**Описание:** \`Migrator\` Cycle над каталогами \`Migrations\` всех модулей: Admin — основной \`directory\`, остальные — \`vendorDirectories\`.

### \`generateMigrations(): array\` [#generatemigrations-array]

**Описание:** Создаёт файлы миграций по отличиям моделей от базы, ничего не накатывая (как \`makemigrations\` в Django).

**Возвращает:** \`list<string>\` — пути новых файлов.

**Исключения:** \`RuntimeException\` — есть ожидающие миграции (сначала их нужно накатить).

### \`applyPending(): int\` [#applypending-int]

**Описание:** Накатывает ожидающие миграции; уже существующие таблицы помечаются выполненными.

**Возвращает:** \`int\` — сколько миграций стало выполненными.

### \`markExecuted(State $state): void\` [#markexecutedstate-state-void]

**Описание:** Помечает миграцию выполненной без запуска SQL.

### \`pruneRecordsWithoutFiles(Migrator $migrator): int\` [#prunerecordswithoutfilesmigrator-migrator-int]

**Описание:** Удаляет из \`devcraft_migrations\` записи, для которых нет файла. Таблицы с данными не меняются.

**Возвращает:** \`int\` — сколько записей удалено.

### \`dropCachedSchema(): void\` [#dropcachedschema-void]

**Описание:** Удаляет кэш \`cycle_orm_schema.ser\`.
`,o={contents:[{heading:void 0,content:"**Описание:** Единая точка «убедись, что схема актуальна». Вызывается из `DatabaseGateway` перед сборкой ORM."},{heading:void 0,content:"**Namespace:** `DevCraft\\Core\\Database`"},{heading:void 0,content:"**Путь:** `devcraft/src/classes/Database/SchemaSyncService.php`"},{heading:`ensureschemaready-array`,content:`**Описание:** С файловой блокировкой рядом с кэшем схемы:`},{heading:`ensureschemaready-array`,content:"Удаляет записи учёта без файлов и накатывает все ожидающие файлы из `modules/{Name}/Migrations/`."},{heading:`ensureschemaready-array`,content:"Если в настройках Admin включён **debug** — применяет `SyncTables` (без новых файлов)."},{heading:`ensureschemaready-array`,content:"Если debug выключен — `ModuleMigrationsGenerator` только при реальном расхождении: отдельный файл на таблицу в `Migrations` модуля-владельца модели, сразу накат."},{heading:`ensureschemaready-array`,content:"Пишет кэш `cycle_orm_schema.ser` с подписью Models."},{heading:`ensureschemaready-array`,content:`Повтор без смены сущностей и без ожидающих файлов читает кэш и не пишет миграции.`},{heading:`ensureschemaready-array`,content:`**Возвращает:** массив схемы Cycle ORM.`},{heading:`migratorentitypathresolver-path_resolver--null-migrator`,content:"**Описание:** `Migrator` Cycle над каталогами `Migrations` всех модулей: Admin — основной `directory`, остальные — `vendorDirectories`."},{heading:`generatemigrations-array`,content:"**Описание:** Создаёт файлы миграций по отличиям моделей от базы, ничего не накатывая (как `makemigrations` в Django)."},{heading:`generatemigrations-array`,content:"**Возвращает:** `list<string>` — пути новых файлов."},{heading:`generatemigrations-array`,content:"**Исключения:** `RuntimeException` — есть ожидающие миграции (сначала их нужно накатить)."},{heading:`applypending-int`,content:`**Описание:** Накатывает ожидающие миграции; уже существующие таблицы помечаются выполненными.`},{heading:`applypending-int`,content:"**Возвращает:** `int` — сколько миграций стало выполненными."},{heading:`markexecutedstate-state-void`,content:`**Описание:** Помечает миграцию выполненной без запуска SQL.`},{heading:`prunerecordswithoutfilesmigrator-migrator-int`,content:"**Описание:** Удаляет из `devcraft_migrations` записи, для которых нет файла. Таблицы с данными не меняются."},{heading:`prunerecordswithoutfilesmigrator-migrator-int`,content:"**Возвращает:** `int` — сколько записей удалено."},{heading:`dropcachedschema-void`,content:"**Описание:** Удаляет кэш `cycle_orm_schema.ser`."}],headings:[{id:`методы`,content:`Методы`},{id:`ensureschemaready-array`,content:"`ensureSchemaReady(): array`"},{id:`migratorentitypathresolver-path_resolver--null-migrator`,content:"`migrator(?EntityPathResolver $path_resolver = null): Migrator`"},{id:`generatemigrations-array`,content:"`generateMigrations(): array`"},{id:`applypending-int`,content:"`applyPending(): int`"},{id:`markexecutedstate-state-void`,content:"`markExecuted(State $state): void`"},{id:`prunerecordswithoutfilesmigrator-migrator-int`,content:"`pruneRecordsWithoutFiles(Migrator $migrator): int`"},{id:`dropcachedschema-void`,content:"`dropCachedSchema(): void`"}]},s=[{depth:2,url:`#методы`,title:(0,n.jsx)(n.Fragment,{children:`Методы`})},{depth:3,url:`#ensureschemaready-array`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`ensureSchemaReady(): array`})})},{depth:3,url:`#migratorentitypathresolver-path_resolver--null-migrator`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`migrator(?EntityPathResolver $path_resolver = null): Migrator`})})},{depth:3,url:`#generatemigrations-array`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`generateMigrations(): array`})})},{depth:3,url:`#applypending-int`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`applyPending(): int`})})},{depth:3,url:`#markexecutedstate-state-void`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`markExecuted(State $state): void`})})},{depth:3,url:`#prunerecordswithoutfilesmigrator-migrator-int`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`pruneRecordsWithoutFiles(Migrator $migrator): int`})})},{depth:3,url:`#dropcachedschema-void`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`dropCachedSchema(): void`})})}];function c(e){let t={a:`a`,code:`code`,h2:`h2`,h3:`h3`,li:`li`,ol:`ol`,p:`p`,strong:`strong`,...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Единая точка «убедись, что схема актуальна». Вызывается из `,(0,n.jsx)(t.a,{href:`DatabaseGateway`,children:(0,n.jsx)(t.code,{children:`DatabaseGateway`})}),` перед сборкой ORM.`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Namespace:`}),` `,(0,n.jsx)(t.code,{children:`DevCraft\\Core\\Database`})]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Путь:`}),` `,(0,n.jsx)(t.code,{children:`devcraft/src/classes/Database/SchemaSyncService.php`})]}),`
`,(0,n.jsx)(t.h2,{id:`методы`,children:`Методы`}),`
`,(0,n.jsx)(t.h3,{id:`ensureschemaready-array`,children:(0,n.jsx)(t.code,{children:`ensureSchemaReady(): array`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` С файловой блокировкой рядом с кэшем схемы:`]}),`
`,(0,n.jsxs)(t.ol,{children:[`
`,(0,n.jsxs)(t.li,{children:[`Удаляет записи учёта без файлов и накатывает все ожидающие файлы из `,(0,n.jsx)(t.code,{children:`modules/{Name}/Migrations/`}),`.`]}),`
`,(0,n.jsxs)(t.li,{children:[`Если в настройках Admin включён `,(0,n.jsx)(t.strong,{children:`debug`}),` — применяет `,(0,n.jsx)(t.code,{children:`SyncTables`}),` (без новых файлов).`]}),`
`,(0,n.jsxs)(t.li,{children:[`Если debug выключен — `,(0,n.jsx)(t.code,{children:`ModuleMigrationsGenerator`}),` только при реальном расхождении: отдельный файл на таблицу в `,(0,n.jsx)(t.code,{children:`Migrations`}),` модуля-владельца модели, сразу накат.`]}),`
`,(0,n.jsxs)(t.li,{children:[`Пишет кэш `,(0,n.jsx)(t.code,{children:`cycle_orm_schema.ser`}),` с подписью Models.`]}),`
`]}),`
`,(0,n.jsx)(t.p,{children:`Повтор без смены сущностей и без ожидающих файлов читает кэш и не пишет миграции.`}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` массив схемы Cycle ORM.`]}),`
`,(0,n.jsx)(t.h3,{id:`migratorentitypathresolver-path_resolver--null-migrator`,children:(0,n.jsx)(t.code,{children:`migrator(?EntityPathResolver $path_resolver = null): Migrator`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` `,(0,n.jsx)(t.code,{children:`Migrator`}),` Cycle над каталогами `,(0,n.jsx)(t.code,{children:`Migrations`}),` всех модулей: Admin — основной `,(0,n.jsx)(t.code,{children:`directory`}),`, остальные — `,(0,n.jsx)(t.code,{children:`vendorDirectories`}),`.`]}),`
`,(0,n.jsx)(t.h3,{id:`generatemigrations-array`,children:(0,n.jsx)(t.code,{children:`generateMigrations(): array`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Создаёт файлы миграций по отличиям моделей от базы, ничего не накатывая (как `,(0,n.jsx)(t.code,{children:`makemigrations`}),` в Django).`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`list<string>`}),` — пути новых файлов.`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Исключения:`}),` `,(0,n.jsx)(t.code,{children:`RuntimeException`}),` — есть ожидающие миграции (сначала их нужно накатить).`]}),`
`,(0,n.jsx)(t.h3,{id:`applypending-int`,children:(0,n.jsx)(t.code,{children:`applyPending(): int`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Накатывает ожидающие миграции; уже существующие таблицы помечаются выполненными.`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`int`}),` — сколько миграций стало выполненными.`]}),`
`,(0,n.jsx)(t.h3,{id:`markexecutedstate-state-void`,children:(0,n.jsx)(t.code,{children:`markExecuted(State $state): void`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Помечает миграцию выполненной без запуска SQL.`]}),`
`,(0,n.jsx)(t.h3,{id:`prunerecordswithoutfilesmigrator-migrator-int`,children:(0,n.jsx)(t.code,{children:`pruneRecordsWithoutFiles(Migrator $migrator): int`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Удаляет из `,(0,n.jsx)(t.code,{children:`devcraft_migrations`}),` записи, для которых нет файла. Таблицы с данными не меняются.`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`int`}),` — сколько записей удалено.`]}),`
`,(0,n.jsx)(t.h3,{id:`dropcachedschema-void`,children:(0,n.jsx)(t.code,{children:`dropCachedSchema(): void`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Удаляет кэш `,(0,n.jsx)(t.code,{children:`cycle_orm_schema.ser`}),`.`]})]})}function l(e={}){let{wrapper:t}=e.components||{};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}export{a as _markdown,l as default,r as frontmatter,i as lastModified,o as structuredData,s as toc};