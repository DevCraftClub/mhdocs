import{r as e}from"./rolldown-runtime-QTnfLwEv.js";import{t}from"./jsx-runtime-By8HlURe.js";var n=e(t()),r={title:`Уровни доступа`,description:`Уровень = набор разрешений для API-ключа: read/write/edit/delete, own_only, cheater.`,version:`200.1.0`},i=new Date(1787750944e3),a=`

Уровень доступа — это «роль» ключа: что ему можно делать с таблицами DLE. Открывается в DevCraft → **DLE API** → **Уровни доступа**.

## Поля уровня [#поля-уровня]

| Поле                            | Простыми словами                                         |
| ------------------------------- | -------------------------------------------------------- |
| Название / сортировка           | Как видно в админке                                      |
| Активен                         | Неактивный не назначайте новым ключам                    |
| Премодерация заявок             | Заявка на ключ ждёт одобрения админа                     |
| Только свои записи (\`own_only\`) | Видит/правит только «свои» строки                        |
| Полный доступ (\`cheater\`)       | Обходит scopes и own\\_only — только для админских ключей |
| Маски IP / паролей / ПДн        | Доп. маскирование поверх глобального secure ([env](env)) |

## Scopes (галочки по таблицам) [#scopes-галочки-по-таблицам]

Для каждой таблицы DLE: **чтение / запись / правка / удаление** (\`read\` / \`write\` / \`edit\` / \`delete\`).

Без \`cheater\` токен может только то, что отмечено. С \`cheater\` — почти всё.

Сначала выберите уровень в списке, потом правьте таблицу scopes.

## Связь с ключом и OAuth [#связь-с-ключом-и-oauth]

1. Создайте уровень + scopes.
2. Создайте API-ключ с этим уровнем.
3. Привяжите [OAuth-клиент](oauth-client) к ключу — токен наследует права ключа.

Уровень по умолчанию и «группа DLE → уровень»: [Настройки](settings), [Синхронизация](access-sync).

## См. также [#см-также]

* [Как работать с эндпоинтами](endpoints)
* [Безопасность](security)
* [Авторизация](auth)
`,o={contents:[{heading:void 0,content:`Уровень доступа — это «роль» ключа: что ему можно делать с таблицами DLE. Открывается в DevCraft → **DLE API** → **Уровни доступа**.`},{heading:`поля-уровня`,content:`Поле`},{heading:`поля-уровня`,content:`Простыми словами`},{heading:`поля-уровня`,content:`Название / сортировка`},{heading:`поля-уровня`,content:`Как видно в админке`},{heading:`поля-уровня`,content:`Активен`},{heading:`поля-уровня`,content:`Неактивный не назначайте новым ключам`},{heading:`поля-уровня`,content:`Премодерация заявок`},{heading:`поля-уровня`,content:`Заявка на ключ ждёт одобрения админа`},{heading:`поля-уровня`,content:"Только свои записи (`own_only`)"},{heading:`поля-уровня`,content:`Видит/правит только «свои» строки`},{heading:`поля-уровня`,content:"Полный доступ (`cheater`)"},{heading:`поля-уровня`,content:`Обходит scopes и own\\_only — только для админских ключей`},{heading:`поля-уровня`,content:`Маски IP / паролей / ПДн`},{heading:`поля-уровня`,content:`Доп. маскирование поверх глобального secure (env)`},{heading:`scopes-галочки-по-таблицам`,content:"Для каждой таблицы DLE: **чтение / запись / правка / удаление** (`read` / `write` / `edit` / `delete`)."},{heading:`scopes-галочки-по-таблицам`,content:"Без `cheater` токен может только то, что отмечено. С `cheater` — почти всё."},{heading:`scopes-галочки-по-таблицам`,content:`Сначала выберите уровень в списке, потом правьте таблицу scopes.`},{heading:`связь-с-ключом-и-oauth`,content:`Создайте уровень + scopes.`},{heading:`связь-с-ключом-и-oauth`,content:`Создайте API-ключ с этим уровнем.`},{heading:`связь-с-ключом-и-oauth`,content:`Привяжите OAuth-клиент к ключу — токен наследует права ключа.`},{heading:`связь-с-ключом-и-oauth`,content:`Уровень по умолчанию и «группа DLE → уровень»: Настройки, Синхронизация.`},{heading:`см-также`,content:`Как работать с эндпоинтами`},{heading:`см-также`,content:`Безопасность`},{heading:`см-также`,content:`Авторизация`}],headings:[{id:`поля-уровня`,content:`Поля уровня`},{id:`scopes-галочки-по-таблицам`,content:`Scopes (галочки по таблицам)`},{id:`связь-с-ключом-и-oauth`,content:`Связь с ключом и OAuth`},{id:`см-также`,content:`См. также`}]},s=[{depth:2,url:`#поля-уровня`,title:(0,n.jsx)(n.Fragment,{children:`Поля уровня`})},{depth:2,url:`#scopes-галочки-по-таблицам`,title:(0,n.jsx)(n.Fragment,{children:`Scopes (галочки по таблицам)`})},{depth:2,url:`#связь-с-ключом-и-oauth`,title:(0,n.jsx)(n.Fragment,{children:`Связь с ключом и OAuth`})},{depth:2,url:`#см-также`,title:(0,n.jsx)(n.Fragment,{children:`См. также`})}];function c(e){let t={a:`a`,code:`code`,h2:`h2`,li:`li`,ol:`ol`,p:`p`,strong:`strong`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,ul:`ul`,...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:[`Уровень доступа — это «роль» ключа: что ему можно делать с таблицами DLE. Открывается в DevCraft → `,(0,n.jsx)(t.strong,{children:`DLE API`}),` → `,(0,n.jsx)(t.strong,{children:`Уровни доступа`}),`.`]}),`
`,(0,n.jsx)(t.h2,{id:`поля-уровня`,children:`Поля уровня`}),`
`,(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`Поле`}),(0,n.jsx)(t.th,{children:`Простыми словами`})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`Название / сортировка`}),(0,n.jsx)(t.td,{children:`Как видно в админке`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`Активен`}),(0,n.jsx)(t.td,{children:`Неактивный не назначайте новым ключам`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`Премодерация заявок`}),(0,n.jsx)(t.td,{children:`Заявка на ключ ждёт одобрения админа`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsxs)(t.td,{children:[`Только свои записи (`,(0,n.jsx)(t.code,{children:`own_only`}),`)`]}),(0,n.jsx)(t.td,{children:`Видит/правит только «свои» строки`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsxs)(t.td,{children:[`Полный доступ (`,(0,n.jsx)(t.code,{children:`cheater`}),`)`]}),(0,n.jsx)(t.td,{children:`Обходит scopes и own_only — только для админских ключей`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`Маски IP / паролей / ПДн`}),(0,n.jsxs)(t.td,{children:[`Доп. маскирование поверх глобального secure (`,(0,n.jsx)(t.a,{href:`env`,children:`env`}),`)`]})]})]})]}),`
`,(0,n.jsx)(t.h2,{id:`scopes-галочки-по-таблицам`,children:`Scopes (галочки по таблицам)`}),`
`,(0,n.jsxs)(t.p,{children:[`Для каждой таблицы DLE: `,(0,n.jsx)(t.strong,{children:`чтение / запись / правка / удаление`}),` (`,(0,n.jsx)(t.code,{children:`read`}),` / `,(0,n.jsx)(t.code,{children:`write`}),` / `,(0,n.jsx)(t.code,{children:`edit`}),` / `,(0,n.jsx)(t.code,{children:`delete`}),`).`]}),`
`,(0,n.jsxs)(t.p,{children:[`Без `,(0,n.jsx)(t.code,{children:`cheater`}),` токен может только то, что отмечено. С `,(0,n.jsx)(t.code,{children:`cheater`}),` — почти всё.`]}),`
`,(0,n.jsx)(t.p,{children:`Сначала выберите уровень в списке, потом правьте таблицу scopes.`}),`
`,(0,n.jsx)(t.h2,{id:`связь-с-ключом-и-oauth`,children:`Связь с ключом и OAuth`}),`
`,(0,n.jsxs)(t.ol,{children:[`
`,(0,n.jsx)(t.li,{children:`Создайте уровень + scopes.`}),`
`,(0,n.jsx)(t.li,{children:`Создайте API-ключ с этим уровнем.`}),`
`,(0,n.jsxs)(t.li,{children:[`Привяжите `,(0,n.jsx)(t.a,{href:`oauth-client`,children:`OAuth-клиент`}),` к ключу — токен наследует права ключа.`]}),`
`]}),`
`,(0,n.jsxs)(t.p,{children:[`Уровень по умолчанию и «группа DLE → уровень»: `,(0,n.jsx)(t.a,{href:`settings`,children:`Настройки`}),`, `,(0,n.jsx)(t.a,{href:`access-sync`,children:`Синхронизация`}),`.`]}),`
`,(0,n.jsx)(t.h2,{id:`см-также`,children:`См. также`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`endpoints`,children:`Как работать с эндпоинтами`})}),`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`security`,children:`Безопасность`})}),`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`auth`,children:`Авторизация`})}),`
`]})]})}function l(e={}){let{wrapper:t}=e.components||{};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}export{a as _markdown,l as default,r as frontmatter,i as lastModified,o as structuredData,s as toc};