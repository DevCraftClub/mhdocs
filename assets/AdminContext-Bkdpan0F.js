import{r as e}from"./rolldown-runtime-QTnfLwEv.js";import{t}from"./jsx-runtime-By8HlURe.js";var n=e(t()),r={title:`Класс: AdminContext`,description:`Документация по плагину класс: admincontext для DLE.`},i=new Date(1786544989e3),a=`

## Краткое содержание: [#краткое-содержание]

Контекст административной панели для текущего запроса модуля.

***

### Свойства [#свойства]

* public $[dashboardName](#property_dashboardName)
* public $[licenseAgreementLink](#property_licenseAgreementLink)

***

### Методы [#методы]

* public [\\_\\_construct()](#method___construct)
* public [forPlugin()](#method_forPlugin)
* public [setCurrentAction()](#method_setCurrentAction)
* public [currentAction()](#method_currentAction)
* public [menu()](#method_menu)
* public [breadcrumbs()](#method_breadcrumbs)
* public [author()](#method_author)
* public [url()](#method_url)
* public [licLink()](#method_licLink)
* public [addBreadcrumb()](#method_addBreadcrumb)
* public [finalizeBreadcrumbs()](#method_finalizeBreadcrumbs)
* public [addCss()](#method_addCss)
* public [addJs()](#method_addJs)
* public [cssUrls()](#method_cssUrls)
* public [jsUrls()](#method_jsUrls)
* public [toArray()](#method_toArray)
* private [resolveSiteUrl()](#method_resolveSiteUrl)
* private [baseCssUrls()](#method_baseCssUrls)
* private [baseJsUrls()](#method_baseJsUrls)

***

### Подробности [#подробности]

* Путь: \`devcraft/src/classes/Admin/AdminContext.php\`

***

## Детали [#детали]

### Свойства [#свойства-1]

<span id="property_dashboardName" />

#### $dashboardName [#dashboardname]

Контекст административной панели для текущего запроса модуля.

<span id="property_licenseAgreementLink" />

#### $licenseAgreementLink [#licenseagreementlink]

Ссылка на пользовательское соглашение между автором и пользователем. По умолчанию: [https://devcraft.club/pages/licence-agreement/](https://devcraft.club/pages/licence-agreement/)

### Методы [#методы-1]

<span id="method___construct" />

### \\_\\_construct() [#__construct]

Создаёт контекст админки для указанного модуля.

**С версии:** 200.4.0

**Параметры:**

* \`$plugin\` — Контекст модуля.

<span id="method_forPlugin" />

### forPlugin() [#forplugin]

Фабричный метод создания контекста для модуля.

**С версии:** 200.4.0

**Параметры:**

* \`$plugin\` — Контекст модуля.

**Возвращает:** \`self\` — Новый экземпляр контекста.

<span id="method_setCurrentAction" />

### setCurrentAction() [#setcurrentaction]

Устанавливает текущее действие админки.

**С версии:** 200.4.0

**Параметры:**

* \`$action\` — Имя действия.

**Возвращает:** \`self\` — Текущий экземпляр для цепочки вызовов.

<span id="method_currentAction" />

### currentAction() [#currentaction]

Возвращает текущее действие админки.

**С версии:** 200.4.0

**Возвращает:** \`string\` — Имя действия.

<span id="method_menu" />

### menu() [#menu]

Возвращает меню админки.

**С версии:** 200.4.0

**Возвращает:** \`AdminLink[]\` — Список корневых пунктов меню.

<span id="method_breadcrumbs" />

### breadcrumbs() [#breadcrumbs]

Возвращает хлебные крошки страницы.

**С версии:** 200.4.0

**Возвращает:** \`BreadCrumb[]\` — Список крошек.

<span id="method_author" />

### author() [#author]

Возвращает данные автора модуля.

**С версии:** 200.4.0

**Возвращает:** \`Author\` — Объект автора.

<span id="method_url" />

### url() [#url]

Возвращает базовый URL сайта.

**С версии:** 200.4.0

**Возвращает:** \`string\` — URL без завершающего слэша.

<span id="method_licLink" />

### licLink() [#liclink]

Возвращает ссылку на лицензионное соглашение.

**С версии:** 200.4.0

**Возвращает:** \`string\` — URL соглашения.

<span id="method_addBreadcrumb" />

### addBreadcrumb() [#addbreadcrumb]

Добавляет хлебную крошку в конец списка.

**С версии:** 200.4.0

**Параметры:**

* \`$title\` — Заголовок крошки.
* \`$url\` — Необязательная ссылка.

**Возвращает:** \`self\` — Текущий экземпляр для цепочки вызовов.

<span id="method_finalizeBreadcrumbs" />

### finalizeBreadcrumbs() [#finalizebreadcrumbs]

Дополняет крошки ссылкой на dashboard и сохраняет крошки страницы.

**С версии:** 200.4.0

**Параметры:**

* \`$mod\` — Имя модуля.
* \`$action\` — Текущее действие.

<span id="method_addCss" />

### addCss() [#addcss]

Регистрирует дополнительный CSS-файл.

**С версии:** 200.4.0

**Параметры:**

* \`$url\` — URL стиля.

**Возвращает:** \`self\` — Текущий экземпляр для цепочки вызовов.

<span id="method_addJs" />

### addJs() [#addjs]

Регистрирует дополнительный JS-файл.

**С версии:** 200.4.0

**Параметры:**

* \`$url\` — URL скрипта.

**Возвращает:** \`self\` — Текущий экземпляр для цепочки вызовов.

<span id="method_cssUrls" />

### cssUrls() [#cssurls]

Возвращает список URL CSS-файлов.

**С версии:** 200.4.0

**Возвращает:** \`string[]\` — URL стилей.

<span id="method_jsUrls" />

### jsUrls() [#jsurls]

Возвращает список URL JS-файлов.

**С версии:** 200.4.0

**Возвращает:** \`string[]\` — URL скриптов.

<span id="method_toArray" />

### toArray() [#toarray]

Преобразует контекст в массив для передачи в Twig.

**С версии:** 200.4.0

**Возвращает:** \`array<string,\` — mixed> Ассоциативный массив данных layout.

<span id="method_resolveSiteUrl" />

### resolveSiteUrl() [#resolvesiteurl]

Определяет базовый URL сайта из глобальной конфигурации DLE.

**С версии:** 200.4.0

**Возвращает:** \`string\` — URL без завершающего слэша.

<span id="method_baseCssUrls" />

### baseCssUrls() [#basecssurls]

Формирует базовый список CSS DevCraft.

**С версии:** 200.4.0

**Возвращает:** \`string[]\` — URL стилей Metro и DevCraft.

<span id="method_baseJsUrls" />

### baseJsUrls() [#basejsurls]

Формирует базовый список JS DevCraft.

**С версии:** 200.4.0

**Возвращает:** \`string[]\` — URL скриптов Metro и DevCraft.
`,o={contents:[{heading:`краткое-содержание`,content:`Контекст административной панели для текущего запроса модуля.`},{heading:`свойства`,content:`public $dashboardName`},{heading:`свойства`,content:`public $licenseAgreementLink`},{heading:`методы`,content:`public \\_\\_construct()`},{heading:`методы`,content:`public forPlugin()`},{heading:`методы`,content:`public setCurrentAction()`},{heading:`методы`,content:`public currentAction()`},{heading:`методы`,content:`public menu()`},{heading:`методы`,content:`public breadcrumbs()`},{heading:`методы`,content:`public author()`},{heading:`методы`,content:`public url()`},{heading:`методы`,content:`public licLink()`},{heading:`методы`,content:`public addBreadcrumb()`},{heading:`методы`,content:`public finalizeBreadcrumbs()`},{heading:`методы`,content:`public addCss()`},{heading:`методы`,content:`public addJs()`},{heading:`методы`,content:`public cssUrls()`},{heading:`методы`,content:`public jsUrls()`},{heading:`методы`,content:`public toArray()`},{heading:`методы`,content:`private resolveSiteUrl()`},{heading:`методы`,content:`private baseCssUrls()`},{heading:`методы`,content:`private baseJsUrls()`},{heading:`подробности`,content:"Путь: `devcraft/src/classes/Admin/AdminContext.php`"},{heading:`dashboardname`,content:`Контекст административной панели для текущего запроса модуля.`},{heading:`licenseagreementlink`,content:`Ссылка на пользовательское соглашение между автором и пользователем. По умолчанию: https\\://devcraft.club/pages/licence-agreement/`},{heading:`__construct`,content:`Создаёт контекст админки для указанного модуля.`},{heading:`__construct`,content:`**С версии:** 200.4.0`},{heading:`__construct`,content:`**Параметры:**`},{heading:`__construct`,content:"`$plugin` — Контекст модуля."},{heading:`forplugin`,content:`Фабричный метод создания контекста для модуля.`},{heading:`forplugin`,content:`**С версии:** 200.4.0`},{heading:`forplugin`,content:`**Параметры:**`},{heading:`forplugin`,content:"`$plugin` — Контекст модуля."},{heading:`forplugin`,content:"**Возвращает:** `self` — Новый экземпляр контекста."},{heading:`setcurrentaction`,content:`Устанавливает текущее действие админки.`},{heading:`setcurrentaction`,content:`**С версии:** 200.4.0`},{heading:`setcurrentaction`,content:`**Параметры:**`},{heading:`setcurrentaction`,content:"`$action` — Имя действия."},{heading:`setcurrentaction`,content:"**Возвращает:** `self` — Текущий экземпляр для цепочки вызовов."},{heading:`currentaction`,content:`Возвращает текущее действие админки.`},{heading:`currentaction`,content:`**С версии:** 200.4.0`},{heading:`currentaction`,content:"**Возвращает:** `string` — Имя действия."},{heading:`menu`,content:`Возвращает меню админки.`},{heading:`menu`,content:`**С версии:** 200.4.0`},{heading:`menu`,content:"**Возвращает:** `AdminLink[]` — Список корневых пунктов меню."},{heading:`breadcrumbs`,content:`Возвращает хлебные крошки страницы.`},{heading:`breadcrumbs`,content:`**С версии:** 200.4.0`},{heading:`breadcrumbs`,content:"**Возвращает:** `BreadCrumb[]` — Список крошек."},{heading:`author`,content:`Возвращает данные автора модуля.`},{heading:`author`,content:`**С версии:** 200.4.0`},{heading:`author`,content:"**Возвращает:** `Author` — Объект автора."},{heading:`url`,content:`Возвращает базовый URL сайта.`},{heading:`url`,content:`**С версии:** 200.4.0`},{heading:`url`,content:"**Возвращает:** `string` — URL без завершающего слэша."},{heading:`liclink`,content:`Возвращает ссылку на лицензионное соглашение.`},{heading:`liclink`,content:`**С версии:** 200.4.0`},{heading:`liclink`,content:"**Возвращает:** `string` — URL соглашения."},{heading:`addbreadcrumb`,content:`Добавляет хлебную крошку в конец списка.`},{heading:`addbreadcrumb`,content:`**С версии:** 200.4.0`},{heading:`addbreadcrumb`,content:`**Параметры:**`},{heading:`addbreadcrumb`,content:"`$title` — Заголовок крошки."},{heading:`addbreadcrumb`,content:"`$url` — Необязательная ссылка."},{heading:`addbreadcrumb`,content:"**Возвращает:** `self` — Текущий экземпляр для цепочки вызовов."},{heading:`finalizebreadcrumbs`,content:`Дополняет крошки ссылкой на dashboard и сохраняет крошки страницы.`},{heading:`finalizebreadcrumbs`,content:`**С версии:** 200.4.0`},{heading:`finalizebreadcrumbs`,content:`**Параметры:**`},{heading:`finalizebreadcrumbs`,content:"`$mod` — Имя модуля."},{heading:`finalizebreadcrumbs`,content:"`$action` — Текущее действие."},{heading:`addcss`,content:`Регистрирует дополнительный CSS-файл.`},{heading:`addcss`,content:`**С версии:** 200.4.0`},{heading:`addcss`,content:`**Параметры:**`},{heading:`addcss`,content:"`$url` — URL стиля."},{heading:`addcss`,content:"**Возвращает:** `self` — Текущий экземпляр для цепочки вызовов."},{heading:`addjs`,content:`Регистрирует дополнительный JS-файл.`},{heading:`addjs`,content:`**С версии:** 200.4.0`},{heading:`addjs`,content:`**Параметры:**`},{heading:`addjs`,content:"`$url` — URL скрипта."},{heading:`addjs`,content:"**Возвращает:** `self` — Текущий экземпляр для цепочки вызовов."},{heading:`cssurls`,content:`Возвращает список URL CSS-файлов.`},{heading:`cssurls`,content:`**С версии:** 200.4.0`},{heading:`cssurls`,content:"**Возвращает:** `string[]` — URL стилей."},{heading:`jsurls`,content:`Возвращает список URL JS-файлов.`},{heading:`jsurls`,content:`**С версии:** 200.4.0`},{heading:`jsurls`,content:"**Возвращает:** `string[]` — URL скриптов."},{heading:`toarray`,content:`Преобразует контекст в массив для передачи в Twig.`},{heading:`toarray`,content:`**С версии:** 200.4.0`},{heading:`toarray`,content:"**Возвращает:** `array<string,` — mixed> Ассоциативный массив данных layout."},{heading:`resolvesiteurl`,content:`Определяет базовый URL сайта из глобальной конфигурации DLE.`},{heading:`resolvesiteurl`,content:`**С версии:** 200.4.0`},{heading:`resolvesiteurl`,content:"**Возвращает:** `string` — URL без завершающего слэша."},{heading:`basecssurls`,content:`Формирует базовый список CSS DevCraft.`},{heading:`basecssurls`,content:`**С версии:** 200.4.0`},{heading:`basecssurls`,content:"**Возвращает:** `string[]` — URL стилей Metro и DevCraft."},{heading:`basejsurls`,content:`Формирует базовый список JS DevCraft.`},{heading:`basejsurls`,content:`**С версии:** 200.4.0`},{heading:`basejsurls`,content:"**Возвращает:** `string[]` — URL скриптов Metro и DevCraft."}],headings:[{id:`краткое-содержание`,content:`Краткое содержание:`},{id:`свойства`,content:`Свойства`},{id:`методы`,content:`Методы`},{id:`подробности`,content:`Подробности`},{id:`детали`,content:`Детали`},{id:`свойства-1`,content:`Свойства`},{id:`dashboardname`,content:`$dashboardName`},{id:`licenseagreementlink`,content:`$licenseAgreementLink`},{id:`методы-1`,content:`Методы`},{id:`__construct`,content:`\\__construct()`},{id:`forplugin`,content:`forPlugin()`},{id:`setcurrentaction`,content:`setCurrentAction()`},{id:`currentaction`,content:`currentAction()`},{id:`menu`,content:`menu()`},{id:`breadcrumbs`,content:`breadcrumbs()`},{id:`author`,content:`author()`},{id:`url`,content:`url()`},{id:`liclink`,content:`licLink()`},{id:`addbreadcrumb`,content:`addBreadcrumb()`},{id:`finalizebreadcrumbs`,content:`finalizeBreadcrumbs()`},{id:`addcss`,content:`addCss()`},{id:`addjs`,content:`addJs()`},{id:`cssurls`,content:`cssUrls()`},{id:`jsurls`,content:`jsUrls()`},{id:`toarray`,content:`toArray()`},{id:`resolvesiteurl`,content:`resolveSiteUrl()`},{id:`basecssurls`,content:`baseCssUrls()`},{id:`basejsurls`,content:`baseJsUrls()`}]},s=[{depth:2,url:`#краткое-содержание`,title:(0,n.jsx)(n.Fragment,{children:`Краткое содержание:`})},{depth:3,url:`#свойства`,title:(0,n.jsx)(n.Fragment,{children:`Свойства`})},{depth:3,url:`#методы`,title:(0,n.jsx)(n.Fragment,{children:`Методы`})},{depth:3,url:`#подробности`,title:(0,n.jsx)(n.Fragment,{children:`Подробности`})},{depth:2,url:`#детали`,title:(0,n.jsx)(n.Fragment,{children:`Детали`})},{depth:3,url:`#свойства-1`,title:(0,n.jsx)(n.Fragment,{children:`Свойства`})},{depth:4,url:`#dashboardname`,title:(0,n.jsx)(n.Fragment,{children:`$dashboardName`})},{depth:4,url:`#licenseagreementlink`,title:(0,n.jsx)(n.Fragment,{children:`$licenseAgreementLink`})},{depth:3,url:`#методы-1`,title:(0,n.jsx)(n.Fragment,{children:`Методы`})},{depth:3,url:`#__construct`,title:(0,n.jsx)(n.Fragment,{children:`__construct()`})},{depth:3,url:`#forplugin`,title:(0,n.jsx)(n.Fragment,{children:`forPlugin()`})},{depth:3,url:`#setcurrentaction`,title:(0,n.jsx)(n.Fragment,{children:`setCurrentAction()`})},{depth:3,url:`#currentaction`,title:(0,n.jsx)(n.Fragment,{children:`currentAction()`})},{depth:3,url:`#menu`,title:(0,n.jsx)(n.Fragment,{children:`menu()`})},{depth:3,url:`#breadcrumbs`,title:(0,n.jsx)(n.Fragment,{children:`breadcrumbs()`})},{depth:3,url:`#author`,title:(0,n.jsx)(n.Fragment,{children:`author()`})},{depth:3,url:`#url`,title:(0,n.jsx)(n.Fragment,{children:`url()`})},{depth:3,url:`#liclink`,title:(0,n.jsx)(n.Fragment,{children:`licLink()`})},{depth:3,url:`#addbreadcrumb`,title:(0,n.jsx)(n.Fragment,{children:`addBreadcrumb()`})},{depth:3,url:`#finalizebreadcrumbs`,title:(0,n.jsx)(n.Fragment,{children:`finalizeBreadcrumbs()`})},{depth:3,url:`#addcss`,title:(0,n.jsx)(n.Fragment,{children:`addCss()`})},{depth:3,url:`#addjs`,title:(0,n.jsx)(n.Fragment,{children:`addJs()`})},{depth:3,url:`#cssurls`,title:(0,n.jsx)(n.Fragment,{children:`cssUrls()`})},{depth:3,url:`#jsurls`,title:(0,n.jsx)(n.Fragment,{children:`jsUrls()`})},{depth:3,url:`#toarray`,title:(0,n.jsx)(n.Fragment,{children:`toArray()`})},{depth:3,url:`#resolvesiteurl`,title:(0,n.jsx)(n.Fragment,{children:`resolveSiteUrl()`})},{depth:3,url:`#basecssurls`,title:(0,n.jsx)(n.Fragment,{children:`baseCssUrls()`})},{depth:3,url:`#basejsurls`,title:(0,n.jsx)(n.Fragment,{children:`baseJsUrls()`})}];function c(e){let t={a:`a`,code:`code`,h2:`h2`,h3:`h3`,h4:`h4`,hr:`hr`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h2,{id:`краткое-содержание`,children:`Краткое содержание:`}),`
`,(0,n.jsx)(t.p,{children:`Контекст административной панели для текущего запроса модуля.`}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsx)(t.h3,{id:`свойства`,children:`Свойства`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[`public $`,(0,n.jsx)(t.a,{href:`#property_dashboardName`,children:`dashboardName`})]}),`
`,(0,n.jsxs)(t.li,{children:[`public $`,(0,n.jsx)(t.a,{href:`#property_licenseAgreementLink`,children:`licenseAgreementLink`})]}),`
`]}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsx)(t.h3,{id:`методы`,children:`Методы`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method___construct`,children:`__construct()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method_forPlugin`,children:`forPlugin()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method_setCurrentAction`,children:`setCurrentAction()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method_currentAction`,children:`currentAction()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method_menu`,children:`menu()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method_breadcrumbs`,children:`breadcrumbs()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method_author`,children:`author()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method_url`,children:`url()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method_licLink`,children:`licLink()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method_addBreadcrumb`,children:`addBreadcrumb()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method_finalizeBreadcrumbs`,children:`finalizeBreadcrumbs()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method_addCss`,children:`addCss()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method_addJs`,children:`addJs()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method_cssUrls`,children:`cssUrls()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method_jsUrls`,children:`jsUrls()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method_toArray`,children:`toArray()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`private `,(0,n.jsx)(t.a,{href:`#method_resolveSiteUrl`,children:`resolveSiteUrl()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`private `,(0,n.jsx)(t.a,{href:`#method_baseCssUrls`,children:`baseCssUrls()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`private `,(0,n.jsx)(t.a,{href:`#method_baseJsUrls`,children:`baseJsUrls()`})]}),`
`]}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsx)(t.h3,{id:`подробности`,children:`Подробности`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[`Путь: `,(0,n.jsx)(t.code,{children:`devcraft/src/classes/Admin/AdminContext.php`})]}),`
`]}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsx)(t.h2,{id:`детали`,children:`Детали`}),`
`,(0,n.jsx)(t.h3,{id:`свойства-1`,children:`Свойства`}),`
`,(0,n.jsx)(`span`,{id:`property_dashboardName`}),`
`,(0,n.jsx)(t.h4,{id:`dashboardname`,children:`$dashboardName`}),`
`,(0,n.jsx)(t.p,{children:`Контекст административной панели для текущего запроса модуля.`}),`
`,(0,n.jsx)(`span`,{id:`property_licenseAgreementLink`}),`
`,(0,n.jsx)(t.h4,{id:`licenseagreementlink`,children:`$licenseAgreementLink`}),`
`,(0,n.jsxs)(t.p,{children:[`Ссылка на пользовательское соглашение между автором и пользователем. По умолчанию: `,(0,n.jsx)(t.a,{href:`https://devcraft.club/pages/licence-agreement/`,children:`https://devcraft.club/pages/licence-agreement/`})]}),`
`,(0,n.jsx)(t.h3,{id:`методы-1`,children:`Методы`}),`
`,(0,n.jsx)(`span`,{id:`method___construct`}),`
`,(0,n.jsx)(t.h3,{id:`__construct`,children:`__construct()`}),`
`,(0,n.jsx)(t.p,{children:`Создаёт контекст админки для указанного модуля.`}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 200.4.0`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$plugin`}),` — Контекст модуля.`]}),`
`]}),`
`,(0,n.jsx)(`span`,{id:`method_forPlugin`}),`
`,(0,n.jsx)(t.h3,{id:`forplugin`,children:`forPlugin()`}),`
`,(0,n.jsx)(t.p,{children:`Фабричный метод создания контекста для модуля.`}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 200.4.0`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$plugin`}),` — Контекст модуля.`]}),`
`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`self`}),` — Новый экземпляр контекста.`]}),`
`,(0,n.jsx)(`span`,{id:`method_setCurrentAction`}),`
`,(0,n.jsx)(t.h3,{id:`setcurrentaction`,children:`setCurrentAction()`}),`
`,(0,n.jsx)(t.p,{children:`Устанавливает текущее действие админки.`}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 200.4.0`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$action`}),` — Имя действия.`]}),`
`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`self`}),` — Текущий экземпляр для цепочки вызовов.`]}),`
`,(0,n.jsx)(`span`,{id:`method_currentAction`}),`
`,(0,n.jsx)(t.h3,{id:`currentaction`,children:`currentAction()`}),`
`,(0,n.jsx)(t.p,{children:`Возвращает текущее действие админки.`}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 200.4.0`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`string`}),` — Имя действия.`]}),`
`,(0,n.jsx)(`span`,{id:`method_menu`}),`
`,(0,n.jsx)(t.h3,{id:`menu`,children:`menu()`}),`
`,(0,n.jsx)(t.p,{children:`Возвращает меню админки.`}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 200.4.0`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`AdminLink[]`}),` — Список корневых пунктов меню.`]}),`
`,(0,n.jsx)(`span`,{id:`method_breadcrumbs`}),`
`,(0,n.jsx)(t.h3,{id:`breadcrumbs`,children:`breadcrumbs()`}),`
`,(0,n.jsx)(t.p,{children:`Возвращает хлебные крошки страницы.`}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 200.4.0`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`BreadCrumb[]`}),` — Список крошек.`]}),`
`,(0,n.jsx)(`span`,{id:`method_author`}),`
`,(0,n.jsx)(t.h3,{id:`author`,children:`author()`}),`
`,(0,n.jsx)(t.p,{children:`Возвращает данные автора модуля.`}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 200.4.0`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`Author`}),` — Объект автора.`]}),`
`,(0,n.jsx)(`span`,{id:`method_url`}),`
`,(0,n.jsx)(t.h3,{id:`url`,children:`url()`}),`
`,(0,n.jsx)(t.p,{children:`Возвращает базовый URL сайта.`}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 200.4.0`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`string`}),` — URL без завершающего слэша.`]}),`
`,(0,n.jsx)(`span`,{id:`method_licLink`}),`
`,(0,n.jsx)(t.h3,{id:`liclink`,children:`licLink()`}),`
`,(0,n.jsx)(t.p,{children:`Возвращает ссылку на лицензионное соглашение.`}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 200.4.0`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`string`}),` — URL соглашения.`]}),`
`,(0,n.jsx)(`span`,{id:`method_addBreadcrumb`}),`
`,(0,n.jsx)(t.h3,{id:`addbreadcrumb`,children:`addBreadcrumb()`}),`
`,(0,n.jsx)(t.p,{children:`Добавляет хлебную крошку в конец списка.`}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 200.4.0`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$title`}),` — Заголовок крошки.`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$url`}),` — Необязательная ссылка.`]}),`
`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`self`}),` — Текущий экземпляр для цепочки вызовов.`]}),`
`,(0,n.jsx)(`span`,{id:`method_finalizeBreadcrumbs`}),`
`,(0,n.jsx)(t.h3,{id:`finalizebreadcrumbs`,children:`finalizeBreadcrumbs()`}),`
`,(0,n.jsx)(t.p,{children:`Дополняет крошки ссылкой на dashboard и сохраняет крошки страницы.`}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 200.4.0`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$mod`}),` — Имя модуля.`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$action`}),` — Текущее действие.`]}),`
`]}),`
`,(0,n.jsx)(`span`,{id:`method_addCss`}),`
`,(0,n.jsx)(t.h3,{id:`addcss`,children:`addCss()`}),`
`,(0,n.jsx)(t.p,{children:`Регистрирует дополнительный CSS-файл.`}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 200.4.0`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$url`}),` — URL стиля.`]}),`
`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`self`}),` — Текущий экземпляр для цепочки вызовов.`]}),`
`,(0,n.jsx)(`span`,{id:`method_addJs`}),`
`,(0,n.jsx)(t.h3,{id:`addjs`,children:`addJs()`}),`
`,(0,n.jsx)(t.p,{children:`Регистрирует дополнительный JS-файл.`}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 200.4.0`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$url`}),` — URL скрипта.`]}),`
`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`self`}),` — Текущий экземпляр для цепочки вызовов.`]}),`
`,(0,n.jsx)(`span`,{id:`method_cssUrls`}),`
`,(0,n.jsx)(t.h3,{id:`cssurls`,children:`cssUrls()`}),`
`,(0,n.jsx)(t.p,{children:`Возвращает список URL CSS-файлов.`}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 200.4.0`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`string[]`}),` — URL стилей.`]}),`
`,(0,n.jsx)(`span`,{id:`method_jsUrls`}),`
`,(0,n.jsx)(t.h3,{id:`jsurls`,children:`jsUrls()`}),`
`,(0,n.jsx)(t.p,{children:`Возвращает список URL JS-файлов.`}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 200.4.0`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`string[]`}),` — URL скриптов.`]}),`
`,(0,n.jsx)(`span`,{id:`method_toArray`}),`
`,(0,n.jsx)(t.h3,{id:`toarray`,children:`toArray()`}),`
`,(0,n.jsx)(t.p,{children:`Преобразует контекст в массив для передачи в Twig.`}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 200.4.0`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`array<string,`}),` — mixed> Ассоциативный массив данных layout.`]}),`
`,(0,n.jsx)(`span`,{id:`method_resolveSiteUrl`}),`
`,(0,n.jsx)(t.h3,{id:`resolvesiteurl`,children:`resolveSiteUrl()`}),`
`,(0,n.jsx)(t.p,{children:`Определяет базовый URL сайта из глобальной конфигурации DLE.`}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 200.4.0`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`string`}),` — URL без завершающего слэша.`]}),`
`,(0,n.jsx)(`span`,{id:`method_baseCssUrls`}),`
`,(0,n.jsx)(t.h3,{id:`basecssurls`,children:`baseCssUrls()`}),`
`,(0,n.jsx)(t.p,{children:`Формирует базовый список CSS DevCraft.`}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 200.4.0`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`string[]`}),` — URL стилей Metro и DevCraft.`]}),`
`,(0,n.jsx)(`span`,{id:`method_baseJsUrls`}),`
`,(0,n.jsx)(t.h3,{id:`basejsurls`,children:`baseJsUrls()`}),`
`,(0,n.jsx)(t.p,{children:`Формирует базовый список JS DevCraft.`}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 200.4.0`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`string[]`}),` — URL скриптов Metro и DevCraft.`]})]})}function l(e={}){let{wrapper:t}=e.components||{};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}export{a as _markdown,l as default,r as frontmatter,i as lastModified,o as structuredData,s as toc};