import{r as e}from"./rolldown-runtime-QTnfLwEv.js";import{t}from"./jsx-runtime-By8HlURe.js";var n=e(t()),r={title:`Начало работы`,description:`Наблюдатель по крону ловит события в БД мимо хуков DLE и запускает те же уведомления.`,version:`1.0.0`},i=new Date(1795673215e3),a=`

**DLE Уведомления: Наблюдатель** — соседний модуль к [DLE Уведомления](/dev/dle/notifications). По расписанию DLE cron смотрит новости, комментарии и оценки, которые попали в базу в обход штатных хуков (например из граббера), и вызывает те же \`notifyOn*\`, что и обычный путь.

Отдельного пункта в меню DLE нет: статус и история живут внутри \`?mod=notifications\`.

<Cards>
  <Card title="Установка" href="./install">
    ZIP, крон, холодный старт
  </Card>

  <Card title="История изменений" href="./changelog">
    Что вошло в 1.0.0
  </Card>
</Cards>

## Что умеет [#что-умеет]

* холодный старт: сначала полные снимки и сверка с лентой, **без** рассылки;
* после базы — только новое и изменённое, без дублей;
* дельта полей правки новости в шаблоне (\`{changes}\`, \`{watchman-body}\`) по списку из настроек;
* внешний URL скана для crontab / сервиса крона (секрет в настройках);
* эталон поведения скана — Series Push Universal (без Web Push).

## Требования [#требования]

* DLE ≥ 21.0
* DevCraft Admin ≥ 200.4.0
* установленный модуль **DLE Уведомления**
`,o={contents:[{heading:void 0,content:"**DLE Уведомления: Наблюдатель** — соседний модуль к DLE Уведомления. По расписанию DLE cron смотрит новости, комментарии и оценки, которые попали в базу в обход штатных хуков (например из граббера), и вызывает те же `notifyOn*`, что и обычный путь."},{heading:void 0,content:"Отдельного пункта в меню DLE нет: статус и история живут внутри `?mod=notifications`."},{heading:void 0,content:`ZIP, крон, холодный старт`},{heading:void 0,content:`Что вошло в 1.0.0`},{heading:`что-умеет`,content:`холодный старт: сначала полные снимки и сверка с лентой, **без** рассылки;`},{heading:`что-умеет`,content:`после базы — только новое и изменённое, без дублей;`},{heading:`что-умеет`,content:"дельта полей правки новости в шаблоне (`{changes}`, `{watchman-body}`) по списку из настроек;"},{heading:`что-умеет`,content:`внешний URL скана для crontab / сервиса крона (секрет в настройках);`},{heading:`что-умеет`,content:`эталон поведения скана — Series Push Universal (без Web Push).`},{heading:`требования`,content:`DLE ≥ 21.0`},{heading:`требования`,content:`DevCraft Admin ≥ 200.4.0`},{heading:`требования`,content:`установленный модуль **DLE Уведомления**`}],headings:[{id:`что-умеет`,content:`Что умеет`},{id:`требования`,content:`Требования`}]},s=[{depth:2,url:`#что-умеет`,title:(0,n.jsx)(n.Fragment,{children:`Что умеет`})},{depth:2,url:`#требования`,title:(0,n.jsx)(n.Fragment,{children:`Требования`})}];function c(e){let t={a:`a`,code:`code`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...e.components},{Card:r,Cards:i}=t;return r||u(`Card`,!0),i||u(`Cards`,!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`DLE Уведомления: Наблюдатель`}),` — соседний модуль к `,(0,n.jsx)(t.a,{href:`/dev/dle/notifications`,children:`DLE Уведомления`}),`. По расписанию DLE cron смотрит новости, комментарии и оценки, которые попали в базу в обход штатных хуков (например из граббера), и вызывает те же `,(0,n.jsx)(t.code,{children:`notifyOn*`}),`, что и обычный путь.`]}),`
`,(0,n.jsxs)(t.p,{children:[`Отдельного пункта в меню DLE нет: статус и история живут внутри `,(0,n.jsx)(t.code,{children:`?mod=notifications`}),`.`]}),`
`,(0,n.jsxs)(i,{children:[(0,n.jsx)(r,{title:`Установка`,href:`./install`,children:(0,n.jsx)(t.p,{children:`ZIP, крон, холодный старт`})}),(0,n.jsx)(r,{title:`История изменений`,href:`./changelog`,children:(0,n.jsx)(t.p,{children:`Что вошло в 1.0.0`})})]}),`
`,(0,n.jsx)(t.h2,{id:`что-умеет`,children:`Что умеет`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[`холодный старт: сначала полные снимки и сверка с лентой, `,(0,n.jsx)(t.strong,{children:`без`}),` рассылки;`]}),`
`,(0,n.jsx)(t.li,{children:`после базы — только новое и изменённое, без дублей;`}),`
`,(0,n.jsxs)(t.li,{children:[`дельта полей правки новости в шаблоне (`,(0,n.jsx)(t.code,{children:`{changes}`}),`, `,(0,n.jsx)(t.code,{children:`{watchman-body}`}),`) по списку из настроек;`]}),`
`,(0,n.jsx)(t.li,{children:`внешний URL скана для crontab / сервиса крона (секрет в настройках);`}),`
`,(0,n.jsx)(t.li,{children:`эталон поведения скана — Series Push Universal (без Web Push).`}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`требования`,children:`Требования`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsx)(t.li,{children:`DLE ≥ 21.0`}),`
`,(0,n.jsx)(t.li,{children:`DevCraft Admin ≥ 200.4.0`}),`
`,(0,n.jsxs)(t.li,{children:[`установленный модуль `,(0,n.jsx)(t.strong,{children:`DLE Уведомления`})]}),`
`]})]})}function l(e={}){let{wrapper:t}=e.components||{};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}function u(e,t){throw Error(`Expected `+(t?`component`:`object`)+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}export{a as _markdown,l as default,r as frontmatter,i as lastModified,o as structuredData,s as toc};