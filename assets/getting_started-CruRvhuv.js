import{r as e}from"./rolldown-runtime-QTnfLwEv.js";import{t}from"./jsx-runtime-By8HlURe.js";var n=e(t()),r={title:`Начало работы`,description:`Обзор модуля: каналы, подписки, шаблоны темы и быстрое подключение`,version:`200.1.0`},i=new Date(1787654208e3),a=`

**DLE Уведомления** рассылает сообщения по событиям сайта: правка новости, новый комментарий, упоминание \`@ник\`, модерация и т.д.

Каналы доставки:

* сайт — badge (колокольчик) и стена;
* email;
* личные сообщения DLE.

Пользователь подписывается на новость, категорию, автора, тег, доп. поле или на все новые публикации и получает только релевантные события.

Зависимость: [DevCraft Admin](../../devcraft_admin/getting_started) 200.4.0+.

## Возможности [#возможности]

* кнопка подписки у новости, категории и других сущностей;
* стена уведомлений и счётчик непрочитанных с polling;
* тексты писем, ЛС и записей inbox в \`.tpl\` темы;
* права по группам DLE.

## Разделы [#разделы]

<Cards>
  <Card title="Установка" href="/dev/dle/notifications/200.1.0/install">
    ZIP, autoload, таблицы, копирование шаблонов
  </Card>

  <Card title="Вставка в шаблоны" href="/dev/dle/notifications/200.1.0/guides/subscribe_wall">
    include: подписка, стена, badge
  </Card>

  <Card title="Типы подписок" href="/dev/dle/notifications/200.1.0/guides/subscription_types">
    news, cat, user, tag, xfield, all
  </Card>

  <Card title="Шаблоны и теги" href="/dev/dle/notifications/200.1.0/guides/scenario_templates">
    scenarios, wrappers, subscribe, inbox
  </Card>
</Cards>

## Минимальное подключение [#минимальное-подключение]

Полная новость (\`fullstory.tpl\`):

\`\`\`
{include file="engine/modules/devcraft/notifications_site.php?focus=subscribe&type=news&id={news-id}"}
\`\`\`

Шапка: badge и JS (клики, «прочитать всё», polling):

\`\`\`
{include file="engine/modules/devcraft/notifications_site.php?focus=badge"}
{include file="engine/modules/devcraft/notifications_site.php?focus=js"}
\`\`\`

Стена (профиль или отдельная страница):

\`\`\`
{include file="engine/modules/devcraft/notifications_site.php?focus=wall"}
\`\`\`

## Требования [#требования]

* DLE 20+
* PHP 8.3+
* DevCraft Admin 200.4.0+

## Дальше [#дальше]

* [Установка](./install)
* [Шаблоны и теги](./guides/scenario_templates)
* [Права групп](./guides/permissions)
`,o={contents:[{heading:void 0,content:"**DLE Уведомления** рассылает сообщения по событиям сайта: правка новости, новый комментарий, упоминание `@ник`, модерация и т.д."},{heading:void 0,content:`Каналы доставки:`},{heading:void 0,content:`сайт — badge (колокольчик) и стена;`},{heading:void 0,content:`email;`},{heading:void 0,content:`личные сообщения DLE.`},{heading:void 0,content:`Пользователь подписывается на новость, категорию, автора, тег, доп. поле или на все новые публикации и получает только релевантные события.`},{heading:void 0,content:`Зависимость: DevCraft Admin 200.4.0+.`},{heading:`возможности`,content:`кнопка подписки у новости, категории и других сущностей;`},{heading:`возможности`,content:`стена уведомлений и счётчик непрочитанных с polling;`},{heading:`возможности`,content:"тексты писем, ЛС и записей inbox в `.tpl` темы;"},{heading:`возможности`,content:`права по группам DLE.`},{heading:`разделы`,content:`ZIP, autoload, таблицы, копирование шаблонов`},{heading:`разделы`,content:`include: подписка, стена, badge`},{heading:`разделы`,content:`news, cat, user, tag, xfield, all`},{heading:`разделы`,content:`scenarios, wrappers, subscribe, inbox`},{heading:`минимальное-подключение`,content:"Полная новость (`fullstory.tpl`):"},{heading:`минимальное-подключение`,content:`Шапка: badge и JS (клики, «прочитать всё», polling):`},{heading:`минимальное-подключение`,content:`Стена (профиль или отдельная страница):`},{heading:`требования`,content:`DLE 20+`},{heading:`требования`,content:`PHP 8.3+`},{heading:`требования`,content:`DevCraft Admin 200.4.0+`},{heading:`дальше`,content:`Установка`},{heading:`дальше`,content:`Шаблоны и теги`},{heading:`дальше`,content:`Права групп`}],headings:[{id:`возможности`,content:`Возможности`},{id:`разделы`,content:`Разделы`},{id:`минимальное-подключение`,content:`Минимальное подключение`},{id:`требования`,content:`Требования`},{id:`дальше`,content:`Дальше`}]},s=[{depth:2,url:`#возможности`,title:(0,n.jsx)(n.Fragment,{children:`Возможности`})},{depth:2,url:`#разделы`,title:(0,n.jsx)(n.Fragment,{children:`Разделы`})},{depth:2,url:`#минимальное-подключение`,title:(0,n.jsx)(n.Fragment,{children:`Минимальное подключение`})},{depth:2,url:`#требования`,title:(0,n.jsx)(n.Fragment,{children:`Требования`})},{depth:2,url:`#дальше`,title:(0,n.jsx)(n.Fragment,{children:`Дальше`})}];function c(e){let t={a:`a`,code:`code`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,span:`span`,strong:`strong`,ul:`ul`,...e.components},{Card:r,Cards:i}=t;return r||u(`Card`,!0),i||u(`Cards`,!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`DLE Уведомления`}),` рассылает сообщения по событиям сайта: правка новости, новый комментарий, упоминание `,(0,n.jsx)(t.code,{children:`@ник`}),`, модерация и т.д.`]}),`
`,(0,n.jsx)(t.p,{children:`Каналы доставки:`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsx)(t.li,{children:`сайт — badge (колокольчик) и стена;`}),`
`,(0,n.jsx)(t.li,{children:`email;`}),`
`,(0,n.jsx)(t.li,{children:`личные сообщения DLE.`}),`
`]}),`
`,(0,n.jsx)(t.p,{children:`Пользователь подписывается на новость, категорию, автора, тег, доп. поле или на все новые публикации и получает только релевантные события.`}),`
`,(0,n.jsxs)(t.p,{children:[`Зависимость: `,(0,n.jsx)(t.a,{href:`../../devcraft_admin/getting_started`,children:`DevCraft Admin`}),` 200.4.0+.`]}),`
`,(0,n.jsx)(t.h2,{id:`возможности`,children:`Возможности`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsx)(t.li,{children:`кнопка подписки у новости, категории и других сущностей;`}),`
`,(0,n.jsx)(t.li,{children:`стена уведомлений и счётчик непрочитанных с polling;`}),`
`,(0,n.jsxs)(t.li,{children:[`тексты писем, ЛС и записей inbox в `,(0,n.jsx)(t.code,{children:`.tpl`}),` темы;`]}),`
`,(0,n.jsx)(t.li,{children:`права по группам DLE.`}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`разделы`,children:`Разделы`}),`
`,(0,n.jsxs)(i,{children:[(0,n.jsx)(r,{title:`Установка`,href:`/dev/dle/notifications/200.1.0/install`,children:(0,n.jsx)(t.p,{children:`ZIP, autoload, таблицы, копирование шаблонов`})}),(0,n.jsx)(r,{title:`Вставка в шаблоны`,href:`/dev/dle/notifications/200.1.0/guides/subscribe_wall`,children:(0,n.jsx)(t.p,{children:`include: подписка, стена, badge`})}),(0,n.jsx)(r,{title:`Типы подписок`,href:`/dev/dle/notifications/200.1.0/guides/subscription_types`,children:(0,n.jsx)(t.p,{children:`news, cat, user, tag, xfield, all`})}),(0,n.jsx)(r,{title:`Шаблоны и теги`,href:`/dev/dle/notifications/200.1.0/guides/scenario_templates`,children:(0,n.jsx)(t.p,{children:`scenarios, wrappers, subscribe, inbox`})})]}),`
`,(0,n.jsx)(t.h2,{id:`минимальное-подключение`,children:`Минимальное подключение`}),`
`,(0,n.jsxs)(t.p,{children:[`Полная новость (`,(0,n.jsx)(t.code,{children:`fullstory.tpl`}),`):`]}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`{include file="engine/modules/devcraft/notifications_site.php?focus=subscribe&type=news&id={news-id}"}`})})})})}),`
`,(0,n.jsx)(t.p,{children:`Шапка: badge и JS (клики, «прочитать всё», polling):`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsxs)(t.code,{children:[(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`{include file="engine/modules/devcraft/notifications_site.php?focus=badge"}`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`{include file="engine/modules/devcraft/notifications_site.php?focus=js"}`})})]})})}),`
`,(0,n.jsx)(t.p,{children:`Стена (профиль или отдельная страница):`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`{include file="engine/modules/devcraft/notifications_site.php?focus=wall"}`})})})})}),`
`,(0,n.jsx)(t.h2,{id:`требования`,children:`Требования`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsx)(t.li,{children:`DLE 20+`}),`
`,(0,n.jsx)(t.li,{children:`PHP 8.3+`}),`
`,(0,n.jsx)(t.li,{children:`DevCraft Admin 200.4.0+`}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`дальше`,children:`Дальше`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`./install`,children:`Установка`})}),`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`./guides/scenario_templates`,children:`Шаблоны и теги`})}),`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`./guides/permissions`,children:`Права групп`})}),`
`]})]})}function l(e={}){let{wrapper:t}=e.components||{};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}function u(e,t){throw Error(`Expected `+(t?`component`:`object`)+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}export{a as _markdown,l as default,r as frontmatter,i as lastModified,o as structuredData,s as toc};