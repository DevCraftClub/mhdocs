import{r as e}from"./rolldown-runtime-QTnfLwEv.js";import{t}from"./jsx-runtime-By8HlURe.js";var n=e(t()),r={title:`Класс: FilterSchema`,description:`Документация по плагину класс: filterschema для DLE.`},i=new Date(1787124777e3),a=`

## Краткое содержание: [#краткое-содержание]

Декларативная схема фильтра списковых страниц админки.

***

### Свойства [#свойства]

* public $[sections](#property_sections)
* public $[defaultOrder](#property_defaultOrder)
* public $[sortColumns](#property_sortColumns)

***

### Методы [#методы]

* public [\\_\\_construct()](#method___construct)
* public [fromArray()](#method_fromArray)
* public [toArray()](#method_toArray)
* public [allFields()](#method_allFields)
* public [resolvedSortColumns()](#method_resolvedSortColumns)
* public [sortColumnKeys()](#method_sortColumnKeys)
* public [filterDbColumns()](#method_filterDbColumns)

***

### Подробности [#подробности]

* Путь: \`devcraft/src/classes/Types/FilterSchema.php\`

***

## Детали [#детали]

### Свойства [#свойства-1]

<span id="property_sections" />

#### $sections [#sections]

Секции полей фильтра.

<span id="property_defaultOrder" />

#### $defaultOrder [#defaultorder]

Колонка сортировки по умолчанию.

<span id="property_sortColumns" />

#### $sortColumns [#sortcolumns]

Явная карта колонок сортировки.

### Методы [#методы-1]

<span id="method___construct" />

### \\_\\_construct() [#__construct]

Создаёт схему фильтра.

**С версии:** 200.4.0

**Параметры:**

* \`$sections\` — Секции полей фильтра.
* \`$defaultOrder\` — Колонка сортировки по умолчанию.
* \`$sortColumns\` — Явная карта колонок сортировки.

<span id="method_fromArray" />

### fromArray() [#fromarray]

Создаёт схему фильтра из ассоциативного массива.

**С версии:** 200.4.0

**Возвращает:** \`static\` — Новый экземпляр схемы.

<span id="method_toArray" />

### toArray() [#toarray]

Преобразует схему фильтра в ассоциативный массив.

**С версии:** 200.4.0

**Возвращает:** \`array<string,\` — mixed> Сериализованная схема.

<span id="method_allFields" />

### allFields() [#allfields]

Возвращает плоский список всех полей фильтра.

**С версии:** 200.4.0

**Возвращает:** \`FormField[]\` — Все поля всех секций.

<span id="method_resolvedSortColumns" />

### resolvedSortColumns() [#resolvedsortcolumns]

Возвращает карту колонок сортировки с учётом явных и выведенных значений.

**С версии:** 200.4.0

**Возвращает:** \`array<string,\` — string> Карта \`column => label\`.

<span id="method_sortColumnKeys" />

### sortColumnKeys() [#sortcolumnkeys]

Возвращает ключи колонок сортировки.

**С версии:** 200.4.0

**Возвращает:** \`list<string>\` — Список имён колонок БД.

<span id="method_filterDbColumns" />

### filterDbColumns() [#filterdbcolumns]

Возвращает имена колонок БД, участвующих в фильтрации.

**С версии:** 200.4.0

**Возвращает:** \`list<string>\` — Список имён колонок.
`,o={contents:[{heading:`краткое-содержание`,content:`Декларативная схема фильтра списковых страниц админки.`},{heading:`свойства`,content:`public $sections`},{heading:`свойства`,content:`public $defaultOrder`},{heading:`свойства`,content:`public $sortColumns`},{heading:`методы`,content:`public \\_\\_construct()`},{heading:`методы`,content:`public fromArray()`},{heading:`методы`,content:`public toArray()`},{heading:`методы`,content:`public allFields()`},{heading:`методы`,content:`public resolvedSortColumns()`},{heading:`методы`,content:`public sortColumnKeys()`},{heading:`методы`,content:`public filterDbColumns()`},{heading:`подробности`,content:"Путь: `devcraft/src/classes/Types/FilterSchema.php`"},{heading:`sections`,content:`Секции полей фильтра.`},{heading:`defaultorder`,content:`Колонка сортировки по умолчанию.`},{heading:`sortcolumns`,content:`Явная карта колонок сортировки.`},{heading:`__construct`,content:`Создаёт схему фильтра.`},{heading:`__construct`,content:`**С версии:** 200.4.0`},{heading:`__construct`,content:`**Параметры:**`},{heading:`__construct`,content:"`$sections` — Секции полей фильтра."},{heading:`__construct`,content:"`$defaultOrder` — Колонка сортировки по умолчанию."},{heading:`__construct`,content:"`$sortColumns` — Явная карта колонок сортировки."},{heading:`fromarray`,content:`Создаёт схему фильтра из ассоциативного массива.`},{heading:`fromarray`,content:`**С версии:** 200.4.0`},{heading:`fromarray`,content:"**Возвращает:** `static` — Новый экземпляр схемы."},{heading:`toarray`,content:`Преобразует схему фильтра в ассоциативный массив.`},{heading:`toarray`,content:`**С версии:** 200.4.0`},{heading:`toarray`,content:"**Возвращает:** `array<string,` — mixed> Сериализованная схема."},{heading:`allfields`,content:`Возвращает плоский список всех полей фильтра.`},{heading:`allfields`,content:`**С версии:** 200.4.0`},{heading:`allfields`,content:"**Возвращает:** `FormField[]` — Все поля всех секций."},{heading:`resolvedsortcolumns`,content:`Возвращает карту колонок сортировки с учётом явных и выведенных значений.`},{heading:`resolvedsortcolumns`,content:`**С версии:** 200.4.0`},{heading:`resolvedsortcolumns`,content:"**Возвращает:** `array<string,` — string> Карта `column => label`."},{heading:`sortcolumnkeys`,content:`Возвращает ключи колонок сортировки.`},{heading:`sortcolumnkeys`,content:`**С версии:** 200.4.0`},{heading:`sortcolumnkeys`,content:"**Возвращает:** `list<string>` — Список имён колонок БД."},{heading:`filterdbcolumns`,content:`Возвращает имена колонок БД, участвующих в фильтрации.`},{heading:`filterdbcolumns`,content:`**С версии:** 200.4.0`},{heading:`filterdbcolumns`,content:"**Возвращает:** `list<string>` — Список имён колонок."}],headings:[{id:`краткое-содержание`,content:`Краткое содержание:`},{id:`свойства`,content:`Свойства`},{id:`методы`,content:`Методы`},{id:`подробности`,content:`Подробности`},{id:`детали`,content:`Детали`},{id:`свойства-1`,content:`Свойства`},{id:`sections`,content:`$sections`},{id:`defaultorder`,content:`$defaultOrder`},{id:`sortcolumns`,content:`$sortColumns`},{id:`методы-1`,content:`Методы`},{id:`__construct`,content:`\\__construct()`},{id:`fromarray`,content:`fromArray()`},{id:`toarray`,content:`toArray()`},{id:`allfields`,content:`allFields()`},{id:`resolvedsortcolumns`,content:`resolvedSortColumns()`},{id:`sortcolumnkeys`,content:`sortColumnKeys()`},{id:`filterdbcolumns`,content:`filterDbColumns()`}]},s=[{depth:2,url:`#краткое-содержание`,title:(0,n.jsx)(n.Fragment,{children:`Краткое содержание:`})},{depth:3,url:`#свойства`,title:(0,n.jsx)(n.Fragment,{children:`Свойства`})},{depth:3,url:`#методы`,title:(0,n.jsx)(n.Fragment,{children:`Методы`})},{depth:3,url:`#подробности`,title:(0,n.jsx)(n.Fragment,{children:`Подробности`})},{depth:2,url:`#детали`,title:(0,n.jsx)(n.Fragment,{children:`Детали`})},{depth:3,url:`#свойства-1`,title:(0,n.jsx)(n.Fragment,{children:`Свойства`})},{depth:4,url:`#sections`,title:(0,n.jsx)(n.Fragment,{children:`$sections`})},{depth:4,url:`#defaultorder`,title:(0,n.jsx)(n.Fragment,{children:`$defaultOrder`})},{depth:4,url:`#sortcolumns`,title:(0,n.jsx)(n.Fragment,{children:`$sortColumns`})},{depth:3,url:`#методы-1`,title:(0,n.jsx)(n.Fragment,{children:`Методы`})},{depth:3,url:`#__construct`,title:(0,n.jsx)(n.Fragment,{children:`__construct()`})},{depth:3,url:`#fromarray`,title:(0,n.jsx)(n.Fragment,{children:`fromArray()`})},{depth:3,url:`#toarray`,title:(0,n.jsx)(n.Fragment,{children:`toArray()`})},{depth:3,url:`#allfields`,title:(0,n.jsx)(n.Fragment,{children:`allFields()`})},{depth:3,url:`#resolvedsortcolumns`,title:(0,n.jsx)(n.Fragment,{children:`resolvedSortColumns()`})},{depth:3,url:`#sortcolumnkeys`,title:(0,n.jsx)(n.Fragment,{children:`sortColumnKeys()`})},{depth:3,url:`#filterdbcolumns`,title:(0,n.jsx)(n.Fragment,{children:`filterDbColumns()`})}];function c(e){let t={a:`a`,code:`code`,h2:`h2`,h3:`h3`,h4:`h4`,hr:`hr`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h2,{id:`краткое-содержание`,children:`Краткое содержание:`}),`
`,(0,n.jsx)(t.p,{children:`Декларативная схема фильтра списковых страниц админки.`}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsx)(t.h3,{id:`свойства`,children:`Свойства`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[`public $`,(0,n.jsx)(t.a,{href:`#property_sections`,children:`sections`})]}),`
`,(0,n.jsxs)(t.li,{children:[`public $`,(0,n.jsx)(t.a,{href:`#property_defaultOrder`,children:`defaultOrder`})]}),`
`,(0,n.jsxs)(t.li,{children:[`public $`,(0,n.jsx)(t.a,{href:`#property_sortColumns`,children:`sortColumns`})]}),`
`]}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsx)(t.h3,{id:`методы`,children:`Методы`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method___construct`,children:`__construct()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method_fromArray`,children:`fromArray()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method_toArray`,children:`toArray()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method_allFields`,children:`allFields()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method_resolvedSortColumns`,children:`resolvedSortColumns()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method_sortColumnKeys`,children:`sortColumnKeys()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method_filterDbColumns`,children:`filterDbColumns()`})]}),`
`]}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsx)(t.h3,{id:`подробности`,children:`Подробности`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[`Путь: `,(0,n.jsx)(t.code,{children:`devcraft/src/classes/Types/FilterSchema.php`})]}),`
`]}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsx)(t.h2,{id:`детали`,children:`Детали`}),`
`,(0,n.jsx)(t.h3,{id:`свойства-1`,children:`Свойства`}),`
`,(0,n.jsx)(`span`,{id:`property_sections`}),`
`,(0,n.jsx)(t.h4,{id:`sections`,children:`$sections`}),`
`,(0,n.jsx)(t.p,{children:`Секции полей фильтра.`}),`
`,(0,n.jsx)(`span`,{id:`property_defaultOrder`}),`
`,(0,n.jsx)(t.h4,{id:`defaultorder`,children:`$defaultOrder`}),`
`,(0,n.jsx)(t.p,{children:`Колонка сортировки по умолчанию.`}),`
`,(0,n.jsx)(`span`,{id:`property_sortColumns`}),`
`,(0,n.jsx)(t.h4,{id:`sortcolumns`,children:`$sortColumns`}),`
`,(0,n.jsx)(t.p,{children:`Явная карта колонок сортировки.`}),`
`,(0,n.jsx)(t.h3,{id:`методы-1`,children:`Методы`}),`
`,(0,n.jsx)(`span`,{id:`method___construct`}),`
`,(0,n.jsx)(t.h3,{id:`__construct`,children:`__construct()`}),`
`,(0,n.jsx)(t.p,{children:`Создаёт схему фильтра.`}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 200.4.0`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$sections`}),` — Секции полей фильтра.`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$defaultOrder`}),` — Колонка сортировки по умолчанию.`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$sortColumns`}),` — Явная карта колонок сортировки.`]}),`
`]}),`
`,(0,n.jsx)(`span`,{id:`method_fromArray`}),`
`,(0,n.jsx)(t.h3,{id:`fromarray`,children:`fromArray()`}),`
`,(0,n.jsx)(t.p,{children:`Создаёт схему фильтра из ассоциативного массива.`}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 200.4.0`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`static`}),` — Новый экземпляр схемы.`]}),`
`,(0,n.jsx)(`span`,{id:`method_toArray`}),`
`,(0,n.jsx)(t.h3,{id:`toarray`,children:`toArray()`}),`
`,(0,n.jsx)(t.p,{children:`Преобразует схему фильтра в ассоциативный массив.`}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 200.4.0`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`array<string,`}),` — mixed> Сериализованная схема.`]}),`
`,(0,n.jsx)(`span`,{id:`method_allFields`}),`
`,(0,n.jsx)(t.h3,{id:`allfields`,children:`allFields()`}),`
`,(0,n.jsx)(t.p,{children:`Возвращает плоский список всех полей фильтра.`}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 200.4.0`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`FormField[]`}),` — Все поля всех секций.`]}),`
`,(0,n.jsx)(`span`,{id:`method_resolvedSortColumns`}),`
`,(0,n.jsx)(t.h3,{id:`resolvedsortcolumns`,children:`resolvedSortColumns()`}),`
`,(0,n.jsx)(t.p,{children:`Возвращает карту колонок сортировки с учётом явных и выведенных значений.`}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 200.4.0`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`array<string,`}),` — string> Карта `,(0,n.jsx)(t.code,{children:`column => label`}),`.`]}),`
`,(0,n.jsx)(`span`,{id:`method_sortColumnKeys`}),`
`,(0,n.jsx)(t.h3,{id:`sortcolumnkeys`,children:`sortColumnKeys()`}),`
`,(0,n.jsx)(t.p,{children:`Возвращает ключи колонок сортировки.`}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 200.4.0`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`list<string>`}),` — Список имён колонок БД.`]}),`
`,(0,n.jsx)(`span`,{id:`method_filterDbColumns`}),`
`,(0,n.jsx)(t.h3,{id:`filterdbcolumns`,children:`filterDbColumns()`}),`
`,(0,n.jsx)(t.p,{children:`Возвращает имена колонок БД, участвующих в фильтрации.`}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 200.4.0`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`list<string>`}),` — Список имён колонок.`]})]})}function l(e={}){let{wrapper:t}=e.components||{};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}export{a as _markdown,l as default,r as frontmatter,i as lastModified,o as structuredData,s as toc};