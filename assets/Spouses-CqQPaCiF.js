import{r as e}from"./rolldown-runtime-QTnfLwEv.js";import{t}from"./jsx-runtime-By8HlURe.js";var n=e(t()),r={title:`Spouses`},i=new Date(1785400635e3),a=`

**Описание:** Класс для представления супруга/супруги персоны
Представляет информацию о супруге или супруге персоны, включая персональные данные,
статус отношений, количество детей и причины развода. Используется для хранения
и обработки семейной информации персон из API Kinopoisk.dev.

**С версии:** 1.0.0

**Версия:** 1.0.0

**См. также:**

* \`\\KinopoiskDev\\Enums\\PersonSex\`: Для определения пола супруга
* \`\\KinopoiskDev\\Models\\Person\`: Для основной модели персоны

## \`__construct()\` [#__construct]

**Описание:** Конструктор для создания объекта супруга
Создает новый экземпляр класса Spouses с информацией о супруге персоны.
Все свойства являются для обеспечения неизменности данных.
Параметр divorced имеет значение по умолчанию false.

**Параметры:**

* \`$id\` (int): Уникальный идентификатор супруга в базе данных
* \`$name\` (string): Полное имя супруга
* \`$divorcedReason\` (string): Причина развода (пустая строка если развода не было)
* \`$sex\` (PersonSex): Пол супруга (мужской или женский)
* \`$children\` (int): Количество детей в браке
* \`$relation\` (string): Описание типа отношений или дополнительная информация
* \`$divorced\` (bool): Статус развода (true - в разводе, false - в браке, по умолчанию false)

**См. также:**

* \`Spouses::fromArray\`: () Для создания объекта из массива данных API
* \`Spouses::toArray\`: () Для преобразования объекта в массив

## \`fromArray()\` [#fromarray]

**Описание:** Создает объект Spouses из массива данных API
Фабричный метод для создания экземпляра класса Spouses из массива данных,
полученных от API Kinopoisk.dev. Безопасно обрабатывает все поля массива
и автоматически преобразует строковое значение пола в enum PersonSex
с помощью метода tryFrom().

* id: int - уникальный идентификатор супруга
* name: string - полное имя супруга
* divorced: bool - статус развода
* divorcedReason: string - причина развода
* sex: string - пол супруга ('male' или 'female')
* children: int - количество детей
* relation: string - тип отношений

**Возвращает:** \`static\` Новый экземпляр класса Spouses с данными из массива

**См. также:**

* \`Spouses::toArray\`: () Для обратного преобразования в массив
* \`PersonSex::tryFrom\`: () Для безопасного преобразования строки в enum

## \`toArray()\` [#toarray]

**Описание:** Преобразует объект в массив данных
Конвертирует текущий экземпляр класса Spouses в массив,
совместимый с форматом API Kinopoisk.dev. Используется для сериализации
данных при отправке запросов к API или для экспорта данных в JSON.
Enum PersonSex автоматически преобразуется в строковое значение.

* id: int - уникальный идентификатор супруга
* name: string - полное имя супруга
* divorced: bool - статус развода
* divorcedReason: string - причина развода
* sex: PersonSex - пол супруга (enum объект)
* children: int - количество детей
* relation: string - тип отношений

**Возвращает:** \`array\` Массив с данными о супруге, содержащий ключи:

**См. также:**

* \`Spouses::fromArray\`: () Для создания объекта из массива
* \`PersonSex::value\`: Для получения строкового значения enum

## \`validate()\` [#validate]

**Описание:** Валидирует данные модели

**Возвращает:** \`bool True\` если данные валидны
`,o={contents:[{heading:void 0,content:`**Описание:** Класс для представления супруга/супруги персоны
Представляет информацию о супруге или супруге персоны, включая персональные данные,
статус отношений, количество детей и причины развода. Используется для хранения
и обработки семейной информации персон из API Kinopoisk.dev.`},{heading:void 0,content:`**С версии:** 1.0.0`},{heading:void 0,content:`**Версия:** 1.0.0`},{heading:void 0,content:`**См. также:**`},{heading:void 0,content:"`\\KinopoiskDev\\Enums\\PersonSex`: Для определения пола супруга"},{heading:void 0,content:"`\\KinopoiskDev\\Models\\Person`: Для основной модели персоны"},{heading:`__construct`,content:`**Описание:** Конструктор для создания объекта супруга
Создает новый экземпляр класса Spouses с информацией о супруге персоны.
Все свойства являются для обеспечения неизменности данных.
Параметр divorced имеет значение по умолчанию false.`},{heading:`__construct`,content:`**Параметры:**`},{heading:`__construct`,content:"`$id` (int): Уникальный идентификатор супруга в базе данных"},{heading:`__construct`,content:"`$name` (string): Полное имя супруга"},{heading:`__construct`,content:"`$divorcedReason` (string): Причина развода (пустая строка если развода не было)"},{heading:`__construct`,content:"`$sex` (PersonSex): Пол супруга (мужской или женский)"},{heading:`__construct`,content:"`$children` (int): Количество детей в браке"},{heading:`__construct`,content:"`$relation` (string): Описание типа отношений или дополнительная информация"},{heading:`__construct`,content:"`$divorced` (bool): Статус развода (true - в разводе, false - в браке, по умолчанию false)"},{heading:`__construct`,content:`**См. также:**`},{heading:`__construct`,content:"`Spouses::fromArray`: () Для создания объекта из массива данных API"},{heading:`__construct`,content:"`Spouses::toArray`: () Для преобразования объекта в массив"},{heading:`fromarray`,content:`**Описание:** Создает объект Spouses из массива данных API
Фабричный метод для создания экземпляра класса Spouses из массива данных,
полученных от API Kinopoisk.dev. Безопасно обрабатывает все поля массива
и автоматически преобразует строковое значение пола в enum PersonSex
с помощью метода tryFrom().`},{heading:`fromarray`,content:`id: int - уникальный идентификатор супруга`},{heading:`fromarray`,content:`name: string - полное имя супруга`},{heading:`fromarray`,content:`divorced: bool - статус развода`},{heading:`fromarray`,content:`divorcedReason: string - причина развода`},{heading:`fromarray`,content:`sex: string - пол супруга ('male' или 'female')`},{heading:`fromarray`,content:`children: int - количество детей`},{heading:`fromarray`,content:`relation: string - тип отношений`},{heading:`fromarray`,content:"**Возвращает:** `static` Новый экземпляр класса Spouses с данными из массива"},{heading:`fromarray`,content:`**См. также:**`},{heading:`fromarray`,content:"`Spouses::toArray`: () Для обратного преобразования в массив"},{heading:`fromarray`,content:"`PersonSex::tryFrom`: () Для безопасного преобразования строки в enum"},{heading:`toarray`,content:`**Описание:** Преобразует объект в массив данных
Конвертирует текущий экземпляр класса Spouses в массив,
совместимый с форматом API Kinopoisk.dev. Используется для сериализации
данных при отправке запросов к API или для экспорта данных в JSON.
Enum PersonSex автоматически преобразуется в строковое значение.`},{heading:`toarray`,content:`id: int - уникальный идентификатор супруга`},{heading:`toarray`,content:`name: string - полное имя супруга`},{heading:`toarray`,content:`divorced: bool - статус развода`},{heading:`toarray`,content:`divorcedReason: string - причина развода`},{heading:`toarray`,content:`sex: PersonSex - пол супруга (enum объект)`},{heading:`toarray`,content:`children: int - количество детей`},{heading:`toarray`,content:`relation: string - тип отношений`},{heading:`toarray`,content:"**Возвращает:** `array` Массив с данными о супруге, содержащий ключи:"},{heading:`toarray`,content:`**См. также:**`},{heading:`toarray`,content:"`Spouses::fromArray`: () Для создания объекта из массива"},{heading:`toarray`,content:"`PersonSex::value`: Для получения строкового значения enum"},{heading:`validate`,content:`**Описание:** Валидирует данные модели`},{heading:`validate`,content:"**Возвращает:** `bool True` если данные валидны"}],headings:[{id:`__construct`,content:"`__construct()`"},{id:`fromarray`,content:"`fromArray()`"},{id:`toarray`,content:"`toArray()`"},{id:`validate`,content:"`validate()`"}]},s=[{depth:2,url:`#__construct`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`__construct()`})})},{depth:2,url:`#fromarray`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`fromArray()`})})},{depth:2,url:`#toarray`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`toArray()`})})},{depth:2,url:`#validate`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`validate()`})})}];function c(e){let t={code:`code`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Класс для представления супруга/супруги персоны
Представляет информацию о супруге или супруге персоны, включая персональные данные,
статус отношений, количество детей и причины развода. Используется для хранения
и обработки семейной информации персон из API Kinopoisk.dev.`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 1.0.0`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Версия:`}),` 1.0.0`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`См. также:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`\\KinopoiskDev\\Enums\\PersonSex`}),`: Для определения пола супруга`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`\\KinopoiskDev\\Models\\Person`}),`: Для основной модели персоны`]}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`__construct`,children:(0,n.jsx)(t.code,{children:`__construct()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Конструктор для создания объекта супруга
Создает новый экземпляр класса Spouses с информацией о супруге персоны.
Все свойства являются для обеспечения неизменности данных.
Параметр divorced имеет значение по умолчанию false.`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$id`}),` (int): Уникальный идентификатор супруга в базе данных`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$name`}),` (string): Полное имя супруга`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$divorcedReason`}),` (string): Причина развода (пустая строка если развода не было)`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$sex`}),` (PersonSex): Пол супруга (мужской или женский)`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$children`}),` (int): Количество детей в браке`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$relation`}),` (string): Описание типа отношений или дополнительная информация`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$divorced`}),` (bool): Статус развода (true - в разводе, false - в браке, по умолчанию false)`]}),`
`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`См. также:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`Spouses::fromArray`}),`: () Для создания объекта из массива данных API`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`Spouses::toArray`}),`: () Для преобразования объекта в массив`]}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`fromarray`,children:(0,n.jsx)(t.code,{children:`fromArray()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Создает объект Spouses из массива данных API
Фабричный метод для создания экземпляра класса Spouses из массива данных,
полученных от API Kinopoisk.dev. Безопасно обрабатывает все поля массива
и автоматически преобразует строковое значение пола в enum PersonSex
с помощью метода tryFrom().`]}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsx)(t.li,{children:`id: int - уникальный идентификатор супруга`}),`
`,(0,n.jsx)(t.li,{children:`name: string - полное имя супруга`}),`
`,(0,n.jsx)(t.li,{children:`divorced: bool - статус развода`}),`
`,(0,n.jsx)(t.li,{children:`divorcedReason: string - причина развода`}),`
`,(0,n.jsx)(t.li,{children:`sex: string - пол супруга ('male' или 'female')`}),`
`,(0,n.jsx)(t.li,{children:`children: int - количество детей`}),`
`,(0,n.jsx)(t.li,{children:`relation: string - тип отношений`}),`
`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`static`}),` Новый экземпляр класса Spouses с данными из массива`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`См. также:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`Spouses::toArray`}),`: () Для обратного преобразования в массив`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`PersonSex::tryFrom`}),`: () Для безопасного преобразования строки в enum`]}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`toarray`,children:(0,n.jsx)(t.code,{children:`toArray()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Преобразует объект в массив данных
Конвертирует текущий экземпляр класса Spouses в массив,
совместимый с форматом API Kinopoisk.dev. Используется для сериализации
данных при отправке запросов к API или для экспорта данных в JSON.
Enum PersonSex автоматически преобразуется в строковое значение.`]}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsx)(t.li,{children:`id: int - уникальный идентификатор супруга`}),`
`,(0,n.jsx)(t.li,{children:`name: string - полное имя супруга`}),`
`,(0,n.jsx)(t.li,{children:`divorced: bool - статус развода`}),`
`,(0,n.jsx)(t.li,{children:`divorcedReason: string - причина развода`}),`
`,(0,n.jsx)(t.li,{children:`sex: PersonSex - пол супруга (enum объект)`}),`
`,(0,n.jsx)(t.li,{children:`children: int - количество детей`}),`
`,(0,n.jsx)(t.li,{children:`relation: string - тип отношений`}),`
`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`array`}),` Массив с данными о супруге, содержащий ключи:`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`См. также:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`Spouses::fromArray`}),`: () Для создания объекта из массива`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`PersonSex::value`}),`: Для получения строкового значения enum`]}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`validate`,children:(0,n.jsx)(t.code,{children:`validate()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Валидирует данные модели`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`bool True`}),` если данные валидны`]})]})}function l(e={}){let{wrapper:t}=e.components||{};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}export{a as _markdown,l as default,r as frontmatter,i as lastModified,o as structuredData,s as toc};