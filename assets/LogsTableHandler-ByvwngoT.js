import{r as e}from"./rolldown-runtime-QTnfLwEv.js";import{t}from"./jsx-runtime-By8HlURe.js";var n=e(t()),r={title:`Класс: LogsTableHandler`,description:`Документация по плагину класс: logstablehandler для DLE.`},i=new Date(1787217967e3),a=`

## Краткое содержание: [#краткое-содержание]

AJAX-обработчик загрузки строк таблицы журнала с фильтрацией и сортировкой.

***

### Свойства [#свойства]

*Нет публичных свойств.*

***

### Методы [#методы]

* public [handle()](#method_handle)
* private [buildTableHeader()](#method_buildTableHeader)
* private [loadFilterSchema()](#method_loadFilterSchema)

***

### Подробности [#подробности]

* Путь: \`devcraft/src/modules/Admin/Ajax/LogsTableHandler.php\`

***

## Детали [#детали]

### Методы [#методы-1]

<span id="method_handle" />

### handle() [#handle]

Возвращает заголовок и строки таблицы журнала по текущим фильтрам.

**С версии:** 200.4.0

**Параметры:**

* \`$request\` — AJAX-запрос с параметрами фильтра и сортировки.

**Возвращает:** \`JsonResponse\` — JSON-ответ с колонками, строками и общим количеством.

<span id="method_buildTableHeader" />

### buildTableHeader() [#buildtableheader]

Формирует описание колонок таблицы журнала для Metro UI DataTable.

**С версии:** 200.4.0

**Параметры:**

* \`$schema\` — Схема фильтра с подписями колонок.
* \`$order\` — Имя колонки активной сортировки.
* \`$sort\` — Направление сортировки (\`ASC\` или \`DESC\`).

**Возвращает:** \`list<array<string, mixed>>\` — Массив описаний колонок таблицы.

<span id="method_loadFilterSchema" />

### loadFilterSchema() [#loadfilterschema]

Загружает схему фильтра журнала из файла модуля Admin.

**С версии:** 200.4.0

**Возвращает:** \`FilterSchema\` — Нормализованная схема фильтрации и сортировки.
`,o={contents:[{heading:`краткое-содержание`,content:`AJAX-обработчик загрузки строк таблицы журнала с фильтрацией и сортировкой.`},{heading:`свойства`,content:`*Нет публичных свойств.*`},{heading:`методы`,content:`public handle()`},{heading:`методы`,content:`private buildTableHeader()`},{heading:`методы`,content:`private loadFilterSchema()`},{heading:`подробности`,content:"Путь: `devcraft/src/modules/Admin/Ajax/LogsTableHandler.php`"},{heading:`handle`,content:`Возвращает заголовок и строки таблицы журнала по текущим фильтрам.`},{heading:`handle`,content:`**С версии:** 200.4.0`},{heading:`handle`,content:`**Параметры:**`},{heading:`handle`,content:"`$request` — AJAX-запрос с параметрами фильтра и сортировки."},{heading:`handle`,content:"**Возвращает:** `JsonResponse` — JSON-ответ с колонками, строками и общим количеством."},{heading:`buildtableheader`,content:`Формирует описание колонок таблицы журнала для Metro UI DataTable.`},{heading:`buildtableheader`,content:`**С версии:** 200.4.0`},{heading:`buildtableheader`,content:`**Параметры:**`},{heading:`buildtableheader`,content:"`$schema` — Схема фильтра с подписями колонок."},{heading:`buildtableheader`,content:"`$order` — Имя колонки активной сортировки."},{heading:`buildtableheader`,content:"`$sort` — Направление сортировки (`ASC` или `DESC`)."},{heading:`buildtableheader`,content:"**Возвращает:** `list<array<string, mixed>>` — Массив описаний колонок таблицы."},{heading:`loadfilterschema`,content:`Загружает схему фильтра журнала из файла модуля Admin.`},{heading:`loadfilterschema`,content:`**С версии:** 200.4.0`},{heading:`loadfilterschema`,content:"**Возвращает:** `FilterSchema` — Нормализованная схема фильтрации и сортировки."}],headings:[{id:`краткое-содержание`,content:`Краткое содержание:`},{id:`свойства`,content:`Свойства`},{id:`методы`,content:`Методы`},{id:`подробности`,content:`Подробности`},{id:`детали`,content:`Детали`},{id:`методы-1`,content:`Методы`},{id:`handle`,content:`handle()`},{id:`buildtableheader`,content:`buildTableHeader()`},{id:`loadfilterschema`,content:`loadFilterSchema()`}]},s=[{depth:2,url:`#краткое-содержание`,title:(0,n.jsx)(n.Fragment,{children:`Краткое содержание:`})},{depth:3,url:`#свойства`,title:(0,n.jsx)(n.Fragment,{children:`Свойства`})},{depth:3,url:`#методы`,title:(0,n.jsx)(n.Fragment,{children:`Методы`})},{depth:3,url:`#подробности`,title:(0,n.jsx)(n.Fragment,{children:`Подробности`})},{depth:2,url:`#детали`,title:(0,n.jsx)(n.Fragment,{children:`Детали`})},{depth:3,url:`#методы-1`,title:(0,n.jsx)(n.Fragment,{children:`Методы`})},{depth:3,url:`#handle`,title:(0,n.jsx)(n.Fragment,{children:`handle()`})},{depth:3,url:`#buildtableheader`,title:(0,n.jsx)(n.Fragment,{children:`buildTableHeader()`})},{depth:3,url:`#loadfilterschema`,title:(0,n.jsx)(n.Fragment,{children:`loadFilterSchema()`})}];function c(e){let t={a:`a`,code:`code`,em:`em`,h2:`h2`,h3:`h3`,hr:`hr`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h2,{id:`краткое-содержание`,children:`Краткое содержание:`}),`
`,(0,n.jsx)(t.p,{children:`AJAX-обработчик загрузки строк таблицы журнала с фильтрацией и сортировкой.`}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsx)(t.h3,{id:`свойства`,children:`Свойства`}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.em,{children:`Нет публичных свойств.`})}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsx)(t.h3,{id:`методы`,children:`Методы`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method_handle`,children:`handle()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`private `,(0,n.jsx)(t.a,{href:`#method_buildTableHeader`,children:`buildTableHeader()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`private `,(0,n.jsx)(t.a,{href:`#method_loadFilterSchema`,children:`loadFilterSchema()`})]}),`
`]}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsx)(t.h3,{id:`подробности`,children:`Подробности`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[`Путь: `,(0,n.jsx)(t.code,{children:`devcraft/src/modules/Admin/Ajax/LogsTableHandler.php`})]}),`
`]}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsx)(t.h2,{id:`детали`,children:`Детали`}),`
`,(0,n.jsx)(t.h3,{id:`методы-1`,children:`Методы`}),`
`,(0,n.jsx)(`span`,{id:`method_handle`}),`
`,(0,n.jsx)(t.h3,{id:`handle`,children:`handle()`}),`
`,(0,n.jsx)(t.p,{children:`Возвращает заголовок и строки таблицы журнала по текущим фильтрам.`}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 200.4.0`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$request`}),` — AJAX-запрос с параметрами фильтра и сортировки.`]}),`
`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`JsonResponse`}),` — JSON-ответ с колонками, строками и общим количеством.`]}),`
`,(0,n.jsx)(`span`,{id:`method_buildTableHeader`}),`
`,(0,n.jsx)(t.h3,{id:`buildtableheader`,children:`buildTableHeader()`}),`
`,(0,n.jsx)(t.p,{children:`Формирует описание колонок таблицы журнала для Metro UI DataTable.`}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 200.4.0`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$schema`}),` — Схема фильтра с подписями колонок.`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$order`}),` — Имя колонки активной сортировки.`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$sort`}),` — Направление сортировки (`,(0,n.jsx)(t.code,{children:`ASC`}),` или `,(0,n.jsx)(t.code,{children:`DESC`}),`).`]}),`
`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`list<array<string, mixed>>`}),` — Массив описаний колонок таблицы.`]}),`
`,(0,n.jsx)(`span`,{id:`method_loadFilterSchema`}),`
`,(0,n.jsx)(t.h3,{id:`loadfilterschema`,children:`loadFilterSchema()`}),`
`,(0,n.jsx)(t.p,{children:`Загружает схему фильтра журнала из файла модуля Admin.`}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 200.4.0`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`FilterSchema`}),` — Нормализованная схема фильтрации и сортировки.`]})]})}function l(e={}){let{wrapper:t}=e.components||{};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}export{a as _markdown,l as default,r as frontmatter,i as lastModified,o as structuredData,s as toc};