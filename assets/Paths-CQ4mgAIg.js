import{r as e}from"./rolldown-runtime-QTnfLwEv.js";import{t}from"./jsx-runtime-By8HlURe.js";var n=e(t()),r={title:`Класс: Paths`,description:`Документация по плагину класс: paths для DLE.`},i=new Date(1787142659e3),a=`

## Краткое содержание: [#краткое-содержание]

Регистрация и доступ к путям и URL-адресам DevCraft.

***

### Свойства [#свойства]

*Нет публичных свойств.*

***

### Методы [#методы]

* public [register()](#method_register)
* public [root()](#method_root)
* public [src()](#method_src)
* public [templates()](#method_templates)
* public [locales()](#method_locales)
* public [config()](#method_config)
* public [modules()](#method_modules)
* public [classes()](#method_classes)
* public [logs()](#method_logs)
* public [cache()](#method_cache)
* public [publicAssets()](#method_publicAssets)
* public [base()](#method_base)
* public [ajaxBase()](#method_ajaxBase)
* public [ajaxUrl()](#method_ajaxUrl)

***

### Подробности [#подробности]

* Путь: \`devcraft/src/classes/Config/Paths.php\`

***

## Детали [#детали]

### Методы [#методы-1]

<span id="method_register" />

### register() [#register]

Регистрирует константы путей DevCraft, если они ещё не определены.

**С версии:** 200.4.0

<span id="method_root" />

### root() [#root]

Возвращает абсолютный путь к корню каталога devcraft/.

**С версии:** 200.4.0

**Возвращает:** \`string\` — Значение DEVCRAFT\\_ROOT.

<span id="method_src" />

### src() [#src]

Возвращает абсолютный путь к каталогу devcraft/src/.

**С версии:** 200.4.0

**Возвращает:** \`string\` — Значение DEVCRAFT\\_SRC.

<span id="method_templates" />

### templates() [#templates]

Возвращает абсолютный путь к каталогу шаблонов Twig.

**С версии:** 200.4.0

**Возвращает:** \`string\` — Значение DEVCRAFT\\_TEMPLATES.

<span id="method_locales" />

### locales() [#locales]

Возвращает абсолютный путь к каталогу локалей XLIFF.

**С версии:** 200.4.0

**Возвращает:** \`string\` — Значение DEVCRAFT\\_LOCALES.

<span id="method_config" />

### config() [#config]

Возвращает абсолютный путь к каталогу конфигурации плагина.

**С версии:** 200.4.0

**Возвращает:** \`string\` — Значение DEVCRAFT\\_CONFIG.

<span id="method_modules" />

### modules() [#modules]

Возвращает абсолютный путь к каталогу модулей DevCraft.

**С версии:** 200.4.0

**Возвращает:** \`string\` — Значение DEVCRAFT\\_MODULES.

<span id="method_classes" />

### classes() [#classes]

Возвращает абсолютный путь к каталогу PHP-классов DevCraft.

**С версии:** 200.4.0

**Возвращает:** \`string\` — Значение DEVCRAFT\\_CLASSES.

<span id="method_logs" />

### logs() [#logs]

Возвращает абсолютный путь к каталогу логов плагина.

**С версии:** 200.4.0

**Возвращает:** \`string\` — Значение DEVCRAFT\\_LOGS.

<span id="method_cache" />

### cache() [#cache]

Возвращает абсолютный путь к каталогу кеша плагина.

**С версии:** 200.4.0

**Возвращает:** \`string\` — Значение DEVCRAFT\\_CACHE.

<span id="method_publicAssets" />

### publicAssets() [#publicassets]

Возвращает файловый каталог публичных DevCraft-ресурсов (css/js для AssetsChecker).

**С версии:** 200.4.0

**Возвращает:** \`string\` — Абсолютный путь к devcraft/src/templates/core/assets/.

<span id="method_base" />

### base() [#base]

Возвращает базовый URL сайта DLE без завершающего слэша.

**С версии:** 200.4.0

**Возвращает:** \`string\` — URL из $config\\['http\\_home\\_url'] или «/».

<span id="method_ajaxBase" />

### ajaxBase() [#ajaxbase]

Возвращает базовый URL AJAX-входа DevCraft (\`/devcraft/ajax.php\`).

**С версии:** 200.4.0

**Возвращает:** \`string\` — Полный URL точки входа ajax.php.

<span id="method_ajaxUrl" />

### ajaxUrl() [#ajaxurl]

Формирует полный URL AJAX-запроса с параметрами controller и method.

**С версии:** 200.4.0

**Параметры:**

* \`$method\` — Имя AJAX-метода.
* \`$controller\` — Идентификатор контроллера (по умолчанию «admin»).

**Возвращает:** \`string\` — URL с query-параметрами controller и method.
`,o={contents:[{heading:`краткое-содержание`,content:`Регистрация и доступ к путям и URL-адресам DevCraft.`},{heading:`свойства`,content:`*Нет публичных свойств.*`},{heading:`методы`,content:`public register()`},{heading:`методы`,content:`public root()`},{heading:`методы`,content:`public src()`},{heading:`методы`,content:`public templates()`},{heading:`методы`,content:`public locales()`},{heading:`методы`,content:`public config()`},{heading:`методы`,content:`public modules()`},{heading:`методы`,content:`public classes()`},{heading:`методы`,content:`public logs()`},{heading:`методы`,content:`public cache()`},{heading:`методы`,content:`public publicAssets()`},{heading:`методы`,content:`public base()`},{heading:`методы`,content:`public ajaxBase()`},{heading:`методы`,content:`public ajaxUrl()`},{heading:`подробности`,content:"Путь: `devcraft/src/classes/Config/Paths.php`"},{heading:`register`,content:`Регистрирует константы путей DevCraft, если они ещё не определены.`},{heading:`register`,content:`**С версии:** 200.4.0`},{heading:`root`,content:`Возвращает абсолютный путь к корню каталога devcraft/.`},{heading:`root`,content:`**С версии:** 200.4.0`},{heading:`root`,content:"**Возвращает:** `string` — Значение DEVCRAFT\\_ROOT."},{heading:`src`,content:`Возвращает абсолютный путь к каталогу devcraft/src/.`},{heading:`src`,content:`**С версии:** 200.4.0`},{heading:`src`,content:"**Возвращает:** `string` — Значение DEVCRAFT\\_SRC."},{heading:`templates`,content:`Возвращает абсолютный путь к каталогу шаблонов Twig.`},{heading:`templates`,content:`**С версии:** 200.4.0`},{heading:`templates`,content:"**Возвращает:** `string` — Значение DEVCRAFT\\_TEMPLATES."},{heading:`locales`,content:`Возвращает абсолютный путь к каталогу локалей XLIFF.`},{heading:`locales`,content:`**С версии:** 200.4.0`},{heading:`locales`,content:"**Возвращает:** `string` — Значение DEVCRAFT\\_LOCALES."},{heading:`config`,content:`Возвращает абсолютный путь к каталогу конфигурации плагина.`},{heading:`config`,content:`**С версии:** 200.4.0`},{heading:`config`,content:"**Возвращает:** `string` — Значение DEVCRAFT\\_CONFIG."},{heading:`modules`,content:`Возвращает абсолютный путь к каталогу модулей DevCraft.`},{heading:`modules`,content:`**С версии:** 200.4.0`},{heading:`modules`,content:"**Возвращает:** `string` — Значение DEVCRAFT\\_MODULES."},{heading:`classes`,content:`Возвращает абсолютный путь к каталогу PHP-классов DevCraft.`},{heading:`classes`,content:`**С версии:** 200.4.0`},{heading:`classes`,content:"**Возвращает:** `string` — Значение DEVCRAFT\\_CLASSES."},{heading:`logs`,content:`Возвращает абсолютный путь к каталогу логов плагина.`},{heading:`logs`,content:`**С версии:** 200.4.0`},{heading:`logs`,content:"**Возвращает:** `string` — Значение DEVCRAFT\\_LOGS."},{heading:`cache`,content:`Возвращает абсолютный путь к каталогу кеша плагина.`},{heading:`cache`,content:`**С версии:** 200.4.0`},{heading:`cache`,content:"**Возвращает:** `string` — Значение DEVCRAFT\\_CACHE."},{heading:`publicassets`,content:`Возвращает файловый каталог публичных DevCraft-ресурсов (css/js для AssetsChecker).`},{heading:`publicassets`,content:`**С версии:** 200.4.0`},{heading:`publicassets`,content:"**Возвращает:** `string` — Абсолютный путь к devcraft/src/templates/core/assets/."},{heading:`base`,content:`Возвращает базовый URL сайта DLE без завершающего слэша.`},{heading:`base`,content:`**С версии:** 200.4.0`},{heading:`base`,content:"**Возвращает:** `string` — URL из $config\\['http\\_home\\_url'] или «/»."},{heading:`ajaxbase`,content:"Возвращает базовый URL AJAX-входа DevCraft (`/devcraft/ajax.php`)."},{heading:`ajaxbase`,content:`**С версии:** 200.4.0`},{heading:`ajaxbase`,content:"**Возвращает:** `string` — Полный URL точки входа ajax.php."},{heading:`ajaxurl`,content:`Формирует полный URL AJAX-запроса с параметрами controller и method.`},{heading:`ajaxurl`,content:`**С версии:** 200.4.0`},{heading:`ajaxurl`,content:`**Параметры:**`},{heading:`ajaxurl`,content:"`$method` — Имя AJAX-метода."},{heading:`ajaxurl`,content:"`$controller` — Идентификатор контроллера (по умолчанию «admin»)."},{heading:`ajaxurl`,content:"**Возвращает:** `string` — URL с query-параметрами controller и method."}],headings:[{id:`краткое-содержание`,content:`Краткое содержание:`},{id:`свойства`,content:`Свойства`},{id:`методы`,content:`Методы`},{id:`подробности`,content:`Подробности`},{id:`детали`,content:`Детали`},{id:`методы-1`,content:`Методы`},{id:`register`,content:`register()`},{id:`root`,content:`root()`},{id:`src`,content:`src()`},{id:`templates`,content:`templates()`},{id:`locales`,content:`locales()`},{id:`config`,content:`config()`},{id:`modules`,content:`modules()`},{id:`classes`,content:`classes()`},{id:`logs`,content:`logs()`},{id:`cache`,content:`cache()`},{id:`publicassets`,content:`publicAssets()`},{id:`base`,content:`base()`},{id:`ajaxbase`,content:`ajaxBase()`},{id:`ajaxurl`,content:`ajaxUrl()`}]},s=[{depth:2,url:`#краткое-содержание`,title:(0,n.jsx)(n.Fragment,{children:`Краткое содержание:`})},{depth:3,url:`#свойства`,title:(0,n.jsx)(n.Fragment,{children:`Свойства`})},{depth:3,url:`#методы`,title:(0,n.jsx)(n.Fragment,{children:`Методы`})},{depth:3,url:`#подробности`,title:(0,n.jsx)(n.Fragment,{children:`Подробности`})},{depth:2,url:`#детали`,title:(0,n.jsx)(n.Fragment,{children:`Детали`})},{depth:3,url:`#методы-1`,title:(0,n.jsx)(n.Fragment,{children:`Методы`})},{depth:3,url:`#register`,title:(0,n.jsx)(n.Fragment,{children:`register()`})},{depth:3,url:`#root`,title:(0,n.jsx)(n.Fragment,{children:`root()`})},{depth:3,url:`#src`,title:(0,n.jsx)(n.Fragment,{children:`src()`})},{depth:3,url:`#templates`,title:(0,n.jsx)(n.Fragment,{children:`templates()`})},{depth:3,url:`#locales`,title:(0,n.jsx)(n.Fragment,{children:`locales()`})},{depth:3,url:`#config`,title:(0,n.jsx)(n.Fragment,{children:`config()`})},{depth:3,url:`#modules`,title:(0,n.jsx)(n.Fragment,{children:`modules()`})},{depth:3,url:`#classes`,title:(0,n.jsx)(n.Fragment,{children:`classes()`})},{depth:3,url:`#logs`,title:(0,n.jsx)(n.Fragment,{children:`logs()`})},{depth:3,url:`#cache`,title:(0,n.jsx)(n.Fragment,{children:`cache()`})},{depth:3,url:`#publicassets`,title:(0,n.jsx)(n.Fragment,{children:`publicAssets()`})},{depth:3,url:`#base`,title:(0,n.jsx)(n.Fragment,{children:`base()`})},{depth:3,url:`#ajaxbase`,title:(0,n.jsx)(n.Fragment,{children:`ajaxBase()`})},{depth:3,url:`#ajaxurl`,title:(0,n.jsx)(n.Fragment,{children:`ajaxUrl()`})}];function c(e){let t={a:`a`,code:`code`,em:`em`,h2:`h2`,h3:`h3`,hr:`hr`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h2,{id:`краткое-содержание`,children:`Краткое содержание:`}),`
`,(0,n.jsx)(t.p,{children:`Регистрация и доступ к путям и URL-адресам DevCraft.`}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsx)(t.h3,{id:`свойства`,children:`Свойства`}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.em,{children:`Нет публичных свойств.`})}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsx)(t.h3,{id:`методы`,children:`Методы`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method_register`,children:`register()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method_root`,children:`root()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method_src`,children:`src()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method_templates`,children:`templates()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method_locales`,children:`locales()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method_config`,children:`config()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method_modules`,children:`modules()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method_classes`,children:`classes()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method_logs`,children:`logs()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method_cache`,children:`cache()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method_publicAssets`,children:`publicAssets()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method_base`,children:`base()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method_ajaxBase`,children:`ajaxBase()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method_ajaxUrl`,children:`ajaxUrl()`})]}),`
`]}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsx)(t.h3,{id:`подробности`,children:`Подробности`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[`Путь: `,(0,n.jsx)(t.code,{children:`devcraft/src/classes/Config/Paths.php`})]}),`
`]}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsx)(t.h2,{id:`детали`,children:`Детали`}),`
`,(0,n.jsx)(t.h3,{id:`методы-1`,children:`Методы`}),`
`,(0,n.jsx)(`span`,{id:`method_register`}),`
`,(0,n.jsx)(t.h3,{id:`register`,children:`register()`}),`
`,(0,n.jsx)(t.p,{children:`Регистрирует константы путей DevCraft, если они ещё не определены.`}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 200.4.0`]}),`
`,(0,n.jsx)(`span`,{id:`method_root`}),`
`,(0,n.jsx)(t.h3,{id:`root`,children:`root()`}),`
`,(0,n.jsx)(t.p,{children:`Возвращает абсолютный путь к корню каталога devcraft/.`}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 200.4.0`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`string`}),` — Значение DEVCRAFT_ROOT.`]}),`
`,(0,n.jsx)(`span`,{id:`method_src`}),`
`,(0,n.jsx)(t.h3,{id:`src`,children:`src()`}),`
`,(0,n.jsx)(t.p,{children:`Возвращает абсолютный путь к каталогу devcraft/src/.`}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 200.4.0`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`string`}),` — Значение DEVCRAFT_SRC.`]}),`
`,(0,n.jsx)(`span`,{id:`method_templates`}),`
`,(0,n.jsx)(t.h3,{id:`templates`,children:`templates()`}),`
`,(0,n.jsx)(t.p,{children:`Возвращает абсолютный путь к каталогу шаблонов Twig.`}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 200.4.0`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`string`}),` — Значение DEVCRAFT_TEMPLATES.`]}),`
`,(0,n.jsx)(`span`,{id:`method_locales`}),`
`,(0,n.jsx)(t.h3,{id:`locales`,children:`locales()`}),`
`,(0,n.jsx)(t.p,{children:`Возвращает абсолютный путь к каталогу локалей XLIFF.`}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 200.4.0`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`string`}),` — Значение DEVCRAFT_LOCALES.`]}),`
`,(0,n.jsx)(`span`,{id:`method_config`}),`
`,(0,n.jsx)(t.h3,{id:`config`,children:`config()`}),`
`,(0,n.jsx)(t.p,{children:`Возвращает абсолютный путь к каталогу конфигурации плагина.`}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 200.4.0`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`string`}),` — Значение DEVCRAFT_CONFIG.`]}),`
`,(0,n.jsx)(`span`,{id:`method_modules`}),`
`,(0,n.jsx)(t.h3,{id:`modules`,children:`modules()`}),`
`,(0,n.jsx)(t.p,{children:`Возвращает абсолютный путь к каталогу модулей DevCraft.`}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 200.4.0`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`string`}),` — Значение DEVCRAFT_MODULES.`]}),`
`,(0,n.jsx)(`span`,{id:`method_classes`}),`
`,(0,n.jsx)(t.h3,{id:`classes`,children:`classes()`}),`
`,(0,n.jsx)(t.p,{children:`Возвращает абсолютный путь к каталогу PHP-классов DevCraft.`}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 200.4.0`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`string`}),` — Значение DEVCRAFT_CLASSES.`]}),`
`,(0,n.jsx)(`span`,{id:`method_logs`}),`
`,(0,n.jsx)(t.h3,{id:`logs`,children:`logs()`}),`
`,(0,n.jsx)(t.p,{children:`Возвращает абсолютный путь к каталогу логов плагина.`}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 200.4.0`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`string`}),` — Значение DEVCRAFT_LOGS.`]}),`
`,(0,n.jsx)(`span`,{id:`method_cache`}),`
`,(0,n.jsx)(t.h3,{id:`cache`,children:`cache()`}),`
`,(0,n.jsx)(t.p,{children:`Возвращает абсолютный путь к каталогу кеша плагина.`}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 200.4.0`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`string`}),` — Значение DEVCRAFT_CACHE.`]}),`
`,(0,n.jsx)(`span`,{id:`method_publicAssets`}),`
`,(0,n.jsx)(t.h3,{id:`publicassets`,children:`publicAssets()`}),`
`,(0,n.jsx)(t.p,{children:`Возвращает файловый каталог публичных DevCraft-ресурсов (css/js для AssetsChecker).`}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 200.4.0`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`string`}),` — Абсолютный путь к devcraft/src/templates/core/assets/.`]}),`
`,(0,n.jsx)(`span`,{id:`method_base`}),`
`,(0,n.jsx)(t.h3,{id:`base`,children:`base()`}),`
`,(0,n.jsx)(t.p,{children:`Возвращает базовый URL сайта DLE без завершающего слэша.`}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 200.4.0`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`string`}),` — URL из $config['http_home_url'] или «/».`]}),`
`,(0,n.jsx)(`span`,{id:`method_ajaxBase`}),`
`,(0,n.jsx)(t.h3,{id:`ajaxbase`,children:`ajaxBase()`}),`
`,(0,n.jsxs)(t.p,{children:[`Возвращает базовый URL AJAX-входа DevCraft (`,(0,n.jsx)(t.code,{children:`/devcraft/ajax.php`}),`).`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 200.4.0`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`string`}),` — Полный URL точки входа ajax.php.`]}),`
`,(0,n.jsx)(`span`,{id:`method_ajaxUrl`}),`
`,(0,n.jsx)(t.h3,{id:`ajaxurl`,children:`ajaxUrl()`}),`
`,(0,n.jsx)(t.p,{children:`Формирует полный URL AJAX-запроса с параметрами controller и method.`}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 200.4.0`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$method`}),` — Имя AJAX-метода.`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$controller`}),` — Идентификатор контроллера (по умолчанию «admin»).`]}),`
`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`string`}),` — URL с query-параметрами controller и method.`]})]})}function l(e={}){let{wrapper:t}=e.components||{};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}export{a as _markdown,l as default,r as frontmatter,i as lastModified,o as structuredData,s as toc};