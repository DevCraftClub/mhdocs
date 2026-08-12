import{r as e}from"./rolldown-runtime-QTnfLwEv.js";import{t}from"./jsx-runtime-By8HlURe.js";var n=e(t()),r={title:`SortDirection`},i=new Date(1786541452e3),a=`

**Описание:** Enum для направления сортировки результатов поиска
Этот enum определяет возможные направления сортировки данных
при выполнении запросов к API Kinopoisk.dev

**С версии:** 1.0.0

**Версия:** 1.0.0

## \`reverse()\` [#reverse]

**Описание:** Возвращает противоположное направление сортировки
Полезно для переключения направления сортировки в пользовательских интерфейсах
или для реализации логики "toggle" сортировки.

**Возвращает:** \`SortDirection\` Противоположное направление сортировки

## \`getSymbol()\` [#getsymbol]

**Описание:** Возвращает символьное представление направления
Предоставляет краткое символьное представление направления сортировки
для использования в пользовательских интерфейсах.

**Возвращает:** \`string\` Символ направления сортировки ('↑' для ASC, '↓' для DESC)

## \`getDescription()\` [#getdescription]

**Описание:** Возвращает описательное название направления на русском языке
Предоставляет человекочитаемое описание направления сортировки
для отображения в русскоязычных интерфейсах.

**Возвращает:** \`string\` Описание направления сортировки на русском языке

## \`getShortDescription()\` [#getshortdescription]

**Описание:** Возвращает краткое описание направления
Предоставляет сокращенное описание направления сортировки
для использования в компактных интерфейсах.

**Возвращает:** \`string\` Краткое описание направления

## \`isAscending()\` [#isascending]

**Описание:** Проверяет, является ли направление возрастающим

**Возвращает:** \`bool true,\` если направление ASC, false в противном случае

## \`isDescending()\` [#isdescending]

**Описание:** Проверяет, является ли направление убывающим

**Возвращает:** \`bool true,\` если направление DESC, false в противном случае

## \`fromString()\` [#fromstring]

**Описание:** Создает направление из строкового значения с fallback
Безопасно создает экземпляр SortDirection из строки с возможностью
указания значения по умолчанию при неудачном преобразовании.

**Параметры:**

* \`$value\` (string): Строковое значение направления
* \`$default\` (SortDirection|null): Значение по умолчанию (ASC если не указано)

**Возвращает:** \`SortDirection\` Экземпляр SortDirection

## \`getAllDirections()\` [#getalldirections]

**Описание:** Возвращает все доступные направления сортировки
Статический метод для получения всех возможных направлений сортировки.
Используется для создания интерфейсов выбора направления.

**Возвращает:** \`array<SortDirection>\` Массив всех направлений SortDirection

## \`getConvertedValue()\` [#getconvertedvalue]

**Описание:** Возвращает конвертированное значение направления сортировки
Преобразует направление сортировки в числовое строковое представление,
которое может использоваться для сортировки в базах данных или внешних API.
Возрастающее направление (ASC) преобразуется в "1", убывающее (DESC) - в "-1".

**Возвращает:** \`string\` Строковое числовое представление направления ("1" для ASC, "-1" для DESC)

## Cases [#cases]

### \`ASC\` [#asc]

**Значение:** \`'asc'\`

**Описание:** Сортировка по возрастанию (от меньшего к большему, от А до Я)

### \`DESC\` [#desc]

**Значение:** \`'desc'\`

**Описание:** Сортировка по убыванию (от большего к меньшему, от Я до А)
`,o={contents:[{heading:void 0,content:`**Описание:** Enum для направления сортировки результатов поиска
Этот enum определяет возможные направления сортировки данных
при выполнении запросов к API Kinopoisk.dev`},{heading:void 0,content:`**С версии:** 1.0.0`},{heading:void 0,content:`**Версия:** 1.0.0`},{heading:`reverse`,content:`**Описание:** Возвращает противоположное направление сортировки
Полезно для переключения направления сортировки в пользовательских интерфейсах
или для реализации логики "toggle" сортировки.`},{heading:`reverse`,content:"**Возвращает:** `SortDirection` Противоположное направление сортировки"},{heading:`getsymbol`,content:`**Описание:** Возвращает символьное представление направления
Предоставляет краткое символьное представление направления сортировки
для использования в пользовательских интерфейсах.`},{heading:`getsymbol`,content:"**Возвращает:** `string` Символ направления сортировки ('↑' для ASC, '↓' для DESC)"},{heading:`getdescription`,content:`**Описание:** Возвращает описательное название направления на русском языке
Предоставляет человекочитаемое описание направления сортировки
для отображения в русскоязычных интерфейсах.`},{heading:`getdescription`,content:"**Возвращает:** `string` Описание направления сортировки на русском языке"},{heading:`getshortdescription`,content:`**Описание:** Возвращает краткое описание направления
Предоставляет сокращенное описание направления сортировки
для использования в компактных интерфейсах.`},{heading:`getshortdescription`,content:"**Возвращает:** `string` Краткое описание направления"},{heading:`isascending`,content:`**Описание:** Проверяет, является ли направление возрастающим`},{heading:`isascending`,content:"**Возвращает:** `bool true,` если направление ASC, false в противном случае"},{heading:`isdescending`,content:`**Описание:** Проверяет, является ли направление убывающим`},{heading:`isdescending`,content:"**Возвращает:** `bool true,` если направление DESC, false в противном случае"},{heading:`fromstring`,content:`**Описание:** Создает направление из строкового значения с fallback
Безопасно создает экземпляр SortDirection из строки с возможностью
указания значения по умолчанию при неудачном преобразовании.`},{heading:`fromstring`,content:`**Параметры:**`},{heading:`fromstring`,content:"`$value` (string): Строковое значение направления"},{heading:`fromstring`,content:"`$default` (SortDirection|null): Значение по умолчанию (ASC если не указано)"},{heading:`fromstring`,content:"**Возвращает:** `SortDirection` Экземпляр SortDirection"},{heading:`getalldirections`,content:`**Описание:** Возвращает все доступные направления сортировки
Статический метод для получения всех возможных направлений сортировки.
Используется для создания интерфейсов выбора направления.`},{heading:`getalldirections`,content:"**Возвращает:** `array<SortDirection>` Массив всех направлений SortDirection"},{heading:`getconvertedvalue`,content:`**Описание:** Возвращает конвертированное значение направления сортировки
Преобразует направление сортировки в числовое строковое представление,
которое может использоваться для сортировки в базах данных или внешних API.
Возрастающее направление (ASC) преобразуется в "1", убывающее (DESC) - в "-1".`},{heading:`getconvertedvalue`,content:'**Возвращает:** `string` Строковое числовое представление направления ("1" для ASC, "-1" для DESC)'},{heading:`asc`,content:"**Значение:** `'asc'`"},{heading:`asc`,content:`**Описание:** Сортировка по возрастанию (от меньшего к большему, от А до Я)`},{heading:`desc`,content:"**Значение:** `'desc'`"},{heading:`desc`,content:`**Описание:** Сортировка по убыванию (от большего к меньшему, от Я до А)`}],headings:[{id:`reverse`,content:"`reverse()`"},{id:`getsymbol`,content:"`getSymbol()`"},{id:`getdescription`,content:"`getDescription()`"},{id:`getshortdescription`,content:"`getShortDescription()`"},{id:`isascending`,content:"`isAscending()`"},{id:`isdescending`,content:"`isDescending()`"},{id:`fromstring`,content:"`fromString()`"},{id:`getalldirections`,content:"`getAllDirections()`"},{id:`getconvertedvalue`,content:"`getConvertedValue()`"},{id:`cases`,content:`Cases`},{id:`asc`,content:"`ASC`"},{id:`desc`,content:"`DESC`"}]},s=[{depth:2,url:`#reverse`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`reverse()`})})},{depth:2,url:`#getsymbol`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`getSymbol()`})})},{depth:2,url:`#getdescription`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`getDescription()`})})},{depth:2,url:`#getshortdescription`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`getShortDescription()`})})},{depth:2,url:`#isascending`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`isAscending()`})})},{depth:2,url:`#isdescending`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`isDescending()`})})},{depth:2,url:`#fromstring`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`fromString()`})})},{depth:2,url:`#getalldirections`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`getAllDirections()`})})},{depth:2,url:`#getconvertedvalue`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`getConvertedValue()`})})},{depth:2,url:`#cases`,title:(0,n.jsx)(n.Fragment,{children:`Cases`})},{depth:3,url:`#asc`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`ASC`})})},{depth:3,url:`#desc`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`DESC`})})}];function c(e){let t={code:`code`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Enum для направления сортировки результатов поиска
Этот enum определяет возможные направления сортировки данных
при выполнении запросов к API Kinopoisk.dev`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 1.0.0`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Версия:`}),` 1.0.0`]}),`
`,(0,n.jsx)(t.h2,{id:`reverse`,children:(0,n.jsx)(t.code,{children:`reverse()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Возвращает противоположное направление сортировки
Полезно для переключения направления сортировки в пользовательских интерфейсах
или для реализации логики "toggle" сортировки.`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`SortDirection`}),` Противоположное направление сортировки`]}),`
`,(0,n.jsx)(t.h2,{id:`getsymbol`,children:(0,n.jsx)(t.code,{children:`getSymbol()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Возвращает символьное представление направления
Предоставляет краткое символьное представление направления сортировки
для использования в пользовательских интерфейсах.`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`string`}),` Символ направления сортировки ('↑' для ASC, '↓' для DESC)`]}),`
`,(0,n.jsx)(t.h2,{id:`getdescription`,children:(0,n.jsx)(t.code,{children:`getDescription()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Возвращает описательное название направления на русском языке
Предоставляет человекочитаемое описание направления сортировки
для отображения в русскоязычных интерфейсах.`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`string`}),` Описание направления сортировки на русском языке`]}),`
`,(0,n.jsx)(t.h2,{id:`getshortdescription`,children:(0,n.jsx)(t.code,{children:`getShortDescription()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Возвращает краткое описание направления
Предоставляет сокращенное описание направления сортировки
для использования в компактных интерфейсах.`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`string`}),` Краткое описание направления`]}),`
`,(0,n.jsx)(t.h2,{id:`isascending`,children:(0,n.jsx)(t.code,{children:`isAscending()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Проверяет, является ли направление возрастающим`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`bool true,`}),` если направление ASC, false в противном случае`]}),`
`,(0,n.jsx)(t.h2,{id:`isdescending`,children:(0,n.jsx)(t.code,{children:`isDescending()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Проверяет, является ли направление убывающим`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`bool true,`}),` если направление DESC, false в противном случае`]}),`
`,(0,n.jsx)(t.h2,{id:`fromstring`,children:(0,n.jsx)(t.code,{children:`fromString()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Создает направление из строкового значения с fallback
Безопасно создает экземпляр SortDirection из строки с возможностью
указания значения по умолчанию при неудачном преобразовании.`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$value`}),` (string): Строковое значение направления`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$default`}),` (SortDirection|null): Значение по умолчанию (ASC если не указано)`]}),`
`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`SortDirection`}),` Экземпляр SortDirection`]}),`
`,(0,n.jsx)(t.h2,{id:`getalldirections`,children:(0,n.jsx)(t.code,{children:`getAllDirections()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Возвращает все доступные направления сортировки
Статический метод для получения всех возможных направлений сортировки.
Используется для создания интерфейсов выбора направления.`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`array<SortDirection>`}),` Массив всех направлений SortDirection`]}),`
`,(0,n.jsx)(t.h2,{id:`getconvertedvalue`,children:(0,n.jsx)(t.code,{children:`getConvertedValue()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Возвращает конвертированное значение направления сортировки
Преобразует направление сортировки в числовое строковое представление,
которое может использоваться для сортировки в базах данных или внешних API.
Возрастающее направление (ASC) преобразуется в "1", убывающее (DESC) - в "-1".`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`string`}),` Строковое числовое представление направления ("1" для ASC, "-1" для DESC)`]}),`
`,(0,n.jsx)(t.h2,{id:`cases`,children:`Cases`}),`
`,(0,n.jsx)(t.h3,{id:`asc`,children:(0,n.jsx)(t.code,{children:`ASC`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Значение:`}),` `,(0,n.jsx)(t.code,{children:`'asc'`})]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Сортировка по возрастанию (от меньшего к большему, от А до Я)`]}),`
`,(0,n.jsx)(t.h3,{id:`desc`,children:(0,n.jsx)(t.code,{children:`DESC`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Значение:`}),` `,(0,n.jsx)(t.code,{children:`'desc'`})]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Сортировка по убыванию (от большего к меньшему, от Я до А)`]})]})}function l(e={}){let{wrapper:t}=e.components||{};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}export{a as _markdown,l as default,r as frontmatter,i as lastModified,o as structuredData,s as toc};