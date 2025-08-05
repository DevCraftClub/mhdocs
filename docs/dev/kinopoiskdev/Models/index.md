---
title: Модели
description: Система моделей KinopoiskDev для типизированных объектов данных API
keywords: модели, models, movie, person, image, данные, типизация
category: models
tags:
  - Kinopoisk
  - models
---

# Модели

Система моделей KinopoiskDev предоставляет типизированные классы для представления всех структур данных API kinopoisk.dev. Все модели основаны на объектно-ориентированном подходе с использованием PHP 8.3+ атрибутов для валидации и сериализации.

## Обзор

Модели в KinopoiskDev используются для:

- **Типизации данных** - строгая типизация всех структур API
- **Валидации** - автоматическая проверка данных через атрибуты
- **Сериализации** - преобразование между JSON и объектами
- **Безопасности** - контроль доступа к конфиденциальным данным

## Доступные модели

### Основные модели

#### Movie

**Файл:** [Movie.md](Movie.md)

Основная модель для представления фильмов и сериалов:

```php
class Movie extends BaseModel {
    #[ApiField(name: 'id')]
    #[Validation(required: true)]
    public int $id;

    #[ApiField(name: 'name')]
    #[Validation(required: true, maxLength: 255)]
    public string $name;

    #[ApiField(name: 'year')]
    #[Validation(min: 1888, max: 2030)]
    public int $year;

    #[ApiField(name: 'rating')]
    public Rating $rating;

    #[ApiField(name: 'persons')]
    public array $persons;
}
```

**Возможности:**

- Полная информация о фильме
- Вложенные объекты (Rating, Votes, Persons)
- Массивы связанных данных
- Автоматическая валидация

#### Person

**Файл:** [Person.md](Person.md)

Модель для представления персон в кинематографе:

```php
class Person extends BaseModel {
    #[ApiField(name: 'id')]
    #[Validation(required: true)]
    public int $id;

    #[ApiField(name: 'name')]
    #[Validation(required: true, maxLength: 255)]
    public string $name;

    #[ApiField(name: 'profession')]
    public PersonProfession $profession;

    #[ApiField(name: 'movies')]
    public array $movies;
}
```

**Возможности:**

- Информация о персоне
- Профессиональные данные
- Фильмография
- Биографическая информация

#### SearchMovie

**Файл:** [SearchMovie.md](SearchMovie.md)

Модель для результатов поиска фильмов:

```php
class SearchMovie extends BaseModel {
    #[ApiField(name: 'id')]
    public int $id;

    #[ApiField(name: 'name')]
    public string $name;

    #[ApiField(name: 'year')]
    public int $year;

    #[ApiField(name: 'rating')]
    public Rating $rating;
}
```

**Возможности:**

- Краткая информация для поиска
- Оптимизированная структура
- Быстрая загрузка

### Модели рейтингов и голосов

#### Rating

**Файл:** [Rating.md](Rating.md)

Модель для представления рейтингов фильмов:

```php
class Rating extends BaseModel {
    #[ApiField(name: 'kp')]
    public float $kp;

    #[ApiField(name: 'imdb')]
    public float $imdb;

    #[ApiField(name: 'tmdb')]
    public float $tmdb;

    #[ApiField(name: 'filmCritics')]
    public float $filmCritics;
}
```

**Возможности:**

- Рейтинги различных платформ
- Поддержка всех источников
- Типизированные значения

#### Votes

**Файл:** [Votes.md](Votes.md)

Модель для представления количества голосов:

```php
class Votes extends BaseModel {
    #[ApiField(name: 'kp')]
    public int $kp;

    #[ApiField(name: 'imdb')]
    public int $imdb;

    #[ApiField(name: 'tmdb')]
    public int $tmdb;

    #[ApiField(name: 'filmCritics')]
    public int $filmCritics;
}
```

**Возможности:**

- Количество голосов по платформам
- Статистическая информация
- Валидация числовых значений

### Модели изображений

#### Image

**Файл:** [Image.md](Image.md)

Модель для представления изображений:

```php
class Image extends BaseModel {
    #[ApiField(name: 'url')]
    public string $url;

    #[ApiField(name: 'previewUrl')]
    public string $previewUrl;

    #[ApiField(name: 'width')]
    public int $width;

    #[ApiField(name: 'height')]
    public int $height;
}
```

**Возможности:**

- URL изображений
- Размеры и разрешения
- Предварительные изображения

#### ShortImage

**Файл:** [ShortImage.md](ShortImage.md)

Краткая модель изображения:

```php
class ShortImage extends BaseModel {
    #[ApiField(name: 'url')]
    public string $url;

    #[ApiField(name: 'previewUrl')]
    public string $previewUrl;
}
```

