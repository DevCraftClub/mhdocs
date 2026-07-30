import{r as e}from"./rolldown-runtime-QTnfLwEv.js";import{t}from"./jsx-runtime-By8HlURe.js";var n=e(t()),r={title:`ReviewDocsResponseDto`},i=new Date(1785400635e3),a=`

**Описание:** DTO ответа для результатов поиска рецензий с пагинацией
Класс предназначен для представления ответа API при поиске рецензий.
Наследуется от BaseDocsResponseDto и специализируется на работе с коллекцией
объектов Review. Обеспечивает типизированный доступ к данным рецензий
с поддержкой пагинации результатов.

**С версии:** 1.0.0

**Версия:** 1.0.0

**См. также:**

* \`\\KinopoiskDev\\Models\\Review\`:
* \`\\KinopoiskDev\\Responses\\BaseDocsResponseDto\`:

## \`fromArray()\` [#fromarray]

**Описание:** Создает экземпляр DTO из массива данных API
Фабричный метод для создания объекта ReviewDocsResponseDto из массива данных,
полученных от API Kinopoisk.dev. Метод использует DataManager для безопасного
преобразования каждого элемента массива docs в объект Review и инициализирует
все параметры пагинации значениями по умолчанию в случае их отсутствия.

* docs: array - массив данных рецензий для преобразования
* total: int - общее количество рецензий в результате (по умолчанию 0)
* limit: int - максимальное количество элементов на странице (по умолчанию 10)
* page: int - номер текущей страницы, начиная с 1 (по умолчанию 1)
* pages: int - общее количество страниц (по умолчанию 0)

**С версии:** 1.0.0

**Возвращает:** \`static\` Новый экземпляр ReviewDocsResponseDto с преобразованными данными

**Исключения:**

* \`\\KinopoiskDev\\Exceptions\\KinopoiskDevException\`: При ошибках валидации класса Review или отсутствии метода fromArray

**См. также:**

* \`\\KinopoiskDev\\Utils\\DataManager::parseObjectArray\`: () Используется для преобразования массива объектов
* \`\\KinopoiskDev\\Models\\Review::fromArray\`: () Метод создания объектов Review из массива данных
`,o={contents:[{heading:void 0,content:`**Описание:** DTO ответа для результатов поиска рецензий с пагинацией
Класс предназначен для представления ответа API при поиске рецензий.
Наследуется от BaseDocsResponseDto и специализируется на работе с коллекцией
объектов Review. Обеспечивает типизированный доступ к данным рецензий
с поддержкой пагинации результатов.`},{heading:void 0,content:`**С версии:** 1.0.0`},{heading:void 0,content:`**Версия:** 1.0.0`},{heading:void 0,content:`**См. также:**`},{heading:void 0,content:"`\\KinopoiskDev\\Models\\Review`:"},{heading:void 0,content:"`\\KinopoiskDev\\Responses\\BaseDocsResponseDto`:"},{heading:`fromarray`,content:`**Описание:** Создает экземпляр DTO из массива данных API
Фабричный метод для создания объекта ReviewDocsResponseDto из массива данных,
полученных от API Kinopoisk.dev. Метод использует DataManager для безопасного
преобразования каждого элемента массива docs в объект Review и инициализирует
все параметры пагинации значениями по умолчанию в случае их отсутствия.`},{heading:`fromarray`,content:`docs: array - массив данных рецензий для преобразования`},{heading:`fromarray`,content:`total: int - общее количество рецензий в результате (по умолчанию 0)`},{heading:`fromarray`,content:`limit: int - максимальное количество элементов на странице (по умолчанию 10)`},{heading:`fromarray`,content:`page: int - номер текущей страницы, начиная с 1 (по умолчанию 1)`},{heading:`fromarray`,content:`pages: int - общее количество страниц (по умолчанию 0)`},{heading:`fromarray`,content:`**С версии:** 1.0.0`},{heading:`fromarray`,content:"**Возвращает:** `static` Новый экземпляр ReviewDocsResponseDto с преобразованными данными"},{heading:`fromarray`,content:`**Исключения:**`},{heading:`fromarray`,content:"`\\KinopoiskDev\\Exceptions\\KinopoiskDevException`: При ошибках валидации класса Review или отсутствии метода fromArray"},{heading:`fromarray`,content:`**См. также:**`},{heading:`fromarray`,content:"`\\KinopoiskDev\\Utils\\DataManager::parseObjectArray`: () Используется для преобразования массива объектов"},{heading:`fromarray`,content:"`\\KinopoiskDev\\Models\\Review::fromArray`: () Метод создания объектов Review из массива данных"}],headings:[{id:`fromarray`,content:"`fromArray()`"}]},s=[{depth:2,url:`#fromarray`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`fromArray()`})})}];function c(e){let t={code:`code`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` DTO ответа для результатов поиска рецензий с пагинацией
Класс предназначен для представления ответа API при поиске рецензий.
Наследуется от BaseDocsResponseDto и специализируется на работе с коллекцией
объектов Review. Обеспечивает типизированный доступ к данным рецензий
с поддержкой пагинации результатов.`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 1.0.0`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Версия:`}),` 1.0.0`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`См. также:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`\\KinopoiskDev\\Models\\Review`}),`:`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`\\KinopoiskDev\\Responses\\BaseDocsResponseDto`}),`:`]}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`fromarray`,children:(0,n.jsx)(t.code,{children:`fromArray()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Создает экземпляр DTO из массива данных API
Фабричный метод для создания объекта ReviewDocsResponseDto из массива данных,
полученных от API Kinopoisk.dev. Метод использует DataManager для безопасного
преобразования каждого элемента массива docs в объект Review и инициализирует
все параметры пагинации значениями по умолчанию в случае их отсутствия.`]}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsx)(t.li,{children:`docs: array - массив данных рецензий для преобразования`}),`
`,(0,n.jsx)(t.li,{children:`total: int - общее количество рецензий в результате (по умолчанию 0)`}),`
`,(0,n.jsx)(t.li,{children:`limit: int - максимальное количество элементов на странице (по умолчанию 10)`}),`
`,(0,n.jsx)(t.li,{children:`page: int - номер текущей страницы, начиная с 1 (по умолчанию 1)`}),`
`,(0,n.jsx)(t.li,{children:`pages: int - общее количество страниц (по умолчанию 0)`}),`
`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 1.0.0`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`static`}),` Новый экземпляр ReviewDocsResponseDto с преобразованными данными`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Исключения:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`\\KinopoiskDev\\Exceptions\\KinopoiskDevException`}),`: При ошибках валидации класса Review или отсутствии метода fromArray`]}),`
`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`См. также:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`\\KinopoiskDev\\Utils\\DataManager::parseObjectArray`}),`: () Используется для преобразования массива объектов`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`\\KinopoiskDev\\Models\\Review::fromArray`}),`: () Метод создания объектов Review из массива данных`]}),`
`]})]})}function l(e={}){let{wrapper:t}=e.components||{};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}export{a as _markdown,l as default,r as frontmatter,i as lastModified,o as structuredData,s as toc};