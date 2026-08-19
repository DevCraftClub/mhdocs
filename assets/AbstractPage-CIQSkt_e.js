import{r as e}from"./rolldown-runtime-QTnfLwEv.js";import{t}from"./jsx-runtime-By8HlURe.js";var n=e(t()),r={title:`Класс: AbstractPage`,description:`Документация по плагину класс: abstractpage для DLE.`},i=new Date(1787142659e3),a=`

## Краткое содержание: [#краткое-содержание]

Базовый класс административной страницы с доступом к Twig и контексту админки.

***

### Свойства [#свойства]

* private $[adminContext](#property_adminContext)

***

### Методы [#методы]

* public [resolveViewKey()](#method_resolveViewKey)
* public [bindAdminContext()](#method_bindAdminContext)
* protected [adminContext()](#method_adminContext)
* protected [addBreadcrumb()](#method_addBreadcrumb)
* protected [twig()](#method_twig)
* protected [render()](#method_render)

***

### Подробности [#подробности]

* Путь: \`devcraft/src/classes/Abstracts/AbstractPage.php\`

***

## Детали [#детали]

### Свойства [#свойства-1]

<span id="property_adminContext" />

#### $adminContext [#admincontext]

Базовый класс административной страницы с доступом к Twig и контексту админки.

### Методы [#методы-1]

<span id="method_resolveViewKey" />

### resolveViewKey() [#resolveviewkey]

Нормализует ключ представления для загрузчика Twig.

**С версии:** 200.4.0

**Параметры:**

* \`$view\` — Относительный или абсолютный ключ шаблона.

**Возвращает:** \`string\` — Ключ, понятный загрузчику шаблонов DevCraft.

<span id="method_bindAdminContext" />

### bindAdminContext() [#bindadmincontext]

Привязывает контекст админки к экземпляру страницы.

**С версии:** 200.4.0

**Параметры:**

* \`$adminContext\` — Контекст текущего запроса админки.

<span id="method_adminContext" />

### adminContext() [#admincontext-1]

Возвращает привязанный контекст админки.

**С версии:** 200.4.0

**Возвращает:** \`AdminContext\` — Контекст текущего запроса.

<span id="method_addBreadcrumb" />

### addBreadcrumb() [#addbreadcrumb]

Добавляет элемент хлебных крошек в контекст админки.

**С версии:** 200.4.0

**Параметры:**

* \`$title\` — Заголовок элемента.
* \`$url\` — URL элемента или \`null\` для текущей страницы.

<span id="method_twig" />

### twig() [#twig]

Возвращает экземпляр Twig из приложения.

**С версии:** 200.4.0

**Возвращает:** \`Environment\` — Настроенный движок шаблонов.

<span id="method_render" />

### render() [#render]

Рендерит Twig-шаблон с переданными данными.

**С версии:** 200.4.0

**Параметры:**

* \`$view\` — Ключ или путь шаблона.

**Возвращает:** \`string\` — Сгенерированная HTML-разметка.
`,o={contents:[{heading:`краткое-содержание`,content:`Базовый класс административной страницы с доступом к Twig и контексту админки.`},{heading:`свойства`,content:`private $adminContext`},{heading:`методы`,content:`public resolveViewKey()`},{heading:`методы`,content:`public bindAdminContext()`},{heading:`методы`,content:`protected adminContext()`},{heading:`методы`,content:`protected addBreadcrumb()`},{heading:`методы`,content:`protected twig()`},{heading:`методы`,content:`protected render()`},{heading:`подробности`,content:"Путь: `devcraft/src/classes/Abstracts/AbstractPage.php`"},{heading:`admincontext`,content:`Базовый класс административной страницы с доступом к Twig и контексту админки.`},{heading:`resolveviewkey`,content:`Нормализует ключ представления для загрузчика Twig.`},{heading:`resolveviewkey`,content:`**С версии:** 200.4.0`},{heading:`resolveviewkey`,content:`**Параметры:**`},{heading:`resolveviewkey`,content:"`$view` — Относительный или абсолютный ключ шаблона."},{heading:`resolveviewkey`,content:"**Возвращает:** `string` — Ключ, понятный загрузчику шаблонов DevCraft."},{heading:`bindadmincontext`,content:`Привязывает контекст админки к экземпляру страницы.`},{heading:`bindadmincontext`,content:`**С версии:** 200.4.0`},{heading:`bindadmincontext`,content:`**Параметры:**`},{heading:`bindadmincontext`,content:"`$adminContext` — Контекст текущего запроса админки."},{heading:`admincontext-1`,content:`Возвращает привязанный контекст админки.`},{heading:`admincontext-1`,content:`**С версии:** 200.4.0`},{heading:`admincontext-1`,content:"**Возвращает:** `AdminContext` — Контекст текущего запроса."},{heading:`addbreadcrumb`,content:`Добавляет элемент хлебных крошек в контекст админки.`},{heading:`addbreadcrumb`,content:`**С версии:** 200.4.0`},{heading:`addbreadcrumb`,content:`**Параметры:**`},{heading:`addbreadcrumb`,content:"`$title` — Заголовок элемента."},{heading:`addbreadcrumb`,content:"`$url` — URL элемента или `null` для текущей страницы."},{heading:`twig`,content:`Возвращает экземпляр Twig из приложения.`},{heading:`twig`,content:`**С версии:** 200.4.0`},{heading:`twig`,content:"**Возвращает:** `Environment` — Настроенный движок шаблонов."},{heading:`render`,content:`Рендерит Twig-шаблон с переданными данными.`},{heading:`render`,content:`**С версии:** 200.4.0`},{heading:`render`,content:`**Параметры:**`},{heading:`render`,content:"`$view` — Ключ или путь шаблона."},{heading:`render`,content:"**Возвращает:** `string` — Сгенерированная HTML-разметка."}],headings:[{id:`краткое-содержание`,content:`Краткое содержание:`},{id:`свойства`,content:`Свойства`},{id:`методы`,content:`Методы`},{id:`подробности`,content:`Подробности`},{id:`детали`,content:`Детали`},{id:`свойства-1`,content:`Свойства`},{id:`admincontext`,content:`$adminContext`},{id:`методы-1`,content:`Методы`},{id:`resolveviewkey`,content:`resolveViewKey()`},{id:`bindadmincontext`,content:`bindAdminContext()`},{id:`admincontext-1`,content:`adminContext()`},{id:`addbreadcrumb`,content:`addBreadcrumb()`},{id:`twig`,content:`twig()`},{id:`render`,content:`render()`}]},s=[{depth:2,url:`#краткое-содержание`,title:(0,n.jsx)(n.Fragment,{children:`Краткое содержание:`})},{depth:3,url:`#свойства`,title:(0,n.jsx)(n.Fragment,{children:`Свойства`})},{depth:3,url:`#методы`,title:(0,n.jsx)(n.Fragment,{children:`Методы`})},{depth:3,url:`#подробности`,title:(0,n.jsx)(n.Fragment,{children:`Подробности`})},{depth:2,url:`#детали`,title:(0,n.jsx)(n.Fragment,{children:`Детали`})},{depth:3,url:`#свойства-1`,title:(0,n.jsx)(n.Fragment,{children:`Свойства`})},{depth:4,url:`#admincontext`,title:(0,n.jsx)(n.Fragment,{children:`$adminContext`})},{depth:3,url:`#методы-1`,title:(0,n.jsx)(n.Fragment,{children:`Методы`})},{depth:3,url:`#resolveviewkey`,title:(0,n.jsx)(n.Fragment,{children:`resolveViewKey()`})},{depth:3,url:`#bindadmincontext`,title:(0,n.jsx)(n.Fragment,{children:`bindAdminContext()`})},{depth:3,url:`#admincontext-1`,title:(0,n.jsx)(n.Fragment,{children:`adminContext()`})},{depth:3,url:`#addbreadcrumb`,title:(0,n.jsx)(n.Fragment,{children:`addBreadcrumb()`})},{depth:3,url:`#twig`,title:(0,n.jsx)(n.Fragment,{children:`twig()`})},{depth:3,url:`#render`,title:(0,n.jsx)(n.Fragment,{children:`render()`})}];function c(e){let t={a:`a`,code:`code`,h2:`h2`,h3:`h3`,h4:`h4`,hr:`hr`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h2,{id:`краткое-содержание`,children:`Краткое содержание:`}),`
`,(0,n.jsx)(t.p,{children:`Базовый класс административной страницы с доступом к Twig и контексту админки.`}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsx)(t.h3,{id:`свойства`,children:`Свойства`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[`private $`,(0,n.jsx)(t.a,{href:`#property_adminContext`,children:`adminContext`})]}),`
`]}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsx)(t.h3,{id:`методы`,children:`Методы`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method_resolveViewKey`,children:`resolveViewKey()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method_bindAdminContext`,children:`bindAdminContext()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`protected `,(0,n.jsx)(t.a,{href:`#method_adminContext`,children:`adminContext()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`protected `,(0,n.jsx)(t.a,{href:`#method_addBreadcrumb`,children:`addBreadcrumb()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`protected `,(0,n.jsx)(t.a,{href:`#method_twig`,children:`twig()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`protected `,(0,n.jsx)(t.a,{href:`#method_render`,children:`render()`})]}),`
`]}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsx)(t.h3,{id:`подробности`,children:`Подробности`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[`Путь: `,(0,n.jsx)(t.code,{children:`devcraft/src/classes/Abstracts/AbstractPage.php`})]}),`
`]}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsx)(t.h2,{id:`детали`,children:`Детали`}),`
`,(0,n.jsx)(t.h3,{id:`свойства-1`,children:`Свойства`}),`
`,(0,n.jsx)(`span`,{id:`property_adminContext`}),`
`,(0,n.jsx)(t.h4,{id:`admincontext`,children:`$adminContext`}),`
`,(0,n.jsx)(t.p,{children:`Базовый класс административной страницы с доступом к Twig и контексту админки.`}),`
`,(0,n.jsx)(t.h3,{id:`методы-1`,children:`Методы`}),`
`,(0,n.jsx)(`span`,{id:`method_resolveViewKey`}),`
`,(0,n.jsx)(t.h3,{id:`resolveviewkey`,children:`resolveViewKey()`}),`
`,(0,n.jsx)(t.p,{children:`Нормализует ключ представления для загрузчика Twig.`}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 200.4.0`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$view`}),` — Относительный или абсолютный ключ шаблона.`]}),`
`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`string`}),` — Ключ, понятный загрузчику шаблонов DevCraft.`]}),`
`,(0,n.jsx)(`span`,{id:`method_bindAdminContext`}),`
`,(0,n.jsx)(t.h3,{id:`bindadmincontext`,children:`bindAdminContext()`}),`
`,(0,n.jsx)(t.p,{children:`Привязывает контекст админки к экземпляру страницы.`}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 200.4.0`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$adminContext`}),` — Контекст текущего запроса админки.`]}),`
`]}),`
`,(0,n.jsx)(`span`,{id:`method_adminContext`}),`
`,(0,n.jsx)(t.h3,{id:`admincontext-1`,children:`adminContext()`}),`
`,(0,n.jsx)(t.p,{children:`Возвращает привязанный контекст админки.`}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 200.4.0`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`AdminContext`}),` — Контекст текущего запроса.`]}),`
`,(0,n.jsx)(`span`,{id:`method_addBreadcrumb`}),`
`,(0,n.jsx)(t.h3,{id:`addbreadcrumb`,children:`addBreadcrumb()`}),`
`,(0,n.jsx)(t.p,{children:`Добавляет элемент хлебных крошек в контекст админки.`}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 200.4.0`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$title`}),` — Заголовок элемента.`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$url`}),` — URL элемента или `,(0,n.jsx)(t.code,{children:`null`}),` для текущей страницы.`]}),`
`]}),`
`,(0,n.jsx)(`span`,{id:`method_twig`}),`
`,(0,n.jsx)(t.h3,{id:`twig`,children:`twig()`}),`
`,(0,n.jsx)(t.p,{children:`Возвращает экземпляр Twig из приложения.`}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 200.4.0`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`Environment`}),` — Настроенный движок шаблонов.`]}),`
`,(0,n.jsx)(`span`,{id:`method_render`}),`
`,(0,n.jsx)(t.h3,{id:`render`,children:`render()`}),`
`,(0,n.jsx)(t.p,{children:`Рендерит Twig-шаблон с переданными данными.`}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 200.4.0`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$view`}),` — Ключ или путь шаблона.`]}),`
`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`string`}),` — Сгенерированная HTML-разметка.`]})]})}function l(e={}){let{wrapper:t}=e.components||{};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}export{a as _markdown,l as default,r as frontmatter,i as lastModified,o as structuredData,s as toc};