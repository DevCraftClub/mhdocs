import{r as e}from"./rolldown-runtime-QTnfLwEv.js";import{t}from"./jsx-runtime-By8HlURe.js";var n=e(t()),r={title:`Синхронизация с группами`,description:`Привязка групп пользователей DLE к уровням доступа DLE API.`},i=new Date(1786541452e3),a=`

DevCraft → **DLE API** → **Синхронизация с группами**.

Каждой группе пользователей DLE можно назначить [уровень доступа](access-levels). При самогенерации / заявке на ключ из профиля резолвер берёт уровень группы; если привязки нет — [уровень по умолчанию](settings).

## Как настроить [#как-настроить]

1. Создайте уровни и scopes.
2. На странице синхронизации для каждой группы выберите уровень (или «—»).
3. Сохраните.

Гостевая / служебные группы без API обычно оставляют без уровня.

## Когда срабатывает [#когда-срабатывает]

* Пользователь запрашивает ключ в профиле (\`profile_allow_generate\` / заявка) — см. [Профиль на сайте](../install#профиль-на-сайте).
* Админ создаёт ключ без явного уровня — может подставиться default / группа.

Прямое назначение \`access_level_id\` на ключе в админке **Ключи** имеет приоритет над картой групп для уже созданного ключа.

## См. также [#см-также]

* [Уровни доступа](access-levels)
* [Настройки](settings)
`,o={contents:[{heading:void 0,content:`DevCraft → **DLE API** → **Синхронизация с группами**.`},{heading:void 0,content:`Каждой группе пользователей DLE можно назначить уровень доступа. При самогенерации / заявке на ключ из профиля резолвер берёт уровень группы; если привязки нет — уровень по умолчанию.`},{heading:`как-настроить`,content:`Создайте уровни и scopes.`},{heading:`как-настроить`,content:`На странице синхронизации для каждой группы выберите уровень (или «—»).`},{heading:`как-настроить`,content:`Сохраните.`},{heading:`как-настроить`,content:`Гостевая / служебные группы без API обычно оставляют без уровня.`},{heading:`когда-срабатывает`,content:"Пользователь запрашивает ключ в профиле (`profile_allow_generate` / заявка) — см. Профиль на сайте."},{heading:`когда-срабатывает`,content:`Админ создаёт ключ без явного уровня — может подставиться default / группа.`},{heading:`когда-срабатывает`,content:"Прямое назначение `access_level_id` на ключе в админке **Ключи** имеет приоритет над картой групп для уже созданного ключа."},{heading:`см-также`,content:`Уровни доступа`},{heading:`см-также`,content:`Настройки`}],headings:[{id:`как-настроить`,content:`Как настроить`},{id:`когда-срабатывает`,content:`Когда срабатывает`},{id:`см-также`,content:`См. также`}]},s=[{depth:2,url:`#как-настроить`,title:(0,n.jsx)(n.Fragment,{children:`Как настроить`})},{depth:2,url:`#когда-срабатывает`,title:(0,n.jsx)(n.Fragment,{children:`Когда срабатывает`})},{depth:2,url:`#см-также`,title:(0,n.jsx)(n.Fragment,{children:`См. также`})}];function c(e){let t={a:`a`,code:`code`,h2:`h2`,li:`li`,ol:`ol`,p:`p`,strong:`strong`,ul:`ul`,...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:[`DevCraft → `,(0,n.jsx)(t.strong,{children:`DLE API`}),` → `,(0,n.jsx)(t.strong,{children:`Синхронизация с группами`}),`.`]}),`
`,(0,n.jsxs)(t.p,{children:[`Каждой группе пользователей DLE можно назначить `,(0,n.jsx)(t.a,{href:`access-levels`,children:`уровень доступа`}),`. При самогенерации / заявке на ключ из профиля резолвер берёт уровень группы; если привязки нет — `,(0,n.jsx)(t.a,{href:`settings`,children:`уровень по умолчанию`}),`.`]}),`
`,(0,n.jsx)(t.h2,{id:`как-настроить`,children:`Как настроить`}),`
`,(0,n.jsxs)(t.ol,{children:[`
`,(0,n.jsx)(t.li,{children:`Создайте уровни и scopes.`}),`
`,(0,n.jsx)(t.li,{children:`На странице синхронизации для каждой группы выберите уровень (или «—»).`}),`
`,(0,n.jsx)(t.li,{children:`Сохраните.`}),`
`]}),`
`,(0,n.jsx)(t.p,{children:`Гостевая / служебные группы без API обычно оставляют без уровня.`}),`
`,(0,n.jsx)(t.h2,{id:`когда-срабатывает`,children:`Когда срабатывает`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[`Пользователь запрашивает ключ в профиле (`,(0,n.jsx)(t.code,{children:`profile_allow_generate`}),` / заявка) — см. `,(0,n.jsx)(t.a,{href:`../install#%D0%BF%D1%80%D0%BE%D1%84%D0%B8%D0%BB%D1%8C-%D0%BD%D0%B0-%D1%81%D0%B0%D0%B9%D1%82%D0%B5`,children:`Профиль на сайте`}),`.`]}),`
`,(0,n.jsx)(t.li,{children:`Админ создаёт ключ без явного уровня — может подставиться default / группа.`}),`
`]}),`
`,(0,n.jsxs)(t.p,{children:[`Прямое назначение `,(0,n.jsx)(t.code,{children:`access_level_id`}),` на ключе в админке `,(0,n.jsx)(t.strong,{children:`Ключи`}),` имеет приоритет над картой групп для уже созданного ключа.`]}),`
`,(0,n.jsx)(t.h2,{id:`см-также`,children:`См. также`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`access-levels`,children:`Уровни доступа`})}),`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`settings`,children:`Настройки`})}),`
`]})]})}function l(e={}){let{wrapper:t}=e.components||{};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}export{a as _markdown,l as default,r as frontmatter,i as lastModified,o as structuredData,s as toc};