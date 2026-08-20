import{r as e}from"./rolldown-runtime-QTnfLwEv.js";import{t}from"./jsx-runtime-By8HlURe.js";var n=e(t()),r={title:`ReviewInfo`},i=new Date(1787223655e3),a=`

**Описание:** Класс для представления информации о рецензиях на фильм
Содержит статистические данные о рецензиях на фильм или сериал,
включая общее количество рецензий, количество положительных рецензий
и процентное соотношение положительных отзывов.

**С версии:** 1.0.0

**Версия:** 1.0.0

**См. также:**

* \`\\KinopoiskDev\\Models\\Movie\`: Для использования в информации о фильмах

## \`__construct()\` [#__construct]

**Описание:** Конструктор для создания объекта информации о рецензиях
Создает новый экземпляр класса ReviewInfo с указанными параметрами.
Все параметры являются опциональными и могут быть NULL при отсутствии
соответствующей информации в источнике данных.

**Параметры:**

* \`$count\` (int|null): Общее количество рецензий
* \`$positiveCount\` (int|null): Количество положительных рецензий
* \`$percentage\` (string|null): Процент положительных рецензий в виде строки

**См. также:**

* \`ReviewInfo::fromArray\`: () Для создания объекта из массива данных API
* \`ReviewInfo::toArray\`: () Для преобразования объекта в массив

## \`fromArray()\` [#fromarray]

**Описание:** Создает объект ReviewInfo из массива данных API
Фабричный метод для создания экземпляра класса ReviewInfo из массива данных,
полученных от API Kinopoisk.dev. Безопасно обрабатывает отсутствующие
значения, устанавливая их в NULL.

* count: int|null - общее количество рецензий
* positiveCount: int|null - количество положительных рецензий
* percentage: string|null - процент положительных рецензий

**Параметры:**

* \`$data\` (array): Массив данных о рецензиях от API, содержащий ключи:

**Возвращает:** \`\\KinopoiskDev\\Models\\ReviewInfo\` Новый экземпляр класса ReviewInfo с данными из массива

**См. также:**

* \`ReviewInfo::toArray\`: () Для обратного преобразования в массив

## \`toArray()\` [#toarray]

**Описание:** Преобразует объект в массив данных
Конвертирует текущий экземпляр класса ReviewInfo в массив,
совместимый с форматом API Kinopoisk.dev. Используется для сериализации
данных при отправке запросов к API или для экспорта данных.

* count: int|null - общее количество рецензий
* positiveCount: int|null - количество положительных рецензий
* percentage: string|null - процент положительных рецензий

**Возвращает:** \`array\` Массив с данными о рецензиях, содержащий ключи:

**См. также:**

* \`ReviewInfo::fromArray\`: () Для создания объекта из массива

## \`validate()\` [#validate]

**Описание:** Валидирует данные модели

**Возвращает:** \`bool True\` если данные валидны
`,o={contents:[{heading:void 0,content:`**Описание:** Класс для представления информации о рецензиях на фильм
Содержит статистические данные о рецензиях на фильм или сериал,
включая общее количество рецензий, количество положительных рецензий
и процентное соотношение положительных отзывов.`},{heading:void 0,content:`**С версии:** 1.0.0`},{heading:void 0,content:`**Версия:** 1.0.0`},{heading:void 0,content:`**См. также:**`},{heading:void 0,content:"`\\KinopoiskDev\\Models\\Movie`: Для использования в информации о фильмах"},{heading:`__construct`,content:`**Описание:** Конструктор для создания объекта информации о рецензиях
Создает новый экземпляр класса ReviewInfo с указанными параметрами.
Все параметры являются опциональными и могут быть NULL при отсутствии
соответствующей информации в источнике данных.`},{heading:`__construct`,content:`**Параметры:**`},{heading:`__construct`,content:"`$count` (int|null): Общее количество рецензий"},{heading:`__construct`,content:"`$positiveCount` (int|null): Количество положительных рецензий"},{heading:`__construct`,content:"`$percentage` (string|null): Процент положительных рецензий в виде строки"},{heading:`__construct`,content:`**См. также:**`},{heading:`__construct`,content:"`ReviewInfo::fromArray`: () Для создания объекта из массива данных API"},{heading:`__construct`,content:"`ReviewInfo::toArray`: () Для преобразования объекта в массив"},{heading:`fromarray`,content:`**Описание:** Создает объект ReviewInfo из массива данных API
Фабричный метод для создания экземпляра класса ReviewInfo из массива данных,
полученных от API Kinopoisk.dev. Безопасно обрабатывает отсутствующие
значения, устанавливая их в NULL.`},{heading:`fromarray`,content:`count: int|null - общее количество рецензий`},{heading:`fromarray`,content:`positiveCount: int|null - количество положительных рецензий`},{heading:`fromarray`,content:`percentage: string|null - процент положительных рецензий`},{heading:`fromarray`,content:`**Параметры:**`},{heading:`fromarray`,content:"`$data` (array): Массив данных о рецензиях от API, содержащий ключи:"},{heading:`fromarray`,content:"**Возвращает:** `\\KinopoiskDev\\Models\\ReviewInfo` Новый экземпляр класса ReviewInfo с данными из массива"},{heading:`fromarray`,content:`**См. также:**`},{heading:`fromarray`,content:"`ReviewInfo::toArray`: () Для обратного преобразования в массив"},{heading:`toarray`,content:`**Описание:** Преобразует объект в массив данных
Конвертирует текущий экземпляр класса ReviewInfo в массив,
совместимый с форматом API Kinopoisk.dev. Используется для сериализации
данных при отправке запросов к API или для экспорта данных.`},{heading:`toarray`,content:`count: int|null - общее количество рецензий`},{heading:`toarray`,content:`positiveCount: int|null - количество положительных рецензий`},{heading:`toarray`,content:`percentage: string|null - процент положительных рецензий`},{heading:`toarray`,content:"**Возвращает:** `array` Массив с данными о рецензиях, содержащий ключи:"},{heading:`toarray`,content:`**См. также:**`},{heading:`toarray`,content:"`ReviewInfo::fromArray`: () Для создания объекта из массива"},{heading:`validate`,content:`**Описание:** Валидирует данные модели`},{heading:`validate`,content:"**Возвращает:** `bool True` если данные валидны"}],headings:[{id:`__construct`,content:"`__construct()`"},{id:`fromarray`,content:"`fromArray()`"},{id:`toarray`,content:"`toArray()`"},{id:`validate`,content:"`validate()`"}]},s=[{depth:2,url:`#__construct`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`__construct()`})})},{depth:2,url:`#fromarray`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`fromArray()`})})},{depth:2,url:`#toarray`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`toArray()`})})},{depth:2,url:`#validate`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`validate()`})})}];function c(e){let t={code:`code`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Класс для представления информации о рецензиях на фильм
Содержит статистические данные о рецензиях на фильм или сериал,
включая общее количество рецензий, количество положительных рецензий
и процентное соотношение положительных отзывов.`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 1.0.0`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Версия:`}),` 1.0.0`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`См. также:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`\\KinopoiskDev\\Models\\Movie`}),`: Для использования в информации о фильмах`]}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`__construct`,children:(0,n.jsx)(t.code,{children:`__construct()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Конструктор для создания объекта информации о рецензиях
Создает новый экземпляр класса ReviewInfo с указанными параметрами.
Все параметры являются опциональными и могут быть NULL при отсутствии
соответствующей информации в источнике данных.`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$count`}),` (int|null): Общее количество рецензий`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$positiveCount`}),` (int|null): Количество положительных рецензий`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$percentage`}),` (string|null): Процент положительных рецензий в виде строки`]}),`
`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`См. также:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`ReviewInfo::fromArray`}),`: () Для создания объекта из массива данных API`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`ReviewInfo::toArray`}),`: () Для преобразования объекта в массив`]}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`fromarray`,children:(0,n.jsx)(t.code,{children:`fromArray()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Создает объект ReviewInfo из массива данных API
Фабричный метод для создания экземпляра класса ReviewInfo из массива данных,
полученных от API Kinopoisk.dev. Безопасно обрабатывает отсутствующие
значения, устанавливая их в NULL.`]}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsx)(t.li,{children:`count: int|null - общее количество рецензий`}),`
`,(0,n.jsx)(t.li,{children:`positiveCount: int|null - количество положительных рецензий`}),`
`,(0,n.jsx)(t.li,{children:`percentage: string|null - процент положительных рецензий`}),`
`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$data`}),` (array): Массив данных о рецензиях от API, содержащий ключи:`]}),`
`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`\\KinopoiskDev\\Models\\ReviewInfo`}),` Новый экземпляр класса ReviewInfo с данными из массива`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`См. также:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`ReviewInfo::toArray`}),`: () Для обратного преобразования в массив`]}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`toarray`,children:(0,n.jsx)(t.code,{children:`toArray()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Преобразует объект в массив данных
Конвертирует текущий экземпляр класса ReviewInfo в массив,
совместимый с форматом API Kinopoisk.dev. Используется для сериализации
данных при отправке запросов к API или для экспорта данных.`]}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsx)(t.li,{children:`count: int|null - общее количество рецензий`}),`
`,(0,n.jsx)(t.li,{children:`positiveCount: int|null - количество положительных рецензий`}),`
`,(0,n.jsx)(t.li,{children:`percentage: string|null - процент положительных рецензий`}),`
`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`array`}),` Массив с данными о рецензиях, содержащий ключи:`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`См. также:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`ReviewInfo::fromArray`}),`: () Для создания объекта из массива`]}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`validate`,children:(0,n.jsx)(t.code,{children:`validate()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Валидирует данные модели`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`bool True`}),` если данные валидны`]})]})}function l(e={}){let{wrapper:t}=e.components||{};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}export{a as _markdown,l as default,r as frontmatter,i as lastModified,o as structuredData,s as toc};