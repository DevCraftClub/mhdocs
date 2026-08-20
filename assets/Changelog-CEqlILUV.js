import{r as e}from"./rolldown-runtime-QTnfLwEv.js";import{t}from"./jsx-runtime-By8HlURe.js";var n=e(t()),r={title:`Класс: Changelog`,description:`Документация по плагину класс: changelog для DLE.`},i=new Date(1787217967e3),a=`

## Краткое содержание: [#краткое-содержание]

Запись версии в журнале изменений модуля.

***

### Свойства [#свойства]

* public $[version](#property_version)
* public $[date](#property_date)

***

### Методы [#методы]

* public [\\_\\_construct()](#method___construct)
* public [fromArray()](#method_fromArray)
* public [listFromManifest()](#method_listFromManifest)
* public [isUnreleased()](#method_isUnreleased)
* public [toArray()](#method_toArray)
* public [teaserItems()](#method_teaserItems)
* public [unreleasedLabel()](#method_unreleasedLabel)

***

### Подробности [#подробности]

* Путь: \`devcraft/src/classes/Types/Changelog.php\`

***

## Детали [#детали]

### Свойства [#свойства-1]

<span id="property_version" />

#### $version [#version]

Номер версии или «Неопубликованное».

<span id="property_date" />

#### $date [#date]

Дата релиза.

### Методы [#методы-1]

<span id="method___construct" />

### \\_\\_construct() [#__construct]

Создаёт запись версии changelog.

**С версии:** 200.4.0

**Параметры:**

* \`$version\` — Номер версии.
* \`$date\` — Дата релиза.

<span id="method_fromArray" />

### fromArray() [#fromarray]

Создаёт запись версии из ассоциативного массива.

**С версии:** 200.4.0

**Возвращает:** \`static\` — Новый экземпляр записи.

<span id="method_listFromManifest" />

### listFromManifest() [#listfrommanifest]

Создаёт список записей из массива манифеста модуля.

**С версии:** 200.4.0

**Возвращает:** \`self[]\` — Список записей changelog.

<span id="method_isUnreleased" />

### isUnreleased() [#isunreleased]

Проверяет, является ли версия неопубликованной.

**С версии:** 200.4.0

**Возвращает:** \`bool\` — \`true\`, если версия соответствует строке «Неопубликованное».

<span id="method_toArray" />

### toArray() [#toarray]

Преобразует запись версии в ассоциативный массив для шаблонов.

**С версии:** 200.4.0

**Возвращает:** ассоциативный массив (\`version\`, \`date\`, \`sections\`) для шаблонов.

<span id="method_teaserItems" />

### teaserItems() [#teaseritems]

Возвращает первые записи для тизера на панели управления.

**С версии:** 200.4.0

**Параметры:**

* \`$limit\` — Максимальное количество элементов (по умолчанию 3).

**Возвращает:** \`array<int, array<string, string>>\` — Список сериализованных изменений.

<span id="method_unreleasedLabel" />

### unreleasedLabel() [#unreleasedlabel]

Возвращает локализованную метку для неопубликованных версий.
`,o={contents:[{heading:`краткое-содержание`,content:`Запись версии в журнале изменений модуля.`},{heading:`свойства`,content:`public $version`},{heading:`свойства`,content:`public $date`},{heading:`методы`,content:`public \\_\\_construct()`},{heading:`методы`,content:`public fromArray()`},{heading:`методы`,content:`public listFromManifest()`},{heading:`методы`,content:`public isUnreleased()`},{heading:`методы`,content:`public toArray()`},{heading:`методы`,content:`public teaserItems()`},{heading:`методы`,content:`public unreleasedLabel()`},{heading:`подробности`,content:"Путь: `devcraft/src/classes/Types/Changelog.php`"},{heading:`version`,content:`Номер версии или «Неопубликованное».`},{heading:`date`,content:`Дата релиза.`},{heading:`__construct`,content:`Создаёт запись версии changelog.`},{heading:`__construct`,content:`**С версии:** 200.4.0`},{heading:`__construct`,content:`**Параметры:**`},{heading:`__construct`,content:"`$version` — Номер версии."},{heading:`__construct`,content:"`$date` — Дата релиза."},{heading:`fromarray`,content:`Создаёт запись версии из ассоциативного массива.`},{heading:`fromarray`,content:`**С версии:** 200.4.0`},{heading:`fromarray`,content:"**Возвращает:** `static` — Новый экземпляр записи."},{heading:`listfrommanifest`,content:`Создаёт список записей из массива манифеста модуля.`},{heading:`listfrommanifest`,content:`**С версии:** 200.4.0`},{heading:`listfrommanifest`,content:"**Возвращает:** `self[]` — Список записей changelog."},{heading:`isunreleased`,content:`Проверяет, является ли версия неопубликованной.`},{heading:`isunreleased`,content:`**С версии:** 200.4.0`},{heading:`isunreleased`,content:"**Возвращает:** `bool` — `true`, если версия соответствует строке «Неопубликованное»."},{heading:`toarray`,content:`Преобразует запись версии в ассоциативный массив для шаблонов.`},{heading:`toarray`,content:`**С версии:** 200.4.0`},{heading:`toarray`,content:"**Возвращает:** ассоциативный массив (`version`, `date`, `sections`) для шаблонов."},{heading:`teaseritems`,content:`Возвращает первые записи для тизера на панели управления.`},{heading:`teaseritems`,content:`**С версии:** 200.4.0`},{heading:`teaseritems`,content:`**Параметры:**`},{heading:`teaseritems`,content:"`$limit` — Максимальное количество элементов (по умолчанию 3)."},{heading:`teaseritems`,content:"**Возвращает:** `array<int, array<string, string>>` — Список сериализованных изменений."},{heading:`unreleasedlabel`,content:`Возвращает локализованную метку для неопубликованных версий.`}],headings:[{id:`краткое-содержание`,content:`Краткое содержание:`},{id:`свойства`,content:`Свойства`},{id:`методы`,content:`Методы`},{id:`подробности`,content:`Подробности`},{id:`детали`,content:`Детали`},{id:`свойства-1`,content:`Свойства`},{id:`version`,content:`$version`},{id:`date`,content:`$date`},{id:`методы-1`,content:`Методы`},{id:`__construct`,content:`\\__construct()`},{id:`fromarray`,content:`fromArray()`},{id:`listfrommanifest`,content:`listFromManifest()`},{id:`isunreleased`,content:`isUnreleased()`},{id:`toarray`,content:`toArray()`},{id:`teaseritems`,content:`teaserItems()`},{id:`unreleasedlabel`,content:`unreleasedLabel()`}]},s=[{depth:2,url:`#краткое-содержание`,title:(0,n.jsx)(n.Fragment,{children:`Краткое содержание:`})},{depth:3,url:`#свойства`,title:(0,n.jsx)(n.Fragment,{children:`Свойства`})},{depth:3,url:`#методы`,title:(0,n.jsx)(n.Fragment,{children:`Методы`})},{depth:3,url:`#подробности`,title:(0,n.jsx)(n.Fragment,{children:`Подробности`})},{depth:2,url:`#детали`,title:(0,n.jsx)(n.Fragment,{children:`Детали`})},{depth:3,url:`#свойства-1`,title:(0,n.jsx)(n.Fragment,{children:`Свойства`})},{depth:4,url:`#version`,title:(0,n.jsx)(n.Fragment,{children:`$version`})},{depth:4,url:`#date`,title:(0,n.jsx)(n.Fragment,{children:`$date`})},{depth:3,url:`#методы-1`,title:(0,n.jsx)(n.Fragment,{children:`Методы`})},{depth:3,url:`#__construct`,title:(0,n.jsx)(n.Fragment,{children:`__construct()`})},{depth:3,url:`#fromarray`,title:(0,n.jsx)(n.Fragment,{children:`fromArray()`})},{depth:3,url:`#listfrommanifest`,title:(0,n.jsx)(n.Fragment,{children:`listFromManifest()`})},{depth:3,url:`#isunreleased`,title:(0,n.jsx)(n.Fragment,{children:`isUnreleased()`})},{depth:3,url:`#toarray`,title:(0,n.jsx)(n.Fragment,{children:`toArray()`})},{depth:3,url:`#teaseritems`,title:(0,n.jsx)(n.Fragment,{children:`teaserItems()`})},{depth:3,url:`#unreleasedlabel`,title:(0,n.jsx)(n.Fragment,{children:`unreleasedLabel()`})}];function c(e){let t={a:`a`,code:`code`,h2:`h2`,h3:`h3`,h4:`h4`,hr:`hr`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h2,{id:`краткое-содержание`,children:`Краткое содержание:`}),`
`,(0,n.jsx)(t.p,{children:`Запись версии в журнале изменений модуля.`}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsx)(t.h3,{id:`свойства`,children:`Свойства`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[`public $`,(0,n.jsx)(t.a,{href:`#property_version`,children:`version`})]}),`
`,(0,n.jsxs)(t.li,{children:[`public $`,(0,n.jsx)(t.a,{href:`#property_date`,children:`date`})]}),`
`]}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsx)(t.h3,{id:`методы`,children:`Методы`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method___construct`,children:`__construct()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method_fromArray`,children:`fromArray()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method_listFromManifest`,children:`listFromManifest()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method_isUnreleased`,children:`isUnreleased()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method_toArray`,children:`toArray()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method_teaserItems`,children:`teaserItems()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method_unreleasedLabel`,children:`unreleasedLabel()`})]}),`
`]}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsx)(t.h3,{id:`подробности`,children:`Подробности`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[`Путь: `,(0,n.jsx)(t.code,{children:`devcraft/src/classes/Types/Changelog.php`})]}),`
`]}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsx)(t.h2,{id:`детали`,children:`Детали`}),`
`,(0,n.jsx)(t.h3,{id:`свойства-1`,children:`Свойства`}),`
`,(0,n.jsx)(`span`,{id:`property_version`}),`
`,(0,n.jsx)(t.h4,{id:`version`,children:`$version`}),`
`,(0,n.jsx)(t.p,{children:`Номер версии или «Неопубликованное».`}),`
`,(0,n.jsx)(`span`,{id:`property_date`}),`
`,(0,n.jsx)(t.h4,{id:`date`,children:`$date`}),`
`,(0,n.jsx)(t.p,{children:`Дата релиза.`}),`
`,(0,n.jsx)(t.h3,{id:`методы-1`,children:`Методы`}),`
`,(0,n.jsx)(`span`,{id:`method___construct`}),`
`,(0,n.jsx)(t.h3,{id:`__construct`,children:`__construct()`}),`
`,(0,n.jsx)(t.p,{children:`Создаёт запись версии changelog.`}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 200.4.0`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$version`}),` — Номер версии.`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$date`}),` — Дата релиза.`]}),`
`]}),`
`,(0,n.jsx)(`span`,{id:`method_fromArray`}),`
`,(0,n.jsx)(t.h3,{id:`fromarray`,children:`fromArray()`}),`
`,(0,n.jsx)(t.p,{children:`Создаёт запись версии из ассоциативного массива.`}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 200.4.0`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`static`}),` — Новый экземпляр записи.`]}),`
`,(0,n.jsx)(`span`,{id:`method_listFromManifest`}),`
`,(0,n.jsx)(t.h3,{id:`listfrommanifest`,children:`listFromManifest()`}),`
`,(0,n.jsx)(t.p,{children:`Создаёт список записей из массива манифеста модуля.`}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 200.4.0`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`self[]`}),` — Список записей changelog.`]}),`
`,(0,n.jsx)(`span`,{id:`method_isUnreleased`}),`
`,(0,n.jsx)(t.h3,{id:`isunreleased`,children:`isUnreleased()`}),`
`,(0,n.jsx)(t.p,{children:`Проверяет, является ли версия неопубликованной.`}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 200.4.0`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`bool`}),` — `,(0,n.jsx)(t.code,{children:`true`}),`, если версия соответствует строке «Неопубликованное».`]}),`
`,(0,n.jsx)(`span`,{id:`method_toArray`}),`
`,(0,n.jsx)(t.h3,{id:`toarray`,children:`toArray()`}),`
`,(0,n.jsx)(t.p,{children:`Преобразует запись версии в ассоциативный массив для шаблонов.`}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 200.4.0`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` ассоциативный массив (`,(0,n.jsx)(t.code,{children:`version`}),`, `,(0,n.jsx)(t.code,{children:`date`}),`, `,(0,n.jsx)(t.code,{children:`sections`}),`) для шаблонов.`]}),`
`,(0,n.jsx)(`span`,{id:`method_teaserItems`}),`
`,(0,n.jsx)(t.h3,{id:`teaseritems`,children:`teaserItems()`}),`
`,(0,n.jsx)(t.p,{children:`Возвращает первые записи для тизера на панели управления.`}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 200.4.0`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$limit`}),` — Максимальное количество элементов (по умолчанию 3).`]}),`
`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`array<int, array<string, string>>`}),` — Список сериализованных изменений.`]}),`
`,(0,n.jsx)(`span`,{id:`method_unreleasedLabel`}),`
`,(0,n.jsx)(t.h3,{id:`unreleasedlabel`,children:`unreleasedLabel()`}),`
`,(0,n.jsx)(t.p,{children:`Возвращает локализованную метку для неопубликованных версий.`})]})}function l(e={}){let{wrapper:t}=e.components||{};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}export{a as _markdown,l as default,r as frontmatter,i as lastModified,o as structuredData,s as toc};