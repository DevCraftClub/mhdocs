import{r as e}from"./rolldown-runtime-QTnfLwEv.js";import{t}from"./jsx-runtime-By8HlURe.js";var n=e(t()),r={title:`Установка`,description:`Установка Наблюдателя, крон и первый запуск.`,version:`1.0.0`},i=new Date(1795673215e3),a=`

## Системные требования [#системные-требования]

* DLE ≥ 21.0
* плагин **DLE Уведомления**
* DevCraft Admin ≥ 200.4.0

## Установка [#установка]

1. Установите ZIP через «Плагины» DLE (нужен уже стоящий модуль Уведомлений).
2. Включите плагин — создастся таблица снимков, в \`cron.php\` появится вызов \`notifyWatchmanScan\`.
3. В админке Уведомлений откройте «Наблюдатель: Статус» и включите сканирование в настройках модуля (\`dle_notifications_watchman\`).

## Холодный старт [#холодный-старт]

Пока статус «Ещё собирается», наблюдатель **не** вызывает \`notifyOn*\`. Несколько проходов cron обходят сущности пакетами. Когда обход закончен — «Готово», дальше только дельта.

## Дельта в шаблоне [#дельта-в-шаблоне]

В сценарии \`news_update\` после установки патчей доступны теги \`{changes}\` / \`{watchman-body}\` (текст строк) и \`{watchman-changes-json}\` (массив). Список полей — multi-выбор в настройках Наблюдателя (основные поля и доп. поля новости).

## Крон [#крон]

Два способа (можно оба сразу):

1. **Штатный cron DLE** — в конце \`engine/modules/cron.php\` вызывается \`notifyWatchmanScan\` (\\~раз в 2 часа при обычном трафике сайта). Секрет не нужен.
2. **Внешний URL** — в настройках задайте «Секрет URL крона». На странице «Наблюдатель: Статус» появится готовый адрес. Его можно повесить на любой планировщик:

\`\`\`bash
*/15 * * * * curl -fsS "https://example.com/devcraft/ajax.php?controller=public&mod=notifications_watchman&method=watchman_scan&token=ВАШ_СЕКРЕТ"
\`\`\`

Пустой секрет — внешние вызовы отклоняются (ответ 403). Сканирование должно быть включено.
`,o={contents:[{heading:`системные-требования`,content:`DLE ≥ 21.0`},{heading:`системные-требования`,content:`плагин **DLE Уведомления**`},{heading:`системные-требования`,content:`DevCraft Admin ≥ 200.4.0`},{heading:`установка`,content:`Установите ZIP через «Плагины» DLE (нужен уже стоящий модуль Уведомлений).`},{heading:`установка`,content:"Включите плагин — создастся таблица снимков, в `cron.php` появится вызов `notifyWatchmanScan`."},{heading:`установка`,content:"В админке Уведомлений откройте «Наблюдатель: Статус» и включите сканирование в настройках модуля (`dle_notifications_watchman`)."},{heading:`холодный-старт`,content:"Пока статус «Ещё собирается», наблюдатель **не** вызывает `notifyOn*`. Несколько проходов cron обходят сущности пакетами. Когда обход закончен — «Готово», дальше только дельта."},{heading:`дельта-в-шаблоне`,content:"В сценарии `news_update` после установки патчей доступны теги `{changes}` / `{watchman-body}` (текст строк) и `{watchman-changes-json}` (массив). Список полей — multi-выбор в настройках Наблюдателя (основные поля и доп. поля новости)."},{heading:`крон`,content:`Два способа (можно оба сразу):`},{heading:`крон`,content:"**Штатный cron DLE** — в конце `engine/modules/cron.php` вызывается `notifyWatchmanScan` (\\~раз в 2 часа при обычном трафике сайта). Секрет не нужен."},{heading:`крон`,content:`**Внешний URL** — в настройках задайте «Секрет URL крона». На странице «Наблюдатель: Статус» появится готовый адрес. Его можно повесить на любой планировщик:`},{heading:`крон`,content:`Пустой секрет — внешние вызовы отклоняются (ответ 403). Сканирование должно быть включено.`}],headings:[{id:`системные-требования`,content:`Системные требования`},{id:`установка`,content:`Установка`},{id:`холодный-старт`,content:`Холодный старт`},{id:`дельта-в-шаблоне`,content:`Дельта в шаблоне`},{id:`крон`,content:`Крон`}]},s=[{depth:2,url:`#системные-требования`,title:(0,n.jsx)(n.Fragment,{children:`Системные требования`})},{depth:2,url:`#установка`,title:(0,n.jsx)(n.Fragment,{children:`Установка`})},{depth:2,url:`#холодный-старт`,title:(0,n.jsx)(n.Fragment,{children:`Холодный старт`})},{depth:2,url:`#дельта-в-шаблоне`,title:(0,n.jsx)(n.Fragment,{children:`Дельта в шаблоне`})},{depth:2,url:`#крон`,title:(0,n.jsx)(n.Fragment,{children:`Крон`})}];function c(e){let t={code:`code`,h2:`h2`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,span:`span`,strong:`strong`,ul:`ul`,...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h2,{id:`системные-требования`,children:`Системные требования`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsx)(t.li,{children:`DLE ≥ 21.0`}),`
`,(0,n.jsxs)(t.li,{children:[`плагин `,(0,n.jsx)(t.strong,{children:`DLE Уведомления`})]}),`
`,(0,n.jsx)(t.li,{children:`DevCraft Admin ≥ 200.4.0`}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`установка`,children:`Установка`}),`
`,(0,n.jsxs)(t.ol,{children:[`
`,(0,n.jsx)(t.li,{children:`Установите ZIP через «Плагины» DLE (нужен уже стоящий модуль Уведомлений).`}),`
`,(0,n.jsxs)(t.li,{children:[`Включите плагин — создастся таблица снимков, в `,(0,n.jsx)(t.code,{children:`cron.php`}),` появится вызов `,(0,n.jsx)(t.code,{children:`notifyWatchmanScan`}),`.`]}),`
`,(0,n.jsxs)(t.li,{children:[`В админке Уведомлений откройте «Наблюдатель: Статус» и включите сканирование в настройках модуля (`,(0,n.jsx)(t.code,{children:`dle_notifications_watchman`}),`).`]}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`холодный-старт`,children:`Холодный старт`}),`
`,(0,n.jsxs)(t.p,{children:[`Пока статус «Ещё собирается», наблюдатель `,(0,n.jsx)(t.strong,{children:`не`}),` вызывает `,(0,n.jsx)(t.code,{children:`notifyOn*`}),`. Несколько проходов cron обходят сущности пакетами. Когда обход закончен — «Готово», дальше только дельта.`]}),`
`,(0,n.jsx)(t.h2,{id:`дельта-в-шаблоне`,children:`Дельта в шаблоне`}),`
`,(0,n.jsxs)(t.p,{children:[`В сценарии `,(0,n.jsx)(t.code,{children:`news_update`}),` после установки патчей доступны теги `,(0,n.jsx)(t.code,{children:`{changes}`}),` / `,(0,n.jsx)(t.code,{children:`{watchman-body}`}),` (текст строк) и `,(0,n.jsx)(t.code,{children:`{watchman-changes-json}`}),` (массив). Список полей — multi-выбор в настройках Наблюдателя (основные поля и доп. поля новости).`]}),`
`,(0,n.jsx)(t.h2,{id:`крон`,children:`Крон`}),`
`,(0,n.jsx)(t.p,{children:`Два способа (можно оба сразу):`}),`
`,(0,n.jsxs)(t.ol,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:`Штатный cron DLE`}),` — в конце `,(0,n.jsx)(t.code,{children:`engine/modules/cron.php`}),` вызывается `,(0,n.jsx)(t.code,{children:`notifyWatchmanScan`}),` (~раз в 2 часа при обычном трафике сайта). Секрет не нужен.`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:`Внешний URL`}),` — в настройках задайте «Секрет URL крона». На странице «Наблюдатель: Статус» появится готовый адрес. Его можно повесить на любой планировщик:`]}),`
`]}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="m 4,4 a 1,1 0 0 0 -0.7070312,0.2929687 1,1 0 0 0 0,1.4140625 L 8.5859375,11 3.2929688,16.292969 a 1,1 0 0 0 0,1.414062 1,1 0 0 0 1.4140624,0 l 5.9999998,-6 a 1.0001,1.0001 0 0 0 0,-1.414062 L 4.7070312,4.2929687 A 1,1 0 0 0 4,4 Z m 8,14 a 1,1 0 0 0 -1,1 1,1 0 0 0 1,1 h 8 a 1,1 0 0 0 1,-1 1,1 0 0 0 -1,-1 z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`*`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`/15 `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`*`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:` *`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:` *`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:` *`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:` curl -fsS `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`"https://example.com/devcraft/ajax.php?controller=public&mod=notifications_watchman&method=watchman_scan&token=ВАШ_СЕКРЕТ"`})]})})})}),`
`,(0,n.jsx)(t.p,{children:`Пустой секрет — внешние вызовы отклоняются (ответ 403). Сканирование должно быть включено.`})]})}function l(e={}){let{wrapper:t}=e.components||{};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}export{a as _markdown,l as default,r as frontmatter,i as lastModified,o as structuredData,s as toc};