import{r as e}from"./rolldown-runtime-QTnfLwEv.js";import{t}from"./jsx-runtime-By8HlURe.js";var n=e(t()),r={title:`Season`},i=new Date(1786541452e3),a=`

**Описание:** Класс для представления сезона сериала (версия API 1.4)
Представляет информацию о сезоне сериала согласно схеме Season,
включая номер сезона, количество эпизодов, постер, название, описание
и массив эпизодов. Используется для детальной информации о структуре сериалов.

**С версии:** 1.0.0

**Версия:** 1.0.0

**См. также:**

* \`\\KinopoiskDev\\Models\\EpisodeV1_4\`: Для информации об отдельных эпизодах
* \`\\KinopoiskDev\\Models\\Movie\`: Для основной модели фильма/сериала

## \`__construct()\` [#__construct]

**Описание:** Конструктор для создания объекта сезона
Создает новый экземпляр класса Season с полным набором данных о сезоне.
Большинство параметров являются опциональными и могут быть null при отсутствии
соответствующей информации в источнике данных.

**Параметры:**

* \`$movieId\` (int): ID фильма/сериала к которому относится сезон
* \`$number\` (int|null): Номер сезона
* \`$episodesCount\` (int|null): Количество эпизодов в сезоне
* \`$episodes\` (Episode\\[]): Массив эпизодов сезона
* \`$poster\` (ShortImage|null): Постер сезона
* \`$name\` (string|null): Название сезона на русском языке
* \`$enName\` (string|null): Название сезона на английском языке
* \`$duration\` (int|null): Длительность сезона в минутах
* \`$description\` (string|null): Описание сезона на русском языке
* \`$enDescription\` (string|null): Описание сезона на английском языке
* \`$airDate\` (string|null): Дата выхода сезона
* \`$updatedAt\` (string|null): Дата последнего обновления записи
* \`$createdAt\` (string|null): Дата создания записи

## \`fromArray()\` [#fromarray]

**Описание:** Создает объект Season из массива данных API
Фабричный метод для создания экземпляра класса Season из массива данных,
полученных от API Kinopoisk.dev. Безопасно обрабатывает отсутствующие
значения и преобразует вложенные объекты в соответствующие классы.

**Параметры:**

* \`$data\` (array): Массив данных о сезоне от API

**Возвращает:** \`\\KinopoiskDev\\Models\\Season\` Новый экземпляр класса Season с данными из массива

**Исключения:**

* \`\\KinopoiskDev\\Exceptions\\KinopoiskDevException\`:

## \`toArray()\` [#toarray]

**Описание:** Преобразует объект в массив данных
Конвертирует текущий экземпляр класса Season в массив,
совместимый с форматом API Kinopoisk.dev.

**Возвращает:** \`array\` Массив с полными данными о сезоне

## \`getBestName()\` [#getbestname]

**Описание:** Возвращает наилучшее доступное название сезона

**Возвращает:** \`string|null\` Название сезона или null если не задано

## \`getBestDescription()\` [#getbestdescription]

**Описание:** Возвращает наилучшее доступное описание сезона

**Возвращает:** \`string|null\` Описание сезона или null если не задано

## \`hasEpisodes()\` [#hasepisodes]

**Описание:** Проверяет, есть ли эпизоды в сезоне

**Возвращает:** \`bool true\` если есть эпизоды, иначе false

## \`getAvailableEpisodesCount()\` [#getavailableepisodescount]

**Описание:** Возвращает количество доступных эпизодов

**Возвращает:** \`int\` Количество эпизодов в массиве episodes

## \`validate()\` [#validate]

**Описание:** Валидирует данные модели

**Возвращает:** \`bool True\` если данные валидны
`,o={contents:[{heading:void 0,content:`**Описание:** Класс для представления сезона сериала (версия API 1.4)
Представляет информацию о сезоне сериала согласно схеме Season,
включая номер сезона, количество эпизодов, постер, название, описание
и массив эпизодов. Используется для детальной информации о структуре сериалов.`},{heading:void 0,content:`**С версии:** 1.0.0`},{heading:void 0,content:`**Версия:** 1.0.0`},{heading:void 0,content:`**См. также:**`},{heading:void 0,content:"`\\KinopoiskDev\\Models\\EpisodeV1_4`: Для информации об отдельных эпизодах"},{heading:void 0,content:"`\\KinopoiskDev\\Models\\Movie`: Для основной модели фильма/сериала"},{heading:`__construct`,content:`**Описание:** Конструктор для создания объекта сезона
Создает новый экземпляр класса Season с полным набором данных о сезоне.
Большинство параметров являются опциональными и могут быть null при отсутствии
соответствующей информации в источнике данных.`},{heading:`__construct`,content:`**Параметры:**`},{heading:`__construct`,content:"`$movieId` (int): ID фильма/сериала к которому относится сезон"},{heading:`__construct`,content:"`$number` (int|null): Номер сезона"},{heading:`__construct`,content:"`$episodesCount` (int|null): Количество эпизодов в сезоне"},{heading:`__construct`,content:"`$episodes` (Episode\\[]): Массив эпизодов сезона"},{heading:`__construct`,content:"`$poster` (ShortImage|null): Постер сезона"},{heading:`__construct`,content:"`$name` (string|null): Название сезона на русском языке"},{heading:`__construct`,content:"`$enName` (string|null): Название сезона на английском языке"},{heading:`__construct`,content:"`$duration` (int|null): Длительность сезона в минутах"},{heading:`__construct`,content:"`$description` (string|null): Описание сезона на русском языке"},{heading:`__construct`,content:"`$enDescription` (string|null): Описание сезона на английском языке"},{heading:`__construct`,content:"`$airDate` (string|null): Дата выхода сезона"},{heading:`__construct`,content:"`$updatedAt` (string|null): Дата последнего обновления записи"},{heading:`__construct`,content:"`$createdAt` (string|null): Дата создания записи"},{heading:`fromarray`,content:`**Описание:** Создает объект Season из массива данных API
Фабричный метод для создания экземпляра класса Season из массива данных,
полученных от API Kinopoisk.dev. Безопасно обрабатывает отсутствующие
значения и преобразует вложенные объекты в соответствующие классы.`},{heading:`fromarray`,content:`**Параметры:**`},{heading:`fromarray`,content:"`$data` (array): Массив данных о сезоне от API"},{heading:`fromarray`,content:"**Возвращает:** `\\KinopoiskDev\\Models\\Season` Новый экземпляр класса Season с данными из массива"},{heading:`fromarray`,content:`**Исключения:**`},{heading:`fromarray`,content:"`\\KinopoiskDev\\Exceptions\\KinopoiskDevException`:"},{heading:`toarray`,content:`**Описание:** Преобразует объект в массив данных
Конвертирует текущий экземпляр класса Season в массив,
совместимый с форматом API Kinopoisk.dev.`},{heading:`toarray`,content:"**Возвращает:** `array` Массив с полными данными о сезоне"},{heading:`getbestname`,content:`**Описание:** Возвращает наилучшее доступное название сезона`},{heading:`getbestname`,content:"**Возвращает:** `string|null` Название сезона или null если не задано"},{heading:`getbestdescription`,content:`**Описание:** Возвращает наилучшее доступное описание сезона`},{heading:`getbestdescription`,content:"**Возвращает:** `string|null` Описание сезона или null если не задано"},{heading:`hasepisodes`,content:`**Описание:** Проверяет, есть ли эпизоды в сезоне`},{heading:`hasepisodes`,content:"**Возвращает:** `bool true` если есть эпизоды, иначе false"},{heading:`getavailableepisodescount`,content:`**Описание:** Возвращает количество доступных эпизодов`},{heading:`getavailableepisodescount`,content:"**Возвращает:** `int` Количество эпизодов в массиве episodes"},{heading:`validate`,content:`**Описание:** Валидирует данные модели`},{heading:`validate`,content:"**Возвращает:** `bool True` если данные валидны"}],headings:[{id:`__construct`,content:"`__construct()`"},{id:`fromarray`,content:"`fromArray()`"},{id:`toarray`,content:"`toArray()`"},{id:`getbestname`,content:"`getBestName()`"},{id:`getbestdescription`,content:"`getBestDescription()`"},{id:`hasepisodes`,content:"`hasEpisodes()`"},{id:`getavailableepisodescount`,content:"`getAvailableEpisodesCount()`"},{id:`validate`,content:"`validate()`"}]},s=[{depth:2,url:`#__construct`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`__construct()`})})},{depth:2,url:`#fromarray`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`fromArray()`})})},{depth:2,url:`#toarray`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`toArray()`})})},{depth:2,url:`#getbestname`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`getBestName()`})})},{depth:2,url:`#getbestdescription`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`getBestDescription()`})})},{depth:2,url:`#hasepisodes`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`hasEpisodes()`})})},{depth:2,url:`#getavailableepisodescount`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`getAvailableEpisodesCount()`})})},{depth:2,url:`#validate`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`validate()`})})}];function c(e){let t={code:`code`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Класс для представления сезона сериала (версия API 1.4)
Представляет информацию о сезоне сериала согласно схеме Season,
включая номер сезона, количество эпизодов, постер, название, описание
и массив эпизодов. Используется для детальной информации о структуре сериалов.`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 1.0.0`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Версия:`}),` 1.0.0`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`См. также:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`\\KinopoiskDev\\Models\\EpisodeV1_4`}),`: Для информации об отдельных эпизодах`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`\\KinopoiskDev\\Models\\Movie`}),`: Для основной модели фильма/сериала`]}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`__construct`,children:(0,n.jsx)(t.code,{children:`__construct()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Конструктор для создания объекта сезона
Создает новый экземпляр класса Season с полным набором данных о сезоне.
Большинство параметров являются опциональными и могут быть null при отсутствии
соответствующей информации в источнике данных.`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$movieId`}),` (int): ID фильма/сериала к которому относится сезон`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$number`}),` (int|null): Номер сезона`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$episodesCount`}),` (int|null): Количество эпизодов в сезоне`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$episodes`}),` (Episode[]): Массив эпизодов сезона`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$poster`}),` (ShortImage|null): Постер сезона`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$name`}),` (string|null): Название сезона на русском языке`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$enName`}),` (string|null): Название сезона на английском языке`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$duration`}),` (int|null): Длительность сезона в минутах`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$description`}),` (string|null): Описание сезона на русском языке`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$enDescription`}),` (string|null): Описание сезона на английском языке`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$airDate`}),` (string|null): Дата выхода сезона`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$updatedAt`}),` (string|null): Дата последнего обновления записи`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$createdAt`}),` (string|null): Дата создания записи`]}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`fromarray`,children:(0,n.jsx)(t.code,{children:`fromArray()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Создает объект Season из массива данных API
Фабричный метод для создания экземпляра класса Season из массива данных,
полученных от API Kinopoisk.dev. Безопасно обрабатывает отсутствующие
значения и преобразует вложенные объекты в соответствующие классы.`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$data`}),` (array): Массив данных о сезоне от API`]}),`
`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`\\KinopoiskDev\\Models\\Season`}),` Новый экземпляр класса Season с данными из массива`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Исключения:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`\\KinopoiskDev\\Exceptions\\KinopoiskDevException`}),`:`]}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`toarray`,children:(0,n.jsx)(t.code,{children:`toArray()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Преобразует объект в массив данных
Конвертирует текущий экземпляр класса Season в массив,
совместимый с форматом API Kinopoisk.dev.`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`array`}),` Массив с полными данными о сезоне`]}),`
`,(0,n.jsx)(t.h2,{id:`getbestname`,children:(0,n.jsx)(t.code,{children:`getBestName()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Возвращает наилучшее доступное название сезона`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`string|null`}),` Название сезона или null если не задано`]}),`
`,(0,n.jsx)(t.h2,{id:`getbestdescription`,children:(0,n.jsx)(t.code,{children:`getBestDescription()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Возвращает наилучшее доступное описание сезона`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`string|null`}),` Описание сезона или null если не задано`]}),`
`,(0,n.jsx)(t.h2,{id:`hasepisodes`,children:(0,n.jsx)(t.code,{children:`hasEpisodes()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Проверяет, есть ли эпизоды в сезоне`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`bool true`}),` если есть эпизоды, иначе false`]}),`
`,(0,n.jsx)(t.h2,{id:`getavailableepisodescount`,children:(0,n.jsx)(t.code,{children:`getAvailableEpisodesCount()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Возвращает количество доступных эпизодов`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`int`}),` Количество эпизодов в массиве episodes`]}),`
`,(0,n.jsx)(t.h2,{id:`validate`,children:(0,n.jsx)(t.code,{children:`validate()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Валидирует данные модели`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`bool True`}),` если данные валидны`]})]})}function l(e={}){let{wrapper:t}=e.components||{};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}export{a as _markdown,l as default,r as frontmatter,i as lastModified,o as structuredData,s as toc};