---
tags:
  - PHP
  - API
  - Исключения
title: "Исключения - KinopoiskUnofficialTech PHP Wrapper"
description: "Документация по исключения. Часть API wrapper для КиноПоиска."
keywords: "PHP, API, Исключения, исключения, DevCraft, документация"
author: "Maxim Harder"
og:title: "Исключения"
og:description: "Документация по исключения. Часть API wrapper для КиноПоиска."
og:image: "https://devcraft.club/data/assets/logo_default/devcraftx2.png"
twitter:title: "Исключения"
twitter:description: "Документация по исключения. Часть API wrapper для КиноПоиска."
---

# Исключения

Классы исключений для обработки ошибок в Kinopoisk API.

---

**📚 Навигация:** [Главная](../index.md) → Исключения

---

## 📋 Список исключений

### ⚠️ [ApiException](./api-exception.md)

Базовое исключение для всех ошибок, связанных с Kinopoisk API.

**Основные возможности:**

- Базовый класс для всех исключений API
- Поддержка цепочки исключений
- Коды ошибок (обычно HTTP статус коды)
- Детальные сообщения об ошибках

**Наследование:** Наследует от стандартного класса `Exception` PHP

**Использование:** Обработка общих ошибок API

### 🔑 [InvalidApiKeyException](./invalid-api-key-exception.md)

Исключение для неверного или отсутствующего API ключа.

**Основные возможности:**

- Специализированное исключение для проблем с API ключом
- Предустановленный код ошибки 401
- Стандартное сообщение об ошибке
- Наследование от ApiException

**Наследование:** Наследует от `ApiException`

**Использование:** Обработка ошибок аутентификации

### ⏱️ [RateLimitException](./rate-limit-exception.md)

Исключение для превышения лимита запросов к API.

**Основные возможности:**

- Специализированное исключение для превышения лимитов
- Предустановленный код ошибки 429
- Стандартное сообщение об ошибке
- Наследование от ApiException

**Наследование:** Наследует от `ApiException`

**Использование:** Обработка превышения лимитов запросов

### 🔍 [ResourceNotFoundException](./resource-not-found-exception.md)

Исключение для ненайденных ресурсов в API.

**Основные возможности:**

- Специализированное исключение для не найденных ресурсов
- Предустановленный код ошибки 404
- Стандартное сообщение об ошибке
- Наследование от ApiException

**Наследование:** Наследует от `ApiException`

**Использование:** Обработка отсутствующих ресурсов

### ✅ [KpValidationException](./kp-validation-exception.md)

Исключение для ошибок валидации данных.

**Основные возможности:**

- Специализированное исключение для ошибок валидации
- Детальные сообщения об ошибках валидации
- Поддержка предыдущих исключений
- Наследование от ApiException

**Наследование:** Наследует от `ApiException`

**Использование:** Обработка ошибок валидации входных данных

## 🔗 Связанные компоненты

### Сервисы

- [FilmService](../services/film-service.md) - Может выбрасывать все типы исключений
- [PersonService](../services/person-service.md) - Может выбрасывать все типы исключений
- [MediaService](../services/media-service.md) - Может выбрасывать все типы исключений
- [UserService](../services/user-service.md) - Может выбрасывать все типы исключений

### Модели

- [Film](../models/film.md) - Может выбрасывать KpValidationException
- [Person](../models/person.md) - Может выбрасывать KpValidationException
- [Staff](../models/staff.md) - Может выбрасывать KpValidationException
- [Review](../models/review.md) - Может выбрасывать KpValidationException

### Ответы

- [DefaultResponse](../responses/default-response.md) - Может выбрасывать KpValidationException
- [PaginatedResponse](../responses/paginated-response.md) - Может выбрасывать KpValidationException
- [KeywordSearchResponse](../responses/keyword-search-response.md) - Может выбрасывать KpValidationException

## 🚀 Быстрый старт

### Обработка исключений

