import{r as e}from"./rolldown-runtime-QTnfLwEv.js";import{t}from"./jsx-runtime-By8HlURe.js";var n=e(t()),r={title:`Начало работы`,description:`Соседний модуль DLE Уведомлений: системные окна браузера (Web Push).`,version:`1.1.0`},i=new Date(1795164792e3),a=`

**DLE Уведомления: Push** — соседний модуль к [DLE Уведомления](/dev/dle/notifications/200.2.0/getting_started). Он добавляет способ доставки \`push\`: браузер показывает системное окно, даже если вкладка закрыта.

Это **не** отдельная тематическая подписка. Push — канал вроде почты: при установке сателлит патчит ядро Уведомлений (\`notify_push\` на подписке, чекбоксы в теме). Человек подписывается на тему и включает канал Push. Несколько устройств одного пользователя получают одно и то же событие.

Ставится отдельным ZIP. Отдельного пункта в меню DLE нет: страница живёт внутри \`?mod=notifications\`.

Нужны **HTTPS**, вошедший пользователь и право группы \`notifications_receive_push\`. Гости не подписываются.

<Cards>
  <Card title="Установка" href="./install">
    ZIP, Composer, правило ЧПУ для worker
  </Card>

  <Card title="Кнопка на сайте" href="./guides/site_button">
    Как включить подписку браузера в теме
  </Card>

  <Card title="Ключи VAPID" href="./guides/vapid">
    Генерация ключей и пробная отправка
  </Card>
</Cards>

## Что умеет (1.1.0) [#что-умеет-110]

* несколько устройств (endpoint) на одного пользователя;
* доставка при \`notify_push\` у тематической подписки;
* правило ЧПУ \`/dc-push-sw\` только при включении/выключении/удалении плагина (без «тихого» AddRule при каждом запросе);
* при смене VAPID ключей браузер сам отписывается и подписывается заново;
* пауза через доп. поле профиля; ответы 410/404 снимают endpoint;
* журнал Admin с именем плагина **DLE Уведомления**.

<Callout type="info">
  Сам себе ядро не пишет: если автор правит свою новость, окно себе не придёт. Пробная отправка из админки идёт мимо этого правила.
</Callout>
`,o={contents:[{heading:void 0,content:"**DLE Уведомления: Push** — соседний модуль к DLE Уведомления. Он добавляет способ доставки `push`: браузер показывает системное окно, даже если вкладка закрыта."},{heading:void 0,content:"Это **не** отдельная тематическая подписка. Push — канал вроде почты: при установке сателлит патчит ядро Уведомлений (`notify_push` на подписке, чекбоксы в теме). Человек подписывается на тему и включает канал Push. Несколько устройств одного пользователя получают одно и то же событие."},{heading:void 0,content:"Ставится отдельным ZIP. Отдельного пункта в меню DLE нет: страница живёт внутри `?mod=notifications`."},{heading:void 0,content:"Нужны **HTTPS**, вошедший пользователь и право группы `notifications_receive_push`. Гости не подписываются."},{heading:void 0,content:`ZIP, Composer, правило ЧПУ для worker`},{heading:void 0,content:`Как включить подписку браузера в теме`},{heading:void 0,content:`Генерация ключей и пробная отправка`},{heading:`что-умеет-110`,content:`несколько устройств (endpoint) на одного пользователя;`},{heading:`что-умеет-110`,content:"доставка при `notify_push` у тематической подписки;"},{heading:`что-умеет-110`,content:"правило ЧПУ `/dc-push-sw` только при включении/выключении/удалении плагина (без «тихого» AddRule при каждом запросе);"},{heading:`что-умеет-110`,content:`при смене VAPID ключей браузер сам отписывается и подписывается заново;`},{heading:`что-умеет-110`,content:`пауза через доп. поле профиля; ответы 410/404 снимают endpoint;`},{heading:`что-умеет-110`,content:`журнал Admin с именем плагина **DLE Уведомления**.`},{heading:`что-умеет-110`,content:`Сам себе ядро не пишет: если автор правит свою новость, окно себе не придёт. Пробная отправка из админки идёт мимо этого правила.`}],headings:[{id:`что-умеет-110`,content:`Что умеет (1.1.0)`}]},s=[{depth:2,url:`#что-умеет-110`,title:(0,n.jsx)(n.Fragment,{children:`Что умеет (1.1.0)`})}];function c(e){let t={a:`a`,code:`code`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...e.components},{Callout:r,Card:i,Cards:a}=t;return r||u(`Callout`,!0),i||u(`Card`,!0),a||u(`Cards`,!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`DLE Уведомления: Push`}),` — соседний модуль к `,(0,n.jsx)(t.a,{href:`/dev/dle/notifications/200.2.0/getting_started`,children:`DLE Уведомления`}),`. Он добавляет способ доставки `,(0,n.jsx)(t.code,{children:`push`}),`: браузер показывает системное окно, даже если вкладка закрыта.`]}),`
`,(0,n.jsxs)(t.p,{children:[`Это `,(0,n.jsx)(t.strong,{children:`не`}),` отдельная тематическая подписка. Push — канал вроде почты: при установке сателлит патчит ядро Уведомлений (`,(0,n.jsx)(t.code,{children:`notify_push`}),` на подписке, чекбоксы в теме). Человек подписывается на тему и включает канал Push. Несколько устройств одного пользователя получают одно и то же событие.`]}),`
`,(0,n.jsxs)(t.p,{children:[`Ставится отдельным ZIP. Отдельного пункта в меню DLE нет: страница живёт внутри `,(0,n.jsx)(t.code,{children:`?mod=notifications`}),`.`]}),`
`,(0,n.jsxs)(t.p,{children:[`Нужны `,(0,n.jsx)(t.strong,{children:`HTTPS`}),`, вошедший пользователь и право группы `,(0,n.jsx)(t.code,{children:`notifications_receive_push`}),`. Гости не подписываются.`]}),`
`,(0,n.jsxs)(a,{children:[(0,n.jsx)(i,{title:`Установка`,href:`./install`,children:(0,n.jsx)(t.p,{children:`ZIP, Composer, правило ЧПУ для worker`})}),(0,n.jsx)(i,{title:`Кнопка на сайте`,href:`./guides/site_button`,children:(0,n.jsx)(t.p,{children:`Как включить подписку браузера в теме`})}),(0,n.jsx)(i,{title:`Ключи VAPID`,href:`./guides/vapid`,children:(0,n.jsx)(t.p,{children:`Генерация ключей и пробная отправка`})})]}),`
`,(0,n.jsx)(t.h2,{id:`что-умеет-110`,children:`Что умеет (1.1.0)`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsx)(t.li,{children:`несколько устройств (endpoint) на одного пользователя;`}),`
`,(0,n.jsxs)(t.li,{children:[`доставка при `,(0,n.jsx)(t.code,{children:`notify_push`}),` у тематической подписки;`]}),`
`,(0,n.jsxs)(t.li,{children:[`правило ЧПУ `,(0,n.jsx)(t.code,{children:`/dc-push-sw`}),` только при включении/выключении/удалении плагина (без «тихого» AddRule при каждом запросе);`]}),`
`,(0,n.jsx)(t.li,{children:`при смене VAPID ключей браузер сам отписывается и подписывается заново;`}),`
`,(0,n.jsx)(t.li,{children:`пауза через доп. поле профиля; ответы 410/404 снимают endpoint;`}),`
`,(0,n.jsxs)(t.li,{children:[`журнал Admin с именем плагина `,(0,n.jsx)(t.strong,{children:`DLE Уведомления`}),`.`]}),`
`]}),`
`,(0,n.jsx)(r,{type:`info`,children:(0,n.jsx)(t.p,{children:`Сам себе ядро не пишет: если автор правит свою новость, окно себе не придёт. Пробная отправка из админки идёт мимо этого правила.`})})]})}function l(e={}){let{wrapper:t}=e.components||{};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}function u(e,t){throw Error(`Expected `+(t?`component`:`object`)+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}export{a as _markdown,l as default,r as frontmatter,i as lastModified,o as structuredData,s as toc};