---
tags:
  - PHP
  - API
  - Сервисы
title: "FilmService - Сервис для работы с фильмами - KinopoiskUnofficialTech PHP Wrapper"
description: "Документация по filmservice - сервис для работы с фильмами. Часть API wrapper для КиноПоиска."
keywords: "PHP, API, Сервисы, filmservice - сервис для работы с фильмами, DevCraft, документация"
author: "Maxim Harder"
og:title: "FilmService - Сервис для работы с фильмами"
og:description: "Документация по filmservice - сервис для работы с фильмами. Часть API wrapper для КиноПоиска."
og:image: "https://devcraft.club/data/assets/logo_default/devcraftx2.png"
twitter:title: "FilmService - Сервис для работы с фильмами"
twitter:description: "Документация по filmservice - сервис для работы с фильмами. Часть API wrapper для КиноПоиска."
---

# FilmService - Сервис для работы с фильмами

Сервис для работы с фильмами в Kinopoisk API.

---

**📚 Навигация:** [Главная](../index.md) → [Сервисы](index.md) → FilmService

**🔗 Связанные классы:**

- [Client](../client.md) - Основной клиент
- [Film](../models/film.md) - Модель фильма
- [Staff](../models/staff.md) - Модель съемочной группы
- [Review](../models/review.md) - Модель отзыва
- [Fact](../models/fact.md) - Модель факта
- [Image](../models/image.md) - Модель изображения
- [Video](../models/video.md) - Модель видео
- [Award](../models/award.md) - Модель награды
- [BoxOffice](../models/box-office.md) - Модель кассовых сборов
- [Episode](../models/episode.md) - Модель эпизода
- [Season](../models/season.md) - Модель сезона
- [RelatedFilm](../models/related-film.md) - Модель связанного фильма
- [FilmSearchResult](../models/film-search-result.md) - Модель результата поиска
- [KeywordSearchResponse](../responses/keyword-search-response.md) - Ответ поиска
- [ImageType](../enums/image-type.md) - Типы изображений
- [ReviewOrder](../enums/review-order.md) - Порядок сортировки отзывов
- [ReviewType](../enums/review-type.md) - Типы отзывов
- [FactType](../enums/fact-type.md) - Типы фактов
- [VideoSite](../enums/video-site.md) - Сайты видео
- [BoxOfficeType](../enums/box-office-type.md) - Типы кассовых сборов
- [ContentType](../enums/content-type.md) - Типы контента
- [FilmOrder](../enums/film-order.md) - Порядок сортировки фильмов
- [Month](../enums/month.md) - Месяцы
- [ApiException](../exceptions/api-exception.md) - Базовое исключение API
- [ResourceNotFoundException](../exceptions/resource-not-found-exception.md) - Ресурс не найден
- [RateLimitException](../exceptions/rate-limit-exception.md) - Превышение лимита

---

## Описание

Предоставляет полный набор методов для взаимодействия с фильмами через Kinopoisk API. Реализует CRUD операции: Create (поиск), Read (получение данных), Update (не поддерживается), Delete (не поддерживается).

## Основные возможности

- Получение детальной информации о фильмах
- Поиск фильмов по ключевым словам и фильтрам
- Получение связанного контента (сезоны, факты, награды, отзывы)
- Работа с коллекциями фильмов (популярные, топ-250)
- Получение премьер и фильтров для поиска

## Конструктор

### `__construct(Client $client)`

Инициализирует новый экземпляр сервиса с переданным HTTP-клиентом и устанавливает версию API v2.2 для работы с Kinopoisk Unofficial API.

**Параметры:**

- `$client` (Client) - HTTP-клиент для выполнения запросов к API

**Пример:**

```php
$client = new Client('your-api-key');
$service = new FilmService($client);
```

## Методы

### `getById(int $id): Film`

Получает детальную информацию о фильме по его ID.

**Параметры:**

- `$id` (int) - ID фильма в базе Kinopoisk

**Возвращает:**

- `Film` - Объект с информацией о фильме

**Пример:**

```php
$film = $filmService->getById(301); // Матрица
echo $film->getDisplayName();
```

### `getSeasons(int $id): DefaultResponse`

Получает информацию о сезонах сериала.

**Параметры:**