```php
<?php

require_once 'vendor/autoload.php';

use NotKinopoisk\Client;
use NotKinopoisk\Exception\ApiException;
use NotKinopoisk\Exception\InvalidApiKeyException;
use NotKinopoisk\Exception\RateLimitException;
use NotKinopoisk\Exception\ResourceNotFoundException;
use NotKinopoisk\Exception\KpValidationException;

// Создание клиента
$client = new Client('your-api-key');

// Обработка различных типов исключений
try {
    $film = $client->films->getById(999999);
    echo "Фильм получен: {$film->getDisplayName()}\n";
} catch (ResourceNotFoundException $e) {
    echo "Фильм не найден: {$e->getMessage()}\n";
    echo "Код ошибки: {$e->getCode()}\n";
} catch (RateLimitException $e) {
    echo "Превышен лимит запросов: {$e->getMessage()}\n";
    echo "Код ошибки: {$e->getCode()}\n";
    // Ждем и повторяем
    sleep(1);
} catch (InvalidApiKeyException $e) {
    echo "Неверный API ключ: {$e->getMessage()}\n";
    echo "Код ошибки: {$e->getCode()}\n";
} catch (KpValidationException $e) {
    echo "Ошибка валидации: {$e->getMessage()}\n";
    echo "Код ошибки: {$e->getCode()}\n";
} catch (ApiException $e) {
    echo "Общая ошибка API: {$e->getMessage()}\n";
    echo "Код ошибки: {$e->getCode()}\n";
}
```

### Создание пользовательских исключений

```php
// Создание базового исключения API
$apiException = new ApiException('Ошибка сети при обращении к API', 500);

echo "Сообщение: {$apiException->getMessage()}\n";
echo "Код: {$apiException->getCode()}\n";

// Создание исключения с цепочкой
$previousException = new Exception('Ошибка сети');
$apiException = new ApiException('Не удалось получить данные', 500, $previousException);

if ($apiException->getPrevious()) {
    echo "Причина: " . $apiException->getPrevious()->getMessage() . "\n";
}

// Создание специализированных исключений
$notFoundException = new ResourceNotFoundException('Фильм с ID 12345 не существует');
$rateLimitException = new RateLimitException();
$invalidKeyException = new InvalidApiKeyException();
$validationException = new KpValidationException('Некорректные данные фильма');
```

## 📖 Примеры использования

### Безопасный вызов API

```php
// Функция для безопасного выполнения API запросов
function safeApiCall(callable $apiCall, string $operation = 'API операция'): mixed {
    try {
        return $apiCall();
    } catch (ApiException $e) {
        logApiError($e, $operation);
        return null;
    }
}

// Функция для логирования ошибок API
function logApiError(ApiException $e, string $operation): void {
    $logMessage = sprintf(
        "[%s] API Error in %s: %s (Code: %d) in %s:%d",
        date('Y-m-d H:i:s'),
        $operation,
        $e->getMessage(),
        $e->getCode(),
        $e->getFile(),
        $e->getLine()
    );

    error_log($logMessage);

    if ($e->getPrevious()) {
        error_log("Previous exception: " . $e->getPrevious()->getMessage());
    }
}

// Использование
$film = safeApiCall(
    fn() => $client->films->getById(123),
    'получение фильма по ID'
);

if ($film === null) {
    echo "Не удалось получить фильм\n";
}
```

### Детальная обработка ошибок

```php
// Функция для получения детальной информации об ошибке
function getApiErrorDetails(ApiException $e): array {
    return [
        'message' => $e->getMessage(),
        'code' => $e->getCode(),
        'file' => $e->getFile(),
        'line' => $e->getLine(),
        'trace' => $e->getTraceAsString(),
        'previous' => $e->getPrevious() ? [
            'message' => $e->getPrevious()->getMessage(),
            'code' => $e->getPrevious()->getCode(),
            'class' => get_class($e->getPrevious())
        ] : null
    ];
}

// Функция для определения типа ошибки по коду
function getApiErrorType(int $code): string {
    return match (true) {
        $code >= 400 && $code < 500 => 'Client Error',
        $code >= 500 && $code < 600 => 'Server Error',
        $code === 0 => 'Network Error',
        default => 'Unknown Error'
    };
}

// Функция для создания пользовательского сообщения об ошибке
function createUserFriendlyMessage(ApiException $e): string {
    $errorType = getApiErrorType($e->getCode());

    return match ($errorType) {
        'Client Error' => 'Ошибка запроса. Проверьте параметры и попробуйте снова.',
        'Server Error' => 'Ошибка сервера. Попробуйте позже.',
        'Network Error' => 'Ошибка сети. Проверьте подключение к интернету.',
        default => 'Произошла неизвестная ошибка: ' . $e->getMessage()
    };
}

// Использование
try {
    $client->films->getById(999999);
} catch (ApiException $e) {
    $errorDetails = getApiErrorDetails($e);
    $userMessage = createUserFriendlyMessage($e);

    echo "Пользовательское сообщение: {$userMessage}\n";
    echo "Тип ошибки: " . getApiErrorType($e->getCode()) . "\n";
    echo "Детали ошибки:\n";
    print_r($errorDetails);
}
```

