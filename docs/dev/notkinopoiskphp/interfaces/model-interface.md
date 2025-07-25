---
tags:
  - PHP
  - API
  - Интерфейсы
title: "ModelInterface - KinopoiskUnofficialTech PHP Wrapper"
description: "Документация по modelinterface. Часть API wrapper для КиноПоиска."
keywords: "PHP, API, Интерфейсы, modelinterface, DevCraft, документация"
author: "Maxim Harder"
og:title: "ModelInterface"
og:description: "Документация по modelinterface. Часть API wrapper для КиноПоиска."
og:image: "https://devcraft.club/data/assets/logo_default/devcraftx2.png"
twitter:title: "ModelInterface"
twitter:description: "Документация по modelinterface. Часть API wrapper для КиноПоиска."
---

# ModelInterface

Интерфейс для моделей с возможностью преобразования в/из массива.

## Описание

Определяет базовый контракт для всех моделей данных в системе. Обеспечивает единообразную работу с преобразованием объектов в массивы и создания объектов из массивов данных API.

## Основные возможности

- Унификация процесса создания моделей из данных API
- Стандартизация сериализации объектов в массивы
- Обеспечение совместимости с системами кэширования
- Упрощение работы с JSON API responses

## Методы

### `fromArray(array $data): object`

Создает экземпляр модели из массива данных API.

**Параметры:**

- `$data` (array) - Массив данных от API, содержащий все необходимые поля для модели

**Возвращает:**

- `object` - Новый экземпляр класса-реализации с данными из массива

**Исключения:**

- `InvalidArgumentException` - Если обязательные поля отсутствуют в массиве данных
- `InvalidArgumentException` - Если данные имеют неверный тип или формат

**Пример:**

```php
$apiData = [
    'id' => 123,
    'name' => 'Название',
    'description' => 'Описание'
];
$model = ConcreteModel::fromArray($apiData);
```

### `toArray(): array`

Преобразует объект модели в массив.

**Возвращает:**

- `array` - Ассоциативный массив со всеми данными объекта

**Пример:**

```php
$model = new ConcreteModel('value1', 'value2');
$array = $model->toArray();
// Результат: ['field1' => 'value1', 'field2' => 'value2']
```

## Пример реализации

```php
class ExampleModel implements ModelInterface {
    public function __construct(
        private string $field1,
        private string $field2
    ) {}

    public static function fromArray(array $data): object {
        return new static($data['field1'], $data['field2']);
    }

    public function toArray(): array {
        return [
            'field1' => $this->field1,
            'field2' => $this->field2
        ];
    }
}

// Использование
$model = ExampleModel::fromArray($apiData);
$serialized = $model->toArray();

```

# Связанные файлы

- [Film](../models/film.md) - Основная модель фильма
- [Person](../models/person.md) - Модель персоны
- [Staff](../models/staff.md) - Модель съемочной группы

---

**📚 Навигация:** [Главная](../index.md) → [Интерфейсы](index.md) → ModelInterface
