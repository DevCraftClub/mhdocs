import{r as e}from"./rolldown-runtime-QTnfLwEv.js";import{t}from"./jsx-runtime-By8HlURe.js";var n=e(t()),r={title:`Lists`},i=new Date(1787223655e3),a=`

**Описание:** Модель коллекции фильмов
Эта модель представляет коллекцию или список фильмов из API Kinopoisk.dev,
такие как топ-250, жанровые подборки, тематические списки и другие коллекции.

**С версии:** 1.0.0

**Версия:** 1.0.0

## \`__construct()\` [#__construct]

**Описание:** Конструктор модели коллекции

**Параметры:**

* \`$category\` (string|null): Категория коллекции
* \`$slug\` (string|null): Уникальный идентификатор коллекции
* \`$moviesCount\` (int|null): Количество фильмов в коллекции
* \`$cover\` (ShortImage|null): Обложка коллекции
* \`$name\` (string): Название коллекции
* \`$updatedAt\` (string|null): Дата последнего обновления
* \`$createdAt\` (string|null): Дата создания

## \`fromArray()\` [#fromarray]

**Описание:** Создает экземпляр модели из массива данных

**Возвращает:** \`static\` Экземпляр модели коллекции

## \`validate()\` [#validate]

**Описание:** Валидирует данные модели

**Возвращает:** \`bool True\` если данные валидны

## \`getUrl()\` [#geturl]

**Описание:** Получает URL коллекции на сайте

**Возвращает:** \`string|null URL\` коллекции или null, если slug отсутствует

## \`isPopular()\` [#ispopular]

**Описание:** Проверяет, является ли коллекция популярной (содержит много фильмов)

**Параметры:**

* \`$threshold\` (int): Минимальное количество фильмов для считания коллекции популярной (по умолчанию 100)

**Возвращает:** \`bool True,\` если коллекция популярная

## \`getSummary()\` [#getsummary]

**Описание:** Возвращает краткую информацию о коллекции

**Возвращает:** \`string\` Краткая информация о коллекции

## \`toArray()\` [#toarray]

**Описание:** Преобразует модель в массив

**Параметры:**

* \`$includeNulls\` (bool): Включать ли null значения

**Возвращает:** \`array<string, mixed>\` Массив данных модели
`,o={contents:[{heading:void 0,content:`**Описание:** Модель коллекции фильмов
Эта модель представляет коллекцию или список фильмов из API Kinopoisk.dev,
такие как топ-250, жанровые подборки, тематические списки и другие коллекции.`},{heading:void 0,content:`**С версии:** 1.0.0`},{heading:void 0,content:`**Версия:** 1.0.0`},{heading:`__construct`,content:`**Описание:** Конструктор модели коллекции`},{heading:`__construct`,content:`**Параметры:**`},{heading:`__construct`,content:"`$category` (string|null): Категория коллекции"},{heading:`__construct`,content:"`$slug` (string|null): Уникальный идентификатор коллекции"},{heading:`__construct`,content:"`$moviesCount` (int|null): Количество фильмов в коллекции"},{heading:`__construct`,content:"`$cover` (ShortImage|null): Обложка коллекции"},{heading:`__construct`,content:"`$name` (string): Название коллекции"},{heading:`__construct`,content:"`$updatedAt` (string|null): Дата последнего обновления"},{heading:`__construct`,content:"`$createdAt` (string|null): Дата создания"},{heading:`fromarray`,content:`**Описание:** Создает экземпляр модели из массива данных`},{heading:`fromarray`,content:"**Возвращает:** `static` Экземпляр модели коллекции"},{heading:`validate`,content:`**Описание:** Валидирует данные модели`},{heading:`validate`,content:"**Возвращает:** `bool True` если данные валидны"},{heading:`geturl`,content:`**Описание:** Получает URL коллекции на сайте`},{heading:`geturl`,content:"**Возвращает:** `string|null URL` коллекции или null, если slug отсутствует"},{heading:`ispopular`,content:`**Описание:** Проверяет, является ли коллекция популярной (содержит много фильмов)`},{heading:`ispopular`,content:`**Параметры:**`},{heading:`ispopular`,content:"`$threshold` (int): Минимальное количество фильмов для считания коллекции популярной (по умолчанию 100)"},{heading:`ispopular`,content:"**Возвращает:** `bool True,` если коллекция популярная"},{heading:`getsummary`,content:`**Описание:** Возвращает краткую информацию о коллекции`},{heading:`getsummary`,content:"**Возвращает:** `string` Краткая информация о коллекции"},{heading:`toarray`,content:`**Описание:** Преобразует модель в массив`},{heading:`toarray`,content:`**Параметры:**`},{heading:`toarray`,content:"`$includeNulls` (bool): Включать ли null значения"},{heading:`toarray`,content:"**Возвращает:** `array<string, mixed>` Массив данных модели"}],headings:[{id:`__construct`,content:"`__construct()`"},{id:`fromarray`,content:"`fromArray()`"},{id:`validate`,content:"`validate()`"},{id:`geturl`,content:"`getUrl()`"},{id:`ispopular`,content:"`isPopular()`"},{id:`getsummary`,content:"`getSummary()`"},{id:`toarray`,content:"`toArray()`"}]},s=[{depth:2,url:`#__construct`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`__construct()`})})},{depth:2,url:`#fromarray`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`fromArray()`})})},{depth:2,url:`#validate`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`validate()`})})},{depth:2,url:`#geturl`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`getUrl()`})})},{depth:2,url:`#ispopular`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`isPopular()`})})},{depth:2,url:`#getsummary`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`getSummary()`})})},{depth:2,url:`#toarray`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`toArray()`})})}];function c(e){let t={code:`code`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Модель коллекции фильмов
Эта модель представляет коллекцию или список фильмов из API Kinopoisk.dev,
такие как топ-250, жанровые подборки, тематические списки и другие коллекции.`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 1.0.0`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Версия:`}),` 1.0.0`]}),`
`,(0,n.jsx)(t.h2,{id:`__construct`,children:(0,n.jsx)(t.code,{children:`__construct()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Конструктор модели коллекции`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$category`}),` (string|null): Категория коллекции`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$slug`}),` (string|null): Уникальный идентификатор коллекции`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$moviesCount`}),` (int|null): Количество фильмов в коллекции`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$cover`}),` (ShortImage|null): Обложка коллекции`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$name`}),` (string): Название коллекции`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$updatedAt`}),` (string|null): Дата последнего обновления`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$createdAt`}),` (string|null): Дата создания`]}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`fromarray`,children:(0,n.jsx)(t.code,{children:`fromArray()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Создает экземпляр модели из массива данных`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`static`}),` Экземпляр модели коллекции`]}),`
`,(0,n.jsx)(t.h2,{id:`validate`,children:(0,n.jsx)(t.code,{children:`validate()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Валидирует данные модели`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`bool True`}),` если данные валидны`]}),`
`,(0,n.jsx)(t.h2,{id:`geturl`,children:(0,n.jsx)(t.code,{children:`getUrl()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Получает URL коллекции на сайте`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`string|null URL`}),` коллекции или null, если slug отсутствует`]}),`
`,(0,n.jsx)(t.h2,{id:`ispopular`,children:(0,n.jsx)(t.code,{children:`isPopular()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Проверяет, является ли коллекция популярной (содержит много фильмов)`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$threshold`}),` (int): Минимальное количество фильмов для считания коллекции популярной (по умолчанию 100)`]}),`
`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`bool True,`}),` если коллекция популярная`]}),`
`,(0,n.jsx)(t.h2,{id:`getsummary`,children:(0,n.jsx)(t.code,{children:`getSummary()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Возвращает краткую информацию о коллекции`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`string`}),` Краткая информация о коллекции`]}),`
`,(0,n.jsx)(t.h2,{id:`toarray`,children:(0,n.jsx)(t.code,{children:`toArray()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Преобразует модель в массив`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$includeNulls`}),` (bool): Включать ли null значения`]}),`
`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`array<string, mixed>`}),` Массив данных модели`]})]})}function l(e={}){let{wrapper:t}=e.components||{};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}export{a as _markdown,l as default,r as frontmatter,i as lastModified,o as structuredData,s as toc};