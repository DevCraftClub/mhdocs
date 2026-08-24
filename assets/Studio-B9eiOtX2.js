import{r as e}from"./rolldown-runtime-QTnfLwEv.js";import{t}from"./jsx-runtime-By8HlURe.js";var n=e(t()),r={title:`Studio`},i=new Date(1787223655e3),a=`

**Описание:** Класс для представления студии кинопроизводства
Представляет информацию о студии кинопроизводства, включая тип студии,
название, подтип и связанные с ней фильмы. Используется для хранения
и обработки данных о студиях, полученных от API Kinopoisk.dev.

**С версии:** 1.0.0

**Версия:** 1.0.0

**См. также:**

* \`\\KinopoiskDev\\Enums\\StudioType\`: Для типов студий
* \`\\KinopoiskDev\\Models\\MovieFromStudio\`: Для фильмов, связанных со студией
* \`\\KinopoiskDev\\Models\\BaseModel\`: Базовый интерфейс для всех моделей

## \`__construct()\` [#__construct]

**Описание:** Конструктор для создания объекта студии
Создает новый экземпляр класса Studio с указанными параметрами.
Только идентификатор, дата обновления и дата создания являются обязательными,
остальные параметры могут быть null при отсутствии соответствующей информации.

**Параметры:**

* \`$id\` (string): Уникальный идентификатор студии
* \`$subType\` (string|null): Подтип студии или null если не определен
* \`$title\` (string|null): Название студии или null если не определено
* \`$type\` (StudioType|null): Тип студии или null если не определен
* \`$movies\` (\\KinopoiskDev\\Models\\MovieFromStudio\\[]): Массив фильмов, связанных со студией
* \`$updateAt\` (string): Дата последнего обновления в формате ISO 8601
* \`$createdAt\` (string): Дата создания записи в формате ISO 8601

**См. также:**

* \`Studio::fromArray\`: () Для создания объекта из массива данных API
* \`Studio::toArray\`: () Для преобразования объекта в массив
* \`\\KinopoiskDev\\Enums\\StudioType\`: Для возможных типов студий

## \`fromArray()\` [#fromarray]

**Описание:** Создает объект Studio из массива данных API
Фабричный метод для создания экземпляра класса Studio из массива данных,
полученных от API Kinopoisk.dev. Метод использует значения по умолчанию
для опциональных параметров и безопасно обрабатывает отсутствующие ключи.

* id: string - уникальный идентификатор студии (обязательный)
* subType: string|null - подтип студии (опциональный)
* title: string|null - название студии (опциональный)
* type: StudioType|null - тип студии (опциональный)
* movies: MovieFromStudio\\[] - массив связанных фильмов (опциональный)
* updateAt: string - дата последнего обновления (обязательный)
* createdAt: string - дата создания (обязательный)

**Параметры:**

* \`$data\` (array): Массив данных от API, содержащий ключи:

**Возвращает:** \`static\` Новый экземпляр Studio с данными из массива

**Исключения:**

* \`\\KinopoiskDev\\Exceptions\\KinopoiskDevException\`:

**См. также:**

* \`Studio::toArray\`: () Для обратного преобразования в массив
* \`\\KinopoiskDev\\Models\\BaseModel::fromArray\`: () Для интерфейса BaseModel
* \`\\KinopoiskDev\\Enums\\StudioType\`: Для преобразования типа студии

## \`toArray()\` [#toarray]

**Описание:** Преобразует объект Studio в массив данных
Метод для преобразования экземпляра класса Studio в ассоциативный массив
данных. Используется для сериализации объекта в формат, совместимый с API,
или для передачи данных в другие части системы.

* id: string - уникальный идентификатор студии
* subType: string|null - подтип студии
* title: string|null - название студии
* type: StudioType|null - тип студии
* movies: array - массив связанных фильмов
* updateAt: string - дата последнего обновления
* createdAt: string - дата создания

**Параметры:**

* \`$includeNulls\` (bool): Включать ли null значения в результат (по умолчанию true)

**Возвращает:** \`array\` Ассоциативный массив с данными студии, содержащий ключи:

**См. также:**

* \`Studio::fromArray\`: () Для создания объекта из массива
* \`\\KinopoiskDev\\Models\\BaseModel::toArray\`: () Для интерфейса BaseModel

## \`validate()\` [#validate]

**Описание:** Валидирует данные студии

**Возвращает:** \`bool\`
`,o={contents:[{heading:void 0,content:`**Описание:** Класс для представления студии кинопроизводства
Представляет информацию о студии кинопроизводства, включая тип студии,
название, подтип и связанные с ней фильмы. Используется для хранения
и обработки данных о студиях, полученных от API Kinopoisk.dev.`},{heading:void 0,content:`**С версии:** 1.0.0`},{heading:void 0,content:`**Версия:** 1.0.0`},{heading:void 0,content:`**См. также:**`},{heading:void 0,content:"`\\KinopoiskDev\\Enums\\StudioType`: Для типов студий"},{heading:void 0,content:"`\\KinopoiskDev\\Models\\MovieFromStudio`: Для фильмов, связанных со студией"},{heading:void 0,content:"`\\KinopoiskDev\\Models\\BaseModel`: Базовый интерфейс для всех моделей"},{heading:`__construct`,content:`**Описание:** Конструктор для создания объекта студии
Создает новый экземпляр класса Studio с указанными параметрами.
Только идентификатор, дата обновления и дата создания являются обязательными,
остальные параметры могут быть null при отсутствии соответствующей информации.`},{heading:`__construct`,content:`**Параметры:**`},{heading:`__construct`,content:"`$id` (string): Уникальный идентификатор студии"},{heading:`__construct`,content:"`$subType` (string|null): Подтип студии или null если не определен"},{heading:`__construct`,content:"`$title` (string|null): Название студии или null если не определено"},{heading:`__construct`,content:"`$type` (StudioType|null): Тип студии или null если не определен"},{heading:`__construct`,content:"`$movies` (\\KinopoiskDev\\Models\\MovieFromStudio\\[]): Массив фильмов, связанных со студией"},{heading:`__construct`,content:"`$updateAt` (string): Дата последнего обновления в формате ISO 8601"},{heading:`__construct`,content:"`$createdAt` (string): Дата создания записи в формате ISO 8601"},{heading:`__construct`,content:`**См. также:**`},{heading:`__construct`,content:"`Studio::fromArray`: () Для создания объекта из массива данных API"},{heading:`__construct`,content:"`Studio::toArray`: () Для преобразования объекта в массив"},{heading:`__construct`,content:"`\\KinopoiskDev\\Enums\\StudioType`: Для возможных типов студий"},{heading:`fromarray`,content:`**Описание:** Создает объект Studio из массива данных API
Фабричный метод для создания экземпляра класса Studio из массива данных,
полученных от API Kinopoisk.dev. Метод использует значения по умолчанию
для опциональных параметров и безопасно обрабатывает отсутствующие ключи.`},{heading:`fromarray`,content:`id: string - уникальный идентификатор студии (обязательный)`},{heading:`fromarray`,content:`subType: string|null - подтип студии (опциональный)`},{heading:`fromarray`,content:`title: string|null - название студии (опциональный)`},{heading:`fromarray`,content:`type: StudioType|null - тип студии (опциональный)`},{heading:`fromarray`,content:`movies: MovieFromStudio\\[] - массив связанных фильмов (опциональный)`},{heading:`fromarray`,content:`updateAt: string - дата последнего обновления (обязательный)`},{heading:`fromarray`,content:`createdAt: string - дата создания (обязательный)`},{heading:`fromarray`,content:`**Параметры:**`},{heading:`fromarray`,content:"`$data` (array): Массив данных от API, содержащий ключи:"},{heading:`fromarray`,content:"**Возвращает:** `static` Новый экземпляр Studio с данными из массива"},{heading:`fromarray`,content:`**Исключения:**`},{heading:`fromarray`,content:"`\\KinopoiskDev\\Exceptions\\KinopoiskDevException`:"},{heading:`fromarray`,content:`**См. также:**`},{heading:`fromarray`,content:"`Studio::toArray`: () Для обратного преобразования в массив"},{heading:`fromarray`,content:"`\\KinopoiskDev\\Models\\BaseModel::fromArray`: () Для интерфейса BaseModel"},{heading:`fromarray`,content:"`\\KinopoiskDev\\Enums\\StudioType`: Для преобразования типа студии"},{heading:`toarray`,content:`**Описание:** Преобразует объект Studio в массив данных
Метод для преобразования экземпляра класса Studio в ассоциативный массив
данных. Используется для сериализации объекта в формат, совместимый с API,
или для передачи данных в другие части системы.`},{heading:`toarray`,content:`id: string - уникальный идентификатор студии`},{heading:`toarray`,content:`subType: string|null - подтип студии`},{heading:`toarray`,content:`title: string|null - название студии`},{heading:`toarray`,content:`type: StudioType|null - тип студии`},{heading:`toarray`,content:`movies: array - массив связанных фильмов`},{heading:`toarray`,content:`updateAt: string - дата последнего обновления`},{heading:`toarray`,content:`createdAt: string - дата создания`},{heading:`toarray`,content:`**Параметры:**`},{heading:`toarray`,content:"`$includeNulls` (bool): Включать ли null значения в результат (по умолчанию true)"},{heading:`toarray`,content:"**Возвращает:** `array` Ассоциативный массив с данными студии, содержащий ключи:"},{heading:`toarray`,content:`**См. также:**`},{heading:`toarray`,content:"`Studio::fromArray`: () Для создания объекта из массива"},{heading:`toarray`,content:"`\\KinopoiskDev\\Models\\BaseModel::toArray`: () Для интерфейса BaseModel"},{heading:`validate`,content:`**Описание:** Валидирует данные студии`},{heading:`validate`,content:"**Возвращает:** `bool`"}],headings:[{id:`__construct`,content:"`__construct()`"},{id:`fromarray`,content:"`fromArray()`"},{id:`toarray`,content:"`toArray()`"},{id:`validate`,content:"`validate()`"}]},s=[{depth:2,url:`#__construct`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`__construct()`})})},{depth:2,url:`#fromarray`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`fromArray()`})})},{depth:2,url:`#toarray`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`toArray()`})})},{depth:2,url:`#validate`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`validate()`})})}];function c(e){let t={code:`code`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Класс для представления студии кинопроизводства
Представляет информацию о студии кинопроизводства, включая тип студии,
название, подтип и связанные с ней фильмы. Используется для хранения
и обработки данных о студиях, полученных от API Kinopoisk.dev.`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 1.0.0`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Версия:`}),` 1.0.0`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`См. также:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`\\KinopoiskDev\\Enums\\StudioType`}),`: Для типов студий`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`\\KinopoiskDev\\Models\\MovieFromStudio`}),`: Для фильмов, связанных со студией`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`\\KinopoiskDev\\Models\\BaseModel`}),`: Базовый интерфейс для всех моделей`]}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`__construct`,children:(0,n.jsx)(t.code,{children:`__construct()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Конструктор для создания объекта студии
Создает новый экземпляр класса Studio с указанными параметрами.
Только идентификатор, дата обновления и дата создания являются обязательными,
остальные параметры могут быть null при отсутствии соответствующей информации.`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$id`}),` (string): Уникальный идентификатор студии`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$subType`}),` (string|null): Подтип студии или null если не определен`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$title`}),` (string|null): Название студии или null если не определено`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$type`}),` (StudioType|null): Тип студии или null если не определен`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$movies`}),` (\\KinopoiskDev\\Models\\MovieFromStudio[]): Массив фильмов, связанных со студией`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$updateAt`}),` (string): Дата последнего обновления в формате ISO 8601`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$createdAt`}),` (string): Дата создания записи в формате ISO 8601`]}),`
`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`См. также:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`Studio::fromArray`}),`: () Для создания объекта из массива данных API`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`Studio::toArray`}),`: () Для преобразования объекта в массив`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`\\KinopoiskDev\\Enums\\StudioType`}),`: Для возможных типов студий`]}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`fromarray`,children:(0,n.jsx)(t.code,{children:`fromArray()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Создает объект Studio из массива данных API
Фабричный метод для создания экземпляра класса Studio из массива данных,
полученных от API Kinopoisk.dev. Метод использует значения по умолчанию
для опциональных параметров и безопасно обрабатывает отсутствующие ключи.`]}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsx)(t.li,{children:`id: string - уникальный идентификатор студии (обязательный)`}),`
`,(0,n.jsx)(t.li,{children:`subType: string|null - подтип студии (опциональный)`}),`
`,(0,n.jsx)(t.li,{children:`title: string|null - название студии (опциональный)`}),`
`,(0,n.jsx)(t.li,{children:`type: StudioType|null - тип студии (опциональный)`}),`
`,(0,n.jsx)(t.li,{children:`movies: MovieFromStudio[] - массив связанных фильмов (опциональный)`}),`
`,(0,n.jsx)(t.li,{children:`updateAt: string - дата последнего обновления (обязательный)`}),`
`,(0,n.jsx)(t.li,{children:`createdAt: string - дата создания (обязательный)`}),`
`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$data`}),` (array): Массив данных от API, содержащий ключи:`]}),`
`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`static`}),` Новый экземпляр Studio с данными из массива`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Исключения:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`\\KinopoiskDev\\Exceptions\\KinopoiskDevException`}),`:`]}),`
`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`См. также:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`Studio::toArray`}),`: () Для обратного преобразования в массив`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`\\KinopoiskDev\\Models\\BaseModel::fromArray`}),`: () Для интерфейса BaseModel`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`\\KinopoiskDev\\Enums\\StudioType`}),`: Для преобразования типа студии`]}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`toarray`,children:(0,n.jsx)(t.code,{children:`toArray()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Преобразует объект Studio в массив данных
Метод для преобразования экземпляра класса Studio в ассоциативный массив
данных. Используется для сериализации объекта в формат, совместимый с API,
или для передачи данных в другие части системы.`]}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsx)(t.li,{children:`id: string - уникальный идентификатор студии`}),`
`,(0,n.jsx)(t.li,{children:`subType: string|null - подтип студии`}),`
`,(0,n.jsx)(t.li,{children:`title: string|null - название студии`}),`
`,(0,n.jsx)(t.li,{children:`type: StudioType|null - тип студии`}),`
`,(0,n.jsx)(t.li,{children:`movies: array - массив связанных фильмов`}),`
`,(0,n.jsx)(t.li,{children:`updateAt: string - дата последнего обновления`}),`
`,(0,n.jsx)(t.li,{children:`createdAt: string - дата создания`}),`
`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$includeNulls`}),` (bool): Включать ли null значения в результат (по умолчанию true)`]}),`
`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`array`}),` Ассоциативный массив с данными студии, содержащий ключи:`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`См. также:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`Studio::fromArray`}),`: () Для создания объекта из массива`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`\\KinopoiskDev\\Models\\BaseModel::toArray`}),`: () Для интерфейса BaseModel`]}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`validate`,children:(0,n.jsx)(t.code,{children:`validate()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Валидирует данные студии`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`bool`})]})]})}function l(e={}){let{wrapper:t}=e.components||{};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}export{a as _markdown,l as default,r as frontmatter,i as lastModified,o as structuredData,s as toc};