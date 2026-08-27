import{r as e}from"./rolldown-runtime-QTnfLwEv.js";import{t}from"./jsx-runtime-By8HlURe.js";var n=e(t()),r={title:`Класс: DataLoaderService`,description:`Static-фасад загрузки и записи строк DLE через Cycle Database с кешированием SELECT.`,version:`200.4.0`},i=new Date(1787750944e3),a=`

## Краткое содержание [#краткое-содержание]

Загружает и изменяет строки таблиц DLE через Cycle Database. **Static API** — БД из \`Application::instance()->database()\`.

**Путь:** \`devcraft/src/classes/Support/DataLoaderService.php\`

**См. также:** [QueryBuilder](./QueryBuilder), [DleDataService](./DleDataService), [гайд DataLoader](../../../guides/data_loader)

## Методы [#методы]

* public static [loadData()](#method_loadData)
* public static [loadOne()](#method_loadOne)
* public static [insert()](#method_insert)
* public static [update()](#method_update)
* public static [delete()](#method_delete)
* public static [clearCache()](#method_clearCache)

<span id="method_loadData" />

### loadData() [#loaddata]

\`DataLoaderService::loadData(array|QueryBuilder $args): array\`

Загружает данные таблицы DLE с кешированием. Dual accept: массив или [QueryBuilder](./QueryBuilder).

**С версии:** 173.3.0 (static с 200.4.0)

<span id="method_loadOne" />

### loadOne() [#loadone]

\`DataLoaderService::loadOne(array|QueryBuilder $args): array\`

Первая строка или \`[]\`.

**С версии:** 200.4.0

<span id="method_insert" />

### insert() [#insert]

\`DataLoaderService::insert(QueryBuilder $query): array\`

INSERT по \`values\`, затем reload по \`primaryKey\` (по умолчанию \`id\`) и lastInsertId. Возвращает созданную строку или \`[]\`.

**С версии:** 200.4.0

<span id="method_update" />

### update() [#update]

\`DataLoaderService::update(QueryBuilder $query): array\`

UPDATE по \`values\` + \`conditions\`, затем SELECT всех совпавших строк. В \`values\` допускаются \`Fragment\` (например \`pm_all+1\`).

**С версии:** 200.4.0

<span id="method_delete" />

### delete() [#delete]

\`DataLoaderService::delete(QueryBuilder $query): bool\`

DELETE по \`conditions\`. Без conditions не выполняется (защита от полной очистки таблицы). \`true\` при успехе, \`false\` при ошибке или пустых conditions.

**С версии:** 200.4.0

<span id="method_clearCache" />

### clearCache() [#clearcache]

\`DataLoaderService::clearCache(?string $key = null): void\`

Очищает кеш загрузчика целиком или по ключу.
`,o={contents:[{heading:`краткое-содержание`,content:"Загружает и изменяет строки таблиц DLE через Cycle Database. **Static API** — БД из `Application::instance()->database()`."},{heading:`краткое-содержание`,content:"**Путь:** `devcraft/src/classes/Support/DataLoaderService.php`"},{heading:`краткое-содержание`,content:`**См. также:** QueryBuilder, DleDataService, гайд DataLoader`},{heading:`методы`,content:`public static loadData()`},{heading:`методы`,content:`public static loadOne()`},{heading:`методы`,content:`public static insert()`},{heading:`методы`,content:`public static update()`},{heading:`методы`,content:`public static delete()`},{heading:`методы`,content:`public static clearCache()`},{heading:`loaddata`,content:"`DataLoaderService::loadData(array|QueryBuilder $args): array`"},{heading:`loaddata`,content:`Загружает данные таблицы DLE с кешированием. Dual accept: массив или QueryBuilder.`},{heading:`loaddata`,content:`**С версии:** 173.3.0 (static с 200.4.0)`},{heading:`loadone`,content:"`DataLoaderService::loadOne(array|QueryBuilder $args): array`"},{heading:`loadone`,content:"Первая строка или `[]`."},{heading:`loadone`,content:`**С версии:** 200.4.0`},{heading:`insert`,content:"`DataLoaderService::insert(QueryBuilder $query): array`"},{heading:`insert`,content:"INSERT по `values`, затем reload по `primaryKey` (по умолчанию `id`) и lastInsertId. Возвращает созданную строку или `[]`."},{heading:`insert`,content:`**С версии:** 200.4.0`},{heading:`update`,content:"`DataLoaderService::update(QueryBuilder $query): array`"},{heading:`update`,content:"UPDATE по `values` + `conditions`, затем SELECT всех совпавших строк. В `values` допускаются `Fragment` (например `pm_all+1`)."},{heading:`update`,content:`**С версии:** 200.4.0`},{heading:`delete`,content:"`DataLoaderService::delete(QueryBuilder $query): bool`"},{heading:`delete`,content:"DELETE по `conditions`. Без conditions не выполняется (защита от полной очистки таблицы). `true` при успехе, `false` при ошибке или пустых conditions."},{heading:`delete`,content:`**С версии:** 200.4.0`},{heading:`clearcache`,content:"`DataLoaderService::clearCache(?string $key = null): void`"},{heading:`clearcache`,content:`Очищает кеш загрузчика целиком или по ключу.`}],headings:[{id:`краткое-содержание`,content:`Краткое содержание`},{id:`методы`,content:`Методы`},{id:`loaddata`,content:`loadData()`},{id:`loadone`,content:`loadOne()`},{id:`insert`,content:`insert()`},{id:`update`,content:`update()`},{id:`delete`,content:`delete()`},{id:`clearcache`,content:`clearCache()`}]},s=[{depth:2,url:`#краткое-содержание`,title:(0,n.jsx)(n.Fragment,{children:`Краткое содержание`})},{depth:2,url:`#методы`,title:(0,n.jsx)(n.Fragment,{children:`Методы`})},{depth:3,url:`#loaddata`,title:(0,n.jsx)(n.Fragment,{children:`loadData()`})},{depth:3,url:`#loadone`,title:(0,n.jsx)(n.Fragment,{children:`loadOne()`})},{depth:3,url:`#insert`,title:(0,n.jsx)(n.Fragment,{children:`insert()`})},{depth:3,url:`#update`,title:(0,n.jsx)(n.Fragment,{children:`update()`})},{depth:3,url:`#delete`,title:(0,n.jsx)(n.Fragment,{children:`delete()`})},{depth:3,url:`#clearcache`,title:(0,n.jsx)(n.Fragment,{children:`clearCache()`})}];function c(e){let t={a:`a`,code:`code`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h2,{id:`краткое-содержание`,children:`Краткое содержание`}),`
`,(0,n.jsxs)(t.p,{children:[`Загружает и изменяет строки таблиц DLE через Cycle Database. `,(0,n.jsx)(t.strong,{children:`Static API`}),` — БД из `,(0,n.jsx)(t.code,{children:`Application::instance()->database()`}),`.`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Путь:`}),` `,(0,n.jsx)(t.code,{children:`devcraft/src/classes/Support/DataLoaderService.php`})]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`См. также:`}),` `,(0,n.jsx)(t.a,{href:`./QueryBuilder`,children:`QueryBuilder`}),`, `,(0,n.jsx)(t.a,{href:`./DleDataService`,children:`DleDataService`}),`, `,(0,n.jsx)(t.a,{href:`../../../guides/data_loader`,children:`гайд DataLoader`})]}),`
`,(0,n.jsx)(t.h2,{id:`методы`,children:`Методы`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[`public static `,(0,n.jsx)(t.a,{href:`#method_loadData`,children:`loadData()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`public static `,(0,n.jsx)(t.a,{href:`#method_loadOne`,children:`loadOne()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`public static `,(0,n.jsx)(t.a,{href:`#method_insert`,children:`insert()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`public static `,(0,n.jsx)(t.a,{href:`#method_update`,children:`update()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`public static `,(0,n.jsx)(t.a,{href:`#method_delete`,children:`delete()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`public static `,(0,n.jsx)(t.a,{href:`#method_clearCache`,children:`clearCache()`})]}),`
`]}),`
`,(0,n.jsx)(`span`,{id:`method_loadData`}),`
`,(0,n.jsx)(t.h3,{id:`loaddata`,children:`loadData()`}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.code,{children:`DataLoaderService::loadData(array|QueryBuilder $args): array`})}),`
`,(0,n.jsxs)(t.p,{children:[`Загружает данные таблицы DLE с кешированием. Dual accept: массив или `,(0,n.jsx)(t.a,{href:`./QueryBuilder`,children:`QueryBuilder`}),`.`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 173.3.0 (static с 200.4.0)`]}),`
`,(0,n.jsx)(`span`,{id:`method_loadOne`}),`
`,(0,n.jsx)(t.h3,{id:`loadone`,children:`loadOne()`}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.code,{children:`DataLoaderService::loadOne(array|QueryBuilder $args): array`})}),`
`,(0,n.jsxs)(t.p,{children:[`Первая строка или `,(0,n.jsx)(t.code,{children:`[]`}),`.`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 200.4.0`]}),`
`,(0,n.jsx)(`span`,{id:`method_insert`}),`
`,(0,n.jsx)(t.h3,{id:`insert`,children:`insert()`}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.code,{children:`DataLoaderService::insert(QueryBuilder $query): array`})}),`
`,(0,n.jsxs)(t.p,{children:[`INSERT по `,(0,n.jsx)(t.code,{children:`values`}),`, затем reload по `,(0,n.jsx)(t.code,{children:`primaryKey`}),` (по умолчанию `,(0,n.jsx)(t.code,{children:`id`}),`) и lastInsertId. Возвращает созданную строку или `,(0,n.jsx)(t.code,{children:`[]`}),`.`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 200.4.0`]}),`
`,(0,n.jsx)(`span`,{id:`method_update`}),`
`,(0,n.jsx)(t.h3,{id:`update`,children:`update()`}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.code,{children:`DataLoaderService::update(QueryBuilder $query): array`})}),`
`,(0,n.jsxs)(t.p,{children:[`UPDATE по `,(0,n.jsx)(t.code,{children:`values`}),` + `,(0,n.jsx)(t.code,{children:`conditions`}),`, затем SELECT всех совпавших строк. В `,(0,n.jsx)(t.code,{children:`values`}),` допускаются `,(0,n.jsx)(t.code,{children:`Fragment`}),` (например `,(0,n.jsx)(t.code,{children:`pm_all+1`}),`).`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 200.4.0`]}),`
`,(0,n.jsx)(`span`,{id:`method_delete`}),`
`,(0,n.jsx)(t.h3,{id:`delete`,children:`delete()`}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.code,{children:`DataLoaderService::delete(QueryBuilder $query): bool`})}),`
`,(0,n.jsxs)(t.p,{children:[`DELETE по `,(0,n.jsx)(t.code,{children:`conditions`}),`. Без conditions не выполняется (защита от полной очистки таблицы). `,(0,n.jsx)(t.code,{children:`true`}),` при успехе, `,(0,n.jsx)(t.code,{children:`false`}),` при ошибке или пустых conditions.`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 200.4.0`]}),`
`,(0,n.jsx)(`span`,{id:`method_clearCache`}),`
`,(0,n.jsx)(t.h3,{id:`clearcache`,children:`clearCache()`}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.code,{children:`DataLoaderService::clearCache(?string $key = null): void`})}),`
`,(0,n.jsx)(t.p,{children:`Очищает кеш загрузчика целиком или по ключу.`})]})}function l(e={}){let{wrapper:t}=e.components||{};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}export{a as _markdown,l as default,r as frontmatter,i as lastModified,o as structuredData,s as toc};