# ResponseInterface

Интерфейс для объектов ответов Kinopoisk API.

## Описание

Определяет общий контракт для всех типов ответов API, включая методы для создания объектов из массивов данных и валидации целевых классов. Обеспечивает единообразие в обработке различных типов ответов.

## Основные возможности

- Создание экземпляров ответов из данных API
- Валидация классов для преобразования элементов
- Унификация работы с различными типами ответов

## Методы

### `fromArray(array $data, string $cls): object`

Создает экземпляр ответа из массива данных API.

**Параметры:**

- `$data` (array) - Массив данных от API, содержащий структуру ответа
- `$cls` (string) - Полное имя класса для преобразования элементов массива

**Возвращает:**

- `object` - Новый экземпляр класса-реализации с преобразованными данными

**Исключения:**

- `KpValidationException` - Если указанный класс не существует
- `KpValidationException` - Если класс не имеет метода fromArray
- `KpValidationException` - Если данные имеют неверный формат

### `checkClass(string $cls): void`

Проверяет существование и совместимость класса.

**Параметры:**

- `$cls` (string) - Полное имя класса для проверки

**Исключения:**

- `KpValidationException` - Если указанный класс не существует
- `KpValidationException` - Если класс не имеет статического метода fromArray

### `toArray(): array`

Преобразует объект в массив данных.

**Возвращает:**

- `array` - Массив данных, представляющий объект ответа

**Пример:**

```php
$response = SomeResponse::fromArray($apiData);
$array = $response->toArray();

// Использование для сериализации
$json = json_encode($array);

// Использование для логирования
$logger->info('Ответ API', $array);
```

## Пример использования

```php
// Создание ответа из данных API
$apiData = [
    'total' => 100,
    'items' => [
        ['id' => 1, 'name' => 'Фильм 1'],
        ['id' => 2, 'name' => 'Фильм 2']
    ]
];

$response = DefaultResponse::fromArray($apiData, Film::class);

// Преобразование в массив
$array = $response->toArray();
```

# Связанные файлы

- [DefaultResponse](../responses/default-response.md) - Базовый ответ
- [PaginatedResponse](../responses/paginated-response.md) - Пагинированный ответ
- [KeywordSearchResponse](../responses/keyword-search-response.md) - Ответ поиска

---

**📚 Навигация:** [Главная](../index.md) → [Интерфейсы](index.md) → ResponseInterface
