import{r as e}from"./rolldown-runtime-QTnfLwEv.js";import{t}from"./jsx-runtime-By8HlURe.js";var n=e(t()),r={title:`MovieAward`},i=new Date(1787213191e3),a=`

**Описание:** Класс для представления награды фильма
Представляет информацию о награде, полученной фильмом или сериалом,
включая номинацию, статус победы и временные метки.
Используется для отображения наградной истории произведения.

**С версии:** 1.0.0

**Версия:** 1.0.0

**См. также:**

* \`\\KinopoiskDev\\Models\\Nomination\`: Для информации о номинации
* \`\\KinopoiskDev\\Models\\Movie\`: Для основной модели фильма

## \`__construct()\` [#__construct]

**Описание:** Конструктор для создания объекта награды фильма
Создает новый экземпляр класса MovieAward с указанными параметрами.
Большинство параметров являются опциональными и могут быть null при отсутствии
соответствующей информации в источнике данных.

**Параметры:**

* \`$nomination\` (Nomination|null): Информация о номинации
* \`$winning\` (bool|null): Статус победы (true - победа, false - номинация)
* \`$updatedAt\` (string|null): Дата последнего обновления записи
* \`$createdAt\` (string|null): Дата создания записи
* \`$movieId\` (int|null): ID фильма (может отсутствовать в некоторых контекстах)

## \`__toString()\` [#__tostring]

**Описание:** Возвращает строковое представление награды
Формирует читаемое представление награды, включающее информацию
о номинации и статусе победы.

**Возвращает:** \`string\` Строковое представление награды

## \`hasInfo()\` [#hasinfo]

**Описание:** Проверяет, установлена ли информация о награде

**Возвращает:** \`bool true\` если есть информация о номинации или статусе победы, иначе false

## \`getWinningStatus()\` [#getwinningstatus]

**Описание:** Возвращает статус награды в текстовом виде

**Возвращает:** \`string\` Статус награды ("Победа", "Номинация", "Неизвестно")

## \`fromArray()\` [#fromarray]

**Описание:** Создает объект MovieAward из массива данных API
Фабричный метод для создания экземпляра класса MovieAward из массива данных,
полученных от API Kinopoisk.dev. Безопасно обрабатывает отсутствующие
значения и преобразует вложенные объекты в соответствующие классы.

* nomination: array|null - данные о номинации
* winning: bool|null - статус победы
* updatedAt: string|null - дата обновления
* createdAt: string|null - дата создания
* movieId: int|null - ID фильма

**Параметры:**

* \`$data\` (array): Массив данных о награде фильма от API, содержащий ключи:

**Возвращает:** \`\\KinopoiskDev\\Models\\MovieAward\` Новый экземпляр класса MovieAward с данными из массива

**Исключения:**

* \`\\KinopoiskDev\\Exceptions\\KinopoiskDevException\`:

## \`toArray()\` [#toarray]

**Описание:** Преобразует объект в массив данных
Конвертирует текущий экземпляр класса MovieAward в массив,
совместимый с форматом API Kinopoisk.dev. Используется для сериализации
данных при отправке запросов к API или для экспорта данных.

**Возвращает:** \`array\` Массив с данными о награде фильма

## \`isWinning()\` [#iswinning]

**Описание:** Проверяет, является ли награда победной

**Возвращает:** \`bool true\` если фильм победил в номинации, иначе false

## \`isNominationOnly()\` [#isnominationonly]

**Описание:** Проверяет, является ли запись только номинацией

**Возвращает:** \`bool true\` если фильм был только номинирован, иначе false

## \`validate()\` [#validate]

**Описание:** Валидирует данные модели

**Возвращает:** \`bool True\` если данные валидны
`,o={contents:[{heading:void 0,content:`**Описание:** Класс для представления награды фильма
Представляет информацию о награде, полученной фильмом или сериалом,
включая номинацию, статус победы и временные метки.
Используется для отображения наградной истории произведения.`},{heading:void 0,content:`**С версии:** 1.0.0`},{heading:void 0,content:`**Версия:** 1.0.0`},{heading:void 0,content:`**См. также:**`},{heading:void 0,content:"`\\KinopoiskDev\\Models\\Nomination`: Для информации о номинации"},{heading:void 0,content:"`\\KinopoiskDev\\Models\\Movie`: Для основной модели фильма"},{heading:`__construct`,content:`**Описание:** Конструктор для создания объекта награды фильма
Создает новый экземпляр класса MovieAward с указанными параметрами.
Большинство параметров являются опциональными и могут быть null при отсутствии
соответствующей информации в источнике данных.`},{heading:`__construct`,content:`**Параметры:**`},{heading:`__construct`,content:"`$nomination` (Nomination|null): Информация о номинации"},{heading:`__construct`,content:"`$winning` (bool|null): Статус победы (true - победа, false - номинация)"},{heading:`__construct`,content:"`$updatedAt` (string|null): Дата последнего обновления записи"},{heading:`__construct`,content:"`$createdAt` (string|null): Дата создания записи"},{heading:`__construct`,content:"`$movieId` (int|null): ID фильма (может отсутствовать в некоторых контекстах)"},{heading:`__tostring`,content:`**Описание:** Возвращает строковое представление награды
Формирует читаемое представление награды, включающее информацию
о номинации и статусе победы.`},{heading:`__tostring`,content:"**Возвращает:** `string` Строковое представление награды"},{heading:`hasinfo`,content:`**Описание:** Проверяет, установлена ли информация о награде`},{heading:`hasinfo`,content:"**Возвращает:** `bool true` если есть информация о номинации или статусе победы, иначе false"},{heading:`getwinningstatus`,content:`**Описание:** Возвращает статус награды в текстовом виде`},{heading:`getwinningstatus`,content:'**Возвращает:** `string` Статус награды ("Победа", "Номинация", "Неизвестно")'},{heading:`fromarray`,content:`**Описание:** Создает объект MovieAward из массива данных API
Фабричный метод для создания экземпляра класса MovieAward из массива данных,
полученных от API Kinopoisk.dev. Безопасно обрабатывает отсутствующие
значения и преобразует вложенные объекты в соответствующие классы.`},{heading:`fromarray`,content:`nomination: array|null - данные о номинации`},{heading:`fromarray`,content:`winning: bool|null - статус победы`},{heading:`fromarray`,content:`updatedAt: string|null - дата обновления`},{heading:`fromarray`,content:`createdAt: string|null - дата создания`},{heading:`fromarray`,content:`movieId: int|null - ID фильма`},{heading:`fromarray`,content:`**Параметры:**`},{heading:`fromarray`,content:"`$data` (array): Массив данных о награде фильма от API, содержащий ключи:"},{heading:`fromarray`,content:"**Возвращает:** `\\KinopoiskDev\\Models\\MovieAward` Новый экземпляр класса MovieAward с данными из массива"},{heading:`fromarray`,content:`**Исключения:**`},{heading:`fromarray`,content:"`\\KinopoiskDev\\Exceptions\\KinopoiskDevException`:"},{heading:`toarray`,content:`**Описание:** Преобразует объект в массив данных
Конвертирует текущий экземпляр класса MovieAward в массив,
совместимый с форматом API Kinopoisk.dev. Используется для сериализации
данных при отправке запросов к API или для экспорта данных.`},{heading:`toarray`,content:"**Возвращает:** `array` Массив с данными о награде фильма"},{heading:`iswinning`,content:`**Описание:** Проверяет, является ли награда победной`},{heading:`iswinning`,content:"**Возвращает:** `bool true` если фильм победил в номинации, иначе false"},{heading:`isnominationonly`,content:`**Описание:** Проверяет, является ли запись только номинацией`},{heading:`isnominationonly`,content:"**Возвращает:** `bool true` если фильм был только номинирован, иначе false"},{heading:`validate`,content:`**Описание:** Валидирует данные модели`},{heading:`validate`,content:"**Возвращает:** `bool True` если данные валидны"}],headings:[{id:`__construct`,content:"`__construct()`"},{id:`__tostring`,content:"`__toString()`"},{id:`hasinfo`,content:"`hasInfo()`"},{id:`getwinningstatus`,content:"`getWinningStatus()`"},{id:`fromarray`,content:"`fromArray()`"},{id:`toarray`,content:"`toArray()`"},{id:`iswinning`,content:"`isWinning()`"},{id:`isnominationonly`,content:"`isNominationOnly()`"},{id:`validate`,content:"`validate()`"}]},s=[{depth:2,url:`#__construct`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`__construct()`})})},{depth:2,url:`#__tostring`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`__toString()`})})},{depth:2,url:`#hasinfo`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`hasInfo()`})})},{depth:2,url:`#getwinningstatus`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`getWinningStatus()`})})},{depth:2,url:`#fromarray`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`fromArray()`})})},{depth:2,url:`#toarray`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`toArray()`})})},{depth:2,url:`#iswinning`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`isWinning()`})})},{depth:2,url:`#isnominationonly`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`isNominationOnly()`})})},{depth:2,url:`#validate`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`validate()`})})}];function c(e){let t={code:`code`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Класс для представления награды фильма
Представляет информацию о награде, полученной фильмом или сериалом,
включая номинацию, статус победы и временные метки.
Используется для отображения наградной истории произведения.`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 1.0.0`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Версия:`}),` 1.0.0`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`См. также:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`\\KinopoiskDev\\Models\\Nomination`}),`: Для информации о номинации`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`\\KinopoiskDev\\Models\\Movie`}),`: Для основной модели фильма`]}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`__construct`,children:(0,n.jsx)(t.code,{children:`__construct()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Конструктор для создания объекта награды фильма
Создает новый экземпляр класса MovieAward с указанными параметрами.
Большинство параметров являются опциональными и могут быть null при отсутствии
соответствующей информации в источнике данных.`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$nomination`}),` (Nomination|null): Информация о номинации`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$winning`}),` (bool|null): Статус победы (true - победа, false - номинация)`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$updatedAt`}),` (string|null): Дата последнего обновления записи`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$createdAt`}),` (string|null): Дата создания записи`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$movieId`}),` (int|null): ID фильма (может отсутствовать в некоторых контекстах)`]}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`__tostring`,children:(0,n.jsx)(t.code,{children:`__toString()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Возвращает строковое представление награды
Формирует читаемое представление награды, включающее информацию
о номинации и статусе победы.`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`string`}),` Строковое представление награды`]}),`
`,(0,n.jsx)(t.h2,{id:`hasinfo`,children:(0,n.jsx)(t.code,{children:`hasInfo()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Проверяет, установлена ли информация о награде`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`bool true`}),` если есть информация о номинации или статусе победы, иначе false`]}),`
`,(0,n.jsx)(t.h2,{id:`getwinningstatus`,children:(0,n.jsx)(t.code,{children:`getWinningStatus()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Возвращает статус награды в текстовом виде`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`string`}),` Статус награды ("Победа", "Номинация", "Неизвестно")`]}),`
`,(0,n.jsx)(t.h2,{id:`fromarray`,children:(0,n.jsx)(t.code,{children:`fromArray()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Создает объект MovieAward из массива данных API
Фабричный метод для создания экземпляра класса MovieAward из массива данных,
полученных от API Kinopoisk.dev. Безопасно обрабатывает отсутствующие
значения и преобразует вложенные объекты в соответствующие классы.`]}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsx)(t.li,{children:`nomination: array|null - данные о номинации`}),`
`,(0,n.jsx)(t.li,{children:`winning: bool|null - статус победы`}),`
`,(0,n.jsx)(t.li,{children:`updatedAt: string|null - дата обновления`}),`
`,(0,n.jsx)(t.li,{children:`createdAt: string|null - дата создания`}),`
`,(0,n.jsx)(t.li,{children:`movieId: int|null - ID фильма`}),`
`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$data`}),` (array): Массив данных о награде фильма от API, содержащий ключи:`]}),`
`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`\\KinopoiskDev\\Models\\MovieAward`}),` Новый экземпляр класса MovieAward с данными из массива`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Исключения:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`\\KinopoiskDev\\Exceptions\\KinopoiskDevException`}),`:`]}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`toarray`,children:(0,n.jsx)(t.code,{children:`toArray()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Преобразует объект в массив данных
Конвертирует текущий экземпляр класса MovieAward в массив,
совместимый с форматом API Kinopoisk.dev. Используется для сериализации
данных при отправке запросов к API или для экспорта данных.`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`array`}),` Массив с данными о награде фильма`]}),`
`,(0,n.jsx)(t.h2,{id:`iswinning`,children:(0,n.jsx)(t.code,{children:`isWinning()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Проверяет, является ли награда победной`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`bool true`}),` если фильм победил в номинации, иначе false`]}),`
`,(0,n.jsx)(t.h2,{id:`isnominationonly`,children:(0,n.jsx)(t.code,{children:`isNominationOnly()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Проверяет, является ли запись только номинацией`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`bool true`}),` если фильм был только номинирован, иначе false`]}),`
`,(0,n.jsx)(t.h2,{id:`validate`,children:(0,n.jsx)(t.code,{children:`validate()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Валидирует данные модели`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`bool True`}),` если данные валидны`]})]})}function l(e={}){let{wrapper:t}=e.components||{};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}export{a as _markdown,l as default,r as frontmatter,i as lastModified,o as structuredData,s as toc};