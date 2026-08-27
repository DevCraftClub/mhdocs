import{r as e}from"./rolldown-runtime-QTnfLwEv.js";import{t}from"./jsx-runtime-By8HlURe.js";var n=e(t()),r={title:`Лента на сайте: стена и колокольчик`,description:`Список уведомлений, непрочитанные, автообновление и удаление`,version:`200.1.0`},i=new Date(1787834766e3),a=`

Лента на сайте доступна только авторизованным пользователям:

* **стена** — полный список;
* **колокольчик** — счётчик и короткий список по клику.

Отдельный URL: [Страница уведомлений](./notifications_page).

## Разметка [#разметка]

В шапке — стили и meta; в меню — колокольчик; внизу — скрипты:

\`\`\`
{include file="devcraft/src/modules/Notifications/Site/web.php?focus=css"}
…
{include file="devcraft/src/modules/Notifications/Site/web.php?focus=badge"}
…
{include file="devcraft/src/modules/Notifications/Site/web.php?focus=js"}
\`\`\`

Стена:

\`\`\`
{include file="devcraft/src/modules/Notifications/Site/web.php?focus=wall"}
\`\`\`

## Действия [#действия]

* клик по колокольчику — непрочитанные;
* клик по записи — отметить прочитанным;
* «Прочитать все»;
* удаление, если в шаблоне есть кнопка (запрос на сервер).

## Автообновление [#автообновление]

Настройка &#x2A;*«Интервал автообновления колокольчика»**: период в секундах. \`0\` — только после действий пользователя. Период и база AJAX попадают в meta из \`focus=css\`.

## Удаление [#удаление]

По умолчанию полное удаление. &#x2A;*«Мягкое удаление записей ленты»** (\`soft_delete\`) помечает запись (\`deleted\`), не стирает строку. Имеет смысл для аудита; обычному сайту достаточно полного удаления.

## Лимит стены [#лимит-стены]

**«Лимит записей на стене»** — сколько последних записей отдать за запрос.

Оформление: \`badge.tpl\`, \`wall.tpl\`, \`item.tpl\`, \`item_actions.tpl\` — [шаблоны и теги](./scenario_templates).

Ответ метода \`list\` содержит поле \`html\` — готовая разметка элементов через \`item.tpl\` (клиент не собирает HTML сам).

## См. также [#см-также]

* [Страница уведомлений](./notifications_page)
* [Вставка в шаблоны](./subscribe_wall)
* [Права групп](./permissions)
`,o={contents:[{heading:void 0,content:`Лента на сайте доступна только авторизованным пользователям:`},{heading:void 0,content:`**стена** — полный список;`},{heading:void 0,content:`**колокольчик** — счётчик и короткий список по клику.`},{heading:void 0,content:`Отдельный URL: Страница уведомлений.`},{heading:`разметка`,content:`В шапке — стили и meta; в меню — колокольчик; внизу — скрипты:`},{heading:`разметка`,content:`Стена:`},{heading:`действия`,content:`клик по колокольчику — непрочитанные;`},{heading:`действия`,content:`клик по записи — отметить прочитанным;`},{heading:`действия`,content:`«Прочитать все»;`},{heading:`действия`,content:`удаление, если в шаблоне есть кнопка (запрос на сервер).`},{heading:`автообновление`,content:"Настройка &#x2A;*«Интервал автообновления колокольчика»**: период в секундах. `0` — только после действий пользователя. Период и база AJAX попадают в meta из `focus=css`."},{heading:`удаление`,content:"По умолчанию полное удаление. &#x2A;*«Мягкое удаление записей ленты»** (`soft_delete`) помечает запись (`deleted`), не стирает строку. Имеет смысл для аудита; обычному сайту достаточно полного удаления."},{heading:`лимит-стены`,content:`**«Лимит записей на стене»** — сколько последних записей отдать за запрос.`},{heading:`лимит-стены`,content:"Оформление: `badge.tpl`, `wall.tpl`, `item.tpl`, `item_actions.tpl` — шаблоны и теги."},{heading:`лимит-стены`,content:"Ответ метода `list` содержит поле `html` — готовая разметка элементов через `item.tpl` (клиент не собирает HTML сам)."},{heading:`см-также`,content:`Страница уведомлений`},{heading:`см-также`,content:`Вставка в шаблоны`},{heading:`см-также`,content:`Права групп`}],headings:[{id:`разметка`,content:`Разметка`},{id:`действия`,content:`Действия`},{id:`автообновление`,content:`Автообновление`},{id:`удаление`,content:`Удаление`},{id:`лимит-стены`,content:`Лимит стены`},{id:`см-также`,content:`См. также`}]},s=[{depth:2,url:`#разметка`,title:(0,n.jsx)(n.Fragment,{children:`Разметка`})},{depth:2,url:`#действия`,title:(0,n.jsx)(n.Fragment,{children:`Действия`})},{depth:2,url:`#автообновление`,title:(0,n.jsx)(n.Fragment,{children:`Автообновление`})},{depth:2,url:`#удаление`,title:(0,n.jsx)(n.Fragment,{children:`Удаление`})},{depth:2,url:`#лимит-стены`,title:(0,n.jsx)(n.Fragment,{children:`Лимит стены`})},{depth:2,url:`#см-также`,title:(0,n.jsx)(n.Fragment,{children:`См. также`})}];function c(e){let t={a:`a`,code:`code`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,span:`span`,strong:`strong`,ul:`ul`,...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.p,{children:`Лента на сайте доступна только авторизованным пользователям:`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:`стена`}),` — полный список;`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:`колокольчик`}),` — счётчик и короткий список по клику.`]}),`
`]}),`
`,(0,n.jsxs)(t.p,{children:[`Отдельный URL: `,(0,n.jsx)(t.a,{href:`./notifications_page`,children:`Страница уведомлений`}),`.`]}),`
`,(0,n.jsx)(t.h2,{id:`разметка`,children:`Разметка`}),`
`,(0,n.jsx)(t.p,{children:`В шапке — стили и meta; в меню — колокольчик; внизу — скрипты:`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsxs)(t.code,{children:[(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`{include file="devcraft/src/modules/Notifications/Site/web.php?focus=css"}`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`…`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`{include file="devcraft/src/modules/Notifications/Site/web.php?focus=badge"}`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`…`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`{include file="devcraft/src/modules/Notifications/Site/web.php?focus=js"}`})})]})})}),`
`,(0,n.jsx)(t.p,{children:`Стена:`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`{include file="devcraft/src/modules/Notifications/Site/web.php?focus=wall"}`})})})})}),`
`,(0,n.jsx)(t.h2,{id:`действия`,children:`Действия`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsx)(t.li,{children:`клик по колокольчику — непрочитанные;`}),`
`,(0,n.jsx)(t.li,{children:`клик по записи — отметить прочитанным;`}),`
`,(0,n.jsx)(t.li,{children:`«Прочитать все»;`}),`
`,(0,n.jsx)(t.li,{children:`удаление, если в шаблоне есть кнопка (запрос на сервер).`}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`автообновление`,children:`Автообновление`}),`
`,(0,n.jsxs)(t.p,{children:[`Настройка `,(0,n.jsx)(t.strong,{children:`«Интервал автообновления колокольчика»`}),`: период в секундах. `,(0,n.jsx)(t.code,{children:`0`}),` — только после действий пользователя. Период и база AJAX попадают в meta из `,(0,n.jsx)(t.code,{children:`focus=css`}),`.`]}),`
`,(0,n.jsx)(t.h2,{id:`удаление`,children:`Удаление`}),`
`,(0,n.jsxs)(t.p,{children:[`По умолчанию полное удаление. `,(0,n.jsx)(t.strong,{children:`«Мягкое удаление записей ленты»`}),` (`,(0,n.jsx)(t.code,{children:`soft_delete`}),`) помечает запись (`,(0,n.jsx)(t.code,{children:`deleted`}),`), не стирает строку. Имеет смысл для аудита; обычному сайту достаточно полного удаления.`]}),`
`,(0,n.jsx)(t.h2,{id:`лимит-стены`,children:`Лимит стены`}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`«Лимит записей на стене»`}),` — сколько последних записей отдать за запрос.`]}),`
`,(0,n.jsxs)(t.p,{children:[`Оформление: `,(0,n.jsx)(t.code,{children:`badge.tpl`}),`, `,(0,n.jsx)(t.code,{children:`wall.tpl`}),`, `,(0,n.jsx)(t.code,{children:`item.tpl`}),`, `,(0,n.jsx)(t.code,{children:`item_actions.tpl`}),` — `,(0,n.jsx)(t.a,{href:`./scenario_templates`,children:`шаблоны и теги`}),`.`]}),`
`,(0,n.jsxs)(t.p,{children:[`Ответ метода `,(0,n.jsx)(t.code,{children:`list`}),` содержит поле `,(0,n.jsx)(t.code,{children:`html`}),` — готовая разметка элементов через `,(0,n.jsx)(t.code,{children:`item.tpl`}),` (клиент не собирает HTML сам).`]}),`
`,(0,n.jsx)(t.h2,{id:`см-также`,children:`См. также`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`./notifications_page`,children:`Страница уведомлений`})}),`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`./subscribe_wall`,children:`Вставка в шаблоны`})}),`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`./permissions`,children:`Права групп`})}),`
`]})]})}function l(e={}){let{wrapper:t}=e.components||{};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}export{a as _markdown,l as default,r as frontmatter,i as lastModified,o as structuredData,s as toc};