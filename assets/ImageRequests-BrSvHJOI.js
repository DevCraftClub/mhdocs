import{r as e}from"./rolldown-runtime-QTnfLwEv.js";import{t}from"./jsx-runtime-By8HlURe.js";var n=e(t()),r={title:`ImageRequests`},i=new Date(1787213191e3),a=`

**Описание:** Класс для API-запросов, связанных с изображениями фильмов
Этот класс расширяет базовый класс Kinopoisk и предоставляет специализированные
методы для работы с изображениями (постеры, кадры, задники) из API Kinopoisk.dev.

**С версии:** 1.0.0

**Версия:** 1.0.0

## \`getImagesByMovieId()\` [#getimagesbymovieid]

**Описание:** Получает изображения для конкретного фильма

**Параметры:**

* \`$movieId\` (int): ID фильма в Кинопоиске
* \`$type\` (string): Тип изображения (например: 'poster', 'frame', 'backdrop')
* \`$page\` (int): Номер страницы
* \`$limit\` (int): Количество результатов на странице

**Возвращает:** \`ImageDocsResponseDto\` Изображения указанного фильма

**Исключения:**

* \`KinopoiskDevException\`: При ошибках API
* \`\\JsonException\`: При ошибках парсинга JSON
* \`\\KinopoiskDev\\Exceptions\\KinopoiskResponseException\`:

## \`getImages()\` [#getimages]

**Описание:** Получает изображения с возможностью фильтрации и пагинации
Выполняет запрос к API Kinopoisk.dev для получения списка изображений фильмов
с поддержкой расширенной фильтрации и постраничной навигации.
Можно фильтровать по типу изображения, языку, размерам и ID фильма.
(тип изображения, ID фильма, язык, размеры).
При значении null создается новый экземпляр MovieSearchFilter без фильтров
250\\)
(общее количество, количество страниц, текущая страница)

**С версии:** 1.0.0

**Версия:** 1.0.0

**API Endpoint:** \`/v1.4/image\`

**Параметры:**

* \`$filters\` (MovieSearchFilter|null): Объект фильтрации для поиска изображений по различным критериям
* \`$page\` (int): Номер запрашиваемой страницы результатов, начиная с 1 (по умолчанию 1)
* \`$limit\` (int): Максимальное количество результатов на одной странице (по умолчанию 10, максимум ограничен API до

**Возвращает:** \`ImageDocsResponseDto\` Объект ответа, содержащий массив изображений и метаданные пагинации

**Исключения:**

* \`KinopoiskDevException\`: При ошибках валидации данных, неправильных параметрах запроса или проблемах с инициализацией объектов
* \`KinopoiskResponseException\`: При ошибках HTTP-запроса к API (401, 403, 404)
* \`\\JsonException\`: При ошибках парсинга JSON-ответа от API, некорректном формате данных или повреждении ответа

**См. также:**

* \`\\KinopoiskDev\\Filter\\MovieSearchFilter\`: Класс для настройки фильтрации изображений
* \`\\KinopoiskDev\\Responses\\Api\\ImageDocsResponseDto\`: Структура ответа API
* \`\\KinopoiskDev\\Models\\Image\`: Модель отдельного изображения
`,o={contents:[{heading:void 0,content:`**Описание:** Класс для API-запросов, связанных с изображениями фильмов
Этот класс расширяет базовый класс Kinopoisk и предоставляет специализированные
методы для работы с изображениями (постеры, кадры, задники) из API Kinopoisk.dev.`},{heading:void 0,content:`**С версии:** 1.0.0`},{heading:void 0,content:`**Версия:** 1.0.0`},{heading:`getimagesbymovieid`,content:`**Описание:** Получает изображения для конкретного фильма`},{heading:`getimagesbymovieid`,content:`**Параметры:**`},{heading:`getimagesbymovieid`,content:"`$movieId` (int): ID фильма в Кинопоиске"},{heading:`getimagesbymovieid`,content:"`$type` (string): Тип изображения (например: 'poster', 'frame', 'backdrop')"},{heading:`getimagesbymovieid`,content:"`$page` (int): Номер страницы"},{heading:`getimagesbymovieid`,content:"`$limit` (int): Количество результатов на странице"},{heading:`getimagesbymovieid`,content:"**Возвращает:** `ImageDocsResponseDto` Изображения указанного фильма"},{heading:`getimagesbymovieid`,content:`**Исключения:**`},{heading:`getimagesbymovieid`,content:"`KinopoiskDevException`: При ошибках API"},{heading:`getimagesbymovieid`,content:"`\\JsonException`: При ошибках парсинга JSON"},{heading:`getimagesbymovieid`,content:"`\\KinopoiskDev\\Exceptions\\KinopoiskResponseException`:"},{heading:`getimages`,content:`**Описание:** Получает изображения с возможностью фильтрации и пагинации
Выполняет запрос к API Kinopoisk.dev для получения списка изображений фильмов
с поддержкой расширенной фильтрации и постраничной навигации.
Можно фильтровать по типу изображения, языку, размерам и ID фильма.
(тип изображения, ID фильма, язык, размеры).
При значении null создается новый экземпляр MovieSearchFilter без фильтров
250\\)
(общее количество, количество страниц, текущая страница)`},{heading:`getimages`,content:`**С версии:** 1.0.0`},{heading:`getimages`,content:`**Версия:** 1.0.0`},{heading:`getimages`,content:"**API Endpoint:** `/v1.4/image`"},{heading:`getimages`,content:`**Параметры:**`},{heading:`getimages`,content:"`$filters` (MovieSearchFilter|null): Объект фильтрации для поиска изображений по различным критериям"},{heading:`getimages`,content:"`$page` (int): Номер запрашиваемой страницы результатов, начиная с 1 (по умолчанию 1)"},{heading:`getimages`,content:"`$limit` (int): Максимальное количество результатов на одной странице (по умолчанию 10, максимум ограничен API до"},{heading:`getimages`,content:"**Возвращает:** `ImageDocsResponseDto` Объект ответа, содержащий массив изображений и метаданные пагинации"},{heading:`getimages`,content:`**Исключения:**`},{heading:`getimages`,content:"`KinopoiskDevException`: При ошибках валидации данных, неправильных параметрах запроса или проблемах с инициализацией объектов"},{heading:`getimages`,content:"`KinopoiskResponseException`: При ошибках HTTP-запроса к API (401, 403, 404)"},{heading:`getimages`,content:"`\\JsonException`: При ошибках парсинга JSON-ответа от API, некорректном формате данных или повреждении ответа"},{heading:`getimages`,content:`**См. также:**`},{heading:`getimages`,content:"`\\KinopoiskDev\\Filter\\MovieSearchFilter`: Класс для настройки фильтрации изображений"},{heading:`getimages`,content:"`\\KinopoiskDev\\Responses\\Api\\ImageDocsResponseDto`: Структура ответа API"},{heading:`getimages`,content:"`\\KinopoiskDev\\Models\\Image`: Модель отдельного изображения"}],headings:[{id:`getimagesbymovieid`,content:"`getImagesByMovieId()`"},{id:`getimages`,content:"`getImages()`"}]},s=[{depth:2,url:`#getimagesbymovieid`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`getImagesByMovieId()`})})},{depth:2,url:`#getimages`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`getImages()`})})}];function c(e){let t={code:`code`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Класс для API-запросов, связанных с изображениями фильмов
Этот класс расширяет базовый класс Kinopoisk и предоставляет специализированные
методы для работы с изображениями (постеры, кадры, задники) из API Kinopoisk.dev.`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 1.0.0`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Версия:`}),` 1.0.0`]}),`
`,(0,n.jsx)(t.h2,{id:`getimagesbymovieid`,children:(0,n.jsx)(t.code,{children:`getImagesByMovieId()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Получает изображения для конкретного фильма`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$movieId`}),` (int): ID фильма в Кинопоиске`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$type`}),` (string): Тип изображения (например: 'poster', 'frame', 'backdrop')`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$page`}),` (int): Номер страницы`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$limit`}),` (int): Количество результатов на странице`]}),`
`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`ImageDocsResponseDto`}),` Изображения указанного фильма`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Исключения:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`KinopoiskDevException`}),`: При ошибках API`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`\\JsonException`}),`: При ошибках парсинга JSON`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`\\KinopoiskDev\\Exceptions\\KinopoiskResponseException`}),`:`]}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`getimages`,children:(0,n.jsx)(t.code,{children:`getImages()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Получает изображения с возможностью фильтрации и пагинации
Выполняет запрос к API Kinopoisk.dev для получения списка изображений фильмов
с поддержкой расширенной фильтрации и постраничной навигации.
Можно фильтровать по типу изображения, языку, размерам и ID фильма.
(тип изображения, ID фильма, язык, размеры).
При значении null создается новый экземпляр MovieSearchFilter без фильтров
250)
(общее количество, количество страниц, текущая страница)`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 1.0.0`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Версия:`}),` 1.0.0`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`API Endpoint:`}),` `,(0,n.jsx)(t.code,{children:`/v1.4/image`})]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$filters`}),` (MovieSearchFilter|null): Объект фильтрации для поиска изображений по различным критериям`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$page`}),` (int): Номер запрашиваемой страницы результатов, начиная с 1 (по умолчанию 1)`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$limit`}),` (int): Максимальное количество результатов на одной странице (по умолчанию 10, максимум ограничен API до`]}),`
`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`ImageDocsResponseDto`}),` Объект ответа, содержащий массив изображений и метаданные пагинации`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Исключения:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`KinopoiskDevException`}),`: При ошибках валидации данных, неправильных параметрах запроса или проблемах с инициализацией объектов`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`KinopoiskResponseException`}),`: При ошибках HTTP-запроса к API (401, 403, 404)`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`\\JsonException`}),`: При ошибках парсинга JSON-ответа от API, некорректном формате данных или повреждении ответа`]}),`
`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`См. также:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`\\KinopoiskDev\\Filter\\MovieSearchFilter`}),`: Класс для настройки фильтрации изображений`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`\\KinopoiskDev\\Responses\\Api\\ImageDocsResponseDto`}),`: Структура ответа API`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`\\KinopoiskDev\\Models\\Image`}),`: Модель отдельного изображения`]}),`
`]})]})}function l(e={}){let{wrapper:t}=e.components||{};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}export{a as _markdown,l as default,r as frontmatter,i as lastModified,o as structuredData,s as toc};