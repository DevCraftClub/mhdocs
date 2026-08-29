import{r as e}from"./rolldown-runtime-QTnfLwEv.js";import{t}from"./jsx-runtime-By8HlURe.js";var n=e(t()),r={title:`Шаблоны и теги`,description:`Файлы .tpl темы, сценарии, обёртки, кнопка подписки и лента`,version:`200.1.0`},i=new Date(1788011088e3),a=`

Тексты **не** редактируются в формах админки. Источник — файлы скина:

\`templates/ВАША_ТЕМА/devcraft/notifications/\`

Отсутствующий файл берётся из \`Default\`. В настройках модуля задаются только пути к каталогам.

Плейсхолдеры подставляет \`ParseTemplateTags\`, не локальный \`str_replace\`.

## Дерево [#дерево]

\`\`\`text
devcraft/notifications/
├── scenarios/       тело события
├── wrappers/        обёртка письма / ЛС
├── subscribe/       кнопки на сайте
├── item.tpl         строка ленты
├── item_actions.tpl кнопка «Открыть»
├── item_side_mark_read.tpl  «Прочесть» на стене (непрочитанные)
├── item_side_dismiss.tpl    «Закрыть» в колокольчике
├── wall.tpl         стена
├── badge.tpl        колокольчик
├── assets/          css / js
└── …
\`\`\`

## Сценарии (\`scenarios/\`) [#сценарии-scenarios]

| Файл                     | Когда                                                        |
| ------------------------ | ------------------------------------------------------------ |
| \`news_update.tpl\`        | подписчики \`news\`: новость изменена                          |
| \`news_published.tpl\`     | подписчики cat / user / tag / xfield / all: новая публикация |
| \`moderation_approve.tpl\` | автору: материал одобрен                                     |
| \`moderation_reject.tpl\`  | автору: снят с публикации                                    |
| \`comment_reply.tpl\`      | ответ на комментарий                                         |
| \`comment_on_news.tpl\`    | комментарий к вашей новости                                  |
| \`mention.tpl\`            | упоминание \`@ник\`                                            |

### Теги сценариев и обёрток [#теги-сценариев-и-обёрток]

Пишутся в \`scenarios/*.tpl\` и \`wrappers/*.tpl\`.

| Тег                   | Значение                                   |
| --------------------- | ------------------------------------------ |
| {'{title}'}           | заголовок новости                          |
| {'{full-link}'}       | URL полной новости                         |
| {'{user}'}            | автор новости (в mention — упомянутый ник) |
| {'{sender}'}          | инициатор события                          |
| {'{message}'}         | уже собранный текст сценария (в wrapper)   |
| {'{unsubscribe-url}'} | подписанная ссылка отписки для письма/ЛС   |

Если в событии есть строка новости, дополнительно доступны штатные теги DLE (\`shortstory\` / \`fullstory\`): {'{category}'}, {'{date}'}, {'{views}'}, \`[xfvalue_…]\` и т.д.

### Пример сценария [#пример-сценария]

\`scenarios/news_update.tpl\`:

\`\`\`text
Новость «{title}» была обновлена
{full-link}
\`\`\`

### Пример письма [#пример-письма]

\`wrappers/email_body.tpl\`:

\`\`\`html
{message}<br><br>
<a href="{full-link}">Читать</a><br><br>
<a href="{unsubscribe-url}">Отписаться</a>
\`\`\`

Сначала рендерится сценарий → попадает в {'{message}'} → обёртка \`email_body.tpl\` или \`pm_body.tpl\`.

Тема письма и тема ЛС — строки настроек \`email_subject\` / \`pm_subject\`; там те же плейсхолдеры.

<Callout type="warn">
  Пустой или отсутствующий сценарий/обёртка (ни в скине, ни в Default) — канал не отправляется.
</Callout>

## Кнопки (\`subscribe/\`) [#кнопки-subscribe]

| Файл         | Тип      |
| ------------ | -------- |
| \`news.tpl\`   | \`news\`   |
| \`cat.tpl\`    | \`cat\`    |
| \`user.tpl\`   | \`user\`   |
| \`tag.tpl\`    | \`tag\`    |
| \`xfield.tpl\` | \`xfield\` |
| \`all.tpl\`    | \`all\`    |

| Тег                     | Значение                   |
| ----------------------- | -------------------------- |
| {'{subscribe-label}'}   | подпись кнопки             |
| {'{subscribed}'}        | \`1\` / \`0\`                  |
| {'{subscription-id}'}   | id объекта                 |
| {'{subscription-type}'} | \`news\`, \`cat\`, …           |
| {'{news-id}'}           | id новости (для type=news) |
| {'{count}'}             | число подписчиков          |
| {'{user-hash}'}         | хеш сессии DLE             |

\`\`\`html
<button type="button"
	class="dc-notify-subscribe"
	data-type="news"
	data-id="{subscription-id}"
	data-subscribed="{subscribed}">
	{subscribe-label}
</button>
<span>{count}</span>
\`\`\`

Класс \`dc-notify-subscribe\` обязателен для JS.

## Лента на сайте [#лента-на-сайте]

### \`item.tpl\` [#itemtpl]

| Тег                | Значение                                                                                        |
| ------------------ | ----------------------------------------------------------------------------------------------- |
| {'{id}'}           | id уведомления                                                                                  |
| {'{message}'}      | текст                                                                                           |
| {'{date}'}         | дата                                                                                            |
| {'{level}'}        | \`info\`, \`success\`, …                                                                            |
| {'{unread}'}       | \`1\` / \`0\`                                                                                       |
| {'{unread-class}'} | \`is-unread\` / \`is-read\`                                                                         |
| {'{verb}'}         | код действия (\`updated\`, \`commented\`, …)                                                        |
| {'{actions}'}      | HTML кнопки «Открыть» (из \`item_actions.tpl\`)                                                   |
| {'{side-action}'}  | на стене — «Прочесть» (непрочитанные); в колокольчике — «Закрыть»; прочитанные на стене — пусто |

### \`item_actions.tpl\` [#item_actionstpl]

| Тег              | Значение         |
| ---------------- | ---------------- |
| {'{object-url}'} | ссылка на объект |
| {'{open-label}'} | «Открыть»        |

### \`item_side_mark_read.tpl\` [#item_side_mark_readtpl]

| Тег                   | Значение   |
| --------------------- | ---------- |
| {'{mark-read-label}'} | «Прочесть» |

### \`item_side_dismiss.tpl\` [#item_side_dismisstpl]

| Тег                 | Значение  |
| ------------------- | --------- |
| {'{dismiss-label}'} | «Закрыть» |

### \`wall.tpl\` [#walltpl]

| Тег                  | Значение        |
| -------------------- | --------------- |
| {'{items}'}          | HTML списка     |
| {'{mark-all-label}'} | «Прочитать все» |
| {'{empty-label}'}    | пустой список   |

### \`badge.tpl\` [#badgetpl]

| Тег                  | Значение        |
| -------------------- | --------------- |
| {'{unread-count}'}   | непрочитанные   |
| {'{items}'}          | короткий список |
| {'{mark-all-label}'} | «Прочитать все» |

## См. также [#см-также]

* [Страница уведомлений](./notifications_page)
* [Сценарии событий](./scenarios)
* [Вставка в шаблоны](./subscribe_wall)
* [Типы подписок](./subscription_types)
`,o={contents:[{heading:void 0,content:`Тексты **не** редактируются в формах админки. Источник — файлы скина:`},{heading:void 0,content:"`templates/ВАША_ТЕМА/devcraft/notifications/`"},{heading:void 0,content:"Отсутствующий файл берётся из `Default`. В настройках модуля задаются только пути к каталогам."},{heading:void 0,content:"Плейсхолдеры подставляет `ParseTemplateTags`, не локальный `str_replace`."},{heading:`сценарии-scenarios`,content:`Файл`},{heading:`сценарии-scenarios`,content:`Когда`},{heading:`сценарии-scenarios`,content:"`news_update.tpl`"},{heading:`сценарии-scenarios`,content:"подписчики `news`: новость изменена"},{heading:`сценарии-scenarios`,content:"`news_published.tpl`"},{heading:`сценарии-scenarios`,content:`подписчики cat / user / tag / xfield / all: новая публикация`},{heading:`сценарии-scenarios`,content:"`moderation_approve.tpl`"},{heading:`сценарии-scenarios`,content:`автору: материал одобрен`},{heading:`сценарии-scenarios`,content:"`moderation_reject.tpl`"},{heading:`сценарии-scenarios`,content:`автору: снят с публикации`},{heading:`сценарии-scenarios`,content:"`comment_reply.tpl`"},{heading:`сценарии-scenarios`,content:`ответ на комментарий`},{heading:`сценарии-scenarios`,content:"`comment_on_news.tpl`"},{heading:`сценарии-scenarios`,content:`комментарий к вашей новости`},{heading:`сценарии-scenarios`,content:"`mention.tpl`"},{heading:`сценарии-scenarios`,content:"упоминание `@ник`"},{heading:`теги-сценариев-и-обёрток`,content:"Пишутся в `scenarios/*.tpl` и `wrappers/*.tpl`."},{heading:`теги-сценариев-и-обёрток`,content:`Тег`},{heading:`теги-сценариев-и-обёрток`,content:`Значение`},{heading:`теги-сценариев-и-обёрток`,content:`{'{title}'}`},{heading:`теги-сценариев-и-обёрток`,content:`заголовок новости`},{heading:`теги-сценариев-и-обёрток`,content:`{'{full-link}'}`},{heading:`теги-сценариев-и-обёрток`,content:`URL полной новости`},{heading:`теги-сценариев-и-обёрток`,content:`{'{user}'}`},{heading:`теги-сценариев-и-обёрток`,content:`автор новости (в mention — упомянутый ник)`},{heading:`теги-сценариев-и-обёрток`,content:`{'{sender}'}`},{heading:`теги-сценариев-и-обёрток`,content:`инициатор события`},{heading:`теги-сценариев-и-обёрток`,content:`{'{message}'}`},{heading:`теги-сценариев-и-обёрток`,content:`уже собранный текст сценария (в wrapper)`},{heading:`теги-сценариев-и-обёрток`,content:`{'{unsubscribe-url}'}`},{heading:`теги-сценариев-и-обёрток`,content:`подписанная ссылка отписки для письма/ЛС`},{heading:`теги-сценариев-и-обёрток`,content:"Если в событии есть строка новости, дополнительно доступны штатные теги DLE (`shortstory` / `fullstory`): {'{category}'}, {'{date}'}, {'{views}'}, `[xfvalue_…]` и т.д."},{heading:`пример-сценария`,content:"`scenarios/news_update.tpl`:"},{heading:`пример-письма`,content:"`wrappers/email_body.tpl`:"},{heading:`пример-письма`,content:"Сначала рендерится сценарий → попадает в {'{message}'} → обёртка `email_body.tpl` или `pm_body.tpl`."},{heading:`пример-письма`,content:"Тема письма и тема ЛС — строки настроек `email_subject` / `pm_subject`; там те же плейсхолдеры."},{heading:`пример-письма`,content:`Пустой или отсутствующий сценарий/обёртка (ни в скине, ни в Default) — канал не отправляется.`},{heading:`кнопки-subscribe`,content:`Файл`},{heading:`кнопки-subscribe`,content:`Тип`},{heading:`кнопки-subscribe`,content:"`news.tpl`"},{heading:`кнопки-subscribe`,content:"`news`"},{heading:`кнопки-subscribe`,content:"`cat.tpl`"},{heading:`кнопки-subscribe`,content:"`cat`"},{heading:`кнопки-subscribe`,content:"`user.tpl`"},{heading:`кнопки-subscribe`,content:"`user`"},{heading:`кнопки-subscribe`,content:"`tag.tpl`"},{heading:`кнопки-subscribe`,content:"`tag`"},{heading:`кнопки-subscribe`,content:"`xfield.tpl`"},{heading:`кнопки-subscribe`,content:"`xfield`"},{heading:`кнопки-subscribe`,content:"`all.tpl`"},{heading:`кнопки-subscribe`,content:"`all`"},{heading:`кнопки-subscribe`,content:`Тег`},{heading:`кнопки-subscribe`,content:`Значение`},{heading:`кнопки-subscribe`,content:`{'{subscribe-label}'}`},{heading:`кнопки-subscribe`,content:`подпись кнопки`},{heading:`кнопки-subscribe`,content:`{'{subscribed}'}`},{heading:`кнопки-subscribe`,content:"`1` / `0`"},{heading:`кнопки-subscribe`,content:`{'{subscription-id}'}`},{heading:`кнопки-subscribe`,content:`id объекта`},{heading:`кнопки-subscribe`,content:`{'{subscription-type}'}`},{heading:`кнопки-subscribe`,content:"`news`, `cat`, …"},{heading:`кнопки-subscribe`,content:`{'{news-id}'}`},{heading:`кнопки-subscribe`,content:`id новости (для type=news)`},{heading:`кнопки-subscribe`,content:`{'{count}'}`},{heading:`кнопки-subscribe`,content:`число подписчиков`},{heading:`кнопки-subscribe`,content:`{'{user-hash}'}`},{heading:`кнопки-subscribe`,content:`хеш сессии DLE`},{heading:`кнопки-subscribe`,content:"Класс `dc-notify-subscribe` обязателен для JS."},{heading:`itemtpl`,content:`Тег`},{heading:`itemtpl`,content:`Значение`},{heading:`itemtpl`,content:`{'{id}'}`},{heading:`itemtpl`,content:`id уведомления`},{heading:`itemtpl`,content:`{'{message}'}`},{heading:`itemtpl`,content:`текст`},{heading:`itemtpl`,content:`{'{date}'}`},{heading:`itemtpl`,content:`дата`},{heading:`itemtpl`,content:`{'{level}'}`},{heading:`itemtpl`,content:"`info`, `success`, …"},{heading:`itemtpl`,content:`{'{unread}'}`},{heading:`itemtpl`,content:"`1` / `0`"},{heading:`itemtpl`,content:`{'{unread-class}'}`},{heading:`itemtpl`,content:"`is-unread` / `is-read`"},{heading:`itemtpl`,content:`{'{verb}'}`},{heading:`itemtpl`,content:"код действия (`updated`, `commented`, …)"},{heading:`itemtpl`,content:`{'{actions}'}`},{heading:`itemtpl`,content:"HTML кнопки «Открыть» (из `item_actions.tpl`)"},{heading:`itemtpl`,content:`{'{side-action}'}`},{heading:`itemtpl`,content:`на стене — «Прочесть» (непрочитанные); в колокольчике — «Закрыть»; прочитанные на стене — пусто`},{heading:`item_actionstpl`,content:`Тег`},{heading:`item_actionstpl`,content:`Значение`},{heading:`item_actionstpl`,content:`{'{object-url}'}`},{heading:`item_actionstpl`,content:`ссылка на объект`},{heading:`item_actionstpl`,content:`{'{open-label}'}`},{heading:`item_actionstpl`,content:`«Открыть»`},{heading:`item_side_mark_readtpl`,content:`Тег`},{heading:`item_side_mark_readtpl`,content:`Значение`},{heading:`item_side_mark_readtpl`,content:`{'{mark-read-label}'}`},{heading:`item_side_mark_readtpl`,content:`«Прочесть»`},{heading:`item_side_dismisstpl`,content:`Тег`},{heading:`item_side_dismisstpl`,content:`Значение`},{heading:`item_side_dismisstpl`,content:`{'{dismiss-label}'}`},{heading:`item_side_dismisstpl`,content:`«Закрыть»`},{heading:`walltpl`,content:`Тег`},{heading:`walltpl`,content:`Значение`},{heading:`walltpl`,content:`{'{items}'}`},{heading:`walltpl`,content:`HTML списка`},{heading:`walltpl`,content:`{'{mark-all-label}'}`},{heading:`walltpl`,content:`«Прочитать все»`},{heading:`walltpl`,content:`{'{empty-label}'}`},{heading:`walltpl`,content:`пустой список`},{heading:`badgetpl`,content:`Тег`},{heading:`badgetpl`,content:`Значение`},{heading:`badgetpl`,content:`{'{unread-count}'}`},{heading:`badgetpl`,content:`непрочитанные`},{heading:`badgetpl`,content:`{'{items}'}`},{heading:`badgetpl`,content:`короткий список`},{heading:`badgetpl`,content:`{'{mark-all-label}'}`},{heading:`badgetpl`,content:`«Прочитать все»`},{heading:`см-также`,content:`Страница уведомлений`},{heading:`см-также`,content:`Сценарии событий`},{heading:`см-также`,content:`Вставка в шаблоны`},{heading:`см-также`,content:`Типы подписок`}],headings:[{id:`дерево`,content:`Дерево`},{id:`сценарии-scenarios`,content:"Сценарии (`scenarios/`)"},{id:`теги-сценариев-и-обёрток`,content:`Теги сценариев и обёрток`},{id:`пример-сценария`,content:`Пример сценария`},{id:`пример-письма`,content:`Пример письма`},{id:`кнопки-subscribe`,content:"Кнопки (`subscribe/`)"},{id:`лента-на-сайте`,content:`Лента на сайте`},{id:`itemtpl`,content:"`item.tpl`"},{id:`item_actionstpl`,content:"`item_actions.tpl`"},{id:`item_side_mark_readtpl`,content:"`item_side_mark_read.tpl`"},{id:`item_side_dismisstpl`,content:"`item_side_dismiss.tpl`"},{id:`walltpl`,content:"`wall.tpl`"},{id:`badgetpl`,content:"`badge.tpl`"},{id:`см-также`,content:`См. также`}]},s=[{depth:2,url:`#дерево`,title:(0,n.jsx)(n.Fragment,{children:`Дерево`})},{depth:2,url:`#сценарии-scenarios`,title:(0,n.jsxs)(n.Fragment,{children:[`Сценарии (`,(0,n.jsx)(`code`,{children:`scenarios/`}),`)`]})},{depth:3,url:`#теги-сценариев-и-обёрток`,title:(0,n.jsx)(n.Fragment,{children:`Теги сценариев и обёрток`})},{depth:3,url:`#пример-сценария`,title:(0,n.jsx)(n.Fragment,{children:`Пример сценария`})},{depth:3,url:`#пример-письма`,title:(0,n.jsx)(n.Fragment,{children:`Пример письма`})},{depth:2,url:`#кнопки-subscribe`,title:(0,n.jsxs)(n.Fragment,{children:[`Кнопки (`,(0,n.jsx)(`code`,{children:`subscribe/`}),`)`]})},{depth:2,url:`#лента-на-сайте`,title:(0,n.jsx)(n.Fragment,{children:`Лента на сайте`})},{depth:3,url:`#itemtpl`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`item.tpl`})})},{depth:3,url:`#item_actionstpl`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`item_actions.tpl`})})},{depth:3,url:`#item_side_mark_readtpl`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`item_side_mark_read.tpl`})})},{depth:3,url:`#item_side_dismisstpl`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`item_side_dismiss.tpl`})})},{depth:3,url:`#walltpl`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`wall.tpl`})})},{depth:3,url:`#badgetpl`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`badge.tpl`})})},{depth:2,url:`#см-также`,title:(0,n.jsx)(n.Fragment,{children:`См. также`})}];function c(e){let t={a:`a`,code:`code`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,span:`span`,strong:`strong`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,ul:`ul`,...e.components},{Callout:r}=t;return r||u(`Callout`,!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:[`Тексты `,(0,n.jsx)(t.strong,{children:`не`}),` редактируются в формах админки. Источник — файлы скина:`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.code,{children:`templates/ВАША_ТЕМА/devcraft/notifications/`})}),`
`,(0,n.jsxs)(t.p,{children:[`Отсутствующий файл берётся из `,(0,n.jsx)(t.code,{children:`Default`}),`. В настройках модуля задаются только пути к каталогам.`]}),`
`,(0,n.jsxs)(t.p,{children:[`Плейсхолдеры подставляет `,(0,n.jsx)(t.code,{children:`ParseTemplateTags`}),`, не локальный `,(0,n.jsx)(t.code,{children:`str_replace`}),`.`]}),`
`,(0,n.jsx)(t.h2,{id:`дерево`,children:`Дерево`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsxs)(t.code,{children:[(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`devcraft/notifications/`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`├── scenarios/       тело события`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`├── wrappers/        обёртка письма / ЛС`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`├── subscribe/       кнопки на сайте`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`├── item.tpl         строка ленты`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`├── item_actions.tpl кнопка «Открыть»`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`├── item_side_mark_read.tpl  «Прочесть» на стене (непрочитанные)`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`├── item_side_dismiss.tpl    «Закрыть» в колокольчике`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`├── wall.tpl         стена`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`├── badge.tpl        колокольчик`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`├── assets/          css / js`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`└── …`})})]})})}),`
`,(0,n.jsxs)(t.h2,{id:`сценарии-scenarios`,children:[`Сценарии (`,(0,n.jsx)(t.code,{children:`scenarios/`}),`)`]}),`
`,(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`Файл`}),(0,n.jsx)(t.th,{children:`Когда`})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:`news_update.tpl`})}),(0,n.jsxs)(t.td,{children:[`подписчики `,(0,n.jsx)(t.code,{children:`news`}),`: новость изменена`]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:`news_published.tpl`})}),(0,n.jsx)(t.td,{children:`подписчики cat / user / tag / xfield / all: новая публикация`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:`moderation_approve.tpl`})}),(0,n.jsx)(t.td,{children:`автору: материал одобрен`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:`moderation_reject.tpl`})}),(0,n.jsx)(t.td,{children:`автору: снят с публикации`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:`comment_reply.tpl`})}),(0,n.jsx)(t.td,{children:`ответ на комментарий`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:`comment_on_news.tpl`})}),(0,n.jsx)(t.td,{children:`комментарий к вашей новости`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:`mention.tpl`})}),(0,n.jsxs)(t.td,{children:[`упоминание `,(0,n.jsx)(t.code,{children:`@ник`})]})]})]})]}),`
`,(0,n.jsx)(t.h3,{id:`теги-сценариев-и-обёрток`,children:`Теги сценариев и обёрток`}),`
`,(0,n.jsxs)(t.p,{children:[`Пишутся в `,(0,n.jsx)(t.code,{children:`scenarios/*.tpl`}),` и `,(0,n.jsx)(t.code,{children:`wrappers/*.tpl`}),`.`]}),`
`,(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`Тег`}),(0,n.jsx)(t.th,{children:`Значение`})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`{title}`}),(0,n.jsx)(t.td,{children:`заголовок новости`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`{full-link}`}),(0,n.jsx)(t.td,{children:`URL полной новости`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`{user}`}),(0,n.jsx)(t.td,{children:`автор новости (в mention — упомянутый ник)`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`{sender}`}),(0,n.jsx)(t.td,{children:`инициатор события`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`{message}`}),(0,n.jsx)(t.td,{children:`уже собранный текст сценария (в wrapper)`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`{unsubscribe-url}`}),(0,n.jsx)(t.td,{children:`подписанная ссылка отписки для письма/ЛС`})]})]})]}),`
`,(0,n.jsxs)(t.p,{children:[`Если в событии есть строка новости, дополнительно доступны штатные теги DLE (`,(0,n.jsx)(t.code,{children:`shortstory`}),` / `,(0,n.jsx)(t.code,{children:`fullstory`}),`): `,`{category}`,`, `,`{date}`,`, `,`{views}`,`, `,(0,n.jsx)(t.code,{children:`[xfvalue_…]`}),` и т.д.`]}),`
`,(0,n.jsx)(t.h3,{id:`пример-сценария`,children:`Пример сценария`}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:`scenarios/news_update.tpl`}),`:`]}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsxs)(t.code,{children:[(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`Новость «{title}» была обновлена`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`{full-link}`})})]})})}),`
`,(0,n.jsx)(t.h3,{id:`пример-письма`,children:`Пример письма`}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:`wrappers/email_body.tpl`}),`:`]}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsxs)(t.code,{children:[(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`{message}<`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#22863A`,"--shiki-dark":`#85E89D`},children:`br`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`><`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#22863A`,"--shiki-dark":`#85E89D`},children:`br`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`>`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`<`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#22863A`,"--shiki-dark":`#85E89D`},children:`a`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:` href`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`=`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`"{full-link}"`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`>Читать</`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#22863A`,"--shiki-dark":`#85E89D`},children:`a`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`><`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#22863A`,"--shiki-dark":`#85E89D`},children:`br`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`><`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#22863A`,"--shiki-dark":`#85E89D`},children:`br`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`>`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`<`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#22863A`,"--shiki-dark":`#85E89D`},children:`a`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:` href`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`=`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`"{unsubscribe-url}"`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`>Отписаться</`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#22863A`,"--shiki-dark":`#85E89D`},children:`a`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`>`})]})]})})}),`
`,(0,n.jsxs)(t.p,{children:[`Сначала рендерится сценарий → попадает в `,`{message}`,` → обёртка `,(0,n.jsx)(t.code,{children:`email_body.tpl`}),` или `,(0,n.jsx)(t.code,{children:`pm_body.tpl`}),`.`]}),`
`,(0,n.jsxs)(t.p,{children:[`Тема письма и тема ЛС — строки настроек `,(0,n.jsx)(t.code,{children:`email_subject`}),` / `,(0,n.jsx)(t.code,{children:`pm_subject`}),`; там те же плейсхолдеры.`]}),`
`,(0,n.jsx)(r,{type:`warn`,children:(0,n.jsx)(t.p,{children:`Пустой или отсутствующий сценарий/обёртка (ни в скине, ни в Default) — канал не отправляется.`})}),`
`,(0,n.jsxs)(t.h2,{id:`кнопки-subscribe`,children:[`Кнопки (`,(0,n.jsx)(t.code,{children:`subscribe/`}),`)`]}),`
`,(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`Файл`}),(0,n.jsx)(t.th,{children:`Тип`})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:`news.tpl`})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:`news`})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:`cat.tpl`})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:`cat`})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:`user.tpl`})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:`user`})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:`tag.tpl`})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:`tag`})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:`xfield.tpl`})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:`xfield`})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:`all.tpl`})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:`all`})})]})]})]}),`
`,(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`Тег`}),(0,n.jsx)(t.th,{children:`Значение`})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`{subscribe-label}`}),(0,n.jsx)(t.td,{children:`подпись кнопки`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`{subscribed}`}),(0,n.jsxs)(t.td,{children:[(0,n.jsx)(t.code,{children:`1`}),` / `,(0,n.jsx)(t.code,{children:`0`})]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`{subscription-id}`}),(0,n.jsx)(t.td,{children:`id объекта`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`{subscription-type}`}),(0,n.jsxs)(t.td,{children:[(0,n.jsx)(t.code,{children:`news`}),`, `,(0,n.jsx)(t.code,{children:`cat`}),`, …`]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`{news-id}`}),(0,n.jsx)(t.td,{children:`id новости (для type=news)`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`{count}`}),(0,n.jsx)(t.td,{children:`число подписчиков`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`{user-hash}`}),(0,n.jsx)(t.td,{children:`хеш сессии DLE`})]})]})]}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsxs)(t.code,{children:[(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`<`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#22863A`,"--shiki-dark":`#85E89D`},children:`button`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:` type`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`=`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`"button"`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`	class`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`=`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`"dc-notify-subscribe"`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`	data-type`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`=`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`"news"`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`	data-id`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`=`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`"{subscription-id}"`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`	data-subscribed`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`=`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`"{subscribed}"`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`>`})]}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`	{subscribe-label}`})}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`</`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#22863A`,"--shiki-dark":`#85E89D`},children:`button`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`>`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`<`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#22863A`,"--shiki-dark":`#85E89D`},children:`span`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`>{count}</`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#22863A`,"--shiki-dark":`#85E89D`},children:`span`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`>`})]})]})})}),`
`,(0,n.jsxs)(t.p,{children:[`Класс `,(0,n.jsx)(t.code,{children:`dc-notify-subscribe`}),` обязателен для JS.`]}),`
`,(0,n.jsx)(t.h2,{id:`лента-на-сайте`,children:`Лента на сайте`}),`
`,(0,n.jsx)(t.h3,{id:`itemtpl`,children:(0,n.jsx)(t.code,{children:`item.tpl`})}),`
`,(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`Тег`}),(0,n.jsx)(t.th,{children:`Значение`})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`{id}`}),(0,n.jsx)(t.td,{children:`id уведомления`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`{message}`}),(0,n.jsx)(t.td,{children:`текст`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`{date}`}),(0,n.jsx)(t.td,{children:`дата`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`{level}`}),(0,n.jsxs)(t.td,{children:[(0,n.jsx)(t.code,{children:`info`}),`, `,(0,n.jsx)(t.code,{children:`success`}),`, …`]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`{unread}`}),(0,n.jsxs)(t.td,{children:[(0,n.jsx)(t.code,{children:`1`}),` / `,(0,n.jsx)(t.code,{children:`0`})]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`{unread-class}`}),(0,n.jsxs)(t.td,{children:[(0,n.jsx)(t.code,{children:`is-unread`}),` / `,(0,n.jsx)(t.code,{children:`is-read`})]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`{verb}`}),(0,n.jsxs)(t.td,{children:[`код действия (`,(0,n.jsx)(t.code,{children:`updated`}),`, `,(0,n.jsx)(t.code,{children:`commented`}),`, …)`]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`{actions}`}),(0,n.jsxs)(t.td,{children:[`HTML кнопки «Открыть» (из `,(0,n.jsx)(t.code,{children:`item_actions.tpl`}),`)`]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`{side-action}`}),(0,n.jsx)(t.td,{children:`на стене — «Прочесть» (непрочитанные); в колокольчике — «Закрыть»; прочитанные на стене — пусто`})]})]})]}),`
`,(0,n.jsx)(t.h3,{id:`item_actionstpl`,children:(0,n.jsx)(t.code,{children:`item_actions.tpl`})}),`
`,(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`Тег`}),(0,n.jsx)(t.th,{children:`Значение`})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`{object-url}`}),(0,n.jsx)(t.td,{children:`ссылка на объект`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`{open-label}`}),(0,n.jsx)(t.td,{children:`«Открыть»`})]})]})]}),`
`,(0,n.jsx)(t.h3,{id:`item_side_mark_readtpl`,children:(0,n.jsx)(t.code,{children:`item_side_mark_read.tpl`})}),`
`,(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`Тег`}),(0,n.jsx)(t.th,{children:`Значение`})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`{mark-read-label}`}),(0,n.jsx)(t.td,{children:`«Прочесть»`})]})})]}),`
`,(0,n.jsx)(t.h3,{id:`item_side_dismisstpl`,children:(0,n.jsx)(t.code,{children:`item_side_dismiss.tpl`})}),`
`,(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`Тег`}),(0,n.jsx)(t.th,{children:`Значение`})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`{dismiss-label}`}),(0,n.jsx)(t.td,{children:`«Закрыть»`})]})})]}),`
`,(0,n.jsx)(t.h3,{id:`walltpl`,children:(0,n.jsx)(t.code,{children:`wall.tpl`})}),`
`,(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`Тег`}),(0,n.jsx)(t.th,{children:`Значение`})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`{items}`}),(0,n.jsx)(t.td,{children:`HTML списка`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`{mark-all-label}`}),(0,n.jsx)(t.td,{children:`«Прочитать все»`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`{empty-label}`}),(0,n.jsx)(t.td,{children:`пустой список`})]})]})]}),`
`,(0,n.jsx)(t.h3,{id:`badgetpl`,children:(0,n.jsx)(t.code,{children:`badge.tpl`})}),`
`,(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`Тег`}),(0,n.jsx)(t.th,{children:`Значение`})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`{unread-count}`}),(0,n.jsx)(t.td,{children:`непрочитанные`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`{items}`}),(0,n.jsx)(t.td,{children:`короткий список`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`{mark-all-label}`}),(0,n.jsx)(t.td,{children:`«Прочитать все»`})]})]})]}),`
`,(0,n.jsx)(t.h2,{id:`см-также`,children:`См. также`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`./notifications_page`,children:`Страница уведомлений`})}),`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`./scenarios`,children:`Сценарии событий`})}),`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`./subscribe_wall`,children:`Вставка в шаблоны`})}),`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`./subscription_types`,children:`Типы подписок`})}),`
`]})]})}function l(e={}){let{wrapper:t}=e.components||{};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}function u(e,t){throw Error(`Expected `+(t?`component`:`object`)+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}export{a as _markdown,l as default,r as frontmatter,i as lastModified,o as structuredData,s as toc};