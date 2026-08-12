import{r as e}from"./rolldown-runtime-QTnfLwEv.js";import{t}from"./jsx-runtime-By8HlURe.js";var n=e(t()),r={title:`Video`},i=new Date(1786544989e3),a=`

**Описание:** Класс для представления видеоматериала
Содержит информацию о видеоматериале, связанном с фильмом или сериалом,
включая URL, название, тип, размер и источник. Используется для хранения
данных о трейлерах, тизерах и других видеоматериалах.

**С версии:** 1.0.0

**Версия:** 1.0.0

**См. также:**

* \`\\KinopoiskDev\\Models\\VideoTypes\`: Для коллекции видеоматериалов
* \`\\KinopoiskDev\\Models\\Movie\`: Для использования в информации о фильмах

## \`__construct()\` [#__construct]

**Описание:** Конструктор для создания объекта видеоматериала
Создает новый экземпляр класса Video с указанными параметрами.
Большинство параметров являются опциональными и могут быть null при отсутствии
соответствующей информации в источнике данных.

**Параметры:**

* \`$url\` (string|null): URL видеоматериала
* \`$name\` (string|null): Название видеоматериала
* \`$site\` (string|null): Источник видеоматериала (например, YouTube)
* \`$size\` (int|null): Размер видеоматериала
* \`$type\` (string|null): Тип видеоматериала (например, трейлер, тизер)

**См. также:**

* \`Video::fromArray\`: () Для создания объекта из массива данных API
* \`Video::toArray\`: () Для преобразования объекта в массив

## \`fromArray()\` [#fromarray]

**Описание:** Создает объект Video из массива данных API
Фабричный метод для создания экземпляра класса Video из массива данных,
полученных от API Kinopoisk.dev. Безопасно обрабатывает отсутствующие
значения, устанавливая их в null.

* url: string|null - URL видеоматериала
* name: string|null - название видеоматериала
* site: string|null - источник видеоматериала
* size: int|null - размер видеоматериала
* type: string|null - тип видеоматериала

**Параметры:**

* \`$data\` (array): Массив данных о видеоматериале от API, содержащий ключи:

**Возвращает:** \`\\KinopoiskDev\\Models\\Video\` Новый экземпляр класса Video с данными из массива

**См. также:**

* \`Video::toArray\`: () Для обратного преобразования в массив

## \`toArray()\` [#toarray]

**Описание:** Преобразует объект в массив данных
Конвертирует текущий экземпляр класса Video в массив,
совместимый с форматом API Kinopoisk.dev. Используется для сериализации
данных при отправке запросов к API или для экспорта данных.

**Возвращает:** \`array\` Массив с данными о видеоматериале, содержащий все поля объекта

**См. также:**

* \`Video::fromArray\`: () Для создания объекта из массива

## \`validate()\` [#validate]

**Описание:** Валидирует данные модели

**Возвращает:** \`bool True\` если данные валидны
`,o={contents:[{heading:void 0,content:`**Описание:** Класс для представления видеоматериала
Содержит информацию о видеоматериале, связанном с фильмом или сериалом,
включая URL, название, тип, размер и источник. Используется для хранения
данных о трейлерах, тизерах и других видеоматериалах.`},{heading:void 0,content:`**С версии:** 1.0.0`},{heading:void 0,content:`**Версия:** 1.0.0`},{heading:void 0,content:`**См. также:**`},{heading:void 0,content:"`\\KinopoiskDev\\Models\\VideoTypes`: Для коллекции видеоматериалов"},{heading:void 0,content:"`\\KinopoiskDev\\Models\\Movie`: Для использования в информации о фильмах"},{heading:`__construct`,content:`**Описание:** Конструктор для создания объекта видеоматериала
Создает новый экземпляр класса Video с указанными параметрами.
Большинство параметров являются опциональными и могут быть null при отсутствии
соответствующей информации в источнике данных.`},{heading:`__construct`,content:`**Параметры:**`},{heading:`__construct`,content:"`$url` (string|null): URL видеоматериала"},{heading:`__construct`,content:"`$name` (string|null): Название видеоматериала"},{heading:`__construct`,content:"`$site` (string|null): Источник видеоматериала (например, YouTube)"},{heading:`__construct`,content:"`$size` (int|null): Размер видеоматериала"},{heading:`__construct`,content:"`$type` (string|null): Тип видеоматериала (например, трейлер, тизер)"},{heading:`__construct`,content:`**См. также:**`},{heading:`__construct`,content:"`Video::fromArray`: () Для создания объекта из массива данных API"},{heading:`__construct`,content:"`Video::toArray`: () Для преобразования объекта в массив"},{heading:`fromarray`,content:`**Описание:** Создает объект Video из массива данных API
Фабричный метод для создания экземпляра класса Video из массива данных,
полученных от API Kinopoisk.dev. Безопасно обрабатывает отсутствующие
значения, устанавливая их в null.`},{heading:`fromarray`,content:`url: string|null - URL видеоматериала`},{heading:`fromarray`,content:`name: string|null - название видеоматериала`},{heading:`fromarray`,content:`site: string|null - источник видеоматериала`},{heading:`fromarray`,content:`size: int|null - размер видеоматериала`},{heading:`fromarray`,content:`type: string|null - тип видеоматериала`},{heading:`fromarray`,content:`**Параметры:**`},{heading:`fromarray`,content:"`$data` (array): Массив данных о видеоматериале от API, содержащий ключи:"},{heading:`fromarray`,content:"**Возвращает:** `\\KinopoiskDev\\Models\\Video` Новый экземпляр класса Video с данными из массива"},{heading:`fromarray`,content:`**См. также:**`},{heading:`fromarray`,content:"`Video::toArray`: () Для обратного преобразования в массив"},{heading:`toarray`,content:`**Описание:** Преобразует объект в массив данных
Конвертирует текущий экземпляр класса Video в массив,
совместимый с форматом API Kinopoisk.dev. Используется для сериализации
данных при отправке запросов к API или для экспорта данных.`},{heading:`toarray`,content:"**Возвращает:** `array` Массив с данными о видеоматериале, содержащий все поля объекта"},{heading:`toarray`,content:`**См. также:**`},{heading:`toarray`,content:"`Video::fromArray`: () Для создания объекта из массива"},{heading:`validate`,content:`**Описание:** Валидирует данные модели`},{heading:`validate`,content:"**Возвращает:** `bool True` если данные валидны"}],headings:[{id:`__construct`,content:"`__construct()`"},{id:`fromarray`,content:"`fromArray()`"},{id:`toarray`,content:"`toArray()`"},{id:`validate`,content:"`validate()`"}]},s=[{depth:2,url:`#__construct`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`__construct()`})})},{depth:2,url:`#fromarray`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`fromArray()`})})},{depth:2,url:`#toarray`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`toArray()`})})},{depth:2,url:`#validate`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`validate()`})})}];function c(e){let t={code:`code`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Класс для представления видеоматериала
Содержит информацию о видеоматериале, связанном с фильмом или сериалом,
включая URL, название, тип, размер и источник. Используется для хранения
данных о трейлерах, тизерах и других видеоматериалах.`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 1.0.0`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Версия:`}),` 1.0.0`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`См. также:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`\\KinopoiskDev\\Models\\VideoTypes`}),`: Для коллекции видеоматериалов`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`\\KinopoiskDev\\Models\\Movie`}),`: Для использования в информации о фильмах`]}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`__construct`,children:(0,n.jsx)(t.code,{children:`__construct()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Конструктор для создания объекта видеоматериала
Создает новый экземпляр класса Video с указанными параметрами.
Большинство параметров являются опциональными и могут быть null при отсутствии
соответствующей информации в источнике данных.`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$url`}),` (string|null): URL видеоматериала`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$name`}),` (string|null): Название видеоматериала`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$site`}),` (string|null): Источник видеоматериала (например, YouTube)`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$size`}),` (int|null): Размер видеоматериала`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$type`}),` (string|null): Тип видеоматериала (например, трейлер, тизер)`]}),`
`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`См. также:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`Video::fromArray`}),`: () Для создания объекта из массива данных API`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`Video::toArray`}),`: () Для преобразования объекта в массив`]}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`fromarray`,children:(0,n.jsx)(t.code,{children:`fromArray()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Создает объект Video из массива данных API
Фабричный метод для создания экземпляра класса Video из массива данных,
полученных от API Kinopoisk.dev. Безопасно обрабатывает отсутствующие
значения, устанавливая их в null.`]}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsx)(t.li,{children:`url: string|null - URL видеоматериала`}),`
`,(0,n.jsx)(t.li,{children:`name: string|null - название видеоматериала`}),`
`,(0,n.jsx)(t.li,{children:`site: string|null - источник видеоматериала`}),`
`,(0,n.jsx)(t.li,{children:`size: int|null - размер видеоматериала`}),`
`,(0,n.jsx)(t.li,{children:`type: string|null - тип видеоматериала`}),`
`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$data`}),` (array): Массив данных о видеоматериале от API, содержащий ключи:`]}),`
`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`\\KinopoiskDev\\Models\\Video`}),` Новый экземпляр класса Video с данными из массива`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`См. также:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`Video::toArray`}),`: () Для обратного преобразования в массив`]}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`toarray`,children:(0,n.jsx)(t.code,{children:`toArray()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Преобразует объект в массив данных
Конвертирует текущий экземпляр класса Video в массив,
совместимый с форматом API Kinopoisk.dev. Используется для сериализации
данных при отправке запросов к API или для экспорта данных.`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`array`}),` Массив с данными о видеоматериале, содержащий все поля объекта`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`См. также:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`Video::fromArray`}),`: () Для создания объекта из массива`]}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`validate`,children:(0,n.jsx)(t.code,{children:`validate()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Валидирует данные модели`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`bool True`}),` если данные валидны`]})]})}function l(e={}){let{wrapper:t}=e.components||{};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}export{a as _markdown,l as default,r as frontmatter,i as lastModified,o as structuredData,s as toc};