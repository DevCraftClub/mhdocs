import{r as e}from"./rolldown-runtime-QTnfLwEv.js";import{t}from"./jsx-runtime-By8HlURe.js";var n=e(t()),r={title:`PersonInMovie`},i=new Date(1785400635e3),a=`

**Описание:** Класс для представления персоны в контексте фильма
Представляет информацию о персоне (актере, режиссере и т.д.) в контексте
конкретного фильма или сериала. Содержит основные данные о персоне,
включая идентификатор, имя, фото и профессиональную информацию.

**С версии:** 1.0.0

**Версия:** 1.0.0

**См. также:**

* \`\\KinopoiskDev\\Models\\Person\`: Для полной информации о персоне
* \`\\KinopoiskDev\\Models\\Movie\`: Для информации о фильме

## \`__construct()\` [#__construct]

**Описание:** Конструктор для создания объекта персоны в фильме
Создает новый экземпляр класса PersonInMovie с указанными параметрами.
Только идентификатор является обязательным параметром, остальные могут
быть null при отсутствии соответствующей информации.

**Параметры:**

* \`$id\` (int): Уникальный идентификатор персоны
* \`$photo\` (string|null): URL фотографии персоны
* \`$name\` (string|null): Имя персоны на русском языке
* \`$enName\` (string|null): Имя персоны на английском языке
* \`$description\` (string|null): Описание роли персоны в фильме
* \`$profession\` (string|null): Профессия персоны на русском языке
* \`$enProfession\` (string|null): Профессия персоны на английском языке

**См. также:**

* \`PersonInMovie::fromArray\`: () Для создания объекта из массива данных API
* \`PersonInMovie::toArray\`: () Для преобразования объекта в массив

## \`fromArray()\` [#fromarray]

**Описание:** Создает объект PersonInMovie из массива данных API
Фабричный метод для создания экземпляра класса PersonInMovie из массива данных,
полученных от API Kinopoisk.dev. Безопасно обрабатывает отсутствующие
значения, устанавливая их в null.

* id: int - уникальный идентификатор персоны
* photo: string|null - URL фотографии персоны
* name: string|null - имя персоны на русском языке
* enName: string|null - имя персоны на английском языке
* description: string|null - описание роли персоны
* profession: string|null - профессия персоны на русском
* enProfession: string|null - профессия персоны на английском

**Параметры:**

* \`$data\` (array): Массив данных о персоне от API, содержащий ключи:

**Возвращает:** \`\\KinopoiskDev\\Models\\PersonInMovie\` Новый экземпляр класса PersonInMovie с данными из массива

**См. также:**

* \`PersonInMovie::toArray\`: () Для обратного преобразования в массив

## \`toArray()\` [#toarray]

**Описание:** Преобразует объект в массив данных
Конвертирует текущий экземпляр класса PersonInMovie в массив,
совместимый с форматом API Kinopoisk.dev. Используется для сериализации
данных при отправке запросов к API или для экспорта данных.

**Возвращает:** \`array\` Массив с данными о персоне в фильме, содержащий все поля объекта

**См. также:**

* \`PersonInMovie::fromArray\`: () Для создания объекта из массива

## \`validate()\` [#validate]

**Описание:** Валидирует данные модели

**Возвращает:** \`bool True\` если данные валидны
`,o={contents:[{heading:void 0,content:`**Описание:** Класс для представления персоны в контексте фильма
Представляет информацию о персоне (актере, режиссере и т.д.) в контексте
конкретного фильма или сериала. Содержит основные данные о персоне,
включая идентификатор, имя, фото и профессиональную информацию.`},{heading:void 0,content:`**С версии:** 1.0.0`},{heading:void 0,content:`**Версия:** 1.0.0`},{heading:void 0,content:`**См. также:**`},{heading:void 0,content:"`\\KinopoiskDev\\Models\\Person`: Для полной информации о персоне"},{heading:void 0,content:"`\\KinopoiskDev\\Models\\Movie`: Для информации о фильме"},{heading:`__construct`,content:`**Описание:** Конструктор для создания объекта персоны в фильме
Создает новый экземпляр класса PersonInMovie с указанными параметрами.
Только идентификатор является обязательным параметром, остальные могут
быть null при отсутствии соответствующей информации.`},{heading:`__construct`,content:`**Параметры:**`},{heading:`__construct`,content:"`$id` (int): Уникальный идентификатор персоны"},{heading:`__construct`,content:"`$photo` (string|null): URL фотографии персоны"},{heading:`__construct`,content:"`$name` (string|null): Имя персоны на русском языке"},{heading:`__construct`,content:"`$enName` (string|null): Имя персоны на английском языке"},{heading:`__construct`,content:"`$description` (string|null): Описание роли персоны в фильме"},{heading:`__construct`,content:"`$profession` (string|null): Профессия персоны на русском языке"},{heading:`__construct`,content:"`$enProfession` (string|null): Профессия персоны на английском языке"},{heading:`__construct`,content:`**См. также:**`},{heading:`__construct`,content:"`PersonInMovie::fromArray`: () Для создания объекта из массива данных API"},{heading:`__construct`,content:"`PersonInMovie::toArray`: () Для преобразования объекта в массив"},{heading:`fromarray`,content:`**Описание:** Создает объект PersonInMovie из массива данных API
Фабричный метод для создания экземпляра класса PersonInMovie из массива данных,
полученных от API Kinopoisk.dev. Безопасно обрабатывает отсутствующие
значения, устанавливая их в null.`},{heading:`fromarray`,content:`id: int - уникальный идентификатор персоны`},{heading:`fromarray`,content:`photo: string|null - URL фотографии персоны`},{heading:`fromarray`,content:`name: string|null - имя персоны на русском языке`},{heading:`fromarray`,content:`enName: string|null - имя персоны на английском языке`},{heading:`fromarray`,content:`description: string|null - описание роли персоны`},{heading:`fromarray`,content:`profession: string|null - профессия персоны на русском`},{heading:`fromarray`,content:`enProfession: string|null - профессия персоны на английском`},{heading:`fromarray`,content:`**Параметры:**`},{heading:`fromarray`,content:"`$data` (array): Массив данных о персоне от API, содержащий ключи:"},{heading:`fromarray`,content:"**Возвращает:** `\\KinopoiskDev\\Models\\PersonInMovie` Новый экземпляр класса PersonInMovie с данными из массива"},{heading:`fromarray`,content:`**См. также:**`},{heading:`fromarray`,content:"`PersonInMovie::toArray`: () Для обратного преобразования в массив"},{heading:`toarray`,content:`**Описание:** Преобразует объект в массив данных
Конвертирует текущий экземпляр класса PersonInMovie в массив,
совместимый с форматом API Kinopoisk.dev. Используется для сериализации
данных при отправке запросов к API или для экспорта данных.`},{heading:`toarray`,content:"**Возвращает:** `array` Массив с данными о персоне в фильме, содержащий все поля объекта"},{heading:`toarray`,content:`**См. также:**`},{heading:`toarray`,content:"`PersonInMovie::fromArray`: () Для создания объекта из массива"},{heading:`validate`,content:`**Описание:** Валидирует данные модели`},{heading:`validate`,content:"**Возвращает:** `bool True` если данные валидны"}],headings:[{id:`__construct`,content:"`__construct()`"},{id:`fromarray`,content:"`fromArray()`"},{id:`toarray`,content:"`toArray()`"},{id:`validate`,content:"`validate()`"}]},s=[{depth:2,url:`#__construct`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`__construct()`})})},{depth:2,url:`#fromarray`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`fromArray()`})})},{depth:2,url:`#toarray`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`toArray()`})})},{depth:2,url:`#validate`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`validate()`})})}];function c(e){let t={code:`code`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Класс для представления персоны в контексте фильма
Представляет информацию о персоне (актере, режиссере и т.д.) в контексте
конкретного фильма или сериала. Содержит основные данные о персоне,
включая идентификатор, имя, фото и профессиональную информацию.`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 1.0.0`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Версия:`}),` 1.0.0`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`См. также:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`\\KinopoiskDev\\Models\\Person`}),`: Для полной информации о персоне`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`\\KinopoiskDev\\Models\\Movie`}),`: Для информации о фильме`]}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`__construct`,children:(0,n.jsx)(t.code,{children:`__construct()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Конструктор для создания объекта персоны в фильме
Создает новый экземпляр класса PersonInMovie с указанными параметрами.
Только идентификатор является обязательным параметром, остальные могут
быть null при отсутствии соответствующей информации.`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$id`}),` (int): Уникальный идентификатор персоны`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$photo`}),` (string|null): URL фотографии персоны`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$name`}),` (string|null): Имя персоны на русском языке`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$enName`}),` (string|null): Имя персоны на английском языке`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$description`}),` (string|null): Описание роли персоны в фильме`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$profession`}),` (string|null): Профессия персоны на русском языке`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$enProfession`}),` (string|null): Профессия персоны на английском языке`]}),`
`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`См. также:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`PersonInMovie::fromArray`}),`: () Для создания объекта из массива данных API`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`PersonInMovie::toArray`}),`: () Для преобразования объекта в массив`]}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`fromarray`,children:(0,n.jsx)(t.code,{children:`fromArray()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Создает объект PersonInMovie из массива данных API
Фабричный метод для создания экземпляра класса PersonInMovie из массива данных,
полученных от API Kinopoisk.dev. Безопасно обрабатывает отсутствующие
значения, устанавливая их в null.`]}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsx)(t.li,{children:`id: int - уникальный идентификатор персоны`}),`
`,(0,n.jsx)(t.li,{children:`photo: string|null - URL фотографии персоны`}),`
`,(0,n.jsx)(t.li,{children:`name: string|null - имя персоны на русском языке`}),`
`,(0,n.jsx)(t.li,{children:`enName: string|null - имя персоны на английском языке`}),`
`,(0,n.jsx)(t.li,{children:`description: string|null - описание роли персоны`}),`
`,(0,n.jsx)(t.li,{children:`profession: string|null - профессия персоны на русском`}),`
`,(0,n.jsx)(t.li,{children:`enProfession: string|null - профессия персоны на английском`}),`
`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$data`}),` (array): Массив данных о персоне от API, содержащий ключи:`]}),`
`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`\\KinopoiskDev\\Models\\PersonInMovie`}),` Новый экземпляр класса PersonInMovie с данными из массива`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`См. также:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`PersonInMovie::toArray`}),`: () Для обратного преобразования в массив`]}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`toarray`,children:(0,n.jsx)(t.code,{children:`toArray()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Преобразует объект в массив данных
Конвертирует текущий экземпляр класса PersonInMovie в массив,
совместимый с форматом API Kinopoisk.dev. Используется для сериализации
данных при отправке запросов к API или для экспорта данных.`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`array`}),` Массив с данными о персоне в фильме, содержащий все поля объекта`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`См. также:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`PersonInMovie::fromArray`}),`: () Для создания объекта из массива`]}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`validate`,children:(0,n.jsx)(t.code,{children:`validate()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Валидирует данные модели`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`bool True`}),` если данные валидны`]})]})}function l(e={}){let{wrapper:t}=e.components||{};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}export{a as _markdown,l as default,r as frontmatter,i as lastModified,o as structuredData,s as toc};