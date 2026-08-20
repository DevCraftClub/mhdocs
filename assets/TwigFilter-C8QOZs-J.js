import{r as e}from"./rolldown-runtime-QTnfLwEv.js";import{t}from"./jsx-runtime-By8HlURe.js";var n=e(t()),r={title:`Класс: TwigFilter`,description:`Документация по плагину класс: twigfilter для DLE.`},i=new Date(1787213191e3),a=`

## Краткое содержание: [#краткое-содержание]

Класс для создания и обработки фильтров данных, а также для работы с сортировкой и стандартными фильтрами для шаблонов.

***

### Свойства [#свойства]

* private $[repository](#property_repository)

***

### Методы [#методы]

* public [\\_\\_construct()](#method___construct)
* public [createFilter()](#method_createFilter)
* public [createFilterChoices()](#method_createFilterChoices)
* public [getDefaultFilters()](#method_getDefaultFilters)
* public [getRepository()](#method_getRepository)
* public [getSort()](#method_getSort)
* public [setRepository()](#method_setRepository)

***

### Подробности [#подробности]

* Путь: engine/inc/maharder/\\_includes/classes/TwigFilter.php

***

## Свойства [#свойства-1]

<span id="property_repository" />

#### private $repository : \\Cycle\\ORM\\RepositoryInterface [#private-repository--cycleormrepositoryinterface]

***

**Тип:** \\Cycle\\ORM\\RepositoryInterface

***

## Методы [#методы-1]

<span id="method___construct" />

### \\_\\_construct [#__construct]

\`\`\`
public __construct(\\RepositoryInterface  repository) : mixed
\`\`\`

##### Краткое содержание [#краткое-содержание-1]

Конструктор класса.

##### Свойства: [#свойства-2]

| Название        | Тип                  | По умолчанию |
| --------------- | -------------------- | ------------ |
| **$repository** | \\RepositoryInterface |              |

##### Возвращает: [#возвращает]

\`\`\`
mixed
\`\`\`

***

<span id="method_createFilter" />

### createFilter [#createfilter]

\`\`\`
public createFilter(string  column_name, string  type, string  label, string|null  select_value = null, array|null  choices = null) : array
\`\`\`

##### Краткое содержание [#краткое-содержание-2]

Создает фильтр для указанного столбца с заданным типом и ярлыком.

##### Смотри так-же: [#смотри-так-же]

* [\\createFilterChoices()](#method_createFilterChoices)
* [\\getRepository()](#method_getRepository)

##### Свойства: [#свойства-3]

| Название           | Тип          | По умолчанию |
| ------------------ | ------------ | ------------ |
| **$column\\_name**  | string       |              |
| **$type**          | string       |              |
| **$label**         | string       |              |
| **$select\\_value** | string\\|null | null         |
| **$choices**       | array\\|null  | null         |

##### Ошибки: [#ошибки]

| Тип                       | Описание                                          |
| ------------------------- | ------------------------------------------------- |
| \\InvalidArgumentException | Если значение \`$type\` не соответствует ожидаемым. |

##### Возвращает: [#возвращает-1]

\`\`\`
array
\`\`\`

Возвращает массив конфигурации фильтра.

***

<span id="method_createFilterChoices" />

### createFilterChoices [#createfilterchoices]

\`\`\`
public createFilterChoices(string  name, string  select) : array
\`\`\`

##### Краткое содержание [#краткое-содержание-3]

Создает массив вариантов для фильтра на основе переданных данных.

##### Смотри так-же: [#смотри-так-же-1]

* [\\translate](../index#function_translate)
* [\\getRepository](#method_getRepository)

##### Свойства: [#свойства-4]

| Название    | Тип    | По умолчанию |
| ----------- | ------ | ------------ |
| **$name**   | string |              |
| **$select** | string |              |

##### Ошибки: [#ошибки-1]

| Тип        | Описание |
| ---------- | -------- |
| \\Throwable |          |

##### Возвращает: [#возвращает-2]

\`\`\`
array
\`\`\`

Ассоциативный массив, где ключи — значения фильтров, а значения — отображаемые имена фильтров.

***

<span id="method_getDefaultFilters" />

### getDefaultFilters [#getdefaultfilters]

\`\`\`
static public getDefaultFilters(array  additionalFilters = []) : array
\`\`\`

##### Краткое содержание [#краткое-содержание-4]

Создает и возвращает массив стандартных фильтров для входящих данных.

##### Описание [#описание]

Стандартные фильтры включают:

* 'page' — валидация целого числа.
* 'mod', 'action', 'sites', 'order' — очистка данных с помощью
  \`FILTER_SANITIZE_FULL_SPECIAL_CHARS\`
  и возврат \`null\`, если фильтрация не удалась.
* 'sort' — очистка данных аналогично предыдущим, но с приведением к верхнему регистру.

Метод предоставляет возможность добавлять пользовательские фильтры с помощью аргумента \`$additionalFilters\`.
Если значение пользовательского фильтра равно \`null\`, используется стандартный фильтр
\`FILTER_SANITIZE_FULL_SPECIAL_CHARS\`.

##### Свойства: [#свойства-5]

| Название               | Тип   | По умолчанию |
| ---------------------- | ----- | ------------ |
| **$additionalFilters** | array | \\[]          |

##### Возвращает: [#возвращает-3]

\`\`\`
array
\`\`\`

Ассоциативный массив, содержащий объединенные стандартные и дополнительные фильтры.

***

<span id="method_getRepository" />

### getRepository [#getrepository]

\`\`\`
public getRepository() : \\RepositoryInterface
\`\`\`

##### Краткое содержание [#краткое-содержание-5]

Возвращает используемый репозиторий.

##### Смотри так-же: [#смотри-так-же-2]

* [\\TwigFilter::$repository](#property_repository)
* [\\TwigFilter::setRepository()](#method_setRepository)

##### Возвращает: [#возвращает-4]

\`\`\`
\\RepositoryInterface
\`\`\`

Текущий экземпляр репозитория, связанный с данным объектом.

***

<span id="method_getSort" />

### getSort [#getsort]

\`\`\`
static public getSort(string  sort) : string
\`\`\`

##### Краткое содержание [#краткое-содержание-6]

Определяет направление сортировки на основе переданной строки.

##### Описание [#описание-1]

Возвращает значение константы, соответствующее направлению сортировки:

* Если передана строка 'asc' или 'ASC', возвращается SelectQuery::SORT\\_ASC.
* В остальных случаях возвращается SelectQuery::SORT\\_DESC.

##### Свойства: [#свойства-6]

| Название  | Тип    | По умолчанию |
| --------- | ------ | ------------ |
| **$sort** | string |              |

##### Возвращает: [#возвращает-5]

\`\`\`
string
\`\`\`

Возвращаемое значение сортировки: SelectQuery::SORT\\_ASC или SelectQuery::SORT\\_DESC.

***

<span id="method_setRepository" />

### setRepository [#setrepository]

\`\`\`
public setRepository(\\RepositoryInterface  repository) : void
\`\`\`

##### Краткое содержание [#краткое-содержание-7]

Устанавливает репозиторий для использования в текущем экземпляре класса.

##### Смотри так-же: [#смотри-так-же-3]

* [\\TwigFilter::$repository](#property_repository)

##### Свойства: [#свойства-7]

| Название        | Тип                  | По умолчанию |
| --------------- | -------------------- | ------------ |
| **$repository** | \\RepositoryInterface |              |

##### Возвращает: [#возвращает-6]

\`\`\`
void
\`\`\`
`,o={contents:[{heading:`краткое-содержание`,content:`Класс для создания и обработки фильтров данных, а также для работы с сортировкой и стандартными фильтрами для шаблонов.`},{heading:`свойства`,content:`private $repository`},{heading:`методы`,content:`public \\_\\_construct()`},{heading:`методы`,content:`public createFilter()`},{heading:`методы`,content:`public createFilterChoices()`},{heading:`методы`,content:`public getDefaultFilters()`},{heading:`методы`,content:`public getRepository()`},{heading:`методы`,content:`public getSort()`},{heading:`методы`,content:`public setRepository()`},{heading:`подробности`,content:`Путь: engine/inc/maharder/\\_includes/classes/TwigFilter.php`},{heading:`private-repository--cycleormrepositoryinterface`,content:`**Тип:** \\Cycle\\ORM\\RepositoryInterface`},{heading:`краткое-содержание-1`,content:`Конструктор класса.`},{heading:`свойства-2`,content:`Название`},{heading:`свойства-2`,content:`Тип`},{heading:`свойства-2`,content:`По умолчанию`},{heading:`свойства-2`,content:`**$repository**`},{heading:`свойства-2`,content:`\\RepositoryInterface`},{heading:`краткое-содержание-2`,content:`Создает фильтр для указанного столбца с заданным типом и ярлыком.`},{heading:`смотри-так-же`,content:`\\createFilterChoices()`},{heading:`смотри-так-же`,content:`\\getRepository()`},{heading:`свойства-3`,content:`Название`},{heading:`свойства-3`,content:`Тип`},{heading:`свойства-3`,content:`По умолчанию`},{heading:`свойства-3`,content:`**$column\\_name**`},{heading:`свойства-3`,content:`string`},{heading:`свойства-3`,content:`**$type**`},{heading:`свойства-3`,content:`string`},{heading:`свойства-3`,content:`**$label**`},{heading:`свойства-3`,content:`string`},{heading:`свойства-3`,content:`**$select\\_value**`},{heading:`свойства-3`,content:`string\\|null`},{heading:`свойства-3`,content:`null`},{heading:`свойства-3`,content:`**$choices**`},{heading:`свойства-3`,content:`array\\|null`},{heading:`свойства-3`,content:`null`},{heading:`ошибки`,content:`Тип`},{heading:`ошибки`,content:`Описание`},{heading:`ошибки`,content:`\\InvalidArgumentException`},{heading:`ошибки`,content:"Если значение `$type` не соответствует ожидаемым."},{heading:`возвращает-1`,content:`Возвращает массив конфигурации фильтра.`},{heading:`краткое-содержание-3`,content:`Создает массив вариантов для фильтра на основе переданных данных.`},{heading:`смотри-так-же-1`,content:`\\translate`},{heading:`смотри-так-же-1`,content:`\\getRepository`},{heading:`свойства-4`,content:`Название`},{heading:`свойства-4`,content:`Тип`},{heading:`свойства-4`,content:`По умолчанию`},{heading:`свойства-4`,content:`**$name**`},{heading:`свойства-4`,content:`string`},{heading:`свойства-4`,content:`**$select**`},{heading:`свойства-4`,content:`string`},{heading:`ошибки-1`,content:`Тип`},{heading:`ошибки-1`,content:`Описание`},{heading:`ошибки-1`,content:`\\Throwable`},{heading:`возвращает-2`,content:`Ассоциативный массив, где ключи — значения фильтров, а значения — отображаемые имена фильтров.`},{heading:`краткое-содержание-4`,content:`Создает и возвращает массив стандартных фильтров для входящих данных.`},{heading:`описание`,content:`Стандартные фильтры включают:`},{heading:`описание`,content:`'page' — валидация целого числа.`},{heading:`описание`,content:"'mod', 'action', 'sites', 'order' — очистка данных с помощью\n`FILTER_SANITIZE_FULL_SPECIAL_CHARS`\nи возврат `null`, если фильтрация не удалась."},{heading:`описание`,content:`'sort' — очистка данных аналогично предыдущим, но с приведением к верхнему регистру.`},{heading:`описание`,content:"Метод предоставляет возможность добавлять пользовательские фильтры с помощью аргумента `$additionalFilters`.\nЕсли значение пользовательского фильтра равно `null`, используется стандартный фильтр\n`FILTER_SANITIZE_FULL_SPECIAL_CHARS`."},{heading:`свойства-5`,content:`Название`},{heading:`свойства-5`,content:`Тип`},{heading:`свойства-5`,content:`По умолчанию`},{heading:`свойства-5`,content:`**$additionalFilters**`},{heading:`свойства-5`,content:`array`},{heading:`свойства-5`,content:`\\[]`},{heading:`возвращает-3`,content:`Ассоциативный массив, содержащий объединенные стандартные и дополнительные фильтры.`},{heading:`краткое-содержание-5`,content:`Возвращает используемый репозиторий.`},{heading:`смотри-так-же-2`,content:`\\TwigFilter::$repository`},{heading:`смотри-так-же-2`,content:`\\TwigFilter::setRepository()`},{heading:`возвращает-4`,content:`Текущий экземпляр репозитория, связанный с данным объектом.`},{heading:`краткое-содержание-6`,content:`Определяет направление сортировки на основе переданной строки.`},{heading:`описание-1`,content:`Возвращает значение константы, соответствующее направлению сортировки:`},{heading:`описание-1`,content:`Если передана строка 'asc' или 'ASC', возвращается SelectQuery::SORT\\_ASC.`},{heading:`описание-1`,content:`В остальных случаях возвращается SelectQuery::SORT\\_DESC.`},{heading:`свойства-6`,content:`Название`},{heading:`свойства-6`,content:`Тип`},{heading:`свойства-6`,content:`По умолчанию`},{heading:`свойства-6`,content:`**$sort**`},{heading:`свойства-6`,content:`string`},{heading:`возвращает-5`,content:`Возвращаемое значение сортировки: SelectQuery::SORT\\_ASC или SelectQuery::SORT\\_DESC.`},{heading:`краткое-содержание-7`,content:`Устанавливает репозиторий для использования в текущем экземпляре класса.`},{heading:`смотри-так-же-3`,content:`\\TwigFilter::$repository`},{heading:`свойства-7`,content:`Название`},{heading:`свойства-7`,content:`Тип`},{heading:`свойства-7`,content:`По умолчанию`},{heading:`свойства-7`,content:`**$repository**`},{heading:`свойства-7`,content:`\\RepositoryInterface`}],headings:[{id:`краткое-содержание`,content:`Краткое содержание:`},{id:`свойства`,content:`Свойства`},{id:`методы`,content:`Методы`},{id:`подробности`,content:`Подробности`},{id:`свойства-1`,content:`Свойства`},{id:`private-repository--cycleormrepositoryinterface`,content:`private $repository : \\Cycle\\ORM\\RepositoryInterface`},{id:`методы-1`,content:`Методы`},{id:`__construct`,content:`\\__construct`},{id:`краткое-содержание-1`,content:`Краткое содержание`},{id:`свойства-2`,content:`Свойства:`},{id:`возвращает`,content:`Возвращает:`},{id:`createfilter`,content:`createFilter`},{id:`краткое-содержание-2`,content:`Краткое содержание`},{id:`смотри-так-же`,content:`Смотри так-же:`},{id:`свойства-3`,content:`Свойства:`},{id:`ошибки`,content:`Ошибки:`},{id:`возвращает-1`,content:`Возвращает:`},{id:`createfilterchoices`,content:`createFilterChoices`},{id:`краткое-содержание-3`,content:`Краткое содержание`},{id:`смотри-так-же-1`,content:`Смотри так-же:`},{id:`свойства-4`,content:`Свойства:`},{id:`ошибки-1`,content:`Ошибки:`},{id:`возвращает-2`,content:`Возвращает:`},{id:`getdefaultfilters`,content:`getDefaultFilters`},{id:`краткое-содержание-4`,content:`Краткое содержание`},{id:`описание`,content:`Описание`},{id:`свойства-5`,content:`Свойства:`},{id:`возвращает-3`,content:`Возвращает:`},{id:`getrepository`,content:`getRepository`},{id:`краткое-содержание-5`,content:`Краткое содержание`},{id:`смотри-так-же-2`,content:`Смотри так-же:`},{id:`возвращает-4`,content:`Возвращает:`},{id:`getsort`,content:`getSort`},{id:`краткое-содержание-6`,content:`Краткое содержание`},{id:`описание-1`,content:`Описание`},{id:`свойства-6`,content:`Свойства:`},{id:`возвращает-5`,content:`Возвращает:`},{id:`setrepository`,content:`setRepository`},{id:`краткое-содержание-7`,content:`Краткое содержание`},{id:`смотри-так-же-3`,content:`Смотри так-же:`},{id:`свойства-7`,content:`Свойства:`},{id:`возвращает-6`,content:`Возвращает:`}]},s=[{depth:2,url:`#краткое-содержание`,title:(0,n.jsx)(n.Fragment,{children:`Краткое содержание:`})},{depth:3,url:`#свойства`,title:(0,n.jsx)(n.Fragment,{children:`Свойства`})},{depth:3,url:`#методы`,title:(0,n.jsx)(n.Fragment,{children:`Методы`})},{depth:3,url:`#подробности`,title:(0,n.jsx)(n.Fragment,{children:`Подробности`})},{depth:2,url:`#свойства-1`,title:(0,n.jsx)(n.Fragment,{children:`Свойства`})},{depth:4,url:`#private-repository--cycleormrepositoryinterface`,title:(0,n.jsx)(n.Fragment,{children:`private $repository : \\Cycle\\ORM\\RepositoryInterface`})},{depth:2,url:`#методы-1`,title:(0,n.jsx)(n.Fragment,{children:`Методы`})},{depth:3,url:`#__construct`,title:(0,n.jsx)(n.Fragment,{children:`__construct`})},{depth:5,url:`#краткое-содержание-1`,title:(0,n.jsx)(n.Fragment,{children:`Краткое содержание`})},{depth:5,url:`#свойства-2`,title:(0,n.jsx)(n.Fragment,{children:`Свойства:`})},{depth:5,url:`#возвращает`,title:(0,n.jsx)(n.Fragment,{children:`Возвращает:`})},{depth:3,url:`#createfilter`,title:(0,n.jsx)(n.Fragment,{children:`createFilter`})},{depth:5,url:`#краткое-содержание-2`,title:(0,n.jsx)(n.Fragment,{children:`Краткое содержание`})},{depth:5,url:`#смотри-так-же`,title:(0,n.jsx)(n.Fragment,{children:`Смотри так-же:`})},{depth:5,url:`#свойства-3`,title:(0,n.jsx)(n.Fragment,{children:`Свойства:`})},{depth:5,url:`#ошибки`,title:(0,n.jsx)(n.Fragment,{children:`Ошибки:`})},{depth:5,url:`#возвращает-1`,title:(0,n.jsx)(n.Fragment,{children:`Возвращает:`})},{depth:3,url:`#createfilterchoices`,title:(0,n.jsx)(n.Fragment,{children:`createFilterChoices`})},{depth:5,url:`#краткое-содержание-3`,title:(0,n.jsx)(n.Fragment,{children:`Краткое содержание`})},{depth:5,url:`#смотри-так-же-1`,title:(0,n.jsx)(n.Fragment,{children:`Смотри так-же:`})},{depth:5,url:`#свойства-4`,title:(0,n.jsx)(n.Fragment,{children:`Свойства:`})},{depth:5,url:`#ошибки-1`,title:(0,n.jsx)(n.Fragment,{children:`Ошибки:`})},{depth:5,url:`#возвращает-2`,title:(0,n.jsx)(n.Fragment,{children:`Возвращает:`})},{depth:3,url:`#getdefaultfilters`,title:(0,n.jsx)(n.Fragment,{children:`getDefaultFilters`})},{depth:5,url:`#краткое-содержание-4`,title:(0,n.jsx)(n.Fragment,{children:`Краткое содержание`})},{depth:5,url:`#описание`,title:(0,n.jsx)(n.Fragment,{children:`Описание`})},{depth:5,url:`#свойства-5`,title:(0,n.jsx)(n.Fragment,{children:`Свойства:`})},{depth:5,url:`#возвращает-3`,title:(0,n.jsx)(n.Fragment,{children:`Возвращает:`})},{depth:3,url:`#getrepository`,title:(0,n.jsx)(n.Fragment,{children:`getRepository`})},{depth:5,url:`#краткое-содержание-5`,title:(0,n.jsx)(n.Fragment,{children:`Краткое содержание`})},{depth:5,url:`#смотри-так-же-2`,title:(0,n.jsx)(n.Fragment,{children:`Смотри так-же:`})},{depth:5,url:`#возвращает-4`,title:(0,n.jsx)(n.Fragment,{children:`Возвращает:`})},{depth:3,url:`#getsort`,title:(0,n.jsx)(n.Fragment,{children:`getSort`})},{depth:5,url:`#краткое-содержание-6`,title:(0,n.jsx)(n.Fragment,{children:`Краткое содержание`})},{depth:5,url:`#описание-1`,title:(0,n.jsx)(n.Fragment,{children:`Описание`})},{depth:5,url:`#свойства-6`,title:(0,n.jsx)(n.Fragment,{children:`Свойства:`})},{depth:5,url:`#возвращает-5`,title:(0,n.jsx)(n.Fragment,{children:`Возвращает:`})},{depth:3,url:`#setrepository`,title:(0,n.jsx)(n.Fragment,{children:`setRepository`})},{depth:5,url:`#краткое-содержание-7`,title:(0,n.jsx)(n.Fragment,{children:`Краткое содержание`})},{depth:5,url:`#смотри-так-же-3`,title:(0,n.jsx)(n.Fragment,{children:`Смотри так-же:`})},{depth:5,url:`#свойства-7`,title:(0,n.jsx)(n.Fragment,{children:`Свойства:`})},{depth:5,url:`#возвращает-6`,title:(0,n.jsx)(n.Fragment,{children:`Возвращает:`})}];function c(e){let t={a:`a`,code:`code`,h2:`h2`,h3:`h3`,h4:`h4`,h5:`h5`,hr:`hr`,li:`li`,p:`p`,pre:`pre`,span:`span`,strong:`strong`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,ul:`ul`,...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h2,{id:`краткое-содержание`,children:`Краткое содержание:`}),`
`,(0,n.jsx)(t.p,{children:`Класс для создания и обработки фильтров данных, а также для работы с сортировкой и стандартными фильтрами для шаблонов.`}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsx)(t.h3,{id:`свойства`,children:`Свойства`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[`private $`,(0,n.jsx)(t.a,{href:`#property_repository`,children:`repository`})]}),`
`]}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsx)(t.h3,{id:`методы`,children:`Методы`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method___construct`,children:`__construct()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method_createFilter`,children:`createFilter()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method_createFilterChoices`,children:`createFilterChoices()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method_getDefaultFilters`,children:`getDefaultFilters()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method_getRepository`,children:`getRepository()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method_getSort`,children:`getSort()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method_setRepository`,children:`setRepository()`})]}),`
`]}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsx)(t.h3,{id:`подробности`,children:`Подробности`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsx)(t.li,{children:`Путь: engine/inc/maharder/_includes/classes/TwigFilter.php`}),`
`]}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsx)(t.h2,{id:`свойства-1`,children:`Свойства`}),`
`,(0,n.jsx)(`span`,{id:`property_repository`}),`
`,(0,n.jsx)(t.h4,{id:`private-repository--cycleormrepositoryinterface`,children:`private $repository : \\Cycle\\ORM\\RepositoryInterface`}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Тип:`}),` \\Cycle\\ORM\\RepositoryInterface`]}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsx)(t.h2,{id:`методы-1`,children:`Методы`}),`
`,(0,n.jsx)(`span`,{id:`method___construct`}),`
`,(0,n.jsx)(t.h3,{id:`__construct`,children:`__construct`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`public __construct(\\RepositoryInterface  repository) : mixed`})})})})}),`
`,(0,n.jsx)(t.h5,{id:`краткое-содержание-1`,children:`Краткое содержание`}),`
`,(0,n.jsx)(t.p,{children:`Конструктор класса.`}),`
`,(0,n.jsx)(t.h5,{id:`свойства-2`,children:`Свойства:`}),`
`,(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`Название`}),(0,n.jsx)(t.th,{children:`Тип`}),(0,n.jsx)(t.th,{children:`По умолчанию`})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:`$repository`})}),(0,n.jsx)(t.td,{children:`\\RepositoryInterface`}),(0,n.jsx)(t.td,{})]})})]}),`
`,(0,n.jsx)(t.h5,{id:`возвращает`,children:`Возвращает:`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`mixed`})})})})}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsx)(`span`,{id:`method_createFilter`}),`
`,(0,n.jsx)(t.h3,{id:`createfilter`,children:`createFilter`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`public createFilter(string  column_name, string  type, string  label, string|null  select_value = null, array|null  choices = null) : array`})})})})}),`
`,(0,n.jsx)(t.h5,{id:`краткое-содержание-2`,children:`Краткое содержание`}),`
`,(0,n.jsx)(t.p,{children:`Создает фильтр для указанного столбца с заданным типом и ярлыком.`}),`
`,(0,n.jsx)(t.h5,{id:`смотри-так-же`,children:`Смотри так-же:`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`#method_createFilterChoices`,children:`\\createFilterChoices()`})}),`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`#method_getRepository`,children:`\\getRepository()`})}),`
`]}),`
`,(0,n.jsx)(t.h5,{id:`свойства-3`,children:`Свойства:`}),`
`,(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`Название`}),(0,n.jsx)(t.th,{children:`Тип`}),(0,n.jsx)(t.th,{children:`По умолчанию`})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:`$column_name`})}),(0,n.jsx)(t.td,{children:`string`}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:`$type`})}),(0,n.jsx)(t.td,{children:`string`}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:`$label`})}),(0,n.jsx)(t.td,{children:`string`}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:`$select_value`})}),(0,n.jsx)(t.td,{children:`string|null`}),(0,n.jsx)(t.td,{children:`null`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:`$choices`})}),(0,n.jsx)(t.td,{children:`array|null`}),(0,n.jsx)(t.td,{children:`null`})]})]})]}),`
`,(0,n.jsx)(t.h5,{id:`ошибки`,children:`Ошибки:`}),`
`,(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`Тип`}),(0,n.jsx)(t.th,{children:`Описание`})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`\\InvalidArgumentException`}),(0,n.jsxs)(t.td,{children:[`Если значение `,(0,n.jsx)(t.code,{children:`$type`}),` не соответствует ожидаемым.`]})]})})]}),`
`,(0,n.jsx)(t.h5,{id:`возвращает-1`,children:`Возвращает:`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`array`})})})})}),`
`,(0,n.jsx)(t.p,{children:`Возвращает массив конфигурации фильтра.`}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsx)(`span`,{id:`method_createFilterChoices`}),`
`,(0,n.jsx)(t.h3,{id:`createfilterchoices`,children:`createFilterChoices`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`public createFilterChoices(string  name, string  select) : array`})})})})}),`
`,(0,n.jsx)(t.h5,{id:`краткое-содержание-3`,children:`Краткое содержание`}),`
`,(0,n.jsx)(t.p,{children:`Создает массив вариантов для фильтра на основе переданных данных.`}),`
`,(0,n.jsx)(t.h5,{id:`смотри-так-же-1`,children:`Смотри так-же:`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`../index#function_translate`,children:`\\translate`})}),`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`#method_getRepository`,children:`\\getRepository`})}),`
`]}),`
`,(0,n.jsx)(t.h5,{id:`свойства-4`,children:`Свойства:`}),`
`,(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`Название`}),(0,n.jsx)(t.th,{children:`Тип`}),(0,n.jsx)(t.th,{children:`По умолчанию`})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:`$name`})}),(0,n.jsx)(t.td,{children:`string`}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:`$select`})}),(0,n.jsx)(t.td,{children:`string`}),(0,n.jsx)(t.td,{})]})]})]}),`
`,(0,n.jsx)(t.h5,{id:`ошибки-1`,children:`Ошибки:`}),`
`,(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`Тип`}),(0,n.jsx)(t.th,{children:`Описание`})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`\\Throwable`}),(0,n.jsx)(t.td,{})]})})]}),`
`,(0,n.jsx)(t.h5,{id:`возвращает-2`,children:`Возвращает:`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`array`})})})})}),`
`,(0,n.jsx)(t.p,{children:`Ассоциативный массив, где ключи — значения фильтров, а значения — отображаемые имена фильтров.`}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsx)(`span`,{id:`method_getDefaultFilters`}),`
`,(0,n.jsx)(t.h3,{id:`getdefaultfilters`,children:`getDefaultFilters`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`static public getDefaultFilters(array  additionalFilters = []) : array`})})})})}),`
`,(0,n.jsx)(t.h5,{id:`краткое-содержание-4`,children:`Краткое содержание`}),`
`,(0,n.jsx)(t.p,{children:`Создает и возвращает массив стандартных фильтров для входящих данных.`}),`
`,(0,n.jsx)(t.h5,{id:`описание`,children:`Описание`}),`
`,(0,n.jsx)(t.p,{children:`Стандартные фильтры включают:`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsx)(t.li,{children:`'page' — валидация целого числа.`}),`
`,(0,n.jsxs)(t.li,{children:[`'mod', 'action', 'sites', 'order' — очистка данных с помощью
`,(0,n.jsx)(t.code,{children:`FILTER_SANITIZE_FULL_SPECIAL_CHARS`}),`
и возврат `,(0,n.jsx)(t.code,{children:`null`}),`, если фильтрация не удалась.`]}),`
`,(0,n.jsx)(t.li,{children:`'sort' — очистка данных аналогично предыдущим, но с приведением к верхнему регистру.`}),`
`]}),`
`,(0,n.jsxs)(t.p,{children:[`Метод предоставляет возможность добавлять пользовательские фильтры с помощью аргумента `,(0,n.jsx)(t.code,{children:`$additionalFilters`}),`.
Если значение пользовательского фильтра равно `,(0,n.jsx)(t.code,{children:`null`}),`, используется стандартный фильтр
`,(0,n.jsx)(t.code,{children:`FILTER_SANITIZE_FULL_SPECIAL_CHARS`}),`.`]}),`
`,(0,n.jsx)(t.h5,{id:`свойства-5`,children:`Свойства:`}),`
`,(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`Название`}),(0,n.jsx)(t.th,{children:`Тип`}),(0,n.jsx)(t.th,{children:`По умолчанию`})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:`$additionalFilters`})}),(0,n.jsx)(t.td,{children:`array`}),(0,n.jsx)(t.td,{children:`[]`})]})})]}),`
`,(0,n.jsx)(t.h5,{id:`возвращает-3`,children:`Возвращает:`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`array`})})})})}),`
`,(0,n.jsx)(t.p,{children:`Ассоциативный массив, содержащий объединенные стандартные и дополнительные фильтры.`}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsx)(`span`,{id:`method_getRepository`}),`
`,(0,n.jsx)(t.h3,{id:`getrepository`,children:`getRepository`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`public getRepository() : \\RepositoryInterface`})})})})}),`
`,(0,n.jsx)(t.h5,{id:`краткое-содержание-5`,children:`Краткое содержание`}),`
`,(0,n.jsx)(t.p,{children:`Возвращает используемый репозиторий.`}),`
`,(0,n.jsx)(t.h5,{id:`смотри-так-же-2`,children:`Смотри так-же:`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`#property_repository`,children:`\\TwigFilter::$repository`})}),`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`#method_setRepository`,children:`\\TwigFilter::setRepository()`})}),`
`]}),`
`,(0,n.jsx)(t.h5,{id:`возвращает-4`,children:`Возвращает:`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`\\RepositoryInterface`})})})})}),`
`,(0,n.jsx)(t.p,{children:`Текущий экземпляр репозитория, связанный с данным объектом.`}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsx)(`span`,{id:`method_getSort`}),`
`,(0,n.jsx)(t.h3,{id:`getsort`,children:`getSort`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`static public getSort(string  sort) : string`})})})})}),`
`,(0,n.jsx)(t.h5,{id:`краткое-содержание-6`,children:`Краткое содержание`}),`
`,(0,n.jsx)(t.p,{children:`Определяет направление сортировки на основе переданной строки.`}),`
`,(0,n.jsx)(t.h5,{id:`описание-1`,children:`Описание`}),`
`,(0,n.jsx)(t.p,{children:`Возвращает значение константы, соответствующее направлению сортировки:`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsx)(t.li,{children:`Если передана строка 'asc' или 'ASC', возвращается SelectQuery::SORT_ASC.`}),`
`,(0,n.jsx)(t.li,{children:`В остальных случаях возвращается SelectQuery::SORT_DESC.`}),`
`]}),`
`,(0,n.jsx)(t.h5,{id:`свойства-6`,children:`Свойства:`}),`
`,(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`Название`}),(0,n.jsx)(t.th,{children:`Тип`}),(0,n.jsx)(t.th,{children:`По умолчанию`})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:`$sort`})}),(0,n.jsx)(t.td,{children:`string`}),(0,n.jsx)(t.td,{})]})})]}),`
`,(0,n.jsx)(t.h5,{id:`возвращает-5`,children:`Возвращает:`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`string`})})})})}),`
`,(0,n.jsx)(t.p,{children:`Возвращаемое значение сортировки: SelectQuery::SORT_ASC или SelectQuery::SORT_DESC.`}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsx)(`span`,{id:`method_setRepository`}),`
`,(0,n.jsx)(t.h3,{id:`setrepository`,children:`setRepository`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`public setRepository(\\RepositoryInterface  repository) : void`})})})})}),`
`,(0,n.jsx)(t.h5,{id:`краткое-содержание-7`,children:`Краткое содержание`}),`
`,(0,n.jsx)(t.p,{children:`Устанавливает репозиторий для использования в текущем экземпляре класса.`}),`
`,(0,n.jsx)(t.h5,{id:`смотри-так-же-3`,children:`Смотри так-же:`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`#property_repository`,children:`\\TwigFilter::$repository`})}),`
`]}),`
`,(0,n.jsx)(t.h5,{id:`свойства-7`,children:`Свойства:`}),`
`,(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`Название`}),(0,n.jsx)(t.th,{children:`Тип`}),(0,n.jsx)(t.th,{children:`По умолчанию`})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:`$repository`})}),(0,n.jsx)(t.td,{children:`\\RepositoryInterface`}),(0,n.jsx)(t.td,{})]})})]}),`
`,(0,n.jsx)(t.h5,{id:`возвращает-6`,children:`Возвращает:`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`void`})})})})})]})}function l(e={}){let{wrapper:t}=e.components||{};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}export{a as _markdown,l as default,r as frontmatter,i as lastModified,o as structuredData,s as toc};