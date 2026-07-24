---
title: Ответы API
description: Система ответов API KinopoiskDev для структурированной обработки данных
keywords: ответы, responses, api, dto, структурированные данные
category: responses
tags:
  - Kinopoisk
  - responses
  - dto
---

# Ответы API

Система ответов KinopoiskDev предоставляет типизированные классы для обработки всех типов ответов от API kinopoisk.dev. Все классы ответов основаны на объектно-ориентированном подходе с полной типизацией и автоматической обработкой данных.

## Обзор

Ответы API в KinopoiskDev используются для:

- **Типизации ответов** - строгая типизация всех структур ответов API
- **Обработки данных** - автоматическое преобразование JSON в объекты
- **Валидации** - проверка корректности ответов от API
- **Обработки ошибок** - специализированные классы для ошибок

## Доступные классы ответов

### Базовые классы

#### BaseResponseDto

**Файл:** [BaseResponseDto.md](BaseResponseDto.md)

Базовый класс для всех ответов API:

```php
class BaseResponseDto extends BaseModel {
    #[ApiField(name: 'status')]
    public int $status;

    #[ApiField(name: 'message')]
    public string $message;

    #[ApiField(name: 'timestamp')]
    public string $timestamp;
}
```

**Возможности:**

- Базовые поля всех ответов
- Статус и сообщения
- Временные метки
- Общая структура

#### BaseDocsResponseDto

**Файл:** [BaseDocsResponseDto.md](BaseDocsResponseDto.md)

Базовый класс для ответов с документами:

```php
class BaseDocsResponseDto extends BaseResponseDto {
    #[ApiField(name: 'docs')]
    public array $docs;

    #[ApiField(name: 'total')]
    public int $total;

    #[ApiField(name: 'limit')]
    public int $limit;

    #[ApiField(name: 'page')]
    public int $page;

    #[ApiField(name: 'pages')]
    public int $pages;
}
```

**Возможности:**

- Пагинация результатов
- Общее количество документов
- Лимиты и страницы
- Массивы документов

#### ErrorResponseDto

**Файл:** [ErrorResponseDto.md](ErrorResponseDto.md)

Базовый класс для ответов с ошибками:

```php
class ErrorResponseDto extends BaseResponseDto {
    #[ApiField(name: 'error')]
    public string $error;

    #[ApiField(name: 'errorCode')]
    public int $errorCode;

    #[ApiField(name: 'details')]
    public array $details;
}
```

**Возможности:**

- Информация об ошибках
- Коды ошибок
- Детали ошибок
- Обработка исключений

### API ответы

#### MovieDocsResponseDto

**Файл:** [Api/MovieDocsResponseDto.md](Api/MovieDocsResponseDto.md)

Ответ для поиска фильмов:

```php
class MovieDocsResponseDto extends BaseDocsResponseDto {
    #[ApiField(name: 'docs')]
    public array $docs; // array<Movie>
}
```

**Возможности:**

- Массив фильмов
- Пагинация
- Метаданные поиска

#### PersonDocsResponseDto

**Файл:** [Api/PersonDocsResponseDto.md](Api/PersonDocsResponseDto.md)

Ответ для поиска персон:

```php
class PersonDocsResponseDto extends BaseDocsResponseDto {
    #[ApiField(name: 'docs')]
    public array $docs; // array<Person>
}
```

**Возможности:**

- Массив персон
- Пагинация
- Метаданные поиска

#### SearchMovieResponseDto

**Файл:** [Api/SearchMovieResponseDto.md](Api/SearchMovieResponseDto.md)

Ответ для поиска фильмов с краткой информацией:

```php
class SearchMovieResponseDto extends BaseDocsResponseDto {
    #[ApiField(name: 'docs')]
    public array $docs; // array<SearchMovie>
}
```

**Возможности:**

- Краткая информация о фильмах
- Оптимизированная структура
- Быстрая загрузка

#### SearchPersonResponseDto

**Файл:** [Api/SearchPersonResponseDto.md](Api/SearchPersonResponseDto.md)

