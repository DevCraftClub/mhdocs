---
title: Перечисления
description: Система перечислений KinopoiskDev для типизированных констант и значений
keywords: перечисления, enums, фильтры, сортировка, статусы, типы
category: enums
tags:
	- Kinopoisk
	- enums
---

# Перечисления

Система перечислений KinopoiskDev предоставляет типизированные константы для всех возможных значений, используемых в API. Все enum'ы основаны на PHP 8.1+ перечислениях для обеспечения типобезопасности и читаемости кода.

## Обзор

Перечисления в KinopoiskDev используются для:

- **Типобезопасности** - предотвращение использования недопустимых значений
- **Читаемости кода** - понятные названия вместо магических чисел
- **Валидации** - автоматическая проверка допустимых значений
- **Документации** - самодокументируемый код с описаниями

## Доступные перечисления

### FilterField

**Файл:** [FilterField.md](FilterField.md)

Enum для полей фильтрации, содержащий все возможные поля для фильтрации данных через API:

```php
enum FilterField: string {
    case ID = 'id';
    case NAME = 'name';
    case YEAR = 'year';
    case RATING_KP = 'rating.kp';
    case GENRES = 'genres.name';
    case COUNTRIES = 'countries.name';
    // ... и многие другие
}
```

**Возможности:**

- Все поля API для фильтрации
- Поддержка составных полей (rating.kp, votes.imdb)
- Методы для определения типа поля
- Проверка поддержки операторов

### FilterOperator

**Файл:** [FilterOperator.md](FilterOperator.md)

Enum для операторов фильтрации, определяющий все возможные операции сравнения:

```php
enum FilterOperator: string {
    case EQUALS = 'eq';
    case NOT_EQUALS = 'ne';
    case GREATER_THAN = 'gt';
    case LESS_THAN = 'lt';
    case IN = 'in';
    case NOT_IN = 'nin';
    case RANGE = 'range';
    // ... и другие
}
```

**Возможности:**

- Операторы сравнения (eq, ne, gt, lt, gte, lte)
- Операторы включения/исключения (in, nin, all)
- Операторы диапазонов (range)
- Регулярные выражения (regex)

### SortField

**Файл:** [SortField.md](SortField.md)

Enum для полей сортировки при поиске фильмов и персон:

```php
enum SortField: string {
    case ID = 'id';
    case NAME = 'name';
    case YEAR = 'year';
    case RATING_KP = 'rating.kp';
    case VOTES_KP = 'votes.kp';
    case CREATED_AT = 'createdAt';
    // ... и другие
}
```

**Возможности:**

- Поля для сортировки фильмов
- Поля для сортировки персон
- Методы для определения типа данных
- Рекомендуемые направления сортировки

### SortDirection

**Файл:** [SortDirection.md](SortDirection.md)

Enum для направления сортировки результатов поиска:

```php
enum SortDirection: string {
    case ASC = 'asc';
    case DESC = 'desc';
}
```

**Возможности:**

- Возрастающая сортировка (ASC)
- Убывающая сортировка (DESC)
- Методы для получения противоположного направления
- Символьные представления (↑, ↓)

### MovieType

**Файл:** [MovieType.md](MovieType.md)

Enum для типов фильмов, возвращаемых API:

```php
enum MovieType: string {
    case MOVIE = 'movie';
    case TV_SERIES = 'tv-series';
    case CARTOON = 'cartoon';
    case ANIME = 'anime';
    case ANIMATED_SERIES = 'animated-series';
    case TV_SHOW = 'tv-show';
}
```

**Возможности:**

- Все типы контента КиноПоиска
- Человекочитаемые названия
- Фильтрация по типам

### MovieStatus

**Файл:** [MovieStatus.md](MovieStatus.md)

Enum для статусов фильмов в производстве:

```php
enum MovieStatus: string {
    case FILMING = 'filming';
    case PRE_PRODUCTION = 'pre-production';
    case COMPLETED = 'completed';
    case ANNOUNCED = 'announced';
    case POST_PRODUCTION = 'post-production';
}
```

**Возможности:**

- Статусы производства фильмов
- Фильтрация по статусам
- Человекочитаемые названия

### PersonProfession

**Файл:** [PersonProfession.md](PersonProfession.md)

Enum для профессий персон в кинематографе:

```php
enum PersonProfession: string {
    case ACTOR = 'actor';
    case DIRECTOR = 'director';
    case WRITER = 'writer';
    case PRODUCER = 'producer';
    case COMPOSER = 'composer';
    // ... и другие
}
```

**Возможности:**

- Все профессии в кинематографе
- Поддержка русского и английского языков
- Множественные формы названий
- Фильтрация персон по профессиям

### PersonSex

**Файл:** [PersonSex.md](PersonSex.md)

Enum для пола персон:

```php
enum PersonSex: string {
    case MALE = 'male';
    case FEMALE = 'female';
}
```

**Возможности:**

- Определение пола персон
- Русские названия
- Фильтрация по полу

### RatingMpaa

**Файл:** [RatingMpaa.md](RatingMpaa.md)

Enum для рейтингов MPAA (Американская ассоциация кинокомпаний):

```php
enum RatingMpaa: string {
    case G = 'g';
    case PG = 'pg';
    case PG13 = 'pg13';
    case R = 'r';
    case NC17 = 'nc17';
}
```

**Возможности:**

- Все рейтинги MPAA
- Описания возрастных ограничений
- Фильтрация по возрастным рейтингам

### ImageType

**Файл:** [ImageType.md](ImageType.md)

Enum для типов изображений:

