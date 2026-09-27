import{r as e}from"./rolldown-runtime-QTnfLwEv.js";import{t}from"./jsx-runtime-By8HlURe.js";var n=e(t()),r={title:`Начало работы`,description:`DLE Уведомления для DataLife Engine: подписки на новости, разделы и авторов, колокольчик, лента, почта и личные сообщения. Цена — 35 €.`,version:`200.1.0`},i=new Date(1790523217e3),a=`

## Описание плагина [#описание-плагина]

**DLE Уведомления** — плагин [DevCraft Admin](/dev/dle/devcraft_admin/200.4.1/getting_started) для **DataLife Engine**. Он добавляет на сайт подписки и сообщения о событиях: человек следит за новостью, разделом, автором, тегом, доп. полем или за всеми новыми материалами и узнаёт, когда вышла публикация, её поправили, оставили комментарий, упомянули \`@ник\`, поставили оценку или прошла модерация. Это не штатная почта DLE «как есть», а отдельная лента с правами групп, шаблонами в теме и кнопкой «Подписаться» там, где вы сами её поставите.

На сайте посетитель видит **колокольчик** со счётчиком непрочитанных, **стену** (ленту) и при необходимости отдельную страницу \`/notifications/\`. Те же события можно слать **письмом** и **личным сообщением** DLE. Тексты писем, личных сообщений и записей ленты — обычные файлы \`.tpl\` в теме: правите формулировки и поля вроде \`{title}\` без правки ядра. Нет файла в текущем скине — берётся \`Default\`. Стили и скрипты оболочки идут через \`{devcraft}\`; блоки колокольчика и кнопок — через \`{include}\` к \`Controller/show_notifications.php\`.

Владелец сайта включает типы подписок и каналы, задаёт права групп и смотрит подписчиков в админке \`?mod=notifications\`. Разработчик темы копирует \`templates/Default/devcraft/notifications/\` в свой скин. Для своего кода есть функции \`notify*\`: событие из хака или другого модуля попадает в ту же ленту. Свой канал доставки подключается через \`ChannelInterface\` — [свой канал](./guides/custom_channel). Версия **200.1.0*&#x2A; рассчитана на DLE 20+ и Admin **≥ 200.4.1**.

**Telegram**, **сводка** и **статистика** в ZIP ядра **не входят** — это отдельные архивы. Документация: [Telegram](/dev/dle/notifications_telegram/200.1.0/getting_started), [сводка](/dev/dle/notifications_digest/200.1.0/getting_started), [статистика](/dev/dle/notifications_stats/200.1.0/getting_started). Краткий указатель: [дополнительные модули](./guides/satellites).

**Стоимость ядра:** &#x2A;*35 €**. Цены соседних модулей здесь не указаны. Репозиторий: [DevCraftClub/DLE-Notifications](https://github.com/DevCraftClub/DLE-Notifications). Модуль: \`devcraft/src/modules/Notifications/\`.

## Возможности [#возможности]

* кнопка «Подписаться» у новости, раздела, автора, тега, доп. поля или на все новые материалы;
* колокольчик со счётчиком непрочитанных (можно обновлять сам);
* стена и отдельная страница \`/notifications/\`;
* шаблоны событий, писем и ленты в теме;
* права по группам DLE и личные настройки (почта / личные сообщения);
* функции \`notify*\` для своего кода;
* свои события из хака или другого модуля.

## Что включено сразу [#что-включено-сразу]

После установки, **без сохранения настроек**, действуют значения из схемы модуля. Колокольчик на сайте всё равно появится только после вставки в тему и входа человека с правом группы.

### Способы доставки (уже в коде) [#способы-доставки-уже-в-коде]

| Код        | Где                          | В комплекте ядра                                                         | Включён сразу                        |
| ---------- | ---------------------------- | ------------------------------------------------------------------------ | ------------------------------------ |
| \`site\`     | колокольчик и стена на сайте | да                                                                       | да (запись в ленту всегда)           |
| \`email\`    | письмо на почту профиля      | да                                                                       | **да** (\`send_email\`)                |
| \`pm\`       | личное сообщение DLE         | да                                                                       | **нет** (\`send_pm\`)                  |
| \`telegram\` | чат бота                     | [отдельный ZIP](/dev/dle/notifications_telegram/200.1.0/getting_started) | **нет** (нужны ключ бота и привязка) |

**Сводка** ([отдельный ZIP](/dev/dle/notifications_digest/200.1.0/getting_started)) не добавляет свой код канала: она может откладывать уже выбранные способы (по умолчанию почту) и слать пачкой по расписанию DLE — тоже **выключена**, пока не поставите модуль и не включите его. Свой способ доставки: [свой канал](guides/custom_channel). Статистика ([отдельный ZIP](/dev/dle/notifications_stats/200.1.0/getting_started)) — отчёт в админке, не доставка. Указатель: [дополнительные модули](guides/satellites).

### Подписки и события [#подписки-и-события]

**Включено:** подписки на новость, раздел, автора, тег и на все новые материалы; письма о публикации и о правке новости (режим «любая правка»; при режиме «только доп. поле» — поле новости из настройки \`xf_edit_notify\`); правке новости из закладок; одобрении и отклонении модерации; упоминании \`@ник\`; ответе на комментарий; рейтинге новости и комментария; удалении комментария; подписке на человека. Самообновление колокольчика — **15 секунд**. На стене до **20** записей, в блоке «Новые публикации» — **10**.

**Выключено:** подписка на доп. поле; рассылка любого комментария всем подписчикам новости; автоподписка при комментарии или голосе; мягкое удаление записей ленты; личные сообщения как канал.

Доп. поля профиля для «не слать почту / не слать событие» по умолчанию пустые: личных выключателей нет, пока вы их не укажете. Отдельной галочки «Уведомить подписчиков» в форме новости **нет** — для ручного режима заведите доп. поле новости (удобно «Да/Нет») и выберите его в настройках. Права групп задаются отдельно: [права групп](guides/permissions).

## Для кого [#для-кого]

### Владельцы сайта и модераторы [#владельцы-сайта-и-модераторы]

Ставите Admin, затем Уведомления, сохраняете типы подписок и каналы, вставляете \`{include}\` в тему. Дальше люди сами подписываются; вы смотрите права групп.

### Разработчики темы [#разработчики-темы]

Копируете \`templates/Default/devcraft/notifications/\` в свой скин, правите кнопки и колокольчик, не ломая имена полей и классы вроде \`dc-notify-subscribe\`. См. [Куда вставить в тему](guides/template_includes).

## Требования [#требования]

| Что             | Минимум       |
| --------------- | ------------- |
| DataLife Engine | **20.0+**     |
| PHP             | **8.3+**      |
| DevCraft Admin  | **≥ 200.4.1** |

Полный список шагов: [Установка](./install).

## Дерево структуры [#дерево-структуры]

Корень сайта после установки. В скобках — зачем папка.

<Files>
  <Folder name="корень сайта DLE">
    <Folder name="devcraft">
      <Folder name="src/modules/Notifications">
        <File name="manifest.php — меню, запросы, meta" />

        <File name="settings.schema.php — форма настроек" />

        <File name="permissions.defs.php — права групп" />

        <File name="changelog.data.php — история в панели" />

        <File name="NotificationsIdentity.php — MODULE/CODE" />

        <Folder name="Controller — show_notifications.php, страница списка" />

        <Folder name="Public — стили и скрипты сайта" />

        <Folder name="Site — include.php (функции notify*)" />

        <Folder name="Pages — главная, конструктор, настройки, права" />

        <Folder name="Ajax — публичные list, subscribe, mark_read…" />

        <Folder name="Services / Models / Repositories" />

        <Folder name="templates — экраны админки (Twig)" />
      </Folder>

      <Folder name="config — notifications.json после сохранения" />

      <Folder name="locales — dle_notifications.xliff" />
    </Folder>

    <Folder name="engine/inc">
      <File name="notifications.php — вход админки" />
    </Folder>

    <Folder name="templates/{skin}/devcraft/notifications">
      <File name="badge.tpl / wall.tpl / subscribe/*.tpl" />

      <File name="scenarios / wrappers — тексты событий и писем" />
    </Folder>
  </Folder>
</Files>

Кратко:

* **\`devcraft/src/modules/Notifications/\`** — админка, логика и вставки на сайт.
* **\`Controller/show_notifications.php\`** — \`{include}\` в теме (\`focus=badge|wall|subscribe|…\`).
* **\`Public/\`** — стили и скрипты сайта через \`siteAssets\` (в теме нужен тег \`{devcraft}\`).
* **\`templates/…/notifications/\`** — разметка колокольчика, стены и кнопок.

## Быстрый старт [#быстрый-старт]

<Steps>
  <Step>
    ### Поставьте Admin и Уведомления [#поставьте-admin-и-уведомления]

    Сначала [DevCraft Admin](/dev/dle/devcraft_admin/200.4.1/install), затем ZIP через менеджер плагинов. В \`devcraft/\` выполните \`composer dump-autoload\`. Подробности: [Установка](./install).
  </Step>

  <Step>
    ### Настройки [#настройки]

    Откройте \`?mod=notifications\`, включите типы подписок и каналы (сайт, почта, личные сообщения). Права групп — отдельная страница модуля.
  </Step>

  <Step>
    ### Тема [#тема]

    В шапке — тег \`{devcraft}\` (стили и скрипты модуля). В меню — колокольчик. На полной новости — кнопка подписки. См. [Колокольчик, стена и кнопка](guides/subscribe_wall).
  </Step>

  <Step>
    ### Проверка [#проверка]

    Войдите как пользователь с правом подписки, нажмите кнопку на новости, откройте колокольчик. Страница списка: [Страница уведомлений](guides/notifications_page).
  </Step>
</Steps>

## Руководства и разделы [#руководства-и-разделы]

| Страница                                     | О чём                                         |
| -------------------------------------------- | --------------------------------------------- |
| [Установка](./install)                       | ZIP, Composer, таблицы, копия шаблонов        |
| [Колокольчик и стена](guides/subscribe_wall) | \`focus\` в теме                                |
| [Куда вставить](guides/template_includes)    | новость, раздел, тег, автор                   |
| [Типы подписок](guides/subscription_types)   | что срабатывает при новой записи и при правке |
| [Справочник](./reference)                    | \`notify*\` и \`show_notifications.php\`          |
| [История изменений](./changelog)             | 200.1.0                                       |

<Cards>
  <Card title="Установка" href="./install">
    Admin, ZIP, dump-autoload, таблицы
  </Card>

  <Card title="Тема" href="./guides/subscribe_wall">
    Колокольчик, стена, кнопка
  </Card>

  <Card title="Шаблоны" href="./templates">
    Файлы .tpl, теги и классы
  </Card>

  <Card title="Типы подписок" href="./guides/subscription_types">
    Новость, раздел, автор, все
  </Card>

  <Card title="Своё событие" href="./guides/custom_event">
    notifySend из хака
  </Card>

  <Card title="Доп. модули" href="./guides/satellites">
    Telegram, сводка, статистика — отдельные ZIP
  </Card>

  <Card title="Справочник" href="./reference">
    PHP и вставка на сайт
  </Card>

  <Card title="История изменений" href="./changelog">
    Что вошло в 200.1.0
  </Card>
</Cards>

## Дальше [#дальше]

1. [Установить](./install) плагин.
2. Пройти [быстрый старт](#быстрый-старт).
3. Настроить [права групп](guides/permissions) и [шаблоны темы](./templates).
`,o={contents:[{heading:`описание-плагина`,content:"**DLE Уведомления** — плагин DevCraft Admin для **DataLife Engine**. Он добавляет на сайт подписки и сообщения о событиях: человек следит за новостью, разделом, автором, тегом, доп. полем или за всеми новыми материалами и узнаёт, когда вышла публикация, её поправили, оставили комментарий, упомянули `@ник`, поставили оценку или прошла модерация. Это не штатная почта DLE «как есть», а отдельная лента с правами групп, шаблонами в теме и кнопкой «Подписаться» там, где вы сами её поставите."},{heading:`описание-плагина`,content:"На сайте посетитель видит **колокольчик** со счётчиком непрочитанных, **стену** (ленту) и при необходимости отдельную страницу `/notifications/`. Те же события можно слать **письмом** и **личным сообщением** DLE. Тексты писем, личных сообщений и записей ленты — обычные файлы `.tpl` в теме: правите формулировки и поля вроде `{title}` без правки ядра. Нет файла в текущем скине — берётся `Default`. Стили и скрипты оболочки идут через `{devcraft}`; блоки колокольчика и кнопок — через `{include}` к `Controller/show_notifications.php`."},{heading:`описание-плагина`,content:"Владелец сайта включает типы подписок и каналы, задаёт права групп и смотрит подписчиков в админке `?mod=notifications`. Разработчик темы копирует `templates/Default/devcraft/notifications/` в свой скин. Для своего кода есть функции `notify*`: событие из хака или другого модуля попадает в ту же ленту. Свой канал доставки подключается через `ChannelInterface` — свой канал. Версия **200.1.0*&#x2A; рассчитана на DLE 20+ и Admin **≥ 200.4.1**."},{heading:`описание-плагина`,content:`**Telegram**, **сводка** и **статистика** в ZIP ядра **не входят** — это отдельные архивы. Документация: Telegram, сводка, статистика. Краткий указатель: дополнительные модули.`},{heading:`описание-плагина`,content:"**Стоимость ядра:** &#x2A;*35 €**. Цены соседних модулей здесь не указаны. Репозиторий: DevCraftClub/DLE-Notifications. Модуль: `devcraft/src/modules/Notifications/`."},{heading:`возможности`,content:`кнопка «Подписаться» у новости, раздела, автора, тега, доп. поля или на все новые материалы;`},{heading:`возможности`,content:`колокольчик со счётчиком непрочитанных (можно обновлять сам);`},{heading:`возможности`,content:"стена и отдельная страница `/notifications/`;"},{heading:`возможности`,content:`шаблоны событий, писем и ленты в теме;`},{heading:`возможности`,content:`права по группам DLE и личные настройки (почта / личные сообщения);`},{heading:`возможности`,content:"функции `notify*` для своего кода;"},{heading:`возможности`,content:`свои события из хака или другого модуля.`},{heading:`что-включено-сразу`,content:`После установки, **без сохранения настроек**, действуют значения из схемы модуля. Колокольчик на сайте всё равно появится только после вставки в тему и входа человека с правом группы.`},{heading:`способы-доставки-уже-в-коде`,content:`Код`},{heading:`способы-доставки-уже-в-коде`,content:`Где`},{heading:`способы-доставки-уже-в-коде`,content:`В комплекте ядра`},{heading:`способы-доставки-уже-в-коде`,content:`Включён сразу`},{heading:`способы-доставки-уже-в-коде`,content:"`site`"},{heading:`способы-доставки-уже-в-коде`,content:`колокольчик и стена на сайте`},{heading:`способы-доставки-уже-в-коде`,content:`да`},{heading:`способы-доставки-уже-в-коде`,content:`да (запись в ленту всегда)`},{heading:`способы-доставки-уже-в-коде`,content:"`email`"},{heading:`способы-доставки-уже-в-коде`,content:`письмо на почту профиля`},{heading:`способы-доставки-уже-в-коде`,content:`да`},{heading:`способы-доставки-уже-в-коде`,content:"**да** (`send_email`)"},{heading:`способы-доставки-уже-в-коде`,content:"`pm`"},{heading:`способы-доставки-уже-в-коде`,content:`личное сообщение DLE`},{heading:`способы-доставки-уже-в-коде`,content:`да`},{heading:`способы-доставки-уже-в-коде`,content:"**нет** (`send_pm`)"},{heading:`способы-доставки-уже-в-коде`,content:"`telegram`"},{heading:`способы-доставки-уже-в-коде`,content:`чат бота`},{heading:`способы-доставки-уже-в-коде`,content:`отдельный ZIP`},{heading:`способы-доставки-уже-в-коде`,content:`**нет** (нужны ключ бота и привязка)`},{heading:`способы-доставки-уже-в-коде`,content:`**Сводка** (отдельный ZIP) не добавляет свой код канала: она может откладывать уже выбранные способы (по умолчанию почту) и слать пачкой по расписанию DLE — тоже **выключена**, пока не поставите модуль и не включите его. Свой способ доставки: свой канал. Статистика (отдельный ZIP) — отчёт в админке, не доставка. Указатель: дополнительные модули.`},{heading:`подписки-и-события`,content:"**Включено:** подписки на новость, раздел, автора, тег и на все новые материалы; письма о публикации и о правке новости (режим «любая правка»; при режиме «только доп. поле» — поле новости из настройки `xf_edit_notify`); правке новости из закладок; одобрении и отклонении модерации; упоминании `@ник`; ответе на комментарий; рейтинге новости и комментария; удалении комментария; подписке на человека. Самообновление колокольчика — **15 секунд**. На стене до **20** записей, в блоке «Новые публикации» — **10**."},{heading:`подписки-и-события`,content:`**Выключено:** подписка на доп. поле; рассылка любого комментария всем подписчикам новости; автоподписка при комментарии или голосе; мягкое удаление записей ленты; личные сообщения как канал.`},{heading:`подписки-и-события`,content:`Доп. поля профиля для «не слать почту / не слать событие» по умолчанию пустые: личных выключателей нет, пока вы их не укажете. Отдельной галочки «Уведомить подписчиков» в форме новости **нет** — для ручного режима заведите доп. поле новости (удобно «Да/Нет») и выберите его в настройках. Права групп задаются отдельно: права групп.`},{heading:`владельцы-сайта-и-модераторы`,content:"Ставите Admin, затем Уведомления, сохраняете типы подписок и каналы, вставляете `{include}` в тему. Дальше люди сами подписываются; вы смотрите права групп."},{heading:`разработчики-темы`,content:"Копируете `templates/Default/devcraft/notifications/` в свой скин, правите кнопки и колокольчик, не ломая имена полей и классы вроде `dc-notify-subscribe`. См. Куда вставить в тему."},{heading:`требования`,content:`Что`},{heading:`требования`,content:`Минимум`},{heading:`требования`,content:`DataLife Engine`},{heading:`требования`,content:`**20.0+**`},{heading:`требования`,content:`PHP`},{heading:`требования`,content:`**8.3+**`},{heading:`требования`,content:`DevCraft Admin`},{heading:`требования`,content:`**≥ 200.4.1**`},{heading:`требования`,content:`Полный список шагов: Установка.`},{heading:`дерево-структуры`,content:`Корень сайта после установки. В скобках — зачем папка.`},{heading:`дерево-структуры`,content:`<File name="manifest.php — меню, запросы, meta" />`},{heading:`дерево-структуры`,content:`<File name="settings.schema.php — форма настроек" />`},{heading:`дерево-структуры`,content:`<File name="permissions.defs.php — права групп" />`},{heading:`дерево-структуры`,content:`<File name="changelog.data.php — история в панели" />`},{heading:`дерево-структуры`,content:`<File name="NotificationsIdentity.php — MODULE/CODE" />`},{heading:`дерево-структуры`,content:`<File name="notifications.php — вход админки" />`},{heading:`дерево-структуры`,content:`<File name="badge.tpl / wall.tpl / subscribe/*.tpl" />`},{heading:`дерево-структуры`,content:`<File name="scenarios / wrappers — тексты событий и писем" />`},{heading:`дерево-структуры`,content:`Кратко:`},{heading:`дерево-структуры`,content:"**`devcraft/src/modules/Notifications/`** — админка, логика и вставки на сайт."},{heading:`дерево-структуры`,content:"**`Controller/show_notifications.php`** — `{include}` в теме (`focus=badge|wall|subscribe|…`)."},{heading:`дерево-структуры`,content:"**`Public/`** — стили и скрипты сайта через `siteAssets` (в теме нужен тег `{devcraft}`)."},{heading:`дерево-структуры`,content:"**`templates/…/notifications/`** — разметка колокольчика, стены и кнопок."},{heading:`поставьте-admin-и-уведомления`,content:"Сначала DevCraft Admin, затем ZIP через менеджер плагинов. В `devcraft/` выполните `composer dump-autoload`. Подробности: Установка."},{heading:`настройки`,content:"Откройте `?mod=notifications`, включите типы подписок и каналы (сайт, почта, личные сообщения). Права групп — отдельная страница модуля."},{heading:`тема`,content:"В шапке — тег `{devcraft}` (стили и скрипты модуля). В меню — колокольчик. На полной новости — кнопка подписки. См. Колокольчик, стена и кнопка."},{heading:`проверка`,content:`Войдите как пользователь с правом подписки, нажмите кнопку на новости, откройте колокольчик. Страница списка: Страница уведомлений.`},{heading:`руководства-и-разделы`,content:`Страница`},{heading:`руководства-и-разделы`,content:`О чём`},{heading:`руководства-и-разделы`,content:`Установка`},{heading:`руководства-и-разделы`,content:`ZIP, Composer, таблицы, копия шаблонов`},{heading:`руководства-и-разделы`,content:`Колокольчик и стена`},{heading:`руководства-и-разделы`,content:"`focus` в теме"},{heading:`руководства-и-разделы`,content:`Куда вставить`},{heading:`руководства-и-разделы`,content:`новость, раздел, тег, автор`},{heading:`руководства-и-разделы`,content:`Типы подписок`},{heading:`руководства-и-разделы`,content:`что срабатывает при новой записи и при правке`},{heading:`руководства-и-разделы`,content:`Справочник`},{heading:`руководства-и-разделы`,content:"`notify*` и `show_notifications.php`"},{heading:`руководства-и-разделы`,content:`История изменений`},{heading:`руководства-и-разделы`,content:`200.1.0`},{heading:`руководства-и-разделы`,content:`Admin, ZIP, dump-autoload, таблицы`},{heading:`руководства-и-разделы`,content:`Колокольчик, стена, кнопка`},{heading:`руководства-и-разделы`,content:`Файлы .tpl, теги и классы`},{heading:`руководства-и-разделы`,content:`Новость, раздел, автор, все`},{heading:`руководства-и-разделы`,content:`notifySend из хака`},{heading:`руководства-и-разделы`,content:`Telegram, сводка, статистика — отдельные ZIP`},{heading:`руководства-и-разделы`,content:`PHP и вставка на сайт`},{heading:`руководства-и-разделы`,content:`Что вошло в 200.1.0`},{heading:`дальше`,content:`Установить плагин.`},{heading:`дальше`,content:`Пройти быстрый старт.`},{heading:`дальше`,content:`Настроить права групп и шаблоны темы.`}],headings:[{id:`описание-плагина`,content:`Описание плагина`},{id:`возможности`,content:`Возможности`},{id:`что-включено-сразу`,content:`Что включено сразу`},{id:`способы-доставки-уже-в-коде`,content:`Способы доставки (уже в коде)`},{id:`подписки-и-события`,content:`Подписки и события`},{id:`для-кого`,content:`Для кого`},{id:`владельцы-сайта-и-модераторы`,content:`Владельцы сайта и модераторы`},{id:`разработчики-темы`,content:`Разработчики темы`},{id:`требования`,content:`Требования`},{id:`дерево-структуры`,content:`Дерево структуры`},{id:`быстрый-старт`,content:`Быстрый старт`},{id:`поставьте-admin-и-уведомления`,content:`Поставьте Admin и Уведомления`},{id:`настройки`,content:`Настройки`},{id:`тема`,content:`Тема`},{id:`проверка`,content:`Проверка`},{id:`руководства-и-разделы`,content:`Руководства и разделы`},{id:`дальше`,content:`Дальше`}]},s=[{depth:2,url:`#описание-плагина`,title:(0,n.jsx)(n.Fragment,{children:`Описание плагина`})},{depth:2,url:`#возможности`,title:(0,n.jsx)(n.Fragment,{children:`Возможности`})},{depth:2,url:`#что-включено-сразу`,title:(0,n.jsx)(n.Fragment,{children:`Что включено сразу`})},{depth:3,url:`#способы-доставки-уже-в-коде`,title:(0,n.jsx)(n.Fragment,{children:`Способы доставки (уже в коде)`})},{depth:3,url:`#подписки-и-события`,title:(0,n.jsx)(n.Fragment,{children:`Подписки и события`})},{depth:2,url:`#для-кого`,title:(0,n.jsx)(n.Fragment,{children:`Для кого`})},{depth:3,url:`#владельцы-сайта-и-модераторы`,title:(0,n.jsx)(n.Fragment,{children:`Владельцы сайта и модераторы`})},{depth:3,url:`#разработчики-темы`,title:(0,n.jsx)(n.Fragment,{children:`Разработчики темы`})},{depth:2,url:`#требования`,title:(0,n.jsx)(n.Fragment,{children:`Требования`})},{depth:2,url:`#дерево-структуры`,title:(0,n.jsx)(n.Fragment,{children:`Дерево структуры`})},{depth:2,url:`#быстрый-старт`,title:(0,n.jsx)(n.Fragment,{children:`Быстрый старт`})},{depth:3,url:`#поставьте-admin-и-уведомления`,title:(0,n.jsx)(n.Fragment,{children:`Поставьте Admin и Уведомления`})},{depth:3,url:`#настройки`,title:(0,n.jsx)(n.Fragment,{children:`Настройки`})},{depth:3,url:`#тема`,title:(0,n.jsx)(n.Fragment,{children:`Тема`})},{depth:3,url:`#проверка`,title:(0,n.jsx)(n.Fragment,{children:`Проверка`})},{depth:2,url:`#руководства-и-разделы`,title:(0,n.jsx)(n.Fragment,{children:`Руководства и разделы`})},{depth:2,url:`#дальше`,title:(0,n.jsx)(n.Fragment,{children:`Дальше`})}];function c(e){let t={a:`a`,code:`code`,h2:`h2`,h3:`h3`,li:`li`,ol:`ol`,p:`p`,strong:`strong`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,ul:`ul`,...e.components},{Card:r,Cards:i,File:a,Files:o,Folder:s,Step:c,Steps:l}=t;return r||u(`Card`,!0),i||u(`Cards`,!0),a||u(`File`,!0),o||u(`Files`,!0),s||u(`Folder`,!0),c||u(`Step`,!0),l||u(`Steps`,!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h2,{id:`описание-плагина`,children:`Описание плагина`}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`DLE Уведомления`}),` — плагин `,(0,n.jsx)(t.a,{href:`/dev/dle/devcraft_admin/200.4.1/getting_started`,children:`DevCraft Admin`}),` для `,(0,n.jsx)(t.strong,{children:`DataLife Engine`}),`. Он добавляет на сайт подписки и сообщения о событиях: человек следит за новостью, разделом, автором, тегом, доп. полем или за всеми новыми материалами и узнаёт, когда вышла публикация, её поправили, оставили комментарий, упомянули `,(0,n.jsx)(t.code,{children:`@ник`}),`, поставили оценку или прошла модерация. Это не штатная почта DLE «как есть», а отдельная лента с правами групп, шаблонами в теме и кнопкой «Подписаться» там, где вы сами её поставите.`]}),`
`,(0,n.jsxs)(t.p,{children:[`На сайте посетитель видит `,(0,n.jsx)(t.strong,{children:`колокольчик`}),` со счётчиком непрочитанных, `,(0,n.jsx)(t.strong,{children:`стену`}),` (ленту) и при необходимости отдельную страницу `,(0,n.jsx)(t.code,{children:`/notifications/`}),`. Те же события можно слать `,(0,n.jsx)(t.strong,{children:`письмом`}),` и `,(0,n.jsx)(t.strong,{children:`личным сообщением`}),` DLE. Тексты писем, личных сообщений и записей ленты — обычные файлы `,(0,n.jsx)(t.code,{children:`.tpl`}),` в теме: правите формулировки и поля вроде `,(0,n.jsx)(t.code,{children:`{title}`}),` без правки ядра. Нет файла в текущем скине — берётся `,(0,n.jsx)(t.code,{children:`Default`}),`. Стили и скрипты оболочки идут через `,(0,n.jsx)(t.code,{children:`{devcraft}`}),`; блоки колокольчика и кнопок — через `,(0,n.jsx)(t.code,{children:`{include}`}),` к `,(0,n.jsx)(t.code,{children:`Controller/show_notifications.php`}),`.`]}),`
`,(0,n.jsxs)(t.p,{children:[`Владелец сайта включает типы подписок и каналы, задаёт права групп и смотрит подписчиков в админке `,(0,n.jsx)(t.code,{children:`?mod=notifications`}),`. Разработчик темы копирует `,(0,n.jsx)(t.code,{children:`templates/Default/devcraft/notifications/`}),` в свой скин. Для своего кода есть функции `,(0,n.jsx)(t.code,{children:`notify*`}),`: событие из хака или другого модуля попадает в ту же ленту. Свой канал доставки подключается через `,(0,n.jsx)(t.code,{children:`ChannelInterface`}),` — `,(0,n.jsx)(t.a,{href:`./guides/custom_channel`,children:`свой канал`}),`. Версия `,(0,n.jsx)(t.strong,{children:`200.1.0`}),` рассчитана на DLE 20+ и Admin `,(0,n.jsx)(t.strong,{children:`≥ 200.4.1`}),`.`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Telegram`}),`, `,(0,n.jsx)(t.strong,{children:`сводка`}),` и `,(0,n.jsx)(t.strong,{children:`статистика`}),` в ZIP ядра `,(0,n.jsx)(t.strong,{children:`не входят`}),` — это отдельные архивы. Документация: `,(0,n.jsx)(t.a,{href:`/dev/dle/notifications_telegram/200.1.0/getting_started`,children:`Telegram`}),`, `,(0,n.jsx)(t.a,{href:`/dev/dle/notifications_digest/200.1.0/getting_started`,children:`сводка`}),`, `,(0,n.jsx)(t.a,{href:`/dev/dle/notifications_stats/200.1.0/getting_started`,children:`статистика`}),`. Краткий указатель: `,(0,n.jsx)(t.a,{href:`./guides/satellites`,children:`дополнительные модули`}),`.`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Стоимость ядра:`}),` `,(0,n.jsx)(t.strong,{children:`35 €`}),`. Цены соседних модулей здесь не указаны. Репозиторий: `,(0,n.jsx)(t.a,{href:`https://github.com/DevCraftClub/DLE-Notifications`,children:`DevCraftClub/DLE-Notifications`}),`. Модуль: `,(0,n.jsx)(t.code,{children:`devcraft/src/modules/Notifications/`}),`.`]}),`
`,(0,n.jsx)(t.h2,{id:`возможности`,children:`Возможности`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsx)(t.li,{children:`кнопка «Подписаться» у новости, раздела, автора, тега, доп. поля или на все новые материалы;`}),`
`,(0,n.jsx)(t.li,{children:`колокольчик со счётчиком непрочитанных (можно обновлять сам);`}),`
`,(0,n.jsxs)(t.li,{children:[`стена и отдельная страница `,(0,n.jsx)(t.code,{children:`/notifications/`}),`;`]}),`
`,(0,n.jsx)(t.li,{children:`шаблоны событий, писем и ленты в теме;`}),`
`,(0,n.jsx)(t.li,{children:`права по группам DLE и личные настройки (почта / личные сообщения);`}),`
`,(0,n.jsxs)(t.li,{children:[`функции `,(0,n.jsx)(t.code,{children:`notify*`}),` для своего кода;`]}),`
`,(0,n.jsx)(t.li,{children:`свои события из хака или другого модуля.`}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`что-включено-сразу`,children:`Что включено сразу`}),`
`,(0,n.jsxs)(t.p,{children:[`После установки, `,(0,n.jsx)(t.strong,{children:`без сохранения настроек`}),`, действуют значения из схемы модуля. Колокольчик на сайте всё равно появится только после вставки в тему и входа человека с правом группы.`]}),`
`,(0,n.jsx)(t.h3,{id:`способы-доставки-уже-в-коде`,children:`Способы доставки (уже в коде)`}),`
`,(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`Код`}),(0,n.jsx)(t.th,{children:`Где`}),(0,n.jsx)(t.th,{children:`В комплекте ядра`}),(0,n.jsx)(t.th,{children:`Включён сразу`})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:`site`})}),(0,n.jsx)(t.td,{children:`колокольчик и стена на сайте`}),(0,n.jsx)(t.td,{children:`да`}),(0,n.jsx)(t.td,{children:`да (запись в ленту всегда)`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:`email`})}),(0,n.jsx)(t.td,{children:`письмо на почту профиля`}),(0,n.jsx)(t.td,{children:`да`}),(0,n.jsxs)(t.td,{children:[(0,n.jsx)(t.strong,{children:`да`}),` (`,(0,n.jsx)(t.code,{children:`send_email`}),`)`]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:`pm`})}),(0,n.jsx)(t.td,{children:`личное сообщение DLE`}),(0,n.jsx)(t.td,{children:`да`}),(0,n.jsxs)(t.td,{children:[(0,n.jsx)(t.strong,{children:`нет`}),` (`,(0,n.jsx)(t.code,{children:`send_pm`}),`)`]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:`telegram`})}),(0,n.jsx)(t.td,{children:`чат бота`}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:`/dev/dle/notifications_telegram/200.1.0/getting_started`,children:`отдельный ZIP`})}),(0,n.jsxs)(t.td,{children:[(0,n.jsx)(t.strong,{children:`нет`}),` (нужны ключ бота и привязка)`]})]})]})]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Сводка`}),` (`,(0,n.jsx)(t.a,{href:`/dev/dle/notifications_digest/200.1.0/getting_started`,children:`отдельный ZIP`}),`) не добавляет свой код канала: она может откладывать уже выбранные способы (по умолчанию почту) и слать пачкой по расписанию DLE — тоже `,(0,n.jsx)(t.strong,{children:`выключена`}),`, пока не поставите модуль и не включите его. Свой способ доставки: `,(0,n.jsx)(t.a,{href:`guides/custom_channel`,children:`свой канал`}),`. Статистика (`,(0,n.jsx)(t.a,{href:`/dev/dle/notifications_stats/200.1.0/getting_started`,children:`отдельный ZIP`}),`) — отчёт в админке, не доставка. Указатель: `,(0,n.jsx)(t.a,{href:`guides/satellites`,children:`дополнительные модули`}),`.`]}),`
`,(0,n.jsx)(t.h3,{id:`подписки-и-события`,children:`Подписки и события`}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Включено:`}),` подписки на новость, раздел, автора, тег и на все новые материалы; письма о публикации и о правке новости (режим «любая правка»; при режиме «только доп. поле» — поле новости из настройки `,(0,n.jsx)(t.code,{children:`xf_edit_notify`}),`); правке новости из закладок; одобрении и отклонении модерации; упоминании `,(0,n.jsx)(t.code,{children:`@ник`}),`; ответе на комментарий; рейтинге новости и комментария; удалении комментария; подписке на человека. Самообновление колокольчика — `,(0,n.jsx)(t.strong,{children:`15 секунд`}),`. На стене до `,(0,n.jsx)(t.strong,{children:`20`}),` записей, в блоке «Новые публикации» — `,(0,n.jsx)(t.strong,{children:`10`}),`.`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Выключено:`}),` подписка на доп. поле; рассылка любого комментария всем подписчикам новости; автоподписка при комментарии или голосе; мягкое удаление записей ленты; личные сообщения как канал.`]}),`
`,(0,n.jsxs)(t.p,{children:[`Доп. поля профиля для «не слать почту / не слать событие» по умолчанию пустые: личных выключателей нет, пока вы их не укажете. Отдельной галочки «Уведомить подписчиков» в форме новости `,(0,n.jsx)(t.strong,{children:`нет`}),` — для ручного режима заведите доп. поле новости (удобно «Да/Нет») и выберите его в настройках. Права групп задаются отдельно: `,(0,n.jsx)(t.a,{href:`guides/permissions`,children:`права групп`}),`.`]}),`
`,(0,n.jsx)(t.h2,{id:`для-кого`,children:`Для кого`}),`
`,(0,n.jsx)(t.h3,{id:`владельцы-сайта-и-модераторы`,children:`Владельцы сайта и модераторы`}),`
`,(0,n.jsxs)(t.p,{children:[`Ставите Admin, затем Уведомления, сохраняете типы подписок и каналы, вставляете `,(0,n.jsx)(t.code,{children:`{include}`}),` в тему. Дальше люди сами подписываются; вы смотрите права групп.`]}),`
`,(0,n.jsx)(t.h3,{id:`разработчики-темы`,children:`Разработчики темы`}),`
`,(0,n.jsxs)(t.p,{children:[`Копируете `,(0,n.jsx)(t.code,{children:`templates/Default/devcraft/notifications/`}),` в свой скин, правите кнопки и колокольчик, не ломая имена полей и классы вроде `,(0,n.jsx)(t.code,{children:`dc-notify-subscribe`}),`. См. `,(0,n.jsx)(t.a,{href:`guides/template_includes`,children:`Куда вставить в тему`}),`.`]}),`
`,(0,n.jsx)(t.h2,{id:`требования`,children:`Требования`}),`
`,(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`Что`}),(0,n.jsx)(t.th,{children:`Минимум`})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`DataLife Engine`}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:`20.0+`})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`PHP`}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:`8.3+`})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`DevCraft Admin`}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:`≥ 200.4.1`})})]})]})]}),`
`,(0,n.jsxs)(t.p,{children:[`Полный список шагов: `,(0,n.jsx)(t.a,{href:`./install`,children:`Установка`}),`.`]}),`
`,(0,n.jsx)(t.h2,{id:`дерево-структуры`,children:`Дерево структуры`}),`
`,(0,n.jsx)(t.p,{children:`Корень сайта после установки. В скобках — зачем папка.`}),`
`,(0,n.jsx)(o,{children:(0,n.jsxs)(s,{name:`корень сайта DLE`,defaultOpen:!0,children:[(0,n.jsxs)(s,{name:`devcraft`,defaultOpen:!0,children:[(0,n.jsxs)(s,{name:`src/modules/Notifications`,defaultOpen:!0,children:[(0,n.jsx)(a,{name:`manifest.php — меню, запросы, meta`}),(0,n.jsx)(a,{name:`settings.schema.php — форма настроек`}),(0,n.jsx)(a,{name:`permissions.defs.php — права групп`}),(0,n.jsx)(a,{name:`changelog.data.php — история в панели`}),(0,n.jsx)(a,{name:`NotificationsIdentity.php — MODULE/CODE`}),(0,n.jsx)(s,{name:`Controller — show_notifications.php, страница списка`}),(0,n.jsx)(s,{name:`Public — стили и скрипты сайта`}),(0,n.jsx)(s,{name:`Site — include.php (функции notify*)`}),(0,n.jsx)(s,{name:`Pages — главная, конструктор, настройки, права`}),(0,n.jsx)(s,{name:`Ajax — публичные list, subscribe, mark_read…`}),(0,n.jsx)(s,{name:`Services / Models / Repositories`}),(0,n.jsx)(s,{name:`templates — экраны админки (Twig)`})]}),(0,n.jsx)(s,{name:`config — notifications.json после сохранения`}),(0,n.jsx)(s,{name:`locales — dle_notifications.xliff`})]}),(0,n.jsx)(s,{name:`engine/inc`,children:(0,n.jsx)(a,{name:`notifications.php — вход админки`})}),(0,n.jsxs)(s,{name:`templates/{skin}/devcraft/notifications`,defaultOpen:!0,children:[(0,n.jsx)(a,{name:`badge.tpl / wall.tpl / subscribe/*.tpl`}),(0,n.jsx)(a,{name:`scenarios / wrappers — тексты событий и писем`})]})]})}),`
`,(0,n.jsx)(t.p,{children:`Кратко:`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:(0,n.jsx)(t.code,{children:`devcraft/src/modules/Notifications/`})}),` — админка, логика и вставки на сайт.`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:(0,n.jsx)(t.code,{children:`Controller/show_notifications.php`})}),` — `,(0,n.jsx)(t.code,{children:`{include}`}),` в теме (`,(0,n.jsx)(t.code,{children:`focus=badge|wall|subscribe|…`}),`).`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:(0,n.jsx)(t.code,{children:`Public/`})}),` — стили и скрипты сайта через `,(0,n.jsx)(t.code,{children:`siteAssets`}),` (в теме нужен тег `,(0,n.jsx)(t.code,{children:`{devcraft}`}),`).`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:(0,n.jsx)(t.code,{children:`templates/…/notifications/`})}),` — разметка колокольчика, стены и кнопок.`]}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`быстрый-старт`,children:`Быстрый старт`}),`
`,(0,n.jsxs)(l,{children:[(0,n.jsxs)(c,{children:[(0,n.jsx)(t.h3,{id:`поставьте-admin-и-уведомления`,children:`Поставьте Admin и Уведомления`}),(0,n.jsxs)(t.p,{children:[`Сначала `,(0,n.jsx)(t.a,{href:`/dev/dle/devcraft_admin/200.4.1/install`,children:`DevCraft Admin`}),`, затем ZIP через менеджер плагинов. В `,(0,n.jsx)(t.code,{children:`devcraft/`}),` выполните `,(0,n.jsx)(t.code,{children:`composer dump-autoload`}),`. Подробности: `,(0,n.jsx)(t.a,{href:`./install`,children:`Установка`}),`.`]})]}),(0,n.jsxs)(c,{children:[(0,n.jsx)(t.h3,{id:`настройки`,children:`Настройки`}),(0,n.jsxs)(t.p,{children:[`Откройте `,(0,n.jsx)(t.code,{children:`?mod=notifications`}),`, включите типы подписок и каналы (сайт, почта, личные сообщения). Права групп — отдельная страница модуля.`]})]}),(0,n.jsxs)(c,{children:[(0,n.jsx)(t.h3,{id:`тема`,children:`Тема`}),(0,n.jsxs)(t.p,{children:[`В шапке — тег `,(0,n.jsx)(t.code,{children:`{devcraft}`}),` (стили и скрипты модуля). В меню — колокольчик. На полной новости — кнопка подписки. См. `,(0,n.jsx)(t.a,{href:`guides/subscribe_wall`,children:`Колокольчик, стена и кнопка`}),`.`]})]}),(0,n.jsxs)(c,{children:[(0,n.jsx)(t.h3,{id:`проверка`,children:`Проверка`}),(0,n.jsxs)(t.p,{children:[`Войдите как пользователь с правом подписки, нажмите кнопку на новости, откройте колокольчик. Страница списка: `,(0,n.jsx)(t.a,{href:`guides/notifications_page`,children:`Страница уведомлений`}),`.`]})]})]}),`
`,(0,n.jsx)(t.h2,{id:`руководства-и-разделы`,children:`Руководства и разделы`}),`
`,(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`Страница`}),(0,n.jsx)(t.th,{children:`О чём`})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:`./install`,children:`Установка`})}),(0,n.jsx)(t.td,{children:`ZIP, Composer, таблицы, копия шаблонов`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:`guides/subscribe_wall`,children:`Колокольчик и стена`})}),(0,n.jsxs)(t.td,{children:[(0,n.jsx)(t.code,{children:`focus`}),` в теме`]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:`guides/template_includes`,children:`Куда вставить`})}),(0,n.jsx)(t.td,{children:`новость, раздел, тег, автор`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:`guides/subscription_types`,children:`Типы подписок`})}),(0,n.jsx)(t.td,{children:`что срабатывает при новой записи и при правке`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:`./reference`,children:`Справочник`})}),(0,n.jsxs)(t.td,{children:[(0,n.jsx)(t.code,{children:`notify*`}),` и `,(0,n.jsx)(t.code,{children:`show_notifications.php`})]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:`./changelog`,children:`История изменений`})}),(0,n.jsx)(t.td,{children:`200.1.0`})]})]})]}),`
`,(0,n.jsxs)(i,{children:[(0,n.jsx)(r,{title:`Установка`,href:`./install`,children:(0,n.jsx)(t.p,{children:`Admin, ZIP, dump-autoload, таблицы`})}),(0,n.jsx)(r,{title:`Тема`,href:`./guides/subscribe_wall`,children:(0,n.jsx)(t.p,{children:`Колокольчик, стена, кнопка`})}),(0,n.jsx)(r,{title:`Шаблоны`,href:`./templates`,children:(0,n.jsx)(t.p,{children:`Файлы .tpl, теги и классы`})}),(0,n.jsx)(r,{title:`Типы подписок`,href:`./guides/subscription_types`,children:(0,n.jsx)(t.p,{children:`Новость, раздел, автор, все`})}),(0,n.jsx)(r,{title:`Своё событие`,href:`./guides/custom_event`,children:(0,n.jsx)(t.p,{children:`notifySend из хака`})}),(0,n.jsx)(r,{title:`Доп. модули`,href:`./guides/satellites`,children:(0,n.jsx)(t.p,{children:`Telegram, сводка, статистика — отдельные ZIP`})}),(0,n.jsx)(r,{title:`Справочник`,href:`./reference`,children:(0,n.jsx)(t.p,{children:`PHP и вставка на сайт`})}),(0,n.jsx)(r,{title:`История изменений`,href:`./changelog`,children:(0,n.jsx)(t.p,{children:`Что вошло в 200.1.0`})})]}),`
`,(0,n.jsx)(t.h2,{id:`дальше`,children:`Дальше`}),`
`,(0,n.jsxs)(t.ol,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:`./install`,children:`Установить`}),` плагин.`]}),`
`,(0,n.jsxs)(t.li,{children:[`Пройти `,(0,n.jsx)(t.a,{href:`#%D0%B1%D1%8B%D1%81%D1%82%D1%80%D1%8B%D0%B9-%D1%81%D1%82%D0%B0%D1%80%D1%82`,children:`быстрый старт`}),`.`]}),`
`,(0,n.jsxs)(t.li,{children:[`Настроить `,(0,n.jsx)(t.a,{href:`guides/permissions`,children:`права групп`}),` и `,(0,n.jsx)(t.a,{href:`./templates`,children:`шаблоны темы`}),`.`]}),`
`]})]})}function l(e={}){let{wrapper:t}=e.components||{};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}function u(e,t){throw Error(`Expected `+(t?`component`:`object`)+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}export{a as _markdown,l as default,r as frontmatter,i as lastModified,o as structuredData,s as toc};