Ответ для поиска персон с краткой информацией:

```php
class SearchPersonResponseDto extends BaseDocsResponseDto {
    #[ApiField(name: 'docs')]
    public array $docs; // array<Person>
}
```

**Возможности:**

- Краткая информация о персонах
- Оптимизированная структура
- Быстрая загрузка

#### ImageDocsResponseDto

**Файл:** [Api/ImageDocsResponseDto.md](Api/ImageDocsResponseDto.md)

Ответ для получения изображений:

```php
class ImageDocsResponseDto extends BaseDocsResponseDto {
    #[ApiField(name: 'docs')]
    public array $docs; // array<Image>
}
```

**Возможности:**

- Массив изображений
- Метаданные изображений
- Фильтрация по типам

#### KeywordDocsResponseDto

**Файл:** [Api/KeywordDocsResponseDto.md](Api/KeywordDocsResponseDto.md)

Ответ для поиска ключевых слов:

```php
class KeywordDocsResponseDto extends BaseDocsResponseDto {
    #[ApiField(name: 'docs')]
    public array $docs; // array<Keyword>
}
```

**Возможности:**

- Массив ключевых слов
- Метаданные поиска
- Фильтрация по популярности

#### ReviewDocsResponseDto

**Файл:** [Api/ReviewDocsResponseDto.md](Api/ReviewDocsResponseDto.md)

Ответ для поиска отзывов:

```php
class ReviewDocsResponseDto extends BaseDocsResponseDto {
    #[ApiField(name: 'docs')]
    public array $docs; // array<Review>
}
```

**Возможности:**

- Массив отзывов
- Типизация отзывов
- Метаданные поиска

#### SeasonDocsResponseDto

**Файл:** [Api/SeasonDocsResponseDto.md](Api/SeasonDocsResponseDto.md)

Ответ для получения сезонов:

```php
class SeasonDocsResponseDto extends BaseDocsResponseDto {
    #[ApiField(name: 'docs')]
    public array $docs; // array<Season>
}
```

**Возможности:**

- Массив сезонов
- Информация об эпизодах
- Метаданные сериала

#### StudioDocsResponseDto

**Файл:** [Api/StudioDocsResponseDto.md](Api/StudioDocsResponseDto.md)

Ответ для поиска студий:

```php
class StudioDocsResponseDto extends BaseDocsResponseDto {
    #[ApiField(name: 'docs')]
    public array $docs; // array<Studio>
}
```

**Возможности:**

- Массив студий
- Типы студий
- Метаданные поиска

#### ListDocsResponseDto

**Файл:** [Api/ListDocsResponseDto.md](Api/ListDocsResponseDto.md)

Ответ для получения списков:

```php
class ListDocsResponseDto extends BaseDocsResponseDto {
    #[ApiField(name: 'docs')]
    public array $docs; // array<Lists>
}
```

**Возможности:**

- Массив списков
- Категории списков
- Метаданные

#### MovieAwardDocsResponseDto

**Файл:** [Api/MovieAwardDocsResponseDto.md](Api/MovieAwardDocsResponseDto.md)

Ответ для получения наград фильмов:

```php
class MovieAwardDocsResponseDto extends BaseDocsResponseDto {
    #[ApiField(name: 'docs')]
    public array $docs; // array<MovieAward>
}
```

**Возможности:**

- Массив наград
- Номинации и победы
- Метаданные наград

#### PersonAwardDocsResponseDto

**Файл:** [Api/PersonAwardDocsResponseDto.md](Api/PersonAwardDocsResponseDto.md)

Ответ для получения наград персон:

```php
class PersonAwardDocsResponseDto extends BaseDocsResponseDto {
    #[ApiField(name: 'docs')]
    public array $docs; // array<PersonAward>
}
```

**Возможности:**

- Массив наград персон
- Номинации и победы
- Метаданные наград

#### SearchStudioResponseDto

**Файл:** [Api/SearchStudioResponseDto.md](Api/SearchStudioResponseDto.md)

Ответ для поиска студий:

