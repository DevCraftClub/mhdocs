import{r as e}from"./rolldown-runtime-QTnfLwEv.js";import{t}from"./jsx-runtime-By8HlURe.js";var n=e(t()),r={title:`Класс: AbstractRepository`,description:`Документация по плагину класс: abstractrepository для DLE.`},i=new Date(1786544989e3),a=`

## Краткое содержание: [#краткое-содержание]

Базовый Cycle ORM-репозиторий с фильтрацией, пагинацией и метаданными колонок.

***

### Свойства [#свойства]

*Нет публичных свойств.*

***

### Методы [#методы]

* public [getFirst()](#method_getFirst)
* public [getLast()](#method_getLast)
* public [limit()](#method_limit)
* public [total()](#method_total)
* public [findFiltered()](#method_findFiltered)
* public [distinctColumnValues()](#method_distinctColumnValues)
* public [columnBounds()](#method_columnBounds)
* public [deleteEntity()](#method_deleteEntity)
* public [deleteByColumn()](#method_deleteByColumn)
* protected [applyCriteria()](#method_applyCriteria)
* protected [applyBetween()](#method_applyBetween)
* protected [extractColumnValue()](#method_extractColumnValue)
* protected [stringifyColumnValue()](#method_stringifyColumnValue)

***

### Подробности [#подробности]

* Путь: \`devcraft/src/classes/Abstracts/AbstractRepository.php\`

***

## Детали [#детали]

### Методы [#методы-1]

<span id="method_getFirst" />

### getFirst() [#getfirst]

Возвращает самую раннюю запись по дате создания.

**С версии:** 200.4.0

**Возвращает:** \`object|null\` — Первая сущность или \`null\`, если таблица пуста.

<span id="method_getLast" />

### getLast() [#getlast]

Возвращает самую позднюю запись по дате создания.

**С версии:** 200.4.0

**Возвращает:** \`object|null\` — Последняя сущность или \`null\`, если таблица пуста.

<span id="method_limit" />

### limit() [#limit]

Возвращает ограниченный набор записей с заданным смещением.

**С версии:** 200.4.0

**Параметры:**

* \`$total\` — Количество записей.
* \`$start\` — Смещение от начала выборки.

**Возвращает:** \`array<int,\` — object> Список сущностей.

<span id="method_total" />

### total() [#total]

Возвращает общее количество записей в таблице сущности.

**С версии:** 200.4.0

**Возвращает:** \`int\` — Число строк.

<span id="method_findFiltered" />

### findFiltered() [#findfiltered]

Выполняет фильтрованную выборку с пагинацией и сортировкой.

**С версии:** 200.4.0

**Параметры:**

* \`$page\` — Номер страницы (начиная с 1).
* \`$perPage\` — Записей на странице.
* \`$order\` — Колонка сортировки.
* \`$sort\` — Направление (\`asc\` или \`desc\`).
* \`$allowedOrderColumns\` — Допустимые колонки сортировки.
* \`$defaultOrder\` — Колонка сортировки по умолчанию.

**Возвращает:** \`array{items: object[], total: int}\` — Элементы текущей страницы и общее количество.

<span id="method_distinctColumnValues" />

### distinctColumnValues() [#distinctcolumnvalues]

Возвращает уникальные значения указанной колонки для выпадающих фильтров.

**С версии:** 200.4.0

**Параметры:**

* \`$column\` — Имя колонки в таблице сущности.

**Возвращает:** \`list<string>\` — Отсортированный список уникальных строковых значений.

<span id="method_columnBounds" />

### columnBounds() [#columnbounds]

Возвращает минимальное и максимальное значение колонки для диапазонных фильтров.

**С версии:** 200.4.0

**Параметры:**

* \`$column\` — Имя колонки в таблице сущности.

**Возвращает:** \`array{min: mixed, max: mixed}\` — Границы диапазона или \`null\` при отсутствии данных.

<span id="method_deleteEntity" />

### deleteEntity() [#deleteentity]

Удаляет сущность из базы данных.

**С версии:** 200.4.0

**Параметры:**

* \`$entity\` — Экземпляр сущности для удаления.

**Возвращает:** \`bool\` — Всегда \`true\` при успешном вызове менеджера ORM.

<span id="method_deleteByColumn" />

### deleteByColumn() [#deletebycolumn]

Удаляет первую запись, соответствующую значению колонки.

**С версии:** 200.4.0

**Параметры:**

* \`$column\` — Имя колонки для поиска.
* \`$value\` — Значение для сравнения.

**Возвращает:** \`bool\` — \`true\`, если запись найдена и удалена; иначе \`false\`.

<span id="method_applyCriteria" />

### applyCriteria() [#applycriteria]

Применяет список критериев фильтрации к объекту выборки Cycle ORM.

**С версии:** 200.4.0

**Параметры:**

* \`$select\` — Объект выборки Cycle ORM.

<span id="method_applyBetween" />

### applyBetween() [#applybetween]

Добавляет условие диапазона \`between\` к выборке.

**С версии:** 200.4.0

**Параметры:**

* \`$select\` — Объект выборки Cycle ORM.
* \`$column\` — Имя колонки.

<span id="method_extractColumnValue" />

### extractColumnValue() [#extractcolumnvalue]

Извлекает строковое значение колонки из строки результата выборки.

**С версии:** 200.4.0

**Параметры:**

* \`$row\` — Строка результата (сущность, массив или объект).
* \`$column\` — Имя колонки.

**Возвращает:** \`string\` — Строковое представление значения или пустая строка.

<span id="method_stringifyColumnValue" />

### stringifyColumnValue() [#stringifycolumnvalue]

Преобразует значение колонки в строку для фильтров и отображения.

**С версии:** 200.4.0

**Параметры:**

* \`$value\` — Исходное значение.

**Возвращает:** \`string\` — Строковое представление.
`,o={contents:[{heading:`краткое-содержание`,content:`Базовый Cycle ORM-репозиторий с фильтрацией, пагинацией и метаданными колонок.`},{heading:`свойства`,content:`*Нет публичных свойств.*`},{heading:`методы`,content:`public getFirst()`},{heading:`методы`,content:`public getLast()`},{heading:`методы`,content:`public limit()`},{heading:`методы`,content:`public total()`},{heading:`методы`,content:`public findFiltered()`},{heading:`методы`,content:`public distinctColumnValues()`},{heading:`методы`,content:`public columnBounds()`},{heading:`методы`,content:`public deleteEntity()`},{heading:`методы`,content:`public deleteByColumn()`},{heading:`методы`,content:`protected applyCriteria()`},{heading:`методы`,content:`protected applyBetween()`},{heading:`методы`,content:`protected extractColumnValue()`},{heading:`методы`,content:`protected stringifyColumnValue()`},{heading:`подробности`,content:"Путь: `devcraft/src/classes/Abstracts/AbstractRepository.php`"},{heading:`getfirst`,content:`Возвращает самую раннюю запись по дате создания.`},{heading:`getfirst`,content:`**С версии:** 200.4.0`},{heading:`getfirst`,content:"**Возвращает:** `object|null` — Первая сущность или `null`, если таблица пуста."},{heading:`getlast`,content:`Возвращает самую позднюю запись по дате создания.`},{heading:`getlast`,content:`**С версии:** 200.4.0`},{heading:`getlast`,content:"**Возвращает:** `object|null` — Последняя сущность или `null`, если таблица пуста."},{heading:`limit`,content:`Возвращает ограниченный набор записей с заданным смещением.`},{heading:`limit`,content:`**С версии:** 200.4.0`},{heading:`limit`,content:`**Параметры:**`},{heading:`limit`,content:"`$total` — Количество записей."},{heading:`limit`,content:"`$start` — Смещение от начала выборки."},{heading:`limit`,content:"**Возвращает:** `array<int,` — object> Список сущностей."},{heading:`total`,content:`Возвращает общее количество записей в таблице сущности.`},{heading:`total`,content:`**С версии:** 200.4.0`},{heading:`total`,content:"**Возвращает:** `int` — Число строк."},{heading:`findfiltered`,content:`Выполняет фильтрованную выборку с пагинацией и сортировкой.`},{heading:`findfiltered`,content:`**С версии:** 200.4.0`},{heading:`findfiltered`,content:`**Параметры:**`},{heading:`findfiltered`,content:"`$page` — Номер страницы (начиная с 1)."},{heading:`findfiltered`,content:"`$perPage` — Записей на странице."},{heading:`findfiltered`,content:"`$order` — Колонка сортировки."},{heading:`findfiltered`,content:"`$sort` — Направление (`asc` или `desc`)."},{heading:`findfiltered`,content:"`$allowedOrderColumns` — Допустимые колонки сортировки."},{heading:`findfiltered`,content:"`$defaultOrder` — Колонка сортировки по умолчанию."},{heading:`findfiltered`,content:"**Возвращает:** `array{items: object[], total: int}` — Элементы текущей страницы и общее количество."},{heading:`distinctcolumnvalues`,content:`Возвращает уникальные значения указанной колонки для выпадающих фильтров.`},{heading:`distinctcolumnvalues`,content:`**С версии:** 200.4.0`},{heading:`distinctcolumnvalues`,content:`**Параметры:**`},{heading:`distinctcolumnvalues`,content:"`$column` — Имя колонки в таблице сущности."},{heading:`distinctcolumnvalues`,content:"**Возвращает:** `list<string>` — Отсортированный список уникальных строковых значений."},{heading:`columnbounds`,content:`Возвращает минимальное и максимальное значение колонки для диапазонных фильтров.`},{heading:`columnbounds`,content:`**С версии:** 200.4.0`},{heading:`columnbounds`,content:`**Параметры:**`},{heading:`columnbounds`,content:"`$column` — Имя колонки в таблице сущности."},{heading:`columnbounds`,content:"**Возвращает:** `array{min: mixed, max: mixed}` — Границы диапазона или `null` при отсутствии данных."},{heading:`deleteentity`,content:`Удаляет сущность из базы данных.`},{heading:`deleteentity`,content:`**С версии:** 200.4.0`},{heading:`deleteentity`,content:`**Параметры:**`},{heading:`deleteentity`,content:"`$entity` — Экземпляр сущности для удаления."},{heading:`deleteentity`,content:"**Возвращает:** `bool` — Всегда `true` при успешном вызове менеджера ORM."},{heading:`deletebycolumn`,content:`Удаляет первую запись, соответствующую значению колонки.`},{heading:`deletebycolumn`,content:`**С версии:** 200.4.0`},{heading:`deletebycolumn`,content:`**Параметры:**`},{heading:`deletebycolumn`,content:"`$column` — Имя колонки для поиска."},{heading:`deletebycolumn`,content:"`$value` — Значение для сравнения."},{heading:`deletebycolumn`,content:"**Возвращает:** `bool` — `true`, если запись найдена и удалена; иначе `false`."},{heading:`applycriteria`,content:`Применяет список критериев фильтрации к объекту выборки Cycle ORM.`},{heading:`applycriteria`,content:`**С версии:** 200.4.0`},{heading:`applycriteria`,content:`**Параметры:**`},{heading:`applycriteria`,content:"`$select` — Объект выборки Cycle ORM."},{heading:`applybetween`,content:"Добавляет условие диапазона `between` к выборке."},{heading:`applybetween`,content:`**С версии:** 200.4.0`},{heading:`applybetween`,content:`**Параметры:**`},{heading:`applybetween`,content:"`$select` — Объект выборки Cycle ORM."},{heading:`applybetween`,content:"`$column` — Имя колонки."},{heading:`extractcolumnvalue`,content:`Извлекает строковое значение колонки из строки результата выборки.`},{heading:`extractcolumnvalue`,content:`**С версии:** 200.4.0`},{heading:`extractcolumnvalue`,content:`**Параметры:**`},{heading:`extractcolumnvalue`,content:"`$row` — Строка результата (сущность, массив или объект)."},{heading:`extractcolumnvalue`,content:"`$column` — Имя колонки."},{heading:`extractcolumnvalue`,content:"**Возвращает:** `string` — Строковое представление значения или пустая строка."},{heading:`stringifycolumnvalue`,content:`Преобразует значение колонки в строку для фильтров и отображения.`},{heading:`stringifycolumnvalue`,content:`**С версии:** 200.4.0`},{heading:`stringifycolumnvalue`,content:`**Параметры:**`},{heading:`stringifycolumnvalue`,content:"`$value` — Исходное значение."},{heading:`stringifycolumnvalue`,content:"**Возвращает:** `string` — Строковое представление."}],headings:[{id:`краткое-содержание`,content:`Краткое содержание:`},{id:`свойства`,content:`Свойства`},{id:`методы`,content:`Методы`},{id:`подробности`,content:`Подробности`},{id:`детали`,content:`Детали`},{id:`методы-1`,content:`Методы`},{id:`getfirst`,content:`getFirst()`},{id:`getlast`,content:`getLast()`},{id:`limit`,content:`limit()`},{id:`total`,content:`total()`},{id:`findfiltered`,content:`findFiltered()`},{id:`distinctcolumnvalues`,content:`distinctColumnValues()`},{id:`columnbounds`,content:`columnBounds()`},{id:`deleteentity`,content:`deleteEntity()`},{id:`deletebycolumn`,content:`deleteByColumn()`},{id:`applycriteria`,content:`applyCriteria()`},{id:`applybetween`,content:`applyBetween()`},{id:`extractcolumnvalue`,content:`extractColumnValue()`},{id:`stringifycolumnvalue`,content:`stringifyColumnValue()`}]},s=[{depth:2,url:`#краткое-содержание`,title:(0,n.jsx)(n.Fragment,{children:`Краткое содержание:`})},{depth:3,url:`#свойства`,title:(0,n.jsx)(n.Fragment,{children:`Свойства`})},{depth:3,url:`#методы`,title:(0,n.jsx)(n.Fragment,{children:`Методы`})},{depth:3,url:`#подробности`,title:(0,n.jsx)(n.Fragment,{children:`Подробности`})},{depth:2,url:`#детали`,title:(0,n.jsx)(n.Fragment,{children:`Детали`})},{depth:3,url:`#методы-1`,title:(0,n.jsx)(n.Fragment,{children:`Методы`})},{depth:3,url:`#getfirst`,title:(0,n.jsx)(n.Fragment,{children:`getFirst()`})},{depth:3,url:`#getlast`,title:(0,n.jsx)(n.Fragment,{children:`getLast()`})},{depth:3,url:`#limit`,title:(0,n.jsx)(n.Fragment,{children:`limit()`})},{depth:3,url:`#total`,title:(0,n.jsx)(n.Fragment,{children:`total()`})},{depth:3,url:`#findfiltered`,title:(0,n.jsx)(n.Fragment,{children:`findFiltered()`})},{depth:3,url:`#distinctcolumnvalues`,title:(0,n.jsx)(n.Fragment,{children:`distinctColumnValues()`})},{depth:3,url:`#columnbounds`,title:(0,n.jsx)(n.Fragment,{children:`columnBounds()`})},{depth:3,url:`#deleteentity`,title:(0,n.jsx)(n.Fragment,{children:`deleteEntity()`})},{depth:3,url:`#deletebycolumn`,title:(0,n.jsx)(n.Fragment,{children:`deleteByColumn()`})},{depth:3,url:`#applycriteria`,title:(0,n.jsx)(n.Fragment,{children:`applyCriteria()`})},{depth:3,url:`#applybetween`,title:(0,n.jsx)(n.Fragment,{children:`applyBetween()`})},{depth:3,url:`#extractcolumnvalue`,title:(0,n.jsx)(n.Fragment,{children:`extractColumnValue()`})},{depth:3,url:`#stringifycolumnvalue`,title:(0,n.jsx)(n.Fragment,{children:`stringifyColumnValue()`})}];function c(e){let t={a:`a`,code:`code`,em:`em`,h2:`h2`,h3:`h3`,hr:`hr`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h2,{id:`краткое-содержание`,children:`Краткое содержание:`}),`
`,(0,n.jsx)(t.p,{children:`Базовый Cycle ORM-репозиторий с фильтрацией, пагинацией и метаданными колонок.`}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsx)(t.h3,{id:`свойства`,children:`Свойства`}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.em,{children:`Нет публичных свойств.`})}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsx)(t.h3,{id:`методы`,children:`Методы`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method_getFirst`,children:`getFirst()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method_getLast`,children:`getLast()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method_limit`,children:`limit()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method_total`,children:`total()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method_findFiltered`,children:`findFiltered()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method_distinctColumnValues`,children:`distinctColumnValues()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method_columnBounds`,children:`columnBounds()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method_deleteEntity`,children:`deleteEntity()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method_deleteByColumn`,children:`deleteByColumn()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`protected `,(0,n.jsx)(t.a,{href:`#method_applyCriteria`,children:`applyCriteria()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`protected `,(0,n.jsx)(t.a,{href:`#method_applyBetween`,children:`applyBetween()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`protected `,(0,n.jsx)(t.a,{href:`#method_extractColumnValue`,children:`extractColumnValue()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`protected `,(0,n.jsx)(t.a,{href:`#method_stringifyColumnValue`,children:`stringifyColumnValue()`})]}),`
`]}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsx)(t.h3,{id:`подробности`,children:`Подробности`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[`Путь: `,(0,n.jsx)(t.code,{children:`devcraft/src/classes/Abstracts/AbstractRepository.php`})]}),`
`]}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsx)(t.h2,{id:`детали`,children:`Детали`}),`
`,(0,n.jsx)(t.h3,{id:`методы-1`,children:`Методы`}),`
`,(0,n.jsx)(`span`,{id:`method_getFirst`}),`
`,(0,n.jsx)(t.h3,{id:`getfirst`,children:`getFirst()`}),`
`,(0,n.jsx)(t.p,{children:`Возвращает самую раннюю запись по дате создания.`}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 200.4.0`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`object|null`}),` — Первая сущность или `,(0,n.jsx)(t.code,{children:`null`}),`, если таблица пуста.`]}),`
`,(0,n.jsx)(`span`,{id:`method_getLast`}),`
`,(0,n.jsx)(t.h3,{id:`getlast`,children:`getLast()`}),`
`,(0,n.jsx)(t.p,{children:`Возвращает самую позднюю запись по дате создания.`}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 200.4.0`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`object|null`}),` — Последняя сущность или `,(0,n.jsx)(t.code,{children:`null`}),`, если таблица пуста.`]}),`
`,(0,n.jsx)(`span`,{id:`method_limit`}),`
`,(0,n.jsx)(t.h3,{id:`limit`,children:`limit()`}),`
`,(0,n.jsx)(t.p,{children:`Возвращает ограниченный набор записей с заданным смещением.`}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 200.4.0`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$total`}),` — Количество записей.`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$start`}),` — Смещение от начала выборки.`]}),`
`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`array<int,`}),` — object> Список сущностей.`]}),`
`,(0,n.jsx)(`span`,{id:`method_total`}),`
`,(0,n.jsx)(t.h3,{id:`total`,children:`total()`}),`
`,(0,n.jsx)(t.p,{children:`Возвращает общее количество записей в таблице сущности.`}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 200.4.0`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`int`}),` — Число строк.`]}),`
`,(0,n.jsx)(`span`,{id:`method_findFiltered`}),`
`,(0,n.jsx)(t.h3,{id:`findfiltered`,children:`findFiltered()`}),`
`,(0,n.jsx)(t.p,{children:`Выполняет фильтрованную выборку с пагинацией и сортировкой.`}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 200.4.0`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$page`}),` — Номер страницы (начиная с 1).`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$perPage`}),` — Записей на странице.`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$order`}),` — Колонка сортировки.`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$sort`}),` — Направление (`,(0,n.jsx)(t.code,{children:`asc`}),` или `,(0,n.jsx)(t.code,{children:`desc`}),`).`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$allowedOrderColumns`}),` — Допустимые колонки сортировки.`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$defaultOrder`}),` — Колонка сортировки по умолчанию.`]}),`
`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`array{items: object[], total: int}`}),` — Элементы текущей страницы и общее количество.`]}),`
`,(0,n.jsx)(`span`,{id:`method_distinctColumnValues`}),`
`,(0,n.jsx)(t.h3,{id:`distinctcolumnvalues`,children:`distinctColumnValues()`}),`
`,(0,n.jsx)(t.p,{children:`Возвращает уникальные значения указанной колонки для выпадающих фильтров.`}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 200.4.0`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$column`}),` — Имя колонки в таблице сущности.`]}),`
`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`list<string>`}),` — Отсортированный список уникальных строковых значений.`]}),`
`,(0,n.jsx)(`span`,{id:`method_columnBounds`}),`
`,(0,n.jsx)(t.h3,{id:`columnbounds`,children:`columnBounds()`}),`
`,(0,n.jsx)(t.p,{children:`Возвращает минимальное и максимальное значение колонки для диапазонных фильтров.`}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 200.4.0`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$column`}),` — Имя колонки в таблице сущности.`]}),`
`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`array{min: mixed, max: mixed}`}),` — Границы диапазона или `,(0,n.jsx)(t.code,{children:`null`}),` при отсутствии данных.`]}),`
`,(0,n.jsx)(`span`,{id:`method_deleteEntity`}),`
`,(0,n.jsx)(t.h3,{id:`deleteentity`,children:`deleteEntity()`}),`
`,(0,n.jsx)(t.p,{children:`Удаляет сущность из базы данных.`}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 200.4.0`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$entity`}),` — Экземпляр сущности для удаления.`]}),`
`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`bool`}),` — Всегда `,(0,n.jsx)(t.code,{children:`true`}),` при успешном вызове менеджера ORM.`]}),`
`,(0,n.jsx)(`span`,{id:`method_deleteByColumn`}),`
`,(0,n.jsx)(t.h3,{id:`deletebycolumn`,children:`deleteByColumn()`}),`
`,(0,n.jsx)(t.p,{children:`Удаляет первую запись, соответствующую значению колонки.`}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 200.4.0`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$column`}),` — Имя колонки для поиска.`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$value`}),` — Значение для сравнения.`]}),`
`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`bool`}),` — `,(0,n.jsx)(t.code,{children:`true`}),`, если запись найдена и удалена; иначе `,(0,n.jsx)(t.code,{children:`false`}),`.`]}),`
`,(0,n.jsx)(`span`,{id:`method_applyCriteria`}),`
`,(0,n.jsx)(t.h3,{id:`applycriteria`,children:`applyCriteria()`}),`
`,(0,n.jsx)(t.p,{children:`Применяет список критериев фильтрации к объекту выборки Cycle ORM.`}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 200.4.0`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$select`}),` — Объект выборки Cycle ORM.`]}),`
`]}),`
`,(0,n.jsx)(`span`,{id:`method_applyBetween`}),`
`,(0,n.jsx)(t.h3,{id:`applybetween`,children:`applyBetween()`}),`
`,(0,n.jsxs)(t.p,{children:[`Добавляет условие диапазона `,(0,n.jsx)(t.code,{children:`between`}),` к выборке.`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 200.4.0`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$select`}),` — Объект выборки Cycle ORM.`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$column`}),` — Имя колонки.`]}),`
`]}),`
`,(0,n.jsx)(`span`,{id:`method_extractColumnValue`}),`
`,(0,n.jsx)(t.h3,{id:`extractcolumnvalue`,children:`extractColumnValue()`}),`
`,(0,n.jsx)(t.p,{children:`Извлекает строковое значение колонки из строки результата выборки.`}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 200.4.0`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$row`}),` — Строка результата (сущность, массив или объект).`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$column`}),` — Имя колонки.`]}),`
`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`string`}),` — Строковое представление значения или пустая строка.`]}),`
`,(0,n.jsx)(`span`,{id:`method_stringifyColumnValue`}),`
`,(0,n.jsx)(t.h3,{id:`stringifycolumnvalue`,children:`stringifyColumnValue()`}),`
`,(0,n.jsx)(t.p,{children:`Преобразует значение колонки в строку для фильтров и отображения.`}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 200.4.0`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$value`}),` — Исходное значение.`]}),`
`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`string`}),` — Строковое представление.`]})]})}function l(e={}){let{wrapper:t}=e.components||{};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}export{a as _markdown,l as default,r as frontmatter,i as lastModified,o as structuredData,s as toc};