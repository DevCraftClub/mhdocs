import{r as e}from"./rolldown-runtime-QTnfLwEv.js";import{t}from"./jsx-runtime-By8HlURe.js";var n=e(t()),r={title:`MovieSearchFilter`},i=new Date(1787213191e3),a=`

**Описание:** Класс для создания фильтров при поиске фильмов
Этот класс расширяет базовый MovieFilter и предоставляет
дополнительные методы для поиска фильмов

**Ссылка:** [https://kinopoiskdev.readme.io/reference/moviecontroller\\_findmanybyqueryv1\\_4](https://kinopoiskdev.readme.io/reference/moviecontroller_findmanybyqueryv1_4)

## \`searchByAlternativeName()\` [#searchbyalternativename]

**Описание:** Добавляет фильтр для поиска по альтернативному названию с использованием регулярного выражения

**Параметры:**

* \`$query\` (string): Поисковый запрос

## \`searchByAllNames()\` [#searchbyallnames]

**Описание:** Добавляет фильтр для поиска по всем названиям фильма

**Параметры:**

* \`$query\` (string): Поисковый запрос

## \`withMinVotes()\` [#withminvotes]

**Описание:** Добавляет фильтр для поиска фильмов с количеством голосов выше указанного

**Параметры:**

* \`$minVotes\` (int): Минимальное количество голосов
* \`$field\` (string): Поле голосов (kp, imdb, tmdb, filmCritics, russianFilmCritics, await)

## \`withVotesBetween()\` [#withvotesbetween]

**Описание:** Добавляет фильтр для поиска фильмов в диапазоне голосов

**Параметры:**

* \`$minVotes\` (int): Минимальное количество голосов
* \`$maxVotes\` (int): Максимальное количество голосов
* \`$field\` (string): Поле голосов (kp, imdb, tmdb, filmCritics, russianFilmCritics, await)

## \`withYearBetween()\` [#withyearbetween]

**Описание:** Добавляет фильтр для поиска фильмов в диапазоне годов

**Параметры:**

* \`$fromYear\` (int): Начальный год
* \`$toYear\` (int): Конечный год

## \`withAllGenres()\` [#withallgenres]

**Описание:** Добавляет фильтр для поиска фильмов по нескольким жанрам (И)

**Параметры:**

* \`$genres\` (array\\<string>): Массив жанров

## \`withIncludedGenres()\` [#withincludedgenres]

**Описание:** Добавляет фильтр для включения жанров (оператор +)

**Параметры:**

* \`$genres\` (string|array\\<string>): Жанр или массив жанров для включения

## \`withExcludedGenres()\` [#withexcludedgenres]

**Описание:** Добавляет фильтр для исключения жанров (оператор !)

**Параметры:**

* \`$genres\` (string|array\\<string>): Жанр или массив жанров для исключения

## \`withAllCountries()\` [#withallcountries]

**Описание:** Добавляет фильтр для поиска фильмов по нескольким странам (И)

**Параметры:**

* \`$countries\` (array\\<string>): Массив стран

## \`withIncludedCountries()\` [#withincludedcountries]

**Описание:** Добавляет фильтр для включения стран (оператор +)

**Параметры:**

* \`$countries\` (string|array\\<string>): Страна или массив стран для включения

## \`withExcludedCountries()\` [#withexcludedcountries]

**Описание:** Добавляет фильтр для исключения стран (оператор !)

**Параметры:**

* \`$countries\` (string|array\\<string>): Страна или массив стран для исключения

## \`withActor()\` [#withactor]

**Описание:** Добавляет фильтр для поиска фильмов с участием указанного актера

**Параметры:**

* \`$actor\` (string|int): Имя актера или его ID

## \`withDirector()\` [#withdirector]

**Описание:** Добавляет фильтр для поиска фильмов указанного режиссера

**Параметры:**

* \`$director\` (string|int): Имя режиссера или его ID

## \`onlyMovies()\` [#onlymovies]

**Описание:** Добавляет фильтр для поиска только фильмов (не сериалов)

## \`onlySeries()\` [#onlyseries]

**Описание:** Добавляет фильтр для поиска только сериалов

## \`inTop250()\` [#intop250]

**Описание:** Добавляет фильтр для поиска фильмов из топ-250

## \`inTop10()\` [#intop10]

**Описание:** Добавляет фильтр для поиска фильмов из топ-10

## \`withPremiereRange()\` [#withpremiererange]

**Описание:** Добавляет фильтр по диапазону дат премьеры

**Параметры:**

* \`$fromDate\` (string): Начальная дата в формате dd.mm.yyyy
* \`$toDate\` (string): Конечная дата в формате dd.mm.yyyy
* \`$country\` (string): Страна премьеры (russia, world, usa, ...)

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

## \`movieId()\` [#movieid]

**Описание:** Добавляет фильтр по ID фильма

**Параметры:**

* \`$movieId\` (int): ID фильма

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
`,o={contents:[{heading:void 0,content:`**Описание:** Класс для создания фильтров при поиске фильмов
Этот класс расширяет базовый MovieFilter и предоставляет
дополнительные методы для поиска фильмов`},{heading:void 0,content:`**Ссылка:** https\\://kinopoiskdev.readme.io/reference/moviecontroller\\_findmanybyqueryv1\\_4`},{heading:`searchbyalternativename`,content:`**Описание:** Добавляет фильтр для поиска по альтернативному названию с использованием регулярного выражения`},{heading:`searchbyalternativename`,content:`**Параметры:**`},{heading:`searchbyalternativename`,content:"`$query` (string): Поисковый запрос"},{heading:`searchbyallnames`,content:`**Описание:** Добавляет фильтр для поиска по всем названиям фильма`},{heading:`searchbyallnames`,content:`**Параметры:**`},{heading:`searchbyallnames`,content:"`$query` (string): Поисковый запрос"},{heading:`withminvotes`,content:`**Описание:** Добавляет фильтр для поиска фильмов с количеством голосов выше указанного`},{heading:`withminvotes`,content:`**Параметры:**`},{heading:`withminvotes`,content:"`$minVotes` (int): Минимальное количество голосов"},{heading:`withminvotes`,content:"`$field` (string): Поле голосов (kp, imdb, tmdb, filmCritics, russianFilmCritics, await)"},{heading:`withvotesbetween`,content:`**Описание:** Добавляет фильтр для поиска фильмов в диапазоне голосов`},{heading:`withvotesbetween`,content:`**Параметры:**`},{heading:`withvotesbetween`,content:"`$minVotes` (int): Минимальное количество голосов"},{heading:`withvotesbetween`,content:"`$maxVotes` (int): Максимальное количество голосов"},{heading:`withvotesbetween`,content:"`$field` (string): Поле голосов (kp, imdb, tmdb, filmCritics, russianFilmCritics, await)"},{heading:`withyearbetween`,content:`**Описание:** Добавляет фильтр для поиска фильмов в диапазоне годов`},{heading:`withyearbetween`,content:`**Параметры:**`},{heading:`withyearbetween`,content:"`$fromYear` (int): Начальный год"},{heading:`withyearbetween`,content:"`$toYear` (int): Конечный год"},{heading:`withallgenres`,content:`**Описание:** Добавляет фильтр для поиска фильмов по нескольким жанрам (И)`},{heading:`withallgenres`,content:`**Параметры:**`},{heading:`withallgenres`,content:"`$genres` (array\\<string>): Массив жанров"},{heading:`withincludedgenres`,content:`**Описание:** Добавляет фильтр для включения жанров (оператор +)`},{heading:`withincludedgenres`,content:`**Параметры:**`},{heading:`withincludedgenres`,content:"`$genres` (string|array\\<string>): Жанр или массив жанров для включения"},{heading:`withexcludedgenres`,content:`**Описание:** Добавляет фильтр для исключения жанров (оператор !)`},{heading:`withexcludedgenres`,content:`**Параметры:**`},{heading:`withexcludedgenres`,content:"`$genres` (string|array\\<string>): Жанр или массив жанров для исключения"},{heading:`withallcountries`,content:`**Описание:** Добавляет фильтр для поиска фильмов по нескольким странам (И)`},{heading:`withallcountries`,content:`**Параметры:**`},{heading:`withallcountries`,content:"`$countries` (array\\<string>): Массив стран"},{heading:`withincludedcountries`,content:`**Описание:** Добавляет фильтр для включения стран (оператор +)`},{heading:`withincludedcountries`,content:`**Параметры:**`},{heading:`withincludedcountries`,content:"`$countries` (string|array\\<string>): Страна или массив стран для включения"},{heading:`withexcludedcountries`,content:`**Описание:** Добавляет фильтр для исключения стран (оператор !)`},{heading:`withexcludedcountries`,content:`**Параметры:**`},{heading:`withexcludedcountries`,content:"`$countries` (string|array\\<string>): Страна или массив стран для исключения"},{heading:`withactor`,content:`**Описание:** Добавляет фильтр для поиска фильмов с участием указанного актера`},{heading:`withactor`,content:`**Параметры:**`},{heading:`withactor`,content:"`$actor` (string|int): Имя актера или его ID"},{heading:`withdirector`,content:`**Описание:** Добавляет фильтр для поиска фильмов указанного режиссера`},{heading:`withdirector`,content:`**Параметры:**`},{heading:`withdirector`,content:"`$director` (string|int): Имя режиссера или его ID"},{heading:`onlymovies`,content:`**Описание:** Добавляет фильтр для поиска только фильмов (не сериалов)`},{heading:`onlyseries`,content:`**Описание:** Добавляет фильтр для поиска только сериалов`},{heading:`intop250`,content:`**Описание:** Добавляет фильтр для поиска фильмов из топ-250`},{heading:`intop10`,content:`**Описание:** Добавляет фильтр для поиска фильмов из топ-10`},{heading:`withpremiererange`,content:`**Описание:** Добавляет фильтр по диапазону дат премьеры`},{heading:`withpremiererange`,content:`**Параметры:**`},{heading:`withpremiererange`,content:"`$fromDate` (string): Начальная дата в формате dd.mm.yyyy"},{heading:`withpremiererange`,content:"`$toDate` (string): Конечная дата в формате dd.mm.yyyy"},{heading:`withpremiererange`,content:"`$country` (string): Страна премьеры (russia, world, usa, ...)"},{heading:`name`,content:`**Описание:** Добавляет фильтр по названию`},{heading:`name`,content:`**Параметры:**`},{heading:`name`,content:"`$name` (string): Название"},{heading:`name`,content:"`$operator` (string): Оператор сравнения"},{heading:`enname`,content:`**Описание:** Добавляет фильтр по английскому названию`},{heading:`enname`,content:`**Параметры:**`},{heading:`enname`,content:"`$enName` (string): Английское название"},{heading:`enname`,content:"`$operator` (string): Оператор сравнения"},{heading:`type`,content:`**Описание:** Добавляет фильтр по типу`},{heading:`type`,content:`**Параметры:**`},{heading:`type`,content:"`$type` (string|\\KinopoiskDev\\Enums\\ReviewType): Тип"},{heading:`type`,content:"`$operator` (string): Оператор сравнения"},{heading:`type`,content:"**Возвращает:** `\\KinopoiskDev\\Filter\\MovieSearchFilter|\\KinopoiskDev\\Filter\\ImageSearchFilter|\\KinopoiskDev\\Filter\\KeywordSearchFilter|\\KinopoiskDev\\Filter\\PersonSearchFilter|\\KinopoiskDev\\Filter\\ReviewSearchFilter|\\KinopoiskDev\\Filter\\SeasonSearchFilter|\\KinopoiskDev\\Filter\\StudioSearchFilter|\\KinopoiskDev\\Utils\\FilterTrait`"},{heading:`movieid`,content:`**Описание:** Добавляет фильтр по ID фильма`},{heading:`movieid`,content:`**Параметры:**`},{heading:`movieid`,content:"`$movieId` (int): ID фильма"},{heading:`searchbyname`,content:`**Описание:** Добавляет поисковый фильтр по названию с использованием регулярных выражений`},{heading:`searchbyname`,content:`**Параметры:**`},{heading:`searchbyname`,content:"`$query` (string): Поисковый запрос"},{heading:`searchbyenname`,content:`**Описание:** Добавляет поисковый фильтр по английскому названию с использованием регулярных выражений`},{heading:`searchbyenname`,content:`**Параметры:**`},{heading:`searchbyenname`,content:"`$query` (string): Поисковый запрос"},{heading:`searchbydescription`,content:`**Описание:** Добавляет поисковый фильтр по описанию с использованием регулярных выражений`},{heading:`searchbydescription`,content:`**Параметры:**`},{heading:`searchbydescription`,content:"`$query` (string): Поисковый запрос"},{heading:`withminrating`,content:`**Описание:** Добавляет фильтр по минимальному рейтингу`},{heading:`withminrating`,content:`**Параметры:**`},{heading:`withminrating`,content:"`$minRating` (float): Минимальный рейтинг"},{heading:`withminrating`,content:"`$field` (string): Поле рейтинга (kp, imdb и т.д.)"},{heading:`withmaxrating`,content:`**Описание:** Добавляет фильтр по максимальному рейтингу`},{heading:`withmaxrating`,content:`**Параметры:**`},{heading:`withmaxrating`,content:"`$maxRating` (float): Максимальный рейтинг"},{heading:`withmaxrating`,content:"`$field` (string): Поле рейтинга (kp, imdb и т.д.)"},{heading:`withratingbetween`,content:`**Описание:** Добавляет фильтр по диапазону рейтинга`},{heading:`withratingbetween`,content:`**Параметры:**`},{heading:`withratingbetween`,content:"`$minRating` (float): Минимальный рейтинг"},{heading:`withratingbetween`,content:"`$maxRating` (float): Максимальный рейтинг"},{heading:`withratingbetween`,content:"`$field` (string): Поле рейтинга (kp, imdb и т.д.)"},{heading:`addrangefilter`,content:`**Описание:** Добавляет фильтр по диапазону`},{heading:`addrangefilter`,content:`**Параметры:**`},{heading:`addrangefilter`,content:"`$field` (string): Имя поля"},{heading:`addrangefilter`,content:"`$minValue` (int): Минимальное значение"},{heading:`addrangefilter`,content:"`$maxValue` (int): Максимальное значение"},{heading:`seasonrange`,content:`**Описание:** Добавляет фильтр по диапазону сезонов`},{heading:`seasonrange`,content:`**Параметры:**`},{heading:`seasonrange`,content:"`$fromSeason` (int): Начальный сезон"},{heading:`seasonrange`,content:"`$toSeason` (int): Конечный сезон"},{heading:`agerange`,content:`**Описание:** Добавляет фильтр по возрастному диапазону`},{heading:`agerange`,content:`**Параметры:**`},{heading:`agerange`,content:"`$minAge` (int): Минимальный возраст"},{heading:`agerange`,content:"`$maxAge` (int): Максимальный возраст"}],headings:[{id:`searchbyalternativename`,content:"`searchByAlternativeName()`"},{id:`searchbyallnames`,content:"`searchByAllNames()`"},{id:`withminvotes`,content:"`withMinVotes()`"},{id:`withvotesbetween`,content:"`withVotesBetween()`"},{id:`withyearbetween`,content:"`withYearBetween()`"},{id:`withallgenres`,content:"`withAllGenres()`"},{id:`withincludedgenres`,content:"`withIncludedGenres()`"},{id:`withexcludedgenres`,content:"`withExcludedGenres()`"},{id:`withallcountries`,content:"`withAllCountries()`"},{id:`withincludedcountries`,content:"`withIncludedCountries()`"},{id:`withexcludedcountries`,content:"`withExcludedCountries()`"},{id:`withactor`,content:"`withActor()`"},{id:`withdirector`,content:"`withDirector()`"},{id:`onlymovies`,content:"`onlyMovies()`"},{id:`onlyseries`,content:"`onlySeries()`"},{id:`intop250`,content:"`inTop250()`"},{id:`intop10`,content:"`inTop10()`"},{id:`withpremiererange`,content:"`withPremiereRange()`"},{id:`name`,content:"`name()`"},{id:`enname`,content:"`enName()`"},{id:`type`,content:"`type()`"},{id:`movieid`,content:"`movieId()`"},{id:`searchbyname`,content:"`searchByName()`"},{id:`searchbyenname`,content:"`searchByEnName()`"},{id:`searchbydescription`,content:"`searchByDescription()`"},{id:`withminrating`,content:"`withMinRating()`"},{id:`withmaxrating`,content:"`withMaxRating()`"},{id:`withratingbetween`,content:"`withRatingBetween()`"},{id:`addrangefilter`,content:"`addRangeFilter()`"},{id:`seasonrange`,content:"`seasonRange()`"},{id:`agerange`,content:"`ageRange()`"}]},s=[{depth:2,url:`#searchbyalternativename`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`searchByAlternativeName()`})})},{depth:2,url:`#searchbyallnames`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`searchByAllNames()`})})},{depth:2,url:`#withminvotes`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`withMinVotes()`})})},{depth:2,url:`#withvotesbetween`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`withVotesBetween()`})})},{depth:2,url:`#withyearbetween`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`withYearBetween()`})})},{depth:2,url:`#withallgenres`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`withAllGenres()`})})},{depth:2,url:`#withincludedgenres`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`withIncludedGenres()`})})},{depth:2,url:`#withexcludedgenres`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`withExcludedGenres()`})})},{depth:2,url:`#withallcountries`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`withAllCountries()`})})},{depth:2,url:`#withincludedcountries`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`withIncludedCountries()`})})},{depth:2,url:`#withexcludedcountries`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`withExcludedCountries()`})})},{depth:2,url:`#withactor`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`withActor()`})})},{depth:2,url:`#withdirector`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`withDirector()`})})},{depth:2,url:`#onlymovies`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`onlyMovies()`})})},{depth:2,url:`#onlyseries`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`onlySeries()`})})},{depth:2,url:`#intop250`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`inTop250()`})})},{depth:2,url:`#intop10`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`inTop10()`})})},{depth:2,url:`#withpremiererange`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`withPremiereRange()`})})},{depth:2,url:`#name`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`name()`})})},{depth:2,url:`#enname`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`enName()`})})},{depth:2,url:`#type`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`type()`})})},{depth:2,url:`#movieid`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`movieId()`})})},{depth:2,url:`#searchbyname`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`searchByName()`})})},{depth:2,url:`#searchbyenname`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`searchByEnName()`})})},{depth:2,url:`#searchbydescription`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`searchByDescription()`})})},{depth:2,url:`#withminrating`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`withMinRating()`})})},{depth:2,url:`#withmaxrating`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`withMaxRating()`})})},{depth:2,url:`#withratingbetween`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`withRatingBetween()`})})},{depth:2,url:`#addrangefilter`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`addRangeFilter()`})})},{depth:2,url:`#seasonrange`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`seasonRange()`})})},{depth:2,url:`#agerange`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`ageRange()`})})}];function c(e){let t={a:`a`,code:`code`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Класс для создания фильтров при поиске фильмов
Этот класс расширяет базовый MovieFilter и предоставляет
дополнительные методы для поиска фильмов`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Ссылка:`}),` `,(0,n.jsx)(t.a,{href:`https://kinopoiskdev.readme.io/reference/moviecontroller_findmanybyqueryv1_4`,children:`https://kinopoiskdev.readme.io/reference/moviecontroller_findmanybyqueryv1_4`})]}),`
`,(0,n.jsx)(t.h2,{id:`searchbyalternativename`,children:(0,n.jsx)(t.code,{children:`searchByAlternativeName()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Добавляет фильтр для поиска по альтернативному названию с использованием регулярного выражения`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$query`}),` (string): Поисковый запрос`]}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`searchbyallnames`,children:(0,n.jsx)(t.code,{children:`searchByAllNames()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Добавляет фильтр для поиска по всем названиям фильма`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$query`}),` (string): Поисковый запрос`]}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`withminvotes`,children:(0,n.jsx)(t.code,{children:`withMinVotes()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Добавляет фильтр для поиска фильмов с количеством голосов выше указанного`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$minVotes`}),` (int): Минимальное количество голосов`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$field`}),` (string): Поле голосов (kp, imdb, tmdb, filmCritics, russianFilmCritics, await)`]}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`withvotesbetween`,children:(0,n.jsx)(t.code,{children:`withVotesBetween()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Добавляет фильтр для поиска фильмов в диапазоне голосов`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$minVotes`}),` (int): Минимальное количество голосов`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$maxVotes`}),` (int): Максимальное количество голосов`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$field`}),` (string): Поле голосов (kp, imdb, tmdb, filmCritics, russianFilmCritics, await)`]}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`withyearbetween`,children:(0,n.jsx)(t.code,{children:`withYearBetween()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Добавляет фильтр для поиска фильмов в диапазоне годов`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$fromYear`}),` (int): Начальный год`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$toYear`}),` (int): Конечный год`]}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`withallgenres`,children:(0,n.jsx)(t.code,{children:`withAllGenres()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Добавляет фильтр для поиска фильмов по нескольким жанрам (И)`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$genres`}),` (array<string>): Массив жанров`]}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`withincludedgenres`,children:(0,n.jsx)(t.code,{children:`withIncludedGenres()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Добавляет фильтр для включения жанров (оператор +)`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$genres`}),` (string|array<string>): Жанр или массив жанров для включения`]}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`withexcludedgenres`,children:(0,n.jsx)(t.code,{children:`withExcludedGenres()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Добавляет фильтр для исключения жанров (оператор !)`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$genres`}),` (string|array<string>): Жанр или массив жанров для исключения`]}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`withallcountries`,children:(0,n.jsx)(t.code,{children:`withAllCountries()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Добавляет фильтр для поиска фильмов по нескольким странам (И)`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$countries`}),` (array<string>): Массив стран`]}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`withincludedcountries`,children:(0,n.jsx)(t.code,{children:`withIncludedCountries()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Добавляет фильтр для включения стран (оператор +)`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$countries`}),` (string|array<string>): Страна или массив стран для включения`]}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`withexcludedcountries`,children:(0,n.jsx)(t.code,{children:`withExcludedCountries()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Добавляет фильтр для исключения стран (оператор !)`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$countries`}),` (string|array<string>): Страна или массив стран для исключения`]}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`withactor`,children:(0,n.jsx)(t.code,{children:`withActor()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Добавляет фильтр для поиска фильмов с участием указанного актера`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$actor`}),` (string|int): Имя актера или его ID`]}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`withdirector`,children:(0,n.jsx)(t.code,{children:`withDirector()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Добавляет фильтр для поиска фильмов указанного режиссера`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$director`}),` (string|int): Имя режиссера или его ID`]}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`onlymovies`,children:(0,n.jsx)(t.code,{children:`onlyMovies()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Добавляет фильтр для поиска только фильмов (не сериалов)`]}),`
`,(0,n.jsx)(t.h2,{id:`onlyseries`,children:(0,n.jsx)(t.code,{children:`onlySeries()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Добавляет фильтр для поиска только сериалов`]}),`
`,(0,n.jsx)(t.h2,{id:`intop250`,children:(0,n.jsx)(t.code,{children:`inTop250()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Добавляет фильтр для поиска фильмов из топ-250`]}),`
`,(0,n.jsx)(t.h2,{id:`intop10`,children:(0,n.jsx)(t.code,{children:`inTop10()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Добавляет фильтр для поиска фильмов из топ-10`]}),`
`,(0,n.jsx)(t.h2,{id:`withpremiererange`,children:(0,n.jsx)(t.code,{children:`withPremiereRange()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Добавляет фильтр по диапазону дат премьеры`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$fromDate`}),` (string): Начальная дата в формате dd.mm.yyyy`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$toDate`}),` (string): Конечная дата в формате dd.mm.yyyy`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$country`}),` (string): Страна премьеры (russia, world, usa, ...)`]}),`
`]}),`
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
`,(0,n.jsx)(t.h2,{id:`movieid`,children:(0,n.jsx)(t.code,{children:`movieId()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Добавляет фильтр по ID фильма`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$movieId`}),` (int): ID фильма`]}),`
`]}),`
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