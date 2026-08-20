import{r as e}from"./rolldown-runtime-QTnfLwEv.js";import{t}from"./jsx-runtime-By8HlURe.js";var n=e(t()),r={title:`Класс: AbstractEntity`,description:`Документация по плагину класс: abstractentity для DLE.`},i=new Date(1787217967e3),a=`

## Краткое содержание: [#краткое-содержание]

Базовая ORM-сущность с аудитом создания и изменения записи.

***

### Свойства [#свойства]

*Нет публичных свойств.*

***

### Методы [#методы]

* public [beforeSave()](#method_beforeSave)
* public [createdAt()](#method_createdAt)
* public [creator()](#method_creator)
* public [getColumnVal()](#method_getColumnVal)
* public [id()](#method_id)
* public [lastEditor()](#method_lastEditor)
* public [setCreator()](#method_setCreator)
* public [setLastEditor()](#method_setLastEditor)
* public [touchUpdatedAt()](#method_touchUpdatedAt)
* public [updatedAt()](#method_updatedAt)

***

### Подробности [#подробности]

* Путь: \`devcraft/src/classes/Abstracts/AbstractEntity.php\`

***

## Детали [#детали]

### Методы [#методы-1]

<span id="method_beforeSave" />

### beforeSave() [#beforesave]

Заполняет поля аудита перед сохранением сущности в базу данных.

**С версии:** 200.4.0

<span id="method_createdAt" />

### createdAt() [#createdat]

Возвращает дату и время создания записи.

**С версии:** 200.4.0

**Возвращает:** \`DateTimeImmutable\` — Момент создания.

<span id="method_creator" />

### creator() [#creator]

Возвращает идентификатор создателя записи.

**С версии:** 200.4.0

**Возвращает:** \`int|null\` — ID пользователя DLE или \`null\`.

<span id="method_getColumnVal" />

### getColumnVal() [#getcolumnval]

Возвращает значение колонки по имени свойства или колонки через \`ReflectionProperty\`. Ищет \`$name\`, camelCase и snake\\_case. \`DateTimeInterface\` приводится к \`Y-m-d H:i:s\`, \`bool\` — к \`0\`/\`1\`. Неизвестное имя даёт \`null\`. Модели-наследники метод не переопределяют.

**С версии:** 200.4.0

**Параметры:**

* \`$name\` — Имя колонки или свойства.

**Возвращает:** \`mixed\` — Значение колонки или \`null\`.

<span id="method_id" />

### id() [#id]

Возвращает первичный ключ записи.

**С версии:** 200.4.0

**Возвращает:** \`int\` — Числовой идентификатор.

<span id="method_lastEditor" />

### lastEditor() [#lasteditor]

Возвращает идентификатор последнего редактора записи.

**С версии:** 200.4.0

**Возвращает:** \`int|null\` — ID пользователя DLE или \`null\`.

<span id="method_setCreator" />

### setCreator() [#setcreator]

Устанавливает идентификатор создателя записи.

**С версии:** 200.4.0

**Параметры:**

* \`$user_id\` — ID пользователя DLE или \`null\`.

<span id="method_setLastEditor" />

### setLastEditor() [#setlasteditor]

Устанавливает идентификатор последнего редактора записи.

**С версии:** 200.4.0

**Параметры:**

* \`$user_id\` — ID пользователя DLE или \`null\`.

<span id="method_touchUpdatedAt" />

### touchUpdatedAt() [#touchupdatedat]

Обновляет метку времени последнего изменения записи.

**С версии:** 200.4.0

<span id="method_updatedAt" />

### updatedAt() [#updatedat]

Возвращает дату и время последнего обновления записи.

**С версии:** 200.4.0

**Возвращает:** \`DateTimeImmutable|null\` — Момент обновления или \`null\`.
`,o={contents:[{heading:`краткое-содержание`,content:`Базовая ORM-сущность с аудитом создания и изменения записи.`},{heading:`свойства`,content:`*Нет публичных свойств.*`},{heading:`методы`,content:`public beforeSave()`},{heading:`методы`,content:`public createdAt()`},{heading:`методы`,content:`public creator()`},{heading:`методы`,content:`public getColumnVal()`},{heading:`методы`,content:`public id()`},{heading:`методы`,content:`public lastEditor()`},{heading:`методы`,content:`public setCreator()`},{heading:`методы`,content:`public setLastEditor()`},{heading:`методы`,content:`public touchUpdatedAt()`},{heading:`методы`,content:`public updatedAt()`},{heading:`подробности`,content:"Путь: `devcraft/src/classes/Abstracts/AbstractEntity.php`"},{heading:`beforesave`,content:`Заполняет поля аудита перед сохранением сущности в базу данных.`},{heading:`beforesave`,content:`**С версии:** 200.4.0`},{heading:`createdat`,content:`Возвращает дату и время создания записи.`},{heading:`createdat`,content:`**С версии:** 200.4.0`},{heading:`createdat`,content:"**Возвращает:** `DateTimeImmutable` — Момент создания."},{heading:`creator`,content:`Возвращает идентификатор создателя записи.`},{heading:`creator`,content:`**С версии:** 200.4.0`},{heading:`creator`,content:"**Возвращает:** `int|null` — ID пользователя DLE или `null`."},{heading:`getcolumnval`,content:"Возвращает значение колонки по имени свойства или колонки через `ReflectionProperty`. Ищет `$name`, camelCase и snake\\_case. `DateTimeInterface` приводится к `Y-m-d H:i:s`, `bool` — к `0`/`1`. Неизвестное имя даёт `null`. Модели-наследники метод не переопределяют."},{heading:`getcolumnval`,content:`**С версии:** 200.4.0`},{heading:`getcolumnval`,content:`**Параметры:**`},{heading:`getcolumnval`,content:"`$name` — Имя колонки или свойства."},{heading:`getcolumnval`,content:"**Возвращает:** `mixed` — Значение колонки или `null`."},{heading:`id`,content:`Возвращает первичный ключ записи.`},{heading:`id`,content:`**С версии:** 200.4.0`},{heading:`id`,content:"**Возвращает:** `int` — Числовой идентификатор."},{heading:`lasteditor`,content:`Возвращает идентификатор последнего редактора записи.`},{heading:`lasteditor`,content:`**С версии:** 200.4.0`},{heading:`lasteditor`,content:"**Возвращает:** `int|null` — ID пользователя DLE или `null`."},{heading:`setcreator`,content:`Устанавливает идентификатор создателя записи.`},{heading:`setcreator`,content:`**С версии:** 200.4.0`},{heading:`setcreator`,content:`**Параметры:**`},{heading:`setcreator`,content:"`$user_id` — ID пользователя DLE или `null`."},{heading:`setlasteditor`,content:`Устанавливает идентификатор последнего редактора записи.`},{heading:`setlasteditor`,content:`**С версии:** 200.4.0`},{heading:`setlasteditor`,content:`**Параметры:**`},{heading:`setlasteditor`,content:"`$user_id` — ID пользователя DLE или `null`."},{heading:`touchupdatedat`,content:`Обновляет метку времени последнего изменения записи.`},{heading:`touchupdatedat`,content:`**С версии:** 200.4.0`},{heading:`updatedat`,content:`Возвращает дату и время последнего обновления записи.`},{heading:`updatedat`,content:`**С версии:** 200.4.0`},{heading:`updatedat`,content:"**Возвращает:** `DateTimeImmutable|null` — Момент обновления или `null`."}],headings:[{id:`краткое-содержание`,content:`Краткое содержание:`},{id:`свойства`,content:`Свойства`},{id:`методы`,content:`Методы`},{id:`подробности`,content:`Подробности`},{id:`детали`,content:`Детали`},{id:`методы-1`,content:`Методы`},{id:`beforesave`,content:`beforeSave()`},{id:`createdat`,content:`createdAt()`},{id:`creator`,content:`creator()`},{id:`getcolumnval`,content:`getColumnVal()`},{id:`id`,content:`id()`},{id:`lasteditor`,content:`lastEditor()`},{id:`setcreator`,content:`setCreator()`},{id:`setlasteditor`,content:`setLastEditor()`},{id:`touchupdatedat`,content:`touchUpdatedAt()`},{id:`updatedat`,content:`updatedAt()`}]},s=[{depth:2,url:`#краткое-содержание`,title:(0,n.jsx)(n.Fragment,{children:`Краткое содержание:`})},{depth:3,url:`#свойства`,title:(0,n.jsx)(n.Fragment,{children:`Свойства`})},{depth:3,url:`#методы`,title:(0,n.jsx)(n.Fragment,{children:`Методы`})},{depth:3,url:`#подробности`,title:(0,n.jsx)(n.Fragment,{children:`Подробности`})},{depth:2,url:`#детали`,title:(0,n.jsx)(n.Fragment,{children:`Детали`})},{depth:3,url:`#методы-1`,title:(0,n.jsx)(n.Fragment,{children:`Методы`})},{depth:3,url:`#beforesave`,title:(0,n.jsx)(n.Fragment,{children:`beforeSave()`})},{depth:3,url:`#createdat`,title:(0,n.jsx)(n.Fragment,{children:`createdAt()`})},{depth:3,url:`#creator`,title:(0,n.jsx)(n.Fragment,{children:`creator()`})},{depth:3,url:`#getcolumnval`,title:(0,n.jsx)(n.Fragment,{children:`getColumnVal()`})},{depth:3,url:`#id`,title:(0,n.jsx)(n.Fragment,{children:`id()`})},{depth:3,url:`#lasteditor`,title:(0,n.jsx)(n.Fragment,{children:`lastEditor()`})},{depth:3,url:`#setcreator`,title:(0,n.jsx)(n.Fragment,{children:`setCreator()`})},{depth:3,url:`#setlasteditor`,title:(0,n.jsx)(n.Fragment,{children:`setLastEditor()`})},{depth:3,url:`#touchupdatedat`,title:(0,n.jsx)(n.Fragment,{children:`touchUpdatedAt()`})},{depth:3,url:`#updatedat`,title:(0,n.jsx)(n.Fragment,{children:`updatedAt()`})}];function c(e){let t={a:`a`,code:`code`,em:`em`,h2:`h2`,h3:`h3`,hr:`hr`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h2,{id:`краткое-содержание`,children:`Краткое содержание:`}),`
`,(0,n.jsx)(t.p,{children:`Базовая ORM-сущность с аудитом создания и изменения записи.`}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsx)(t.h3,{id:`свойства`,children:`Свойства`}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.em,{children:`Нет публичных свойств.`})}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsx)(t.h3,{id:`методы`,children:`Методы`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method_beforeSave`,children:`beforeSave()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method_createdAt`,children:`createdAt()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method_creator`,children:`creator()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method_getColumnVal`,children:`getColumnVal()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method_id`,children:`id()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method_lastEditor`,children:`lastEditor()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method_setCreator`,children:`setCreator()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method_setLastEditor`,children:`setLastEditor()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method_touchUpdatedAt`,children:`touchUpdatedAt()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method_updatedAt`,children:`updatedAt()`})]}),`
`]}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsx)(t.h3,{id:`подробности`,children:`Подробности`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[`Путь: `,(0,n.jsx)(t.code,{children:`devcraft/src/classes/Abstracts/AbstractEntity.php`})]}),`
`]}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsx)(t.h2,{id:`детали`,children:`Детали`}),`
`,(0,n.jsx)(t.h3,{id:`методы-1`,children:`Методы`}),`
`,(0,n.jsx)(`span`,{id:`method_beforeSave`}),`
`,(0,n.jsx)(t.h3,{id:`beforesave`,children:`beforeSave()`}),`
`,(0,n.jsx)(t.p,{children:`Заполняет поля аудита перед сохранением сущности в базу данных.`}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 200.4.0`]}),`
`,(0,n.jsx)(`span`,{id:`method_createdAt`}),`
`,(0,n.jsx)(t.h3,{id:`createdat`,children:`createdAt()`}),`
`,(0,n.jsx)(t.p,{children:`Возвращает дату и время создания записи.`}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 200.4.0`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`DateTimeImmutable`}),` — Момент создания.`]}),`
`,(0,n.jsx)(`span`,{id:`method_creator`}),`
`,(0,n.jsx)(t.h3,{id:`creator`,children:`creator()`}),`
`,(0,n.jsx)(t.p,{children:`Возвращает идентификатор создателя записи.`}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 200.4.0`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`int|null`}),` — ID пользователя DLE или `,(0,n.jsx)(t.code,{children:`null`}),`.`]}),`
`,(0,n.jsx)(`span`,{id:`method_getColumnVal`}),`
`,(0,n.jsx)(t.h3,{id:`getcolumnval`,children:`getColumnVal()`}),`
`,(0,n.jsxs)(t.p,{children:[`Возвращает значение колонки по имени свойства или колонки через `,(0,n.jsx)(t.code,{children:`ReflectionProperty`}),`. Ищет `,(0,n.jsx)(t.code,{children:`$name`}),`, camelCase и snake_case. `,(0,n.jsx)(t.code,{children:`DateTimeInterface`}),` приводится к `,(0,n.jsx)(t.code,{children:`Y-m-d H:i:s`}),`, `,(0,n.jsx)(t.code,{children:`bool`}),` — к `,(0,n.jsx)(t.code,{children:`0`}),`/`,(0,n.jsx)(t.code,{children:`1`}),`. Неизвестное имя даёт `,(0,n.jsx)(t.code,{children:`null`}),`. Модели-наследники метод не переопределяют.`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 200.4.0`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$name`}),` — Имя колонки или свойства.`]}),`
`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`mixed`}),` — Значение колонки или `,(0,n.jsx)(t.code,{children:`null`}),`.`]}),`
`,(0,n.jsx)(`span`,{id:`method_id`}),`
`,(0,n.jsx)(t.h3,{id:`id`,children:`id()`}),`
`,(0,n.jsx)(t.p,{children:`Возвращает первичный ключ записи.`}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 200.4.0`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`int`}),` — Числовой идентификатор.`]}),`
`,(0,n.jsx)(`span`,{id:`method_lastEditor`}),`
`,(0,n.jsx)(t.h3,{id:`lasteditor`,children:`lastEditor()`}),`
`,(0,n.jsx)(t.p,{children:`Возвращает идентификатор последнего редактора записи.`}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 200.4.0`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`int|null`}),` — ID пользователя DLE или `,(0,n.jsx)(t.code,{children:`null`}),`.`]}),`
`,(0,n.jsx)(`span`,{id:`method_setCreator`}),`
`,(0,n.jsx)(t.h3,{id:`setcreator`,children:`setCreator()`}),`
`,(0,n.jsx)(t.p,{children:`Устанавливает идентификатор создателя записи.`}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 200.4.0`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$user_id`}),` — ID пользователя DLE или `,(0,n.jsx)(t.code,{children:`null`}),`.`]}),`
`]}),`
`,(0,n.jsx)(`span`,{id:`method_setLastEditor`}),`
`,(0,n.jsx)(t.h3,{id:`setlasteditor`,children:`setLastEditor()`}),`
`,(0,n.jsx)(t.p,{children:`Устанавливает идентификатор последнего редактора записи.`}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 200.4.0`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$user_id`}),` — ID пользователя DLE или `,(0,n.jsx)(t.code,{children:`null`}),`.`]}),`
`]}),`
`,(0,n.jsx)(`span`,{id:`method_touchUpdatedAt`}),`
`,(0,n.jsx)(t.h3,{id:`touchupdatedat`,children:`touchUpdatedAt()`}),`
`,(0,n.jsx)(t.p,{children:`Обновляет метку времени последнего изменения записи.`}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 200.4.0`]}),`
`,(0,n.jsx)(`span`,{id:`method_updatedAt`}),`
`,(0,n.jsx)(t.h3,{id:`updatedat`,children:`updatedAt()`}),`
`,(0,n.jsx)(t.p,{children:`Возвращает дату и время последнего обновления записи.`}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 200.4.0`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`DateTimeImmutable|null`}),` — Момент обновления или `,(0,n.jsx)(t.code,{children:`null`}),`.`]})]})}function l(e={}){let{wrapper:t}=e.components||{};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}export{a as _markdown,l as default,r as frontmatter,i as lastModified,o as structuredData,s as toc};