### Обработка специфических исключений

```php
// Обработка не найденных ресурсов
try {
    $film = $client->films->getById(999999);
} catch (ResourceNotFoundException $e) {
    echo "Ресурс не найден: {$e->getMessage()}\n";
    // Можно попробовать поиск по названию
    $searchResults = $client->films->searchByKeyword('матрица');
    if (!$searchResults->isEmpty()) {
        echo "Найдены похожие фильмы\n";
    }
}

// Обработка превышения лимита
try {
    $films = $client->films->getTop();
} catch (RateLimitException $e) {
    echo "Превышен лимит запросов\n";
    // Ждем и повторяем
    sleep(2);
    $films = $client->films->getTop();
}

// Обработка неверного API ключа
try {
    $apiInfo = $client->user->getApiKeyInfo();
} catch (InvalidApiKeyException $e) {
    echo "Неверный API ключ\n";
    // Можно попросить пользователя проверить ключ
    echo "Пожалуйста, проверьте правильность API ключа\n";
}

// Обработка ошибок валидации
try {
    $film = Film::fromArray(['invalid' => 'data']);
} catch (KpValidationException $e) {
    echo "Ошибка валидации: {$e->getMessage()}\n";
    // Можно показать пользователю, какие поля некорректны
}
```

## 🔧 Общие методы

Все исключения наследуют методы от стандартного класса `Exception`:

### getMessage()

```php
public function getMessage(): string
```

Возвращает сообщение об ошибке.

### getCode()

```php
public function getCode(): int
```

Возвращает код ошибки.

### getFile()

```php
public function getFile(): string
```

Возвращает путь к файлу, где произошла ошибка.

### getLine()

```php
public function getLine(): int
```

Возвращает номер строки, где произошла ошибка.

### getTrace()

```php
public function getTrace(): array
```

Возвращает стек вызовов.

### getTraceAsString()

```php
public function getTraceAsString(): string
```

Возвращает стек вызовов в виде строки.

### getPrevious()

```php
public function getPrevious(): ?Throwable
```

Возвращает предыдущее исключение в цепочке.

## 📊 Статистика исключений

### ApiException

- **Наследование:** Exception
- **Код по умолчанию:** 0
- **Использование:** Базовый класс для всех исключений API

### InvalidApiKeyException

- **Наследование:** ApiException
- **Код по умолчанию:** 401
- **Использование:** Ошибки аутентификации

### RateLimitException

- **Наследование:** ApiException
- **Код по умолчанию:** 429
- **Использование:** Превышение лимитов запросов

### ResourceNotFoundException

- **Наследование:** ApiException
- **Код по умолчанию:** 404
- **Использование:** Не найденные ресурсы

### KpValidationException

- **Наследование:** ApiException
- **Код по умолчанию:** 400
- **Использование:** Ошибки валидации данных

## 🔗 Связанные разделы

- [Сервисы](../services/index.md) - Выбрасывают исключения
- [Модели](../models/index.md) - Могут выбрасывать исключения валидации
- [Ответы](../responses/index.md) - Могут выбрасывать исключения валидации
- [Перечисления](../enums/index.md) - Используются в исключениях
- [Интерфейсы](../interfaces/index.md) - Базовые интерфейсы
