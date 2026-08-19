import{r as e}from"./rolldown-runtime-QTnfLwEv.js";import{t}from"./jsx-runtime-By8HlURe.js";var n=e(t()),r={title:`Класс: DevCraftConfig`,description:`Документация по плагину класс: devcraftconfig для DLE.`},i=new Date(1787124777e3),a=`

## Краткое содержание: [#краткое-содержание]

Доступ к настройкам плагина DevCraft с учётом схемы и значений по умолчанию.

***

### Свойства [#свойства]

* private $[schema](#property_schema)
* private $[resolvedCache](#property_resolvedCache)

***

### Методы [#методы]

* public [isEmptyValue()](#method_isEmptyValue)
* public [resolveField()](#method_resolveField)
* public [raw()](#method_raw)
* public [all()](#method_all)
* public [get()](#method_get)
* public [resetCache()](#method_resetCache)
* public [isSchemaLoading()](#method_isSchemaLoading)
* private [schema()](#method_schema)

***

### Подробности [#подробности]

* Путь: \`devcraft/src/classes/Config/DevCraftConfig.php\`

***

## Детали [#детали]

### Свойства [#свойства-1]

<span id="property_schema" />

#### $schema [#schema]

Доступ к настройкам плагина DevCraft с учётом схемы и значений по умолчанию.

<span id="property_resolvedCache" />

#### $resolvedCache [#resolvedcache]

Признак активной загрузки settings.schema.php (защита от рекурсии \\_\\_() ↔ schema).

### Методы [#методы-1]

<span id="method_isEmptyValue" />

### isEmptyValue() [#isemptyvalue]

Проверяет, считается ли значение настройки пустым.

**С версии:** 200.4.0

**Параметры:**

* \`$value\` — Проверяемое значение.

**Возвращает:** \`bool\` — True, если значение NULL, пустая строка или 0.

<span id="method_resolveField" />

### resolveField() [#resolvefield]

Подставляет значение по умолчанию из схемы, если сырое значение пустое.

**С версии:** 200.4.0

**Параметры:**

* \`$field\` — Описание поля из FormSchema.
* \`$raw\` — Сырое значение из хранилища настроек.

**Возвращает:** \`mixed\` — Разрешённое значение поля.

<span id="method_raw" />

### raw() [#raw]

Возвращает сырой массив настроек из JSON без загрузки settings.schema.php.

**С версии:** 200.4.0

**Возвращает:** \`array<string,\` — mixed> Настройки из devcraft.json с миграцией ключей.

<span id="method_all" />

### all() [#all]

Возвращает полный массив настроек DevCraft с применённой схемой и кешем.

**С версии:** 200.4.0

**Возвращает:** \`array<string,\` — mixed> Разрешённые настройки плагина.

<span id="method_get" />

### get() [#get]

Возвращает одну настройку по ключу с необязательным значением по умолчанию.

**С версии:** 200.4.0

**Параметры:**

* \`$key\` — Идентификатор настройки.
* \`$default\` — Значение, если ключ отсутствует.

**Возвращает:** \`mixed\` — Значение настройки или $default.

<span id="method_resetCache" />

### resetCache() [#resetcache]

Сбрасывает внутренний кеш разрешённых настроек.

**С версии:** 200.4.0

<span id="method_isSchemaLoading" />

### isSchemaLoading() [#isschemaloading]

Проверяет, выполняется ли в данный момент require settings.schema.php.

**С версии:** 200.4.0

**Возвращает:** \`bool\` — true во время загрузки схемы настроек.

<span id="method_schema" />

### schema() [#schema-1]

Загружает и кеширует FormSchema из settings.schema.php модуля Admin.

**С версии:** 200.4.0

**Возвращает:** \`FormSchema\` — Схема полей настроек DevCraft.
`,o={contents:[{heading:`краткое-содержание`,content:`Доступ к настройкам плагина DevCraft с учётом схемы и значений по умолчанию.`},{heading:`свойства`,content:`private $schema`},{heading:`свойства`,content:`private $resolvedCache`},{heading:`методы`,content:`public isEmptyValue()`},{heading:`методы`,content:`public resolveField()`},{heading:`методы`,content:`public raw()`},{heading:`методы`,content:`public all()`},{heading:`методы`,content:`public get()`},{heading:`методы`,content:`public resetCache()`},{heading:`методы`,content:`public isSchemaLoading()`},{heading:`методы`,content:`private schema()`},{heading:`подробности`,content:"Путь: `devcraft/src/classes/Config/DevCraftConfig.php`"},{heading:`schema`,content:`Доступ к настройкам плагина DevCraft с учётом схемы и значений по умолчанию.`},{heading:`resolvedcache`,content:`Признак активной загрузки settings.schema.php (защита от рекурсии \\_\\_() ↔ schema).`},{heading:`isemptyvalue`,content:`Проверяет, считается ли значение настройки пустым.`},{heading:`isemptyvalue`,content:`**С версии:** 200.4.0`},{heading:`isemptyvalue`,content:`**Параметры:**`},{heading:`isemptyvalue`,content:"`$value` — Проверяемое значение."},{heading:`isemptyvalue`,content:"**Возвращает:** `bool` — True, если значение NULL, пустая строка или 0."},{heading:`resolvefield`,content:`Подставляет значение по умолчанию из схемы, если сырое значение пустое.`},{heading:`resolvefield`,content:`**С версии:** 200.4.0`},{heading:`resolvefield`,content:`**Параметры:**`},{heading:`resolvefield`,content:"`$field` — Описание поля из FormSchema."},{heading:`resolvefield`,content:"`$raw` — Сырое значение из хранилища настроек."},{heading:`resolvefield`,content:"**Возвращает:** `mixed` — Разрешённое значение поля."},{heading:`raw`,content:`Возвращает сырой массив настроек из JSON без загрузки settings.schema.php.`},{heading:`raw`,content:`**С версии:** 200.4.0`},{heading:`raw`,content:"**Возвращает:** `array<string,` — mixed> Настройки из devcraft.json с миграцией ключей."},{heading:`all`,content:`Возвращает полный массив настроек DevCraft с применённой схемой и кешем.`},{heading:`all`,content:`**С версии:** 200.4.0`},{heading:`all`,content:"**Возвращает:** `array<string,` — mixed> Разрешённые настройки плагина."},{heading:`get`,content:`Возвращает одну настройку по ключу с необязательным значением по умолчанию.`},{heading:`get`,content:`**С версии:** 200.4.0`},{heading:`get`,content:`**Параметры:**`},{heading:`get`,content:"`$key` — Идентификатор настройки."},{heading:`get`,content:"`$default` — Значение, если ключ отсутствует."},{heading:`get`,content:"**Возвращает:** `mixed` — Значение настройки или $default."},{heading:`resetcache`,content:`Сбрасывает внутренний кеш разрешённых настроек.`},{heading:`resetcache`,content:`**С версии:** 200.4.0`},{heading:`isschemaloading`,content:`Проверяет, выполняется ли в данный момент require settings.schema.php.`},{heading:`isschemaloading`,content:`**С версии:** 200.4.0`},{heading:`isschemaloading`,content:"**Возвращает:** `bool` — true во время загрузки схемы настроек."},{heading:`schema-1`,content:`Загружает и кеширует FormSchema из settings.schema.php модуля Admin.`},{heading:`schema-1`,content:`**С версии:** 200.4.0`},{heading:`schema-1`,content:"**Возвращает:** `FormSchema` — Схема полей настроек DevCraft."}],headings:[{id:`краткое-содержание`,content:`Краткое содержание:`},{id:`свойства`,content:`Свойства`},{id:`методы`,content:`Методы`},{id:`подробности`,content:`Подробности`},{id:`детали`,content:`Детали`},{id:`свойства-1`,content:`Свойства`},{id:`schema`,content:`$schema`},{id:`resolvedcache`,content:`$resolvedCache`},{id:`методы-1`,content:`Методы`},{id:`isemptyvalue`,content:`isEmptyValue()`},{id:`resolvefield`,content:`resolveField()`},{id:`raw`,content:`raw()`},{id:`all`,content:`all()`},{id:`get`,content:`get()`},{id:`resetcache`,content:`resetCache()`},{id:`isschemaloading`,content:`isSchemaLoading()`},{id:`schema-1`,content:`schema()`}]},s=[{depth:2,url:`#краткое-содержание`,title:(0,n.jsx)(n.Fragment,{children:`Краткое содержание:`})},{depth:3,url:`#свойства`,title:(0,n.jsx)(n.Fragment,{children:`Свойства`})},{depth:3,url:`#методы`,title:(0,n.jsx)(n.Fragment,{children:`Методы`})},{depth:3,url:`#подробности`,title:(0,n.jsx)(n.Fragment,{children:`Подробности`})},{depth:2,url:`#детали`,title:(0,n.jsx)(n.Fragment,{children:`Детали`})},{depth:3,url:`#свойства-1`,title:(0,n.jsx)(n.Fragment,{children:`Свойства`})},{depth:4,url:`#schema`,title:(0,n.jsx)(n.Fragment,{children:`$schema`})},{depth:4,url:`#resolvedcache`,title:(0,n.jsx)(n.Fragment,{children:`$resolvedCache`})},{depth:3,url:`#методы-1`,title:(0,n.jsx)(n.Fragment,{children:`Методы`})},{depth:3,url:`#isemptyvalue`,title:(0,n.jsx)(n.Fragment,{children:`isEmptyValue()`})},{depth:3,url:`#resolvefield`,title:(0,n.jsx)(n.Fragment,{children:`resolveField()`})},{depth:3,url:`#raw`,title:(0,n.jsx)(n.Fragment,{children:`raw()`})},{depth:3,url:`#all`,title:(0,n.jsx)(n.Fragment,{children:`all()`})},{depth:3,url:`#get`,title:(0,n.jsx)(n.Fragment,{children:`get()`})},{depth:3,url:`#resetcache`,title:(0,n.jsx)(n.Fragment,{children:`resetCache()`})},{depth:3,url:`#isschemaloading`,title:(0,n.jsx)(n.Fragment,{children:`isSchemaLoading()`})},{depth:3,url:`#schema-1`,title:(0,n.jsx)(n.Fragment,{children:`schema()`})}];function c(e){let t={a:`a`,code:`code`,h2:`h2`,h3:`h3`,h4:`h4`,hr:`hr`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h2,{id:`краткое-содержание`,children:`Краткое содержание:`}),`
`,(0,n.jsx)(t.p,{children:`Доступ к настройкам плагина DevCraft с учётом схемы и значений по умолчанию.`}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsx)(t.h3,{id:`свойства`,children:`Свойства`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[`private $`,(0,n.jsx)(t.a,{href:`#property_schema`,children:`schema`})]}),`
`,(0,n.jsxs)(t.li,{children:[`private $`,(0,n.jsx)(t.a,{href:`#property_resolvedCache`,children:`resolvedCache`})]}),`
`]}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsx)(t.h3,{id:`методы`,children:`Методы`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method_isEmptyValue`,children:`isEmptyValue()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method_resolveField`,children:`resolveField()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method_raw`,children:`raw()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method_all`,children:`all()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method_get`,children:`get()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method_resetCache`,children:`resetCache()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method_isSchemaLoading`,children:`isSchemaLoading()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`private `,(0,n.jsx)(t.a,{href:`#method_schema`,children:`schema()`})]}),`
`]}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsx)(t.h3,{id:`подробности`,children:`Подробности`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[`Путь: `,(0,n.jsx)(t.code,{children:`devcraft/src/classes/Config/DevCraftConfig.php`})]}),`
`]}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsx)(t.h2,{id:`детали`,children:`Детали`}),`
`,(0,n.jsx)(t.h3,{id:`свойства-1`,children:`Свойства`}),`
`,(0,n.jsx)(`span`,{id:`property_schema`}),`
`,(0,n.jsx)(t.h4,{id:`schema`,children:`$schema`}),`
`,(0,n.jsx)(t.p,{children:`Доступ к настройкам плагина DevCraft с учётом схемы и значений по умолчанию.`}),`
`,(0,n.jsx)(`span`,{id:`property_resolvedCache`}),`
`,(0,n.jsx)(t.h4,{id:`resolvedcache`,children:`$resolvedCache`}),`
`,(0,n.jsx)(t.p,{children:`Признак активной загрузки settings.schema.php (защита от рекурсии __() ↔ schema).`}),`
`,(0,n.jsx)(t.h3,{id:`методы-1`,children:`Методы`}),`
`,(0,n.jsx)(`span`,{id:`method_isEmptyValue`}),`
`,(0,n.jsx)(t.h3,{id:`isemptyvalue`,children:`isEmptyValue()`}),`
`,(0,n.jsx)(t.p,{children:`Проверяет, считается ли значение настройки пустым.`}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 200.4.0`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$value`}),` — Проверяемое значение.`]}),`
`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`bool`}),` — True, если значение NULL, пустая строка или 0.`]}),`
`,(0,n.jsx)(`span`,{id:`method_resolveField`}),`
`,(0,n.jsx)(t.h3,{id:`resolvefield`,children:`resolveField()`}),`
`,(0,n.jsx)(t.p,{children:`Подставляет значение по умолчанию из схемы, если сырое значение пустое.`}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 200.4.0`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$field`}),` — Описание поля из FormSchema.`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$raw`}),` — Сырое значение из хранилища настроек.`]}),`
`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`mixed`}),` — Разрешённое значение поля.`]}),`
`,(0,n.jsx)(`span`,{id:`method_raw`}),`
`,(0,n.jsx)(t.h3,{id:`raw`,children:`raw()`}),`
`,(0,n.jsx)(t.p,{children:`Возвращает сырой массив настроек из JSON без загрузки settings.schema.php.`}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 200.4.0`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`array<string,`}),` — mixed> Настройки из devcraft.json с миграцией ключей.`]}),`
`,(0,n.jsx)(`span`,{id:`method_all`}),`
`,(0,n.jsx)(t.h3,{id:`all`,children:`all()`}),`
`,(0,n.jsx)(t.p,{children:`Возвращает полный массив настроек DevCraft с применённой схемой и кешем.`}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 200.4.0`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`array<string,`}),` — mixed> Разрешённые настройки плагина.`]}),`
`,(0,n.jsx)(`span`,{id:`method_get`}),`
`,(0,n.jsx)(t.h3,{id:`get`,children:`get()`}),`
`,(0,n.jsx)(t.p,{children:`Возвращает одну настройку по ключу с необязательным значением по умолчанию.`}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 200.4.0`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$key`}),` — Идентификатор настройки.`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$default`}),` — Значение, если ключ отсутствует.`]}),`
`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`mixed`}),` — Значение настройки или $default.`]}),`
`,(0,n.jsx)(`span`,{id:`method_resetCache`}),`
`,(0,n.jsx)(t.h3,{id:`resetcache`,children:`resetCache()`}),`
`,(0,n.jsx)(t.p,{children:`Сбрасывает внутренний кеш разрешённых настроек.`}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 200.4.0`]}),`
`,(0,n.jsx)(`span`,{id:`method_isSchemaLoading`}),`
`,(0,n.jsx)(t.h3,{id:`isschemaloading`,children:`isSchemaLoading()`}),`
`,(0,n.jsx)(t.p,{children:`Проверяет, выполняется ли в данный момент require settings.schema.php.`}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 200.4.0`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`bool`}),` — true во время загрузки схемы настроек.`]}),`
`,(0,n.jsx)(`span`,{id:`method_schema`}),`
`,(0,n.jsx)(t.h3,{id:`schema-1`,children:`schema()`}),`
`,(0,n.jsx)(t.p,{children:`Загружает и кеширует FormSchema из settings.schema.php модуля Admin.`}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 200.4.0`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`FormSchema`}),` — Схема полей настроек DevCraft.`]})]})}function l(e={}){let{wrapper:t}=e.components||{};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}export{a as _markdown,l as default,r as frontmatter,i as lastModified,o as structuredData,s as toc};