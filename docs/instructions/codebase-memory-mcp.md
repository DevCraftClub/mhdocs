---
tags:
  - Инструкция
  - ИИ
  - codebase-memory
title: "Codebase Memory MCP"
description: "Установка и использование codebase-memory-mcp — граф памяти по коду для агентов."
keywords: "codebase-memory-mcp, MCP, ИИ, search_graph"
author: "Maxim Harder"
og:title: "Codebase Memory MCP"
og:description: "Поиск по графу кода через MCP"
og:image: "https://devcraft.club/data/assets/logo_default/devcraftx2.png"
---

# Codebase Memory MCP

**codebase-memory-mcp** индексирует проект в локальный граф и даёт агенту поиск по символам, путям вызовов и изменениям (`search_graph`, `trace_path`, `detect_changes`).

## Ссылки

- Документация: [deusdata.github.io/codebase-memory-mcp](https://deusdata.github.io/codebase-memory-mcp/)
- Репозиторий: [DeusData/codebase-memory-mcp](https://github.com/DeusData/codebase-memory-mcp)

## Установка

Способ зависит от платформы (бинарник, npm, Homebrew и др.) — актуальные команды в [README](https://github.com/DeusData/codebase-memory-mcp). После установки подключите MCP-сервер в редакторе и проиндексируйте проект.

Пример CLI (имена проектов смотрите через `list_projects`):

```bash
codebase-memory-mcp cli search_graph --project my-project --name-pattern '.*Handler.*' --label Function
```

## Использование

Типичный порядок: найти символ (`search_graph`) → посмотреть код / путь (`get_code_snippet`, `trace_path`) → при диффе — `detect_changes`.

**Когда полезно:** навигация по большому коду, влияние изменений.

**Не нужно:** полная переиндексация без реальных изменений в репозитории.

## См. также

- [Graphify](graphify.md)
- [Code Review Graph](code-review-graph.md)
- [ИИ-инструменты DevCraft](../dev/dle/devcraft_admin/guides/ai_tools.md)
