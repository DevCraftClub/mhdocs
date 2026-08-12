import{r as e}from"./rolldown-runtime-QTnfLwEv.js";import{t}from"./jsx-runtime-By8HlURe.js";var n=e(t()),r={title:`Nomination`},i=new Date(1786541452e3),a=`

**Описание:** Класс для представления номинации
Представляет информацию о номинации на награду, включая
детали о самой награде и название номинации. Используется
в составе наград для фильмов и персон.

**С версии:** 1.0.0

**Версия:** 1.0.0

**См. также:**

* \`\\KinopoiskDev\\Models\\NominationAward\`: Для информации о награде
* \`\\KinopoiskDev\\Models\\MovieAward\`: Для наград фильмов
* \`\\KinopoiskDev\\Models\\PersonAward\`: Для наград персон

## \`__construct()\` [#__construct]

**Описание:** Конструктор для создания объекта номинации
Создает новый экземпляр класса Nomination с указанными параметрами.
Оба параметра являются опциональными и могут быть null при отсутствии
соответствующей информации в источнике данных.

**Параметры:**

* \`$award\` (NominationAward|null): Информация о награде
* \`$title\` (string|null): Название номинации (например, "Лучший фильм", "Лучший актер")

## \`__toString()\` [#__tostring]

**Описание:** Возвращает строковое представление номинации
Формирует читаемое представление номинации, включающее название
номинации и информацию о награде, если они доступны.

**Возвращает:** \`string\` Строковое представление номинации

## \`fromArray()\` [#fromarray]

**Описание:** Создает объект Nomination из массива данных API
Фабричный метод для создания экземпляра класса Nomination из массива данных,
полученных от API Kinopoisk.dev. Безопасно обрабатывает отсутствующие
значения и преобразует вложенные объекты в соответствующие классы.

* award: array|null - данные о награде
* title: string|null - название номинации

**Параметры:**

* \`$data\` (array): Массив данных о номинации от API, содержащий ключи:

**Возвращает:** \`\\KinopoiskDev\\Models\\Nomination\` Новый экземпляр класса Nomination с данными из массива

**Исключения:**

* \`\\KinopoiskDev\\Exceptions\\KinopoiskDevException\`:

## \`toArray()\` [#toarray]

**Описание:** Преобразует объект в массив данных
Конвертирует текущий экземпляр класса Nomination в массив,
совместимый с форматом API Kinopoisk.dev. Используется для сериализации
данных при отправке запросов к API или для экспорта данных.

* award: array|null - данные о награде
* title: string|null - название номинации

**Возвращает:** \`array\` Массив с данными о номинации, содержащий ключи:

## \`validate()\` [#validate]

**Описание:** Валидирует данные модели

**Возвращает:** \`bool True\` если данные валидны
`,o={contents:[{heading:void 0,content:`**Описание:** Класс для представления номинации
Представляет информацию о номинации на награду, включая
детали о самой награде и название номинации. Используется
в составе наград для фильмов и персон.`},{heading:void 0,content:`**С версии:** 1.0.0`},{heading:void 0,content:`**Версия:** 1.0.0`},{heading:void 0,content:`**См. также:**`},{heading:void 0,content:"`\\KinopoiskDev\\Models\\NominationAward`: Для информации о награде"},{heading:void 0,content:"`\\KinopoiskDev\\Models\\MovieAward`: Для наград фильмов"},{heading:void 0,content:"`\\KinopoiskDev\\Models\\PersonAward`: Для наград персон"},{heading:`__construct`,content:`**Описание:** Конструктор для создания объекта номинации
Создает новый экземпляр класса Nomination с указанными параметрами.
Оба параметра являются опциональными и могут быть null при отсутствии
соответствующей информации в источнике данных.`},{heading:`__construct`,content:`**Параметры:**`},{heading:`__construct`,content:"`$award` (NominationAward|null): Информация о награде"},{heading:`__construct`,content:'`$title` (string|null): Название номинации (например, "Лучший фильм", "Лучший актер")'},{heading:`__tostring`,content:`**Описание:** Возвращает строковое представление номинации
Формирует читаемое представление номинации, включающее название
номинации и информацию о награде, если они доступны.`},{heading:`__tostring`,content:"**Возвращает:** `string` Строковое представление номинации"},{heading:`fromarray`,content:`**Описание:** Создает объект Nomination из массива данных API
Фабричный метод для создания экземпляра класса Nomination из массива данных,
полученных от API Kinopoisk.dev. Безопасно обрабатывает отсутствующие
значения и преобразует вложенные объекты в соответствующие классы.`},{heading:`fromarray`,content:`award: array|null - данные о награде`},{heading:`fromarray`,content:`title: string|null - название номинации`},{heading:`fromarray`,content:`**Параметры:**`},{heading:`fromarray`,content:"`$data` (array): Массив данных о номинации от API, содержащий ключи:"},{heading:`fromarray`,content:"**Возвращает:** `\\KinopoiskDev\\Models\\Nomination` Новый экземпляр класса Nomination с данными из массива"},{heading:`fromarray`,content:`**Исключения:**`},{heading:`fromarray`,content:"`\\KinopoiskDev\\Exceptions\\KinopoiskDevException`:"},{heading:`toarray`,content:`**Описание:** Преобразует объект в массив данных
Конвертирует текущий экземпляр класса Nomination в массив,
совместимый с форматом API Kinopoisk.dev. Используется для сериализации
данных при отправке запросов к API или для экспорта данных.`},{heading:`toarray`,content:`award: array|null - данные о награде`},{heading:`toarray`,content:`title: string|null - название номинации`},{heading:`toarray`,content:"**Возвращает:** `array` Массив с данными о номинации, содержащий ключи:"},{heading:`validate`,content:`**Описание:** Валидирует данные модели`},{heading:`validate`,content:"**Возвращает:** `bool True` если данные валидны"}],headings:[{id:`__construct`,content:"`__construct()`"},{id:`__tostring`,content:"`__toString()`"},{id:`fromarray`,content:"`fromArray()`"},{id:`toarray`,content:"`toArray()`"},{id:`validate`,content:"`validate()`"}]},s=[{depth:2,url:`#__construct`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`__construct()`})})},{depth:2,url:`#__tostring`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`__toString()`})})},{depth:2,url:`#fromarray`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`fromArray()`})})},{depth:2,url:`#toarray`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`toArray()`})})},{depth:2,url:`#validate`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`validate()`})})}];function c(e){let t={code:`code`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Класс для представления номинации
Представляет информацию о номинации на награду, включая
детали о самой награде и название номинации. Используется
в составе наград для фильмов и персон.`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 1.0.0`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Версия:`}),` 1.0.0`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`См. также:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`\\KinopoiskDev\\Models\\NominationAward`}),`: Для информации о награде`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`\\KinopoiskDev\\Models\\MovieAward`}),`: Для наград фильмов`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`\\KinopoiskDev\\Models\\PersonAward`}),`: Для наград персон`]}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`__construct`,children:(0,n.jsx)(t.code,{children:`__construct()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Конструктор для создания объекта номинации
Создает новый экземпляр класса Nomination с указанными параметрами.
Оба параметра являются опциональными и могут быть null при отсутствии
соответствующей информации в источнике данных.`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$award`}),` (NominationAward|null): Информация о награде`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$title`}),` (string|null): Название номинации (например, "Лучший фильм", "Лучший актер")`]}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`__tostring`,children:(0,n.jsx)(t.code,{children:`__toString()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Возвращает строковое представление номинации
Формирует читаемое представление номинации, включающее название
номинации и информацию о награде, если они доступны.`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`string`}),` Строковое представление номинации`]}),`
`,(0,n.jsx)(t.h2,{id:`fromarray`,children:(0,n.jsx)(t.code,{children:`fromArray()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Создает объект Nomination из массива данных API
Фабричный метод для создания экземпляра класса Nomination из массива данных,
полученных от API Kinopoisk.dev. Безопасно обрабатывает отсутствующие
значения и преобразует вложенные объекты в соответствующие классы.`]}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsx)(t.li,{children:`award: array|null - данные о награде`}),`
`,(0,n.jsx)(t.li,{children:`title: string|null - название номинации`}),`
`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$data`}),` (array): Массив данных о номинации от API, содержащий ключи:`]}),`
`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`\\KinopoiskDev\\Models\\Nomination`}),` Новый экземпляр класса Nomination с данными из массива`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Исключения:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`\\KinopoiskDev\\Exceptions\\KinopoiskDevException`}),`:`]}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`toarray`,children:(0,n.jsx)(t.code,{children:`toArray()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Преобразует объект в массив данных
Конвертирует текущий экземпляр класса Nomination в массив,
совместимый с форматом API Kinopoisk.dev. Используется для сериализации
данных при отправке запросов к API или для экспорта данных.`]}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsx)(t.li,{children:`award: array|null - данные о награде`}),`
`,(0,n.jsx)(t.li,{children:`title: string|null - название номинации`}),`
`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`array`}),` Массив с данными о номинации, содержащий ключи:`]}),`
`,(0,n.jsx)(t.h2,{id:`validate`,children:(0,n.jsx)(t.code,{children:`validate()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Валидирует данные модели`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`bool True`}),` если данные валидны`]})]})}function l(e={}){let{wrapper:t}=e.components||{};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}export{a as _markdown,l as default,r as frontmatter,i as lastModified,o as structuredData,s as toc};