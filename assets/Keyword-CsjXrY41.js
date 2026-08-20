import{r as e}from"./rolldown-runtime-QTnfLwEv.js";import{t}from"./jsx-runtime-By8HlURe.js";var n=e(t()),r={title:`Keyword`},i=new Date(1787217967e3),a=`

**Описание:** Модель ключевого слова
Эта модель представляет ключевое слово (тематическую метку) из API Kinopoisk.dev,
которое используется для категоризации и поиска фильмов по содержанию и тематике.

**С версии:** 1.0.0

**Версия:** 1.0.0

## \`__construct()\` [#__construct]

**Описание:** Конструктор модели ключевого слова

**Параметры:**

* \`$id\` (int): Уникальный идентификатор
* \`$title\` (string|null): Название ключевого слова
* \`$movies\` (MovieFromKeyword\\[]): Связанные фильмы
* \`$updatedAt\` (string): Дата последнего обновления
* \`$createdAt\` (string): Дата создания

## \`fromArray()\` [#fromarray]

**Описание:** Создает экземпляр модели из массива данных

**Возвращает:** \`static\` Экземпляр модели ключевого слова

## \`validate()\` [#validate]

**Описание:** Валидирует данные модели

**Возвращает:** \`bool True\` если данные валидны

## \`isPopular()\` [#ispopular]

**Описание:** Проверяет, является ли ключевое слово популярным

**Параметры:**

* \`$threshold\` (int): Минимальное количество фильмов для считания популярным (по умолчанию 10)

**Возвращает:** \`bool True,\` если ключевое слово популярное

## \`getMoviesCount()\` [#getmoviescount]

**Описание:** Возвращает количество связанных фильмов

**Возвращает:** \`int\` Количество фильмов, использующих это ключевое слово

## \`isRelatedToMovie()\` [#isrelatedtomovie]

**Описание:** Проверяет, связано ли ключевое слово с указанным фильмом

**Параметры:**

* \`$movieId\` (int): ID фильма для проверки

**Возвращает:** \`bool True,\` если ключевое слово связано с фильмом

## \`getMovieIds()\` [#getmovieids]

**Описание:** Получает список ID всех связанных фильмов

**Возвращает:** \`int[]\` Массив ID фильмов

## \`getSummary()\` [#getsummary]

**Описание:** Возвращает краткую информацию о ключевом слове

**Возвращает:** \`string\` Краткое описание ключевого слова

## \`isRecentlyCreated()\` [#isrecentlycreated]

**Описание:** Проверяет, недавно ли было создано ключевое слово

**Параметры:**

* \`$days\` (int): Количество дней для считания "недавним" (по умолчанию 30)

**Возвращает:** \`bool True,\` если ключевое слово создано недавно

## \`toArray()\` [#toarray]

**Описание:** Преобразует модель в массив

**Возвращает:** \`array<string, mixed>\` Массив данных модели
`,o={contents:[{heading:void 0,content:`**Описание:** Модель ключевого слова
Эта модель представляет ключевое слово (тематическую метку) из API Kinopoisk.dev,
которое используется для категоризации и поиска фильмов по содержанию и тематике.`},{heading:void 0,content:`**С версии:** 1.0.0`},{heading:void 0,content:`**Версия:** 1.0.0`},{heading:`__construct`,content:`**Описание:** Конструктор модели ключевого слова`},{heading:`__construct`,content:`**Параметры:**`},{heading:`__construct`,content:"`$id` (int): Уникальный идентификатор"},{heading:`__construct`,content:"`$title` (string|null): Название ключевого слова"},{heading:`__construct`,content:"`$movies` (MovieFromKeyword\\[]): Связанные фильмы"},{heading:`__construct`,content:"`$updatedAt` (string): Дата последнего обновления"},{heading:`__construct`,content:"`$createdAt` (string): Дата создания"},{heading:`fromarray`,content:`**Описание:** Создает экземпляр модели из массива данных`},{heading:`fromarray`,content:"**Возвращает:** `static` Экземпляр модели ключевого слова"},{heading:`validate`,content:`**Описание:** Валидирует данные модели`},{heading:`validate`,content:"**Возвращает:** `bool True` если данные валидны"},{heading:`ispopular`,content:`**Описание:** Проверяет, является ли ключевое слово популярным`},{heading:`ispopular`,content:`**Параметры:**`},{heading:`ispopular`,content:"`$threshold` (int): Минимальное количество фильмов для считания популярным (по умолчанию 10)"},{heading:`ispopular`,content:"**Возвращает:** `bool True,` если ключевое слово популярное"},{heading:`getmoviescount`,content:`**Описание:** Возвращает количество связанных фильмов`},{heading:`getmoviescount`,content:"**Возвращает:** `int` Количество фильмов, использующих это ключевое слово"},{heading:`isrelatedtomovie`,content:`**Описание:** Проверяет, связано ли ключевое слово с указанным фильмом`},{heading:`isrelatedtomovie`,content:`**Параметры:**`},{heading:`isrelatedtomovie`,content:"`$movieId` (int): ID фильма для проверки"},{heading:`isrelatedtomovie`,content:"**Возвращает:** `bool True,` если ключевое слово связано с фильмом"},{heading:`getmovieids`,content:`**Описание:** Получает список ID всех связанных фильмов`},{heading:`getmovieids`,content:"**Возвращает:** `int[]` Массив ID фильмов"},{heading:`getsummary`,content:`**Описание:** Возвращает краткую информацию о ключевом слове`},{heading:`getsummary`,content:"**Возвращает:** `string` Краткое описание ключевого слова"},{heading:`isrecentlycreated`,content:`**Описание:** Проверяет, недавно ли было создано ключевое слово`},{heading:`isrecentlycreated`,content:`**Параметры:**`},{heading:`isrecentlycreated`,content:'`$days` (int): Количество дней для считания "недавним" (по умолчанию 30)'},{heading:`isrecentlycreated`,content:"**Возвращает:** `bool True,` если ключевое слово создано недавно"},{heading:`toarray`,content:`**Описание:** Преобразует модель в массив`},{heading:`toarray`,content:"**Возвращает:** `array<string, mixed>` Массив данных модели"}],headings:[{id:`__construct`,content:"`__construct()`"},{id:`fromarray`,content:"`fromArray()`"},{id:`validate`,content:"`validate()`"},{id:`ispopular`,content:"`isPopular()`"},{id:`getmoviescount`,content:"`getMoviesCount()`"},{id:`isrelatedtomovie`,content:"`isRelatedToMovie()`"},{id:`getmovieids`,content:"`getMovieIds()`"},{id:`getsummary`,content:"`getSummary()`"},{id:`isrecentlycreated`,content:"`isRecentlyCreated()`"},{id:`toarray`,content:"`toArray()`"}]},s=[{depth:2,url:`#__construct`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`__construct()`})})},{depth:2,url:`#fromarray`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`fromArray()`})})},{depth:2,url:`#validate`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`validate()`})})},{depth:2,url:`#ispopular`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`isPopular()`})})},{depth:2,url:`#getmoviescount`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`getMoviesCount()`})})},{depth:2,url:`#isrelatedtomovie`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`isRelatedToMovie()`})})},{depth:2,url:`#getmovieids`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`getMovieIds()`})})},{depth:2,url:`#getsummary`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`getSummary()`})})},{depth:2,url:`#isrecentlycreated`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`isRecentlyCreated()`})})},{depth:2,url:`#toarray`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`toArray()`})})}];function c(e){let t={code:`code`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Модель ключевого слова
Эта модель представляет ключевое слово (тематическую метку) из API Kinopoisk.dev,
которое используется для категоризации и поиска фильмов по содержанию и тематике.`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 1.0.0`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Версия:`}),` 1.0.0`]}),`
`,(0,n.jsx)(t.h2,{id:`__construct`,children:(0,n.jsx)(t.code,{children:`__construct()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Конструктор модели ключевого слова`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$id`}),` (int): Уникальный идентификатор`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$title`}),` (string|null): Название ключевого слова`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$movies`}),` (MovieFromKeyword[]): Связанные фильмы`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$updatedAt`}),` (string): Дата последнего обновления`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$createdAt`}),` (string): Дата создания`]}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`fromarray`,children:(0,n.jsx)(t.code,{children:`fromArray()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Создает экземпляр модели из массива данных`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`static`}),` Экземпляр модели ключевого слова`]}),`
`,(0,n.jsx)(t.h2,{id:`validate`,children:(0,n.jsx)(t.code,{children:`validate()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Валидирует данные модели`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`bool True`}),` если данные валидны`]}),`
`,(0,n.jsx)(t.h2,{id:`ispopular`,children:(0,n.jsx)(t.code,{children:`isPopular()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Проверяет, является ли ключевое слово популярным`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$threshold`}),` (int): Минимальное количество фильмов для считания популярным (по умолчанию 10)`]}),`
`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`bool True,`}),` если ключевое слово популярное`]}),`
`,(0,n.jsx)(t.h2,{id:`getmoviescount`,children:(0,n.jsx)(t.code,{children:`getMoviesCount()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Возвращает количество связанных фильмов`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`int`}),` Количество фильмов, использующих это ключевое слово`]}),`
`,(0,n.jsx)(t.h2,{id:`isrelatedtomovie`,children:(0,n.jsx)(t.code,{children:`isRelatedToMovie()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Проверяет, связано ли ключевое слово с указанным фильмом`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$movieId`}),` (int): ID фильма для проверки`]}),`
`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`bool True,`}),` если ключевое слово связано с фильмом`]}),`
`,(0,n.jsx)(t.h2,{id:`getmovieids`,children:(0,n.jsx)(t.code,{children:`getMovieIds()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Получает список ID всех связанных фильмов`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`int[]`}),` Массив ID фильмов`]}),`
`,(0,n.jsx)(t.h2,{id:`getsummary`,children:(0,n.jsx)(t.code,{children:`getSummary()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Возвращает краткую информацию о ключевом слове`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`string`}),` Краткое описание ключевого слова`]}),`
`,(0,n.jsx)(t.h2,{id:`isrecentlycreated`,children:(0,n.jsx)(t.code,{children:`isRecentlyCreated()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Проверяет, недавно ли было создано ключевое слово`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$days`}),` (int): Количество дней для считания "недавним" (по умолчанию 30)`]}),`
`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`bool True,`}),` если ключевое слово создано недавно`]}),`
`,(0,n.jsx)(t.h2,{id:`toarray`,children:(0,n.jsx)(t.code,{children:`toArray()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Преобразует модель в массив`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`array<string, mixed>`}),` Массив данных модели`]})]})}function l(e={}){let{wrapper:t}=e.components||{};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}export{a as _markdown,l as default,r as frontmatter,i as lastModified,o as structuredData,s as toc};