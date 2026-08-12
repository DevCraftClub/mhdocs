import{r as e}from"./rolldown-runtime-QTnfLwEv.js";import{t}from"./jsx-runtime-By8HlURe.js";var n=e(t()),r={title:`SearchMovie`},i=new Date(1786541452e3),a=`

**Описание:** Класс для представления результатов поиска фильмов
Представляет данные о фильме, полученные при выполнении поиска через API Kinopoisk.dev.
Содержит основную информацию о фильме, включая идентификатор, названия, рейтинги,
постеры, жанры и другие метаданные. Используется для отображения результатов поиска
без необходимости загрузки полной информации о фильме.

**С версии:** 1.0.0

**Версия:** 1.0.0

**См. также:**

* \`\\KinopoiskDev\\Models\\Movie\`: Для полной информации о фильме
* \`\\KinopoiskDev\\Models\\Name\`: Для названий фильмов
* \`\\KinopoiskDev\\Models\\ExternalId\`: Для внешних идентификаторов
* \`\\KinopoiskDev\\Models\\Rating\`: Для рейтингов
* \`\\KinopoiskDev\\Models\\ShortImage\`: Для изображений
* \`\\KinopoiskDev\\Models\\ItemName\`: Для жанров и стран
* \`\\KinopoiskDev\\Models\\YearRange\`: Для годов выпуска
* \`\\KinopoiskDev\\Models\\Logo\`: Для логотипов
* \`\\KinopoiskDev\\Models\\Votes\`: Для голосов

## \`__construct()\` [#__construct]

**Описание:** Конструктор для создания объекта результата поиска фильма
Создает новый экземпляр класса SearchMovie с указанными параметрами.
Большинство параметров являются опциональными и могут быть null при отсутствии
соответствующей информации в источнике данных. Только идентификатор является
обязательным параметром.

**Параметры:**

* \`$id\` (int): Уникальный идентификатор фильма в системе Kinopoisk
* \`$name\` (string|null): Название фильма на русском языке
* \`$alternativeName\` (string|null): Альтернативное название фильма
* \`$enName\` (string|null): Название фильма на английском языке
* \`$type\` (\\KinopoiskDev\\Enums\\MovieType|null): Тип фильма (фильм, сериал, мультфильм и т.д.)
* \`$year\` (int|null): Год выпуска фильма
* \`$description\` (string|null): Полное описание сюжета фильма
* \`$shortDescription\` (string|null): Краткое описание фильма
* \`$movieLength\` (int|null): Длительность фильма в минутах
* \`$names\` (\\KinopoiskDev\\Models\\Name\\[]|null): Массив всех названий фильма на разных языках
* \`$externalId\` (ExternalId|null): Внешние идентификаторы (IMDB, TMDB, KinopoiskHD)
* \`$logo\` (Logo|null): Логотип фильма
* \`$poster\` (ShortImage|null): Постер фильма
* \`$backdrop\` (ShortImage|null): Фоновое изображение фильма
* \`$rating\` (Rating|null): Рейтинг фильма
* \`$votes\` (Votes|null): Информация о голосах
* \`$genres\` (\\KinopoiskDev\\Models\\ItemName\\[]|null): Массив жанров фильма
* \`$countries\` (\\KinopoiskDev\\Models\\ItemName\\[]|null): Массив стран производства фильма
* \`$releaseYears\` (\\KinopoiskDev\\Models\\YearRange\\[]|null): Массив годов выпуска для разных стран
* \`$isSeries\` (bool|null): Является ли произведение сериалом
* \`$ticketsOnSale\` (bool|null): Доступны ли билеты к покупке
* \`$totalSeriesLength\` (int|null): Общее количество серий
* \`$seriesLength\` (int|null): Количество серий в сезоне
* \`$ratingMpaa\` (\\KinopoiskDev\\Enums\\RatingMpaa|null): Рейтинг MPAA (G, PG, PG-13, R, NC-17)
* \`$ageRating\` (int|null): Возрастной рейтинг
* \`$top10\` (int|null): Позиция в топ-10 (null если не входит)
* \`$top250\` (int|null): Позиция в топ-250 (null если не входит)
* \`$typeNumber\` (int|null): Числовой код типа фильма
* \`$status\` (\\KinopoiskDev\\Enums\\MovieStatus|null): Статус производства фильма

**См. также:**

* \`SearchMovie::fromArray\`: () Для создания объекта из массива данных API
* \`SearchMovie::toArray\`: () Для преобразования объекта в массив

## \`fromArray()\` [#fromarray]

**Описание:** Создает объект SearchMovie из массива данных API
Фабричный метод для создания экземпляра класса SearchMovie из массива данных,
полученных от API Kinopoisk.dev. Безопасно обрабатывает отсутствующие значения,
устанавливая их в null. Автоматически преобразует массивы данных в соответствующие
объекты модели при их наличии.

**Параметры:**

* \`$data\` (array): Массив данных от API, содержащий информацию о фильме

**Возвращает:** \`static\` Новый экземпляр SearchMovie с данными из массива

**Исключения:**

* \`\\TypeError\`: Если обязательный параметр 'id' отсутствует или имеет неверный тип

**См. также:**

* \`SearchMovie::toArray\`: () Для обратного преобразования в массив
* \`SearchMovie::__construct\`: () Для создания объекта через конструктор

## \`toArray()\` [#toarray]

**Описание:** Преобразует объект SearchMovie в массив
Конвертирует текущий экземпляр SearchMovie в ассоциативный массив,
сохраняя все свойства объекта. Полезно для сериализации данных,
передачи в API или сохранения в базе данных.
именам свойств, а значения - их содержимому

**Возвращает:** \`array\` Ассоциативный массив с данными объекта, где ключи соответствуют

**См. также:**

* \`SearchMovie::fromArray\`: () Для создания объекта из массива
* \`SearchMovie::__construct\`: () Для создания объекта через конструктор

## \`validate()\` [#validate]

**Описание:** Валидирует данные модели

**Возвращает:** \`bool True\` если данные валидны
`,o={contents:[{heading:void 0,content:`**Описание:** Класс для представления результатов поиска фильмов
Представляет данные о фильме, полученные при выполнении поиска через API Kinopoisk.dev.
Содержит основную информацию о фильме, включая идентификатор, названия, рейтинги,
постеры, жанры и другие метаданные. Используется для отображения результатов поиска
без необходимости загрузки полной информации о фильме.`},{heading:void 0,content:`**С версии:** 1.0.0`},{heading:void 0,content:`**Версия:** 1.0.0`},{heading:void 0,content:`**См. также:**`},{heading:void 0,content:"`\\KinopoiskDev\\Models\\Movie`: Для полной информации о фильме"},{heading:void 0,content:"`\\KinopoiskDev\\Models\\Name`: Для названий фильмов"},{heading:void 0,content:"`\\KinopoiskDev\\Models\\ExternalId`: Для внешних идентификаторов"},{heading:void 0,content:"`\\KinopoiskDev\\Models\\Rating`: Для рейтингов"},{heading:void 0,content:"`\\KinopoiskDev\\Models\\ShortImage`: Для изображений"},{heading:void 0,content:"`\\KinopoiskDev\\Models\\ItemName`: Для жанров и стран"},{heading:void 0,content:"`\\KinopoiskDev\\Models\\YearRange`: Для годов выпуска"},{heading:void 0,content:"`\\KinopoiskDev\\Models\\Logo`: Для логотипов"},{heading:void 0,content:"`\\KinopoiskDev\\Models\\Votes`: Для голосов"},{heading:`__construct`,content:`**Описание:** Конструктор для создания объекта результата поиска фильма
Создает новый экземпляр класса SearchMovie с указанными параметрами.
Большинство параметров являются опциональными и могут быть null при отсутствии
соответствующей информации в источнике данных. Только идентификатор является
обязательным параметром.`},{heading:`__construct`,content:`**Параметры:**`},{heading:`__construct`,content:"`$id` (int): Уникальный идентификатор фильма в системе Kinopoisk"},{heading:`__construct`,content:"`$name` (string|null): Название фильма на русском языке"},{heading:`__construct`,content:"`$alternativeName` (string|null): Альтернативное название фильма"},{heading:`__construct`,content:"`$enName` (string|null): Название фильма на английском языке"},{heading:`__construct`,content:"`$type` (\\KinopoiskDev\\Enums\\MovieType|null): Тип фильма (фильм, сериал, мультфильм и т.д.)"},{heading:`__construct`,content:"`$year` (int|null): Год выпуска фильма"},{heading:`__construct`,content:"`$description` (string|null): Полное описание сюжета фильма"},{heading:`__construct`,content:"`$shortDescription` (string|null): Краткое описание фильма"},{heading:`__construct`,content:"`$movieLength` (int|null): Длительность фильма в минутах"},{heading:`__construct`,content:"`$names` (\\KinopoiskDev\\Models\\Name\\[]|null): Массив всех названий фильма на разных языках"},{heading:`__construct`,content:"`$externalId` (ExternalId|null): Внешние идентификаторы (IMDB, TMDB, KinopoiskHD)"},{heading:`__construct`,content:"`$logo` (Logo|null): Логотип фильма"},{heading:`__construct`,content:"`$poster` (ShortImage|null): Постер фильма"},{heading:`__construct`,content:"`$backdrop` (ShortImage|null): Фоновое изображение фильма"},{heading:`__construct`,content:"`$rating` (Rating|null): Рейтинг фильма"},{heading:`__construct`,content:"`$votes` (Votes|null): Информация о голосах"},{heading:`__construct`,content:"`$genres` (\\KinopoiskDev\\Models\\ItemName\\[]|null): Массив жанров фильма"},{heading:`__construct`,content:"`$countries` (\\KinopoiskDev\\Models\\ItemName\\[]|null): Массив стран производства фильма"},{heading:`__construct`,content:"`$releaseYears` (\\KinopoiskDev\\Models\\YearRange\\[]|null): Массив годов выпуска для разных стран"},{heading:`__construct`,content:"`$isSeries` (bool|null): Является ли произведение сериалом"},{heading:`__construct`,content:"`$ticketsOnSale` (bool|null): Доступны ли билеты к покупке"},{heading:`__construct`,content:"`$totalSeriesLength` (int|null): Общее количество серий"},{heading:`__construct`,content:"`$seriesLength` (int|null): Количество серий в сезоне"},{heading:`__construct`,content:"`$ratingMpaa` (\\KinopoiskDev\\Enums\\RatingMpaa|null): Рейтинг MPAA (G, PG, PG-13, R, NC-17)"},{heading:`__construct`,content:"`$ageRating` (int|null): Возрастной рейтинг"},{heading:`__construct`,content:"`$top10` (int|null): Позиция в топ-10 (null если не входит)"},{heading:`__construct`,content:"`$top250` (int|null): Позиция в топ-250 (null если не входит)"},{heading:`__construct`,content:"`$typeNumber` (int|null): Числовой код типа фильма"},{heading:`__construct`,content:"`$status` (\\KinopoiskDev\\Enums\\MovieStatus|null): Статус производства фильма"},{heading:`__construct`,content:`**См. также:**`},{heading:`__construct`,content:"`SearchMovie::fromArray`: () Для создания объекта из массива данных API"},{heading:`__construct`,content:"`SearchMovie::toArray`: () Для преобразования объекта в массив"},{heading:`fromarray`,content:`**Описание:** Создает объект SearchMovie из массива данных API
Фабричный метод для создания экземпляра класса SearchMovie из массива данных,
полученных от API Kinopoisk.dev. Безопасно обрабатывает отсутствующие значения,
устанавливая их в null. Автоматически преобразует массивы данных в соответствующие
объекты модели при их наличии.`},{heading:`fromarray`,content:`**Параметры:**`},{heading:`fromarray`,content:"`$data` (array): Массив данных от API, содержащий информацию о фильме"},{heading:`fromarray`,content:"**Возвращает:** `static` Новый экземпляр SearchMovie с данными из массива"},{heading:`fromarray`,content:`**Исключения:**`},{heading:`fromarray`,content:"`\\TypeError`: Если обязательный параметр 'id' отсутствует или имеет неверный тип"},{heading:`fromarray`,content:`**См. также:**`},{heading:`fromarray`,content:"`SearchMovie::toArray`: () Для обратного преобразования в массив"},{heading:`fromarray`,content:"`SearchMovie::__construct`: () Для создания объекта через конструктор"},{heading:`toarray`,content:`**Описание:** Преобразует объект SearchMovie в массив
Конвертирует текущий экземпляр SearchMovie в ассоциативный массив,
сохраняя все свойства объекта. Полезно для сериализации данных,
передачи в API или сохранения в базе данных.
именам свойств, а значения - их содержимому`},{heading:`toarray`,content:"**Возвращает:** `array` Ассоциативный массив с данными объекта, где ключи соответствуют"},{heading:`toarray`,content:`**См. также:**`},{heading:`toarray`,content:"`SearchMovie::fromArray`: () Для создания объекта из массива"},{heading:`toarray`,content:"`SearchMovie::__construct`: () Для создания объекта через конструктор"},{heading:`validate`,content:`**Описание:** Валидирует данные модели`},{heading:`validate`,content:"**Возвращает:** `bool True` если данные валидны"}],headings:[{id:`__construct`,content:"`__construct()`"},{id:`fromarray`,content:"`fromArray()`"},{id:`toarray`,content:"`toArray()`"},{id:`validate`,content:"`validate()`"}]},s=[{depth:2,url:`#__construct`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`__construct()`})})},{depth:2,url:`#fromarray`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`fromArray()`})})},{depth:2,url:`#toarray`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`toArray()`})})},{depth:2,url:`#validate`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`validate()`})})}];function c(e){let t={code:`code`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Класс для представления результатов поиска фильмов
Представляет данные о фильме, полученные при выполнении поиска через API Kinopoisk.dev.
Содержит основную информацию о фильме, включая идентификатор, названия, рейтинги,
постеры, жанры и другие метаданные. Используется для отображения результатов поиска
без необходимости загрузки полной информации о фильме.`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 1.0.0`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Версия:`}),` 1.0.0`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`См. также:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`\\KinopoiskDev\\Models\\Movie`}),`: Для полной информации о фильме`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`\\KinopoiskDev\\Models\\Name`}),`: Для названий фильмов`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`\\KinopoiskDev\\Models\\ExternalId`}),`: Для внешних идентификаторов`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`\\KinopoiskDev\\Models\\Rating`}),`: Для рейтингов`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`\\KinopoiskDev\\Models\\ShortImage`}),`: Для изображений`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`\\KinopoiskDev\\Models\\ItemName`}),`: Для жанров и стран`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`\\KinopoiskDev\\Models\\YearRange`}),`: Для годов выпуска`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`\\KinopoiskDev\\Models\\Logo`}),`: Для логотипов`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`\\KinopoiskDev\\Models\\Votes`}),`: Для голосов`]}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`__construct`,children:(0,n.jsx)(t.code,{children:`__construct()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Конструктор для создания объекта результата поиска фильма
Создает новый экземпляр класса SearchMovie с указанными параметрами.
Большинство параметров являются опциональными и могут быть null при отсутствии
соответствующей информации в источнике данных. Только идентификатор является
обязательным параметром.`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$id`}),` (int): Уникальный идентификатор фильма в системе Kinopoisk`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$name`}),` (string|null): Название фильма на русском языке`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$alternativeName`}),` (string|null): Альтернативное название фильма`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$enName`}),` (string|null): Название фильма на английском языке`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$type`}),` (\\KinopoiskDev\\Enums\\MovieType|null): Тип фильма (фильм, сериал, мультфильм и т.д.)`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$year`}),` (int|null): Год выпуска фильма`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$description`}),` (string|null): Полное описание сюжета фильма`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$shortDescription`}),` (string|null): Краткое описание фильма`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$movieLength`}),` (int|null): Длительность фильма в минутах`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$names`}),` (\\KinopoiskDev\\Models\\Name[]|null): Массив всех названий фильма на разных языках`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$externalId`}),` (ExternalId|null): Внешние идентификаторы (IMDB, TMDB, KinopoiskHD)`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$logo`}),` (Logo|null): Логотип фильма`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$poster`}),` (ShortImage|null): Постер фильма`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$backdrop`}),` (ShortImage|null): Фоновое изображение фильма`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$rating`}),` (Rating|null): Рейтинг фильма`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$votes`}),` (Votes|null): Информация о голосах`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$genres`}),` (\\KinopoiskDev\\Models\\ItemName[]|null): Массив жанров фильма`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$countries`}),` (\\KinopoiskDev\\Models\\ItemName[]|null): Массив стран производства фильма`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$releaseYears`}),` (\\KinopoiskDev\\Models\\YearRange[]|null): Массив годов выпуска для разных стран`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$isSeries`}),` (bool|null): Является ли произведение сериалом`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$ticketsOnSale`}),` (bool|null): Доступны ли билеты к покупке`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$totalSeriesLength`}),` (int|null): Общее количество серий`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$seriesLength`}),` (int|null): Количество серий в сезоне`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$ratingMpaa`}),` (\\KinopoiskDev\\Enums\\RatingMpaa|null): Рейтинг MPAA (G, PG, PG-13, R, NC-17)`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$ageRating`}),` (int|null): Возрастной рейтинг`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$top10`}),` (int|null): Позиция в топ-10 (null если не входит)`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$top250`}),` (int|null): Позиция в топ-250 (null если не входит)`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$typeNumber`}),` (int|null): Числовой код типа фильма`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$status`}),` (\\KinopoiskDev\\Enums\\MovieStatus|null): Статус производства фильма`]}),`
`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`См. также:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`SearchMovie::fromArray`}),`: () Для создания объекта из массива данных API`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`SearchMovie::toArray`}),`: () Для преобразования объекта в массив`]}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`fromarray`,children:(0,n.jsx)(t.code,{children:`fromArray()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Создает объект SearchMovie из массива данных API
Фабричный метод для создания экземпляра класса SearchMovie из массива данных,
полученных от API Kinopoisk.dev. Безопасно обрабатывает отсутствующие значения,
устанавливая их в null. Автоматически преобразует массивы данных в соответствующие
объекты модели при их наличии.`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$data`}),` (array): Массив данных от API, содержащий информацию о фильме`]}),`
`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`static`}),` Новый экземпляр SearchMovie с данными из массива`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Исключения:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`\\TypeError`}),`: Если обязательный параметр 'id' отсутствует или имеет неверный тип`]}),`
`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`См. также:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`SearchMovie::toArray`}),`: () Для обратного преобразования в массив`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`SearchMovie::__construct`}),`: () Для создания объекта через конструктор`]}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`toarray`,children:(0,n.jsx)(t.code,{children:`toArray()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Преобразует объект SearchMovie в массив
Конвертирует текущий экземпляр SearchMovie в ассоциативный массив,
сохраняя все свойства объекта. Полезно для сериализации данных,
передачи в API или сохранения в базе данных.
именам свойств, а значения - их содержимому`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`array`}),` Ассоциативный массив с данными объекта, где ключи соответствуют`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`См. также:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`SearchMovie::fromArray`}),`: () Для создания объекта из массива`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`SearchMovie::__construct`}),`: () Для создания объекта через конструктор`]}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`validate`,children:(0,n.jsx)(t.code,{children:`validate()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Валидирует данные модели`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`bool True`}),` если данные валидны`]})]})}function l(e={}){let{wrapper:t}=e.components||{};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}export{a as _markdown,l as default,r as frontmatter,i as lastModified,o as structuredData,s as toc};