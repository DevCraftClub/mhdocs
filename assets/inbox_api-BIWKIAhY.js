import{r as e}from"./rolldown-runtime-QTnfLwEv.js";import{t}from"./jsx-runtime-By8HlURe.js";var n=e(t()),r={title:`Лента на сайте: стена и колокольчик`,description:`Список уведомлений, непрочитанные, самообновление и удаление`,version:`200.1.0`},i=new Date(1790409255e3),a=`

Лента на сайте доступна только вошедшим:

* **стена** — полный список;
* **колокольчик** — счётчик и короткий список по нажатию.

Отдельный адрес: [Страница уведомлений](./notifications_page).

## Разметка [#разметка]

В шапке — тег \`{devcraft}\` (стили и скрипты); в меню — колокольчик:

\`\`\`
{devcraft}
…
{include file="devcraft/src/modules/Notifications/Controller/show_notifications.php?focus=badge"}
\`\`\`

Стена:

\`\`\`
{include file="devcraft/src/modules/Notifications/Controller/show_notifications.php?focus=wall"}
\`\`\`

## Действия [#действия]

* нажатие на колокольчик — непрочитанные;
* нажатие на запись — отметить прочитанным;
* «Прочитать все»;
* удаление, если в шаблоне есть кнопка (запрос на сервер).

## Самообновление [#самообновление]

Настройка &#x2A;*«Интервал автообновления колокольчика»**: период в секундах. \`0\` — только после действий человека. Период читается из \`data-live-period\` на колокольчике и стене.

## Удаление [#удаление]

По умолчанию запись стирается. &#x2A;*«Мягкое удаление записей ленты»** помечает строку (\`deleted\`), не удаляет её. Имеет смысл для журнала; обычному сайту достаточно полного удаления.

## Лимит стены [#лимит-стены]

**«Лимит записей на стене»** — сколько последних записей отдать за один запрос.

Оформление: \`badge.tpl\`, \`wall.tpl\`, \`item.tpl\`, \`item_actions.tpl\` — [шаблоны и теги](./scenario_templates).

Ответ списка содержит поле \`html\` — готовая разметка через \`item.tpl\` (браузер не собирает HTML сам).

## См. также [#см-также]

* [Страница уведомлений](./notifications_page)
* [Колокольчик, стена и кнопка](./subscribe_wall)
* [Права групп](./permissions)
`,o={contents:[{heading:void 0,content:`Лента на сайте доступна только вошедшим:`},{heading:void 0,content:`**стена** — полный список;`},{heading:void 0,content:`**колокольчик** — счётчик и короткий список по нажатию.`},{heading:void 0,content:`Отдельный адрес: Страница уведомлений.`},{heading:`разметка`,content:"В шапке — тег `{devcraft}` (стили и скрипты); в меню — колокольчик:"},{heading:`разметка`,content:`Стена:`},{heading:`действия`,content:`нажатие на колокольчик — непрочитанные;`},{heading:`действия`,content:`нажатие на запись — отметить прочитанным;`},{heading:`действия`,content:`«Прочитать все»;`},{heading:`действия`,content:`удаление, если в шаблоне есть кнопка (запрос на сервер).`},{heading:`самообновление`,content:"Настройка &#x2A;*«Интервал автообновления колокольчика»**: период в секундах. `0` — только после действий человека. Период читается из `data-live-period` на колокольчике и стене."},{heading:`удаление`,content:"По умолчанию запись стирается. &#x2A;*«Мягкое удаление записей ленты»** помечает строку (`deleted`), не удаляет её. Имеет смысл для журнала; обычному сайту достаточно полного удаления."},{heading:`лимит-стены`,content:`**«Лимит записей на стене»** — сколько последних записей отдать за один запрос.`},{heading:`лимит-стены`,content:"Оформление: `badge.tpl`, `wall.tpl`, `item.tpl`, `item_actions.tpl` — шаблоны и теги."},{heading:`лимит-стены`,content:"Ответ списка содержит поле `html` — готовая разметка через `item.tpl` (браузер не собирает HTML сам)."},{heading:`см-также`,content:`Страница уведомлений`},{heading:`см-также`,content:`Колокольчик, стена и кнопка`},{heading:`см-также`,content:`Права групп`}],headings:[{id:`разметка`,content:`Разметка`},{id:`действия`,content:`Действия`},{id:`самообновление`,content:`Самообновление`},{id:`удаление`,content:`Удаление`},{id:`лимит-стены`,content:`Лимит стены`},{id:`см-также`,content:`См. также`}]},s=[{depth:2,url:`#разметка`,title:(0,n.jsx)(n.Fragment,{children:`Разметка`})},{depth:2,url:`#действия`,title:(0,n.jsx)(n.Fragment,{children:`Действия`})},{depth:2,url:`#самообновление`,title:(0,n.jsx)(n.Fragment,{children:`Самообновление`})},{depth:2,url:`#удаление`,title:(0,n.jsx)(n.Fragment,{children:`Удаление`})},{depth:2,url:`#лимит-стены`,title:(0,n.jsx)(n.Fragment,{children:`Лимит стены`})},{depth:2,url:`#см-также`,title:(0,n.jsx)(n.Fragment,{children:`См. также`})}];function c(e){let t={a:`a`,code:`code`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,span:`span`,strong:`strong`,ul:`ul`,...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.p,{children:`Лента на сайте доступна только вошедшим:`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:`стена`}),` — полный список;`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:`колокольчик`}),` — счётчик и короткий список по нажатию.`]}),`
`]}),`
`,(0,n.jsxs)(t.p,{children:[`Отдельный адрес: `,(0,n.jsx)(t.a,{href:`./notifications_page`,children:`Страница уведомлений`}),`.`]}),`
`,(0,n.jsx)(t.h2,{id:`разметка`,children:`Разметка`}),`
`,(0,n.jsxs)(t.p,{children:[`В шапке — тег `,(0,n.jsx)(t.code,{children:`{devcraft}`}),` (стили и скрипты); в меню — колокольчик:`]}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsxs)(t.code,{children:[(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`{devcraft}`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`…`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`{include file="devcraft/src/modules/Notifications/Controller/show_notifications.php?focus=badge"}`})})]})})}),`
`,(0,n.jsx)(t.p,{children:`Стена:`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`{include file="devcraft/src/modules/Notifications/Controller/show_notifications.php?focus=wall"}`})})})})}),`
`,(0,n.jsx)(t.h2,{id:`действия`,children:`Действия`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsx)(t.li,{children:`нажатие на колокольчик — непрочитанные;`}),`
`,(0,n.jsx)(t.li,{children:`нажатие на запись — отметить прочитанным;`}),`
`,(0,n.jsx)(t.li,{children:`«Прочитать все»;`}),`
`,(0,n.jsx)(t.li,{children:`удаление, если в шаблоне есть кнопка (запрос на сервер).`}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`самообновление`,children:`Самообновление`}),`
`,(0,n.jsxs)(t.p,{children:[`Настройка `,(0,n.jsx)(t.strong,{children:`«Интервал автообновления колокольчика»`}),`: период в секундах. `,(0,n.jsx)(t.code,{children:`0`}),` — только после действий человека. Период читается из `,(0,n.jsx)(t.code,{children:`data-live-period`}),` на колокольчике и стене.`]}),`
`,(0,n.jsx)(t.h2,{id:`удаление`,children:`Удаление`}),`
`,(0,n.jsxs)(t.p,{children:[`По умолчанию запись стирается. `,(0,n.jsx)(t.strong,{children:`«Мягкое удаление записей ленты»`}),` помечает строку (`,(0,n.jsx)(t.code,{children:`deleted`}),`), не удаляет её. Имеет смысл для журнала; обычному сайту достаточно полного удаления.`]}),`
`,(0,n.jsx)(t.h2,{id:`лимит-стены`,children:`Лимит стены`}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`«Лимит записей на стене»`}),` — сколько последних записей отдать за один запрос.`]}),`
`,(0,n.jsxs)(t.p,{children:[`Оформление: `,(0,n.jsx)(t.code,{children:`badge.tpl`}),`, `,(0,n.jsx)(t.code,{children:`wall.tpl`}),`, `,(0,n.jsx)(t.code,{children:`item.tpl`}),`, `,(0,n.jsx)(t.code,{children:`item_actions.tpl`}),` — `,(0,n.jsx)(t.a,{href:`./scenario_templates`,children:`шаблоны и теги`}),`.`]}),`
`,(0,n.jsxs)(t.p,{children:[`Ответ списка содержит поле `,(0,n.jsx)(t.code,{children:`html`}),` — готовая разметка через `,(0,n.jsx)(t.code,{children:`item.tpl`}),` (браузер не собирает HTML сам).`]}),`
`,(0,n.jsx)(t.h2,{id:`см-также`,children:`См. также`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`./notifications_page`,children:`Страница уведомлений`})}),`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`./subscribe_wall`,children:`Колокольчик, стена и кнопка`})}),`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`./permissions`,children:`Права групп`})}),`
`]})]})}function l(e={}){let{wrapper:t}=e.components||{};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}export{a as _markdown,l as default,r as frontmatter,i as lastModified,o as structuredData,s as toc};