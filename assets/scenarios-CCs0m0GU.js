import{r as e}from"./rolldown-runtime-QTnfLwEv.js";import{t}from"./jsx-runtime-By8HlURe.js";var n=e(t()),r={title:`Сценарии событий`,description:`Какое событие какой .tpl сценария вызывает и кому уходит`,version:`200.1.0`},i=new Date(1787750944e3),a=`

Цепочка: событие → получатели (подписки + правила) → \`scenarios/*.tpl\` → при email/ЛС обёртка \`wrappers/\`.

Плейсхолдеры: [шаблоны и теги](./scenario_templates).

## Соответствие [#соответствие]

| Событие                  | Файл                     | Получатели                      |
| ------------------------ | ------------------------ | ------------------------------- |
| Правка новости           | \`news_update.tpl\`        | подписчики \`news\`               |
| Новая публикация         | \`news_published.tpl\`     | cat / user / tag / xfield / all |
| Одобрение модерации      | \`moderation_approve.tpl\` | автор                           |
| Снятие с публикации      | \`moderation_reject.tpl\`  | автор                           |
| Ответ на комментарий     | \`comment_reply.tpl\`      | автор родительского комментария |
| Комментарий к новости    | \`comment_on_news.tpl\`    | автор новости                   |
| \`@ник\`                   | \`mention.tpl\`            | упомянутый пользователь         |
| Рейтинг новости          | \`news_rating.tpl\`        | автор новости                   |
| Рейтинг комментария      | \`comment_rating.tpl\`     | автор комментария               |
| Удаление комментария     | \`comment_deleted.tpl\`    | автор комментария               |
| Подписка на пользователя | \`user_subscribed.tpl\`    | цель подписки (автор профиля)   |

### Ответ на комментарий (\`comment_reply\`) [#ответ-на-комментарий-comment_reply]

Пользователь **A** пишет комментарий. Пользователь **B** отвечает (родитель = комментарий A). **A** получает уведомление со ссылкой на ответ (object = комментарий B, target = новость). Себе (если A отвечает сам себе) — не уходит. Отдельный тип события не нужен: это тот же сценарий \`comment_reply\`.

### Рейтинг [#рейтинг]

* Новость: любой голос за чужую новость → автору; за свою — нет.
* Комментарий: любой голос за чужой комментарий → автору комментария.
* В шаблоне доступен \`{rating}\` (значение голоса со знаком, например \`+1\` / \`-1\`).

### Удаление комментария [#удаление-комментария]

Уведомление автору удалённого комментария, если удаляет другой пользователь. При древовидных комментариях — **одно** уведомление на явно удалённый корневой id (дети удаляются рекурсивно без отдельного notify). Массовое удаление через \`deletecommentsbynewsid\` / \`deletecommentsbyuserid\` — без шторма.

### Подписка на пользователя [#подписка-на-пользователя]

Только при **новой** подписке \`type=user\` (не cat/tag/news/xfield/all, не unsubscribe, не повторный toggle). Ссылка в ленте — профиль подписчика. Кнопка в теме: [Include в шаблонах](./template_includes).

## Глобальные выключатели [#глобальные-выключатели]

В настройках модуля можно отключить группы:

* публикация;
* обновление новости;
* ответы на комментарии;
* упоминания;
* модерация (одобрение / отклонение);
* рейтинг новости / комментария;
* удаление комментария;
* подписка на пользователя.

Выключенный флаг — сценарий не уходит, даже если \`.tpl\` на месте.

## Своё событие [#своё-событие]

Хак или другой модуль: готовый текст или свой \`.tpl\` — пошагово в [Кастомное событие](./custom_event).

## См. также [#см-также]

* [Кастомное событие](./custom_event)
* [Шаблоны и теги](./scenario_templates)
* [Настройки пользователя](./user_prefs)
* [Справочник Notify](../reference/Notify)
`,o={contents:[{heading:void 0,content:"Цепочка: событие → получатели (подписки + правила) → `scenarios/*.tpl` → при email/ЛС обёртка `wrappers/`."},{heading:void 0,content:`Плейсхолдеры: шаблоны и теги.`},{heading:`соответствие`,content:`Событие`},{heading:`соответствие`,content:`Файл`},{heading:`соответствие`,content:`Получатели`},{heading:`соответствие`,content:`Правка новости`},{heading:`соответствие`,content:"`news_update.tpl`"},{heading:`соответствие`,content:"подписчики `news`"},{heading:`соответствие`,content:`Новая публикация`},{heading:`соответствие`,content:"`news_published.tpl`"},{heading:`соответствие`,content:`cat / user / tag / xfield / all`},{heading:`соответствие`,content:`Одобрение модерации`},{heading:`соответствие`,content:"`moderation_approve.tpl`"},{heading:`соответствие`,content:`автор`},{heading:`соответствие`,content:`Снятие с публикации`},{heading:`соответствие`,content:"`moderation_reject.tpl`"},{heading:`соответствие`,content:`автор`},{heading:`соответствие`,content:`Ответ на комментарий`},{heading:`соответствие`,content:"`comment_reply.tpl`"},{heading:`соответствие`,content:`автор родительского комментария`},{heading:`соответствие`,content:`Комментарий к новости`},{heading:`соответствие`,content:"`comment_on_news.tpl`"},{heading:`соответствие`,content:`автор новости`},{heading:`соответствие`,content:"`@ник`"},{heading:`соответствие`,content:"`mention.tpl`"},{heading:`соответствие`,content:`упомянутый пользователь`},{heading:`соответствие`,content:`Рейтинг новости`},{heading:`соответствие`,content:"`news_rating.tpl`"},{heading:`соответствие`,content:`автор новости`},{heading:`соответствие`,content:`Рейтинг комментария`},{heading:`соответствие`,content:"`comment_rating.tpl`"},{heading:`соответствие`,content:`автор комментария`},{heading:`соответствие`,content:`Удаление комментария`},{heading:`соответствие`,content:"`comment_deleted.tpl`"},{heading:`соответствие`,content:`автор комментария`},{heading:`соответствие`,content:`Подписка на пользователя`},{heading:`соответствие`,content:"`user_subscribed.tpl`"},{heading:`соответствие`,content:`цель подписки (автор профиля)`},{heading:`ответ-на-комментарий-comment_reply`,content:"Пользователь **A** пишет комментарий. Пользователь **B** отвечает (родитель = комментарий A). **A** получает уведомление со ссылкой на ответ (object = комментарий B, target = новость). Себе (если A отвечает сам себе) — не уходит. Отдельный тип события не нужен: это тот же сценарий `comment_reply`."},{heading:`рейтинг`,content:`Новость: любой голос за чужую новость → автору; за свою — нет.`},{heading:`рейтинг`,content:`Комментарий: любой голос за чужой комментарий → автору комментария.`},{heading:`рейтинг`,content:"В шаблоне доступен `{rating}` (значение голоса со знаком, например `+1` / `-1`)."},{heading:`удаление-комментария`,content:"Уведомление автору удалённого комментария, если удаляет другой пользователь. При древовидных комментариях — **одно** уведомление на явно удалённый корневой id (дети удаляются рекурсивно без отдельного notify). Массовое удаление через `deletecommentsbynewsid` / `deletecommentsbyuserid` — без шторма."},{heading:`подписка-на-пользователя`,content:"Только при **новой** подписке `type=user` (не cat/tag/news/xfield/all, не unsubscribe, не повторный toggle). Ссылка в ленте — профиль подписчика. Кнопка в теме: Include в шаблонах."},{heading:`глобальные-выключатели`,content:`В настройках модуля можно отключить группы:`},{heading:`глобальные-выключатели`,content:`публикация;`},{heading:`глобальные-выключатели`,content:`обновление новости;`},{heading:`глобальные-выключатели`,content:`ответы на комментарии;`},{heading:`глобальные-выключатели`,content:`упоминания;`},{heading:`глобальные-выключатели`,content:`модерация (одобрение / отклонение);`},{heading:`глобальные-выключатели`,content:`рейтинг новости / комментария;`},{heading:`глобальные-выключатели`,content:`удаление комментария;`},{heading:`глобальные-выключатели`,content:`подписка на пользователя.`},{heading:`глобальные-выключатели`,content:"Выключенный флаг — сценарий не уходит, даже если `.tpl` на месте."},{heading:`своё-событие`,content:"Хак или другой модуль: готовый текст или свой `.tpl` — пошагово в Кастомное событие."},{heading:`см-также`,content:`Кастомное событие`},{heading:`см-также`,content:`Шаблоны и теги`},{heading:`см-также`,content:`Настройки пользователя`},{heading:`см-также`,content:`Справочник Notify`}],headings:[{id:`соответствие`,content:`Соответствие`},{id:`ответ-на-комментарий-comment_reply`,content:"Ответ на комментарий (`comment_reply`)"},{id:`рейтинг`,content:`Рейтинг`},{id:`удаление-комментария`,content:`Удаление комментария`},{id:`подписка-на-пользователя`,content:`Подписка на пользователя`},{id:`глобальные-выключатели`,content:`Глобальные выключатели`},{id:`своё-событие`,content:`Своё событие`},{id:`см-также`,content:`См. также`}]},s=[{depth:2,url:`#соответствие`,title:(0,n.jsx)(n.Fragment,{children:`Соответствие`})},{depth:3,url:`#ответ-на-комментарий-comment_reply`,title:(0,n.jsxs)(n.Fragment,{children:[`Ответ на комментарий (`,(0,n.jsx)(`code`,{children:`comment_reply`}),`)`]})},{depth:3,url:`#рейтинг`,title:(0,n.jsx)(n.Fragment,{children:`Рейтинг`})},{depth:3,url:`#удаление-комментария`,title:(0,n.jsx)(n.Fragment,{children:`Удаление комментария`})},{depth:3,url:`#подписка-на-пользователя`,title:(0,n.jsx)(n.Fragment,{children:`Подписка на пользователя`})},{depth:2,url:`#глобальные-выключатели`,title:(0,n.jsx)(n.Fragment,{children:`Глобальные выключатели`})},{depth:2,url:`#своё-событие`,title:(0,n.jsx)(n.Fragment,{children:`Своё событие`})},{depth:2,url:`#см-также`,title:(0,n.jsx)(n.Fragment,{children:`См. также`})}];function c(e){let t={a:`a`,code:`code`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,strong:`strong`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,ul:`ul`,...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:[`Цепочка: событие → получатели (подписки + правила) → `,(0,n.jsx)(t.code,{children:`scenarios/*.tpl`}),` → при email/ЛС обёртка `,(0,n.jsx)(t.code,{children:`wrappers/`}),`.`]}),`
`,(0,n.jsxs)(t.p,{children:[`Плейсхолдеры: `,(0,n.jsx)(t.a,{href:`./scenario_templates`,children:`шаблоны и теги`}),`.`]}),`
`,(0,n.jsx)(t.h2,{id:`соответствие`,children:`Соответствие`}),`
`,(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`Событие`}),(0,n.jsx)(t.th,{children:`Файл`}),(0,n.jsx)(t.th,{children:`Получатели`})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`Правка новости`}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:`news_update.tpl`})}),(0,n.jsxs)(t.td,{children:[`подписчики `,(0,n.jsx)(t.code,{children:`news`})]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`Новая публикация`}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:`news_published.tpl`})}),(0,n.jsx)(t.td,{children:`cat / user / tag / xfield / all`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`Одобрение модерации`}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:`moderation_approve.tpl`})}),(0,n.jsx)(t.td,{children:`автор`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`Снятие с публикации`}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:`moderation_reject.tpl`})}),(0,n.jsx)(t.td,{children:`автор`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`Ответ на комментарий`}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:`comment_reply.tpl`})}),(0,n.jsx)(t.td,{children:`автор родительского комментария`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`Комментарий к новости`}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:`comment_on_news.tpl`})}),(0,n.jsx)(t.td,{children:`автор новости`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:`@ник`})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:`mention.tpl`})}),(0,n.jsx)(t.td,{children:`упомянутый пользователь`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`Рейтинг новости`}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:`news_rating.tpl`})}),(0,n.jsx)(t.td,{children:`автор новости`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`Рейтинг комментария`}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:`comment_rating.tpl`})}),(0,n.jsx)(t.td,{children:`автор комментария`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`Удаление комментария`}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:`comment_deleted.tpl`})}),(0,n.jsx)(t.td,{children:`автор комментария`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`Подписка на пользователя`}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:`user_subscribed.tpl`})}),(0,n.jsx)(t.td,{children:`цель подписки (автор профиля)`})]})]})]}),`
`,(0,n.jsxs)(t.h3,{id:`ответ-на-комментарий-comment_reply`,children:[`Ответ на комментарий (`,(0,n.jsx)(t.code,{children:`comment_reply`}),`)`]}),`
`,(0,n.jsxs)(t.p,{children:[`Пользователь `,(0,n.jsx)(t.strong,{children:`A`}),` пишет комментарий. Пользователь `,(0,n.jsx)(t.strong,{children:`B`}),` отвечает (родитель = комментарий A). `,(0,n.jsx)(t.strong,{children:`A`}),` получает уведомление со ссылкой на ответ (object = комментарий B, target = новость). Себе (если A отвечает сам себе) — не уходит. Отдельный тип события не нужен: это тот же сценарий `,(0,n.jsx)(t.code,{children:`comment_reply`}),`.`]}),`
`,(0,n.jsx)(t.h3,{id:`рейтинг`,children:`Рейтинг`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsx)(t.li,{children:`Новость: любой голос за чужую новость → автору; за свою — нет.`}),`
`,(0,n.jsx)(t.li,{children:`Комментарий: любой голос за чужой комментарий → автору комментария.`}),`
`,(0,n.jsxs)(t.li,{children:[`В шаблоне доступен `,(0,n.jsx)(t.code,{children:`{rating}`}),` (значение голоса со знаком, например `,(0,n.jsx)(t.code,{children:`+1`}),` / `,(0,n.jsx)(t.code,{children:`-1`}),`).`]}),`
`]}),`
`,(0,n.jsx)(t.h3,{id:`удаление-комментария`,children:`Удаление комментария`}),`
`,(0,n.jsxs)(t.p,{children:[`Уведомление автору удалённого комментария, если удаляет другой пользователь. При древовидных комментариях — `,(0,n.jsx)(t.strong,{children:`одно`}),` уведомление на явно удалённый корневой id (дети удаляются рекурсивно без отдельного notify). Массовое удаление через `,(0,n.jsx)(t.code,{children:`deletecommentsbynewsid`}),` / `,(0,n.jsx)(t.code,{children:`deletecommentsbyuserid`}),` — без шторма.`]}),`
`,(0,n.jsx)(t.h3,{id:`подписка-на-пользователя`,children:`Подписка на пользователя`}),`
`,(0,n.jsxs)(t.p,{children:[`Только при `,(0,n.jsx)(t.strong,{children:`новой`}),` подписке `,(0,n.jsx)(t.code,{children:`type=user`}),` (не cat/tag/news/xfield/all, не unsubscribe, не повторный toggle). Ссылка в ленте — профиль подписчика. Кнопка в теме: `,(0,n.jsx)(t.a,{href:`./template_includes`,children:`Include в шаблонах`}),`.`]}),`
`,(0,n.jsx)(t.h2,{id:`глобальные-выключатели`,children:`Глобальные выключатели`}),`
`,(0,n.jsx)(t.p,{children:`В настройках модуля можно отключить группы:`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsx)(t.li,{children:`публикация;`}),`
`,(0,n.jsx)(t.li,{children:`обновление новости;`}),`
`,(0,n.jsx)(t.li,{children:`ответы на комментарии;`}),`
`,(0,n.jsx)(t.li,{children:`упоминания;`}),`
`,(0,n.jsx)(t.li,{children:`модерация (одобрение / отклонение);`}),`
`,(0,n.jsx)(t.li,{children:`рейтинг новости / комментария;`}),`
`,(0,n.jsx)(t.li,{children:`удаление комментария;`}),`
`,(0,n.jsx)(t.li,{children:`подписка на пользователя.`}),`
`]}),`
`,(0,n.jsxs)(t.p,{children:[`Выключенный флаг — сценарий не уходит, даже если `,(0,n.jsx)(t.code,{children:`.tpl`}),` на месте.`]}),`
`,(0,n.jsx)(t.h2,{id:`своё-событие`,children:`Своё событие`}),`
`,(0,n.jsxs)(t.p,{children:[`Хак или другой модуль: готовый текст или свой `,(0,n.jsx)(t.code,{children:`.tpl`}),` — пошагово в `,(0,n.jsx)(t.a,{href:`./custom_event`,children:`Кастомное событие`}),`.`]}),`
`,(0,n.jsx)(t.h2,{id:`см-также`,children:`См. также`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`./custom_event`,children:`Кастомное событие`})}),`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`./scenario_templates`,children:`Шаблоны и теги`})}),`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`./user_prefs`,children:`Настройки пользователя`})}),`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`../reference/Notify`,children:`Справочник Notify`})}),`
`]})]})}function l(e={}){let{wrapper:t}=e.components||{};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}export{a as _markdown,l as default,r as frontmatter,i as lastModified,o as structuredData,s as toc};