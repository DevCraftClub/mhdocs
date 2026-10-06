import{r as e}from"./rolldown-runtime-QTnfLwEv.js";import{t}from"./jsx-runtime-By8HlURe.js";var n=e(t()),r={title:`User-Agents`,description:`Пул User-Agent: структура полей, auto_renew, API, локальный разбор, авто-cron DLE.`,version:`210.1.0`},i=new Date(1791275402e3),a=`

## Зачем отдельный раздел [#зачем-отдельный-раздел]

В настройках модуля вкладка **User-Agent** и страница **User-Agents** отвечают за строки, которые уходят в HTTP к донору.

* **Генерировать** новые строки — через API (API Ninjas или APILayer).
* **Разбирать** готовую строку — на сайте, без API и без ключа (режим «Локально»).
* Таблица пула создаёт **Cycle ORM** при загрузке модуля; в \`install.xml\` нет \`CREATE\`/\`ALTER\` для этой таблицы.

## Модель записи [#модель-записи]

| Поле                      | Смысл                                     |
| ------------------------- | ----------------------------------------- |
| ОС / браузер / устройство | Списки (множественный выбор на форме)     |
| Доп. сведения             | Сырая строка UA и прочий текст            |
| Источник                  | \`apininja\`, \`apilayer\`, \`local\`, \`custom\` |
| Обновлять по крону        | Флаг на **записи**: обновлять через API   |

Строка для HTTP собирается методом \`generateUaString()\` из **всех** полей записи.

## Настройки модуля [#настройки-модуля]

| Поле                       | Смысл                                                                          |
| -------------------------- | ------------------------------------------------------------------------------ |
| User-Agent по умолчанию    | Запасная строка и суффикс при автогенерации                                    |
| Дописывать UA по умолчанию | Если включено: \`{ответ API} {UA по умолчанию}\` (пул, renew, «свежий» у донора) |
| Сервис                     | API Ninjas / APILayer / локально (только разбор)                               |
| Ключи                      | Password-поля; оба ключа хранятся при смене сервиса                            |
| Фильтры                    | Multi для Ninjas (ОС/браузер) и APILayer (устройства/ОС/браузеры)              |
| Размер пула / режим        | topup или refill                                                               |
| Авто-cron DLE              | Выкл / уровень 1 (\\~2 ч) / уровень 2 (сутки)                                   |
| Секрет URL крона           | Опциональный внешний URL                                                       |

Блоки фильтров Ninjas и APILayer показываются только при выбранном сервисе.

## Страница User-Agents [#страница-user-agents]

* таблица: строка UA, ОС, браузер, устройство, источник, auto;
* «Сгенерировать N» — нужен ключ API;
* «Разобрать» — без ключа;
* «Добавить как есть» — источник \`custom\`;
* «Ротация сейчас» — renew отмеченных + topup/refill.

## Cron [#cron]

1. Включите ротацию.
2. Выберите **авто-cron DLE** (уровни 1 или 2) — вызов из \`engine/modules/cron.php\`.
3. Либо задайте секрет и добавьте внешний URL в crontab:

\`\`\`bash
15 3 * * * curl -fsS "https://ваш-сайт/devcraft/ajax.php?controller=public&mod=parserkit&method=ua_rotate&token=СЕКРЕТ"
\`\`\`

За один прогон: обновление строк с \`auto_renew\` (источник API) и при необходимости пополнение пула. Лимит — «лимит вызовов API».

## Режимы у донора [#режимы-у-донора]

| Режим   | Поведение                                                |
| ------- | -------------------------------------------------------- |
| Свой    | Строка на карточке или из настроек                       |
| Из пула | Случайная запись → \`generateUaString()\`                  |
| Свежий  | Один запрос к API (+ суффикс по умолчанию, если включён) |

## Связанные разделы [#связанные-разделы]

* [Доноры](./donors)
* [Заполнение новости](./fill)
`,o={contents:[{heading:`зачем-отдельный-раздел`,content:`В настройках модуля вкладка **User-Agent** и страница **User-Agents** отвечают за строки, которые уходят в HTTP к донору.`},{heading:`зачем-отдельный-раздел`,content:`**Генерировать** новые строки — через API (API Ninjas или APILayer).`},{heading:`зачем-отдельный-раздел`,content:`**Разбирать** готовую строку — на сайте, без API и без ключа (режим «Локально»).`},{heading:`зачем-отдельный-раздел`,content:"Таблица пула создаёт **Cycle ORM** при загрузке модуля; в `install.xml` нет `CREATE`/`ALTER` для этой таблицы."},{heading:`модель-записи`,content:`Поле`},{heading:`модель-записи`,content:`Смысл`},{heading:`модель-записи`,content:`ОС / браузер / устройство`},{heading:`модель-записи`,content:`Списки (множественный выбор на форме)`},{heading:`модель-записи`,content:`Доп. сведения`},{heading:`модель-записи`,content:`Сырая строка UA и прочий текст`},{heading:`модель-записи`,content:`Источник`},{heading:`модель-записи`,content:"`apininja`, `apilayer`, `local`, `custom`"},{heading:`модель-записи`,content:`Обновлять по крону`},{heading:`модель-записи`,content:`Флаг на **записи**: обновлять через API`},{heading:`модель-записи`,content:"Строка для HTTP собирается методом `generateUaString()` из **всех** полей записи."},{heading:`настройки-модуля`,content:`Поле`},{heading:`настройки-модуля`,content:`Смысл`},{heading:`настройки-модуля`,content:`User-Agent по умолчанию`},{heading:`настройки-модуля`,content:`Запасная строка и суффикс при автогенерации`},{heading:`настройки-модуля`,content:`Дописывать UA по умолчанию`},{heading:`настройки-модуля`,content:"Если включено: `{ответ API} {UA по умолчанию}` (пул, renew, «свежий» у донора)"},{heading:`настройки-модуля`,content:`Сервис`},{heading:`настройки-модуля`,content:`API Ninjas / APILayer / локально (только разбор)`},{heading:`настройки-модуля`,content:`Ключи`},{heading:`настройки-модуля`,content:`Password-поля; оба ключа хранятся при смене сервиса`},{heading:`настройки-модуля`,content:`Фильтры`},{heading:`настройки-модуля`,content:`Multi для Ninjas (ОС/браузер) и APILayer (устройства/ОС/браузеры)`},{heading:`настройки-модуля`,content:`Размер пула / режим`},{heading:`настройки-модуля`,content:`topup или refill`},{heading:`настройки-модуля`,content:`Авто-cron DLE`},{heading:`настройки-модуля`,content:`Выкл / уровень 1 (\\~2 ч) / уровень 2 (сутки)`},{heading:`настройки-модуля`,content:`Секрет URL крона`},{heading:`настройки-модуля`,content:`Опциональный внешний URL`},{heading:`настройки-модуля`,content:`Блоки фильтров Ninjas и APILayer показываются только при выбранном сервисе.`},{heading:`страница-user-agents`,content:`таблица: строка UA, ОС, браузер, устройство, источник, auto;`},{heading:`страница-user-agents`,content:`«Сгенерировать N» — нужен ключ API;`},{heading:`страница-user-agents`,content:`«Разобрать» — без ключа;`},{heading:`страница-user-agents`,content:"«Добавить как есть» — источник `custom`;"},{heading:`страница-user-agents`,content:`«Ротация сейчас» — renew отмеченных + topup/refill.`},{heading:`cron`,content:`Включите ротацию.`},{heading:`cron`,content:"Выберите **авто-cron DLE** (уровни 1 или 2) — вызов из `engine/modules/cron.php`."},{heading:`cron`,content:`Либо задайте секрет и добавьте внешний URL в crontab:`},{heading:`cron`,content:"За один прогон: обновление строк с `auto_renew` (источник API) и при необходимости пополнение пула. Лимит — «лимит вызовов API»."},{heading:`режимы-у-донора`,content:`Режим`},{heading:`режимы-у-донора`,content:`Поведение`},{heading:`режимы-у-донора`,content:`Свой`},{heading:`режимы-у-донора`,content:`Строка на карточке или из настроек`},{heading:`режимы-у-донора`,content:`Из пула`},{heading:`режимы-у-донора`,content:"Случайная запись → `generateUaString()`"},{heading:`режимы-у-донора`,content:`Свежий`},{heading:`режимы-у-донора`,content:`Один запрос к API (+ суффикс по умолчанию, если включён)`},{heading:`связанные-разделы`,content:`Доноры`},{heading:`связанные-разделы`,content:`Заполнение новости`}],headings:[{id:`зачем-отдельный-раздел`,content:`Зачем отдельный раздел`},{id:`модель-записи`,content:`Модель записи`},{id:`настройки-модуля`,content:`Настройки модуля`},{id:`страница-user-agents`,content:`Страница User-Agents`},{id:`cron`,content:`Cron`},{id:`режимы-у-донора`,content:`Режимы у донора`},{id:`связанные-разделы`,content:`Связанные разделы`}]},s=[{depth:2,url:`#зачем-отдельный-раздел`,title:(0,n.jsx)(n.Fragment,{children:`Зачем отдельный раздел`})},{depth:2,url:`#модель-записи`,title:(0,n.jsx)(n.Fragment,{children:`Модель записи`})},{depth:2,url:`#настройки-модуля`,title:(0,n.jsx)(n.Fragment,{children:`Настройки модуля`})},{depth:2,url:`#страница-user-agents`,title:(0,n.jsx)(n.Fragment,{children:`Страница User-Agents`})},{depth:2,url:`#cron`,title:(0,n.jsx)(n.Fragment,{children:`Cron`})},{depth:2,url:`#режимы-у-донора`,title:(0,n.jsx)(n.Fragment,{children:`Режимы у донора`})},{depth:2,url:`#связанные-разделы`,title:(0,n.jsx)(n.Fragment,{children:`Связанные разделы`})}];function c(e){let t={a:`a`,code:`code`,h2:`h2`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,span:`span`,strong:`strong`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,ul:`ul`,...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h2,{id:`зачем-отдельный-раздел`,children:`Зачем отдельный раздел`}),`
`,(0,n.jsxs)(t.p,{children:[`В настройках модуля вкладка `,(0,n.jsx)(t.strong,{children:`User-Agent`}),` и страница `,(0,n.jsx)(t.strong,{children:`User-Agents`}),` отвечают за строки, которые уходят в HTTP к донору.`]}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:`Генерировать`}),` новые строки — через API (API Ninjas или APILayer).`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:`Разбирать`}),` готовую строку — на сайте, без API и без ключа (режим «Локально»).`]}),`
`,(0,n.jsxs)(t.li,{children:[`Таблица пула создаёт `,(0,n.jsx)(t.strong,{children:`Cycle ORM`}),` при загрузке модуля; в `,(0,n.jsx)(t.code,{children:`install.xml`}),` нет `,(0,n.jsx)(t.code,{children:`CREATE`}),`/`,(0,n.jsx)(t.code,{children:`ALTER`}),` для этой таблицы.`]}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`модель-записи`,children:`Модель записи`}),`
`,(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`Поле`}),(0,n.jsx)(t.th,{children:`Смысл`})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`ОС / браузер / устройство`}),(0,n.jsx)(t.td,{children:`Списки (множественный выбор на форме)`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`Доп. сведения`}),(0,n.jsx)(t.td,{children:`Сырая строка UA и прочий текст`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`Источник`}),(0,n.jsxs)(t.td,{children:[(0,n.jsx)(t.code,{children:`apininja`}),`, `,(0,n.jsx)(t.code,{children:`apilayer`}),`, `,(0,n.jsx)(t.code,{children:`local`}),`, `,(0,n.jsx)(t.code,{children:`custom`})]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`Обновлять по крону`}),(0,n.jsxs)(t.td,{children:[`Флаг на `,(0,n.jsx)(t.strong,{children:`записи`}),`: обновлять через API`]})]})]})]}),`
`,(0,n.jsxs)(t.p,{children:[`Строка для HTTP собирается методом `,(0,n.jsx)(t.code,{children:`generateUaString()`}),` из `,(0,n.jsx)(t.strong,{children:`всех`}),` полей записи.`]}),`
`,(0,n.jsx)(t.h2,{id:`настройки-модуля`,children:`Настройки модуля`}),`
`,(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`Поле`}),(0,n.jsx)(t.th,{children:`Смысл`})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`User-Agent по умолчанию`}),(0,n.jsx)(t.td,{children:`Запасная строка и суффикс при автогенерации`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`Дописывать UA по умолчанию`}),(0,n.jsxs)(t.td,{children:[`Если включено: `,(0,n.jsx)(t.code,{children:`{ответ API} {UA по умолчанию}`}),` (пул, renew, «свежий» у донора)`]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`Сервис`}),(0,n.jsx)(t.td,{children:`API Ninjas / APILayer / локально (только разбор)`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`Ключи`}),(0,n.jsx)(t.td,{children:`Password-поля; оба ключа хранятся при смене сервиса`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`Фильтры`}),(0,n.jsx)(t.td,{children:`Multi для Ninjas (ОС/браузер) и APILayer (устройства/ОС/браузеры)`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`Размер пула / режим`}),(0,n.jsx)(t.td,{children:`topup или refill`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`Авто-cron DLE`}),(0,n.jsx)(t.td,{children:`Выкл / уровень 1 (~2 ч) / уровень 2 (сутки)`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`Секрет URL крона`}),(0,n.jsx)(t.td,{children:`Опциональный внешний URL`})]})]})]}),`
`,(0,n.jsx)(t.p,{children:`Блоки фильтров Ninjas и APILayer показываются только при выбранном сервисе.`}),`
`,(0,n.jsx)(t.h2,{id:`страница-user-agents`,children:`Страница User-Agents`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsx)(t.li,{children:`таблица: строка UA, ОС, браузер, устройство, источник, auto;`}),`
`,(0,n.jsx)(t.li,{children:`«Сгенерировать N» — нужен ключ API;`}),`
`,(0,n.jsx)(t.li,{children:`«Разобрать» — без ключа;`}),`
`,(0,n.jsxs)(t.li,{children:[`«Добавить как есть» — источник `,(0,n.jsx)(t.code,{children:`custom`}),`;`]}),`
`,(0,n.jsx)(t.li,{children:`«Ротация сейчас» — renew отмеченных + topup/refill.`}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`cron`,children:`Cron`}),`
`,(0,n.jsxs)(t.ol,{children:[`
`,(0,n.jsx)(t.li,{children:`Включите ротацию.`}),`
`,(0,n.jsxs)(t.li,{children:[`Выберите `,(0,n.jsx)(t.strong,{children:`авто-cron DLE`}),` (уровни 1 или 2) — вызов из `,(0,n.jsx)(t.code,{children:`engine/modules/cron.php`}),`.`]}),`
`,(0,n.jsx)(t.li,{children:`Либо задайте секрет и добавьте внешний URL в crontab:`}),`
`]}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="m 4,4 a 1,1 0 0 0 -0.7070312,0.2929687 1,1 0 0 0 0,1.4140625 L 8.5859375,11 3.2929688,16.292969 a 1,1 0 0 0 0,1.414062 1,1 0 0 0 1.4140624,0 l 5.9999998,-6 a 1.0001,1.0001 0 0 0 0,-1.414062 L 4.7070312,4.2929687 A 1,1 0 0 0 4,4 Z m 8,14 a 1,1 0 0 0 -1,1 1,1 0 0 0 1,1 h 8 a 1,1 0 0 0 1,-1 1,1 0 0 0 -1,-1 z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`15`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:` 3`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:` *`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:` *`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:` *`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:` curl`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:` -fsS`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:` "https://ваш-сайт/devcraft/ajax.php?controller=public&mod=parserkit&method=ua_rotate&token=СЕКРЕТ"`})]})})})}),`
`,(0,n.jsxs)(t.p,{children:[`За один прогон: обновление строк с `,(0,n.jsx)(t.code,{children:`auto_renew`}),` (источник API) и при необходимости пополнение пула. Лимит — «лимит вызовов API».`]}),`
`,(0,n.jsx)(t.h2,{id:`режимы-у-донора`,children:`Режимы у донора`}),`
`,(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`Режим`}),(0,n.jsx)(t.th,{children:`Поведение`})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`Свой`}),(0,n.jsx)(t.td,{children:`Строка на карточке или из настроек`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`Из пула`}),(0,n.jsxs)(t.td,{children:[`Случайная запись → `,(0,n.jsx)(t.code,{children:`generateUaString()`})]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`Свежий`}),(0,n.jsx)(t.td,{children:`Один запрос к API (+ суффикс по умолчанию, если включён)`})]})]})]}),`
`,(0,n.jsx)(t.h2,{id:`связанные-разделы`,children:`Связанные разделы`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`./donors`,children:`Доноры`})}),`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`./fill`,children:`Заполнение новости`})}),`
`]})]})}function l(e={}){let{wrapper:t}=e.components||{};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}export{a as _markdown,l as default,r as frontmatter,i as lastModified,o as structuredData,s as toc};