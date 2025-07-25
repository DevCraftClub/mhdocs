# ApiKeyQouta

## Описание

`ApiKeyQouta` - это модель квоты API ключа из Kinopoisk API. Представляет информацию о лимитах использования API ключа, включая общий лимит запросов и количество уже использованных запросов.

## Основные возможности

- Хранение информации о квоте в неизменяемом виде
- Создание объекта из массива данных API
- Вычисление оставшихся лимитов запросов
- Проверка превышения квоты
- Поддержка безлимитных аккаунтов (значение -1)

## Наследование

```php
NotKinopoisk\Interfaces\ModelInterface
└── NotKinopoisk\Models\ApiKeyQouta
```

## Конструктор

```php
public function __construct(
    public readonly int $value,
    public readonly int $used,
)
```

### Параметры

- `$value` (int) - Общий лимит запросов (-1 для безлимитного аккаунта)
- `$used` (int) - Количество уже использованных запросов

## Свойства

### value

```php
public readonly int $value
```

**Описание:** Общий лимит запросов (-1 для безлимитного аккаунта)

**Тип:** `int`

**Доступ:** Только для чтения

**Особенности:**

- `-1` означает безлимитный аккаунт
- Положительные значения указывают на конкретный лимит

**Пример:**

```php
$quota = $apiKeyQouta->value;
if ($quota === -1) {
    echo "Безлимитный аккаунт";
} else {
    echo "Лимит запросов: {$quota}";
}
```

### used

```php
public readonly int $used
```

**Описание:** Количество уже использованных запросов

**Тип:** `int`

**Доступ:** Только для чтения

**Пример:**

```php
$used = $apiKeyQouta->used;
echo "Использовано запросов: {$used}";
```

## Статические методы

### fromArray()

```php
public static function fromArray(array $data): self
```

Создает экземпляр квоты из массива данных API.

#### Параметры

- `$data` (array) - Массив данных квоты от API, должен содержать ключи 'value' и 'used'

#### Возвращает

- `self` - Новый экземпляр квоты API ключа

#### Исключения

- `\InvalidArgumentException` - Если данные имеют неверный формат или отсутствуют обязательные поля

#### Пример использования

```php
use NotKinopoisk\Models\ApiKeyQouta;

$apiData = [
    'value' => 1000,
    'used' => 250
];

$quota = ApiKeyQouta::fromArray($apiData);

// Для безлимитного аккаунта
$unlimitedData = [
    'value' => -1,
    'used' => 1500
];

$unlimitedQuota = ApiKeyQouta::fromArray($unlimitedData);
```

## Методы экземпляра

### isQuotaExceeded()

```php
public function isQuotaExceeded(): bool
```

Проверяет, превышена ли квота запросов.

#### Возвращает

- `bool` - true если квота превышена, false в противном случае

#### Особенности

- Безлимитные аккаунты (value = -1) никогда не превышают квоту
- Квота считается превышенной, если оставшееся количество запросов <= 0

#### Пример использования

```php
use NotKinopoisk\Models\ApiKeyQouta;

// Обычная квота в пределах лимита
$quota = new ApiKeyQouta(1000, 250);
echo $quota->isQuotaExceeded(); // false

// Превышенная квота
$exceededQuota = new ApiKeyQouta(100, 150);
echo $exceededQuota->isQuotaExceeded(); // true

// Исчерпанная квота
$emptyQuota = new ApiKeyQouta(100, 100);
echo $emptyQuota->isQuotaExceeded(); // true

// Безлимитный аккаунт
$unlimitedQuota = new ApiKeyQouta(-1, 99999);
echo $unlimitedQuota->isQuotaExceeded(); // false
```

### getRemainingQuota()

```php
public function getRemainingQuota(): int
```

Получает количество оставшихся запросов в квоте.

#### Возвращает

- `int` - Количество оставшихся запросов. Может быть отрицательным при превышении квоты

#### Особенности

