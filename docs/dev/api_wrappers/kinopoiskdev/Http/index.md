---
title: HTTP запросы
description: Система HTTP запросов KinopoiskDev для работы с API kinopoisk.dev
keywords: http, запросы, api, movie, person, image, requests
category: http
tags:
  - Kinopoisk
  - http
  - requests
---

# HTTP запросы

Система HTTP запросов KinopoiskDev предоставляет низкоуровневые классы для прямого взаимодействия с API kinopoisk.dev. Все классы запросов основаны на объектно-ориентированном подходе с полной типизацией и автоматической обработкой ответов.

## Обзор

HTTP запросы в KinopoiskDev используются для:

- **Прямого доступа к API** - низкоуровневое взаимодействие с kinopoisk.dev
- **Специализированных запросов** - работа с конкретными эндпоинтами
- **Кастомизации** - полный контроль над параметрами запросов
- **Отладки** - детальная информация о запросах и ответах

## Доступные классы запросов

### MovieRequests

**Файл:** [MovieRequests.md](MovieRequests.md)

Класс для работы с API фильмов, включая поиск, получение деталей и связанных данных:

```php
$requests = new MovieRequests(apiToken: 'your-token');

// Поиск фильмов
$movies = $requests->searchMovies($filter);

// Получение фильма по ID
$movie = $requests->getMovieById(301);

// Получение связанных фильмов
$related = $requests->getRelatedMovies(301);

// Получение фактов о фильме
$facts = $requests->getMovieFacts(301);
```

**Возможности:**

- Поиск фильмов с фильтрами
- Получение детальной информации
- Работа с связанными фильмами
- Получение фактов и отзывов
- Работа с рейтингами и голосами

### PersonRequests

**Файл:** [PersonRequests.md](PersonRequests.md)

Класс для работы с API персон, включая поиск актеров, режиссеров и других участников:

```php
$requests = new PersonRequests(apiToken: 'your-token');

// Поиск персон
$persons = $requests->searchPersons($filter);

// Получение персоны по ID
$person = $requests->getPersonById(123);

// Получение фильмографии
$filmography = $requests->getPersonFilmography(123);

// Получение фактов о персоне
$facts = $requests->getPersonFacts(123);
```

**Возможности:**

- Поиск персон с фильтрами
- Получение детальной информации
- Работа с фильмографией
- Получение фактов и биографии
- Работа с наградами и достижениями

### ImageRequests

**Файл:** [ImageRequests.md](ImageRequests.md)

Класс для работы с API изображений, включая постеры, кадры и другие медиа:

```php
$requests = new ImageRequests(apiToken: 'your-token');

// Получение изображений фильма
$images = $requests->getMovieImages(301, $filter);

// Получение изображений персоны
$personImages = $requests->getPersonImages(123, $filter);

// Получение изображений по типам
$posters = $requests->getMoviePosters(301);
$backdrops = $requests->getMovieBackdrops(301);
```

**Возможности:**

- Получение изображений фильмов
- Получение изображений персон
- Фильтрация по типам изображений
- Работа с разрешениями и размерами
- Получение метаданных изображений

### KeywordRequests

**Файл:** [KeywordRequests.md](KeywordRequests.md)

Класс для работы с API ключевых слов и тегов:

```php
$requests = new KeywordRequests(apiToken: 'your-token');

// Поиск ключевых слов
$keywords = $requests->searchKeywords($filter);

// Получение ключевого слова по ID
$keyword = $requests->getKeywordById(456);

// Получение фильмов по ключевому слову
$movies = $requests->getMoviesByKeyword(456);
```

**Возможности:**

- Поиск ключевых слов
- Получение информации о ключевых словах
- Работа с фильмами по ключевым словам
- Фильтрация по популярности
- Получение связанных данных

### ReviewRequests

**Файл:** [ReviewRequests.md](ReviewRequests.md)

Класс для работы с API отзывов и рецензий:

