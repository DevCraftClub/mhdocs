---
title: KinopoiskDev PHP Wrapper
description: Современная PHP библиотека для работы с API kinopoisk.dev - неофициальным API КиноПоиска
keywords: kinopoisk, api, php, wrapper, фильмы, кино, kinopoisk.dev
author: DevCraftClub
version: 1.0.0
tags:
  - Kinopoisk
  - Wrapper
  - PHP
  - API
---

# KinopoiskDev PHP Wrapper

Современная PHP библиотека для работы с API [kinopoisk.dev](https://kinopoisk.dev) - неофициальным API КиноПоиска.

## Особенности

- **Современный подход** - использует PHP 8.3+ атрибуты и строгую типизацию
- **Расширенные фильтры** - гибкая система фильтрации с поддержкой диапазонов
- **Автоматическая валидация** - декларативная валидация через атрибуты
- **PSR стандарты** - совместимость с PSR-3 для логирования
- **Активная поддержка** - [Telegram группа](https://t.me/omdb_dev) с 7,908 участниками
- **Модульная архитектура** - четкое разделение ответственности

## Установка

```bash
composer require devcraftclub/kinopoisk-dev-php
```

## Быстрый старт

```php
<?php

use KinopoiskDev\Http\MovieRequests;
use KinopoiskDev\Filter\MovieSearchFilter;

// Создание клиента
$request = new MovieRequests(apiToken: 'your-api-token');

// Поиск фильмов с расширенными фильтрами
$filter = new MovieSearchFilter();
$filter->withYearBetween(2020, 2024)
       ->withMinRating(7.0, 'kp')
       ->withAllGenres(['драма', 'комедия'])
       ->onlyMovies();

$movies = $request->searchMovies($filter);

// Получение информации о фильме
$movie = $request->getMovieById(301);
echo $movie->name; // "Матрица"
```

## Архитектура

### Основные компоненты

- **Kinopoisk** - главный класс для работы с API
- **Фильтры** - специализированные классы для разных типов поиска
- **Модели** - типизированные объекты для данных
- **Атрибуты** - декларативная валидация и конфигурация
- **Сервисы** - бизнес-логика и утилиты

### Структура проекта

```
KinopoiskDev/
├── Attributes/          # PHP 8.3+ атрибуты
├── Contracts/           # Интерфейсы (PSR-3, кэширование)
├── Enums/              # Перечисления
├── Exceptions/         # Специализированные исключения
├── Filter/             # Классы фильтров
├── Http/               # HTTP запросы
├── Models/             # Модели данных
├── Responses/          # Ответы API
├── Services/           # Сервисы
└── Utils/              # Утилиты
```

## Возможности

### Поиск фильмов

```php
$filter = new MovieSearchFilter();
$filter->withYearBetween(2020, 2024)
       ->withMinRating(7.0, 'kp')
       ->withAllGenres(['драма', 'комедия'])
       ->onlyMovies()
       ->inTop250();

$movies = $kinopoisk->searchMovies($filter);
```

### Поиск персон

```php
$filter = new PersonSearchFilter();
$filter->onlyActors()
       ->ageRange(30, 50)
       ->withMinRating(7.0, 'kp');

$persons = $kinopoisk->searchPersons($filter);
```

### Работа с изображениями

```php
$filter = new ImageSearchFilter();
$filter->onlyPosters()
       ->minResolution(1920, 1080)
       ->onlyHighRes();

$images = $kinopoisk->getMovieImages(301, $filter);
```

### Автоматическая валидация

```php
class Movie {
    #[Validation(required: true, minLength: 1, maxLength: 255)]
    public string $title;

    #[Validation(min: 1900, max: 2030)]
    public int $year;

    #[Sensitive(hideInJson: true)]
    public string $apiToken;
}
```

## Безопасность

- **Атрибут `#[Sensitive]`** - автоматическое скрытие конфиденциальных данных
- **Валидация входных данных** - защита от некорректных параметров
- **Типизированные модели** - предотвращение ошибок типов

## Документация

- **[Основной класс](Kinopoisk.md)** - главный клиент API
- **[Атрибуты](Attributes/)** - валидация и конфигурация
- **[Фильтры](Filter/)** - система фильтрации
- **[Модели](Models/)** - структуры данных
- **[Исключения](Exceptions/)** - обработка ошибок

## Полезные ссылки

- **[kinopoisk.dev](https://kinopoisk.dev)** - официальный сайт API
- **[Telegram группа](https://t.me/omdb_dev)** - активное сообщество (7,908 участников)
- **[Сравнение с KinopoiskUnofficialTech](notkinopoiskphp-compare.md)** - различия между библиотеками

## Поддержка API

- **Telegram**: [@omdb_dev](https://t.me/omdb_dev) - основная группа поддержки
- **Email**: поддержка через Telegram группу
- **Документация**: полная документация в этом разделе

## Лицензия

MIT License - см. файл [LICENSE](LICENSE) для деталей.

## Сравнение с альтернативами

| Особенность     | KinopoiskDev                           | KinopoiskUnofficialTech     |
| --------------- | -------------------------------------- | --------------------------- |
| **API**         | [kinopoisk.dev](https://kinopoisk.dev) | kinopoiskapiunofficial.tech |
| **Поддержка**   | ✅ Активная (Telegram)                 | ❌ Отсутствует              |
| **PHP версия**  | 8.3+                                   | 8.3+                        |
| **Архитектура** | Модульная                              | Монолитная                  |
| **Валидация**   | Автоматическая                         | Ручная                      |
| **Фильтры**     | Расширенные                            | Базовые                     |

## Миграция

Если вы используете KinopoiskUnofficialTech, см. [руководство по миграции](notkinopoiskphp-compare.md#миграция).

---

**KinopoiskDev** - современное решение для работы с API КиноПоиска с активной поддержкой и развитием.
