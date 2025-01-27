# Класс: [\Default](../../packages/Default.md)\MhLog

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

* File: [engine/inc/maharder/_modules/admin/models/MhLog.php](../../engine/inc/maharder/_modules/admin/models/MhLog.php)

---

## Свойства
<a id="property_createdAt"></a>
#### protected $createdAt : \DateTimeImmutable
---
**Краткое содержание**

Дата и время создания записи. Автоматически проставляется при создании.

**Тип:** \DateTimeImmutable

**Подробности:**
* Унаследовано от: [\BasisModel](../classes/BasisModel.md)


<a id="property_id"></a>
#### protected $id : int
---
**Краткое содержание**

ID сущности (уникальный первичный ключ).

**Тип:** <a href="../int"><abbr title="int">int</abbr></a>

**Подробности:**
* Унаследовано от: [\BasisModel](../classes/BasisModel.md)


<a id="property_updatedAt"></a>
#### protected $updatedAt : ?\DateTimeImmutable
---
**Краткое содержание**

Дата и время последнего обновления записи. Может быть равна null.

***Описание***

Автоматически обновляется при изменении записи.

**Тип:** <a href="../?\DateTimeImmutable"><abbr title="?\DateTimeImmutable">DateTimeImmutable</abbr></a>

**Подробности:**
* Унаследовано от: [\BasisModel](../classes/BasisModel.md)


<a id="property_fn_name"></a>
#### private $fn_name : string
---
**Тип:** <a href="../string"><abbr title="string">string</abbr></a>

**Подробности:**


<a id="property_log_type"></a>
#### private $log_type : string
---
**Тип:** <a href="../string"><abbr title="string">string</abbr></a>

**Подробности:**


<a id="property_message"></a>
#### private $message : string
---
**Тип:** <a href="../string"><abbr title="string">string</abbr></a>

**Подробности:**


<a id="property_plugin"></a>
#### private $plugin : string
---
**Тип:** <a href="../string"><abbr title="string">string</abbr></a>

**Подробности:**


<a id="property_time"></a>
#### private $time : \DateTimeImmutable
---
**Тип:** \DateTimeImmutable

**Подробности:**


<a id="property_uuid"></a>
#### private $uuid : \Ramsey\Uuid\UuidInterface
---
**Тип:** \Ramsey\Uuid\UuidInterface

**Подробности:**



---

## Методы

<a id="method_getColumnVal"></a>
### getColumnVal

```
public getColumnVal(string  name) : mixed
```

##### Краткое содержание

Получить значение столбца по его имени.

##### Свойства:

| Название | Тип | По умолчанию |
|----------|-----|----------|
| **$name** | string |  |

##### Возвращает:

```
mixed
```
Значение столбца.

---

<a id="method_getCreatedAt"></a>
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

<a id="method_getFnName"></a>
### getFnName

```
public getFnName() : string
```

##### Возвращает:

```
string
```

---

<a id="method_getId"></a>
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

<a id="method_getLogType"></a>
### getLogType

```
public getLogType() : string
```

##### Возвращает:

```
string
```

---

<a id="method_getMessage"></a>
### getMessage

```
public getMessage() : string
```

##### Возвращает:

```
string
```

---

<a id="method_getPlugin"></a>
### getPlugin

```
public getPlugin() : string
```

##### Возвращает:

```
string
```

---

<a id="method_getTime"></a>
### getTime

```
public getTime() : \DateTimeImmutable
```

##### Возвращает:

```
\DateTimeImmutable
```

---

<a id="method_getUpdatedAt"></a>
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

<a id="method_getUuid"></a>
### getUuid

```
public getUuid() : \Ramsey\Uuid\UuidInterface
```

##### Возвращает:

```
\Ramsey\Uuid\UuidInterface
```

---

<a id="method_setFnName"></a>
### setFnName

```
public setFnName(string  fn_name) : void
```

##### Свойства:

| Название | Тип | По умолчанию |
|----------|-----|----------|
| **$fn_name** | string |  |

##### Возвращает:

```
void
```

---

<a id="method_setLogType"></a>
### setLogType

```
public setLogType(string  log_type) : void
```

##### Свойства:

| Название | Тип | По умолчанию |
|----------|-----|----------|
| **$log_type** | string |  |

##### Возвращает:

```
void
```

---

<a id="method_setMessage"></a>
### setMessage

```
public setMessage(string  message) : void
```

##### Свойства:

| Название | Тип | По умолчанию |
|----------|-----|----------|
| **$message** | string |  |

##### Возвращает:

```
void
```

---

<a id="method_setPlugin"></a>
### setPlugin

```
public setPlugin(string  plugin) : void
```

##### Свойства:

| Название | Тип | По умолчанию |
|----------|-----|----------|
| **$plugin** | string |  |

##### Возвращает:

```
void
```

---

<a id="method_setTime"></a>
### setTime

```
public setTime(\DateTimeImmutable  time) : void
```

##### Свойства:

| Название | Тип | По умолчанию |
|----------|-----|----------|
| **$time** | \DateTimeImmutable |  |

##### Возвращает:

```
void
```

---

<a id="method_setUuid"></a>
### setUuid

```
public setUuid(\Ramsey\Uuid\UuidInterface  uuid) : void
```

##### Свойства:

| Название | Тип | По умолчанию |
|----------|-----|----------|
| **$uuid** | \Ramsey\Uuid\UuidInterface |  |

##### Возвращает:

```
void
```