```php
enum ImageType: string {
    case BACKDROP = 'backdrops';
    case COVER = 'cover';
    case FRAME = 'frame';
    case PROMO = 'promo';
    case SCREENSHOT = 'screenshot';
    case SHOOTING = 'shooting';
    case STILL = 'still';
    case WALLPAPER = 'wallpaper';
}
```

**Возможности:**

- Все типы изображений
- Фильтрация изображений по типам
- Специализированные фильтры

### HttpStatusCode

**Файл:** [HttpStatusCode.md](HttpStatusCode.md)

Enum для HTTP статус кодов, используемых в API:

```php
enum HttpStatusCode: int {
    case OK = 200;
    case UNAUTHORIZED = 401;
    case FORBIDDEN = 403;
    case NOT_FOUND = 404;
    case INTERNAL_SERVER_ERROR = 500;
}
```

**Возможности:**

- Основные HTTP статус коды
- Описания на русском языке
- Проверка успешности/ошибки

### ReviewType

**Файл:** [ReviewType.md](ReviewType.md)

Enum для типов отзывов:

```php
enum ReviewType: string {
    case POSITIVE = 'Позитивный';
    case NEGATIVE = 'Негативный';
    case NEUTRAL = 'Нейтральный';
}
```

**Возможности:**

- Типы отзывов
- Фильтрация отзывов
- Русские названия

### ListCategory

**Файл:** [ListCategory.md](ListCategory.md)

Enum для категорий списков:

```php
enum ListCategory: string {
    case ONLINE = 'Онлайн-кинотеатр';
    case AWARD = 'Премии';
    case FEE = 'Сборы';
    case SERIES = 'Сериалы';
    case MOVIE = 'Фильмы';
}
```

**Возможности:**

- Категории списков КиноПоиска
- Фильтрация по категориям
- Русские названия

### StudioType

**Файл:** [StudioType.md](StudioType.md)

Enum для типов студий:

```php
enum StudioType: string {
    case PRODUCTION = 'Производство';
    case SPECIAL_EFFECTS = 'Спецэффекты';
    case DISTRIBUTION = 'Прокат';
    case DUBBING_STUDIO = 'Студия дубляжа';
}
```

**Возможности:**

- Типы студий в кинематографе
- Описания на русском и английском
- Фильтрация студий по типам

## Использование

### Базовые примеры

```php
<?php

use KinopoiskDev\Enums\FilterField;
use KinopoiskDev\Enums\FilterOperator;
use KinopoiskDev\Enums\SortDirection;
use KinopoiskDev\Enums\MovieType;

// Использование в фильтрах
$filter = new MovieSearchFilter();
$filter->addFilter(FilterField::YEAR, FilterOperator::EQUALS, 2023);
$filter->addFilter(FilterField::TYPE, FilterOperator::EQUALS, MovieType::MOVIE);

// Использование в сортировке
$filter->sortBy(FilterField::RATING_KP, SortDirection::DESC);
```

### Проверка типов полей

```php
// Проверка поддержки диапазонов
if (FilterField::YEAR->supportsRange()) {
    $filter->addRangeFilter(FilterField::YEAR, 2020, 2024);
}

// Проверка поддержки включения/исключения
if (FilterField::GENRES->supportsIncludeExclude()) {
    $filter->withIncludedGenres(['драма', 'комедия']);
}
```

### Работа с направлениями сортировки

```php
$direction = SortDirection::ASC;
$reverseDirection = $direction->reverse(); // DESC

echo $direction->getSymbol(); // ↑
echo $direction->getDescription(); // Сортировка по возрастанию
```

### Фильтрация по профессиям

```php
use KinopoiskDev\Enums\PersonProfession;

$filter = new PersonSearchFilter();
$filter->withProfession(PersonProfession::ACTOR);

// Получение русского названия
echo PersonProfession::ACTOR->getRussianName(); // "Актер"
echo PersonProfession::ACTOR->getRussianPluralName(); // "Актеры"
```

## Интеграция с фильтрами

### Автоматическая валидация

```php
// Enum'ы автоматически валидируются в фильтрах
$filter = new MovieSearchFilter();
$filter->withType(MovieType::MOVIE); // ✅ Корректно
$filter->withType('invalid_type');   // ❌ Ошибка валидации
```

### Типобезопасность

```php
// IDE поддержка и автодополнение
$filter->withStatus(MovieStatus::COMPLETED);
$filter->withRatingMpaa(RatingMpaa::PG13);
$filter->withImageType(ImageType::POSTER);
```

## Связанные разделы

- **[Filter](../Filter/)** - классы фильтров, использующие enum'ы
- **[Utils](../Utils/)** - утилиты для работы с enum'ами
- **[Kinopoisk](../Kinopoisk.md)** - главный класс с поддержкой enum'ов

## Преимущества

### Типобезопасность

```php
// Вместо строковых констант
$filter->addFilter('year', 'eq', 2023);

// Используйте enum'ы
$filter->addFilter(FilterField::YEAR, FilterOperator::EQUALS, 2023);
```

### Читаемость

```php
// Понятные названия вместо магических чисел
$filter->withType(MovieType::TV_SERIES);
$filter->withStatus(MovieStatus::FILMING);
$filter->withProfession(PersonProfession::DIRECTOR);
```

### Валидация

```php
// Автоматическая проверка допустимых значений
enum MovieType: string {
    case MOVIE = 'movie';
    case TV_SERIES = 'tv-series';
    // Только эти значения допустимы
}
```

## Полезные ссылки

- **[PHP Enums Documentation](https://www.php.net/manual/en/language.enumerations.php)** - официальная документация PHP
- **[Filter Classes](../Filter/)** - классы фильтров
- **[Utils](../Utils/)** - утилиты для работы с enum'ами

---

**Перечисления KinopoiskDev** - обеспечивают типобезопасность и читаемость кода через строго типизированные константы.
