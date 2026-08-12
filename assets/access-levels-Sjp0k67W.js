import{r as e}from"./rolldown-runtime-QTnfLwEv.js";import{t}from"./jsx-runtime-By8HlURe.js";var n=e(t()),r={title:`Уровни доступа`,description:`Access levels DLE API: own_only, cheater, маски, scopes read/write/edit/delete.`},i=new Date(1786541452e3),a=`

DevCraft → **DLE API** → **Уровни доступа**. Уровень задаёт политику ключа: флаги + таблица scopes. Ключ ссылается на уровень (или legacy-scopes на самом ключе).

## Список и форма [#список-и-форма]

Поля уровня:

| Поле                            | Смысл                                                          |
| ------------------------------- | -------------------------------------------------------------- |
| Название / сортировка           | Отображение в админке                                          |
| Активен                         | Неактивный уровень не назначайте новым ключам                  |
| Премодерация заявок             | Заявки на ключ с этим уровнем ждут approve                     |
| Только свои записи (\`own_only\`) | CRUD ограничен записями владельца ключа                        |
| Полный доступ (\`cheater\`)       | Обход ограничений scopes / own\\_only (только админским ключам) |
| Маски IP / паролей / ПДн        | Доп. маскирование поверх глобального \`secure\`                  |

## Scopes [#scopes]

Таблица **Scopes уровня**: для каждой известной таблицы DLE — флаги **чтение / запись / правка / удаление** (\`read\` / \`write\` / \`edit\` / \`delete\`).

\`cheater\` игнорирует матрицу. Без \`cheater\` Bearer получает только отмеченные операции.

Сначала выберите уровень в списке (редактирование), затем правьте scopes.

## Связь с ключом и OAuth [#связь-с-ключом-и-oauth]

1. Создайте уровень + scopes.
2. Создайте API-ключ с этим уровнем.
3. Привяжите [OAuth-клиент](oauth-client) к ключу — токен наследует scopes ключа.

Уровень по умолчанию и привязка групп DLE: [Настройки](settings), [Синхронизация](access-sync).

## См. также [#см-также]

* [Безопасность](security)
* [Авторизация](auth)
`,o={contents:[{heading:void 0,content:`DevCraft → **DLE API** → **Уровни доступа**. Уровень задаёт политику ключа: флаги + таблица scopes. Ключ ссылается на уровень (или legacy-scopes на самом ключе).`},{heading:`список-и-форма`,content:`Поля уровня:`},{heading:`список-и-форма`,content:`Поле`},{heading:`список-и-форма`,content:`Смысл`},{heading:`список-и-форма`,content:`Название / сортировка`},{heading:`список-и-форма`,content:`Отображение в админке`},{heading:`список-и-форма`,content:`Активен`},{heading:`список-и-форма`,content:`Неактивный уровень не назначайте новым ключам`},{heading:`список-и-форма`,content:`Премодерация заявок`},{heading:`список-и-форма`,content:`Заявки на ключ с этим уровнем ждут approve`},{heading:`список-и-форма`,content:"Только свои записи (`own_only`)"},{heading:`список-и-форма`,content:`CRUD ограничен записями владельца ключа`},{heading:`список-и-форма`,content:"Полный доступ (`cheater`)"},{heading:`список-и-форма`,content:`Обход ограничений scopes / own\\_only (только админским ключам)`},{heading:`список-и-форма`,content:`Маски IP / паролей / ПДн`},{heading:`список-и-форма`,content:"Доп. маскирование поверх глобального `secure`"},{heading:`scopes`,content:"Таблица **Scopes уровня**: для каждой известной таблицы DLE — флаги **чтение / запись / правка / удаление** (`read` / `write` / `edit` / `delete`)."},{heading:`scopes`,content:"`cheater` игнорирует матрицу. Без `cheater` Bearer получает только отмеченные операции."},{heading:`scopes`,content:`Сначала выберите уровень в списке (редактирование), затем правьте scopes.`},{heading:`связь-с-ключом-и-oauth`,content:`Создайте уровень + scopes.`},{heading:`связь-с-ключом-и-oauth`,content:`Создайте API-ключ с этим уровнем.`},{heading:`связь-с-ключом-и-oauth`,content:`Привяжите OAuth-клиент к ключу — токен наследует scopes ключа.`},{heading:`связь-с-ключом-и-oauth`,content:`Уровень по умолчанию и привязка групп DLE: Настройки, Синхронизация.`},{heading:`см-также`,content:`Безопасность`},{heading:`см-также`,content:`Авторизация`}],headings:[{id:`список-и-форма`,content:`Список и форма`},{id:`scopes`,content:`Scopes`},{id:`связь-с-ключом-и-oauth`,content:`Связь с ключом и OAuth`},{id:`см-также`,content:`См. также`}]},s=[{depth:2,url:`#список-и-форма`,title:(0,n.jsx)(n.Fragment,{children:`Список и форма`})},{depth:2,url:`#scopes`,title:(0,n.jsx)(n.Fragment,{children:`Scopes`})},{depth:2,url:`#связь-с-ключом-и-oauth`,title:(0,n.jsx)(n.Fragment,{children:`Связь с ключом и OAuth`})},{depth:2,url:`#см-также`,title:(0,n.jsx)(n.Fragment,{children:`См. также`})}];function c(e){let t={a:`a`,code:`code`,h2:`h2`,li:`li`,ol:`ol`,p:`p`,strong:`strong`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,ul:`ul`,...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:[`DevCraft → `,(0,n.jsx)(t.strong,{children:`DLE API`}),` → `,(0,n.jsx)(t.strong,{children:`Уровни доступа`}),`. Уровень задаёт политику ключа: флаги + таблица scopes. Ключ ссылается на уровень (или legacy-scopes на самом ключе).`]}),`
`,(0,n.jsx)(t.h2,{id:`список-и-форма`,children:`Список и форма`}),`
`,(0,n.jsx)(t.p,{children:`Поля уровня:`}),`
`,(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`Поле`}),(0,n.jsx)(t.th,{children:`Смысл`})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`Название / сортировка`}),(0,n.jsx)(t.td,{children:`Отображение в админке`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`Активен`}),(0,n.jsx)(t.td,{children:`Неактивный уровень не назначайте новым ключам`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`Премодерация заявок`}),(0,n.jsx)(t.td,{children:`Заявки на ключ с этим уровнем ждут approve`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsxs)(t.td,{children:[`Только свои записи (`,(0,n.jsx)(t.code,{children:`own_only`}),`)`]}),(0,n.jsx)(t.td,{children:`CRUD ограничен записями владельца ключа`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsxs)(t.td,{children:[`Полный доступ (`,(0,n.jsx)(t.code,{children:`cheater`}),`)`]}),(0,n.jsx)(t.td,{children:`Обход ограничений scopes / own_only (только админским ключам)`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`Маски IP / паролей / ПДн`}),(0,n.jsxs)(t.td,{children:[`Доп. маскирование поверх глобального `,(0,n.jsx)(t.code,{children:`secure`})]})]})]})]}),`
`,(0,n.jsx)(t.h2,{id:`scopes`,children:`Scopes`}),`
`,(0,n.jsxs)(t.p,{children:[`Таблица `,(0,n.jsx)(t.strong,{children:`Scopes уровня`}),`: для каждой известной таблицы DLE — флаги `,(0,n.jsx)(t.strong,{children:`чтение / запись / правка / удаление`}),` (`,(0,n.jsx)(t.code,{children:`read`}),` / `,(0,n.jsx)(t.code,{children:`write`}),` / `,(0,n.jsx)(t.code,{children:`edit`}),` / `,(0,n.jsx)(t.code,{children:`delete`}),`).`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:`cheater`}),` игнорирует матрицу. Без `,(0,n.jsx)(t.code,{children:`cheater`}),` Bearer получает только отмеченные операции.`]}),`
`,(0,n.jsx)(t.p,{children:`Сначала выберите уровень в списке (редактирование), затем правьте scopes.`}),`
`,(0,n.jsx)(t.h2,{id:`связь-с-ключом-и-oauth`,children:`Связь с ключом и OAuth`}),`
`,(0,n.jsxs)(t.ol,{children:[`
`,(0,n.jsx)(t.li,{children:`Создайте уровень + scopes.`}),`
`,(0,n.jsx)(t.li,{children:`Создайте API-ключ с этим уровнем.`}),`
`,(0,n.jsxs)(t.li,{children:[`Привяжите `,(0,n.jsx)(t.a,{href:`oauth-client`,children:`OAuth-клиент`}),` к ключу — токен наследует scopes ключа.`]}),`
`]}),`
`,(0,n.jsxs)(t.p,{children:[`Уровень по умолчанию и привязка групп DLE: `,(0,n.jsx)(t.a,{href:`settings`,children:`Настройки`}),`, `,(0,n.jsx)(t.a,{href:`access-sync`,children:`Синхронизация`}),`.`]}),`
`,(0,n.jsx)(t.h2,{id:`см-также`,children:`См. также`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`security`,children:`Безопасность`})}),`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`auth`,children:`Авторизация`})}),`
`]})]})}function l(e={}){let{wrapper:t}=e.components||{};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}export{a as _markdown,l as default,r as frontmatter,i as lastModified,o as structuredData,s as toc};