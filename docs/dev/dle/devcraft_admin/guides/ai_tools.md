---
tags:
  - ИИ
  - DevCraft
  - DLE
  - Плагин
title: 'ИИ-инструменты — DevCraft Admin'
description: 'Промпты и инструменты для ИИ-агентов при разработке модулей DevCraft.'
keywords: 'PHP, DLE, DevCraft, ИИ, промпт, миграция'
author: 'Maxim Harder'
og:title: 'ИИ-инструменты DevCraft'
og:description: 'Готовые промпты для создания, переноса и обновления модулей.'
og:image: 'https://devcraft.club/data/assets/logo_default/devcraftx2.png'
---

# ИИ-инструменты

Готовые промпты для Cursor, Claude и других агентов. Спецификация модуля — в [Начало работы](../getting_started.md). Правила PHP — в [Конституции](../../../instructions/constitution.md).

## Промпт: создание / перенос / обновление плагина под DevCraft

Скопируйте блок ниже в чат с агентом и заполните плейсхолдеры:

```markdown
Ты разрабатываешь модуль для DLE на базе DevCraft Admin.

Режим работы (выбери один): создание | перенос (legacy/MH Admin → DevCraft) | обновление существующего

Название плагина ({Name}):
Тег / code конфигурации ({code}):
Именование mod ({mod}): обычно = {code}; camelCase вместо пробелов, без лишних - и \_
Версия плагина ({version}): 200.1.0

Дерево модуля (devcraft/src/modules/{Name}/):

- manifest.php, settings.schema.php (если есть настройки), changelog.data.php
- Pages/, Ajax/, Services/ (по необходимости), templates/\*.twig, Public/
- при фильтрах таблиц: Filter/\*.filter.schema.php
- точка входа DLE: engine/inc/{mod}.php
  require_once DLEPlugins::Check(ROOT_DIR . '/devcraft/init.php');
  DevCraft\Core\Application::instance()->runAdmin(moduleDir: '{Name}');

Обязательные правила:

- PSR-4: DevCraft\Modules\{Name}\ → devcraft/src/modules/{Name}/
- Все require/include проектных файлов через DLEPlugins::Check()
- Комментарии, PHPDoc и UI-строки на русском; вывод пользователю через функцию перевода \_\_()
- HTML только в Twig (Metro UI), не в PHP
- AJAX только через devcraft/ajax.php — НЕ создавать engine/ajax/{mod}.php
- Обработчики реализуют AjaxHandlerInterface, возвращают JsonResponse или FileResponse
- Загрузка файлов: DevCraft.Ajax.postMultipart + DevCraft\Core\Http\UploadedFile
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
- [ ] Pages/\*.php
- [ ] Ajax/\*Handler.php
- [ ] templates/\*.twig
- [ ] Public/ (icon и т.п.)
- [ ] Filter/\*.filter.schema.php (если нужны фильтры)
- [ ] engine/inc/{mod}.php
- [ ] install.xml + locales в devcraft/locales/
- [ ] composer dump-autoload

Детали: getting_started.md, instructions/constitution.md, crud_pages.md.
```

## Экономная разработка с ИИ

Меньше токенов и меньше лишнего кода: сначала узкий контекст (граф), длинный CLI через **sqz**, код по **ponytail**.

### Роли инструментов

| Инструмент                                                              | Когда                                                                     | Не делать                                                                                 |
| ----------------------------------------------------------------------- | ------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| [**graphify**](../../../instructions/graphify.md)                       | Архитектура, связи: `query` / `path` / `explain`; каталог `graphify-out/` | Читать целиком `GRAPH_REPORT.md`; `graphify update .` после правок **только** `devcraft/` |
| [**code-review-graph**](../../../instructions/code-review-graph.md)     | Callers/callees, communities; старт с minimal context                     | Широкий grep вместо 1–2 graph-вызовов                                                     |
| [**codebase-memory-mcp**](../../../instructions/codebase-memory-mcp.md) | `search_graph` / `trace_path` / `detect_changes`                          | Полная переиндексация без изменений                                                       |
| [**sqz**](../../../instructions/sqz.md)                                 | Длинный stdout: `cmd 2>&1 \| sqz compress`                                | Pipe для REPL / `&&` / `;`; уже короткий вывод                                            |
| [**ponytail**](../../../instructions/ponytail.md)                       | YAGNI → reuse → stdlib → минимум diff                                     | Абстракции «на будущее»; фикс только у одного caller                                      |

Краткие установки и примеры — на страницах инструментов в [Инструкциях](../../../instructions/).

В DevCraft: reuse `JsonResponse`, `AdminLink`, `DleDataService`, Metro; `graphify update .` для host DLE — после правок `engine/` / шаблонов, не после чистого `devcraft/`.

### Промпт: экономный цикл агента

```markdown
Перед исследованием кода:

1. Если есть graphify-out/ — graphify query / path / explain (не GRAPH_REPORT целиком). См. instructions/graphify.md
2. Или code-review-graph / codebase-memory: minimal context → узкий набор файлов.
3. Длинный CLI — через sqz compress (stdin pipe). См. instructions/sqz.md
4. Перед кодом — ponytail: YAGNI, reuse DevCraft API, минимальный diff. См. instructions/ponytail.md
5. graphify update . только после правок
```

## См. также

- [Начало работы](../getting_started.md)
- [Конституция PHP](../../../instructions/constitution.md)
- [Graphify](../../../instructions/graphify.md) · [Code Review Graph](../../../instructions/code-review-graph.md) · [Codebase Memory](../../../instructions/codebase-memory-mcp.md) · [sqz](../../../instructions/sqz.md) · [Ponytail](../../../instructions/ponytail.md)
- [Генератор модулей](new_module.md)
