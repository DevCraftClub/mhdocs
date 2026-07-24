---
tags:
  - Инструкция
  - ИИ
  - graphify
title: "Graphify"
description: "Установка и использование Graphify — граф знаний по кодовой базе для ИИ-агентов."
keywords: "graphify, ИИ, код, документация"
author: "Maxim Harder"
og:title: "Graphify"
og:description: "Граф знаний для ИИ-ассистентов"
og:image: "https://devcraft.club/data/assets/logo_default/devcraftx2.png"
---

# Graphify

**Graphify** строит по проекту граф связей (классы, вызовы, документы) и отвечает на вопросы через `query` / `path` / `explain`, вместо того чтобы читать весь репозиторий целиком.

## Ссылки

- Сайт: [graphify.com](https://graphify.com/)
- Репозиторий: [Graphify-Labs/graphify](https://github.com/Graphify-Labs/graphify)

## Установка

```bash
uv tool install graphifyy
graphify install
```

Пакет на PyPI называется `graphifyy`, команда в терминале — `graphify`.

## Использование

В корне проекта:

```bash
graphify .
graphify query "как устроен AJAX в DevCraft"
graphify path "ClassA" "ClassB"
graphify explain "Application"
graphify update .
```

Результаты обычно в каталоге `graphify-out/`.

**Когда полезно:** разобраться в архитектуре и связях файлов.

**Не нужно:** читать целиком `GRAPH_REPORT.md` вместо точечных запросов; после правок только в `devcraft/` граф host DLE обычно **не** обновляют — `graphify update .` имеет смысл после изменений `engine/` / шаблонов хоста.

## См. также

- [Code Review Graph](code-review-graph.md)
- [Codebase Memory MCP](codebase-memory-mcp.md)
- [ИИ-инструменты DevCraft](../dev/dle/devcraft_admin/guides/ai_tools.md)
