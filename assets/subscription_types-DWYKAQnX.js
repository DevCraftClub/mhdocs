import{r as e}from"./rolldown-runtime-QTnfLwEv.js";import{t}from"./jsx-runtime-By8HlURe.js";var n=e(t()),r={title:`Типы подписок`,description:`news, cat, user, tag, xfield, all: объект подписки и момент срабатывания`,version:`200.1.0`},i=new Date(1787750944e3),a=`

Подписка — пара \`subscription_type\` + \`subscription_id\` (всегда строка). Совпадение с событием ищет matcher; дальше работают права, настройки пользователя и каналы.

## Когда срабатывает [#когда-срабатывает]

| Тип      | Объект                                | Событие                             |
| -------- | ------------------------------------- | ----------------------------------- |
| \`news\`   | ID новости                            | **правка** этой новости             |
| \`cat\`    | ID категории                          | **новая** публикация в разделе      |
| \`user\`   | ID автора                             | **новая** публикация этого автора   |
| \`tag\`    | slug/текст тега                       | **новая** новость с тегом           |
| \`xfield\` | \`поле/значение\`, например \`year/2019\` | **новая** новость с таким значением |
| \`all\`    | пустой / не используется              | **любая новая** новость             |

<Callout type="info">
  \`news\` — только edit. \`cat\` / \`user\` / \`tag\` / \`xfield\` / \`all\` — только add. Так задумано: иначе подписчик категории получал бы и каждую правку чужих статей.
</Callout>

## Включение в админке [#включение-в-админке]

Настройки модуля:

* флаги типов подписок;
* «Уведомлять при публикации» — add;
* «Уведомлять об обновлении новости» — edit.

В **Правах групп** тип можно запретить отдельно.

## Примеры include [#примеры-include]

Категория (\`main.tpl\`, только страница раздела):

\`\`\`
[available=cat]
{include file="engine/modules/devcraft/notifications_site.php?focus=subscribe&stype=cat&id={category-id}"}
[/available]
\`\`\`

Тег (\`main.tpl\`, только страница тега; \`{cloudstag}\` — тег из URL):

\`\`\`
[available=tags]
{include file="engine/modules/devcraft/notifications_site.php?focus=subscribe&stype=tag&id={cloudstag}"}
[/available]
\`\`\`

Доп. поле / xfsearch (\`main.tpl\`; \`id\` собирается модулем из URL, формат \`поле/значение\`):

\`\`\`
[available=xfsearch]
{include file="engine/modules/devcraft/notifications_site.php?focus=subscribe&stype=xfield"}
[/available]
\`\`\`

Все новости:

\`\`\`
{include file="engine/modules/devcraft/notifications_site.php?focus=subscribe&stype=all"}
\`\`\`

Число подписчиков в кнопке — {'{count}'} в \`subscribe/*.tpl\`. Полный гайд: [Include в шаблонах](./template_includes).

## Каналы одной подписки [#каналы-одной-подписки]

У записи независимо: сайт, email, ЛС. Выбираются при подписке и хранятся у пользователя.

## См. также [#см-также]

* [Вставка в шаблоны](./subscribe_wall)
* [Сценарии событий](./scenarios)
* [Шаблоны и теги](./scenario_templates)
`,o={contents:[{heading:void 0,content:"Подписка — пара `subscription_type` + `subscription_id` (всегда строка). Совпадение с событием ищет matcher; дальше работают права, настройки пользователя и каналы."},{heading:`когда-срабатывает`,content:`Тип`},{heading:`когда-срабатывает`,content:`Объект`},{heading:`когда-срабатывает`,content:`Событие`},{heading:`когда-срабатывает`,content:"`news`"},{heading:`когда-срабатывает`,content:`ID новости`},{heading:`когда-срабатывает`,content:`**правка** этой новости`},{heading:`когда-срабатывает`,content:"`cat`"},{heading:`когда-срабатывает`,content:`ID категории`},{heading:`когда-срабатывает`,content:`**новая** публикация в разделе`},{heading:`когда-срабатывает`,content:"`user`"},{heading:`когда-срабатывает`,content:`ID автора`},{heading:`когда-срабатывает`,content:`**новая** публикация этого автора`},{heading:`когда-срабатывает`,content:"`tag`"},{heading:`когда-срабатывает`,content:`slug/текст тега`},{heading:`когда-срабатывает`,content:`**новая** новость с тегом`},{heading:`когда-срабатывает`,content:"`xfield`"},{heading:`когда-срабатывает`,content:"`поле/значение`, например `year/2019`"},{heading:`когда-срабатывает`,content:`**новая** новость с таким значением`},{heading:`когда-срабатывает`,content:"`all`"},{heading:`когда-срабатывает`,content:`пустой / не используется`},{heading:`когда-срабатывает`,content:`**любая новая** новость`},{heading:`когда-срабатывает`,content:"`news` — только edit. `cat` / `user` / `tag` / `xfield` / `all` — только add. Так задумано: иначе подписчик категории получал бы и каждую правку чужих статей."},{heading:`включение-в-админке`,content:`Настройки модуля:`},{heading:`включение-в-админке`,content:`флаги типов подписок;`},{heading:`включение-в-админке`,content:`«Уведомлять при публикации» — add;`},{heading:`включение-в-админке`,content:`«Уведомлять об обновлении новости» — edit.`},{heading:`включение-в-админке`,content:`В **Правах групп** тип можно запретить отдельно.`},{heading:`примеры-include`,content:"Категория (`main.tpl`, только страница раздела):"},{heading:`примеры-include`,content:"Тег (`main.tpl`, только страница тега; `{cloudstag}` — тег из URL):"},{heading:`примеры-include`,content:"Доп. поле / xfsearch (`main.tpl`; `id` собирается модулем из URL, формат `поле/значение`):"},{heading:`примеры-include`,content:`Все новости:`},{heading:`примеры-include`,content:"Число подписчиков в кнопке — {'{count}'} в `subscribe/*.tpl`. Полный гайд: Include в шаблонах."},{heading:`каналы-одной-подписки`,content:`У записи независимо: сайт, email, ЛС. Выбираются при подписке и хранятся у пользователя.`},{heading:`см-также`,content:`Вставка в шаблоны`},{heading:`см-также`,content:`Сценарии событий`},{heading:`см-также`,content:`Шаблоны и теги`}],headings:[{id:`когда-срабатывает`,content:`Когда срабатывает`},{id:`включение-в-админке`,content:`Включение в админке`},{id:`примеры-include`,content:`Примеры include`},{id:`каналы-одной-подписки`,content:`Каналы одной подписки`},{id:`см-также`,content:`См. также`}]},s=[{depth:2,url:`#когда-срабатывает`,title:(0,n.jsx)(n.Fragment,{children:`Когда срабатывает`})},{depth:2,url:`#включение-в-админке`,title:(0,n.jsx)(n.Fragment,{children:`Включение в админке`})},{depth:2,url:`#примеры-include`,title:(0,n.jsx)(n.Fragment,{children:`Примеры include`})},{depth:2,url:`#каналы-одной-подписки`,title:(0,n.jsx)(n.Fragment,{children:`Каналы одной подписки`})},{depth:2,url:`#см-также`,title:(0,n.jsx)(n.Fragment,{children:`См. также`})}];function c(e){let t={a:`a`,code:`code`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,span:`span`,strong:`strong`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,ul:`ul`,...e.components},{Callout:r}=t;return r||u(`Callout`,!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:[`Подписка — пара `,(0,n.jsx)(t.code,{children:`subscription_type`}),` + `,(0,n.jsx)(t.code,{children:`subscription_id`}),` (всегда строка). Совпадение с событием ищет matcher; дальше работают права, настройки пользователя и каналы.`]}),`
`,(0,n.jsx)(t.h2,{id:`когда-срабатывает`,children:`Когда срабатывает`}),`
`,(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`Тип`}),(0,n.jsx)(t.th,{children:`Объект`}),(0,n.jsx)(t.th,{children:`Событие`})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:`news`})}),(0,n.jsx)(t.td,{children:`ID новости`}),(0,n.jsxs)(t.td,{children:[(0,n.jsx)(t.strong,{children:`правка`}),` этой новости`]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:`cat`})}),(0,n.jsx)(t.td,{children:`ID категории`}),(0,n.jsxs)(t.td,{children:[(0,n.jsx)(t.strong,{children:`новая`}),` публикация в разделе`]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:`user`})}),(0,n.jsx)(t.td,{children:`ID автора`}),(0,n.jsxs)(t.td,{children:[(0,n.jsx)(t.strong,{children:`новая`}),` публикация этого автора`]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:`tag`})}),(0,n.jsx)(t.td,{children:`slug/текст тега`}),(0,n.jsxs)(t.td,{children:[(0,n.jsx)(t.strong,{children:`новая`}),` новость с тегом`]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:`xfield`})}),(0,n.jsxs)(t.td,{children:[(0,n.jsx)(t.code,{children:`поле/значение`}),`, например `,(0,n.jsx)(t.code,{children:`year/2019`})]}),(0,n.jsxs)(t.td,{children:[(0,n.jsx)(t.strong,{children:`новая`}),` новость с таким значением`]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:`all`})}),(0,n.jsx)(t.td,{children:`пустой / не используется`}),(0,n.jsxs)(t.td,{children:[(0,n.jsx)(t.strong,{children:`любая новая`}),` новость`]})]})]})]}),`
`,(0,n.jsx)(r,{type:`info`,children:(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:`news`}),` — только edit. `,(0,n.jsx)(t.code,{children:`cat`}),` / `,(0,n.jsx)(t.code,{children:`user`}),` / `,(0,n.jsx)(t.code,{children:`tag`}),` / `,(0,n.jsx)(t.code,{children:`xfield`}),` / `,(0,n.jsx)(t.code,{children:`all`}),` — только add. Так задумано: иначе подписчик категории получал бы и каждую правку чужих статей.`]})}),`
`,(0,n.jsx)(t.h2,{id:`включение-в-админке`,children:`Включение в админке`}),`
`,(0,n.jsx)(t.p,{children:`Настройки модуля:`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsx)(t.li,{children:`флаги типов подписок;`}),`
`,(0,n.jsx)(t.li,{children:`«Уведомлять при публикации» — add;`}),`
`,(0,n.jsx)(t.li,{children:`«Уведомлять об обновлении новости» — edit.`}),`
`]}),`
`,(0,n.jsxs)(t.p,{children:[`В `,(0,n.jsx)(t.strong,{children:`Правах групп`}),` тип можно запретить отдельно.`]}),`
`,(0,n.jsx)(t.h2,{id:`примеры-include`,children:`Примеры include`}),`
`,(0,n.jsxs)(t.p,{children:[`Категория (`,(0,n.jsx)(t.code,{children:`main.tpl`}),`, только страница раздела):`]}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsxs)(t.code,{children:[(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`[available=cat]`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`{include file="engine/modules/devcraft/notifications_site.php?focus=subscribe&stype=cat&id={category-id}"}`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`[/available]`})})]})})}),`
`,(0,n.jsxs)(t.p,{children:[`Тег (`,(0,n.jsx)(t.code,{children:`main.tpl`}),`, только страница тега; `,(0,n.jsx)(t.code,{children:`{cloudstag}`}),` — тег из URL):`]}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsxs)(t.code,{children:[(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`[available=tags]`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`{include file="engine/modules/devcraft/notifications_site.php?focus=subscribe&stype=tag&id={cloudstag}"}`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`[/available]`})})]})})}),`
`,(0,n.jsxs)(t.p,{children:[`Доп. поле / xfsearch (`,(0,n.jsx)(t.code,{children:`main.tpl`}),`; `,(0,n.jsx)(t.code,{children:`id`}),` собирается модулем из URL, формат `,(0,n.jsx)(t.code,{children:`поле/значение`}),`):`]}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsxs)(t.code,{children:[(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`[available=xfsearch]`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`{include file="engine/modules/devcraft/notifications_site.php?focus=subscribe&stype=xfield"}`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`[/available]`})})]})})}),`
`,(0,n.jsx)(t.p,{children:`Все новости:`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`{include file="engine/modules/devcraft/notifications_site.php?focus=subscribe&stype=all"}`})})})})}),`
`,(0,n.jsxs)(t.p,{children:[`Число подписчиков в кнопке — `,`{count}`,` в `,(0,n.jsx)(t.code,{children:`subscribe/*.tpl`}),`. Полный гайд: `,(0,n.jsx)(t.a,{href:`./template_includes`,children:`Include в шаблонах`}),`.`]}),`
`,(0,n.jsx)(t.h2,{id:`каналы-одной-подписки`,children:`Каналы одной подписки`}),`
`,(0,n.jsx)(t.p,{children:`У записи независимо: сайт, email, ЛС. Выбираются при подписке и хранятся у пользователя.`}),`
`,(0,n.jsx)(t.h2,{id:`см-также`,children:`См. также`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`./subscribe_wall`,children:`Вставка в шаблоны`})}),`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`./scenarios`,children:`Сценарии событий`})}),`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`./scenario_templates`,children:`Шаблоны и теги`})}),`
`]})]})}function l(e={}){let{wrapper:t}=e.components||{};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}function u(e,t){throw Error(`Expected `+(t?`component`:`object`)+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}export{a as _markdown,l as default,r as frontmatter,i as lastModified,o as structuredData,s as toc};