---
title: Атрибуты
description: Система атрибутов KinopoiskDev для декларативной настройки моделей, валидации и конфигурации
keywords: атрибуты, validation, sensitive, apifield, php 8.3, декларативная валидация
category: attributes
tags:
	- Kinopoisk
	- attributes
	- атрибуты
---

# Атрибуты

Система атрибутов KinopoiskDev предоставляет декларативный способ настройки моделей, валидации и конфигурации через PHP 8.3+ атрибуты.

## Обзор

Атрибуты в KinopoiskDev используются для:

- **Валидации данных** - автоматическая проверка входных параметров
- **Конфигурации API** - настройка маппинга полей
- **Безопасности** - контроль отображения конфиденциальных данных
- **Документации** - самодокументируемый код

## Доступные атрибуты

### Validation

**Файл:** [Validation.md](Validation.md)

Основной атрибут для валидации свойств моделей. Поддерживает различные типы проверок:

```php
class Movie {
    #[Validation(required: true, minLength: 1, maxLength: 255)]
    public string $title;

    #[Validation(min: 1900, max: 2030)]
    public int $year;

    #[Validation(pattern: '/^[a-zA-Z0-9\s]+$/')]
    public string $genre;
}
```

**Возможности:**

- Обязательные поля
- Ограничения длины строк
- Диапазоны числовых значений
- Регулярные выражения
- Допустимые значения
- Кастомные сообщения об ошибках

### Sensitive

**Файл:** [Sensitive.md](Sensitive.md)

Атрибут для пометки конфиденциальных полей с контролем их отображения:

```php
class ApiConfig {
    #[Sensitive(hideInJson: true, hideInArray: true)]
    public string $apiToken;

    #[Sensitive(hideInJson: true, hideInArray: false)]
    public string $secretKey;
}
```

**Возможности:**

- Скрытие в JSON сериализации
- Скрытие в массивах
- Гибкая настройка видимости
- Автоматическая защита данных

### ApiField

**Файл:** [ApiField.md](ApiField.md)

Атрибут для настройки маппинга между свойствами модели и полями API:

```php
class Movie {
    #[ApiField(name: 'movie_title', nullable: false, default: 'Unknown')]
    public string $title;

    #[ApiField(name: 'release_year', nullable: true)]
    public ?int $year;
}
```

**Возможности:**

- Кастомные имена полей API
- Настройка nullable значений
- Значения по умолчанию
- Гибкий маппинг данных

## Использование

### Базовый пример

```php
<?php

use KinopoiskDev\Attributes\Validation;
use KinopoiskDev\Attributes\Sensitive;
use KinopoiskDev\Attributes\ApiField;

class User {
    #[ApiField(name: 'user_name')]
    #[Validation(required: true, minLength: 2, maxLength: 50)]
    public string $name;

    #[ApiField(name: 'user_email')]
    #[Validation(required: true, pattern: '/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i')]
    public string $email;

    #[Sensitive(hideInJson: true)]
    #[Validation(required: true, minLength: 8)]
    public string $password;

    #[Validation(min: 0, max: 120)]
    public int $age;
}
```

### Комбинирование атрибутов

```php
class ApiRequest {
    // Поле с валидацией и маппингом API
    #[ApiField(name: 'request_id', nullable: false)]
    #[Validation(required: true, pattern: '/^[a-f0-9]{32}$/')]
    public string $id;

    // Конфиденциальное поле с валидацией
    #[Sensitive(hideInJson: true, hideInArray: true)]
    #[Validation(required: true, minLength: 16)]
    public string $apiKey;

    // Поле с диапазоном значений
    #[Validation(min: 1, max: 100, allowedValues: ['pending', 'processing', 'completed'])]
    public string $status;
}
```

## Интеграция с сервисами

### ValidationService

Атрибуты `#[Validation]` автоматически обрабатываются `ValidationService`:

```php
use KinopoiskDev\Services\ValidationService;

$validator = new ValidationService();
$movie = new Movie();
$movie->title = ''; // Пустая строка

try {
    $validator->validate($movie);
} catch (ValidationException $e) {
    echo $e->getFirstError(); // "Поле title обязательно"
}
```

### Автоматическая сериализация

Атрибуты `#[Sensitive]` автоматически обрабатываются при сериализации:

```php
$config = new ApiConfig();
$config->apiToken = 'secret-token';

$json = json_encode($config);
// apiToken будет скрыт в JSON

$array = $config->toArray();
// apiToken будет скрыт в массиве (если hideInArray: true)
```

## Связанные разделы

- **[ValidationService](../Services/ValidationService.md)** - сервис валидации
- **[ValidationException](../Exceptions/ValidationException.md)** - исключения валидации
- **[KinopoiskDevException](../Exceptions/KinopoiskDevException.md)** - базовые исключения

## Преимущества

### Декларативность

```php
// Вместо ручной валидации
if (empty($title) || strlen($title) > 255) {
    throw new Exception('Invalid title');
}

// Используйте атрибуты
#[Validation(required: true, maxLength: 255)]
public string $title;
```

### Безопасность

```php
// Автоматическое скрытие конфиденциальных данных
#[Sensitive(hideInJson: true)]
public string $apiToken;
```

### Гибкость

```php
// Легкая настройка маппинга API
#[ApiField(name: 'movie_title', nullable: false)]
public string $title;
```

## Полезные ссылки

- **[PHP Attributes Documentation](https://www.php.net/manual/en/language.attributes.php)** - официальная документация PHP
- **[Validation Service](../Services/ValidationService.md)** - сервис валидации
- **[Exceptions](../Exceptions/)** - обработка ошибок

---

**Атрибуты KinopoiskDev** - современный подход к декларативной настройке моделей с использованием возможностей PHP 8.3+.
