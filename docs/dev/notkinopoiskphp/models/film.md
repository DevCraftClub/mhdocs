---
tags:
  - PHP
  - API
  - Модели
title: "Film - Модель фильма - KinopoiskUnofficialTech PHP Wrapper"
description: "Документация по film - модель фильма. Часть API wrapper для КиноПоиска."
keywords: "PHP, API, Модели, film - модель фильма, DevCraft, документация"
author: "Maxim Harder"
og:title: "Film - Модель фильма"
og:description: "Документация по film - модель фильма. Часть API wrapper для КиноПоиска."
og:image: "https://devcraft.club/data/assets/logo_default/devcraftx2.png"
twitter:title: "Film - Модель фильма"
twitter:description: "Документация по film - модель фильма. Часть API wrapper для КиноПоиска."
---

# Film - Модель фильма

Модель фильма из Kinopoisk API.

---

**📚 Навигация:** [Главная](../index.md) → [Модели](index.md) → Film

**🔗 Связанные классы:**

- [FilmService](../services/film-service.md) - Сервис для работы с фильмами
- [Staff](../models/staff.md) - Съемочная группа
- [Review](../models/review.md) - Отзывы
- [Fact](../models/fact.md) - Факты
- [Image](../models/image.md) - Изображения
- [Video](../models/video.md) - Видео
- [Award](../models/award.md) - Награды
- [BoxOffice](../models/box-office.md) - Кассовые сборы
- [Country](../models/country.md) - Страны
- [Genre](../models/genre.md) - Жанры
- [Episode](../models/episode.md) - Эпизоды
- [Season](../models/season.md) - Сезоны
- [RelatedFilm](../models/related-film.md) - Связанные фильмы
- [ContentType](../enums/content-type.md) - Типы контента
- [FilmOrder](../enums/film-order.md) - Порядок сортировки фильмов
- [ImageType](../enums/image-type.md) - Типы изображений
- [ReviewOrder](../enums/review-order.md) - Порядок сортировки отзывов
- [ReviewType](../enums/review-type.md) - Типы отзывов
- [FactType](../enums/fact-type.md) - Типы фактов
- [VideoSite](../enums/video-site.md) - Сайты видео
- [BoxOfficeType](../enums/box-office-type.md) - Типы кассовых сборов
- [DistributionType](../enums/distribution-type.md) - Типы дистрибуции
- [Month](../enums/month.md) - Месяцы
- [ApiException](../exceptions/api-exception.md) - Базовое исключение API
- [ResourceNotFoundException](../exceptions/resource-not-found-exception.md) - Ресурс не найден
- [KpValidationException](../exceptions/kp-validation-exception.md) - Ошибка валидации

---

## Описание

Представляет полную информацию о фильме, полученную из Kinopoisk Unofficial API. Содержит все основные данные: названия, рейтинги, описания, технические характеристики и метаданные фильма.

## Основные возможности

- Хранение полной информации о фильме в неизменяемом виде (readonly свойства)
- Создание объекта из массива данных API
- Удобные методы для получения отображаемого названия и основного рейтинга
- Определение типа контента (фильм/сериал)

## Свойства

### Основные идентификаторы

#### `$kinopoiskId`

**Тип:** `int`

Уникальный идентификатор фильма в Кинопоиске.

#### `$kinopoiskHDId`

**Тип:** `string|null`

Идентификатор фильма в Кинопоиск HD (если доступен).

#### `$imdbId`

**Тип:** `string|null`

Идентификатор фильма в IMDb.

### Названия

#### `$nameRu`

**Тип:** `string|null`

Название фильма на русском языке.

#### `$nameEn`

**Тип:** `string|null`

Название фильма на английском языке.

#### `$nameOriginal`

**Тип:** `string|null`

Оригинальное название фильма.

### Изображения

#### `$posterUrl`

**Тип:** `string`

URL постера фильма в высоком разрешении.

#### `$posterUrlPreview`

**Тип:** `string`

