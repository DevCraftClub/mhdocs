import{r as e}from"./rolldown-runtime-QTnfLwEv.js";import{t}from"./jsx-runtime-By8HlURe.js";var n=e(t()),r={title:`Premiere`},i=new Date(1786951824e3),a=`

**Описание:** Класс для представления информации о премьерах фильма
Содержит даты премьер фильма или сериала в различных странах и форматах,
включая мировую премьеру, премьеру в России, цифровой релиз, релиз на DVD и Blu-ray.
Используется для отображения информации о датах выхода произведения.

**С версии:** 1.0.0

**Версия:** 1.0.0

**См. также:**

* \`\\KinopoiskDev\\Models\\Movie\`: Для использования в информации о фильмах

## \`__construct()\` [#__construct]

**Описание:** Конструктор модели премьеры

**Параметры:**

* \`$country\` (string|null): Страна премьеры
* \`$world\` (string|null): Дата мировой премьеры в формате ISO
* \`$russia\` (string|null): Дата премьеры в России в формате ISO
* \`$digital\` (string|null): Дата цифрового релиза в формате ISO
* \`$cinema\` (string|null): Дата премьеры в кинотеатрах в формате ISO
* \`$bluray\` (string|null): Дата релиза на Blu-ray в формате ISO
* \`$dvd\` (string|null): Дата релиза на DVD в формате ISO

## \`fromArray()\` [#fromarray]

**Описание:** Создает объект Premiere из массива данных API

* country: string|null - страна премьеры
* world: string|null - дата мировой премьеры
* russia: string|null - дата премьеры в России
* digital: string|null - дата цифрового релиза
* cinema: string|null - дата премьеры в кинотеатрах
* bluray: string|null - дата релиза на Blu-ray
* dvd: string|null - дата релиза на DVD

**Возвращает:** \`\\KinopoiskDev\\Models\\Premiere\` Новый экземпляр класса Premiere с данными из массива

**См. также:**

* \`Premiere::toArray\`: () Для обратного преобразования в массив

## \`toArray()\` [#toarray]

**Описание:** Преобразует объект в массив данных
Конвертирует текущий экземпляр класса Premiere в массив,
совместимый с форматом API Kinopoisk.dev. Используется для сериализации
данных при отправке запросов к API или для экспорта данных.

**Возвращает:** \`array\` Массив с данными о премьерах, содержащий все поля объекта

**См. также:**

* \`Premiere::fromArray\`: () Для создания объекта из массива

## \`validate()\` [#validate]

**Описание:** Валидирует данные модели

**Возвращает:** \`bool True\` если данные валидны
`,o={contents:[{heading:void 0,content:`**Описание:** Класс для представления информации о премьерах фильма
Содержит даты премьер фильма или сериала в различных странах и форматах,
включая мировую премьеру, премьеру в России, цифровой релиз, релиз на DVD и Blu-ray.
Используется для отображения информации о датах выхода произведения.`},{heading:void 0,content:`**С версии:** 1.0.0`},{heading:void 0,content:`**Версия:** 1.0.0`},{heading:void 0,content:`**См. также:**`},{heading:void 0,content:"`\\KinopoiskDev\\Models\\Movie`: Для использования в информации о фильмах"},{heading:`__construct`,content:`**Описание:** Конструктор модели премьеры`},{heading:`__construct`,content:`**Параметры:**`},{heading:`__construct`,content:"`$country` (string|null): Страна премьеры"},{heading:`__construct`,content:"`$world` (string|null): Дата мировой премьеры в формате ISO"},{heading:`__construct`,content:"`$russia` (string|null): Дата премьеры в России в формате ISO"},{heading:`__construct`,content:"`$digital` (string|null): Дата цифрового релиза в формате ISO"},{heading:`__construct`,content:"`$cinema` (string|null): Дата премьеры в кинотеатрах в формате ISO"},{heading:`__construct`,content:"`$bluray` (string|null): Дата релиза на Blu-ray в формате ISO"},{heading:`__construct`,content:"`$dvd` (string|null): Дата релиза на DVD в формате ISO"},{heading:`fromarray`,content:`**Описание:** Создает объект Premiere из массива данных API`},{heading:`fromarray`,content:`country: string|null - страна премьеры`},{heading:`fromarray`,content:`world: string|null - дата мировой премьеры`},{heading:`fromarray`,content:`russia: string|null - дата премьеры в России`},{heading:`fromarray`,content:`digital: string|null - дата цифрового релиза`},{heading:`fromarray`,content:`cinema: string|null - дата премьеры в кинотеатрах`},{heading:`fromarray`,content:`bluray: string|null - дата релиза на Blu-ray`},{heading:`fromarray`,content:`dvd: string|null - дата релиза на DVD`},{heading:`fromarray`,content:"**Возвращает:** `\\KinopoiskDev\\Models\\Premiere` Новый экземпляр класса Premiere с данными из массива"},{heading:`fromarray`,content:`**См. также:**`},{heading:`fromarray`,content:"`Premiere::toArray`: () Для обратного преобразования в массив"},{heading:`toarray`,content:`**Описание:** Преобразует объект в массив данных
Конвертирует текущий экземпляр класса Premiere в массив,
совместимый с форматом API Kinopoisk.dev. Используется для сериализации
данных при отправке запросов к API или для экспорта данных.`},{heading:`toarray`,content:"**Возвращает:** `array` Массив с данными о премьерах, содержащий все поля объекта"},{heading:`toarray`,content:`**См. также:**`},{heading:`toarray`,content:"`Premiere::fromArray`: () Для создания объекта из массива"},{heading:`validate`,content:`**Описание:** Валидирует данные модели`},{heading:`validate`,content:"**Возвращает:** `bool True` если данные валидны"}],headings:[{id:`__construct`,content:"`__construct()`"},{id:`fromarray`,content:"`fromArray()`"},{id:`toarray`,content:"`toArray()`"},{id:`validate`,content:"`validate()`"}]},s=[{depth:2,url:`#__construct`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`__construct()`})})},{depth:2,url:`#fromarray`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`fromArray()`})})},{depth:2,url:`#toarray`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`toArray()`})})},{depth:2,url:`#validate`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`validate()`})})}];function c(e){let t={code:`code`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Класс для представления информации о премьерах фильма
Содержит даты премьер фильма или сериала в различных странах и форматах,
включая мировую премьеру, премьеру в России, цифровой релиз, релиз на DVD и Blu-ray.
Используется для отображения информации о датах выхода произведения.`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 1.0.0`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Версия:`}),` 1.0.0`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`См. также:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`\\KinopoiskDev\\Models\\Movie`}),`: Для использования в информации о фильмах`]}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`__construct`,children:(0,n.jsx)(t.code,{children:`__construct()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Конструктор модели премьеры`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$country`}),` (string|null): Страна премьеры`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$world`}),` (string|null): Дата мировой премьеры в формате ISO`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$russia`}),` (string|null): Дата премьеры в России в формате ISO`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$digital`}),` (string|null): Дата цифрового релиза в формате ISO`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$cinema`}),` (string|null): Дата премьеры в кинотеатрах в формате ISO`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$bluray`}),` (string|null): Дата релиза на Blu-ray в формате ISO`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$dvd`}),` (string|null): Дата релиза на DVD в формате ISO`]}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`fromarray`,children:(0,n.jsx)(t.code,{children:`fromArray()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Создает объект Premiere из массива данных API`]}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsx)(t.li,{children:`country: string|null - страна премьеры`}),`
`,(0,n.jsx)(t.li,{children:`world: string|null - дата мировой премьеры`}),`
`,(0,n.jsx)(t.li,{children:`russia: string|null - дата премьеры в России`}),`
`,(0,n.jsx)(t.li,{children:`digital: string|null - дата цифрового релиза`}),`
`,(0,n.jsx)(t.li,{children:`cinema: string|null - дата премьеры в кинотеатрах`}),`
`,(0,n.jsx)(t.li,{children:`bluray: string|null - дата релиза на Blu-ray`}),`
`,(0,n.jsx)(t.li,{children:`dvd: string|null - дата релиза на DVD`}),`
`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`\\KinopoiskDev\\Models\\Premiere`}),` Новый экземпляр класса Premiere с данными из массива`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`См. также:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`Premiere::toArray`}),`: () Для обратного преобразования в массив`]}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`toarray`,children:(0,n.jsx)(t.code,{children:`toArray()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Преобразует объект в массив данных
Конвертирует текущий экземпляр класса Premiere в массив,
совместимый с форматом API Kinopoisk.dev. Используется для сериализации
данных при отправке запросов к API или для экспорта данных.`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`array`}),` Массив с данными о премьерах, содержащий все поля объекта`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`См. также:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`Premiere::fromArray`}),`: () Для создания объекта из массива`]}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`validate`,children:(0,n.jsx)(t.code,{children:`validate()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Валидирует данные модели`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`bool True`}),` если данные валидны`]})]})}function l(e={}){let{wrapper:t}=e.components||{};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}export{a as _markdown,l as default,r as frontmatter,i as lastModified,o as structuredData,s as toc};