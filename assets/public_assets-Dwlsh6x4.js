import{r as e}from"./rolldown-runtime-QTnfLwEv.js";import{t}from"./jsx-runtime-By8HlURe.js";var n=e(t()),r={title:`Публичные ресурсы оболочки`,description:`Теги {devcraft*}, siteAssets, страницы Admin, синк в БД и компрессия.`,version:`200.4.1`},i=new Date(1789560091e3),a=`

## Введение [#введение]

Оболочка публичного сайта получает CSS/JS/meta через теги в \`main.tpl\`. Состав хранится в таблицах Admin и собирается из \`siteAssets\` манифестов + ручных записей.

## Теги в теме [#теги-в-теме]

| Тег                  | Содержимое      |
| -------------------- | --------------- |
| \`{devcraft}\`         | CSS + meta + JS |
| \`{devcraft-header}\`  | CSS + meta      |
| \`{devcraft-scripts}\` | только JS       |

Если одновременно стоят \`{devcraft}\` и split-теги — побеждает \`{devcraft}\`, split остаются пустыми.

Патч: \`engine/modules/main.php\` после \`$tpl->load_template('main.tpl')\` → [PublicAssetTagService](../reference/back-end/classes/PublicAssetTagService).

## siteAssets в манифесте [#siteassets-в-манифесте]

В \`siteAssets\` кладите **только глобальные** файлы оболочки. Page-local (админский UI, виджет на одной странице) — в \`assets()\` или inject контроллера.

\`\`\`php
use DevCraft\\Builders\\ModuleSiteAssetsBuilder;

->siteAssets(
	ModuleSiteAssetsBuilder::create()
		->js('connections.js')   // modules/{M}/Public/
		->css('connections.css')
		// или путь от корня сайта:
		// ->js('devcraft/src/templates/core/assets/js/dc_public.js')
)
\`\`\`

Контракт: [ModuleSiteAssets](../reference/back-end/classes/ModuleSiteAssets), builder: [ModuleSiteAssetsBuilder](../reference/back-end/classes/ModuleSiteAssetsBuilder).

## Синк в БД [#синк-в-бд]

При первом заходе на публичную страницу с тегами:

1. [PublicAssetSeedService](../reference/back-end/classes/PublicAssetSeedService) — \`dc_public.js\`
2. [PublicAssetManifestSyncService](../reference/back-end/classes/PublicAssetManifestSyncService) — все манифесты с непустым \`siteAssets\`

Таблицы: \`dc_public_assets\`, \`dc_public_headers\`.

## Страницы Admin [#страницы-admin]

* Публичные стили — [PublicStylesPage](../reference/back-end/classes/PublicStylesPage)
* Публичные скрипты — [PublicScriptsPage](../reference/back-end/classes/PublicScriptsPage)
* Публичные заголовки — [PublicHeadersPage](../reference/back-end/classes/PublicHeadersPage)

Коды проверки сайта у поисковиков (\`google-site-verification\`, Яндекс и т.п.) добавляйте здесь, а не отдельным плагином. Старый [Webmaster Verification](/deprecated/webmaster-verification) не поддерживается.

UI как у Connections: Metro-таблица (поиск), колонка с ручкой DnD (\`mif-move\`), переключатель «Активен». Добавление — модалка (\`Добавить\` → форма → сохранить → строка в таблице). Логика — \`admin.js\` (\`DevCraftAdmin.PublicAssets\`).

Формы добавления — [PublicAssetAdminFormService](../reference/back-end/classes/PublicAssetAdminFormService) (FormSchema + Metro field\\_row).

Автозаписи (\`origin=auto\`) нельзя удалить — только выключить. DnD задаёт порядок и флаг \`public_assets_list_manually_ordered_{css|js|meta}\`.

## Компрессия [#компрессия]

Настройка Admin «Публичные ресурсы» → \`public_assets_compress\`. Бандл: [PublicAssetBundleCacheService](../reference/back-end/classes/PublicAssetBundleCacheService) + [PublicAssetMinify](../reference/back-end/classes/PublicAssetMinify).

## Что не класть в siteAssets [#что-не-класть-в-siteassets]

* Admin panel JS (\`admin.js\`, \`dleapi.js\`, \`db_manager.js\`, …)
* Page-local тема (\`templates/{skin}/devcraft/...\`)
* \`connections_admin.js\` / виджеты одной страницы

## Связанные разделы [#связанные-разделы]

* [Fluent Types](./fluent_types)
* [Создать модуль](./create_module)
* [Changelog](../changelog)
`,o={contents:[{heading:`введение`,content:"Оболочка публичного сайта получает CSS/JS/meta через теги в `main.tpl`. Состав хранится в таблицах Admin и собирается из `siteAssets` манифестов + ручных записей."},{heading:`теги-в-теме`,content:`Тег`},{heading:`теги-в-теме`,content:`Содержимое`},{heading:`теги-в-теме`,content:"`{devcraft}`"},{heading:`теги-в-теме`,content:`CSS + meta + JS`},{heading:`теги-в-теме`,content:"`{devcraft-header}`"},{heading:`теги-в-теме`,content:`CSS + meta`},{heading:`теги-в-теме`,content:"`{devcraft-scripts}`"},{heading:`теги-в-теме`,content:`только JS`},{heading:`теги-в-теме`,content:"Если одновременно стоят `{devcraft}` и split-теги — побеждает `{devcraft}`, split остаются пустыми."},{heading:`теги-в-теме`,content:"Патч: `engine/modules/main.php` после `$tpl->load_template('main.tpl')` → PublicAssetTagService."},{heading:`siteassets-в-манифесте`,content:"В `siteAssets` кладите **только глобальные** файлы оболочки. Page-local (админский UI, виджет на одной странице) — в `assets()` или inject контроллера."},{heading:`siteassets-в-манифесте`,content:`Контракт: ModuleSiteAssets, builder: ModuleSiteAssetsBuilder.`},{heading:`синк-в-бд`,content:`При первом заходе на публичную страницу с тегами:`},{heading:`синк-в-бд`,content:"PublicAssetSeedService — `dc_public.js`"},{heading:`синк-в-бд`,content:"PublicAssetManifestSyncService — все манифесты с непустым `siteAssets`"},{heading:`синк-в-бд`,content:"Таблицы: `dc_public_assets`, `dc_public_headers`."},{heading:`страницы-admin`,content:`Публичные стили — PublicStylesPage`},{heading:`страницы-admin`,content:`Публичные скрипты — PublicScriptsPage`},{heading:`страницы-admin`,content:`Публичные заголовки — PublicHeadersPage`},{heading:`страницы-admin`,content:"Коды проверки сайта у поисковиков (`google-site-verification`, Яндекс и т.п.) добавляйте здесь, а не отдельным плагином. Старый Webmaster Verification не поддерживается."},{heading:`страницы-admin`,content:"UI как у Connections: Metro-таблица (поиск), колонка с ручкой DnD (`mif-move`), переключатель «Активен». Добавление — модалка (`Добавить` → форма → сохранить → строка в таблице). Логика — `admin.js` (`DevCraftAdmin.PublicAssets`)."},{heading:`страницы-admin`,content:`Формы добавления — PublicAssetAdminFormService (FormSchema + Metro field\\_row).`},{heading:`страницы-admin`,content:"Автозаписи (`origin=auto`) нельзя удалить — только выключить. DnD задаёт порядок и флаг `public_assets_list_manually_ordered_{css|js|meta}`."},{heading:`компрессия`,content:"Настройка Admin «Публичные ресурсы» → `public_assets_compress`. Бандл: PublicAssetBundleCacheService + PublicAssetMinify."},{heading:`что-не-класть-в-siteassets`,content:"Admin panel JS (`admin.js`, `dleapi.js`, `db_manager.js`, …)"},{heading:`что-не-класть-в-siteassets`,content:"Page-local тема (`templates/{skin}/devcraft/...`)"},{heading:`что-не-класть-в-siteassets`,content:"`connections_admin.js` / виджеты одной страницы"},{heading:`связанные-разделы`,content:`Fluent Types`},{heading:`связанные-разделы`,content:`Создать модуль`},{heading:`связанные-разделы`,content:`Changelog`}],headings:[{id:`введение`,content:`Введение`},{id:`теги-в-теме`,content:`Теги в теме`},{id:`siteassets-в-манифесте`,content:`siteAssets в манифесте`},{id:`синк-в-бд`,content:`Синк в БД`},{id:`страницы-admin`,content:`Страницы Admin`},{id:`компрессия`,content:`Компрессия`},{id:`что-не-класть-в-siteassets`,content:`Что не класть в siteAssets`},{id:`связанные-разделы`,content:`Связанные разделы`}]},s=[{depth:2,url:`#введение`,title:(0,n.jsx)(n.Fragment,{children:`Введение`})},{depth:2,url:`#теги-в-теме`,title:(0,n.jsx)(n.Fragment,{children:`Теги в теме`})},{depth:2,url:`#siteassets-в-манифесте`,title:(0,n.jsx)(n.Fragment,{children:`siteAssets в манифесте`})},{depth:2,url:`#синк-в-бд`,title:(0,n.jsx)(n.Fragment,{children:`Синк в БД`})},{depth:2,url:`#страницы-admin`,title:(0,n.jsx)(n.Fragment,{children:`Страницы Admin`})},{depth:2,url:`#компрессия`,title:(0,n.jsx)(n.Fragment,{children:`Компрессия`})},{depth:2,url:`#что-не-класть-в-siteassets`,title:(0,n.jsx)(n.Fragment,{children:`Что не класть в siteAssets`})},{depth:2,url:`#связанные-разделы`,title:(0,n.jsx)(n.Fragment,{children:`Связанные разделы`})}];function c(e){let t={a:`a`,code:`code`,h2:`h2`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,span:`span`,strong:`strong`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,ul:`ul`,...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h2,{id:`введение`,children:`Введение`}),`
`,(0,n.jsxs)(t.p,{children:[`Оболочка публичного сайта получает CSS/JS/meta через теги в `,(0,n.jsx)(t.code,{children:`main.tpl`}),`. Состав хранится в таблицах Admin и собирается из `,(0,n.jsx)(t.code,{children:`siteAssets`}),` манифестов + ручных записей.`]}),`
`,(0,n.jsx)(t.h2,{id:`теги-в-теме`,children:`Теги в теме`}),`
`,(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`Тег`}),(0,n.jsx)(t.th,{children:`Содержимое`})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:`{devcraft}`})}),(0,n.jsx)(t.td,{children:`CSS + meta + JS`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:`{devcraft-header}`})}),(0,n.jsx)(t.td,{children:`CSS + meta`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:`{devcraft-scripts}`})}),(0,n.jsx)(t.td,{children:`только JS`})]})]})]}),`
`,(0,n.jsxs)(t.p,{children:[`Если одновременно стоят `,(0,n.jsx)(t.code,{children:`{devcraft}`}),` и split-теги — побеждает `,(0,n.jsx)(t.code,{children:`{devcraft}`}),`, split остаются пустыми.`]}),`
`,(0,n.jsxs)(t.p,{children:[`Патч: `,(0,n.jsx)(t.code,{children:`engine/modules/main.php`}),` после `,(0,n.jsx)(t.code,{children:`$tpl->load_template('main.tpl')`}),` → `,(0,n.jsx)(t.a,{href:`../reference/back-end/classes/PublicAssetTagService`,children:`PublicAssetTagService`}),`.`]}),`
`,(0,n.jsx)(t.h2,{id:`siteassets-в-манифесте`,children:`siteAssets в манифесте`}),`
`,(0,n.jsxs)(t.p,{children:[`В `,(0,n.jsx)(t.code,{children:`siteAssets`}),` кладите `,(0,n.jsx)(t.strong,{children:`только глобальные`}),` файлы оболочки. Page-local (админский UI, виджет на одной странице) — в `,(0,n.jsx)(t.code,{children:`assets()`}),` или inject контроллера.`]}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M7.01 10.207h-.944l-.515 2.648h.838c.556 0 .97-.105 1.242-.314.272-.21.455-.559.55-1.049.092-.47.05-.802-.124-.995-.175-.193-.523-.29-1.047-.29zM12 5.688C5.373 5.688 0 8.514 0 12s5.373 6.313 12 6.313S24 15.486 24 12c0-3.486-5.373-6.312-12-6.312zm-3.26 7.451c-.261.25-.575.438-.917.551-.336.108-.765.164-1.285.164H5.357l-.327 1.681H3.652l1.23-6.326h2.65c.797 0 1.378.209 1.744.628.366.418.476 1.002.33 1.752a2.836 2.836 0 0 1-.305.847c-.143.255-.33.49-.561.703zm4.024.715l.543-2.799c.063-.318.039-.536-.068-.651-.107-.116-.336-.174-.687-.174H11.46l-.704 3.625H9.388l1.23-6.327h1.367l-.327 1.682h1.218c.767 0 1.295.134 1.586.401s.378.7.263 1.299l-.572 2.944h-1.389zm7.597-2.265a2.782 2.782 0 0 1-.305.847c-.143.255-.33.49-.561.703a2.44 2.44 0 0 1-.917.551c-.336.108-.765.164-1.286.164h-1.18l-.327 1.682h-1.378l1.23-6.326h2.649c.797 0 1.378.209 1.744.628.366.417.477 1.001.331 1.751zM17.766 10.207h-.943l-.516 2.648h.838c.557 0 .971-.105 1.242-.314.272-.21.455-.559.551-1.049.092-.47.049-.802-.125-.995s-.524-.29-1.047-.29z" fill="currentColor" /></svg>`,children:(0,n.jsxs)(t.code,{children:[(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`use`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:` DevCraft\\Builders\\ModuleSiteAssetsBuilder`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`;`})]}),`
`,(0,n.jsx)(t.span,{className:`line`}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`->`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`siteAssets`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`(`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`	ModuleSiteAssetsBuilder`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`::`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`create`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`()`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`		->`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`js`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`(`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`'connections.js'`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`)   `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6A737D`,"--shiki-dark":`#6A737D`},children:`// modules/{M}/Public/`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`		->`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`css`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`(`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`'connections.css'`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`)`})]}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{style:{"--shiki-light":`#6A737D`,"--shiki-dark":`#6A737D`},children:`		// или путь от корня сайта:`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{style:{"--shiki-light":`#6A737D`,"--shiki-dark":`#6A737D`},children:`		// ->js('devcraft/src/templates/core/assets/js/dc_public.js')`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`)`})})]})})}),`
`,(0,n.jsxs)(t.p,{children:[`Контракт: `,(0,n.jsx)(t.a,{href:`../reference/back-end/classes/ModuleSiteAssets`,children:`ModuleSiteAssets`}),`, builder: `,(0,n.jsx)(t.a,{href:`../reference/back-end/classes/ModuleSiteAssetsBuilder`,children:`ModuleSiteAssetsBuilder`}),`.`]}),`
`,(0,n.jsx)(t.h2,{id:`синк-в-бд`,children:`Синк в БД`}),`
`,(0,n.jsx)(t.p,{children:`При первом заходе на публичную страницу с тегами:`}),`
`,(0,n.jsxs)(t.ol,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:`../reference/back-end/classes/PublicAssetSeedService`,children:`PublicAssetSeedService`}),` — `,(0,n.jsx)(t.code,{children:`dc_public.js`})]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:`../reference/back-end/classes/PublicAssetManifestSyncService`,children:`PublicAssetManifestSyncService`}),` — все манифесты с непустым `,(0,n.jsx)(t.code,{children:`siteAssets`})]}),`
`]}),`
`,(0,n.jsxs)(t.p,{children:[`Таблицы: `,(0,n.jsx)(t.code,{children:`dc_public_assets`}),`, `,(0,n.jsx)(t.code,{children:`dc_public_headers`}),`.`]}),`
`,(0,n.jsx)(t.h2,{id:`страницы-admin`,children:`Страницы Admin`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[`Публичные стили — `,(0,n.jsx)(t.a,{href:`../reference/back-end/classes/PublicStylesPage`,children:`PublicStylesPage`})]}),`
`,(0,n.jsxs)(t.li,{children:[`Публичные скрипты — `,(0,n.jsx)(t.a,{href:`../reference/back-end/classes/PublicScriptsPage`,children:`PublicScriptsPage`})]}),`
`,(0,n.jsxs)(t.li,{children:[`Публичные заголовки — `,(0,n.jsx)(t.a,{href:`../reference/back-end/classes/PublicHeadersPage`,children:`PublicHeadersPage`})]}),`
`]}),`
`,(0,n.jsxs)(t.p,{children:[`Коды проверки сайта у поисковиков (`,(0,n.jsx)(t.code,{children:`google-site-verification`}),`, Яндекс и т.п.) добавляйте здесь, а не отдельным плагином. Старый `,(0,n.jsx)(t.a,{href:`/deprecated/webmaster-verification`,children:`Webmaster Verification`}),` не поддерживается.`]}),`
`,(0,n.jsxs)(t.p,{children:[`UI как у Connections: Metro-таблица (поиск), колонка с ручкой DnD (`,(0,n.jsx)(t.code,{children:`mif-move`}),`), переключатель «Активен». Добавление — модалка (`,(0,n.jsx)(t.code,{children:`Добавить`}),` → форма → сохранить → строка в таблице). Логика — `,(0,n.jsx)(t.code,{children:`admin.js`}),` (`,(0,n.jsx)(t.code,{children:`DevCraftAdmin.PublicAssets`}),`).`]}),`
`,(0,n.jsxs)(t.p,{children:[`Формы добавления — `,(0,n.jsx)(t.a,{href:`../reference/back-end/classes/PublicAssetAdminFormService`,children:`PublicAssetAdminFormService`}),` (FormSchema + Metro field_row).`]}),`
`,(0,n.jsxs)(t.p,{children:[`Автозаписи (`,(0,n.jsx)(t.code,{children:`origin=auto`}),`) нельзя удалить — только выключить. DnD задаёт порядок и флаг `,(0,n.jsx)(t.code,{children:`public_assets_list_manually_ordered_{css|js|meta}`}),`.`]}),`
`,(0,n.jsx)(t.h2,{id:`компрессия`,children:`Компрессия`}),`
`,(0,n.jsxs)(t.p,{children:[`Настройка Admin «Публичные ресурсы» → `,(0,n.jsx)(t.code,{children:`public_assets_compress`}),`. Бандл: `,(0,n.jsx)(t.a,{href:`../reference/back-end/classes/PublicAssetBundleCacheService`,children:`PublicAssetBundleCacheService`}),` + `,(0,n.jsx)(t.a,{href:`../reference/back-end/classes/PublicAssetMinify`,children:`PublicAssetMinify`}),`.`]}),`
`,(0,n.jsx)(t.h2,{id:`что-не-класть-в-siteassets`,children:`Что не класть в siteAssets`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[`Admin panel JS (`,(0,n.jsx)(t.code,{children:`admin.js`}),`, `,(0,n.jsx)(t.code,{children:`dleapi.js`}),`, `,(0,n.jsx)(t.code,{children:`db_manager.js`}),`, …)`]}),`
`,(0,n.jsxs)(t.li,{children:[`Page-local тема (`,(0,n.jsx)(t.code,{children:`templates/{skin}/devcraft/...`}),`)`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`connections_admin.js`}),` / виджеты одной страницы`]}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`связанные-разделы`,children:`Связанные разделы`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`./fluent_types`,children:`Fluent Types`})}),`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`./create_module`,children:`Создать модуль`})}),`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`../changelog`,children:`Changelog`})}),`
`]})]})}function l(e={}){let{wrapper:t}=e.components||{};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}export{a as _markdown,l as default,r as frontmatter,i as lastModified,o as structuredData,s as toc};