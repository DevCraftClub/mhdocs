import{r as e}from"./rolldown-runtime-QTnfLwEv.js";import{t}from"./jsx-runtime-By8HlURe.js";var n=e(t()),r={title:`Сторонние модули со своим пространством имён`,description:`Как подключить модуль не из DevCraft\\Modules\\: namespace в манифесте, PSR-4 при старте, настройки в third_party, два пути установки.`,version:`200.4.1`},i=new Date(1790409255e3),a=`

**Зачем:** поставить свой модуль в админку DevCraft, не втискиваясь в пространство имён ядра и не правя корневой \`composer.json\` панели.

Нужна Admin **≥ 200.4.1**. Обычный штатный модуль по-прежнему собирают через [Создание модуля](./create_module); этот гайд — для чужого префикса классов.

## Своё пространство имён [#своё-пространство-имён]

Классы модуля могут жить в любом PSR-4 префиксе, например \`VasyaPupkin\\Settings\\\`.

Панель при старте читает манифесты и регистрирует префикс → **корень каталога модуля**. Отдельный \`composer.json\` у модуля и \`dump-autoload\` на каждый сторонний пакет **не нужны**.

## Поле \`namespace\` в манифесте [#поле-namespace-в-манифесте]

Fluent:

\`\`\`php
return ModuleManifestBuilder::create()
	->mod('vasya_pupkin_settings')
	->code('vasya_pupkin_settings')
	->namespace('VasyaPupkin\\\\Settings\\\\')
	->name('Настройки Васи Пупкина')
	->version('1.0.0')
	->menu([
		AdminLink::page('Настройки', 'dashboard', SettingsPage::class, 'mif-cog', 'vasya_pupkin_settings'),
	])
	->ajax(
		ModuleAjaxConfigBuilder::create()
			->method('save_settings', SaveSettingsHandler::class)
	)
	->build(__DIR__);
\`\`\`

Если \`namespace\` не задан — как раньше: \`DevCraft\\Modules\\{имя_каталога}\\\`.

См. также: [ModuleManifestBuilder](./builders/module_manifest_builder).

## Минимальная структура [#минимальная-структура]

Достаточно:

\`\`\`text
devcraft/src/modules/VasyaPupkinSettings/
├── manifest.php
├── SettingsPage.php          # implements PageInterface / AbstractPage
├── SaveSettingsHandler.php   # тонкий AJAX (по желанию)
└── templates/settings.twig   # тонкий шаблон (по желанию)
\`\`\`

Не обязательны: \`Services/\`, \`Models/\`, миграции, свой \`settings.schema.php\`, свой JSON настроек.

Контракт страницы — \`PageInterface\` (обычно через \`AbstractPage\`). Меню указывает **полный** класс страницы.

## Настройки в конфиге хоста [#настройки-в-конфиге-хоста]

Минимальный модуль пишет значения в конфиг Admin (\`devcraft.json\`), ключ:

\`third_party.{ваш_mod}.{поле}\`

Хелпер ядра: \`DevCraft\\Core\\Config\\ThirdPartyHostSettings::get()\` / \`::merge()\`.

Чужие ключи Admin и чужие \`third_party[*]\` не трогать.

## Два пути установки [#два-пути-установки]

### 1. Папка на стенде (быстрая проверка) [#1-папка-на-стенде-быстрая-проверка]

1. Скопировать образец:

   \`specs/010-third-party-namespaces/fixtures/vasya-pupkin-settings/\`\\
   → \`devcraft/src/modules/VasyaPupkinSettings/\`

2. Точка входа: \`engine/inc/vasya_pupkin_settings.php\` → \`runAdmin(moduleDir: 'VasyaPupkinSettings')\`.

3. Зарегистрировать пункт DLE (\`admin_sections.name = vasya_pupkin_settings\`). SQL-образец: \`register_admin_section.sql\` в фикстуре.

### 2. Пакет \`install.xml\` [#2-пакет-installxml]

Тот же набор файлов + SQL регистрации секции. Состав описан в \`install.xml.example\` фикстуры (документация; zip в репозиторий Admin не кладётся).

## FAQ [#faq]

**Нужно ли жить в \`DevCraft\\Modules\\…\`?**\\
Нет. Задайте свой префикс через \`->namespace(...)\`.

**Нужен ли отдельный Composer-пакет всей панели?**\\
Нет. Регистрации PSR-4 при boot достаточно.

**Куда писать настройки без своего JSON?**\\
В \`third_party.{mod}\` конфига Admin через \`ThirdPartyHostSettings\`.

**Какой контракт у страницы?**\\
\`PageInterface\` / \`AbstractPage\`; FQCN в пункте меню манифеста.

## Образец [#образец]

Фикстура: \`specs/010-third-party-namespaces/fixtures/vasya-pupkin-settings/\`\\
Идентификаторы: \`mod=vasya_pupkin_settings\`, каталог \`VasyaPupkinSettings\`, namespace \`VasyaPupkin\\Settings\\\`.

Пошаговая проверка на стенде — в \`specs/010-third-party-namespaces/quickstart.md\`.
`,o={contents:[{heading:void 0,content:"**Зачем:** поставить свой модуль в админку DevCraft, не втискиваясь в пространство имён ядра и не правя корневой `composer.json` панели."},{heading:void 0,content:`Нужна Admin **≥ 200.4.1**. Обычный штатный модуль по-прежнему собирают через Создание модуля; этот гайд — для чужого префикса классов.`},{heading:`своё-пространство-имён`,content:"Классы модуля могут жить в любом PSR-4 префиксе, например `VasyaPupkin\\Settings\\`."},{heading:`своё-пространство-имён`,content:"Панель при старте читает манифесты и регистрирует префикс → **корень каталога модуля**. Отдельный `composer.json` у модуля и `dump-autoload` на каждый сторонний пакет **не нужны**."},{heading:`поле-namespace-в-манифесте`,content:`Fluent:`},{heading:`поле-namespace-в-манифесте`,content:"Если `namespace` не задан — как раньше: `DevCraft\\Modules\\{имя_каталога}\\`."},{heading:`поле-namespace-в-манифесте`,content:`См. также: ModuleManifestBuilder.`},{heading:`минимальная-структура`,content:`Достаточно:`},{heading:`минимальная-структура`,content:"Не обязательны: `Services/`, `Models/`, миграции, свой `settings.schema.php`, свой JSON настроек."},{heading:`минимальная-структура`,content:"Контракт страницы — `PageInterface` (обычно через `AbstractPage`). Меню указывает **полный** класс страницы."},{heading:`настройки-в-конфиге-хоста`,content:"Минимальный модуль пишет значения в конфиг Admin (`devcraft.json`), ключ:"},{heading:`настройки-в-конфиге-хоста`,content:"`third_party.{ваш_mod}.{поле}`"},{heading:`настройки-в-конфиге-хоста`,content:"Хелпер ядра: `DevCraft\\Core\\Config\\ThirdPartyHostSettings::get()` / `::merge()`."},{heading:`настройки-в-конфиге-хоста`,content:"Чужие ключи Admin и чужие `third_party[*]` не трогать."},{heading:`1-папка-на-стенде-быстрая-проверка`,content:`Скопировать образец:`},{heading:`1-папка-на-стенде-быстрая-проверка`,content:"`specs/010-third-party-namespaces/fixtures/vasya-pupkin-settings/`\\\n→ `devcraft/src/modules/VasyaPupkinSettings/`"},{heading:`1-папка-на-стенде-быстрая-проверка`,content:"Точка входа: `engine/inc/vasya_pupkin_settings.php` → `runAdmin(moduleDir: 'VasyaPupkinSettings')`."},{heading:`1-папка-на-стенде-быстрая-проверка`,content:"Зарегистрировать пункт DLE (`admin_sections.name = vasya_pupkin_settings`). SQL-образец: `register_admin_section.sql` в фикстуре."},{heading:`2-пакет-installxml`,content:"Тот же набор файлов + SQL регистрации секции. Состав описан в `install.xml.example` фикстуры (документация; zip в репозиторий Admin не кладётся)."},{heading:`faq`,content:"**Нужно ли жить в `DevCraft\\Modules\\…`?**\\\nНет. Задайте свой префикс через `->namespace(...)`."},{heading:`faq`,content:`**Нужен ли отдельный Composer-пакет всей панели?**\\
Нет. Регистрации PSR-4 при boot достаточно.`},{heading:`faq`,content:"**Куда писать настройки без своего JSON?**\\\nВ `third_party.{mod}` конфига Admin через `ThirdPartyHostSettings`."},{heading:`faq`,content:"**Какой контракт у страницы?**\\\n`PageInterface` / `AbstractPage`; FQCN в пункте меню манифеста."},{heading:`образец`,content:"Фикстура: `specs/010-third-party-namespaces/fixtures/vasya-pupkin-settings/`\\\nИдентификаторы: `mod=vasya_pupkin_settings`, каталог `VasyaPupkinSettings`, namespace `VasyaPupkin\\Settings\\`."},{heading:`образец`,content:"Пошаговая проверка на стенде — в `specs/010-third-party-namespaces/quickstart.md`."}],headings:[{id:`своё-пространство-имён`,content:`Своё пространство имён`},{id:`поле-namespace-в-манифесте`,content:"Поле `namespace` в манифесте"},{id:`минимальная-структура`,content:`Минимальная структура`},{id:`настройки-в-конфиге-хоста`,content:`Настройки в конфиге хоста`},{id:`два-пути-установки`,content:`Два пути установки`},{id:`1-папка-на-стенде-быстрая-проверка`,content:`1\\. Папка на стенде (быстрая проверка)`},{id:`2-пакет-installxml`,content:"2\\. Пакет `install.xml`"},{id:`faq`,content:`FAQ`},{id:`образец`,content:`Образец`}]},s=[{depth:2,url:`#своё-пространство-имён`,title:(0,n.jsx)(n.Fragment,{children:`Своё пространство имён`})},{depth:2,url:`#поле-namespace-в-манифесте`,title:(0,n.jsxs)(n.Fragment,{children:[`Поле `,(0,n.jsx)(`code`,{children:`namespace`}),` в манифесте`]})},{depth:2,url:`#минимальная-структура`,title:(0,n.jsx)(n.Fragment,{children:`Минимальная структура`})},{depth:2,url:`#настройки-в-конфиге-хоста`,title:(0,n.jsx)(n.Fragment,{children:`Настройки в конфиге хоста`})},{depth:2,url:`#два-пути-установки`,title:(0,n.jsx)(n.Fragment,{children:`Два пути установки`})},{depth:3,url:`#1-папка-на-стенде-быстрая-проверка`,title:(0,n.jsx)(n.Fragment,{children:`1. Папка на стенде (быстрая проверка)`})},{depth:3,url:`#2-пакет-installxml`,title:(0,n.jsxs)(n.Fragment,{children:[`2. Пакет `,(0,n.jsx)(`code`,{children:`install.xml`})]})},{depth:2,url:`#faq`,title:(0,n.jsx)(n.Fragment,{children:`FAQ`})},{depth:2,url:`#образец`,title:(0,n.jsx)(n.Fragment,{children:`Образец`})}];function c(e){let t={a:`a`,br:`br`,code:`code`,h2:`h2`,h3:`h3`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,span:`span`,strong:`strong`,...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Зачем:`}),` поставить свой модуль в админку DevCraft, не втискиваясь в пространство имён ядра и не правя корневой `,(0,n.jsx)(t.code,{children:`composer.json`}),` панели.`]}),`
`,(0,n.jsxs)(t.p,{children:[`Нужна Admin `,(0,n.jsx)(t.strong,{children:`≥ 200.4.1`}),`. Обычный штатный модуль по-прежнему собирают через `,(0,n.jsx)(t.a,{href:`./create_module`,children:`Создание модуля`}),`; этот гайд — для чужого префикса классов.`]}),`
`,(0,n.jsx)(t.h2,{id:`своё-пространство-имён`,children:`Своё пространство имён`}),`
`,(0,n.jsxs)(t.p,{children:[`Классы модуля могут жить в любом PSR-4 префиксе, например `,(0,n.jsx)(t.code,{children:`VasyaPupkin\\Settings\\`}),`.`]}),`
`,(0,n.jsxs)(t.p,{children:[`Панель при старте читает манифесты и регистрирует префикс → `,(0,n.jsx)(t.strong,{children:`корень каталога модуля`}),`. Отдельный `,(0,n.jsx)(t.code,{children:`composer.json`}),` у модуля и `,(0,n.jsx)(t.code,{children:`dump-autoload`}),` на каждый сторонний пакет `,(0,n.jsx)(t.strong,{children:`не нужны`}),`.`]}),`
`,(0,n.jsxs)(t.h2,{id:`поле-namespace-в-манифесте`,children:[`Поле `,(0,n.jsx)(t.code,{children:`namespace`}),` в манифесте`]}),`
`,(0,n.jsx)(t.p,{children:`Fluent:`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M7.01 10.207h-.944l-.515 2.648h.838c.556 0 .97-.105 1.242-.314.272-.21.455-.559.55-1.049.092-.47.05-.802-.124-.995-.175-.193-.523-.29-1.047-.29zM12 5.688C5.373 5.688 0 8.514 0 12s5.373 6.313 12 6.313S24 15.486 24 12c0-3.486-5.373-6.312-12-6.312zm-3.26 7.451c-.261.25-.575.438-.917.551-.336.108-.765.164-1.285.164H5.357l-.327 1.681H3.652l1.23-6.326h2.65c.797 0 1.378.209 1.744.628.366.418.476 1.002.33 1.752a2.836 2.836 0 0 1-.305.847c-.143.255-.33.49-.561.703zm4.024.715l.543-2.799c.063-.318.039-.536-.068-.651-.107-.116-.336-.174-.687-.174H11.46l-.704 3.625H9.388l1.23-6.327h1.367l-.327 1.682h1.218c.767 0 1.295.134 1.586.401s.378.7.263 1.299l-.572 2.944h-1.389zm7.597-2.265a2.782 2.782 0 0 1-.305.847c-.143.255-.33.49-.561.703a2.44 2.44 0 0 1-.917.551c-.336.108-.765.164-1.286.164h-1.18l-.327 1.682h-1.378l1.23-6.326h2.649c.797 0 1.378.209 1.744.628.366.417.477 1.001.331 1.751zM17.766 10.207h-.943l-.516 2.648h.838c.557 0 .971-.105 1.242-.314.272-.21.455-.559.551-1.049.092-.47.049-.802-.125-.995s-.524-.29-1.047-.29z" fill="currentColor" /></svg>`,children:(0,n.jsxs)(t.code,{children:[(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`return`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:` ModuleManifestBuilder`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`::`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`create`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`()`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`	->`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`mod`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`(`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`'vasya_pupkin_settings'`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`)`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`	->`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`code`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`(`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`'vasya_pupkin_settings'`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`)`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`	->`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`namespace`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`(`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`'VasyaPupkin`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`\\\\`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`Settings`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`\\\\`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`'`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`)`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`	->`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`name`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`(`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`'Настройки Васи Пупкина'`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`)`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`	->`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`version`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`(`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`'1.0.0'`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`)`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`	->`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`menu`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`([`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`		AdminLink`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`::`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`page`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`(`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`'Настройки'`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`, `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`'dashboard'`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`, `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`SettingsPage`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`::class`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`, `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`'mif-cog'`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`, `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`'vasya_pupkin_settings'`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`),`})]}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`	])`})}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`	->`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`ajax`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`(`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`		ModuleAjaxConfigBuilder`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`::`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`create`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`()`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`			->`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`method`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`(`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`'save_settings'`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`, `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`SaveSettingsHandler`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`::class`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`)`})]}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`	)`})}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`	->`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`build`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`(`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`__DIR__`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`);`})]})]})})}),`
`,(0,n.jsxs)(t.p,{children:[`Если `,(0,n.jsx)(t.code,{children:`namespace`}),` не задан — как раньше: `,(0,n.jsx)(t.code,{children:`DevCraft\\Modules\\{имя_каталога}\\`}),`.`]}),`
`,(0,n.jsxs)(t.p,{children:[`См. также: `,(0,n.jsx)(t.a,{href:`./builders/module_manifest_builder`,children:`ModuleManifestBuilder`}),`.`]}),`
`,(0,n.jsx)(t.h2,{id:`минимальная-структура`,children:`Минимальная структура`}),`
`,(0,n.jsx)(t.p,{children:`Достаточно:`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsxs)(t.code,{children:[(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`devcraft/src/modules/VasyaPupkinSettings/`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`├── manifest.php`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`├── SettingsPage.php          # implements PageInterface / AbstractPage`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`├── SaveSettingsHandler.php   # тонкий AJAX (по желанию)`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`└── templates/settings.twig   # тонкий шаблон (по желанию)`})})]})})}),`
`,(0,n.jsxs)(t.p,{children:[`Не обязательны: `,(0,n.jsx)(t.code,{children:`Services/`}),`, `,(0,n.jsx)(t.code,{children:`Models/`}),`, миграции, свой `,(0,n.jsx)(t.code,{children:`settings.schema.php`}),`, свой JSON настроек.`]}),`
`,(0,n.jsxs)(t.p,{children:[`Контракт страницы — `,(0,n.jsx)(t.code,{children:`PageInterface`}),` (обычно через `,(0,n.jsx)(t.code,{children:`AbstractPage`}),`). Меню указывает `,(0,n.jsx)(t.strong,{children:`полный`}),` класс страницы.`]}),`
`,(0,n.jsx)(t.h2,{id:`настройки-в-конфиге-хоста`,children:`Настройки в конфиге хоста`}),`
`,(0,n.jsxs)(t.p,{children:[`Минимальный модуль пишет значения в конфиг Admin (`,(0,n.jsx)(t.code,{children:`devcraft.json`}),`), ключ:`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.code,{children:`third_party.{ваш_mod}.{поле}`})}),`
`,(0,n.jsxs)(t.p,{children:[`Хелпер ядра: `,(0,n.jsx)(t.code,{children:`DevCraft\\Core\\Config\\ThirdPartyHostSettings::get()`}),` / `,(0,n.jsx)(t.code,{children:`::merge()`}),`.`]}),`
`,(0,n.jsxs)(t.p,{children:[`Чужие ключи Admin и чужие `,(0,n.jsx)(t.code,{children:`third_party[*]`}),` не трогать.`]}),`
`,(0,n.jsx)(t.h2,{id:`два-пути-установки`,children:`Два пути установки`}),`
`,(0,n.jsx)(t.h3,{id:`1-папка-на-стенде-быстрая-проверка`,children:`1. Папка на стенде (быстрая проверка)`}),`
`,(0,n.jsxs)(t.ol,{children:[`
`,(0,n.jsxs)(t.li,{children:[`
`,(0,n.jsx)(t.p,{children:`Скопировать образец:`}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:`specs/010-third-party-namespaces/fixtures/vasya-pupkin-settings/`}),(0,n.jsx)(t.br,{}),`
`,`→ `,(0,n.jsx)(t.code,{children:`devcraft/src/modules/VasyaPupkinSettings/`})]}),`
`]}),`
`,(0,n.jsxs)(t.li,{children:[`
`,(0,n.jsxs)(t.p,{children:[`Точка входа: `,(0,n.jsx)(t.code,{children:`engine/inc/vasya_pupkin_settings.php`}),` → `,(0,n.jsx)(t.code,{children:`runAdmin(moduleDir: 'VasyaPupkinSettings')`}),`.`]}),`
`]}),`
`,(0,n.jsxs)(t.li,{children:[`
`,(0,n.jsxs)(t.p,{children:[`Зарегистрировать пункт DLE (`,(0,n.jsx)(t.code,{children:`admin_sections.name = vasya_pupkin_settings`}),`). SQL-образец: `,(0,n.jsx)(t.code,{children:`register_admin_section.sql`}),` в фикстуре.`]}),`
`]}),`
`]}),`
`,(0,n.jsxs)(t.h3,{id:`2-пакет-installxml`,children:[`2. Пакет `,(0,n.jsx)(t.code,{children:`install.xml`})]}),`
`,(0,n.jsxs)(t.p,{children:[`Тот же набор файлов + SQL регистрации секции. Состав описан в `,(0,n.jsx)(t.code,{children:`install.xml.example`}),` фикстуры (документация; zip в репозиторий Admin не кладётся).`]}),`
`,(0,n.jsx)(t.h2,{id:`faq`,children:`FAQ`}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsxs)(t.strong,{children:[`Нужно ли жить в `,(0,n.jsx)(t.code,{children:`DevCraft\\Modules\\…`}),`?`]}),(0,n.jsx)(t.br,{}),`
`,`Нет. Задайте свой префикс через `,(0,n.jsx)(t.code,{children:`->namespace(...)`}),`.`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Нужен ли отдельный Composer-пакет всей панели?`}),(0,n.jsx)(t.br,{}),`
`,`Нет. Регистрации PSR-4 при boot достаточно.`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Куда писать настройки без своего JSON?`}),(0,n.jsx)(t.br,{}),`
`,`В `,(0,n.jsx)(t.code,{children:`third_party.{mod}`}),` конфига Admin через `,(0,n.jsx)(t.code,{children:`ThirdPartyHostSettings`}),`.`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Какой контракт у страницы?`}),(0,n.jsx)(t.br,{}),`
`,(0,n.jsx)(t.code,{children:`PageInterface`}),` / `,(0,n.jsx)(t.code,{children:`AbstractPage`}),`; FQCN в пункте меню манифеста.`]}),`
`,(0,n.jsx)(t.h2,{id:`образец`,children:`Образец`}),`
`,(0,n.jsxs)(t.p,{children:[`Фикстура: `,(0,n.jsx)(t.code,{children:`specs/010-third-party-namespaces/fixtures/vasya-pupkin-settings/`}),(0,n.jsx)(t.br,{}),`
`,`Идентификаторы: `,(0,n.jsx)(t.code,{children:`mod=vasya_pupkin_settings`}),`, каталог `,(0,n.jsx)(t.code,{children:`VasyaPupkinSettings`}),`, namespace `,(0,n.jsx)(t.code,{children:`VasyaPupkin\\Settings\\`}),`.`]}),`
`,(0,n.jsxs)(t.p,{children:[`Пошаговая проверка на стенде — в `,(0,n.jsx)(t.code,{children:`specs/010-third-party-namespaces/quickstart.md`}),`.`]})]})}function l(e={}){let{wrapper:t}=e.components||{};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}export{a as _markdown,l as default,r as frontmatter,i as lastModified,o as structuredData,s as toc};