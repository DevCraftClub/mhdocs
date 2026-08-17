import{r as e}from"./rolldown-runtime-QTnfLwEv.js";import{t}from"./jsx-runtime-By8HlURe.js";var n=e(t()),r={title:`Класс: AdminLink`,description:`Документация по плагину класс: adminlink для DLE.`},i=new Date(1786951824e3),a=`

## Краткое содержание: [#краткое-содержание]

Элемент навигационного меню административной панели.

***

### Свойства [#свойства]

* public $[name](#property_name)
* public $[link](#property_link)
* public $[type](#property_type)
* public $[parent](#property_parent)
* public $[extra](#property_extra)
* public $[children](#property_children)
* public $[action](#property_action)
* public $[pageClass](#property_pageClass)

***

### Методы [#методы]

* public [\\_\\_construct()](#method___construct)
* public [page()](#method_page)
* public [hidden()](#method_hidden)
* public [divider()](#method_divider)
* public [fromArray()](#method_fromArray)
* public [toArray()](#method_toArray)

***

### Подробности [#подробности]

* Путь: \`devcraft/src/classes/Types/AdminLink.php\`

***

## Детали [#детали]

### Свойства [#свойства-1]

<span id="property_name" />

#### $name [#name]

Отображаемое имя пункта меню.

<span id="property_link" />

#### $link [#link]

URL или query-string ссылки.

<span id="property_type" />

#### $type [#type]

Тип элемента (\`link\`, \`dropdown\`, \`divider\`, \`data\`, \`hidden\`).

<span id="property_parent" />

#### $parent [#parent]

Идентификатор родительского элемента.

<span id="property_extra" />

#### $extra [#extra]

Дополнительные атрибуты или data-значение.

<span id="property_children" />

#### $children [#children]

Вложенные пункты меню.

<span id="property_action" />

#### $action [#action]

Ключ action страницы модуля.

<span id="property_pageClass" />

#### $pageClass [#pageclass]

Класс обработчика страницы модуля.

### Методы [#методы-1]

<span id="method___construct" />

### \\_\\_construct() [#__construct]

Создаёт элемент меню с заданными параметрами.

**С версии:** 200.4.0

**Параметры:**

* \`$name\` — Отображаемое имя пункта меню.
* \`$link\` — URL или query-string ссылки.
* \`$type\` — Тип элемента (\`link\`, \`dropdown\`, \`divider\`, \`data\`, \`hidden\`).
* \`$parent\` — Идентификатор родительского элемента.
* \`$extra\` — Дополнительные атрибуты или data-значение.
* \`$children\` — Вложенные пункты меню.
* \`$action\` — Ключ action страницы модуля.
* \`$pageClass\` — Класс обработчика страницы модуля.

<span id="method_page" />

### page() [#page]

Создаёт ссылку на страницу модуля DevCraft.

**С версии:** 200.4.0

**Параметры:**

* \`$name\` — Отображаемое имя пункта меню.
* \`$action\` — Ключ action страницы.
* \`$pageClass\` — Полное имя класса страницы.
* \`$extra\` — Дополнительное data-значение.
* \`$mod\` — Код модуля DLE (по умолчанию \`devcraft\`).

**Возвращает:** \`self\` — Элемент меню типа \`link\`.

<span id="method_hidden" />

### hidden() [#hidden]

Регистрирует страницу без пункта в боковом меню (роутинг через \`AdminLinkResolver\` сохраняется).

**С версии:** 200.4.0

**Параметры:**

* \`$action\` — Ключ action страницы.
* \`$pageClass\` — Полное имя класса страницы.

**Возвращает:** \`self\` — Элемент типа \`hidden\`.

<span id="method_divider" />

### divider() [#divider]

Создаёт разделитель или заголовок группы в меню.

**С версии:** 200.4.0

**Параметры:**

* \`$header\` — Необязательный заголовок раздела.

**Возвращает:** \`self\` — Элемент меню типа \`divider\`.

<span id="method_fromArray" />

### fromArray() [#fromarray]

Создаёт элемент меню из ассоциативного массива.

**С версии:** 200.4.0

**Возвращает:** \`static\` — Новый экземпляр элемента меню.

<span id="method_toArray" />

### toArray() [#toarray]

Преобразует элемент меню в массив для шаблонов и сериализации.

**С версии:** 200.4.0

**Возвращает:** \`array<string,\` — mixed> Данные пункта меню (имя уже локализовано в manifest).
`,o={contents:[{heading:`краткое-содержание`,content:`Элемент навигационного меню административной панели.`},{heading:`свойства`,content:`public $name`},{heading:`свойства`,content:`public $link`},{heading:`свойства`,content:`public $type`},{heading:`свойства`,content:`public $parent`},{heading:`свойства`,content:`public $extra`},{heading:`свойства`,content:`public $children`},{heading:`свойства`,content:`public $action`},{heading:`свойства`,content:`public $pageClass`},{heading:`методы`,content:`public \\_\\_construct()`},{heading:`методы`,content:`public page()`},{heading:`методы`,content:`public hidden()`},{heading:`методы`,content:`public divider()`},{heading:`методы`,content:`public fromArray()`},{heading:`методы`,content:`public toArray()`},{heading:`подробности`,content:"Путь: `devcraft/src/classes/Types/AdminLink.php`"},{heading:`name`,content:`Отображаемое имя пункта меню.`},{heading:`link`,content:`URL или query-string ссылки.`},{heading:`type`,content:"Тип элемента (`link`, `dropdown`, `divider`, `data`, `hidden`)."},{heading:`parent`,content:`Идентификатор родительского элемента.`},{heading:`extra`,content:`Дополнительные атрибуты или data-значение.`},{heading:`children`,content:`Вложенные пункты меню.`},{heading:`action`,content:`Ключ action страницы модуля.`},{heading:`pageclass`,content:`Класс обработчика страницы модуля.`},{heading:`__construct`,content:`Создаёт элемент меню с заданными параметрами.`},{heading:`__construct`,content:`**С версии:** 200.4.0`},{heading:`__construct`,content:`**Параметры:**`},{heading:`__construct`,content:"`$name` — Отображаемое имя пункта меню."},{heading:`__construct`,content:"`$link` — URL или query-string ссылки."},{heading:`__construct`,content:"`$type` — Тип элемента (`link`, `dropdown`, `divider`, `data`, `hidden`)."},{heading:`__construct`,content:"`$parent` — Идентификатор родительского элемента."},{heading:`__construct`,content:"`$extra` — Дополнительные атрибуты или data-значение."},{heading:`__construct`,content:"`$children` — Вложенные пункты меню."},{heading:`__construct`,content:"`$action` — Ключ action страницы модуля."},{heading:`__construct`,content:"`$pageClass` — Класс обработчика страницы модуля."},{heading:`page`,content:`Создаёт ссылку на страницу модуля DevCraft.`},{heading:`page`,content:`**С версии:** 200.4.0`},{heading:`page`,content:`**Параметры:**`},{heading:`page`,content:"`$name` — Отображаемое имя пункта меню."},{heading:`page`,content:"`$action` — Ключ action страницы."},{heading:`page`,content:"`$pageClass` — Полное имя класса страницы."},{heading:`page`,content:"`$extra` — Дополнительное data-значение."},{heading:`page`,content:"`$mod` — Код модуля DLE (по умолчанию `devcraft`)."},{heading:`page`,content:"**Возвращает:** `self` — Элемент меню типа `link`."},{heading:`hidden`,content:"Регистрирует страницу без пункта в боковом меню (роутинг через `AdminLinkResolver` сохраняется)."},{heading:`hidden`,content:`**С версии:** 200.4.0`},{heading:`hidden`,content:`**Параметры:**`},{heading:`hidden`,content:"`$action` — Ключ action страницы."},{heading:`hidden`,content:"`$pageClass` — Полное имя класса страницы."},{heading:`hidden`,content:"**Возвращает:** `self` — Элемент типа `hidden`."},{heading:`divider`,content:`Создаёт разделитель или заголовок группы в меню.`},{heading:`divider`,content:`**С версии:** 200.4.0`},{heading:`divider`,content:`**Параметры:**`},{heading:`divider`,content:"`$header` — Необязательный заголовок раздела."},{heading:`divider`,content:"**Возвращает:** `self` — Элемент меню типа `divider`."},{heading:`fromarray`,content:`Создаёт элемент меню из ассоциативного массива.`},{heading:`fromarray`,content:`**С версии:** 200.4.0`},{heading:`fromarray`,content:"**Возвращает:** `static` — Новый экземпляр элемента меню."},{heading:`toarray`,content:`Преобразует элемент меню в массив для шаблонов и сериализации.`},{heading:`toarray`,content:`**С версии:** 200.4.0`},{heading:`toarray`,content:"**Возвращает:** `array<string,` — mixed> Данные пункта меню (имя уже локализовано в manifest)."}],headings:[{id:`краткое-содержание`,content:`Краткое содержание:`},{id:`свойства`,content:`Свойства`},{id:`методы`,content:`Методы`},{id:`подробности`,content:`Подробности`},{id:`детали`,content:`Детали`},{id:`свойства-1`,content:`Свойства`},{id:`name`,content:`$name`},{id:`link`,content:`$link`},{id:`type`,content:`$type`},{id:`parent`,content:`$parent`},{id:`extra`,content:`$extra`},{id:`children`,content:`$children`},{id:`action`,content:`$action`},{id:`pageclass`,content:`$pageClass`},{id:`методы-1`,content:`Методы`},{id:`__construct`,content:`\\__construct()`},{id:`page`,content:`page()`},{id:`hidden`,content:`hidden()`},{id:`divider`,content:`divider()`},{id:`fromarray`,content:`fromArray()`},{id:`toarray`,content:`toArray()`}]},s=[{depth:2,url:`#краткое-содержание`,title:(0,n.jsx)(n.Fragment,{children:`Краткое содержание:`})},{depth:3,url:`#свойства`,title:(0,n.jsx)(n.Fragment,{children:`Свойства`})},{depth:3,url:`#методы`,title:(0,n.jsx)(n.Fragment,{children:`Методы`})},{depth:3,url:`#подробности`,title:(0,n.jsx)(n.Fragment,{children:`Подробности`})},{depth:2,url:`#детали`,title:(0,n.jsx)(n.Fragment,{children:`Детали`})},{depth:3,url:`#свойства-1`,title:(0,n.jsx)(n.Fragment,{children:`Свойства`})},{depth:4,url:`#name`,title:(0,n.jsx)(n.Fragment,{children:`$name`})},{depth:4,url:`#link`,title:(0,n.jsx)(n.Fragment,{children:`$link`})},{depth:4,url:`#type`,title:(0,n.jsx)(n.Fragment,{children:`$type`})},{depth:4,url:`#parent`,title:(0,n.jsx)(n.Fragment,{children:`$parent`})},{depth:4,url:`#extra`,title:(0,n.jsx)(n.Fragment,{children:`$extra`})},{depth:4,url:`#children`,title:(0,n.jsx)(n.Fragment,{children:`$children`})},{depth:4,url:`#action`,title:(0,n.jsx)(n.Fragment,{children:`$action`})},{depth:4,url:`#pageclass`,title:(0,n.jsx)(n.Fragment,{children:`$pageClass`})},{depth:3,url:`#методы-1`,title:(0,n.jsx)(n.Fragment,{children:`Методы`})},{depth:3,url:`#__construct`,title:(0,n.jsx)(n.Fragment,{children:`__construct()`})},{depth:3,url:`#page`,title:(0,n.jsx)(n.Fragment,{children:`page()`})},{depth:3,url:`#hidden`,title:(0,n.jsx)(n.Fragment,{children:`hidden()`})},{depth:3,url:`#divider`,title:(0,n.jsx)(n.Fragment,{children:`divider()`})},{depth:3,url:`#fromarray`,title:(0,n.jsx)(n.Fragment,{children:`fromArray()`})},{depth:3,url:`#toarray`,title:(0,n.jsx)(n.Fragment,{children:`toArray()`})}];function c(e){let t={a:`a`,code:`code`,h2:`h2`,h3:`h3`,h4:`h4`,hr:`hr`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h2,{id:`краткое-содержание`,children:`Краткое содержание:`}),`
`,(0,n.jsx)(t.p,{children:`Элемент навигационного меню административной панели.`}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsx)(t.h3,{id:`свойства`,children:`Свойства`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[`public $`,(0,n.jsx)(t.a,{href:`#property_name`,children:`name`})]}),`
`,(0,n.jsxs)(t.li,{children:[`public $`,(0,n.jsx)(t.a,{href:`#property_link`,children:`link`})]}),`
`,(0,n.jsxs)(t.li,{children:[`public $`,(0,n.jsx)(t.a,{href:`#property_type`,children:`type`})]}),`
`,(0,n.jsxs)(t.li,{children:[`public $`,(0,n.jsx)(t.a,{href:`#property_parent`,children:`parent`})]}),`
`,(0,n.jsxs)(t.li,{children:[`public $`,(0,n.jsx)(t.a,{href:`#property_extra`,children:`extra`})]}),`
`,(0,n.jsxs)(t.li,{children:[`public $`,(0,n.jsx)(t.a,{href:`#property_children`,children:`children`})]}),`
`,(0,n.jsxs)(t.li,{children:[`public $`,(0,n.jsx)(t.a,{href:`#property_action`,children:`action`})]}),`
`,(0,n.jsxs)(t.li,{children:[`public $`,(0,n.jsx)(t.a,{href:`#property_pageClass`,children:`pageClass`})]}),`
`]}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsx)(t.h3,{id:`методы`,children:`Методы`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method___construct`,children:`__construct()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method_page`,children:`page()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method_hidden`,children:`hidden()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method_divider`,children:`divider()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method_fromArray`,children:`fromArray()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method_toArray`,children:`toArray()`})]}),`
`]}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsx)(t.h3,{id:`подробности`,children:`Подробности`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[`Путь: `,(0,n.jsx)(t.code,{children:`devcraft/src/classes/Types/AdminLink.php`})]}),`
`]}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsx)(t.h2,{id:`детали`,children:`Детали`}),`
`,(0,n.jsx)(t.h3,{id:`свойства-1`,children:`Свойства`}),`
`,(0,n.jsx)(`span`,{id:`property_name`}),`
`,(0,n.jsx)(t.h4,{id:`name`,children:`$name`}),`
`,(0,n.jsx)(t.p,{children:`Отображаемое имя пункта меню.`}),`
`,(0,n.jsx)(`span`,{id:`property_link`}),`
`,(0,n.jsx)(t.h4,{id:`link`,children:`$link`}),`
`,(0,n.jsx)(t.p,{children:`URL или query-string ссылки.`}),`
`,(0,n.jsx)(`span`,{id:`property_type`}),`
`,(0,n.jsx)(t.h4,{id:`type`,children:`$type`}),`
`,(0,n.jsxs)(t.p,{children:[`Тип элемента (`,(0,n.jsx)(t.code,{children:`link`}),`, `,(0,n.jsx)(t.code,{children:`dropdown`}),`, `,(0,n.jsx)(t.code,{children:`divider`}),`, `,(0,n.jsx)(t.code,{children:`data`}),`, `,(0,n.jsx)(t.code,{children:`hidden`}),`).`]}),`
`,(0,n.jsx)(`span`,{id:`property_parent`}),`
`,(0,n.jsx)(t.h4,{id:`parent`,children:`$parent`}),`
`,(0,n.jsx)(t.p,{children:`Идентификатор родительского элемента.`}),`
`,(0,n.jsx)(`span`,{id:`property_extra`}),`
`,(0,n.jsx)(t.h4,{id:`extra`,children:`$extra`}),`
`,(0,n.jsx)(t.p,{children:`Дополнительные атрибуты или data-значение.`}),`
`,(0,n.jsx)(`span`,{id:`property_children`}),`
`,(0,n.jsx)(t.h4,{id:`children`,children:`$children`}),`
`,(0,n.jsx)(t.p,{children:`Вложенные пункты меню.`}),`
`,(0,n.jsx)(`span`,{id:`property_action`}),`
`,(0,n.jsx)(t.h4,{id:`action`,children:`$action`}),`
`,(0,n.jsx)(t.p,{children:`Ключ action страницы модуля.`}),`
`,(0,n.jsx)(`span`,{id:`property_pageClass`}),`
`,(0,n.jsx)(t.h4,{id:`pageclass`,children:`$pageClass`}),`
`,(0,n.jsx)(t.p,{children:`Класс обработчика страницы модуля.`}),`
`,(0,n.jsx)(t.h3,{id:`методы-1`,children:`Методы`}),`
`,(0,n.jsx)(`span`,{id:`method___construct`}),`
`,(0,n.jsx)(t.h3,{id:`__construct`,children:`__construct()`}),`
`,(0,n.jsx)(t.p,{children:`Создаёт элемент меню с заданными параметрами.`}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 200.4.0`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$name`}),` — Отображаемое имя пункта меню.`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$link`}),` — URL или query-string ссылки.`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$type`}),` — Тип элемента (`,(0,n.jsx)(t.code,{children:`link`}),`, `,(0,n.jsx)(t.code,{children:`dropdown`}),`, `,(0,n.jsx)(t.code,{children:`divider`}),`, `,(0,n.jsx)(t.code,{children:`data`}),`, `,(0,n.jsx)(t.code,{children:`hidden`}),`).`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$parent`}),` — Идентификатор родительского элемента.`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$extra`}),` — Дополнительные атрибуты или data-значение.`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$children`}),` — Вложенные пункты меню.`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$action`}),` — Ключ action страницы модуля.`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$pageClass`}),` — Класс обработчика страницы модуля.`]}),`
`]}),`
`,(0,n.jsx)(`span`,{id:`method_page`}),`
`,(0,n.jsx)(t.h3,{id:`page`,children:`page()`}),`
`,(0,n.jsx)(t.p,{children:`Создаёт ссылку на страницу модуля DevCraft.`}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 200.4.0`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$name`}),` — Отображаемое имя пункта меню.`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$action`}),` — Ключ action страницы.`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$pageClass`}),` — Полное имя класса страницы.`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$extra`}),` — Дополнительное data-значение.`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$mod`}),` — Код модуля DLE (по умолчанию `,(0,n.jsx)(t.code,{children:`devcraft`}),`).`]}),`
`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`self`}),` — Элемент меню типа `,(0,n.jsx)(t.code,{children:`link`}),`.`]}),`
`,(0,n.jsx)(`span`,{id:`method_hidden`}),`
`,(0,n.jsx)(t.h3,{id:`hidden`,children:`hidden()`}),`
`,(0,n.jsxs)(t.p,{children:[`Регистрирует страницу без пункта в боковом меню (роутинг через `,(0,n.jsx)(t.code,{children:`AdminLinkResolver`}),` сохраняется).`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 200.4.0`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$action`}),` — Ключ action страницы.`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$pageClass`}),` — Полное имя класса страницы.`]}),`
`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`self`}),` — Элемент типа `,(0,n.jsx)(t.code,{children:`hidden`}),`.`]}),`
`,(0,n.jsx)(`span`,{id:`method_divider`}),`
`,(0,n.jsx)(t.h3,{id:`divider`,children:`divider()`}),`
`,(0,n.jsx)(t.p,{children:`Создаёт разделитель или заголовок группы в меню.`}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 200.4.0`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$header`}),` — Необязательный заголовок раздела.`]}),`
`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`self`}),` — Элемент меню типа `,(0,n.jsx)(t.code,{children:`divider`}),`.`]}),`
`,(0,n.jsx)(`span`,{id:`method_fromArray`}),`
`,(0,n.jsx)(t.h3,{id:`fromarray`,children:`fromArray()`}),`
`,(0,n.jsx)(t.p,{children:`Создаёт элемент меню из ассоциативного массива.`}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 200.4.0`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`static`}),` — Новый экземпляр элемента меню.`]}),`
`,(0,n.jsx)(`span`,{id:`method_toArray`}),`
`,(0,n.jsx)(t.h3,{id:`toarray`,children:`toArray()`}),`
`,(0,n.jsx)(t.p,{children:`Преобразует элемент меню в массив для шаблонов и сериализации.`}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 200.4.0`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`array<string,`}),` — mixed> Данные пункта меню (имя уже локализовано в manifest).`]})]})}function l(e={}){let{wrapper:t}=e.components||{};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}export{a as _markdown,l as default,r as frontmatter,i as lastModified,o as structuredData,s as toc};