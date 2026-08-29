import{r as e}from"./rolldown-runtime-QTnfLwEv.js";import{t}from"./jsx-runtime-By8HlURe.js";var n=e(t()),r={title:`Начало работы`,description:`Обзор модуля DLE Уведомления: каналы, подписки, требования и первые шаги`,version:`200.1.0`},i=new Date(1788011088e3),a=`

## Введение [#введение]

**DLE Уведомления** — дополнительный модуль [DevCraft Admin](../../devcraft_admin/getting_started) для DataLife Engine 20. Модуль рассылает сообщения по событиям сайта: правка новости, новый комментарий, упоминание \`@ник\`, рейтинг, удаление комментария, подписка на автора, модерация и другие сценарии.

Каналы доставки:

* сайт — колокольчик и стена (лента);
* почта;
* личные сообщения DLE.

Пользователь подписывается на новость, категорию, автора, тег, доп. поле или на все новые публикации и получает только подходящие события. Тексты писем, ЛС и записей ленты задаются файлами \`.tpl\` в теме сайта.

Исходники: [DevCraftClub/DLE-Notifications](https://github.com/DevCraftClub/DLE-Notifications).

## Основные возможности [#основные-возможности]

* кнопка подписки у новости, категории и других объектов;
* стена уведомлений и счётчик непрочитанных с автообновлением;
* отдельная страница \`/notifications/\` (\`do=notifications\`);
* шаблоны сценариев, писем и ленты в теме сайта (если файла нет — берётся \`Default\`);
* права по группам DLE и настройки пользователя (почта / ЛС);
* функции \`notify*\` для своего кода и запросы ленты без перезагрузки страницы (\`list\`, \`unread_count\`, \`mark_read\` и др.);
* свои события из дополнения DLE или другого модуля.

## Требования [#требования]

* DataLife Engine &#x2A;*20.0+**
* PHP &#x2A;*8.3+**
* [DevCraft Admin](../../devcraft_admin/getting_started) &#x2A;*200.4.0+**

Полный перечень шагов: [Установка](./install).

## Быстрый старт [#быстрый-старт]

### 1. Установка [#1-установка]

[Инструкция по установке](./install) — архив, автозагрузка классов, таблицы в базе, копирование шаблонов темы.

### 2. Первое использование [#2-первое-использование]

В шапке темы (\`main.tpl\`):

\`\`\`
{include file="devcraft/src/modules/Notifications/Site/web.php?focus=css"}
\`\`\`

Полная новость (\`fullstory.tpl\`):

\`\`\`
{include file="devcraft/src/modules/Notifications/Site/web.php?focus=subscribe&stype=news&id={news-id}"}
\`\`\`

В меню — колокольчик; перед \`</body>\` — скрипты:

\`\`\`
{include file="devcraft/src/modules/Notifications/Site/web.php?focus=badge"}
…
{include file="devcraft/src/modules/Notifications/Site/web.php?focus=js"}
\`\`\`

Стена в профиле или на [странице уведомлений](./guides/notifications_page):

\`\`\`
{include file="devcraft/src/modules/Notifications/Site/web.php?focus=wall"}
\`\`\`

Отправка из PHP (после установки функции \`notify*\` доступны на всём сайте):

\`\`\`php
if (function_exists('notifySend')) {
	notifySend($userId, 'Текст уведомления');
}
\`\`\`

### 3. Дополнительная настройка [#3-дополнительная-настройка]

В панели DevCraft → **DLE Уведомления**: типы подписок, автообновление колокольчика, режим удаления записей ленты, путь к шаблонам. Права групп — отдельная страница модуля. Подробнее: [права](./guides/permissions), [настройки пользователя](./guides/user_prefs).

## Структура проекта [#структура-проекта]

Корень сайта DLE после установки плагина:

<Files>
  <Folder name="Корень DLE">
    <Folder name="devcraft">
      <Folder name="locales">
        <Folder name="ru_RU">
          <File name="dle_notifications.xliff" />
        </Folder>
      </Folder>

      <Folder name="config">
        <File name="notifications.json" />
      </Folder>

      <Folder name="src">
        <Folder name="modules">
          <Folder name="Notifications (модуль панели DevCraft)">
            <File name="manifest.php" />

            <File name="settings.schema.php" />

            <File name="permissions.defs.php" />

            <File name="changelog.data.php" />

            <File name="NotificationsIdentity.php" />

            <Folder name="Ajax">
              <File name="SettingsHandler.php" />

              <File name="PermissionsHandler.php" />

              <Folder name="Public">
                <File name="ListHandler.php" />

                <File name="UnreadCountHandler.php" />

                <File name="MarkReadHandler.php" />

                <File name="DeleteHandler.php" />

                <File name="SubscribeHandler.php" />

                <File name="UnsubscribeHandler.php" />

                <File name="UnsubscribeTokenHandler.php" />
              </Folder>
            </Folder>

            <Folder name="Pages">
              <File name="ChangelogPage.php" />

              <File name="DashboardPage.php" />

              <File name="SettingsPage.php" />

              <File name="PermissionsPage.php" />
            </Folder>

            <Folder name="Services">
              <File name="Notify.php" />

              <File name="NotificationService.php" />

              <File name="DeliveryService.php" />

              <File name="SubscriptionService.php" />

              <File name="TemplateRenderService.php" />

              <File name="…" />
            </Folder>

            <Folder name="Models">
              <File name="Notification.php" />

              <File name="Subscription.php" />

              <File name="GroupPermission.php" />
            </Folder>

            <Folder name="Repositories">
              <File name="NotificationRepository.php" />

              <File name="SubscriptionRepository.php" />

              <File name="GroupPermissionRepository.php" />
            </Folder>

            <Folder name="Enums">
              <File name="SubscriptionType.php" />
            </Folder>

            <Folder name="templates">
              <File name="dashboard.twig" />

              <File name="settings.twig" />

              <File name="permissions.twig" />
            </Folder>

            <Folder name="Site">
              <File name="web.php" />

              <File name="page.php" />

              <File name="include.php" />
            </Folder>

            <Folder name="Public">
              <File name="timeago.full.min.js" />

              <File name=".htaccess" />
            </Folder>
          </Folder>
        </Folder>
      </Folder>
    </Folder>

    <Folder name="engine">
      <Folder name="inc">
        <File name="notifications.php" />
      </Folder>
    </Folder>

    <Folder name="templates">
      <Folder name="{тема}">
        <Folder name="devcraft">
          <Folder name="notifications">
            <File name="badge.tpl" />

            <File name="wall.tpl" />

            <File name="item.tpl" />

            <File name="item_actions.tpl" />

            <File name="subscribe.tpl" />

            <File name="page.tpl" />

            <Folder name="assets">
              <File name="notifications.css" />

              <File name="notifications.js" />
            </Folder>

            <Folder name="scenarios" />

            <Folder name="wrappers" />

            <Folder name="subscribe" />
          </Folder>
        </Folder>
      </Folder>
    </Folder>
  </Folder>
</Files>

* \`engine/inc/notifications.php\` — точка входа в админку DLE: открывает модуль в DevCraft.
* \`Site/web.php\` — подключение на сайте через \`{include}\` (\`focus=css|js|badge|wall|subscribe\`).
* \`Site/page.php\` + \`page.tpl\` — страница \`do=notifications\`.
* \`Site/include.php\` — procedural API \`notify*\` (подключает плагин после bootstrap).
* \`templates/{тема}/devcraft/notifications/\` — разметка и стили/скрипты публичного сайта (не шаблоны админки).

## Концепции [#концепции]

### Каналы и лента [#каналы-и-лента]

Уведомление создаётся в ленте сайта и при необходимости дублируется в почту и ЛС. Колокольчик (\`focus=badge\`) показывает счётчик; стена (\`focus=wall\`) — список с действиями «прочитать» / «открыть».

### Подписки [#подписки]

Тип (\`news\`, \`cat\`, \`user\`, \`tag\`, \`xfield\`, \`all\`) задаёт, на что подписан пользователь. Кнопка на странице — \`focus=subscribe\` с \`stype\` и \`id\`. Подробнее: [типы подписок](./guides/subscription_types).

### Сценарии и шаблоны [#сценарии-и-шаблоны]

Текст события берётся из \`scenarios/*.tpl\` темы; письма и ЛС — из \`wrappers/\`. Теги вроде \`{title}\`, \`{full-link}\`, \`{unsubscribe-url}\` описаны в [шаблонах сценариев](./guides/scenario_templates).

### Параметр \`focus\` во вставке [#параметр-focus-во-вставке]

| \`focus\`                        | Куда         | Что                                       |
| ------------------------------ | ------------ | ----------------------------------------- |
| \`css\`                          | шапка        | стили и служебные meta для автообновления |
| \`js\`                           | низ страницы | скрипты                                   |
| \`badge\` / \`wall\` / \`subscribe\` | разметка     | колокольчик, стена, кнопка подписки       |

Полная вставка: [Вставка в шаблоны](./guides/subscribe_wall). Подробные сниппеты cat / tag / xfield / user: [Include в шаблонах темы](./guides/template_includes).

## Разделы документации [#разделы-документации]

<Cards>
  <Card title="Установка" href="/dev/dle/notifications/200.1.0/install">
    Архив, автозагрузка, таблицы, копирование шаблонов
  </Card>

  <Card title="Вставка в шаблоны" href="/dev/dle/notifications/200.1.0/guides/subscribe_wall">
    Подписка, стена, колокольчик, стили и скрипты
  </Card>

  <Card title="Include в шаблонах" href="/dev/dle/notifications/200.1.0/guides/template_includes">
    Места в теме и сниппеты news/cat/tag/xfield/user/all
  </Card>

  <Card title="Страница уведомлений" href="/dev/dle/notifications/200.1.0/guides/notifications_page">
    do=notifications и ЧПУ /notifications/
  </Card>

  <Card title="Типы подписок" href="/dev/dle/notifications/200.1.0/guides/subscription_types">
    Новость, категория, автор, тег, доп. поле, все
  </Card>

  <Card title="Шаблоны и теги" href="/dev/dle/notifications/200.1.0/guides/scenario_templates">
    Сценарии, письма, подписка, лента
  </Card>

  <Card title="Своё событие" href="/dev/dle/notifications/200.1.0/guides/custom_event">
    notifySend и сценарий из дополнения или модуля
  </Card>
</Cards>

## Рекомендуемая последовательность обучения [#рекомендуемая-последовательность-обучения]

1. **Новичок?** Начните с [установки](./install).
2. **Подключить тему?** Смотрите [вставку в шаблоны](./guides/subscribe_wall), [include](./guides/template_includes) и [страницу уведомлений](./guides/notifications_page).
3. **Свои тексты событий?** [Шаблоны сценариев](./guides/scenario_templates) и [сценарии](./guides/scenarios).
4. **Свой код?** [Своё событие](./guides/custom_event), [запросы ленты](./guides/inbox_api), [справочник Notify](./reference/Notify).
5. **Обновления?** [История изменений](./changelog).

## Получение помощи [#получение-помощи]

* [Справочник](./reference)
* [Исходники на GitHub](https://github.com/DevCraftClub/DLE-Notifications)
* [Сообщить об ошибке](https://github.com/DevCraftClub/DLE-Notifications/issues)

## Следующие шаги [#следующие-шаги]

* [Установка](./install)
* [Вставка в шаблоны](./guides/subscribe_wall)
* [Страница уведомлений](./guides/notifications_page)
* [Справочник](./reference)
`,o={contents:[{heading:`введение`,content:"**DLE Уведомления** — дополнительный модуль DevCraft Admin для DataLife Engine 20. Модуль рассылает сообщения по событиям сайта: правка новости, новый комментарий, упоминание `@ник`, рейтинг, удаление комментария, подписка на автора, модерация и другие сценарии."},{heading:`введение`,content:`Каналы доставки:`},{heading:`введение`,content:`сайт — колокольчик и стена (лента);`},{heading:`введение`,content:`почта;`},{heading:`введение`,content:`личные сообщения DLE.`},{heading:`введение`,content:"Пользователь подписывается на новость, категорию, автора, тег, доп. поле или на все новые публикации и получает только подходящие события. Тексты писем, ЛС и записей ленты задаются файлами `.tpl` в теме сайта."},{heading:`введение`,content:`Исходники: DevCraftClub/DLE-Notifications.`},{heading:`основные-возможности`,content:`кнопка подписки у новости, категории и других объектов;`},{heading:`основные-возможности`,content:`стена уведомлений и счётчик непрочитанных с автообновлением;`},{heading:`основные-возможности`,content:"отдельная страница `/notifications/` (`do=notifications`);"},{heading:`основные-возможности`,content:"шаблоны сценариев, писем и ленты в теме сайта (если файла нет — берётся `Default`);"},{heading:`основные-возможности`,content:`права по группам DLE и настройки пользователя (почта / ЛС);`},{heading:`основные-возможности`,content:"функции `notify*` для своего кода и запросы ленты без перезагрузки страницы (`list`, `unread_count`, `mark_read` и др.);"},{heading:`основные-возможности`,content:`свои события из дополнения DLE или другого модуля.`},{heading:`требования`,content:`DataLife Engine &#x2A;*20.0+**`},{heading:`требования`,content:`PHP &#x2A;*8.3+**`},{heading:`требования`,content:`DevCraft Admin &#x2A;*200.4.0+**`},{heading:`требования`,content:`Полный перечень шагов: Установка.`},{heading:`1-установка`,content:`Инструкция по установке — архив, автозагрузка классов, таблицы в базе, копирование шаблонов темы.`},{heading:`2-первое-использование`,content:"В шапке темы (`main.tpl`):"},{heading:`2-первое-использование`,content:"Полная новость (`fullstory.tpl`):"},{heading:`2-первое-использование`,content:"В меню — колокольчик; перед `</body>` — скрипты:"},{heading:`2-первое-использование`,content:`Стена в профиле или на странице уведомлений:`},{heading:`2-первое-использование`,content:"Отправка из PHP (после установки функции `notify*` доступны на всём сайте):"},{heading:`3-дополнительная-настройка`,content:`В панели DevCraft → **DLE Уведомления**: типы подписок, автообновление колокольчика, режим удаления записей ленты, путь к шаблонам. Права групп — отдельная страница модуля. Подробнее: права, настройки пользователя.`},{heading:`структура-проекта`,content:`Корень сайта DLE после установки плагина:`},{heading:`структура-проекта`,content:`<File name="dle_notifications.xliff" />`},{heading:`структура-проекта`,content:`<File name="notifications.json" />`},{heading:`структура-проекта`,content:`<File name="manifest.php" />`},{heading:`структура-проекта`,content:`<File name="settings.schema.php" />`},{heading:`структура-проекта`,content:`<File name="permissions.defs.php" />`},{heading:`структура-проекта`,content:`<File name="changelog.data.php" />`},{heading:`структура-проекта`,content:`<File name="NotificationsIdentity.php" />`},{heading:`структура-проекта`,content:`<File name="SettingsHandler.php" />`},{heading:`структура-проекта`,content:`<File name="PermissionsHandler.php" />`},{heading:`структура-проекта`,content:`<File name="ListHandler.php" />`},{heading:`структура-проекта`,content:`<File name="UnreadCountHandler.php" />`},{heading:`структура-проекта`,content:`<File name="MarkReadHandler.php" />`},{heading:`структура-проекта`,content:`<File name="DeleteHandler.php" />`},{heading:`структура-проекта`,content:`<File name="SubscribeHandler.php" />`},{heading:`структура-проекта`,content:`<File name="UnsubscribeHandler.php" />`},{heading:`структура-проекта`,content:`<File name="UnsubscribeTokenHandler.php" />`},{heading:`структура-проекта`,content:`<File name="ChangelogPage.php" />`},{heading:`структура-проекта`,content:`<File name="DashboardPage.php" />`},{heading:`структура-проекта`,content:`<File name="SettingsPage.php" />`},{heading:`структура-проекта`,content:`<File name="PermissionsPage.php" />`},{heading:`структура-проекта`,content:`<File name="Notify.php" />`},{heading:`структура-проекта`,content:`<File name="NotificationService.php" />`},{heading:`структура-проекта`,content:`<File name="DeliveryService.php" />`},{heading:`структура-проекта`,content:`<File name="SubscriptionService.php" />`},{heading:`структура-проекта`,content:`<File name="TemplateRenderService.php" />`},{heading:`структура-проекта`,content:`<File name="…" />`},{heading:`структура-проекта`,content:`<File name="Notification.php" />`},{heading:`структура-проекта`,content:`<File name="Subscription.php" />`},{heading:`структура-проекта`,content:`<File name="GroupPermission.php" />`},{heading:`структура-проекта`,content:`<File name="NotificationRepository.php" />`},{heading:`структура-проекта`,content:`<File name="SubscriptionRepository.php" />`},{heading:`структура-проекта`,content:`<File name="GroupPermissionRepository.php" />`},{heading:`структура-проекта`,content:`<File name="SubscriptionType.php" />`},{heading:`структура-проекта`,content:`<File name="dashboard.twig" />`},{heading:`структура-проекта`,content:`<File name="settings.twig" />`},{heading:`структура-проекта`,content:`<File name="permissions.twig" />`},{heading:`структура-проекта`,content:`<File name="web.php" />`},{heading:`структура-проекта`,content:`<File name="page.php" />`},{heading:`структура-проекта`,content:`<File name="include.php" />`},{heading:`структура-проекта`,content:`<File name="timeago.full.min.js" />`},{heading:`структура-проекта`,content:`<File name=".htaccess" />`},{heading:`структура-проекта`,content:`<File name="notifications.php" />`},{heading:`структура-проекта`,content:`<File name="badge.tpl" />`},{heading:`структура-проекта`,content:`<File name="wall.tpl" />`},{heading:`структура-проекта`,content:`<File name="item.tpl" />`},{heading:`структура-проекта`,content:`<File name="item_actions.tpl" />`},{heading:`структура-проекта`,content:`<File name="subscribe.tpl" />`},{heading:`структура-проекта`,content:`<File name="page.tpl" />`},{heading:`структура-проекта`,content:`<File name="notifications.css" />`},{heading:`структура-проекта`,content:`<File name="notifications.js" />`},{heading:`структура-проекта`,content:"`engine/inc/notifications.php` — точка входа в админку DLE: открывает модуль в DevCraft."},{heading:`структура-проекта`,content:"`Site/web.php` — подключение на сайте через `{include}` (`focus=css|js|badge|wall|subscribe`)."},{heading:`структура-проекта`,content:"`Site/page.php` + `page.tpl` — страница `do=notifications`."},{heading:`структура-проекта`,content:"`Site/include.php` — procedural API `notify*` (подключает плагин после bootstrap)."},{heading:`структура-проекта`,content:"`templates/{тема}/devcraft/notifications/` — разметка и стили/скрипты публичного сайта (не шаблоны админки)."},{heading:`каналы-и-лента`,content:"Уведомление создаётся в ленте сайта и при необходимости дублируется в почту и ЛС. Колокольчик (`focus=badge`) показывает счётчик; стена (`focus=wall`) — список с действиями «прочитать» / «открыть»."},{heading:`подписки`,content:"Тип (`news`, `cat`, `user`, `tag`, `xfield`, `all`) задаёт, на что подписан пользователь. Кнопка на странице — `focus=subscribe` с `stype` и `id`. Подробнее: типы подписок."},{heading:`сценарии-и-шаблоны`,content:"Текст события берётся из `scenarios/*.tpl` темы; письма и ЛС — из `wrappers/`. Теги вроде `{title}`, `{full-link}`, `{unsubscribe-url}` описаны в шаблонах сценариев."},{heading:`параметр-focus-во-вставке`,content:"`focus`"},{heading:`параметр-focus-во-вставке`,content:`Куда`},{heading:`параметр-focus-во-вставке`,content:`Что`},{heading:`параметр-focus-во-вставке`,content:"`css`"},{heading:`параметр-focus-во-вставке`,content:`шапка`},{heading:`параметр-focus-во-вставке`,content:`стили и служебные meta для автообновления`},{heading:`параметр-focus-во-вставке`,content:"`js`"},{heading:`параметр-focus-во-вставке`,content:`низ страницы`},{heading:`параметр-focus-во-вставке`,content:`скрипты`},{heading:`параметр-focus-во-вставке`,content:"`badge` / `wall` / `subscribe`"},{heading:`параметр-focus-во-вставке`,content:`разметка`},{heading:`параметр-focus-во-вставке`,content:`колокольчик, стена, кнопка подписки`},{heading:`параметр-focus-во-вставке`,content:`Полная вставка: Вставка в шаблоны. Подробные сниппеты cat / tag / xfield / user: Include в шаблонах темы.`},{heading:`разделы-документации`,content:`Архив, автозагрузка, таблицы, копирование шаблонов`},{heading:`разделы-документации`,content:`Подписка, стена, колокольчик, стили и скрипты`},{heading:`разделы-документации`,content:`Места в теме и сниппеты news/cat/tag/xfield/user/all`},{heading:`разделы-документации`,content:`do=notifications и ЧПУ /notifications/`},{heading:`разделы-документации`,content:`Новость, категория, автор, тег, доп. поле, все`},{heading:`разделы-документации`,content:`Сценарии, письма, подписка, лента`},{heading:`разделы-документации`,content:`notifySend и сценарий из дополнения или модуля`},{heading:`рекомендуемая-последовательность-обучения`,content:`**Новичок?** Начните с установки.`},{heading:`рекомендуемая-последовательность-обучения`,content:`**Подключить тему?** Смотрите вставку в шаблоны, include и страницу уведомлений.`},{heading:`рекомендуемая-последовательность-обучения`,content:`**Свои тексты событий?** Шаблоны сценариев и сценарии.`},{heading:`рекомендуемая-последовательность-обучения`,content:`**Свой код?** Своё событие, запросы ленты, справочник Notify.`},{heading:`рекомендуемая-последовательность-обучения`,content:`**Обновления?** История изменений.`},{heading:`получение-помощи`,content:`Справочник`},{heading:`получение-помощи`,content:`Исходники на GitHub`},{heading:`получение-помощи`,content:`Сообщить об ошибке`},{heading:`следующие-шаги`,content:`Установка`},{heading:`следующие-шаги`,content:`Вставка в шаблоны`},{heading:`следующие-шаги`,content:`Страница уведомлений`},{heading:`следующие-шаги`,content:`Справочник`}],headings:[{id:`введение`,content:`Введение`},{id:`основные-возможности`,content:`Основные возможности`},{id:`требования`,content:`Требования`},{id:`быстрый-старт`,content:`Быстрый старт`},{id:`1-установка`,content:`1\\. Установка`},{id:`2-первое-использование`,content:`2\\. Первое использование`},{id:`3-дополнительная-настройка`,content:`3\\. Дополнительная настройка`},{id:`структура-проекта`,content:`Структура проекта`},{id:`концепции`,content:`Концепции`},{id:`каналы-и-лента`,content:`Каналы и лента`},{id:`подписки`,content:`Подписки`},{id:`сценарии-и-шаблоны`,content:`Сценарии и шаблоны`},{id:`параметр-focus-во-вставке`,content:"Параметр `focus` во вставке"},{id:`разделы-документации`,content:`Разделы документации`},{id:`рекомендуемая-последовательность-обучения`,content:`Рекомендуемая последовательность обучения`},{id:`получение-помощи`,content:`Получение помощи`},{id:`следующие-шаги`,content:`Следующие шаги`}]},s=[{depth:2,url:`#введение`,title:(0,n.jsx)(n.Fragment,{children:`Введение`})},{depth:2,url:`#основные-возможности`,title:(0,n.jsx)(n.Fragment,{children:`Основные возможности`})},{depth:2,url:`#требования`,title:(0,n.jsx)(n.Fragment,{children:`Требования`})},{depth:2,url:`#быстрый-старт`,title:(0,n.jsx)(n.Fragment,{children:`Быстрый старт`})},{depth:3,url:`#1-установка`,title:(0,n.jsx)(n.Fragment,{children:`1. Установка`})},{depth:3,url:`#2-первое-использование`,title:(0,n.jsx)(n.Fragment,{children:`2. Первое использование`})},{depth:3,url:`#3-дополнительная-настройка`,title:(0,n.jsx)(n.Fragment,{children:`3. Дополнительная настройка`})},{depth:2,url:`#структура-проекта`,title:(0,n.jsx)(n.Fragment,{children:`Структура проекта`})},{depth:2,url:`#концепции`,title:(0,n.jsx)(n.Fragment,{children:`Концепции`})},{depth:3,url:`#каналы-и-лента`,title:(0,n.jsx)(n.Fragment,{children:`Каналы и лента`})},{depth:3,url:`#подписки`,title:(0,n.jsx)(n.Fragment,{children:`Подписки`})},{depth:3,url:`#сценарии-и-шаблоны`,title:(0,n.jsx)(n.Fragment,{children:`Сценарии и шаблоны`})},{depth:3,url:`#параметр-focus-во-вставке`,title:(0,n.jsxs)(n.Fragment,{children:[`Параметр `,(0,n.jsx)(`code`,{children:`focus`}),` во вставке`]})},{depth:2,url:`#разделы-документации`,title:(0,n.jsx)(n.Fragment,{children:`Разделы документации`})},{depth:2,url:`#рекомендуемая-последовательность-обучения`,title:(0,n.jsx)(n.Fragment,{children:`Рекомендуемая последовательность обучения`})},{depth:2,url:`#получение-помощи`,title:(0,n.jsx)(n.Fragment,{children:`Получение помощи`})},{depth:2,url:`#следующие-шаги`,title:(0,n.jsx)(n.Fragment,{children:`Следующие шаги`})}];function c(e){let t={a:`a`,code:`code`,h2:`h2`,h3:`h3`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,span:`span`,strong:`strong`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,ul:`ul`,...e.components},{Card:r,Cards:i,File:a,Files:o,Folder:s}=t;return r||u(`Card`,!0),i||u(`Cards`,!0),a||u(`File`,!0),o||u(`Files`,!0),s||u(`Folder`,!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h2,{id:`введение`,children:`Введение`}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`DLE Уведомления`}),` — дополнительный модуль `,(0,n.jsx)(t.a,{href:`../../devcraft_admin/getting_started`,children:`DevCraft Admin`}),` для DataLife Engine 20. Модуль рассылает сообщения по событиям сайта: правка новости, новый комментарий, упоминание `,(0,n.jsx)(t.code,{children:`@ник`}),`, рейтинг, удаление комментария, подписка на автора, модерация и другие сценарии.`]}),`
`,(0,n.jsx)(t.p,{children:`Каналы доставки:`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsx)(t.li,{children:`сайт — колокольчик и стена (лента);`}),`
`,(0,n.jsx)(t.li,{children:`почта;`}),`
`,(0,n.jsx)(t.li,{children:`личные сообщения DLE.`}),`
`]}),`
`,(0,n.jsxs)(t.p,{children:[`Пользователь подписывается на новость, категорию, автора, тег, доп. поле или на все новые публикации и получает только подходящие события. Тексты писем, ЛС и записей ленты задаются файлами `,(0,n.jsx)(t.code,{children:`.tpl`}),` в теме сайта.`]}),`
`,(0,n.jsxs)(t.p,{children:[`Исходники: `,(0,n.jsx)(t.a,{href:`https://github.com/DevCraftClub/DLE-Notifications`,children:`DevCraftClub/DLE-Notifications`}),`.`]}),`
`,(0,n.jsx)(t.h2,{id:`основные-возможности`,children:`Основные возможности`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsx)(t.li,{children:`кнопка подписки у новости, категории и других объектов;`}),`
`,(0,n.jsx)(t.li,{children:`стена уведомлений и счётчик непрочитанных с автообновлением;`}),`
`,(0,n.jsxs)(t.li,{children:[`отдельная страница `,(0,n.jsx)(t.code,{children:`/notifications/`}),` (`,(0,n.jsx)(t.code,{children:`do=notifications`}),`);`]}),`
`,(0,n.jsxs)(t.li,{children:[`шаблоны сценариев, писем и ленты в теме сайта (если файла нет — берётся `,(0,n.jsx)(t.code,{children:`Default`}),`);`]}),`
`,(0,n.jsx)(t.li,{children:`права по группам DLE и настройки пользователя (почта / ЛС);`}),`
`,(0,n.jsxs)(t.li,{children:[`функции `,(0,n.jsx)(t.code,{children:`notify*`}),` для своего кода и запросы ленты без перезагрузки страницы (`,(0,n.jsx)(t.code,{children:`list`}),`, `,(0,n.jsx)(t.code,{children:`unread_count`}),`, `,(0,n.jsx)(t.code,{children:`mark_read`}),` и др.);`]}),`
`,(0,n.jsx)(t.li,{children:`свои события из дополнения DLE или другого модуля.`}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`требования`,children:`Требования`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[`DataLife Engine `,(0,n.jsx)(t.strong,{children:`20.0+`})]}),`
`,(0,n.jsxs)(t.li,{children:[`PHP `,(0,n.jsx)(t.strong,{children:`8.3+`})]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:`../../devcraft_admin/getting_started`,children:`DevCraft Admin`}),` `,(0,n.jsx)(t.strong,{children:`200.4.0+`})]}),`
`]}),`
`,(0,n.jsxs)(t.p,{children:[`Полный перечень шагов: `,(0,n.jsx)(t.a,{href:`./install`,children:`Установка`}),`.`]}),`
`,(0,n.jsx)(t.h2,{id:`быстрый-старт`,children:`Быстрый старт`}),`
`,(0,n.jsx)(t.h3,{id:`1-установка`,children:`1. Установка`}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.a,{href:`./install`,children:`Инструкция по установке`}),` — архив, автозагрузка классов, таблицы в базе, копирование шаблонов темы.`]}),`
`,(0,n.jsx)(t.h3,{id:`2-первое-использование`,children:`2. Первое использование`}),`
`,(0,n.jsxs)(t.p,{children:[`В шапке темы (`,(0,n.jsx)(t.code,{children:`main.tpl`}),`):`]}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`{include file="devcraft/src/modules/Notifications/Site/web.php?focus=css"}`})})})})}),`
`,(0,n.jsxs)(t.p,{children:[`Полная новость (`,(0,n.jsx)(t.code,{children:`fullstory.tpl`}),`):`]}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`{include file="devcraft/src/modules/Notifications/Site/web.php?focus=subscribe&stype=news&id={news-id}"}`})})})})}),`
`,(0,n.jsxs)(t.p,{children:[`В меню — колокольчик; перед `,(0,n.jsx)(t.code,{children:`</body>`}),` — скрипты:`]}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsxs)(t.code,{children:[(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`{include file="devcraft/src/modules/Notifications/Site/web.php?focus=badge"}`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`…`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`{include file="devcraft/src/modules/Notifications/Site/web.php?focus=js"}`})})]})})}),`
`,(0,n.jsxs)(t.p,{children:[`Стена в профиле или на `,(0,n.jsx)(t.a,{href:`./guides/notifications_page`,children:`странице уведомлений`}),`:`]}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`{include file="devcraft/src/modules/Notifications/Site/web.php?focus=wall"}`})})})})}),`
`,(0,n.jsxs)(t.p,{children:[`Отправка из PHP (после установки функции `,(0,n.jsx)(t.code,{children:`notify*`}),` доступны на всём сайте):`]}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M7.01 10.207h-.944l-.515 2.648h.838c.556 0 .97-.105 1.242-.314.272-.21.455-.559.55-1.049.092-.47.05-.802-.124-.995-.175-.193-.523-.29-1.047-.29zM12 5.688C5.373 5.688 0 8.514 0 12s5.373 6.313 12 6.313S24 15.486 24 12c0-3.486-5.373-6.312-12-6.312zm-3.26 7.451c-.261.25-.575.438-.917.551-.336.108-.765.164-1.285.164H5.357l-.327 1.681H3.652l1.23-6.326h2.65c.797 0 1.378.209 1.744.628.366.418.476 1.002.33 1.752a2.836 2.836 0 0 1-.305.847c-.143.255-.33.49-.561.703zm4.024.715l.543-2.799c.063-.318.039-.536-.068-.651-.107-.116-.336-.174-.687-.174H11.46l-.704 3.625H9.388l1.23-6.327h1.367l-.327 1.682h1.218c.767 0 1.295.134 1.586.401s.378.7.263 1.299l-.572 2.944h-1.389zm7.597-2.265a2.782 2.782 0 0 1-.305.847c-.143.255-.33.49-.561.703a2.44 2.44 0 0 1-.917.551c-.336.108-.765.164-1.286.164h-1.18l-.327 1.682h-1.378l1.23-6.326h2.649c.797 0 1.378.209 1.744.628.366.417.477 1.001.331 1.751zM17.766 10.207h-.943l-.516 2.648h.838c.557 0 .971-.105 1.242-.314.272-.21.455-.559.551-1.049.092-.47.049-.802-.125-.995s-.524-.29-1.047-.29z" fill="currentColor" /></svg>`,children:(0,n.jsxs)(t.code,{children:[(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`if`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:` (`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`function_exists`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`(`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`'notifySend'`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`)) {`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`	notifySend`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`($userId, `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`'Текст уведомления'`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`);`})]}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`}`})})]})})}),`
`,(0,n.jsx)(t.h3,{id:`3-дополнительная-настройка`,children:`3. Дополнительная настройка`}),`
`,(0,n.jsxs)(t.p,{children:[`В панели DevCraft → `,(0,n.jsx)(t.strong,{children:`DLE Уведомления`}),`: типы подписок, автообновление колокольчика, режим удаления записей ленты, путь к шаблонам. Права групп — отдельная страница модуля. Подробнее: `,(0,n.jsx)(t.a,{href:`./guides/permissions`,children:`права`}),`, `,(0,n.jsx)(t.a,{href:`./guides/user_prefs`,children:`настройки пользователя`}),`.`]}),`
`,(0,n.jsx)(t.h2,{id:`структура-проекта`,children:`Структура проекта`}),`
`,(0,n.jsx)(t.p,{children:`Корень сайта DLE после установки плагина:`}),`
`,(0,n.jsx)(o,{children:(0,n.jsxs)(s,{name:`Корень DLE`,defaultOpen:!0,children:[(0,n.jsxs)(s,{name:`devcraft`,defaultOpen:!0,children:[(0,n.jsx)(s,{name:`locales`,defaultOpen:!0,children:(0,n.jsx)(s,{name:`ru_RU`,defaultOpen:!0,children:(0,n.jsx)(a,{name:`dle_notifications.xliff`})})}),(0,n.jsx)(s,{name:`config`,children:(0,n.jsx)(a,{name:`notifications.json`})}),(0,n.jsx)(s,{name:`src`,defaultOpen:!0,children:(0,n.jsx)(s,{name:`modules`,defaultOpen:!0,children:(0,n.jsxs)(s,{name:`Notifications (модуль панели DevCraft)`,defaultOpen:!0,children:[(0,n.jsx)(a,{name:`manifest.php`}),(0,n.jsx)(a,{name:`settings.schema.php`}),(0,n.jsx)(a,{name:`permissions.defs.php`}),(0,n.jsx)(a,{name:`changelog.data.php`}),(0,n.jsx)(a,{name:`NotificationsIdentity.php`}),(0,n.jsxs)(s,{name:`Ajax`,defaultOpen:!0,children:[(0,n.jsx)(a,{name:`SettingsHandler.php`}),(0,n.jsx)(a,{name:`PermissionsHandler.php`}),(0,n.jsxs)(s,{name:`Public`,defaultOpen:!0,children:[(0,n.jsx)(a,{name:`ListHandler.php`}),(0,n.jsx)(a,{name:`UnreadCountHandler.php`}),(0,n.jsx)(a,{name:`MarkReadHandler.php`}),(0,n.jsx)(a,{name:`DeleteHandler.php`}),(0,n.jsx)(a,{name:`SubscribeHandler.php`}),(0,n.jsx)(a,{name:`UnsubscribeHandler.php`}),(0,n.jsx)(a,{name:`UnsubscribeTokenHandler.php`})]})]}),(0,n.jsxs)(s,{name:`Pages`,defaultOpen:!0,children:[(0,n.jsx)(a,{name:`ChangelogPage.php`}),(0,n.jsx)(a,{name:`DashboardPage.php`}),(0,n.jsx)(a,{name:`SettingsPage.php`}),(0,n.jsx)(a,{name:`PermissionsPage.php`})]}),(0,n.jsxs)(s,{name:`Services`,children:[(0,n.jsx)(a,{name:`Notify.php`}),(0,n.jsx)(a,{name:`NotificationService.php`}),(0,n.jsx)(a,{name:`DeliveryService.php`}),(0,n.jsx)(a,{name:`SubscriptionService.php`}),(0,n.jsx)(a,{name:`TemplateRenderService.php`}),(0,n.jsx)(a,{name:`…`})]}),(0,n.jsxs)(s,{name:`Models`,children:[(0,n.jsx)(a,{name:`Notification.php`}),(0,n.jsx)(a,{name:`Subscription.php`}),(0,n.jsx)(a,{name:`GroupPermission.php`})]}),(0,n.jsxs)(s,{name:`Repositories`,children:[(0,n.jsx)(a,{name:`NotificationRepository.php`}),(0,n.jsx)(a,{name:`SubscriptionRepository.php`}),(0,n.jsx)(a,{name:`GroupPermissionRepository.php`})]}),(0,n.jsx)(s,{name:`Enums`,children:(0,n.jsx)(a,{name:`SubscriptionType.php`})}),(0,n.jsxs)(s,{name:`templates`,children:[(0,n.jsx)(a,{name:`dashboard.twig`}),(0,n.jsx)(a,{name:`settings.twig`}),(0,n.jsx)(a,{name:`permissions.twig`})]}),(0,n.jsxs)(s,{name:`Site`,children:[(0,n.jsx)(a,{name:`web.php`}),(0,n.jsx)(a,{name:`page.php`}),(0,n.jsx)(a,{name:`include.php`})]}),(0,n.jsxs)(s,{name:`Public`,children:[(0,n.jsx)(a,{name:`timeago.full.min.js`}),(0,n.jsx)(a,{name:`.htaccess`})]})]})})})]}),(0,n.jsx)(s,{name:`engine`,defaultOpen:!0,children:(0,n.jsx)(s,{name:`inc`,defaultOpen:!0,children:(0,n.jsx)(a,{name:`notifications.php`})})}),(0,n.jsx)(s,{name:`templates`,defaultOpen:!0,children:(0,n.jsx)(s,{name:`{тема}`,defaultOpen:!0,children:(0,n.jsx)(s,{name:`devcraft`,defaultOpen:!0,children:(0,n.jsxs)(s,{name:`notifications`,defaultOpen:!0,children:[(0,n.jsx)(a,{name:`badge.tpl`}),(0,n.jsx)(a,{name:`wall.tpl`}),(0,n.jsx)(a,{name:`item.tpl`}),(0,n.jsx)(a,{name:`item_actions.tpl`}),(0,n.jsx)(a,{name:`subscribe.tpl`}),(0,n.jsx)(a,{name:`page.tpl`}),(0,n.jsxs)(s,{name:`assets`,children:[(0,n.jsx)(a,{name:`notifications.css`}),(0,n.jsx)(a,{name:`notifications.js`})]}),(0,n.jsx)(s,{name:`scenarios`}),(0,n.jsx)(s,{name:`wrappers`}),(0,n.jsx)(s,{name:`subscribe`})]})})})})]})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`engine/inc/notifications.php`}),` — точка входа в админку DLE: открывает модуль в DevCraft.`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`Site/web.php`}),` — подключение на сайте через `,(0,n.jsx)(t.code,{children:`{include}`}),` (`,(0,n.jsx)(t.code,{children:`focus=css|js|badge|wall|subscribe`}),`).`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`Site/page.php`}),` + `,(0,n.jsx)(t.code,{children:`page.tpl`}),` — страница `,(0,n.jsx)(t.code,{children:`do=notifications`}),`.`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`Site/include.php`}),` — procedural API `,(0,n.jsx)(t.code,{children:`notify*`}),` (подключает плагин после bootstrap).`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`templates/{тема}/devcraft/notifications/`}),` — разметка и стили/скрипты публичного сайта (не шаблоны админки).`]}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`концепции`,children:`Концепции`}),`
`,(0,n.jsx)(t.h3,{id:`каналы-и-лента`,children:`Каналы и лента`}),`
`,(0,n.jsxs)(t.p,{children:[`Уведомление создаётся в ленте сайта и при необходимости дублируется в почту и ЛС. Колокольчик (`,(0,n.jsx)(t.code,{children:`focus=badge`}),`) показывает счётчик; стена (`,(0,n.jsx)(t.code,{children:`focus=wall`}),`) — список с действиями «прочитать» / «открыть».`]}),`
`,(0,n.jsx)(t.h3,{id:`подписки`,children:`Подписки`}),`
`,(0,n.jsxs)(t.p,{children:[`Тип (`,(0,n.jsx)(t.code,{children:`news`}),`, `,(0,n.jsx)(t.code,{children:`cat`}),`, `,(0,n.jsx)(t.code,{children:`user`}),`, `,(0,n.jsx)(t.code,{children:`tag`}),`, `,(0,n.jsx)(t.code,{children:`xfield`}),`, `,(0,n.jsx)(t.code,{children:`all`}),`) задаёт, на что подписан пользователь. Кнопка на странице — `,(0,n.jsx)(t.code,{children:`focus=subscribe`}),` с `,(0,n.jsx)(t.code,{children:`stype`}),` и `,(0,n.jsx)(t.code,{children:`id`}),`. Подробнее: `,(0,n.jsx)(t.a,{href:`./guides/subscription_types`,children:`типы подписок`}),`.`]}),`
`,(0,n.jsx)(t.h3,{id:`сценарии-и-шаблоны`,children:`Сценарии и шаблоны`}),`
`,(0,n.jsxs)(t.p,{children:[`Текст события берётся из `,(0,n.jsx)(t.code,{children:`scenarios/*.tpl`}),` темы; письма и ЛС — из `,(0,n.jsx)(t.code,{children:`wrappers/`}),`. Теги вроде `,(0,n.jsx)(t.code,{children:`{title}`}),`, `,(0,n.jsx)(t.code,{children:`{full-link}`}),`, `,(0,n.jsx)(t.code,{children:`{unsubscribe-url}`}),` описаны в `,(0,n.jsx)(t.a,{href:`./guides/scenario_templates`,children:`шаблонах сценариев`}),`.`]}),`
`,(0,n.jsxs)(t.h3,{id:`параметр-focus-во-вставке`,children:[`Параметр `,(0,n.jsx)(t.code,{children:`focus`}),` во вставке`]}),`
`,(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:(0,n.jsx)(t.code,{children:`focus`})}),(0,n.jsx)(t.th,{children:`Куда`}),(0,n.jsx)(t.th,{children:`Что`})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:`css`})}),(0,n.jsx)(t.td,{children:`шапка`}),(0,n.jsx)(t.td,{children:`стили и служебные meta для автообновления`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:`js`})}),(0,n.jsx)(t.td,{children:`низ страницы`}),(0,n.jsx)(t.td,{children:`скрипты`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsxs)(t.td,{children:[(0,n.jsx)(t.code,{children:`badge`}),` / `,(0,n.jsx)(t.code,{children:`wall`}),` / `,(0,n.jsx)(t.code,{children:`subscribe`})]}),(0,n.jsx)(t.td,{children:`разметка`}),(0,n.jsx)(t.td,{children:`колокольчик, стена, кнопка подписки`})]})]})]}),`
`,(0,n.jsxs)(t.p,{children:[`Полная вставка: `,(0,n.jsx)(t.a,{href:`./guides/subscribe_wall`,children:`Вставка в шаблоны`}),`. Подробные сниппеты cat / tag / xfield / user: `,(0,n.jsx)(t.a,{href:`./guides/template_includes`,children:`Include в шаблонах темы`}),`.`]}),`
`,(0,n.jsx)(t.h2,{id:`разделы-документации`,children:`Разделы документации`}),`
`,(0,n.jsxs)(i,{children:[(0,n.jsx)(r,{title:`Установка`,href:`/dev/dle/notifications/200.1.0/install`,children:(0,n.jsx)(t.p,{children:`Архив, автозагрузка, таблицы, копирование шаблонов`})}),(0,n.jsx)(r,{title:`Вставка в шаблоны`,href:`/dev/dle/notifications/200.1.0/guides/subscribe_wall`,children:(0,n.jsx)(t.p,{children:`Подписка, стена, колокольчик, стили и скрипты`})}),(0,n.jsx)(r,{title:`Include в шаблонах`,href:`/dev/dle/notifications/200.1.0/guides/template_includes`,children:(0,n.jsx)(t.p,{children:`Места в теме и сниппеты news/cat/tag/xfield/user/all`})}),(0,n.jsx)(r,{title:`Страница уведомлений`,href:`/dev/dle/notifications/200.1.0/guides/notifications_page`,children:(0,n.jsx)(t.p,{children:`do=notifications и ЧПУ /notifications/`})}),(0,n.jsx)(r,{title:`Типы подписок`,href:`/dev/dle/notifications/200.1.0/guides/subscription_types`,children:(0,n.jsx)(t.p,{children:`Новость, категория, автор, тег, доп. поле, все`})}),(0,n.jsx)(r,{title:`Шаблоны и теги`,href:`/dev/dle/notifications/200.1.0/guides/scenario_templates`,children:(0,n.jsx)(t.p,{children:`Сценарии, письма, подписка, лента`})}),(0,n.jsx)(r,{title:`Своё событие`,href:`/dev/dle/notifications/200.1.0/guides/custom_event`,children:(0,n.jsx)(t.p,{children:`notifySend и сценарий из дополнения или модуля`})})]}),`
`,(0,n.jsx)(t.h2,{id:`рекомендуемая-последовательность-обучения`,children:`Рекомендуемая последовательность обучения`}),`
`,(0,n.jsxs)(t.ol,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:`Новичок?`}),` Начните с `,(0,n.jsx)(t.a,{href:`./install`,children:`установки`}),`.`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:`Подключить тему?`}),` Смотрите `,(0,n.jsx)(t.a,{href:`./guides/subscribe_wall`,children:`вставку в шаблоны`}),`, `,(0,n.jsx)(t.a,{href:`./guides/template_includes`,children:`include`}),` и `,(0,n.jsx)(t.a,{href:`./guides/notifications_page`,children:`страницу уведомлений`}),`.`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:`Свои тексты событий?`}),` `,(0,n.jsx)(t.a,{href:`./guides/scenario_templates`,children:`Шаблоны сценариев`}),` и `,(0,n.jsx)(t.a,{href:`./guides/scenarios`,children:`сценарии`}),`.`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:`Свой код?`}),` `,(0,n.jsx)(t.a,{href:`./guides/custom_event`,children:`Своё событие`}),`, `,(0,n.jsx)(t.a,{href:`./guides/inbox_api`,children:`запросы ленты`}),`, `,(0,n.jsx)(t.a,{href:`./reference/Notify`,children:`справочник Notify`}),`.`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:`Обновления?`}),` `,(0,n.jsx)(t.a,{href:`./changelog`,children:`История изменений`}),`.`]}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`получение-помощи`,children:`Получение помощи`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`./reference`,children:`Справочник`})}),`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`https://github.com/DevCraftClub/DLE-Notifications`,children:`Исходники на GitHub`})}),`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`https://github.com/DevCraftClub/DLE-Notifications/issues`,children:`Сообщить об ошибке`})}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`следующие-шаги`,children:`Следующие шаги`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`./install`,children:`Установка`})}),`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`./guides/subscribe_wall`,children:`Вставка в шаблоны`})}),`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`./guides/notifications_page`,children:`Страница уведомлений`})}),`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`./reference`,children:`Справочник`})}),`
`]})]})}function l(e={}){let{wrapper:t}=e.components||{};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}function u(e,t){throw Error(`Expected `+(t?`component`:`object`)+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}export{a as _markdown,l as default,r as frontmatter,i as lastModified,o as structuredData,s as toc};