URL постера фильма в низком разрешении.

#### `$coverUrl`

**Тип:** `string|null`

URL обложки фильма.

#### `$logoUrl`

**Тип:** `string|null`

URL логотипа фильма.

### Рейтинги

#### `$ratingKinopoisk`

**Тип:** `float|null`

Рейтинг Кинопоиска.

#### `$ratingKinopoiskVoteCount`

**Тип:** `int|null`

Количество голосов на Кинопоиске.

#### `$ratingImdb`

**Тип:** `float|null`

Рейтинг IMDb.

#### `$ratingImdbVoteCount`

**Тип:** `int|null`

Количество голосов на IMDb.

#### `$ratingFilmCritics`

**Тип:** `float|null`

Рейтинг кинокритиков.

#### `$ratingFilmCriticsVoteCount`

**Тип:** `int|null`

Количество голосов кинокритиков.

#### `$ratingGoodReview`

**Тип:** `float|null`

Рейтинг хороших рецензий.

#### `$ratingGoodReviewVoteCount`

**Тип:** `int|null`

Количество голосов за хорошие рецензии.

#### `$ratingAwait`

**Тип:** `float|null`

Рейтинг ожидания.

#### `$ratingAwaitCount`

**Тип:** `int|null`

Количество голосов ожидания.

#### `$ratingRfCritics`

**Тип:** `float|null`

Рейтинг российских кинокритиков.

#### `$ratingRfCriticsVoteCount`

**Тип:** `int|null`

Количество голосов российских кинокритиков.

### Основная информация

#### `$year`

**Тип:** `int|null`

Год выпуска фильма.

#### `$filmLength`

**Тип:** `int|null`

Длительность фильма в минутах.

#### `$startYear`

**Тип:** `int|null`

Год начала производства (для сериалов).

#### `$endYear`

**Тип:** `int|null`

Год окончания производства (для сериалов).

#### `$type`

**Тип:** `ContentType`

Тип контента (FILM, SERIES, MINI_SERIES, TV_SHOW).

#### `$productionStatus`

**Тип:** `ProductionStatus|null`

Статус производства фильма.

### Описания

#### `$slogan`

**Тип:** `string|null`

Слоган фильма.

#### `$description`

**Тип:** `string|null`

Полное описание фильма.

#### `$shortDescription`

**Тип:** `string|null`

Краткое описание фильма.

#### `$editorAnnotation`

**Тип:** `string|null`

Редакторская аннотация.

### Дополнительная информация

#### `$webUrl`

**Тип:** `string|null`

URL страницы фильма на Кинопоиске.

#### `$reviewsCount`

**Тип:** `int|null`

Количество рецензий на фильм.

#### `$isTicketsAvailable`

**Тип:** `bool|null`

Доступны ли билеты в кинотеатрах.

#### `$ratingMpaa`

**Тип:** `string|null`

Рейтинг MPAA.

#### `$ratingAgeLimits`

**Тип:** `string|null`

Возрастные ограничения.

#### `$hasImax`

**Тип:** `bool|null`

Доступен ли в формате IMAX.

#### `$has3D`

**Тип:** `bool|null`

Доступен ли в формате 3D.

#### `$lastSync`

**Тип:** `string|null`

Время последней синхронизации данных.

### Коллекции

#### `$countries`

**Тип:** `Country[]`

Массив стран производства.

#### `$genres`

**Тип:** `Genre[]`

Массив жанров фильма.

### Флаги

#### `$serial`

**Тип:** `bool|null`

Является ли сериалом.

#### `$shortFilm`

**Тип:** `bool|null`

Является ли короткометражным фильмом.

#### `$completed`

**Тип:** `bool|null`

Завершен ли (для сериалов).

## Методы

### `__construct(...)`

Конструктор модели фильма.

**Параметры:**
См. свойства выше для полного списка параметров.

### `fromArray(array $data): self`

Создает экземпляр фильма из массива данных API.

**Параметры:**