- `$id` (int) - ID сериала

**Возвращает:**

- `DefaultResponse` - Ответ с сезонами сериала

### `getFacts(int $id): DefaultResponse`

Получает факты и ошибки о фильме.

**Параметры:**

- `$id` (int) - ID фильма

**Возвращает:**

- `DefaultResponse` - Ответ с фактами о фильме

### `getDistributions(int $id): DefaultResponse`

Получает информацию о прокате фильма.

**Параметры:**

- `$id` (int) - ID фильма

**Возвращает:**

- `DefaultResponse` - Ответ с информацией о прокате

### `getBoxOffice(int $id): BudgetResponse`

Получает информацию о кассовых сборах фильма.

**Параметры:**

- `$id` (int) - ID фильма

**Возвращает:**

- `BudgetResponse` - Ответ с информацией о кассовых сборах

### `getAwards(int $id): DefaultResponse`

Получает информацию о наградах фильма.

**Параметры:**

- `$id` (int) - ID фильма

**Возвращает:**

- `DefaultResponse` - Ответ с информацией о наградах

### `getVideos(int $id): DefaultResponse`

Получает видео контент фильма (трейлеры, клипы).

**Параметры:**

- `$id` (int) - ID фильма

**Возвращает:**

- `DefaultResponse` - Ответ с видео контентом

### `getSimilar(int $id): DefaultResponse`

Получает похожие фильмы.

**Параметры:**

- `$id` (int) - ID фильма

**Возвращает:**

- `DefaultResponse` - Ответ с похожими фильмами

### `getImages(int $id, ImageType $type = ImageType::STILL, int $page = 1): PaginatedResponse`

Получает изображения фильма определенного типа.

**Параметры:**

- `$id` (int) - ID фильма
- `$type` (ImageType) - Тип изображений (по умолчанию STILL)
- `$page` (int) - Номер страницы (по умолчанию 1)

**Возвращает:**

- `PaginatedResponse` - Пагинированный ответ с изображениями

**Пример:**

```php
// Получение постеров
$posters = $filmService->getImages(301, ImageType::POSTER);

// Получение кадров из фильма
$stills = $filmService->getImages(301, ImageType::STILL);
```

### `getReviews(int $id, int $page = 1, ReviewOrder $order = ReviewOrder::DATE_DESC): ReviewResponse`

Получает отзывы о фильме.

**Параметры:**

- `$id` (int) - ID фильма
- `$page` (int) - Номер страницы (по умолчанию 1)
- `$order` (ReviewOrder) - Порядок сортировки (по умолчанию DATE_DESC)

**Возвращает:**

- `ReviewResponse` - Ответ с отзывами

### `getExternalSources(int $id, int $page = 1): PaginatedResponse`

Получает внешние источники фильма.

**Параметры:**

- `$id` (int) - ID фильма
- `$page` (int) - Номер страницы (по умолчанию 1)

**Возвращает:**

- `PaginatedResponse` - Пагинированный ответ с внешними источниками

### `getSequelsAndPrequels(int $id): SequelPrequelResponse`

Получает сиквелы и приквелы фильма.

**Параметры:**

- `$id` (int) - ID фильма

**Возвращает:**

- `SequelPrequelResponse` - Ответ с сиквелами и приквелами

### `searchByKeyword(string $keyword, int $page = 1): KeywordSearchResponse`

Поиск фильмов по ключевому слову.

**Параметры:**

- `$keyword` (string) - Ключевое слово для поиска
- `$page` (int) - Номер страницы (по умолчанию 1)

**Возвращает:**

- `KeywordSearchResponse` - Ответ с результатами поиска

**Пример:**

```php
$results = $filmService->searchByKeyword('матрица');
foreach ($results->items as $film) {
    echo $film->getDisplayName() . "\n";
}
```

### `getPremieres(int $year, Month $month): DefaultResponse`

Получает премьеры фильмов в указанном месяце и году.

**Параметры:**

- `$year` (int) - Год
- `$month` (Month) - Месяц

**Возвращает:**

- `DefaultResponse` - Ответ с премьерами

### `getFilters(): Filters`

Получает доступные фильтры для поиска.

**Возвращает:**

- `Filters` - Объект с доступными фильтрами

