import{r as e}from"./rolldown-runtime-QTnfLwEv.js";import{t}from"./jsx-runtime-By8HlURe.js";var n=e(t()),r={title:`KeywordSearchFilter`},i=new Date(1787217967e3),a=`

**Описание:** Фильтр для поиска ключевых слов
Класс предоставляет методы для создания фильтров поиска ключевых слов
по различным критериям: ID, названию, связанным фильмам, датам и т.д.
Используется в KeywordRequests для формирования параметров запроса к API.

**С версии:** 1.0.0

**Версия:** 1.0.0

**См. также:**

* \`\\KinopoiskDev\\Http\\KeywordRequests\`: Для использования фильтра

## \`id()\` [#id]

**Описание:** Добавляет фильтр по ID ключевого слова

**Параметры:**

* \`$id\` (int|array\\<int>): ID ключевого слова или массив ID
* \`$operator\` (string): Оператор сравнения (eq, ne, in, nin)

## \`title()\` [#title]

**Описание:** Добавляет фильтр по названию ключевого слова

**Параметры:**

* \`$title\` (string): Название ключевого слова
* \`$operator\` (string): Оператор сравнения (eq, ne, regex)

## \`movieId()\` [#movieid]

**Описание:** Добавляет фильтр по ID фильма
Находит все ключевые слова, связанные с указанным фильмом.

**Параметры:**

* \`$movieId\` (int|array\\<int>): ID фильма или массив ID фильмов

## \`createdAt()\` [#createdat]

**Описание:** Добавляет фильтр по дате создания

**Параметры:**

* \`$createdAt\` (string): Дата создания в ISO формате
* \`$operator\` (string): Оператор сравнения (eq, ne, gt, gte, lt, lte)

## \`updatedAt()\` [#updatedat]

**Описание:** Добавляет фильтр по дате обновления

**Параметры:**

* \`$updatedAt\` (string): Дата обновления в ISO формате
* \`$operator\` (string): Оператор сравнения (eq, ne, gt, gte, lt, lte)

## \`search()\` [#search]

**Описание:** Поиск ключевых слов по названию с использованием регулярных выражений

**Параметры:**

* \`$query\` (string): Поисковый запрос

## \`onlyPopular()\` [#onlypopular]

**Описание:** Фильтр для популярных ключевых слов (связанных с большим количеством фильмов)
Возвращает ключевые слова, которые встречаются в 10 и более фильмах.

**Параметры:**

* \`$minMovieCount\` (int): Минимальное количество связанных фильмов

## \`recentlyCreated()\` [#recentlycreated]

**Описание:** Фильтр для недавно созданных ключевых слов

**Параметры:**

* \`$daysAgo\` (int): Количество дней назад от текущей даты

## \`recentlyUpdated()\` [#recentlyupdated]

**Описание:** Фильтр для недавно обновленных ключевых слов

**Параметры:**

* \`$daysAgo\` (int): Количество дней назад от текущей даты

## \`createdBetween()\` [#createdbetween]

**Описание:** Фильтр по диапазону дат создания

**Параметры:**

* \`$startDate\` (string): Начальная дата в ISO формате
* \`$endDate\` (string): Конечная дата в ISO формате

## \`updatedBetween()\` [#updatedbetween]

**Описание:** Фильтр по диапазону дат обновления

**Параметры:**

* \`$startDate\` (string): Начальная дата в ISO формате
* \`$endDate\` (string): Конечная дата в ISO формате

## \`selectFields()\` [#selectfields]

**Описание:** Выбор определенных полей для возвращения

**Параметры:**

* \`$fields\` (array\\<string>): Массив названий полей

## \`notNullFields()\` [#notnullfields]

**Описание:** Исключение записей с пустыми значениями в указанных полях

**Параметры:**

* \`$fields\` (array\\<string>): Массив названий полей

## \`sortById()\` [#sortbyid]

**Описание:** Сортировка по ID ключевого слова

**Параметры:**

* \`$direction\` (string): Направление сортировки ('asc' или 'desc')

## \`sortByTitle()\` [#sortbytitle]

**Описание:** Сортировка по названию ключевого слова

**Параметры:**

* \`$direction\` (string): Направление сортировки ('asc' или 'desc')

## \`sortByCreatedAt()\` [#sortbycreatedat]

**Описание:** Сортировка по дате создания

**Параметры:**

* \`$direction\` (string): Направление сортировки ('asc' или 'desc')

## \`sortByUpdatedAt()\` [#sortbyupdatedat]

**Описание:** Сортировка по дате обновления

**Параметры:**

* \`$direction\` (string): Направление сортировки ('asc' или 'desc')

## \`sortByPopularity()\` [#sortbypopularity]

**Описание:** Сортировка по популярности (количеству связанных фильмов)

**Параметры:**

* \`$direction\` (string): Направление сортировки ('desc' для самых популярных)

**Возвращает:** \`static\`

## \`getFilters()\` [#getfilters]

**Описание:** Возвращает массив фильтров

**Возвращает:** \`array<string, mixed>\`

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
`,o={contents:[{heading:void 0,content:`**Описание:** Фильтр для поиска ключевых слов
Класс предоставляет методы для создания фильтров поиска ключевых слов
по различным критериям: ID, названию, связанным фильмам, датам и т.д.
Используется в KeywordRequests для формирования параметров запроса к API.`},{heading:void 0,content:`**С версии:** 1.0.0`},{heading:void 0,content:`**Версия:** 1.0.0`},{heading:void 0,content:`**См. также:**`},{heading:void 0,content:"`\\KinopoiskDev\\Http\\KeywordRequests`: Для использования фильтра"},{heading:`id`,content:`**Описание:** Добавляет фильтр по ID ключевого слова`},{heading:`id`,content:`**Параметры:**`},{heading:`id`,content:"`$id` (int|array\\<int>): ID ключевого слова или массив ID"},{heading:`id`,content:"`$operator` (string): Оператор сравнения (eq, ne, in, nin)"},{heading:`title`,content:`**Описание:** Добавляет фильтр по названию ключевого слова`},{heading:`title`,content:`**Параметры:**`},{heading:`title`,content:"`$title` (string): Название ключевого слова"},{heading:`title`,content:"`$operator` (string): Оператор сравнения (eq, ne, regex)"},{heading:`movieid`,content:`**Описание:** Добавляет фильтр по ID фильма
Находит все ключевые слова, связанные с указанным фильмом.`},{heading:`movieid`,content:`**Параметры:**`},{heading:`movieid`,content:"`$movieId` (int|array\\<int>): ID фильма или массив ID фильмов"},{heading:`createdat`,content:`**Описание:** Добавляет фильтр по дате создания`},{heading:`createdat`,content:`**Параметры:**`},{heading:`createdat`,content:"`$createdAt` (string): Дата создания в ISO формате"},{heading:`createdat`,content:"`$operator` (string): Оператор сравнения (eq, ne, gt, gte, lt, lte)"},{heading:`updatedat`,content:`**Описание:** Добавляет фильтр по дате обновления`},{heading:`updatedat`,content:`**Параметры:**`},{heading:`updatedat`,content:"`$updatedAt` (string): Дата обновления в ISO формате"},{heading:`updatedat`,content:"`$operator` (string): Оператор сравнения (eq, ne, gt, gte, lt, lte)"},{heading:`search`,content:`**Описание:** Поиск ключевых слов по названию с использованием регулярных выражений`},{heading:`search`,content:`**Параметры:**`},{heading:`search`,content:"`$query` (string): Поисковый запрос"},{heading:`onlypopular`,content:`**Описание:** Фильтр для популярных ключевых слов (связанных с большим количеством фильмов)
Возвращает ключевые слова, которые встречаются в 10 и более фильмах.`},{heading:`onlypopular`,content:`**Параметры:**`},{heading:`onlypopular`,content:"`$minMovieCount` (int): Минимальное количество связанных фильмов"},{heading:`recentlycreated`,content:`**Описание:** Фильтр для недавно созданных ключевых слов`},{heading:`recentlycreated`,content:`**Параметры:**`},{heading:`recentlycreated`,content:"`$daysAgo` (int): Количество дней назад от текущей даты"},{heading:`recentlyupdated`,content:`**Описание:** Фильтр для недавно обновленных ключевых слов`},{heading:`recentlyupdated`,content:`**Параметры:**`},{heading:`recentlyupdated`,content:"`$daysAgo` (int): Количество дней назад от текущей даты"},{heading:`createdbetween`,content:`**Описание:** Фильтр по диапазону дат создания`},{heading:`createdbetween`,content:`**Параметры:**`},{heading:`createdbetween`,content:"`$startDate` (string): Начальная дата в ISO формате"},{heading:`createdbetween`,content:"`$endDate` (string): Конечная дата в ISO формате"},{heading:`updatedbetween`,content:`**Описание:** Фильтр по диапазону дат обновления`},{heading:`updatedbetween`,content:`**Параметры:**`},{heading:`updatedbetween`,content:"`$startDate` (string): Начальная дата в ISO формате"},{heading:`updatedbetween`,content:"`$endDate` (string): Конечная дата в ISO формате"},{heading:`selectfields`,content:`**Описание:** Выбор определенных полей для возвращения`},{heading:`selectfields`,content:`**Параметры:**`},{heading:`selectfields`,content:"`$fields` (array\\<string>): Массив названий полей"},{heading:`notnullfields`,content:`**Описание:** Исключение записей с пустыми значениями в указанных полях`},{heading:`notnullfields`,content:`**Параметры:**`},{heading:`notnullfields`,content:"`$fields` (array\\<string>): Массив названий полей"},{heading:`sortbyid`,content:`**Описание:** Сортировка по ID ключевого слова`},{heading:`sortbyid`,content:`**Параметры:**`},{heading:`sortbyid`,content:"`$direction` (string): Направление сортировки ('asc' или 'desc')"},{heading:`sortbytitle`,content:`**Описание:** Сортировка по названию ключевого слова`},{heading:`sortbytitle`,content:`**Параметры:**`},{heading:`sortbytitle`,content:"`$direction` (string): Направление сортировки ('asc' или 'desc')"},{heading:`sortbycreatedat`,content:`**Описание:** Сортировка по дате создания`},{heading:`sortbycreatedat`,content:`**Параметры:**`},{heading:`sortbycreatedat`,content:"`$direction` (string): Направление сортировки ('asc' или 'desc')"},{heading:`sortbyupdatedat`,content:`**Описание:** Сортировка по дате обновления`},{heading:`sortbyupdatedat`,content:`**Параметры:**`},{heading:`sortbyupdatedat`,content:"`$direction` (string): Направление сортировки ('asc' или 'desc')"},{heading:`sortbypopularity`,content:`**Описание:** Сортировка по популярности (количеству связанных фильмов)`},{heading:`sortbypopularity`,content:`**Параметры:**`},{heading:`sortbypopularity`,content:"`$direction` (string): Направление сортировки ('desc' для самых популярных)"},{heading:`sortbypopularity`,content:"**Возвращает:** `static`"},{heading:`getfilters`,content:`**Описание:** Возвращает массив фильтров`},{heading:`getfilters`,content:"**Возвращает:** `array<string, mixed>`"},{heading:`name`,content:`**Описание:** Добавляет фильтр по названию`},{heading:`name`,content:`**Параметры:**`},{heading:`name`,content:"`$name` (string): Название"},{heading:`name`,content:"`$operator` (string): Оператор сравнения"},{heading:`enname`,content:`**Описание:** Добавляет фильтр по английскому названию`},{heading:`enname`,content:`**Параметры:**`},{heading:`enname`,content:"`$enName` (string): Английское название"},{heading:`enname`,content:"`$operator` (string): Оператор сравнения"},{heading:`type`,content:`**Описание:** Добавляет фильтр по типу`},{heading:`type`,content:`**Параметры:**`},{heading:`type`,content:"`$type` (string|\\KinopoiskDev\\Enums\\ReviewType): Тип"},{heading:`type`,content:"`$operator` (string): Оператор сравнения"},{heading:`type`,content:"**Возвращает:** `\\KinopoiskDev\\Filter\\MovieSearchFilter|\\KinopoiskDev\\Filter\\ImageSearchFilter|\\KinopoiskDev\\Filter\\KeywordSearchFilter|\\KinopoiskDev\\Filter\\PersonSearchFilter|\\KinopoiskDev\\Filter\\ReviewSearchFilter|\\KinopoiskDev\\Filter\\SeasonSearchFilter|\\KinopoiskDev\\Filter\\StudioSearchFilter|\\KinopoiskDev\\Utils\\FilterTrait`"},{heading:`searchbyname`,content:`**Описание:** Добавляет поисковый фильтр по названию с использованием регулярных выражений`},{heading:`searchbyname`,content:`**Параметры:**`},{heading:`searchbyname`,content:"`$query` (string): Поисковый запрос"},{heading:`searchbyenname`,content:`**Описание:** Добавляет поисковый фильтр по английскому названию с использованием регулярных выражений`},{heading:`searchbyenname`,content:`**Параметры:**`},{heading:`searchbyenname`,content:"`$query` (string): Поисковый запрос"},{heading:`searchbydescription`,content:`**Описание:** Добавляет поисковый фильтр по описанию с использованием регулярных выражений`},{heading:`searchbydescription`,content:`**Параметры:**`},{heading:`searchbydescription`,content:"`$query` (string): Поисковый запрос"},{heading:`withminrating`,content:`**Описание:** Добавляет фильтр по минимальному рейтингу`},{heading:`withminrating`,content:`**Параметры:**`},{heading:`withminrating`,content:"`$minRating` (float): Минимальный рейтинг"},{heading:`withminrating`,content:"`$field` (string): Поле рейтинга (kp, imdb и т.д.)"},{heading:`withmaxrating`,content:`**Описание:** Добавляет фильтр по максимальному рейтингу`},{heading:`withmaxrating`,content:`**Параметры:**`},{heading:`withmaxrating`,content:"`$maxRating` (float): Максимальный рейтинг"},{heading:`withmaxrating`,content:"`$field` (string): Поле рейтинга (kp, imdb и т.д.)"},{heading:`withratingbetween`,content:`**Описание:** Добавляет фильтр по диапазону рейтинга`},{heading:`withratingbetween`,content:`**Параметры:**`},{heading:`withratingbetween`,content:"`$minRating` (float): Минимальный рейтинг"},{heading:`withratingbetween`,content:"`$maxRating` (float): Максимальный рейтинг"},{heading:`withratingbetween`,content:"`$field` (string): Поле рейтинга (kp, imdb и т.д.)"},{heading:`addrangefilter`,content:`**Описание:** Добавляет фильтр по диапазону`},{heading:`addrangefilter`,content:`**Параметры:**`},{heading:`addrangefilter`,content:"`$field` (string): Имя поля"},{heading:`addrangefilter`,content:"`$minValue` (int): Минимальное значение"},{heading:`addrangefilter`,content:"`$maxValue` (int): Максимальное значение"},{heading:`seasonrange`,content:`**Описание:** Добавляет фильтр по диапазону сезонов`},{heading:`seasonrange`,content:`**Параметры:**`},{heading:`seasonrange`,content:"`$fromSeason` (int): Начальный сезон"},{heading:`seasonrange`,content:"`$toSeason` (int): Конечный сезон"},{heading:`agerange`,content:`**Описание:** Добавляет фильтр по возрастному диапазону`},{heading:`agerange`,content:`**Параметры:**`},{heading:`agerange`,content:"`$minAge` (int): Минимальный возраст"},{heading:`agerange`,content:"`$maxAge` (int): Максимальный возраст"}],headings:[{id:`id`,content:"`id()`"},{id:`title`,content:"`title()`"},{id:`movieid`,content:"`movieId()`"},{id:`createdat`,content:"`createdAt()`"},{id:`updatedat`,content:"`updatedAt()`"},{id:`search`,content:"`search()`"},{id:`onlypopular`,content:"`onlyPopular()`"},{id:`recentlycreated`,content:"`recentlyCreated()`"},{id:`recentlyupdated`,content:"`recentlyUpdated()`"},{id:`createdbetween`,content:"`createdBetween()`"},{id:`updatedbetween`,content:"`updatedBetween()`"},{id:`selectfields`,content:"`selectFields()`"},{id:`notnullfields`,content:"`notNullFields()`"},{id:`sortbyid`,content:"`sortById()`"},{id:`sortbytitle`,content:"`sortByTitle()`"},{id:`sortbycreatedat`,content:"`sortByCreatedAt()`"},{id:`sortbyupdatedat`,content:"`sortByUpdatedAt()`"},{id:`sortbypopularity`,content:"`sortByPopularity()`"},{id:`getfilters`,content:"`getFilters()`"},{id:`name`,content:"`name()`"},{id:`enname`,content:"`enName()`"},{id:`type`,content:"`type()`"},{id:`searchbyname`,content:"`searchByName()`"},{id:`searchbyenname`,content:"`searchByEnName()`"},{id:`searchbydescription`,content:"`searchByDescription()`"},{id:`withminrating`,content:"`withMinRating()`"},{id:`withmaxrating`,content:"`withMaxRating()`"},{id:`withratingbetween`,content:"`withRatingBetween()`"},{id:`addrangefilter`,content:"`addRangeFilter()`"},{id:`seasonrange`,content:"`seasonRange()`"},{id:`agerange`,content:"`ageRange()`"}]},s=[{depth:2,url:`#id`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`id()`})})},{depth:2,url:`#title`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`title()`})})},{depth:2,url:`#movieid`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`movieId()`})})},{depth:2,url:`#createdat`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`createdAt()`})})},{depth:2,url:`#updatedat`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`updatedAt()`})})},{depth:2,url:`#search`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`search()`})})},{depth:2,url:`#onlypopular`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`onlyPopular()`})})},{depth:2,url:`#recentlycreated`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`recentlyCreated()`})})},{depth:2,url:`#recentlyupdated`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`recentlyUpdated()`})})},{depth:2,url:`#createdbetween`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`createdBetween()`})})},{depth:2,url:`#updatedbetween`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`updatedBetween()`})})},{depth:2,url:`#selectfields`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`selectFields()`})})},{depth:2,url:`#notnullfields`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`notNullFields()`})})},{depth:2,url:`#sortbyid`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`sortById()`})})},{depth:2,url:`#sortbytitle`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`sortByTitle()`})})},{depth:2,url:`#sortbycreatedat`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`sortByCreatedAt()`})})},{depth:2,url:`#sortbyupdatedat`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`sortByUpdatedAt()`})})},{depth:2,url:`#sortbypopularity`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`sortByPopularity()`})})},{depth:2,url:`#getfilters`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`getFilters()`})})},{depth:2,url:`#name`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`name()`})})},{depth:2,url:`#enname`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`enName()`})})},{depth:2,url:`#type`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`type()`})})},{depth:2,url:`#searchbyname`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`searchByName()`})})},{depth:2,url:`#searchbyenname`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`searchByEnName()`})})},{depth:2,url:`#searchbydescription`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`searchByDescription()`})})},{depth:2,url:`#withminrating`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`withMinRating()`})})},{depth:2,url:`#withmaxrating`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`withMaxRating()`})})},{depth:2,url:`#withratingbetween`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`withRatingBetween()`})})},{depth:2,url:`#addrangefilter`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`addRangeFilter()`})})},{depth:2,url:`#seasonrange`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`seasonRange()`})})},{depth:2,url:`#agerange`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`ageRange()`})})}];function c(e){let t={code:`code`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Фильтр для поиска ключевых слов
Класс предоставляет методы для создания фильтров поиска ключевых слов
по различным критериям: ID, названию, связанным фильмам, датам и т.д.
Используется в KeywordRequests для формирования параметров запроса к API.`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 1.0.0`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Версия:`}),` 1.0.0`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`См. также:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`\\KinopoiskDev\\Http\\KeywordRequests`}),`: Для использования фильтра`]}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`id`,children:(0,n.jsx)(t.code,{children:`id()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Добавляет фильтр по ID ключевого слова`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$id`}),` (int|array<int>): ID ключевого слова или массив ID`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$operator`}),` (string): Оператор сравнения (eq, ne, in, nin)`]}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`title`,children:(0,n.jsx)(t.code,{children:`title()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Добавляет фильтр по названию ключевого слова`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$title`}),` (string): Название ключевого слова`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$operator`}),` (string): Оператор сравнения (eq, ne, regex)`]}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`movieid`,children:(0,n.jsx)(t.code,{children:`movieId()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Добавляет фильтр по ID фильма
Находит все ключевые слова, связанные с указанным фильмом.`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$movieId`}),` (int|array<int>): ID фильма или массив ID фильмов`]}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`createdat`,children:(0,n.jsx)(t.code,{children:`createdAt()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Добавляет фильтр по дате создания`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$createdAt`}),` (string): Дата создания в ISO формате`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$operator`}),` (string): Оператор сравнения (eq, ne, gt, gte, lt, lte)`]}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`updatedat`,children:(0,n.jsx)(t.code,{children:`updatedAt()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Добавляет фильтр по дате обновления`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$updatedAt`}),` (string): Дата обновления в ISO формате`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$operator`}),` (string): Оператор сравнения (eq, ne, gt, gte, lt, lte)`]}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`search`,children:(0,n.jsx)(t.code,{children:`search()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Поиск ключевых слов по названию с использованием регулярных выражений`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$query`}),` (string): Поисковый запрос`]}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`onlypopular`,children:(0,n.jsx)(t.code,{children:`onlyPopular()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Фильтр для популярных ключевых слов (связанных с большим количеством фильмов)
Возвращает ключевые слова, которые встречаются в 10 и более фильмах.`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$minMovieCount`}),` (int): Минимальное количество связанных фильмов`]}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`recentlycreated`,children:(0,n.jsx)(t.code,{children:`recentlyCreated()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Фильтр для недавно созданных ключевых слов`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$daysAgo`}),` (int): Количество дней назад от текущей даты`]}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`recentlyupdated`,children:(0,n.jsx)(t.code,{children:`recentlyUpdated()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Фильтр для недавно обновленных ключевых слов`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$daysAgo`}),` (int): Количество дней назад от текущей даты`]}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`createdbetween`,children:(0,n.jsx)(t.code,{children:`createdBetween()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Фильтр по диапазону дат создания`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$startDate`}),` (string): Начальная дата в ISO формате`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$endDate`}),` (string): Конечная дата в ISO формате`]}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`updatedbetween`,children:(0,n.jsx)(t.code,{children:`updatedBetween()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Фильтр по диапазону дат обновления`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$startDate`}),` (string): Начальная дата в ISO формате`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$endDate`}),` (string): Конечная дата в ISO формате`]}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`selectfields`,children:(0,n.jsx)(t.code,{children:`selectFields()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Выбор определенных полей для возвращения`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$fields`}),` (array<string>): Массив названий полей`]}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`notnullfields`,children:(0,n.jsx)(t.code,{children:`notNullFields()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Исключение записей с пустыми значениями в указанных полях`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$fields`}),` (array<string>): Массив названий полей`]}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`sortbyid`,children:(0,n.jsx)(t.code,{children:`sortById()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Сортировка по ID ключевого слова`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$direction`}),` (string): Направление сортировки ('asc' или 'desc')`]}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`sortbytitle`,children:(0,n.jsx)(t.code,{children:`sortByTitle()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Сортировка по названию ключевого слова`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$direction`}),` (string): Направление сортировки ('asc' или 'desc')`]}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`sortbycreatedat`,children:(0,n.jsx)(t.code,{children:`sortByCreatedAt()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Сортировка по дате создания`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$direction`}),` (string): Направление сортировки ('asc' или 'desc')`]}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`sortbyupdatedat`,children:(0,n.jsx)(t.code,{children:`sortByUpdatedAt()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Сортировка по дате обновления`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$direction`}),` (string): Направление сортировки ('asc' или 'desc')`]}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`sortbypopularity`,children:(0,n.jsx)(t.code,{children:`sortByPopularity()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Сортировка по популярности (количеству связанных фильмов)`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$direction`}),` (string): Направление сортировки ('desc' для самых популярных)`]}),`
`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`static`})]}),`
`,(0,n.jsx)(t.h2,{id:`getfilters`,children:(0,n.jsx)(t.code,{children:`getFilters()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Возвращает массив фильтров`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`array<string, mixed>`})]}),`
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