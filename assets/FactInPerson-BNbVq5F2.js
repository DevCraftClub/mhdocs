import{r as e}from"./rolldown-runtime-QTnfLwEv.js";import{t}from"./jsx-runtime-By8HlURe.js";var n=e(t()),r={title:`FactInPerson`},i=new Date(1786951824e3),a=`

**Описание:** Модель фактов о персоне
Представляет интересный факт о персоне кино (актёре, режиссёре, продюсере и т.д.).
Содержит текстовую информацию о биографии, карьере или других аспектах жизни
деятеля кинематографа. Используется для хранения и отображения дополнительной
информации о персонах из базы данных Kinopoisk.dev.

**С версии:** 1.0.0

**Версия:** 1.0.0

**См. также:**

* \`\\KinopoiskDev\\Models\\Person\`: Основная модель персоны
* \`\\KinopoiskDev\\Models\\FactInMovie\`: Модель фактов о фильмах

## \`__construct()\` [#__construct]

**Описание:** Конструктор для создания объекта факта о персоне
Создает новый экземпляр FactInPerson с указанным текстовым содержимым.
Конструктор принимает только основную информацию о факте,
в отличие от фактов о фильмах, не содержит дополнительных метаданных
о типе или наличии спойлеров.

**Параметры:**

* \`$value\` (string): Текст факта - основное содержимое информации о персоне кино

**Пример:**

\`\`\`php
$fact = new FactInPerson(
value: 'Актёр изучал театральное искусство в консерватории'
);
\`\`\`

## \`fromArray()\` [#fromarray]

**Описание:** Создает объект FactInPerson из массива данных API
Фабричный метод для создания экземпляра класса FactInPerson из массива
данных о факте персоны, полученных от API Kinopoisk.dev.
Извлекает значение факта из переданного массива и безопасно обрабатывает
его отсутствие или некорректный формат.

* value: string - текстовое содержимое факта о персоне

**Параметры:**

* \`$data\` (array): Массив данных о факте персоны от API, содержащий ключи:

**Возвращает:** \`static\` Новый экземпляр класса FactInPerson с данными из массива

**Исключения:**

* \`\\TypeError\`: При отсутствии обязательного поля 'value' в массиве данных

**См. также:**

* \`FactInPerson::toArray\`: () Для обратного преобразования в массив
* \`FactInPerson::__construct\`: () Конструктор класса

## \`toArray()\` [#toarray]

**Описание:** Преобразует объект в массив данных
Конвертирует текущий экземпляр класса FactInPerson в массив,
совместимый с форматом API Kinopoisk.dev. Используется для сериализации
данных при отправке запросов к API или для экспорта данных в JSON.
Структура возвращаемого массива соответствует формату входных данных.

* value: string - текстовое содержимое факта о персоне

**Возвращает:** \`array\` Массив с данными о факте персоны, содержащий ключи:

**См. также:**

* \`FactInPerson::fromArray\`: () Для создания объекта из массива

## \`validate()\` [#validate]

**Описание:** Валидирует данные модели

**Возвращает:** \`bool True\` если данные валидны
`,o={contents:[{heading:void 0,content:`**Описание:** Модель фактов о персоне
Представляет интересный факт о персоне кино (актёре, режиссёре, продюсере и т.д.).
Содержит текстовую информацию о биографии, карьере или других аспектах жизни
деятеля кинематографа. Используется для хранения и отображения дополнительной
информации о персонах из базы данных Kinopoisk.dev.`},{heading:void 0,content:`**С версии:** 1.0.0`},{heading:void 0,content:`**Версия:** 1.0.0`},{heading:void 0,content:`**См. также:**`},{heading:void 0,content:"`\\KinopoiskDev\\Models\\Person`: Основная модель персоны"},{heading:void 0,content:"`\\KinopoiskDev\\Models\\FactInMovie`: Модель фактов о фильмах"},{heading:`__construct`,content:`**Описание:** Конструктор для создания объекта факта о персоне
Создает новый экземпляр FactInPerson с указанным текстовым содержимым.
Конструктор принимает только основную информацию о факте,
в отличие от фактов о фильмах, не содержит дополнительных метаданных
о типе или наличии спойлеров.`},{heading:`__construct`,content:`**Параметры:**`},{heading:`__construct`,content:"`$value` (string): Текст факта - основное содержимое информации о персоне кино"},{heading:`__construct`,content:`**Пример:**`},{heading:`fromarray`,content:`**Описание:** Создает объект FactInPerson из массива данных API
Фабричный метод для создания экземпляра класса FactInPerson из массива
данных о факте персоны, полученных от API Kinopoisk.dev.
Извлекает значение факта из переданного массива и безопасно обрабатывает
его отсутствие или некорректный формат.`},{heading:`fromarray`,content:`value: string - текстовое содержимое факта о персоне`},{heading:`fromarray`,content:`**Параметры:**`},{heading:`fromarray`,content:"`$data` (array): Массив данных о факте персоны от API, содержащий ключи:"},{heading:`fromarray`,content:"**Возвращает:** `static` Новый экземпляр класса FactInPerson с данными из массива"},{heading:`fromarray`,content:`**Исключения:**`},{heading:`fromarray`,content:"`\\TypeError`: При отсутствии обязательного поля 'value' в массиве данных"},{heading:`fromarray`,content:`**См. также:**`},{heading:`fromarray`,content:"`FactInPerson::toArray`: () Для обратного преобразования в массив"},{heading:`fromarray`,content:"`FactInPerson::__construct`: () Конструктор класса"},{heading:`toarray`,content:`**Описание:** Преобразует объект в массив данных
Конвертирует текущий экземпляр класса FactInPerson в массив,
совместимый с форматом API Kinopoisk.dev. Используется для сериализации
данных при отправке запросов к API или для экспорта данных в JSON.
Структура возвращаемого массива соответствует формату входных данных.`},{heading:`toarray`,content:`value: string - текстовое содержимое факта о персоне`},{heading:`toarray`,content:"**Возвращает:** `array` Массив с данными о факте персоны, содержащий ключи:"},{heading:`toarray`,content:`**См. также:**`},{heading:`toarray`,content:"`FactInPerson::fromArray`: () Для создания объекта из массива"},{heading:`validate`,content:`**Описание:** Валидирует данные модели`},{heading:`validate`,content:"**Возвращает:** `bool True` если данные валидны"}],headings:[{id:`__construct`,content:"`__construct()`"},{id:`fromarray`,content:"`fromArray()`"},{id:`toarray`,content:"`toArray()`"},{id:`validate`,content:"`validate()`"}]},s=[{depth:2,url:`#__construct`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`__construct()`})})},{depth:2,url:`#fromarray`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`fromArray()`})})},{depth:2,url:`#toarray`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`toArray()`})})},{depth:2,url:`#validate`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`validate()`})})}];function c(e){let t={code:`code`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,span:`span`,strong:`strong`,ul:`ul`,...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Модель фактов о персоне
Представляет интересный факт о персоне кино (актёре, режиссёре, продюсере и т.д.).
Содержит текстовую информацию о биографии, карьере или других аспектах жизни
деятеля кинематографа. Используется для хранения и отображения дополнительной
информации о персонах из базы данных Kinopoisk.dev.`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 1.0.0`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Версия:`}),` 1.0.0`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`См. также:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`\\KinopoiskDev\\Models\\Person`}),`: Основная модель персоны`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`\\KinopoiskDev\\Models\\FactInMovie`}),`: Модель фактов о фильмах`]}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`__construct`,children:(0,n.jsx)(t.code,{children:`__construct()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Конструктор для создания объекта факта о персоне
Создает новый экземпляр FactInPerson с указанным текстовым содержимым.
Конструктор принимает только основную информацию о факте,
в отличие от фактов о фильмах, не содержит дополнительных метаданных
о типе или наличии спойлеров.`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$value`}),` (string): Текст факта - основное содержимое информации о персоне кино`]}),`
`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Пример:`})}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M7.01 10.207h-.944l-.515 2.648h.838c.556 0 .97-.105 1.242-.314.272-.21.455-.559.55-1.049.092-.47.05-.802-.124-.995-.175-.193-.523-.29-1.047-.29zM12 5.688C5.373 5.688 0 8.514 0 12s5.373 6.313 12 6.313S24 15.486 24 12c0-3.486-5.373-6.312-12-6.312zm-3.26 7.451c-.261.25-.575.438-.917.551-.336.108-.765.164-1.285.164H5.357l-.327 1.681H3.652l1.23-6.326h2.65c.797 0 1.378.209 1.744.628.366.418.476 1.002.33 1.752a2.836 2.836 0 0 1-.305.847c-.143.255-.33.49-.561.703zm4.024.715l.543-2.799c.063-.318.039-.536-.068-.651-.107-.116-.336-.174-.687-.174H11.46l-.704 3.625H9.388l1.23-6.327h1.367l-.327 1.682h1.218c.767 0 1.295.134 1.586.401s.378.7.263 1.299l-.572 2.944h-1.389zm7.597-2.265a2.782 2.782 0 0 1-.305.847c-.143.255-.33.49-.561.703a2.44 2.44 0 0 1-.917.551c-.336.108-.765.164-1.286.164h-1.18l-.327 1.682h-1.378l1.23-6.326h2.649c.797 0 1.378.209 1.744.628.366.417.477 1.001.331 1.751zM17.766 10.207h-.943l-.516 2.648h.838c.557 0 .971-.105 1.242-.314.272-.21.455-.559.551-1.049.092-.47.049-.802-.125-.995s-.524-.29-1.047-.29z" fill="currentColor" /></svg>`,children:(0,n.jsxs)(t.code,{children:[(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`$fact `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`=`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:` new`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:` FactInPerson`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`(`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`value`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`: `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`'Актёр изучал театральное искусство в консерватории'`})]}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`);`})})]})})}),`
`,(0,n.jsx)(t.h2,{id:`fromarray`,children:(0,n.jsx)(t.code,{children:`fromArray()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Создает объект FactInPerson из массива данных API
Фабричный метод для создания экземпляра класса FactInPerson из массива
данных о факте персоны, полученных от API Kinopoisk.dev.
Извлекает значение факта из переданного массива и безопасно обрабатывает
его отсутствие или некорректный формат.`]}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsx)(t.li,{children:`value: string - текстовое содержимое факта о персоне`}),`
`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$data`}),` (array): Массив данных о факте персоны от API, содержащий ключи:`]}),`
`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`static`}),` Новый экземпляр класса FactInPerson с данными из массива`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Исключения:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`\\TypeError`}),`: При отсутствии обязательного поля 'value' в массиве данных`]}),`
`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`См. также:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`FactInPerson::toArray`}),`: () Для обратного преобразования в массив`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`FactInPerson::__construct`}),`: () Конструктор класса`]}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`toarray`,children:(0,n.jsx)(t.code,{children:`toArray()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Преобразует объект в массив данных
Конвертирует текущий экземпляр класса FactInPerson в массив,
совместимый с форматом API Kinopoisk.dev. Используется для сериализации
данных при отправке запросов к API или для экспорта данных в JSON.
Структура возвращаемого массива соответствует формату входных данных.`]}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsx)(t.li,{children:`value: string - текстовое содержимое факта о персоне`}),`
`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`array`}),` Массив с данными о факте персоны, содержащий ключи:`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`См. также:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`FactInPerson::fromArray`}),`: () Для создания объекта из массива`]}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`validate`,children:(0,n.jsx)(t.code,{children:`validate()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Валидирует данные модели`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`bool True`}),` если данные валидны`]})]})}function l(e={}){let{wrapper:t}=e.components||{};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}export{a as _markdown,l as default,r as frontmatter,i as lastModified,o as structuredData,s as toc};