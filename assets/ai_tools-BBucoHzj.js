import{r as e}from"./rolldown-runtime-QTnfLwEv.js";import{t}from"./jsx-runtime-By8HlURe.js";var n=e(t()),r={title:`ИИ-инструменты`,description:`Промпты и инструменты для ИИ-агентов при разработке модулей DevCraft.`},i=new Date(1785404498e3),a=`

Готовые промпты для Cursor, Claude и других агентов. Спецификация модуля — в [Начало работы](../getting_started). Правила PHP — в [Конституции](../../../../../instructions/constitution).

## Промпт: создание / перенос / обновление плагина под DevCraft [#промпт-создание--перенос--обновление-плагина-под-devcraft]

Скопируйте блок ниже в чат с агентом и заполните плейсхолдеры:

\`\`\`markdown
Ты разрабатываешь модуль для DLE на базе DevCraft Admin.

Режим работы (выбери один): создание | перенос (legacy/MH Admin → DevCraft) | обновление существующего

Название плагина ({Name}):
Тег / code конфигурации ({code}):
Именование mod ({mod}): обычно = {code}; camelCase вместо пробелов, без лишних - и \\_
Версия плагина ({version}): 200.1.0

Дерево модуля (devcraft/src/modules/{Name}/):

- manifest.php, settings.schema.php (если есть настройки), changelog.data.php
- Pages/, Ajax/, Services/ (по необходимости), templates/\\*.twig, Public/
- при фильтрах таблиц: Filter/\\*.filter.schema.php
- точка входа DLE: engine/inc/{mod}.php
  require_once DLEPlugins::Check(ROOT_DIR . '/devcraft/init.php');
  DevCraft\\Core\\Application::instance()->runAdmin(moduleDir: '{Name}');

Обязательные правила:

- PSR-4: DevCraft\\Modules\\{Name}\\ → devcraft/src/modules/{Name}/
- Все require/include проектных файлов через DLEPlugins::Check()
- Комментарии, PHPDoc и UI-строки на русском; вывод пользователю через функцию перевода \\_\\_()
- HTML только в Twig (Metro UI), не в PHP
- AJAX только через devcraft/ajax.php — НЕ создавать engine/ajax/{mod}.php
- Обработчики реализуют AjaxHandlerInterface, возвращают JsonResponse или FileResponse
- Загрузка файлов: DevCraft.Ajax.postMultipart + DevCraft\\Core\\Http\\UploadedFile
- Настройки: settings.schema.php (FormSchemaBuilder); конфиг в devcraft/config/{code}.json
- manifest.php: mod, code, meta, menu, ajax, changelog; пункт dashboard/index для AdminLinkResolver
- install.xml: needplugin=DevCraft Admin; файлы DLE/DevCraft не патчить без нужды (секция <file> обычно пустая)
- DevCraft Admin ≥ 200.4.0; AdminLink::page(name, action, pageClass, icon, mod) — 5-й аргумент mod обязателен для сателлитов
- assets.js подключать после devcraft.js; ajax.controller = 'admin'; URL: devcraft/ajax.php?mod={mod}&controller=admin&method=...
- Слои Service / Repository / Controller / Entity / DTO; persistence через Cycle ORM; без devcraft/bin
- После новых PHP-файлов: composer dump-autoload в devcraft/
- Локали: devcraft/locales/{locale}/{code}.xliff

Перенос: не копировать legacy engine/ajax и паттерны MH Admin; reuse API DevCraft; mhadmin — только как эталон поведения.
Обновление: минимальный diff; не ломать mod/code; дописать changelog.data.php.

Стек: PHP ≥ 8.3 | DevCraft Admin ≥ 200.4.0 | DLE ≥ 20.0

Документация:
| Предназначение | Ссылка |
|---|---|
| DevCraft Admin | https://github.com/DevCraftClub/mhdocs/tree/main/docs/dev/dle/devcraft_admin |
| Конституция PHP | https://github.com/DevCraftClub/mhdocs/tree/main/docs/instructions/constitution.md |
| DevCraft Docs | https://github.com/DevCraftClub/mhdocs/tree/main/docs |
| Readme | https://readme.devcraft.club/dev/dle/devcraft_admin/ |
| DLE | https://dle-news.ru/extras/online/ |
| Metro UI | https://github.com/olton/metroui-docs/tree/master/src/content/docs |
| Cycle ORM | https://github.com/cycle/docs/tree/2.x/docs/en |

Чеклист:

- [ ] manifest.php
- [ ] settings.schema.php (если нужны настройки)
- [ ] changelog.data.php
- [ ] Pages/\\*.php
- [ ] Ajax/\\*Handler.php
- [ ] templates/\\*.twig
- [ ] Public/ (icon и т.п.)
- [ ] Filter/\\*.filter.schema.php (если нужны фильтры)
- [ ] engine/inc/{mod}.php
- [ ] install.xml + locales в devcraft/locales/
- [ ] composer dump-autoload

Детали: getting_started.md, instructions/constitution.md, crud_pages.md.
\`\`\`

## Экономная разработка с ИИ [#экономная-разработка-с-ии]

Меньше токенов и меньше лишнего кода: сначала узкий контекст (граф), длинный CLI через **sqz**, код по **ponytail**.

### Роли инструментов [#роли-инструментов]

| Инструмент                                                                 | Когда                                                                     | Не делать                                                                                 |
| -------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| [**graphify**](../../../../../instructions/graphify)                       | Архитектура, связи: \`query\` / \`path\` / \`explain\`; каталог \`graphify-out/\` | Читать целиком \`GRAPH_REPORT.md\`; \`graphify update .\` после правок **только** \`devcraft/\` |
| [**code-review-graph**](../../../../../instructions/code-review-graph)     | Callers/callees, communities; старт с minimal context                     | Широкий grep вместо 1–2 graph-вызовов                                                     |
| [**codebase-memory-mcp**](../../../../../instructions/codebase-memory-mcp) | \`search_graph\` / \`trace_path\` / \`detect_changes\`                          | Полная переиндексация без изменений                                                       |
| [**sqz**](../../../../../instructions/sqz)                                 | Длинный stdout: \`cmd 2>&1 \\| sqz compress\`                                | Pipe для REPL / \`&&\` / \`;\`; уже короткий вывод                                            |
| [**ponytail**](../../../../../instructions/ponytail)                       | YAGNI → reuse → stdlib → минимум diff                                     | Абстракции «на будущее»; фикс только у одного caller                                      |

Краткие установки и примеры — на страницах инструментов в разделе инструкций: [Graphify](../../../../../instructions/graphify), [sqz](../../../../../instructions/sqz), [Ponytail](../../../../../instructions/ponytail) и др.

В DevCraft: reuse \`JsonResponse\`, \`AdminLink\`, \`DleDataService\`, Metro; \`graphify update .\` для host DLE — после правок \`engine/\` / шаблонов, не после чистого \`devcraft/\`.

### Промпт: экономный цикл агента [#промпт-экономный-цикл-агента]

\`\`\`markdown
Перед исследованием кода:

1. Если есть graphify-out/ — graphify query / path / explain (не GRAPH_REPORT целиком). См. instructions/graphify.md
2. Или code-review-graph / codebase-memory: minimal context → узкий набор файлов.
3. Длинный CLI — через sqz compress (stdin pipe). См. instructions/sqz.md
4. Перед кодом — ponytail: YAGNI, reuse DevCraft API, минимальный diff. См. instructions/ponytail.md
5. graphify update . только после правок
\`\`\`

## См. также [#см-также]

* [Начало работы](../getting_started)
* [Конституция PHP](../../../../../instructions/constitution)
* [Graphify](../../../../../instructions/graphify) · [Code Review Graph](../../../../../instructions/code-review-graph) · [Codebase Memory](../../../../../instructions/codebase-memory-mcp) · [sqz](../../../../../instructions/sqz) · [Ponytail](../../../../../instructions/ponytail)
* [Генератор модулей](new_module)
`,o={contents:[{heading:void 0,content:`Готовые промпты для Cursor, Claude и других агентов. Спецификация модуля — в Начало работы. Правила PHP — в Конституции.`},{heading:`промпт-создание--перенос--обновление-плагина-под-devcraft`,content:`Скопируйте блок ниже в чат с агентом и заполните плейсхолдеры:`},{heading:`экономная-разработка-с-ии`,content:`Меньше токенов и меньше лишнего кода: сначала узкий контекст (граф), длинный CLI через **sqz**, код по **ponytail**.`},{heading:`роли-инструментов`,content:`Инструмент`},{heading:`роли-инструментов`,content:`Когда`},{heading:`роли-инструментов`,content:`Не делать`},{heading:`роли-инструментов`,content:`**graphify**`},{heading:`роли-инструментов`,content:"Архитектура, связи: `query` / `path` / `explain`; каталог `graphify-out/`"},{heading:`роли-инструментов`,content:"Читать целиком `GRAPH_REPORT.md`; `graphify update .` после правок **только** `devcraft/`"},{heading:`роли-инструментов`,content:`**code-review-graph**`},{heading:`роли-инструментов`,content:`Callers/callees, communities; старт с minimal context`},{heading:`роли-инструментов`,content:`Широкий grep вместо 1–2 graph-вызовов`},{heading:`роли-инструментов`,content:`**codebase-memory-mcp**`},{heading:`роли-инструментов`,content:"`search_graph` / `trace_path` / `detect_changes`"},{heading:`роли-инструментов`,content:`Полная переиндексация без изменений`},{heading:`роли-инструментов`,content:`**sqz**`},{heading:`роли-инструментов`,content:"Длинный stdout: `cmd 2>&1 \\| sqz compress`"},{heading:`роли-инструментов`,content:"Pipe для REPL / `&&` / `;`; уже короткий вывод"},{heading:`роли-инструментов`,content:`**ponytail**`},{heading:`роли-инструментов`,content:`YAGNI → reuse → stdlib → минимум diff`},{heading:`роли-инструментов`,content:`Абстракции «на будущее»; фикс только у одного caller`},{heading:`роли-инструментов`,content:`Краткие установки и примеры — на страницах инструментов в разделе инструкций: Graphify, sqz, Ponytail и др.`},{heading:`роли-инструментов`,content:"В DevCraft: reuse `JsonResponse`, `AdminLink`, `DleDataService`, Metro; `graphify update .` для host DLE — после правок `engine/` / шаблонов, не после чистого `devcraft/`."},{heading:`см-также`,content:`Начало работы`},{heading:`см-также`,content:`Конституция PHP`},{heading:`см-также`,content:`Graphify · Code Review Graph · Codebase Memory · sqz · Ponytail`},{heading:`см-также`,content:`Генератор модулей`}],headings:[{id:`промпт-создание--перенос--обновление-плагина-под-devcraft`,content:`Промпт: создание / перенос / обновление плагина под DevCraft`},{id:`экономная-разработка-с-ии`,content:`Экономная разработка с ИИ`},{id:`роли-инструментов`,content:`Роли инструментов`},{id:`промпт-экономный-цикл-агента`,content:`Промпт: экономный цикл агента`},{id:`см-также`,content:`См. также`}]},s=[{depth:2,url:`#промпт-создание--перенос--обновление-плагина-под-devcraft`,title:(0,n.jsx)(n.Fragment,{children:`Промпт: создание / перенос / обновление плагина под DevCraft`})},{depth:2,url:`#экономная-разработка-с-ии`,title:(0,n.jsx)(n.Fragment,{children:`Экономная разработка с ИИ`})},{depth:3,url:`#роли-инструментов`,title:(0,n.jsx)(n.Fragment,{children:`Роли инструментов`})},{depth:3,url:`#промпт-экономный-цикл-агента`,title:(0,n.jsx)(n.Fragment,{children:`Промпт: экономный цикл агента`})},{depth:2,url:`#см-также`,title:(0,n.jsx)(n.Fragment,{children:`См. также`})}];function c(e){let t={a:`a`,code:`code`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,span:`span`,strong:`strong`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,ul:`ul`,...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:[`Готовые промпты для Cursor, Claude и других агентов. Спецификация модуля — в `,(0,n.jsx)(t.a,{href:`../getting_started`,children:`Начало работы`}),`. Правила PHP — в `,(0,n.jsx)(t.a,{href:`../../../../../instructions/constitution`,children:`Конституции`}),`.`]}),`
`,(0,n.jsx)(t.h2,{id:`промпт-создание--перенос--обновление-плагина-под-devcraft`,children:`Промпт: создание / перенос / обновление плагина под DevCraft`}),`
`,(0,n.jsx)(t.p,{children:`Скопируйте блок ниже в чат с агентом и заполните плейсхолдеры:`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsxs)(t.code,{children:[(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`Ты разрабатываешь модуль для DLE на базе DevCraft Admin.`})}),`
`,(0,n.jsx)(t.span,{className:`line`}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`Режим работы (выбери один): создание | перенос (legacy/MH Admin → DevCraft) | обновление существующего`})}),`
`,(0,n.jsx)(t.span,{className:`line`}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`Название плагина ({Name}):`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`Тег / code конфигурации ({code}):`})}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`Именование mod ({mod}): обычно = {code}; camelCase вместо пробелов, без лишних - и `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`\\_`})]}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`Версия плагина ({version}): 200.1.0`})}),`
`,(0,n.jsx)(t.span,{className:`line`}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`Дерево модуля (devcraft/src/modules/{Name}/):`})}),`
`,(0,n.jsx)(t.span,{className:`line`}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#E36209`,"--shiki-dark":`#FFAB70`},children:`-`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:` manifest.php, settings.schema.php (если есть настройки), changelog.data.php`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#E36209`,"--shiki-dark":`#FFAB70`},children:`-`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:` Pages/, Ajax/, Services/ (по необходимости), templates/`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`\\*`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`.twig, Public/`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#E36209`,"--shiki-dark":`#FFAB70`},children:`-`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:` при фильтрах таблиц: Filter/`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`\\*`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`.filter.schema.php`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#E36209`,"--shiki-dark":`#FFAB70`},children:`-`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:` точка входа DLE: engine/inc/{mod}.php`})]}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`  require_once DLEPlugins::Check(ROOT_DIR . '/devcraft/init.php');`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`  DevCraft\\Core\\Application::instance()->runAdmin(moduleDir: '{Name}');`})}),`
`,(0,n.jsx)(t.span,{className:`line`}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`Обязательные правила:`})}),`
`,(0,n.jsx)(t.span,{className:`line`}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#E36209`,"--shiki-dark":`#FFAB70`},children:`-`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:` PSR-4: DevCraft\\Modules`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`\\{`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`Name}\\ → devcraft/src/modules/{Name}/`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#E36209`,"--shiki-dark":`#FFAB70`},children:`-`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:` Все require/include проектных файлов через DLEPlugins::Check()`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#E36209`,"--shiki-dark":`#FFAB70`},children:`-`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:` Комментарии, PHPDoc и UI-строки на русском; вывод пользователю через функцию перевода `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`\\_\\_`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`()`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#E36209`,"--shiki-dark":`#FFAB70`},children:`-`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:` HTML только в Twig (Metro UI), не в PHP`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#E36209`,"--shiki-dark":`#FFAB70`},children:`-`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:` AJAX только через devcraft/ajax.php — НЕ создавать engine/ajax/{mod}.php`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#E36209`,"--shiki-dark":`#FFAB70`},children:`-`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:` Обработчики реализуют AjaxHandlerInterface, возвращают JsonResponse или FileResponse`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#E36209`,"--shiki-dark":`#FFAB70`},children:`-`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:` Загрузка файлов: DevCraft.Ajax.postMultipart + DevCraft\\Core\\Http\\UploadedFile`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#E36209`,"--shiki-dark":`#FFAB70`},children:`-`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:` Настройки: settings.schema.php (FormSchemaBuilder); конфиг в devcraft/config/{code}.json`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#E36209`,"--shiki-dark":`#FFAB70`},children:`-`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:` manifest.php: mod, code, meta, menu, ajax, changelog; пункт dashboard/index для AdminLinkResolver`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#E36209`,"--shiki-dark":`#FFAB70`},children:`-`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:` install.xml: needplugin=DevCraft Admin; файлы DLE/DevCraft не патчить без нужды (секция <file> обычно пустая)`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#E36209`,"--shiki-dark":`#FFAB70`},children:`-`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:` DevCraft Admin ≥ 200.4.0; AdminLink::page(name, action, pageClass, icon, mod) — 5-й аргумент mod обязателен для сателлитов`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#E36209`,"--shiki-dark":`#FFAB70`},children:`-`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:` assets.js подключать после devcraft.js; ajax.controller = 'admin'; URL: devcraft/ajax.php?mod={mod}&controller=admin&method=...`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#E36209`,"--shiki-dark":`#FFAB70`},children:`-`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:` Слои Service / Repository / Controller / Entity / DTO; persistence через Cycle ORM; без devcraft/bin`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#E36209`,"--shiki-dark":`#FFAB70`},children:`-`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:` После новых PHP-файлов: composer dump-autoload в devcraft/`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#E36209`,"--shiki-dark":`#FFAB70`},children:`-`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:` Локали: devcraft/locales/{locale}/{code}.xliff`})]}),`
`,(0,n.jsx)(t.span,{className:`line`}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`Перенос: не копировать legacy engine/ajax и паттерны MH Admin; reuse API DevCraft; mhadmin — только как эталон поведения.`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`Обновление: минимальный diff; не ломать mod/code; дописать changelog.data.php.`})}),`
`,(0,n.jsx)(t.span,{className:`line`}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`Стек: PHP ≥ 8.3 | DevCraft Admin ≥ 200.4.0 | DLE ≥ 20.0`})}),`
`,(0,n.jsx)(t.span,{className:`line`}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`Документация:`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`| Предназначение | Ссылка |`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`|---|---|`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`| DevCraft Admin | https://github.com/DevCraftClub/mhdocs/tree/main/docs/dev/dle/devcraft_admin |`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`| Конституция PHP | https://github.com/DevCraftClub/mhdocs/tree/main/docs/instructions/constitution.md |`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`| DevCraft Docs | https://github.com/DevCraftClub/mhdocs/tree/main/docs |`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`| Readme | https://readme.devcraft.club/dev/dle/devcraft_admin/ |`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`| DLE | https://dle-news.ru/extras/online/ |`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`| Metro UI | https://github.com/olton/metroui-docs/tree/master/src/content/docs |`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`| Cycle ORM | https://github.com/cycle/docs/tree/2.x/docs/en |`})}),`
`,(0,n.jsx)(t.span,{className:`line`}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`Чеклист:`})}),`
`,(0,n.jsx)(t.span,{className:`line`}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#E36209`,"--shiki-dark":`#FFAB70`},children:`-`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:` [ ] manifest.php`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#E36209`,"--shiki-dark":`#FFAB70`},children:`-`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:` [ ] settings.schema.php (если нужны настройки)`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#E36209`,"--shiki-dark":`#FFAB70`},children:`-`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:` [ ] changelog.data.php`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#E36209`,"--shiki-dark":`#FFAB70`},children:`-`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:` [ ] Pages/`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`\\*`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`.php`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#E36209`,"--shiki-dark":`#FFAB70`},children:`-`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:` [ ] Ajax/`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`\\*`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`Handler.php`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#E36209`,"--shiki-dark":`#FFAB70`},children:`-`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:` [ ] templates/`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`\\*`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`.twig`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#E36209`,"--shiki-dark":`#FFAB70`},children:`-`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:` [ ] Public/ (icon и т.п.)`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#E36209`,"--shiki-dark":`#FFAB70`},children:`-`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:` [ ] Filter/`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`\\*`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`.filter.schema.php (если нужны фильтры)`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#E36209`,"--shiki-dark":`#FFAB70`},children:`-`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:` [ ] engine/inc/{mod}.php`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#E36209`,"--shiki-dark":`#FFAB70`},children:`-`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:` [ ] install.xml + locales в devcraft/locales/`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#E36209`,"--shiki-dark":`#FFAB70`},children:`-`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:` [ ] composer dump-autoload`})]}),`
`,(0,n.jsx)(t.span,{className:`line`}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`Детали: getting_started.md, instructions/constitution.md, crud_pages.md.`})})]})})}),`
`,(0,n.jsx)(t.h2,{id:`экономная-разработка-с-ии`,children:`Экономная разработка с ИИ`}),`
`,(0,n.jsxs)(t.p,{children:[`Меньше токенов и меньше лишнего кода: сначала узкий контекст (граф), длинный CLI через `,(0,n.jsx)(t.strong,{children:`sqz`}),`, код по `,(0,n.jsx)(t.strong,{children:`ponytail`}),`.`]}),`
`,(0,n.jsx)(t.h3,{id:`роли-инструментов`,children:`Роли инструментов`}),`
`,(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`Инструмент`}),(0,n.jsx)(t.th,{children:`Когда`}),(0,n.jsx)(t.th,{children:`Не делать`})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:`../../../../../instructions/graphify`,children:(0,n.jsx)(t.strong,{children:`graphify`})})}),(0,n.jsxs)(t.td,{children:[`Архитектура, связи: `,(0,n.jsx)(t.code,{children:`query`}),` / `,(0,n.jsx)(t.code,{children:`path`}),` / `,(0,n.jsx)(t.code,{children:`explain`}),`; каталог `,(0,n.jsx)(t.code,{children:`graphify-out/`})]}),(0,n.jsxs)(t.td,{children:[`Читать целиком `,(0,n.jsx)(t.code,{children:`GRAPH_REPORT.md`}),`; `,(0,n.jsx)(t.code,{children:`graphify update .`}),` после правок `,(0,n.jsx)(t.strong,{children:`только`}),` `,(0,n.jsx)(t.code,{children:`devcraft/`})]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:`../../../../../instructions/code-review-graph`,children:(0,n.jsx)(t.strong,{children:`code-review-graph`})})}),(0,n.jsx)(t.td,{children:`Callers/callees, communities; старт с minimal context`}),(0,n.jsx)(t.td,{children:`Широкий grep вместо 1–2 graph-вызовов`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:`../../../../../instructions/codebase-memory-mcp`,children:(0,n.jsx)(t.strong,{children:`codebase-memory-mcp`})})}),(0,n.jsxs)(t.td,{children:[(0,n.jsx)(t.code,{children:`search_graph`}),` / `,(0,n.jsx)(t.code,{children:`trace_path`}),` / `,(0,n.jsx)(t.code,{children:`detect_changes`})]}),(0,n.jsx)(t.td,{children:`Полная переиндексация без изменений`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:`../../../../../instructions/sqz`,children:(0,n.jsx)(t.strong,{children:`sqz`})})}),(0,n.jsxs)(t.td,{children:[`Длинный stdout: `,(0,n.jsx)(t.code,{children:`cmd 2>&1 | sqz compress`})]}),(0,n.jsxs)(t.td,{children:[`Pipe для REPL / `,(0,n.jsx)(t.code,{children:`&&`}),` / `,(0,n.jsx)(t.code,{children:`;`}),`; уже короткий вывод`]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:`../../../../../instructions/ponytail`,children:(0,n.jsx)(t.strong,{children:`ponytail`})})}),(0,n.jsx)(t.td,{children:`YAGNI → reuse → stdlib → минимум diff`}),(0,n.jsx)(t.td,{children:`Абстракции «на будущее»; фикс только у одного caller`})]})]})]}),`
`,(0,n.jsxs)(t.p,{children:[`Краткие установки и примеры — на страницах инструментов в разделе инструкций: `,(0,n.jsx)(t.a,{href:`../../../../../instructions/graphify`,children:`Graphify`}),`, `,(0,n.jsx)(t.a,{href:`../../../../../instructions/sqz`,children:`sqz`}),`, `,(0,n.jsx)(t.a,{href:`../../../../../instructions/ponytail`,children:`Ponytail`}),` и др.`]}),`
`,(0,n.jsxs)(t.p,{children:[`В DevCraft: reuse `,(0,n.jsx)(t.code,{children:`JsonResponse`}),`, `,(0,n.jsx)(t.code,{children:`AdminLink`}),`, `,(0,n.jsx)(t.code,{children:`DleDataService`}),`, Metro; `,(0,n.jsx)(t.code,{children:`graphify update .`}),` для host DLE — после правок `,(0,n.jsx)(t.code,{children:`engine/`}),` / шаблонов, не после чистого `,(0,n.jsx)(t.code,{children:`devcraft/`}),`.`]}),`
`,(0,n.jsx)(t.h3,{id:`промпт-экономный-цикл-агента`,children:`Промпт: экономный цикл агента`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsxs)(t.code,{children:[(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`Перед исследованием кода:`})}),`
`,(0,n.jsx)(t.span,{className:`line`}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#E36209`,"--shiki-dark":`#FFAB70`},children:`1.`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:` Если есть graphify-out/ — graphify query / path / explain (не GRAPH_REPORT целиком). См. instructions/graphify.md`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#E36209`,"--shiki-dark":`#FFAB70`},children:`2.`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:` Или code-review-graph / codebase-memory: minimal context → узкий набор файлов.`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#E36209`,"--shiki-dark":`#FFAB70`},children:`3.`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:` Длинный CLI — через sqz compress (stdin pipe). См. instructions/sqz.md`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#E36209`,"--shiki-dark":`#FFAB70`},children:`4.`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:` Перед кодом — ponytail: YAGNI, reuse DevCraft API, минимальный diff. См. instructions/ponytail.md`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#E36209`,"--shiki-dark":`#FFAB70`},children:`5.`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:` graphify update . только после правок`})]})]})})}),`
`,(0,n.jsx)(t.h2,{id:`см-также`,children:`См. также`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`../getting_started`,children:`Начало работы`})}),`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`../../../../../instructions/constitution`,children:`Конституция PHP`})}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:`../../../../../instructions/graphify`,children:`Graphify`}),` · `,(0,n.jsx)(t.a,{href:`../../../../../instructions/code-review-graph`,children:`Code Review Graph`}),` · `,(0,n.jsx)(t.a,{href:`../../../../../instructions/codebase-memory-mcp`,children:`Codebase Memory`}),` · `,(0,n.jsx)(t.a,{href:`../../../../../instructions/sqz`,children:`sqz`}),` · `,(0,n.jsx)(t.a,{href:`../../../../../instructions/ponytail`,children:`Ponytail`})]}),`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`new_module`,children:`Генератор модулей`})}),`
`]})]})}function l(e={}){let{wrapper:t}=e.components||{};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}export{a as _markdown,l as default,r as frontmatter,i as lastModified,o as structuredData,s as toc};