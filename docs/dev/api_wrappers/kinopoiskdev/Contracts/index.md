---
title: Интерфейсы
description: Система контрактов KinopoiskDev для обеспечения совместимости и расширяемости библиотеки
keywords: интерфейсы, interfaces, psr, cache, logger, стандарты
category: contracts
tags:
	- Kinopoisk
	- interfaces
	- контракты
	- интерфейсы
	- contracts
---

# Интерфейсы

Система контрактов KinopoiskDev предоставляет интерфейсы для обеспечения совместимости и расширяемости библиотеки. Все интерфейсы основаны на PSR стандартах для максимальной совместимости с экосистемой PHP.

## Обзор

Интерфейсы в KinopoiskDev используются для:

- **Стандартизации** - обеспечение единообразного интерфейса
- **Расширяемости** - возможность подключения сторонних реализаций
- **Тестирования** - легкая замена реальных сервисов на моки
- **PSR совместимости** - следование стандартам PHP-FIG

## Доступные интерфейсы

### CacheInterface

**Файл:** [CacheInterface.md](CacheInterface.md)

Интерфейс для сервиса кэширования, определяющий контракт для работы с различными системами кэширования:

```php
interface CacheInterface {
    public function get(string $key): mixed;
    public function set(string $key, mixed $value, int $ttl): bool;
    public function delete(string $key): bool;
    public function has(string $key): bool;
    public function clear(): bool;
    public function getMultiple(array $keys): array;
    public function setMultiple(array $values, int $ttl): bool;
}
```

**Возможности:**

- Базовые операции CRUD для кэша
- Поддержка TTL (время жизни)
- Массовые операции (getMultiple, setMultiple)
- Проверка существования ключей
- Очистка всего кэша

**Реализации:**

- Встроенный CacheService
- Возможность подключения Redis, Memcached и других драйверов

### LoggerInterface

**Файл:** [LoggerInterface.md](LoggerInterface.md)

PSR-3 совместимый интерфейс для логирования, основанный на стандартах PHP-FIG:

```php
interface LoggerInterface {
    public function debug(string $message, array $context = []): void;
    public function info(string $message, array $context = []): void;
    public function warning(string $message, array $context = []): void;
    public function error(string $message, array $context = []): void;
    public function critical(string $message, array $context = []): void;
}
```

**Возможности:**

- PSR-3 совместимость
- Различные уровни логирования
- Контекстная информация
- Стандартизированный интерфейс

**Реализации:**

- Встроенный логгер
- Совместимость с Monolog, Psr\Log и другими PSR-3 логгерами

## Использование

### Подключение кастомного кэша

```php
<?php

use KinopoiskDev\Contracts\CacheInterface;
use KinopoiskDev\Kinopoisk;

class RedisCache implements CacheInterface {
    private Redis $redis;

    public function __construct(Redis $redis) {
        $this->redis = $redis;
    }

    public function get(string $key): mixed {
        return $this->redis->get($key);
    }

    public function set(string $key, mixed $value, int $ttl): bool {
        return $this->redis->setex($key, $ttl, serialize($value));
    }

    // ... остальные методы
}

// Использование с KinopoiskDev
$redis = new Redis();
$redis->connect('127.0.0.1', 6379);

$cache = new RedisCache($redis);
$kinopoisk = new Kinopoisk(apiToken: 'token', cache: $cache);
```

### Подключение кастомного логгера

```php
<?php

use KinopoiskDev\Contracts\LoggerInterface;
use KinopoiskDev\Kinopoisk;

class CustomLogger implements LoggerInterface {
    public function debug(string $message, array $context = []): void {
        echo "[DEBUG] {$message}\n";
    }

    public function info(string $message, array $context = []): void {
        echo "[INFO] {$message}\n";
    }

    public function warning(string $message, array $context = []): void {
        echo "[WARNING] {$message}\n";
    }

    public function error(string $message, array $context = []): void {
        echo "[ERROR] {$message}\n";
    }

    public function critical(string $message, array $context = []): void {
        echo "[CRITICAL] {$message}\n";
    }
}

// Использование с KinopoiskDev
$logger = new CustomLogger();
$kinopoisk = new Kinopoisk(apiToken: 'token', logger: $logger);
```

### Комбинированное использование

```php
<?php

use KinopoiskDev\Contracts\CacheInterface;
use KinopoiskDev\Contracts\LoggerInterface;
use KinopoiskDev\Kinopoisk;

class ProductionConfig {
    private CacheInterface $cache;
    private LoggerInterface $logger;

    public function __construct() {
        // Настройка Redis кэша
        $redis = new Redis();
        $redis->connect('cache.example.com', 6379);
        $this->cache = new RedisCache($redis);

        // Настройка Monolog логгера
        $this->logger = new \Monolog\Logger('kinopoiskdev');
        $this->logger->pushHandler(new \Monolog\Handler\StreamHandler('logs/kinopoisk.log'));
    }

    public function createKinopoiskClient(): Kinopoisk {
        return new Kinopoisk(
            apiToken: $_ENV['KINOPOISK_API_TOKEN'],
            cache: $this->cache,
            logger: $this->logger
        );
    }
}
```

## Интеграция с сервисами

### CacheService

Встроенная реализация CacheInterface:

```php
use KinopoiskDev\Services\CacheService;

$cache = new CacheService();
$kinopoisk = new Kinopoisk(apiToken: 'token', cache: $cache);

// Кэширование автоматически работает для всех запросов
$movie = $kinopoisk->getMovieById(301); // Результат кэшируется
```

### Автоматическое логирование

Логгер автоматически записывает все операции:

```php
$kinopoisk = new Kinopoisk(apiToken: 'token', logger: $logger);

// Автоматически логируется
$kinopoisk->searchMovies($filter);
// [INFO] HTTP request started: GET /v1.4/movie?year=2023
// [INFO] HTTP request completed: 200 OK
```

## Связанные разделы

- **[CacheService](../Services/CacheService.md)** - встроенная реализация кэша
- **[ValidationService](../Services/ValidationService.md)** - сервис валидации
- **[Kinopoisk](../Kinopoisk.md)** - главный класс с поддержкой контрактов

## Преимущества

### Стандартизация

```php
// Единый интерфейс для всех кэш-драйверов
interface CacheInterface {
    public function get(string $key): mixed;
    public function set(string $key, mixed $value, int $ttl): bool;
}
```

### Расширяемость

```php
// Легкая замена реализации
$kinopoisk = new Kinopoisk(
    apiToken: 'token',
    cache: new RedisCache($redis),    // Redis
    logger: new MonologLogger()       // Monolog
);
```

### Тестируемость

```php
// Легкое создание моков для тестов
$mockCache = $this->createMock(CacheInterface::class);
$mockLogger = $this->createMock(LoggerInterface::class);

$kinopoisk = new Kinopoisk(
    apiToken: 'token',
    cache: $mockCache,
    logger: $mockLogger
);
```

## Полезные ссылки

- **[PSR-3 Logger Interface](https://www.php-fig.org/psr/psr-3/)** - стандарт логирования
- **[PSR-16 Cache Interface](https://www.php-fig.org/psr/psr-16/)** - стандарт кэширования
- **[CacheService](../Services/CacheService.md)** - встроенная реализация кэша
- **[Kinopoisk](../Kinopoisk.md)** - главный класс

---

**Интерфейсы KinopoiskDev** - обеспечивают стандартизацию и расширяемость библиотеки через PSR совместимые интерфейсы.