```php
$requests = new ReviewRequests(apiToken: 'your-token');

// Поиск отзывов
$reviews = $requests->searchReviews($filter);

// Получение отзывов фильма
$movieReviews = $requests->getMovieReviews(301);

// Получение отзыва по ID
$review = $requests->getReviewById(789);
```

**Возможности:**

- Поиск отзывов с фильтрами
- Получение отзывов фильмов
- Работа с типами отзывов
- Фильтрация по рейтингам
- Получение метаданных отзывов

### SeasonRequests

**Файл:** [SeasonRequests.md](SeasonRequests.md)

Класс для работы с API сезонов сериалов:

```php
$requests = new SeasonRequests(apiToken: 'your-token');

// Получение сезонов сериала
$seasons = $requests->getSeasonsByMovieId(123);

// Получение сезона по ID
$season = $requests->getSeasonById(456);

// Получение эпизодов сезона
$episodes = $requests->getSeasonEpisodes(456);
```

**Возможности:**

- Получение сезонов сериалов
- Работа с эпизодами
- Получение информации о сезонах
- Фильтрация по номерам сезонов
- Работа с метаданными

### StudioRequests

**Файл:** [StudioRequests.md](StudioRequests.md)

Класс для работы с API студий и кинокомпаний:

```php
$requests = new StudioRequests(apiToken: 'your-token');

// Поиск студий
$studios = $requests->searchStudios($filter);

// Получение студии по ID
$studio = $requests->getStudioById(789);

// Получение фильмов студии
$movies = $requests->getStudioMovies(789);
```

**Возможности:**

- Поиск студий с фильтрами
- Получение информации о студиях
- Работа с фильмами студий
- Фильтрация по типам студий
- Получение метаданных

### ListRequests

**Файл:** [ListRequests.md](ListRequests.md)

Класс для работы с API списков и коллекций:

```php
$requests = new ListRequests(apiToken: 'your-token');

// Получение списков
$lists = $requests->getLists($filter);

// Получение списка по ID
$list = $requests->getListById(101);

// Получение фильмов списка
$movies = $requests->getListMovies(101);
```

**Возможности:**

- Получение списков фильмов
- Работа с коллекциями
- Фильтрация по категориям
- Получение метаданных списков
- Работа с популярными списками

## Использование

### Базовый пример работы с фильмами

```php
<?php

use KinopoiskDev\Http\MovieRequests;
use KinopoiskDev\Filter\MovieSearchFilter;

$requests = new MovieRequests(apiToken: 'your-api-token');

// Поиск фильмов
$filter = new MovieSearchFilter();
$filter->withYearBetween(2020, 2024)
       ->withMinRating(7.0, 'kp')
       ->onlyMovies();

$movies = $requests->searchMovies($filter);

// Получение детальной информации
$movie = $requests->getMovieById(301);

// Получение связанных данных
$related = $requests->getRelatedMovies(301);
$facts = $requests->getMovieFacts(301);
$reviews = $requests->getMovieReviews(301);
```

### Работа с персонами

```php
<?php

use KinopoiskDev\Http\PersonRequests;
use KinopoiskDev\Filter\PersonSearchFilter;

$requests = new PersonRequests(apiToken: 'your-api-token');

// Поиск персон
$filter = new PersonSearchFilter();
$filter->onlyActors()
       ->ageRange(30, 50)
       ->withMinRating(7.0, 'kp');

$persons = $requests->searchPersons($filter);

// Получение детальной информации
$person = $requests->getPersonById(123);

// Получение связанных данных
$filmography = $requests->getPersonFilmography(123);
$facts = $requests->getPersonFacts(123);
$images = $requests->getPersonImages(123);
```

### Работа с изображениями

```php
<?php

use KinopoiskDev\Http\ImageRequests;
use KinopoiskDev\Filter\ImageSearchFilter;

$requests = new ImageRequests(apiToken: 'your-api-token');

// Получение изображений фильма
$filter = new ImageSearchFilter();
$filter->onlyPosters()
       ->minResolution(1920, 1080)
       ->onlyHighRes();

$images = $requests->getMovieImages(301, $filter);

// Получение изображений персоны
$personImages = $requests->getPersonImages(123, $filter);

// Специализированные методы
$posters = $requests->getMoviePosters(301);
$backdrops = $requests->getMovieBackdrops(301);
$frames = $requests->getMovieFrames(301);
```

