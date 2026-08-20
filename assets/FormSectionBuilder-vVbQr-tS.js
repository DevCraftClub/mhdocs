import{r as e}from"./rolldown-runtime-QTnfLwEv.js";import{t}from"./jsx-runtime-By8HlURe.js";var n=e(t()),r={title:`Класс: FormSectionBuilder`,description:`Документация по плагину класс: formsectionbuilder для DLE.`},i=new Date(1787223655e3),a=`

## Краткое содержание: [#краткое-содержание]

Fluent-строитель секции формы с набором полей.

***

### Свойства [#свойства]

* private $[pending](#property_pending)

***

### Методы [#методы]

* public [\\_\\_construct()](#method___construct)
* public [text()](#method_text)
* public [number()](#method_number)
* public [select()](#method_select)
* public [multi()](#method_multi)
* public [checkbox()](#method_checkbox)
* public [textarea()](#method_textarea)
* public [hidden()](#method_hidden)
* public [section()](#method_section)
* public [build()](#method_build)
* public [beginField()](#method_beginField)
* public [commitField()](#method_commitField)
* public [toSection()](#method_toSection)
* private [commitPending()](#method_commitPending)

***

### Подробности [#подробности]

* Путь: \`devcraft/src/classes/Form/FormSectionBuilder.php\`

***

## Детали [#детали]

### Свойства [#свойства-1]

<span id="property_pending" />

#### $pending [#pending]

Fluent-строитель секции формы с набором полей.

### Методы [#методы-1]

<span id="method___construct" />

### \\_\\_construct() [#__construct]

Создаёт строитель секции.

**С версии:** 200.4.0

**Параметры:**

* \`$schemaBuilder\` — Родительская схема.
* \`$title\` — Заголовок секции.

<span id="method_text" />

### text() [#text]

Добавляет текстовое поле в секцию.

**С версии:** 200.4.0

**Параметры:**

* \`$id\` — Идентификатор поля.
* \`$label\` — Подпись.

**Возвращает:** \`FormFieldBuilder\` — Строитель поля.

<span id="method_number" />

### number() [#number]

Добавляет числовое поле в секцию.

**С версии:** 200.4.0

**Параметры:**

* \`$id\` — Идентификатор поля.
* \`$label\` — Подпись.

**Возвращает:** \`FormFieldBuilder\` — Строитель поля.

<span id="method_select" />

### select() [#select]

Добавляет поле select в секцию.

**С версии:** 200.4.0

**Параметры:**

* \`$id\` — Идентификатор поля.
* \`$label\` — Подпись.

**Возвращает:** \`FormFieldBuilder\` — Строитель поля.

<span id="method_multi" />

### multi() [#multi]

Добавляет поле множественного выбора в секцию.

**С версии:** 200.4.0

**Параметры:**

* \`$id\` — Идентификатор поля.
* \`$label\` — Подпись.

**Возвращает:** \`FormFieldBuilder\` — Строитель поля.

<span id="method_checkbox" />

### checkbox() [#checkbox]

Добавляет чекбокс в секцию.

**С версии:** 200.4.0

**Параметры:**

* \`$id\` — Идентификатор поля.
* \`$label\` — Подпись.

**Возвращает:** \`FormFieldBuilder\` — Строитель поля.

<span id="method_textarea" />

### textarea() [#textarea]

Добавляет textarea в секцию.

**С версии:** 200.4.0

**Параметры:**

* \`$id\` — Идентификатор поля.
* \`$label\` — Подпись.

**Возвращает:** \`FormFieldBuilder\` — Строитель поля.

<span id="method_hidden" />

### hidden() [#hidden]

Добавляет скрытое поле в секцию.

**С версии:** 200.4.0

**Параметры:**

* \`$id\` — Идентификатор поля.
* \`$label\` — Подпись (опционально).

**Возвращает:** \`FormFieldBuilder\` — Строитель поля.

<span id="method_section" />

### section() [#section]

Фиксирует секцию и открывает следующую в схеме.

**С версии:** 200.4.0

**Параметры:**

* \`$title\` — Заголовок новой секции.

**Возвращает:** \`FormSectionBuilder\` — Строитель новой секции.

<span id="method_build" />

### build() [#build]

Фиксирует секцию и возвращает готовую схему формы.

**С версии:** 200.4.0

**Возвращает:** \`\\DevCraft\\Types\\FormSchema\` — Собранная схема.

<span id="method_beginField" />

### beginField() [#beginfield]

Начинает конфигурацию поля указанного типа.

**С версии:** 200.4.0

**Параметры:**

* \`$id\` — Идентификатор поля.
* \`$type\` — Тип поля.
* \`$label\` — Подпись.

**Возвращает:** \`FormFieldBuilder\` — Строитель поля.

<span id="method_commitField" />

### commitField() [#commitfield]

Добавляет готовое поле в секцию с проверкой уникальности id.

**С версии:** 200.4.0

**Параметры:**

* \`$field\` — Описание поля.

<span id="method_toSection" />

### toSection() [#tosection]

Преобразует накопленные поля в объект FormSection.

**С версии:** 200.4.0

**Возвращает:** \`FormSection\` — Immutable-секция.

<span id="method_commitPending" />

### commitPending() [#commitpending]

Фиксирует незавершённое поле pending, если оно есть.

**С версии:** 200.4.0
`,o={contents:[{heading:`краткое-содержание`,content:`Fluent-строитель секции формы с набором полей.`},{heading:`свойства`,content:`private $pending`},{heading:`методы`,content:`public \\_\\_construct()`},{heading:`методы`,content:`public text()`},{heading:`методы`,content:`public number()`},{heading:`методы`,content:`public select()`},{heading:`методы`,content:`public multi()`},{heading:`методы`,content:`public checkbox()`},{heading:`методы`,content:`public textarea()`},{heading:`методы`,content:`public hidden()`},{heading:`методы`,content:`public section()`},{heading:`методы`,content:`public build()`},{heading:`методы`,content:`public beginField()`},{heading:`методы`,content:`public commitField()`},{heading:`методы`,content:`public toSection()`},{heading:`методы`,content:`private commitPending()`},{heading:`подробности`,content:"Путь: `devcraft/src/classes/Form/FormSectionBuilder.php`"},{heading:`pending`,content:`Fluent-строитель секции формы с набором полей.`},{heading:`__construct`,content:`Создаёт строитель секции.`},{heading:`__construct`,content:`**С версии:** 200.4.0`},{heading:`__construct`,content:`**Параметры:**`},{heading:`__construct`,content:"`$schemaBuilder` — Родительская схема."},{heading:`__construct`,content:"`$title` — Заголовок секции."},{heading:`text`,content:`Добавляет текстовое поле в секцию.`},{heading:`text`,content:`**С версии:** 200.4.0`},{heading:`text`,content:`**Параметры:**`},{heading:`text`,content:"`$id` — Идентификатор поля."},{heading:`text`,content:"`$label` — Подпись."},{heading:`text`,content:"**Возвращает:** `FormFieldBuilder` — Строитель поля."},{heading:`number`,content:`Добавляет числовое поле в секцию.`},{heading:`number`,content:`**С версии:** 200.4.0`},{heading:`number`,content:`**Параметры:**`},{heading:`number`,content:"`$id` — Идентификатор поля."},{heading:`number`,content:"`$label` — Подпись."},{heading:`number`,content:"**Возвращает:** `FormFieldBuilder` — Строитель поля."},{heading:`select`,content:`Добавляет поле select в секцию.`},{heading:`select`,content:`**С версии:** 200.4.0`},{heading:`select`,content:`**Параметры:**`},{heading:`select`,content:"`$id` — Идентификатор поля."},{heading:`select`,content:"`$label` — Подпись."},{heading:`select`,content:"**Возвращает:** `FormFieldBuilder` — Строитель поля."},{heading:`multi`,content:`Добавляет поле множественного выбора в секцию.`},{heading:`multi`,content:`**С версии:** 200.4.0`},{heading:`multi`,content:`**Параметры:**`},{heading:`multi`,content:"`$id` — Идентификатор поля."},{heading:`multi`,content:"`$label` — Подпись."},{heading:`multi`,content:"**Возвращает:** `FormFieldBuilder` — Строитель поля."},{heading:`checkbox`,content:`Добавляет чекбокс в секцию.`},{heading:`checkbox`,content:`**С версии:** 200.4.0`},{heading:`checkbox`,content:`**Параметры:**`},{heading:`checkbox`,content:"`$id` — Идентификатор поля."},{heading:`checkbox`,content:"`$label` — Подпись."},{heading:`checkbox`,content:"**Возвращает:** `FormFieldBuilder` — Строитель поля."},{heading:`textarea`,content:`Добавляет textarea в секцию.`},{heading:`textarea`,content:`**С версии:** 200.4.0`},{heading:`textarea`,content:`**Параметры:**`},{heading:`textarea`,content:"`$id` — Идентификатор поля."},{heading:`textarea`,content:"`$label` — Подпись."},{heading:`textarea`,content:"**Возвращает:** `FormFieldBuilder` — Строитель поля."},{heading:`hidden`,content:`Добавляет скрытое поле в секцию.`},{heading:`hidden`,content:`**С версии:** 200.4.0`},{heading:`hidden`,content:`**Параметры:**`},{heading:`hidden`,content:"`$id` — Идентификатор поля."},{heading:`hidden`,content:"`$label` — Подпись (опционально)."},{heading:`hidden`,content:"**Возвращает:** `FormFieldBuilder` — Строитель поля."},{heading:`section`,content:`Фиксирует секцию и открывает следующую в схеме.`},{heading:`section`,content:`**С версии:** 200.4.0`},{heading:`section`,content:`**Параметры:**`},{heading:`section`,content:"`$title` — Заголовок новой секции."},{heading:`section`,content:"**Возвращает:** `FormSectionBuilder` — Строитель новой секции."},{heading:`build`,content:`Фиксирует секцию и возвращает готовую схему формы.`},{heading:`build`,content:`**С версии:** 200.4.0`},{heading:`build`,content:"**Возвращает:** `\\DevCraft\\Types\\FormSchema` — Собранная схема."},{heading:`beginfield`,content:`Начинает конфигурацию поля указанного типа.`},{heading:`beginfield`,content:`**С версии:** 200.4.0`},{heading:`beginfield`,content:`**Параметры:**`},{heading:`beginfield`,content:"`$id` — Идентификатор поля."},{heading:`beginfield`,content:"`$type` — Тип поля."},{heading:`beginfield`,content:"`$label` — Подпись."},{heading:`beginfield`,content:"**Возвращает:** `FormFieldBuilder` — Строитель поля."},{heading:`commitfield`,content:`Добавляет готовое поле в секцию с проверкой уникальности id.`},{heading:`commitfield`,content:`**С версии:** 200.4.0`},{heading:`commitfield`,content:`**Параметры:**`},{heading:`commitfield`,content:"`$field` — Описание поля."},{heading:`tosection`,content:`Преобразует накопленные поля в объект FormSection.`},{heading:`tosection`,content:`**С версии:** 200.4.0`},{heading:`tosection`,content:"**Возвращает:** `FormSection` — Immutable-секция."},{heading:`commitpending`,content:`Фиксирует незавершённое поле pending, если оно есть.`},{heading:`commitpending`,content:`**С версии:** 200.4.0`}],headings:[{id:`краткое-содержание`,content:`Краткое содержание:`},{id:`свойства`,content:`Свойства`},{id:`методы`,content:`Методы`},{id:`подробности`,content:`Подробности`},{id:`детали`,content:`Детали`},{id:`свойства-1`,content:`Свойства`},{id:`pending`,content:`$pending`},{id:`методы-1`,content:`Методы`},{id:`__construct`,content:`\\__construct()`},{id:`text`,content:`text()`},{id:`number`,content:`number()`},{id:`select`,content:`select()`},{id:`multi`,content:`multi()`},{id:`checkbox`,content:`checkbox()`},{id:`textarea`,content:`textarea()`},{id:`hidden`,content:`hidden()`},{id:`section`,content:`section()`},{id:`build`,content:`build()`},{id:`beginfield`,content:`beginField()`},{id:`commitfield`,content:`commitField()`},{id:`tosection`,content:`toSection()`},{id:`commitpending`,content:`commitPending()`}]},s=[{depth:2,url:`#краткое-содержание`,title:(0,n.jsx)(n.Fragment,{children:`Краткое содержание:`})},{depth:3,url:`#свойства`,title:(0,n.jsx)(n.Fragment,{children:`Свойства`})},{depth:3,url:`#методы`,title:(0,n.jsx)(n.Fragment,{children:`Методы`})},{depth:3,url:`#подробности`,title:(0,n.jsx)(n.Fragment,{children:`Подробности`})},{depth:2,url:`#детали`,title:(0,n.jsx)(n.Fragment,{children:`Детали`})},{depth:3,url:`#свойства-1`,title:(0,n.jsx)(n.Fragment,{children:`Свойства`})},{depth:4,url:`#pending`,title:(0,n.jsx)(n.Fragment,{children:`$pending`})},{depth:3,url:`#методы-1`,title:(0,n.jsx)(n.Fragment,{children:`Методы`})},{depth:3,url:`#__construct`,title:(0,n.jsx)(n.Fragment,{children:`__construct()`})},{depth:3,url:`#text`,title:(0,n.jsx)(n.Fragment,{children:`text()`})},{depth:3,url:`#number`,title:(0,n.jsx)(n.Fragment,{children:`number()`})},{depth:3,url:`#select`,title:(0,n.jsx)(n.Fragment,{children:`select()`})},{depth:3,url:`#multi`,title:(0,n.jsx)(n.Fragment,{children:`multi()`})},{depth:3,url:`#checkbox`,title:(0,n.jsx)(n.Fragment,{children:`checkbox()`})},{depth:3,url:`#textarea`,title:(0,n.jsx)(n.Fragment,{children:`textarea()`})},{depth:3,url:`#hidden`,title:(0,n.jsx)(n.Fragment,{children:`hidden()`})},{depth:3,url:`#section`,title:(0,n.jsx)(n.Fragment,{children:`section()`})},{depth:3,url:`#build`,title:(0,n.jsx)(n.Fragment,{children:`build()`})},{depth:3,url:`#beginfield`,title:(0,n.jsx)(n.Fragment,{children:`beginField()`})},{depth:3,url:`#commitfield`,title:(0,n.jsx)(n.Fragment,{children:`commitField()`})},{depth:3,url:`#tosection`,title:(0,n.jsx)(n.Fragment,{children:`toSection()`})},{depth:3,url:`#commitpending`,title:(0,n.jsx)(n.Fragment,{children:`commitPending()`})}];function c(e){let t={a:`a`,code:`code`,h2:`h2`,h3:`h3`,h4:`h4`,hr:`hr`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h2,{id:`краткое-содержание`,children:`Краткое содержание:`}),`
`,(0,n.jsx)(t.p,{children:`Fluent-строитель секции формы с набором полей.`}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsx)(t.h3,{id:`свойства`,children:`Свойства`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[`private $`,(0,n.jsx)(t.a,{href:`#property_pending`,children:`pending`})]}),`
`]}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsx)(t.h3,{id:`методы`,children:`Методы`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method___construct`,children:`__construct()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method_text`,children:`text()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method_number`,children:`number()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method_select`,children:`select()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method_multi`,children:`multi()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method_checkbox`,children:`checkbox()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method_textarea`,children:`textarea()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method_hidden`,children:`hidden()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method_section`,children:`section()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method_build`,children:`build()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method_beginField`,children:`beginField()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method_commitField`,children:`commitField()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method_toSection`,children:`toSection()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`private `,(0,n.jsx)(t.a,{href:`#method_commitPending`,children:`commitPending()`})]}),`
`]}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsx)(t.h3,{id:`подробности`,children:`Подробности`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[`Путь: `,(0,n.jsx)(t.code,{children:`devcraft/src/classes/Form/FormSectionBuilder.php`})]}),`
`]}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsx)(t.h2,{id:`детали`,children:`Детали`}),`
`,(0,n.jsx)(t.h3,{id:`свойства-1`,children:`Свойства`}),`
`,(0,n.jsx)(`span`,{id:`property_pending`}),`
`,(0,n.jsx)(t.h4,{id:`pending`,children:`$pending`}),`
`,(0,n.jsx)(t.p,{children:`Fluent-строитель секции формы с набором полей.`}),`
`,(0,n.jsx)(t.h3,{id:`методы-1`,children:`Методы`}),`
`,(0,n.jsx)(`span`,{id:`method___construct`}),`
`,(0,n.jsx)(t.h3,{id:`__construct`,children:`__construct()`}),`
`,(0,n.jsx)(t.p,{children:`Создаёт строитель секции.`}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 200.4.0`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$schemaBuilder`}),` — Родительская схема.`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$title`}),` — Заголовок секции.`]}),`
`]}),`
`,(0,n.jsx)(`span`,{id:`method_text`}),`
`,(0,n.jsx)(t.h3,{id:`text`,children:`text()`}),`
`,(0,n.jsx)(t.p,{children:`Добавляет текстовое поле в секцию.`}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 200.4.0`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$id`}),` — Идентификатор поля.`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$label`}),` — Подпись.`]}),`
`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`FormFieldBuilder`}),` — Строитель поля.`]}),`
`,(0,n.jsx)(`span`,{id:`method_number`}),`
`,(0,n.jsx)(t.h3,{id:`number`,children:`number()`}),`
`,(0,n.jsx)(t.p,{children:`Добавляет числовое поле в секцию.`}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 200.4.0`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$id`}),` — Идентификатор поля.`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$label`}),` — Подпись.`]}),`
`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`FormFieldBuilder`}),` — Строитель поля.`]}),`
`,(0,n.jsx)(`span`,{id:`method_select`}),`
`,(0,n.jsx)(t.h3,{id:`select`,children:`select()`}),`
`,(0,n.jsx)(t.p,{children:`Добавляет поле select в секцию.`}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 200.4.0`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$id`}),` — Идентификатор поля.`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$label`}),` — Подпись.`]}),`
`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`FormFieldBuilder`}),` — Строитель поля.`]}),`
`,(0,n.jsx)(`span`,{id:`method_multi`}),`
`,(0,n.jsx)(t.h3,{id:`multi`,children:`multi()`}),`
`,(0,n.jsx)(t.p,{children:`Добавляет поле множественного выбора в секцию.`}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 200.4.0`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$id`}),` — Идентификатор поля.`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$label`}),` — Подпись.`]}),`
`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`FormFieldBuilder`}),` — Строитель поля.`]}),`
`,(0,n.jsx)(`span`,{id:`method_checkbox`}),`
`,(0,n.jsx)(t.h3,{id:`checkbox`,children:`checkbox()`}),`
`,(0,n.jsx)(t.p,{children:`Добавляет чекбокс в секцию.`}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 200.4.0`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$id`}),` — Идентификатор поля.`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$label`}),` — Подпись.`]}),`
`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`FormFieldBuilder`}),` — Строитель поля.`]}),`
`,(0,n.jsx)(`span`,{id:`method_textarea`}),`
`,(0,n.jsx)(t.h3,{id:`textarea`,children:`textarea()`}),`
`,(0,n.jsx)(t.p,{children:`Добавляет textarea в секцию.`}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 200.4.0`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$id`}),` — Идентификатор поля.`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$label`}),` — Подпись.`]}),`
`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`FormFieldBuilder`}),` — Строитель поля.`]}),`
`,(0,n.jsx)(`span`,{id:`method_hidden`}),`
`,(0,n.jsx)(t.h3,{id:`hidden`,children:`hidden()`}),`
`,(0,n.jsx)(t.p,{children:`Добавляет скрытое поле в секцию.`}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 200.4.0`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$id`}),` — Идентификатор поля.`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$label`}),` — Подпись (опционально).`]}),`
`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`FormFieldBuilder`}),` — Строитель поля.`]}),`
`,(0,n.jsx)(`span`,{id:`method_section`}),`
`,(0,n.jsx)(t.h3,{id:`section`,children:`section()`}),`
`,(0,n.jsx)(t.p,{children:`Фиксирует секцию и открывает следующую в схеме.`}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 200.4.0`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$title`}),` — Заголовок новой секции.`]}),`
`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`FormSectionBuilder`}),` — Строитель новой секции.`]}),`
`,(0,n.jsx)(`span`,{id:`method_build`}),`
`,(0,n.jsx)(t.h3,{id:`build`,children:`build()`}),`
`,(0,n.jsx)(t.p,{children:`Фиксирует секцию и возвращает готовую схему формы.`}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 200.4.0`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`\\DevCraft\\Types\\FormSchema`}),` — Собранная схема.`]}),`
`,(0,n.jsx)(`span`,{id:`method_beginField`}),`
`,(0,n.jsx)(t.h3,{id:`beginfield`,children:`beginField()`}),`
`,(0,n.jsx)(t.p,{children:`Начинает конфигурацию поля указанного типа.`}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 200.4.0`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$id`}),` — Идентификатор поля.`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$type`}),` — Тип поля.`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$label`}),` — Подпись.`]}),`
`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`FormFieldBuilder`}),` — Строитель поля.`]}),`
`,(0,n.jsx)(`span`,{id:`method_commitField`}),`
`,(0,n.jsx)(t.h3,{id:`commitfield`,children:`commitField()`}),`
`,(0,n.jsx)(t.p,{children:`Добавляет готовое поле в секцию с проверкой уникальности id.`}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 200.4.0`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$field`}),` — Описание поля.`]}),`
`]}),`
`,(0,n.jsx)(`span`,{id:`method_toSection`}),`
`,(0,n.jsx)(t.h3,{id:`tosection`,children:`toSection()`}),`
`,(0,n.jsx)(t.p,{children:`Преобразует накопленные поля в объект FormSection.`}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 200.4.0`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`FormSection`}),` — Immutable-секция.`]}),`
`,(0,n.jsx)(`span`,{id:`method_commitPending`}),`
`,(0,n.jsx)(t.h3,{id:`commitpending`,children:`commitPending()`}),`
`,(0,n.jsx)(t.p,{children:`Фиксирует незавершённое поле pending, если оно есть.`}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 200.4.0`]})]})}function l(e={}){let{wrapper:t}=e.components||{};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}export{a as _markdown,l as default,r as frontmatter,i as lastModified,o as structuredData,s as toc};