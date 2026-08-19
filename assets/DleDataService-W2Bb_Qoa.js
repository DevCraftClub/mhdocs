import{r as e}from"./rolldown-runtime-QTnfLwEv.js";import{t}from"./jsx-runtime-By8HlURe.js";var n=e(t()),r={title:`Класс: DleDataService`,description:`Документация по плагину класс: dledataservice для DLE.`},i=new Date(1787141927e3),a=`

## Краткое содержание: [#краткое-содержание]

Агрегирует справочные данные DLE: пользователи, группы, категории, xfields.

***

### Свойства [#свойства]

*Нет публичных свойств.*

***

### Методы [#методы]

* public [\\_\\_construct()](#method___construct)
* public [users()](#method_users)
* public [user()](#method_user)
* public [groups()](#method_groups)
* public [groupsFull()](#method_groupsFull)
* public [categories()](#method_categories)
* public [categoriesFull()](#method_categoriesFull)
* public [postXfields()](#method_postXfields)
* public [userXfields()](#method_userXfields)
* public [parseObjectXfields()](#method_parseObjectXfields)
* private [loadXfieldsFromJson()](#method_loadXfieldsFromJson)
* private [readJsonFields()](#method_readJsonFields)
* private [parseXfieldsString()](#method_parseXfieldsString)
* private [readJsonCache()](#method_readJsonCache)
* private [writeJsonCache()](#method_writeJsonCache)

***

### Подробности [#подробности]

* Путь: \`devcraft/src/classes/Support/DleDataService.php\`

***

## Детали [#детали]

### Методы [#методы-1]

<span id="method___construct" />

### \\_\\_construct() [#__construct]

Инициализирует зависимости: \`$loader\`, \`$cacheTimer\`.

**С версии:** 200.4.0

**Параметры:**

* \`$loader\` — Сервис загрузки таблиц DLE.
* \`$cacheTimer\` — TTL кеша xfields в секундах.

<span id="method_users" />

### users() [#users]

Возвращает список пользователей DLE с основными полями.

**С версии:** 173.3.0

**Возвращает:** \`array<int, array<string, mixed>>\` — Строки users.

<span id="method_user" />

### user() [#user]

Возвращает одного пользователя по id или имени.

**С версии:** 173.3.0

**Параметры:**

* \`$id\` — ID пользователя или null.
* \`$uname\` — Имя пользователя или null.

**Возвращает:** \`array<string, mixed>|array{}\` — Первая строка или пустой массив.

<span id="method_groups" />

### groups() [#groups]

Возвращает карту id => group\\_name для групп пользователей.

**С версии:** 173.3.0

**Возвращает:** \`array<int|string,\` — string> Ассоциативный список групп.

<span id="method_groupsFull" />

### groupsFull() [#groupsfull]

Возвращает полные строки таблицы usergroups.

**С версии:** 173.3.0

**Возвращает:** \`array<int, array<string, mixed>>\` — Все колонки групп.

<span id="method_categories" />

### categories() [#categories]

Возвращает карту id => name для категорий DLE.

**С версии:** 173.3.0

**Возвращает:** \`array<int|string,\` — string> Ассоциативный список категорий.

<span id="method_categoriesFull" />

### categoriesFull() [#categoriesfull]

Возвращает полные строки таблицы category.

**С версии:** 173.3.0

**Возвращает:** \`array<int, array<string, mixed>>\` — Все колонки категорий.

<span id="method_postXfields" />

### postXfields() [#postxfields]

Загружает описание доп. полей публикаций из xfields.json.

**С версии:** 173.3.0

**Возвращает:** \`array<string, array<string, mixed>>\` — Поля по имени.

<span id="method_userXfields" />

### userXfields() [#userxfields]

Загружает описание доп. полей пользователей из userxfields.json.

**С версии:** 173.3.0

**Возвращает:** \`array<string, array<string, mixed>>\` — Поля по имени.

<span id="method_parseObjectXfields" />

### parseObjectXfields() [#parseobjectxfields]

Разбирает строку xfields записи post или user в ассоциативный массив.

**С версии:** 173.3.0

**Параметры:**

* \`$id\` — ID записи или пользователя.
* \`$type\` — Тип объекта: post или user.

**Возвращает:** \`array<string,\` — string|null> Имя поля => значение.

<span id="method_loadXfieldsFromJson" />

### loadXfieldsFromJson() [#loadxfieldsfromjson]

Загружает xfields из JSON с кешированием.

**С версии:** 173.3.0

**Параметры:**

* \`$cacheName\` — Ключ кеша.
* \`$fileName\` — Имя файла в ENGINE\\_DIR/data/.

**Возвращает:** \`array<string, array<string, mixed>>\` — Поля xfields.

<span id="method_readJsonFields" />

### readJsonFields() [#readjsonfields]

Читает и декодирует JSON-файл xfields из каталога data DLE.

**С версии:** 173.3.0

**Параметры:**

* \`$fileName\` — Имя файла (xfields.json или userxfields.json).

**Возвращает:** \`array<string, array<string, mixed>>\` — Секция fields или пустой массив.

<span id="method_parseXfieldsString" />

### parseXfieldsString() [#parsexfieldsstring]

Парсит сериализованную строку xfields DLE формата «name|value||…».

**С версии:** 173.3.0

**Параметры:**

* \`$raw\` — Сырыая строка xfields.

**Возвращает:** \`array<string,\` — string|null> Имя => значение.

<span id="method_readJsonCache" />

### readJsonCache() [#readjsoncache]

Читает закешированные xfields, если TTL не истёк.

**С версии:** 173.3.0

**Параметры:**

* \`$cacheName\` — Ключ кеша.

**Возвращает:** \`array<string, array<string, mixed>>\` — |null Поля или null.

<span id="method_writeJsonCache" />

### writeJsonCache() [#writejsoncache]

Записывает xfields в кеш DevCraft.

**С версии:** 173.3.0

**Параметры:**

* \`$cacheName\` — Ключ кеша.
`,o={contents:[{heading:`краткое-содержание`,content:`Агрегирует справочные данные DLE: пользователи, группы, категории, xfields.`},{heading:`свойства`,content:`*Нет публичных свойств.*`},{heading:`методы`,content:`public \\_\\_construct()`},{heading:`методы`,content:`public users()`},{heading:`методы`,content:`public user()`},{heading:`методы`,content:`public groups()`},{heading:`методы`,content:`public groupsFull()`},{heading:`методы`,content:`public categories()`},{heading:`методы`,content:`public categoriesFull()`},{heading:`методы`,content:`public postXfields()`},{heading:`методы`,content:`public userXfields()`},{heading:`методы`,content:`public parseObjectXfields()`},{heading:`методы`,content:`private loadXfieldsFromJson()`},{heading:`методы`,content:`private readJsonFields()`},{heading:`методы`,content:`private parseXfieldsString()`},{heading:`методы`,content:`private readJsonCache()`},{heading:`методы`,content:`private writeJsonCache()`},{heading:`подробности`,content:"Путь: `devcraft/src/classes/Support/DleDataService.php`"},{heading:`__construct`,content:"Инициализирует зависимости: `$loader`, `$cacheTimer`."},{heading:`__construct`,content:`**С версии:** 200.4.0`},{heading:`__construct`,content:`**Параметры:**`},{heading:`__construct`,content:"`$loader` — Сервис загрузки таблиц DLE."},{heading:`__construct`,content:"`$cacheTimer` — TTL кеша xfields в секундах."},{heading:`users`,content:`Возвращает список пользователей DLE с основными полями.`},{heading:`users`,content:`**С версии:** 173.3.0`},{heading:`users`,content:"**Возвращает:** `array<int, array<string, mixed>>` — Строки users."},{heading:`user`,content:`Возвращает одного пользователя по id или имени.`},{heading:`user`,content:`**С версии:** 173.3.0`},{heading:`user`,content:`**Параметры:**`},{heading:`user`,content:"`$id` — ID пользователя или null."},{heading:`user`,content:"`$uname` — Имя пользователя или null."},{heading:`user`,content:"**Возвращает:** `array<string, mixed>|array{}` — Первая строка или пустой массив."},{heading:`groups`,content:`Возвращает карту id => group\\_name для групп пользователей.`},{heading:`groups`,content:`**С версии:** 173.3.0`},{heading:`groups`,content:"**Возвращает:** `array<int|string,` — string> Ассоциативный список групп."},{heading:`groupsfull`,content:`Возвращает полные строки таблицы usergroups.`},{heading:`groupsfull`,content:`**С версии:** 173.3.0`},{heading:`groupsfull`,content:"**Возвращает:** `array<int, array<string, mixed>>` — Все колонки групп."},{heading:`categories`,content:`Возвращает карту id => name для категорий DLE.`},{heading:`categories`,content:`**С версии:** 173.3.0`},{heading:`categories`,content:"**Возвращает:** `array<int|string,` — string> Ассоциативный список категорий."},{heading:`categoriesfull`,content:`Возвращает полные строки таблицы category.`},{heading:`categoriesfull`,content:`**С версии:** 173.3.0`},{heading:`categoriesfull`,content:"**Возвращает:** `array<int, array<string, mixed>>` — Все колонки категорий."},{heading:`postxfields`,content:`Загружает описание доп. полей публикаций из xfields.json.`},{heading:`postxfields`,content:`**С версии:** 173.3.0`},{heading:`postxfields`,content:"**Возвращает:** `array<string, array<string, mixed>>` — Поля по имени."},{heading:`userxfields`,content:`Загружает описание доп. полей пользователей из userxfields.json.`},{heading:`userxfields`,content:`**С версии:** 173.3.0`},{heading:`userxfields`,content:"**Возвращает:** `array<string, array<string, mixed>>` — Поля по имени."},{heading:`parseobjectxfields`,content:`Разбирает строку xfields записи post или user в ассоциативный массив.`},{heading:`parseobjectxfields`,content:`**С версии:** 173.3.0`},{heading:`parseobjectxfields`,content:`**Параметры:**`},{heading:`parseobjectxfields`,content:"`$id` — ID записи или пользователя."},{heading:`parseobjectxfields`,content:"`$type` — Тип объекта: post или user."},{heading:`parseobjectxfields`,content:"**Возвращает:** `array<string,` — string|null> Имя поля => значение."},{heading:`loadxfieldsfromjson`,content:`Загружает xfields из JSON с кешированием.`},{heading:`loadxfieldsfromjson`,content:`**С версии:** 173.3.0`},{heading:`loadxfieldsfromjson`,content:`**Параметры:**`},{heading:`loadxfieldsfromjson`,content:"`$cacheName` — Ключ кеша."},{heading:`loadxfieldsfromjson`,content:"`$fileName` — Имя файла в ENGINE\\_DIR/data/."},{heading:`loadxfieldsfromjson`,content:"**Возвращает:** `array<string, array<string, mixed>>` — Поля xfields."},{heading:`readjsonfields`,content:`Читает и декодирует JSON-файл xfields из каталога data DLE.`},{heading:`readjsonfields`,content:`**С версии:** 173.3.0`},{heading:`readjsonfields`,content:`**Параметры:**`},{heading:`readjsonfields`,content:"`$fileName` — Имя файла (xfields.json или userxfields.json)."},{heading:`readjsonfields`,content:"**Возвращает:** `array<string, array<string, mixed>>` — Секция fields или пустой массив."},{heading:`parsexfieldsstring`,content:`Парсит сериализованную строку xfields DLE формата «name|value||…».`},{heading:`parsexfieldsstring`,content:`**С версии:** 173.3.0`},{heading:`parsexfieldsstring`,content:`**Параметры:**`},{heading:`parsexfieldsstring`,content:"`$raw` — Сырыая строка xfields."},{heading:`parsexfieldsstring`,content:"**Возвращает:** `array<string,` — string|null> Имя => значение."},{heading:`readjsoncache`,content:`Читает закешированные xfields, если TTL не истёк.`},{heading:`readjsoncache`,content:`**С версии:** 173.3.0`},{heading:`readjsoncache`,content:`**Параметры:**`},{heading:`readjsoncache`,content:"`$cacheName` — Ключ кеша."},{heading:`readjsoncache`,content:"**Возвращает:** `array<string, array<string, mixed>>` — |null Поля или null."},{heading:`writejsoncache`,content:`Записывает xfields в кеш DevCraft.`},{heading:`writejsoncache`,content:`**С версии:** 173.3.0`},{heading:`writejsoncache`,content:`**Параметры:**`},{heading:`writejsoncache`,content:"`$cacheName` — Ключ кеша."}],headings:[{id:`краткое-содержание`,content:`Краткое содержание:`},{id:`свойства`,content:`Свойства`},{id:`методы`,content:`Методы`},{id:`подробности`,content:`Подробности`},{id:`детали`,content:`Детали`},{id:`методы-1`,content:`Методы`},{id:`__construct`,content:`\\__construct()`},{id:`users`,content:`users()`},{id:`user`,content:`user()`},{id:`groups`,content:`groups()`},{id:`groupsfull`,content:`groupsFull()`},{id:`categories`,content:`categories()`},{id:`categoriesfull`,content:`categoriesFull()`},{id:`postxfields`,content:`postXfields()`},{id:`userxfields`,content:`userXfields()`},{id:`parseobjectxfields`,content:`parseObjectXfields()`},{id:`loadxfieldsfromjson`,content:`loadXfieldsFromJson()`},{id:`readjsonfields`,content:`readJsonFields()`},{id:`parsexfieldsstring`,content:`parseXfieldsString()`},{id:`readjsoncache`,content:`readJsonCache()`},{id:`writejsoncache`,content:`writeJsonCache()`}]},s=[{depth:2,url:`#краткое-содержание`,title:(0,n.jsx)(n.Fragment,{children:`Краткое содержание:`})},{depth:3,url:`#свойства`,title:(0,n.jsx)(n.Fragment,{children:`Свойства`})},{depth:3,url:`#методы`,title:(0,n.jsx)(n.Fragment,{children:`Методы`})},{depth:3,url:`#подробности`,title:(0,n.jsx)(n.Fragment,{children:`Подробности`})},{depth:2,url:`#детали`,title:(0,n.jsx)(n.Fragment,{children:`Детали`})},{depth:3,url:`#методы-1`,title:(0,n.jsx)(n.Fragment,{children:`Методы`})},{depth:3,url:`#__construct`,title:(0,n.jsx)(n.Fragment,{children:`__construct()`})},{depth:3,url:`#users`,title:(0,n.jsx)(n.Fragment,{children:`users()`})},{depth:3,url:`#user`,title:(0,n.jsx)(n.Fragment,{children:`user()`})},{depth:3,url:`#groups`,title:(0,n.jsx)(n.Fragment,{children:`groups()`})},{depth:3,url:`#groupsfull`,title:(0,n.jsx)(n.Fragment,{children:`groupsFull()`})},{depth:3,url:`#categories`,title:(0,n.jsx)(n.Fragment,{children:`categories()`})},{depth:3,url:`#categoriesfull`,title:(0,n.jsx)(n.Fragment,{children:`categoriesFull()`})},{depth:3,url:`#postxfields`,title:(0,n.jsx)(n.Fragment,{children:`postXfields()`})},{depth:3,url:`#userxfields`,title:(0,n.jsx)(n.Fragment,{children:`userXfields()`})},{depth:3,url:`#parseobjectxfields`,title:(0,n.jsx)(n.Fragment,{children:`parseObjectXfields()`})},{depth:3,url:`#loadxfieldsfromjson`,title:(0,n.jsx)(n.Fragment,{children:`loadXfieldsFromJson()`})},{depth:3,url:`#readjsonfields`,title:(0,n.jsx)(n.Fragment,{children:`readJsonFields()`})},{depth:3,url:`#parsexfieldsstring`,title:(0,n.jsx)(n.Fragment,{children:`parseXfieldsString()`})},{depth:3,url:`#readjsoncache`,title:(0,n.jsx)(n.Fragment,{children:`readJsonCache()`})},{depth:3,url:`#writejsoncache`,title:(0,n.jsx)(n.Fragment,{children:`writeJsonCache()`})}];function c(e){let t={a:`a`,code:`code`,em:`em`,h2:`h2`,h3:`h3`,hr:`hr`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h2,{id:`краткое-содержание`,children:`Краткое содержание:`}),`
`,(0,n.jsx)(t.p,{children:`Агрегирует справочные данные DLE: пользователи, группы, категории, xfields.`}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsx)(t.h3,{id:`свойства`,children:`Свойства`}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.em,{children:`Нет публичных свойств.`})}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsx)(t.h3,{id:`методы`,children:`Методы`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method___construct`,children:`__construct()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method_users`,children:`users()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method_user`,children:`user()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method_groups`,children:`groups()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method_groupsFull`,children:`groupsFull()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method_categories`,children:`categories()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method_categoriesFull`,children:`categoriesFull()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method_postXfields`,children:`postXfields()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method_userXfields`,children:`userXfields()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method_parseObjectXfields`,children:`parseObjectXfields()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`private `,(0,n.jsx)(t.a,{href:`#method_loadXfieldsFromJson`,children:`loadXfieldsFromJson()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`private `,(0,n.jsx)(t.a,{href:`#method_readJsonFields`,children:`readJsonFields()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`private `,(0,n.jsx)(t.a,{href:`#method_parseXfieldsString`,children:`parseXfieldsString()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`private `,(0,n.jsx)(t.a,{href:`#method_readJsonCache`,children:`readJsonCache()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`private `,(0,n.jsx)(t.a,{href:`#method_writeJsonCache`,children:`writeJsonCache()`})]}),`
`]}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsx)(t.h3,{id:`подробности`,children:`Подробности`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[`Путь: `,(0,n.jsx)(t.code,{children:`devcraft/src/classes/Support/DleDataService.php`})]}),`
`]}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsx)(t.h2,{id:`детали`,children:`Детали`}),`
`,(0,n.jsx)(t.h3,{id:`методы-1`,children:`Методы`}),`
`,(0,n.jsx)(`span`,{id:`method___construct`}),`
`,(0,n.jsx)(t.h3,{id:`__construct`,children:`__construct()`}),`
`,(0,n.jsxs)(t.p,{children:[`Инициализирует зависимости: `,(0,n.jsx)(t.code,{children:`$loader`}),`, `,(0,n.jsx)(t.code,{children:`$cacheTimer`}),`.`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 200.4.0`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$loader`}),` — Сервис загрузки таблиц DLE.`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$cacheTimer`}),` — TTL кеша xfields в секундах.`]}),`
`]}),`
`,(0,n.jsx)(`span`,{id:`method_users`}),`
`,(0,n.jsx)(t.h3,{id:`users`,children:`users()`}),`
`,(0,n.jsx)(t.p,{children:`Возвращает список пользователей DLE с основными полями.`}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 173.3.0`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`array<int, array<string, mixed>>`}),` — Строки users.`]}),`
`,(0,n.jsx)(`span`,{id:`method_user`}),`
`,(0,n.jsx)(t.h3,{id:`user`,children:`user()`}),`
`,(0,n.jsx)(t.p,{children:`Возвращает одного пользователя по id или имени.`}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 173.3.0`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$id`}),` — ID пользователя или null.`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$uname`}),` — Имя пользователя или null.`]}),`
`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`array<string, mixed>|array{}`}),` — Первая строка или пустой массив.`]}),`
`,(0,n.jsx)(`span`,{id:`method_groups`}),`
`,(0,n.jsx)(t.h3,{id:`groups`,children:`groups()`}),`
`,(0,n.jsx)(t.p,{children:`Возвращает карту id => group_name для групп пользователей.`}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 173.3.0`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`array<int|string,`}),` — string> Ассоциативный список групп.`]}),`
`,(0,n.jsx)(`span`,{id:`method_groupsFull`}),`
`,(0,n.jsx)(t.h3,{id:`groupsfull`,children:`groupsFull()`}),`
`,(0,n.jsx)(t.p,{children:`Возвращает полные строки таблицы usergroups.`}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 173.3.0`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`array<int, array<string, mixed>>`}),` — Все колонки групп.`]}),`
`,(0,n.jsx)(`span`,{id:`method_categories`}),`
`,(0,n.jsx)(t.h3,{id:`categories`,children:`categories()`}),`
`,(0,n.jsx)(t.p,{children:`Возвращает карту id => name для категорий DLE.`}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 173.3.0`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`array<int|string,`}),` — string> Ассоциативный список категорий.`]}),`
`,(0,n.jsx)(`span`,{id:`method_categoriesFull`}),`
`,(0,n.jsx)(t.h3,{id:`categoriesfull`,children:`categoriesFull()`}),`
`,(0,n.jsx)(t.p,{children:`Возвращает полные строки таблицы category.`}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 173.3.0`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`array<int, array<string, mixed>>`}),` — Все колонки категорий.`]}),`
`,(0,n.jsx)(`span`,{id:`method_postXfields`}),`
`,(0,n.jsx)(t.h3,{id:`postxfields`,children:`postXfields()`}),`
`,(0,n.jsx)(t.p,{children:`Загружает описание доп. полей публикаций из xfields.json.`}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 173.3.0`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`array<string, array<string, mixed>>`}),` — Поля по имени.`]}),`
`,(0,n.jsx)(`span`,{id:`method_userXfields`}),`
`,(0,n.jsx)(t.h3,{id:`userxfields`,children:`userXfields()`}),`
`,(0,n.jsx)(t.p,{children:`Загружает описание доп. полей пользователей из userxfields.json.`}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 173.3.0`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`array<string, array<string, mixed>>`}),` — Поля по имени.`]}),`
`,(0,n.jsx)(`span`,{id:`method_parseObjectXfields`}),`
`,(0,n.jsx)(t.h3,{id:`parseobjectxfields`,children:`parseObjectXfields()`}),`
`,(0,n.jsx)(t.p,{children:`Разбирает строку xfields записи post или user в ассоциативный массив.`}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 173.3.0`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$id`}),` — ID записи или пользователя.`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$type`}),` — Тип объекта: post или user.`]}),`
`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`array<string,`}),` — string|null> Имя поля => значение.`]}),`
`,(0,n.jsx)(`span`,{id:`method_loadXfieldsFromJson`}),`
`,(0,n.jsx)(t.h3,{id:`loadxfieldsfromjson`,children:`loadXfieldsFromJson()`}),`
`,(0,n.jsx)(t.p,{children:`Загружает xfields из JSON с кешированием.`}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 173.3.0`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$cacheName`}),` — Ключ кеша.`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$fileName`}),` — Имя файла в ENGINE_DIR/data/.`]}),`
`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`array<string, array<string, mixed>>`}),` — Поля xfields.`]}),`
`,(0,n.jsx)(`span`,{id:`method_readJsonFields`}),`
`,(0,n.jsx)(t.h3,{id:`readjsonfields`,children:`readJsonFields()`}),`
`,(0,n.jsx)(t.p,{children:`Читает и декодирует JSON-файл xfields из каталога data DLE.`}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 173.3.0`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$fileName`}),` — Имя файла (xfields.json или userxfields.json).`]}),`
`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`array<string, array<string, mixed>>`}),` — Секция fields или пустой массив.`]}),`
`,(0,n.jsx)(`span`,{id:`method_parseXfieldsString`}),`
`,(0,n.jsx)(t.h3,{id:`parsexfieldsstring`,children:`parseXfieldsString()`}),`
`,(0,n.jsx)(t.p,{children:`Парсит сериализованную строку xfields DLE формата «name|value||…».`}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 173.3.0`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$raw`}),` — Сырыая строка xfields.`]}),`
`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`array<string,`}),` — string|null> Имя => значение.`]}),`
`,(0,n.jsx)(`span`,{id:`method_readJsonCache`}),`
`,(0,n.jsx)(t.h3,{id:`readjsoncache`,children:`readJsonCache()`}),`
`,(0,n.jsx)(t.p,{children:`Читает закешированные xfields, если TTL не истёк.`}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 173.3.0`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$cacheName`}),` — Ключ кеша.`]}),`
`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`array<string, array<string, mixed>>`}),` — |null Поля или null.`]}),`
`,(0,n.jsx)(`span`,{id:`method_writeJsonCache`}),`
`,(0,n.jsx)(t.h3,{id:`writejsoncache`,children:`writeJsonCache()`}),`
`,(0,n.jsx)(t.p,{children:`Записывает xfields в кеш DevCraft.`}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 173.3.0`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$cacheName`}),` — Ключ кеша.`]}),`
`]})]})}function l(e={}){let{wrapper:t}=e.components||{};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}export{a as _markdown,l as default,r as frontmatter,i as lastModified,o as structuredData,s as toc};