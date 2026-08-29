import{r as e}from"./rolldown-runtime-QTnfLwEv.js";import{t}from"./jsx-runtime-By8HlURe.js";var n=e(t()),r={title:`Класс: DleDataService`,description:`Static-фасад справочных данных DLE: пользователи, группы, категории, xfields.`},i=new Date(1788011088e3),a=`

## Краткое содержание [#краткое-содержание]

Агрегирует справочные данные DLE поверх [DataLoaderService](./DataLoaderService). **Static API** — без \`Application::dleData()\`.

**Путь:** \`devcraft/src/classes/Support/DleDataService.php\`

**См. также:** [DataLoaderService](./DataLoaderService), [QueryBuilder](./QueryBuilder)

## Методы [#методы]

* public static [users()](#method_users)
* public static [user()](#method_user)
* public static [groups()](#method_groups)
* public static [groupsFull()](#method_groupsFull)
* public static [categories()](#method_categories)
* public static [categoriesFull()](#method_categoriesFull)
* public static [postXfields()](#method_postXfields)
* public static [userXfields()](#method_userXfields)
* public static [parseObjectXfields()](#method_parseObjectXfields)

<span id="method_users" />

### users() [#users]

\`DleDataService::users(): array\` — строки users с основными полями.

<span id="method_user" />

### user() [#user]

\`DleDataService::user(?int $id = null, ?string $uname = null): array\` — один пользователь через QueryBuilder + \`loadOne\`.

<span id="method_groups" />

### groups() [#groups]

\`DleDataService::groups(): array\` — карта id => group\\_name.

<span id="method_groupsFull" />

### groupsFull() [#groupsfull]

\`DleDataService::groupsFull(): array\` — полные строки usergroups.

<span id="method_categories" />

### categories() [#categories]

\`DleDataService::categories(): array\` — карта id => name.

<span id="method_categoriesFull" />

### categoriesFull() [#categoriesfull]

\`DleDataService::categoriesFull(): array\` — полные строки category.

<span id="method_postXfields" />

### postXfields() [#postxfields]

\`DleDataService::postXfields(): array\` — доп. поля публикаций из xfields.json.

<span id="method_userXfields" />

### userXfields() [#userxfields]

\`DleDataService::userXfields(): array\` — доп. поля пользователей из userxfields.json.

<span id="method_parseObjectXfields" />

### parseObjectXfields() [#parseobjectxfields]

\`DleDataService::parseObjectXfields(int $id, string $type = 'post'): array\` — разбор строки xfields записи.
`,o={contents:[{heading:`краткое-содержание`,content:"Агрегирует справочные данные DLE поверх DataLoaderService. **Static API** — без `Application::dleData()`."},{heading:`краткое-содержание`,content:"**Путь:** `devcraft/src/classes/Support/DleDataService.php`"},{heading:`краткое-содержание`,content:`**См. также:** DataLoaderService, QueryBuilder`},{heading:`методы`,content:`public static users()`},{heading:`методы`,content:`public static user()`},{heading:`методы`,content:`public static groups()`},{heading:`методы`,content:`public static groupsFull()`},{heading:`методы`,content:`public static categories()`},{heading:`методы`,content:`public static categoriesFull()`},{heading:`методы`,content:`public static postXfields()`},{heading:`методы`,content:`public static userXfields()`},{heading:`методы`,content:`public static parseObjectXfields()`},{heading:`users`,content:"`DleDataService::users(): array` — строки users с основными полями."},{heading:`user`,content:"`DleDataService::user(?int $id = null, ?string $uname = null): array` — один пользователь через QueryBuilder + `loadOne`."},{heading:`groups`,content:"`DleDataService::groups(): array` — карта id => group\\_name."},{heading:`groupsfull`,content:"`DleDataService::groupsFull(): array` — полные строки usergroups."},{heading:`categories`,content:"`DleDataService::categories(): array` — карта id => name."},{heading:`categoriesfull`,content:"`DleDataService::categoriesFull(): array` — полные строки category."},{heading:`postxfields`,content:"`DleDataService::postXfields(): array` — доп. поля публикаций из xfields.json."},{heading:`userxfields`,content:"`DleDataService::userXfields(): array` — доп. поля пользователей из userxfields.json."},{heading:`parseobjectxfields`,content:"`DleDataService::parseObjectXfields(int $id, string $type = 'post'): array` — разбор строки xfields записи."}],headings:[{id:`краткое-содержание`,content:`Краткое содержание`},{id:`методы`,content:`Методы`},{id:`users`,content:`users()`},{id:`user`,content:`user()`},{id:`groups`,content:`groups()`},{id:`groupsfull`,content:`groupsFull()`},{id:`categories`,content:`categories()`},{id:`categoriesfull`,content:`categoriesFull()`},{id:`postxfields`,content:`postXfields()`},{id:`userxfields`,content:`userXfields()`},{id:`parseobjectxfields`,content:`parseObjectXfields()`}]},s=[{depth:2,url:`#краткое-содержание`,title:(0,n.jsx)(n.Fragment,{children:`Краткое содержание`})},{depth:2,url:`#методы`,title:(0,n.jsx)(n.Fragment,{children:`Методы`})},{depth:3,url:`#users`,title:(0,n.jsx)(n.Fragment,{children:`users()`})},{depth:3,url:`#user`,title:(0,n.jsx)(n.Fragment,{children:`user()`})},{depth:3,url:`#groups`,title:(0,n.jsx)(n.Fragment,{children:`groups()`})},{depth:3,url:`#groupsfull`,title:(0,n.jsx)(n.Fragment,{children:`groupsFull()`})},{depth:3,url:`#categories`,title:(0,n.jsx)(n.Fragment,{children:`categories()`})},{depth:3,url:`#categoriesfull`,title:(0,n.jsx)(n.Fragment,{children:`categoriesFull()`})},{depth:3,url:`#postxfields`,title:(0,n.jsx)(n.Fragment,{children:`postXfields()`})},{depth:3,url:`#userxfields`,title:(0,n.jsx)(n.Fragment,{children:`userXfields()`})},{depth:3,url:`#parseobjectxfields`,title:(0,n.jsx)(n.Fragment,{children:`parseObjectXfields()`})}];function c(e){let t={a:`a`,code:`code`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h2,{id:`краткое-содержание`,children:`Краткое содержание`}),`
`,(0,n.jsxs)(t.p,{children:[`Агрегирует справочные данные DLE поверх `,(0,n.jsx)(t.a,{href:`./DataLoaderService`,children:`DataLoaderService`}),`. `,(0,n.jsx)(t.strong,{children:`Static API`}),` — без `,(0,n.jsx)(t.code,{children:`Application::dleData()`}),`.`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Путь:`}),` `,(0,n.jsx)(t.code,{children:`devcraft/src/classes/Support/DleDataService.php`})]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`См. также:`}),` `,(0,n.jsx)(t.a,{href:`./DataLoaderService`,children:`DataLoaderService`}),`, `,(0,n.jsx)(t.a,{href:`./QueryBuilder`,children:`QueryBuilder`})]}),`
`,(0,n.jsx)(t.h2,{id:`методы`,children:`Методы`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[`public static `,(0,n.jsx)(t.a,{href:`#method_users`,children:`users()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`public static `,(0,n.jsx)(t.a,{href:`#method_user`,children:`user()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`public static `,(0,n.jsx)(t.a,{href:`#method_groups`,children:`groups()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`public static `,(0,n.jsx)(t.a,{href:`#method_groupsFull`,children:`groupsFull()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`public static `,(0,n.jsx)(t.a,{href:`#method_categories`,children:`categories()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`public static `,(0,n.jsx)(t.a,{href:`#method_categoriesFull`,children:`categoriesFull()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`public static `,(0,n.jsx)(t.a,{href:`#method_postXfields`,children:`postXfields()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`public static `,(0,n.jsx)(t.a,{href:`#method_userXfields`,children:`userXfields()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`public static `,(0,n.jsx)(t.a,{href:`#method_parseObjectXfields`,children:`parseObjectXfields()`})]}),`
`]}),`
`,(0,n.jsx)(`span`,{id:`method_users`}),`
`,(0,n.jsx)(t.h3,{id:`users`,children:`users()`}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:`DleDataService::users(): array`}),` — строки users с основными полями.`]}),`
`,(0,n.jsx)(`span`,{id:`method_user`}),`
`,(0,n.jsx)(t.h3,{id:`user`,children:`user()`}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:`DleDataService::user(?int $id = null, ?string $uname = null): array`}),` — один пользователь через QueryBuilder + `,(0,n.jsx)(t.code,{children:`loadOne`}),`.`]}),`
`,(0,n.jsx)(`span`,{id:`method_groups`}),`
`,(0,n.jsx)(t.h3,{id:`groups`,children:`groups()`}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:`DleDataService::groups(): array`}),` — карта id => group_name.`]}),`
`,(0,n.jsx)(`span`,{id:`method_groupsFull`}),`
`,(0,n.jsx)(t.h3,{id:`groupsfull`,children:`groupsFull()`}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:`DleDataService::groupsFull(): array`}),` — полные строки usergroups.`]}),`
`,(0,n.jsx)(`span`,{id:`method_categories`}),`
`,(0,n.jsx)(t.h3,{id:`categories`,children:`categories()`}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:`DleDataService::categories(): array`}),` — карта id => name.`]}),`
`,(0,n.jsx)(`span`,{id:`method_categoriesFull`}),`
`,(0,n.jsx)(t.h3,{id:`categoriesfull`,children:`categoriesFull()`}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:`DleDataService::categoriesFull(): array`}),` — полные строки category.`]}),`
`,(0,n.jsx)(`span`,{id:`method_postXfields`}),`
`,(0,n.jsx)(t.h3,{id:`postxfields`,children:`postXfields()`}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:`DleDataService::postXfields(): array`}),` — доп. поля публикаций из xfields.json.`]}),`
`,(0,n.jsx)(`span`,{id:`method_userXfields`}),`
`,(0,n.jsx)(t.h3,{id:`userxfields`,children:`userXfields()`}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:`DleDataService::userXfields(): array`}),` — доп. поля пользователей из userxfields.json.`]}),`
`,(0,n.jsx)(`span`,{id:`method_parseObjectXfields`}),`
`,(0,n.jsx)(t.h3,{id:`parseobjectxfields`,children:`parseObjectXfields()`}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:`DleDataService::parseObjectXfields(int $id, string $type = 'post'): array`}),` — разбор строки xfields записи.`]})]})}function l(e={}){let{wrapper:t}=e.components||{};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}export{a as _markdown,l as default,r as frontmatter,i as lastModified,o as structuredData,s as toc};