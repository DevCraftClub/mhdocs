---
tags:
  - Инструкция
  - ИИ
  - code-review-graph
title: "Code Review Graph"
description: "Установка и использование code-review-graph — структурный граф кода через MCP."
keywords: "code-review-graph, MCP, ИИ, Tree-sitter"
author: "Maxim Harder"
og:title: "Code Review Graph"
og:description: "Локальный граф кода для ИИ через MCP"
og:image: "https://devcraft.club/data/assets/logo_default/devcraftx2.png"
---

# Code Review Graph

**code-review-graph** (CRG) разбирает репозиторий через Tree-sitter и отдаёт ИИ-агенту узкий контекст: кто кого вызывает, радиус влияния правки, сообщества модулей. Работает локально через MCP.

## Ссылки

- Сайт: [code-review-graph.com](https://code-review-graph.com/)
- Репозиторий: [tirth8205/code-review-graph](https://github.com/tirth8205/code-review-graph)

## Установка

```bash
pip install code-review-graph
code-review-graph install
code-review-graph build
```

`install` подключает MCP к поддерживаемым редакторам (Cursor, Claude Code и др.). После установки перезапустите редактор.

## Использование

В агенте начинайте с минимального контекста, например инструментов вроде `get_minimal_context` / `detail_level=minimal`, затем при необходимости `get_impact_radius`, `query_graph`.

**Когда полезно:** review, поиск callers/callees, оценка влияния диффа.

**Не нужно:** широкий grep по всему репо вместо одного-двух запросов к графу.

## См. также

- [Graphify](graphify.md)
- [Codebase Memory MCP](codebase-memory-mcp.md)
- [ИИ-инструменты DevCraft](../dev/dle/devcraft_admin/guides/ai_tools.md)
