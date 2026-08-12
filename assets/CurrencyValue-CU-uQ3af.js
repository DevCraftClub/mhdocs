import{r as e}from"./rolldown-runtime-QTnfLwEv.js";import{t}from"./jsx-runtime-By8HlURe.js";var n=e(t()),r={title:`CurrencyValue`},i=new Date(1786541452e3),a=`

**Описание:** Класс для представления денежных значений с валютой
Представляет денежное значение с указанием валюты, используемое для
хранения информации о кассовых сборах фильмов, бюджете и других
финансовых данных в системе Kinopoisk.dev. Поддерживает различные
валюты и обрабатывает отсутствующие значения.

**С версии:** 1.0.0

**Версия:** 1.0.0

**См. также:**

* \`\\KinopoiskDev\\Models\\Budget\`: Для информации о бюджете фильма
* \`\\KinopoiskDev\\Models\\Fees\`: Для информации о кассовых сборах

## \`__construct()\` [#__construct]

**Описание:** Конструктор для создания объекта денежного значения
Создает новый экземпляр класса CurrencyValue с указанными значением
и валютой. Все параметры являются опциональными и могут быть null
при отсутствии данных о денежном значении или валюте.

**Параметры:**

* \`$value\` (int|null): Денежное значение в указанной валюте (null если не указано)
* \`$currency\` (string|null): Код валюты (например, USD, RUB, EUR) или null если не указана

**См. также:**

* \`CurrencyValue::fromArray\`: () Для создания объекта из массива данных API
* \`CurrencyValue::toArray\`: () Для преобразования объекта в массив

## \`fromJson()\` [#fromjson]

**Описание:** Создает объект из JSON строки

**Параметры:**

* \`$json\` (string): JSON строка

**Возвращает:** \`static\` Экземпляр модели

## \`fromArray()\` [#fromarray]

**Описание:** Создает объект CurrencyValue из массива данных API
Фабричный метод для создания экземпляра класса CurrencyValue из массива
данных, полученных от API Kinopoisk.dev. Безопасно обрабатывает отсутствующие
значения, устанавливая их в null. Используется для десериализации данных
о денежных значениях из ответов API.

* value: int|null - денежное значение
* currency: string|null - код валюты

**Возвращает:** \`static\` Новый экземпляр класса CurrencyValue с данными из массива

**См. также:**

* \`CurrencyValue::toArray\`: () Для обратного преобразования в массив

## \`validate()\` [#validate]

**Описание:** Валидирует данные модели

**Возвращает:** \`bool True\` если данные валидны

## \`toArray()\` [#toarray]

**Описание:** Преобразует объект в массив данных
Конвертирует текущий экземпляр класса CurrencyValue в массив,
совместимый с форматом API Kinopoisk.dev. Используется для сериализации
данных при отправке запросов к API или для экспорта данных в JSON.

* value: int|null - денежное значение
* currency: string|null - код валюты

**Возвращает:** \`array<string, mixed>\` Массив с данными о денежном значении, содержащий ключи:

**См. также:**

* \`CurrencyValue::fromArray\`: () Для создания объекта из массива
`,o={contents:[{heading:void 0,content:`**Описание:** Класс для представления денежных значений с валютой
Представляет денежное значение с указанием валюты, используемое для
хранения информации о кассовых сборах фильмов, бюджете и других
финансовых данных в системе Kinopoisk.dev. Поддерживает различные
валюты и обрабатывает отсутствующие значения.`},{heading:void 0,content:`**С версии:** 1.0.0`},{heading:void 0,content:`**Версия:** 1.0.0`},{heading:void 0,content:`**См. также:**`},{heading:void 0,content:"`\\KinopoiskDev\\Models\\Budget`: Для информации о бюджете фильма"},{heading:void 0,content:"`\\KinopoiskDev\\Models\\Fees`: Для информации о кассовых сборах"},{heading:`__construct`,content:`**Описание:** Конструктор для создания объекта денежного значения
Создает новый экземпляр класса CurrencyValue с указанными значением
и валютой. Все параметры являются опциональными и могут быть null
при отсутствии данных о денежном значении или валюте.`},{heading:`__construct`,content:`**Параметры:**`},{heading:`__construct`,content:"`$value` (int|null): Денежное значение в указанной валюте (null если не указано)"},{heading:`__construct`,content:"`$currency` (string|null): Код валюты (например, USD, RUB, EUR) или null если не указана"},{heading:`__construct`,content:`**См. также:**`},{heading:`__construct`,content:"`CurrencyValue::fromArray`: () Для создания объекта из массива данных API"},{heading:`__construct`,content:"`CurrencyValue::toArray`: () Для преобразования объекта в массив"},{heading:`fromjson`,content:`**Описание:** Создает объект из JSON строки`},{heading:`fromjson`,content:`**Параметры:**`},{heading:`fromjson`,content:"`$json` (string): JSON строка"},{heading:`fromjson`,content:"**Возвращает:** `static` Экземпляр модели"},{heading:`fromarray`,content:`**Описание:** Создает объект CurrencyValue из массива данных API
Фабричный метод для создания экземпляра класса CurrencyValue из массива
данных, полученных от API Kinopoisk.dev. Безопасно обрабатывает отсутствующие
значения, устанавливая их в null. Используется для десериализации данных
о денежных значениях из ответов API.`},{heading:`fromarray`,content:`value: int|null - денежное значение`},{heading:`fromarray`,content:`currency: string|null - код валюты`},{heading:`fromarray`,content:"**Возвращает:** `static` Новый экземпляр класса CurrencyValue с данными из массива"},{heading:`fromarray`,content:`**См. также:**`},{heading:`fromarray`,content:"`CurrencyValue::toArray`: () Для обратного преобразования в массив"},{heading:`validate`,content:`**Описание:** Валидирует данные модели`},{heading:`validate`,content:"**Возвращает:** `bool True` если данные валидны"},{heading:`toarray`,content:`**Описание:** Преобразует объект в массив данных
Конвертирует текущий экземпляр класса CurrencyValue в массив,
совместимый с форматом API Kinopoisk.dev. Используется для сериализации
данных при отправке запросов к API или для экспорта данных в JSON.`},{heading:`toarray`,content:`value: int|null - денежное значение`},{heading:`toarray`,content:`currency: string|null - код валюты`},{heading:`toarray`,content:"**Возвращает:** `array<string, mixed>` Массив с данными о денежном значении, содержащий ключи:"},{heading:`toarray`,content:`**См. также:**`},{heading:`toarray`,content:"`CurrencyValue::fromArray`: () Для создания объекта из массива"}],headings:[{id:`__construct`,content:"`__construct()`"},{id:`fromjson`,content:"`fromJson()`"},{id:`fromarray`,content:"`fromArray()`"},{id:`validate`,content:"`validate()`"},{id:`toarray`,content:"`toArray()`"}]},s=[{depth:2,url:`#__construct`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`__construct()`})})},{depth:2,url:`#fromjson`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`fromJson()`})})},{depth:2,url:`#fromarray`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`fromArray()`})})},{depth:2,url:`#validate`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`validate()`})})},{depth:2,url:`#toarray`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`toArray()`})})}];function c(e){let t={code:`code`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Класс для представления денежных значений с валютой
Представляет денежное значение с указанием валюты, используемое для
хранения информации о кассовых сборах фильмов, бюджете и других
финансовых данных в системе Kinopoisk.dev. Поддерживает различные
валюты и обрабатывает отсутствующие значения.`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 1.0.0`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Версия:`}),` 1.0.0`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`См. также:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`\\KinopoiskDev\\Models\\Budget`}),`: Для информации о бюджете фильма`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`\\KinopoiskDev\\Models\\Fees`}),`: Для информации о кассовых сборах`]}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`__construct`,children:(0,n.jsx)(t.code,{children:`__construct()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Конструктор для создания объекта денежного значения
Создает новый экземпляр класса CurrencyValue с указанными значением
и валютой. Все параметры являются опциональными и могут быть null
при отсутствии данных о денежном значении или валюте.`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$value`}),` (int|null): Денежное значение в указанной валюте (null если не указано)`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$currency`}),` (string|null): Код валюты (например, USD, RUB, EUR) или null если не указана`]}),`
`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`См. также:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`CurrencyValue::fromArray`}),`: () Для создания объекта из массива данных API`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`CurrencyValue::toArray`}),`: () Для преобразования объекта в массив`]}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`fromjson`,children:(0,n.jsx)(t.code,{children:`fromJson()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Создает объект из JSON строки`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$json`}),` (string): JSON строка`]}),`
`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`static`}),` Экземпляр модели`]}),`
`,(0,n.jsx)(t.h2,{id:`fromarray`,children:(0,n.jsx)(t.code,{children:`fromArray()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Создает объект CurrencyValue из массива данных API
Фабричный метод для создания экземпляра класса CurrencyValue из массива
данных, полученных от API Kinopoisk.dev. Безопасно обрабатывает отсутствующие
значения, устанавливая их в null. Используется для десериализации данных
о денежных значениях из ответов API.`]}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsx)(t.li,{children:`value: int|null - денежное значение`}),`
`,(0,n.jsx)(t.li,{children:`currency: string|null - код валюты`}),`
`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`static`}),` Новый экземпляр класса CurrencyValue с данными из массива`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`См. также:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`CurrencyValue::toArray`}),`: () Для обратного преобразования в массив`]}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`validate`,children:(0,n.jsx)(t.code,{children:`validate()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Валидирует данные модели`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`bool True`}),` если данные валидны`]}),`
`,(0,n.jsx)(t.h2,{id:`toarray`,children:(0,n.jsx)(t.code,{children:`toArray()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Преобразует объект в массив данных
Конвертирует текущий экземпляр класса CurrencyValue в массив,
совместимый с форматом API Kinopoisk.dev. Используется для сериализации
данных при отправке запросов к API или для экспорта данных в JSON.`]}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsx)(t.li,{children:`value: int|null - денежное значение`}),`
`,(0,n.jsx)(t.li,{children:`currency: string|null - код валюты`}),`
`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`array<string, mixed>`}),` Массив с данными о денежном значении, содержащий ключи:`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`См. также:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`CurrencyValue::fromArray`}),`: () Для создания объекта из массива`]}),`
`]})]})}function l(e={}){let{wrapper:t}=e.components||{};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}export{a as _markdown,l as default,r as frontmatter,i as lastModified,o as structuredData,s as toc};