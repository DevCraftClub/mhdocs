import{r as e}from"./rolldown-runtime-QTnfLwEv.js";import{t}from"./jsx-runtime-By8HlURe.js";var n=e(t()),r={title:`Кастомное событие`,description:`Свой notifySend: шаблон, права групп, настройки модуля и доп. поле`,version:`200.1.0`},i=new Date(1787750944e3),a=`

Штатные сценарии (новость, комментарий, упоминание) закрывают типовые кейсы. Свой триггер — через публичный API \`notifySend\` / \`Notify::send\`.

Предварительно: [шаблоны и теги](./scenario_templates), [справочник Notify](../reference/Notify).

## Два способа [#два-способа]

1. **Готовый текст** — без файла в \`scenarios/\`.
2. **Свой сценарий** — \`.tpl\` в теме + имя в параметре \`$scenario\`.

## Вариант 1: текст без сценария [#вариант-1-текст-без-сценария]

\`\`\`php
if (function_exists('notifySend')) {
	notifySend(
		$recipientId,
		'Вам назначена новая задача №' . $taskId,
		'task',           // contentType — тип сущности в ленте
		$taskId,          // contentTypeId
		$senderId,        // кто инициировал
		'info',           // level: info|success|warning|…
		[],               // channels: [] = настройки модуля
		null,             // scenario не нужен
	);
}
\`\`\`

Тело берётся из \`$message\`. Каналы «сайт» / почта / ЛС — по настройкам модуля и настройкам получателя.

## Вариант 2: свой \`.tpl\` сценарий [#вариант-2-свой-tpl-сценарий]

<Steps>
  <Step>
    ### Шаг 1: файл сценария [#шаг-1-файл-сценария]

    В скине (или \`Default\`):

    \`templates/ВАША_ТЕМА/devcraft/notifications/scenarios/order_paid.tpl\`

    \`\`\`text
    Заказ #{order_id} оплачен
    Сумма: {amount}
    {full-link}
    \`\`\`

    Имя файла **без** \`.tpl\` = значение \`$scenario\`.
  </Step>

  <Step>
    ### Шаг 2: вызов из кода [#шаг-2-вызов-из-кода]

    Хак DLE, cron-обработчик или другой модуль DevCraft — после bootstrap:

    \`\`\`php
    if (function_exists('notifySend')) {
    	notifySend(
    		$buyerId,
    		null,                    // текст из сценария
    		'order',
    		$orderId,
    		0,                       // системное событие без отправителя
    		'success',
    		[],
    		'order_paid',            // → scenarios/order_paid.tpl
    		[
    			'{order_id}'  => (string) $orderId,
    			'{amount}'    => $amountFormatted,
    			'{full-link}' => $orderUrl,
    			'{title}'     => 'Заказ #' . $orderId,
    			'{sender}'    => 'Система',
    		],
    		[],                      // newsRow: опционально строка новости для тегов DLE
    	);
    }
    \`\`\`

    \`$message = null\` — тело только из \`.tpl\`. Если шаблон пуст или не найден, а \`$message\` тоже пуст — уведомление не уйдёт.
  </Step>

  <Step>
    ### Шаг 3: каналы (по желанию) [#шаг-3-каналы-по-желанию]

    Пустой \`$channels\` — берутся флаги модуля \`send_email\` / \`send_pm\` и site по умолчанию.

    Принудительно только сайт:

    \`\`\`php
    notifySend($uid, 'Текст', 'custom', 0, 0, 'info', ['site' => true, 'email' => false, 'pm' => false]);
    \`\`\`
  </Step>
</Steps>

## Параметры, которые важны для кастома [#параметры-которые-важны-для-кастома]

| Параметр                          | Зачем                                            |
| --------------------------------- | ------------------------------------------------ |
| \`$recipientId\`                    | кому                                             |
| \`$message\`                        | готовый текст **или** \`null\`, если есть сценарий |
| \`$scenario\`                       | имя файла в \`scenarios/\` без расширения          |
| \`$extraVars\`                      | плейсхолдеры \`{'{…}'}\` для \`.tpl\`                |
| \`$contentType\` / \`$contentTypeId\` | связь в ленте (фильтры, клик)                    |
| \`$newsRow\`                        | если нужны штатные теги новости DLE в шаблоне    |
| \`$channels\`                       | сузить сайт / почту / ЛС                         |

Через класс: \`DevCraft\\Modules\\Notifications\\Services\\Notify::send(…)\`.

## Куда вешать вызов [#куда-вешать-вызов]

Типичные точки:

* PHP-хак после сохранения сущности (\`addnews\`, свой AJAX, оплата);
* сервис другого модуля DevCraft после бизнес-действия;
* cron / очередь — тот же \`notifySend\`, если DevCraft уже загружен.

Проверка: \`function_exists('notifySend')\` (функции подключает плагин через \`engine/modules/devcraft/notifications.php\`).

## Настройки и права (базово) [#настройки-и-права-базово]

Без доработок модуля:

* Получатель должен иметь \`notifications_allow_view_notifications\`.
* Email / ЛС — \`notifications_receive_mail\` / \`notifications_receive_message\` + каналы в настройках.
* Кастомный \`$scenario\` **не** привязан к штатным доп. полям (\`news_update\`, \`mention\`, …).
* \`$recipientId === $senderId\` — отправка молча пропускается.

Чтобы событие можно было **выключать в админке**, ограничивать **по группам** и давать пользователю **свой выключатель** — см. ниже.

<span id="advanced" />

## Продвинутое подключение [#продвинутое-подключение]

Пример: событие \`order_paid\`. Цель — как у штатных сценариев: глобальный флаг, право группы, опциональное доп. поле профиля.

Цепочка при отправке:

\`\`\`text
выключатель в настройках модуля
  → право группы (получатель / отправитель)
    → доп. поле пользователя (если привязан)
      → notifySend / Notify::send
\`\`\`

Файлы модуля: \`devcraft/src/modules/Notifications/\`.

### 1. Настройка модуля (глобальный выключатель) [#1-настройка-модуля-глобальный-выключатель]

В \`settings.schema.php\` добавьте checkbox рядом с остальными \`notify_*\`:

\`\`\`php
->checkbox('notify_order_paid', __('Уведомлять об оплате заказа'))
	->description(__('Сценарий order_paid из хака / модуля заказов.'))
	->default(true)
\`\`\`

Конфиг читается так же, как у штатных событий:

\`\`\`php
use DevCraft\\Core\\Support\\DataManager;
use DevCraft\\Modules\\Notifications\\NotificationsIdentity;

$cfg = DataManager::getConfig(NotificationsIdentity::code());

if (empty($cfg['notify_order_paid'])) {
	return; // событие выключено в админке
}
\`\`\`

После изменения схемы откройте **DLE Уведомления → Настройки** и сохраните форму (значение попадёт в \`devcraft/config/…\`).

### 2. Право группы [#2-право-группы]

Права хранятся JSON-картой (\`dc_notification_permissions.settings\`) — **миграция БД не нужна**. Достаточно описания в \`permissions.defs.php\`:

\`\`\`php
[
	'id'          => 'notifications_receive_order_paid',
	'title'       => __('Получать уведомления об оплате заказа?'),
	'description' => __('Сценарий order_paid.'),
	'level'       => 'user', // user | mod | admin
],
\`\`\`

Страница **Права групп** подхватит флаг сама (\`PermissionService::defs()\`).

В коде отправки:

\`\`\`php
use DevCraft\\Modules\\Notifications\\Services\\PermissionService;

$perms = new PermissionService();

if (!$perms->allows($recipientId, 'notifications_receive_order_paid')) {
	return;
}

// опционально: кто может инициировать
if ($senderId > 0 && !$perms->allows($senderId, 'notifications_allow_view_notifications')) {
	return;
}
\`\`\`

<Callout type="info">
  Пока у группы **нет** сохранённой строки прав, базовые \`user\`-флаги считаются включёнными, \`admin\` / \`mod\` — выключенными. После первого сохранения матрицы в админке действуют явные галочки — включите новый флаг нужным группам.
</Callout>

См. также [Права групп](./permissions).

### 3. Доп. поле пользователя (отписка от сценария) [#3-доп-поле-пользователя-отписка-от-сценария]

Штатные сценарии мапятся в [\`UserPrefsService\`](./user_prefs). Для кастома — три правки.

**a)** select в \`settings.schema.php\` (секция «Настройки пользователя»):

\`\`\`php
->select('xf_notify_order_paid', __('Доп. поле: оплата заказа'))
	->description(__('Пусто = не ограничивать. 0/off/no у пользователя — отказ.'))
	->options([])
	->default('')
\`\`\`

**b)** список опций в \`Pages/SettingsPage.php\` → \`supplementFormData()\`:

\`\`\`php
return [
	// …существующие ключи…
	'xf_notify_order_paid' => $options,
];
\`\`\`

**c)** ветка в \`UserPrefsService::wants()\`:

\`\`\`php
$scenarioXf = match ($scenario) {
	'news_update', 'news_published' => 'xf_notify_news_update',
	'moderation_approve', 'moderation_reject' => 'xf_notify_moderation',
	'mention'     => 'xf_notify_mention',
	'order_paid'  => 'xf_notify_order_paid',
	default       => null,
};
\`\`\`

Имя сценария в \`match\` должно совпадать с \`$scenario\` в \`notifySend\`. В настройках модуля выберите доп. поле профиля; логика значений — как в [Настройки пользователя](./user_prefs).

\`notifySend\` уже вызывает \`UserPrefsService::wants($scenarioKey, …)\` для каналов — отдельная проверка настроек в хаке не нужен, если сценарий заведён в \`match\`.

### 4. Сборка вызова [#4-сборка-вызова]

Файл сценария: \`templates/…/devcraft/notifications/scenarios/order_paid.tpl\`.

\`\`\`php
use DevCraft\\Core\\Support\\DataManager;
use DevCraft\\Modules\\Notifications\\NotificationsIdentity;
use DevCraft\\Modules\\Notifications\\Services\\PermissionService;

function notifyOrderPaid(int $buyerId, int $orderId, string $amount, string $url, int $senderId = 0): void
{
	if (!function_exists('notifySend') || $buyerId <= 0) {
		return;
	}

	$cfg = DataManager::getConfig(NotificationsIdentity::code());
	if (empty($cfg['notify_order_paid'])) {
		return;
	}

	$perms = new PermissionService();
	if (!$perms->allows($buyerId, 'notifications_receive_order_paid')) {
		return;
	}

	notifySend(
		$buyerId,
		null,
		'order',
		$orderId,
		$senderId,
		'success',
		[],
		'order_paid',
		[
			'{order_id}'  => (string) $orderId,
			'{amount}'    => $amount,
			'{full-link}' => $url,
			'{title}'     => 'Заказ #' . $orderId,
			'{sender}'    => 'Система',
		],
	);
}
\`\`\`

Права ленты / почты / ЛС (\`notifications_allow_view_notifications\`, \`notifications_receive_mail\`, …) и каналы модуля по-прежнему проверяет \`NotificationService::send\`.

### 5. Свой модуль DevCraft (без патча Notifications) [#5-свой-модуль-devcraft-без-патча-notifications]

Если событие живёт в **вашем** модуле:

| Что                    | Где                                                                                      |
| ---------------------- | ---------------------------------------------------------------------------------------- |
| Выключатель            | \`settings.schema.php\` **вашего** модуля + \`DataManager::getConfig(YourIdentity::code())\` |
| Права                  | свои defs **или** проверка существующих флагов Notifications через \`PermissionService\`   |
| Текст / tpl            | \`notifySend\` + сценарий в скине Notifications (шаблоны общие)                            |
| Доп. поле пользователя | либо патч \`UserPrefsService\` как выше, либо своя проверка доп. поля до \`notifySend\`      |

Патч Notifications нужен только если хотите единый UX: флаг в «Правах групп» уведомлений и выбор доп. поля на их странице настроек.

### Чеклист продвинутого подключения [#чеклист-продвинутого-подключения]

1. \`scenarios/{имя}.tpl\`
2. Checkbox \`notify_*\` в \`settings.schema.php\` + проверка \`empty($cfg[…])\`
3. Флаг в \`permissions.defs.php\` + \`PermissionService::allows\`
4. (Опционально) \`xf_notify_*\` + \`SettingsPage::supplementFormData\` + ветка в \`UserPrefsService\`
5. Включить флаг группам в админке; выбрать доп. поле; сохранить настройки
6. Вызов \`notifySend\` с тем же \`$scenario\`

## Минимальный чеклист [#минимальный-чеклист]

1. Файл \`scenarios/{имя}.tpl\` (или готовый \`$message\`).
2. \`notifySend(...)\` с \`$scenario = '{имя}'\` и нужными \`extraVars\`.
3. Проверка на сайте: колокольчик / стена; при необходимости email и ЛС в настройках модуля.

## См. также [#см-также]

* [Сценарии событий](./scenarios) — штатная таблица событий
* [Шаблоны и теги](./scenario_templates)
* [Права групп](./permissions)
* [Настройки пользователя](./user_prefs)
* [Notify](../reference/Notify)
`,o={contents:[{heading:void 0,content:"Штатные сценарии (новость, комментарий, упоминание) закрывают типовые кейсы. Свой триггер — через публичный API `notifySend` / `Notify::send`."},{heading:void 0,content:`Предварительно: шаблоны и теги, справочник Notify.`},{heading:`два-способа`,content:"**Готовый текст** — без файла в `scenarios/`."},{heading:`два-способа`,content:"**Свой сценарий** — `.tpl` в теме + имя в параметре `$scenario`."},{heading:`вариант-1-текст-без-сценария`,content:"Тело берётся из `$message`. Каналы «сайт» / почта / ЛС — по настройкам модуля и настройкам получателя."},{heading:`шаг-1-файл-сценария`,content:"В скине (или `Default`):"},{heading:`шаг-1-файл-сценария`,content:"`templates/ВАША_ТЕМА/devcraft/notifications/scenarios/order_paid.tpl`"},{heading:`шаг-1-файл-сценария`,content:"Имя файла **без** `.tpl` = значение `$scenario`."},{heading:`шаг-2-вызов-из-кода`,content:`Хак DLE, cron-обработчик или другой модуль DevCraft — после bootstrap:`},{heading:`шаг-2-вызов-из-кода`,content:"`$message = null` — тело только из `.tpl`. Если шаблон пуст или не найден, а `$message` тоже пуст — уведомление не уйдёт."},{heading:`шаг-3-каналы-по-желанию`,content:"Пустой `$channels` — берутся флаги модуля `send_email` / `send_pm` и site по умолчанию."},{heading:`шаг-3-каналы-по-желанию`,content:`Принудительно только сайт:`},{heading:`параметры-которые-важны-для-кастома`,content:`Параметр`},{heading:`параметры-которые-важны-для-кастома`,content:`Зачем`},{heading:`параметры-которые-важны-для-кастома`,content:"`$recipientId`"},{heading:`параметры-которые-важны-для-кастома`,content:`кому`},{heading:`параметры-которые-важны-для-кастома`,content:"`$message`"},{heading:`параметры-которые-важны-для-кастома`,content:"готовый текст **или** `null`, если есть сценарий"},{heading:`параметры-которые-важны-для-кастома`,content:"`$scenario`"},{heading:`параметры-которые-важны-для-кастома`,content:"имя файла в `scenarios/` без расширения"},{heading:`параметры-которые-важны-для-кастома`,content:"`$extraVars`"},{heading:`параметры-которые-важны-для-кастома`,content:"плейсхолдеры `{'{…}'}` для `.tpl`"},{heading:`параметры-которые-важны-для-кастома`,content:"`$contentType` / `$contentTypeId`"},{heading:`параметры-которые-важны-для-кастома`,content:`связь в ленте (фильтры, клик)`},{heading:`параметры-которые-важны-для-кастома`,content:"`$newsRow`"},{heading:`параметры-которые-важны-для-кастома`,content:`если нужны штатные теги новости DLE в шаблоне`},{heading:`параметры-которые-важны-для-кастома`,content:"`$channels`"},{heading:`параметры-которые-важны-для-кастома`,content:`сузить сайт / почту / ЛС`},{heading:`параметры-которые-важны-для-кастома`,content:"Через класс: `DevCraft\\Modules\\Notifications\\Services\\Notify::send(…)`."},{heading:`куда-вешать-вызов`,content:`Типичные точки:`},{heading:`куда-вешать-вызов`,content:"PHP-хак после сохранения сущности (`addnews`, свой AJAX, оплата);"},{heading:`куда-вешать-вызов`,content:`сервис другого модуля DevCraft после бизнес-действия;`},{heading:`куда-вешать-вызов`,content:"cron / очередь — тот же `notifySend`, если DevCraft уже загружен."},{heading:`куда-вешать-вызов`,content:"Проверка: `function_exists('notifySend')` (функции подключает плагин через `engine/modules/devcraft/notifications.php`)."},{heading:`настройки-и-права-базово`,content:`Без доработок модуля:`},{heading:`настройки-и-права-базово`,content:"Получатель должен иметь `notifications_allow_view_notifications`."},{heading:`настройки-и-права-базово`,content:"Email / ЛС — `notifications_receive_mail` / `notifications_receive_message` + каналы в настройках."},{heading:`настройки-и-права-базово`,content:"Кастомный `$scenario` **не** привязан к штатным доп. полям (`news_update`, `mention`, …)."},{heading:`настройки-и-права-базово`,content:"`$recipientId === $senderId` — отправка молча пропускается."},{heading:`настройки-и-права-базово`,content:`Чтобы событие можно было **выключать в админке**, ограничивать **по группам** и давать пользователю **свой выключатель** — см. ниже.`},{heading:`продвинутое-подключение`,content:"Пример: событие `order_paid`. Цель — как у штатных сценариев: глобальный флаг, право группы, опциональное доп. поле профиля."},{heading:`продвинутое-подключение`,content:`Цепочка при отправке:`},{heading:`продвинутое-подключение`,content:"Файлы модуля: `devcraft/src/modules/Notifications/`."},{heading:`1-настройка-модуля-глобальный-выключатель`,content:"В `settings.schema.php` добавьте checkbox рядом с остальными `notify_*`:"},{heading:`1-настройка-модуля-глобальный-выключатель`,content:`Конфиг читается так же, как у штатных событий:`},{heading:`1-настройка-модуля-глобальный-выключатель`,content:"После изменения схемы откройте **DLE Уведомления → Настройки** и сохраните форму (значение попадёт в `devcraft/config/…`)."},{heading:`2-право-группы`,content:"Права хранятся JSON-картой (`dc_notification_permissions.settings`) — **миграция БД не нужна**. Достаточно описания в `permissions.defs.php`:"},{heading:`2-право-группы`,content:"Страница **Права групп** подхватит флаг сама (`PermissionService::defs()`)."},{heading:`2-право-группы`,content:`В коде отправки:`},{heading:`2-право-группы`,content:"Пока у группы **нет** сохранённой строки прав, базовые `user`-флаги считаются включёнными, `admin` / `mod` — выключенными. После первого сохранения матрицы в админке действуют явные галочки — включите новый флаг нужным группам."},{heading:`2-право-группы`,content:`См. также Права групп.`},{heading:`3-доп-поле-пользователя-отписка-от-сценария`,content:"Штатные сценарии мапятся в `UserPrefsService`. Для кастома — три правки."},{heading:`3-доп-поле-пользователя-отписка-от-сценария`,content:"**a)** select в `settings.schema.php` (секция «Настройки пользователя»):"},{heading:`3-доп-поле-пользователя-отписка-от-сценария`,content:"**b)** список опций в `Pages/SettingsPage.php` → `supplementFormData()`:"},{heading:`3-доп-поле-пользователя-отписка-от-сценария`,content:"**c)** ветка в `UserPrefsService::wants()`:"},{heading:`3-доп-поле-пользователя-отписка-от-сценария`,content:"Имя сценария в `match` должно совпадать с `$scenario` в `notifySend`. В настройках модуля выберите доп. поле профиля; логика значений — как в Настройки пользователя."},{heading:`3-доп-поле-пользователя-отписка-от-сценария`,content:"`notifySend` уже вызывает `UserPrefsService::wants($scenarioKey, …)` для каналов — отдельная проверка настроек в хаке не нужен, если сценарий заведён в `match`."},{heading:`4-сборка-вызова`,content:"Файл сценария: `templates/…/devcraft/notifications/scenarios/order_paid.tpl`."},{heading:`4-сборка-вызова`,content:"Права ленты / почты / ЛС (`notifications_allow_view_notifications`, `notifications_receive_mail`, …) и каналы модуля по-прежнему проверяет `NotificationService::send`."},{heading:`5-свой-модуль-devcraft-без-патча-notifications`,content:`Если событие живёт в **вашем** модуле:`},{heading:`5-свой-модуль-devcraft-без-патча-notifications`,content:`Что`},{heading:`5-свой-модуль-devcraft-без-патча-notifications`,content:`Где`},{heading:`5-свой-модуль-devcraft-без-патча-notifications`,content:`Выключатель`},{heading:`5-свой-модуль-devcraft-без-патча-notifications`,content:"`settings.schema.php` **вашего** модуля + `DataManager::getConfig(YourIdentity::code())`"},{heading:`5-свой-модуль-devcraft-без-патча-notifications`,content:`Права`},{heading:`5-свой-модуль-devcraft-без-патча-notifications`,content:"свои defs **или** проверка существующих флагов Notifications через `PermissionService`"},{heading:`5-свой-модуль-devcraft-без-патча-notifications`,content:`Текст / tpl`},{heading:`5-свой-модуль-devcraft-без-патча-notifications`,content:"`notifySend` + сценарий в скине Notifications (шаблоны общие)"},{heading:`5-свой-модуль-devcraft-без-патча-notifications`,content:`Доп. поле пользователя`},{heading:`5-свой-модуль-devcraft-без-патча-notifications`,content:"либо патч `UserPrefsService` как выше, либо своя проверка доп. поля до `notifySend`"},{heading:`5-свой-модуль-devcraft-без-патча-notifications`,content:`Патч Notifications нужен только если хотите единый UX: флаг в «Правах групп» уведомлений и выбор доп. поля на их странице настроек.`},{heading:`чеклист-продвинутого-подключения`,content:"`scenarios/{имя}.tpl`"},{heading:`чеклист-продвинутого-подключения`,content:"Checkbox `notify_*` в `settings.schema.php` + проверка `empty($cfg[…])`"},{heading:`чеклист-продвинутого-подключения`,content:"Флаг в `permissions.defs.php` + `PermissionService::allows`"},{heading:`чеклист-продвинутого-подключения`,content:"(Опционально) `xf_notify_*` + `SettingsPage::supplementFormData` + ветка в `UserPrefsService`"},{heading:`чеклист-продвинутого-подключения`,content:`Включить флаг группам в админке; выбрать доп. поле; сохранить настройки`},{heading:`чеклист-продвинутого-подключения`,content:"Вызов `notifySend` с тем же `$scenario`"},{heading:`минимальный-чеклист`,content:"Файл `scenarios/{имя}.tpl` (или готовый `$message`)."},{heading:`минимальный-чеклист`,content:"`notifySend(...)` с `$scenario = '{имя}'` и нужными `extraVars`."},{heading:`минимальный-чеклист`,content:`Проверка на сайте: колокольчик / стена; при необходимости email и ЛС в настройках модуля.`},{heading:`см-также`,content:`Сценарии событий — штатная таблица событий`},{heading:`см-также`,content:`Шаблоны и теги`},{heading:`см-также`,content:`Права групп`},{heading:`см-также`,content:`Настройки пользователя`},{heading:`см-также`,content:`Notify`}],headings:[{id:`два-способа`,content:`Два способа`},{id:`вариант-1-текст-без-сценария`,content:`Вариант 1: текст без сценария`},{id:`вариант-2-свой-tpl-сценарий`,content:"Вариант 2: свой `.tpl` сценарий"},{id:`шаг-1-файл-сценария`,content:`Шаг 1: файл сценария`},{id:`шаг-2-вызов-из-кода`,content:`Шаг 2: вызов из кода`},{id:`шаг-3-каналы-по-желанию`,content:`Шаг 3: каналы (по желанию)`},{id:`параметры-которые-важны-для-кастома`,content:`Параметры, которые важны для кастома`},{id:`куда-вешать-вызов`,content:`Куда вешать вызов`},{id:`настройки-и-права-базово`,content:`Настройки и права (базово)`},{id:`продвинутое-подключение`,content:`Продвинутое подключение`},{id:`1-настройка-модуля-глобальный-выключатель`,content:`1\\. Настройка модуля (глобальный выключатель)`},{id:`2-право-группы`,content:`2\\. Право группы`},{id:`3-доп-поле-пользователя-отписка-от-сценария`,content:`3\\. Доп. поле пользователя (отписка от сценария)`},{id:`4-сборка-вызова`,content:`4\\. Сборка вызова`},{id:`5-свой-модуль-devcraft-без-патча-notifications`,content:`5\\. Свой модуль DevCraft (без патча Notifications)`},{id:`чеклист-продвинутого-подключения`,content:`Чеклист продвинутого подключения`},{id:`минимальный-чеклист`,content:`Минимальный чеклист`},{id:`см-также`,content:`См. также`}]},s=[{depth:2,url:`#два-способа`,title:(0,n.jsx)(n.Fragment,{children:`Два способа`})},{depth:2,url:`#вариант-1-текст-без-сценария`,title:(0,n.jsx)(n.Fragment,{children:`Вариант 1: текст без сценария`})},{depth:2,url:`#вариант-2-свой-tpl-сценарий`,title:(0,n.jsxs)(n.Fragment,{children:[`Вариант 2: свой `,(0,n.jsx)(`code`,{children:`.tpl`}),` сценарий`]})},{depth:3,url:`#шаг-1-файл-сценария`,title:(0,n.jsx)(n.Fragment,{children:`Шаг 1: файл сценария`})},{depth:3,url:`#шаг-2-вызов-из-кода`,title:(0,n.jsx)(n.Fragment,{children:`Шаг 2: вызов из кода`})},{depth:3,url:`#шаг-3-каналы-по-желанию`,title:(0,n.jsx)(n.Fragment,{children:`Шаг 3: каналы (по желанию)`})},{depth:2,url:`#параметры-которые-важны-для-кастома`,title:(0,n.jsx)(n.Fragment,{children:`Параметры, которые важны для кастома`})},{depth:2,url:`#куда-вешать-вызов`,title:(0,n.jsx)(n.Fragment,{children:`Куда вешать вызов`})},{depth:2,url:`#настройки-и-права-базово`,title:(0,n.jsx)(n.Fragment,{children:`Настройки и права (базово)`})},{depth:2,url:`#продвинутое-подключение`,title:(0,n.jsx)(n.Fragment,{children:`Продвинутое подключение`})},{depth:3,url:`#1-настройка-модуля-глобальный-выключатель`,title:(0,n.jsx)(n.Fragment,{children:`1. Настройка модуля (глобальный выключатель)`})},{depth:3,url:`#2-право-группы`,title:(0,n.jsx)(n.Fragment,{children:`2. Право группы`})},{depth:3,url:`#3-доп-поле-пользователя-отписка-от-сценария`,title:(0,n.jsx)(n.Fragment,{children:`3. Доп. поле пользователя (отписка от сценария)`})},{depth:3,url:`#4-сборка-вызова`,title:(0,n.jsx)(n.Fragment,{children:`4. Сборка вызова`})},{depth:3,url:`#5-свой-модуль-devcraft-без-патча-notifications`,title:(0,n.jsx)(n.Fragment,{children:`5. Свой модуль DevCraft (без патча Notifications)`})},{depth:3,url:`#чеклист-продвинутого-подключения`,title:(0,n.jsx)(n.Fragment,{children:`Чеклист продвинутого подключения`})},{depth:2,url:`#минимальный-чеклист`,title:(0,n.jsx)(n.Fragment,{children:`Минимальный чеклист`})},{depth:2,url:`#см-также`,title:(0,n.jsx)(n.Fragment,{children:`См. также`})}];function c(e){let t={a:`a`,code:`code`,h2:`h2`,h3:`h3`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,span:`span`,strong:`strong`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,ul:`ul`,...e.components},{Callout:r,Step:i,Steps:a}=t;return r||u(`Callout`,!0),i||u(`Step`,!0),a||u(`Steps`,!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:[`Штатные сценарии (новость, комментарий, упоминание) закрывают типовые кейсы. Свой триггер — через публичный API `,(0,n.jsx)(t.code,{children:`notifySend`}),` / `,(0,n.jsx)(t.code,{children:`Notify::send`}),`.`]}),`
`,(0,n.jsxs)(t.p,{children:[`Предварительно: `,(0,n.jsx)(t.a,{href:`./scenario_templates`,children:`шаблоны и теги`}),`, `,(0,n.jsx)(t.a,{href:`../reference/Notify`,children:`справочник Notify`}),`.`]}),`
`,(0,n.jsx)(t.h2,{id:`два-способа`,children:`Два способа`}),`
`,(0,n.jsxs)(t.ol,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:`Готовый текст`}),` — без файла в `,(0,n.jsx)(t.code,{children:`scenarios/`}),`.`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:`Свой сценарий`}),` — `,(0,n.jsx)(t.code,{children:`.tpl`}),` в теме + имя в параметре `,(0,n.jsx)(t.code,{children:`$scenario`}),`.`]}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`вариант-1-текст-без-сценария`,children:`Вариант 1: текст без сценария`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M7.01 10.207h-.944l-.515 2.648h.838c.556 0 .97-.105 1.242-.314.272-.21.455-.559.55-1.049.092-.47.05-.802-.124-.995-.175-.193-.523-.29-1.047-.29zM12 5.688C5.373 5.688 0 8.514 0 12s5.373 6.313 12 6.313S24 15.486 24 12c0-3.486-5.373-6.312-12-6.312zm-3.26 7.451c-.261.25-.575.438-.917.551-.336.108-.765.164-1.285.164H5.357l-.327 1.681H3.652l1.23-6.326h2.65c.797 0 1.378.209 1.744.628.366.418.476 1.002.33 1.752a2.836 2.836 0 0 1-.305.847c-.143.255-.33.49-.561.703zm4.024.715l.543-2.799c.063-.318.039-.536-.068-.651-.107-.116-.336-.174-.687-.174H11.46l-.704 3.625H9.388l1.23-6.327h1.367l-.327 1.682h1.218c.767 0 1.295.134 1.586.401s.378.7.263 1.299l-.572 2.944h-1.389zm7.597-2.265a2.782 2.782 0 0 1-.305.847c-.143.255-.33.49-.561.703a2.44 2.44 0 0 1-.917.551c-.336.108-.765.164-1.286.164h-1.18l-.327 1.682h-1.378l1.23-6.326h2.649c.797 0 1.378.209 1.744.628.366.417.477 1.001.331 1.751zM17.766 10.207h-.943l-.516 2.648h.838c.557 0 .971-.105 1.242-.314.272-.21.455-.559.551-1.049.092-.47.049-.802-.125-.995s-.524-.29-1.047-.29z" fill="currentColor" /></svg>`,children:(0,n.jsxs)(t.code,{children:[(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`if`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:` (`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`function_exists`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`(`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`'notifySend'`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`)) {`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`	notifySend`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`(`})]}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`		$recipientId,`})}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`		'Вам назначена новая задача №'`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:` .`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:` $taskId,`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`		'task'`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`,           `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6A737D`,"--shiki-dark":`#6A737D`},children:`// contentType — тип сущности в ленте`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`		$taskId,          `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6A737D`,"--shiki-dark":`#6A737D`},children:`// contentTypeId`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`		$senderId,        `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6A737D`,"--shiki-dark":`#6A737D`},children:`// кто инициировал`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`		'info'`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`,           `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6A737D`,"--shiki-dark":`#6A737D`},children:`// level: info|success|warning|…`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`		[],               `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6A737D`,"--shiki-dark":`#6A737D`},children:`// channels: [] = настройки модуля`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`		null`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`,             `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6A737D`,"--shiki-dark":`#6A737D`},children:`// scenario не нужен`})]}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`	);`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`}`})})]})})}),`
`,(0,n.jsxs)(t.p,{children:[`Тело берётся из `,(0,n.jsx)(t.code,{children:`$message`}),`. Каналы «сайт» / почта / ЛС — по настройкам модуля и настройкам получателя.`]}),`
`,(0,n.jsxs)(t.h2,{id:`вариант-2-свой-tpl-сценарий`,children:[`Вариант 2: свой `,(0,n.jsx)(t.code,{children:`.tpl`}),` сценарий`]}),`
`,(0,n.jsxs)(a,{children:[(0,n.jsxs)(i,{children:[(0,n.jsx)(t.h3,{id:`шаг-1-файл-сценария`,children:`Шаг 1: файл сценария`}),(0,n.jsxs)(t.p,{children:[`В скине (или `,(0,n.jsx)(t.code,{children:`Default`}),`):`]}),(0,n.jsx)(t.p,{children:(0,n.jsx)(t.code,{children:`templates/ВАША_ТЕМА/devcraft/notifications/scenarios/order_paid.tpl`})}),(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsxs)(t.code,{children:[(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`Заказ #{order_id} оплачен`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`Сумма: {amount}`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`{full-link}`})})]})})}),(0,n.jsxs)(t.p,{children:[`Имя файла `,(0,n.jsx)(t.strong,{children:`без`}),` `,(0,n.jsx)(t.code,{children:`.tpl`}),` = значение `,(0,n.jsx)(t.code,{children:`$scenario`}),`.`]})]}),(0,n.jsxs)(i,{children:[(0,n.jsx)(t.h3,{id:`шаг-2-вызов-из-кода`,children:`Шаг 2: вызов из кода`}),(0,n.jsx)(t.p,{children:`Хак DLE, cron-обработчик или другой модуль DevCraft — после bootstrap:`}),(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M7.01 10.207h-.944l-.515 2.648h.838c.556 0 .97-.105 1.242-.314.272-.21.455-.559.55-1.049.092-.47.05-.802-.124-.995-.175-.193-.523-.29-1.047-.29zM12 5.688C5.373 5.688 0 8.514 0 12s5.373 6.313 12 6.313S24 15.486 24 12c0-3.486-5.373-6.312-12-6.312zm-3.26 7.451c-.261.25-.575.438-.917.551-.336.108-.765.164-1.285.164H5.357l-.327 1.681H3.652l1.23-6.326h2.65c.797 0 1.378.209 1.744.628.366.418.476 1.002.33 1.752a2.836 2.836 0 0 1-.305.847c-.143.255-.33.49-.561.703zm4.024.715l.543-2.799c.063-.318.039-.536-.068-.651-.107-.116-.336-.174-.687-.174H11.46l-.704 3.625H9.388l1.23-6.327h1.367l-.327 1.682h1.218c.767 0 1.295.134 1.586.401s.378.7.263 1.299l-.572 2.944h-1.389zm7.597-2.265a2.782 2.782 0 0 1-.305.847c-.143.255-.33.49-.561.703a2.44 2.44 0 0 1-.917.551c-.336.108-.765.164-1.286.164h-1.18l-.327 1.682h-1.378l1.23-6.326h2.649c.797 0 1.378.209 1.744.628.366.417.477 1.001.331 1.751zM17.766 10.207h-.943l-.516 2.648h.838c.557 0 .971-.105 1.242-.314.272-.21.455-.559.551-1.049.092-.47.049-.802-.125-.995s-.524-.29-1.047-.29z" fill="currentColor" /></svg>`,children:(0,n.jsxs)(t.code,{children:[(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`if`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:` (`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`function_exists`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`(`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`'notifySend'`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`)) {`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`	notifySend`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`(`})]}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`		$buyerId,`})}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`		null`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`,                    `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6A737D`,"--shiki-dark":`#6A737D`},children:`// текст из сценария`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`		'order'`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`,`})]}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`		$orderId,`})}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`		0`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`,                       `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6A737D`,"--shiki-dark":`#6A737D`},children:`// системное событие без отправителя`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`		'success'`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`,`})]}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`		[],`})}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`		'order_paid'`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`,            `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6A737D`,"--shiki-dark":`#6A737D`},children:`// → scenarios/order_paid.tpl`})]}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`		[`})}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`			'{order_id}'`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`  =>`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:` (`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`string`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`) $orderId,`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`			'{amount}'`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`    =>`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:` $amountFormatted,`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`			'{full-link}'`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:` =>`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:` $orderUrl,`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`			'{title}'`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`     =>`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:` 'Заказ #'`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:` .`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:` $orderId,`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`			'{sender}'`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`    =>`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:` 'Система'`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`,`})]}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`		],`})}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`		[],                      `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6A737D`,"--shiki-dark":`#6A737D`},children:`// newsRow: опционально строка новости для тегов DLE`})]}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`	);`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`}`})})]})})}),(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:`$message = null`}),` — тело только из `,(0,n.jsx)(t.code,{children:`.tpl`}),`. Если шаблон пуст или не найден, а `,(0,n.jsx)(t.code,{children:`$message`}),` тоже пуст — уведомление не уйдёт.`]})]}),(0,n.jsxs)(i,{children:[(0,n.jsx)(t.h3,{id:`шаг-3-каналы-по-желанию`,children:`Шаг 3: каналы (по желанию)`}),(0,n.jsxs)(t.p,{children:[`Пустой `,(0,n.jsx)(t.code,{children:`$channels`}),` — берутся флаги модуля `,(0,n.jsx)(t.code,{children:`send_email`}),` / `,(0,n.jsx)(t.code,{children:`send_pm`}),` и site по умолчанию.`]}),(0,n.jsx)(t.p,{children:`Принудительно только сайт:`}),(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M7.01 10.207h-.944l-.515 2.648h.838c.556 0 .97-.105 1.242-.314.272-.21.455-.559.55-1.049.092-.47.05-.802-.124-.995-.175-.193-.523-.29-1.047-.29zM12 5.688C5.373 5.688 0 8.514 0 12s5.373 6.313 12 6.313S24 15.486 24 12c0-3.486-5.373-6.312-12-6.312zm-3.26 7.451c-.261.25-.575.438-.917.551-.336.108-.765.164-1.285.164H5.357l-.327 1.681H3.652l1.23-6.326h2.65c.797 0 1.378.209 1.744.628.366.418.476 1.002.33 1.752a2.836 2.836 0 0 1-.305.847c-.143.255-.33.49-.561.703zm4.024.715l.543-2.799c.063-.318.039-.536-.068-.651-.107-.116-.336-.174-.687-.174H11.46l-.704 3.625H9.388l1.23-6.327h1.367l-.327 1.682h1.218c.767 0 1.295.134 1.586.401s.378.7.263 1.299l-.572 2.944h-1.389zm7.597-2.265a2.782 2.782 0 0 1-.305.847c-.143.255-.33.49-.561.703a2.44 2.44 0 0 1-.917.551c-.336.108-.765.164-1.286.164h-1.18l-.327 1.682h-1.378l1.23-6.326h2.649c.797 0 1.378.209 1.744.628.366.417.477 1.001.331 1.751zM17.766 10.207h-.943l-.516 2.648h.838c.557 0 .971-.105 1.242-.314.272-.21.455-.559.551-1.049.092-.47.049-.802-.125-.995s-.524-.29-1.047-.29z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`notifySend`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`($uid, `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`'Текст'`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`, `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`'custom'`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`, `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`0`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`, `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`0`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`, `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`'info'`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`, [`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`'site'`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:` =>`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:` true`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`, `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`'email'`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:` =>`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:` false`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`, `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`'pm'`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:` =>`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:` false`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`]);`})]})})})})]})]}),`
`,(0,n.jsx)(t.h2,{id:`параметры-которые-важны-для-кастома`,children:`Параметры, которые важны для кастома`}),`
`,(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`Параметр`}),(0,n.jsx)(t.th,{children:`Зачем`})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:`$recipientId`})}),(0,n.jsx)(t.td,{children:`кому`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:`$message`})}),(0,n.jsxs)(t.td,{children:[`готовый текст `,(0,n.jsx)(t.strong,{children:`или`}),` `,(0,n.jsx)(t.code,{children:`null`}),`, если есть сценарий`]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:`$scenario`})}),(0,n.jsxs)(t.td,{children:[`имя файла в `,(0,n.jsx)(t.code,{children:`scenarios/`}),` без расширения`]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:`$extraVars`})}),(0,n.jsxs)(t.td,{children:[`плейсхолдеры `,(0,n.jsx)(t.code,{children:`{'{…}'}`}),` для `,(0,n.jsx)(t.code,{children:`.tpl`})]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsxs)(t.td,{children:[(0,n.jsx)(t.code,{children:`$contentType`}),` / `,(0,n.jsx)(t.code,{children:`$contentTypeId`})]}),(0,n.jsx)(t.td,{children:`связь в ленте (фильтры, клик)`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:`$newsRow`})}),(0,n.jsx)(t.td,{children:`если нужны штатные теги новости DLE в шаблоне`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:`$channels`})}),(0,n.jsx)(t.td,{children:`сузить сайт / почту / ЛС`})]})]})]}),`
`,(0,n.jsxs)(t.p,{children:[`Через класс: `,(0,n.jsx)(t.code,{children:`DevCraft\\Modules\\Notifications\\Services\\Notify::send(…)`}),`.`]}),`
`,(0,n.jsx)(t.h2,{id:`куда-вешать-вызов`,children:`Куда вешать вызов`}),`
`,(0,n.jsx)(t.p,{children:`Типичные точки:`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[`PHP-хак после сохранения сущности (`,(0,n.jsx)(t.code,{children:`addnews`}),`, свой AJAX, оплата);`]}),`
`,(0,n.jsx)(t.li,{children:`сервис другого модуля DevCraft после бизнес-действия;`}),`
`,(0,n.jsxs)(t.li,{children:[`cron / очередь — тот же `,(0,n.jsx)(t.code,{children:`notifySend`}),`, если DevCraft уже загружен.`]}),`
`]}),`
`,(0,n.jsxs)(t.p,{children:[`Проверка: `,(0,n.jsx)(t.code,{children:`function_exists('notifySend')`}),` (функции подключает плагин через `,(0,n.jsx)(t.code,{children:`engine/modules/devcraft/notifications.php`}),`).`]}),`
`,(0,n.jsx)(t.h2,{id:`настройки-и-права-базово`,children:`Настройки и права (базово)`}),`
`,(0,n.jsx)(t.p,{children:`Без доработок модуля:`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[`Получатель должен иметь `,(0,n.jsx)(t.code,{children:`notifications_allow_view_notifications`}),`.`]}),`
`,(0,n.jsxs)(t.li,{children:[`Email / ЛС — `,(0,n.jsx)(t.code,{children:`notifications_receive_mail`}),` / `,(0,n.jsx)(t.code,{children:`notifications_receive_message`}),` + каналы в настройках.`]}),`
`,(0,n.jsxs)(t.li,{children:[`Кастомный `,(0,n.jsx)(t.code,{children:`$scenario`}),` `,(0,n.jsx)(t.strong,{children:`не`}),` привязан к штатным доп. полям (`,(0,n.jsx)(t.code,{children:`news_update`}),`, `,(0,n.jsx)(t.code,{children:`mention`}),`, …).`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$recipientId === $senderId`}),` — отправка молча пропускается.`]}),`
`]}),`
`,(0,n.jsxs)(t.p,{children:[`Чтобы событие можно было `,(0,n.jsx)(t.strong,{children:`выключать в админке`}),`, ограничивать `,(0,n.jsx)(t.strong,{children:`по группам`}),` и давать пользователю `,(0,n.jsx)(t.strong,{children:`свой выключатель`}),` — см. ниже.`]}),`
`,(0,n.jsx)(`span`,{id:`advanced`}),`
`,(0,n.jsx)(t.h2,{id:`продвинутое-подключение`,children:`Продвинутое подключение`}),`
`,(0,n.jsxs)(t.p,{children:[`Пример: событие `,(0,n.jsx)(t.code,{children:`order_paid`}),`. Цель — как у штатных сценариев: глобальный флаг, право группы, опциональное доп. поле профиля.`]}),`
`,(0,n.jsx)(t.p,{children:`Цепочка при отправке:`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsxs)(t.code,{children:[(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`выключатель в настройках модуля`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`  → право группы (получатель / отправитель)`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`    → доп. поле пользователя (если привязан)`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`      → notifySend / Notify::send`})})]})})}),`
`,(0,n.jsxs)(t.p,{children:[`Файлы модуля: `,(0,n.jsx)(t.code,{children:`devcraft/src/modules/Notifications/`}),`.`]}),`
`,(0,n.jsx)(t.h3,{id:`1-настройка-модуля-глобальный-выключатель`,children:`1. Настройка модуля (глобальный выключатель)`}),`
`,(0,n.jsxs)(t.p,{children:[`В `,(0,n.jsx)(t.code,{children:`settings.schema.php`}),` добавьте checkbox рядом с остальными `,(0,n.jsx)(t.code,{children:`notify_*`}),`:`]}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M7.01 10.207h-.944l-.515 2.648h.838c.556 0 .97-.105 1.242-.314.272-.21.455-.559.55-1.049.092-.47.05-.802-.124-.995-.175-.193-.523-.29-1.047-.29zM12 5.688C5.373 5.688 0 8.514 0 12s5.373 6.313 12 6.313S24 15.486 24 12c0-3.486-5.373-6.312-12-6.312zm-3.26 7.451c-.261.25-.575.438-.917.551-.336.108-.765.164-1.285.164H5.357l-.327 1.681H3.652l1.23-6.326h2.65c.797 0 1.378.209 1.744.628.366.418.476 1.002.33 1.752a2.836 2.836 0 0 1-.305.847c-.143.255-.33.49-.561.703zm4.024.715l.543-2.799c.063-.318.039-.536-.068-.651-.107-.116-.336-.174-.687-.174H11.46l-.704 3.625H9.388l1.23-6.327h1.367l-.327 1.682h1.218c.767 0 1.295.134 1.586.401s.378.7.263 1.299l-.572 2.944h-1.389zm7.597-2.265a2.782 2.782 0 0 1-.305.847c-.143.255-.33.49-.561.703a2.44 2.44 0 0 1-.917.551c-.336.108-.765.164-1.286.164h-1.18l-.327 1.682h-1.378l1.23-6.326h2.649c.797 0 1.378.209 1.744.628.366.417.477 1.001.331 1.751zM17.766 10.207h-.943l-.516 2.648h.838c.557 0 .971-.105 1.242-.314.272-.21.455-.559.551-1.049.092-.47.049-.802-.125-.995s-.524-.29-1.047-.29z" fill="currentColor" /></svg>`,children:(0,n.jsxs)(t.code,{children:[(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`->`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`checkbox`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`(`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`'notify_order_paid'`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`, `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`__`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`(`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`'Уведомлять об оплате заказа'`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`))`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`	->`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`description`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`(`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`__`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`(`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`'Сценарий order_paid из хака / модуля заказов.'`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`))`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`	->`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`default`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`(`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`true`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`)`})]})]})})}),`
`,(0,n.jsx)(t.p,{children:`Конфиг читается так же, как у штатных событий:`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M7.01 10.207h-.944l-.515 2.648h.838c.556 0 .97-.105 1.242-.314.272-.21.455-.559.55-1.049.092-.47.05-.802-.124-.995-.175-.193-.523-.29-1.047-.29zM12 5.688C5.373 5.688 0 8.514 0 12s5.373 6.313 12 6.313S24 15.486 24 12c0-3.486-5.373-6.312-12-6.312zm-3.26 7.451c-.261.25-.575.438-.917.551-.336.108-.765.164-1.285.164H5.357l-.327 1.681H3.652l1.23-6.326h2.65c.797 0 1.378.209 1.744.628.366.418.476 1.002.33 1.752a2.836 2.836 0 0 1-.305.847c-.143.255-.33.49-.561.703zm4.024.715l.543-2.799c.063-.318.039-.536-.068-.651-.107-.116-.336-.174-.687-.174H11.46l-.704 3.625H9.388l1.23-6.327h1.367l-.327 1.682h1.218c.767 0 1.295.134 1.586.401s.378.7.263 1.299l-.572 2.944h-1.389zm7.597-2.265a2.782 2.782 0 0 1-.305.847c-.143.255-.33.49-.561.703a2.44 2.44 0 0 1-.917.551c-.336.108-.765.164-1.286.164h-1.18l-.327 1.682h-1.378l1.23-6.326h2.649c.797 0 1.378.209 1.744.628.366.417.477 1.001.331 1.751zM17.766 10.207h-.943l-.516 2.648h.838c.557 0 .971-.105 1.242-.314.272-.21.455-.559.551-1.049.092-.47.049-.802-.125-.995s-.524-.29-1.047-.29z" fill="currentColor" /></svg>`,children:(0,n.jsxs)(t.code,{children:[(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`use`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:` DevCraft\\Core\\Support\\DataManager`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`;`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`use`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:` DevCraft\\Modules\\Notifications\\NotificationsIdentity`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`;`})]}),`
`,(0,n.jsx)(t.span,{className:`line`}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`$cfg `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`=`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:` DataManager`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`::`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`getConfig`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`(`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`NotificationsIdentity`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`::`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`code`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`());`})]}),`
`,(0,n.jsx)(t.span,{className:`line`}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`if`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:` (`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`empty`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`($cfg[`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`'notify_order_paid'`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`])) {`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`	return`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`; `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6A737D`,"--shiki-dark":`#6A737D`},children:`// событие выключено в админке`})]}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`}`})})]})})}),`
`,(0,n.jsxs)(t.p,{children:[`После изменения схемы откройте `,(0,n.jsx)(t.strong,{children:`DLE Уведомления → Настройки`}),` и сохраните форму (значение попадёт в `,(0,n.jsx)(t.code,{children:`devcraft/config/…`}),`).`]}),`
`,(0,n.jsx)(t.h3,{id:`2-право-группы`,children:`2. Право группы`}),`
`,(0,n.jsxs)(t.p,{children:[`Права хранятся JSON-картой (`,(0,n.jsx)(t.code,{children:`dc_notification_permissions.settings`}),`) — `,(0,n.jsx)(t.strong,{children:`миграция БД не нужна`}),`. Достаточно описания в `,(0,n.jsx)(t.code,{children:`permissions.defs.php`}),`:`]}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M7.01 10.207h-.944l-.515 2.648h.838c.556 0 .97-.105 1.242-.314.272-.21.455-.559.55-1.049.092-.47.05-.802-.124-.995-.175-.193-.523-.29-1.047-.29zM12 5.688C5.373 5.688 0 8.514 0 12s5.373 6.313 12 6.313S24 15.486 24 12c0-3.486-5.373-6.312-12-6.312zm-3.26 7.451c-.261.25-.575.438-.917.551-.336.108-.765.164-1.285.164H5.357l-.327 1.681H3.652l1.23-6.326h2.65c.797 0 1.378.209 1.744.628.366.418.476 1.002.33 1.752a2.836 2.836 0 0 1-.305.847c-.143.255-.33.49-.561.703zm4.024.715l.543-2.799c.063-.318.039-.536-.068-.651-.107-.116-.336-.174-.687-.174H11.46l-.704 3.625H9.388l1.23-6.327h1.367l-.327 1.682h1.218c.767 0 1.295.134 1.586.401s.378.7.263 1.299l-.572 2.944h-1.389zm7.597-2.265a2.782 2.782 0 0 1-.305.847c-.143.255-.33.49-.561.703a2.44 2.44 0 0 1-.917.551c-.336.108-.765.164-1.286.164h-1.18l-.327 1.682h-1.378l1.23-6.326h2.649c.797 0 1.378.209 1.744.628.366.417.477 1.001.331 1.751zM17.766 10.207h-.943l-.516 2.648h.838c.557 0 .971-.105 1.242-.314.272-.21.455-.559.551-1.049.092-.47.049-.802-.125-.995s-.524-.29-1.047-.29z" fill="currentColor" /></svg>`,children:(0,n.jsxs)(t.code,{children:[(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`[`})}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`	'id'`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`          =>`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:` 'notifications_receive_order_paid'`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`,`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`	'title'`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`       =>`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:` __`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`(`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`'Получать уведомления об оплате заказа?'`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`),`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`	'description'`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:` =>`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:` __`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`(`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`'Сценарий order_paid.'`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`),`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`	'level'`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`       =>`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:` 'user'`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`, `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6A737D`,"--shiki-dark":`#6A737D`},children:`// user | mod | admin`})]}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`],`})})]})})}),`
`,(0,n.jsxs)(t.p,{children:[`Страница `,(0,n.jsx)(t.strong,{children:`Права групп`}),` подхватит флаг сама (`,(0,n.jsx)(t.code,{children:`PermissionService::defs()`}),`).`]}),`
`,(0,n.jsx)(t.p,{children:`В коде отправки:`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M7.01 10.207h-.944l-.515 2.648h.838c.556 0 .97-.105 1.242-.314.272-.21.455-.559.55-1.049.092-.47.05-.802-.124-.995-.175-.193-.523-.29-1.047-.29zM12 5.688C5.373 5.688 0 8.514 0 12s5.373 6.313 12 6.313S24 15.486 24 12c0-3.486-5.373-6.312-12-6.312zm-3.26 7.451c-.261.25-.575.438-.917.551-.336.108-.765.164-1.285.164H5.357l-.327 1.681H3.652l1.23-6.326h2.65c.797 0 1.378.209 1.744.628.366.418.476 1.002.33 1.752a2.836 2.836 0 0 1-.305.847c-.143.255-.33.49-.561.703zm4.024.715l.543-2.799c.063-.318.039-.536-.068-.651-.107-.116-.336-.174-.687-.174H11.46l-.704 3.625H9.388l1.23-6.327h1.367l-.327 1.682h1.218c.767 0 1.295.134 1.586.401s.378.7.263 1.299l-.572 2.944h-1.389zm7.597-2.265a2.782 2.782 0 0 1-.305.847c-.143.255-.33.49-.561.703a2.44 2.44 0 0 1-.917.551c-.336.108-.765.164-1.286.164h-1.18l-.327 1.682h-1.378l1.23-6.326h2.649c.797 0 1.378.209 1.744.628.366.417.477 1.001.331 1.751zM17.766 10.207h-.943l-.516 2.648h.838c.557 0 .971-.105 1.242-.314.272-.21.455-.559.551-1.049.092-.47.049-.802-.125-.995s-.524-.29-1.047-.29z" fill="currentColor" /></svg>`,children:(0,n.jsxs)(t.code,{children:[(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`use`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:` DevCraft\\Modules\\Notifications\\Services\\PermissionService`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`;`})]}),`
`,(0,n.jsx)(t.span,{className:`line`}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`$perms `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`=`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:` new`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:` PermissionService`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`();`})]}),`
`,(0,n.jsx)(t.span,{className:`line`}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`if`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:` (`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`!`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`$perms`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`->`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`allows`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`($recipientId, `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`'notifications_receive_order_paid'`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`)) {`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`	return`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`;`})]}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`}`})}),`
`,(0,n.jsx)(t.span,{className:`line`}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{style:{"--shiki-light":`#6A737D`,"--shiki-dark":`#6A737D`},children:`// опционально: кто может инициировать`})}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`if`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:` ($senderId `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`>`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:` 0`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:` &&`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:` !`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`$perms`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`->`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`allows`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`($senderId, `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`'notifications_allow_view_notifications'`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`)) {`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`	return`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`;`})]}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`}`})})]})})}),`
`,(0,n.jsx)(r,{type:`info`,children:(0,n.jsxs)(t.p,{children:[`Пока у группы `,(0,n.jsx)(t.strong,{children:`нет`}),` сохранённой строки прав, базовые `,(0,n.jsx)(t.code,{children:`user`}),`-флаги считаются включёнными, `,(0,n.jsx)(t.code,{children:`admin`}),` / `,(0,n.jsx)(t.code,{children:`mod`}),` — выключенными. После первого сохранения матрицы в админке действуют явные галочки — включите новый флаг нужным группам.`]})}),`
`,(0,n.jsxs)(t.p,{children:[`См. также `,(0,n.jsx)(t.a,{href:`./permissions`,children:`Права групп`}),`.`]}),`
`,(0,n.jsx)(t.h3,{id:`3-доп-поле-пользователя-отписка-от-сценария`,children:`3. Доп. поле пользователя (отписка от сценария)`}),`
`,(0,n.jsxs)(t.p,{children:[`Штатные сценарии мапятся в `,(0,n.jsx)(t.a,{href:`./user_prefs`,children:(0,n.jsx)(t.code,{children:`UserPrefsService`})}),`. Для кастома — три правки.`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`a)`}),` select в `,(0,n.jsx)(t.code,{children:`settings.schema.php`}),` (секция «Настройки пользователя»):`]}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M7.01 10.207h-.944l-.515 2.648h.838c.556 0 .97-.105 1.242-.314.272-.21.455-.559.55-1.049.092-.47.05-.802-.124-.995-.175-.193-.523-.29-1.047-.29zM12 5.688C5.373 5.688 0 8.514 0 12s5.373 6.313 12 6.313S24 15.486 24 12c0-3.486-5.373-6.312-12-6.312zm-3.26 7.451c-.261.25-.575.438-.917.551-.336.108-.765.164-1.285.164H5.357l-.327 1.681H3.652l1.23-6.326h2.65c.797 0 1.378.209 1.744.628.366.418.476 1.002.33 1.752a2.836 2.836 0 0 1-.305.847c-.143.255-.33.49-.561.703zm4.024.715l.543-2.799c.063-.318.039-.536-.068-.651-.107-.116-.336-.174-.687-.174H11.46l-.704 3.625H9.388l1.23-6.327h1.367l-.327 1.682h1.218c.767 0 1.295.134 1.586.401s.378.7.263 1.299l-.572 2.944h-1.389zm7.597-2.265a2.782 2.782 0 0 1-.305.847c-.143.255-.33.49-.561.703a2.44 2.44 0 0 1-.917.551c-.336.108-.765.164-1.286.164h-1.18l-.327 1.682h-1.378l1.23-6.326h2.649c.797 0 1.378.209 1.744.628.366.417.477 1.001.331 1.751zM17.766 10.207h-.943l-.516 2.648h.838c.557 0 .971-.105 1.242-.314.272-.21.455-.559.551-1.049.092-.47.049-.802-.125-.995s-.524-.29-1.047-.29z" fill="currentColor" /></svg>`,children:(0,n.jsxs)(t.code,{children:[(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`->`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`select`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`(`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`'xf_notify_order_paid'`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`, `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`__`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`(`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`'Доп. поле: оплата заказа'`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`))`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`	->`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`description`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`(`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`__`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`(`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`'Пусто = не ограничивать. 0/off/no у пользователя — отказ.'`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`))`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`	->`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`options`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`([])`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`	->`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`default`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`(`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`''`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`)`})]})]})})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`b)`}),` список опций в `,(0,n.jsx)(t.code,{children:`Pages/SettingsPage.php`}),` → `,(0,n.jsx)(t.code,{children:`supplementFormData()`}),`:`]}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M7.01 10.207h-.944l-.515 2.648h.838c.556 0 .97-.105 1.242-.314.272-.21.455-.559.55-1.049.092-.47.05-.802-.124-.995-.175-.193-.523-.29-1.047-.29zM12 5.688C5.373 5.688 0 8.514 0 12s5.373 6.313 12 6.313S24 15.486 24 12c0-3.486-5.373-6.312-12-6.312zm-3.26 7.451c-.261.25-.575.438-.917.551-.336.108-.765.164-1.285.164H5.357l-.327 1.681H3.652l1.23-6.326h2.65c.797 0 1.378.209 1.744.628.366.418.476 1.002.33 1.752a2.836 2.836 0 0 1-.305.847c-.143.255-.33.49-.561.703zm4.024.715l.543-2.799c.063-.318.039-.536-.068-.651-.107-.116-.336-.174-.687-.174H11.46l-.704 3.625H9.388l1.23-6.327h1.367l-.327 1.682h1.218c.767 0 1.295.134 1.586.401s.378.7.263 1.299l-.572 2.944h-1.389zm7.597-2.265a2.782 2.782 0 0 1-.305.847c-.143.255-.33.49-.561.703a2.44 2.44 0 0 1-.917.551c-.336.108-.765.164-1.286.164h-1.18l-.327 1.682h-1.378l1.23-6.326h2.649c.797 0 1.378.209 1.744.628.366.417.477 1.001.331 1.751zM17.766 10.207h-.943l-.516 2.648h.838c.557 0 .971-.105 1.242-.314.272-.21.455-.559.551-1.049.092-.47.049-.802-.125-.995s-.524-.29-1.047-.29z" fill="currentColor" /></svg>`,children:(0,n.jsxs)(t.code,{children:[(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`return`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:` [`})]}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{style:{"--shiki-light":`#6A737D`,"--shiki-dark":`#6A737D`},children:`	// …существующие ключи…`})}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`	'xf_notify_order_paid'`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:` =>`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:` $options,`})]}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`];`})})]})})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`c)`}),` ветка в `,(0,n.jsx)(t.code,{children:`UserPrefsService::wants()`}),`:`]}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M7.01 10.207h-.944l-.515 2.648h.838c.556 0 .97-.105 1.242-.314.272-.21.455-.559.55-1.049.092-.47.05-.802-.124-.995-.175-.193-.523-.29-1.047-.29zM12 5.688C5.373 5.688 0 8.514 0 12s5.373 6.313 12 6.313S24 15.486 24 12c0-3.486-5.373-6.312-12-6.312zm-3.26 7.451c-.261.25-.575.438-.917.551-.336.108-.765.164-1.285.164H5.357l-.327 1.681H3.652l1.23-6.326h2.65c.797 0 1.378.209 1.744.628.366.418.476 1.002.33 1.752a2.836 2.836 0 0 1-.305.847c-.143.255-.33.49-.561.703zm4.024.715l.543-2.799c.063-.318.039-.536-.068-.651-.107-.116-.336-.174-.687-.174H11.46l-.704 3.625H9.388l1.23-6.327h1.367l-.327 1.682h1.218c.767 0 1.295.134 1.586.401s.378.7.263 1.299l-.572 2.944h-1.389zm7.597-2.265a2.782 2.782 0 0 1-.305.847c-.143.255-.33.49-.561.703a2.44 2.44 0 0 1-.917.551c-.336.108-.765.164-1.286.164h-1.18l-.327 1.682h-1.378l1.23-6.326h2.649c.797 0 1.378.209 1.744.628.366.417.477 1.001.331 1.751zM17.766 10.207h-.943l-.516 2.648h.838c.557 0 .971-.105 1.242-.314.272-.21.455-.559.551-1.049.092-.47.049-.802-.125-.995s-.524-.29-1.047-.29z" fill="currentColor" /></svg>`,children:(0,n.jsxs)(t.code,{children:[(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`$scenarioXf `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`=`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:` match`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:` ($scenario) {`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`	'news_update'`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`, `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`'news_published'`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:` =>`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:` 'xf_notify_news_update'`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`,`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`	'moderation_approve'`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`, `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`'moderation_reject'`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:` =>`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:` 'xf_notify_moderation'`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`,`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`	'mention'`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`     =>`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:` 'xf_notify_mention'`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`,`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`	'order_paid'`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`  =>`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:` 'xf_notify_order_paid'`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`,`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`	default`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`       =>`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:` null`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`,`})]}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`};`})})]})})}),`
`,(0,n.jsxs)(t.p,{children:[`Имя сценария в `,(0,n.jsx)(t.code,{children:`match`}),` должно совпадать с `,(0,n.jsx)(t.code,{children:`$scenario`}),` в `,(0,n.jsx)(t.code,{children:`notifySend`}),`. В настройках модуля выберите доп. поле профиля; логика значений — как в `,(0,n.jsx)(t.a,{href:`./user_prefs`,children:`Настройки пользователя`}),`.`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:`notifySend`}),` уже вызывает `,(0,n.jsx)(t.code,{children:`UserPrefsService::wants($scenarioKey, …)`}),` для каналов — отдельная проверка настроек в хаке не нужен, если сценарий заведён в `,(0,n.jsx)(t.code,{children:`match`}),`.`]}),`
`,(0,n.jsx)(t.h3,{id:`4-сборка-вызова`,children:`4. Сборка вызова`}),`
`,(0,n.jsxs)(t.p,{children:[`Файл сценария: `,(0,n.jsx)(t.code,{children:`templates/…/devcraft/notifications/scenarios/order_paid.tpl`}),`.`]}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M7.01 10.207h-.944l-.515 2.648h.838c.556 0 .97-.105 1.242-.314.272-.21.455-.559.55-1.049.092-.47.05-.802-.124-.995-.175-.193-.523-.29-1.047-.29zM12 5.688C5.373 5.688 0 8.514 0 12s5.373 6.313 12 6.313S24 15.486 24 12c0-3.486-5.373-6.312-12-6.312zm-3.26 7.451c-.261.25-.575.438-.917.551-.336.108-.765.164-1.285.164H5.357l-.327 1.681H3.652l1.23-6.326h2.65c.797 0 1.378.209 1.744.628.366.418.476 1.002.33 1.752a2.836 2.836 0 0 1-.305.847c-.143.255-.33.49-.561.703zm4.024.715l.543-2.799c.063-.318.039-.536-.068-.651-.107-.116-.336-.174-.687-.174H11.46l-.704 3.625H9.388l1.23-6.327h1.367l-.327 1.682h1.218c.767 0 1.295.134 1.586.401s.378.7.263 1.299l-.572 2.944h-1.389zm7.597-2.265a2.782 2.782 0 0 1-.305.847c-.143.255-.33.49-.561.703a2.44 2.44 0 0 1-.917.551c-.336.108-.765.164-1.286.164h-1.18l-.327 1.682h-1.378l1.23-6.326h2.649c.797 0 1.378.209 1.744.628.366.417.477 1.001.331 1.751zM17.766 10.207h-.943l-.516 2.648h.838c.557 0 .971-.105 1.242-.314.272-.21.455-.559.551-1.049.092-.47.049-.802-.125-.995s-.524-.29-1.047-.29z" fill="currentColor" /></svg>`,children:(0,n.jsxs)(t.code,{children:[(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`use`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:` DevCraft\\Core\\Support\\DataManager`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`;`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`use`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:` DevCraft\\Modules\\Notifications\\NotificationsIdentity`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`;`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`use`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:` DevCraft\\Modules\\Notifications\\Services\\PermissionService`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`;`})]}),`
`,(0,n.jsx)(t.span,{className:`line`}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`function`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:` notifyOrderPaid`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`(`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`int`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:` $buyerId, `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`int`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:` $orderId, `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`string`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:` $amount, `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`string`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:` $url, `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`int`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:` $senderId `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`=`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:` 0`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`)`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`:`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:` void`})]}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`{`})}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`	if`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:` (`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`!`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`function_exists`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`(`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`'notifySend'`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`) `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`||`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:` $buyerId `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`<=`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:` 0`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`) {`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`		return`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`;`})]}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`	}`})}),`
`,(0,n.jsx)(t.span,{className:`line`}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`	$cfg `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`=`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:` DataManager`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`::`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`getConfig`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`(`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`NotificationsIdentity`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`::`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`code`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`());`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`	if`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:` (`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`empty`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`($cfg[`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`'notify_order_paid'`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`])) {`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`		return`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`;`})]}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`	}`})}),`
`,(0,n.jsx)(t.span,{className:`line`}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`	$perms `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`=`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:` new`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:` PermissionService`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`();`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`	if`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:` (`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`!`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`$perms`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`->`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`allows`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`($buyerId, `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`'notifications_receive_order_paid'`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`)) {`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`		return`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`;`})]}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`	}`})}),`
`,(0,n.jsx)(t.span,{className:`line`}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`	notifySend`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`(`})]}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`		$buyerId,`})}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`		null`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`,`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`		'order'`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`,`})]}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`		$orderId,`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`		$senderId,`})}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`		'success'`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`,`})]}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`		[],`})}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`		'order_paid'`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`,`})]}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`		[`})}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`			'{order_id}'`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`  =>`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:` (`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`string`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`) $orderId,`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`			'{amount}'`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`    =>`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:` $amount,`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`			'{full-link}'`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:` =>`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:` $url,`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`			'{title}'`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`     =>`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:` 'Заказ #'`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:` .`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:` $orderId,`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`			'{sender}'`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`    =>`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:` 'Система'`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`,`})]}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`		],`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`	);`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`}`})})]})})}),`
`,(0,n.jsxs)(t.p,{children:[`Права ленты / почты / ЛС (`,(0,n.jsx)(t.code,{children:`notifications_allow_view_notifications`}),`, `,(0,n.jsx)(t.code,{children:`notifications_receive_mail`}),`, …) и каналы модуля по-прежнему проверяет `,(0,n.jsx)(t.code,{children:`NotificationService::send`}),`.`]}),`
`,(0,n.jsx)(t.h3,{id:`5-свой-модуль-devcraft-без-патча-notifications`,children:`5. Свой модуль DevCraft (без патча Notifications)`}),`
`,(0,n.jsxs)(t.p,{children:[`Если событие живёт в `,(0,n.jsx)(t.strong,{children:`вашем`}),` модуле:`]}),`
`,(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`Что`}),(0,n.jsx)(t.th,{children:`Где`})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`Выключатель`}),(0,n.jsxs)(t.td,{children:[(0,n.jsx)(t.code,{children:`settings.schema.php`}),` `,(0,n.jsx)(t.strong,{children:`вашего`}),` модуля + `,(0,n.jsx)(t.code,{children:`DataManager::getConfig(YourIdentity::code())`})]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`Права`}),(0,n.jsxs)(t.td,{children:[`свои defs `,(0,n.jsx)(t.strong,{children:`или`}),` проверка существующих флагов Notifications через `,(0,n.jsx)(t.code,{children:`PermissionService`})]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`Текст / tpl`}),(0,n.jsxs)(t.td,{children:[(0,n.jsx)(t.code,{children:`notifySend`}),` + сценарий в скине Notifications (шаблоны общие)`]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`Доп. поле пользователя`}),(0,n.jsxs)(t.td,{children:[`либо патч `,(0,n.jsx)(t.code,{children:`UserPrefsService`}),` как выше, либо своя проверка доп. поля до `,(0,n.jsx)(t.code,{children:`notifySend`})]})]})]})]}),`
`,(0,n.jsx)(t.p,{children:`Патч Notifications нужен только если хотите единый UX: флаг в «Правах групп» уведомлений и выбор доп. поля на их странице настроек.`}),`
`,(0,n.jsx)(t.h3,{id:`чеклист-продвинутого-подключения`,children:`Чеклист продвинутого подключения`}),`
`,(0,n.jsxs)(t.ol,{children:[`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.code,{children:`scenarios/{имя}.tpl`})}),`
`,(0,n.jsxs)(t.li,{children:[`Checkbox `,(0,n.jsx)(t.code,{children:`notify_*`}),` в `,(0,n.jsx)(t.code,{children:`settings.schema.php`}),` + проверка `,(0,n.jsx)(t.code,{children:`empty($cfg[…])`})]}),`
`,(0,n.jsxs)(t.li,{children:[`Флаг в `,(0,n.jsx)(t.code,{children:`permissions.defs.php`}),` + `,(0,n.jsx)(t.code,{children:`PermissionService::allows`})]}),`
`,(0,n.jsxs)(t.li,{children:[`(Опционально) `,(0,n.jsx)(t.code,{children:`xf_notify_*`}),` + `,(0,n.jsx)(t.code,{children:`SettingsPage::supplementFormData`}),` + ветка в `,(0,n.jsx)(t.code,{children:`UserPrefsService`})]}),`
`,(0,n.jsx)(t.li,{children:`Включить флаг группам в админке; выбрать доп. поле; сохранить настройки`}),`
`,(0,n.jsxs)(t.li,{children:[`Вызов `,(0,n.jsx)(t.code,{children:`notifySend`}),` с тем же `,(0,n.jsx)(t.code,{children:`$scenario`})]}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`минимальный-чеклист`,children:`Минимальный чеклист`}),`
`,(0,n.jsxs)(t.ol,{children:[`
`,(0,n.jsxs)(t.li,{children:[`Файл `,(0,n.jsx)(t.code,{children:`scenarios/{имя}.tpl`}),` (или готовый `,(0,n.jsx)(t.code,{children:`$message`}),`).`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`notifySend(...)`}),` с `,(0,n.jsx)(t.code,{children:`$scenario = '{имя}'`}),` и нужными `,(0,n.jsx)(t.code,{children:`extraVars`}),`.`]}),`
`,(0,n.jsx)(t.li,{children:`Проверка на сайте: колокольчик / стена; при необходимости email и ЛС в настройках модуля.`}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`см-также`,children:`См. также`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:`./scenarios`,children:`Сценарии событий`}),` — штатная таблица событий`]}),`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`./scenario_templates`,children:`Шаблоны и теги`})}),`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`./permissions`,children:`Права групп`})}),`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`./user_prefs`,children:`Настройки пользователя`})}),`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`../reference/Notify`,children:`Notify`})}),`
`]})]})}function l(e={}){let{wrapper:t}=e.components||{};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}function u(e,t){throw Error(`Expected `+(t?`component`:`object`)+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}export{a as _markdown,l as default,r as frontmatter,i as lastModified,o as structuredData,s as toc};