- `$data` (array) - Массив данных от API

**Возвращает:**

- `self` - Новый экземпляр фильма

**Пример:**

```php
$film = Film::fromArray($apiData);
```

### `getDisplayName(): string`

Получает отображаемое название фильма.

**Возвращает:**

- `string` - Название на русском языке, если доступно, иначе на английском

**Пример:**

```php
echo $film->getDisplayName(); // "Матрица" или "The Matrix"
```

### `isSerial(): bool`

Проверяет, является ли фильм сериалом.

**Возвращает:**

- `bool` - true, если это сериал

**Пример:**

```php
if ($film->isSerial()) {
    echo "Это сериал";
}
```

### `getMainRating(): ?float`

Получает основной рейтинг фильма.

**Возвращает:**

- `float|null` - Рейтинг Кинопоиска, если доступен, иначе null

**Пример:**

```php
$rating = $film->getMainRating(); // 8.7
```

### `getCountriesString(): string`

Получает строку со странами производства.

**Возвращает:**

- `string` - Строка с названиями стран через запятую

**Пример:**

```php
echo $film->getCountriesString(); // "США, Великобритания"
```

### `getGenresString(): string`

Получает строку с жанрами фильма.

**Возвращает:**

- `string` - Строка с названиями жанров через запятую

**Пример:**

```php
echo $film->getGenresString(); // "боевик, фантастика, триллер"
```

### `formatDuration(): string`

Форматирует длительность фильма.

**Возвращает:**

- `string` - Отформатированная длительность (например, "02:16:00")

**Пример:**

```php
echo $film->formatDuration(); // "00:02:16"
```

### `formatDurationString(): string`

Форматирует длительность фильма в виде строки.

**Возвращает:**

- `string` - Отформатированная длительность с полными словами

**Пример:**

```php
echo $film->formatDurationString(); // "2 часа 16 минут"
```

### `toArray(): array`

Преобразует объект фильма в массив.

**Возвращает:**

- `array` - Ассоциативный массив со всеми данными фильма

## Примеры использования

### Создание из данных API

```php
<?php

use NotKinopoisk\Models\Film;

// Создание из данных API
$film = Film::fromArray($apiData);

// Получение отображаемого названия
echo $film->getDisplayName(); // "Матрица" или "The Matrix"

// Проверка типа контента
if ($film->isSerial()) {
    echo "Это сериал";
}

// Получение основного рейтинга
$rating = $film->getMainRating(); // 8.7
```

### Работа с информацией о фильме

```php
// Получение основной информации
echo "Название: " . $film->getDisplayName() . "\n";
echo "Год: " . $film->year . "\n";
echo "Длительность: " . $film->formatDuration() . "\n";
echo "Страны: " . $film->getCountriesString() . "\n";
echo "Жанры: " . $film->getGenresString() . "\n";

// Проверка рейтингов
if ($film->ratingKinopoisk) {
    echo "Рейтинг Кинопоиска: " . $film->ratingKinopoisk . "\n";
}

if ($film->ratingImdb) {
    echo "Рейтинг IMDb: " . $film->ratingImdb . "\n";
}
```

### Проверка типа контента

```php
switch ($film->type) {
    case ContentType::FILM:
        echo "Это фильм";
        break;
    case ContentType::SERIES:
        echo "Это сериал";
        break;
    case ContentType::MINI_SERIES:
        echo "Это мини-сериал";
        break;
    case ContentType::TV_SHOW:
        echo "Это телешоу";
        break;
}
```

## Связанные классы

- `\NotKinopoisk\Models\FilmCollection` - Коллекция фильмов
- `\NotKinopoisk\Services\FilmService` - Сервис для работы с фильмами
- `\NotKinopoisk\Models\Country` - Модель страны
- `\NotKinopoisk\Models\Genre` - Модель жанра
- `\NotKinopoisk\Enums\ContentType` - Типы контента
- `\NotKinopoisk\Enums\ProductionStatus` - Статусы производства

