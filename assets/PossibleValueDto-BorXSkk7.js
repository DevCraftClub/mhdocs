import{r as e}from"./rolldown-runtime-QTnfLwEv.js";import{t}from"./jsx-runtime-By8HlURe.js";var n=e(t()),r={title:`PossibleValueDto`},i=new Date(1786951824e3),a=`

**Описание:** Класс для представления возможного значения поля
Представляет информацию о возможном значении для определенного поля API,
включая само значение и вспомогательный slug. Используется для получения
списка доступных значений для фильтрации по конкретным полям.

**С версии:** 1.0.0

**Версия:** 1.0.0

**См. также:**

* \`\\KinopoiskDev\\Models\\ItemName\`: Для простых названий элементов

## \`__construct()\` [#__construct]

**Описание:** Конструктор для создания объекта возможного значения
Создает новый экземпляр класса PossibleValueDto с указанными параметрами.
Оба параметра являются опциональными и могут быть null при отсутствии
соответствующей информации в источнике данных.

**Параметры:**

* \`$name\` (string|null): Значение по которому нужно делать запрос в базу данных
* \`$slug\` (string|null): Вспомогательное значение для идентификации

## \`__toString()\` [#__tostring]

**Описание:** Возвращает строковое представление возможного значения
Формирует читаемое представление возможного значения, предпочитая
название перед slug-ом. Если оба значения отсутствуют, возвращает
сообщение о пустом значении.

**Возвращает:** \`string\` Строковое представление возможного значения

## \`fromArray()\` [#fromarray]

**Описание:** Создает объект PossibleValueDto из массива данных API
Фабричный метод для создания экземпляра класса PossibleValueDto из массива данных,
полученных от API Kinopoisk.dev. Безопасно обрабатывает отсутствующие
значения, устанавливая их в null.

* name: string|null - значение для запроса в базу данных
* slug: string|null - вспомогательное значение

**Возвращает:** \`static\` Новый экземпляр класса PossibleValueDto с данными из массива

## \`toArray()\` [#toarray]

**Описание:** Преобразует объект в массив данных
Конвертирует текущий экземпляр класса PossibleValueDto в массив,
совместимый с форматом API Kinopoisk.dev. Используется для сериализации
данных при отправке запросов к API или для экспорта данных.

* name: string|null - значение для запроса
* slug: string|null - вспомогательное значение

**Возвращает:** \`array\` Массив с данными о возможном значении, содержащий ключи:
`,o={contents:[{heading:void 0,content:`**Описание:** Класс для представления возможного значения поля
Представляет информацию о возможном значении для определенного поля API,
включая само значение и вспомогательный slug. Используется для получения
списка доступных значений для фильтрации по конкретным полям.`},{heading:void 0,content:`**С версии:** 1.0.0`},{heading:void 0,content:`**Версия:** 1.0.0`},{heading:void 0,content:`**См. также:**`},{heading:void 0,content:"`\\KinopoiskDev\\Models\\ItemName`: Для простых названий элементов"},{heading:`__construct`,content:`**Описание:** Конструктор для создания объекта возможного значения
Создает новый экземпляр класса PossibleValueDto с указанными параметрами.
Оба параметра являются опциональными и могут быть null при отсутствии
соответствующей информации в источнике данных.`},{heading:`__construct`,content:`**Параметры:**`},{heading:`__construct`,content:"`$name` (string|null): Значение по которому нужно делать запрос в базу данных"},{heading:`__construct`,content:"`$slug` (string|null): Вспомогательное значение для идентификации"},{heading:`__tostring`,content:`**Описание:** Возвращает строковое представление возможного значения
Формирует читаемое представление возможного значения, предпочитая
название перед slug-ом. Если оба значения отсутствуют, возвращает
сообщение о пустом значении.`},{heading:`__tostring`,content:"**Возвращает:** `string` Строковое представление возможного значения"},{heading:`fromarray`,content:`**Описание:** Создает объект PossibleValueDto из массива данных API
Фабричный метод для создания экземпляра класса PossibleValueDto из массива данных,
полученных от API Kinopoisk.dev. Безопасно обрабатывает отсутствующие
значения, устанавливая их в null.`},{heading:`fromarray`,content:`name: string|null - значение для запроса в базу данных`},{heading:`fromarray`,content:`slug: string|null - вспомогательное значение`},{heading:`fromarray`,content:"**Возвращает:** `static` Новый экземпляр класса PossibleValueDto с данными из массива"},{heading:`toarray`,content:`**Описание:** Преобразует объект в массив данных
Конвертирует текущий экземпляр класса PossibleValueDto в массив,
совместимый с форматом API Kinopoisk.dev. Используется для сериализации
данных при отправке запросов к API или для экспорта данных.`},{heading:`toarray`,content:`name: string|null - значение для запроса`},{heading:`toarray`,content:`slug: string|null - вспомогательное значение`},{heading:`toarray`,content:"**Возвращает:** `array` Массив с данными о возможном значении, содержащий ключи:"}],headings:[{id:`__construct`,content:"`__construct()`"},{id:`__tostring`,content:"`__toString()`"},{id:`fromarray`,content:"`fromArray()`"},{id:`toarray`,content:"`toArray()`"}]},s=[{depth:2,url:`#__construct`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`__construct()`})})},{depth:2,url:`#__tostring`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`__toString()`})})},{depth:2,url:`#fromarray`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`fromArray()`})})},{depth:2,url:`#toarray`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`toArray()`})})}];function c(e){let t={code:`code`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Класс для представления возможного значения поля
Представляет информацию о возможном значении для определенного поля API,
включая само значение и вспомогательный slug. Используется для получения
списка доступных значений для фильтрации по конкретным полям.`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 1.0.0`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Версия:`}),` 1.0.0`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`См. также:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`\\KinopoiskDev\\Models\\ItemName`}),`: Для простых названий элементов`]}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`__construct`,children:(0,n.jsx)(t.code,{children:`__construct()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Конструктор для создания объекта возможного значения
Создает новый экземпляр класса PossibleValueDto с указанными параметрами.
Оба параметра являются опциональными и могут быть null при отсутствии
соответствующей информации в источнике данных.`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$name`}),` (string|null): Значение по которому нужно делать запрос в базу данных`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$slug`}),` (string|null): Вспомогательное значение для идентификации`]}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`__tostring`,children:(0,n.jsx)(t.code,{children:`__toString()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Возвращает строковое представление возможного значения
Формирует читаемое представление возможного значения, предпочитая
название перед slug-ом. Если оба значения отсутствуют, возвращает
сообщение о пустом значении.`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`string`}),` Строковое представление возможного значения`]}),`
`,(0,n.jsx)(t.h2,{id:`fromarray`,children:(0,n.jsx)(t.code,{children:`fromArray()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Создает объект PossibleValueDto из массива данных API
Фабричный метод для создания экземпляра класса PossibleValueDto из массива данных,
полученных от API Kinopoisk.dev. Безопасно обрабатывает отсутствующие
значения, устанавливая их в null.`]}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsx)(t.li,{children:`name: string|null - значение для запроса в базу данных`}),`
`,(0,n.jsx)(t.li,{children:`slug: string|null - вспомогательное значение`}),`
`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`static`}),` Новый экземпляр класса PossibleValueDto с данными из массива`]}),`
`,(0,n.jsx)(t.h2,{id:`toarray`,children:(0,n.jsx)(t.code,{children:`toArray()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Преобразует объект в массив данных
Конвертирует текущий экземпляр класса PossibleValueDto в массив,
совместимый с форматом API Kinopoisk.dev. Используется для сериализации
данных при отправке запросов к API или для экспорта данных.`]}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsx)(t.li,{children:`name: string|null - значение для запроса`}),`
`,(0,n.jsx)(t.li,{children:`slug: string|null - вспомогательное значение`}),`
`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`array`}),` Массив с данными о возможном значении, содержащий ключи:`]})]})}function l(e={}){let{wrapper:t}=e.components||{};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}export{a as _markdown,l as default,r as frontmatter,i as lastModified,o as structuredData,s as toc};