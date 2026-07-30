import{r as e}from"./rolldown-runtime-QTnfLwEv.js";import{t}from"./jsx-runtime-By8HlURe.js";var n=e(t()),r={title:`Класс: AdminLinkResolver`,description:`Документация по плагину класс: adminlinkresolver для DLE.`},i=new Date(1785400635e3),a=`

## Краткое содержание: [#краткое-содержание]

Разрешает действия и классы страниц по дереву пунктов меню.

***

### Свойства [#свойства]

*Нет публичных свойств.*

***

### Методы [#методы]

* public [resolvePageClass()](#method_resolvePageClass)
* public [pluginLinks()](#method_pluginLinks)
* public [defaultAction()](#method_defaultAction)
* public [collectActions()](#method_collectActions)
* public [validateStartActions()](#method_validateStartActions)

***

### Подробности [#подробности]

* Путь: \`devcraft/src/classes/Admin/AdminLinkResolver.php\`

***

## Детали [#детали]

### Методы [#методы-1]

<span id="method_resolvePageClass" />

### resolvePageClass() [#resolvepageclass]

Находит класс страницы по имени действия в дереве меню.

**С версии:** 200.4.0

**Параметры:**

* \`$menu\` — Дерево пунктов меню.
* \`$action\` — Искомое действие.

**Возвращает:** \`string|null\` — FQCN обработчика страницы или null.

<span id="method_pluginLinks" />

### pluginLinks() [#pluginlinks]

Возвращает пункты меню плагина без изменений (точка расширения).

**С версии:** 200.4.0

**Параметры:**

* \`$menu\` — Дерево пунктов меню.

**Возвращает:** \`AdminLink[]\` — Тот же массив ссылок.

<span id="method_defaultAction" />

### defaultAction() [#defaultaction]

Определяет стартовое действие модуля по доступным пунктам меню.

**С версии:** 200.4.0

**Параметры:**

* \`$menu\` — Дерево пунктов меню.

**Возвращает:** \`string|null\` — Имя действия dashboard/index или null.

<span id="method_collectActions" />

### collectActions() [#collectactions]

Собирает все имена действий из дерева меню рекурсивно.

**С версии:** 200.4.0

**Параметры:**

* \`$menu\` — Дерево пунктов меню.

**Возвращает:** \`string[]\` — Список имён действий.

<span id="method_validateStartActions" />

### validateStartActions() [#validatestartactions]

Проверяет, что в меню не объявлены одновременно dashboard и index.

**С версии:** 200.4.0

**Параметры:**

* \`$menu\` — Дерево пунктов меню.
`,o={contents:[{heading:`краткое-содержание`,content:`Разрешает действия и классы страниц по дереву пунктов меню.`},{heading:`свойства`,content:`*Нет публичных свойств.*`},{heading:`методы`,content:`public resolvePageClass()`},{heading:`методы`,content:`public pluginLinks()`},{heading:`методы`,content:`public defaultAction()`},{heading:`методы`,content:`public collectActions()`},{heading:`методы`,content:`public validateStartActions()`},{heading:`подробности`,content:"Путь: `devcraft/src/classes/Admin/AdminLinkResolver.php`"},{heading:`resolvepageclass`,content:`Находит класс страницы по имени действия в дереве меню.`},{heading:`resolvepageclass`,content:`**С версии:** 200.4.0`},{heading:`resolvepageclass`,content:`**Параметры:**`},{heading:`resolvepageclass`,content:"`$menu` — Дерево пунктов меню."},{heading:`resolvepageclass`,content:"`$action` — Искомое действие."},{heading:`resolvepageclass`,content:"**Возвращает:** `string|null` — FQCN обработчика страницы или null."},{heading:`pluginlinks`,content:`Возвращает пункты меню плагина без изменений (точка расширения).`},{heading:`pluginlinks`,content:`**С версии:** 200.4.0`},{heading:`pluginlinks`,content:`**Параметры:**`},{heading:`pluginlinks`,content:"`$menu` — Дерево пунктов меню."},{heading:`pluginlinks`,content:"**Возвращает:** `AdminLink[]` — Тот же массив ссылок."},{heading:`defaultaction`,content:`Определяет стартовое действие модуля по доступным пунктам меню.`},{heading:`defaultaction`,content:`**С версии:** 200.4.0`},{heading:`defaultaction`,content:`**Параметры:**`},{heading:`defaultaction`,content:"`$menu` — Дерево пунктов меню."},{heading:`defaultaction`,content:"**Возвращает:** `string|null` — Имя действия dashboard/index или null."},{heading:`collectactions`,content:`Собирает все имена действий из дерева меню рекурсивно.`},{heading:`collectactions`,content:`**С версии:** 200.4.0`},{heading:`collectactions`,content:`**Параметры:**`},{heading:`collectactions`,content:"`$menu` — Дерево пунктов меню."},{heading:`collectactions`,content:"**Возвращает:** `string[]` — Список имён действий."},{heading:`validatestartactions`,content:`Проверяет, что в меню не объявлены одновременно dashboard и index.`},{heading:`validatestartactions`,content:`**С версии:** 200.4.0`},{heading:`validatestartactions`,content:`**Параметры:**`},{heading:`validatestartactions`,content:"`$menu` — Дерево пунктов меню."}],headings:[{id:`краткое-содержание`,content:`Краткое содержание:`},{id:`свойства`,content:`Свойства`},{id:`методы`,content:`Методы`},{id:`подробности`,content:`Подробности`},{id:`детали`,content:`Детали`},{id:`методы-1`,content:`Методы`},{id:`resolvepageclass`,content:`resolvePageClass()`},{id:`pluginlinks`,content:`pluginLinks()`},{id:`defaultaction`,content:`defaultAction()`},{id:`collectactions`,content:`collectActions()`},{id:`validatestartactions`,content:`validateStartActions()`}]},s=[{depth:2,url:`#краткое-содержание`,title:(0,n.jsx)(n.Fragment,{children:`Краткое содержание:`})},{depth:3,url:`#свойства`,title:(0,n.jsx)(n.Fragment,{children:`Свойства`})},{depth:3,url:`#методы`,title:(0,n.jsx)(n.Fragment,{children:`Методы`})},{depth:3,url:`#подробности`,title:(0,n.jsx)(n.Fragment,{children:`Подробности`})},{depth:2,url:`#детали`,title:(0,n.jsx)(n.Fragment,{children:`Детали`})},{depth:3,url:`#методы-1`,title:(0,n.jsx)(n.Fragment,{children:`Методы`})},{depth:3,url:`#resolvepageclass`,title:(0,n.jsx)(n.Fragment,{children:`resolvePageClass()`})},{depth:3,url:`#pluginlinks`,title:(0,n.jsx)(n.Fragment,{children:`pluginLinks()`})},{depth:3,url:`#defaultaction`,title:(0,n.jsx)(n.Fragment,{children:`defaultAction()`})},{depth:3,url:`#collectactions`,title:(0,n.jsx)(n.Fragment,{children:`collectActions()`})},{depth:3,url:`#validatestartactions`,title:(0,n.jsx)(n.Fragment,{children:`validateStartActions()`})}];function c(e){let t={a:`a`,code:`code`,em:`em`,h2:`h2`,h3:`h3`,hr:`hr`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h2,{id:`краткое-содержание`,children:`Краткое содержание:`}),`
`,(0,n.jsx)(t.p,{children:`Разрешает действия и классы страниц по дереву пунктов меню.`}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsx)(t.h3,{id:`свойства`,children:`Свойства`}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.em,{children:`Нет публичных свойств.`})}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsx)(t.h3,{id:`методы`,children:`Методы`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method_resolvePageClass`,children:`resolvePageClass()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method_pluginLinks`,children:`pluginLinks()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method_defaultAction`,children:`defaultAction()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method_collectActions`,children:`collectActions()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method_validateStartActions`,children:`validateStartActions()`})]}),`
`]}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsx)(t.h3,{id:`подробности`,children:`Подробности`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[`Путь: `,(0,n.jsx)(t.code,{children:`devcraft/src/classes/Admin/AdminLinkResolver.php`})]}),`
`]}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsx)(t.h2,{id:`детали`,children:`Детали`}),`
`,(0,n.jsx)(t.h3,{id:`методы-1`,children:`Методы`}),`
`,(0,n.jsx)(`span`,{id:`method_resolvePageClass`}),`
`,(0,n.jsx)(t.h3,{id:`resolvepageclass`,children:`resolvePageClass()`}),`
`,(0,n.jsx)(t.p,{children:`Находит класс страницы по имени действия в дереве меню.`}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 200.4.0`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$menu`}),` — Дерево пунктов меню.`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$action`}),` — Искомое действие.`]}),`
`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`string|null`}),` — FQCN обработчика страницы или null.`]}),`
`,(0,n.jsx)(`span`,{id:`method_pluginLinks`}),`
`,(0,n.jsx)(t.h3,{id:`pluginlinks`,children:`pluginLinks()`}),`
`,(0,n.jsx)(t.p,{children:`Возвращает пункты меню плагина без изменений (точка расширения).`}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 200.4.0`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$menu`}),` — Дерево пунктов меню.`]}),`
`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`AdminLink[]`}),` — Тот же массив ссылок.`]}),`
`,(0,n.jsx)(`span`,{id:`method_defaultAction`}),`
`,(0,n.jsx)(t.h3,{id:`defaultaction`,children:`defaultAction()`}),`
`,(0,n.jsx)(t.p,{children:`Определяет стартовое действие модуля по доступным пунктам меню.`}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 200.4.0`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$menu`}),` — Дерево пунктов меню.`]}),`
`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`string|null`}),` — Имя действия dashboard/index или null.`]}),`
`,(0,n.jsx)(`span`,{id:`method_collectActions`}),`
`,(0,n.jsx)(t.h3,{id:`collectactions`,children:`collectActions()`}),`
`,(0,n.jsx)(t.p,{children:`Собирает все имена действий из дерева меню рекурсивно.`}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 200.4.0`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$menu`}),` — Дерево пунктов меню.`]}),`
`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`string[]`}),` — Список имён действий.`]}),`
`,(0,n.jsx)(`span`,{id:`method_validateStartActions`}),`
`,(0,n.jsx)(t.h3,{id:`validatestartactions`,children:`validateStartActions()`}),`
`,(0,n.jsx)(t.p,{children:`Проверяет, что в меню не объявлены одновременно dashboard и index.`}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 200.4.0`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$menu`}),` — Дерево пунктов меню.`]}),`
`]})]})}function l(e={}){let{wrapper:t}=e.components||{};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}export{a as _markdown,l as default,r as frontmatter,i as lastModified,o as structuredData,s as toc};