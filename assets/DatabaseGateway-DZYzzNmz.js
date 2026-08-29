import{r as e}from"./rolldown-runtime-QTnfLwEv.js";import{t}from"./jsx-runtime-By8HlURe.js";var n=e(t()),r={title:`Класс: DatabaseGateway`,description:`Документация по плагину класс: databasegateway для DLE.`},i=new Date(1788011088e3),a=`

## Краткое содержание: [#краткое-содержание]

Шлюз доступа к базе данных через Cycle ORM.

***

### Свойства [#свойства]

* private $[database\\_manager](#property_database_manager)
* private $[entity\\_manager](#property_entity_manager)

***

### Методы [#методы]

* public [\\_\\_construct()](#method___construct)
* public [getOrm()](#method_getOrm)
* public [setManager()](#method_setManager)
* public [getManager()](#method_getManager)
* public [repository()](#method_repository)
* public [get()](#method_get)
* public [getAll()](#method_getAll)
* public [delete()](#method_delete)
* public [run()](#method_run)
* public [create()](#method_create)
* public [update()](#method_update)
* public [createOrUpdate()](#method_createOrUpdate)
* public [connection()](#method_connection)
* public [query()](#method_query)
* public [paginate()](#method_paginate)
* public [count()](#method_count)
* private [generateOrm()](#method_generateOrm)
* private [generateManager()](#method_generateManager)
* private [generateOrmConfig()](#method_generateOrmConfig)
* private [compileSchema()](#method_compileSchema)
* private [assertDatabaseConstants()](#method_assertDatabaseConstants)
* private [loadDatabaseConfigIfNeeded()](#method_loadDatabaseConfigIfNeeded)

***

### Подробности [#подробности]

* Путь: \`devcraft/src/classes/Database/DatabaseGateway.php\`

***

## Детали [#детали]

### Свойства [#свойства-1]

<span id="property_database_manager" />

#### $database\\_manager [#database_manager]

Шлюз доступа к базе данных через Cycle ORM.

<span id="property_entity_manager" />

#### $entity\\_manager [#entity_manager]

Конфигурация подключения к базе данных.

### Методы [#методы-1]

<span id="method___construct" />

### \\_\\_construct() [#__construct]

Создаёт шлюз с реестром модулей для разрешения путей сущностей.

**С версии:** 171.3.0

**Параметры:**

* \`$registry\` — Реестр DevCraft-модулей.

<span id="method_getOrm" />

### getOrm() [#getorm]

Возвращает экземпляр ORM, создавая его при необходимости.

**С версии:** 171.3.0

**Возвращает:** \`ORM\\ORM\` — Экземпляр ORM.

<span id="method_setManager" />

### setManager() [#setmanager]

Инициализирует менеджер сущностей на основе текущего ORM.

**С версии:** 171.3.0

<span id="method_getManager" />

### getManager() [#getmanager]

Возвращает менеджер сущностей, создавая его при первом обращении.

**С версии:** 171.3.0

**Возвращает:** \`EntityManager\` — Менеджер сущностей ORM.

<span id="method_repository" />

### repository() [#repository]

Возвращает репозиторий для указанной сущности или класса.

**С версии:** 171.3.0

**Параметры:**

* \`$entity\` — Объект сущности или FQCN класса.

**Возвращает:** \`RepositoryInterface\` — Репозиторий Cycle ORM.

<span id="method_get" />

### get() [#get]

Получает сущность по первичному ключу.

**С версии:** 171.3.0

**Параметры:**

* \`$entity\` — Объект сущности или FQCN класса.
* \`$pk\` — Первичный ключ записи.

**Возвращает:** \`object|null\` — Найденная сущность или null.

<span id="method_getAll" />

### getAll() [#getall]

Возвращает все записи указанной сущности.

**С версии:** 171.3.0

**Параметры:**

* \`$entity\` — Объект сущности или FQCN класса.

**Возвращает:** \`array<int,\` — object> Массив сущностей.

<span id="method_delete" />

### delete() [#delete]

Удаляет сущность по первичному ключу.

**С версии:** 171.3.0

**Параметры:**

* \`$entity\` — Объект сущности или FQCN класса.
* \`$pk\` — Первичный ключ записи.

**Возвращает:** \`StateInterface\` — Состояние завершённой транзакции.

<span id="method_run" />

### run() [#run]

Сохраняет сущность и возвращает состояние транзакции.

**С версии:** 171.3.0

**Параметры:**

* \`$entity\` — Сущность для сохранения.

**Возвращает:** \`StateInterface\` — Состояние завершённой транзакции.

<span id="method_create" />

### create() [#create]

Создаёт новую запись сущности в базе данных.

**С версии:** 171.3.0

**Параметры:**

* \`$entity\` — Сущность для создания.

**Возвращает:** \`StateInterface\` — Состояние завершённой транзакции.

<span id="method_update" />

### update() [#update]

Обновляет существующую запись сущности в базе данных.

**С версии:** 171.3.0

**Параметры:**

* \`$entity\` — Сущность для обновления.

**Возвращает:** \`StateInterface\` — Состояние завершённой транзакции.

<span id="method_createOrUpdate" />

### createOrUpdate() [#createorupdate]

Создаёт или обновляет сущность в зависимости от наличия первичного ключа.

**С версии:** 173.3.4

**Параметры:**

* \`$entity\` — Сущность для сохранения.

**Возвращает:** \`StateInterface\` — Состояние завершённой транзакции.

<span id="method_connection" />

### connection() [#connection]

Возвращает интерфейс подключения Cycle Database.

**С версии:** 171.3.0

**Возвращает:** \`DatabaseInterface\` — Активное подключение к БД.

<span id="method_query" />

### query() [#query]

Выполняет SQL-запрос с параметрами.

**С версии:** 171.3.0

**Параметры:**

* \`$sql\` — SQL-запрос с плейсхолдерами.

**Возвращает:** \`StatementInterface\` — Результат выполнения запроса.

<span id="method_paginate" />

### paginate() [#paginate]

Формирует пагинированную выборку для сущности.

**С версии:** 171.3.0

**Параметры:**

* \`$entity\` — Сущность или FQCN класса.
* \`$orderby\` — Поле сортировки.
* \`$sortby\` — Направление сортировки (\`ASC\` или \`DESC\`).
* \`$limit\` — Количество записей на странице.
* \`$page\` — Номер страницы.

**Возвращает:** \`ORM\\Select\` — Настроенный объект выборки.

<span id="method_count" />

### count() [#count]

Подсчитывает количество записей указанной сущности.

**С версии:** 171.3.0

**Параметры:**

* \`$entity\` — Сущность или FQCN класса.

**Возвращает:** \`int\` — Число записей в таблице.

<span id="method_generateOrm" />

### generateOrm() [#generateorm]

Лениво создаёт и кэширует экземпляр ORM.

**С версии:** 171.3.0

**Возвращает:** \`ORM\\ORM\` — Инициализированный ORM.

<span id="method_generateManager" />

### generateManager() [#generatemanager]

Возвращает менеджер базы данных Cycle, создавая его при необходимости.

**С версии:** 171.3.0

**Возвращает:** \`DatabaseManager\` — Менеджер подключений.

<span id="method_generateOrmConfig" />

### generateOrmConfig() [#generateormconfig]

Формирует конфигурацию подключения из констант DLE.

**С версии:** 171.3.0

**Возвращает:** \`Config\\DatabaseConfig\` — Конфигурация Cycle Database.

<span id="method_compileSchema" />

### compileSchema() [#compileschema]

Компилирует схему ORM и возвращает массив схемы вместе с мигратором.

**С версии:** 171.3.0

**Параметры:**

* \`$registry\` — Реестр Cycle Schema.

**Возвращает:** \`array{0: array<string, mixed>, 1: Migrations\\Migrator}\` — Схема и мигратор.

<span id="method_assertDatabaseConstants" />

### assertDatabaseConstants() [#assertdatabaseconstants]

Проверяет наличие обязательных констант подключения к БД.

**С версии:** 171.3.0

<span id="method_loadDatabaseConfigIfNeeded" />

### loadDatabaseConfigIfNeeded() [#loaddatabaseconfigifneeded]

Подключает dbconfig.php DLE, если константы БД ещё не определены.

**С версии:** 171.3.0
`,o={contents:[{heading:`краткое-содержание`,content:`Шлюз доступа к базе данных через Cycle ORM.`},{heading:`свойства`,content:`private $database\\_manager`},{heading:`свойства`,content:`private $entity\\_manager`},{heading:`методы`,content:`public \\_\\_construct()`},{heading:`методы`,content:`public getOrm()`},{heading:`методы`,content:`public setManager()`},{heading:`методы`,content:`public getManager()`},{heading:`методы`,content:`public repository()`},{heading:`методы`,content:`public get()`},{heading:`методы`,content:`public getAll()`},{heading:`методы`,content:`public delete()`},{heading:`методы`,content:`public run()`},{heading:`методы`,content:`public create()`},{heading:`методы`,content:`public update()`},{heading:`методы`,content:`public createOrUpdate()`},{heading:`методы`,content:`public connection()`},{heading:`методы`,content:`public query()`},{heading:`методы`,content:`public paginate()`},{heading:`методы`,content:`public count()`},{heading:`методы`,content:`private generateOrm()`},{heading:`методы`,content:`private generateManager()`},{heading:`методы`,content:`private generateOrmConfig()`},{heading:`методы`,content:`private compileSchema()`},{heading:`методы`,content:`private assertDatabaseConstants()`},{heading:`методы`,content:`private loadDatabaseConfigIfNeeded()`},{heading:`подробности`,content:"Путь: `devcraft/src/classes/Database/DatabaseGateway.php`"},{heading:`database_manager`,content:`Шлюз доступа к базе данных через Cycle ORM.`},{heading:`entity_manager`,content:`Конфигурация подключения к базе данных.`},{heading:`__construct`,content:`Создаёт шлюз с реестром модулей для разрешения путей сущностей.`},{heading:`__construct`,content:`**С версии:** 171.3.0`},{heading:`__construct`,content:`**Параметры:**`},{heading:`__construct`,content:"`$registry` — Реестр DevCraft-модулей."},{heading:`getorm`,content:`Возвращает экземпляр ORM, создавая его при необходимости.`},{heading:`getorm`,content:`**С версии:** 171.3.0`},{heading:`getorm`,content:"**Возвращает:** `ORM\\ORM` — Экземпляр ORM."},{heading:`setmanager`,content:`Инициализирует менеджер сущностей на основе текущего ORM.`},{heading:`setmanager`,content:`**С версии:** 171.3.0`},{heading:`getmanager`,content:`Возвращает менеджер сущностей, создавая его при первом обращении.`},{heading:`getmanager`,content:`**С версии:** 171.3.0`},{heading:`getmanager`,content:"**Возвращает:** `EntityManager` — Менеджер сущностей ORM."},{heading:`repository`,content:`Возвращает репозиторий для указанной сущности или класса.`},{heading:`repository`,content:`**С версии:** 171.3.0`},{heading:`repository`,content:`**Параметры:**`},{heading:`repository`,content:"`$entity` — Объект сущности или FQCN класса."},{heading:`repository`,content:"**Возвращает:** `RepositoryInterface` — Репозиторий Cycle ORM."},{heading:`get`,content:`Получает сущность по первичному ключу.`},{heading:`get`,content:`**С версии:** 171.3.0`},{heading:`get`,content:`**Параметры:**`},{heading:`get`,content:"`$entity` — Объект сущности или FQCN класса."},{heading:`get`,content:"`$pk` — Первичный ключ записи."},{heading:`get`,content:"**Возвращает:** `object|null` — Найденная сущность или null."},{heading:`getall`,content:`Возвращает все записи указанной сущности.`},{heading:`getall`,content:`**С версии:** 171.3.0`},{heading:`getall`,content:`**Параметры:**`},{heading:`getall`,content:"`$entity` — Объект сущности или FQCN класса."},{heading:`getall`,content:"**Возвращает:** `array<int,` — object> Массив сущностей."},{heading:`delete`,content:`Удаляет сущность по первичному ключу.`},{heading:`delete`,content:`**С версии:** 171.3.0`},{heading:`delete`,content:`**Параметры:**`},{heading:`delete`,content:"`$entity` — Объект сущности или FQCN класса."},{heading:`delete`,content:"`$pk` — Первичный ключ записи."},{heading:`delete`,content:"**Возвращает:** `StateInterface` — Состояние завершённой транзакции."},{heading:`run`,content:`Сохраняет сущность и возвращает состояние транзакции.`},{heading:`run`,content:`**С версии:** 171.3.0`},{heading:`run`,content:`**Параметры:**`},{heading:`run`,content:"`$entity` — Сущность для сохранения."},{heading:`run`,content:"**Возвращает:** `StateInterface` — Состояние завершённой транзакции."},{heading:`create`,content:`Создаёт новую запись сущности в базе данных.`},{heading:`create`,content:`**С версии:** 171.3.0`},{heading:`create`,content:`**Параметры:**`},{heading:`create`,content:"`$entity` — Сущность для создания."},{heading:`create`,content:"**Возвращает:** `StateInterface` — Состояние завершённой транзакции."},{heading:`update`,content:`Обновляет существующую запись сущности в базе данных.`},{heading:`update`,content:`**С версии:** 171.3.0`},{heading:`update`,content:`**Параметры:**`},{heading:`update`,content:"`$entity` — Сущность для обновления."},{heading:`update`,content:"**Возвращает:** `StateInterface` — Состояние завершённой транзакции."},{heading:`createorupdate`,content:`Создаёт или обновляет сущность в зависимости от наличия первичного ключа.`},{heading:`createorupdate`,content:`**С версии:** 173.3.4`},{heading:`createorupdate`,content:`**Параметры:**`},{heading:`createorupdate`,content:"`$entity` — Сущность для сохранения."},{heading:`createorupdate`,content:"**Возвращает:** `StateInterface` — Состояние завершённой транзакции."},{heading:`connection`,content:`Возвращает интерфейс подключения Cycle Database.`},{heading:`connection`,content:`**С версии:** 171.3.0`},{heading:`connection`,content:"**Возвращает:** `DatabaseInterface` — Активное подключение к БД."},{heading:`query`,content:`Выполняет SQL-запрос с параметрами.`},{heading:`query`,content:`**С версии:** 171.3.0`},{heading:`query`,content:`**Параметры:**`},{heading:`query`,content:"`$sql` — SQL-запрос с плейсхолдерами."},{heading:`query`,content:"**Возвращает:** `StatementInterface` — Результат выполнения запроса."},{heading:`paginate`,content:`Формирует пагинированную выборку для сущности.`},{heading:`paginate`,content:`**С версии:** 171.3.0`},{heading:`paginate`,content:`**Параметры:**`},{heading:`paginate`,content:"`$entity` — Сущность или FQCN класса."},{heading:`paginate`,content:"`$orderby` — Поле сортировки."},{heading:`paginate`,content:"`$sortby` — Направление сортировки (`ASC` или `DESC`)."},{heading:`paginate`,content:"`$limit` — Количество записей на странице."},{heading:`paginate`,content:"`$page` — Номер страницы."},{heading:`paginate`,content:"**Возвращает:** `ORM\\Select` — Настроенный объект выборки."},{heading:`count`,content:`Подсчитывает количество записей указанной сущности.`},{heading:`count`,content:`**С версии:** 171.3.0`},{heading:`count`,content:`**Параметры:**`},{heading:`count`,content:"`$entity` — Сущность или FQCN класса."},{heading:`count`,content:"**Возвращает:** `int` — Число записей в таблице."},{heading:`generateorm`,content:`Лениво создаёт и кэширует экземпляр ORM.`},{heading:`generateorm`,content:`**С версии:** 171.3.0`},{heading:`generateorm`,content:"**Возвращает:** `ORM\\ORM` — Инициализированный ORM."},{heading:`generatemanager`,content:`Возвращает менеджер базы данных Cycle, создавая его при необходимости.`},{heading:`generatemanager`,content:`**С версии:** 171.3.0`},{heading:`generatemanager`,content:"**Возвращает:** `DatabaseManager` — Менеджер подключений."},{heading:`generateormconfig`,content:`Формирует конфигурацию подключения из констант DLE.`},{heading:`generateormconfig`,content:`**С версии:** 171.3.0`},{heading:`generateormconfig`,content:"**Возвращает:** `Config\\DatabaseConfig` — Конфигурация Cycle Database."},{heading:`compileschema`,content:`Компилирует схему ORM и возвращает массив схемы вместе с мигратором.`},{heading:`compileschema`,content:`**С версии:** 171.3.0`},{heading:`compileschema`,content:`**Параметры:**`},{heading:`compileschema`,content:"`$registry` — Реестр Cycle Schema."},{heading:`compileschema`,content:"**Возвращает:** `array{0: array<string, mixed>, 1: Migrations\\Migrator}` — Схема и мигратор."},{heading:`assertdatabaseconstants`,content:`Проверяет наличие обязательных констант подключения к БД.`},{heading:`assertdatabaseconstants`,content:`**С версии:** 171.3.0`},{heading:`loaddatabaseconfigifneeded`,content:`Подключает dbconfig.php DLE, если константы БД ещё не определены.`},{heading:`loaddatabaseconfigifneeded`,content:`**С версии:** 171.3.0`}],headings:[{id:`краткое-содержание`,content:`Краткое содержание:`},{id:`свойства`,content:`Свойства`},{id:`методы`,content:`Методы`},{id:`подробности`,content:`Подробности`},{id:`детали`,content:`Детали`},{id:`свойства-1`,content:`Свойства`},{id:`database_manager`,content:`$database_manager`},{id:`entity_manager`,content:`$entity_manager`},{id:`методы-1`,content:`Методы`},{id:`__construct`,content:`\\__construct()`},{id:`getorm`,content:`getOrm()`},{id:`setmanager`,content:`setManager()`},{id:`getmanager`,content:`getManager()`},{id:`repository`,content:`repository()`},{id:`get`,content:`get()`},{id:`getall`,content:`getAll()`},{id:`delete`,content:`delete()`},{id:`run`,content:`run()`},{id:`create`,content:`create()`},{id:`update`,content:`update()`},{id:`createorupdate`,content:`createOrUpdate()`},{id:`connection`,content:`connection()`},{id:`query`,content:`query()`},{id:`paginate`,content:`paginate()`},{id:`count`,content:`count()`},{id:`generateorm`,content:`generateOrm()`},{id:`generatemanager`,content:`generateManager()`},{id:`generateormconfig`,content:`generateOrmConfig()`},{id:`compileschema`,content:`compileSchema()`},{id:`assertdatabaseconstants`,content:`assertDatabaseConstants()`},{id:`loaddatabaseconfigifneeded`,content:`loadDatabaseConfigIfNeeded()`}]},s=[{depth:2,url:`#краткое-содержание`,title:(0,n.jsx)(n.Fragment,{children:`Краткое содержание:`})},{depth:3,url:`#свойства`,title:(0,n.jsx)(n.Fragment,{children:`Свойства`})},{depth:3,url:`#методы`,title:(0,n.jsx)(n.Fragment,{children:`Методы`})},{depth:3,url:`#подробности`,title:(0,n.jsx)(n.Fragment,{children:`Подробности`})},{depth:2,url:`#детали`,title:(0,n.jsx)(n.Fragment,{children:`Детали`})},{depth:3,url:`#свойства-1`,title:(0,n.jsx)(n.Fragment,{children:`Свойства`})},{depth:4,url:`#database_manager`,title:(0,n.jsx)(n.Fragment,{children:`$database_manager`})},{depth:4,url:`#entity_manager`,title:(0,n.jsx)(n.Fragment,{children:`$entity_manager`})},{depth:3,url:`#методы-1`,title:(0,n.jsx)(n.Fragment,{children:`Методы`})},{depth:3,url:`#__construct`,title:(0,n.jsx)(n.Fragment,{children:`__construct()`})},{depth:3,url:`#getorm`,title:(0,n.jsx)(n.Fragment,{children:`getOrm()`})},{depth:3,url:`#setmanager`,title:(0,n.jsx)(n.Fragment,{children:`setManager()`})},{depth:3,url:`#getmanager`,title:(0,n.jsx)(n.Fragment,{children:`getManager()`})},{depth:3,url:`#repository`,title:(0,n.jsx)(n.Fragment,{children:`repository()`})},{depth:3,url:`#get`,title:(0,n.jsx)(n.Fragment,{children:`get()`})},{depth:3,url:`#getall`,title:(0,n.jsx)(n.Fragment,{children:`getAll()`})},{depth:3,url:`#delete`,title:(0,n.jsx)(n.Fragment,{children:`delete()`})},{depth:3,url:`#run`,title:(0,n.jsx)(n.Fragment,{children:`run()`})},{depth:3,url:`#create`,title:(0,n.jsx)(n.Fragment,{children:`create()`})},{depth:3,url:`#update`,title:(0,n.jsx)(n.Fragment,{children:`update()`})},{depth:3,url:`#createorupdate`,title:(0,n.jsx)(n.Fragment,{children:`createOrUpdate()`})},{depth:3,url:`#connection`,title:(0,n.jsx)(n.Fragment,{children:`connection()`})},{depth:3,url:`#query`,title:(0,n.jsx)(n.Fragment,{children:`query()`})},{depth:3,url:`#paginate`,title:(0,n.jsx)(n.Fragment,{children:`paginate()`})},{depth:3,url:`#count`,title:(0,n.jsx)(n.Fragment,{children:`count()`})},{depth:3,url:`#generateorm`,title:(0,n.jsx)(n.Fragment,{children:`generateOrm()`})},{depth:3,url:`#generatemanager`,title:(0,n.jsx)(n.Fragment,{children:`generateManager()`})},{depth:3,url:`#generateormconfig`,title:(0,n.jsx)(n.Fragment,{children:`generateOrmConfig()`})},{depth:3,url:`#compileschema`,title:(0,n.jsx)(n.Fragment,{children:`compileSchema()`})},{depth:3,url:`#assertdatabaseconstants`,title:(0,n.jsx)(n.Fragment,{children:`assertDatabaseConstants()`})},{depth:3,url:`#loaddatabaseconfigifneeded`,title:(0,n.jsx)(n.Fragment,{children:`loadDatabaseConfigIfNeeded()`})}];function c(e){let t={a:`a`,code:`code`,h2:`h2`,h3:`h3`,h4:`h4`,hr:`hr`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h2,{id:`краткое-содержание`,children:`Краткое содержание:`}),`
`,(0,n.jsx)(t.p,{children:`Шлюз доступа к базе данных через Cycle ORM.`}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsx)(t.h3,{id:`свойства`,children:`Свойства`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[`private $`,(0,n.jsx)(t.a,{href:`#property_database_manager`,children:`database_manager`})]}),`
`,(0,n.jsxs)(t.li,{children:[`private $`,(0,n.jsx)(t.a,{href:`#property_entity_manager`,children:`entity_manager`})]}),`
`]}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsx)(t.h3,{id:`методы`,children:`Методы`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method___construct`,children:`__construct()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method_getOrm`,children:`getOrm()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method_setManager`,children:`setManager()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method_getManager`,children:`getManager()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method_repository`,children:`repository()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method_get`,children:`get()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method_getAll`,children:`getAll()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method_delete`,children:`delete()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method_run`,children:`run()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method_create`,children:`create()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method_update`,children:`update()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method_createOrUpdate`,children:`createOrUpdate()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method_connection`,children:`connection()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method_query`,children:`query()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method_paginate`,children:`paginate()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method_count`,children:`count()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`private `,(0,n.jsx)(t.a,{href:`#method_generateOrm`,children:`generateOrm()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`private `,(0,n.jsx)(t.a,{href:`#method_generateManager`,children:`generateManager()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`private `,(0,n.jsx)(t.a,{href:`#method_generateOrmConfig`,children:`generateOrmConfig()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`private `,(0,n.jsx)(t.a,{href:`#method_compileSchema`,children:`compileSchema()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`private `,(0,n.jsx)(t.a,{href:`#method_assertDatabaseConstants`,children:`assertDatabaseConstants()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`private `,(0,n.jsx)(t.a,{href:`#method_loadDatabaseConfigIfNeeded`,children:`loadDatabaseConfigIfNeeded()`})]}),`
`]}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsx)(t.h3,{id:`подробности`,children:`Подробности`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[`Путь: `,(0,n.jsx)(t.code,{children:`devcraft/src/classes/Database/DatabaseGateway.php`})]}),`
`]}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsx)(t.h2,{id:`детали`,children:`Детали`}),`
`,(0,n.jsx)(t.h3,{id:`свойства-1`,children:`Свойства`}),`
`,(0,n.jsx)(`span`,{id:`property_database_manager`}),`
`,(0,n.jsx)(t.h4,{id:`database_manager`,children:`$database_manager`}),`
`,(0,n.jsx)(t.p,{children:`Шлюз доступа к базе данных через Cycle ORM.`}),`
`,(0,n.jsx)(`span`,{id:`property_entity_manager`}),`
`,(0,n.jsx)(t.h4,{id:`entity_manager`,children:`$entity_manager`}),`
`,(0,n.jsx)(t.p,{children:`Конфигурация подключения к базе данных.`}),`
`,(0,n.jsx)(t.h3,{id:`методы-1`,children:`Методы`}),`
`,(0,n.jsx)(`span`,{id:`method___construct`}),`
`,(0,n.jsx)(t.h3,{id:`__construct`,children:`__construct()`}),`
`,(0,n.jsx)(t.p,{children:`Создаёт шлюз с реестром модулей для разрешения путей сущностей.`}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 171.3.0`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$registry`}),` — Реестр DevCraft-модулей.`]}),`
`]}),`
`,(0,n.jsx)(`span`,{id:`method_getOrm`}),`
`,(0,n.jsx)(t.h3,{id:`getorm`,children:`getOrm()`}),`
`,(0,n.jsx)(t.p,{children:`Возвращает экземпляр ORM, создавая его при необходимости.`}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 171.3.0`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`ORM\\ORM`}),` — Экземпляр ORM.`]}),`
`,(0,n.jsx)(`span`,{id:`method_setManager`}),`
`,(0,n.jsx)(t.h3,{id:`setmanager`,children:`setManager()`}),`
`,(0,n.jsx)(t.p,{children:`Инициализирует менеджер сущностей на основе текущего ORM.`}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 171.3.0`]}),`
`,(0,n.jsx)(`span`,{id:`method_getManager`}),`
`,(0,n.jsx)(t.h3,{id:`getmanager`,children:`getManager()`}),`
`,(0,n.jsx)(t.p,{children:`Возвращает менеджер сущностей, создавая его при первом обращении.`}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 171.3.0`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`EntityManager`}),` — Менеджер сущностей ORM.`]}),`
`,(0,n.jsx)(`span`,{id:`method_repository`}),`
`,(0,n.jsx)(t.h3,{id:`repository`,children:`repository()`}),`
`,(0,n.jsx)(t.p,{children:`Возвращает репозиторий для указанной сущности или класса.`}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 171.3.0`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$entity`}),` — Объект сущности или FQCN класса.`]}),`
`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`RepositoryInterface`}),` — Репозиторий Cycle ORM.`]}),`
`,(0,n.jsx)(`span`,{id:`method_get`}),`
`,(0,n.jsx)(t.h3,{id:`get`,children:`get()`}),`
`,(0,n.jsx)(t.p,{children:`Получает сущность по первичному ключу.`}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 171.3.0`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$entity`}),` — Объект сущности или FQCN класса.`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$pk`}),` — Первичный ключ записи.`]}),`
`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`object|null`}),` — Найденная сущность или null.`]}),`
`,(0,n.jsx)(`span`,{id:`method_getAll`}),`
`,(0,n.jsx)(t.h3,{id:`getall`,children:`getAll()`}),`
`,(0,n.jsx)(t.p,{children:`Возвращает все записи указанной сущности.`}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 171.3.0`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$entity`}),` — Объект сущности или FQCN класса.`]}),`
`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`array<int,`}),` — object> Массив сущностей.`]}),`
`,(0,n.jsx)(`span`,{id:`method_delete`}),`
`,(0,n.jsx)(t.h3,{id:`delete`,children:`delete()`}),`
`,(0,n.jsx)(t.p,{children:`Удаляет сущность по первичному ключу.`}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 171.3.0`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$entity`}),` — Объект сущности или FQCN класса.`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$pk`}),` — Первичный ключ записи.`]}),`
`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`StateInterface`}),` — Состояние завершённой транзакции.`]}),`
`,(0,n.jsx)(`span`,{id:`method_run`}),`
`,(0,n.jsx)(t.h3,{id:`run`,children:`run()`}),`
`,(0,n.jsx)(t.p,{children:`Сохраняет сущность и возвращает состояние транзакции.`}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 171.3.0`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$entity`}),` — Сущность для сохранения.`]}),`
`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`StateInterface`}),` — Состояние завершённой транзакции.`]}),`
`,(0,n.jsx)(`span`,{id:`method_create`}),`
`,(0,n.jsx)(t.h3,{id:`create`,children:`create()`}),`
`,(0,n.jsx)(t.p,{children:`Создаёт новую запись сущности в базе данных.`}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 171.3.0`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$entity`}),` — Сущность для создания.`]}),`
`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`StateInterface`}),` — Состояние завершённой транзакции.`]}),`
`,(0,n.jsx)(`span`,{id:`method_update`}),`
`,(0,n.jsx)(t.h3,{id:`update`,children:`update()`}),`
`,(0,n.jsx)(t.p,{children:`Обновляет существующую запись сущности в базе данных.`}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 171.3.0`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$entity`}),` — Сущность для обновления.`]}),`
`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`StateInterface`}),` — Состояние завершённой транзакции.`]}),`
`,(0,n.jsx)(`span`,{id:`method_createOrUpdate`}),`
`,(0,n.jsx)(t.h3,{id:`createorupdate`,children:`createOrUpdate()`}),`
`,(0,n.jsx)(t.p,{children:`Создаёт или обновляет сущность в зависимости от наличия первичного ключа.`}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 173.3.4`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$entity`}),` — Сущность для сохранения.`]}),`
`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`StateInterface`}),` — Состояние завершённой транзакции.`]}),`
`,(0,n.jsx)(`span`,{id:`method_connection`}),`
`,(0,n.jsx)(t.h3,{id:`connection`,children:`connection()`}),`
`,(0,n.jsx)(t.p,{children:`Возвращает интерфейс подключения Cycle Database.`}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 171.3.0`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`DatabaseInterface`}),` — Активное подключение к БД.`]}),`
`,(0,n.jsx)(`span`,{id:`method_query`}),`
`,(0,n.jsx)(t.h3,{id:`query`,children:`query()`}),`
`,(0,n.jsx)(t.p,{children:`Выполняет SQL-запрос с параметрами.`}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 171.3.0`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$sql`}),` — SQL-запрос с плейсхолдерами.`]}),`
`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`StatementInterface`}),` — Результат выполнения запроса.`]}),`
`,(0,n.jsx)(`span`,{id:`method_paginate`}),`
`,(0,n.jsx)(t.h3,{id:`paginate`,children:`paginate()`}),`
`,(0,n.jsx)(t.p,{children:`Формирует пагинированную выборку для сущности.`}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 171.3.0`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$entity`}),` — Сущность или FQCN класса.`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$orderby`}),` — Поле сортировки.`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$sortby`}),` — Направление сортировки (`,(0,n.jsx)(t.code,{children:`ASC`}),` или `,(0,n.jsx)(t.code,{children:`DESC`}),`).`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$limit`}),` — Количество записей на странице.`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$page`}),` — Номер страницы.`]}),`
`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`ORM\\Select`}),` — Настроенный объект выборки.`]}),`
`,(0,n.jsx)(`span`,{id:`method_count`}),`
`,(0,n.jsx)(t.h3,{id:`count`,children:`count()`}),`
`,(0,n.jsx)(t.p,{children:`Подсчитывает количество записей указанной сущности.`}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 171.3.0`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$entity`}),` — Сущность или FQCN класса.`]}),`
`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`int`}),` — Число записей в таблице.`]}),`
`,(0,n.jsx)(`span`,{id:`method_generateOrm`}),`
`,(0,n.jsx)(t.h3,{id:`generateorm`,children:`generateOrm()`}),`
`,(0,n.jsx)(t.p,{children:`Лениво создаёт и кэширует экземпляр ORM.`}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 171.3.0`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`ORM\\ORM`}),` — Инициализированный ORM.`]}),`
`,(0,n.jsx)(`span`,{id:`method_generateManager`}),`
`,(0,n.jsx)(t.h3,{id:`generatemanager`,children:`generateManager()`}),`
`,(0,n.jsx)(t.p,{children:`Возвращает менеджер базы данных Cycle, создавая его при необходимости.`}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 171.3.0`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`DatabaseManager`}),` — Менеджер подключений.`]}),`
`,(0,n.jsx)(`span`,{id:`method_generateOrmConfig`}),`
`,(0,n.jsx)(t.h3,{id:`generateormconfig`,children:`generateOrmConfig()`}),`
`,(0,n.jsx)(t.p,{children:`Формирует конфигурацию подключения из констант DLE.`}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 171.3.0`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`Config\\DatabaseConfig`}),` — Конфигурация Cycle Database.`]}),`
`,(0,n.jsx)(`span`,{id:`method_compileSchema`}),`
`,(0,n.jsx)(t.h3,{id:`compileschema`,children:`compileSchema()`}),`
`,(0,n.jsx)(t.p,{children:`Компилирует схему ORM и возвращает массив схемы вместе с мигратором.`}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 171.3.0`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$registry`}),` — Реестр Cycle Schema.`]}),`
`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`array{0: array<string, mixed>, 1: Migrations\\Migrator}`}),` — Схема и мигратор.`]}),`
`,(0,n.jsx)(`span`,{id:`method_assertDatabaseConstants`}),`
`,(0,n.jsx)(t.h3,{id:`assertdatabaseconstants`,children:`assertDatabaseConstants()`}),`
`,(0,n.jsx)(t.p,{children:`Проверяет наличие обязательных констант подключения к БД.`}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 171.3.0`]}),`
`,(0,n.jsx)(`span`,{id:`method_loadDatabaseConfigIfNeeded`}),`
`,(0,n.jsx)(t.h3,{id:`loaddatabaseconfigifneeded`,children:`loadDatabaseConfigIfNeeded()`}),`
`,(0,n.jsx)(t.p,{children:`Подключает dbconfig.php DLE, если константы БД ещё не определены.`}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 171.3.0`]})]})}function l(e={}){let{wrapper:t}=e.components||{};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}export{a as _markdown,l as default,r as frontmatter,i as lastModified,o as structuredData,s as toc};