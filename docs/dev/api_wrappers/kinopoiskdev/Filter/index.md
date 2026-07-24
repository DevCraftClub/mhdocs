---
title: Фильтры
description: Система фильтров KinopoiskDev для гибкого поиска и фильтрации данных
keywords: фильтры, фильтрация, поиск, movie, person, image, keyword
category: filter
tags:
	- Kinopoisk
	- filter
	- search
---

# Фильтры

Система фильтров KinopoiskDev предоставляет мощные и гибкие инструменты для поиска и фильтрации данных через API. Все фильтры основаны на объектно-ориентированном подходе с использованием PHP 8.3+ возможностей для обеспечения типобезопасности и читаемости кода.

## Обзор

Фильтры в KinopoiskDev используются для:

- **Поиска данных** - гибкие критерии поиска фильмов, персон, изображений
- **Фильтрации результатов** - точная настройка параметров запросов
- **Сортировки** - упорядочивание результатов по различным критериям
- **Пагинации** - управление объемом возвращаемых данных

## Доступные фильтры

### MovieSearchFilter

**Файл:** [MovieSearchFilter.md](MovieSearchFilter.md)

Специализированный фильтр для поиска фильмов с расширенными возможностями:

```php
$filter = new MovieSearchFilter();
$filter->withYearBetween(2020, 2024)
       ->withMinRating(7.0, 'kp')
       ->withAllGenres(['драма', 'комедия'])
       ->onlyMovies()
       ->inTop250();
```

**Возможности:**

- Поиск по диапазону годов
- Фильтрация по рейтингам (KP, IMDB, TMDB)
- Работа с жанрами (включение/исключение)
- Фильтрация по странам
- Поиск по актерам и режиссерам
- Фильтрация по типам контента
- Поиск в топ-списках

### PersonSearchFilter

**Файл:** [PersonSearchFilter.md](PersonSearchFilter.md)

Фильтр для поиска персон в кинематографе:

```php
$filter = new PersonSearchFilter();
$filter->onlyActors()
       ->ageRange(30, 50)
       ->withMinRating(7.0, 'kp')
       ->withProfession(PersonProfession::DIRECTOR);
```

**Возможности:**

- Фильтрация по профессиям
- Возрастные диапазоны
- Рейтинговые фильтры
- Поиск по полу
- Фильтрация по странам
- Поиск по фильмографии

### ImageSearchFilter

**Файл:** [ImageSearchFilter.md](ImageSearchFilter.md)

Специализированный фильтр для работы с изображениями:

```php
$filter = new ImageSearchFilter();
$filter->onlyPosters()
       ->minResolution(1920, 1080)
       ->onlyHighRes()
       ->withType(ImageType::POSTER);
```

**Возможности:**

- Фильтрация по типам изображений
- Фильтры по разрешению
- Поиск высококачественных изображений
- Фильтрация по языку
- Специализированные фильтры для постеров, кадров, скриншотов

### KeywordSearchFilter

**Файл:** [KeywordSearchFilter.md](KeywordSearchFilter.md)

Фильтр для поиска ключевых слов:

```php
$filter = new KeywordSearchFilter();
$filter->search('любовь')
       ->onlyPopular(10)
       ->recentlyCreated(30);
```

**Возможности:**

- Поиск по названию ключевого слова
- Фильтрация по популярности
- Фильтры по датам создания/обновления
- Поиск по связанным фильмам
- Фильтрация по количеству связанных фильмов

### ReviewSearchFilter

**Файл:** [ReviewSearchFilter.md](ReviewSearchFilter.md)

Фильтр для поиска отзывов:

```php
$filter = new ReviewSearchFilter();
$filter->withType(ReviewType::POSITIVE)
       ->withMinRating(8.0)
       ->recentlyCreated(7);
```

**Возможности:**

- Фильтрация по типам отзывов
- Рейтинговые фильтры
- Фильтры по датам
- Поиск по авторам отзывов
- Фильтрация по фильмам

### SeasonSearchFilter

**Файл:** [SeasonSearchFilter.md](SeasonSearchFilter.md)

Фильтр для поиска сезонов сериалов:

```php
$filter = new SeasonSearchFilter();
$filter->seasonRange(1, 5)
       ->withMinRating(7.0, 'kp')
       ->withYearBetween(2020, 2024);
```

**Возможности:**

- Фильтрация по номерам сезонов
- Рейтинговые фильтры
- Фильтры по годам
- Поиск по сериалам
- Фильтрация по количеству эпизодов

### StudioSearchFilter

**Файл:** [StudioSearchFilter.md](StudioSearchFilter.md)

Фильтр для поиска студий:

```php
$filter = new StudioSearchFilter();
$filter->withType(StudioType::PRODUCTION)
       ->search('Marvel')
       ->withCountry('США');
```

**Возможности:**

- Фильтрация по типам студий
- Поиск по названию
- Фильтры по странам
- Поиск по связанным фильмам
- Фильтрация по датам создания

### SortCriteria

**Файл:** [SortCriteria.md](SortCriteria.md)

Класс для настройки сортировки результатов:

```php
$sortCriteria = new SortCriteria();
$sortCriteria->addSort(FilterField::RATING_KP, SortDirection::DESC)
             ->addSort(FilterField::YEAR, SortDirection::ASC);
```

**Возможности:**

- Множественная сортировка
- Настройка направлений сортировки
- Валидация полей сортировки
- Автоматическая оптимизация запросов

## Использование

### Базовый поиск фильмов

