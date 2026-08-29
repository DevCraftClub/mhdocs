import{r as e}from"./rolldown-runtime-QTnfLwEv.js";import{t}from"./jsx-runtime-By8HlURe.js";var n=e(t()),r={title:`MovieInPerson`},i=new Date(1788011088e3),a=`

**Описание:** Класс для представления персоны в контексте фильма
Представляет информацию о персоне (актер, режиссер, сценарист и др.) в контексте
конкретного фильма или сериала. Содержит основные данные о персоне, включая
идентификатор, имена, рейтинг, описание роли и профессию. Используется для
хранения и обработки данных об участниках кинопроизводства, полученных от API
Kinopoisk.dev.

**С версии:** 1.0.0

**Версия:** 1.0.0

**См. также:**

* \`\\KinopoiskDev\\Models\\PersonInMovie\`: Для обратной связи (персона в фильме)
* \`\\KinopoiskDev\\Models\\Person\`: Для полной информации о персоне
* \`\\KinopoiskDev\\Models\\Movie\`: Для использования в информации о фильмах

## \`__construct()\` [#__construct]

**Описание:** Конструктор модели фильма в персоне
Создает новый экземпляр класса MovieInPerson с указанными параметрами.
Только идентификатор является обязательным параметром, остальные могут
быть null при отсутствии соответствующей информации о персоне или её роли
в конкретном фильме.

**Параметры:**

* \`$id\` (int): Уникальный идентификатор персоны в системе Kinopoisk
* \`$name\` (string|null): Имя персоны на русском языке (null если не указано)
* \`$alternativeName\` (string|null): Альтернативное имя персоны (null если не указано)
* \`$rating\` (float|null): Рейтинг персоны в контексте данного фильма (null если не указан)
* \`$general\` (bool|null): Является ли персона главным участником фильма (null если не определено)
* \`$description\` (string|null): Описание роли персоны в фильме (null если не указано)
* \`$enProfession\` (string|null): Профессия персоны на английском языке (null если не указана)

**Пример:**

\`\`\`php
$moviePerson = new MovieInPerson(
id: 123456,
name: 'Иван Петров',
alternativeName: 'Ivan Petrov',
rating: 8.5,
general: true,
description: 'Главная роль',
enProfession: 'actor'
);
\`\`\`

**См. также:**

* \`MovieInPerson::fromArray\`: () Для создания объекта из массива данных API
* \`MovieInPerson::toArray\`: () Для преобразования объекта в массив

## \`fromArray()\` [#fromarray]

**Описание:** Создает объект MovieInPerson из массива данных API
Фабричный метод для создания экземпляра класса MovieInPerson из массива данных,
полученных от API Kinopoisk.dev. Безопасно обрабатывает отсутствующие значения,
устанавливая их в null. Идентификатор является обязательным параметром и должен
присутствовать в массиве данных.

* id: int - уникальный идентификатор персоны (обязательный)
* name: string|null - имя персоны на русском языке
* alternativeName: string|null - альтернативное имя персоны
* rating: float|null - рейтинг персоны в контексте фильма
* general: bool|null - является ли персона главным участником
* description: string|null - описание роли в фильме
* enProfession: string|null - профессия на английском языке

**Параметры:**

* \`$data\` (array): Массив данных о персоне от API, содержащий ключи:

**Возвращает:** \`BaseModel\` Новый экземпляр класса MovieInPerson с данными из массива

**Пример:**

\`\`\`php
$personData = [
'id' => 123456,
'name' => 'Иван Петров',
'alternativeName' => 'Ivan Petrov',
'rating' => 8.5,
'general' => true,
'description' => 'Главная роль',
'enProfession' => 'actor'
];
$moviePerson = MovieInPerson::fromArray($personData);
\`\`\`

**См. также:**

* \`MovieInPerson::toArray\`: () Для обратного преобразования в массив
* \`BaseModel::fromArray\`: () Реализация интерфейса BaseModel

## \`toArray()\` [#toarray]

**Описание:** Преобразует объект в массив данных
Конвертирует текущий экземпляр класса MovieInPerson в массив,
совместимый с форматом API Kinopoisk.dev. Используется для сериализации
данных при отправке запросов к API, экспорта данных в JSON или других
операций преобразования. Все свойства объекта, включая null-значения,
сохраняются в результирующем массиве.

* id: int - уникальный идентификатор персоны
* name: string|null - имя персоны на русском языке
* alternativeName: string|null - альтернативное имя персоны
* rating: float|null - рейтинг персоны в контексте фильма
* general: bool|null - является ли персона главным участником
* description: string|null - описание роли в фильме
* enProfession: string|null - профессия на английском языке

**Параметры:**

* \`$includeNulls\` (bool): \\* @return array Массив с данными о персоне в фильме, содержащий ключи:

**Пример:**

\`\`\`php
$moviePerson = new MovieInPerson(123456, 'Иван Петров', 'Ivan Petrov');
$array = $moviePerson->toArray();
// Результат: ['id' => 123456, 'name' => 'Иван Петров', 'alternativeName' => 'Ivan Petrov', ...]
\`\`\`

**См. также:**

* \`MovieInPerson::fromArray\`: () Для создания объекта из массива
* \`BaseModel::toArray\`: () Реализация интерфейса BaseModel
`,o={contents:[{heading:void 0,content:`**Описание:** Класс для представления персоны в контексте фильма
Представляет информацию о персоне (актер, режиссер, сценарист и др.) в контексте
конкретного фильма или сериала. Содержит основные данные о персоне, включая
идентификатор, имена, рейтинг, описание роли и профессию. Используется для
хранения и обработки данных об участниках кинопроизводства, полученных от API
Kinopoisk.dev.`},{heading:void 0,content:`**С версии:** 1.0.0`},{heading:void 0,content:`**Версия:** 1.0.0`},{heading:void 0,content:`**См. также:**`},{heading:void 0,content:"`\\KinopoiskDev\\Models\\PersonInMovie`: Для обратной связи (персона в фильме)"},{heading:void 0,content:"`\\KinopoiskDev\\Models\\Person`: Для полной информации о персоне"},{heading:void 0,content:"`\\KinopoiskDev\\Models\\Movie`: Для использования в информации о фильмах"},{heading:`__construct`,content:`**Описание:** Конструктор модели фильма в персоне
Создает новый экземпляр класса MovieInPerson с указанными параметрами.
Только идентификатор является обязательным параметром, остальные могут
быть null при отсутствии соответствующей информации о персоне или её роли
в конкретном фильме.`},{heading:`__construct`,content:`**Параметры:**`},{heading:`__construct`,content:"`$id` (int): Уникальный идентификатор персоны в системе Kinopoisk"},{heading:`__construct`,content:"`$name` (string|null): Имя персоны на русском языке (null если не указано)"},{heading:`__construct`,content:"`$alternativeName` (string|null): Альтернативное имя персоны (null если не указано)"},{heading:`__construct`,content:"`$rating` (float|null): Рейтинг персоны в контексте данного фильма (null если не указан)"},{heading:`__construct`,content:"`$general` (bool|null): Является ли персона главным участником фильма (null если не определено)"},{heading:`__construct`,content:"`$description` (string|null): Описание роли персоны в фильме (null если не указано)"},{heading:`__construct`,content:"`$enProfession` (string|null): Профессия персоны на английском языке (null если не указана)"},{heading:`__construct`,content:`**Пример:**`},{heading:`__construct`,content:`**См. также:**`},{heading:`__construct`,content:"`MovieInPerson::fromArray`: () Для создания объекта из массива данных API"},{heading:`__construct`,content:"`MovieInPerson::toArray`: () Для преобразования объекта в массив"},{heading:`fromarray`,content:`**Описание:** Создает объект MovieInPerson из массива данных API
Фабричный метод для создания экземпляра класса MovieInPerson из массива данных,
полученных от API Kinopoisk.dev. Безопасно обрабатывает отсутствующие значения,
устанавливая их в null. Идентификатор является обязательным параметром и должен
присутствовать в массиве данных.`},{heading:`fromarray`,content:`id: int - уникальный идентификатор персоны (обязательный)`},{heading:`fromarray`,content:`name: string|null - имя персоны на русском языке`},{heading:`fromarray`,content:`alternativeName: string|null - альтернативное имя персоны`},{heading:`fromarray`,content:`rating: float|null - рейтинг персоны в контексте фильма`},{heading:`fromarray`,content:`general: bool|null - является ли персона главным участником`},{heading:`fromarray`,content:`description: string|null - описание роли в фильме`},{heading:`fromarray`,content:`enProfession: string|null - профессия на английском языке`},{heading:`fromarray`,content:`**Параметры:**`},{heading:`fromarray`,content:"`$data` (array): Массив данных о персоне от API, содержащий ключи:"},{heading:`fromarray`,content:"**Возвращает:** `BaseModel` Новый экземпляр класса MovieInPerson с данными из массива"},{heading:`fromarray`,content:`**Пример:**`},{heading:`fromarray`,content:`**См. также:**`},{heading:`fromarray`,content:"`MovieInPerson::toArray`: () Для обратного преобразования в массив"},{heading:`fromarray`,content:"`BaseModel::fromArray`: () Реализация интерфейса BaseModel"},{heading:`toarray`,content:`**Описание:** Преобразует объект в массив данных
Конвертирует текущий экземпляр класса MovieInPerson в массив,
совместимый с форматом API Kinopoisk.dev. Используется для сериализации
данных при отправке запросов к API, экспорта данных в JSON или других
операций преобразования. Все свойства объекта, включая null-значения,
сохраняются в результирующем массиве.`},{heading:`toarray`,content:`id: int - уникальный идентификатор персоны`},{heading:`toarray`,content:`name: string|null - имя персоны на русском языке`},{heading:`toarray`,content:`alternativeName: string|null - альтернативное имя персоны`},{heading:`toarray`,content:`rating: float|null - рейтинг персоны в контексте фильма`},{heading:`toarray`,content:`general: bool|null - является ли персона главным участником`},{heading:`toarray`,content:`description: string|null - описание роли в фильме`},{heading:`toarray`,content:`enProfession: string|null - профессия на английском языке`},{heading:`toarray`,content:`**Параметры:**`},{heading:`toarray`,content:"`$includeNulls` (bool): \\* @return array Массив с данными о персоне в фильме, содержащий ключи:"},{heading:`toarray`,content:`**Пример:**`},{heading:`toarray`,content:`**См. также:**`},{heading:`toarray`,content:"`MovieInPerson::fromArray`: () Для создания объекта из массива"},{heading:`toarray`,content:"`BaseModel::toArray`: () Реализация интерфейса BaseModel"}],headings:[{id:`__construct`,content:"`__construct()`"},{id:`fromarray`,content:"`fromArray()`"},{id:`toarray`,content:"`toArray()`"}]},s=[{depth:2,url:`#__construct`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`__construct()`})})},{depth:2,url:`#fromarray`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`fromArray()`})})},{depth:2,url:`#toarray`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`toArray()`})})}];function c(e){let t={code:`code`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,span:`span`,strong:`strong`,ul:`ul`,...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Класс для представления персоны в контексте фильма
Представляет информацию о персоне (актер, режиссер, сценарист и др.) в контексте
конкретного фильма или сериала. Содержит основные данные о персоне, включая
идентификатор, имена, рейтинг, описание роли и профессию. Используется для
хранения и обработки данных об участниках кинопроизводства, полученных от API
Kinopoisk.dev.`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 1.0.0`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Версия:`}),` 1.0.0`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`См. также:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`\\KinopoiskDev\\Models\\PersonInMovie`}),`: Для обратной связи (персона в фильме)`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`\\KinopoiskDev\\Models\\Person`}),`: Для полной информации о персоне`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`\\KinopoiskDev\\Models\\Movie`}),`: Для использования в информации о фильмах`]}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`__construct`,children:(0,n.jsx)(t.code,{children:`__construct()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Конструктор модели фильма в персоне
Создает новый экземпляр класса MovieInPerson с указанными параметрами.
Только идентификатор является обязательным параметром, остальные могут
быть null при отсутствии соответствующей информации о персоне или её роли
в конкретном фильме.`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$id`}),` (int): Уникальный идентификатор персоны в системе Kinopoisk`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$name`}),` (string|null): Имя персоны на русском языке (null если не указано)`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$alternativeName`}),` (string|null): Альтернативное имя персоны (null если не указано)`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$rating`}),` (float|null): Рейтинг персоны в контексте данного фильма (null если не указан)`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$general`}),` (bool|null): Является ли персона главным участником фильма (null если не определено)`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$description`}),` (string|null): Описание роли персоны в фильме (null если не указано)`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$enProfession`}),` (string|null): Профессия персоны на английском языке (null если не указана)`]}),`
`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Пример:`})}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M7.01 10.207h-.944l-.515 2.648h.838c.556 0 .97-.105 1.242-.314.272-.21.455-.559.55-1.049.092-.47.05-.802-.124-.995-.175-.193-.523-.29-1.047-.29zM12 5.688C5.373 5.688 0 8.514 0 12s5.373 6.313 12 6.313S24 15.486 24 12c0-3.486-5.373-6.312-12-6.312zm-3.26 7.451c-.261.25-.575.438-.917.551-.336.108-.765.164-1.285.164H5.357l-.327 1.681H3.652l1.23-6.326h2.65c.797 0 1.378.209 1.744.628.366.418.476 1.002.33 1.752a2.836 2.836 0 0 1-.305.847c-.143.255-.33.49-.561.703zm4.024.715l.543-2.799c.063-.318.039-.536-.068-.651-.107-.116-.336-.174-.687-.174H11.46l-.704 3.625H9.388l1.23-6.327h1.367l-.327 1.682h1.218c.767 0 1.295.134 1.586.401s.378.7.263 1.299l-.572 2.944h-1.389zm7.597-2.265a2.782 2.782 0 0 1-.305.847c-.143.255-.33.49-.561.703a2.44 2.44 0 0 1-.917.551c-.336.108-.765.164-1.286.164h-1.18l-.327 1.682h-1.378l1.23-6.326h2.649c.797 0 1.378.209 1.744.628.366.417.477 1.001.331 1.751zM17.766 10.207h-.943l-.516 2.648h.838c.557 0 .971-.105 1.242-.314.272-.21.455-.559.551-1.049.092-.47.049-.802-.125-.995s-.524-.29-1.047-.29z" fill="currentColor" /></svg>`,children:(0,n.jsxs)(t.code,{children:[(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`$moviePerson `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`=`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:` new`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:` MovieInPerson`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`(`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`id`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`: `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`123456`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`,`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`name`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`: `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`'Иван Петров'`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`,`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`alternativeName`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`: `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`'Ivan Petrov'`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`,`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`rating`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`: `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`8.5`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`,`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`general`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`: `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`true`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`,`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`description`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`: `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`'Главная роль'`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`,`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`enProfession`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`: `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`'actor'`})]}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`);`})})]})})}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`См. также:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`MovieInPerson::fromArray`}),`: () Для создания объекта из массива данных API`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`MovieInPerson::toArray`}),`: () Для преобразования объекта в массив`]}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`fromarray`,children:(0,n.jsx)(t.code,{children:`fromArray()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Создает объект MovieInPerson из массива данных API
Фабричный метод для создания экземпляра класса MovieInPerson из массива данных,
полученных от API Kinopoisk.dev. Безопасно обрабатывает отсутствующие значения,
устанавливая их в null. Идентификатор является обязательным параметром и должен
присутствовать в массиве данных.`]}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsx)(t.li,{children:`id: int - уникальный идентификатор персоны (обязательный)`}),`
`,(0,n.jsx)(t.li,{children:`name: string|null - имя персоны на русском языке`}),`
`,(0,n.jsx)(t.li,{children:`alternativeName: string|null - альтернативное имя персоны`}),`
`,(0,n.jsx)(t.li,{children:`rating: float|null - рейтинг персоны в контексте фильма`}),`
`,(0,n.jsx)(t.li,{children:`general: bool|null - является ли персона главным участником`}),`
`,(0,n.jsx)(t.li,{children:`description: string|null - описание роли в фильме`}),`
`,(0,n.jsx)(t.li,{children:`enProfession: string|null - профессия на английском языке`}),`
`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$data`}),` (array): Массив данных о персоне от API, содержащий ключи:`]}),`
`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`BaseModel`}),` Новый экземпляр класса MovieInPerson с данными из массива`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Пример:`})}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M7.01 10.207h-.944l-.515 2.648h.838c.556 0 .97-.105 1.242-.314.272-.21.455-.559.55-1.049.092-.47.05-.802-.124-.995-.175-.193-.523-.29-1.047-.29zM12 5.688C5.373 5.688 0 8.514 0 12s5.373 6.313 12 6.313S24 15.486 24 12c0-3.486-5.373-6.312-12-6.312zm-3.26 7.451c-.261.25-.575.438-.917.551-.336.108-.765.164-1.285.164H5.357l-.327 1.681H3.652l1.23-6.326h2.65c.797 0 1.378.209 1.744.628.366.418.476 1.002.33 1.752a2.836 2.836 0 0 1-.305.847c-.143.255-.33.49-.561.703zm4.024.715l.543-2.799c.063-.318.039-.536-.068-.651-.107-.116-.336-.174-.687-.174H11.46l-.704 3.625H9.388l1.23-6.327h1.367l-.327 1.682h1.218c.767 0 1.295.134 1.586.401s.378.7.263 1.299l-.572 2.944h-1.389zm7.597-2.265a2.782 2.782 0 0 1-.305.847c-.143.255-.33.49-.561.703a2.44 2.44 0 0 1-.917.551c-.336.108-.765.164-1.286.164h-1.18l-.327 1.682h-1.378l1.23-6.326h2.649c.797 0 1.378.209 1.744.628.366.417.477 1.001.331 1.751zM17.766 10.207h-.943l-.516 2.648h.838c.557 0 .971-.105 1.242-.314.272-.21.455-.559.551-1.049.092-.47.049-.802-.125-.995s-.524-.29-1.047-.29z" fill="currentColor" /></svg>`,children:(0,n.jsxs)(t.code,{children:[(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`$personData `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`=`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:` [`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`'id'`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:` =>`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:` 123456`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`,`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`'name'`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:` =>`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:` 'Иван Петров'`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`,`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`'alternativeName'`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:` =>`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:` 'Ivan Petrov'`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`,`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`'rating'`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:` =>`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:` 8.5`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`,`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`'general'`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:` =>`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:` true`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`,`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`'description'`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:` =>`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:` 'Главная роль'`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`,`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`'enProfession'`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:` =>`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:` 'actor'`})]}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`];`})}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`$moviePerson `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`=`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:` MovieInPerson`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`::`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`fromArray`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`($personData);`})]})]})})}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`См. также:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`MovieInPerson::toArray`}),`: () Для обратного преобразования в массив`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`BaseModel::fromArray`}),`: () Реализация интерфейса BaseModel`]}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`toarray`,children:(0,n.jsx)(t.code,{children:`toArray()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Преобразует объект в массив данных
Конвертирует текущий экземпляр класса MovieInPerson в массив,
совместимый с форматом API Kinopoisk.dev. Используется для сериализации
данных при отправке запросов к API, экспорта данных в JSON или других
операций преобразования. Все свойства объекта, включая null-значения,
сохраняются в результирующем массиве.`]}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsx)(t.li,{children:`id: int - уникальный идентификатор персоны`}),`
`,(0,n.jsx)(t.li,{children:`name: string|null - имя персоны на русском языке`}),`
`,(0,n.jsx)(t.li,{children:`alternativeName: string|null - альтернативное имя персоны`}),`
`,(0,n.jsx)(t.li,{children:`rating: float|null - рейтинг персоны в контексте фильма`}),`
`,(0,n.jsx)(t.li,{children:`general: bool|null - является ли персона главным участником`}),`
`,(0,n.jsx)(t.li,{children:`description: string|null - описание роли в фильме`}),`
`,(0,n.jsx)(t.li,{children:`enProfession: string|null - профессия на английском языке`}),`
`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$includeNulls`}),` (bool): * @return array Массив с данными о персоне в фильме, содержащий ключи:`]}),`
`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Пример:`})}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M7.01 10.207h-.944l-.515 2.648h.838c.556 0 .97-.105 1.242-.314.272-.21.455-.559.55-1.049.092-.47.05-.802-.124-.995-.175-.193-.523-.29-1.047-.29zM12 5.688C5.373 5.688 0 8.514 0 12s5.373 6.313 12 6.313S24 15.486 24 12c0-3.486-5.373-6.312-12-6.312zm-3.26 7.451c-.261.25-.575.438-.917.551-.336.108-.765.164-1.285.164H5.357l-.327 1.681H3.652l1.23-6.326h2.65c.797 0 1.378.209 1.744.628.366.418.476 1.002.33 1.752a2.836 2.836 0 0 1-.305.847c-.143.255-.33.49-.561.703zm4.024.715l.543-2.799c.063-.318.039-.536-.068-.651-.107-.116-.336-.174-.687-.174H11.46l-.704 3.625H9.388l1.23-6.327h1.367l-.327 1.682h1.218c.767 0 1.295.134 1.586.401s.378.7.263 1.299l-.572 2.944h-1.389zm7.597-2.265a2.782 2.782 0 0 1-.305.847c-.143.255-.33.49-.561.703a2.44 2.44 0 0 1-.917.551c-.336.108-.765.164-1.286.164h-1.18l-.327 1.682h-1.378l1.23-6.326h2.649c.797 0 1.378.209 1.744.628.366.417.477 1.001.331 1.751zM17.766 10.207h-.943l-.516 2.648h.838c.557 0 .971-.105 1.242-.314.272-.21.455-.559.551-1.049.092-.47.049-.802-.125-.995s-.524-.29-1.047-.29z" fill="currentColor" /></svg>`,children:(0,n.jsxs)(t.code,{children:[(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`$moviePerson `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`=`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:` new`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:` MovieInPerson`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`(`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`123456`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`, `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`'Иван Петров'`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`, `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`'Ivan Petrov'`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`);`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`$array `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`=`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:` $moviePerson`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`->`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`toArray`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`();`})]}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{style:{"--shiki-light":`#6A737D`,"--shiki-dark":`#6A737D`},children:`// Результат: ['id' => 123456, 'name' => 'Иван Петров', 'alternativeName' => 'Ivan Petrov', ...]`})})]})})}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`См. также:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`MovieInPerson::fromArray`}),`: () Для создания объекта из массива`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`BaseModel::toArray`}),`: () Реализация интерфейса BaseModel`]}),`
`]})]})}function l(e={}){let{wrapper:t}=e.components||{};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}export{a as _markdown,l as default,r as frontmatter,i as lastModified,o as structuredData,s as toc};