import{r as e}from"./rolldown-runtime-QTnfLwEv.js";import{t}from"./jsx-runtime-By8HlURe.js";var n=e(t()),r={title:`Inbox: стена и badge`,description:`Список уведомлений, непрочитанные, polling и удаление`,version:`200.1.0`},i=new Date(1787654208e3),a=`

Inbox доступен только авторизованным пользователям:

* **стена** — полный список;
* **badge** — счётчик и короткий список по клику.

## Разметка [#разметка]

Badge + JS:

\`\`\`
{include file="engine/modules/devcraft/notifications_site.php?focus=badge"}
{include file="engine/modules/devcraft/notifications_site.php?focus=js"}
\`\`\`

Стена:

\`\`\`
{include file="engine/modules/devcraft/notifications_site.php?focus=wall"}
\`\`\`

## Действия [#действия]

* клик по badge — непрочитанные;
* клик по записи — mark as read;
* «Прочитать все»;
* удаление, если в шаблоне есть кнопка (AJAX на сервер).

## Polling [#polling]

Настройка &#x2A;*«Интервал polling badge»**: период в секундах. \`0\` — только после действий пользователя.

## Удаление [#удаление]

По умолчанию hard delete. &#x2A;*«Мягкое удаление inbox»** (\`soft_delete\`) помечает запись (\`deleted\`), не стирает строку. Имеет смысл для аудита; обычному сайту достаточно hard delete.

## Лимит стены [#лимит-стены]

**«Лимит записей на стене»** — сколько последних записей отдать за запрос.

Оформление: \`badge.tpl\`, \`wall.tpl\`, \`item.tpl\` — [шаблоны и теги](./scenario_templates).

## См. также [#см-также]

* [Вставка в шаблоны](./subscribe_wall)
* [Права групп](./permissions)
`,o={contents:[{heading:void 0,content:`Inbox доступен только авторизованным пользователям:`},{heading:void 0,content:`**стена** — полный список;`},{heading:void 0,content:`**badge** — счётчик и короткий список по клику.`},{heading:`разметка`,content:`Badge + JS:`},{heading:`разметка`,content:`Стена:`},{heading:`действия`,content:`клик по badge — непрочитанные;`},{heading:`действия`,content:`клик по записи — mark as read;`},{heading:`действия`,content:`«Прочитать все»;`},{heading:`действия`,content:`удаление, если в шаблоне есть кнопка (AJAX на сервер).`},{heading:`polling`,content:"Настройка &#x2A;*«Интервал polling badge»**: период в секундах. `0` — только после действий пользователя."},{heading:`удаление`,content:"По умолчанию hard delete. &#x2A;*«Мягкое удаление inbox»** (`soft_delete`) помечает запись (`deleted`), не стирает строку. Имеет смысл для аудита; обычному сайту достаточно hard delete."},{heading:`лимит-стены`,content:`**«Лимит записей на стене»** — сколько последних записей отдать за запрос.`},{heading:`лимит-стены`,content:"Оформление: `badge.tpl`, `wall.tpl`, `item.tpl` — шаблоны и теги."},{heading:`см-также`,content:`Вставка в шаблоны`},{heading:`см-также`,content:`Права групп`}],headings:[{id:`разметка`,content:`Разметка`},{id:`действия`,content:`Действия`},{id:`polling`,content:`Polling`},{id:`удаление`,content:`Удаление`},{id:`лимит-стены`,content:`Лимит стены`},{id:`см-также`,content:`См. также`}]},s=[{depth:2,url:`#разметка`,title:(0,n.jsx)(n.Fragment,{children:`Разметка`})},{depth:2,url:`#действия`,title:(0,n.jsx)(n.Fragment,{children:`Действия`})},{depth:2,url:`#polling`,title:(0,n.jsx)(n.Fragment,{children:`Polling`})},{depth:2,url:`#удаление`,title:(0,n.jsx)(n.Fragment,{children:`Удаление`})},{depth:2,url:`#лимит-стены`,title:(0,n.jsx)(n.Fragment,{children:`Лимит стены`})},{depth:2,url:`#см-также`,title:(0,n.jsx)(n.Fragment,{children:`См. также`})}];function c(e){let t={a:`a`,code:`code`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,span:`span`,strong:`strong`,ul:`ul`,...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.p,{children:`Inbox доступен только авторизованным пользователям:`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:`стена`}),` — полный список;`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:`badge`}),` — счётчик и короткий список по клику.`]}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`разметка`,children:`Разметка`}),`
`,(0,n.jsx)(t.p,{children:`Badge + JS:`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsxs)(t.code,{children:[(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`{include file="engine/modules/devcraft/notifications_site.php?focus=badge"}`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`{include file="engine/modules/devcraft/notifications_site.php?focus=js"}`})})]})})}),`
`,(0,n.jsx)(t.p,{children:`Стена:`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`{include file="engine/modules/devcraft/notifications_site.php?focus=wall"}`})})})})}),`
`,(0,n.jsx)(t.h2,{id:`действия`,children:`Действия`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsx)(t.li,{children:`клик по badge — непрочитанные;`}),`
`,(0,n.jsx)(t.li,{children:`клик по записи — mark as read;`}),`
`,(0,n.jsx)(t.li,{children:`«Прочитать все»;`}),`
`,(0,n.jsx)(t.li,{children:`удаление, если в шаблоне есть кнопка (AJAX на сервер).`}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`polling`,children:`Polling`}),`
`,(0,n.jsxs)(t.p,{children:[`Настройка `,(0,n.jsx)(t.strong,{children:`«Интервал polling badge»`}),`: период в секундах. `,(0,n.jsx)(t.code,{children:`0`}),` — только после действий пользователя.`]}),`
`,(0,n.jsx)(t.h2,{id:`удаление`,children:`Удаление`}),`
`,(0,n.jsxs)(t.p,{children:[`По умолчанию hard delete. `,(0,n.jsx)(t.strong,{children:`«Мягкое удаление inbox»`}),` (`,(0,n.jsx)(t.code,{children:`soft_delete`}),`) помечает запись (`,(0,n.jsx)(t.code,{children:`deleted`}),`), не стирает строку. Имеет смысл для аудита; обычному сайту достаточно hard delete.`]}),`
`,(0,n.jsx)(t.h2,{id:`лимит-стены`,children:`Лимит стены`}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`«Лимит записей на стене»`}),` — сколько последних записей отдать за запрос.`]}),`
`,(0,n.jsxs)(t.p,{children:[`Оформление: `,(0,n.jsx)(t.code,{children:`badge.tpl`}),`, `,(0,n.jsx)(t.code,{children:`wall.tpl`}),`, `,(0,n.jsx)(t.code,{children:`item.tpl`}),` — `,(0,n.jsx)(t.a,{href:`./scenario_templates`,children:`шаблоны и теги`}),`.`]}),`
`,(0,n.jsx)(t.h2,{id:`см-также`,children:`См. также`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`./subscribe_wall`,children:`Вставка в шаблоны`})}),`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`./permissions`,children:`Права групп`})}),`
`]})]})}function l(e={}){let{wrapper:t}=e.components||{};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}export{a as _markdown,l as default,r as frontmatter,i as lastModified,o as structuredData,s as toc};