```php
<?php

use KinopoiskDev\Filter\MovieSearchFilter;
use KinopoiskDev\Enums\MovieType;
use KinopoiskDev\Enums\SortDirection;

$filter = new MovieSearchFilter();

// Базовые фильтры
$filter->withYearBetween(2020, 2024)
       ->withMinRating(7.0, 'kp')
       ->onlyMovies();

// Фильтры по жанрам
$filter->withIncludedGenres(['драма', 'комедия'])
       ->withExcludedGenres(['ужасы']);

// Поиск по актерам и режиссерам
$filter->withActor('Том Хэнкс')
       ->withDirector('Кристофер Нолан');

// Сортировка
$filter->sortBy('rating.kp', SortDirection::DESC);

$movies = $kinopoisk->searchMovies($filter);
```

### Расширенный поиск персон

```php
<?php

use KinopoiskDev\Filter\PersonSearchFilter;
use KinopoiskDev\Enums\PersonProfession;

$filter = new PersonSearchFilter();

// Фильтры по профессиям
$filter->onlyActors()
       ->withProfession(PersonProfession::DIRECTOR);

// Возрастные фильтры
$filter->ageRange(30, 60);

// Рейтинговые фильтры
$filter->withMinRating(7.0, 'kp')
       ->withMinVotes(1000, 'kp');

// Фильтры по странам
$filter->withCountry('США');

$persons = $kinopoisk->searchPersons($filter);
```

### Работа с изображениями

```php
<?php

use KinopoiskDev\Filter\ImageSearchFilter;
use KinopoiskDev\Enums\ImageType;

$filter = new ImageSearchFilter();

// Фильтры по типам
$filter->onlyPosters()
       ->withType(ImageType::BACKDROP);

// Фильтры по разрешению
$filter->minResolution(1920, 1080)
       ->onlyHighRes();

// Фильтры по размерам
$filter->width(1920, 'gte')
       ->height(1080, 'gte');

$images = $kinopoisk->getMovieImages(301, $filter);
```

### Комбинированные фильтры

```php
<?php

use KinopoiskDev\Filter\MovieSearchFilter;
use KinopoiskDev\Filter\SortCriteria;

$filter = new MovieSearchFilter();

// Сложные фильтры
$filter->withYearBetween(2020, 2024)
       ->withMinRating(7.0, 'kp')
       ->withMinVotes(1000, 'kp')
       ->withAllGenres(['драма'])
       ->withIncludedCountries(['США', 'Великобритания'])
       ->onlyMovies()
       ->inTop250();

// Настройка сортировки
$filter->sortBy('rating.kp', SortDirection::DESC)
       ->sortBy('year', SortDirection::DESC);

// Пагинация
$filter->limit(20)
       ->offset(40);

$movies = $kinopoisk->searchMovies($filter);
```

## Интеграция с enum'ами

### Использование типизированных значений

```php
use KinopoiskDev\Enums\FilterField;
use KinopoiskDev\Enums\FilterOperator;
use KinopoiskDev\Enums\MovieType;
use KinopoiskDev\Enums\PersonProfession;

$filter = new MovieSearchFilter();

// Типобезопасные фильтры
$filter->addFilter(FilterField::TYPE, FilterOperator::EQUALS, MovieType::MOVIE);
$filter->addFilter(FilterField::YEAR, FilterOperator::RANGE, [2020, 2024]);

// Проверка поддержки операторов
if (FilterField::GENRES->supportsIncludeExclude()) {
    $filter->withIncludedGenres(['драма', 'комедия']);
}
```

### Автоматическая валидация

```php
// Enum'ы автоматически валидируются
$filter->withType(MovieType::TV_SERIES); // ✅ Корректно
$filter->withProfession(PersonProfession::ACTOR); // ✅ Корректно

// Неправильные значения вызывают исключения
$filter->withType('invalid_type'); // ❌ ValidationException
```

## Связанные разделы

- **[Enums](../Enums/)** - перечисления для фильтров
- **[Utils](../Utils/)** - утилиты для работы с фильтрами
- **[Kinopoisk](../Kinopoisk.md)** - главный класс с поддержкой фильтров

## Преимущества

### Гибкость

```php
// Множественные способы фильтрации
$filter->withYearBetween(2020, 2024);           // Диапазон
$filter->withMinRating(7.0, 'kp');              // Минимальный рейтинг
$filter->withIncludedGenres(['драма']);         // Включение жанров
$filter->withExcludedGenres(['ужасы']);         // Исключение жанров
$filter->onlyMovies();                          // Тип контента
$filter->inTop250();                            // Топ-списки
```

### Типобезопасность

```php
// IDE поддержка и автодополнение
$filter->withType(MovieType::MOVIE);
$filter->withStatus(MovieStatus::COMPLETED);
$filter->withProfession(PersonProfession::ACTOR);
$filter->sortBy(FilterField::RATING_KP, SortDirection::DESC);
```

### Читаемость

```php
// Понятный и самодокументируемый код
$filter->withYearBetween(2020, 2024)
       ->withMinRating(7.0, 'kp')
       ->withAllGenres(['драма', 'комедия'])
       ->onlyMovies()
       ->inTop250();
```

## Полезные ссылки

- **[Enums](../Enums/)** - перечисления для фильтров
- **[Utils](../Utils/)** - утилиты для работы с фильтрами
- **[Kinopoisk](../Kinopoisk.md)** - главный класс

---

**Фильтры KinopoiskDev** - обеспечивают мощную и гибкую систему поиска с типобезопасностью и читаемостью кода.
