import{r as e}from"./rolldown-runtime-QTnfLwEv.js";import{t}from"./jsx-runtime-By8HlURe.js";var n=e(t()),r={title:`Класс: MhDB`,description:`Документация по плагину класс: mhdb для DLE.`},i=new Date(1788011088e3),a=`

## Краткое содержание: [#краткое-содержание]

Класс для работы с базой данных

***

### Свойства [#свойства]

* private $[em](#property_em)
* private $[orm](#property_orm)
* private $[orm\\_config](#property_orm_config)
* private $[orm\\_manager](#property_orm_manager)
* private $[user\\_db](#property_user_db)

***

### Методы [#методы]

* public [\\_\\_construct()](#method___construct)
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

***

### Подробности [#подробности]

* Путь: engine/inc/maharder/\\_includes/database/MhDB.php

***

## Свойства [#свойства-1]

<span id="property_em" />

#### private $em : ?\\Cycle\\ORM\\EntityManager [#private-em--cycleormentitymanager]

***

**Краткое содержание**

Менеджер сущностей ORM, обеспечивающий операции CRUD и управление состоянием сущностей.

***Описание***

Инициализируется в методе \`setManager\`.

\\*\\*Тип:
\\*\\* <a href="https://cycle-orm.dev/docs/advanced-entity-manager/current" target="_blank"><abbr title="?\\Cycle\\ORM\\EntityManager">
EntityManager</abbr></a>

<span id="property_orm" />

#### private $orm : ?\\Cycle\\ORM\\ORM [#private-orm--cycleormorm]

***

**Краткое содержание**

ORM-класс для управления объектами и предоставления операций высокого уровня.

***Описание***

Используется для создания экземпляра ORM, управления сущностями, получением менеджера базы данных и выполнения
запросов.

\\*\\*Тип:
\\*\\* <a href="https://cycle-orm.dev/docs/intro-quick-start/current/en#orm" target="_blank"><abbr title="?\\Cycle\\ORM\\ORM">
ORM</abbr></a>

<span id="property_orm_config" />

#### private $orm\\_config : ?\\Cycle\\Database\\Config\\DatabaseConfig [#private-orm_config--cycledatabaseconfigdatabaseconfig]

***

**Краткое содержание**

Конфигурация базы данных для настройки параметров подключения, драйвера и других настроек.

***Описание***

Генерируется с помощью метода \`generateOrmConfig\`.

\\*\\*Тип:
\\*\\* <a href="https://cycle-orm.dev/docs/database-isolation/current/en#configuration" target="_blank"><abbr title="?\\Cycle\\Database\\Config\\DatabaseConfig">
DatabaseConfig</abbr></a>

<span id="property_orm_manager" />

#### private $orm\\_manager : ?\\Cycle\\Database\\DatabaseManager [#private-orm_manager--cycledatabasedatabasemanager]

***

**Краткое содержание**

Менеджер базы данных, предоставляющий функционал работы с подключениями и конфигурациями БД.

***Описание***

Генерируется с помощью метода \`generateManager\`.

\\*\\*Тип:
\\*\\* <a href="https://cycle-orm.dev/docs/database-access/current/en" target="_blank"><abbr title="?\\Cycle\\Database\\DatabaseManager">
DatabaseManager</abbr></a>

**Подробности:**

<span id="property_user_db" />

#### private $user\\_db : bool [#private-user_db--bool]

***

**Краткое содержание**

Флаг, определяющий подключение к базе данных пользователя (true) или основной базы данных (false).

***Описание***

Используется при создании конфигурации базы данных.

**Тип:** <abbr title="bool">Логические значения</abbr>

***

## Методы [#методы-1]

<span id="method___construct" />

### \\_\\_construct [#__construct]

\`\`\`
public __construct(bool  user_db = false) : mixed
\`\`\`

##### Краткое содержание [#краткое-содержание-1]

Конструктор класса MhDB.

##### Описание [#описание]

Настраивает базу данных, инициализирует ORM, а также управляет объектом EntityManager.

##### Свойства: [#свойства-2]

| Название      | Тип  | По умолчанию |
| ------------- | ---- | ------------ |
| **$user\\_db** | bool | false        |

##### Ошибки: [#ошибки]

| Тип                                            | Описание                                                                    |
| ---------------------------------------------- | --------------------------------------------------------------------------- |
| \\Cycle\\ORM\\Exception\\SchemaException           | Если при генерации ORM произошла ошибка в схеме базы данных.                |
| \\Cycle\\Migrations\\Exception\\MigrationException | Если миграции не могут быть выполнены.                                      |
| \\RuntimeException                              | Если не удается нормально настроить конфигурацию подключения к базе данных. |

##### Возвращает: [#возвращает]

\`\`\`
mixed
\`\`\`

***

<span id="method_count" />

### count [#count]

\`\`\`
public count(object|string  entity) : int
\`\`\`

##### Краткое содержание [#краткое-содержание-2]

Подсчитывает количество записей для указанной сущности.

##### Описание [#описание-1]

Эта функция использует репозиторий, связанный с сущностью, для выполнения запроса
на подсчет количества записей.

##### Свойства: [#свойства-3]

| Название    | Тип            | По умолчанию |
| ----------- | -------------- | ------------ |
| **$entity** | object\\|string |              |

##### Возвращает: [#возвращает-1]

\`\`\`
int
\`\`\`

Количество записей в репозитории, связанных с данной сущностью.

***

<span id="method_create" />

### create [#create]

\`\`\`
public create(object  entity) : \\ORM\\Transaction\\StateInterface
\`\`\`

##### Краткое содержание [#краткое-содержание-3]

Обновляет предоставленную сущность в базе данных.

##### Описание [#описание-2]

Эта функция выполняет процесс обновления сущности посредством вызова метода \`run\`,
который предполагает выполнение различных ORM-операций, таких как \`persist\`.

##### Свойства: [#свойства-4]

| Название    | Тип    | По умолчанию |
| ----------- | ------ | ------------ |
| **$entity** | object |              |

##### Ошибки: [#ошибки-1]

| Тип                                             | Описание                                                   |
| ----------------------------------------------- | ---------------------------------------------------------- |
| \\ORM\\Exception\\EntityNotManagedException        | Если сущность не управляется текущим менеджером сущностей. |
| \\ORM\\Exception\\TransactionException\\|\\Throwable | Если транзакция не может быть завершена.                   |

##### Возвращает: [#возвращает-2]

\`\`\`
\\ORM\\Transaction\\StateInterface
\`\`\`

Возвращает состояние ORM-транзакции после обновления сущности.

***

<span id="method_delete" />

### delete [#delete]

\`\`\`
public delete(object|string  entity, int  pk) : \\ORM\\Transaction\\StateInterface
\`\`\`

##### Краткое содержание [#краткое-содержание-4]

Удаляет сущность на основе переданного объекта и первичного ключа.

##### Описание [#описание-3]

Эта функция выполняет следующие шаги:

1. Извлекает объект сущности из базы данных с помощью метода \`get\`.
2. Передает этот объект менеджеру сущностей для удаления.
3. Выполняет транзакцию удаления.

##### Свойства: [#свойства-5]

| Название    | Тип            | По умолчанию |
| ----------- | -------------- | ------------ |
| **$entity** | object\\|string |              |
| **$pk**     | int            |              |

##### Ошибки: [#ошибки-2]

| Тип        | Описание                                                   |
| ---------- | ---------------------------------------------------------- |
| \\Throwable | При любой ошибке в ORM (например, сбой во время удаления). |

##### Возвращает: [#возвращает-3]

\`\`\`
\\ORM\\Transaction\\StateInterface
\`\`\`

Возвращает состояние завершенной транзакции удаления.

***

<span id="method_get" />

### get [#get]

\`\`\`
public get(object|string  entity, int  pk) : object|null
\`\`\`

##### Краткое содержание [#краткое-содержание-5]

Получает сущность из хранилища данных по её первичному ключу.

##### Свойства: [#свойства-6]

| Название    | Тип            | По умолчанию |
| ----------- | -------------- | ------------ |
| **$entity** | object\\|string |              |
| **$pk**     | int            |              |

##### Возвращает: [#возвращает-4]

\`\`\`
object|null
\`\`\`

Возвращает найденный объект сущности или null, если объект с заданным первичным ключом
отсутствует.

***

<span id="method_getAll" />

### getAll [#getall]

\`\`\`
public getAll(object|string  entity) : array
\`\`\`

##### Краткое содержание [#краткое-содержание-6]

Получает все записи для указанной сущности из хранилища.

##### Описание [#описание-4]

Этот метод использует репозиторий, ассоциированный с указанной сущностью,
для получения всех записей из базы данных.

##### Свойства: [#свойства-7]

| Название    | Тип            | По умолчанию |
| ----------- | -------------- | ------------ |
| **$entity** | object\\|string |              |

##### Возвращает: [#возвращает-5]

\`\`\`
array
\`\`\`

Массив объектов сущности, извлеченных из базы данных.
Если данных в хранилище нет, возвращается пустой массив.

***

<span id="method_getManager" />

### getManager [#getmanager]

\`\`\`
public getManager() : \\Cycle\\ORM\\EntityManager
\`\`\`

##### Возвращает: [#возвращает-6]

\`\`\`
\\Cycle\\ORM\\EntityManager
\`\`\`

***

<span id="method_getOrm" />

### getOrm [#getorm]

\`\`\`
public getOrm() : \\ORM\\ORM
\`\`\`

##### Краткое содержание [#краткое-содержание-7]

Возвращает экземпляр ORM, создавая его при необходимости.

##### Описание [#описание-5]

Данный метод вызывает \`generateOrm\`, который инициализирует ORM,
используя настраиваемые зависимости, такие как Schema, Factory, Container и CommandGenerator.
Повторные вызовы возвращают уже созданный экземпляр ORM.

##### Ошибки: [#ошибки-3]

| Тип               | Описание                                |
| ----------------- | --------------------------------------- |
| \\RuntimeException | Если при генерации ORM возникли ошибки. |

##### Возвращает: [#возвращает-7]

\`\`\`
\\ORM\\ORM
\`\`\`

Экземпляр ORM.

***

<span id="method_paginate" />

### paginate [#paginate]

\`\`\`
public paginate(object|string  entity, string  orderby, string  sortby = &#039;DESC&#039;, int  limit = 10, int  page = 1) : \\ORM\\Select
\`\`\`

##### Краткое содержание [#краткое-содержание-8]

Пагинирует данные из базы данных для указанной сущности.

##### Описание [#описание-6]

Этот метод извлекает данные для заданной сущности, применяет сортировку и пагинацию
на основе переданных параметров и возвращает настроенный объект \`ORM\\Select\`.

##### Свойства: [#свойства-8]

| Название     | Тип            | По умолчанию |
| ------------ | -------------- | ------------ |
| **$entity**  | object\\|string |              |
| **$orderby** | string         |              |
| **$sortby**  | string         | 'DESC'       |
| **$limit**   | int            | 10           |
| **$page**    | int            | 1            |

##### Возвращает: [#возвращает-8]

\`\`\`
\\ORM\\Select
\`\`\`

Настроенный объект Select, содержащий отсортированные и пагинированные данные.

***

<span id="method_query" />

### query [#query]

\`\`\`
public query(string  sql, array  params = []) : \\StatementInterface
\`\`\`

##### Краткое содержание [#краткое-содержание-9]

Выполняет SQL-запрос с указанными параметрами и возвращает результат.

##### Описание [#описание-7]

Метод использует объект DatabaseManager для получения соединения с базой данных
и дальнейшего выполнения SQL-запроса. Позволяет передавать параметры для безопасного
выполнения подготовленных запросов.

##### Свойства: [#свойства-9]

| Название    | Тип    | По умолчанию |
| ----------- | ------ | ------------ |
| **$sql**    | string |              |
| **$params** | array  | \\[]          |

##### Ошибки: [#ошибки-4]

| Тип                       | Описание                                                             |
| ------------------------- | -------------------------------------------------------------------- |
| \\InvalidArgumentException | Может бросить исключение при передаче некорректного SQL-запроса.     |
| \\RuntimeException         | Может бросить исключение, если соединение с базой данных невозможно. |

##### Возвращает: [#возвращает-9]

\`\`\`
\\StatementInterface
\`\`\`

Результирующий объект, представляющий результат выполнения запроса.

***

<span id="method_repository" />

### repository [#repository]

\`\`\`
public repository(object|string  entity) : \\ORM\\RepositoryInterface
\`\`\`

##### Краткое содержание [#краткое-содержание-10]

Возвращает репозиторий для указанной сущности или класса сущности.

##### Описание [#описание-8]

Эта функция принимает объект сущности или строку, представляющую имя класса сущности,
определяет их имя класса и возвращает соответствующий репозиторий, используя ORM.

##### Свойства: [#свойства-10]

| Название    | Тип    | По умолчанию |   |
| ----------- | ------ | ------------ | - |
| **$entity** | object | string       |   |

##### Ошибки: [#ошибки-5]

| Тип                                        | Описание                                           |
| ------------------------------------------ | -------------------------------------------------- |
| \\ORM\\Exception\\RepositoryNotFoundException | Если репозиторий для указанной сущности не найден. |

##### Возвращает: [#возвращает-10]

\`\`\`
\\ORM\\RepositoryInterface
\`\`\`

Интерфейс репозитория для работы с указанной сущностью.

***

<span id="method_run" />

### run [#run]

\`\`\`
public run(object  entity) : \\ORM\\Transaction\\StateInterface
\`\`\`

##### Краткое содержание [#краткое-содержание-11]

Выполняет сохранение сущности и возвращает состояние транзакции.

##### Описание [#описание-9]

Этот метод обрабатывает сохранение переданного объекта сущности с использованием
связанного \`EntityManager\`. Завершает операцию методом \`run()\`, который выполняет
транзакцию и возвращает её результирующее состояние.

##### Свойства: [#свойства-11]

| Название    | Тип    | По умолчанию |
| ----------- | ------ | ------------ |
| **$entity** | object |              |

##### Ошибки: [#ошибки-6]

| Тип                           | Описание                                                                                                           |
| ----------------------------- | ------------------------------------------------------------------------------------------------------------------ |
| \\RuntimeException\\|\\Throwable | Исключение выбрасывается, если \`EntityManager\` не был корректно инициализирован, что приводит к ошибке сохранения. |

##### Возвращает: [#возвращает-11]

\`\`\`
\\ORM\\Transaction\\StateInterface
\`\`\`

Результирующее состояние транзакции после
сохранения сущности.

***

<span id="method_setManager" />

### setManager [#setmanager]

\`\`\`
public setManager() : void
\`\`\`

##### Краткое содержание [#краткое-содержание-12]

Устанавливает экземпляр EntityManager на основе текущего ORM.

##### Описание [#описание-10]

Метод инициализирует объект EntityManager (менеджера для управления сущностями)
на основе существующего объекта ORM (Object-Relational Mapping).
Если ORM не был предварительно сконфигурирован, это может привести к выбросу ошибок
в процессе создания EntityManager.

##### Ошибки: [#ошибки-7]

| Тип               | Описание                                      |
| ----------------- | --------------------------------------------- |
| \\RuntimeException | Если объект ORM не был предварительно создан. |

##### Возвращает: [#возвращает-12]

\`\`\`
void
\`\`\`

***

<span id="method_update" />

### update [#update]

\`\`\`
public update(object  entity) : \\ORM\\Transaction\\StateInterface
\`\`\`

##### Краткое содержание [#краткое-содержание-13]

Обновляет предоставленную сущность в базе данных.

##### Описание [#описание-11]

Эта функция выполняет процесс обновления сущности посредством вызова метода \`run\`,
который предполагает выполнение различных ORM-операций, таких, как \`persist\`.

##### Свойства: [#свойства-12]

| Название    | Тип    | По умолчанию |
| ----------- | ------ | ------------ |
| **$entity** | object |              |

##### Ошибки: [#ошибки-8]

| Тип                                             | Описание                                                   |
| ----------------------------------------------- | ---------------------------------------------------------- |
| \\ORM\\Exception\\EntityNotManagedException        | Если сущность не управляется текущим менеджером сущностей. |
| \\ORM\\Exception\\TransactionException\\|\\Throwable | Если транзакция не может быть завершена.                   |

##### Возвращает: [#возвращает-13]

\`\`\`
\\ORM\\Transaction\\StateInterface
\`\`\`

Возвращает состояние ORM-транзакции после обновления сущности.

***

<span id="method_compileSchema" />

### compileSchema [#compileschema]

\`\`\`
private compileSchema(\\Registry  registry) : array
\`\`\`

##### Краткое содержание [#краткое-содержание-14]

Генерирует и компилирует схему на основе переданного реестра и генераторов схем.

##### Описание [#описание-12]

Этот метод обрабатывает пути моделей с использованием глобального объекта \`$MIGRATOR\`,
находит классы и использует их для генерации комплексной схемы базы данных.
**Примечание**: Метод использует глобальную переменную \`$MIGRATOR\`, поэтому убедитесь,
что она правильно инициализирована до вызова метода.

##### Свойства: [#свойства-13]

| Название      | Тип       | По умолчанию |
| ------------- | --------- | ------------ |
| **$registry** | \\Registry |              |

##### Ошибки: [#ошибки-9]

| Тип               | Описание                                                |
| ----------------- | ------------------------------------------------------- |
| \\LogicException   | Если при компиляции схемы возникли логические ошибки.   |
| \\RuntimeException | Если невозможно найти файлы моделей или извлечь классы. |

##### Возвращает: [#возвращает-14]

\`\`\`
array
\`\`\`

Возвращает скомпилированную схему в виде массива.

***

<span id="method_generateManager" />

### generateManager [#generatemanager]

\`\`\`
private generateManager() : \\DatabaseManager
\`\`\`

##### Краткое содержание [#краткое-содержание-15]

Создает и возвращает экземпляр класса DatabaseManager.

##### Описание [#описание-13]

Если объект \`orm_manager\` еще не создан, метод инициирует новый объект
\`DatabaseManager\` на основе конфигурации ORM, полученной из метода \`generateOrmConfig\`.

##### Смотри так-же: [#смотри-так-же]

* [\\MhDB::generateOrmConfig()](#method_generateOrmConfig)

##### Ошибки: [#ошибки-10]

| Тип               | Описание                                                                            |
| ----------------- | ----------------------------------------------------------------------------------- |
| \\RuntimeException | Генерируется, если не удается подключить необходимый файл конфигурации базы данных. |
| \\ConfigException  | Генерируется, если конфигурация базы данных содержит ошибки.                        |

##### Возвращает: [#возвращает-15]

\`\`\`
\\DatabaseManager
\`\`\`

Экземпляр менеджера базы данных, конфигурированного с помощью ORM.

***

<span id="method_generateOrm" />

### generateOrm [#generateorm]

\`\`\`
private generateOrm() : \\ORM\\ORM
\`\`\`

##### Краткое содержание [#краткое-содержание-16]

Создает и возвращает экземпляр ORM (Object-Relational Mapper), используя
предварительно скомпилированную схему, фабрику ORM, менеджер базы данных,
а также генератор команд с поддержкой событий. Если ORM уже инициализирован,
то возвращает ранее созданный объект.

##### Описание [#описание-14]

Генерация ORM основывается на схеме, созданной методом \\{@see},
которой, в свою очередь, необходим зарегистрированный реестр сущностей.
Управление базой данных осуществляется через метод \\{@see}.

##### Ошибки: [#ошибки-11]

| Тип               | Описание                                                                 |
| ----------------- | ------------------------------------------------------------------------ |
| \\RuntimeException | Если генерация схемы или конфигурации базы данных завершилась с ошибкой. |

##### Возвращает: [#возвращает-16]

\`\`\`
\\ORM\\ORM
\`\`\`

Объект ORM (Object-Relational Mapper), предназначенный
для взаимодействия с базой данных.

***

<span id="method_generateOrmConfig" />

### generateOrmConfig [#generateormconfig]

\`\`\`
private generateOrmConfig() : \\Config\\DatabaseConfig
\`\`\`

##### Краткое содержание [#краткое-содержание-17]

Генерирует и возвращает объект конфигурации базы данных ORM, если он ещё не создан.

##### Описание [#описание-15]

Функция проверяет, был ли ранее инициализирован объект конфигурации ORM.
Если объект отсутствует, производится его создание на основании глобальных настроек.
Подключается файл конфигурации базы данных и выполняется подготовка данных,
таких как разбиение хоста и порта, а также выборка префикса таблиц в зависимости от типа базы данных.

##### Возвращает: [#возвращает-17]

\`\`\`
\\Config\\DatabaseConfig
\`\`\`

Объект конфигурации базы данных ORM.
`,o={contents:[{heading:`краткое-содержание`,content:`Класс для работы с базой данных`},{heading:`свойства`,content:`private $em`},{heading:`свойства`,content:`private $orm`},{heading:`свойства`,content:`private $orm\\_config`},{heading:`свойства`,content:`private $orm\\_manager`},{heading:`свойства`,content:`private $user\\_db`},{heading:`методы`,content:`public \\_\\_construct()`},{heading:`методы`,content:`public count()`},{heading:`методы`,content:`public create()`},{heading:`методы`,content:`public delete()`},{heading:`методы`,content:`public get()`},{heading:`методы`,content:`public getAll()`},{heading:`методы`,content:`public getManager()`},{heading:`методы`,content:`public getOrm()`},{heading:`методы`,content:`public paginate()`},{heading:`методы`,content:`public query()`},{heading:`методы`,content:`public repository()`},{heading:`методы`,content:`public run()`},{heading:`методы`,content:`public setManager()`},{heading:`методы`,content:`public update()`},{heading:`методы`,content:`private compileSchema()`},{heading:`методы`,content:`private generateManager()`},{heading:`методы`,content:`private generateOrm()`},{heading:`методы`,content:`private generateOrmConfig()`},{heading:`подробности`,content:`Путь: engine/inc/maharder/\\_includes/database/MhDB.php`},{heading:`private-em--cycleormentitymanager`,content:`**Краткое содержание**`},{heading:`private-em--cycleormentitymanager`,content:`Менеджер сущностей ORM, обеспечивающий операции CRUD и управление состоянием сущностей.`},{heading:`private-em--cycleormentitymanager`,content:`***Описание***`},{heading:`private-em--cycleormentitymanager`,content:"Инициализируется в методе `setManager`."},{heading:`private-em--cycleormentitymanager`,content:`\\*\\*Тип:
\\*\\*&#x20;
EntityManager`},{heading:`private-orm--cycleormorm`,content:`**Краткое содержание**`},{heading:`private-orm--cycleormorm`,content:`ORM-класс для управления объектами и предоставления операций высокого уровня.`},{heading:`private-orm--cycleormorm`,content:`***Описание***`},{heading:`private-orm--cycleormorm`,content:`Используется для создания экземпляра ORM, управления сущностями, получением менеджера базы данных и выполнения
запросов.`},{heading:`private-orm--cycleormorm`,content:`\\*\\*Тип:
\\*\\*&#x20;
ORM`},{heading:`private-orm_config--cycledatabaseconfigdatabaseconfig`,content:`**Краткое содержание**`},{heading:`private-orm_config--cycledatabaseconfigdatabaseconfig`,content:`Конфигурация базы данных для настройки параметров подключения, драйвера и других настроек.`},{heading:`private-orm_config--cycledatabaseconfigdatabaseconfig`,content:`***Описание***`},{heading:`private-orm_config--cycledatabaseconfigdatabaseconfig`,content:"Генерируется с помощью метода `generateOrmConfig`."},{heading:`private-orm_config--cycledatabaseconfigdatabaseconfig`,content:`\\*\\*Тип:
\\*\\*&#x20;
DatabaseConfig`},{heading:`private-orm_manager--cycledatabasedatabasemanager`,content:`**Краткое содержание**`},{heading:`private-orm_manager--cycledatabasedatabasemanager`,content:`Менеджер базы данных, предоставляющий функционал работы с подключениями и конфигурациями БД.`},{heading:`private-orm_manager--cycledatabasedatabasemanager`,content:`***Описание***`},{heading:`private-orm_manager--cycledatabasedatabasemanager`,content:"Генерируется с помощью метода `generateManager`."},{heading:`private-orm_manager--cycledatabasedatabasemanager`,content:`\\*\\*Тип:
\\*\\*&#x20;
DatabaseManager`},{heading:`private-orm_manager--cycledatabasedatabasemanager`,content:`**Подробности:**`},{heading:`private-user_db--bool`,content:`**Краткое содержание**`},{heading:`private-user_db--bool`,content:`Флаг, определяющий подключение к базе данных пользователя (true) или основной базы данных (false).`},{heading:`private-user_db--bool`,content:`***Описание***`},{heading:`private-user_db--bool`,content:`Используется при создании конфигурации базы данных.`},{heading:`private-user_db--bool`,content:`**Тип:** Логические значения`},{heading:`краткое-содержание-1`,content:`Конструктор класса MhDB.`},{heading:`описание`,content:`Настраивает базу данных, инициализирует ORM, а также управляет объектом EntityManager.`},{heading:`свойства-2`,content:`Название`},{heading:`свойства-2`,content:`Тип`},{heading:`свойства-2`,content:`По умолчанию`},{heading:`свойства-2`,content:`**$user\\_db**`},{heading:`свойства-2`,content:`bool`},{heading:`свойства-2`,content:`false`},{heading:`ошибки`,content:`Тип`},{heading:`ошибки`,content:`Описание`},{heading:`ошибки`,content:`\\Cycle\\ORM\\Exception\\SchemaException`},{heading:`ошибки`,content:`Если при генерации ORM произошла ошибка в схеме базы данных.`},{heading:`ошибки`,content:`\\Cycle\\Migrations\\Exception\\MigrationException`},{heading:`ошибки`,content:`Если миграции не могут быть выполнены.`},{heading:`ошибки`,content:`\\RuntimeException`},{heading:`ошибки`,content:`Если не удается нормально настроить конфигурацию подключения к базе данных.`},{heading:`краткое-содержание-2`,content:`Подсчитывает количество записей для указанной сущности.`},{heading:`описание-1`,content:`Эта функция использует репозиторий, связанный с сущностью, для выполнения запроса
на подсчет количества записей.`},{heading:`свойства-3`,content:`Название`},{heading:`свойства-3`,content:`Тип`},{heading:`свойства-3`,content:`По умолчанию`},{heading:`свойства-3`,content:`**$entity**`},{heading:`свойства-3`,content:`object\\|string`},{heading:`возвращает-1`,content:`Количество записей в репозитории, связанных с данной сущностью.`},{heading:`краткое-содержание-3`,content:`Обновляет предоставленную сущность в базе данных.`},{heading:`описание-2`,content:"Эта функция выполняет процесс обновления сущности посредством вызова метода `run`,\nкоторый предполагает выполнение различных ORM-операций, таких как `persist`."},{heading:`свойства-4`,content:`Название`},{heading:`свойства-4`,content:`Тип`},{heading:`свойства-4`,content:`По умолчанию`},{heading:`свойства-4`,content:`**$entity**`},{heading:`свойства-4`,content:`object`},{heading:`ошибки-1`,content:`Тип`},{heading:`ошибки-1`,content:`Описание`},{heading:`ошибки-1`,content:`\\ORM\\Exception\\EntityNotManagedException`},{heading:`ошибки-1`,content:`Если сущность не управляется текущим менеджером сущностей.`},{heading:`ошибки-1`,content:`\\ORM\\Exception\\TransactionException\\|\\Throwable`},{heading:`ошибки-1`,content:`Если транзакция не может быть завершена.`},{heading:`возвращает-2`,content:`Возвращает состояние ORM-транзакции после обновления сущности.`},{heading:`краткое-содержание-4`,content:`Удаляет сущность на основе переданного объекта и первичного ключа.`},{heading:`описание-3`,content:`Эта функция выполняет следующие шаги:`},{heading:`описание-3`,content:"Извлекает объект сущности из базы данных с помощью метода `get`."},{heading:`описание-3`,content:`Передает этот объект менеджеру сущностей для удаления.`},{heading:`описание-3`,content:`Выполняет транзакцию удаления.`},{heading:`свойства-5`,content:`Название`},{heading:`свойства-5`,content:`Тип`},{heading:`свойства-5`,content:`По умолчанию`},{heading:`свойства-5`,content:`**$entity**`},{heading:`свойства-5`,content:`object\\|string`},{heading:`свойства-5`,content:`**$pk**`},{heading:`свойства-5`,content:`int`},{heading:`ошибки-2`,content:`Тип`},{heading:`ошибки-2`,content:`Описание`},{heading:`ошибки-2`,content:`\\Throwable`},{heading:`ошибки-2`,content:`При любой ошибке в ORM (например, сбой во время удаления).`},{heading:`возвращает-3`,content:`Возвращает состояние завершенной транзакции удаления.`},{heading:`краткое-содержание-5`,content:`Получает сущность из хранилища данных по её первичному ключу.`},{heading:`свойства-6`,content:`Название`},{heading:`свойства-6`,content:`Тип`},{heading:`свойства-6`,content:`По умолчанию`},{heading:`свойства-6`,content:`**$entity**`},{heading:`свойства-6`,content:`object\\|string`},{heading:`свойства-6`,content:`**$pk**`},{heading:`свойства-6`,content:`int`},{heading:`возвращает-4`,content:`Возвращает найденный объект сущности или null, если объект с заданным первичным ключом
отсутствует.`},{heading:`краткое-содержание-6`,content:`Получает все записи для указанной сущности из хранилища.`},{heading:`описание-4`,content:`Этот метод использует репозиторий, ассоциированный с указанной сущностью,
для получения всех записей из базы данных.`},{heading:`свойства-7`,content:`Название`},{heading:`свойства-7`,content:`Тип`},{heading:`свойства-7`,content:`По умолчанию`},{heading:`свойства-7`,content:`**$entity**`},{heading:`свойства-7`,content:`object\\|string`},{heading:`возвращает-5`,content:`Массив объектов сущности, извлеченных из базы данных.
Если данных в хранилище нет, возвращается пустой массив.`},{heading:`краткое-содержание-7`,content:`Возвращает экземпляр ORM, создавая его при необходимости.`},{heading:`описание-5`,content:`Данный метод вызывает \`generateOrm\`, который инициализирует ORM,
используя настраиваемые зависимости, такие как Schema, Factory, Container и CommandGenerator.
Повторные вызовы возвращают уже созданный экземпляр ORM.`},{heading:`ошибки-3`,content:`Тип`},{heading:`ошибки-3`,content:`Описание`},{heading:`ошибки-3`,content:`\\RuntimeException`},{heading:`ошибки-3`,content:`Если при генерации ORM возникли ошибки.`},{heading:`возвращает-7`,content:`Экземпляр ORM.`},{heading:`краткое-содержание-8`,content:`Пагинирует данные из базы данных для указанной сущности.`},{heading:`описание-6`,content:"Этот метод извлекает данные для заданной сущности, применяет сортировку и пагинацию\nна основе переданных параметров и возвращает настроенный объект `ORM\\Select`."},{heading:`свойства-8`,content:`Название`},{heading:`свойства-8`,content:`Тип`},{heading:`свойства-8`,content:`По умолчанию`},{heading:`свойства-8`,content:`**$entity**`},{heading:`свойства-8`,content:`object\\|string`},{heading:`свойства-8`,content:`**$orderby**`},{heading:`свойства-8`,content:`string`},{heading:`свойства-8`,content:`**$sortby**`},{heading:`свойства-8`,content:`string`},{heading:`свойства-8`,content:`'DESC'`},{heading:`свойства-8`,content:`**$limit**`},{heading:`свойства-8`,content:`int`},{heading:`свойства-8`,content:`10`},{heading:`свойства-8`,content:`**$page**`},{heading:`свойства-8`,content:`int`},{heading:`свойства-8`,content:`1`},{heading:`возвращает-8`,content:`Настроенный объект Select, содержащий отсортированные и пагинированные данные.`},{heading:`краткое-содержание-9`,content:`Выполняет SQL-запрос с указанными параметрами и возвращает результат.`},{heading:`описание-7`,content:`Метод использует объект DatabaseManager для получения соединения с базой данных
и дальнейшего выполнения SQL-запроса. Позволяет передавать параметры для безопасного
выполнения подготовленных запросов.`},{heading:`свойства-9`,content:`Название`},{heading:`свойства-9`,content:`Тип`},{heading:`свойства-9`,content:`По умолчанию`},{heading:`свойства-9`,content:`**$sql**`},{heading:`свойства-9`,content:`string`},{heading:`свойства-9`,content:`**$params**`},{heading:`свойства-9`,content:`array`},{heading:`свойства-9`,content:`\\[]`},{heading:`ошибки-4`,content:`Тип`},{heading:`ошибки-4`,content:`Описание`},{heading:`ошибки-4`,content:`\\InvalidArgumentException`},{heading:`ошибки-4`,content:`Может бросить исключение при передаче некорректного SQL-запроса.`},{heading:`ошибки-4`,content:`\\RuntimeException`},{heading:`ошибки-4`,content:`Может бросить исключение, если соединение с базой данных невозможно.`},{heading:`возвращает-9`,content:`Результирующий объект, представляющий результат выполнения запроса.`},{heading:`краткое-содержание-10`,content:`Возвращает репозиторий для указанной сущности или класса сущности.`},{heading:`описание-8`,content:`Эта функция принимает объект сущности или строку, представляющую имя класса сущности,
определяет их имя класса и возвращает соответствующий репозиторий, используя ORM.`},{heading:`свойства-10`,content:`Название`},{heading:`свойства-10`,content:`Тип`},{heading:`свойства-10`,content:`По умолчанию`},{heading:`свойства-10`,content:`**$entity**`},{heading:`свойства-10`,content:`object`},{heading:`свойства-10`,content:`string`},{heading:`ошибки-5`,content:`Тип`},{heading:`ошибки-5`,content:`Описание`},{heading:`ошибки-5`,content:`\\ORM\\Exception\\RepositoryNotFoundException`},{heading:`ошибки-5`,content:`Если репозиторий для указанной сущности не найден.`},{heading:`возвращает-10`,content:`Интерфейс репозитория для работы с указанной сущностью.`},{heading:`краткое-содержание-11`,content:`Выполняет сохранение сущности и возвращает состояние транзакции.`},{heading:`описание-9`,content:"Этот метод обрабатывает сохранение переданного объекта сущности с использованием\nсвязанного `EntityManager`. Завершает операцию методом `run()`, который выполняет\nтранзакцию и возвращает её результирующее состояние."},{heading:`свойства-11`,content:`Название`},{heading:`свойства-11`,content:`Тип`},{heading:`свойства-11`,content:`По умолчанию`},{heading:`свойства-11`,content:`**$entity**`},{heading:`свойства-11`,content:`object`},{heading:`ошибки-6`,content:`Тип`},{heading:`ошибки-6`,content:`Описание`},{heading:`ошибки-6`,content:`\\RuntimeException\\|\\Throwable`},{heading:`ошибки-6`,content:"Исключение выбрасывается, если `EntityManager` не был корректно инициализирован, что приводит к ошибке сохранения."},{heading:`возвращает-11`,content:`Результирующее состояние транзакции после
сохранения сущности.`},{heading:`краткое-содержание-12`,content:`Устанавливает экземпляр EntityManager на основе текущего ORM.`},{heading:`описание-10`,content:`Метод инициализирует объект EntityManager (менеджера для управления сущностями)
на основе существующего объекта ORM (Object-Relational Mapping).
Если ORM не был предварительно сконфигурирован, это может привести к выбросу ошибок
в процессе создания EntityManager.`},{heading:`ошибки-7`,content:`Тип`},{heading:`ошибки-7`,content:`Описание`},{heading:`ошибки-7`,content:`\\RuntimeException`},{heading:`ошибки-7`,content:`Если объект ORM не был предварительно создан.`},{heading:`краткое-содержание-13`,content:`Обновляет предоставленную сущность в базе данных.`},{heading:`описание-11`,content:"Эта функция выполняет процесс обновления сущности посредством вызова метода `run`,\nкоторый предполагает выполнение различных ORM-операций, таких, как `persist`."},{heading:`свойства-12`,content:`Название`},{heading:`свойства-12`,content:`Тип`},{heading:`свойства-12`,content:`По умолчанию`},{heading:`свойства-12`,content:`**$entity**`},{heading:`свойства-12`,content:`object`},{heading:`ошибки-8`,content:`Тип`},{heading:`ошибки-8`,content:`Описание`},{heading:`ошибки-8`,content:`\\ORM\\Exception\\EntityNotManagedException`},{heading:`ошибки-8`,content:`Если сущность не управляется текущим менеджером сущностей.`},{heading:`ошибки-8`,content:`\\ORM\\Exception\\TransactionException\\|\\Throwable`},{heading:`ошибки-8`,content:`Если транзакция не может быть завершена.`},{heading:`возвращает-13`,content:`Возвращает состояние ORM-транзакции после обновления сущности.`},{heading:`краткое-содержание-14`,content:`Генерирует и компилирует схему на основе переданного реестра и генераторов схем.`},{heading:`описание-12`,content:"Этот метод обрабатывает пути моделей с использованием глобального объекта `$MIGRATOR`,\nнаходит классы и использует их для генерации комплексной схемы базы данных.\n**Примечание**: Метод использует глобальную переменную `$MIGRATOR`, поэтому убедитесь,\nчто она правильно инициализирована до вызова метода."},{heading:`свойства-13`,content:`Название`},{heading:`свойства-13`,content:`Тип`},{heading:`свойства-13`,content:`По умолчанию`},{heading:`свойства-13`,content:`**$registry**`},{heading:`свойства-13`,content:`\\Registry`},{heading:`ошибки-9`,content:`Тип`},{heading:`ошибки-9`,content:`Описание`},{heading:`ошибки-9`,content:`\\LogicException`},{heading:`ошибки-9`,content:`Если при компиляции схемы возникли логические ошибки.`},{heading:`ошибки-9`,content:`\\RuntimeException`},{heading:`ошибки-9`,content:`Если невозможно найти файлы моделей или извлечь классы.`},{heading:`возвращает-14`,content:`Возвращает скомпилированную схему в виде массива.`},{heading:`краткое-содержание-15`,content:`Создает и возвращает экземпляр класса DatabaseManager.`},{heading:`описание-13`,content:"Если объект `orm_manager` еще не создан, метод инициирует новый объект\n`DatabaseManager` на основе конфигурации ORM, полученной из метода `generateOrmConfig`."},{heading:`смотри-так-же`,content:`\\MhDB::generateOrmConfig()`},{heading:`ошибки-10`,content:`Тип`},{heading:`ошибки-10`,content:`Описание`},{heading:`ошибки-10`,content:`\\RuntimeException`},{heading:`ошибки-10`,content:`Генерируется, если не удается подключить необходимый файл конфигурации базы данных.`},{heading:`ошибки-10`,content:`\\ConfigException`},{heading:`ошибки-10`,content:`Генерируется, если конфигурация базы данных содержит ошибки.`},{heading:`возвращает-15`,content:`Экземпляр менеджера базы данных, конфигурированного с помощью ORM.`},{heading:`краткое-содержание-16`,content:`Создает и возвращает экземпляр ORM (Object-Relational Mapper), используя
предварительно скомпилированную схему, фабрику ORM, менеджер базы данных,
а также генератор команд с поддержкой событий. Если ORM уже инициализирован,
то возвращает ранее созданный объект.`},{heading:`описание-14`,content:`Генерация ORM основывается на схеме, созданной методом \\{@see},
которой, в свою очередь, необходим зарегистрированный реестр сущностей.
Управление базой данных осуществляется через метод \\{@see}.`},{heading:`ошибки-11`,content:`Тип`},{heading:`ошибки-11`,content:`Описание`},{heading:`ошибки-11`,content:`\\RuntimeException`},{heading:`ошибки-11`,content:`Если генерация схемы или конфигурации базы данных завершилась с ошибкой.`},{heading:`возвращает-16`,content:`Объект ORM (Object-Relational Mapper), предназначенный
для взаимодействия с базой данных.`},{heading:`краткое-содержание-17`,content:`Генерирует и возвращает объект конфигурации базы данных ORM, если он ещё не создан.`},{heading:`описание-15`,content:`Функция проверяет, был ли ранее инициализирован объект конфигурации ORM.
Если объект отсутствует, производится его создание на основании глобальных настроек.
Подключается файл конфигурации базы данных и выполняется подготовка данных,
таких как разбиение хоста и порта, а также выборка префикса таблиц в зависимости от типа базы данных.`},{heading:`возвращает-17`,content:`Объект конфигурации базы данных ORM.`}],headings:[{id:`краткое-содержание`,content:`Краткое содержание:`},{id:`свойства`,content:`Свойства`},{id:`методы`,content:`Методы`},{id:`подробности`,content:`Подробности`},{id:`свойства-1`,content:`Свойства`},{id:`private-em--cycleormentitymanager`,content:`private $em : ?\\Cycle\\ORM\\EntityManager`},{id:`private-orm--cycleormorm`,content:`private $orm : ?\\Cycle\\ORM\\ORM`},{id:`private-orm_config--cycledatabaseconfigdatabaseconfig`,content:`private $orm_config : ?\\Cycle\\Database\\Config\\DatabaseConfig`},{id:`private-orm_manager--cycledatabasedatabasemanager`,content:`private $orm_manager : ?\\Cycle\\Database\\DatabaseManager`},{id:`private-user_db--bool`,content:`private $user_db : bool`},{id:`методы-1`,content:`Методы`},{id:`__construct`,content:`\\__construct`},{id:`краткое-содержание-1`,content:`Краткое содержание`},{id:`описание`,content:`Описание`},{id:`свойства-2`,content:`Свойства:`},{id:`ошибки`,content:`Ошибки:`},{id:`возвращает`,content:`Возвращает:`},{id:`count`,content:`count`},{id:`краткое-содержание-2`,content:`Краткое содержание`},{id:`описание-1`,content:`Описание`},{id:`свойства-3`,content:`Свойства:`},{id:`возвращает-1`,content:`Возвращает:`},{id:`create`,content:`create`},{id:`краткое-содержание-3`,content:`Краткое содержание`},{id:`описание-2`,content:`Описание`},{id:`свойства-4`,content:`Свойства:`},{id:`ошибки-1`,content:`Ошибки:`},{id:`возвращает-2`,content:`Возвращает:`},{id:`delete`,content:`delete`},{id:`краткое-содержание-4`,content:`Краткое содержание`},{id:`описание-3`,content:`Описание`},{id:`свойства-5`,content:`Свойства:`},{id:`ошибки-2`,content:`Ошибки:`},{id:`возвращает-3`,content:`Возвращает:`},{id:`get`,content:`get`},{id:`краткое-содержание-5`,content:`Краткое содержание`},{id:`свойства-6`,content:`Свойства:`},{id:`возвращает-4`,content:`Возвращает:`},{id:`getall`,content:`getAll`},{id:`краткое-содержание-6`,content:`Краткое содержание`},{id:`описание-4`,content:`Описание`},{id:`свойства-7`,content:`Свойства:`},{id:`возвращает-5`,content:`Возвращает:`},{id:`getmanager`,content:`getManager`},{id:`возвращает-6`,content:`Возвращает:`},{id:`getorm`,content:`getOrm`},{id:`краткое-содержание-7`,content:`Краткое содержание`},{id:`описание-5`,content:`Описание`},{id:`ошибки-3`,content:`Ошибки:`},{id:`возвращает-7`,content:`Возвращает:`},{id:`paginate`,content:`paginate`},{id:`краткое-содержание-8`,content:`Краткое содержание`},{id:`описание-6`,content:`Описание`},{id:`свойства-8`,content:`Свойства:`},{id:`возвращает-8`,content:`Возвращает:`},{id:`query`,content:`query`},{id:`краткое-содержание-9`,content:`Краткое содержание`},{id:`описание-7`,content:`Описание`},{id:`свойства-9`,content:`Свойства:`},{id:`ошибки-4`,content:`Ошибки:`},{id:`возвращает-9`,content:`Возвращает:`},{id:`repository`,content:`repository`},{id:`краткое-содержание-10`,content:`Краткое содержание`},{id:`описание-8`,content:`Описание`},{id:`свойства-10`,content:`Свойства:`},{id:`ошибки-5`,content:`Ошибки:`},{id:`возвращает-10`,content:`Возвращает:`},{id:`run`,content:`run`},{id:`краткое-содержание-11`,content:`Краткое содержание`},{id:`описание-9`,content:`Описание`},{id:`свойства-11`,content:`Свойства:`},{id:`ошибки-6`,content:`Ошибки:`},{id:`возвращает-11`,content:`Возвращает:`},{id:`setmanager`,content:`setManager`},{id:`краткое-содержание-12`,content:`Краткое содержание`},{id:`описание-10`,content:`Описание`},{id:`ошибки-7`,content:`Ошибки:`},{id:`возвращает-12`,content:`Возвращает:`},{id:`update`,content:`update`},{id:`краткое-содержание-13`,content:`Краткое содержание`},{id:`описание-11`,content:`Описание`},{id:`свойства-12`,content:`Свойства:`},{id:`ошибки-8`,content:`Ошибки:`},{id:`возвращает-13`,content:`Возвращает:`},{id:`compileschema`,content:`compileSchema`},{id:`краткое-содержание-14`,content:`Краткое содержание`},{id:`описание-12`,content:`Описание`},{id:`свойства-13`,content:`Свойства:`},{id:`ошибки-9`,content:`Ошибки:`},{id:`возвращает-14`,content:`Возвращает:`},{id:`generatemanager`,content:`generateManager`},{id:`краткое-содержание-15`,content:`Краткое содержание`},{id:`описание-13`,content:`Описание`},{id:`смотри-так-же`,content:`Смотри так-же:`},{id:`ошибки-10`,content:`Ошибки:`},{id:`возвращает-15`,content:`Возвращает:`},{id:`generateorm`,content:`generateOrm`},{id:`краткое-содержание-16`,content:`Краткое содержание`},{id:`описание-14`,content:`Описание`},{id:`ошибки-11`,content:`Ошибки:`},{id:`возвращает-16`,content:`Возвращает:`},{id:`generateormconfig`,content:`generateOrmConfig`},{id:`краткое-содержание-17`,content:`Краткое содержание`},{id:`описание-15`,content:`Описание`},{id:`возвращает-17`,content:`Возвращает:`}]},s=[{depth:2,url:`#краткое-содержание`,title:(0,n.jsx)(n.Fragment,{children:`Краткое содержание:`})},{depth:3,url:`#свойства`,title:(0,n.jsx)(n.Fragment,{children:`Свойства`})},{depth:3,url:`#методы`,title:(0,n.jsx)(n.Fragment,{children:`Методы`})},{depth:3,url:`#подробности`,title:(0,n.jsx)(n.Fragment,{children:`Подробности`})},{depth:2,url:`#свойства-1`,title:(0,n.jsx)(n.Fragment,{children:`Свойства`})},{depth:4,url:`#private-em--cycleormentitymanager`,title:(0,n.jsx)(n.Fragment,{children:`private $em : ?\\Cycle\\ORM\\EntityManager`})},{depth:4,url:`#private-orm--cycleormorm`,title:(0,n.jsx)(n.Fragment,{children:`private $orm : ?\\Cycle\\ORM\\ORM`})},{depth:4,url:`#private-orm_config--cycledatabaseconfigdatabaseconfig`,title:(0,n.jsx)(n.Fragment,{children:`private $orm_config : ?\\Cycle\\Database\\Config\\DatabaseConfig`})},{depth:4,url:`#private-orm_manager--cycledatabasedatabasemanager`,title:(0,n.jsx)(n.Fragment,{children:`private $orm_manager : ?\\Cycle\\Database\\DatabaseManager`})},{depth:4,url:`#private-user_db--bool`,title:(0,n.jsx)(n.Fragment,{children:`private $user_db : bool`})},{depth:2,url:`#методы-1`,title:(0,n.jsx)(n.Fragment,{children:`Методы`})},{depth:3,url:`#__construct`,title:(0,n.jsx)(n.Fragment,{children:`__construct`})},{depth:5,url:`#краткое-содержание-1`,title:(0,n.jsx)(n.Fragment,{children:`Краткое содержание`})},{depth:5,url:`#описание`,title:(0,n.jsx)(n.Fragment,{children:`Описание`})},{depth:5,url:`#свойства-2`,title:(0,n.jsx)(n.Fragment,{children:`Свойства:`})},{depth:5,url:`#ошибки`,title:(0,n.jsx)(n.Fragment,{children:`Ошибки:`})},{depth:5,url:`#возвращает`,title:(0,n.jsx)(n.Fragment,{children:`Возвращает:`})},{depth:3,url:`#count`,title:(0,n.jsx)(n.Fragment,{children:`count`})},{depth:5,url:`#краткое-содержание-2`,title:(0,n.jsx)(n.Fragment,{children:`Краткое содержание`})},{depth:5,url:`#описание-1`,title:(0,n.jsx)(n.Fragment,{children:`Описание`})},{depth:5,url:`#свойства-3`,title:(0,n.jsx)(n.Fragment,{children:`Свойства:`})},{depth:5,url:`#возвращает-1`,title:(0,n.jsx)(n.Fragment,{children:`Возвращает:`})},{depth:3,url:`#create`,title:(0,n.jsx)(n.Fragment,{children:`create`})},{depth:5,url:`#краткое-содержание-3`,title:(0,n.jsx)(n.Fragment,{children:`Краткое содержание`})},{depth:5,url:`#описание-2`,title:(0,n.jsx)(n.Fragment,{children:`Описание`})},{depth:5,url:`#свойства-4`,title:(0,n.jsx)(n.Fragment,{children:`Свойства:`})},{depth:5,url:`#ошибки-1`,title:(0,n.jsx)(n.Fragment,{children:`Ошибки:`})},{depth:5,url:`#возвращает-2`,title:(0,n.jsx)(n.Fragment,{children:`Возвращает:`})},{depth:3,url:`#delete`,title:(0,n.jsx)(n.Fragment,{children:`delete`})},{depth:5,url:`#краткое-содержание-4`,title:(0,n.jsx)(n.Fragment,{children:`Краткое содержание`})},{depth:5,url:`#описание-3`,title:(0,n.jsx)(n.Fragment,{children:`Описание`})},{depth:5,url:`#свойства-5`,title:(0,n.jsx)(n.Fragment,{children:`Свойства:`})},{depth:5,url:`#ошибки-2`,title:(0,n.jsx)(n.Fragment,{children:`Ошибки:`})},{depth:5,url:`#возвращает-3`,title:(0,n.jsx)(n.Fragment,{children:`Возвращает:`})},{depth:3,url:`#get`,title:(0,n.jsx)(n.Fragment,{children:`get`})},{depth:5,url:`#краткое-содержание-5`,title:(0,n.jsx)(n.Fragment,{children:`Краткое содержание`})},{depth:5,url:`#свойства-6`,title:(0,n.jsx)(n.Fragment,{children:`Свойства:`})},{depth:5,url:`#возвращает-4`,title:(0,n.jsx)(n.Fragment,{children:`Возвращает:`})},{depth:3,url:`#getall`,title:(0,n.jsx)(n.Fragment,{children:`getAll`})},{depth:5,url:`#краткое-содержание-6`,title:(0,n.jsx)(n.Fragment,{children:`Краткое содержание`})},{depth:5,url:`#описание-4`,title:(0,n.jsx)(n.Fragment,{children:`Описание`})},{depth:5,url:`#свойства-7`,title:(0,n.jsx)(n.Fragment,{children:`Свойства:`})},{depth:5,url:`#возвращает-5`,title:(0,n.jsx)(n.Fragment,{children:`Возвращает:`})},{depth:3,url:`#getmanager`,title:(0,n.jsx)(n.Fragment,{children:`getManager`})},{depth:5,url:`#возвращает-6`,title:(0,n.jsx)(n.Fragment,{children:`Возвращает:`})},{depth:3,url:`#getorm`,title:(0,n.jsx)(n.Fragment,{children:`getOrm`})},{depth:5,url:`#краткое-содержание-7`,title:(0,n.jsx)(n.Fragment,{children:`Краткое содержание`})},{depth:5,url:`#описание-5`,title:(0,n.jsx)(n.Fragment,{children:`Описание`})},{depth:5,url:`#ошибки-3`,title:(0,n.jsx)(n.Fragment,{children:`Ошибки:`})},{depth:5,url:`#возвращает-7`,title:(0,n.jsx)(n.Fragment,{children:`Возвращает:`})},{depth:3,url:`#paginate`,title:(0,n.jsx)(n.Fragment,{children:`paginate`})},{depth:5,url:`#краткое-содержание-8`,title:(0,n.jsx)(n.Fragment,{children:`Краткое содержание`})},{depth:5,url:`#описание-6`,title:(0,n.jsx)(n.Fragment,{children:`Описание`})},{depth:5,url:`#свойства-8`,title:(0,n.jsx)(n.Fragment,{children:`Свойства:`})},{depth:5,url:`#возвращает-8`,title:(0,n.jsx)(n.Fragment,{children:`Возвращает:`})},{depth:3,url:`#query`,title:(0,n.jsx)(n.Fragment,{children:`query`})},{depth:5,url:`#краткое-содержание-9`,title:(0,n.jsx)(n.Fragment,{children:`Краткое содержание`})},{depth:5,url:`#описание-7`,title:(0,n.jsx)(n.Fragment,{children:`Описание`})},{depth:5,url:`#свойства-9`,title:(0,n.jsx)(n.Fragment,{children:`Свойства:`})},{depth:5,url:`#ошибки-4`,title:(0,n.jsx)(n.Fragment,{children:`Ошибки:`})},{depth:5,url:`#возвращает-9`,title:(0,n.jsx)(n.Fragment,{children:`Возвращает:`})},{depth:3,url:`#repository`,title:(0,n.jsx)(n.Fragment,{children:`repository`})},{depth:5,url:`#краткое-содержание-10`,title:(0,n.jsx)(n.Fragment,{children:`Краткое содержание`})},{depth:5,url:`#описание-8`,title:(0,n.jsx)(n.Fragment,{children:`Описание`})},{depth:5,url:`#свойства-10`,title:(0,n.jsx)(n.Fragment,{children:`Свойства:`})},{depth:5,url:`#ошибки-5`,title:(0,n.jsx)(n.Fragment,{children:`Ошибки:`})},{depth:5,url:`#возвращает-10`,title:(0,n.jsx)(n.Fragment,{children:`Возвращает:`})},{depth:3,url:`#run`,title:(0,n.jsx)(n.Fragment,{children:`run`})},{depth:5,url:`#краткое-содержание-11`,title:(0,n.jsx)(n.Fragment,{children:`Краткое содержание`})},{depth:5,url:`#описание-9`,title:(0,n.jsx)(n.Fragment,{children:`Описание`})},{depth:5,url:`#свойства-11`,title:(0,n.jsx)(n.Fragment,{children:`Свойства:`})},{depth:5,url:`#ошибки-6`,title:(0,n.jsx)(n.Fragment,{children:`Ошибки:`})},{depth:5,url:`#возвращает-11`,title:(0,n.jsx)(n.Fragment,{children:`Возвращает:`})},{depth:3,url:`#setmanager`,title:(0,n.jsx)(n.Fragment,{children:`setManager`})},{depth:5,url:`#краткое-содержание-12`,title:(0,n.jsx)(n.Fragment,{children:`Краткое содержание`})},{depth:5,url:`#описание-10`,title:(0,n.jsx)(n.Fragment,{children:`Описание`})},{depth:5,url:`#ошибки-7`,title:(0,n.jsx)(n.Fragment,{children:`Ошибки:`})},{depth:5,url:`#возвращает-12`,title:(0,n.jsx)(n.Fragment,{children:`Возвращает:`})},{depth:3,url:`#update`,title:(0,n.jsx)(n.Fragment,{children:`update`})},{depth:5,url:`#краткое-содержание-13`,title:(0,n.jsx)(n.Fragment,{children:`Краткое содержание`})},{depth:5,url:`#описание-11`,title:(0,n.jsx)(n.Fragment,{children:`Описание`})},{depth:5,url:`#свойства-12`,title:(0,n.jsx)(n.Fragment,{children:`Свойства:`})},{depth:5,url:`#ошибки-8`,title:(0,n.jsx)(n.Fragment,{children:`Ошибки:`})},{depth:5,url:`#возвращает-13`,title:(0,n.jsx)(n.Fragment,{children:`Возвращает:`})},{depth:3,url:`#compileschema`,title:(0,n.jsx)(n.Fragment,{children:`compileSchema`})},{depth:5,url:`#краткое-содержание-14`,title:(0,n.jsx)(n.Fragment,{children:`Краткое содержание`})},{depth:5,url:`#описание-12`,title:(0,n.jsx)(n.Fragment,{children:`Описание`})},{depth:5,url:`#свойства-13`,title:(0,n.jsx)(n.Fragment,{children:`Свойства:`})},{depth:5,url:`#ошибки-9`,title:(0,n.jsx)(n.Fragment,{children:`Ошибки:`})},{depth:5,url:`#возвращает-14`,title:(0,n.jsx)(n.Fragment,{children:`Возвращает:`})},{depth:3,url:`#generatemanager`,title:(0,n.jsx)(n.Fragment,{children:`generateManager`})},{depth:5,url:`#краткое-содержание-15`,title:(0,n.jsx)(n.Fragment,{children:`Краткое содержание`})},{depth:5,url:`#описание-13`,title:(0,n.jsx)(n.Fragment,{children:`Описание`})},{depth:5,url:`#смотри-так-же`,title:(0,n.jsx)(n.Fragment,{children:`Смотри так-же:`})},{depth:5,url:`#ошибки-10`,title:(0,n.jsx)(n.Fragment,{children:`Ошибки:`})},{depth:5,url:`#возвращает-15`,title:(0,n.jsx)(n.Fragment,{children:`Возвращает:`})},{depth:3,url:`#generateorm`,title:(0,n.jsx)(n.Fragment,{children:`generateOrm`})},{depth:5,url:`#краткое-содержание-16`,title:(0,n.jsx)(n.Fragment,{children:`Краткое содержание`})},{depth:5,url:`#описание-14`,title:(0,n.jsx)(n.Fragment,{children:`Описание`})},{depth:5,url:`#ошибки-11`,title:(0,n.jsx)(n.Fragment,{children:`Ошибки:`})},{depth:5,url:`#возвращает-16`,title:(0,n.jsx)(n.Fragment,{children:`Возвращает:`})},{depth:3,url:`#generateormconfig`,title:(0,n.jsx)(n.Fragment,{children:`generateOrmConfig`})},{depth:5,url:`#краткое-содержание-17`,title:(0,n.jsx)(n.Fragment,{children:`Краткое содержание`})},{depth:5,url:`#описание-15`,title:(0,n.jsx)(n.Fragment,{children:`Описание`})},{depth:5,url:`#возвращает-17`,title:(0,n.jsx)(n.Fragment,{children:`Возвращает:`})}];function c(e){let t={a:`a`,code:`code`,em:`em`,h2:`h2`,h3:`h3`,h4:`h4`,h5:`h5`,hr:`hr`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,span:`span`,strong:`strong`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,ul:`ul`,...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h2,{id:`краткое-содержание`,children:`Краткое содержание:`}),`
`,(0,n.jsx)(t.p,{children:`Класс для работы с базой данных`}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsx)(t.h3,{id:`свойства`,children:`Свойства`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[`private $`,(0,n.jsx)(t.a,{href:`#property_em`,children:`em`})]}),`
`,(0,n.jsxs)(t.li,{children:[`private $`,(0,n.jsx)(t.a,{href:`#property_orm`,children:`orm`})]}),`
`,(0,n.jsxs)(t.li,{children:[`private $`,(0,n.jsx)(t.a,{href:`#property_orm_config`,children:`orm_config`})]}),`
`,(0,n.jsxs)(t.li,{children:[`private $`,(0,n.jsx)(t.a,{href:`#property_orm_manager`,children:`orm_manager`})]}),`
`,(0,n.jsxs)(t.li,{children:[`private $`,(0,n.jsx)(t.a,{href:`#property_user_db`,children:`user_db`})]}),`
`]}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsx)(t.h3,{id:`методы`,children:`Методы`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method___construct`,children:`__construct()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method_count`,children:`count()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method_create`,children:`create()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method_delete`,children:`delete()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method_get`,children:`get()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method_getAll`,children:`getAll()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method_getManager`,children:`getManager()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method_getOrm`,children:`getOrm()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method_paginate`,children:`paginate()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method_query`,children:`query()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method_repository`,children:`repository()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method_run`,children:`run()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method_setManager`,children:`setManager()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method_update`,children:`update()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`private `,(0,n.jsx)(t.a,{href:`#method_compileSchema`,children:`compileSchema()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`private `,(0,n.jsx)(t.a,{href:`#method_generateManager`,children:`generateManager()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`private `,(0,n.jsx)(t.a,{href:`#method_generateOrm`,children:`generateOrm()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`private `,(0,n.jsx)(t.a,{href:`#method_generateOrmConfig`,children:`generateOrmConfig()`})]}),`
`]}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsx)(t.h3,{id:`подробности`,children:`Подробности`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsx)(t.li,{children:`Путь: engine/inc/maharder/_includes/database/MhDB.php`}),`
`]}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsx)(t.h2,{id:`свойства-1`,children:`Свойства`}),`
`,(0,n.jsx)(`span`,{id:`property_em`}),`
`,(0,n.jsx)(t.h4,{id:`private-em--cycleormentitymanager`,children:`private $em : ?\\Cycle\\ORM\\EntityManager`}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Краткое содержание`})}),`
`,(0,n.jsx)(t.p,{children:`Менеджер сущностей ORM, обеспечивающий операции CRUD и управление состоянием сущностей.`}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.em,{children:(0,n.jsx)(t.strong,{children:`Описание`})})}),`
`,(0,n.jsxs)(t.p,{children:[`Инициализируется в методе `,(0,n.jsx)(t.code,{children:`setManager`}),`.`]}),`
`,(0,n.jsxs)(t.p,{children:[`**Тип:
** `,(0,n.jsx)(`a`,{href:`https://cycle-orm.dev/docs/advanced-entity-manager/current`,target:`_blank`,children:(0,n.jsx)(`abbr`,{title:`?\\Cycle\\ORM\\EntityManager`,children:`
EntityManager`})})]}),`
`,(0,n.jsx)(`span`,{id:`property_orm`}),`
`,(0,n.jsx)(t.h4,{id:`private-orm--cycleormorm`,children:`private $orm : ?\\Cycle\\ORM\\ORM`}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Краткое содержание`})}),`
`,(0,n.jsx)(t.p,{children:`ORM-класс для управления объектами и предоставления операций высокого уровня.`}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.em,{children:(0,n.jsx)(t.strong,{children:`Описание`})})}),`
`,(0,n.jsx)(t.p,{children:`Используется для создания экземпляра ORM, управления сущностями, получением менеджера базы данных и выполнения
запросов.`}),`
`,(0,n.jsxs)(t.p,{children:[`**Тип:
** `,(0,n.jsx)(`a`,{href:`https://cycle-orm.dev/docs/intro-quick-start/current/en#orm`,target:`_blank`,children:(0,n.jsx)(`abbr`,{title:`?\\Cycle\\ORM\\ORM`,children:`
ORM`})})]}),`
`,(0,n.jsx)(`span`,{id:`property_orm_config`}),`
`,(0,n.jsx)(t.h4,{id:`private-orm_config--cycledatabaseconfigdatabaseconfig`,children:`private $orm_config : ?\\Cycle\\Database\\Config\\DatabaseConfig`}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Краткое содержание`})}),`
`,(0,n.jsx)(t.p,{children:`Конфигурация базы данных для настройки параметров подключения, драйвера и других настроек.`}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.em,{children:(0,n.jsx)(t.strong,{children:`Описание`})})}),`
`,(0,n.jsxs)(t.p,{children:[`Генерируется с помощью метода `,(0,n.jsx)(t.code,{children:`generateOrmConfig`}),`.`]}),`
`,(0,n.jsxs)(t.p,{children:[`**Тип:
** `,(0,n.jsx)(`a`,{href:`https://cycle-orm.dev/docs/database-isolation/current/en#configuration`,target:`_blank`,children:(0,n.jsx)(`abbr`,{title:`?\\Cycle\\Database\\Config\\DatabaseConfig`,children:`
DatabaseConfig`})})]}),`
`,(0,n.jsx)(`span`,{id:`property_orm_manager`}),`
`,(0,n.jsx)(t.h4,{id:`private-orm_manager--cycledatabasedatabasemanager`,children:`private $orm_manager : ?\\Cycle\\Database\\DatabaseManager`}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Краткое содержание`})}),`
`,(0,n.jsx)(t.p,{children:`Менеджер базы данных, предоставляющий функционал работы с подключениями и конфигурациями БД.`}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.em,{children:(0,n.jsx)(t.strong,{children:`Описание`})})}),`
`,(0,n.jsxs)(t.p,{children:[`Генерируется с помощью метода `,(0,n.jsx)(t.code,{children:`generateManager`}),`.`]}),`
`,(0,n.jsxs)(t.p,{children:[`**Тип:
** `,(0,n.jsx)(`a`,{href:`https://cycle-orm.dev/docs/database-access/current/en`,target:`_blank`,children:(0,n.jsx)(`abbr`,{title:`?\\Cycle\\Database\\DatabaseManager`,children:`
DatabaseManager`})})]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Подробности:`})}),`
`,(0,n.jsx)(`span`,{id:`property_user_db`}),`
`,(0,n.jsx)(t.h4,{id:`private-user_db--bool`,children:`private $user_db : bool`}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Краткое содержание`})}),`
`,(0,n.jsx)(t.p,{children:`Флаг, определяющий подключение к базе данных пользователя (true) или основной базы данных (false).`}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.em,{children:(0,n.jsx)(t.strong,{children:`Описание`})})}),`
`,(0,n.jsx)(t.p,{children:`Используется при создании конфигурации базы данных.`}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Тип:`}),` `,(0,n.jsx)(`abbr`,{title:`bool`,children:`Логические значения`})]}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsx)(t.h2,{id:`методы-1`,children:`Методы`}),`
`,(0,n.jsx)(`span`,{id:`method___construct`}),`
`,(0,n.jsx)(t.h3,{id:`__construct`,children:`__construct`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`public __construct(bool  user_db = false) : mixed`})})})})}),`
`,(0,n.jsx)(t.h5,{id:`краткое-содержание-1`,children:`Краткое содержание`}),`
`,(0,n.jsx)(t.p,{children:`Конструктор класса MhDB.`}),`
`,(0,n.jsx)(t.h5,{id:`описание`,children:`Описание`}),`
`,(0,n.jsx)(t.p,{children:`Настраивает базу данных, инициализирует ORM, а также управляет объектом EntityManager.`}),`
`,(0,n.jsx)(t.h5,{id:`свойства-2`,children:`Свойства:`}),`
`,(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`Название`}),(0,n.jsx)(t.th,{children:`Тип`}),(0,n.jsx)(t.th,{children:`По умолчанию`})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:`$user_db`})}),(0,n.jsx)(t.td,{children:`bool`}),(0,n.jsx)(t.td,{children:`false`})]})})]}),`
`,(0,n.jsx)(t.h5,{id:`ошибки`,children:`Ошибки:`}),`
`,(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`Тип`}),(0,n.jsx)(t.th,{children:`Описание`})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`\\Cycle\\ORM\\Exception\\SchemaException`}),(0,n.jsx)(t.td,{children:`Если при генерации ORM произошла ошибка в схеме базы данных.`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`\\Cycle\\Migrations\\Exception\\MigrationException`}),(0,n.jsx)(t.td,{children:`Если миграции не могут быть выполнены.`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`\\RuntimeException`}),(0,n.jsx)(t.td,{children:`Если не удается нормально настроить конфигурацию подключения к базе данных.`})]})]})]}),`
`,(0,n.jsx)(t.h5,{id:`возвращает`,children:`Возвращает:`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`mixed`})})})})}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsx)(`span`,{id:`method_count`}),`
`,(0,n.jsx)(t.h3,{id:`count`,children:`count`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`public count(object|string  entity) : int`})})})})}),`
`,(0,n.jsx)(t.h5,{id:`краткое-содержание-2`,children:`Краткое содержание`}),`
`,(0,n.jsx)(t.p,{children:`Подсчитывает количество записей для указанной сущности.`}),`
`,(0,n.jsx)(t.h5,{id:`описание-1`,children:`Описание`}),`
`,(0,n.jsx)(t.p,{children:`Эта функция использует репозиторий, связанный с сущностью, для выполнения запроса
на подсчет количества записей.`}),`
`,(0,n.jsx)(t.h5,{id:`свойства-3`,children:`Свойства:`}),`
`,(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`Название`}),(0,n.jsx)(t.th,{children:`Тип`}),(0,n.jsx)(t.th,{children:`По умолчанию`})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:`$entity`})}),(0,n.jsx)(t.td,{children:`object|string`}),(0,n.jsx)(t.td,{})]})})]}),`
`,(0,n.jsx)(t.h5,{id:`возвращает-1`,children:`Возвращает:`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`int`})})})})}),`
`,(0,n.jsx)(t.p,{children:`Количество записей в репозитории, связанных с данной сущностью.`}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsx)(`span`,{id:`method_create`}),`
`,(0,n.jsx)(t.h3,{id:`create`,children:`create`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`public create(object  entity) : \\ORM\\Transaction\\StateInterface`})})})})}),`
`,(0,n.jsx)(t.h5,{id:`краткое-содержание-3`,children:`Краткое содержание`}),`
`,(0,n.jsx)(t.p,{children:`Обновляет предоставленную сущность в базе данных.`}),`
`,(0,n.jsx)(t.h5,{id:`описание-2`,children:`Описание`}),`
`,(0,n.jsxs)(t.p,{children:[`Эта функция выполняет процесс обновления сущности посредством вызова метода `,(0,n.jsx)(t.code,{children:`run`}),`,
который предполагает выполнение различных ORM-операций, таких как `,(0,n.jsx)(t.code,{children:`persist`}),`.`]}),`
`,(0,n.jsx)(t.h5,{id:`свойства-4`,children:`Свойства:`}),`
`,(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`Название`}),(0,n.jsx)(t.th,{children:`Тип`}),(0,n.jsx)(t.th,{children:`По умолчанию`})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:`$entity`})}),(0,n.jsx)(t.td,{children:`object`}),(0,n.jsx)(t.td,{})]})})]}),`
`,(0,n.jsx)(t.h5,{id:`ошибки-1`,children:`Ошибки:`}),`
`,(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`Тип`}),(0,n.jsx)(t.th,{children:`Описание`})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`\\ORM\\Exception\\EntityNotManagedException`}),(0,n.jsx)(t.td,{children:`Если сущность не управляется текущим менеджером сущностей.`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`\\ORM\\Exception\\TransactionException|\\Throwable`}),(0,n.jsx)(t.td,{children:`Если транзакция не может быть завершена.`})]})]})]}),`
`,(0,n.jsx)(t.h5,{id:`возвращает-2`,children:`Возвращает:`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`\\ORM\\Transaction\\StateInterface`})})})})}),`
`,(0,n.jsx)(t.p,{children:`Возвращает состояние ORM-транзакции после обновления сущности.`}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsx)(`span`,{id:`method_delete`}),`
`,(0,n.jsx)(t.h3,{id:`delete`,children:`delete`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`public delete(object|string  entity, int  pk) : \\ORM\\Transaction\\StateInterface`})})})})}),`
`,(0,n.jsx)(t.h5,{id:`краткое-содержание-4`,children:`Краткое содержание`}),`
`,(0,n.jsx)(t.p,{children:`Удаляет сущность на основе переданного объекта и первичного ключа.`}),`
`,(0,n.jsx)(t.h5,{id:`описание-3`,children:`Описание`}),`
`,(0,n.jsx)(t.p,{children:`Эта функция выполняет следующие шаги:`}),`
`,(0,n.jsxs)(t.ol,{children:[`
`,(0,n.jsxs)(t.li,{children:[`Извлекает объект сущности из базы данных с помощью метода `,(0,n.jsx)(t.code,{children:`get`}),`.`]}),`
`,(0,n.jsx)(t.li,{children:`Передает этот объект менеджеру сущностей для удаления.`}),`
`,(0,n.jsx)(t.li,{children:`Выполняет транзакцию удаления.`}),`
`]}),`
`,(0,n.jsx)(t.h5,{id:`свойства-5`,children:`Свойства:`}),`
`,(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`Название`}),(0,n.jsx)(t.th,{children:`Тип`}),(0,n.jsx)(t.th,{children:`По умолчанию`})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:`$entity`})}),(0,n.jsx)(t.td,{children:`object|string`}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:`$pk`})}),(0,n.jsx)(t.td,{children:`int`}),(0,n.jsx)(t.td,{})]})]})]}),`
`,(0,n.jsx)(t.h5,{id:`ошибки-2`,children:`Ошибки:`}),`
`,(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`Тип`}),(0,n.jsx)(t.th,{children:`Описание`})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`\\Throwable`}),(0,n.jsx)(t.td,{children:`При любой ошибке в ORM (например, сбой во время удаления).`})]})})]}),`
`,(0,n.jsx)(t.h5,{id:`возвращает-3`,children:`Возвращает:`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`\\ORM\\Transaction\\StateInterface`})})})})}),`
`,(0,n.jsx)(t.p,{children:`Возвращает состояние завершенной транзакции удаления.`}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsx)(`span`,{id:`method_get`}),`
`,(0,n.jsx)(t.h3,{id:`get`,children:`get`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`public get(object|string  entity, int  pk) : object|null`})})})})}),`
`,(0,n.jsx)(t.h5,{id:`краткое-содержание-5`,children:`Краткое содержание`}),`
`,(0,n.jsx)(t.p,{children:`Получает сущность из хранилища данных по её первичному ключу.`}),`
`,(0,n.jsx)(t.h5,{id:`свойства-6`,children:`Свойства:`}),`
`,(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`Название`}),(0,n.jsx)(t.th,{children:`Тип`}),(0,n.jsx)(t.th,{children:`По умолчанию`})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:`$entity`})}),(0,n.jsx)(t.td,{children:`object|string`}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:`$pk`})}),(0,n.jsx)(t.td,{children:`int`}),(0,n.jsx)(t.td,{})]})]})]}),`
`,(0,n.jsx)(t.h5,{id:`возвращает-4`,children:`Возвращает:`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`object|null`})})})})}),`
`,(0,n.jsx)(t.p,{children:`Возвращает найденный объект сущности или null, если объект с заданным первичным ключом
отсутствует.`}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsx)(`span`,{id:`method_getAll`}),`
`,(0,n.jsx)(t.h3,{id:`getall`,children:`getAll`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`public getAll(object|string  entity) : array`})})})})}),`
`,(0,n.jsx)(t.h5,{id:`краткое-содержание-6`,children:`Краткое содержание`}),`
`,(0,n.jsx)(t.p,{children:`Получает все записи для указанной сущности из хранилища.`}),`
`,(0,n.jsx)(t.h5,{id:`описание-4`,children:`Описание`}),`
`,(0,n.jsx)(t.p,{children:`Этот метод использует репозиторий, ассоциированный с указанной сущностью,
для получения всех записей из базы данных.`}),`
`,(0,n.jsx)(t.h5,{id:`свойства-7`,children:`Свойства:`}),`
`,(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`Название`}),(0,n.jsx)(t.th,{children:`Тип`}),(0,n.jsx)(t.th,{children:`По умолчанию`})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:`$entity`})}),(0,n.jsx)(t.td,{children:`object|string`}),(0,n.jsx)(t.td,{})]})})]}),`
`,(0,n.jsx)(t.h5,{id:`возвращает-5`,children:`Возвращает:`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`array`})})})})}),`
`,(0,n.jsx)(t.p,{children:`Массив объектов сущности, извлеченных из базы данных.
Если данных в хранилище нет, возвращается пустой массив.`}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsx)(`span`,{id:`method_getManager`}),`
`,(0,n.jsx)(t.h3,{id:`getmanager`,children:`getManager`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`public getManager() : \\Cycle\\ORM\\EntityManager`})})})})}),`
`,(0,n.jsx)(t.h5,{id:`возвращает-6`,children:`Возвращает:`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`\\Cycle\\ORM\\EntityManager`})})})})}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsx)(`span`,{id:`method_getOrm`}),`
`,(0,n.jsx)(t.h3,{id:`getorm`,children:`getOrm`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`public getOrm() : \\ORM\\ORM`})})})})}),`
`,(0,n.jsx)(t.h5,{id:`краткое-содержание-7`,children:`Краткое содержание`}),`
`,(0,n.jsx)(t.p,{children:`Возвращает экземпляр ORM, создавая его при необходимости.`}),`
`,(0,n.jsx)(t.h5,{id:`описание-5`,children:`Описание`}),`
`,(0,n.jsxs)(t.p,{children:[`Данный метод вызывает `,(0,n.jsx)(t.code,{children:`generateOrm`}),`, который инициализирует ORM,
используя настраиваемые зависимости, такие как Schema, Factory, Container и CommandGenerator.
Повторные вызовы возвращают уже созданный экземпляр ORM.`]}),`
`,(0,n.jsx)(t.h5,{id:`ошибки-3`,children:`Ошибки:`}),`
`,(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`Тип`}),(0,n.jsx)(t.th,{children:`Описание`})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`\\RuntimeException`}),(0,n.jsx)(t.td,{children:`Если при генерации ORM возникли ошибки.`})]})})]}),`
`,(0,n.jsx)(t.h5,{id:`возвращает-7`,children:`Возвращает:`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`\\ORM\\ORM`})})})})}),`
`,(0,n.jsx)(t.p,{children:`Экземпляр ORM.`}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsx)(`span`,{id:`method_paginate`}),`
`,(0,n.jsx)(t.h3,{id:`paginate`,children:`paginate`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`public paginate(object|string  entity, string  orderby, string  sortby = &#039;DESC&#039;, int  limit = 10, int  page = 1) : \\ORM\\Select`})})})})}),`
`,(0,n.jsx)(t.h5,{id:`краткое-содержание-8`,children:`Краткое содержание`}),`
`,(0,n.jsx)(t.p,{children:`Пагинирует данные из базы данных для указанной сущности.`}),`
`,(0,n.jsx)(t.h5,{id:`описание-6`,children:`Описание`}),`
`,(0,n.jsxs)(t.p,{children:[`Этот метод извлекает данные для заданной сущности, применяет сортировку и пагинацию
на основе переданных параметров и возвращает настроенный объект `,(0,n.jsx)(t.code,{children:`ORM\\Select`}),`.`]}),`
`,(0,n.jsx)(t.h5,{id:`свойства-8`,children:`Свойства:`}),`
`,(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`Название`}),(0,n.jsx)(t.th,{children:`Тип`}),(0,n.jsx)(t.th,{children:`По умолчанию`})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:`$entity`})}),(0,n.jsx)(t.td,{children:`object|string`}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:`$orderby`})}),(0,n.jsx)(t.td,{children:`string`}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:`$sortby`})}),(0,n.jsx)(t.td,{children:`string`}),(0,n.jsx)(t.td,{children:`'DESC'`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:`$limit`})}),(0,n.jsx)(t.td,{children:`int`}),(0,n.jsx)(t.td,{children:`10`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:`$page`})}),(0,n.jsx)(t.td,{children:`int`}),(0,n.jsx)(t.td,{children:`1`})]})]})]}),`
`,(0,n.jsx)(t.h5,{id:`возвращает-8`,children:`Возвращает:`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`\\ORM\\Select`})})})})}),`
`,(0,n.jsx)(t.p,{children:`Настроенный объект Select, содержащий отсортированные и пагинированные данные.`}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsx)(`span`,{id:`method_query`}),`
`,(0,n.jsx)(t.h3,{id:`query`,children:`query`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`public query(string  sql, array  params = []) : \\StatementInterface`})})})})}),`
`,(0,n.jsx)(t.h5,{id:`краткое-содержание-9`,children:`Краткое содержание`}),`
`,(0,n.jsx)(t.p,{children:`Выполняет SQL-запрос с указанными параметрами и возвращает результат.`}),`
`,(0,n.jsx)(t.h5,{id:`описание-7`,children:`Описание`}),`
`,(0,n.jsx)(t.p,{children:`Метод использует объект DatabaseManager для получения соединения с базой данных
и дальнейшего выполнения SQL-запроса. Позволяет передавать параметры для безопасного
выполнения подготовленных запросов.`}),`
`,(0,n.jsx)(t.h5,{id:`свойства-9`,children:`Свойства:`}),`
`,(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`Название`}),(0,n.jsx)(t.th,{children:`Тип`}),(0,n.jsx)(t.th,{children:`По умолчанию`})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:`$sql`})}),(0,n.jsx)(t.td,{children:`string`}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:`$params`})}),(0,n.jsx)(t.td,{children:`array`}),(0,n.jsx)(t.td,{children:`[]`})]})]})]}),`
`,(0,n.jsx)(t.h5,{id:`ошибки-4`,children:`Ошибки:`}),`
`,(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`Тип`}),(0,n.jsx)(t.th,{children:`Описание`})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`\\InvalidArgumentException`}),(0,n.jsx)(t.td,{children:`Может бросить исключение при передаче некорректного SQL-запроса.`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`\\RuntimeException`}),(0,n.jsx)(t.td,{children:`Может бросить исключение, если соединение с базой данных невозможно.`})]})]})]}),`
`,(0,n.jsx)(t.h5,{id:`возвращает-9`,children:`Возвращает:`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`\\StatementInterface`})})})})}),`
`,(0,n.jsx)(t.p,{children:`Результирующий объект, представляющий результат выполнения запроса.`}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsx)(`span`,{id:`method_repository`}),`
`,(0,n.jsx)(t.h3,{id:`repository`,children:`repository`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`public repository(object|string  entity) : \\ORM\\RepositoryInterface`})})})})}),`
`,(0,n.jsx)(t.h5,{id:`краткое-содержание-10`,children:`Краткое содержание`}),`
`,(0,n.jsx)(t.p,{children:`Возвращает репозиторий для указанной сущности или класса сущности.`}),`
`,(0,n.jsx)(t.h5,{id:`описание-8`,children:`Описание`}),`
`,(0,n.jsx)(t.p,{children:`Эта функция принимает объект сущности или строку, представляющую имя класса сущности,
определяет их имя класса и возвращает соответствующий репозиторий, используя ORM.`}),`
`,(0,n.jsx)(t.h5,{id:`свойства-10`,children:`Свойства:`}),`
`,(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`Название`}),(0,n.jsx)(t.th,{children:`Тип`}),(0,n.jsx)(t.th,{children:`По умолчанию`})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:`$entity`})}),(0,n.jsx)(t.td,{children:`object`}),(0,n.jsx)(t.td,{children:`string`})]})})]}),`
`,(0,n.jsx)(t.h5,{id:`ошибки-5`,children:`Ошибки:`}),`
`,(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`Тип`}),(0,n.jsx)(t.th,{children:`Описание`})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`\\ORM\\Exception\\RepositoryNotFoundException`}),(0,n.jsx)(t.td,{children:`Если репозиторий для указанной сущности не найден.`})]})})]}),`
`,(0,n.jsx)(t.h5,{id:`возвращает-10`,children:`Возвращает:`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`\\ORM\\RepositoryInterface`})})})})}),`
`,(0,n.jsx)(t.p,{children:`Интерфейс репозитория для работы с указанной сущностью.`}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsx)(`span`,{id:`method_run`}),`
`,(0,n.jsx)(t.h3,{id:`run`,children:`run`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`public run(object  entity) : \\ORM\\Transaction\\StateInterface`})})})})}),`
`,(0,n.jsx)(t.h5,{id:`краткое-содержание-11`,children:`Краткое содержание`}),`
`,(0,n.jsx)(t.p,{children:`Выполняет сохранение сущности и возвращает состояние транзакции.`}),`
`,(0,n.jsx)(t.h5,{id:`описание-9`,children:`Описание`}),`
`,(0,n.jsxs)(t.p,{children:[`Этот метод обрабатывает сохранение переданного объекта сущности с использованием
связанного `,(0,n.jsx)(t.code,{children:`EntityManager`}),`. Завершает операцию методом `,(0,n.jsx)(t.code,{children:`run()`}),`, который выполняет
транзакцию и возвращает её результирующее состояние.`]}),`
`,(0,n.jsx)(t.h5,{id:`свойства-11`,children:`Свойства:`}),`
`,(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`Название`}),(0,n.jsx)(t.th,{children:`Тип`}),(0,n.jsx)(t.th,{children:`По умолчанию`})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:`$entity`})}),(0,n.jsx)(t.td,{children:`object`}),(0,n.jsx)(t.td,{})]})})]}),`
`,(0,n.jsx)(t.h5,{id:`ошибки-6`,children:`Ошибки:`}),`
`,(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`Тип`}),(0,n.jsx)(t.th,{children:`Описание`})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`\\RuntimeException|\\Throwable`}),(0,n.jsxs)(t.td,{children:[`Исключение выбрасывается, если `,(0,n.jsx)(t.code,{children:`EntityManager`}),` не был корректно инициализирован, что приводит к ошибке сохранения.`]})]})})]}),`
`,(0,n.jsx)(t.h5,{id:`возвращает-11`,children:`Возвращает:`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`\\ORM\\Transaction\\StateInterface`})})})})}),`
`,(0,n.jsx)(t.p,{children:`Результирующее состояние транзакции после
сохранения сущности.`}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsx)(`span`,{id:`method_setManager`}),`
`,(0,n.jsx)(t.h3,{id:`setmanager`,children:`setManager`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`public setManager() : void`})})})})}),`
`,(0,n.jsx)(t.h5,{id:`краткое-содержание-12`,children:`Краткое содержание`}),`
`,(0,n.jsx)(t.p,{children:`Устанавливает экземпляр EntityManager на основе текущего ORM.`}),`
`,(0,n.jsx)(t.h5,{id:`описание-10`,children:`Описание`}),`
`,(0,n.jsx)(t.p,{children:`Метод инициализирует объект EntityManager (менеджера для управления сущностями)
на основе существующего объекта ORM (Object-Relational Mapping).
Если ORM не был предварительно сконфигурирован, это может привести к выбросу ошибок
в процессе создания EntityManager.`}),`
`,(0,n.jsx)(t.h5,{id:`ошибки-7`,children:`Ошибки:`}),`
`,(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`Тип`}),(0,n.jsx)(t.th,{children:`Описание`})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`\\RuntimeException`}),(0,n.jsx)(t.td,{children:`Если объект ORM не был предварительно создан.`})]})})]}),`
`,(0,n.jsx)(t.h5,{id:`возвращает-12`,children:`Возвращает:`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`void`})})})})}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsx)(`span`,{id:`method_update`}),`
`,(0,n.jsx)(t.h3,{id:`update`,children:`update`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`public update(object  entity) : \\ORM\\Transaction\\StateInterface`})})})})}),`
`,(0,n.jsx)(t.h5,{id:`краткое-содержание-13`,children:`Краткое содержание`}),`
`,(0,n.jsx)(t.p,{children:`Обновляет предоставленную сущность в базе данных.`}),`
`,(0,n.jsx)(t.h5,{id:`описание-11`,children:`Описание`}),`
`,(0,n.jsxs)(t.p,{children:[`Эта функция выполняет процесс обновления сущности посредством вызова метода `,(0,n.jsx)(t.code,{children:`run`}),`,
который предполагает выполнение различных ORM-операций, таких, как `,(0,n.jsx)(t.code,{children:`persist`}),`.`]}),`
`,(0,n.jsx)(t.h5,{id:`свойства-12`,children:`Свойства:`}),`
`,(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`Название`}),(0,n.jsx)(t.th,{children:`Тип`}),(0,n.jsx)(t.th,{children:`По умолчанию`})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:`$entity`})}),(0,n.jsx)(t.td,{children:`object`}),(0,n.jsx)(t.td,{})]})})]}),`
`,(0,n.jsx)(t.h5,{id:`ошибки-8`,children:`Ошибки:`}),`
`,(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`Тип`}),(0,n.jsx)(t.th,{children:`Описание`})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`\\ORM\\Exception\\EntityNotManagedException`}),(0,n.jsx)(t.td,{children:`Если сущность не управляется текущим менеджером сущностей.`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`\\ORM\\Exception\\TransactionException|\\Throwable`}),(0,n.jsx)(t.td,{children:`Если транзакция не может быть завершена.`})]})]})]}),`
`,(0,n.jsx)(t.h5,{id:`возвращает-13`,children:`Возвращает:`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`\\ORM\\Transaction\\StateInterface`})})})})}),`
`,(0,n.jsx)(t.p,{children:`Возвращает состояние ORM-транзакции после обновления сущности.`}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsx)(`span`,{id:`method_compileSchema`}),`
`,(0,n.jsx)(t.h3,{id:`compileschema`,children:`compileSchema`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`private compileSchema(\\Registry  registry) : array`})})})})}),`
`,(0,n.jsx)(t.h5,{id:`краткое-содержание-14`,children:`Краткое содержание`}),`
`,(0,n.jsx)(t.p,{children:`Генерирует и компилирует схему на основе переданного реестра и генераторов схем.`}),`
`,(0,n.jsx)(t.h5,{id:`описание-12`,children:`Описание`}),`
`,(0,n.jsxs)(t.p,{children:[`Этот метод обрабатывает пути моделей с использованием глобального объекта `,(0,n.jsx)(t.code,{children:`$MIGRATOR`}),`,
находит классы и использует их для генерации комплексной схемы базы данных.
`,(0,n.jsx)(t.strong,{children:`Примечание`}),`: Метод использует глобальную переменную `,(0,n.jsx)(t.code,{children:`$MIGRATOR`}),`, поэтому убедитесь,
что она правильно инициализирована до вызова метода.`]}),`
`,(0,n.jsx)(t.h5,{id:`свойства-13`,children:`Свойства:`}),`
`,(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`Название`}),(0,n.jsx)(t.th,{children:`Тип`}),(0,n.jsx)(t.th,{children:`По умолчанию`})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:`$registry`})}),(0,n.jsx)(t.td,{children:`\\Registry`}),(0,n.jsx)(t.td,{})]})})]}),`
`,(0,n.jsx)(t.h5,{id:`ошибки-9`,children:`Ошибки:`}),`
`,(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`Тип`}),(0,n.jsx)(t.th,{children:`Описание`})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`\\LogicException`}),(0,n.jsx)(t.td,{children:`Если при компиляции схемы возникли логические ошибки.`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`\\RuntimeException`}),(0,n.jsx)(t.td,{children:`Если невозможно найти файлы моделей или извлечь классы.`})]})]})]}),`
`,(0,n.jsx)(t.h5,{id:`возвращает-14`,children:`Возвращает:`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`array`})})})})}),`
`,(0,n.jsx)(t.p,{children:`Возвращает скомпилированную схему в виде массива.`}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsx)(`span`,{id:`method_generateManager`}),`
`,(0,n.jsx)(t.h3,{id:`generatemanager`,children:`generateManager`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`private generateManager() : \\DatabaseManager`})})})})}),`
`,(0,n.jsx)(t.h5,{id:`краткое-содержание-15`,children:`Краткое содержание`}),`
`,(0,n.jsx)(t.p,{children:`Создает и возвращает экземпляр класса DatabaseManager.`}),`
`,(0,n.jsx)(t.h5,{id:`описание-13`,children:`Описание`}),`
`,(0,n.jsxs)(t.p,{children:[`Если объект `,(0,n.jsx)(t.code,{children:`orm_manager`}),` еще не создан, метод инициирует новый объект
`,(0,n.jsx)(t.code,{children:`DatabaseManager`}),` на основе конфигурации ORM, полученной из метода `,(0,n.jsx)(t.code,{children:`generateOrmConfig`}),`.`]}),`
`,(0,n.jsx)(t.h5,{id:`смотри-так-же`,children:`Смотри так-же:`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`#method_generateOrmConfig`,children:`\\MhDB::generateOrmConfig()`})}),`
`]}),`
`,(0,n.jsx)(t.h5,{id:`ошибки-10`,children:`Ошибки:`}),`
`,(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`Тип`}),(0,n.jsx)(t.th,{children:`Описание`})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`\\RuntimeException`}),(0,n.jsx)(t.td,{children:`Генерируется, если не удается подключить необходимый файл конфигурации базы данных.`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`\\ConfigException`}),(0,n.jsx)(t.td,{children:`Генерируется, если конфигурация базы данных содержит ошибки.`})]})]})]}),`
`,(0,n.jsx)(t.h5,{id:`возвращает-15`,children:`Возвращает:`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`\\DatabaseManager`})})})})}),`
`,(0,n.jsx)(t.p,{children:`Экземпляр менеджера базы данных, конфигурированного с помощью ORM.`}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsx)(`span`,{id:`method_generateOrm`}),`
`,(0,n.jsx)(t.h3,{id:`generateorm`,children:`generateOrm`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`private generateOrm() : \\ORM\\ORM`})})})})}),`
`,(0,n.jsx)(t.h5,{id:`краткое-содержание-16`,children:`Краткое содержание`}),`
`,(0,n.jsx)(t.p,{children:`Создает и возвращает экземпляр ORM (Object-Relational Mapper), используя
предварительно скомпилированную схему, фабрику ORM, менеджер базы данных,
а также генератор команд с поддержкой событий. Если ORM уже инициализирован,
то возвращает ранее созданный объект.`}),`
`,(0,n.jsx)(t.h5,{id:`описание-14`,children:`Описание`}),`
`,(0,n.jsx)(t.p,{children:`Генерация ORM основывается на схеме, созданной методом {@see},
которой, в свою очередь, необходим зарегистрированный реестр сущностей.
Управление базой данных осуществляется через метод {@see}.`}),`
`,(0,n.jsx)(t.h5,{id:`ошибки-11`,children:`Ошибки:`}),`
`,(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`Тип`}),(0,n.jsx)(t.th,{children:`Описание`})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`\\RuntimeException`}),(0,n.jsx)(t.td,{children:`Если генерация схемы или конфигурации базы данных завершилась с ошибкой.`})]})})]}),`
`,(0,n.jsx)(t.h5,{id:`возвращает-16`,children:`Возвращает:`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`\\ORM\\ORM`})})})})}),`
`,(0,n.jsx)(t.p,{children:`Объект ORM (Object-Relational Mapper), предназначенный
для взаимодействия с базой данных.`}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsx)(`span`,{id:`method_generateOrmConfig`}),`
`,(0,n.jsx)(t.h3,{id:`generateormconfig`,children:`generateOrmConfig`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`private generateOrmConfig() : \\Config\\DatabaseConfig`})})})})}),`
`,(0,n.jsx)(t.h5,{id:`краткое-содержание-17`,children:`Краткое содержание`}),`
`,(0,n.jsx)(t.p,{children:`Генерирует и возвращает объект конфигурации базы данных ORM, если он ещё не создан.`}),`
`,(0,n.jsx)(t.h5,{id:`описание-15`,children:`Описание`}),`
`,(0,n.jsx)(t.p,{children:`Функция проверяет, был ли ранее инициализирован объект конфигурации ORM.
Если объект отсутствует, производится его создание на основании глобальных настроек.
Подключается файл конфигурации базы данных и выполняется подготовка данных,
таких как разбиение хоста и порта, а также выборка префикса таблиц в зависимости от типа базы данных.`}),`
`,(0,n.jsx)(t.h5,{id:`возвращает-17`,children:`Возвращает:`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`\\Config\\DatabaseConfig`})})})})}),`
`,(0,n.jsx)(t.p,{children:`Объект конфигурации базы данных ORM.`})]})}function l(e={}){let{wrapper:t}=e.components||{};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}export{a as _markdown,l as default,r as frontmatter,i as lastModified,o as structuredData,s as toc};