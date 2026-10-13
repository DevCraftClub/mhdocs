import{r as e}from"./rolldown-runtime-QTnfLwEv.js";import{t}from"./jsx-runtime-By8HlURe.js";var n=e(t()),r={title:`Начало работы`,description:`Соседний модуль DLE Уведомлений: системные окна браузера (Web Push).`,version:`200.1.0`},i=new Date(1791534354e3),a=`

**DLE Уведомление: Push** — соседний модуль к [DLE Уведомления](/dev/dle/notifications/200.1.0/getting_started). Он добавляет способ доставки \`push\`: браузер показывает системное окно, даже если вкладка закрыта.

Это не часть ядра Уведомлений. Ставится отдельным ZIP, как Telegram. В меню DLE отдельного пункта нет: страница живёт внутри \`?mod=notifications\` (\`action=push\`).

Нужны **HTTPS**, вошедший пользователь и право группы \`notifications_receive_push\`. Гости не подписываются.

<Cards>
  <Card title="Установка" href="./install">
    ZIP, Composer, правило ЧПУ для worker
  </Card>

  <Card title="Кнопка на сайте" href="./guides/site_button">
    Как включить подписку в теме
  </Card>

  <Card title="Ключи VAPID" href="./guides/vapid">
    Генерация ключей и пробная отправка
  </Card>
</Cards>

## Что умеет [#что-умеет]

* несколько устройств (endpoint) на одного пользователя;
* пауза через доп. поле профиля (строка подписки не удаляется);
* повтор отправки до трёх раз; ответы 410 и 404 снимают endpoint;
* журнал Admin с именем плагина **DLE Уведомления**.

<Callout type="info">
  Сам себе ядро не пишет: если автор правит свою новость, окно себе не придёт. Пробная отправка из админки идёт мимо этого правила.
</Callout>
`,o={contents:[{heading:void 0,content:"**DLE Уведомление: Push** — соседний модуль к DLE Уведомления. Он добавляет способ доставки `push`: браузер показывает системное окно, даже если вкладка закрыта."},{heading:void 0,content:"Это не часть ядра Уведомлений. Ставится отдельным ZIP, как Telegram. В меню DLE отдельного пункта нет: страница живёт внутри `?mod=notifications` (`action=push`)."},{heading:void 0,content:"Нужны **HTTPS**, вошедший пользователь и право группы `notifications_receive_push`. Гости не подписываются."},{heading:void 0,content:`ZIP, Composer, правило ЧПУ для worker`},{heading:void 0,content:`Как включить подписку в теме`},{heading:void 0,content:`Генерация ключей и пробная отправка`},{heading:`что-умеет`,content:`несколько устройств (endpoint) на одного пользователя;`},{heading:`что-умеет`,content:`пауза через доп. поле профиля (строка подписки не удаляется);`},{heading:`что-умеет`,content:`повтор отправки до трёх раз; ответы 410 и 404 снимают endpoint;`},{heading:`что-умеет`,content:`журнал Admin с именем плагина **DLE Уведомления**.`},{heading:`что-умеет`,content:`Сам себе ядро не пишет: если автор правит свою новость, окно себе не придёт. Пробная отправка из админки идёт мимо этого правила.`}],headings:[{id:`что-умеет`,content:`Что умеет`}]},s=[{depth:2,url:`#что-умеет`,title:(0,n.jsx)(n.Fragment,{children:`Что умеет`})}];function c(e){let t={a:`a`,code:`code`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...e.components},{Callout:r,Card:i,Cards:a}=t;return r||u(`Callout`,!0),i||u(`Card`,!0),a||u(`Cards`,!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`DLE Уведомление: Push`}),` — соседний модуль к `,(0,n.jsx)(t.a,{href:`/dev/dle/notifications/200.1.0/getting_started`,children:`DLE Уведомления`}),`. Он добавляет способ доставки `,(0,n.jsx)(t.code,{children:`push`}),`: браузер показывает системное окно, даже если вкладка закрыта.`]}),`
`,(0,n.jsxs)(t.p,{children:[`Это не часть ядра Уведомлений. Ставится отдельным ZIP, как Telegram. В меню DLE отдельного пункта нет: страница живёт внутри `,(0,n.jsx)(t.code,{children:`?mod=notifications`}),` (`,(0,n.jsx)(t.code,{children:`action=push`}),`).`]}),`
`,(0,n.jsxs)(t.p,{children:[`Нужны `,(0,n.jsx)(t.strong,{children:`HTTPS`}),`, вошедший пользователь и право группы `,(0,n.jsx)(t.code,{children:`notifications_receive_push`}),`. Гости не подписываются.`]}),`
`,(0,n.jsxs)(a,{children:[(0,n.jsx)(i,{title:`Установка`,href:`./install`,children:(0,n.jsx)(t.p,{children:`ZIP, Composer, правило ЧПУ для worker`})}),(0,n.jsx)(i,{title:`Кнопка на сайте`,href:`./guides/site_button`,children:(0,n.jsx)(t.p,{children:`Как включить подписку в теме`})}),(0,n.jsx)(i,{title:`Ключи VAPID`,href:`./guides/vapid`,children:(0,n.jsx)(t.p,{children:`Генерация ключей и пробная отправка`})})]}),`
`,(0,n.jsx)(t.h2,{id:`что-умеет`,children:`Что умеет`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsx)(t.li,{children:`несколько устройств (endpoint) на одного пользователя;`}),`
`,(0,n.jsx)(t.li,{children:`пауза через доп. поле профиля (строка подписки не удаляется);`}),`
`,(0,n.jsx)(t.li,{children:`повтор отправки до трёх раз; ответы 410 и 404 снимают endpoint;`}),`
`,(0,n.jsxs)(t.li,{children:[`журнал Admin с именем плагина `,(0,n.jsx)(t.strong,{children:`DLE Уведомления`}),`.`]}),`
`]}),`
`,(0,n.jsx)(r,{type:`info`,children:(0,n.jsx)(t.p,{children:`Сам себе ядро не пишет: если автор правит свою новость, окно себе не придёт. Пробная отправка из админки идёт мимо этого правила.`})})]})}function l(e={}){let{wrapper:t}=e.components||{};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}function u(e,t){throw Error(`Expected `+(t?`component`:`object`)+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}export{a as _markdown,l as default,r as frontmatter,i as lastModified,o as structuredData,s as toc};