```php
class SearchStudioResponseDto extends BaseDocsResponseDto {
    #[ApiField(name: 'docs')]
    public array $docs; // array<Studio>
}
```

**Возможности:**

- Массив студий
- Типы студий
- Метаданные поиска

#### PossibleValueDto

**Файл:** [Api/PossibleValueDto.md](Api/PossibleValueDto.md)

Ответ для получения возможных значений:

```php
class PossibleValueDto extends BaseResponseDto {
    #[ApiField(name: 'values')]
    public array $values;
}
```

**Возможности:**

- Возможные значения полей
- Справочная информация
- Валидация параметров

### Классы ошибок

#### UnauthorizedErrorResponseDto

**Файл:** [Errors/UnauthorizedErrorResponseDto.md](Errors/UnauthorizedErrorResponseDto.md)

Ответ для ошибки 401 (Неавторизован):

```php
class UnauthorizedErrorResponseDto extends ErrorResponseDto {
    #[ApiField(name: 'error')]
    public string $error = 'Unauthorized';

    #[ApiField(name: 'errorCode')]
    public int $errorCode = 401;
}
```

**Возможности:**

- Обработка ошибок авторизации
- Неверные API ключи
- Истекшие токены

#### ForbiddenErrorResponseDto

**Файл:** [Errors/ForbiddenErrorResponseDto.md](Errors/ForbiddenErrorResponseDto.md)

Ответ для ошибки 403 (Запрещено):

```php
class ForbiddenErrorResponseDto extends ErrorResponseDto {
    #[ApiField(name: 'error')]
    public string $error = 'Forbidden';

    #[ApiField(name: 'errorCode')]
    public int $errorCode = 403;
}
```

**Возможности:**

- Обработка ошибок доступа
- Недостаточные права
- Блокировка запросов

#### NotFoundErrorResponseDto

**Файл:** [Errors/NotFoundErrorResponseDto.md](Errors/NotFoundErrorResponseDto.md)

Ответ для ошибки 404 (Не найдено):

```php
class NotFoundErrorResponseDto extends ErrorResponseDto {
    #[ApiField(name: 'error')]
    public string $error = 'Not Found';

    #[ApiField(name: 'errorCode')]
    public int $errorCode = 404;
}
```

**Возможности:**

- Обработка ошибок поиска
- Несуществующие ресурсы
- Неверные ID

## Использование

### Обработка успешных ответов

```php
<?php

use KinopoiskDev\Responses\Api\MovieDocsResponseDto;
use KinopoiskDev\Responses\Api\PersonDocsResponseDto;

// Автоматическое создание из JSON ответа
$jsonResponse = '{"status":200,"docs":[...],"total":100,"limit":20}';
$response = MovieDocsResponseDto::fromArray(json_decode($jsonResponse, true));

// Доступ к данным
echo $response->status; // 200
echo $response->total; // 100
echo count($response->docs); // количество фильмов

// Работа с документами
foreach ($response->docs as $movie) {
    echo $movie->name . " (" . $movie->year . ")\n";
}
```

### Обработка ошибок

```php
<?php

use KinopoiskDev\Responses\Errors\UnauthorizedErrorResponseDto;
use KinopoiskDev\Responses\Errors\NotFoundErrorResponseDto;

// Обработка ошибки авторизации
$errorJson = '{"status":401,"error":"Unauthorized","errorCode":401}';
$error = UnauthorizedErrorResponseDto::fromArray(json_decode($errorJson, true));

echo $error->error; // "Unauthorized"
echo $error->errorCode; // 401

// Обработка ошибки поиска
$notFoundJson = '{"status":404,"error":"Not Found","errorCode":404}';
$notFound = NotFoundErrorResponseDto::fromArray(json_decode($notFoundJson, true));

echo $notFound->error; // "Not Found"
```

### Работа с пагинацией

