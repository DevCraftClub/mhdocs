# Class: [\Default](../../packages/Default.md)\MhDB

## Summary:

Класс для работы с базой данных


---

### Properties
* private $[em](#property_em)
* private $[orm](#property_orm)
* private $[orm_config](#property_orm_config)
* private $[orm_manager](#property_orm_manager)
* private $[user_db](#property_user_db)

---

### Methods

* public [__construct()](#method___construct)
* public [count()](#method_count)
* public [create()](#method_create)
* public [delete()](#method_delete)
* public [get()](#method_get)
* public [getAll()](#method_getAll)
* public [getManager()](#method_getManager)
* public [getOrm()](#method_getOrm)
* public [paginate()](#method_paginate)
* public [query()](#method_query)
* public [repository()](#method_repository)
* public [run()](#method_run)
* public [setManager()](#method_setManager)
* public [update()](#method_update)
* private [compileSchema()](#method_compileSchema)
* private [generateManager()](#method_generateManager)
* private [generateOrm()](#method_generateOrm)
* private [generateOrmConfig()](#method_generateOrmConfig)

---

### Details

* File: [engine/inc/maharder/_includes/database/MhDB.php](../../engine/inc/maharder/_includes/database/MhDB.php)

---

## Properties
<a id="property_em"></a>
#### private $em : ?\Cycle\ORM\EntityManager
---
**Type:** <a href="../?\Cycle\ORM\EntityManager"><abbr title="?\Cycle\ORM\EntityManager">EntityManager</abbr></a>

**Details:**


<a id="property_orm"></a>
#### private $orm : ?\Cycle\ORM\ORM
---
**Type:** <a href="../?\Cycle\ORM\ORM"><abbr title="?\Cycle\ORM\ORM">ORM</abbr></a>

**Details:**


<a id="property_orm_config"></a>
#### private $orm_config : ?\Cycle\Database\Config\DatabaseConfig
---
**Type:** <a href="../?\Cycle\Database\Config\DatabaseConfig"><abbr title="?\Cycle\Database\Config\DatabaseConfig">DatabaseConfig</abbr></a>

**Details:**


<a id="property_orm_manager"></a>
#### private $orm_manager : ?\Cycle\Database\DatabaseManager
---
**Type:** <a href="../?\Cycle\Database\DatabaseManager"><abbr title="?\Cycle\Database\DatabaseManager">DatabaseManager</abbr></a>

**Details:**


<a id="property_user_db"></a>
#### private $user_db : bool
---
**Type:** <a href="../bool"><abbr title="bool">bool</abbr></a>

**Details:**



---

## Methods

<a id="method___construct"></a>
### __construct

```
public __construct(bool  user_db = false) : mixed
```

##### Parameters:

| Name | Type | Default |
|------|------|---------|
| **$user_db** | bool | false |

##### Returns:

```
mixed
```

---

<a id="method_count"></a>
### count

```
public count(object|string  entity) : int
```

##### Summary

Подсчитывает количество записей для указанной сущности.

##### Description

Эта функция использует репозиторий, связанный с сущностью, для выполнения запроса
на подсчет количества записей.

##### Parameters:

| Name | Type | Default |
|------|------|---------|
| **$entity** | object|string |  |

##### Returns:

```
int
```
Количество записей в репозитории, связанных с данной сущностью.

---

<a id="method_create"></a>
### create

```
public create(object  entity) : \ORM\Transaction\StateInterface
```

##### Summary

Обновляет предоставленную сущность в базе данных.

##### Description

Эта функция выполняет процесс обновления сущности посредством вызова метода `run`,
который предполагает выполнение различных ORM-операций, таких как `persist`.

##### Parameters:

| Name | Type | Default |
|------|------|---------|
| **$entity** | object |  |

##### Throws:

| Type | Description |
|------|-------------|
| \ORM\Exception\EntityNotManagedException | Если сущность не управляется текущим менеджером сущностей. |
| \ORM\Exception\TransactionException|\Throwable | Если транзакция не может быть завершена. |

##### Returns:

```
\ORM\Transaction\StateInterface
```
Возвращает состояние ORM-транзакции после обновления сущности.

---

<a id="method_delete"></a>
### delete

```
public delete(object|string  entity, int  pk) : \ORM\Transaction\StateInterface
```

##### Summary

Удаляет сущность на основе переданного объекта и первичного ключа.

##### Description

Эта функция выполняет следующие шаги:
1. Извлекает объект сущности из базы данных с помощью метода `get`.
2. Передает этот объект менеджеру сущностей для удаления.
3. Выполняет транзакцию удаления.

##### Parameters:

| Name | Type | Default |
|------|------|---------|
| **$entity** | object|string |  |
| **$pk** | int |  |

##### Throws:

| Type | Description |
|------|-------------|
| \Throwable | При любой ошибке в ORM (например, сбой во время удаления). |

##### Returns:

```
\ORM\Transaction\StateInterface
```
Возвращает состояние завершенной транзакции удаления.

---

<a id="method_get"></a>
### get

```
public get(object|string  entity, int  pk) : object|null
```

##### Summary

Получает сущность из хранилища данных по её первичному ключу.

##### Parameters:

| Name | Type | Default |
|------|------|---------|
| **$entity** | object|string |  |
| **$pk** | int |  |

##### Returns:

```
object|null
```
Возвращает найденный объект сущности или null, если объект с заданным первичным ключом
отсутствует.

---

<a id="method_getAll"></a>
### getAll

```
public getAll(object|string  entity) : array
```

##### Summary

Получает все записи для указанной сущности из хранилища.

##### Description

Этот метод использует репозиторий, ассоциированный с указанной сущностью,
для получения всех записей из базы данных.

##### Parameters:

| Name | Type | Default |
|------|------|---------|
| **$entity** | object|string |  |

##### Returns:

```
array
```
Массив объектов сущности, извлеченных из базы данных.
Если данных в хранилище нет, возвращается пустой массив.

---

<a id="method_getManager"></a>
### getManager

```
public getManager() : \Cycle\ORM\EntityManager
```

##### Returns:

```
\Cycle\ORM\EntityManager
```

---

<a id="method_getOrm"></a>
### getOrm

```
public getOrm() : \ORM\ORM
```

##### Summary

Возвращает экземпляр ORM, создавая его при необходимости.

##### Description

Данный метод вызывает `generateOrm`, который инициализирует ORM,
используя настраиваемые зависимости, такие как Schema, Factory, Container и CommandGenerator.
Повторные вызовы возвращают уже созданный экземпляр ORM.

##### Throws:

| Type | Description |
|------|-------------|
| \RuntimeException | Если при генерации ORM возникли ошибки. |

##### Returns:

```
\ORM\ORM
```
Экземпляр ORM.

---

<a id="method_paginate"></a>
### paginate

```
public paginate(object|string  entity, string  orderby, string  sortby = &#039;DESC&#039;, int  limit = 10, int  page = 1) : \ORM\Select
```

##### Summary

Пагинирует данные из базы данных для указанной сущности.

##### Description

Этот метод извлекает данные для заданной сущности, применяет сортировку и пагинацию
на основе переданных параметров и возвращает настроенный объект `ORM\Select`.

##### Parameters:

| Name | Type | Default |
|------|------|---------|
| **$entity** | object|string |  |
| **$orderby** | string |  |
| **$sortby** | string | &#039;DESC&#039; |
| **$limit** | int | 10 |
| **$page** | int | 1 |

##### Returns:

```
\ORM\Select
```
Настроенный объект Select, содержащий отсортированные и пагинированные данные.

---

<a id="method_query"></a>
### query

```
public query(string  sql, array  params = []) : \StatementInterface
```

##### Summary

Выполняет SQL-запрос с указанными параметрами и возвращает результат.

##### Description

Метод использует объект DatabaseManager для получения соединения с базой данных
и дальнейшего выполнения SQL-запроса. Позволяет передавать параметры для безопасного
выполнения подготовленных запросов.

##### Parameters:

| Name | Type | Default |
|------|------|---------|
| **$sql** | string |  |
| **$params** | array | [] |

##### Throws:

| Type | Description |
|------|-------------|
| \InvalidArgumentException | Может бросить исключение при передаче некорректного SQL-запроса. |
| \RuntimeException | Может бросить исключение, если соединение с базой данных невозможно. |

##### Returns:

```
\StatementInterface
```
Результирующий объект, представляющий результат выполнения запроса.

---

<a id="method_repository"></a>
### repository

```
public repository(object|string  entity) : \ORM\RepositoryInterface
```

##### Summary

Возвращает репозиторий для указанной сущности или класса сущности.

##### Description

Эта функция принимает объект сущности или строку, представляющую имя класса сущности,
определяет их имя класса и возвращает соответствующий репозиторий, используя ORM.

##### Parameters:

| Name | Type | Default |
|------|------|---------|
| **$entity** | object|string |  |

##### Throws:

| Type | Description |
|------|-------------|
| \ORM\Exception\RepositoryNotFoundException | Если репозиторий для указанной сущности не найден. |

##### Returns:

```
\ORM\RepositoryInterface
```
Интерфейс репозитория для работы с указанной сущностью.

---

<a id="method_run"></a>
### run

```
public run(object  entity) : \ORM\Transaction\StateInterface
```

##### Summary

Выполняет сохранение сущности и возвращает состояние транзакции.

##### Description

Этот метод обрабатывает сохранение переданного объекта сущности с использованием
связанного `EntityManager`. Завершает операцию методом `run()`, который выполняет
транзакцию и возвращает её результирующее состояние.

##### Parameters:

| Name | Type | Default |
|------|------|---------|
| **$entity** | object |  |

##### Throws:

| Type | Description |
|------|-------------|
| \RuntimeException|\Throwable | Исключение выбрасывается, если `EntityManager` не был
корректно инициализирован, что приводит к ошибке
сохранения. |

##### Returns:

```
\ORM\Transaction\StateInterface
```
Результирующее состояние транзакции после
сохранения сущности.

---

<a id="method_setManager"></a>
### setManager

```
public setManager() : void
```

##### Summary

Устанавливает экземпляр EntityManager на основе текущего ORM.

##### Description

Метод инициализирует объект EntityManager (менеджера для управления сущностями)
на основе существующего объекта ORM (Object-Relational Mapping).
Если ORM не был предварительно сконфигурирован, это может привести к выбросу ошибок
в процессе создания EntityManager.

##### Throws:

| Type | Description |
|------|-------------|
| \RuntimeException | Если объект ORM не был предварительно создан. |

##### Returns:

```
void
```

---

<a id="method_update"></a>
### update

```
public update(object  entity) : \ORM\Transaction\StateInterface
```

##### Summary

Обновляет предоставленную сущность в базе данных.

##### Description

Эта функция выполняет процесс обновления сущности посредством вызова метода `run`,
который предполагает выполнение различных ORM-операций, таких, как `persist`.

##### Parameters:

| Name | Type | Default |
|------|------|---------|
| **$entity** | object |  |

##### Throws:

| Type | Description |
|------|-------------|
| \ORM\Exception\EntityNotManagedException | Если сущность не управляется текущим менеджером сущностей. |
| \ORM\Exception\TransactionException|\Throwable | Если транзакция не может быть завершена. |

##### Returns:

```
\ORM\Transaction\StateInterface
```
Возвращает состояние ORM-транзакции после обновления сущности.

---

<a id="method_compileSchema"></a>
### compileSchema

```
private compileSchema(\Registry  registry) : array
```

##### Summary

Генерирует и компилирует схему на основе переданного реестра и генераторов схем.

##### Description

Этот метод обрабатывает пути моделей с использованием глобального объекта `$MIGRATOR`,
находит классы и использует их для генерации комплексной схемы базы данных.

**Примечание**: Метод использует глобальную переменную `$MIGRATOR`, поэтому убедитесь,
что она правильно инициализирована до вызова метода.

##### Parameters:

| Name | Type | Default |
|------|------|---------|
| **$registry** | \Registry |  |

##### Throws:

| Type | Description |
|------|-------------|
| \RuntimeException | Если невозможно найти файлы моделей или извлечь классы. |
| \LogicException | Если при компиляции схемы возникли логические ошибки. |

##### Returns:

```
array
```
Возвращает скомпилированную схему в виде массива.

---

<a id="method_generateManager"></a>
### generateManager

```
private generateManager() : \DatabaseManager
```

##### Summary

Создает и возвращает экземпляр класса DatabaseManager.

##### Description

Если объект `orm_manager` еще не создан, метод инициирует новый объект
`DatabaseManager` на основе конфигурации ORM, полученной из метода `generateOrmConfig`.

##### See Also:

 * [\generateOrmConfig()](../\generateOrmConfig())

##### Throws:

| Type | Description |
|------|-------------|
| \RuntimeException | Генерируется, если не удается подключить необходимый файл конфигурации базы данных. |
| \ConfigException | Генерируется, если конфигурация базы данных содержит ошибки. |

##### Returns:

```
\DatabaseManager
```
Экземпляр менеджера базы данных, конфигурированного с помощью ORM.

---

<a id="method_generateOrm"></a>
### generateOrm

```
private generateOrm() : \ORM\ORM
```

##### Summary

Создает и возвращает экземпляр ORM (Object-Relational Mapper), используя
предварительно скомпилированную схему, фабрику ORM, менеджер базы данных,
а также генератор команд с поддержкой событий. Если ORM уже инициализирован,
то возвращает ранее созданный объект.

##### Description

Генерация ORM основывается на схеме, созданной методом {@see},
которой, в свою очередь, необходим зарегистрированный реестр сущностей.
Управление базой данных осуществляется через метод {@see}.

##### Throws:

| Type | Description |
|------|-------------|
| \RuntimeException | Если генерация схемы или конфигурации базы данных
завершилась с ошибкой. |

##### Returns:

```
\ORM\ORM
```
Объект ORM (Object-Relational Mapper), предназначенный
для взаимодействия с базой данных.

---

<a id="method_generateOrmConfig"></a>
### generateOrmConfig

```
private generateOrmConfig() : \Config\DatabaseConfig
```

##### Summary

Генерирует и возвращает объект конфигурации базы данных ORM, если он ещё не создан.

##### Description

Функция проверяет, был ли ранее инициализирован объект конфигурации ORM.
Если объект отсутствует, производится его создание на основании глобальных настроек.
Подключается файл конфигурации базы данных и выполняется подготовка данных,
таких как разбиение хоста и порта, а также выборка префикса таблиц в зависимости от типа базы данных.

##### Returns:

```
\Config\DatabaseConfig
```
Объект конфигурации базы данных ORM.
