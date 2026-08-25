import{r as e}from"./rolldown-runtime-QTnfLwEv.js";import{t}from"./jsx-runtime-By8HlURe.js";var n=e(t()),r={title:`Настройки пользователя`,description:`Цепочка прав, xfields профиля и галочки DLE для каналов`,version:`200.1.0`},i=new Date(1787654208e3),a=`

Даже при включённом модуле канал может отфильтроваться prefs пользователя. Проверки идут сверху вниз; первый отказ останавливает этот канал.

1. **Права группы** — функция разрешена.
2. **Мастер-выключатель** (опциональный xfield) — не отключены уведомления целиком.
3. **Сценарный xfield** — не отключён класс событий (новости, упоминания, …).
4. **Email и профиль DLE:**
   * «Подписка на ответы в комментариях» → сценарий ответа;
   * «Подписка на комментарии к новостям» → комментарий к своей статье.
5. **Глобальные каналы модуля** — email / ЛС включены в настройках.

Inbox на сайте и ЛС **не** зависят от \`news_subscribe\` / \`comments_reply_subscribe\`: эти флаги DLE относятся только к почте.

## Xfields в настройках модуля [#xfields-в-настройках-модуля]

| Настройка                     | Роль              |
| ----------------------------- | ----------------- |
| Xfield: включить уведомления  | общий выключатель |
| Xfield: email при уведомлении | отдельно почта    |
| Xfield: обновление/публикация | сценарии новостей |
| Xfield: модерация             | approve / reject  |
| Xfield: упоминания            | \`@ник\`            |

Поле не выбрано в настройках — не участвует. Пустое значение у пользователя — «разрешено». \`0\` / \`off\` / \`no\` — отказ.

## См. также [#см-также]

* [Права групп](./permissions)
* [Сценарии событий](./scenarios)
* [Шаблоны и теги](./scenario_templates)
`,o={contents:[{heading:void 0,content:`Даже при включённом модуле канал может отфильтроваться prefs пользователя. Проверки идут сверху вниз; первый отказ останавливает этот канал.`},{heading:void 0,content:`**Права группы** — функция разрешена.`},{heading:void 0,content:`**Мастер-выключатель** (опциональный xfield) — не отключены уведомления целиком.`},{heading:void 0,content:`**Сценарный xfield** — не отключён класс событий (новости, упоминания, …).`},{heading:void 0,content:`**Email и профиль DLE:**`},{heading:void 0,content:`«Подписка на ответы в комментариях» → сценарий ответа;`},{heading:void 0,content:`«Подписка на комментарии к новостям» → комментарий к своей статье.`},{heading:void 0,content:`**Глобальные каналы модуля** — email / ЛС включены в настройках.`},{heading:void 0,content:"Inbox на сайте и ЛС **не** зависят от `news_subscribe` / `comments_reply_subscribe`: эти флаги DLE относятся только к почте."},{heading:`xfields-в-настройках-модуля`,content:`Настройка`},{heading:`xfields-в-настройках-модуля`,content:`Роль`},{heading:`xfields-в-настройках-модуля`,content:`Xfield: включить уведомления`},{heading:`xfields-в-настройках-модуля`,content:`общий выключатель`},{heading:`xfields-в-настройках-модуля`,content:`Xfield: email при уведомлении`},{heading:`xfields-в-настройках-модуля`,content:`отдельно почта`},{heading:`xfields-в-настройках-модуля`,content:`Xfield: обновление/публикация`},{heading:`xfields-в-настройках-модуля`,content:`сценарии новостей`},{heading:`xfields-в-настройках-модуля`,content:`Xfield: модерация`},{heading:`xfields-в-настройках-модуля`,content:`approve / reject`},{heading:`xfields-в-настройках-модуля`,content:`Xfield: упоминания`},{heading:`xfields-в-настройках-модуля`,content:"`@ник`"},{heading:`xfields-в-настройках-модуля`,content:"Поле не выбрано в настройках — не участвует. Пустое значение у пользователя — «разрешено». `0` / `off` / `no` — отказ."},{heading:`см-также`,content:`Права групп`},{heading:`см-также`,content:`Сценарии событий`},{heading:`см-также`,content:`Шаблоны и теги`}],headings:[{id:`xfields-в-настройках-модуля`,content:`Xfields в настройках модуля`},{id:`см-также`,content:`См. также`}]},s=[{depth:2,url:`#xfields-в-настройках-модуля`,title:(0,n.jsx)(n.Fragment,{children:`Xfields в настройках модуля`})},{depth:2,url:`#см-также`,title:(0,n.jsx)(n.Fragment,{children:`См. также`})}];function c(e){let t={a:`a`,code:`code`,h2:`h2`,li:`li`,ol:`ol`,p:`p`,strong:`strong`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,ul:`ul`,...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.p,{children:`Даже при включённом модуле канал может отфильтроваться prefs пользователя. Проверки идут сверху вниз; первый отказ останавливает этот канал.`}),`
`,(0,n.jsxs)(t.ol,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:`Права группы`}),` — функция разрешена.`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:`Мастер-выключатель`}),` (опциональный xfield) — не отключены уведомления целиком.`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:`Сценарный xfield`}),` — не отключён класс событий (новости, упоминания, …).`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:`Email и профиль DLE:`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsx)(t.li,{children:`«Подписка на ответы в комментариях» → сценарий ответа;`}),`
`,(0,n.jsx)(t.li,{children:`«Подписка на комментарии к новостям» → комментарий к своей статье.`}),`
`]}),`
`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:`Глобальные каналы модуля`}),` — email / ЛС включены в настройках.`]}),`
`]}),`
`,(0,n.jsxs)(t.p,{children:[`Inbox на сайте и ЛС `,(0,n.jsx)(t.strong,{children:`не`}),` зависят от `,(0,n.jsx)(t.code,{children:`news_subscribe`}),` / `,(0,n.jsx)(t.code,{children:`comments_reply_subscribe`}),`: эти флаги DLE относятся только к почте.`]}),`
`,(0,n.jsx)(t.h2,{id:`xfields-в-настройках-модуля`,children:`Xfields в настройках модуля`}),`
`,(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`Настройка`}),(0,n.jsx)(t.th,{children:`Роль`})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`Xfield: включить уведомления`}),(0,n.jsx)(t.td,{children:`общий выключатель`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`Xfield: email при уведомлении`}),(0,n.jsx)(t.td,{children:`отдельно почта`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`Xfield: обновление/публикация`}),(0,n.jsx)(t.td,{children:`сценарии новостей`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`Xfield: модерация`}),(0,n.jsx)(t.td,{children:`approve / reject`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`Xfield: упоминания`}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:`@ник`})})]})]})]}),`
`,(0,n.jsxs)(t.p,{children:[`Поле не выбрано в настройках — не участвует. Пустое значение у пользователя — «разрешено». `,(0,n.jsx)(t.code,{children:`0`}),` / `,(0,n.jsx)(t.code,{children:`off`}),` / `,(0,n.jsx)(t.code,{children:`no`}),` — отказ.`]}),`
`,(0,n.jsx)(t.h2,{id:`см-также`,children:`См. также`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`./permissions`,children:`Права групп`})}),`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`./scenarios`,children:`Сценарии событий`})}),`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`./scenario_templates`,children:`Шаблоны и теги`})}),`
`]})]})}function l(e={}){let{wrapper:t}=e.components||{};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}export{a as _markdown,l as default,r as frontmatter,i as lastModified,o as structuredData,s as toc};