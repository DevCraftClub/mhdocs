import{r as e}from"./rolldown-runtime-QTnfLwEv.js";import{t}from"./jsx-runtime-By8HlURe.js";var n=e(t()),r={title:`Класс: FormFieldBuilder`,description:`Документация по плагину класс: formfieldbuilder для DLE.`},i=new Date(1786541452e3),a=`

## Краткое содержание: [#краткое-содержание]

Fluent-строитель одного поля формы в цепочке FormSchemaBuilder.

***

### Свойства [#свойства]

* private $[description](#property_description)
* private $[filter](#property_filter)
* private $[columns](#property_columns)

***

### Методы [#методы]

* public [\\_\\_construct()](#method___construct)
* public [description()](#method_description)
* public [options()](#method_options)
* public [filter()](#method_filter)
* public [default()](#method_default)
* public [columns()](#method_columns)
* public [metro()](#method_metro)
* public [text()](#method_text)
* public [number()](#method_number)
* public [select()](#method_select)
* public [multi()](#method_multi)
* public [checkbox()](#method_checkbox)
* public [textarea()](#method_textarea)
* public [hidden()](#method_hidden)
* public [section()](#method_section)
* public [build()](#method_build)
* public [toField()](#method_toField)

***

### Подробности [#подробности]

* Путь: \`devcraft/src/classes/Form/FormFieldBuilder.php\`

***

## Детали [#детали]

### Свойства [#свойства-1]

<span id="property_description" />

#### $description [#description]

Описание поля.

<span id="property_filter" />

#### $filter [#filter]

Битовая маска фильтра DLE.

<span id="property_columns" />

#### $columns [#columns]

Число колонок сетки.

### Методы [#методы-1]

<span id="method___construct" />

### \\_\\_construct() [#__construct]

Создаёт строитель поля в контексте секции и схемы.

**С версии:** 200.4.0

**Параметры:**

* \`$sectionBuilder\` — Родительская секция.
* \`$schemaBuilder\` — Корневая схема.
* \`$id\` — Идентификатор поля.
* \`$type\` — Тип поля.
* \`$label\` — Подпись поля.
* \`$description\` — Описание поля.
* \`$filter\` — Битовая маска фильтра DLE.
* \`$default\` — Значение по умолчанию.
* \`$columns\` — Число колонок сетки.

<span id="method_description" />

### description() [#description-1]

Задаёт описание поля.

**С версии:** 200.4.0

**Параметры:**

* \`$description\` — Текст подсказки.

**Возвращает:** \`self\` — Текущий строитель для цепочки.

<span id="method_options" />

### options() [#options]

Задаёт варианты выбора для select или multi.

**С версии:** 200.4.0

**Возвращает:** \`self\` — Текущий строитель.

<span id="method_filter" />

### filter() [#filter-1]

Задаёт битовую маску фильтра DLE для поля.

**С версии:** 200.4.0

**Параметры:**

* \`$filter\` — Маска фильтра.

**Возвращает:** \`self\` — Текущий строитель.

<span id="method_default" />

### default() [#default]

Задаёт значение по умолчанию.

**С версии:** 200.4.0

**Параметры:**

* \`$default\` — Значение по умолчанию.

**Возвращает:** \`self\` — Текущий строитель.

<span id="method_columns" />

### columns() [#columns-1]

Задаёт ширину поля в колонках сетки Metro.

**С версии:** 200.4.0

**Параметры:**

* \`$columns\` — Число колонок (1–12).

**Возвращает:** \`self\` — Текущий строитель.

<span id="method_metro" />

### metro() [#metro]

Задаёт дополнительные атрибуты Metro UI.

**С версии:** 200.4.0

**Возвращает:** \`self\` — Текущий строитель.

<span id="method_text" />

### text() [#text]

Начинает описание текстового поля в текущей секции.

**С версии:** 200.4.0

**Параметры:**

* \`$id\` — Идентификатор поля.
* \`$label\` — Подпись.

**Возвращает:** \`self\` — Новый строитель text-поля.

<span id="method_number" />

### number() [#number]

Начинает описание числового поля.

**С версии:** 200.4.0

**Параметры:**

* \`$id\` — Идентификатор поля.
* \`$label\` — Подпись.

**Возвращает:** \`self\` — Новый строитель number-поля.

<span id="method_select" />

### select() [#select]

Начинает описание поля select.

**С версии:** 200.4.0

**Параметры:**

* \`$id\` — Идентификатор поля.
* \`$label\` — Подпись.

**Возвращает:** \`self\` — Новый строитель select-поля.

<span id="method_multi" />

### multi() [#multi]

Начинает описание поля множественного выбора.

**С версии:** 200.4.0

**Параметры:**

* \`$id\` — Идентификатор поля.
* \`$label\` — Подпись.

**Возвращает:** \`self\` — Новый строитель multi-поля.

<span id="method_checkbox" />

### checkbox() [#checkbox]

Начинает описание чекбокса.

**С версии:** 200.4.0

**Параметры:**

* \`$id\` — Идентификатор поля.
* \`$label\` — Подпись.

**Возвращает:** \`self\` — Новый строитель checkbox-поля.

<span id="method_textarea" />

### textarea() [#textarea]

Начинает описание многострочного поля.

**С версии:** 200.4.0

**Параметры:**

* \`$id\` — Идентификатор поля.
* \`$label\` — Подпись.

**Возвращает:** \`self\` — Новый строитель textarea-поля.

<span id="method_hidden" />

### hidden() [#hidden]

Начинает описание скрытого поля.

**С версии:** 200.4.0

**Параметры:**

* \`$id\` — Идентификатор поля.
* \`$label\` — Подпись (может быть пустой).

**Возвращает:** \`self\` — Новый строитель hidden-поля.

<span id="method_section" />

### section() [#section]

Фиксирует текущее поле и открывает новую секцию.

**С версии:** 200.4.0

**Параметры:**

* \`$title\` — Заголовок новой секции.

**Возвращает:** \`FormSectionBuilder\` — Строитель новой секции.

<span id="method_build" />

### build() [#build]

Фиксирует поле и возвращает готовую схему формы.

**С версии:** 200.4.0

**Возвращает:** \`\\DevCraft\\Types\\FormSchema\` — Собранная схема.

<span id="method_toField" />

### toField() [#tofield]

Преобразует накопленные параметры в объект FormField.

**С версии:** 200.4.0

**Возвращает:** \`FormField\` — Immutable-описание поля.
`,o={contents:[{heading:`краткое-содержание`,content:`Fluent-строитель одного поля формы в цепочке FormSchemaBuilder.`},{heading:`свойства`,content:`private $description`},{heading:`свойства`,content:`private $filter`},{heading:`свойства`,content:`private $columns`},{heading:`методы`,content:`public \\_\\_construct()`},{heading:`методы`,content:`public description()`},{heading:`методы`,content:`public options()`},{heading:`методы`,content:`public filter()`},{heading:`методы`,content:`public default()`},{heading:`методы`,content:`public columns()`},{heading:`методы`,content:`public metro()`},{heading:`методы`,content:`public text()`},{heading:`методы`,content:`public number()`},{heading:`методы`,content:`public select()`},{heading:`методы`,content:`public multi()`},{heading:`методы`,content:`public checkbox()`},{heading:`методы`,content:`public textarea()`},{heading:`методы`,content:`public hidden()`},{heading:`методы`,content:`public section()`},{heading:`методы`,content:`public build()`},{heading:`методы`,content:`public toField()`},{heading:`подробности`,content:"Путь: `devcraft/src/classes/Form/FormFieldBuilder.php`"},{heading:`description`,content:`Описание поля.`},{heading:`filter`,content:`Битовая маска фильтра DLE.`},{heading:`columns`,content:`Число колонок сетки.`},{heading:`__construct`,content:`Создаёт строитель поля в контексте секции и схемы.`},{heading:`__construct`,content:`**С версии:** 200.4.0`},{heading:`__construct`,content:`**Параметры:**`},{heading:`__construct`,content:"`$sectionBuilder` — Родительская секция."},{heading:`__construct`,content:"`$schemaBuilder` — Корневая схема."},{heading:`__construct`,content:"`$id` — Идентификатор поля."},{heading:`__construct`,content:"`$type` — Тип поля."},{heading:`__construct`,content:"`$label` — Подпись поля."},{heading:`__construct`,content:"`$description` — Описание поля."},{heading:`__construct`,content:"`$filter` — Битовая маска фильтра DLE."},{heading:`__construct`,content:"`$default` — Значение по умолчанию."},{heading:`__construct`,content:"`$columns` — Число колонок сетки."},{heading:`description-1`,content:`Задаёт описание поля.`},{heading:`description-1`,content:`**С версии:** 200.4.0`},{heading:`description-1`,content:`**Параметры:**`},{heading:`description-1`,content:"`$description` — Текст подсказки."},{heading:`description-1`,content:"**Возвращает:** `self` — Текущий строитель для цепочки."},{heading:`options`,content:`Задаёт варианты выбора для select или multi.`},{heading:`options`,content:`**С версии:** 200.4.0`},{heading:`options`,content:"**Возвращает:** `self` — Текущий строитель."},{heading:`filter-1`,content:`Задаёт битовую маску фильтра DLE для поля.`},{heading:`filter-1`,content:`**С версии:** 200.4.0`},{heading:`filter-1`,content:`**Параметры:**`},{heading:`filter-1`,content:"`$filter` — Маска фильтра."},{heading:`filter-1`,content:"**Возвращает:** `self` — Текущий строитель."},{heading:`default`,content:`Задаёт значение по умолчанию.`},{heading:`default`,content:`**С версии:** 200.4.0`},{heading:`default`,content:`**Параметры:**`},{heading:`default`,content:"`$default` — Значение по умолчанию."},{heading:`default`,content:"**Возвращает:** `self` — Текущий строитель."},{heading:`columns-1`,content:`Задаёт ширину поля в колонках сетки Metro.`},{heading:`columns-1`,content:`**С версии:** 200.4.0`},{heading:`columns-1`,content:`**Параметры:**`},{heading:`columns-1`,content:"`$columns` — Число колонок (1–12)."},{heading:`columns-1`,content:"**Возвращает:** `self` — Текущий строитель."},{heading:`metro`,content:`Задаёт дополнительные атрибуты Metro UI.`},{heading:`metro`,content:`**С версии:** 200.4.0`},{heading:`metro`,content:"**Возвращает:** `self` — Текущий строитель."},{heading:`text`,content:`Начинает описание текстового поля в текущей секции.`},{heading:`text`,content:`**С версии:** 200.4.0`},{heading:`text`,content:`**Параметры:**`},{heading:`text`,content:"`$id` — Идентификатор поля."},{heading:`text`,content:"`$label` — Подпись."},{heading:`text`,content:"**Возвращает:** `self` — Новый строитель text-поля."},{heading:`number`,content:`Начинает описание числового поля.`},{heading:`number`,content:`**С версии:** 200.4.0`},{heading:`number`,content:`**Параметры:**`},{heading:`number`,content:"`$id` — Идентификатор поля."},{heading:`number`,content:"`$label` — Подпись."},{heading:`number`,content:"**Возвращает:** `self` — Новый строитель number-поля."},{heading:`select`,content:`Начинает описание поля select.`},{heading:`select`,content:`**С версии:** 200.4.0`},{heading:`select`,content:`**Параметры:**`},{heading:`select`,content:"`$id` — Идентификатор поля."},{heading:`select`,content:"`$label` — Подпись."},{heading:`select`,content:"**Возвращает:** `self` — Новый строитель select-поля."},{heading:`multi`,content:`Начинает описание поля множественного выбора.`},{heading:`multi`,content:`**С версии:** 200.4.0`},{heading:`multi`,content:`**Параметры:**`},{heading:`multi`,content:"`$id` — Идентификатор поля."},{heading:`multi`,content:"`$label` — Подпись."},{heading:`multi`,content:"**Возвращает:** `self` — Новый строитель multi-поля."},{heading:`checkbox`,content:`Начинает описание чекбокса.`},{heading:`checkbox`,content:`**С версии:** 200.4.0`},{heading:`checkbox`,content:`**Параметры:**`},{heading:`checkbox`,content:"`$id` — Идентификатор поля."},{heading:`checkbox`,content:"`$label` — Подпись."},{heading:`checkbox`,content:"**Возвращает:** `self` — Новый строитель checkbox-поля."},{heading:`textarea`,content:`Начинает описание многострочного поля.`},{heading:`textarea`,content:`**С версии:** 200.4.0`},{heading:`textarea`,content:`**Параметры:**`},{heading:`textarea`,content:"`$id` — Идентификатор поля."},{heading:`textarea`,content:"`$label` — Подпись."},{heading:`textarea`,content:"**Возвращает:** `self` — Новый строитель textarea-поля."},{heading:`hidden`,content:`Начинает описание скрытого поля.`},{heading:`hidden`,content:`**С версии:** 200.4.0`},{heading:`hidden`,content:`**Параметры:**`},{heading:`hidden`,content:"`$id` — Идентификатор поля."},{heading:`hidden`,content:"`$label` — Подпись (может быть пустой)."},{heading:`hidden`,content:"**Возвращает:** `self` — Новый строитель hidden-поля."},{heading:`section`,content:`Фиксирует текущее поле и открывает новую секцию.`},{heading:`section`,content:`**С версии:** 200.4.0`},{heading:`section`,content:`**Параметры:**`},{heading:`section`,content:"`$title` — Заголовок новой секции."},{heading:`section`,content:"**Возвращает:** `FormSectionBuilder` — Строитель новой секции."},{heading:`build`,content:`Фиксирует поле и возвращает готовую схему формы.`},{heading:`build`,content:`**С версии:** 200.4.0`},{heading:`build`,content:"**Возвращает:** `\\DevCraft\\Types\\FormSchema` — Собранная схема."},{heading:`tofield`,content:`Преобразует накопленные параметры в объект FormField.`},{heading:`tofield`,content:`**С версии:** 200.4.0`},{heading:`tofield`,content:"**Возвращает:** `FormField` — Immutable-описание поля."}],headings:[{id:`краткое-содержание`,content:`Краткое содержание:`},{id:`свойства`,content:`Свойства`},{id:`методы`,content:`Методы`},{id:`подробности`,content:`Подробности`},{id:`детали`,content:`Детали`},{id:`свойства-1`,content:`Свойства`},{id:`description`,content:`$description`},{id:`filter`,content:`$filter`},{id:`columns`,content:`$columns`},{id:`методы-1`,content:`Методы`},{id:`__construct`,content:`\\__construct()`},{id:`description-1`,content:`description()`},{id:`options`,content:`options()`},{id:`filter-1`,content:`filter()`},{id:`default`,content:`default()`},{id:`columns-1`,content:`columns()`},{id:`metro`,content:`metro()`},{id:`text`,content:`text()`},{id:`number`,content:`number()`},{id:`select`,content:`select()`},{id:`multi`,content:`multi()`},{id:`checkbox`,content:`checkbox()`},{id:`textarea`,content:`textarea()`},{id:`hidden`,content:`hidden()`},{id:`section`,content:`section()`},{id:`build`,content:`build()`},{id:`tofield`,content:`toField()`}]},s=[{depth:2,url:`#краткое-содержание`,title:(0,n.jsx)(n.Fragment,{children:`Краткое содержание:`})},{depth:3,url:`#свойства`,title:(0,n.jsx)(n.Fragment,{children:`Свойства`})},{depth:3,url:`#методы`,title:(0,n.jsx)(n.Fragment,{children:`Методы`})},{depth:3,url:`#подробности`,title:(0,n.jsx)(n.Fragment,{children:`Подробности`})},{depth:2,url:`#детали`,title:(0,n.jsx)(n.Fragment,{children:`Детали`})},{depth:3,url:`#свойства-1`,title:(0,n.jsx)(n.Fragment,{children:`Свойства`})},{depth:4,url:`#description`,title:(0,n.jsx)(n.Fragment,{children:`$description`})},{depth:4,url:`#filter`,title:(0,n.jsx)(n.Fragment,{children:`$filter`})},{depth:4,url:`#columns`,title:(0,n.jsx)(n.Fragment,{children:`$columns`})},{depth:3,url:`#методы-1`,title:(0,n.jsx)(n.Fragment,{children:`Методы`})},{depth:3,url:`#__construct`,title:(0,n.jsx)(n.Fragment,{children:`__construct()`})},{depth:3,url:`#description-1`,title:(0,n.jsx)(n.Fragment,{children:`description()`})},{depth:3,url:`#options`,title:(0,n.jsx)(n.Fragment,{children:`options()`})},{depth:3,url:`#filter-1`,title:(0,n.jsx)(n.Fragment,{children:`filter()`})},{depth:3,url:`#default`,title:(0,n.jsx)(n.Fragment,{children:`default()`})},{depth:3,url:`#columns-1`,title:(0,n.jsx)(n.Fragment,{children:`columns()`})},{depth:3,url:`#metro`,title:(0,n.jsx)(n.Fragment,{children:`metro()`})},{depth:3,url:`#text`,title:(0,n.jsx)(n.Fragment,{children:`text()`})},{depth:3,url:`#number`,title:(0,n.jsx)(n.Fragment,{children:`number()`})},{depth:3,url:`#select`,title:(0,n.jsx)(n.Fragment,{children:`select()`})},{depth:3,url:`#multi`,title:(0,n.jsx)(n.Fragment,{children:`multi()`})},{depth:3,url:`#checkbox`,title:(0,n.jsx)(n.Fragment,{children:`checkbox()`})},{depth:3,url:`#textarea`,title:(0,n.jsx)(n.Fragment,{children:`textarea()`})},{depth:3,url:`#hidden`,title:(0,n.jsx)(n.Fragment,{children:`hidden()`})},{depth:3,url:`#section`,title:(0,n.jsx)(n.Fragment,{children:`section()`})},{depth:3,url:`#build`,title:(0,n.jsx)(n.Fragment,{children:`build()`})},{depth:3,url:`#tofield`,title:(0,n.jsx)(n.Fragment,{children:`toField()`})}];function c(e){let t={a:`a`,code:`code`,h2:`h2`,h3:`h3`,h4:`h4`,hr:`hr`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h2,{id:`краткое-содержание`,children:`Краткое содержание:`}),`
`,(0,n.jsx)(t.p,{children:`Fluent-строитель одного поля формы в цепочке FormSchemaBuilder.`}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsx)(t.h3,{id:`свойства`,children:`Свойства`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[`private $`,(0,n.jsx)(t.a,{href:`#property_description`,children:`description`})]}),`
`,(0,n.jsxs)(t.li,{children:[`private $`,(0,n.jsx)(t.a,{href:`#property_filter`,children:`filter`})]}),`
`,(0,n.jsxs)(t.li,{children:[`private $`,(0,n.jsx)(t.a,{href:`#property_columns`,children:`columns`})]}),`
`]}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsx)(t.h3,{id:`методы`,children:`Методы`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method___construct`,children:`__construct()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method_description`,children:`description()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method_options`,children:`options()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method_filter`,children:`filter()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method_default`,children:`default()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method_columns`,children:`columns()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method_metro`,children:`metro()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method_text`,children:`text()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method_number`,children:`number()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method_select`,children:`select()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method_multi`,children:`multi()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method_checkbox`,children:`checkbox()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method_textarea`,children:`textarea()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method_hidden`,children:`hidden()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method_section`,children:`section()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method_build`,children:`build()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method_toField`,children:`toField()`})]}),`
`]}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsx)(t.h3,{id:`подробности`,children:`Подробности`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[`Путь: `,(0,n.jsx)(t.code,{children:`devcraft/src/classes/Form/FormFieldBuilder.php`})]}),`
`]}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsx)(t.h2,{id:`детали`,children:`Детали`}),`
`,(0,n.jsx)(t.h3,{id:`свойства-1`,children:`Свойства`}),`
`,(0,n.jsx)(`span`,{id:`property_description`}),`
`,(0,n.jsx)(t.h4,{id:`description`,children:`$description`}),`
`,(0,n.jsx)(t.p,{children:`Описание поля.`}),`
`,(0,n.jsx)(`span`,{id:`property_filter`}),`
`,(0,n.jsx)(t.h4,{id:`filter`,children:`$filter`}),`
`,(0,n.jsx)(t.p,{children:`Битовая маска фильтра DLE.`}),`
`,(0,n.jsx)(`span`,{id:`property_columns`}),`
`,(0,n.jsx)(t.h4,{id:`columns`,children:`$columns`}),`
`,(0,n.jsx)(t.p,{children:`Число колонок сетки.`}),`
`,(0,n.jsx)(t.h3,{id:`методы-1`,children:`Методы`}),`
`,(0,n.jsx)(`span`,{id:`method___construct`}),`
`,(0,n.jsx)(t.h3,{id:`__construct`,children:`__construct()`}),`
`,(0,n.jsx)(t.p,{children:`Создаёт строитель поля в контексте секции и схемы.`}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 200.4.0`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$sectionBuilder`}),` — Родительская секция.`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$schemaBuilder`}),` — Корневая схема.`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$id`}),` — Идентификатор поля.`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$type`}),` — Тип поля.`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$label`}),` — Подпись поля.`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$description`}),` — Описание поля.`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$filter`}),` — Битовая маска фильтра DLE.`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$default`}),` — Значение по умолчанию.`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$columns`}),` — Число колонок сетки.`]}),`
`]}),`
`,(0,n.jsx)(`span`,{id:`method_description`}),`
`,(0,n.jsx)(t.h3,{id:`description-1`,children:`description()`}),`
`,(0,n.jsx)(t.p,{children:`Задаёт описание поля.`}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 200.4.0`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$description`}),` — Текст подсказки.`]}),`
`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`self`}),` — Текущий строитель для цепочки.`]}),`
`,(0,n.jsx)(`span`,{id:`method_options`}),`
`,(0,n.jsx)(t.h3,{id:`options`,children:`options()`}),`
`,(0,n.jsx)(t.p,{children:`Задаёт варианты выбора для select или multi.`}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 200.4.0`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`self`}),` — Текущий строитель.`]}),`
`,(0,n.jsx)(`span`,{id:`method_filter`}),`
`,(0,n.jsx)(t.h3,{id:`filter-1`,children:`filter()`}),`
`,(0,n.jsx)(t.p,{children:`Задаёт битовую маску фильтра DLE для поля.`}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 200.4.0`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$filter`}),` — Маска фильтра.`]}),`
`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`self`}),` — Текущий строитель.`]}),`
`,(0,n.jsx)(`span`,{id:`method_default`}),`
`,(0,n.jsx)(t.h3,{id:`default`,children:`default()`}),`
`,(0,n.jsx)(t.p,{children:`Задаёт значение по умолчанию.`}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 200.4.0`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$default`}),` — Значение по умолчанию.`]}),`
`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`self`}),` — Текущий строитель.`]}),`
`,(0,n.jsx)(`span`,{id:`method_columns`}),`
`,(0,n.jsx)(t.h3,{id:`columns-1`,children:`columns()`}),`
`,(0,n.jsx)(t.p,{children:`Задаёт ширину поля в колонках сетки Metro.`}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 200.4.0`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$columns`}),` — Число колонок (1–12).`]}),`
`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`self`}),` — Текущий строитель.`]}),`
`,(0,n.jsx)(`span`,{id:`method_metro`}),`
`,(0,n.jsx)(t.h3,{id:`metro`,children:`metro()`}),`
`,(0,n.jsx)(t.p,{children:`Задаёт дополнительные атрибуты Metro UI.`}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 200.4.0`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`self`}),` — Текущий строитель.`]}),`
`,(0,n.jsx)(`span`,{id:`method_text`}),`
`,(0,n.jsx)(t.h3,{id:`text`,children:`text()`}),`
`,(0,n.jsx)(t.p,{children:`Начинает описание текстового поля в текущей секции.`}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 200.4.0`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$id`}),` — Идентификатор поля.`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$label`}),` — Подпись.`]}),`
`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`self`}),` — Новый строитель text-поля.`]}),`
`,(0,n.jsx)(`span`,{id:`method_number`}),`
`,(0,n.jsx)(t.h3,{id:`number`,children:`number()`}),`
`,(0,n.jsx)(t.p,{children:`Начинает описание числового поля.`}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 200.4.0`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$id`}),` — Идентификатор поля.`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$label`}),` — Подпись.`]}),`
`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`self`}),` — Новый строитель number-поля.`]}),`
`,(0,n.jsx)(`span`,{id:`method_select`}),`
`,(0,n.jsx)(t.h3,{id:`select`,children:`select()`}),`
`,(0,n.jsx)(t.p,{children:`Начинает описание поля select.`}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 200.4.0`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$id`}),` — Идентификатор поля.`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$label`}),` — Подпись.`]}),`
`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`self`}),` — Новый строитель select-поля.`]}),`
`,(0,n.jsx)(`span`,{id:`method_multi`}),`
`,(0,n.jsx)(t.h3,{id:`multi`,children:`multi()`}),`
`,(0,n.jsx)(t.p,{children:`Начинает описание поля множественного выбора.`}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 200.4.0`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$id`}),` — Идентификатор поля.`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$label`}),` — Подпись.`]}),`
`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`self`}),` — Новый строитель multi-поля.`]}),`
`,(0,n.jsx)(`span`,{id:`method_checkbox`}),`
`,(0,n.jsx)(t.h3,{id:`checkbox`,children:`checkbox()`}),`
`,(0,n.jsx)(t.p,{children:`Начинает описание чекбокса.`}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 200.4.0`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$id`}),` — Идентификатор поля.`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$label`}),` — Подпись.`]}),`
`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`self`}),` — Новый строитель checkbox-поля.`]}),`
`,(0,n.jsx)(`span`,{id:`method_textarea`}),`
`,(0,n.jsx)(t.h3,{id:`textarea`,children:`textarea()`}),`
`,(0,n.jsx)(t.p,{children:`Начинает описание многострочного поля.`}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 200.4.0`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$id`}),` — Идентификатор поля.`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$label`}),` — Подпись.`]}),`
`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`self`}),` — Новый строитель textarea-поля.`]}),`
`,(0,n.jsx)(`span`,{id:`method_hidden`}),`
`,(0,n.jsx)(t.h3,{id:`hidden`,children:`hidden()`}),`
`,(0,n.jsx)(t.p,{children:`Начинает описание скрытого поля.`}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 200.4.0`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$id`}),` — Идентификатор поля.`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$label`}),` — Подпись (может быть пустой).`]}),`
`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`self`}),` — Новый строитель hidden-поля.`]}),`
`,(0,n.jsx)(`span`,{id:`method_section`}),`
`,(0,n.jsx)(t.h3,{id:`section`,children:`section()`}),`
`,(0,n.jsx)(t.p,{children:`Фиксирует текущее поле и открывает новую секцию.`}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 200.4.0`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$title`}),` — Заголовок новой секции.`]}),`
`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`FormSectionBuilder`}),` — Строитель новой секции.`]}),`
`,(0,n.jsx)(`span`,{id:`method_build`}),`
`,(0,n.jsx)(t.h3,{id:`build`,children:`build()`}),`
`,(0,n.jsx)(t.p,{children:`Фиксирует поле и возвращает готовую схему формы.`}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 200.4.0`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`\\DevCraft\\Types\\FormSchema`}),` — Собранная схема.`]}),`
`,(0,n.jsx)(`span`,{id:`method_toField`}),`
`,(0,n.jsx)(t.h3,{id:`tofield`,children:`toField()`}),`
`,(0,n.jsx)(t.p,{children:`Преобразует накопленные параметры в объект FormField.`}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 200.4.0`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`FormField`}),` — Immutable-описание поля.`]})]})}function l(e={}){let{wrapper:t}=e.components||{};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}export{a as _markdown,l as default,r as frontmatter,i as lastModified,o as structuredData,s as toc};