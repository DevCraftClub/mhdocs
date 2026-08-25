import{r as e}from"./rolldown-runtime-QTnfLwEv.js";import{t}from"./jsx-runtime-By8HlURe.js";var n=e(t()),r={title:`ShortImage`},i=new Date(1787654208e3),a=`

**Описание:** Класс для представления упрощенной информации об изображении
Содержит основные данные об изображении, включая URL полного изображения
и URL превью. Используется для хранения информации о постерах, фонах
и других изображениях, связанных с фильмами и сериалами.

**С версии:** 1.0.0

**Версия:** 1.0.0

**См. также:**

* \`\\KinopoiskDev\\Models\\Image\`: Для полной информации об изображении
* \`\\KinopoiskDev\\Models\\Movie\`: Для использования в информации о фильмах

## \`__construct()\` [#__construct]

**Описание:** Конструктор для создания объекта упрощенного изображения
Создает новый экземпляр класса ShortImage с указанными параметрами.
Все параметры являются опциональными и могут быть null при отсутствии
соответствующей информации в источнике данных.

**Параметры:**

* \`$url\` (string|null): URL полного изображения
* \`$previewUrl\` (string|null): URL превью изображения

**См. также:**

* \`ShortImage::fromArray\`: () Для создания объекта из массива данных API
* \`ShortImage::toArray\`: () Для преобразования объекта в массив

## \`fromArray()\` [#fromarray]

**Описание:** Создает объект ShortImage из массива данных API
Фабричный метод для создания экземпляра класса ShortImage из массива данных,
полученных от API Kinopoisk.dev. Безопасно обрабатывает отсутствующие
значения, устанавливая их в null.

* url: string|null - URL полного изображения
* previewUrl: string|null - URL превью изображения

**Параметры:**

* \`$data\` (array): Массив данных об изображении от API, содержащий ключи:

**Возвращает:** \`\\KinopoiskDev\\Models\\ShortImage\` Новый экземпляр класса ShortImage с данными из массива

**См. также:**

* \`ShortImage::toArray\`: () Для обратного преобразования в массив

## \`toArray()\` [#toarray]

**Описание:** Преобразует объект в массив данных
Конвертирует текущий экземпляр класса ShortImage в массив,
совместимый с форматом API Kinopoisk.dev. Используется для сериализации
данных при отправке запросов к API или для экспорта данных.

**Возвращает:** \`array\` Массив с данными об изображении, содержащий все поля объекта

**См. также:**

* \`ShortImage::fromArray\`: () Для создания объекта из массива

## \`validate()\` [#validate]

**Описание:** Валидирует данные модели

**Возвращает:** \`bool True\` если данные валидны
`,o={contents:[{heading:void 0,content:`**Описание:** Класс для представления упрощенной информации об изображении
Содержит основные данные об изображении, включая URL полного изображения
и URL превью. Используется для хранения информации о постерах, фонах
и других изображениях, связанных с фильмами и сериалами.`},{heading:void 0,content:`**С версии:** 1.0.0`},{heading:void 0,content:`**Версия:** 1.0.0`},{heading:void 0,content:`**См. также:**`},{heading:void 0,content:"`\\KinopoiskDev\\Models\\Image`: Для полной информации об изображении"},{heading:void 0,content:"`\\KinopoiskDev\\Models\\Movie`: Для использования в информации о фильмах"},{heading:`__construct`,content:`**Описание:** Конструктор для создания объекта упрощенного изображения
Создает новый экземпляр класса ShortImage с указанными параметрами.
Все параметры являются опциональными и могут быть null при отсутствии
соответствующей информации в источнике данных.`},{heading:`__construct`,content:`**Параметры:**`},{heading:`__construct`,content:"`$url` (string|null): URL полного изображения"},{heading:`__construct`,content:"`$previewUrl` (string|null): URL превью изображения"},{heading:`__construct`,content:`**См. также:**`},{heading:`__construct`,content:"`ShortImage::fromArray`: () Для создания объекта из массива данных API"},{heading:`__construct`,content:"`ShortImage::toArray`: () Для преобразования объекта в массив"},{heading:`fromarray`,content:`**Описание:** Создает объект ShortImage из массива данных API
Фабричный метод для создания экземпляра класса ShortImage из массива данных,
полученных от API Kinopoisk.dev. Безопасно обрабатывает отсутствующие
значения, устанавливая их в null.`},{heading:`fromarray`,content:`url: string|null - URL полного изображения`},{heading:`fromarray`,content:`previewUrl: string|null - URL превью изображения`},{heading:`fromarray`,content:`**Параметры:**`},{heading:`fromarray`,content:"`$data` (array): Массив данных об изображении от API, содержащий ключи:"},{heading:`fromarray`,content:"**Возвращает:** `\\KinopoiskDev\\Models\\ShortImage` Новый экземпляр класса ShortImage с данными из массива"},{heading:`fromarray`,content:`**См. также:**`},{heading:`fromarray`,content:"`ShortImage::toArray`: () Для обратного преобразования в массив"},{heading:`toarray`,content:`**Описание:** Преобразует объект в массив данных
Конвертирует текущий экземпляр класса ShortImage в массив,
совместимый с форматом API Kinopoisk.dev. Используется для сериализации
данных при отправке запросов к API или для экспорта данных.`},{heading:`toarray`,content:"**Возвращает:** `array` Массив с данными об изображении, содержащий все поля объекта"},{heading:`toarray`,content:`**См. также:**`},{heading:`toarray`,content:"`ShortImage::fromArray`: () Для создания объекта из массива"},{heading:`validate`,content:`**Описание:** Валидирует данные модели`},{heading:`validate`,content:"**Возвращает:** `bool True` если данные валидны"}],headings:[{id:`__construct`,content:"`__construct()`"},{id:`fromarray`,content:"`fromArray()`"},{id:`toarray`,content:"`toArray()`"},{id:`validate`,content:"`validate()`"}]},s=[{depth:2,url:`#__construct`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`__construct()`})})},{depth:2,url:`#fromarray`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`fromArray()`})})},{depth:2,url:`#toarray`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`toArray()`})})},{depth:2,url:`#validate`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`validate()`})})}];function c(e){let t={code:`code`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Класс для представления упрощенной информации об изображении
Содержит основные данные об изображении, включая URL полного изображения
и URL превью. Используется для хранения информации о постерах, фонах
и других изображениях, связанных с фильмами и сериалами.`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 1.0.0`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Версия:`}),` 1.0.0`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`См. также:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`\\KinopoiskDev\\Models\\Image`}),`: Для полной информации об изображении`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`\\KinopoiskDev\\Models\\Movie`}),`: Для использования в информации о фильмах`]}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`__construct`,children:(0,n.jsx)(t.code,{children:`__construct()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Конструктор для создания объекта упрощенного изображения
Создает новый экземпляр класса ShortImage с указанными параметрами.
Все параметры являются опциональными и могут быть null при отсутствии
соответствующей информации в источнике данных.`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$url`}),` (string|null): URL полного изображения`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$previewUrl`}),` (string|null): URL превью изображения`]}),`
`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`См. также:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`ShortImage::fromArray`}),`: () Для создания объекта из массива данных API`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`ShortImage::toArray`}),`: () Для преобразования объекта в массив`]}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`fromarray`,children:(0,n.jsx)(t.code,{children:`fromArray()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Создает объект ShortImage из массива данных API
Фабричный метод для создания экземпляра класса ShortImage из массива данных,
полученных от API Kinopoisk.dev. Безопасно обрабатывает отсутствующие
значения, устанавливая их в null.`]}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsx)(t.li,{children:`url: string|null - URL полного изображения`}),`
`,(0,n.jsx)(t.li,{children:`previewUrl: string|null - URL превью изображения`}),`
`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$data`}),` (array): Массив данных об изображении от API, содержащий ключи:`]}),`
`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`\\KinopoiskDev\\Models\\ShortImage`}),` Новый экземпляр класса ShortImage с данными из массива`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`См. также:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`ShortImage::toArray`}),`: () Для обратного преобразования в массив`]}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`toarray`,children:(0,n.jsx)(t.code,{children:`toArray()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Преобразует объект в массив данных
Конвертирует текущий экземпляр класса ShortImage в массив,
совместимый с форматом API Kinopoisk.dev. Используется для сериализации
данных при отправке запросов к API или для экспорта данных.`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`array`}),` Массив с данными об изображении, содержащий все поля объекта`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`См. также:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`ShortImage::fromArray`}),`: () Для создания объекта из массива`]}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`validate`,children:(0,n.jsx)(t.code,{children:`validate()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Валидирует данные модели`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`bool True`}),` если данные валидны`]})]})}function l(e={}){let{wrapper:t}=e.components||{};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}export{a as _markdown,l as default,r as frontmatter,i as lastModified,o as structuredData,s as toc};