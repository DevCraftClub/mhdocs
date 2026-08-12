import{r as e}from"./rolldown-runtime-QTnfLwEv.js";import{t}from"./jsx-runtime-By8HlURe.js";var n=e(t()),r={title:`Разработка каналов доставки RePost`},i=new Date(1786533408e3),a=`

Провайдер RePost — **канал доставки**: Telegram, VK, webhook, своя БД, внешний API и т.п.\\
Контракт: \`ProviderInterface\` → рекомендуется \`extends AbstractProvider\` → \`send(…): SendResult\`.

\`\`\`mermaid
flowchart TB
  Dispatch[DispatchService] --> Registry[ProviderRegistry]
  Registry --> P[ProviderInterface]
  P --> Abstract[AbstractProvider]
  Abstract --> TG[TelegramProvider]
  Abstract --> Custom[Webhook / DB / API / ...]
  P --> DTO["PostContext + RenderedMessage → SendResult"]
\`\`\`

## Структура каталога [#структура-каталога]

\`\`\`text
devcraft/src/modules/RePost/Provider/
├── ProviderInterface.php
├── AbstractProvider.php          # ok/fail + mediaByteLimits + allowedMediaExtensions + filterMediaByLimits + templateTags()
├── TemplateTagsInterface.php
├── DefaultTemplateTags.php
├── ProviderRegistry.php
└── MyChannel/
    ├── init.php
    ├── settings.schema.php
    └── MyChannelProvider.php
\`\`\`

## init.php [#initphp]

\`\`\`php
return [
    'name'    => 'mychannel',
    'title'   => 'My Channel',
    'version' => '200.1.0',
    'class'   => \\DevCraft\\Modules\\RePost\\Provider\\MyChannel\\MyChannelProvider::class,
];
\`\`\`

\`ProviderRegistry\` сканирует подкаталоги с \`init.php\` и регистрирует по ключу \`name\`.

## Обязательно: теги шаблона (\`TemplateTagsInterface\`) [#обязательно-теги-шаблона-templatetagsinterface]

Каждый канал **должен** вернуть реализацию из \`templateTags()\`:

* \`implements TemplateTagsInterface\` **или** \`extends DefaultTemplateTags\`
* свои HTML-теги канала — в \`allowedHtmlTags()\` / \`sanitizeHtml()\`
* UI-чипы редактора — \`hints()\`; post-pass — \`applyAfterParse()\`; плейсхолдеры — \`extraPlaceholders()\`

По умолчанию \`AbstractProvider::templateTags()\` → \`DefaultTemplateTags\`.\\
Telegram: \`TelegramTemplateTags\` (кнопки, \`[repost_media_*]\`, allowlist Bot API).

\`\`\`text
Provider/
  TemplateTagsInterface.php
  DefaultTemplateTags.php
  Telegram/TelegramTemplateTags.php
\`\`\`

\`ContentRenderer\` вызывает tags выбранного подключения после \`ParseTemplateTags::apply\`.

## Обязательно: лимиты медиа [#обязательно-лимиты-медиа]

Каждый \`extends AbstractProvider\` **должен**:

1. Реализовать \`mediaByteLimits(): array\` — ключи \`photo\` / \`video\` / \`audio\` / \`document\` → байты. Нет ключа или \`0\` = без лимита для типа.
2. В \`send()\` **до аплоада** вызвать \`filterMediaByLimits($message)\` и работать уже с отфильтрованным \`RenderedMessage\`.

Локальные файлы больше лимита отбрасываются; публичный URL без локального файла остаётся (размер неизвестен). В \`skipped\` — список отброшенных (path, kind, bytes, limit).

Webhook / БД без лимитов:

\`\`\`php
protected function mediaByteLimits(): array {
	return []; // фильтр всё равно вызывается — no-op по размеру
}
\`\`\`

Telegram: см. \`Provider/Telegram/MediaLimits.php\` (photo 10 MiB, video/audio/document 50 MiB).

## Обязательно: расширения медиа (\`allowedMediaExtensions\`) [#обязательно-расширения-медиа-allowedmediaextensions]

\`\`\`php
/** @return array{photo: list<string>, video: list<string>, audio: list<string>, document: list<string>} */
public function allowedMediaExtensions(): array;
\`\`\`

* Default в \`AbstractProvider\` — пустые списки (не фильтровать по расширению).
* Telegram: photo \`jpg,jpeg,png,gif,webp\`; video \`mp4\`; audio \`mp3,m4a\`; document — без жёсткого списка.
* Несовпадение заявленного типа с allowlist → переклассификация / отправка как document.
* Внешний \`url=\` перед аплоадом скачивается на сервер (\`downloadRemoteMedia\`); private/localhost — skip.

## Минимальный класс [#минимальный-класс]

\`\`\`php
final class MyChannelProvider extends AbstractProvider {

	public static function code(): string {
		return 'mychannel';
	}

	public static function meta(): array {
		return [
			'name'    => 'mychannel',
			'title'   => 'My Channel',
			'version' => '200.1.0',
		];
	}

	protected function mediaByteLimits(): array {
		return [];
	}

	public function settingsSchema(): FormSchema {
		return require DLEPlugins::Check(__DIR__ . '/settings.schema.php');
	}

	public function send(
		PostContext $context,
		RenderedMessage $message,
		array $connectionConfig,
		?array $proxy = null,
	): SendResult {
		$filtered = $this->filterMediaByLimits($message);
		$message  = $filtered['message'];
		$skipped  = $filtered['skipped'];

		$url = trim((string) ($connectionConfig['webhook_url'] ?? ''));

		if($url === '') {
			return $this->fail(__('Не задан URL'));
		}

		// … доставка по $message …

		return $this->ok(__('Отправлено'), [
			'status'            => 200,
			'skipped_oversized' => $skipped,
		]);
	}
}
\`\`\`

* \`connectionConfig\` — JSON из \`settingsSchema()\`.
* \`RenderedMessage\` уже отфильтрован по \`tg_send_type\` в ContentRenderer; лимиты размера — зона провайдера.
* Ошибки — \`$this->fail()\` → Admin logs (\`LogGenerator::for('RePost')\`).

## Примерный \`settings.schema.php\` [#примерный-settingsschemaphp]

\`FormSchemaBuilder\` как в \`Provider/Telegram/settings.schema.php\`.

## Чеклист [#чеклист]

1. Каталог \`Provider/{Code}/\` + \`init.php\` + класс + schema.
2. \`extends AbstractProvider\` + \`mediaByteLimits()\` + при необходимости \`allowedMediaExtensions()\`.
3. \`templateTags()\` — \`DefaultTemplateTags\` или свой класс (\`TemplateTagsInterface\`).
4. В \`send()\` вызвать \`filterMediaByLimits()\` до аплоада.
5. Подключение в админке → шаблон → add/edit или cron.

## Платные / внешние каналы [#платные--внешние-каналы]

Каналы вроде **VK** поставляются **отдельным ZIP** (свой \`install.xml\` + дерево \`upload/…/Provider/{Code}/\`), а не патчами ядра RePost.

* \`needplugin\` → RePost
* Composer-зависимости канала — notice + при необходимости патч \`composer_required\` в \`manifest.php\` RePost
* Vendor в ZIP не кладётся

Пример: [providers/vk.md](../providers/vk) (RePost Provider: VK).
`,o={contents:[{heading:void 0,content:"Провайдер RePost — **канал доставки**: Telegram, VK, webhook, своя БД, внешний API и т.п.\\\nКонтракт: `ProviderInterface` → рекомендуется `extends AbstractProvider` → `send(…): SendResult`."},{heading:`initphp`,content:"`ProviderRegistry` сканирует подкаталоги с `init.php` и регистрирует по ключу `name`."},{heading:`обязательно-теги-шаблона-templatetagsinterface`,content:"Каждый канал **должен** вернуть реализацию из `templateTags()`:"},{heading:`обязательно-теги-шаблона-templatetagsinterface`,content:"`implements TemplateTagsInterface` **или** `extends DefaultTemplateTags`"},{heading:`обязательно-теги-шаблона-templatetagsinterface`,content:"свои HTML-теги канала — в `allowedHtmlTags()` / `sanitizeHtml()`"},{heading:`обязательно-теги-шаблона-templatetagsinterface`,content:"UI-чипы редактора — `hints()`; post-pass — `applyAfterParse()`; плейсхолдеры — `extraPlaceholders()`"},{heading:`обязательно-теги-шаблона-templatetagsinterface`,content:"По умолчанию `AbstractProvider::templateTags()` → `DefaultTemplateTags`.\\\nTelegram: `TelegramTemplateTags` (кнопки, `[repost_media_*]`, allowlist Bot API)."},{heading:`обязательно-теги-шаблона-templatetagsinterface`,content:"`ContentRenderer` вызывает tags выбранного подключения после `ParseTemplateTags::apply`."},{heading:`обязательно-лимиты-медиа`,content:"Каждый `extends AbstractProvider` **должен**:"},{heading:`обязательно-лимиты-медиа`,content:"Реализовать `mediaByteLimits(): array` — ключи `photo` / `video` / `audio` / `document` → байты. Нет ключа или `0` = без лимита для типа."},{heading:`обязательно-лимиты-медиа`,content:"В `send()` **до аплоада** вызвать `filterMediaByLimits($message)` и работать уже с отфильтрованным `RenderedMessage`."},{heading:`обязательно-лимиты-медиа`,content:"Локальные файлы больше лимита отбрасываются; публичный URL без локального файла остаётся (размер неизвестен). В `skipped` — список отброшенных (path, kind, bytes, limit)."},{heading:`обязательно-лимиты-медиа`,content:`Webhook / БД без лимитов:`},{heading:`обязательно-лимиты-медиа`,content:"Telegram: см. `Provider/Telegram/MediaLimits.php` (photo 10 MiB, video/audio/document 50 MiB)."},{heading:`обязательно-расширения-медиа-allowedmediaextensions`,content:"Default в `AbstractProvider` — пустые списки (не фильтровать по расширению)."},{heading:`обязательно-расширения-медиа-allowedmediaextensions`,content:"Telegram: photo `jpg,jpeg,png,gif,webp`; video `mp4`; audio `mp3,m4a`; document — без жёсткого списка."},{heading:`обязательно-расширения-медиа-allowedmediaextensions`,content:`Несовпадение заявленного типа с allowlist → переклассификация / отправка как document.`},{heading:`обязательно-расширения-медиа-allowedmediaextensions`,content:"Внешний `url=` перед аплоадом скачивается на сервер (`downloadRemoteMedia`); private/localhost — skip."},{heading:`минимальный-класс`,content:"`connectionConfig` — JSON из `settingsSchema()`."},{heading:`минимальный-класс`,content:"`RenderedMessage` уже отфильтрован по `tg_send_type` в ContentRenderer; лимиты размера — зона провайдера."},{heading:`минимальный-класс`,content:"Ошибки — `$this->fail()` → Admin logs (`LogGenerator::for('RePost')`)."},{heading:`примерный-settingsschemaphp`,content:"`FormSchemaBuilder` как в `Provider/Telegram/settings.schema.php`."},{heading:`чеклист`,content:"Каталог `Provider/{Code}/` + `init.php` + класс + schema."},{heading:`чеклист`,content:"`extends AbstractProvider` + `mediaByteLimits()` + при необходимости `allowedMediaExtensions()`."},{heading:`чеклист`,content:"`templateTags()` — `DefaultTemplateTags` или свой класс (`TemplateTagsInterface`)."},{heading:`чеклист`,content:"В `send()` вызвать `filterMediaByLimits()` до аплоада."},{heading:`чеклист`,content:`Подключение в админке → шаблон → add/edit или cron.`},{heading:`платные--внешние-каналы`,content:"Каналы вроде **VK** поставляются **отдельным ZIP** (свой `install.xml` + дерево `upload/…/Provider/{Code}/`), а не патчами ядра RePost."},{heading:`платные--внешние-каналы`,content:"`needplugin` → RePost"},{heading:`платные--внешние-каналы`,content:"Composer-зависимости канала — notice + при необходимости патч `composer_required` в `manifest.php` RePost"},{heading:`платные--внешние-каналы`,content:`Vendor в ZIP не кладётся`},{heading:`платные--внешние-каналы`,content:`Пример: providers/vk.md (RePost Provider: VK).`}],headings:[{id:`структура-каталога`,content:`Структура каталога`},{id:`initphp`,content:`init.php`},{id:`обязательно-теги-шаблона-templatetagsinterface`,content:"Обязательно: теги шаблона (`TemplateTagsInterface`)"},{id:`обязательно-лимиты-медиа`,content:`Обязательно: лимиты медиа`},{id:`обязательно-расширения-медиа-allowedmediaextensions`,content:"Обязательно: расширения медиа (`allowedMediaExtensions`)"},{id:`минимальный-класс`,content:`Минимальный класс`},{id:`примерный-settingsschemaphp`,content:"Примерный `settings.schema.php`"},{id:`чеклист`,content:`Чеклист`},{id:`платные--внешние-каналы`,content:`Платные / внешние каналы`}]},s=[{depth:2,url:`#структура-каталога`,title:(0,n.jsx)(n.Fragment,{children:`Структура каталога`})},{depth:2,url:`#initphp`,title:(0,n.jsx)(n.Fragment,{children:`init.php`})},{depth:2,url:`#обязательно-теги-шаблона-templatetagsinterface`,title:(0,n.jsxs)(n.Fragment,{children:[`Обязательно: теги шаблона (`,(0,n.jsx)(`code`,{children:`TemplateTagsInterface`}),`)`]})},{depth:2,url:`#обязательно-лимиты-медиа`,title:(0,n.jsx)(n.Fragment,{children:`Обязательно: лимиты медиа`})},{depth:2,url:`#обязательно-расширения-медиа-allowedmediaextensions`,title:(0,n.jsxs)(n.Fragment,{children:[`Обязательно: расширения медиа (`,(0,n.jsx)(`code`,{children:`allowedMediaExtensions`}),`)`]})},{depth:2,url:`#минимальный-класс`,title:(0,n.jsx)(n.Fragment,{children:`Минимальный класс`})},{depth:2,url:`#примерный-settingsschemaphp`,title:(0,n.jsxs)(n.Fragment,{children:[`Примерный `,(0,n.jsx)(`code`,{children:`settings.schema.php`})]})},{depth:2,url:`#чеклист`,title:(0,n.jsx)(n.Fragment,{children:`Чеклист`})},{depth:2,url:`#платные--внешние-каналы`,title:(0,n.jsx)(n.Fragment,{children:`Платные / внешние каналы`})}];function c(e){let t={a:`a`,br:`br`,code:`code`,h2:`h2`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,span:`span`,strong:`strong`,ul:`ul`,...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:[`Провайдер RePost — `,(0,n.jsx)(t.strong,{children:`канал доставки`}),`: Telegram, VK, webhook, своя БД, внешний API и т.п.`,(0,n.jsx)(t.br,{}),`
`,`Контракт: `,(0,n.jsx)(t.code,{children:`ProviderInterface`}),` → рекомендуется `,(0,n.jsx)(t.code,{children:`extends AbstractProvider`}),` → `,(0,n.jsx)(t.code,{children:`send(…): SendResult`}),`.`]}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsxs)(t.code,{children:[(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`flowchart TB`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`  Dispatch[DispatchService] --> Registry[ProviderRegistry]`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`  Registry --> P[ProviderInterface]`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`  P --> Abstract[AbstractProvider]`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`  Abstract --> TG[TelegramProvider]`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`  Abstract --> Custom[Webhook / DB / API / ...]`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`  P --> DTO["PostContext + RenderedMessage → SendResult"]`})})]})})}),`
`,(0,n.jsx)(t.h2,{id:`структура-каталога`,children:`Структура каталога`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsxs)(t.code,{children:[(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`devcraft/src/modules/RePost/Provider/`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`├── ProviderInterface.php`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`├── AbstractProvider.php          # ok/fail + mediaByteLimits + allowedMediaExtensions + filterMediaByLimits + templateTags()`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`├── TemplateTagsInterface.php`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`├── DefaultTemplateTags.php`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`├── ProviderRegistry.php`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`└── MyChannel/`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`    ├── init.php`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`    ├── settings.schema.php`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`    └── MyChannelProvider.php`})})]})})}),`
`,(0,n.jsx)(t.h2,{id:`initphp`,children:`init.php`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M7.01 10.207h-.944l-.515 2.648h.838c.556 0 .97-.105 1.242-.314.272-.21.455-.559.55-1.049.092-.47.05-.802-.124-.995-.175-.193-.523-.29-1.047-.29zM12 5.688C5.373 5.688 0 8.514 0 12s5.373 6.313 12 6.313S24 15.486 24 12c0-3.486-5.373-6.312-12-6.312zm-3.26 7.451c-.261.25-.575.438-.917.551-.336.108-.765.164-1.285.164H5.357l-.327 1.681H3.652l1.23-6.326h2.65c.797 0 1.378.209 1.744.628.366.418.476 1.002.33 1.752a2.836 2.836 0 0 1-.305.847c-.143.255-.33.49-.561.703zm4.024.715l.543-2.799c.063-.318.039-.536-.068-.651-.107-.116-.336-.174-.687-.174H11.46l-.704 3.625H9.388l1.23-6.327h1.367l-.327 1.682h1.218c.767 0 1.295.134 1.586.401s.378.7.263 1.299l-.572 2.944h-1.389zm7.597-2.265a2.782 2.782 0 0 1-.305.847c-.143.255-.33.49-.561.703a2.44 2.44 0 0 1-.917.551c-.336.108-.765.164-1.286.164h-1.18l-.327 1.682h-1.378l1.23-6.326h2.649c.797 0 1.378.209 1.744.628.366.417.477 1.001.331 1.751zM17.766 10.207h-.943l-.516 2.648h.838c.557 0 .971-.105 1.242-.314.272-.21.455-.559.551-1.049.092-.47.049-.802-.125-.995s-.524-.29-1.047-.29z" fill="currentColor" /></svg>`,children:(0,n.jsxs)(t.code,{children:[(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`return`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:` [`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`    'name'`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`    =>`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:` 'mychannel'`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`,`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`    'title'`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`   =>`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:` 'My Channel'`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`,`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`    'version'`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:` =>`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:` '200.1.0'`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`,`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`    'class'`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`   =>`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:` \\DevCraft\\Modules\\RePost\\Provider\\MyChannel\\MyChannelProvider`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`::class`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`,`})]}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`];`})})]})})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:`ProviderRegistry`}),` сканирует подкаталоги с `,(0,n.jsx)(t.code,{children:`init.php`}),` и регистрирует по ключу `,(0,n.jsx)(t.code,{children:`name`}),`.`]}),`
`,(0,n.jsxs)(t.h2,{id:`обязательно-теги-шаблона-templatetagsinterface`,children:[`Обязательно: теги шаблона (`,(0,n.jsx)(t.code,{children:`TemplateTagsInterface`}),`)`]}),`
`,(0,n.jsxs)(t.p,{children:[`Каждый канал `,(0,n.jsx)(t.strong,{children:`должен`}),` вернуть реализацию из `,(0,n.jsx)(t.code,{children:`templateTags()`}),`:`]}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`implements TemplateTagsInterface`}),` `,(0,n.jsx)(t.strong,{children:`или`}),` `,(0,n.jsx)(t.code,{children:`extends DefaultTemplateTags`})]}),`
`,(0,n.jsxs)(t.li,{children:[`свои HTML-теги канала — в `,(0,n.jsx)(t.code,{children:`allowedHtmlTags()`}),` / `,(0,n.jsx)(t.code,{children:`sanitizeHtml()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`UI-чипы редактора — `,(0,n.jsx)(t.code,{children:`hints()`}),`; post-pass — `,(0,n.jsx)(t.code,{children:`applyAfterParse()`}),`; плейсхолдеры — `,(0,n.jsx)(t.code,{children:`extraPlaceholders()`})]}),`
`]}),`
`,(0,n.jsxs)(t.p,{children:[`По умолчанию `,(0,n.jsx)(t.code,{children:`AbstractProvider::templateTags()`}),` → `,(0,n.jsx)(t.code,{children:`DefaultTemplateTags`}),`.`,(0,n.jsx)(t.br,{}),`
`,`Telegram: `,(0,n.jsx)(t.code,{children:`TelegramTemplateTags`}),` (кнопки, `,(0,n.jsx)(t.code,{children:`[repost_media_*]`}),`, allowlist Bot API).`]}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsxs)(t.code,{children:[(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`Provider/`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`  TemplateTagsInterface.php`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`  DefaultTemplateTags.php`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`  Telegram/TelegramTemplateTags.php`})})]})})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:`ContentRenderer`}),` вызывает tags выбранного подключения после `,(0,n.jsx)(t.code,{children:`ParseTemplateTags::apply`}),`.`]}),`
`,(0,n.jsx)(t.h2,{id:`обязательно-лимиты-медиа`,children:`Обязательно: лимиты медиа`}),`
`,(0,n.jsxs)(t.p,{children:[`Каждый `,(0,n.jsx)(t.code,{children:`extends AbstractProvider`}),` `,(0,n.jsx)(t.strong,{children:`должен`}),`:`]}),`
`,(0,n.jsxs)(t.ol,{children:[`
`,(0,n.jsxs)(t.li,{children:[`Реализовать `,(0,n.jsx)(t.code,{children:`mediaByteLimits(): array`}),` — ключи `,(0,n.jsx)(t.code,{children:`photo`}),` / `,(0,n.jsx)(t.code,{children:`video`}),` / `,(0,n.jsx)(t.code,{children:`audio`}),` / `,(0,n.jsx)(t.code,{children:`document`}),` → байты. Нет ключа или `,(0,n.jsx)(t.code,{children:`0`}),` = без лимита для типа.`]}),`
`,(0,n.jsxs)(t.li,{children:[`В `,(0,n.jsx)(t.code,{children:`send()`}),` `,(0,n.jsx)(t.strong,{children:`до аплоада`}),` вызвать `,(0,n.jsx)(t.code,{children:`filterMediaByLimits($message)`}),` и работать уже с отфильтрованным `,(0,n.jsx)(t.code,{children:`RenderedMessage`}),`.`]}),`
`]}),`
`,(0,n.jsxs)(t.p,{children:[`Локальные файлы больше лимита отбрасываются; публичный URL без локального файла остаётся (размер неизвестен). В `,(0,n.jsx)(t.code,{children:`skipped`}),` — список отброшенных (path, kind, bytes, limit).`]}),`
`,(0,n.jsx)(t.p,{children:`Webhook / БД без лимитов:`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M7.01 10.207h-.944l-.515 2.648h.838c.556 0 .97-.105 1.242-.314.272-.21.455-.559.55-1.049.092-.47.05-.802-.124-.995-.175-.193-.523-.29-1.047-.29zM12 5.688C5.373 5.688 0 8.514 0 12s5.373 6.313 12 6.313S24 15.486 24 12c0-3.486-5.373-6.312-12-6.312zm-3.26 7.451c-.261.25-.575.438-.917.551-.336.108-.765.164-1.285.164H5.357l-.327 1.681H3.652l1.23-6.326h2.65c.797 0 1.378.209 1.744.628.366.418.476 1.002.33 1.752a2.836 2.836 0 0 1-.305.847c-.143.255-.33.49-.561.703zm4.024.715l.543-2.799c.063-.318.039-.536-.068-.651-.107-.116-.336-.174-.687-.174H11.46l-.704 3.625H9.388l1.23-6.327h1.367l-.327 1.682h1.218c.767 0 1.295.134 1.586.401s.378.7.263 1.299l-.572 2.944h-1.389zm7.597-2.265a2.782 2.782 0 0 1-.305.847c-.143.255-.33.49-.561.703a2.44 2.44 0 0 1-.917.551c-.336.108-.765.164-1.286.164h-1.18l-.327 1.682h-1.378l1.23-6.326h2.649c.797 0 1.378.209 1.744.628.366.417.477 1.001.331 1.751zM17.766 10.207h-.943l-.516 2.648h.838c.557 0 .971-.105 1.242-.314.272-.21.455-.559.551-1.049.092-.47.049-.802-.125-.995s-.524-.29-1.047-.29z" fill="currentColor" /></svg>`,children:(0,n.jsxs)(t.code,{children:[(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`protected`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:` function`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:` mediaByteLimits`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`()`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`:`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:` array`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:` {`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`	return`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:` []; `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6A737D`,"--shiki-dark":`#6A737D`},children:`// фильтр всё равно вызывается — no-op по размеру`})]}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`}`})})]})})}),`
`,(0,n.jsxs)(t.p,{children:[`Telegram: см. `,(0,n.jsx)(t.code,{children:`Provider/Telegram/MediaLimits.php`}),` (photo 10 MiB, video/audio/document 50 MiB).`]}),`
`,(0,n.jsxs)(t.h2,{id:`обязательно-расширения-медиа-allowedmediaextensions`,children:[`Обязательно: расширения медиа (`,(0,n.jsx)(t.code,{children:`allowedMediaExtensions`}),`)`]}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M7.01 10.207h-.944l-.515 2.648h.838c.556 0 .97-.105 1.242-.314.272-.21.455-.559.55-1.049.092-.47.05-.802-.124-.995-.175-.193-.523-.29-1.047-.29zM12 5.688C5.373 5.688 0 8.514 0 12s5.373 6.313 12 6.313S24 15.486 24 12c0-3.486-5.373-6.312-12-6.312zm-3.26 7.451c-.261.25-.575.438-.917.551-.336.108-.765.164-1.285.164H5.357l-.327 1.681H3.652l1.23-6.326h2.65c.797 0 1.378.209 1.744.628.366.418.476 1.002.33 1.752a2.836 2.836 0 0 1-.305.847c-.143.255-.33.49-.561.703zm4.024.715l.543-2.799c.063-.318.039-.536-.068-.651-.107-.116-.336-.174-.687-.174H11.46l-.704 3.625H9.388l1.23-6.327h1.367l-.327 1.682h1.218c.767 0 1.295.134 1.586.401s.378.7.263 1.299l-.572 2.944h-1.389zm7.597-2.265a2.782 2.782 0 0 1-.305.847c-.143.255-.33.49-.561.703a2.44 2.44 0 0 1-.917.551c-.336.108-.765.164-1.286.164h-1.18l-.327 1.682h-1.378l1.23-6.326h2.649c.797 0 1.378.209 1.744.628.366.417.477 1.001.331 1.751zM17.766 10.207h-.943l-.516 2.648h.838c.557 0 .971-.105 1.242-.314.272-.21.455-.559.551-1.049.092-.47.049-.802-.125-.995s-.524-.29-1.047-.29z" fill="currentColor" /></svg>`,children:(0,n.jsxs)(t.code,{children:[(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#6A737D`,"--shiki-dark":`#6A737D`},children:`/** `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`@return`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:` array`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6A737D`,"--shiki-dark":`#6A737D`},children:`{`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`photo`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6A737D`,"--shiki-dark":`#6A737D`},children:`: list<string>, video: list<string>, audio: list<string>, document: list<string>} */`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`public`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:` function`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:` allowedMediaExtensions`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`()`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`:`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:` array`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`;`})]})]})})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[`Default в `,(0,n.jsx)(t.code,{children:`AbstractProvider`}),` — пустые списки (не фильтровать по расширению).`]}),`
`,(0,n.jsxs)(t.li,{children:[`Telegram: photo `,(0,n.jsx)(t.code,{children:`jpg,jpeg,png,gif,webp`}),`; video `,(0,n.jsx)(t.code,{children:`mp4`}),`; audio `,(0,n.jsx)(t.code,{children:`mp3,m4a`}),`; document — без жёсткого списка.`]}),`
`,(0,n.jsx)(t.li,{children:`Несовпадение заявленного типа с allowlist → переклассификация / отправка как document.`}),`
`,(0,n.jsxs)(t.li,{children:[`Внешний `,(0,n.jsx)(t.code,{children:`url=`}),` перед аплоадом скачивается на сервер (`,(0,n.jsx)(t.code,{children:`downloadRemoteMedia`}),`); private/localhost — skip.`]}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`минимальный-класс`,children:`Минимальный класс`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M7.01 10.207h-.944l-.515 2.648h.838c.556 0 .97-.105 1.242-.314.272-.21.455-.559.55-1.049.092-.47.05-.802-.124-.995-.175-.193-.523-.29-1.047-.29zM12 5.688C5.373 5.688 0 8.514 0 12s5.373 6.313 12 6.313S24 15.486 24 12c0-3.486-5.373-6.312-12-6.312zm-3.26 7.451c-.261.25-.575.438-.917.551-.336.108-.765.164-1.285.164H5.357l-.327 1.681H3.652l1.23-6.326h2.65c.797 0 1.378.209 1.744.628.366.418.476 1.002.33 1.752a2.836 2.836 0 0 1-.305.847c-.143.255-.33.49-.561.703zm4.024.715l.543-2.799c.063-.318.039-.536-.068-.651-.107-.116-.336-.174-.687-.174H11.46l-.704 3.625H9.388l1.23-6.327h1.367l-.327 1.682h1.218c.767 0 1.295.134 1.586.401s.378.7.263 1.299l-.572 2.944h-1.389zm7.597-2.265a2.782 2.782 0 0 1-.305.847c-.143.255-.33.49-.561.703a2.44 2.44 0 0 1-.917.551c-.336.108-.765.164-1.286.164h-1.18l-.327 1.682h-1.378l1.23-6.326h2.649c.797 0 1.378.209 1.744.628.366.417.477 1.001.331 1.751zM17.766 10.207h-.943l-.516 2.648h.838c.557 0 .971-.105 1.242-.314.272-.21.455-.559.551-1.049.092-.47.049-.802-.125-.995s-.524-.29-1.047-.29z" fill="currentColor" /></svg>`,children:(0,n.jsxs)(t.code,{children:[(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`final`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:` class`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:` MyChannelProvider`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:` extends`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:` AbstractProvider`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:` {`})]}),`
`,(0,n.jsx)(t.span,{className:`line`}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`	public`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:` static`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:` function`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:` code`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`()`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`:`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:` string`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:` {`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`		return`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:` 'mychannel'`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`;`})]}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`	}`})}),`
`,(0,n.jsx)(t.span,{className:`line`}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`	public`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:` static`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:` function`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:` meta`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`()`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`:`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:` array`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:` {`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`		return`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:` [`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`			'name'`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`    =>`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:` 'mychannel'`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`,`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`			'title'`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`   =>`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:` 'My Channel'`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`,`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`			'version'`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:` =>`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:` '200.1.0'`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`,`})]}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`		];`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`	}`})}),`
`,(0,n.jsx)(t.span,{className:`line`}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`	protected`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:` function`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:` mediaByteLimits`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`()`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`:`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:` array`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:` {`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`		return`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:` [];`})]}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`	}`})}),`
`,(0,n.jsx)(t.span,{className:`line`}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`	public`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:` function`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:` settingsSchema`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`()`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`:`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:` FormSchema`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:` {`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`		return`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:` require`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:` DLEPlugins`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`::`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`Check`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`(`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`__DIR__`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:` .`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:` '/settings.schema.php'`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`);`})]}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`	}`})}),`
`,(0,n.jsx)(t.span,{className:`line`}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`	public`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:` function`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:` send`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`(`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`		PostContext`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:` $context,`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`		RenderedMessage`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:` $message,`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`		array`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:` $connectionConfig,`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`		?array`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:` $proxy `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`=`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:` null`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`,`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`	)`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`:`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:` SendResult`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:` {`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`		$filtered `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`=`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:` $this`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`->`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`filterMediaByLimits`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`($message);`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`		$message  `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`=`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:` $filtered[`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`'message'`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`];`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`		$skipped  `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`=`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:` $filtered[`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`'skipped'`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`];`})]}),`
`,(0,n.jsx)(t.span,{className:`line`}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`		$url `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`=`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:` trim`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`((`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`string`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`) ($connectionConfig[`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`'webhook_url'`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`] `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`??`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:` ''`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`));`})]}),`
`,(0,n.jsx)(t.span,{className:`line`}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`		if`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`($url `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`===`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:` ''`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`) {`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`			return`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:` $this`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`->`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`fail`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`(`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`__`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`(`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`'Не задан URL'`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`));`})]}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`		}`})}),`
`,(0,n.jsx)(t.span,{className:`line`}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{style:{"--shiki-light":`#6A737D`,"--shiki-dark":`#6A737D`},children:`		// … доставка по $message …`})}),`
`,(0,n.jsx)(t.span,{className:`line`}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`		return`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:` $this`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`->`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`ok`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`(`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`__`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`(`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`'Отправлено'`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`), [`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`			'status'`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`            =>`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:` 200`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`,`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`			'skipped_oversized'`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:` =>`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:` $skipped,`})]}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`		]);`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`	}`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`}`})})]})})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`connectionConfig`}),` — JSON из `,(0,n.jsx)(t.code,{children:`settingsSchema()`}),`.`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`RenderedMessage`}),` уже отфильтрован по `,(0,n.jsx)(t.code,{children:`tg_send_type`}),` в ContentRenderer; лимиты размера — зона провайдера.`]}),`
`,(0,n.jsxs)(t.li,{children:[`Ошибки — `,(0,n.jsx)(t.code,{children:`$this->fail()`}),` → Admin logs (`,(0,n.jsx)(t.code,{children:`LogGenerator::for('RePost')`}),`).`]}),`
`]}),`
`,(0,n.jsxs)(t.h2,{id:`примерный-settingsschemaphp`,children:[`Примерный `,(0,n.jsx)(t.code,{children:`settings.schema.php`})]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:`FormSchemaBuilder`}),` как в `,(0,n.jsx)(t.code,{children:`Provider/Telegram/settings.schema.php`}),`.`]}),`
`,(0,n.jsx)(t.h2,{id:`чеклист`,children:`Чеклист`}),`
`,(0,n.jsxs)(t.ol,{children:[`
`,(0,n.jsxs)(t.li,{children:[`Каталог `,(0,n.jsx)(t.code,{children:`Provider/{Code}/`}),` + `,(0,n.jsx)(t.code,{children:`init.php`}),` + класс + schema.`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`extends AbstractProvider`}),` + `,(0,n.jsx)(t.code,{children:`mediaByteLimits()`}),` + при необходимости `,(0,n.jsx)(t.code,{children:`allowedMediaExtensions()`}),`.`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`templateTags()`}),` — `,(0,n.jsx)(t.code,{children:`DefaultTemplateTags`}),` или свой класс (`,(0,n.jsx)(t.code,{children:`TemplateTagsInterface`}),`).`]}),`
`,(0,n.jsxs)(t.li,{children:[`В `,(0,n.jsx)(t.code,{children:`send()`}),` вызвать `,(0,n.jsx)(t.code,{children:`filterMediaByLimits()`}),` до аплоада.`]}),`
`,(0,n.jsx)(t.li,{children:`Подключение в админке → шаблон → add/edit или cron.`}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`платные--внешние-каналы`,children:`Платные / внешние каналы`}),`
`,(0,n.jsxs)(t.p,{children:[`Каналы вроде `,(0,n.jsx)(t.strong,{children:`VK`}),` поставляются `,(0,n.jsx)(t.strong,{children:`отдельным ZIP`}),` (свой `,(0,n.jsx)(t.code,{children:`install.xml`}),` + дерево `,(0,n.jsx)(t.code,{children:`upload/…/Provider/{Code}/`}),`), а не патчами ядра RePost.`]}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`needplugin`}),` → RePost`]}),`
`,(0,n.jsxs)(t.li,{children:[`Composer-зависимости канала — notice + при необходимости патч `,(0,n.jsx)(t.code,{children:`composer_required`}),` в `,(0,n.jsx)(t.code,{children:`manifest.php`}),` RePost`]}),`
`,(0,n.jsx)(t.li,{children:`Vendor в ZIP не кладётся`}),`
`]}),`
`,(0,n.jsxs)(t.p,{children:[`Пример: `,(0,n.jsx)(t.a,{href:`../providers/vk`,children:`providers/vk.md`}),` (RePost Provider: VK).`]})]})}function l(e={}){let{wrapper:t}=e.components||{};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}export{a as _markdown,l as default,r as frontmatter,i as lastModified,o as structuredData,s as toc};