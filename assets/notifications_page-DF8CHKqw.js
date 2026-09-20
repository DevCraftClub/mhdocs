import{r as e}from"./rolldown-runtime-QTnfLwEv.js";import{t}from"./jsx-runtime-By8HlURe.js";var n=e(t()),r={title:`Страница уведомлений`,description:`Отдельная страница списка: index.php?do=notifications и /notifications/`,version:`200.1.0`},i=new Date(1789913881e3),a=`

Отдельный адрес со стеной уведомлений — не колокольчик в шапке и не вставка в профиле.

## Адреса [#адреса]

| Вид      | Адрес                                                   |
| -------- | ------------------------------------------------------- |
| Обычный  | \`/index.php?do=notifications\`                           |
| Короткий | \`/notifications/\` (если в DLE включены короткие адреса) |

Маршрут ставит плагин. Ссылка в коде: \`notifyPageUrl()\`; в шаблонах — тег \`{notifications-url}\`.

При загрузке \`Site/include.php\` модуль добавляет ключ \`notifications\` в справочник разделов публичных ресурсов (\`DleSiteSectionRegistry\`). В админке Admin его можно выбрать в «Разделы показа» / «Разделы-исключения». На самой странице оболочка берёт текущий ключ из \`$do\`.

## Кто может открыть [#кто-может-открыть]

* нужна авторизация;
* право «Разрешить просматривать стену уведомлений» **или** «Разрешить использование уведомлений»;
* иначе страница недоступна, показывается ошибка.

Гостю страница закрыта.

## Как устроено [#как-устроено]

1. \`do=notifications\` → \`devcraft/src/modules/Notifications/Controller/show_notifications_page.php\`
2. Шаблон темы \`templates/{тема}/devcraft/notifications/page.tpl\`
3. Внутри — вставка стены: \`show_notifications.php?focus=wall\`

Типичный кабинет с тремя блоками — в [шаблоне page.tpl](../templates/page). Оформление записей — \`wall.tpl\`, \`item.tpl\`, \`item_actions.tpl\` ([стена](../templates/wall), [строка ленты](../templates/item)).

## Отличие от вставки стены [#отличие-от-вставки-стены]

|                    | Страница \`do=\`                       | \`focus=wall\` в профиле     |
| ------------------ | ------------------------------------ | -------------------------- |
| Адрес              | свой (\`/notifications/\`)             | страница профиля или любая |
| Заголовок страницы | задаёт \`show_notifications_page.php\` | у родителя                 |
| Разметка           | обёртка \`page.tpl\`                   | только блок стены          |

Список и права одни и те же.

## См. также [#см-также]

* [Шаблон page.tpl](../templates/page)
* [Колокольчик, стена и кнопка](./subscribe_wall)
* [Лента на сайте](./inbox_api)
* [Права групп](./permissions)
`,o={contents:[{heading:void 0,content:`Отдельный адрес со стеной уведомлений — не колокольчик в шапке и не вставка в профиле.`},{heading:`адреса`,content:`Вид`},{heading:`адреса`,content:`Адрес`},{heading:`адреса`,content:`Обычный`},{heading:`адреса`,content:"`/index.php?do=notifications`"},{heading:`адреса`,content:`Короткий`},{heading:`адреса`,content:"`/notifications/` (если в DLE включены короткие адреса)"},{heading:`адреса`,content:"Маршрут ставит плагин. Ссылка в коде: `notifyPageUrl()`; в шаблонах — тег `{notifications-url}`."},{heading:`адреса`,content:"При загрузке `Site/include.php` модуль добавляет ключ `notifications` в справочник разделов публичных ресурсов (`DleSiteSectionRegistry`). В админке Admin его можно выбрать в «Разделы показа» / «Разделы-исключения». На самой странице оболочка берёт текущий ключ из `$do`."},{heading:`кто-может-открыть`,content:`нужна авторизация;`},{heading:`кто-может-открыть`,content:`право «Разрешить просматривать стену уведомлений» **или** «Разрешить использование уведомлений»;`},{heading:`кто-может-открыть`,content:`иначе страница недоступна, показывается ошибка.`},{heading:`кто-может-открыть`,content:`Гостю страница закрыта.`},{heading:`как-устроено`,content:"`do=notifications` → `devcraft/src/modules/Notifications/Controller/show_notifications_page.php`"},{heading:`как-устроено`,content:"Шаблон темы `templates/{тема}/devcraft/notifications/page.tpl`"},{heading:`как-устроено`,content:"Внутри — вставка стены: `show_notifications.php?focus=wall`"},{heading:`как-устроено`,content:"Типичный кабинет с тремя блоками — в шаблоне page.tpl. Оформление записей — `wall.tpl`, `item.tpl`, `item_actions.tpl` (стена, строка ленты)."},{heading:`отличие-от-вставки-стены`,content:"Страница `do=`"},{heading:`отличие-от-вставки-стены`,content:"`focus=wall` в профиле"},{heading:`отличие-от-вставки-стены`,content:`Адрес`},{heading:`отличие-от-вставки-стены`,content:"свой (`/notifications/`)"},{heading:`отличие-от-вставки-стены`,content:`страница профиля или любая`},{heading:`отличие-от-вставки-стены`,content:`Заголовок страницы`},{heading:`отличие-от-вставки-стены`,content:"задаёт `show_notifications_page.php`"},{heading:`отличие-от-вставки-стены`,content:`у родителя`},{heading:`отличие-от-вставки-стены`,content:`Разметка`},{heading:`отличие-от-вставки-стены`,content:"обёртка `page.tpl`"},{heading:`отличие-от-вставки-стены`,content:`только блок стены`},{heading:`отличие-от-вставки-стены`,content:`Список и права одни и те же.`},{heading:`см-также`,content:`Шаблон page.tpl`},{heading:`см-также`,content:`Колокольчик, стена и кнопка`},{heading:`см-также`,content:`Лента на сайте`},{heading:`см-также`,content:`Права групп`}],headings:[{id:`адреса`,content:`Адреса`},{id:`кто-может-открыть`,content:`Кто может открыть`},{id:`как-устроено`,content:`Как устроено`},{id:`отличие-от-вставки-стены`,content:`Отличие от вставки стены`},{id:`см-также`,content:`См. также`}]},s=[{depth:2,url:`#адреса`,title:(0,n.jsx)(n.Fragment,{children:`Адреса`})},{depth:2,url:`#кто-может-открыть`,title:(0,n.jsx)(n.Fragment,{children:`Кто может открыть`})},{depth:2,url:`#как-устроено`,title:(0,n.jsx)(n.Fragment,{children:`Как устроено`})},{depth:2,url:`#отличие-от-вставки-стены`,title:(0,n.jsx)(n.Fragment,{children:`Отличие от вставки стены`})},{depth:2,url:`#см-также`,title:(0,n.jsx)(n.Fragment,{children:`См. также`})}];function c(e){let t={a:`a`,code:`code`,h2:`h2`,li:`li`,ol:`ol`,p:`p`,strong:`strong`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,ul:`ul`,...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.p,{children:`Отдельный адрес со стеной уведомлений — не колокольчик в шапке и не вставка в профиле.`}),`
`,(0,n.jsx)(t.h2,{id:`адреса`,children:`Адреса`}),`
`,(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`Вид`}),(0,n.jsx)(t.th,{children:`Адрес`})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`Обычный`}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:`/index.php?do=notifications`})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`Короткий`}),(0,n.jsxs)(t.td,{children:[(0,n.jsx)(t.code,{children:`/notifications/`}),` (если в DLE включены короткие адреса)`]})]})]})]}),`
`,(0,n.jsxs)(t.p,{children:[`Маршрут ставит плагин. Ссылка в коде: `,(0,n.jsx)(t.code,{children:`notifyPageUrl()`}),`; в шаблонах — тег `,(0,n.jsx)(t.code,{children:`{notifications-url}`}),`.`]}),`
`,(0,n.jsxs)(t.p,{children:[`При загрузке `,(0,n.jsx)(t.code,{children:`Site/include.php`}),` модуль добавляет ключ `,(0,n.jsx)(t.code,{children:`notifications`}),` в справочник разделов публичных ресурсов (`,(0,n.jsx)(t.code,{children:`DleSiteSectionRegistry`}),`). В админке Admin его можно выбрать в «Разделы показа» / «Разделы-исключения». На самой странице оболочка берёт текущий ключ из `,(0,n.jsx)(t.code,{children:`$do`}),`.`]}),`
`,(0,n.jsx)(t.h2,{id:`кто-может-открыть`,children:`Кто может открыть`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsx)(t.li,{children:`нужна авторизация;`}),`
`,(0,n.jsxs)(t.li,{children:[`право «Разрешить просматривать стену уведомлений» `,(0,n.jsx)(t.strong,{children:`или`}),` «Разрешить использование уведомлений»;`]}),`
`,(0,n.jsx)(t.li,{children:`иначе страница недоступна, показывается ошибка.`}),`
`]}),`
`,(0,n.jsx)(t.p,{children:`Гостю страница закрыта.`}),`
`,(0,n.jsx)(t.h2,{id:`как-устроено`,children:`Как устроено`}),`
`,(0,n.jsxs)(t.ol,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`do=notifications`}),` → `,(0,n.jsx)(t.code,{children:`devcraft/src/modules/Notifications/Controller/show_notifications_page.php`})]}),`
`,(0,n.jsxs)(t.li,{children:[`Шаблон темы `,(0,n.jsx)(t.code,{children:`templates/{тема}/devcraft/notifications/page.tpl`})]}),`
`,(0,n.jsxs)(t.li,{children:[`Внутри — вставка стены: `,(0,n.jsx)(t.code,{children:`show_notifications.php?focus=wall`})]}),`
`]}),`
`,(0,n.jsxs)(t.p,{children:[`Типичный кабинет с тремя блоками — в `,(0,n.jsx)(t.a,{href:`../templates/page`,children:`шаблоне page.tpl`}),`. Оформление записей — `,(0,n.jsx)(t.code,{children:`wall.tpl`}),`, `,(0,n.jsx)(t.code,{children:`item.tpl`}),`, `,(0,n.jsx)(t.code,{children:`item_actions.tpl`}),` (`,(0,n.jsx)(t.a,{href:`../templates/wall`,children:`стена`}),`, `,(0,n.jsx)(t.a,{href:`../templates/item`,children:`строка ленты`}),`).`]}),`
`,(0,n.jsx)(t.h2,{id:`отличие-от-вставки-стены`,children:`Отличие от вставки стены`}),`
`,(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{}),(0,n.jsxs)(t.th,{children:[`Страница `,(0,n.jsx)(t.code,{children:`do=`})]}),(0,n.jsxs)(t.th,{children:[(0,n.jsx)(t.code,{children:`focus=wall`}),` в профиле`]})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`Адрес`}),(0,n.jsxs)(t.td,{children:[`свой (`,(0,n.jsx)(t.code,{children:`/notifications/`}),`)`]}),(0,n.jsx)(t.td,{children:`страница профиля или любая`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`Заголовок страницы`}),(0,n.jsxs)(t.td,{children:[`задаёт `,(0,n.jsx)(t.code,{children:`show_notifications_page.php`})]}),(0,n.jsx)(t.td,{children:`у родителя`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`Разметка`}),(0,n.jsxs)(t.td,{children:[`обёртка `,(0,n.jsx)(t.code,{children:`page.tpl`})]}),(0,n.jsx)(t.td,{children:`только блок стены`})]})]})]}),`
`,(0,n.jsx)(t.p,{children:`Список и права одни и те же.`}),`
`,(0,n.jsx)(t.h2,{id:`см-также`,children:`См. также`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`../templates/page`,children:`Шаблон page.tpl`})}),`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`./subscribe_wall`,children:`Колокольчик, стена и кнопка`})}),`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`./inbox_api`,children:`Лента на сайте`})}),`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`./permissions`,children:`Права групп`})}),`
`]})]})}function l(e={}){let{wrapper:t}=e.components||{};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}export{a as _markdown,l as default,r as frontmatter,i as lastModified,o as structuredData,s as toc};