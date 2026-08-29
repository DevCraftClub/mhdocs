import{r as e}from"./rolldown-runtime-QTnfLwEv.js";import{t}from"./jsx-runtime-By8HlURe.js";var n=e(t()),r={title:`Страница уведомлений`,description:`Отдельная страница списка: index.php?do=notifications и ЧПУ /notifications/`,version:`200.1.0`},i=new Date(1788011088e3),a=`

Отдельный URL со стеной уведомлений пользователя — не виджет в шапке и не include в профиле.

## Адреса [#адреса]

| Вид   | Адрес                                     |
| ----- | ----------------------------------------- |
| Query | \`/index.php?do=notifications\`             |
| ЧПУ   | \`/notifications/\` (если включены ЧПУ DLE) |

Маршрут ставит плагин (\`engine/engine.php\` + правило в \`urls.class.php\`). Ссылка в коде: \`notifyPageUrl()\`; в шаблонах — тег \`{notifications-url}\` (из include модуля).

## Кто может открыть [#кто-может-открыть]

* нужна авторизация;
* право «Разрешить просматривать стену уведомлений» **или** «Разрешить использование уведомлений»;
* иначе 403 и сообщение об ошибке.

Гостю страница недоступна.

## Как устроено [#как-устроено]

1. \`do=notifications\` → \`devcraft/src/modules/Notifications/Site/page.php\`
2. Шаблон темы \`templates/{тема}/devcraft/notifications/page.tpl\`
3. Внутри — include стены: \`Site/web.php?focus=wall\`

Типичный \`page.tpl\`:

\`\`\`
<article class="box story">
	<div class="box_in">
		{include file="devcraft/src/modules/Notifications/Site/web.php?focus=wall"}
	</div>
</article>
\`\`\`

Оформление записей — \`devcraft/notifications/wall.tpl\`, \`item.tpl\`, \`item_actions.tpl\`.

## Отличие от include стены [#отличие-от-include-стены]

|                       | Страница \`do=\`           | \`focus=wall\` в профиле   |
| --------------------- | ------------------------ | ------------------------ |
| URL                   | свой (\`/notifications/\`) | страница профиля / любая |
| Заголовок / canonical | задаёт \`Site/page.php\`   | у родителя               |
| Разметка              | обёртка \`page.tpl\`       | только блок стены        |

Логика списка и прав одна и та же.

## См. также [#см-также]

* [Вставка в шаблоны](./subscribe_wall)
* [Лента на сайте](./inbox_api)
* [Права групп](./permissions)
`,o={contents:[{heading:void 0,content:`Отдельный URL со стеной уведомлений пользователя — не виджет в шапке и не include в профиле.`},{heading:`адреса`,content:`Вид`},{heading:`адреса`,content:`Адрес`},{heading:`адреса`,content:`Query`},{heading:`адреса`,content:"`/index.php?do=notifications`"},{heading:`адреса`,content:`ЧПУ`},{heading:`адреса`,content:"`/notifications/` (если включены ЧПУ DLE)"},{heading:`адреса`,content:"Маршрут ставит плагин (`engine/engine.php` + правило в `urls.class.php`). Ссылка в коде: `notifyPageUrl()`; в шаблонах — тег `{notifications-url}` (из include модуля)."},{heading:`кто-может-открыть`,content:`нужна авторизация;`},{heading:`кто-может-открыть`,content:`право «Разрешить просматривать стену уведомлений» **или** «Разрешить использование уведомлений»;`},{heading:`кто-может-открыть`,content:`иначе 403 и сообщение об ошибке.`},{heading:`кто-может-открыть`,content:`Гостю страница недоступна.`},{heading:`как-устроено`,content:"`do=notifications` → `devcraft/src/modules/Notifications/Site/page.php`"},{heading:`как-устроено`,content:"Шаблон темы `templates/{тема}/devcraft/notifications/page.tpl`"},{heading:`как-устроено`,content:"Внутри — include стены: `Site/web.php?focus=wall`"},{heading:`как-устроено`,content:"Типичный `page.tpl`:"},{heading:`как-устроено`,content:"Оформление записей — `devcraft/notifications/wall.tpl`, `item.tpl`, `item_actions.tpl`."},{heading:`отличие-от-include-стены`,content:"Страница `do=`"},{heading:`отличие-от-include-стены`,content:"`focus=wall` в профиле"},{heading:`отличие-от-include-стены`,content:`URL`},{heading:`отличие-от-include-стены`,content:"свой (`/notifications/`)"},{heading:`отличие-от-include-стены`,content:`страница профиля / любая`},{heading:`отличие-от-include-стены`,content:`Заголовок / canonical`},{heading:`отличие-от-include-стены`,content:"задаёт `Site/page.php`"},{heading:`отличие-от-include-стены`,content:`у родителя`},{heading:`отличие-от-include-стены`,content:`Разметка`},{heading:`отличие-от-include-стены`,content:"обёртка `page.tpl`"},{heading:`отличие-от-include-стены`,content:`только блок стены`},{heading:`отличие-от-include-стены`,content:`Логика списка и прав одна и та же.`},{heading:`см-также`,content:`Вставка в шаблоны`},{heading:`см-также`,content:`Лента на сайте`},{heading:`см-также`,content:`Права групп`}],headings:[{id:`адреса`,content:`Адреса`},{id:`кто-может-открыть`,content:`Кто может открыть`},{id:`как-устроено`,content:`Как устроено`},{id:`отличие-от-include-стены`,content:`Отличие от include стены`},{id:`см-также`,content:`См. также`}]},s=[{depth:2,url:`#адреса`,title:(0,n.jsx)(n.Fragment,{children:`Адреса`})},{depth:2,url:`#кто-может-открыть`,title:(0,n.jsx)(n.Fragment,{children:`Кто может открыть`})},{depth:2,url:`#как-устроено`,title:(0,n.jsx)(n.Fragment,{children:`Как устроено`})},{depth:2,url:`#отличие-от-include-стены`,title:(0,n.jsx)(n.Fragment,{children:`Отличие от include стены`})},{depth:2,url:`#см-также`,title:(0,n.jsx)(n.Fragment,{children:`См. также`})}];function c(e){let t={a:`a`,code:`code`,h2:`h2`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,span:`span`,strong:`strong`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,ul:`ul`,...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.p,{children:`Отдельный URL со стеной уведомлений пользователя — не виджет в шапке и не include в профиле.`}),`
`,(0,n.jsx)(t.h2,{id:`адреса`,children:`Адреса`}),`
`,(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`Вид`}),(0,n.jsx)(t.th,{children:`Адрес`})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`Query`}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:`/index.php?do=notifications`})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`ЧПУ`}),(0,n.jsxs)(t.td,{children:[(0,n.jsx)(t.code,{children:`/notifications/`}),` (если включены ЧПУ DLE)`]})]})]})]}),`
`,(0,n.jsxs)(t.p,{children:[`Маршрут ставит плагин (`,(0,n.jsx)(t.code,{children:`engine/engine.php`}),` + правило в `,(0,n.jsx)(t.code,{children:`urls.class.php`}),`). Ссылка в коде: `,(0,n.jsx)(t.code,{children:`notifyPageUrl()`}),`; в шаблонах — тег `,(0,n.jsx)(t.code,{children:`{notifications-url}`}),` (из include модуля).`]}),`
`,(0,n.jsx)(t.h2,{id:`кто-может-открыть`,children:`Кто может открыть`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsx)(t.li,{children:`нужна авторизация;`}),`
`,(0,n.jsxs)(t.li,{children:[`право «Разрешить просматривать стену уведомлений» `,(0,n.jsx)(t.strong,{children:`или`}),` «Разрешить использование уведомлений»;`]}),`
`,(0,n.jsx)(t.li,{children:`иначе 403 и сообщение об ошибке.`}),`
`]}),`
`,(0,n.jsx)(t.p,{children:`Гостю страница недоступна.`}),`
`,(0,n.jsx)(t.h2,{id:`как-устроено`,children:`Как устроено`}),`
`,(0,n.jsxs)(t.ol,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`do=notifications`}),` → `,(0,n.jsx)(t.code,{children:`devcraft/src/modules/Notifications/Site/page.php`})]}),`
`,(0,n.jsxs)(t.li,{children:[`Шаблон темы `,(0,n.jsx)(t.code,{children:`templates/{тема}/devcraft/notifications/page.tpl`})]}),`
`,(0,n.jsxs)(t.li,{children:[`Внутри — include стены: `,(0,n.jsx)(t.code,{children:`Site/web.php?focus=wall`})]}),`
`]}),`
`,(0,n.jsxs)(t.p,{children:[`Типичный `,(0,n.jsx)(t.code,{children:`page.tpl`}),`:`]}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsxs)(t.code,{children:[(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`<article class="box story">`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`	<div class="box_in">`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`		{include file="devcraft/src/modules/Notifications/Site/web.php?focus=wall"}`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`	</div>`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`</article>`})})]})})}),`
`,(0,n.jsxs)(t.p,{children:[`Оформление записей — `,(0,n.jsx)(t.code,{children:`devcraft/notifications/wall.tpl`}),`, `,(0,n.jsx)(t.code,{children:`item.tpl`}),`, `,(0,n.jsx)(t.code,{children:`item_actions.tpl`}),`.`]}),`
`,(0,n.jsx)(t.h2,{id:`отличие-от-include-стены`,children:`Отличие от include стены`}),`
`,(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{}),(0,n.jsxs)(t.th,{children:[`Страница `,(0,n.jsx)(t.code,{children:`do=`})]}),(0,n.jsxs)(t.th,{children:[(0,n.jsx)(t.code,{children:`focus=wall`}),` в профиле`]})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`URL`}),(0,n.jsxs)(t.td,{children:[`свой (`,(0,n.jsx)(t.code,{children:`/notifications/`}),`)`]}),(0,n.jsx)(t.td,{children:`страница профиля / любая`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`Заголовок / canonical`}),(0,n.jsxs)(t.td,{children:[`задаёт `,(0,n.jsx)(t.code,{children:`Site/page.php`})]}),(0,n.jsx)(t.td,{children:`у родителя`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`Разметка`}),(0,n.jsxs)(t.td,{children:[`обёртка `,(0,n.jsx)(t.code,{children:`page.tpl`})]}),(0,n.jsx)(t.td,{children:`только блок стены`})]})]})]}),`
`,(0,n.jsx)(t.p,{children:`Логика списка и прав одна и та же.`}),`
`,(0,n.jsx)(t.h2,{id:`см-также`,children:`См. также`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`./subscribe_wall`,children:`Вставка в шаблоны`})}),`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`./inbox_api`,children:`Лента на сайте`})}),`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`./permissions`,children:`Права групп`})}),`
`]})]})}function l(e={}){let{wrapper:t}=e.components||{};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}export{a as _markdown,l as default,r as frontmatter,i as lastModified,o as structuredData,s as toc};