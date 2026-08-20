import{r as e}from"./rolldown-runtime-QTnfLwEv.js";import{t}from"./jsx-runtime-By8HlURe.js";var n=e(t()),r={title:`Синхронизация с группами`,description:`Как привязать группу пользователей DLE к уровню доступа API.`,version:`200.1.0`},i=new Date(1787218238e3),a=`

Идея простая: группа на сайте (редакторы, VIP…) → [уровень доступа](access-levels) API. Тогда при заявке на ключ из профиля человеку автоматически подставится нужный набор прав.

Страница: DevCraft → **DLE API** → **Синхронизация с группами**.

## Как настроить [#как-настроить]

<Steps>
  <Step>
    ### Создайте уровни и scopes [#создайте-уровни-и-scopes]

    См. [Уровни доступа](access-levels).
  </Step>

  <Step>
    ### Назначьте уровень каждой группе [#назначьте-уровень-каждой-группе]

    На странице синхронизации выберите уровень или «—». Сохраните.
  </Step>
</Steps>

Гостевые / служебные группы без API обычно оставляют без уровня.

## Когда срабатывает [#когда-срабатывает]

* Пользователь жмёт «запросить ключ» в профиле — [Профиль на сайте](../install#профиль-на-сайте), флаги в [Настройках](settings).
* Если привязки нет — берётся [уровень по умолчанию](settings).

Явный \`access_level_id\` на уже созданном ключе в админке **Ключи** важнее карты групп.

## См. также [#см-также]

* [Уровни доступа](access-levels)
* [Настройки](settings)
* [Шаблоны](templates)
`,o={contents:[{heading:void 0,content:`Идея простая: группа на сайте (редакторы, VIP…) → уровень доступа API. Тогда при заявке на ключ из профиля человеку автоматически подставится нужный набор прав.`},{heading:void 0,content:`Страница: DevCraft → **DLE API** → **Синхронизация с группами**.`},{heading:`создайте-уровни-и-scopes`,content:`См. Уровни доступа.`},{heading:`назначьте-уровень-каждой-группе`,content:`На странице синхронизации выберите уровень или «—». Сохраните.`},{heading:`назначьте-уровень-каждой-группе`,content:`Гостевые / служебные группы без API обычно оставляют без уровня.`},{heading:`когда-срабатывает`,content:`Пользователь жмёт «запросить ключ» в профиле — Профиль на сайте, флаги в Настройках.`},{heading:`когда-срабатывает`,content:`Если привязки нет — берётся уровень по умолчанию.`},{heading:`когда-срабатывает`,content:"Явный `access_level_id` на уже созданном ключе в админке **Ключи** важнее карты групп."},{heading:`см-также`,content:`Уровни доступа`},{heading:`см-также`,content:`Настройки`},{heading:`см-также`,content:`Шаблоны`}],headings:[{id:`как-настроить`,content:`Как настроить`},{id:`создайте-уровни-и-scopes`,content:`Создайте уровни и scopes`},{id:`назначьте-уровень-каждой-группе`,content:`Назначьте уровень каждой группе`},{id:`когда-срабатывает`,content:`Когда срабатывает`},{id:`см-также`,content:`См. также`}]},s=[{depth:2,url:`#как-настроить`,title:(0,n.jsx)(n.Fragment,{children:`Как настроить`})},{depth:3,url:`#создайте-уровни-и-scopes`,title:(0,n.jsx)(n.Fragment,{children:`Создайте уровни и scopes`})},{depth:3,url:`#назначьте-уровень-каждой-группе`,title:(0,n.jsx)(n.Fragment,{children:`Назначьте уровень каждой группе`})},{depth:2,url:`#когда-срабатывает`,title:(0,n.jsx)(n.Fragment,{children:`Когда срабатывает`})},{depth:2,url:`#см-также`,title:(0,n.jsx)(n.Fragment,{children:`См. также`})}];function c(e){let t={a:`a`,code:`code`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...e.components},{Step:r,Steps:i}=t;return r||u(`Step`,!0),i||u(`Steps`,!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:[`Идея простая: группа на сайте (редакторы, VIP…) → `,(0,n.jsx)(t.a,{href:`access-levels`,children:`уровень доступа`}),` API. Тогда при заявке на ключ из профиля человеку автоматически подставится нужный набор прав.`]}),`
`,(0,n.jsxs)(t.p,{children:[`Страница: DevCraft → `,(0,n.jsx)(t.strong,{children:`DLE API`}),` → `,(0,n.jsx)(t.strong,{children:`Синхронизация с группами`}),`.`]}),`
`,(0,n.jsx)(t.h2,{id:`как-настроить`,children:`Как настроить`}),`
`,(0,n.jsxs)(i,{children:[(0,n.jsxs)(r,{children:[(0,n.jsx)(t.h3,{id:`создайте-уровни-и-scopes`,children:`Создайте уровни и scopes`}),(0,n.jsxs)(t.p,{children:[`См. `,(0,n.jsx)(t.a,{href:`access-levels`,children:`Уровни доступа`}),`.`]})]}),(0,n.jsxs)(r,{children:[(0,n.jsx)(t.h3,{id:`назначьте-уровень-каждой-группе`,children:`Назначьте уровень каждой группе`}),(0,n.jsx)(t.p,{children:`На странице синхронизации выберите уровень или «—». Сохраните.`})]})]}),`
`,(0,n.jsx)(t.p,{children:`Гостевые / служебные группы без API обычно оставляют без уровня.`}),`
`,(0,n.jsx)(t.h2,{id:`когда-срабатывает`,children:`Когда срабатывает`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[`Пользователь жмёт «запросить ключ» в профиле — `,(0,n.jsx)(t.a,{href:`../install#%D0%BF%D1%80%D0%BE%D1%84%D0%B8%D0%BB%D1%8C-%D0%BD%D0%B0-%D1%81%D0%B0%D0%B9%D1%82%D0%B5`,children:`Профиль на сайте`}),`, флаги в `,(0,n.jsx)(t.a,{href:`settings`,children:`Настройках`}),`.`]}),`
`,(0,n.jsxs)(t.li,{children:[`Если привязки нет — берётся `,(0,n.jsx)(t.a,{href:`settings`,children:`уровень по умолчанию`}),`.`]}),`
`]}),`
`,(0,n.jsxs)(t.p,{children:[`Явный `,(0,n.jsx)(t.code,{children:`access_level_id`}),` на уже созданном ключе в админке `,(0,n.jsx)(t.strong,{children:`Ключи`}),` важнее карты групп.`]}),`
`,(0,n.jsx)(t.h2,{id:`см-также`,children:`См. также`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`access-levels`,children:`Уровни доступа`})}),`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`settings`,children:`Настройки`})}),`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`templates`,children:`Шаблоны`})}),`
`]})]})}function l(e={}){let{wrapper:t}=e.components||{};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}function u(e,t){throw Error(`Expected `+(t?`component`:`object`)+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}export{a as _markdown,l as default,r as frontmatter,i as lastModified,o as structuredData,s as toc};