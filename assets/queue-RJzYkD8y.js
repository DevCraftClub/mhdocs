import{r as e}from"./rolldown-runtime-QTnfLwEv.js";import{t}from"./jsx-runtime-By8HlURe.js";var n=e(t()),r={title:`Очередь сводки`,description:`Страница очереди action=digest_queue, ручная отправка и роль notifyDigestFlush.`,version:`200.1.0`},i=new Date(1790413881e3),a=`

Адрес: \`?mod=notifications&action=digest_queue\`.

На странице видно, что накопилось в очереди \`{prefix}_dc_notify_digest_queue\`. Отсюда же можно отправить очередь вручную (если есть право \`notifications_digest_admin\`).

## Как уходит очередь [#как-уходит-очередь]

1. Событие ядра Уведомлений попадает в выбранный канал (почта / ЛС / Telegram).
2. Если сводка включена и канал в списке — запись кладётся в очередь вместо мгновенной отправки.
3. По расписанию cron DLE вызывается \`notifyDigestFlush()\`: модуль собирает пачку по интервалу и лимиту и шлёт через исходный канал.
4. Без патча cron можно нажать ручную отправку на странице сводки или очереди (\`digest_flush\` / \`digest_flush_all\`).

## См. также [#см-также]

* [Настройки](./settings)
* [Установка](../install)
* [Начало работы](../getting_started)
`,o={contents:[{heading:void 0,content:"Адрес: `?mod=notifications&action=digest_queue`."},{heading:void 0,content:"На странице видно, что накопилось в очереди `{prefix}_dc_notify_digest_queue`. Отсюда же можно отправить очередь вручную (если есть право `notifications_digest_admin`)."},{heading:`как-уходит-очередь`,content:`Событие ядра Уведомлений попадает в выбранный канал (почта / ЛС / Telegram).`},{heading:`как-уходит-очередь`,content:`Если сводка включена и канал в списке — запись кладётся в очередь вместо мгновенной отправки.`},{heading:`как-уходит-очередь`,content:"По расписанию cron DLE вызывается `notifyDigestFlush()`: модуль собирает пачку по интервалу и лимиту и шлёт через исходный канал."},{heading:`как-уходит-очередь`,content:"Без патча cron можно нажать ручную отправку на странице сводки или очереди (`digest_flush` / `digest_flush_all`)."},{heading:`см-также`,content:`Настройки`},{heading:`см-также`,content:`Установка`},{heading:`см-также`,content:`Начало работы`}],headings:[{id:`как-уходит-очередь`,content:`Как уходит очередь`},{id:`см-также`,content:`См. также`}]},s=[{depth:2,url:`#как-уходит-очередь`,title:(0,n.jsx)(n.Fragment,{children:`Как уходит очередь`})},{depth:2,url:`#см-также`,title:(0,n.jsx)(n.Fragment,{children:`См. также`})}];function c(e){let t={a:`a`,code:`code`,h2:`h2`,li:`li`,ol:`ol`,p:`p`,ul:`ul`,...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:[`Адрес: `,(0,n.jsx)(t.code,{children:`?mod=notifications&action=digest_queue`}),`.`]}),`
`,(0,n.jsxs)(t.p,{children:[`На странице видно, что накопилось в очереди `,(0,n.jsx)(t.code,{children:`{prefix}_dc_notify_digest_queue`}),`. Отсюда же можно отправить очередь вручную (если есть право `,(0,n.jsx)(t.code,{children:`notifications_digest_admin`}),`).`]}),`
`,(0,n.jsx)(t.h2,{id:`как-уходит-очередь`,children:`Как уходит очередь`}),`
`,(0,n.jsxs)(t.ol,{children:[`
`,(0,n.jsx)(t.li,{children:`Событие ядра Уведомлений попадает в выбранный канал (почта / ЛС / Telegram).`}),`
`,(0,n.jsx)(t.li,{children:`Если сводка включена и канал в списке — запись кладётся в очередь вместо мгновенной отправки.`}),`
`,(0,n.jsxs)(t.li,{children:[`По расписанию cron DLE вызывается `,(0,n.jsx)(t.code,{children:`notifyDigestFlush()`}),`: модуль собирает пачку по интервалу и лимиту и шлёт через исходный канал.`]}),`
`,(0,n.jsxs)(t.li,{children:[`Без патча cron можно нажать ручную отправку на странице сводки или очереди (`,(0,n.jsx)(t.code,{children:`digest_flush`}),` / `,(0,n.jsx)(t.code,{children:`digest_flush_all`}),`).`]}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`см-также`,children:`См. также`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`./settings`,children:`Настройки`})}),`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`../install`,children:`Установка`})}),`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`../getting_started`,children:`Начало работы`})}),`
`]})]})}function l(e={}){let{wrapper:t}=e.components||{};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}export{a as _markdown,l as default,r as frontmatter,i as lastModified,o as structuredData,s as toc};