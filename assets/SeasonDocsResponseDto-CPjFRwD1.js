import{r as e}from"./rolldown-runtime-QTnfLwEv.js";import{t}from"./jsx-runtime-By8HlURe.js";var n=e(t()),r={title:`SeasonDocsResponseDto`},i=new Date(1787145028e3),a=`

**Описание:** DTO ответа для результатов поиска сезонов с пагинацией
Класс представляет типизированный ответ API при поиске сезонов сериалов.
Наследуется от BaseDocsResponseDto и специализируется на работе с коллекцией
объектов Season. Обеспечивает безопасное преобразование данных API в типизированные
объекты PHP с поддержкой пагинации результатов поиска.

**С версии:** 1.0.0

**Версия:** 1.0.0

**См. также:**

* \`\\KinopoiskDev\\Models\\Season\`: Класс модели сезона для элементов массива docs
* \`\\KinopoiskDev\\Responses\\BaseDocsResponseDto\`: Базовый класс для ответов с пагинацией

## \`fromArray()\` [#fromarray]

**Описание:** Создает экземпляр DTO из массива данных API
Фабричный метод для создания объекта SeasonDocsResponseDto из массива данных,
полученных от API Kinopoisk.dev. Использует DataManager для безопасного
преобразования каждого элемента массива docs в объект Season и устанавливает
параметры пагинации с значениями по умолчанию при их отсутствии.

* docs: array - массив данных сезонов для преобразования в объекты Season
* total: int - общее количество сезонов в результате поиска (по умолчанию 0)
* limit: int - максимальное количество элементов на странице (по умолчанию 10)
* page: int - номер текущей страницы, начиная с 1 (по умолчанию 1)
* pages: int - общее количество страниц в результате (по умолчанию 0)

**Возвращает:** \`static\` Новый экземпляр SeasonDocsResponseDto с преобразованными данными сезонов

**Исключения:**

* \`\\KinopoiskDev\\Exceptions\\KinopoiskDevException\`: При ошибках валидации класса Season или отсутствии метода fromArray

**См. также:**

* \`\\KinopoiskDev\\Utils\\DataManager::parseObjectArray\`: () Используется для преобразования массива объектов
* \`\\KinopoiskDev\\Models\\Season::fromArray\`: () Метод создания объектов Season из массива данных
* \`\\KinopoiskDev\\Responses\\BaseResponseDto::fromArray\`: () Родительский абстрактный метод
`,o={contents:[{heading:void 0,content:`**Описание:** DTO ответа для результатов поиска сезонов с пагинацией
Класс представляет типизированный ответ API при поиске сезонов сериалов.
Наследуется от BaseDocsResponseDto и специализируется на работе с коллекцией
объектов Season. Обеспечивает безопасное преобразование данных API в типизированные
объекты PHP с поддержкой пагинации результатов поиска.`},{heading:void 0,content:`**С версии:** 1.0.0`},{heading:void 0,content:`**Версия:** 1.0.0`},{heading:void 0,content:`**См. также:**`},{heading:void 0,content:"`\\KinopoiskDev\\Models\\Season`: Класс модели сезона для элементов массива docs"},{heading:void 0,content:"`\\KinopoiskDev\\Responses\\BaseDocsResponseDto`: Базовый класс для ответов с пагинацией"},{heading:`fromarray`,content:`**Описание:** Создает экземпляр DTO из массива данных API
Фабричный метод для создания объекта SeasonDocsResponseDto из массива данных,
полученных от API Kinopoisk.dev. Использует DataManager для безопасного
преобразования каждого элемента массива docs в объект Season и устанавливает
параметры пагинации с значениями по умолчанию при их отсутствии.`},{heading:`fromarray`,content:`docs: array - массив данных сезонов для преобразования в объекты Season`},{heading:`fromarray`,content:`total: int - общее количество сезонов в результате поиска (по умолчанию 0)`},{heading:`fromarray`,content:`limit: int - максимальное количество элементов на странице (по умолчанию 10)`},{heading:`fromarray`,content:`page: int - номер текущей страницы, начиная с 1 (по умолчанию 1)`},{heading:`fromarray`,content:`pages: int - общее количество страниц в результате (по умолчанию 0)`},{heading:`fromarray`,content:"**Возвращает:** `static` Новый экземпляр SeasonDocsResponseDto с преобразованными данными сезонов"},{heading:`fromarray`,content:`**Исключения:**`},{heading:`fromarray`,content:"`\\KinopoiskDev\\Exceptions\\KinopoiskDevException`: При ошибках валидации класса Season или отсутствии метода fromArray"},{heading:`fromarray`,content:`**См. также:**`},{heading:`fromarray`,content:"`\\KinopoiskDev\\Utils\\DataManager::parseObjectArray`: () Используется для преобразования массива объектов"},{heading:`fromarray`,content:"`\\KinopoiskDev\\Models\\Season::fromArray`: () Метод создания объектов Season из массива данных"},{heading:`fromarray`,content:"`\\KinopoiskDev\\Responses\\BaseResponseDto::fromArray`: () Родительский абстрактный метод"}],headings:[{id:`fromarray`,content:"`fromArray()`"}]},s=[{depth:2,url:`#fromarray`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`fromArray()`})})}];function c(e){let t={code:`code`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` DTO ответа для результатов поиска сезонов с пагинацией
Класс представляет типизированный ответ API при поиске сезонов сериалов.
Наследуется от BaseDocsResponseDto и специализируется на работе с коллекцией
объектов Season. Обеспечивает безопасное преобразование данных API в типизированные
объекты PHP с поддержкой пагинации результатов поиска.`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 1.0.0`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Версия:`}),` 1.0.0`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`См. также:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`\\KinopoiskDev\\Models\\Season`}),`: Класс модели сезона для элементов массива docs`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`\\KinopoiskDev\\Responses\\BaseDocsResponseDto`}),`: Базовый класс для ответов с пагинацией`]}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`fromarray`,children:(0,n.jsx)(t.code,{children:`fromArray()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Создает экземпляр DTO из массива данных API
Фабричный метод для создания объекта SeasonDocsResponseDto из массива данных,
полученных от API Kinopoisk.dev. Использует DataManager для безопасного
преобразования каждого элемента массива docs в объект Season и устанавливает
параметры пагинации с значениями по умолчанию при их отсутствии.`]}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsx)(t.li,{children:`docs: array - массив данных сезонов для преобразования в объекты Season`}),`
`,(0,n.jsx)(t.li,{children:`total: int - общее количество сезонов в результате поиска (по умолчанию 0)`}),`
`,(0,n.jsx)(t.li,{children:`limit: int - максимальное количество элементов на странице (по умолчанию 10)`}),`
`,(0,n.jsx)(t.li,{children:`page: int - номер текущей страницы, начиная с 1 (по умолчанию 1)`}),`
`,(0,n.jsx)(t.li,{children:`pages: int - общее количество страниц в результате (по умолчанию 0)`}),`
`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`static`}),` Новый экземпляр SeasonDocsResponseDto с преобразованными данными сезонов`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Исключения:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`\\KinopoiskDev\\Exceptions\\KinopoiskDevException`}),`: При ошибках валидации класса Season или отсутствии метода fromArray`]}),`
`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`См. также:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`\\KinopoiskDev\\Utils\\DataManager::parseObjectArray`}),`: () Используется для преобразования массива объектов`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`\\KinopoiskDev\\Models\\Season::fromArray`}),`: () Метод создания объектов Season из массива данных`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`\\KinopoiskDev\\Responses\\BaseResponseDto::fromArray`}),`: () Родительский абстрактный метод`]}),`
`]})]})}function l(e={}){let{wrapper:t}=e.components||{};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}export{a as _markdown,l as default,r as frontmatter,i as lastModified,o as structuredData,s as toc};