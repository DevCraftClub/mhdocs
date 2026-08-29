import{r as e}from"./rolldown-runtime-QTnfLwEv.js";import{t}from"./jsx-runtime-By8HlURe.js";var n=e(t()),r={title:`Watchability`},i=new Date(1788011088e3),a=`

**Описание:** Класс для представления информации о доступности просмотра
Содержит информацию о платформах и сервисах, где доступен просмотр
фильма или сериала. Используется для отображения списка стриминговых
сервисов, онлайн-кинотеатров и других площадок для просмотра контента.

**С версии:** 1.0.0

**Версия:** 1.0.0

**См. также:**

* \`\\KinopoiskDev\\Models\\WatchabilityItem\`: Для отдельных элементов доступности
* \`\\KinopoiskDev\\Models\\Movie\`: Для использования в информации о фильмах

## \`__construct()\` [#__construct]

**Описание:** Конструктор для создания объекта доступности просмотра
Создает новый экземпляр класса Watchability с указанным массивом элементов.
Параметр является опциональным и может быть пустым массивом при отсутствии
информации о доступности просмотра для данного фильма или сериала.

**Параметры:**

* \`$items\` (array): Массив объектов WatchabilityItem с информацией о платформах

**См. также:**

* \`Watchability::fromArray\`: () Для создания объекта из массива данных API
* \`Watchability::toArray\`: () Для преобразования объекта в массив
* \`WatchabilityItem\`: Для структуры отдельного элемента доступности

## \`fromArray()\` [#fromarray]

**Описание:** Создает объект Watchability из массива данных API
Фабричный метод для создания экземпляра класса Watchability из массива данных,
полученных от API Kinopoisk.dev. Безопасно обрабатывает отсутствующие
значения и преобразует вложенные массивы элементов в объекты WatchabilityItem.

* items: array|null - массив данных о платформах просмотра

**Параметры:**

* \`$data\` (array): Массив данных о доступности просмотра от API, содержащий ключи:

**Возвращает:** \`\\KinopoiskDev\\Models\\Watchability\` Новый экземпляр класса Watchability с данными из массива

**См. также:**

* \`Watchability::toArray\`: () Для обратного преобразования в массив
* \`WatchabilityItem::fromArray\`: () Для создания отдельных элементов доступности

## \`toArray()\` [#toarray]

**Описание:** Преобразует объект в массив данных
Конвертирует текущий экземпляр класса Watchability в массив,
совместимый с форматом API Kinopoisk.dev. Преобразует все вложенные
объекты WatchabilityItem в массивы. Используется для сериализации данных
при отправке запросов к API или для экспорта данных.

* items: array - массив данных о платформах просмотра

**Возвращает:** \`array\` Массив с данными о доступности просмотра, содержащий ключи:

**См. также:**

* \`Watchability::fromArray\`: () Для создания объекта из массива
* \`WatchabilityItem::toArray\`: () Для преобразования отдельных элементов в массивы

## \`validate()\` [#validate]

**Описание:** Валидирует данные модели

**Возвращает:** \`bool True\` если данные валидны
`,o={contents:[{heading:void 0,content:`**Описание:** Класс для представления информации о доступности просмотра
Содержит информацию о платформах и сервисах, где доступен просмотр
фильма или сериала. Используется для отображения списка стриминговых
сервисов, онлайн-кинотеатров и других площадок для просмотра контента.`},{heading:void 0,content:`**С версии:** 1.0.0`},{heading:void 0,content:`**Версия:** 1.0.0`},{heading:void 0,content:`**См. также:**`},{heading:void 0,content:"`\\KinopoiskDev\\Models\\WatchabilityItem`: Для отдельных элементов доступности"},{heading:void 0,content:"`\\KinopoiskDev\\Models\\Movie`: Для использования в информации о фильмах"},{heading:`__construct`,content:`**Описание:** Конструктор для создания объекта доступности просмотра
Создает новый экземпляр класса Watchability с указанным массивом элементов.
Параметр является опциональным и может быть пустым массивом при отсутствии
информации о доступности просмотра для данного фильма или сериала.`},{heading:`__construct`,content:`**Параметры:**`},{heading:`__construct`,content:"`$items` (array): Массив объектов WatchabilityItem с информацией о платформах"},{heading:`__construct`,content:`**См. также:**`},{heading:`__construct`,content:"`Watchability::fromArray`: () Для создания объекта из массива данных API"},{heading:`__construct`,content:"`Watchability::toArray`: () Для преобразования объекта в массив"},{heading:`__construct`,content:"`WatchabilityItem`: Для структуры отдельного элемента доступности"},{heading:`fromarray`,content:`**Описание:** Создает объект Watchability из массива данных API
Фабричный метод для создания экземпляра класса Watchability из массива данных,
полученных от API Kinopoisk.dev. Безопасно обрабатывает отсутствующие
значения и преобразует вложенные массивы элементов в объекты WatchabilityItem.`},{heading:`fromarray`,content:`items: array|null - массив данных о платформах просмотра`},{heading:`fromarray`,content:`**Параметры:**`},{heading:`fromarray`,content:"`$data` (array): Массив данных о доступности просмотра от API, содержащий ключи:"},{heading:`fromarray`,content:"**Возвращает:** `\\KinopoiskDev\\Models\\Watchability` Новый экземпляр класса Watchability с данными из массива"},{heading:`fromarray`,content:`**См. также:**`},{heading:`fromarray`,content:"`Watchability::toArray`: () Для обратного преобразования в массив"},{heading:`fromarray`,content:"`WatchabilityItem::fromArray`: () Для создания отдельных элементов доступности"},{heading:`toarray`,content:`**Описание:** Преобразует объект в массив данных
Конвертирует текущий экземпляр класса Watchability в массив,
совместимый с форматом API Kinopoisk.dev. Преобразует все вложенные
объекты WatchabilityItem в массивы. Используется для сериализации данных
при отправке запросов к API или для экспорта данных.`},{heading:`toarray`,content:`items: array - массив данных о платформах просмотра`},{heading:`toarray`,content:"**Возвращает:** `array` Массив с данными о доступности просмотра, содержащий ключи:"},{heading:`toarray`,content:`**См. также:**`},{heading:`toarray`,content:"`Watchability::fromArray`: () Для создания объекта из массива"},{heading:`toarray`,content:"`WatchabilityItem::toArray`: () Для преобразования отдельных элементов в массивы"},{heading:`validate`,content:`**Описание:** Валидирует данные модели`},{heading:`validate`,content:"**Возвращает:** `bool True` если данные валидны"}],headings:[{id:`__construct`,content:"`__construct()`"},{id:`fromarray`,content:"`fromArray()`"},{id:`toarray`,content:"`toArray()`"},{id:`validate`,content:"`validate()`"}]},s=[{depth:2,url:`#__construct`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`__construct()`})})},{depth:2,url:`#fromarray`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`fromArray()`})})},{depth:2,url:`#toarray`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`toArray()`})})},{depth:2,url:`#validate`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`validate()`})})}];function c(e){let t={code:`code`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Класс для представления информации о доступности просмотра
Содержит информацию о платформах и сервисах, где доступен просмотр
фильма или сериала. Используется для отображения списка стриминговых
сервисов, онлайн-кинотеатров и других площадок для просмотра контента.`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 1.0.0`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Версия:`}),` 1.0.0`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`См. также:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`\\KinopoiskDev\\Models\\WatchabilityItem`}),`: Для отдельных элементов доступности`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`\\KinopoiskDev\\Models\\Movie`}),`: Для использования в информации о фильмах`]}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`__construct`,children:(0,n.jsx)(t.code,{children:`__construct()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Конструктор для создания объекта доступности просмотра
Создает новый экземпляр класса Watchability с указанным массивом элементов.
Параметр является опциональным и может быть пустым массивом при отсутствии
информации о доступности просмотра для данного фильма или сериала.`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$items`}),` (array): Массив объектов WatchabilityItem с информацией о платформах`]}),`
`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`См. также:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`Watchability::fromArray`}),`: () Для создания объекта из массива данных API`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`Watchability::toArray`}),`: () Для преобразования объекта в массив`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`WatchabilityItem`}),`: Для структуры отдельного элемента доступности`]}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`fromarray`,children:(0,n.jsx)(t.code,{children:`fromArray()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Создает объект Watchability из массива данных API
Фабричный метод для создания экземпляра класса Watchability из массива данных,
полученных от API Kinopoisk.dev. Безопасно обрабатывает отсутствующие
значения и преобразует вложенные массивы элементов в объекты WatchabilityItem.`]}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsx)(t.li,{children:`items: array|null - массив данных о платформах просмотра`}),`
`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$data`}),` (array): Массив данных о доступности просмотра от API, содержащий ключи:`]}),`
`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`\\KinopoiskDev\\Models\\Watchability`}),` Новый экземпляр класса Watchability с данными из массива`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`См. также:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`Watchability::toArray`}),`: () Для обратного преобразования в массив`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`WatchabilityItem::fromArray`}),`: () Для создания отдельных элементов доступности`]}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`toarray`,children:(0,n.jsx)(t.code,{children:`toArray()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Преобразует объект в массив данных
Конвертирует текущий экземпляр класса Watchability в массив,
совместимый с форматом API Kinopoisk.dev. Преобразует все вложенные
объекты WatchabilityItem в массивы. Используется для сериализации данных
при отправке запросов к API или для экспорта данных.`]}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsx)(t.li,{children:`items: array - массив данных о платформах просмотра`}),`
`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`array`}),` Массив с данными о доступности просмотра, содержащий ключи:`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`См. также:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`Watchability::fromArray`}),`: () Для создания объекта из массива`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`WatchabilityItem::toArray`}),`: () Для преобразования отдельных элементов в массивы`]}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`validate`,children:(0,n.jsx)(t.code,{children:`validate()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Валидирует данные модели`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`bool True`}),` если данные валидны`]})]})}function l(e={}){let{wrapper:t}=e.components||{};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}export{a as _markdown,l as default,r as frontmatter,i as lastModified,o as structuredData,s as toc};