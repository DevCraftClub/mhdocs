import{r as e}from"./rolldown-runtime-QTnfLwEv.js";import{t}from"./jsx-runtime-By8HlURe.js";var n=e(t()),r={title:`Класс: FormSchemaBuilder`,description:`Документация по плагину класс: formschemabuilder для DLE.`},i=new Date(1786544989e3),a=`

## Краткое содержание: [#краткое-содержание]

Fluent-строитель декларативной схемы формы настроек или фильтра.

***

### Свойства [#свойства]

* private $[currentSection](#property_currentSection)

***

### Методы [#методы]

* private [\\_\\_construct()](#method___construct)
* public [create()](#method_create)
* public [layout()](#method_layout)
* public [layoutStack()](#method_layoutStack)
* public [layoutTabs()](#method_layoutTabs)
* public [layoutAccordion()](#method_layoutAccordion)
* public [section()](#method_section)
* public [commitSection()](#method_commitSection)
* public [build()](#method_build)
* private [commitCurrentSection()](#method_commitCurrentSection)

***

### Подробности [#подробности]

* Путь: \`devcraft/src/classes/Form/FormSchemaBuilder.php\`

***

## Детали [#детали]

### Свойства [#свойства-1]

<span id="property_currentSection" />

#### $currentSection [#currentsection]

Fluent-строитель декларативной схемы формы настроек или фильтра.

### Методы [#методы-1]

<span id="method___construct" />

### \\_\\_construct() [#__construct]

Создаёт строитель схемы с заданным codename.

**С версии:** 200.4.0

**Параметры:**

* \`$codename\` — Уникальный код формы.
* \`$layout\` — Начальный layout (stack по умолчанию).

<span id="method_create" />

### create() [#create]

Создаёт новый строитель схемы формы.

**С версии:** 200.4.0

**Параметры:**

* \`$codename\` — Уникальный код формы.

**Возвращает:** \`self\` — Экземпляр строителя.

<span id="method_layout" />

### layout() [#layout]

Задаёт режим компоновки секций.

**С версии:** 200.4.0

**Параметры:**

* \`$layout\` — stack, tabs или accordion.

**Возвращает:** \`self\` — Текущий строитель.

<span id="method_layoutStack" />

### layoutStack() [#layoutstack]

Устанавливает layout stack (вертикальный стек секций).

**С версии:** 200.4.0

**Возвращает:** \`self\` — Текущий строитель.

<span id="method_layoutTabs" />

### layoutTabs() [#layouttabs]

Устанавливает layout tabs (вкладки).

**С версии:** 200.4.0

**Возвращает:** \`self\` — Текущий строитель.

<span id="method_layoutAccordion" />

### layoutAccordion() [#layoutaccordion]

Устанавливает layout accordion (аккордеон).

**С версии:** 200.4.0

**Возвращает:** \`self\` — Текущий строитель.

<span id="method_section" />

### section() [#section]

Открывает новую секцию формы.

**С версии:** 200.4.0

**Параметры:**

* \`$title\` — Заголовок секции.

**Возвращает:** \`FormSectionBuilder\` — Строитель секции.

<span id="method_commitSection" />

### commitSection() [#commitsection]

Фиксирует секцию, построенную FormSectionBuilder.

**С версии:** 200.4.0

**Параметры:**

* \`$sectionBuilder\` — Завершённый строитель секции.

<span id="method_build" />

### build() [#build]

Собирает immutable-объект FormSchema.

**С версии:** 200.4.0

**Возвращает:** \`FormSchema\` — Готовая схема формы.

<span id="method_commitCurrentSection" />

### commitCurrentSection() [#commitcurrentsection]

Фиксирует текущую незавершённую секцию, если она есть.

**С версии:** 200.4.0
`,o={contents:[{heading:`краткое-содержание`,content:`Fluent-строитель декларативной схемы формы настроек или фильтра.`},{heading:`свойства`,content:`private $currentSection`},{heading:`методы`,content:`private \\_\\_construct()`},{heading:`методы`,content:`public create()`},{heading:`методы`,content:`public layout()`},{heading:`методы`,content:`public layoutStack()`},{heading:`методы`,content:`public layoutTabs()`},{heading:`методы`,content:`public layoutAccordion()`},{heading:`методы`,content:`public section()`},{heading:`методы`,content:`public commitSection()`},{heading:`методы`,content:`public build()`},{heading:`методы`,content:`private commitCurrentSection()`},{heading:`подробности`,content:"Путь: `devcraft/src/classes/Form/FormSchemaBuilder.php`"},{heading:`currentsection`,content:`Fluent-строитель декларативной схемы формы настроек или фильтра.`},{heading:`__construct`,content:`Создаёт строитель схемы с заданным codename.`},{heading:`__construct`,content:`**С версии:** 200.4.0`},{heading:`__construct`,content:`**Параметры:**`},{heading:`__construct`,content:"`$codename` — Уникальный код формы."},{heading:`__construct`,content:"`$layout` — Начальный layout (stack по умолчанию)."},{heading:`create`,content:`Создаёт новый строитель схемы формы.`},{heading:`create`,content:`**С версии:** 200.4.0`},{heading:`create`,content:`**Параметры:**`},{heading:`create`,content:"`$codename` — Уникальный код формы."},{heading:`create`,content:"**Возвращает:** `self` — Экземпляр строителя."},{heading:`layout`,content:`Задаёт режим компоновки секций.`},{heading:`layout`,content:`**С версии:** 200.4.0`},{heading:`layout`,content:`**Параметры:**`},{heading:`layout`,content:"`$layout` — stack, tabs или accordion."},{heading:`layout`,content:"**Возвращает:** `self` — Текущий строитель."},{heading:`layoutstack`,content:`Устанавливает layout stack (вертикальный стек секций).`},{heading:`layoutstack`,content:`**С версии:** 200.4.0`},{heading:`layoutstack`,content:"**Возвращает:** `self` — Текущий строитель."},{heading:`layouttabs`,content:`Устанавливает layout tabs (вкладки).`},{heading:`layouttabs`,content:`**С версии:** 200.4.0`},{heading:`layouttabs`,content:"**Возвращает:** `self` — Текущий строитель."},{heading:`layoutaccordion`,content:`Устанавливает layout accordion (аккордеон).`},{heading:`layoutaccordion`,content:`**С версии:** 200.4.0`},{heading:`layoutaccordion`,content:"**Возвращает:** `self` — Текущий строитель."},{heading:`section`,content:`Открывает новую секцию формы.`},{heading:`section`,content:`**С версии:** 200.4.0`},{heading:`section`,content:`**Параметры:**`},{heading:`section`,content:"`$title` — Заголовок секции."},{heading:`section`,content:"**Возвращает:** `FormSectionBuilder` — Строитель секции."},{heading:`commitsection`,content:`Фиксирует секцию, построенную FormSectionBuilder.`},{heading:`commitsection`,content:`**С версии:** 200.4.0`},{heading:`commitsection`,content:`**Параметры:**`},{heading:`commitsection`,content:"`$sectionBuilder` — Завершённый строитель секции."},{heading:`build`,content:`Собирает immutable-объект FormSchema.`},{heading:`build`,content:`**С версии:** 200.4.0`},{heading:`build`,content:"**Возвращает:** `FormSchema` — Готовая схема формы."},{heading:`commitcurrentsection`,content:`Фиксирует текущую незавершённую секцию, если она есть.`},{heading:`commitcurrentsection`,content:`**С версии:** 200.4.0`}],headings:[{id:`краткое-содержание`,content:`Краткое содержание:`},{id:`свойства`,content:`Свойства`},{id:`методы`,content:`Методы`},{id:`подробности`,content:`Подробности`},{id:`детали`,content:`Детали`},{id:`свойства-1`,content:`Свойства`},{id:`currentsection`,content:`$currentSection`},{id:`методы-1`,content:`Методы`},{id:`__construct`,content:`\\__construct()`},{id:`create`,content:`create()`},{id:`layout`,content:`layout()`},{id:`layoutstack`,content:`layoutStack()`},{id:`layouttabs`,content:`layoutTabs()`},{id:`layoutaccordion`,content:`layoutAccordion()`},{id:`section`,content:`section()`},{id:`commitsection`,content:`commitSection()`},{id:`build`,content:`build()`},{id:`commitcurrentsection`,content:`commitCurrentSection()`}]},s=[{depth:2,url:`#краткое-содержание`,title:(0,n.jsx)(n.Fragment,{children:`Краткое содержание:`})},{depth:3,url:`#свойства`,title:(0,n.jsx)(n.Fragment,{children:`Свойства`})},{depth:3,url:`#методы`,title:(0,n.jsx)(n.Fragment,{children:`Методы`})},{depth:3,url:`#подробности`,title:(0,n.jsx)(n.Fragment,{children:`Подробности`})},{depth:2,url:`#детали`,title:(0,n.jsx)(n.Fragment,{children:`Детали`})},{depth:3,url:`#свойства-1`,title:(0,n.jsx)(n.Fragment,{children:`Свойства`})},{depth:4,url:`#currentsection`,title:(0,n.jsx)(n.Fragment,{children:`$currentSection`})},{depth:3,url:`#методы-1`,title:(0,n.jsx)(n.Fragment,{children:`Методы`})},{depth:3,url:`#__construct`,title:(0,n.jsx)(n.Fragment,{children:`__construct()`})},{depth:3,url:`#create`,title:(0,n.jsx)(n.Fragment,{children:`create()`})},{depth:3,url:`#layout`,title:(0,n.jsx)(n.Fragment,{children:`layout()`})},{depth:3,url:`#layoutstack`,title:(0,n.jsx)(n.Fragment,{children:`layoutStack()`})},{depth:3,url:`#layouttabs`,title:(0,n.jsx)(n.Fragment,{children:`layoutTabs()`})},{depth:3,url:`#layoutaccordion`,title:(0,n.jsx)(n.Fragment,{children:`layoutAccordion()`})},{depth:3,url:`#section`,title:(0,n.jsx)(n.Fragment,{children:`section()`})},{depth:3,url:`#commitsection`,title:(0,n.jsx)(n.Fragment,{children:`commitSection()`})},{depth:3,url:`#build`,title:(0,n.jsx)(n.Fragment,{children:`build()`})},{depth:3,url:`#commitcurrentsection`,title:(0,n.jsx)(n.Fragment,{children:`commitCurrentSection()`})}];function c(e){let t={a:`a`,code:`code`,h2:`h2`,h3:`h3`,h4:`h4`,hr:`hr`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h2,{id:`краткое-содержание`,children:`Краткое содержание:`}),`
`,(0,n.jsx)(t.p,{children:`Fluent-строитель декларативной схемы формы настроек или фильтра.`}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsx)(t.h3,{id:`свойства`,children:`Свойства`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[`private $`,(0,n.jsx)(t.a,{href:`#property_currentSection`,children:`currentSection`})]}),`
`]}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsx)(t.h3,{id:`методы`,children:`Методы`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[`private `,(0,n.jsx)(t.a,{href:`#method___construct`,children:`__construct()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method_create`,children:`create()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method_layout`,children:`layout()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method_layoutStack`,children:`layoutStack()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method_layoutTabs`,children:`layoutTabs()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method_layoutAccordion`,children:`layoutAccordion()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method_section`,children:`section()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method_commitSection`,children:`commitSection()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method_build`,children:`build()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`private `,(0,n.jsx)(t.a,{href:`#method_commitCurrentSection`,children:`commitCurrentSection()`})]}),`
`]}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsx)(t.h3,{id:`подробности`,children:`Подробности`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[`Путь: `,(0,n.jsx)(t.code,{children:`devcraft/src/classes/Form/FormSchemaBuilder.php`})]}),`
`]}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsx)(t.h2,{id:`детали`,children:`Детали`}),`
`,(0,n.jsx)(t.h3,{id:`свойства-1`,children:`Свойства`}),`
`,(0,n.jsx)(`span`,{id:`property_currentSection`}),`
`,(0,n.jsx)(t.h4,{id:`currentsection`,children:`$currentSection`}),`
`,(0,n.jsx)(t.p,{children:`Fluent-строитель декларативной схемы формы настроек или фильтра.`}),`
`,(0,n.jsx)(t.h3,{id:`методы-1`,children:`Методы`}),`
`,(0,n.jsx)(`span`,{id:`method___construct`}),`
`,(0,n.jsx)(t.h3,{id:`__construct`,children:`__construct()`}),`
`,(0,n.jsx)(t.p,{children:`Создаёт строитель схемы с заданным codename.`}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 200.4.0`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$codename`}),` — Уникальный код формы.`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$layout`}),` — Начальный layout (stack по умолчанию).`]}),`
`]}),`
`,(0,n.jsx)(`span`,{id:`method_create`}),`
`,(0,n.jsx)(t.h3,{id:`create`,children:`create()`}),`
`,(0,n.jsx)(t.p,{children:`Создаёт новый строитель схемы формы.`}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 200.4.0`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$codename`}),` — Уникальный код формы.`]}),`
`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`self`}),` — Экземпляр строителя.`]}),`
`,(0,n.jsx)(`span`,{id:`method_layout`}),`
`,(0,n.jsx)(t.h3,{id:`layout`,children:`layout()`}),`
`,(0,n.jsx)(t.p,{children:`Задаёт режим компоновки секций.`}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 200.4.0`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$layout`}),` — stack, tabs или accordion.`]}),`
`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`self`}),` — Текущий строитель.`]}),`
`,(0,n.jsx)(`span`,{id:`method_layoutStack`}),`
`,(0,n.jsx)(t.h3,{id:`layoutstack`,children:`layoutStack()`}),`
`,(0,n.jsx)(t.p,{children:`Устанавливает layout stack (вертикальный стек секций).`}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 200.4.0`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`self`}),` — Текущий строитель.`]}),`
`,(0,n.jsx)(`span`,{id:`method_layoutTabs`}),`
`,(0,n.jsx)(t.h3,{id:`layouttabs`,children:`layoutTabs()`}),`
`,(0,n.jsx)(t.p,{children:`Устанавливает layout tabs (вкладки).`}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 200.4.0`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`self`}),` — Текущий строитель.`]}),`
`,(0,n.jsx)(`span`,{id:`method_layoutAccordion`}),`
`,(0,n.jsx)(t.h3,{id:`layoutaccordion`,children:`layoutAccordion()`}),`
`,(0,n.jsx)(t.p,{children:`Устанавливает layout accordion (аккордеон).`}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 200.4.0`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`self`}),` — Текущий строитель.`]}),`
`,(0,n.jsx)(`span`,{id:`method_section`}),`
`,(0,n.jsx)(t.h3,{id:`section`,children:`section()`}),`
`,(0,n.jsx)(t.p,{children:`Открывает новую секцию формы.`}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 200.4.0`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$title`}),` — Заголовок секции.`]}),`
`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`FormSectionBuilder`}),` — Строитель секции.`]}),`
`,(0,n.jsx)(`span`,{id:`method_commitSection`}),`
`,(0,n.jsx)(t.h3,{id:`commitsection`,children:`commitSection()`}),`
`,(0,n.jsx)(t.p,{children:`Фиксирует секцию, построенную FormSectionBuilder.`}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 200.4.0`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$sectionBuilder`}),` — Завершённый строитель секции.`]}),`
`]}),`
`,(0,n.jsx)(`span`,{id:`method_build`}),`
`,(0,n.jsx)(t.h3,{id:`build`,children:`build()`}),`
`,(0,n.jsx)(t.p,{children:`Собирает immutable-объект FormSchema.`}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 200.4.0`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`FormSchema`}),` — Готовая схема формы.`]}),`
`,(0,n.jsx)(`span`,{id:`method_commitCurrentSection`}),`
`,(0,n.jsx)(t.h3,{id:`commitcurrentsection`,children:`commitCurrentSection()`}),`
`,(0,n.jsx)(t.p,{children:`Фиксирует текущую незавершённую секцию, если она есть.`}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 200.4.0`]})]})}function l(e={}){let{wrapper:t}=e.components||{};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}export{a as _markdown,l as default,r as frontmatter,i as lastModified,o as structuredData,s as toc};