import{r as e}from"./rolldown-runtime-QTnfLwEv.js";import{t}from"./jsx-runtime-By8HlURe.js";var n=e(t()),r={title:`Класс: PluginContext`,description:`Документация по плагину класс: plugincontext для DLE.`},i=new Date(1785400635e3),a=`

## Краткое содержание: [#краткое-содержание]

Контекст одного DevCraft-модуля после загрузки manifest.php.

***

### Свойства [#свойства]

* private $[settingsSchema](#property_settingsSchema)

***

### Методы [#методы]

* public [\\_\\_construct()](#method___construct)
* public [mod()](#method_mod)
* public [meta()](#method_meta)
* public [menu()](#method_menu)
* public [pageClass()](#method_pageClass)
* public [defaultAction()](#method_defaultAction)
* public [settingsSchema()](#method_settingsSchema)
* public [filterSchema()](#method_filterSchema)
* public [ajaxMethods()](#method_ajaxMethods)
* public [ajaxController()](#method_ajaxController)
* public [modulePath()](#method_modulePath)
* public [jsAssetFiles()](#method_jsAssetFiles)
* public [moduleData()](#method_moduleData)
* public [changelog()](#method_changelog)
* private [parseMenu()](#method_parseMenu)
* private [parseAjaxMethods()](#method_parseAjaxMethods)
* private [loadSchemas()](#method_loadSchemas)

***

### Подробности [#подробности]

* Путь: \`devcraft/src/classes/Module/PluginContext.php\`

***

## Детали [#детали]

### Свойства [#свойства-1]

<span id="property_settingsSchema" />

#### $settingsSchema [#settingsschema]

Контекст одного DevCraft-модуля после загрузки manifest.php.

### Методы [#методы-1]

<span id="method___construct" />

### \\_\\_construct() [#__construct]

Создаёт контекст плагина из загруженного манифеста и пути к модулю.

**С версии:** 200.4.0

**Параметры:**

* \`$mod\` — Идентификатор модуля в URL админки.
* \`$modulePath\` — Абсолютный путь к каталогу модуля.

<span id="method_mod" />

### mod() [#mod]

Возвращает идентификатор модуля (mod) для URL и конфигурации.

**С версии:** 200.4.0

**Возвращает:** \`string\` — Значение mod из манифеста или переопределения.

<span id="method_meta" />

### meta() [#meta]

Возвращает блок meta манифеста с добавленным module\\_code.

**С версии:** 200.4.0

**Возвращает:** \`array<string,\` — mixed> Метаданные модуля для шаблонов.

<span id="method_menu" />

### menu() [#menu]

Возвращает пункты меню админки модуля.

**С версии:** 200.4.0

**Возвращает:** \`AdminLink[]\` — Ссылки меню из manifest.php.

<span id="method_pageClass" />

### pageClass() [#pageclass]

Возвращает FQCN класса страницы для указанного action.

**С версии:** 200.4.0

**Параметры:**

* \`$action\` — Имя action из URL.

**Возвращает:** \`string|null\` — FQCN класса страницы или null.

<span id="method_defaultAction" />

### defaultAction() [#defaultaction]

Возвращает action страницы по умолчанию (start) для модуля.

**С версии:** 200.4.0

**Возвращает:** \`string|null\` — Имя action или null, если меню пусто.

<span id="method_settingsSchema" />

### settingsSchema() [#settingsschema-1]

Возвращает схему настроек модуля, если файл settings.schema.php существует.

**С версии:** 200.4.0

**Возвращает:** \`FormSchema|null\` — Схема полей или null.

<span id="method_filterSchema" />

### filterSchema() [#filterschema]

Возвращает схему фильтра для указанного action (например, «logs»).

**С версии:** 200.4.0

**Параметры:**

* \`$action\` — Ключ action, для которого загружена схема фильтра.

**Возвращает:** \`FilterSchema|null\` — Схема фильтра или null.

<span id="method_ajaxMethods" />

### ajaxMethods() [#ajaxmethods]

Возвращает карту зарегистрированных AJAX-методов модуля.

**С версии:** 200.4.0

**Возвращает:** \`array<string,\` — class-string> Имя метода => FQCN обработчика.

<span id="method_ajaxController" />

### ajaxController() [#ajaxcontroller]

Возвращает идентификатор AJAX-контроллера из манифеста.

**С версии:** 200.4.0

**Возвращает:** \`string\` — Значение ajax.controller (по умолчанию «admin»).

<span id="method_modulePath" />

### modulePath() [#modulepath]

Возвращает абсолютный путь к корневому каталогу модуля.

**С версии:** 200.4.0

**Возвращает:** \`string\` — Путь к каталогу модуля на диске.

<span id="method_jsAssetFiles" />

### jsAssetFiles() [#jsassetfiles]

Возвращает список имён JS-файлов из секции assets.js манифеста.

**С версии:** 200.4.0

**Возвращает:** \`list<string>\` — Имена файлов относительно Public/.

<span id="method_moduleData" />

### moduleData() [#moduledata]

Формирует объект ModuleData для реестра и шаблонов.

**С версии:** 200.4.0

**Возвращает:** \`ModuleData\` — Агрегированные метаданные модуля.

<span id="method_changelog" />

### changelog() [#changelog]

Возвращает записи changelog модуля.

**С версии:** 200.4.0

**Возвращает:** \`Changelog[]\` — История изменений из changelog.data.php.

<span id="method_parseMenu" />

### parseMenu() [#parsemenu]

Преобразует сырой массив menu из манифеста в объекты AdminLink.

**С версии:** 200.4.0

**Возвращает:** \`AdminLink[]\` — Только элементы типа AdminLink.

<span id="method_parseAjaxMethods" />

### parseAjaxMethods() [#parseajaxmethods]

Нормализует карту AJAX-методов из манифеста.

**С версии:** 200.4.0

**Возвращает:** \`array<string,\` — class-string> Валидные пары method => handler.

<span id="method_loadSchemas" />

### loadSchemas() [#loadschemas]

Загружает settings.schema.php и logs.filter.schema.php модуля при наличии.

**С версии:** 200.4.0
`,o={contents:[{heading:`краткое-содержание`,content:`Контекст одного DevCraft-модуля после загрузки manifest.php.`},{heading:`свойства`,content:`private $settingsSchema`},{heading:`методы`,content:`public \\_\\_construct()`},{heading:`методы`,content:`public mod()`},{heading:`методы`,content:`public meta()`},{heading:`методы`,content:`public menu()`},{heading:`методы`,content:`public pageClass()`},{heading:`методы`,content:`public defaultAction()`},{heading:`методы`,content:`public settingsSchema()`},{heading:`методы`,content:`public filterSchema()`},{heading:`методы`,content:`public ajaxMethods()`},{heading:`методы`,content:`public ajaxController()`},{heading:`методы`,content:`public modulePath()`},{heading:`методы`,content:`public jsAssetFiles()`},{heading:`методы`,content:`public moduleData()`},{heading:`методы`,content:`public changelog()`},{heading:`методы`,content:`private parseMenu()`},{heading:`методы`,content:`private parseAjaxMethods()`},{heading:`методы`,content:`private loadSchemas()`},{heading:`подробности`,content:"Путь: `devcraft/src/classes/Module/PluginContext.php`"},{heading:`settingsschema`,content:`Контекст одного DevCraft-модуля после загрузки manifest.php.`},{heading:`__construct`,content:`Создаёт контекст плагина из загруженного манифеста и пути к модулю.`},{heading:`__construct`,content:`**С версии:** 200.4.0`},{heading:`__construct`,content:`**Параметры:**`},{heading:`__construct`,content:"`$mod` — Идентификатор модуля в URL админки."},{heading:`__construct`,content:"`$modulePath` — Абсолютный путь к каталогу модуля."},{heading:`mod`,content:`Возвращает идентификатор модуля (mod) для URL и конфигурации.`},{heading:`mod`,content:`**С версии:** 200.4.0`},{heading:`mod`,content:"**Возвращает:** `string` — Значение mod из манифеста или переопределения."},{heading:`meta`,content:`Возвращает блок meta манифеста с добавленным module\\_code.`},{heading:`meta`,content:`**С версии:** 200.4.0`},{heading:`meta`,content:"**Возвращает:** `array<string,` — mixed> Метаданные модуля для шаблонов."},{heading:`menu`,content:`Возвращает пункты меню админки модуля.`},{heading:`menu`,content:`**С версии:** 200.4.0`},{heading:`menu`,content:"**Возвращает:** `AdminLink[]` — Ссылки меню из manifest.php."},{heading:`pageclass`,content:`Возвращает FQCN класса страницы для указанного action.`},{heading:`pageclass`,content:`**С версии:** 200.4.0`},{heading:`pageclass`,content:`**Параметры:**`},{heading:`pageclass`,content:"`$action` — Имя action из URL."},{heading:`pageclass`,content:"**Возвращает:** `string|null` — FQCN класса страницы или null."},{heading:`defaultaction`,content:`Возвращает action страницы по умолчанию (start) для модуля.`},{heading:`defaultaction`,content:`**С версии:** 200.4.0`},{heading:`defaultaction`,content:"**Возвращает:** `string|null` — Имя action или null, если меню пусто."},{heading:`settingsschema-1`,content:`Возвращает схему настроек модуля, если файл settings.schema.php существует.`},{heading:`settingsschema-1`,content:`**С версии:** 200.4.0`},{heading:`settingsschema-1`,content:"**Возвращает:** `FormSchema|null` — Схема полей или null."},{heading:`filterschema`,content:`Возвращает схему фильтра для указанного action (например, «logs»).`},{heading:`filterschema`,content:`**С версии:** 200.4.0`},{heading:`filterschema`,content:`**Параметры:**`},{heading:`filterschema`,content:"`$action` — Ключ action, для которого загружена схема фильтра."},{heading:`filterschema`,content:"**Возвращает:** `FilterSchema|null` — Схема фильтра или null."},{heading:`ajaxmethods`,content:`Возвращает карту зарегистрированных AJAX-методов модуля.`},{heading:`ajaxmethods`,content:`**С версии:** 200.4.0`},{heading:`ajaxmethods`,content:"**Возвращает:** `array<string,` — class-string> Имя метода => FQCN обработчика."},{heading:`ajaxcontroller`,content:`Возвращает идентификатор AJAX-контроллера из манифеста.`},{heading:`ajaxcontroller`,content:`**С версии:** 200.4.0`},{heading:`ajaxcontroller`,content:"**Возвращает:** `string` — Значение ajax.controller (по умолчанию «admin»)."},{heading:`modulepath`,content:`Возвращает абсолютный путь к корневому каталогу модуля.`},{heading:`modulepath`,content:`**С версии:** 200.4.0`},{heading:`modulepath`,content:"**Возвращает:** `string` — Путь к каталогу модуля на диске."},{heading:`jsassetfiles`,content:`Возвращает список имён JS-файлов из секции assets.js манифеста.`},{heading:`jsassetfiles`,content:`**С версии:** 200.4.0`},{heading:`jsassetfiles`,content:"**Возвращает:** `list<string>` — Имена файлов относительно Public/."},{heading:`moduledata`,content:`Формирует объект ModuleData для реестра и шаблонов.`},{heading:`moduledata`,content:`**С версии:** 200.4.0`},{heading:`moduledata`,content:"**Возвращает:** `ModuleData` — Агрегированные метаданные модуля."},{heading:`changelog`,content:`Возвращает записи changelog модуля.`},{heading:`changelog`,content:`**С версии:** 200.4.0`},{heading:`changelog`,content:"**Возвращает:** `Changelog[]` — История изменений из changelog.data.php."},{heading:`parsemenu`,content:`Преобразует сырой массив menu из манифеста в объекты AdminLink.`},{heading:`parsemenu`,content:`**С версии:** 200.4.0`},{heading:`parsemenu`,content:"**Возвращает:** `AdminLink[]` — Только элементы типа AdminLink."},{heading:`parseajaxmethods`,content:`Нормализует карту AJAX-методов из манифеста.`},{heading:`parseajaxmethods`,content:`**С версии:** 200.4.0`},{heading:`parseajaxmethods`,content:"**Возвращает:** `array<string,` — class-string> Валидные пары method => handler."},{heading:`loadschemas`,content:`Загружает settings.schema.php и logs.filter.schema.php модуля при наличии.`},{heading:`loadschemas`,content:`**С версии:** 200.4.0`}],headings:[{id:`краткое-содержание`,content:`Краткое содержание:`},{id:`свойства`,content:`Свойства`},{id:`методы`,content:`Методы`},{id:`подробности`,content:`Подробности`},{id:`детали`,content:`Детали`},{id:`свойства-1`,content:`Свойства`},{id:`settingsschema`,content:`$settingsSchema`},{id:`методы-1`,content:`Методы`},{id:`__construct`,content:`\\__construct()`},{id:`mod`,content:`mod()`},{id:`meta`,content:`meta()`},{id:`menu`,content:`menu()`},{id:`pageclass`,content:`pageClass()`},{id:`defaultaction`,content:`defaultAction()`},{id:`settingsschema-1`,content:`settingsSchema()`},{id:`filterschema`,content:`filterSchema()`},{id:`ajaxmethods`,content:`ajaxMethods()`},{id:`ajaxcontroller`,content:`ajaxController()`},{id:`modulepath`,content:`modulePath()`},{id:`jsassetfiles`,content:`jsAssetFiles()`},{id:`moduledata`,content:`moduleData()`},{id:`changelog`,content:`changelog()`},{id:`parsemenu`,content:`parseMenu()`},{id:`parseajaxmethods`,content:`parseAjaxMethods()`},{id:`loadschemas`,content:`loadSchemas()`}]},s=[{depth:2,url:`#краткое-содержание`,title:(0,n.jsx)(n.Fragment,{children:`Краткое содержание:`})},{depth:3,url:`#свойства`,title:(0,n.jsx)(n.Fragment,{children:`Свойства`})},{depth:3,url:`#методы`,title:(0,n.jsx)(n.Fragment,{children:`Методы`})},{depth:3,url:`#подробности`,title:(0,n.jsx)(n.Fragment,{children:`Подробности`})},{depth:2,url:`#детали`,title:(0,n.jsx)(n.Fragment,{children:`Детали`})},{depth:3,url:`#свойства-1`,title:(0,n.jsx)(n.Fragment,{children:`Свойства`})},{depth:4,url:`#settingsschema`,title:(0,n.jsx)(n.Fragment,{children:`$settingsSchema`})},{depth:3,url:`#методы-1`,title:(0,n.jsx)(n.Fragment,{children:`Методы`})},{depth:3,url:`#__construct`,title:(0,n.jsx)(n.Fragment,{children:`__construct()`})},{depth:3,url:`#mod`,title:(0,n.jsx)(n.Fragment,{children:`mod()`})},{depth:3,url:`#meta`,title:(0,n.jsx)(n.Fragment,{children:`meta()`})},{depth:3,url:`#menu`,title:(0,n.jsx)(n.Fragment,{children:`menu()`})},{depth:3,url:`#pageclass`,title:(0,n.jsx)(n.Fragment,{children:`pageClass()`})},{depth:3,url:`#defaultaction`,title:(0,n.jsx)(n.Fragment,{children:`defaultAction()`})},{depth:3,url:`#settingsschema-1`,title:(0,n.jsx)(n.Fragment,{children:`settingsSchema()`})},{depth:3,url:`#filterschema`,title:(0,n.jsx)(n.Fragment,{children:`filterSchema()`})},{depth:3,url:`#ajaxmethods`,title:(0,n.jsx)(n.Fragment,{children:`ajaxMethods()`})},{depth:3,url:`#ajaxcontroller`,title:(0,n.jsx)(n.Fragment,{children:`ajaxController()`})},{depth:3,url:`#modulepath`,title:(0,n.jsx)(n.Fragment,{children:`modulePath()`})},{depth:3,url:`#jsassetfiles`,title:(0,n.jsx)(n.Fragment,{children:`jsAssetFiles()`})},{depth:3,url:`#moduledata`,title:(0,n.jsx)(n.Fragment,{children:`moduleData()`})},{depth:3,url:`#changelog`,title:(0,n.jsx)(n.Fragment,{children:`changelog()`})},{depth:3,url:`#parsemenu`,title:(0,n.jsx)(n.Fragment,{children:`parseMenu()`})},{depth:3,url:`#parseajaxmethods`,title:(0,n.jsx)(n.Fragment,{children:`parseAjaxMethods()`})},{depth:3,url:`#loadschemas`,title:(0,n.jsx)(n.Fragment,{children:`loadSchemas()`})}];function c(e){let t={a:`a`,code:`code`,h2:`h2`,h3:`h3`,h4:`h4`,hr:`hr`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h2,{id:`краткое-содержание`,children:`Краткое содержание:`}),`
`,(0,n.jsx)(t.p,{children:`Контекст одного DevCraft-модуля после загрузки manifest.php.`}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsx)(t.h3,{id:`свойства`,children:`Свойства`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[`private $`,(0,n.jsx)(t.a,{href:`#property_settingsSchema`,children:`settingsSchema`})]}),`
`]}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsx)(t.h3,{id:`методы`,children:`Методы`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method___construct`,children:`__construct()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method_mod`,children:`mod()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method_meta`,children:`meta()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method_menu`,children:`menu()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method_pageClass`,children:`pageClass()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method_defaultAction`,children:`defaultAction()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method_settingsSchema`,children:`settingsSchema()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method_filterSchema`,children:`filterSchema()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method_ajaxMethods`,children:`ajaxMethods()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method_ajaxController`,children:`ajaxController()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method_modulePath`,children:`modulePath()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method_jsAssetFiles`,children:`jsAssetFiles()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method_moduleData`,children:`moduleData()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method_changelog`,children:`changelog()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`private `,(0,n.jsx)(t.a,{href:`#method_parseMenu`,children:`parseMenu()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`private `,(0,n.jsx)(t.a,{href:`#method_parseAjaxMethods`,children:`parseAjaxMethods()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`private `,(0,n.jsx)(t.a,{href:`#method_loadSchemas`,children:`loadSchemas()`})]}),`
`]}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsx)(t.h3,{id:`подробности`,children:`Подробности`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[`Путь: `,(0,n.jsx)(t.code,{children:`devcraft/src/classes/Module/PluginContext.php`})]}),`
`]}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsx)(t.h2,{id:`детали`,children:`Детали`}),`
`,(0,n.jsx)(t.h3,{id:`свойства-1`,children:`Свойства`}),`
`,(0,n.jsx)(`span`,{id:`property_settingsSchema`}),`
`,(0,n.jsx)(t.h4,{id:`settingsschema`,children:`$settingsSchema`}),`
`,(0,n.jsx)(t.p,{children:`Контекст одного DevCraft-модуля после загрузки manifest.php.`}),`
`,(0,n.jsx)(t.h3,{id:`методы-1`,children:`Методы`}),`
`,(0,n.jsx)(`span`,{id:`method___construct`}),`
`,(0,n.jsx)(t.h3,{id:`__construct`,children:`__construct()`}),`
`,(0,n.jsx)(t.p,{children:`Создаёт контекст плагина из загруженного манифеста и пути к модулю.`}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 200.4.0`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$mod`}),` — Идентификатор модуля в URL админки.`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$modulePath`}),` — Абсолютный путь к каталогу модуля.`]}),`
`]}),`
`,(0,n.jsx)(`span`,{id:`method_mod`}),`
`,(0,n.jsx)(t.h3,{id:`mod`,children:`mod()`}),`
`,(0,n.jsx)(t.p,{children:`Возвращает идентификатор модуля (mod) для URL и конфигурации.`}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 200.4.0`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`string`}),` — Значение mod из манифеста или переопределения.`]}),`
`,(0,n.jsx)(`span`,{id:`method_meta`}),`
`,(0,n.jsx)(t.h3,{id:`meta`,children:`meta()`}),`
`,(0,n.jsx)(t.p,{children:`Возвращает блок meta манифеста с добавленным module_code.`}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 200.4.0`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`array<string,`}),` — mixed> Метаданные модуля для шаблонов.`]}),`
`,(0,n.jsx)(`span`,{id:`method_menu`}),`
`,(0,n.jsx)(t.h3,{id:`menu`,children:`menu()`}),`
`,(0,n.jsx)(t.p,{children:`Возвращает пункты меню админки модуля.`}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 200.4.0`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`AdminLink[]`}),` — Ссылки меню из manifest.php.`]}),`
`,(0,n.jsx)(`span`,{id:`method_pageClass`}),`
`,(0,n.jsx)(t.h3,{id:`pageclass`,children:`pageClass()`}),`
`,(0,n.jsx)(t.p,{children:`Возвращает FQCN класса страницы для указанного action.`}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 200.4.0`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$action`}),` — Имя action из URL.`]}),`
`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`string|null`}),` — FQCN класса страницы или null.`]}),`
`,(0,n.jsx)(`span`,{id:`method_defaultAction`}),`
`,(0,n.jsx)(t.h3,{id:`defaultaction`,children:`defaultAction()`}),`
`,(0,n.jsx)(t.p,{children:`Возвращает action страницы по умолчанию (start) для модуля.`}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 200.4.0`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`string|null`}),` — Имя action или null, если меню пусто.`]}),`
`,(0,n.jsx)(`span`,{id:`method_settingsSchema`}),`
`,(0,n.jsx)(t.h3,{id:`settingsschema-1`,children:`settingsSchema()`}),`
`,(0,n.jsx)(t.p,{children:`Возвращает схему настроек модуля, если файл settings.schema.php существует.`}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 200.4.0`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`FormSchema|null`}),` — Схема полей или null.`]}),`
`,(0,n.jsx)(`span`,{id:`method_filterSchema`}),`
`,(0,n.jsx)(t.h3,{id:`filterschema`,children:`filterSchema()`}),`
`,(0,n.jsx)(t.p,{children:`Возвращает схему фильтра для указанного action (например, «logs»).`}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 200.4.0`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$action`}),` — Ключ action, для которого загружена схема фильтра.`]}),`
`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`FilterSchema|null`}),` — Схема фильтра или null.`]}),`
`,(0,n.jsx)(`span`,{id:`method_ajaxMethods`}),`
`,(0,n.jsx)(t.h3,{id:`ajaxmethods`,children:`ajaxMethods()`}),`
`,(0,n.jsx)(t.p,{children:`Возвращает карту зарегистрированных AJAX-методов модуля.`}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 200.4.0`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`array<string,`}),` — class-string> Имя метода => FQCN обработчика.`]}),`
`,(0,n.jsx)(`span`,{id:`method_ajaxController`}),`
`,(0,n.jsx)(t.h3,{id:`ajaxcontroller`,children:`ajaxController()`}),`
`,(0,n.jsx)(t.p,{children:`Возвращает идентификатор AJAX-контроллера из манифеста.`}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 200.4.0`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`string`}),` — Значение ajax.controller (по умолчанию «admin»).`]}),`
`,(0,n.jsx)(`span`,{id:`method_modulePath`}),`
`,(0,n.jsx)(t.h3,{id:`modulepath`,children:`modulePath()`}),`
`,(0,n.jsx)(t.p,{children:`Возвращает абсолютный путь к корневому каталогу модуля.`}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 200.4.0`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`string`}),` — Путь к каталогу модуля на диске.`]}),`
`,(0,n.jsx)(`span`,{id:`method_jsAssetFiles`}),`
`,(0,n.jsx)(t.h3,{id:`jsassetfiles`,children:`jsAssetFiles()`}),`
`,(0,n.jsx)(t.p,{children:`Возвращает список имён JS-файлов из секции assets.js манифеста.`}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 200.4.0`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`list<string>`}),` — Имена файлов относительно Public/.`]}),`
`,(0,n.jsx)(`span`,{id:`method_moduleData`}),`
`,(0,n.jsx)(t.h3,{id:`moduledata`,children:`moduleData()`}),`
`,(0,n.jsx)(t.p,{children:`Формирует объект ModuleData для реестра и шаблонов.`}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 200.4.0`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`ModuleData`}),` — Агрегированные метаданные модуля.`]}),`
`,(0,n.jsx)(`span`,{id:`method_changelog`}),`
`,(0,n.jsx)(t.h3,{id:`changelog`,children:`changelog()`}),`
`,(0,n.jsx)(t.p,{children:`Возвращает записи changelog модуля.`}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 200.4.0`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`Changelog[]`}),` — История изменений из changelog.data.php.`]}),`
`,(0,n.jsx)(`span`,{id:`method_parseMenu`}),`
`,(0,n.jsx)(t.h3,{id:`parsemenu`,children:`parseMenu()`}),`
`,(0,n.jsx)(t.p,{children:`Преобразует сырой массив menu из манифеста в объекты AdminLink.`}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 200.4.0`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`AdminLink[]`}),` — Только элементы типа AdminLink.`]}),`
`,(0,n.jsx)(`span`,{id:`method_parseAjaxMethods`}),`
`,(0,n.jsx)(t.h3,{id:`parseajaxmethods`,children:`parseAjaxMethods()`}),`
`,(0,n.jsx)(t.p,{children:`Нормализует карту AJAX-методов из манифеста.`}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 200.4.0`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`array<string,`}),` — class-string> Валидные пары method => handler.`]}),`
`,(0,n.jsx)(`span`,{id:`method_loadSchemas`}),`
`,(0,n.jsx)(t.h3,{id:`loadschemas`,children:`loadSchemas()`}),`
`,(0,n.jsx)(t.p,{children:`Загружает settings.schema.php и logs.filter.schema.php модуля при наличии.`}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 200.4.0`]})]})}function l(e={}){let{wrapper:t}=e.components||{};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}export{a as _markdown,l as default,r as frontmatter,i as lastModified,o as structuredData,s as toc};