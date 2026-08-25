import{r as e}from"./rolldown-runtime-QTnfLwEv.js";import{t}from"./jsx-runtime-By8HlURe.js";var n=e(t()),r={title:`Сценарии событий`,description:`Какое событие какой .tpl сценария вызывает и кому уходит`,version:`200.1.0`},i=new Date(1787654208e3),a=`

Цепочка: событие → получатели (подписки + правила) → \`scenarios/*.tpl\` → при email/ЛС обёртка \`wrappers/\`.

Плейсхолдеры: [шаблоны и теги](./scenario_templates).

## Соответствие [#соответствие]

| Событие               | Файл                     | Получатели                      |
| --------------------- | ------------------------ | ------------------------------- |
| Правка новости        | \`news_update.tpl\`        | подписчики \`news\`               |
| Новая публикация      | \`news_published.tpl\`     | cat / user / tag / xfield / all |
| Одобрение модерации   | \`moderation_approve.tpl\` | автор                           |
| Снятие с публикации   | \`moderation_reject.tpl\`  | автор                           |
| Ответ на комментарий  | \`comment_reply.tpl\`      | автор родительского комментария |
| Комментарий к новости | \`comment_on_news.tpl\`    | автор новости                   |
| \`@ник\`                | \`mention.tpl\`            | упомянутый пользователь         |

## Глобальные выключатели [#глобальные-выключатели]

В настройках модуля можно отключить группы:

* публикация;
* обновление новости;
* ответы на комментарии;
* упоминания;
* модерация (одобрение / отклонение).

Выключенный флаг — сценарий не уходит, даже если \`.tpl\` на месте.

## Сообщение без сценария [#сообщение-без-сценария]

Хак или другой модуль может вызвать \`notifySend\` с готовым текстом: \`scenarios/\` не читаются.

## См. также [#см-также]

* [Шаблоны и теги](./scenario_templates)
* [Настройки пользователя](./user_prefs)
`,o={contents:[{heading:void 0,content:"Цепочка: событие → получатели (подписки + правила) → `scenarios/*.tpl` → при email/ЛС обёртка `wrappers/`."},{heading:void 0,content:`Плейсхолдеры: шаблоны и теги.`},{heading:`соответствие`,content:`Событие`},{heading:`соответствие`,content:`Файл`},{heading:`соответствие`,content:`Получатели`},{heading:`соответствие`,content:`Правка новости`},{heading:`соответствие`,content:"`news_update.tpl`"},{heading:`соответствие`,content:"подписчики `news`"},{heading:`соответствие`,content:`Новая публикация`},{heading:`соответствие`,content:"`news_published.tpl`"},{heading:`соответствие`,content:`cat / user / tag / xfield / all`},{heading:`соответствие`,content:`Одобрение модерации`},{heading:`соответствие`,content:"`moderation_approve.tpl`"},{heading:`соответствие`,content:`автор`},{heading:`соответствие`,content:`Снятие с публикации`},{heading:`соответствие`,content:"`moderation_reject.tpl`"},{heading:`соответствие`,content:`автор`},{heading:`соответствие`,content:`Ответ на комментарий`},{heading:`соответствие`,content:"`comment_reply.tpl`"},{heading:`соответствие`,content:`автор родительского комментария`},{heading:`соответствие`,content:`Комментарий к новости`},{heading:`соответствие`,content:"`comment_on_news.tpl`"},{heading:`соответствие`,content:`автор новости`},{heading:`соответствие`,content:"`@ник`"},{heading:`соответствие`,content:"`mention.tpl`"},{heading:`соответствие`,content:`упомянутый пользователь`},{heading:`глобальные-выключатели`,content:`В настройках модуля можно отключить группы:`},{heading:`глобальные-выключатели`,content:`публикация;`},{heading:`глобальные-выключатели`,content:`обновление новости;`},{heading:`глобальные-выключатели`,content:`ответы на комментарии;`},{heading:`глобальные-выключатели`,content:`упоминания;`},{heading:`глобальные-выключатели`,content:`модерация (одобрение / отклонение).`},{heading:`глобальные-выключатели`,content:"Выключенный флаг — сценарий не уходит, даже если `.tpl` на месте."},{heading:`сообщение-без-сценария`,content:"Хак или другой модуль может вызвать `notifySend` с готовым текстом: `scenarios/` не читаются."},{heading:`см-также`,content:`Шаблоны и теги`},{heading:`см-также`,content:`Настройки пользователя`}],headings:[{id:`соответствие`,content:`Соответствие`},{id:`глобальные-выключатели`,content:`Глобальные выключатели`},{id:`сообщение-без-сценария`,content:`Сообщение без сценария`},{id:`см-также`,content:`См. также`}]},s=[{depth:2,url:`#соответствие`,title:(0,n.jsx)(n.Fragment,{children:`Соответствие`})},{depth:2,url:`#глобальные-выключатели`,title:(0,n.jsx)(n.Fragment,{children:`Глобальные выключатели`})},{depth:2,url:`#сообщение-без-сценария`,title:(0,n.jsx)(n.Fragment,{children:`Сообщение без сценария`})},{depth:2,url:`#см-также`,title:(0,n.jsx)(n.Fragment,{children:`См. также`})}];function c(e){let t={a:`a`,code:`code`,h2:`h2`,li:`li`,p:`p`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,ul:`ul`,...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:[`Цепочка: событие → получатели (подписки + правила) → `,(0,n.jsx)(t.code,{children:`scenarios/*.tpl`}),` → при email/ЛС обёртка `,(0,n.jsx)(t.code,{children:`wrappers/`}),`.`]}),`
`,(0,n.jsxs)(t.p,{children:[`Плейсхолдеры: `,(0,n.jsx)(t.a,{href:`./scenario_templates`,children:`шаблоны и теги`}),`.`]}),`
`,(0,n.jsx)(t.h2,{id:`соответствие`,children:`Соответствие`}),`
`,(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`Событие`}),(0,n.jsx)(t.th,{children:`Файл`}),(0,n.jsx)(t.th,{children:`Получатели`})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`Правка новости`}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:`news_update.tpl`})}),(0,n.jsxs)(t.td,{children:[`подписчики `,(0,n.jsx)(t.code,{children:`news`})]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`Новая публикация`}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:`news_published.tpl`})}),(0,n.jsx)(t.td,{children:`cat / user / tag / xfield / all`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`Одобрение модерации`}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:`moderation_approve.tpl`})}),(0,n.jsx)(t.td,{children:`автор`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`Снятие с публикации`}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:`moderation_reject.tpl`})}),(0,n.jsx)(t.td,{children:`автор`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`Ответ на комментарий`}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:`comment_reply.tpl`})}),(0,n.jsx)(t.td,{children:`автор родительского комментария`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`Комментарий к новости`}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:`comment_on_news.tpl`})}),(0,n.jsx)(t.td,{children:`автор новости`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:`@ник`})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:`mention.tpl`})}),(0,n.jsx)(t.td,{children:`упомянутый пользователь`})]})]})]}),`
`,(0,n.jsx)(t.h2,{id:`глобальные-выключатели`,children:`Глобальные выключатели`}),`
`,(0,n.jsx)(t.p,{children:`В настройках модуля можно отключить группы:`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsx)(t.li,{children:`публикация;`}),`
`,(0,n.jsx)(t.li,{children:`обновление новости;`}),`
`,(0,n.jsx)(t.li,{children:`ответы на комментарии;`}),`
`,(0,n.jsx)(t.li,{children:`упоминания;`}),`
`,(0,n.jsx)(t.li,{children:`модерация (одобрение / отклонение).`}),`
`]}),`
`,(0,n.jsxs)(t.p,{children:[`Выключенный флаг — сценарий не уходит, даже если `,(0,n.jsx)(t.code,{children:`.tpl`}),` на месте.`]}),`
`,(0,n.jsx)(t.h2,{id:`сообщение-без-сценария`,children:`Сообщение без сценария`}),`
`,(0,n.jsxs)(t.p,{children:[`Хак или другой модуль может вызвать `,(0,n.jsx)(t.code,{children:`notifySend`}),` с готовым текстом: `,(0,n.jsx)(t.code,{children:`scenarios/`}),` не читаются.`]}),`
`,(0,n.jsx)(t.h2,{id:`см-также`,children:`См. также`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`./scenario_templates`,children:`Шаблоны и теги`})}),`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`./user_prefs`,children:`Настройки пользователя`})}),`
`]})]})}function l(e={}){let{wrapper:t}=e.components||{};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}export{a as _markdown,l as default,r as frontmatter,i as lastModified,o as structuredData,s as toc};