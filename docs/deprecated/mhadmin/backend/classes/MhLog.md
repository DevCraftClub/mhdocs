---
tags:
  - PHP
  - DLE
  - Плагин
  - Админка
title: "Класс: MhLog - MH Admin"
description: "Документация по плагину класс: mhlog для DLE."
keywords: "PHP, DLE, Плагин, Админка, класс: mhlog, DevCraft, документация"
author: "Maxim Harder"
og:title: "Класс: MhLog"
og:description: "Документация по плагину класс: mhlog для DLE."
og:image: "https://devcraft.club/data/assets/logo_default/devcraftx2.png"
twitter:title: "Класс: MhLog"
twitter:description: "Документация по плагину класс: mhlog для DLE."
---

# Класс: MhLog

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
* private $[fn_name](#property_fn_name)
* private $[log_type](#property_log_type)
* private $[message](#property_message)
* private $[plugin](#property_plugin)
* private $[time](#property_time)
* private $[uuid](#property_uuid)

---

### Методы

* public [getColumnVal()](#method_getColumnVal)
* public [getCreatedAt()](#method_getCreatedAt)
* public [getFnName()](#method_getFnName)
* public [getId()](#method_getId)
* public [getLogType()](#method_getLogType)
* public [getMessage()](#method_getMessage)
* public [getPlugin()](#method_getPlugin)
* public [getTime()](#method_getTime)
* public [getUpdatedAt()](#method_getUpdatedAt)
* public [getUuid()](#method_getUuid)
* public [setFnName()](#method_setFnName)
* public [setLogType()](#method_setLogType)
* public [setMessage()](#method_setMessage)
* public [setPlugin()](#method_setPlugin)
* public [setTime()](#method_setTime)
* public [setUuid()](#method_setUuid)

---

### Подробности

* Путь: engine/inc/maharder/_modules/admin/models/MhLog.php

---

## Свойства

[](){#property_createdAt}
#### protected $createdAt : \DateTimeImmutable
---
**Краткое содержание**

Дата и время создания записи. Автоматически проставляется при создании.

**Тип:** \DateTimeImmutable

**Подробности:**

* Унаследовано от: [\BasisModel](./BasisModel.md)

[](){#property_id}
#### protected $id : int
---
**Краткое содержание**

ID сущности (уникальный первичный ключ).

**Тип:** <abbr title="int">Целое число</abbr>

**Подробности:**

* Унаследовано от: [\BasisModel](./BasisModel.md)

[](){#property_updatedAt}
#### protected $updatedAt : ?\DateTimeImmutable
---
**Краткое содержание**

Дата и время последнего обновления записи. Может быть равна null.

***Описание***

Автоматически обновляется при изменении записи.

**Тип:** <abbr title="?\DateTimeImmutable">Дата и время или null</abbr>

**Подробности:**

* Унаследовано от: [\BasisModel](./BasisModel.md)

[](){#property_fn_name}
#### private $fn_name : string
---
**Тип:** <abbr title="string">Текст</abbr>

[](){#property_log_type}
#### private $log_type : string
---
**Тип:** <abbr title="string">Текст</abbr>

[](){#property_message}
#### private $message : string
---
**Тип:** <abbr title="string">Текст</abbr>

[](){#property_plugin}
#### private $plugin : string
---
**Тип:** <abbr title="string">Текст</abbr>

[](){#property_time}
#### private $time : \DateTimeImmutable
---
**Тип:** \DateTimeImmutable

[](){#property_uuid}
#### private $uuid : \Ramsey\Uuid\UuidInterface
---
**Тип:** \Ramsey\Uuid\UuidInterface

**Подробности:**



---

## Методы

[](){#method_getColumnVal}

### getColumnVal

```
public getColumnVal(string  name) : mixed
```

##### Краткое содержание

Получить значение столбца по его имени.

##### Свойства:

| Название  | Тип    | По умолчанию |
|-----------|--------|--------------|
| **$name** | string |              |

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

[](){#method_getFnName}

### getFnName

```
public getFnName() : string
```

##### Возвращает:

```
string
```

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

[](){#method_getLogType}

### getLogType

```
public getLogType() : string
```

##### Возвращает:

```
string
```

---

[](){#method_getMessage}

### getMessage

```
public getMessage() : string
```

##### Возвращает:

```
string
```

---

[](){#method_getPlugin}

### getPlugin

```
public getPlugin() : string
```

##### Возвращает:

```
string
```

---

[](){#method_getTime}

### getTime

```
public getTime() : \DateTimeImmutable
```

##### Возвращает:

```
\DateTimeImmutable
```

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

---

[](){#method_getUuid}

### getUuid

```
public getUuid() : \Ramsey\Uuid\UuidInterface
```

##### Возвращает:

```
\Ramsey\Uuid\UuidInterface
```

---

[](){#method_setFnName}

### setFnName

```
public setFnName(string  fn_name) : void
```

##### Свойства:

| Название     | Тип    | По умолчанию |
|--------------|--------|--------------|
| **$fn_name** | string |              |

##### Возвращает:

```
void
```

---

[](){#method_setLogType}

### setLogType

```
public setLogType(string  log_type) : void
```

##### Свойства:

| Название      | Тип    | По умолчанию |
|---------------|--------|--------------|
| **$log_type** | string |              |

##### Возвращает:

```
void
```

---

[](){#method_setMessage}

### setMessage

```
public setMessage(string  message) : void
```

##### Свойства:

| Название     | Тип    | По умолчанию |
|--------------|--------|--------------|
| **$message** | string |              |

##### Возвращает:

```
void
```

---

[](){#method_setPlugin}

### setPlugin

```
public setPlugin(string  plugin) : void
```

##### Свойства:

| Название    | Тип    | По умолчанию |
|-------------|--------|--------------|
| **$plugin** | string |              |

##### Возвращает:

```
void
```

---

[](){#method_setTime}

### setTime

```
public setTime(\DateTimeImmutable  time) : void
```

##### Свойства:

| Название  | Тип                | По умолчанию |
|-----------|--------------------|--------------|
| **$time** | \DateTimeImmutable |              |

##### Возвращает:

```
void
```

---

[](){#method_setUuid}

### setUuid

```
public setUuid(\Ramsey\Uuid\UuidInterface  uuid) : void
```

##### Свойства:

| Название  | Тип                        | По умолчанию |
|-----------|----------------------------|--------------|
| **$uuid** | \Ramsey\Uuid\UuidInterface |              |

##### Возвращает:

```
void
```
