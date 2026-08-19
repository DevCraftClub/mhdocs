import{r as e}from"./rolldown-runtime-QTnfLwEv.js";import{t}from"./jsx-runtime-By8HlURe.js";var n=e(t()),r={title:`MovieAwardDocsResponseDto`},i=new Date(1787141927e3),a=`

**Описание:** DTO для представления ответа API с наградами фильмов и информацией о пагинации
Расширяет базовый класс BaseDocsResponseDto для специализированной работы с коллекциями
наград фильмов, полученных от API Kinopoisk.dev. Предоставляет стандартный интерфейс
для работы с постраничными результатами поиска наград фильмов, включая метаданные
о количестве результатов и навигации по страницам.

**С версии:** 1.0.0

**Версия:** 1.0.0

**См. также:**

* \`\\KinopoiskDev\\Models\\MovieAward\`: Класс модели награды фильма
* \`\\KinopoiskDev\\Responses\\BaseDocsResponseDto\`: Базовый класс для ответов с документами
* \`\\KinopoiskDev\\Utils\\DataManager\`: Утилита для преобразования данных

## \`fromArray()\` [#fromarray]

**Описание:** Создает экземпляр DTO из массива данных API
Фабричный метод для создания объекта MovieAwardDocsResponseDto из массива данных,
полученных от API Kinopoisk.dev. Использует DataManager для безопасного преобразования
элементов массива docs в объекты MovieAward и устанавливает значения по умолчанию
для всех параметров пагинации в случае их отсутствия в исходных данных.

* docs: array - массив данных наград фильмов для преобразования в объекты MovieAward
* total: int - общее количество наград в результате поиска (по умолчанию 0)
* limit: int - максимальное количество элементов на странице (по умолчанию 10)
* page: int - номер текущей страницы, начиная с 1 (по умолчанию 1)
* pages: int - общее количество доступных страниц (по умолчанию 0)
  отсутствии метода fromArray в классе MovieAward,
  или некорректной структуре данных

**Возвращает:** \`static\` Новый экземпляр MovieAwardDocsResponseDto с преобразованными данными наград

**Исключения:**

* \`\\KinopoiskDev\\Exceptions\\KinopoiskDevException\`: При ошибках валидации класса MovieAward,

**См. также:**

* \`\\KinopoiskDev\\Utils\\DataManager::parseObjectArray\`: () Метод для преобразования массива в объекты
* \`\\KinopoiskDev\\Models\\MovieAward::fromArray\`: () Фабричный метод создания объекта награды
`,o={contents:[{heading:void 0,content:`**Описание:** DTO для представления ответа API с наградами фильмов и информацией о пагинации
Расширяет базовый класс BaseDocsResponseDto для специализированной работы с коллекциями
наград фильмов, полученных от API Kinopoisk.dev. Предоставляет стандартный интерфейс
для работы с постраничными результатами поиска наград фильмов, включая метаданные
о количестве результатов и навигации по страницам.`},{heading:void 0,content:`**С версии:** 1.0.0`},{heading:void 0,content:`**Версия:** 1.0.0`},{heading:void 0,content:`**См. также:**`},{heading:void 0,content:"`\\KinopoiskDev\\Models\\MovieAward`: Класс модели награды фильма"},{heading:void 0,content:"`\\KinopoiskDev\\Responses\\BaseDocsResponseDto`: Базовый класс для ответов с документами"},{heading:void 0,content:"`\\KinopoiskDev\\Utils\\DataManager`: Утилита для преобразования данных"},{heading:`fromarray`,content:`**Описание:** Создает экземпляр DTO из массива данных API
Фабричный метод для создания объекта MovieAwardDocsResponseDto из массива данных,
полученных от API Kinopoisk.dev. Использует DataManager для безопасного преобразования
элементов массива docs в объекты MovieAward и устанавливает значения по умолчанию
для всех параметров пагинации в случае их отсутствия в исходных данных.`},{heading:`fromarray`,content:`docs: array - массив данных наград фильмов для преобразования в объекты MovieAward`},{heading:`fromarray`,content:`total: int - общее количество наград в результате поиска (по умолчанию 0)`},{heading:`fromarray`,content:`limit: int - максимальное количество элементов на странице (по умолчанию 10)`},{heading:`fromarray`,content:`page: int - номер текущей страницы, начиная с 1 (по умолчанию 1)`},{heading:`fromarray`,content:`pages: int - общее количество доступных страниц (по умолчанию 0)
отсутствии метода fromArray в классе MovieAward,
или некорректной структуре данных`},{heading:`fromarray`,content:"**Возвращает:** `static` Новый экземпляр MovieAwardDocsResponseDto с преобразованными данными наград"},{heading:`fromarray`,content:`**Исключения:**`},{heading:`fromarray`,content:"`\\KinopoiskDev\\Exceptions\\KinopoiskDevException`: При ошибках валидации класса MovieAward,"},{heading:`fromarray`,content:`**См. также:**`},{heading:`fromarray`,content:"`\\KinopoiskDev\\Utils\\DataManager::parseObjectArray`: () Метод для преобразования массива в объекты"},{heading:`fromarray`,content:"`\\KinopoiskDev\\Models\\MovieAward::fromArray`: () Фабричный метод создания объекта награды"}],headings:[{id:`fromarray`,content:"`fromArray()`"}]},s=[{depth:2,url:`#fromarray`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`fromArray()`})})}];function c(e){let t={code:`code`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` DTO для представления ответа API с наградами фильмов и информацией о пагинации
Расширяет базовый класс BaseDocsResponseDto для специализированной работы с коллекциями
наград фильмов, полученных от API Kinopoisk.dev. Предоставляет стандартный интерфейс
для работы с постраничными результатами поиска наград фильмов, включая метаданные
о количестве результатов и навигации по страницам.`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 1.0.0`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Версия:`}),` 1.0.0`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`См. также:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`\\KinopoiskDev\\Models\\MovieAward`}),`: Класс модели награды фильма`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`\\KinopoiskDev\\Responses\\BaseDocsResponseDto`}),`: Базовый класс для ответов с документами`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`\\KinopoiskDev\\Utils\\DataManager`}),`: Утилита для преобразования данных`]}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`fromarray`,children:(0,n.jsx)(t.code,{children:`fromArray()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Создает экземпляр DTO из массива данных API
Фабричный метод для создания объекта MovieAwardDocsResponseDto из массива данных,
полученных от API Kinopoisk.dev. Использует DataManager для безопасного преобразования
элементов массива docs в объекты MovieAward и устанавливает значения по умолчанию
для всех параметров пагинации в случае их отсутствия в исходных данных.`]}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsx)(t.li,{children:`docs: array - массив данных наград фильмов для преобразования в объекты MovieAward`}),`
`,(0,n.jsx)(t.li,{children:`total: int - общее количество наград в результате поиска (по умолчанию 0)`}),`
`,(0,n.jsx)(t.li,{children:`limit: int - максимальное количество элементов на странице (по умолчанию 10)`}),`
`,(0,n.jsx)(t.li,{children:`page: int - номер текущей страницы, начиная с 1 (по умолчанию 1)`}),`
`,(0,n.jsx)(t.li,{children:`pages: int - общее количество доступных страниц (по умолчанию 0)
отсутствии метода fromArray в классе MovieAward,
или некорректной структуре данных`}),`
`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`static`}),` Новый экземпляр MovieAwardDocsResponseDto с преобразованными данными наград`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Исключения:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`\\KinopoiskDev\\Exceptions\\KinopoiskDevException`}),`: При ошибках валидации класса MovieAward,`]}),`
`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`См. также:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`\\KinopoiskDev\\Utils\\DataManager::parseObjectArray`}),`: () Метод для преобразования массива в объекты`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`\\KinopoiskDev\\Models\\MovieAward::fromArray`}),`: () Фабричный метод создания объекта награды`]}),`
`]})]})}function l(e={}){let{wrapper:t}=e.components||{};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}export{a as _markdown,l as default,r as frontmatter,i as lastModified,o as structuredData,s as toc};