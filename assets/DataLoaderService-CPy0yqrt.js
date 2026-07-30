import{r as e}from"./rolldown-runtime-QTnfLwEv.js";import{t}from"./jsx-runtime-By8HlURe.js";var n=e(t()),r={title:`Класс: DataLoaderService`,description:`Документация по плагину класс: dataloaderservice для DLE.`},i=new Date(1785400635e3),a=`

## Краткое содержание: [#краткое-содержание]

Загружает строки из таблиц DLE через Cycle SelectQuery с кешированием.

***

### Свойства [#свойства]

*Нет публичных свойств.*

***

### Методы [#методы]

* public [\\_\\_construct()](#method___construct)
* public [loadData()](#method_loadData)
* public [clearCache()](#method_clearCache)
* private [normalizeArgs()](#method_normalizeArgs)
* private [executeQuery()](#method_executeQuery)
* private [applyWhere()](#method_applyWhere)
* private [applyOrder()](#method_applyOrder)
* private [normalizeSortDirection()](#method_normalizeSortDirection)
* private [resolveDatabaseForTable()](#method_resolveDatabaseForTable)
* private [resolvePrefix()](#method_resolvePrefix)
* private [readCache()](#method_readCache)
* private [writeCache()](#method_writeCache)

***

### Подробности [#подробности]

* Путь: \`devcraft/src/classes/Support/DataLoaderService.php\`

***

## Детали [#детали]

### Методы [#методы-1]

<span id="method___construct" />

### \\_\\_construct() [#__construct]

Создаёт сервис загрузки данных.

**С версии:** 173.3.0

**Параметры:**

* \`$db\` — Шлюз базы данных.
* \`$cacheTimer\` — Время жизни кеша в секундах.

<span id="method_loadData" />

### loadData() [#loaddata]

Загружает данные таблицы DLE с кешированием (legacy load\\_data).

**С версии:** 173.3.0

**Возвращает:** \`array<int, array<string, mixed>>\` — Строки результата или пустой массив при ошибке.

<span id="method_clearCache" />

### clearCache() [#clearcache]

Очищает кеш загрузчика целиком или по ключу.

**С версии:** 173.3.0

**Параметры:**

* \`$key\` — Ключ записи кеша или null для полной очистки типа.

<span id="method_normalizeArgs" />

### normalizeArgs() [#normalizeargs]

Сортирует ключи аргументов для стабильного ключа кеша.

**С версии:** 173.3.0

**Возвращает:** \`array<string,\` — mixed> Аргументы с ksort по ключам.

<span id="method_executeQuery" />

### executeQuery() [#executequery]

Выполняет SELECT к таблице DLE через Cycle SelectQuery.

**С версии:** 173.3.0

**Возвращает:** \`array<int, array<string, mixed>>\` — Строки результата fetchAll().

<span id="method_applyWhere" />

### applyWhere() [#applywhere]

Применяет условия where к SelectQuery.

**С версии:** 173.3.0

**Параметры:**

* \`$select\` — Объект запроса.

<span id="method_applyOrder" />

### applyOrder() [#applyorder]

Применяет сортировку orderBy к SelectQuery.

**С версии:** 173.3.0

**Параметры:**

* \`$select\` — Объект запроса.

<span id="method_normalizeSortDirection" />

### normalizeSortDirection() [#normalizesortdirection]

Нормализует направление сортировки в константу SelectQuery.

**С версии:** 173.3.0

**Параметры:**

* \`$direction\` — Строка ASC/DESC.

**Возвращает:** \`string\` — SelectQuery::SORT\\_ASC или SelectQuery::SORT\\_DESC.

<span id="method_resolveDatabaseForTable" />

### resolveDatabaseForTable() [#resolvedatabasefortable]

Возвращает Cycle Database с корректным префиксом таблицы.

**С версии:** 173.3.0

**Параметры:**

* \`$table\` — Имя таблицы без префикса.

**Возвращает:** \`DatabaseInterface\` — Подключение с нужным prefix.

<span id="method_resolvePrefix" />

### resolvePrefix() [#resolveprefix]

Определяет PREFIX или USERPREFIX для таблицы DLE.

**С версии:** 173.3.0

**Параметры:**

* \`$table\` — Имя таблицы.

**Возвращает:** \`string\` — Префикс без завершающего подчёркивания.

<span id="method_readCache" />

### readCache() [#readcache]

Читает закешированные строки, если TTL не истёк.

**С версии:** 173.3.0

**Параметры:**

* \`$cacheKey\` — Ключ записи кеша.

**Возвращает:** \`array<int, array<string, mixed>>\` — |null Строки или null при промахе/истечении.

<span id="method_writeCache" />

### writeCache() [#writecache]

Записывает строки результата в кеш.

**С версии:** 173.3.0

**Параметры:**

* \`$cacheKey\` — Ключ записи.
`,o={contents:[{heading:`краткое-содержание`,content:`Загружает строки из таблиц DLE через Cycle SelectQuery с кешированием.`},{heading:`свойства`,content:`*Нет публичных свойств.*`},{heading:`методы`,content:`public \\_\\_construct()`},{heading:`методы`,content:`public loadData()`},{heading:`методы`,content:`public clearCache()`},{heading:`методы`,content:`private normalizeArgs()`},{heading:`методы`,content:`private executeQuery()`},{heading:`методы`,content:`private applyWhere()`},{heading:`методы`,content:`private applyOrder()`},{heading:`методы`,content:`private normalizeSortDirection()`},{heading:`методы`,content:`private resolveDatabaseForTable()`},{heading:`методы`,content:`private resolvePrefix()`},{heading:`методы`,content:`private readCache()`},{heading:`методы`,content:`private writeCache()`},{heading:`подробности`,content:"Путь: `devcraft/src/classes/Support/DataLoaderService.php`"},{heading:`__construct`,content:`Создаёт сервис загрузки данных.`},{heading:`__construct`,content:`**С версии:** 173.3.0`},{heading:`__construct`,content:`**Параметры:**`},{heading:`__construct`,content:"`$db` — Шлюз базы данных."},{heading:`__construct`,content:"`$cacheTimer` — Время жизни кеша в секундах."},{heading:`loaddata`,content:`Загружает данные таблицы DLE с кешированием (legacy load\\_data).`},{heading:`loaddata`,content:`**С версии:** 173.3.0`},{heading:`loaddata`,content:"**Возвращает:** `array<int, array<string, mixed>>` — Строки результата или пустой массив при ошибке."},{heading:`clearcache`,content:`Очищает кеш загрузчика целиком или по ключу.`},{heading:`clearcache`,content:`**С версии:** 173.3.0`},{heading:`clearcache`,content:`**Параметры:**`},{heading:`clearcache`,content:"`$key` — Ключ записи кеша или null для полной очистки типа."},{heading:`normalizeargs`,content:`Сортирует ключи аргументов для стабильного ключа кеша.`},{heading:`normalizeargs`,content:`**С версии:** 173.3.0`},{heading:`normalizeargs`,content:"**Возвращает:** `array<string,` — mixed> Аргументы с ksort по ключам."},{heading:`executequery`,content:`Выполняет SELECT к таблице DLE через Cycle SelectQuery.`},{heading:`executequery`,content:`**С версии:** 173.3.0`},{heading:`executequery`,content:"**Возвращает:** `array<int, array<string, mixed>>` — Строки результата fetchAll()."},{heading:`applywhere`,content:`Применяет условия where к SelectQuery.`},{heading:`applywhere`,content:`**С версии:** 173.3.0`},{heading:`applywhere`,content:`**Параметры:**`},{heading:`applywhere`,content:"`$select` — Объект запроса."},{heading:`applyorder`,content:`Применяет сортировку orderBy к SelectQuery.`},{heading:`applyorder`,content:`**С версии:** 173.3.0`},{heading:`applyorder`,content:`**Параметры:**`},{heading:`applyorder`,content:"`$select` — Объект запроса."},{heading:`normalizesortdirection`,content:`Нормализует направление сортировки в константу SelectQuery.`},{heading:`normalizesortdirection`,content:`**С версии:** 173.3.0`},{heading:`normalizesortdirection`,content:`**Параметры:**`},{heading:`normalizesortdirection`,content:"`$direction` — Строка ASC/DESC."},{heading:`normalizesortdirection`,content:"**Возвращает:** `string` — SelectQuery::SORT\\_ASC или SelectQuery::SORT\\_DESC."},{heading:`resolvedatabasefortable`,content:`Возвращает Cycle Database с корректным префиксом таблицы.`},{heading:`resolvedatabasefortable`,content:`**С версии:** 173.3.0`},{heading:`resolvedatabasefortable`,content:`**Параметры:**`},{heading:`resolvedatabasefortable`,content:"`$table` — Имя таблицы без префикса."},{heading:`resolvedatabasefortable`,content:"**Возвращает:** `DatabaseInterface` — Подключение с нужным prefix."},{heading:`resolveprefix`,content:`Определяет PREFIX или USERPREFIX для таблицы DLE.`},{heading:`resolveprefix`,content:`**С версии:** 173.3.0`},{heading:`resolveprefix`,content:`**Параметры:**`},{heading:`resolveprefix`,content:"`$table` — Имя таблицы."},{heading:`resolveprefix`,content:"**Возвращает:** `string` — Префикс без завершающего подчёркивания."},{heading:`readcache`,content:`Читает закешированные строки, если TTL не истёк.`},{heading:`readcache`,content:`**С версии:** 173.3.0`},{heading:`readcache`,content:`**Параметры:**`},{heading:`readcache`,content:"`$cacheKey` — Ключ записи кеша."},{heading:`readcache`,content:"**Возвращает:** `array<int, array<string, mixed>>` — |null Строки или null при промахе/истечении."},{heading:`writecache`,content:`Записывает строки результата в кеш.`},{heading:`writecache`,content:`**С версии:** 173.3.0`},{heading:`writecache`,content:`**Параметры:**`},{heading:`writecache`,content:"`$cacheKey` — Ключ записи."}],headings:[{id:`краткое-содержание`,content:`Краткое содержание:`},{id:`свойства`,content:`Свойства`},{id:`методы`,content:`Методы`},{id:`подробности`,content:`Подробности`},{id:`детали`,content:`Детали`},{id:`методы-1`,content:`Методы`},{id:`__construct`,content:`\\__construct()`},{id:`loaddata`,content:`loadData()`},{id:`clearcache`,content:`clearCache()`},{id:`normalizeargs`,content:`normalizeArgs()`},{id:`executequery`,content:`executeQuery()`},{id:`applywhere`,content:`applyWhere()`},{id:`applyorder`,content:`applyOrder()`},{id:`normalizesortdirection`,content:`normalizeSortDirection()`},{id:`resolvedatabasefortable`,content:`resolveDatabaseForTable()`},{id:`resolveprefix`,content:`resolvePrefix()`},{id:`readcache`,content:`readCache()`},{id:`writecache`,content:`writeCache()`}]},s=[{depth:2,url:`#краткое-содержание`,title:(0,n.jsx)(n.Fragment,{children:`Краткое содержание:`})},{depth:3,url:`#свойства`,title:(0,n.jsx)(n.Fragment,{children:`Свойства`})},{depth:3,url:`#методы`,title:(0,n.jsx)(n.Fragment,{children:`Методы`})},{depth:3,url:`#подробности`,title:(0,n.jsx)(n.Fragment,{children:`Подробности`})},{depth:2,url:`#детали`,title:(0,n.jsx)(n.Fragment,{children:`Детали`})},{depth:3,url:`#методы-1`,title:(0,n.jsx)(n.Fragment,{children:`Методы`})},{depth:3,url:`#__construct`,title:(0,n.jsx)(n.Fragment,{children:`__construct()`})},{depth:3,url:`#loaddata`,title:(0,n.jsx)(n.Fragment,{children:`loadData()`})},{depth:3,url:`#clearcache`,title:(0,n.jsx)(n.Fragment,{children:`clearCache()`})},{depth:3,url:`#normalizeargs`,title:(0,n.jsx)(n.Fragment,{children:`normalizeArgs()`})},{depth:3,url:`#executequery`,title:(0,n.jsx)(n.Fragment,{children:`executeQuery()`})},{depth:3,url:`#applywhere`,title:(0,n.jsx)(n.Fragment,{children:`applyWhere()`})},{depth:3,url:`#applyorder`,title:(0,n.jsx)(n.Fragment,{children:`applyOrder()`})},{depth:3,url:`#normalizesortdirection`,title:(0,n.jsx)(n.Fragment,{children:`normalizeSortDirection()`})},{depth:3,url:`#resolvedatabasefortable`,title:(0,n.jsx)(n.Fragment,{children:`resolveDatabaseForTable()`})},{depth:3,url:`#resolveprefix`,title:(0,n.jsx)(n.Fragment,{children:`resolvePrefix()`})},{depth:3,url:`#readcache`,title:(0,n.jsx)(n.Fragment,{children:`readCache()`})},{depth:3,url:`#writecache`,title:(0,n.jsx)(n.Fragment,{children:`writeCache()`})}];function c(e){let t={a:`a`,code:`code`,em:`em`,h2:`h2`,h3:`h3`,hr:`hr`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h2,{id:`краткое-содержание`,children:`Краткое содержание:`}),`
`,(0,n.jsx)(t.p,{children:`Загружает строки из таблиц DLE через Cycle SelectQuery с кешированием.`}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsx)(t.h3,{id:`свойства`,children:`Свойства`}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.em,{children:`Нет публичных свойств.`})}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsx)(t.h3,{id:`методы`,children:`Методы`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method___construct`,children:`__construct()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method_loadData`,children:`loadData()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method_clearCache`,children:`clearCache()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`private `,(0,n.jsx)(t.a,{href:`#method_normalizeArgs`,children:`normalizeArgs()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`private `,(0,n.jsx)(t.a,{href:`#method_executeQuery`,children:`executeQuery()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`private `,(0,n.jsx)(t.a,{href:`#method_applyWhere`,children:`applyWhere()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`private `,(0,n.jsx)(t.a,{href:`#method_applyOrder`,children:`applyOrder()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`private `,(0,n.jsx)(t.a,{href:`#method_normalizeSortDirection`,children:`normalizeSortDirection()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`private `,(0,n.jsx)(t.a,{href:`#method_resolveDatabaseForTable`,children:`resolveDatabaseForTable()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`private `,(0,n.jsx)(t.a,{href:`#method_resolvePrefix`,children:`resolvePrefix()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`private `,(0,n.jsx)(t.a,{href:`#method_readCache`,children:`readCache()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`private `,(0,n.jsx)(t.a,{href:`#method_writeCache`,children:`writeCache()`})]}),`
`]}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsx)(t.h3,{id:`подробности`,children:`Подробности`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[`Путь: `,(0,n.jsx)(t.code,{children:`devcraft/src/classes/Support/DataLoaderService.php`})]}),`
`]}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsx)(t.h2,{id:`детали`,children:`Детали`}),`
`,(0,n.jsx)(t.h3,{id:`методы-1`,children:`Методы`}),`
`,(0,n.jsx)(`span`,{id:`method___construct`}),`
`,(0,n.jsx)(t.h3,{id:`__construct`,children:`__construct()`}),`
`,(0,n.jsx)(t.p,{children:`Создаёт сервис загрузки данных.`}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 173.3.0`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$db`}),` — Шлюз базы данных.`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$cacheTimer`}),` — Время жизни кеша в секундах.`]}),`
`]}),`
`,(0,n.jsx)(`span`,{id:`method_loadData`}),`
`,(0,n.jsx)(t.h3,{id:`loaddata`,children:`loadData()`}),`
`,(0,n.jsx)(t.p,{children:`Загружает данные таблицы DLE с кешированием (legacy load_data).`}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 173.3.0`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`array<int, array<string, mixed>>`}),` — Строки результата или пустой массив при ошибке.`]}),`
`,(0,n.jsx)(`span`,{id:`method_clearCache`}),`
`,(0,n.jsx)(t.h3,{id:`clearcache`,children:`clearCache()`}),`
`,(0,n.jsx)(t.p,{children:`Очищает кеш загрузчика целиком или по ключу.`}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 173.3.0`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$key`}),` — Ключ записи кеша или null для полной очистки типа.`]}),`
`]}),`
`,(0,n.jsx)(`span`,{id:`method_normalizeArgs`}),`
`,(0,n.jsx)(t.h3,{id:`normalizeargs`,children:`normalizeArgs()`}),`
`,(0,n.jsx)(t.p,{children:`Сортирует ключи аргументов для стабильного ключа кеша.`}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 173.3.0`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`array<string,`}),` — mixed> Аргументы с ksort по ключам.`]}),`
`,(0,n.jsx)(`span`,{id:`method_executeQuery`}),`
`,(0,n.jsx)(t.h3,{id:`executequery`,children:`executeQuery()`}),`
`,(0,n.jsx)(t.p,{children:`Выполняет SELECT к таблице DLE через Cycle SelectQuery.`}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 173.3.0`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`array<int, array<string, mixed>>`}),` — Строки результата fetchAll().`]}),`
`,(0,n.jsx)(`span`,{id:`method_applyWhere`}),`
`,(0,n.jsx)(t.h3,{id:`applywhere`,children:`applyWhere()`}),`
`,(0,n.jsx)(t.p,{children:`Применяет условия where к SelectQuery.`}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 173.3.0`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$select`}),` — Объект запроса.`]}),`
`]}),`
`,(0,n.jsx)(`span`,{id:`method_applyOrder`}),`
`,(0,n.jsx)(t.h3,{id:`applyorder`,children:`applyOrder()`}),`
`,(0,n.jsx)(t.p,{children:`Применяет сортировку orderBy к SelectQuery.`}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 173.3.0`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$select`}),` — Объект запроса.`]}),`
`]}),`
`,(0,n.jsx)(`span`,{id:`method_normalizeSortDirection`}),`
`,(0,n.jsx)(t.h3,{id:`normalizesortdirection`,children:`normalizeSortDirection()`}),`
`,(0,n.jsx)(t.p,{children:`Нормализует направление сортировки в константу SelectQuery.`}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 173.3.0`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$direction`}),` — Строка ASC/DESC.`]}),`
`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`string`}),` — SelectQuery::SORT_ASC или SelectQuery::SORT_DESC.`]}),`
`,(0,n.jsx)(`span`,{id:`method_resolveDatabaseForTable`}),`
`,(0,n.jsx)(t.h3,{id:`resolvedatabasefortable`,children:`resolveDatabaseForTable()`}),`
`,(0,n.jsx)(t.p,{children:`Возвращает Cycle Database с корректным префиксом таблицы.`}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 173.3.0`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$table`}),` — Имя таблицы без префикса.`]}),`
`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`DatabaseInterface`}),` — Подключение с нужным prefix.`]}),`
`,(0,n.jsx)(`span`,{id:`method_resolvePrefix`}),`
`,(0,n.jsx)(t.h3,{id:`resolveprefix`,children:`resolvePrefix()`}),`
`,(0,n.jsx)(t.p,{children:`Определяет PREFIX или USERPREFIX для таблицы DLE.`}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 173.3.0`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$table`}),` — Имя таблицы.`]}),`
`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`string`}),` — Префикс без завершающего подчёркивания.`]}),`
`,(0,n.jsx)(`span`,{id:`method_readCache`}),`
`,(0,n.jsx)(t.h3,{id:`readcache`,children:`readCache()`}),`
`,(0,n.jsx)(t.p,{children:`Читает закешированные строки, если TTL не истёк.`}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 173.3.0`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$cacheKey`}),` — Ключ записи кеша.`]}),`
`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`array<int, array<string, mixed>>`}),` — |null Строки или null при промахе/истечении.`]}),`
`,(0,n.jsx)(`span`,{id:`method_writeCache`}),`
`,(0,n.jsx)(t.h3,{id:`writecache`,children:`writeCache()`}),`
`,(0,n.jsx)(t.p,{children:`Записывает строки результата в кеш.`}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 173.3.0`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$cacheKey`}),` — Ключ записи.`]}),`
`]})]})}function l(e={}){let{wrapper:t}=e.components||{};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}export{a as _markdown,l as default,r as frontmatter,i as lastModified,o as structuredData,s as toc};