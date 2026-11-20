import{r as e}from"./rolldown-runtime-QTnfLwEv.js";import{t}from"./jsx-runtime-By8HlURe.js";var n=e(t()),r={title:`Кнопка на сайте`,description:`Как посетителю включить системные окна браузера.`,version:`1.1.0`},i=new Date(1795164792e3),a=`

Скрипт \`Public/push.js\` уже подключается через \`{devcraft-scripts}\` (или \`{devcraft}\`).

## Кнопка [#кнопка]

На странице нужна кнопка с атрибутом \`data-dc-push-subscribe\`:

\`\`\`html
<button type="button" data-dc-push-subscribe>Окна браузера</button>
\`\`\`

На **стене** ядра кнопки в \`wall.tpl\` нет: при установленном Push скрипт сам вставляет её в шапку блока стены. В своей теме можно оставить ручную кнопку где угодно.

Посетитель должен быть вошедшим. По нажатию браузер зарегистрирует worker (\`/dc-push-sw\` или \`index.php?do=dc_push_sw\`), запросит разрешение и отправит адрес подписки на \`devcraft/ajax.php\`. Один человек может подписаться с **нескольких браузеров** — у каждого свой endpoint.

Клик по системному окну открывает ссылку из нагрузки (\`{full-link}\` события).

<Callout type="warning">
  Без HTTPS браузер запрещает worker и подписку. Нужен HTTPS или \`localhost\`. Скрипт покажет это при нажатии.
</Callout>

<Callout type="info">
  Если в профиле доп. поле паузы выключено, рассылка молчит, а строка подписки в таблице остаётся.
</Callout>

<Callout type="info">
  Часть сборок Brave режет службу Google для окон. Firefox, Vivaldi и обычный Chrome обычно проходят. После сбоя можно очистить данные сайта и обновить страницу с очисткой кэша.
</Callout>
`,o={contents:[{heading:void 0,content:"Скрипт `Public/push.js` уже подключается через `{devcraft-scripts}` (или `{devcraft}`)."},{heading:`кнопка`,content:"На странице нужна кнопка с атрибутом `data-dc-push-subscribe`:"},{heading:`кнопка`,content:"На **стене** ядра кнопки в `wall.tpl` нет: при установленном Push скрипт сам вставляет её в шапку блока стены. В своей теме можно оставить ручную кнопку где угодно."},{heading:`кнопка`,content:"Посетитель должен быть вошедшим. По нажатию браузер зарегистрирует worker (`/dc-push-sw` или `index.php?do=dc_push_sw`), запросит разрешение и отправит адрес подписки на `devcraft/ajax.php`. Один человек может подписаться с **нескольких браузеров** — у каждого свой endpoint."},{heading:`кнопка`,content:"Клик по системному окну открывает ссылку из нагрузки (`{full-link}` события)."},{heading:`кнопка`,content:"Без HTTPS браузер запрещает worker и подписку. Нужен HTTPS или `localhost`. Скрипт покажет это при нажатии."},{heading:`кнопка`,content:`Если в профиле доп. поле паузы выключено, рассылка молчит, а строка подписки в таблице остаётся.`},{heading:`кнопка`,content:`Часть сборок Brave режет службу Google для окон. Firefox, Vivaldi и обычный Chrome обычно проходят. После сбоя можно очистить данные сайта и обновить страницу с очисткой кэша.`}],headings:[{id:`кнопка`,content:`Кнопка`}]},s=[{depth:2,url:`#кнопка`,title:(0,n.jsx)(n.Fragment,{children:`Кнопка`})}];function c(e){let t={code:`code`,h2:`h2`,p:`p`,pre:`pre`,span:`span`,strong:`strong`,...e.components},{Callout:r}=t;return r||u(`Callout`,!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:[`Скрипт `,(0,n.jsx)(t.code,{children:`Public/push.js`}),` уже подключается через `,(0,n.jsx)(t.code,{children:`{devcraft-scripts}`}),` (или `,(0,n.jsx)(t.code,{children:`{devcraft}`}),`).`]}),`
`,(0,n.jsx)(t.h2,{id:`кнопка`,children:`Кнопка`}),`
`,(0,n.jsxs)(t.p,{children:[`На странице нужна кнопка с атрибутом `,(0,n.jsx)(t.code,{children:`data-dc-push-subscribe`}),`:`]}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`<`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#22863A`,"--shiki-dark":`#85E89D`},children:`button`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:` type`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`=`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`"button"`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:` data-dc-push-subscribe`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`>Окна браузера</`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#22863A`,"--shiki-dark":`#85E89D`},children:`button`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`>`})]})})})}),`
`,(0,n.jsxs)(t.p,{children:[`На `,(0,n.jsx)(t.strong,{children:`стене`}),` ядра кнопки в `,(0,n.jsx)(t.code,{children:`wall.tpl`}),` нет: при установленном Push скрипт сам вставляет её в шапку блока стены. В своей теме можно оставить ручную кнопку где угодно.`]}),`
`,(0,n.jsxs)(t.p,{children:[`Посетитель должен быть вошедшим. По нажатию браузер зарегистрирует worker (`,(0,n.jsx)(t.code,{children:`/dc-push-sw`}),` или `,(0,n.jsx)(t.code,{children:`index.php?do=dc_push_sw`}),`), запросит разрешение и отправит адрес подписки на `,(0,n.jsx)(t.code,{children:`devcraft/ajax.php`}),`. Один человек может подписаться с `,(0,n.jsx)(t.strong,{children:`нескольких браузеров`}),` — у каждого свой endpoint.`]}),`
`,(0,n.jsxs)(t.p,{children:[`Клик по системному окну открывает ссылку из нагрузки (`,(0,n.jsx)(t.code,{children:`{full-link}`}),` события).`]}),`
`,(0,n.jsx)(r,{type:`warning`,children:(0,n.jsxs)(t.p,{children:[`Без HTTPS браузер запрещает worker и подписку. Нужен HTTPS или `,(0,n.jsx)(t.code,{children:`localhost`}),`. Скрипт покажет это при нажатии.`]})}),`
`,(0,n.jsx)(r,{type:`info`,children:(0,n.jsx)(t.p,{children:`Если в профиле доп. поле паузы выключено, рассылка молчит, а строка подписки в таблице остаётся.`})}),`
`,(0,n.jsx)(r,{type:`info`,children:(0,n.jsx)(t.p,{children:`Часть сборок Brave режет службу Google для окон. Firefox, Vivaldi и обычный Chrome обычно проходят. После сбоя можно очистить данные сайта и обновить страницу с очисткой кэша.`})})]})}function l(e={}){let{wrapper:t}=e.components||{};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}function u(e,t){throw Error(`Expected `+(t?`component`:`object`)+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}export{a as _markdown,l as default,r as frontmatter,i as lastModified,o as structuredData,s as toc};