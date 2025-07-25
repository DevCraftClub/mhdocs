---
tags:
  - PHP
  - DLE
  - Плагин
  - Админка
title: "Абстрактный класс: BasisModel - MH Admin"
description: "Документация по плагину абстрактный класс: basismodel для DLE."
keywords: "PHP, DLE, Плагин, Админка, абстрактный класс: basismodel, DevCraft, документация"
author: "Maxim Harder"
og:title: "Абстрактный класс: BasisModel"
og:description: "Документация по плагину абстрактный класс: basismodel для DLE."
og:image: "https://devcraft.club/data/assets/logo_default/devcraftx2.png"
twitter:title: "Абстрактный класс: BasisModel"
twitter:description: "Документация по плагину абстрактный класс: basismodel для DLE."
---

# Абстрактный класс: BasisModel

## Краткое содержание:

Базовый абстрактный класс модели, представляющий типовую сущность базы данных.

## Описание:

Класс используется для создания типовых моделей с общими свойствами, такими как
уникальный идентификатор (`id`), дата создания (`createdAt`) и дата последнего обновления (`updatedAt`).
Предназначен для расширения в конкретных классах моделей, которые реализуют бизнес-логику
и определяют дополнительные свойства и методы.
## Свойства:
- **`id`** — уникальный первичный ключ записи.
- **`createdAt`** — дата и время создания записи.
- **`updatedAt`** — дата последнего обновления записи (null, если данных об изменениях нет).
## Методы:
Класс предоставляет доступные методы для получения базовой информации о записи:
- `getId()` — возвращает уникальный идентификатор сущности.
- `getCreatedAt()` — возвращает дату и время создания записи.
- `getUpdatedAt()` — возвращает дату последнего обновления или null, если обновления не было.
- `getColumnVal(string $name)` — возвращает значение конкретного столбца по его имени (реализуется в наследниках).
## Аннотации:
Класс использует аннотации для указания схемы базы данных с помощью библиотеки `Cycle ORM`.
Например:
- `#[Column()]` определяет параметры поля таблицы.
- `#[Index()]` задаёт индексированные столбцы (например, `created_at` для быстрого поиска).
## Расширяемость:
- Класс **абстрактный**. Для его использования необходимо создать наследника и, как минимум,
реализовать метод `getColumnVal()`, который позволяет получить значение столбца.


---

### Свойства
* protected $[createdAt](#property_createdAt)
* protected $[id](#property_id)
* protected $[updatedAt](#property_updatedAt)

---

### Методы

* public [getColumnVal()](#method_getColumnVal)
* public [getCreatedAt()](#method_getCreatedAt)
* public [getId()](#method_getId)
* public [getUpdatedAt()](#method_getUpdatedAt)

---

### Подробности

* Путь: engine/inc/maharder/_includes/database/BasisModel.php

---

## Свойства
[](){#property_createdAt}
#### protected $createdAt : \DateTimeImmutable
---
**Краткое содержание**

Дата и время создания записи. Автоматически проставляется при создании.

**Тип:** <abbr title="DateTimeImmutable">Дата и время</abbr>


[](){#property_id}
#### protected $id : int
---
**Краткое содержание**

ID сущности (уникальный первичный ключ).

**Тип:** <abbr title="int">Целое число</abbr>


[](){#property_updatedAt}
#### protected $updatedAt : ?\DateTimeImmutable
---
**Краткое содержание**

Дата и время последнего обновления записи. Может быть равна null.

***Описание***

Автоматически обновляется при изменении записи.

**Тип:** <abbr title="?\DateTimeImmutable">Дата и время или null</abbr>

**Подробности:**



---

## Методы

[](){#method_getColumnVal}
### getColumnVal

```
abstract public getColumnVal(string  name) : mixed
```

##### Краткое содержание

Получить значение столбца по его имени.

##### Свойства:

| Название | Тип | По умолчанию |
|----------|-----|----------|
| **$name** | string |  |

##### Ошибки:

| Тип | Описание |
|-----|----------|
| \InvalidArgumentException | Если имя столбца не найдено. |

##### Возвращает:

```
mixed
```
Значение столбца.

---

[](){#method_getCreatedAt}
### getCreatedAt

```
public getCreatedAt() : \DateTimeImmutable
```

##### Краткое содержание

Получить дату и время создания записи.

##### Возвращает:

```
\DateTimeImmutable
```
Дата и время создания записи.

---

[](){#method_getId}
### getId

```
public getId() : int
```

##### Краткое содержание

Получить уникальный идентификатор сущности.

##### Возвращает:

```
int
```
Уникальный идентификатор сущности.

---

[](){#method_getUpdatedAt}
### getUpdatedAt

```
public getUpdatedAt() : \DateTimeImmutable|null
```

##### Краткое содержание

Получить дату и время последнего обновления записи, если доступно.

##### Возвращает:

```
\DateTimeImmutable|null
```
Дата и время последнего обновления или null, если обновления не было.
