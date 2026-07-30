import{r as e}from"./rolldown-runtime-QTnfLwEv.js";import{t}from"./jsx-runtime-By8HlURe.js";var n=e(t()),r={title:`KeywordDocsResponseDto`},i=new Date(1785404498e3),a=`

**Описание:** DTO для ответа API с ключевыми словами
Этот класс представляет структурированный ответ от API Kinopoisk.dev
при запросе списка ключевых слов с поддержкой пагинации.

**С версии:** 1.0.0

**Версия:** 1.0.0

## \`__construct()\` [#__construct]

**Описание:** Конструктор DTO ответа с ключевыми словами

**Параметры:**

* \`$docs\` (Keyword\\[]): Массив объектов ключевых слов
* \`$total\` (int): Общее количество ключевых слов, соответствующих запросу
* \`$limit\` (int): Максимальное количество ключевых слов на странице
* \`$page\` (int): Номер текущей страницы
* \`$pages\` (int): Общее количество страниц

## \`getKeywordTitles()\` [#getkeywordtitles]

**Описание:** Получает все названия ключевых слов

**Возвращает:** \`string[]\` Массив названий ключевых слов

## \`getPopularKeywords()\` [#getpopularkeywords]

**Описание:** Фильтрует ключевые слова по популярности

**Параметры:**

* \`$threshold\` (int): Минимальное количество связанных фильмов

**Возвращает:** \`Keyword[]\` Массив популярных ключевых слов

## \`searchByTitle()\` [#searchbytitle]

**Описание:** Ищет ключевые слова, содержащие указанный текст

**Параметры:**

* \`$searchText\` (string): Текст для поиска в названиях

**Возвращает:** \`Keyword[]\` Массив найденных ключевых слов

## \`groupByPopularity()\` [#groupbypopularity]

**Описание:** Группирует ключевые слова по количеству связанных фильмов

**Возвращает:** \`array<string, Keyword[]>\` Массив групп ключевых слов

## \`getKeywordsForMovie()\` [#getkeywordsformovie]

**Описание:** Получает ключевые слова, связанные с указанным фильмом

**Параметры:**

* \`$movieId\` (int): ID фильма

**Возвращает:** \`Keyword[]\` Массив ключевых слов, связанных с фильмом

## \`getStatistics()\` [#getstatistics]

**Описание:** Получает статистику по ключевым словам

**Возвращает:** \`array<string, mixed>\` Статистика

## \`getRecentlyCreated()\` [#getrecentlycreated]

**Описание:** Получает недавно созданные ключевые слова

**Параметры:**

* \`$days\` (int): Количество дней для считания "недавними"

**Возвращает:** \`Keyword[]\` Массив недавно созданных ключевых слов
`,o={contents:[{heading:void 0,content:`**Описание:** DTO для ответа API с ключевыми словами
Этот класс представляет структурированный ответ от API Kinopoisk.dev
при запросе списка ключевых слов с поддержкой пагинации.`},{heading:void 0,content:`**С версии:** 1.0.0`},{heading:void 0,content:`**Версия:** 1.0.0`},{heading:`__construct`,content:`**Описание:** Конструктор DTO ответа с ключевыми словами`},{heading:`__construct`,content:`**Параметры:**`},{heading:`__construct`,content:"`$docs` (Keyword\\[]): Массив объектов ключевых слов"},{heading:`__construct`,content:"`$total` (int): Общее количество ключевых слов, соответствующих запросу"},{heading:`__construct`,content:"`$limit` (int): Максимальное количество ключевых слов на странице"},{heading:`__construct`,content:"`$page` (int): Номер текущей страницы"},{heading:`__construct`,content:"`$pages` (int): Общее количество страниц"},{heading:`getkeywordtitles`,content:`**Описание:** Получает все названия ключевых слов`},{heading:`getkeywordtitles`,content:"**Возвращает:** `string[]` Массив названий ключевых слов"},{heading:`getpopularkeywords`,content:`**Описание:** Фильтрует ключевые слова по популярности`},{heading:`getpopularkeywords`,content:`**Параметры:**`},{heading:`getpopularkeywords`,content:"`$threshold` (int): Минимальное количество связанных фильмов"},{heading:`getpopularkeywords`,content:"**Возвращает:** `Keyword[]` Массив популярных ключевых слов"},{heading:`searchbytitle`,content:`**Описание:** Ищет ключевые слова, содержащие указанный текст`},{heading:`searchbytitle`,content:`**Параметры:**`},{heading:`searchbytitle`,content:"`$searchText` (string): Текст для поиска в названиях"},{heading:`searchbytitle`,content:"**Возвращает:** `Keyword[]` Массив найденных ключевых слов"},{heading:`groupbypopularity`,content:`**Описание:** Группирует ключевые слова по количеству связанных фильмов`},{heading:`groupbypopularity`,content:"**Возвращает:** `array<string, Keyword[]>` Массив групп ключевых слов"},{heading:`getkeywordsformovie`,content:`**Описание:** Получает ключевые слова, связанные с указанным фильмом`},{heading:`getkeywordsformovie`,content:`**Параметры:**`},{heading:`getkeywordsformovie`,content:"`$movieId` (int): ID фильма"},{heading:`getkeywordsformovie`,content:"**Возвращает:** `Keyword[]` Массив ключевых слов, связанных с фильмом"},{heading:`getstatistics`,content:`**Описание:** Получает статистику по ключевым словам`},{heading:`getstatistics`,content:"**Возвращает:** `array<string, mixed>` Статистика"},{heading:`getrecentlycreated`,content:`**Описание:** Получает недавно созданные ключевые слова`},{heading:`getrecentlycreated`,content:`**Параметры:**`},{heading:`getrecentlycreated`,content:'`$days` (int): Количество дней для считания "недавними"'},{heading:`getrecentlycreated`,content:"**Возвращает:** `Keyword[]` Массив недавно созданных ключевых слов"}],headings:[{id:`__construct`,content:"`__construct()`"},{id:`getkeywordtitles`,content:"`getKeywordTitles()`"},{id:`getpopularkeywords`,content:"`getPopularKeywords()`"},{id:`searchbytitle`,content:"`searchByTitle()`"},{id:`groupbypopularity`,content:"`groupByPopularity()`"},{id:`getkeywordsformovie`,content:"`getKeywordsForMovie()`"},{id:`getstatistics`,content:"`getStatistics()`"},{id:`getrecentlycreated`,content:"`getRecentlyCreated()`"}]},s=[{depth:2,url:`#__construct`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`__construct()`})})},{depth:2,url:`#getkeywordtitles`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`getKeywordTitles()`})})},{depth:2,url:`#getpopularkeywords`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`getPopularKeywords()`})})},{depth:2,url:`#searchbytitle`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`searchByTitle()`})})},{depth:2,url:`#groupbypopularity`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`groupByPopularity()`})})},{depth:2,url:`#getkeywordsformovie`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`getKeywordsForMovie()`})})},{depth:2,url:`#getstatistics`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`getStatistics()`})})},{depth:2,url:`#getrecentlycreated`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`getRecentlyCreated()`})})}];function c(e){let t={code:`code`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` DTO для ответа API с ключевыми словами
Этот класс представляет структурированный ответ от API Kinopoisk.dev
при запросе списка ключевых слов с поддержкой пагинации.`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 1.0.0`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Версия:`}),` 1.0.0`]}),`
`,(0,n.jsx)(t.h2,{id:`__construct`,children:(0,n.jsx)(t.code,{children:`__construct()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Конструктор DTO ответа с ключевыми словами`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$docs`}),` (Keyword[]): Массив объектов ключевых слов`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$total`}),` (int): Общее количество ключевых слов, соответствующих запросу`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$limit`}),` (int): Максимальное количество ключевых слов на странице`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$page`}),` (int): Номер текущей страницы`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$pages`}),` (int): Общее количество страниц`]}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`getkeywordtitles`,children:(0,n.jsx)(t.code,{children:`getKeywordTitles()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Получает все названия ключевых слов`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`string[]`}),` Массив названий ключевых слов`]}),`
`,(0,n.jsx)(t.h2,{id:`getpopularkeywords`,children:(0,n.jsx)(t.code,{children:`getPopularKeywords()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Фильтрует ключевые слова по популярности`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$threshold`}),` (int): Минимальное количество связанных фильмов`]}),`
`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`Keyword[]`}),` Массив популярных ключевых слов`]}),`
`,(0,n.jsx)(t.h2,{id:`searchbytitle`,children:(0,n.jsx)(t.code,{children:`searchByTitle()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Ищет ключевые слова, содержащие указанный текст`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$searchText`}),` (string): Текст для поиска в названиях`]}),`
`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`Keyword[]`}),` Массив найденных ключевых слов`]}),`
`,(0,n.jsx)(t.h2,{id:`groupbypopularity`,children:(0,n.jsx)(t.code,{children:`groupByPopularity()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Группирует ключевые слова по количеству связанных фильмов`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`array<string, Keyword[]>`}),` Массив групп ключевых слов`]}),`
`,(0,n.jsx)(t.h2,{id:`getkeywordsformovie`,children:(0,n.jsx)(t.code,{children:`getKeywordsForMovie()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Получает ключевые слова, связанные с указанным фильмом`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$movieId`}),` (int): ID фильма`]}),`
`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`Keyword[]`}),` Массив ключевых слов, связанных с фильмом`]}),`
`,(0,n.jsx)(t.h2,{id:`getstatistics`,children:(0,n.jsx)(t.code,{children:`getStatistics()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Получает статистику по ключевым словам`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`array<string, mixed>`}),` Статистика`]}),`
`,(0,n.jsx)(t.h2,{id:`getrecentlycreated`,children:(0,n.jsx)(t.code,{children:`getRecentlyCreated()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Получает недавно созданные ключевые слова`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$days`}),` (int): Количество дней для считания "недавними"`]}),`
`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`Keyword[]`}),` Массив недавно созданных ключевых слов`]})]})}function l(e={}){let{wrapper:t}=e.components||{};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}export{a as _markdown,l as default,r as frontmatter,i as lastModified,o as structuredData,s as toc};