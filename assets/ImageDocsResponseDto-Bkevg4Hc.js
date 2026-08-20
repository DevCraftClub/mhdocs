import{r as e}from"./rolldown-runtime-QTnfLwEv.js";import{t}from"./jsx-runtime-By8HlURe.js";var n=e(t()),r={title:`ImageDocsResponseDto`},i=new Date(1787218238e3),a=`

**Описание:** DTO ответа для результатов поиска изображений с пагинацией
Класс предоставляет структурированный доступ к результатам поиска изображений
от API Kinopoisk.dev с поддержкой пагинации и специализированными методами
для фильтрации, сортировки и группировки изображений по различным критериям.

**С версии:** 1.0.0

**Версия:** 1.0.0

**См. также:**

* \`\\KinopoiskDev\\Models\\Image\`:
* \`\\KinopoiskDev\\Responses\\BaseDocsResponseDto\`:

## \`fromArray()\` [#fromarray]

**Описание:** Создает экземпляр DTO из массива данных API
Фабричный метод для создания объекта ImageDocsResponseDto из массива данных,
полученных от API Kinopoisk.dev. Метод использует DataManager для безопасного
преобразования каждого элемента массива docs в объект Image и инициализирует
все параметры пагинации значениями по умолчанию в случае их отсутствия.

* docs: array - массив данных изображений для преобразования
* total: int - общее количество изображений в результате
* limit: int - максимальное количество элементов на странице
* page: int - номер текущей страницы (начиная с 1)
* pages: int - общее количество страниц

**Возвращает:** \`static\` Новый экземпляр ImageDocsResponseDto с преобразованными данными

**Исключения:**

* \`\\KinopoiskDev\\Exceptions\\KinopoiskDevException\`: При ошибках валидации класса Image или отсутствии метода fromArray

**См. также:**

* \`\\KinopoiskDev\\Utils\\DataManager::parseObjectArray\`: () Используется для преобразования массива объектов
* \`\\KinopoiskDev\\Models\\Image::fromArray\`: () Метод создания объектов Image из массива данных

## \`toArray()\` [#toarray]

**Описание:** Преобразует объект в массив данных
Конвертирует весь объект DTO в массив, включая преобразование
всех объектов Image в массивы. Полезно для сериализации,
кэширования или передачи данных в другие системы.

* docs: array - массив данных изображений
* total: int - общее количество изображений
* limit: int - лимит на страницу
* page: int - номер текущей страницы
* pages: int - общее количество страниц

**Возвращает:** \`array\` Массив данных, содержащий:
`,o={contents:[{heading:void 0,content:`**Описание:** DTO ответа для результатов поиска изображений с пагинацией
Класс предоставляет структурированный доступ к результатам поиска изображений
от API Kinopoisk.dev с поддержкой пагинации и специализированными методами
для фильтрации, сортировки и группировки изображений по различным критериям.`},{heading:void 0,content:`**С версии:** 1.0.0`},{heading:void 0,content:`**Версия:** 1.0.0`},{heading:void 0,content:`**См. также:**`},{heading:void 0,content:"`\\KinopoiskDev\\Models\\Image`:"},{heading:void 0,content:"`\\KinopoiskDev\\Responses\\BaseDocsResponseDto`:"},{heading:`fromarray`,content:`**Описание:** Создает экземпляр DTO из массива данных API
Фабричный метод для создания объекта ImageDocsResponseDto из массива данных,
полученных от API Kinopoisk.dev. Метод использует DataManager для безопасного
преобразования каждого элемента массива docs в объект Image и инициализирует
все параметры пагинации значениями по умолчанию в случае их отсутствия.`},{heading:`fromarray`,content:`docs: array - массив данных изображений для преобразования`},{heading:`fromarray`,content:`total: int - общее количество изображений в результате`},{heading:`fromarray`,content:`limit: int - максимальное количество элементов на странице`},{heading:`fromarray`,content:`page: int - номер текущей страницы (начиная с 1)`},{heading:`fromarray`,content:`pages: int - общее количество страниц`},{heading:`fromarray`,content:"**Возвращает:** `static` Новый экземпляр ImageDocsResponseDto с преобразованными данными"},{heading:`fromarray`,content:`**Исключения:**`},{heading:`fromarray`,content:"`\\KinopoiskDev\\Exceptions\\KinopoiskDevException`: При ошибках валидации класса Image или отсутствии метода fromArray"},{heading:`fromarray`,content:`**См. также:**`},{heading:`fromarray`,content:"`\\KinopoiskDev\\Utils\\DataManager::parseObjectArray`: () Используется для преобразования массива объектов"},{heading:`fromarray`,content:"`\\KinopoiskDev\\Models\\Image::fromArray`: () Метод создания объектов Image из массива данных"},{heading:`toarray`,content:`**Описание:** Преобразует объект в массив данных
Конвертирует весь объект DTO в массив, включая преобразование
всех объектов Image в массивы. Полезно для сериализации,
кэширования или передачи данных в другие системы.`},{heading:`toarray`,content:`docs: array - массив данных изображений`},{heading:`toarray`,content:`total: int - общее количество изображений`},{heading:`toarray`,content:`limit: int - лимит на страницу`},{heading:`toarray`,content:`page: int - номер текущей страницы`},{heading:`toarray`,content:`pages: int - общее количество страниц`},{heading:`toarray`,content:"**Возвращает:** `array` Массив данных, содержащий:"}],headings:[{id:`fromarray`,content:"`fromArray()`"},{id:`toarray`,content:"`toArray()`"}]},s=[{depth:2,url:`#fromarray`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`fromArray()`})})},{depth:2,url:`#toarray`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`toArray()`})})}];function c(e){let t={code:`code`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` DTO ответа для результатов поиска изображений с пагинацией
Класс предоставляет структурированный доступ к результатам поиска изображений
от API Kinopoisk.dev с поддержкой пагинации и специализированными методами
для фильтрации, сортировки и группировки изображений по различным критериям.`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 1.0.0`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Версия:`}),` 1.0.0`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`См. также:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`\\KinopoiskDev\\Models\\Image`}),`:`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`\\KinopoiskDev\\Responses\\BaseDocsResponseDto`}),`:`]}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`fromarray`,children:(0,n.jsx)(t.code,{children:`fromArray()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Создает экземпляр DTO из массива данных API
Фабричный метод для создания объекта ImageDocsResponseDto из массива данных,
полученных от API Kinopoisk.dev. Метод использует DataManager для безопасного
преобразования каждого элемента массива docs в объект Image и инициализирует
все параметры пагинации значениями по умолчанию в случае их отсутствия.`]}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsx)(t.li,{children:`docs: array - массив данных изображений для преобразования`}),`
`,(0,n.jsx)(t.li,{children:`total: int - общее количество изображений в результате`}),`
`,(0,n.jsx)(t.li,{children:`limit: int - максимальное количество элементов на странице`}),`
`,(0,n.jsx)(t.li,{children:`page: int - номер текущей страницы (начиная с 1)`}),`
`,(0,n.jsx)(t.li,{children:`pages: int - общее количество страниц`}),`
`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`static`}),` Новый экземпляр ImageDocsResponseDto с преобразованными данными`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Исключения:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`\\KinopoiskDev\\Exceptions\\KinopoiskDevException`}),`: При ошибках валидации класса Image или отсутствии метода fromArray`]}),`
`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`См. также:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`\\KinopoiskDev\\Utils\\DataManager::parseObjectArray`}),`: () Используется для преобразования массива объектов`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`\\KinopoiskDev\\Models\\Image::fromArray`}),`: () Метод создания объектов Image из массива данных`]}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`toarray`,children:(0,n.jsx)(t.code,{children:`toArray()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Преобразует объект в массив данных
Конвертирует весь объект DTO в массив, включая преобразование
всех объектов Image в массивы. Полезно для сериализации,
кэширования или передачи данных в другие системы.`]}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsx)(t.li,{children:`docs: array - массив данных изображений`}),`
`,(0,n.jsx)(t.li,{children:`total: int - общее количество изображений`}),`
`,(0,n.jsx)(t.li,{children:`limit: int - лимит на страницу`}),`
`,(0,n.jsx)(t.li,{children:`page: int - номер текущей страницы`}),`
`,(0,n.jsx)(t.li,{children:`pages: int - общее количество страниц`}),`
`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`array`}),` Массив данных, содержащий:`]})]})}function l(e={}){let{wrapper:t}=e.components||{};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}export{a as _markdown,l as default,r as frontmatter,i as lastModified,o as structuredData,s as toc};