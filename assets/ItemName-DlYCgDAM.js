import{r as e}from"./rolldown-runtime-QTnfLwEv.js";import{t}from"./jsx-runtime-By8HlURe.js";var n=e(t()),r={title:`ItemName`},i=new Date(1786544989e3),a=`

**Описание:** Класс для представления названия элемента
Простая модель для хранения названий различных элементов системы
Kinopoisk.dev. Используется для представления наименований фильмов,
персон, жанров и других сущностей, когда требуется только строковое
значение названия без дополнительных атрибутов.

**С версии:** 1.0.0

**Версия:** 1.0.0

**API Endpoint:** \`/v1/movie/possible-values-by-field\`

**См. также:**

* \`\\KinopoiskDev\\Models\\Name\`: Для представления названий с языком и типом
* \`\\KinopoiskDev\\Models\\Movie\`: Для основной модели фильма

## \`__construct()\` [#__construct]

**Описание:** Конструктор для создания объекта названия элемента
Создает новый экземпляр класса ItemName с указанным названием.
Используется для инициализации простых строковых названий без
дополнительных метаданных о языке или типе.

**Параметры:**

* \`$name\` (string): Строковое представление названия элемента

**См. также:**

* \`ItemName::fromArray\`: () Для создания объекта из массива данных API
* \`ItemName::toArray\`: () Для преобразования объекта в массив

## \`fromArray()\` [#fromarray]

**Описание:** Создает объект ItemName из массива данных API
Фабричный метод для создания экземпляра класса ItemName из массива
данных, полученных от API Kinopoisk.dev. Извлекает значение названия
из ключа 'name' входного массива и создает новый объект.

* name: string - название элемента

**Параметры:**

* \`$data\` (array): Массив данных от API, содержащий ключ:

**Возвращает:** \`\\KinopoiskDev\\Models\\ItemName\` Новый экземпляр класса ItemName с данными из массива

**См. также:**

* \`ItemName::toArray\`: () Для обратного преобразования в массив

## \`toArray()\` [#toarray]

**Описание:** Преобразует объект в массив данных
Конвертирует текущий экземпляр класса ItemName в массив,
совместимый с форматом API Kinopoisk.dev. Используется для
сериализации данных при отправке запросов к API или для
экспорта данных в JSON формат.

* name: string - название элемента

**Возвращает:** \`array\` Массив с данными о названии элемента, содержащий ключи:

**См. также:**

* \`ItemName::fromArray\`: () Для создания объекта из массива

## \`validate()\` [#validate]

**Описание:** Валидирует данные модели

**Возвращает:** \`bool True\` если данные валидны
`,o={contents:[{heading:void 0,content:`**Описание:** Класс для представления названия элемента
Простая модель для хранения названий различных элементов системы
Kinopoisk.dev. Используется для представления наименований фильмов,
персон, жанров и других сущностей, когда требуется только строковое
значение названия без дополнительных атрибутов.`},{heading:void 0,content:`**С версии:** 1.0.0`},{heading:void 0,content:`**Версия:** 1.0.0`},{heading:void 0,content:"**API Endpoint:** `/v1/movie/possible-values-by-field`"},{heading:void 0,content:`**См. также:**`},{heading:void 0,content:"`\\KinopoiskDev\\Models\\Name`: Для представления названий с языком и типом"},{heading:void 0,content:"`\\KinopoiskDev\\Models\\Movie`: Для основной модели фильма"},{heading:`__construct`,content:`**Описание:** Конструктор для создания объекта названия элемента
Создает новый экземпляр класса ItemName с указанным названием.
Используется для инициализации простых строковых названий без
дополнительных метаданных о языке или типе.`},{heading:`__construct`,content:`**Параметры:**`},{heading:`__construct`,content:"`$name` (string): Строковое представление названия элемента"},{heading:`__construct`,content:`**См. также:**`},{heading:`__construct`,content:"`ItemName::fromArray`: () Для создания объекта из массива данных API"},{heading:`__construct`,content:"`ItemName::toArray`: () Для преобразования объекта в массив"},{heading:`fromarray`,content:`**Описание:** Создает объект ItemName из массива данных API
Фабричный метод для создания экземпляра класса ItemName из массива
данных, полученных от API Kinopoisk.dev. Извлекает значение названия
из ключа 'name' входного массива и создает новый объект.`},{heading:`fromarray`,content:`name: string - название элемента`},{heading:`fromarray`,content:`**Параметры:**`},{heading:`fromarray`,content:"`$data` (array): Массив данных от API, содержащий ключ:"},{heading:`fromarray`,content:"**Возвращает:** `\\KinopoiskDev\\Models\\ItemName` Новый экземпляр класса ItemName с данными из массива"},{heading:`fromarray`,content:`**См. также:**`},{heading:`fromarray`,content:"`ItemName::toArray`: () Для обратного преобразования в массив"},{heading:`toarray`,content:`**Описание:** Преобразует объект в массив данных
Конвертирует текущий экземпляр класса ItemName в массив,
совместимый с форматом API Kinopoisk.dev. Используется для
сериализации данных при отправке запросов к API или для
экспорта данных в JSON формат.`},{heading:`toarray`,content:`name: string - название элемента`},{heading:`toarray`,content:"**Возвращает:** `array` Массив с данными о названии элемента, содержащий ключи:"},{heading:`toarray`,content:`**См. также:**`},{heading:`toarray`,content:"`ItemName::fromArray`: () Для создания объекта из массива"},{heading:`validate`,content:`**Описание:** Валидирует данные модели`},{heading:`validate`,content:"**Возвращает:** `bool True` если данные валидны"}],headings:[{id:`__construct`,content:"`__construct()`"},{id:`fromarray`,content:"`fromArray()`"},{id:`toarray`,content:"`toArray()`"},{id:`validate`,content:"`validate()`"}]},s=[{depth:2,url:`#__construct`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`__construct()`})})},{depth:2,url:`#fromarray`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`fromArray()`})})},{depth:2,url:`#toarray`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`toArray()`})})},{depth:2,url:`#validate`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`validate()`})})}];function c(e){let t={code:`code`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Класс для представления названия элемента
Простая модель для хранения названий различных элементов системы
Kinopoisk.dev. Используется для представления наименований фильмов,
персон, жанров и других сущностей, когда требуется только строковое
значение названия без дополнительных атрибутов.`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 1.0.0`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Версия:`}),` 1.0.0`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`API Endpoint:`}),` `,(0,n.jsx)(t.code,{children:`/v1/movie/possible-values-by-field`})]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`См. также:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`\\KinopoiskDev\\Models\\Name`}),`: Для представления названий с языком и типом`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`\\KinopoiskDev\\Models\\Movie`}),`: Для основной модели фильма`]}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`__construct`,children:(0,n.jsx)(t.code,{children:`__construct()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Конструктор для создания объекта названия элемента
Создает новый экземпляр класса ItemName с указанным названием.
Используется для инициализации простых строковых названий без
дополнительных метаданных о языке или типе.`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$name`}),` (string): Строковое представление названия элемента`]}),`
`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`См. также:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`ItemName::fromArray`}),`: () Для создания объекта из массива данных API`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`ItemName::toArray`}),`: () Для преобразования объекта в массив`]}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`fromarray`,children:(0,n.jsx)(t.code,{children:`fromArray()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Создает объект ItemName из массива данных API
Фабричный метод для создания экземпляра класса ItemName из массива
данных, полученных от API Kinopoisk.dev. Извлекает значение названия
из ключа 'name' входного массива и создает новый объект.`]}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsx)(t.li,{children:`name: string - название элемента`}),`
`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$data`}),` (array): Массив данных от API, содержащий ключ:`]}),`
`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`\\KinopoiskDev\\Models\\ItemName`}),` Новый экземпляр класса ItemName с данными из массива`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`См. также:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`ItemName::toArray`}),`: () Для обратного преобразования в массив`]}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`toarray`,children:(0,n.jsx)(t.code,{children:`toArray()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Преобразует объект в массив данных
Конвертирует текущий экземпляр класса ItemName в массив,
совместимый с форматом API Kinopoisk.dev. Используется для
сериализации данных при отправке запросов к API или для
экспорта данных в JSON формат.`]}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsx)(t.li,{children:`name: string - название элемента`}),`
`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`array`}),` Массив с данными о названии элемента, содержащий ключи:`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`См. также:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`ItemName::fromArray`}),`: () Для создания объекта из массива`]}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`validate`,children:(0,n.jsx)(t.code,{children:`validate()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Валидирует данные модели`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`bool True`}),` если данные валидны`]})]})}function l(e={}){let{wrapper:t}=e.components||{};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}export{a as _markdown,l as default,r as frontmatter,i as lastModified,o as structuredData,s as toc};