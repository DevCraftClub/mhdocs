import{r as e}from"./rolldown-runtime-QTnfLwEv.js";import{t}from"./jsx-runtime-By8HlURe.js";var n=e(t()),r={title:`Класс: Router`,description:`Документация по плагину класс: router для DLE.`},i=new Date(1787654208e3),a=`

## Краткое содержание: [#краткое-содержание]

Маршрутизатор административных запросов DevCraft.

***

### Свойства [#свойства]

*Нет публичных свойств.*

***

### Методы [#методы]

* public [dispatch()](#method_dispatch)
* private [buildModuleJsUrls()](#method_buildModuleJsUrls)
* private [buildTranslationJsUrl()](#method_buildTranslationJsUrl)
* private [buildMetroI18nUrl()](#method_buildMetroI18nUrl)
* private [layoutWrap()](#method_layoutWrap)

***

### Подробности [#подробности]

* Путь: \`devcraft/src/classes/Admin/Router.php\`

***

## Детали [#детали]

### Методы [#методы-1]

<span id="method_dispatch" />

### dispatch() [#dispatch]

Обрабатывает запрос админки: инициализирует контекст, вызывает страницу и рендерит layout.

**С версии:** 200.4.0

**Параметры:**

* \`$plugin\` — Контекст модуля.
* \`$action\` — Имя действия или пустая строка для значения по умолчанию.

<span id="method_buildModuleJsUrls" />

### buildModuleJsUrls() [#buildmodulejsurls]

Собирает URL публичных JS-файлов модуля с версией по mtime.

**С версии:** 200.4.0

**Параметры:**

* \`$plugin\` — Контекст модуля.

**Возвращает:** \`list<string>\` — URL скриптов модуля.

<span id="method_buildTranslationJsUrl" />

### buildTranslationJsUrl() [#buildtranslationjsurl]

Формирует URL JS-файла переводов DevCraft для локали.

**С версии:** 200.4.0

**Параметры:**

* \`$locale\` — Код локали DevCraft.

**Возвращает:** \`string\` — URL с параметром версии.

<span id="method_buildMetroI18nUrl" />

### buildMetroI18nUrl() [#buildmetroi18nurl]

Формирует URL локали Metro UI или null, если addon отсутствует.

**С версии:** 200.4.0

**Параметры:**

* \`$metroLocale\` — Код локали Metro.

**Возвращает:** \`string|null\` — URL JS-локали или null.

<span id="method_layoutWrap" />

### layoutWrap() [#layoutwrap]

Оборачивает содержимое страницы в общий layout админки.

**С версии:** 200.4.0

**Параметры:**

* \`$contentView\` — Ключ шаблона страницы.
* \`$adminContext\` — Контекст админки.
* \`$version\` — Версия модуля для layout.

**Возвращает:** \`string\` — HTML layout.
`,o={contents:[{heading:`краткое-содержание`,content:`Маршрутизатор административных запросов DevCraft.`},{heading:`свойства`,content:`*Нет публичных свойств.*`},{heading:`методы`,content:`public dispatch()`},{heading:`методы`,content:`private buildModuleJsUrls()`},{heading:`методы`,content:`private buildTranslationJsUrl()`},{heading:`методы`,content:`private buildMetroI18nUrl()`},{heading:`методы`,content:`private layoutWrap()`},{heading:`подробности`,content:"Путь: `devcraft/src/classes/Admin/Router.php`"},{heading:`dispatch`,content:`Обрабатывает запрос админки: инициализирует контекст, вызывает страницу и рендерит layout.`},{heading:`dispatch`,content:`**С версии:** 200.4.0`},{heading:`dispatch`,content:`**Параметры:**`},{heading:`dispatch`,content:"`$plugin` — Контекст модуля."},{heading:`dispatch`,content:"`$action` — Имя действия или пустая строка для значения по умолчанию."},{heading:`buildmodulejsurls`,content:`Собирает URL публичных JS-файлов модуля с версией по mtime.`},{heading:`buildmodulejsurls`,content:`**С версии:** 200.4.0`},{heading:`buildmodulejsurls`,content:`**Параметры:**`},{heading:`buildmodulejsurls`,content:"`$plugin` — Контекст модуля."},{heading:`buildmodulejsurls`,content:"**Возвращает:** `list<string>` — URL скриптов модуля."},{heading:`buildtranslationjsurl`,content:`Формирует URL JS-файла переводов DevCraft для локали.`},{heading:`buildtranslationjsurl`,content:`**С версии:** 200.4.0`},{heading:`buildtranslationjsurl`,content:`**Параметры:**`},{heading:`buildtranslationjsurl`,content:"`$locale` — Код локали DevCraft."},{heading:`buildtranslationjsurl`,content:"**Возвращает:** `string` — URL с параметром версии."},{heading:`buildmetroi18nurl`,content:`Формирует URL локали Metro UI или null, если addon отсутствует.`},{heading:`buildmetroi18nurl`,content:`**С версии:** 200.4.0`},{heading:`buildmetroi18nurl`,content:`**Параметры:**`},{heading:`buildmetroi18nurl`,content:"`$metroLocale` — Код локали Metro."},{heading:`buildmetroi18nurl`,content:"**Возвращает:** `string|null` — URL JS-локали или null."},{heading:`layoutwrap`,content:`Оборачивает содержимое страницы в общий layout админки.`},{heading:`layoutwrap`,content:`**С версии:** 200.4.0`},{heading:`layoutwrap`,content:`**Параметры:**`},{heading:`layoutwrap`,content:"`$contentView` — Ключ шаблона страницы."},{heading:`layoutwrap`,content:"`$adminContext` — Контекст админки."},{heading:`layoutwrap`,content:"`$version` — Версия модуля для layout."},{heading:`layoutwrap`,content:"**Возвращает:** `string` — HTML layout."}],headings:[{id:`краткое-содержание`,content:`Краткое содержание:`},{id:`свойства`,content:`Свойства`},{id:`методы`,content:`Методы`},{id:`подробности`,content:`Подробности`},{id:`детали`,content:`Детали`},{id:`методы-1`,content:`Методы`},{id:`dispatch`,content:`dispatch()`},{id:`buildmodulejsurls`,content:`buildModuleJsUrls()`},{id:`buildtranslationjsurl`,content:`buildTranslationJsUrl()`},{id:`buildmetroi18nurl`,content:`buildMetroI18nUrl()`},{id:`layoutwrap`,content:`layoutWrap()`}]},s=[{depth:2,url:`#краткое-содержание`,title:(0,n.jsx)(n.Fragment,{children:`Краткое содержание:`})},{depth:3,url:`#свойства`,title:(0,n.jsx)(n.Fragment,{children:`Свойства`})},{depth:3,url:`#методы`,title:(0,n.jsx)(n.Fragment,{children:`Методы`})},{depth:3,url:`#подробности`,title:(0,n.jsx)(n.Fragment,{children:`Подробности`})},{depth:2,url:`#детали`,title:(0,n.jsx)(n.Fragment,{children:`Детали`})},{depth:3,url:`#методы-1`,title:(0,n.jsx)(n.Fragment,{children:`Методы`})},{depth:3,url:`#dispatch`,title:(0,n.jsx)(n.Fragment,{children:`dispatch()`})},{depth:3,url:`#buildmodulejsurls`,title:(0,n.jsx)(n.Fragment,{children:`buildModuleJsUrls()`})},{depth:3,url:`#buildtranslationjsurl`,title:(0,n.jsx)(n.Fragment,{children:`buildTranslationJsUrl()`})},{depth:3,url:`#buildmetroi18nurl`,title:(0,n.jsx)(n.Fragment,{children:`buildMetroI18nUrl()`})},{depth:3,url:`#layoutwrap`,title:(0,n.jsx)(n.Fragment,{children:`layoutWrap()`})}];function c(e){let t={a:`a`,code:`code`,em:`em`,h2:`h2`,h3:`h3`,hr:`hr`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h2,{id:`краткое-содержание`,children:`Краткое содержание:`}),`
`,(0,n.jsx)(t.p,{children:`Маршрутизатор административных запросов DevCraft.`}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsx)(t.h3,{id:`свойства`,children:`Свойства`}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.em,{children:`Нет публичных свойств.`})}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsx)(t.h3,{id:`методы`,children:`Методы`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method_dispatch`,children:`dispatch()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`private `,(0,n.jsx)(t.a,{href:`#method_buildModuleJsUrls`,children:`buildModuleJsUrls()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`private `,(0,n.jsx)(t.a,{href:`#method_buildTranslationJsUrl`,children:`buildTranslationJsUrl()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`private `,(0,n.jsx)(t.a,{href:`#method_buildMetroI18nUrl`,children:`buildMetroI18nUrl()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`private `,(0,n.jsx)(t.a,{href:`#method_layoutWrap`,children:`layoutWrap()`})]}),`
`]}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsx)(t.h3,{id:`подробности`,children:`Подробности`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[`Путь: `,(0,n.jsx)(t.code,{children:`devcraft/src/classes/Admin/Router.php`})]}),`
`]}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsx)(t.h2,{id:`детали`,children:`Детали`}),`
`,(0,n.jsx)(t.h3,{id:`методы-1`,children:`Методы`}),`
`,(0,n.jsx)(`span`,{id:`method_dispatch`}),`
`,(0,n.jsx)(t.h3,{id:`dispatch`,children:`dispatch()`}),`
`,(0,n.jsx)(t.p,{children:`Обрабатывает запрос админки: инициализирует контекст, вызывает страницу и рендерит layout.`}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 200.4.0`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$plugin`}),` — Контекст модуля.`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$action`}),` — Имя действия или пустая строка для значения по умолчанию.`]}),`
`]}),`
`,(0,n.jsx)(`span`,{id:`method_buildModuleJsUrls`}),`
`,(0,n.jsx)(t.h3,{id:`buildmodulejsurls`,children:`buildModuleJsUrls()`}),`
`,(0,n.jsx)(t.p,{children:`Собирает URL публичных JS-файлов модуля с версией по mtime.`}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 200.4.0`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$plugin`}),` — Контекст модуля.`]}),`
`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`list<string>`}),` — URL скриптов модуля.`]}),`
`,(0,n.jsx)(`span`,{id:`method_buildTranslationJsUrl`}),`
`,(0,n.jsx)(t.h3,{id:`buildtranslationjsurl`,children:`buildTranslationJsUrl()`}),`
`,(0,n.jsx)(t.p,{children:`Формирует URL JS-файла переводов DevCraft для локали.`}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 200.4.0`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$locale`}),` — Код локали DevCraft.`]}),`
`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`string`}),` — URL с параметром версии.`]}),`
`,(0,n.jsx)(`span`,{id:`method_buildMetroI18nUrl`}),`
`,(0,n.jsx)(t.h3,{id:`buildmetroi18nurl`,children:`buildMetroI18nUrl()`}),`
`,(0,n.jsx)(t.p,{children:`Формирует URL локали Metro UI или null, если addon отсутствует.`}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 200.4.0`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$metroLocale`}),` — Код локали Metro.`]}),`
`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`string|null`}),` — URL JS-локали или null.`]}),`
`,(0,n.jsx)(`span`,{id:`method_layoutWrap`}),`
`,(0,n.jsx)(t.h3,{id:`layoutwrap`,children:`layoutWrap()`}),`
`,(0,n.jsx)(t.p,{children:`Оборачивает содержимое страницы в общий layout админки.`}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 200.4.0`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$contentView`}),` — Ключ шаблона страницы.`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$adminContext`}),` — Контекст админки.`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$version`}),` — Версия модуля для layout.`]}),`
`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`string`}),` — HTML layout.`]})]})}function l(e={}){let{wrapper:t}=e.components||{};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}export{a as _markdown,l as default,r as frontmatter,i as lastModified,o as structuredData,s as toc};