import{r as e}from"./rolldown-runtime-QTnfLwEv.js";import{t}from"./jsx-runtime-By8HlURe.js";var n=e(t()),r={title:`WatchabilityItem`},i=new Date(1786951824e3),a=`

**Описание:** Класс для представления элемента доступности просмотра
Представляет информацию об отдельной платформе или сервисе, где доступен
просмотр фильма или сериала. Содержит название сервиса, логотип и URL
для перехода на страницу просмотра. Используется в составе коллекции
Watchability для отображения всех доступных вариантов просмотра.

**С версии:** 1.0.0

**Версия:** 1.0.0

**См. также:**

* \`\\KinopoiskDev\\Models\\Watchability\`: Для коллекции элементов доступности
* \`\\KinopoiskDev\\Models\\Logo\`: Для работы с логотипами сервисов

## \`__construct()\` [#__construct]

**Описание:** Конструктор для создания объекта элемента доступности просмотра
Создает новый экземпляр класса WatchabilityItem с указанными параметрами.
Содержит информацию о конкретном сервисе для просмотра фильма или сериала,
включая название, логотип и URL для перехода.

**Параметры:**

* \`$logo\` (Logo): Логотип сервиса (обязательный параметр)
* \`$url\` (string): URL для перехода на страницу просмотра (обязательный параметр)
* \`$name\` (string|null): Название сервиса или платформы (может быть null)

**См. также:**

* \`WatchabilityItem::fromArray\`: () Для создания объекта из массива данных API
* \`WatchabilityItem::toArray\`: () Для преобразования объекта в массив
* \`Logo\`: Для структуры объекта логотипа

## \`fromArray()\` [#fromarray]

**Описание:** Создает объект WatchabilityItem из массива данных API
Фабричный метод для создания экземпляра класса WatchabilityItem из массива данных,
полученных от API Kinopoisk.dev. Безопасно обрабатывает отсутствующие
значения и создает вложенный объект Logo из соответствующих данных.

* name: string|null - название сервиса (опционально)
* logo: array - данные о логотипе сервиса (обязательно)
* url: string - URL для перехода на страницу просмотра (обязательно)

**Параметры:**

* \`$data\` (array): Массив данных о сервисе просмотра от API, содержащий ключи:

**Возвращает:** \`\\KinopoiskDev\\Models\\WatchabilityItem\` Новый экземпляр класса WatchabilityItem с данными из массива

**См. также:**

* \`WatchabilityItem::toArray\`: () Для обратного преобразования в массив
* \`Logo::fromArray\`: () Для создания объекта логотипа

## \`toArray()\` [#toarray]

**Описание:** Преобразует объект в массив данных
Конвертирует текущий экземпляр класса WatchabilityItem в массив,
совместимый с форматом API Kinopoisk.dev. Преобразует вложенный
объект Logo в массив. Используется для сериализации данных
при отправке запросов к API или для экспорта данных.

* name: string|null - название сервиса
* logo: array - данные о логотипе сервиса
* url: string - URL для перехода на страницу просмотра

**Возвращает:** \`array\` Массив с данными о сервисе просмотра, содержащий ключи:

**См. также:**

* \`WatchabilityItem::fromArray\`: () Для создания объекта из массива
* \`Logo::toArray\`: () Для преобразования логотипа в массив

## \`validate()\` [#validate]

**Описание:** Валидирует данные модели

**Возвращает:** \`bool True\` если данные валидны
`,o={contents:[{heading:void 0,content:`**Описание:** Класс для представления элемента доступности просмотра
Представляет информацию об отдельной платформе или сервисе, где доступен
просмотр фильма или сериала. Содержит название сервиса, логотип и URL
для перехода на страницу просмотра. Используется в составе коллекции
Watchability для отображения всех доступных вариантов просмотра.`},{heading:void 0,content:`**С версии:** 1.0.0`},{heading:void 0,content:`**Версия:** 1.0.0`},{heading:void 0,content:`**См. также:**`},{heading:void 0,content:"`\\KinopoiskDev\\Models\\Watchability`: Для коллекции элементов доступности"},{heading:void 0,content:"`\\KinopoiskDev\\Models\\Logo`: Для работы с логотипами сервисов"},{heading:`__construct`,content:`**Описание:** Конструктор для создания объекта элемента доступности просмотра
Создает новый экземпляр класса WatchabilityItem с указанными параметрами.
Содержит информацию о конкретном сервисе для просмотра фильма или сериала,
включая название, логотип и URL для перехода.`},{heading:`__construct`,content:`**Параметры:**`},{heading:`__construct`,content:"`$logo` (Logo): Логотип сервиса (обязательный параметр)"},{heading:`__construct`,content:"`$url` (string): URL для перехода на страницу просмотра (обязательный параметр)"},{heading:`__construct`,content:"`$name` (string|null): Название сервиса или платформы (может быть null)"},{heading:`__construct`,content:`**См. также:**`},{heading:`__construct`,content:"`WatchabilityItem::fromArray`: () Для создания объекта из массива данных API"},{heading:`__construct`,content:"`WatchabilityItem::toArray`: () Для преобразования объекта в массив"},{heading:`__construct`,content:"`Logo`: Для структуры объекта логотипа"},{heading:`fromarray`,content:`**Описание:** Создает объект WatchabilityItem из массива данных API
Фабричный метод для создания экземпляра класса WatchabilityItem из массива данных,
полученных от API Kinopoisk.dev. Безопасно обрабатывает отсутствующие
значения и создает вложенный объект Logo из соответствующих данных.`},{heading:`fromarray`,content:`name: string|null - название сервиса (опционально)`},{heading:`fromarray`,content:`logo: array - данные о логотипе сервиса (обязательно)`},{heading:`fromarray`,content:`url: string - URL для перехода на страницу просмотра (обязательно)`},{heading:`fromarray`,content:`**Параметры:**`},{heading:`fromarray`,content:"`$data` (array): Массив данных о сервисе просмотра от API, содержащий ключи:"},{heading:`fromarray`,content:"**Возвращает:** `\\KinopoiskDev\\Models\\WatchabilityItem` Новый экземпляр класса WatchabilityItem с данными из массива"},{heading:`fromarray`,content:`**См. также:**`},{heading:`fromarray`,content:"`WatchabilityItem::toArray`: () Для обратного преобразования в массив"},{heading:`fromarray`,content:"`Logo::fromArray`: () Для создания объекта логотипа"},{heading:`toarray`,content:`**Описание:** Преобразует объект в массив данных
Конвертирует текущий экземпляр класса WatchabilityItem в массив,
совместимый с форматом API Kinopoisk.dev. Преобразует вложенный
объект Logo в массив. Используется для сериализации данных
при отправке запросов к API или для экспорта данных.`},{heading:`toarray`,content:`name: string|null - название сервиса`},{heading:`toarray`,content:`logo: array - данные о логотипе сервиса`},{heading:`toarray`,content:`url: string - URL для перехода на страницу просмотра`},{heading:`toarray`,content:"**Возвращает:** `array` Массив с данными о сервисе просмотра, содержащий ключи:"},{heading:`toarray`,content:`**См. также:**`},{heading:`toarray`,content:"`WatchabilityItem::fromArray`: () Для создания объекта из массива"},{heading:`toarray`,content:"`Logo::toArray`: () Для преобразования логотипа в массив"},{heading:`validate`,content:`**Описание:** Валидирует данные модели`},{heading:`validate`,content:"**Возвращает:** `bool True` если данные валидны"}],headings:[{id:`__construct`,content:"`__construct()`"},{id:`fromarray`,content:"`fromArray()`"},{id:`toarray`,content:"`toArray()`"},{id:`validate`,content:"`validate()`"}]},s=[{depth:2,url:`#__construct`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`__construct()`})})},{depth:2,url:`#fromarray`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`fromArray()`})})},{depth:2,url:`#toarray`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`toArray()`})})},{depth:2,url:`#validate`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`validate()`})})}];function c(e){let t={code:`code`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Класс для представления элемента доступности просмотра
Представляет информацию об отдельной платформе или сервисе, где доступен
просмотр фильма или сериала. Содержит название сервиса, логотип и URL
для перехода на страницу просмотра. Используется в составе коллекции
Watchability для отображения всех доступных вариантов просмотра.`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 1.0.0`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Версия:`}),` 1.0.0`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`См. также:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`\\KinopoiskDev\\Models\\Watchability`}),`: Для коллекции элементов доступности`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`\\KinopoiskDev\\Models\\Logo`}),`: Для работы с логотипами сервисов`]}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`__construct`,children:(0,n.jsx)(t.code,{children:`__construct()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Конструктор для создания объекта элемента доступности просмотра
Создает новый экземпляр класса WatchabilityItem с указанными параметрами.
Содержит информацию о конкретном сервисе для просмотра фильма или сериала,
включая название, логотип и URL для перехода.`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$logo`}),` (Logo): Логотип сервиса (обязательный параметр)`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$url`}),` (string): URL для перехода на страницу просмотра (обязательный параметр)`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$name`}),` (string|null): Название сервиса или платформы (может быть null)`]}),`
`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`См. также:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`WatchabilityItem::fromArray`}),`: () Для создания объекта из массива данных API`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`WatchabilityItem::toArray`}),`: () Для преобразования объекта в массив`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`Logo`}),`: Для структуры объекта логотипа`]}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`fromarray`,children:(0,n.jsx)(t.code,{children:`fromArray()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Создает объект WatchabilityItem из массива данных API
Фабричный метод для создания экземпляра класса WatchabilityItem из массива данных,
полученных от API Kinopoisk.dev. Безопасно обрабатывает отсутствующие
значения и создает вложенный объект Logo из соответствующих данных.`]}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsx)(t.li,{children:`name: string|null - название сервиса (опционально)`}),`
`,(0,n.jsx)(t.li,{children:`logo: array - данные о логотипе сервиса (обязательно)`}),`
`,(0,n.jsx)(t.li,{children:`url: string - URL для перехода на страницу просмотра (обязательно)`}),`
`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$data`}),` (array): Массив данных о сервисе просмотра от API, содержащий ключи:`]}),`
`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`\\KinopoiskDev\\Models\\WatchabilityItem`}),` Новый экземпляр класса WatchabilityItem с данными из массива`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`См. также:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`WatchabilityItem::toArray`}),`: () Для обратного преобразования в массив`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`Logo::fromArray`}),`: () Для создания объекта логотипа`]}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`toarray`,children:(0,n.jsx)(t.code,{children:`toArray()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Преобразует объект в массив данных
Конвертирует текущий экземпляр класса WatchabilityItem в массив,
совместимый с форматом API Kinopoisk.dev. Преобразует вложенный
объект Logo в массив. Используется для сериализации данных
при отправке запросов к API или для экспорта данных.`]}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsx)(t.li,{children:`name: string|null - название сервиса`}),`
`,(0,n.jsx)(t.li,{children:`logo: array - данные о логотипе сервиса`}),`
`,(0,n.jsx)(t.li,{children:`url: string - URL для перехода на страницу просмотра`}),`
`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`array`}),` Массив с данными о сервисе просмотра, содержащий ключи:`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`См. также:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`WatchabilityItem::fromArray`}),`: () Для создания объекта из массива`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`Logo::toArray`}),`: () Для преобразования логотипа в массив`]}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`validate`,children:(0,n.jsx)(t.code,{children:`validate()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Валидирует данные модели`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`bool True`}),` если данные валидны`]})]})}function l(e={}){let{wrapper:t}=e.components||{};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}export{a as _markdown,l as default,r as frontmatter,i as lastModified,o as structuredData,s as toc};