import{r as e}from"./rolldown-runtime-QTnfLwEv.js";import{t}from"./jsx-runtime-By8HlURe.js";var n=e(t()),r={title:`MovieRequests`},i=new Date(1786951824e3),a=`

**Описание:** Класс для API-запросов, связанных с фильмами
Предоставляет полный набор методов для работы с фильмами через API Kinopoisk.dev.
Включает поиск фильмов, получение детальной информации, наград, случайных фильмов
и возможных значений для фильтрации. Поддерживает расширенную фильтрацию,
пагинацию и обработку ошибок.
Основные возможности:

* Поиск фильмов по различным критериям
* Получение детальной информации о фильме
* Работа с наградами фильмов
* Получение случайных фильмов
* Получение возможных значений для фильтров
* Специализированные методы для популярных запросов

**С версии:** 1.0.0

**Версия:** 1.0.0

**Пример:**

\`\`\`php
$movieRequests = new MovieRequests('your-api-token');
// Получение фильма по ID
$movie = $movieRequests->getMovieById(123);
// Поиск фильмов
$filter = new MovieSearchFilter();
$filter->year(2023)->rating(7.0);
$results = $movieRequests->searchMovies($filter, 1, 20);
// Получение случайного фильма
$randomMovie = $movieRequests->getRandomMovie();
// Получение наград
$awards = $movieRequests->getMovieAwards(null, 1, 50);
\`\`\`

**См. также:**

* \`\\KinopoiskDev\\Filter\\MovieSearchFilter\`: Для настройки фильтрации
* \`\\KinopoiskDev\\Models\\Movie\`: Модель фильма
* \`\\KinopoiskDev\\Models\\MovieAward\`: Модель награды фильма
* \`\\KinopoiskDev\\Responses\\Api\\MovieDocsResponseDto\`: Ответ с фильмами
* \`\\KinopoiskDev\\Responses\\Api\\SearchMovieResponseDto\`: Ответ поиска

## \`getMovieById()\` [#getmoviebyid]

**Описание:** Получает фильм по его ID
Выполняет запрос к API для получения полной информации о фильме
по его уникальному идентификатору. Возвращает объект Movie
со всеми доступными данными: названием, годом, рейтингами,
актерами, режиссерами, описанием и другими метаданными.

**С версии:** 1.0.0

**API Endpoint:** \`/v1.4/movie/{id}\`

**Параметры:**

* \`$movieId\` (int): Уникальный ID фильма в базе данных Kinopoisk

**Возвращает:** \`Movie\` Объект фильма со всеми доступными данными

**Исключения:**

* \`KinopoiskDevException\`: При ошибках API или проблемах с сетью
* \`KinopoiskResponseException\`: При ошибках HTTP-запроса (401, 403, 404)
* \`\\JsonException\`: При ошибках парсинга JSON-ответа

**Пример:**

\`\`\`php
$movie = $movieRequests->getMovieById(123);
echo $movie->name; // Название фильма
echo $movie->year; // Год выпуска
\`\`\`

## \`getRandomMovie()\` [#getrandommovie]

**Описание:** Получает случайный фильм
Возвращает случайно выбранный фильм из базы данных Kinopoisk.
Поддерживает опциональную фильтрацию для получения случайного
фильма, соответствующего определенным критериям (год, жанр,
рейтинг и т.д.).

**С версии:** 1.0.0

**API Endpoint:** \`/v1.4/movie/random\`

**Параметры:**

* \`$filters\` (MovieSearchFilter|null): Опциональные фильтры для ограничения выбора случайного фильма

**Возвращает:** \`Movie\` Случайный фильм, соответствующий переданным фильтрам

**Исключения:**

* \`KinopoiskDevException\`: При ошибках API или валидации
* \`KinopoiskResponseException\`: При ошибках HTTP-запроса
* \`\\JsonException\`: При ошибках парсинга JSON-ответа

**Пример:**

\`\`\`php
// Получить любой случайный фильм
$randomMovie = $movieRequests->getRandomMovie();
// Получить случайный фильм 2023 года с рейтингом выше 7.0
$filter = new MovieSearchFilter();
$filter->year(2023)->rating(7.0);
$randomMovie = $movieRequests->getRandomMovie($filter);
\`\`\`

## \`getPossibleValuesByField()\` [#getpossiblevaluesbyfield]

**Описание:** Получает возможные значения для указанного поля фильтрации
Возвращает список всех возможных значений для определенных полей
фильтрации, таких как жанры, страны, типы фильмов и статусы.
Полезно для создания выпадающих списков или автодополнения
в пользовательских интерфейсах.

**С версии:** 1.0.0

**API Endpoint:** \`/v1.4/movie/possible-values-by-field\`

**Параметры:**

* \`$field\` (string): Поле для получения возможных значений (genres, countries, type, type\\_number, status)

**Возвращает:** \`array<array<string, mixed>>\` Массив возможных значений с полями name и slug

**Исключения:**

* \`KinopoiskDevException\`: При передаче неподдерживаемого поля
* \`KinopoiskResponseException\`: При ошибках HTTP-запроса
* \`\\JsonException\`: При ошибках парсинга JSON-ответа

**Пример:**

\`\`\`php
// Получить все жанры
$genres = $movieRequests->getPossibleValuesByField('genres');
// Получить все страны
$countries = $movieRequests->getPossibleValuesByField('countries');
// Получить типы фильмов
$types = $movieRequests->getPossibleValuesByField('type');
\`\`\`

## \`getMovieAwards()\` [#getmovieawards]

**Описание:** Получает награды фильмов с возможностью фильтрации и пагинации
Выполняет запрос к API Kinopoisk.dev для получения списка наград фильмов
с поддержкой расширенной фильтрации и постраничной навигации.
Автоматически создает объект фильтра при отсутствии переданного параметра.
При значении null создается новый экземпляр MovieSearchFilter без фильтров
250\\)
количество страниц, текущая страница)

**С версии:** 1.0.0

**Версия:** 1.0.0

**API Endpoint:** \`/v1.4/movie/awards\`

**Параметры:**

* \`$filters\` (MovieSearchFilter|null): Объект фильтрации для поиска наград по различным критериям (жанры, страны, годы, рейтинги и т.д.).
* \`$page\` (int): Номер запрашиваемой страницы результатов, начиная с 1 (по умолчанию 1)
* \`$limit\` (int): Максимальное количество результатов на одной странице (по умолчанию 10, максимум ограничен API до

**Возвращает:** \`MovieAwardDocsResponseDto\` Объект ответа, содержащий массив наград фильмов и метаданные пагинации (общее количество,

**Исключения:**

* \`KinopoiskDevException\`: При ошибках валидации данных, неправильных параметрах запроса или проблемах с инициализацией объектов
* \`KinopoiskResponseException\`: При ошибках HTTP-запроса к API (401, 403, 404)
* \`\\JsonException\`: При ошибках парсинга JSON-ответа от API, некорректном формате данных или повреждении ответа

**См. также:**

* \`\\KinopoiskDev\\Filter\\MovieSearchFilter\`: Класс для настройки фильтрации наград
* \`\\KinopoiskDev\\Responses\\Api\\MovieAwardDocsResponseDto\`: Структура ответа API
* \`\\KinopoiskDev\\Models\\MovieAward\`: Модель отдельной награды фильма

## \`searchByName()\` [#searchbyname]

**Описание:** Ищет фильмы только по названию (упрощенный поиск)
Выполняет поиск фильмов по названию с использованием
встроенного поискового движка API. Поддерживает частичное
совпадение и нечеткий поиск. Удобен для быстрого поиска
по названию фильма без сложной фильтрации.

**С версии:** 1.0.0

**API Endpoint:** \`/v1.4/movie/search\`

**Параметры:**

* \`$query\` (string): Поисковый запрос (название фильма)
* \`$page\` (int): Номер страницы результатов (по умолчанию: 1)
* \`$limit\` (int): Количество результатов на странице (по умолчанию: 10)

**Возвращает:** \`SearchMovieResponseDto\` Результаты поиска с пагинацией

**Исключения:**

* \`KinopoiskDevException\`: При ошибках API или валидации
* \`KinopoiskResponseException\`: При ошибках HTTP-запроса
* \`\\JsonException\`: При ошибках парсинга JSON-ответа

**Пример:**

\`\`\`php
// Поиск фильма по названию
$results = $movieRequests->searchByName('Матрица');
// Поиск с пагинацией
$results = $movieRequests->searchByName('Терминатор', 2, 20);
\`\`\`

## \`getLatestMovies()\` [#getlatestmovies]

**Описание:** Получает последние фильмы
Возвращает список последних фильмов, отсортированных по дате
выхода. Поддерживает фильтрацию по году для получения
фильмов конкретного года. Удобен для отображения новинок
или актуального контента.

**С версии:** 1.0.0

**API Endpoint:** \`/v1.4/movie\`

**Параметры:**

* \`$year\` (int|null): Год для фильтрации (по умолчанию: текущий год)
* \`$page\` (int): Номер страницы результатов (по умолчанию: 1)
* \`$limit\` (int): Количество результатов на странице (по умолчанию: 10)

**Возвращает:** \`MovieDocsResponseDto\` Результаты поиска с пагинацией

**Исключения:**

* \`KinopoiskDevException\`: При ошибках API или валидации
* \`KinopoiskResponseException\`: При ошибках HTTP-запроса
* \`\\JsonException\`: При ошибках парсинга JSON-ответа

**Пример:**

\`\`\`php
// Получить последние фильмы текущего года
$latest = $movieRequests->getLatestMovies();
// Получить фильмы 2023 года
$movies2023 = $movieRequests->getLatestMovies(2023, 1, 50);
\`\`\`

## \`getMoviesByGenre()\` [#getmoviesbygenre]

**Описание:** Получает фильмы по жанру
Возвращает список фильмов определенного жанра или жанров,
отсортированных по рейтингу Kinopoisk. Поддерживает как
одиночный жанр, так и массив жанров для более точной
фильтрации.

**С версии:** 1.0.0

**Параметры:**

* \`$genres\` (string|array\\<string>): Жанр или массив жанров для фильтрации
* \`$page\` (int): Номер страницы результатов (по умолчанию: 1)
* \`$limit\` (int): Количество результатов на странице (по умолчанию: 10)

**Возвращает:** \`MovieDocsResponseDto\` Фильмы указанного жанра с пагинацией

**Исключения:**

* \`KinopoiskDevException\`: При ошибках API или валидации
* \`KinopoiskResponseException\`: При ошибках HTTP-запроса
* \`\\JsonException\`: При ошибках парсинга JSON-ответа

**Пример:**

\`\`\`php
// Получить боевики
$actionMovies = $movieRequests->getMoviesByGenre('боевик');
// Получить комедии и драмы
$movies = $movieRequests->getMoviesByGenre(['комедия', 'драма'], 1, 30);
\`\`\`

## \`searchMovies()\` [#searchmovies]

**Описание:** Ищет фильмы по различным критериям
Основной метод для поиска фильмов с использованием расширенной
фильтрации. Поддерживает фильтрацию по году, жанру, стране,
рейтингу, типу фильма и многим другим критериям. Включает
валидацию параметров и автоматическую пагинацию.

**С версии:** 1.0.0

**API Endpoint:** \`/v1.4/movie\`

**Параметры:**

* \`$filters\` (MovieSearchFilter|null): Объект фильтра для настройки критериев поиска
* \`$page\` (int): Номер страницы результатов (по умолчанию: 1)
* \`$limit\` (int): Количество результатов на странице (по умолчанию: 10, максимум: 250)

**Возвращает:** \`MovieDocsResponseDto\` Результаты поиска с пагинацией

**Исключения:**

* \`KinopoiskDevException\`: При ошибках валидации или превышении лимитов
* \`KinopoiskResponseException\`: При ошибках HTTP-запроса
* \`\\JsonException\`: При ошибках парсинга JSON-ответа

**Пример:**

\`\`\`php
// Простой поиск всех фильмов
$results = $movieRequests->searchMovies();
// Поиск с фильтрами
$filter = new MovieSearchFilter();
$filter->year(2023)->rating(7.0)->genre('боевик');
$results = $movieRequests->searchMovies($filter, 1, 50);
\`\`\`

## \`getMoviesByCountry()\` [#getmoviesbycountry]

**Описание:** Получает фильмы по стране
Возвращает список фильмов из определенной страны или стран,
отсортированных по рейтингу Kinopoisk. Поддерживает как
одиночную страну, так и массив стран для получения
фильмов из нескольких стран одновременно.

**С версии:** 1.0.0

**Параметры:**

* \`$countries\` (string|array\\<string>): Страна или массив стран для фильтрации
* \`$page\` (int): Номер страницы результатов (по умолчанию: 1)
* \`$limit\` (int): Количество результатов на странице (по умолчанию: 10)

**Возвращает:** \`MovieDocsResponseDto\` Фильмы из указанной страны с пагинацией

**Исключения:**

* \`KinopoiskDevException\`: При ошибках API или валидации
* \`KinopoiskResponseException\`: При ошибках HTTP-запроса
* \`\\JsonException\`: При ошибках парсинга JSON-ответа

**Пример:**

\`\`\`php
// Получить американские фильмы
$usMovies = $movieRequests->getMoviesByCountry('США');
// Получить фильмы из нескольких стран
$movies = $movieRequests->getMoviesByCountry(['США', 'Великобритания'], 1, 25);
\`\`\`

## \`getMoviesByYearRange()\` [#getmoviesbyyearrange]

**Описание:** Получает фильмы по диапазону лет
Возвращает список фильмов, выпущенных в указанном диапазоне лет,
отсортированных по году выпуска. Полезен для получения фильмов
определенного периода или десятилетия.

**С версии:** 1.0.0

**Параметры:**

* \`$fromYear\` (int): Начальный год диапазона (включительно)
* \`$toYear\` (int): Конечный год диапазона (включительно)
* \`$page\` (int): Номер страницы результатов (по умолчанию: 1)
* \`$limit\` (int): Количество результатов на странице (по умолчанию: 10)

**Возвращает:** \`MovieDocsResponseDto\` Фильмы из указанного периода с пагинацией

**Исключения:**

* \`KinopoiskDevException\`: При ошибках API или валидации
* \`KinopoiskResponseException\`: При ошибках HTTP-запроса
* \`\\JsonException\`: При ошибках парсинга JSON-ответа

**Пример:**

\`\`\`php
// Получить фильмы 90-х годов
$movies90s = $movieRequests->getMoviesByYearRange(1990, 1999);
// Получить фильмы последнего десятилетия
$recentMovies = $movieRequests->getMoviesByYearRange(2014, 2024, 1, 100);
\`\`\`
`,o={contents:[{heading:void 0,content:`**Описание:** Класс для API-запросов, связанных с фильмами
Предоставляет полный набор методов для работы с фильмами через API Kinopoisk.dev.
Включает поиск фильмов, получение детальной информации, наград, случайных фильмов
и возможных значений для фильтрации. Поддерживает расширенную фильтрацию,
пагинацию и обработку ошибок.
Основные возможности:`},{heading:void 0,content:`Поиск фильмов по различным критериям`},{heading:void 0,content:`Получение детальной информации о фильме`},{heading:void 0,content:`Работа с наградами фильмов`},{heading:void 0,content:`Получение случайных фильмов`},{heading:void 0,content:`Получение возможных значений для фильтров`},{heading:void 0,content:`Специализированные методы для популярных запросов`},{heading:void 0,content:`**С версии:** 1.0.0`},{heading:void 0,content:`**Версия:** 1.0.0`},{heading:void 0,content:`**Пример:**`},{heading:void 0,content:`**См. также:**`},{heading:void 0,content:"`\\KinopoiskDev\\Filter\\MovieSearchFilter`: Для настройки фильтрации"},{heading:void 0,content:"`\\KinopoiskDev\\Models\\Movie`: Модель фильма"},{heading:void 0,content:"`\\KinopoiskDev\\Models\\MovieAward`: Модель награды фильма"},{heading:void 0,content:"`\\KinopoiskDev\\Responses\\Api\\MovieDocsResponseDto`: Ответ с фильмами"},{heading:void 0,content:"`\\KinopoiskDev\\Responses\\Api\\SearchMovieResponseDto`: Ответ поиска"},{heading:`getmoviebyid`,content:`**Описание:** Получает фильм по его ID
Выполняет запрос к API для получения полной информации о фильме
по его уникальному идентификатору. Возвращает объект Movie
со всеми доступными данными: названием, годом, рейтингами,
актерами, режиссерами, описанием и другими метаданными.`},{heading:`getmoviebyid`,content:`**С версии:** 1.0.0`},{heading:`getmoviebyid`,content:"**API Endpoint:** `/v1.4/movie/{id}`"},{heading:`getmoviebyid`,content:`**Параметры:**`},{heading:`getmoviebyid`,content:"`$movieId` (int): Уникальный ID фильма в базе данных Kinopoisk"},{heading:`getmoviebyid`,content:"**Возвращает:** `Movie` Объект фильма со всеми доступными данными"},{heading:`getmoviebyid`,content:`**Исключения:**`},{heading:`getmoviebyid`,content:"`KinopoiskDevException`: При ошибках API или проблемах с сетью"},{heading:`getmoviebyid`,content:"`KinopoiskResponseException`: При ошибках HTTP-запроса (401, 403, 404)"},{heading:`getmoviebyid`,content:"`\\JsonException`: При ошибках парсинга JSON-ответа"},{heading:`getmoviebyid`,content:`**Пример:**`},{heading:`getrandommovie`,content:`**Описание:** Получает случайный фильм
Возвращает случайно выбранный фильм из базы данных Kinopoisk.
Поддерживает опциональную фильтрацию для получения случайного
фильма, соответствующего определенным критериям (год, жанр,
рейтинг и т.д.).`},{heading:`getrandommovie`,content:`**С версии:** 1.0.0`},{heading:`getrandommovie`,content:"**API Endpoint:** `/v1.4/movie/random`"},{heading:`getrandommovie`,content:`**Параметры:**`},{heading:`getrandommovie`,content:"`$filters` (MovieSearchFilter|null): Опциональные фильтры для ограничения выбора случайного фильма"},{heading:`getrandommovie`,content:"**Возвращает:** `Movie` Случайный фильм, соответствующий переданным фильтрам"},{heading:`getrandommovie`,content:`**Исключения:**`},{heading:`getrandommovie`,content:"`KinopoiskDevException`: При ошибках API или валидации"},{heading:`getrandommovie`,content:"`KinopoiskResponseException`: При ошибках HTTP-запроса"},{heading:`getrandommovie`,content:"`\\JsonException`: При ошибках парсинга JSON-ответа"},{heading:`getrandommovie`,content:`**Пример:**`},{heading:`getpossiblevaluesbyfield`,content:`**Описание:** Получает возможные значения для указанного поля фильтрации
Возвращает список всех возможных значений для определенных полей
фильтрации, таких как жанры, страны, типы фильмов и статусы.
Полезно для создания выпадающих списков или автодополнения
в пользовательских интерфейсах.`},{heading:`getpossiblevaluesbyfield`,content:`**С версии:** 1.0.0`},{heading:`getpossiblevaluesbyfield`,content:"**API Endpoint:** `/v1.4/movie/possible-values-by-field`"},{heading:`getpossiblevaluesbyfield`,content:`**Параметры:**`},{heading:`getpossiblevaluesbyfield`,content:"`$field` (string): Поле для получения возможных значений (genres, countries, type, type\\_number, status)"},{heading:`getpossiblevaluesbyfield`,content:"**Возвращает:** `array<array<string, mixed>>` Массив возможных значений с полями name и slug"},{heading:`getpossiblevaluesbyfield`,content:`**Исключения:**`},{heading:`getpossiblevaluesbyfield`,content:"`KinopoiskDevException`: При передаче неподдерживаемого поля"},{heading:`getpossiblevaluesbyfield`,content:"`KinopoiskResponseException`: При ошибках HTTP-запроса"},{heading:`getpossiblevaluesbyfield`,content:"`\\JsonException`: При ошибках парсинга JSON-ответа"},{heading:`getpossiblevaluesbyfield`,content:`**Пример:**`},{heading:`getmovieawards`,content:`**Описание:** Получает награды фильмов с возможностью фильтрации и пагинации
Выполняет запрос к API Kinopoisk.dev для получения списка наград фильмов
с поддержкой расширенной фильтрации и постраничной навигации.
Автоматически создает объект фильтра при отсутствии переданного параметра.
При значении null создается новый экземпляр MovieSearchFilter без фильтров
250\\)
количество страниц, текущая страница)`},{heading:`getmovieawards`,content:`**С версии:** 1.0.0`},{heading:`getmovieawards`,content:`**Версия:** 1.0.0`},{heading:`getmovieawards`,content:"**API Endpoint:** `/v1.4/movie/awards`"},{heading:`getmovieawards`,content:`**Параметры:**`},{heading:`getmovieawards`,content:"`$filters` (MovieSearchFilter|null): Объект фильтрации для поиска наград по различным критериям (жанры, страны, годы, рейтинги и т.д.)."},{heading:`getmovieawards`,content:"`$page` (int): Номер запрашиваемой страницы результатов, начиная с 1 (по умолчанию 1)"},{heading:`getmovieawards`,content:"`$limit` (int): Максимальное количество результатов на одной странице (по умолчанию 10, максимум ограничен API до"},{heading:`getmovieawards`,content:"**Возвращает:** `MovieAwardDocsResponseDto` Объект ответа, содержащий массив наград фильмов и метаданные пагинации (общее количество,"},{heading:`getmovieawards`,content:`**Исключения:**`},{heading:`getmovieawards`,content:"`KinopoiskDevException`: При ошибках валидации данных, неправильных параметрах запроса или проблемах с инициализацией объектов"},{heading:`getmovieawards`,content:"`KinopoiskResponseException`: При ошибках HTTP-запроса к API (401, 403, 404)"},{heading:`getmovieawards`,content:"`\\JsonException`: При ошибках парсинга JSON-ответа от API, некорректном формате данных или повреждении ответа"},{heading:`getmovieawards`,content:`**См. также:**`},{heading:`getmovieawards`,content:"`\\KinopoiskDev\\Filter\\MovieSearchFilter`: Класс для настройки фильтрации наград"},{heading:`getmovieawards`,content:"`\\KinopoiskDev\\Responses\\Api\\MovieAwardDocsResponseDto`: Структура ответа API"},{heading:`getmovieawards`,content:"`\\KinopoiskDev\\Models\\MovieAward`: Модель отдельной награды фильма"},{heading:`searchbyname`,content:`**Описание:** Ищет фильмы только по названию (упрощенный поиск)
Выполняет поиск фильмов по названию с использованием
встроенного поискового движка API. Поддерживает частичное
совпадение и нечеткий поиск. Удобен для быстрого поиска
по названию фильма без сложной фильтрации.`},{heading:`searchbyname`,content:`**С версии:** 1.0.0`},{heading:`searchbyname`,content:"**API Endpoint:** `/v1.4/movie/search`"},{heading:`searchbyname`,content:`**Параметры:**`},{heading:`searchbyname`,content:"`$query` (string): Поисковый запрос (название фильма)"},{heading:`searchbyname`,content:"`$page` (int): Номер страницы результатов (по умолчанию: 1)"},{heading:`searchbyname`,content:"`$limit` (int): Количество результатов на странице (по умолчанию: 10)"},{heading:`searchbyname`,content:"**Возвращает:** `SearchMovieResponseDto` Результаты поиска с пагинацией"},{heading:`searchbyname`,content:`**Исключения:**`},{heading:`searchbyname`,content:"`KinopoiskDevException`: При ошибках API или валидации"},{heading:`searchbyname`,content:"`KinopoiskResponseException`: При ошибках HTTP-запроса"},{heading:`searchbyname`,content:"`\\JsonException`: При ошибках парсинга JSON-ответа"},{heading:`searchbyname`,content:`**Пример:**`},{heading:`getlatestmovies`,content:`**Описание:** Получает последние фильмы
Возвращает список последних фильмов, отсортированных по дате
выхода. Поддерживает фильтрацию по году для получения
фильмов конкретного года. Удобен для отображения новинок
или актуального контента.`},{heading:`getlatestmovies`,content:`**С версии:** 1.0.0`},{heading:`getlatestmovies`,content:"**API Endpoint:** `/v1.4/movie`"},{heading:`getlatestmovies`,content:`**Параметры:**`},{heading:`getlatestmovies`,content:"`$year` (int|null): Год для фильтрации (по умолчанию: текущий год)"},{heading:`getlatestmovies`,content:"`$page` (int): Номер страницы результатов (по умолчанию: 1)"},{heading:`getlatestmovies`,content:"`$limit` (int): Количество результатов на странице (по умолчанию: 10)"},{heading:`getlatestmovies`,content:"**Возвращает:** `MovieDocsResponseDto` Результаты поиска с пагинацией"},{heading:`getlatestmovies`,content:`**Исключения:**`},{heading:`getlatestmovies`,content:"`KinopoiskDevException`: При ошибках API или валидации"},{heading:`getlatestmovies`,content:"`KinopoiskResponseException`: При ошибках HTTP-запроса"},{heading:`getlatestmovies`,content:"`\\JsonException`: При ошибках парсинга JSON-ответа"},{heading:`getlatestmovies`,content:`**Пример:**`},{heading:`getmoviesbygenre`,content:`**Описание:** Получает фильмы по жанру
Возвращает список фильмов определенного жанра или жанров,
отсортированных по рейтингу Kinopoisk. Поддерживает как
одиночный жанр, так и массив жанров для более точной
фильтрации.`},{heading:`getmoviesbygenre`,content:`**С версии:** 1.0.0`},{heading:`getmoviesbygenre`,content:`**Параметры:**`},{heading:`getmoviesbygenre`,content:"`$genres` (string|array\\<string>): Жанр или массив жанров для фильтрации"},{heading:`getmoviesbygenre`,content:"`$page` (int): Номер страницы результатов (по умолчанию: 1)"},{heading:`getmoviesbygenre`,content:"`$limit` (int): Количество результатов на странице (по умолчанию: 10)"},{heading:`getmoviesbygenre`,content:"**Возвращает:** `MovieDocsResponseDto` Фильмы указанного жанра с пагинацией"},{heading:`getmoviesbygenre`,content:`**Исключения:**`},{heading:`getmoviesbygenre`,content:"`KinopoiskDevException`: При ошибках API или валидации"},{heading:`getmoviesbygenre`,content:"`KinopoiskResponseException`: При ошибках HTTP-запроса"},{heading:`getmoviesbygenre`,content:"`\\JsonException`: При ошибках парсинга JSON-ответа"},{heading:`getmoviesbygenre`,content:`**Пример:**`},{heading:`searchmovies`,content:`**Описание:** Ищет фильмы по различным критериям
Основной метод для поиска фильмов с использованием расширенной
фильтрации. Поддерживает фильтрацию по году, жанру, стране,
рейтингу, типу фильма и многим другим критериям. Включает
валидацию параметров и автоматическую пагинацию.`},{heading:`searchmovies`,content:`**С версии:** 1.0.0`},{heading:`searchmovies`,content:"**API Endpoint:** `/v1.4/movie`"},{heading:`searchmovies`,content:`**Параметры:**`},{heading:`searchmovies`,content:"`$filters` (MovieSearchFilter|null): Объект фильтра для настройки критериев поиска"},{heading:`searchmovies`,content:"`$page` (int): Номер страницы результатов (по умолчанию: 1)"},{heading:`searchmovies`,content:"`$limit` (int): Количество результатов на странице (по умолчанию: 10, максимум: 250)"},{heading:`searchmovies`,content:"**Возвращает:** `MovieDocsResponseDto` Результаты поиска с пагинацией"},{heading:`searchmovies`,content:`**Исключения:**`},{heading:`searchmovies`,content:"`KinopoiskDevException`: При ошибках валидации или превышении лимитов"},{heading:`searchmovies`,content:"`KinopoiskResponseException`: При ошибках HTTP-запроса"},{heading:`searchmovies`,content:"`\\JsonException`: При ошибках парсинга JSON-ответа"},{heading:`searchmovies`,content:`**Пример:**`},{heading:`getmoviesbycountry`,content:`**Описание:** Получает фильмы по стране
Возвращает список фильмов из определенной страны или стран,
отсортированных по рейтингу Kinopoisk. Поддерживает как
одиночную страну, так и массив стран для получения
фильмов из нескольких стран одновременно.`},{heading:`getmoviesbycountry`,content:`**С версии:** 1.0.0`},{heading:`getmoviesbycountry`,content:`**Параметры:**`},{heading:`getmoviesbycountry`,content:"`$countries` (string|array\\<string>): Страна или массив стран для фильтрации"},{heading:`getmoviesbycountry`,content:"`$page` (int): Номер страницы результатов (по умолчанию: 1)"},{heading:`getmoviesbycountry`,content:"`$limit` (int): Количество результатов на странице (по умолчанию: 10)"},{heading:`getmoviesbycountry`,content:"**Возвращает:** `MovieDocsResponseDto` Фильмы из указанной страны с пагинацией"},{heading:`getmoviesbycountry`,content:`**Исключения:**`},{heading:`getmoviesbycountry`,content:"`KinopoiskDevException`: При ошибках API или валидации"},{heading:`getmoviesbycountry`,content:"`KinopoiskResponseException`: При ошибках HTTP-запроса"},{heading:`getmoviesbycountry`,content:"`\\JsonException`: При ошибках парсинга JSON-ответа"},{heading:`getmoviesbycountry`,content:`**Пример:**`},{heading:`getmoviesbyyearrange`,content:`**Описание:** Получает фильмы по диапазону лет
Возвращает список фильмов, выпущенных в указанном диапазоне лет,
отсортированных по году выпуска. Полезен для получения фильмов
определенного периода или десятилетия.`},{heading:`getmoviesbyyearrange`,content:`**С версии:** 1.0.0`},{heading:`getmoviesbyyearrange`,content:`**Параметры:**`},{heading:`getmoviesbyyearrange`,content:"`$fromYear` (int): Начальный год диапазона (включительно)"},{heading:`getmoviesbyyearrange`,content:"`$toYear` (int): Конечный год диапазона (включительно)"},{heading:`getmoviesbyyearrange`,content:"`$page` (int): Номер страницы результатов (по умолчанию: 1)"},{heading:`getmoviesbyyearrange`,content:"`$limit` (int): Количество результатов на странице (по умолчанию: 10)"},{heading:`getmoviesbyyearrange`,content:"**Возвращает:** `MovieDocsResponseDto` Фильмы из указанного периода с пагинацией"},{heading:`getmoviesbyyearrange`,content:`**Исключения:**`},{heading:`getmoviesbyyearrange`,content:"`KinopoiskDevException`: При ошибках API или валидации"},{heading:`getmoviesbyyearrange`,content:"`KinopoiskResponseException`: При ошибках HTTP-запроса"},{heading:`getmoviesbyyearrange`,content:"`\\JsonException`: При ошибках парсинга JSON-ответа"},{heading:`getmoviesbyyearrange`,content:`**Пример:**`}],headings:[{id:`getmoviebyid`,content:"`getMovieById()`"},{id:`getrandommovie`,content:"`getRandomMovie()`"},{id:`getpossiblevaluesbyfield`,content:"`getPossibleValuesByField()`"},{id:`getmovieawards`,content:"`getMovieAwards()`"},{id:`searchbyname`,content:"`searchByName()`"},{id:`getlatestmovies`,content:"`getLatestMovies()`"},{id:`getmoviesbygenre`,content:"`getMoviesByGenre()`"},{id:`searchmovies`,content:"`searchMovies()`"},{id:`getmoviesbycountry`,content:"`getMoviesByCountry()`"},{id:`getmoviesbyyearrange`,content:"`getMoviesByYearRange()`"}]},s=[{depth:2,url:`#getmoviebyid`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`getMovieById()`})})},{depth:2,url:`#getrandommovie`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`getRandomMovie()`})})},{depth:2,url:`#getpossiblevaluesbyfield`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`getPossibleValuesByField()`})})},{depth:2,url:`#getmovieawards`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`getMovieAwards()`})})},{depth:2,url:`#searchbyname`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`searchByName()`})})},{depth:2,url:`#getlatestmovies`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`getLatestMovies()`})})},{depth:2,url:`#getmoviesbygenre`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`getMoviesByGenre()`})})},{depth:2,url:`#searchmovies`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`searchMovies()`})})},{depth:2,url:`#getmoviesbycountry`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`getMoviesByCountry()`})})},{depth:2,url:`#getmoviesbyyearrange`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`getMoviesByYearRange()`})})}];function c(e){let t={code:`code`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,span:`span`,strong:`strong`,ul:`ul`,...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Класс для API-запросов, связанных с фильмами
Предоставляет полный набор методов для работы с фильмами через API Kinopoisk.dev.
Включает поиск фильмов, получение детальной информации, наград, случайных фильмов
и возможных значений для фильтрации. Поддерживает расширенную фильтрацию,
пагинацию и обработку ошибок.
Основные возможности:`]}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsx)(t.li,{children:`Поиск фильмов по различным критериям`}),`
`,(0,n.jsx)(t.li,{children:`Получение детальной информации о фильме`}),`
`,(0,n.jsx)(t.li,{children:`Работа с наградами фильмов`}),`
`,(0,n.jsx)(t.li,{children:`Получение случайных фильмов`}),`
`,(0,n.jsx)(t.li,{children:`Получение возможных значений для фильтров`}),`
`,(0,n.jsx)(t.li,{children:`Специализированные методы для популярных запросов`}),`
`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 1.0.0`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Версия:`}),` 1.0.0`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Пример:`})}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M7.01 10.207h-.944l-.515 2.648h.838c.556 0 .97-.105 1.242-.314.272-.21.455-.559.55-1.049.092-.47.05-.802-.124-.995-.175-.193-.523-.29-1.047-.29zM12 5.688C5.373 5.688 0 8.514 0 12s5.373 6.313 12 6.313S24 15.486 24 12c0-3.486-5.373-6.312-12-6.312zm-3.26 7.451c-.261.25-.575.438-.917.551-.336.108-.765.164-1.285.164H5.357l-.327 1.681H3.652l1.23-6.326h2.65c.797 0 1.378.209 1.744.628.366.418.476 1.002.33 1.752a2.836 2.836 0 0 1-.305.847c-.143.255-.33.49-.561.703zm4.024.715l.543-2.799c.063-.318.039-.536-.068-.651-.107-.116-.336-.174-.687-.174H11.46l-.704 3.625H9.388l1.23-6.327h1.367l-.327 1.682h1.218c.767 0 1.295.134 1.586.401s.378.7.263 1.299l-.572 2.944h-1.389zm7.597-2.265a2.782 2.782 0 0 1-.305.847c-.143.255-.33.49-.561.703a2.44 2.44 0 0 1-.917.551c-.336.108-.765.164-1.286.164h-1.18l-.327 1.682h-1.378l1.23-6.326h2.649c.797 0 1.378.209 1.744.628.366.417.477 1.001.331 1.751zM17.766 10.207h-.943l-.516 2.648h.838c.557 0 .971-.105 1.242-.314.272-.21.455-.559.551-1.049.092-.47.049-.802-.125-.995s-.524-.29-1.047-.29z" fill="currentColor" /></svg>`,children:(0,n.jsxs)(t.code,{children:[(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`$movieRequests `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`=`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:` new`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:` MovieRequests`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`(`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`'your-api-token'`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`);`})]}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{style:{"--shiki-light":`#6A737D`,"--shiki-dark":`#6A737D`},children:`// Получение фильма по ID`})}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`$movie `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`=`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:` $movieRequests`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`->`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`getMovieById`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`(`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`123`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`);`})]}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{style:{"--shiki-light":`#6A737D`,"--shiki-dark":`#6A737D`},children:`// Поиск фильмов`})}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`$filter `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`=`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:` new`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:` MovieSearchFilter`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`();`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`$filter`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`->`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`year`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`(`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`2023`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`)`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`->`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`rating`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`(`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`7.0`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`);`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`$results `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`=`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:` $movieRequests`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`->`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`searchMovies`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`($filter, `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`1`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`, `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`20`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`);`})]}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{style:{"--shiki-light":`#6A737D`,"--shiki-dark":`#6A737D`},children:`// Получение случайного фильма`})}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`$randomMovie `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`=`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:` $movieRequests`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`->`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`getRandomMovie`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`();`})]}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{style:{"--shiki-light":`#6A737D`,"--shiki-dark":`#6A737D`},children:`// Получение наград`})}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`$awards `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`=`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:` $movieRequests`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`->`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`getMovieAwards`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`(`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`null`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`, `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`1`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`, `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`50`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`);`})]})]})})}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`См. также:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`\\KinopoiskDev\\Filter\\MovieSearchFilter`}),`: Для настройки фильтрации`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`\\KinopoiskDev\\Models\\Movie`}),`: Модель фильма`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`\\KinopoiskDev\\Models\\MovieAward`}),`: Модель награды фильма`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`\\KinopoiskDev\\Responses\\Api\\MovieDocsResponseDto`}),`: Ответ с фильмами`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`\\KinopoiskDev\\Responses\\Api\\SearchMovieResponseDto`}),`: Ответ поиска`]}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`getmoviebyid`,children:(0,n.jsx)(t.code,{children:`getMovieById()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Получает фильм по его ID
Выполняет запрос к API для получения полной информации о фильме
по его уникальному идентификатору. Возвращает объект Movie
со всеми доступными данными: названием, годом, рейтингами,
актерами, режиссерами, описанием и другими метаданными.`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 1.0.0`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`API Endpoint:`}),` `,(0,n.jsx)(t.code,{children:`/v1.4/movie/{id}`})]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$movieId`}),` (int): Уникальный ID фильма в базе данных Kinopoisk`]}),`
`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`Movie`}),` Объект фильма со всеми доступными данными`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Исключения:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`KinopoiskDevException`}),`: При ошибках API или проблемах с сетью`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`KinopoiskResponseException`}),`: При ошибках HTTP-запроса (401, 403, 404)`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`\\JsonException`}),`: При ошибках парсинга JSON-ответа`]}),`
`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Пример:`})}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M7.01 10.207h-.944l-.515 2.648h.838c.556 0 .97-.105 1.242-.314.272-.21.455-.559.55-1.049.092-.47.05-.802-.124-.995-.175-.193-.523-.29-1.047-.29zM12 5.688C5.373 5.688 0 8.514 0 12s5.373 6.313 12 6.313S24 15.486 24 12c0-3.486-5.373-6.312-12-6.312zm-3.26 7.451c-.261.25-.575.438-.917.551-.336.108-.765.164-1.285.164H5.357l-.327 1.681H3.652l1.23-6.326h2.65c.797 0 1.378.209 1.744.628.366.418.476 1.002.33 1.752a2.836 2.836 0 0 1-.305.847c-.143.255-.33.49-.561.703zm4.024.715l.543-2.799c.063-.318.039-.536-.068-.651-.107-.116-.336-.174-.687-.174H11.46l-.704 3.625H9.388l1.23-6.327h1.367l-.327 1.682h1.218c.767 0 1.295.134 1.586.401s.378.7.263 1.299l-.572 2.944h-1.389zm7.597-2.265a2.782 2.782 0 0 1-.305.847c-.143.255-.33.49-.561.703a2.44 2.44 0 0 1-.917.551c-.336.108-.765.164-1.286.164h-1.18l-.327 1.682h-1.378l1.23-6.326h2.649c.797 0 1.378.209 1.744.628.366.417.477 1.001.331 1.751zM17.766 10.207h-.943l-.516 2.648h.838c.557 0 .971-.105 1.242-.314.272-.21.455-.559.551-1.049.092-.47.049-.802-.125-.995s-.524-.29-1.047-.29z" fill="currentColor" /></svg>`,children:(0,n.jsxs)(t.code,{children:[(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`$movie `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`=`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:` $movieRequests`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`->`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`getMovieById`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`(`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`123`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`);`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`echo`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:` $movie`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`->`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`name; `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6A737D`,"--shiki-dark":`#6A737D`},children:`// Название фильма`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`echo`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:` $movie`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`->`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`year; `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6A737D`,"--shiki-dark":`#6A737D`},children:`// Год выпуска`})]})]})})}),`
`,(0,n.jsx)(t.h2,{id:`getrandommovie`,children:(0,n.jsx)(t.code,{children:`getRandomMovie()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Получает случайный фильм
Возвращает случайно выбранный фильм из базы данных Kinopoisk.
Поддерживает опциональную фильтрацию для получения случайного
фильма, соответствующего определенным критериям (год, жанр,
рейтинг и т.д.).`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 1.0.0`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`API Endpoint:`}),` `,(0,n.jsx)(t.code,{children:`/v1.4/movie/random`})]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$filters`}),` (MovieSearchFilter|null): Опциональные фильтры для ограничения выбора случайного фильма`]}),`
`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`Movie`}),` Случайный фильм, соответствующий переданным фильтрам`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Исключения:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`KinopoiskDevException`}),`: При ошибках API или валидации`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`KinopoiskResponseException`}),`: При ошибках HTTP-запроса`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`\\JsonException`}),`: При ошибках парсинга JSON-ответа`]}),`
`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Пример:`})}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M7.01 10.207h-.944l-.515 2.648h.838c.556 0 .97-.105 1.242-.314.272-.21.455-.559.55-1.049.092-.47.05-.802-.124-.995-.175-.193-.523-.29-1.047-.29zM12 5.688C5.373 5.688 0 8.514 0 12s5.373 6.313 12 6.313S24 15.486 24 12c0-3.486-5.373-6.312-12-6.312zm-3.26 7.451c-.261.25-.575.438-.917.551-.336.108-.765.164-1.285.164H5.357l-.327 1.681H3.652l1.23-6.326h2.65c.797 0 1.378.209 1.744.628.366.418.476 1.002.33 1.752a2.836 2.836 0 0 1-.305.847c-.143.255-.33.49-.561.703zm4.024.715l.543-2.799c.063-.318.039-.536-.068-.651-.107-.116-.336-.174-.687-.174H11.46l-.704 3.625H9.388l1.23-6.327h1.367l-.327 1.682h1.218c.767 0 1.295.134 1.586.401s.378.7.263 1.299l-.572 2.944h-1.389zm7.597-2.265a2.782 2.782 0 0 1-.305.847c-.143.255-.33.49-.561.703a2.44 2.44 0 0 1-.917.551c-.336.108-.765.164-1.286.164h-1.18l-.327 1.682h-1.378l1.23-6.326h2.649c.797 0 1.378.209 1.744.628.366.417.477 1.001.331 1.751zM17.766 10.207h-.943l-.516 2.648h.838c.557 0 .971-.105 1.242-.314.272-.21.455-.559.551-1.049.092-.47.049-.802-.125-.995s-.524-.29-1.047-.29z" fill="currentColor" /></svg>`,children:(0,n.jsxs)(t.code,{children:[(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{style:{"--shiki-light":`#6A737D`,"--shiki-dark":`#6A737D`},children:`// Получить любой случайный фильм`})}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`$randomMovie `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`=`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:` $movieRequests`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`->`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`getRandomMovie`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`();`})]}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{style:{"--shiki-light":`#6A737D`,"--shiki-dark":`#6A737D`},children:`// Получить случайный фильм 2023 года с рейтингом выше 7.0`})}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`$filter `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`=`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:` new`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:` MovieSearchFilter`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`();`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`$filter`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`->`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`year`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`(`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`2023`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`)`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`->`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`rating`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`(`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`7.0`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`);`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`$randomMovie `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`=`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:` $movieRequests`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`->`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`getRandomMovie`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`($filter);`})]})]})})}),`
`,(0,n.jsx)(t.h2,{id:`getpossiblevaluesbyfield`,children:(0,n.jsx)(t.code,{children:`getPossibleValuesByField()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Получает возможные значения для указанного поля фильтрации
Возвращает список всех возможных значений для определенных полей
фильтрации, таких как жанры, страны, типы фильмов и статусы.
Полезно для создания выпадающих списков или автодополнения
в пользовательских интерфейсах.`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 1.0.0`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`API Endpoint:`}),` `,(0,n.jsx)(t.code,{children:`/v1.4/movie/possible-values-by-field`})]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$field`}),` (string): Поле для получения возможных значений (genres, countries, type, type_number, status)`]}),`
`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`array<array<string, mixed>>`}),` Массив возможных значений с полями name и slug`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Исключения:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`KinopoiskDevException`}),`: При передаче неподдерживаемого поля`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`KinopoiskResponseException`}),`: При ошибках HTTP-запроса`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`\\JsonException`}),`: При ошибках парсинга JSON-ответа`]}),`
`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Пример:`})}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M7.01 10.207h-.944l-.515 2.648h.838c.556 0 .97-.105 1.242-.314.272-.21.455-.559.55-1.049.092-.47.05-.802-.124-.995-.175-.193-.523-.29-1.047-.29zM12 5.688C5.373 5.688 0 8.514 0 12s5.373 6.313 12 6.313S24 15.486 24 12c0-3.486-5.373-6.312-12-6.312zm-3.26 7.451c-.261.25-.575.438-.917.551-.336.108-.765.164-1.285.164H5.357l-.327 1.681H3.652l1.23-6.326h2.65c.797 0 1.378.209 1.744.628.366.418.476 1.002.33 1.752a2.836 2.836 0 0 1-.305.847c-.143.255-.33.49-.561.703zm4.024.715l.543-2.799c.063-.318.039-.536-.068-.651-.107-.116-.336-.174-.687-.174H11.46l-.704 3.625H9.388l1.23-6.327h1.367l-.327 1.682h1.218c.767 0 1.295.134 1.586.401s.378.7.263 1.299l-.572 2.944h-1.389zm7.597-2.265a2.782 2.782 0 0 1-.305.847c-.143.255-.33.49-.561.703a2.44 2.44 0 0 1-.917.551c-.336.108-.765.164-1.286.164h-1.18l-.327 1.682h-1.378l1.23-6.326h2.649c.797 0 1.378.209 1.744.628.366.417.477 1.001.331 1.751zM17.766 10.207h-.943l-.516 2.648h.838c.557 0 .971-.105 1.242-.314.272-.21.455-.559.551-1.049.092-.47.049-.802-.125-.995s-.524-.29-1.047-.29z" fill="currentColor" /></svg>`,children:(0,n.jsxs)(t.code,{children:[(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{style:{"--shiki-light":`#6A737D`,"--shiki-dark":`#6A737D`},children:`// Получить все жанры`})}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`$genres `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`=`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:` $movieRequests`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`->`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`getPossibleValuesByField`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`(`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`'genres'`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`);`})]}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{style:{"--shiki-light":`#6A737D`,"--shiki-dark":`#6A737D`},children:`// Получить все страны`})}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`$countries `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`=`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:` $movieRequests`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`->`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`getPossibleValuesByField`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`(`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`'countries'`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`);`})]}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{style:{"--shiki-light":`#6A737D`,"--shiki-dark":`#6A737D`},children:`// Получить типы фильмов`})}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`$types `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`=`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:` $movieRequests`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`->`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`getPossibleValuesByField`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`(`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`'type'`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`);`})]})]})})}),`
`,(0,n.jsx)(t.h2,{id:`getmovieawards`,children:(0,n.jsx)(t.code,{children:`getMovieAwards()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Получает награды фильмов с возможностью фильтрации и пагинации
Выполняет запрос к API Kinopoisk.dev для получения списка наград фильмов
с поддержкой расширенной фильтрации и постраничной навигации.
Автоматически создает объект фильтра при отсутствии переданного параметра.
При значении null создается новый экземпляр MovieSearchFilter без фильтров
250)
количество страниц, текущая страница)`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 1.0.0`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Версия:`}),` 1.0.0`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`API Endpoint:`}),` `,(0,n.jsx)(t.code,{children:`/v1.4/movie/awards`})]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$filters`}),` (MovieSearchFilter|null): Объект фильтрации для поиска наград по различным критериям (жанры, страны, годы, рейтинги и т.д.).`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$page`}),` (int): Номер запрашиваемой страницы результатов, начиная с 1 (по умолчанию 1)`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$limit`}),` (int): Максимальное количество результатов на одной странице (по умолчанию 10, максимум ограничен API до`]}),`
`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`MovieAwardDocsResponseDto`}),` Объект ответа, содержащий массив наград фильмов и метаданные пагинации (общее количество,`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Исключения:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`KinopoiskDevException`}),`: При ошибках валидации данных, неправильных параметрах запроса или проблемах с инициализацией объектов`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`KinopoiskResponseException`}),`: При ошибках HTTP-запроса к API (401, 403, 404)`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`\\JsonException`}),`: При ошибках парсинга JSON-ответа от API, некорректном формате данных или повреждении ответа`]}),`
`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`См. также:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`\\KinopoiskDev\\Filter\\MovieSearchFilter`}),`: Класс для настройки фильтрации наград`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`\\KinopoiskDev\\Responses\\Api\\MovieAwardDocsResponseDto`}),`: Структура ответа API`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`\\KinopoiskDev\\Models\\MovieAward`}),`: Модель отдельной награды фильма`]}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`searchbyname`,children:(0,n.jsx)(t.code,{children:`searchByName()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Ищет фильмы только по названию (упрощенный поиск)
Выполняет поиск фильмов по названию с использованием
встроенного поискового движка API. Поддерживает частичное
совпадение и нечеткий поиск. Удобен для быстрого поиска
по названию фильма без сложной фильтрации.`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 1.0.0`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`API Endpoint:`}),` `,(0,n.jsx)(t.code,{children:`/v1.4/movie/search`})]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$query`}),` (string): Поисковый запрос (название фильма)`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$page`}),` (int): Номер страницы результатов (по умолчанию: 1)`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$limit`}),` (int): Количество результатов на странице (по умолчанию: 10)`]}),`
`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`SearchMovieResponseDto`}),` Результаты поиска с пагинацией`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Исключения:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`KinopoiskDevException`}),`: При ошибках API или валидации`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`KinopoiskResponseException`}),`: При ошибках HTTP-запроса`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`\\JsonException`}),`: При ошибках парсинга JSON-ответа`]}),`
`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Пример:`})}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M7.01 10.207h-.944l-.515 2.648h.838c.556 0 .97-.105 1.242-.314.272-.21.455-.559.55-1.049.092-.47.05-.802-.124-.995-.175-.193-.523-.29-1.047-.29zM12 5.688C5.373 5.688 0 8.514 0 12s5.373 6.313 12 6.313S24 15.486 24 12c0-3.486-5.373-6.312-12-6.312zm-3.26 7.451c-.261.25-.575.438-.917.551-.336.108-.765.164-1.285.164H5.357l-.327 1.681H3.652l1.23-6.326h2.65c.797 0 1.378.209 1.744.628.366.418.476 1.002.33 1.752a2.836 2.836 0 0 1-.305.847c-.143.255-.33.49-.561.703zm4.024.715l.543-2.799c.063-.318.039-.536-.068-.651-.107-.116-.336-.174-.687-.174H11.46l-.704 3.625H9.388l1.23-6.327h1.367l-.327 1.682h1.218c.767 0 1.295.134 1.586.401s.378.7.263 1.299l-.572 2.944h-1.389zm7.597-2.265a2.782 2.782 0 0 1-.305.847c-.143.255-.33.49-.561.703a2.44 2.44 0 0 1-.917.551c-.336.108-.765.164-1.286.164h-1.18l-.327 1.682h-1.378l1.23-6.326h2.649c.797 0 1.378.209 1.744.628.366.417.477 1.001.331 1.751zM17.766 10.207h-.943l-.516 2.648h.838c.557 0 .971-.105 1.242-.314.272-.21.455-.559.551-1.049.092-.47.049-.802-.125-.995s-.524-.29-1.047-.29z" fill="currentColor" /></svg>`,children:(0,n.jsxs)(t.code,{children:[(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{style:{"--shiki-light":`#6A737D`,"--shiki-dark":`#6A737D`},children:`// Поиск фильма по названию`})}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`$results `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`=`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:` $movieRequests`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`->`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`searchByName`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`(`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`'Матрица'`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`);`})]}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{style:{"--shiki-light":`#6A737D`,"--shiki-dark":`#6A737D`},children:`// Поиск с пагинацией`})}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`$results `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`=`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:` $movieRequests`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`->`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`searchByName`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`(`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`'Терминатор'`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`, `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`2`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`, `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`20`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`);`})]})]})})}),`
`,(0,n.jsx)(t.h2,{id:`getlatestmovies`,children:(0,n.jsx)(t.code,{children:`getLatestMovies()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Получает последние фильмы
Возвращает список последних фильмов, отсортированных по дате
выхода. Поддерживает фильтрацию по году для получения
фильмов конкретного года. Удобен для отображения новинок
или актуального контента.`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 1.0.0`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`API Endpoint:`}),` `,(0,n.jsx)(t.code,{children:`/v1.4/movie`})]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$year`}),` (int|null): Год для фильтрации (по умолчанию: текущий год)`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$page`}),` (int): Номер страницы результатов (по умолчанию: 1)`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$limit`}),` (int): Количество результатов на странице (по умолчанию: 10)`]}),`
`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`MovieDocsResponseDto`}),` Результаты поиска с пагинацией`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Исключения:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`KinopoiskDevException`}),`: При ошибках API или валидации`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`KinopoiskResponseException`}),`: При ошибках HTTP-запроса`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`\\JsonException`}),`: При ошибках парсинга JSON-ответа`]}),`
`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Пример:`})}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M7.01 10.207h-.944l-.515 2.648h.838c.556 0 .97-.105 1.242-.314.272-.21.455-.559.55-1.049.092-.47.05-.802-.124-.995-.175-.193-.523-.29-1.047-.29zM12 5.688C5.373 5.688 0 8.514 0 12s5.373 6.313 12 6.313S24 15.486 24 12c0-3.486-5.373-6.312-12-6.312zm-3.26 7.451c-.261.25-.575.438-.917.551-.336.108-.765.164-1.285.164H5.357l-.327 1.681H3.652l1.23-6.326h2.65c.797 0 1.378.209 1.744.628.366.418.476 1.002.33 1.752a2.836 2.836 0 0 1-.305.847c-.143.255-.33.49-.561.703zm4.024.715l.543-2.799c.063-.318.039-.536-.068-.651-.107-.116-.336-.174-.687-.174H11.46l-.704 3.625H9.388l1.23-6.327h1.367l-.327 1.682h1.218c.767 0 1.295.134 1.586.401s.378.7.263 1.299l-.572 2.944h-1.389zm7.597-2.265a2.782 2.782 0 0 1-.305.847c-.143.255-.33.49-.561.703a2.44 2.44 0 0 1-.917.551c-.336.108-.765.164-1.286.164h-1.18l-.327 1.682h-1.378l1.23-6.326h2.649c.797 0 1.378.209 1.744.628.366.417.477 1.001.331 1.751zM17.766 10.207h-.943l-.516 2.648h.838c.557 0 .971-.105 1.242-.314.272-.21.455-.559.551-1.049.092-.47.049-.802-.125-.995s-.524-.29-1.047-.29z" fill="currentColor" /></svg>`,children:(0,n.jsxs)(t.code,{children:[(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{style:{"--shiki-light":`#6A737D`,"--shiki-dark":`#6A737D`},children:`// Получить последние фильмы текущего года`})}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`$latest `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`=`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:` $movieRequests`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`->`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`getLatestMovies`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`();`})]}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{style:{"--shiki-light":`#6A737D`,"--shiki-dark":`#6A737D`},children:`// Получить фильмы 2023 года`})}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`$movies2023 `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`=`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:` $movieRequests`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`->`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`getLatestMovies`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`(`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`2023`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`, `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`1`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`, `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`50`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`);`})]})]})})}),`
`,(0,n.jsx)(t.h2,{id:`getmoviesbygenre`,children:(0,n.jsx)(t.code,{children:`getMoviesByGenre()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Получает фильмы по жанру
Возвращает список фильмов определенного жанра или жанров,
отсортированных по рейтингу Kinopoisk. Поддерживает как
одиночный жанр, так и массив жанров для более точной
фильтрации.`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 1.0.0`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$genres`}),` (string|array<string>): Жанр или массив жанров для фильтрации`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$page`}),` (int): Номер страницы результатов (по умолчанию: 1)`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$limit`}),` (int): Количество результатов на странице (по умолчанию: 10)`]}),`
`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`MovieDocsResponseDto`}),` Фильмы указанного жанра с пагинацией`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Исключения:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`KinopoiskDevException`}),`: При ошибках API или валидации`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`KinopoiskResponseException`}),`: При ошибках HTTP-запроса`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`\\JsonException`}),`: При ошибках парсинга JSON-ответа`]}),`
`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Пример:`})}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M7.01 10.207h-.944l-.515 2.648h.838c.556 0 .97-.105 1.242-.314.272-.21.455-.559.55-1.049.092-.47.05-.802-.124-.995-.175-.193-.523-.29-1.047-.29zM12 5.688C5.373 5.688 0 8.514 0 12s5.373 6.313 12 6.313S24 15.486 24 12c0-3.486-5.373-6.312-12-6.312zm-3.26 7.451c-.261.25-.575.438-.917.551-.336.108-.765.164-1.285.164H5.357l-.327 1.681H3.652l1.23-6.326h2.65c.797 0 1.378.209 1.744.628.366.418.476 1.002.33 1.752a2.836 2.836 0 0 1-.305.847c-.143.255-.33.49-.561.703zm4.024.715l.543-2.799c.063-.318.039-.536-.068-.651-.107-.116-.336-.174-.687-.174H11.46l-.704 3.625H9.388l1.23-6.327h1.367l-.327 1.682h1.218c.767 0 1.295.134 1.586.401s.378.7.263 1.299l-.572 2.944h-1.389zm7.597-2.265a2.782 2.782 0 0 1-.305.847c-.143.255-.33.49-.561.703a2.44 2.44 0 0 1-.917.551c-.336.108-.765.164-1.286.164h-1.18l-.327 1.682h-1.378l1.23-6.326h2.649c.797 0 1.378.209 1.744.628.366.417.477 1.001.331 1.751zM17.766 10.207h-.943l-.516 2.648h.838c.557 0 .971-.105 1.242-.314.272-.21.455-.559.551-1.049.092-.47.049-.802-.125-.995s-.524-.29-1.047-.29z" fill="currentColor" /></svg>`,children:(0,n.jsxs)(t.code,{children:[(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{style:{"--shiki-light":`#6A737D`,"--shiki-dark":`#6A737D`},children:`// Получить боевики`})}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`$actionMovies `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`=`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:` $movieRequests`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`->`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`getMoviesByGenre`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`(`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`'боевик'`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`);`})]}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{style:{"--shiki-light":`#6A737D`,"--shiki-dark":`#6A737D`},children:`// Получить комедии и драмы`})}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`$movies `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`=`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:` $movieRequests`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`->`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`getMoviesByGenre`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`([`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`'комедия'`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`, `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`'драма'`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`], `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`1`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`, `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`30`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`);`})]})]})})}),`
`,(0,n.jsx)(t.h2,{id:`searchmovies`,children:(0,n.jsx)(t.code,{children:`searchMovies()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Ищет фильмы по различным критериям
Основной метод для поиска фильмов с использованием расширенной
фильтрации. Поддерживает фильтрацию по году, жанру, стране,
рейтингу, типу фильма и многим другим критериям. Включает
валидацию параметров и автоматическую пагинацию.`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 1.0.0`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`API Endpoint:`}),` `,(0,n.jsx)(t.code,{children:`/v1.4/movie`})]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$filters`}),` (MovieSearchFilter|null): Объект фильтра для настройки критериев поиска`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$page`}),` (int): Номер страницы результатов (по умолчанию: 1)`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$limit`}),` (int): Количество результатов на странице (по умолчанию: 10, максимум: 250)`]}),`
`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`MovieDocsResponseDto`}),` Результаты поиска с пагинацией`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Исключения:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`KinopoiskDevException`}),`: При ошибках валидации или превышении лимитов`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`KinopoiskResponseException`}),`: При ошибках HTTP-запроса`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`\\JsonException`}),`: При ошибках парсинга JSON-ответа`]}),`
`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Пример:`})}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M7.01 10.207h-.944l-.515 2.648h.838c.556 0 .97-.105 1.242-.314.272-.21.455-.559.55-1.049.092-.47.05-.802-.124-.995-.175-.193-.523-.29-1.047-.29zM12 5.688C5.373 5.688 0 8.514 0 12s5.373 6.313 12 6.313S24 15.486 24 12c0-3.486-5.373-6.312-12-6.312zm-3.26 7.451c-.261.25-.575.438-.917.551-.336.108-.765.164-1.285.164H5.357l-.327 1.681H3.652l1.23-6.326h2.65c.797 0 1.378.209 1.744.628.366.418.476 1.002.33 1.752a2.836 2.836 0 0 1-.305.847c-.143.255-.33.49-.561.703zm4.024.715l.543-2.799c.063-.318.039-.536-.068-.651-.107-.116-.336-.174-.687-.174H11.46l-.704 3.625H9.388l1.23-6.327h1.367l-.327 1.682h1.218c.767 0 1.295.134 1.586.401s.378.7.263 1.299l-.572 2.944h-1.389zm7.597-2.265a2.782 2.782 0 0 1-.305.847c-.143.255-.33.49-.561.703a2.44 2.44 0 0 1-.917.551c-.336.108-.765.164-1.286.164h-1.18l-.327 1.682h-1.378l1.23-6.326h2.649c.797 0 1.378.209 1.744.628.366.417.477 1.001.331 1.751zM17.766 10.207h-.943l-.516 2.648h.838c.557 0 .971-.105 1.242-.314.272-.21.455-.559.551-1.049.092-.47.049-.802-.125-.995s-.524-.29-1.047-.29z" fill="currentColor" /></svg>`,children:(0,n.jsxs)(t.code,{children:[(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{style:{"--shiki-light":`#6A737D`,"--shiki-dark":`#6A737D`},children:`// Простой поиск всех фильмов`})}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`$results `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`=`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:` $movieRequests`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`->`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`searchMovies`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`();`})]}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{style:{"--shiki-light":`#6A737D`,"--shiki-dark":`#6A737D`},children:`// Поиск с фильтрами`})}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`$filter `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`=`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:` new`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:` MovieSearchFilter`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`();`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`$filter`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`->`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`year`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`(`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`2023`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`)`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`->`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`rating`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`(`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`7.0`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`)`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`->`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`genre`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`(`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`'боевик'`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`);`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`$results `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`=`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:` $movieRequests`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`->`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`searchMovies`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`($filter, `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`1`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`, `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`50`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`);`})]})]})})}),`
`,(0,n.jsx)(t.h2,{id:`getmoviesbycountry`,children:(0,n.jsx)(t.code,{children:`getMoviesByCountry()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Получает фильмы по стране
Возвращает список фильмов из определенной страны или стран,
отсортированных по рейтингу Kinopoisk. Поддерживает как
одиночную страну, так и массив стран для получения
фильмов из нескольких стран одновременно.`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 1.0.0`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$countries`}),` (string|array<string>): Страна или массив стран для фильтрации`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$page`}),` (int): Номер страницы результатов (по умолчанию: 1)`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$limit`}),` (int): Количество результатов на странице (по умолчанию: 10)`]}),`
`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`MovieDocsResponseDto`}),` Фильмы из указанной страны с пагинацией`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Исключения:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`KinopoiskDevException`}),`: При ошибках API или валидации`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`KinopoiskResponseException`}),`: При ошибках HTTP-запроса`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`\\JsonException`}),`: При ошибках парсинга JSON-ответа`]}),`
`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Пример:`})}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M7.01 10.207h-.944l-.515 2.648h.838c.556 0 .97-.105 1.242-.314.272-.21.455-.559.55-1.049.092-.47.05-.802-.124-.995-.175-.193-.523-.29-1.047-.29zM12 5.688C5.373 5.688 0 8.514 0 12s5.373 6.313 12 6.313S24 15.486 24 12c0-3.486-5.373-6.312-12-6.312zm-3.26 7.451c-.261.25-.575.438-.917.551-.336.108-.765.164-1.285.164H5.357l-.327 1.681H3.652l1.23-6.326h2.65c.797 0 1.378.209 1.744.628.366.418.476 1.002.33 1.752a2.836 2.836 0 0 1-.305.847c-.143.255-.33.49-.561.703zm4.024.715l.543-2.799c.063-.318.039-.536-.068-.651-.107-.116-.336-.174-.687-.174H11.46l-.704 3.625H9.388l1.23-6.327h1.367l-.327 1.682h1.218c.767 0 1.295.134 1.586.401s.378.7.263 1.299l-.572 2.944h-1.389zm7.597-2.265a2.782 2.782 0 0 1-.305.847c-.143.255-.33.49-.561.703a2.44 2.44 0 0 1-.917.551c-.336.108-.765.164-1.286.164h-1.18l-.327 1.682h-1.378l1.23-6.326h2.649c.797 0 1.378.209 1.744.628.366.417.477 1.001.331 1.751zM17.766 10.207h-.943l-.516 2.648h.838c.557 0 .971-.105 1.242-.314.272-.21.455-.559.551-1.049.092-.47.049-.802-.125-.995s-.524-.29-1.047-.29z" fill="currentColor" /></svg>`,children:(0,n.jsxs)(t.code,{children:[(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{style:{"--shiki-light":`#6A737D`,"--shiki-dark":`#6A737D`},children:`// Получить американские фильмы`})}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`$usMovies `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`=`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:` $movieRequests`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`->`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`getMoviesByCountry`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`(`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`'США'`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`);`})]}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{style:{"--shiki-light":`#6A737D`,"--shiki-dark":`#6A737D`},children:`// Получить фильмы из нескольких стран`})}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`$movies `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`=`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:` $movieRequests`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`->`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`getMoviesByCountry`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`([`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`'США'`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`, `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`'Великобритания'`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`], `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`1`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`, `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`25`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`);`})]})]})})}),`
`,(0,n.jsx)(t.h2,{id:`getmoviesbyyearrange`,children:(0,n.jsx)(t.code,{children:`getMoviesByYearRange()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Получает фильмы по диапазону лет
Возвращает список фильмов, выпущенных в указанном диапазоне лет,
отсортированных по году выпуска. Полезен для получения фильмов
определенного периода или десятилетия.`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 1.0.0`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$fromYear`}),` (int): Начальный год диапазона (включительно)`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$toYear`}),` (int): Конечный год диапазона (включительно)`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$page`}),` (int): Номер страницы результатов (по умолчанию: 1)`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$limit`}),` (int): Количество результатов на странице (по умолчанию: 10)`]}),`
`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`MovieDocsResponseDto`}),` Фильмы из указанного периода с пагинацией`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Исключения:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`KinopoiskDevException`}),`: При ошибках API или валидации`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`KinopoiskResponseException`}),`: При ошибках HTTP-запроса`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`\\JsonException`}),`: При ошибках парсинга JSON-ответа`]}),`
`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Пример:`})}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M7.01 10.207h-.944l-.515 2.648h.838c.556 0 .97-.105 1.242-.314.272-.21.455-.559.55-1.049.092-.47.05-.802-.124-.995-.175-.193-.523-.29-1.047-.29zM12 5.688C5.373 5.688 0 8.514 0 12s5.373 6.313 12 6.313S24 15.486 24 12c0-3.486-5.373-6.312-12-6.312zm-3.26 7.451c-.261.25-.575.438-.917.551-.336.108-.765.164-1.285.164H5.357l-.327 1.681H3.652l1.23-6.326h2.65c.797 0 1.378.209 1.744.628.366.418.476 1.002.33 1.752a2.836 2.836 0 0 1-.305.847c-.143.255-.33.49-.561.703zm4.024.715l.543-2.799c.063-.318.039-.536-.068-.651-.107-.116-.336-.174-.687-.174H11.46l-.704 3.625H9.388l1.23-6.327h1.367l-.327 1.682h1.218c.767 0 1.295.134 1.586.401s.378.7.263 1.299l-.572 2.944h-1.389zm7.597-2.265a2.782 2.782 0 0 1-.305.847c-.143.255-.33.49-.561.703a2.44 2.44 0 0 1-.917.551c-.336.108-.765.164-1.286.164h-1.18l-.327 1.682h-1.378l1.23-6.326h2.649c.797 0 1.378.209 1.744.628.366.417.477 1.001.331 1.751zM17.766 10.207h-.943l-.516 2.648h.838c.557 0 .971-.105 1.242-.314.272-.21.455-.559.551-1.049.092-.47.049-.802-.125-.995s-.524-.29-1.047-.29z" fill="currentColor" /></svg>`,children:(0,n.jsxs)(t.code,{children:[(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{style:{"--shiki-light":`#6A737D`,"--shiki-dark":`#6A737D`},children:`// Получить фильмы 90-х годов`})}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`$movies90s `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`=`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:` $movieRequests`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`->`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`getMoviesByYearRange`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`(`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`1990`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`, `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`1999`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`);`})]}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{style:{"--shiki-light":`#6A737D`,"--shiki-dark":`#6A737D`},children:`// Получить фильмы последнего десятилетия`})}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`$recentMovies `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`=`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:` $movieRequests`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`->`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`getMoviesByYearRange`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`(`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`2014`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`, `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`2024`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`, `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`1`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`, `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`100`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`);`})]})]})})})]})}function l(e={}){let{wrapper:t}=e.components||{};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}export{a as _markdown,l as default,r as frontmatter,i as lastModified,o as structuredData,s as toc};