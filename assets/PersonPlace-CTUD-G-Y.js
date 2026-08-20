import{r as e}from"./rolldown-runtime-QTnfLwEv.js";import{t}from"./jsx-runtime-By8HlURe.js";var n=e(t()),r={title:`PersonPlace`},i=new Date(1787223655e3),a=`

**Описание:** Класс для представления географического места, связанного с персоной
Представляет место рождения или смерти персоны в системе Kinopoisk.dev.
Используется для хранения и обработки географической информации о персонах,
включая города, страны или другие места, связанные с жизнью человека.
Класс предоставляет простой интерфейс для работы с текстовыми данными
о местах в контексте биографической информации.

**С версии:** 1.0.0

**Версия:** 1.0.0

**См. также:**

* \`\\KinopoiskDev\\Models\\Person\`: Для работы с персонами
* \`\\KinopoiskDev\\Models\\PersonPlaceValue\`: Для более детальной географической информации

## \`__construct()\` [#__construct]

**Описание:** Строковое значение места рождения или смерти персоны
Содержит текстовое описание географического места, связанного с персоной.
Может содержать название города, страны или полный адрес места рождения/смерти.
Значение доступно только для чтения после создания объекта.

## \`__toString()\` [#__tostring]

**Описание:** Возвращает строковое представление места персоны
Магический метод для получения строкового представления объекта PersonPlace.
Используется при приведении объекта к строке или при выводе объекта в контексте,
где требуется строковое значение. Возвращает непосредственно значение места
без дополнительного форматирования.

**Возвращает:** \`string\` Строковое представление места рождения/смерти персоны

**См. также:**

* \`PersonPlace::toArray\`: () Для получения данных в формате массива
* \`PersonPlace::\`: $value Для доступа к свойству места напрямую

## \`fromArray()\` [#fromarray]

**Описание:** Создает объект PersonPlace из массива данных API
Фабричный метод для создания экземпляра класса PersonPlace из массива данных,
полученных от API Kinopoisk.dev. Безопасно извлекает значение места из массива
и создает новый объект с соответствующими данными. Используется для
десериализации данных API в объекты модели.

* value: string - текстовое значение места рождения/смерти

**Параметры:**

* \`$data\` (array): Массив данных от API, содержащий ключи:

**Возвращает:** \`static\` Новый экземпляр класса PersonPlace с данными из массива

**См. также:**

* \`PersonPlace::toArray\`: () Для обратного преобразования в массив
* \`PersonPlace::__construct\`: () Для создания объекта с параметрами

## \`toArray()\` [#toarray]

**Описание:** Преобразует объект в массив данных
Конвертирует текущий экземпляр класса PersonPlace в массив,
совместимый с форматом API Kinopoisk.dev. Используется для сериализации
данных при отправке запросов к API, кэшировании или экспорте данных.
Возвращает массив с единственным ключом 'value'.

* value: string - текстовое значение места рождения/смерти

**Возвращает:** \`array\` Массив с данными о месте, содержащий:

**См. также:**

* \`PersonPlace::fromArray\`: () Для создания объекта из массива
* \`PersonPlace::__toString\`: () Для получения только текстового значения

## \`validate()\` [#validate]

**Описание:** Валидирует данные модели

**Возвращает:** \`bool True\` если данные валидны
`,o={contents:[{heading:void 0,content:`**Описание:** Класс для представления географического места, связанного с персоной
Представляет место рождения или смерти персоны в системе Kinopoisk.dev.
Используется для хранения и обработки географической информации о персонах,
включая города, страны или другие места, связанные с жизнью человека.
Класс предоставляет простой интерфейс для работы с текстовыми данными
о местах в контексте биографической информации.`},{heading:void 0,content:`**С версии:** 1.0.0`},{heading:void 0,content:`**Версия:** 1.0.0`},{heading:void 0,content:`**См. также:**`},{heading:void 0,content:"`\\KinopoiskDev\\Models\\Person`: Для работы с персонами"},{heading:void 0,content:"`\\KinopoiskDev\\Models\\PersonPlaceValue`: Для более детальной географической информации"},{heading:`__construct`,content:`**Описание:** Строковое значение места рождения или смерти персоны
Содержит текстовое описание географического места, связанного с персоной.
Может содержать название города, страны или полный адрес места рождения/смерти.
Значение доступно только для чтения после создания объекта.`},{heading:`__tostring`,content:`**Описание:** Возвращает строковое представление места персоны
Магический метод для получения строкового представления объекта PersonPlace.
Используется при приведении объекта к строке или при выводе объекта в контексте,
где требуется строковое значение. Возвращает непосредственно значение места
без дополнительного форматирования.`},{heading:`__tostring`,content:"**Возвращает:** `string` Строковое представление места рождения/смерти персоны"},{heading:`__tostring`,content:`**См. также:**`},{heading:`__tostring`,content:"`PersonPlace::toArray`: () Для получения данных в формате массива"},{heading:`__tostring`,content:"`PersonPlace::`: $value Для доступа к свойству места напрямую"},{heading:`fromarray`,content:`**Описание:** Создает объект PersonPlace из массива данных API
Фабричный метод для создания экземпляра класса PersonPlace из массива данных,
полученных от API Kinopoisk.dev. Безопасно извлекает значение места из массива
и создает новый объект с соответствующими данными. Используется для
десериализации данных API в объекты модели.`},{heading:`fromarray`,content:`value: string - текстовое значение места рождения/смерти`},{heading:`fromarray`,content:`**Параметры:**`},{heading:`fromarray`,content:"`$data` (array): Массив данных от API, содержащий ключи:"},{heading:`fromarray`,content:"**Возвращает:** `static` Новый экземпляр класса PersonPlace с данными из массива"},{heading:`fromarray`,content:`**См. также:**`},{heading:`fromarray`,content:"`PersonPlace::toArray`: () Для обратного преобразования в массив"},{heading:`fromarray`,content:"`PersonPlace::__construct`: () Для создания объекта с параметрами"},{heading:`toarray`,content:`**Описание:** Преобразует объект в массив данных
Конвертирует текущий экземпляр класса PersonPlace в массив,
совместимый с форматом API Kinopoisk.dev. Используется для сериализации
данных при отправке запросов к API, кэшировании или экспорте данных.
Возвращает массив с единственным ключом 'value'.`},{heading:`toarray`,content:`value: string - текстовое значение места рождения/смерти`},{heading:`toarray`,content:"**Возвращает:** `array` Массив с данными о месте, содержащий:"},{heading:`toarray`,content:`**См. также:**`},{heading:`toarray`,content:"`PersonPlace::fromArray`: () Для создания объекта из массива"},{heading:`toarray`,content:"`PersonPlace::__toString`: () Для получения только текстового значения"},{heading:`validate`,content:`**Описание:** Валидирует данные модели`},{heading:`validate`,content:"**Возвращает:** `bool True` если данные валидны"}],headings:[{id:`__construct`,content:"`__construct()`"},{id:`__tostring`,content:"`__toString()`"},{id:`fromarray`,content:"`fromArray()`"},{id:`toarray`,content:"`toArray()`"},{id:`validate`,content:"`validate()`"}]},s=[{depth:2,url:`#__construct`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`__construct()`})})},{depth:2,url:`#__tostring`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`__toString()`})})},{depth:2,url:`#fromarray`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`fromArray()`})})},{depth:2,url:`#toarray`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`toArray()`})})},{depth:2,url:`#validate`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`validate()`})})}];function c(e){let t={code:`code`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Класс для представления географического места, связанного с персоной
Представляет место рождения или смерти персоны в системе Kinopoisk.dev.
Используется для хранения и обработки географической информации о персонах,
включая города, страны или другие места, связанные с жизнью человека.
Класс предоставляет простой интерфейс для работы с текстовыми данными
о местах в контексте биографической информации.`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 1.0.0`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Версия:`}),` 1.0.0`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`См. также:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`\\KinopoiskDev\\Models\\Person`}),`: Для работы с персонами`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`\\KinopoiskDev\\Models\\PersonPlaceValue`}),`: Для более детальной географической информации`]}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`__construct`,children:(0,n.jsx)(t.code,{children:`__construct()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Строковое значение места рождения или смерти персоны
Содержит текстовое описание географического места, связанного с персоной.
Может содержать название города, страны или полный адрес места рождения/смерти.
Значение доступно только для чтения после создания объекта.`]}),`
`,(0,n.jsx)(t.h2,{id:`__tostring`,children:(0,n.jsx)(t.code,{children:`__toString()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Возвращает строковое представление места персоны
Магический метод для получения строкового представления объекта PersonPlace.
Используется при приведении объекта к строке или при выводе объекта в контексте,
где требуется строковое значение. Возвращает непосредственно значение места
без дополнительного форматирования.`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`string`}),` Строковое представление места рождения/смерти персоны`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`См. также:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`PersonPlace::toArray`}),`: () Для получения данных в формате массива`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`PersonPlace::`}),`: $value Для доступа к свойству места напрямую`]}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`fromarray`,children:(0,n.jsx)(t.code,{children:`fromArray()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Создает объект PersonPlace из массива данных API
Фабричный метод для создания экземпляра класса PersonPlace из массива данных,
полученных от API Kinopoisk.dev. Безопасно извлекает значение места из массива
и создает новый объект с соответствующими данными. Используется для
десериализации данных API в объекты модели.`]}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsx)(t.li,{children:`value: string - текстовое значение места рождения/смерти`}),`
`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$data`}),` (array): Массив данных от API, содержащий ключи:`]}),`
`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`static`}),` Новый экземпляр класса PersonPlace с данными из массива`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`См. также:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`PersonPlace::toArray`}),`: () Для обратного преобразования в массив`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`PersonPlace::__construct`}),`: () Для создания объекта с параметрами`]}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`toarray`,children:(0,n.jsx)(t.code,{children:`toArray()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Преобразует объект в массив данных
Конвертирует текущий экземпляр класса PersonPlace в массив,
совместимый с форматом API Kinopoisk.dev. Используется для сериализации
данных при отправке запросов к API, кэшировании или экспорте данных.
Возвращает массив с единственным ключом 'value'.`]}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsx)(t.li,{children:`value: string - текстовое значение места рождения/смерти`}),`
`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`array`}),` Массив с данными о месте, содержащий:`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`См. также:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`PersonPlace::fromArray`}),`: () Для создания объекта из массива`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`PersonPlace::__toString`}),`: () Для получения только текстового значения`]}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`validate`,children:(0,n.jsx)(t.code,{children:`validate()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Валидирует данные модели`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`bool True`}),` если данные валидны`]})]})}function l(e={}){let{wrapper:t}=e.components||{};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}export{a as _markdown,l as default,r as frontmatter,i as lastModified,o as structuredData,s as toc};