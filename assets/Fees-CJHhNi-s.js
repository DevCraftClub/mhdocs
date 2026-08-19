import{r as e}from"./rolldown-runtime-QTnfLwEv.js";import{t}from"./jsx-runtime-By8HlURe.js";var n=e(t()),r={title:`Fees`},i=new Date(1787141927e3),a=`

**Описание:** Класс для представления кассовых сборов фильма по регионам
Представляет информацию о кассовых сборах фильма в различных регионах мира,
включая мировые сборы, сборы в России и США. Каждый регион содержит
денежное значение с валютой, представленное объектом CurrencyValue.
Используется для хранения и обработки финансовой информации о фильмах
из API Kinopoisk.dev.

**С версии:** 1.0.0

**Версия:** 1.0.0

**См. также:**

* \`\\KinopoiskDev\\Models\\Budget\`: Для информации о бюджете фильма
* \`\\KinopoiskDev\\Models\\CurrencyValue\`: Для структуры денежных значений

## \`__construct()\` [#__construct]

**Описание:** Конструктор для создания объекта кассовых сборов
Создает новый экземпляр класса Fees с информацией о кассовых сборах
фильма по различным регионам. Все параметры являются опциональными
и могут быть null при отсутствии данных о сборах в конкретном регионе.

**Параметры:**

* \`$world\` (CurrencyValue|null): Мировые кассовые сборы фильма (null если не указаны)
* \`$russia\` (CurrencyValue|null): Кассовые сборы фильма в России (null если не указаны)
* \`$usa\` (CurrencyValue|null): Кассовые сборы фильма в США (null если не указаны)

**См. также:**

* \`Fees::fromArray\`: () Для создания объекта из массива данных API
* \`Fees::toArray\`: () Для преобразования объекта в массив

## \`fromArray()\` [#fromarray]

**Описание:** Создает объект Fees из массива данных API
Фабричный метод для создания экземпляра класса Fees из массива
данных о кассовых сборах, полученных от API Kinopoisk.dev.
Безопасно обрабатывает отсутствующие значения, устанавливая их в null.
Автоматически преобразует вложенные массивы в объекты CurrencyValue
для каждого региона.

* world: array|null - данные о мировых сборах
* russia: array|null - данные о сборах в России
* usa: array|null - данные о сборах в США

**Параметры:**

* \`$data\` (array): Массив данных о кассовых сборах от API, содержащий ключи:

**Возвращает:** \`\\KinopoiskDev\\Models\\Fees\` Новый экземпляр класса Fees с данными из массива

**См. также:**

* \`Fees::toArray\`: () Для обратного преобразования в массив
* \`CurrencyValue::fromArray\`: () Для создания объектов денежных значений

## \`toArray()\` [#toarray]

**Описание:** Преобразует объект в массив данных
Конвертирует текущий экземпляр класса Fees в массив,
совместимый с форматом API Kinopoisk.dev. Используется для сериализации
данных при отправке запросов к API или для экспорта данных в JSON.
Автоматически преобразует объекты CurrencyValue в массивы для каждого региона.

* world: array|null - мировые сборы в формате массива
* russia: array|null - сборы в России в формате массива
* usa: array|null - сборы в США в формате массива

**Возвращает:** \`array\` Массив с данными о кассовых сборах, содержащий ключи:

**См. также:**

* \`Fees::fromArray\`: () Для создания объекта из массива
* \`CurrencyValue::toArray\`: () Для преобразования денежных значений в массивы

## \`validate()\` [#validate]

**Описание:** Валидирует данные модели

**Возвращает:** \`bool True\` если данные валидны
`,o={contents:[{heading:void 0,content:`**Описание:** Класс для представления кассовых сборов фильма по регионам
Представляет информацию о кассовых сборах фильма в различных регионах мира,
включая мировые сборы, сборы в России и США. Каждый регион содержит
денежное значение с валютой, представленное объектом CurrencyValue.
Используется для хранения и обработки финансовой информации о фильмах
из API Kinopoisk.dev.`},{heading:void 0,content:`**С версии:** 1.0.0`},{heading:void 0,content:`**Версия:** 1.0.0`},{heading:void 0,content:`**См. также:**`},{heading:void 0,content:"`\\KinopoiskDev\\Models\\Budget`: Для информации о бюджете фильма"},{heading:void 0,content:"`\\KinopoiskDev\\Models\\CurrencyValue`: Для структуры денежных значений"},{heading:`__construct`,content:`**Описание:** Конструктор для создания объекта кассовых сборов
Создает новый экземпляр класса Fees с информацией о кассовых сборах
фильма по различным регионам. Все параметры являются опциональными
и могут быть null при отсутствии данных о сборах в конкретном регионе.`},{heading:`__construct`,content:`**Параметры:**`},{heading:`__construct`,content:"`$world` (CurrencyValue|null): Мировые кассовые сборы фильма (null если не указаны)"},{heading:`__construct`,content:"`$russia` (CurrencyValue|null): Кассовые сборы фильма в России (null если не указаны)"},{heading:`__construct`,content:"`$usa` (CurrencyValue|null): Кассовые сборы фильма в США (null если не указаны)"},{heading:`__construct`,content:`**См. также:**`},{heading:`__construct`,content:"`Fees::fromArray`: () Для создания объекта из массива данных API"},{heading:`__construct`,content:"`Fees::toArray`: () Для преобразования объекта в массив"},{heading:`fromarray`,content:`**Описание:** Создает объект Fees из массива данных API
Фабричный метод для создания экземпляра класса Fees из массива
данных о кассовых сборах, полученных от API Kinopoisk.dev.
Безопасно обрабатывает отсутствующие значения, устанавливая их в null.
Автоматически преобразует вложенные массивы в объекты CurrencyValue
для каждого региона.`},{heading:`fromarray`,content:`world: array|null - данные о мировых сборах`},{heading:`fromarray`,content:`russia: array|null - данные о сборах в России`},{heading:`fromarray`,content:`usa: array|null - данные о сборах в США`},{heading:`fromarray`,content:`**Параметры:**`},{heading:`fromarray`,content:"`$data` (array): Массив данных о кассовых сборах от API, содержащий ключи:"},{heading:`fromarray`,content:"**Возвращает:** `\\KinopoiskDev\\Models\\Fees` Новый экземпляр класса Fees с данными из массива"},{heading:`fromarray`,content:`**См. также:**`},{heading:`fromarray`,content:"`Fees::toArray`: () Для обратного преобразования в массив"},{heading:`fromarray`,content:"`CurrencyValue::fromArray`: () Для создания объектов денежных значений"},{heading:`toarray`,content:`**Описание:** Преобразует объект в массив данных
Конвертирует текущий экземпляр класса Fees в массив,
совместимый с форматом API Kinopoisk.dev. Используется для сериализации
данных при отправке запросов к API или для экспорта данных в JSON.
Автоматически преобразует объекты CurrencyValue в массивы для каждого региона.`},{heading:`toarray`,content:`world: array|null - мировые сборы в формате массива`},{heading:`toarray`,content:`russia: array|null - сборы в России в формате массива`},{heading:`toarray`,content:`usa: array|null - сборы в США в формате массива`},{heading:`toarray`,content:"**Возвращает:** `array` Массив с данными о кассовых сборах, содержащий ключи:"},{heading:`toarray`,content:`**См. также:**`},{heading:`toarray`,content:"`Fees::fromArray`: () Для создания объекта из массива"},{heading:`toarray`,content:"`CurrencyValue::toArray`: () Для преобразования денежных значений в массивы"},{heading:`validate`,content:`**Описание:** Валидирует данные модели`},{heading:`validate`,content:"**Возвращает:** `bool True` если данные валидны"}],headings:[{id:`__construct`,content:"`__construct()`"},{id:`fromarray`,content:"`fromArray()`"},{id:`toarray`,content:"`toArray()`"},{id:`validate`,content:"`validate()`"}]},s=[{depth:2,url:`#__construct`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`__construct()`})})},{depth:2,url:`#fromarray`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`fromArray()`})})},{depth:2,url:`#toarray`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`toArray()`})})},{depth:2,url:`#validate`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`validate()`})})}];function c(e){let t={code:`code`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Класс для представления кассовых сборов фильма по регионам
Представляет информацию о кассовых сборах фильма в различных регионах мира,
включая мировые сборы, сборы в России и США. Каждый регион содержит
денежное значение с валютой, представленное объектом CurrencyValue.
Используется для хранения и обработки финансовой информации о фильмах
из API Kinopoisk.dev.`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 1.0.0`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Версия:`}),` 1.0.0`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`См. также:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`\\KinopoiskDev\\Models\\Budget`}),`: Для информации о бюджете фильма`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`\\KinopoiskDev\\Models\\CurrencyValue`}),`: Для структуры денежных значений`]}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`__construct`,children:(0,n.jsx)(t.code,{children:`__construct()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Конструктор для создания объекта кассовых сборов
Создает новый экземпляр класса Fees с информацией о кассовых сборах
фильма по различным регионам. Все параметры являются опциональными
и могут быть null при отсутствии данных о сборах в конкретном регионе.`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$world`}),` (CurrencyValue|null): Мировые кассовые сборы фильма (null если не указаны)`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$russia`}),` (CurrencyValue|null): Кассовые сборы фильма в России (null если не указаны)`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$usa`}),` (CurrencyValue|null): Кассовые сборы фильма в США (null если не указаны)`]}),`
`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`См. также:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`Fees::fromArray`}),`: () Для создания объекта из массива данных API`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`Fees::toArray`}),`: () Для преобразования объекта в массив`]}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`fromarray`,children:(0,n.jsx)(t.code,{children:`fromArray()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Создает объект Fees из массива данных API
Фабричный метод для создания экземпляра класса Fees из массива
данных о кассовых сборах, полученных от API Kinopoisk.dev.
Безопасно обрабатывает отсутствующие значения, устанавливая их в null.
Автоматически преобразует вложенные массивы в объекты CurrencyValue
для каждого региона.`]}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsx)(t.li,{children:`world: array|null - данные о мировых сборах`}),`
`,(0,n.jsx)(t.li,{children:`russia: array|null - данные о сборах в России`}),`
`,(0,n.jsx)(t.li,{children:`usa: array|null - данные о сборах в США`}),`
`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$data`}),` (array): Массив данных о кассовых сборах от API, содержащий ключи:`]}),`
`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`\\KinopoiskDev\\Models\\Fees`}),` Новый экземпляр класса Fees с данными из массива`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`См. также:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`Fees::toArray`}),`: () Для обратного преобразования в массив`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`CurrencyValue::fromArray`}),`: () Для создания объектов денежных значений`]}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`toarray`,children:(0,n.jsx)(t.code,{children:`toArray()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Преобразует объект в массив данных
Конвертирует текущий экземпляр класса Fees в массив,
совместимый с форматом API Kinopoisk.dev. Используется для сериализации
данных при отправке запросов к API или для экспорта данных в JSON.
Автоматически преобразует объекты CurrencyValue в массивы для каждого региона.`]}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsx)(t.li,{children:`world: array|null - мировые сборы в формате массива`}),`
`,(0,n.jsx)(t.li,{children:`russia: array|null - сборы в России в формате массива`}),`
`,(0,n.jsx)(t.li,{children:`usa: array|null - сборы в США в формате массива`}),`
`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`array`}),` Массив с данными о кассовых сборах, содержащий ключи:`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`См. также:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`Fees::fromArray`}),`: () Для создания объекта из массива`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`CurrencyValue::toArray`}),`: () Для преобразования денежных значений в массивы`]}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`validate`,children:(0,n.jsx)(t.code,{children:`validate()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Валидирует данные модели`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`bool True`}),` если данные валидны`]})]})}function l(e={}){let{wrapper:t}=e.components||{};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}export{a as _markdown,l as default,r as frontmatter,i as lastModified,o as structuredData,s as toc};