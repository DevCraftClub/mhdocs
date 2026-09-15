import{r as e}from"./rolldown-runtime-QTnfLwEv.js";import{t}from"./jsx-runtime-By8HlURe.js";var n=e(t()),r={title:`Сателлиты`,description:`Telegram, дайджест и статистика: установка, настройки, апселл-бандл`,version:`200.1.0`},i=new Date(1789477657e3),a=`

**Сателлиты** — модули DevCraft рядом с \`Notifications\` с \`extends('notifications')\`. Каналы и public AJAX остаются у сателлита; админ-UI встраивается в **DLE Уведомления** (вкладки настроек + host \`action\`).

В архиве плагина лежат каталоги:

* \`devcraft/src/modules/NotificationsTelegram\`
* \`devcraft/src/modules/NotificationsDigest\`
* \`devcraft/src/modules/NotificationsStats\`

На дашборде **DLE Уведомления** блок «Сателлиты» ведёт на host-URL (\`?mod=notifications&action=satellite_*\`). Отдельных пунктов сайдбара DLE для сателлитов нет.

<Callout type="info">
  Базовый модуль работает без сателлитов (сайт / почта / ЛС). Telegram, дайджест и статистика — расширенный бандл. В манифесте сателлита: \`->extends('notifications')\`.
</Callout>

## Быстрый доступ [#быстрый-доступ]

| Модуль     | Админка                                        | Что настраивать                               |
| ---------- | ---------------------------------------------- | --------------------------------------------- |
| Telegram   | \`?mod=notifications&action=satellite_telegram\` | tools; поля бота — вкладки **Настройки** host |
| Дайджест   | \`?mod=notifications&action=satellite_digest\`   | очередь; поля — вкладки **Настройки** host    |
| Статистика | \`?mod=notifications&action=satellite_stats\`    | сводка; период — вкладки **Настройки** host   |

Поля конфигурации сателлитов также на \`?mod=notifications&action=settings\` (объединённая схема).

Права групп для сателлитов задаются на странице **DLE Уведомления → Права групп** (defs подхватываются автоматически).

## Telegram [#telegram]

Доставка в чат Telegram после привязки аккаунта через deep-link бота.

### Настройка [#настройка]

1. Создайте бота у \`@BotFather\`, скопируйте токен и username.
2. Откройте **DLE Уведомления → Настройки** (вкладки Telegram) или \`?mod=notifications&action=satellite_telegram\`.
3. Включите канал, укажите токен и имя бота (без \`@\`).
4. Выдайте группе право \`notifications_receive_telegram\`.
5. В кабинете пользователя / теме добавьте блок привязки:

\`\`\`
{include file="devcraft/src/modules/NotificationsTelegram/Site/web.php?focus=bind"}
\`\`\`

6. Cron DLE вызывает \`notifyTelegramPollUpdates()\` (патч в \`engine/modules/cron.php\` из install) — разбирает \`/start ТОКЕН\` и сохраняет \`chat_id\`.

На странице настроек: «Получить ссылку привязки», «Проверить привязки», «Тестовое сообщение».

### Composer [#composer]

Сателлиту нужен пакет \`luzrain/telegram-bot-api\` в \`devcraft/composer.json\` (см. манифест модуля).

## Дайджест [#дайджест]

Вместо мгновенной почты / ЛС / Telegram складывает сообщения в очередь и шлёт сводку по интервалу.

### Настройка [#настройка-1]

1. **DLE Уведомления → Настройки** (вкладки дайджеста): включить, интервал (мин), каналы (\`email\`, \`pm\`, \`telegram\`), лимит записей в одном письме.
2. Канал &#x2A;*«на сайте»** дайджестом не откладывается.
3. Очередь: \`?mod=notifications&action=satellite_digest\`; ручная отправка — кнопки flush на странице.
4. Автоотправка: \`notifyDigestFlush()\` из cron DLE.

## Статистика [#статистика]

Сводка по подпискам и событиям за период (читает таблицы основного модуля, своих таблиц нет).

1. Откройте \`?mod=notifications&action=satellite_stats\`.
2. При необходимости скорректируйте период во вкладках **DLE Уведомления → Настройки**.
3. Право просмотра: \`notifications_stats_view\`.

## Как сателлит подключается к ядру [#как-сателлит-подключается-к-ядру]

1. Каталог \`Notifications*\` с \`boot.php\` и \`->extends('notifications')\` в манифесте.
2. Core \`ModuleExtensionMerger\` подмешивает menu / pages / ajax / вкладки settings в host \`mod=notifications\`.
3. \`SatelliteLoader::boot()\` подключает boot-файлы (каналы, cron-функции) и чистит устаревшие \`admin_sections\`.
4. В boot: \`ChannelRegistry::instance()->register(…)\` и/или глобальные \`notify*\`; \`AdminSections::remove(…)\` для своего mod.
5. Опционально: \`permissions.defs.php\`, \`settings.schema.php\` (поля уходят во вкладки host).

Свой канал с нуля: [Свой канал доставки](./custom_channel).

## Бандл и апселл [#бандл-и-апселл]

| Слой    | Состав                                                 |
| ------- | ------------------------------------------------------ |
| База    | Inbox, подписки, сайт / почта / ЛС, шаблоны, \`notify*\` |
| Premium | Telegram + дайджест + статистика                       |

В документации и карточке продукта указывайте:

* база закрывает колокольчик и подписки;
* Telegram — мессенджер без отдельного inbox-приложения;
* дайджест — меньше писем при высокой активности;
* статистика — контроль охвата для админа.

## См. также [#см-также]

* [Установка](../install)
* [Свой канал доставки](./custom_channel)
* [Кастомное событие](./custom_event)
* [Права групп](./permissions)
`,o={contents:[{heading:void 0,content:"**Сателлиты** — модули DevCraft рядом с `Notifications` с `extends('notifications')`. Каналы и public AJAX остаются у сателлита; админ-UI встраивается в **DLE Уведомления** (вкладки настроек + host `action`)."},{heading:void 0,content:`В архиве плагина лежат каталоги:`},{heading:void 0,content:"`devcraft/src/modules/NotificationsTelegram`"},{heading:void 0,content:"`devcraft/src/modules/NotificationsDigest`"},{heading:void 0,content:"`devcraft/src/modules/NotificationsStats`"},{heading:void 0,content:"На дашборде **DLE Уведомления** блок «Сателлиты» ведёт на host-URL (`?mod=notifications&action=satellite_*`). Отдельных пунктов сайдбара DLE для сателлитов нет."},{heading:void 0,content:"Базовый модуль работает без сателлитов (сайт / почта / ЛС). Telegram, дайджест и статистика — расширенный бандл. В манифесте сателлита: `->extends('notifications')`."},{heading:`быстрый-доступ`,content:`Модуль`},{heading:`быстрый-доступ`,content:`Админка`},{heading:`быстрый-доступ`,content:`Что настраивать`},{heading:`быстрый-доступ`,content:`Telegram`},{heading:`быстрый-доступ`,content:"`?mod=notifications&action=satellite_telegram`"},{heading:`быстрый-доступ`,content:`tools; поля бота — вкладки **Настройки** host`},{heading:`быстрый-доступ`,content:`Дайджест`},{heading:`быстрый-доступ`,content:"`?mod=notifications&action=satellite_digest`"},{heading:`быстрый-доступ`,content:`очередь; поля — вкладки **Настройки** host`},{heading:`быстрый-доступ`,content:`Статистика`},{heading:`быстрый-доступ`,content:"`?mod=notifications&action=satellite_stats`"},{heading:`быстрый-доступ`,content:`сводка; период — вкладки **Настройки** host`},{heading:`быстрый-доступ`,content:"Поля конфигурации сателлитов также на `?mod=notifications&action=settings` (объединённая схема)."},{heading:`быстрый-доступ`,content:`Права групп для сателлитов задаются на странице **DLE Уведомления → Права групп** (defs подхватываются автоматически).`},{heading:`telegram`,content:`Доставка в чат Telegram после привязки аккаунта через deep-link бота.`},{heading:`настройка`,content:"Создайте бота у `@BotFather`, скопируйте токен и username."},{heading:`настройка`,content:"Откройте **DLE Уведомления → Настройки** (вкладки Telegram) или `?mod=notifications&action=satellite_telegram`."},{heading:`настройка`,content:"Включите канал, укажите токен и имя бота (без `@`)."},{heading:`настройка`,content:"Выдайте группе право `notifications_receive_telegram`."},{heading:`настройка`,content:`В кабинете пользователя / теме добавьте блок привязки:`},{heading:`настройка`,content:"Cron DLE вызывает `notifyTelegramPollUpdates()` (патч в `engine/modules/cron.php` из install) — разбирает `/start ТОКЕН` и сохраняет `chat_id`."},{heading:`настройка`,content:`На странице настроек: «Получить ссылку привязки», «Проверить привязки», «Тестовое сообщение».`},{heading:`composer`,content:"Сателлиту нужен пакет `luzrain/telegram-bot-api` в `devcraft/composer.json` (см. манифест модуля)."},{heading:`дайджест`,content:`Вместо мгновенной почты / ЛС / Telegram складывает сообщения в очередь и шлёт сводку по интервалу.`},{heading:`настройка-1`,content:"**DLE Уведомления → Настройки** (вкладки дайджеста): включить, интервал (мин), каналы (`email`, `pm`, `telegram`), лимит записей в одном письме."},{heading:`настройка-1`,content:`Канал &#x2A;*«на сайте»** дайджестом не откладывается.`},{heading:`настройка-1`,content:"Очередь: `?mod=notifications&action=satellite_digest`; ручная отправка — кнопки flush на странице."},{heading:`настройка-1`,content:"Автоотправка: `notifyDigestFlush()` из cron DLE."},{heading:`статистика`,content:`Сводка по подпискам и событиям за период (читает таблицы основного модуля, своих таблиц нет).`},{heading:`статистика`,content:"Откройте `?mod=notifications&action=satellite_stats`."},{heading:`статистика`,content:`При необходимости скорректируйте период во вкладках **DLE Уведомления → Настройки**.`},{heading:`статистика`,content:"Право просмотра: `notifications_stats_view`."},{heading:`как-сателлит-подключается-к-ядру`,content:"Каталог `Notifications*` с `boot.php` и `->extends('notifications')` в манифесте."},{heading:`как-сателлит-подключается-к-ядру`,content:"Core `ModuleExtensionMerger` подмешивает menu / pages / ajax / вкладки settings в host `mod=notifications`."},{heading:`как-сателлит-подключается-к-ядру`,content:"`SatelliteLoader::boot()` подключает boot-файлы (каналы, cron-функции) и чистит устаревшие `admin_sections`."},{heading:`как-сателлит-подключается-к-ядру`,content:"В boot: `ChannelRegistry::instance()->register(…)` и/или глобальные `notify*`; `AdminSections::remove(…)` для своего mod."},{heading:`как-сателлит-подключается-к-ядру`,content:"Опционально: `permissions.defs.php`, `settings.schema.php` (поля уходят во вкладки host)."},{heading:`как-сателлит-подключается-к-ядру`,content:`Свой канал с нуля: Свой канал доставки.`},{heading:`бандл-и-апселл`,content:`Слой`},{heading:`бандл-и-апселл`,content:`Состав`},{heading:`бандл-и-апселл`,content:`База`},{heading:`бандл-и-апселл`,content:"Inbox, подписки, сайт / почта / ЛС, шаблоны, `notify*`"},{heading:`бандл-и-апселл`,content:`Premium`},{heading:`бандл-и-апселл`,content:`Telegram + дайджест + статистика`},{heading:`бандл-и-апселл`,content:`В документации и карточке продукта указывайте:`},{heading:`бандл-и-апселл`,content:`база закрывает колокольчик и подписки;`},{heading:`бандл-и-апселл`,content:`Telegram — мессенджер без отдельного inbox-приложения;`},{heading:`бандл-и-апселл`,content:`дайджест — меньше писем при высокой активности;`},{heading:`бандл-и-апселл`,content:`статистика — контроль охвата для админа.`},{heading:`см-также`,content:`Установка`},{heading:`см-также`,content:`Свой канал доставки`},{heading:`см-также`,content:`Кастомное событие`},{heading:`см-также`,content:`Права групп`}],headings:[{id:`быстрый-доступ`,content:`Быстрый доступ`},{id:`telegram`,content:`Telegram`},{id:`настройка`,content:`Настройка`},{id:`composer`,content:`Composer`},{id:`дайджест`,content:`Дайджест`},{id:`настройка-1`,content:`Настройка`},{id:`статистика`,content:`Статистика`},{id:`как-сателлит-подключается-к-ядру`,content:`Как сателлит подключается к ядру`},{id:`бандл-и-апселл`,content:`Бандл и апселл`},{id:`см-также`,content:`См. также`}]},s=[{depth:2,url:`#быстрый-доступ`,title:(0,n.jsx)(n.Fragment,{children:`Быстрый доступ`})},{depth:2,url:`#telegram`,title:(0,n.jsx)(n.Fragment,{children:`Telegram`})},{depth:3,url:`#настройка`,title:(0,n.jsx)(n.Fragment,{children:`Настройка`})},{depth:3,url:`#composer`,title:(0,n.jsx)(n.Fragment,{children:`Composer`})},{depth:2,url:`#дайджест`,title:(0,n.jsx)(n.Fragment,{children:`Дайджест`})},{depth:3,url:`#настройка-1`,title:(0,n.jsx)(n.Fragment,{children:`Настройка`})},{depth:2,url:`#статистика`,title:(0,n.jsx)(n.Fragment,{children:`Статистика`})},{depth:2,url:`#как-сателлит-подключается-к-ядру`,title:(0,n.jsx)(n.Fragment,{children:`Как сателлит подключается к ядру`})},{depth:2,url:`#бандл-и-апселл`,title:(0,n.jsx)(n.Fragment,{children:`Бандл и апселл`})},{depth:2,url:`#см-также`,title:(0,n.jsx)(n.Fragment,{children:`См. также`})}];function c(e){let t={a:`a`,code:`code`,h2:`h2`,h3:`h3`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,span:`span`,strong:`strong`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,ul:`ul`,...e.components},{Callout:r}=t;return r||u(`Callout`,!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Сателлиты`}),` — модули DevCraft рядом с `,(0,n.jsx)(t.code,{children:`Notifications`}),` с `,(0,n.jsx)(t.code,{children:`extends('notifications')`}),`. Каналы и public AJAX остаются у сателлита; админ-UI встраивается в `,(0,n.jsx)(t.strong,{children:`DLE Уведомления`}),` (вкладки настроек + host `,(0,n.jsx)(t.code,{children:`action`}),`).`]}),`
`,(0,n.jsx)(t.p,{children:`В архиве плагина лежат каталоги:`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.code,{children:`devcraft/src/modules/NotificationsTelegram`})}),`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.code,{children:`devcraft/src/modules/NotificationsDigest`})}),`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.code,{children:`devcraft/src/modules/NotificationsStats`})}),`
`]}),`
`,(0,n.jsxs)(t.p,{children:[`На дашборде `,(0,n.jsx)(t.strong,{children:`DLE Уведомления`}),` блок «Сателлиты» ведёт на host-URL (`,(0,n.jsx)(t.code,{children:`?mod=notifications&action=satellite_*`}),`). Отдельных пунктов сайдбара DLE для сателлитов нет.`]}),`
`,(0,n.jsx)(r,{type:`info`,children:(0,n.jsxs)(t.p,{children:[`Базовый модуль работает без сателлитов (сайт / почта / ЛС). Telegram, дайджест и статистика — расширенный бандл. В манифесте сателлита: `,(0,n.jsx)(t.code,{children:`->extends('notifications')`}),`.`]})}),`
`,(0,n.jsx)(t.h2,{id:`быстрый-доступ`,children:`Быстрый доступ`}),`
`,(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`Модуль`}),(0,n.jsx)(t.th,{children:`Админка`}),(0,n.jsx)(t.th,{children:`Что настраивать`})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`Telegram`}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:`?mod=notifications&action=satellite_telegram`})}),(0,n.jsxs)(t.td,{children:[`tools; поля бота — вкладки `,(0,n.jsx)(t.strong,{children:`Настройки`}),` host`]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`Дайджест`}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:`?mod=notifications&action=satellite_digest`})}),(0,n.jsxs)(t.td,{children:[`очередь; поля — вкладки `,(0,n.jsx)(t.strong,{children:`Настройки`}),` host`]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`Статистика`}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:`?mod=notifications&action=satellite_stats`})}),(0,n.jsxs)(t.td,{children:[`сводка; период — вкладки `,(0,n.jsx)(t.strong,{children:`Настройки`}),` host`]})]})]})]}),`
`,(0,n.jsxs)(t.p,{children:[`Поля конфигурации сателлитов также на `,(0,n.jsx)(t.code,{children:`?mod=notifications&action=settings`}),` (объединённая схема).`]}),`
`,(0,n.jsxs)(t.p,{children:[`Права групп для сателлитов задаются на странице `,(0,n.jsx)(t.strong,{children:`DLE Уведомления → Права групп`}),` (defs подхватываются автоматически).`]}),`
`,(0,n.jsx)(t.h2,{id:`telegram`,children:`Telegram`}),`
`,(0,n.jsx)(t.p,{children:`Доставка в чат Telegram после привязки аккаунта через deep-link бота.`}),`
`,(0,n.jsx)(t.h3,{id:`настройка`,children:`Настройка`}),`
`,(0,n.jsxs)(t.ol,{children:[`
`,(0,n.jsxs)(t.li,{children:[`Создайте бота у `,(0,n.jsx)(t.code,{children:`@BotFather`}),`, скопируйте токен и username.`]}),`
`,(0,n.jsxs)(t.li,{children:[`Откройте `,(0,n.jsx)(t.strong,{children:`DLE Уведомления → Настройки`}),` (вкладки Telegram) или `,(0,n.jsx)(t.code,{children:`?mod=notifications&action=satellite_telegram`}),`.`]}),`
`,(0,n.jsxs)(t.li,{children:[`Включите канал, укажите токен и имя бота (без `,(0,n.jsx)(t.code,{children:`@`}),`).`]}),`
`,(0,n.jsxs)(t.li,{children:[`Выдайте группе право `,(0,n.jsx)(t.code,{children:`notifications_receive_telegram`}),`.`]}),`
`,(0,n.jsx)(t.li,{children:`В кабинете пользователя / теме добавьте блок привязки:`}),`
`]}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`{include file="devcraft/src/modules/NotificationsTelegram/Site/web.php?focus=bind"}`})})})})}),`
`,(0,n.jsxs)(t.ol,{start:`6`,children:[`
`,(0,n.jsxs)(t.li,{children:[`Cron DLE вызывает `,(0,n.jsx)(t.code,{children:`notifyTelegramPollUpdates()`}),` (патч в `,(0,n.jsx)(t.code,{children:`engine/modules/cron.php`}),` из install) — разбирает `,(0,n.jsx)(t.code,{children:`/start ТОКЕН`}),` и сохраняет `,(0,n.jsx)(t.code,{children:`chat_id`}),`.`]}),`
`]}),`
`,(0,n.jsx)(t.p,{children:`На странице настроек: «Получить ссылку привязки», «Проверить привязки», «Тестовое сообщение».`}),`
`,(0,n.jsx)(t.h3,{id:`composer`,children:`Composer`}),`
`,(0,n.jsxs)(t.p,{children:[`Сателлиту нужен пакет `,(0,n.jsx)(t.code,{children:`luzrain/telegram-bot-api`}),` в `,(0,n.jsx)(t.code,{children:`devcraft/composer.json`}),` (см. манифест модуля).`]}),`
`,(0,n.jsx)(t.h2,{id:`дайджест`,children:`Дайджест`}),`
`,(0,n.jsx)(t.p,{children:`Вместо мгновенной почты / ЛС / Telegram складывает сообщения в очередь и шлёт сводку по интервалу.`}),`
`,(0,n.jsx)(t.h3,{id:`настройка-1`,children:`Настройка`}),`
`,(0,n.jsxs)(t.ol,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:`DLE Уведомления → Настройки`}),` (вкладки дайджеста): включить, интервал (мин), каналы (`,(0,n.jsx)(t.code,{children:`email`}),`, `,(0,n.jsx)(t.code,{children:`pm`}),`, `,(0,n.jsx)(t.code,{children:`telegram`}),`), лимит записей в одном письме.`]}),`
`,(0,n.jsxs)(t.li,{children:[`Канал `,(0,n.jsx)(t.strong,{children:`«на сайте»`}),` дайджестом не откладывается.`]}),`
`,(0,n.jsxs)(t.li,{children:[`Очередь: `,(0,n.jsx)(t.code,{children:`?mod=notifications&action=satellite_digest`}),`; ручная отправка — кнопки flush на странице.`]}),`
`,(0,n.jsxs)(t.li,{children:[`Автоотправка: `,(0,n.jsx)(t.code,{children:`notifyDigestFlush()`}),` из cron DLE.`]}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`статистика`,children:`Статистика`}),`
`,(0,n.jsx)(t.p,{children:`Сводка по подпискам и событиям за период (читает таблицы основного модуля, своих таблиц нет).`}),`
`,(0,n.jsxs)(t.ol,{children:[`
`,(0,n.jsxs)(t.li,{children:[`Откройте `,(0,n.jsx)(t.code,{children:`?mod=notifications&action=satellite_stats`}),`.`]}),`
`,(0,n.jsxs)(t.li,{children:[`При необходимости скорректируйте период во вкладках `,(0,n.jsx)(t.strong,{children:`DLE Уведомления → Настройки`}),`.`]}),`
`,(0,n.jsxs)(t.li,{children:[`Право просмотра: `,(0,n.jsx)(t.code,{children:`notifications_stats_view`}),`.`]}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`как-сателлит-подключается-к-ядру`,children:`Как сателлит подключается к ядру`}),`
`,(0,n.jsxs)(t.ol,{children:[`
`,(0,n.jsxs)(t.li,{children:[`Каталог `,(0,n.jsx)(t.code,{children:`Notifications*`}),` с `,(0,n.jsx)(t.code,{children:`boot.php`}),` и `,(0,n.jsx)(t.code,{children:`->extends('notifications')`}),` в манифесте.`]}),`
`,(0,n.jsxs)(t.li,{children:[`Core `,(0,n.jsx)(t.code,{children:`ModuleExtensionMerger`}),` подмешивает menu / pages / ajax / вкладки settings в host `,(0,n.jsx)(t.code,{children:`mod=notifications`}),`.`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`SatelliteLoader::boot()`}),` подключает boot-файлы (каналы, cron-функции) и чистит устаревшие `,(0,n.jsx)(t.code,{children:`admin_sections`}),`.`]}),`
`,(0,n.jsxs)(t.li,{children:[`В boot: `,(0,n.jsx)(t.code,{children:`ChannelRegistry::instance()->register(…)`}),` и/или глобальные `,(0,n.jsx)(t.code,{children:`notify*`}),`; `,(0,n.jsx)(t.code,{children:`AdminSections::remove(…)`}),` для своего mod.`]}),`
`,(0,n.jsxs)(t.li,{children:[`Опционально: `,(0,n.jsx)(t.code,{children:`permissions.defs.php`}),`, `,(0,n.jsx)(t.code,{children:`settings.schema.php`}),` (поля уходят во вкладки host).`]}),`
`]}),`
`,(0,n.jsxs)(t.p,{children:[`Свой канал с нуля: `,(0,n.jsx)(t.a,{href:`./custom_channel`,children:`Свой канал доставки`}),`.`]}),`
`,(0,n.jsx)(t.h2,{id:`бандл-и-апселл`,children:`Бандл и апселл`}),`
`,(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`Слой`}),(0,n.jsx)(t.th,{children:`Состав`})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`База`}),(0,n.jsxs)(t.td,{children:[`Inbox, подписки, сайт / почта / ЛС, шаблоны, `,(0,n.jsx)(t.code,{children:`notify*`})]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`Premium`}),(0,n.jsx)(t.td,{children:`Telegram + дайджест + статистика`})]})]})]}),`
`,(0,n.jsx)(t.p,{children:`В документации и карточке продукта указывайте:`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsx)(t.li,{children:`база закрывает колокольчик и подписки;`}),`
`,(0,n.jsx)(t.li,{children:`Telegram — мессенджер без отдельного inbox-приложения;`}),`
`,(0,n.jsx)(t.li,{children:`дайджест — меньше писем при высокой активности;`}),`
`,(0,n.jsx)(t.li,{children:`статистика — контроль охвата для админа.`}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`см-также`,children:`См. также`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`../install`,children:`Установка`})}),`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`./custom_channel`,children:`Свой канал доставки`})}),`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`./custom_event`,children:`Кастомное событие`})}),`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`./permissions`,children:`Права групп`})}),`
`]})]})}function l(e={}){let{wrapper:t}=e.components||{};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}function u(e,t){throw Error(`Expected `+(t?`component`:`object`)+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}export{a as _markdown,l as default,r as frontmatter,i as lastModified,o as structuredData,s as toc};