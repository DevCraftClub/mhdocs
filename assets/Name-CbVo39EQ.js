import{r as e}from"./rolldown-runtime-QTnfLwEv.js";import{t}from"./jsx-runtime-By8HlURe.js";var n=e(t()),r={title:`Name`},i=new Date(1787124777e3),a=`

**Описание:** Класс для представления названий фильмов
Представляет информацию о названии фильма, включая само название, язык
и тип названия. Используется для хранения различных вариантов названий
фильмов в разных языках и форматах (официальное название, рабочее название,
альтернативное название и т.д.).

**С версии:** 1.0.0

**Версия:** 1.0.0

**См. также:**

* \`\\KinopoiskDev\\Models\\Movie\`: Для использования в информации о фильмах
* \`\\KinopoiskDev\\Models\\LinkedMovie\`: Для связанных фильмов с названиями

## \`__construct()\` [#__construct]

**Описание:** Конструктор модели названия
Создает новый экземпляр класса Name с указанными параметрами названия,
языка и типа. Параметры язык и тип являются опциональными и могут быть null
при отсутствии соответствующих данных.

**Параметры:**

* \`$name\` (string): Название фильма (основное значение)
* \`$language\` (string|null): Язык названия в формате ISO 639-1 (например, "ru", "en") или null
* \`$type\` (string|null): Тип названия (например, "официальное", "рабочее", "альтернативное") или null

**См. также:**

* \`Name::fromArray\`: () Для создания объекта из массива данных API
* \`Name::toArray\`: () Для преобразования объекта в массив

## \`fromArray()\` [#fromarray]

**Описание:** Создает объект Name из массива данных API
Статический фабричный метод для создания экземпляра класса Name из массива
данных, полученных от API Kinopoisk.dev. Безопасно обрабатывает отсутствующие
значения для опциональных параметров, устанавливая их в null. Используется
для десериализации данных о названиях фильмов из ответов API.

* name: string - само название фильма (обязательно)
* language: string|null - язык названия (опционально)
* type: string|null - тип названия (опционально)

**Параметры:**

* \`$data\` (array): Массив данных о названии от API, содержащий ключи:

**Возвращает:** \`static\` Новый экземпляр класса Name с данными из массива

**См. также:**

* \`Name::toArray\`: () Для обратного преобразования в массив

## \`toArray()\` [#toarray]

**Описание:** Преобразует объект в массив данных
Конвертирует текущий экземпляр класса Name в массив, совместимый с форматом
API Kinopoisk.dev. Используется для сериализации данных при отправке
запросов к API или для экспорта данных в JSON. Включает все свойства
объекта, включая null-значения.

* name: string - название фильма
* language: string|null - язык названия
* type: string|null - тип названия

**Возвращает:** \`array\` Массив с данными о названии, содержащий ключи:

**См. также:**

* \`Name::fromArray\`: () Для создания объекта из массива

## \`validate()\` [#validate]

**Описание:** Валидирует данные модели

**Возвращает:** \`bool True\` если данные валидны
`,o={contents:[{heading:void 0,content:`**Описание:** Класс для представления названий фильмов
Представляет информацию о названии фильма, включая само название, язык
и тип названия. Используется для хранения различных вариантов названий
фильмов в разных языках и форматах (официальное название, рабочее название,
альтернативное название и т.д.).`},{heading:void 0,content:`**С версии:** 1.0.0`},{heading:void 0,content:`**Версия:** 1.0.0`},{heading:void 0,content:`**См. также:**`},{heading:void 0,content:"`\\KinopoiskDev\\Models\\Movie`: Для использования в информации о фильмах"},{heading:void 0,content:"`\\KinopoiskDev\\Models\\LinkedMovie`: Для связанных фильмов с названиями"},{heading:`__construct`,content:`**Описание:** Конструктор модели названия
Создает новый экземпляр класса Name с указанными параметрами названия,
языка и типа. Параметры язык и тип являются опциональными и могут быть null
при отсутствии соответствующих данных.`},{heading:`__construct`,content:`**Параметры:**`},{heading:`__construct`,content:"`$name` (string): Название фильма (основное значение)"},{heading:`__construct`,content:'`$language` (string|null): Язык названия в формате ISO 639-1 (например, "ru", "en") или null'},{heading:`__construct`,content:'`$type` (string|null): Тип названия (например, "официальное", "рабочее", "альтернативное") или null'},{heading:`__construct`,content:`**См. также:**`},{heading:`__construct`,content:"`Name::fromArray`: () Для создания объекта из массива данных API"},{heading:`__construct`,content:"`Name::toArray`: () Для преобразования объекта в массив"},{heading:`fromarray`,content:`**Описание:** Создает объект Name из массива данных API
Статический фабричный метод для создания экземпляра класса Name из массива
данных, полученных от API Kinopoisk.dev. Безопасно обрабатывает отсутствующие
значения для опциональных параметров, устанавливая их в null. Используется
для десериализации данных о названиях фильмов из ответов API.`},{heading:`fromarray`,content:`name: string - само название фильма (обязательно)`},{heading:`fromarray`,content:`language: string|null - язык названия (опционально)`},{heading:`fromarray`,content:`type: string|null - тип названия (опционально)`},{heading:`fromarray`,content:`**Параметры:**`},{heading:`fromarray`,content:"`$data` (array): Массив данных о названии от API, содержащий ключи:"},{heading:`fromarray`,content:"**Возвращает:** `static` Новый экземпляр класса Name с данными из массива"},{heading:`fromarray`,content:`**См. также:**`},{heading:`fromarray`,content:"`Name::toArray`: () Для обратного преобразования в массив"},{heading:`toarray`,content:`**Описание:** Преобразует объект в массив данных
Конвертирует текущий экземпляр класса Name в массив, совместимый с форматом
API Kinopoisk.dev. Используется для сериализации данных при отправке
запросов к API или для экспорта данных в JSON. Включает все свойства
объекта, включая null-значения.`},{heading:`toarray`,content:`name: string - название фильма`},{heading:`toarray`,content:`language: string|null - язык названия`},{heading:`toarray`,content:`type: string|null - тип названия`},{heading:`toarray`,content:"**Возвращает:** `array` Массив с данными о названии, содержащий ключи:"},{heading:`toarray`,content:`**См. также:**`},{heading:`toarray`,content:"`Name::fromArray`: () Для создания объекта из массива"},{heading:`validate`,content:`**Описание:** Валидирует данные модели`},{heading:`validate`,content:"**Возвращает:** `bool True` если данные валидны"}],headings:[{id:`__construct`,content:"`__construct()`"},{id:`fromarray`,content:"`fromArray()`"},{id:`toarray`,content:"`toArray()`"},{id:`validate`,content:"`validate()`"}]},s=[{depth:2,url:`#__construct`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`__construct()`})})},{depth:2,url:`#fromarray`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`fromArray()`})})},{depth:2,url:`#toarray`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`toArray()`})})},{depth:2,url:`#validate`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`validate()`})})}];function c(e){let t={code:`code`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Класс для представления названий фильмов
Представляет информацию о названии фильма, включая само название, язык
и тип названия. Используется для хранения различных вариантов названий
фильмов в разных языках и форматах (официальное название, рабочее название,
альтернативное название и т.д.).`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 1.0.0`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Версия:`}),` 1.0.0`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`См. также:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`\\KinopoiskDev\\Models\\Movie`}),`: Для использования в информации о фильмах`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`\\KinopoiskDev\\Models\\LinkedMovie`}),`: Для связанных фильмов с названиями`]}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`__construct`,children:(0,n.jsx)(t.code,{children:`__construct()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Конструктор модели названия
Создает новый экземпляр класса Name с указанными параметрами названия,
языка и типа. Параметры язык и тип являются опциональными и могут быть null
при отсутствии соответствующих данных.`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$name`}),` (string): Название фильма (основное значение)`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$language`}),` (string|null): Язык названия в формате ISO 639-1 (например, "ru", "en") или null`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$type`}),` (string|null): Тип названия (например, "официальное", "рабочее", "альтернативное") или null`]}),`
`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`См. также:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`Name::fromArray`}),`: () Для создания объекта из массива данных API`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`Name::toArray`}),`: () Для преобразования объекта в массив`]}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`fromarray`,children:(0,n.jsx)(t.code,{children:`fromArray()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Создает объект Name из массива данных API
Статический фабричный метод для создания экземпляра класса Name из массива
данных, полученных от API Kinopoisk.dev. Безопасно обрабатывает отсутствующие
значения для опциональных параметров, устанавливая их в null. Используется
для десериализации данных о названиях фильмов из ответов API.`]}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsx)(t.li,{children:`name: string - само название фильма (обязательно)`}),`
`,(0,n.jsx)(t.li,{children:`language: string|null - язык названия (опционально)`}),`
`,(0,n.jsx)(t.li,{children:`type: string|null - тип названия (опционально)`}),`
`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$data`}),` (array): Массив данных о названии от API, содержащий ключи:`]}),`
`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`static`}),` Новый экземпляр класса Name с данными из массива`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`См. также:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`Name::toArray`}),`: () Для обратного преобразования в массив`]}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`toarray`,children:(0,n.jsx)(t.code,{children:`toArray()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Преобразует объект в массив данных
Конвертирует текущий экземпляр класса Name в массив, совместимый с форматом
API Kinopoisk.dev. Используется для сериализации данных при отправке
запросов к API или для экспорта данных в JSON. Включает все свойства
объекта, включая null-значения.`]}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsx)(t.li,{children:`name: string - название фильма`}),`
`,(0,n.jsx)(t.li,{children:`language: string|null - язык названия`}),`
`,(0,n.jsx)(t.li,{children:`type: string|null - тип названия`}),`
`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`array`}),` Массив с данными о названии, содержащий ключи:`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`См. также:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`Name::fromArray`}),`: () Для создания объекта из массива`]}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`validate`,children:(0,n.jsx)(t.code,{children:`validate()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Валидирует данные модели`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`bool True`}),` если данные валидны`]})]})}function l(e={}){let{wrapper:t}=e.components||{};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}export{a as _markdown,l as default,r as frontmatter,i as lastModified,o as structuredData,s as toc};