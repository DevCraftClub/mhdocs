import{r as e}from"./rolldown-runtime-QTnfLwEv.js";import{t}from"./jsx-runtime-By8HlURe.js";var n=e(t()),r={title:`Справочник: ИИ-инструменты`,description:`Единая точка входа: skills, MCP, Cursor-rules, update-policy и промпт модуля DevCraft.`,version:`200.4.1`},i=new Date(1789411935e3),a=`

Единая точка входа по ИИ-инструментам для авторов **DevCraft Admin** и сателлитов. Детали по разделам — в [Помощь в разработке](../development_help).

## Быстрый старт агента [#быстрый-старт-агента]

1. Skills: \`using-superpowers\`; новый/перенос модуля — \`create-devcraft-plugin\` (+ \`grill-with-docs\` при пробелах).
2. Большая задача / развилки — Sequential Thinking.
3. Структурный контекст: Code Review Graph + Codebase Memory; длинный stdout — Caveman; прошлые сессии — Cavemem.
4. Если есть \`graphify-out/\` — \`graphify query\` / \`path\` / \`explain\`.
5. Код по reuse-first, [конституции](../../../../../instructions/constitution), [PHP DevCraft Standards](php_devcraft_standards).
6. После правок DLE / indexed DevCraft — update graphify / CRG / Codebase Memory.
7. Устойчивые предпочтения команды — mem0 **только после** auth (\`MEM0_API_KEY\`).

## Каталог Skills [#каталог-skills]

| Skill                   | Зачем                                      | Ссылка                                                                      |
| ----------------------- | ------------------------------------------ | --------------------------------------------------------------------------- |
| using-superpowers       | Проверить skills до действий               | [development\\_help/skills](../development_help/skills/using-superpowers)    |
| grill-with-docs         | Интервью 1–2 вопроса за раунд              | [grill-with-docs](../development_help/skills/grill-with-docs)               |
| create-devcraft-plugin  | Создание / перенос / обновление сателлита  | [create-devcraft-plugin](../development_help/skills/create-devcraft-plugin) |
| caveman (skill)         | Краткая речь; не путать с MCP compress     | [caveman](../development_help/skills/caveman)                               |
| codebase-memory (skill) | Как пользоваться skill-обвязкой, если есть | [codebase-memory](../development_help/skills/codebase-memory)               |

Подключение: каталог \`.cursor/skills/\` в host-проекте. Обзор: [Skills](../development_help/skills).

## Каталог MCP / CLI [#каталог-mcp--cli]

| Инструмент          | Когда                             | Update DB?                  | DevCraft                                             | Install                                                                         |
| ------------------- | --------------------------------- | --------------------------- | ---------------------------------------------------- | ------------------------------------------------------------------------------- |
| Graphify            | Архитектура, связи                | Да (DLE + indexed DevCraft) | [mcp/graphify](../development_help/mcp/graphify)     | [instructions/graphify](../../../../../instructions/graphify)                   |
| Code Review Graph   | callers/callees, impact           | Да                          | [mcp/CRG](../development_help/mcp/code-review-graph) | [instructions/code-review-graph](../../../../../instructions/code-review-graph) |
| Codebase Memory     | символы, trace\\_path              | Да (index refresh)          | [mcp](../development_help/mcp/codebase-memory)       | [instructions](../../../../../instructions/codebase-memory-mcp)                 |
| Caveman             | compress длинного stdout          | Нет                         | [mcp](../development_help/mcp/caveman)               | [instructions](../../../../../instructions/caveman)                             |
| Cavemem             | прошлые сессии (локальный SQLite) | Нет                         | [mcp](../development_help/mcp/cavemem)               | [instructions](../../../../../instructions/cavemem)                             |
| Sequential Thinking | пошаговый дизайн                  | Нет                         | [mcp](../development_help/mcp/sequential-thinking)   | [instructions](../../../../../instructions/sequential-thinking)                 |
| mem0                | platform memory команды           | Нет (cloud)                 | [mcp](../development_help/mcp/mem0)                  | [instructions](../../../../../instructions/mem0)                                |
| memory (MCP)        | локальный entity graph            | —                           | —                                                    | [instructions/memory](../../../../../instructions/memory)                       |
| ponytail            | YAGNI / короткий diff             | —                           | [rules](../development_help/rules/ponytail)          | [instructions](../../../../../instructions/ponytail)                            |

## Каталог Правил (\`.cursor/rules\`) [#каталог-правил-cursorrules]

| Файл                          | Зачем                               | Куда               |
| ----------------------------- | ----------------------------------- | ------------------ |
| \`devcraft-reuse-first.mdc\`    | Skills → MCP → Core → код           | Корень своего репо |
| \`graphify.mdc\`                | Query + update-policy               | То же              |
| \`code-review-graph.mdc\`       | CRG query/update                    | То же              |
| \`codebase-memory.mdc\`         | Index / search                      | То же              |
| \`caveman.mdc\` / \`cavemem.mdc\` | Compress / сессии                   | То же              |
| \`sequential-thinking.mdc\`     | Большие задачи                      | То же              |
| \`mem0.mdc\`                    | Auth + add/search (не секреты)      | То же              |
| \`php-devcraft-standards.mdc\`  | Русский PHPDoc, \`DLEPlugins::Check\` | То же              |
| \`ponytail.mdc\`                | Минимальный diff                    | То же              |

Каталог с пояснениями: [Правила](../development_help/rules).

## Памяти — не путать [#памяти--не-путать]

| Слой                | Что хранит                          | Не для                    |
| ------------------- | ----------------------------------- | ------------------------- |
| **mem0**            | Предпочтения команды (platform/SDK) | Секреты; граф кода        |
| **cavemem**         | Локальный remember/recall сессий    | Entity graph; platform    |
| **memory** MCP      | Локальный entity graph «о мире»     | Исходники проекта         |
| **codebase-memory** | Граф **кода** (символы, рёбра)      | Предпочтения пользователя |

Без \`MEM0_API_KEY\` (\`auth=none\`) — не вызывать write/search mem0 «как будто работает»; см. [mem0](../../../../../instructions/mem0).

## Update-policy [#update-policy]

| Пути в сессии                                                                    | graphify | CRG | Codebase Memory |
| -------------------------------------------------------------------------------- | -------- | --- | --------------- |
| \`engine/**\` (не cache), \`templates/Default/**\`, \`language/Russian/**\`            | Да       | Да  | Да              |
| \`devcraft/src/**\`, \`devcraft/config/**\`, \`devcraft/locales/**\`, \`devcraft/*.php\` | Да       | Да  | Да              |
| Только docs / \`.cursor\` / specs / неиндексируемое                                | Нет      | Нет | Нет             |

Ignore: \`.graphifyignore\` / \`.code-review-graphignore\` (у host: \`devcraft/\` с исключениями \`!src\` / \`!config\` / \`!locales\` / \`!*.php\`).

## Промпт: создание / перенос / обновление модуля [#промпт-создание--перенос--обновление-модуля]

Скопируйте в чат и заполните плейсхолдеры (канон = skill \`create-devcraft-plugin\`):

\`\`\`markdown
Ты разрабатываешь модуль для DLE на базе DevCraft Admin.

Режим работы (выбери один): создание | перенос (legacy/MH Admin → DevCraft) | обновление существующего

Название плагина ({Name}):
Тег / code конфигурации ({code}):
Именование mod ({mod}): обычно = {code}; camelCase вместо пробелов, без лишних - и \\_
Версия плагина ({version}): 200.1.0

Дерево модуля (devcraft/src/modules/{Name}/):

- manifest.php, settings.schema.php (если есть настройки), changelog.data.php
- Pages/, Ajax/, Services/ (по необходимости), Controller/ (публичный слой), templates/\\*.twig, Public/
- при фильтрах таблиц: Filter/\\*.filter.schema.php
- точка входа DLE: engine/inc/{mod}.php
  require_once DLEPlugins::Check(ROOT_DIR . '/devcraft/init.php');
  DevCraft\\Core\\Application::instance()->runAdmin(moduleDir: '{Name}');
- публичный include: Controller/show_*.php от корня сайта — НЕ engine/modules/devcraft/
  {include file="devcraft/src/modules/{Name}/Controller/show_{slug}.php?…"}
- в engine/ только необходимое (admin glue + патчи); не спамить дерево DLE

Обязательные правила:

- PSR-4: DevCraft\\Modules\\{Name}\\ → devcraft/src/modules/{Name}/
- Все require/include проектных файлов через DLEPlugins::Check()
- Комментарии, PHPDoc и UI-строки на русском; вывод пользователю через функцию перевода \\_\\_()
- HTML админки только в Twig (Metro UI); публичный HTML — templates/{skin}/devcraft/{module}/
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
| PHP DevCraft Standards | https://readme.devcraft.club/dev/dle/devcraft_admin/guides/php_devcraft_standards |
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
- [ ] Controller/\\* (+ show_*.php при публичном include)
- [ ] templates/\\*.twig
- [ ] Public/ (icon и т.п.)
- [ ] Filter/\\*.filter.schema.php (если нужны фильтры)
- [ ] engine/inc/{mod}.php (только admin glue)
- [ ] install.xml + locales в devcraft/locales/
- [ ] composer dump-autoload

Детали: getting_started, constitution, php_devcraft_standards, crud_pages.
\`\`\`

Skill-страница: [create-devcraft-plugin](../development_help/skills/create-devcraft-plugin). Гайд руками: [Создание модуля](create_module).

## Чеклист перед merge [#чеклист-перед-merge]

* [ ] \`composer dump-autoload\` в \`devcraft/\` после новых PHP-классов
* [ ] Docs-gate: правки Core / публичного API админки → обновить docs \`devcraft_admin\`
* [ ] Update graphify / CRG / Codebase Memory, если трогали indexed paths (таблица выше)
* [ ] Нет секретов в mem0 / git; \`MEM0_API_KEY\` только локально
* [ ] Сателлит: \`mod\`/\`code\`, AJAX через \`devcraft/ajax.php\`, changelog при релизе

## См. также [#см-также]

<Cards>
  <Card title="Помощь в разработке" href="/dev/dle/devcraft_admin/200.4.0/development_help">
    Skills · MCP · Правила
  </Card>

  <Card title="PHP DevCraft Standards" href="/dev/dle/devcraft_admin/200.4.0/guides/php_devcraft_standards">
    Русский PHPDoc, DLEPlugins::Check, tpl
  </Card>

  <Card title="Конституция PHP" href="/instructions/constitution">
    Слои, Twig, Metro, запрет CLI
  </Card>

  <Card title="Создать модуль" href="/dev/dle/devcraft_admin/200.4.0/guides/create_module">
    Каркас без ИИ-промпта
  </Card>
</Cards>
`,o={contents:[{heading:void 0,content:`Единая точка входа по ИИ-инструментам для авторов **DevCraft Admin** и сателлитов. Детали по разделам — в Помощь в разработке.`},{heading:`быстрый-старт-агента`,content:"Skills: `using-superpowers`; новый/перенос модуля — `create-devcraft-plugin` (+ `grill-with-docs` при пробелах)."},{heading:`быстрый-старт-агента`,content:`Большая задача / развилки — Sequential Thinking.`},{heading:`быстрый-старт-агента`,content:`Структурный контекст: Code Review Graph + Codebase Memory; длинный stdout — Caveman; прошлые сессии — Cavemem.`},{heading:`быстрый-старт-агента`,content:"Если есть `graphify-out/` — `graphify query` / `path` / `explain`."},{heading:`быстрый-старт-агента`,content:`Код по reuse-first, конституции, PHP DevCraft Standards.`},{heading:`быстрый-старт-агента`,content:`После правок DLE / indexed DevCraft — update graphify / CRG / Codebase Memory.`},{heading:`быстрый-старт-агента`,content:"Устойчивые предпочтения команды — mem0 **только после** auth (`MEM0_API_KEY`)."},{heading:`каталог-skills`,content:`Skill`},{heading:`каталог-skills`,content:`Зачем`},{heading:`каталог-skills`,content:`Ссылка`},{heading:`каталог-skills`,content:`using-superpowers`},{heading:`каталог-skills`,content:`Проверить skills до действий`},{heading:`каталог-skills`,content:`development\\_help/skills`},{heading:`каталог-skills`,content:`grill-with-docs`},{heading:`каталог-skills`,content:`Интервью 1–2 вопроса за раунд`},{heading:`каталог-skills`,content:`grill-with-docs`},{heading:`каталог-skills`,content:`create-devcraft-plugin`},{heading:`каталог-skills`,content:`Создание / перенос / обновление сателлита`},{heading:`каталог-skills`,content:`create-devcraft-plugin`},{heading:`каталог-skills`,content:`caveman (skill)`},{heading:`каталог-skills`,content:`Краткая речь; не путать с MCP compress`},{heading:`каталог-skills`,content:`caveman`},{heading:`каталог-skills`,content:`codebase-memory (skill)`},{heading:`каталог-skills`,content:`Как пользоваться skill-обвязкой, если есть`},{heading:`каталог-skills`,content:`codebase-memory`},{heading:`каталог-skills`,content:"Подключение: каталог `.cursor/skills/` в host-проекте. Обзор: Skills."},{heading:`каталог-mcp--cli`,content:`Инструмент`},{heading:`каталог-mcp--cli`,content:`Когда`},{heading:`каталог-mcp--cli`,content:`Update DB?`},{heading:`каталог-mcp--cli`,content:`DevCraft`},{heading:`каталог-mcp--cli`,content:`Install`},{heading:`каталог-mcp--cli`,content:`Graphify`},{heading:`каталог-mcp--cli`,content:`Архитектура, связи`},{heading:`каталог-mcp--cli`,content:`Да (DLE + indexed DevCraft)`},{heading:`каталог-mcp--cli`,content:`mcp/graphify`},{heading:`каталог-mcp--cli`,content:`instructions/graphify`},{heading:`каталог-mcp--cli`,content:`Code Review Graph`},{heading:`каталог-mcp--cli`,content:`callers/callees, impact`},{heading:`каталог-mcp--cli`,content:`Да`},{heading:`каталог-mcp--cli`,content:`mcp/CRG`},{heading:`каталог-mcp--cli`,content:`instructions/code-review-graph`},{heading:`каталог-mcp--cli`,content:`Codebase Memory`},{heading:`каталог-mcp--cli`,content:`символы, trace\\_path`},{heading:`каталог-mcp--cli`,content:`Да (index refresh)`},{heading:`каталог-mcp--cli`,content:`mcp`},{heading:`каталог-mcp--cli`,content:`instructions`},{heading:`каталог-mcp--cli`,content:`Caveman`},{heading:`каталог-mcp--cli`,content:`compress длинного stdout`},{heading:`каталог-mcp--cli`,content:`Нет`},{heading:`каталог-mcp--cli`,content:`mcp`},{heading:`каталог-mcp--cli`,content:`instructions`},{heading:`каталог-mcp--cli`,content:`Cavemem`},{heading:`каталог-mcp--cli`,content:`прошлые сессии (локальный SQLite)`},{heading:`каталог-mcp--cli`,content:`Нет`},{heading:`каталог-mcp--cli`,content:`mcp`},{heading:`каталог-mcp--cli`,content:`instructions`},{heading:`каталог-mcp--cli`,content:`Sequential Thinking`},{heading:`каталог-mcp--cli`,content:`пошаговый дизайн`},{heading:`каталог-mcp--cli`,content:`Нет`},{heading:`каталог-mcp--cli`,content:`mcp`},{heading:`каталог-mcp--cli`,content:`instructions`},{heading:`каталог-mcp--cli`,content:`mem0`},{heading:`каталог-mcp--cli`,content:`platform memory команды`},{heading:`каталог-mcp--cli`,content:`Нет (cloud)`},{heading:`каталог-mcp--cli`,content:`mcp`},{heading:`каталог-mcp--cli`,content:`instructions`},{heading:`каталог-mcp--cli`,content:`memory (MCP)`},{heading:`каталог-mcp--cli`,content:`локальный entity graph`},{heading:`каталог-mcp--cli`,content:`—`},{heading:`каталог-mcp--cli`,content:`—`},{heading:`каталог-mcp--cli`,content:`instructions/memory`},{heading:`каталог-mcp--cli`,content:`ponytail`},{heading:`каталог-mcp--cli`,content:`YAGNI / короткий diff`},{heading:`каталог-mcp--cli`,content:`—`},{heading:`каталог-mcp--cli`,content:`rules`},{heading:`каталог-mcp--cli`,content:`instructions`},{heading:`каталог-правил-cursorrules`,content:`Файл`},{heading:`каталог-правил-cursorrules`,content:`Зачем`},{heading:`каталог-правил-cursorrules`,content:`Куда`},{heading:`каталог-правил-cursorrules`,content:"`devcraft-reuse-first.mdc`"},{heading:`каталог-правил-cursorrules`,content:`Skills → MCP → Core → код`},{heading:`каталог-правил-cursorrules`,content:`Корень своего репо`},{heading:`каталог-правил-cursorrules`,content:"`graphify.mdc`"},{heading:`каталог-правил-cursorrules`,content:`Query + update-policy`},{heading:`каталог-правил-cursorrules`,content:`То же`},{heading:`каталог-правил-cursorrules`,content:"`code-review-graph.mdc`"},{heading:`каталог-правил-cursorrules`,content:`CRG query/update`},{heading:`каталог-правил-cursorrules`,content:`То же`},{heading:`каталог-правил-cursorrules`,content:"`codebase-memory.mdc`"},{heading:`каталог-правил-cursorrules`,content:`Index / search`},{heading:`каталог-правил-cursorrules`,content:`То же`},{heading:`каталог-правил-cursorrules`,content:"`caveman.mdc` / `cavemem.mdc`"},{heading:`каталог-правил-cursorrules`,content:`Compress / сессии`},{heading:`каталог-правил-cursorrules`,content:`То же`},{heading:`каталог-правил-cursorrules`,content:"`sequential-thinking.mdc`"},{heading:`каталог-правил-cursorrules`,content:`Большие задачи`},{heading:`каталог-правил-cursorrules`,content:`То же`},{heading:`каталог-правил-cursorrules`,content:"`mem0.mdc`"},{heading:`каталог-правил-cursorrules`,content:`Auth + add/search (не секреты)`},{heading:`каталог-правил-cursorrules`,content:`То же`},{heading:`каталог-правил-cursorrules`,content:"`php-devcraft-standards.mdc`"},{heading:`каталог-правил-cursorrules`,content:"Русский PHPDoc, `DLEPlugins::Check`"},{heading:`каталог-правил-cursorrules`,content:`То же`},{heading:`каталог-правил-cursorrules`,content:"`ponytail.mdc`"},{heading:`каталог-правил-cursorrules`,content:`Минимальный diff`},{heading:`каталог-правил-cursorrules`,content:`То же`},{heading:`каталог-правил-cursorrules`,content:`Каталог с пояснениями: Правила.`},{heading:`памяти--не-путать`,content:`Слой`},{heading:`памяти--не-путать`,content:`Что хранит`},{heading:`памяти--не-путать`,content:`Не для`},{heading:`памяти--не-путать`,content:`**mem0**`},{heading:`памяти--не-путать`,content:`Предпочтения команды (platform/SDK)`},{heading:`памяти--не-путать`,content:`Секреты; граф кода`},{heading:`памяти--не-путать`,content:`**cavemem**`},{heading:`памяти--не-путать`,content:`Локальный remember/recall сессий`},{heading:`памяти--не-путать`,content:`Entity graph; platform`},{heading:`памяти--не-путать`,content:`**memory** MCP`},{heading:`памяти--не-путать`,content:`Локальный entity graph «о мире»`},{heading:`памяти--не-путать`,content:`Исходники проекта`},{heading:`памяти--не-путать`,content:`**codebase-memory**`},{heading:`памяти--не-путать`,content:`Граф **кода** (символы, рёбра)`},{heading:`памяти--не-путать`,content:`Предпочтения пользователя`},{heading:`памяти--не-путать`,content:"Без `MEM0_API_KEY` (`auth=none`) — не вызывать write/search mem0 «как будто работает»; см. mem0."},{heading:`update-policy`,content:`Пути в сессии`},{heading:`update-policy`,content:`graphify`},{heading:`update-policy`,content:`CRG`},{heading:`update-policy`,content:`Codebase Memory`},{heading:`update-policy`,content:"`engine/**` (не cache), `templates/Default/**`, `language/Russian/**`"},{heading:`update-policy`,content:`Да`},{heading:`update-policy`,content:`Да`},{heading:`update-policy`,content:`Да`},{heading:`update-policy`,content:"`devcraft/src/**`, `devcraft/config/**`, `devcraft/locales/**`, `devcraft/*.php`"},{heading:`update-policy`,content:`Да`},{heading:`update-policy`,content:`Да`},{heading:`update-policy`,content:`Да`},{heading:`update-policy`,content:"Только docs / `.cursor` / specs / неиндексируемое"},{heading:`update-policy`,content:`Нет`},{heading:`update-policy`,content:`Нет`},{heading:`update-policy`,content:`Нет`},{heading:`update-policy`,content:"Ignore: `.graphifyignore` / `.code-review-graphignore` (у host: `devcraft/` с исключениями `!src` / `!config` / `!locales` / `!*.php`)."},{heading:`промпт-создание--перенос--обновление-модуля`,content:"Скопируйте в чат и заполните плейсхолдеры (канон = skill `create-devcraft-plugin`):"},{heading:`промпт-создание--перенос--обновление-модуля`,content:`Skill-страница: create-devcraft-plugin. Гайд руками: Создание модуля.`},{heading:`чеклист-перед-merge`,content:"`composer dump-autoload` в `devcraft/` после новых PHP-классов"},{heading:`чеклист-перед-merge`,content:"Docs-gate: правки Core / публичного API админки → обновить docs `devcraft_admin`"},{heading:`чеклист-перед-merge`,content:`Update graphify / CRG / Codebase Memory, если трогали indexed paths (таблица выше)`},{heading:`чеклист-перед-merge`,content:"Нет секретов в mem0 / git; `MEM0_API_KEY` только локально"},{heading:`чеклист-перед-merge`,content:"Сателлит: `mod`/`code`, AJAX через `devcraft/ajax.php`, changelog при релизе"},{heading:`см-также`,content:`Skills · MCP · Правила`},{heading:`см-также`,content:`Русский PHPDoc, DLEPlugins::Check, tpl`},{heading:`см-также`,content:`Слои, Twig, Metro, запрет CLI`},{heading:`см-также`,content:`Каркас без ИИ-промпта`}],headings:[{id:`быстрый-старт-агента`,content:`Быстрый старт агента`},{id:`каталог-skills`,content:`Каталог Skills`},{id:`каталог-mcp--cli`,content:`Каталог MCP / CLI`},{id:`каталог-правил-cursorrules`,content:"Каталог Правил (`.cursor/rules`)"},{id:`памяти--не-путать`,content:`Памяти — не путать`},{id:`update-policy`,content:`Update-policy`},{id:`промпт-создание--перенос--обновление-модуля`,content:`Промпт: создание / перенос / обновление модуля`},{id:`чеклист-перед-merge`,content:`Чеклист перед merge`},{id:`см-также`,content:`См. также`}]},s=[{depth:2,url:`#быстрый-старт-агента`,title:(0,n.jsx)(n.Fragment,{children:`Быстрый старт агента`})},{depth:2,url:`#каталог-skills`,title:(0,n.jsx)(n.Fragment,{children:`Каталог Skills`})},{depth:2,url:`#каталог-mcp--cli`,title:(0,n.jsx)(n.Fragment,{children:`Каталог MCP / CLI`})},{depth:2,url:`#каталог-правил-cursorrules`,title:(0,n.jsxs)(n.Fragment,{children:[`Каталог Правил (`,(0,n.jsx)(`code`,{children:`.cursor/rules`}),`)`]})},{depth:2,url:`#памяти--не-путать`,title:(0,n.jsx)(n.Fragment,{children:`Памяти — не путать`})},{depth:2,url:`#update-policy`,title:(0,n.jsx)(n.Fragment,{children:`Update-policy`})},{depth:2,url:`#промпт-создание--перенос--обновление-модуля`,title:(0,n.jsx)(n.Fragment,{children:`Промпт: создание / перенос / обновление модуля`})},{depth:2,url:`#чеклист-перед-merge`,title:(0,n.jsx)(n.Fragment,{children:`Чеклист перед merge`})},{depth:2,url:`#см-также`,title:(0,n.jsx)(n.Fragment,{children:`См. также`})}];function c(e){let t={a:`a`,code:`code`,h2:`h2`,input:`input`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,span:`span`,strong:`strong`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,ul:`ul`,...e.components},{Card:r,Cards:i}=t;return r||u(`Card`,!0),i||u(`Cards`,!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:[`Единая точка входа по ИИ-инструментам для авторов `,(0,n.jsx)(t.strong,{children:`DevCraft Admin`}),` и сателлитов. Детали по разделам — в `,(0,n.jsx)(t.a,{href:`../development_help`,children:`Помощь в разработке`}),`.`]}),`
`,(0,n.jsx)(t.h2,{id:`быстрый-старт-агента`,children:`Быстрый старт агента`}),`
`,(0,n.jsxs)(t.ol,{children:[`
`,(0,n.jsxs)(t.li,{children:[`Skills: `,(0,n.jsx)(t.code,{children:`using-superpowers`}),`; новый/перенос модуля — `,(0,n.jsx)(t.code,{children:`create-devcraft-plugin`}),` (+ `,(0,n.jsx)(t.code,{children:`grill-with-docs`}),` при пробелах).`]}),`
`,(0,n.jsx)(t.li,{children:`Большая задача / развилки — Sequential Thinking.`}),`
`,(0,n.jsx)(t.li,{children:`Структурный контекст: Code Review Graph + Codebase Memory; длинный stdout — Caveman; прошлые сессии — Cavemem.`}),`
`,(0,n.jsxs)(t.li,{children:[`Если есть `,(0,n.jsx)(t.code,{children:`graphify-out/`}),` — `,(0,n.jsx)(t.code,{children:`graphify query`}),` / `,(0,n.jsx)(t.code,{children:`path`}),` / `,(0,n.jsx)(t.code,{children:`explain`}),`.`]}),`
`,(0,n.jsxs)(t.li,{children:[`Код по reuse-first, `,(0,n.jsx)(t.a,{href:`../../../../../instructions/constitution`,children:`конституции`}),`, `,(0,n.jsx)(t.a,{href:`php_devcraft_standards`,children:`PHP DevCraft Standards`}),`.`]}),`
`,(0,n.jsx)(t.li,{children:`После правок DLE / indexed DevCraft — update graphify / CRG / Codebase Memory.`}),`
`,(0,n.jsxs)(t.li,{children:[`Устойчивые предпочтения команды — mem0 `,(0,n.jsx)(t.strong,{children:`только после`}),` auth (`,(0,n.jsx)(t.code,{children:`MEM0_API_KEY`}),`).`]}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`каталог-skills`,children:`Каталог Skills`}),`
`,(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`Skill`}),(0,n.jsx)(t.th,{children:`Зачем`}),(0,n.jsx)(t.th,{children:`Ссылка`})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`using-superpowers`}),(0,n.jsx)(t.td,{children:`Проверить skills до действий`}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:`../development_help/skills/using-superpowers`,children:`development_help/skills`})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`grill-with-docs`}),(0,n.jsx)(t.td,{children:`Интервью 1–2 вопроса за раунд`}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:`../development_help/skills/grill-with-docs`,children:`grill-with-docs`})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`create-devcraft-plugin`}),(0,n.jsx)(t.td,{children:`Создание / перенос / обновление сателлита`}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:`../development_help/skills/create-devcraft-plugin`,children:`create-devcraft-plugin`})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`caveman (skill)`}),(0,n.jsx)(t.td,{children:`Краткая речь; не путать с MCP compress`}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:`../development_help/skills/caveman`,children:`caveman`})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`codebase-memory (skill)`}),(0,n.jsx)(t.td,{children:`Как пользоваться skill-обвязкой, если есть`}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:`../development_help/skills/codebase-memory`,children:`codebase-memory`})})]})]})]}),`
`,(0,n.jsxs)(t.p,{children:[`Подключение: каталог `,(0,n.jsx)(t.code,{children:`.cursor/skills/`}),` в host-проекте. Обзор: `,(0,n.jsx)(t.a,{href:`../development_help/skills`,children:`Skills`}),`.`]}),`
`,(0,n.jsx)(t.h2,{id:`каталог-mcp--cli`,children:`Каталог MCP / CLI`}),`
`,(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`Инструмент`}),(0,n.jsx)(t.th,{children:`Когда`}),(0,n.jsx)(t.th,{children:`Update DB?`}),(0,n.jsx)(t.th,{children:`DevCraft`}),(0,n.jsx)(t.th,{children:`Install`})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`Graphify`}),(0,n.jsx)(t.td,{children:`Архитектура, связи`}),(0,n.jsx)(t.td,{children:`Да (DLE + indexed DevCraft)`}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:`../development_help/mcp/graphify`,children:`mcp/graphify`})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:`../../../../../instructions/graphify`,children:`instructions/graphify`})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`Code Review Graph`}),(0,n.jsx)(t.td,{children:`callers/callees, impact`}),(0,n.jsx)(t.td,{children:`Да`}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:`../development_help/mcp/code-review-graph`,children:`mcp/CRG`})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:`../../../../../instructions/code-review-graph`,children:`instructions/code-review-graph`})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`Codebase Memory`}),(0,n.jsx)(t.td,{children:`символы, trace_path`}),(0,n.jsx)(t.td,{children:`Да (index refresh)`}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:`../development_help/mcp/codebase-memory`,children:`mcp`})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:`../../../../../instructions/codebase-memory-mcp`,children:`instructions`})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`Caveman`}),(0,n.jsx)(t.td,{children:`compress длинного stdout`}),(0,n.jsx)(t.td,{children:`Нет`}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:`../development_help/mcp/caveman`,children:`mcp`})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:`../../../../../instructions/caveman`,children:`instructions`})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`Cavemem`}),(0,n.jsx)(t.td,{children:`прошлые сессии (локальный SQLite)`}),(0,n.jsx)(t.td,{children:`Нет`}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:`../development_help/mcp/cavemem`,children:`mcp`})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:`../../../../../instructions/cavemem`,children:`instructions`})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`Sequential Thinking`}),(0,n.jsx)(t.td,{children:`пошаговый дизайн`}),(0,n.jsx)(t.td,{children:`Нет`}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:`../development_help/mcp/sequential-thinking`,children:`mcp`})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:`../../../../../instructions/sequential-thinking`,children:`instructions`})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`mem0`}),(0,n.jsx)(t.td,{children:`platform memory команды`}),(0,n.jsx)(t.td,{children:`Нет (cloud)`}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:`../development_help/mcp/mem0`,children:`mcp`})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:`../../../../../instructions/mem0`,children:`instructions`})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`memory (MCP)`}),(0,n.jsx)(t.td,{children:`локальный entity graph`}),(0,n.jsx)(t.td,{children:`—`}),(0,n.jsx)(t.td,{children:`—`}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:`../../../../../instructions/memory`,children:`instructions/memory`})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`ponytail`}),(0,n.jsx)(t.td,{children:`YAGNI / короткий diff`}),(0,n.jsx)(t.td,{children:`—`}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:`../development_help/rules/ponytail`,children:`rules`})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:`../../../../../instructions/ponytail`,children:`instructions`})})]})]})]}),`
`,(0,n.jsxs)(t.h2,{id:`каталог-правил-cursorrules`,children:[`Каталог Правил (`,(0,n.jsx)(t.code,{children:`.cursor/rules`}),`)`]}),`
`,(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`Файл`}),(0,n.jsx)(t.th,{children:`Зачем`}),(0,n.jsx)(t.th,{children:`Куда`})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:`devcraft-reuse-first.mdc`})}),(0,n.jsx)(t.td,{children:`Skills → MCP → Core → код`}),(0,n.jsx)(t.td,{children:`Корень своего репо`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:`graphify.mdc`})}),(0,n.jsx)(t.td,{children:`Query + update-policy`}),(0,n.jsx)(t.td,{children:`То же`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:`code-review-graph.mdc`})}),(0,n.jsx)(t.td,{children:`CRG query/update`}),(0,n.jsx)(t.td,{children:`То же`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:`codebase-memory.mdc`})}),(0,n.jsx)(t.td,{children:`Index / search`}),(0,n.jsx)(t.td,{children:`То же`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsxs)(t.td,{children:[(0,n.jsx)(t.code,{children:`caveman.mdc`}),` / `,(0,n.jsx)(t.code,{children:`cavemem.mdc`})]}),(0,n.jsx)(t.td,{children:`Compress / сессии`}),(0,n.jsx)(t.td,{children:`То же`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:`sequential-thinking.mdc`})}),(0,n.jsx)(t.td,{children:`Большие задачи`}),(0,n.jsx)(t.td,{children:`То же`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:`mem0.mdc`})}),(0,n.jsx)(t.td,{children:`Auth + add/search (не секреты)`}),(0,n.jsx)(t.td,{children:`То же`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:`php-devcraft-standards.mdc`})}),(0,n.jsxs)(t.td,{children:[`Русский PHPDoc, `,(0,n.jsx)(t.code,{children:`DLEPlugins::Check`})]}),(0,n.jsx)(t.td,{children:`То же`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:`ponytail.mdc`})}),(0,n.jsx)(t.td,{children:`Минимальный diff`}),(0,n.jsx)(t.td,{children:`То же`})]})]})]}),`
`,(0,n.jsxs)(t.p,{children:[`Каталог с пояснениями: `,(0,n.jsx)(t.a,{href:`../development_help/rules`,children:`Правила`}),`.`]}),`
`,(0,n.jsx)(t.h2,{id:`памяти--не-путать`,children:`Памяти — не путать`}),`
`,(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`Слой`}),(0,n.jsx)(t.th,{children:`Что хранит`}),(0,n.jsx)(t.th,{children:`Не для`})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:`mem0`})}),(0,n.jsx)(t.td,{children:`Предпочтения команды (platform/SDK)`}),(0,n.jsx)(t.td,{children:`Секреты; граф кода`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:`cavemem`})}),(0,n.jsx)(t.td,{children:`Локальный remember/recall сессий`}),(0,n.jsx)(t.td,{children:`Entity graph; platform`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsxs)(t.td,{children:[(0,n.jsx)(t.strong,{children:`memory`}),` MCP`]}),(0,n.jsx)(t.td,{children:`Локальный entity graph «о мире»`}),(0,n.jsx)(t.td,{children:`Исходники проекта`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:`codebase-memory`})}),(0,n.jsxs)(t.td,{children:[`Граф `,(0,n.jsx)(t.strong,{children:`кода`}),` (символы, рёбра)`]}),(0,n.jsx)(t.td,{children:`Предпочтения пользователя`})]})]})]}),`
`,(0,n.jsxs)(t.p,{children:[`Без `,(0,n.jsx)(t.code,{children:`MEM0_API_KEY`}),` (`,(0,n.jsx)(t.code,{children:`auth=none`}),`) — не вызывать write/search mem0 «как будто работает»; см. `,(0,n.jsx)(t.a,{href:`../../../../../instructions/mem0`,children:`mem0`}),`.`]}),`
`,(0,n.jsx)(t.h2,{id:`update-policy`,children:`Update-policy`}),`
`,(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`Пути в сессии`}),(0,n.jsx)(t.th,{children:`graphify`}),(0,n.jsx)(t.th,{children:`CRG`}),(0,n.jsx)(t.th,{children:`Codebase Memory`})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsxs)(t.td,{children:[(0,n.jsx)(t.code,{children:`engine/**`}),` (не cache), `,(0,n.jsx)(t.code,{children:`templates/Default/**`}),`, `,(0,n.jsx)(t.code,{children:`language/Russian/**`})]}),(0,n.jsx)(t.td,{children:`Да`}),(0,n.jsx)(t.td,{children:`Да`}),(0,n.jsx)(t.td,{children:`Да`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsxs)(t.td,{children:[(0,n.jsx)(t.code,{children:`devcraft/src/**`}),`, `,(0,n.jsx)(t.code,{children:`devcraft/config/**`}),`, `,(0,n.jsx)(t.code,{children:`devcraft/locales/**`}),`, `,(0,n.jsx)(t.code,{children:`devcraft/*.php`})]}),(0,n.jsx)(t.td,{children:`Да`}),(0,n.jsx)(t.td,{children:`Да`}),(0,n.jsx)(t.td,{children:`Да`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsxs)(t.td,{children:[`Только docs / `,(0,n.jsx)(t.code,{children:`.cursor`}),` / specs / неиндексируемое`]}),(0,n.jsx)(t.td,{children:`Нет`}),(0,n.jsx)(t.td,{children:`Нет`}),(0,n.jsx)(t.td,{children:`Нет`})]})]})]}),`
`,(0,n.jsxs)(t.p,{children:[`Ignore: `,(0,n.jsx)(t.code,{children:`.graphifyignore`}),` / `,(0,n.jsx)(t.code,{children:`.code-review-graphignore`}),` (у host: `,(0,n.jsx)(t.code,{children:`devcraft/`}),` с исключениями `,(0,n.jsx)(t.code,{children:`!src`}),` / `,(0,n.jsx)(t.code,{children:`!config`}),` / `,(0,n.jsx)(t.code,{children:`!locales`}),` / `,(0,n.jsx)(t.code,{children:`!*.php`}),`).`]}),`
`,(0,n.jsx)(t.h2,{id:`промпт-создание--перенос--обновление-модуля`,children:`Промпт: создание / перенос / обновление модуля`}),`
`,(0,n.jsxs)(t.p,{children:[`Скопируйте в чат и заполните плейсхолдеры (канон = skill `,(0,n.jsx)(t.code,{children:`create-devcraft-plugin`}),`):`]}),`
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
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#E36209`,"--shiki-dark":`#FFAB70`},children:`-`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:` Pages/, Ajax/, Services/ (по необходимости), Controller/ (публичный слой), templates/`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`\\*`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`.twig, Public/`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#E36209`,"--shiki-dark":`#FFAB70`},children:`-`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:` при фильтрах таблиц: Filter/`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`\\*`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`.filter.schema.php`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#E36209`,"--shiki-dark":`#FFAB70`},children:`-`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:` точка входа DLE: engine/inc/{mod}.php`})]}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`  require_once DLEPlugins::Check(ROOT_DIR . '/devcraft/init.php');`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`  DevCraft\\Core\\Application::instance()->runAdmin(moduleDir: '{Name}');`})}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#E36209`,"--shiki-dark":`#FFAB70`},children:`-`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:` публичный include: Controller/show_*.php от корня сайта — НЕ engine/modules/devcraft/`})]}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`  {include file="devcraft/src/modules/{Name}/Controller/show_{slug}.php?…"}`})}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#E36209`,"--shiki-dark":`#FFAB70`},children:`-`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:` в engine/ только необходимое (admin glue + патчи); не спамить дерево DLE`})]}),`
`,(0,n.jsx)(t.span,{className:`line`}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`Обязательные правила:`})}),`
`,(0,n.jsx)(t.span,{className:`line`}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#E36209`,"--shiki-dark":`#FFAB70`},children:`-`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:` PSR-4: DevCraft\\Modules`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`\\{`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`Name}\\ → devcraft/src/modules/{Name}/`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#E36209`,"--shiki-dark":`#FFAB70`},children:`-`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:` Все require/include проектных файлов через DLEPlugins::Check()`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#E36209`,"--shiki-dark":`#FFAB70`},children:`-`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:` Комментарии, PHPDoc и UI-строки на русском; вывод пользователю через функцию перевода `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`\\_\\_`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`()`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#E36209`,"--shiki-dark":`#FFAB70`},children:`-`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:` HTML админки только в Twig (Metro UI); публичный HTML — templates/{skin}/devcraft/{module}/`})]}),`
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
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`| PHP DevCraft Standards | https://readme.devcraft.club/dev/dle/devcraft_admin/guides/php_devcraft_standards |`})}),`
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
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#E36209`,"--shiki-dark":`#FFAB70`},children:`-`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:` [ ] Controller/`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`\\*`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:` (+ show_*.php при публичном include)`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#E36209`,"--shiki-dark":`#FFAB70`},children:`-`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:` [ ] templates/`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`\\*`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`.twig`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#E36209`,"--shiki-dark":`#FFAB70`},children:`-`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:` [ ] Public/ (icon и т.п.)`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#E36209`,"--shiki-dark":`#FFAB70`},children:`-`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:` [ ] Filter/`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`\\*`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`.filter.schema.php (если нужны фильтры)`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#E36209`,"--shiki-dark":`#FFAB70`},children:`-`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:` [ ] engine/inc/{mod}.php (только admin glue)`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#E36209`,"--shiki-dark":`#FFAB70`},children:`-`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:` [ ] install.xml + locales в devcraft/locales/`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#E36209`,"--shiki-dark":`#FFAB70`},children:`-`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:` [ ] composer dump-autoload`})]}),`
`,(0,n.jsx)(t.span,{className:`line`}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`Детали: getting_started, constitution, php_devcraft_standards, crud_pages.`})})]})})}),`
`,(0,n.jsxs)(t.p,{children:[`Skill-страница: `,(0,n.jsx)(t.a,{href:`../development_help/skills/create-devcraft-plugin`,children:`create-devcraft-plugin`}),`. Гайд руками: `,(0,n.jsx)(t.a,{href:`create_module`,children:`Создание модуля`}),`.`]}),`
`,(0,n.jsx)(t.h2,{id:`чеклист-перед-merge`,children:`Чеклист перед merge`}),`
`,(0,n.jsxs)(t.ul,{className:`contains-task-list`,children:[`
`,(0,n.jsxs)(t.li,{className:`task-list-item`,children:[(0,n.jsx)(t.input,{type:`checkbox`,disabled:!0}),` `,(0,n.jsx)(t.code,{children:`composer dump-autoload`}),` в `,(0,n.jsx)(t.code,{children:`devcraft/`}),` после новых PHP-классов`]}),`
`,(0,n.jsxs)(t.li,{className:`task-list-item`,children:[(0,n.jsx)(t.input,{type:`checkbox`,disabled:!0}),` `,`Docs-gate: правки Core / публичного API админки → обновить docs `,(0,n.jsx)(t.code,{children:`devcraft_admin`})]}),`
`,(0,n.jsxs)(t.li,{className:`task-list-item`,children:[(0,n.jsx)(t.input,{type:`checkbox`,disabled:!0}),` `,`Update graphify / CRG / Codebase Memory, если трогали indexed paths (таблица выше)`]}),`
`,(0,n.jsxs)(t.li,{className:`task-list-item`,children:[(0,n.jsx)(t.input,{type:`checkbox`,disabled:!0}),` `,`Нет секретов в mem0 / git; `,(0,n.jsx)(t.code,{children:`MEM0_API_KEY`}),` только локально`]}),`
`,(0,n.jsxs)(t.li,{className:`task-list-item`,children:[(0,n.jsx)(t.input,{type:`checkbox`,disabled:!0}),` `,`Сателлит: `,(0,n.jsx)(t.code,{children:`mod`}),`/`,(0,n.jsx)(t.code,{children:`code`}),`, AJAX через `,(0,n.jsx)(t.code,{children:`devcraft/ajax.php`}),`, changelog при релизе`]}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`см-также`,children:`См. также`}),`
`,(0,n.jsxs)(i,{children:[(0,n.jsx)(r,{title:`Помощь в разработке`,href:`/dev/dle/devcraft_admin/200.4.0/development_help`,children:(0,n.jsx)(t.p,{children:`Skills · MCP · Правила`})}),(0,n.jsx)(r,{title:`PHP DevCraft Standards`,href:`/dev/dle/devcraft_admin/200.4.0/guides/php_devcraft_standards`,children:(0,n.jsx)(t.p,{children:`Русский PHPDoc, DLEPlugins::Check, tpl`})}),(0,n.jsx)(r,{title:`Конституция PHP`,href:`/instructions/constitution`,children:(0,n.jsx)(t.p,{children:`Слои, Twig, Metro, запрет CLI`})}),(0,n.jsx)(r,{title:`Создать модуль`,href:`/dev/dle/devcraft_admin/200.4.0/guides/create_module`,children:(0,n.jsx)(t.p,{children:`Каркас без ИИ-промпта`})})]})]})}function l(e={}){let{wrapper:t}=e.components||{};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}function u(e,t){throw Error(`Expected `+(t?`component`:`object`)+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}export{a as _markdown,l as default,r as frontmatter,i as lastModified,o as structuredData,s as toc};