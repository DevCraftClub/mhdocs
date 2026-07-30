import{r as e}from"./rolldown-runtime-QTnfLwEv.js";import{t}from"./jsx-runtime-By8HlURe.js";var n=e(t()),r={title:`Утилиты`,description:`Вспомогательные классы и трейты для работы с KinopoiskDev PHP Wrapper`},i=new Date(1785402405e3),a=`

Вспомогательные классы и трейты для работы с KinopoiskDev PHP Wrapper.

## DataManager [#datamanager]

Класс для управления данными и их преобразованиями. Предоставляет методы для работы с массивами объектов, парсинга данных из API и обработки enum значений.

**Основные возможности:**

* Преобразование объектов в массивы
* Автоматический парсинг объектов из API данных
* Обработка enum значений
* Валидация и безопасная обработка данных

## FilterTrait [#filtertrait]

Трейт с общими методами фильтрации, которые могут использоваться в различных классах фильтров. Следует принципу DRY, централизуя общую логику фильтрации.

**Основные возможности:**

* Фильтрация по ID, названию, типу
* Поиск по названию и описанию
* Фильтрация по рейтингу и диапазонам
* Возрастные фильтры и фильтры сезонов

## MovieFilter [#moviefilter]

Специализированный класс для создания фильтров при поиске фильмов через API Kinopoisk.dev. Предоставляет полный набор методов для фильтрации по всем доступным параметрам.

**Основные возможности:**

* Фильтрация по всем полям фильма
* Поддержка различных операторов сравнения
* Фильтрация по жанрам, странам, рейтингам
* Работа с датами и диапазонами
* Сортировка результатов

## SortManager [#sortmanager]

Трейт для добавления функциональности сортировки к фильтрам. Предоставляет методы для управления параметрами сортировки при выполнении запросов к API.

**Основные возможности:**

* Добавление и удаление критериев сортировки
* Переключение направления сортировки
* Множественная сортировка
* Экспорт и импорт критериев сортировки
* Предустановленные методы сортировки
`,o={contents:[{heading:void 0,content:`Вспомогательные классы и трейты для работы с KinopoiskDev PHP Wrapper.`},{heading:`datamanager`,content:`Класс для управления данными и их преобразованиями. Предоставляет методы для работы с массивами объектов, парсинга данных из API и обработки enum значений.`},{heading:`datamanager`,content:`**Основные возможности:**`},{heading:`datamanager`,content:`Преобразование объектов в массивы`},{heading:`datamanager`,content:`Автоматический парсинг объектов из API данных`},{heading:`datamanager`,content:`Обработка enum значений`},{heading:`datamanager`,content:`Валидация и безопасная обработка данных`},{heading:`filtertrait`,content:`Трейт с общими методами фильтрации, которые могут использоваться в различных классах фильтров. Следует принципу DRY, централизуя общую логику фильтрации.`},{heading:`filtertrait`,content:`**Основные возможности:**`},{heading:`filtertrait`,content:`Фильтрация по ID, названию, типу`},{heading:`filtertrait`,content:`Поиск по названию и описанию`},{heading:`filtertrait`,content:`Фильтрация по рейтингу и диапазонам`},{heading:`filtertrait`,content:`Возрастные фильтры и фильтры сезонов`},{heading:`moviefilter`,content:`Специализированный класс для создания фильтров при поиске фильмов через API Kinopoisk.dev. Предоставляет полный набор методов для фильтрации по всем доступным параметрам.`},{heading:`moviefilter`,content:`**Основные возможности:**`},{heading:`moviefilter`,content:`Фильтрация по всем полям фильма`},{heading:`moviefilter`,content:`Поддержка различных операторов сравнения`},{heading:`moviefilter`,content:`Фильтрация по жанрам, странам, рейтингам`},{heading:`moviefilter`,content:`Работа с датами и диапазонами`},{heading:`moviefilter`,content:`Сортировка результатов`},{heading:`sortmanager`,content:`Трейт для добавления функциональности сортировки к фильтрам. Предоставляет методы для управления параметрами сортировки при выполнении запросов к API.`},{heading:`sortmanager`,content:`**Основные возможности:**`},{heading:`sortmanager`,content:`Добавление и удаление критериев сортировки`},{heading:`sortmanager`,content:`Переключение направления сортировки`},{heading:`sortmanager`,content:`Множественная сортировка`},{heading:`sortmanager`,content:`Экспорт и импорт критериев сортировки`},{heading:`sortmanager`,content:`Предустановленные методы сортировки`}],headings:[{id:`datamanager`,content:`DataManager`},{id:`filtertrait`,content:`FilterTrait`},{id:`moviefilter`,content:`MovieFilter`},{id:`sortmanager`,content:`SortManager`}]},s=[{depth:2,url:`#datamanager`,title:(0,n.jsx)(n.Fragment,{children:`DataManager`})},{depth:2,url:`#filtertrait`,title:(0,n.jsx)(n.Fragment,{children:`FilterTrait`})},{depth:2,url:`#moviefilter`,title:(0,n.jsx)(n.Fragment,{children:`MovieFilter`})},{depth:2,url:`#sortmanager`,title:(0,n.jsx)(n.Fragment,{children:`SortManager`})}];function c(e){let t={h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.p,{children:`Вспомогательные классы и трейты для работы с KinopoiskDev PHP Wrapper.`}),`
`,(0,n.jsx)(t.h2,{id:`datamanager`,children:`DataManager`}),`
`,(0,n.jsx)(t.p,{children:`Класс для управления данными и их преобразованиями. Предоставляет методы для работы с массивами объектов, парсинга данных из API и обработки enum значений.`}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Основные возможности:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsx)(t.li,{children:`Преобразование объектов в массивы`}),`
`,(0,n.jsx)(t.li,{children:`Автоматический парсинг объектов из API данных`}),`
`,(0,n.jsx)(t.li,{children:`Обработка enum значений`}),`
`,(0,n.jsx)(t.li,{children:`Валидация и безопасная обработка данных`}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`filtertrait`,children:`FilterTrait`}),`
`,(0,n.jsx)(t.p,{children:`Трейт с общими методами фильтрации, которые могут использоваться в различных классах фильтров. Следует принципу DRY, централизуя общую логику фильтрации.`}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Основные возможности:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsx)(t.li,{children:`Фильтрация по ID, названию, типу`}),`
`,(0,n.jsx)(t.li,{children:`Поиск по названию и описанию`}),`
`,(0,n.jsx)(t.li,{children:`Фильтрация по рейтингу и диапазонам`}),`
`,(0,n.jsx)(t.li,{children:`Возрастные фильтры и фильтры сезонов`}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`moviefilter`,children:`MovieFilter`}),`
`,(0,n.jsx)(t.p,{children:`Специализированный класс для создания фильтров при поиске фильмов через API Kinopoisk.dev. Предоставляет полный набор методов для фильтрации по всем доступным параметрам.`}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Основные возможности:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsx)(t.li,{children:`Фильтрация по всем полям фильма`}),`
`,(0,n.jsx)(t.li,{children:`Поддержка различных операторов сравнения`}),`
`,(0,n.jsx)(t.li,{children:`Фильтрация по жанрам, странам, рейтингам`}),`
`,(0,n.jsx)(t.li,{children:`Работа с датами и диапазонами`}),`
`,(0,n.jsx)(t.li,{children:`Сортировка результатов`}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`sortmanager`,children:`SortManager`}),`
`,(0,n.jsx)(t.p,{children:`Трейт для добавления функциональности сортировки к фильтрам. Предоставляет методы для управления параметрами сортировки при выполнении запросов к API.`}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Основные возможности:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsx)(t.li,{children:`Добавление и удаление критериев сортировки`}),`
`,(0,n.jsx)(t.li,{children:`Переключение направления сортировки`}),`
`,(0,n.jsx)(t.li,{children:`Множественная сортировка`}),`
`,(0,n.jsx)(t.li,{children:`Экспорт и импорт критериев сортировки`}),`
`,(0,n.jsx)(t.li,{children:`Предустановленные методы сортировки`}),`
`]})]})}function l(e={}){let{wrapper:t}=e.components||{};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}export{a as _markdown,l as default,r as frontmatter,i as lastModified,o as structuredData,s as toc};