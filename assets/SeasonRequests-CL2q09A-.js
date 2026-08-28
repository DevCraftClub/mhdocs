import{r as e}from"./rolldown-runtime-QTnfLwEv.js";import{t}from"./jsx-runtime-By8HlURe.js";var n=e(t()),r={title:`SeasonRequests`},i=new Date(1787834766e3),a=`

**Описание:** Класс для API-запросов, связанных с сезонами
Предоставляет методы для работы с сезонами сериалов через API Kinopoisk.dev.
Включает получение информации о сезонах, их эпизодах, поиск по различным
критериям и фильтрацию. Поддерживает работу с многосезонными сериалами.
Основные возможности:

* Получение сезона по ID
* Получение всех сезонов сериала
* Поиск сезонов по различным критериям
* Получение сезона по номеру и ID фильма
* Фильтрация по номеру сезона, количеству эпизодов
* Пагинация результатов

**С версии:** 1.0.0

**Версия:** 1.0.0

**Пример:**

\`\`\`php
$seasonRequests = new SeasonRequests('your-api-token');
// Получение сезона по ID
$season = $seasonRequests->getSeasonById(123);
// Получение всех сезонов сериала
$seasons = $seasonRequests->getSeasonsForMovie(456);
// Поиск сезонов с фильтрами
$filter = new SeasonSearchFilter();
$filter->number(1)->episodesCount(10, 20);
$seasons = $seasonRequests->searchSeasons($filter, 1, 20);
// Получение конкретного сезона по номеру
$season = $seasonRequests->getSeasonByNumber(456, 2);
\`\`\`

**См. также:**

* \`\\KinopoiskDev\\Filter\\SeasonSearchFilter\`: Для настройки фильтрации
* \`\\KinopoiskDev\\Models\\Season\`: Модель сезона
* \`\\KinopoiskDev\\Responses\\Api\\SeasonDocsResponseDto\`: Ответ с сезонами

## \`getSeasonById()\` [#getseasonbyid]

**Описание:** Получает сезон по его ID
Выполняет запрос к API для получения полной информации о сезоне
по его уникальному идентификатору. Возвращает объект Season
со всеми доступными данными: названием, номером, эпизодами,
датами выхода и другими метаданными.

**С версии:** 1.0.0

**API Endpoint:** \`/v1.4/season/{id}\`

**Параметры:**

* \`$seasonId\` (int): Уникальный идентификатор сезона в системе Kinopoisk

**Возвращает:** \`Season\` Сезон со всеми доступными данными

**Исключения:**

* \`KinopoiskDevException\`: При ошибках API или проблемах с сетью
* \`KinopoiskResponseException\`: При ошибках HTTP-запроса (401, 403, 404)
* \`\\JsonException\`: При ошибках парсинга JSON-ответа

**Пример:**

\`\`\`php
$season = $seasonRequests->getSeasonById(123);
echo $season->name; // Название сезона
echo $season->number; // Номер сезона
echo count($season->episodes); // Количество эпизодов
\`\`\`

## \`getSeasonsForMovie()\` [#getseasonsformovie]

**Описание:** Получает сезоны для определенного фильма/сериала

**Параметры:**

* \`$movieId\` (int): Идентификатор фильма/сериала
* \`$page\` (int): Номер страницы
* \`$limit\` (int): Результатов на странице

**Возвращает:** \`SeasonDocsResponseDto\` Сезоны для фильма/сериала

**Исключения:**

* \`KinopoiskDevException\`: При ошибках API
* \`\\JsonException\`: При ошибках парсинга JSON

## \`searchSeasons()\` [#searchseasons]

**Описание:** Ищет сезоны по различным критериям

**API Endpoint:** \`/v1.4/season\`

**Параметры:**

* \`$filters\` (SeasonSearchFilter|null): Объект фильтра для поиска
* \`$page\` (int): Номер страницы (по умолчанию: 1)
* \`$limit\` (int): Количество результатов на странице (по умолчанию: 10)

**Возвращает:** \`SeasonDocsResponseDto\` Результаты поиска с пагинацией

**Исключения:**

* \`KinopoiskDevException\`: При ошибках API
* \`\\JsonException|\\KinopoiskDev\\Exceptions\\KinopoiskResponseException\`: При ошибках парсинга JSON

## \`getSeasonByNumber()\` [#getseasonbynumber]

**Описание:** Получает сезон по ID фильма и номеру сезона

**Параметры:**

* \`$movieId\` (int): Идентификатор фильма/сериала
* \`$seasonNumber\` (int): Номер сезона

**Возвращает:** \`Season|null\` Сезон или null если не найден

**Исключения:**

* \`KinopoiskDevException\`: При ошибках API
* \`\\JsonException|\\KinopoiskDev\\Exceptions\\KinopoiskResponseException\`: При ошибках парсинга JSON
`,o={contents:[{heading:void 0,content:`**Описание:** Класс для API-запросов, связанных с сезонами
Предоставляет методы для работы с сезонами сериалов через API Kinopoisk.dev.
Включает получение информации о сезонах, их эпизодах, поиск по различным
критериям и фильтрацию. Поддерживает работу с многосезонными сериалами.
Основные возможности:`},{heading:void 0,content:`Получение сезона по ID`},{heading:void 0,content:`Получение всех сезонов сериала`},{heading:void 0,content:`Поиск сезонов по различным критериям`},{heading:void 0,content:`Получение сезона по номеру и ID фильма`},{heading:void 0,content:`Фильтрация по номеру сезона, количеству эпизодов`},{heading:void 0,content:`Пагинация результатов`},{heading:void 0,content:`**С версии:** 1.0.0`},{heading:void 0,content:`**Версия:** 1.0.0`},{heading:void 0,content:`**Пример:**`},{heading:void 0,content:`**См. также:**`},{heading:void 0,content:"`\\KinopoiskDev\\Filter\\SeasonSearchFilter`: Для настройки фильтрации"},{heading:void 0,content:"`\\KinopoiskDev\\Models\\Season`: Модель сезона"},{heading:void 0,content:"`\\KinopoiskDev\\Responses\\Api\\SeasonDocsResponseDto`: Ответ с сезонами"},{heading:`getseasonbyid`,content:`**Описание:** Получает сезон по его ID
Выполняет запрос к API для получения полной информации о сезоне
по его уникальному идентификатору. Возвращает объект Season
со всеми доступными данными: названием, номером, эпизодами,
датами выхода и другими метаданными.`},{heading:`getseasonbyid`,content:`**С версии:** 1.0.0`},{heading:`getseasonbyid`,content:"**API Endpoint:** `/v1.4/season/{id}`"},{heading:`getseasonbyid`,content:`**Параметры:**`},{heading:`getseasonbyid`,content:"`$seasonId` (int): Уникальный идентификатор сезона в системе Kinopoisk"},{heading:`getseasonbyid`,content:"**Возвращает:** `Season` Сезон со всеми доступными данными"},{heading:`getseasonbyid`,content:`**Исключения:**`},{heading:`getseasonbyid`,content:"`KinopoiskDevException`: При ошибках API или проблемах с сетью"},{heading:`getseasonbyid`,content:"`KinopoiskResponseException`: При ошибках HTTP-запроса (401, 403, 404)"},{heading:`getseasonbyid`,content:"`\\JsonException`: При ошибках парсинга JSON-ответа"},{heading:`getseasonbyid`,content:`**Пример:**`},{heading:`getseasonsformovie`,content:`**Описание:** Получает сезоны для определенного фильма/сериала`},{heading:`getseasonsformovie`,content:`**Параметры:**`},{heading:`getseasonsformovie`,content:"`$movieId` (int): Идентификатор фильма/сериала"},{heading:`getseasonsformovie`,content:"`$page` (int): Номер страницы"},{heading:`getseasonsformovie`,content:"`$limit` (int): Результатов на странице"},{heading:`getseasonsformovie`,content:"**Возвращает:** `SeasonDocsResponseDto` Сезоны для фильма/сериала"},{heading:`getseasonsformovie`,content:`**Исключения:**`},{heading:`getseasonsformovie`,content:"`KinopoiskDevException`: При ошибках API"},{heading:`getseasonsformovie`,content:"`\\JsonException`: При ошибках парсинга JSON"},{heading:`searchseasons`,content:`**Описание:** Ищет сезоны по различным критериям`},{heading:`searchseasons`,content:"**API Endpoint:** `/v1.4/season`"},{heading:`searchseasons`,content:`**Параметры:**`},{heading:`searchseasons`,content:"`$filters` (SeasonSearchFilter|null): Объект фильтра для поиска"},{heading:`searchseasons`,content:"`$page` (int): Номер страницы (по умолчанию: 1)"},{heading:`searchseasons`,content:"`$limit` (int): Количество результатов на странице (по умолчанию: 10)"},{heading:`searchseasons`,content:"**Возвращает:** `SeasonDocsResponseDto` Результаты поиска с пагинацией"},{heading:`searchseasons`,content:`**Исключения:**`},{heading:`searchseasons`,content:"`KinopoiskDevException`: При ошибках API"},{heading:`searchseasons`,content:"`\\JsonException|\\KinopoiskDev\\Exceptions\\KinopoiskResponseException`: При ошибках парсинга JSON"},{heading:`getseasonbynumber`,content:`**Описание:** Получает сезон по ID фильма и номеру сезона`},{heading:`getseasonbynumber`,content:`**Параметры:**`},{heading:`getseasonbynumber`,content:"`$movieId` (int): Идентификатор фильма/сериала"},{heading:`getseasonbynumber`,content:"`$seasonNumber` (int): Номер сезона"},{heading:`getseasonbynumber`,content:"**Возвращает:** `Season|null` Сезон или null если не найден"},{heading:`getseasonbynumber`,content:`**Исключения:**`},{heading:`getseasonbynumber`,content:"`KinopoiskDevException`: При ошибках API"},{heading:`getseasonbynumber`,content:"`\\JsonException|\\KinopoiskDev\\Exceptions\\KinopoiskResponseException`: При ошибках парсинга JSON"}],headings:[{id:`getseasonbyid`,content:"`getSeasonById()`"},{id:`getseasonsformovie`,content:"`getSeasonsForMovie()`"},{id:`searchseasons`,content:"`searchSeasons()`"},{id:`getseasonbynumber`,content:"`getSeasonByNumber()`"}]},s=[{depth:2,url:`#getseasonbyid`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`getSeasonById()`})})},{depth:2,url:`#getseasonsformovie`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`getSeasonsForMovie()`})})},{depth:2,url:`#searchseasons`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`searchSeasons()`})})},{depth:2,url:`#getseasonbynumber`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`getSeasonByNumber()`})})}];function c(e){let t={code:`code`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,span:`span`,strong:`strong`,ul:`ul`,...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Класс для API-запросов, связанных с сезонами
Предоставляет методы для работы с сезонами сериалов через API Kinopoisk.dev.
Включает получение информации о сезонах, их эпизодах, поиск по различным
критериям и фильтрацию. Поддерживает работу с многосезонными сериалами.
Основные возможности:`]}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsx)(t.li,{children:`Получение сезона по ID`}),`
`,(0,n.jsx)(t.li,{children:`Получение всех сезонов сериала`}),`
`,(0,n.jsx)(t.li,{children:`Поиск сезонов по различным критериям`}),`
`,(0,n.jsx)(t.li,{children:`Получение сезона по номеру и ID фильма`}),`
`,(0,n.jsx)(t.li,{children:`Фильтрация по номеру сезона, количеству эпизодов`}),`
`,(0,n.jsx)(t.li,{children:`Пагинация результатов`}),`
`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 1.0.0`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Версия:`}),` 1.0.0`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Пример:`})}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M7.01 10.207h-.944l-.515 2.648h.838c.556 0 .97-.105 1.242-.314.272-.21.455-.559.55-1.049.092-.47.05-.802-.124-.995-.175-.193-.523-.29-1.047-.29zM12 5.688C5.373 5.688 0 8.514 0 12s5.373 6.313 12 6.313S24 15.486 24 12c0-3.486-5.373-6.312-12-6.312zm-3.26 7.451c-.261.25-.575.438-.917.551-.336.108-.765.164-1.285.164H5.357l-.327 1.681H3.652l1.23-6.326h2.65c.797 0 1.378.209 1.744.628.366.418.476 1.002.33 1.752a2.836 2.836 0 0 1-.305.847c-.143.255-.33.49-.561.703zm4.024.715l.543-2.799c.063-.318.039-.536-.068-.651-.107-.116-.336-.174-.687-.174H11.46l-.704 3.625H9.388l1.23-6.327h1.367l-.327 1.682h1.218c.767 0 1.295.134 1.586.401s.378.7.263 1.299l-.572 2.944h-1.389zm7.597-2.265a2.782 2.782 0 0 1-.305.847c-.143.255-.33.49-.561.703a2.44 2.44 0 0 1-.917.551c-.336.108-.765.164-1.286.164h-1.18l-.327 1.682h-1.378l1.23-6.326h2.649c.797 0 1.378.209 1.744.628.366.417.477 1.001.331 1.751zM17.766 10.207h-.943l-.516 2.648h.838c.557 0 .971-.105 1.242-.314.272-.21.455-.559.551-1.049.092-.47.049-.802-.125-.995s-.524-.29-1.047-.29z" fill="currentColor" /></svg>`,children:(0,n.jsxs)(t.code,{children:[(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`$seasonRequests `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`=`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:` new`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:` SeasonRequests`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`(`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`'your-api-token'`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`);`})]}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{style:{"--shiki-light":`#6A737D`,"--shiki-dark":`#6A737D`},children:`// Получение сезона по ID`})}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`$season `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`=`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:` $seasonRequests`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`->`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`getSeasonById`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`(`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`123`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`);`})]}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{style:{"--shiki-light":`#6A737D`,"--shiki-dark":`#6A737D`},children:`// Получение всех сезонов сериала`})}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`$seasons `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`=`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:` $seasonRequests`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`->`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`getSeasonsForMovie`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`(`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`456`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`);`})]}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{style:{"--shiki-light":`#6A737D`,"--shiki-dark":`#6A737D`},children:`// Поиск сезонов с фильтрами`})}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`$filter `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`=`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:` new`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:` SeasonSearchFilter`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`();`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`$filter`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`->`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`number`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`(`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`1`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`)`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`->`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`episodesCount`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`(`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`10`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`, `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`20`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`);`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`$seasons `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`=`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:` $seasonRequests`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`->`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`searchSeasons`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`($filter, `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`1`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`, `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`20`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`);`})]}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{style:{"--shiki-light":`#6A737D`,"--shiki-dark":`#6A737D`},children:`// Получение конкретного сезона по номеру`})}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`$season `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`=`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:` $seasonRequests`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`->`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`getSeasonByNumber`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`(`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`456`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`, `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`2`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`);`})]})]})})}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`См. также:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`\\KinopoiskDev\\Filter\\SeasonSearchFilter`}),`: Для настройки фильтрации`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`\\KinopoiskDev\\Models\\Season`}),`: Модель сезона`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`\\KinopoiskDev\\Responses\\Api\\SeasonDocsResponseDto`}),`: Ответ с сезонами`]}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`getseasonbyid`,children:(0,n.jsx)(t.code,{children:`getSeasonById()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Получает сезон по его ID
Выполняет запрос к API для получения полной информации о сезоне
по его уникальному идентификатору. Возвращает объект Season
со всеми доступными данными: названием, номером, эпизодами,
датами выхода и другими метаданными.`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 1.0.0`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`API Endpoint:`}),` `,(0,n.jsx)(t.code,{children:`/v1.4/season/{id}`})]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$seasonId`}),` (int): Уникальный идентификатор сезона в системе Kinopoisk`]}),`
`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`Season`}),` Сезон со всеми доступными данными`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Исключения:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`KinopoiskDevException`}),`: При ошибках API или проблемах с сетью`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`KinopoiskResponseException`}),`: При ошибках HTTP-запроса (401, 403, 404)`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`\\JsonException`}),`: При ошибках парсинга JSON-ответа`]}),`
`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Пример:`})}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M7.01 10.207h-.944l-.515 2.648h.838c.556 0 .97-.105 1.242-.314.272-.21.455-.559.55-1.049.092-.47.05-.802-.124-.995-.175-.193-.523-.29-1.047-.29zM12 5.688C5.373 5.688 0 8.514 0 12s5.373 6.313 12 6.313S24 15.486 24 12c0-3.486-5.373-6.312-12-6.312zm-3.26 7.451c-.261.25-.575.438-.917.551-.336.108-.765.164-1.285.164H5.357l-.327 1.681H3.652l1.23-6.326h2.65c.797 0 1.378.209 1.744.628.366.418.476 1.002.33 1.752a2.836 2.836 0 0 1-.305.847c-.143.255-.33.49-.561.703zm4.024.715l.543-2.799c.063-.318.039-.536-.068-.651-.107-.116-.336-.174-.687-.174H11.46l-.704 3.625H9.388l1.23-6.327h1.367l-.327 1.682h1.218c.767 0 1.295.134 1.586.401s.378.7.263 1.299l-.572 2.944h-1.389zm7.597-2.265a2.782 2.782 0 0 1-.305.847c-.143.255-.33.49-.561.703a2.44 2.44 0 0 1-.917.551c-.336.108-.765.164-1.286.164h-1.18l-.327 1.682h-1.378l1.23-6.326h2.649c.797 0 1.378.209 1.744.628.366.417.477 1.001.331 1.751zM17.766 10.207h-.943l-.516 2.648h.838c.557 0 .971-.105 1.242-.314.272-.21.455-.559.551-1.049.092-.47.049-.802-.125-.995s-.524-.29-1.047-.29z" fill="currentColor" /></svg>`,children:(0,n.jsxs)(t.code,{children:[(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`$season `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`=`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:` $seasonRequests`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`->`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`getSeasonById`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`(`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`123`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`);`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`echo`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:` $season`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`->`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`name; `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6A737D`,"--shiki-dark":`#6A737D`},children:`// Название сезона`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`echo`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:` $season`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`->`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`number; `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6A737D`,"--shiki-dark":`#6A737D`},children:`// Номер сезона`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`echo`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:` count`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`($season`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`->`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`episodes); `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6A737D`,"--shiki-dark":`#6A737D`},children:`// Количество эпизодов`})]})]})})}),`
`,(0,n.jsx)(t.h2,{id:`getseasonsformovie`,children:(0,n.jsx)(t.code,{children:`getSeasonsForMovie()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Получает сезоны для определенного фильма/сериала`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$movieId`}),` (int): Идентификатор фильма/сериала`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$page`}),` (int): Номер страницы`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$limit`}),` (int): Результатов на странице`]}),`
`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`SeasonDocsResponseDto`}),` Сезоны для фильма/сериала`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Исключения:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`KinopoiskDevException`}),`: При ошибках API`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`\\JsonException`}),`: При ошибках парсинга JSON`]}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`searchseasons`,children:(0,n.jsx)(t.code,{children:`searchSeasons()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Ищет сезоны по различным критериям`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`API Endpoint:`}),` `,(0,n.jsx)(t.code,{children:`/v1.4/season`})]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$filters`}),` (SeasonSearchFilter|null): Объект фильтра для поиска`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$page`}),` (int): Номер страницы (по умолчанию: 1)`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$limit`}),` (int): Количество результатов на странице (по умолчанию: 10)`]}),`
`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`SeasonDocsResponseDto`}),` Результаты поиска с пагинацией`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Исключения:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`KinopoiskDevException`}),`: При ошибках API`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`\\JsonException|\\KinopoiskDev\\Exceptions\\KinopoiskResponseException`}),`: При ошибках парсинга JSON`]}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`getseasonbynumber`,children:(0,n.jsx)(t.code,{children:`getSeasonByNumber()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Получает сезон по ID фильма и номеру сезона`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$movieId`}),` (int): Идентификатор фильма/сериала`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$seasonNumber`}),` (int): Номер сезона`]}),`
`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`Season|null`}),` Сезон или null если не найден`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Исключения:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`KinopoiskDevException`}),`: При ошибках API`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`\\JsonException|\\KinopoiskDev\\Exceptions\\KinopoiskResponseException`}),`: При ошибках парсинга JSON`]}),`
`]})]})}function l(e={}){let{wrapper:t}=e.components||{};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}export{a as _markdown,l as default,r as frontmatter,i as lastModified,o as structuredData,s as toc};