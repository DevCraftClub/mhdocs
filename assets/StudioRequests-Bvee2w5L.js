import{r as e}from"./rolldown-runtime-QTnfLwEv.js";import{t}from"./jsx-runtime-By8HlURe.js";var n=e(t()),r={title:`StudioRequests`},i=new Date(1787218238e3),a=`

**Описание:** Класс для API-запросов, связанных со студиями
Этот класс предоставляет методы для всех конечных точек студий API Kinopoisk.dev.
Позволяет получать информацию о кинокомпаниях, студиях дубляжа, производителях
и других организациях, участвующих в создании фильмов.

**С версии:** 1.0.0

**Версия:** 1.0.0

**См. также:**

* \`\\KinopoiskDev\\Models\\Studio\`: Для структуры данных студии
* \`\\KinopoiskDev\\Filter\\StudioSearchFilter\`: Для фильтрации запросов

## \`getProductionStudios()\` [#getproductionstudios]

**Описание:** Получает производственные студии
Удобный метод для получения студий типа "Производство".

**Параметры:**

* \`$page\` (int): Номер страницы результатов
* \`$limit\` (int): Количество результатов на странице

**Возвращает:** \`StudioDocsResponseDto\` Производственные студии

**Исключения:**

* \`KinopoiskDevException\`: При ошибках API
* \`\\JsonException|\\KinopoiskDev\\Exceptions\\KinopoiskResponseException\`: При ошибках парсинга JSON

## \`getStudiosByType()\` [#getstudiosbytype]

**Описание:** Получает студии по типу
Удобный метод для получения студий определенного типа:
"Производство", "Спецэффекты", "Прокат", "Студия дубляжа"

**Параметры:**

* \`$type\` (string): Тип студии
* \`$page\` (int): Номер страницы результатов
* \`$limit\` (int): Количество результатов на странице

**Возвращает:** \`StudioDocsResponseDto\` Студии указанного типа

**Исключения:**

* \`KinopoiskDevException\`: При ошибках API
* \`\\JsonException|\\KinopoiskDev\\Exceptions\\KinopoiskResponseException\`: При ошибках парсинга JSON

## \`searchStudios()\` [#searchstudios]

**Описание:** Ищет студии по различным критериям
Основной метод для поиска студий с поддержкой сложных фильтров.
Позволяет искать по названию, типу студии, подтипу и связанным фильмам.

**API Endpoint:** \`/v1.4/studio\`

**Параметры:**

* \`$filters\` (StudioSearchFilter|null): Объект фильтра для поиска студий
* \`$page\` (int): Номер страницы результатов (по умолчанию: 1)
* \`$limit\` (int): Количество результатов на странице (по умолчанию: 10, максимум: 250)

**Возвращает:** \`StudioDocsResponseDto\` Результаты поиска с пагинацией

**Исключения:**

* \`KinopoiskDevException\`: При ошибках API

## \`getDubbingStudios()\` [#getdubbingstudios]

**Описание:** Получает студии дубляжа
Удобный метод для получения студий типа "Студия дубляжа".

**Параметры:**

* \`$page\` (int): Номер страницы результатов
* \`$limit\` (int): Количество результатов на странице

**Возвращает:** \`StudioDocsResponseDto\` Студии дубляжа

**Исключения:**

* \`KinopoiskDevException\`: При ошибках API
* \`\\JsonException|\\KinopoiskDev\\Exceptions\\KinopoiskResponseException\`: При ошибках парсинга JSON

## \`getStudiosByTitle()\` [#getstudiosbytitle]

**Описание:** Получает студии по названию
Выполняет поиск студий по точному или частичному совпадению названия.

**Параметры:**

* \`$title\` (string): Название студии для поиска
* \`$page\` (int): Номер страницы результатов
* \`$limit\` (int): Количество результатов на странице

**Возвращает:** \`StudioDocsResponseDto\` Студии с подходящими названиями

**Исключения:**

* \`KinopoiskDevException\`: При ошибках API
* \`\\JsonException|\\KinopoiskDev\\Exceptions\\KinopoiskResponseException\`: При ошибках парсинга JSON

## \`getStudioById()\` [#getstudiobyid]

**Описание:** Получает студию по её уникальному идентификатору

**Параметры:**

* \`$studioId\` (int): Уникальный идентификатор студии

**Возвращает:** \`Studio\` Объект студии

**Исключения:**

* \`KinopoiskDevException\`: При ошибках API

## \`getRandomStudio()\` [#getrandomstudio]

**Описание:** Получает случайную студию

**Параметры:**

* \`$filters\` (StudioSearchFilter|null): Фильтры для поиска

**Возвращает:** \`Studio\` Случайная студия

## \`searchStudiosByName()\` [#searchstudiosbyname]

**Описание:** Выполняет поиск студий по названию (алиас для getStudiosByTitle)

**Параметры:**

* \`$name\` (string): Название для поиска
* \`$page\` (int): Номер страницы
* \`$limit\` (int): Количество результатов

**Возвращает:** \`StudioDocsResponseDto\` Результаты поиска

## \`getStudiosByCountry()\` [#getstudiosbycountry]

**Описание:** Получает студии по стране

**Параметры:**

* \`$country\` (string): Страна
* \`$page\` (int): Номер страницы
* \`$limit\` (int): Количество результатов

**Возвращает:** \`StudioDocsResponseDto\` Результаты поиска

## \`getStudiosByYear()\` [#getstudiosbyyear]

**Описание:** Получает студии по году основания

**Параметры:**

* \`$year\` (int): Год основания
* \`$page\` (int): Номер страницы
* \`$limit\` (int): Количество результатов

**Возвращает:** \`StudioDocsResponseDto\` Результаты поиска

## \`getStudiosByYearRange()\` [#getstudiosbyyearrange]

**Описание:** Получает студии по диапазону годов основания

**Параметры:**

* \`$fromYear\` (int): Начальный год
* \`$toYear\` (int): Конечный год
* \`$page\` (int): Номер страницы
* \`$limit\` (int): Количество результатов

**Возвращает:** \`StudioDocsResponseDto\` Результаты поиска

## \`getStudiosForMovie()\` [#getstudiosformovie]

**Описание:** Получает студии, связанные с определенным фильмом
Находит все студии, которые принимали участие в создании указанного фильма.

**Параметры:**

* \`$movieId\` (int): Идентификатор фильма
* \`$page\` (int): Номер страницы результатов
* \`$limit\` (int): Количество результатов на странице

**Возвращает:** \`StudioDocsResponseDto\` Студии, связанные с фильмом

**Исключения:**

* \`KinopoiskDevException\`: При ошибках API
* \`\\JsonException|\\KinopoiskDev\\Exceptions\\KinopoiskResponseException\`: При ошибках парсинга JSON
`,o={contents:[{heading:void 0,content:`**Описание:** Класс для API-запросов, связанных со студиями
Этот класс предоставляет методы для всех конечных точек студий API Kinopoisk.dev.
Позволяет получать информацию о кинокомпаниях, студиях дубляжа, производителях
и других организациях, участвующих в создании фильмов.`},{heading:void 0,content:`**С версии:** 1.0.0`},{heading:void 0,content:`**Версия:** 1.0.0`},{heading:void 0,content:`**См. также:**`},{heading:void 0,content:"`\\KinopoiskDev\\Models\\Studio`: Для структуры данных студии"},{heading:void 0,content:"`\\KinopoiskDev\\Filter\\StudioSearchFilter`: Для фильтрации запросов"},{heading:`getproductionstudios`,content:`**Описание:** Получает производственные студии
Удобный метод для получения студий типа "Производство".`},{heading:`getproductionstudios`,content:`**Параметры:**`},{heading:`getproductionstudios`,content:"`$page` (int): Номер страницы результатов"},{heading:`getproductionstudios`,content:"`$limit` (int): Количество результатов на странице"},{heading:`getproductionstudios`,content:"**Возвращает:** `StudioDocsResponseDto` Производственные студии"},{heading:`getproductionstudios`,content:`**Исключения:**`},{heading:`getproductionstudios`,content:"`KinopoiskDevException`: При ошибках API"},{heading:`getproductionstudios`,content:"`\\JsonException|\\KinopoiskDev\\Exceptions\\KinopoiskResponseException`: При ошибках парсинга JSON"},{heading:`getstudiosbytype`,content:`**Описание:** Получает студии по типу
Удобный метод для получения студий определенного типа:
"Производство", "Спецэффекты", "Прокат", "Студия дубляжа"`},{heading:`getstudiosbytype`,content:`**Параметры:**`},{heading:`getstudiosbytype`,content:"`$type` (string): Тип студии"},{heading:`getstudiosbytype`,content:"`$page` (int): Номер страницы результатов"},{heading:`getstudiosbytype`,content:"`$limit` (int): Количество результатов на странице"},{heading:`getstudiosbytype`,content:"**Возвращает:** `StudioDocsResponseDto` Студии указанного типа"},{heading:`getstudiosbytype`,content:`**Исключения:**`},{heading:`getstudiosbytype`,content:"`KinopoiskDevException`: При ошибках API"},{heading:`getstudiosbytype`,content:"`\\JsonException|\\KinopoiskDev\\Exceptions\\KinopoiskResponseException`: При ошибках парсинга JSON"},{heading:`searchstudios`,content:`**Описание:** Ищет студии по различным критериям
Основной метод для поиска студий с поддержкой сложных фильтров.
Позволяет искать по названию, типу студии, подтипу и связанным фильмам.`},{heading:`searchstudios`,content:"**API Endpoint:** `/v1.4/studio`"},{heading:`searchstudios`,content:`**Параметры:**`},{heading:`searchstudios`,content:"`$filters` (StudioSearchFilter|null): Объект фильтра для поиска студий"},{heading:`searchstudios`,content:"`$page` (int): Номер страницы результатов (по умолчанию: 1)"},{heading:`searchstudios`,content:"`$limit` (int): Количество результатов на странице (по умолчанию: 10, максимум: 250)"},{heading:`searchstudios`,content:"**Возвращает:** `StudioDocsResponseDto` Результаты поиска с пагинацией"},{heading:`searchstudios`,content:`**Исключения:**`},{heading:`searchstudios`,content:"`KinopoiskDevException`: При ошибках API"},{heading:`getdubbingstudios`,content:`**Описание:** Получает студии дубляжа
Удобный метод для получения студий типа "Студия дубляжа".`},{heading:`getdubbingstudios`,content:`**Параметры:**`},{heading:`getdubbingstudios`,content:"`$page` (int): Номер страницы результатов"},{heading:`getdubbingstudios`,content:"`$limit` (int): Количество результатов на странице"},{heading:`getdubbingstudios`,content:"**Возвращает:** `StudioDocsResponseDto` Студии дубляжа"},{heading:`getdubbingstudios`,content:`**Исключения:**`},{heading:`getdubbingstudios`,content:"`KinopoiskDevException`: При ошибках API"},{heading:`getdubbingstudios`,content:"`\\JsonException|\\KinopoiskDev\\Exceptions\\KinopoiskResponseException`: При ошибках парсинга JSON"},{heading:`getstudiosbytitle`,content:`**Описание:** Получает студии по названию
Выполняет поиск студий по точному или частичному совпадению названия.`},{heading:`getstudiosbytitle`,content:`**Параметры:**`},{heading:`getstudiosbytitle`,content:"`$title` (string): Название студии для поиска"},{heading:`getstudiosbytitle`,content:"`$page` (int): Номер страницы результатов"},{heading:`getstudiosbytitle`,content:"`$limit` (int): Количество результатов на странице"},{heading:`getstudiosbytitle`,content:"**Возвращает:** `StudioDocsResponseDto` Студии с подходящими названиями"},{heading:`getstudiosbytitle`,content:`**Исключения:**`},{heading:`getstudiosbytitle`,content:"`KinopoiskDevException`: При ошибках API"},{heading:`getstudiosbytitle`,content:"`\\JsonException|\\KinopoiskDev\\Exceptions\\KinopoiskResponseException`: При ошибках парсинга JSON"},{heading:`getstudiobyid`,content:`**Описание:** Получает студию по её уникальному идентификатору`},{heading:`getstudiobyid`,content:`**Параметры:**`},{heading:`getstudiobyid`,content:"`$studioId` (int): Уникальный идентификатор студии"},{heading:`getstudiobyid`,content:"**Возвращает:** `Studio` Объект студии"},{heading:`getstudiobyid`,content:`**Исключения:**`},{heading:`getstudiobyid`,content:"`KinopoiskDevException`: При ошибках API"},{heading:`getrandomstudio`,content:`**Описание:** Получает случайную студию`},{heading:`getrandomstudio`,content:`**Параметры:**`},{heading:`getrandomstudio`,content:"`$filters` (StudioSearchFilter|null): Фильтры для поиска"},{heading:`getrandomstudio`,content:"**Возвращает:** `Studio` Случайная студия"},{heading:`searchstudiosbyname`,content:`**Описание:** Выполняет поиск студий по названию (алиас для getStudiosByTitle)`},{heading:`searchstudiosbyname`,content:`**Параметры:**`},{heading:`searchstudiosbyname`,content:"`$name` (string): Название для поиска"},{heading:`searchstudiosbyname`,content:"`$page` (int): Номер страницы"},{heading:`searchstudiosbyname`,content:"`$limit` (int): Количество результатов"},{heading:`searchstudiosbyname`,content:"**Возвращает:** `StudioDocsResponseDto` Результаты поиска"},{heading:`getstudiosbycountry`,content:`**Описание:** Получает студии по стране`},{heading:`getstudiosbycountry`,content:`**Параметры:**`},{heading:`getstudiosbycountry`,content:"`$country` (string): Страна"},{heading:`getstudiosbycountry`,content:"`$page` (int): Номер страницы"},{heading:`getstudiosbycountry`,content:"`$limit` (int): Количество результатов"},{heading:`getstudiosbycountry`,content:"**Возвращает:** `StudioDocsResponseDto` Результаты поиска"},{heading:`getstudiosbyyear`,content:`**Описание:** Получает студии по году основания`},{heading:`getstudiosbyyear`,content:`**Параметры:**`},{heading:`getstudiosbyyear`,content:"`$year` (int): Год основания"},{heading:`getstudiosbyyear`,content:"`$page` (int): Номер страницы"},{heading:`getstudiosbyyear`,content:"`$limit` (int): Количество результатов"},{heading:`getstudiosbyyear`,content:"**Возвращает:** `StudioDocsResponseDto` Результаты поиска"},{heading:`getstudiosbyyearrange`,content:`**Описание:** Получает студии по диапазону годов основания`},{heading:`getstudiosbyyearrange`,content:`**Параметры:**`},{heading:`getstudiosbyyearrange`,content:"`$fromYear` (int): Начальный год"},{heading:`getstudiosbyyearrange`,content:"`$toYear` (int): Конечный год"},{heading:`getstudiosbyyearrange`,content:"`$page` (int): Номер страницы"},{heading:`getstudiosbyyearrange`,content:"`$limit` (int): Количество результатов"},{heading:`getstudiosbyyearrange`,content:"**Возвращает:** `StudioDocsResponseDto` Результаты поиска"},{heading:`getstudiosformovie`,content:`**Описание:** Получает студии, связанные с определенным фильмом
Находит все студии, которые принимали участие в создании указанного фильма.`},{heading:`getstudiosformovie`,content:`**Параметры:**`},{heading:`getstudiosformovie`,content:"`$movieId` (int): Идентификатор фильма"},{heading:`getstudiosformovie`,content:"`$page` (int): Номер страницы результатов"},{heading:`getstudiosformovie`,content:"`$limit` (int): Количество результатов на странице"},{heading:`getstudiosformovie`,content:"**Возвращает:** `StudioDocsResponseDto` Студии, связанные с фильмом"},{heading:`getstudiosformovie`,content:`**Исключения:**`},{heading:`getstudiosformovie`,content:"`KinopoiskDevException`: При ошибках API"},{heading:`getstudiosformovie`,content:"`\\JsonException|\\KinopoiskDev\\Exceptions\\KinopoiskResponseException`: При ошибках парсинга JSON"}],headings:[{id:`getproductionstudios`,content:"`getProductionStudios()`"},{id:`getstudiosbytype`,content:"`getStudiosByType()`"},{id:`searchstudios`,content:"`searchStudios()`"},{id:`getdubbingstudios`,content:"`getDubbingStudios()`"},{id:`getstudiosbytitle`,content:"`getStudiosByTitle()`"},{id:`getstudiobyid`,content:"`getStudioById()`"},{id:`getrandomstudio`,content:"`getRandomStudio()`"},{id:`searchstudiosbyname`,content:"`searchStudiosByName()`"},{id:`getstudiosbycountry`,content:"`getStudiosByCountry()`"},{id:`getstudiosbyyear`,content:"`getStudiosByYear()`"},{id:`getstudiosbyyearrange`,content:"`getStudiosByYearRange()`"},{id:`getstudiosformovie`,content:"`getStudiosForMovie()`"}]},s=[{depth:2,url:`#getproductionstudios`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`getProductionStudios()`})})},{depth:2,url:`#getstudiosbytype`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`getStudiosByType()`})})},{depth:2,url:`#searchstudios`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`searchStudios()`})})},{depth:2,url:`#getdubbingstudios`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`getDubbingStudios()`})})},{depth:2,url:`#getstudiosbytitle`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`getStudiosByTitle()`})})},{depth:2,url:`#getstudiobyid`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`getStudioById()`})})},{depth:2,url:`#getrandomstudio`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`getRandomStudio()`})})},{depth:2,url:`#searchstudiosbyname`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`searchStudiosByName()`})})},{depth:2,url:`#getstudiosbycountry`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`getStudiosByCountry()`})})},{depth:2,url:`#getstudiosbyyear`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`getStudiosByYear()`})})},{depth:2,url:`#getstudiosbyyearrange`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`getStudiosByYearRange()`})})},{depth:2,url:`#getstudiosformovie`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`getStudiosForMovie()`})})}];function c(e){let t={code:`code`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Класс для API-запросов, связанных со студиями
Этот класс предоставляет методы для всех конечных точек студий API Kinopoisk.dev.
Позволяет получать информацию о кинокомпаниях, студиях дубляжа, производителях
и других организациях, участвующих в создании фильмов.`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 1.0.0`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Версия:`}),` 1.0.0`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`См. также:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`\\KinopoiskDev\\Models\\Studio`}),`: Для структуры данных студии`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`\\KinopoiskDev\\Filter\\StudioSearchFilter`}),`: Для фильтрации запросов`]}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`getproductionstudios`,children:(0,n.jsx)(t.code,{children:`getProductionStudios()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Получает производственные студии
Удобный метод для получения студий типа "Производство".`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$page`}),` (int): Номер страницы результатов`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$limit`}),` (int): Количество результатов на странице`]}),`
`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`StudioDocsResponseDto`}),` Производственные студии`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Исключения:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`KinopoiskDevException`}),`: При ошибках API`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`\\JsonException|\\KinopoiskDev\\Exceptions\\KinopoiskResponseException`}),`: При ошибках парсинга JSON`]}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`getstudiosbytype`,children:(0,n.jsx)(t.code,{children:`getStudiosByType()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Получает студии по типу
Удобный метод для получения студий определенного типа:
"Производство", "Спецэффекты", "Прокат", "Студия дубляжа"`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$type`}),` (string): Тип студии`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$page`}),` (int): Номер страницы результатов`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$limit`}),` (int): Количество результатов на странице`]}),`
`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`StudioDocsResponseDto`}),` Студии указанного типа`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Исключения:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`KinopoiskDevException`}),`: При ошибках API`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`\\JsonException|\\KinopoiskDev\\Exceptions\\KinopoiskResponseException`}),`: При ошибках парсинга JSON`]}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`searchstudios`,children:(0,n.jsx)(t.code,{children:`searchStudios()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Ищет студии по различным критериям
Основной метод для поиска студий с поддержкой сложных фильтров.
Позволяет искать по названию, типу студии, подтипу и связанным фильмам.`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`API Endpoint:`}),` `,(0,n.jsx)(t.code,{children:`/v1.4/studio`})]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$filters`}),` (StudioSearchFilter|null): Объект фильтра для поиска студий`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$page`}),` (int): Номер страницы результатов (по умолчанию: 1)`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$limit`}),` (int): Количество результатов на странице (по умолчанию: 10, максимум: 250)`]}),`
`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`StudioDocsResponseDto`}),` Результаты поиска с пагинацией`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Исключения:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`KinopoiskDevException`}),`: При ошибках API`]}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`getdubbingstudios`,children:(0,n.jsx)(t.code,{children:`getDubbingStudios()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Получает студии дубляжа
Удобный метод для получения студий типа "Студия дубляжа".`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$page`}),` (int): Номер страницы результатов`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$limit`}),` (int): Количество результатов на странице`]}),`
`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`StudioDocsResponseDto`}),` Студии дубляжа`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Исключения:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`KinopoiskDevException`}),`: При ошибках API`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`\\JsonException|\\KinopoiskDev\\Exceptions\\KinopoiskResponseException`}),`: При ошибках парсинга JSON`]}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`getstudiosbytitle`,children:(0,n.jsx)(t.code,{children:`getStudiosByTitle()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Получает студии по названию
Выполняет поиск студий по точному или частичному совпадению названия.`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$title`}),` (string): Название студии для поиска`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$page`}),` (int): Номер страницы результатов`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$limit`}),` (int): Количество результатов на странице`]}),`
`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`StudioDocsResponseDto`}),` Студии с подходящими названиями`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Исключения:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`KinopoiskDevException`}),`: При ошибках API`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`\\JsonException|\\KinopoiskDev\\Exceptions\\KinopoiskResponseException`}),`: При ошибках парсинга JSON`]}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`getstudiobyid`,children:(0,n.jsx)(t.code,{children:`getStudioById()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Получает студию по её уникальному идентификатору`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$studioId`}),` (int): Уникальный идентификатор студии`]}),`
`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`Studio`}),` Объект студии`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Исключения:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`KinopoiskDevException`}),`: При ошибках API`]}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`getrandomstudio`,children:(0,n.jsx)(t.code,{children:`getRandomStudio()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Получает случайную студию`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$filters`}),` (StudioSearchFilter|null): Фильтры для поиска`]}),`
`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`Studio`}),` Случайная студия`]}),`
`,(0,n.jsx)(t.h2,{id:`searchstudiosbyname`,children:(0,n.jsx)(t.code,{children:`searchStudiosByName()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Выполняет поиск студий по названию (алиас для getStudiosByTitle)`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$name`}),` (string): Название для поиска`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$page`}),` (int): Номер страницы`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$limit`}),` (int): Количество результатов`]}),`
`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`StudioDocsResponseDto`}),` Результаты поиска`]}),`
`,(0,n.jsx)(t.h2,{id:`getstudiosbycountry`,children:(0,n.jsx)(t.code,{children:`getStudiosByCountry()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Получает студии по стране`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$country`}),` (string): Страна`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$page`}),` (int): Номер страницы`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$limit`}),` (int): Количество результатов`]}),`
`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`StudioDocsResponseDto`}),` Результаты поиска`]}),`
`,(0,n.jsx)(t.h2,{id:`getstudiosbyyear`,children:(0,n.jsx)(t.code,{children:`getStudiosByYear()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Получает студии по году основания`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$year`}),` (int): Год основания`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$page`}),` (int): Номер страницы`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$limit`}),` (int): Количество результатов`]}),`
`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`StudioDocsResponseDto`}),` Результаты поиска`]}),`
`,(0,n.jsx)(t.h2,{id:`getstudiosbyyearrange`,children:(0,n.jsx)(t.code,{children:`getStudiosByYearRange()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Получает студии по диапазону годов основания`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$fromYear`}),` (int): Начальный год`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$toYear`}),` (int): Конечный год`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$page`}),` (int): Номер страницы`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$limit`}),` (int): Количество результатов`]}),`
`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`StudioDocsResponseDto`}),` Результаты поиска`]}),`
`,(0,n.jsx)(t.h2,{id:`getstudiosformovie`,children:(0,n.jsx)(t.code,{children:`getStudiosForMovie()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Получает студии, связанные с определенным фильмом
Находит все студии, которые принимали участие в создании указанного фильма.`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$movieId`}),` (int): Идентификатор фильма`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$page`}),` (int): Номер страницы результатов`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$limit`}),` (int): Количество результатов на странице`]}),`
`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`StudioDocsResponseDto`}),` Студии, связанные с фильмом`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Исключения:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`KinopoiskDevException`}),`: При ошибках API`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`\\JsonException|\\KinopoiskDev\\Exceptions\\KinopoiskResponseException`}),`: При ошибках парсинга JSON`]}),`
`]})]})}function l(e={}){let{wrapper:t}=e.components||{};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}export{a as _markdown,l as default,r as frontmatter,i as lastModified,o as structuredData,s as toc};