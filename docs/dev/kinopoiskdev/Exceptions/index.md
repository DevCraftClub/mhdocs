---
title: Исключения
description: Система исключений KinopoiskDev для обработки ошибок и валидации
keywords: исключения, exceptions, ошибки, валидация, обработка ошибок
category: exceptions
tags:
	- Kinopoisk
	- exceptions
---

# Исключения

Система исключений KinopoiskDev предоставляет специализированные классы для обработки различных типов ошибок. Все исключения наследуются от базового класса и предоставляют детальную информацию об ошибках для эффективной диагностики и отладки.

## Обзор

Исключения в KinopoiskDev используются для:

- **Специфичной обработки ошибок** - разные типы исключений для разных ситуаций
- **Детальной диагностики** - подробная информация об ошибках
- **Цепочки исключений** - сохранение контекста ошибок
- **Типобезопасности** - строгая типизация исключений

## Доступные исключения

### KinopoiskDevException

**Файл:** [KinopoiskDevException.md](KinopoiskDevException.md)

Базовое исключение для всех ошибок библиотеки KinopoiskDev:

```php
class KinopoiskDevException extends Exception {
    public function __construct(
        string $message,
        int $code = 0,
        ?Exception $previous = null
    );
}
```

**Возможности:**

- Базовый класс для всех исключений библиотеки
- Поддержка цепочки исключений
- Единообразный интерфейс обработки ошибок
- Совместимость со стандартными PHP исключениями

**Использование:**

```php
try {
    $kinopoisk = new Kinopoisk();
    $movie = $kinopoisk->getMovieById(123);
} catch (KinopoiskDevException $e) {
    echo "Ошибка: " . $e->getMessage();
    echo "Код: " . $e->getCode();
}
```

### ValidationException

**Файл:** [ValidationException.md](ValidationException.md)

Специализированное исключение для ошибок валидации данных:

```php
class ValidationException extends KinopoiskDevException {
    private array $errors = [];
    private ?string $field = null;
    private mixed $value = null;

    public function __construct(
        string $message,
        ?string $field = null,
        mixed $value = null,
        int $code = 0,
        ?Throwable $previous = null
    );

    public static function forField(string $field, string $message, mixed $value = null): self;
    public static function withErrors(array $errors): self;
    public function getErrors(): array;
    public function getField(): ?string;
    public function getValue(): mixed;
    public function getFirstError(): ?string;
    public function hasErrors(): bool;
}
```

**Возможности:**

- Множественные ошибки валидации
- Информация о проблемном поле и значении
- Фабричные методы для создания исключений
- Удобные методы для получения ошибок

**Использование:**

```php
try {
    $movie = Movie::fromArray($data);
    $movie->validate();
} catch (ValidationException $e) {
    if ($e->hasErrors()) {
        foreach ($e->getErrors() as $field => $error) {
            echo "Поле {$field}: {$error}\n";
        }
    } else {
        echo "Ошибка валидации: " . $e->getFirstError();
    }
}
```

### KinopoiskResponseException

**Файл:** [KinopoiskResponseException.md](KinopoiskResponseException.md)

Исключение для ошибок HTTP ответов от API Kinopoisk.dev:

```php
class KinopoiskResponseException extends KinopoiskDevException {
    public function __construct(
        string $responseClass,
        ?Exception $previous = null
    );
}
```

**Возможности:**

- Автоматическое извлечение информации об ошибке из ответа API
- Специализированные исключения для разных HTTP статусов
- Интеграция с классами ответов API
- Детальная информация об ошибках API

**Использование:**

```php
try {
    $movie = $kinopoisk->getMovieById(999999);
} catch (KinopoiskResponseException $e) {
    echo "Ошибка API: " . $e->getMessage();
    echo "Код: " . $e->getCode(); // 404, 401, 403, 500 и т.д.
}
```

## Использование

### Базовый пример обработки ошибок

```php
<?php

use KinopoiskDev\Kinopoisk;
use KinopoiskDev\Exceptions\KinopoiskDevException;
use KinopoiskDev\Exceptions\ValidationException;
use KinopoiskDev\Exceptions\KinopoiskResponseException;

try {
    $kinopoisk = new Kinopoisk(apiToken: 'invalid-token');
    $movie = $kinopoisk->getMovieById(301);

} catch (ValidationException $e) {
    // Ошибки валидации данных
    echo "Ошибка валидации: " . $e->getFirstError();

} catch (KinopoiskResponseException $e) {
    // Ошибки API (401, 403, 404, 500)
    echo "Ошибка API: " . $e->getMessage();
    echo "HTTP код: " . $e->getCode();

} catch (KinopoiskDevException $e) {
    // Общие ошибки библиотеки
    echo "Ошибка библиотеки: " . $e->getMessage();

} catch (Exception $e) {
    // Неожиданные ошибки
    echo "Неожиданная ошибка: " . $e->getMessage();
}
```

