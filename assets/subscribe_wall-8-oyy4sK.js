import{r as e}from"./rolldown-runtime-QTnfLwEv.js";import{t}from"./jsx-runtime-By8HlURe.js";var n=e(t()),r={title:`Вставка в шаблоны темы`,description:`include для кнопки подписки, стены и badge`,version:`200.1.0`},i=new Date(1787654208e3),a=`

Точка входа на фронте — \`notifications_site.php\` через обычный DLE-include. Разметка берётся из:

\`templates/ВАША_ТЕМА/devcraft/notifications/\`

Нет файла в активном скине — используется \`Default\`.

## Подписка на новость [#подписка-на-новость]

В \`fullstory.tpl\`:

\`\`\`
{include file="engine/modules/devcraft/notifications_site.php?focus=subscribe&type=news&id={news-id}"}
\`\`\`

Рендерится кнопка «Подписаться» / «Отписаться» из \`subscribe/news.tpl\`.

## Другие типы [#другие-типы]

| Сущность  | Query                                                   |
| --------- | ------------------------------------------------------- |
| Категория | \`...?focus=subscribe&type=cat&id={'{category-id}'}\`     |
| Автор     | \`...?focus=subscribe&type=user&id=42\` (\`id\` — user\\_id) |
| Тег       | \`...?focus=subscribe&type=tag&id=php\`                   |
| Все новые | \`...?focus=subscribe&type=all\`                          |

Семантика типов: [типы подписок](./subscription_types).

## Стена [#стена]

\`\`\`
{include file="engine/modules/devcraft/notifications_site.php?focus=wall"}
\`\`\`

## Badge [#badge]

В шапке:

\`\`\`
{include file="engine/modules/devcraft/notifications_site.php?focus=badge"}
{include file="engine/modules/devcraft/notifications_site.php?focus=js"}
\`\`\`

\`focus=js&#x60; один раз на странице: подписки, отметка прочитанным, polling. Интервал — &#x2A;*«Интервал polling badge»** в настройках модуля (секунды; \`0\` — без автообновления).

## Кто видит блоки [#кто-видит-блоки]

| Блок     | Право группы                                      |
| -------- | ------------------------------------------------- |
| Подписка | «Разрешить подписываться…» на соответствующий тип |
| Стена    | «Разрешить просматривать стену»                   |
| Badge    | «Разрешить использование уведомлений»             |

Гостям блоки не выводятся.

## Файлы оформления [#файлы-оформления]

\`\`\`text
templates/ВАША_ТЕМА/devcraft/notifications/
  subscribe/          кнопки по типам
  wall.tpl            стена
  item.tpl            одна запись
  badge.tpl           колокольчик
  notifications.js    клиентская логика
\`\`\`

Плейсхолдеры: [шаблоны и теги](./scenario_templates).

## См. также [#см-также]

* [Типы подписок](./subscription_types)
* [Права групп](./permissions)
* [Установка](../install)
`,o={contents:[{heading:void 0,content:"Точка входа на фронте — `notifications_site.php` через обычный DLE-include. Разметка берётся из:"},{heading:void 0,content:"`templates/ВАША_ТЕМА/devcraft/notifications/`"},{heading:void 0,content:"Нет файла в активном скине — используется `Default`."},{heading:`подписка-на-новость`,content:"В `fullstory.tpl`:"},{heading:`подписка-на-новость`,content:"Рендерится кнопка «Подписаться» / «Отписаться» из `subscribe/news.tpl`."},{heading:`другие-типы`,content:`Сущность`},{heading:`другие-типы`,content:`Query`},{heading:`другие-типы`,content:`Категория`},{heading:`другие-типы`,content:"`...?focus=subscribe&type=cat&id={'{category-id}'}`"},{heading:`другие-типы`,content:`Автор`},{heading:`другие-типы`,content:"`...?focus=subscribe&type=user&id=42` (`id` — user\\_id)"},{heading:`другие-типы`,content:`Тег`},{heading:`другие-типы`,content:"`...?focus=subscribe&type=tag&id=php`"},{heading:`другие-типы`,content:`Все новые`},{heading:`другие-типы`,content:"`...?focus=subscribe&type=all`"},{heading:`другие-типы`,content:`Семантика типов: типы подписок.`},{heading:`badge`,content:`В шапке:`},{heading:`badge`,content:"`focus=js&#x60; один раз на странице: подписки, отметка прочитанным, polling. Интервал — &#x2A;*«Интервал polling badge»** в настройках модуля (секунды; `0` — без автообновления)."},{heading:`кто-видит-блоки`,content:`Блок`},{heading:`кто-видит-блоки`,content:`Право группы`},{heading:`кто-видит-блоки`,content:`Подписка`},{heading:`кто-видит-блоки`,content:`«Разрешить подписываться…» на соответствующий тип`},{heading:`кто-видит-блоки`,content:`Стена`},{heading:`кто-видит-блоки`,content:`«Разрешить просматривать стену»`},{heading:`кто-видит-блоки`,content:`Badge`},{heading:`кто-видит-блоки`,content:`«Разрешить использование уведомлений»`},{heading:`кто-видит-блоки`,content:`Гостям блоки не выводятся.`},{heading:`файлы-оформления`,content:`Плейсхолдеры: шаблоны и теги.`},{heading:`см-также`,content:`Типы подписок`},{heading:`см-также`,content:`Права групп`},{heading:`см-также`,content:`Установка`}],headings:[{id:`подписка-на-новость`,content:`Подписка на новость`},{id:`другие-типы`,content:`Другие типы`},{id:`стена`,content:`Стена`},{id:`badge`,content:`Badge`},{id:`кто-видит-блоки`,content:`Кто видит блоки`},{id:`файлы-оформления`,content:`Файлы оформления`},{id:`см-также`,content:`См. также`}]},s=[{depth:2,url:`#подписка-на-новость`,title:(0,n.jsx)(n.Fragment,{children:`Подписка на новость`})},{depth:2,url:`#другие-типы`,title:(0,n.jsx)(n.Fragment,{children:`Другие типы`})},{depth:2,url:`#стена`,title:(0,n.jsx)(n.Fragment,{children:`Стена`})},{depth:2,url:`#badge`,title:(0,n.jsx)(n.Fragment,{children:`Badge`})},{depth:2,url:`#кто-видит-блоки`,title:(0,n.jsx)(n.Fragment,{children:`Кто видит блоки`})},{depth:2,url:`#файлы-оформления`,title:(0,n.jsx)(n.Fragment,{children:`Файлы оформления`})},{depth:2,url:`#см-также`,title:(0,n.jsx)(n.Fragment,{children:`См. также`})}];function c(e){let t={a:`a`,code:`code`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,span:`span`,strong:`strong`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,ul:`ul`,...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:[`Точка входа на фронте — `,(0,n.jsx)(t.code,{children:`notifications_site.php`}),` через обычный DLE-include. Разметка берётся из:`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.code,{children:`templates/ВАША_ТЕМА/devcraft/notifications/`})}),`
`,(0,n.jsxs)(t.p,{children:[`Нет файла в активном скине — используется `,(0,n.jsx)(t.code,{children:`Default`}),`.`]}),`
`,(0,n.jsx)(t.h2,{id:`подписка-на-новость`,children:`Подписка на новость`}),`
`,(0,n.jsxs)(t.p,{children:[`В `,(0,n.jsx)(t.code,{children:`fullstory.tpl`}),`:`]}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`{include file="engine/modules/devcraft/notifications_site.php?focus=subscribe&type=news&id={news-id}"}`})})})})}),`
`,(0,n.jsxs)(t.p,{children:[`Рендерится кнопка «Подписаться» / «Отписаться» из `,(0,n.jsx)(t.code,{children:`subscribe/news.tpl`}),`.`]}),`
`,(0,n.jsx)(t.h2,{id:`другие-типы`,children:`Другие типы`}),`
`,(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`Сущность`}),(0,n.jsx)(t.th,{children:`Query`})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`Категория`}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:`...?focus=subscribe&type=cat&id={'{category-id}'}`})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`Автор`}),(0,n.jsxs)(t.td,{children:[(0,n.jsx)(t.code,{children:`...?focus=subscribe&type=user&id=42`}),` (`,(0,n.jsx)(t.code,{children:`id`}),` — user_id)`]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`Тег`}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:`...?focus=subscribe&type=tag&id=php`})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`Все новые`}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:`...?focus=subscribe&type=all`})})]})]})]}),`
`,(0,n.jsxs)(t.p,{children:[`Семантика типов: `,(0,n.jsx)(t.a,{href:`./subscription_types`,children:`типы подписок`}),`.`]}),`
`,(0,n.jsx)(t.h2,{id:`стена`,children:`Стена`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`{include file="engine/modules/devcraft/notifications_site.php?focus=wall"}`})})})})}),`
`,(0,n.jsx)(t.h2,{id:`badge`,children:`Badge`}),`
`,(0,n.jsx)(t.p,{children:`В шапке:`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsxs)(t.code,{children:[(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`{include file="engine/modules/devcraft/notifications_site.php?focus=badge"}`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`{include file="engine/modules/devcraft/notifications_site.php?focus=js"}`})})]})})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:`focus=js`}),` один раз на странице: подписки, отметка прочитанным, polling. Интервал — `,(0,n.jsx)(t.strong,{children:`«Интервал polling badge»`}),` в настройках модуля (секунды; `,(0,n.jsx)(t.code,{children:`0`}),` — без автообновления).`]}),`
`,(0,n.jsx)(t.h2,{id:`кто-видит-блоки`,children:`Кто видит блоки`}),`
`,(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`Блок`}),(0,n.jsx)(t.th,{children:`Право группы`})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`Подписка`}),(0,n.jsx)(t.td,{children:`«Разрешить подписываться…» на соответствующий тип`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`Стена`}),(0,n.jsx)(t.td,{children:`«Разрешить просматривать стену»`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`Badge`}),(0,n.jsx)(t.td,{children:`«Разрешить использование уведомлений»`})]})]})]}),`
`,(0,n.jsx)(t.p,{children:`Гостям блоки не выводятся.`}),`
`,(0,n.jsx)(t.h2,{id:`файлы-оформления`,children:`Файлы оформления`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsxs)(t.code,{children:[(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`templates/ВАША_ТЕМА/devcraft/notifications/`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`  subscribe/          кнопки по типам`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`  wall.tpl            стена`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`  item.tpl            одна запись`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`  badge.tpl           колокольчик`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`  notifications.js    клиентская логика`})})]})})}),`
`,(0,n.jsxs)(t.p,{children:[`Плейсхолдеры: `,(0,n.jsx)(t.a,{href:`./scenario_templates`,children:`шаблоны и теги`}),`.`]}),`
`,(0,n.jsx)(t.h2,{id:`см-также`,children:`См. также`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`./subscription_types`,children:`Типы подписок`})}),`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`./permissions`,children:`Права групп`})}),`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`../install`,children:`Установка`})}),`
`]})]})}function l(e={}){let{wrapper:t}=e.components||{};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}export{a as _markdown,l as default,r as frontmatter,i as lastModified,o as structuredData,s as toc};