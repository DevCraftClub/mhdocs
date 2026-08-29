import{r as e}from"./rolldown-runtime-QTnfLwEv.js";import{t}from"./jsx-runtime-By8HlURe.js";var n=e(t()),r={title:`Абстрактный класс: BasisModel`,description:`Документация по плагину абстрактный класс: basismodel для DLE.`},i=new Date(1788011088e3),a=`

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

***

### Методы [#методы-1]

* public [getColumnVal()](#method_getColumnVal)
* public [getCreatedAt()](#method_getCreatedAt)
* public [getId()](#method_getId)
* public [getUpdatedAt()](#method_getUpdatedAt)

***

### Подробности [#подробности]

* Путь: engine/inc/maharder/\\_includes/database/BasisModel.php

***

## Свойства [#свойства-2]

<span id="property_createdAt" />

#### protected $createdAt : \\DateTimeImmutable [#protected-createdat--datetimeimmutable]

***

**Краткое содержание**

Дата и время создания записи. Автоматически проставляется при создании.

**Тип:** <abbr title="DateTimeImmutable">Дата и время</abbr>

<span id="property_id" />

#### protected $id : int [#protected-id--int]

***

**Краткое содержание**

ID сущности (уникальный первичный ключ).

**Тип:** <abbr title="int">Целое число</abbr>

<span id="property_updatedAt" />

#### protected $updatedAt : ?\\DateTimeImmutable [#protected-updatedat--datetimeimmutable]

***

**Краткое содержание**

Дата и время последнего обновления записи. Может быть равна null.

***Описание***

Автоматически обновляется при изменении записи.

**Тип:** <abbr title="?\\DateTimeImmutable">Дата и время или null</abbr>

**Подробности:**

***

## Методы [#методы-2]

<span id="method_getColumnVal" />

### getColumnVal [#getcolumnval]

\`\`\`
abstract public getColumnVal(string  name) : mixed
\`\`\`

##### Краткое содержание [#краткое-содержание-1]

Получить значение столбца по его имени.

##### Свойства: [#свойства-3]

| Название  | Тип    | По умолчанию |
| --------- | ------ | ------------ |
| **$name** | string |              |

##### Ошибки: [#ошибки]

| Тип                       | Описание                     |
| ------------------------- | ---------------------------- |
| \\InvalidArgumentException | Если имя столбца не найдено. |

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

<span id="method_getId" />

### getId [#getid]

\`\`\`
public getId() : int
\`\`\`

##### Краткое содержание [#краткое-содержание-3]

Получить уникальный идентификатор сущности.

##### Возвращает: [#возвращает-2]

\`\`\`
int
\`\`\`

Уникальный идентификатор сущности.

***

<span id="method_getUpdatedAt" />

### getUpdatedAt [#getupdatedat]

\`\`\`
public getUpdatedAt() : \\DateTimeImmutable|null
\`\`\`

##### Краткое содержание [#краткое-содержание-4]

Получить дату и время последнего обновления записи, если доступно.

##### Возвращает: [#возвращает-3]

\`\`\`
\\DateTimeImmutable|null
\`\`\`

Дата и время последнего обновления или null, если обновления не было.
`,o={contents:[{heading:`краткое-содержание`,content:`Базовый абстрактный класс модели, представляющий типовую сущность базы данных.`},{heading:`описание`,content:"Класс используется для создания типовых моделей с общими свойствами, такими как\nуникальный идентификатор (`id`), дата создания (`createdAt`) и дата последнего обновления (`updatedAt`).\nПредназначен для расширения в конкретных классах моделей, которые реализуют бизнес-логику\nи определяют дополнительные свойства и методы."},{heading:`свойства`,content:"**`id`** — уникальный первичный ключ записи."},{heading:`свойства`,content:"**`createdAt`** — дата и время создания записи."},{heading:`свойства`,content:"**`updatedAt`** — дата последнего обновления записи (null, если данных об изменениях нет)."},{heading:`методы`,content:`Класс предоставляет доступные методы для получения базовой информации о записи:`},{heading:`методы`,content:"`getId()` — возвращает уникальный идентификатор сущности."},{heading:`методы`,content:"`getCreatedAt()` — возвращает дату и время создания записи."},{heading:`методы`,content:"`getUpdatedAt()` — возвращает дату последнего обновления или null, если обновления не было."},{heading:`методы`,content:"`getColumnVal(string $name)` — возвращает значение конкретного столбца по его имени (реализуется в наследниках)."},{heading:`аннотации`,content:"Класс использует аннотации для указания схемы базы данных с помощью библиотеки `Cycle ORM`.\nНапример:"},{heading:`аннотации`,content:"`#[Column()]` определяет параметры поля таблицы."},{heading:`аннотации`,content:"`#[Index()]` задаёт индексированные столбцы (например, `created_at` для быстрого поиска)."},{heading:`расширяемость`,content:"Класс **абстрактный**. Для его использования необходимо создать наследника и, как минимум,\nреализовать метод `getColumnVal()`, который позволяет получить значение столбца."},{heading:`свойства-1`,content:`protected $createdAt`},{heading:`свойства-1`,content:`protected $id`},{heading:`свойства-1`,content:`protected $updatedAt`},{heading:`методы-1`,content:`public getColumnVal()`},{heading:`методы-1`,content:`public getCreatedAt()`},{heading:`методы-1`,content:`public getId()`},{heading:`методы-1`,content:`public getUpdatedAt()`},{heading:`подробности`,content:`Путь: engine/inc/maharder/\\_includes/database/BasisModel.php`},{heading:`protected-createdat--datetimeimmutable`,content:`**Краткое содержание**`},{heading:`protected-createdat--datetimeimmutable`,content:`Дата и время создания записи. Автоматически проставляется при создании.`},{heading:`protected-createdat--datetimeimmutable`,content:`**Тип:** Дата и время`},{heading:`protected-id--int`,content:`**Краткое содержание**`},{heading:`protected-id--int`,content:`ID сущности (уникальный первичный ключ).`},{heading:`protected-id--int`,content:`**Тип:** Целое число`},{heading:`protected-updatedat--datetimeimmutable`,content:`**Краткое содержание**`},{heading:`protected-updatedat--datetimeimmutable`,content:`Дата и время последнего обновления записи. Может быть равна null.`},{heading:`protected-updatedat--datetimeimmutable`,content:`***Описание***`},{heading:`protected-updatedat--datetimeimmutable`,content:`Автоматически обновляется при изменении записи.`},{heading:`protected-updatedat--datetimeimmutable`,content:`**Тип:** Дата и время или null`},{heading:`protected-updatedat--datetimeimmutable`,content:`**Подробности:**`},{heading:`краткое-содержание-1`,content:`Получить значение столбца по его имени.`},{heading:`свойства-3`,content:`Название`},{heading:`свойства-3`,content:`Тип`},{heading:`свойства-3`,content:`По умолчанию`},{heading:`свойства-3`,content:`**$name**`},{heading:`свойства-3`,content:`string`},{heading:`ошибки`,content:`Тип`},{heading:`ошибки`,content:`Описание`},{heading:`ошибки`,content:`\\InvalidArgumentException`},{heading:`ошибки`,content:`Если имя столбца не найдено.`},{heading:`возвращает`,content:`Значение столбца.`},{heading:`краткое-содержание-2`,content:`Получить дату и время создания записи.`},{heading:`возвращает-1`,content:`Дата и время создания записи.`},{heading:`краткое-содержание-3`,content:`Получить уникальный идентификатор сущности.`},{heading:`возвращает-2`,content:`Уникальный идентификатор сущности.`},{heading:`краткое-содержание-4`,content:`Получить дату и время последнего обновления записи, если доступно.`},{heading:`возвращает-3`,content:`Дата и время последнего обновления или null, если обновления не было.`}],headings:[{id:`краткое-содержание`,content:`Краткое содержание:`},{id:`описание`,content:`Описание:`},{id:`свойства`,content:`Свойства:`},{id:`методы`,content:`Методы:`},{id:`аннотации`,content:`Аннотации:`},{id:`расширяемость`,content:`Расширяемость:`},{id:`свойства-1`,content:`Свойства`},{id:`методы-1`,content:`Методы`},{id:`подробности`,content:`Подробности`},{id:`свойства-2`,content:`Свойства`},{id:`protected-createdat--datetimeimmutable`,content:`protected $createdAt : \\DateTimeImmutable`},{id:`protected-id--int`,content:`protected $id : int`},{id:`protected-updatedat--datetimeimmutable`,content:`protected $updatedAt : ?\\DateTimeImmutable`},{id:`методы-2`,content:`Методы`},{id:`getcolumnval`,content:`getColumnVal`},{id:`краткое-содержание-1`,content:`Краткое содержание`},{id:`свойства-3`,content:`Свойства:`},{id:`ошибки`,content:`Ошибки:`},{id:`возвращает`,content:`Возвращает:`},{id:`getcreatedat`,content:`getCreatedAt`},{id:`краткое-содержание-2`,content:`Краткое содержание`},{id:`возвращает-1`,content:`Возвращает:`},{id:`getid`,content:`getId`},{id:`краткое-содержание-3`,content:`Краткое содержание`},{id:`возвращает-2`,content:`Возвращает:`},{id:`getupdatedat`,content:`getUpdatedAt`},{id:`краткое-содержание-4`,content:`Краткое содержание`},{id:`возвращает-3`,content:`Возвращает:`}]},s=[{depth:2,url:`#краткое-содержание`,title:(0,n.jsx)(n.Fragment,{children:`Краткое содержание:`})},{depth:2,url:`#описание`,title:(0,n.jsx)(n.Fragment,{children:`Описание:`})},{depth:2,url:`#свойства`,title:(0,n.jsx)(n.Fragment,{children:`Свойства:`})},{depth:2,url:`#методы`,title:(0,n.jsx)(n.Fragment,{children:`Методы:`})},{depth:2,url:`#аннотации`,title:(0,n.jsx)(n.Fragment,{children:`Аннотации:`})},{depth:2,url:`#расширяемость`,title:(0,n.jsx)(n.Fragment,{children:`Расширяемость:`})},{depth:3,url:`#свойства-1`,title:(0,n.jsx)(n.Fragment,{children:`Свойства`})},{depth:3,url:`#методы-1`,title:(0,n.jsx)(n.Fragment,{children:`Методы`})},{depth:3,url:`#подробности`,title:(0,n.jsx)(n.Fragment,{children:`Подробности`})},{depth:2,url:`#свойства-2`,title:(0,n.jsx)(n.Fragment,{children:`Свойства`})},{depth:4,url:`#protected-createdat--datetimeimmutable`,title:(0,n.jsx)(n.Fragment,{children:`protected $createdAt : \\DateTimeImmutable`})},{depth:4,url:`#protected-id--int`,title:(0,n.jsx)(n.Fragment,{children:`protected $id : int`})},{depth:4,url:`#protected-updatedat--datetimeimmutable`,title:(0,n.jsx)(n.Fragment,{children:`protected $updatedAt : ?\\DateTimeImmutable`})},{depth:2,url:`#методы-2`,title:(0,n.jsx)(n.Fragment,{children:`Методы`})},{depth:3,url:`#getcolumnval`,title:(0,n.jsx)(n.Fragment,{children:`getColumnVal`})},{depth:5,url:`#краткое-содержание-1`,title:(0,n.jsx)(n.Fragment,{children:`Краткое содержание`})},{depth:5,url:`#свойства-3`,title:(0,n.jsx)(n.Fragment,{children:`Свойства:`})},{depth:5,url:`#ошибки`,title:(0,n.jsx)(n.Fragment,{children:`Ошибки:`})},{depth:5,url:`#возвращает`,title:(0,n.jsx)(n.Fragment,{children:`Возвращает:`})},{depth:3,url:`#getcreatedat`,title:(0,n.jsx)(n.Fragment,{children:`getCreatedAt`})},{depth:5,url:`#краткое-содержание-2`,title:(0,n.jsx)(n.Fragment,{children:`Краткое содержание`})},{depth:5,url:`#возвращает-1`,title:(0,n.jsx)(n.Fragment,{children:`Возвращает:`})},{depth:3,url:`#getid`,title:(0,n.jsx)(n.Fragment,{children:`getId`})},{depth:5,url:`#краткое-содержание-3`,title:(0,n.jsx)(n.Fragment,{children:`Краткое содержание`})},{depth:5,url:`#возвращает-2`,title:(0,n.jsx)(n.Fragment,{children:`Возвращает:`})},{depth:3,url:`#getupdatedat`,title:(0,n.jsx)(n.Fragment,{children:`getUpdatedAt`})},{depth:5,url:`#краткое-содержание-4`,title:(0,n.jsx)(n.Fragment,{children:`Краткое содержание`})},{depth:5,url:`#возвращает-3`,title:(0,n.jsx)(n.Fragment,{children:`Возвращает:`})}];function c(e){let t={a:`a`,code:`code`,em:`em`,h2:`h2`,h3:`h3`,h4:`h4`,h5:`h5`,hr:`hr`,li:`li`,p:`p`,pre:`pre`,span:`span`,strong:`strong`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,ul:`ul`,...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h2,{id:`краткое-содержание`,children:`Краткое содержание:`}),`
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
`]}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsx)(t.h3,{id:`методы-1`,children:`Методы`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method_getColumnVal`,children:`getColumnVal()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method_getCreatedAt`,children:`getCreatedAt()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method_getId`,children:`getId()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method_getUpdatedAt`,children:`getUpdatedAt()`})]}),`
`]}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsx)(t.h3,{id:`подробности`,children:`Подробности`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsx)(t.li,{children:`Путь: engine/inc/maharder/_includes/database/BasisModel.php`}),`
`]}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsx)(t.h2,{id:`свойства-2`,children:`Свойства`}),`
`,(0,n.jsx)(`span`,{id:`property_createdAt`}),`
`,(0,n.jsx)(t.h4,{id:`protected-createdat--datetimeimmutable`,children:`protected $createdAt : \\DateTimeImmutable`}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Краткое содержание`})}),`
`,(0,n.jsx)(t.p,{children:`Дата и время создания записи. Автоматически проставляется при создании.`}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Тип:`}),` `,(0,n.jsx)(`abbr`,{title:`DateTimeImmutable`,children:`Дата и время`})]}),`
`,(0,n.jsx)(`span`,{id:`property_id`}),`
`,(0,n.jsx)(t.h4,{id:`protected-id--int`,children:`protected $id : int`}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Краткое содержание`})}),`
`,(0,n.jsx)(t.p,{children:`ID сущности (уникальный первичный ключ).`}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Тип:`}),` `,(0,n.jsx)(`abbr`,{title:`int`,children:`Целое число`})]}),`
`,(0,n.jsx)(`span`,{id:`property_updatedAt`}),`
`,(0,n.jsx)(t.h4,{id:`protected-updatedat--datetimeimmutable`,children:`protected $updatedAt : ?\\DateTimeImmutable`}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Краткое содержание`})}),`
`,(0,n.jsx)(t.p,{children:`Дата и время последнего обновления записи. Может быть равна null.`}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.em,{children:(0,n.jsx)(t.strong,{children:`Описание`})})}),`
`,(0,n.jsx)(t.p,{children:`Автоматически обновляется при изменении записи.`}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Тип:`}),` `,(0,n.jsx)(`abbr`,{title:`?\\DateTimeImmutable`,children:`Дата и время или null`})]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Подробности:`})}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsx)(t.h2,{id:`методы-2`,children:`Методы`}),`
`,(0,n.jsx)(`span`,{id:`method_getColumnVal`}),`
`,(0,n.jsx)(t.h3,{id:`getcolumnval`,children:`getColumnVal`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`abstract public getColumnVal(string  name) : mixed`})})})})}),`
`,(0,n.jsx)(t.h5,{id:`краткое-содержание-1`,children:`Краткое содержание`}),`
`,(0,n.jsx)(t.p,{children:`Получить значение столбца по его имени.`}),`
`,(0,n.jsx)(t.h5,{id:`свойства-3`,children:`Свойства:`}),`
`,(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`Название`}),(0,n.jsx)(t.th,{children:`Тип`}),(0,n.jsx)(t.th,{children:`По умолчанию`})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:`$name`})}),(0,n.jsx)(t.td,{children:`string`}),(0,n.jsx)(t.td,{})]})})]}),`
`,(0,n.jsx)(t.h5,{id:`ошибки`,children:`Ошибки:`}),`
`,(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`Тип`}),(0,n.jsx)(t.th,{children:`Описание`})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`\\InvalidArgumentException`}),(0,n.jsx)(t.td,{children:`Если имя столбца не найдено.`})]})})]}),`
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
`,(0,n.jsx)(`span`,{id:`method_getId`}),`
`,(0,n.jsx)(t.h3,{id:`getid`,children:`getId`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`public getId() : int`})})})})}),`
`,(0,n.jsx)(t.h5,{id:`краткое-содержание-3`,children:`Краткое содержание`}),`
`,(0,n.jsx)(t.p,{children:`Получить уникальный идентификатор сущности.`}),`
`,(0,n.jsx)(t.h5,{id:`возвращает-2`,children:`Возвращает:`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`int`})})})})}),`
`,(0,n.jsx)(t.p,{children:`Уникальный идентификатор сущности.`}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsx)(`span`,{id:`method_getUpdatedAt`}),`
`,(0,n.jsx)(t.h3,{id:`getupdatedat`,children:`getUpdatedAt`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`public getUpdatedAt() : \\DateTimeImmutable|null`})})})})}),`
`,(0,n.jsx)(t.h5,{id:`краткое-содержание-4`,children:`Краткое содержание`}),`
`,(0,n.jsx)(t.p,{children:`Получить дату и время последнего обновления записи, если доступно.`}),`
`,(0,n.jsx)(t.h5,{id:`возвращает-3`,children:`Возвращает:`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`\\DateTimeImmutable|null`})})})})}),`
`,(0,n.jsx)(t.p,{children:`Дата и время последнего обновления или null, если обновления не было.`})]})}function l(e={}){let{wrapper:t}=e.components||{};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}export{a as _markdown,l as default,r as frontmatter,i as lastModified,o as structuredData,s as toc};