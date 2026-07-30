import{r as e}from"./rolldown-runtime-QTnfLwEv.js";import{t}from"./jsx-runtime-By8HlURe.js";var n=e(t()),r={title:`ListRequests`},i=new Date(1785404498e3),a=`

**Описание:** Класс для API-запросов, связанных с коллекциями и списками фильмов
Этот класс расширяет базовый класс Kinopoisk и предоставляет специализированные
методы для работы с коллекциями фильмов (топ-250, жанровые подборки, тематические списки) из API Kinopoisk.dev.

**С версии:** 1.0.0

**Версия:** 1.0.0

## \`getListBySlug()\` [#getlistbyslug]

**Описание:** Получает конкретную коллекцию по её slug

**API Endpoint:** \`/v1.4/list/{slug}\`

**Параметры:**

* \`$slug\` (string): Уникальный идентификатор коллекции (например: 'top250', 'popular-films')

**Возвращает:** \`\\KinopoiskDev\\Models\\Lists\` Коллекция фильмов со всеми доступными данными

**Исключения:**

* \`KinopoiskDevException\`: При ошибках API или проблемах с сетью
* \`\\JsonException\`: При ошибках парсинга JSON
* \`\\KinopoiskDev\\Exceptions\\KinopoiskResponseException\`:

**Ссылка:** [https://kinopoiskdev.readme.io/reference/listcontroller\\_findonev1\\_4](https://kinopoiskdev.readme.io/reference/listcontroller_findonev1_4)

## \`getListsByCategory()\` [#getlistsbycategory]

**Описание:** Получает коллекции по категории

**Параметры:**

* \`$category\` (\\KinopoiskDev\\Enums\\ListCategory): Категория коллекций
* \`$page\` (int): Номер страницы
* \`$limit\` (int): Количество результатов на странице

**Возвращает:** \`ListDocsResponseDto\` Коллекции указанной категории

**Исключения:**

* \`\\JsonException\`: При ошибках парсинга JSON
* \`\\KinopoiskDev\\Exceptions\\KinopoiskDevException\`: При ошибках API
* \`\\KinopoiskDev\\Exceptions\\KinopoiskResponseException\`:

## \`getAllLists()\` [#getalllists]

**Описание:** Получает все доступные коллекции с возможностью фильтрации и пагинации
Выполняет запрос к API Kinopoisk.dev для получения списка всех коллекций фильмов
с поддержкой расширенной фильтрации и постраничной навигации.
Можно фильтровать по категориям, названиям и другим параметрам коллекций.
(категория, название, количество фильмов).
При значении null создается новый экземпляр MovieSearchFilter без фильтров
250\\)
(общее количество, количество страниц, текущая страница)

**С версии:** 1.0.0

**Версия:** 1.0.0

**API Endpoint:** \`/v1.4/list\`

**Параметры:**

* \`$filters\` (MovieSearchFilter|null): Объект фильтрации для поиска коллекций по различным критериям
* \`$page\` (int): Номер запрашиваемой страницы результатов, начиная с 1 (по умолчанию 1)
* \`$limit\` (int): Максимальное количество результатов на одной странице (по умолчанию 10, максимум ограничен API до

**Возвращает:** \`ListDocsResponseDto\` Объект ответа, содержащий массив коллекций и метаданные пагинации

**Исключения:**

* \`KinopoiskDevException\`: При ошибках валидации данных, неправильных параметрах запроса или проблемах с инициализацией объектов
* \`KinopoiskResponseException\`: При ошибках HTTP-запроса к API (401, 403, 404)
* \`\\JsonException\`: При ошибках парсинга JSON-ответа от API, некорректном формате данных или повреждении ответа

**См. также:**

* \`\\KinopoiskDev\\Filter\\MovieSearchFilter\`: Класс для настройки фильтрации коллекций
* \`\\KinopoiskDev\\Responses\\Api\\ListDocsResponseDto\`: Структура ответа API
`,o={contents:[{heading:void 0,content:`**Описание:** Класс для API-запросов, связанных с коллекциями и списками фильмов
Этот класс расширяет базовый класс Kinopoisk и предоставляет специализированные
методы для работы с коллекциями фильмов (топ-250, жанровые подборки, тематические списки) из API Kinopoisk.dev.`},{heading:void 0,content:`**С версии:** 1.0.0`},{heading:void 0,content:`**Версия:** 1.0.0`},{heading:`getlistbyslug`,content:`**Описание:** Получает конкретную коллекцию по её slug`},{heading:`getlistbyslug`,content:"**API Endpoint:** `/v1.4/list/{slug}`"},{heading:`getlistbyslug`,content:`**Параметры:**`},{heading:`getlistbyslug`,content:"`$slug` (string): Уникальный идентификатор коллекции (например: 'top250', 'popular-films')"},{heading:`getlistbyslug`,content:"**Возвращает:** `\\KinopoiskDev\\Models\\Lists` Коллекция фильмов со всеми доступными данными"},{heading:`getlistbyslug`,content:`**Исключения:**`},{heading:`getlistbyslug`,content:"`KinopoiskDevException`: При ошибках API или проблемах с сетью"},{heading:`getlistbyslug`,content:"`\\JsonException`: При ошибках парсинга JSON"},{heading:`getlistbyslug`,content:"`\\KinopoiskDev\\Exceptions\\KinopoiskResponseException`:"},{heading:`getlistbyslug`,content:`**Ссылка:** https\\://kinopoiskdev.readme.io/reference/listcontroller\\_findonev1\\_4`},{heading:`getlistsbycategory`,content:`**Описание:** Получает коллекции по категории`},{heading:`getlistsbycategory`,content:`**Параметры:**`},{heading:`getlistsbycategory`,content:"`$category` (\\KinopoiskDev\\Enums\\ListCategory): Категория коллекций"},{heading:`getlistsbycategory`,content:"`$page` (int): Номер страницы"},{heading:`getlistsbycategory`,content:"`$limit` (int): Количество результатов на странице"},{heading:`getlistsbycategory`,content:"**Возвращает:** `ListDocsResponseDto` Коллекции указанной категории"},{heading:`getlistsbycategory`,content:`**Исключения:**`},{heading:`getlistsbycategory`,content:"`\\JsonException`: При ошибках парсинга JSON"},{heading:`getlistsbycategory`,content:"`\\KinopoiskDev\\Exceptions\\KinopoiskDevException`: При ошибках API"},{heading:`getlistsbycategory`,content:"`\\KinopoiskDev\\Exceptions\\KinopoiskResponseException`:"},{heading:`getalllists`,content:`**Описание:** Получает все доступные коллекции с возможностью фильтрации и пагинации
Выполняет запрос к API Kinopoisk.dev для получения списка всех коллекций фильмов
с поддержкой расширенной фильтрации и постраничной навигации.
Можно фильтровать по категориям, названиям и другим параметрам коллекций.
(категория, название, количество фильмов).
При значении null создается новый экземпляр MovieSearchFilter без фильтров
250\\)
(общее количество, количество страниц, текущая страница)`},{heading:`getalllists`,content:`**С версии:** 1.0.0`},{heading:`getalllists`,content:`**Версия:** 1.0.0`},{heading:`getalllists`,content:"**API Endpoint:** `/v1.4/list`"},{heading:`getalllists`,content:`**Параметры:**`},{heading:`getalllists`,content:"`$filters` (MovieSearchFilter|null): Объект фильтрации для поиска коллекций по различным критериям"},{heading:`getalllists`,content:"`$page` (int): Номер запрашиваемой страницы результатов, начиная с 1 (по умолчанию 1)"},{heading:`getalllists`,content:"`$limit` (int): Максимальное количество результатов на одной странице (по умолчанию 10, максимум ограничен API до"},{heading:`getalllists`,content:"**Возвращает:** `ListDocsResponseDto` Объект ответа, содержащий массив коллекций и метаданные пагинации"},{heading:`getalllists`,content:`**Исключения:**`},{heading:`getalllists`,content:"`KinopoiskDevException`: При ошибках валидации данных, неправильных параметрах запроса или проблемах с инициализацией объектов"},{heading:`getalllists`,content:"`KinopoiskResponseException`: При ошибках HTTP-запроса к API (401, 403, 404)"},{heading:`getalllists`,content:"`\\JsonException`: При ошибках парсинга JSON-ответа от API, некорректном формате данных или повреждении ответа"},{heading:`getalllists`,content:`**См. также:**`},{heading:`getalllists`,content:"`\\KinopoiskDev\\Filter\\MovieSearchFilter`: Класс для настройки фильтрации коллекций"},{heading:`getalllists`,content:"`\\KinopoiskDev\\Responses\\Api\\ListDocsResponseDto`: Структура ответа API"}],headings:[{id:`getlistbyslug`,content:"`getListBySlug()`"},{id:`getlistsbycategory`,content:"`getListsByCategory()`"},{id:`getalllists`,content:"`getAllLists()`"}]},s=[{depth:2,url:`#getlistbyslug`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`getListBySlug()`})})},{depth:2,url:`#getlistsbycategory`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`getListsByCategory()`})})},{depth:2,url:`#getalllists`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`getAllLists()`})})}];function c(e){let t={a:`a`,code:`code`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Класс для API-запросов, связанных с коллекциями и списками фильмов
Этот класс расширяет базовый класс Kinopoisk и предоставляет специализированные
методы для работы с коллекциями фильмов (топ-250, жанровые подборки, тематические списки) из API Kinopoisk.dev.`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 1.0.0`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Версия:`}),` 1.0.0`]}),`
`,(0,n.jsx)(t.h2,{id:`getlistbyslug`,children:(0,n.jsx)(t.code,{children:`getListBySlug()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Получает конкретную коллекцию по её slug`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`API Endpoint:`}),` `,(0,n.jsx)(t.code,{children:`/v1.4/list/{slug}`})]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$slug`}),` (string): Уникальный идентификатор коллекции (например: 'top250', 'popular-films')`]}),`
`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`\\KinopoiskDev\\Models\\Lists`}),` Коллекция фильмов со всеми доступными данными`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Исключения:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`KinopoiskDevException`}),`: При ошибках API или проблемах с сетью`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`\\JsonException`}),`: При ошибках парсинга JSON`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`\\KinopoiskDev\\Exceptions\\KinopoiskResponseException`}),`:`]}),`
`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Ссылка:`}),` `,(0,n.jsx)(t.a,{href:`https://kinopoiskdev.readme.io/reference/listcontroller_findonev1_4`,children:`https://kinopoiskdev.readme.io/reference/listcontroller_findonev1_4`})]}),`
`,(0,n.jsx)(t.h2,{id:`getlistsbycategory`,children:(0,n.jsx)(t.code,{children:`getListsByCategory()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Получает коллекции по категории`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$category`}),` (\\KinopoiskDev\\Enums\\ListCategory): Категория коллекций`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$page`}),` (int): Номер страницы`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$limit`}),` (int): Количество результатов на странице`]}),`
`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`ListDocsResponseDto`}),` Коллекции указанной категории`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Исключения:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`\\JsonException`}),`: При ошибках парсинга JSON`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`\\KinopoiskDev\\Exceptions\\KinopoiskDevException`}),`: При ошибках API`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`\\KinopoiskDev\\Exceptions\\KinopoiskResponseException`}),`:`]}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`getalllists`,children:(0,n.jsx)(t.code,{children:`getAllLists()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Получает все доступные коллекции с возможностью фильтрации и пагинации
Выполняет запрос к API Kinopoisk.dev для получения списка всех коллекций фильмов
с поддержкой расширенной фильтрации и постраничной навигации.
Можно фильтровать по категориям, названиям и другим параметрам коллекций.
(категория, название, количество фильмов).
При значении null создается новый экземпляр MovieSearchFilter без фильтров
250)
(общее количество, количество страниц, текущая страница)`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 1.0.0`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Версия:`}),` 1.0.0`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`API Endpoint:`}),` `,(0,n.jsx)(t.code,{children:`/v1.4/list`})]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$filters`}),` (MovieSearchFilter|null): Объект фильтрации для поиска коллекций по различным критериям`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$page`}),` (int): Номер запрашиваемой страницы результатов, начиная с 1 (по умолчанию 1)`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$limit`}),` (int): Максимальное количество результатов на одной странице (по умолчанию 10, максимум ограничен API до`]}),`
`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`ListDocsResponseDto`}),` Объект ответа, содержащий массив коллекций и метаданные пагинации`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Исключения:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`KinopoiskDevException`}),`: При ошибках валидации данных, неправильных параметрах запроса или проблемах с инициализацией объектов`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`KinopoiskResponseException`}),`: При ошибках HTTP-запроса к API (401, 403, 404)`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`\\JsonException`}),`: При ошибках парсинга JSON-ответа от API, некорректном формате данных или повреждении ответа`]}),`
`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`См. также:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`\\KinopoiskDev\\Filter\\MovieSearchFilter`}),`: Класс для настройки фильтрации коллекций`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`\\KinopoiskDev\\Responses\\Api\\ListDocsResponseDto`}),`: Структура ответа API`]}),`
`]})]})}function l(e={}){let{wrapper:t}=e.components||{};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}export{a as _markdown,l as default,r as frontmatter,i as lastModified,o as structuredData,s as toc};