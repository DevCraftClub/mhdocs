import{r as e}from"./rolldown-runtime-QTnfLwEv.js";import{t}from"./jsx-runtime-By8HlURe.js";var n=e(t()),r={title:`Очередь предложений`,description:`Как модерировать пользовательские теги в админке TagsAdd.`,version:`200.3.1`},i=new Date(1789485207e3),a=`

## Введение [#введение]

Посетитель предлагает теги на полной новости. Запись попадает в очередь. Модератор одобряет (теги пишутся в новость), отклоняет с причиной или удаляет без письма.

## Предварительные требования [#предварительные-требования]

* [Начало работы](../getting_started)
* [Установка](../install)
* [Настройки](../settings) — куда вставлять теги и шаблоны ЛС

## Пошагово [#пошагово]

<Steps>
  <Step>
    ### Откройте очередь [#откройте-очередь]

    Адрес: \`?mod=tags_add&action=suggestions\`. Фильтры списка — схема \`Filter/filter.schema.php\`.
  </Step>

  <Step>
    ### Карточка [#карточка]

    Скрытая страница \`?mod=tags_add&action=edit&id=…\`. Можно поправить список тегов (\`save_suggestion\`) и затем одобрить.
  </Step>

  <Step>
    ### Одобрение [#одобрение]

    Теги дописываются к уже существующим ([TagSyncService](../reference/TagSyncService)). Автор получает ЛС, если в профиле разрешено \`onadd\`. Заявка из очереди исчезает.
  </Step>

  <Step>
    ### Отклонение [#отклонение]

    Окно Metro: причина или стандартная из настроек. Отмена окна **не** удаляет запись. После отклонения заявка удаляется, автору уходит ЛС (\`ondel\`).
  </Step>

  <Step>
    ### Массовые действия [#массовые-действия]

    Выберите строки и действие \`approve\` / \`reject\` / \`delete\`. См. [AJAX](../reference/ajax).
  </Step>
</Steps>

## Связанные разделы [#связанные-разделы]

* [Справочник: модерация](../reference/ModerationService)
* [История изменений](../changelog)
`,o={contents:[{heading:`введение`,content:`Посетитель предлагает теги на полной новости. Запись попадает в очередь. Модератор одобряет (теги пишутся в новость), отклоняет с причиной или удаляет без письма.`},{heading:`предварительные-требования`,content:`Начало работы`},{heading:`предварительные-требования`,content:`Установка`},{heading:`предварительные-требования`,content:`Настройки — куда вставлять теги и шаблоны ЛС`},{heading:`откройте-очередь`,content:"Адрес: `?mod=tags_add&action=suggestions`. Фильтры списка — схема `Filter/filter.schema.php`."},{heading:`карточка`,content:"Скрытая страница `?mod=tags_add&action=edit&id=…`. Можно поправить список тегов (`save_suggestion`) и затем одобрить."},{heading:`одобрение`,content:"Теги дописываются к уже существующим (TagSyncService). Автор получает ЛС, если в профиле разрешено `onadd`. Заявка из очереди исчезает."},{heading:`отклонение`,content:"Окно Metro: причина или стандартная из настроек. Отмена окна **не** удаляет запись. После отклонения заявка удаляется, автору уходит ЛС (`ondel`)."},{heading:`массовые-действия`,content:"Выберите строки и действие `approve` / `reject` / `delete`. См. AJAX."},{heading:`связанные-разделы`,content:`Справочник: модерация`},{heading:`связанные-разделы`,content:`История изменений`}],headings:[{id:`введение`,content:`Введение`},{id:`предварительные-требования`,content:`Предварительные требования`},{id:`пошагово`,content:`Пошагово`},{id:`откройте-очередь`,content:`Откройте очередь`},{id:`карточка`,content:`Карточка`},{id:`одобрение`,content:`Одобрение`},{id:`отклонение`,content:`Отклонение`},{id:`массовые-действия`,content:`Массовые действия`},{id:`связанные-разделы`,content:`Связанные разделы`}]},s=[{depth:2,url:`#введение`,title:(0,n.jsx)(n.Fragment,{children:`Введение`})},{depth:2,url:`#предварительные-требования`,title:(0,n.jsx)(n.Fragment,{children:`Предварительные требования`})},{depth:2,url:`#пошагово`,title:(0,n.jsx)(n.Fragment,{children:`Пошагово`})},{depth:3,url:`#откройте-очередь`,title:(0,n.jsx)(n.Fragment,{children:`Откройте очередь`})},{depth:3,url:`#карточка`,title:(0,n.jsx)(n.Fragment,{children:`Карточка`})},{depth:3,url:`#одобрение`,title:(0,n.jsx)(n.Fragment,{children:`Одобрение`})},{depth:3,url:`#отклонение`,title:(0,n.jsx)(n.Fragment,{children:`Отклонение`})},{depth:3,url:`#массовые-действия`,title:(0,n.jsx)(n.Fragment,{children:`Массовые действия`})},{depth:2,url:`#связанные-разделы`,title:(0,n.jsx)(n.Fragment,{children:`Связанные разделы`})}];function c(e){let t={a:`a`,code:`code`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...e.components},{Step:r,Steps:i}=t;return r||u(`Step`,!0),i||u(`Steps`,!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h2,{id:`введение`,children:`Введение`}),`
`,(0,n.jsx)(t.p,{children:`Посетитель предлагает теги на полной новости. Запись попадает в очередь. Модератор одобряет (теги пишутся в новость), отклоняет с причиной или удаляет без письма.`}),`
`,(0,n.jsx)(t.h2,{id:`предварительные-требования`,children:`Предварительные требования`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`../getting_started`,children:`Начало работы`})}),`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`../install`,children:`Установка`})}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:`../settings`,children:`Настройки`}),` — куда вставлять теги и шаблоны ЛС`]}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`пошагово`,children:`Пошагово`}),`
`,(0,n.jsxs)(i,{children:[(0,n.jsxs)(r,{children:[(0,n.jsx)(t.h3,{id:`откройте-очередь`,children:`Откройте очередь`}),(0,n.jsxs)(t.p,{children:[`Адрес: `,(0,n.jsx)(t.code,{children:`?mod=tags_add&action=suggestions`}),`. Фильтры списка — схема `,(0,n.jsx)(t.code,{children:`Filter/filter.schema.php`}),`.`]})]}),(0,n.jsxs)(r,{children:[(0,n.jsx)(t.h3,{id:`карточка`,children:`Карточка`}),(0,n.jsxs)(t.p,{children:[`Скрытая страница `,(0,n.jsx)(t.code,{children:`?mod=tags_add&action=edit&id=…`}),`. Можно поправить список тегов (`,(0,n.jsx)(t.code,{children:`save_suggestion`}),`) и затем одобрить.`]})]}),(0,n.jsxs)(r,{children:[(0,n.jsx)(t.h3,{id:`одобрение`,children:`Одобрение`}),(0,n.jsxs)(t.p,{children:[`Теги дописываются к уже существующим (`,(0,n.jsx)(t.a,{href:`../reference/TagSyncService`,children:`TagSyncService`}),`). Автор получает ЛС, если в профиле разрешено `,(0,n.jsx)(t.code,{children:`onadd`}),`. Заявка из очереди исчезает.`]})]}),(0,n.jsxs)(r,{children:[(0,n.jsx)(t.h3,{id:`отклонение`,children:`Отклонение`}),(0,n.jsxs)(t.p,{children:[`Окно Metro: причина или стандартная из настроек. Отмена окна `,(0,n.jsx)(t.strong,{children:`не`}),` удаляет запись. После отклонения заявка удаляется, автору уходит ЛС (`,(0,n.jsx)(t.code,{children:`ondel`}),`).`]})]}),(0,n.jsxs)(r,{children:[(0,n.jsx)(t.h3,{id:`массовые-действия`,children:`Массовые действия`}),(0,n.jsxs)(t.p,{children:[`Выберите строки и действие `,(0,n.jsx)(t.code,{children:`approve`}),` / `,(0,n.jsx)(t.code,{children:`reject`}),` / `,(0,n.jsx)(t.code,{children:`delete`}),`. См. `,(0,n.jsx)(t.a,{href:`../reference/ajax`,children:`AJAX`}),`.`]})]})]}),`
`,(0,n.jsx)(t.h2,{id:`связанные-разделы`,children:`Связанные разделы`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`../reference/ModerationService`,children:`Справочник: модерация`})}),`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`../changelog`,children:`История изменений`})}),`
`]})]})}function l(e={}){let{wrapper:t}=e.components||{};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}function u(e,t){throw Error(`Expected `+(t?`component`:`object`)+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}export{a as _markdown,l as default,r as frontmatter,i as lastModified,o as structuredData,s as toc};