- Для безлимитных аккаунтов (value = -1) возвращает разность между -1 и used
- Может возвращать отрицательные значения при превышении квоты

#### Пример использования

```php
use NotKinopoisk\Models\ApiKeyQouta;

$quota = new ApiKeyQouta(1000, 250);
echo $quota->getRemainingQuota(); // 750

$exceededQuota = new ApiKeyQouta(100, 150);
echo $exceededQuota->getRemainingQuota(); // -50

$unlimitedQuota = new ApiKeyQouta(-1, 1500);
echo $unlimitedQuota->getRemainingQuota(); // -1501 (но квота не превышена)
```

### toArray()

```php
public function toArray(): array
```

Преобразует объект квоты API ключа в массив.

#### Возвращает

- `array` - Массив данных квоты API ключа

#### Пример использования

```php
use NotKinopoisk\Models\ApiKeyQouta;

$array = $quota->toArray();
// [
//     'value' => 1000,
//     'used' => 250
// ]
```

## Примеры использования

### Создание объекта

```php
use NotKinopoisk\Models\ApiKeyQouta;

// Обычная квота
$quota = new ApiKeyQouta(1000, 250);

// Безлимитная квота
$unlimitedQuota = new ApiKeyQouta(-1, 1500);
```

### Создание из данных API

```php
use NotKinopoisk\Models\ApiKeyQouta;

// Данные от API
$apiData = [
    'value' => 1000,
    'used' => 250
];

$quota = ApiKeyQouta::fromArray($apiData);
```

### Работа с квотой

```php
use NotKinopoisk\Models\ApiKeyQouta;

// Получение информации
echo "Общий лимит: {$quota->value}\n";
echo "Использовано: {$quota->used}\n";
echo "Осталось: {$quota->getRemainingQuota()}\n";

// Проверка превышения квоты
if ($quota->isQuotaExceeded()) {
    echo "Квота превышена!";
} else {
    echo "Квота в пределах лимита";
}
```

### Обработка безлимитных аккаунтов

```php
use NotKinopoisk\Models\ApiKeyQouta;

function handleQuota(ApiKeyQouta $quota): void
{
    if ($quota->value === -1) {
        echo "Безлимитный аккаунт - ограничений нет\n";
        echo "Использовано запросов: {$quota->used}\n";
        return;
    }

    $remaining = $quota->getRemainingQuota();

    if ($remaining <= 0) {
        echo "Квота исчерпана! Использовано: {$quota->used}/{$quota->value}\n";
    } else {
        echo "Осталось запросов: {$remaining}\n";
        echo "Использовано: {$quota->used}/{$quota->value}\n";
    }
}

// Примеры
$regularQuota = new ApiKeyQouta(1000, 750);
handleQuota($regularQuota); // "Осталось запросов: 250"

$unlimitedQuota = new ApiKeyQouta(-1, 5000);
handleQuota($unlimitedQuota); // "Безлимитный аккаунт - ограничений нет"
```

### Использование в сервисах

```php
use NotKinopoisk\Models\ApiKeyQouta;
use NotKinopoisk\Services\UserService;

class UserService extends AbstractService
{
    public function checkQuota(): bool
    {
        $response = $this->client->get('/api/v1/user/quota');
        $quota = ApiKeyQouta::fromArray($response);

        if ($quota->isQuotaExceeded()) {
            throw new \Exception('Квота API запросов исчерпана');
        }

        return true;
    }

    public function getQuotaInfo(): array
    {
        $response = $this->client->get('/api/v1/user/quota');
        $quota = ApiKeyQouta::fromArray($response);

        return [
            'total' => $quota->value,
            'used' => $quota->used,
            'remaining' => $quota->getRemainingQuota(),
            'isUnlimited' => $quota->value === -1,
            'isExceeded' => $quota->isQuotaExceeded()
        ];
    }
}
```

### Мониторинг использования