### Обработка множественных ошибок валидации

```php
try {
    $movie = new Movie();
    $movie->title = ''; // Пустая строка
    $movie->year = -1;  // Отрицательный год
    $movie->validate();

} catch (ValidationException $e) {
    if ($e->hasErrors()) {
        echo "Найдены ошибки валидации:\n";
        foreach ($e->getErrors() as $field => $error) {
            echo "- {$field}: {$error}\n";
        }
    }
}
```

### Создание кастомных исключений

```php
class CustomValidationException extends ValidationException {
    public function __construct(string $message, array $errors = []) {
        parent::__construct($message, null, null, 0, null);
        $this->errors = $errors;
    }

    public function getCustomMessage(): string {
        return "Кастомная ошибка: " . $this->getMessage();
    }
}

// Использование
throw new CustomValidationException(
    "Ошибка валидации фильма",
    ['title' => 'Название обязательно', 'year' => 'Год должен быть положительным']
);
```

### Логирование исключений

```php
use Psr\Log\LoggerInterface;

class ExceptionHandler {
    private LoggerInterface $logger;

    public function __construct(LoggerInterface $logger) {
        $this->logger = $logger;
    }

    public function handle(KinopoiskDevException $e): void {
        $context = [
            'exception_class' => get_class($e),
            'code' => $e->getCode(),
            'file' => $e->getFile(),
            'line' => $e->getLine()
        ];

        if ($e instanceof ValidationException) {
            $context['errors'] = $e->getErrors();
            $context['field'] = $e->getField();
            $this->logger->warning('Validation error', $context);

        } elseif ($e instanceof KinopoiskResponseException) {
            $this->logger->error('API error', $context);

        } else {
            $this->logger->critical('Library error', $context);
        }
    }
}
```

## Интеграция с сервисами

### ValidationService

ValidationService автоматически выбрасывает ValidationException:

```php
use KinopoiskDev\Services\ValidationService;

$validator = new ValidationService();
$movie = new Movie();

try {
    $validator->validate($movie);
} catch (ValidationException $e) {
    // Автоматически выбрасывается при ошибках валидации
    echo "Ошибки валидации: " . implode(', ', $e->getErrors());
}
```

### Автоматическая обработка в Kinopoisk

Главный класс Kinopoisk автоматически обрабатывает исключения API:

```php
$kinopoisk = new Kinopoisk(apiToken: 'token');

try {
    $movie = $kinopoisk->getMovieById(999999);
} catch (KinopoiskResponseException $e) {
    // Автоматически выбрасывается при ошибках API
    switch ($e->getCode()) {
        case 401:
            echo "Неверный API ключ";
            break;
        case 404:
            echo "Фильм не найден";
            break;
        case 429:
            echo "Превышен лимит запросов";
            break;
        default:
            echo "Ошибка API: " . $e->getMessage();
    }
}
```

## Связанные разделы

- **[ValidationService](../Services/ValidationService.md)** - сервис валидации
- **[Kinopoisk](../Kinopoisk.md)** - главный класс с обработкой исключений
- **[Attributes](../Attributes/)** - атрибуты валидации

## Преимущества

### Специфичная обработка

```php
// Разные типы исключений для разных ситуаций
try {
    $result = $kinopoisk->searchMovies($filter);
} catch (ValidationException $e) {
    // Ошибки валидации фильтра
    handleValidationError($e);
} catch (KinopoiskResponseException $e) {
    // Ошибки API
    handleApiError($e);
} catch (KinopoiskDevException $e) {
    // Общие ошибки библиотеки
    handleLibraryError($e);
}
```

### Детальная диагностика

```php
// Подробная информация об ошибках
catch (ValidationException $e) {
    echo "Поле: " . $e->getField();
    echo "Значение: " . $e->getValue();
    echo "Ошибки: " . implode(', ', $e->getErrors());
}
```

### Цепочка исключений

```php
// Сохранение контекста ошибок
try {
    $result = processData($data);
} catch (Exception $e) {
    throw new KinopoiskDevException(
        "Ошибка обработки данных",
        500,
        $e // Сохранение оригинального исключения
    );
}
```

## Полезные ссылки

- **[PHP Exceptions Documentation](https://www.php.net/manual/en/language.exceptions.php)** - официальная документация PHP
- **[ValidationService](../Services/ValidationService.md)** - сервис валидации
- **[Kinopoisk](../Kinopoisk.md)** - главный класс

---

**Исключения KinopoiskDev** - обеспечивают надежную обработку ошибок с детальной диагностикой и типобезопасностью.
