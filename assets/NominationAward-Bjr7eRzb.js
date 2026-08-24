import{r as e}from"./rolldown-runtime-QTnfLwEv.js";import{t}from"./jsx-runtime-By8HlURe.js";var n=e(t()),r={title:`NominationAward`},i=new Date(1787223655e3),a=`

**Описание:** Класс для представления награды в номинации
Представляет информацию о конкретной награде в рамках номинации,
включая название награды и год ее вручения. Используется как часть
более крупной структуры номинаций для фильмов и персон.

**С версии:** 1.0.0

**Версия:** 1.0.0

**См. также:**

* \`\\KinopoiskDev\\Models\\Nomination\`: Для полной информации о номинации
* \`\\KinopoiskDev\\Models\\MovieAward\`: Для наград фильмов
* \`\\KinopoiskDev\\Models\\PersonAward\`: Для наград персон

## \`__construct()\` [#__construct]

**Описание:** Конструктор для создания объекта награды номинации
Создает новый экземпляр класса NominationAward с указанными параметрами.
Оба параметра являются опциональными и могут быть null при отсутствии
соответствующей информации в источнике данных.

**Параметры:**

* \`$title\` (string|null): Название награды (например, "Оскар", "Золотой глобус")
* \`$year\` (int|null): Год вручения награды

## \`__toString()\` [#__tostring]

**Описание:** Возвращает строковое представление награды
Формирует читаемое представление награды, включающее название
и год вручения, если они доступны.

**Возвращает:** \`string\` Строковое представление награды

## \`fromArray()\` [#fromarray]

**Описание:** Создает объект NominationAward из массива данных API
Фабричный метод для создания экземпляра класса NominationAward из массива данных,
полученных от API Kinopoisk.dev. Безопасно обрабатывает отсутствующие
значения, устанавливая их в null.

* title: string|null - название награды
* year: int|null - год вручения награды

**Параметры:**

* \`$data\` (array): Массив данных о награде от API, содержащий ключи:

**Возвращает:** \`\\KinopoiskDev\\Models\\NominationAward\` Новый экземпляр класса NominationAward с данными из массива

## \`toArray()\` [#toarray]

**Описание:** Преобразует объект в массив данных
Конвертирует текущий экземпляр класса NominationAward в массив,
совместимый с форматом API Kinopoisk.dev. Используется для сериализации
данных при отправке запросов к API или для экспорта данных.

* title: string|null - название награды
* year: int|null - год вручения награды

**Возвращает:** \`array\` Массив с данными о награде, содержащий ключи:

## \`hasInfo()\` [#hasinfo]

**Описание:** Проверяет, установлена ли информация о награде

**Возвращает:** \`bool true\` если есть название или год, иначе false

## \`validate()\` [#validate]

**Описание:** Валидирует данные модели

**Возвращает:** \`bool True\` если данные валидны
`,o={contents:[{heading:void 0,content:`**Описание:** Класс для представления награды в номинации
Представляет информацию о конкретной награде в рамках номинации,
включая название награды и год ее вручения. Используется как часть
более крупной структуры номинаций для фильмов и персон.`},{heading:void 0,content:`**С версии:** 1.0.0`},{heading:void 0,content:`**Версия:** 1.0.0`},{heading:void 0,content:`**См. также:**`},{heading:void 0,content:"`\\KinopoiskDev\\Models\\Nomination`: Для полной информации о номинации"},{heading:void 0,content:"`\\KinopoiskDev\\Models\\MovieAward`: Для наград фильмов"},{heading:void 0,content:"`\\KinopoiskDev\\Models\\PersonAward`: Для наград персон"},{heading:`__construct`,content:`**Описание:** Конструктор для создания объекта награды номинации
Создает новый экземпляр класса NominationAward с указанными параметрами.
Оба параметра являются опциональными и могут быть null при отсутствии
соответствующей информации в источнике данных.`},{heading:`__construct`,content:`**Параметры:**`},{heading:`__construct`,content:'`$title` (string|null): Название награды (например, "Оскар", "Золотой глобус")'},{heading:`__construct`,content:"`$year` (int|null): Год вручения награды"},{heading:`__tostring`,content:`**Описание:** Возвращает строковое представление награды
Формирует читаемое представление награды, включающее название
и год вручения, если они доступны.`},{heading:`__tostring`,content:"**Возвращает:** `string` Строковое представление награды"},{heading:`fromarray`,content:`**Описание:** Создает объект NominationAward из массива данных API
Фабричный метод для создания экземпляра класса NominationAward из массива данных,
полученных от API Kinopoisk.dev. Безопасно обрабатывает отсутствующие
значения, устанавливая их в null.`},{heading:`fromarray`,content:`title: string|null - название награды`},{heading:`fromarray`,content:`year: int|null - год вручения награды`},{heading:`fromarray`,content:`**Параметры:**`},{heading:`fromarray`,content:"`$data` (array): Массив данных о награде от API, содержащий ключи:"},{heading:`fromarray`,content:"**Возвращает:** `\\KinopoiskDev\\Models\\NominationAward` Новый экземпляр класса NominationAward с данными из массива"},{heading:`toarray`,content:`**Описание:** Преобразует объект в массив данных
Конвертирует текущий экземпляр класса NominationAward в массив,
совместимый с форматом API Kinopoisk.dev. Используется для сериализации
данных при отправке запросов к API или для экспорта данных.`},{heading:`toarray`,content:`title: string|null - название награды`},{heading:`toarray`,content:`year: int|null - год вручения награды`},{heading:`toarray`,content:"**Возвращает:** `array` Массив с данными о награде, содержащий ключи:"},{heading:`hasinfo`,content:`**Описание:** Проверяет, установлена ли информация о награде`},{heading:`hasinfo`,content:"**Возвращает:** `bool true` если есть название или год, иначе false"},{heading:`validate`,content:`**Описание:** Валидирует данные модели`},{heading:`validate`,content:"**Возвращает:** `bool True` если данные валидны"}],headings:[{id:`__construct`,content:"`__construct()`"},{id:`__tostring`,content:"`__toString()`"},{id:`fromarray`,content:"`fromArray()`"},{id:`toarray`,content:"`toArray()`"},{id:`hasinfo`,content:"`hasInfo()`"},{id:`validate`,content:"`validate()`"}]},s=[{depth:2,url:`#__construct`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`__construct()`})})},{depth:2,url:`#__tostring`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`__toString()`})})},{depth:2,url:`#fromarray`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`fromArray()`})})},{depth:2,url:`#toarray`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`toArray()`})})},{depth:2,url:`#hasinfo`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`hasInfo()`})})},{depth:2,url:`#validate`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`validate()`})})}];function c(e){let t={code:`code`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Класс для представления награды в номинации
Представляет информацию о конкретной награде в рамках номинации,
включая название награды и год ее вручения. Используется как часть
более крупной структуры номинаций для фильмов и персон.`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 1.0.0`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Версия:`}),` 1.0.0`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`См. также:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`\\KinopoiskDev\\Models\\Nomination`}),`: Для полной информации о номинации`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`\\KinopoiskDev\\Models\\MovieAward`}),`: Для наград фильмов`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`\\KinopoiskDev\\Models\\PersonAward`}),`: Для наград персон`]}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`__construct`,children:(0,n.jsx)(t.code,{children:`__construct()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Конструктор для создания объекта награды номинации
Создает новый экземпляр класса NominationAward с указанными параметрами.
Оба параметра являются опциональными и могут быть null при отсутствии
соответствующей информации в источнике данных.`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$title`}),` (string|null): Название награды (например, "Оскар", "Золотой глобус")`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$year`}),` (int|null): Год вручения награды`]}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`__tostring`,children:(0,n.jsx)(t.code,{children:`__toString()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Возвращает строковое представление награды
Формирует читаемое представление награды, включающее название
и год вручения, если они доступны.`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`string`}),` Строковое представление награды`]}),`
`,(0,n.jsx)(t.h2,{id:`fromarray`,children:(0,n.jsx)(t.code,{children:`fromArray()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Создает объект NominationAward из массива данных API
Фабричный метод для создания экземпляра класса NominationAward из массива данных,
полученных от API Kinopoisk.dev. Безопасно обрабатывает отсутствующие
значения, устанавливая их в null.`]}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsx)(t.li,{children:`title: string|null - название награды`}),`
`,(0,n.jsx)(t.li,{children:`year: int|null - год вручения награды`}),`
`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$data`}),` (array): Массив данных о награде от API, содержащий ключи:`]}),`
`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`\\KinopoiskDev\\Models\\NominationAward`}),` Новый экземпляр класса NominationAward с данными из массива`]}),`
`,(0,n.jsx)(t.h2,{id:`toarray`,children:(0,n.jsx)(t.code,{children:`toArray()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Преобразует объект в массив данных
Конвертирует текущий экземпляр класса NominationAward в массив,
совместимый с форматом API Kinopoisk.dev. Используется для сериализации
данных при отправке запросов к API или для экспорта данных.`]}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsx)(t.li,{children:`title: string|null - название награды`}),`
`,(0,n.jsx)(t.li,{children:`year: int|null - год вручения награды`}),`
`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`array`}),` Массив с данными о награде, содержащий ключи:`]}),`
`,(0,n.jsx)(t.h2,{id:`hasinfo`,children:(0,n.jsx)(t.code,{children:`hasInfo()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Проверяет, установлена ли информация о награде`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`bool true`}),` если есть название или год, иначе false`]}),`
`,(0,n.jsx)(t.h2,{id:`validate`,children:(0,n.jsx)(t.code,{children:`validate()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Валидирует данные модели`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`bool True`}),` если данные валидны`]})]})}function l(e={}){let{wrapper:t}=e.components||{};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}export{a as _markdown,l as default,r as frontmatter,i as lastModified,o as structuredData,s as toc};