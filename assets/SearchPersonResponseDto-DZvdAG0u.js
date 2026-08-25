import{r as e}from"./rolldown-runtime-QTnfLwEv.js";import{t}from"./jsx-runtime-By8HlURe.js";var n=e(t()),r={title:`SearchPersonResponseDto`},i=new Date(1787654208e3),a=`

**Описание:** Объект-контейнер для ответа API с данными о персонах и информацией о пагинации
Представляет стандартный ответ API Kinopoisk.dev для запросов, возвращающих
коллекцию персон с поддержкой пагинации. Содержит массив документов персон
и метаданные для постраничной навигации.

**Версия:** 1.0.0

**См. также:**

* \`\\KinopoiskDev\\Responses\\ErrorResponseDto\`: Для обработки ошибок API

## \`fromArray()\` [#fromarray]

**Описание:** Создает экземпляр DTO из массива данных API
Фабричный метод для создания объекта DTO из ассоциативного массива,
полученного от API Kinopoisk.dev. Метод использует DataManager для безопасного
чтения массива \`docs\` и инициализирует все параметры пагинации значениями
по умолчанию в случае их отсутствия.

* docs: array - массив данных поиска персон для преобразования
* total: int - общее количество найденных персон в результате
* limit: int - максимальное количество элементов на странице (по умолчанию 10)
* page: int - номер текущей страницы (начиная с 1, по умолчанию 1)
* pages: int - общее количество страниц (по умолчанию 0)

**Возвращает:** \`static\` Новый экземпляр текущего класса DTO с данными поиска персон

**Исключения:**

* \`\\KinopoiskDev\\Exceptions\\KinopoiskDevException\`: При ошибках валидации входных данных или отсутствии обязательных методов преобразования

**См. также:**

* \`\\KinopoiskDev\\Utils\\DataManager::parseObjectArray\`: () Используется для преобразования массива объектов
`,o={contents:[{heading:void 0,content:`**Описание:** Объект-контейнер для ответа API с данными о персонах и информацией о пагинации
Представляет стандартный ответ API Kinopoisk.dev для запросов, возвращающих
коллекцию персон с поддержкой пагинации. Содержит массив документов персон
и метаданные для постраничной навигации.`},{heading:void 0,content:`**Версия:** 1.0.0`},{heading:void 0,content:`**См. также:**`},{heading:void 0,content:"`\\KinopoiskDev\\Responses\\ErrorResponseDto`: Для обработки ошибок API"},{heading:`fromarray`,content:`**Описание:** Создает экземпляр DTO из массива данных API
Фабричный метод для создания объекта DTO из ассоциативного массива,
полученного от API Kinopoisk.dev. Метод использует DataManager для безопасного
чтения массива \`docs\` и инициализирует все параметры пагинации значениями
по умолчанию в случае их отсутствия.`},{heading:`fromarray`,content:`docs: array - массив данных поиска персон для преобразования`},{heading:`fromarray`,content:`total: int - общее количество найденных персон в результате`},{heading:`fromarray`,content:`limit: int - максимальное количество элементов на странице (по умолчанию 10)`},{heading:`fromarray`,content:`page: int - номер текущей страницы (начиная с 1, по умолчанию 1)`},{heading:`fromarray`,content:`pages: int - общее количество страниц (по умолчанию 0)`},{heading:`fromarray`,content:"**Возвращает:** `static` Новый экземпляр текущего класса DTO с данными поиска персон"},{heading:`fromarray`,content:`**Исключения:**`},{heading:`fromarray`,content:"`\\KinopoiskDev\\Exceptions\\KinopoiskDevException`: При ошибках валидации входных данных или отсутствии обязательных методов преобразования"},{heading:`fromarray`,content:`**См. также:**`},{heading:`fromarray`,content:"`\\KinopoiskDev\\Utils\\DataManager::parseObjectArray`: () Используется для преобразования массива объектов"}],headings:[{id:`fromarray`,content:"`fromArray()`"}]},s=[{depth:2,url:`#fromarray`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`fromArray()`})})}];function c(e){let t={code:`code`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Объект-контейнер для ответа API с данными о персонах и информацией о пагинации
Представляет стандартный ответ API Kinopoisk.dev для запросов, возвращающих
коллекцию персон с поддержкой пагинации. Содержит массив документов персон
и метаданные для постраничной навигации.`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Версия:`}),` 1.0.0`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`См. также:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`\\KinopoiskDev\\Responses\\ErrorResponseDto`}),`: Для обработки ошибок API`]}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`fromarray`,children:(0,n.jsx)(t.code,{children:`fromArray()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Создает экземпляр DTO из массива данных API
Фабричный метод для создания объекта DTO из ассоциативного массива,
полученного от API Kinopoisk.dev. Метод использует DataManager для безопасного
чтения массива `,(0,n.jsx)(t.code,{children:`docs`}),` и инициализирует все параметры пагинации значениями
по умолчанию в случае их отсутствия.`]}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsx)(t.li,{children:`docs: array - массив данных поиска персон для преобразования`}),`
`,(0,n.jsx)(t.li,{children:`total: int - общее количество найденных персон в результате`}),`
`,(0,n.jsx)(t.li,{children:`limit: int - максимальное количество элементов на странице (по умолчанию 10)`}),`
`,(0,n.jsx)(t.li,{children:`page: int - номер текущей страницы (начиная с 1, по умолчанию 1)`}),`
`,(0,n.jsx)(t.li,{children:`pages: int - общее количество страниц (по умолчанию 0)`}),`
`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`static`}),` Новый экземпляр текущего класса DTO с данными поиска персон`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Исключения:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`\\KinopoiskDev\\Exceptions\\KinopoiskDevException`}),`: При ошибках валидации входных данных или отсутствии обязательных методов преобразования`]}),`
`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`См. также:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`\\KinopoiskDev\\Utils\\DataManager::parseObjectArray`}),`: () Используется для преобразования массива объектов`]}),`
`]})]})}function l(e={}){let{wrapper:t}=e.components||{};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}export{a as _markdown,l as default,r as frontmatter,i as lastModified,o as structuredData,s as toc};