import{r as e}from"./rolldown-runtime-QTnfLwEv.js";import{t}from"./jsx-runtime-By8HlURe.js";var n=e(t()),r={title:`Класс: FilterFormService`,description:`Документация по плагину класс: filterformservice для DLE.`},i=new Date(1787141927e3),a=`

## Краткое содержание: [#краткое-содержание]

Сервис фильтрации списковых страниц админки (наследник логики TwigFilter).

***

### Свойства [#свойства]

*Нет публичных свойств.*

***

### Методы [#методы]

* public [getDefaultFilters()](#method_getDefaultFilters)
* public [getSort()](#method_getSort)
* public [resolveListCount()](#method_resolveListCount)
* public [normalizeOrder()](#method_normalizeOrder)
* public [buildLogsTableAjaxUrl()](#method_buildLogsTableAjaxUrl)
* public [parseRequestQuery()](#method_parseRequestQuery)
* public [parseRules()](#method_parseRules)
* public [buildCatalogViewModel()](#method_buildCatalogViewModel)
* public [buildChipViewModel()](#method_buildChipViewModel)
* public [createFilterChoices()](#method_createFilterChoices)
* public [createRangeFilter()](#method_createRangeFilter)
* public [createDateRangeFilter()](#method_createDateRangeFilter)
* public [rulesToCriteria()](#method_rulesToCriteria)
* private [isRuleComplete()](#method_isRuleComplete)
* private [enrichCatalogField()](#method_enrichCatalogField)
* private [findField()](#method_findField)
* private [formatRuleSummary()](#method_formatRuleSummary)
* private [appendMultiCriterion()](#method_appendMultiCriterion)
* private [appendTextCriterion()](#method_appendTextCriterion)
* private [appendBetweenCriterion()](#method_appendBetweenCriterion)

***

### Подробности [#подробности]

* Путь: \`devcraft/src/classes/Admin/FilterFormService.php\`

***

## Детали [#детали]

### Методы [#методы-1]

<span id="method_getDefaultFilters" />

### getDefaultFilters() [#getdefaultfilters]

Возвращает карту стандартных PHP-фильтров для query-параметров админки.

**С версии:** 173.3.0

**Возвращает:** \`array<string,\` — int> Объединённые фильтры без null-значений.

<span id="method_getSort" />

### getSort() [#getsort]

Преобразует строку направления сортировки в константу SelectQuery.

**С версии:** 173.3.0

**Параметры:**

* \`$sort\` — Строка asc/desc.

**Возвращает:** \`string\` — SelectQuery::SORT\\_ASC или SelectQuery::SORT\\_DESC.

<span id="method_resolveListCount" />

### resolveListCount() [#resolvelistcount]

Определяет размер страницы списка из настроек DevCraft или DLE.

**С версии:** 200.4.0

**Возвращает:** \`int\` — Число записей на странице.

<span id="method_normalizeOrder" />

### normalizeOrder() [#normalizeorder]

Нормализует имя колонки сортировки по допустимым ключам схемы.

**С версии:** 200.4.0

**Параметры:**

* \`$order\` — Запрошенная колонка.
* \`$schema\` — Схема фильтра.

**Возвращает:** \`string\` — Валидная колонка или исходное значение.

<span id="method_buildLogsTableAjaxUrl" />

### buildLogsTableAjaxUrl() [#buildlogstableajaxurl]

Формирует URL Ajax-запроса таблицы журнала с параметрами фильтра.

**С версии:** 200.4.0

**Параметры:**

* \`$userHash\` — CSRF-хеш пользователя DLE.
* \`$order\` — Колонка сортировки.
* \`$sort\` — Направление сортировки.

**Возвращает:** \`string\` — Полный URL ajax-контроллера.

<span id="method_parseRequestQuery" />

### parseRequestQuery() [#parserequestquery]

Читает и санитизирует query-параметры текущего GET-запроса.

**С версии:** 173.3.4

**Возвращает:** \`array<string,\` — mixed> Нормализованные параметры запроса.

<span id="method_parseRules" />

### parseRules() [#parserules]

Разбирает массив filter\\_rules в список нормализованных правил.

**С версии:** 200.4.0

**Возвращает:** \`list<array<string, mixed>>\` — Завершённые правила фильтрации.

<span id="method_buildCatalogViewModel" />

### buildCatalogViewModel() [#buildcatalogviewmodel]

Строит view-model каталога полей фильтра с опциями из репозитория.

**С версии:** 200.4.0

**Параметры:**

* \`$schema\` — Схема фильтра.
* \`$repo\` — Репозиторий для динамических choices.

**Возвращает:** \`array{sections: list<array{title: string, fields: list<array<string, mixed>>\` — }>} Каталог секций.

<span id="method_buildChipViewModel" />

### buildChipViewModel() [#buildchipviewmodel]

Формирует view-model чипов активных правил фильтра.

**С версии:** 200.4.0

**Параметры:**

* \`$schema\` — Схема фильтра.

**Возвращает:** \`list<array{index: int, field: string, label: string, summary: string}\` — > Чипы для UI.

<span id="method_createFilterChoices" />

### createFilterChoices() [#createfilterchoices]

Создаёт список значений для multi-фильтра по distinct-колонке репозитория.

**С версии:** 200.4.0

**Параметры:**

* \`$repo\` — Репозиторий с FilterableRepositoryInterface.
* \`$name\` — Id поля (legacy-параметр).
* \`$column\` — Имя SQL-колонки.
* \`$schema\` — Схема фильтра.

**Возвращает:** \`array<string,\` — string> Карта value => label.

<span id="method_createRangeFilter" />

### createRangeFilter() [#createrangefilter]

Создаёт конфигурацию range-фильтра по границам колонки.

**С версии:** 200.4.0

**Параметры:**

* \`$repo\` — Репозиторий данных.
* \`$column\` — Имя SQL-колонки.
* \`$label\` — Подпись фильтра.
* \`$schema\` — Схема фильтра.

**Возвращает:** \`array<string, array<string, mixed>>\` — Конфигурация по ключу колонки.

<span id="method_createDateRangeFilter" />

### createDateRangeFilter() [#createdaterangefilter]

Создаёт конфигурацию daterange-фильтра по границам дат колонки.

**С версии:** 200.4.0

**Параметры:**

* \`$repo\` — Репозиторий данных.
* \`$column\` — Имя SQL-колонки.
* \`$label\` — Подпись фильтра.
* \`$schema\` — Схема фильтра.

**Возвращает:** \`array<string, array<string, mixed>>\` — Конфигурация по ключу колонки.

<span id="method_rulesToCriteria" />

### rulesToCriteria() [#rulestocriteria]

Преобразует UI-правила в критерии запроса репозитория.

**С версии:** 200.4.0

**Параметры:**

* \`$schema\` — Схема фильтра.

**Возвращает:** \`list<array{column: string, op: string, value: mixed}\` — > Критерии where.

<span id="method_isRuleComplete" />

### isRuleComplete() [#isrulecomplete]

Проверяет, содержит ли черновик правила все обязательные значения.

**С версии:** 200.4.0

**Возвращает:** \`bool\` — true, если правило можно применить.

<span id="method_enrichCatalogField" />

### enrichCatalogField() [#enrichcatalogfield]

Обогащает поле каталога данными choices или границ диапазона.

**С версии:** 200.4.0

**Параметры:**

* \`$field\` — Поле схемы.
* \`$repo\` — Репозиторий или null.
* \`$schema\` — Схема фильтра.

**Возвращает:** \`array<string,\` — mixed> Данные поля для Twig.

<span id="method_findField" />

### findField() [#findfield]

Находит поле схемы по id.

**С версии:** 200.4.0

**Параметры:**

* \`$schema\` — Схема фильтра.
* \`$fieldId\` — Id поля.

**Возвращает:** \`FormField|null\` — Поле или null.

<span id="method_formatRuleSummary" />

### formatRuleSummary() [#formatrulesummary]

Формирует краткую текстовую сводку правила для чипа.

**С версии:** 200.4.0

**Параметры:**

* \`$label\` — Подпись поля.

**Возвращает:** \`string\` — Текстовая сводка.

<span id="method_appendMultiCriterion" />

### appendMultiCriterion() [#appendmulticriterion]

Добавляет критерий IN для multi-правила.

**С версии:** 200.4.0

**Параметры:**

* \`$column\` — SQL-колонка.

<span id="method_appendTextCriterion" />

### appendTextCriterion() [#appendtextcriterion]

Добавляет критерий LIKE для text-правила.

**С версии:** 200.4.0

**Параметры:**

* \`$column\` — SQL-колонка.

<span id="method_appendBetweenCriterion" />

### appendBetweenCriterion() [#appendbetweencriterion]

Добавляет критерий BETWEEN для range/daterange-правила.

**С версии:** 200.4.0

**Параметры:**

* \`$column\` — SQL-колонка.
* \`$type\` — Тип диапазона (range|daterange).
`,o={contents:[{heading:`краткое-содержание`,content:`Сервис фильтрации списковых страниц админки (наследник логики TwigFilter).`},{heading:`свойства`,content:`*Нет публичных свойств.*`},{heading:`методы`,content:`public getDefaultFilters()`},{heading:`методы`,content:`public getSort()`},{heading:`методы`,content:`public resolveListCount()`},{heading:`методы`,content:`public normalizeOrder()`},{heading:`методы`,content:`public buildLogsTableAjaxUrl()`},{heading:`методы`,content:`public parseRequestQuery()`},{heading:`методы`,content:`public parseRules()`},{heading:`методы`,content:`public buildCatalogViewModel()`},{heading:`методы`,content:`public buildChipViewModel()`},{heading:`методы`,content:`public createFilterChoices()`},{heading:`методы`,content:`public createRangeFilter()`},{heading:`методы`,content:`public createDateRangeFilter()`},{heading:`методы`,content:`public rulesToCriteria()`},{heading:`методы`,content:`private isRuleComplete()`},{heading:`методы`,content:`private enrichCatalogField()`},{heading:`методы`,content:`private findField()`},{heading:`методы`,content:`private formatRuleSummary()`},{heading:`методы`,content:`private appendMultiCriterion()`},{heading:`методы`,content:`private appendTextCriterion()`},{heading:`методы`,content:`private appendBetweenCriterion()`},{heading:`подробности`,content:"Путь: `devcraft/src/classes/Admin/FilterFormService.php`"},{heading:`getdefaultfilters`,content:`Возвращает карту стандартных PHP-фильтров для query-параметров админки.`},{heading:`getdefaultfilters`,content:`**С версии:** 173.3.0`},{heading:`getdefaultfilters`,content:"**Возвращает:** `array<string,` — int> Объединённые фильтры без null-значений."},{heading:`getsort`,content:`Преобразует строку направления сортировки в константу SelectQuery.`},{heading:`getsort`,content:`**С версии:** 173.3.0`},{heading:`getsort`,content:`**Параметры:**`},{heading:`getsort`,content:"`$sort` — Строка asc/desc."},{heading:`getsort`,content:"**Возвращает:** `string` — SelectQuery::SORT\\_ASC или SelectQuery::SORT\\_DESC."},{heading:`resolvelistcount`,content:`Определяет размер страницы списка из настроек DevCraft или DLE.`},{heading:`resolvelistcount`,content:`**С версии:** 200.4.0`},{heading:`resolvelistcount`,content:"**Возвращает:** `int` — Число записей на странице."},{heading:`normalizeorder`,content:`Нормализует имя колонки сортировки по допустимым ключам схемы.`},{heading:`normalizeorder`,content:`**С версии:** 200.4.0`},{heading:`normalizeorder`,content:`**Параметры:**`},{heading:`normalizeorder`,content:"`$order` — Запрошенная колонка."},{heading:`normalizeorder`,content:"`$schema` — Схема фильтра."},{heading:`normalizeorder`,content:"**Возвращает:** `string` — Валидная колонка или исходное значение."},{heading:`buildlogstableajaxurl`,content:`Формирует URL Ajax-запроса таблицы журнала с параметрами фильтра.`},{heading:`buildlogstableajaxurl`,content:`**С версии:** 200.4.0`},{heading:`buildlogstableajaxurl`,content:`**Параметры:**`},{heading:`buildlogstableajaxurl`,content:"`$userHash` — CSRF-хеш пользователя DLE."},{heading:`buildlogstableajaxurl`,content:"`$order` — Колонка сортировки."},{heading:`buildlogstableajaxurl`,content:"`$sort` — Направление сортировки."},{heading:`buildlogstableajaxurl`,content:"**Возвращает:** `string` — Полный URL ajax-контроллера."},{heading:`parserequestquery`,content:`Читает и санитизирует query-параметры текущего GET-запроса.`},{heading:`parserequestquery`,content:`**С версии:** 173.3.4`},{heading:`parserequestquery`,content:"**Возвращает:** `array<string,` — mixed> Нормализованные параметры запроса."},{heading:`parserules`,content:`Разбирает массив filter\\_rules в список нормализованных правил.`},{heading:`parserules`,content:`**С версии:** 200.4.0`},{heading:`parserules`,content:"**Возвращает:** `list<array<string, mixed>>` — Завершённые правила фильтрации."},{heading:`buildcatalogviewmodel`,content:`Строит view-model каталога полей фильтра с опциями из репозитория.`},{heading:`buildcatalogviewmodel`,content:`**С версии:** 200.4.0`},{heading:`buildcatalogviewmodel`,content:`**Параметры:**`},{heading:`buildcatalogviewmodel`,content:"`$schema` — Схема фильтра."},{heading:`buildcatalogviewmodel`,content:"`$repo` — Репозиторий для динамических choices."},{heading:`buildcatalogviewmodel`,content:"**Возвращает:** `array{sections: list<array{title: string, fields: list<array<string, mixed>>` — }>} Каталог секций."},{heading:`buildchipviewmodel`,content:`Формирует view-model чипов активных правил фильтра.`},{heading:`buildchipviewmodel`,content:`**С версии:** 200.4.0`},{heading:`buildchipviewmodel`,content:`**Параметры:**`},{heading:`buildchipviewmodel`,content:"`$schema` — Схема фильтра."},{heading:`buildchipviewmodel`,content:"**Возвращает:** `list<array{index: int, field: string, label: string, summary: string}` — > Чипы для UI."},{heading:`createfilterchoices`,content:`Создаёт список значений для multi-фильтра по distinct-колонке репозитория.`},{heading:`createfilterchoices`,content:`**С версии:** 200.4.0`},{heading:`createfilterchoices`,content:`**Параметры:**`},{heading:`createfilterchoices`,content:"`$repo` — Репозиторий с FilterableRepositoryInterface."},{heading:`createfilterchoices`,content:"`$name` — Id поля (legacy-параметр)."},{heading:`createfilterchoices`,content:"`$column` — Имя SQL-колонки."},{heading:`createfilterchoices`,content:"`$schema` — Схема фильтра."},{heading:`createfilterchoices`,content:"**Возвращает:** `array<string,` — string> Карта value => label."},{heading:`createrangefilter`,content:`Создаёт конфигурацию range-фильтра по границам колонки.`},{heading:`createrangefilter`,content:`**С версии:** 200.4.0`},{heading:`createrangefilter`,content:`**Параметры:**`},{heading:`createrangefilter`,content:"`$repo` — Репозиторий данных."},{heading:`createrangefilter`,content:"`$column` — Имя SQL-колонки."},{heading:`createrangefilter`,content:"`$label` — Подпись фильтра."},{heading:`createrangefilter`,content:"`$schema` — Схема фильтра."},{heading:`createrangefilter`,content:"**Возвращает:** `array<string, array<string, mixed>>` — Конфигурация по ключу колонки."},{heading:`createdaterangefilter`,content:`Создаёт конфигурацию daterange-фильтра по границам дат колонки.`},{heading:`createdaterangefilter`,content:`**С версии:** 200.4.0`},{heading:`createdaterangefilter`,content:`**Параметры:**`},{heading:`createdaterangefilter`,content:"`$repo` — Репозиторий данных."},{heading:`createdaterangefilter`,content:"`$column` — Имя SQL-колонки."},{heading:`createdaterangefilter`,content:"`$label` — Подпись фильтра."},{heading:`createdaterangefilter`,content:"`$schema` — Схема фильтра."},{heading:`createdaterangefilter`,content:"**Возвращает:** `array<string, array<string, mixed>>` — Конфигурация по ключу колонки."},{heading:`rulestocriteria`,content:`Преобразует UI-правила в критерии запроса репозитория.`},{heading:`rulestocriteria`,content:`**С версии:** 200.4.0`},{heading:`rulestocriteria`,content:`**Параметры:**`},{heading:`rulestocriteria`,content:"`$schema` — Схема фильтра."},{heading:`rulestocriteria`,content:"**Возвращает:** `list<array{column: string, op: string, value: mixed}` — > Критерии where."},{heading:`isrulecomplete`,content:`Проверяет, содержит ли черновик правила все обязательные значения.`},{heading:`isrulecomplete`,content:`**С версии:** 200.4.0`},{heading:`isrulecomplete`,content:"**Возвращает:** `bool` — true, если правило можно применить."},{heading:`enrichcatalogfield`,content:`Обогащает поле каталога данными choices или границ диапазона.`},{heading:`enrichcatalogfield`,content:`**С версии:** 200.4.0`},{heading:`enrichcatalogfield`,content:`**Параметры:**`},{heading:`enrichcatalogfield`,content:"`$field` — Поле схемы."},{heading:`enrichcatalogfield`,content:"`$repo` — Репозиторий или null."},{heading:`enrichcatalogfield`,content:"`$schema` — Схема фильтра."},{heading:`enrichcatalogfield`,content:"**Возвращает:** `array<string,` — mixed> Данные поля для Twig."},{heading:`findfield`,content:`Находит поле схемы по id.`},{heading:`findfield`,content:`**С версии:** 200.4.0`},{heading:`findfield`,content:`**Параметры:**`},{heading:`findfield`,content:"`$schema` — Схема фильтра."},{heading:`findfield`,content:"`$fieldId` — Id поля."},{heading:`findfield`,content:"**Возвращает:** `FormField|null` — Поле или null."},{heading:`formatrulesummary`,content:`Формирует краткую текстовую сводку правила для чипа.`},{heading:`formatrulesummary`,content:`**С версии:** 200.4.0`},{heading:`formatrulesummary`,content:`**Параметры:**`},{heading:`formatrulesummary`,content:"`$label` — Подпись поля."},{heading:`formatrulesummary`,content:"**Возвращает:** `string` — Текстовая сводка."},{heading:`appendmulticriterion`,content:`Добавляет критерий IN для multi-правила.`},{heading:`appendmulticriterion`,content:`**С версии:** 200.4.0`},{heading:`appendmulticriterion`,content:`**Параметры:**`},{heading:`appendmulticriterion`,content:"`$column` — SQL-колонка."},{heading:`appendtextcriterion`,content:`Добавляет критерий LIKE для text-правила.`},{heading:`appendtextcriterion`,content:`**С версии:** 200.4.0`},{heading:`appendtextcriterion`,content:`**Параметры:**`},{heading:`appendtextcriterion`,content:"`$column` — SQL-колонка."},{heading:`appendbetweencriterion`,content:`Добавляет критерий BETWEEN для range/daterange-правила.`},{heading:`appendbetweencriterion`,content:`**С версии:** 200.4.0`},{heading:`appendbetweencriterion`,content:`**Параметры:**`},{heading:`appendbetweencriterion`,content:"`$column` — SQL-колонка."},{heading:`appendbetweencriterion`,content:"`$type` — Тип диапазона (range|daterange)."}],headings:[{id:`краткое-содержание`,content:`Краткое содержание:`},{id:`свойства`,content:`Свойства`},{id:`методы`,content:`Методы`},{id:`подробности`,content:`Подробности`},{id:`детали`,content:`Детали`},{id:`методы-1`,content:`Методы`},{id:`getdefaultfilters`,content:`getDefaultFilters()`},{id:`getsort`,content:`getSort()`},{id:`resolvelistcount`,content:`resolveListCount()`},{id:`normalizeorder`,content:`normalizeOrder()`},{id:`buildlogstableajaxurl`,content:`buildLogsTableAjaxUrl()`},{id:`parserequestquery`,content:`parseRequestQuery()`},{id:`parserules`,content:`parseRules()`},{id:`buildcatalogviewmodel`,content:`buildCatalogViewModel()`},{id:`buildchipviewmodel`,content:`buildChipViewModel()`},{id:`createfilterchoices`,content:`createFilterChoices()`},{id:`createrangefilter`,content:`createRangeFilter()`},{id:`createdaterangefilter`,content:`createDateRangeFilter()`},{id:`rulestocriteria`,content:`rulesToCriteria()`},{id:`isrulecomplete`,content:`isRuleComplete()`},{id:`enrichcatalogfield`,content:`enrichCatalogField()`},{id:`findfield`,content:`findField()`},{id:`formatrulesummary`,content:`formatRuleSummary()`},{id:`appendmulticriterion`,content:`appendMultiCriterion()`},{id:`appendtextcriterion`,content:`appendTextCriterion()`},{id:`appendbetweencriterion`,content:`appendBetweenCriterion()`}]},s=[{depth:2,url:`#краткое-содержание`,title:(0,n.jsx)(n.Fragment,{children:`Краткое содержание:`})},{depth:3,url:`#свойства`,title:(0,n.jsx)(n.Fragment,{children:`Свойства`})},{depth:3,url:`#методы`,title:(0,n.jsx)(n.Fragment,{children:`Методы`})},{depth:3,url:`#подробности`,title:(0,n.jsx)(n.Fragment,{children:`Подробности`})},{depth:2,url:`#детали`,title:(0,n.jsx)(n.Fragment,{children:`Детали`})},{depth:3,url:`#методы-1`,title:(0,n.jsx)(n.Fragment,{children:`Методы`})},{depth:3,url:`#getdefaultfilters`,title:(0,n.jsx)(n.Fragment,{children:`getDefaultFilters()`})},{depth:3,url:`#getsort`,title:(0,n.jsx)(n.Fragment,{children:`getSort()`})},{depth:3,url:`#resolvelistcount`,title:(0,n.jsx)(n.Fragment,{children:`resolveListCount()`})},{depth:3,url:`#normalizeorder`,title:(0,n.jsx)(n.Fragment,{children:`normalizeOrder()`})},{depth:3,url:`#buildlogstableajaxurl`,title:(0,n.jsx)(n.Fragment,{children:`buildLogsTableAjaxUrl()`})},{depth:3,url:`#parserequestquery`,title:(0,n.jsx)(n.Fragment,{children:`parseRequestQuery()`})},{depth:3,url:`#parserules`,title:(0,n.jsx)(n.Fragment,{children:`parseRules()`})},{depth:3,url:`#buildcatalogviewmodel`,title:(0,n.jsx)(n.Fragment,{children:`buildCatalogViewModel()`})},{depth:3,url:`#buildchipviewmodel`,title:(0,n.jsx)(n.Fragment,{children:`buildChipViewModel()`})},{depth:3,url:`#createfilterchoices`,title:(0,n.jsx)(n.Fragment,{children:`createFilterChoices()`})},{depth:3,url:`#createrangefilter`,title:(0,n.jsx)(n.Fragment,{children:`createRangeFilter()`})},{depth:3,url:`#createdaterangefilter`,title:(0,n.jsx)(n.Fragment,{children:`createDateRangeFilter()`})},{depth:3,url:`#rulestocriteria`,title:(0,n.jsx)(n.Fragment,{children:`rulesToCriteria()`})},{depth:3,url:`#isrulecomplete`,title:(0,n.jsx)(n.Fragment,{children:`isRuleComplete()`})},{depth:3,url:`#enrichcatalogfield`,title:(0,n.jsx)(n.Fragment,{children:`enrichCatalogField()`})},{depth:3,url:`#findfield`,title:(0,n.jsx)(n.Fragment,{children:`findField()`})},{depth:3,url:`#formatrulesummary`,title:(0,n.jsx)(n.Fragment,{children:`formatRuleSummary()`})},{depth:3,url:`#appendmulticriterion`,title:(0,n.jsx)(n.Fragment,{children:`appendMultiCriterion()`})},{depth:3,url:`#appendtextcriterion`,title:(0,n.jsx)(n.Fragment,{children:`appendTextCriterion()`})},{depth:3,url:`#appendbetweencriterion`,title:(0,n.jsx)(n.Fragment,{children:`appendBetweenCriterion()`})}];function c(e){let t={a:`a`,code:`code`,em:`em`,h2:`h2`,h3:`h3`,hr:`hr`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h2,{id:`краткое-содержание`,children:`Краткое содержание:`}),`
`,(0,n.jsx)(t.p,{children:`Сервис фильтрации списковых страниц админки (наследник логики TwigFilter).`}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsx)(t.h3,{id:`свойства`,children:`Свойства`}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.em,{children:`Нет публичных свойств.`})}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsx)(t.h3,{id:`методы`,children:`Методы`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method_getDefaultFilters`,children:`getDefaultFilters()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method_getSort`,children:`getSort()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method_resolveListCount`,children:`resolveListCount()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method_normalizeOrder`,children:`normalizeOrder()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method_buildLogsTableAjaxUrl`,children:`buildLogsTableAjaxUrl()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method_parseRequestQuery`,children:`parseRequestQuery()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method_parseRules`,children:`parseRules()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method_buildCatalogViewModel`,children:`buildCatalogViewModel()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method_buildChipViewModel`,children:`buildChipViewModel()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method_createFilterChoices`,children:`createFilterChoices()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method_createRangeFilter`,children:`createRangeFilter()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method_createDateRangeFilter`,children:`createDateRangeFilter()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method_rulesToCriteria`,children:`rulesToCriteria()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`private `,(0,n.jsx)(t.a,{href:`#method_isRuleComplete`,children:`isRuleComplete()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`private `,(0,n.jsx)(t.a,{href:`#method_enrichCatalogField`,children:`enrichCatalogField()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`private `,(0,n.jsx)(t.a,{href:`#method_findField`,children:`findField()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`private `,(0,n.jsx)(t.a,{href:`#method_formatRuleSummary`,children:`formatRuleSummary()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`private `,(0,n.jsx)(t.a,{href:`#method_appendMultiCriterion`,children:`appendMultiCriterion()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`private `,(0,n.jsx)(t.a,{href:`#method_appendTextCriterion`,children:`appendTextCriterion()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`private `,(0,n.jsx)(t.a,{href:`#method_appendBetweenCriterion`,children:`appendBetweenCriterion()`})]}),`
`]}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsx)(t.h3,{id:`подробности`,children:`Подробности`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[`Путь: `,(0,n.jsx)(t.code,{children:`devcraft/src/classes/Admin/FilterFormService.php`})]}),`
`]}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsx)(t.h2,{id:`детали`,children:`Детали`}),`
`,(0,n.jsx)(t.h3,{id:`методы-1`,children:`Методы`}),`
`,(0,n.jsx)(`span`,{id:`method_getDefaultFilters`}),`
`,(0,n.jsx)(t.h3,{id:`getdefaultfilters`,children:`getDefaultFilters()`}),`
`,(0,n.jsx)(t.p,{children:`Возвращает карту стандартных PHP-фильтров для query-параметров админки.`}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 173.3.0`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`array<string,`}),` — int> Объединённые фильтры без null-значений.`]}),`
`,(0,n.jsx)(`span`,{id:`method_getSort`}),`
`,(0,n.jsx)(t.h3,{id:`getsort`,children:`getSort()`}),`
`,(0,n.jsx)(t.p,{children:`Преобразует строку направления сортировки в константу SelectQuery.`}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 173.3.0`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$sort`}),` — Строка asc/desc.`]}),`
`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`string`}),` — SelectQuery::SORT_ASC или SelectQuery::SORT_DESC.`]}),`
`,(0,n.jsx)(`span`,{id:`method_resolveListCount`}),`
`,(0,n.jsx)(t.h3,{id:`resolvelistcount`,children:`resolveListCount()`}),`
`,(0,n.jsx)(t.p,{children:`Определяет размер страницы списка из настроек DevCraft или DLE.`}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 200.4.0`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`int`}),` — Число записей на странице.`]}),`
`,(0,n.jsx)(`span`,{id:`method_normalizeOrder`}),`
`,(0,n.jsx)(t.h3,{id:`normalizeorder`,children:`normalizeOrder()`}),`
`,(0,n.jsx)(t.p,{children:`Нормализует имя колонки сортировки по допустимым ключам схемы.`}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 200.4.0`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$order`}),` — Запрошенная колонка.`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$schema`}),` — Схема фильтра.`]}),`
`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`string`}),` — Валидная колонка или исходное значение.`]}),`
`,(0,n.jsx)(`span`,{id:`method_buildLogsTableAjaxUrl`}),`
`,(0,n.jsx)(t.h3,{id:`buildlogstableajaxurl`,children:`buildLogsTableAjaxUrl()`}),`
`,(0,n.jsx)(t.p,{children:`Формирует URL Ajax-запроса таблицы журнала с параметрами фильтра.`}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 200.4.0`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$userHash`}),` — CSRF-хеш пользователя DLE.`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$order`}),` — Колонка сортировки.`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$sort`}),` — Направление сортировки.`]}),`
`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`string`}),` — Полный URL ajax-контроллера.`]}),`
`,(0,n.jsx)(`span`,{id:`method_parseRequestQuery`}),`
`,(0,n.jsx)(t.h3,{id:`parserequestquery`,children:`parseRequestQuery()`}),`
`,(0,n.jsx)(t.p,{children:`Читает и санитизирует query-параметры текущего GET-запроса.`}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 173.3.4`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`array<string,`}),` — mixed> Нормализованные параметры запроса.`]}),`
`,(0,n.jsx)(`span`,{id:`method_parseRules`}),`
`,(0,n.jsx)(t.h3,{id:`parserules`,children:`parseRules()`}),`
`,(0,n.jsx)(t.p,{children:`Разбирает массив filter_rules в список нормализованных правил.`}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 200.4.0`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`list<array<string, mixed>>`}),` — Завершённые правила фильтрации.`]}),`
`,(0,n.jsx)(`span`,{id:`method_buildCatalogViewModel`}),`
`,(0,n.jsx)(t.h3,{id:`buildcatalogviewmodel`,children:`buildCatalogViewModel()`}),`
`,(0,n.jsx)(t.p,{children:`Строит view-model каталога полей фильтра с опциями из репозитория.`}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 200.4.0`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$schema`}),` — Схема фильтра.`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$repo`}),` — Репозиторий для динамических choices.`]}),`
`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`array{sections: list<array{title: string, fields: list<array<string, mixed>>`}),` — }>} Каталог секций.`]}),`
`,(0,n.jsx)(`span`,{id:`method_buildChipViewModel`}),`
`,(0,n.jsx)(t.h3,{id:`buildchipviewmodel`,children:`buildChipViewModel()`}),`
`,(0,n.jsx)(t.p,{children:`Формирует view-model чипов активных правил фильтра.`}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 200.4.0`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$schema`}),` — Схема фильтра.`]}),`
`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`list<array{index: int, field: string, label: string, summary: string}`}),` — > Чипы для UI.`]}),`
`,(0,n.jsx)(`span`,{id:`method_createFilterChoices`}),`
`,(0,n.jsx)(t.h3,{id:`createfilterchoices`,children:`createFilterChoices()`}),`
`,(0,n.jsx)(t.p,{children:`Создаёт список значений для multi-фильтра по distinct-колонке репозитория.`}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 200.4.0`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$repo`}),` — Репозиторий с FilterableRepositoryInterface.`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$name`}),` — Id поля (legacy-параметр).`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$column`}),` — Имя SQL-колонки.`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$schema`}),` — Схема фильтра.`]}),`
`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`array<string,`}),` — string> Карта value => label.`]}),`
`,(0,n.jsx)(`span`,{id:`method_createRangeFilter`}),`
`,(0,n.jsx)(t.h3,{id:`createrangefilter`,children:`createRangeFilter()`}),`
`,(0,n.jsx)(t.p,{children:`Создаёт конфигурацию range-фильтра по границам колонки.`}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 200.4.0`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$repo`}),` — Репозиторий данных.`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$column`}),` — Имя SQL-колонки.`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$label`}),` — Подпись фильтра.`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$schema`}),` — Схема фильтра.`]}),`
`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`array<string, array<string, mixed>>`}),` — Конфигурация по ключу колонки.`]}),`
`,(0,n.jsx)(`span`,{id:`method_createDateRangeFilter`}),`
`,(0,n.jsx)(t.h3,{id:`createdaterangefilter`,children:`createDateRangeFilter()`}),`
`,(0,n.jsx)(t.p,{children:`Создаёт конфигурацию daterange-фильтра по границам дат колонки.`}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 200.4.0`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$repo`}),` — Репозиторий данных.`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$column`}),` — Имя SQL-колонки.`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$label`}),` — Подпись фильтра.`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$schema`}),` — Схема фильтра.`]}),`
`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`array<string, array<string, mixed>>`}),` — Конфигурация по ключу колонки.`]}),`
`,(0,n.jsx)(`span`,{id:`method_rulesToCriteria`}),`
`,(0,n.jsx)(t.h3,{id:`rulestocriteria`,children:`rulesToCriteria()`}),`
`,(0,n.jsx)(t.p,{children:`Преобразует UI-правила в критерии запроса репозитория.`}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 200.4.0`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$schema`}),` — Схема фильтра.`]}),`
`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`list<array{column: string, op: string, value: mixed}`}),` — > Критерии where.`]}),`
`,(0,n.jsx)(`span`,{id:`method_isRuleComplete`}),`
`,(0,n.jsx)(t.h3,{id:`isrulecomplete`,children:`isRuleComplete()`}),`
`,(0,n.jsx)(t.p,{children:`Проверяет, содержит ли черновик правила все обязательные значения.`}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 200.4.0`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`bool`}),` — true, если правило можно применить.`]}),`
`,(0,n.jsx)(`span`,{id:`method_enrichCatalogField`}),`
`,(0,n.jsx)(t.h3,{id:`enrichcatalogfield`,children:`enrichCatalogField()`}),`
`,(0,n.jsx)(t.p,{children:`Обогащает поле каталога данными choices или границ диапазона.`}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 200.4.0`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$field`}),` — Поле схемы.`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$repo`}),` — Репозиторий или null.`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$schema`}),` — Схема фильтра.`]}),`
`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`array<string,`}),` — mixed> Данные поля для Twig.`]}),`
`,(0,n.jsx)(`span`,{id:`method_findField`}),`
`,(0,n.jsx)(t.h3,{id:`findfield`,children:`findField()`}),`
`,(0,n.jsx)(t.p,{children:`Находит поле схемы по id.`}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 200.4.0`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$schema`}),` — Схема фильтра.`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$fieldId`}),` — Id поля.`]}),`
`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`FormField|null`}),` — Поле или null.`]}),`
`,(0,n.jsx)(`span`,{id:`method_formatRuleSummary`}),`
`,(0,n.jsx)(t.h3,{id:`formatrulesummary`,children:`formatRuleSummary()`}),`
`,(0,n.jsx)(t.p,{children:`Формирует краткую текстовую сводку правила для чипа.`}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 200.4.0`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$label`}),` — Подпись поля.`]}),`
`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`string`}),` — Текстовая сводка.`]}),`
`,(0,n.jsx)(`span`,{id:`method_appendMultiCriterion`}),`
`,(0,n.jsx)(t.h3,{id:`appendmulticriterion`,children:`appendMultiCriterion()`}),`
`,(0,n.jsx)(t.p,{children:`Добавляет критерий IN для multi-правила.`}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 200.4.0`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$column`}),` — SQL-колонка.`]}),`
`]}),`
`,(0,n.jsx)(`span`,{id:`method_appendTextCriterion`}),`
`,(0,n.jsx)(t.h3,{id:`appendtextcriterion`,children:`appendTextCriterion()`}),`
`,(0,n.jsx)(t.p,{children:`Добавляет критерий LIKE для text-правила.`}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 200.4.0`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$column`}),` — SQL-колонка.`]}),`
`]}),`
`,(0,n.jsx)(`span`,{id:`method_appendBetweenCriterion`}),`
`,(0,n.jsx)(t.h3,{id:`appendbetweencriterion`,children:`appendBetweenCriterion()`}),`
`,(0,n.jsx)(t.p,{children:`Добавляет критерий BETWEEN для range/daterange-правила.`}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 200.4.0`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$column`}),` — SQL-колонка.`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$type`}),` — Тип диапазона (range|daterange).`]}),`
`]})]})}function l(e={}){let{wrapper:t}=e.components||{};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}export{a as _markdown,l as default,r as frontmatter,i as lastModified,o as structuredData,s as toc};