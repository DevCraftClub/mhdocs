import{r as e}from"./rolldown-runtime-QTnfLwEv.js";import{t}from"./jsx-runtime-By8HlURe.js";var n=e(t()),r={title:`StudioSearchFilter`},i=new Date(1787142659e3),a=`

**Описание:** Фильтр для поиска студий
Класс предоставляет методы для создания фильтров поиска студий
по различным критериям: названию, типу, подтипу, связанным фильмам и т.д.
Используется в StudioRequests для формирования параметров запроса к API.

**С версии:** 1.0.0

**Версия:** 1.0.0

**См. также:**

* \`\\KinopoiskDev\\Http\\StudioRequests\`: Для использования фильтра
* \`\\KinopoiskDev\\Enums\\StudioType\`: Для типов студий

## \`movieId()\` [#movieid]

**Описание:** Фильтр по идентификатору фильма
Находит студии, которые участвовали в создании указанного фильма.

**Параметры:**

* \`$movieIds\` (int|array\\<int>): ID фильма или массив ID фильмов

**Возвращает:** \`self\` Текущий экземпляр для цепочки методов

## \`studioType()\` [#studiotype]

**Описание:** Фильтр по типу студии

**Параметры:**

* \`$types\` (\`string|StudioType|array<string|StudioType>\`): Тип студии, enum или массив типов

**Возвращает:** \`self\` Текущий экземпляр для цепочки методов

## \`subType()\` [#subtype]

**Описание:** Фильтр по подтипу студии

**Параметры:**

* \`$subTypes\` (string|array\\<string>): Подтип студии или массив подтипов

**Возвращает:** \`self\` Текущий экземпляр для цепочки методов

## \`title()\` [#title]

**Описание:** Фильтр по названию студии
Поиск по точному или частичному совпадению названия.

**Параметры:**

* \`$titles\` (string|array\\<string>): Название студии или массив названий

**Возвращает:** \`self\` Текущий экземпляр для цепочки методов

## \`productionStudios()\` [#productionstudios]

**Описание:** Удобный метод для фильтрации производственных студий

**Возвращает:** \`self\` Текущий экземпляр для цепочки методов

## \`specialEffectsStudios()\` [#specialeffectsstudios]

**Описание:** Удобный метод для фильтрации студий спецэффектов

**Возвращает:** \`self\` Текущий экземпляр для цепочки методов

## \`distributionCompanies()\` [#distributioncompanies]

**Описание:** Удобный метод для фильтрации прокатных компаний

**Возвращает:** \`self\` Текущий экземпляр для цепочки методов

## \`dubbingStudios()\` [#dubbingstudios]

**Описание:** Удобный метод для фильтрации студий дубляжа

**Возвращает:** \`self\` Текущий экземпляр для цепочки методов

## \`excludeTypes()\` [#excludetypes]

**Описание:** Исключить определенные типы студий

**Параметры:**

* \`$types\` (string|StudioType|array\\<string|StudioType>): Типы для исключения

**Возвращает:** \`self\` Текущий экземпляр для цепочки методов

## \`participatedInAllMovies()\` [#participatedinallmovies]

**Описание:** Поиск студий, участвовавших в нескольких фильмах

**Параметры:**

* \`$movieIds\` (array\\<int>): Массив ID фильмов (студия должна участвовать во всех)

**Возвращает:** \`self\` Текущий экземпляр для цепочки методов

## \`sortByTitle()\` [#sortbytitle]

**Описание:** Сортировка по названию студии

**Параметры:**

* \`$direction\` (string): Направление сортировки ('asc' или 'desc')

**Возвращает:** \`self\` Текущий экземпляр для цепочки методов

## \`sortByType()\` [#sortbytype]

**Описание:** Сортировка по типу студии

**Параметры:**

* \`$direction\` (string): Направление сортировки ('asc' или 'desc')

**Возвращает:** \`self\` Текущий экземпляр для цепочки методов

## \`country()\` [#country]

**Описание:** Фильтрация по стране

## \`name()\` [#name]

**Описание:** Добавляет фильтр по названию

**Параметры:**

* \`$name\` (string): Название
* \`$operator\` (string): Оператор сравнения

## \`enName()\` [#enname]

**Описание:** Добавляет фильтр по английскому названию

**Параметры:**

* \`$enName\` (string): Английское название
* \`$operator\` (string): Оператор сравнения

## \`type()\` [#type]

**Описание:** Добавляет фильтр по типу

**Параметры:**

* \`$type\` (string|\\KinopoiskDev\\Enums\\ReviewType): Тип
* \`$operator\` (string): Оператор сравнения

**Возвращает:** \`\\KinopoiskDev\\Filter\\MovieSearchFilter|\\KinopoiskDev\\Filter\\ImageSearchFilter|\\KinopoiskDev\\Filter\\KeywordSearchFilter|\\KinopoiskDev\\Filter\\PersonSearchFilter|\\KinopoiskDev\\Filter\\ReviewSearchFilter|\\KinopoiskDev\\Filter\\SeasonSearchFilter|\\KinopoiskDev\\Filter\\StudioSearchFilter|\\KinopoiskDev\\Utils\\FilterTrait\`

## \`searchByName()\` [#searchbyname]

**Описание:** Добавляет поисковый фильтр по названию с использованием регулярных выражений

**Параметры:**

* \`$query\` (string): Поисковый запрос

## \`searchByEnName()\` [#searchbyenname]

**Описание:** Добавляет поисковый фильтр по английскому названию с использованием регулярных выражений

**Параметры:**

* \`$query\` (string): Поисковый запрос

## \`searchByDescription()\` [#searchbydescription]

**Описание:** Добавляет поисковый фильтр по описанию с использованием регулярных выражений

**Параметры:**

* \`$query\` (string): Поисковый запрос

## \`withMinRating()\` [#withminrating]

**Описание:** Добавляет фильтр по минимальному рейтингу

**Параметры:**

* \`$minRating\` (float): Минимальный рейтинг
* \`$field\` (string): Поле рейтинга (kp, imdb и т.д.)

## \`withMaxRating()\` [#withmaxrating]

**Описание:** Добавляет фильтр по максимальному рейтингу

**Параметры:**

* \`$maxRating\` (float): Максимальный рейтинг
* \`$field\` (string): Поле рейтинга (kp, imdb и т.д.)

## \`withRatingBetween()\` [#withratingbetween]

**Описание:** Добавляет фильтр по диапазону рейтинга

**Параметры:**

* \`$minRating\` (float): Минимальный рейтинг
* \`$maxRating\` (float): Максимальный рейтинг
* \`$field\` (string): Поле рейтинга (kp, imdb и т.д.)

## \`addRangeFilter()\` [#addrangefilter]

**Описание:** Добавляет фильтр по диапазону

**Параметры:**

* \`$field\` (string): Имя поля
* \`$minValue\` (int): Минимальное значение
* \`$maxValue\` (int): Максимальное значение

## \`seasonRange()\` [#seasonrange]

**Описание:** Добавляет фильтр по диапазону сезонов

**Параметры:**

* \`$fromSeason\` (int): Начальный сезон
* \`$toSeason\` (int): Конечный сезон

## \`ageRange()\` [#agerange]

**Описание:** Добавляет фильтр по возрастному диапазону

**Параметры:**

* \`$minAge\` (int): Минимальный возраст
* \`$maxAge\` (int): Максимальный возраст
`,o={contents:[{heading:void 0,content:`**Описание:** Фильтр для поиска студий
Класс предоставляет методы для создания фильтров поиска студий
по различным критериям: названию, типу, подтипу, связанным фильмам и т.д.
Используется в StudioRequests для формирования параметров запроса к API.`},{heading:void 0,content:`**С версии:** 1.0.0`},{heading:void 0,content:`**Версия:** 1.0.0`},{heading:void 0,content:`**См. также:**`},{heading:void 0,content:"`\\KinopoiskDev\\Http\\StudioRequests`: Для использования фильтра"},{heading:void 0,content:"`\\KinopoiskDev\\Enums\\StudioType`: Для типов студий"},{heading:`movieid`,content:`**Описание:** Фильтр по идентификатору фильма
Находит студии, которые участвовали в создании указанного фильма.`},{heading:`movieid`,content:`**Параметры:**`},{heading:`movieid`,content:"`$movieIds` (int|array\\<int>): ID фильма или массив ID фильмов"},{heading:`movieid`,content:"**Возвращает:** `self` Текущий экземпляр для цепочки методов"},{heading:`studiotype`,content:`**Описание:** Фильтр по типу студии`},{heading:`studiotype`,content:`**Параметры:**`},{heading:`studiotype`,content:"`$types` (`string|StudioType|array<string|StudioType>`): Тип студии, enum или массив типов"},{heading:`studiotype`,content:"**Возвращает:** `self` Текущий экземпляр для цепочки методов"},{heading:`subtype`,content:`**Описание:** Фильтр по подтипу студии`},{heading:`subtype`,content:`**Параметры:**`},{heading:`subtype`,content:"`$subTypes` (string|array\\<string>): Подтип студии или массив подтипов"},{heading:`subtype`,content:"**Возвращает:** `self` Текущий экземпляр для цепочки методов"},{heading:`title`,content:`**Описание:** Фильтр по названию студии
Поиск по точному или частичному совпадению названия.`},{heading:`title`,content:`**Параметры:**`},{heading:`title`,content:"`$titles` (string|array\\<string>): Название студии или массив названий"},{heading:`title`,content:"**Возвращает:** `self` Текущий экземпляр для цепочки методов"},{heading:`productionstudios`,content:`**Описание:** Удобный метод для фильтрации производственных студий`},{heading:`productionstudios`,content:"**Возвращает:** `self` Текущий экземпляр для цепочки методов"},{heading:`specialeffectsstudios`,content:`**Описание:** Удобный метод для фильтрации студий спецэффектов`},{heading:`specialeffectsstudios`,content:"**Возвращает:** `self` Текущий экземпляр для цепочки методов"},{heading:`distributioncompanies`,content:`**Описание:** Удобный метод для фильтрации прокатных компаний`},{heading:`distributioncompanies`,content:"**Возвращает:** `self` Текущий экземпляр для цепочки методов"},{heading:`dubbingstudios`,content:`**Описание:** Удобный метод для фильтрации студий дубляжа`},{heading:`dubbingstudios`,content:"**Возвращает:** `self` Текущий экземпляр для цепочки методов"},{heading:`excludetypes`,content:`**Описание:** Исключить определенные типы студий`},{heading:`excludetypes`,content:`**Параметры:**`},{heading:`excludetypes`,content:"`$types` (string|StudioType|array\\<string|StudioType>): Типы для исключения"},{heading:`excludetypes`,content:"**Возвращает:** `self` Текущий экземпляр для цепочки методов"},{heading:`participatedinallmovies`,content:`**Описание:** Поиск студий, участвовавших в нескольких фильмах`},{heading:`participatedinallmovies`,content:`**Параметры:**`},{heading:`participatedinallmovies`,content:"`$movieIds` (array\\<int>): Массив ID фильмов (студия должна участвовать во всех)"},{heading:`participatedinallmovies`,content:"**Возвращает:** `self` Текущий экземпляр для цепочки методов"},{heading:`sortbytitle`,content:`**Описание:** Сортировка по названию студии`},{heading:`sortbytitle`,content:`**Параметры:**`},{heading:`sortbytitle`,content:"`$direction` (string): Направление сортировки ('asc' или 'desc')"},{heading:`sortbytitle`,content:"**Возвращает:** `self` Текущий экземпляр для цепочки методов"},{heading:`sortbytype`,content:`**Описание:** Сортировка по типу студии`},{heading:`sortbytype`,content:`**Параметры:**`},{heading:`sortbytype`,content:"`$direction` (string): Направление сортировки ('asc' или 'desc')"},{heading:`sortbytype`,content:"**Возвращает:** `self` Текущий экземпляр для цепочки методов"},{heading:`country`,content:`**Описание:** Фильтрация по стране`},{heading:`name`,content:`**Описание:** Добавляет фильтр по названию`},{heading:`name`,content:`**Параметры:**`},{heading:`name`,content:"`$name` (string): Название"},{heading:`name`,content:"`$operator` (string): Оператор сравнения"},{heading:`enname`,content:`**Описание:** Добавляет фильтр по английскому названию`},{heading:`enname`,content:`**Параметры:**`},{heading:`enname`,content:"`$enName` (string): Английское название"},{heading:`enname`,content:"`$operator` (string): Оператор сравнения"},{heading:`type`,content:`**Описание:** Добавляет фильтр по типу`},{heading:`type`,content:`**Параметры:**`},{heading:`type`,content:"`$type` (string|\\KinopoiskDev\\Enums\\ReviewType): Тип"},{heading:`type`,content:"`$operator` (string): Оператор сравнения"},{heading:`type`,content:"**Возвращает:** `\\KinopoiskDev\\Filter\\MovieSearchFilter|\\KinopoiskDev\\Filter\\ImageSearchFilter|\\KinopoiskDev\\Filter\\KeywordSearchFilter|\\KinopoiskDev\\Filter\\PersonSearchFilter|\\KinopoiskDev\\Filter\\ReviewSearchFilter|\\KinopoiskDev\\Filter\\SeasonSearchFilter|\\KinopoiskDev\\Filter\\StudioSearchFilter|\\KinopoiskDev\\Utils\\FilterTrait`"},{heading:`searchbyname`,content:`**Описание:** Добавляет поисковый фильтр по названию с использованием регулярных выражений`},{heading:`searchbyname`,content:`**Параметры:**`},{heading:`searchbyname`,content:"`$query` (string): Поисковый запрос"},{heading:`searchbyenname`,content:`**Описание:** Добавляет поисковый фильтр по английскому названию с использованием регулярных выражений`},{heading:`searchbyenname`,content:`**Параметры:**`},{heading:`searchbyenname`,content:"`$query` (string): Поисковый запрос"},{heading:`searchbydescription`,content:`**Описание:** Добавляет поисковый фильтр по описанию с использованием регулярных выражений`},{heading:`searchbydescription`,content:`**Параметры:**`},{heading:`searchbydescription`,content:"`$query` (string): Поисковый запрос"},{heading:`withminrating`,content:`**Описание:** Добавляет фильтр по минимальному рейтингу`},{heading:`withminrating`,content:`**Параметры:**`},{heading:`withminrating`,content:"`$minRating` (float): Минимальный рейтинг"},{heading:`withminrating`,content:"`$field` (string): Поле рейтинга (kp, imdb и т.д.)"},{heading:`withmaxrating`,content:`**Описание:** Добавляет фильтр по максимальному рейтингу`},{heading:`withmaxrating`,content:`**Параметры:**`},{heading:`withmaxrating`,content:"`$maxRating` (float): Максимальный рейтинг"},{heading:`withmaxrating`,content:"`$field` (string): Поле рейтинга (kp, imdb и т.д.)"},{heading:`withratingbetween`,content:`**Описание:** Добавляет фильтр по диапазону рейтинга`},{heading:`withratingbetween`,content:`**Параметры:**`},{heading:`withratingbetween`,content:"`$minRating` (float): Минимальный рейтинг"},{heading:`withratingbetween`,content:"`$maxRating` (float): Максимальный рейтинг"},{heading:`withratingbetween`,content:"`$field` (string): Поле рейтинга (kp, imdb и т.д.)"},{heading:`addrangefilter`,content:`**Описание:** Добавляет фильтр по диапазону`},{heading:`addrangefilter`,content:`**Параметры:**`},{heading:`addrangefilter`,content:"`$field` (string): Имя поля"},{heading:`addrangefilter`,content:"`$minValue` (int): Минимальное значение"},{heading:`addrangefilter`,content:"`$maxValue` (int): Максимальное значение"},{heading:`seasonrange`,content:`**Описание:** Добавляет фильтр по диапазону сезонов`},{heading:`seasonrange`,content:`**Параметры:**`},{heading:`seasonrange`,content:"`$fromSeason` (int): Начальный сезон"},{heading:`seasonrange`,content:"`$toSeason` (int): Конечный сезон"},{heading:`agerange`,content:`**Описание:** Добавляет фильтр по возрастному диапазону`},{heading:`agerange`,content:`**Параметры:**`},{heading:`agerange`,content:"`$minAge` (int): Минимальный возраст"},{heading:`agerange`,content:"`$maxAge` (int): Максимальный возраст"}],headings:[{id:`movieid`,content:"`movieId()`"},{id:`studiotype`,content:"`studioType()`"},{id:`subtype`,content:"`subType()`"},{id:`title`,content:"`title()`"},{id:`productionstudios`,content:"`productionStudios()`"},{id:`specialeffectsstudios`,content:"`specialEffectsStudios()`"},{id:`distributioncompanies`,content:"`distributionCompanies()`"},{id:`dubbingstudios`,content:"`dubbingStudios()`"},{id:`excludetypes`,content:"`excludeTypes()`"},{id:`participatedinallmovies`,content:"`participatedInAllMovies()`"},{id:`sortbytitle`,content:"`sortByTitle()`"},{id:`sortbytype`,content:"`sortByType()`"},{id:`country`,content:"`country()`"},{id:`name`,content:"`name()`"},{id:`enname`,content:"`enName()`"},{id:`type`,content:"`type()`"},{id:`searchbyname`,content:"`searchByName()`"},{id:`searchbyenname`,content:"`searchByEnName()`"},{id:`searchbydescription`,content:"`searchByDescription()`"},{id:`withminrating`,content:"`withMinRating()`"},{id:`withmaxrating`,content:"`withMaxRating()`"},{id:`withratingbetween`,content:"`withRatingBetween()`"},{id:`addrangefilter`,content:"`addRangeFilter()`"},{id:`seasonrange`,content:"`seasonRange()`"},{id:`agerange`,content:"`ageRange()`"}]},s=[{depth:2,url:`#movieid`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`movieId()`})})},{depth:2,url:`#studiotype`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`studioType()`})})},{depth:2,url:`#subtype`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`subType()`})})},{depth:2,url:`#title`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`title()`})})},{depth:2,url:`#productionstudios`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`productionStudios()`})})},{depth:2,url:`#specialeffectsstudios`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`specialEffectsStudios()`})})},{depth:2,url:`#distributioncompanies`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`distributionCompanies()`})})},{depth:2,url:`#dubbingstudios`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`dubbingStudios()`})})},{depth:2,url:`#excludetypes`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`excludeTypes()`})})},{depth:2,url:`#participatedinallmovies`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`participatedInAllMovies()`})})},{depth:2,url:`#sortbytitle`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`sortByTitle()`})})},{depth:2,url:`#sortbytype`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`sortByType()`})})},{depth:2,url:`#country`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`country()`})})},{depth:2,url:`#name`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`name()`})})},{depth:2,url:`#enname`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`enName()`})})},{depth:2,url:`#type`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`type()`})})},{depth:2,url:`#searchbyname`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`searchByName()`})})},{depth:2,url:`#searchbyenname`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`searchByEnName()`})})},{depth:2,url:`#searchbydescription`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`searchByDescription()`})})},{depth:2,url:`#withminrating`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`withMinRating()`})})},{depth:2,url:`#withmaxrating`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`withMaxRating()`})})},{depth:2,url:`#withratingbetween`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`withRatingBetween()`})})},{depth:2,url:`#addrangefilter`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`addRangeFilter()`})})},{depth:2,url:`#seasonrange`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`seasonRange()`})})},{depth:2,url:`#agerange`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`ageRange()`})})}];function c(e){let t={code:`code`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Фильтр для поиска студий
Класс предоставляет методы для создания фильтров поиска студий
по различным критериям: названию, типу, подтипу, связанным фильмам и т.д.
Используется в StudioRequests для формирования параметров запроса к API.`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 1.0.0`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Версия:`}),` 1.0.0`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`См. также:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`\\KinopoiskDev\\Http\\StudioRequests`}),`: Для использования фильтра`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`\\KinopoiskDev\\Enums\\StudioType`}),`: Для типов студий`]}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`movieid`,children:(0,n.jsx)(t.code,{children:`movieId()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Фильтр по идентификатору фильма
Находит студии, которые участвовали в создании указанного фильма.`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$movieIds`}),` (int|array<int>): ID фильма или массив ID фильмов`]}),`
`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`self`}),` Текущий экземпляр для цепочки методов`]}),`
`,(0,n.jsx)(t.h2,{id:`studiotype`,children:(0,n.jsx)(t.code,{children:`studioType()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Фильтр по типу студии`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$types`}),` (`,(0,n.jsx)(t.code,{children:`string|StudioType|array<string|StudioType>`}),`): Тип студии, enum или массив типов`]}),`
`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`self`}),` Текущий экземпляр для цепочки методов`]}),`
`,(0,n.jsx)(t.h2,{id:`subtype`,children:(0,n.jsx)(t.code,{children:`subType()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Фильтр по подтипу студии`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$subTypes`}),` (string|array<string>): Подтип студии или массив подтипов`]}),`
`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`self`}),` Текущий экземпляр для цепочки методов`]}),`
`,(0,n.jsx)(t.h2,{id:`title`,children:(0,n.jsx)(t.code,{children:`title()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Фильтр по названию студии
Поиск по точному или частичному совпадению названия.`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$titles`}),` (string|array<string>): Название студии или массив названий`]}),`
`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`self`}),` Текущий экземпляр для цепочки методов`]}),`
`,(0,n.jsx)(t.h2,{id:`productionstudios`,children:(0,n.jsx)(t.code,{children:`productionStudios()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Удобный метод для фильтрации производственных студий`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`self`}),` Текущий экземпляр для цепочки методов`]}),`
`,(0,n.jsx)(t.h2,{id:`specialeffectsstudios`,children:(0,n.jsx)(t.code,{children:`specialEffectsStudios()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Удобный метод для фильтрации студий спецэффектов`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`self`}),` Текущий экземпляр для цепочки методов`]}),`
`,(0,n.jsx)(t.h2,{id:`distributioncompanies`,children:(0,n.jsx)(t.code,{children:`distributionCompanies()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Удобный метод для фильтрации прокатных компаний`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`self`}),` Текущий экземпляр для цепочки методов`]}),`
`,(0,n.jsx)(t.h2,{id:`dubbingstudios`,children:(0,n.jsx)(t.code,{children:`dubbingStudios()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Удобный метод для фильтрации студий дубляжа`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`self`}),` Текущий экземпляр для цепочки методов`]}),`
`,(0,n.jsx)(t.h2,{id:`excludetypes`,children:(0,n.jsx)(t.code,{children:`excludeTypes()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Исключить определенные типы студий`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$types`}),` (string|StudioType|array<string|StudioType>): Типы для исключения`]}),`
`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`self`}),` Текущий экземпляр для цепочки методов`]}),`
`,(0,n.jsx)(t.h2,{id:`participatedinallmovies`,children:(0,n.jsx)(t.code,{children:`participatedInAllMovies()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Поиск студий, участвовавших в нескольких фильмах`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$movieIds`}),` (array<int>): Массив ID фильмов (студия должна участвовать во всех)`]}),`
`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`self`}),` Текущий экземпляр для цепочки методов`]}),`
`,(0,n.jsx)(t.h2,{id:`sortbytitle`,children:(0,n.jsx)(t.code,{children:`sortByTitle()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Сортировка по названию студии`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$direction`}),` (string): Направление сортировки ('asc' или 'desc')`]}),`
`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`self`}),` Текущий экземпляр для цепочки методов`]}),`
`,(0,n.jsx)(t.h2,{id:`sortbytype`,children:(0,n.jsx)(t.code,{children:`sortByType()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Сортировка по типу студии`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$direction`}),` (string): Направление сортировки ('asc' или 'desc')`]}),`
`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`self`}),` Текущий экземпляр для цепочки методов`]}),`
`,(0,n.jsx)(t.h2,{id:`country`,children:(0,n.jsx)(t.code,{children:`country()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Фильтрация по стране`]}),`
`,(0,n.jsx)(t.h2,{id:`name`,children:(0,n.jsx)(t.code,{children:`name()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Добавляет фильтр по названию`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$name`}),` (string): Название`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$operator`}),` (string): Оператор сравнения`]}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`enname`,children:(0,n.jsx)(t.code,{children:`enName()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Добавляет фильтр по английскому названию`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$enName`}),` (string): Английское название`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$operator`}),` (string): Оператор сравнения`]}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`type`,children:(0,n.jsx)(t.code,{children:`type()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Добавляет фильтр по типу`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$type`}),` (string|\\KinopoiskDev\\Enums\\ReviewType): Тип`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$operator`}),` (string): Оператор сравнения`]}),`
`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`\\KinopoiskDev\\Filter\\MovieSearchFilter|\\KinopoiskDev\\Filter\\ImageSearchFilter|\\KinopoiskDev\\Filter\\KeywordSearchFilter|\\KinopoiskDev\\Filter\\PersonSearchFilter|\\KinopoiskDev\\Filter\\ReviewSearchFilter|\\KinopoiskDev\\Filter\\SeasonSearchFilter|\\KinopoiskDev\\Filter\\StudioSearchFilter|\\KinopoiskDev\\Utils\\FilterTrait`})]}),`
`,(0,n.jsx)(t.h2,{id:`searchbyname`,children:(0,n.jsx)(t.code,{children:`searchByName()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Добавляет поисковый фильтр по названию с использованием регулярных выражений`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$query`}),` (string): Поисковый запрос`]}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`searchbyenname`,children:(0,n.jsx)(t.code,{children:`searchByEnName()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Добавляет поисковый фильтр по английскому названию с использованием регулярных выражений`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$query`}),` (string): Поисковый запрос`]}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`searchbydescription`,children:(0,n.jsx)(t.code,{children:`searchByDescription()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Добавляет поисковый фильтр по описанию с использованием регулярных выражений`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$query`}),` (string): Поисковый запрос`]}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`withminrating`,children:(0,n.jsx)(t.code,{children:`withMinRating()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Добавляет фильтр по минимальному рейтингу`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$minRating`}),` (float): Минимальный рейтинг`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$field`}),` (string): Поле рейтинга (kp, imdb и т.д.)`]}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`withmaxrating`,children:(0,n.jsx)(t.code,{children:`withMaxRating()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Добавляет фильтр по максимальному рейтингу`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$maxRating`}),` (float): Максимальный рейтинг`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$field`}),` (string): Поле рейтинга (kp, imdb и т.д.)`]}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`withratingbetween`,children:(0,n.jsx)(t.code,{children:`withRatingBetween()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Добавляет фильтр по диапазону рейтинга`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$minRating`}),` (float): Минимальный рейтинг`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$maxRating`}),` (float): Максимальный рейтинг`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$field`}),` (string): Поле рейтинга (kp, imdb и т.д.)`]}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`addrangefilter`,children:(0,n.jsx)(t.code,{children:`addRangeFilter()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Добавляет фильтр по диапазону`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$field`}),` (string): Имя поля`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$minValue`}),` (int): Минимальное значение`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$maxValue`}),` (int): Максимальное значение`]}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`seasonrange`,children:(0,n.jsx)(t.code,{children:`seasonRange()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Добавляет фильтр по диапазону сезонов`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$fromSeason`}),` (int): Начальный сезон`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$toSeason`}),` (int): Конечный сезон`]}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`agerange`,children:(0,n.jsx)(t.code,{children:`ageRange()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Добавляет фильтр по возрастному диапазону`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$minAge`}),` (int): Минимальный возраст`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$maxAge`}),` (int): Максимальный возраст`]}),`
`]})]})}function l(e={}){let{wrapper:t}=e.components||{};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}export{a as _markdown,l as default,r as frontmatter,i as lastModified,o as structuredData,s as toc};