**Возможности:**

- Минимальная информация
- Быстрая загрузка
- Оптимизация для списков

### Модели персон в фильмах

#### PersonInMovie

**Файл:** [PersonInMovie.md](PersonInMovie.md)

Модель для представления персоны в контексте фильма:

```php
class PersonInMovie extends BaseModel {
    #[ApiField(name: 'id')]
    public int $id;

    #[ApiField(name: 'name')]
    public string $name;

    #[ApiField(name: 'profession')]
    public PersonProfession $profession;

    #[ApiField(name: 'description')]
    public string $description;
}
```

**Возможности:**

- Связь персоны с фильмом
- Профессиональная информация
- Описание роли

#### MovieInPerson

**Файл:** [MovieInPerson.md](MovieInPerson.md)

Модель для представления фильма в контексте персоны:

```php
class MovieInPerson extends BaseModel {
    #[ApiField(name: 'id')]
    public int $id;

    #[ApiField(name: 'name')]
    public string $name;

    #[ApiField(name: 'rating')]
    public float $rating;

    #[ApiField(name: 'general')]
    public bool $general;
}
```

**Возможности:**

- Связь фильма с персоной
- Рейтинговая информация
- Общая информация

### Модели отзывов

#### Review

**Файл:** [Review.md](Review.md)

Модель для представления отзывов:

```php
class Review extends BaseModel {
    #[ApiField(name: 'id')]
    public int $id;

    #[ApiField(name: 'title')]
    public string $title;

    #[ApiField(name: 'type')]
    public ReviewType $type;

    #[ApiField(name: 'review')]
    public string $review;

    #[ApiField(name: 'author')]
    public string $author;
}
```

**Возможности:**

- Полная информация об отзыве
- Типизация отзывов
- Авторская информация

#### ReviewInfo

**Файл:** [ReviewInfo.md](ReviewInfo.md)

Краткая информация об отзыве:

```php
class ReviewInfo extends BaseModel {
    #[ApiField(name: 'id')]
    public int $id;

    #[ApiField(name: 'title')]
    public string $title;

    #[ApiField(name: 'type')]
    public ReviewType $type;
}
```

**Возможности:**

- Минимальная информация
- Быстрая загрузка
- Списки отзывов

### Модели сезонов

#### Season

**Файл:** [Season.md](Season.md)

Модель для представления сезонов сериалов:

```php
class Season extends BaseModel {
    #[ApiField(name: 'number')]
    public int $number;

    #[ApiField(name: 'episodes')]
    public array $episodes;

    #[ApiField(name: 'episodesCount')]
    public int $episodesCount;
}
```

**Возможности:**

- Информация о сезоне
- Список эпизодов
- Статистика

#### Episode

**Файл:** [Episode.md](Episode.md)

Модель для представления эпизодов:

```php
class Episode extends BaseModel {
    #[ApiField(name: 'number')]
    public int $number;

    #[ApiField(name: 'name')]
    public string $name;

    #[ApiField(name: 'description')]
    public string $description;
}
```

**Возможности:**

- Информация об эпизоде
- Описание сюжета
- Нумерация

### Модели студий

#### Studio

**Файл:** [Studio.md](Studio.md)

Модель для представления студий:

```php
class Studio extends BaseModel {
    #[ApiField(name: 'id')]
    public int $id;

    #[ApiField(name: 'name')]
    public string $name;

    #[ApiField(name: 'type')]
    public StudioType $type;

    #[ApiField(name: 'movies')]
    public array $movies;
}
```

**Возможности:**

- Информация о студии
- Тип студии
- Связанные фильмы

### Модели наград

#### MovieAward

**Файл:** [MovieAward.md](MovieAward.md)

Модель для представления наград фильмов:

```php
class MovieAward extends BaseModel {
    #[ApiField(name: 'nomination')]
    public Nomination $nomination;

    #[ApiField(name: 'winning')]
    public bool $winning;
}
```

**Возможности:**

- Номинации и победы
- Детальная информация
- Статус награды

#### PersonAward

**Файл:** [PersonAward.md](PersonAward.md)

Модель для представления наград персон:

```php
class PersonAward extends BaseModel {
    #[ApiField(name: 'nomination')]
    public Nomination $nomination;

    #[ApiField(name: 'winning')]
    public bool $winning;
}
```

**Возможности:**

- Награды персон
- Номинации
- Статус награды

### Вспомогательные модели

#### Name

**Файл:** [Name.md](Name.md)

Модель для представления названий:

```php
class Name extends BaseModel {
    #[ApiField(name: 'name')]
    public string $name;

    #[ApiField(name: 'language')]
    public string $language;
}
```