### `getPopular(int $page = 1): PaginatedResponse`

Получает популярные фильмы.

**Параметры:**

- `$page` (int) - Номер страницы (по умолчанию 1)

**Возвращает:**

- `PaginatedResponse` - Пагинированный ответ с популярными фильмами

### `getCollections(CollectionType $type = CollectionType::TOP_POPULAR_ALL, int $page = 1): PaginatedResponse`

Получает коллекции фильмов.

**Параметры:**

- `$type` (CollectionType) - Тип коллекции (по умолчанию TOP_POPULAR_ALL)
- `$page` (int) - Номер страницы (по умолчанию 1)

**Возвращает:**

- `PaginatedResponse` - Пагинированный ответ с коллекцией фильмов

### `getTop250(int $page = 1): PaginatedResponse`

Получает топ-250 фильмов.

**Параметры:**

- `$page` (int) - Номер страницы (по умолчанию 1)

**Возвращает:**

- `PaginatedResponse` - Пагинированный ответ с топ-250 фильмами

### `searchFilmsByFilter(...): PaginatedResponse`

Поиск фильмов с использованием фильтров.

**Параметры:**

- `$country` (array|null) - Массив стран
- `$genre` (array|null) - Массив жанров
- `$order` (FilmOrder) - Порядок сортировки (по умолчанию RATING)
- `$type` (ContentType) - Тип контента (по умолчанию ALL)
- `$ratingFrom` (float) - Минимальный рейтинг (по умолчанию 0)
- `$ratingTo` (float) - Максимальный рейтинг (по умолчанию 10)
- `$yearFrom` (int) - Минимальный год (по умолчанию 1000)
- `$yearTo` (int) - Максимальный год (по умолчанию 3000)
- `$imdbId` (string|null) - IMDB ID
- `$keyword` (string|null) - Ключевое слово
- `$page` (int) - Номер страницы (по умолчанию 1)

**Возвращает:**

- `PaginatedResponse` - Пагинированный ответ с результатами поиска

**Пример:**

```php
// Поиск боевиков из США с рейтингом выше 7
$results = $filmService->searchFilmsByFilter(
    country: ['США'],
    genre: ['боевик'],
    order: FilmOrder::RATING,
    type: ContentType::FILM,
    ratingFrom: 7.0,
    yearFrom: 2020
);
```

## Примеры использования

### Базовое использование

```php
<?php

use NotKinopoisk\Client;
use NotKinopoisk\Services\FilmService;

$client = new Client('api-key');
$filmService = $client->films;

// Получение информации о фильме
$film = $filmService->getById(301);
echo $film->getDisplayName();

// Поиск фильмов
$results = $filmService->searchByKeyword('матрица');
foreach ($results->items as $film) {
    echo $film->getDisplayName() . "\n";
}
```

### Работа с изображениями

```php
// Получение постеров
$posters = $filmService->getImages(301, ImageType::POSTER);

// Получение кадров из фильма
$stills = $filmService->getImages(301, ImageType::STILL);

// Получение фан-артов
$fanArts = $filmService->getImages(301, ImageType::FAN_ART);
```

### Работа с коллекциями

```php
// Получение популярных фильмов
$popular = $filmService->getPopular();

// Получение топ-250 фильмов
$top250 = $filmService->getTop250();

// Получение коллекций
$collections = $filmService->getCollections(CollectionType::TOP_POPULAR_MOVIES);
```

## Связанные классы

- `\NotKinopoisk\Models\Film` - Модель фильма
- `\NotKinopoisk\Models\FilmCollection` - Коллекция фильмов
- `\NotKinopoisk\Responses\PaginatedResponse` - Пагинированный ответ
- `\NotKinopoisk\Responses\KeywordSearchResponse` - Ответ поиска по ключевым словам
- `\NotKinopoisk\Enums\ImageType` - Типы изображений
- `\NotKinopoisk\Enums\CollectionType` - Типы коллекций
- `\NotKinopoisk\Enums\FilmOrder` - Порядок сортировки фильмов

## Информация о пакете

- **Пакет:** NotKinopoisk\Services
- **Версия:** 1.0.0
- **Автор:** Maxim Harder <dev@devcraft.club>
- **API версия:** v2.2
