import{r as e}from"./rolldown-runtime-QTnfLwEv.js";import{t}from"./jsx-runtime-By8HlURe.js";var n=e(t()),r={title:`FilmService - Сервис для работы с фильмами`,description:`Документация по filmservice - сервис для работы с фильмами. Часть API wrapper для КиноПоиска.`},i=new Date(1787218238e3),a=`

Сервис для работы с фильмами в Kinopoisk API.

***

**📚 Навигация:** [Главная](../index) → [Сервисы](index) → FilmService

**🔗 Связанные классы:**

* [Client](../client) - Основной клиент
* [Film](../models/film) - Модель фильма
* [Staff](../models/staff) - Модель съемочной группы
* [Review](../models/review) - Модель отзыва
* [Fact](../models/fact) - Модель факта
* [Image](../models/image) - Модель изображения
* [Video](../models/video) - Модель видео
* [Award](../models/award) - Модель награды
* [BoxOffice](../models/box-office) - Модель кассовых сборов
* [Episode](../models/episode) - Модель эпизода
* [Season](../models/season) - Модель сезона
* [RelatedFilm](../models/related-film) - Модель связанного фильма
* [FilmSearchResult](../models/film-search-result) - Модель результата поиска
* [KeywordSearchResponse](../responses/keyword-search-response) - Ответ поиска
* [ImageType](../enums/image-type) - Типы изображений
* [ReviewOrder](../enums/review-order) - Порядок сортировки отзывов
* [ReviewType](../enums/review-type) - Типы отзывов
* [FactType](../enums/fact-type) - Типы фактов
* [VideoSite](../enums/video-site) - Сайты видео
* [BoxOfficeType](../enums/box-office-type) - Типы кассовых сборов
* [ContentType](../enums/content-type) - Типы контента
* [FilmOrder](../enums/film-order) - Порядок сортировки фильмов
* [Month](../enums/month) - Месяцы
* [ApiException](../exceptions/api-exception) - Базовое исключение API
* [ResourceNotFoundException](../exceptions/resource-not-found-exception) - Ресурс не найден
* [RateLimitException](../exceptions/rate-limit-exception) - Превышение лимита

***

## Описание [#описание]

Предоставляет полный набор методов для взаимодействия с фильмами через Kinopoisk API. Реализует CRUD операции: Create (поиск), Read (получение данных), Update (не поддерживается), Delete (не поддерживается).

## Основные возможности [#основные-возможности]

* Получение детальной информации о фильмах
* Поиск фильмов по ключевым словам и фильтрам
* Получение связанного контента (сезоны, факты, награды, отзывы)
* Работа с коллекциями фильмов (популярные, топ-250)
* Получение премьер и фильтров для поиска

## Конструктор [#конструктор]

### \`__construct(Client $client)\` [#__constructclient-client]

Инициализирует новый экземпляр сервиса с переданным HTTP-клиентом и устанавливает версию API v2.2 для работы с Kinopoisk Unofficial API.

**Параметры:**

* \`$client\` (Client) - HTTP-клиент для выполнения запросов к API

**Пример:**

\`\`\`php
$client = new Client('your-api-key');
$service = new FilmService($client);
\`\`\`

## Методы [#методы]

### \`getById(int $id): Film\` [#getbyidint-id-film]

Получает детальную информацию о фильме по его ID.

**Параметры:**

* \`$id\` (int) - ID фильма в базе Kinopoisk

**Возвращает:**

* \`Film\` - Объект с информацией о фильме

**Пример:**

\`\`\`php
$film = $filmService->getById(301); // Матрица
echo $film->getDisplayName();
\`\`\`

### \`getSeasons(int $id): DefaultResponse\` [#getseasonsint-id-defaultresponse]

Получает информацию о сезонах сериала.

**Параметры:**

* \`$id\` (int) - ID сериала

**Возвращает:**

* \`DefaultResponse\` - Ответ с сезонами сериала

### \`getFacts(int $id): DefaultResponse\` [#getfactsint-id-defaultresponse]

Получает факты и ошибки о фильме.

**Параметры:**

* \`$id\` (int) - ID фильма

**Возвращает:**

* \`DefaultResponse\` - Ответ с фактами о фильме

### \`getDistributions(int $id): DefaultResponse\` [#getdistributionsint-id-defaultresponse]

Получает информацию о прокате фильма.

**Параметры:**

* \`$id\` (int) - ID фильма

**Возвращает:**

* \`DefaultResponse\` - Ответ с информацией о прокате

### \`getBoxOffice(int $id): BudgetResponse\` [#getboxofficeint-id-budgetresponse]

Получает информацию о кассовых сборах фильма.

**Параметры:**

* \`$id\` (int) - ID фильма

**Возвращает:**

* \`BudgetResponse\` - Ответ с информацией о кассовых сборах

### \`getAwards(int $id): DefaultResponse\` [#getawardsint-id-defaultresponse]

Получает информацию о наградах фильма.

**Параметры:**

* \`$id\` (int) - ID фильма

**Возвращает:**

* \`DefaultResponse\` - Ответ с информацией о наградах

### \`getVideos(int $id): DefaultResponse\` [#getvideosint-id-defaultresponse]

Получает видео контент фильма (трейлеры, клипы).

**Параметры:**

* \`$id\` (int) - ID фильма

**Возвращает:**

* \`DefaultResponse\` - Ответ с видео контентом

### \`getSimilar(int $id): DefaultResponse\` [#getsimilarint-id-defaultresponse]

Получает похожие фильмы.

**Параметры:**

* \`$id\` (int) - ID фильма

**Возвращает:**

* \`DefaultResponse\` - Ответ с похожими фильмами

### \`getImages(int $id, ImageType $type = ImageType::STILL, int $page = 1): PaginatedResponse\` [#getimagesint-id-imagetype-type--imagetypestill-int-page--1-paginatedresponse]

Получает изображения фильма определенного типа.

**Параметры:**

* \`$id\` (int) - ID фильма
* \`$type\` (ImageType) - Тип изображений (по умолчанию STILL)
* \`$page\` (int) - Номер страницы (по умолчанию 1)

**Возвращает:**

* \`PaginatedResponse\` - Пагинированный ответ с изображениями

**Пример:**

\`\`\`php
// Получение постеров
$posters = $filmService->getImages(301, ImageType::POSTER);

// Получение кадров из фильма
$stills = $filmService->getImages(301, ImageType::STILL);
\`\`\`

### \`getReviews(int $id, int $page = 1, ReviewOrder $order = ReviewOrder::DATE_DESC): ReviewResponse\` [#getreviewsint-id-int-page--1-revieworder-order--revieworderdate_desc-reviewresponse]

Получает отзывы о фильме.

**Параметры:**

* \`$id\` (int) - ID фильма
* \`$page\` (int) - Номер страницы (по умолчанию 1)
* \`$order\` (ReviewOrder) - Порядок сортировки (по умолчанию DATE\\_DESC)

**Возвращает:**

* \`ReviewResponse\` - Ответ с отзывами

### \`getExternalSources(int $id, int $page = 1): PaginatedResponse\` [#getexternalsourcesint-id-int-page--1-paginatedresponse]

Получает внешние источники фильма.

**Параметры:**

* \`$id\` (int) - ID фильма
* \`$page\` (int) - Номер страницы (по умолчанию 1)

**Возвращает:**

* \`PaginatedResponse\` - Пагинированный ответ с внешними источниками

### \`getSequelsAndPrequels(int $id): SequelPrequelResponse\` [#getsequelsandprequelsint-id-sequelprequelresponse]

Получает сиквелы и приквелы фильма.

**Параметры:**

* \`$id\` (int) - ID фильма

**Возвращает:**

* \`SequelPrequelResponse\` - Ответ с сиквелами и приквелами

### \`searchByKeyword(string $keyword, int $page = 1): KeywordSearchResponse\` [#searchbykeywordstring-keyword-int-page--1-keywordsearchresponse]

Поиск фильмов по ключевому слову.

**Параметры:**

* \`$keyword\` (string) - Ключевое слово для поиска
* \`$page\` (int) - Номер страницы (по умолчанию 1)

**Возвращает:**

* \`KeywordSearchResponse\` - Ответ с результатами поиска

**Пример:**

\`\`\`php
$results = $filmService->searchByKeyword('матрица');
foreach ($results->items as $film) {
    echo $film->getDisplayName() . "\\n";
}
\`\`\`

### \`getPremieres(int $year, Month $month): DefaultResponse\` [#getpremieresint-year-month-month-defaultresponse]

Получает премьеры фильмов в указанном месяце и году.

**Параметры:**

* \`$year\` (int) - Год
* \`$month\` (Month) - Месяц

**Возвращает:**

* \`DefaultResponse\` - Ответ с премьерами

### \`getFilters(): Filters\` [#getfilters-filters]

Получает доступные фильтры для поиска.

**Возвращает:**

* \`Filters\` - Объект с доступными фильтрами

### \`getPopular(int $page = 1): PaginatedResponse\` [#getpopularint-page--1-paginatedresponse]

Получает популярные фильмы.

**Параметры:**

* \`$page\` (int) - Номер страницы (по умолчанию 1)

**Возвращает:**

* \`PaginatedResponse\` - Пагинированный ответ с популярными фильмами

### \`getCollections(CollectionType $type = CollectionType::TOP_POPULAR_ALL, int $page = 1): PaginatedResponse\` [#getcollectionscollectiontype-type--collectiontypetop_popular_all-int-page--1-paginatedresponse]

Получает коллекции фильмов.

**Параметры:**

* \`$type\` (CollectionType) - Тип коллекции (по умолчанию TOP\\_POPULAR\\_ALL)
* \`$page\` (int) - Номер страницы (по умолчанию 1)

**Возвращает:**

* \`PaginatedResponse\` - Пагинированный ответ с коллекцией фильмов

### \`getTop250(int $page = 1): PaginatedResponse\` [#gettop250int-page--1-paginatedresponse]

Получает топ-250 фильмов.

**Параметры:**

* \`$page\` (int) - Номер страницы (по умолчанию 1)

**Возвращает:**

* \`PaginatedResponse\` - Пагинированный ответ с топ-250 фильмами

### \`searchFilmsByFilter(...): PaginatedResponse\` [#searchfilmsbyfilter-paginatedresponse]

Поиск фильмов с использованием фильтров.

**Параметры:**

* \`$country\` (array|null) - Массив стран
* \`$genre\` (array|null) - Массив жанров
* \`$order\` (FilmOrder) - Порядок сортировки (по умолчанию RATING)
* \`$type\` (ContentType) - Тип контента (по умолчанию ALL)
* \`$ratingFrom\` (float) - Минимальный рейтинг (по умолчанию 0)
* \`$ratingTo\` (float) - Максимальный рейтинг (по умолчанию 10)
* \`$yearFrom\` (int) - Минимальный год (по умолчанию 1000)
* \`$yearTo\` (int) - Максимальный год (по умолчанию 3000)
* \`$imdbId\` (string|null) - IMDB ID
* \`$keyword\` (string|null) - Ключевое слово
* \`$page\` (int) - Номер страницы (по умолчанию 1)

**Возвращает:**

* \`PaginatedResponse\` - Пагинированный ответ с результатами поиска

**Пример:**

\`\`\`php
// Поиск боевиков из США с рейтингом выше 7
$results = $filmService->searchFilmsByFilter(
    country: ['США'],
    genre: ['боевик'],
    order: FilmOrder::RATING,
    type: ContentType::FILM,
    ratingFrom: 7.0,
    yearFrom: 2020
);
\`\`\`

## Примеры использования [#примеры-использования]

### Базовое использование [#базовое-использование]

\`\`\`php
<?php

use NotKinopoisk\\Client;
use NotKinopoisk\\Services\\FilmService;

$client = new Client('api-key');
$filmService = $client->films;

// Получение информации о фильме
$film = $filmService->getById(301);
echo $film->getDisplayName();

// Поиск фильмов
$results = $filmService->searchByKeyword('матрица');
foreach ($results->items as $film) {
    echo $film->getDisplayName() . "\\n";
}
\`\`\`

### Работа с изображениями [#работа-с-изображениями]

\`\`\`php
// Получение постеров
$posters = $filmService->getImages(301, ImageType::POSTER);

// Получение кадров из фильма
$stills = $filmService->getImages(301, ImageType::STILL);

// Получение фан-артов
$fanArts = $filmService->getImages(301, ImageType::FAN_ART);
\`\`\`

### Работа с коллекциями [#работа-с-коллекциями]

\`\`\`php
// Получение популярных фильмов
$popular = $filmService->getPopular();

// Получение топ-250 фильмов
$top250 = $filmService->getTop250();

// Получение коллекций
$collections = $filmService->getCollections(CollectionType::TOP_POPULAR_MOVIES);
\`\`\`

## Связанные классы [#связанные-классы]

* \`\\NotKinopoisk\\Models\\Film\` - Модель фильма
* \`\\NotKinopoisk\\Models\\FilmCollection\` - Коллекция фильмов
* \`\\NotKinopoisk\\Responses\\PaginatedResponse\` - Пагинированный ответ
* \`\\NotKinopoisk\\Responses\\KeywordSearchResponse\` - Ответ поиска по ключевым словам
* \`\\NotKinopoisk\\Enums\\ImageType\` - Типы изображений
* \`\\NotKinopoisk\\Enums\\CollectionType\` - Типы коллекций
* \`\\NotKinopoisk\\Enums\\FilmOrder\` - Порядок сортировки фильмов

## Информация о пакете [#информация-о-пакете]

* **Пакет:** NotKinopoisk\\Services
* **Версия:** 1.0.0
* **Автор:** Maxim Harder (\`dev@devcraft.club\`)
* **API версия:** v2.2
`,o={contents:[{heading:void 0,content:`Сервис для работы с фильмами в Kinopoisk API.`},{heading:void 0,content:`**📚 Навигация:** Главная → Сервисы → FilmService`},{heading:void 0,content:`**🔗 Связанные классы:**`},{heading:void 0,content:`Client - Основной клиент`},{heading:void 0,content:`Film - Модель фильма`},{heading:void 0,content:`Staff - Модель съемочной группы`},{heading:void 0,content:`Review - Модель отзыва`},{heading:void 0,content:`Fact - Модель факта`},{heading:void 0,content:`Image - Модель изображения`},{heading:void 0,content:`Video - Модель видео`},{heading:void 0,content:`Award - Модель награды`},{heading:void 0,content:`BoxOffice - Модель кассовых сборов`},{heading:void 0,content:`Episode - Модель эпизода`},{heading:void 0,content:`Season - Модель сезона`},{heading:void 0,content:`RelatedFilm - Модель связанного фильма`},{heading:void 0,content:`FilmSearchResult - Модель результата поиска`},{heading:void 0,content:`KeywordSearchResponse - Ответ поиска`},{heading:void 0,content:`ImageType - Типы изображений`},{heading:void 0,content:`ReviewOrder - Порядок сортировки отзывов`},{heading:void 0,content:`ReviewType - Типы отзывов`},{heading:void 0,content:`FactType - Типы фактов`},{heading:void 0,content:`VideoSite - Сайты видео`},{heading:void 0,content:`BoxOfficeType - Типы кассовых сборов`},{heading:void 0,content:`ContentType - Типы контента`},{heading:void 0,content:`FilmOrder - Порядок сортировки фильмов`},{heading:void 0,content:`Month - Месяцы`},{heading:void 0,content:`ApiException - Базовое исключение API`},{heading:void 0,content:`ResourceNotFoundException - Ресурс не найден`},{heading:void 0,content:`RateLimitException - Превышение лимита`},{heading:`описание`,content:`Предоставляет полный набор методов для взаимодействия с фильмами через Kinopoisk API. Реализует CRUD операции: Create (поиск), Read (получение данных), Update (не поддерживается), Delete (не поддерживается).`},{heading:`основные-возможности`,content:`Получение детальной информации о фильмах`},{heading:`основные-возможности`,content:`Поиск фильмов по ключевым словам и фильтрам`},{heading:`основные-возможности`,content:`Получение связанного контента (сезоны, факты, награды, отзывы)`},{heading:`основные-возможности`,content:`Работа с коллекциями фильмов (популярные, топ-250)`},{heading:`основные-возможности`,content:`Получение премьер и фильтров для поиска`},{heading:`__constructclient-client`,content:`Инициализирует новый экземпляр сервиса с переданным HTTP-клиентом и устанавливает версию API v2.2 для работы с Kinopoisk Unofficial API.`},{heading:`__constructclient-client`,content:`**Параметры:**`},{heading:`__constructclient-client`,content:"`$client` (Client) - HTTP-клиент для выполнения запросов к API"},{heading:`__constructclient-client`,content:`**Пример:**`},{heading:`getbyidint-id-film`,content:`Получает детальную информацию о фильме по его ID.`},{heading:`getbyidint-id-film`,content:`**Параметры:**`},{heading:`getbyidint-id-film`,content:"`$id` (int) - ID фильма в базе Kinopoisk"},{heading:`getbyidint-id-film`,content:`**Возвращает:**`},{heading:`getbyidint-id-film`,content:"`Film` - Объект с информацией о фильме"},{heading:`getbyidint-id-film`,content:`**Пример:**`},{heading:`getseasonsint-id-defaultresponse`,content:`Получает информацию о сезонах сериала.`},{heading:`getseasonsint-id-defaultresponse`,content:`**Параметры:**`},{heading:`getseasonsint-id-defaultresponse`,content:"`$id` (int) - ID сериала"},{heading:`getseasonsint-id-defaultresponse`,content:`**Возвращает:**`},{heading:`getseasonsint-id-defaultresponse`,content:"`DefaultResponse` - Ответ с сезонами сериала"},{heading:`getfactsint-id-defaultresponse`,content:`Получает факты и ошибки о фильме.`},{heading:`getfactsint-id-defaultresponse`,content:`**Параметры:**`},{heading:`getfactsint-id-defaultresponse`,content:"`$id` (int) - ID фильма"},{heading:`getfactsint-id-defaultresponse`,content:`**Возвращает:**`},{heading:`getfactsint-id-defaultresponse`,content:"`DefaultResponse` - Ответ с фактами о фильме"},{heading:`getdistributionsint-id-defaultresponse`,content:`Получает информацию о прокате фильма.`},{heading:`getdistributionsint-id-defaultresponse`,content:`**Параметры:**`},{heading:`getdistributionsint-id-defaultresponse`,content:"`$id` (int) - ID фильма"},{heading:`getdistributionsint-id-defaultresponse`,content:`**Возвращает:**`},{heading:`getdistributionsint-id-defaultresponse`,content:"`DefaultResponse` - Ответ с информацией о прокате"},{heading:`getboxofficeint-id-budgetresponse`,content:`Получает информацию о кассовых сборах фильма.`},{heading:`getboxofficeint-id-budgetresponse`,content:`**Параметры:**`},{heading:`getboxofficeint-id-budgetresponse`,content:"`$id` (int) - ID фильма"},{heading:`getboxofficeint-id-budgetresponse`,content:`**Возвращает:**`},{heading:`getboxofficeint-id-budgetresponse`,content:"`BudgetResponse` - Ответ с информацией о кассовых сборах"},{heading:`getawardsint-id-defaultresponse`,content:`Получает информацию о наградах фильма.`},{heading:`getawardsint-id-defaultresponse`,content:`**Параметры:**`},{heading:`getawardsint-id-defaultresponse`,content:"`$id` (int) - ID фильма"},{heading:`getawardsint-id-defaultresponse`,content:`**Возвращает:**`},{heading:`getawardsint-id-defaultresponse`,content:"`DefaultResponse` - Ответ с информацией о наградах"},{heading:`getvideosint-id-defaultresponse`,content:`Получает видео контент фильма (трейлеры, клипы).`},{heading:`getvideosint-id-defaultresponse`,content:`**Параметры:**`},{heading:`getvideosint-id-defaultresponse`,content:"`$id` (int) - ID фильма"},{heading:`getvideosint-id-defaultresponse`,content:`**Возвращает:**`},{heading:`getvideosint-id-defaultresponse`,content:"`DefaultResponse` - Ответ с видео контентом"},{heading:`getsimilarint-id-defaultresponse`,content:`Получает похожие фильмы.`},{heading:`getsimilarint-id-defaultresponse`,content:`**Параметры:**`},{heading:`getsimilarint-id-defaultresponse`,content:"`$id` (int) - ID фильма"},{heading:`getsimilarint-id-defaultresponse`,content:`**Возвращает:**`},{heading:`getsimilarint-id-defaultresponse`,content:"`DefaultResponse` - Ответ с похожими фильмами"},{heading:`getimagesint-id-imagetype-type--imagetypestill-int-page--1-paginatedresponse`,content:`Получает изображения фильма определенного типа.`},{heading:`getimagesint-id-imagetype-type--imagetypestill-int-page--1-paginatedresponse`,content:`**Параметры:**`},{heading:`getimagesint-id-imagetype-type--imagetypestill-int-page--1-paginatedresponse`,content:"`$id` (int) - ID фильма"},{heading:`getimagesint-id-imagetype-type--imagetypestill-int-page--1-paginatedresponse`,content:"`$type` (ImageType) - Тип изображений (по умолчанию STILL)"},{heading:`getimagesint-id-imagetype-type--imagetypestill-int-page--1-paginatedresponse`,content:"`$page` (int) - Номер страницы (по умолчанию 1)"},{heading:`getimagesint-id-imagetype-type--imagetypestill-int-page--1-paginatedresponse`,content:`**Возвращает:**`},{heading:`getimagesint-id-imagetype-type--imagetypestill-int-page--1-paginatedresponse`,content:"`PaginatedResponse` - Пагинированный ответ с изображениями"},{heading:`getimagesint-id-imagetype-type--imagetypestill-int-page--1-paginatedresponse`,content:`**Пример:**`},{heading:`getreviewsint-id-int-page--1-revieworder-order--revieworderdate_desc-reviewresponse`,content:`Получает отзывы о фильме.`},{heading:`getreviewsint-id-int-page--1-revieworder-order--revieworderdate_desc-reviewresponse`,content:`**Параметры:**`},{heading:`getreviewsint-id-int-page--1-revieworder-order--revieworderdate_desc-reviewresponse`,content:"`$id` (int) - ID фильма"},{heading:`getreviewsint-id-int-page--1-revieworder-order--revieworderdate_desc-reviewresponse`,content:"`$page` (int) - Номер страницы (по умолчанию 1)"},{heading:`getreviewsint-id-int-page--1-revieworder-order--revieworderdate_desc-reviewresponse`,content:"`$order` (ReviewOrder) - Порядок сортировки (по умолчанию DATE\\_DESC)"},{heading:`getreviewsint-id-int-page--1-revieworder-order--revieworderdate_desc-reviewresponse`,content:`**Возвращает:**`},{heading:`getreviewsint-id-int-page--1-revieworder-order--revieworderdate_desc-reviewresponse`,content:"`ReviewResponse` - Ответ с отзывами"},{heading:`getexternalsourcesint-id-int-page--1-paginatedresponse`,content:`Получает внешние источники фильма.`},{heading:`getexternalsourcesint-id-int-page--1-paginatedresponse`,content:`**Параметры:**`},{heading:`getexternalsourcesint-id-int-page--1-paginatedresponse`,content:"`$id` (int) - ID фильма"},{heading:`getexternalsourcesint-id-int-page--1-paginatedresponse`,content:"`$page` (int) - Номер страницы (по умолчанию 1)"},{heading:`getexternalsourcesint-id-int-page--1-paginatedresponse`,content:`**Возвращает:**`},{heading:`getexternalsourcesint-id-int-page--1-paginatedresponse`,content:"`PaginatedResponse` - Пагинированный ответ с внешними источниками"},{heading:`getsequelsandprequelsint-id-sequelprequelresponse`,content:`Получает сиквелы и приквелы фильма.`},{heading:`getsequelsandprequelsint-id-sequelprequelresponse`,content:`**Параметры:**`},{heading:`getsequelsandprequelsint-id-sequelprequelresponse`,content:"`$id` (int) - ID фильма"},{heading:`getsequelsandprequelsint-id-sequelprequelresponse`,content:`**Возвращает:**`},{heading:`getsequelsandprequelsint-id-sequelprequelresponse`,content:"`SequelPrequelResponse` - Ответ с сиквелами и приквелами"},{heading:`searchbykeywordstring-keyword-int-page--1-keywordsearchresponse`,content:`Поиск фильмов по ключевому слову.`},{heading:`searchbykeywordstring-keyword-int-page--1-keywordsearchresponse`,content:`**Параметры:**`},{heading:`searchbykeywordstring-keyword-int-page--1-keywordsearchresponse`,content:"`$keyword` (string) - Ключевое слово для поиска"},{heading:`searchbykeywordstring-keyword-int-page--1-keywordsearchresponse`,content:"`$page` (int) - Номер страницы (по умолчанию 1)"},{heading:`searchbykeywordstring-keyword-int-page--1-keywordsearchresponse`,content:`**Возвращает:**`},{heading:`searchbykeywordstring-keyword-int-page--1-keywordsearchresponse`,content:"`KeywordSearchResponse` - Ответ с результатами поиска"},{heading:`searchbykeywordstring-keyword-int-page--1-keywordsearchresponse`,content:`**Пример:**`},{heading:`getpremieresint-year-month-month-defaultresponse`,content:`Получает премьеры фильмов в указанном месяце и году.`},{heading:`getpremieresint-year-month-month-defaultresponse`,content:`**Параметры:**`},{heading:`getpremieresint-year-month-month-defaultresponse`,content:"`$year` (int) - Год"},{heading:`getpremieresint-year-month-month-defaultresponse`,content:"`$month` (Month) - Месяц"},{heading:`getpremieresint-year-month-month-defaultresponse`,content:`**Возвращает:**`},{heading:`getpremieresint-year-month-month-defaultresponse`,content:"`DefaultResponse` - Ответ с премьерами"},{heading:`getfilters-filters`,content:`Получает доступные фильтры для поиска.`},{heading:`getfilters-filters`,content:`**Возвращает:**`},{heading:`getfilters-filters`,content:"`Filters` - Объект с доступными фильтрами"},{heading:`getpopularint-page--1-paginatedresponse`,content:`Получает популярные фильмы.`},{heading:`getpopularint-page--1-paginatedresponse`,content:`**Параметры:**`},{heading:`getpopularint-page--1-paginatedresponse`,content:"`$page` (int) - Номер страницы (по умолчанию 1)"},{heading:`getpopularint-page--1-paginatedresponse`,content:`**Возвращает:**`},{heading:`getpopularint-page--1-paginatedresponse`,content:"`PaginatedResponse` - Пагинированный ответ с популярными фильмами"},{heading:`getcollectionscollectiontype-type--collectiontypetop_popular_all-int-page--1-paginatedresponse`,content:`Получает коллекции фильмов.`},{heading:`getcollectionscollectiontype-type--collectiontypetop_popular_all-int-page--1-paginatedresponse`,content:`**Параметры:**`},{heading:`getcollectionscollectiontype-type--collectiontypetop_popular_all-int-page--1-paginatedresponse`,content:"`$type` (CollectionType) - Тип коллекции (по умолчанию TOP\\_POPULAR\\_ALL)"},{heading:`getcollectionscollectiontype-type--collectiontypetop_popular_all-int-page--1-paginatedresponse`,content:"`$page` (int) - Номер страницы (по умолчанию 1)"},{heading:`getcollectionscollectiontype-type--collectiontypetop_popular_all-int-page--1-paginatedresponse`,content:`**Возвращает:**`},{heading:`getcollectionscollectiontype-type--collectiontypetop_popular_all-int-page--1-paginatedresponse`,content:"`PaginatedResponse` - Пагинированный ответ с коллекцией фильмов"},{heading:`gettop250int-page--1-paginatedresponse`,content:`Получает топ-250 фильмов.`},{heading:`gettop250int-page--1-paginatedresponse`,content:`**Параметры:**`},{heading:`gettop250int-page--1-paginatedresponse`,content:"`$page` (int) - Номер страницы (по умолчанию 1)"},{heading:`gettop250int-page--1-paginatedresponse`,content:`**Возвращает:**`},{heading:`gettop250int-page--1-paginatedresponse`,content:"`PaginatedResponse` - Пагинированный ответ с топ-250 фильмами"},{heading:`searchfilmsbyfilter-paginatedresponse`,content:`Поиск фильмов с использованием фильтров.`},{heading:`searchfilmsbyfilter-paginatedresponse`,content:`**Параметры:**`},{heading:`searchfilmsbyfilter-paginatedresponse`,content:"`$country` (array|null) - Массив стран"},{heading:`searchfilmsbyfilter-paginatedresponse`,content:"`$genre` (array|null) - Массив жанров"},{heading:`searchfilmsbyfilter-paginatedresponse`,content:"`$order` (FilmOrder) - Порядок сортировки (по умолчанию RATING)"},{heading:`searchfilmsbyfilter-paginatedresponse`,content:"`$type` (ContentType) - Тип контента (по умолчанию ALL)"},{heading:`searchfilmsbyfilter-paginatedresponse`,content:"`$ratingFrom` (float) - Минимальный рейтинг (по умолчанию 0)"},{heading:`searchfilmsbyfilter-paginatedresponse`,content:"`$ratingTo` (float) - Максимальный рейтинг (по умолчанию 10)"},{heading:`searchfilmsbyfilter-paginatedresponse`,content:"`$yearFrom` (int) - Минимальный год (по умолчанию 1000)"},{heading:`searchfilmsbyfilter-paginatedresponse`,content:"`$yearTo` (int) - Максимальный год (по умолчанию 3000)"},{heading:`searchfilmsbyfilter-paginatedresponse`,content:"`$imdbId` (string|null) - IMDB ID"},{heading:`searchfilmsbyfilter-paginatedresponse`,content:"`$keyword` (string|null) - Ключевое слово"},{heading:`searchfilmsbyfilter-paginatedresponse`,content:"`$page` (int) - Номер страницы (по умолчанию 1)"},{heading:`searchfilmsbyfilter-paginatedresponse`,content:`**Возвращает:**`},{heading:`searchfilmsbyfilter-paginatedresponse`,content:"`PaginatedResponse` - Пагинированный ответ с результатами поиска"},{heading:`searchfilmsbyfilter-paginatedresponse`,content:`**Пример:**`},{heading:`связанные-классы`,content:"`\\NotKinopoisk\\Models\\Film` - Модель фильма"},{heading:`связанные-классы`,content:"`\\NotKinopoisk\\Models\\FilmCollection` - Коллекция фильмов"},{heading:`связанные-классы`,content:"`\\NotKinopoisk\\Responses\\PaginatedResponse` - Пагинированный ответ"},{heading:`связанные-классы`,content:"`\\NotKinopoisk\\Responses\\KeywordSearchResponse` - Ответ поиска по ключевым словам"},{heading:`связанные-классы`,content:"`\\NotKinopoisk\\Enums\\ImageType` - Типы изображений"},{heading:`связанные-классы`,content:"`\\NotKinopoisk\\Enums\\CollectionType` - Типы коллекций"},{heading:`связанные-классы`,content:"`\\NotKinopoisk\\Enums\\FilmOrder` - Порядок сортировки фильмов"},{heading:`информация-о-пакете`,content:`**Пакет:** NotKinopoisk\\Services`},{heading:`информация-о-пакете`,content:`**Версия:** 1.0.0`},{heading:`информация-о-пакете`,content:"**Автор:** Maxim Harder (`dev@devcraft.club`)"},{heading:`информация-о-пакете`,content:`**API версия:** v2.2`}],headings:[{id:`описание`,content:`Описание`},{id:`основные-возможности`,content:`Основные возможности`},{id:`конструктор`,content:`Конструктор`},{id:`__constructclient-client`,content:"`__construct(Client $client)`"},{id:`методы`,content:`Методы`},{id:`getbyidint-id-film`,content:"`getById(int $id): Film`"},{id:`getseasonsint-id-defaultresponse`,content:"`getSeasons(int $id): DefaultResponse`"},{id:`getfactsint-id-defaultresponse`,content:"`getFacts(int $id): DefaultResponse`"},{id:`getdistributionsint-id-defaultresponse`,content:"`getDistributions(int $id): DefaultResponse`"},{id:`getboxofficeint-id-budgetresponse`,content:"`getBoxOffice(int $id): BudgetResponse`"},{id:`getawardsint-id-defaultresponse`,content:"`getAwards(int $id): DefaultResponse`"},{id:`getvideosint-id-defaultresponse`,content:"`getVideos(int $id): DefaultResponse`"},{id:`getsimilarint-id-defaultresponse`,content:"`getSimilar(int $id): DefaultResponse`"},{id:`getimagesint-id-imagetype-type--imagetypestill-int-page--1-paginatedresponse`,content:"`getImages(int $id, ImageType $type = ImageType::STILL, int $page = 1): PaginatedResponse`"},{id:`getreviewsint-id-int-page--1-revieworder-order--revieworderdate_desc-reviewresponse`,content:"`getReviews(int $id, int $page = 1, ReviewOrder $order = ReviewOrder::DATE_DESC): ReviewResponse`"},{id:`getexternalsourcesint-id-int-page--1-paginatedresponse`,content:"`getExternalSources(int $id, int $page = 1): PaginatedResponse`"},{id:`getsequelsandprequelsint-id-sequelprequelresponse`,content:"`getSequelsAndPrequels(int $id): SequelPrequelResponse`"},{id:`searchbykeywordstring-keyword-int-page--1-keywordsearchresponse`,content:"`searchByKeyword(string $keyword, int $page = 1): KeywordSearchResponse`"},{id:`getpremieresint-year-month-month-defaultresponse`,content:"`getPremieres(int $year, Month $month): DefaultResponse`"},{id:`getfilters-filters`,content:"`getFilters(): Filters`"},{id:`getpopularint-page--1-paginatedresponse`,content:"`getPopular(int $page = 1): PaginatedResponse`"},{id:`getcollectionscollectiontype-type--collectiontypetop_popular_all-int-page--1-paginatedresponse`,content:"`getCollections(CollectionType $type = CollectionType::TOP_POPULAR_ALL, int $page = 1): PaginatedResponse`"},{id:`gettop250int-page--1-paginatedresponse`,content:"`getTop250(int $page = 1): PaginatedResponse`"},{id:`searchfilmsbyfilter-paginatedresponse`,content:"`searchFilmsByFilter(...): PaginatedResponse`"},{id:`примеры-использования`,content:`Примеры использования`},{id:`базовое-использование`,content:`Базовое использование`},{id:`работа-с-изображениями`,content:`Работа с изображениями`},{id:`работа-с-коллекциями`,content:`Работа с коллекциями`},{id:`связанные-классы`,content:`Связанные классы`},{id:`информация-о-пакете`,content:`Информация о пакете`}]},s=[{depth:2,url:`#описание`,title:(0,n.jsx)(n.Fragment,{children:`Описание`})},{depth:2,url:`#основные-возможности`,title:(0,n.jsx)(n.Fragment,{children:`Основные возможности`})},{depth:2,url:`#конструктор`,title:(0,n.jsx)(n.Fragment,{children:`Конструктор`})},{depth:3,url:`#__constructclient-client`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`__construct(Client $client)`})})},{depth:2,url:`#методы`,title:(0,n.jsx)(n.Fragment,{children:`Методы`})},{depth:3,url:`#getbyidint-id-film`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`getById(int $id): Film`})})},{depth:3,url:`#getseasonsint-id-defaultresponse`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`getSeasons(int $id): DefaultResponse`})})},{depth:3,url:`#getfactsint-id-defaultresponse`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`getFacts(int $id): DefaultResponse`})})},{depth:3,url:`#getdistributionsint-id-defaultresponse`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`getDistributions(int $id): DefaultResponse`})})},{depth:3,url:`#getboxofficeint-id-budgetresponse`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`getBoxOffice(int $id): BudgetResponse`})})},{depth:3,url:`#getawardsint-id-defaultresponse`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`getAwards(int $id): DefaultResponse`})})},{depth:3,url:`#getvideosint-id-defaultresponse`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`getVideos(int $id): DefaultResponse`})})},{depth:3,url:`#getsimilarint-id-defaultresponse`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`getSimilar(int $id): DefaultResponse`})})},{depth:3,url:`#getimagesint-id-imagetype-type--imagetypestill-int-page--1-paginatedresponse`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`getImages(int $id, ImageType $type = ImageType::STILL, int $page = 1): PaginatedResponse`})})},{depth:3,url:`#getreviewsint-id-int-page--1-revieworder-order--revieworderdate_desc-reviewresponse`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`getReviews(int $id, int $page = 1, ReviewOrder $order = ReviewOrder::DATE_DESC): ReviewResponse`})})},{depth:3,url:`#getexternalsourcesint-id-int-page--1-paginatedresponse`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`getExternalSources(int $id, int $page = 1): PaginatedResponse`})})},{depth:3,url:`#getsequelsandprequelsint-id-sequelprequelresponse`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`getSequelsAndPrequels(int $id): SequelPrequelResponse`})})},{depth:3,url:`#searchbykeywordstring-keyword-int-page--1-keywordsearchresponse`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`searchByKeyword(string $keyword, int $page = 1): KeywordSearchResponse`})})},{depth:3,url:`#getpremieresint-year-month-month-defaultresponse`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`getPremieres(int $year, Month $month): DefaultResponse`})})},{depth:3,url:`#getfilters-filters`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`getFilters(): Filters`})})},{depth:3,url:`#getpopularint-page--1-paginatedresponse`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`getPopular(int $page = 1): PaginatedResponse`})})},{depth:3,url:`#getcollectionscollectiontype-type--collectiontypetop_popular_all-int-page--1-paginatedresponse`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`getCollections(CollectionType $type = CollectionType::TOP_POPULAR_ALL, int $page = 1): PaginatedResponse`})})},{depth:3,url:`#gettop250int-page--1-paginatedresponse`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`getTop250(int $page = 1): PaginatedResponse`})})},{depth:3,url:`#searchfilmsbyfilter-paginatedresponse`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`searchFilmsByFilter(...): PaginatedResponse`})})},{depth:2,url:`#примеры-использования`,title:(0,n.jsx)(n.Fragment,{children:`Примеры использования`})},{depth:3,url:`#базовое-использование`,title:(0,n.jsx)(n.Fragment,{children:`Базовое использование`})},{depth:3,url:`#работа-с-изображениями`,title:(0,n.jsx)(n.Fragment,{children:`Работа с изображениями`})},{depth:3,url:`#работа-с-коллекциями`,title:(0,n.jsx)(n.Fragment,{children:`Работа с коллекциями`})},{depth:2,url:`#связанные-классы`,title:(0,n.jsx)(n.Fragment,{children:`Связанные классы`})},{depth:2,url:`#информация-о-пакете`,title:(0,n.jsx)(n.Fragment,{children:`Информация о пакете`})}];function c(e){let t={a:`a`,code:`code`,h2:`h2`,h3:`h3`,hr:`hr`,li:`li`,p:`p`,pre:`pre`,span:`span`,strong:`strong`,ul:`ul`,...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.p,{children:`Сервис для работы с фильмами в Kinopoisk API.`}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`📚 Навигация:`}),` `,(0,n.jsx)(t.a,{href:`../index`,children:`Главная`}),` → `,(0,n.jsx)(t.a,{href:`index`,children:`Сервисы`}),` → FilmService`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`🔗 Связанные классы:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:`../client`,children:`Client`}),` - Основной клиент`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:`../models/film`,children:`Film`}),` - Модель фильма`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:`../models/staff`,children:`Staff`}),` - Модель съемочной группы`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:`../models/review`,children:`Review`}),` - Модель отзыва`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:`../models/fact`,children:`Fact`}),` - Модель факта`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:`../models/image`,children:`Image`}),` - Модель изображения`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:`../models/video`,children:`Video`}),` - Модель видео`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:`../models/award`,children:`Award`}),` - Модель награды`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:`../models/box-office`,children:`BoxOffice`}),` - Модель кассовых сборов`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:`../models/episode`,children:`Episode`}),` - Модель эпизода`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:`../models/season`,children:`Season`}),` - Модель сезона`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:`../models/related-film`,children:`RelatedFilm`}),` - Модель связанного фильма`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:`../models/film-search-result`,children:`FilmSearchResult`}),` - Модель результата поиска`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:`../responses/keyword-search-response`,children:`KeywordSearchResponse`}),` - Ответ поиска`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:`../enums/image-type`,children:`ImageType`}),` - Типы изображений`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:`../enums/review-order`,children:`ReviewOrder`}),` - Порядок сортировки отзывов`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:`../enums/review-type`,children:`ReviewType`}),` - Типы отзывов`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:`../enums/fact-type`,children:`FactType`}),` - Типы фактов`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:`../enums/video-site`,children:`VideoSite`}),` - Сайты видео`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:`../enums/box-office-type`,children:`BoxOfficeType`}),` - Типы кассовых сборов`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:`../enums/content-type`,children:`ContentType`}),` - Типы контента`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:`../enums/film-order`,children:`FilmOrder`}),` - Порядок сортировки фильмов`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:`../enums/month`,children:`Month`}),` - Месяцы`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:`../exceptions/api-exception`,children:`ApiException`}),` - Базовое исключение API`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:`../exceptions/resource-not-found-exception`,children:`ResourceNotFoundException`}),` - Ресурс не найден`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:`../exceptions/rate-limit-exception`,children:`RateLimitException`}),` - Превышение лимита`]}),`
`]}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsx)(t.h2,{id:`описание`,children:`Описание`}),`
`,(0,n.jsx)(t.p,{children:`Предоставляет полный набор методов для взаимодействия с фильмами через Kinopoisk API. Реализует CRUD операции: Create (поиск), Read (получение данных), Update (не поддерживается), Delete (не поддерживается).`}),`
`,(0,n.jsx)(t.h2,{id:`основные-возможности`,children:`Основные возможности`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsx)(t.li,{children:`Получение детальной информации о фильмах`}),`
`,(0,n.jsx)(t.li,{children:`Поиск фильмов по ключевым словам и фильтрам`}),`
`,(0,n.jsx)(t.li,{children:`Получение связанного контента (сезоны, факты, награды, отзывы)`}),`
`,(0,n.jsx)(t.li,{children:`Работа с коллекциями фильмов (популярные, топ-250)`}),`
`,(0,n.jsx)(t.li,{children:`Получение премьер и фильтров для поиска`}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`конструктор`,children:`Конструктор`}),`
`,(0,n.jsx)(t.h3,{id:`__constructclient-client`,children:(0,n.jsx)(t.code,{children:`__construct(Client $client)`})}),`
`,(0,n.jsx)(t.p,{children:`Инициализирует новый экземпляр сервиса с переданным HTTP-клиентом и устанавливает версию API v2.2 для работы с Kinopoisk Unofficial API.`}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$client`}),` (Client) - HTTP-клиент для выполнения запросов к API`]}),`
`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Пример:`})}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M7.01 10.207h-.944l-.515 2.648h.838c.556 0 .97-.105 1.242-.314.272-.21.455-.559.55-1.049.092-.47.05-.802-.124-.995-.175-.193-.523-.29-1.047-.29zM12 5.688C5.373 5.688 0 8.514 0 12s5.373 6.313 12 6.313S24 15.486 24 12c0-3.486-5.373-6.312-12-6.312zm-3.26 7.451c-.261.25-.575.438-.917.551-.336.108-.765.164-1.285.164H5.357l-.327 1.681H3.652l1.23-6.326h2.65c.797 0 1.378.209 1.744.628.366.418.476 1.002.33 1.752a2.836 2.836 0 0 1-.305.847c-.143.255-.33.49-.561.703zm4.024.715l.543-2.799c.063-.318.039-.536-.068-.651-.107-.116-.336-.174-.687-.174H11.46l-.704 3.625H9.388l1.23-6.327h1.367l-.327 1.682h1.218c.767 0 1.295.134 1.586.401s.378.7.263 1.299l-.572 2.944h-1.389zm7.597-2.265a2.782 2.782 0 0 1-.305.847c-.143.255-.33.49-.561.703a2.44 2.44 0 0 1-.917.551c-.336.108-.765.164-1.286.164h-1.18l-.327 1.682h-1.378l1.23-6.326h2.649c.797 0 1.378.209 1.744.628.366.417.477 1.001.331 1.751zM17.766 10.207h-.943l-.516 2.648h.838c.557 0 .971-.105 1.242-.314.272-.21.455-.559.551-1.049.092-.47.049-.802-.125-.995s-.524-.29-1.047-.29z" fill="currentColor" /></svg>`,children:(0,n.jsxs)(t.code,{children:[(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`$client `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`=`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:` new`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:` Client`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`(`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`'your-api-key'`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`);`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`$service `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`=`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:` new`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:` FilmService`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`($client);`})]})]})})}),`
`,(0,n.jsx)(t.h2,{id:`методы`,children:`Методы`}),`
`,(0,n.jsx)(t.h3,{id:`getbyidint-id-film`,children:(0,n.jsx)(t.code,{children:`getById(int $id): Film`})}),`
`,(0,n.jsx)(t.p,{children:`Получает детальную информацию о фильме по его ID.`}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$id`}),` (int) - ID фильма в базе Kinopoisk`]}),`
`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Возвращает:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`Film`}),` - Объект с информацией о фильме`]}),`
`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Пример:`})}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M7.01 10.207h-.944l-.515 2.648h.838c.556 0 .97-.105 1.242-.314.272-.21.455-.559.55-1.049.092-.47.05-.802-.124-.995-.175-.193-.523-.29-1.047-.29zM12 5.688C5.373 5.688 0 8.514 0 12s5.373 6.313 12 6.313S24 15.486 24 12c0-3.486-5.373-6.312-12-6.312zm-3.26 7.451c-.261.25-.575.438-.917.551-.336.108-.765.164-1.285.164H5.357l-.327 1.681H3.652l1.23-6.326h2.65c.797 0 1.378.209 1.744.628.366.418.476 1.002.33 1.752a2.836 2.836 0 0 1-.305.847c-.143.255-.33.49-.561.703zm4.024.715l.543-2.799c.063-.318.039-.536-.068-.651-.107-.116-.336-.174-.687-.174H11.46l-.704 3.625H9.388l1.23-6.327h1.367l-.327 1.682h1.218c.767 0 1.295.134 1.586.401s.378.7.263 1.299l-.572 2.944h-1.389zm7.597-2.265a2.782 2.782 0 0 1-.305.847c-.143.255-.33.49-.561.703a2.44 2.44 0 0 1-.917.551c-.336.108-.765.164-1.286.164h-1.18l-.327 1.682h-1.378l1.23-6.326h2.649c.797 0 1.378.209 1.744.628.366.417.477 1.001.331 1.751zM17.766 10.207h-.943l-.516 2.648h.838c.557 0 .971-.105 1.242-.314.272-.21.455-.559.551-1.049.092-.47.049-.802-.125-.995s-.524-.29-1.047-.29z" fill="currentColor" /></svg>`,children:(0,n.jsxs)(t.code,{children:[(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`$film `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`=`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:` $filmService`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`->`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`getById`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`(`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`301`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`); `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6A737D`,"--shiki-dark":`#6A737D`},children:`// Матрица`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`echo`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:` $film`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`->`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`getDisplayName`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`();`})]})]})})}),`
`,(0,n.jsx)(t.h3,{id:`getseasonsint-id-defaultresponse`,children:(0,n.jsx)(t.code,{children:`getSeasons(int $id): DefaultResponse`})}),`
`,(0,n.jsx)(t.p,{children:`Получает информацию о сезонах сериала.`}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$id`}),` (int) - ID сериала`]}),`
`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Возвращает:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`DefaultResponse`}),` - Ответ с сезонами сериала`]}),`
`]}),`
`,(0,n.jsx)(t.h3,{id:`getfactsint-id-defaultresponse`,children:(0,n.jsx)(t.code,{children:`getFacts(int $id): DefaultResponse`})}),`
`,(0,n.jsx)(t.p,{children:`Получает факты и ошибки о фильме.`}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$id`}),` (int) - ID фильма`]}),`
`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Возвращает:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`DefaultResponse`}),` - Ответ с фактами о фильме`]}),`
`]}),`
`,(0,n.jsx)(t.h3,{id:`getdistributionsint-id-defaultresponse`,children:(0,n.jsx)(t.code,{children:`getDistributions(int $id): DefaultResponse`})}),`
`,(0,n.jsx)(t.p,{children:`Получает информацию о прокате фильма.`}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$id`}),` (int) - ID фильма`]}),`
`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Возвращает:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`DefaultResponse`}),` - Ответ с информацией о прокате`]}),`
`]}),`
`,(0,n.jsx)(t.h3,{id:`getboxofficeint-id-budgetresponse`,children:(0,n.jsx)(t.code,{children:`getBoxOffice(int $id): BudgetResponse`})}),`
`,(0,n.jsx)(t.p,{children:`Получает информацию о кассовых сборах фильма.`}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$id`}),` (int) - ID фильма`]}),`
`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Возвращает:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`BudgetResponse`}),` - Ответ с информацией о кассовых сборах`]}),`
`]}),`
`,(0,n.jsx)(t.h3,{id:`getawardsint-id-defaultresponse`,children:(0,n.jsx)(t.code,{children:`getAwards(int $id): DefaultResponse`})}),`
`,(0,n.jsx)(t.p,{children:`Получает информацию о наградах фильма.`}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$id`}),` (int) - ID фильма`]}),`
`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Возвращает:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`DefaultResponse`}),` - Ответ с информацией о наградах`]}),`
`]}),`
`,(0,n.jsx)(t.h3,{id:`getvideosint-id-defaultresponse`,children:(0,n.jsx)(t.code,{children:`getVideos(int $id): DefaultResponse`})}),`
`,(0,n.jsx)(t.p,{children:`Получает видео контент фильма (трейлеры, клипы).`}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$id`}),` (int) - ID фильма`]}),`
`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Возвращает:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`DefaultResponse`}),` - Ответ с видео контентом`]}),`
`]}),`
`,(0,n.jsx)(t.h3,{id:`getsimilarint-id-defaultresponse`,children:(0,n.jsx)(t.code,{children:`getSimilar(int $id): DefaultResponse`})}),`
`,(0,n.jsx)(t.p,{children:`Получает похожие фильмы.`}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$id`}),` (int) - ID фильма`]}),`
`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Возвращает:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`DefaultResponse`}),` - Ответ с похожими фильмами`]}),`
`]}),`
`,(0,n.jsx)(t.h3,{id:`getimagesint-id-imagetype-type--imagetypestill-int-page--1-paginatedresponse`,children:(0,n.jsx)(t.code,{children:`getImages(int $id, ImageType $type = ImageType::STILL, int $page = 1): PaginatedResponse`})}),`
`,(0,n.jsx)(t.p,{children:`Получает изображения фильма определенного типа.`}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$id`}),` (int) - ID фильма`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$type`}),` (ImageType) - Тип изображений (по умолчанию STILL)`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$page`}),` (int) - Номер страницы (по умолчанию 1)`]}),`
`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Возвращает:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`PaginatedResponse`}),` - Пагинированный ответ с изображениями`]}),`
`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Пример:`})}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M7.01 10.207h-.944l-.515 2.648h.838c.556 0 .97-.105 1.242-.314.272-.21.455-.559.55-1.049.092-.47.05-.802-.124-.995-.175-.193-.523-.29-1.047-.29zM12 5.688C5.373 5.688 0 8.514 0 12s5.373 6.313 12 6.313S24 15.486 24 12c0-3.486-5.373-6.312-12-6.312zm-3.26 7.451c-.261.25-.575.438-.917.551-.336.108-.765.164-1.285.164H5.357l-.327 1.681H3.652l1.23-6.326h2.65c.797 0 1.378.209 1.744.628.366.418.476 1.002.33 1.752a2.836 2.836 0 0 1-.305.847c-.143.255-.33.49-.561.703zm4.024.715l.543-2.799c.063-.318.039-.536-.068-.651-.107-.116-.336-.174-.687-.174H11.46l-.704 3.625H9.388l1.23-6.327h1.367l-.327 1.682h1.218c.767 0 1.295.134 1.586.401s.378.7.263 1.299l-.572 2.944h-1.389zm7.597-2.265a2.782 2.782 0 0 1-.305.847c-.143.255-.33.49-.561.703a2.44 2.44 0 0 1-.917.551c-.336.108-.765.164-1.286.164h-1.18l-.327 1.682h-1.378l1.23-6.326h2.649c.797 0 1.378.209 1.744.628.366.417.477 1.001.331 1.751zM17.766 10.207h-.943l-.516 2.648h.838c.557 0 .971-.105 1.242-.314.272-.21.455-.559.551-1.049.092-.47.049-.802-.125-.995s-.524-.29-1.047-.29z" fill="currentColor" /></svg>`,children:(0,n.jsxs)(t.code,{children:[(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{style:{"--shiki-light":`#6A737D`,"--shiki-dark":`#6A737D`},children:`// Получение постеров`})}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`$posters `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`=`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:` $filmService`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`->`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`getImages`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`(`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`301`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`, `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`ImageType`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`::`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`POSTER`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`);`})]}),`
`,(0,n.jsx)(t.span,{className:`line`}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{style:{"--shiki-light":`#6A737D`,"--shiki-dark":`#6A737D`},children:`// Получение кадров из фильма`})}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`$stills `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`=`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:` $filmService`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`->`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`getImages`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`(`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`301`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`, `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`ImageType`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`::`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`STILL`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`);`})]})]})})}),`
`,(0,n.jsx)(t.h3,{id:`getreviewsint-id-int-page--1-revieworder-order--revieworderdate_desc-reviewresponse`,children:(0,n.jsx)(t.code,{children:`getReviews(int $id, int $page = 1, ReviewOrder $order = ReviewOrder::DATE_DESC): ReviewResponse`})}),`
`,(0,n.jsx)(t.p,{children:`Получает отзывы о фильме.`}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$id`}),` (int) - ID фильма`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$page`}),` (int) - Номер страницы (по умолчанию 1)`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$order`}),` (ReviewOrder) - Порядок сортировки (по умолчанию DATE_DESC)`]}),`
`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Возвращает:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`ReviewResponse`}),` - Ответ с отзывами`]}),`
`]}),`
`,(0,n.jsx)(t.h3,{id:`getexternalsourcesint-id-int-page--1-paginatedresponse`,children:(0,n.jsx)(t.code,{children:`getExternalSources(int $id, int $page = 1): PaginatedResponse`})}),`
`,(0,n.jsx)(t.p,{children:`Получает внешние источники фильма.`}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$id`}),` (int) - ID фильма`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$page`}),` (int) - Номер страницы (по умолчанию 1)`]}),`
`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Возвращает:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`PaginatedResponse`}),` - Пагинированный ответ с внешними источниками`]}),`
`]}),`
`,(0,n.jsx)(t.h3,{id:`getsequelsandprequelsint-id-sequelprequelresponse`,children:(0,n.jsx)(t.code,{children:`getSequelsAndPrequels(int $id): SequelPrequelResponse`})}),`
`,(0,n.jsx)(t.p,{children:`Получает сиквелы и приквелы фильма.`}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$id`}),` (int) - ID фильма`]}),`
`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Возвращает:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`SequelPrequelResponse`}),` - Ответ с сиквелами и приквелами`]}),`
`]}),`
`,(0,n.jsx)(t.h3,{id:`searchbykeywordstring-keyword-int-page--1-keywordsearchresponse`,children:(0,n.jsx)(t.code,{children:`searchByKeyword(string $keyword, int $page = 1): KeywordSearchResponse`})}),`
`,(0,n.jsx)(t.p,{children:`Поиск фильмов по ключевому слову.`}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$keyword`}),` (string) - Ключевое слово для поиска`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$page`}),` (int) - Номер страницы (по умолчанию 1)`]}),`
`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Возвращает:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`KeywordSearchResponse`}),` - Ответ с результатами поиска`]}),`
`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Пример:`})}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M7.01 10.207h-.944l-.515 2.648h.838c.556 0 .97-.105 1.242-.314.272-.21.455-.559.55-1.049.092-.47.05-.802-.124-.995-.175-.193-.523-.29-1.047-.29zM12 5.688C5.373 5.688 0 8.514 0 12s5.373 6.313 12 6.313S24 15.486 24 12c0-3.486-5.373-6.312-12-6.312zm-3.26 7.451c-.261.25-.575.438-.917.551-.336.108-.765.164-1.285.164H5.357l-.327 1.681H3.652l1.23-6.326h2.65c.797 0 1.378.209 1.744.628.366.418.476 1.002.33 1.752a2.836 2.836 0 0 1-.305.847c-.143.255-.33.49-.561.703zm4.024.715l.543-2.799c.063-.318.039-.536-.068-.651-.107-.116-.336-.174-.687-.174H11.46l-.704 3.625H9.388l1.23-6.327h1.367l-.327 1.682h1.218c.767 0 1.295.134 1.586.401s.378.7.263 1.299l-.572 2.944h-1.389zm7.597-2.265a2.782 2.782 0 0 1-.305.847c-.143.255-.33.49-.561.703a2.44 2.44 0 0 1-.917.551c-.336.108-.765.164-1.286.164h-1.18l-.327 1.682h-1.378l1.23-6.326h2.649c.797 0 1.378.209 1.744.628.366.417.477 1.001.331 1.751zM17.766 10.207h-.943l-.516 2.648h.838c.557 0 .971-.105 1.242-.314.272-.21.455-.559.551-1.049.092-.47.049-.802-.125-.995s-.524-.29-1.047-.29z" fill="currentColor" /></svg>`,children:(0,n.jsxs)(t.code,{children:[(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`$results `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`=`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:` $filmService`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`->`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`searchByKeyword`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`(`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`'матрица'`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`);`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`foreach`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:` ($results`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`->`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`items `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`as`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:` $film) {`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`    echo`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:` $film`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`->`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`getDisplayName`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`() `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`.`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:` "`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`\\n`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`"`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`;`})]}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`}`})})]})})}),`
`,(0,n.jsx)(t.h3,{id:`getpremieresint-year-month-month-defaultresponse`,children:(0,n.jsx)(t.code,{children:`getPremieres(int $year, Month $month): DefaultResponse`})}),`
`,(0,n.jsx)(t.p,{children:`Получает премьеры фильмов в указанном месяце и году.`}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$year`}),` (int) - Год`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$month`}),` (Month) - Месяц`]}),`
`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Возвращает:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`DefaultResponse`}),` - Ответ с премьерами`]}),`
`]}),`
`,(0,n.jsx)(t.h3,{id:`getfilters-filters`,children:(0,n.jsx)(t.code,{children:`getFilters(): Filters`})}),`
`,(0,n.jsx)(t.p,{children:`Получает доступные фильтры для поиска.`}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Возвращает:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`Filters`}),` - Объект с доступными фильтрами`]}),`
`]}),`
`,(0,n.jsx)(t.h3,{id:`getpopularint-page--1-paginatedresponse`,children:(0,n.jsx)(t.code,{children:`getPopular(int $page = 1): PaginatedResponse`})}),`
`,(0,n.jsx)(t.p,{children:`Получает популярные фильмы.`}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$page`}),` (int) - Номер страницы (по умолчанию 1)`]}),`
`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Возвращает:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`PaginatedResponse`}),` - Пагинированный ответ с популярными фильмами`]}),`
`]}),`
`,(0,n.jsx)(t.h3,{id:`getcollectionscollectiontype-type--collectiontypetop_popular_all-int-page--1-paginatedresponse`,children:(0,n.jsx)(t.code,{children:`getCollections(CollectionType $type = CollectionType::TOP_POPULAR_ALL, int $page = 1): PaginatedResponse`})}),`
`,(0,n.jsx)(t.p,{children:`Получает коллекции фильмов.`}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$type`}),` (CollectionType) - Тип коллекции (по умолчанию TOP_POPULAR_ALL)`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$page`}),` (int) - Номер страницы (по умолчанию 1)`]}),`
`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Возвращает:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`PaginatedResponse`}),` - Пагинированный ответ с коллекцией фильмов`]}),`
`]}),`
`,(0,n.jsx)(t.h3,{id:`gettop250int-page--1-paginatedresponse`,children:(0,n.jsx)(t.code,{children:`getTop250(int $page = 1): PaginatedResponse`})}),`
`,(0,n.jsx)(t.p,{children:`Получает топ-250 фильмов.`}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$page`}),` (int) - Номер страницы (по умолчанию 1)`]}),`
`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Возвращает:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`PaginatedResponse`}),` - Пагинированный ответ с топ-250 фильмами`]}),`
`]}),`
`,(0,n.jsx)(t.h3,{id:`searchfilmsbyfilter-paginatedresponse`,children:(0,n.jsx)(t.code,{children:`searchFilmsByFilter(...): PaginatedResponse`})}),`
`,(0,n.jsx)(t.p,{children:`Поиск фильмов с использованием фильтров.`}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$country`}),` (array|null) - Массив стран`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$genre`}),` (array|null) - Массив жанров`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$order`}),` (FilmOrder) - Порядок сортировки (по умолчанию RATING)`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$type`}),` (ContentType) - Тип контента (по умолчанию ALL)`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$ratingFrom`}),` (float) - Минимальный рейтинг (по умолчанию 0)`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$ratingTo`}),` (float) - Максимальный рейтинг (по умолчанию 10)`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$yearFrom`}),` (int) - Минимальный год (по умолчанию 1000)`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$yearTo`}),` (int) - Максимальный год (по умолчанию 3000)`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$imdbId`}),` (string|null) - IMDB ID`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$keyword`}),` (string|null) - Ключевое слово`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$page`}),` (int) - Номер страницы (по умолчанию 1)`]}),`
`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Возвращает:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`PaginatedResponse`}),` - Пагинированный ответ с результатами поиска`]}),`
`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Пример:`})}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M7.01 10.207h-.944l-.515 2.648h.838c.556 0 .97-.105 1.242-.314.272-.21.455-.559.55-1.049.092-.47.05-.802-.124-.995-.175-.193-.523-.29-1.047-.29zM12 5.688C5.373 5.688 0 8.514 0 12s5.373 6.313 12 6.313S24 15.486 24 12c0-3.486-5.373-6.312-12-6.312zm-3.26 7.451c-.261.25-.575.438-.917.551-.336.108-.765.164-1.285.164H5.357l-.327 1.681H3.652l1.23-6.326h2.65c.797 0 1.378.209 1.744.628.366.418.476 1.002.33 1.752a2.836 2.836 0 0 1-.305.847c-.143.255-.33.49-.561.703zm4.024.715l.543-2.799c.063-.318.039-.536-.068-.651-.107-.116-.336-.174-.687-.174H11.46l-.704 3.625H9.388l1.23-6.327h1.367l-.327 1.682h1.218c.767 0 1.295.134 1.586.401s.378.7.263 1.299l-.572 2.944h-1.389zm7.597-2.265a2.782 2.782 0 0 1-.305.847c-.143.255-.33.49-.561.703a2.44 2.44 0 0 1-.917.551c-.336.108-.765.164-1.286.164h-1.18l-.327 1.682h-1.378l1.23-6.326h2.649c.797 0 1.378.209 1.744.628.366.417.477 1.001.331 1.751zM17.766 10.207h-.943l-.516 2.648h.838c.557 0 .971-.105 1.242-.314.272-.21.455-.559.551-1.049.092-.47.049-.802-.125-.995s-.524-.29-1.047-.29z" fill="currentColor" /></svg>`,children:(0,n.jsxs)(t.code,{children:[(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{style:{"--shiki-light":`#6A737D`,"--shiki-dark":`#6A737D`},children:`// Поиск боевиков из США с рейтингом выше 7`})}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`$results `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`=`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:` $filmService`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`->`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`searchFilmsByFilter`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`(`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`    country`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`: [`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`'США'`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`],`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`    genre`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`: [`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`'боевик'`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`],`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`    order`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`: `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`FilmOrder`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`::`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`RATING`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`,`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`    type`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`: `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`ContentType`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`::`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`FILM`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`,`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`    ratingFrom`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`: `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`7.0`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`,`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`    yearFrom`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`: `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`2020`})]}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`);`})})]})})}),`
`,(0,n.jsx)(t.h2,{id:`примеры-использования`,children:`Примеры использования`}),`
`,(0,n.jsx)(t.h3,{id:`базовое-использование`,children:`Базовое использование`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M7.01 10.207h-.944l-.515 2.648h.838c.556 0 .97-.105 1.242-.314.272-.21.455-.559.55-1.049.092-.47.05-.802-.124-.995-.175-.193-.523-.29-1.047-.29zM12 5.688C5.373 5.688 0 8.514 0 12s5.373 6.313 12 6.313S24 15.486 24 12c0-3.486-5.373-6.312-12-6.312zm-3.26 7.451c-.261.25-.575.438-.917.551-.336.108-.765.164-1.285.164H5.357l-.327 1.681H3.652l1.23-6.326h2.65c.797 0 1.378.209 1.744.628.366.418.476 1.002.33 1.752a2.836 2.836 0 0 1-.305.847c-.143.255-.33.49-.561.703zm4.024.715l.543-2.799c.063-.318.039-.536-.068-.651-.107-.116-.336-.174-.687-.174H11.46l-.704 3.625H9.388l1.23-6.327h1.367l-.327 1.682h1.218c.767 0 1.295.134 1.586.401s.378.7.263 1.299l-.572 2.944h-1.389zm7.597-2.265a2.782 2.782 0 0 1-.305.847c-.143.255-.33.49-.561.703a2.44 2.44 0 0 1-.917.551c-.336.108-.765.164-1.286.164h-1.18l-.327 1.682h-1.378l1.23-6.326h2.649c.797 0 1.378.209 1.744.628.366.417.477 1.001.331 1.751zM17.766 10.207h-.943l-.516 2.648h.838c.557 0 .971-.105 1.242-.314.272-.21.455-.559.551-1.049.092-.47.049-.802-.125-.995s-.524-.29-1.047-.29z" fill="currentColor" /></svg>`,children:(0,n.jsxs)(t.code,{children:[(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`<?`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`php`})]}),`
`,(0,n.jsx)(t.span,{className:`line`}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`use`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:` NotKinopoisk\\Client`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`;`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`use`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:` NotKinopoisk\\Services\\FilmService`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`;`})]}),`
`,(0,n.jsx)(t.span,{className:`line`}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`$client `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`=`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:` new`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:` Client`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`(`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`'api-key'`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`);`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`$filmService `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`=`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:` $client`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`->`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`films;`})]}),`
`,(0,n.jsx)(t.span,{className:`line`}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{style:{"--shiki-light":`#6A737D`,"--shiki-dark":`#6A737D`},children:`// Получение информации о фильме`})}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`$film `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`=`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:` $filmService`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`->`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`getById`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`(`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`301`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`);`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`echo`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:` $film`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`->`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`getDisplayName`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`();`})]}),`
`,(0,n.jsx)(t.span,{className:`line`}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{style:{"--shiki-light":`#6A737D`,"--shiki-dark":`#6A737D`},children:`// Поиск фильмов`})}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`$results `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`=`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:` $filmService`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`->`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`searchByKeyword`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`(`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`'матрица'`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`);`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`foreach`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:` ($results`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`->`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`items `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`as`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:` $film) {`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`    echo`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:` $film`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`->`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`getDisplayName`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`() `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`.`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:` "`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`\\n`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`"`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`;`})]}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`}`})})]})})}),`
`,(0,n.jsx)(t.h3,{id:`работа-с-изображениями`,children:`Работа с изображениями`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M7.01 10.207h-.944l-.515 2.648h.838c.556 0 .97-.105 1.242-.314.272-.21.455-.559.55-1.049.092-.47.05-.802-.124-.995-.175-.193-.523-.29-1.047-.29zM12 5.688C5.373 5.688 0 8.514 0 12s5.373 6.313 12 6.313S24 15.486 24 12c0-3.486-5.373-6.312-12-6.312zm-3.26 7.451c-.261.25-.575.438-.917.551-.336.108-.765.164-1.285.164H5.357l-.327 1.681H3.652l1.23-6.326h2.65c.797 0 1.378.209 1.744.628.366.418.476 1.002.33 1.752a2.836 2.836 0 0 1-.305.847c-.143.255-.33.49-.561.703zm4.024.715l.543-2.799c.063-.318.039-.536-.068-.651-.107-.116-.336-.174-.687-.174H11.46l-.704 3.625H9.388l1.23-6.327h1.367l-.327 1.682h1.218c.767 0 1.295.134 1.586.401s.378.7.263 1.299l-.572 2.944h-1.389zm7.597-2.265a2.782 2.782 0 0 1-.305.847c-.143.255-.33.49-.561.703a2.44 2.44 0 0 1-.917.551c-.336.108-.765.164-1.286.164h-1.18l-.327 1.682h-1.378l1.23-6.326h2.649c.797 0 1.378.209 1.744.628.366.417.477 1.001.331 1.751zM17.766 10.207h-.943l-.516 2.648h.838c.557 0 .971-.105 1.242-.314.272-.21.455-.559.551-1.049.092-.47.049-.802-.125-.995s-.524-.29-1.047-.29z" fill="currentColor" /></svg>`,children:(0,n.jsxs)(t.code,{children:[(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{style:{"--shiki-light":`#6A737D`,"--shiki-dark":`#6A737D`},children:`// Получение постеров`})}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`$posters `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`=`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:` $filmService`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`->`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`getImages`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`(`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`301`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`, `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`ImageType`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`::`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`POSTER`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`);`})]}),`
`,(0,n.jsx)(t.span,{className:`line`}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{style:{"--shiki-light":`#6A737D`,"--shiki-dark":`#6A737D`},children:`// Получение кадров из фильма`})}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`$stills `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`=`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:` $filmService`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`->`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`getImages`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`(`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`301`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`, `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`ImageType`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`::`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`STILL`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`);`})]}),`
`,(0,n.jsx)(t.span,{className:`line`}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{style:{"--shiki-light":`#6A737D`,"--shiki-dark":`#6A737D`},children:`// Получение фан-артов`})}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`$fanArts `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`=`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:` $filmService`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`->`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`getImages`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`(`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`301`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`, `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`ImageType`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`::`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`FAN_ART`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`);`})]})]})})}),`
`,(0,n.jsx)(t.h3,{id:`работа-с-коллекциями`,children:`Работа с коллекциями`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M7.01 10.207h-.944l-.515 2.648h.838c.556 0 .97-.105 1.242-.314.272-.21.455-.559.55-1.049.092-.47.05-.802-.124-.995-.175-.193-.523-.29-1.047-.29zM12 5.688C5.373 5.688 0 8.514 0 12s5.373 6.313 12 6.313S24 15.486 24 12c0-3.486-5.373-6.312-12-6.312zm-3.26 7.451c-.261.25-.575.438-.917.551-.336.108-.765.164-1.285.164H5.357l-.327 1.681H3.652l1.23-6.326h2.65c.797 0 1.378.209 1.744.628.366.418.476 1.002.33 1.752a2.836 2.836 0 0 1-.305.847c-.143.255-.33.49-.561.703zm4.024.715l.543-2.799c.063-.318.039-.536-.068-.651-.107-.116-.336-.174-.687-.174H11.46l-.704 3.625H9.388l1.23-6.327h1.367l-.327 1.682h1.218c.767 0 1.295.134 1.586.401s.378.7.263 1.299l-.572 2.944h-1.389zm7.597-2.265a2.782 2.782 0 0 1-.305.847c-.143.255-.33.49-.561.703a2.44 2.44 0 0 1-.917.551c-.336.108-.765.164-1.286.164h-1.18l-.327 1.682h-1.378l1.23-6.326h2.649c.797 0 1.378.209 1.744.628.366.417.477 1.001.331 1.751zM17.766 10.207h-.943l-.516 2.648h.838c.557 0 .971-.105 1.242-.314.272-.21.455-.559.551-1.049.092-.47.049-.802-.125-.995s-.524-.29-1.047-.29z" fill="currentColor" /></svg>`,children:(0,n.jsxs)(t.code,{children:[(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{style:{"--shiki-light":`#6A737D`,"--shiki-dark":`#6A737D`},children:`// Получение популярных фильмов`})}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`$popular `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`=`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:` $filmService`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`->`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`getPopular`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`();`})]}),`
`,(0,n.jsx)(t.span,{className:`line`}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{style:{"--shiki-light":`#6A737D`,"--shiki-dark":`#6A737D`},children:`// Получение топ-250 фильмов`})}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`$top250 `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`=`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:` $filmService`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`->`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`getTop250`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`();`})]}),`
`,(0,n.jsx)(t.span,{className:`line`}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{style:{"--shiki-light":`#6A737D`,"--shiki-dark":`#6A737D`},children:`// Получение коллекций`})}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`$collections `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`=`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:` $filmService`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`->`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`getCollections`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`(`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`CollectionType`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`::`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`TOP_POPULAR_MOVIES`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`);`})]})]})})}),`
`,(0,n.jsx)(t.h2,{id:`связанные-классы`,children:`Связанные классы`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`\\NotKinopoisk\\Models\\Film`}),` - Модель фильма`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`\\NotKinopoisk\\Models\\FilmCollection`}),` - Коллекция фильмов`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`\\NotKinopoisk\\Responses\\PaginatedResponse`}),` - Пагинированный ответ`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`\\NotKinopoisk\\Responses\\KeywordSearchResponse`}),` - Ответ поиска по ключевым словам`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`\\NotKinopoisk\\Enums\\ImageType`}),` - Типы изображений`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`\\NotKinopoisk\\Enums\\CollectionType`}),` - Типы коллекций`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`\\NotKinopoisk\\Enums\\FilmOrder`}),` - Порядок сортировки фильмов`]}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`информация-о-пакете`,children:`Информация о пакете`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:`Пакет:`}),` NotKinopoisk\\Services`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:`Версия:`}),` 1.0.0`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:`Автор:`}),` Maxim Harder (`,(0,n.jsx)(t.code,{children:`dev@devcraft.club`}),`)`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:`API версия:`}),` v2.2`]}),`
`]})]})}function l(e={}){let{wrapper:t}=e.components||{};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}export{a as _markdown,l as default,r as frontmatter,i as lastModified,o as structuredData,s as toc};