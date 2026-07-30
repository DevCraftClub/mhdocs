import{r as e}from"./rolldown-runtime-QTnfLwEv.js";import{t}from"./jsx-runtime-By8HlURe.js";var n=e(t()),r={title:`LinkedMovie`},i=new Date(1785400635e3),a=`

**Описание:** Класс для представления связанного фильма
Представляет упрощенную информацию о фильме, используемую в связанных
записях и ассоциациях. Содержит основные данные о фильме: идентификатор,
названия, тип, постер, рейтинг и год выпуска. Используется для отображения
связанных фильмов (похожие фильмы, сиквелы, приквелы и т.д.) без
необходимости загрузки полной информации.

**С версии:** 1.0.0

**Версия:** 1.0.0

**См. также:**

* \`\\KinopoiskDev\\Models\\Movie\`: Для полной информации о фильме
* \`\\KinopoiskDev\\Enums\\MovieType\`: Для типов фильмов
* \`\\KinopoiskDev\\Models\\ShortImage\`: Для изображений
* \`\\KinopoiskDev\\Models\\Rating\`: Для рейтингов

## \`__construct()\` [#__construct]

**Описание:** Конструктор для создания экземпляра связанного фильма
Создает новый объект LinkedMovie с указанными параметрами.
Все параметры, кроме идентификатора, являются опциональными и могут
быть null при отсутствии соответствующих данных. Используется для
инициализации объекта с данными о связанном фильме.

**Параметры:**

* \`$id\` (int): Уникальный идентификатор фильма в базе данных
* \`$name\` (string|null): Русское название фильма (null если не указано)
* \`$enName\` (string|null): Английское название фильма (null если не указано)
* \`$alternativeName\` (string|null): Альтернативное название фильма (null если не указано)
* \`$type\` (MovieType|null): Тип фильма (фильм, сериал, мультфильм и т.д.) или null
* \`$poster\` (ShortImage|null): Постер фильма или null если отсутствует
* \`$rating\` (Rating|null): Рейтинги фильма или null если отсутствуют
* \`$year\` (int|null): Год выпуска фильма или null если не указан

## \`fromArray()\` [#fromarray]

**Описание:** Создает объект LinkedMovie из массива данных API
Статический фабричный метод для создания экземпляра класса LinkedMovie
из массива данных, полученных от API Kinopoisk.dev. Безопасно обрабатывает
отсутствующие значения, устанавливая их в null. Автоматически конвертирует
вложенные объекты (тип, постер, рейтинг) в соответствующие классы.

* id: int - уникальный идентификатор
* name: string|null - русское название
* enName: string|null - английское название
* alternativeName: string|null - альтернативное название
* type: string|null - тип фильма
* poster: array|null - данные о постере
* rating: array|null - данные о рейтинге
* year: int|null - год выпуска

**Параметры:**

* \`$data\` (array): Массив данных о связанном фильме от API, содержащий ключи:

**Возвращает:** \`static\` Новый экземпляр класса LinkedMovie с данными из массива

**См. также:**

* \`ShortImage::fromArray\`: () Для создания объекта постера
* \`Rating::fromArray\`: () Для создания объекта рейтинга
* \`MovieType::tryFrom\`: () Для создания enum типа фильма

## \`toArray()\` [#toarray]

**Описание:** Преобразует объект LinkedMovie в массив данных
Конвертирует текущий экземпляр класса LinkedMovie в массив,
совместимый с форматом API Kinopoisk.dev. Автоматически обрабатывает
вложенные объекты, преобразуя их в соответствующие массивы.
Используется для сериализации данных при отправке запросов к API
или для экспорта данных в JSON.

* id: int - уникальный идентификатор
* name: string|null - русское название
* enName: string|null - английское название
* alternativeName: string|null - альтернативное название
* type: string|null - значение типа фильма
* poster: array|null - данные о постере
* rating: array|null - данные о рейтинге
* year: int|null - год выпуска

**Возвращает:** \`array\` Массив с данными о связанном фильме, содержащий ключи:

**См. также:**

* \`ShortImage::toArray\`: () Для преобразования постера в массив
* \`Rating::toArray\`: () Для преобразования рейтинга в массив

## \`validate()\` [#validate]

**Описание:** Валидирует данные модели

**Возвращает:** \`bool True\` если данные валидны
`,o={contents:[{heading:void 0,content:`**Описание:** Класс для представления связанного фильма
Представляет упрощенную информацию о фильме, используемую в связанных
записях и ассоциациях. Содержит основные данные о фильме: идентификатор,
названия, тип, постер, рейтинг и год выпуска. Используется для отображения
связанных фильмов (похожие фильмы, сиквелы, приквелы и т.д.) без
необходимости загрузки полной информации.`},{heading:void 0,content:`**С версии:** 1.0.0`},{heading:void 0,content:`**Версия:** 1.0.0`},{heading:void 0,content:`**См. также:**`},{heading:void 0,content:"`\\KinopoiskDev\\Models\\Movie`: Для полной информации о фильме"},{heading:void 0,content:"`\\KinopoiskDev\\Enums\\MovieType`: Для типов фильмов"},{heading:void 0,content:"`\\KinopoiskDev\\Models\\ShortImage`: Для изображений"},{heading:void 0,content:"`\\KinopoiskDev\\Models\\Rating`: Для рейтингов"},{heading:`__construct`,content:`**Описание:** Конструктор для создания экземпляра связанного фильма
Создает новый объект LinkedMovie с указанными параметрами.
Все параметры, кроме идентификатора, являются опциональными и могут
быть null при отсутствии соответствующих данных. Используется для
инициализации объекта с данными о связанном фильме.`},{heading:`__construct`,content:`**Параметры:**`},{heading:`__construct`,content:"`$id` (int): Уникальный идентификатор фильма в базе данных"},{heading:`__construct`,content:"`$name` (string|null): Русское название фильма (null если не указано)"},{heading:`__construct`,content:"`$enName` (string|null): Английское название фильма (null если не указано)"},{heading:`__construct`,content:"`$alternativeName` (string|null): Альтернативное название фильма (null если не указано)"},{heading:`__construct`,content:"`$type` (MovieType|null): Тип фильма (фильм, сериал, мультфильм и т.д.) или null"},{heading:`__construct`,content:"`$poster` (ShortImage|null): Постер фильма или null если отсутствует"},{heading:`__construct`,content:"`$rating` (Rating|null): Рейтинги фильма или null если отсутствуют"},{heading:`__construct`,content:"`$year` (int|null): Год выпуска фильма или null если не указан"},{heading:`fromarray`,content:`**Описание:** Создает объект LinkedMovie из массива данных API
Статический фабричный метод для создания экземпляра класса LinkedMovie
из массива данных, полученных от API Kinopoisk.dev. Безопасно обрабатывает
отсутствующие значения, устанавливая их в null. Автоматически конвертирует
вложенные объекты (тип, постер, рейтинг) в соответствующие классы.`},{heading:`fromarray`,content:`id: int - уникальный идентификатор`},{heading:`fromarray`,content:`name: string|null - русское название`},{heading:`fromarray`,content:`enName: string|null - английское название`},{heading:`fromarray`,content:`alternativeName: string|null - альтернативное название`},{heading:`fromarray`,content:`type: string|null - тип фильма`},{heading:`fromarray`,content:`poster: array|null - данные о постере`},{heading:`fromarray`,content:`rating: array|null - данные о рейтинге`},{heading:`fromarray`,content:`year: int|null - год выпуска`},{heading:`fromarray`,content:`**Параметры:**`},{heading:`fromarray`,content:"`$data` (array): Массив данных о связанном фильме от API, содержащий ключи:"},{heading:`fromarray`,content:"**Возвращает:** `static` Новый экземпляр класса LinkedMovie с данными из массива"},{heading:`fromarray`,content:`**См. также:**`},{heading:`fromarray`,content:"`ShortImage::fromArray`: () Для создания объекта постера"},{heading:`fromarray`,content:"`Rating::fromArray`: () Для создания объекта рейтинга"},{heading:`fromarray`,content:"`MovieType::tryFrom`: () Для создания enum типа фильма"},{heading:`toarray`,content:`**Описание:** Преобразует объект LinkedMovie в массив данных
Конвертирует текущий экземпляр класса LinkedMovie в массив,
совместимый с форматом API Kinopoisk.dev. Автоматически обрабатывает
вложенные объекты, преобразуя их в соответствующие массивы.
Используется для сериализации данных при отправке запросов к API
или для экспорта данных в JSON.`},{heading:`toarray`,content:`id: int - уникальный идентификатор`},{heading:`toarray`,content:`name: string|null - русское название`},{heading:`toarray`,content:`enName: string|null - английское название`},{heading:`toarray`,content:`alternativeName: string|null - альтернативное название`},{heading:`toarray`,content:`type: string|null - значение типа фильма`},{heading:`toarray`,content:`poster: array|null - данные о постере`},{heading:`toarray`,content:`rating: array|null - данные о рейтинге`},{heading:`toarray`,content:`year: int|null - год выпуска`},{heading:`toarray`,content:"**Возвращает:** `array` Массив с данными о связанном фильме, содержащий ключи:"},{heading:`toarray`,content:`**См. также:**`},{heading:`toarray`,content:"`ShortImage::toArray`: () Для преобразования постера в массив"},{heading:`toarray`,content:"`Rating::toArray`: () Для преобразования рейтинга в массив"},{heading:`validate`,content:`**Описание:** Валидирует данные модели`},{heading:`validate`,content:"**Возвращает:** `bool True` если данные валидны"}],headings:[{id:`__construct`,content:"`__construct()`"},{id:`fromarray`,content:"`fromArray()`"},{id:`toarray`,content:"`toArray()`"},{id:`validate`,content:"`validate()`"}]},s=[{depth:2,url:`#__construct`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`__construct()`})})},{depth:2,url:`#fromarray`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`fromArray()`})})},{depth:2,url:`#toarray`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`toArray()`})})},{depth:2,url:`#validate`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`validate()`})})}];function c(e){let t={code:`code`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Класс для представления связанного фильма
Представляет упрощенную информацию о фильме, используемую в связанных
записях и ассоциациях. Содержит основные данные о фильме: идентификатор,
названия, тип, постер, рейтинг и год выпуска. Используется для отображения
связанных фильмов (похожие фильмы, сиквелы, приквелы и т.д.) без
необходимости загрузки полной информации.`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 1.0.0`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Версия:`}),` 1.0.0`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`См. также:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`\\KinopoiskDev\\Models\\Movie`}),`: Для полной информации о фильме`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`\\KinopoiskDev\\Enums\\MovieType`}),`: Для типов фильмов`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`\\KinopoiskDev\\Models\\ShortImage`}),`: Для изображений`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`\\KinopoiskDev\\Models\\Rating`}),`: Для рейтингов`]}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`__construct`,children:(0,n.jsx)(t.code,{children:`__construct()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Конструктор для создания экземпляра связанного фильма
Создает новый объект LinkedMovie с указанными параметрами.
Все параметры, кроме идентификатора, являются опциональными и могут
быть null при отсутствии соответствующих данных. Используется для
инициализации объекта с данными о связанном фильме.`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$id`}),` (int): Уникальный идентификатор фильма в базе данных`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$name`}),` (string|null): Русское название фильма (null если не указано)`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$enName`}),` (string|null): Английское название фильма (null если не указано)`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$alternativeName`}),` (string|null): Альтернативное название фильма (null если не указано)`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$type`}),` (MovieType|null): Тип фильма (фильм, сериал, мультфильм и т.д.) или null`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$poster`}),` (ShortImage|null): Постер фильма или null если отсутствует`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$rating`}),` (Rating|null): Рейтинги фильма или null если отсутствуют`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$year`}),` (int|null): Год выпуска фильма или null если не указан`]}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`fromarray`,children:(0,n.jsx)(t.code,{children:`fromArray()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Создает объект LinkedMovie из массива данных API
Статический фабричный метод для создания экземпляра класса LinkedMovie
из массива данных, полученных от API Kinopoisk.dev. Безопасно обрабатывает
отсутствующие значения, устанавливая их в null. Автоматически конвертирует
вложенные объекты (тип, постер, рейтинг) в соответствующие классы.`]}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsx)(t.li,{children:`id: int - уникальный идентификатор`}),`
`,(0,n.jsx)(t.li,{children:`name: string|null - русское название`}),`
`,(0,n.jsx)(t.li,{children:`enName: string|null - английское название`}),`
`,(0,n.jsx)(t.li,{children:`alternativeName: string|null - альтернативное название`}),`
`,(0,n.jsx)(t.li,{children:`type: string|null - тип фильма`}),`
`,(0,n.jsx)(t.li,{children:`poster: array|null - данные о постере`}),`
`,(0,n.jsx)(t.li,{children:`rating: array|null - данные о рейтинге`}),`
`,(0,n.jsx)(t.li,{children:`year: int|null - год выпуска`}),`
`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$data`}),` (array): Массив данных о связанном фильме от API, содержащий ключи:`]}),`
`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`static`}),` Новый экземпляр класса LinkedMovie с данными из массива`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`См. также:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`ShortImage::fromArray`}),`: () Для создания объекта постера`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`Rating::fromArray`}),`: () Для создания объекта рейтинга`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`MovieType::tryFrom`}),`: () Для создания enum типа фильма`]}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`toarray`,children:(0,n.jsx)(t.code,{children:`toArray()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Преобразует объект LinkedMovie в массив данных
Конвертирует текущий экземпляр класса LinkedMovie в массив,
совместимый с форматом API Kinopoisk.dev. Автоматически обрабатывает
вложенные объекты, преобразуя их в соответствующие массивы.
Используется для сериализации данных при отправке запросов к API
или для экспорта данных в JSON.`]}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsx)(t.li,{children:`id: int - уникальный идентификатор`}),`
`,(0,n.jsx)(t.li,{children:`name: string|null - русское название`}),`
`,(0,n.jsx)(t.li,{children:`enName: string|null - английское название`}),`
`,(0,n.jsx)(t.li,{children:`alternativeName: string|null - альтернативное название`}),`
`,(0,n.jsx)(t.li,{children:`type: string|null - значение типа фильма`}),`
`,(0,n.jsx)(t.li,{children:`poster: array|null - данные о постере`}),`
`,(0,n.jsx)(t.li,{children:`rating: array|null - данные о рейтинге`}),`
`,(0,n.jsx)(t.li,{children:`year: int|null - год выпуска`}),`
`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`array`}),` Массив с данными о связанном фильме, содержащий ключи:`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`См. также:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`ShortImage::toArray`}),`: () Для преобразования постера в массив`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`Rating::toArray`}),`: () Для преобразования рейтинга в массив`]}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`validate`,children:(0,n.jsx)(t.code,{children:`validate()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Валидирует данные модели`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`bool True`}),` если данные валидны`]})]})}function l(e={}){let{wrapper:t}=e.components||{};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}export{a as _markdown,l as default,r as frontmatter,i as lastModified,o as structuredData,s as toc};