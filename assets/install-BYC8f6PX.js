import{r as e}from"./rolldown-runtime-QTnfLwEv.js";import{t}from"./jsx-runtime-By8HlURe.js";var n=e(t()),r={title:`Установка`,description:`Как поставить Уведомления — Telegram: ZIP, needplugin, Composer, cron и патч social.class.php для DLE 21.`,version:`200.1.0`},i=new Date(1790413881e3),a=`

Общая схема ZIP через менеджер плагинов DLE: &#x2A;*[Установка плагинов](/instructions/install_instructions)**. Ниже — только этот модуль.

<Callout type="warn" title="Сначала ядро Уведомлений">
  Нужны [DevCraft Admin](/dev/dle/devcraft_admin/200.4.1/install&#x29; (**≥ 200.4.1**) и плагин **DLE Уведомления** (\`needplugin\`). Без них соседний модуль не поднимется как задумано.
</Callout>

Обзор: [Начало работы](getting_started).

## Требования [#требования]

| Что             | Минимум                            |
| --------------- | ---------------------------------- |
| DataLife Engine | **20.0+**                          |
| PHP             | **8.3+**                           |
| DevCraft Admin  | **≥ 200.4.1**                      |
| DLE Уведомления | установлен и включён               |
| Composer-пакет  | \`luzrain/telegram-bot-api\` (^3.17) |

## 1. Архив плагина [#1-архив-плагина]

1. Скачайте ZIP из репозитория модуля или соберите его скриптом архива (если есть в репозитории).
2. Загрузите в **Панель управления DLE → Плагины → Установить плагин**.
3. В \`install.xml\` указано \`needplugin=DLE Уведомления\` — менеджер плагинов проверит зависимость.
4. Убедитесь, что на сайте есть каталог \`devcraft/src/modules/NotificationsTelegram/\`.

Таблица \`{prefix}_dc_notify_telegram\` создаётся Cycle ORM при первом обращении в админке.

## 2. Composer [#2-composer]

В каталоге \`devcraft/\` пакет \`luzrain/telegram-bot-api\` должен быть в \`composer.json\` (манифест помечает его как обязательный). Затем:

\`\`\`bash
composer update luzrain/telegram-bot-api
composer dump-autoload
\`\`\`

Если пакет уже в lock-файле Admin / ядра — достаточно \`composer dump-autoload\`.

## 3. Планировщик DLE (cron) [#3-планировщик-dle-cron]

Установщик вставляет в \`engine/modules/cron.php\` вызов:

\`\`\`php
if (function_exists('notifyTelegramPollUpdates')) { notifyTelegramPollUpdates(); }
\`\`\`

Без этого шага привязка по команде «Старт» в боте не подтвердится автоматически. Убедитесь, что cron DLE реально запускается на сервере.

## 4. Патч social.class.php (DLE 21) [#4-патч-socialclassphp-dle-21]

Для DLE 21 с включённым входом через Telegram установщик правит \`engine/classes/social.class.php\`: после успешного входа Telegram запоминается id пользователя для последующего подтверждения «Стартом» в боте. Маркеры вставки: \`// DevCraft NotificationsTelegram: start\` … \`end\`.

На DLE 20 этот путь не используется — привязка идёт по секретной строке в ссылке. См. [Привязка](guides/bind).

## 5. Первый запуск [#5-первый-запуск]

1. Откройте \`?mod=notifications&action=telegram\`.
2. Укажите [ключ и имя бота](guides/settings), включите доставку.
3. На DLE 21 бот уведомлений должен совпадать с клиентом Telegram Login в настройках соцсетей сайта (\`telegramid\`).
4. В теме кабинета при необходимости добавьте:

\`\`\`smarty
{include file="devcraft/src/modules/NotificationsTelegram/Controller/show_telegram_bind.php"}
\`\`\`

Шаблон блока: \`templates/{skin}/devcraft/notifications_telegram/bind.tpl\` (fallback — \`Default\`).

## См. также [#см-также]

* [Начало работы](getting_started)
* [Привязка](guides/bind)
* [Настройки](guides/settings)
* [История изменений](changelog)
* [Дополнительные модули ядра](/dev/dle/notifications/200.1.0/guides/satellites)
`,o={contents:[{heading:void 0,content:`Общая схема ZIP через менеджер плагинов DLE: **Установка плагинов**. Ниже — только этот модуль.`},{heading:void 0,content:"Нужны DevCraft Admi&#x6E; (**≥ 200.4.1**) и плагин **DLE Уведомления** (`needplugin`). Без них соседний модуль не поднимется как задумано."},{heading:void 0,content:`Обзор: Начало работы.`},{heading:`требования`,content:`Что`},{heading:`требования`,content:`Минимум`},{heading:`требования`,content:`DataLife Engine`},{heading:`требования`,content:`**20.0+**`},{heading:`требования`,content:`PHP`},{heading:`требования`,content:`**8.3+**`},{heading:`требования`,content:`DevCraft Admin`},{heading:`требования`,content:`**≥ 200.4.1**`},{heading:`требования`,content:`DLE Уведомления`},{heading:`требования`,content:`установлен и включён`},{heading:`требования`,content:`Composer-пакет`},{heading:`требования`,content:"`luzrain/telegram-bot-api` (^3.17)"},{heading:`1-архив-плагина`,content:`Скачайте ZIP из репозитория модуля или соберите его скриптом архива (если есть в репозитории).`},{heading:`1-архив-плагина`,content:`Загрузите в **Панель управления DLE → Плагины → Установить плагин**.`},{heading:`1-архив-плагина`,content:"В `install.xml` указано `needplugin=DLE Уведомления` — менеджер плагинов проверит зависимость."},{heading:`1-архив-плагина`,content:"Убедитесь, что на сайте есть каталог `devcraft/src/modules/NotificationsTelegram/`."},{heading:`1-архив-плагина`,content:"Таблица `{prefix}_dc_notify_telegram` создаётся Cycle ORM при первом обращении в админке."},{heading:`2-composer`,content:"В каталоге `devcraft/` пакет `luzrain/telegram-bot-api` должен быть в `composer.json` (манифест помечает его как обязательный). Затем:"},{heading:`2-composer`,content:"Если пакет уже в lock-файле Admin / ядра — достаточно `composer dump-autoload`."},{heading:`3-планировщик-dle-cron`,content:"Установщик вставляет в `engine/modules/cron.php` вызов:"},{heading:`3-планировщик-dle-cron`,content:`Без этого шага привязка по команде «Старт» в боте не подтвердится автоматически. Убедитесь, что cron DLE реально запускается на сервере.`},{heading:`4-патч-socialclassphp-dle-21`,content:"Для DLE 21 с включённым входом через Telegram установщик правит `engine/classes/social.class.php`: после успешного входа Telegram запоминается id пользователя для последующего подтверждения «Стартом» в боте. Маркеры вставки: `// DevCraft NotificationsTelegram: start` … `end`."},{heading:`4-патч-socialclassphp-dle-21`,content:`На DLE 20 этот путь не используется — привязка идёт по секретной строке в ссылке. См. Привязка.`},{heading:`5-первый-запуск`,content:"Откройте `?mod=notifications&action=telegram`."},{heading:`5-первый-запуск`,content:`Укажите ключ и имя бота, включите доставку.`},{heading:`5-первый-запуск`,content:"На DLE 21 бот уведомлений должен совпадать с клиентом Telegram Login в настройках соцсетей сайта (`telegramid`)."},{heading:`5-первый-запуск`,content:`В теме кабинета при необходимости добавьте:`},{heading:`5-первый-запуск`,content:"Шаблон блока: `templates/{skin}/devcraft/notifications_telegram/bind.tpl` (fallback — `Default`)."},{heading:`см-также`,content:`Начало работы`},{heading:`см-также`,content:`Привязка`},{heading:`см-также`,content:`Настройки`},{heading:`см-также`,content:`История изменений`},{heading:`см-также`,content:`Дополнительные модули ядра`}],headings:[{id:`требования`,content:`Требования`},{id:`1-архив-плагина`,content:`1\\. Архив плагина`},{id:`2-composer`,content:`2\\. Composer`},{id:`3-планировщик-dle-cron`,content:`3\\. Планировщик DLE (cron)`},{id:`4-патч-socialclassphp-dle-21`,content:`4\\. Патч social.class.php (DLE 21)`},{id:`5-первый-запуск`,content:`5\\. Первый запуск`},{id:`см-также`,content:`См. также`}]},s=[{depth:2,url:`#требования`,title:(0,n.jsx)(n.Fragment,{children:`Требования`})},{depth:2,url:`#1-архив-плагина`,title:(0,n.jsx)(n.Fragment,{children:`1. Архив плагина`})},{depth:2,url:`#2-composer`,title:(0,n.jsx)(n.Fragment,{children:`2. Composer`})},{depth:2,url:`#3-планировщик-dle-cron`,title:(0,n.jsx)(n.Fragment,{children:`3. Планировщик DLE (cron)`})},{depth:2,url:`#4-патч-socialclassphp-dle-21`,title:(0,n.jsx)(n.Fragment,{children:`4. Патч social.class.php (DLE 21)`})},{depth:2,url:`#5-первый-запуск`,title:(0,n.jsx)(n.Fragment,{children:`5. Первый запуск`})},{depth:2,url:`#см-также`,title:(0,n.jsx)(n.Fragment,{children:`См. также`})}];function c(e){let t={a:`a`,code:`code`,h2:`h2`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,span:`span`,strong:`strong`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,ul:`ul`,...e.components},{Callout:r}=t;return r||u(`Callout`,!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:[`Общая схема ZIP через менеджер плагинов DLE: `,(0,n.jsx)(t.strong,{children:(0,n.jsx)(t.a,{href:`/instructions/install_instructions`,children:`Установка плагинов`})}),`. Ниже — только этот модуль.`]}),`
`,(0,n.jsx)(r,{type:`warn`,title:`Сначала ядро Уведомлений`,children:(0,n.jsxs)(t.p,{children:[`Нужны `,(0,n.jsx)(t.a,{href:`/dev/dle/devcraft_admin/200.4.1/install`,children:`DevCraft Admin`}),` (`,(0,n.jsx)(t.strong,{children:`≥ 200.4.1`}),`) и плагин `,(0,n.jsx)(t.strong,{children:`DLE Уведомления`}),` (`,(0,n.jsx)(t.code,{children:`needplugin`}),`). Без них соседний модуль не поднимется как задумано.`]})}),`
`,(0,n.jsxs)(t.p,{children:[`Обзор: `,(0,n.jsx)(t.a,{href:`getting_started`,children:`Начало работы`}),`.`]}),`
`,(0,n.jsx)(t.h2,{id:`требования`,children:`Требования`}),`
`,(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`Что`}),(0,n.jsx)(t.th,{children:`Минимум`})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`DataLife Engine`}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:`20.0+`})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`PHP`}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:`8.3+`})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`DevCraft Admin`}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:`≥ 200.4.1`})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`DLE Уведомления`}),(0,n.jsx)(t.td,{children:`установлен и включён`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`Composer-пакет`}),(0,n.jsxs)(t.td,{children:[(0,n.jsx)(t.code,{children:`luzrain/telegram-bot-api`}),` (^3.17)`]})]})]})]}),`
`,(0,n.jsx)(t.h2,{id:`1-архив-плагина`,children:`1. Архив плагина`}),`
`,(0,n.jsxs)(t.ol,{children:[`
`,(0,n.jsx)(t.li,{children:`Скачайте ZIP из репозитория модуля или соберите его скриптом архива (если есть в репозитории).`}),`
`,(0,n.jsxs)(t.li,{children:[`Загрузите в `,(0,n.jsx)(t.strong,{children:`Панель управления DLE → Плагины → Установить плагин`}),`.`]}),`
`,(0,n.jsxs)(t.li,{children:[`В `,(0,n.jsx)(t.code,{children:`install.xml`}),` указано `,(0,n.jsx)(t.code,{children:`needplugin=DLE Уведомления`}),` — менеджер плагинов проверит зависимость.`]}),`
`,(0,n.jsxs)(t.li,{children:[`Убедитесь, что на сайте есть каталог `,(0,n.jsx)(t.code,{children:`devcraft/src/modules/NotificationsTelegram/`}),`.`]}),`
`]}),`
`,(0,n.jsxs)(t.p,{children:[`Таблица `,(0,n.jsx)(t.code,{children:`{prefix}_dc_notify_telegram`}),` создаётся Cycle ORM при первом обращении в админке.`]}),`
`,(0,n.jsx)(t.h2,{id:`2-composer`,children:`2. Composer`}),`
`,(0,n.jsxs)(t.p,{children:[`В каталоге `,(0,n.jsx)(t.code,{children:`devcraft/`}),` пакет `,(0,n.jsx)(t.code,{children:`luzrain/telegram-bot-api`}),` должен быть в `,(0,n.jsx)(t.code,{children:`composer.json`}),` (манифест помечает его как обязательный). Затем:`]}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="m 4,4 a 1,1 0 0 0 -0.7070312,0.2929687 1,1 0 0 0 0,1.4140625 L 8.5859375,11 3.2929688,16.292969 a 1,1 0 0 0 0,1.414062 1,1 0 0 0 1.4140624,0 l 5.9999998,-6 a 1.0001,1.0001 0 0 0 0,-1.414062 L 4.7070312,4.2929687 A 1,1 0 0 0 4,4 Z m 8,14 a 1,1 0 0 0 -1,1 1,1 0 0 0 1,1 h 8 a 1,1 0 0 0 1,-1 1,1 0 0 0 -1,-1 z" fill="currentColor" /></svg>`,children:(0,n.jsxs)(t.code,{children:[(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`composer`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:` update`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:` luzrain/telegram-bot-api`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`composer`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:` dump-autoload`})]})]})})}),`
`,(0,n.jsxs)(t.p,{children:[`Если пакет уже в lock-файле Admin / ядра — достаточно `,(0,n.jsx)(t.code,{children:`composer dump-autoload`}),`.`]}),`
`,(0,n.jsx)(t.h2,{id:`3-планировщик-dle-cron`,children:`3. Планировщик DLE (cron)`}),`
`,(0,n.jsxs)(t.p,{children:[`Установщик вставляет в `,(0,n.jsx)(t.code,{children:`engine/modules/cron.php`}),` вызов:`]}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M7.01 10.207h-.944l-.515 2.648h.838c.556 0 .97-.105 1.242-.314.272-.21.455-.559.55-1.049.092-.47.05-.802-.124-.995-.175-.193-.523-.29-1.047-.29zM12 5.688C5.373 5.688 0 8.514 0 12s5.373 6.313 12 6.313S24 15.486 24 12c0-3.486-5.373-6.312-12-6.312zm-3.26 7.451c-.261.25-.575.438-.917.551-.336.108-.765.164-1.285.164H5.357l-.327 1.681H3.652l1.23-6.326h2.65c.797 0 1.378.209 1.744.628.366.418.476 1.002.33 1.752a2.836 2.836 0 0 1-.305.847c-.143.255-.33.49-.561.703zm4.024.715l.543-2.799c.063-.318.039-.536-.068-.651-.107-.116-.336-.174-.687-.174H11.46l-.704 3.625H9.388l1.23-6.327h1.367l-.327 1.682h1.218c.767 0 1.295.134 1.586.401s.378.7.263 1.299l-.572 2.944h-1.389zm7.597-2.265a2.782 2.782 0 0 1-.305.847c-.143.255-.33.49-.561.703a2.44 2.44 0 0 1-.917.551c-.336.108-.765.164-1.286.164h-1.18l-.327 1.682h-1.378l1.23-6.326h2.649c.797 0 1.378.209 1.744.628.366.417.477 1.001.331 1.751zM17.766 10.207h-.943l-.516 2.648h.838c.557 0 .971-.105 1.242-.314.272-.21.455-.559.551-1.049.092-.47.049-.802-.125-.995s-.524-.29-1.047-.29z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`if`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:` (`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`function_exists`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`(`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`'notifyTelegramPollUpdates'`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`)) { `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`notifyTelegramPollUpdates`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`(); }`})]})})})}),`
`,(0,n.jsx)(t.p,{children:`Без этого шага привязка по команде «Старт» в боте не подтвердится автоматически. Убедитесь, что cron DLE реально запускается на сервере.`}),`
`,(0,n.jsx)(t.h2,{id:`4-патч-socialclassphp-dle-21`,children:`4. Патч social.class.php (DLE 21)`}),`
`,(0,n.jsxs)(t.p,{children:[`Для DLE 21 с включённым входом через Telegram установщик правит `,(0,n.jsx)(t.code,{children:`engine/classes/social.class.php`}),`: после успешного входа Telegram запоминается id пользователя для последующего подтверждения «Стартом» в боте. Маркеры вставки: `,(0,n.jsx)(t.code,{children:`// DevCraft NotificationsTelegram: start`}),` … `,(0,n.jsx)(t.code,{children:`end`}),`.`]}),`
`,(0,n.jsxs)(t.p,{children:[`На DLE 20 этот путь не используется — привязка идёт по секретной строке в ссылке. См. `,(0,n.jsx)(t.a,{href:`guides/bind`,children:`Привязка`}),`.`]}),`
`,(0,n.jsx)(t.h2,{id:`5-первый-запуск`,children:`5. Первый запуск`}),`
`,(0,n.jsxs)(t.ol,{children:[`
`,(0,n.jsxs)(t.li,{children:[`Откройте `,(0,n.jsx)(t.code,{children:`?mod=notifications&action=telegram`}),`.`]}),`
`,(0,n.jsxs)(t.li,{children:[`Укажите `,(0,n.jsx)(t.a,{href:`guides/settings`,children:`ключ и имя бота`}),`, включите доставку.`]}),`
`,(0,n.jsxs)(t.li,{children:[`На DLE 21 бот уведомлений должен совпадать с клиентом Telegram Login в настройках соцсетей сайта (`,(0,n.jsx)(t.code,{children:`telegramid`}),`).`]}),`
`,(0,n.jsx)(t.li,{children:`В теме кабинета при необходимости добавьте:`}),`
`]}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`{include file="devcraft/src/modules/NotificationsTelegram/Controller/show_telegram_bind.php"}`})})})})}),`
`,(0,n.jsxs)(t.p,{children:[`Шаблон блока: `,(0,n.jsx)(t.code,{children:`templates/{skin}/devcraft/notifications_telegram/bind.tpl`}),` (fallback — `,(0,n.jsx)(t.code,{children:`Default`}),`).`]}),`
`,(0,n.jsx)(t.h2,{id:`см-также`,children:`См. также`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`getting_started`,children:`Начало работы`})}),`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`guides/bind`,children:`Привязка`})}),`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`guides/settings`,children:`Настройки`})}),`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`changelog`,children:`История изменений`})}),`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`/dev/dle/notifications/200.1.0/guides/satellites`,children:`Дополнительные модули ядра`})}),`
`]})]})}function l(e={}){let{wrapper:t}=e.components||{};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}function u(e,t){throw Error(`Expected `+(t?`component`:`object`)+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}export{a as _markdown,l as default,r as frontmatter,i as lastModified,o as structuredData,s as toc};