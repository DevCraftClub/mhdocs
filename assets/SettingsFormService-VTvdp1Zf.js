import{r as e}from"./rolldown-runtime-QTnfLwEv.js";import{t}from"./jsx-runtime-By8HlURe.js";var n=e(t()),r={title:`Класс: SettingsFormService`,description:`Документация по плагину класс: settingsformservice для DLE.`},i=new Date(1786544989e3),a=`

## Краткое содержание: [#краткое-содержание]

Строит view-model и валидирует данные формы настроек модуля.

***

### Свойства [#свойства]

*Нет публичных свойств.*

***

### Методы [#методы]

* public [buildViewModel()](#method_buildViewModel)
* public [buildFilters()](#method_buildFilters)
* public [validatePartial()](#method_validatePartial)
* public [applyConfigDefaults()](#method_applyConfigDefaults)
* private [multiValueToArray()](#method_multiValueToArray)
* private [filterFieldValue()](#method_filterFieldValue)

***

### Подробности [#подробности]

* Путь: \`devcraft/src/classes/Admin/SettingsFormService.php\`

***

## Детали [#детали]

### Методы [#методы-1]

<span id="method_buildViewModel" />

### buildViewModel() [#buildviewmodel]

Формирует view-model формы настроек для Twig.

**С версии:** 200.4.0

**Параметры:**

* \`$schema\` — Схема полей настроек.

**Возвращает:** \`array<string,\` — mixed> Данные формы: codename, layout, sections, save\\_url.

<span id="method_buildFilters" />

### buildFilters() [#buildfilters]

Собирает карту PHP-фильтров для полей схемы.

**С версии:** 200.4.0

**Параметры:**

* \`$schema\` — Схема полей настроек.

**Возвращает:** \`array<string,\` — int> id поля => константа filter\\_var.

<span id="method_validatePartial" />

### validatePartial() [#validatepartial]

Валидирует частичный ввод настроек по схеме.

**С версии:** 200.4.0

**Параметры:**

* \`$schema\` — Схема полей настроек.

**Возвращает:** \`array{valid: array<string, mixed>, errors: array<string, string>}\` — Валидные значения и ошибки по id.

<span id="method_applyConfigDefaults" />

### applyConfigDefaults() [#applyconfigdefaults]

Подставляет значения по умолчанию и нормализует типы полей конфигурации.

**С версии:** 200.4.0

**Параметры:**

* \`$schema\` — Схема полей настроек.

**Возвращает:** \`array<string,\` — mixed> Значения с учётом defaults DevCraftConfig.

<span id="method_multiValueToArray" />

### multiValueToArray() [#multivaluetoarray]

Преобразует значение multi-поля в список строк.

**С версии:** 200.4.0

**Параметры:**

* \`$value\` — Сырые данные поля.

**Возвращает:** \`list<string>\` — Нормализованный список значений.

<span id="method_filterFieldValue" />

### filterFieldValue() [#filterfieldvalue]

Применяет filter\\_var к значению поля согласно типу или явному фильтру.

**С версии:** 200.4.0

**Параметры:**

* \`$field\` — Объект поля схемы.
* \`$raw\` — Сырое значение.

**Возвращает:** \`mixed\` — Отфильтрованное значение или false при ошибке.
`,o={contents:[{heading:`краткое-содержание`,content:`Строит view-model и валидирует данные формы настроек модуля.`},{heading:`свойства`,content:`*Нет публичных свойств.*`},{heading:`методы`,content:`public buildViewModel()`},{heading:`методы`,content:`public buildFilters()`},{heading:`методы`,content:`public validatePartial()`},{heading:`методы`,content:`public applyConfigDefaults()`},{heading:`методы`,content:`private multiValueToArray()`},{heading:`методы`,content:`private filterFieldValue()`},{heading:`подробности`,content:"Путь: `devcraft/src/classes/Admin/SettingsFormService.php`"},{heading:`buildviewmodel`,content:`Формирует view-model формы настроек для Twig.`},{heading:`buildviewmodel`,content:`**С версии:** 200.4.0`},{heading:`buildviewmodel`,content:`**Параметры:**`},{heading:`buildviewmodel`,content:"`$schema` — Схема полей настроек."},{heading:`buildviewmodel`,content:"**Возвращает:** `array<string,` — mixed> Данные формы: codename, layout, sections, save\\_url."},{heading:`buildfilters`,content:`Собирает карту PHP-фильтров для полей схемы.`},{heading:`buildfilters`,content:`**С версии:** 200.4.0`},{heading:`buildfilters`,content:`**Параметры:**`},{heading:`buildfilters`,content:"`$schema` — Схема полей настроек."},{heading:`buildfilters`,content:"**Возвращает:** `array<string,` — int> id поля => константа filter\\_var."},{heading:`validatepartial`,content:`Валидирует частичный ввод настроек по схеме.`},{heading:`validatepartial`,content:`**С версии:** 200.4.0`},{heading:`validatepartial`,content:`**Параметры:**`},{heading:`validatepartial`,content:"`$schema` — Схема полей настроек."},{heading:`validatepartial`,content:"**Возвращает:** `array{valid: array<string, mixed>, errors: array<string, string>}` — Валидные значения и ошибки по id."},{heading:`applyconfigdefaults`,content:`Подставляет значения по умолчанию и нормализует типы полей конфигурации.`},{heading:`applyconfigdefaults`,content:`**С версии:** 200.4.0`},{heading:`applyconfigdefaults`,content:`**Параметры:**`},{heading:`applyconfigdefaults`,content:"`$schema` — Схема полей настроек."},{heading:`applyconfigdefaults`,content:"**Возвращает:** `array<string,` — mixed> Значения с учётом defaults DevCraftConfig."},{heading:`multivaluetoarray`,content:`Преобразует значение multi-поля в список строк.`},{heading:`multivaluetoarray`,content:`**С версии:** 200.4.0`},{heading:`multivaluetoarray`,content:`**Параметры:**`},{heading:`multivaluetoarray`,content:"`$value` — Сырые данные поля."},{heading:`multivaluetoarray`,content:"**Возвращает:** `list<string>` — Нормализованный список значений."},{heading:`filterfieldvalue`,content:`Применяет filter\\_var к значению поля согласно типу или явному фильтру.`},{heading:`filterfieldvalue`,content:`**С версии:** 200.4.0`},{heading:`filterfieldvalue`,content:`**Параметры:**`},{heading:`filterfieldvalue`,content:"`$field` — Объект поля схемы."},{heading:`filterfieldvalue`,content:"`$raw` — Сырое значение."},{heading:`filterfieldvalue`,content:"**Возвращает:** `mixed` — Отфильтрованное значение или false при ошибке."}],headings:[{id:`краткое-содержание`,content:`Краткое содержание:`},{id:`свойства`,content:`Свойства`},{id:`методы`,content:`Методы`},{id:`подробности`,content:`Подробности`},{id:`детали`,content:`Детали`},{id:`методы-1`,content:`Методы`},{id:`buildviewmodel`,content:`buildViewModel()`},{id:`buildfilters`,content:`buildFilters()`},{id:`validatepartial`,content:`validatePartial()`},{id:`applyconfigdefaults`,content:`applyConfigDefaults()`},{id:`multivaluetoarray`,content:`multiValueToArray()`},{id:`filterfieldvalue`,content:`filterFieldValue()`}]},s=[{depth:2,url:`#краткое-содержание`,title:(0,n.jsx)(n.Fragment,{children:`Краткое содержание:`})},{depth:3,url:`#свойства`,title:(0,n.jsx)(n.Fragment,{children:`Свойства`})},{depth:3,url:`#методы`,title:(0,n.jsx)(n.Fragment,{children:`Методы`})},{depth:3,url:`#подробности`,title:(0,n.jsx)(n.Fragment,{children:`Подробности`})},{depth:2,url:`#детали`,title:(0,n.jsx)(n.Fragment,{children:`Детали`})},{depth:3,url:`#методы-1`,title:(0,n.jsx)(n.Fragment,{children:`Методы`})},{depth:3,url:`#buildviewmodel`,title:(0,n.jsx)(n.Fragment,{children:`buildViewModel()`})},{depth:3,url:`#buildfilters`,title:(0,n.jsx)(n.Fragment,{children:`buildFilters()`})},{depth:3,url:`#validatepartial`,title:(0,n.jsx)(n.Fragment,{children:`validatePartial()`})},{depth:3,url:`#applyconfigdefaults`,title:(0,n.jsx)(n.Fragment,{children:`applyConfigDefaults()`})},{depth:3,url:`#multivaluetoarray`,title:(0,n.jsx)(n.Fragment,{children:`multiValueToArray()`})},{depth:3,url:`#filterfieldvalue`,title:(0,n.jsx)(n.Fragment,{children:`filterFieldValue()`})}];function c(e){let t={a:`a`,code:`code`,em:`em`,h2:`h2`,h3:`h3`,hr:`hr`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h2,{id:`краткое-содержание`,children:`Краткое содержание:`}),`
`,(0,n.jsx)(t.p,{children:`Строит view-model и валидирует данные формы настроек модуля.`}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsx)(t.h3,{id:`свойства`,children:`Свойства`}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.em,{children:`Нет публичных свойств.`})}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsx)(t.h3,{id:`методы`,children:`Методы`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method_buildViewModel`,children:`buildViewModel()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method_buildFilters`,children:`buildFilters()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method_validatePartial`,children:`validatePartial()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method_applyConfigDefaults`,children:`applyConfigDefaults()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`private `,(0,n.jsx)(t.a,{href:`#method_multiValueToArray`,children:`multiValueToArray()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`private `,(0,n.jsx)(t.a,{href:`#method_filterFieldValue`,children:`filterFieldValue()`})]}),`
`]}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsx)(t.h3,{id:`подробности`,children:`Подробности`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[`Путь: `,(0,n.jsx)(t.code,{children:`devcraft/src/classes/Admin/SettingsFormService.php`})]}),`
`]}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsx)(t.h2,{id:`детали`,children:`Детали`}),`
`,(0,n.jsx)(t.h3,{id:`методы-1`,children:`Методы`}),`
`,(0,n.jsx)(`span`,{id:`method_buildViewModel`}),`
`,(0,n.jsx)(t.h3,{id:`buildviewmodel`,children:`buildViewModel()`}),`
`,(0,n.jsx)(t.p,{children:`Формирует view-model формы настроек для Twig.`}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 200.4.0`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$schema`}),` — Схема полей настроек.`]}),`
`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`array<string,`}),` — mixed> Данные формы: codename, layout, sections, save_url.`]}),`
`,(0,n.jsx)(`span`,{id:`method_buildFilters`}),`
`,(0,n.jsx)(t.h3,{id:`buildfilters`,children:`buildFilters()`}),`
`,(0,n.jsx)(t.p,{children:`Собирает карту PHP-фильтров для полей схемы.`}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 200.4.0`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$schema`}),` — Схема полей настроек.`]}),`
`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`array<string,`}),` — int> id поля => константа filter_var.`]}),`
`,(0,n.jsx)(`span`,{id:`method_validatePartial`}),`
`,(0,n.jsx)(t.h3,{id:`validatepartial`,children:`validatePartial()`}),`
`,(0,n.jsx)(t.p,{children:`Валидирует частичный ввод настроек по схеме.`}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 200.4.0`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$schema`}),` — Схема полей настроек.`]}),`
`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`array{valid: array<string, mixed>, errors: array<string, string>}`}),` — Валидные значения и ошибки по id.`]}),`
`,(0,n.jsx)(`span`,{id:`method_applyConfigDefaults`}),`
`,(0,n.jsx)(t.h3,{id:`applyconfigdefaults`,children:`applyConfigDefaults()`}),`
`,(0,n.jsx)(t.p,{children:`Подставляет значения по умолчанию и нормализует типы полей конфигурации.`}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 200.4.0`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$schema`}),` — Схема полей настроек.`]}),`
`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`array<string,`}),` — mixed> Значения с учётом defaults DevCraftConfig.`]}),`
`,(0,n.jsx)(`span`,{id:`method_multiValueToArray`}),`
`,(0,n.jsx)(t.h3,{id:`multivaluetoarray`,children:`multiValueToArray()`}),`
`,(0,n.jsx)(t.p,{children:`Преобразует значение multi-поля в список строк.`}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 200.4.0`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$value`}),` — Сырые данные поля.`]}),`
`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`list<string>`}),` — Нормализованный список значений.`]}),`
`,(0,n.jsx)(`span`,{id:`method_filterFieldValue`}),`
`,(0,n.jsx)(t.h3,{id:`filterfieldvalue`,children:`filterFieldValue()`}),`
`,(0,n.jsx)(t.p,{children:`Применяет filter_var к значению поля согласно типу или явному фильтру.`}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 200.4.0`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$field`}),` — Объект поля схемы.`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$raw`}),` — Сырое значение.`]}),`
`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`mixed`}),` — Отфильтрованное значение или false при ошибке.`]})]})}function l(e={}){let{wrapper:t}=e.components||{};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}export{a as _markdown,l as default,r as frontmatter,i as lastModified,o as structuredData,s as toc};