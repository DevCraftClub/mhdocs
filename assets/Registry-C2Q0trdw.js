import{r as e}from"./rolldown-runtime-QTnfLwEv.js";import{t}from"./jsx-runtime-By8HlURe.js";var n=e(t()),r={title:`Класс: Registry`,description:`Документация по плагину класс: registry для DLE.`},i=new Date(1786541452e3),a=`

## Краткое содержание: [#краткое-содержание]

Реестр модулей DevCraft и фабрика контекстов плагинов.

***

### Свойства [#свойства]

*Нет публичных свойств.*

***

### Методы [#методы]

* public [modules()](#method_modules)
* public [module()](#method_module)
* public [page\\_class()](#method_page_class)
* public [forMod()](#method_forMod)
* public [forModuleDir()](#method_forModuleDir)
* private [listModuleDirectories()](#method_listModuleDirectories)

***

### Подробности [#подробности]

* Путь: \`devcraft/src/classes/Module/Registry.php\`

***

## Детали [#детали]

### Методы [#методы-1]

<span id="method_modules" />

### modules() [#modules]

Возвращает карту активных модулей, индексированную по идентификатору mod.

**С версии:** 200.4.0

**Возвращает:** \`array<string,\` — ModuleData> Метаданные модулей с валидным манифестом.

<span id="method_module" />

### module() [#module]

Возвращает метаданные одного модуля по идентификатору mod.

**С версии:** 200.4.0

**Параметры:**

* \`$module_id\` — Идентификатор модуля из manifest.php.

**Возвращает:** \`ModuleData|null\` — Данные модуля или null, если модуль не найден.

<span id="method_page_class" />

### page\\_class() [#page_class]

Возвращает FQCN класса страницы для action модуля.

**С версии:** 200.4.0

**Параметры:**

* \`$module_id\` — Идентификатор модуля (mod).
* \`$action\` — Имя action из URL админки.

**Возвращает:** \`string|null\` — FQCN класса страницы или null.

<span id="method_forMod" />

### forMod() [#formod]

Ищет контекст плагина по идентификатору mod среди всех каталогов модулей.

**С версии:** 200.4.0

**Параметры:**

* \`$mod\` — Идентификатор модуля из manifest.php.

**Возвращает:** \`PluginContext|null\` — Контекст плагина или null.

<span id="method_forModuleDir" />

### forModuleDir() [#formoduledir]

Загружает контекст плагина по имени каталога модуля.

**С версии:** 200.4.0

**Параметры:**

* \`$moduleDir\` — Имя каталога относительно DEVCRAFT\\_MODULES.
* \`$modOverride\` — Переопределение mod из манифеста (необязательно).

**Возвращает:** \`PluginContext|null\` — Контекст плагина или null при ошибке загрузки.

<span id="method_listModuleDirectories" />

### listModuleDirectories() [#listmoduledirectories]

Возвращает отсортированный список имён каталогов модулей с manifest.php.

**С версии:** 200.4.0

**Возвращает:** \`string[]\` — Имена подкаталогов DEVCRAFT\\_MODULES.
`,o={contents:[{heading:`краткое-содержание`,content:`Реестр модулей DevCraft и фабрика контекстов плагинов.`},{heading:`свойства`,content:`*Нет публичных свойств.*`},{heading:`методы`,content:`public modules()`},{heading:`методы`,content:`public module()`},{heading:`методы`,content:`public page\\_class()`},{heading:`методы`,content:`public forMod()`},{heading:`методы`,content:`public forModuleDir()`},{heading:`методы`,content:`private listModuleDirectories()`},{heading:`подробности`,content:"Путь: `devcraft/src/classes/Module/Registry.php`"},{heading:`modules`,content:`Возвращает карту активных модулей, индексированную по идентификатору mod.`},{heading:`modules`,content:`**С версии:** 200.4.0`},{heading:`modules`,content:"**Возвращает:** `array<string,` — ModuleData> Метаданные модулей с валидным манифестом."},{heading:`module`,content:`Возвращает метаданные одного модуля по идентификатору mod.`},{heading:`module`,content:`**С версии:** 200.4.0`},{heading:`module`,content:`**Параметры:**`},{heading:`module`,content:"`$module_id` — Идентификатор модуля из manifest.php."},{heading:`module`,content:"**Возвращает:** `ModuleData|null` — Данные модуля или null, если модуль не найден."},{heading:`page_class`,content:`Возвращает FQCN класса страницы для action модуля.`},{heading:`page_class`,content:`**С версии:** 200.4.0`},{heading:`page_class`,content:`**Параметры:**`},{heading:`page_class`,content:"`$module_id` — Идентификатор модуля (mod)."},{heading:`page_class`,content:"`$action` — Имя action из URL админки."},{heading:`page_class`,content:"**Возвращает:** `string|null` — FQCN класса страницы или null."},{heading:`formod`,content:`Ищет контекст плагина по идентификатору mod среди всех каталогов модулей.`},{heading:`formod`,content:`**С версии:** 200.4.0`},{heading:`formod`,content:`**Параметры:**`},{heading:`formod`,content:"`$mod` — Идентификатор модуля из manifest.php."},{heading:`formod`,content:"**Возвращает:** `PluginContext|null` — Контекст плагина или null."},{heading:`formoduledir`,content:`Загружает контекст плагина по имени каталога модуля.`},{heading:`formoduledir`,content:`**С версии:** 200.4.0`},{heading:`formoduledir`,content:`**Параметры:**`},{heading:`formoduledir`,content:"`$moduleDir` — Имя каталога относительно DEVCRAFT\\_MODULES."},{heading:`formoduledir`,content:"`$modOverride` — Переопределение mod из манифеста (необязательно)."},{heading:`formoduledir`,content:"**Возвращает:** `PluginContext|null` — Контекст плагина или null при ошибке загрузки."},{heading:`listmoduledirectories`,content:`Возвращает отсортированный список имён каталогов модулей с manifest.php.`},{heading:`listmoduledirectories`,content:`**С версии:** 200.4.0`},{heading:`listmoduledirectories`,content:"**Возвращает:** `string[]` — Имена подкаталогов DEVCRAFT\\_MODULES."}],headings:[{id:`краткое-содержание`,content:`Краткое содержание:`},{id:`свойства`,content:`Свойства`},{id:`методы`,content:`Методы`},{id:`подробности`,content:`Подробности`},{id:`детали`,content:`Детали`},{id:`методы-1`,content:`Методы`},{id:`modules`,content:`modules()`},{id:`module`,content:`module()`},{id:`page_class`,content:`page_class()`},{id:`formod`,content:`forMod()`},{id:`formoduledir`,content:`forModuleDir()`},{id:`listmoduledirectories`,content:`listModuleDirectories()`}]},s=[{depth:2,url:`#краткое-содержание`,title:(0,n.jsx)(n.Fragment,{children:`Краткое содержание:`})},{depth:3,url:`#свойства`,title:(0,n.jsx)(n.Fragment,{children:`Свойства`})},{depth:3,url:`#методы`,title:(0,n.jsx)(n.Fragment,{children:`Методы`})},{depth:3,url:`#подробности`,title:(0,n.jsx)(n.Fragment,{children:`Подробности`})},{depth:2,url:`#детали`,title:(0,n.jsx)(n.Fragment,{children:`Детали`})},{depth:3,url:`#методы-1`,title:(0,n.jsx)(n.Fragment,{children:`Методы`})},{depth:3,url:`#modules`,title:(0,n.jsx)(n.Fragment,{children:`modules()`})},{depth:3,url:`#module`,title:(0,n.jsx)(n.Fragment,{children:`module()`})},{depth:3,url:`#page_class`,title:(0,n.jsx)(n.Fragment,{children:`page_class()`})},{depth:3,url:`#formod`,title:(0,n.jsx)(n.Fragment,{children:`forMod()`})},{depth:3,url:`#formoduledir`,title:(0,n.jsx)(n.Fragment,{children:`forModuleDir()`})},{depth:3,url:`#listmoduledirectories`,title:(0,n.jsx)(n.Fragment,{children:`listModuleDirectories()`})}];function c(e){let t={a:`a`,code:`code`,em:`em`,h2:`h2`,h3:`h3`,hr:`hr`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h2,{id:`краткое-содержание`,children:`Краткое содержание:`}),`
`,(0,n.jsx)(t.p,{children:`Реестр модулей DevCraft и фабрика контекстов плагинов.`}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsx)(t.h3,{id:`свойства`,children:`Свойства`}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.em,{children:`Нет публичных свойств.`})}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsx)(t.h3,{id:`методы`,children:`Методы`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method_modules`,children:`modules()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method_module`,children:`module()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method_page_class`,children:`page_class()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method_forMod`,children:`forMod()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method_forModuleDir`,children:`forModuleDir()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`private `,(0,n.jsx)(t.a,{href:`#method_listModuleDirectories`,children:`listModuleDirectories()`})]}),`
`]}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsx)(t.h3,{id:`подробности`,children:`Подробности`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[`Путь: `,(0,n.jsx)(t.code,{children:`devcraft/src/classes/Module/Registry.php`})]}),`
`]}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsx)(t.h2,{id:`детали`,children:`Детали`}),`
`,(0,n.jsx)(t.h3,{id:`методы-1`,children:`Методы`}),`
`,(0,n.jsx)(`span`,{id:`method_modules`}),`
`,(0,n.jsx)(t.h3,{id:`modules`,children:`modules()`}),`
`,(0,n.jsx)(t.p,{children:`Возвращает карту активных модулей, индексированную по идентификатору mod.`}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 200.4.0`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`array<string,`}),` — ModuleData> Метаданные модулей с валидным манифестом.`]}),`
`,(0,n.jsx)(`span`,{id:`method_module`}),`
`,(0,n.jsx)(t.h3,{id:`module`,children:`module()`}),`
`,(0,n.jsx)(t.p,{children:`Возвращает метаданные одного модуля по идентификатору mod.`}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 200.4.0`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$module_id`}),` — Идентификатор модуля из manifest.php.`]}),`
`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`ModuleData|null`}),` — Данные модуля или null, если модуль не найден.`]}),`
`,(0,n.jsx)(`span`,{id:`method_page_class`}),`
`,(0,n.jsx)(t.h3,{id:`page_class`,children:`page_class()`}),`
`,(0,n.jsx)(t.p,{children:`Возвращает FQCN класса страницы для action модуля.`}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 200.4.0`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$module_id`}),` — Идентификатор модуля (mod).`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$action`}),` — Имя action из URL админки.`]}),`
`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`string|null`}),` — FQCN класса страницы или null.`]}),`
`,(0,n.jsx)(`span`,{id:`method_forMod`}),`
`,(0,n.jsx)(t.h3,{id:`formod`,children:`forMod()`}),`
`,(0,n.jsx)(t.p,{children:`Ищет контекст плагина по идентификатору mod среди всех каталогов модулей.`}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 200.4.0`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$mod`}),` — Идентификатор модуля из manifest.php.`]}),`
`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`PluginContext|null`}),` — Контекст плагина или null.`]}),`
`,(0,n.jsx)(`span`,{id:`method_forModuleDir`}),`
`,(0,n.jsx)(t.h3,{id:`formoduledir`,children:`forModuleDir()`}),`
`,(0,n.jsx)(t.p,{children:`Загружает контекст плагина по имени каталога модуля.`}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 200.4.0`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$moduleDir`}),` — Имя каталога относительно DEVCRAFT_MODULES.`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$modOverride`}),` — Переопределение mod из манифеста (необязательно).`]}),`
`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`PluginContext|null`}),` — Контекст плагина или null при ошибке загрузки.`]}),`
`,(0,n.jsx)(`span`,{id:`method_listModuleDirectories`}),`
`,(0,n.jsx)(t.h3,{id:`listmoduledirectories`,children:`listModuleDirectories()`}),`
`,(0,n.jsx)(t.p,{children:`Возвращает отсортированный список имён каталогов модулей с manifest.php.`}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 200.4.0`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`string[]`}),` — Имена подкаталогов DEVCRAFT_MODULES.`]})]})}function l(e={}){let{wrapper:t}=e.components||{};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}export{a as _markdown,l as default,r as frontmatter,i as lastModified,o as structuredData,s as toc};