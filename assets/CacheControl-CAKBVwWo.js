import{r as e}from"./rolldown-runtime-QTnfLwEv.js";import{t}from"./jsx-runtime-By8HlURe.js";var n=e(t()),r={title:`Класс: CacheControl`,description:`Документация по плагину класс: cachecontrol для DLE.`},i=new Date(1787145028e3),a=`

## Краткое содержание: [#краткое-содержание]

Файловый кэш DevCraft: запись, чтение и очистка по типу и имени.

***

### Свойства [#свойства]

* private $[path](#property_path)

***

### Методы [#методы]

* public [init()](#method_init)
* public [setPath()](#method_setPath)
* public [getPath()](#method_getPath)
* public [setCache()](#method_setCache)
* public [getCache()](#method_getCache)
* public [clearCache()](#method_clearCache)

***

### Подробности [#подробности]

* Путь: \`devcraft/src/classes/Cache/CacheControl.php\`

***

## Детали [#детали]

### Свойства [#свойства-1]

<span id="property_path" />

#### $path [#path]

Файловый кэш DevCraft: запись, чтение и очистка по типу и имени.

### Методы [#методы-1]

<span id="method_init" />

### init() [#init]

Инициализирует путь к кэшу из конфигурации или переданного аргумента.

**С версии:** 200.4.0

**Параметры:**

* \`$path\` — Явный путь к кэшу; при null — из DevCraftConfig.

<span id="method_setPath" />

### setPath() [#setpath]

Устанавливает корневой каталог файлового кэша.

**С версии:** 200.4.0

**Параметры:**

* \`$path\` — Абсолютный или нормализованный путь к кэшу.

<span id="method_getPath" />

### getPath() [#getpath]

Возвращает текущий корневой каталог кэша.

**С версии:** 200.4.0

**Возвращает:** \`string|null\` — Путь к кэшу или null, если не инициализирован.

<span id="method_setCache" />

### setCache() [#setcache]

Сохраняет данные в файловый кэш по типу и имени.

**С версии:** 200.4.0

**Параметры:**

* \`$type\` — Тип кэша (подкаталог).
* \`$name\` — Имя записи кэша.
* \`$data\` — Данные для сохранения; массивы сериализуются в JSON.

<span id="method_getCache" />

### getCache() [#getcache]

Читает данные из файлового кэша по типу и имени.

**С версии:** 200.4.0

**Параметры:**

* \`$type\` — Тип кэша (подкаталог).
* \`$name\` — Имя записи кэша.

**Возвращает:** \`mixed\` — Декодированные данные, строка или false при отсутствии/ошибке.

<span id="method_clearCache" />

### clearCache() [#clearcache]

Очищает кэш целиком, по типу или списку типов.

**С версии:** 200.4.0
`,o={contents:[{heading:`краткое-содержание`,content:`Файловый кэш DevCraft: запись, чтение и очистка по типу и имени.`},{heading:`свойства`,content:`private $path`},{heading:`методы`,content:`public init()`},{heading:`методы`,content:`public setPath()`},{heading:`методы`,content:`public getPath()`},{heading:`методы`,content:`public setCache()`},{heading:`методы`,content:`public getCache()`},{heading:`методы`,content:`public clearCache()`},{heading:`подробности`,content:"Путь: `devcraft/src/classes/Cache/CacheControl.php`"},{heading:`path`,content:`Файловый кэш DevCraft: запись, чтение и очистка по типу и имени.`},{heading:`init`,content:`Инициализирует путь к кэшу из конфигурации или переданного аргумента.`},{heading:`init`,content:`**С версии:** 200.4.0`},{heading:`init`,content:`**Параметры:**`},{heading:`init`,content:"`$path` — Явный путь к кэшу; при null — из DevCraftConfig."},{heading:`setpath`,content:`Устанавливает корневой каталог файлового кэша.`},{heading:`setpath`,content:`**С версии:** 200.4.0`},{heading:`setpath`,content:`**Параметры:**`},{heading:`setpath`,content:"`$path` — Абсолютный или нормализованный путь к кэшу."},{heading:`getpath`,content:`Возвращает текущий корневой каталог кэша.`},{heading:`getpath`,content:`**С версии:** 200.4.0`},{heading:`getpath`,content:"**Возвращает:** `string|null` — Путь к кэшу или null, если не инициализирован."},{heading:`setcache`,content:`Сохраняет данные в файловый кэш по типу и имени.`},{heading:`setcache`,content:`**С версии:** 200.4.0`},{heading:`setcache`,content:`**Параметры:**`},{heading:`setcache`,content:"`$type` — Тип кэша (подкаталог)."},{heading:`setcache`,content:"`$name` — Имя записи кэша."},{heading:`setcache`,content:"`$data` — Данные для сохранения; массивы сериализуются в JSON."},{heading:`getcache`,content:`Читает данные из файлового кэша по типу и имени.`},{heading:`getcache`,content:`**С версии:** 200.4.0`},{heading:`getcache`,content:`**Параметры:**`},{heading:`getcache`,content:"`$type` — Тип кэша (подкаталог)."},{heading:`getcache`,content:"`$name` — Имя записи кэша."},{heading:`getcache`,content:"**Возвращает:** `mixed` — Декодированные данные, строка или false при отсутствии/ошибке."},{heading:`clearcache`,content:`Очищает кэш целиком, по типу или списку типов.`},{heading:`clearcache`,content:`**С версии:** 200.4.0`}],headings:[{id:`краткое-содержание`,content:`Краткое содержание:`},{id:`свойства`,content:`Свойства`},{id:`методы`,content:`Методы`},{id:`подробности`,content:`Подробности`},{id:`детали`,content:`Детали`},{id:`свойства-1`,content:`Свойства`},{id:`path`,content:`$path`},{id:`методы-1`,content:`Методы`},{id:`init`,content:`init()`},{id:`setpath`,content:`setPath()`},{id:`getpath`,content:`getPath()`},{id:`setcache`,content:`setCache()`},{id:`getcache`,content:`getCache()`},{id:`clearcache`,content:`clearCache()`}]},s=[{depth:2,url:`#краткое-содержание`,title:(0,n.jsx)(n.Fragment,{children:`Краткое содержание:`})},{depth:3,url:`#свойства`,title:(0,n.jsx)(n.Fragment,{children:`Свойства`})},{depth:3,url:`#методы`,title:(0,n.jsx)(n.Fragment,{children:`Методы`})},{depth:3,url:`#подробности`,title:(0,n.jsx)(n.Fragment,{children:`Подробности`})},{depth:2,url:`#детали`,title:(0,n.jsx)(n.Fragment,{children:`Детали`})},{depth:3,url:`#свойства-1`,title:(0,n.jsx)(n.Fragment,{children:`Свойства`})},{depth:4,url:`#path`,title:(0,n.jsx)(n.Fragment,{children:`$path`})},{depth:3,url:`#методы-1`,title:(0,n.jsx)(n.Fragment,{children:`Методы`})},{depth:3,url:`#init`,title:(0,n.jsx)(n.Fragment,{children:`init()`})},{depth:3,url:`#setpath`,title:(0,n.jsx)(n.Fragment,{children:`setPath()`})},{depth:3,url:`#getpath`,title:(0,n.jsx)(n.Fragment,{children:`getPath()`})},{depth:3,url:`#setcache`,title:(0,n.jsx)(n.Fragment,{children:`setCache()`})},{depth:3,url:`#getcache`,title:(0,n.jsx)(n.Fragment,{children:`getCache()`})},{depth:3,url:`#clearcache`,title:(0,n.jsx)(n.Fragment,{children:`clearCache()`})}];function c(e){let t={a:`a`,code:`code`,h2:`h2`,h3:`h3`,h4:`h4`,hr:`hr`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h2,{id:`краткое-содержание`,children:`Краткое содержание:`}),`
`,(0,n.jsx)(t.p,{children:`Файловый кэш DevCraft: запись, чтение и очистка по типу и имени.`}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsx)(t.h3,{id:`свойства`,children:`Свойства`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[`private $`,(0,n.jsx)(t.a,{href:`#property_path`,children:`path`})]}),`
`]}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsx)(t.h3,{id:`методы`,children:`Методы`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method_init`,children:`init()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method_setPath`,children:`setPath()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method_getPath`,children:`getPath()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method_setCache`,children:`setCache()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method_getCache`,children:`getCache()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method_clearCache`,children:`clearCache()`})]}),`
`]}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsx)(t.h3,{id:`подробности`,children:`Подробности`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[`Путь: `,(0,n.jsx)(t.code,{children:`devcraft/src/classes/Cache/CacheControl.php`})]}),`
`]}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsx)(t.h2,{id:`детали`,children:`Детали`}),`
`,(0,n.jsx)(t.h3,{id:`свойства-1`,children:`Свойства`}),`
`,(0,n.jsx)(`span`,{id:`property_path`}),`
`,(0,n.jsx)(t.h4,{id:`path`,children:`$path`}),`
`,(0,n.jsx)(t.p,{children:`Файловый кэш DevCraft: запись, чтение и очистка по типу и имени.`}),`
`,(0,n.jsx)(t.h3,{id:`методы-1`,children:`Методы`}),`
`,(0,n.jsx)(`span`,{id:`method_init`}),`
`,(0,n.jsx)(t.h3,{id:`init`,children:`init()`}),`
`,(0,n.jsx)(t.p,{children:`Инициализирует путь к кэшу из конфигурации или переданного аргумента.`}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 200.4.0`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$path`}),` — Явный путь к кэшу; при null — из DevCraftConfig.`]}),`
`]}),`
`,(0,n.jsx)(`span`,{id:`method_setPath`}),`
`,(0,n.jsx)(t.h3,{id:`setpath`,children:`setPath()`}),`
`,(0,n.jsx)(t.p,{children:`Устанавливает корневой каталог файлового кэша.`}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 200.4.0`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$path`}),` — Абсолютный или нормализованный путь к кэшу.`]}),`
`]}),`
`,(0,n.jsx)(`span`,{id:`method_getPath`}),`
`,(0,n.jsx)(t.h3,{id:`getpath`,children:`getPath()`}),`
`,(0,n.jsx)(t.p,{children:`Возвращает текущий корневой каталог кэша.`}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 200.4.0`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`string|null`}),` — Путь к кэшу или null, если не инициализирован.`]}),`
`,(0,n.jsx)(`span`,{id:`method_setCache`}),`
`,(0,n.jsx)(t.h3,{id:`setcache`,children:`setCache()`}),`
`,(0,n.jsx)(t.p,{children:`Сохраняет данные в файловый кэш по типу и имени.`}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 200.4.0`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$type`}),` — Тип кэша (подкаталог).`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$name`}),` — Имя записи кэша.`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$data`}),` — Данные для сохранения; массивы сериализуются в JSON.`]}),`
`]}),`
`,(0,n.jsx)(`span`,{id:`method_getCache`}),`
`,(0,n.jsx)(t.h3,{id:`getcache`,children:`getCache()`}),`
`,(0,n.jsx)(t.p,{children:`Читает данные из файлового кэша по типу и имени.`}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 200.4.0`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$type`}),` — Тип кэша (подкаталог).`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$name`}),` — Имя записи кэша.`]}),`
`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`mixed`}),` — Декодированные данные, строка или false при отсутствии/ошибке.`]}),`
`,(0,n.jsx)(`span`,{id:`method_clearCache`}),`
`,(0,n.jsx)(t.h3,{id:`clearcache`,children:`clearCache()`}),`
`,(0,n.jsx)(t.p,{children:`Очищает кэш целиком, по типу или списку типов.`}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 200.4.0`]})]})}function l(e={}){let{wrapper:t}=e.components||{};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}export{a as _markdown,l as default,r as frontmatter,i as lastModified,o as structuredData,s as toc};