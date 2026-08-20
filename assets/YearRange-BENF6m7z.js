import{r as e}from"./rolldown-runtime-QTnfLwEv.js";import{t}from"./jsx-runtime-By8HlURe.js";var n=e(t()),r={title:`YearRange`},i=new Date(1787217967e3),a=`

**Описание:** Класс для представления диапазона годов
Содержит информацию о диапазоне годов, включая начальный и конечный год.
Используется для хранения периодов выпуска сериалов, временных рамок
для поиска и фильтрации, а также других диапазонов дат в годах.

**С версии:** 1.0.0

**Версия:** 1.0.0

**См. также:**

* \`\\KinopoiskDev\\Models\\Movie\`: Для использования в информации о фильмах

## \`__construct()\` [#__construct]

**Описание:** Конструктор для создания объекта диапазона годов
Создает новый экземпляр класса YearRange с указанными начальным и конечным годами.
Оба параметра являются опциональными и могут быть null при отсутствии
соответствующей информации в источнике данных.

**Параметры:**

* \`$start\` (int|null): Начальный год диапазона или null
* \`$end\` (int|null): Конечный год диапазона или null

**См. также:**

* \`YearRange::fromArray\`: () Для создания объекта из массива данных API
* \`YearRange::toArray\`: () Для преобразования объекта в массив

## \`fromArray()\` [#fromarray]

**Описание:** Создает объект YearRange из массива данных API
Фабричный метод для создания экземпляра класса YearRange из массива данных,
полученных от API Kinopoisk.dev. Безопасно обрабатывает отсутствующие
значения, устанавливая их в null.

* start: int|null - начальный год диапазона
* end: int|null - конечный год диапазона

**Параметры:**

* \`$data\` (array): Массив данных о диапазоне годов от API, содержащий ключи:

**Возвращает:** \`static\` Новый экземпляр класса YearRange с данными из массива

**См. также:**

* \`YearRange::toArray\`: () Для обратного преобразования в массив

## \`toArray()\` [#toarray]

**Описание:** Преобразует объект в массив данных
Конвертирует текущий экземпляр класса YearRange в массив,
совместимый с форматом API Kinopoisk.dev. Используется для сериализации
данных при отправке запросов к API или для экспорта данных.

* start: int|null - начальный год диапазона
* end: int|null - конечный год диапазона

**Возвращает:** \`array\` Массив с данными о диапазоне годов, содержащий ключи:

**См. также:**

* \`YearRange::fromArray\`: () Для создания объекта из массива

## \`validate()\` [#validate]

**Описание:** Валидирует данные модели

**Возвращает:** \`bool True\` если данные валидны
`,o={contents:[{heading:void 0,content:`**Описание:** Класс для представления диапазона годов
Содержит информацию о диапазоне годов, включая начальный и конечный год.
Используется для хранения периодов выпуска сериалов, временных рамок
для поиска и фильтрации, а также других диапазонов дат в годах.`},{heading:void 0,content:`**С версии:** 1.0.0`},{heading:void 0,content:`**Версия:** 1.0.0`},{heading:void 0,content:`**См. также:**`},{heading:void 0,content:"`\\KinopoiskDev\\Models\\Movie`: Для использования в информации о фильмах"},{heading:`__construct`,content:`**Описание:** Конструктор для создания объекта диапазона годов
Создает новый экземпляр класса YearRange с указанными начальным и конечным годами.
Оба параметра являются опциональными и могут быть null при отсутствии
соответствующей информации в источнике данных.`},{heading:`__construct`,content:`**Параметры:**`},{heading:`__construct`,content:"`$start` (int|null): Начальный год диапазона или null"},{heading:`__construct`,content:"`$end` (int|null): Конечный год диапазона или null"},{heading:`__construct`,content:`**См. также:**`},{heading:`__construct`,content:"`YearRange::fromArray`: () Для создания объекта из массива данных API"},{heading:`__construct`,content:"`YearRange::toArray`: () Для преобразования объекта в массив"},{heading:`fromarray`,content:`**Описание:** Создает объект YearRange из массива данных API
Фабричный метод для создания экземпляра класса YearRange из массива данных,
полученных от API Kinopoisk.dev. Безопасно обрабатывает отсутствующие
значения, устанавливая их в null.`},{heading:`fromarray`,content:`start: int|null - начальный год диапазона`},{heading:`fromarray`,content:`end: int|null - конечный год диапазона`},{heading:`fromarray`,content:`**Параметры:**`},{heading:`fromarray`,content:"`$data` (array): Массив данных о диапазоне годов от API, содержащий ключи:"},{heading:`fromarray`,content:"**Возвращает:** `static` Новый экземпляр класса YearRange с данными из массива"},{heading:`fromarray`,content:`**См. также:**`},{heading:`fromarray`,content:"`YearRange::toArray`: () Для обратного преобразования в массив"},{heading:`toarray`,content:`**Описание:** Преобразует объект в массив данных
Конвертирует текущий экземпляр класса YearRange в массив,
совместимый с форматом API Kinopoisk.dev. Используется для сериализации
данных при отправке запросов к API или для экспорта данных.`},{heading:`toarray`,content:`start: int|null - начальный год диапазона`},{heading:`toarray`,content:`end: int|null - конечный год диапазона`},{heading:`toarray`,content:"**Возвращает:** `array` Массив с данными о диапазоне годов, содержащий ключи:"},{heading:`toarray`,content:`**См. также:**`},{heading:`toarray`,content:"`YearRange::fromArray`: () Для создания объекта из массива"},{heading:`validate`,content:`**Описание:** Валидирует данные модели`},{heading:`validate`,content:"**Возвращает:** `bool True` если данные валидны"}],headings:[{id:`__construct`,content:"`__construct()`"},{id:`fromarray`,content:"`fromArray()`"},{id:`toarray`,content:"`toArray()`"},{id:`validate`,content:"`validate()`"}]},s=[{depth:2,url:`#__construct`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`__construct()`})})},{depth:2,url:`#fromarray`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`fromArray()`})})},{depth:2,url:`#toarray`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`toArray()`})})},{depth:2,url:`#validate`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`validate()`})})}];function c(e){let t={code:`code`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Класс для представления диапазона годов
Содержит информацию о диапазоне годов, включая начальный и конечный год.
Используется для хранения периодов выпуска сериалов, временных рамок
для поиска и фильтрации, а также других диапазонов дат в годах.`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 1.0.0`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Версия:`}),` 1.0.0`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`См. также:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`\\KinopoiskDev\\Models\\Movie`}),`: Для использования в информации о фильмах`]}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`__construct`,children:(0,n.jsx)(t.code,{children:`__construct()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Конструктор для создания объекта диапазона годов
Создает новый экземпляр класса YearRange с указанными начальным и конечным годами.
Оба параметра являются опциональными и могут быть null при отсутствии
соответствующей информации в источнике данных.`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$start`}),` (int|null): Начальный год диапазона или null`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$end`}),` (int|null): Конечный год диапазона или null`]}),`
`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`См. также:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`YearRange::fromArray`}),`: () Для создания объекта из массива данных API`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`YearRange::toArray`}),`: () Для преобразования объекта в массив`]}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`fromarray`,children:(0,n.jsx)(t.code,{children:`fromArray()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Создает объект YearRange из массива данных API
Фабричный метод для создания экземпляра класса YearRange из массива данных,
полученных от API Kinopoisk.dev. Безопасно обрабатывает отсутствующие
значения, устанавливая их в null.`]}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsx)(t.li,{children:`start: int|null - начальный год диапазона`}),`
`,(0,n.jsx)(t.li,{children:`end: int|null - конечный год диапазона`}),`
`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$data`}),` (array): Массив данных о диапазоне годов от API, содержащий ключи:`]}),`
`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`static`}),` Новый экземпляр класса YearRange с данными из массива`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`См. также:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`YearRange::toArray`}),`: () Для обратного преобразования в массив`]}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`toarray`,children:(0,n.jsx)(t.code,{children:`toArray()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Преобразует объект в массив данных
Конвертирует текущий экземпляр класса YearRange в массив,
совместимый с форматом API Kinopoisk.dev. Используется для сериализации
данных при отправке запросов к API или для экспорта данных.`]}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsx)(t.li,{children:`start: int|null - начальный год диапазона`}),`
`,(0,n.jsx)(t.li,{children:`end: int|null - конечный год диапазона`}),`
`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`array`}),` Массив с данными о диапазоне годов, содержащий ключи:`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`См. также:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`YearRange::fromArray`}),`: () Для создания объекта из массива`]}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`validate`,children:(0,n.jsx)(t.code,{children:`validate()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Валидирует данные модели`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`bool True`}),` если данные валидны`]})]})}function l(e={}){let{wrapper:t}=e.components||{};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}export{a as _markdown,l as default,r as frontmatter,i as lastModified,o as structuredData,s as toc};