import{r as e}from"./rolldown-runtime-QTnfLwEv.js";import{t}from"./jsx-runtime-By8HlURe.js";var n=e(t()),r={title:`VideoTypes`},i=new Date(1787141927e3),a=`

**Описание:** Класс для представления коллекции видеоматериалов
Содержит коллекцию видеоматериалов, связанных с фильмом или сериалом,
включая трейлеры, тизеры и другие типы видео. Используется для группировки
и организации видеоконтента по категориям.

**С версии:** 1.0.0

**Версия:** 1.0.0

**См. также:**

* \`\\KinopoiskDev\\Models\\Video\`: Для отдельных видеоматериалов
* \`\\KinopoiskDev\\Models\\Movie\`: Для использования в информации о фильмах

## \`__construct()\` [#__construct]

**Описание:** Конструктор для создания объекта коллекции видеоматериалов
Создает новый экземпляр класса VideoTypes с указанным массивом трейлеров.
Параметр является опциональным и может быть null при отсутствии
видеоматериалов для данного фильма или сериала.

**Параметры:**

* \`$trailers\` (array|null): Массив объектов Video с трейлерами или null

**См. также:**

* \`VideoTypes::fromArray\`: () Для создания объекта из массива данных API
* \`VideoTypes::toArray\`: () Для преобразования объекта в массив
* \`Video\`: Для структуры отдельного видеоматериала

## \`fromArray()\` [#fromarray]

**Описание:** Создает объект VideoTypes из массива данных API
Фабричный метод для создания экземпляра класса VideoTypes из массива данных,
полученных от API Kinopoisk.dev. Безопасно обрабатывает отсутствующие
значения и преобразует вложенные массивы трейлеров в объекты Video.

* trailers: array|null - массив данных о трейлерах

**Параметры:**

* \`$data\` (array): Массив данных о видеоматериалах от API, содержащий ключи:

**Возвращает:** \`\\KinopoiskDev\\Models\\VideoTypes\` Новый экземпляр класса VideoTypes с данными из массива

**См. также:**

* \`VideoTypes::toArray\`: () Для обратного преобразования в массив
* \`Video::fromArray\`: () Для создания отдельных видеоматериалов

## \`toArray()\` [#toarray]

**Описание:** Преобразует объект в массив данных
Конвертирует текущий экземпляр класса VideoTypes в массив,
совместимый с форматом API Kinopoisk.dev. Преобразует все вложенные
объекты Video в массивы. Используется для сериализации данных
при отправке запросов к API или для экспорта данных.

* trailers: array|null - массив данных о трейлерах или null

**Возвращает:** \`array\` Массив с данными о видеоматериалах, содержащий ключи:

**См. также:**

* \`VideoTypes::fromArray\`: () Для создания объекта из массива
* \`Video::toArray\`: () Для преобразования отдельных видеоматериалов в массивы

## \`validate()\` [#validate]

**Описание:** Валидирует данные модели

**Возвращает:** \`bool True\` если данные валидны
`,o={contents:[{heading:void 0,content:`**Описание:** Класс для представления коллекции видеоматериалов
Содержит коллекцию видеоматериалов, связанных с фильмом или сериалом,
включая трейлеры, тизеры и другие типы видео. Используется для группировки
и организации видеоконтента по категориям.`},{heading:void 0,content:`**С версии:** 1.0.0`},{heading:void 0,content:`**Версия:** 1.0.0`},{heading:void 0,content:`**См. также:**`},{heading:void 0,content:"`\\KinopoiskDev\\Models\\Video`: Для отдельных видеоматериалов"},{heading:void 0,content:"`\\KinopoiskDev\\Models\\Movie`: Для использования в информации о фильмах"},{heading:`__construct`,content:`**Описание:** Конструктор для создания объекта коллекции видеоматериалов
Создает новый экземпляр класса VideoTypes с указанным массивом трейлеров.
Параметр является опциональным и может быть null при отсутствии
видеоматериалов для данного фильма или сериала.`},{heading:`__construct`,content:`**Параметры:**`},{heading:`__construct`,content:"`$trailers` (array|null): Массив объектов Video с трейлерами или null"},{heading:`__construct`,content:`**См. также:**`},{heading:`__construct`,content:"`VideoTypes::fromArray`: () Для создания объекта из массива данных API"},{heading:`__construct`,content:"`VideoTypes::toArray`: () Для преобразования объекта в массив"},{heading:`__construct`,content:"`Video`: Для структуры отдельного видеоматериала"},{heading:`fromarray`,content:`**Описание:** Создает объект VideoTypes из массива данных API
Фабричный метод для создания экземпляра класса VideoTypes из массива данных,
полученных от API Kinopoisk.dev. Безопасно обрабатывает отсутствующие
значения и преобразует вложенные массивы трейлеров в объекты Video.`},{heading:`fromarray`,content:`trailers: array|null - массив данных о трейлерах`},{heading:`fromarray`,content:`**Параметры:**`},{heading:`fromarray`,content:"`$data` (array): Массив данных о видеоматериалах от API, содержащий ключи:"},{heading:`fromarray`,content:"**Возвращает:** `\\KinopoiskDev\\Models\\VideoTypes` Новый экземпляр класса VideoTypes с данными из массива"},{heading:`fromarray`,content:`**См. также:**`},{heading:`fromarray`,content:"`VideoTypes::toArray`: () Для обратного преобразования в массив"},{heading:`fromarray`,content:"`Video::fromArray`: () Для создания отдельных видеоматериалов"},{heading:`toarray`,content:`**Описание:** Преобразует объект в массив данных
Конвертирует текущий экземпляр класса VideoTypes в массив,
совместимый с форматом API Kinopoisk.dev. Преобразует все вложенные
объекты Video в массивы. Используется для сериализации данных
при отправке запросов к API или для экспорта данных.`},{heading:`toarray`,content:`trailers: array|null - массив данных о трейлерах или null`},{heading:`toarray`,content:"**Возвращает:** `array` Массив с данными о видеоматериалах, содержащий ключи:"},{heading:`toarray`,content:`**См. также:**`},{heading:`toarray`,content:"`VideoTypes::fromArray`: () Для создания объекта из массива"},{heading:`toarray`,content:"`Video::toArray`: () Для преобразования отдельных видеоматериалов в массивы"},{heading:`validate`,content:`**Описание:** Валидирует данные модели`},{heading:`validate`,content:"**Возвращает:** `bool True` если данные валидны"}],headings:[{id:`__construct`,content:"`__construct()`"},{id:`fromarray`,content:"`fromArray()`"},{id:`toarray`,content:"`toArray()`"},{id:`validate`,content:"`validate()`"}]},s=[{depth:2,url:`#__construct`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`__construct()`})})},{depth:2,url:`#fromarray`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`fromArray()`})})},{depth:2,url:`#toarray`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`toArray()`})})},{depth:2,url:`#validate`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`validate()`})})}];function c(e){let t={code:`code`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Класс для представления коллекции видеоматериалов
Содержит коллекцию видеоматериалов, связанных с фильмом или сериалом,
включая трейлеры, тизеры и другие типы видео. Используется для группировки
и организации видеоконтента по категориям.`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 1.0.0`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Версия:`}),` 1.0.0`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`См. также:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`\\KinopoiskDev\\Models\\Video`}),`: Для отдельных видеоматериалов`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`\\KinopoiskDev\\Models\\Movie`}),`: Для использования в информации о фильмах`]}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`__construct`,children:(0,n.jsx)(t.code,{children:`__construct()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Конструктор для создания объекта коллекции видеоматериалов
Создает новый экземпляр класса VideoTypes с указанным массивом трейлеров.
Параметр является опциональным и может быть null при отсутствии
видеоматериалов для данного фильма или сериала.`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$trailers`}),` (array|null): Массив объектов Video с трейлерами или null`]}),`
`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`См. также:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`VideoTypes::fromArray`}),`: () Для создания объекта из массива данных API`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`VideoTypes::toArray`}),`: () Для преобразования объекта в массив`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`Video`}),`: Для структуры отдельного видеоматериала`]}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`fromarray`,children:(0,n.jsx)(t.code,{children:`fromArray()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Создает объект VideoTypes из массива данных API
Фабричный метод для создания экземпляра класса VideoTypes из массива данных,
полученных от API Kinopoisk.dev. Безопасно обрабатывает отсутствующие
значения и преобразует вложенные массивы трейлеров в объекты Video.`]}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsx)(t.li,{children:`trailers: array|null - массив данных о трейлерах`}),`
`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$data`}),` (array): Массив данных о видеоматериалах от API, содержащий ключи:`]}),`
`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`\\KinopoiskDev\\Models\\VideoTypes`}),` Новый экземпляр класса VideoTypes с данными из массива`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`См. также:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`VideoTypes::toArray`}),`: () Для обратного преобразования в массив`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`Video::fromArray`}),`: () Для создания отдельных видеоматериалов`]}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`toarray`,children:(0,n.jsx)(t.code,{children:`toArray()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Преобразует объект в массив данных
Конвертирует текущий экземпляр класса VideoTypes в массив,
совместимый с форматом API Kinopoisk.dev. Преобразует все вложенные
объекты Video в массивы. Используется для сериализации данных
при отправке запросов к API или для экспорта данных.`]}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsx)(t.li,{children:`trailers: array|null - массив данных о трейлерах или null`}),`
`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`array`}),` Массив с данными о видеоматериалах, содержащий ключи:`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`См. также:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`VideoTypes::fromArray`}),`: () Для создания объекта из массива`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`Video::toArray`}),`: () Для преобразования отдельных видеоматериалов в массивы`]}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`validate`,children:(0,n.jsx)(t.code,{children:`validate()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Валидирует данные модели`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`bool True`}),` если данные валидны`]})]})}function l(e={}){let{wrapper:t}=e.components||{};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}export{a as _markdown,l as default,r as frontmatter,i as lastModified,o as structuredData,s as toc};