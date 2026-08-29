import{r as e}from"./rolldown-runtime-QTnfLwEv.js";import{t}from"./jsx-runtime-By8HlURe.js";var n=e(t()),r={title:`MovieFromStudio`},i=new Date(1788011088e3),a=`

**Описание:** Класс для представления фильма из студии
Представляет минимальную информацию о фильме в контексте студии,
содержащую только уникальный идентификатор произведения.
Используется как упрощенная модель для связи между студиями и фильмами.

**С версии:** 1.0.0

**См. также:**

* \`\\KinopoiskDev\\Models\\Studio\`: Для основной модели студии
* \`\\KinopoiskDev\\Models\\Movie\`: Для полной информации о фильме

## \`__construct()\` [#__construct]

**Описание:** Конструктор для создания объекта фильма из студии
Создает новый экземпляр класса MovieFromStudio с указанным идентификатором.
Представляет минимальную информацию о фильме, связанном со студией.

**Параметры:**

* \`$id\` (int): Уникальный идентификатор фильма в системе Kinopoisk

**См. также:**

* \`MovieFromStudio::fromArray\`: () Для создания объекта из массива данных API
* \`MovieFromStudio::toArray\`: () Для преобразования объекта в массив

## \`fromArray()\` [#fromarray]

**Описание:** Создает объект MovieFromStudio из массива данных API
Фабричный метод для создания экземпляра класса MovieFromStudio из массива
данных, полученных от API Kinopoisk.dev. Извлекает только необходимый
идентификатор фильма для создания упрощенной модели.

* id: int - уникальный идентификатор фильма

**Параметры:**

* \`$data\` (array): Массив данных от API, содержащий ключ:

**Возвращает:** \`static\` Новый экземпляр MovieFromStudio с данными из массива

**См. также:**

* \`MovieFromStudio::toArray\`: () Для обратного преобразования в массив
* \`\\KinopoiskDev\\Models\\BaseModel::fromArray\`: () Для интерфейса BaseModel

## \`toArray()\` [#toarray]

**Описание:** Преобразует объект в массив данных
Конвертирует текущий экземпляр класса MovieFromStudio в массив,
совместимый с форматом API Kinopoisk.dev. Возвращает только
идентификатор фильма как минимальный набор данных.

* id: int - уникальный идентификатор фильма

**Параметры:**

* \`$includeNulls\` (bool): Включать ли null значения в результат (по умолчанию true)

**Возвращает:** \`array\` Массив с данными о фильме, содержащий ключ:

**См. также:**

* \`MovieFromStudio::fromArray\`: () Для создания объекта из массива
* \`\\KinopoiskDev\\Models\\BaseModel::toArray\`: () Для интерфейса BaseModel

## \`validate()\` [#validate]

**Описание:** Валидирует данные модели
Проверяет корректность данных модели согласно бизнес-правилам.
Для MovieFromStudio проверяется только валидность идентификатора.

**Возвращает:** \`bool True\` если данные валидны, false в противном случае
`,o={contents:[{heading:void 0,content:`**Описание:** Класс для представления фильма из студии
Представляет минимальную информацию о фильме в контексте студии,
содержащую только уникальный идентификатор произведения.
Используется как упрощенная модель для связи между студиями и фильмами.`},{heading:void 0,content:`**С версии:** 1.0.0`},{heading:void 0,content:`**См. также:**`},{heading:void 0,content:"`\\KinopoiskDev\\Models\\Studio`: Для основной модели студии"},{heading:void 0,content:"`\\KinopoiskDev\\Models\\Movie`: Для полной информации о фильме"},{heading:`__construct`,content:`**Описание:** Конструктор для создания объекта фильма из студии
Создает новый экземпляр класса MovieFromStudio с указанным идентификатором.
Представляет минимальную информацию о фильме, связанном со студией.`},{heading:`__construct`,content:`**Параметры:**`},{heading:`__construct`,content:"`$id` (int): Уникальный идентификатор фильма в системе Kinopoisk"},{heading:`__construct`,content:`**См. также:**`},{heading:`__construct`,content:"`MovieFromStudio::fromArray`: () Для создания объекта из массива данных API"},{heading:`__construct`,content:"`MovieFromStudio::toArray`: () Для преобразования объекта в массив"},{heading:`fromarray`,content:`**Описание:** Создает объект MovieFromStudio из массива данных API
Фабричный метод для создания экземпляра класса MovieFromStudio из массива
данных, полученных от API Kinopoisk.dev. Извлекает только необходимый
идентификатор фильма для создания упрощенной модели.`},{heading:`fromarray`,content:`id: int - уникальный идентификатор фильма`},{heading:`fromarray`,content:`**Параметры:**`},{heading:`fromarray`,content:"`$data` (array): Массив данных от API, содержащий ключ:"},{heading:`fromarray`,content:"**Возвращает:** `static` Новый экземпляр MovieFromStudio с данными из массива"},{heading:`fromarray`,content:`**См. также:**`},{heading:`fromarray`,content:"`MovieFromStudio::toArray`: () Для обратного преобразования в массив"},{heading:`fromarray`,content:"`\\KinopoiskDev\\Models\\BaseModel::fromArray`: () Для интерфейса BaseModel"},{heading:`toarray`,content:`**Описание:** Преобразует объект в массив данных
Конвертирует текущий экземпляр класса MovieFromStudio в массив,
совместимый с форматом API Kinopoisk.dev. Возвращает только
идентификатор фильма как минимальный набор данных.`},{heading:`toarray`,content:`id: int - уникальный идентификатор фильма`},{heading:`toarray`,content:`**Параметры:**`},{heading:`toarray`,content:"`$includeNulls` (bool): Включать ли null значения в результат (по умолчанию true)"},{heading:`toarray`,content:"**Возвращает:** `array` Массив с данными о фильме, содержащий ключ:"},{heading:`toarray`,content:`**См. также:**`},{heading:`toarray`,content:"`MovieFromStudio::fromArray`: () Для создания объекта из массива"},{heading:`toarray`,content:"`\\KinopoiskDev\\Models\\BaseModel::toArray`: () Для интерфейса BaseModel"},{heading:`validate`,content:`**Описание:** Валидирует данные модели
Проверяет корректность данных модели согласно бизнес-правилам.
Для MovieFromStudio проверяется только валидность идентификатора.`},{heading:`validate`,content:"**Возвращает:** `bool True` если данные валидны, false в противном случае"}],headings:[{id:`__construct`,content:"`__construct()`"},{id:`fromarray`,content:"`fromArray()`"},{id:`toarray`,content:"`toArray()`"},{id:`validate`,content:"`validate()`"}]},s=[{depth:2,url:`#__construct`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`__construct()`})})},{depth:2,url:`#fromarray`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`fromArray()`})})},{depth:2,url:`#toarray`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`toArray()`})})},{depth:2,url:`#validate`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`validate()`})})}];function c(e){let t={code:`code`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Класс для представления фильма из студии
Представляет минимальную информацию о фильме в контексте студии,
содержащую только уникальный идентификатор произведения.
Используется как упрощенная модель для связи между студиями и фильмами.`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 1.0.0`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`См. также:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`\\KinopoiskDev\\Models\\Studio`}),`: Для основной модели студии`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`\\KinopoiskDev\\Models\\Movie`}),`: Для полной информации о фильме`]}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`__construct`,children:(0,n.jsx)(t.code,{children:`__construct()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Конструктор для создания объекта фильма из студии
Создает новый экземпляр класса MovieFromStudio с указанным идентификатором.
Представляет минимальную информацию о фильме, связанном со студией.`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$id`}),` (int): Уникальный идентификатор фильма в системе Kinopoisk`]}),`
`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`См. также:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`MovieFromStudio::fromArray`}),`: () Для создания объекта из массива данных API`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`MovieFromStudio::toArray`}),`: () Для преобразования объекта в массив`]}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`fromarray`,children:(0,n.jsx)(t.code,{children:`fromArray()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Создает объект MovieFromStudio из массива данных API
Фабричный метод для создания экземпляра класса MovieFromStudio из массива
данных, полученных от API Kinopoisk.dev. Извлекает только необходимый
идентификатор фильма для создания упрощенной модели.`]}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsx)(t.li,{children:`id: int - уникальный идентификатор фильма`}),`
`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$data`}),` (array): Массив данных от API, содержащий ключ:`]}),`
`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`static`}),` Новый экземпляр MovieFromStudio с данными из массива`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`См. также:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`MovieFromStudio::toArray`}),`: () Для обратного преобразования в массив`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`\\KinopoiskDev\\Models\\BaseModel::fromArray`}),`: () Для интерфейса BaseModel`]}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`toarray`,children:(0,n.jsx)(t.code,{children:`toArray()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Преобразует объект в массив данных
Конвертирует текущий экземпляр класса MovieFromStudio в массив,
совместимый с форматом API Kinopoisk.dev. Возвращает только
идентификатор фильма как минимальный набор данных.`]}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsx)(t.li,{children:`id: int - уникальный идентификатор фильма`}),`
`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$includeNulls`}),` (bool): Включать ли null значения в результат (по умолчанию true)`]}),`
`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`array`}),` Массив с данными о фильме, содержащий ключ:`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`См. также:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`MovieFromStudio::fromArray`}),`: () Для создания объекта из массива`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`\\KinopoiskDev\\Models\\BaseModel::toArray`}),`: () Для интерфейса BaseModel`]}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`validate`,children:(0,n.jsx)(t.code,{children:`validate()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Валидирует данные модели
Проверяет корректность данных модели согласно бизнес-правилам.
Для MovieFromStudio проверяется только валидность идентификатора.`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`bool True`}),` если данные валидны, false в противном случае`]})]})}function l(e={}){let{wrapper:t}=e.components||{};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}export{a as _markdown,l as default,r as frontmatter,i as lastModified,o as structuredData,s as toc};