**Возможности:**

- Многоязычные названия
- Поддержка локализации
- Языковые метки

#### ExternalId

**Файл:** [ExternalId.md](ExternalId.md)

Модель для внешних идентификаторов:

```php
class ExternalId extends BaseModel {
    #[ApiField(name: 'imdb')]
    public string $imdb;

    #[ApiField(name: 'tmdb')]
    public int $tmdb;
}
```

**Возможности:**

- Связи с внешними системами
- Кросс-платформенные ID
- Интеграция с другими API

## Использование

### Создание моделей из API данных

```php
<?php

use KinopoiskDev\Models\Movie;
use KinopoiskDev\Models\Person;

// Автоматическое создание из массива
$movieData = [
    'id' => 301,
    'name' => 'Матрица',
    'year' => 1999,
    'rating' => ['kp' => 8.7, 'imdb' => 8.7]
];

$movie = Movie::fromArray($movieData);

// Доступ к свойствам
echo $movie->name; // "Матрица"
echo $movie->year; // 1999
echo $movie->rating->kp; // 8.7
```

### Валидация моделей

```php
// Автоматическая валидация при создании
try {
    $movie = Movie::fromArray($data);
    $movie->validate(); // Проверка всех атрибутов валидации
} catch (ValidationException $e) {
    echo "Ошибки валидации: " . implode(', ', $e->getErrors());
}
```

### Сериализация моделей

```php
// Преобразование в массив
$array = $movie->toArray();

// Преобразование в JSON
$json = $movie->toJson();

// Скрытие конфиденциальных данных
$movie->apiToken = 'secret-token';
$array = $movie->toArray(); // apiToken будет скрыт
```

### Работа с вложенными объектами

```php
// Автоматическое создание вложенных объектов
$movieData = [
    'id' => 301,
    'name' => 'Матрица',
    'rating' => ['kp' => 8.7, 'imdb' => 8.7],
    'persons' => [
        ['id' => 1, 'name' => 'Киану Ривз', 'profession' => 'actor'],
        ['id' => 2, 'name' => 'Лана Вачовски', 'profession' => 'director']
    ]
];

$movie = Movie::fromArray($movieData);

// Доступ к вложенным объектам
echo $movie->rating->kp; // 8.7
echo $movie->persons[0]->name; // "Киану Ривз"
echo $movie->persons[0]->profession; // PersonProfession::ACTOR
```

## Интеграция с атрибутами

### Автоматическая валидация

```php
class Movie extends BaseModel {
    #[Validation(required: true, maxLength: 255)]
    public string $name;

    #[Validation(min: 1888, max: 2030)]
    public int $year;

    #[Validation(pattern: '/^[a-zA-Z0-9\s]+$/')]
    public string $genre;
}

// Валидация происходит автоматически
$movie = Movie::fromArray($data);
$movie->validate(); // Проверка всех атрибутов
```

### Контроль сериализации

```php
class ApiConfig extends BaseModel {
    #[Sensitive(hideInJson: true, hideInArray: true)]
    public string $apiToken;

    #[ApiField(name: 'config_name')]
    public string $name;
}

$config = new ApiConfig();
$config->apiToken = 'secret-token';
$config->name = 'Production Config';

$array = $config->toArray();
// apiToken будет скрыт, name будет как 'config_name'
```

## Связанные разделы

- **[Attributes](../Attributes/)** - атрибуты валидации и сериализации
- **[Exceptions](../Exceptions/)** - исключения валидации
- **[Http](../Http/)** - HTTP запросы, возвращающие модели
- **[Responses](../Responses/)** - классы ответов API

## Преимущества

### Типобезопасность

```php
// Строгая типизация всех свойств
$movie = Movie::fromArray($data);
$movie->name;        // string
$movie->year;        // int
$movie->rating->kp;  // float
$movie->persons;     // array<Person>
```

### Автоматическая валидация

```php
// Валидация через атрибуты
#[Validation(required: true, maxLength: 255)]
public string $name;

#[Validation(min: 1888, max: 2030)]
public int $year;
```

### Безопасность данных

```php
// Автоматическое скрытие конфиденциальных данных
#[Sensitive(hideInJson: true)]
public string $apiToken;
```

## Полезные ссылки

- **[Attributes](../Attributes/)** - атрибуты валидации
- **[Exceptions](../Exceptions/)** - исключения валидации
- **[Http](../Http/)** - HTTP запросы
- **[Responses](../Responses/)** - классы ответов

---

**Модели KinopoiskDev** - обеспечивают типобезопасность и валидацию данных с автоматической сериализацией.