### Комбинированные запросы

```php
<?php

use KinopoiskDev\Http\MovieRequests;
use KinopoiskDev\Http\PersonRequests;
use KinopoiskDev\Http\ImageRequests;

$movieRequests = new MovieRequests(apiToken: 'your-api-token');
$personRequests = new PersonRequests(apiToken: 'your-api-token');
$imageRequests = new ImageRequests(apiToken: 'your-api-token');

// Получение полной информации о фильме
$movie = $movieRequests->getMovieById(301);
$related = $movieRequests->getRelatedMovies(301);
$facts = $movieRequests->getMovieFacts(301);
$reviews = $movieRequests->getMovieReviews(301);

// Получение информации об актерах
$actors = [];
foreach ($movie->persons as $person) {
    if ($person->profession === 'actor') {
        $actors[] = $personRequests->getPersonById($person->id);
    }
}

// Получение изображений
$posters = $imageRequests->getMoviePosters(301);
$backdrops = $imageRequests->getMovieBackdrops(301);
```

## Интеграция с фильтрами

### Использование фильтров в запросах

```php
use KinopoiskDev\Http\MovieRequests;
use KinopoiskDev\Filter\MovieSearchFilter;
use KinopoiskDev\Enums\MovieType;
use KinopoiskDev\Enums\SortDirection;

$requests = new MovieRequests(apiToken: 'your-api-token');

$filter = new MovieSearchFilter();
$filter->withYearBetween(2020, 2024)
       ->withMinRating(7.0, 'kp')
       ->withAllGenres(['драма', 'комедия'])
       ->onlyMovies()
       ->inTop250()
       ->sortBy('rating.kp', SortDirection::DESC)
       ->limit(20);

$movies = $requests->searchMovies($filter);
```

### Автоматическая обработка ответов

```php
// Все запросы автоматически возвращают типизированные объекты
$movie = $requests->getMovieById(301);
echo $movie->name; // "Матрица"
echo $movie->year; // 1999
echo $movie->rating->kp; // 8.7

// Массивы также типизированы
$movies = $requests->searchMovies($filter);
foreach ($movies as $movie) {
    echo $movie->name . " (" . $movie->year . ")\n";
}
```

## Связанные разделы

- **[Filter](../Filter/)** - классы фильтров для запросов
- **[Models](../Models/)** - модели данных для ответов
- **[Responses](../Responses/)** - классы ответов API
- **[Kinopoisk](../Kinopoisk.md)** - главный класс с высокоуровневым API

## Преимущества

### Низкоуровневый контроль

```php
// Прямой доступ к API эндпоинтам
$requests = new MovieRequests(apiToken: 'token');
$movie = $requests->getMovieById(301);
$related = $requests->getRelatedMovies(301);
$facts = $requests->getMovieFacts(301);
```

### Типобезопасность

```php
// Все ответы типизированы
$movie = $requests->getMovieById(301);
$movie->name;        // string
$movie->year;        // int
$movie->rating->kp;  // float
$movie->persons;     // array<Person>
```

### Гибкость

```php
// Полный контроль над запросами
$filter = new MovieSearchFilter();
$filter->withYearBetween(2020, 2024)
       ->withMinRating(7.0, 'kp')
       ->withAllGenres(['драма'])
       ->onlyMovies()
       ->inTop250();

$movies = $requests->searchMovies($filter);
```

## Полезные ссылки

- **[Filter](../Filter/)** - классы фильтров
- **[Models](../Models/)** - модели данных
- **[Responses](../Responses/)** - классы ответов
- **[Kinopoisk](../Kinopoisk.md)** - главный класс

---

**HTTP запросы KinopoiskDev** - обеспечивают низкоуровневый доступ к API с полной типизацией и гибкостью.