```php
use NotKinopoisk\Models\ApiKeyQouta;

function monitorQuotaUsage(ApiKeyQouta $quota): void
{
    echo "=== Информация о квоте API ===\n";

    if ($quota->value === -1) {
        echo "Тип: Безлимитный аккаунт\n";
        echo "Использовано запросов: {$quota->used}\n";
        echo "Статус: ✅ Без ограничений\n";
    } else {
        echo "Тип: Ограниченный аккаунт\n";
        echo "Общий лимит: {$quota->value}\n";
        echo "Использовано: {$quota->used}\n";
        echo "Осталось: {$quota->getRemainingQuota()}\n";

        $percentage = ($quota->used / $quota->value) * 100;
        echo "Использовано: " . round($percentage, 1) . "%\n";

        if ($quota->isQuotaExceeded()) {
            echo "Статус: ❌ Квота превышена!\n";
        } elseif ($percentage >= 90) {
            echo "Статус: ⚠️ Квота почти исчерпана\n";
        } else {
            echo "Статус: ✅ Квота в порядке\n";
        }
    }
}
```

### Сравнение квот

```php
use NotKinopoisk\Models\ApiKeyQouta;

function compareQuotas(ApiKeyQouta $quota1, ApiKeyQouta $quota2): void
{
    echo "Сравнение квот:\n";
    echo "Квота 1: {$quota1->used}/{$quota1->value} (осталось: {$quota1->getRemainingQuota()})\n";
    echo "Квота 2: {$quota2->used}/{$quota2->value} (осталось: {$quota2->getRemainingQuota()})\n";

    $remaining1 = $quota1->getRemainingQuota();
    $remaining2 = $quota2->getRemainingQuota();

    if ($remaining1 > $remaining2) {
        echo "Квота 1 имеет больше оставшихся запросов\n";
    } elseif ($remaining2 > $remaining1) {
        echo "Квота 2 имеет больше оставшихся запросов\n";
    } else {
        echo "Квоты имеют одинаковое количество оставшихся запросов\n";
    }
}
```

### Сериализация и десериализация

```php
use NotKinopoisk\Models\ApiKeyQouta;

// Преобразование в массив
$array = $quota->toArray();

// Сохранение в JSON
$json = json_encode($array, JSON_PRETTY_PRINT);
file_put_contents('quota.json', $json);

// Загрузка из JSON
$loadedArray = json_decode(file_get_contents('quota.json'), true);
$loadedQuota = ApiKeyQouta::fromArray($loadedArray);
```

### Валидация данных

```php
use NotKinopoisk\Models\ApiKeyQouta;

function validateQuotaData(array $data): bool
{
    if (!isset($data['value']) || !isset($data['used'])) {
        throw new \InvalidArgumentException('Отсутствуют обязательные поля value и used');
    }

    if (!is_int($data['value']) || !is_int($data['used'])) {
        throw new \InvalidArgumentException('Поля value и used должны быть целыми числами');
    }

    if ($data['value'] !== -1 && $data['value'] <= 0) {
        throw new \InvalidArgumentException('Поле value должно быть -1 или положительным числом');
    }

    if ($data['used'] < 0) {
        throw new \InvalidArgumentException('Поле used не может быть отрицательным');
    }

    return true;
}

// Использование
try {
    $data = ['value' => 1000, 'used' => 250];
    validateQuotaData($data);
    $quota = ApiKeyQouta::fromArray($data);
} catch (\InvalidArgumentException $e) {
    echo "Ошибка валидации: " . $e->getMessage();
}
```

## Связанные классы

- [`ApiKeyInfo`](./api-key-info.md) - Модель информации об API ключе
- [`UserService`](../services/user-service.md) - Сервис для работы с пользовательскими данными

## API Endpoints

Квота API ключа используется в следующих API endpoints:

- `/api/v1/user/quota` - Квота пользователя
- `/api/v1/api_keys/{apiKey}` - Информация об API ключе
- `/api/v1/user/info` - Информация о пользователе

---

**📚 Навигация:** [Главная](../index.md) → [Модели](index.md) → ApiKeyQouta
