import{r as e}from"./rolldown-runtime-QTnfLwEv.js";import{t}from"./jsx-runtime-By8HlURe.js";var n=e(t()),r={title:`KeywordRequests`},i=new Date(1787750944e3),a=`

**Описание:** Класс для API-запросов, связанных с ключевыми словами
Этот класс предоставляет методы для всех конечных точек ключевых слов API Kinopoisk.dev.
Позволяет получать информацию о тематических метках, которые используются для
категоризации и поиска фильмов по содержанию.

**С версии:** 1.0.0

**Версия:** 1.0.0

**См. также:**

* \`\\KinopoiskDev\\Models\\Keyword\`: Для структуры данных ключевого слова
* \`\\KinopoiskDev\\Filter\\KeywordSearchFilter\`: Для фильтрации запросов

## \`getKeywordsByTitle()\` [#getkeywordsbytitle]

**Описание:** Получает ключевые слова по названию
Выполняет поиск ключевых слов по точному или частичному совпадению названия.
Полезно для поиска тематических категорий фильмов.

**Параметры:**

* \`$title\` (string): Название ключевого слова для поиска
* \`$page\` (int): Номер страницы результатов
* \`$limit\` (int): Количество результатов на странице

**Возвращает:** \`KeywordDocsResponseDto\` Ключевые слова с подходящими названиями

**Исключения:**

* \`KinopoiskDevException\`: При ошибках API
* \`\\JsonException\`: При ошибках парсинга JSON

## \`searchKeywords()\` [#searchkeywords]

**Описание:** Ищет ключевые слова по различным критериям
Основной метод для поиска ключевых слов с поддержкой сложных фильтров.
Позволяет искать по названию ключевого слова, связанным фильмам и другим параметрам.

**API Endpoint:** \`/v1.4/keyword\`

**Параметры:**

* \`$filters\` (KeywordSearchFilter|null): Объект фильтра для поиска ключевых слов
* \`$page\` (int): Номер страницы результатов (по умолчанию: 1)
* \`$limit\` (int): Количество результатов на странице (по умолчанию: 10, максимум: 250)

**Возвращает:** \`KeywordDocsResponseDto\` Результаты поиска с пагинацией

**Исключения:**

* \`KinopoiskDevException\`: При ошибках API

## \`getKeywordsForMovie()\` [#getkeywordsformovie]

**Описание:** Получает ключевые слова для определенного фильма
Находит все ключевые слова, которые связаны с указанным фильмом.
Полезно для анализа тематики и содержания конкретного фильма.

**Параметры:**

* \`$movieId\` (int): Идентификатор фильма
* \`$page\` (int): Номер страницы результатов
* \`$limit\` (int): Количество результатов на странице

**Возвращает:** \`KeywordDocsResponseDto\` Ключевые слова, связанные с фильмом

**Исключения:**

* \`KinopoiskDevException\`: При ошибках API
* \`\\JsonException\`: При ошибках парсинга JSON

## \`getKeywordById()\` [#getkeywordbyid]

**Описание:** Получает ключевое слово по его ID
Выполняет поиск конкретного ключевого слова по его уникальному идентификатору.

**Параметры:**

* \`$keywordId\` (int): Уникальный идентификатор ключевого слова

**Возвращает:** \`Keyword|null\` Ключевое слово или null если не найдено

**Исключения:**

* \`KinopoiskDevException\`: При ошибках API
* \`\\JsonException\`: При ошибках парсинга JSON
`,o={contents:[{heading:void 0,content:`**Описание:** Класс для API-запросов, связанных с ключевыми словами
Этот класс предоставляет методы для всех конечных точек ключевых слов API Kinopoisk.dev.
Позволяет получать информацию о тематических метках, которые используются для
категоризации и поиска фильмов по содержанию.`},{heading:void 0,content:`**С версии:** 1.0.0`},{heading:void 0,content:`**Версия:** 1.0.0`},{heading:void 0,content:`**См. также:**`},{heading:void 0,content:"`\\KinopoiskDev\\Models\\Keyword`: Для структуры данных ключевого слова"},{heading:void 0,content:"`\\KinopoiskDev\\Filter\\KeywordSearchFilter`: Для фильтрации запросов"},{heading:`getkeywordsbytitle`,content:`**Описание:** Получает ключевые слова по названию
Выполняет поиск ключевых слов по точному или частичному совпадению названия.
Полезно для поиска тематических категорий фильмов.`},{heading:`getkeywordsbytitle`,content:`**Параметры:**`},{heading:`getkeywordsbytitle`,content:"`$title` (string): Название ключевого слова для поиска"},{heading:`getkeywordsbytitle`,content:"`$page` (int): Номер страницы результатов"},{heading:`getkeywordsbytitle`,content:"`$limit` (int): Количество результатов на странице"},{heading:`getkeywordsbytitle`,content:"**Возвращает:** `KeywordDocsResponseDto` Ключевые слова с подходящими названиями"},{heading:`getkeywordsbytitle`,content:`**Исключения:**`},{heading:`getkeywordsbytitle`,content:"`KinopoiskDevException`: При ошибках API"},{heading:`getkeywordsbytitle`,content:"`\\JsonException`: При ошибках парсинга JSON"},{heading:`searchkeywords`,content:`**Описание:** Ищет ключевые слова по различным критериям
Основной метод для поиска ключевых слов с поддержкой сложных фильтров.
Позволяет искать по названию ключевого слова, связанным фильмам и другим параметрам.`},{heading:`searchkeywords`,content:"**API Endpoint:** `/v1.4/keyword`"},{heading:`searchkeywords`,content:`**Параметры:**`},{heading:`searchkeywords`,content:"`$filters` (KeywordSearchFilter|null): Объект фильтра для поиска ключевых слов"},{heading:`searchkeywords`,content:"`$page` (int): Номер страницы результатов (по умолчанию: 1)"},{heading:`searchkeywords`,content:"`$limit` (int): Количество результатов на странице (по умолчанию: 10, максимум: 250)"},{heading:`searchkeywords`,content:"**Возвращает:** `KeywordDocsResponseDto` Результаты поиска с пагинацией"},{heading:`searchkeywords`,content:`**Исключения:**`},{heading:`searchkeywords`,content:"`KinopoiskDevException`: При ошибках API"},{heading:`getkeywordsformovie`,content:`**Описание:** Получает ключевые слова для определенного фильма
Находит все ключевые слова, которые связаны с указанным фильмом.
Полезно для анализа тематики и содержания конкретного фильма.`},{heading:`getkeywordsformovie`,content:`**Параметры:**`},{heading:`getkeywordsformovie`,content:"`$movieId` (int): Идентификатор фильма"},{heading:`getkeywordsformovie`,content:"`$page` (int): Номер страницы результатов"},{heading:`getkeywordsformovie`,content:"`$limit` (int): Количество результатов на странице"},{heading:`getkeywordsformovie`,content:"**Возвращает:** `KeywordDocsResponseDto` Ключевые слова, связанные с фильмом"},{heading:`getkeywordsformovie`,content:`**Исключения:**`},{heading:`getkeywordsformovie`,content:"`KinopoiskDevException`: При ошибках API"},{heading:`getkeywordsformovie`,content:"`\\JsonException`: При ошибках парсинга JSON"},{heading:`getkeywordbyid`,content:`**Описание:** Получает ключевое слово по его ID
Выполняет поиск конкретного ключевого слова по его уникальному идентификатору.`},{heading:`getkeywordbyid`,content:`**Параметры:**`},{heading:`getkeywordbyid`,content:"`$keywordId` (int): Уникальный идентификатор ключевого слова"},{heading:`getkeywordbyid`,content:"**Возвращает:** `Keyword|null` Ключевое слово или null если не найдено"},{heading:`getkeywordbyid`,content:`**Исключения:**`},{heading:`getkeywordbyid`,content:"`KinopoiskDevException`: При ошибках API"},{heading:`getkeywordbyid`,content:"`\\JsonException`: При ошибках парсинга JSON"}],headings:[{id:`getkeywordsbytitle`,content:"`getKeywordsByTitle()`"},{id:`searchkeywords`,content:"`searchKeywords()`"},{id:`getkeywordsformovie`,content:"`getKeywordsForMovie()`"},{id:`getkeywordbyid`,content:"`getKeywordById()`"}]},s=[{depth:2,url:`#getkeywordsbytitle`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`getKeywordsByTitle()`})})},{depth:2,url:`#searchkeywords`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`searchKeywords()`})})},{depth:2,url:`#getkeywordsformovie`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`getKeywordsForMovie()`})})},{depth:2,url:`#getkeywordbyid`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`getKeywordById()`})})}];function c(e){let t={code:`code`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Класс для API-запросов, связанных с ключевыми словами
Этот класс предоставляет методы для всех конечных точек ключевых слов API Kinopoisk.dev.
Позволяет получать информацию о тематических метках, которые используются для
категоризации и поиска фильмов по содержанию.`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 1.0.0`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Версия:`}),` 1.0.0`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`См. также:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`\\KinopoiskDev\\Models\\Keyword`}),`: Для структуры данных ключевого слова`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`\\KinopoiskDev\\Filter\\KeywordSearchFilter`}),`: Для фильтрации запросов`]}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`getkeywordsbytitle`,children:(0,n.jsx)(t.code,{children:`getKeywordsByTitle()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Получает ключевые слова по названию
Выполняет поиск ключевых слов по точному или частичному совпадению названия.
Полезно для поиска тематических категорий фильмов.`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$title`}),` (string): Название ключевого слова для поиска`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$page`}),` (int): Номер страницы результатов`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$limit`}),` (int): Количество результатов на странице`]}),`
`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`KeywordDocsResponseDto`}),` Ключевые слова с подходящими названиями`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Исключения:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`KinopoiskDevException`}),`: При ошибках API`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`\\JsonException`}),`: При ошибках парсинга JSON`]}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`searchkeywords`,children:(0,n.jsx)(t.code,{children:`searchKeywords()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Ищет ключевые слова по различным критериям
Основной метод для поиска ключевых слов с поддержкой сложных фильтров.
Позволяет искать по названию ключевого слова, связанным фильмам и другим параметрам.`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`API Endpoint:`}),` `,(0,n.jsx)(t.code,{children:`/v1.4/keyword`})]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$filters`}),` (KeywordSearchFilter|null): Объект фильтра для поиска ключевых слов`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$page`}),` (int): Номер страницы результатов (по умолчанию: 1)`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$limit`}),` (int): Количество результатов на странице (по умолчанию: 10, максимум: 250)`]}),`
`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`KeywordDocsResponseDto`}),` Результаты поиска с пагинацией`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Исключения:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`KinopoiskDevException`}),`: При ошибках API`]}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`getkeywordsformovie`,children:(0,n.jsx)(t.code,{children:`getKeywordsForMovie()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Получает ключевые слова для определенного фильма
Находит все ключевые слова, которые связаны с указанным фильмом.
Полезно для анализа тематики и содержания конкретного фильма.`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$movieId`}),` (int): Идентификатор фильма`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$page`}),` (int): Номер страницы результатов`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$limit`}),` (int): Количество результатов на странице`]}),`
`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`KeywordDocsResponseDto`}),` Ключевые слова, связанные с фильмом`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Исключения:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`KinopoiskDevException`}),`: При ошибках API`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`\\JsonException`}),`: При ошибках парсинга JSON`]}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`getkeywordbyid`,children:(0,n.jsx)(t.code,{children:`getKeywordById()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Получает ключевое слово по его ID
Выполняет поиск конкретного ключевого слова по его уникальному идентификатору.`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$keywordId`}),` (int): Уникальный идентификатор ключевого слова`]}),`
`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`Keyword|null`}),` Ключевое слово или null если не найдено`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Исключения:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`KinopoiskDevException`}),`: При ошибках API`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`\\JsonException`}),`: При ошибках парсинга JSON`]}),`
`]})]})}function l(e={}){let{wrapper:t}=e.components||{};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}export{a as _markdown,l as default,r as frontmatter,i as lastModified,o as structuredData,s as toc};