```php
<?php

use KinopoiskDev\Responses\Api\MovieDocsResponseDto;

$response = MovieDocsResponseDto::fromArray($data);

// Информация о пагинации
echo "Всего фильмов: " . $response->total . "\n";
echo "На странице: " . $response->limit . "\n";
echo "Текущая страница: " . $response->page . "\n";
echo "Всего страниц: " . $response->pages . "\n";

// Проверка наличия следующей страницы
if ($response->page < $response->pages) {
    echo "Есть следующая страница\n";
}

// Получение документов
$movies = $response->docs;
foreach ($movies as $movie) {
    echo $movie->name . "\n";
}
```

### Автоматическая обработка в HTTP запросах

```php
<?php

use KinopoiskDev\Http\MovieRequests;
use KinopoiskDev\Responses\Api\MovieDocsResponseDto;
use KinopoiskDev\Responses\Errors\UnauthorizedErrorResponseDto;

$requests = new MovieRequests(apiToken: 'your-token');

try {
    $response = $requests->searchMovies($filter);
    // Автоматически создается MovieDocsResponseDto

    foreach ($response->docs as $movie) {
        echo $movie->name . "\n";
    }

} catch (KinopoiskResponseException $e) {
    if ($e->getCode() === 401) {
        // Автоматически создается UnauthorizedErrorResponseDto
        echo "Ошибка авторизации: " . $e->getMessage();
    }
}
```

## Интеграция с исключениями

### Автоматическое создание исключений

```php
<?php

use KinopoiskDev\Responses\Errors\UnauthorizedErrorResponseDto;
use KinopoiskDev\Exceptions\KinopoiskResponseException;

// Автоматическое создание исключения из ответа ошибки
$errorResponse = UnauthorizedErrorResponseDto::fromArray($errorData);
$exception = new KinopoiskResponseException(
    UnauthorizedErrorResponseDto::class,
    $previousException
);

// Информация из ответа автоматически извлекается
echo $exception->getMessage(); // "Unauthorized"
echo $exception->getCode(); // 401
```

### Обработка различных типов ошибок

```php
try {
    $response = $requests->getMovieById(999999);
} catch (KinopoiskResponseException $e) {
    switch ($e->getCode()) {
        case 401:
            // UnauthorizedErrorResponseDto
            echo "Неверный API ключ";
            break;
        case 403:
            // ForbiddenErrorResponseDto
            echo "Доступ запрещен";
            break;
        case 404:
            // NotFoundErrorResponseDto
            echo "Фильм не найден";
            break;
        default:
            echo "Ошибка API: " . $e->getMessage();
    }
}
```

## Связанные разделы

- **[Models](../Models/)** - модели данных в ответах
- **[Exceptions](../Exceptions/)** - исключения для обработки ошибок
- **[Http](../Http/)** - HTTP запросы, возвращающие ответы
- **[Attributes](../Attributes/)** - атрибуты для валидации ответов

## Преимущества

### Типобезопасность

```php
// Строгая типизация всех ответов
$response = MovieDocsResponseDto::fromArray($data);
$response->docs;        // array<Movie>
$response->total;       // int
$response->limit;       // int
$response->page;        // int
```

### Автоматическая обработка

```php
// Автоматическое создание из JSON
$response = MovieDocsResponseDto::fromArray(json_decode($json, true));

// Автоматическая валидация
$response->validate();

// Автоматическое создание исключений
throw new KinopoiskResponseException(UnauthorizedErrorResponseDto::class);
```

### Единообразный интерфейс

```php
// Все ответы имеют одинаковую структуру
$response->status;    // Статус ответа
$response->message;   // Сообщение
$response->timestamp; // Временная метка

// Все ответы с документами поддерживают пагинацию
$response->docs;      // Массив документов
$response->total;     // Общее количество
$response->limit;     // Лимит на страницу
$response->page;      // Текущая страница
$response->pages;     // Общее количество страниц
```

## Полезные ссылки

- **[Models](../Models/)** - модели данных
- **[Exceptions](../Exceptions/)** - исключения
- **[Http](../Http/)** - HTTP запросы
- **[Attributes](../Attributes/)** - атрибуты валидации

---

**Ответы API KinopoiskDev** - обеспечивают типобезопасность и автоматическую обработку всех ответов от API kinopoisk.dev.
