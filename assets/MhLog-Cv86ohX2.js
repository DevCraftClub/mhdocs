import{r as e}from"./rolldown-runtime-QTnfLwEv.js";import{t}from"./jsx-runtime-By8HlURe.js";var n=e(t()),r={title:`Класс: MhLog`,description:`Документация по плагину класс: mhlog для DLE.`},i=new Date(1787654208e3),a=`

## Краткое содержание: [#краткое-содержание]

Базовый абстрактный класс модели, представляющий типовую сущность базы данных.

## Описание: [#описание]

Класс используется для создания типовых моделей с общими свойствами, такими как
уникальный идентификатор (\`id\`), дата создания (\`createdAt\`) и дата последнего обновления (\`updatedAt\`).
Предназначен для расширения в конкретных классах моделей, которые реализуют бизнес-логику
и определяют дополнительные свойства и методы.

## Свойства: [#свойства]

* **\`id\`** — уникальный первичный ключ записи.
* **\`createdAt\`** — дата и время создания записи.
* **\`updatedAt\`** — дата последнего обновления записи (null, если данных об изменениях нет).

## Методы: [#методы]

Класс предоставляет доступные методы для получения базовой информации о записи:

* \`getId()\` — возвращает уникальный идентификатор сущности.
* \`getCreatedAt()\` — возвращает дату и время создания записи.
* \`getUpdatedAt()\` — возвращает дату последнего обновления или null, если обновления не было.
* \`getColumnVal(string $name)\` — возвращает значение конкретного столбца по его имени (реализуется в наследниках).

## Аннотации: [#аннотации]

Класс использует аннотации для указания схемы базы данных с помощью библиотеки \`Cycle ORM\`.
Например:

* \`#[Column()]\` определяет параметры поля таблицы.
* \`#[Index()]\` задаёт индексированные столбцы (например, \`created_at\` для быстрого поиска).

## Расширяемость: [#расширяемость]

* Класс **абстрактный**. Для его использования необходимо создать наследника и, как минимум,
  реализовать метод \`getColumnVal()\`, который позволяет получить значение столбца.

***

### Свойства [#свойства-1]

* protected $[createdAt](#property_createdAt)
* protected $[id](#property_id)
* protected $[updatedAt](#property_updatedAt)
* private $[fn\\_name](#property_fn_name)
* private $[log\\_type](#property_log_type)
* private $[message](#property_message)
* private $[plugin](#property_plugin)
* private $[time](#property_time)
* private $[uuid](#property_uuid)

***

### Методы [#методы-1]

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

***

### Подробности [#подробности]

* Путь: engine/inc/maharder/\\_modules/admin/models/MhLog.php

***

## Свойства [#свойства-2]

<span id="property_createdAt" />

#### protected $createdAt : \\DateTimeImmutable [#protected-createdat--datetimeimmutable]

***

**Краткое содержание**

Дата и время создания записи. Автоматически проставляется при создании.

**Тип:** \\DateTimeImmutable

**Подробности:**

* Унаследовано от: [\\BasisModel](./BasisModel)

<span id="property_id" />

#### protected $id : int [#protected-id--int]

***

**Краткое содержание**

ID сущности (уникальный первичный ключ).

**Тип:** <abbr title="int">Целое число</abbr>

**Подробности:**

* Унаследовано от: [\\BasisModel](./BasisModel)

<span id="property_updatedAt" />

#### protected $updatedAt : ?\\DateTimeImmutable [#protected-updatedat--datetimeimmutable]

***

**Краткое содержание**

Дата и время последнего обновления записи. Может быть равна null.

***Описание***

Автоматически обновляется при изменении записи.

**Тип:** <abbr title="?\\DateTimeImmutable">Дата и время или null</abbr>

**Подробности:**

* Унаследовано от: [\\BasisModel](./BasisModel)

<span id="property_fn_name" />

#### private $fn\\_name : string [#private-fn_name--string]

***

**Тип:** <abbr title="string">Текст</abbr>

<span id="property_log_type" />

#### private $log\\_type : string [#private-log_type--string]

***

**Тип:** <abbr title="string">Текст</abbr>

<span id="property_message" />

#### private $message : string [#private-message--string]

***

**Тип:** <abbr title="string">Текст</abbr>

<span id="property_plugin" />

#### private $plugin : string [#private-plugin--string]

***

**Тип:** <abbr title="string">Текст</abbr>

<span id="property_time" />

#### private $time : \\DateTimeImmutable [#private-time--datetimeimmutable]

***

**Тип:** \\DateTimeImmutable

<span id="property_uuid" />

#### private $uuid : \\Ramsey\\Uuid\\UuidInterface [#private-uuid--ramseyuuiduuidinterface]

***

**Тип:** \\Ramsey\\Uuid\\UuidInterface

**Подробности:**

***

## Методы [#методы-2]

<span id="method_getColumnVal" />

### getColumnVal [#getcolumnval]

\`\`\`
public getColumnVal(string  name) : mixed
\`\`\`

##### Краткое содержание [#краткое-содержание-1]

Получить значение столбца по его имени.

##### Свойства: [#свойства-3]

| Название  | Тип    | По умолчанию |
| --------- | ------ | ------------ |
| **$name** | string |              |

##### Возвращает: [#возвращает]

\`\`\`
mixed
\`\`\`

Значение столбца.

***

<span id="method_getCreatedAt" />

### getCreatedAt [#getcreatedat]

\`\`\`
public getCreatedAt() : \\DateTimeImmutable
\`\`\`

##### Краткое содержание [#краткое-содержание-2]

Получить дату и время создания записи.

##### Возвращает: [#возвращает-1]

\`\`\`
\\DateTimeImmutable
\`\`\`

Дата и время создания записи.

***

<span id="method_getFnName" />

### getFnName [#getfnname]

\`\`\`
public getFnName() : string
\`\`\`

##### Возвращает: [#возвращает-2]

\`\`\`
string
\`\`\`

***

<span id="method_getId" />

### getId [#getid]

\`\`\`
public getId() : int
\`\`\`

##### Краткое содержание [#краткое-содержание-3]

Получить уникальный идентификатор сущности.

##### Возвращает: [#возвращает-3]

\`\`\`
int
\`\`\`

Уникальный идентификатор сущности.

***

<span id="method_getLogType" />

### getLogType [#getlogtype]

\`\`\`
public getLogType() : string
\`\`\`

##### Возвращает: [#возвращает-4]

\`\`\`
string
\`\`\`

***

<span id="method_getMessage" />

### getMessage [#getmessage]

\`\`\`
public getMessage() : string
\`\`\`

##### Возвращает: [#возвращает-5]

\`\`\`
string
\`\`\`

***

<span id="method_getPlugin" />

### getPlugin [#getplugin]

\`\`\`
public getPlugin() : string
\`\`\`

##### Возвращает: [#возвращает-6]

\`\`\`
string
\`\`\`

***

<span id="method_getTime" />

### getTime [#gettime]

\`\`\`
public getTime() : \\DateTimeImmutable
\`\`\`

##### Возвращает: [#возвращает-7]

\`\`\`
\\DateTimeImmutable
\`\`\`

***

<span id="method_getUpdatedAt" />

### getUpdatedAt [#getupdatedat]

\`\`\`
public getUpdatedAt() : \\DateTimeImmutable|null
\`\`\`

##### Краткое содержание [#краткое-содержание-4]

Получить дату и время последнего обновления записи, если доступно.

##### Возвращает: [#возвращает-8]

\`\`\`
\\DateTimeImmutable|null
\`\`\`

Дата и время последнего обновления или null, если обновления не было.

***

<span id="method_getUuid" />

### getUuid [#getuuid]

\`\`\`
public getUuid() : \\Ramsey\\Uuid\\UuidInterface
\`\`\`

##### Возвращает: [#возвращает-9]

\`\`\`
\\Ramsey\\Uuid\\UuidInterface
\`\`\`

***

<span id="method_setFnName" />

### setFnName [#setfnname]

\`\`\`
public setFnName(string  fn_name) : void
\`\`\`

##### Свойства: [#свойства-4]

| Название      | Тип    | По умолчанию |
| ------------- | ------ | ------------ |
| **$fn\\_name** | string |              |

##### Возвращает: [#возвращает-10]

\`\`\`
void
\`\`\`

***

<span id="method_setLogType" />

### setLogType [#setlogtype]

\`\`\`
public setLogType(string  log_type) : void
\`\`\`

##### Свойства: [#свойства-5]

| Название       | Тип    | По умолчанию |
| -------------- | ------ | ------------ |
| **$log\\_type** | string |              |

##### Возвращает: [#возвращает-11]

\`\`\`
void
\`\`\`

***

<span id="method_setMessage" />

### setMessage [#setmessage]

\`\`\`
public setMessage(string  message) : void
\`\`\`

##### Свойства: [#свойства-6]

| Название     | Тип    | По умолчанию |
| ------------ | ------ | ------------ |
| **$message** | string |              |

##### Возвращает: [#возвращает-12]

\`\`\`
void
\`\`\`

***

<span id="method_setPlugin" />

### setPlugin [#setplugin]

\`\`\`
public setPlugin(string  plugin) : void
\`\`\`

##### Свойства: [#свойства-7]

| Название    | Тип    | По умолчанию |
| ----------- | ------ | ------------ |
| **$plugin** | string |              |

##### Возвращает: [#возвращает-13]

\`\`\`
void
\`\`\`

***

<span id="method_setTime" />

### setTime [#settime]

\`\`\`
public setTime(\\DateTimeImmutable  time) : void
\`\`\`

##### Свойства: [#свойства-8]

| Название  | Тип                | По умолчанию |
| --------- | ------------------ | ------------ |
| **$time** | \\DateTimeImmutable |              |

##### Возвращает: [#возвращает-14]

\`\`\`
void
\`\`\`

***

<span id="method_setUuid" />

### setUuid [#setuuid]

\`\`\`
public setUuid(\\Ramsey\\Uuid\\UuidInterface  uuid) : void
\`\`\`

##### Свойства: [#свойства-9]

| Название  | Тип                        | По умолчанию |
| --------- | -------------------------- | ------------ |
| **$uuid** | \\Ramsey\\Uuid\\UuidInterface |              |

##### Возвращает: [#возвращает-15]

\`\`\`
void
\`\`\`
`,o={contents:[{heading:`краткое-содержание`,content:`Базовый абстрактный класс модели, представляющий типовую сущность базы данных.`},{heading:`описание`,content:"Класс используется для создания типовых моделей с общими свойствами, такими как\nуникальный идентификатор (`id`), дата создания (`createdAt`) и дата последнего обновления (`updatedAt`).\nПредназначен для расширения в конкретных классах моделей, которые реализуют бизнес-логику\nи определяют дополнительные свойства и методы."},{heading:`свойства`,content:"**`id`** — уникальный первичный ключ записи."},{heading:`свойства`,content:"**`createdAt`** — дата и время создания записи."},{heading:`свойства`,content:"**`updatedAt`** — дата последнего обновления записи (null, если данных об изменениях нет)."},{heading:`методы`,content:`Класс предоставляет доступные методы для получения базовой информации о записи:`},{heading:`методы`,content:"`getId()` — возвращает уникальный идентификатор сущности."},{heading:`методы`,content:"`getCreatedAt()` — возвращает дату и время создания записи."},{heading:`методы`,content:"`getUpdatedAt()` — возвращает дату последнего обновления или null, если обновления не было."},{heading:`методы`,content:"`getColumnVal(string $name)` — возвращает значение конкретного столбца по его имени (реализуется в наследниках)."},{heading:`аннотации`,content:"Класс использует аннотации для указания схемы базы данных с помощью библиотеки `Cycle ORM`.\nНапример:"},{heading:`аннотации`,content:"`#[Column()]` определяет параметры поля таблицы."},{heading:`аннотации`,content:"`#[Index()]` задаёт индексированные столбцы (например, `created_at` для быстрого поиска)."},{heading:`расширяемость`,content:"Класс **абстрактный**. Для его использования необходимо создать наследника и, как минимум,\nреализовать метод `getColumnVal()`, который позволяет получить значение столбца."},{heading:`свойства-1`,content:`protected $createdAt`},{heading:`свойства-1`,content:`protected $id`},{heading:`свойства-1`,content:`protected $updatedAt`},{heading:`свойства-1`,content:`private $fn\\_name`},{heading:`свойства-1`,content:`private $log\\_type`},{heading:`свойства-1`,content:`private $message`},{heading:`свойства-1`,content:`private $plugin`},{heading:`свойства-1`,content:`private $time`},{heading:`свойства-1`,content:`private $uuid`},{heading:`методы-1`,content:`public getColumnVal()`},{heading:`методы-1`,content:`public getCreatedAt()`},{heading:`методы-1`,content:`public getFnName()`},{heading:`методы-1`,content:`public getId()`},{heading:`методы-1`,content:`public getLogType()`},{heading:`методы-1`,content:`public getMessage()`},{heading:`методы-1`,content:`public getPlugin()`},{heading:`методы-1`,content:`public getTime()`},{heading:`методы-1`,content:`public getUpdatedAt()`},{heading:`методы-1`,content:`public getUuid()`},{heading:`методы-1`,content:`public setFnName()`},{heading:`методы-1`,content:`public setLogType()`},{heading:`методы-1`,content:`public setMessage()`},{heading:`методы-1`,content:`public setPlugin()`},{heading:`методы-1`,content:`public setTime()`},{heading:`методы-1`,content:`public setUuid()`},{heading:`подробности`,content:`Путь: engine/inc/maharder/\\_modules/admin/models/MhLog.php`},{heading:`protected-createdat--datetimeimmutable`,content:`**Краткое содержание**`},{heading:`protected-createdat--datetimeimmutable`,content:`Дата и время создания записи. Автоматически проставляется при создании.`},{heading:`protected-createdat--datetimeimmutable`,content:`**Тип:** \\DateTimeImmutable`},{heading:`protected-createdat--datetimeimmutable`,content:`**Подробности:**`},{heading:`protected-createdat--datetimeimmutable`,content:`Унаследовано от: \\BasisModel`},{heading:`protected-id--int`,content:`**Краткое содержание**`},{heading:`protected-id--int`,content:`ID сущности (уникальный первичный ключ).`},{heading:`protected-id--int`,content:`**Тип:** Целое число`},{heading:`protected-id--int`,content:`**Подробности:**`},{heading:`protected-id--int`,content:`Унаследовано от: \\BasisModel`},{heading:`protected-updatedat--datetimeimmutable`,content:`**Краткое содержание**`},{heading:`protected-updatedat--datetimeimmutable`,content:`Дата и время последнего обновления записи. Может быть равна null.`},{heading:`protected-updatedat--datetimeimmutable`,content:`***Описание***`},{heading:`protected-updatedat--datetimeimmutable`,content:`Автоматически обновляется при изменении записи.`},{heading:`protected-updatedat--datetimeimmutable`,content:`**Тип:** Дата и время или null`},{heading:`protected-updatedat--datetimeimmutable`,content:`**Подробности:**`},{heading:`protected-updatedat--datetimeimmutable`,content:`Унаследовано от: \\BasisModel`},{heading:`private-fn_name--string`,content:`**Тип:** Текст`},{heading:`private-log_type--string`,content:`**Тип:** Текст`},{heading:`private-message--string`,content:`**Тип:** Текст`},{heading:`private-plugin--string`,content:`**Тип:** Текст`},{heading:`private-time--datetimeimmutable`,content:`**Тип:** \\DateTimeImmutable`},{heading:`private-uuid--ramseyuuiduuidinterface`,content:`**Тип:** \\Ramsey\\Uuid\\UuidInterface`},{heading:`private-uuid--ramseyuuiduuidinterface`,content:`**Подробности:**`},{heading:`краткое-содержание-1`,content:`Получить значение столбца по его имени.`},{heading:`свойства-3`,content:`Название`},{heading:`свойства-3`,content:`Тип`},{heading:`свойства-3`,content:`По умолчанию`},{heading:`свойства-3`,content:`**$name**`},{heading:`свойства-3`,content:`string`},{heading:`возвращает`,content:`Значение столбца.`},{heading:`краткое-содержание-2`,content:`Получить дату и время создания записи.`},{heading:`возвращает-1`,content:`Дата и время создания записи.`},{heading:`краткое-содержание-3`,content:`Получить уникальный идентификатор сущности.`},{heading:`возвращает-3`,content:`Уникальный идентификатор сущности.`},{heading:`краткое-содержание-4`,content:`Получить дату и время последнего обновления записи, если доступно.`},{heading:`возвращает-8`,content:`Дата и время последнего обновления или null, если обновления не было.`},{heading:`свойства-4`,content:`Название`},{heading:`свойства-4`,content:`Тип`},{heading:`свойства-4`,content:`По умолчанию`},{heading:`свойства-4`,content:`**$fn\\_name**`},{heading:`свойства-4`,content:`string`},{heading:`свойства-5`,content:`Название`},{heading:`свойства-5`,content:`Тип`},{heading:`свойства-5`,content:`По умолчанию`},{heading:`свойства-5`,content:`**$log\\_type**`},{heading:`свойства-5`,content:`string`},{heading:`свойства-6`,content:`Название`},{heading:`свойства-6`,content:`Тип`},{heading:`свойства-6`,content:`По умолчанию`},{heading:`свойства-6`,content:`**$message**`},{heading:`свойства-6`,content:`string`},{heading:`свойства-7`,content:`Название`},{heading:`свойства-7`,content:`Тип`},{heading:`свойства-7`,content:`По умолчанию`},{heading:`свойства-7`,content:`**$plugin**`},{heading:`свойства-7`,content:`string`},{heading:`свойства-8`,content:`Название`},{heading:`свойства-8`,content:`Тип`},{heading:`свойства-8`,content:`По умолчанию`},{heading:`свойства-8`,content:`**$time**`},{heading:`свойства-8`,content:`\\DateTimeImmutable`},{heading:`свойства-9`,content:`Название`},{heading:`свойства-9`,content:`Тип`},{heading:`свойства-9`,content:`По умолчанию`},{heading:`свойства-9`,content:`**$uuid**`},{heading:`свойства-9`,content:`\\Ramsey\\Uuid\\UuidInterface`}],headings:[{id:`краткое-содержание`,content:`Краткое содержание:`},{id:`описание`,content:`Описание:`},{id:`свойства`,content:`Свойства:`},{id:`методы`,content:`Методы:`},{id:`аннотации`,content:`Аннотации:`},{id:`расширяемость`,content:`Расширяемость:`},{id:`свойства-1`,content:`Свойства`},{id:`методы-1`,content:`Методы`},{id:`подробности`,content:`Подробности`},{id:`свойства-2`,content:`Свойства`},{id:`protected-createdat--datetimeimmutable`,content:`protected $createdAt : \\DateTimeImmutable`},{id:`protected-id--int`,content:`protected $id : int`},{id:`protected-updatedat--datetimeimmutable`,content:`protected $updatedAt : ?\\DateTimeImmutable`},{id:`private-fn_name--string`,content:`private $fn_name : string`},{id:`private-log_type--string`,content:`private $log_type : string`},{id:`private-message--string`,content:`private $message : string`},{id:`private-plugin--string`,content:`private $plugin : string`},{id:`private-time--datetimeimmutable`,content:`private $time : \\DateTimeImmutable`},{id:`private-uuid--ramseyuuiduuidinterface`,content:`private $uuid : \\Ramsey\\Uuid\\UuidInterface`},{id:`методы-2`,content:`Методы`},{id:`getcolumnval`,content:`getColumnVal`},{id:`краткое-содержание-1`,content:`Краткое содержание`},{id:`свойства-3`,content:`Свойства:`},{id:`возвращает`,content:`Возвращает:`},{id:`getcreatedat`,content:`getCreatedAt`},{id:`краткое-содержание-2`,content:`Краткое содержание`},{id:`возвращает-1`,content:`Возвращает:`},{id:`getfnname`,content:`getFnName`},{id:`возвращает-2`,content:`Возвращает:`},{id:`getid`,content:`getId`},{id:`краткое-содержание-3`,content:`Краткое содержание`},{id:`возвращает-3`,content:`Возвращает:`},{id:`getlogtype`,content:`getLogType`},{id:`возвращает-4`,content:`Возвращает:`},{id:`getmessage`,content:`getMessage`},{id:`возвращает-5`,content:`Возвращает:`},{id:`getplugin`,content:`getPlugin`},{id:`возвращает-6`,content:`Возвращает:`},{id:`gettime`,content:`getTime`},{id:`возвращает-7`,content:`Возвращает:`},{id:`getupdatedat`,content:`getUpdatedAt`},{id:`краткое-содержание-4`,content:`Краткое содержание`},{id:`возвращает-8`,content:`Возвращает:`},{id:`getuuid`,content:`getUuid`},{id:`возвращает-9`,content:`Возвращает:`},{id:`setfnname`,content:`setFnName`},{id:`свойства-4`,content:`Свойства:`},{id:`возвращает-10`,content:`Возвращает:`},{id:`setlogtype`,content:`setLogType`},{id:`свойства-5`,content:`Свойства:`},{id:`возвращает-11`,content:`Возвращает:`},{id:`setmessage`,content:`setMessage`},{id:`свойства-6`,content:`Свойства:`},{id:`возвращает-12`,content:`Возвращает:`},{id:`setplugin`,content:`setPlugin`},{id:`свойства-7`,content:`Свойства:`},{id:`возвращает-13`,content:`Возвращает:`},{id:`settime`,content:`setTime`},{id:`свойства-8`,content:`Свойства:`},{id:`возвращает-14`,content:`Возвращает:`},{id:`setuuid`,content:`setUuid`},{id:`свойства-9`,content:`Свойства:`},{id:`возвращает-15`,content:`Возвращает:`}]},s=[{depth:2,url:`#краткое-содержание`,title:(0,n.jsx)(n.Fragment,{children:`Краткое содержание:`})},{depth:2,url:`#описание`,title:(0,n.jsx)(n.Fragment,{children:`Описание:`})},{depth:2,url:`#свойства`,title:(0,n.jsx)(n.Fragment,{children:`Свойства:`})},{depth:2,url:`#методы`,title:(0,n.jsx)(n.Fragment,{children:`Методы:`})},{depth:2,url:`#аннотации`,title:(0,n.jsx)(n.Fragment,{children:`Аннотации:`})},{depth:2,url:`#расширяемость`,title:(0,n.jsx)(n.Fragment,{children:`Расширяемость:`})},{depth:3,url:`#свойства-1`,title:(0,n.jsx)(n.Fragment,{children:`Свойства`})},{depth:3,url:`#методы-1`,title:(0,n.jsx)(n.Fragment,{children:`Методы`})},{depth:3,url:`#подробности`,title:(0,n.jsx)(n.Fragment,{children:`Подробности`})},{depth:2,url:`#свойства-2`,title:(0,n.jsx)(n.Fragment,{children:`Свойства`})},{depth:4,url:`#protected-createdat--datetimeimmutable`,title:(0,n.jsx)(n.Fragment,{children:`protected $createdAt : \\DateTimeImmutable`})},{depth:4,url:`#protected-id--int`,title:(0,n.jsx)(n.Fragment,{children:`protected $id : int`})},{depth:4,url:`#protected-updatedat--datetimeimmutable`,title:(0,n.jsx)(n.Fragment,{children:`protected $updatedAt : ?\\DateTimeImmutable`})},{depth:4,url:`#private-fn_name--string`,title:(0,n.jsx)(n.Fragment,{children:`private $fn_name : string`})},{depth:4,url:`#private-log_type--string`,title:(0,n.jsx)(n.Fragment,{children:`private $log_type : string`})},{depth:4,url:`#private-message--string`,title:(0,n.jsx)(n.Fragment,{children:`private $message : string`})},{depth:4,url:`#private-plugin--string`,title:(0,n.jsx)(n.Fragment,{children:`private $plugin : string`})},{depth:4,url:`#private-time--datetimeimmutable`,title:(0,n.jsx)(n.Fragment,{children:`private $time : \\DateTimeImmutable`})},{depth:4,url:`#private-uuid--ramseyuuiduuidinterface`,title:(0,n.jsx)(n.Fragment,{children:`private $uuid : \\Ramsey\\Uuid\\UuidInterface`})},{depth:2,url:`#методы-2`,title:(0,n.jsx)(n.Fragment,{children:`Методы`})},{depth:3,url:`#getcolumnval`,title:(0,n.jsx)(n.Fragment,{children:`getColumnVal`})},{depth:5,url:`#краткое-содержание-1`,title:(0,n.jsx)(n.Fragment,{children:`Краткое содержание`})},{depth:5,url:`#свойства-3`,title:(0,n.jsx)(n.Fragment,{children:`Свойства:`})},{depth:5,url:`#возвращает`,title:(0,n.jsx)(n.Fragment,{children:`Возвращает:`})},{depth:3,url:`#getcreatedat`,title:(0,n.jsx)(n.Fragment,{children:`getCreatedAt`})},{depth:5,url:`#краткое-содержание-2`,title:(0,n.jsx)(n.Fragment,{children:`Краткое содержание`})},{depth:5,url:`#возвращает-1`,title:(0,n.jsx)(n.Fragment,{children:`Возвращает:`})},{depth:3,url:`#getfnname`,title:(0,n.jsx)(n.Fragment,{children:`getFnName`})},{depth:5,url:`#возвращает-2`,title:(0,n.jsx)(n.Fragment,{children:`Возвращает:`})},{depth:3,url:`#getid`,title:(0,n.jsx)(n.Fragment,{children:`getId`})},{depth:5,url:`#краткое-содержание-3`,title:(0,n.jsx)(n.Fragment,{children:`Краткое содержание`})},{depth:5,url:`#возвращает-3`,title:(0,n.jsx)(n.Fragment,{children:`Возвращает:`})},{depth:3,url:`#getlogtype`,title:(0,n.jsx)(n.Fragment,{children:`getLogType`})},{depth:5,url:`#возвращает-4`,title:(0,n.jsx)(n.Fragment,{children:`Возвращает:`})},{depth:3,url:`#getmessage`,title:(0,n.jsx)(n.Fragment,{children:`getMessage`})},{depth:5,url:`#возвращает-5`,title:(0,n.jsx)(n.Fragment,{children:`Возвращает:`})},{depth:3,url:`#getplugin`,title:(0,n.jsx)(n.Fragment,{children:`getPlugin`})},{depth:5,url:`#возвращает-6`,title:(0,n.jsx)(n.Fragment,{children:`Возвращает:`})},{depth:3,url:`#gettime`,title:(0,n.jsx)(n.Fragment,{children:`getTime`})},{depth:5,url:`#возвращает-7`,title:(0,n.jsx)(n.Fragment,{children:`Возвращает:`})},{depth:3,url:`#getupdatedat`,title:(0,n.jsx)(n.Fragment,{children:`getUpdatedAt`})},{depth:5,url:`#краткое-содержание-4`,title:(0,n.jsx)(n.Fragment,{children:`Краткое содержание`})},{depth:5,url:`#возвращает-8`,title:(0,n.jsx)(n.Fragment,{children:`Возвращает:`})},{depth:3,url:`#getuuid`,title:(0,n.jsx)(n.Fragment,{children:`getUuid`})},{depth:5,url:`#возвращает-9`,title:(0,n.jsx)(n.Fragment,{children:`Возвращает:`})},{depth:3,url:`#setfnname`,title:(0,n.jsx)(n.Fragment,{children:`setFnName`})},{depth:5,url:`#свойства-4`,title:(0,n.jsx)(n.Fragment,{children:`Свойства:`})},{depth:5,url:`#возвращает-10`,title:(0,n.jsx)(n.Fragment,{children:`Возвращает:`})},{depth:3,url:`#setlogtype`,title:(0,n.jsx)(n.Fragment,{children:`setLogType`})},{depth:5,url:`#свойства-5`,title:(0,n.jsx)(n.Fragment,{children:`Свойства:`})},{depth:5,url:`#возвращает-11`,title:(0,n.jsx)(n.Fragment,{children:`Возвращает:`})},{depth:3,url:`#setmessage`,title:(0,n.jsx)(n.Fragment,{children:`setMessage`})},{depth:5,url:`#свойства-6`,title:(0,n.jsx)(n.Fragment,{children:`Свойства:`})},{depth:5,url:`#возвращает-12`,title:(0,n.jsx)(n.Fragment,{children:`Возвращает:`})},{depth:3,url:`#setplugin`,title:(0,n.jsx)(n.Fragment,{children:`setPlugin`})},{depth:5,url:`#свойства-7`,title:(0,n.jsx)(n.Fragment,{children:`Свойства:`})},{depth:5,url:`#возвращает-13`,title:(0,n.jsx)(n.Fragment,{children:`Возвращает:`})},{depth:3,url:`#settime`,title:(0,n.jsx)(n.Fragment,{children:`setTime`})},{depth:5,url:`#свойства-8`,title:(0,n.jsx)(n.Fragment,{children:`Свойства:`})},{depth:5,url:`#возвращает-14`,title:(0,n.jsx)(n.Fragment,{children:`Возвращает:`})},{depth:3,url:`#setuuid`,title:(0,n.jsx)(n.Fragment,{children:`setUuid`})},{depth:5,url:`#свойства-9`,title:(0,n.jsx)(n.Fragment,{children:`Свойства:`})},{depth:5,url:`#возвращает-15`,title:(0,n.jsx)(n.Fragment,{children:`Возвращает:`})}];function c(e){let t={a:`a`,code:`code`,em:`em`,h2:`h2`,h3:`h3`,h4:`h4`,h5:`h5`,hr:`hr`,li:`li`,p:`p`,pre:`pre`,span:`span`,strong:`strong`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,ul:`ul`,...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h2,{id:`краткое-содержание`,children:`Краткое содержание:`}),`
`,(0,n.jsx)(t.p,{children:`Базовый абстрактный класс модели, представляющий типовую сущность базы данных.`}),`
`,(0,n.jsx)(t.h2,{id:`описание`,children:`Описание:`}),`
`,(0,n.jsxs)(t.p,{children:[`Класс используется для создания типовых моделей с общими свойствами, такими как
уникальный идентификатор (`,(0,n.jsx)(t.code,{children:`id`}),`), дата создания (`,(0,n.jsx)(t.code,{children:`createdAt`}),`) и дата последнего обновления (`,(0,n.jsx)(t.code,{children:`updatedAt`}),`).
Предназначен для расширения в конкретных классах моделей, которые реализуют бизнес-логику
и определяют дополнительные свойства и методы.`]}),`
`,(0,n.jsx)(t.h2,{id:`свойства`,children:`Свойства:`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:(0,n.jsx)(t.code,{children:`id`})}),` — уникальный первичный ключ записи.`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:(0,n.jsx)(t.code,{children:`createdAt`})}),` — дата и время создания записи.`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:(0,n.jsx)(t.code,{children:`updatedAt`})}),` — дата последнего обновления записи (null, если данных об изменениях нет).`]}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`методы`,children:`Методы:`}),`
`,(0,n.jsx)(t.p,{children:`Класс предоставляет доступные методы для получения базовой информации о записи:`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`getId()`}),` — возвращает уникальный идентификатор сущности.`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`getCreatedAt()`}),` — возвращает дату и время создания записи.`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`getUpdatedAt()`}),` — возвращает дату последнего обновления или null, если обновления не было.`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`getColumnVal(string $name)`}),` — возвращает значение конкретного столбца по его имени (реализуется в наследниках).`]}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`аннотации`,children:`Аннотации:`}),`
`,(0,n.jsxs)(t.p,{children:[`Класс использует аннотации для указания схемы базы данных с помощью библиотеки `,(0,n.jsx)(t.code,{children:`Cycle ORM`}),`.
Например:`]}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`#[Column()]`}),` определяет параметры поля таблицы.`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`#[Index()]`}),` задаёт индексированные столбцы (например, `,(0,n.jsx)(t.code,{children:`created_at`}),` для быстрого поиска).`]}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`расширяемость`,children:`Расширяемость:`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[`Класс `,(0,n.jsx)(t.strong,{children:`абстрактный`}),`. Для его использования необходимо создать наследника и, как минимум,
реализовать метод `,(0,n.jsx)(t.code,{children:`getColumnVal()`}),`, который позволяет получить значение столбца.`]}),`
`]}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsx)(t.h3,{id:`свойства-1`,children:`Свойства`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[`protected $`,(0,n.jsx)(t.a,{href:`#property_createdAt`,children:`createdAt`})]}),`
`,(0,n.jsxs)(t.li,{children:[`protected $`,(0,n.jsx)(t.a,{href:`#property_id`,children:`id`})]}),`
`,(0,n.jsxs)(t.li,{children:[`protected $`,(0,n.jsx)(t.a,{href:`#property_updatedAt`,children:`updatedAt`})]}),`
`,(0,n.jsxs)(t.li,{children:[`private $`,(0,n.jsx)(t.a,{href:`#property_fn_name`,children:`fn_name`})]}),`
`,(0,n.jsxs)(t.li,{children:[`private $`,(0,n.jsx)(t.a,{href:`#property_log_type`,children:`log_type`})]}),`
`,(0,n.jsxs)(t.li,{children:[`private $`,(0,n.jsx)(t.a,{href:`#property_message`,children:`message`})]}),`
`,(0,n.jsxs)(t.li,{children:[`private $`,(0,n.jsx)(t.a,{href:`#property_plugin`,children:`plugin`})]}),`
`,(0,n.jsxs)(t.li,{children:[`private $`,(0,n.jsx)(t.a,{href:`#property_time`,children:`time`})]}),`
`,(0,n.jsxs)(t.li,{children:[`private $`,(0,n.jsx)(t.a,{href:`#property_uuid`,children:`uuid`})]}),`
`]}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsx)(t.h3,{id:`методы-1`,children:`Методы`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method_getColumnVal`,children:`getColumnVal()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method_getCreatedAt`,children:`getCreatedAt()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method_getFnName`,children:`getFnName()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method_getId`,children:`getId()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method_getLogType`,children:`getLogType()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method_getMessage`,children:`getMessage()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method_getPlugin`,children:`getPlugin()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method_getTime`,children:`getTime()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method_getUpdatedAt`,children:`getUpdatedAt()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method_getUuid`,children:`getUuid()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method_setFnName`,children:`setFnName()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method_setLogType`,children:`setLogType()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method_setMessage`,children:`setMessage()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method_setPlugin`,children:`setPlugin()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method_setTime`,children:`setTime()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method_setUuid`,children:`setUuid()`})]}),`
`]}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsx)(t.h3,{id:`подробности`,children:`Подробности`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsx)(t.li,{children:`Путь: engine/inc/maharder/_modules/admin/models/MhLog.php`}),`
`]}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsx)(t.h2,{id:`свойства-2`,children:`Свойства`}),`
`,(0,n.jsx)(`span`,{id:`property_createdAt`}),`
`,(0,n.jsx)(t.h4,{id:`protected-createdat--datetimeimmutable`,children:`protected $createdAt : \\DateTimeImmutable`}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Краткое содержание`})}),`
`,(0,n.jsx)(t.p,{children:`Дата и время создания записи. Автоматически проставляется при создании.`}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Тип:`}),` \\DateTimeImmutable`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Подробности:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[`Унаследовано от: `,(0,n.jsx)(t.a,{href:`./BasisModel`,children:`\\BasisModel`})]}),`
`]}),`
`,(0,n.jsx)(`span`,{id:`property_id`}),`
`,(0,n.jsx)(t.h4,{id:`protected-id--int`,children:`protected $id : int`}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Краткое содержание`})}),`
`,(0,n.jsx)(t.p,{children:`ID сущности (уникальный первичный ключ).`}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Тип:`}),` `,(0,n.jsx)(`abbr`,{title:`int`,children:`Целое число`})]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Подробности:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[`Унаследовано от: `,(0,n.jsx)(t.a,{href:`./BasisModel`,children:`\\BasisModel`})]}),`
`]}),`
`,(0,n.jsx)(`span`,{id:`property_updatedAt`}),`
`,(0,n.jsx)(t.h4,{id:`protected-updatedat--datetimeimmutable`,children:`protected $updatedAt : ?\\DateTimeImmutable`}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Краткое содержание`})}),`
`,(0,n.jsx)(t.p,{children:`Дата и время последнего обновления записи. Может быть равна null.`}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.em,{children:(0,n.jsx)(t.strong,{children:`Описание`})})}),`
`,(0,n.jsx)(t.p,{children:`Автоматически обновляется при изменении записи.`}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Тип:`}),` `,(0,n.jsx)(`abbr`,{title:`?\\DateTimeImmutable`,children:`Дата и время или null`})]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Подробности:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[`Унаследовано от: `,(0,n.jsx)(t.a,{href:`./BasisModel`,children:`\\BasisModel`})]}),`
`]}),`
`,(0,n.jsx)(`span`,{id:`property_fn_name`}),`
`,(0,n.jsx)(t.h4,{id:`private-fn_name--string`,children:`private $fn_name : string`}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Тип:`}),` `,(0,n.jsx)(`abbr`,{title:`string`,children:`Текст`})]}),`
`,(0,n.jsx)(`span`,{id:`property_log_type`}),`
`,(0,n.jsx)(t.h4,{id:`private-log_type--string`,children:`private $log_type : string`}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Тип:`}),` `,(0,n.jsx)(`abbr`,{title:`string`,children:`Текст`})]}),`
`,(0,n.jsx)(`span`,{id:`property_message`}),`
`,(0,n.jsx)(t.h4,{id:`private-message--string`,children:`private $message : string`}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Тип:`}),` `,(0,n.jsx)(`abbr`,{title:`string`,children:`Текст`})]}),`
`,(0,n.jsx)(`span`,{id:`property_plugin`}),`
`,(0,n.jsx)(t.h4,{id:`private-plugin--string`,children:`private $plugin : string`}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Тип:`}),` `,(0,n.jsx)(`abbr`,{title:`string`,children:`Текст`})]}),`
`,(0,n.jsx)(`span`,{id:`property_time`}),`
`,(0,n.jsx)(t.h4,{id:`private-time--datetimeimmutable`,children:`private $time : \\DateTimeImmutable`}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Тип:`}),` \\DateTimeImmutable`]}),`
`,(0,n.jsx)(`span`,{id:`property_uuid`}),`
`,(0,n.jsx)(t.h4,{id:`private-uuid--ramseyuuiduuidinterface`,children:`private $uuid : \\Ramsey\\Uuid\\UuidInterface`}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Тип:`}),` \\Ramsey\\Uuid\\UuidInterface`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Подробности:`})}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsx)(t.h2,{id:`методы-2`,children:`Методы`}),`
`,(0,n.jsx)(`span`,{id:`method_getColumnVal`}),`
`,(0,n.jsx)(t.h3,{id:`getcolumnval`,children:`getColumnVal`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`public getColumnVal(string  name) : mixed`})})})})}),`
`,(0,n.jsx)(t.h5,{id:`краткое-содержание-1`,children:`Краткое содержание`}),`
`,(0,n.jsx)(t.p,{children:`Получить значение столбца по его имени.`}),`
`,(0,n.jsx)(t.h5,{id:`свойства-3`,children:`Свойства:`}),`
`,(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`Название`}),(0,n.jsx)(t.th,{children:`Тип`}),(0,n.jsx)(t.th,{children:`По умолчанию`})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:`$name`})}),(0,n.jsx)(t.td,{children:`string`}),(0,n.jsx)(t.td,{})]})})]}),`
`,(0,n.jsx)(t.h5,{id:`возвращает`,children:`Возвращает:`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`mixed`})})})})}),`
`,(0,n.jsx)(t.p,{children:`Значение столбца.`}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsx)(`span`,{id:`method_getCreatedAt`}),`
`,(0,n.jsx)(t.h3,{id:`getcreatedat`,children:`getCreatedAt`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`public getCreatedAt() : \\DateTimeImmutable`})})})})}),`
`,(0,n.jsx)(t.h5,{id:`краткое-содержание-2`,children:`Краткое содержание`}),`
`,(0,n.jsx)(t.p,{children:`Получить дату и время создания записи.`}),`
`,(0,n.jsx)(t.h5,{id:`возвращает-1`,children:`Возвращает:`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`\\DateTimeImmutable`})})})})}),`
`,(0,n.jsx)(t.p,{children:`Дата и время создания записи.`}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsx)(`span`,{id:`method_getFnName`}),`
`,(0,n.jsx)(t.h3,{id:`getfnname`,children:`getFnName`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`public getFnName() : string`})})})})}),`
`,(0,n.jsx)(t.h5,{id:`возвращает-2`,children:`Возвращает:`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`string`})})})})}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsx)(`span`,{id:`method_getId`}),`
`,(0,n.jsx)(t.h3,{id:`getid`,children:`getId`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`public getId() : int`})})})})}),`
`,(0,n.jsx)(t.h5,{id:`краткое-содержание-3`,children:`Краткое содержание`}),`
`,(0,n.jsx)(t.p,{children:`Получить уникальный идентификатор сущности.`}),`
`,(0,n.jsx)(t.h5,{id:`возвращает-3`,children:`Возвращает:`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`int`})})})})}),`
`,(0,n.jsx)(t.p,{children:`Уникальный идентификатор сущности.`}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsx)(`span`,{id:`method_getLogType`}),`
`,(0,n.jsx)(t.h3,{id:`getlogtype`,children:`getLogType`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`public getLogType() : string`})})})})}),`
`,(0,n.jsx)(t.h5,{id:`возвращает-4`,children:`Возвращает:`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`string`})})})})}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsx)(`span`,{id:`method_getMessage`}),`
`,(0,n.jsx)(t.h3,{id:`getmessage`,children:`getMessage`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`public getMessage() : string`})})})})}),`
`,(0,n.jsx)(t.h5,{id:`возвращает-5`,children:`Возвращает:`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`string`})})})})}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsx)(`span`,{id:`method_getPlugin`}),`
`,(0,n.jsx)(t.h3,{id:`getplugin`,children:`getPlugin`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`public getPlugin() : string`})})})})}),`
`,(0,n.jsx)(t.h5,{id:`возвращает-6`,children:`Возвращает:`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`string`})})})})}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsx)(`span`,{id:`method_getTime`}),`
`,(0,n.jsx)(t.h3,{id:`gettime`,children:`getTime`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`public getTime() : \\DateTimeImmutable`})})})})}),`
`,(0,n.jsx)(t.h5,{id:`возвращает-7`,children:`Возвращает:`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`\\DateTimeImmutable`})})})})}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsx)(`span`,{id:`method_getUpdatedAt`}),`
`,(0,n.jsx)(t.h3,{id:`getupdatedat`,children:`getUpdatedAt`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`public getUpdatedAt() : \\DateTimeImmutable|null`})})})})}),`
`,(0,n.jsx)(t.h5,{id:`краткое-содержание-4`,children:`Краткое содержание`}),`
`,(0,n.jsx)(t.p,{children:`Получить дату и время последнего обновления записи, если доступно.`}),`
`,(0,n.jsx)(t.h5,{id:`возвращает-8`,children:`Возвращает:`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`\\DateTimeImmutable|null`})})})})}),`
`,(0,n.jsx)(t.p,{children:`Дата и время последнего обновления или null, если обновления не было.`}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsx)(`span`,{id:`method_getUuid`}),`
`,(0,n.jsx)(t.h3,{id:`getuuid`,children:`getUuid`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`public getUuid() : \\Ramsey\\Uuid\\UuidInterface`})})})})}),`
`,(0,n.jsx)(t.h5,{id:`возвращает-9`,children:`Возвращает:`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`\\Ramsey\\Uuid\\UuidInterface`})})})})}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsx)(`span`,{id:`method_setFnName`}),`
`,(0,n.jsx)(t.h3,{id:`setfnname`,children:`setFnName`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`public setFnName(string  fn_name) : void`})})})})}),`
`,(0,n.jsx)(t.h5,{id:`свойства-4`,children:`Свойства:`}),`
`,(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`Название`}),(0,n.jsx)(t.th,{children:`Тип`}),(0,n.jsx)(t.th,{children:`По умолчанию`})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:`$fn_name`})}),(0,n.jsx)(t.td,{children:`string`}),(0,n.jsx)(t.td,{})]})})]}),`
`,(0,n.jsx)(t.h5,{id:`возвращает-10`,children:`Возвращает:`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`void`})})})})}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsx)(`span`,{id:`method_setLogType`}),`
`,(0,n.jsx)(t.h3,{id:`setlogtype`,children:`setLogType`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`public setLogType(string  log_type) : void`})})})})}),`
`,(0,n.jsx)(t.h5,{id:`свойства-5`,children:`Свойства:`}),`
`,(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`Название`}),(0,n.jsx)(t.th,{children:`Тип`}),(0,n.jsx)(t.th,{children:`По умолчанию`})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:`$log_type`})}),(0,n.jsx)(t.td,{children:`string`}),(0,n.jsx)(t.td,{})]})})]}),`
`,(0,n.jsx)(t.h5,{id:`возвращает-11`,children:`Возвращает:`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`void`})})})})}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsx)(`span`,{id:`method_setMessage`}),`
`,(0,n.jsx)(t.h3,{id:`setmessage`,children:`setMessage`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`public setMessage(string  message) : void`})})})})}),`
`,(0,n.jsx)(t.h5,{id:`свойства-6`,children:`Свойства:`}),`
`,(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`Название`}),(0,n.jsx)(t.th,{children:`Тип`}),(0,n.jsx)(t.th,{children:`По умолчанию`})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:`$message`})}),(0,n.jsx)(t.td,{children:`string`}),(0,n.jsx)(t.td,{})]})})]}),`
`,(0,n.jsx)(t.h5,{id:`возвращает-12`,children:`Возвращает:`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`void`})})})})}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsx)(`span`,{id:`method_setPlugin`}),`
`,(0,n.jsx)(t.h3,{id:`setplugin`,children:`setPlugin`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`public setPlugin(string  plugin) : void`})})})})}),`
`,(0,n.jsx)(t.h5,{id:`свойства-7`,children:`Свойства:`}),`
`,(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`Название`}),(0,n.jsx)(t.th,{children:`Тип`}),(0,n.jsx)(t.th,{children:`По умолчанию`})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:`$plugin`})}),(0,n.jsx)(t.td,{children:`string`}),(0,n.jsx)(t.td,{})]})})]}),`
`,(0,n.jsx)(t.h5,{id:`возвращает-13`,children:`Возвращает:`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`void`})})})})}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsx)(`span`,{id:`method_setTime`}),`
`,(0,n.jsx)(t.h3,{id:`settime`,children:`setTime`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`public setTime(\\DateTimeImmutable  time) : void`})})})})}),`
`,(0,n.jsx)(t.h5,{id:`свойства-8`,children:`Свойства:`}),`
`,(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`Название`}),(0,n.jsx)(t.th,{children:`Тип`}),(0,n.jsx)(t.th,{children:`По умолчанию`})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:`$time`})}),(0,n.jsx)(t.td,{children:`\\DateTimeImmutable`}),(0,n.jsx)(t.td,{})]})})]}),`
`,(0,n.jsx)(t.h5,{id:`возвращает-14`,children:`Возвращает:`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`void`})})})})}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsx)(`span`,{id:`method_setUuid`}),`
`,(0,n.jsx)(t.h3,{id:`setuuid`,children:`setUuid`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`public setUuid(\\Ramsey\\Uuid\\UuidInterface  uuid) : void`})})})})}),`
`,(0,n.jsx)(t.h5,{id:`свойства-9`,children:`Свойства:`}),`
`,(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`Название`}),(0,n.jsx)(t.th,{children:`Тип`}),(0,n.jsx)(t.th,{children:`По умолчанию`})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:`$uuid`})}),(0,n.jsx)(t.td,{children:`\\Ramsey\\Uuid\\UuidInterface`}),(0,n.jsx)(t.td,{})]})})]}),`
`,(0,n.jsx)(t.h5,{id:`возвращает-15`,children:`Возвращает:`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`void`})})})})})]})}function l(e={}){let{wrapper:t}=e.components||{};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}export{a as _markdown,l as default,r as frontmatter,i as lastModified,o as structuredData,s as toc};